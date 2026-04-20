// Russian V2 Unit 4 — Food and Drinks (A1.2)
const UNIT_04 = {n:4, lang:"ru", srcLang:"en", track:"v2", title:"Я хочу есть", sub:"Food and Drinks",
 icon:"🍽️", level:"A1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u4l1", title:"Еда и напитки", icon:"🍽️", xp:15, board:true, steps:[

{type:"intro", title:"Food and Drinks",
 desc:"Core food vocabulary for every day. Russian food words have regular gender patterns and some fun cultural ties — borscht, blini, and the enduring chai tradition.",
 goals:["Name basic foods","Name basic drinks","Know the gender of each word"]},

{type:"teach", trg:"хлеб", src:"bread", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nA central food in Russian culture.",
 example:"A: Хочешь хлеб?\nB: Да, спасибо.",
 exampleSrc:"A: Do you want bread?\nB: Yes, thanks.",
 funFact:"Bread and salt (хлеб-соль) is the traditional Russian welcome for guests. Even today, weddings may include this ancient ritual of offering bread."},

{type:"teach", trg:"мясо", src:"meat", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о (standard neuter).\nGeneral term for all meats.",
 example:"A: Ты ешь мясо?\nB: Нет.",
 exampleSrc:"A: Do you eat meat?\nB: No.",
 funFact:"Russian cuisine is traditionally meat-heavy. Famous dishes: beef stroganoff (бефстроганов), pelmeni (пельмени), shashlik (шашлык). Vegetarianism is growing but still a minority."},

{type:"teach", trg:"рыба", src:"fish", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nCollective term and individual fish.",
 example:"A: Вы ешь рыбу?\nB: Да, я ем рыбу.",
 exampleSrc:"A: Do you eat fish?\nB: Yes, I eat fish.",
 funFact:"Russia's long coastlines and rivers make fish central to cuisine. Herring (селёдка), smoked salmon (копчёный лосось), and caviar (икра) are iconic."},

{type:"teach", trg:"молоко", src:"milk", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nFamous vowel reduction: ma-la-KO.",
 example:"A: Чай с молоком?\nB: Нет, без молока.",
 exampleSrc:"A: Tea with milk?\nB: No, without milk.",
 funFact:"Молоко is the textbook example of Russian vowel reduction: all three O's but only the last is stressed. Unstressed O's reduce to 'ah,' giving 'ma-la-KO.'"},

{type:"teach", trg:"чай", src:"tea", pos:"noun", gender:"m",
 note:"Masculine. Ends in -й.\nNational drink of Russia.",
 example:"A: Хочешь чай?\nB: Да, пожалуйста.",
 exampleSrc:"A: Want tea?\nB: Yes, please.",
 funFact:"Tea reached Russia in the 1600s via Mongolian trade. The самовар (samovar, traditional water heater) became the heart of Russian tea culture. Чаепитие (tea-drinking) is a ritual of hospitality."},

{type:"teach", trg:"кофе", src:"coffee", pos:"noun", gender:"m",
 note:"Masculine (controversial!).\nIndeclinable — never changes form.",
 example:"A: Два кофе, пожалуйста.\nB: С молоком?",
 exampleSrc:"A: Two coffees, please.\nB: With milk?",
 funFact:"Кофе is officially masculine (чёрный кофе) but many Russians treat it as neuter (чёрное кофе). Dictionaries now accept both. A famous 'correct usage' debate in Russia."},

{type:"teach", trg:"вода", src:"water", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nStress shifts: вода (sg nom), воду (sg acc), воды (gen/pl).",
 example:"A: Можно воды?\nB: Газированной или без газа?",
 exampleSrc:"A: Can I have water?\nB: Sparkling or still?",
 funFact:"Russian mineral water options are a whole culture: с газом (with gas/sparkling) vs без газа (without gas/still). Always asked in restaurants."},

{type:"teach", trg:"сок", src:"juice", pos:"noun", gender:"m",
 note:"Masculine. Short word, simple ending.\nUsed for all fruit juices.",
 example:"A: Ты хочешь сок?\nB: Да, пожалуйста.",
 exampleSrc:"A: Do you want juice?\nB: Yes, please.",
 funFact:"Сок also means 'sap' (as in tree sap). Берёзовый сок (birch sap) is a traditional Russian drink, tapped from birch trees in spring."},

{type:"tip", title:"Noun Genders in Food Vocabulary",
 text:"Russian food words follow predictable patterns:\n\nMASCULINE (end in consonant):\nхлеб (bread), чай (tea), сок (juice), сыр (cheese), суп (soup), борщ (borscht).\n\nFEMININE (end in -а/-я):\nрыба (fish), вода (water), каша (porridge), колбаса (sausage), картошка (potato).\n\nNEUTER (end in -о/-е):\nмясо (meat), молоко (milk), масло (butter), яйцо (egg), пиво (beer), вино (wine).\n\nThis pattern helps you guess gender for new food words. Most work this way.",
 icon:"🔑"},

{type:"mc", q:"Which word is NEUTER in gender?",
 opts:["хлеб","рыба","молоко","чай"],
 ans:"молоко",
 hint:"Neuter nouns typically end in -о or -е. Check each word's ending."},

{type:"mc", q:"Why is 'кофе' sometimes a grammatical controversy?",
 opts:["It's a foreign loanword","It's officially masculine but many use it as neuter","It changes gender by region","It has three genders simultaneously"],
 ans:"It's officially masculine but many use it as neuter",
 hint:"The ending -е looks ___, but tradition and dictionaries say ___. Modern usage goes both ways."},

{type:"fb", s:"A: Хочешь {1}?\nB: Да, с лимоном, пожалуйста.",
 a:["чай"],
 opts:["чай","сок","молоко","вода"],
 hint:"The answer 'с лимоном' (with lemon) is the classic request for which Russian beverage?",
 sSrc:"A: Do you want {1}?\nB: Yes, with lemon, please."},

{type:"match", pairs:[
  {trg:"хлеб", src:"bread"},
  {trg:"рыба", src:"fish"},
  {trg:"молоко", src:"milk"},
  {trg:"чай", src:"tea"},
  {trg:"вода", src:"water"}
]}
]},

{id:"ruv2_u4l2", title:"Я хочу", icon:"🍴", xp:15, board:true, steps:[

{type:"intro", title:"I Want to Eat/Drink",
 desc:"Learn to use хочу (I want) with есть (to eat) and пить (to drink). Russian verbs like 'want' take the infinitive directly, like English.",
 goals:["Use хочу + infinitive","Conjugate есть (to eat)","Conjugate пить (to drink)"]},

{type:"teach", trg:"хочу", src:"I want", pos:"verb", gender:null,
 note:"1st person singular of хотеть (to want).\nIrregular verb — memorize all forms.",
 example:"A: Что ты хочешь?\nB: Я хочу чай.",
 exampleSrc:"A: What do you want?\nB: I want tea.",
 funFact:"Хотеть has a unique conjugation pattern: я хочу, ты хочешь, он хочет, мы хотим, вы хотите, они хотят. The stem changes between 'хоч-' and 'хот-' — neither predictable."},

{type:"teach", trg:"хочешь", src:"you want (informal)", pos:"verb", gender:null,
 note:"2nd person singular.\nStem changes to хоч-.",
 example:"A: Хочешь пить?\nB: Да, очень.",
 exampleSrc:"A: Are you thirsty? (lit. Do you want to drink?)\nB: Yes, very much.",
 funFact:"'Хочешь пить?' is how Russians ask 'are you thirsty?' — literally 'do you want to drink?' Similarly 'хочешь есть?' means 'are you hungry?'"},

{type:"teach", trg:"есть", src:"to eat", pos:"verb", gender:null,
 note:"Infinitive. Irregular — conjugates differently from most verbs.\nNOT the same word as есть (there is, to be).",
 example:"A: Ты хочешь есть?\nB: Нет.",
 exampleSrc:"A: Do you want to eat?\nB: No.",
 funFact:"Russian has TWO identical words 'есть': one means 'to eat' (verb), the other means 'there is/are' (existential). Context makes the distinction clear."},

{type:"teach", trg:"пить", src:"to drink", pos:"verb", gender:null,
 note:"Infinitive. Conjugates with stem change (пь-).\nи becomes 'yu' (я пью = I drink).",
 example:"A: Ты пьёшь воду?\nB: Да, я пью воду.",
 exampleSrc:"A: Do you drink water?\nB: Yes, I drink water.",
 funFact:"Пить + acc in Russian means 'to drink alcohol' when used without specifying what. 'Он пьёт' = 'He drinks [alcohol].' The stigma around this verb means Russians often specify what they drink."},

{type:"teach", trg:"вкусно", src:"tasty / delicious", pos:"adv", gender:null,
 note:"Adverb (not adjective).\nUsed impersonally: 'это вкусно' (this is tasty).",
 example:"A: Как рыба?\nB: Очень вкусно!",
 exampleSrc:"A: How is the fish?\nB: Very tasty!",
 funFact:"Russians rarely say a simple 'да' when enjoying food — the expected response is 'очень вкусно!' (very tasty). Saying just 'good' would seem cold."},

{type:"teach", trg:"много", src:"a lot / many", pos:"adv", gender:null,
 note:"Used with both countable and uncountable.\nRequires genitive case after it.",
 example:"A: Сколько ты ешь?\nB: Я много ем.",
 exampleSrc:"A: How much do you eat?\nB: I eat a lot.",
 funFact:"Много governs the genitive case: много воды (a lot of water), много книг (many books). After numbers 5+ and these quantity words, genitive is king."},

{type:"teach", trg:"мало", src:"a little / few", pos:"adv", gender:null,
 note:"Opposite of много.\nAlso requires genitive case.",
 example:"A: Воды много?\nB: Нет, мало.",
 exampleSrc:"A: Is there a lot of water?\nB: No, a little.",
 funFact:"Мало has a slightly negative tone — implies 'not enough.' For 'a little bit' positive, use немного. The distinction: мало = too little; немного = a bit."},

{type:"tip", title:"Хотеть: The Want Verb",
 text:"Хотеть (to want) is irregular but essential. Full conjugation:\n\nя хочу (I want).\nты хочешь (you want, informal).\nон/она хочет (he/she wants).\nмы хотим (we want).\nвы хотите (you want, formal/plural).\nони хотят (they want).\n\nNote: The stem CHANGES between 'хоч-' (for я/ты/он/она) and 'хот-' (for мы/вы/они).\n\nХочу + infinitive = I want to...\nХочу + accusative noun = I want...\n\nExamples:\nЯ хочу есть. (I want to eat.)\nЯ хочу чай. (I want tea.)",
 icon:"🎯"},

{type:"mc", q:"How do you say 'I want to drink' in Russian?",
 opts:["Я хочу есть","Я хочу пить","Я ем","Я пью"],
 ans:"Я хочу пить",
 hint:"Combine 'I want' (хочу) with the infinitive 'to drink' (пить)."},

{type:"mc", q:"Which is the correct 2nd person singular (informal) of 'хотеть'?",
 opts:["хочу","хочешь","хотите","хотят"],
 ans:"хочешь",
 hint:"'You (informal) want' uses the ты form. Note the stem change to хоч-."},

{type:"fb", s:"A: Что ты хочешь?\nB: Я {1} сок.",
 a:["хочу"],
 opts:["хочу","хочешь","хочет","хотят"],
 hint:"Match 'я' (I) to the corresponding conjugated form.",
 sSrc:"A: What do you want?\nB: I {1} juice."},

{type:"fb", s:"A: Как пицца?\nB: Очень {1}!",
 a:["вкусно"],
 opts:["вкусно","много","мало","хочу"],
 hint:"Responding to 'how's the pizza?' — use the word that means 'tasty/delicious.'",
 sSrc:"A: How's the pizza?\nB: Very {1}!"},

{type:"match", pairs:[
  {trg:"хочу", src:"I want"},
  {trg:"есть", src:"to eat"},
  {trg:"пить", src:"to drink"},
  {trg:"вкусно", src:"tasty"},
  {trg:"много", src:"a lot"}
]}
]},

{id:"ruv2_u4l3", title:"Review", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Unit Review",
 desc:"Consolidate your food vocabulary and хотеть usage in realistic contexts.",
 goals:["Order food politely","Describe food preferences","Use есть and пить naturally"]},

{type:"mc", q:"In a Russian café, what would you say to order tea politely?",
 opts:["Чай!","Я хочу чай, пожалуйста.","Тебе чай.","Чай хорошо."],
 ans:"Я хочу чай, пожалуйста.",
 hint:"Combine 'I want' with the food and 'please' for proper politeness."},

{type:"mc", q:"Which sentence correctly means 'I'm hungry' in Russian?",
 opts:["Я голоден","Я хочу есть","Я ем","Я ем вкусно"],
 ans:"Я хочу есть",
 hint:"The literal translation is 'I want to eat.' Both expressions are correct, but this one is more conversational."},

{type:"fb", s:"A: Хочешь {1}?\nB: Да, я люблю морепродукты.",
 a:["рыбу"],
 opts:["рыбу","хлеб","чай","молоко"],
 hint:"B's answer 'I love seafood' tells you what the food category is. The word must be ACCUSATIVE (direct object of хочешь).",
 sSrc:"A: Do you want {1}?\nB: Yes, I love seafood."},

{type:"fb", s:"На завтрак я обычно {1} кашу.",
 a:["ем"],
 opts:["ем","пью","хочу","есть"],
 hint:"Kasha (porridge) is food — use 'to eat' conjugated for 'я' (I).",
 sSrc:"For breakfast I usually {1} porridge."},

{type:"drag_fill", s:"Я хочу {1} хлеб и {2} чай. Спасибо, очень {3}!",
 blanks:{"1":"есть","2":"пить","3":"вкусно"},
 pool:["есть","пить","вкусно","много"],
 hint:"First: 'to eat' with bread. Then: 'to drink' with tea. Finally: 'tasty' to express satisfaction."},

{type:"match", pairs:[
  {trg:"хлеб", src:"bread"},
  {trg:"мясо", src:"meat"},
  {trg:"вода", src:"water"},
  {trg:"кофе", src:"coffee"},
  {trg:"молоко", src:"milk"}
]},

{type:"mc", q:"Russian bread-and-salt tradition (хлеб-соль) represents:",
 opts:["Winter food","Welcome for guests","Religious ceremony only","Breakfast"],
 ans:"Welcome for guests",
 hint:"An ancient Russian custom of hospitality — offering bread and salt to visitors."}
,{type:"match",pairs:[{trg:"сок",src:"juice"},{trg:"мало",src:"a little / few"}]}]}

,

{id:"ruv2_u4l4", title:"Ещё слова", icon:"📚", xp:15, board:true, steps:[

{type:"intro", title:"More Essential Words",
 desc:"Seven A1 gaps: a key food word (суп), a verb (слышать), a polite expression (простите), two core adjectives (лёгкий, трудный), and two question-answer nouns (вопрос, интересный).",
 goals:["Learn суп and простите","Use слышать in context","Use лёгкий, трудный, интересный as predicates"]},

{type:"teach", trg:"суп", src:"soup", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nOne of the most common Russian lunch dishes.",
 example:"A: Ты хочешь суп?\nB: Да, суп и хлеб.",
 exampleSrc:"A: Do you want soup?\nB: Yes, soup and bread.",
 funFact:"Borscht (борщ) and solyanka (солянка) are Russia's most iconic soups. Russians say 'первое' (first course) instead of 'soup course' — it always starts the main meal."},

{type:"teach", trg:"простите", src:"sorry / excuse me (formal)", pos:"intj", gender:null,
 note:"Formal apology/excuse. From простить (to forgive).\nUse простите with strangers; прости with friends.",
 example:"A: Простите, где туалет?\nB: Там.",
 exampleSrc:"A: Excuse me, where is the toilet?\nB: Over there.",
 funFact:"Простите literally means 'forgive me' (imperative plural/formal). Russians use it for interrupting someone, bumping into them, or asking a favour of a stranger — a full-use apology word."},

{type:"teach", trg:"слышать", src:"to hear", pos:"verb", gender:null,
 note:"2nd conjugation imperfective. Stem: слыш-.\nConj: я слышу, ты слышишь, он слышит.",
 example:"A: Ты слышишь меня?\nB: Да, я слышу тебя.",
 exampleSrc:"A: Can you hear me?\nB: Yes, I can hear you.",
 funFact:"Слышать is an involuntary perception verb — you hear without trying. Compare with слушать (to listen), which is deliberate. The same distinction as English 'hear' vs 'listen.'"},

{type:"teach", trg:"лёгкий", src:"easy / light", pos:"adj", gender:"m",
 note:"Short-form predicate: лёгок (m), легка (f), легко (n).\nTwo meanings: easy and physically light.",
 example:"A: Этот суп лёгкий?\nB: Да, очень лёгкий.",
 exampleSrc:"A: Is this soup light (mild)?\nB: Yes, very light.",
 funFact:"The ё in лёгкий is mandatory — 'легкий' (without ё) is technically wrong but very common in informal writing. In pronunciation, the е is always stressed: лЁгкий. The г is often pronounced like 'kh' before кий."},

{type:"teach", trg:"трудный", src:"difficult / hard", pos:"adj", gender:"m",
 note:"Regular adj, 1st declension.\nOpposite of лёгкий. Stress on ТРУД-.",
 example:"A: Русский язык трудный?\nB: Немного трудный, но интересный.",
 exampleSrc:"A: Is Russian difficult?\nB: A little difficult, but interesting.",
 funFact:"Russians themselves say Russian grammar is трудный for foreigners. The case system, aspects, and verb conjugations are genuinely complex. Saying 'немного трудный' is a polite understatement."},

{type:"teach", trg:"интересный", src:"interesting", pos:"adj", gender:"m",
 note:"Regular adj. Stress on -рЕС-.\nUsed in the same pattern as English: это интересный вопрос.",
 example:"A: Как вопрос?\nB: Очень интересный!",
 exampleSrc:"A: How is the question?\nB: Very interesting!",
 funFact:"Интересный is one of the earliest Russian cognates English speakers recognise. It came into Russian via French 'intéressant' in the 18th century during Russia's Francophile era under Catherine the Great."},

{type:"teach", trg:"вопрос", src:"question", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nPlural: вопросы. Often paired with ответ (answer).",
 example:"A: У тебя есть вопрос?\nB: Да, один вопрос.",
 exampleSrc:"A: Do you have a question?\nB: Yes, one question.",
 funFact:"Вопросительный знак (question mark) is called that because вопрос means question. In Russian classrooms, raising your hand is сигнал вопроса — a universal gesture that needs no translation."},

{type:"tip", title:"Adjective Agreement: Short Preview",
 text:"Russian adjectives agree with the noun's gender. For now, just know the masculine form (dictionary form) and use it as a predicate after 'это':\n\nЭто лёгкий суп. (easy/light soup — masc noun)\nЭто трудный вопрос. (difficult question — masc noun)\nЭто интересный вопрос. (interesting question — masc noun)\n\nAs a predicate after 'is':\nСуп лёгкий.\nВопрос трудный.\n\nFull adjective declension comes in A2. For now, master the pattern with masculine nouns.",
 icon:"🎯"},

{type:"mc", q:"You bump into someone on the street in Russia. What do you say?",
 opts:["Да","Простите","Спасибо","Нет"],
 ans:"Простите",
 hint:"This formal expression is used to apologise or get someone's attention politely."},

{type:"mc", q:"Which word best describes something you find engaging and want to know more about?",
 opts:["лёгкий","трудный","интересный","много"],
 ans:"интересный",
 hint:"This adjective comes from the same Latin root as the English word for the same concept."},

{type:"mc", q:"What is the Russian word for 'to hear' (involuntary perception)?",
 opts:["слышать","слушать","смотреть","говорить"],
 ans:"слышать",
 hint:"This verb describes hearing without deliberately trying. It differs from listening attentively."},

{type:"fb", s:"A: Ты {1} меня?\nB: Да, я слышу тебя.",
 a:["слышишь"],
 opts:["слышишь","слышу","слышит","слышать"],
 hint:"Fill in the ты-form (you, informal) of слышать. The stem is слыш- plus the 2nd conjugation ending for ты.",
 sSrc:"A: Can you {1} me?\nB: Yes, I can hear you."},

{type:"fb", s:"A: Русский язык трудный?\nB: Немного, но очень {1}.",
 a:["интересный"],
 opts:["интересный","лёгкий","трудный","много"],
 hint:"B agrees it is somewhat difficult but adds a positive quality — what word fits 'engaging and worth learning'?",
 sSrc:"A: Is Russian difficult?\nB: A little, but very {1}."},

{type:"match", pairs:[
  {trg:"суп", src:"soup"},
  {trg:"простите", src:"sorry / excuse me"},
  {trg:"слышать", src:"to hear"},
  {trg:"лёгкий", src:"easy / light"},
  {trg:"трудный", src:"difficult"}
]},

{type:"match", pairs:[
  {trg:"интересный", src:"interesting"},
  {trg:"вопрос", src:"question"},
  {trg:"суп", src:"soup"},
  {trg:"простите", src:"excuse me"},
  {trg:"лёгкий", src:"easy"}
]}

]}

]};
export default UNIT_04;
