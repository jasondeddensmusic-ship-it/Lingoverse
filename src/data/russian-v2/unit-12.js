// Russian V2 Unit 12 — Travel and Transport (A2.2)
const UNIT_12 = {n:12, lang:"ru", srcLang:"en", track:"v2", title:"Путешествие", sub:"Travel and Transport",
 icon:"✈️", level:"A2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u12l1", title:"Транспорт", icon:"🚆", xp:15, board:true, steps:[

{type:"intro", title:"Modes of Transport",
 desc:"Russia spans 11 time zones. Transport vocabulary is essential — самолёт, поезд, метро, автобус. Each takes a specific preposition.",
 goals:["Name transport types","Use 'на' + transport","Understand famous Russian transit"]},

{type:"teach", trg:"путешествие", src:"journey / trip", pos:"noun", gender:"n",
 note:"NEUTER. Long word, stress on fourth syllable.\nFrom 'путь' (path).",
 example:"A: Как путешествие?\nB: Отлично, много впечатлений.",
 exampleSrc:"A: How was the trip?\nB: Great, lots of impressions.",
 funFact:"Путешествие vs поездка (shorter trip) vs поход (hiking trip). Путешествие implies significant, often international travel. A weekend getaway is a поездка."},

{type:"teach", trg:"самолёт", src:"airplane", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nLiterally: 'self-flyer.'",
 example:"A: Летишь на самолёте?\nB: Да, утром.",
 exampleSrc:"A: Are you flying on a plane?\nB: Yes, in the morning.",
 funFact:"Самолёт = 'self-flyer' (сам + лёт). Russian created its own word rather than borrowing. Aviation vocabulary in Russian is largely native: лётчик (pilot), крыло (wing)."},

{type:"teach", trg:"поезд", src:"train", pos:"noun", gender:"m",
 note:"Masculine. Short, common.\nPlural: поезда.",
 example:"A: В Москву на поезде?\nB: Да, ночной.",
 exampleSrc:"A: To Moscow by train?\nB: Yes, overnight.",
 funFact:"Trans-Siberian Railway (Транссиб) is 9,289 km — the world's longest continuous rail line. Moscow-Vladivostok takes 7 days. A quintessential Russian experience."},

{type:"teach", trg:"автобус", src:"bus", pos:"noun", gender:"m",
 note:"Masculine. Foreign origin.\nИз автобуса выхожу (I get off the bus).",
 example:"A: Едешь на автобусе?\nB: Нет, на метро быстрее.",
 exampleSrc:"A: Going by bus?\nB: No, faster by metro.",
 funFact:"Russian city buses have conductors (кондуктор) in some cities. Electronic cards like Тройка in Moscow, Подорожник in Petersburg make life easier for Russians and tourists."},

{type:"teach", trg:"машина", src:"car", pos:"noun", gender:"f",
 note:"Feminine. Also means 'machine' in general.\nFor car specifically: 'легковая машина.'",
 example:"A: У тебя есть машина?\nB: Да, купил в прошлом году.",
 exampleSrc:"A: Do you have a car?\nB: Yes, bought last year.",
 funFact:"Машина's broader meaning survives: 'стиральная машина' (washing machine), 'машинное обучение' (machine learning). Context clarifies whether it's a car."},

{type:"teach", trg:"метро", src:"metro", pos:"noun", gender:"n",
 note:"Indeclinable. No change in any case.\n'В метро' = in/to metro (same form).",
 example:"A: Как ехать в центр?\nB: На метро, станция 'Охотный ряд'.",
 exampleSrc:"A: How to get downtown?\nB: By metro, station 'Okhotny Ryad.'",
 funFact:"Moscow metro, opened 1935, is famous for its palatial stations — marble, mosaics, chandeliers. Stalin commissioned them as 'palaces for the people.' Still stunning today."},

{type:"teach", trg:"вокзал", src:"train station", pos:"noun", gender:"m",
 note:"Masculine. Major railway station.\nRegular station: станция.",
 example:"A: Какой вокзал для поездки в Петербург?\nB: Ленинградский.",
 exampleSrc:"A: Which station for the Petersburg trip?\nB: Leningradsky.",
 funFact:"Russian has specific words for different stations: вокзал (major railway), станция (smaller metro/train), остановка (bus stop). Moscow has 9 vokzals, each for different regions."},

{type:"teach", trg:"аэропорт", src:"airport", pos:"noun", gender:"m",
 note:"Masculine. Loanword but adapted.\nFor direction: 'в аэропорт.'",
 example:"A: Во сколько в аэропорт?\nB: В семь утра.",
 exampleSrc:"A: When to the airport?\nB: At seven in the morning.",
 funFact:"Russia has three major Moscow airports: Шереметьево (north), Домодедово (south), Внуково (west). Each serves different airlines and destinations."},

{type:"tip", title:"На + Transport: The Rule",
 text:"Russian uses НА (not 'в') + prepositional for modes of transport:\n\nНА САМОЛЁТЕ (by plane).\nНА ПОЕЗДЕ (by train).\nНА АВТОБУСЕ (by bus).\nНА МАШИНЕ (by car).\nНА МЕТРО (by metro — note metro doesn't change).\nНА ВЕЛОСИПЕДЕ (by bicycle).\n\nNOT 'в самолёте':\n'Я в самолёте' = I'm INSIDE the plane (physically inside now).\n'Я лечу на самолёте' = I'm traveling BY plane (mode of transport).\n\nThis 'на + transport' preposition is the #1 way Russians express transport mode. Solid pattern to master.\n\nHowever, ПЕШКОМ (on foot) doesn't take a preposition — it's an adverb alone.",
 deepDive:{title:"Russian Transport Culture",
  text:"Moscow and Petersburg metros are world-class, with frequent trains and cheap fares. Trains dominate long-distance travel — Russian Rail network covers the entire country. Domestic flights are cheaper than expected due to state subsidies. Cars are common but expensive to own in cities."}},

{type:"mc", q:"How do you say 'by train' in Russian?",
 opts:["в поезде","на поезд","на поезде","с поездом"],
 ans:"на поезде",
 hint:"'На' + prepositional case for mode of transport."},

{type:"mc", q:"Which word is indeclinable (never changes)?",
 opts:["поезд","машина","метро","автобус"],
 ans:"метро",
 hint:"Foreign loanword that resists Russian endings. Same form in all cases."},

{type:"fb", s:"A: В Париж на самолёте?\nB: Да, в {1} Шереметьево.",
 a:["аэропорт"],
 opts:["аэропорт","вокзал","метро","автобус"],
 hint:"Flying to Paris — you go to the [blank].",
 sSrc:"A: To Paris by plane?\nB: Yes, to Sheremetyevo airport."},

{type:"match", pairs:[
  {trg:"самолёт", src:"airplane"},
  {trg:"поезд", src:"train"},
  {trg:"метро", src:"metro"},
  {trg:"машина", src:"car"},
  {trg:"вокзал", src:"train station"}
]}
]},

{id:"ruv2_u12l2", title:"Билет и поездка", icon:"🎫", xp:15, board:true, steps:[

{type:"intro", title:"Tickets and Travel",
 desc:"Buy tickets, find your way, and handle travel logistics. Russian уникальный — the train booking culture has its own vocabulary.",
 goals:["Buy tickets","Ask for directions","Handle travel situations"]},

{type:"teach", trg:"билет", src:"ticket", pos:"noun", gender:"m",
 note:"Masculine. Generic — works for all transport.\nBut contextually specific: билет на поезд, билет в кино.",
 example:"A: Билет купил?\nB: Да, вот он.",
 exampleSrc:"A: Did you buy the ticket?\nB: Yes, here it is.",
 funFact:"Электронный билет (e-ticket) is increasingly standard. But Russians still value 'проездной' (monthly pass) for metros — cheaper and more convenient than single tickets."},

{type:"teach", trg:"купить билет", src:"to buy a ticket", pos:"phrase", gender:null,
 note:"Fixed phrase.\nCan say 'заказать билет' (book) for advance purchase.",
 example:"A: Где купить билет на поезд?\nB: На вокзале или онлайн.",
 exampleSrc:"A: Where to buy a train ticket?\nB: At the station or online.",
 funFact:"РЖД (Russian Railways) has ticket kiosks at every station. Online booking via RZD.ru is standard. Discount mechanism: раньше покупаешь — дешевле (earlier you buy — cheaper)."},

{type:"teach", trg:"расписание", src:"schedule / timetable", pos:"noun", gender:"n",
 note:"Neuter. Ends in -е.\nLong word, stress on third syllable.",
 example:"A: Где расписание?\nB: Вон там, на стене.",
 exampleSrc:"A: Where's the schedule?\nB: Over there, on the wall.",
 funFact:"Russian train station walls display детальное расписание (detailed schedules) — departures, arrivals, platforms, delays. Digital displays exist but paper schedules persist."},

{type:"teach", trg:"уходить", src:"to leave (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Pair: уйти.\nТrains and buses: 'уходит' (leaves, 3rd sg).",
 example:"A: Когда уходит поезд?\nB: В три часа.",
 exampleSrc:"A: When does the train leave?\nB: At three o'clock.",
 funFact:"Уходить is unidirectional 'go away.' With prefixes, many travel verbs: приходить (arrive on foot), выходить (exit), переходить (cross over)."},

{type:"teach", trg:"приходить", src:"to arrive (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Pair: прийти.\nDestination: 'в Москву' (to Moscow).",
 example:"A: Во сколько приходит поезд?\nB: В семь утра.",
 exampleSrc:"A: When does the train arrive?\nB: At seven in the morning.",
 funFact:"Russian arrival verbs differ from English — приходить is for walking/vehicle, прилетать for flying. Fine distinction but consistent."},

{type:"teach", trg:"быстро", src:"fast / quickly", pos:"adv", gender:null,
 note:"Adverb. Opposite of медленно.\nBoth describe transport speed.",
 example:"A: Быстро доехать?\nB: Час на такси.",
 exampleSrc:"A: Can we get there fast?\nB: An hour by taxi.",
 funFact:"Быстро (fast) + comparative быстрее (faster) + superlative самый быстрый (fastest). Adverb family: быстро, быстрый, быстрота, быстренько (quickly — diminutive). Rich word web."},

{type:"teach", trg:"медленно", src:"slowly", pos:"adv", gender:null,
 note:"Opposite of быстро.\nDouble consonant нн.",
 example:"A: Этот поезд медленно идёт.\nB: Да, ночной.",
 exampleSrc:"A: This train goes slowly.\nB: Yes, overnight.",
 funFact:"Russian distinguishes slow trains (скорый, медленный) by ticket class. 'Сапсан' trains are fastest; 'плацкартные' overnight trains are slowest and cheapest."},

{type:"teach", trg:"чемодан", src:"suitcase", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nFrom Persian via Turkish.",
 example:"A: Сколько у вас чемоданов?\nB: Три.",
 exampleSrc:"A: How many suitcases do you have?\nB: Three.",
 funFact:"Чемодан came from Turkey to Russia in the 17-18th centuries. In Russian airports and train stations, baggage handling is strict — always within weight limits."},

{type:"tip", title:"Asking About Travel Details",
 text:"Essential travel questions:\n\nWHEN?\nВо сколько? / Когда? (When?)\nВо сколько уходит поезд? (When does the train leave?)\n\nWHICH?\nКакой поезд? (Which train?)\nС какой платформы? (From which platform?)\n\nHOW MUCH?\nСколько стоит билет? (How much is the ticket?)\nСколько ехать? (How long is the trip?)\n\nWHERE?\nКуда идёт этот поезд? (Where does this train go?)\nГде вокзал? (Where is the station?)\n\nHELP:\nПомогите, пожалуйста. (Help please.)\nЯ опаздываю. (I'm late.)",
 icon:"🎫"},

{type:"mc", q:"How do you ask 'When does the train leave?' in Russian?",
 opts:["Сколько поезд уходит?","Когда поезд уходит?","Как поезд уходит?","Почему поезд уходит?"],
 ans:"Когда поезд уходит?",
 hint:"'When' = Когда. (Во сколько? would also work for specific time.)"},

{type:"mc", q:"What's the opposite of 'быстро' (fast)?",
 opts:["быстрый","медленно","сильно","спокойно"],
 ans:"медленно",
 hint:"The adverb pair fast/slowly. Think of pace."},

{type:"fb", s:"A: Где купить {1} на поезд?\nB: На вокзале или онлайн.",
 a:["билет"],
 opts:["билет","чемодан","расписание","поезд"],
 hint:"What do you need to travel? Transport requires a...",
 sSrc:"A: Where to buy a ticket for the train?\nB: At the station or online."},

{type:"match", pairs:[
  {trg:"билет", src:"ticket"},
  {trg:"расписание", src:"schedule"},
  {trg:"уходить", src:"to leave"},
  {trg:"приходить", src:"to arrive"},
  {trg:"чемодан", src:"suitcase"}
]}
]},

{id:"ruv2_u12l3", title:"В дороге", icon:"🛣️", xp:15, board:true, steps:[

{type:"intro", title:"On the Road",
 desc:"Vocabulary for being on the journey itself. Russian capturing the experience — road, direction, map, and asking for help.",
 goals:["Navigate road/directions","Ask about distance","Handle travel mishaps"]},

{type:"teach", trg:"дорога", src:"road / route", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nFamous idiom: счастливого пути (happy journey).",
 example:"A: Счастливой дороги!\nB: Спасибо, до встречи.",
 exampleSrc:"A: Have a good trip!\nB: Thanks, see you.",
 funFact:"Russian saying: 'на дороге' literally 'on the road' extends to 'waiting/on-the-way.' 'Встать на дорогу' = to get on one's way (depart). Rich road-related idioms."},

{type:"teach", trg:"путь", src:"path / way", pos:"noun", gender:"m",
 note:"MASCULINE (unusual — ends in ь).\nMore abstract than дорога.",
 example:"A: Долгий путь?\nB: Восемь часов.",
 exampleSrc:"A: A long way?\nB: Eight hours.",
 funFact:"Путь is unusual among -ь-ending nouns: masculine. Most -ь nouns are feminine. Путь has Indo-European roots (English path, Latin pons/pontis)."},

{type:"teach", trg:"направление", src:"direction", pos:"noun", gender:"n",
 note:"Neuter. Ends in -е.\nFrom прав- (right, true).",
 example:"A: В каком направлении?\nB: На север.",
 exampleSrc:"A: In which direction?\nB: North.",
 funFact:"Направление also means 'trend' or 'tendency' metaphorically. 'Новое направление в искусстве' = new trend in art. Common modern extension."},

{type:"teach", trg:"север", src:"north", pos:"noun", gender:"m",
 note:"Masculine. All cardinal directions are masculine.\n'На севере' = in the north.",
 example:"A: Где живёшь?\nB: На севере России.",
 exampleSrc:"A: Where do you live?\nB: In the north of Russia.",
 funFact:"Russia has vast northern regions (Сибирь, Арктика). 'Север' is central to Russian identity. Many songs and poems about the harsh beauty of the Russian north."},

{type:"teach", trg:"юг", src:"south", pos:"noun", gender:"m",
 note:"Masculine. 'На юг' = to the south.\nOpposite of север.",
 example:"A: Куда едешь летом?\nB: На юг, в Сочи.",
 exampleSrc:"A: Where are you going in summer?\nB: South, to Sochi.",
 funFact:"The south (юг) is traditionally where Russians go for warmth. 'Крым', 'Кавказ', 'Сочи' are the classic vacation spots. 'Южный берег' (southern coast) of Crimea is famous."},

{type:"teach", trg:"восток", src:"east", pos:"noun", gender:"m",
 note:"Masculine. From восход (sunrise).\n'Восток-Запад' = East-West.",
 example:"A: Далеко ехать?\nB: Восемь часов на восток.",
 exampleSrc:"A: Far to travel?\nB: Eight hours east.",
 funFact:"Дальний Восток (Far East) of Russia stretches from Pacific coast — 7,000 km from Moscow. Vladivostok, Khabarovsk, Kamchatka — remote, wild Russia."},

{type:"teach", trg:"запад", src:"west", pos:"noun", gender:"m",
 note:"Masculine. From закат (sunset).\nRussia has a long western border.",
 example:"A: Какие столицы на западе?\nB: Москва, Петербург.",
 exampleSrc:"A: Which capitals are in the west?\nB: Moscow, Petersburg.",
 funFact:"'Запад' carries strong associations in Russian discourse — 'Западная цивилизация' (Western civilization), 'западные ценности' (Western values). Central concept."},

{type:"teach", trg:"заблудиться", src:"to get lost", pos:"verb", gender:null,
 note:"Perfective. Reflexive (ся).\nЯ заблудился/заблудилась.",
 example:"A: Ты знаешь дорогу?\nB: Кажется, я заблудился.",
 exampleSrc:"A: Do you know the way?\nB: I think I'm lost.",
 funFact:"Заблудиться is culturally loaded — Russian has rich 'getting-lost' narratives (fairy tales, literature). 'Заблудиться в лесу' (lost in the forest) — classic folklore setup."},

{type:"teach", trg:"карта", src:"map", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nAlso means 'playing card' (гадать на картах).",
 example:"A: Где карта?\nB: В моём телефоне.",
 exampleSrc:"A: Where's the map?\nB: On my phone.",
 funFact:"Russians increasingly use digital maps: Яндекс Карты (most popular), 2ГИС (city-specific). 'Карта' covers both paper and digital. Each major Russian city has apps locals use."},

{type:"tip", title:"Cardinal Directions & Location",
 text:"The four cardinals in Russian:\n\nСЕВЕР (north)\nЮГ (south)\nВОСТОК (east)\nЗАПАД (west)\n\nCombinations:\nсеверо-запад (northwest)\nсеверо-восток (northeast)\nюго-запад (southwest)\nюго-восток (southeast)\n\nBefore going: В + ACCUSATIVE (direction).\nЯ еду на север. (I'm going north.)\n\nWHILE there: НА + PREPOSITIONAL (location).\nЯ живу на севере. (I live in the north.)\n\nThis preposition pattern is the SAME as everything else:\n• Direction (going TO) = 'в/на' + accusative.\n• Location (being AT) = 'в/на' + prepositional.\n\nOnce you master this distinction, most Russian spatial grammar falls into place.",
 icon:"🧭"},

{type:"mc", q:"Which direction is the opposite of 'запад'?",
 opts:["север","юг","восток","верх"],
 ans:"восток",
 hint:"East-West pair. Russian, like English, pairs these opposites."},

{type:"mc", q:"'I'm going north' in Russian uses which case?",
 opts:["Nominative","Genitive","Accusative (direction)","Dative"],
 ans:"Accusative (direction)",
 hint:"Motion to a place = ___. Я еду на север (___)."},

{type:"fb", s:"A: У тебя есть {1}?\nB: Да, в телефоне.",
 a:["карта"],
 opts:["карта","дорога","путь","вокзал"],
 hint:"'In my phone' — modern digital version of what?",
 sSrc:"A: Do you have a map?\nB: Yes, on my phone."},

{type:"fb", s:"A: Где ты?\nB: Кажется, я {1}.",
 a:["заблудился"],
 opts:["заблудился","нашёл","пришёл","поехал"],
 hint:"'I think I...' — worried answer about location means lost.",
 sSrc:"A: Where are you?\nB: I think I'm lost."},

{type:"match", pairs:[
  {trg:"дорога", src:"road"},
  {trg:"север", src:"north"},
  {trg:"юг", src:"south"},
  {trg:"восток", src:"east"},
  {trg:"запад", src:"west"}
]}
,{type:"match",pairs:[{trg:"путешествие",src:"journey / trip"},{trg:"быстро",src:"fast / quickly"},{trg:"путь",src:"path / way"},{trg:"направление",src:"direction"},{trg:"заблудиться",src:"to get lost"}]}]}

]};
export default UNIT_12;
