// Russian V2 Unit 6 — Places and Directions (A1.2)
const UNIT_06 = {n:6, lang:"ru", srcLang:"en", track:"v2", title:"Где?", sub:"Places and Location",
 icon:"🗺️", level:"A1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u6l1", title:"Места", icon:"🏢", xp:15, board:true, steps:[

{type:"intro", title:"Places",
 desc:"Essential place vocabulary for daily life. Russian uses где? (where) for location and куда? (where-to) for direction.",
 goals:["Name common places","Ask where with где","Use basic location prepositions"]},

{type:"teach", trg:"где", src:"where (location)", pos:"pron", gender:null,
 note:"Used for static location (where something IS).\nOpposite of куда (where TO).",
 example:"A: Где твой телефон?\nB: На столе.",
 exampleSrc:"A: Where is your phone?\nB: On the table.",
 funFact:"Russian distinguishes location vs direction: где (where, static) vs куда (where, moving). English uses 'where' for both. This distinction is consistent in Russian — don't mix them."},

{type:"teach", trg:"здесь", src:"here", pos:"adv", gender:null,
 note:"For location (static).\nSynonym: тут (more colloquial).",
 example:"A: Где ты?\nB: Я здесь, в кафе.",
 exampleSrc:"A: Where are you?\nB: I'm here, at the café.",
 funFact:"Здесь is slightly more formal than тут, but both are widely used. Тут is favored in casual speech and song lyrics for its rhythmic quality."},

{type:"teach", trg:"там", src:"there", pos:"adv", gender:null,
 note:"For distant location.\nAlso used idiomatically: 'что там?' = what's up?",
 example:"A: Где твой брат?\nB: Он там, в парке.",
 exampleSrc:"A: Where's your brother?\nB: He's there, at the park.",
 funFact:"Там opens the famous Pushkin line 'У лукоморья дуб зелёный...' ('Tam' in English children's book style 'There...'). A cornerstone of Russian poetry memorized by every schoolchild."},

{type:"teach", trg:"дом", src:"house / home", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nBoth the physical house and the concept of home.",
 example:"A: Где твой дом?\nB: Мой дом в центре города.",
 exampleSrc:"A: Where is your house?\nB: My house is in the city center.",
 funFact:"Russian distinguishes house vs home by preposition: в доме (in the building) vs дома (at home, adverbial). The phrase 'дом — это крепость' (home is a fortress) is a common saying."},

{type:"teach", trg:"школа", src:"school", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nCommon loanword base for many languages.",
 example:"A: Где твоя школа?\nB: Рядом с моим домом.",
 exampleSrc:"A: Where is your school?\nB: Near my house.",
 funFact:"Школа comes from Greek σχολή (leisure, as scholars had the leisure to study). The Russian school system separates детский сад (kindergarten) → школа (grades 1-11) → университет."},

{type:"teach", trg:"работа", src:"work / job", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nBoth 'work' (activity) and 'workplace.'",
 example:"A: Где работа твоего папы?\nB: В банке.",
 exampleSrc:"A: Where is your dad's work?\nB: At a bank.",
 funFact:"Работа shares a root with раб (slave) — reflecting old Slavic understanding of work as servitude. The modern Russian 'работать' (to work) still carries this Latin-like root."},

{type:"teach", trg:"магазин", src:"shop / store", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nFrom French 'magasin.'",
 example:"A: Где ты был?\nB: В магазине.",
 exampleSrc:"A: Where were you?\nB: At the store.",
 funFact:"Магазин entered Russian via French in the 18th century, replacing the older Russian 'лавка.' Russia's top chain магазины are 'Магнит' (Magnet), 'Пятёрочка' (Fifth), and 'Перекрёсток' (Crossroads)."},

{type:"teach", trg:"ресторан", src:"restaurant", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nFrench loan, same as English.",
 example:"A: Где этот ресторан?\nB: Возле метро.",
 exampleSrc:"A: Where is this restaurant?\nB: Near the metro.",
 funFact:"Moscow has the 'ресторанный рейтинг' (restaurant rating) culture, with Russian equivalents of Michelin stars. Famous chain White Rabbit was ranked in World's 50 Best Restaurants."},

{type:"tip", title:"Location vs Direction: Где vs Куда",
 text:"Russian splits 'where' into two distinct concepts:\n\nГДЕ (location, static):\nГде ты? (Where are you?)\nВ магазине. (At the store.)\nPreposition + PREPOSITIONAL CASE.\n\nКУДА (direction, motion):\nКуда ты идёшь? (Where are you going?)\nВ магазин. (To the store.)\nPreposition + ACCUSATIVE CASE.\n\nNotice: в магазине (prep) vs в магазин (acc). The ending changes by case!\n\nThis is a FUNDAMENTAL Russian distinction. It appears with many verbs and prepositions. Master it early — you'll use it constantly.",
 icon:"🎯"},

{type:"mc", q:"'Where are you?' (asking about static location) is:",
 opts:["Куда ты?","Где ты?","Откуда ты?","Что ты?"],
 ans:"Где ты?",
 hint:"Location (static) uses где. Куда is for direction (where TO)."},

{type:"mc", q:"Which word means 'here'?",
 opts:["там","здесь","куда","где"],
 ans:"здесь",
 hint:"'Here' is the 'close-to-speaker' location word. 'There' is the 'far-from-speaker' one."},

{type:"fb", s:"A: {1} ты живёшь?\nB: Я живу в Москве.",
 a:["Где"],
 opts:["Где","Куда","Откуда","Что"],
 hint:"Asking about where someone LIVES is a static location question, not direction.",
 sSrc:"A: {1} do you live?\nB: I live in Moscow."},

{type:"match", pairs:[
  {trg:"дом", src:"house"},
  {trg:"школа", src:"school"},
  {trg:"работа", src:"work"},
  {trg:"магазин", src:"shop"},
  {trg:"ресторан", src:"restaurant"}
]}
]},

{id:"ruv2_u6l2", title:"В, На, У", icon:"📍", xp:15, board:true, steps:[

{type:"intro", title:"Location Prepositions",
 desc:"Russian location prepositions are context-sensitive. В (in), на (on/at), and у (near/at someone's place) each govern specific situations.",
 goals:["Use в for 'in' (enclosed spaces)","Use на for 'on/at' (surfaces, events, islands)","Use у for 'at someone's place'"]},

{type:"teach", trg:"в", src:"in / at (enclosed)", pos:"prep", gender:null,
 note:"For enclosed spaces: rooms, buildings, cities, countries.\nWith prepositional case for location: в доме (in the house).",
 example:"A: Где ты?\nB: В школе, на уроке.",
 exampleSrc:"A: Where are you?\nB: At school, in class.",
 funFact:"В plus accusative = direction: 'иду в школу' (going TO school). В plus prepositional = location: 'я в школе' (I'm AT school). One letter, two completely different meanings based on case."},

{type:"teach", trg:"на", src:"on / at (surface, event)", pos:"prep", gender:null,
 note:"For surfaces (на столе = on the table), events (на концерте = at the concert), islands.\nLike в, takes prepositional for location.",
 example:"A: Где книга?\nB: На столе.",
 exampleSrc:"A: Where is the book?\nB: On the table.",
 funFact:"Islands and peninsulas use на, not в: на Кубе (in Cuba), на Украине (in Ukraine — politically controversial, modern use prefers в Украину), на Кипре (in Cyprus)."},

{type:"teach", trg:"у", src:"at (someone's place) / by", pos:"prep", gender:null,
 note:"Takes the genitive case.\nУ меня = at my place / I have.",
 example:"A: Где ты?\nB: У моего друга.",
 exampleSrc:"A: Where are you?\nB: At my friend's place.",
 funFact:"'У меня есть...' is THE standard way to say 'I have...' in Russian. Literally: 'by me there-is...'. Russian doesn't use 'иметь' (to have) in daily speech."},

{type:"teach", trg:"перед", src:"in front of", pos:"prep", gender:null,
 note:"Takes the instrumental case.\nOpposite of за (behind).",
 example:"A: Где остановка?\nB: Перед магазином.",
 exampleSrc:"A: Where is the stop?\nB: In front of the shop.",
 funFact:"Перед the preposition is different from перед the prefix. As a prefix (пере-) it means 'across' or 'over': перейти (to cross over), перевод (translation, 'across-translation')."},

{type:"teach", trg:"за", src:"behind / beyond", pos:"prep", gender:null,
 note:"Takes instrumental for location.\nAlso takes accusative for direction.",
 example:"A: Где ключи?\nB: За дверью.",
 exampleSrc:"A: Where are the keys?\nB: Behind the door.",
 funFact:"За has dozens of meanings: 'behind,' 'for,' 'during,' 'in place of.' One of the most polysemous Russian prepositions. 'За работу!' = 'to work!' (starting a task)."},

{type:"teach", trg:"рядом", src:"nearby / next to", pos:"adv", gender:null,
 note:"Adverb. With с + instrumental: 'рядом с кем/чем'.\nStress on first: RYA-dom.",
 example:"A: Где твоя школа?\nB: Рядом с моим домом.",
 exampleSrc:"A: Where is your school?\nB: Next to my house.",
 funFact:"Рядом literally means 'in a row' (from ряд = row). In Russian, things that are 'nearby' are in the same row — implying close proximity."},

{type:"teach", trg:"далеко", src:"far", pos:"adv", gender:null,
 note:"Literally: 'far away.'\nOpposite of близко (close).",
 example:"A: Москва далеко от вас?\nB: Да, очень далеко.",
 exampleSrc:"A: Is Moscow far from you?\nB: Yes, very far.",
 funFact:"Далеко takes 'от' (from) + genitive: далеко от Москвы (far from Moscow). This is unlike English 'far away from' which can feel redundant to Russians."},

{type:"teach", trg:"близко", src:"close / near", pos:"adv", gender:null,
 note:"Opposite of далеко.\nSame от + genitive construction: близко от (close to/from).",
 example:"A: Магазин близко?\nB: Да, в пяти минутах.",
 exampleSrc:"A: Is the store close?\nB: Yes, five minutes away.",
 funFact:"'В пяти минутах' (in five minutes) is the Russian way to express distance in time. Also 'в двух шагах' (two steps away — meaning very close)."},

{type:"tip", title:"Prepositions Take Cases",
 text:"Russian prepositions govern specific cases. You must memorize which case each preposition uses.\n\nFOR LOCATION:\nВ + prepositional: в школе (at school).\nНа + prepositional: на столе (on the table).\nУ + genitive: у меня (at my place).\n\nFOR MOTION/DIRECTION:\nВ + accusative: в школу (to school).\nНа + accusative: на стол (onto the table).\nК + dative: к маме (to mom's).\n\nSame preposition, DIFFERENT CASE = different meaning!\nВ магазине = at the store (I'm there).\nВ магазин = to the store (I'm going).\n\nThis is WHY cases matter in Russian. They disambiguate what would otherwise be identical prepositions.",
 icon:"🔑"},

{type:"mc", q:"Which preposition expresses 'at someone's place' in Russian?",
 opts:["в","на","у","за"],
 ans:"у",
 hint:"The preposition takes genitive: 'у друга' (at friend's)."},

{type:"mc", q:"Why does в change meaning with case?",
 opts:["It's a grammatical error","Prepositional = location, accusative = motion","It depends on dialect","The meaning is random"],
 ans:"Prepositional = location, accusative = motion",
 hint:"This is a fundamental Russian pattern. Case choice determines static vs dynamic meaning."},

{type:"fb", s:"A: Где ты живёшь?\nB: Я живу {1} Петербурге.",
 a:["в"],
 opts:["в","на","у","за"],
 hint:"Cities are 'enclosed' areas — use the preposition for enclosed spaces (with prepositional case ending -е).",
 sSrc:"A: Where do you live?\nB: I live {1} Petersburg."},

{type:"fb", s:"A: Где кошка?\nB: {1} диваном.",
 a:["За"],
 opts:["За","На","В","У"],
 hint:"'Диваном' is instrumental case (ends in -ом). Which preposition takes instrumental for location?",
 sSrc:"A: Where is the cat?\nB: Behind the sofa."},

{type:"match", pairs:[
  {trg:"в", src:"in (enclosed)"},
  {trg:"на", src:"on / at (surface)"},
  {trg:"у", src:"at (someone's place)"},
  {trg:"рядом с", src:"next to"},
  {trg:"далеко от", src:"far from"}
]}
]},

{id:"ruv2_u6l3", title:"Налево, направо", icon:"🧭", xp:15, board:true, steps:[

{type:"intro", title:"Directions and Motion",
 desc:"Ask for directions and describe movement. Russian has two verbs for 'to go' depending on whether you're on foot or by vehicle.",
 goals:["Ask куда (where to)","Use идти (to go on foot)","Use ехать (to go by vehicle)"]},

{type:"teach", trg:"куда", src:"where (direction)", pos:"pron", gender:null,
 note:"For motion/direction, not location.\nOpposite of где (static where).",
 example:"A: Куда ты идёшь?\nB: В магазин.",
 exampleSrc:"A: Where are you going?\nB: To the store.",
 funFact:"'Куда глаза глядят' (wherever the eyes look) — a Russian idiom meaning 'to wander aimlessly.' Famous opening to many fairy tales."},

{type:"teach", trg:"идти", src:"to go (on foot)", pos:"verb", gender:null,
 note:"For walking or going on foot.\nIrregular conjugation: я иду, ты идёшь, они идут.",
 example:"A: Куда ты идёшь?\nB: Я иду домой.",
 exampleSrc:"A: Where are you going?\nB: I'm going home.",
 funFact:"Russian has 14 base verbs of motion, each with an 'on foot' and 'by vehicle' pair. This is a famous challenge for learners. Идти/ходить is the first pair."},

{type:"teach", trg:"ехать", src:"to go (by vehicle)", pos:"verb", gender:null,
 note:"For any motorized movement.\nConjugation: я еду, ты едешь, они едут.",
 example:"A: Куда ты едешь?\nB: На работу.",
 exampleSrc:"A: Where are you going (by transport)?\nB: To work.",
 funFact:"Russians distinguish walking vs riding in a way English doesn't. Asking 'Ты идёшь или едешь?' specifies the mode of transport. It's impossible to skip this choice."},

{type:"teach", trg:"налево", src:"to the left", pos:"adv", gender:null,
 note:"Direction adverb.\nЛево = left (noun base).",
 example:"A: Где библиотека?\nB: Налево, за углом.",
 exampleSrc:"A: Where's the library?\nB: To the left, around the corner.",
 funFact:"'Пойти налево' literally 'to go left' is an idiomatic Russian expression meaning 'to be unfaithful in relationships.' Context makes clear whether it's directional or metaphorical."},

{type:"teach", trg:"направо", src:"to the right", pos:"adv", gender:null,
 note:"Direction adverb.\nПраво = right (noun base, also 'right/law').",
 example:"A: Как пройти к музею?\nB: Идите прямо, потом направо.",
 exampleSrc:"A: How do I get to the museum?\nB: Go straight, then right.",
 funFact:"Право doubles as 'right' (direction) AND 'right' (legal right). Context distinguishes: 'идите направо' vs 'имею право' (I have the right). Similar to English."},

{type:"teach", trg:"прямо", src:"straight ahead", pos:"adv", gender:null,
 note:"Most common direction word.\nLiterally: 'straight.'",
 example:"A: Как до метро?\nB: Идите прямо до светофора.",
 exampleSrc:"A: How to get to the metro?\nB: Go straight until the traffic light.",
 funFact:"Прямо also means 'frankly' or 'directly' in metaphorical use: 'скажите прямо' (speak frankly). A common word for both physical and verbal directness."},

{type:"teach", trg:"быстро", src:"quickly", pos:"adv", gender:null,
 note:"Used with verbs of motion.\nOpposite of медленно (slowly).",
 example:"A: Как далеко?\nB: Если идти быстро — десять минут.",
 exampleSrc:"A: How far?\nB: If you walk quickly — ten minutes.",
 funFact:"Быстро is the root of 'быстрый' (fast) and 'быстрота' (speed). Russian word families let you guess many related words once you know one base."},

{type:"teach", trg:"медленно", src:"slowly", pos:"adv", gender:null,
 note:"Opposite of быстро.\nDouble-N in Russian: pronounced as long N.",
 example:"A: Говорите медленно, пожалуйста.\nB: Хорошо, я постараюсь.",
 exampleSrc:"A: Please speak slowly.\nB: Okay, I'll try.",
 funFact:"The phrase 'Говорите медленно, пожалуйста!' is every Russian learner's lifeline. Russian is notorious for fast speech — this is the phrase that signals 'please slow down.'"},

{type:"tip", title:"Motion Verbs: Идти vs Ехать",
 text:"Russian has TWO verbs for 'to go,' based on how you travel:\n\nИДТИ — on foot (walking).\nЯ иду в парк. (I'm walking to the park.)\n\nЕХАТЬ — by any vehicle.\nЯ еду на работу. (I'm going to work [by car/bus/etc.].)\n\nNEVER use идти when you're in a vehicle. This is wrong:\n✗ Я иду в Петербург. (if you're taking a train).\n\nRight:\n✓ Я еду в Петербург.\n\nAdditional verbs will come for going by plane (лететь), by boat (плыть). But идти/ехать covers most daily situations.",
 icon:"🚶🚗"},

{type:"mc", q:"Which verb means 'to go by car/train/bus'?",
 opts:["идти","ехать","ходить","бежать"],
 ans:"ехать",
 hint:"For any motorized transport, use this verb. Идти is only for walking."},

{type:"mc", q:"Your friend is driving to Moscow. Which is correct?",
 opts:["Он идёт в Москву","Он едет в Москву","Он ходит в Москву","Он пошёл в Москву"],
 ans:"Он едет в Москву",
 hint:"Driving requires the vehicle-verb. 'He is going' by car, so use ехать in present tense."},

{type:"fb", s:"A: Я не знаю, где метро.\nB: Идите {1}, потом направо.",
 a:["прямо"],
 opts:["прямо","налево","рядом","далеко"],
 hint:"Directions usually include 'straight' as a step before turning.",
 sSrc:"A: I don't know where the metro is.\nB: Go {1}, then right."},

{type:"fb", s:"Я {1} в школу каждое утро.",
 a:["иду"],
 opts:["иду","еду","идти","ехать"],
 hint:"Person walks to school (likely). First person singular. Use the walking verb.",
 sSrc:"I walk to school every morning."},

{type:"match", pairs:[
  {trg:"куда", src:"where (direction)"},
  {trg:"идти", src:"to walk"},
  {trg:"ехать", src:"to go by vehicle"},
  {trg:"налево", src:"to the left"},
  {trg:"направо", src:"to the right"},
  {trg:"прямо", src:"straight"}
]}
,{type:"match",pairs:[{trg:"перед",src:"in front of"},{trg:"близко",src:"close / near"},{trg:"быстро",src:"quickly"},{trg:"медленно",src:"slowly"}]}]}

]};
export default UNIT_06;
