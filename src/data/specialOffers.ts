// OFERTY SPECJALNE – edytuj tylko ten plik.
//
// Oferty pokazują się na stronie głównej nad boksem „Najbliższe wolne terminy” (albo pod nim, patrz offersPosition).
// Gdy żadna oferta nie jest aktywna, sekcja znika i strona wygląda jak zwykle.
//
// active     – true = oferta włączona, false = wyłączona (ręczny przełącznik)
// showFrom   – od kiedy pokazywać ofertę na stronie (RRRR-MM-DD)
// showUntil  – do kiedy pokazywać (włącznie); po tej dacie oferta znika sama, także bez nowego wdrożenia
// arrival    – dzień przyjazdu, departure – dzień wyjazdu (liczba nocy liczy się sama)
// price      – cena w zł; priceNote – za co jest cena (np. za cały pobyt, domek 1–2 os.)
// title, description, included – teksty w PL / EN / DE
// whatsapp   – gotowa wiadomość, która otworzy się gościowi w WhatsAppie

---
// Oferty specjalne na stronie głównej. Treść i daty: src/data/specialOffers.ts.
import { specialOffers, offersPosition } from '../../data/specialOffers';
import whatsappGreen from '../../assets/images/whatsapp-green.webp';

interface Props {
  lang: 'pl' | 'en' | 'de';
  position: 'above' | 'below';
}

const { lang, position } = Astro.props;

const t = {
  pl: { tag: 'Oferta specjalna', included: 'W cenie:', call: 'Zadzwoń', whatsapp: 'Napisz na WhatsApp', currency: 'zł', choose: 'do wyboru' },
  en: { tag: 'Special offer', included: 'Included:', call: 'Call', whatsapp: 'Message on WhatsApp', currency: 'PLN', choose: 'choose one' },
  de: { tag: 'Sonderangebot', included: 'Im Preis enthalten:', call: 'Anrufen', whatsapp: 'Per WhatsApp schreiben', currency: 'PLN', choose: 'zur Auswahl' },
}[lang];

const monthNames = {
  pl: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  de: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
}[lang];

function parseDate(s: string) {
  const p = s.split('-');
  return new Date(Date.UTC(Number(p[0]), Number(p[1]) - 1, Number(p[2])));
}
function dayMonth(d: Date) {
  const mon = monthNames[d.getUTCMonth()];
  return lang === 'de' ? d.getUTCDate() + '. ' + mon : d.getUTCDate() + ' ' + mon;
}
function formatRange(a: Date, b: Date) {
  if (a.getUTCMonth() === b.getUTCMonth()) {
    const mon = monthNames[a.getUTCMonth()];
    return lang === 'de' ? a.getUTCDate() + '.–' + b.getUTCDate() + '. ' + mon : a.getUTCDate() + '–' + b.getUTCDate() + ' ' + mon;
  }
  return dayMonth(a) + ' – ' + dayMonth(b);
}
function nightsLabel(n: number) {
  if (lang === 'en') return n === 1 ? '1 night' : n + ' nights';
  if (lang === 'de') return n === 1 ? '1 Nacht' : n + ' Nächte';
  const last = n % 10, lastTwo = n % 100;
  if (n === 1) return '1 noc';
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return n + ' noce';
  return n + ' nocy';
}
// Termin z dniem tygodnia, np. „czw 3 – nd 6 gru” / „Thu 3 – Sun 6 Dec” / „Do. 3. – So. 6. Dez.”
const weekdays = {
  pl: ['nd', 'pn', 'wt', 'śr', 'czw', 'pt', 'sb'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  de: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
}[lang];
function withWeekday(a: Date, b: Date) {
  const wa = weekdays[a.getUTCDay()], wb = weekdays[b.getUTCDay()];
  const same = a.getUTCMonth() === b.getUTCMonth();
  if (lang === 'de') return wa + ' ' + a.getUTCDate() + '.' + (same ? '' : ' ' + monthNames[a.getUTCMonth()]) + ' – ' + wb + ' ' + b.getUTCDate() + '. ' + monthNames[b.getUTCMonth()];
  return wa + ' ' + a.getUTCDate() + (same ? '' : ' ' + monthNames[a.getUTCMonth()]) + ' – ' + wb + ' ' + b.getUTCDate() + ' ' + monthNames[b.getUTCMonth()];
}

const formatPrice = (n: number) => n.toLocaleString('pl-PL').replace(/ /g, ' ');

// Oferty aktywne w chwili budowania strony. Daty pokazywania sprawdza też skrypt w przeglądarce (niżej),
// więc oferta znika po showUntil nawet bez nowego wdrożenia.
const now = new Date();
const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
const offers = position === offersPosition
  ? specialOffers
      .filter((o) => o.active && parseDate(o.showUntil) >= today)
      .map((o) => {
        const a = parseDate(o.arrival), d = parseDate(o.departure);
        const nights = Math.round((d.getTime() - a.getTime()) / 86400000);
        // Elastyczny przyjazd: kilka terminów do wyboru, każdy z tą samą liczbą nocy,
        // np. „czw 3 – nd 6 gru” i „pt 4 – pn 7 gru” z podpisem „3 noce, do wyboru”.
        let dates = formatRange(a, d) + ' · ' + nightsLabel(nights);
        let options: string[] = [];
        if (o.arrivalLatest) {
          const aLast = parseDate(o.arrivalLatest);
          for (let x = a.getTime(); x <= aLast.getTime(); x += 86400000) {
            options.push(withWeekday(new Date(x), new Date(x + nights * 86400000)));
          }
          dates = nightsLabel(nights) + ', ' + t.choose + ':';
        }
        return {
          ...o,
          dates,
          options,
          waHref: 'https://wa.me/48660194187?text=' + encodeURIComponent(o.whatsapp[lang]),
        };
      })
  : [];

const cardClass = 'flex flex-col border border-[#ccc] rounded-[5px] py-[20px] px-[40px] bg-white text-base text-left max-[768px]:max-w-[96vw] max-[768px]:mx-auto max-[768px]:p-5 max-[768px]:w-full';
const checkIcon = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2F6940" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 translate-y-[2px]"><path d="M5 12l5 5L20 7"/></svg>';
---

{offers.length > 0 && (
  <section data-offers class={`grid ${offers.length > 1 ? 'grid-cols-2' : 'grid-cols-1 is-single'} gap-[20px] max-w-[73%] mx-auto mb-5 max-[1367px]:grid-cols-1 max-[1367px]:max-w-full max-[1367px]:px-4 max-[768px]:px-0 max-[768px]:gap-[1px]`}>
    {offers.map((o) => (
      <article data-offer data-show-from={o.showFrom} data-show-until={o.showUntil} class={cardClass + ' max-[768px]:mb-[20px]'}>
        <div class="lb-offer-main flex flex-col">
        <span class="self-start inline-block rounded-[4px] bg-[#FBEFE6] text-[#B5550E] text-[0.8rem] font-semibold px-2.5 py-1">{t.tag}</span>
        <h2 class="text-[1.4rem] font-semibold text-brand-black mt-3 mb-1">{o.title[lang]}</h2>
        <p class="text-[0.95rem] text-[#555] leading-[1.5] mb-3">{o.description[lang]}</p>

        {o.options.length === 0 ? (
          <span class="self-start inline-flex items-center gap-1.5 rounded-full bg-[#E8F2EA] text-[#2F6940] text-[0.95rem] font-medium px-3.5 py-1.5 mb-4">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
            {o.dates}
          </span>
        ) : (
          <div class="mb-4">
            <p class="text-[0.9rem] text-[#555] mb-1.5">{o.dates}</p>
            <div class="flex flex-wrap gap-2">
              {o.options.map((opt) => (
                <span class="inline-flex items-center gap-1.5 rounded-full bg-[#E8F2EA] text-[#2F6940] text-[0.95rem] font-medium px-3.5 py-1.5 whitespace-nowrap">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}

        <div class="border-t border-[#e5e5e5] pt-3">
          <p class="text-brand-black leading-[1.2]"><span class="text-[1.8rem] font-semibold">{formatPrice(o.price)} {t.currency}</span></p>
          <p class="text-[0.85rem] text-[#555] mt-1">{o.priceNote[lang]}</p>
        </div>
        </div>

        <div class="lb-offer-side flex flex-col flex-1">

        <p class="text-[0.95rem] font-semibold text-brand-black mt-4 mb-2">{t.included}</p>
        <ul class="list-none m-0 p-0 flex flex-col gap-y-1.5 mb-5">
          {o.included[lang].map((item) => (
            <li class="flex items-baseline gap-2 text-[0.95rem] text-[#272727]"><Fragment set:html={checkIcon} /><span>{item}</span></li>
          ))}
        </ul>

        <div class="mt-auto flex flex-col gap-2">
          <a href="tel:+48789773285" class="flex justify-center items-center gap-2 h-[46px] w-full text-base font-medium text-white bg-[#2F6940] no-underline rounded-[6px] hover:bg-[#24522f] transition-colors">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
            {t.call}: 789 773 285
          </a>
          <a href={o.waHref} target="_blank" rel="noopener" class="flex justify-center items-center gap-2 h-[46px] w-full text-base font-medium text-[#2F6940] bg-white border border-[#2F6940] no-underline rounded-[6px] hover:bg-[#E8F2EA] transition-colors">
            <img src={whatsappGreen.src} width="20" height="20" alt="" />
            {t.whatsapp}
          </a>
        </div>
        </div>
      </article>
    ))}
  </section>
)}

<script is:inline>
  // Ukrywa oferty poza okresem showFrom–showUntil (liczone wg daty w przeglądarce gościa),
  // a gdy żadna nie zostaje, całą sekcję.
  (function () {
    var d = new Date();
    var today = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    document.querySelectorAll('[data-offers]').forEach(function (sec) {
      var visible = 0;
      sec.querySelectorAll('[data-offer]').forEach(function (el) {
        var on = today >= el.getAttribute('data-show-from') && today <= el.getAttribute('data-show-until');
        el.style.display = on ? '' : 'none';
        if (on) visible++;
      });
      if (!visible) sec.style.display = 'none';
      else if (visible === 1) { sec.classList.remove('grid-cols-2'); sec.classList.add('is-single'); }
    });
  })();
</script>

<style is:global>
  /* Jedna oferta: karta na całą szerokość, podzielona na dwie kolumny
     (po lewej opis, termin i cena, po prawej „W cenie” i przyciski). Na węższych ekranach jedna pod drugą. */
  @media (min-width: 1024px) {
    [data-offers].is-single [data-offer] {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      column-gap: 48px;
      align-items: stretch;
    }
    [data-offers].is-single .lb-offer-side {
      border-left: 1px solid #e5e5e5;
      padding-left: 48px;
    }
  }
</style>
