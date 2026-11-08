// Ludok Monster: la colección de latas en 3D. Los textos salen de su README.
//
// Sale gratis y sin pagos a propósito: el nombre y las etiquetas de las latas son de Monster
// Energy, que es marca registrada, y cobrar por ella sería usar su marca con fines comerciales.
// Las latas en 3D salen de la app con scripts/monster-3d.ts, y van con el aviso de proyecto de fan.
import type { App } from './types';

const monster: App = {
  slug: 'monster',
  name: 'Ludok Monster',
  short: 'Monster',
  repo: 'iamLudok/Ludok-monster',
  available: true,
  pay: false,
  platforms: ['Android'],
  schemaCategory: 'LifestyleApplication',
  text: {
    es: {
      title: 'las latas de Monster que has probado, en 3D',
      category: 'Colección',
      tagline: 'Las latas de Monster que has probado, en 3D, y tu torre.',
      lead: 'Lleva la cuenta de las latas que has probado: cuáles, qué nota les pones, dónde las compraste y por cuánto. Cada lata se ve en 3D, se gira y se acerca con los dedos, y las que pruebas van formando tu torre.',
      features: [
        {
          title: 'Latas en 3D',
          body: '45 latas y 2 botellas modeladas en Blender a partir de fotos reales. Se giran y se acercan con los dedos, sin conexión.',
        },
        {
          title: 'Tu torre',
          body: 'Una pirámide que crece según pruebas más. Las que te faltan se ven apagadas.',
        },
        {
          title: 'Nota y comentario',
          body: 'Del 1 al 10, con un comentario. Valorar una lata la marca como probada.',
        },
        {
          title: 'Compras',
          body: 'Precio con su moneda, país y ciudad. Varias por lata.',
        },
        {
          title: 'Mapa de compras',
          body: 'Una chincheta por ciudad, sobre OpenStreetMap.',
        },
        {
          title: 'Números',
          body: 'Cuántas llevas de cada gama, tu nota media, tus favoritas, lo gastado, la más cara y la más barata.',
        },
      ],
      privacy:
        'Tus latas, notas y compras no salen del móvil. Para el mapa de compras, la app carga el mapa de OpenStreetMap y sitúa cada ciudad una sola vez con Nominatim, sin cuenta.',
      note: 'Proyecto de fan, sin relación con Monster Energy ni con su titular. Monster Energy es una marca registrada de su titular. Esta app es gratis, no acepta pagos y se retirará si el titular de la marca lo pide.',
      scenes: [
        {
          modo: 'torre',
          title: 'Tu torre',
          body: 'Las 47 latas, una encima de otra, como en la app. Arrastra para girarla.',
          label: 'La torre de Ludok Monster en 3D: 47 latas apiladas en pirámide',
        },
        {
          modo: 'lata',
          title: 'Cada lata, en 3D',
          body: 'Modeladas en Blender a partir de seis fotos reales de cada una, con su tapa, su anilla y su etiqueta. Arrastra para girarla: esta es la Original.',
          label: 'Una lata Monster Original en 3D, girando',
        },
      ],
    },
    en: {
      title: 'the Monster cans you have tried, in 3D',
      category: 'Collection',
      tagline: 'The Monster cans you have tried, in 3D, and your tower.',
      lead: 'Keep track of the cans you have tried: which ones, how you rate them, where you bought them and for how much. Every can is in 3D, to spin and zoom with your fingers, and the ones you try build up your tower.',
      features: [
        {
          title: '3D cans',
          body: '45 cans and 2 bottles modelled in Blender from real photos. Spin and zoom them with your fingers, offline.',
        },
        {
          title: 'Your tower',
          body: 'A pyramid that grows as you try more. The ones you are missing look dimmed.',
        },
        {
          title: 'Rating and comment',
          body: 'From 1 to 10, with a comment. Rating a can marks it as tried.',
        },
        {
          title: 'Purchases',
          body: 'Price with its currency, country and city. Several per can.',
        },
        {
          title: 'Purchase map',
          body: 'A pin for every city, on OpenStreetMap.',
        },
        {
          title: 'Numbers',
          body: 'How many you have tried from each range, your average rating, your favourites, what you have spent, the most expensive and the cheapest.',
        },
      ],
      privacy:
        'Your cans, ratings and purchases never leave your phone. For the purchase map, the app loads OpenStreetMap and places each city once with Nominatim, with no account.',
      note: 'A fan project, not affiliated with Monster Energy or its owner. Monster Energy is a registered trademark of its owner. This app is free, does not accept payments, and will be taken down if the trademark owner asks.',
      scenes: [
        {
          modo: 'torre',
          title: 'Your tower',
          body: 'All 47 cans stacked up, just like in the app. Drag to spin it.',
          label: 'The Ludok Monster tower in 3D: 47 cans stacked in a pyramid',
        },
        {
          modo: 'lata',
          title: 'Every can, in 3D',
          body: 'Modelled in Blender from six real photos of each one, with its lid, its tab and its label. Drag to spin it: this one is the Original.',
          label: 'A Monster Original can in 3D, spinning',
        },
      ],
    },
  },
};

export default monster;
