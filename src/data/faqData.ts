export interface FAQCategory {
  title: string;
  questions: { q: string; a: string }[];
}

export const faqData: Record<string, FAQCategory[]> = {
  pl: [
    {
      title: 'Pobyt',
      questions: [
        {
          q: 'Jaki jest układ łóżek w domku?',
          a: 'Domek przeznaczony jest dla 2–4 osób i posiada dwie oddzielne sypialnie usytuowane po przeciwnych stronach domku, co zapewnia większy komfort i prywatność. W każdej sypialni znajduje się jedno łóżko dwuosobowe o wymiarach 140 × 200 cm.',
        },
        {
          q: 'Czy w domku jest pościel i ręczniki?',
          a: 'Tak. Zapewniamy pościel, komplet małych i dużych ręczników dla każdej osoby, a także ręczniki do sauny oraz wygodne szlafroki do korzystania z sauny i jacuzzi.',
        },
        {
          q: 'Czy domki są ogrzewane?',
          a: 'Tak. W obu sypialniach, łazience i salonie znajduje się wydajne ogrzewanie elektryczne (panele grzewcze) z termostatem, który pozwala ustawić komfortową temperaturę w każdym z pomieszczeń.',
        },
        {
          q: 'Czy jest klimatyzacja?',
          a: 'Nie. Domki wyposażone są w rolety zewnętrzne, moskitiery oraz wentylatory sufitowe w sypialniach, które zapewniają komfort również latem.',
        },
        {
          q: 'Czy w domku jest piekarnik?',
          a: 'Nie.',
        },
        {
          q: 'Czy w domku jest ekspres do kawy?',
          a: 'Tak. W domku znajduje się ekspres Nespresso De\u2019Longhi wraz z zestawem 20 kapsułek kawy.',
        },
      ],
    },
    {
      title: 'Udogodnienia',
      questions: [
        {
          q: 'Czy na miejscu jest grill?',
          a: 'Tak. Przy każdym domku znajduje się prywatna strefa do grillowania z dużym murowanym grillem, kompletem akcesoriów oraz węglem/brykietem i podpałką.',
        },
        {
          q: 'Jakie udogodnienia są na miejscu?',
          a: 'Na terenie obiektu dostępne są m.in. rowery trekkingowe, deski SUP, bezpłatny parking, Wi-Fi, Netflix, hamaki oraz sauna. Do dyspozycji Gości jest również prywatne jacuzzi przy domku (dostępne jako dodatkowo płatna opcja). Korzystanie ze wszystkich pozostałych udogodnień jest bezpłatne.',
        },
      ],
    },
    {
      title: 'Sauna i Jacuzzi',
      questions: [
        {
          q: 'Czy jacuzzi jest dostępne przez cały rok?',
          a: 'Tak. Jacuzzi jest dostępne przez cały rok, z wyjątkiem okresów bardzo silnych mrozów (około -15°C i niższych), które mogą uniemożliwić jego bezpieczne użytkowanie.',
        },
        {
          q: 'Czy jacuzzi jest prywatne?',
          a: 'Tak. Przy każdym domku, na tarasie, znajduje się prywatne jacuzzi z pergolą, zasłonami oraz zamykanym dachem, które chronią przed wiatrem i opadami oraz zapewniają większą prywatność podczas korzystania.',
        },
        {
          q: 'Czy sauna jest w cenie pobytu?',
          a: 'Tak. Korzystanie z sauny jest bezpłatne dla wszystkich gości. Obowiązuje regulamin korzystania z sauny, dostępny na miejscu oraz na naszej stronie internetowej.',
        },
        {
          q: 'Czy sauna jest na wyłączność?',
          a: 'Tak. Sauna jest przygotowywana specjalnie na Twoją wizytę, a podczas korzystania jest dostępna wyłącznie dla Ciebie. Przed każdą sesją wykonywany jest serwis techniczny oraz dezynfekcja, aby zapewnić komfort i najwyższy poziom higieny.',
        },
      ],
    },
    {
      title: 'Rezerwacja i zasady',
      questions: [
        {
          q: 'Czy są jakieś dodatkowe opłaty?',
          a: 'Nie. Korzystanie z większości udogodnień jest wliczone w cenę pobytu. Goście mogą bez dodatkowych opłat korzystać z sauny z balią do schładzania, rowerów, desek SUP, hamaków oraz grilla. Nie pobieramy również żadnych opłat za zużycie energii elektrycznej ani wody. Jedyną opcjonalną usługą dodatkowo płatną jest wynajem prywatnego jacuzzi.',
        },
        {
          q: 'Jakie są godziny zameldowania i wymeldowania?',
          a: 'Standardowa godzina zameldowania to od 16:00, natomiast wymeldowanie odbywa się do godziny 12:00. Dbamy o komfort naszych Gości, dlatego oferujemy wydłużony czas wymeldowania do południa. Poza sezonem istnieje również możliwość indywidualnego ustalenia innych, dogodnych godzin zameldowania i wymeldowania — w zależności od dostępności domku.',
        },
        {
          q: 'Czy można przyjechać z psem?',
          a: 'Nie. W LAS BIALA\u2019S nie przyjmujemy zwierząt. Obiekt został stworzony z myślą o spokojnym wypoczynku i zapewnieniu wszystkim gościom komfortowych warunków pobytu.',
        },
        {
          q: 'Dlaczego obiekt jest przeznaczony tylko dla osób dorosłych (18+)?',
          a: 'Stworzyliśmy to miejsce z myślą o spokojnym wypoczynku, relaksie i czasie tylko we dwoje. Kameralny charakter obiektu pozwala naszym Gościom w pełni odpocząć w ciszy i bliskości natury.',
        },
      ],
    },
  ],
  en: [
    {
      title: 'Your Stay',
      questions: [
        {
          q: 'What is the bed layout in the cabin?',
          a: 'The cabin sleeps 2–4 guests and has two separate bedrooms located on opposite sides of the cabin, offering extra comfort and privacy. Each bedroom has one double bed (140 × 200 cm).',
        },
        {
          q: 'Are bed linen and towels provided?',
          a: 'Yes. We provide bed linen, a set of small and large towels for each guest, as well as sauna towels and cosy bathrobes for use in the sauna and jacuzzi.',
        },
        {
          q: 'Are the cabins heated?',
          a: 'Yes. Both bedrooms, the bathroom and the living room have efficient electric heating (heating panels) with a thermostat, so you can set a comfortable temperature in each room.',
        },
        {
          q: 'Is there air conditioning?',
          a: 'No. The cabins are fitted with external blinds, mosquito nets and ceiling fans in the bedrooms, which keep you comfortable even in summer.',
        },
        {
          q: 'Is there an oven in the cabin?',
          a: 'No.',
        },
        {
          q: 'Is there a coffee machine in the cabin?',
          a: 'Yes. The cabin has a Nespresso De\u2019Longhi coffee machine with a set of 20 coffee capsules.',
        },
      ],
    },
    {
      title: 'Facilities',
      questions: [
        {
          q: 'Is there a barbecue on site?',
          a: 'Yes. Each cabin has its own private barbecue area with a large brick barbecue, a full set of accessories, plus charcoal/briquettes and firelighters.',
        },
        {
          q: 'What facilities are available on site?',
          a: 'On-site facilities include trekking bikes, SUP boards, free parking, Wi-Fi, Netflix, hammocks and a sauna. Guests can also enjoy a private jacuzzi by the cabin (available for an extra charge). All other facilities are free of charge.',
        },
      ],
    },
    {
      title: 'Jacuzzi & Sauna',
      questions: [
        {
          q: 'Is the jacuzzi available all year round?',
          a: 'Yes. The jacuzzi is available all year round, except during periods of severe frost (around -15°C / 5°F and below), when it cannot be used safely.',
        },
        {
          q: 'Is the jacuzzi private?',
          a: 'Yes. Each cabin has a private jacuzzi on the terrace, with a pergola, curtains and a closing roof that protect you from wind and rain and give you extra privacy while you relax.',
        },
        {
          q: 'Is the sauna included in the price?',
          a: 'Yes. The sauna is free of charge for all guests. Sauna rules apply and are available on site and on our website.',
        },
        {
          q: 'Is the sauna for private use only?',
          a: 'Yes. The sauna is prepared especially for your visit, and while you use it, it is reserved exclusively for you. Before each session, we carry out a technical check and full disinfection to ensure your comfort and the highest standard of hygiene.',
        },
      ],
    },
    {
      title: 'Booking & House Rules',
      questions: [
        {
          q: 'Are there any extra charges?',
          a: 'No. Most facilities are included in the price of your stay. Guests can use the sauna with a cold plunge tub, bikes, SUP boards, hammocks and the barbecue at no extra cost. We also do not charge for electricity or water usage. The only optional paid extra is the private jacuzzi rental.',
        },
        {
          q: 'What are the check-in and check-out times?',
          a: 'Standard check-in is from 4:00 PM, and check-out is by 12:00 noon. We care about our guests\u2019 comfort, which is why we offer a late check-out until noon. Outside the high season, we can also arrange different check-in and check-out times individually — subject to cabin availability.',
        },
        {
          q: 'Can I bring my dog?',
          a: 'No. Pets are not allowed at LAS BIALA\u2019S. The property was created with peaceful rest in mind, to ensure a comfortable stay for all our guests.',
        },
        {
          q: 'Why is the property adults-only (18+)?',
          a: 'We created this place for peaceful rest, relaxation and quality time for two. The intimate character of the property allows our guests to fully unwind in silence, close to nature.',
        },
      ],
    },
  ],
  de: [
    {
      title: 'Ihr Aufenthalt',
      questions: [
        {
          q: 'Wie sind die Betten im Ferienhaus aufgeteilt?',
          a: 'Das Ferienhaus ist für 2–4 Personen ausgelegt und verfügt über zwei getrennte Schlafzimmer an den gegenüberliegenden Seiten des Hauses – für mehr Komfort und Privatsphäre. In jedem Schlafzimmer steht ein Doppelbett (140 × 200 cm).',
        },
        {
          q: 'Sind Bettwäsche und Handtücher inklusive?',
          a: 'Ja. Wir stellen Bettwäsche sowie ein Set aus kleinen und großen Handtüchern für jede Person bereit, dazu Saunatücher und bequeme Bademäntel für die Nutzung von Sauna und Whirlpool.',
        },
        {
          q: 'Sind die Ferienhäuser beheizt?',
          a: 'Ja. Beide Schlafzimmer, das Badezimmer und der Wohnbereich verfügen über eine leistungsstarke Elektroheizung (Heizpaneele) mit Thermostat, sodass Sie in jedem Raum Ihre Wunschtemperatur einstellen können.',
        },
        {
          q: 'Gibt es eine Klimaanlage?',
          a: 'Nein. Die Ferienhäuser sind mit Außenrollläden, Insektenschutzgittern und Deckenventilatoren in den Schlafzimmern ausgestattet – so bleibt es auch im Sommer angenehm kühl.',
        },
        {
          q: 'Gibt es einen Backofen im Ferienhaus?',
          a: 'Nein.',
        },
        {
          q: 'Gibt es eine Kaffeemaschine im Ferienhaus?',
          a: 'Ja. Im Ferienhaus steht eine Nespresso-Maschine von De\u2019Longhi bereit, inklusive eines Sets mit 20 Kaffeekapseln.',
        },
      ],
    },
    {
      title: 'Ausstattung & Angebote',
      questions: [
        {
          q: 'Gibt es vor Ort eine Grillmöglichkeit?',
          a: 'Ja. Zu jedem Ferienhaus gehört ein eigener Grillplatz mit einem großen gemauerten Grill, komplettem Grillzubehör sowie Holzkohle/Briketts und Anzündern.',
        },
        {
          q: 'Welche Ausstattung steht vor Ort zur Verfügung?',
          a: 'Auf dem Gelände stehen Ihnen unter anderem Trekkingräder, SUP-Boards (Stand-up-Paddling), kostenlose Parkplätze, WLAN, Netflix, Hängematten und eine Sauna zur Verfügung. Zusätzlich gibt es einen privaten Whirlpool direkt am Ferienhaus (gegen Aufpreis buchbar). Die Nutzung aller übrigen Angebote ist kostenlos.',
        },
      ],
    },
    {
      title: 'Whirlpool & Sauna',
      questions: [
        {
          q: 'Ist der Whirlpool das ganze Jahr über nutzbar?',
          a: 'Ja. Der Whirlpool steht ganzjährig zur Verfügung – ausgenommen sind Zeiten mit sehr starkem Frost (ab ca. −15 °C), in denen eine sichere Nutzung nicht möglich ist.',
        },
        {
          q: 'Ist der Whirlpool privat?',
          a: 'Ja. Auf der Terrasse jedes Ferienhauses befindet sich ein privater Whirlpool mit Pergola, Vorhängen und verschließbarem Dach – als Schutz vor Wind und Niederschlag und für mehr Privatsphäre bei der Nutzung.',
        },
        {
          q: 'Ist die Sauna im Preis inbegriffen?',
          a: 'Ja. Die Nutzung der Sauna ist für alle Gäste kostenlos. Es gilt die Saunaordnung, die vor Ort sowie auf unserer Website einsehbar ist.',
        },
        {
          q: 'Steht die Sauna zur alleinigen Nutzung zur Verfügung?',
          a: 'Ja. Die Sauna wird speziell für Ihren Besuch vorbereitet und steht während der Nutzung ausschließlich Ihnen zur Verfügung. Vor jeder Saunasession erfolgen eine technische Wartung und eine gründliche Desinfektion – für Ihren Komfort und höchste Hygienestandards.',
        },
      ],
    },
    {
      title: 'Buchung & Hausregeln',
      questions: [
        {
          q: 'Fallen zusätzliche Kosten an?',
          a: 'Nein. Die Nutzung der meisten Angebote ist im Übernachtungspreis enthalten. Sauna mit Tauchbottich zum Abkühlen, Fahrräder, SUP-Boards, Hängematten und Grill stehen Ihnen ohne Aufpreis zur Verfügung. Auch für Strom- und Wasserverbrauch berechnen wir keine zusätzlichen Gebühren. Die einzige optionale Leistung gegen Aufpreis ist die Miete des privaten Whirlpools.',
        },
        {
          q: 'Wie sind die An- und Abreisezeiten (Check-in/Check-out)?',
          a: 'Die Anreise ist ab 16:00 Uhr möglich, die Abreise bis 12:00 Uhr mittags. Uns liegt der Komfort unserer Gäste am Herzen – deshalb bieten wir standardmäßig einen späten Check-out bis zum Mittag an. Außerhalb der Hauptsaison können An- und Abreisezeiten nach Absprache auch individuell vereinbart werden, je nach Verfügbarkeit des Ferienhauses.',
        },
        {
          q: 'Sind Hunde bzw. Haustiere erlaubt?',
          a: 'Nein. In LAS BIALA\u2019S sind Haustiere nicht gestattet. Unser Haus wurde als Ort der Ruhe und Erholung konzipiert, um allen Gästen einen ungestörten und komfortablen Aufenthalt zu garantieren.',
        },
        {
          q: 'Warum ist die Anlage nur für Erwachsene (ab 18 Jahren)?',
          a: 'Wir haben diesen Ort für ruhige Erholung, Entspannung und Zeit zu zweit geschaffen. Der intime Charakter der Anlage ermöglicht es unseren Gästen, in Stille und naturnaher Umgebung vollkommen abzuschalten.',
        },
      ],
    },
  ],
};
