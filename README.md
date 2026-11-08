# Ludok Web

La web de las apps Ludok: catálogo, una página por app, guía de instalación y «paga lo que quieras»
con Ko-fi. En castellano (`/`) e inglés (`/en/`). Astro, estática, sin JavaScript de terceros ni
cookies. Mismo estilo «Sala oscura» y misma base que la web de Ludok Sound.

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # tipos
npm run build     # → dist/
```

Hace falta Node 22.22 o superior.

## Dónde va cada cosa

```
src/site.ts           enlaces, rutas y KOFI_URL
src/i18n.ts           todos los textos de la web, menos los de cada app
src/apps/<app>.ts     cada app: textos en los dos idiomas, repo, si se puede descargar, si acepta pagos
src/apps/index.ts     la lista y el orden de las apps
src/lib/releases.ts   la última release de cada app, leída de GitHub al compilar
src/components/       plantillas de página (Home, AppPage, InstallPage, PrivacyPage) y piezas
public/img/<app>/     capturas
scripts/og.html       la imagen al compartir (public/og.png)
```

## Tareas habituales

- **Configurar Ko-fi**: pon tu página en `KOFI_URL` (`src/site.ts`). Mientras sea `null`, los
  botones de pago no salen en la web publicada, y en local se ve un aviso en su lugar.
- **Publicar una app que sale como «Próximamente»**: publica su release con el APK en GitHub y pon
  `available: true` en `src/apps/<app>.ts`. Versión, tamaño, fecha y enlace directo al APK salen
  solos de la release.
- **Versión nueva de una app**: nada. La Action vuelve a compilar la web cada día y recoge la
  última release.
- **Capturas**: WebP de 600×1228, recortadas sin la barra de estado, en `public/img/<app>/`, y
  una entrada en `shots` del fichero de la app con su título y su texto. Las tres primeras van en
  abanico en la cabecera; con dos o más, la página lleva el recorrido (un móvil fijo que cambia de
  pantalla al bajar). Las dos primeras de cada app salen también en la cinta de la portada.
- **3D de Ludok Monster**: `npm run assets:monster` lee la app (`../Ludok Monster`, sin tocarla),
  coloca la torre con su propio código y copia a `public/monster3d/` solo los modelos y etiquetas
  que hacen falta. Volver a ejecutarlo si la app gana latas.
- **Añadir una app**: copia un fichero de `src/apps/`, añádelo a `src/apps/index.ts` y su icono
  (el contenido de `logo/<app>.svg`, sin el fondo) a `src/components/AppIcon.astro`.

## Publicar

`.github/workflows/deploy.yml` publica en GitHub Pages en cada push a `main`, a mano y una vez al
día. En el repo: Settings → Pages → Source: GitHub Actions. Saldrá en
`https://iamludok.github.io/<repo>/`; con dominio propio no hay que tocar nada más que Pages.
