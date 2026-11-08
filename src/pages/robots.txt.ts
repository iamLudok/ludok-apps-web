// robots.txt con la dirección del mapa del sitio. Se genera (no va en public/) porque la URL
// depende del dominio y del prefijo con que se publique.
import type { APIRoute } from 'astro';
import { href } from '../site';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(href('/sitemap.xml'), site ?? 'https://iamludok.github.io');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
