// Ludok Time: series, películas, libros y manga. Los textos salen de su README.
import type { App } from './types';

const time: App = {
  slug: 'time',
  name: 'Ludok Time',
  short: 'Time',
  repo: 'iamLudok/Ludok-time',
  available: false,
  pay: true,
  platforms: ['Android'],
  schemaCategory: 'EntertainmentApplication',
  text: {
    es: {
      title: 'series, películas, libros y manga en tu móvil, sin cuenta',
      category: 'Series, pelis y libros',
      tagline: 'Todo lo que ves y lees: series, películas, libros y manga.',
      lead: 'Apunta cada episodio, cada página y cada capítulo, y entérate de cuándo sale el siguiente. Nació después de perder un historial entero en otra app: aquí tus datos son tuyos y viven en tu móvil.',
      features: [
        {
          title: 'Series, episodio a episodio',
          body: 'Con «ver siguiente», la imagen de cada episodio y tu progreso de un vistazo.',
        },
        {
          title: 'Películas, libros y manga',
          body: 'Películas vistas o pendientes, libros por página con el porcentaje leído y manga por capítulo, con enlace para leerlo.',
        },
        {
          title: 'Próximos',
          body: 'Cuándo sale el siguiente episodio de cada serie que sigues, ordenado por lo que llega antes.',
        },
        {
          title: 'Actores',
          body: 'El reparto de cada serie y película, y todo lo que ha hecho cada actor. Sigue a los tuyos y sus estrenos salen en Próximos.',
        },
        {
          title: 'Verla otra vez',
          body: 'Empieza una serie de nuevo sin perder cuándo viste cada episodio la primera vez.',
        },
        {
          title: 'Estadísticas',
          body: 'Tus números de todo lo visto y lo leído, con cada visionado sumado.',
        },
      ],
      privacy:
        'Tu biblioteca no sale del móvil. Para buscar títulos, fichas y estrenos, la app consulta TMDB, Open Library, MangaDex e inManga, sin cuenta. Y la copia a tu Nextcloud, si la activas.',
      needs: ['Conexión a internet para buscar títulos y ver los próximos estrenos.'],
      shots: [
        {
          image: 'biblioteca',
          alt: 'La biblioteca de Ludok Time: las series en curso con su carátula, el siguiente episodio y cuántos quedan',
          title: 'Sigue donde lo dejaste',
          body: 'Cada serie con su carátula, el siguiente episodio y cuántos te quedan. Un toque y está marcado.',
        },
        {
          image: 'proximos',
          alt: 'Próximos: cuándo sale el siguiente episodio de cada serie y los estrenos de los actores que sigues',
          title: 'Lo que llega esta semana',
          body: 'Cuándo sale el siguiente episodio de lo que sigues, y los estrenos de tus actores favoritos.',
        },
        {
          image: 'estadisticas',
          alt: 'Las estadísticas de Ludok Time: series, películas, libros y manga, con episodios vistos y tiempo visto',
          title: 'Todo lo que has visto, en números',
          body: 'Episodios, películas, páginas y el tiempo real que les has dedicado, con la duración de cada episodio.',
        },
      ],
    },
    en: {
      title: 'TV shows, movies, books and manga on your phone, no account needed',
      category: 'Shows, movies and books',
      tagline: 'Everything you watch and read: TV shows, movies, books and manga.',
      lead: 'Log every episode, every page and every chapter, and find out when the next one comes out. It was born after losing an entire watch history in another app: here your data is yours and lives on your phone.',
      features: [
        {
          title: 'TV shows, episode by episode',
          body: 'With up next, a still for every episode and your progress at a glance.',
        },
        {
          title: 'Movies, books and manga',
          body: 'Movies watched or on your list, books by page with the percentage read, and manga by chapter, with a link to read it.',
        },
        {
          title: 'Upcoming',
          body: 'When the next episode of every show you follow comes out, sorted by what arrives first.',
        },
        {
          title: 'Actors',
          body: 'The cast of every show and movie, and everything each actor has done. Follow your favourites and their new releases show up in Upcoming.',
        },
        {
          title: 'Watch it again',
          body: 'Start a show over without losing when you watched each episode the first time.',
        },
        {
          title: 'Stats',
          body: 'Your numbers for everything you have watched and read, with every rewatch counted.',
        },
      ],
      privacy:
        'Your library never leaves your phone. To search titles, details and release dates, the app queries TMDB, Open Library, MangaDex and inManga, with no account. Plus the backup to your Nextcloud, if you turn it on.',
      needs: ['An internet connection to search titles and see upcoming releases.'],
      shots: [
        {
          image: 'biblioteca',
          alt: 'The Ludok Time library (in Spanish): shows in progress with their poster, the next episode and how many are left',
          title: 'Pick up where you left off',
          body: 'Every show with its poster, the next episode and how many are left. One tap and it is marked.',
        },
        {
          image: 'proximos',
          alt: 'Upcoming (in Spanish): when the next episode of each show comes out, and new releases from the actors you follow',
          title: 'What is coming this week',
          body: 'When the next episode of what you follow comes out, and new releases from your favourite actors.',
        },
        {
          image: 'estadisticas',
          alt: 'Ludok Time stats (in Spanish): shows, movies, books and manga, with episodes watched and time watched',
          title: 'Everything you have watched, in numbers',
          body: 'Episodes, movies, pages and the real time you have spent on them, using the actual length of each episode.',
        },
      ],
    },
  },
};

export default time;
