// Ludok Sound: la app de música de SoundVault. Los textos salen de su web (Ludok Sound/website),
// resumidos, y las capturas son las mismas que usa ella.
import type { App } from './types';

const sound: App = {
  slug: 'sound',
  name: 'Ludok Sound',
  short: 'Sound',
  repo: 'iamLudok/SounDouk',
  available: false,
  pay: true,
  platforms: ['Android', 'Android Auto', 'Linux', 'Windows'],
  // Cuando su web esté publicada, pon aquí su dirección (website: 'https://…') y saldrá un enlace
  // en su página.
  schemaCategory: 'MultimediaApplication',
  text: {
    es: {
      title: 'tu música para pinchar, en tu propio servidor',
      category: 'Música',
      tagline: 'Tu música para pinchar, en tu propio servidor.',
      lead: 'Escucha, ordena y prepara la biblioteca que guardas en tu Raspberry Pi. En el móvil, en el coche y en el ordenador. Sin suscripciones, sin nube ajena y sin límite de canciones.',
      features: [
        {
          title: 'Listas que se hacen solas',
          body: 'Una por cada género de tu servidor, y además por año, por energía y Joyas olvidadas: lo que te gustaba y lleva meses sin sonar.',
        },
        {
          title: 'En el coche y sin conexión',
          body: 'Android Auto con búsqueda por voz. Descarga cualquier lista y, sin cobertura, sigue sonando lo descargado.',
        },
        {
          title: 'Por ordenar',
          body: 'La bandeja de lo que llega: cada canción suena desde su drop. Desliza a la derecha y va a su género; a la izquierda, a la papelera.',
        },
        {
          title: 'Mezcla armónica',
          body: 'Mientras suena una canción, te enseña las de tu biblioteca que casan con ella por tonalidad (Camelot) y BPM.',
        },
        {
          title: 'Novedades de quien sigues',
          body: 'Lo que sacan tus artistas y sellos en Beatport y SoundCloud, para escucharlo y decidir.',
        },
        {
          title: 'Visuales de sesión',
          body: 'En el ordenador, una ventana para el proyector que dibuja cada canción a tempo con el drop.',
        },
      ],
      privacy:
        'Tu música no sale de casa: vive en tu servidor, y con token solo tus dispositivos pueden tocarlo. Favoritas, historial y ajustes se sincronizan a través de tu servidor. Para las novedades se consultan Beatport y SoundCloud.',
      needs: [
        'Un servidor SoundVault con tu carpeta de música (pensado para una Raspberry Pi).',
        'Para escuchar fuera de casa, Tailscale (opcional).',
      ],
      shots: [
        {
          image: 'reproductor',
          alt: 'El reproductor de Ludok Sound en Android: portada, onda, tonalidad, BPM, energía y calidad del fichero',
          title: 'Un reproductor hecho para pinchar',
          body: 'La onda, la tonalidad, el BPM, la energía y la calidad real del fichero, de un vistazo.',
        },
        {
          image: 'por-ordenar',
          alt: 'Por ordenar: una canción nueva con su tonalidad, BPM y energía, y los botones para decidir dónde va',
          title: 'Por ordenar: decide en segundos',
          body: 'Lo nuevo suena desde su drop. Desliza a su género o a la papelera, y te avisa si ya la tienes.',
        },
        {
          image: 'mezcla-armonica',
          alt: 'Mezcla armónica: canciones de la biblioteca que casan con la que suena, en 8A y a 122 BPM',
          title: 'Qué poner después',
          body: 'Las canciones de tu biblioteca que casan con la que suena, por tonalidad Camelot y BPM.',
        },
        {
          image: 'novedades',
          alt: 'Novedades: lanzamientos en Beatport de los sellos que sigues, con su tonalidad, BPM y fecha de salida',
          title: 'Novedades de quien sigues',
          body: 'Los lanzamientos de tus artistas y sellos en Beatport y SoundCloud, con el fragmento para escucharlo.',
        },
        {
          image: 'sin-conexion',
          alt: 'Favoritas sin conexión con el servidor: suenan las descargadas y el resto se ve apagado',
          title: 'Sin cobertura, sigue sonando',
          body: 'Si no llega al servidor pasa sola a sin conexión: suena lo descargado y el resto se ve apagado.',
        },
      ],
    },
    en: {
      title: 'your music, ready to mix, on your own server',
      category: 'Music',
      tagline: 'Your music, ready to mix, on your own server.',
      lead: 'Play, sort and prep the library you keep on your Raspberry Pi. On your phone, in your car and on your computer. No subscriptions, no third-party cloud, no track limits.',
      features: [
        {
          title: 'Playlists that build themselves',
          body: 'One for every genre on your server, plus playlists by year, by energy and Forgotten gems: what you loved and have not played in months.',
        },
        {
          title: 'In the car and offline',
          body: 'Android Auto with voice search. Download any playlist and keep listening when there is no signal.',
        },
        {
          title: 'Inbox',
          body: 'The tray for everything new: each track plays from its drop. Swipe right and it goes to its genre; left, to the trash.',
        },
        {
          title: 'Harmonic mixing',
          body: 'While a track plays, it shows the ones in your library that match it by key (Camelot) and BPM.',
        },
        {
          title: 'New releases from who you follow',
          body: 'What your artists and labels release on Beatport and SoundCloud, to preview and decide.',
        },
        {
          title: 'Session visuals',
          body: 'On the desktop, a window for the projector that draws each track on beat with the drop.',
        },
      ],
      privacy:
        'Your music never leaves home: it lives on your server, and with a token only your devices can touch it. Favorites, history and settings sync through your server. Beatport and SoundCloud are checked for new releases.',
      needs: [
        'A SoundVault server with your music folder (designed for a Raspberry Pi).',
        'To listen away from home, Tailscale (optional).',
      ],
      shots: [
        {
          image: 'reproductor',
          alt: 'The Ludok Sound player on Android: cover, waveform, key, BPM, energy and file quality',
          title: 'A player made for DJs',
          body: 'The waveform, key, BPM, energy and the real quality of the file, at a glance.',
        },
        {
          image: 'por-ordenar',
          alt: 'Inbox screen (in Spanish): a new track with its key, BPM and energy, and the buttons to decide where it goes',
          title: 'Inbox: decide in seconds',
          body: 'New tracks play from their drop. Swipe them to their genre or to the trash, and it warns you if you already have it.',
        },
        {
          image: 'mezcla-armonica',
          alt: 'Harmonic mixing (in Spanish): tracks in the library that match the one playing, in 8A at 122 BPM',
          title: 'What to play next',
          body: 'The tracks in your library that match the one playing, by Camelot key and BPM.',
        },
        {
          image: 'novedades',
          alt: 'New releases (in Spanish): Beatport releases from the labels you follow, with key, BPM and release date',
          title: 'New releases from who you follow',
          body: 'Releases from your artists and labels on Beatport and SoundCloud, with a clip to preview.',
        },
        {
          image: 'sin-conexion',
          alt: 'Favorites with the server out of reach: downloaded tracks play and the rest are dimmed',
          title: 'No signal, still playing',
          body: 'If it cannot reach the server it goes offline on its own: downloads keep playing and the rest is dimmed.',
        },
      ],
    },
  },
};

export default sound;
