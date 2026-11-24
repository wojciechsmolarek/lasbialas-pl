// OFERTY SPECJALNE – edytuj tylko ten plik.
//
// Oferty pokazują się na stronie głównej nad boksem „Najbliższe wolne terminy” (albo pod nim, patrz offersPosition).
// Gdy żadna oferta nie jest aktywna, sekcja znika i strona wygląda jak zwykle.
//
// active     – true = oferta włączona, false = wyłączona (ręczny przełącznik)
// showFrom   – od kiedy pokazywać ofertę na stronie (RRRR-MM-DD)
// showUntil  – do kiedy pokazywać (włącznie); po tej dacie oferta znika sama, także bez nowego wdrożenia
// arrival    – dzień przyjazdu, departure – dzień wyjazdu (liczba nocy liczy się sama)
// arrivalLatest – opcjonalnie: najpóźniejszy możliwy przyjazd przy elastycznym terminie
//              (arrival = najwcześniejszy przyjazd, departure = wyjazd dla najwcześniejszego przyjazdu)
// price      – cena w zł; priceNote – za co jest cena (np. za cały pobyt, domek 1–2 os.)
// title, description, included – teksty w PL / EN / DE
// whatsapp   – gotowa wiadomość, która otworzy się gościowi w WhatsAppie

// Położenie sekcji ofert: 'above' = nad boksami „Najbliższe wolne terminy” i „Na miejscu”, 'below' = pod nimi.
export const offersPosition: 'above' | 'below' = 'below';

type T = { pl: string; en: string; de: string };
type L = { pl: string[]; en: string[]; de: string[] };
export type SpecialOffer = {
  active: boolean;
  showFrom: string;
  showUntil: string;
  arrival: string;
  arrivalLatest?: string;
  departure: string;
  price: number;
  priceNote: T;
  title: T;
  description: T;
  included: L;
  whatsapp: T;
};

// PRZYKŁADY – uzupełnij treść i ceny, a potem zmień active na true lub false aby wyłączyć
export const specialOffers: SpecialOffer[] = [
  {
    active: true,
    showFrom: '2026-11-24',
    showUntil: '2026-12-03',
    arrival: '2026-12-03',
    arrivalLatest: '2026-12-04',
    departure: '2026-12-06',
    price: 1790,
    priceNote: { pl: 'za cały pobyt (domek, 1–2 os.)', en: 'for the whole stay (cottage, 1–2 guests)', de: 'für den gesamten Aufenthalt (Ferienhaus, 1–2 Pers.)' },
    title: { pl: 'Mikołajki w lesie', en: 'St Nicholas weekend in the forest', de: 'Nikolauswochenende im Wald' },
    description: {
      pl: 'Trzy spokojne noce w domku z sauną i prywatnym jacuzzi, z dala od miejskiego hałasu.',
      en: 'Three quiet nights in a cottage with a sauna and private jacuzzi, far from the city noise.',
      de: 'Drei ruhige Nächte im Ferienhaus mit Sauna und privatem Whirlpool, fernab vom Stadtlärm.',
    },
    included: {
      pl: ['prywatne jacuzzi przez cały pobyt', 'sauna fińska z balią', 'późne wymeldowanie do 14:00'],
      en: ['private jacuzzi for the whole stay', 'Finnish sauna with cold plunge tub', 'late check-out until 2 pm'],
      de: ['privater Whirlpool für den gesamten Aufenthalt', 'finnische Sauna mit Kaltwasserbottich', 'später Check-out bis 14 Uhr'],
    },
    whatsapp: {
      pl: 'Dzień dobry, interesuje mnie oferta „Mikołajki w lesie” (przyjazd 3 lub 4 grudnia).',
      en: 'Hello, I am interested in the "St Nicholas weekend in the forest" offer (arrival 3 or 4 December).',
      de: 'Guten Tag, ich interessiere mich für das Angebot „Nikolauswochenende im Wald“ (Anreise 3. oder 4. Dezember).',
    },
  },
  {
    active: false,
    showFrom: '2027-02-01',
    showUntil: '2027-04-29',
    arrival: '2027-04-30',
    departure: '2027-05-03',
    price: 1900,
    priceNote: { pl: 'za cały pobyt (domek, 1–2 os.)', en: 'for the whole stay (cottage, 1–2 guests)', de: 'für den gesamten Aufenthalt (Ferienhaus, 1–2 Pers.)' },
    title: { pl: 'Majówka w lesie', en: 'May long weekend in the forest', de: 'Maiwochenende im Wald' },
    description: {
      pl: 'Długi weekend nad jeziorem: rowery, deski SUP i wieczory przy saunie.',
      en: 'A long weekend by the lake: bikes, SUP boards and evenings at the sauna.',
      de: 'Ein langes Wochenende am See: Fahrräder, SUP-Boards und Abende an der Sauna.',
    },
    included: {
      pl: ['prywatne jacuzzi przez cały pobyt', 'sauna fińska z balią', 'rowery i deski SUP'],
      en: ['private jacuzzi for the whole stay', 'Finnish sauna with cold plunge tub', 'bikes and SUP boards'],
      de: ['privater Whirlpool für den gesamten Aufenthalt', 'finnische Sauna mit Kaltwasserbottich', 'Fahrräder und SUP-Boards'],
    },
    whatsapp: {
      pl: 'Dzień dobry, interesuje mnie oferta „Majówka w lesie” (30.04–03.05).',
      en: 'Hello, I am interested in the "May long weekend in the forest" offer (30.04–03.05).',
      de: 'Guten Tag, ich interessiere mich für das Angebot „Maiwochenende im Wald“ (30.04.–03.05.).',
    },
  },
];
