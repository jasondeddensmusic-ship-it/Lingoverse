// L17: Ice, Cold, and Weather Extremes
const LESSON_17 = {
  id:"nlv2_b2g6_l17", title:"IJs, Koude en Weer", icon:"\u2744\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Ice, Cold, and Weather Extremes",
     desc:"Learn vocabulary about ice, cold weather, and extreme conditions. In a country below sea level, the Dutch have a special relationship with water in all its forms.",
     goals:["Learn 10 words about ice, cold, and weather","Discuss Dutch winter traditions","Use weather-related compounds"]},

    {type:"teach", trg:"de ijskap", src:"the ice cap", pos:"noun", gender:"c",
     note:"Compound: ijs (ice) + kap (cap, cover).\nThe layer of ice covering polar regions.",
     example:"A: De ijskap op de Noordpool smelt steeds sneller.\nB: Door klimaatverandering?\nA: Ja, de temperatuur stijgt.\nB: Dat heeft gevolgen voor de zeespiegel.",
     exampleSrc:"A: The ice cap on the North Pole is melting faster and faster.\nB: Due to climate change?\nA: Yes, the temperature is rising.\nB: That has consequences for sea level.",
     funFact:"The Netherlands is especially vulnerable to melting ice caps. One-third of the country is below sea level, protected only by dikes and dunes."},

    {type:"teach", trg:"de gum", src:"the eraser", pos:"noun", gender:"c",
     note:"From English 'gum' (rubber). In Dutch, it means eraser.\nNot chewing gum, which is 'kauwgom'.",
     example:"A: Mag ik je gum lenen?\nB: Natuurlijk, hier.\nA: Ik heb een fout gemaakt in mijn tekening.\nB: Een gum is altijd handig.",
     exampleSrc:"A: May I borrow your eraser?\nB: Of course, here.\nA: I made a mistake in my drawing.\nB: An eraser is always handy.",
     funFact:"Dutch children always have a 'gum' in their pencil case. The word is a false friend for English speakers who expect it to mean chewing gum."},

    {type:"teach", trg:"hullen", src:"to wrap, to shroud, to envelop", pos:"verb", gender:null,
     note:"From Middle Dutch 'hullen' (to cover).\nLiterary: to wrap in something like fog or mystery.",
     example:"A: De stad was in mist gehuld.\nB: Kon je niets zien?\nA: Nauwelijks, het was heel dik.\nB: Typisch herfst in Nederland.",
     exampleSrc:"A: The city was shrouded in fog.\nB: Could you not see anything?\nA: Barely, it was very thick.\nB: Typical autumn in the Netherlands.",
     funFact:"The expression 'in nevelen gehuld' (shrouded in mists) is used figuratively for something mysterious or unclear. Very literary Dutch."},

    {type:"teach", trg:"het Deens", src:"Danish (language)", pos:"noun", gender:null,
     note:"From 'Denemarken' (Denmark).\nCapitalized when referring to the language.",
     example:"A: Spreek jij Deens?\nB: Een beetje, ik heb in Kopenhagen gestudeerd.\nA: Het lijkt op Nederlands, toch?\nB: De schrijftaal wel, maar de uitspraak is heel anders.",
     exampleSrc:"A: Do you speak Danish?\nB: A bit, I studied in Copenhagen.\nA: It resembles Dutch, right?\nB: The written language does, but the pronunciation is very different.",
     funFact:"Dutch and Danish are both Germanic languages. A Dutch person reading Danish can understand much of it, but speaking is a different story entirely."},

    {type:"teach", trg:"het Duits", src:"German (language)", pos:"noun", gender:null,
     note:"From 'Duitsland' (Germany).\nThe closest major relative of Dutch.",
     example:"A: Ik leer Duits op school.\nB: Dat is handig, Duitsland is onze buurman.\nA: Veel woorden lijken op Nederlands.\nB: Maar de grammatica is moeilijker.",
     exampleSrc:"A: I am learning German at school.\nB: That is useful, Germany is our neighbor.\nA: Many words resemble Dutch.\nB: But the grammar is harder.",
     funFact:"German is a mandatory school subject in the Netherlands. The two languages share about 85% of their basic vocabulary."},

    {type:"mc",
     q:"Wat is een 'gum' in het Nederlands?",
     opts:["Een gummetje om te wissen","Kauwgom","Rubber voor autobanden","Lijm"],
     ans:"Een gummetje om te wissen",
     hint:"A false friend for English speakers. In Dutch, this word from English 'gum' refers to a school supply that removes pencil marks."},

    {type:"teach", trg:"de cybercriminaliteit", src:"cybercrime", pos:"noun", gender:"c",
     note:"Compound: cyber + criminaliteit (crime).\nDigital crime including hacking, fraud, phishing.",
     example:"A: Cybercriminaliteit neemt elk jaar toe.\nB: Welke vormen zijn het gevaarlijkst?\nA: Phishing en ransomware.\nB: Iedereen moet beter opletten online.",
     exampleSrc:"A: Cybercrime increases every year.\nB: Which forms are most dangerous?\nA: Phishing and ransomware.\nB: Everyone needs to pay better attention online.",
     funFact:"The Netherlands hosts Europol's European Cybercrime Centre (EC3) in The Hague. Dutch police are among Europe's most active in fighting cybercrime."},

    {type:"teach", trg:"het grondwater", src:"groundwater", pos:"noun", gender:"n",
     note:"Compound: grond (ground) + water.\nWater stored underground in soil and rock.",
     example:"A: Het grondwater staat hoog in Nederland.\nB: Omdat het zo vlak is?\nA: Ja, en door de vele regenval.\nB: Daarom hebben we drainagesystemen nodig.",
     exampleSrc:"A: The groundwater level is high in the Netherlands.\nB: Because it is so flat?\nA: Yes, and because of the heavy rainfall.\nB: That is why we need drainage systems.",
     funFact:"Dutch water management is world-renowned. The country exports water engineering expertise to countries facing flooding worldwide."},

    {type:"teach", trg:"het gewas", src:"the crop, the vegetation", pos:"noun", gender:"n",
     note:"From 'wassen' (to grow). What grows from the earth.\nUsed for agricultural produce.",
     example:"A: Het gewas is beschadigd door de storm.\nB: Welk gewas?\nA: De aardappelen, het hele veld is verwoest.\nB: Dat is een groot verlies voor de boer.",
     exampleSrc:"A: The crop has been damaged by the storm.\nB: Which crop?\nA: The potatoes, the entire field is destroyed.\nB: That is a big loss for the farmer.",
     funFact:"The Netherlands is the world's second-largest food exporter. Potatoes, onions, and flower bulbs are among the main crops."},

    {type:"fb",
     s:"De {1} op de Noordpool smelt door klimaatverandering.",
     a:["ijskap"],
     opts:["ijskap","ijskast","ijsberg","ijsbaan"],
     hint:"The frozen layer covering the polar region. Compound of 'ijs' (ice) and 'kap' (cap).",
     sSrc:"The {1} on the North Pole is melting due to climate change."},

    {type:"teach", trg:"het Germaans", src:"Germanic (language family)", pos:"noun", gender:null,
     note:"From Latin 'Germanus'.\nThe language family that includes Dutch, German, English, and Scandinavian languages.",
     example:"A: Nederlands is een Germaanse taal.\nB: Net als Duits en Engels.\nA: En ook de Scandinavische talen.\nB: Ze hebben allemaal dezelfde oorsprong.",
     exampleSrc:"A: Dutch is a Germanic language.\nB: Just like German and English.\nA: And also the Scandinavian languages.\nB: They all have the same origin.",
     funFact:"Dutch sits right between German and English in the Germanic family tree. English speakers can recognize many Dutch words, and vice versa."},

    {type:"teach", trg:"dossen", src:"to dress up, to get dressed (informal)", pos:"verb", gender:null,
     note:"Informal, slightly old-fashioned verb.\n'Zich opdossen' means to dress up fancy.",
     example:"A: Ze had zich helemaal opgedost voor het feest.\nB: Wat had ze aan?\nA: Een prachtige jurk en hoge hakken.\nB: Ze zag er fantastisch uit.",
     exampleSrc:"A: She had completely dressed up for the party.\nB: What was she wearing?\nA: A beautiful dress and high heels.\nB: She looked fantastic.",
     funFact:"'Zich opdossen' implies putting in extra effort. The Dutch normally dress casually, so 'opgedost' means noticeably more fancy than usual."},

    {type:"mc",
     q:"Welke taalfamilie hoort Nederlands bij?",
     opts:["De Keltische taalfamilie","De Germaanse taalfamilie","De Romaanse taalfamilie","De Slavische taalfamilie"],
     ans:"De Germaanse taalfamilie",
     hint:"Dutch shares its family with German, English, and Scandinavian languages. Named after the ancient Germanic tribes."},

    {type:"match", pairs:[
      {trg:"ijskap", src:"ice cap"},
      {trg:"grondwater", src:"groundwater"},
      {trg:"gewas", src:"crop"},
      {trg:"cybercriminaliteit", src:"cybercrime"}
    ]},

    {type:"fb",
     s:"Het {1} staat erg hoog in dit deel van Nederland.",
     a:["grondwater"],
     opts:["grondwater","gewas","grondrecht","groepsverband"],
     hint:"Water stored in the soil underground. Very relevant in a flat, low-lying country like the Netherlands.",
     sSrc:"The {1} level is very high in this part of the Netherlands."},

    {type:"mc",
     q:"Wat betekent 'zich opdossen'?",
     opts:["Zich wassen","Zich uitkleden","Zich mooi aankleden voor een gelegenheid","Zich verstoppen"],
     ans:"Zich mooi aankleden voor een gelegenheid",
     hint:"An informal verb about putting on fancy clothes. Adding 'op-' intensifies the meaning."}
  ]
};
export default LESSON_17;
