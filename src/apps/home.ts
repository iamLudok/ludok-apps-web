// Ludok Home: el organizador de casa, con app Android y Raspberry Pi. Los textos salen de su README.
import type { App } from './types';

const home: App = {
  slug: 'home',
  name: 'Ludok Home',
  short: 'Home',
  repo: 'iamLudok/Ludok-home',
  available: true,
  pay: true,
  platforms: ['Android', 'Raspberry Pi'],
  schemaCategory: 'UtilitiesApplication',
  text: {
    es: {
      title: 'organizador de casa con una app Android y tu Raspberry Pi',
      category: 'Casa',
      tagline: 'Tu organizador de casa: una app Android y tu Raspberry Pi.',
      lead: 'Las tareas de hoy, las medicinas, los gastos del coche, las listas, lo que quieres mirar luego, las noticias del día en audio y los contenedores Docker de tu Pi. Todo en tu propio hardware, sin suscripciones ni IA en la nube.',
      features: [
        {
          title: 'Hoy',
          body: 'El tiempo, notas rápidas, las medicinas que faltan, las tareas y eventos del día y las noticias que tu Pi ha preparado esa mañana, en audio.',
        },
        {
          title: 'Medicinas',
          body: 'Horarios, recordatorios que funcionan sin conexión y con la app cerrada, y un calendario de tomas.',
        },
        {
          title: 'Coche',
          body: 'Gasolina, taller y piezas, con gráfica, consumo y precio medio por litro.',
        },
        {
          title: 'Listas y guardados',
          body: 'La compra para compartir por WhatsApp, deseos e ideas de regalo, y reels, apps y webs para mirar luego, desde «Compartir».',
        },
        {
          title: 'Noticias en audio',
          body: 'Cada mañana tu Pi lee tus fuentes de Nextcloud News y las convierte en voz con Piper, en local.',
        },
        {
          title: 'Tu servidor, en el móvil',
          body: 'Arranca, para y actualiza tus contenedores Docker (con vuelta atrás si algo falla), mira la temperatura de la Pi, mide tu conexión y ve quién está en tu red.',
        },
      ],
      privacy:
        'Todo queda entre tu móvil, tu Pi y tu Nextcloud. Solo salen de tu red tres cosas, sin cuenta: la vista previa de los enlaces que guardas, el tiempo (tu ubicación aproximada o la ciudad que elijas, a Open-Meteo) y el test de velocidad (con Cloudflare).',
      needs: [
        'Una Raspberry Pi 4 o 5 con Nextcloud (News, Calendar o Deck, y Files).',
        'Docker en la Pi, para la pantalla Servidor (opcional).',
        'Tailscale, para usarla fuera de casa (opcional).',
      ],
      // Capturas reales con lo personal difuminado: ubicación, medicinas y tareas.
      shots: [
        {
          image: 'hoy',
          alt: 'La pantalla Hoy de Ludok Home: el tiempo por horas, notas, medicinas y tareas, con los datos personales difuminados',
          title: 'Tu día, en una pantalla',
          body: 'El tiempo y cuándo va a llover, tus notas, las medicinas que faltan y las tareas de tu Nextcloud.',
        },
        {
          image: 'noticias',
          alt: 'Las noticias del día en Ludok Home: un reproductor con 12 noticias en audio y el índice de cada una',
          title: 'Las noticias, en audio',
          body: 'Cada mañana tu Pi lee tus fuentes y las convierte en voz con Piper. Las escuchas mientras desayunas y saltas de una a otra.',
        },
        {
          image: 'medicinas',
          alt: 'Las medicinas en Ludok Home: las tomas de hoy y el registro de dos semanas, con los nombres difuminados',
          title: 'Ni una toma olvidada',
          body: 'Recordatorios que funcionan sin conexión y con la app cerrada, y el registro de tomas de dos semanas o del mes.',
        },
        {
          image: 'coche',
          alt: 'La pantalla Coche de Ludok Home: el gasto del mes y de los últimos seis meses en gasolina, taller y recambios',
          title: 'Lo que cuesta tu coche',
          body: 'Gasolina, taller y recambios, con la gráfica de los últimos seis meses y el precio medio por litro.',
        },
      ],
    },
    en: {
      title: 'a home organizer with an Android app and your Raspberry Pi',
      category: 'Home',
      tagline: 'Your home organizer: an Android app plus your Raspberry Pi.',
      lead: 'Today’s tasks, medicines, car expenses, lists, things to check later, the day’s news as audio and your Pi’s Docker containers. All on your own hardware, with no subscriptions and no AI cloud services.',
      features: [
        {
          title: 'Today',
          body: 'The weather, quick notes, medicines still to take, today’s tasks and events, and the news your Pi prepared that morning, as audio.',
        },
        {
          title: 'Medicines',
          body: 'Schedules, reminders that work offline and with the app closed, and an adherence calendar.',
        },
        {
          title: 'Car',
          body: 'Fuel, workshop and parts, with a chart, consumption and average price per litre.',
        },
        {
          title: 'Lists and saved',
          body: 'A shopping list to share on WhatsApp, wishlists and gift ideas, and reels, apps and websites to check later, straight from Share.',
        },
        {
          title: 'News as audio',
          body: 'Every morning your Pi reads your Nextcloud News feeds and turns them into speech with Piper, locally.',
        },
        {
          title: 'Your server, on your phone',
          body: 'Start, stop and update your Docker containers (with automatic rollback if something fails), check the Pi’s temperature, test your connection and see who is on your network.',
        },
      ],
      privacy:
        'Everything stays between your phone, your Pi and your Nextcloud. Only three things leave your network, with no account: previews of the links you save, the weather (your approximate location or the city you choose, sent to Open-Meteo) and the speed test (with Cloudflare).',
      needs: [
        'A Raspberry Pi 4 or 5 running Nextcloud (News, Calendar or Deck, and Files).',
        'Docker on the Pi, for the Server screen (optional).',
        'Tailscale, to use it away from home (optional).',
      ],
      shots: [
        {
          image: 'hoy',
          alt: 'The Today screen in Ludok Home (in Spanish): hourly weather, notes, medicines and tasks, with personal details blurred',
          title: 'Your day, on one screen',
          body: 'The weather and when it will rain, your notes, the medicines still to take and your Nextcloud tasks.',
        },
        {
          image: 'noticias',
          alt: 'The day’s news in Ludok Home (in Spanish): a player with 12 stories as audio and the index of each one',
          title: 'The news, as audio',
          body: 'Every morning your Pi reads your feeds and turns them into speech with Piper. Listen over breakfast and jump between stories.',
        },
        {
          image: 'medicinas',
          alt: 'Medicines in Ludok Home (in Spanish): today’s doses and a two week record, with the names blurred',
          title: 'Never miss a dose',
          body: 'Reminders that work offline and with the app closed, and a two week or monthly record of every dose.',
        },
        {
          image: 'coche',
          alt: 'The Car screen in Ludok Home (in Spanish): spending this month and over the last six months on fuel, workshop and parts',
          title: 'What your car costs',
          body: 'Fuel, workshop and parts, with a chart of the last six months and the average price per litre.',
        },
      ],
    },
  },
};

export default home;
