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
 example:"A: Хочешь хлеб с маслом?\nB: Да, спасибо.",
 exampleSrc:"A: Do you want bread with butter?\nB: Yes, thanks.",
 funFact:"Bread and salt (хлеб-соль) is the traditional Russian welcome for guests. Even today, weddings may include this ancient ritual of offering bread."},

{type:"teach", trg:"мясо", src:"meat", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о (standard neuter).\nGeneral term for all meats.",
 example:"A: Ты ешь мясо?\nB: Нет, я вегетарианец.",
 exampleSrc:"A: Do you eat meat?\nB: No, I'm a vegetarian.",
 funFact:"Russian cuisine is traditionally meat-heavy. Famous dishes: beef stroganoff (бефстроганов), pelmeni (пельмени), shashlik (шашлык). Vegetarianism is growing but still a minority."},

{type:"teach", trg:"рыба", src:"fish", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nCollective term and individual fish.",
 example:"A: Вы любите рыбу?\nB: Да, особенно лосось.",
 exampleSrc:"A: Do you like fish?\nB: Yes, especially salmon.",
 funFact:"Russia's long coastlines and rivers make fish central to cuisine. Herring (селёдка), smoked salmon (копчёный лосось), and caviar (икра) are iconic."},

{type:"teach", trg:"молоко", src:"milk", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nFamous vowel reduction: ma-la-KO.",
 example:"A: Чай с молоком?\nB: Нет, без молока.",
 exampleSrc:"A: Tea with milk?\nB: No, without milk.",
 funFact:"Молоко is the textbook example of Russian vowel reduction: all three O's but only the last is stressed. Unstressed O's reduce to 'ah,' giving 'ma-la-KO.'"},

{type:"teach", trg:"чай", src:"tea", pos:"noun", gender:"m",
 note:"Masculine. Ends in -й.\nNational drink of Russia.",
 example:"A: Хочешь чай?\nB: Да, чёрный, пожалуйста.",
 exampleSrc:"A: Want tea?\nB: Yes, black, please.",
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
 example:"A: Какой сок вы хотите?\nB: Апельсиновый сок, пожалуйста.",
 exampleSrc:"A: Which juice do you want?\nB: Orange juice, please.",
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
 example:"A: Будешь есть?\nB: Нет, я не голоден.",
 exampleSrc:"A: Will you eat?\nB: No, I'm not hungry.",
 funFact:"Russian has TWO identical words 'есть': one means 'to eat' (verb), the other means 'there is/are' (existential). Context makes the distinction clear."},

{type:"teach", trg:"пить", src:"to drink", pos:"verb", gender:null,
 note:"Infinitive. Conjugates with stem change (пь-).\nи becomes 'yu' (я пью = I drink).",
 example:"A: Ты пьёшь кофе?\nB: Да, каждое утро.",
 exampleSrc:"A: Do you drink coffee?\nB: Yes, every morning.",
 funFact:"Пить + acc in Russian means 'to drink alcohol' when used without specifying what. 'Он пьёт' = 'He drinks [alcohol].' The stigma around this verb means Russians often specify what they drink."},

{type:"teach", trg:"вкусно", src:"tasty / delicious", pos:"adv", gender:null,
 note:"Adverb (not adjective).\nUsed impersonally: 'это вкусно' (this is tasty).",
 example:"A: Как борщ?\nB: Очень вкусно!",
 exampleSrc:"A: How is the borscht?\nB: Very tasty!",
 funFact:"Russians rarely say a simple 'да' when enjoying food — the expected response is 'очень вкусно!' (very tasty). Saying just 'good' would seem cold."},

{type:"teach", trg:"много", src:"a lot / many", pos:"adv", gender:null,
 note:"Used with both countable and uncountable.\nRequires genitive case after it.",
 example:"A: Сколько ты ешь?\nB: Я много ем.",
 exampleSrc:"A: How much do you eat?\nB: I eat a lot.",
 funFact:"Много governs the genitive case: много воды (a lot of water), много книг (many books). After numbers 5+ and these quantity words, genitive is king."},

{type:"teach", trg:"мало", src:"a little / few", pos:"adv", gender:null,
 note:"Opposite of много.\nAlso requires genitive case.",
 example:"A: У тебя есть деньги?\nB: Мало.",
 exampleSrc:"A: Do you have money?\nB: A little (not much).",
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
<<<<<<< HEAD
,

{type:"match", pairs:[
  {trg:"сок", src:"juice"},
  {trg:"мало", src:"a little / few"}
]}]}
=======
]}
>>>>>>> origin/main

]};
export default UNIT_04;
