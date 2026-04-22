// L04: Koffie en Koloniale Geschiedenis. Coffee and Colonial History
const LESSON_4 = {
  id:"nlv2_b2gD_l04", title:"Koffie en Koloniale Geschiedenis", icon:"\u{2615}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Coffee and Colonial History",
     desc:"The Netherlands has deep ties to coffee, spices, and colonial trade. Build vocabulary to discuss this complex history with nuance and cultural awareness.",
     goals:["Master 10 terms about coffee and colonial history","Discuss trade and historical legacy","Understand compound words about plantations and trade"]},

    {type:"teach", trg:"het koffiehuis", src:"the coffeehouse", pos:"noun", gender:"n",
     note:"Neuter (het). Koffie (coffee) + huis (house).\nA traditional place for drinking coffee, not a 'coffeeshop' (which sells cannabis).",
     example:"A: Zullen we naar het koffiehuis gaan?\nB: Ja, ik wil een cappuccino.\nA: Dit koffiehuis heeft ook heerlijke taart.\nB: Perfect, ik trakteer!",
     exampleSrc:"A: Shall we go to the coffeehouse?\nB: Yes, I want a cappuccino.\nA: This coffeehouse also has delicious cake.\nB: Perfect, my treat!",
     funFact:"In the Netherlands, a 'koffiehuis' serves coffee, but a 'coffeeshop' sells cannabis. This distinction confuses many tourists."},

    {type:"teach", trg:"de koffieplantage", src:"the coffee plantation", pos:"noun", gender:"c",
     note:"Common gender (de). Koffie (coffee) + plantage (plantation).\nHistorically linked to Dutch colonial trade.",
     example:"A: De VOC had koffieplantages in Indonesie.\nB: Dat was een donker hoofdstuk.\nA: De arbeiders werden uitgebuit.\nB: Het is belangrijk om dat te erkennen.",
     exampleSrc:"A: The VOC had coffee plantations in Indonesia.\nB: That was a dark chapter.\nA: The workers were exploited.\nB: It's important to acknowledge that.",
     funFact:"The Dutch East India Company (VOC) introduced coffee cultivation to Java around 1700. 'Java' became synonymous with coffee in English because of this."},

    {type:"teach", trg:"het kolonialisme", src:"colonialism", pos:"noun", gender:"n",
     note:"Neuter (het). From koloniaal (colonial) + -isme.\n'Het koloniale verleden' = the colonial past.",
     example:"A: Het kolonialisme heeft diepe sporen nagelaten.\nB: In welke landen?\nA: Indonesie, Suriname, de Antillen.\nB: De gevolgen zijn nog steeds voelbaar.",
     exampleSrc:"A: Colonialism has left deep traces.\nB: In which countries?\nA: Indonesia, Suriname, the Antilles.\nB: The consequences are still felt today.",
     funFact:"The Netherlands controlled the world's most valuable colonial territories. The VOC was arguably the first multinational corporation in history."},

    {type:"teach", trg:"de kolonisatie", src:"colonisation", pos:"noun", gender:"c",
     note:"Common gender (de). From koloniseren (to colonise).\n'De kolonisatie van de Oost' = the colonisation of the East Indies.",
     example:"A: De kolonisatie begon in de zestiende eeuw.\nB: Wie ging er als eerste?\nA: Portugese en Spaanse handelaren.\nB: Later volgden de Nederlanders.",
     exampleSrc:"A: Colonisation began in the sixteenth century.\nB: Who went first?\nA: Portuguese and Spanish traders.\nB: Later the Dutch followed.",
     funFact:"The Dutch colonised parts of Brazil, South Africa, Sri Lanka, Taiwan, and many other places. Fort Zeelandia in Taiwan still bears its Dutch name."},

    {type:"mc",
     q:"Wat is het verschil tussen een 'koffiehuis' en een 'coffeeshop' in Nederland?",
     opts:["Een koffiehuis serveert koffie, een coffeeshop verkoopt cannabis","Ze zijn hetzelfde","Een coffeeshop is duurder","Een koffiehuis is alleen voor toeristen"],
     ans:"Een koffiehuis serveert koffie, een coffeeshop verkoopt cannabis",
     hint:"This is a famous Dutch distinction that confuses many visitors. One serves beverages, the other sells something else entirely."},

    {type:"teach", trg:"de handelspost", src:"the trading post", pos:"noun", gender:"c",
     note:"Common gender (de). Handel (trade) + post (post/station).\nPlural: handelsposten. Colonial outposts for commerce.",
     example:"A: De VOC had handelsposten in heel Azie.\nB: Hoeveel waren het er?\nA: Honderden, van Japan tot India.\nB: Het was een enorm netwerk.",
     exampleSrc:"A: The VOC had trading posts throughout Asia.\nB: How many were there?\nA: Hundreds, from Japan to India.\nB: It was an enormous network.",
     funFact:"The Dutch trading post on Dejima, a tiny artificial island in Nagasaki, was Japan's only window to the Western world for over 200 years."},

    {type:"teach", trg:"de kruidnagel", src:"the clove", pos:"noun", gender:"c",
     note:"Common gender (de). Kruid (herb/spice) + nagel (nail).\nNamed for its nail-like shape.",
     example:"A: Doe je kruidnagel in de stoofpot?\nB: Ja, twee of drie stuks.\nA: Het geeft een warme smaak.\nB: Typisch voor de Indonesische keuken.",
     exampleSrc:"A: Do you put cloves in the stew?\nB: Yes, two or three pieces.\nA: It gives a warm flavour.\nB: Typical of Indonesian cuisine.",
     funFact:"The Dutch fought brutal wars over the Spice Islands (Moluccas) to control the clove trade. Cloves were once worth more than gold by weight."},

    {type:"teach", trg:"de koopmansstad", src:"the merchant city / trading city", pos:"noun", gender:"c",
     note:"Common gender (de). Koopman (merchant) + stad (city).\n'Amsterdam was de grootste koopmansstad' = Amsterdam was the greatest trading city.",
     example:"A: Amsterdam was ooit de rijkste koopmansstad ter wereld.\nB: Door de specerijenhandel?\nA: Ja, en de scheepvaart.\nB: De grachten zijn gebouwd met dat geld.",
     exampleSrc:"A: Amsterdam was once the richest trading city in the world.\nB: Because of the spice trade?\nA: Yes, and the shipping industry.\nB: The canals were built with that money.",
     funFact:"Amsterdam's famous canal ring ('grachtengordel') was financed by Golden Age trade profits. It's now a UNESCO World Heritage Site."},

    {type:"fb",
     s:"De VOC had {1} in heel Azie voor de specerijenhandel.",
     a:["handelsposten"],
     opts:["handelsposten","koffieplantages","kruidnagels","koopmansstad"],
     hint:"Outposts established for commercial trade across a wide territory. Plural of trading + post.",
     sSrc:"The VOC had {1} throughout Asia for the spice trade."},

    {type:"teach", trg:"het kompas", src:"the compass", pos:"noun", gender:"n",
     note:"Neuter (het). From Italian 'compasso'.\n'Het morele kompas' = the moral compass (figurative).",
     example:"A: Heb je een kompas bij je?\nB: Nee, ik gebruik mijn telefoon.\nA: Vroeger kon je niet zonder.\nB: Zeelieden waren er afhankelijk van.",
     exampleSrc:"A: Do you have a compass with you?\nB: No, I use my phone.\nA: In the past you couldn't do without one.\nB: Sailors depended on them.",
     funFact:"The Dutch were master navigators. Their Golden Age maps were the most accurate in the world, and the compass was essential for VOC voyages."},

    {type:"teach", trg:"de kaper", src:"the privateer / pirate", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kapen' (to hijack/seize).\n'Kapers op de kust' = danger approaching (idiom).",
     example:"A: Piet Hein was een beroemde kaper.\nB: Was hij geen zeeheld?\nA: Dat hangt van je perspectief af.\nB: Hij veroverde de Zilvervloot.",
     exampleSrc:"A: Piet Hein was a famous privateer.\nB: Wasn't he a naval hero?\nA: That depends on your perspective.\nB: He captured the Silver Fleet.",
     funFact:"The expression 'kapers op de kust' (pirates on the coast) means 'danger is approaching'. It dates back to when piracy was a genuine threat to Dutch merchant ships."},

    {type:"match", pairs:[
      {trg:"koffieplantage", src:"coffee plantation"},
      {trg:"handelspost", src:"trading post"},
      {trg:"kruidnagel", src:"clove"},
      {trg:"kompas", src:"compass"},
      {trg:"kaper", src:"privateer"}
    ]},

    {type:"mc",
     q:"Waarom werd Amsterdam de rijkste koopmansstad ter wereld?",
     opts:["Door de visserij","Door de specerijenhandel en scheepvaart","Door de landbouw","Door de textielindustrie"],
     ans:"Door de specerijenhandel en scheepvaart",
     hint:"Amsterdam's Golden Age wealth came from maritime trade, especially in exotic goods from Asia."},

    {type:"fb",
     s:"De {1} werden vroeger per schip van de Molukken naar Europa vervoerd.",
     a:["kruidnagels"],
     opts:["kruidnagels","handelsposten","koffieplantages","kompassen"],
     hint:"A nail-shaped spice from the Moluccas that was worth more than gold. Compound: spice + nail.",
     sSrc:"The {1} were transported by ship from the Moluccas to Europe in the past."}
  ]
};
export default LESSON_4;
