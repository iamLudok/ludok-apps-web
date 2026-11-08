// Todos los textos de la web, en castellano y en inglés, menos los de cada app (van en src/apps/).
// Cada página es una sola plantilla que pinta el idioma que le toque: así las dos versiones no se
// descuadran, y el inglés tiene que tener la misma forma que el castellano (lo comprueba el tipo).

import { GITHUB_URL, MIN_ANDROID, type Lang } from './site';

const es = {
  meta: {
    title: 'Ludok: apps para Android sin cuentas, con tus datos en tu móvil',
    description:
      'Apps para Android gratis y de código abierto: viajes, series y libros, restaurantes, entradas, la cuadrilla, música y casa. Sin cuentas ni anuncios. Paga lo que quieras.',
  },
  nav: {
    main: 'Principal',
    apps: 'Apps',
    pay: 'Paga lo que quieras',
    install: 'Instalar',
    faq: 'Preguntas',
    download: 'Descargar',
    github: 'Código en GitHub',
    theme: 'Cambiar entre tema claro y oscuro',
    langName: 'English',
    langShort: 'EN',
    skip: 'Saltar al contenido',
  },
  hero: {
    kicker: 'Gratis · Código abierto · Paga lo que quieras',
    title: 'Lo tuyo, en tu móvil.',
    titleMuted: 'Sin cuentas ni anuncios.',
    lead: 'Apps para Android para apuntar lo que ves y lees, los países que has visitado, qué pides en cada restaurante o quién le debe qué a quién en la cuadrilla. Tus datos viven en tu móvil y en ningún otro sitio.',
    primary: 'Ver las apps',
    secondary: 'Paga lo que quieras',
    note: `Android ${MIN_ANDROID} o superior · Interfaz en castellano`,
    screenLabel: 'Las apps Ludok en la pantalla de inicio de un móvil Android',
  },
  facts: {
    apps: 'apps para Android, cada una para una cosa',
    items: [
      { value: '0 €', label: 'para descargarlas: luego pagas lo que quieras' },
      { value: '0', label: 'cuentas que crear y anuncios que ver' },
      { value: 'MIT', label: 'código abierto: léelo, compílalo y cámbialo' },
    ],
  },
  reel: {
    kicker: 'Por dentro',
    title: 'Así se ven en un móvil de verdad',
    lead: 'Capturas reales, sacadas del móvil y no maquetas: solo se han tapado los datos personales. Toca una para ver su app.',
  },
  catalog: {
    kicker: 'Las apps',
    title: 'Una app para cada cosa que quieres recordar',
    lead: 'Cada una hace una cosa y la hace bien. Todas guardan tus datos en tu móvil, con copia de seguridad.',
    soon: 'Próximamente',
    free: 'Gratis',
    more: 'Ver la app',
    installTitle: 'No están en Google Play',
    installBody:
      'Se instalan desde su APK, el fichero de instalación de Android. Es cosa de un minuto, y el permiso solo se da la primera vez.',
    installCta: 'Cómo instalar',
  },
  principles: {
    kicker: 'Cómo están hechas',
    title: 'Lo primero: no perder nunca lo que es tuyo',
    lead: 'Todas las apps Ludok siguen las mismas reglas, de la primera a la última.',
    items: [
      {
        title: 'Sin cuentas ni servidores',
        body: 'Lo que apuntas vive en una base de datos dentro de la app. Sin registro, sin nube ajena y sin nadie más que lo vea.',
      },
      {
        title: 'Sin anuncios ni rastreo',
        body: 'Sin analítica, sin publicidad y sin nada que informe de lo que haces. Cada app explica qué sale del móvil y por qué.',
      },
      {
        title: 'Copias de seguridad',
        body: 'Exporta todo a un fichero cuando quieras e impórtalo en cualquier móvil. O activa la copia diaria a tu propio Nextcloud.',
      },
      {
        title: 'Código abierto',
        body: 'Con licencia MIT y el código en GitHub: puedes leerlo, compilarlo tú y cambiarlo.',
      },
      {
        title: 'Probadas de verdad',
        body: 'Los datos se prueban con el mismo código que corre en el móvil, contra una base de datos real: copias, migraciones y reglas.',
      },
      {
        title: 'Sala oscura',
        body: 'Una interfaz sobria, en tema oscuro o claro, donde el color lo ponen tus carátulas, tus fotos y tus datos.',
      },
    ],
  },
  pay: {
    kicker: 'Paga lo que quieras',
    title: 'Gratis para todos. Si te sirve, paga lo que quieras.',
    lead: 'Ninguna app tiene versión de prueba, anuncios ni funciones de pago. Si alguna te ahorra tiempo o te alegra el día, paga lo que te parezca justo: es lo que permite seguir mejorándolas y hacer otras nuevas.',
    steps: [
      {
        title: 'Descárgala gratis',
        body: 'El APK firmado, directo de GitHub. Sin registrarte en ningún sitio.',
      },
      {
        title: 'Úsala sin límites',
        body: 'Todas las funciones, desde el primer día y para siempre. Pagar no cambia nada en la app.',
      },
      {
        title: 'Paga si te sirve',
        body: 'Lo que quieras y cuando quieras, en Ko-fi. Con tarjeta o PayPal, sin crear cuenta.',
      },
    ],
    cta: 'Pagar en Ko-fi',
    ctaNote: 'Con tarjeta o PayPal, sin crear cuenta.',
    todo: 'Ko-fi sin configurar (KOFI_URL en src/site.ts)',
    otherTitle: '¿No puedes pagar? También ayuda',
    other: [
      {
        title: 'Una estrella en GitHub',
        body: 'Para que otras personas encuentren las apps.',
      },
      {
        title: 'Contar qué falla',
        body: 'Abre un issue en el repositorio de la app con lo que no va o lo que echas de menos.',
      },
      {
        title: 'Recomendarlas',
        body: 'A quien le puedan servir. Es como más gente llega a ellas.',
      },
    ],
    github: 'Ir a GitHub',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Son gratis de verdad?',
        a: 'Sí. Se descargan gratis y se usan sin límites: sin versión de prueba, sin anuncios y sin funciones de pago. Si alguna te sirve, puedes pagar lo que quieras, y eso es todo.',
      },
      {
        q: 'Si son gratis, ¿por qué pagar?',
        a: 'Porque es lo que permite dedicarles tiempo: arreglar fallos, sacar versiones nuevas y hacer apps nuevas. Pagas lo que te parezca justo y la app sigue siendo exactamente la misma.',
      },
      {
        q: '¿Qué datos recogen?',
        a: 'Ninguno. No hay cuentas, ni analítica, ni publicidad. Lo que apuntas vive en una base de datos dentro de tu móvil, y la página de cada app explica qué sale del móvil y por qué.',
      },
      {
        q: '¿Y si pierdo o cambio de móvil?',
        a: 'Cada app exporta todo a un fichero que se importa en otro móvil, y puede subir sola una copia diaria a tu propio Nextcloud. Sin copia, tus datos solo existen en tu móvil: la app te avisa cuando llevas días sin hacer una.',
      },
      {
        q: '¿Por qué no están en Google Play?',
        a: 'Se publican como APK en GitHub, sin intermediarios ni cuentas. Así funcionan también en móviles sin servicios de Google, como GrapheneOS.',
      },
      {
        q: '¿Funcionan en iPhone?',
        a: 'No, son apps para Android. Ludok Sound tiene además versión para Linux y Windows.',
      },
      {
        q: '¿Cómo se actualizan?',
        a: 'Descarga la versión nueva e instálala encima de la anterior: tus datos se conservan. No desinstales para actualizar, porque desinstalar borra los datos de la app.',
      },
    ],
  },
  app: {
    back: 'Todas las apps',
    free: 'Gratis',
    payTitle: 'Paga lo que quieras',
    payBody:
      'Sin versión de prueba, sin anuncios y sin funciones de pago. Si te sirve, paga lo que te parezca justo.',
    fanTitle: 'Sin pagos',
    fanBody: 'Es un proyecto de fan: se descarga gratis y no acepta pagos.',
    download: 'Descargar APK',
    allVersions: 'Todas las versiones',
    code: 'Código',
    soonTitle: 'Próximamente',
    soonBody: 'Aún no hay una versión pública para descargar.',
    android: `Android ${MIN_ANDROID} o superior`,
    spanish: 'Interfaz en castellano',
    featuresTitle: 'Qué hace',
    storyKicker: 'Por dentro',
    storyTitle: (name: string) => `Así es ${name}`,
    kicker3d: 'En 3D',
    privacyTitle: 'Qué sale de tu móvil',
    privacyPoints: [
      'Sin cuentas, sin analítica y sin anuncios.',
      'Copia de seguridad en un fichero, cuando quieras.',
      'Copia diaria a tu propio Nextcloud, si la activas.',
    ],
    needsTitle: 'Lo que necesitas',
    needsPhone: `Un móvil con Android ${MIN_ANDROID} o superior.`,
    shotsTitle: 'Capturas',
    moreTitle: 'Más apps Ludok',
    website: (name: string) => `Más sobre ${name} en su web`,
  },
  dialog: {
    title: 'Tu descarga ha empezado',
    lead: 'Cuando termine, para instalarla:',
    steps: [
      'Abre el APK desde las descargas del móvil.',
      'Si Android lo pide, permite instalar apps de esa fuente y vuelve atrás.',
      'Pulsa Instalar. Si Play Protect avisa, es porque no viene de Google Play.',
    ],
    guide: 'Guía de instalación completa',
    pay: (name: string) => `¿Te sirve ${name}? Paga lo que quieras.`,
    close: 'Cerrar',
  },
  install: {
    meta: {
      title: 'Cómo instalar una app Ludok en Android',
      description:
        'Las apps Ludok se instalan desde su APK. Cómo descargarlas, permitir la instalación, actualizarlas sin perder datos y pasarlas a otro móvil.',
    },
    kicker: 'Instalar',
    title: 'Cómo instalar una app Ludok',
    lead: 'No están en Google Play: se instalan desde su APK, el fichero de instalación de Android. Son cuatro pasos, y el permiso solo se da la primera vez.',
    steps: [
      {
        title: 'Descarga el APK',
        body: 'En el móvil, desde la página de la app. Si lo descargas en el ordenador, pásalo al móvil por cable o por la nube.',
      },
      {
        title: 'Permite instalarlo',
        body: 'La primera vez, Android pregunta si dejas que el navegador (o Archivos) instale apps. Activa «Permitir de esta fuente» y vuelve atrás.',
      },
      {
        title: 'Instala',
        body: 'Abre el APK desde las descargas y pulsa Instalar. Si Play Protect avisa de que no conoce la app, es porque no viene de Google Play: puedes instalarla igualmente desde el propio aviso.',
      },
      {
        title: 'Haz tu primera copia',
        body: 'Tus datos solo viven en tu móvil. En Ajustes → Copia de seguridad, exporta todo a un fichero o activa la copia automática a tu Nextcloud.',
      },
    ],
    topicsTitle: 'Bueno saber',
    topics: [
      {
        title: 'Actualizar',
        body: 'Descarga la versión nueva e instálala encima de la anterior. Tus datos se conservan, porque todas las versiones van firmadas con la misma clave.',
      },
      {
        title: 'No desinstales para actualizar',
        body: 'Desinstalar una app borra sus datos. Si alguna vez tienes que hacerlo, exporta antes una copia.',
      },
      {
        title: 'Cambiar de móvil',
        body: 'Exporta la copia en el móvil viejo, instala la app en el nuevo e importa la copia desde Ajustes.',
      },
      {
        title: 'Sin servicios de Google',
        body: 'Funcionan en móviles sin Google, como GrapheneOS: no piden cuenta ni Google Play. La excepción es Android Auto en Ludok Sound, que depende de Google.',
      },
    ],
    ctaTitle: 'Elige una app',
    ctaBody: 'Todas se instalan igual.',
  },
  privacy: {
    meta: {
      title: 'Privacidad y aviso legal | Ludok',
      description:
        'Qué datos tratan esta web y las apps Ludok: ninguno propio. Sin cookies, sin analítica y sin anuncios.',
    },
    kicker: 'Privacidad',
    title: 'Privacidad y aviso legal',
    lead: 'Corto, porque hay poco que contar: ni esta web ni las apps recogen datos tuyos.',
    sections: [
      {
        title: 'Quién hay detrás',
        body: 'Las apps Ludok y esta web las hace Luken Iriondo, como proyecto personal. Para cualquier cosa, puedes escribir por GitHub.',
        link: { label: 'github.com/iamLudok', href: GITHUB_URL },
      },
      {
        title: 'Esta web',
        body: 'No usa cookies, ni analítica, ni publicidad, ni carga nada de otros sitios. Solo guarda en tu navegador si prefieres el tema claro o el oscuro. Está alojada en GitHub Pages, que puede registrar la dirección IP de las visitas por seguridad.',
        link: {
          label: 'Declaración de privacidad de GitHub',
          href: 'https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
        },
      },
      {
        title: 'Las descargas',
        body: 'Los APK se descargan de las releases de GitHub. Esta web no sabe quién descarga qué.',
      },
      {
        title: 'Los pagos',
        body: 'Los pagos se hacen en Ko-fi, que los procesa con PayPal o Stripe. Esta web no ve ni guarda tus datos de pago. Ko-fi comparte con quien recibe el pago los datos que indica su política de privacidad, como tu nombre y el mensaje que dejes.',
        link: { label: 'Política de privacidad de Ko-fi', href: 'https://more.ko-fi.com/privacy' },
      },
      {
        title: 'Las apps',
        body: 'No tienen cuentas, ni analítica, ni anuncios. Lo que apuntas se queda en tu móvil, y la página de cada app explica qué sale del móvil y por qué.',
      },
      {
        title: 'Marcas',
        body: 'Android es una marca de Google LLC. Monster Energy es una marca registrada de su titular: Ludok Monster es un proyecto de fan sin relación con ella. Las demás marcas que se mencionan pertenecen a sus titulares.',
      },
    ] as { title: string; body: string; link?: { label: string; href: string } }[],
  },
  footer: {
    tagline: 'Apps para Android sin cuentas ni anuncios, con tus datos en tu móvil.',
    apps: 'Apps',
    resources: 'Recursos',
    privacy: 'Privacidad',
  },
  notFound: {
    title: 'Esta página no existe.',
    back: 'Volver al inicio',
  },
};

type Strings = typeof es;

const en: Strings = {
  meta: {
    title: 'Ludok: Android apps with no accounts, your data on your phone',
    description:
      'Free and open source Android apps: travel, shows and books, restaurants, tickets, friends, music and home. No accounts, no ads. Pay what you want.',
  },
  nav: {
    main: 'Main',
    apps: 'Apps',
    pay: 'Pay what you want',
    install: 'Install',
    faq: 'FAQ',
    download: 'Download',
    github: 'Code on GitHub',
    theme: 'Switch between light and dark theme',
    langName: 'Español',
    langShort: 'ES',
    skip: 'Skip to content',
  },
  hero: {
    kicker: 'Free · Open source · Pay what you want',
    title: 'Your stuff, on your phone.',
    titleMuted: 'No accounts, no ads.',
    lead: 'Android apps to log what you watch and read, the countries you have visited, what you order at every restaurant or who owes whom among your friends. Your data lives on your phone and nowhere else.',
    primary: 'See the apps',
    secondary: 'Pay what you want',
    note: `Android ${MIN_ANDROID} or later · Spanish interface`,
    screenLabel: 'The Ludok apps on the home screen of an Android phone',
  },
  facts: {
    apps: 'Android apps, each one for one thing',
    items: [
      { value: '€0', label: 'to download them: then pay what you want' },
      { value: '0', label: 'accounts to create and ads to see' },
      { value: 'MIT', label: 'open source: read it, build it, change it' },
    ],
  },
  reel: {
    kicker: 'Inside',
    title: 'How they look on a real phone',
    lead: 'Real screenshots taken from the phone, not mockups: only personal details have been hidden. Tap one to see its app.',
  },
  catalog: {
    kicker: 'The apps',
    title: 'An app for everything you want to remember',
    lead: 'Each one does one thing and does it well. All of them keep your data on your phone, with backups.',
    soon: 'Coming soon',
    free: 'Free',
    more: 'See the app',
    installTitle: 'They are not on Google Play',
    installBody:
      'You install them from their APK, the Android install file. It takes a minute, and you only grant the permission the first time.',
    installCta: 'How to install',
  },
  principles: {
    kicker: 'How they are made',
    title: 'Rule number one: never lose what is yours',
    lead: 'Every Ludok app follows the same rules, from the first one to the last.',
    items: [
      {
        title: 'No accounts, no servers',
        body: 'What you log lives in a database inside the app. No sign up, no third-party cloud, and nobody else gets to see it.',
      },
      {
        title: 'No ads, no tracking',
        body: 'No analytics, no ads and nothing reporting what you do. Every app explains what leaves your phone and why.',
      },
      {
        title: 'Backups',
        body: 'Export everything to a file whenever you want and import it on any phone. Or turn on a daily backup to your own Nextcloud.',
      },
      {
        title: 'Open source',
        body: 'MIT licensed, with the code on GitHub: you can read it, build it yourself and change it.',
      },
      {
        title: 'Actually tested',
        body: 'The data layer is tested with the same code the phone runs, against a real database: backups, migrations and rules.',
      },
      {
        title: 'Dark room design',
        body: 'A quiet interface, in dark or light theme, where the color comes from your covers, your photos and your data.',
      },
    ],
  },
  pay: {
    kicker: 'Pay what you want',
    title: 'Free for everyone. If it helps you, pay what you want.',
    lead: 'No app has a trial, ads or paid features. If one saves you time or makes your day, pay what feels fair: it is what keeps them improving and makes new ones possible.',
    steps: [
      {
        title: 'Download it for free',
        body: 'The signed APK, straight from GitHub. No sign up anywhere.',
      },
      {
        title: 'Use it without limits',
        body: 'Every feature, from day one and forever. Paying changes nothing in the app.',
      },
      {
        title: 'Pay if it helps you',
        body: 'Whatever you want, whenever you want, on Ko-fi. By card or PayPal, no account needed.',
      },
    ],
    cta: 'Pay on Ko-fi',
    ctaNote: 'By card or PayPal, no account needed.',
    todo: 'Ko-fi not set up (KOFI_URL in src/site.ts)',
    otherTitle: 'Can’t pay? This helps too',
    other: [
      {
        title: 'A star on GitHub',
        body: 'So other people can find the apps.',
      },
      {
        title: 'Tell us what breaks',
        body: 'Open an issue in the app’s repository with what does not work or what you miss.',
      },
      {
        title: 'Recommend them',
        body: 'To anyone who might find them useful. It is how most people find them.',
      },
    ],
    github: 'Go to GitHub',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Are they really free?',
        a: 'Yes. You download them for free and use them without limits: no trial, no ads and no paid features. If one helps you, you can pay what you want, and that is it.',
      },
      {
        q: 'If they are free, why pay?',
        a: 'Because it is what makes it possible to spend time on them: fixing bugs, shipping new versions and making new apps. You pay what feels fair and the app stays exactly the same.',
      },
      {
        q: 'Are the apps in English?',
        a: 'Not yet: the interface is in Spanish. The code is MIT licensed, so a translation is a welcome contribution.',
      },
      {
        q: 'What data do they collect?',
        a: 'None. No accounts, no analytics, no ads. What you log lives in a database on your phone, and each app’s page explains what leaves your phone and why.',
      },
      {
        q: 'What if I lose or change my phone?',
        a: 'Every app exports everything to a file you can import on another phone, and can upload a daily backup to your own Nextcloud on its own. Without a backup, your data only exists on your phone: the app warns you when you go days without one.',
      },
      {
        q: 'Why are they not on Google Play?',
        a: 'They are published as APKs on GitHub, with no middlemen and no accounts. That way they also work on phones without Google services, such as GrapheneOS.',
      },
      {
        q: 'Do they work on iPhone?',
        a: 'No, they are Android apps. Ludok Sound also has a version for Linux and Windows.',
      },
      {
        q: 'How do I update them?',
        a: 'Download the new version and install it on top of the old one: your data is kept. Do not uninstall to update, because uninstalling deletes the app’s data.',
      },
    ],
  },
  app: {
    back: 'All apps',
    free: 'Free',
    payTitle: 'Pay what you want',
    payBody: 'No trial, no ads and no paid features. If it helps you, pay what feels fair.',
    fanTitle: 'No payments',
    fanBody: 'It is a fan project: free to download, and it does not accept payments.',
    download: 'Download APK',
    allVersions: 'All versions',
    code: 'Code',
    soonTitle: 'Coming soon',
    soonBody: 'There is no public version to download yet.',
    android: `Android ${MIN_ANDROID} or later`,
    spanish: 'Spanish interface',
    featuresTitle: 'What it does',
    storyKicker: 'Inside',
    storyTitle: (name: string) => `This is ${name}`,
    kicker3d: 'In 3D',
    privacyTitle: 'What leaves your phone',
    privacyPoints: [
      'No accounts, no analytics and no ads.',
      'Backup to a file, whenever you want.',
      'Daily backup to your own Nextcloud, if you turn it on.',
    ],
    needsTitle: 'What you need',
    needsPhone: `A phone with Android ${MIN_ANDROID} or later.`,
    shotsTitle: 'Screenshots',
    moreTitle: 'More Ludok apps',
    website: (name: string) => `More about ${name} on its website`,
  },
  dialog: {
    title: 'Your download has started',
    lead: 'When it finishes, to install it:',
    steps: [
      'Open the APK from your phone’s downloads.',
      'If Android asks, allow installing apps from that source and go back.',
      'Tap Install. If Play Protect warns you, it is because the app does not come from Google Play.',
    ],
    guide: 'Full install guide',
    pay: (name: string) => `Does ${name} help you? Pay what you want.`,
    close: 'Close',
  },
  install: {
    meta: {
      title: 'How to install a Ludok app on Android',
      description:
        'Ludok apps install from their APK. How to download them, allow the install, update them without losing data and move them to a new phone.',
    },
    kicker: 'Install',
    title: 'How to install a Ludok app',
    lead: 'They are not on Google Play: you install them from their APK, the Android install file. It takes four steps, and you only grant the permission the first time.',
    steps: [
      {
        title: 'Download the APK',
        body: 'On your phone, from the app’s page. If you download it on your computer, copy it to your phone by cable or through the cloud.',
      },
      {
        title: 'Allow the install',
        body: 'The first time, Android asks whether your browser (or Files) may install apps. Turn on “Allow from this source” and go back.',
      },
      {
        title: 'Install',
        body: 'Open the APK from your downloads and tap Install. If Play Protect says it does not know the app, it is because it does not come from Google Play: you can still install it from the warning itself.',
      },
      {
        title: 'Make your first backup',
        body: 'Your data only lives on your phone. In Ajustes → Copia de seguridad (Settings → Backup), export everything to a file or turn on the automatic backup to your Nextcloud.',
      },
    ],
    topicsTitle: 'Good to know',
    topics: [
      {
        title: 'Updating',
        body: 'Download the new version and install it on top of the old one. Your data is kept, because every version is signed with the same key.',
      },
      {
        title: 'Do not uninstall to update',
        body: 'Uninstalling an app deletes its data. If you ever have to, export a backup first.',
      },
      {
        title: 'Moving to a new phone',
        body: 'Export a backup on the old phone, install the app on the new one and import the backup from Settings.',
      },
      {
        title: 'No Google services needed',
        body: 'They work on phones without Google, such as GrapheneOS: no account and no Google Play needed. The exception is Android Auto in Ludok Sound, which depends on Google.',
      },
    ],
    ctaTitle: 'Pick an app',
    ctaBody: 'They all install the same way.',
  },
  privacy: {
    meta: {
      title: 'Privacy and legal notice | Ludok',
      description:
        'What data this website and the Ludok apps handle: none of their own. No cookies, no analytics, no ads.',
    },
    kicker: 'Privacy',
    title: 'Privacy and legal notice',
    lead: 'Short, because there is little to tell: neither this website nor the apps collect your data.',
    sections: [
      {
        title: 'Who is behind it',
        body: 'The Ludok apps and this website are made by Luken Iriondo, as a personal project. For anything, you can get in touch on GitHub.',
        link: { label: 'github.com/iamLudok', href: GITHUB_URL },
      },
      {
        title: 'This website',
        body: 'It uses no cookies, no analytics, no ads, and loads nothing from other sites. It only stores in your browser whether you prefer the light or the dark theme. It is hosted on GitHub Pages, which may log visitors’ IP addresses for security.',
        link: {
          label: 'GitHub General Privacy Statement',
          href: 'https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
        },
      },
      {
        title: 'Downloads',
        body: 'The APKs are downloaded from GitHub releases. This website does not know who downloads what.',
      },
      {
        title: 'Payments',
        body: 'Payments are made on Ko-fi, which processes them with PayPal or Stripe. This website never sees or stores your payment details. Ko-fi shares with the recipient the details listed in its privacy policy, such as your name and any message you leave.',
        link: { label: 'Ko-fi Privacy Policy', href: 'https://more.ko-fi.com/privacy' },
      },
      {
        title: 'The apps',
        body: 'They have no accounts, no analytics and no ads. What you log stays on your phone, and each app’s page explains what leaves your phone and why.',
      },
      {
        title: 'Trademarks',
        body: 'Android is a trademark of Google LLC. Monster Energy is a registered trademark of its owner: Ludok Monster is a fan project not affiliated with it. Other trademarks mentioned belong to their owners.',
      },
    ],
  },
  footer: {
    tagline: 'Android apps with no accounts and no ads, with your data on your phone.',
    apps: 'Apps',
    resources: 'Resources',
    privacy: 'Privacy',
  },
  notFound: {
    title: 'This page does not exist.',
    back: 'Back to home',
  },
};

export const ui: Record<Lang, Strings> = { es, en };
