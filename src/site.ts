// Enlaces y rutas de la web en un solo sitio: si cambia el dominio, la página de Ko-fi o una ruta,
// se toca aquí (y en astro.config.mjs), no en cada página.

export type Lang = 'es' | 'en';

/** Qué página es, para marcarla en la cabecera y saber adónde lleva «Descargar». */
export type Current = 'home' | 'app' | 'install' | 'privacy';

export const AUTHOR = 'Luken Iriondo';
export const GITHUB_URL = 'https://github.com/iamLudok';
export const PORTFOLIO_URL = 'https://iamludok.github.io/';

// La página de Ko-fi donde se paga lo que se quiera, por ejemplo 'https://ko-fi.com/tu-usuario'.
// Mientras sea null, los botones de pago no salen en la web publicada: mejor ninguno que uno que
// lleve el dinero a otra persona. En local se ve un aviso en su lugar para no olvidarlo.
export const KOFI_URL: string | null = 'https://ko-fi.com/iamludok';

// Todas las apps piden Android 7.0: es el minSdk 24 de Expo SDK 57.
export const MIN_ANDROID = '7.0';

// En GitHub Pages todo cuelga de /<repo>/: un enlace escrito como «/instalar/» llevaría fuera de
// la web. Por eso las rutas internas pasan siempre por href().
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path: string): string {
  return BASE + path;
}

// Las rutas de cada idioma no se traducen solas (instalar / install), así que van a mano.
export const paths = {
  home: { es: '/', en: '/en/' },
  install: { es: '/instalar/', en: '/en/install/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
} as const;

export function appPaths(slug: string): Record<Lang, string> {
  return { es: `/apps/${slug}/`, en: `/en/apps/${slug}/` };
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
