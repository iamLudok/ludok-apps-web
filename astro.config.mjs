// Configuración de la web. SITE_URL y BASE_PATH los pone la Action de GitHub Pages (la web sale
// en https://<usuario>.github.io/<repo>/, con el repo como prefijo de todas las rutas); en local,
// la raíz. Con un dominio propio basta con que la Action deje BASE_PATH en «/».
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://iamludok.github.io',
  base: process.env.BASE_PATH ?? '/',
});
