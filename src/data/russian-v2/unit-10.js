// Russian V2 Unit 10. Work and Profession (A2.2)
const UNIT_10 = {n:10, lang:"ru", srcLang:"en", track:"v2", title:"Работа", sub:"Work and Profession",
 icon:"💼", level:"A2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u10l1", title:"Профессии", icon:"👔", xp:15, board:true, steps:[

{type:"intro", title:"Professions",
 desc:"Learn common profession names in Russian. Many have gendered forms (m/f) showing how Russian adapts to the person.",
 goals:["Name common professions","Understand male/female profession forms","Ask about professions"]},

{type:"teach", trg:"работа", src:"work / job", pos:"noun", gender:"f",
 note:"Feminine.\nBoth the activity and the workplace.",
 example:"A: Где твоя работа?\nB: Там, рядом.",
 exampleSrc:"A: Where is your work?\nB: There, nearby.",
 funFact:"Работа shares root with раб (slave), reflecting old Slavic association of work with servitude. Modern meaning is neutral/positive."},

{type:"teach", trg:"профессия", src:"profession", pos:"noun", gender:"f",
 note:"Feminine. International word.\nКакая у вас профессия? = What's your profession?",
 example:"A: Какая у вас профессия?\nB: Я инженер.",
 exampleSrc:"A: What's your profession?\nB: I'm an engineer.",
 funFact:"Russian loves -ия endings for abstract/international concepts: профессия, компания, революция. All feminine, all from Latin/Greek roots."},

{type:"teach", trg:"учитель", src:"teacher (male)", pos:"noun", gender:"m",
 note:"Masculine. From 'учить' (to teach).\nFeminine: учительница.",
 example:"A: Он учитель?\nB: Да, он учитель.",
 exampleSrc:"A: Is he a teacher?\nB: Yes, he is a teacher.",
 funFact:"Russians distinguish учитель (school teacher) from преподаватель (university instructor) and воспитатель (kindergarten teacher). Each is a different profession."},

{type:"teach", trg:"учительница", src:"teacher (female)", pos:"noun", gender:"f",
 note:"Feminine form. Add -ница to male form.\nStandard feminine formation.",
 example:"A: Кто твоя учительница?\nB: Мария Ивановна.",
 exampleSrc:"A: Who is your teacher?\nB: Maria Ivanovna.",
 funFact:"Teachers usually addressed by first name + patronymic: Мария Ивановна (Maria, daughter of Ivan). Never by last name alone in school."},

{type:"teach", trg:"инженер", src:"engineer", pos:"noun", gender:"m",
 note:"Masculine default, refers to both genders.\nPlural: инженеры.",
 example:"A: Ты инженер?\nB: Да, я инженер.",
 exampleSrc:"A: Are you an engineer?\nB: Yes, I'm an engineer.",
 funFact:"Engineering traditionally prestigious in Russia. 'Инженер' carried Soviet respect. Soviet Union prioritized engineering education. Russian tech companies (Яндекс, Касперский) continue this tradition."},

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
 example:"A: Маша, студентка?\nB: Да, она студентка.",
 exampleSrc:"A: Is Masha a student?\nB: Yes, she's a student.",
 funFact:"Many Russian professions use -ка feminine suffix: студентка, программистка, официантка. But some refuse feminine forms: врач, учитель (for formal writing)."},

{type:"teach", trg:"офис", src:"office", pos:"noun", gender:"m",
 note:"Masculine. From English.\nBecame common in 1990s corporate vocabulary.",
 example:"A: Где твой офис?\nB: Там, рядом.",
 exampleSrc:"A: Where is your office?\nB: There, nearby.",
 funFact:"Офис is newer than Russian equivalent 'контора' (office, dated/bureaucratic) or 'бюро' (bureau). Офис won out in modern usage due to Western business influence."},

{type:"tip", title:"Gendered Profession Names",
 text:"Russian professions typically have separate male and female forms:\n\nMALE-FEMALE PAIRS:\nучитель/учительница (teacher)\nстудент/студентка (student)\nофициант/официантка (waiter)\nпрограммист/программистка (programmer)\nактёр/актриса (actor)\nврач/врач (doctor, no feminine form)\n\nFORMATION PATTERNS:\n-ница: учительница, работница (worker).\n-ка: студентка, программистка, соседка (neighbor).\n-рица (rare): актриса (actress).\n\nSOME HOLD OUT:\nврач, инженер, поэт, stay masculine even for women.\nIn formal Russian, using feminine forms can sound unprofessional. Younger Russians embrace feminatives more broadly.",
 deepDive:{title:"The Feminative Debate in Russia",
  text:"Russian is going through a lively debate about feminatives. 'Авторка' (author), 'редакторка' (editor) are pushed by feminists. Older speakers prefer masculine default. Dictionaries are cautious. This parallels debates in Spanish, French, and German, but Russian has the most elaborate morphological options."}},

{type:"mc", q:"How do you form the feminine of 'учитель' (teacher)?",
 opts:["учительница","учительша","учителя","учителька"],
 ans:"учительница",
 hint:"Add -ница suffix to the masculine base."},

{type:"mc", q:"What gender is 'врач' (doctor) when referring to a woman?",
 opts:["Feminine","Masculine","Neuter","Both"],
 ans:"Masculine",
 hint:"Врач is unusual: stays grammatically ___ even for women. No feminine form in formal Russian."},

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
 example:"A: Где ты работаешь?\nB: Там, в офисе.",
 exampleSrc:"A: Where do you work?\nB: There, in the office.",
 funFact:"Работать conjugates: я работаю, ты работаешь, он работает, мы работаем, вы работаете, они работают. Uses -ать verb pattern."},

{type:"teach", trg:"компания", src:"company", pos:"noun", gender:"f",
 note:"Feminine. International word.\nIn В + prepositional: 'в компании'.",
 example:"A: В какой компании?\nB: В моей компании.",
 exampleSrc:"A: At which company?\nB: At my company.",
 funFact:"Компания evolved from military/social 'company' meaning in 18-19th centuries. Same word covers 'business firm' AND 'company of friends', context clarifies."},

{type:"teach", trg:"начальник", src:"boss", pos:"noun", gender:"m",
 note:"Masculine. From 'начало' (start/command).\nFeminine rare: начальница.",
 example:"A: Кто твой начальник?\nB: Иван Петрович.",
 exampleSrc:"A: Who is your boss?\nB: Ivan Petrovich.",
 funFact:"Начальник from 'начальствовать' (to be in command). More formal alternatives: директор, руководитель, шеф (informal French loan)."},

{type:"teach", trg:"коллега", src:"colleague", pos:"noun", gender:"c",
 note:"'Common gender', same for male and female.\nBehaves grammatically as masculine.",
 example:"A: Это твой коллега?\nB: Да, мы работаем вместе.",
 exampleSrc:"A: Is this your colleague?\nB: Yes, we work together.",
 funFact:"Коллега is an 'anomaly', ends in -а (looks feminine) but grammatically masculine when referring to a male colleague, feminine when referring to a female one. Like папа."},

{type:"teach", trg:"зарплата", src:"salary", pos:"noun", gender:"f",
 note:"Feminine. Compound: 'за' + 'плата' (for + payment).\nПлата works too (plain pay).",
 example:"A: Как зарплата?\nB: Неплохая.",
 exampleSrc:"A: How's the salary?\nB: Not bad.",
 funFact:"Soviet term for salary. Literally 'payment-for' (work). Alternative: жалованье (pre-revolutionary), stipend. Oklad = 'base salary,' excluding bonuses."},

{type:"teach", trg:"зарабатывать", src:"to earn", pos:"verb", gender:null,
 note:"Imperfective. Pair: заработать (perfective).\nMoney in accusative: зарабатывать деньги.",
 example:"A: Ты зарабатываешь?\nB: Да, зарабатываю.",
 exampleSrc:"A: Do you earn money?\nB: Yes, I earn.",
 funFact:"Зарабатывать from 'работать' (work) + за- (prefix meaning 'start/complete'). Asking Russians about exact salary is considered rude, they answer generally: 'normal,' 'enough.'"},

{type:"teach", trg:"часто", src:"often", pos:"adv", gender:null,
 note:"Frequency adverb.\nCompare: редко (rarely), иногда (sometimes).",
 example:"A: Ты часто работаешь допоздна?\nB: Нет, редко.",
 exampleSrc:"A: Do you often work late?\nB: No, rarely.",
 funFact:"Часто + imperfective verb forms habitual patterns. 'Я часто работаю допоздна' = 'I often work late' (habit). You'll rarely see часто with perfective verbs."},

{type:"teach", trg:"редко", src:"rarely", pos:"adv", gender:null,
 note:"Opposite of часто.\nRequires imperfective verb.",
 example:"A: Ты работаешь в выходные?\nB: Редко.",
 exampleSrc:"A: Do you work on weekends?\nB: Rarely.",
 funFact:"Russian frequency adverbs pair with imperfective verbs. Chain: всегда > часто > иногда > редко > никогда. Never with perfective unless expressing specific completed action."},

{type:"teach", trg:"устал", src:"tired (m past)", pos:"verb", gender:null,
 note:"Past tense perfective of устать.\nFeminine: устала. Plural: устали.",
 example:"A: Ты устал?\nB: Да, устал.",
 exampleSrc:"A: Are you tired?\nB: Yes, tired.",
 funFact:"Russian past tense agrees with gender of subject. Он устал (he tired) vs она устала (she tired) vs они устали (they tired). Speaking to a mixed group, use plural form."},

{type:"tip", title:"Impersonal Work Phrases",
 text:"Work-related expressions often use impersonal forms:\n\nМне надоело работать. (I'm sick of working., literally: to-me got-boring to-work.)\nМне надо идти на работу. (I need to go to work.)\nУ меня много работы. (I have a lot of work., by-me many-of work.)\nУ меня куча дел. (I have a heap of things. Lots to do.)\nМне нужно закончить отчёт. (I need to finish the report.)\n\nThe DATIVE of the person (мне, тебе, ему) is standard for work-stress feelings, mirrors the overall impersonal pattern in Russian.",
 icon:"💼"},

{type:"mc", q:"'I work at a bank' in Russian:",
 opts:["Я работаю в банке","Я работать банк","Я работа в банке","Я работаю на банке"],
 ans:"Я работаю в банке",
 hint:"Work location: 'в' + prepositional case. Банке is the prepositional of банк."},

{type:"mc", q:"Why is 'коллега' grammatically unusual?",
 opts:["It has no gender","It ends in -а but can be masculine","It can't be plural","It's always neuter"],
 ans:"It ends in -а but can be masculine",
 hint:"Common-gender nouns adapt to the person referenced."},

{type:"fb", s:"A: Как твой {1}?\nB: Строгий, но справедливый.",
 a:["начальник"],
 opts:["начальник","коллега","студент","учитель"],
 hint:"'Strict but fair', what workplace figure does one usually describe this way?",
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
 example:"A: Ты свободен в выходные?\nB: Да, это мои выходные.",
 exampleSrc:"A: Are you free on weekends?\nB: Yes, these are my days off.",
 funFact:"Russians take weekends seriously. 'В выходные' = on weekends. 'Мои выходные' = my time off. Russian work culture values delineation between work and rest time."},

{type:"teach", trg:"отпуск", src:"vacation / leave", pos:"noun", gender:"m",
 note:"Masculine. Soviet term.\nЕхать в отпуск = go on vacation.",
 example:"A: Когда отпуск?\nB: В августе.",
 exampleSrc:"A: When's your vacation?\nB: In August.",
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
 funFact:"Свободен from 'свобода' (freedom). Russian 'свобода' carried heavy political weight in Soviet era. Today the word works mundanely, 'I'm free' just means available."},

{type:"teach", trg:"опоздать", src:"to be late (perfective)", pos:"verb", gender:null,
 note:"Perfective. Pair: опаздывать.\nOn + accusative: опоздать на X минут (be X minutes late).",
 example:"A: Я опоздал?\nB: Да, опоздал.",
 exampleSrc:"A: Am I late?\nB: Yes, you're late.",
 funFact:"Russians value punctuality strongly, opposite of stereotypes about 'Russian time.' Being late is taken seriously. Apologize promptly: 'извините за опоздание' (sorry for being late)."},

{type:"teach", trg:"встреча", src:"meeting", pos:"noun", gender:"f",
 note:"Feminine. From встречать (to meet).\nDeловая встреча = business meeting.",
 example:"A: У меня встреча в три.\nB: Удачи!",
 exampleSrc:"A: I have a meeting at three.\nB: Good luck!",
 funFact:"Встреча covers business meetings, casual meet-ups, and chance encounters. Russians schedule fewer meetings than in Anglo work culture but they're intense when held."},

{type:"tip", title:"Working Days vs Weekends",
 text:"Russians structure the week clearly:\n\nRABOTY (workdays):\nпонедельник, пятница (Monday-Friday)\nStandard 40-hour work week.\n\nВЫХОДНЫЕ (weekends):\nсуббота и воскресенье (Saturday and Sunday)\nThe word выходной means 'exit-day', leaving work behind.\n\nОТПУСК (vacation):\nAnnual leave, 28 days minimum by law.\nTraditional time: July/August.\n\nПРАЗДНИКИ (holidays):\nMay holidays (Labor Day + Victory Day)\nNovember (Unity Day)\nJanuary (New Year + Christmas)\n8 March (International Women's Day)\n\nRussians take time off seriously, overtime requires approval.",
 icon:"📅"},

{type:"mc", q:"When would a Russian typically take their отпуск?",
 opts:["July-August","Random dates","Never","In winter only"],
 ans:"July-August",
 hint:"Warm weather preferences + Soviet-era tradition."},

{type:"mc", q:"How do you say 'I'm busy right now'?",
 opts:["Я занят сейчас","All of the above","Я занятый сейчас","Сейчас занят"],
 ans:"All of the above",
 hint:"Short form adjective 'занят' is flexible in position. Short forms for temporary states."},

{type:"fb", s:"A: Когда у тебя обед?\nB: В {1}, ровно в полдень.",
 a:["час"],
 opts:["час","один","одном","три"],
 hint:"The special singular form used alone to mean '1 o'clock,' without a number before it.",
 sSrc:"A: When's your lunch?\nB: At one, right at noon."},

{type:"fb", s:"A: Ты будешь на {1}?\nB: Да, приду в три часа.",
 a:["встрече"],
 opts:["встрече","встреча","встречу","встречи"],
 hint:"В + prepositional: 'на встрече', prepositional case. Встреча in prepositional.",
 sSrc:"A: Will you be at the meeting?\nB: Yes, I'll come at 3."},

{type:"match", pairs:[
  {trg:"рабочий день", src:"workday"},
  {trg:"выходной", src:"day off"},
  {trg:"отпуск", src:"vacation"},
  {trg:"обед", src:"lunch"},
  {trg:"встреча", src:"meeting"}
]}
,{type:"match",pairs:[{trg:"студент",src:"student (male)"},{trg:"студентка",src:"student (female)"},{trg:"офис",src:"office"},{trg:"зарабатывать",src:"to earn"},{trg:"редко",src:"rarely"},{trg:"устал",src:"tired (m past)"}]},{type:"match",pairs:[{trg:"свободен",src:"free / available (m)"},{trg:"опоздать",src:"to be late (perfective)"}]}]}

,

{id:"ruv2_u10l4", title:"Мысли и чувства", icon:"🧠", xp:15, board:true, steps:[

{type:"intro", title:"Thoughts and Feelings at Work",
 desc:"Russian mental-state verbs describe how you think, believe, remember, and feel at work and in daily life. These high-frequency imperfective verbs are core A2 vocabulary.",
 goals:["Use думать, верить, помнить","Express needs with нуждаться в","Use предпочитать, забывать, беспокоиться"]},

{type:"teach", trg:"думать", src:"to think (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Pair: подумать (perfective).\nЯ думаю = I think.",
 example:"A: Ты думаешь, это хорошая работа?\nB: Да, я так думаю.",
 exampleSrc:"A: Do you think it's a good job?\nB: Yes, I think so.",
 funFact:"Думать conjugates like a standard -ать verb: думаю, думаешь, думает. The phrase 'я думаю' doubles as 'I think' (opinion) and 'I am thinking' (ongoing). Russian makes no tense distinction here."},

{type:"teach", trg:"верить", src:"to believe (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Takes dative: верить кому (believe someone).\nВерить в + accusative = believe in.",
 example:"A: Ты веришь ему?\nB: Да, верю.",
 exampleSrc:"A: Do you believe him?\nB: Yes, I believe (him).",
 funFact:"Верить, вера (faith), верный (loyal/true) all share the root вер-. The same root gives church-related words like исповедь (confession). Latin cognate: verum (truth)."},

{type:"teach", trg:"нуждаться в", src:"to need / to be in need of", pos:"verb", gender:null,
 note:"Imperfective reflexive. Takes в + prepositional.\nЯ нуждаюсь в + noun.",
 example:"A: Ты нуждаешься в чём-то?\nB: Нет, всё хорошо.",
 exampleSrc:"A: Do you need anything?\nB: No, everything's fine.",
 funFact:"Нуждаться is more formal than просто нужно (it is needed). Used in official contexts: нуждаться в поддержке (need support), нуждаться в отдыхе (need rest). The root нужда means 'need/poverty.'"},

{type:"teach", trg:"помнить", src:"to remember (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. No perfective pair needed for A2.\nПомню, помнишь, помнит.",
 example:"A: Ты помнишь этот день?\nB: Да, хорошо помню.",
 exampleSrc:"A: Do you remember that day?\nB: Yes, I remember it well.",
 funFact:"Помнить pairs with забывать (to forget). Russian memory verbs: помнить (ongoing state), вспомнить (perfective: suddenly remember), забыть (perfective: forget completely)."},

{type:"teach", trg:"предпочитать", src:"to prefer (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Takes accusative or infinitive.\nЯ предпочитаю + noun or verb.",
 example:"A: Ты предпочитаешь офис или дом?\nB: Я предпочитаю офис.",
 exampleSrc:"A: Do you prefer the office or home?\nB: I prefer the office.",
 funFact:"From Latin praeferō via French préférer, a European loan. Russian also uses любить больше (to like more) for informal preference. Предпочитать is the formal choice on job applications and surveys."},

{type:"teach", trg:"забывать", src:"to forget (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Pair: забыть (perfective, completed forgetting).\nЯ забываю = I keep forgetting.",
 example:"A: Ты забываешь про обед?\nB: Да, часто забываю.",
 exampleSrc:"A: Do you forget about lunch?\nB: Yes, I often forget.",
 funFact:"Забывать / забыть is one of the most useful aspect pairs. Imperfective: repeated forgetting (habit). Perfective: I forgot it (done). 'Не забудь!' (Don't forget!, perfective imperative) is heard constantly."},

{type:"teach", trg:"беспокоиться", src:"to worry (imperfective reflexive)", pos:"verb", gender:null,
 note:"Imperfective reflexive (-ся). Takes о + prepositional.\nЯ беспокоюсь о работе = I worry about work.",
 example:"A: Ты беспокоишься о встрече?\nB: Немного беспокоюсь.",
 exampleSrc:"A: Are you worried about the meeting?\nB: I'm a little worried.",
 funFact:"Беспокоить (to disturb someone) and беспокоиться (to worry oneself) share the root покой (peace, rest). The prefix без- (without) + покой = без-покойства = unrest. English cognate: Russian бесOKOй → 'no peace.'"},

{type:"tip", title:"Imperfective Mental Verbs",
 text:"Mental-state verbs are ALMOST ALWAYS imperfective in Russian:\n\nREASON: Mental states are continuous, not single completed actions.\n'I think' = ongoing. 'I believe' = ongoing state.\n\nTHESE VERBS ARE USUALLY IMPERFECTIVE:\nдумать (think) | верить (believe)\nпомнить (remember) | забывать (forget)\nпредпочитать (prefer) | беспокоиться (worry)\n\nEXCEPTION: perfective shifts meaning to a single moment:\nПодумать = think about it (once)\nЗабыть = forget (completed, done)\nПоверить = come to believe (sudden shift)\n\nFor daily practice: use the imperfective forms above.",
 icon:"🧠"},

{type:"fb", s:"A: Любишь {1} о работе дома?\nB: Нет, не хочу.",
 a:["думать"],
 opts:["думать","верить","помнить","предпочитать"],
 hint:"Infinitive 'to think', used after любить (to like + infinitive).",
 sSrc:"A: Do you like to think about work at home?\nB: No, I don't want to."},

{type:"mc", q:"Which verb means 'to believe' in Russian?",
 opts:["верить","помнить","забывать","думать"],
 ans:"верить",
 hint:"This verb takes dative case: верить кому."},

{type:"mc", q:"'Нуждаться в' takes which case after 'в'?",
 opts:["Dative","Prepositional","Genitive","Accusative"],
 ans:"Prepositional",
 hint:"Location and state preposition 'в' at rest uses this case."},

{type:"fb", s:"A: Ты {1} завтрашний рабочий день?\nB: Да, беспокоюсь.",
 a:["беспокоишься"],
 opts:["беспокоишься","думаешь","помнишь","веришь"],
 hint:"The conjugated 2nd-person form of 'to worry', ends in -ишься.",
 sSrc:"A: Are you worried about tomorrow's workday?\nB: Yes, I'm worried."},

{type:"fb", s:"A: Ты часто {1} ключи?\nB: К сожалению, да.",
 a:["забываешь"],
 opts:["забываешь","думаешь","веришь","помнишь"],
 hint:"2nd-person singular of 'to forget (imperfective)', conjugated like a standard -ать verb.",
 sSrc:"A: Do you often forget your keys?\nB: Unfortunately, yes."},

{type:"fb", s:"A: Я {1} в твоей помощи, коллега.\nB: Конечно, помогу!",
 a:["нуждаюсь"],
 opts:["нуждаюсь","беспокоюсь","верю","предпочитаю"],
 hint:"1st-person singular of 'нуждаться в'. I am in need of. Ends in -юсь (reflexive).",
 sSrc:"A: I need your help, colleague.\nB: Of course, I'll help!"},

{type:"match", pairs:[
  {trg:"думать", src:"to think"},
  {trg:"верить", src:"to believe"},
  {trg:"нуждаться в", src:"to need"},
  {trg:"помнить", src:"to remember"},
  {trg:"предпочитать", src:"to prefer"},
  {trg:"забывать", src:"to forget"},
  {trg:"беспокоиться", src:"to worry"}
]}
]}


,{id:"ruv2_u10l_essentials_expand", title:"Цвета, чувства, мир", icon:"🎨", xp:20, board:true, steps:[

{type:"intro", title:"Colors, Feelings, and the World Around You",
 desc:"Master nine high-frequency Russian words: four colors, three emotion adjectives, and two essential nouns (weather + car). These appear on every TRKI exam at A1-A2 level.",
 goals:["Name four core colors with gender agreement","Express happiness, sadness, and anger","Talk about the weather and cars"]},

{type:"teach", trg:"красный", src:"red", pos:"adj", gender:null,
 phonetic:"KRAS-ny",
 note:"Masculine citation form.\nFeminine: красная. Neuter: красное. Plural: красные.\nAdjectives agree with the noun they describe.",
 example:"A: Это красный дом?\nB: Да, красный.",
 exampleSrc:"A: Is that a red house?\nB: Yes, red.",
 funFact:"Красный shares a root with красивый (beautiful). In Old Russian красный meant beautiful. Red Square (Красная площадь) literally means Beautiful Square."},

{type:"teach", trg:"синий", src:"blue (dark / rich)", pos:"adj", gender:null,
 phonetic:"SEE-ny",
 note:"Masculine citation form. Specifically deep or dark blue.\nFeminine: синяя. Neuter: синее. Plural: синие.\nContrast: голубой = sky blue / light blue.",
 example:"A: Какой цвет?\nB: Синий.",
 exampleSrc:"A: What color?\nB: Blue.",
 funFact:"Russian distinguishes two blues: синий (dark, rich) and голубой (light, sky). English speakers find this unusual. Russian treats them as distinct colors, not shades."},

{type:"teach", trg:"зелёный", src:"green", pos:"adj", gender:null,
 phonetic:"zye-LYO-ny",
 note:"Masculine citation form. Note the ё (always stressed).\nFeminine: зелёная. Neuter: зелёное. Plural: зелёные.",
 example:"A: Это зелёный дом?\nB: Да, зелёный.",
 exampleSrc:"A: Is that the green house?\nB: Yes, the green one.",
 funFact:"Зелёный is related to зелень (greenery/herbs) and зелёный чай (green tea). The ё is mandatory, writing зеленый without the dots is technically incorrect."},

{type:"teach", trg:"жёлтый", src:"yellow", pos:"adj", gender:null,
 phonetic:"ZHOL-ty",
 note:"Masculine citation form. Note ё (stressed).\nFeminine: жёлтая. Neuter: жёлтое. Plural: жёлтые.",
 example:"A: Это жёлтый цвет?\nB: Да, жёлтый.",
 exampleSrc:"A: Is that yellow?\nB: Yes, yellow.",
 funFact:"Жёлтый connects to желчь (bile) in old medicine, yellow bile was one of the four humors. Russian tabloids are called жёлтая пресса (yellow press), same as English 'yellow journalism.'"},

{type:"tip", title:"Adjective Gender Agreement",
 text:"Russian adjectives change ending to match the noun's gender and number:\n\nMASCULINE (-ый / -ий):\nкрасный дом (red house)\nсиний карандаш (blue pencil)\n\nFEMININE (-ая / -яя):\nкрасная школа (red school)\nсиняя ручка (blue pen)\n\nNEUTER (-ое / -ее):\nкрасное молоко (red milk)\nзелёное здание (green building)\n\nPLURAL (-ые / -ие):\nкрасные дома (red houses)\nсиние карандаши (blue pencils)\n\nThe NOUN's gender controls the adjective ending, always check the noun first.",
 deepDive:{title:"Soft vs Hard Adjective Stems",
  text:"Most adjectives use 'hard' endings (-ый, -ая, -ое). But синий uses 'soft' endings (-ий, -яя, -ее, -ие) because the stem ends in н before a soft consonant. You'll learn to recognize the pattern. For now: синий/синяя/синее/синие are the four forms."}},

{type:"teach", trg:"счастливый", src:"happy", pos:"adj", gender:null,
 phonetic:"shchast-LEE-vy",
 note:"Masculine citation form.\nFeminine: счастливая. Short form: счастлив/счастлива.\nNote: the сч sounds like щ.",
 example:"A: Ты счастливый сегодня?\nB: Да, очень.",
 exampleSrc:"A: Are you happy today?\nB: Yes, very.",
 funFact:"Счастье (happiness) + -ливый (inclined to) = счастливый. The same root gives счастливый случай (lucky coincidence). The сч cluster sounds like a single щ, so счастье sounds like 'SHCHAS-tye.'"},

{type:"teach", trg:"грустный", src:"sad", pos:"adj", gender:null,
 phonetic:"GRUS-ny",
 note:"Masculine citation form.\nFeminine: грустная. Short form: грустен/грустна.\nNote: грустн- cluster, the т is silent in speech.",
 example:"A: Ты грустный?\nB: Немного грустный.",
 exampleSrc:"A: Are you sad?\nB: A little sad.",
 funFact:"Грустный comes from грусть (sadness/melancholy). Russian literature made грусть almost romantic. Pushkin, Lermontov, Chekhov all wrote about грусть as a noble emotion. Russian culture does not see sadness as weakness."},

{type:"teach", trg:"злой", src:"angry / mean / evil", pos:"adj", gender:null,
 phonetic:"ZLOY",
 note:"Masculine citation form. Covers anger, meanness, and evil.\nFeminine: злая. Short form: зол/зла.",
 example:"A: Он злой сегодня?\nB: Да, очень злой.",
 exampleSrc:"A: Is he angry today?\nB: Yes, very angry.",
 funFact:"Злой is remarkably versatile: злой человек (mean person), злой волк (the big bad wolf), злой начальник (angry boss). In fairy tales зло = evil. The root зл- appears in злость (rage), зловещий (ominous), злодей (villain)."},

{type:"teach", trg:"погода", src:"weather", pos:"noun", gender:"f",
 phonetic:"pa-GO-da",
 note:"Feminine. One of the most frequent Russian nouns.\nКакая погода? = What's the weather like?",
 example:"A: Какая погода сегодня?\nB: Хорошая погода.",
 exampleSrc:"A: What's the weather like today?\nB: Good weather.",
 funFact:"Russians discuss погода constantly, a social ritual, like in England. 'Какая погода?' is a standard small-talk opener. Russian winter fascination: погода is one of the most searched words on Russian internet."},

{type:"teach", trg:"машина", src:"car / machine", pos:"noun", gender:"f",
 phonetic:"ma-SHEE-na",
 note:"Feminine. Covers car and machine depending on context.\nНа машине = by car (instrumental).",
 example:"A: Это твоя машина?\nB: Да, моя машина.",
 exampleSrc:"A: Is that your car?\nB: Yes, my car.",
 funFact:"Машина comes from French machine. In Russian it shifted to mean 'car' most commonly in everyday speech. You can still say автомобиль (formal/technical) but машина is what everyone says."},

{type:"mc", q:"What is the feminine form of 'красный'?",
 opts:["красная","красное","красние","красный"],
 ans:"красная",
 hint:"Feminine adjective ending in Russian is -ая for hard-stem adjectives.",
 _why:"Tests color gender agreement."},

{type:"mc", q:"Which Russian word means 'sad'?",
 opts:["счастливый","грустный","красный","злой"],
 ans:"грустный",
 hint:"This emotion adjective comes from the noun грусть (melancholy).",
 _why:"Distinguishes three emotion adjectives."},

{type:"mc", q:"'Синий' means which shade of blue?",
 opts:["Green-blue","Sky blue / light blue","Dark / deep blue","Any shade of blue"],
 ans:"Dark / deep blue",
 hint:"Russian vocabulary is unusually precise about color depth. Голубой is the lighter, sky-toned variant; синий is the richer, darker counterpart.",
 _why:"Teaches the blue distinction, common confusion point."},

{type:"fb", s:"A: Какая {1} сегодня?\nB: Плохая, идёт дождь.",
 a:["погода"],
 opts:["погода","машина","школа","улица"],
 hint:"The standard question opener about today's atmospheric conditions.",
 sSrc:"A: What's the weather like today?\nB: Bad, it's raining."},

{type:"fb", s:"A: Ты едешь на {1}?\nB: Да, еду.",
 a:["машине"],
 opts:["машине","машина","машины","машину"],
 hint:"На + instrumental case for transport. Машина in instrumental ends in -е.",
 sSrc:"A: Are you going by car?\nB: Yes, I am."},

{type:"fb", s:"A: Он выглядит {1} сегодня.\nB: Да, что-то случилось.",
 a:["грустным"],
 opts:["грустным","злым","счастливым","красным"],
 hint:"Instrumental case after 'выглядит' (looks like). Грустный in instrumental = грустным.",
 sSrc:"A: He looks sad today.\nB: Yes, something happened."},

{type:"match", pairs:[
  {trg:"красный", src:"red"},
  {trg:"синий", src:"blue (dark)"},
  {trg:"зелёный", src:"green"},
  {trg:"жёлтый", src:"yellow"},
  {trg:"погода", src:"weather"}
]},

{type:"match", pairs:[
  {trg:"счастливый", src:"happy"},
  {trg:"грустный", src:"sad"},
  {trg:"злой", src:"angry / mean"},
  {trg:"машина", src:"car"}
]}

]}

]};
export default UNIT_10;
