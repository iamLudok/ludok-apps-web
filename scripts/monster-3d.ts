// Prepara el 3D de Ludok Monster para la web, a partir de la app (../Ludok Monster, solo lectura):
// la torre con todas las latas, colocada con su propio disponerTorre(), y una lata suelta. Escribe
// los datos del visor en src/data/monster3d.json y copia a public/monster3d/ solo los ficheros que
// hacen falta. Se vuelve a ejecutar si la app gana latas: npm run assets:monster
//
// Las botellas se quedan fuera a propósito: pesan casi 4 MB y la pirámide se entiende sin ellas.
import { copyFileSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATALOGO } from '../../Ludok Monster/src/lib/catalogo';
import { disponerTorre } from '../../Ludok Monster/src/lib/torre';
import { paraVisor, type LataVisor } from '../../Ludok Monster/src/lib/visor';

/** La lata suelta: la Original, la que todo el mundo reconoce. */
const LATA = 'original_500ml';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const app = join(raiz, '../Ludok Monster/public');
const destino = join(raiz, 'public/monster3d');

const latas = CATALOGO.filter((lata) => !lata.modelo);
const porSlug = new Map(latas.map((lata) => [lata.slug, lata]));
const torre: LataVisor[] = disponerTorre(latas.map((lata) => lata.slug)).map((hueco) =>
  paraVisor(porSlug.get(hueco.slug)!, hueco.x, hueco.y),
);
const sola = paraVisor(porSlug.get(LATA)!);

const ficheros = new Set<string>([`etiquetas/${LATA}.jpg`, `etiquetas/${LATA}_hd.jpg`]);
for (const lata of [...torre, sola]) {
  ficheros.add(`modelos/lata_${lata.anilla}.glb`);
  if (lata.anilla === 'logo_negra') ficheros.add(`modelos/emblema_${lata.colorAnilla ?? 'negro'}.png`);
}
for (const lata of torre) ficheros.add(`etiquetas/${lata.slug}_torre.jpg`);

rmSync(destino, { recursive: true, force: true });
for (const fichero of ficheros) {
  mkdirSync(dirname(join(destino, fichero)), { recursive: true });
  copyFileSync(join(app, fichero), join(destino, fichero));
}

mkdirSync(join(raiz, 'src/data'), { recursive: true });
writeFileSync(join(raiz, 'src/data/monster3d.json'), `${JSON.stringify({ torre, lata: sola }, null, 2)}\n`);
console.log(`${torre.length} latas en la torre, ${ficheros.size} ficheros en public/monster3d/`);
