// Russian V2 Unit 17 — Prepositional Case (B1.2)
const UNIT_17 = {n:17, lang:"ru", srcLang:"en", track:"v2", title:"Предложный падеж", sub:"Prepositional Case",
 icon:"📍", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u17l1", title:"Location with В and На", icon:"📍", xp:15, board:true, steps:[

{type:"intro", title:"Prepositional Case Basics",
 desc:"The prepositional case only appears after prepositions (hence the name). Used for location, topics, and the preposition 'при.' Endings usually -е.",
 goals:["Use в/на + prepositional for location","Use о/об for topics","Recognize -е endings"]},

{type:"teach", trg:"в доме", src:"in the house", pos:"phrase", gender:null,
 note:"В + prepositional = location inside.\nДом → в доме.",
 example:"A: Где Анна?\nB: В доме, спит.",
 exampleSrc:"A: Where is Anna?\nB: In the house, sleeping.",
 funFact:"В + prepositional for 'in enclosed space.' Different from 'в дом' (accusative = motion into)."},

{type:"teach", trg:"на работе", src:"at work", pos:"phrase", gender:null,
 note:"На + prepositional for surfaces/events.\nРабота → на работе.",
 example:"A: Где папа?\nB: На работе.",
 exampleSrc:"A: Where's dad?\nB: At work.",
 funFact:"'На работе' (at work) vs 'на работу' (to work). Same preposition в/на — case determines location vs direction."},

{type:"teach", trg:"на столе", src:"on the table", pos:"phrase", gender:null,
 note:"На + prep for surfaces.\nСтол → на столе.",
 example:"A: Где книга?\nB: На столе.",
 exampleSrc:"A: Where's the book?\nB: On the table.",
 funFact:"На specifies surface contact, в specifies inside. Sometimes both work: 'в метро' (inside metro) vs 'на метро' (on/by metro — as transport)."},

{type:"teach", trg:"о маме", src:"about mom", pos:"phrase", gender:null,
 note:"О + prepositional for topics.\nМама → о маме.",
 example:"A: О ком думаешь?\nB: О маме.",
 exampleSrc:"A: Who are you thinking about?\nB: About mom.",
 funFact:"'О' becomes 'об' before vowels: о маме but об Анне, об океане. Also 'обо' before мне: обо мне. Phonetic smoothing."},

{type:"teach", trg:"в городе", src:"in the city", pos:"phrase", gender:null,
 note:"Город → в городе.\nMasculine gets -е.",
 example:"A: Где ты живёшь?\nB: В Москве, большом городе.",
 exampleSrc:"A: Where do you live?\nB: In Moscow, a big city.",
 funFact:"Russia has ~15 cities with over a million people. 'В городе' works for any — Москва, Петербург, Новосибирск, Екатеринбург."},

{type:"teach", trg:"в школе", src:"at school", pos:"phrase", gender:null,
 note:"Школа → в школе.\nFeminine -а → -е in prepositional.",
 example:"A: Где ты был?\nB: В школе, до пяти.",
 exampleSrc:"A: Where were you?\nB: At school, until five.",
 funFact:"Russian school day traditionally ends around 14:00 (earlier grades) or 16:00 (upper grades). 'В школе до пяти' implies extracurricular activities."},

{type:"teach", trg:"в магазине", src:"at the shop", pos:"phrase", gender:null,
 note:"Магазин → в магазине.\nShop is enclosed space → в.",
 example:"A: Куда пошла мама?\nB: В магазин за хлебом.",
 exampleSrc:"A: Where did mom go?\nB: To the store for bread.",
 funFact:"Notice 'в магазин' (acc, motion) vs 'в магазине' (prep, location). The direction/location distinction is fundamental and constant in Russian."},

{type:"tip", title:"В vs На: Location Rules",
 text:"В + PREPOSITIONAL:\nEnclosed or defined spaces.\nв доме, в школе, в магазине, в комнате.\n\nНА + PREPOSITIONAL:\nSurfaces, events, islands, specific venues.\nна столе, на работе, на концерте, на Кубе.\n\nRULES FOR В VS НА:\n• Mostly в for buildings, в for countries/regions.\n• Mostly на for surfaces, на for events.\n• BUT: на почте, на фабрике, на заводе (special на-venues).\n• Islands/peninsulas: на Кубе, на Крыме.\n\nBOTH TAKE PREPOSITIONAL for LOCATION (not accusative).\n\nANSWER PATTERN: 'Где?' → в + prep or на + prep.\n\nDon't stress memorizing every case — most common nouns follow predictable rules. Memorize exceptions as they come.",
 icon:"📍"},

{type:"mc", q:"'He is at work' in Russian:",
 opts:["Он в работе","Он на работе","Он работает","Он к работе"],
 ans:"Он на работе",
 hint:"Work is a venue-type location. Uses на + prepositional."},

{type:"mc", q:"What case comes after the preposition 'о' (about)?",
 opts:["Nominative","Genitive","Dative","Prepositional"],
 ans:"Prepositional",
 hint:"'О' always takes ___. Hence the name of the case."},

{type:"fb", s:"A: Где твой телефон?\nB: На {1}.",
 a:["столе"],
 opts:["столе","стол","стола","столу"],
 hint:"'На' + prepositional case. Masculine стол → столе.",
 sSrc:"A: Where's your phone?\nB: On the table."},

{type:"fb", s:"A: О чём думаешь?\nB: О {1}.",
 a:["работе"],
 opts:["работе","работа","работу","работы"],
 hint:"О + prepositional. Feminine работа → работе.",
 sSrc:"A: What are you thinking about?\nB: About work."},

{type:"match", pairs:[
  {trg:"в доме", src:"in the house"},
  {trg:"на работе", src:"at work"},
  {trg:"на столе", src:"on the table"},
  {trg:"о маме", src:"about mom"},
  {trg:"в городе", src:"in the city"}
]}
]},

{id:"ruv2_u17l2", title:"Prep Case Endings", icon:"📝", xp:15, board:true, steps:[

{type:"intro", title:"Forming the Prepositional",
 desc:"Most nouns get -е in prepositional. Learn the patterns for each gender.",
 goals:["Form prep case for masculine","Form prep case for feminine","Form prep case for neuter"]},

{type:"teach", trg:"стол → столе", src:"table → on table (m)", pos:"phrase", gender:null,
 note:"Masculine nouns: add -е.\nConsonant + е ending is standard.",
 example:"A: Где ложка?\nB: На столе, возле тарелки.",
 exampleSrc:"A: Where's the spoon?\nB: On the table, near the plate.",
 funFact:"Masculine -е is the most common prepositional ending. Дом → доме, университет → университете, город → городе."},

{type:"teach", trg:"музей → музее", src:"museum → in museum (m)", pos:"phrase", gender:null,
 note:"Masculine ending in -й → -е.\nNeed double е (for й replacement).",
 example:"A: Мы где встретимся?\nB: В музее.",
 exampleSrc:"A: Where shall we meet?\nB: At the museum.",
 funFact:"The final й disappears and we see -ее. Visible in many nouns: чай → в чае (in tea), край → в крае (in the region)."},

{type:"teach", trg:"комната → комнате", src:"room → in room (f)", pos:"phrase", gender:null,
 note:"Feminine -а → -е.\nOne-letter change.",
 example:"A: Где дети?\nB: В комнате, играют.",
 exampleSrc:"A: Where are the kids?\nB: In the room, playing.",
 funFact:"Most feminine nouns with -а have identical -е endings for dative AND prepositional. Double-duty endings."},

{type:"teach", trg:"площадь → площади", src:"square → on square (f)", pos:"phrase", gender:null,
 note:"Feminine -ь → -и.\nSpecial soft-sign pattern.",
 example:"A: Где памятник?\nB: На Красной площади.",
 exampleSrc:"A: Where's the monument?\nB: On Red Square.",
 funFact:"Feminines ending in -ь form irregular prepositionals. Книга → книге (regular), but кровать → кровати (soft-sign pattern). Memorize these types."},

{type:"teach", trg:"окно → окне", src:"window → at window (n)", pos:"phrase", gender:null,
 note:"Neuter -о → -е.\nStandard neuter transformation.",
 example:"A: Кто в окне?\nB: Это мой кот.",
 exampleSrc:"A: Who's in the window?\nB: That's my cat.",
 funFact:"Neuter prepositional is predictable: -о → -е. Море → море stays море — because final е replaces any ending. Language economy."},

{type:"teach", trg:"здание → здании", src:"building → in building (n)", pos:"phrase", gender:null,
 note:"Neuter -ие → -ии.\nTwo vowels in a row.",
 example:"A: Где офис?\nB: В этом здании, на третьем этаже.",
 exampleSrc:"A: Where's the office?\nB: In this building, on the third floor.",
 funFact:"Neuters ending in -ие get -ии: здание → здании, упражнение → упражнении. The extra и appears for pronunciation."},

{type:"tip", title:"Prepositional Endings Summary",
 text:"MASCULINE (-consonant → -е):\nдом → доме.\nгород → городе.\nучитель → учителе.\n\nMASCULINE (-й → -е):\nмузей → музее.\nчай → чае.\n\nFEMININE (-а → -е):\nкнига → книге.\nшкола → школе.\n\nFEMININE (-я → -е):\nнеделя → неделе.\n\nFEMININE (-ь → -и):\nплощадь → площади.\nдочь → дочери (but other forms too).\nтетрадь → тетради.\n\nNEUTER (-о → -е):\nокно → окне.\nписьмо → письме.\n\nNEUTER (-ие → -ии):\nзадание → задании.\nупражнение → упражнении.\n\nPattern: the vast majority use -е. Only feminine soft-sign (-ь) and neuter -ие/-ий get -и.\n\nDrill: see a new noun, predict the ending.",
 icon:"📝"},

{type:"mc", q:"What's the prepositional form of 'школа'?",
 opts:["школа","школу","школе","школой"],
 ans:"школе",
 hint:"Feminine -а → -е for prepositional."},

{type:"mc", q:"'В ___ музее' — what preposition+noun combination?",
 opts:["в + nominative","в + accusative","в + prepositional","в + genitive"],
 ans:"в + prepositional",
 hint:"Location = в + ___ case."},

{type:"fb", s:"A: Где ты учишься?\nB: В {1}.",
 a:["университете"],
 opts:["университете","университет","университета","университету"],
 hint:"Masculine 'университет' takes -е in prepositional.",
 sSrc:"A: Where do you study?\nB: At the university."},

{type:"match", pairs:[
  {trg:"дом", src:"base form (NOM)"},
  {trg:"в доме", src:"in the house (PREP)"},
  {trg:"на работе", src:"at work"},
  {trg:"о матери", src:"about mother"},
  {trg:"в здании", src:"in the building"}
]}
,{type:"match",pairs:[{trg:"в магазине",src:"at the shop"},{trg:"музей → музее",src:"museum → in museum (m)"},{trg:"комната → комнате",src:"room → in room (f)"},{trg:"площадь → площади",src:"square → on square (f)"},{trg:"окно → окне",src:"window → at window (n)"},{trg:"здание → здании",src:"building → in building (n)"}]}]}

]};
export default UNIT_17;
