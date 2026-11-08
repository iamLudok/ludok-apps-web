// Ludok Wallet: tarjetas de visita, entradas y vinilos. Los textos salen de su README.
import type { App } from './types';

const wallet: App = {
  slug: 'wallet',
  name: 'Ludok Wallet',
  short: 'Wallet',
  repo: 'iamLudok/Ludok-wallet',
  available: true,
  pay: true,
  platforms: ['Android'],
  schemaCategory: 'LifestyleApplication',
  text: {
    es: {
      title: 'tarjetas de visita, entradas y vinilos, sin Google Wallet',
      category: 'Cartera',
      tagline: 'Tarjetas de visita, entradas y tu colección de vinilos, en un solo sitio.',
      lead: 'Haz una foto a una tarjeta y la app lee el teléfono, el correo y la dirección. Importa una entrada desde una foto o un PDF y su código queda listo para escanear en la puerta. Hecha para GrapheneOS y móviles sin Google Wallet.',
      features: [
        {
          title: 'Tarjetas que se rellenan solas',
          body: 'Foto del anverso y del reverso, y la app rellena teléfonos, correo, direcciones y web. El texto se lee en el propio móvil.',
        },
        {
          title: 'Entradas listas para la puerta',
          body: 'El código a pantalla completa y con el brillo al máximo. Título, sitio, fecha y precio se rellenan solos desde la foto o el PDF.',
        },
        {
          title: '13 formatos de código',
          body: 'QR, Code 128, EAN-13/8, Code 39/93, Codabar, ITF-14, UPC-A/E, PDF417, Aztec y Data Matrix.',
        },
        {
          title: 'Desde la galería',
          body: 'Comparte la foto de una entrada con Ludok Wallet desde cualquier app y se importa sola.',
        },
        {
          title: 'Tu colección de vinilos',
          body: 'Portadas, sello, número de catálogo, estado (escala Goldmine), precio pagado y valor estimado. El código de barras se lee de la foto de la contraportada.',
        },
        {
          title: 'Ver en Discogs',
          body: 'Abre la búsqueda del disco en Discogs para mirar precios. Es un simple enlace: la app nunca se conecta a Discogs.',
        },
      ],
      privacy:
        'Nada. El texto y los códigos se leen en el propio móvil y las fotos nunca se suben. Solo la copia automática a tu Nextcloud, si la activas.',
      shots: [
        {
          image: 'tarjetas',
          alt: 'Las tarjetas de Ludok Wallet: tiendas de vinilos, restaurantes y alojamientos, cada una con la foto de su tarjeta',
          title: 'Las tarjetas, fuera del cajón',
          body: 'Cada tarjeta con su foto, ordenada por tipo: tiendas, restaurantes, alojamientos y personas. Su teléfono y su web, a un toque.',
        },
      ],
    },
    en: {
      title: 'business cards, tickets and records, without Google Wallet',
      category: 'Wallet',
      tagline: 'Business cards, event tickets and your record collection, in one place.',
      lead: 'Snap a business card and the app reads its phone, email and address. Import a ticket from a photo or a PDF and its code is ready to scan at the door. Made for GrapheneOS and phones without Google Wallet.',
      features: [
        {
          title: 'Cards that fill themselves in',
          body: 'Photograph the front and back and the app fills in phones, email, addresses and website. The text is read on the phone itself.',
        },
        {
          title: 'Tickets ready for the door',
          body: 'The code full screen with brightness at maximum. Title, venue, date and price fill themselves in from the photo or PDF.',
        },
        {
          title: '13 code formats',
          body: 'QR, Code 128, EAN-13/8, Code 39/93, Codabar, ITF-14, UPC-A/E, PDF417, Aztec and Data Matrix.',
        },
        {
          title: 'From your gallery',
          body: 'Share a ticket photo with Ludok Wallet from any app and it imports itself.',
        },
        {
          title: 'Your record collection',
          body: 'Covers, label, catalog number, condition (Goldmine scale), price paid and estimated value. The barcode is read from the back cover photo.',
        },
        {
          title: 'View on Discogs',
          body: 'Opens the record’s Discogs search so you can check prices. It is a plain link: the app never connects to Discogs.',
        },
      ],
      privacy:
        'Nothing. Text and codes are read on the phone itself and photos are never uploaded. Only the automatic backup to your Nextcloud, if you turn it on.',
      shots: [
        {
          image: 'tarjetas',
          alt: 'Cards in Ludok Wallet (in Spanish): record shops, restaurants and places to stay, each with a photo of its card',
          title: 'Cards out of the drawer',
          body: 'Every card with its photo, sorted by type: shops, restaurants, places to stay and people. Their phone and website, one tap away.',
        },
      ],
    },
  },
};

export default wallet;
