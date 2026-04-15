// Dutch B2 gapB Lesson 07 — Kerk en Geloof
// Church, religion, and spiritual vocabulary

const LESSON_7 = {id:"nlv2_b2gB_l7", title:"Kerk en Geloof", icon:"\u{26EA}", xp:25, board:true, steps:[
{type:"intro", title:"Kerk en Geloof",
 desc:"Religion shaped Dutch history, from the Reformation to pillarization. Even in secular modern Netherlands, church vocabulary appears in architecture, traditions, and daily expressions.",
 goals:["8 church and religion nouns and adjectives","Discuss religious heritage in Dutch","Understand church-related compound words"]},

{type:"teach", trg:"de kerkdienst", src:"church service", pos:"noun", gender:"c",
 note:"Kerk (church) + dienst (service).\n'Naar de kerk gaan' = to go to church.",
 example:"A: Ga je zondag naar de kerkdienst?\nB: Nee, ik ga niet meer naar de kerk.\nA: Veel Nederlanders zijn gestopt.\nB: Maar de gebouwen zijn prachtig.",
 exampleSrc:"A: Are you going to church on Sunday?\nB: No, I don't go to church anymore.\nA: Many Dutch people have stopped.\nB: But the buildings are beautiful.",
 funFact:"The Netherlands went from over 80% churchgoing in the 1950s to about 20% today, one of the fastest secularization rates in Europe."},

{type:"teach", trg:"kerkelijk", src:"ecclesiastical / church-related", pos:"adj", gender:null,
 note:"Adjective form of 'kerk'.\n'Kerkelijk huwelijk' = church wedding.",
 example:"A: Was het een kerkelijk huwelijk?\nB: Nee, alleen op het gemeentehuis.\nA: Dat is tegenwoordig heel gewoon.\nB: Ja, maar mijn oma vond het jammer.",
 exampleSrc:"A: Was it a church wedding?\nB: No, only at city hall.\nA: That's very common nowadays.\nB: Yes, but my grandma was disappointed.",
 funFact:"The Dutch were the first country in the world to legalize same-sex marriage in 2001, reflecting their secular values."},

{type:"teach", trg:"het kerkgenootschap", src:"religious denomination", pos:"noun", gender:"n",
 note:"Kerk + genootschap (society/association).\nThe Netherlands has many denominations.",
 example:"A: Tot welk kerkgenootschap behoort deze kerk?\nB: Dit is gereformeerd.\nA: En de kerk aan het plein?\nB: Die is rooms-katholiek.",
 exampleSrc:"A: Which denomination does this church belong to?\nB: This is Reformed.\nA: And the church on the square?\nB: That one is Roman Catholic.",
 funFact:"Dutch 'verzuiling' (pillarization) divided society into Protestant, Catholic, socialist, and liberal pillars, each with their own schools, newspapers, and hospitals."},

{type:"teach", trg:"de kerkruimte", src:"church interior / nave", pos:"noun", gender:"c",
 note:"Kerk + ruimte (space).\nThe physical interior space of a church building.",
 example:"A: De kerkruimte is indrukwekkend.\nB: Kijk eens naar die gewelven.\nA: Wanneer is dit gebouwd?\nB: In de vijftiende eeuw, geloof ik.",
 exampleSrc:"A: The church interior is impressive.\nB: Look at those vaults.\nA: When was this built?\nB: In the fifteenth century, I believe.",
 funFact:"Many Dutch churches have been repurposed as bookstores, restaurants, and apartments, creating unique architectural experiences."},

{type:"teach", trg:"de geloofsgenoot", src:"fellow believer / co-religionist", pos:"noun", gender:"c",
 note:"Geloofs (faith) + genoot (companion).\n'Het geloof' = faith, belief.",
 example:"A: Hij zocht steun bij zijn geloofsgenoten.\nB: Dat is begrijpelijk in moeilijke tijden.\nA: Gemeenschap is belangrijk.\nB: Zeker, ongeacht je geloof.",
 exampleSrc:"A: He sought support from his fellow believers.\nB: That's understandable in difficult times.\nA: Community is important.\nB: Certainly, regardless of your faith.",
 funFact:"The Netherlands is home to communities of every major world religion, including one of Europe's oldest Jewish communities (since the 1500s)."},

{type:"teach", trg:"de kerktaal", src:"church language / liturgical language", pos:"noun", gender:"c",
 note:"Kerk + taal (language).\nThe formal language used in religious services.",
 example:"A: De kerktaal is heel anders dan spreektaal.\nB: Klopt, veel ouderwetse woorden.\nA: 'Gij' in plaats van 'je', bijvoorbeeld.\nB: Dat klinkt zo plechtig.",
 exampleSrc:"A: Church language is very different from spoken language.\nB: True, lots of old-fashioned words.\nA: 'Gij' instead of 'je', for example.\nB: That sounds so solemn.",
 funFact:"The Statenvertaling (1637 Bible translation) standardized Dutch spelling and grammar, similar to the King James Bible's influence on English."},

{type:"teach", trg:"het kiesrecht", src:"suffrage / right to vote", pos:"noun", gender:"n",
 note:"Kies (choose/elect) + recht (right).\n'Algemeen kiesrecht' = universal suffrage.",
 example:"A: Wanneer kregen vrouwen kiesrecht?\nB: In 1919, actief stemrecht.\nA: Dat is eigenlijk nog niet zo lang geleden.\nB: Nee, en het was een zware strijd.",
 exampleSrc:"A: When did women get the right to vote?\nB: In 1919, active voting rights.\nA: That's actually not that long ago.\nB: No, and it was a tough fight.",
 funFact:"Aletta Jacobs was the first Dutch woman to complete a university degree (1871) and a key leader in the Dutch women's suffrage movement."},

{type:"teach", trg:"het inburgeringsbeleid", src:"civic integration policy", pos:"noun", gender:"n",
 note:"Inburgering (civic integration) + beleid (policy).\nPolicy for integrating newcomers.",
 example:"A: Het inburgeringsbeleid is aangepast.\nB: Wat is er veranderd?\nA: Nieuwkomers moeten sneller de taal leren.\nB: Dat lijkt me logisch.",
 exampleSrc:"A: The civic integration policy has been adjusted.\nB: What changed?\nA: Newcomers must learn the language faster.\nB: That seems logical to me.",
 funFact:"The Netherlands was one of the first countries to require a civic integration exam (inburgeringsexamen) for immigrants, starting in 2007."},

{type:"mc", q:"'Kerkelijk' betekent:",
 opts:["Beautiful","Church-related","Ancient","Musical"],
 ans:"Church-related",
 hint:"The adjective form of 'kerk' (church). Describes anything connected to the church."},

{type:"fb", s:"Tot welk {1} behoort deze kerk?",
 a:["kerkgenootschap"], opts:["kerkgenootschap","kerkdienst","kerkruimte","kerktaal"],
 hint:"The religious denomination or organized church community",
 sSrc:"Which {1} does this church belong to?"},

{type:"mc", q:"'De kerktaal' verschilt van de spreektaal door:",
 opts:["It uses more English words","It uses old-fashioned, formal words","It is spoken faster","It uses no vowels"],
 ans:"It uses old-fashioned, formal words",
 hint:"Think 'gij' instead of 'je'. Solemn and archaic vocabulary."},

{type:"fb", s:"Wanneer kregen vrouwen {1} in Nederland?",
 a:["kiesrecht"], opts:["kiesrecht","kerkgenootschap","inburgeringsbeleid","kerkdienst"],
 hint:"The legal right to participate in elections",
 sSrc:"When did women get {1} in the Netherlands?"},

{type:"match", pairs:[
 {trg:"de kerkdienst", src:"church service"},
 {trg:"kerkelijk", src:"church-related"},
 {trg:"het kerkgenootschap", src:"denomination"},
 {trg:"de kerkruimte", src:"church interior"}
]},

{type:"mc", q:"'Verzuiling' divided Dutch society into:",
 opts:["Rich and poor","Religious and political pillars","North and south","Urban and rural"],
 ans:"Religious and political pillars",
 hint:"Protestant, Catholic, socialist, and liberal each had their own institutions"},

{type:"fb", s:"Het {1} is aangepast voor nieuwkomers.",
 a:["inburgeringsbeleid"], opts:["inburgeringsbeleid","kerkgenootschap","kiesrecht","kerktaal"],
 hint:"The government policy about integrating newcomers into society",
 sSrc:"The {1} has been adjusted for newcomers."},

{type:"match", pairs:[
 {trg:"de geloofsgenoot", src:"fellow believer"},
 {trg:"de kerktaal", src:"church language"},
 {trg:"het kiesrecht", src:"right to vote"},
 {trg:"het inburgeringsbeleid", src:"civic integration policy"}
]}
]};
export default LESSON_7;
