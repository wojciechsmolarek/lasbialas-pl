export interface Review {
  author: string;
  avatarUrl: string | null;
  rating: number;
  content: string;
  content_en: string;
  content_de: string;
  source: string;
}

export const reviews: Review[] = [
  {
    "author": "Donata Malak",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK88Un1O27NXlPnOZMD3bZFPeiI4BqGWlUQ7BHPmAKLEPleMg=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "To miejsce to prawdziwa perełka!\nDomki położone w samym sercu lasu …",
    "content_en": "This place is a real gem!\nThe cottages are located in the heart of the forest …",
    "content_de": "Dieser Ort ist ein wahres Juwel!\nDie Ferienhäuser liegen mitten im Wald …",
    "source": "Google"
  },
  {
    "author": "Michał Dąbrowski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocInEjZAY22q3UzqvZKSZ-7oeFTWRur9bBDk9V231GvG9bX8qw=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniale miejsce na weekendowy reset! Domek i otoczenie bardzo zadbane i czyste, dookoła las- raj dla grzybiarzy. Przede wszystkim- uczynny i przemiły …",
    "content_en": "A wonderful place for a weekend reset! The cottage and surroundings are very well-kept and clean, surrounded by forest - a paradise for mushroom pickers. Above all - helpful and lovely …",
    "content_de": "Ein wunderbarer Ort für einen Wochenend-Neustart! Das Haus und die Umgebung sind sehr gepflegt und sauber, umgeben von Wald - ein Paradies für Pilzsammler. Vor allem - hilfsbereit und nett …",
    "source": "Google"
  },
  {
    "author": "Rysia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIKXXk6saXYBUoxVdl69CUIgiD8JRVScdR1yAtTLrg9CMn_8g=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Przepiękna miejscówka, w pełni wyposażone domki, czyściutko, cicho i przyjemnie. Do tego bardzo sympatyczni właściciele. Pobyt u was to była sama przyjemność. Polecam!…",
    "content_en": "Beautiful place, fully equipped cottages, very clean, quiet and pleasant. Plus, very nice owners. Staying with you was a pure pleasure. I recommend!…",
    "content_de": "Wunderschöner Ort, voll ausgestattete Ferienhäuser, sehr sauber, ruhig und angenehm. Dazu sehr nette Besitzer. Der Aufenthalt bei Ihnen war ein reines Vergnügen. Ich empfehle!…",
    "source": "Google"
  },
  {
    "author": "Zielona Melodia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJIr1aB-ArWMTJd_AWP9jiuLTnomII7ckQrYPakiE0C-hY3Tw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Przepiękne miejsce położone w sercu Puszczy Noteckiej. Cisza i spokój, idealnie do leniwego odpoczynku. Czyściutki domek, dobrze wyposażony w którym jest …",
    "content_en": "A beautiful place located in the heart of the Notecka Forest. Peace and quiet, perfectly for lazy rest. A very clean cottage, well-equipped in which there is …",
    "content_de": "Ein wunderschöner Ort im Herzen der Notecka-Heide. Ruhe und Frieden, perfekt zum faulenzen. Ein sehr sauberes Ferienhaus, gut ausgestattet, in dem es …",
    "source": "Google"
  },
  {
    "author": "Dagmara Cybulska",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJKXYI4_nDpPfX2fNMdB9g-czbKlSGqrIeCshEbqtS2rxtwqNM=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce, godne polecenia. Domki wyposażone są we wszystkie niezbędne rzeczy, ale i takie ponadprogramowe umilacze czasu, które ratują w przypadku …",
    "content_en": "Super place, worth recommending. The cottages are equipped with all necessary things, but also such extra time-pleasers that save the day in case of …",
    "content_de": "Super Ort, sehr zu empfehlen. Die Ferienhäuser sind mit allen notwendigen Dingen ausgestattet, aber auch mit solchen zusätzlichen Zeitvertreiben, die den Tag retten, falls …",
    "source": "Google"
  },
  {
    "author": "Anastazja Szczerba",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWlc38xk-KRji3xkEKEYQZ10OiLgP9WXfQuYRmpOtHGLfmAspc=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spędziliśmy 3 noce w domkach, przyroda jest przepiękna, dużo zieleni, wiewiórek. Lokalizacja jest idealna dla miłośników chodzenia na ryby 🐟. Dziękujemy Pani gospodyni za wspaniały klimat i relaks w tak pięknym miejscu 🌸…",
    "content_en": "We spent 3 nights in the cottages, nature is beautiful, lots of greenery, squirrels. The location is perfect for fishing lovers 🐟. We thank the hostess for the wonderful atmosphere and relaxation in such a beautiful place 🌸…",
    "content_de": "Wir haben 3 Nächte in den Ferienhäusern verbracht, die Natur ist wunderschön, viel Grün, Eichhörnchen. Die Lage ist ideal für Angelliebhaber 🐟. Wir danken der Gastgeberin für die tolle Atmosphäre und Entspannung an einem so schönen Ort 🌸…",
    "source": "Google"
  },
  {
    "author": "Zofia Foltak",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJvkCqjbhejKM2NiVPuKNfD-TRqEHgRIVC_rZQbFhwWNCT6ZA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Piękne miejsce na odpoczynek, cisza, spokój i przesympatyczni właściciele:) bogato wyposażona biblioteczka i zbiór gier, dzięki którym nie grozi nuda w …",
    "content_en": "Beautiful place to relax, peace, quiet and very nice owners:) richly equipped bookcase and collection of games, thanks to which there is no risk of boredom in …",
    "content_de": "Wunderschöner Ort zum Entspannen, Ruhe, Stille und sehr nette Besitzer:) reich ausgestattete Bibliothek und Spielesammlung, dank derer keine Langeweile in … droht.",
    "source": "Google"
  },
  {
    "author": "Jessica",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK1oqBCBHyujPYabGCyTPr0T_SEF1kaJg8doJTr-JE0_Hz8IdBd=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Piękne miejsce. Cisza i spokój,a w tle urokliwy domek z jacuzzi i sauna.\nDomek w pełni wyposażony. Jedyne czego mi brakowało,to piekarnika ale w zamian jest grill.\nBardzo polecam ♥️",
    "content_en": "Beautiful place. Peace and quiet, and in the background a charming cottage with a jacuzzi and sauna.\nThe cottage is fully equipped. The only thing I was missing was an oven, but in return there is a grill.\nI highly recommend ♥️",
    "content_de": "Wunderschöner Ort. Ruhe und Stille und im Hintergrund ein charmantes Ferienhaus mit Whirlpool und Sauna.\nDas Haus ist voll ausgestattet. Das einzige, was mir fehlte, war ein Ofen, aber dafür gibt es einen Grill.\nIch kann es wärmstens empfehlen ♥️",
    "source": "Google"
  },
  {
    "author": "Radek Waleczny",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLwVTkrPuRkC0FZznxbPYOMb2SiEoaTay8tOAWPz_NpMKhgxw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Super miejsce przede wszystkim ciche i spokojne. Domki na bardzo wysokim standardzie. Dodatkowe atrakcje (sauna,bala,rowery gry planszowe oraz książki ) to …",
    "content_en": "Super place above all quiet and peaceful. Cottages of a very high standard. Additional attractions (sauna, tub, bikes, board games and books) are …",
    "content_de": "Super Ort vor allem ruhig und friedlich. Ferienhäuser auf einem sehr hohen Standard. Zusätzliche Attraktionen (Sauna, Badefass, Fahrräder, Brettspiele und Bücher) sind …",
    "source": "Google"
  },
  {
    "author": "Wojciech Kielpinski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKa4extQZLhHBDY-bGLVVWfl0bA7UAND1XqdUV1NP2xAVrVeA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe miejsce. Domki w lesie i to dosłownie! Rano podczas golenia oglądałem wiewiórki, śpiew ptaków, stukanie dzięcioła nieopodal. Idealne miejsce żeby …",
    "content_en": "Wonderful place. Cottages in the forest, quite literally! In the morning while shaving I watched squirrels, birds singing, a woodpecker knocking nearby. Perfect place to …",
    "content_de": "Wunderbarer Ort. Ferienhäuser im Wald und das buchstäblich! Morgens beim Rasieren beobachtete ich Eichhörnchen, Vogelgesang, das Klopfen eines Spechts in der Nähe. Perfekter Ort um …",
    "source": "Google"
  },
  {
    "author": "Linda Darroch",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKFuNgoCx7ML2oLfjYBlORa32GlDFCVC-AXNfXH9UmCPSvhLg=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Living a busy and hectic life, I found this one of the most beautiful, idyllic places to unwind. The walks through the forest provide peace and quiet. The small …",
    "content_en": "Living a busy and hectic life, I found this one of the most beautiful, idyllic places to unwind. The walks through the forest provide peace and quiet. The small …",
    "content_de": "Bei meinem geschäftigen und hektischen Leben empfand ich dies als einen der schönsten, idyllischsten Orte zum Entspannen. Die Spaziergänge durch den Wald bieten Ruhe und Frieden. Die kleinen …",
    "source": "Google"
  },
  {
    "author": "Sylwia Gwizdoń",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKugUqhrs4beSSBDLYt_N5_N9GFgdCebTdWSkOiLWnmKhce1g=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "To mega miejsce pod każdym względem . Jest tu dosłownie wszystko - klimat cisza spokój , domki na najwyższym poziomie. Całość zadbana. Polecam serdecznie!",
    "content_en": "This is a mega place in every way. There is literally everything here - atmosphere, silence, peace, cottages at the highest level. The whole thing is well-kept. I heartily recommend it!",
    "content_de": "Das ist in jeder Hinsicht ein mega Ort. Hier gibt es buchstäblich alles - Atmosphäre, Stille, Ruhe, Ferienhäuser auf höchstem Niveau. Alles ist gepflegt. Ich kann es nur wärmstens empfehlen!",
    "source": "Google"
  },
  {
    "author": "AGNIESZKA GRAZDA",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjW3syC3A9uCok3xsexm7cNqrCQXAd1RxudXcYquTptjManfJPM=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Fajna miejscówka, aby odetchnąć od miasta. Wokół lasy, jeziorko niedaleko od domku. Sam domek jest świetnie wyposażony. Niczego nam nie brakowało. Gospodarze mili i pomocni:) sauna super+balia👌to naprawdę godne polecenia miejsce!",
    "content_en": "Cool place to take a breather from the city. Surrounded by forests, a lake not far from the cottage. The cottage itself is brilliantly equipped. We lacked nothing. Hosts nice and helpful:) sauna super+tub👌it really is a recommendable place!",
    "content_de": "Toller Ort, um sich von der Stadt zu erholen. Umgeben von Wäldern, ein See nicht weit vom Haus entfernt. Das Haus selbst ist hervorragend ausgestattet. Uns hat es an nichts gefehlt. Nette und hilfsbereite Gastgeber:) Sauna super+Fass👌es ist wirklich ein empfehlenswerter Ort!",
    "source": "Google"
  },
  {
    "author": "j",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKhH4nx8jxAV4pUA9QQfyFw1Q1OCHXkTlVNzkr9Ryg21OWPFw=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spędziliśmy weekend w Las Biala’s i było wspaniale. Domki super wyposażone, właściwie niczego nie brakowało. Wielki plus za możliwość skorzystania z rowerów. Seanse w saunie odprężające. Świetne miejsce na odpoczynek po pracy i złapanie oddechu od miasta;)",
    "content_en": "We spent a weekend at Las Biala's and it was wonderful. Cottages super equipped, actually nothing was missing. Big plus for the possibility of using bikes. Sauna sessions relaxing. Great place to rest after work and catch a breath from the city;)",
    "content_de": "Wir haben ein Wochenende in Las Biala's verbracht und es war wunderbar. Die Häuser sind super ausgestattet, es fehlte eigentlich an nichts. Ein großes Plus für die Möglichkeit, Fahrräder zu benutzen. Saunagänge entspannend. Ein toller Ort, um sich nach der Arbeit auszuruhen und von der Stadt zu verschnaufen;)",
    "source": "Google"
  },
  {
    "author": "Magdalena Roweda",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV5GJSD7pZu_6SBuNf1QJL1idBB8Gg9-oNm6sr-hg9VHRjD1ny-=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Polecam pobyt w domku Las Bialas. Urocze miejsce, czegoś takiego właśnie szukałam. Jest możliwość korzystania z sauny w cenie pobytu. Najbardziej urzekł mnie …",
    "content_en": "I recommend a stay in the Las Bialas cottage. A charming place, just what I was looking for. It is possible to use the sauna included in the price of the stay. What captivated me most was …",
    "content_de": "Ich empfehle einen Aufenthalt im Ferienhaus Las Bialas. Ein charmanter Ort, genau das, wonach ich gesucht habe. Es ist möglich, die Sauna im Preis des Aufenthalts inbegriffen zu nutzen. Am meisten fasziniert hat mich …",
    "source": "Google"
  },
  {
    "author": "Rosa Lia",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjVrzj2JcvATcQ-s92wL0X6t9nEtZM9g8U4oSkuGmViSkbk0nbE-XA=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Pobyt w Las Biala's był naprawdę fantastyczny. Właścicielka obiektu Ola to przesympatyczna osoba, która zadbała o każdy szczegół, abyśmy czuli się komfortowo. …",
    "content_en": "The stay at Las Biala's was really fantastic. The owner of the facility Ola is a very nice person who took care of every detail so that we felt comfortable. …",
    "content_de": "Der Aufenthalt in Las Biala's war wirklich fantastisch. Die Besitzerin der Anlage, Ola, ist eine sehr sympathische Person, die sich um jedes Detail gekümmert hat, damit wir uns wohlfühlen. …",
    "source": "Google"
  },
  {
    "author": "Daria Pawlak",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWXXLMzAYBHv0F6b553ou-nxRijCIn2Q89v5ycSwu-RijE6h3-h=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Miejsce godne polecenia. Mili gospodarze. Domki w wysokim standardzie, sauna w cenie pobytu. Dodatkowo jest opcja rowerów a pogoda dopisała, żeby zwiedzić okolice. Z pewnością wrócę i każdemu niezdecydowanemu polecam 👍",
    "content_en": "A place worth recommending. Nice hosts. Cottages of a high standard, sauna included in the price of the stay. In addition, there is a bike option and the weather was good enough to explore the area. I will certainly come back and recommend it to anyone undecided 👍",
    "content_de": "Ein Ort, der eine Empfehlung wert ist. Nette Gastgeber. Ferienhäuser mit hohem Standard, Sauna im Preis inbegriffen. Zusätzlich gibt es eine Fahrradoption und das Wetter war gut genug, um die Gegend zu erkunden. Ich werde auf jeden Fall wiederkommen und jedem Unentschlossenen empfehlen 👍",
    "source": "Google"
  },
  {
    "author": "Nicholas Drycz",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIzAT51OgkkuSmFIS6y9MKSaX6C3yxWikNQP3tEP5q5gRMGHA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "A haven of tranquility and a place where you can unwind, relax and recharge. The overall climate and atmosphere of this hidden gem within the forest by a lake …",
    "content_en": "A haven of tranquility and a place where you can unwind, relax and recharge. The overall climate and atmosphere of this hidden gem within the forest by a lake …",
    "content_de": "Eine Oase der Ruhe und ein Ort, an dem Sie abschalten, entspannen und neue Energie tanken können. Das gesamte Klima und die Atmosphäre dieses verborgenen Juwels im Wald am See …",
    "source": "Google"
  },
  {
    "author": "Wiktoria Bloch",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjXEvHS97iq2-IBQeGUQN-yoMthnebfzPFbm0unHLcxHSy-PTa69=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe domki świetnie wyposażone bardzo wysoki standard, możliwość skorzystania z sauny oraz rowerów, okolo 5 min spacerem do jeziora, okolica otoczona wspaniałymi zielonymi terenami, właściciele bardzo milii oraz pomocni napewno wrócę ponownie",
    "content_en": "Wonderful cottages perfectly equipped very high standard, possibility to use the sauna and bikes, about 5 min walk to the lake, the area surrounded by wonderful green areas, owners very nice and helpful I will definitely come back again",
    "content_de": "Wunderschöne Ferienhäuser, perfekt ausgestattet, sehr hoher Standard, Möglichkeit, die Sauna und Fahrräder zu nutzen, ca. 5 Gehminuten zum See, die Umgebung ist von wunderschönen Grünflächen umgeben, die Besitzer sind sehr nett und hilfsbereit, ich werde auf jeden Fall wiederkommen",
    "source": "Google"
  },
  {
    "author": "A Ka",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIG2AaOK0bB0n98DbwQDTKznXJhZSLMExdWbf5kohLOCuaBqg=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Miejsce super, cisza i spokój. W domku znajdziecie wszystko co potrzebne. Bardzo dobry kontakt z przemiłymi właścicielami. Serdecznie polecam!",
    "content_en": "Super place, peace and quiet. In the cottage you will find everything you need. Very good contact with very nice owners. I heartily recommend!",
    "content_de": "Super Ort, Ruhe und Stille. Im Haus finden Sie alles, was Sie brauchen. Sehr guter Kontakt zu den sehr netten Besitzern. Ich kann es nur wärmstens empfehlen!",
    "source": "Google"
  },
  {
    "author": "Justyna",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJhK14hmu4jsN315z4Olls_Rfc1-FMwldKszThxOgT4M9_jOw=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Rewelacyjne miejsce🥰🥰 Byliśmy teraz na Święta Wielkanocne z rodziną  i nasza suczka Tosia 😊😊w zwiazku z czym cieszymy sie że jest możliwość zabrania ze soba …",
    "content_en": "Sensational place🥰🥰 We were there now for Easter with the family and our female dog Tosia 😊😊so we are glad that it is possible to bring with you …",
    "content_de": "Sensationeller Ort🥰🥰 Wir waren jetzt zu Ostern mit der Familie und unserer Hündin Tosia da 😊😊deshalb freuen wir uns, dass es möglich ist, sie mitzubringen …",
    "source": "Google"
  },
  {
    "author": "Dariusz Lisiecki",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLZztVUP2MFW_puPiYLj1IKwhc5lGVvTrV-EzVGzQ4eLi4b=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce. Wszystko czego potrzeba do wypoczynku i relaksu. Polecam!!!",
    "content_en": "Super place. Everything you need for rest and relaxation. I recommend!!!",
    "content_de": "Super Ort. Alles was man für Ruhe und Entspannung braucht. Ich empfehle!!!",
    "source": "Google"
  },
  {
    "author": "HRH",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV14NMjSn1QzY0L8ArPGjLV7hHoxou_kvgJ1YCmPT-H9K3B8d4=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "The place is located in a beautiful forest and it’s a real escapism from the busy life. The cabin is clean and well equipped.",
    "content_en": "The place is located in a beautiful forest and it’s a real escapism from the busy life. The cabin is clean and well equipped.",
    "content_de": "Der Ort liegt in einem wunderschönen Wald und ist eine echte Flucht vor dem hektischen Leben. Die Hütte ist sauber und gut ausgestattet.",
    "source": "Google"
  },
  {
    "author": "Piotr Mazur",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLYPrlMz-lo1bGEe66NB9tNwGfM0QleNhnOvwTk8Asa9zRxOA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Piękne i spokojne miejsce, idealne na wypoczynek. Do jeziora i sklepu trzeba dojść 300m, za to na miejscu cisza i spokój. Polecam chcącym dobrze odpocząć.",
    "content_en": "Beautiful and peaceful place, ideal for relaxation. To the lake and shop you have to walk 300m, but on site peace and quiet. I recommend it to those wanting a good rest.",
    "content_de": "Schöner und ruhiger Ort, ideal zum Entspannen. Zum See und zum Laden muss man 300 m laufen, dafür ist vor Ort Ruhe und Stille. Ich empfehle es denjenigen, die sich gut ausruhen wollen.",
    "source": "Google"
  },
  {
    "author": "Marzena Grynia",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocL-cCtD9x_OR3Ly5MMPaeUpqiCLcwNdBab_SLmySWk252vBrA=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Cudowne, ciche miejsce. Brak jakichkolwiek atrakcji zeby kase tracic 😀",
    "content_en": "Wonderful, quiet place. Lack of any attractions to waste money 😀",
    "content_de": "Wunderschöner, ruhiger Ort. Keine Attraktionen, um Geld zu verschwenden 😀",
    "source": "Google"
  },
  {
    "author": "Ryszard Łyskawa",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocKV3h52_VQHzQI0pzkh_nUSgBc0lTd6Rhm6vmIacs1LxTFy_A=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super miejsce, klimat i właściciele. Pozdrawiam",
    "content_en": "Super place, atmosphere and owners. Greetings",
    "content_de": "Super Ort, Atmosphäre und Besitzer. Viele Grüße",
    "source": "Google"
  },
  {
    "author": "Aleksander Swietlik",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjUYFvFeybM0vvPCe9z22v_wWAVWln0KbwMJLB9aCjFj_8Z24GnVEA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Wspaniałe miejsce! Super właściciele ! Wypad ze znajomymi udany w 100%",
    "content_en": "Wonderful place! Super owners ! Getaway with friends 100% successful",
    "content_de": "Wunderbarer Ort! Super Besitzer ! Ausflug mit Freunden 100% erfolgreich",
    "source": "Google"
  },
  {
    "author": "Rafał Z",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocIwkfRkdFMASTq_Lbp8xebcgwUq9HHI-sO0OjHRkTC426NjEA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Super . Polecam domki nowoczesne  wysoki standard.",
    "content_en": "Super . I recommend modern cottages high standard.",
    "content_de": "Super . Ich empfehle moderne Ferienhäuser mit hohem Standard.",
    "source": "Google"
  },
  {
    "author": "Robin",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjWJWHJ78qgcoExNjN545YZ_oeqO1AULyLdgG6ucClyLnz_1bcSQ=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "POLECAM !!! Przepiękne miejsce  właściciele bardzo mili o pomocni ♡",
    "content_en": "I RECOMMEND !!! Beautiful place owners very nice and helpful ♡",
    "content_de": "ICH EMPFEHLE !!! Schöner Ort, Besitzer sehr nett und hilfsbereit ♡",
    "source": "Google"
  },
  {
    "author": "Adam Gołębiowski",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocK97ds9waMKny09iLLWzLybEyjgrAkqMOq3nRgWz__ypbsc_Q=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Spokojnie i przyjemnie. Domki klasa 🤗",
    "content_en": "Peaceful and pleasant. Classy cottages 🤗",
    "content_de": "Ruhig und angenehm. Klasse Ferienhäuser 🤗",
    "source": "Google"
  },
  {
    "author": "Kinga Kubiatowicz",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjV62W08ftsq7GMoIqOL4BoFiW8A_TW-Qc8XKnvQ1bPxJqOt9R6x=s64-c-rp-mo-ba12-br100",
    "rating": 5,
    "content": "Polecam cisza i rekax",
    "content_en": "I recommend peace and relax",
    "content_de": "Ich empfehle Ruhe und Entspannung",
    "source": "Google"
  },
  {
    "author": "Rafał Szymański",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjU-ZPKI_Sb0Z2xD7n5gUsRNjPqFl4ZIfo7SeY_XXYgg_wO4iCs=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Najlepiej!!!",
    "content_en": "The best!!!",
    "content_de": "Am besten!!!",
    "source": "Google"
  },
  {
    "author": "Angie yt",
    "avatarUrl": "https://lh3.googleusercontent.com/a-/ALV-UjUZ3lIzU3ywvxHYlCUzh8EJHM-oA7BWKF5E9K25Nyqiqxsv4t4=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Miejsce fantastyczne zaledwie pare metrów do jeziorka . Cisza i spokój pośród leśnych drzew. Domek czyściutki i nowoczesny. Obsługa niesamowita i profesjonalna. Z całego serca polecam to miejsce. Z Pozdrowieniami dla Gospodarzy…",
    "content_en": "Fantastic place just a few meters to the lake . Peace and quiet among the forest trees. Cottage extremely clean and modern. Incredible and professional service. I recommend this place with all my heart. Best regards to the Hosts…",
    "content_de": "Fantastischer Ort nur wenige Meter vom See entfernt. Ruhe und Stille inmitten der Waldbäume. Haus extrem sauber und modern. Unglaublicher und professioneller Service. Ich empfehle diesen Ort von ganzem Herzen. Viele Grüße an die Gastgeber…",
    "source": "Google"
  },
  {
    "author": "Benedikt Schröbel",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocL97lL_ZCD9TPZHuUdtI8f3Tlkgjq5pLm_Z14VEe4txWCHPJw=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Sehr Freundliche Gastgeber, helfen dir wo sie können. …",
    "content_en": "Very friendly hosts, help you where they can. …",
    "content_de": "Sehr Freundliche Gastgeber, helfen dir wo sie können. …",
    "source": "Google"
  },
  {
    "author": "Jago Wo",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ4w6s6cPiaV_pyULRf4xj7WMRPuLjIXBMuibrWgzCkxS-XqA=s64-c-rp-mo-br100",
    "rating": 5,
    "content": "Ein wunderschönes Ort zum abschalten. Kann man nur empfehlen.",
    "content_en": "A beautiful place to switch off. Highly recommended.",
    "content_de": "Ein wunderschönes Ort zum abschalten. Kann man nur empfehlen.",
    "source": "Google"
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
    "author": "Agata",
    "avatarUrl": "https://graph.facebook.com/v2.9/5472322942819251/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "Obiekt w pięknym miejscu blisko jeziora\nDookoła inne domki letniskowe jednak niesamowicie cicho. Domek bardzo ładnie i funkcjonalnie urządzony. W środku jest wszystko na najwyższym poziomie. Wspaniała pościel. Jacuzzi, którym nie trzeba się dzielić. Na powitanie gości właściciele zostawiają szampana. Do absolutnie niczego nie można się przyczepić.",
    "content_en": "The property is in a beautiful location close to the lake. There are other holiday cottages around, but it is incredibly quiet. The cottage is very nicely and functionally furnished. Inside, everything is of the highest standard. Wonderful bedding. A jacuzzi that you don't have to share. The owners leave champagne to welcome guests. There is absolutely nothing to complain about.",
    "content_de": "Die Unterkunft befindet sich an einem wunderschönen Ort nahe dem See. Ringsum gibt es andere Ferienhäuser, aber es ist unglaublich ruhig. Das Haus ist sehr schön und funktionell eingerichtet. Im Inneren ist alles auf höchstem Niveau. Wunderbare Bettwäsche. Ein Whirlpool, den man nicht teilen muss. Zur Begrüßung der Gäste hinterlassen die Besitzer Champagner. Es gibt absolut nichts auszusetzen.",
    "source": "Booking.com"
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
    "author": "Dagmara",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-d.png",
    "rating": 5,
    "content": "Kolejna udana wizyta, nic się nie zmieniło od ostatniego pobytu. Wszystko, jak najbardziej na plus. Fajne miejsce, pełen komfort i udogodnienia, a właściciele na maksa pomocni i kochani. Oby więcej takich miejsc. Polecajka na maksa 🙂❤️",
    "content_en": "Another successful visit, nothing has changed since the last stay. Everything is a plus. Cool place, full comfort and amenities, and the owners are extremely helpful and lovely. Let there be more such places. Maximum recommendation 🙂❤️",
    "content_de": "Ein weiterer erfolgreicher Besuch, seit dem letzten Aufenthalt hat sich nichts geändert. Alles ein Pluspunkt. Toller Ort, voller Komfort und Annehmlichkeiten, und die Besitzer sind extrem hilfsbereit und reizend. Möge es mehr solcher Orte geben. Maximale Empfehlung 🙂❤️",
    "source": "Booking.com"
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
    "author": "Agrestino1",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-a.png",
    "rating": 5,
    "content": "Wspaniałe miejsce wśród leśnej ciszy, komfortowo wyposażone, bardzo czyste i zadbane. Jacuzzi i sauna w środku leśnej głuszy gwarantują niezapomniane wspomnienia. W to miejsce można śmiało uciekać od miejskiego zgiełku.\nW razie pytań przemili i kompetentni właściciele mają odpowiedzi i sposoby :)",
    "content_en": "A wonderful place amidst the forest silence, comfortably equipped, very clean and well-kept. Jacuzzi and sauna in the middle of the wilderness guarantee unforgettable memories. You can safely escape from the hustle and bustle of the city to this place. In case of questions, the delightful and competent owners have answers and solutions :)",
    "content_de": "Ein wunderbarer Ort inmitten der Stille des Waldes, komfortabel ausgestattet, sehr sauber und gepflegt. Whirlpool und Sauna mitten in der Wildnis garantieren unvergessliche Erinnerungen. Man kann an diesen Ort getrost vor dem Trubel der Stadt fliehen. Bei Fragen haben die reizenden und kompetenten Besitzer Antworten und Lösungen parat :)",
    "source": "Booking.com"
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
    "author": "Barbara",
    "avatarUrl": "https://lh3.googleusercontent.com/-Xnk_mZykfrg/AAAAAAAAAAI/AAAAAAAAAGM/-JV83orxsJU/photo.jpg?sz=50",
    "rating": 5,
    "content": "Mimo że domek jest w lesie ciężko się tu nudzić. Są gry, książki, telewizor i wifi. Dostępne są rowery i SUPy. Domek czysty, zadbany i świetnie wyposażony. Na powitanie czekało winko. Świetny kontakt z właścicielami.",
    "content_en": "Even though the cottage is in the forest, it's hard to get bored here. There are games, books, TV and wifi. Bikes and SUPs are available. Cottage clean, neat and well equipped. Wine was waiting as a welcome. Great contact with the owners.",
    "content_de": "Obwohl sich das Haus im Wald befindet, wird es hier schwer, sich zu langweilen. Es gibt Spiele, Bücher, Fernseher und WLAN. Fahrräder und SUPs stehen zur Verfügung. Ferienhaus sauber, gepflegt und gut ausgestattet. Ein Wein wartete zur Begrüßung. Toller Kontakt mit den Besitzern.",
    "source": "Booking.com"
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
    "author": "Bartosz",
    "avatarUrl": "https://lh4.googleusercontent.com/-BPECDPiq2so/AAAAAAAAAAI/AAAAAAAAAAA/AMcAYi8a-mbwsEjdBhxAYWdyup7Z-0yRqA/s96-c/photo.jpg",
    "rating": 5,
    "content": "Wszystko ;) Idealne miejsce na wypoczynek w lesie. Domki dopieszczone w każdym szczególe i doskonale wyposażone, od razu widać ogrom pracy włożony przez bardzo sympatycznych właścicieli. Z reguły nie jeżdżę w te same miejsca, ale tym razem nie wykluczam powrotu. Polecam!",
    "content_en": "Everything ;) Ideal place for rest in the forest. Cottages pampered in every detail and perfectly equipped, you can immediately see the huge amount of work put in by the very friendly owners. As a rule, I don't go to the same places, but this time I do not exclude coming back. I recommend it!",
    "content_de": "Alles ;) Der ideale Ort für einen Aufenthalt im Wald. Die Ferienhäuser sind bis ins Detail gepflegt und perfekt ausgestattet, man sieht sofort die viele Arbeit der sehr freundlichen Besitzer. Normalerweise fahre ich nicht an die gleichen Orte, aber dieses Mal schließe ich eine Rückkehr nicht aus. Ich empfehle es!",
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
    "author": "Dagmara",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-d.png",
    "rating": 5,
    "content": "Super miejsce, godne polecenia. Domki wyposażone są we wszystkie niezbędne rzeczy, ale i takie ponadprogramowe umilacze czasu, które ratują w przypadku deszczowej pogody. Jeśli zależy Wam na komforcie oraz spokoju to lepiej nie da się trafić. Nie dość, że miejsce jest cudowne to jeszcze właściciele okazali się równie cudowni - pomocni i sympatyczni. Oby więcej takich miejsc i ludzi :)",
    "content_en": "Super place, worth recommending. Cottages are equipped with all necessary things, but also extra time-pleasers that save you in case of rainy weather. If you care about comfort and peace, you can't hit better. Not only is the place wonderful, but the owners turned out to be equally wonderful - helpful and friendly. Hopefully more such places and people :)",
    "content_de": "Ein toller Ort, der zu empfehlen ist. Die Ferienhäuser sind mit allen notwendigen Dingen ausgestattet, aber auch mit zusätzlichen Annehmlichkeiten, die bei regnerischem Wetter helfen. Wenn Sie Wert auf Komfort und Ruhe legen, können Sie es nicht besser treffen. Nicht nur, dass der Ort wunderschön ist, auch die Besitzer erwiesen sich als ebenso wunderbar - hilfsbereit und freundlich. Hoffentlich mehr solche Orte und Menschen :)",
    "source": "Booking.com"
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
    "author": "Corneliuscat",
    "avatarUrl": "https://graph.facebook.com/v2.9/1787571761266238/picture?type=square&height=64&width=64",
    "rating": 5,
    "content": "We had an amazing stay at this beautiful holiday cottage! The location is quiet, peaceful, and feels very safe — making it perfect for relaxation and unwinding. The cottage is so close to the lake, just a short stroll away, which made our mornings and evenings truly magical.\nThe hosts were incredible — welcoming, thoughtful, and always happy to help. The facilities were top-notch with everything we needed and more — clean, comfortable, and well-equipped for a great stay.\nHighly recommend this place for anyone looking for a lovely getaway!",
    "content_en": "We had an amazing stay at this beautiful holiday cottage! The location is quiet, peaceful, and feels very safe — making it perfect for relaxation and unwinding. The cottage is so close to the lake, just a short stroll away, which made our mornings and evenings truly magical.\nThe hosts were incredible — welcoming, thoughtful, and always happy to help. The facilities were top-notch with everything we needed and more — clean, comfortable, and well-equipped for a great stay.\nHighly recommend this place for anyone looking for a lovely getaway!",
    "content_de": "Wir hatten einen fantastischen Aufenthalt in diesem schönen Ferienhaus! Die Lage ist ruhig, friedlich und fühlt sich sehr sicher an - ideal zum Entspannen und Erholen. Das Ferienhaus liegt so nah am See, nur einen kurzen Spaziergang entfernt, was unsere Morgen und Abende wirklich magisch machte.\nDie Gastgeber waren unglaublich - einladend, aufmerksam und immer hilfsbereit. Die Einrichtungen waren erstklassig mit allem, was wir brauchten und mehr - sauber, komfortabel und gut ausgestattet für einen tollen Aufenthalt.\nIch kann diesen Ort jedem wärmstens empfehlen, der auf der Suche nach einem schönen Kurzurlaub ist!",
    "source": "Booking.com"
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
    "author": "Silke",
    "avatarUrl": "https://lh3.googleusercontent.com/a/ACg8ocLXQONmAeiNzf9QRlft8Fv_t0V3AHFocohPi6WebdMASUPC=s96-c",
    "rating": 5,
    "content": "Such a lovely quiet spot in the forest to completely relax and unwind! Superfriendly hosts and always ready to help. Sauna and jacuzzi were next level and ensured ultimate relaxation. Would highly recommend and hope to be back someday!",
    "content_en": "Such a lovely quiet spot in the forest to completely relax and unwind! Superfriendly hosts and always ready to help. Sauna and jacuzzi were next level and ensured ultimate relaxation. Would highly recommend and hope to be back someday!",
    "content_de": "Was für ein schöner ruhiger Ort im Wald, um sich vollkommen zu entspannen und abzuschalten! Superfreundliche Gastgeber und immer bereit zu helfen. Sauna und Whirlpool waren auf dem nächsten Level und sorgten für ultimative Entspannung. Kann es wärmstens empfehlen und hoffe, eines Tages wiederzukommen!",
    "source": "Booking.com"
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
    "author": "Miłosz",
    "avatarUrl": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50",
    "rating": 5,
    "content": "Wszystko nam się podobało, domek zawierał wszystkie udogodnienia. Sauna i rowery w cenie domków to duży plus. Całość dopełnili bardzo porządni i grzeczni gospodarze :) Nawet starzy polacy mogą mieć problem, żeby się do czegoś doczepić :D polecamy!",
    "content_en": "We liked everything, the cottage contained all the amenities. Sauna and bikes included in the price of the cottages is a big plus. The whole was completed by very decent and polite hosts :) Even old Poles might have a problem clinging to something :D we recommend!",
    "content_de": "Uns hat alles gefallen, das Ferienhaus enthielt alle Annehmlichkeiten. Sauna und Fahrräder im Preis inbegriffen ist ein großes Plus. Das Ganze wurde durch sehr anständige und höfliche Gastgeber abgerundet :) Sogar alte Polen könnten Probleme haben, etwas zu meckern zu finden :D wir empfehlen!",
    "source": "Booking.com"
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
    "author": "Vinividiviczi",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-v.png",
    "rating": 4.5,
    "content": "-Ładne zadbane i dobrze wyposażone domki \n-Bardzo fajna sauna - na plus że można zarezerwować i korzystać samemu oraz zamknąć się od środka co daje duże poczucie komfortu. \n-Cisza i spokój",
    "content_en": "-Nice, neat and well equipped cottages \n-Very nice sauna - a plus that you can book and use it yourself and lock it from the inside, which gives a great sense of comfort. \n-Peace and quiet",
    "content_de": "-Schöne, gepflegte und gut ausgestattete Ferienhäuser \n-Sehr schöne Sauna - ein Pluspunkt, dass man sie selbst buchen und nutzen sowie von innen verschließen kann, was ein tolles Gefühl von Komfort gibt. \n-Ruhe und Stille",
    "source": "Booking.com"
  },
  {
    "author": "Marinus",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-m.png",
    "rating": 5,
    "content": "De stilte.",
    "content_en": "The silence.",
    "content_de": "Die Stille.",
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
    "author": "Liudmyla",
    "avatarUrl": "https://xx.bstatic.com/static/img/review/avatars/ava-l.png",
    "rating": 5,
    "content": "👍👍👍👍👍",
    "content_en": "👍👍👍👍👍",
    "content_de": "👍👍👍👍👍",
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
    "author": "Mikita",
    "avatarUrl": "https://lh3.googleusercontent.com/a/AATXAJyLAJH22tQoDfOwhM3ueFWHBUKNMAETAzMnYhtH=s96-c",
    "rating": 5,
    "content": "Sauna i jacuzzi o najwyższym standardzie, wyposażenie domków, dodatkowe atrakcje (rowery, SUPy)",
    "content_en": "Sauna and jacuzzi of the highest standard, cottage equipment, additional attractions (bikes, SUPs)",
    "content_de": "Sauna und Whirlpool auf höchstem Standard, Ausstattung des Hauses, zusätzliche Attraktionen (Fahrräder, SUPs)",
    "source": "Booking.com"
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
    "author": "Natalia",
    "avatarUrl": null,
    "rating": 5,
    "content": "Jesteśmy bardzo zadowoleni z pobytu, gospodarze bardzo pomocni i życzliwi. Możliwość korzystania z sauny po uprzednim umówieniu godziny i rezerwacji, z tej części pobytu jesteśmy najbardziej zadowoleni :) sam domek piękny, pachnący drewnem, przestronny, pomimo jego małej powierzchni, z bardzo dobrze wyposażoną kuchnią. Możliwość korzystania z grilla - grill z całym niezbędnym wyposażeniem (podpałka, brykiet, specjalne sztućce i szczypce). Domki znajdują się dosłownie w środku lasu, wokół panowała cisza i spokój. Polecam to miejsce wszystkim osobom, które chcą odpocząć od zgiełku dużego miasta. Na pewno zawitamy do Las Biala's ponownie.",
    "content_en": "We are very pleased with our stay, the hosts are very helpful and kind. The possibility of using the sauna after prior appointment and reservation, we are most satisfied with this part of the stay :) the cottage itself is beautiful, smelling of wood, spacious, despite its small area, with a very well-equipped kitchen. Possibility to use a grill - a grill with all the necessary equipment (kindling, briquettes, special cutlery and tongs). The cottages are located literally in the middle of the forest, there was peace and quiet around. I recommend this place to all people who want to rest from the hustle and bustle of a big city. We will definitely visit Las Biala's again.",
    "content_de": "Wir sind sehr zufrieden mit unserem Aufenthalt, die Gastgeber sind sehr hilfsbereit und freundlich. Die Möglichkeit, die Sauna nach vorheriger Terminabsprache und Reservierung zu nutzen, dieser Teil des Aufenthaltes hat uns am besten gefallen :) das Haus selbst ist schön, riecht nach Holz, geräumig trotz der kleinen Fläche, mit einer sehr gut ausgestatteten Küche. Möglichkeit, einen Grill zu benutzen - ein Grill mit der gesamten notwendigen Ausrüstung (Anzündholz, Briketts, spezielles Besteck und Zange). Die Ferienhäuser liegen buchstäblich mitten im Wald, ringsum herrschte Ruhe und Stille. Ich empfehle diesen Ort allen Menschen, die sich vom Trubel einer Großstadt erholen wollen. Wir werden Las Biala's auf jeden Fall wieder besuchen.",
    "source": "AlohaCamp"
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
    "author": "Patrycja",
    "avatarUrl": null,
    "rating": 5,
    "content": "Zdecydowanie polecam Las Biala's. Lokalizacja bezbłędna - można sie zanurzyć w cichym i urokliwym lesie lub podziwiać zachody słońca nad jeziorkiem. Obiekt sam w sobie wygląda rownie bajecznie, wiec nawet w deszczowe dni jest pięknie - czytanie ksiezek na lezaczku, sauna czy jacuzzi- to wszystko pozwala by mimo pochmurnej pogody, czuc sie dalej jak w bajce. Do najbliższego sklepu jest 5 min drogi, więc nawet wszystko jest pod ręką. Właściciele - go kolejna piękna bajka. Pomocni, otwarci i dbają o gości, jednocześnie dając przestrzeń na odpoczynek. Idealne miejsce by naładować baterie i wypocząć. Na pewno jeszcze tam wrócę!",
    "content_en": "I definitely recommend Las Biala's. Flawless location - you can immerse yourself in a quiet and charming forest or admire sunsets over the lake. The facility itself looks equally fabulous, so even on rainy days it's beautiful - reading books on a deckchair, a sauna or a jacuzzi - all this allows you to still feel like in a fairy tale despite the cloudy weather. The nearest shop is a 5-minute walk, so everything is at hand. The owners - another beautiful fairy tale. Helpful, open and care for guests, while giving space to rest. An ideal place to recharge your batteries and rest. I will definitely come back there!",
    "content_de": "Ich empfehle Las Biala's auf jeden Fall. Makellose Lage - Sie können in einen ruhigen und bezaubernden Wald eintauchen oder Sonnenuntergänge über dem See bewundern. Die Einrichtung selbst sieht ebenso fabelhaft aus, sodass es auch an regnerischen Tagen schön ist – Bücher auf einem Liegestuhl lesen, Sauna oder Whirlpool – all dies ermöglicht es Ihnen, sich trotz des bewölkten Wetters wie in einem Märchen zu fühlen. Das nächste Geschäft ist nur 5 Gehminuten entfernt, sodass alles griffbereit ist. Die Besitzer – ein weiteres schönes Märchen. Hilfsbereit, offen und kümmern sich um die Gäste, während sie Raum zum Ausruhen geben. Ein idealer Ort, um neue Energie zu tanken und sich auszuruhen. Ich werde auf jeden Fall wiederkommen!",
    "source": "AlohaCamp"
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
    "author": "Ania",
    "avatarUrl": "https://img.alohacamp.com/lG7HUkDqZjTTyF6uZ8CXu_Y7gfbJ9yHjHzmxk077cT8/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvYjYwN2RlNGZlNjE2Y2M2MjliZWM0NmIxYjE1M2EwYWZhODYzOWI3NS5wbmc",
    "rating": 5,
    "content": "Rewelacyjne miejsce do wypoczynku i odpoczęcia od miejskiego zgiełku. Wszystko na miejscu. Przemili i pomocni gospodarze. Polecam",
    "content_en": "Sensational place to relax and rest from the hustle and bustle of the city. Everything on site. Very nice and helpful hosts. I recommend",
    "content_de": "Sensationeller Ort, um sich zu entspannen und sich vom Trubel der Stadt zu erholen. Alles vor Ort. Sehr nette und hilfsbereite Gastgeber. Ich empfehle es",
    "source": "AlohaCamp"
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
    "author": "Kamila",
    "avatarUrl": null,
    "rating": 5,
    "content": "Piękne miejsce. Cudownie właściciele. Szczerze polecam ☺️",
    "content_en": "Beautiful place. Wonderful owners. I sincerely recommend ☺️",
    "content_de": "Wunderschöner Ort. Wunderbare Besitzer. Ich kann es aufrichtig empfehlen ☺️",
    "source": "AlohaCamp"
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
    "author": "Anita",
    "avatarUrl": null,
    "rating": 5,
    "content": "Genialne miejsce dla osob chcących uciec od zgiełku miasta. Domek świetnie wyposażony. Wiele ścieżek na spacery. Na pewno wrócimy.",
    "content_en": "Brilliant place for people wanting to escape the hustle and bustle of the city. Perfectly equipped cottage. Many walking paths. We will definitely come back.",
    "content_de": "Genialer Ort für Leute, die dem Trubel der Stadt entfliehen wollen. Perfekt ausgestattetes Haus. Viele Wanderwege. Wir werden auf jeden Fall wiederkommen.",
    "source": "AlohaCamp"
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
    "author": "Marcin",
    "avatarUrl": null,
    "rating": 5,
    "content": "Super domek. Kontakt z właścicielem bardzo dobry. Wszystko zgodne z opisem. Na pewno jeszcze tu wrócimy. Polecam.",
    "content_en": "Super cottage. Contact with the owner very good. Everything as described. We will definitely come back here. I recommend.",
    "content_de": "Super Ferienhaus. Kontakt mit dem Besitzer sehr gut. Alles wie beschrieben. Wir werden auf jeden Fall hierher zurückkehren. Ich empfehle es.",
    "source": "AlohaCamp"
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
    "author": "Krzysztof",
    "avatarUrl": "https://img.alohacamp.com/sBVCEmekpmh6B2QVzVyUW8vDzdpXxxHDRn9GfwVQ8uw/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvYTRkNTdmMzM3NzM1MWM5M2FkZTI3MDlhNzYwNDFmNmRkNjNlYmE4OS5wbmc",
    "rating": 5,
    "content": "Polecam! Świetnie miejsce gdzie naprawdę można odpocząć. Domek wyposażony we wszystko co potrzeba. Bezproblemowy kontakt z gospodarzami, którzy są naprawdę mili oraz pomocni i czuć, że chcą abyś czuł się dobrze podczas pobytu :)",
    "content_en": "I recommend! Great place where you can really relax. Cottage equipped with everything you need. Hassle-free contact with the hosts, who are really nice and helpful, and you can feel that they want you to feel good during your stay :)",
    "content_de": "Ich empfehle es! Toller Ort, an dem man sich wirklich entspannen kann. Das Ferienhaus ist mit allem ausgestattet, was man braucht. Problemloser Kontakt mit den Gastgebern, die wirklich nett und hilfsbereit sind, und man spürt, dass sie möchten, dass man sich während des Aufenthalts wohlfühlt :)",
    "source": "AlohaCamp"
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
    "author": "Dagmara",
    "avatarUrl": null,
    "rating": 5,
    "content": "Spędziliśmy weekend w Las Biala's. To był niezwykle miły i wyciszający czas dla nas. Bardzo polecamy, domki czyste, zadbane, dobrze ogrzewane i przytulne. Gospodarze bardzo mili i pomocni. Można było także skorzystać z rowerów należących do Las Biala's i pozwiedzać okolicę. Z całego serca polecamy, na pewno jeszcze wrócimy :)",
    "content_en": "We spent a weekend in Las Biala's. It was an extremely nice and calming time for us. We highly recommend it, the cottages are clean, neat, well heated and cozy. The hosts were very nice and helpful. We could also use the bikes belonging to Las Biala's and explore the area. We recommend it with all our hearts, we will definitely return :)",
    "content_de": "Wir haben ein Wochenende in Las Biala's verbracht. Es war eine sehr schöne und beruhigende Zeit für uns. Wir können es sehr empfehlen, die Häuser sind sauber, gepflegt, gut beheizt und gemütlich. Die Gastgeber waren sehr nett und hilfsbereit. Wir konnten auch die Fahrräder von Las Biala's nutzen und die Gegend erkunden. Wir empfehlen es von ganzem Herzen, wir werden auf jeden Fall wiederkommen :)",
    "source": "AlohaCamp"
  },
  {
    "author": "Rozaliia",
    "avatarUrl": "https://img.alohacamp.com/rtxduhOwp-BCF2igjHcHvOggpIXOnIyEvnb_h5j-Njs/resize:fill:200:200/enlarge:1/czM6Ly9hbG9oYS5pbWFnZXMvdXNlcnMvYThmMGE0NjQ0MDYxMTdjMzUyZDU2YjNkZDZlNWFlZDMzMDQ3YTdiMS5qcGc",
    "rating": 5,
    "content": "Pobyt w Las Biala's był naprawdę fantastyczny. Właścicielka obiektu Ola to przesympatyczna osoba, która zadbała o każdy szczegół, abyśmy czuli się komfortowo. Domek był wyposażony we wszystko co niezbędne. Zdecydowanie atutem była lokalizacja- w środku lasu. Na miejscu były dostępne rowery oraz grill. To miejsce jest idealne na relaks i ucieczkę od codzienności. Zdecydowanie polecam każdemu, kto marzy o chwili spokoju i odpoczynku od miasta 🥰",
    "content_en": "The stay at Las Biala's was really fantastic. The owner of the facility, Ola, is a lovely person who took care of every detail to make us feel comfortable. The cottage was equipped with everything necessary. The location was a definite advantage - in the middle of the forest. Bikes and a grill were available on site. This place is ideal for relaxing and escaping from everyday life. I definitely recommend it to anyone who dreams of a moment of peace and rest from the city 🥰",
    "content_de": "Der Aufenthalt in Las Biala's war wirklich fantastisch. Die Besitzerin der Anlage, Ola, ist eine wunderbare Person, die sich um jedes Detail kümmerte, damit wir uns wohlfühlten. Das Ferienhaus war mit allem Nötigen ausgestattet. Die Lage war ein definitiver Vorteil - mitten im Wald. Fahrräder und ein Grill standen vor Ort zur Verfügung. Dieser Ort ist ideal zum Entspannen und Entfliehen aus dem Alltag. Ich kann es jedem nur empfehlen, der von einem Moment der Ruhe und Erholung von der Stadt träumt 🥰",
    "source": "AlohaCamp"
  },
  {
    "author": "Monika",
    "avatarUrl": null,
    "rating": 5,
    "content": "Wspaniałe miejsce, wspaniały gospodarz Z czystym sercem polecam",
    "content_en": "Wonderful place, wonderful host I recommend with a pure heart",
    "content_de": "Wunderbarer Ort, wunderbarer Gastgeber, ich empfehle es reinen Herzens",
    "source": "AlohaCamp"
  }
];
