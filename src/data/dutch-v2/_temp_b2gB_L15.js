// Dutch B2 gapB Lesson 15 — Handel en Ondernemen
// Trade, commerce, and entrepreneurship vocabulary

const LESSON_15 = {id:"nlv2_b2gB_l15", title:"Handel en Ondernemen", icon:"\u{1F4B0}", xp:25, board:true, steps:[
{type:"intro", title:"Handel en Ondernemen",
 desc:"The Netherlands is a trading nation at heart. From the Golden Age to modern logistics, learn the vocabulary of commerce, trade ethics, and business culture.",
 goals:["8 trade and business nouns","Discuss Dutch commercial heritage","Navigate entrepreneurship vocabulary"]},

{type:"teach", trg:"de koopmansstad", src:"merchant city / trading city", pos:"noun", gender:"c",
 note:"Koopmans (merchant's) + stad.\nCities built on trade. Amsterdam is THE koopmansstad.",
 example:"A: Amsterdam is van oorsprong een koopmansstad.\nB: Ja, de handel zit in het DNA.\nA: De grachten zijn gebouwd voor het transport.\nB: Alles draaide om de koopman.",
 exampleSrc:"A: Amsterdam is originally a merchant city.\nB: Yes, trade is in its DNA.\nA: The canals were built for transport.\nB: Everything revolved around the merchant.",
 funFact:"Amsterdam's canal ring was designed in the 1600s as a logistics network for merchants, with warehouses built into the canal houses."},

{type:"teach", trg:"de koopmansmoraal", src:"merchant morality / trader ethics", pos:"noun", gender:"c",
 note:"Koopmans + moraal (morality).\nThe ethical framework of Dutch traders, historically flexible.",
 example:"A: De koopmansmoraal was niet altijd zuiver.\nB: Nee, winst ging soms boven alles.\nA: De slavenhandel is daar een voorbeeld van.\nB: Een pijnlijk hoofdstuk.",
 exampleSrc:"A: Merchant morality wasn't always pure.\nB: No, profit sometimes came above all.\nA: The slave trade is an example of that.\nB: A painful chapter.",
 funFact:"The Dutch saying 'de koopmansgeest' (merchant spirit) can be positive (entrepreneurial) or negative (putting profit before principles)."},

{type:"teach", trg:"het handelscontact", src:"trade contact / business connection", pos:"noun", gender:"n",
 note:"Handels + contact.\n'Contacten onderhouden' = to maintain contacts.",
 example:"A: Heb je handelscontacten in Azie?\nB: Ja, vooral in Japan en Zuid-Korea.\nA: Dat kan nuttig zijn voor ons project.\nB: Ik stel je graag voor.",
 exampleSrc:"A: Do you have trade contacts in Asia?\nB: Yes, especially in Japan and South Korea.\nA: That could be useful for our project.\nB: I'd be happy to introduce you.",
 funFact:"Dutch traders established some of the earliest European trade contacts with Japan, China, and Indonesia in the 1600s."},

{type:"teach", trg:"de jackpot", src:"jackpot", pos:"noun", gender:"c",
 note:"English loanword. 'De jackpot winnen' = to hit the jackpot.\nAlso used figuratively.",
 example:"A: Heb je de jackpot gewonnen?\nB: Nee, maar ik had drie goede nummers.\nA: Dat is toch al mooi.\nB: Ja, beter dan niets.",
 exampleSrc:"A: Did you win the jackpot?\nB: No, but I had three correct numbers.\nA: That's already nice.\nB: Yes, better than nothing.",
 funFact:"The Dutch Staatsloterij (State Lottery) dates back to 1726, making it one of the oldest running lotteries in the world."},

{type:"teach", trg:"de jukebox", src:"jukebox", pos:"noun", gender:"c",
 note:"English loanword. A coin-operated music machine.\nNostalgic item from the 1950s-80s.",
 example:"A: Er staat een oude jukebox in het cafe.\nB: Echt? Doet hij het nog?\nA: Ja! Gooi er een euro in.\nB: Welk nummer zal ik kiezen?",
 exampleSrc:"A: There's an old jukebox in the cafe.\nB: Really? Does it still work?\nA: Yes! Put a euro in.\nB: Which song should I choose?",
 funFact:"Dutch 'bruine kroegen' (brown cafes, named for their tobacco-stained walls) often still have working jukeboxes."},

{type:"teach", trg:"de klerk", src:"clerk", pos:"noun", gender:"c",
 note:"From French/English. An office worker or administrative clerk.\n'De kantoorklerk' = office clerk.",
 example:"A: Hij werkt als klerk bij de gemeente.\nB: Wat doet hij precies?\nA: Administratie en archivering.\nB: Dat klinkt heel gestructureerd.",
 exampleSrc:"A: He works as a clerk at the municipality.\nB: What does he do exactly?\nA: Administration and archiving.\nB: That sounds very structured.",
 funFact:"The word 'klerk' has the same Latin root as 'cleric'. Medieval clerks were often church-trained men who could read and write."},

{type:"teach", trg:"de kroonprins", src:"crown prince", pos:"noun", gender:"c",
 note:"Kroon (crown) + prins (prince).\n'De kroonprinses' = crown princess.",
 example:"A: De kroonprins woonde de ceremonie bij.\nB: Wordt hij de volgende koning?\nA: Ja, als zijn vader aftreedt.\nB: Hij is al goed voorbereid.",
 exampleSrc:"A: The crown prince attended the ceremony.\nB: Will he be the next king?\nA: Yes, when his father steps down.\nB: He's already well prepared.",
 funFact:"The Netherlands is a constitutional monarchy. Princess Amalia is the current crown princess and will be the first Queen in three generations."},

{type:"teach", trg:"de kompaan", src:"companion / accomplice", pos:"noun", gender:"c",
 note:"From French 'compagnon'. Can be positive (friend) or negative (accomplice).\n'Bondgenoot' is a more neutral synonym.",
 example:"A: Hij en zijn kompaan werden gepakt.\nB: Wat hadden ze gedaan?\nA: Inbraak in een juwelier.\nB: Niet slim, overal hangen camera's.",
 exampleSrc:"A: He and his accomplice were caught.\nB: What had they done?\nA: Burglary at a jeweler.\nB: Not smart, there are cameras everywhere.",
 funFact:"'Kompaan' has shifted from its positive French origin (companion for sharing bread) to a more negative connotation in modern Dutch."},

{type:"mc", q:"'De koopmansmoraal' verwijst naar:",
 opts:["The price of goods","The ethical standards of merchants","The quality of products","The speed of delivery"],
 ans:"The ethical standards of merchants",
 hint:"The moral framework by which traders operated, historically not always admirable"},

{type:"fb", s:"Amsterdam is van oorsprong een echte {1}.",
 a:["koopmansstad"], opts:["koopmansstad","kennisstad","industriestad","kroonprins"],
 hint:"A city built on trade and commerce, with canals as transport routes",
 sSrc:"Amsterdam is originally a real {1}."},

{type:"mc", q:"'De kompaan' kan zowel ... als ... betekenen.",
 opts:["Friend and enemy","Companion and accomplice","King and servant","Buyer and seller"],
 ans:"Companion and accomplice",
 hint:"Originally positive (French c...), now often used for partners in crime"},

{type:"fb", s:"Heb je {1} in het buitenland?",
 a:["handelscontacten"], opts:["handelscontacten","jackpots","jukeboxen","klerken"],
 hint:"Business connections or trade relationships in other countries",
 sSrc:"Do you have {1} abroad?"},

{type:"match", pairs:[
 {trg:"de koopmansstad", src:"merchant city"},
 {trg:"de koopmansmoraal", src:"merchant morality"},
 {trg:"het handelscontact", src:"trade contact"},
 {trg:"de jackpot", src:"jackpot"}
]},

{type:"mc", q:"De Nederlandse Staatsloterij bestaat sinds:",
 opts:["1950","1850","1726","2001"],
 ans:"1726",
 hint:"One of the oldest running lotteries in the world, predating the French Revolution"},

{type:"fb", s:"De {1} woonde de ceremonie bij in Den Haag.",
 a:["kroonprins"], opts:["kroonprins","kompaan","klerk","kaper"],
 hint:"The royal heir to the throne",
 sSrc:"The {1} attended the ceremony in The Hague."},

{type:"match", pairs:[
 {trg:"de jukebox", src:"jukebox"},
 {trg:"de klerk", src:"clerk"},
 {trg:"de kroonprins", src:"crown prince"},
 {trg:"de kompaan", src:"companion / accomplice"}
]}
]};
export default LESSON_15;
