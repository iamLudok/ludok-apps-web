// La forma de cada app en la web. Los textos van en los dos idiomas con la misma forma (lo comprueba
// el tipo); lo demás (repo, si ya se puede descargar, si acepta pagos) es común a los dos.
import type { Lang } from '../site';

export interface Feature {
  title: string;
  body: string;
}

/**
 * Una captura en public/img/<slug>/<image>.webp, recortada sin barra de estado y a 600 px de
 * ancho. El título y el texto la acompañan en el recorrido de la página de la app.
 */
export interface Shot {
  image: string;
  alt: string;
  title: string;
  body: string;
}

/** Un visor 3D de Ludok Monster (components/Monster3D.astro). */
export interface Scene3D {
  modo: 'torre' | 'lata';
  title: string;
  body: string;
  /** Para lectores de pantalla: qué se ve. */
  label: string;
}

export interface AppText {
  /** Lo que va tras «Ludok X:» en el título de la página. En minúscula: va tras los dos puntos. */
  title: string;
  category: string;
  /** Una frase: sale en la tarjeta del catálogo y bajo el nombre en su página. */
  tagline: string;
  lead: string;
  features: Feature[];
  /** Qué sale del móvil y por qué. */
  privacy: string;
  /** Lo que hace falta además de un móvil Android. */
  needs?: string[];
  /** Un aviso que tiene que verse sí o sí, encima de todo lo demás. */
  note?: string;
  /** Las tres primeras van en abanico en la cabecera, y todas en el recorrido. */
  shots?: Shot[];
  /** Una torre va en la cabecera; una lata, en su propia franja. */
  scenes?: Scene3D[];
}

export interface App {
  slug: string;
  name: string;
  /** El nombre bajo el icono en la pantalla de inicio del móvil de la portada. */
  short: string;
  /** owner/repo en GitHub, de donde salen el código y el APK. */
  repo: string | null;
  /**
   * Si ya hay una release pública con su APK. Mientras no, la página sale como «Próximamente» y
   * no enlaza al repo, que puede ser privado: al publicar la release, basta con ponerlo a true.
   */
  available: boolean;
  /** Si se ofrece pagar lo que se quiera en Ko-fi. */
  pay: boolean;
  platforms: string[];
  /** Su web propia, si la tiene: sale un enlace en su página. */
  website?: string;
  /** El tipo de app para los buscadores (schema.org/applicationCategory). */
  schemaCategory: string;
  text: Record<Lang, AppText>;
}
