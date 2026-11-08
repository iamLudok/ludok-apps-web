// Ludok Count: sushi, bebida, mus y gastos de la cuadrilla. Los textos salen de su README.
import type { App } from './types';

const count: App = {
  slug: 'count',
  name: 'Ludok Count',
  short: 'Count',
  repo: 'iamLudok/Ludok-count',
  available: true,
  pay: true,
  platforms: ['Android'],
  schemaCategory: 'LifestyleApplication',
  text: {
    es: {
      title: 'sushi, bebida, mus y gastos de la cuadrilla, en un solo móvil',
      category: 'Cuadrilla',
      tagline: 'Sushi, rondas, mus y gastos de la cuadrilla, en un solo móvil.',
      lead: 'Cuántos trozos de sushi se come cada uno en el buffet, quién bebe más en cada ronda, el marcador del mus y quién le debe cuánto a quién. La lleva una sola persona y apunta por todos: nadie más tiene que instalarse nada.',
      features: [
        {
          title: 'Sushi',
          body: 'Sesiones de buffet con quién fue y cuántos trozos se comió cada uno. Clasificación por media, total y mejor día, y récord absoluto. No ir no baja tu media.',
        },
        {
          title: 'Bebida',
          body: 'Un contador por persona y por tipo (chupito, cerveza, cubata… editables) y un botón de «ronda para todos».',
        },
        {
          title: 'Gastos, al céntimo',
          body: 'Quién paga qué y entre quién se reparte: a partes iguales, por partes o por importes exactos. Calcula los pagos mínimos para quedar en paz.',
        },
        {
          title: 'Mus',
          body: 'Marcador en vivo por parejas con «+1», meta de piedras ajustable (40 por defecto) y cierre automático al llegar. Historial y clasificación por partidas ganadas.',
        },
        {
          title: 'La cuadrilla',
          body: 'Se añade, se renombra y se archiva. Quien deja de venir no se borra: su historial sigue contando.',
        },
        {
          title: 'Pensada para la mesa',
          body: 'El «+» es grande, el «−» pequeño, y la lista no se reordena mientras sumas: la tarjeta no se mueve bajo el dedo.',
        },
      ],
      privacy: 'Nada. Solo la copia automática a tu Nextcloud, si la activas, que va directa a tu servidor.',
      // Captura real con los nombres de la cuadrilla cambiados por otros inventados.
      shots: [
        {
          image: 'sushi',
          alt: 'El sushi en Ludok Count: el récord y la clasificación de la cuadrilla por media de trozos por sesión',
          title: '¿Quién come más sushi?',
          body: 'El récord y la clasificación de la cuadrilla, por media, total o mejor día. Ir menos veces no baja tu media.',
        },
      ],
    },
    en: {
      title: 'sushi, drinks, mus and group expenses, on one phone',
      category: 'Friends',
      tagline: 'Sushi, rounds, mus and group expenses, all on one phone.',
      lead: 'How many pieces of sushi each friend eats at the buffet, who drinks the most each round, the mus score and who owes whom. One person keeps it on their phone and logs for everyone: nobody else has to install anything.',
      features: [
        {
          title: 'Sushi',
          body: 'Buffet sessions with who went and how many pieces each person ate. Rankings by average, total and best day, plus the all time record. Skipping a session never lowers your average.',
        },
        {
          title: 'Drinks',
          body: 'A counter per person and per drink (shot, beer, mixed drink… all editable) and a round for everyone button.',
        },
        {
          title: 'Expenses, to the cent',
          body: 'Who paid what and how it is split: equally, by shares or by exact amounts. It works out the fewest payments to settle up.',
        },
        {
          title: 'Mus',
          body: 'A live score for the Spanish card game, pair against pair, with +1 buttons and an adjustable target (40 by default) that ends the game on its own. History and rankings by games won.',
        },
        {
          title: 'The group',
          body: 'Add, rename and archive people. Whoever stops coming is not deleted: their history still counts.',
        },
        {
          title: 'Made for the table',
          body: 'A big + button, a small − one, and the list never reorders while you tap, so cards never move under your finger.',
        },
      ],
      privacy:
        'Nothing. Only the automatic backup to your Nextcloud, if you turn it on, which goes straight to your server.',
      shots: [
        {
          image: 'sushi',
          alt: 'Sushi in Ludok Count (in Spanish): the record and the group ranking by average pieces per session',
          title: 'Who eats the most sushi?',
          body: 'The all time record and the group ranking, by average, total or best day. Going less often never lowers your average.',
        },
      ],
    },
  },
};

export default count;
