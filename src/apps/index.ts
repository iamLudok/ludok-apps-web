// Las apps, en el orden en que salen en la web: primero las de uso diario, luego las que piden un
// servidor propio y al final la de fan. Para añadir una, un fichero como los demás y una línea aquí
// (y su icono en components/AppIcon.astro).
import been from './been';
import count from './count';
import home from './home';
import monster from './monster';
import sound from './sound';
import taste from './taste';
import time from './time';
import type { App } from './types';
import wallet from './wallet';

export type { App } from './types';

export const apps: App[] = [been, time, taste, wallet, count, sound, home, monster];

export function otherApps(slug: string): App[] {
  return apps.filter((app) => app.slug !== slug);
}
