// Ludok Taste: el diario de restaurantes. Los textos salen de su README.
import type { App } from './types';

const taste: App = {
  slug: 'taste',
  name: 'Ludok Taste',
  short: 'Taste',
  repo: 'iamLudok/Ludok-taste',
  available: true,
  pay: true,
  platforms: ['Android'],
  schemaCategory: 'LifestyleApplication',
  text: {
    es: {
      title: 'diario de restaurantes y platos, sin cuenta',
      category: 'Restaurantes',
      tagline: 'Qué pediste en cada restaurante, y si mereció la pena.',
      lead: 'Cada plato que pruebas, con su nota, un comentario y una foto. Vuelves a un sitio y sabes cuál era el bueno y cuál juraste no volver a pedir.',
      features: [
        {
          title: '¿Qué pido hoy?',
          body: 'En cada restaurante: tus favoritos (4★ o más), lo que aún no has probado y lo que ya sabes que no (2★ o menos).',
        },
        {
          title: 'Restaurante, plato y visita',
          body: 'Cada restaurante con su carta; cada plato con categoría y precio; cada vez que lo comes, con fecha, nota de 1 a 5, comentario y foto.',
        },
        {
          title: 'La carta, al completo',
          body: 'Cuánto de la carta llevas probado, y qué platos ya no están en ella.',
        },
        {
          title: 'Estadísticas',
          body: 'Restaurantes, platos probados, cartas completadas, nota media y tus platos mejor valorados.',
        },
        {
          title: 'Gasto estimado',
          body: 'Por restaurante y en total, a partir del precio de cada plato que apuntas.',
        },
        {
          title: 'Copias con fotos',
          body: 'Un solo fichero con todo, fotos incluidas, que se importa en cualquier móvil.',
        },
      ],
      privacy: 'Nada. Solo la copia automática a tu Nextcloud, si la activas, que va directa a tu servidor.',
    },
    en: {
      title: 'a restaurant and dish diary, no account needed',
      category: 'Restaurants',
      tagline: 'What you ordered at every restaurant, and whether it was worth it.',
      lead: 'Every dish you try, with its rating, a comment and a photo. Go back to a place and know which dish was the great one and which one you swore never to order again.',
      features: [
        {
          title: 'What should I order today?',
          body: 'In every restaurant: your favourites (4★ or more), what you have not tried yet and what you already know to avoid (2★ or less).',
        },
        {
          title: 'Restaurant, dish and visit',
          body: 'Every restaurant with its menu; every dish with its category and price; every time you eat it, with the date, a 1 to 5 rating, a comment and a photo.',
        },
        {
          title: 'The whole menu',
          body: 'How much of the menu you have tried, and which dishes are no longer on it.',
        },
        {
          title: 'Stats',
          body: 'Restaurants, dishes tried, menus completed, average rating and your best rated dishes.',
        },
        {
          title: 'Estimated spending',
          body: 'Per restaurant and overall, from the price of each dish you log.',
        },
        {
          title: 'Backups with photos',
          body: 'A single file with everything, photos included, that imports on any phone.',
        },
      ],
      privacy:
        'Nothing. Only the automatic backup to your Nextcloud, if you turn it on, which goes straight to your server.',
    },
  },
};

export default taste;
