// Russian V2 Unit 14 — Past Tense (B1.1)
const UNIT_14 = {n:14, lang:"ru", srcLang:"en", track:"v2", title:"Прошедшее время", sub:"Past Tense with Aspect",
 icon:"📅", level:"B1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u14l1", title:"Past Formation", icon:"📅", xp:15, board:true, steps:[

{type:"intro", title:"Russian Past Tense",
 desc:"Russian past tense is surprisingly simple — just add -л/-ла/-ло/-ли based on gender/number. But aspect choice (imperfective vs perfective) determines the meaning.",
 goals:["Form past tense from infinitives","Agree past with gender","Apply aspect to past"]},

{type:"teach", trg:"работал", src:"worked (he)", pos:"verb", gender:null,
 note:"Past tense. Drop infinitive -ть, add -л for masculine.\nFrom работать.",
 example:"A: Что ты делал вчера?\nB: Работал до ночи.",
 exampleSrc:"A: What did you do yesterday?\nB: Worked till night.",
 funFact:"Russian past doesn't conjugate for person (я/ты/он all use работал). It conjugates for GENDER. This is unusual globally — most languages conjugate past for person."},

{type:"teach", trg:"работала", src:"worked (she)", pos:"verb", gender:null,
 note:"Feminine past: add -ла.\nУ неё = 'at her.'",
 example:"A: Где была Маша?\nB: Она работала в офисе.",
 exampleSrc:"A: Where was Masha?\nB: She worked in the office.",
 funFact:"The feminine -ла ending is universal. 'Я работала' said by a woman, 'я работал' by a man. The same past tense form changes with the speaker's gender."},

{type:"teach", trg:"работало", src:"worked (it)", pos:"verb", gender:null,
 note:"Neuter past: add -ло.\nRare for work verbs (worked is usually a person).",
 example:"A: Правительство работало хорошо.\nB: Согласен.",
 exampleSrc:"A: The government worked well.\nB: I agree.",
 funFact:"Neuter past is used when subject is неуter: сердце работало (the heart worked), правительство (government, which is neuter)."},

{type:"teach", trg:"работали", src:"worked (they/we/you pl)", pos:"verb", gender:null,
 note:"Plural past: add -ли.\nNo distinction between мы/вы/они in past.",
 example:"A: Что вы делали в выходные?\nB: Работали над проектом.",
 exampleSrc:"A: What did you do on weekends?\nB: Worked on a project.",
 funFact:"Plural -ли works for всех: мы (we), вы (you plural/formal), они (they). Russian past is refreshingly regular in this respect."},

{type:"teach", trg:"жил", src:"lived (he)", pos:"verb", gender:null,
 note:"From жить (to live).\nStandard -л ending for masculine.",
 example:"A: Где ты жил в детстве?\nB: В маленьком городе.",
 exampleSrc:"A: Where did you live in childhood?\nB: In a small city.",
 funFact:"Жить is one of the most common Russian verbs. Its past (жил, жила, жило, жили) appears everywhere in stories: 'жил-был царь' (there lived a king) — opening of many fairy tales."},

{type:"teach", trg:"был", src:"was (he)", pos:"verb", gender:null,
 note:"From быть (to be). Irregular.\nPast: был/была/было/были.",
 example:"A: Ты был там?\nB: Да, вчера был.",
 exampleSrc:"A: Were you there?\nB: Yes, was there yesterday.",
 funFact:"Russian doesn't use 'to be' in present (омитted) but NEEDS it in past: 'Я студент' (I'm a student, present, no verb) vs 'Я был студентом' (I was a student, past, with был)."},

{type:"teach", trg:"было", src:"was (it/impersonal)", pos:"verb", gender:null,
 note:"Neuter past of быть.\nUsed in impersonal expressions.",
 example:"A: Было интересно?\nB: Очень!",
 exampleSrc:"A: Was it interesting?\nB: Very!",
 funFact:"Impersonal 'было' pairs with adverbs in past: было холодно (it was cold), было весело (it was fun). Essential for expressing past states."},

{type:"tip", title:"Russian Past Tense Formation",
 text:"Russian past is built from the INFINITIVE stem + gender/number ending.\n\nSTEP 1: Drop the infinitive ending.\nчитать → чита-\nписать → писа-\nговорить → говори-\n\nSTEP 2: Add the gender/number ending.\n-л (masculine): читал, писал, говорил.\n-ла (feminine): читала, писала, говорила.\n-ло (neuter): читало (rare — needs neuter subject).\n-ли (plural): читали, писали, говорили.\n\nSAME FOR BOTH ASPECTS:\nImperfective past: делал (was doing).\nPerfective past: сделал (did, completed).\n\nThe form is identical — just different verb stem.\n\nSPECIAL CASES:\n• Verbs in -ти, -сти, -чь have irregular past:\n  идти → шёл, шла, шло, шли.\n  мочь → мог, могла, могло, могли.\n  принести → принёс, принесла.",
 deepDive:{title:"Why Russian Past Is Unique",
  text:"Russian lost its complicated Old Slavic past tense system (aorist, imperfect) and kept only a participial form — the -л element is historically a participle. This simplification is why Russian past conjugates for GENDER (it's adjective-like) rather than person. A gift to learners compared to languages with complex past tenses."}},

{type:"mc", q:"'She worked' in Russian:",
 opts:["Она работал","Она работала","Она работало","Она работали"],
 ans:"Она работала",
 hint:"Feminine subject (она) + feminine past ending -ла."},

{type:"mc", q:"Russian past tense conjugates for:",
 opts:["Person (я/ты/он)","Gender (m/f/n) and number","Tense only","Nothing"],
 ans:"Gender (m/f/n) and number",
 hint:"Unlike most languages with personal past, Russian uses ___-based endings."},

{type:"fb", s:"A: Что ты делала вчера?\nB: Я {1} дома весь день.",
 a:["работала"],
 opts:["работала","работал","работало","работали"],
 hint:"Speaker is female (note 'делала'). Past tense, feminine ending.",
 sSrc:"A: What did you do yesterday?\nB: I worked at home all day."},

{type:"fb", s:"A: Вы ходили на концерт?\nB: Да, мы {1} там вчера.",
 a:["были"],
 opts:["были","был","была","было"],
 hint:"Plural subject 'мы' + past of 'быть' (to be). Pick the plural past form.",
 sSrc:"A: Did you go to the concert?\nB: Yes, we were there yesterday."},

{type:"match", pairs:[
  {trg:"работал", src:"worked (he)"},
  {trg:"работала", src:"worked (she)"},
  {trg:"работали", src:"worked (we/you/they)"},
  {trg:"был", src:"was (he)"},
  {trg:"была", src:"was (she)"}
]}
]},

{id:"ruv2_u14l2", title:"Past with Aspect", icon:"🔄", xp:15, board:true, steps:[

{type:"intro", title:"Past Choice: Imperfective or Perfective",
 desc:"The aspect you choose in past tense determines the meaning. Imperfective past = was doing/used to do. Perfective past = did and finished.",
 goals:["Distinguish past aspects","Use appropriate markers","Understand 'was doing' vs 'did'"]},

{type:"teach", trg:"делал", src:"was doing (imperfective past)", pos:"verb", gender:null,
 note:"Imperfective past. Process, habit, repeated.\nFocus on duration.",
 example:"A: Что ты делал вчера вечером?\nB: Делал домашнее задание.",
 exampleSrc:"A: What were you doing yesterday evening?\nB: Doing homework.",
 funFact:"Russian доesn't distinguish 'was doing' and 'used to do' — both are imperfective past. English progressive vs habitual both translate to делал."},

{type:"teach", trg:"сделал", src:"did (perfective past)", pos:"verb", gender:null,
 note:"Perfective past. Completed single action.\nFocus on result.",
 example:"A: Ты сделал домашнее задание?\nB: Да, всё сделал.",
 exampleSrc:"A: Did you do your homework?\nB: Yes, did everything.",
 funFact:"The с- prefix adds completion. Сделал = 'did and finished.' If asked 'сделал?' Russians expect a yes/no about completion."},

{type:"teach", trg:"читал", src:"was reading (imperfective past)", pos:"verb", gender:null,
 note:"Imperfective past. Reading as activity.\nDuration implied.",
 example:"A: Что ты делал в поезде?\nB: Читал журнал.",
 exampleSrc:"A: What did you do on the train?\nB: I was reading a magazine.",
 funFact:"Reading on trains is iconic in Russia. The long distances and smooth rails make perfect reading conditions. Chekhov, Dostoevsky famously composed while traveling."},

{type:"teach", trg:"прочитал", src:"read (perfective past)", pos:"verb", gender:null,
 note:"Perfective past. Finished reading.\nCompletion implied.",
 example:"A: Ты прочитал эту книгу?\nB: Да, за два дня.",
 exampleSrc:"A: Did you finish that book?\nB: Yes, in two days.",
 funFact:"Про- prefix = through. Прочитал = read through = read completely. Russian shows completion through prefix + aspect, not through tense like English."},

{type:"teach", trg:"смотрел", src:"was watching (imperfective)", pos:"verb", gender:null,
 note:"Imperfective past. Extended watching.\nProcess emphasized.",
 example:"A: Чем занимался вечером?\nB: Смотрел кино.",
 exampleSrc:"A: What were you up to in the evening?\nB: Was watching a movie.",
 funFact:"Смотреть has both visual-watching AND looking-at meanings. Смотрел кино (watched movie) vs смотрел в окно (looked out window) — context distinguishes."},

{type:"teach", trg:"посмотрел", src:"watched (perfective)", pos:"verb", gender:null,
 note:"Perfective past. Completed viewing.\nПо- prefix often adds completion.",
 example:"A: Как фильм?\nB: Посмотрел вчера, очень понравился.",
 exampleSrc:"A: How's the movie?\nB: Watched yesterday, really liked it.",
 funFact:"По- prefix for completion is particularly common for viewing/hearing verbs: смотреть→посмотреть, слушать→послушать, глядеть→поглядеть."},

{type:"teach", trg:"говорил", src:"was speaking (imperfective)", pos:"verb", gender:null,
 note:"Imperfective past. Ongoing/habitual speaking.\nЧего не говорил = didn't (use to) say.",
 example:"A: С кем ты говорил?\nB: С мамой, долго.",
 exampleSrc:"A: Who were you talking to?\nB: With mom, for a long time.",
 funFact:"'Долго' (for a long time) is a classic imperfective marker. Combined with говорил, it emphasizes duration of talking — a process, not a single utterance."},

{type:"teach", trg:"сказал", src:"said (perfective)", pos:"verb", gender:null,
 note:"Perfective past. Single utterance/statement.\nSUPPLETIVE pair with говорить.",
 example:"A: Что он сказал тебе?\nB: Сказал, что задерживается.",
 exampleSrc:"A: What did he say to you?\nB: Said that he's delayed.",
 funFact:"Reported speech uses сказал: 'Он сказал, что...' (He said that...). The perfective marks the completed act of saying. English 'said' maps to both сказал and говорил depending on aspect."},

{type:"tip", title:"Reading Past Aspect in Context",
 text:"AN ENGLISH SENTENCE CAN TRANSLATE TWO WAYS:\n'I read a book yesterday.'\n• Я читал книгу. (I was reading [not finished] = imperfective).\n• Я прочитал книгу. (I read completely = perfective).\n\nCONTEXT CLUES:\n'for X time' → imperfective (process).\n'in X time' → perfective (completed).\n\n'I was reading for two hours' = Я читал два часа.\n'I read it in two hours' = Я прочитал за два часа.\n\nOR:\n'I was reading it yesterday' = Я читал вчера. (ongoing)\n'I read it yesterday' = Я прочитал вчера. (completed)\n\nRUSSIAN IS MORE PRECISE:\nEnglish can be ambiguous. Russian always specifies: was-process or did-completed. This precision is an advantage once you internalize it.",
 icon:"🎯"},

{type:"mc", q:"'Yesterday I read a book all day' — which aspect?",
 opts:["Perfective (finished)","Imperfective (process)","Either","Neither"],
 ans:"Imperfective (process)",
 hint:"'Все день' (all day) = extended duration = ___ = ___."},

{type:"mc", q:"'He already read the book' translates to:",
 opts:["Он читал книгу","Он прочитал книгу","Он будет читать книгу","Он прочитает книгу"],
 ans:"Он прочитал книгу",
 hint:"'Already' = completion = perfective past."},

{type:"fb", s:"A: Ты долго {1} эту книгу?\nB: Да, всю неделю.",
 a:["читал"],
 opts:["читал","прочитал","читаешь","прочитаешь"],
 hint:"'Долго' (for a long time) + 'всю неделю' (all week) = duration = imperfective past.",
 sSrc:"A: Were you reading this book for a long time?\nB: Yes, all week."},

{type:"fb", s:"A: Ты {1} все домашние задания?\nB: Да, вчера вечером.",
 a:["сделал"],
 opts:["сделал","делал","делаешь","сделаешь"],
 hint:"All homework COMPLETED — perfective past.",
 sSrc:"A: Did you do all the homework?\nB: Yes, yesterday evening."},

{type:"match", pairs:[
  {trg:"делал", src:"was doing"},
  {trg:"сделал", src:"did (completed)"},
  {trg:"читал", src:"was reading"},
  {trg:"прочитал", src:"read (completed)"},
  {trg:"говорил", src:"was speaking"}
]}
]},

{id:"ruv2_u14l3", title:"Быть in Past", icon:"🕰️", xp:15, board:true, steps:[

{type:"intro", title:"The Past of Быть (To Be)",
 desc:"Быть (to be) is omitted in Russian present but REQUIRED in past. This changes many common sentences dramatically.",
 goals:["Use был/была/было/были","Express past locations","Express past emotions"]},

{type:"teach", trg:"был", src:"was (he)", pos:"verb", gender:null,
 note:"Masculine past of быть.\nНа работе, в магазине — locations.",
 example:"A: Где ты был вчера?\nB: Был в парке.",
 exampleSrc:"A: Where were you yesterday?\nB: I was in the park.",
 funFact:"Note the past tense: 'where were you?' vs present 'где ты?' — the past needs the verb. Russians drop быть in present but add it in past. Unusual linguistic asymmetry."},

{type:"teach", trg:"была", src:"was (she)", pos:"verb", gender:null,
 note:"Feminine past of быть.\nАлтернатива: была на работе.",
 example:"A: Где была Маша?\nB: Была в библиотеке.",
 exampleSrc:"A: Where was Masha?\nB: She was at the library.",
 funFact:"Female speakers always use 'была' about themselves: 'Я была дома.' Male speakers use 'был.' Non-binary individuals in Russian: still forced gender choice — a grammatical challenge."},

{type:"teach", trg:"было", src:"was (it)", pos:"verb", gender:null,
 note:"Neuter past AND impersonal past.\nExtremely common in Russian.",
 example:"A: Как в Сочи?\nB: Было очень тепло.",
 exampleSrc:"A: How was Sochi?\nB: It was very warm.",
 funFact:"Impersonal 'было' opens many Russian narratives: 'Было раннее утро' (it was early morning), 'Было холодно' (it was cold). Essential storytelling structure."},

{type:"teach", trg:"были", src:"were (we/you/they)", pos:"verb", gender:null,
 note:"Plural past of быть.\nFor all plural subjects.",
 example:"A: Вы были на выставке?\nB: Да, были утром.",
 exampleSrc:"A: Were you at the exhibition?\nB: Yes, we were in the morning.",
 funFact:"'Были' covers мы, вы, они. Russian plural past doesn't distinguish person (we/you/they) — all use the same ending. Efficient and less complicated than singular."},

{type:"teach", trg:"у меня был", src:"I had (m)", pos:"phrase", gender:null,
 note:"Russian doesn't use иметь (to have) in past.\nУ меня был/была/было/были = I had.",
 example:"A: У тебя был телефон?\nB: Да, старый.",
 exampleSrc:"A: Did you have a phone?\nB: Yes, an old one.",
 funFact:"'У меня был' (literally 'at me was') = I had. The object possessed is subject. 'У меня был телефон' — the phone agrees with 'был' (masculine since phone = телефон)."},

{type:"teach", trg:"у меня была", src:"I had (f)", pos:"phrase", gender:null,
 note:"Agrees with the possessed object.\nДля feminine things: у меня была книга.",
 example:"A: У тебя была работа?\nB: Была, но ушла.",
 exampleSrc:"A: Did you have a job?\nB: Had, but left.",
 funFact:"The agreement is with the possessed object, not the possessor. 'У мужчины была кошка' — кошка (cat, fem) makes была feminine despite the 'owner' being masculine."},

{type:"teach", trg:"у меня было", src:"I had (n)", pos:"phrase", gender:null,
 note:"For neuter possessed objects.\nFor abstract things: было время, было желание.",
 example:"A: У тебя было время вчера?\nB: Нет, совсем не было.",
 exampleSrc:"A: Did you have time yesterday?\nB: No, didn't have any.",
 funFact:"'У меня было время' (I had time) — время is neuter. Abstract concepts in Russian often neuter: чувство (feeling), настроение (mood), ощущение (sensation)."},

{type:"teach", trg:"у меня были", src:"I had (pl)", pos:"phrase", gender:null,
 note:"For plural possessed objects.\nПлюс plural agreement with были.",
 example:"A: У тебя были друзья в школе?\nB: Много друзей.",
 exampleSrc:"A: Did you have friends in school?\nB: Many friends.",
 funFact:"Any plural possession uses 'были': у меня были деньги (I had money), у меня были проблемы (I had problems). Common structure for life stories."},

{type:"tip", title:"Past of 'Have' in Russian",
 text:"RUSSIAN DOESN'T USE 'иметь' (TO HAVE) IN EVERYDAY SPEECH.\n\nPresent 'I have X': У меня есть X.\nPast 'I had X': У меня был(а/о/и) X.\n\nAgrees with the POSSESSED object's gender/number:\nУ меня был телефон. (mas sg) I had a phone.\nУ меня была кошка. (fem sg) I had a cat.\nУ меня было время. (neu sg) I had time.\nУ меня были друзья. (pl) I had friends.\n\nNEGATIVE — always genitive:\nУ меня не было телефона. (I didn't have a phone.)\nУ меня не было кошки. (I didn't have a cat.)\nУ меня не было времени. (I didn't have time.)\nУ меня не было друзей. (I didn't have friends.)\n\n'Не было' is neuter regardless — the ABSENCE takes neuter. 'Чего не было?' — what wasn't there? The thing missing goes to genitive.",
 deepDive:{title:"The Russian View of 'Having'",
  text:"Russian doesn't conceptualize 'having' as an active possession the way English does. Instead, it says 'at me is' — the possessed thing simply exists with/near you. This impersonal worldview extends to many common expressions. Learning Russian trains you to think in impersonal, locative patterns."}},

{type:"mc", q:"'I had a book' (speaker is female) in Russian:",
 opts:["У меня был книга","У меня была книга","У меня было книга","У меня были книга"],
 ans:"У меня была книга",
 hint:"'Была' agrees with 'книга' (feminine). Speaker's gender doesn't matter here — object's gender does."},

{type:"mc", q:"Why does Russian need 'был/была' in past but omits 'to be' in present?",
 opts:["Grammar error","Historical evolution — Russian lost present 'быть'","Stylistic choice","Regional dialect"],
 ans:"Historical evolution — Russian lost present 'быть'",
 hint:"___ 'есть' is used rarely in modern ___. Past preserves the full conjugation."},

{type:"fb", s:"A: Где вы {1} вчера вечером?\nB: В театре, на премьере.",
 a:["были"],
 opts:["были","был","была","было"],
 hint:"Plural subject 'вы' (you all) + past of 'быть'. Pick the plural past form.",
 sSrc:"A: Where were you yesterday evening?\nB: At the theater, at a premiere."},

{type:"fb", s:"A: У тебя {1} время вчера?\nB: К сожалению, нет.",
 a:["было"],
 opts:["было","был","была","были"],
 hint:"Время (time) is neuter. Neuter past ending.",
 sSrc:"A: Did you have time yesterday?\nB: Unfortunately, no."},

{type:"match", pairs:[
  {trg:"был", src:"was (he)"},
  {trg:"была", src:"was (she)"},
  {trg:"было", src:"was (it)"},
  {trg:"были", src:"were (pl)"},
  {trg:"у меня было", src:"I had (neuter)"}
]}
]}

]};
export default UNIT_14;
