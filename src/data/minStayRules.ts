// MINIMALNY POBYT W WYBRANYCH TERMINACH – edytuj tylko ten plik.
//
// Domyślny minimalny pobyt (2 doby) ustawia skrypt w BaseLayout.astro.
// Tutaj dopisujesz okresy, w których obowiązuje dłuższe minimum (święta, długie weekendy).
//
// from      = pierwsza noc okresu (RRRR-MM-DD)
// to        = dzień wyjazdu, czyli koniec okresu (RRRR-MM-DD)
// minNights = minimalna liczba dób, jeśli choć jedna noc pobytu wypada w tym okresie
//
// Przykład: { from: '2026-12-29', to: '2027-01-03', minNights: 4 }
// = noce 29.12, 30.12, 31.12, 1.01 i 2.01 (wyjazd 3.01); pobyt obejmujący którąkolwiek z nich musi mieć min. 4 doby.
//
// Okresy, które już minęły, nie mają znaczenia, można je zostawić albo usunąć.

export const minStayRules: { from: string; to: string; minNights: number }[] = [
  { from: '2026-12-22', to: '2027-12-27', minNights: 4 }, // Święta
  { from: '2026-12-27', to: '2027-01-03', minNights: 4 }, // Sylwester
  { from: '2027-01-03', to: '2027-01-06', minNights: 3 }, // 3 Króli
  { from: '2027-04-29', to: '2027-05-04', minNights: 4 }, // Majówka
];
