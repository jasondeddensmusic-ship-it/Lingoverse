// Russian V2 Unit 20 — Dative Case (B1.2)
const UNIT_20 = {n:20, lang:"ru", srcLang:"en", track:"v2", title:"Дательный падеж", sub:"Dative Case",
 icon:"🎯", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u20l1", title:"Giving and Indirect Objects", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Dative: The 'To' Case",
 desc:"Dative marks the recipient — who you're giving/saying/showing to. Also used for age, feelings, and modal expressions (мне нужно).",
 goals:["Use dative for indirect objects","Form dative endings","Use dative for age/feelings"]},

{type:"teach", trg:"Я дал Анне", src:"I gave Anna (DAT)", pos:"phrase", gender:null,
 note:"Анна → Анне.\nIndirect object (recipient).",
 example:"A: Кому ты дал цветы?\nB: Анне, на день рождения.",
 exampleSrc:"A: Who did you give flowers to?\nB: Anna, for her birthday.",
 funFact:"Dative is the 'receiving' case. Дать (give), сказать (say), показать (show), помочь (help) — all take dative for recipient."},

{type:"teach", trg:"Я сказал другу", src:"I told friend (DAT)", pos:"phrase", gender:null,
 note:"Друг → другу.\nMasculine dative -у ending.",
 example:"A: Что ты сказал?\nB: Сказал другу, что мы опоздаем.",
 exampleSrc:"A: What did you say?\nB: Told (a) friend we'd be late.",
 funFact:"Masculine dative -у is distinct from accusative -а (for animates). Сказал друга (wrong — acc) vs сказал другу (correct — dat)."},

{type:"teach", trg:"Я помог маме", src:"I helped mom (DAT)", pos:"phrase", gender:null,
 note:"Помочь takes DATIVE (not accusative like English).\nМама → маме.",
 example:"A: Что ты делал?\nB: Помогал маме готовить.",
 exampleSrc:"A: What were you doing?\nB: Helping mom cook.",
 funFact:"English 'help someone' becomes Russian 'help TO someone.' Помочь + dative is tricky for learners. Similar verbs: звонить (call), мешать (bother), обещать (promise)."},

{type:"teach", trg:"Мне 25 лет", src:"I'm 25 (DAT for age)", pos:"phrase", gender:null,
 note:"Age construction: [dative pronoun] + number + год/года/лет.\nLiterally: 'to-me 25 years.'",
 example:"A: Сколько тебе лет?\nB: Мне 25.",
 exampleSrc:"A: How old are you?\nB: I'm 25.",
 funFact:"Russian age NEVER uses 'есть' (to be). Dative of pronoun + number. 'Я 25' is WRONG. The impersonal pattern is universal."},

{type:"teach", trg:"Мне холодно", src:"I'm cold (DAT for feelings)", pos:"phrase", gender:null,
 note:"Impersonal + dative for feelings.\nSubject is the state, not the person.",
 example:"A: Холодно тебе?\nB: Мне очень холодно.",
 exampleSrc:"A: Are you cold?\nB: I'm very cold.",
 funFact:"Russian 'мне холодно' = 'to-me cold.' The feeling happens TO you. Not 'я холодный' (I am a cold person — completely different meaning)."},

{type:"teach", trg:"Мне нужно", src:"I need (DAT for modal)", pos:"phrase", gender:null,
 note:"Нужно + infinitive for 'need to do.'\nAlways uses dative.",
 example:"A: Что тебе нужно?\nB: Мне нужно идти.",
 exampleSrc:"A: What do you need?\nB: I need to go.",
 funFact:"Alternative: надо (very casual), необходимо (very formal). All take dative. 'Мне надо,' 'мне нужно,' 'мне необходимо' — same meaning, different registers."},

{type:"tip", title:"Dative: Key Uses",
 text:"DATIVE APPEARS FOR:\n\n1. INDIRECT OBJECTS (recipients):\nЯ дал цветы маме. (I gave flowers to mom.)\nОн сказал это другу. (He said this to a friend.)\n\n2. AGE:\nМне 25 лет. (I'm 25.)\nЕй 30. (She's 30.)\n\n3. FEELINGS AND STATES:\nМне скучно. (I'm bored.)\nЕй холодно. (She's cold.)\nЕму жарко. (He's hot.)\n\n4. NECESSITY/NEED:\nМне нужно идти. (I need to go.)\nНам надо отдохнуть. (We need to rest.)\n\n5. AFTER VERBS:\nпомогать (help): Я помогаю маме.\nзвонить (call): Я звоню другу.\nмешать (bother): Не мешай мне.\nответить (reply): Ответь мне.\n\n6. AFTER PREPOSITIONS К, ПО:\nК маме (to mom's).\nПо улице (along the street).\n\nENDINGS:\nм: -у (другу).\nf: -е (маме).\nn: -у (окну).",
 icon:"🎯"},

{type:"mc", q:"Which case after 'помочь' (to help)?",
 opts:["Nominative","Accusative","Dative","Instrumental"],
 ans:"Dative",
 hint:"Unlike English 'help someone' (direct object), Russian uses ___."},

{type:"mc", q:"'I'm 30' in Russian:",
 opts:["Я 30","Я есть 30","Мне 30","Мной 30"],
 ans:"Мне 30",
 hint:"Age uses dative + number. Always impersonal."},

{type:"fb", s:"Я позвонил {1} вечером.",
 a:["другу"],
 opts:["другу","друг","друга","другом"],
 hint:"'Звонить' takes dative. Masculine дат ending -у.",
 sSrc:"I called a friend in the evening."},

{type:"fb", s:"Мне {1} работать завтра.",
 a:["нужно"],
 opts:["нужно","нужный","нужная","нужные"],
 hint:"Necessity with dative + 'нужно' adverb.",
 sSrc:"I need to work tomorrow."},

{type:"match", pairs:[
  {trg:"мне", src:"to me (dative pronoun)"},
  {trg:"тебе", src:"to you (dative)"},
  {trg:"ему", src:"to him"},
  {trg:"ей", src:"to her"},
  {trg:"нам", src:"to us"}
]}
]},

{id:"ruv2_u20l2", title:"Dative Endings", icon:"📝", xp:15, board:true, steps:[

{type:"intro", title:"Forming the Dative",
 desc:"Each gender has predictable dative endings. Masculine -у, feminine -е, neuter -у.",
 goals:["Form dative for each gender","Apply with indirect objects","Form personal pronouns in dative"]},

{type:"teach", trg:"стол → столу", src:"table → to table (m)", pos:"phrase", gender:null,
 note:"Masculine: -у ending.\nПодошёл к столу (approached the table).",
 example:"A: Куда идёшь?\nB: Подхожу к столу.",
 exampleSrc:"A: Where are you going?\nB: Approaching the table.",
 funFact:"Dative -у is distinct from genitive -а for masculines. Сказал другу (to friend) vs брата (of brother). Important!"},

{type:"teach", trg:"книга → книге", src:"book → to book (f)", pos:"phrase", gender:null,
 note:"Feminine: -а → -е.\nSame as prepositional!",
 example:"A: Я дал название книге.\nB: Красиво.",
 exampleSrc:"A: I gave the book a title.\nB: Nice.",
 funFact:"Feminine dative and prepositional are identical (-е). A relief for learners. Only context tells them apart: 'к книге' (dative) vs 'о книге' (prepositional)."},

{type:"teach", trg:"окно → окну", src:"window → to window (n)", pos:"phrase", gender:null,
 note:"Neuter: -о → -у.\nSame pattern as masculine.",
 example:"A: Я подошёл к окну.\nB: Что видишь?",
 exampleSrc:"A: I approached the window.\nB: What do you see?",
 funFact:"Neuter -у matches masculine -у. Russian often conflates masculine and neuter in non-nominative forms. Both use -а in genitive, -у in dative."},

{type:"teach", trg:"площадь → площади", src:"square → to square (f -ь)", pos:"phrase", gender:null,
 note:"Feminine -ь: -и ending.\nSpecial soft-sign pattern.",
 example:"A: Я подошёл к площади.\nB: Красная?",
 exampleSrc:"A: I approached the square.\nB: Red one?",
 funFact:"Feminine -ь nouns take -и in both dative AND prepositional (same ending). Дочь → дочери, тетрадь → тетради."},

{type:"teach", trg:"друзьям", src:"to friends (pl DAT)", pos:"phrase", gender:null,
 note:"Plural dative: -ам/-ям for all genders.\nДрузья → друзьям.",
 example:"A: Я пишу друзьям каждую неделю.\nB: Замечательно.",
 exampleSrc:"A: I write to friends every week.\nB: Wonderful.",
 funFact:"Plural dative collapses gender distinctions: -ам for hard, -ям for soft. Simple. 'Друзьям' (friends, dat), 'учителям' (teachers), 'девушкам' (girls)."},

{type:"teach", trg:"ему/ей/им", src:"to him/her/them (PRON)", pos:"phrase", gender:null,
 note:"Personal pronouns in dative.\nEnding with -му/-ей/-м (distinctive).",
 example:"A: Что ты сказал ей?\nB: Ничего важного.",
 exampleSrc:"A: What did you say to her?\nB: Nothing important.",
 funFact:"Third-person pronouns have distinct dative forms: ему (him), ей (her), им (them). Also ему/ей/им can be used without preposition as indirect objects."},

{type:"tip", title:"Dative Summary",
 text:"DATIVE ENDINGS:\n\nMASCULINE:\nстол → стол**у**.\nмузей → музе**ю**.\nгость → гост**ю**.\n\nFEMININE:\nкнига → книг**е** (same as prep).\nшкола → школ**е**.\nплощадь → площад**и**.\n\nNEUTER:\nокно → окн**у**.\nзадание → задани**ю**.\nвремя → времен**и** (irreg).\n\nPLURAL (all genders):\nдрузья → друзь**ям**.\nшколы → школ**ам**.\nдети → дет**ям**.\n\nPRONOUNS:\nя → мне.\nты → тебе.\nон → ему.\nона → ей.\nоно → ему.\nмы → нам.\nвы → вам.\nони → им.\n\nTHE PRONOUN 'ТЕБЕ' AND 'МНЕ' are your most-used forms for personal expressions. Drill them.",
 icon:"📝"},

{type:"mc", q:"Dative of 'школа' (f):",
 opts:["школа","школу","школы","школе"],
 ans:"школе",
 hint:"Feminine -а → -е in dative (same as prep)."},

{type:"mc", q:"Dative of 'друг' (m):",
 opts:["другу","друга","другом","друге"],
 ans:"другу",
 hint:"Masculine dative: consonant + -у."},

{type:"fb", s:"Я подарил цветы {1}.",
 a:["маме"],
 opts:["маме","мама","маму","мамой"],
 hint:"Indirect object = dative. Feminine 'мама' → -е.",
 sSrc:"I gave mom flowers."},

{type:"fb", s:"Я {1} напишу завтра.",
 a:["тебе"],
 opts:["тебе","ты","тебя","тобой"],
 hint:"'To you' as indirect object = dative pronoun.",
 sSrc:"I'll write to you tomorrow."},

{type:"match", pairs:[
  {trg:"мне", src:"to me"},
  {trg:"тебе", src:"to you"},
  {trg:"ему", src:"to him"},
  {trg:"ей", src:"to her"},
  {trg:"нам", src:"to us"}
]}
,{type:"match",pairs:[{trg:"Я дал Анне",src:"I gave Anna (DAT)"},{trg:"стол → столу",src:"table → to table (m)"},{trg:"книга → книге",src:"book → to book (f)"},{trg:"окно → окну",src:"window → to window (n)"},{trg:"площадь → площади",src:"square → to square (f -ь)"},{trg:"друзьям",src:"to friends (pl DAT)"}]}]}

]};
export default UNIT_20;
