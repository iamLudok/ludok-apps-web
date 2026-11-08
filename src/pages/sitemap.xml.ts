// Mapa del sitio para los buscadores: portada, guía de instalación, privacidad y cada app, en los
// dos idiomas, con la URL completa (con el prefijo del repo si lo hay).
import type { APIRoute } from 'astro';
import { apps } from '../apps';
import { appPaths, href, paths, type Lang } from '../site';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://iamludok.github.io');
  const urls: string[] = [];

  for (const lang of ['es', 'en'] as Lang[]) {
    urls.push(paths.home[lang], paths.install[lang], paths.privacy[lang]);
    for (const app of apps) urls.push(appPaths(app.slug)[lang]);
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((path) => `  <url><loc>${new URL(href(path), base)}</loc></url>`),
    '</urlset>',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
