// Dutch B2 gapB Lesson 20. Uitdrukkingen en Vaste Verbindingen
// Fixed expressions, collocations, and idiomatic vocabulary

const LESSON_20 = {id:"nlv2_b2gB_l20", title:"Uitdrukkingen en Vaste Verbindingen", icon:"\u{1F4A1}", xp:25, board:true, steps:[
{type:"intro", title:"Uitdrukkingen en Vaste Verbindingen",
 desc:"At B2 level, you need to master fixed expressions and collocations that native speakers use daily. These words appear in specific contexts and fixed phrases.",
 goals:["8 words used in fixed expressions","Master common Dutch collocations","Recognize and use idiomatic vocabulary"]},

{type:"teach", trg:"de krachtterm", src:"swear word / expletive", pos:"noun", gender:"c",
 note:"Kracht (force/power) + term.\nA 'powerful word' used for emphasis. Euphemism for swearing.",
 example:"A: Hij gebruikte een paar flinke krachttermen.\nB: Was hij zo boos?\nA: Ja, hij had het helemaal gehad.\nB: Soms lucht dat op.",
 exampleSrc:"A: He used some strong expletives.\nB: Was he that angry?\nA: Yes, he'd had it.\nB: Sometimes that's cathartic.",
 funFact:"Dutch swear words famously include diseases (kanker, tyfus, pest). Using disease names as expletives is uniquely Dutch and very offensive."},

{type:"teach", trg:"de denkwijs", src:"way of thinking / mindset", pos:"noun", gender:"c",
 note:"Denk (think) + wijs (way/manner).\nSimilar to 'denkwijze'. A person's mental framework.",
 example:"A: Zijn denkwijs is heel anders dan de mijne.\nB: In welk opzicht?\nA: Hij denkt heel praktisch, ik meer creatief.\nB: Dat kan juist een goede combinatie zijn.",
 exampleSrc:"A: His way of thinking is very different from mine.\nB: In what way?\nA: He thinks very practically, I'm more creative.\nB: That can actually be a good combination.",
 funFact:"The Dutch value 'nuchterheid' (sobriety/level-headedness) as a core mindset. Being overly emotional or dramatic is frowned upon."},

{type:"teach", trg:"het gejoel", src:"uproar / raucous cheering", pos:"noun", gender:"n",
 note:"From 'joelen' (to shout joyfully).\nLoud, collective noise. Not always negative.",
 example:"A: Het gejoel was niet te harden.\nB: Wat was er aan de hand?\nA: Het carnaval in Maastricht.\nB: Ah, dan is het normaal!",
 exampleSrc:"A: The uproar was unbearable.\nB: What was going on?\nA: Carnival in Maastricht.\nB: Ah, then it's normal!",
 funFact:"Carnival in the south (Limburg, Brabant) transforms normally quiet cities into three days of continuous noise, music, and celebration."},

{type:"teach", trg:"de kleurenwissel", src:"color change / color shift", pos:"noun", gender:"c",
 note:"Kleuren (colors) + wissel (change/switch).\nUsed for seasons, chameleons, and visual effects.",
 example:"A: De kleurenwissel in de herfst is prachtig.\nB: Ja, de bomen worden goud en rood.\nA: Dit is het mooiste seizoen.\nB: Daar ben ik het helemaal mee eens.",
 exampleSrc:"A: The color change in autumn is beautiful.\nB: Yes, the trees turn gold and red.\nA: This is the most beautiful season.\nB: I completely agree with that.",
 funFact:"The Netherlands has beautiful autumn foliage, especially in the Veluwe forest, drawing thousands of nature hikers each October."},

{type:"teach", trg:"de ingebruikname", src:"commissioning / putting into service", pos:"noun", gender:"c",
 note:"In gebruik (into use) + name (taking).\nFormal word for when something starts being used.",
 example:"A: De ingebruikname van het nieuwe station is morgen.\nB: Eindelijk, na drie jaar bouwen.\nA: Er komt een officiele opening.\nB: Met de burgemeester, vermoed ik.",
 exampleSrc:"A: The commissioning of the new station is tomorrow.\nB: Finally, after three years of construction.\nA: There will be an official opening.\nB: With the mayor, I assume.",
 funFact:"The Dutch love official 'ingebruiknames' with ribbon-cutting ceremonies, speeches, and 'een borrel' (drinks) afterward."},

{type:"teach", trg:"de jaarbasis", src:"annual basis / yearly basis", pos:"noun", gender:"c",
 note:"Jaar (year) + basis.\n'Op jaarbasis' = on an annual basis.",
 example:"A: Hoeveel verdien je op jaarbasis?\nB: Dat is een persoonlijke vraag!\nA: Sorry, ik bedoel in het algemeen.\nB: In deze sector rond de vijftigduizend.",
 exampleSrc:"A: How much do you earn on an annual basis?\nB: That's a personal question!\nA: Sorry, I mean in general.\nA: In this sector around fifty thousand.",
 funFact:"Discussing salary is more acceptable in the Netherlands than in many countries, but still requires some tact. Dutch job ads often list salary ranges."},

{type:"teach", trg:"het bauxiet", src:"bauxite", pos:"noun", gender:"n",
 note:"Het bauxiet. The ore from which aluminum is extracted.\nNamed after Les Baux in southern France.",
 example:"A: Bauxiet is de grondstof voor aluminium.\nB: Waar wordt het gewonnen?\nA: Vooral in tropische landen.\nB: En dan verwerkt in fabrieken hier.",
 exampleSrc:"A: Bauxite is the raw material for aluminum.\nB: Where is it mined?\nA: Mainly in tropical countries.\nB: And then processed in factories here.",
 funFact:"Suriname was once one of the world's largest bauxite producers, and mining there was dominated by Dutch company Billiton (now part of BHP)."},

{type:"teach", trg:"de bib", src:"library (informal, Belgian Dutch)", pos:"noun", gender:"c",
 note:"Short for 'bibliotheek'. Used in Flanders.\nIn the Netherlands: 'de bieb' (also informal).",
 example:"A: Ga je mee naar de bib?\nB: Ja, ik moet een boek terugbrengen.\nA: Ik wil iets nieuws lenen.\nB: Goed idee, ik ook.",
 exampleSrc:"A: Are you coming to the library?\nB: Yes, I need to return a book.\nA: I want to borrow something new.\nB: Good idea, me too.",
 funFact:"Dutch public libraries are evolving into 'huiskamers van de stad' (living rooms of the city), offering workspaces, events, and community gathering."},

{type:"mc", q:"'Een krachtterm' is een eufemisme voor:",
 opts:["A swear word","A greeting","A farewell","A compliment"],
 ans:"A swear word",
 hint:"Kracht (force) + term. A 'forceful w...' people use when angry."},

{type:"fb", s:"De {1} in de herfst maakt het bos prachtig.",
 a:["kleurenwissel"], opts:["kleurenwissel","krachtterm","ingebruikname","jaarbasis"],
 hint:"The change of colors that happens when leaves turn gold and red",
 sSrc:"The {1} in autumn makes the forest beautiful."},

{type:"mc", q:"'Op jaarbasis' betekent:",
 opts:["Once a year","On an annual basis","Every January","For one year only"],
 ans:"On an annual basis",
 hint:"Jaar (year) + b.... Calculated over the span of a year."},

{type:"fb", s:"De {1} van het nieuwe ziekenhuis is volgende maand.",
 a:["ingebruikname"], opts:["ingebruikname","jaarbasis","kleurenwissel","denkwijs"],
 hint:"The formal event when a new building or facility starts being used",
 sSrc:"The {1} of the new hospital is next month."},

{type:"match", pairs:[
 {trg:"de krachtterm", src:"swear word"},
 {trg:"de denkwijs", src:"way of thinking"},
 {trg:"het gejoel", src:"uproar / cheering"},
 {trg:"de kleurenwissel", src:"color change"}
]},

{type:"mc", q:"'De bib' wordt vooral gebruikt in:",
 opts:["Friesland","The northern Netherlands","Belgium / Flanders","South Limburg"],
 ans:"Belgium / Flanders",
 hint:"The informal word for library in Belgian Dutch. In Holland they say 'bieb'."},

{type:"fb", s:"Zijn {1} is heel anders dan de mijne.",
 a:["denkwijs"], opts:["denkwijs","krachtterm","jaarbasis","bib"],
 hint:"Someone's way of thinking, their mental framework or mindset",
 sSrc:"His {1} is very different from mine."},

{type:"match", pairs:[
 {trg:"de ingebruikname", src:"commissioning"},
 {trg:"de jaarbasis", src:"annual basis"},
 {trg:"het bauxiet", src:"bauxite"},
 {trg:"de bib", src:"library (informal)"}
]}
]};
export default LESSON_20;
