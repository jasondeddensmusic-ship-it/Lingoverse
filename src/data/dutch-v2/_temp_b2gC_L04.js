// L04: Koloniale Geschiedenis — Colonial History and Trade
const LESSON_4 = {
  id:"nlv2_b2gC_l4", title:"Koloniale Geschiedenis", icon:"\u{1F30F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Colonial History and Trade",
     desc:"The Netherlands has a complex colonial past. Learn the vocabulary needed to discuss trade history, colonialism, and its lasting impact on Dutch society.",
     goals:["Master 12 history and trade terms","Discuss colonial history in Dutch","Understand vocabulary from Dutch news and debates"]},

    {type:"teach", trg:"het kolonialisme", src:"colonialism", pos:"noun", gender:"n",
     note:"Neuter (het). From 'kolonie' (colony).\n'Het Nederlandse kolonialisme' = Dutch colonialism.",
     example:"A: Het kolonialisme heeft diepe sporen nagelaten.\nB: Ja, in heel veel landen.\nA: Ook in de Nederlandse cultuur.\nB: Dat debat is nu heel actueel.",
     exampleSrc:"A: Colonialism has left deep traces.\nB: Yes, in very many countries.\nA: Also in Dutch culture.\nB: That debate is very current now.",
     funFact:"The Dutch colonial empire once spanned from Indonesia to Suriname, the Caribbean, South Africa, and parts of Brazil."},

    {type:"teach", trg:"de kolonisatie", src:"colonisation", pos:"noun", gender:"c",
     note:"Common gender (de). The process of establishing colonies.\n'Koloniseren' = to colonise.",
     example:"A: De kolonisatie begon in de zeventiende eeuw.\nB: Met de VOC, toch?\nA: Ja, de Verenigde Oost-Indische Compagnie.\nB: Het eerste multinationale bedrijf ter wereld.",
     exampleSrc:"A: Colonisation began in the seventeenth century.\nB: With the VOC, right?\nA: Yes, the Dutch East India Company.\nB: The first multinational company in the world.",
     funFact:"The VOC (Dutch East India Company) was founded in 1602 and is considered the first publicly traded company in history."},

    {type:"teach", trg:"de handelspost", src:"the trading post", pos:"noun", gender:"c",
     note:"Common gender (de). Handel (trade) + post (post/station).\nPlural: 'handelsposten'.",
     example:"A: De VOC had overal handelsposten.\nB: In Azie, Afrika, en Zuid-Amerika.\nA: Sommige zijn nu musea.\nB: Zoals in Kaapstad en Jakarta.",
     exampleSrc:"A: The VOC had trading posts everywhere.\nB: In Asia, Africa, and South America.\nA: Some are now museums.\nB: Like in Cape Town and Jakarta.",
     funFact:"Dutch trading posts stretched from Dejima in Japan to Manhattan in New York. 'Nieuw-Amsterdam' became New York City."},

    {type:"teach", trg:"de kaper", src:"the privateer / pirate", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kapen' (to capture/hijack).\n'Een kaperbrief' = a letter of marque.",
     example:"A: Piet Hein was een beroemde kaper.\nB: Hij veroverde de Spaanse Zilvervloot!\nA: Dat was in 1628.\nB: Er is zelfs een kinderlied over hem.",
     exampleSrc:"A: Piet Hein was a famous privateer.\nB: He captured the Spanish Silver Fleet!\nA: That was in 1628.\nB: There's even a children's song about him.",
     funFact:"Piet Hein's capture of the Spanish Silver Fleet in 1628 was worth 11.5 million guilders, enough to fund the Dutch army for months."},

    {type:"mc",
     q:"Wat was de VOC?",
     opts:["Een politieke partij","Een handelscompagnie","Een leger","Een universiteit"],
     ans:"Een handelscompagnie",
     hint:"Verenigde Oost-Indische Compagnie. A company that traded spices and goods from the East."},

    {type:"teach", trg:"de kompas", src:"the compass", pos:"noun", gender:"n",
     note:"Neuter (het kompas). Essential for navigation.\n'Het morele kompas' = moral compass (figurative).",
     example:"A: Zonder kompas verdwaal je op zee.\nB: Tegenwoordig gebruiken we GPS.\nA: Maar een kompas heeft geen batterij nodig.\nB: Goed punt, ik neem er altijd een mee.",
     exampleSrc:"A: Without a compass you get lost at sea.\nB: Nowadays we use GPS.\nA: But a compass doesn't need a battery.\nB: Good point, I always bring one along.",
     funFact:"The Dutch were master navigators. The word 'kompas' entered Dutch via Italian 'compasso' from Latin 'compassus' (circle)."},

    {type:"teach", trg:"de kruidnagel", src:"the clove", pos:"noun", gender:"c",
     note:"Common gender (de). Kruid (herb/spice) + nagel (nail).\nNamed for its nail-like shape.",
     example:"A: Kruidnagel komt oorspronkelijk uit Indonesie.\nB: Ja, van de Molukken.\nA: De VOC handelde er veel in.\nB: Het was kostbaarder dan goud!",
     exampleSrc:"A: Cloves originally come from Indonesia.\nB: Yes, from the Moluccas.\nA: The VOC traded heavily in them.\nB: They were more precious than gold!",
     funFact:"Cloves from the Moluccas (Spice Islands) were one of the main reasons the Dutch established their colonial empire in Indonesia."},

    {type:"teach", trg:"de koopmansstad", src:"the merchant city / trading city", pos:"noun", gender:"c",
     note:"Common gender (de). Koopman (merchant) + stad (city).\nAmsterdam is the archetypal koopmansstad.",
     example:"A: Amsterdam was een echte koopmansstad.\nB: Met de grachtenpanden van rijke handelaren.\nA: Die huizen zijn nu miljoenen waard.\nB: De kooplieden van toen konden dat niet voorzien!",
     exampleSrc:"A: Amsterdam was a true merchant city.\nB: With the canal houses of rich traders.\nA: Those houses are now worth millions.\nB: The merchants of that time couldn't have foreseen that!",
     funFact:"Amsterdam's canal belt was built in the 17th century by wealthy merchants. It is now a UNESCO World Heritage Site."},

    {type:"fb",
     s:"Piet Hein was een beroemde Nederlandse {1}.",
     a:["kaper"],
     opts:["kaper","koopman","kompas","kolonist"],
     hint:"Someone who captured enemy ships with government permission. A legal pirate.",
     sSrc:"Piet Hein was a famous Dutch {1}."},

    {type:"teach", trg:"de koffieplantage", src:"the coffee plantation", pos:"noun", gender:"c",
     note:"Common gender (de). Koffie (coffee) + plantage (plantation).\n'Plantage' comes from French.",
     example:"A: Er waren veel koffieplantages in Indonesie.\nB: Ja, de Nederlanders begonnen met koffieteelt.\nA: Dat is een donker hoofdstuk.\nB: Dwangarbeid op de plantages was verschrikkelijk.",
     exampleSrc:"A: There were many coffee plantations in Indonesia.\nB: Yes, the Dutch started coffee cultivation.\nA: That is a dark chapter.\nB: Forced labour on the plantations was terrible.",
     funFact:"The Dutch introduced coffee cultivation to Java in the 1700s. 'A cup of Java' in English literally refers to Indonesian coffee."},

    {type:"teach", trg:"de kompaan", src:"the companion / accomplice", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'compagnon'.\nCan be positive (buddy) or negative (accomplice).",
     example:"A: De dief had een kompaan.\nB: Wie was dat dan?\nA: Zijn buurman, bleek later.\nB: Ze zijn allebei opgepakt.",
     exampleSrc:"A: The thief had an accomplice.\nB: Who was that then?\nA: His neighbour, it turned out later.\nB: They were both arrested.",
     funFact:"'Kompaan' shares its root with English 'companion' and 'company'. Originally: someone you share bread with (Latin 'com + panis')."},

    {type:"teach", trg:"het korps", src:"the corps / police force", pos:"noun", gender:"n",
     note:"Neuter (het). From French 'corps'.\n'Het politiekorps' = the police force.",
     example:"A: Hij werkt bij het politiekorps in Den Haag.\nB: Al lang?\nA: Ja, meer dan twintig jaar.\nB: Dat is een lange carriere bij het korps.",
     exampleSrc:"A: He works at the police force in The Hague.\nB: For a long time?\nA: Yes, more than twenty years.\nB: That's a long career at the corps.",
     funFact:"The Dutch national police was unified into one 'korps' in 2013, replacing 25 separate regional police forces."},

    {type:"mc",
     q:"'Kompaan' kan zowel positief als negatief zijn. In welke zin is het negatief?",
     opts:["Hij is mijn trouwe kompaan","De dief had een kompaan","Zij zijn al jaren kompanen","We zijn kompanen op reis"],
     ans:"De dief had een kompaan",
     hint:"When used with criminals, the word takes on the meaning of 'accomplice' rather than 'friend'."},

    {type:"fb",
     s:"Amsterdam was in de Gouden Eeuw een echte {1}.",
     a:["koopmansstad"],
     opts:["koopmansstad","handelspost","koffieplantage","kolonie"],
     hint:"A city whose identity was built around merchants and trade.",
     sSrc:"Amsterdam was a true {1} in the Golden Age."},

    {type:"match", pairs:[
      {trg:"kolonialisme", src:"colonialism"},
      {trg:"kolonisatie", src:"colonisation"},
      {trg:"handelspost", src:"trading post"},
      {trg:"kaper", src:"privateer"}
    ]},

    {type:"mc",
     q:"De kruidnagel dankt zijn naam aan:",
     opts:["De kleur van de bloem","De smaak van het kruid","De vorm die lijkt op een nagel","De plaats waar het groeit"],
     ans:"De vorm die lijkt op een nagel",
     hint:"Kruid (spice) + n... (nail). The dried bud looks like a small nail."},

    {type:"fb",
     s:"Het {1} van de politie werkt nauw samen met de gemeente.",
     a:["korps"],
     opts:["korps","kompas","kompaan","kolonialisme"],
     hint:"The organised body or force of police officers.",
     sSrc:"The police {1} works closely together with the municipality."},

    {type:"match", pairs:[
      {trg:"kompas", src:"compass"},
      {trg:"koffieplantage", src:"coffee plantation"},
      {trg:"koopmansstad", src:"merchant city"},
      {trg:"korps", src:"corps / police force"}
    ]},

    {type:"mc",
     q:"Welk woord komt van het Latijn 'com + panis' (samen + brood)?",
     opts:["Kompas","Kompaan","Korps","Kolonist"],
     ans:"Kompaan",
     hint:"Someone you share bread with. Think of the English word 'companion'."}
  ]
};
export default LESSON_4;
