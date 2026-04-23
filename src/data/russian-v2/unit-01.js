// Russian V2 Unit 1. Greetings and Self-Introduction (A1.1)
const UNIT_01 = {n:1, lang:"ru", srcLang:"en", track:"v2", title:"Привет!", sub:"First Words in Russian",
 icon:"👋", level:"A1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u1l1", title:"Привет и Здравствуйте", icon:"👋", xp:15, board:true, steps:[

{type:"intro", title:"Привет! Your First Russian Words",
 desc:"Russian has two main ways to greet someone: informal (Привет) and formal (Здравствуйте). Choosing the right one is about respect.",
 goals:["Greet informally with Привет","Greet formally with Здравствуйте","Say goodbye (formal and informal)"]},

{type:"teach", trg:"Привет", src:"hi (informal)", pos:"intj", gender:null,
 note:"Stress on last syllable: pri-VYET.\nOnly use with close friends, family, or peers.",
 example:"A: Привет! Как дела?\nB: Привет! Всё хорошо.",
 exampleSrc:"A: Hi! How are you?\nB: Hi! Everything's good.",
 funFact:"Spelled with В (sounds like V, not B). It is P-R-I-V-E-T. Using Привет with a stranger or elder would be considered impolite."},

{type:"teach", trg:"Здравствуйте", src:"hello (formal)", pos:"intj", gender:null,
 note:"Stress on the second syllable.\nUse with strangers, elders, and in professional settings.",
 example:"A: Здравствуйте!\nB: Здравствуйте! Очень приятно.",
 exampleSrc:"A: Hello!\nB: Hello! Very nice to meet you.",
 funFact:"Literally means 'be healthy' (be well). Looks intimidating but the first в is often silent in fast speech: 'zdraas-TVUY-tye.'"},

{type:"teach", trg:"Доброе утро", src:"good morning", pos:"intj", gender:null,
 note:"Used before noon.\nDoesn't change for formal vs informal.",
 example:"A: Доброе утро!\nB: Доброе утро! Как спали?",
 exampleSrc:"A: Good morning!\nB: Good morning! How did you sleep?",
 funFact:"Доброе means 'good' (neuter form to match утро 'morning'). Russian adjectives change based on the noun's gender."},

{type:"teach", trg:"Добрый день", src:"good afternoon/day", pos:"intj", gender:null,
 note:"Used from noon until evening.\nAlso used as a polite all-day greeting.",
 example:"A: Добрый день!\nB: Добрый день! Да, пожалуйста.",
 exampleSrc:"A: Good day!\nB: Good day! Yes, please.",
 funFact:"Добрый is the masculine form of the adjective (to match день 'day' which is masculine). This is a safe, polite greeting at any business during the day."},

{type:"teach", trg:"Добрый вечер", src:"good evening", pos:"intj", gender:null,
 note:"Used from evening through night.\nSame masculine form as день.",
 example:"A: Добрый вечер!\nB: Добрый вечер! Спасибо.",
 exampleSrc:"A: Good evening!\nB: Good evening! Thank you.",
 funFact:"Вечер (evening) is also masculine, so Добрый matches. Russians rarely say 'good night' (Спокойной ночи) as a greeting. That phrase is for saying goodbye before sleep."},

{type:"teach", trg:"До свидания", src:"goodbye (formal)", pos:"intj", gender:null,
 note:"The standard formal farewell.\nLiterally: 'until (next) meeting.'",
 example:"A: До свидания!\nB: До свидания! Пока!",
 exampleSrc:"A: Goodbye!\nB: Goodbye! Bye!",
 funFact:"Pronounced 'da-svi-DAN-ya.' The unstressed o becomes 'ah.' This vowel reduction makes written Russian sound different from how it looks."},

{type:"teach", trg:"Пока", src:"bye (informal)", pos:"intj", gender:null,
 note:"The casual farewell among friends.\nStress on last syllable: pa-KA.",
 example:"A: Пока!\nB: Пока, до завтра!",
 exampleSrc:"A: Bye!\nB: Bye, see you tomorrow!",
 funFact:"Пока originally means 'for now' or 'meanwhile.' Using it with a superior or stranger would sound too casual, like saying 'later' in English."},

{type:"tip", title:"Formal vs Informal in Russian",
 text:"Russian is very sensitive to formality.\n\nINFORMAL (Привет / Пока):\nClose friends, family, children, peers your age.\n\nFORMAL (Здравствуйте / До свидания):\nStrangers, elders, service staff, anyone older than you at work.\n\nWhen in doubt, use formal. Russians will not be offended if you are too formal. They will be offended if you are too casual too fast."},

{type:"mc", q:"Which greeting is appropriate for a business meeting with a stranger?",
 opts:["Здравствуйте","До свидания","Привет","Пока"],
 ans:"Здравствуйте",
 hint:"You need the FORMAL greeting, not a goodbye. One word starts a conversation."},

{type:"mc", q:"Which phrase means 'good afternoon'?",
 opts:["Доброе утро","Добрый день","Добрый вечер","До свидания"],
 ans:"Добрый день",
 hint:"День means day. Утро is morning. Вечер is evening."},

{type:"fb", s:"{1}! Рад вас видеть.",
 a:["Здравствуйте"],
 opts:["Здравствуйте","Пока","Привет","До свидания"],
 hint:"Formal greeting paired with 'glad to see you' implies a respectful context.",
 sSrc:"{1}! Glad to see you."},

{type:"fb", s:"Встреча вечером в 18:00. Я скажу: {1}!",
 a:["Добрый вечер"],
 opts:["Добрый вечер","Доброе утро","Добрый день","Пока"],
 hint:"The greeting must match the TIME given in the sentence. 18:00 is evening.",
 sSrc:"Meeting in the evening at 18:00. I'll say: {1}!"},

{type:"match", pairs:[
  {trg:"Привет", src:"hi (informal)"},
  {trg:"Здравствуйте", src:"hello (formal)"},
  {trg:"До свидания", src:"goodbye (formal)"},
  {trg:"Пока", src:"bye (informal)"}
]},

{type:"mc", q:"What do До свидания and Пока have in common?",
 opts:["Both are questions","Both are morning greetings","Both are farewells","Both are informal"],
 ans:"Both are farewells",
 hint:"Think about WHEN in a conversation you would use each. One is formal, one is casual."}
]},

{id:"ruv2_u1l2", title:"Меня зовут...", icon:"📛", xp:15, board:true, steps:[

{type:"intro", title:"Saying Your Name",
 desc:"Introducing yourself in Russian uses a phrase that means literally 'me they-call.' It feels backward at first but it is a fixed, natural phrase everyone uses.",
 goals:["Say your name with Меня зовут...","Ask someone's name formally","Understand ты vs вы"]},

{type:"teach", trg:"Я", src:"I", pos:"pron", gender:null,
 note:"Single letter: Я (looks like backwards R).\nSounds like 'ya.'",
 example:"A: Я Анна.\nB: Я Максим.",
 exampleSrc:"A: I'm Anna.\nB: I'm Maxim.",
 funFact:"Russians often drop Я in casual speech when it is obvious from the verb form. But as a beginner, keep using it for clarity."},

{type:"teach", trg:"Ты", src:"you (informal)", pos:"pron", gender:null,
 note:"For close friends, family, children only.\nNever for strangers or elders.",
 example:"A: Как тебя зовут?\nB: Меня зовут Лена. А тебя?",
 exampleSrc:"A: What's your name?\nB: My name is Lena. And yours?",
 funFact:"Getting to ты with someone is a big deal. There is a verb for it: переходить на ты (to switch to ты). Usually suggested by the older or higher-status person."},

{type:"teach", trg:"Вы", src:"you (formal or plural)", pos:"pron", gender:null,
 note:"With strangers, elders, and in formal contexts.\nAlso used for 'you all' (plural).",
 example:"A: Как вас зовут?\nB: Меня зовут Иван Петрович.",
 exampleSrc:"A: What's your name? (formal)\nB: My name is Ivan Petrovich.",
 funFact:"Capitalized as Вы in formal written correspondence as a sign of special respect. In emails to superiors, always capitalize."},

{type:"teach", trg:"Он", src:"he", pos:"pron", gender:null,
 note:"Stress on the O: ON.\nRefers to any masculine noun, not just men.",
 example:"A: Это Максим. Он там.\nB: Да, он здесь.",
 exampleSrc:"A: This is Maxim. He is there.\nB: Yes, he is here.",
 funFact:"Он can also refer to masculine nouns like стол (table) as 'he.' Russian assigns gender to ALL nouns, even inanimate ones."},

{type:"teach", trg:"Она", src:"she", pos:"pron", gender:null,
 note:"Stress on A: a-NA.\nRefers to any feminine noun.",
 example:"A: Это Анна. Она здесь.\nB: Да, она там.",
 exampleSrc:"A: This is Anna. She is here.\nB: Yes, she is there.",
 funFact:"Она is also used for feminine inanimate nouns: книга (book) is 'she' because книга ends in -а."},

{type:"teach", trg:"Меня зовут", src:"my name is (literally: me they-call)", pos:"verb", gender:null,
 note:"A fixed phrase. Don't analyze it word by word.\nJust add your name after.",
 example:"A: Меня зовут Давид.\nB: Очень приятно, Давид!",
 exampleSrc:"A: My name is David.\nB: Very nice to meet you, David!",
 funFact:"Literally: 'Me they-call [name].' Russian does not say 'My name is X' directly. This impersonal construction without a subject is very common in Russian."},

{type:"teach", trg:"Как вас зовут?", src:"what's your name? (formal)", pos:"verb", gender:null,
 note:"The polite way to ask a name.\nLiterally: 'how you they-call?'",
 example:"A: Здравствуйте! Как вас зовут?\nB: Меня зовут Сергей.",
 exampleSrc:"A: Hello! What's your name?\nB: My name is Sergey.",
 funFact:"Use this with anyone you don't know well. Even service staff often get this form. With children, switch to Как тебя зовут?"},

{type:"teach", trg:"Как тебя зовут?", src:"what's your name? (informal)", pos:"verb", gender:null,
 note:"Use ONLY with children, close friends, or when agreed.\nТебя is the accusative of ты.",
 example:"A: Привет! Как тебя зовут?\nB: Меня зовут Катя.",
 exampleSrc:"A: Hi! What's your name?\nB: My name is Katya.",
 funFact:"In a queue, at a bus stop, or with anyone roughly your age whom you just met: default to Как вас зовут? until invited to use ты."},

{type:"tip", title:"The Меня зовут Pattern",
 text:"Russian uses a unique sentence structure for names.\n\nSTRUCTURE: [Accusative pronoun] + зовут + [name]\n\nМеня зовут Лена. My name is Lena.\nТебя зовут Иван. Your name is Ivan.\nЕго зовут Саша. His name is Sasha.\nЕё зовут Маша. Her name is Masha.\n\nThe verb зовут means 'they call.' It is an IMPERSONAL construction with no subject. Don't translate literally. Just memorize the pattern."},

{type:"mc", q:"How do you introduce yourself as 'Maria' in Russian?",
 opts:["Меня зовут Мария","Мой имя Мария","Это Мария","Я Мария"],
 ans:"Меня зовут Мария",
 hint:"The most natural phrase uses 'me they-call' plus the name. Я Мария is possible but less common."},

{type:"mc", q:"Which is the FORMAL way to ask someone's name?",
 opts:["Меня зовут?","Как вас зовут?","Я зовут?","Как тебя зовут?"],
 ans:"Как вас зовут?",
 hint:"The formal/plural 'you' pronoun appears in the question."},

{type:"fb", s:"A: Здравствуйте! {1} Сергей.\nB: Очень приятно.",
 a:["Меня зовут"],
 opts:["Меня зовут","Как вас зовут","Я вас","Ты меня"],
 hint:"The standard 'my name is' phrase comes before the given name in the introduction.",
 sSrc:"A: Hello! {1} Sergey.\nB: Very nice to meet you."},

{type:"match", pairs:[
  {trg:"Я", src:"I"},
  {trg:"Ты", src:"you (informal)"},
  {trg:"Он", src:"he"},
  {trg:"Она", src:"she"}
,{trg:"Вы", src:"you (formal or plural)"}]}
]},

{id:"ruv2_u1l3", title:"Спасибо и Пожалуйста", icon:"🙏", xp:15, board:true, steps:[

{type:"intro", title:"The Most Important Words",
 desc:"Russian gratitude and politeness words are essential. Master Спасибо, Пожалуйста, Да, and Нет. These are your social lifeline as a beginner.",
 goals:["Say thank you and you're welcome","Say yes and no","Use polite phrases naturally"]},

{type:"teach", trg:"Спасибо", src:"thank you", pos:"intj", gender:null,
 note:"Stress on И: spa-SEE-ba.\nThe final o reduces to 'a.'",
 example:"A: Пожалуйста!\nB: Спасибо!",
 exampleSrc:"A: Here you go!\nB: Thank you!",
 funFact:"Comes from 'спаси Бог' (God save you), an old Christian blessing. Used many times a day in Russia. Not saying it feels rude."},

{type:"teach", trg:"Пожалуйста", src:"please / you're welcome", pos:"intj", gender:null,
 note:"Stress on second A: pa-ZHA-luy-sta.\nThe zh sound is like 'pleasure.'",
 example:"A: Спасибо!\nB: Пожалуйста!",
 exampleSrc:"A: Thank you!\nB: You're welcome!",
 funFact:"One word doing double duty. Before a request = please. After a thank-you = you're welcome. Context makes the meaning clear."},

{type:"teach", trg:"Да", src:"yes", pos:"adv", gender:null,
 note:"Simple, clear: DA.\nAlso used as a soft 'well...' in conversation.",
 example:"A: Вы из России?\nB: Да.",
 exampleSrc:"A: Are you from Russia?\nB: Yes.",
 funFact:"Да can also mean 'and' in set phrases (да и: and also). Tone matters: a flat Да is confirming; a rising Да? is a question ('really?')."},

{type:"teach", trg:"Нет", src:"no", pos:"adv", gender:null,
 note:"Stress on e: NYET.\nUsed alone or to negate sentences.",
 example:"A: Вы из Москвы?\nB: Нет, я из Петербурга.",
 exampleSrc:"A: Are you from Moscow?\nB: No, I'm from Petersburg.",
 funFact:"Нет is also used to mean 'there isn't' (Нет времени = there's no time). Very common in absence constructions."},

{type:"teach", trg:"Извините", src:"sorry / excuse me", pos:"intj", gender:null,
 note:"Stress on И: iz-vi-NEE-tye.\nFormal, for strangers.",
 example:"A: Извините!\nB: Да, пожалуйста.",
 exampleSrc:"A: Excuse me!\nB: Yes, please.",
 funFact:"Literally 'forgive (plural/formal).' The informal version is Извини (single form). Use Извините any time you need to get a stranger's attention."},

{type:"teach", trg:"Очень приятно", src:"very nice (to meet you)", pos:"phrase", gender:null,
 note:"Response to a name introduction.\nLiterally: 'very pleasant.'",
 example:"A: Меня зовут Борис.\nB: Очень приятно, Борис!",
 exampleSrc:"A: My name is Boris.\nB: Very nice to meet you, Boris!",
 funFact:"The standard response when someone tells you their name. You can also say Рад (m) or Рада (f) вас видеть (glad to see you)."},

{type:"mc", q:"Someone says 'Спасибо.' What's the natural response?",
 opts:["Пожалуйста","Извините","До свидания","Спасибо"],
 ans:"Пожалуйста",
 hint:"One word means both 'please' AND 'you're welcome' in Russian."},

{type:"mc", q:"You need to get a stranger's attention on the street. What do you say?",
 opts:["Пока","Извините","Да","Привет"],
 ans:"Извините",
 hint:"The formal 'excuse me/sorry' phrase. It doubles as 'excuse me' to start a polite interruption."},

{type:"fb", s:"A: Вот ваш кофе.\nB: {1}!",
 a:["Спасибо"],
 opts:["Спасибо","Пожалуйста","Да","Нет"],
 hint:"Someone has just given you coffee. What do you say in response?",
 sSrc:"A: Here's your coffee.\nB: {1}!"},

{type:"fb", s:"A: Вы из России?\nB: {1}, я из Канады.",
 a:["Нет"],
 opts:["Нет","Да","Пока","Извините"],
 hint:"The sentence after the blank says 'I am from Canada' (not Russia). So the blank must be the opposite of yes.",
 sSrc:"A: Are you from Russia?\nB: {1}, I'm from Canada."},

{type:"match", pairs:[
  {trg:"Спасибо", src:"thank you"},
  {trg:"Пожалуйста", src:"please / you're welcome"},
  {trg:"Извините", src:"sorry / excuse me"},
  {trg:"Очень приятно", src:"very nice to meet you"}
]},

{type:"mc", q:"Why is Пожалуйста special?",
 opts:["It's the same as Спасибо","It means 'goodbye'","It does the work of both 'please' AND 'you're welcome'","It's only used with children"],
 ans:"It does the work of both 'please' AND 'you're welcome'",
 hint:"This one word covers two English polite phrases."}
]}

]};
export default UNIT_01;
