// Dutch B2 gapB Lesson 01 — Klimaat en Duurzaamheid
// Climate, sustainability, and environmental vocabulary

const LESSON_1 = {id:"nlv2_b2gB_l1", title:"Klimaat en Duurzaamheid", icon:"\u{1F30D}", xp:25, board:true, steps:[
{type:"intro", title:"Klimaat en Duurzaamheid",
 desc:"Climate change dominates Dutch headlines and policy. Learn the vocabulary to discuss sustainability, environmental challenges, and green initiatives.",
 goals:["8 climate and environment nouns","Discuss sustainability in Dutch","Understand Dutch green policy vocabulary"]},

{type:"teach", trg:"de klimaatverandering", src:"climate change", pos:"noun", gender:"c",
 note:"Compound: klimaat (climate) + verandering (change).\nThe central topic of Dutch environmental debate.",
 example:"A: De klimaatverandering gaat steeds sneller.\nB: Ja, de zeespiegel stijgt elk jaar.\nA: Nederland is extra kwetsbaar.\nB: Daarom investeren we zo veel in dijken.",
 exampleSrc:"A: Climate change is accelerating.\nB: Yes, sea levels rise every year.\nA: The Netherlands is extra vulnerable.\nB: That's why we invest so much in dikes.",
 funFact:"The Netherlands is literally below sea level in many areas, making climate change an existential issue for the Dutch."},

{type:"teach", trg:"de koolstofdioxide", src:"carbon dioxide", pos:"noun", gender:"c",
 note:"Often abbreviated to CO2 in daily speech.\nKoolstof (carbon) + dioxide.",
 example:"A: Hoeveel koolstofdioxide stoten we uit?\nB: Veel te veel, volgens de rapporten.\nA: We moeten de uitstoot verminderen.\nB: Daar zijn ze in Den Haag mee bezig.",
 exampleSrc:"A: How much carbon dioxide do we emit?\nB: Far too much, according to the reports.\nA: We need to reduce emissions.\nB: They're working on that in The Hague.",
 funFact:"The Dutch supreme court ruled in the Urgenda case that the government must cut CO2 emissions, a world-first climate ruling."},

{type:"teach", trg:"de duurzaamheid", src:"sustainability", pos:"noun", gender:"c",
 note:"From 'duurzaam' (sustainable, lasting).\n'Duurzaamheidsbeleid' = sustainability policy.",
 example:"A: Duurzaamheid staat hoog op de agenda.\nB: Terecht. We moeten nu handelen.\nA: Ons bedrijf heeft een groen plan.\nB: Mooi, daar wil ik meer over horen.",
 exampleSrc:"A: Sustainability is high on the agenda.\nB: Rightly so. We need to act now.\nA: Our company has a green plan.\nB: Great, I'd like to hear more about that.",
 funFact:"Dutch supermarkets were among the first in Europe to create entirely plastic-free aisles."},

{type:"teach", trg:"het ecoplan", src:"eco plan", pos:"noun", gender:"n",
 note:"Eco + plan. Used for green initiatives.\n'Een ecoplan opstellen' = to draw up an eco plan.",
 example:"A: Hebben jullie al een ecoplan?\nB: Ja, we willen in 2030 klimaatneutraal zijn.\nA: Dat is ambitieus. Hoe pakken jullie dat aan?\nB: Stap voor stap, met meetbare doelen.",
 exampleSrc:"A: Do you have an eco plan yet?\nB: Yes, we want to be climate neutral by 2030.\nA: That's ambitious. How are you approaching it?\nB: Step by step, with measurable goals.",
 funFact:"Many Dutch municipalities require businesses to submit an ecoplan as part of their operating permits."},

{type:"teach", trg:"de klimaatdeskundige", src:"climate expert", pos:"noun", gender:"c",
 note:"Klimaat + deskundige (expert).\n'Een deskundige op het gebied van...' = an expert in the field of...",
 example:"A: De klimaatdeskundige waarschuwt voor droogte.\nB: Dat is de derde waarschuwing dit jaar.\nA: Moeten we ons zorgen maken?\nB: Absoluut, het is een serieus probleem.",
 exampleSrc:"A: The climate expert warns about drought.\nB: That's the third warning this year.\nA: Should we be worried?\nB: Absolutely, it's a serious problem.",
 funFact:"The Netherlands has a dedicated knowledge institute for climate: KNMI (Royal Netherlands Meteorological Institute), founded in 1854."},

{type:"teach", trg:"de klimaatsceptici", src:"climate skeptics", pos:"noun", gender:"c",
 note:"Always plural. Klimaat + sceptici (skeptics).\nSingular: de klimaatscepticus.",
 example:"A: De klimaatsceptici geloven het niet.\nB: Maar de wetenschap is duidelijk.\nA: Hoe overtuig je mensen dan?\nB: Met feiten en geduld, denk ik.",
 exampleSrc:"A: The climate skeptics don't believe it.\nB: But the science is clear.\nA: How do you convince people then?\nB: With facts and patience, I think.",
 funFact:"Despite being one of the most vulnerable countries to sea level rise, the Netherlands still has an active climate skeptic movement."},

{type:"teach", trg:"de kringloop", src:"the cycle / thrift store", pos:"noun", gender:"c",
 note:"Double meaning: natural cycle AND thrift store.\n'De kringloopwinkel' = thrift/charity shop.",
 example:"A: Ik koop veel kleren bij de kringloop.\nB: Slim! Dat is goed voor het milieu.\nA: En voor mijn portemonnee.\nB: Win-win dus.",
 exampleSrc:"A: I buy lots of clothes at the thrift store.\nB: Smart! That's good for the environment.\nA: And for my wallet.\nB: Win-win then.",
 funFact:"The Dutch kringloopwinkel culture is huge. Nearly every town has one, and they are considered perfectly respectable places to shop."},

{type:"teach", trg:"de kentering", src:"the turning point / shift", pos:"noun", gender:"c",
 note:"From 'kenteren' (to turn around).\nOriginally a nautical term: the turning of the tide.",
 example:"A: Er is een kentering gaande in het denken.\nB: Ja, steeds meer mensen kiezen groen.\nA: Het duurt wel lang.\nB: Elke verandering begint langzaam.",
 exampleSrc:"A: There's a shift happening in thinking.\nB: Yes, more and more people choose green.\nA: It does take a long time.\nB: Every change starts slowly.",
 funFact:"Originally from sailing: 'kenteren' means a ship capsizing, or the tide turning. Now widely used for any major societal shift."},

{type:"tip", title:"Dutch Climate Vocabulary",
 text:"The Netherlands has a rich climate vocabulary because of its geography:\n\n'De zeespiegel' = sea level\n'De dijk' = the dike\n'De watersnood' = flood disaster\n'Het deltaplan' = delta plan (flood protection)\n'De uitstoot' = emissions\n'De energietransitie' = energy transition\n\nKey phrases:\n'Klimaatneutraal' = climate neutral\n'Circulaire economie' = circular economy\n'Groene stroom' = green electricity",
 deepDive:{title:"The Delta Works",
  text:"After the devastating 1953 flood that killed 1,836 people, the Netherlands built the Delta Works: one of the largest flood protection systems in the world.\n\nThe Maeslantkering near Rotterdam is a storm surge barrier that can close automatically when sea levels rise above 3 meters. It is one of the largest moving structures on Earth.\n\nThis engineering heritage gives the Dutch a unique perspective on climate adaptation: they don't just talk about prevention, they build solutions."}},

{type:"mc", q:"Wat betekent 'de klimaatverandering'?",
 opts:["The weather forecast","Climate change","A climate expert","The seasons"],
 ans:"Climate change",
 hint:"Compound: klimaat + verandering. What is changing globally?"},

{type:"fb", s:"De {1} waarschuwt voor droogte dit jaar.",
 a:["klimaatdeskundige"], opts:["klimaatdeskundige","klimaatverandering","kringloop","kentering"],
 hint:"The person with expertise who issues warnings about climate",
 sSrc:"The {1} warns about drought this year."},

{type:"mc", q:"'De kringloop' kan twee dingen betekenen. Welke?",
 opts:["A cycle and a thrift store","A bicycle and a lake","A ring and a loop","A newspaper and a website"],
 ans:"A cycle and a thrift store",
 hint:"Think natural processes AND second-hand shopping"},

{type:"fb", s:"We moeten de uitstoot van {1} verminderen.",
 a:["koolstofdioxide"], opts:["koolstofdioxide","duurzaamheid","kentering","ecoplan"],
 hint:"The gas that causes the greenhouse effect, often written as CO2",
 sSrc:"We need to reduce the emissions of {1}."},

{type:"match", pairs:[
 {trg:"de klimaatverandering", src:"climate change"},
 {trg:"de duurzaamheid", src:"sustainability"},
 {trg:"de kentering", src:"turning point"},
 {trg:"de kringloop", src:"cycle / thrift store"}
]},

{type:"mc", q:"Welk woord past? 'Er is een ... gaande in het denken over klimaat.'",
 opts:["kentering","kringloop","ecoplan","klimaatsceptici"],
 ans:"kentering",
 hint:"A nautical term meaning the tide is turning, used for societal shifts"},

{type:"fb", s:"Ons bedrijf heeft een ambitieus {1} opgesteld.",
 a:["ecoplan"], opts:["ecoplan","klimaatsceptici","koolstofdioxide","kentering"],
 hint:"A formal plan for becoming more environmentally friendly",
 sSrc:"Our company has drawn up an ambitious {1}."},

{type:"match", pairs:[
 {trg:"de koolstofdioxide", src:"carbon dioxide"},
 {trg:"het ecoplan", src:"eco plan"},
 {trg:"de klimaatdeskundige", src:"climate expert"},
 {trg:"de klimaatsceptici", src:"climate skeptics"}
]}
]};
export default LESSON_1;
