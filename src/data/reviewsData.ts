export interface Review {
  author: string;
  avatarUrl: string | null;
  rating: number;
  content: string;
  content_en: string;
  content_de: string;
  source: string;
  // Język oryginału opinii. Brak pola = polski.
  lang?: 'pl' | 'en' | 'de' | 'nl' | 'ru';
}

export const reviews: Review[] = [
  {
    "author": "Łukasz Kolasiak",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWHzWfvetLNyEniwDSMFALj-u1lM07vOEp9oPOYJgfKOE9ldp8s=w144-h144-p-rp-mo-br100",
    "rating": 5,
    "content": "Genialne miejsce jeżeli chcesz odpocząć i w pełni się zrelaksować. Cisza, spokój i komfort!\nDwa domki położone od siebie w takiej odległości, że nie zakłócają prywatności. Pełne wyposażenie! Nie musisz się o nic martwić. Na miejscu masz rowery, deski SUP, jacuzzi, saunę, grill z osprzętem, gry planszowe, książki, hamaki… mógłbym tak wymieniać i wymieniać. Naprawdę rzadko się zdarza by miejsce było tak przygotowane, czyste i przemyślane. Zdecydowanie polecam i na pewno tu wrócę!",
    "content_en": "A brilliant place if you want to rest and fully relax. Silence, peace and comfort!\nThe two cottages are far enough apart that your privacy is never disturbed. Fully equipped! You don't have to worry about a thing. On site you have bikes, SUP boards, a jacuzzi, a sauna, a barbecue with all the accessories, board games, books, hammocks… I could go on and on. It's really rare for a place to be this well prepared, clean and thought through. I highly recommend it and will definitely be back!",
    "content_de": "Ein genialer Ort, wenn man sich erholen und richtig entspannen möchte. Stille, Ruhe und Komfort!\nDie beiden Ferienhäuser liegen so weit voneinander entfernt, dass die Privatsphäre nicht gestört wird. Komplett ausgestattet! Man muss sich um nichts kümmern. Vor Ort gibt es Fahrräder, SUP-Boards, einen Whirlpool, eine Sauna, einen Grill mit Zubehör, Brettspiele, Bücher, Hängematten… ich könnte endlos weiter aufzählen. Es ist wirklich selten, dass ein Ort so gut vorbereitet, sauber und durchdacht ist. Absolut empfehlenswert, ich komme ganz sicher wieder!",
    "source": "Google"
  },
  {
    "author": "Robert",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-r.png",
    "rating": 5,
    "content": "Las Biala's spełniło wszystkie nasze oczekiwania.\nCisza, spokój i prywatność.\nCudowne miejsce otoczone lasami.\nW pełni wyposażony przytulny domek z dużym tarasem z którego jest bezpośrednie przejście do prywatnego jacuzzi.\nDo dyspozycji także hamaki, sauna, rowery, grille i super SUP-y którymi można popływać na pobliskim jeziorze.\nGospodarze Las Biala's to wspaniali, mili i przyjaźni ludzie.\nPobyt w tym pięknym miejscu oceniamy na 10 i wiemy już, że jeszcze tam wrócimy.",
    "content_en": "Las Biala's met all our expectations. Peace, quiet and privacy. A wonderful place surrounded by forests. Fully equipped, cozy cottage with a large terrace from which there is direct access to a private jacuzzi. Also available are hammocks, a sauna, bikes, grills and super SUPs that you can swim on the nearby lake. The hosts of Las Biala's are wonderful, nice and friendly people. We rate the stay in this beautiful place a 10 and we already know we will come back there.",
    "content_de": "Las Biala's hat all unsere Erwartungen erfüllt. Ruhe, Stille und Privatsphäre. Ein wunderbarer Ort umgeben von Wäldern. Voll ausgestattetes, gemütliches Ferienhaus mit großer Terrasse, von der aus es einen direkten Zugang zu einem privaten Whirlpool gibt. Zur Verfügung stehen auch Hängematten, eine Sauna, Fahrräder, Grills und tolle SUPs, mit denen man auf dem nahe gelegenen See schwimmen kann. Die Gastgeber von Las Biala's sind wunderbare, nette und freundliche Leute. Wir bewerten den Aufenthalt an diesem schönen Ort mit 10 und wissen bereits, dass wir dorthin zurückkehren werden.",
    "source": "Booking.com"
  },
  {
    "author": "Agata",
    "avatarUrl": "https://graph.facebook.com/v2.9/5472322942819251/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "Obiekt w pięknym miejscu blisko jeziora\nDookoła inne domki letniskowe jednak niesamowicie cicho. Domek bardzo ładnie i funkcjonalnie urządzony. W środku jest wszystko na najwyższym poziomie. Wspaniała pościel. Jacuzzi, którym nie trzeba się dzielić. Na powitanie gości właściciele zostawiają szampana. Do absolutnie niczego nie można się przyczepić.",
    "content_en": "The property is in a beautiful location close to the lake. There are other holiday cottages around, but it is incredibly quiet. The cottage is very nicely and functionally furnished. Inside, everything is of the highest standard. Wonderful bedding. A jacuzzi that you don't have to share. The owners leave champagne to welcome guests. There is absolutely nothing to complain about.",
    "content_de": "Die Unterkunft befindet sich an einem wunderschönen Ort nahe dem See. Ringsum gibt es andere Ferienhäuser, aber es ist unglaublich ruhig. Das Haus ist sehr schön und funktionell eingerichtet. Im Inneren ist alles auf höchstem Niveau. Wunderbare Bettwäsche. Ein Whirlpool, den man nicht teilen muss. Zur Begrüßung der Gäste hinterlassen die Besitzer Champagner. Es gibt absolut nichts auszusetzen.",
    "source": "Booking.com"
  },
  {
    "author": "Dagmara",
    "avatarUrl": null,
    "rating": 5,
    "content": "Spędziliśmy weekend w Las Biala's. To był niezwykle miły i wyciszający czas dla nas. Bardzo polecamy, domki czyste, zadbane, dobrze ogrzewane i przytulne. Gospodarze bardzo mili i pomocni. Można było także skorzystać z rowerów należących do Las Biala's i pozwiedzać okolicę. Z całego serca polecamy, na pewno jeszcze wrócimy :)",
    "content_en": "We spent a weekend in Las Biala's. It was an extremely nice and calming time for us. We highly recommend it, the cottages are clean, neat, well heated and cozy. The hosts were very nice and helpful. We could also use the bikes belonging to Las Biala's and explore the area. We recommend it with all our hearts, we will definitely return :)",
    "content_de": "Wir haben ein Wochenende in Las Biala's verbracht. Es war eine sehr schöne und beruhigende Zeit für uns. Wir können es sehr empfehlen, die Häuser sind sauber, gepflegt, gut beheizt und gemütlich. Die Gastgeber waren sehr nett und hilfsbereit. Wir konnten auch die Fahrräder von Las Biala's nutzen und die Gegend erkunden. Wir empfehlen es von ganzem Herzen, wir werden auf jeden Fall wiederkommen :)",
    "source": "AlohaCamp"
  },
  {
    "author": "Linda Darroch",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKFuNgoCx7ML2oLfjYBlORa32GlDFCVC-AXNfXH9UmCPSvhLg=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Żyjąc w biegu i w ciągłym pośpiechu, znalazłam tu jedno z najpiękniejszych, sielskich miejsc do odpoczynku. Spacery po lesie dają ciszę i spokój. Mała plaża nad jeziorem jest idealna na piknik z pięknym widokiem. Domki Las Biala's mają bardzo wysoki standard i zapewniły mi wszystko, czego potrzebowałam.",
    "content_en": "Living a busy and hectic life, I found this one of the most beautiful, idyllic places to unwind. The walks through the forest provide peace and quiet. The small beach area by the lake is perfect for picnics where you can take in the beautiful scenery. Las Biala's accommodation is to a very high standard and catered to all my needs.",
    "content_de": "Bei meinem hektischen und stressigen Alltag fand ich hier einen der schönsten, idyllischsten Orte zum Abschalten. Die Spaziergänge durch den Wald schenken Ruhe und Stille. Der kleine Strand am See ist perfekt für ein Picknick mit herrlicher Aussicht. Die Unterkunft von Las Biala's hat einen sehr hohen Standard und hat alle meine Bedürfnisse erfüllt.",
    "source": "Google",
    "lang": "en"
  },
  {
    "author": "Ania",
    "avatarUrl": null,
    "rating": 5,
    "content": "Zacznę od tego, że właścicielka to osoba bardzo pomocna, przemiła i świetna w kontakcie. Dziękujemy za świetną opiekę. Domek śliczny i świetnie wyposażony. Darmowe rowery, supy i sauna sprawiły że czas który tam spędziliśmy był jeszcze przyjemniejszy. Polecamy z całego serca i na pewno jeszcze wrócimy!",
    "content_en": "I'll start by saying that the owner is a very helpful, friendly and great person to contact. Thank you for your great care. The cottage is beautiful and perfectly equipped. Free bikes, SUPs and a sauna made the time we spent there even more pleasant. We recommend it with all our hearts and will definitely come back!",
    "content_de": "Ich beginne damit, dass die Besitzerin eine sehr hilfsbereite, freundliche und tolle Ansprechpartnerin ist. Vielen Dank für Ihre tolle Betreuung. Das Ferienhaus ist wunderschön und perfekt ausgestattet. Kostenlose Fahrräder, SUPs und eine Sauna machten die Zeit, die wir dort verbracht haben, noch angenehmer. Wir empfehlen es von ganzem Herzen und werden auf jeden Fall wiederkommen!",
    "source": "AlohaCamp"
  },
  {
    "author": "Magdalena",
    "avatarUrl": null,
    "rating": 5,
    "content": "Od pierwszej chwili, kiedy tylko przyjechaliśmy do Las Biala’s, wraz z mężem byliśmy zachwyceni tym miejscem. Cudowny spokój, który tu panuje oraz otaczająca nas zieleń drzew sprawiły, że mogliśmy naprawdę odpocząć i się zrelaksować. Wszystkie udogodnienia w domku były na najwyższym poziomie, co sprawiło, że nasz pobyt był po prostu wymarzony. Domek jest nie tylko pięknie urządzony, ale również w pełni wyposażony – niczego nam nie brakowało. Szczególnie doceniliśmy wygodne łóżko, a dodatkowym atutem był dostęp do książek i planszówek.\nPogoda nam dopisała, wieczory spędzaliśmy na tarasie, relaksując się na ultrawygodnych leżakach i podziwiając piękne otoczenie. Zachwyciły nas odwiedziny wiewiórki😊 Bliskość sklepu i jeziora była dla nas dużym plusem.\nGospodarze byli niesamowicie zaangażowani i otwarci, a kontakt z nimi niemal natychmiastowy i pomocny – to zdecydowanie ułatwiło nam pobyt i sprawiło, że czuliśmy się naprawdę mile widziani. Już teraz wiem, że wrócimy do Las Biala's.",
    "content_en": "From the very first moment we arrived at Las Biala’s, my husband and I were delighted with this place. The wonderful peace that reigns here and the green trees all around allowed us to truly rest and relax. All the amenities in the cottage were top-notch, which made our stay simply perfect. The cottage is not only beautifully furnished but also fully equipped – we had everything we needed. We especially appreciated the comfortable bed, and access to books and board games was an added bonus.\nThe weather was on our side, so we spent our evenings on the terrace, relaxing on ultra-comfortable loungers and admiring the beautiful surroundings. We were delighted by a visit from a squirrel 😊 Having the shop and the lake nearby was a big plus for us.\nThe hosts were incredibly committed and open, and contact with them was almost instant and helpful – this definitely made our stay easier and made us feel truly welcome. I already know we'll be back at Las Biala's.",
    "content_de": "Vom ersten Moment an, als wir in Las Biala’s ankamen, waren mein Mann und ich von diesem Ort begeistert. Die wunderbare Ruhe, die hier herrscht, und das Grün der Bäume ringsum haben es uns ermöglicht, uns wirklich zu erholen und zu entspannen. Alle Annehmlichkeiten im Ferienhaus waren auf höchstem Niveau, was unseren Aufenthalt einfach traumhaft gemacht hat. Das Haus ist nicht nur schön eingerichtet, sondern auch komplett ausgestattet – es hat uns an nichts gefehlt. Besonders geschätzt haben wir das bequeme Bett, und ein zusätzlicher Pluspunkt waren die Bücher und Brettspiele.\nDas Wetter hat mitgespielt, und so verbrachten wir die Abende auf der Terrasse, entspannten auf den ultrabequemen Liegestühlen und genossen die schöne Umgebung. Begeistert hat uns der Besuch eines Eichhörnchens 😊 Die Nähe zum Laden und zum See war für uns ein großes Plus.\nDie Gastgeber waren unglaublich engagiert und offen, und der Kontakt mit ihnen war fast sofort und hilfreich – das hat uns den Aufenthalt deutlich erleichtert und uns das Gefühl gegeben, wirklich willkommen zu sein. Ich weiß jetzt schon, dass wir nach Las Biala's zurückkommen.",
    "source": "Airbnb"
  },
  {
    "author": "Ron Tremor",
    "avatarUrl": null,
    "rating": 5,
    "content": "Mały kawałek raju… Bardzo spokojna okolica, a mimo to jest wszystko, czego potrzeba. Jeśli przy samodzielnym wyżywieniu pamięta się o zabraniu prowiantu (kawa, herbata, ręczniki papierowe, tabletki do zmywarki, żel pod prysznic, szampon, mydło, płyn do naczyń, ręczniki, ręczniki do sauny i szlafroki są już na miejscu), nie trzeba nawet opuszczać terenu obiektu, a i tak można przez cały urlop odpoczywać i być szczęśliwym. Jeśli czegoś się zapomni, tuż przed jeziorem jest mały sklep z różnymi drobiazgami. Sauna, jacuzzi, hamaki, leżaki… wszystko, żeby całkowicie się odprężyć. Przy dobrej pogodzie można wybrać się na rower albo na SUP (jedno i drugie zawsze bezpłatne i zadbane) wokół jeziora lub na jezioro. Gospodarze są bardzo mili, zawsze dostępni w razie próśb i życzeń i chętnie we wszystkim pomagają. Niczego nie brakowało i już cieszę się na kolejny urlop na miejscu 🙂",
    "content_en": "A little slice of paradise… A very quiet location, yet there is everything you need. If you're self-catering and remember to bring your own food and drink (coffee, tea, paper towels, dishwasher tablets, shower gel, shampoo, soap, washing-up liquid, towels, sauna towels and bathrobes are all already provided), you wouldn't even need to leave the grounds and could still relax and be happy for the whole holiday. If you forget something, there's a small shop with all sorts of bits and pieces just before the lake. Sauna, jacuzzi, hammocks, sun loungers… everything you need to switch off completely. When the weather is good, you can take a bike or a SUP board (both always free of charge and well maintained) around or out on the lake. The hosts are very friendly, always reachable with any requests or wishes, and happy to accommodate everything. Nothing was missing and I'm already looking forward to my next holiday there 🙂",
    "content_de": "Ein kleines Fleckchen Paradies… Sehr ruhig gelegen, dennoch gibt es alles was man braucht. Wenn man als Selbstversorger an alles denkt mitzubringen, was man an Verpflegung braucht (Kaffee, Tee, Küchenrolle, Spülertabs, Duschgel, Schampoo, Seife, Spüli, Handtücher, Saunatücher, Bademäntel schon alles vor Ort) müsste man nicht mal das Gelände der Unterkunft verlassen und kann dennoch den gesamten Urlaub entspannen und glücklich sein. Wenn man was vergessen haben sollte, gibt’s nen kleinen Laden mit jeglichem Schnickschnack kurz vorm See. Sauna, Whirlpool, Hängematten, Sonnenliegen … alles da, um komplett abspannen zu können. Doch bei gutem Wetter geht’s mit dem Rad oder SUP (Beides jederzeit kostenlos und immer gewartet nutzbar) um oder auf den See. Gastgeber sind sehr nett und bei Anliegen und Wünschen immer erreichbar und sind auch gewillt allem entgegen zu kommen. Es fehlte an nichts und ich freue mich schon auf den nächsten Urlaub vor Ort 🙂",
    "source": "Google",
    "lang": "de"
  },
  {
    "author": "Anastazja Szczerba",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWlc38xk-KRji3xkEKEYQZ10OiLgP9WXfQuYRmpOtHGLfmAspc=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spędziliśmy 3 noce w domkach, przyroda jest przepiękna, dużo zieleni, wiewiórek. Lokalizacja jest idealna dla miłośników chodzenia na ryby 🐟. Dziękujemy Pani gospodyni za wspaniały klimat i relaks w tak pięknym miejscu 🌸",
    "content_en": "We spent 3 nights in the cottages, the nature is beautiful, lots of greenery and squirrels. The location is ideal for fishing lovers 🐟. Thank you to our hostess for the wonderful atmosphere and relaxation in such a beautiful place 🌸",
    "content_de": "Wir haben 3 Nächte in den Ferienhäusern verbracht, die Natur ist wunderschön, viel Grün und Eichhörnchen. Die Lage ist ideal für Angelfreunde 🐟. Vielen Dank an die Gastgeberin für die wunderbare Atmosphäre und die Erholung an einem so schönen Ort 🌸",
    "source": "Google"
  },
  {
    "author": "Daria Pawlak",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWXXLMzAYBHv0F6b553ou-nxRijCIn2Q89v5ycSwu-RijE6h3-h=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Miejsce godne polecenia. Mili gospodarze. Domki w wysokim standardzie, sauna w cenie pobytu. Dodatkowo jest opcja rowerów a pogoda dopisała, żeby zwiedzić okolice. Z pewnością wrócę i każdemu niezdecydowanemu polecam 👍",
    "content_en": "A place worth recommending. Friendly hosts. High-standard cottages, sauna included in the price. Bikes are available too, and the weather was perfect for exploring the area. I'll definitely be back and recommend it to anyone who's undecided 👍",
    "content_de": "Ein empfehlenswerter Ort. Nette Gastgeber. Ferienhäuser mit hohem Standard, Sauna im Preis inbegriffen. Außerdem gibt es Fahrräder, und das Wetter war ideal, um die Umgebung zu erkunden. Ich komme sicher wieder und empfehle es allen Unentschlossenen 👍",
    "source": "Google"
  },
  {
    "author": "Adrian",
    "avatarUrl": null,
    "rating": 5,
    "content": "Przyjechaliśmy tu we dwoje, żeby na chwilę oderwać się od codzienności. To miejsce dało nam to, a nawet więcej. Gospodarze są bardzo mili i gościnni, a na każde nasze pytanie odpowiadali błyskawicznie. Na powitanie dostaliśmy nawet mały prezent 😊\n\nLokalizacja jest fantastyczna, jeśli szukacie krótkiego odpoczynku. Wiejski sklep i jezioro są w odległości 5 minut spacerem, powietrze jest czyste, a drzewa chronią przed najostrzejszym słońcem, nie sprawiając, że robi się ciemno. Są hamaki, gry planszowe, grill, bezpłatna prywatna sauna z rezerwacją godzin i prywatne jacuzzi przy domku. Wystarczająco daleko od drogi, by nie słyszeć hałasu, ale na tyle blisko, by łatwo dojechać.\n\nSpędziliśmy tu fantastyczny czas i na pewno będziemy chcieli wrócić tu na dłużej 😊",
    "content_en": "Came here with my partner to get a short break from day to day life. This place delivered that, and some more. The hosts are very friendly and welcoming, and responded to every query we had rapidly. We even got a little welcome gift when we arrived 😊\n\nThe location is fantastic if you're looking for a little break. Local general store and lake is within a 5 minute walking distance, the air is clean, and the trees block out the worst of the sunlight without making it feel darker. There's hammocks, board games, grill, free private sauna with time slot reservation, and private hot tub in the cabin area. Far enough from the road to be free from noise, but close enough to be accessible.\n\nWe had a fantastic time, and will absolutely want to spend more time here in the future 😊",
    "content_de": "Wir sind zu zweit hergekommen, um eine kurze Auszeit vom Alltag zu nehmen. Dieser Ort hat das erfüllt und noch mehr. Die Gastgeber sind sehr freundlich und herzlich und haben jede unserer Fragen schnell beantwortet. Bei der Ankunft gab es sogar ein kleines Willkommensgeschenk 😊\n\nDie Lage ist fantastisch, wenn man eine kleine Auszeit sucht. Ein Dorfladen und der See sind in 5 Minuten zu Fuß erreichbar, die Luft ist sauber, und die Bäume halten die stärkste Sonne ab, ohne dass es dunkel wirkt. Es gibt Hängematten, Brettspiele, einen Grill, eine kostenlose private Sauna mit Zeitfenster-Reservierung und einen privaten Whirlpool am Ferienhaus. Weit genug von der Straße entfernt, um ruhig zu sein, aber nah genug, um gut erreichbar zu sein.\n\nWir hatten eine fantastische Zeit und möchten in Zukunft unbedingt länger hierbleiben 😊",
    "source": "Airbnb",
    "lang": "en"
  },
  {
    "author": "Tomasz",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo dużo podróżujemy po Polsce i spędzaliśmy czas w naprawdę wielu miejscach, jest dużo bardzo dobrych, sporo fantastycznych... Ale często brakuje drobnych rzeczy np. brak pełnego wyposażenia kuchni.. brak ekspresu do kawy.. niedziałająca deszczownica.. mało tabletek do zmywarki...itp. Las Biala's niczego nie udaje po prostu jest w pełni fantastycznym miejscem, począwszy od gospodarzy😀 przez wyposażenie domku, cudownie spokojne i piękne miejsce w sercu lasu a kończąc na rewelacyjnej saunie i prywatnym jacuzzi w którym przebywanie po zmroku jest fantastycznym przeżyciem. Przez cztery dni nawet nie pomyśleliśmy aby włączyć radio lub telewizję, w domu jest mnóstwo gier i książek. Dla nas jedno z najlepszych miejsc w których byliśmy😀",
    "content_en": "We travel around Poland a lot and have spent time in really many places, there are a lot of very good ones, quite a few fantastic ones... But often there is a lack of small things, e.g. lack of full kitchen equipment.. lack of a coffee machine.. broken rain shower.. too few dishwasher tablets...etc. Las Biala's pretends nothing, it is simply a fully fantastic place, starting from the hosts😀 through the equipment of the cottage, a wonderfully peaceful and beautiful place in the heart of the forest and ending with a sensational sauna and a private jacuzzi where staying after dark is a fantastic experience. For four days we didn't even think about turning on the radio or TV, there are plenty of games and books in the house. For us, one of the best places we have been to😀",
    "content_de": "Wir reisen viel in Polen und haben Zeit an wirklich vielen Orten verbracht, es gibt viele sehr gute, ziemlich viele fantastische... Aber oft fehlen kleine Dinge, z.B. fehlende Vollausstattung der Küche.. keine Kaffeemaschine.. kaputte Regendusche.. zu wenige Spülmaschinentabs...usw. Las Biala's täuscht nichts vor, es ist einfach ein durch und durch fantastischer Ort, angefangen von den Gastgebern😀 über die Ausstattung des Ferienhauses, einem wunderbar friedlichen und schönen Ort im Herzen des Waldes bis hin zu einer sensationellen Sauna und einem privaten Whirlpool, in dem der Aufenthalt nach Einbruch der Dunkelheit ein fantastisches Erlebnis ist. Vier Tage lang haben wir nicht einmal daran gedacht, das Radio oder den Fernseher einzuschalten, es gibt viele Spiele und Bücher im Haus. Für uns einer der besten Orte, an denen wir je waren😀",
    "source": "AlohaCamp"
  },
  {
    "author": "Paweł",
    "avatarUrl": null,
    "rating": 5,
    "content": "Piękne, spokojne miejsce blisko jeziora i praktycznie w puszczy. Domek przytulny, z dużym terenem, wyposażenie w stanie idealnym. Gospodarze przemili i komunikatywni, z bardzo dobrymi rekomendacjami miejsc na grzyby :)",
    "content_en": "A beautiful, peaceful place close to the lake and practically in the forest. A cosy cottage with a large plot, equipment in perfect condition. The hosts are lovely and communicative, with great tips on where to go mushroom picking :)",
    "content_de": "Ein wunderschöner, ruhiger Ort nahe am See und praktisch mitten im Wald. Ein gemütliches Ferienhaus mit großem Grundstück, die Ausstattung in einwandfreiem Zustand. Die Gastgeber sind sehr nett und kommunikativ und haben tolle Tipps, wo man Pilze sammeln kann :)",
    "source": "Airbnb"
  },
  {
    "author": "Barbara",
    "avatarUrl": "https://lh3.googleusercontent.com/-Xnk_mZykfrg/AAAAAAAAAAI/AAAAAAAAAGM/-JV83orxsJU/photo.jpg?sz=50",
    "rating": 5,
    "content": "Mimo że domek jest w lesie ciężko się tu nudzić. Są gry, książki, telewizor i wifi. Dostępne są rowery i SUPy. Domek czysty, zadbany i świetnie wyposażony. Na powitanie czekało winko. Świetny kontakt z właścicielami.",
    "content_en": "Even though the cottage is in the forest, it's hard to get bored here. There are games, books, TV and wifi. Bikes and SUPs are available. Cottage clean, neat and well equipped. Wine was waiting as a welcome. Great contact with the owners.",
    "content_de": "Obwohl sich das Haus im Wald befindet, wird es hier schwer, sich zu langweilen. Es gibt Spiele, Bücher, Fernseher und WLAN. Fahrräder und SUPs stehen zur Verfügung. Ferienhaus sauber, gepflegt und gut ausgestattet. Ein Wein wartete zur Begrüßung. Toller Kontakt mit den Besitzern.",
    "source": "Booking.com"
  },
  {
    "author": "Gosia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJIr1aB-ArWMTJd_AWP9jiuLTnomII7ckQrYPakiE0C-hY3Tw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Przepiękne miejsce położone w sercu Puszczy Noteckiej. Cisza i spokój, idealnie do leniwego odpoczynku. Czyściutki domek, dobrze wyposażony w którym jest wszystko, czego potrzebujesz. Na miejscu też do dyspozycji grill, rowery, deski SUP, leżaki, hamaki. Nic tylko wypoczywać. Mozesz też posiedzieć w gorącym jacuzzi pod gwiazdami a na koniec dnia, jeśli tylko masz ochotę, przemili gospodarze Ola i Arek, przygotują Ci to, co tygryski lubią najbardziej, czyli seans w pachnącej fińskiej saunie po której, od razu wskoczysz do bali lodowatej wody a następnie udasz się do wygodnego pokoiku na seans filmowy na Netflixie. Tak, LAS BIALA'S polecam z całego serca. Dziękujemy Olu i Arku, to był udany wypoczynek. Pozdrawiamy, Gosia i Arek",
    "content_en": "A beautiful place in the heart of the Noteć Forest. Peace and quiet, perfect for a lazy break. A spotless, well-equipped cottage with everything you need. On site you also have a barbecue, bikes, SUP boards, sun loungers and hammocks. Nothing to do but relax. You can also sit in the hot jacuzzi under the stars, and at the end of the day, if you feel like it, the lovely hosts Ola and Arek will prepare what tiggers like best: a session in the fragrant Finnish sauna, after which you jump straight into a tub of ice-cold water and then head to your cosy room for a film night on Netflix. Yes, I recommend LAS BIALA'S with all my heart. Thank you, Ola and Arek, it was a wonderful break. Best wishes, Gosia and Arek",
    "content_de": "Ein wunderschöner Ort im Herzen der Puszcza Notecka. Stille und Ruhe, ideal für eine entspannte Auszeit. Ein blitzsauberes, gut ausgestattetes Ferienhaus, in dem es alles gibt, was man braucht. Vor Ort stehen außerdem Grill, Fahrräder, SUP-Boards, Liegestühle und Hängematten zur Verfügung. Einfach nur erholen. Man kann auch im heißen Whirlpool unter den Sternen sitzen, und am Ende des Tages bereiten die überaus netten Gastgeber Ola und Arek auf Wunsch das vor, was Tigger am liebsten mag: einen Saunagang in der duftenden finnischen Sauna, nach dem man direkt in den Bottich mit eiskaltem Wasser springt und dann im gemütlichen Zimmer einen Filmabend mit Netflix genießt. Ja, LAS BIALA'S empfehle ich von ganzem Herzen. Danke, Ola und Arek, es war eine gelungene Erholung. Liebe Grüße, Gosia und Arek",
    "source": "Google"
  },
  {
    "author": "Victor",
    "avatarUrl": null,
    "rating": 5,
    "content": "Byliśmy tu w sumie tydzień i jesteśmy więcej niż zadowoleni! Domek jest naprawdę piękny (dokładnie taki jak na zdjęciach) i niczego w nim nie brakuje. Gospodarze byli zawsze mili i uprzejmi, a na pytania odpowiadali błyskawicznie. Dla wszystkich miłośników kawy: o uzupełnienie zapasów zawsze zadbają. Nie bójcie się pytać. Nie policzono nam za to nic ekstra 😉 Szczególnie pozytywnie wyróżnia się czystość całego obiektu :) Jacuzzi również gorąco polecamy. Las Bialas to idealne miejsce na wypoczynek i relaks – dla każdego, kto chce choć na chwilę wyrwać się ze stresującej codzienności w pracy. Dziękujemy za wspaniały czas! Chętnie wrócimy <3",
    "content_en": "We stayed for a whole week and were more than satisfied! The accommodation is really beautiful (exactly as in the photos) and nothing is missing. The hosts were always friendly and accommodating and answered questions promptly. For all the coffee lovers out there: there's always a fresh supply. Don't be shy to ask. We weren't charged anything extra 😉 The cleanliness of the whole place really stood out :) We can also warmly recommend the jacuzzi. Las Bialas is the perfect place for rest and relaxation – for anyone who wants to break away from their stressful working life for a while. Thank you for a wonderful time! We'd love to come back <3",
    "content_de": "Wir waren insgesamt eine Woche da und mehr als zufrieden! Die Unterkunft ist wirklich schön (genau wie auf den Bildern) und es fehlt an nichts. Die Gastgeber waren stets freundlich + zuvorkommend und haben prompt auf Fragen geantwortet. Für alle Kaffeeliebhaber unter euch: Für Nachschub wird immer gesorgt. Scheut euch nicht zu fragen. Uns wurde nichts extra berechnet 😉 Besonders positiv herausgestochen, ist die Sauberkeit der Anlage :) Den Jacuzzi können wir ebenfalls wärmstens empfehlen. Las Bialas ist die perfekte Unterkunft für Erholung und Entspannung - für jeden, der mal aus seinen stressigen Arbeitsalltag ausbrechen möchte. Vielen Dank für die wundervolle Zeit! Wir kommen gerne wieder <3",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Darina",
    "avatarUrl": null,
    "rating": 5,
    "content": "Weekend spędzony w tym wspaniałym miejscu zapamiętamy na długo i na pewno wrócimy. Cisza i spokój, bliskość natury oraz maksymalnie przemyślana przestrzeń sprawiły, że nasz wypoczynek był niezwykle komfortowy.",
    "content_en": "We will remember the weekend we spent in this wonderful place for a long time, and we will definitely come back. The peace and quiet, being at one with nature and the thoughtfully designed space made our stay as comfortable as it could be.",
    "content_de": "Das Wochenende an diesem wunderbaren Ort werden wir lange in Erinnerung behalten, und wir kommen ganz sicher wieder. Stille und Ruhe, die Nähe zur Natur und der bis ins Detail durchdachte Raum haben unseren Aufenthalt äußerst komfortabel gemacht.",
    "source": "Airbnb",
    "lang": "ru"
  },
  {
    "author": "Owen",
    "avatarUrl": null,
    "rating": 5,
    "content": "Wszystko jest świetnie urządzone, czyste i zadbane. Domek stoi w pięknym, spokojnym otoczeniu.\n\nDomki są świetnie zrobione, a jacuzzi (dodatkowo płatne) i sauna są super.\n\nDziękujemy za wspaniały pobyt",
    "content_en": "The space is extremely well done, clean and maintained. The cabin is in a beautiful peaceful setting.\n\nThe cabins are well done and the jacuzzi (extra fee) and sauna are great.\n\nThanks for a great stay",
    "content_de": "Alles ist hervorragend gestaltet, sauber und gepflegt. Das Ferienhaus liegt in einer wunderschönen, ruhigen Umgebung.\n\nDie Ferienhäuser sind toll gemacht, und der Whirlpool (gegen Aufpreis) und die Sauna sind großartig.\n\nDanke für einen tollen Aufenthalt",
    "source": "Airbnb",
    "lang": "en"
  },
  {
    "author": "Natalia",
    "avatarUrl": null,
    "rating": 5,
    "content": "Jesteśmy bardzo zadowoleni z pobytu, gospodarze bardzo pomocni i życzliwi. Możliwość korzystania z sauny po uprzednim umówieniu godziny i rezerwacji, z tej części pobytu jesteśmy najbardziej zadowoleni :) sam domek piękny, pachnący drewnem, przestronny, pomimo jego małej powierzchni, z bardzo dobrze wyposażoną kuchnią. Możliwość korzystania z grilla - grill z całym niezbędnym wyposażeniem (podpałka, brykiet, specjalne sztućce i szczypce). Domki znajdują się dosłownie w środku lasu, wokół panowała cisza i spokój. Polecam to miejsce wszystkim osobom, które chcą odpocząć od zgiełku dużego miasta. Na pewno zawitamy do Las Biala's ponownie.",
    "content_en": "We are very pleased with our stay, the hosts are very helpful and kind. The possibility of using the sauna after prior appointment and reservation, we are most satisfied with this part of the stay :) the cottage itself is beautiful, smelling of wood, spacious, despite its small area, with a very well-equipped kitchen. Possibility to use a grill - a grill with all the necessary equipment (kindling, briquettes, special cutlery and tongs). The cottages are located literally in the middle of the forest, there was peace and quiet around. I recommend this place to all people who want to rest from the hustle and bustle of a big city. We will definitely visit Las Biala's again.",
    "content_de": "Wir sind sehr zufrieden mit unserem Aufenthalt, die Gastgeber sind sehr hilfsbereit und freundlich. Die Möglichkeit, die Sauna nach vorheriger Terminabsprache und Reservierung zu nutzen, dieser Teil des Aufenthaltes hat uns am besten gefallen :) das Haus selbst ist schön, riecht nach Holz, geräumig trotz der kleinen Fläche, mit einer sehr gut ausgestatteten Küche. Möglichkeit, einen Grill zu benutzen - ein Grill mit der gesamten notwendigen Ausrüstung (Anzündholz, Briketts, spezielles Besteck und Zange). Die Ferienhäuser liegen buchstäblich mitten im Wald, ringsum herrschte Ruhe und Stille. Ich empfehle diesen Ort allen Menschen, die sich vom Trubel einer Großstadt erholen wollen. Wir werden Las Biala's auf jeden Fall wieder besuchen.",
    "source": "AlohaCamp"
  },
  {
    "author": "Patrycja",
    "avatarUrl": null,
    "rating": 5,
    "content": "Zdecydowanie polecam Las Biala's. Lokalizacja bezbłędna - można sie zanurzyć w cichym i urokliwym lesie lub podziwiać zachody słońca nad jeziorkiem. Obiekt sam w sobie wygląda rownie bajecznie, wiec nawet w deszczowe dni jest pięknie - czytanie ksiezek na lezaczku, sauna czy jacuzzi- to wszystko pozwala by mimo pochmurnej pogody, czuc sie dalej jak w bajce. Do najbliższego sklepu jest 5 min drogi, więc nawet wszystko jest pod ręką. Właściciele - go kolejna piękna bajka. Pomocni, otwarci i dbają o gości, jednocześnie dając przestrzeń na odpoczynek. Idealne miejsce by naładować baterie i wypocząć. Na pewno jeszcze tam wrócę!",
    "content_en": "I definitely recommend Las Biala's. Flawless location - you can immerse yourself in a quiet and charming forest or admire sunsets over the lake. The facility itself looks equally fabulous, so even on rainy days it's beautiful - reading books on a deckchair, a sauna or a jacuzzi - all this allows you to still feel like in a fairy tale despite the cloudy weather. The nearest shop is a 5-minute walk, so everything is at hand. The owners - another beautiful fairy tale. Helpful, open and care for guests, while giving space to rest. An ideal place to recharge your batteries and rest. I will definitely come back there!",
    "content_de": "Ich empfehle Las Biala's auf jeden Fall. Makellose Lage - Sie können in einen ruhigen und bezaubernden Wald eintauchen oder Sonnenuntergänge über dem See bewundern. Die Einrichtung selbst sieht ebenso fabelhaft aus, sodass es auch an regnerischen Tagen schön ist – Bücher auf einem Liegestuhl lesen, Sauna oder Whirlpool – all dies ermöglicht es Ihnen, sich trotz des bewölkten Wetters wie in einem Märchen zu fühlen. Das nächste Geschäft ist nur 5 Gehminuten entfernt, sodass alles griffbereit ist. Die Besitzer – ein weiteres schönes Märchen. Hilfsbereit, offen und kümmern sich um die Gäste, während sie Raum zum Ausruhen geben. Ein idealer Ort, um neue Energie zu tanken und sich auszuruhen. Ich werde auf jeden Fall wiederkommen!",
    "source": "AlohaCamp"
  },
  {
    "author": "Julia",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-j.png",
    "rating": 5,
    "content": "Cudowna miejscówka, położona w pięknej okolicy. Domki są dopracowane pod każdym względem, a możliwość skorzystania z jacuzzi dodatkowo umila pobyt. Przemili właściciele. Serdecznie polecam każdemu.",
    "content_en": "Wonderful spot, located in a beautiful area. The cottages are refined in every respect, and the possibility of using the jacuzzi additionally makes the stay more pleasant. Very nice owners. I cordially recommend it to everyone.",
    "content_de": "Ein wunderbarer Ort in einer wunderschönen Gegend. Die Ferienhäuser sind in jeder Hinsicht verfeinert, und die Möglichkeit, den Whirlpool zu nutzen, macht den Aufenthalt zusätzlich angenehmer. Sehr nette Besitzer. Ich kann es jedem wärmstens empfehlen.",
    "source": "Booking.com"
  },
  {
    "author": "Vinividiviczi",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-v.png",
    "rating": 4.5,
    "content": "-Ładne zadbane i dobrze wyposażone domki \n-Bardzo fajna sauna - na plus że można zarezerwować i korzystać samemu oraz zamknąć się od środka co daje duże poczucie komfortu. \n-Cisza i spokój",
    "content_en": "-Nice, neat and well equipped cottages \n-Very nice sauna - a plus that you can book and use it yourself and lock it from the inside, which gives a great sense of comfort. \n-Peace and quiet",
    "content_de": "-Schöne, gepflegte und gut ausgestattete Ferienhäuser \n-Sehr schöne Sauna - ein Pluspunkt, dass man sie selbst buchen und nutzen sowie von innen verschließen kann, was ein tolles Gefühl von Komfort gibt. \n-Ruhe und Stille",
    "source": "Booking.com"
  },
  {
    "author": "Mykhailo",
    "avatarUrl": null,
    "rating": 5,
    "content": "To miejsce, do którego chce się wracać ✨\nJesteśmy tu już drugi raz — i znów pełne poczucie spokoju, przytulności oraz prawdziwego wypoczynku. Atmosfera pozwala całkowicie się zresetować i cieszyć każdą chwilą.\n\nDookoła piękna natura, cisza i wyjątkowa magia, którą czuć od razu. Warunki pobytu są komfortowe, czysto i bardzo przytulnie — wszystko przemyślane z myślą o gościach. Widać troskę i dbałość o detale.\n\nTen wypoczynek ponownie pozostawił po sobie wyłącznie miłe wrażenia. Z całego serca polecamy wszystkim, którzy cenią spokój, komfort i miejsca, do których chce się wracać nie raz 🤍",
    "content_en": "A place you want to come back to ✨\nThis is already our second time here — and once again a full sense of peace, cosiness and real rest. The atmosphere lets you completely reset and enjoy every moment.\n\nAll around there's beautiful nature, silence and a special magic you feel right away. The accommodation is comfortable, clean and very cosy — everything is designed with guests in mind. You can see the care and attention to detail.\n\nOnce again this stay left us with nothing but lovely memories. We wholeheartedly recommend it to everyone who values peace, comfort and places you want to come back to again and again 🤍",
    "content_de": "Ein Ort, an den man gerne zurückkehrt ✨\nWir sind schon zum zweiten Mal hier — und wieder ein volles Gefühl von Ruhe, Gemütlichkeit und echter Erholung. Die Atmosphäre lässt einen komplett abschalten und jeden Moment genießen.\n\nRundherum wunderschöne Natur, Stille und ein besonderer Zauber, den man sofort spürt. Die Unterkunft ist komfortabel, sauber und sehr gemütlich — alles ist mit Blick auf die Gäste durchdacht. Man sieht die Fürsorge und die Liebe zum Detail.\n\nAuch dieser Aufenthalt hat nur schöne Erinnerungen hinterlassen. Von Herzen empfehlen wir ihn allen, die Ruhe, Komfort und Orte schätzen, an die man immer wieder zurückkehren möchte 🤍",
    "source": "Airbnb"
  },
  {
    "author": "Corneliuscat",
    "avatarUrl": "https://graph.facebook.com/v2.9/1787571761266238/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "Mieliśmy wspaniały pobyt w tym pięknym domku wakacyjnym! Okolica jest cicha, spokojna i bardzo bezpieczna, idealna do relaksu i wypoczynku. Domek stoi bardzo blisko jeziora, zaledwie krótki spacer od niego, dzięki czemu nasze poranki i wieczory były naprawdę magiczne.\nGospodarze byli niesamowici: gościnni, troskliwi i zawsze chętni do pomocy. Wyposażenie na najwyższym poziomie, wszystko, czego potrzebowaliśmy, a nawet więcej: czysto, wygodnie i bardzo dobrze przygotowane na udany pobyt.\nGorąco polecam to miejsce każdemu, kto szuka uroczego miejsca na wypoczynek!",
    "content_en": "We had an amazing stay at this beautiful holiday cottage! The location is quiet, peaceful, and feels very safe — making it perfect for relaxation and unwinding. The cottage is so close to the lake, just a short stroll away, which made our mornings and evenings truly magical.\nThe hosts were incredible — welcoming, thoughtful, and always happy to help. The facilities were top-notch with everything we needed and more — clean, comfortable, and well-equipped for a great stay.\nHighly recommend this place for anyone looking for a lovely getaway!",
    "content_de": "Wir hatten einen fantastischen Aufenthalt in diesem schönen Ferienhaus! Die Lage ist ruhig, friedlich und fühlt sich sehr sicher an - ideal zum Entspannen und Erholen. Das Ferienhaus liegt so nah am See, nur einen kurzen Spaziergang entfernt, was unsere Morgen und Abende wirklich magisch machte.\nDie Gastgeber waren unglaublich - einladend, aufmerksam und immer hilfsbereit. Die Einrichtungen waren erstklassig mit allem, was wir brauchten und mehr - sauber, komfortabel und gut ausgestattet für einen tollen Aufenthalt.\nIch kann diesen Ort jedem wärmstens empfehlen, der auf der Suche nach einem schönen Kurzurlaub ist!",
    "source": "Booking.com",
    "lang": "en"
  },
  {
    "author": "Jessica",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK1oqBCBHyujPYabGCyTPr0T_SEF1kaJg8doJTr-JE0_Hz8IdBd=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Piękne miejsce. Cisza i spokój, a w tle urokliwy domek z jacuzzi i sauna.\nDomek w pełni wyposażony. Jedyne czego mi brakowało, to piekarnika ale w zamian jest grill.\nBardzo polecam ♥️",
    "content_en": "A beautiful place. Peace and quiet, with a charming cottage with a jacuzzi and sauna in the background.\nThe cottage is fully equipped. The only thing I missed was an oven, but there's a barbecue instead.\nHighly recommended ♥️",
    "content_de": "Ein wunderschöner Ort. Stille und Ruhe, und im Hintergrund ein charmantes Ferienhaus mit Whirlpool und Sauna.\nDas Ferienhaus ist komplett ausgestattet. Das Einzige, was mir gefehlt hat, war ein Backofen, dafür gibt es einen Grill.\nSehr empfehlenswert ♥️",
    "source": "Google"
  },
  {
    "author": "Dariusz Koza",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLSWVs6dF6rI90VSuRpcHNhwUodnDvEMpsEPkP3PHtgN5LBuQ=w144-h144-p-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Super miejsce na wyciszenie i odpoczynek kontakt z naturą. Wszystko co potrzebne jest dostępne. Poza tym czysto i schludnie.\nMożemy polecić z całego serca.\nJeszcze tu wrócimy 😁",
    "content_en": "A great place to unwind, rest and be close to nature. Everything you need is available. On top of that, it's clean and tidy.\nWe can recommend it with all our hearts.\nWe'll be back 😁",
    "content_de": "Ein super Ort zum Abschalten, Erholen und für Naturverbundenheit. Alles, was man braucht, ist vorhanden. Außerdem sauber und ordentlich.\nWir können ihn von ganzem Herzen empfehlen.\nWir kommen wieder 😁",
    "source": "Google"
  },
  {
    "author": "Wojciech Kielpinski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKa4extQZLhHBDY-bGLVVWfl0bA7UAND1XqdUV1NP2xAVrVeA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe miejsce. Domki w lesie i to dosłownie! Rano podczas golenia oglądałem wiewiórki, śpiew ptaków, stukanie dzięcioła nieopodal. Idealne miejsce żeby wypocząć od hałasu miasta. Wyposażenie w wysokim standardzie, nowocześnie i przytulnie zarazem. Widać pracę włożoną w każdy detal. Okolica malownicza; można się udać na spacery po lesie, blisko jezioro z plażą, rowerem można się wybrać na przejażdżkę i odkryć nowe miejsca, a i nawet wybrać sobie inną plażę wg. nastroju. Serdecznie polecamy, przesympatyczni właściciele. Proszę się nas spodziewać częściej! ;)",
    "content_en": "A wonderful place. Cottages in the forest – literally! In the morning, while shaving, I watched squirrels, listened to birdsong and a woodpecker knocking nearby. The perfect place to rest from the noise of the city. High-standard furnishings, modern and cosy at the same time. You can see the work put into every detail. The surroundings are picturesque: you can go for walks in the forest, there's a lake with a beach nearby, you can take a bike ride and discover new places, and even pick a different beach to suit your mood. Warmly recommended, very friendly owners. Expect to see us more often! ;)",
    "content_de": "Ein wunderbarer Ort. Ferienhäuser im Wald, und das wortwörtlich! Morgens beim Rasieren habe ich Eichhörnchen beobachtet, Vogelgesang und das Klopfen eines Spechts ganz in der Nähe gehört. Der ideale Ort, um sich vom Stadtlärm zu erholen. Ausstattung auf hohem Niveau, modern und gemütlich zugleich. Man sieht die Arbeit, die in jedes Detail gesteckt wurde. Malerische Umgebung: Man kann im Wald spazieren gehen, in der Nähe gibt es einen See mit Strand, mit dem Fahrrad kann man Ausflüge machen und neue Orte entdecken und sich sogar je nach Laune einen anderen Strand aussuchen. Herzlich empfohlen, überaus sympathische Eigentümer. Wir kommen bestimmt öfter! ;)",
    "source": "Google"
  },
  {
    "author": "Aleksandra",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-a.png",
    "rating": 5,
    "content": "Wspaniała lokalizacja, sauna oraz jacuzzi działały bez zarzutu, są zadbane a Gospodarze dbają o serwis i komfort. Zwracam uwagę na czystość, Właściciele stanęli na wysokości zadania. Domek oraz otoczenie doskonale przygotowane i zadbane. Podczas wypoczynku nie musieliśmy się o nic martwić. Cudowne miejsce na pełen relaks. Cisza i spokój, las oraz jezioro - wszystko tutaj jest oazą spokoju. Gospodarze bardzo dbali o nasz komfort i byli z nami w stałym kontakcie. Bardzo polecam Las Biala's! Mam nadzieję, że to nie był mój ostatni pobyt w tym uroczym zakątku.",
    "content_en": "Great location, sauna and jacuzzi worked flawlessly, they are well-kept and the Hosts take care of service and comfort. I pay attention to cleanliness, the Owners rose to the occasion. The cottage and surroundings are perfectly prepared and well-kept. We didn't have to worry about anything during our stay. A wonderful place for complete relaxation. Peace and quiet, forest and lake - everything here is an oasis of peace. The hosts cared very much about our comfort and were in constant contact with us. I highly recommend Las Biala's! I hope it wasn't my last stay in this charming corner.",
    "content_de": "Tolle Lage, Sauna und Whirlpool funktionierten einwandfrei, sie sind gepflegt und die Gastgeber kümmern sich um Service und Komfort. Ich achte auf Sauberkeit, die Besitzer waren der Situation gewachsen. Das Haus und die Umgebung sind perfekt vorbereitet und gepflegt. Wir mussten uns während unseres Urlaubs um nichts kümmern. Ein wunderbarer Ort zur völligen Entspannung. Ruhe und Frieden, Wald und See - alles hier ist eine Oase der Ruhe. Die Gastgeber kümmerten sich sehr um unseren Komfort und waren in ständigem Kontakt mit uns. Ich kann Las Biala's sehr empfehlen! Ich hoffe, es war nicht mein letzter Aufenthalt in dieser bezaubernden Ecke.",
    "source": "Booking.com"
  },
  {
    "author": "Gracjan Walch",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWaiES3c9zhXwDpgRNgfZuNondVanvLhoBcR0xOTmF91eEHRE-d=w144-h144-p-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Domki wyposażone lepiej niż pięciogwiazdkowe hotele, byliśmy pod ogromnym wrażeniem. Dziękujemy Oli i Arkowi za fantastyczny pobyt. Polecamy miejsce całym serduszkiem :)",
    "content_en": "The cottages are better equipped than five-star hotels, we were hugely impressed. Thank you, Ola and Arek, for a fantastic stay. We recommend this place with all our hearts :)",
    "content_de": "Die Ferienhäuser sind besser ausgestattet als Fünf-Sterne-Hotels, wir waren total begeistert. Danke an Ola und Arek für einen fantastischen Aufenthalt. Wir empfehlen diesen Ort von ganzem Herzen :)",
    "source": "Google"
  },
  {
    "author": "Rysia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIKXXk6saXYBUoxVdl69CUIgiD8JRVScdR1yAtTLrg9CMn_8g=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Przepiękna miejscówka, w pełni wyposażone domki, czyściutko, cicho i przyjemnie. Do tego bardzo sympatyczni właściciele. Pobyt u was to była sama przyjemność. Polecam!",
    "content_en": "A beautiful spot, fully equipped cottages, spotlessly clean, quiet and pleasant. On top of that, very friendly owners. Staying with you was a pure pleasure. Highly recommended!",
    "content_de": "Ein wunderschönes Fleckchen, komplett ausgestattete Ferienhäuser, blitzsauber, ruhig und angenehm. Dazu sehr sympathische Eigentümer. Der Aufenthalt bei euch war ein reines Vergnügen. Sehr empfehlenswert!",
    "source": "Google"
  },
  {
    "author": "Maciej",
    "avatarUrl": null,
    "rating": 5,
    "content": "Domek w Las Biala's był w 100% zgodny z ofertą. Szególnie nas ucieszyły siatki w oknach przeciw  owadom, bo sen to podstawa dobrego wypoczynku, a my nie lubimy brzęczących nocą komarów. Czas wykorzystaliśmy na czytanie książek, na bujanie się w hamakach, na kawę z ciastkiem, czy na jeżdżenie na własnych ebikach. Nie było problemu z ich ładowaniem. W razie niepogody rowery można przechować na zadaszonym tarasie. Teren ośrodka jest ogrodzony, zamykany i oświetlony. Gospodarze chętnie podpowiadali ciekawe miejsca, które warto było odwiedzić na rowerach.",
    "content_en": "The cottage at Las Biala's was 100% as advertised. We were especially pleased with the insect screens on the windows, because sleep is the basis of a good holiday and we don't like mosquitoes buzzing at night. We spent our time reading books, swinging in the hammocks, having coffee and cake, and riding our own e-bikes. Charging them was no problem. In bad weather, the bikes can be stored on the covered terrace. The grounds are fenced, lockable and lit. The hosts were happy to suggest interesting places worth visiting by bike.",
    "content_de": "Das Ferienhaus in Las Biala's entsprach zu 100 % der Beschreibung. Besonders gefreut haben uns die Insektenschutzgitter an den Fenstern, denn Schlaf ist die Grundlage guter Erholung, und wir mögen keine nachts summenden Mücken. Unsere Zeit haben wir mit Lesen, Schaukeln in den Hängematten, Kaffee und Kuchen und Ausfahrten mit unseren eigenen E-Bikes verbracht. Das Aufladen war kein Problem. Bei schlechtem Wetter können die Räder auf der überdachten Terrasse abgestellt werden. Das Gelände ist eingezäunt, abschließbar und beleuchtet. Die Gastgeber haben uns gerne interessante Orte empfohlen, die sich mit dem Fahrrad zu besuchen lohnten.",
    "source": "Airbnb"
  },
  {
    "author": "Nicholas Drycz",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIzAT51OgkkuSmFIS6y9MKSaX6C3yxWikNQP3tEP5q5gRMGHA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Oaza spokoju i miejsce, w którym można się wyciszyć, zrelaksować i naładować baterie. Klimat i atmosfera tej ukrytej perełki w lesie nad jeziorem sprawią, że zrozumiesz, o co w życiu chodzi. Jeśli chcesz na chwilę uciec od wyścigu szczurów, z całego serca polecam Las Biala's. Domki są wykończone w wysokim standardzie, w zgodzie z charakterem otoczenia, a do jeziora i lokalnego sklepu spożywczego jest bardzo blisko. Gospodarze byli wspaniali, niezwykle pomocni i życzliwi. To świetne źródło wiedzy o okolicy. Na pewno wrócę. Dziękuję, Las Biala's.",
    "content_en": "A haven of tranquility and a place where you can unwind, relax and recharge. The overall climate and atmosphere of this hidden gem within the forest by a lake will make you realise the meaning of life. If you want to escape the rat race for a break, I would recommend Las Biala's totally. The chalets are fitted out to a high standard within character of the surroundings and a very close walking distance to the lake and local grocery store and off licence. The hosts were brilliant, extremely helpful and accommodating. They are a great source of local knowledge. I will be going back. Thank you Las Biala's.",
    "content_de": "Eine Oase der Ruhe und ein Ort, an dem man abschalten, entspannen und neue Energie tanken kann. Klima und Atmosphäre dieses versteckten Juwels im Wald an einem See lassen einen den Sinn des Lebens erkennen. Wer für eine Weile dem Hamsterrad entfliehen möchte, dem empfehle ich Las Biala's uneingeschränkt. Die Ferienhäuser sind auf hohem Niveau und passend zum Charakter der Umgebung eingerichtet, der See und der Dorfladen sind zu Fuß ganz in der Nähe. Die Gastgeber waren großartig, äußerst hilfsbereit und entgegenkommend. Sie kennen sich in der Gegend bestens aus. Ich komme wieder. Danke, Las Biala's.",
    "source": "Google",
    "lang": "en"
  },
  {
    "author": "Adrian",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo przyjemnie miejsce, z dala od zgiełku w środku lasu. Idealne na wyrwanie się z miasta. W pojedynkę, z partnerem, z znajomymi. Każdy znajdzie coś dla siebie.",
    "content_en": "A very pleasant place, far from the hustle and bustle, in the middle of the forest. Perfect for getting out of the city. On your own, with a partner, with friends. There's something for everyone.",
    "content_de": "Ein sehr angenehmer Ort, fernab vom Trubel mitten im Wald. Ideal, um der Stadt zu entfliehen. Allein, zu zweit oder mit Freunden. Für jeden ist etwas dabei.",
    "source": "Airbnb"
  },
  {
    "author": "Piotr Mazur",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLYPrlMz-lo1bGEe66NB9tNwGfM0QleNhnOvwTk8Asa9zRxOA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Piękne i spokojne miejsce, idealne na wypoczynek. Do jeziora i sklepu trzeba dojść 300m, za to na miejscu cisza i spokój. Polecam chcącym dobrze odpocząć.",
    "content_en": "A beautiful and peaceful place, ideal for a holiday. The lake and the shop are a 300 m walk away, but on site there's peace and quiet. Recommended for anyone who wants a proper rest.",
    "content_de": "Ein schöner und ruhiger Ort, ideal zum Erholen. Zum See und zum Laden sind es 300 m zu Fuß, dafür herrscht vor Ort Stille und Ruhe. Empfehlenswert für alle, die sich richtig erholen möchten.",
    "source": "Google"
  },
  {
    "author": "Mykhailo",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo piękne miejsce na wypoczynek.\nDuży teren, są rowery, a także można wybrać się na spacer do lasu i cieszyć się przyrodą oraz ciszą.\n\nW domu znajdują się wszystkie niezbędne udogodnienia, aby pobyt był komfortowy.\nJest kawa, herbata, różne gry planszowe, a także możliwość obejrzenia filmów.\n\nBardzo wygodne jest to, że w pokojach można kontrolować temperaturę, a na terenie znajduje się sauna i strefa do grillowania.\n\nJesteśmy bardzo zadowoleni z pobytu i na pewno tu wrócimy.\nPolecamy to miejsce każdemu, bo tutaj można naprawdę odpocząć!",
    "content_en": "A really beautiful place to relax.\nA large plot, there are bikes, and you can also go for a walk in the forest and enjoy nature and silence.\n\nThe house has all the amenities you need for a comfortable stay.\nThere's coffee, tea, various board games, and you can also watch films.\n\nIt's very convenient that you can control the temperature in the rooms, and there's a sauna and a barbecue area on site.\n\nWe are very happy with our stay and will definitely come back.\nWe recommend this place to everyone, because here you can really rest!",
    "content_de": "Ein sehr schöner Ort zum Erholen.\nEin großes Gelände, es gibt Fahrräder, und man kann auch im Wald spazieren gehen und die Natur und die Stille genießen.\n\nIm Haus gibt es alle nötigen Annehmlichkeiten für einen komfortablen Aufenthalt.\nEs gibt Kaffee, Tee, verschiedene Brettspiele und auch die Möglichkeit, Filme zu schauen.\n\nSehr praktisch ist, dass man die Temperatur in den Zimmern regeln kann, und auf dem Gelände gibt es eine Sauna und einen Grillplatz.\n\nWir sind mit unserem Aufenthalt sehr zufrieden und kommen bestimmt wieder.\nWir empfehlen diesen Ort allen, denn hier kann man sich wirklich erholen!",
    "source": "Airbnb"
  },
  {
    "author": "Donata Malak",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK88Un1O27NXlPnOZMD3bZFPeiI4BqGWlUQ7BHPmAKLEPleMg=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "To miejsce to prawdziwa perełka!\nDomki położone w samym sercu lasu dają niesamowite poczucie prywatności i bliskości natury. Cisza, spokój i ten klimat... jak małe Bali w środku lasu.\nJacuzzi pod gołym niebem to absolutny hit - relaks na 100%. Do tego jeziorko tuż obok, śpiew ptaków i totalne odcięcie od codzienności.\nIdealne miejsce, żeby zwolnić, odetchnąć i naprawdę odpocząć.\nCudowny czas, do którego chce się wracać. Zdecydowanie polecam każdemu, kto marzy o chwili dla siebie w pięknych okolicznościach przyrody.",
    "content_en": "This place is a real gem!\nThe cottages, set in the very heart of the forest, give an amazing sense of privacy and closeness to nature. Silence, peace and that atmosphere... like a little Bali in the middle of the forest.\nThe open-air jacuzzi is an absolute hit – 100% relaxation. Add the lake just nearby, birdsong and a complete break from everyday life.\nThe perfect place to slow down, breathe and truly rest.\nA wonderful time you'll want to come back to. I highly recommend it to anyone dreaming of some time for themselves in beautiful natural surroundings.",
    "content_de": "Dieser Ort ist eine echte Perle!\nDie Ferienhäuser mitten im Wald vermitteln ein unglaubliches Gefühl von Privatsphäre und Nähe zur Natur. Stille, Ruhe und diese Atmosphäre... wie ein kleines Bali mitten im Wald.\nDer Whirlpool unter freiem Himmel ist ein absolutes Highlight – Entspannung zu 100 %. Dazu der See ganz in der Nähe, Vogelgesang und eine totale Auszeit vom Alltag.\nDer ideale Ort, um langsamer zu werden, durchzuatmen und sich wirklich zu erholen.\nEine wunderbare Zeit, zu der man gerne zurückkehrt. Absolut empfehlenswert für alle, die sich eine Auszeit in schöner Natur wünschen.",
    "source": "Google"
  },
  {
    "author": "Sylwia Gwizdoń",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKugUqhrs4beSSBDLYt_N5_N9GFgdCebTdWSkOiLWnmKhce1g=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "To mega miejsce pod każdym względem. Jest tu dosłownie wszystko - klimat cisza spokój, domki na najwyższym poziomie. Całość zadbana. Polecam serdecznie!",
    "content_en": "A great place in every respect. It has literally everything – atmosphere, silence, peace, and top-notch cottages. Everything is well looked after. Warmly recommended!",
    "content_de": "Ein großartiger Ort in jeder Hinsicht. Hier gibt es buchstäblich alles – Atmosphäre, Stille, Ruhe und Ferienhäuser auf höchstem Niveau. Alles sehr gepflegt. Herzlich empfohlen!",
    "source": "Google"
  },
  {
    "author": "Magda",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK6o5xNXILwGdfaXbsvP4-qaUV-9jYbLdDBS5fATQX-JSc=s96-c",
    "rating": 5,
    "content": "Rewelacyjnie przygotowane miejsce do wypoczynku w każdych warunkach pogodowych! Śliczne domki i piękne otoczenie przyrody i sympatyczni właściciele :)",
    "content_en": "Sensational place prepared for recreation in all weather conditions! Lovely cottages and beautiful natural surroundings and friendly owners :)",
    "content_de": "Ein sensationell vorbereiteter Erholungsort bei jedem Wetter! Wunderschöne Ferienhäuser und eine wunderschöne natürliche Umgebung und freundliche Besitzer :)",
    "source": "Booking.com"
  },
  {
    "author": "Igor",
    "avatarUrl": null,
    "rating": 5,
    "content": "Miejsce zachwyciło nas od samego początku. Domek znajduje się w środku lasu, niedaleko jeziora. Panuje tu cisza i spokój. Zdecydowanie można odetchnąć tu pełną piersią i odpocząć. Sam domek jest niesamowicie dobrze wyposażony. Poza doskonałym zaopatrzeniem kuchni oferuje wiele gier planszowych i książek. Można nawet przyrządzić grilla lub skorzystać z dwóch rowerów, które znajdują się na wyposażeniu domku. Fantastyczna atmosfera i bezproblemowy kontakt z przemiłym gospodarzem. Nic, tylko przyjeżdżać.",
    "content_en": "We were enchanted by this place from the very beginning. The cottage is in the middle of the forest, not far from the lake. It's quiet and peaceful here. You can really breathe deeply and rest. The cottage itself is incredibly well equipped. Apart from a perfectly stocked kitchen, it offers lots of board games and books. You can even have a barbecue or use the two bikes that come with the cottage. A fantastic atmosphere and easy contact with a lovely host. Just come!",
    "content_de": "Der Ort hat uns vom ersten Moment an begeistert. Das Ferienhaus liegt mitten im Wald, unweit des Sees. Hier herrschen Stille und Ruhe. Man kann hier wirklich tief durchatmen und sich erholen. Das Haus selbst ist unglaublich gut ausgestattet. Neben einer hervorragend bestückten Küche gibt es viele Brettspiele und Bücher. Man kann sogar grillen oder die zwei Fahrräder nutzen, die zum Ferienhaus gehören. Eine fantastische Atmosphäre und unkomplizierter Kontakt mit einem sehr netten Gastgeber. Einfach herkommen!",
    "source": "Airbnb"
  },
  {
    "author": "Janin",
    "avatarUrl": null,
    "rating": 5,
    "content": "Spędziliśmy tu cudowny pobyt i z całego serca polecamy to miejsce. Domek był przepiękny, bardzo czysty i niesamowicie cichy – idealne miejsce, żeby odpocząć i oderwać się od codzienności.\n\nGospodarze byli wyjątkowo mili, serdeczni i uprzejmi. W razie pytań czy próśb zawsze szybko nam pomagali, a odpowiedź dostawaliśmy w bardzo krótkim czasie.\n\nNaprawdę nie było się do czego przyczepić. Czuliśmy się tu znakomicie i w każdej chwili chętnie wrócimy. Dziękujemy za wspaniałą gościnność!",
    "content_en": "We had a wonderful stay and can wholeheartedly recommend this place. The accommodation was beautiful, very clean and incredibly quiet – just the right place to relax and switch off from everyday life.\n\nThe hosts were exceptionally friendly, warm and accommodating. Whenever we had questions or requests, they always helped us quickly, and we received a reply within a very short time.\n\nThere was truly nothing to complain about. We felt completely at home and would come back any time. Thank you for the wonderful hospitality!",
    "content_de": "Wir hatten einen wunderschönen Aufenthalt und können diese Unterkunft von ganzem Herzen weiterempfehlen. Die Unterkunft war wunderschön, sehr sauber und unglaublich ruhig – genau der richtige Ort, um zu entspannen und vom Alltag abzuschalten.\n\nDie Gastgeber waren außergewöhnlich freundlich, herzlich und zuvorkommend. Bei Fragen oder Anliegen haben sie uns immer schnell weitergeholfen und wir haben innerhalb kürzester Zeit eine Rückmeldung erhalten.\n\nEs gab wirklich nichts zu bemängeln. Wir haben uns rundum wohlgefühlt und würden jederzeit wiederkommen. Vielen Dank für die tolle Gastfreundschaft!",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Simon",
    "avatarUrl": null,
    "rating": 5,
    "content": "Świetne miejsce, żeby spędzić kilka spokojnych dni w środku lasu. Z jacuzzi i sauną idealne także wiosną i jesienią. Jest wszystko, czego potrzeba :)",
    "content_en": "A great place to spend a few quiet days in the middle of the forest. With the jacuzzi and sauna, it's ideal in spring and autumn too. It has everything you need :)",
    "content_de": "Tolle Unterkunft um ein paar ruhige Tage mitten im Wald zu verbringen. Mit jacuzzi und Sauna ideal auch im Frühling und Herbst. Es ist alles da was man braucht :)",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "A Ka",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIG2AaOK0bB0n98DbwQDTKznXJhZSLMExdWbf5kohLOCuaBqg=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Miejsce super, cisza i spokój. W domku znajdziecie wszystko co potrzebne. Bardzo dobry kontakt z przemiłymi właścicielami. Serdecznie polecam!",
    "content_en": "A great place, quiet and peaceful. You'll find everything you need in the cottage. Very good communication with the lovely owners. Warmly recommended!",
    "content_de": "Ein super Ort, still und ruhig. Im Ferienhaus findet man alles, was man braucht. Sehr guter Kontakt zu den überaus netten Eigentümern. Herzlich empfohlen!",
    "source": "Google"
  },
  {
    "author": "Filip",
    "avatarUrl": null,
    "rating": 5,
    "content": "Fantastyczne miejsce do spędzenia czasu w ciszy i spokoju, w towarzystwie drzew i śpiewu ptaków. Do tego relaks w postaci jackuzzi, hamaku, sauny daje niesamowite połączenie. Możliwość skorzystania bezpłatnie z rowerów to kolejny plus.  Gospodarze są bardzo pomocni, odpowiadają sprawnie na wszelkie zapytania. Świetnie skonstruowana strona ze wszelkimi informacjami i tipami na okoliczne miejsca do odwiedzenia. Zdecydowanie polecam i wiem, że wrócę :)",
    "content_en": "A fantastic place to spend time in peace and quiet, surrounded by trees and birdsong. Add to that relaxing in the jacuzzi, the hammock and the sauna, and you get an amazing combination. Being able to use the bikes for free is another plus. The hosts are very helpful and respond quickly to every query. A really well-built website with all the information and tips on places to visit nearby. I highly recommend it and I know I'll be back :)",
    "content_de": "Ein fantastischer Ort, um Zeit in Ruhe und Stille zu verbringen, umgeben von Bäumen und Vogelgezwitscher. Dazu Entspannung im Whirlpool, in der Hängematte und in der Sauna – eine unglaubliche Kombination. Dass man die Fahrräder kostenlos nutzen kann, ist ein weiterer Pluspunkt. Die Gastgeber sind sehr hilfsbereit und beantworten alle Anfragen zügig. Eine hervorragend gemachte Website mit allen Informationen und Tipps zu Ausflugszielen in der Umgebung. Absolut empfehlenswert, und ich weiß, dass ich wiederkomme :)",
    "source": "Airbnb"
  },
  {
    "author": "Rosa Lia",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjVrzj2JcvATcQ-s92wL0X6t9nEtZM9g8U4oSkuGmViSkbk0nbE-XA=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Pobyt w Las Biala's był naprawdę fantastyczny. Właścicielka obiektu Ola to przesympatyczna osoba, która zadbała o każdy szczegół, abyśmy czuli się komfortowo. Domek był wyposażony we wszystko co niezbędne. Zdecydowanie atutem była lokalizacja - w środku lasu. Na miejscu były dostępne rowery oraz grill.\nTo miejsce jest idealne na relaks i ucieczkę od codzienności. Zdecydowanie polecam każdemu, kto marzy o chwili spokoju i odpoczynku od miasta 🥰",
    "content_en": "Our stay at Las Biala's was truly fantastic. The owner, Ola, is a lovely person who took care of every detail so that we felt comfortable. The cottage had everything we needed. The location – in the middle of the forest – was definitely a big plus. Bikes and a barbecue were available on site.\nThis place is perfect for relaxing and escaping everyday life. I highly recommend it to anyone dreaming of some peace and a break from the city 🥰",
    "content_de": "Der Aufenthalt bei Las Biala's war wirklich fantastisch. Die Eigentümerin Ola ist ein überaus sympathischer Mensch, die sich um jedes Detail gekümmert hat, damit wir uns wohlfühlen. Das Ferienhaus war mit allem Notwendigen ausgestattet. Ein klarer Pluspunkt war die Lage – mitten im Wald. Vor Ort standen Fahrräder und ein Grill zur Verfügung.\nDieser Ort ist ideal zum Entspannen und um dem Alltag zu entfliehen. Absolut empfehlenswert für alle, die sich nach Ruhe und Erholung von der Stadt sehnen 🥰",
    "source": "Google"
  },
  {
    "author": "Michał",
    "avatarUrl": "https://graph.facebook.com/v2.9/1812728872656068/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "Nieskazitelna czystość, dbałość o najmniejsze detale, świetne wyposażenie, mili gospodarze gotowi w każdej chwili pomóc, cisza i spokój",
    "content_en": "Impeccable cleanliness, attention to the smallest details, great equipment, nice hosts ready to help at any time, peace and quiet",
    "content_de": "Makellose Sauberkeit, Liebe zum kleinsten Detail, tolle Ausstattung, nette Gastgeber, die jederzeit hilfsbereit sind, Ruhe und Frieden",
    "source": "Booking.com"
  },
  {
    "author": "Martyna",
    "avatarUrl": null,
    "rating": 5,
    "content": "Naprawdę bardzo piękne domki w środku lasu, zamiast trawy mech i igliwe (to dodaje dużo uroku temu miejscu) Polecamy z całego serca ♥️",
    "content_en": "Really very beautiful cottages in the middle of the forest, with moss and pine needles instead of grass (which adds a lot of charm to the place). We wholeheartedly recommend it ♥️",
    "content_de": "Wirklich sehr schöne Ferienhäuser mitten im Wald, statt Rasen gibt es Moos und Kiefernnadeln (das verleiht dem Ort viel Charme). Wir empfehlen es von ganzem Herzen ♥️",
    "source": "Airbnb"
  },
  {
    "author": "Jakub",
    "avatarUrl": null,
    "rating": 5,
    "content": "Fantastyczne miejsce na reset! Domek położony w samym sercu Puszczy Noteckiej okazał się strzałem w dziesiątkę. Wnętrze jest niezwykle czyste, bardzo zadbane i od razu widać, że włożono w to miejsce mnóstwo serca. Cisza, zapach lasu i natura na wyciągnięcie ręki sprawiają, że to idealna baza, żeby całkowicie odłączyć się od codzienności i naładować baterie. Zdecydowanie polecam każdemu, kto szuka spokoju i prawdziwego odpoczynku od zgiełku.",
    "content_en": "A fantastic place for a reset! The cottage, located in the very heart of the Noteć Forest, turned out to be a bull's-eye. The interior is exceptionally clean and very well kept, and you can tell right away that a lot of heart has gone into this place. The silence, the smell of the forest and nature within arm's reach make it the perfect base for completely disconnecting from everyday life and recharging your batteries. I highly recommend it to anyone looking for peace and real rest from the hustle and bustle.",
    "content_de": "Ein fantastischer Ort für einen Neustart! Das Ferienhaus mitten in der Puszcza Notecka war ein Volltreffer. Das Innere ist außergewöhnlich sauber, sehr gepflegt, und man sieht sofort, dass hier viel Herzblut drinsteckt. Die Stille, der Duft des Waldes und die Natur direkt vor der Tür machen es zur idealen Basis, um komplett vom Alltag abzuschalten und neue Energie zu tanken. Absolut empfehlenswert für alle, die Ruhe und echte Erholung vom Trubel suchen.",
    "source": "Airbnb"
  },
  {
    "author": "Magdalena Roweda",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV5GJSD7pZu_6SBuNf1QJL1idBB8Gg9-oNm6sr-hg9VHRjD1ny-=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Polecam pobyt w domku Las Bialas. Urocze miejsce, czegoś takiego właśnie szukałam. Jest możliwość korzystania z sauny w cenie pobytu. Najbardziej urzekł mnie widok lasu i spokoj, czego bardzo potrzebowałam żeby naładować baterie na kolejny tydzień. W pobliżu domku znajduje się również piękne jeziorko i mały sklepik, bardzo dobrze zaopatrzony. Polecam z całego serca na pewno tutaj jeszcze wrócę. 😍😍😍😍",
    "content_en": "I recommend a stay at Las Biala's. A charming place, exactly what I was looking for. The sauna is included in the price. What captivated me most was the forest view and the peace, which I really needed to recharge my batteries for the week ahead. Near the cottage there's also a beautiful lake and a small, very well-stocked shop. I recommend it with all my heart and will definitely be back. 😍😍😍😍",
    "content_de": "Ich empfehle einen Aufenthalt bei Las Biala's. Ein bezaubernder Ort, genau so etwas habe ich gesucht. Die Sauna ist im Preis inbegriffen. Am meisten haben mich der Blick auf den Wald und die Ruhe begeistert, die ich dringend brauchte, um meine Akkus für die nächste Woche aufzuladen. In der Nähe des Ferienhauses gibt es auch einen schönen See und einen kleinen, sehr gut sortierten Laden. Ich empfehle es von ganzem Herzen und komme ganz sicher wieder. 😍😍😍😍",
    "source": "Google"
  },
  {
    "author": "Anita",
    "avatarUrl": null,
    "rating": 5,
    "content": "Genialne miejsce dla osob chcących uciec od zgiełku miasta. Domek świetnie wyposażony. Wiele ścieżek na spacery. Na pewno wrócimy.",
    "content_en": "Brilliant place for people wanting to escape the hustle and bustle of the city. Perfectly equipped cottage. Many walking paths. We will definitely come back.",
    "content_de": "Genialer Ort für Leute, die dem Trubel der Stadt entfliehen wollen. Perfekt ausgestattetes Haus. Viele Wanderwege. Wir werden auf jeden Fall wiederkommen.",
    "source": "AlohaCamp"
  },
  {
    "author": "Ania",
    "avatarUrl": "https://img.alohacamp.com/lG7HUkDqZjTTyF6uZ8CXu_Y7gfbJ9yHjHzmxk077cT8/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvYjYwN2RlNGZlNjE2Y2M2MjliZWM0NmIxYjE1M2EwYWZhODYzOWI3NS5wbmc",
    "rating": 5,
    "content": "Rewelacyjne miejsce do wypoczynku i odpoczęcia od miejskiego zgiełku. Wszystko na miejscu. Przemili i pomocni gospodarze. Polecam",
    "content_en": "Sensational place to relax and rest from the hustle and bustle of the city. Everything on site. Very nice and helpful hosts. I recommend",
    "content_de": "Sensationeller Ort, um sich zu entspannen und sich vom Trubel der Stadt zu erholen. Alles vor Ort. Sehr nette und hilfsbereite Gastgeber. Ich empfehle es",
    "source": "AlohaCamp"
  },
  {
    "author": "Dagmara Cybulska",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJKXYI4_nDpPfX2fNMdB9g-czbKlSGqrIeCshEbqtS2rxtwqNM=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce, godne polecenia. Domki wyposażone są we wszystkie niezbędne rzeczy, ale i takie ponadprogramowe umilacze czasu, które ratują w przypadku deszczowej pogody. Jeśli zależy Wam na komforcie oraz spokoju to lepiej nie da się trafić. Nie dość, że miejsce jest cudowne to jeszcze właściciele okazali się równie cudowni - pomocni i sympatyczni. Oby więcej takich miejsc i ludzi :)",
    "content_en": "A great place, well worth recommending. The cottages have all the essentials, plus extra little treats that save the day when it rains. If comfort and peace matter to you, you couldn't do better. Not only is the place wonderful, the owners turned out to be just as wonderful – helpful and friendly. We need more places and people like this :)",
    "content_de": "Ein super Ort, sehr empfehlenswert. Die Ferienhäuser sind mit allem Notwendigen ausgestattet, aber auch mit kleinen Extras, die bei Regenwetter retten. Wenn euch Komfort und Ruhe wichtig sind, könnt ihr es nicht besser treffen. Nicht nur der Ort ist wunderbar, auch die Eigentümer sind genauso wunderbar – hilfsbereit und sympathisch. Mehr solche Orte und Menschen :)",
    "source": "Google"
  },
  {
    "author": "Serhii",
    "avatarUrl": null,
    "rating": 5,
    "content": "Niesamowite miejsce na odpoczynek! Gospodarze są niezwykle gościnni, serdeczni i dbają o każdy szczegół. Dom jest czysty, przytulny i w pełni wyposażony. Szczególnie warto wyróżnić świetną saunę – idealny sposób na relaks po aktywnym dniu. Panuje tutaj wyjątkowa atmosfera, a otaczająca natura zapewnia prawdziwy spokój.\n\nDziękujemy za ciepłe przyjęcie i komfortowy pobyt!",
    "content_en": "An amazing place to rest! The hosts are extremely hospitable, cordial and take care of every detail. The house is clean, cozy and fully equipped. Special mention should be made of the great sauna – the perfect way to relax after an active day. There is a unique atmosphere here, and the surrounding nature ensures real peace.\n\nThank you for the warm welcome and comfortable stay!",
    "content_de": "Ein erstaunlicher Ort zum Ausruhen! Die Gastgeber sind äußerst gastfreundlich, herzlich und kümmern sich um jedes Detail. Das Haus ist sauber, gemütlich und voll ausgestattet. Besonders hervorzuheben ist die tolle Sauna – die perfekte Art, sich nach einem aktiven Tag zu entspannen. Hier herrscht eine einzigartige Atmosphäre, und die umgebende Natur sorgt für echte Ruhe.\n\nVielen Dank für den herzlichen Empfang und den komfortablen Aufenthalt!",
    "source": "Booking.com"
  },
  {
    "author": "Natalia",
    "avatarUrl": null,
    "rating": 5,
    "content": "Super miejsce na 100% odpoczynek i regenerację. Domek i wszystko w okol dopracowane w każdym szczególe. Zdecydowanie polecam 😊",
    "content_en": "Super place for 100% rest and regeneration. The cottage and everything around refined in every detail. I definitely recommend 😊",
    "content_de": "Super Ort für 100% Erholung und Regeneration. Das Ferienhaus und alles drum herum ist in jedem Detail raffiniert. Ich empfehle es auf jeden Fall 😊",
    "source": "AlohaCamp"
  },
  {
    "author": "HRH",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV14NMjSn1QzY0L8ArPGjLV7hHoxou_kvgJ1YCmPT-H9K3B8d4=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Miejsce położone jest w pięknym lesie i to prawdziwa ucieczka od zabieganego życia. Domek jest czysty i dobrze wyposażony.",
    "content_en": "The place is located in a beautiful forest and it’s a real escapism from the busy life. The cabin is clean and well equipped.",
    "content_de": "Der Ort liegt in einem wunderschönen Wald und ist eine echte Flucht aus dem hektischen Alltag. Das Ferienhaus ist sauber und gut ausgestattet.",
    "source": "Google",
    "lang": "en"
  },
  {
    "author": "Benedikt Schröbel",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocL97lL_ZCD9TPZHuUdtI8f3Tlkgjq5pLm_Z14VEe4txWCHPJw=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Bardzo przyjaźni gospodarze, pomagają, w czym tylko mogą.\nObiekt jest bardzo czysty i położony w bardzo spokojnym miejscu.\nMożna tu wybrać się na piękne spacery po lesie. Plaża nad jeziorem jest około 3 minut od domku.\nJeśli nie znasz polskiego, to nie problem, gospodarze dobrze mówią po angielsku. Dołączają nawet instrukcje po niemiecku.",
    "content_en": "Very friendly hosts who help wherever they can.\nThe accommodation is very clean and in a very quiet location.\nYou can go for lovely walks in the forest here. The beach on the lake is about 3 minutes from the house.\nIf you don't speak Polish, it doesn't matter, they speak good English. They even provide instructions in German.",
    "content_de": "Sehr Freundliche Gastgeber, helfen dir wo sie können.\nUnterkunft ist sehr Sauber und sehr ruhig gelegen.\nSchöne Waldspaziergänge kann man hier gehen. Der Strand zum See liegt ca 3min von dem Haus entfernt.\nWenn man kein Polnisch kann ist es egal, die können gut Englisch. Legen sogar Deutsche Anleitungen bei",
    "source": "Google",
    "lang": "de"
  },
  {
    "author": "Weronika",
    "avatarUrl": null,
    "rating": 5,
    "content": "Piękne miejsce, które zostanie w naszej pamięci na długo! Czysty, zadbany domek, z pełnym wyposażeniem. Możliwość skorzystania z hamaków, rowerów, supów, jacuzzi i sauny. Dla każdego coś miłego :) Lokalizacja w uroczym lesie, w bliskiej odległości od jeziora i sklepiku. Gospodarze pomocni i zaangażowani. Polecam z całego serca!",
    "content_en": "A beautiful place that will stay in our memory for a long time! A clean, well-kept cottage with everything you need. Hammocks, bikes, SUP boards, the jacuzzi and the sauna are all available. Something for everyone :) The location is in a charming forest, close to the lake and a little shop. The hosts are helpful and committed. I wholeheartedly recommend it!",
    "content_de": "Ein wunderschöner Ort, der uns lange in Erinnerung bleiben wird! Ein sauberes, gepflegtes Ferienhaus mit kompletter Ausstattung. Hängematten, Fahrräder, SUP-Boards, Whirlpool und Sauna stehen zur Verfügung. Für jeden etwas dabei :) Die Lage in einem zauberhaften Wald, ganz in der Nähe des Sees und eines kleinen Ladens. Die Gastgeber sind hilfsbereit und engagiert. Von ganzem Herzen empfehlenswert!",
    "source": "Airbnb"
  },
  {
    "author": "Marcin",
    "avatarUrl": null,
    "rating": 5,
    "content": "Super domek. Kontakt z właścicielem bardzo dobry. Wszystko zgodne z opisem. Na pewno jeszcze tu wrócimy. Polecam.",
    "content_en": "Super cottage. Contact with the owner very good. Everything as described. We will definitely come back here. I recommend.",
    "content_de": "Super Ferienhaus. Kontakt mit dem Besitzer sehr gut. Alles wie beschrieben. Wir werden auf jeden Fall hierher zurückkehren. Ich empfehle es.",
    "source": "AlohaCamp"
  },
  {
    "author": "Anika",
    "avatarUrl": null,
    "rating": 5,
    "content": "Jest wszystko, czego potrzeba, miły i bezproblemowy kontakt, spokojna okolica – spędziliśmy tu bardzo dobry czas!",
    "content_en": "Everything you need is there, friendly & uncomplicated communication, a quiet location – we had a really good time!",
    "content_de": "Alles, was man braucht vorhanden, nette & unkomplizierte Kommunikation, ruhige Lage - wir hatten eine sehr gute Zeit!",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Lucas",
    "avatarUrl": null,
    "rating": 5,
    "content": "Gospodarze to bardzo serdeczni ludzie, którzy chcą zapewnić swoim gościom to, co najlepsze, i to im się udaje. Z czystym sumieniem polecamy to miejsce. Spędziliśmy tu bardzo piękny i spokojny tydzień. 😊 Domek znajduje się w środku lasu, dzięki czemu panuje tu spokojna atmosfera, a powietrze jest cudowne.",
    "content_en": "The hosts are very warm people who want to give their guests the very best, and they do. We recommend this place with a clear conscience. We had a really lovely & relaxing week. 😊 The accommodation is in the middle of the forest, which means a peaceful atmosphere & wonderful air.",
    "content_de": "Die Gastgeber sind sehr herzliche Menschen, die Ihren Gästen das Beste bieten möchten & dies auch tun. Wir empfehlen die Unterkunft mit bestem Gewissen. Wir hatten eine sehr schöne & entspannte Woche. 😊 Die Unterkunft befindet sich mitten im Wald & bietet somit eine ruhige Atmosphäre & wunderbare Luft.",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Agrestino1",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-a.png",
    "rating": 5,
    "content": "Wspaniałe miejsce wśród leśnej ciszy, komfortowo wyposażone, bardzo czyste i zadbane. Jacuzzi i sauna w środku leśnej głuszy gwarantują niezapomniane wspomnienia. W to miejsce można śmiało uciekać od miejskiego zgiełku.\nW razie pytań przemili i kompetentni właściciele mają odpowiedzi i sposoby :)",
    "content_en": "A wonderful place amidst the forest silence, comfortably equipped, very clean and well-kept. Jacuzzi and sauna in the middle of the wilderness guarantee unforgettable memories. You can safely escape from the hustle and bustle of the city to this place. In case of questions, the delightful and competent owners have answers and solutions :)",
    "content_de": "Ein wunderbarer Ort inmitten der Stille des Waldes, komfortabel ausgestattet, sehr sauber und gepflegt. Whirlpool und Sauna mitten in der Wildnis garantieren unvergessliche Erinnerungen. Man kann an diesen Ort getrost vor dem Trubel der Stadt fliehen. Bei Fragen haben die reizenden und kompetenten Besitzer Antworten und Lösungen parat :)",
    "source": "Booking.com"
  },
  {
    "author": "Benedikt",
    "avatarUrl": null,
    "rating": 5,
    "content": "Gospodyni była super miła i łatwo było się z nią skontaktować. Bardzo czysty domek, zdecydowanie godny polecenia",
    "content_en": "The host was super friendly and easy to reach. A very clean place, definitely worth recommending",
    "content_de": "Gastgeberin war super Freundlich, gut zu erreichen. Sehr saubere Unterkunft, Empfehlungswert aufjedenfall",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Damian",
    "avatarUrl": "https://img.alohacamp.com/Hd96_0hdtldxth6erA1Vxb8dmjRUSsthsqJ1HWfOTkU/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvN2ZhNDk1MjljMTUxZmYyZjYzODAwNjIyOTlhMWVjZTU2ZDMxZGZiZC5qcGc",
    "rating": 5,
    "content": "Piękne miejsce i spokojnie można odpocząć od pracy i miasta cudowni właściciele na pewno wrócimy ponownie",
    "content_en": "Beautiful place and you can easily rest from work and the city wonderful owners we will definitely return again",
    "content_de": "Schöner Ort und man kann sich leicht von der Arbeit und der Stadt ausruhen wunderbare Besitzer wir werden auf jeden Fall wiederkommen",
    "source": "AlohaCamp"
  },
  {
    "author": "Joanna",
    "avatarUrl": null,
    "rating": 5,
    "content": "Wspaniałe miejsce do odpoczynku. Piękna okolica do spacerowania i „wyciszenia”. Domki bardzo zadbane i czyste. Bezproblemowy i szybki kontakt z gospodarzem. Z bólem serca opuściłyśmy to miejsce, żałujemy, że tak szybko nam zleciał ten czas! Na pewno przyjedziemy tutaj jeszcze raz! Bardzo polecam!",
    "content_en": "A wonderful place to rest. A beautiful area for walks and to “unwind”. The cottages are very well kept and clean. Easy and quick contact with the host. It broke our hearts to leave, and we're sorry the time flew by so fast! We'll definitely come here again! Highly recommended!",
    "content_de": "Ein wunderbarer Ort zum Erholen. Eine schöne Umgebung zum Spazierengehen und „Runterkommen“. Die Ferienhäuser sind sehr gepflegt und sauber. Unkomplizierter und schneller Kontakt mit dem Gastgeber. Schweren Herzens haben wir diesen Ort verlassen, schade, dass die Zeit so schnell vergangen ist! Wir kommen auf jeden Fall noch einmal hierher! Sehr empfehlenswert!",
    "source": "Airbnb"
  },
  {
    "author": "Zofia Foltak",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJvkCqjbhejKM2NiVPuKNfD-TRqEHgRIVC_rZQbFhwWNCT6ZA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Piękne miejsce na odpoczynek, cisza, spokój i przesympatyczni właściciele:) bogato wyposażona biblioteczka i zbiór gier, dzięki którym nie grozi nuda w najbardziej deszczowe dni:) domek posiada wiele udogodnień oraz duże wygodne łóżka:) polecam wszystkim szukającym relaksu na łonie natury:)",
    "content_en": "A beautiful place to rest, silence, peace and lovely owners :) a well-stocked bookshelf and a collection of games mean there's no risk of boredom even on the rainiest days :) the cottage has many amenities and large, comfortable beds :) I recommend it to everyone looking to relax in the heart of nature :)",
    "content_de": "Ein wunderschöner Ort zum Erholen, Stille, Ruhe und überaus sympathische Eigentümer :) ein gut bestücktes Bücherregal und eine Spielesammlung sorgen dafür, dass selbst an den regnerischsten Tagen keine Langeweile aufkommt :) das Ferienhaus bietet viele Annehmlichkeiten und große, bequeme Betten :) ich empfehle es allen, die Entspannung in der Natur suchen :)",
    "source": "Google"
  },
  {
    "author": "Zuzanna",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/AOh14GgbjH2H6dzT9lk7E1OVVHtUwaIkfzNI6Czh3Js0HVc=s96-c",
    "rating": 5,
    "content": "Niesamowicie funkcjonalny domek, cisza i spokój, rowery do użytku i sauna to wisienka na torcie!",
    "content_en": "Incredibly functional cottage, peace and quiet, bikes to use and a sauna is the icing on the cake!",
    "content_de": "Unglaublich funktionales Haus, Ruhe und Frieden, Fahrräder zur Nutzung und eine Sauna ist das i-Tüpfelchen!",
    "source": "Booking.com"
  },
  {
    "author": "Mikita",
    "avatarUrl": "https://lh3.googleusercontent.com/a/AATXAJyLAJH22tQoDfOwhM3ueFWHBUKNMAETAzMnYhtH=s96-c",
    "rating": 5,
    "content": "Sauna i jacuzzi o najwyższym standardzie, wyposażenie domków, dodatkowe atrakcje (rowery, SUPy)",
    "content_en": "Sauna and jacuzzi of the highest standard, cottage equipment, additional attractions (bikes, SUPs)",
    "content_de": "Sauna und Whirlpool auf höchstem Standard, Ausstattung des Hauses, zusätzliche Attraktionen (Fahrräder, SUPs)",
    "source": "Booking.com"
  },
  {
    "author": "Emilia",
    "avatarUrl": "https://graph.facebook.com/v2.9/2714343198670948/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "Piękne miejsce, cisza i spokój. Domek czyściutki i super wyposażony. Mnóstwo książek i gier planszowych. Piękny taras, miejsce na grilla. Bezpłatny dostęp do rowerów oraz sauny sprawił, że zapamiętamy ten pobyt na długo. Super relax i wypoczynek. Polecam to miejsc i na pewno jeszcze wrócimy",
    "content_en": "Beautiful place, peace and quiet. The cottage is very clean and super equipped. Plenty of books and board games. Beautiful terrace, barbecue area. Free access to bicycles and a sauna made us remember this stay for a long time. Super relaxation and rest. I recommend this place and we will definitely return",
    "content_de": "Wunderschöner Ort, Ruhe und Frieden. Das Haus ist sehr sauber und super ausgestattet. Viele Bücher und Brettspiele. Schöne Terrasse, Grillplatz. Der kostenlose Zugang zu Fahrrädern und einer Sauna sorgte dafür, dass uns dieser Aufenthalt lange in Erinnerung bleiben wird. Super Entspannung und Erholung. Ich empfehle diesen Ort und wir werden auf jeden Fall wiederkommen",
    "source": "Booking.com"
  },
  {
    "author": "Radek Waleczny",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLwVTkrPuRkC0FZznxbPYOMb2SiEoaTay8tOAWPz_NpMKhgxw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Super miejsce przede wszystkim ciche i spokojne. Domki na bardzo wysokim standardzie. Dodatkowe atrakcje (sauna, bala, rowery, gry planszowe oraz książki) to poprostu coś pięknego. Super mili gospodarze którzy porozmawiają wszystko wytłumaczą i powiedzą gdzie i co można zobaczyć 😁",
    "content_en": "A great place, above all quiet and peaceful. Cottages of a very high standard. The extras (sauna, cold plunge tub, bikes, board games and books) are simply wonderful. Super friendly hosts who will chat, explain everything and tell you where to go and what to see 😁",
    "content_de": "Ein super Ort, vor allem still und ruhig. Ferienhäuser mit sehr hohem Standard. Die zusätzlichen Extras (Sauna, Kaltwasserbottich, Fahrräder, Brettspiele und Bücher) sind einfach wunderbar. Super nette Gastgeber, die sich Zeit für ein Gespräch nehmen, alles erklären und sagen, wo man was sehen kann 😁",
    "source": "Google"
  },
  {
    "author": "Tammo",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo ładne położenie, cicho i pięknie w lesie, dużo miejsca na relaks na łonie natury",
    "content_en": "A very nice location, quiet and beautiful in the forest, with plenty of room to relax in nature",
    "content_de": "Sehr nette Lage ruhig und schön in den Wäldern gelegen bietet viel Raum für Entspannung in der Natur",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "Dariusz Lisiecki",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLZztVUP2MFW_puPiYLj1IKwhc5lGVvTrV-EzVGzQ4eLi4b=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce. Wszystko czego potrzeba do wypoczynku i relaksu. Polecam!!!",
    "content_en": "A great place. Everything you need to rest and relax. Highly recommended!!!",
    "content_de": "Ein super Ort. Alles, was man zum Erholen und Entspannen braucht. Sehr empfehlenswert!!!",
    "source": "Google"
  },
  {
    "author": "Alex",
    "avatarUrl": null,
    "rating": 5,
    "content": "Cudowne miejsce. Teren jest piękny i urządzony w spójnym stylu. Wnętrze domku również jest przyjemne i zadbane. Korzystaliśmy z grilla, desek SUP, sauny, tarasu i hamaków – wszystko było w doskonałym stanie. Absolutnie żadnych zastrzeżeń, pobyt bardzo nam się podobał. Dziękujemy!",
    "content_en": "A wonderful place. The grounds are beautiful and designed in a cohesive style. The interior of the house is also pleasant and well-kept. We used the grill, SUP boards, sauna, terrace, and hammocks — everything was in excellent condition. Absolutely no complaints; we really enjoyed our stay. Thank you!",
    "content_de": "Ein wunderbarer Ort. Das Gelände ist wunderschön und in einem stimmigen Stil gestaltet. Auch das Innere des Hauses ist angenehm und gepflegt. Wir haben den Grill, die SUP-Boards, die Sauna, die Terrasse und die Hängematten genutzt – alles war in ausgezeichnetem Zustand. Absolut nichts zu beanstanden, wir haben unseren Aufenthalt sehr genossen. Danke!",
    "source": "Airbnb",
    "lang": "en"
  },
  {
    "author": "Michał Dąbrowski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocInEjZAY22q3UzqvZKSZ-7oeFTWRur9bBDk9V231GvG9bX8qw=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniale miejsce na weekendowy reset! Domek i otoczenie bardzo zadbane i czyste, dookoła las - raj dla grzybiarzy. Przede wszystkim - uczynny i przemiły gospodarz, który podwiózł nas z pociągu i na pociąg powrotny, a po drodze opowiedział sporo o okolicy. Dziękujemy i polecamy!",
    "content_en": "A wonderful place for a weekend reset! The cottage and surroundings are very well kept and clean, with forest all around – a paradise for mushroom pickers. Above all, a helpful and very kind host who picked us up from the train and took us back for our return train, telling us a lot about the area along the way. Thank you, we highly recommend it!",
    "content_de": "Ein wunderbarer Ort für einen Wochenend-Reset! Ferienhaus und Umgebung sehr gepflegt und sauber, ringsum Wald – ein Paradies für Pilzsammler. Vor allem ein hilfsbereiter und überaus netter Gastgeber, der uns vom Zug abgeholt und zum Rückzug gebracht hat und unterwegs viel über die Gegend erzählt hat. Vielen Dank, wir empfehlen es weiter!",
    "source": "Google"
  },
  {
    "author": "Wojtek",
    "avatarUrl": null,
    "rating": 5,
    "content": "Rewelacyjne miejsce na reset i przewietrzenie głowy, z pewnością wrócimy.",
    "content_en": "A fantastic place to reset and clear your head, we'll definitely be back.",
    "content_de": "Ein großartiger Ort, um abzuschalten und den Kopf freizubekommen, wir kommen ganz sicher wieder.",
    "source": "Airbnb"
  },
  {
    "author": "Marzena Grynia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocL-cCtD9x_OR3Ly5MMPaeUpqiCLcwNdBab_SLmySWk252vBrA=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Cudowne, ciche miejsce. Brak jakichkolwiek atrakcji zeby kase tracic 😀",
    "content_en": "A wonderful, quiet place. No attractions whatsoever to waste your money on 😀",
    "content_de": "Ein wunderbarer, ruhiger Ort. Keinerlei Attraktionen, für die man Geld ausgeben müsste 😀",
    "source": "Google"
  },
  {
    "author": "Katarzyna",
    "avatarUrl": null,
    "rating": 5,
    "content": "REWELACJA! Jestem absolutnie zachwycona. Domek posiada wszystkie udogodnienia potrzebne do cudownego wypoczynku. Bardzo podobała mi się lokalizacja w środku lasu, możliwość korzystania z sauny oraz to, że właściciele są bardzo mili i pomocni. Na pewno jeszcze tam wrócę. Kasia",
    "content_en": "SENSATIONAL! I am absolutely delighted. The cottage has all the amenities needed for a wonderful rest. I really liked the location in the middle of the forest, the possibility of using the sauna and the fact that the owners are very nice and helpful. I will definitely return there. Kasia",
    "content_de": "SENSATIONELL! Ich bin absolut begeistert. Das Ferienhaus verfügt über alle Annehmlichkeiten, die für einen wunderbaren Urlaub benötigt werden. Mir hat die Lage mitten im Wald sehr gut gefallen, die Möglichkeit, die Sauna zu nutzen und die Tatsache, dass die Besitzer sehr nett und hilfsbereit sind. Ich werde auf jeden Fall dorthin zurückkehren. Kasia",
    "source": "AlohaCamp"
  },
  {
    "author": "Bartosz",
    "avatarUrl": "https://lh4.googleusercontent.com/-BPECDPiq2so/AAAAAAAAAAI/AAAAAAAAAAA/AMcAYi8a-mbwsEjdBhxAYWdyup7Z-0yRqA/s96-c/photo.jpg",
    "rating": 5,
    "content": "Wszystko ;) Idealne miejsce na wypoczynek w lesie. Domki dopieszczone w każdym szczególe i doskonale wyposażone, od razu widać ogrom pracy włożony przez bardzo sympatycznych właścicieli. Z reguły nie jeżdżę w te same miejsca, ale tym razem nie wykluczam powrotu. Polecam!",
    "content_en": "Everything ;) Ideal place for rest in the forest. Cottages pampered in every detail and perfectly equipped, you can immediately see the huge amount of work put in by the very friendly owners. As a rule, I don't go to the same places, but this time I do not exclude coming back. I recommend it!",
    "content_de": "Alles ;) Der ideale Ort für einen Aufenthalt im Wald. Die Ferienhäuser sind bis ins Detail gepflegt und perfekt ausgestattet, man sieht sofort die viele Arbeit der sehr freundlichen Besitzer. Normalerweise fahre ich nicht an die gleichen Orte, aber dieses Mal schließe ich eine Rückkehr nicht aus. Ich empfehle es!",
    "source": "Booking.com"
  },
  {
    "author": "Aleksander Swietlik",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjUYFvFeybM0vvPCe9z22v_wWAVWln0KbwMJLB9aCjFj_8Z24GnVEA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe miejsce! Super właściciele! Wypad ze znajomymi udany w 100%",
    "content_en": "A wonderful place! Great owners! A 100% successful trip with friends",
    "content_de": "Ein wunderbarer Ort! Super Eigentümer! Der Ausflug mit Freunden war zu 100 % gelungen",
    "source": "Google"
  },
  {
    "author": "Robin",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWJWHJ78qgcoExNjN545YZ_oeqO1AULyLdgG6ucClyLnz_1bcSQ=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "POLECAM !!! Przepiękne miejsce właściciele bardzo mili o pomocni ♡",
    "content_en": "HIGHLY RECOMMENDED!!! A beautiful place, very nice and helpful owners ♡",
    "content_de": "SEHR EMPFEHLENSWERT!!! Ein wunderschöner Ort, sehr nette und hilfsbereite Eigentümer ♡",
    "source": "Google"
  },
  {
    "author": "Kira",
    "avatarUrl": null,
    "rating": 5,
    "content": "Czuliśmy się w tym małym domku wspaniale.\nW świetnej instrukcji jest odpowiedź na niemal każde pytanie, jakie można mieć, i naprawdę pomyślano o wszystkim.\nObydwoje właściciele są super mili i pomocni.\nNaprawdę się wyciszyliśmy i bardzo cieszyliśmy się pobytem :)",
    "content_en": "We felt really at home in the tiny house.\nThe perfect guidebook already has an answer to almost every question you could have, and they really thought of everything.\nBoth owners are super nice and helpful.\nWe truly unwound and really enjoyed our stay :)",
    "content_de": "Wir haben uns in dem Tiny Haus super wohl gefühlt.\nFür nahezu jede Frage die man haben kann, gibt es in der perfekten Anleitung schon eine Antwort und es wurde wirklich an alles gedacht.\nDie beiden Besitzer sind super nett und hilfsbereit.\nWir sind richtig zur Ruhe gekommen und haben den Aufenthalt sehr genossen :)",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "j",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKhH4nx8jxAV4pUA9QQfyFw1Q1OCHXkTlVNzkr9Ryg21OWPFw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spędziliśmy weekend w Las Biala’s i było wspaniale. Domki super wyposażone, właściwie niczego nie brakowało. Wielki plus za możliwość skorzystania z rowerów. Seanse w saunie odprężające. Świetne miejsce na odpoczynek po pracy i złapanie oddechu od miasta;)",
    "content_en": "We spent a weekend at Las Biala's and it was wonderful. Super well-equipped cottages, practically nothing was missing. A big plus for being able to use the bikes. Relaxing sauna sessions. A great place to rest after work and catch your breath away from the city ;)",
    "content_de": "Wir haben ein Wochenende bei Las Biala's verbracht und es war wunderbar. Super ausgestattete Ferienhäuser, eigentlich hat nichts gefehlt. Ein großes Plus, dass man die Fahrräder nutzen kann. Entspannende Saunagänge. Ein toller Ort, um sich nach der Arbeit zu erholen und von der Stadt durchzuatmen ;)",
    "source": "Google"
  },
  {
    "author": "Monika",
    "avatarUrl": null,
    "rating": 5,
    "content": "Wspaniałe miejsce, wspaniały gospodarz Z czystym sercem polecam",
    "content_en": "Wonderful place, wonderful host I recommend with a pure heart",
    "content_de": "Wunderbarer Ort, wunderbarer Gastgeber, ich empfehle es reinen Herzens",
    "source": "AlohaCamp"
  },
  {
    "author": "Kamila",
    "avatarUrl": null,
    "rating": 5,
    "content": "Piękne miejsce. Cudownie właściciele. Szczerze polecam ☺️",
    "content_en": "Beautiful place. Wonderful owners. I sincerely recommend ☺️",
    "content_de": "Wunderschöner Ort. Wunderbare Besitzer. Ich kann es aufrichtig empfehlen ☺️",
    "source": "AlohaCamp"
  },
  {
    "author": "Zuzanna",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo polecam pobyt w Las Biala’s. Miejsce jest bardzo czyste i świetnie wyposażone. Właściciele to bardzo miłe i pomocne osoby, na każdą wiadomość odpowiadały nam z prędkością światła. :)\nCała okolica również spokojna, idealna na wypoczynek, polecam :)",
    "content_en": "I highly recommend a stay at Las Biala’s. The place is very clean and superbly equipped. The owners are very kind and helpful people who answered every message at the speed of light. :)\nThe whole area is also peaceful, perfect for a break, I recommend it :)",
    "content_de": "Ich kann einen Aufenthalt in Las Biala’s sehr empfehlen. Der Ort ist sehr sauber und hervorragend ausgestattet. Die Eigentümer sind sehr nette und hilfsbereite Menschen, die jede Nachricht in Lichtgeschwindigkeit beantwortet haben. :)\nAuch die ganze Umgebung ist ruhig, ideal zum Erholen, sehr empfehlenswert :)",
    "source": "Airbnb"
  },
  {
    "author": "Julia",
    "avatarUrl": null,
    "rating": 5,
    "content": "Przepiękne miejsce, idealne na wypoczynek. Zrelaksowaliśmy się w hamaku i jacuzzi, a także wybraliśmy się na małą rowerową wyprawę. Właściciele są niezwykle pomocni i życzliwi. Na pewno będziemy tu wracać i z przyjemnością polecamy to miejsce innym.",
    "content_en": "Beautiful place, perfect for a rest. We relaxed in a hammock and a jacuzzi, and also went on a small bicycle trip. The owners are extremely helpful and kind. We will definitely be coming back here and we gladly recommend this place to others.",
    "content_de": "Ein wunderschöner Ort, perfekt für eine Pause. Wir entspannten uns in einer Hängematte und im Whirlpool und machten auch eine kleine Radtour. Die Besitzer sind extrem hilfsbereit und nett. Wir werden auf jeden Fall wiederkommen und empfehlen diesen Ort gerne anderen weiter.",
    "source": "AlohaCamp"
  },
  {
    "author": "Jago Wo",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ4w6s6cPiaV_pyULRf4xj7WMRPuLjIXBMuibrWgzCkxS-XqA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Cudowne miejsce, żeby się wyłączyć. Można tylko polecić.",
    "content_en": "A wonderful place to switch off. Can only recommend it.",
    "content_de": "Ein wunderschönes Ort zum abschalten. Kann man nur empfehlen.",
    "source": "Google",
    "lang": "de"
  },
  {
    "author": "Sandra",
    "avatarUrl": null,
    "rating": 5,
    "content": "Polecam z całego serca ❤️\nMiejsce warte odwiedzenia 😌",
    "content_en": "Wholeheartedly recommended ❤️\nA place worth visiting 😌",
    "content_de": "Von ganzem Herzen empfehlenswert ❤️\nEin Ort, der einen Besuch wert ist 😌",
    "source": "Airbnb"
  },
  {
    "author": "Wiktoria Bloch",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjXEvHS97iq2-IBQeGUQN-yoMthnebfzPFbm0unHLcxHSy-PTa69=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe domki świetnie wyposażone bardzo wysoki standard, możliwość skorzystania z sauny oraz rowerów, okolo 5 min spacerem do jeziora, okolica otoczona wspaniałymi zielonymi terenami, właściciele bardzo milii oraz pomocni napewno wrócę ponownie",
    "content_en": "Wonderful, superbly equipped cottages of a very high standard, with the sauna and bikes to use, about a 5-minute walk to the lake, surrounded by wonderful green areas, very nice and helpful owners, I'll definitely be back",
    "content_de": "Wunderbare, hervorragend ausgestattete Ferienhäuser mit sehr hohem Standard, Sauna und Fahrräder zur Nutzung, etwa 5 Minuten zu Fuß zum See, umgeben von wunderschönen Grünflächen, sehr nette und hilfsbereite Eigentümer, ich komme ganz sicher wieder",
    "source": "Google"
  },
  {
    "author": "Miłosz",
    "avatarUrl": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50",
    "rating": 5,
    "content": "Wszystko nam się podobało, domek zawierał wszystkie udogodnienia. Sauna i rowery w cenie domków to duży plus. Całość dopełnili bardzo porządni i grzeczni gospodarze :) Nawet starzy polacy mogą mieć problem, żeby się do czegoś doczepić :D polecamy!",
    "content_en": "We liked everything, the cottage contained all the amenities. Sauna and bikes included in the price of the cottages is a big plus. The whole was completed by very decent and polite hosts :) Even old Poles might have a problem clinging to something :D we recommend!",
    "content_de": "Uns hat alles gefallen, das Ferienhaus enthielt alle Annehmlichkeiten. Sauna und Fahrräder im Preis inbegriffen ist ein großes Plus. Das Ganze wurde durch sehr anständige und höfliche Gastgeber abgerundet :) Sogar alte Polen könnten Probleme haben, etwas zu meckern zu finden :D wir empfehlen!",
    "source": "Booking.com"
  },
  {
    "author": "Szymon",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo przyjemne miejsce na relaks i odpoczynek.",
    "content_en": "A very pleasant place for relaxation and rest.",
    "content_de": "Ein sehr angenehmer Ort zur Entspannung und Erholung.",
    "source": "AlohaCamp"
  },
  {
    "author": "Rafał Z",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIwkfRkdFMASTq_Lbp8xebcgwUq9HHI-sO0OjHRkTC426NjEA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super. Polecam domki nowoczesne wysoki standard.",
    "content_en": "Great. I recommend these modern, high-standard cottages.",
    "content_de": "Super. Ich empfehle diese modernen Ferienhäuser mit hohem Standard.",
    "source": "Google"
  },
  {
    "author": "Szymon",
    "avatarUrl": null,
    "rating": 5,
    "content": "Jesteśmy bardzo zadowoleni z wizyty w Las Biala's. Udało nam się skorzystać z wszystkich dostępnych atrakcji i bardzo je polecany, szczególnie Jacuzzi.\nSama okolica bardzo ładna i spokojna, w sam raz na mały odpoczynek od życia w mieście.",
    "content_en": "We are very happy with our visit to Las Biala's. We managed to use all the available attractions and highly recommend them, especially the jacuzzi.\nThe area itself is very pretty and peaceful, just right for a short break from city life.",
    "content_de": "Wir sind sehr zufrieden mit unserem Besuch in Las Biala's. Wir konnten alle verfügbaren Angebote nutzen und können sie sehr empfehlen, vor allem den Whirlpool.\nDie Umgebung selbst ist sehr schön und ruhig, genau richtig für eine kleine Auszeit vom Stadtleben.",
    "source": "Airbnb"
  },
  {
    "author": "Natalia",
    "avatarUrl": null,
    "rating": 5,
    "content": "Piękne urokliwe miejsce.Cisza spokój.Domek ślicznie urządzony.Mielismy to szczęście że spędziliśmy tam Święta Bożego Narodzenia.Właściciele mili uprzejmi.Naprawde zachęcam do pobytu nawet w okresie zimowym...jeżeli ktoś poszukuje ciszy .",
    "content_en": "Beautiful charming place. Peace and quiet. The cottage is beautifully decorated. We were lucky enough to spend Christmas there. Nice, courteous owners. I really encourage you to stay even in the winter... if someone is looking for silence.",
    "content_de": "Schöner, bezaubernder Ort. Ruhe und Stille. Das Haus ist wunderschön dekoriert. Wir hatten das Glück, dort Weihnachten zu verbringen. Nette und zuvorkommende Besitzer. Ich kann einen Aufenthalt auch in der Winterzeit nur empfehlen ... wenn jemand Stille sucht.",
    "source": "AlohaCamp"
  },
  {
    "author": "Ryszard Łyskawa",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKV3h52_VQHzQI0pzkh_nUSgBc0lTd6Rhm6vmIacs1LxTFy_A=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce, klimat i właściciele. Pozdrawiam",
    "content_en": "Great place, atmosphere and owners. Best regards",
    "content_de": "Super Ort, tolle Atmosphäre und Eigentümer. Viele Grüße",
    "source": "Google"
  },
  {
    "author": "Adam Gołębiowski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK97ds9waMKny09iLLWzLybEyjgrAkqMOq3nRgWz__ypbsc_Q=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spokojnie i przyjemnie. Domki klasa 🤗",
    "content_en": "Peaceful and pleasant. Top-class cottages 🤗",
    "content_de": "Ruhig und angenehm. Klasse Ferienhäuser 🤗",
    "source": "Google"
  },
  {
    "author": "Dagmara",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-d.png",
    "rating": 5,
    "content": "Kolejna udana wizyta, nic się nie zmieniło od ostatniego pobytu. Wszystko, jak najbardziej na plus. Fajne miejsce, pełen komfort i udogodnienia, a właściciele na maksa pomocni i kochani. Oby więcej takich miejsc. Polecajka na maksa 🙂❤️",
    "content_en": "Another successful visit, nothing has changed since the last stay. Everything is a plus. Cool place, full comfort and amenities, and the owners are extremely helpful and lovely. Let there be more such places. Maximum recommendation 🙂❤️",
    "content_de": "Ein weiterer erfolgreicher Besuch, seit dem letzten Aufenthalt hat sich nichts geändert. Alles ein Pluspunkt. Toller Ort, voller Komfort und Annehmlichkeiten, und die Besitzer sind extrem hilfsbereit und reizend. Möge es mehr solcher Orte geben. Maximale Empfehlung 🙂❤️",
    "source": "Booking.com"
  },
  {
    "author": "Silke",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLXQONmAeiNzf9QRlft8Fv_t0V3AHFocohPi6WebdMASUPC=s96-c",
    "rating": 5,
    "content": "Cudowne, ciche miejsce w lesie, żeby całkowicie się zrelaksować i odpocząć! Przemili gospodarze, zawsze gotowi pomóc. Sauna i jacuzzi to zupełnie inny poziom i zapewniły pełny relaks. Gorąco polecam i mam nadzieję kiedyś tu wrócić!",
    "content_en": "Such a lovely quiet spot in the forest to completely relax and unwind! Superfriendly hosts and always ready to help. Sauna and jacuzzi were next level and ensured ultimate relaxation. Would highly recommend and hope to be back someday!",
    "content_de": "Was für ein schöner ruhiger Ort im Wald, um sich vollkommen zu entspannen und abzuschalten! Superfreundliche Gastgeber und immer bereit zu helfen. Sauna und Whirlpool waren auf dem nächsten Level und sorgten für ultimative Entspannung. Kann es wärmstens empfehlen und hoffe, eines Tages wiederzukommen!",
    "source": "Booking.com",
    "lang": "en"
  },
  {
    "author": "Wojciech",
    "avatarUrl": null,
    "rating": 5,
    "content": "super miejsce na relaks wśród drzew",
    "content_en": "a great place to relax among the trees",
    "content_de": "ein toller Ort zum Entspannen zwischen den Bäumen",
    "source": "Airbnb"
  },
  {
    "author": "Kinga Kubiatowicz",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV62W08ftsq7GMoIqOL4BoFiW8A_TW-Qc8XKnvQ1bPxJqOt9R6x=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Polecam cisza i rekax",
    "content_en": "Recommended, peace and relaxation",
    "content_de": "Empfehlenswert, Ruhe und Entspannung",
    "source": "Google"
  },
  {
    "author": "Natalie Katharina",
    "avatarUrl": null,
    "rating": 5,
    "content": "Bardzo nam się podobało!\nWszystko było idealne i spędziliśmy tu wspaniały czas :).\nGospodarze są również bardzo sympatyczni i uprzejmi.\n\nMogę tylko polecić pobyt, jeśli ktoś ma ochotę się wyciszyć i odpocząć od codziennego zgiełku.",
    "content_en": "We really liked it here!\nEverything was just perfect and we had a wonderful time :).\nThe hosts are also really friendly and accommodating.\n\nI can only recommend a stay if you want to unwind and get away from the hustle and bustle of everyday life.",
    "content_de": "Uns hat es wirklich sehr gut gefallen!\nEs war rundum perfekt und wir hatten eine ganz tolle Zeit :).\nDie Gastgeber sind ebenfalls total sympathisch und zuvorkommend.\n\nIch kann einen Aufenthalt nur empfehlen, wenn man Lust hat zur Ruhe zu kommen und Abstand vom Alltagstrubel zu bekommen.",
    "source": "Airbnb",
    "lang": "de"
  },
  {
    "author": "AGNIESZKA GRAZDA",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjW3syC3A9uCok3xsexm7cNqrCQXAd1RxudXcYquTptjManfJPM=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Fajna miejscówka, aby odetchnąć od miasta. Wokół lasy, jeziorko niedaleko od domku. Sam domek jest świetnie wyposażony. Niczego nam nie brakowało. Gospodarze mili i pomocni:) sauna super+balia👌to naprawdę godne polecenia miejsce!",
    "content_en": "A great spot to get away from the city. Forests all around, a lake not far from the cottage. The cottage itself is superbly equipped. We didn't lack anything. Kind and helpful hosts :) great sauna + cold plunge tub 👌 a place really worth recommending!",
    "content_de": "Ein tolles Fleckchen, um der Stadt zu entfliehen. Ringsum Wälder, ein See nicht weit vom Ferienhaus. Das Ferienhaus selbst ist hervorragend ausgestattet. Uns hat nichts gefehlt. Nette und hilfsbereite Gastgeber :) super Sauna + Kaltwasserbottich 👌 ein wirklich empfehlenswerter Ort!",
    "source": "Google"
  },
  {
    "author": "Andrii",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLkUgvV9pr02G91PuuwbuPAYZgb8K8MIWIJIO1UVDsdeujJyA=s96-c",
    "rating": 5,
    "content": "Wszystko jest super",
    "content_en": "Everything is great",
    "content_de": "Alles ist super",
    "source": "Booking.com"
  },
  {
    "author": "Szymon",
    "avatarUrl": null,
    "rating": 5,
    "content": "Gorąco polecam :)",
    "content_en": "Highly recommended :)",
    "content_de": "Sehr empfehlenswert :)",
    "source": "Airbnb"
  },
  {
    "author": "Krzysztof",
    "avatarUrl": "https://img.alohacamp.com/sBVCEmekpmh6B2QVzVyUW8vDzdpXxxHDRn9GfwVQ8uw/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvYTRkNTdmMzM3NzM1MWM5M2FkZTI3MDlhNzYwNDFmNmRkNjNlYmE4OS5wbmc",
    "rating": 5,
    "content": "Polecam! Świetnie miejsce gdzie naprawdę można odpocząć. Domek wyposażony we wszystko co potrzeba. Bezproblemowy kontakt z gospodarzami, którzy są naprawdę mili oraz pomocni i czuć, że chcą abyś czuł się dobrze podczas pobytu :)",
    "content_en": "I recommend! Great place where you can really relax. Cottage equipped with everything you need. Hassle-free contact with the hosts, who are really nice and helpful, and you can feel that they want you to feel good during your stay :)",
    "content_de": "Ich empfehle es! Toller Ort, an dem man sich wirklich entspannen kann. Das Ferienhaus ist mit allem ausgestattet, was man braucht. Problemloser Kontakt mit den Gastgebern, die wirklich nett und hilfsbereit sind, und man spürt, dass sie möchten, dass man sich während des Aufenthalts wohlfühlt :)",
    "source": "AlohaCamp"
  },
  {
    "author": "Angie yt",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjUZ3lIzU3ywvxHYlCUzh8EJHM-oA7BWKF5E9K25Nyqiqxsv4t4=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Miejsce fantastyczne zaledwie pare metrów do jeziorka. Cisza i spokój pośród leśnych drzew. Domek czyściutki i nowoczesny. Obsługa niesamowita i profesjonalna. Z całego serca polecam to miejsce. Z Pozdrowieniami dla Gospodarzy",
    "content_en": "A fantastic place, just a few metres from the lake. Peace and quiet among the forest trees. The cottage is spotless and modern. Amazing, professional service. I recommend this place with all my heart. Best wishes to the hosts",
    "content_de": "Ein fantastischer Ort, nur ein paar Meter vom See entfernt. Stille und Ruhe zwischen den Waldbäumen. Das Ferienhaus ist blitzsauber und modern. Unglaublicher und professioneller Service. Ich empfehle diesen Ort von ganzem Herzen. Liebe Grüße an die Gastgeber",
    "source": "Google"
  },
  {
    "author": "Rafał Szymański",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjU-ZPKI_Sb0Z2xD7n5gUsRNjPqFl4ZIfo7SeY_XXYgg_wO4iCs=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Najlepiej!!!",
    "content_en": "The best!!!",
    "content_de": "Einfach top!!!",
    "source": "Google"
  },
  {
    "author": "Marinus",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-m.png",
    "rating": 5,
    "content": "Cisza.",
    "content_en": "The silence.",
    "content_de": "Die Stille.",
    "source": "Booking.com",
    "lang": "nl"
  },
  {
    "author": "Liudmyla",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-l.png",
    "rating": 5,
    "content": "👍👍👍👍👍",
    "content_en": "👍👍👍👍👍",
    "content_de": "👍👍👍👍👍",
    "source": "Booking.com"
  },
  {
    "author": "Mirek Mazurczak",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIqXoLlLEtGCxdt2f2P5UMm2LsVnxdkuxnaNF3ToQ_NXvKQoQ=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Google"
  },
  {
    "author": "Mediux Technologie",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjW_J8T7E7O7bhRK2T-WxP8fI3fRNFM8DJvS41tsd1ABGlRtBQtp=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Google"
  },
  {
    "author": "Daniel Jedyk",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLoVBO0bWzlte1sSGPV_RcbDkx4KlbgbKcpIX1dYZc9tVCSHA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Google"
  },
  {
    "author": "Danuta Witkowska",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLkZUFes_fGpruSUyAtIuuFl-_XyF4caZ_FK6SDfQgVL1GVlA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Google"
  },
  {
    "author": "Kaszczyszyn",
    "avatarUrl": "https://lh3.googleusercontent.com/a/AATXAJz2Zx2u8evl-a41av1w8qY_EYTtmPYyClA9r6Yc=s96-c",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Booking.com"
  },
  {
    "author": "Magdalena",
    "avatarUrl": "https://graph.facebook.com/v2.9/2331694170199203/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Booking.com"
  },
  {
    "author": "Filip",
    "avatarUrl": "https://lh3.googleusercontent.com/a/AATXAJw7HdxDOhSTadrkOkNOOLr_FYX8b5fR-kcsGDBI=s96-c",
    "rating": 5,
    "content": "",
    "content_en": "",
    "content_de": "",
    "source": "Booking.com"
  }
];
