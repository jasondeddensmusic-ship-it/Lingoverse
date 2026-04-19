// Russian V2 Unit 22 — Reflexive Verbs (B1.2)
const UNIT_22 = {n:22, lang:"ru", srcLang:"en", track:"v2", title:"Возвратные глаголы", sub:"Reflexive Verbs (-ся)",
 icon:"🔄", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u22l1", title:"The -ся Verbs", icon:"🔄", xp:15, board:true, steps:[

{type:"intro", title:"Reflexive Verbs with -ся",
 desc:"Russian reflexive verbs end in -ся (or -сь after vowels). They turn regular verbs into reflexive/passive/reciprocal actions. Essential pattern.",
 goals:["Understand -ся meaning","Use common reflexive verbs","Form reflexive in different tenses"]},

{type:"teach", trg:"встречаться", src:"to meet (each other)", pos:"verb", gender:null,
 note:"Reciprocal reflexive.\nFrom встречать + ся.",
 example:"A: Где встречаемся?\nB: У метро, в семь.",
 exampleSrc:"A: Where are we meeting?\nB: At the metro, at seven.",
 funFact:"'Встречать' = to meet someone (transitive). 'Встречаться' = to meet each other/regularly. The -ся makes it mutual action."},

{type:"teach", trg:"умываться", src:"to wash oneself", pos:"verb", gender:null,
 note:"Self-directed reflexive.\nЯ умываюсь = I wash myself.",
 example:"A: Что ты делаешь?\nB: Умываюсь.",
 exampleSrc:"A: What are you doing?\nB: Washing up.",
 funFact:"Many daily routines are reflexive: умываться (wash up), одеваться (get dressed), причёсываться (comb hair). The action returns to oneself."},

{type:"teach", trg:"одеваться", src:"to get dressed", pos:"verb", gender:null,
 note:"Self-directed reflexive.\nОдевать (dress someone) + ся (oneself).",
 example:"A: Быстро одевайся!\nB: Уже.",
 exampleSrc:"A: Get dressed quickly!\nB: Already.",
 funFact:"'Одевать ребёнка' = dress a child (transitive). 'Одеваться' = get oneself dressed. Mothers use both forms in quick succession with kids."},

{type:"teach", trg:"учиться", src:"to study (reflexive)", pos:"verb", gender:null,
 note:"Учить + ся.\nUчить = teach someone; учиться = study (self-teach).",
 example:"A: Где ты учишься?\nB: В университете.",
 exampleSrc:"A: Where do you study?\nB: At university.",
 funFact:"Russian distinguishes: учить кого-то (teach someone, trans) vs учиться (study, self-ref). 'Я учусь' (I study, am a student) vs 'я учу' (I teach)."},

{type:"teach", trg:"называться", src:"to be called (things)", pos:"verb", gender:null,
 note:"For things' names.\nИспользуется для объектов.",
 example:"A: Как называется эта улица?\nB: Невский проспект.",
 exampleSrc:"A: What is this street called?\nB: Nevsky Prospekt.",
 funFact:"Use 'называться' for THINGS, 'зваться' (rare) or 'меня зовут' for PEOPLE. 'Как называется фильм?' (what's the film called?) vs 'как вас зовут?' (what's your name?)."},

{type:"teach", trg:"нравиться", src:"to be liked (please)", pos:"verb", gender:null,
 note:"Backward verb!\n'Мне нравится X' = X pleases me.",
 example:"A: Тебе нравится Москва?\nB: Очень!",
 exampleSrc:"A: Do you like Moscow?\nB: Very much!",
 funFact:"Нравиться is a unique reflexive — doesn't mean 'to like oneself' but 'to please' from subject side. 'X нравится мне' = X pleases me. Subject and verb agree."},

{type:"teach", trg:"находиться", src:"to be located", pos:"verb", gender:null,
 note:"Location verb.\n'Музей находится в центре.'",
 example:"A: Где находится ресторан?\nB: На Арбате.",
 exampleSrc:"A: Where is the restaurant located?\nB: On Arbat.",
 funFact:"Находиться = 'to find oneself.' Now means 'to be located.' Used for physical location of buildings/objects. 'Я нахожусь в парке' (I'm in the park)."},

{type:"teach", trg:"смеяться", src:"to laugh", pos:"verb", gender:null,
 note:"Inherently reflexive (no non-reflexive form).\nЯ смеюсь = I laugh.",
 example:"A: Над чем смеёшься?\nB: Над шуткой.",
 exampleSrc:"A: What are you laughing at?\nB: At a joke.",
 funFact:"Some verbs exist ONLY as reflexive: смеяться (laugh), бояться (fear), надеяться (hope). Never drop the -ся; the verb is inherently reflexive."},

{type:"tip", title:"Reflexive -ся Verbs: Four Uses",
 text:"-ся/-сь HAS FOUR FUNCTIONS:\n\n1. SELF-DIRECTED (genuinely reflexive):\nумываться (wash oneself).\nодеваться (dress oneself).\nпричёсываться (comb oneself).\n\n2. RECIPROCAL (each other):\nвстречаться (meet each other).\nцеловаться (kiss each other).\nобниматься (hug each other).\n\n3. PASSIVE:\nИзвестно, что... (It is known that...).\nГоворится, что... (It is said that...).\nКнига продаётся. (The book is sold.)\n\n4. LEXICALIZED (only-reflexive or different meaning):\nсмеяться (laugh — no 'смеять').\nбояться (fear — different meaning).\nучиться (study — vs учить teach).\n\nFORMS:\n-ся after consonant: учусь, смеюсь.\n-сь after vowel: умываешься.\n\nPAST TENSE:\n-лся/-лась/-лось/-лись\nумылся/умылась/умылись.",
 icon:"🔄"},

{type:"mc", q:"Which verb means 'to study' (student sense)?",
 opts:["учить","учиться","учёба","учитель"],
 ans:"учиться",
 hint:"Reflexive form. 'Учить' = teach someone (transitive)."},

{type:"mc", q:"'Я нравлюсь ему' means:",
 opts:["I like him","He likes me","I teach him","He teaches me"],
 ans:"He likes me",
 hint:"Backward verb нравиться: subject is the pleasing thing. Here 'I' is the subject (am liked by him)."},

{type:"fb", s:"Я {1} в университете уже три года.",
 a:["учусь"],
 opts:["учусь","учу","учеба","учусь"],
 hint:"'I study' (as student) = reflexive form 1st person singular.",
 sSrc:"I've been studying at university for three years."},

{type:"fb", s:"Как {1} этот фильм?",
 a:["называется"],
 opts:["называется","зовут","называть","называться"],
 hint:"For things' names, use reflexive 'называться' in appropriate form.",
 sSrc:"What's this movie called?"},

{type:"match", pairs:[
  {trg:"встречаться", src:"to meet"},
  {trg:"умываться", src:"to wash up"},
  {trg:"одеваться", src:"to get dressed"},
  {trg:"учиться", src:"to study"},
  {trg:"смеяться", src:"to laugh"}
]}
]},

{id:"ruv2_u22l2", title:"Daily Reflexives", icon:"🕐", xp:15, board:true, steps:[

{type:"intro", title:"Daily Routines with -ся",
 desc:"Most morning and evening routines use reflexive verbs. Russian literature and grammar are rich in -ся patterns.",
 goals:["Describe daily routine","Use reflexive past tense","Recognize common patterns"]},

{type:"teach", trg:"просыпаться", src:"to wake up", pos:"verb", gender:null,
 note:"Imperfective reflexive.\nPerfective: проснуться.",
 example:"A: Во сколько ты просыпаешься?\nB: В семь.",
 exampleSrc:"A: When do you wake up?\nB: At seven.",
 funFact:"Просыпаться (impf) vs проснуться (perf). 'Я просыпаюсь каждый день в 7' (I wake up every day at 7, habit) vs 'я проснулся рано' (I woke up early, once)."},

{type:"teach", trg:"вставать", src:"to get up (imperfective)", pos:"verb", gender:null,
 note:"NOT reflexive!\nЯ встаю, ты встаёшь.",
 example:"A: Ты рано встаёшь?\nB: Да, в шесть.",
 exampleSrc:"A: Do you get up early?\nB: Yes, at six.",
 funFact:"Вставать is NOT reflexive despite the action being self-directed. Russian: просыпаться (reflexive wake-up, mental) + вставать (non-reflexive standing up, physical)."},

{type:"teach", trg:"одеваться", src:"to get dressed", pos:"verb", gender:null,
 note:"Reflexive - put clothes on oneself.\nPerfective: одеться.",
 example:"A: Я одеваюсь и иду.\nB: Жду.",
 exampleSrc:"A: I'm getting dressed and going.\nB: I'm waiting.",
 funFact:"Одевать + ся (put on oneself). Russian separates 'dress yourself' from 'dress someone': Я одеваю ребёнка (I dress the child) vs я одеваюсь (I get dressed)."},

{type:"teach", trg:"собираться", src:"to get ready / plan", pos:"verb", gender:null,
 note:"Reflexive.\nMultiple meanings depending on context.",
 example:"A: Что делаешь?\nB: Собираюсь на работу.",
 exampleSrc:"A: What are you doing?\nB: Getting ready for work.",
 funFact:"Собираться has three uses: (1) gather (physically come together), (2) get ready (собираюсь на работу), (3) intend to (собираюсь уехать). Context clarifies."},

{type:"teach", trg:"кажется", src:"it seems (impersonal)", pos:"verb", gender:null,
 note:"Impersonal reflexive.\n'Мне кажется' = it seems to me.",
 example:"A: Тебе кажется, что он прав?\nB: Мне кажется, да.",
 exampleSrc:"A: Do you think he's right?\nB: I think yes.",
 funFact:"'Мне кажется' is how Russians say 'I think/it seems to me.' Impersonal + dative construction. Common in polite opinions."},

{type:"teach", trg:"кончиться", src:"to end (itself)", pos:"verb", gender:null,
 note:"Reflexive for things ending.\nПадение confession ended.",
 example:"A: Когда кончится урок?\nB: Через пять минут.",
 exampleSrc:"A: When will the lesson end?\nB: In five minutes.",
 funFact:"Кончать (trans, ended something) vs кончиться (intrans/reflex, something ended). Similar pattern: начинать/начинаться, открывать/открываться."},

{type:"tip", title:"Daily Routine in Russian",
 text:"TYPICAL RUSSIAN MORNING:\n\n1. Просыпаюсь в 6:30. (Wake up at 6:30.)\n2. Встаю и иду в ванную. (Get up and go to the bathroom.)\n3. Умываюсь. (Wash up.)\n4. Одеваюсь. (Get dressed.)\n5. Завтракаю. (Have breakfast.)\n6. Иду на работу. (Go to work.)\n\nEVENING:\n7. Возвращаюсь домой. (Return home.)\n8. Ужинаю. (Have dinner.)\n9. Смотрю телевизор. (Watch TV.)\n10. Ложусь спать. (Go to bed.)\n\nNOTICE:\n• Умываться, одеваться, возвращаться: reflexive.\n• Вставать, идти, завтракать, ужинать, смотреть, лечь: NOT reflexive.\n• No systematic rule — you must memorize each verb as reflexive or not.\n\nEvery daily-routine verb is worth practicing in context.",
 icon:"🕐"},

{type:"mc", q:"Which is reflexive?",
 opts:["вставать","смотреть","одеваться","идти"],
 ans:"одеваться",
 hint:"Look for the -ся ending. It's the reflexive marker."},

{type:"mc", q:"'Я собираюсь в Москву' means:",
 opts:["I gather in Moscow","I plan to go to Moscow","I meet in Moscow","I'm together in Moscow"],
 ans:"I plan to go to Moscow",
 hint:"Собираться + direction = intend to go. Context-dependent."},

{type:"fb", s:"Я {1} в 7 часов утра.",
 a:["просыпаюсь"],
 opts:["просыпаюсь","просыпаться","просыпался","просыпаться"],
 hint:"First person singular reflexive present.",
 sSrc:"I wake up at 7 in the morning."},

{type:"fb", s:"Как ты думаешь? {1}, да или нет?",
 a:["Кажется"],
 opts:["Кажется","Думаю","Говорят","Кажется"],
 hint:"Impersonal: 'it seems' response to opinion question.",
 sSrc:"What do you think? It seems, yes or no?"},

{type:"match", pairs:[
  {trg:"просыпаться", src:"to wake up"},
  {trg:"одеваться", src:"to get dressed"},
  {trg:"собираться", src:"to get ready"},
  {trg:"возвращаться", src:"to return"},
  {trg:"кончаться", src:"to end"}
]}
,{type:"fb", s:"Давай {1} в кафе в субботу вечером.",
 a:["встречаться"],
 opts:["встречаться","умываться","одеваться","собираться"],
 hint:"Reflexive verb for two people meeting each other.",
 sSrc:"Let's meet at the café on Saturday evening."},

{type:"match",pairs:[{trg:"называться",src:"to be called (things)"},{trg:"нравиться",src:"to be liked (please)"},{trg:"находиться",src:"to be located"},{trg:"кончиться",src:"to end (itself)"}]}]}

]};
export default UNIT_22;
