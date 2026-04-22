// Russian V2 Unit 13. Verb Aspect (B1.1)
const UNIT_13 = {n:13, lang:"ru", srcLang:"en", track:"v2", title:"Вид глагола", sub:"Verb Aspect: The B1 Core",
 icon:"🔄", level:"B1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u13l1", title:"Imperfective vs Perfective", icon:"🔄", xp:15, board:true, steps:[

{type:"intro", title:"The Two Aspects",
 desc:"Verb aspect is THE defining feature of Russian grammar. Every verb exists in two forms: imperfective (process) and perfective (completion). Choosing the wrong one is the #1 error that marks non-native speakers.",
 goals:["Understand aspect conceptually","Recognize aspect pairs","Know when to use each"]},

{type:"teach", trg:"делать", src:"to do (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Process, habit, repeated action.\nPair: сделать.",
 example:"A: Что ты делаешь?\nB: Делаю уроки.",
 exampleSrc:"A: What are you doing?\nB: Doing homework.",
 funFact:"Делать is one of the most basic verbs. Russian uses it for many English 'do' situations. 'Делать уроки' = doing homework; 'делать зарядку' = doing exercises."},

{type:"teach", trg:"сделать", src:"to do (perfective)", pos:"verb", gender:null,
 note:"Perfective. Completed, finished, done.\nFormed from делать + prefix с-.",
 example:"A: Ты сделал уроки?\nB: Да, всё сделал.",
 exampleSrc:"A: Did you finish the homework?\nB: Yes, I did everything.",
 funFact:"С- prefix often signals completion in Russian. Сделал literally 'done-made.' The prefix adds 'with/completely' sense to the base verb."},

{type:"teach", trg:"писать", src:"to write (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Writing as ongoing activity.\nPair: написать.",
 example:"A: Что ты пишешь?\nB: Пишу маме.",
 exampleSrc:"A: What are you writing?\nB: Writing to mom.",
 funFact:"Писать has irregular conjugation: я пишу (not пишаю!). Stem changes occur: пис→пиш. This 'verb stem mutation' is common in Russian."},

{type:"teach", trg:"написать", src:"to write (perfective)", pos:"verb", gender:null,
 note:"Perfective. Formed with на- prefix.\nEmphasizes completion.",
 example:"A: Ты написал ему?\nB: Да, уже отправил.",
 exampleSrc:"A: Did you write to him?\nB: Yes, already sent.",
 funFact:"На- prefix shifts focus to result. Писать = writing process. Написать = writing completed/with something produced. Russian makes us think about outcomes."},

{type:"teach", trg:"читать", src:"to read (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Reading as process.\nPair: прочитать.",
 example:"A: Что ты читаешь сейчас?\nB: Читаю книгу.",
 exampleSrc:"A: What are you reading now?\nB: Reading a book.",
 funFact:"Reading 'Анна Каренина' could take weeks. Russians would use читаю (imperfective) throughout. Only after finishing would they say прочитала."},

{type:"teach", trg:"прочитать", src:"to read (perfective)", pos:"verb", gender:null,
 note:"Perfective. Completed reading.\nWith про- prefix.",
 example:"A: Ты прочитал книгу?\nB: Да, вчера закончил.",
 exampleSrc:"A: Did you finish reading the book?\nB: Yes, finished yesterday.",
 funFact:"Про- prefix means 'through.' Прочитать = 'read through' = read completely. Russian prefixes add precise completion/direction meanings."},

{type:"tip", title:"Aspect Pairs: The Core Concept",
 text:"Every Russian verb has TWO forms:\n\nIMPERFECTIVE (process/habit/repetition):\n• I am doing... (right now)\n• I do... (every day)\n• I was doing... (for a while)\n\nPERFECTIVE (single completed action):\n• I did... (and finished)\n• I will do... (once, completed)\n\nHOW TO FORM PAIRS:\n1. Adding a prefix: делать → сделать (с-)\n   писать → написать (на-)\n   читать → прочитать (про-)\n\n2. Stem change: покупать → купить\n   поднимать → поднять\n\n3. Completely different: говорить → сказать\n   брать → взять\n\nLEARN BOTH FORMS TOGETHER ALWAYS.\nOne verb = one pair. Drill them as units.",
 deepDive:{title:"Why Aspect Matters So Much",
  text:"English uses tense + aspect (I was writing, I have written). Russian separates them: tense tells WHEN, aspect tells HOW the action unfolds. This dual-layer system is why Russian only has 3 tenses but expresses more nuance. Mastering aspect IS mastering Russian verbs, there's no shortcut. Every verb must be memorized as a pair."}},

{type:"mc", q:"Which verb is imperfective?",
 opts:["писать","сделать","купить","написать"],
 ans:"писать",
 hint:"Imperfective = action as process (writing in general). Usually doesn't have a prefix."},

{type:"mc", q:"Why is 'прочитать' perfective?",
 opts:["It's about completion","All of the above","It's longer","It has the про- prefix"],
 ans:"All of the above",
 hint:"The prefix AND the meaning (complete reading) AND greater length all signal perfective."},

{type:"fb", s:"A: Что ты {1}?\nB: Роман Толстого, 'Война и мир'.",
 a:["читаешь"],
 opts:["читаешь","прочитал","читал","прочитаешь"],
 hint:"Present continuous reading = imperfective, 2nd person singular.",
 sSrc:"A: What are you reading?\nB: Tolstoy's 'War and Peace.'"},

{type:"fb", s:"A: Ты уже {1} 'Войну и мир'?\nB: Да, в прошлом году.",
 a:["прочитал"],
 opts:["прочитал","читал","читаешь","прочитаешь"],
 hint:"Completed reading in past. Perfective past + masculine.",
 sSrc:"A: Did you finish 'War and Peace'?\nB: Yes, last year."},

{type:"match", pairs:[
  {trg:"делать", src:"to do (imperf)"},
  {trg:"сделать", src:"to do (perf)"},
  {trg:"писать", src:"to write (imperf)"},
  {trg:"написать", src:"to write (perf)"},
  {trg:"читать", src:"to read (imperf)"}
]}
]},

{id:"ruv2_u13l2", title:"More Aspect Pairs", icon:"⚡", xp:15, board:true, steps:[

{type:"intro", title:"More Essential Pairs",
 desc:"Master more high-frequency aspect pairs. Stem-changing pairs (like говорить/сказать) and suppletive pairs (брать/взять) require memorization.",
 goals:["Learn stem-changing pairs","Recognize suppletive pairs","Match aspect to context"]},

{type:"teach", trg:"говорить", src:"to speak (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Speaking, talking, saying (habitual/ongoing).\nPair: сказать.",
 example:"A: Ты говоришь по-русски?\nB: Да, немного.",
 exampleSrc:"A: Do you speak Russian?\nB: Yes, a little.",
 funFact:"Говорить conjugates: я говорю, ты говоришь, он говорит. Note the stem stays ГОВОР- throughout. Common -ить verb pattern."},

{type:"teach", trg:"сказать", src:"to say (perfective)", pos:"verb", gender:null,
 note:"Perfective. Single utterance.\nСУPPletive pair, completely different stem.",
 example:"A: Что он сказал?\nB: Не знаю.",
 exampleSrc:"A: What did he say?\nB: Don't know.",
 funFact:"Говорить and сказать are suppletive, historically unrelated stems. Similar to English 'go/went.' Russians don't think about this, they just learn the pair."},

{type:"teach", trg:"брать", src:"to take (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Ongoing/habitual taking.\nPair: взять.",
 example:"A: Ты берёшь автобус?\nB: Нет, на метро.",
 exampleSrc:"A: Are you taking the bus?\nB: No, by metro.",
 funFact:"Брать/взять suppletive pair. Брать for habits ('беру такси каждый день'), взять for one-time ('взял такси вчера')."},

{type:"teach", trg:"взять", src:"to take (perfective)", pos:"verb", gender:null,
 note:"Perfective. Single completed take.\nDifferent stem from брать.",
 example:"A: Ты взял билет?\nB: Да, вот он.",
 exampleSrc:"A: Did you take the ticket?\nB: Yes, here it is.",
 funFact:"Взять conjugates irregularly: я возьму, ты возьмёшь. The з appears only in future/imperative forms. Russian verb conjugation is famously complex."},

{type:"teach", trg:"давать", src:"to give (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Giving as process/habit.\nPair: дать.",
 example:"A: Ты даёшь ему деньги?\nB: Да, иногда.",
 exampleSrc:"A: Do you give him money?\nB: Yes, sometimes.",
 funFact:"Давать is another stem-mutation verb: я даю (not даваю!). The stem goes from ДАВА- to ДАЮ-. Subconscious pattern for native speakers, painful for learners."},

{type:"teach", trg:"дать", src:"to give (perfective)", pos:"verb", gender:null,
 note:"Perfective. Single giving action.\nIrregular in future: я дам, ты дашь.",
 example:"A: Дашь мне ручку?\nB: Конечно, возьми.",
 exampleSrc:"A: Will you give me a pen?\nB: Of course, take it.",
 funFact:"Дать has totally irregular future: дам, дашь, даст, дадим, дадите, дадут. Russians memorize this chart in school, it's famous."},

{type:"teach", trg:"покупать", src:"to buy (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. Stem change pair with купить.\nSyllable addition: пок-у-пать.",
 example:"A: Где ты обычно покупаешь хлеб?\nB: В магазине рядом.",
 exampleSrc:"A: Where do you usually buy bread?\nB: At the nearby store.",
 funFact:"Покупать/купить is a stem-change pair. Most Russian aspect pairs work this way: insert/remove a syllable. Pattern repeated in other verbs: принимать/принять, поднимать/поднять."},

{type:"teach", trg:"купить", src:"to buy (perfective)", pos:"verb", gender:null,
 note:"Perfective. Quick one-time purchase.\nConjugates: я куплю, ты купишь.",
 example:"A: Я купил новый телефон.\nB: Покажи!",
 exampleSrc:"A: I bought a new phone.\nB: Show it!",
 funFact:"Купить has a mutation in я form: куплю (not купю). This Л insertion appears in many -ить verbs: любить → люблю, готовить → готовлю. Another Russian pattern."},

{type:"tip", title:"Aspect Pair Types",
 text:"Russian aspect pairs follow three patterns:\n\n1. PREFIX (most common):\nимперф → перф by adding a prefix.\nделать → сделать, писать → написать.\n\n2. STEM CHANGE:\nимперф → перф by syllable/vowel change.\nпокупать → купить, поднимать → поднять.\n\n3. SUPPLETIVE (completely different words):\nговорить → сказать, брать → взять, класть → положить.\n\nMemorization tips:\n• Learn verb pairs ONLY as pairs.\n• Practice saying both forms immediately.\n• Use each form in a sentence during drills.\n• Pay attention to stem changes.\n\nCommon suppletive pairs to memorize:\nговорить/сказать (speak/say)\nбрать/взять (take)\nкласть/положить (put)\nлежать/лечь (lie)\nсадиться/сесть (sit)\nложиться/лечь (lie down)",
 icon:"⚡"},

{type:"mc", q:"What kind of pair is 'говорить/сказать'?",
 opts:["Suppletive pair","Not a pair","Prefix pair","Stem change pair"],
 ans:"Suppletive pair",
 hint:"The two verbs have completely different roots/stems. Historically unrelated."},

{type:"mc", q:"'Я беру такси каждый день', which aspect?",
 opts:["Past","Imperfective (habitual)","Perfective (one time)","Future"],
 ans:"Imperfective (habitual)",
 hint:"'Каждый день' (every day) = ___ action = ___."},

{type:"fb", s:"A: Что он {1} о погоде?\nB: Что завтра будет дождь.",
 a:["сказал"],
 opts:["сказал","говорил","говорит","скажет"],
 hint:"Past tense, completed single utterance about tomorrow's weather.",
 sSrc:"A: What did he say about the weather?\nB: That it will rain tomorrow."},

{type:"fb", s:"A: Ты {1} ключи от квартиры?\nB: Да, в кармане.",
 a:["взял"],
 opts:["взял","брал","беру","возьму"],
 hint:"Past tense, one completed action (taking keys before going out).",
 sSrc:"A: Did you take the keys?\nB: Yes, in my pocket."},

{type:"match", pairs:[
  {trg:"говорить", src:"to speak (imperf)"},
  {trg:"сказать", src:"to say (perf)"},
  {trg:"брать", src:"to take (imperf)"},
  {trg:"взять", src:"to take (perf)"},
  {trg:"покупать", src:"to buy (imperf)"}
]}
]},

{id:"ruv2_u13l3", title:"Using Aspect Correctly", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Choosing the Right Aspect",
 desc:"Apply aspect knowledge to real situations. Temporal markers help you choose: каждый день (every day) = imperfective, вчера вечером (yesterday evening) = perfective.",
 goals:["Match aspect to time markers","Use aspect in past tense","Use aspect in future tense"]},

{type:"teach", trg:"каждый день", src:"every day", pos:"phrase", gender:null,
 note:"Habitual marker.\nAlways requires imperfective.",
 example:"A: Как часто ты занимаешься?\nB: Каждый день по часу.",
 exampleSrc:"A: How often do you exercise?\nB: Every day for an hour.",
 funFact:"'Каждый день' (every day) is the classic imperfective trigger. Also: обычно (usually), часто (often), всегда (always), иногда (sometimes). All require imperfective."},

{type:"teach", trg:"вчера", src:"yesterday", pos:"adv", gender:null,
 note:"Past marker, typically perfective.\nBut with duration: imperfective.",
 example:"A: Что ты делал вчера?\nB: Читал книгу весь день.",
 exampleSrc:"A: What did you do yesterday?\nB: Read a book all day.",
 funFact:"'Вчера' alone doesn't determine aspect. Depends on duration. Вчера весь день писал (imperfective, process). Вчера наконец написал (perfective, completed)."},

{type:"teach", trg:"обычно", src:"usually", pos:"adv", gender:null,
 note:"Strong imperfective trigger.\nHabitual action.",
 example:"A: Ты обычно встаёшь рано?\nB: Да, в шесть.",
 exampleSrc:"A: Do you usually get up early?\nB: Yes, at six.",
 funFact:"Обычно pairs with imperfective. 'Обычно покупаю' (usually buy), habit. 'Обычно купил' (usually bought) sounds wrong, you can't regularly complete something once."},

{type:"teach", trg:"уже", src:"already", pos:"adv", gender:null,
 note:"Completion marker.\nStrong perfective trigger in past.",
 example:"A: Ты уже написал?\nB: Да, утром.",
 exampleSrc:"A: Have you already written it?\nB: Yes, in the morning.",
 funFact:"'Уже' + perfective past is THE way to express 'have (already) done.' English 'have done' maps directly. 'Ты уже закончил?' = Have you already finished?"},

{type:"teach", trg:"никогда не", src:"never", pos:"phrase", gender:null,
 note:"Double negative (required!).\nWith imperfective (habit).",
 example:"A: Ты когда-нибудь ел суши?\nB: Никогда не ел.",
 exampleSrc:"A: Have you ever eaten sushi?\nB: I've never eaten (it).",
 funFact:"Russian double negatives: 'никогда' requires 'не.' Habitual negation with imperfective. Single time: 'не съел' (didn't eat, this occasion)."},

{type:"teach", trg:"только что", src:"just (time)", pos:"phrase", gender:null,
 note:"Just now, moments ago.\nStrong perfective in past.",
 example:"A: Ты видел Петра?\nB: Только что ушёл.",
 exampleSrc:"A: Have you seen Petr?\nB: Just left.",
 funFact:"'Только что' emphasizes immediate past completion. Always with perfective: только что пришёл (just arrived), только что позвонил (just called)."},

{type:"teach", trg:"в субботу", src:"on Saturday", pos:"phrase", gender:null,
 note:"Specific time = perfective.\nExactness triggers perfective.",
 example:"A: Что будешь делать в субботу?\nB: Пойду в магазин.",
 exampleSrc:"A: What will you do Saturday?\nB: I'll go to the store.",
 funFact:"Specific time ('в субботу,' 'завтра,' 'в три часа') usually requires perfective future. Why? Specific = once = completed = perfective."},

{type:"teach", trg:"до завтра", src:"until tomorrow", pos:"phrase", gender:null,
 note:"Duration marker = imperfective.\nExtended time = process.",
 example:"A: Когда закончишь?\nB: До завтра буду писать.",
 exampleSrc:"A: When will you finish?\nB: I'll be writing until tomorrow.",
 funFact:"Duration expressions require imperfective: до завтра (until tomorrow), в течение часа (for an hour), весь день (all day), долго (for a long time)."},

{type:"tip", title:"Aspect Decision Rules",
 text:"PICK IMPERFECTIVE WHEN:\n✓ Repeated/habitual action: каждый день, обычно, часто.\n✓ Ongoing process: весь день, долго, в течение часа.\n✓ Statement of fact about an activity (no result implied).\n✓ Asking 'what were you doing?', process.\n\nPICK PERFECTIVE WHEN:\n✓ Single completed action: вчера вечером, утром.\n✓ Result achieved: уже, наконец.\n✓ Future promise/plan: завтра сделаю.\n✓ Specific moment: в три часа, в понедельник.\n\nKEY DIAGNOSTIC:\nIf you can add 'process of' in English, use imperfective.\nI was doing [process of doing] = делал.\nIf you can add 'completed' in English, use perfective.\nI (completed) did = сделал.\n\nPRACTICE:\nOn the way to work I usually buy bread. (ongoing habit = imperfective → покупаю).\nYesterday I bought a new phone. (completed once = perfective → купил).\nI'll tell you a story. (will complete = perfective → расскажу).\nI'll be writing all day. (continuous future = imperfective → буду писать).",
 icon:"🎯"},

{type:"mc", q:"'Каждое утро я ___ душ', which verb?",
 opts:["принимаю (imperf)","приму (perf future)","принял (perf past)","буду принимать (imperf future)"],
 ans:"принимаю (imperf)",
 hint:"'Каждое утро' (every morning) = habit = imperfective, present tense."},

{type:"mc", q:"'Вчера я ___ интересную книгу', which?",
 opts:["читал (imperf past)","прочитал (perf past)","буду читать","читаю"],
 ans:"прочитал (perf past)",
 hint:"Finished reading a specific book yesterday = completed = perfective ___."},

{type:"fb", s:"Я обычно {1} кофе утром.",
 a:["пью"],
 opts:["пью","выпью","выпил","пил"],
 hint:"Habitual action (обычно) = imperfective, present tense.",
 sSrc:"I usually drink coffee in the morning."},

{type:"fb", s:"Завтра я {1} эту работу.",
 a:["сделаю"],
 opts:["сделаю","делаю","делал","буду делать"],
 hint:"'Завтра' + completion expectation = perfective future.",
 sSrc:"Tomorrow I will complete this work."},

{type:"match", pairs:[
  {trg:"каждый день", src:"imperfective trigger"},
  {trg:"вчера вечером", src:"perfective context"},
  {trg:"уже", src:"perfective marker"},
  {trg:"обычно", src:"imperfective"},
  {trg:"только что", src:"perfective"}
]}
,{type:"match",pairs:[{trg:"давать",src:"to give (imperfective)"},{trg:"дать",src:"to give (perfective)"},{trg:"никогда не",src:"never"},{trg:"в субботу",src:"on Saturday"},{trg:"до завтра",src:"until tomorrow"}]}]},

{id:"ruv2_u13l_a2_actions_qualities", title:"Actions and Qualities", icon:"🌟", xp:15, board:true, steps:[

{type:"intro", title:"Actions and Qualities",
 desc:"Expand your vocabulary with essential A2 verbs and adjectives. These words describe what people do and what they are like, the building blocks of everyday conversation.",
 goals:["Learn 5 high-frequency A2 action verbs","Learn 4 core personality adjectives","Use them in natural dialogue"]},

{type:"teach", trg:"начинать", src:"to begin / to start", pos:"verb", gender:null,
 note:"Imperfective. Pair: начать (perf).\nSubject starts an action.",
 example:"A: Когда ты начинаешь работу?\nB: В девять часов.",
 exampleSrc:"A: When do you start work?\nB: At nine o'clock.",
 funFact:"Начинать comes from 'кон' (start/end) with the prefix на-. Its perfective 'начать' drops the -ива- suffix. Classic imperfective/perfective stem change pair."},

{type:"teach", trg:"заканчивать", src:"to finish / to end", pos:"verb", gender:null,
 note:"Imperfective. Pair: закончить (perf).\nOpposite of начинать.",
 example:"A: Ты заканчиваешь работу в шесть?\nB: Да, сегодня в шесть.",
 exampleSrc:"A: Do you finish work at six?\nB: Yes, today at six.",
 funFact:"Заканчивать shares the root 'конец' (end). Prefix за- adds the sense of completion. Pair: закончил = finished (done). Essential TRKI A2 verb."},

{type:"teach", trg:"помогать", src:"to help", pos:"verb", gender:null,
 note:"Imperfective. Pair: помочь (perf).\nTakes dative case: помогать кому.",
 example:"A: Ты помогаешь маме дома?\nB: Да, каждый день.",
 exampleSrc:"A: Do you help mom at home?\nB: Yes, every day.",
 funFact:"'Помогать' requires dative: помогать другу (to help a friend). Its perfective 'помочь' is suppletive-looking but shares the root МОГ (might/power). Russian 'мочь' = to be able."},

{type:"teach", trg:"ждать", src:"to wait", pos:"verb", gender:null,
 note:"Imperfective. Genitive or accusative object.\nNo simple perfective pair.",
 example:"A: Ты будешь ждать здесь?\nB: Да, пять минут.",
 exampleSrc:"A: Will you wait here?\nB: Yes, five minutes.",
 funFact:"'Ждать' takes genitive for abstract things (ждать автобуса) and accusative for people (жду тебя). This case split confuses learners. TRKI examiners test it."},

{type:"teach", trg:"бояться", src:"to be afraid / to fear", pos:"verb", gender:null,
 note:"Imperfective reflexive (-ся).\nTakes genitive: бояться чего.",
 example:"A: Ты боишься новой работы?\nB: Нет, всё хорошо.",
 exampleSrc:"A: Are you afraid of the new job?\nB: No, everything is fine.",
 funFact:"'Бояться' is always imperfective in the fear/phobia sense. The -ся marks a reflexive verb (no separate perfective needed for ongoing state). Genitive object: бояться работы (afraid of work)."},

{type:"teach", trg:"скучный", src:"boring", pos:"adj", gender:null,
 note:"Short form: скучно (it is boring).\nOpposite of интересный.",
 example:"A: Как был фильм?\nB: Скучный. Я чуть не заснул.",
 exampleSrc:"A: How was the film?\nB: Boring. I almost fell asleep.",
 funFact:"'Скучный' also means 'dull' in personality contexts. Adjective root СКУК- (boredom). Same root as 'скучать' (to miss/be bored). Note: 'скучно' without а subject = 'it is boring.'"},

{type:"teach", trg:"весёлый", src:"cheerful / merry / fun", pos:"adj", gender:null,
 note:"Used for people, parties, films.\nShort form: весело (it is fun).",
 example:"A: Твой брат весёлый?\nB: Да, всегда смеётся.",
 exampleSrc:"A: Is your brother cheerful?\nB: Yes, he always laughs.",
 funFact:"'Весёлый' is the root of 'веселье' (merriment/fun) and 'весело' (it is fun/merry). Used for New Year celebrations: 'Весёлого Нового года!' (Happy New Year!) in some regional greetings."},

{type:"teach", trg:"серьёзный", src:"serious", pos:"adj", gender:null,
 note:"Opposite of весёлый in personality.\nAlso used for situations.",
 example:"A: Он серьёзный студент?\nB: Да, много занимается.",
 exampleSrc:"A: Is he a serious student?\nB: Yes, he studies a lot.",
 funFact:"'Серьёзный' is a loanword from Latin 'serius' via French 'sérieux.' Russians use it the same way: серьёзная проблема (serious problem), серьёзный человек (serious person)."},

{type:"teach", trg:"умный", src:"smart / clever / intelligent", pos:"adj", gender:null,
 note:"Short form: умён (m), умна (f), умно (n).\nPositive trait.",
 example:"A: Твоя сестра умная?\nB: Да, она хорошо учится.",
 exampleSrc:"A: Is your sister smart?\nB: Yes, she studies well.",
 funFact:"'Умный' comes from 'ум' (mind/intelligence). Common phrases: умная мысль (clever thought), умный вопрос (smart question). Russians consider intellectual sharpness a high compliment."},

{type:"tip", title:"Adjective Short Forms",
 text:"Russian adjectives have two forms:\n\nLONG FORM (attributive, before a noun):\nумный студент (a smart student)\nвесёлый человек (a cheerful person)\nскучный фильм (a boring film)\n\nSHORT FORM (predicative, after verb быть):\nОн умён. (He is smart.)\nОна весела. (She is merry.)\nФильм скучен. (The film is boring.)\n\nFor BEGINNERS: use long form for everything.\nShort forms appear in formal writing, proverbs, and high register speech.\n\nADJECTIVE AGREEMENT: adjectives match noun gender.\n умный (m), умная (f), умное (n), умные (pl)\n весёлый (m), весёлая (f), весёлое (n), весёлые (pl)\n серьёзный (m), серьёзная (f), серьёзное (n), серьёзные (pl)\n скучный (m), скучная (f), скучное (n), скучные (pl)",
 deepDive:{title:"Short vs Long Form in Practice",
  text:"Short forms survive in modern Russian mainly in set phrases and elevated registers. You will encounter them in literature, proverbs, and official documents. In everyday speech, most speakers prefer long forms even after verbs. Exception: masculine singular short forms are still common in speech, especially with рад (glad), готов (ready), должен (must), and уверен (sure). These four have no usable long forms."}},

{type:"mc", q:"Which verb requires a dative object?",
 opts:["помогать","начинать","ждать","бояться"],
 ans:"помогать",
 hint:"This verb means 'to help.' In Russian, you help TO someone, so the person gets a special object case."},

{type:"mc", q:"'Я ___ экзамена', what verb fits?",
 opts:["начинаю","боюсь","жду","помогаю"],
 ans:"боюсь",
 hint:"This verb means to be afraid of something. It takes genitive case. 'Экзамена' is genitive of экзамен."},

{type:"mc", q:"Which adjective describes someone who is always laughing and making jokes?",
 opts:["скучный","умный","весёлый","серьёзный"],
 ans:"весёлый",
 hint:"Think: laughter, parties, fun. This word contains the root for 'merriment.'"},

{type:"fb", s:"A: Ты {1} работу в шесть?\nB: Да, иногда раньше.",
 a:["заканчиваешь"],
 opts:["заканчиваешь","начинаешь","помогаешь","боишься"],
 hint:"Present tense, 2nd person singular: 'Do you ___ work at six?' The verb means to finish.",
 sSrc:"A: Do you finish work at six?\nB: Yes, sometimes earlier."},

{type:"fb", s:"Он {1} помочь, потому что он добрый человек.",
 a:["начинает"],
 opts:["начинает","ждёт","боится","заканчивает"],
 hint:"He ___ to help because he is a kind person. Which verb means 'to start/begin'?",
 sSrc:"He begins to help because he is a kind person."},

{type:"fb", s:"Этот фильм очень {1}. Я хочу смотреть ещё.",
 a:["весёлый"],
 opts:["весёлый","скучный","серьёзный","умный"],
 hint:"The person wants to keep watching. The film is entertaining and fun, not boring.",
 sSrc:"This film is very fun. I want to watch more."},

{type:"mc", q:"'Серьёзный студент', what does this mean?",
 opts:["A bored student","A student who is afraid","A student who helps others","A diligent, focused student"],
 ans:"A diligent, focused student",
 hint:"This adjective describes someone who takes things seriously and works hard."},

{type:"match", pairs:[
 {trg:"начинать", src:"to begin / to start"},
 {trg:"заканчивать", src:"to finish / to end"},
 {trg:"помогать", src:"to help"},
 {trg:"ждать", src:"to wait"},
 {trg:"бояться", src:"to be afraid"}
]},

{type:"match", pairs:[
 {trg:"скучный", src:"boring"},
 {trg:"весёлый", src:"cheerful / merry / fun"},
 {trg:"серьёзный", src:"serious"},
 {trg:"умный", src:"smart / clever"}
]}

]}

]};
export default UNIT_13;
