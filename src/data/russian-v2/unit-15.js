// Russian V2 Unit 15 — Future Tense (B1.1)
const UNIT_15 = {n:15, lang:"ru", srcLang:"en", track:"v2", title:"Будущее время", sub:"Future Tense",
 icon:"🔮", level:"B1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u15l1", title:"Two Futures", icon:"🔮", xp:15, board:true, steps:[

{type:"intro", title:"Imperfective vs Perfective Future",
 desc:"Russian has TWO futures, reflecting the two aspects. Perfective: conjugate directly (like present). Imperfective: use буду + infinitive (like English 'will be doing').",
 goals:["Understand both futures","Form perfective future","Form imperfective future"]},

{type:"teach", trg:"буду", src:"I will be (future)", pos:"verb", gender:null,
 note:"Future of быть.\nUsed with imperfective infinitive for imperfective future.",
 example:"A: Что будешь делать завтра?\nB: Буду работать.",
 exampleSrc:"A: What will you do tomorrow?\nB: I'll be working.",
 funFact:"'Буду' + infinitive mirrors English 'I will be ___ing.' Same meaning: continuous/habitual future. Russian only uses this with imperfective verbs."},

{type:"teach", trg:"будешь", src:"you will be (informal)", pos:"verb", gender:null,
 note:"2nd person singular future of быть.\n'Что будешь делать?' = What will you do?",
 example:"A: Будешь чай?\nB: Буду, спасибо.",
 exampleSrc:"A: Will you have tea?\nB: I will, thanks.",
 funFact:"'Будешь чай?' (literally 'will you be tea?') is a fixed offering formula. Same as English 'would you like tea?' Natural Russian offering pattern."},

{type:"teach", trg:"будет", src:"will be (he/she/it)", pos:"verb", gender:null,
 note:"3rd person singular.\nUsed for all 'he/she/it will be.'",
 example:"A: Завтра будет дождь?\nB: Да, будет.",
 exampleSrc:"A: Will it rain tomorrow?\nB: Yes, it will.",
 funFact:"'Будет' is widely used for impersonal futures: будет холодно (it will be cold), будет интересно (it will be interesting). Matches the impersonal present forms."},

{type:"teach", trg:"будем", src:"we will be", pos:"verb", gender:null,
 note:"1st person plural future.\n'Что мы будем делать?' = What will we do?",
 example:"A: Что будем делать вечером?\nB: Будем гулять.",
 exampleSrc:"A: What will we do in the evening?\nB: We'll go for a walk.",
 funFact:"'Что будем делать?' is Russia's 'what should we do?' — a frequent planning phrase. Dostoevsky's 'Что делать?' (What to do?) novel made the question iconic."},

{type:"teach", trg:"будете", src:"you will be (pl/formal)", pos:"verb", gender:null,
 note:"2nd person plural/formal future.\nFor вы address.",
 example:"A: Вы будете завтракать?\nB: Да, через час.",
 exampleSrc:"A: Will you have breakfast?\nB: Yes, in an hour.",
 funFact:"'Будете' + infinitive is polite future. Service staff often use this: 'Что будете заказывать?' (What will you be ordering?) at restaurants."},

{type:"teach", trg:"будут", src:"they will be", pos:"verb", gender:null,
 note:"3rd person plural future.\nДля коллективов, групп, вещей.",
 example:"A: Твои друзья будут на вечеринке?\nB: Все будут.",
 exampleSrc:"A: Will your friends be at the party?\nB: All will be.",
 funFact:"'Все будут' (everyone will be) is a fixed phrase. Used to reassure or promise full attendance. 'Все будут, не волнуйся.'"},

{type:"teach", trg:"сделаю", src:"I will do (perfective future)", pos:"verb", gender:null,
 note:"Perfective future = conjugate like present.\nNo буду needed for perfective.",
 example:"A: Сделаешь?\nB: Конечно, сделаю.",
 exampleSrc:"A: Will you do it?\nB: Sure, will do.",
 funFact:"Perfective future conjugations LOOK like present-tense patterns but MEAN future. Я сделаю = I'll do (once, completed). Only perfective verbs work this way."},

{type:"teach", trg:"напишу", src:"I will write (perfective future)", pos:"verb", gender:null,
 note:"Perfective future of написать.\nOne-time writing action.",
 example:"A: Напишешь мне?\nB: Конечно, вечером.",
 exampleSrc:"A: Will you write to me?\nB: Sure, in the evening.",
 funFact:"'Напишу вечером' — specific completed future event. Versus 'буду писать весь вечер' (will be writing all evening = imperfective future)."},

{type:"tip", title:"The Two Russian Futures",
 text:"Russian futures are BUILT DIFFERENTLY for each aspect:\n\nIMPERFECTIVE FUTURE (extended/habitual):\nбуду/будешь/будет/будем/будете/будут + INFINITIVE (imperfective).\nЯ буду читать. (I will be reading.)\nОн будет работать. (He will be working.)\n\nPERFECTIVE FUTURE (completed action):\nConjugate like present, but from PERFECTIVE infinitive.\nЯ прочитаю. (I will read [completely].)\nОн напишет. (He will write [and finish].)\n\nCOMPARE:\nЗавтра я буду читать. (I'll be reading tomorrow — duration.)\nЗавтра я прочитаю книгу. (I'll read the book tomorrow — complete it.)\n\nKEY RULE: перf verb conjugated = future. Imperf verb conjugated = present.\nделаю = I'm doing (now).\nсделаю = I will do.\n\nRussian grammar is elegant: aspect + tense do more work together than English.",
 deepDive:{title:"Why Russian Future Is Different",
  text:"Russian lost much of its Old Slavic tense system but preserved the aspect distinction. The perfective 'conjugates forward' (present form = future meaning) because it was historically perfect tense. The imperfective uses буду + infinitive like many European languages. This split makes Russian future unique among Slavic languages."}},

{type:"mc", q:"'I will be reading' in Russian:",
 opts:["Я читаю","Я буду читать","Я прочитаю","Я читал"],
 ans:"Я буду читать",
 hint:"Extended future reading = imperfective future = буду + infinitive."},

{type:"mc", q:"'I will write' (once, complete) in Russian:",
 opts:["Я буду писать","Я напишу","Я пишу","Я писал"],
 ans:"Я напишу",
 hint:"Completed single action in future = perfective future conjugated like present."},

{type:"fb", s:"A: Что {1} делать в субботу?\nB: Буду отдыхать.",
 a:["будешь"],
 opts:["будешь","будете","буду","будет"],
 hint:"Informal question to one person (ты) — 2nd person singular.",
 sSrc:"A: What will you do Saturday?\nB: I'll be resting."},

{type:"fb", s:"A: Ты {1} мне, когда приедешь?\nB: Обязательно, из аэропорта.",
 a:["напишешь"],
 opts:["напишешь","пишешь","будешь писать","писал"],
 hint:"Single completed action in future = perfective future.",
 sSrc:"A: Will you write to me when you arrive?\nB: Definitely, from the airport."},

{type:"match", pairs:[
  {trg:"буду", src:"I will be"},
  {trg:"будешь", src:"you will be"},
  {trg:"будет", src:"he/she/it will be"},
  {trg:"будем", src:"we will be"},
  {trg:"будут", src:"they will be"}
]}
]},

{id:"ruv2_u15l2", title:"Planning Future", icon:"📋", xp:15, board:true, steps:[

{type:"intro", title:"Expressing Plans",
 desc:"Russian has several ways to express plans and intentions. Learn планировать, собираться, and the distinction between formal and casual planning.",
 goals:["Use планировать (to plan)","Use собираться (intend to)","Express future commitments"]},

{type:"teach", trg:"планировать", src:"to plan (imperfective)", pos:"verb", gender:null,
 note:"Imperfective. -овать verb.\nЯ планирую, ты планируешь.",
 example:"A: Что ты планируешь на выходные?\nB: Поехать на дачу.",
 exampleSrc:"A: What are you planning for the weekend?\nB: Go to the dacha.",
 funFact:"Планировать appeared in Russian with bureaucratic Sovietism. Now universal for organized planning. Kids plan with it, businesses plan with it."},

{type:"teach", trg:"собираться", src:"to be going to / intend", pos:"verb", gender:null,
 note:"Reflexive verb. Я собираюсь, ты собираешься.\nUsed with infinitive: собираюсь ехать.",
 example:"A: Ты собираешься идти?\nB: Да, собираюсь.",
 exampleSrc:"A: Are you going to go?\nB: Yes, I'm planning to.",
 funFact:"Собираться originally meant 'to gather oneself.' Still means 'to assemble' and 'to get ready.' The 'to intend' meaning comes from 'gathering oneself for action.'"},

{type:"teach", trg:"хотеть", src:"to want (imperfective)", pos:"verb", gender:null,
 note:"Irregular! я хочу, ты хочешь, он хочет, мы хотим, вы хотите, они хотят.\nStem changes between хоч- and хот-.",
 example:"A: Что ты хочешь?\nB: Хочу поехать в Италию.",
 exampleSrc:"A: What do you want?\nB: I want to go to Italy.",
 funFact:"Хотеть is among most irregular Russian verbs. Stem mutation across persons is unique. Russian children notice and sometimes 'correct' to regular forms — hyperforming."},

{type:"teach", trg:"намерение", src:"intention", pos:"noun", gender:"n",
 note:"Neuter noun. Formal register.\n'С намерением' = with intention.",
 example:"A: Его намерение понятно?\nB: Да, он хочет учиться.",
 exampleSrc:"A: Is his intention clear?\nB: Yes, he wants to study.",
 funFact:"Намерение is formal/legal-sounding. In court: 'с намерением совершить' (with intent to commit). Everyday speech uses намерен (intends) less often."},

{type:"teach", trg:"надеяться", src:"to hope", pos:"verb", gender:null,
 note:"Reflexive verb. Я надеюсь, ты надеешься.\nНадеюсь, что = I hope that.",
 example:"A: Надеюсь, завтра будет хорошая погода.\nB: Я тоже надеюсь.",
 exampleSrc:"A: I hope the weather's good tomorrow.\nB: I hope so too.",
 funFact:"Надеяться + на + accusative = to rely on. Надеюсь на тебя (I rely on you). Reflexive -ся makes it 'inner action' — hope inside oneself."},

{type:"teach", trg:"цель", src:"goal", pos:"noun", gender:"f",
 note:"Feminine, ends in -ь.\nПоставить цель = to set a goal.",
 example:"A: Какая у тебя цель?\nB: Выучить русский язык.",
 exampleSrc:"A: What's your goal?\nB: To learn Russian.",
 funFact:"Цель shares root with целый (whole, entire). Hitting a goal = achieving wholeness. Russian semantic connections between words are often philosophical."},

{type:"teach", trg:"мечта", src:"dream / desire", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nБольшая мечта = big dream.",
 example:"A: Какая у тебя мечта?\nB: Много путешествовать.",
 exampleSrc:"A: What's your dream?\nB: To travel a lot.",
 funFact:"Мечта is distinct from сон (dream while sleeping). Мечта = aspiration. Russians talk easily about мечты — it's not considered childish like English 'dream' can be."},

{type:"teach", trg:"решить", src:"to decide (perfective)", pos:"verb", gender:null,
 note:"Perfective. Pair: решать.\nПомощник for fixing decisions.",
 example:"A: Что ты решил?\nB: Я решил остаться.",
 exampleSrc:"A: What did you decide?\nB: I decided to stay.",
 funFact:"Решить has two meanings: to decide AND to solve (a problem). Same verb, context clarifies. 'Решить задачу' = solve a problem; 'решить ехать' = decide to go."},

{type:"tip", title:"Expressing Future Plans",
 text:"Russian has a spectrum of plan-expressing verbs:\n\nFORMAL/BUREAUCRATIC:\nЯ планирую работать. (I plan to work.) — organized/scheduled.\n\nCASUAL INTENTION:\nЯ собираюсь работать. (I'm going to work.) — firm intent.\nЯ хочу работать. (I want to work.) — desire.\n\nDECISIONAL:\nЯ решил работать. (I decided to work.) — decision made.\n\nHOPEFUL:\nЯ надеюсь работать. (I hope to work.) — expectation.\n\nFIXED FUTURE:\nЯ буду работать. (I will be working.) — definite future.\nЯ поработаю. (I'll work [for a while].) — short future.\n\nPRACTICE COMBINING:\nЯ планирую поехать летом в отпуск.\nОн собирается купить новый компьютер.\nМы хотим посетить Петербург.\n\nBy combining plan verbs with main verbs (infinitives), you get sophisticated Russian expression.",
 icon:"📅"},

{type:"mc", q:"Which expresses 'I'm going to' with casual certainty?",
 opts:["Я планирую","Я собираюсь","Я хочу","Я надеюсь"],
 ans:"Я собираюсь",
 hint:"Собираться = intend to do, firm casual plan. Планирую is more formal."},

{type:"mc", q:"Which noun means 'goal'?",
 opts:["мечта","намерение","цель","план"],
 ans:"цель",
 hint:"Feminine, ends in -ь. Shares root with 'целый' (whole)."},

{type:"fb", s:"A: Какая у тебя {1} на год?\nB: Выучить русский.",
 a:["цель"],
 opts:["цель","мечта","надежда","намерение"],
 hint:"A yearly objective — specific, measurable. Which of these?",
 sSrc:"A: What's your goal for the year?\nB: Learn Russian."},

{type:"fb", s:"A: {1}, что экзамен не будет трудным.\nB: Я тоже.",
 a:["Надеюсь"],
 opts:["Надеюсь","Планирую","Решил","Хочу"],
 hint:"Expressing hopeful expectation about future.",
 sSrc:"A: I hope the exam won't be difficult.\nB: Me too."},

{type:"match", pairs:[
  {trg:"планировать", src:"to plan"},
  {trg:"собираться", src:"to intend"},
  {trg:"надеяться", src:"to hope"},
  {trg:"решить", src:"to decide"},
  {trg:"цель", src:"goal"}
]}
]},

{id:"ruv2_u15l3", title:"Conditional 'Would'", icon:"🎲", xp:15, board:true, steps:[

{type:"intro", title:"Russian Conditional",
 desc:"Russian conditional is formed simply: past tense + бы. One particle gives you 'would + verb.' Used for hypotheticals, polite requests, wishes.",
 goals:["Form conditional with бы","Express polite requests","Use wishes with 'если бы'"]},

{type:"teach", trg:"бы", src:"would (particle)", pos:"part", gender:null,
 note:"Conditional particle.\nPlaces: usually after subject or past verb.",
 example:"A: Я бы пошёл туда.\nB: Да, я тоже.",
 exampleSrc:"A: I would go there.\nB: Yes, me too.",
 funFact:"Бы is the shortest Russian particle. Its placement changes subtle meaning but rules are flexible. 'Я бы пошёл,' 'Я пошёл бы,' 'Пошёл бы я' — all acceptable."},

{type:"teach", trg:"хотел бы", src:"would like (m)", pos:"phrase", gender:null,
 note:"Politer than 'хочу.'\nFeminine: хотела бы. Plural: хотели бы.",
 example:"A: Что вы хотели бы заказать?\nB: Чай, пожалуйста.",
 exampleSrc:"A: What would you like to order?\nB: Tea, please.",
 funFact:"'Хотел бы/хотела бы' is THE standard polite ordering/asking form. Russians use it for restaurants, shops, formal requests. English 'I would like' maps directly."},

{type:"teach", trg:"мог бы", src:"could (m)", pos:"phrase", gender:null,
 note:"Past мог + бы.\nOften in polite requests.",
 example:"A: Ты мог бы помочь?\nB: Конечно, что нужно?",
 exampleSrc:"A: Could you help?\nB: Sure, what's needed?",
 funFact:"'Мог бы' replaces direct request. 'Помоги!' (command) vs 'Ты мог бы помочь?' (polite request). Softens imperative significantly."},

{type:"teach", trg:"если бы", src:"if (hypothetical)", pos:"phrase", gender:null,
 note:"Conditional if-clause.\n'Если бы у меня было время...' = if I had time.",
 example:"A: Если бы у тебя было время?\nB: Я бы путешествовал.",
 exampleSrc:"A: If you had time?\nB: I'd travel.",
 funFact:"'Если бы' sets up hypotheticals. Both clauses use past tense + бы: 'если бы я знал, я бы сказал' (if I'd known, I'd have said)."},

{type:"teach", trg:"было бы", src:"would be (it)", pos:"phrase", gender:null,
 note:"Impersonal conditional.\nХорошо было бы = it would be good.",
 example:"A: Куда поедем?\nB: Было бы хорошо поехать на север.",
 exampleSrc:"A: Where will we go?\nB: It would be nice to go north.",
 funFact:"'Было бы + adverb' is Russia's 'it would be [X]' pattern. Было бы хорошо (would be good), было бы лучше (would be better), было бы здорово (would be awesome)."},

{type:"teach", trg:"пошёл бы", src:"would go (m)", pos:"phrase", gender:null,
 note:"Пошёл (perfective past of идти) + бы.\nFor 'would go on foot.'",
 example:"A: Пошёл бы погулять.\nB: Отличная идея!",
 exampleSrc:"A: I'd go for a walk.\nB: Great idea!",
 funFact:"'Пошёл бы' can be slightly passive-aggressive: 'Да пошёл бы ты...' (go...) — used as a polite rejection/dismissal. Context matters."},

{type:"teach", trg:"купил бы", src:"would buy (m)", pos:"phrase", gender:null,
 note:"Conditional purchase hypothesis.\nFeminine: купила бы.",
 example:"A: Что ты бы купил, если бы выиграл?\nB: Дом.",
 exampleSrc:"A: What would you buy if you won?\nB: A house.",
 funFact:"Classic 'if I won the lottery' conversation in Russian always uses купил бы. Part of universal daydreaming vocabulary."},

{type:"teach", trg:"жаль", src:"(it is a) pity", pos:"adv", gender:null,
 note:"Impersonal adverb.\n'Жаль, что...' = it's a pity that...",
 example:"A: Жаль, что ты не был там.\nB: Да, жаль.",
 exampleSrc:"A: Pity you weren't there.\nB: Yes, a pity.",
 funFact:"'Жаль' is essentially a universal regret word. Can express pity, regret, disappointment. Russians use it more often than English uses 'pity' — it's conversational, not formal."},

{type:"tip", title:"Russian Conditional Formation",
 text:"FORMULA: PAST TENSE VERB + БЫ\n\nHow to form conditional 'would X':\n1. Take the past tense of the verb.\n2. Add the particle бы.\n\nEXAMPLES:\nЯ сделал бы. = I would do.\nЯ сделала бы. = I would do. (feminine)\nОн помог бы. = He would help.\nМы пошли бы. = We would go.\n\nTHE POLITE REQUEST PATTERN:\nTы мог бы + infinitive? = Could you [do X]?\nТы мог бы помочь? (Could you help?)\nВы могли бы сказать? (Could you tell me?)\n\nTHE HYPOTHETICAL PATTERN:\nЕсли бы + past + ..., past + бы + ...\nЕсли бы я знал, я бы сказал.\n(If I had known, I would have said.)\n\nTHE WISH PATTERN:\nЯ хотел(а) бы + infinitive = I would like to...\nЯ хотел бы поехать в Париж.\n\nConditional mood is simple in Russian — just one particle.",
 deepDive:{title:"Why Russian Conditional Is Simple",
  text:"Russian lost most subjunctive markers through history. The particle бы (from the old aorist of быть) attached itself to past tense forms. Result: Russian conditional is simpler than French, German, Spanish conditionals. You don't conjugate a separate mood — just past + бы."}},

{type:"mc", q:"'I would like tea' — the polite way:",
 opts:["Я хочу чай","Я хотела бы чай","Я буду чай","Я бы пил чай"],
 ans:"Я хотела бы чай",
 hint:"Conditional 'хотела бы' (feminine) or 'хотел бы' (masculine) is the standard polite request."},

{type:"mc", q:"How is Russian conditional formed?",
 opts:["Special verb ending","Past tense + бы","Infinitive + would","Present + бы"],
 ans:"Past tense + бы",
 hint:"Simple! Just add the particle бы to the ___ ___ form."},

{type:"fb", s:"A: Что ты {1}, если выиграешь в лотерею?\nB: Большой дом у моря.",
 a:["купил бы"],
 opts:["купил бы","купишь","покупаешь","купил"],
 hint:"Hypothetical 'would buy' = conditional. Past tense masculine + the conditional particle.",
 sSrc:"A: What would you buy if you won the lottery?\nB: A big house by the sea."},

{type:"fb", s:"A: {1} бы ты помочь мне с переводом?\nB: Конечно, давай.",
 a:["Мог"],
 opts:["Мог","Могу","Будешь","Могла бы"],
 hint:"Polite request — 'could you' = masculine conditional. Speaker addressing a friend.",
 sSrc:"A: Could you help me with the translation?\nB: Sure, let's do it."},

{type:"match", pairs:[
  {trg:"бы", src:"would (particle)"},
  {trg:"хотел бы", src:"would like"},
  {trg:"мог бы", src:"could"},
  {trg:"если бы", src:"if (hypothetical)"},
  {trg:"жаль", src:"it's a pity"}
]}
,{type:"match",pairs:[{trg:"сделаю",src:"I will do (perfective future)"},{trg:"хотеть",src:"to want (imperfective)"}]}]}

,{id:"ruv2_u15l_burocr", title:"Бюрократия и документы", icon:"🏛️", xp:15, board:true, steps:[

{type:"intro", title:"Handling Administrative Situations",
 desc:"Essential vocabulary for Russian bureaucracy: the post office, МФЦ, official documents, and formal requests. Tested on TRKI B1 and essential for everyday life in Russia.",
 goals:["Navigate the post office and МФЦ","Request official documents","Use polite official Russian"]},

{type:"teach", trg:"почта", src:"post office / mail", pos:"noun", gender:"f",
 note:"Refers to both the post office building and mail/post in general.\nFeminine noun.",
 example:"A: Где ближайшая почта?\nB: Почта на следующей улице.",
 exampleSrc:"A: Where is the nearest post office?\nB: The post office is on the next street.",
 funFact:"'Почта' comes from Italian 'posta' (relay station), entering Russian in the 17th century when Peter the Great set up the first postal routes."},

{type:"teach", trg:"документ", src:"document", pos:"noun", gender:"m",
 note:"Official paper: passport, certificate, contract, etc.\nMasculine noun.",
 example:"A: Вам нужен документ?\nB: Да, возьмите мой документ.",
 exampleSrc:"A: Do you need a document?\nB: Yes, take my document.",
 funFact:"Russians carry their 'документы' everywhere — being stopped without ID is a real possibility, and the police can request it at any time."},

{type:"teach", trg:"паспорт", src:"passport", pos:"noun", gender:"m",
 note:"The Russian internal passport (паспорт гражданина РФ) is required for domestic travel, banking, and most official procedures.\nMasculine noun.",
 example:"A: У вас есть паспорт?\nB: Да, мой паспорт здесь.",
 exampleSrc:"A: Do you have your passport?\nB: Yes, my passport is right here.",
 funFact:"Russians have TWO passports: an internal one for life in Russia and a foreign one (загранпаспорт) for international travel. Most transactions require the internal one."},

{type:"teach", trg:"виза", src:"visa", pos:"noun", gender:"f",
 note:"Entry permit for a foreign country.\nFeminine noun.",
 example:"A: Моя виза скоро закончится.\nB: Нужно продлить визу.",
 exampleSrc:"A: My visa will expire soon.\nB: You need to extend the visa.",
 funFact:"Russia issues over 30 types of visas. The most common for foreigners is the tourist visa (туристическая виза), valid for 30 days."},

{type:"teach", trg:"прописка", src:"residence registration", pos:"noun", gender:"f",
 note:"The official system of registering your place of residence with the state.\nFeminine noun.\nAlso called 'регистрация' in modern usage.",
 example:"A: Мне нужна прописка в Москве.\nB: Идите на почту или в МФЦ.",
 exampleSrc:"A: I need residence registration in Moscow.\nB: Go to the post office or MFC.",
 funFact:"Прописка dates back to the Soviet era. Today it is officially called 'регистрация', but Russians still use 'прописка' in everyday speech."},

{type:"teach", trg:"продлить", src:"to renew / extend (perfective)", pos:"verb", gender:null,
 note:"Perfective verb: to extend a deadline, visa, contract, or document.\nImperfective pair: продлевать.",
 example:"A: Нужно продлить визу до конца месяца.\nB: Хорошо, я сделаю это сегодня.",
 exampleSrc:"A: The visa needs to be extended by the end of the month.\nB: OK, I will do it today.",
 funFact:"In Russian bureaucracy, 'продлить' is one of the most-used verbs. You продлить visas, contracts, insurance, library books, and even subscriptions."},

{type:"teach", trg:"справка", src:"official certificate / reference letter", pos:"noun", gender:"f",
 note:"An official document confirming a fact: income, residence, medical status, etc.\nFeminine noun.\nYou 'получить справку' (get a certificate) or 'взять справку' (pick up a certificate).",
 example:"A: Мне нужна справка с работы.\nB: Напишите заявление, и вы получите справку.",
 exampleSrc:"A: I need a certificate from work.\nB: Write an application and you will receive the certificate.",
 funFact:"The справка is the lifeblood of Russian administration. To enroll in school, open a bank account, or apply for benefits, you will almost certainly need at least one."},

{type:"tip", title:"МФЦ: Russia's One-Stop Government Office",
 text:"МФЦ (Многофункциональный центр) is the modern solution to Russian bureaucracy. Instead of visiting five separate offices, you go to one МФЦ to get your прописка, renew documents, and request any справка.\n\nKey phrases:\n- 'Возьмите талон' — Take a ticket (queue number).\n- 'Подойдите к окошку' — Approach the window.\n- 'Заполните бланк' — Fill in the form.",
 deepDive:"Before МФЦ existed, getting a single government document could mean queuing at multiple offices across the city. МФЦ centres opened in 2011 and now serve all major Russian cities. If you live in Russia, find your nearest МФЦ first — it will save hours."},

{type:"fb", s:"A: Мне нужна {1} в Россию на три месяца.\nB: Хорошо, я помогу вам.",
 a:["виза"],
 opts:["виза","справка","прописка","паспорт"],
 hint:"This official permit allows you to enter a country for a set period.",
 sSrc:"A: I need a visa to Russia for three months.\nB: OK, I will help you."},

{type:"mc", q:"What does 'прописка' mean in Russian administrative life?",
 opts:["A type of visa","Residence registration","A bank certificate","A post office form"],
 ans:"Residence registration",
 hint:"This is the system that ties you officially to an address in Russia."},

{type:"mc", q:"You need to renew your visa before it expires. Which verb do you use?",
 opts:["заполнить","написать","продлить","взять"],
 ans:"продлить",
 hint:"This perfective verb means to extend a deadline or document beyond its current end date."},

{type:"fb", s:"A: Мне нужна {1} с работы для банка.\nB: Хорошо, я дам вам её завтра.",
 a:["справка"],
 opts:["справка","виза","прописка","почта"],
 hint:"An official document confirming employment or income — common for bank applications.",
 sSrc:"A: I need an official certificate from work for the bank.\nB: OK, I will give it to you tomorrow."},

{type:"fb", s:"A: Где мой {1}? Мне нужно показать его на почте.\nB: Вот он, в сумке.",
 a:["паспорт"],
 opts:["паспорт","документ","справка","виза"],
 hint:"The specific ID document Russians need for nearly all official transactions.",
 sSrc:"A: Where is my passport? I need to show it at the post office.\nB: Here it is, in the bag."},

{type:"match", pairs:[
 {trg:"почта", src:"post office / mail"},
 {trg:"справка", src:"official certificate"},
 {trg:"прописка", src:"residence registration"},
 {trg:"продлить", src:"to renew / extend"},
 {trg:"документ", src:"document"}
]}

]}

]};
export default UNIT_15;
