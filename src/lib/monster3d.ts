// El visor 3D de Ludok Monster para la web: el mismo que el de la app (src/components/Visor3D.tsx
// de Ludok Monster), sin las botellas ni los toques, y con fetch normal en vez de leer del APK.
// Mismos materiales, tapas, anillas y escalas, para que la lata se vea igual que en el móvil.
//
// Solo se carga en el navegador y cuando el visor está a la vista: three.js y los modelos pesan.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export interface LataVisor {
  slug: string;
  anilla: 'aro_plateado' | 'aro_negro' | 'negra_lisa' | 'logo_negra';
  tapa: 'aluminio' | 'negra' | 'verde' | 'dorada';
  colorAnilla?: 'negro' | 'naranja' | 'azul' | 'morado';
  alto: number;
  diametro: number;
  x: number;
  y: number;
}

export type Modo = 'torre' | 'lata';

const lineal = (r: number, g: number, b: number) =>
  new THREE.Color().setRGB(r, g, b, THREE.LinearSRGBColorSpace);

// Por las dos caras: el fondo de la lata y piezas de la tapa son superficies sueltas.
const AMBAS = THREE.DoubleSide;

function metal(color: THREE.Color, rugosidad: number) {
  return new THREE.MeshStandardMaterial({ color, metalness: 1, roughness: rugosidad, side: AMBAS });
}

/** Laca negra: sin metal y con poco brillo; como metal, vista de canto parecía plateada. */
function laca(color: THREE.Color, rugosidad: number) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0,
    roughness: rugosidad,
    specularIntensity: 0.15,
    side: AMBAS,
  });
}

const ALUMINIO = metal(lineal(0.62, 0.66, 0.7), 0.27);
const PULIDO = metal(lineal(0.72, 0.76, 0.8), 0.19);
const TAPAS = {
  aluminio: { panel: ALUMINIO, reborde: PULIDO },
  negra: { panel: laca(lineal(0.004, 0.0045, 0.005), 0.4), reborde: laca(lineal(0.005, 0.0055, 0.006), 0.32) },
  verde: { panel: metal(lineal(0.1, 0.3, 0), 0.24), reborde: metal(lineal(0.12, 0.34, 0), 0.18) },
  dorada: { panel: metal(lineal(0.36, 0.22, 0.05), 0.26), reborde: metal(lineal(0.42, 0.27, 0.07), 0.2) },
} as const;
const COLOR_ANILLA = {
  negro: lineal(0.0013, 0.0018, 0.0015),
  naranja: lineal(0.38, 0.06, 0),
  azul: lineal(0, 0.05, 0.38),
  morado: lineal(0.08, 0.012, 0.3),
};

/** Nombre de la pieza en Blender («Cuerpo | …»), subiendo hasta el nodo que lo lleve. */
function pieza(obj: THREE.Object3D): string {
  for (let o: THREE.Object3D | null = obj; o; o = o.parent) {
    if (/^(Cuerpo|Tapa|Tapón|Anilla|Base|Cuello|Etiqueta)/.test(o.name)) return o.name;
  }
  return '';
}

/**
 * Monta el visor en `contenedor`. `base` es la carpeta con modelos/ y etiquetas/. Avisa del
 * progreso con `onProgreso` (0 a 1) para que se vea que algo carga: la torre son varios MB.
 */
export function montarVisor(
  contenedor: HTMLElement,
  latas: LataVisor[],
  modo: Modo,
  base: string,
  onProgreso: (fraccion: number) => void,
): Promise<void> {
  const gestor = new THREE.LoadingManager();
  gestor.onProgress = (_url, hechos, total) => onProgreso(hechos / total);
  const cargador = new GLTFLoader(gestor);
  const texturas = new THREE.TextureLoader(gestor);
  const modelos = new Map<string, Promise<THREE.Group>>();

  const modelo = (nombre: string) => {
    let p = modelos.get(nombre);
    if (!p) {
      p = cargador.loadAsync(`${base}modelos/${nombre}.glb`).then((g) => g.scene);
      modelos.set(nombre, p);
    }
    return p;
  };

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, modo === 'torre' ? 1.5 : 2));
  renderer.setSize(Math.max(contenedor.clientWidth, 1), Math.max(contenedor.clientHeight, 1));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  contenedor.appendChild(renderer.domElement);

  const textura = (ruta: string) =>
    texturas.loadAsync(`${base}${ruta}`).then((t) => {
      // Convención glTF: las UV ya vienen con el origen arriba, así que la imagen no se voltea.
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return t;
    });

  // Fondo transparente: la lata flota sobre la página, con su halo morado detrás.
  const escena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  escena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const luz = new THREE.DirectionalLight(0xffffff, 1.2);
  luz.position.set(-1.5, 2, 2.5);
  escena.add(luz);

  const camara = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true;
  controles.enablePan = false;
  // La rueda del ratón movería la cámara en vez de bajar por la página: solo con los dedos.
  controles.enableZoom = false;
  // La torre es plana (una sola fila de latas en fondo): de canto se queda en una raya. Por eso no
  // da la vuelta entera como la lata: se mece de un lado a otro, y a mano no pasa de 50 grados.
  let tocado = false;
  controles.addEventListener('start', () => (tocado = true));
  if (modo === 'lata') {
    controles.autoRotate = true;
    controles.autoRotateSpeed = 2;
    controles.addEventListener('start', () => (controles.autoRotate = false));
  } else {
    controles.minAzimuthAngle = -0.87;
    controles.maxAzimuthAngle = 0.87;
  }
  const reloj = new THREE.Clock();
  const esfera = new THREE.Spherical();
  const mecer = () => {
    esfera.setFromVector3(camara.position.clone().sub(controles.target));
    esfera.theta = Math.sin(reloj.getElapsedTime() * 0.4) * 0.5;
    camara.position.setFromSpherical(esfera).add(controles.target);
  };

  const raiz = new THREE.Group();
  escena.add(raiz);

  const montarLata = async (lata: LataVisor) => {
    const grupo = (await modelo(`lata_${lata.anilla}`)).clone(true);
    // En la torre van 47 latas a la vez: la etiqueta pequeña basta a ese tamaño.
    const etiqueta = await textura(
      modo === 'torre' ? `etiquetas/${lata.slug}_torre.jpg` : `etiquetas/${lata.slug}.jpg`,
    );
    const papel = new THREE.MeshStandardMaterial({ map: etiqueta, metalness: 0.15, roughness: 0.4, side: AMBAS });
    const tapa = TAPAS[lata.tapa];
    const color = lata.colorAnilla ?? 'negro';
    const anillaMat =
      lata.anilla === 'aro_plateado'
        ? ALUMINIO
        : color === 'negro'
          ? laca(COLOR_ANILLA[color], 0.35)
          : metal(COLOR_ANILLA[color], 0.3);
    let emblema: THREE.MeshStandardMaterial | undefined;
    if (lata.anilla === 'logo_negra') {
      const mapa = await textura(`modelos/emblema_${color}.png`);
      mapa.wrapS = mapa.wrapT = THREE.ClampToEdgeWrapping;
      emblema = new THREE.MeshStandardMaterial({ map: mapa, metalness: 1, roughness: 0.3, side: AMBAS });
    }

    grupo.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      const nombre = pieza(o);
      if (nombre.startsWith('Cuerpo')) o.material = papel;
      else if (nombre.includes('remache_central')) o.material = lata.tapa === 'aluminio' ? PULIDO : tapa.reborde;
      else if (nombre.startsWith('Anilla')) o.material = emblema && nombre.includes('logo') ? emblema : anillaMat;
      else if (nombre.includes('doble_cierre')) o.material = tapa.reborde;
      else if (nombre.startsWith('Tapa') || nombre.startsWith('Cuello')) o.material = tapa.panel;
      else if (nombre.includes('aro_de_apoyo')) o.material = PULIDO;
      else o.material = ALUMINIO;
    });
    // La lata de 500 ml mide 66 × 168 mm: las demás se escalan por diámetro y altura.
    grupo.scale.set(lata.diametro / 66, lata.alto / 168, lata.diametro / 66);
    grupo.position.set(lata.x / 1000, lata.y / 1000, 0);

    if (modo === 'lata') {
      textura(`etiquetas/${lata.slug}_hd.jpg`)
        .then((hd) => {
          papel.map = hd;
          papel.needsUpdate = true;
          etiqueta.dispose();
        })
        .catch(() => {
          // Sin HD se queda la normal: algo menos nítida, pero se ve.
        });
    }
    return grupo;
  };

  const encuadrar = () => {
    const w = contenedor.clientWidth;
    const h = contenedor.clientHeight;
    if (w < 2 || h < 2) return;
    renderer.setSize(w, h);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
    if (raiz.children.length === 0) return;
    // Que quepa todo con un poco de aire, de frente y algo desde arriba.
    const caja = new THREE.Box3().setFromObject(raiz);
    const centro = caja.getCenter(new THREE.Vector3());
    const tam = caja.getSize(new THREE.Vector3());
    const vertical = THREE.MathUtils.degToRad(camara.fov);
    const ajusteAlto = tam.y / 2 / Math.tan(vertical / 2);
    const ajusteAncho = tam.x / 2 / Math.tan(vertical / 2) / camara.aspect;
    const distancia = Math.max(ajusteAlto, ajusteAncho) * (modo === 'lata' ? 1.2 : 1.05) + tam.z;
    controles.target.copy(centro);
    camara.position.set(
      centro.x + (modo === 'lata' ? distancia * 0.25 : 0),
      centro.y + distancia * 0.18,
      centro.z + distancia,
    );
    controles.update();
  };

  new ResizeObserver(encuadrar).observe(contenedor);

  // Solo se pinta mientras se ve: fuera de pantalla no gasta batería.
  let visible = true;
  new IntersectionObserver(([entrada]) => (visible = entrada?.isIntersecting ?? true)).observe(contenedor);
  renderer.setAnimationLoop(() => {
    if (!visible) return;
    if (modo === 'torre' && !tocado && raiz.children.length > 0) mecer();
    controles.update();
    renderer.render(escena, camara);
  });

  return Promise.allSettled(latas.map(montarLata)).then((resultados) => {
    for (const r of resultados) if (r.status === 'fulfilled') raiz.add(r.value);
    if (raiz.children.length === 0) throw new Error('no se ha podido cargar ninguna lata');
    encuadrar();
  });
}
