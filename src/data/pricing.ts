// CENNIK DOMKÓW – edytuj tylko ten plik.
//
// Ceny za dobę za cały domek (1–2 osoby), w złotych.
// Z tych liczb korzysta tabela „Cennik” oraz linia „od … zł” w boksie „Wolne terminy”.

// Rok w nagłówku cennika.
export const priceYear = 2026;

// Cena za dobę w zależności od długości pobytu.
export const priceFrom4Nights = 475; // od 4 dób
export const price3Nights = 495;     // 3 doby
export const price2Nights = 525;     // 2 doby

// Dopłata za 3. i 4. osobę (za osobę za dobę).
export const extraPersonPrice = 120;

// Najniższa cena za dobę (liczy się sama).
export const priceFrom = Math.min(priceFrom4Nights, price3Nights, price2Nights);
