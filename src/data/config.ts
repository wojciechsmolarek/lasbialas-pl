export interface LangMap { pl: string; en: string; de: string; }
export interface TopBoxesData { availabilityBlock: string; infoBlock: string; }
export interface SiteConfig {
  promoBar: { enabled: boolean; messages: LangMap };
  availability: { block: LangMap };
  topBoxes: { pl: TopBoxesData; en: TopBoxesData; de: TopBoxesData };
}

export const siteConfig: SiteConfig = {
  "promoBar": {
    "enabled": true,
    "messages": {
      "pl": `<span class="text-white">Wolny termin</span><span class="promo-label">5-9 LIPIEC</span>`,
      "en": `<span class="text-white">Bookings for</span><span class="promo-label">JULY</span><span class="promo-label">AUGUST</span> <strong>by phone only</strong>`,
      "de": `<span class="text-white">Reservierungen für</span><span class="promo-label">JULI</span><span class="promo-label">AUGUST</span> <strong>nur telefonisch</strong>`
    }
  },
  "availability": {
    "block": {
      "pl": `<p class="mb-4"><b>czerwiec</b><br /><b>22-25 cze | domek D2</b><br />-10% z kodem <span class="promo-code-wrap"><span class="promo-code" id="code1">LB22CZE</span><button class="copy-btn" onclick="copyCode('code1', this)" title="Kopiuj"></button></span></p>`,
      "en": `<p class="mb-4"><b>June</b><br /><b>22-25 Jun | cabin D2</b><br />with 10% discount code <span class="promo-code-wrap"><span class="promo-code" id="code1">LB22JUN</span><button class="copy-btn" onclick="copyCode('code1', this)" title="Copy"></button></span></p>`,
      "de": `<p class="mb-4"><b>Juni</b><br /><b>22-25 Jun | Haus D2</b><br />mit 10% Rabattcode <span class="promo-code-wrap"><span class="promo-code" id="code1">LB22JUN</span><button class="copy-btn" onclick="copyCode('code1', this)" title="Kopieren"></button></span></p>`
    }
  },
  "topBoxes": {
    "pl": {
      "availabilityBlock": `<h2 class="promo-h2">Wolne terminy lato 2026</h2><span class="promo-label">SIERPIEŃ</span><p class="text-base mt-2">17 - 23 sie (D2)<br>15 - 31 sie (D1)</p><p class="text-base mt-2">Rezerwacja telefoniczna lub WhatsApp.</p><ul class="promo-contact-list"><li class="promo-contact-item"><img src="/images/phone-green.webp" alt="Telefon"><a href="tel:+48789773285" class="promo-link-bold">789 773 285</a></li><li class="promo-contact-item"><img src="/images/whatsapp-green.webp" alt="WhatsApp"><a href="https://wa.me/48660194187" class="promo-link-bold">660 194 187</a></li></ul>`,
      "infoBlock": `<span class="promo-label">NA MIEJSCU</span><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>prywatne jacuzzi</li><li class="promo-list-item"><span class="promo-bullet"></span>sauna</li><li class="promo-list-item"><span class="promo-bullet"></span>balia do schładzania</li><li class="promo-list-item"><span class="promo-bullet"></span>grill + węgiel</li><li class="promo-list-item"><span class="promo-bullet"></span>hamaki</li><li class="promo-list-item"><span class="promo-bullet"></span>rowery</li><li class="promo-list-item"><span class="promo-bullet"></span>deski SUP</li><li class="promo-list-item"><span class="promo-bullet"></span>Wi-Fi</li><li class="promo-list-item"><span class="promo-bullet"></span>Netflix</li></ul><p class="text-base mt-2"><a href="https://lasbialas.pl/info/#/na-miejscu" target="_blank" class="promo-link">Zobacz wszystko</a></p><br><span class="promo-label">PRZED PRZYJAZDEM</span><p class="text-base text-sm mt-2"><a href="https://lasbialas.pl/info/#/przed-przyjazdem" target="_blank" class="promo-link">Sprawdź informacje</a> o dojeździe, zameldowaniu, wyposażeniu domków, zasadach pobytu - wszystko, co warto wiedzieć przed przyjazdem.</p>`
    },
    "en": {
      "availabilityBlock": `<h2 class="promo-h2">Available Dates – Summer 2026</h2><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>Jul 3–9 | (D1)</li><li class="promo-list-item"><span class="promo-bullet"></span>Aug 17–23 (D2)</li><li class="promo-list-item"><span class="promo-bullet"></span>Aug 15–31 (D1)</li></ul><p class="text-base mt-4">Minimum stay: 4 nights.</p><p class="text-base">To book your stay, please contact us by phone or WhatsApp.</p><ul class="promo-contact-list"><li class="promo-contact-item"><img src="/images/phone-green.webp" alt="Phone"><a href="tel:+48789773285" class="promo-link-bold">789 773 285</a></li><li class="promo-contact-item"><img src="/images/whatsapp-green.webp" alt="WhatsApp"><a href="https://wa.me/48660194187" class="promo-link-bold">660 194 187</a></li></ul>`,
      "infoBlock": `<h2 class="promo-h2">On site</h2><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>Private jacuzzi</li><li class="promo-list-item"><span class="promo-bullet"></span>Finnish sauna</li><li class="promo-list-item"><span class="promo-bullet"></span>Cold plunge tub</li><li class="promo-list-item"><span class="promo-bullet"></span>BBQ grill + charcoal</li><li class="promo-list-item"><span class="promo-bullet"></span>Hammocks</li><li class="promo-list-item"><span class="promo-bullet"></span>Bicycles</li><li class="promo-list-item"><span class="promo-bullet"></span>SUP boards</li><li class="promo-list-item"><span class="promo-bullet"></span>Wi-Fi</li><li class="promo-list-item"><span class="promo-bullet"></span>Netflix</li></ul><p class="text-base mt-4"><a href="https://lasbialas.pl/info/en/" target="_blank" class="promo-link">View all amenities</a></p><p class="text-base text-sm mt-2">Check information about <a href="https://lasbialas.pl/info/en/" target="_blank" class="promo-link">directions, check-in, cottage amenities, house rules</a>, and everything you need to know before your arrival.</p>`
    },
    "de": {
      "availabilityBlock": `<h2 class="promo-h2">Freie Termine Sommer 2026</h2><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>3.–9. Jul | (D1)</li><li class="promo-list-item"><span class="promo-bullet"></span>17.–23. Aug (D2)</li><li class="promo-list-item"><span class="promo-bullet"></span>15.–31. Aug (D1)</li></ul><p class="text-base mt-4">Der Mindestaufenthalt beträgt 4 Nächte.</p><p class="text-base">Für eine Buchung kontaktieren Sie uns bitte telefonisch oder per WhatsApp.</p><ul class="promo-contact-list"><li class="promo-contact-item"><img src="/images/phone-green.webp" alt="Telefon"><a href="tel:+48789773285" class="promo-link-bold">789 773 285</a></li><li class="promo-contact-item"><img src="/images/whatsapp-green.webp" alt="WhatsApp"><a href="https://wa.me/48660194187" class="promo-link-bold">660 194 187</a></li></ul>`,
      "infoBlock": `<h2 class="promo-h2">Vor Ort</h2><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>privater Whirlpool</li><li class="promo-list-item"><span class="promo-bullet"></span>Finnische Sauna</li><li class="promo-list-item"><span class="promo-bullet"></span>Abkühlbecken</li><li class="promo-list-item"><span class="promo-bullet"></span>Grill + Holzkohle</li><li class="promo-list-item"><span class="promo-bullet"></span>Hängematten</li><li class="promo-list-item"><span class="promo-bullet"></span>Fahrräder</li><li class="promo-list-item"><span class="promo-bullet"></span>SUP-Boards</li><li class="promo-list-item"><span class="promo-bullet"></span>Wi-Fi</li><li class="promo-list-item"><span class="promo-bullet"></span>Netflix</li></ul><p class="text-base mt-4"><a href="https://lasbialas.pl/info/de/" target="_blank" class="promo-link">Alles ansehen</a></p><p class="text-base text-sm mt-2">Informieren Sie sich über <a href="https://lasbialas.pl/info/de/" target="_blank" class="promo-link">Anreise, Check-in, Ausstattung der Ferienhäuser, Hausregeln</a> sowie alles, was Sie vor Ihrer Anreise wissen sollten.</p>`
    }
  }
};

export default siteConfig;
