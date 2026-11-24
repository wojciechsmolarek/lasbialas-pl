// REGUŁY FORMULARZA REZERWACJI W WYBRANYCH TERMINACH – edytuj tylko ten plik.
//
// Daty w formacie RRRR-MM-DD.
// from = pierwsza noc okresu, to = dzień wyjazdu, czyli koniec okresu.
// Reguła działa, jeśli choć jedna noc wybranego pobytu wypada w danym okresie.
// Okresy, które już minęły, nie mają znaczenia, można je zostawić albo usunąć.

// 1) MINIMALNY POBYT
// Domyślny minimalny pobyt (2 doby) ustawia skrypt w BaseLayout.astro.
// Tutaj dopisujesz okresy z dłuższym minimum. Za krótki pobyt blokuje przejście dalej w formularzu.
// Przykład: { from: '2026-12-29', to: '2027-01-03', minNights: 4 }
// = noce 29.12–2.01 (wyjazd 3.01); pobyt obejmujący którąkolwiek z nich musi mieć min. 4 doby.
export const minStayRules: { from: string; to: string; minNights: number }[] = [
  { from: '2026-12-4', to: '2026-12-7' }, // Mikołajki
  { from: '2026-12-22', to: '2027-01-27', minNights: 4 }, // Święta
  { from: '2027-01-3', to: '2027-01-10', minNights: 4 }, // 3 Króli

];

// 2) JACUZZI ZIMĄ – komunikat informacyjny (nie blokuje rezerwacji)
// Gdy pobyt obejmuje taki okres, a w polu jacuzzi wybrano wynajem lub decyzję przed przyjazdem,
// pod polem pojawia się informacja o możliwej niedostępności przy silnych mrozach.
export const jacuzziNoticePeriods: { from: string; to: string }[] = [
  { from: '2026-12-20', to: '2026-12-31' }, // grudzień
  { from: '2027-01-3', to: '2027-01-10' }, // 3 Króli
];
