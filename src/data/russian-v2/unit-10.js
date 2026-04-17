// Russian V2 Unit 10 — Work and Profession (A2.2)
const UNIT_10 = {n:10, lang:"ru", srcLang:"en", track:"v2", title:"Работа", sub:"Work and Profession",
 icon:"💼", level:"A2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u10l1", title:"Профессии", icon:"👔", xp:15, board:true, steps:[

{type:"intro", title:"Professions",
 desc:"Learn common profession names in Russian. Many have gendered forms (m/f) showing how Russian adapts to the person.",
 goals:["Name common professions","Understand male/female profession forms","Ask about professions"]},

{type:"teach", trg:"работа", src:"work / job", pos:"noun", gender:"f",
 note:"Feminine.\nBoth the activity and the workplace.",
 example:"A: Где твоя работа?\nB: В центре.",
 exampleSrc:"A: Where is your work?\nB: Downtown.",
 funFact:"Работа shares root with раб (slave) — reflecting old Slavic association of work with servitude. Modern meaning is neutral/positive."},

{type:"teach", trg:"профессия", src:"profession", pos:"noun", gender:"f",
 note:"Feminine. International word.\nКакая у вас профессия? = What's your profession?",
 example:"A: Какая у вас профессия?\nB: Я инженер.",
 exampleSrc:"A: What's your profession?\nB: I'm an engineer.",
 funFact:"Russian loves -ия endings for abstract/international concepts: профессия, компания, революция. All feminine, all from Latin/Greek roots."},

{type:"teach", trg:"учитель", src:"teacher (male)", pos:"noun", gender:"m",
 note:"Masculine. From 'учить' (to teach).\nFeminine: учительница.",
 example:"A: Он учитель?\nB: Да, учитель математики.",
 exampleSrc:"A: Is he a teacher?\nB: Yes, a math teacher.",
 funFact:"Russians distinguish учитель (school teacher) from преподаватель (university instructor) and воспитатель (kindergarten teacher). Each is a different profession."},

{type:"teach", trg:"учительница", src:"teacher (female)", pos:"noun", gender:"f",
 note:"Feminine form. Add -ница to male form.\nStandard feminine formation.",
 example:"A: Кто твоя учительница?\nB: Мария Ивановна.",
 exampleSrc:"A: Who is your teacher?\nB: Maria Ivanovna.",
 funFact:"Teachers usually addressed by first name + patronymic: Мария Ивановна (Maria, daughter of Ivan). Never by last name alone in school."},

{type:"teach", trg:"инженер", src:"engineer", pos:"noun", gender:"m",
 note:"Masculine default, refers to both genders.\nPlural: инженеры.",
 example:"A: Кем ты работаешь?\nB: Я инженер.",
 exampleSrc:"A: What do you do?\nB: I'm an engineer.",
 funFact:"Engineering traditionally prestigious in Russia. 'Инженер' carried Soviet respect — Soviet Union prioritized engineering education. Russian tech companies (Яндекс, Касперский) continue this tradition."},

{type:"teach", trg:"программист", src:"programmer", pos:"noun", gender:"m",
 note:"Masculine. From English/German.\nOccasionally feminine: программистка.",
 example:"A: Ты программист?\nB: Да, пишу на Python.",
 exampleSrc:"A: Are you a programmer?\nB: Yes, I code in Python.",
 funFact:"Programming is booming in Russia. Cities like Novosibirsk and Innopolis are tech hubs. Russian programmers are famous globally for algorithmic skills."},

{type:"teach", trg:"студент", src:"student (male)", pos:"noun", gender:"m",
 note:"Masculine. Feminine: студентка.\nFor university/college.",
 example:"A: Ты уже работаешь?\nB: Нет, я студент.",
 exampleSrc:"A: Are you working yet?\nB: No, I'm a student.",
 funFact:"Студент = university student. Different words: ученик (school student), школьник (school kid), аспирант (graduate student). Precise Russian makes distinctions."},

{type:"teach", trg:"студентка", src:"student (female)", pos:"noun", gender:"f",
 note:"Feminine form. Add -ка to male base.\nStandard feminine formation.",
 example:"A: Маша — студентка?\nB: Да, учится на медицинском.",
 exampleSrc:"A: Is Masha a student?\nB: Yes, she's at medical school.",
 funFact:"Many Russian professions use -ка feminine suffix: студентка, программистка, официантка. But some refuse feminine forms: врач, учитель (for formal writing)."},

{type:"teach", trg:"офис", src:"office", pos:"noun", gender:"m",
 note:"Masculine. From English.\nBecame common in 1990s corporate vocabulary.",
 example:"A: Где твой офис?\nB: В центре, рядом с метро.",
 exampleSrc:"A: Where is your office?\nB: Downtown, near the metro.",
 funFact:"Офис is newer than Russian equivalent 'контора' (office, dated/bureaucratic) or 'бюро' (bureau). Офис won out in modern usage due to Western business influence."},

{type:"tip", title:"Gendered Profession Names",
 text:"Russian professions typically have separate male and female forms:\n\nMALE-FEMALE PAIRS:\nучитель/учительница (teacher)\nстудент/студентка (student)\nофициант/официантка (waiter)\nпрограммист/программистка (programmer)\nактёр/актриса (actor)\nврач/врач (doctor — no feminine form)\n\nFORMATION PATTERNS:\n-ница: учительница, работница (worker).\n-ка: студентка, программистка, соседка (neighbor).\n-рица (rare): актриса (actress).\n\nSOME HOLD OUT:\nврач, инженер, поэт — stay masculine even for women.\nIn formal Russian, using feminine forms can sound unprofessional. Younger Russians embrace feminatives more broadly.",
 deepDive:{title:"The Feminative Debate in Russia",
  text:"Russian is going through a lively debate about feminatives. 'Авторка' (author), 'редакторка' (editor) are pushed by feminists. Older speakers prefer masculine default. Dictionaries are cautious. This parallels debates in Spanish, French, and German — but Russian has the most elaborate morphological options."}},

{type:"mc", q:"How do you form the feminine of 'учитель' (teacher)?",
 opts:["учителька","учительница","учительша","учителя"],
 ans:"учительница",
 hint:"Add -ница suffix to the masculine base."},

{type:"mc", q:"What gender is 'врач' (doctor) when referring to a woman?",
 opts:["Feminine","Masculine","Neuter","Both"],
 ans:"Masculine",
 hint:"Врач is unusual: stays grammatically masculine even for women. No feminine form in formal Russian."},

{type:"fb", s:"A: Кем ты работаешь?\nB: Я {1}, работаю в IT-компании.",
 a:["программист"],
 opts:["программист","учитель","инженер","врач"],
 hint:"An IT company specifically employs which profession?",
 sSrc:"A: What do you do?\nB: I'm a programmer, working in an IT company."},

{type:"match", pairs:[
  {trg:"работа", src:"work"},
  {trg:"профессия", src:"profession"},
  {trg:"учитель", src:"teacher (m)"},
  {trg:"инженер", src:"engineer"},
  {trg:"программист", src:"programmer"}
]}
]},

{id:"ruv2_u10l2", title:"Где работаешь?", icon:"🏢", xp:15, board:true, steps:[

{type:"intro", title:"Where Do You Work?",
 desc:"Talk about workplace, schedule, and job details. Russian uses specific grammar for ongoing work activities.",
 goals:["Describe workplace","Ask/answer работаешь questions","Express job schedule"]},

{type:"teach", trg:"работать", src:"to work (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Pair: поработать (work for a while).\nЯ работаю = I work.",
 example:"A: Где ты работаешь?\nB: В банке.",
 exampleSrc:"A: Where do you work?\nB: At a bank.",
 funFact:"Работать conjugates: я работаю, ты работаешь, он работает, мы работаем, вы работаете, они работают. Uses -ать verb pattern."},

{type:"teach", trg:"компания", src:"company", pos:"noun", gender:"f",
 note:"Feminine. International word.\nIn В + prepositional: 'в компании'.",
 example:"A: В какой компании?\nB: В крупной российской компании.",
 exampleSrc:"A: At which company?\nB: At a large Russian company.",
 funFact:"Компания evolved from military/social 'company' meaning in 18-19th centuries. Same word covers 'business firm' AND 'company of friends' — context clarifies."},

{type:"teach", trg:"начальник", src:"boss", pos:"noun", gender:"m",
 note:"Masculine. From 'начало' (start/command).\nFeminine rare: начальница.",
 example:"A: Кто твой начальник?\nB: Иван Петрович.",
 exampleSrc:"A: Who is your boss?\nB: Ivan Petrovich.",
 funFact:"Начальник from 'начальствовать' (to be in command). More formal alternatives: директор, руководитель, шеф (informal French loan)."},

{type:"teach", trg:"коллега", src:"colleague", pos:"noun", gender:null,
 note:"'Common gender' — same for male and female.\nBehaves grammatically as masculine.",
 example:"A: Это твой коллега?\nB: Да, мы работаем вместе.",
 exampleSrc:"A: Is this your colleague?\nB: Yes, we work together.",
 funFact:"Коллега is an 'anomaly' — ends in -а (looks feminine) but grammatically masculine when referring to a male colleague, feminine when referring to a female one. Like папа."},

{type:"teach", trg:"зарплата", src:"salary", pos:"noun", gender:"f",
 note:"Feminine. Compound: 'за' + 'плата' (for + payment).\nПлата works too (plain pay).",
 example:"A: Как зарплата?\nB: Неплохая.",
 exampleSrc:"A: How's the salary?\nB: Not bad.",
 funFact:"Soviet term for salary. Literally 'payment-for' (work). Alternative: жалованье (pre-revolutionary), stipend. Oklad = 'base salary,' excluding bonuses."},

{type:"teach", trg:"зарабатывать", src:"to earn", pos:"verb", gender:null,
 note:"Imperfective. Pair: заработать (perfective).\nMoney in accusative: зарабатывать деньги.",
 example:"A: Сколько зарабатываешь?\nB: Хватает на жизнь.",
 exampleSrc:"A: How much do you earn?\nB: Enough to live on.",
 funFact:"Зарабатывать from 'работать' (work) + за- (prefix meaning 'start/complete'). Asking Russians about exact salary is considered rude — they answer generally: 'normal,' 'enough.'"},

{type:"teach", trg:"часто", src:"often", pos:"adv", gender:null,
 note:"Frequency adverb.\nCompare: редко (rarely), иногда (sometimes).",
 example:"A: Ты часто работаешь допоздна?\nB: Нет, редко.",
 exampleSrc:"A: Do you often work late?\nB: No, rarely.",
 funFact:"Часто + imperfective verb forms habitual patterns. 'Я часто работаю допоздна' = 'I often work late' (habit). You'll rarely see часто with perfective verbs."},

{type:"teach", trg:"редко", src:"rarely", pos:"adv", gender:null,
 note:"Opposite of часто.\nRequires imperfective verb.",
 example:"A: Ты работаешь в выходные?\nB: Редко, только в отчётные периоды.",
 exampleSrc:"A: Do you work on weekends?\nB: Rarely, only during reporting periods.",
 funFact:"Russian frequency adverbs pair with imperfective verbs. Chain: всегда > часто > иногда > редко > никогда. Never with perfective unless expressing specific completed action."},

{type:"teach", trg:"устал", src:"tired (m past)", pos:"verb", gender:null,
 note:"Past tense perfective of устать.\nFeminine: устала. Plural: устали.",
 example:"A: Ты устал?\nB: Очень, долгий день.",
 exampleSrc:"A: Are you tired?\nB: Very, long day.",
 funFact:"Russian past tense agrees with gender of subject. Он устал (he tired) vs она устала (she tired) vs они устали (they tired). Speaking to a mixed group, use plural form."},

{type:"tip", title:"Impersonal Work Phrases",
 text:"Work-related expressions often use impersonal forms:\n\nМне надоело работать. (I'm sick of working. — literally: to-me got-boring to-work.)\nМне надо идти на работу. (I need to go to work.)\nУ меня много работы. (I have a lot of work. — by-me many-of work.)\nУ меня куча дел. (I have a heap of things. Lots to do.)\nМне нужно закончить отчёт. (I need to finish the report.)\n\nThe DATIVE of the person (мне, тебе, ему) is standard for work-stress feelings — mirrors the overall impersonal pattern in Russian.",
 icon:"💼"},

{type:"mc", q:"'I work at a bank' in Russian:",
 opts:["Я работаю на банке","Я работаю в банке","Я работать банк","Я работа в банке"],
 ans:"Я работаю в банке",
 hint:"Work location: 'в' + prepositional case. Банке is the prepositional of банк."},

{type:"mc", q:"Why is 'коллега' grammatically unusual?",
 opts:["It ends in -а but can be masculine","It can't be plural","It's always neuter","It has no gender"],
 ans:"It ends in -а but can be masculine",
 hint:"Common-gender nouns adapt to the person referenced."},

{type:"fb", s:"A: Как твой {1}?\nB: Строгий, но справедливый.",
 a:["начальник"],
 opts:["начальник","коллега","студент","учитель"],
 hint:"'Strict but fair' — what workplace figure does one usually describe this way?",
 sSrc:"A: How's your boss?\nB: Strict but fair."},

{type:"match", pairs:[
  {trg:"работать", src:"to work"},
  {trg:"компания", src:"company"},
  {trg:"начальник", src:"boss"},
  {trg:"коллега", src:"colleague"},
  {trg:"зарплата", src:"salary"}
]}
]},

{id:"ruv2_u10l3", title:"Рабочий день", icon:"📋", xp:15, board:true, steps:[

{type:"intro", title:"The Workday",
 desc:"Describe your work schedule and activities. Russian distinguishes between рабочий (workday) and выходной (day off).",
 goals:["Describe workday schedule","Use рабочий/выходной","Express daily work routines"]},

{type:"teach", trg:"рабочий день", src:"workday", pos:"noun", gender:"m",
 note:"Masculine (agrees with день).\nStandard 8-hour workday in Russia.",
 example:"A: Когда твой рабочий день?\nB: С 9 до 18.",
 exampleSrc:"A: When is your workday?\nB: From 9 to 6pm.",
 funFact:"Russian workday typically 9-18 (9am to 6pm) with 1 hour lunch. Most офисы follow this. Soviet legacy preserved in Russian corporate culture."},

{type:"teach", trg:"выходной", src:"day off / weekend", pos:"noun", gender:"m",
 note:"Masculine (from adjective).\nPlural: выходные = the weekend.",
 example:"A: Что ты делаешь в выходные?\nB: Отдыхаю, хожу в гости.",
 exampleSrc:"A: What do you do on weekends?\nB: Rest, visit friends.",
 funFact:"Russians take weekends seriously. 'В выходные' = on weekends. 'Мои выходные' = my time off. Russian work culture values delineation between work and rest time."},

{type:"teach", trg:"отпуск", src:"vacation / leave", pos:"noun", gender:"m",
 note:"Masculine. Soviet term.\nЕхать в отпуск = go on vacation.",
 example:"A: Когда отпуск?\nB: В августе, на две недели.",
 exampleSrc:"A: When's your vacation?\nB: In August, for two weeks.",
 funFact:"Russian law guarantees 28 days of annual vacation. Traditional отпуск timing: July-August for warm weather, New Year's holiday for winter. Everyone takes time off then."},

{type:"teach", trg:"обед", src:"lunch", pos:"noun", gender:"m",
 note:"Masculine. Central meal in Russian tradition.\nОбеденный перерыв = lunch break.",
 example:"A: Когда обед?\nB: В час.",
 exampleSrc:"A: When's lunch?\nB: At 1 o'clock.",
 funFact:"Russian workday structure: завтрак (breakfast, before work), обед (lunch, midday), ужин (dinner, evening). Lunch is the main meal traditionally, reflected in vocabulary importance."},

{type:"teach", trg:"занят", src:"busy (m)", pos:"adj", gender:"m",
 note:"Short form adjective.\nFull: занятый. Feminine: занята. Plural: заняты.",
 example:"A: У тебя есть время?\nB: Сейчас занят, позже.",
 exampleSrc:"A: Do you have time?\nB: Busy now, later.",
 funFact:"Russian short-form adjectives (занят, свободен) are used for temporary states. Long forms (занятый, свободный) describe permanent qualities. Fine distinction."},

{type:"teach", trg:"свободен", src:"free / available (m)", pos:"adj", gender:"m",
 note:"Short form. Feminine: свободна.\nOpposite of занят.",
 example:"A: Завтра свободен?\nB: Да, весь день.",
 exampleSrc:"A: Free tomorrow?\nB: Yes, all day.",
 funFact:"Свободен from 'свобода' (freedom). Russian 'свобода' carried heavy political weight in Soviet era. Today the word works mundanely — 'I'm free' just means available."},

{type:"teach", trg:"опоздать", src:"to be late (perfective)", pos:"verb", gender:null,
 note:"Perfective. Pair: опаздывать.\nOn + accusative: опоздать на X минут (be X minutes late).",
 example:"A: Прости, я опоздал.\nB: Ничего, проходи.",
 exampleSrc:"A: Sorry, I'm late.\nB: No problem, come in.",
 funFact:"Russians value punctuality strongly — opposite of stereotypes about 'Russian time.' Being late is taken seriously. Apologize promptly: 'извините за опоздание' (sorry for being late)."},

{type:"teach", trg:"встреча", src:"meeting", pos:"noun", gender:"f",
 note:"Feminine. From встречать (to meet).\nDeловая встреча = business meeting.",
 example:"A: У меня встреча в три.\nB: Удачи!",
 exampleSrc:"A: I have a meeting at three.\nB: Good luck!",
 funFact:"Встреча covers business meetings, casual meet-ups, and chance encounters. Russians schedule fewer meetings than in Anglo work culture but they're intense when held."},

{type:"tip", title:"Working Days vs Weekends",
 text:"Russians structure the week clearly:\n\nRABOTY (workdays):\nпонедельник — пятница (Monday-Friday)\nStandard 40-hour work week.\n\nВЫХОДНЫЕ (weekends):\nсуббота и воскресенье (Saturday and Sunday)\nThe word выходной means 'exit-day' — leaving work behind.\n\nОТПУСК (vacation):\nAnnual leave, 28 days minimum by law.\nTraditional time: July/August.\n\nПРАЗДНИКИ (holidays):\nMay holidays (Labor Day + Victory Day)\nNovember (Unity Day)\nJanuary (New Year + Christmas)\n8 March (International Women's Day)\n\nRussians take time off seriously — overtime requires approval.",
 icon:"📅"},

{type:"mc", q:"When would a Russian typically take their отпуск?",
 opts:["In winter only","July-August","Random dates","Never"],
 ans:"July-August",
 hint:"Warm weather preferences + Soviet-era tradition."},

{type:"mc", q:"How do you say 'I'm busy right now'?",
 opts:["Я занятый сейчас","Сейчас занят","Я занят сейчас","All of the above"],
 ans:"All of the above",
 hint:"Short form adjective 'занят' is flexible in position. Short forms for temporary states."},

{type:"fb", s:"A: Когда у тебя обед?\nB: В {1} часа, на час.",
 a:["час"],
 opts:["час","один","один час","три"],
 hint:"Lunch time using the special 'час' (alone) for '1 o'clock.'",
 sSrc:"A: When's your lunch?\nB: At 1 o'clock, for one hour."},

{type:"fb", s:"A: Ты будешь на {1}?\nB: Да, приду в три часа.",
 a:["встрече"],
 opts:["встрече","встреча","встречу","встречи"],
 hint:"В + prepositional: 'на встрече' — prepositional case. Встреча in prepositional.",
 sSrc:"A: Will you be at the meeting?\nB: Yes, I'll come at 3."},

{type:"match", pairs:[
  {trg:"рабочий день", src:"workday"},
  {trg:"выходной", src:"day off"},
  {trg:"отпуск", src:"vacation"},
  {trg:"обед", src:"lunch"},
  {trg:"встреча", src:"meeting"}
]}
]}

]};
export default UNIT_10;
