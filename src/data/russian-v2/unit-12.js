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
 example:"A: Как путешествие?\nB: Хорошо, я доволен.",
 exampleSrc:"A: How was the trip?\nB: Good, I'm happy.",
 funFact:"Путешествие vs поездка (shorter trip) vs поход (hiking trip). Путешествие implies significant, often international travel. A weekend getaway is a поездка."},

{type:"teach", trg:"самолёт", src:"airplane", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nLiterally: 'self-flyer.'",
 example:"A: Летишь на самолёте?\nB: Да, утром.",
 exampleSrc:"A: Are you flying on a plane?\nB: Yes, in the morning.",
 funFact:"Самолёт = 'self-flyer' (сам + лёт). Russian created its own word rather than borrowing. Aviation vocabulary in Russian is largely native: лётчик (pilot), крыло (wing)."},

{type:"teach", trg:"поезд", src:"train", pos:"noun", gender:"m",
 note:"Masculine. Short, common.\nPlural: поезда.",
 example:"A: В Москву на поезде?\nB: Да, хорошо.",
 exampleSrc:"A: To Moscow by train?\nB: Yes, great.",
 funFact:"Trans-Siberian Railway (Транссиб) is 9,289 km — the world's longest continuous rail line. Moscow-Vladivostok takes 7 days. A quintessential Russian experience."},

{type:"teach", trg:"автобус", src:"bus", pos:"noun", gender:"m",
 note:"Masculine. Foreign origin.\nИз автобуса выхожу (I get off the bus).",
 example:"A: Едешь на автобусе?\nB: Нет, на метро.",
 exampleSrc:"A: Going by bus?\nB: No, by metro.",
 funFact:"Russian city buses have conductors (кондуктор) in some cities. Electronic cards like Тройка in Moscow, Подорожник in Petersburg make life easier for Russians and tourists."},

{type:"teach", trg:"машина", src:"car", pos:"noun", gender:"f",
 note:"Feminine. Also means 'machine' in general.\nFor car specifically: 'легковая машина.'",
 example:"A: У тебя есть машина?\nB: Да, есть.",
 exampleSrc:"A: Do you have a car?\nB: Yes, I do.",
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
 example:"A: Где расписание?\nB: Вон там, рядом.",
 exampleSrc:"A: Where's the schedule?\nB: Over there, nearby.",
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
 example:"A: На автобусе быстро?\nB: Да, очень быстро.",
 exampleSrc:"A: Is the bus fast?\nB: Yes, very fast.",
 funFact:"Быстро (fast) + comparative быстрее (faster) + superlative самый быстрый (fastest). Adverb family: быстро, быстрый, быстрота, быстренько (quickly — diminutive). Rich word web."},

{type:"teach", trg:"медленно", src:"slowly", pos:"adv", gender:null,
 note:"Opposite of быстро.\nDouble consonant нн.",
 example:"A: Поезд идёт медленно?\nB: Да, очень медленно.",
 exampleSrc:"A: Does the train go slowly?\nB: Yes, very slowly.",
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
 example:"A: Путь далеко?\nB: Да, восемь часов.",
 exampleSrc:"A: Is the way far?\nB: Yes, eight hours.",
 funFact:"Путь is unusual among -ь-ending nouns: masculine. Most -ь nouns are feminine. Путь has Indo-European roots (English path, Latin pons/pontis)."},

{type:"teach", trg:"направление", src:"direction", pos:"noun", gender:"n",
 note:"Neuter. Ends in -е.\nFrom прав- (right, true).",
 example:"A: Какое направление?\nB: На север.",
 exampleSrc:"A: Which direction?\nB: North.",
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
 example:"A: Москва на западе?\nB: Да, на западе.",
 exampleSrc:"A: Is Moscow in the west?\nB: Yes, in the west.",
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

,

{id:"ruv2_u12l4_lett", title:"Неформальное письмо", icon:"✉️", xp:15, board:true, steps:[

{type:"intro", title:"Writing Short Informal Letters",
 desc:"Learn to write short informal letters and WhatsApp/Telegram messages in Russian. Essential for TRKI A2 and daily communication with friends and family.",
 goals:["Open a letter casually","Use common body phrases","Close with a warm farewell"]},

{type:"teach", trg:"Привет, [имя]!", src:"Hi, [name]! (casual letter opening)", pos:"intj", gender:null,
 note:"Standard informal opening.\nUse a comma after Привет, then the name.",
 example:"A: Привет, Катя!\nB: Привет! Как ты?",
 exampleSrc:"A: Hi, Katya!\nB: Hi! How are you?",
 funFact:"In Russian letters, the greeting is always followed by a comma, then the name. This punctuation rule differs from English, where we use a colon in formal and a comma in informal letters."},

{type:"teach", trg:"Как ты?", src:"How are you? (informal)", pos:"intj", gender:null,
 note:"Short casual check-in.\nMost common in messages and informal letters.",
 example:"A: Привет! Как ты?\nB: Всё хорошо, спасибо!",
 exampleSrc:"A: Hi! How are you?\nB: All good, thanks!",
 funFact:"Как ты? is the informal version; the formal equivalent is Как вы? Russians tend to ask this as a genuine question, not just a greeting filler as in English."},

{type:"teach", trg:"Надеюсь, у тебя всё хорошо", src:"I hope all is well with you", pos:"intj", gender:null,
 note:"Warm body opener for letters and messages.\nLiteral meaning: I hope, at you everything good.",
 example:"A: Надеюсь, у тебя всё хорошо!\nB: Да, спасибо!",
 exampleSrc:"A: I hope all is well with you!\nB: Yes, thanks!",
 funFact:"Надеюсь comes from the verb надеяться (to hope). The phrase pattern у тебя всё хорошо uses the dative у + pronoun to express possession of a state, a core Russian construction."},

{type:"tip", title:"Informal vs Formal Letter Openings",
 text:"INFORMAL (to friends, family, classmates):\nПривет, [name]! — Hi, [name]!\nКак ты? — How are you?\nНадеюсь, у тебя всё хорошо — I hope all is well with you.\n\nFORMAL (to teachers, bosses, strangers):\nУважаемый/Уважаемая [name] — Dear [name] (m/f)\nС уважением — With respect\n\nFor WhatsApp and Telegram, informal forms are standard even with semi-acquaintances.",
 deepDive:"The informal register in Russian letters maps to тыкание (using ты). The formal register uses вы. Once you switch to ты with someone, informal letter openings are expected. Switching back to вы in writing would seem cold or ironic."},

{type:"teach", trg:"До скорого", src:"See you soon / Until soon", pos:"intj", gender:null,
 note:"Casual farewell used in messages and letters.\nMore specific than Пока — implies you will meet again soon.",
 example:"A: Пока! До скорого!\nB: До скорого!",
 exampleSrc:"A: Bye! See you soon!\nB: See you soon!",
 funFact:"До скорого is short for до скорого свидания (until a quick meeting). Russians drop свидания in casual speech, just like До свидания loses its До in very casual Пока. Скорого is the genitive of скорый (quick/soon)."},

{type:"teach", trg:"Обнимаю", src:"I hug you (warm letter closing)", pos:"intj", gender:null,
 note:"First-person singular of обнимать (to hug).\nUsed as a warm informal closing.",
 example:"A: Пока! Обнимаю!\nB: Обнимаю тебя!",
 exampleSrc:"A: Bye! I hug you!\nB: I hug you!",
 funFact:"Using a verb form (I hug / I kiss) as a letter closing is a distinctly Slavic and Romance convention. English speakers say 'Hugs' (noun) but Russian and French use the first-person verb, making the action personal and direct."},

{type:"teach", trg:"Целую", src:"I kiss you (affectionate letter closing)", pos:"intj", gender:null,
 note:"From целовать (to kiss).\nUsed between close friends and family in letters.",
 example:"A: Пока! Целую!\nB: Целую!",
 exampleSrc:"A: Bye! Kisses!\nB: Kisses!",
 funFact:"Целую is natural between female friends and across genders in close family. Male friends typically use Обнимаю or Пока. Using Целую with an acquaintance would feel unexpectedly intimate."},

{type:"teach", trg:"С любовью", src:"With love (letter sign-off)", pos:"intj", gender:null,
 note:"Common warm closing before signing your name.\nС = with + любовью (instrumental of любовь).",
 example:"A: С любовью, Маша.\nB: С любовью, Саша.",
 exampleSrc:"A: With love, Masha.\nB: With love, Sasha.",
 funFact:"С любовью uses the instrumental case of любовь (love). The instrumental often expresses manner — 'with what' something is done or said. Other closings follow the same pattern: С уважением (With respect), С надеждой (With hope)."},

{type:"mc", q:"Which opening is correct for an informal Russian letter to a friend?",
 opts:["Привет, Катя!","Уважаемый Катя,","Катя: Привет","Катя, здравствуй"],
 ans:"Привет, Катя!",
 hint:"A comma follows the greeting, then the recipient's name in Cyrillic."},

{type:"fb", s:"{1}, у тебя всё хорошо!", a:"Надеюсь",
 opts:["Надеюсь","Привет","Пока","Целую"],
 hint:"The phrase opener meaning 'I hope' starts this warm body sentence."},

{type:"fb", s:"Пока! {1} скорого!", a:"До",
 opts:["До","На","За","От"],
 hint:"The farewell phrase means 'Until soon' — which preposition starts it?"},

{type:"mc", q:"How do you ask 'How are you?' informally in a message?",
 opts:["Как ты?","Как вы?","Как дела у вас?","Здравствуй?"],
 ans:"Как ты?",
 hint:"The informal second-person pronoun marks the casual register."},

{type:"fb", s:"Тепло и {1}, Анна.", a:"Обнимаю",
 opts:["Обнимаю","Целую","Привет","Надеюсь"],
 hint:"A warm verb closing meaning 'I hug you' fits after тепло и."},

{type:"mc", q:"Which closing means 'I kiss you' — used between close friends in a letter?",
 opts:["Целую","Обнимаю","Пока","Привет"],
 ans:"Целую",
 hint:"From целовать. A first-person verb form used as an affectionate sign-off."},

{type:"fb", s:"С {1}, Маша.", a:"любовью",
 opts:["любовью","работой","домом","водой"],
 hint:"The letter sign-off 'With love' uses the instrumental case of love."},

{type:"match", pairs:[
  {trg:"Привет, [имя]!", src:"Hi, [name]! (casual opening)"},
  {trg:"Как ты?", src:"How are you? (informal)"},
  {trg:"До скорого", src:"See you soon"},
  {trg:"Обнимаю", src:"I hug you (closing)"},
  {trg:"С любовью", src:"With love"}
]}

]}

,{id:"ruv2_u12l_body_kitchen", title:"Тело и кухня", icon:"🍽️", xp:20, board:true, steps:[

{type:"intro", title:"Body and Kitchen",
 desc:"Finish the body vocabulary gap (ears, hair, heart) and build the kitchen scene: appliances, utensils, and the two most essential cooking verbs. A2 household essentials.",
 goals:["Name ears, hair, and heart in Russian","Identify key kitchen items","Use готовить and мыть in context"]},

{type:"teach", trg:"уши", src:"ears", pos:"noun", gender:"pl",
 note:"Plural only in everyday use. Singular: ухо (neuter).\nAllway stressed on first syllable.",
 example:"A: Болят уши?\nB: Да, болят.",
 exampleSrc:"A: Do your ears hurt?\nB: Yes, they do.",
 funFact:"The singular ухо (ear) is one of the few Russian nouns with a suppletive plural: уши (not ухи). Same pattern as глаз (eye) — глаза. Russian grammar regularly replaces singular stems in plurals."},

{type:"teach", trg:"волосы", src:"hair", pos:"noun", gender:"pl",
 note:"Plural in everyday use. Singular волос (one strand) is rare.\nFeminine declension in plural.",
 example:"A: Где твои волосы?\nB: Вот мои волосы.",
 exampleSrc:"A: Where is your hair?\nB: Here is my hair.",
 funFact:"Russians distinguish волосы (hair on the head) from шерсть (animal fur) and щетина (stubble). Hair color is described with adjectives: рыжие (red/ginger), светлые (light/blonde), тёмные (dark)."},

{type:"teach", trg:"сердце", src:"heart", pos:"noun", gender:"n",
 note:"Neuter. The silent Д: сердце pronounced 'sertse'.\nGenitive: сердца.",
 example:"A: Сердце болит?\nB: Нет, всё хорошо.",
 exampleSrc:"A: Does your heart hurt?\nB: No, everything is fine.",
 funFact:"Сердце appears constantly in Russian culture: 'от всего сердца' (from the bottom of one's heart), 'сердечный' (heartfelt/cardiac). The silent Д preserves an older form — the root is ancient Slavic."},

{type:"teach", trg:"кухня", src:"kitchen", pos:"noun", gender:"f",
 note:"Feminine. Ends in -я.\nAlso means 'cuisine': русская кухня (Russian cuisine).",
 example:"A: Ты где?\nB: На кухне.",
 exampleSrc:"A: Where are you?\nB: In the kitchen.",
 funFact:"Кухня carries a double meaning: the room AND the culinary tradition. Saying 'японская кухня' means Japanese cuisine, not a Japanese kitchen. This dual use is common in European languages."},

{type:"teach", trg:"холодильник", src:"fridge", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nLiterally: 'cooler' from холодный (cold).",
 example:"A: Суп в холодильнике?\nB: Да, там.",
 exampleSrc:"A: Is the soup in the fridge?\nB: Yes, it's there.",
 funFact:"Холодильник is a native compound word: холодный (cold) + suffix. Russians often say 'хол' for short in casual speech. The first Soviet mass-produced fridge appeared in 1951 — before that, ледник (ice cellar) was used."},

{type:"teach", trg:"тарелка", src:"plate / bowl", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nGlazed ceramic plates are тарелки, deep soup bowls too.",
 example:"A: Где тарелка?\nB: Вон тарелка.",
 exampleSrc:"A: Where is the plate?\nB: There is the plate.",
 funFact:"Тарелка covers both flat plates and deep bowls in Russian. 'Тарелка супа' = a bowl of soup. The word entered Russian from German 'Teller' in the 18th century alongside European dining customs."},

{type:"teach", trg:"вилка", src:"fork", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nAlso means 'plug' (electric plug) — same word!",
 example:"A: Дай мне вилку.\nB: Вот, пожалуйста.",
 exampleSrc:"A: Pass me the fork.\nB: Here you go.",
 funFact:"Вилка means both 'fork' and 'electrical plug' — because both look like a forked object. This polysemy is intentional: the word root refers to a Y-shape. Context always clarifies which meaning."},

{type:"teach", trg:"нож", src:"knife", pos:"noun", gender:"m",
 note:"Masculine. Short, ends in ж.\nGenitive: ножа. Plural: ножи.",
 example:"A: Где нож?\nB: Нож там, рядом.",
 exampleSrc:"A: Where is the knife?\nB: The knife is there, nearby.",
 funFact:"Russian knives (ножи) have deep cultural history — from the казацкий нож (Cossack knife) to Soviet-era кухонные ножи (kitchen knives). The word traces to Proto-Slavic, related to English 'gnaw.'"},

{type:"teach", trg:"готовить", src:"to cook / prepare", pos:"verb", gender:null,
 note:"Imperfective. Я готовлю — note the чередование (ь→л).\nPair: приготовить (perfective).",
 example:"A: Ты любишь готовить?\nB: Да, я готовлю суп.",
 exampleSrc:"A: Do you like to cook?\nB: Yes, I am cooking soup.",
 funFact:"Готовить also means 'to prepare' in any context — not just food. 'Готовить урок' (to prepare a lesson), 'готовить план' (to prepare a plan). The food meaning is just the most common."},

{type:"teach", trg:"мыть", src:"to wash", pos:"verb", gender:null,
 note:"Imperfective. Я мою, ты моешь — vowel pattern.\nReflexive: мыться (to wash oneself).",
 example:"A: Надо мыть тарелку?\nB: Да, надо.",
 exampleSrc:"A: Do we need to wash the plate?\nB: Yes, we do.",
 funFact:"Мыть (to wash objects) vs мыться (to wash oneself) is a productive Russian pattern. Adding -ся makes a transitive verb reflexive. 'Мою руки' (I wash my hands), 'Мою посуду' (I wash the dishes)."},

{type:"tip", title:"Kitchen Nouns: Gender Patterns",
 text:"Quick gender review for kitchen vocabulary:\n\nFEMININE (-а/-я ending):\nкухня — kitchen\nтарелка — plate\nвилка — fork\nложка — spoon\nчашка — cup\n\nMASCULINE (consonant ending):\nхолодильник — fridge\nнож — knife\nстакан — glass\nчайник — kettle\n\nGender matters because it controls adjective agreement:\nострый нож (sharp knife — masc)\nострая вилка (sharp fork — fem)\n\nThe visual trick: -а/-я at the end almost always = feminine. Consonant at end = usually masculine.",
 deepDive:{title:"Готовить vs Варить vs Жарить",
  text:"Russian distinguishes cooking methods precisely:\nготовить — to cook (general, any method)\nварить — to boil (soup, pasta, eggs in water)\nжарить — to fry (in a pan with oil)\nпечь — to bake (in oven)\n\nSaying 'я готовлю суп' is correct but vague. Native speakers might say 'я варю суп' (I'm boiling soup). At A2 level, готовить covers all. At B1+, precision is expected."}},

{type:"mc", q:"Which noun is masculine?",
 opts:["тарелка","кухня","нож","вилка"],
 ans:"нож",
 hint:"Look at the ending — masculine nouns usually end in a consonant."},

{type:"mc", q:"What does 'вилка' mean BESIDES fork?",
 opts:["knife","electrical plug","spoon","kettle"],
 ans:"electrical plug",
 hint:"Think of the shape — both objects share a forked, Y-like form."},

{type:"fb", s:"A: Суп в {1}?\nB: Да, там.",
 a:["холодильнике"],
 opts:["холодильнике","кухне","тарелке","доме"],
 hint:"Where do you store leftover soup to keep it cold? The [blank] keeps things cold.",
 sSrc:"A: Is the soup in the fridge?\nB: Yes, it's there."},

{type:"fb", s:"A: Ты любишь {1}?\nB: Да, особенно мясо.",
 a:["готовить"],
 opts:["готовить","мыть","болеть","любить"],
 hint:"The question is about enjoying [blank] food. What verb means to cook?",
 sSrc:"A: Do you like to cook?\nB: Yes, especially meat."},

{type:"mc", q:"Which body part has a SILENT consonant in pronunciation?",
 opts:["уши","волосы","сердце","кухня"],
 ans:"сердце",
 hint:"Pronounced 'sertse' — one letter is silent. A spelling vs. pronunciation mismatch."},

{type:"fb", s:"A: Болят {1}?\nB: Да, болят.",
 a:["уши"],
 opts:["уши","волосы","сердце","тарелка"],
 hint:"Which body part, always in plural form, would hurt after loud noise?",
 sSrc:"A: Do your ears hurt?\nB: Yes, they do."},

{type:"mc", q:"Надо мыть тарелку. What does this sentence mean?",
 opts:["You need to cook the plate","You need to wash the plate","You need to find the plate","You need to buy the plate"],
 ans:"You need to wash the plate",
 hint:"Мыть describes cleaning dishes under water. Надо = it is necessary to..."},

{type:"fb", s:"A: Надо мыть {1}?\nB: Да, надо.",
 a:["тарелку"],
 opts:["тарелку","суп","хлеб","нож"],
 hint:"The thing you just ate off of — the flat dish — needs cleaning. What is it?",
 sSrc:"A: Do we need to wash the plate?\nB: Yes, we do."},

{type:"match", pairs:[
  {trg:"уши", src:"ears"},
  {trg:"волосы", src:"hair"},
  {trg:"сердце", src:"heart"},
  {trg:"кухня", src:"kitchen"},
  {trg:"холодильник", src:"fridge"}
]},

{type:"match", pairs:[
  {trg:"тарелка", src:"plate"},
  {trg:"вилка", src:"fork"},
  {trg:"нож", src:"knife"},
  {trg:"готовить", src:"to cook"},
  {trg:"мыть", src:"to wash"}
]}

]}

]};
export default UNIT_12;
