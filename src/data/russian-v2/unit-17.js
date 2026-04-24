// Russian V2 Unit 17. Prepositional Case (B1.2)
const UNIT_17 = {n:17, lang:"ru", srcLang:"en", track:"v2", title:"Предложный падеж", sub:"Prepositional Case",
 icon:"📍", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u17l1", title:"Location with В and На", icon:"📍", xp:15, board:true, steps:[

{type:"intro", title:"Prepositional Case Basics",
 desc:"The prepositional case only appears after prepositions (hence the name). Used for location, topics, and the preposition 'при.' Endings usually -е.",
 goals:["Use в/на + prepositional for location","Use о/об for topics","Recognize -е endings"]},

{type:"teach", trg:"в доме", src:"in the house", pos:"phrase", gender:null,
 note:"В + prepositional = location inside.\nДом → в доме.",
 example:"A: Где Анна?\nB: В доме.",
 exampleSrc:"A: Where is Anna?\nB: In the house.",
 funFact:"В + prepositional for 'in enclosed space.' Different from 'в дом' (accusative = motion into)."},

{type:"teach", trg:"на работе", src:"at work", pos:"phrase", gender:null,
 note:"На + prepositional for surfaces/events.\nРабота → на работе.",
 example:"A: Где папа?\nB: На работе.",
 exampleSrc:"A: Where's dad?\nB: At work.",
 funFact:"'На работе' (at work) vs 'на работу' (to work). Same preposition в/на, case determines location vs direction."},

{type:"teach", trg:"на столе", src:"on the table", pos:"phrase", gender:null,
 note:"На + prep for surfaces.\nСтол → на столе.",
 example:"A: Где книга?\nB: На столе.",
 exampleSrc:"A: Where's the book?\nB: On the table.",
 funFact:"На specifies surface contact, в specifies inside. Sometimes both work: 'в метро' (inside metro) vs 'на метро' (on/by metro, as transport)."},

{type:"teach", trg:"о маме", src:"about mom", pos:"phrase", gender:null,
 note:"О + prepositional for topics.\nМама → о маме.",
 example:"A: О ком думаешь?\nB: О маме.",
 exampleSrc:"A: Who are you thinking about?\nB: About mom.",
 funFact:"'О' becomes 'об' before vowels: о маме but об Анне, об океане. Also 'обо' before мне: обо мне. Phonetic smoothing."},

{type:"teach", trg:"в городе", src:"in the city", pos:"phrase", gender:null,
 note:"Город → в городе.\nMasculine gets -е.",
 example:"A: Где ты живёшь?\nB: В Москве.",
 exampleSrc:"A: Where do you live?\nB: In Moscow.",
 funFact:"Russia has ~15 cities with over a million people. 'В городе' works for any, Москва, Петербург, Новосибирск, Екатеринбург."},

{type:"teach", trg:"в школе", src:"at school", pos:"phrase", gender:null,
 note:"Школа → в школе.\nFeminine -а → -е in prepositional.",
 example:"A: Где ты был?\nB: В школе, до пяти.",
 exampleSrc:"A: Where were you?\nB: At school, until five.",
 funFact:"Russian school day traditionally ends around 14:00 (earlier grades) or 16:00 (upper grades). 'В школе до пяти' implies extracurricular activities."},

{type:"teach", trg:"в магазине", src:"at the shop", pos:"phrase", gender:null,
 note:"Магазин → в магазине.\nShop is enclosed space → в.",
 example:"A: Мама в магазине?\nB: Да, в магазине.",
 exampleSrc:"A: Is mom at the store?\nB: Yes, at the store.",
 funFact:"Notice 'в магазин' (acc, motion) vs 'в магазине' (prep, location). The direction/location distinction is fundamental and constant in Russian."},

{type:"tip", title:"В vs На: Location Rules",
 text:"В + PREPOSITIONAL:\nEnclosed or defined spaces.\nв доме, в школе, в магазине, в комнате.\n\nНА + PREPOSITIONAL:\nSurfaces, events, islands, specific venues.\nна столе, на работе, на концерте, на Кубе.\n\nRULES FOR В VS НА:\n• Mostly в for buildings, в for countries/regions.\n• Mostly на for surfaces, на for events.\n• BUT: на почте, на фабрике, на заводе (special на-venues).\n• Islands/peninsulas: на Кубе, на Крыме.\n\nBOTH TAKE PREPOSITIONAL for LOCATION (not accusative).\n\nANSWER PATTERN: 'Где?' → в + prep or на + prep.\n\nDon't stress memorizing every case, most common nouns follow predictable rules. Memorize exceptions as they come.",
 icon:"📍"},

{type:"mc", q:"'He is at work' in Russian:",
 opts:["Он на работе","Он работает","Он к работе","Он в работе"],
 ans:"Он на работе",
 hint:"Work is a venue-type location. Uses на + prepositional."},

{type:"mc", q:"What case comes after the preposition 'о' (about)?",
 opts:["Dative","Prepositional","Nominative","Genitive"],
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
 example:"A: Книга где?\nB: На столе.",
 exampleSrc:"A: Where's the book?\nB: On the table.",
 funFact:"Masculine -е is the most common prepositional ending. Дом → доме, университет → университете, город → городе."},

{type:"teach", trg:"музей → музее", src:"museum → in museum (m)", pos:"phrase", gender:null,
 note:"Masculine ending in -й → -е.\nNeed double е (for й replacement).",
 example:"A: Мы где встретимся?\nB: В музее.",
 exampleSrc:"A: Where shall we meet?\nB: At the museum.",
 funFact:"The final й disappears and we see -ее. Visible in many nouns: чай → в чае (in tea), край → в крае (in the region)."},

{type:"teach", trg:"комната → комнате", src:"room → in room (f)", pos:"phrase", gender:null,
 note:"Feminine -а → -е.\nOne-letter change.",
 example:"A: Ты в комнате?\nB: Да, в комнате.",
 exampleSrc:"A: Are you in the room?\nB: Yes, in the room.",
 funFact:"Most feminine nouns with -а have identical -е endings for dative AND prepositional. Double-duty endings."},

{type:"teach", trg:"площадь → площади", src:"square → on square (f)", pos:"phrase", gender:null,
 note:"Feminine -ь → -и.\nSpecial soft-sign pattern.",
 example:"A: Где памятник?\nB: На Красной площади.",
 exampleSrc:"A: Where's the monument?\nB: On Red Square.",
 funFact:"Feminines ending in -ь form irregular prepositionals. Книга → книге (regular), but кровать → кровати (soft-sign pattern). Memorize these types."},

{type:"teach", trg:"окно → окне", src:"window → at window (n)", pos:"phrase", gender:null,
 note:"Neuter -о → -е.\nStandard neuter transformation.",
 example:"A: Кто в окне?\nB: Никто.",
 exampleSrc:"A: Who's in the window?\nB: Nobody.",
 funFact:"Neuter prepositional is predictable: -о → -е. Море → море stays море, because final е replaces any ending. Language economy."},

{type:"teach", trg:"здание → здании", src:"building → in building (n)", pos:"phrase", gender:null,
 note:"Neuter -ие → -ии.\nTwo vowels in a row.",
 example:"A: Где офис?\nB: В здании рядом.",
 exampleSrc:"A: Where's the office?\nB: In the building nearby.",
 funFact:"Neuters ending in -ие get -ии: здание → здании, упражнение → упражнении. The extra и appears for pronunciation."},

{type:"tip", title:"Prepositional Endings Summary",
 text:"MASCULINE (-consonant → -е):\nдом → доме.\nгород → городе.\nучитель → учителе.\n\nMASCULINE (-й → -е):\nмузей → музее.\nчай → чае.\n\nFEMININE (-а → -е):\nкнига → книге.\nшкола → школе.\n\nFEMININE (-я → -е):\nнеделя → неделе.\n\nFEMININE (-ь → -и):\nплощадь → площади.\nдочь → дочери (but other forms too).\nтетрадь → тетради.\n\nNEUTER (-о → -е):\nокно → окне.\nписьмо → письме.\n\nNEUTER (-ие → -ии):\nзадание → задании.\nупражнение → упражнении.\n\nPattern: the vast majority use -е. Only feminine soft-sign (-ь) and neuter -ие/-ий get -и.\n\nDrill: see a new noun, predict the ending.",
 icon:"📝"},

{type:"mc", q:"What's the prepositional form of 'школа'?",
 opts:["школе","школой","школа","школу"],
 ans:"школе",
 hint:"Feminine -а → -е for prepositional."},

{type:"mc", q:"'В ___ музее', what preposition+noun combination?",
 opts:["в + accusative","в + prepositional","в + genitive","в + nominative"],
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
,{type:"fb", s:"A: Где можно купить хлеб?\nB: {1}.",
 a:["в магазине"],
 opts:["в магазине","в школе","на работе","в доме"],
 hint:"The place you go to shop and buy things.",
 sSrc:"A: Where can you buy bread?\nB: At the shop."},

{type:"fb", s:"A: Где папа сейчас?\nB: {1}.",
 a:["на работе"],
 opts:["на работе","в школе","в городе","в доме"],
 hint:"He's doing his job right now, not at home.",
 sSrc:"A: Where is dad right now?\nB: At work."},

{type:"match",pairs:[{trg:"в магазине",src:"at the shop"},{trg:"музей → музее",src:"museum → in museum (m)"},{trg:"комната → комнате",src:"room → in room (f)"},{trg:"площадь → площади",src:"square → on square (f)"},{trg:"окно → окне",src:"window → at window (n)"},{trg:"здание → здании",src:"building → in building (n)"}]}]},

{id:"ruv2_u17l3", title:"Природа и среда", icon:"🌿", xp:20, board:true, steps:[

{type:"intro", title:"Environmental and Global Vocabulary",
 desc:"B1 learners need vocabulary for discussing the natural world, health, and global issues. These words appear in TRKI B1 reading and speaking tasks.",
 goals:["Name key environmental concepts in Russian","Discuss health and resources","Use imperfective verbs for ongoing actions"]},

{type:"teach", trg:"окружающая среда", src:"the natural environment", pos:"noun", gender:"f",
 note:"Literally: 'surrounding environment.'\nСреда = environment (not Wednesday).\nUsed in formal and ecological contexts.",
 example:"A: Почему окружающая среда важна для нас?\nB: Потому что мы живём в ней.",
 exampleSrc:"A: Why is the natural environment important for us?\nB: Because we live in it.",
 funFact:"'Среда' has two meanings: 'Wednesday' (день недели) and 'environment' (окружающая среда). Context tells them apart. The ecological term comes from the verb 'окружать' (to surround)."},

{type:"teach", trg:"деревня", src:"village / countryside", pos:"noun", gender:"f",
 note:"Feminine noun. Деревня = both a small village and 'the countryside' in general.\nGenitive: деревни.",
 example:"A: Ты любишь деревню?\nB: Да, там очень хорошо.",
 exampleSrc:"A: Do you like the countryside?\nB: Yes, it's very nice there.",
 funFact:"Russians traditionally escape to the countryside in summer. 'Ехать в деревню' (going to the village) evokes the classic Russian dacha culture of gardens and fresh air."},

{type:"teach", trg:"здоровье", src:"health", pos:"noun", gender:"n",
 note:"Neuter noun. Used in the toast 'За ваше здоровье!' (To your health!).\nRelated adjective: здоровый (healthy).",
 example:"A: Как твоё здоровье?\nB: Хорошо, думаю.",
 exampleSrc:"A: How is your health?\nB: Good, I think.",
 funFact:"Russians say 'Будьте здоровы!' (Be healthy!) when someone sneezes. The same phrase closes many toasts. Health talk is very natural in everyday Russian conversation."},

{type:"teach", trg:"изменение климата", src:"climate change", pos:"noun", gender:"n",
 note:"Noun phrase. Изменение = change (noun), климат = climate.\nHigh-frequency in B1 texts and news.",
 example:"A: Ты знаешь слово изменение климата?\nB: Да, знаю.",
 exampleSrc:"A: Do you know the phrase climate change?\nB: Yes, I do.",
 funFact:"'Изменение' comes from the verb 'изменять' (to change). Russia's vast territory makes it acutely sensitive to climate shifts: permafrost thaw affects ~65% of Russian land."},

{type:"teach", trg:"энергия", src:"energy", pos:"noun", gender:"f",
 note:"Feminine noun, direct borrowing from Greek.\nЭлектроэнергия = electrical energy, electricity.",
 example:"A: Что даёт нам солнце?\nB: Солнце, это энергия.",
 exampleSrc:"A: What does the sun give us?\nB: The sun is energy.",
 funFact:"Russia is one of the world's largest energy exporters. 'Энергия' entered Russian in the 18th century alongside scientific vocabulary from Western Europe."},

{type:"teach", trg:"ресурс", src:"resource", pos:"noun", gender:"m",
 note:"Masculine noun, international borrowing.\nPlural: ресурсы.\nПриродные ресурсы = natural resources.",
 example:"A: Какие ресурсы важны для человека?\nB: Вода, самый важный ресурс.",
 exampleSrc:"A: What resources are important for a person?\nB: Water is the most important resource.",
 funFact:"Russia has the world's largest natural gas reserves and is rich in oil, coal, and timber. 'Ресурс' covers natural (природный) and human (человеческий) resources alike."},

{type:"teach", trg:"перерабатывать", src:"to recycle (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Perfective: переработать.\nPrefix пере- = re-, again.\nAlso means 'to process' (materials).",
 example:"A: Вы перерабатываете мусор дома?\nB: Да, мы всегда перерабатываем.",
 exampleSrc:"A: Do you recycle rubbish at home?\nB: Yes, we always recycle.",
 funFact:"The verb comes from 'работать' (to work) + prefix пере- (re-). Literally: 'to rework.' Major Russian cities now have coloured sorting bins for glass, plastic, and paper."},

{type:"tip", title:"B1 Environmental Vocabulary: Key Notes",
 text:"KEY POINTS:\n\n1. Окружающая среда = the natural environment.\nСреда alone can mean 'Wednesday', context is essential.\n\n2. Деревня = both 'village' (a specific place) and 'the countryside' in general.\nIn prepositional: в деревне (in the countryside).\n\n3. Здоровье (health) is neuter: -ье ending.\nRelated: здоровый (healthy, adj). Toast: За здоровье!\n\n4. Изменение климата follows the pattern: verbal noun (изменение) + genitive noun (климата).\n\n5. Перерабатывать is imperfective: ongoing, habitual recycling.\nPerfective переработать = one completed recycling action.",
 icon:"🌿"},

{type:"mc", q:"Which phrase means 'the natural environment' in Russian?",
 opts:["окружающая среда","здоровье","энергия","деревня"],
 ans:"окружающая среда",
 hint:"Think: what 'surrounds' us in the natural world? A compound phrase, not a single word."},

{type:"mc", q:"What gender is 'здоровье' (health)?",
 opts:["Feminine","Neuter","No gender","Masculine"],
 ans:"Neuter",
 hint:"The -ье ending on nouns is a strong signal for one particular Russian grammatical gender."},

{type:"mc", q:"'Перерабатывать' is which verbal aspect?",
 opts:["It has no aspect","Perfective","Imperfective","Both aspects"],
 ans:"Imperfective",
 hint:"The -ывать suffix combined with пере- signals an ongoing or habitual action, not a completed one."},

{type:"mc", q:"Which noun means 'resource' in Russian?",
 opts:["деревня","здоровье","энергия","ресурс"],
 ans:"ресурс",
 hint:"An international borrowing. It sounds recognisable across many European languages."},

{type:"fb", s:"A: Почему {1} важна для нас?\nB: Потому что мы живём в ней.",
 a:["окружающая среда"],
 opts:["окружающая среда","деревня","энергия","здоровье"],
 hint:"The full compound phrase meaning 'the natural environment', what literally surrounds us.",
 sSrc:"A: Why is the natural environment important for us?\nB: Because we live in it."},

{type:"fb", s:"A: Как твоё {1}?\nB: Хорошо, думаю.",
 a:["здоровье"],
 opts:["здоровье","ресурс","деревня","энергия"],
 hint:"A neuter noun. What you ask about when you want to know if someone is well.",
 sSrc:"A: How is your health?\nB: Good, I think."},

{type:"fb", s:"A: Откуда берётся {1}?\nB: Солнце даёт нам её.",
 a:["энергия"],
 opts:["энергия","деревня","здоровье","ресурс"],
 hint:"The sun gives us this. A feminine noun borrowed into Russian from Greek.",
 sSrc:"A: Where does energy come from?\nB: The sun gives it to us."},

{type:"fb", s:"A: Вы {1} мусор дома?\nB: Да, мы всегда перерабатываем.",
 a:["перерабатываете"],
 opts:["перерабатываете","переработали","перерабатывать","перерабатывал"],
 hint:"Habitual action, question to 'you' (plural). Imperfective present, 2nd person plural.",
 sSrc:"A: Do you recycle rubbish at home?\nB: Yes, we always recycle."},

{type:"match", pairs:[
  {trg:"окружающая среда", src:"the natural environment"},
  {trg:"деревня", src:"village / countryside"},
  {trg:"здоровье", src:"health"},
  {trg:"изменение климата", src:"climate change"},
  {trg:"энергия", src:"energy"},
  {trg:"ресурс", src:"resource"},
  {trg:"перерабатывать", src:"to recycle (imperfective)"}
]}
]}

]};
export default UNIT_17;
