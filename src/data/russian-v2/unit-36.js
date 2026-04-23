// Russian V2 Unit 36. Mastery and Fluency (B2.2 Capstone)
const UNIT_36 = {n:36, lang:"ru", srcLang:"en", track:"v2", title:"Свободное владение", sub:"Fluency and Mastery",
 icon:"🏆", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u36l1", title:"Toward Mastery", icon:"🏆", xp:15, board:true, steps:[

{type:"intro", title:"Fluent Russian",
 desc:"Capstone unit. Vocabulary for discussing language mastery, personal achievements, and the continuing journey of learning.",
 goals:["Discuss language learning","Express achievements","Plan future learning"]},

{type:"teach", trg:"свободно", src:"fluently", pos:"adv", gender:null,
 note:"Adverb.\n'Говорить свободно' = speak fluently.",
 example:"A: Ты свободно говоришь по-русски?\nB: Да, свободно.",
 exampleSrc:"A: Do you speak Russian fluently?\nB: Yes, fluently.",
 funFact:"'Свободно' shares root with 'свобода' (freedom). Fluent = free with the language. Apt metaphor: fluency frees you to express anything."},

{type:"teach", trg:"изучать", src:"to study / learn (formal)", pos:"verb", gender:null,
 note:"Imperfective. Formal/academic.\nPair: изучить.",
 example:"A: Сколько лет изучаешь русский?\nB: Уже пять.",
 exampleSrc:"A: How many years have you been studying Russian?\nB: Five already.",
 funFact:"Изучать is more serious than учить. 'Я изучаю русский' (academic study) vs 'я учу русский' (learning, general). Used in formal educational contexts."},

{type:"teach", trg:"выучить", src:"to memorize / master (perfective)", pos:"verb", gender:null,
 note:"Perfective. Completion of learning.\nPair: учить.",
 example:"A: Ты выучил всё?\nB: Да, выучил.",
 exampleSrc:"A: Did you master everything?\nB: Yes, I did.",
 funFact:"Выучить + object means to fully learn/memorize. 'Выучить стих' (memorize a poem), 'выучить язык' (master a language). Perfective = completion."},

{type:"teach", trg:"понимать", src:"to understand", pos:"verb", gender:null,
 note:"Imperfective. Pair: понять.\nEssential language-learning verb.",
 example:"A: Ты всё понимаешь?\nB: Пока читаю медленно.",
 exampleSrc:"A: Do you understand everything?\nB: Still reading slowly.",
 funFact:"Понимать + accusative + на = understand someone in a language. 'Я понимаю тебя по-русски.' Russian speakers frequently assess understanding in conversation."},

{type:"teach", trg:"достижение", src:"achievement", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nFrom достигать (to achieve).",
 example:"A: Это большое достижение.\nB: Спасибо!",
 exampleSrc:"A: This is a big achievement.\nB: Thanks!",
 funFact:"Достижение is formal. Casual: победа (victory), успех (success). All indicate positive accomplishment. Russians value достижения in education and career."},

{type:"teach", trg:"цель", src:"goal / aim", pos:"noun", gender:"f",
 note:"Feminine -ь.\nПоставить цель = set a goal.",
 example:"A: Какая твоя цель?\nB: Говорить свободно.",
 exampleSrc:"A: What's your goal?\nB: To speak fluently.",
 funFact:"Цель (goal) and целый (whole, complete) share root. Goals 'complete' something in you. Russian view: goals aren't external, they're about wholeness."},

{type:"teach", trg:"продолжать", src:"to continue", pos:"verb", gender:null,
 note:"Imperfective. Pair: продолжить.\n+ Infinitive for continuing activity.",
 example:"A: Ты продолжаешь учиться?\nB: Конечно!",
 exampleSrc:"A: Do you continue studying?\nB: Of course!",
 funFact:"Продолжать + infinitive = continuing the activity. 'Продолжаю учиться' (I continue studying). Key for ongoing life goals."},

{type:"teach", trg:"поздравляю!", src:"congratulations!", pos:"phrase", gender:null,
 note:"Fixed phrase.\nFrom поздравлять (to congratulate).",
 example:"A: Я выучил русский!\nB: Поздравляю!",
 exampleSrc:"A: I learned Russian!\nB: Congratulations!",
 funFact:"Russian celebrates effortful achievements. 'Поздравляю' carries warmth, genuine appreciation for someone's work. More than casual 'congrats.'"},

{type:"tip", title:"The Russian Learning Journey",
 text:"YOUR JOURNEY SO FAR:\n\nLEVEL A1 (Units 1-6):\nBasic greetings, family, numbers, food, time, places.\nFoundation of survival Russian.\n\nLEVEL A2 (Units 7-12):\nWeather, shopping, health, work, hobbies, travel.\nDaily life in Russian.\n\nLEVEL B1 (Units 13-24):\nAspect (the Russian verb system)\nSix cases\nPast/future tenses\nReflexive verbs\nImperative\nMotion verbs with prefixes\n\nLEVEL B2 (Units 25-36):\nSociety, science, business, health, media\nArts, history, nature\nFormal Russian\nGeography\nIdioms\nMastery\n\nWHAT'S NEXT?\n• READ: Russian novels (short stories of Chekhov, Dostoyevsky's shorter works)\n• WATCH: Russian films with subtitles, TV series\n• LISTEN: Russian podcasts, music, news\n• SPEAK: Find conversation partners, language exchanges\n• WRITE: Journal in Russian, social media posts\n\nCONGRATULATIONS on reaching this level. You've built a strong foundation. Continuing to practice is the only path forward.\n\nУдачи в учёбе! (Good luck in your studies!)",
 deepDive:{title:"Becoming a Lifelong Learner",
  text:"Russian at B2 is just the beginning of authentic mastery. Native speakers know ~40,000+ words; you may know ~5,000. The best path forward: read extensively, engage with culture, find Russians to talk with. The language comes alive in context. Don't aim for perfection, aim for communication. Make mistakes confidently. Russians appreciate effort deeply."}},

{type:"mc", q:"What's the perfective pair of 'учить'?",
 opts:["выучить","учиться","понимать","изучить"],
 ans:"выучить",
 hint:"Mastering the learning, perfective prefix вы- signals completion."},

{type:"mc", q:"Which Russian expresses 'to speak fluently'?",
 opts:["говорить быстро","говорить свободно","говорить много","говорить громко"],
 ans:"говорить свободно",
 hint:"Свободно (freely) = fluently. Free with the language."},

{type:"fb", s:"Моя {1}, говорить свободно по-русски.",
 a:["цель"],
 opts:["цель","мечта","учёба","понимание"],
 hint:"Goal/objective of learning, what drives progress?",
 sSrc:"My goal is to speak Russian fluently."},

{type:"fb", s:"A: Я уже говорю на двух языках!\nB: {1}!",
 a:["Поздравляю"],
 opts:["Поздравляю","Привет","Спасибо","Пока"],
 hint:"Congratulating an achievement.",
 sSrc:"A: I already speak two languages!\nB: Congratulations!"},

{type:"match", pairs:[
  {trg:"свободно", src:"fluently"},
  {trg:"изучать", src:"to study"},
  {trg:"достижение", src:"achievement"},
  {trg:"цель", src:"goal"},
  {trg:"поздравляю", src:"congratulations"}
,{trg:"продолжать", src:"to continue"}]},

{type:"mc", q:"What's the best Russian learning strategy from this unit?",
 opts:["Translate everything to English","Memorize 40,000 words","Read, watch, listen, speak, write regularly","Only study grammar"],
 ans:"Read, watch, listen, speak, write regularly",
 hint:"Balance of all skills. Context is key."}
]}

]};
export default UNIT_36;
