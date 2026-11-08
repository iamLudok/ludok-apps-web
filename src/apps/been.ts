// Ludok Been: el mapa de los países visitados. Los textos salen de su README.
import type { App } from './types';

const been: App = {
  slug: 'been',
  name: 'Ludok Been',
  short: 'Been',
  repo: 'iamLudok/Ludok-been',
  available: true,
  pay: true,
  platforms: ['Android'],
  schemaCategory: 'TravelApplication',
  text: {
    es: {
      title: 'el mapa de los países que has visitado, sin cuenta',
      category: 'Viajes',
      tagline: 'Los países en los que has estado, en un mapa del mundo.',
      lead: 'Marca dónde has estado y adónde quieres ir, cómo te moviste por cada país y cuánto mundo llevas visto. Sin cuenta: tu historial de viajes se queda en tu móvil.',
      features: [
        {
          title: 'Mapa del mundo interactivo',
          body: 'Toca un país para marcarlo, pellizca para acercar y arrastra para moverte. El mapa da la vuelta: puedes seguir más allá del Pacífico.',
        },
        {
          title: 'Visitado o pendiente',
          body: 'Cada país, como visitado o como «quiero ir», con el año si quieres.',
        },
        {
          title: 'Cómo te moviste',
          body: 'Avión, tren, coche, autobús, barco, moto, bici, a pie o el que escribas tú.',
        },
        {
          title: 'Estadísticas',
          body: 'Países visitados sobre el total, el porcentaje del mundo, los continentes y el desglose por continente y por transporte.',
        },
        {
          title: 'Lista por continentes',
          body: 'Todos los países agrupados por continente, con buscador.',
        },
        {
          title: 'Naciones del Reino Unido',
          body: 'Inglaterra, Escocia, Gales e Irlanda del Norte se marcan por separado, pero cuentan como un solo país en tu porcentaje.',
        },
      ],
      privacy:
        'Nada. Solo la copia automática a tu Nextcloud, si la activas, que va directa a tu servidor y a ningún otro sitio.',
      shots: [
        {
          image: 'mapa',
          alt: 'El mapa de Ludok Been: los países visitados en blanco, y arriba cuántos son y qué parte del mundo',
          title: 'Tu mundo, de un vistazo',
          body: 'Toca un país para marcarlo. Arriba, cuántos llevas y qué parte del mundo has visto.',
        },
        {
          image: 'estadisticas',
          alt: 'Las estadísticas de Ludok Been: porcentaje del mundo visitado, transportes y desglose por continente',
          title: 'Tus números de viajero',
          body: 'El porcentaje del mundo, cómo te has movido y cuánto te queda de cada continente.',
        },
      ],
    },
    en: {
      title: 'a map of the countries you have visited, no account needed',
      category: 'Travel',
      tagline: 'Every country you have been to, on a world map.',
      lead: 'Mark where you have been and where you want to go, how you got around each country and how much of the world you have seen. No account: your travel history stays on your phone.',
      features: [
        {
          title: 'Interactive world map',
          body: 'Tap a country to mark it, pinch to zoom and drag to move around. The map wraps around, so you can keep going past the Pacific.',
        },
        {
          title: 'Visited or on your list',
          body: 'Mark each country as visited or as want to go, with the year if you like.',
        },
        {
          title: 'How you got around',
          body: 'Plane, train, car, bus, boat, motorbike, bike, on foot or one of your own.',
        },
        {
          title: 'Stats',
          body: 'Countries visited out of the world total, your share of the world, continents, and a breakdown by continent and by transport.',
        },
        {
          title: 'List by continent',
          body: 'Every country grouped by continent, with search.',
        },
        {
          title: 'UK nations',
          body: 'England, Scotland, Wales and Northern Ireland are marked separately, but count as one country towards your percentage.',
        },
      ],
      privacy:
        'Nothing. Only the automatic backup to your Nextcloud, if you turn it on, which goes straight to your server and nowhere else.',
      shots: [
        {
          image: 'mapa',
          alt: 'The Ludok Been map (in Spanish): visited countries in white, with how many and what share of the world at the top',
          title: 'Your world at a glance',
          body: 'Tap a country to mark it. At the top, how many you have and how much of the world you have seen.',
        },
        {
          image: 'estadisticas',
          alt: 'Ludok Been stats (in Spanish): share of the world visited, transport and a breakdown by continent',
          title: 'Your travel numbers',
          body: 'Your share of the world, how you got around and how much of each continent is left.',
        },
      ],
    },
  },
};

export default been;
