// Russian V2 Unit 19 — Genitive Case (B1.2)
const UNIT_19 = {n:19, lang:"ru", srcLang:"en", track:"v2", title:"Родительный падеж", sub:"Genitive Case",
 icon:"🎯", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u19l1", title:"Possession with Genitive", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Genitive: Possession and Absence",
 desc:"Genitive handles possession ('Anna's book'), absence ('no time'), quantities ('a lot of'), and comes after many prepositions (из, от, для, без).",
 goals:["Form genitive for 3 genders","Use for possession","Use for negation/absence"]},

{type:"teach", trg:"книга Анны", src:"Anna's book", pos:"phrase", gender:null,
 note:"Possession: owner in GENITIVE, follows the thing.\nАнна → Анны.",
 example:"A: Чья это книга?\nB: Это книга Анны.",
 exampleSrc:"A: Whose book is this?\nB: This is Anna's book.",
 funFact:"Russian possession uses genitive, similar to English '-'s.' Order: thing + owner (genitive). Different from English 'Anna's book' — Russian is 'book (of) Anna.'"},

{type:"teach", trg:"у меня нет", src:"I don't have (GEN required)", pos:"phrase", gender:null,
 note:"After нет, genitive!\nУ меня нет книги (I don't have a book).",
 example:"A: Есть хлеб?\nB: Нет, у меня нет хлеба.",
 exampleSrc:"A: Is there bread?\nB: No, I don't have bread.",
 funFact:"Russian 'нет' (no, not) triggers genitive. The absent thing goes to genitive. English 'no bread' becomes 'нет хлеба.'"},

{type:"teach", trg:"много времени", src:"a lot of time", pos:"phrase", gender:null,
 note:"Quantity words take genitive.\nВремя → времени (neuter genitive).",
 example:"A: У тебя много времени?\nB: Мало.",
 exampleSrc:"A: Do you have a lot of time?\nB: Little.",
 funFact:"Много, мало, несколько, сколько all take genitive. 'Много друзей' (many friends), 'мало денег' (little money), 'сколько книг' (how many books)."},

{type:"teach", trg:"из России", src:"from Russia (GEN)", pos:"phrase", gender:null,
 note:"Из + genitive = from.\nРоссия → России.",
 example:"A: Ты откуда?\nB: Я из России.",
 exampleSrc:"A: Where are you from?\nB: I'm from Russia.",
 funFact:"Из + genitive works for origin: из дома (from home), из Москвы (from Moscow), из книги (from a book, as in quoting)."},

{type:"teach", trg:"для друга", src:"for (a) friend (GEN)", pos:"phrase", gender:null,
 note:"Для + genitive = for (benefit).\nДруг → друга.",
 example:"A: Кому подарок?\nB: Это для друга.",
 exampleSrc:"A: Who's the gift for?\nB: This is for a friend.",
 funFact:"Для + gen is 'for the benefit of.' Compare: для друга (for friend), для работы (for work), для здоровья (for health). Always genitive."},

{type:"teach", trg:"без сахара", src:"without sugar (GEN)", pos:"phrase", gender:null,
 note:"Без + genitive = without.\nСахар → сахара.",
 example:"A: Чай с сахаром?\nB: Нет, без сахара.",
 exampleSrc:"A: Tea with sugar?\nB: No, without sugar.",
 funFact:"Без + genitive = without. Opposite of с (with) + instrumental. 'Без сахара' vs 'с сахаром.'"},

{type:"tip", title:"Genitive: Many Uses",
 text:"THE GENITIVE CASE HAS MANY FUNCTIONS:\n\n1. POSSESSION:\nкнига Анны (Anna's book).\nмашина папы (dad's car).\n\n2. ABSENCE/NEGATION (with нет):\nнет времени (no time).\nнет денег (no money).\n\n3. QUANTITY:\nмного работы (a lot of work).\nмало людей (few people).\nсколько книг (how many books).\n\n4. AFTER CERTAIN PREPOSITIONS:\nиз (from): из России.\nот (from person): от друга.\nдля (for): для мамы.\nбез (without): без сахара.\nу (at, have): у меня.\n\n5. AFTER CERTAIN VERBS:\nбояться (to fear): боюсь грома (fear thunder).\nожидать (to expect): ожидаю ответа (expect an answer).\n\n6. WITH NUMBERS 2/3/4:\nтри книги (three books — singular genitive).\n\n7. WITH NUMBERS 5+:\nпять книг (five books — plural genitive).\n\nThe genitive is the most versatile Russian case — it gets lots of work done.",
 icon:"🎯"},

{type:"mc", q:"After 'нет' (no/not), which case?",
 opts:["Nominative","Accusative","Genitive","Dative"],
 ans:"Genitive",
 hint:"The 'absence' rule: what's missing goes to ___."},

{type:"mc", q:"Which preposition does NOT take genitive?",
 opts:["из","от","для","к"],
 ans:"к",
 hint:"К takes dative. From/for/without take genitive, к (toward) takes dative."},

{type:"fb", s:"У меня нет {1}.",
 a:["времени"],
 opts:["времени","время","времени","временем"],
 hint:"After 'нет' — genitive. Neuter время in genitive.",
 sSrc:"I don't have time."},

{type:"fb", s:"Я приехал из {1}.",
 a:["Москвы"],
 opts:["Москвы","Москва","Москву","Москве"],
 hint:"Из + genitive. Feminine Москва → Москвы.",
 sSrc:"I came from Moscow."},

{type:"match", pairs:[
  {trg:"книга Анны", src:"Anna's book (possession)"},
  {trg:"нет времени", src:"no time (absence)"},
  {trg:"много работы", src:"a lot of work"},
  {trg:"из России", src:"from Russia"},
  {trg:"для мамы", src:"for mom"}
]}
]},

{id:"ruv2_u19l2", title:"Genitive Endings", icon:"📝", xp:15, board:true, steps:[

{type:"intro", title:"Genitive Form Patterns",
 desc:"Each gender has different genitive endings. Master them for all 3 genders.",
 goals:["Form genitive for masculine","Form genitive for feminine","Form genitive for neuter"]},

{type:"teach", trg:"книга → книги", src:"book → of book (f)", pos:"phrase", gender:null,
 note:"Feminine -а → -ы.\nAfter г/к/х/ч/щ/ж/ш, use -и (spelling rule).",
 example:"A: Где обложка книги?\nB: У меня.",
 exampleSrc:"A: Where's the book's cover?\nB: At my place.",
 funFact:"Spelling rule (г/к/х/ж/ч/ш/щ + и) applies throughout Russian. Книги not книгы because г forces и."},

{type:"teach", trg:"стол → стола", src:"table → of table (m)", pos:"phrase", gender:null,
 note:"Masculine: add -а.\nСтанд pattern for consonant-ending masculines.",
 example:"A: Ножка стола сломалась.\nB: Починим.",
 exampleSrc:"A: The table leg broke.\nB: We'll fix it.",
 funFact:"Masculine genitive -а is a very productive ending. Стола (of table), дома (of house), друга (of friend)."},

{type:"teach", trg:"окно → окна", src:"window → of window (n)", pos:"phrase", gender:null,
 note:"Neuter: -о → -а.\nOne letter change.",
 example:"A: Стекло окна разбилось.\nB: Звоню в ремонт.",
 exampleSrc:"A: The window glass broke.\nB: Calling for repair.",
 funFact:"Neuter genitive shares form with masculine (both -а). This merges them in genitive and accusative inanimate, simplifying plural rules later."},

{type:"teach", trg:"мать → матери", src:"mother → of mother (f -ь)", pos:"phrase", gender:null,
 note:"Feminine -ь: -и ending + stem change.\nFeminine -ь is irregular.",
 example:"A: Сумка матери здесь.\nB: Взяла?",
 exampleSrc:"A: Mother's bag is here.\nB: Did you take it?",
 funFact:"Мать uses an old 'insertion' pattern: drop -ь, insert -ер- before ending. Also дочь → дочери. Both archaic forms survive."},

{type:"teach", trg:"время → времени", src:"time → of time (n -мя)", pos:"phrase", gender:null,
 note:"Neuter -мя ending: -мя → -мени.\nIrregular pattern shared by -мя words.",
 example:"A: Сколько у тебя времени?\nB: Час.",
 exampleSrc:"A: How much time do you have?\nB: An hour.",
 funFact:"Neuter -мя nouns (время, имя, племя, знамя) all follow this pattern. Adds -ен- in declined forms. Very irregular but memorable."},

{type:"teach", trg:"люди → людей", src:"people → of people (pl)", pos:"phrase", gender:null,
 note:"Plural genitive: varies by noun.\nЛюди → людей.",
 example:"A: Много людей на улице.\nB: Праздник.",
 exampleSrc:"A: Many people on the street.\nB: A holiday.",
 funFact:"Plural genitive is the 'chaos' of Russian declension — dozens of patterns. Людей, книг (zero ending), друзей (different stem), месяцев. Learn common ones."},

{type:"tip", title:"Genitive Endings Summary",
 text:"MASCULINE (→ -а/-я):\nстол → стола (plain -а).\nмузей → музея (-й → -я).\nдень → дня (fleeting е drops).\n\nFEMININE (→ -ы/-и):\nкнига → книги (-ы forced to -и by г).\nшкола → школы.\nдверь → двери (-ь → -и).\n\nNEUTER (→ -а/-я):\nокно → окна (plain -а).\nзадание → задания (-ие → -ия).\nвремя → времени (irregular -мя words).\n\nPLURAL (→ varies):\nстолы → столов.\nкниги → книг (zero ending).\nокна → окон (zero ending + epenthetic vowel).\nвремена → времён.\n\nSTART WITH SINGULAR PATTERNS. Plural genitive mastery comes slowly.\n\nPRACTICE: See a noun in genitive context → can you identify the base (nominative) form?",
 icon:"📝"},

{type:"mc", q:"The genitive of 'стол' (table, m):",
 opts:["стол","стола","столу","столе"],
 ans:"стола",
 hint:"Masculine genitive: add -а."},

{type:"mc", q:"The genitive of 'мама' (mom, f):",
 opts:["мамы","мама","маму","мамой"],
 ans:"мамы",
 hint:"Feminine -а → -ы."},

{type:"fb", s:"У моего {1} новая машина.",
 a:["папы"],
 opts:["папы","папа","папу","папе"],
 hint:"'У + GENITIVE' for possession. Masculine but ending in -а (like 'папа'), genitive is -ы.",
 sSrc:"My dad has a new car."},

{type:"fb", s:"Много {1} в библиотеке.",
 a:["книг"],
 opts:["книг","книга","книги","книге"],
 hint:"'Много' + gen plural. Feminine zero ending.",
 sSrc:"Lots of books in the library."},

{type:"match", pairs:[
  {trg:"книги (GEN)", src:"of book (f)"},
  {trg:"стола (GEN)", src:"of table (m)"},
  {trg:"окна (GEN)", src:"of window (n)"},
  {trg:"матери (GEN)", src:"of mother"},
  {trg:"времени (GEN)", src:"of time"}
]}
,{type:"match",pairs:[{trg:"у меня нет",src:"(review)"},{trg:"без сахара",src:"without sugar (GEN)"},{trg:"мать → матери",src:"mother → of mother (f -ь)"},{trg:"люди → людей",src:"people → of people (pl)"}]}]}

]};
export default UNIT_19;
