// Russian V2 Unit 5 — Daily Life and Time (A1.2)
const UNIT_05 = {n:5, lang:"ru", srcLang:"en", track:"v2", title:"Каждый день", sub:"Daily Life and Time",
 icon:"🌅", level:"A1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u5l1", title:"Время дня", icon:"🕐", xp:15, board:true, steps:[

{type:"intro", title:"Times of Day",
 desc:"Russian has distinct words for today, yesterday, tomorrow, and each period of the day. Master these to talk about when things happen.",
 goals:["Use сегодня, вчера, завтра","Name parts of the day","Understand the instrumental case pattern for times"]},

{type:"teach", trg:"сегодня", src:"today", pos:"adv", gender:null,
 note:"Stress on second: se-VOD-nya.\nThe Г is pronounced as В in this word.",
 example:"A: Что ты делаешь сегодня?\nB: Сегодня я работаю.",
 exampleSrc:"A: What are you doing today?\nB: Today I'm working.",
 funFact:"The Г→В pronunciation rule affects only three words: сегодня (today), его (his), and the adjective ending -ого. Anywhere else, Г = G."},

{type:"teach", trg:"вчера", src:"yesterday", pos:"adv", gender:null,
 note:"Stress on last: fche-RA.\nCommon opening word for stories.",
 example:"A: Что ты делал вчера?\nB: Вчера я был в кино.",
 exampleSrc:"A: What did you do yesterday?\nB: Yesterday I was at the cinema.",
 funFact:"Russians often open anecdotes with 'Вчера...' (Yesterday...) — similar to English storytelling. It signals a complete past narrative is coming."},

{type:"teach", trg:"завтра", src:"tomorrow", pos:"adv", gender:null,
 note:"Stress on first: ZAV-tra.\nLiterally means 'at-dawn' (за + утро).",
 example:"A: Ты приедешь завтра?\nB: Да, завтра вечером.",
 exampleSrc:"A: Will you come tomorrow?\nB: Yes, tomorrow evening.",
 funFact:"Завтра comes from за (behind) + утро (morning) — 'beyond this morning.' Similar compound logic creates позавчера (day before yesterday) and послезавтра (day after tomorrow)."},

{type:"teach", trg:"сейчас", src:"now", pos:"adv", gender:null,
 note:"Stress on last: sey-CHAS.\nContains 'час' (hour) as a component.",
 example:"A: Что ты делаешь сейчас?\nB: Сейчас я читаю книгу.",
 exampleSrc:"A: What are you doing now?\nB: Now I'm reading a book.",
 funFact:"Сейчас literally means 'this-hour.' It's often drawn out in casual speech to 'сейча-а-ас' meaning 'just a moment' — the Russian equivalent of 'hang on.'"},

{type:"teach", trg:"утром", src:"in the morning", pos:"adv", gender:null,
 note:"Instrumental case form of утро (morning).\nRussian uses instrumental for time-of-day expressions.",
 example:"A: Когда ты встаёшь?\nB: Утром, в семь часов.",
 exampleSrc:"A: When do you get up?\nB: In the morning, at seven o'clock.",
 funFact:"Russian doesn't say 'in the morning' with a preposition — it uses the instrumental case of 'morning' alone. This extends to all times of day: утром, днём, вечером, ночью."},

{type:"teach", trg:"днём", src:"in the afternoon / during the day", pos:"adv", gender:null,
 note:"Instrumental of день (day).\nIncludes noon through late afternoon.",
 example:"A: Мы можем встретиться днём?\nB: Да, в три часа.",
 exampleSrc:"A: Can we meet in the afternoon?\nB: Yes, at three o'clock.",
 funFact:"Днём covers both 'during the day' and 'in the afternoon.' It's more flexible than English, roughly 10am-6pm. Приём днём = 'afternoon reception.'"},

{type:"teach", trg:"вечером", src:"in the evening", pos:"adv", gender:null,
 note:"Instrumental of вечер (evening).\nFrom about 6pm to bedtime.",
 example:"A: Что ты делаешь вечером?\nB: Вечером я обычно смотрю телевизор.",
 exampleSrc:"A: What do you do in the evening?\nB: In the evening I usually watch TV.",
 funFact:"Вечер also names the social event — an evening gathering. 'Литературный вечер' = literary evening (reading). 'Торжественный вечер' = formal evening event."},

{type:"teach", trg:"ночью", src:"at night", pos:"adv", gender:null,
 note:"Instrumental of ночь (night).\nFrom bedtime to dawn.",
 example:"A: Он работает ночью?\nB: Да, он ночной сторож.",
 exampleSrc:"A: Does he work at night?\nB: Yes, he's a night watchman.",
 funFact:"Russian has a midnight-specific greeting: 'Спокойной ночи!' (Good night!) — literally 'peaceful night.' It's only said before sleep, never as a greeting."},

{type:"tip", title:"Time Expressions Without Prepositions",
 text:"English: 'I work IN THE morning.' Russian: 'Я работаю УТРОМ.' No preposition needed!\n\nInstrumental case alone = 'during [this time].'\nУтром (morning) → in the morning.\nДнём (day) → during the day.\nВечером (evening) → in the evening.\nНочью (night) → at night.\n\nAlso applies to seasons:\nЗимой (winter) → in winter.\nВесной (spring) → in spring.\nЛетом (summer) → in summer.\nОсенью (autumn) → in autumn.\n\nThis is your first taste of the instrumental case — one of Russia's 6 cases. You'll meet it formally in B1.",
 icon:"🎯"},

{type:"mc", q:"How do you say 'tomorrow evening' in Russian?",
 opts:["завтра вечер","завтра вечером","в завтра вечер","завтра на вечере"],
 ans:"завтра вечером",
 hint:"'Tomorrow' is already an adverb. Add the instrumental form of 'evening' — no preposition."},

{type:"mc", q:"Which word contains the Г→В pronunciation rule?",
 opts:["завтра","вчера","сегодня","сейчас"],
 ans:"сегодня",
 hint:"One of only three words (plus -ого adjective endings) where Г sounds like V in Russian."},

{type:"fb", s:"A: Когда ты встаёшь?\nB: Я встаю {1}, в восемь часов.",
 a:["утром"],
 opts:["утром","вечером","ночью","днём"],
 hint:"'At eight o'clock' suggests a specific time of day. What word fits with 'getting up at 8am'?",
 sSrc:"A: When do you get up?\nB: I get up {1}, at eight o'clock."},

{type:"match", pairs:[
  {trg:"сегодня", src:"today"},
  {trg:"вчера", src:"yesterday"},
  {trg:"завтра", src:"tomorrow"},
  {trg:"сейчас", src:"now"},
  {trg:"утром", src:"in the morning"}
]}
]},

{id:"ruv2_u5l2", title:"Часы и минуты", icon:"⏰", xp:15, board:true, steps:[

{type:"intro", title:"Telling Time",
 desc:"Russian time uses the preposition 'в' (at) + nominative for on-the-hour, with different patterns for half-hour and quarter-hour. Learn час (hour) and минута (minute) plus basic time questions.",
 goals:["Ask 'what time is it?'","Express clock hours","Use the в + time pattern"]},

{type:"teach", trg:"час", src:"hour / o'clock", pos:"noun", gender:"m",
 note:"Masculine. Used for telling time.\nSpecial genitive plural: часов (after 5+).",
 example:"A: Который час?\nB: Час дня.",
 exampleSrc:"A: What time is it?\nB: One o'clock (in the afternoon).",
 funFact:"'Один час' (one hour) is abbreviated to just 'час' when telling time. So 1pm = 'час дня' not 'один час дня.' This applies only at telling time."},

{type:"teach", trg:"минута", src:"minute", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nGenitive plural: минут (used after 5+).",
 example:"A: Сколько осталось?\nB: Десять минут.",
 exampleSrc:"A: How much time is left?\nB: Ten minutes.",
 funFact:"'Пятнадцать минут' (15 minutes) uses the gen-plural минут. But '2-4 minutes' uses gen-singular минуты: 'две минуты.' The number pattern from Unit 2 applies here too."},

{type:"teach", trg:"Который час?", src:"What time is it?", pos:"phrase", gender:null,
 note:"Literally: 'which hour?'\nFormal, standard way to ask.",
 example:"A: Который час?\nB: Сейчас три часа.",
 exampleSrc:"A: What time is it?\nB: It's three o'clock now.",
 funFact:"More casually: 'Сколько времени?' (How much time?) — also standard. Both work. 'Сколько времени?' is marginally more common in everyday speech."},

{type:"teach", trg:"в", src:"at / in / to", pos:"prep", gender:null,
 note:"Time-specific: 'at X o'clock' = 'в X часов.'\nTakes nominative for hours (exception pattern).",
 example:"A: Когда встреча?\nB: В пять часов.",
 exampleSrc:"A: When is the meeting?\nB: At five o'clock.",
 funFact:"В is one of the most common Russian prepositions. It takes different cases: accusative for motion/time ('в школу' = to school, 'в пять' = at 5), prepositional for location ('в школе' = at school)."},

{type:"teach", trg:"рано", src:"early", pos:"adv", gender:null,
 note:"Can mean 'early in the day' or 'too early.'\nOpposite: поздно (late).",
 example:"A: Это слишком рано?\nB: Нет, в семь — нормально.",
 exampleSrc:"A: Is that too early?\nB: No, seven is fine.",
 funFact:"Рано вставать (to get up early) is a cultural value. The Russian saying 'кто рано встаёт, тому Бог подаёт' means 'the early bird gets the worm.'"},

{type:"teach", trg:"поздно", src:"late", pos:"adv", gender:null,
 note:"Literally: 'late' in time.\nCommonly: 'поздно уже' = 'it's already late.'",
 example:"A: Уже поздно?\nB: Да, почти полночь.",
 exampleSrc:"A: Is it late already?\nB: Yes, almost midnight.",
 funFact:"'Лучше поздно, чем никогда' (better late than never) — a Russian idiom taken directly from the Latin. Used in the same situations as in English."},

{type:"teach", trg:"всегда", src:"always", pos:"adv", gender:null,
 note:"Stress: fse-g-DA.\nPositive counterpart of никогда (never).",
 example:"A: Ты всегда встаёшь в семь?\nB: Да, всегда.",
 exampleSrc:"A: Do you always get up at seven?\nB: Yes, always.",
 funFact:"Russian frequency adverbs form a spectrum: всегда (always) > часто (often) > иногда (sometimes) > редко (rarely) > никогда (never). Each is a single word — no complex 'every so often' phrases."},

{type:"teach", trg:"никогда", src:"never", pos:"adv", gender:null,
 note:"Requires double negative: 'я никогда НЕ...'\nRussian negative words always pair with не.",
 example:"A: Ты ешь мясо?\nB: Нет, я никогда не ем мясо.",
 exampleSrc:"A: Do you eat meat?\nB: No, I never eat meat.",
 funFact:"Russian REQUIRES double negatives for grammatical correctness. 'I never eat nothing' is the correct form. Single negatives would be ungrammatical."},

{type:"tip", title:"Telling Time: Simple Patterns",
 text:"Basic time expressions follow patterns based on the ending digit:\n\n'IT'S X O'CLOCK' — number + час/часа/часов:\n1 = Час. (one o'clock).\n2-4 = Два часа, три часа, четыре часа.\n5-20 = Пять часов, десять часов.\n\n'AT X O'CLOCK' — в + number + час/часа/часов:\nВ час. (at 1).\nВ два часа. (at 2).\nВ пять часов. (at 5).\n\nAM/PM clarifiers:\nутра (in the morning): 6-12am.\nдня (in the afternoon): 12-5pm.\nвечера (in the evening): 5-11pm.\nночи (at night): 11pm-6am.\n\nSo '3 PM' = 'три часа дня' (three o'clock of-day).",
 icon:"⏰"},

{type:"mc", q:"How do you ask 'What time is it?' in Russian?",
 opts:["Что время?","Который час?","В какое время?","Что часы?"],
 ans:"Который час?",
 hint:"Literally 'which hour?' The other common way is 'Сколько времени?'"},

{type:"mc", q:"'At 5 o'clock' in Russian is:",
 opts:["В пять часов","Пять часов","На пять час","За пять часов"],
 ans:"В пять часов",
 hint:"Use 'в' + number + genitive plural 'часов' (since 5+ takes gen pl)."},

{type:"fb", s:"A: Когда ты ложишься спать?\nB: Я всегда ложусь {1}.",
 a:["поздно"],
 opts:["поздно","рано","никогда","вечером"],
 hint:"The sentence 'I always go to bed [blank]' could mean early or late. Given the context of 'всегда' (always), something consistent.",
 sSrc:"A: When do you go to bed?\nB: I always go to bed {1}."},

{type:"fb", s:"A: Ты пьёшь кофе по утрам?\nB: Нет, я {1} не пью кофе.",
 a:["никогда"],
 opts:["никогда","всегда","иногда","рано"],
 hint:"The answer starts with 'Нет' (no). The word must be a strong negative (pairs with the не).",
 sSrc:"A: Do you drink coffee in the mornings?\nB: No, I never drink coffee."},

{type:"match", pairs:[
  {trg:"час", src:"hour/o'clock"},
  {trg:"минута", src:"minute"},
  {trg:"рано", src:"early"},
  {trg:"поздно", src:"late"},
  {trg:"всегда", src:"always"}
]}
]},

{id:"ruv2_u5l3", title:"Каждый день", icon:"📆", xp:15, board:true, steps:[

{type:"intro", title:"Every Day Routines",
 desc:"Put everything together to describe daily routines. Days of the week, weekly schedule, and time-of-day patterns.",
 goals:["Name days of the week","Describe weekly schedule","Talk about 'every day'"]},

{type:"teach", trg:"день", src:"day", pos:"noun", gender:"m",
 note:"Masculine. Ends in soft ь (soft sign).\nIrregular stress in cases: дня, дню, дни.",
 example:"A: Какой сегодня день?\nB: Сегодня среда.",
 exampleSrc:"A: What day is it today?\nB: Today is Wednesday.",
 funFact:"День has a 'fleeting vowel': день → дня (day to of-day). The е vanishes when an ending is added. About 10% of masculine Russian nouns have this fleeting vowel pattern."},

{type:"teach", trg:"неделя", src:"week", pos:"noun", gender:"f",
 note:"Feminine. Ends in -я (soft feminine).\nUsed with на + prepositional: 'на этой неделе' (this week).",
 example:"A: Сколько дней в неделе?\nB: Семь дней.",
 exampleSrc:"A: How many days in a week?\nB: Seven days.",
 funFact:"Неделя originally meant 'Sunday' in Old Slavic — the 'not-day' when you don't work. Modern Russian uses воскресенье for Sunday, with неделя shifting to mean 'week.'"},

{type:"teach", trg:"понедельник", src:"Monday", pos:"noun", gender:"m",
 note:"Masculine. From 'после недели' (after Sunday).\nFirst workday. Russian weeks start Monday.",
 example:"A: Что у тебя в понедельник?\nB: В понедельник у меня работа.",
 exampleSrc:"A: What do you have on Monday?\nB: On Monday I have work.",
 funFact:"Понедельник literally 'after-week-day' — since неделя once meant Sunday, this is 'the day after Sunday.' Russian days follow numerical logic: вторник (2nd), среда (middle), четверг (4th)."},

{type:"teach", trg:"суббота", src:"Saturday", pos:"noun", gender:"f",
 note:"Feminine. From Hebrew Sabbath via Greek.\nFirst day of the weekend.",
 example:"A: Мы идём в театр в субботу.\nB: Отлично!",
 exampleSrc:"A: We're going to the theater on Saturday.\nB: Great!",
 funFact:"Суббота is one of two Russian day names from Hebrew (via Greek Σάββατον) — the Sabbath. The other is воскресенье (Sunday), meaning 'resurrection' in Old Slavic."},

{type:"teach", trg:"воскресенье", src:"Sunday", pos:"noun", gender:"n",
 note:"Neuter. Ends in -е.\nThe longest day name. Stress on fourth syllable.",
 example:"A: Что вы делаете в воскресенье?\nB: В воскресенье мы отдыхаем.",
 exampleSrc:"A: What do you do on Sunday?\nB: On Sunday we rest.",
 funFact:"Воскресенье literally means 'resurrection' — from the Christian belief about Easter Sunday. The name embedded a religious concept that stuck even in Soviet times."},

{type:"teach", trg:"каждый день", src:"every day", pos:"phrase", gender:null,
 note:"Literally: 'every day' (masculine form).\nWorks for habitual actions.",
 example:"A: Как часто ты занимаешься спортом?\nB: Каждый день.",
 exampleSrc:"A: How often do you exercise?\nB: Every day.",
 funFact:"Каждый is an adjective that declines: каждый день (every day), каждую неделю (every week), каждый месяц (every month), каждый год (every year)."},

{type:"teach", trg:"обычно", src:"usually", pos:"adv", gender:null,
 note:"Describes habitual, typical behavior.\nCommon for describing routines.",
 example:"A: Когда ты обычно обедаешь?\nB: Обычно в час.",
 exampleSrc:"A: When do you usually have lunch?\nB: Usually at one.",
 funFact:"Обычно pairs well with frequency adverbs: часто (often), иногда (sometimes), редко (rarely). Russians often chain these: 'я обычно часто хожу в кино' (I usually often go to movies)."},

{type:"teach", trg:"часто", src:"often", pos:"adv", gender:null,
 note:"Positive frequency adverb.\nOpposite: редко (rarely).",
 example:"A: Ты часто ходишь в кафе?\nB: Да, почти каждый день.",
 exampleSrc:"A: Do you often go to the café?\nB: Yes, almost every day.",
 funFact:"Часто comes from the root 'часть' (part) — something that happens 'in parts' (frequently). Russian word families are often transparent once you see them."},

{type:"tip", title:"Russian Days of the Week",
 text:"Russian days follow simple logic:\n\nпонедельник (Monday) — after-Sunday-day.\nвторник (Tuesday) — 'second day.'\nсреда (Wednesday) — 'middle day' (of the week).\nчетверг (Thursday) — 'fourth day.'\nпятница (Friday) — 'fifth day.'\nсуббота (Saturday) — from Hebrew Sabbath.\nвоскресенье (Sunday) — 'resurrection.'\n\nThe week in Russian STARTS Monday (ends Sunday), aligned with the ISO standard. This affects calendars and date-counting.\n\nTo say 'on [day]': в + accusative.\nВ понедельник (on Monday).\nВ среду (on Wednesday — feminine accusative of среда).\nВ субботу (on Saturday).\nВ воскресенье (on Sunday — neuter, no change).",
 icon:"📅"},

{type:"mc", q:"What does 'среда' (Wednesday) literally mean?",
 opts:["Day five","Middle day","Market day","After Sunday"],
 ans:"Middle day",
 hint:"It's the ___ of the week (Mon-Sun). The word also means 'medium' or 'environment' in Russian."},

{type:"mc", q:"'Every day' in Russian is:",
 opts:["Всегда","Каждый день","Часто","Иногда"],
 ans:"Каждый день",
 hint:"Combine 'every' (каждый) with 'day' (день). Literally word-for-word."},

{type:"fb", s:"A: Как часто ты читаешь книги?\nB: {1} каждый день.",
 a:["Обычно"],
 opts:["Обычно","Никогда","Поздно","Утром"],
 hint:"What frequency-word pairs with 'каждый день' to describe a habit?",
 sSrc:"A: How often do you read books?\nB: {1} every day."},

{type:"fb", s:"Завтра {1}. У нас будет выходной.",
 a:["суббота"],
 opts:["суббота","понедельник","среда","вчера"],
 hint:"'Выходной' means day off. Which day of the week is typically a day off?",
 sSrc:"Tomorrow is {1}. We'll have a day off."},

{type:"match", pairs:[
  {trg:"понедельник", src:"Monday"},
  {trg:"суббота", src:"Saturday"},
  {trg:"воскресенье", src:"Sunday"},
  {trg:"каждый день", src:"every day"},
  {trg:"обычно", src:"usually"}
]}
<<<<<<< HEAD
,

{type:"match", pairs:[
  {trg:"неделя", src:"week"}
]},

{type:"match", pairs:[
  {trg:"днём", src:"in the afternoon / during the day"},
  {trg:"ночью", src:"at night"}
]}]}
=======
]}
>>>>>>> origin/main

]};
export default UNIT_05;
