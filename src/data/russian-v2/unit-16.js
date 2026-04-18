// Russian V2 Unit 16 — Introduction to Cases (B1.2)
const UNIT_16 = {n:16, lang:"ru", srcLang:"en", track:"v2", title:"Падежи", sub:"Cases: The Big Picture",
 icon:"🎯", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u16l1", title:"Six Cases", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Russian's 6 Cases",
 desc:"Russian marks nouns with 6 cases — each showing grammatical role. Case endings replace word order in English. This unit introduces all 6 with core questions and examples.",
 goals:["Know all 6 case names","Know each case's core function","Recognize case patterns in texts"]},

{type:"teach", trg:"именительный", src:"nominative (subject)", pos:"noun", gender:"m",
 note:"Case for subjects. Question: кто? что?\nThe dictionary form of nouns.",
 example:"A: Кто это?\nB: Это Анна. (nominative)",
 exampleSrc:"A: Who is this?\nB: This is Anna.",
 funFact:"Nominative (именительный) literally 'naming case' — because it NAMES things. All dictionary forms are nominative. This is your baseline case."},

{type:"teach", trg:"винительный", src:"accusative (direct object)", pos:"noun", gender:"m",
 note:"Case for direct objects. Question: кого? что?\nFeminine -а → -у, masculine inanimate = nominative.",
 example:"A: Я вижу Анну.\nB: Здорово!",
 exampleSrc:"A: I see Anna. (accusative)\nB: Great!",
 funFact:"Accusative (винительный) shares root with вина (blame/guilt) — the 'blamed/accused' case. It's the thing the action is done TO."},

{type:"teach", trg:"родительный", src:"genitive (of/from)", pos:"noun", gender:"m",
 note:"Case of possession, absence, quantity. Question: кого? чего?\nFeminine -а → -ы, masculine → -а.",
 example:"A: Это книга Анны.\nB: Понятно.",
 exampleSrc:"A: This is Anna's book. (Anna in genitive)\nB: Got it.",
 funFact:"Genitive (родительный) means 'birthing case' — the source/origin. Used for 'from' (из России — from Russia) and 'of' (книга Анны — book of Anna)."},

{type:"teach", trg:"дательный", src:"dative (to/for)", pos:"noun", gender:"m",
 note:"Case for indirect objects. Question: кому? чему?\nFeminine -а → -е, masculine → -у.",
 example:"A: Я дал Анне книгу.\nB: Она будет рада.",
 exampleSrc:"A: I gave Anna a book. (Anna in dative)\nB: She'll be glad.",
 funFact:"Dative (дательный) from 'давать' (to give). The 'giving-to' case. Russian uses it extensively for age (Мне 25 лет), feelings (Мне холодно), and indirect objects."},

{type:"teach", trg:"творительный", src:"instrumental (by/with)", pos:"noun", gender:"m",
 note:"Case for tools, means, manner. Question: кем? чем?\nFeminine -а → -ой, masculine → -ом.",
 example:"A: Чем ты пишешь?\nB: Я пишу ручкой.",
 exampleSrc:"A: What are you writing with?\nB: I'm writing with a pen. (pen in instrumental)",
 funFact:"Instrumental (творительный) from 'творить' (to create). The 'creating/tool' case. 'Чем?' asks 'with what means?' Answers tell you the instrument."},

{type:"teach", trg:"предложный", src:"prepositional (in/on/about)", pos:"noun", gender:"m",
 note:"Case after в/на/о. Question: о ком? о чём?\nUsually -е ending.",
 example:"A: О ком говорят?\nB: Об Анне.",
 exampleSrc:"A: Who are they talking about?\nB: About Anna. (Anna in prepositional)",
 funFact:"Prepositional (предложный) only exists after prepositions. Never stands alone. The only case that requires a preposition to use."},

{type:"tip", title:"Case Functions at a Glance",
 text:"THE SIX CASES AND WHAT THEY DO:\n\n1. NOMINATIVE (NOM) = subject.\n   кто? что?\n   Анна читает. (Anna reads.)\n\n2. ACCUSATIVE (ACC) = direct object.\n   кого? что?\n   Я вижу Анну. (I see Anna.)\n\n3. GENITIVE (GEN) = possession, absence, 'of.'\n   кого? чего?\n   Дом Анны. (Anna's house.)\n   У меня нет книги. (I don't have a book.)\n\n4. DATIVE (DAT) = indirect object, 'to/for.'\n   кому? чему?\n   Я дал Анне книгу. (I gave the book to Anna.)\n\n5. INSTRUMENTAL (INS) = 'by/with.'\n   кем? чем?\n   Я пишу ручкой. (I write with a pen.)\n\n6. PREPOSITIONAL (PREP) = 'about/in/on.'\n   о ком? о чём?\n   Я думаю о маме. (I think about mom.)\n\nTHIS IS YOUR ROADMAP. Next units drill each case deeply.",
 icon:"🎯"},

{type:"mc", q:"Which case is the subject of a sentence?",
 opts:["Genitive","Nominative","Accusative","Dative"],
 ans:"Nominative",
 hint:"The 'naming' case — what you find in the dictionary."},

{type:"mc", q:"'I talk ABOUT my friend' — which case does друг take?",
 opts:["Nominative","Genitive","Dative","Prepositional"],
 ans:"Prepositional",
 hint:"'About' = О + ___ case. The ___ only appears after prepositions."},

{type:"fb", s:"Анна — это {1} падеж.",
 a:["именительный"],
 opts:["именительный","родительный","дательный","творительный"],
 hint:"'Анна' without any preposition, as the subject = which case?",
 sSrc:"Anna is the {1} case."},

{type:"match", pairs:[
  {trg:"именительный", src:"nominative (who/what)"},
  {trg:"винительный", src:"accusative (object)"},
  {trg:"родительный", src:"genitive (of)"},
  {trg:"дательный", src:"dative (to)"},
  {trg:"творительный", src:"instrumental (with)"},
  {trg:"предложный", src:"prepositional (about)"}
]}
]},

{id:"ruv2_u16l2", title:"Case Endings (Feminine)", icon:"♀", xp:15, board:true, steps:[

{type:"intro", title:"Feminine Noun Endings",
 desc:"Start with feminine nouns — mostly end in -а. Each case changes the ending. Book = книга.",
 goals:["Learn feminine case endings","Apply to common words","Recognize case in texts"]},

{type:"teach", trg:"книга", src:"book (NOM)", pos:"noun", gender:"f",
 note:"Nominative. The base form.\nРусская книга = a Russian book.",
 example:"A: Какая книга у тебя?\nB: Интересная.",
 exampleSrc:"A: What kind of book do you have?\nB: Interesting.",
 funFact:"Книга is feminine because it ends in -а. All Russian feminine nouns like мама, школа, машина. A common gender marker."},

{type:"teach", trg:"книгу", src:"book (ACC)", pos:"noun", gender:"f",
 note:"Accusative. -а → -у.\nЯ читаю книгу = I read a book.",
 example:"A: Что читаешь?\nB: Читаю книгу.",
 exampleSrc:"A: What are you reading?\nB: Reading a book.",
 funFact:"Direct object of a verb goes in accusative. For feminine nouns ending in -а, just change to -у. Simple rule."},

{type:"teach", trg:"книги", src:"book (GEN)", pos:"noun", gender:"f",
 note:"Genitive. -а → -и (after к/г/х/ж/ч/ш/щ) or -ы.\n'У меня нет книги' (I don't have a book).",
 example:"A: Много у тебя книг?\nB: Около пятидесяти.",
 exampleSrc:"A: Do you have many books?\nB: About fifty.",
 funFact:"Spelling rule: after к/г/х/ж/ч/ш/щ, write И (not Ы). Так книги (not книгы). Важно."},

{type:"teach", trg:"книге", src:"book (DAT/PREP)", pos:"noun", gender:"f",
 note:"Dative -а → -е. Prepositional -а → -е.\nSame ending for both cases.",
 example:"A: Я думаю о книге.\nB: Какую читаешь?",
 exampleSrc:"A: I'm thinking about the book.\nB: Which one?",
 funFact:"For feminine nouns ending in -а, Dative and Prepositional have the same form: -е. Reduces memory load! Only 5 distinct forms for feminine."},

{type:"teach", trg:"книгой", src:"book (INS)", pos:"noun", gender:"f",
 note:"Instrumental. -а → -ой.\nС книгой = with a book.",
 example:"A: С чем ты идёшь?\nB: С книгой и сумкой.",
 exampleSrc:"A: What are you going with?\nB: With a book and a bag.",
 funFact:"Instrumental -ой often appears in means/tools: рукой (by hand), карандашом (with pencil). Also used with 'с' (with) preposition."},

{type:"tip", title:"Feminine Case Summary",
 text:"FEMININE NOUN ENDING IN -А (КНИГА):\n\nCase       | Ending | Example\n-----------|--------|--------\nNom        | -а     | книга\nAcc        | -у     | книгу\nGen        | -ы/-и  | книги\nDat        | -е     | книге\nIns        | -ой    | книгой\nPrep       | -е     | книге\n\nONLY 5 DISTINCT FORMS (Dat and Prep are the same!).\n\nFor practice, say книга in all cases:\nЭто КНИГА. (This is a book.)\nЯ читаю КНИГУ. (I read a book.)\nВ комнате нет КНИГИ. (In the room is no book.)\nЯ дал КНИГЕ обложку. (I gave the book a cover.)\nЯ пишу КНИГОЙ. (I write with a book — unusual but grammatically valid.)\nЯ думаю о КНИГЕ. (I think about the book.)",
 icon:"♀"},

{type:"mc", q:"'I read a book' — what ending for книга?",
 opts:["-а (NOM)","-у (ACC)","-ы (GEN)","-ой (INS)"],
 ans:"-у (ACC)",
 hint:"Direct object = accusative. Feminine -а → -у."},

{type:"mc", q:"'I don't have a book' — what case?",
 opts:["Nominative","Accusative","Genitive","Dative"],
 ans:"Genitive",
 hint:"Absence/lacking = ___. 'Нет книги' (not книга, not книгу)."},

{type:"fb", s:"Я читаю интересную {1}.",
 a:["книгу"],
 opts:["книгу","книга","книги","книге"],
 hint:"Direct object of читать — accusative ending.",
 sSrc:"I am reading an interesting book."},

{type:"fb", s:"У меня нет этой {1}.",
 a:["книги"],
 opts:["книги","книга","книгу","книге"],
 hint:"After 'нет' (not/no) — genitive case.",
 sSrc:"I don't have this book."},

{type:"match", pairs:[
  {trg:"книга", src:"NOM (subject)"},
  {trg:"книгу", src:"ACC (object)"},
  {trg:"книги", src:"GEN (of)"},
  {trg:"книге", src:"DAT/PREP"},
  {trg:"книгой", src:"INS (with)"}
]}
]},

{id:"ruv2_u16l3", title:"When Cases Matter", icon:"📚", xp:15, board:true, steps:[

{type:"intro", title:"Cases in Real Sentences",
 desc:"Russian case system replaces English word order and prepositions. The same noun changes its ending 6 times based on its sentence role.",
 goals:["Parse case in context","See how cases replace word order","Apply to multiple genders"]},

{type:"teach", trg:"у меня есть", src:"I have (construction)", pos:"phrase", gender:null,
 note:"Classic Russian 'have' pattern.\nУ + genitive of person + есть + nominative of thing.",
 example:"A: У тебя есть книга?\nB: Да, большая.",
 exampleSrc:"A: Do you have a book?\nB: Yes, a big one.",
 funFact:"'У меня есть' literally 'at me is.' Russian DOESN'T say 'I have' actively. The thing owned is subject, the owner is in a genitive location. Impersonal possession."},

{type:"teach", trg:"у меня нет", src:"I don't have", pos:"phrase", gender:null,
 note:"Negative possession.\nУ + gen + нет + GENITIVE (not nominative!).",
 example:"A: У тебя есть книга?\nB: Нет, у меня нет книги.",
 exampleSrc:"A: Do you have a book?\nB: No, I don't have a book.",
 funFact:"Switch from 'есть книга' (nom) to 'нет книги' (gen). Russian genitive of negation — the absent thing is in genitive. This catches learners."},

{type:"teach", trg:"в школе", src:"at school (PREP)", pos:"phrase", gender:null,
 note:"В + prepositional case.\nШкола → школе.",
 example:"A: Где ты был?\nB: В школе.",
 exampleSrc:"A: Where were you?\nB: At school.",
 funFact:"Location = prepositional. Motion = accusative. 'в школе' (at school, I'm there) vs 'в школу' (to school, I'm going). Same preposition, different cases!"},

{type:"teach", trg:"из России", src:"from Russia (GEN)", pos:"phrase", gender:null,
 note:"Из + genitive (origin).\nРоссия → России.",
 example:"A: Ты откуда?\nB: Из России.",
 exampleSrc:"A: Where are you from?\nB: From Russia.",
 funFact:"'Из' (from) always takes genitive. Common pattern: из Москвы (from Moscow), из книги (from the book), из мяса (made of meat)."},

{type:"teach", trg:"к другу", src:"to (a) friend (DAT)", pos:"phrase", gender:null,
 note:"К + dative (direction to person/place).\nДруг → другу.",
 example:"A: Куда идёшь?\nB: К другу.",
 exampleSrc:"A: Where are you going?\nB: To (a) friend's place.",
 funFact:"'К' (to/toward) always takes dative. Different from 'в/на' which take accusative for direction. К подруге (to friend's, fem), к маме (to mom's)."},

{type:"teach", trg:"с мамой", src:"with mom (INS)", pos:"phrase", gender:null,
 note:"С + instrumental.\nМама → мамой.",
 example:"A: С кем ты был?\nB: С мамой.",
 exampleSrc:"A: Who were you with?\nB: With mom.",
 funFact:"'С' (with) + instrumental = accompaniment. Different from инструментальный без 'с' which is the tool. С мамой = with mom; ручкой = with a pen (as tool)."},

{type:"teach", trg:"для мамы", src:"for mom (GEN)", pos:"phrase", gender:null,
 note:"Для + genitive (benefit/recipient).\nМама → мамы.",
 example:"A: Что купил?\nB: Подарок для мамы.",
 exampleSrc:"A: What did you buy?\nB: A gift for mom.",
 funFact:"'Для' always genitive. For the benefit of someone. Note the different 'for' patterns: для = 'for the purpose of'; за = 'in exchange for.'"},

{type:"tip", title:"Preposition + Case Chart",
 text:"KEY PREPOSITIONS AND THEIR CASES:\n\nGENITIVE:\n• из (from): из России, из книги.\n• от (from a person): от друга.\n• для (for): для мамы.\n• без (without): без сахара.\n• у (at someone's place, 'have'): у меня.\n\nDATIVE:\n• к (toward): к другу.\n• по (along, on): по улице.\n\nACCUSATIVE:\n• в (into): в школу (motion).\n• на (onto): на стол.\n• через (through/in time): через час.\n\nINSTRUMENTAL:\n• с (with): с мамой.\n• над (over), под (under): над столом.\n• за (behind): за домом.\n\nPREPOSITIONAL:\n• в (in): в школе (location).\n• на (on): на столе.\n• о (about): о маме.\n• при (at, in the presence of): при мне.\n\nMEMORIZE THE CASE EACH PREPOSITION TAKES. This unlocks most Russian.",
 deepDive:{title:"Why Russian Has Cases",
  text:"English traded case endings for word order. Russian kept cases and gained word order freedom. Russian can say 'книгу Анна читает' or 'читает книгу Анна' or 'Анна книгу читает' — meaning is preserved by the case endings. This flexibility allows emphasis shifts through word reordering without grammar change."}},

{type:"mc", q:"'Я иду К ___' — what case?",
 opts:["Nominative","Accusative","Dative","Prepositional"],
 ans:"Dative",
 hint:"К always takes ___. К + person's ___ form."},

{type:"mc", q:"Which preposition takes the instrumental?",
 opts:["в","к","с","из"],
 ans:"с",
 hint:"'С' (with) + instrumental. С мамой, с сахаром, с книгой."},

{type:"fb", s:"У меня нет {1}.",
 a:["денег"],
 opts:["денег","деньги","деньгам","деньгами"],
 hint:"After 'нет,' genitive. Plural feminine genitive.",
 sSrc:"I don't have money."},

{type:"fb", s:"Я хочу поговорить с {1}.",
 a:["мамой"],
 opts:["мамой","мама","маме","маму"],
 hint:"С + instrumental. Feminine instrumental ending.",
 sSrc:"I want to talk with mom."},

{type:"match", pairs:[
  {trg:"в школе", src:"at school (loc)"},
  {trg:"в школу", src:"to school (motion)"},
  {trg:"из России", src:"from Russia"},
  {trg:"к другу", src:"to a friend"},
  {trg:"с мамой", src:"with mom"}
]}
,{type:"match",pairs:[{trg:"у меня нет",src:"(review)"},{trg:"для мамы",src:"for mom (GEN)"}]}]}

]};
export default UNIT_16;
