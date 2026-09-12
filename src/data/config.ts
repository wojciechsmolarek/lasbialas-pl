import phoneGreen from '../assets/images/phone-green.webp';
import whatsappGreen from '../assets/images/whatsapp-green.webp';

export interface LangMap { pl: string; en: string; de: string; }
export interface TopBoxesData { availabilityBlock: string; infoBlock: string; }
export interface SiteConfig {
  promoBar: { enabled: boolean; messages: LangMap };
  topBoxes: { pl: TopBoxesData; en: TopBoxesData; de: TopBoxesData };
}
export const siteConfig: SiteConfig = {
  "promoBar": {
    // Pasek włączony — ustaw na false, aby wyłączyć
    "enabled": true,
    "messages": {
    "pl": `<span class="text-white" style="font-weight:600;">Rezerwacje już</span><a href="/#cennik" class="promo-label" style="color:inherit;text-decoration:none;cursor:pointer;">od 2 dób</a>`,
    "en": `<span class="text-white" style="font-weight:600;">Bookings</span><a href="/en/#cennik" class="promo-label" style="color:inherit;text-decoration:none;cursor:pointer;">from 2 nights</a>`,
    "de": `<span class="text-white" style="font-weight:600;">Buchungen</span><a href="/de/#cennik" class="promo-label" style="color:inherit;text-decoration:none;cursor:pointer;">ab 2 Nächten</a>`,
    }
  }, 
  "topBoxes": {
    "pl": {
      "availabilityBlock": `<h2 class="promo-h2">Wolne terminy</h2>

       <h3 class="text-[1.2rem] text-center mt-[20px] mb-[0px] font-semibold text-[#2c2c2c]">Wrzesień 2026</h3>
       ${/* <p class="text-base mt-2">25 - 28 sie (D1 )<br>-15% z kodem <span class="promo-code-wrap"><span class="promo-code" id="code1">LBD1SIE</span><button class="copy-btn" onclick="copyCode('code1', this)" title="Kopiuj"><svg width="26" height="26" viewBox="0 0 24 26" fill="none"><rect x="7" y="15" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"></rect><rect x="3" y="11" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"></rect></svg></button></span></p> */ ''}
       <p class="text-base mt-2">15 - 18 wrz (D1)<br>−10% z kodem <span class="promo-code-wrap"><span class="promo-code" id="code2">LBD1SIE</span><button class="copy-btn" onclick="copyCode('code2', this)" title="Kopiuj"><svg width="26" height="26" viewBox="0 0 24 26" fill="none"><rect x="7" y="15" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"></rect><rect x="3" y="11" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2"></rect></svg></button></span></p><p>21 - 26 wrz (D2)</p><p>20 - 25 wrz (D2)</p>
       
       <p class="text-base mt-2">Rezerwacja online, telefonicznie lub WhatsApp.</p><div class="my-4 flex justify-center gap-3 flex-wrap"><a aria-label="Zobacz cennik" class="inline-flex justify-center items-center w-[140px] h-[46px] text-base font-normal text-white bg-[#B5550E] border-none text-center no-underline normal-case cursor-pointer font-montserrat rounded-[6px] hover:bg-[#c4621a] transition-colors" href="#cennik">Cennik</a><a aria-label="Otwórz panel rezerwacji" class="inline-flex justify-center items-center w-[140px] h-[46px] text-base font-normal text-white bg-[#2F6940] border-none text-center no-underline normal-case cursor-pointer font-montserrat rounded-[6px] hover:bg-[#40a95c] transition-colors" href="#" onclick="openReservation(); return false;">Rezerwuj</a></div><ul class="promo-contact-list"><li class="promo-contact-item"><img src="${phoneGreen.src}" width="${phoneGreen.width}" height="${phoneGreen.height}" alt="Telefon"><a href="tel:+48789773285" class="promo-link-bold">789 773 285</a></li><li class="promo-contact-item"><img src="${whatsappGreen.src}" width="${whatsappGreen.width}" height="${whatsappGreen.height}" alt="WhatsApp"><a href="https://wa.me/48660194187" class="promo-link-bold">660 194 187</a></li></ul>`,
      "infoBlock": `<span class="promo-h2">Na miejscu</span><ul class="promo-list"><li class="promo-list-item"><span class="promo-bullet"></span>prywatne jacuzzi</li><li class="promo-list-item"><span class="promo-bullet"></span>sauna</li><li class="promo-list-item"><span class="promo-bullet"></span>balia do schładzania</li><li class="promo-list-item"><span class="promo-bullet"></span>grill + węgiel</li><li class="promo-list-item"><span class="promo-bullet"></span>hamaki</li><li class="promo-list-item"><span class="promo-bullet"></span>rowery</li><li class="promo-list-item"><span class="promo-bullet"></span>deski SUP</li><li class="promo-list-item"><span class="promo-bullet"></span>Wi-Fi</li><li class="promo-list-item"><span class="promo-bullet"></span>Netflix</li></ul><p class="text-base mt-2"><a href="https://lasbialas.pl/info/#/na-miejscu" target="_blank" class="promo-link">Zobacz wszystko</a></p><br><span class="promo-h2">Przed przyjazdem</span><p class="text-base mt-2"><a href="https://lasbialas.pl/info/#/przed-przyjazdem" target="_blank" class="promo-link">Sprawdź informacje</a> o dojeździe, zameldowaniu, wyposażeniu domków, zasadach pobytu - wszystko, co warto wiedzieć przed przyjazdem.</p>`
    },
    
    "en": {

       "availabilityBlock": `<h2 class="promo-h2">Available Dates</h2>

       <h3 class="text-[1.2rem] text-center mt-[15px] mb-[0px] font-semibold text-[#2c2c2c]">September 2026</h3>
       ${/*<p class="text-base mt-2"><p>25 - 28 Aug (D1)<br>−15% with code <span class="promo-code-wrap"><span class="promo-code" id="code2">LBD1SIE</span><button class="copy-btn"
