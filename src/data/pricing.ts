// CENNIK – edytuj tylko ten plik.
//
// Z tych liczb korzystają: tabela „Cennik”, linia „od … zł” w boksie „Wolne terminy”,
// tabela „Wynajem jacuzzi” oraz dane strukturalne dla Google (SchemaOrg).
// Wszystkie kwoty w złotych.

// Rok w nagłówku cennika.
export const priceYear = 2026;

// ===== DOMEK – cena za dobę za cały domek (1–2 osoby) =====
export const priceFrom4Nights = 475; // od 4 dób
export const price3Nights = 495;     // 3 doby
export const price2Nights = 525;     // 2 doby

// Dopłata za 3. i 4. osobę (za osobę za dobę).
export const extraPersonPrice = 120;

// ===== JACUZZI – cena za cały pobyt (1–2 osoby) =====
export const jacuzzi2to3Nights = 480;   // pobyt 2–3 doby
export const jacuzzi4Nights = 580;      // pobyt 4 doby
export const jacuzzi5Nights = 670;      // pobyt 5 dób
export const jacuzziExtraNight = 100;   // każda kolejna doba (od 6.)
export const jacuzziPrepFee = 150;      // jednorazowa opłata za przygotowanie (już zawarta w cenach powyżej)

// Dopłata za jacuzzi przy rezerwacji dla 3–4 osób.
export const jacuzziGroup2to3Nights = 60; // przy pobycie 2–3 doby
export const jacuzziGroupExtraNight = 20; // za każdą kolejną dobę

// ===== Liczy się samo – nie edytuj =====
export const priceFrom = Math.min(priceFrom4Nights, price3Nights, price2Nights);
export const priceTo = Math.max(priceFrom4Nights, price3Nights, price2Nights);
