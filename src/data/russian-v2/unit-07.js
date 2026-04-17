// Russian V2 Unit 7 — Weather and Seasons (A2.1)
const UNIT_07 = {n:7, lang:"ru", srcLang:"en", track:"v2", title:"Погода", sub:"Weather and Seasons",
 icon:"🌤️", level:"A2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u7l1", title:"Погода сегодня", icon:"🌤️", xp:15, board:true, steps:[

{type:"intro", title:"Today's Weather",
 desc:"Russian weather vocabulary. Russia's extreme climate gives precise words for every variation. Impersonal constructions (мне холодно = to-me cold) appear frequently here.",
 goals:["Describe basic weather","Use impersonal forms","Know cold/hot extremes"]},

{type:"teach", trg:"погода", src:"weather", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nКакая сегодня погода? = What's the weather today?",
 example:"A: Какая сегодня погода?\nB: Холодно и солнечно.",
 exampleSrc:"A: What's the weather today?\nB: Cold and sunny.",
 funFact:"Russian weather vocabulary is famously rich. Inuit languages are known for many snow words, but Russian has over 30 specific terms for different types of cold, snow, and wind."},

{type:"teach", trg:"холодно", src:"(it is) cold", pos:"adv", gender:null,
 note:"IMPERSONAL form (no subject).\nUsed with dative: 'Мне холодно' (I'm cold).",
 example:"A: Тебе холодно?\nB: Да, очень холодно.",
 exampleSrc:"A: Are you cold?\nB: Yes, very cold.",
 funFact:"Russian uses 'мне холодно' (to-me cold) — the impersonal construction again. This applies to many feelings: мне жарко (hot), мне скучно (bored), мне весело (fun)."},

{type:"teach", trg:"жарко", src:"(it is) hot", pos:"adv", gender:null,
 note:"Impersonal form.\nOpposite of холодно.",
 example:"A: Не жарко тебе?\nB: Нет, мне нормально.",
 exampleSrc:"A: Aren't you hot?\nB: No, I'm fine.",
 funFact:"Жарко is distinct from 'горячо' (hot to the touch). Weather is жарко; soup is горячо. English uses 'hot' for both — Russian separates the concepts."},

{type:"teach", trg:"тепло", src:"warm", pos:"adv", gender:null,
 note:"Impersonal form.\nAlso used as noun: тепло = warmth (neuter).",
 example:"A: На улице тепло?\nB: Да, +20.",
 exampleSrc:"A: Is it warm outside?\nB: Yes, +20.",
 funFact:"Russians measure temperature in Celsius. +20 is comfortable summer; 0 is freezing; -20 is harsh winter. Discussing weather in exact numbers is standard."},

{type:"teach", trg:"прохладно", src:"cool", pos:"adv", gender:null,
 note:"Between тепло and холодно.\nLiterally: 'cool-ly.'",
 example:"A: Как сегодня?\nB: Прохладно, но приятно.",
 exampleSrc:"A: How is it today?\nB: Cool, but pleasant.",
 funFact:"Прохладно has a positive connotation — refreshing rather than uncomfortable. A sommer evening is 'прохладно' in a pleasant way, unlike 'холодно.'"},

{type:"teach", trg:"дождь", src:"rain", pos:"noun", gender:"m",
 note:"Masculine. Ends in ь (soft sign).\nSoft sign makes it look feminine but it's masculine.",
 example:"A: Идёт дождь?\nB: Да, большой дождь.",
 exampleSrc:"A: Is it raining?\nB: Yes, a heavy rain.",
 funFact:"Russian uses 'идёт дождь' (rain goes) for 'it's raining.' The same structure works for snow (идёт снег) and even time (идёт время = time goes)."},

{type:"teach", trg:"снег", src:"snow", pos:"noun", gender:"m",
 note:"Masculine. Short, hard consonant ending.\nИдёт снег = It's snowing.",
 example:"A: Завтра будет снег?\nB: Да, метель.",
 exampleSrc:"A: Will there be snow tomorrow?\nB: Yes, a blizzard.",
 funFact:"Russian has specific snow words: снег (general), пурга (blinding), метель (blizzard), буран (steppe blizzard), позёмка (low drifting). Each describes different snow conditions."},

{type:"teach", trg:"солнце", src:"sun", pos:"noun", gender:"n",
 note:"Neuter. Ends in -е.\nСилентный Л: 'SON-tse' (the л is silent).",
 example:"A: Есть солнце?\nB: Да, светит ярко.",
 exampleSrc:"A: Is there sun?\nB: Yes, shining brightly.",
 funFact:"The Л in солнце is silent — one of very few silent letters in Russian. Pronounced 'sontse.' Similarly Л is silent in 'здравствуйте' (both В and Л drop in fast speech)."},

{type:"teach", trg:"ветер", src:"wind", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nFleeting vowel: ветер → ветра (of wind).",
 example:"A: Сильный ветер?\nB: Да, очень.",
 exampleSrc:"A: Is the wind strong?\nB: Yes, very.",
 funFact:"The е in ветер is fleeting: it vanishes in genitive and other cases. Common pattern in Russian: ветер/ветра, день/дня, отец/отца."},

{type:"tip", title:"Russian Weather: Impersonal Constructions",
 text:"Russian weather uses IMPERSONAL forms. No subject needed.\n\nHere's are the main impersonal weather phrases:\nХолодно. (It's cold.)\nЖарко. (It's hot.)\nТепло. (It's warm.)\nПрохладно. (It's cool.)\n\nWith dative = personal perception:\nМне холодно. (I'm cold. / To-me cold.)\nЕй жарко. (She's hot.)\nНам тепло. (We're warm.)\n\nFor more specific weather, use 'Погода' + adjective:\nПогода холодная. (The weather is cold.)\nПогода тёплая. (The weather is warm.)",
 deepDive:{title:"Why Russian Loves Impersonality",
  text:"Russian impersonal constructions reflect a worldview where CONDITIONS happen to people, rather than people doing things. 'I'm cold' becomes 'to-me cold' because the coldness is the active force. This extends to emotions, desires, and obligations (нужно = 'it's needed,' не разрешается = 'it's not allowed')."}},

{type:"mc", q:"The correct Russian way to say 'I'm cold' is:",
 opts:["Я холодный","Мне холодно","Я есть холодно","Мне есть холодно"],
 ans:"Мне холодно",
 hint:"Russian uses impersonal construction with dative. Literally 'to-me cold.'"},

{type:"mc", q:"Which statement about Russian weather words is correct?",
 opts:["There's one word for all cold conditions","Russian has many precise weather terms","Weather words come from English","Weather words are invariable"],
 ans:"Russian has many precise weather terms",
 hint:"Russia's climate gave rise to specific ___ for different kinds of snow, wind, and cold."},

{type:"fb", s:"A: Сегодня очень {1}, надо куртку надеть.\nB: Да, минус пятнадцать.",
 a:["холодно"],
 opts:["холодно","жарко","тепло","прохладно"],
 hint:"Minus 15 and a jacket — what kind of weather is this?",
 sSrc:"A: It's very {1} today, need to wear a jacket.\nB: Yes, minus fifteen."},

{type:"match", pairs:[
  {trg:"погода", src:"weather"},
  {trg:"дождь", src:"rain"},
  {trg:"снег", src:"snow"},
  {trg:"солнце", src:"sun"},
  {trg:"ветер", src:"wind"}
]}
]},

{id:"ruv2_u7l2", title:"Времена года", icon:"🍂", xp:15, board:true, steps:[

{type:"intro", title:"Seasons",
 desc:"Russia's four seasons and the instrumental case of time. Each season has an instrumental form for 'in [season]': зимой, весной, летом, осенью.",
 goals:["Name four seasons","Use instrumental case for 'in spring/summer/etc'","Discuss weather by season"]},

{type:"teach", trg:"зима", src:"winter", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nStress shifts: зима (nom), зимы (gen), зимой (instr).",
 example:"A: Какая в Москве зима?\nB: Холодная, с большим снегом.",
 exampleSrc:"A: What's winter in Moscow like?\nB: Cold, with heavy snow.",
 funFact:"Russian winter is legendary: lasts 4-5 months in most regions. 'Генерал Мороз' (General Frost) is the Russian name for winter's military defense, credited with defeating Napoleon and Hitler."},

{type:"teach", trg:"весна", src:"spring", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nInstrumental: весной (in spring).",
 example:"A: Весной в Сибири тает снег.\nB: Да, и начинаются дожди.",
 exampleSrc:"A: In spring, snow melts in Siberia.\nB: Yes, and the rains begin.",
 funFact:"Russian spring is dramatic — 'распутица' (the rasputitsa, mud season) follows melting, making roads impassable. An ancient military strategy barrier."},

{type:"teach", trg:"лето", src:"summer", pos:"noun", gender:"n",
 note:"NEUTER. Ends in -о.\nInstrumental: летом (in summer).",
 example:"A: Ты поедешь на дачу летом?\nB: Конечно.",
 exampleSrc:"A: Will you go to the dacha in summer?\nB: Of course.",
 funFact:"Лето also means 'year' in old Russian (from Indo-European root). 'Мне 25 лет' literally means 'I'm 25 summers.' Модern Russian keeps this archaic meaning only in counting ages."},

{type:"teach", trg:"осень", src:"autumn / fall", pos:"noun", gender:"f",
 note:"Feminine. Ends in ь.\nInstrumental: осенью (in autumn).",
 example:"A: Люблю осень.\nB: Я тоже, особенно сентябрь.",
 exampleSrc:"A: I love autumn.\nB: Me too, especially September.",
 funFact:"'Золотая осень' (golden autumn) is Russia's most romanticized season. Pushkin wrote extensively about осень. Painters like Levitan captured it in famous landscapes."},

{type:"teach", trg:"зимой", src:"in winter", pos:"adv", gender:null,
 note:"Instrumental case of зима.\nNo preposition needed.",
 example:"A: Что вы делаете зимой?\nB: Катаемся на лыжах.",
 exampleSrc:"A: What do you do in winter?\nB: We ski.",
 funFact:"The 'no preposition + instrumental' pattern for time extends beyond seasons. Времена дня (times of day): утром, днём, вечером, ночью — all instrumental without prepositions."},

{type:"teach", trg:"летом", src:"in summer", pos:"adv", gender:null,
 note:"Instrumental case of лето.\nCompact, no preposition.",
 example:"A: Летом жарко в Москве?\nB: Иногда до плюс 30.",
 exampleSrc:"A: Is it hot in Moscow in summer?\nB: Sometimes up to plus 30.",
 funFact:"Moscow summers can reach 30+°C. The 2010 heat wave with 40°C temperatures broke all records. Russians traditionally cool off at the dacha (country house)."},

{type:"teach", trg:"месяц", src:"month", pos:"noun", gender:"m",
 note:"Masculine. Also means 'moon' poetically.\nPlural: месяцы.",
 example:"A: Сколько месяцев в году?\nB: Двенадцать месяцев.",
 exampleSrc:"A: How many months in a year?\nB: Twelve months.",
 funFact:"Месяц doubles as 'moon' in poetry. 'Новый месяц' = new moon. Modern Russian uses луна for moon in science, but месяц persists in folk songs and poetry."},

{type:"teach", trg:"год", src:"year", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nIrregular: год → года (2-4), лет (5+).",
 example:"A: Какой сейчас год?\nB: Две тысячи двадцать пятый.",
 exampleSrc:"A: What year is it?\nB: Two thousand twenty-five.",
 funFact:"Russian years count as ordinals: 'две тысячи двадцать пятый' = 2025. The neuter ordinal ending -ое stays fixed ('two thousand twenty-fifth год')."},

{type:"tip", title:"Seasons Use Instrumental Case",
 text:"Russian doesn't use 'in' with seasons. Instead, the season noun takes INSTRUMENTAL case:\n\nзима → зимой (in winter).\nвесна → весной (in spring).\nлето → летом (in summer).\nосень → осенью (in autumn).\n\nExamples:\nЗимой холодно. (In winter it's cold.)\nЯ еду в Сочи летом. (I'm going to Sochi in summer.)\n\nThe pattern extends to times of day:\nутром, днём, вечером, ночью (in the morning, etc.).\n\nNO PREPOSITION needed — the case ending itself carries the 'in' meaning. Very compact grammar.",
 icon:"🍂"},

{type:"mc", q:"'In summer' in Russian is:",
 opts:["в лето","летом","в летом","на лето"],
 ans:"летом",
 hint:"Seasons use instrumental case alone. No preposition required."},

{type:"mc", q:"What is 'лето' grammatically?",
 opts:["Masculine","Feminine","Neuter","Has no gender"],
 ans:"Neuter",
 hint:"It ends in -о, a standard ___ ending. Two other seasons are feminine, one more is feminine-like."},

{type:"fb", s:"A: Когда идёт снег?\nB: Снег идёт {1}.",
 a:["зимой"],
 opts:["зимой","летом","весной","осенью"],
 hint:"Which season is associated with snow?",
 sSrc:"A: When does it snow?\nB: It snows {1}."},

{type:"fb", s:"A: Какой сейчас {1}?\nB: Декабрь.",
 a:["месяц"],
 opts:["месяц","год","день","неделя"],
 hint:"December is the answer. What time unit does December represent?",
 sSrc:"A: What is the current {1}?\nB: December."},

{type:"match", pairs:[
  {trg:"зима", src:"winter"},
  {trg:"весна", src:"spring"},
  {trg:"лето", src:"summer"},
  {trg:"осень", src:"autumn"},
  {trg:"год", src:"year"}
]}
]},

{id:"ruv2_u7l3", title:"Прогноз погоды", icon:"📺", xp:15, board:true, steps:[

{type:"intro", title:"Weather Forecast",
 desc:"Describe changing weather and predictions. Use ясно (clear), облачно (cloudy), and common phrases Russians use in weather reports.",
 goals:["Describe weather conditions","Use 'будет' for future weather","Ask what weather will be like"]},

{type:"teach", trg:"ясно", src:"clear (sky)", pos:"adv", gender:null,
 note:"Impersonal form.\nДля weather: clear skies.",
 example:"A: На улице ясно?\nB: Да, солнечно.",
 exampleSrc:"A: Is it clear outside?\nB: Yes, sunny.",
 funFact:"'Ясно' alone (without погода) is a common response meaning 'clear/understood.' So 'ясно?' after an explanation means 'got it?'"},

{type:"teach", trg:"солнечно", src:"sunny", pos:"adv", gender:null,
 note:"Impersonal form.\nFrom солнце (sun) + -но adverb ending.",
 example:"A: Какая погода?\nB: Солнечно и тепло.",
 exampleSrc:"A: What's the weather?\nB: Sunny and warm.",
 funFact:"Russian forms many weather adverbs with -но: солнечно, облачно, ветрено. Same pattern makes feeling words: грустно (sad), весело (fun), интересно (interesting)."},

{type:"teach", trg:"облачно", src:"cloudy", pos:"adv", gender:null,
 note:"Impersonal.\nFrom облако (cloud) + -но.",
 example:"A: Дождь будет?\nB: Облачно, но пока сухо.",
 exampleSrc:"A: Will it rain?\nB: Cloudy, but dry for now.",
 funFact:"'Облачно с прояснениями' (cloudy with clearings) is classic weather-forecast Russian. Such phrases appear daily on news channels."},

{type:"teach", trg:"ветрено", src:"windy", pos:"adv", gender:null,
 note:"Impersonal.\nFrom ветер (wind) + -но.",
 example:"A: Завтра будет ветрено?\nB: Да, порывистый ветер.",
 exampleSrc:"A: Will it be windy tomorrow?\nB: Yes, gusty wind.",
 funFact:"Ветрено also metaphorically describes someone flighty or fickle. 'Ветреная голова' = flighty head (an inconsistent person)."},

{type:"teach", trg:"температура", src:"temperature", pos:"noun", gender:"f",
 note:"Feminine. International word.\nBoth weather temp AND fever.",
 example:"A: Какая температура на улице?\nB: Плюс пятнадцать.",
 exampleSrc:"A: What temperature outside?\nB: Plus fifteen.",
 funFact:"In medical context, 'температура' usually means fever (no number needed): 'у меня температура' = 'I have a fever.' Context determines meaning."},

{type:"teach", trg:"градус", src:"degree", pos:"noun", gender:"m",
 note:"Masculine. For temperature.\nGenitive plural: градусов (after 5+).",
 example:"A: Минус сколько?\nB: Минус десять градусов.",
 exampleSrc:"A: How many below zero?\nB: Minus ten degrees.",
 funFact:"Russia uses Celsius exclusively. 'Градус' shares root with 'Grad' (Stalingrad, Petrograd) — meaning 'city' via old Slavic route, coincidentally homophonous with temp degree."},

{type:"teach", trg:"плюс", src:"plus / above zero", pos:"prep", gender:null,
 note:"Also functions as preposition.\nПлюс десять = +10.",
 example:"A: Сколько на улице?\nB: Плюс двадцать — жарко.",
 exampleSrc:"A: How much outside?\nB: Plus twenty — hot.",
 funFact:"Russians state temperature with 'плюс' or 'минус' explicitly, unlike English which often omits. Even in summer, 'плюс тридцать' rather than just 'тридцать.'"},

{type:"teach", trg:"минус", src:"minus / below zero", pos:"prep", gender:null,
 note:"Opposite of плюс.\nCritical for Russian winters.",
 example:"A: Холодно?\nB: Очень. Минус тридцать!",
 exampleSrc:"A: Cold?\nB: Very. Minus thirty!",
 funFact:"Russian TV weather reporters say 'минус' even when it's obvious (like mid-January). It's linguistic precision that English doesn't require."},

{type:"teach", trg:"будет", src:"will be", pos:"verb", gender:null,
 note:"Future of быть (to be).\n3rd person singular.",
 example:"A: Что будет завтра?\nB: Будет дождь.",
 exampleSrc:"A: What will there be tomorrow?\nB: There will be rain.",
 funFact:"Будет is one form of быть — Russian has minimal present-tense быть but robust future. Russians memorize: буду, будешь, будет, будем, будете, будут."},

{type:"tip", title:"Weather in Future Tense",
 text:"For future weather, Russian uses БУДЕТ + phenomenon.\n\nExamples:\nБудет дождь. (It will rain.)\nБудет снег. (It will snow.)\nБудет холодно. (It will be cold.)\nБудет тепло. (It will be warm.)\n\nTo ask: Что будет завтра? (What will happen tomorrow?)\nOr: Какая будет погода завтра? (What weather will there be tomorrow?)\n\nThe future uses the same impersonal pattern as the present. The weather happens to you — it's not something anyone does.",
 icon:"🔮"},

{type:"mc", q:"How do you say 'It will be warm tomorrow'?",
 opts:["Завтра тепло","Завтра есть тепло","Завтра будет тепло","Завтра будем тепло"],
 ans:"Завтра будет тепло",
 hint:"Use будет (future of быть) + impersonal weather word."},

{type:"mc", q:"'+15°C' in Russian is:",
 opts:["Пятнадцать плюс","Пятнадцать градусов плюс","Плюс пятнадцать","Плюс пятнадцать градусов"],
 ans:"Плюс пятнадцать градусов",
 hint:"Order: плюс/минус + number + градусов. All three parts required."},

{type:"fb", s:"A: Какая температура?\nB: {1} двадцать градусов.",
 a:["Минус"],
 opts:["Минус","Плюс","Нет","Очень"],
 hint:"If cold weather is expected, and temperature is -20, which word?",
 sSrc:"A: What's the temperature?\nB: {1} twenty degrees."},

{type:"fb", s:"A: Какой прогноз на завтра?\nB: Завтра {1} снег.",
 a:["будет"],
 opts:["будет","есть","был","будут"],
 hint:"Forming the future with the proper form of 'быть' (to be) — singular phenomenon.",
 sSrc:"A: What's the forecast for tomorrow?\nB: Tomorrow it will snow."},

{type:"match", pairs:[
  {trg:"ясно", src:"clear"},
  {trg:"солнечно", src:"sunny"},
  {trg:"облачно", src:"cloudy"},
  {trg:"ветрено", src:"windy"},
  {trg:"температура", src:"temperature"}
]}
,

{type:"match", pairs:[
  {trg:"жарко", src:"(it is) hot"},
  {trg:"прохладно", src:"cool"}
]}]}

]};
export default UNIT_07;
