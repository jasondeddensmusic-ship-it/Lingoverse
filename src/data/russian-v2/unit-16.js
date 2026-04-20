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
 example:"A: Кто это?\nB: Это Анна.",
 exampleSrc:"A: Who is this?\nB: This is Anna.",
 funFact:"Nominative (именительный) literally 'naming case' — because it NAMES things. All dictionary forms are nominative. This is your baseline case."},

{type:"teach", trg:"винительный", src:"accusative (direct object)", pos:"noun", gender:"m",
 note:"Case for direct objects. Question: кого? что?\nFeminine -а → -у, masculine inanimate = nominative.",
 example:"A: Я вижу Анну.\nB: Здорово!",
 exampleSrc:"A: I see Anna. (accusative)\nB: Great!",
 funFact:"Accusative (винительный) shares root with вина (blame/guilt) — the 'blamed/accused' case. It's the thing the action is done TO."},

{type:"teach", trg:"родительный", src:"genitive (of/from)", pos:"noun", gender:"m",
 note:"Case of possession, absence, quantity. Question: кого? чего?\nFeminine -а → -ы, masculine → -а.",
 example:"A: Это книга Анны.\nB: Да, её.",
 exampleSrc:"A: This is Anna's book.\nB: Yes, hers.",
 funFact:"Genitive (родительный) means 'birthing case' — the source/origin. Used for 'from' (из России — from Russia) and 'of' (книга Анны — book of Anna)."},

{type:"teach", trg:"дательный", src:"dative (to/for)", pos:"noun", gender:"m",
 note:"Case for indirect objects. Question: кому? чему?\nFeminine -а → -е, masculine → -у.",
 example:"A: Я дал Анне книгу.\nB: Хорошо.",
 exampleSrc:"A: I gave Anna a book.\nB: Good.",
 funFact:"Dative (дательный) from 'давать' (to give). The 'giving-to' case. Russian uses it extensively for age (Мне 25 лет), feelings (Мне холодно), and indirect objects."},

{type:"teach", trg:"творительный", src:"instrumental (by/with)", pos:"noun", gender:"m",
 note:"Case for tools, means, manner. Question: кем? чем?\nFeminine -а → -ой, masculine → -ом.",
 example:"A: Чем ты пишешь?\nB: Я пишу.",
 exampleSrc:"A: What are you writing with?\nB: I'm writing.",
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
 example:"A: Много у тебя книг?\nB: Да, много.",
 exampleSrc:"A: Do you have many books?\nB: Yes, many.",
 funFact:"Spelling rule: after к/г/х/ж/ч/ш/щ, write И (not Ы). Так книги (not книгы). Важно."},

{type:"teach", trg:"книге", src:"book (DAT/PREP)", pos:"noun", gender:"f",
 note:"Dative -а → -е. Prepositional -а → -е.\nSame ending for both cases.",
 example:"A: Я думаю о книге.\nB: О какой книге?",
 exampleSrc:"A: I'm thinking about the book.\nB: Which book?",
 funFact:"For feminine nouns ending in -а, Dative and Prepositional have the same form: -е. Reduces memory load! Only 5 distinct forms for feminine."},

{type:"teach", trg:"книгой", src:"book (INS)", pos:"noun", gender:"f",
 note:"Instrumental. -а → -ой.\nС книгой = with a book.",
 example:"A: С чем ты идёшь?\nB: С книгой.",
 exampleSrc:"A: What are you going with?\nB: With a book.",
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
,{type:"match",pairs:[{trg:"у меня нет",src:"I don't have"},{trg:"для мамы",src:"for mom (GEN)"}]}]}

,{id:"ruv2_u16l_civ", title:"Общественные концепции", icon:"🏛️", xp:15, board:true, steps:[

{type:"intro", title:"B1 Civic Concepts",
 desc:"Learn 7 essential B1 Russian words for discussing society, politics, and ideas. Essential for TRKI B1 writing tasks and news comprehension.",
 goals:["Master 7 abstract civic words","Use them in formal discussion","Structure opinion writing"]},

{type:"teach", trg:"объяснять", src:"to explain (imperfective)", pos:"verb", gender:null,
 note:"Imperfective: ongoing or repeated explaining.\nПарная форма: объяснить (perfective, one complete explanation).",
 example:"A: Можешь объяснять это?\nB: Да, конечно.",
 exampleSrc:"A: Can you explain this?\nB: Yes, of course.",
 funFact:"From объяснение (explanation). The -ять/-яю conjugation pattern: объясняю, объясняешь, объясняет. Widely used in classrooms, debates, and instructions."},

{type:"teach", trg:"предлагать", src:"to propose / suggest (imperfective)", pos:"verb", gender:null,
 note:"Imperfective: habitual or ongoing proposals.\nПарная форма: предложить (perfective).",
 example:"A: Можно предлагать?\nB: Да, конечно.",
 exampleSrc:"A: Can one make suggestions?\nB: Yes, of course.",
 funFact:"From pre- (before) + лагать (to put). You 'put something before' someone for consideration. The perfective предложить is where the word 'proposal' (предложение) comes from."},

{type:"teach", trg:"политика", src:"politics / policy", pos:"noun", gender:"f",
 note:"Feminine noun (-ика always f in Russian).\nВнешняя политика = foreign policy. Внутренняя политика = domestic policy.",
 example:"A: Ты понимаешь политика?\nB: Да, немного.",
 exampleSrc:"A: Do you understand politics?\nB: Yes, a little.",
 funFact:"Borrowed from Greek polis (city-state) via Latin. The same root gives English 'police,' 'policy,' and 'polite.' In Russian, политик = a politician (masculine)."},

{type:"teach", trg:"экономика", src:"economy / economics", pos:"noun", gender:"f",
 note:"Feminine noun.\nЭкономика страны = the country's economy. Рыночная экономика = market economy.",
 example:"A: Как наша экономика?\nB: Она нормальная.",
 exampleSrc:"A: How is our economy?\nB: It's okay.",
 funFact:"From Greek oikonomia (household management). The same root is in 'ecology' (oikos = house). Russian экономить means 'to save/economize' — directly from the same stem."},

{type:"teach", trg:"образование", src:"education", pos:"noun", gender:"n",
 note:"Neuter noun (-ание ending = always neuter).\nВысшее образование = higher education. Среднее образование = secondary education.",
 example:"A: Образование важно для общества.\nB: Согласен.",
 exampleSrc:"A: Education is important for society.\nB: I agree.",
 funFact:"From образовать (to form/shape). Literally 'formation' — the same root as образ (image/form). Russian school types: школа (secondary), университет (university)."},

{type:"teach", trg:"развитие", src:"development", pos:"noun", gender:"n",
 note:"Neuter noun (-ие ending = neuter).\nЭкономическое развитие = economic development. Развитие ребёнка = child development.",
 example:"A: Развитие — это хорошо.\nB: Да, очень.",
 exampleSrc:"A: Development is good.\nB: Yes, very much.",
 funFact:"From развивать (to develop/unfold). The root вить means 'to wind/coil' — development as an unrolling or expansion. Развитие страны is a common phrase in political speeches."},

{type:"teach", trg:"решение", src:"solution / decision", pos:"noun", gender:"n",
 note:"Neuter noun (-ение ending = neuter).\nПринять решение = to make a decision. Найти решение = to find a solution.",
 example:"A: Какое решение лучше?\nB: Нужно думать.",
 exampleSrc:"A: Which solution is better?\nB: We need to think.",
 funFact:"From решить (to decide/solve). The same verb root gives решать (imperfective), нерешённый (unresolved), and решительный (decisive). 'Принять решение' is the standard formal phrase."},

{type:"tip", title:"Abstract Noun Suffix Patterns",
 text:"RUSSIAN ABSTRACT NOUN SUFFIXES:\n\n-ОСТЬ (FEMININE):\nExamples: справедливость (justice), ответственность (responsibility).\nPattern: adjective + -ость.\n\n-СТВО (NEUTER):\nExamples: общество (society), большинство (majority).\nPattern: noun/adj root + -ство.\n\n-АНИЕ / -ЕНИЕ (NEUTER):\nExamples: образование (education), решение (decision), мнение (opinion).\nPattern: verb stem + -ание/-ение.\n\n-ИЕ (NEUTER):\nExamples: развитие (development), условие (condition).\nPattern: verb stem + -ие.\n\nPRACTICAL RULE:\nIf a noun ends in -ость: it is FEMININE.\nIf a noun ends in -ство, -ание, -ение, -ие: it is NEUTER.\nThis covers 80% of Russian abstract vocabulary.",
 icon:"📐"},

{type:"mc", q:"Which word means 'to propose / suggest' (imperfective)?",
 opts:["объяснять","предлагать","развитие","решение"],
 ans:"предлагать",
 hint:"The imperfective verb 'to put something forward for consideration.'"},

{type:"mc", q:"What gender is 'политика' (politics)?",
 opts:["masculine","feminine","neuter","plural"],
 ans:"feminine",
 hint:"Nouns ending in -ика always belong to one consistent gender class in Russian."},

{type:"mc", q:"Which abstract noun suffix signals a FEMININE noun?",
 opts:["-ство","-ение","-ость","-ие"],
 ans:"-ость",
 hint:"The tip card lists this suffix as the one feminine category."},

{type:"fb", s:"Она хочет {1} задачу.",
 a:["объяснять"],
 opts:["объяснять","предлагать","решение","политика"],
 hint:"To describe or make something clear step-by-step is the imperfective verb for 'explain.'",
 sSrc:"She wants to explain the task."},

{type:"fb", s:"Высшее {1} важно для карьеры.",
 a:["образование"],
 opts:["образование","развитие","экономика","решение"],
 hint:"The neuter noun from -ание suffix meaning 'formal schooling / being formed.'",
 sSrc:"Higher education is important for a career."},

{type:"match", pairs:[
  {trg:"политика", src:"politics / policy (f)"},
  {trg:"экономика", src:"economy / economics (f)"},
  {trg:"образование", src:"education (n)"},
  {trg:"развитие", src:"development (n)"},
  {trg:"решение", src:"solution / decision (n)"}
]}

]},

{id:"ruv2_u16l_b1_academic", title:"Академический язык B1", icon:"🎓", xp:20, board:true, steps:[
{type:"intro", title:"Academic B1 Russian", desc:"Eight B1 academic terms for perspective, evidence, and formal connectors.", goals:["Use гипотеза and доказательство in argument","Describe impact with влияние","Use formal однако and следовательно"]},
{type:"teach", trg:"гипотеза", src:"hypothesis", pos:"noun", gender:"f",
 phonetic:"gipoteza",
 note:"Feminine.\nПредложить гипотезу = to propose a hypothesis.",
 example:"A: Какая у тебя гипотеза?\nB: Моя гипотеза очень простая.",
 exampleSrc:"A: What is your hypothesis?\nB: My hypothesis is very simple.",
 funFact:"Гипотеза entered Russian via Greek. Russian researchers use 'рабочая гипотеза' (working hypothesis) as the starting point of any scientific investigation."},
{type:"teach", trg:"доказательство", src:"evidence / proof", pos:"noun", gender:"n",
 phonetic:"dokazatel'stvo",
 note:"Neuter. Plural: доказательства.\nFrom доказать (to prove).",
 example:"A: У тебя есть доказательство?\nB: Да, у меня много доказательств.",
 exampleSrc:"A: Do you have evidence?\nB: Yes, I have much evidence.",
 funFact:"Russian mathematics textbooks label each proof 'Доказательство:' followed by the steps. Essential for TRKI B1 academic writing."},
{type:"teach", trg:"влияние", src:"influence / impact", pos:"noun", gender:"n",
 phonetic:"vliyanie",
 note:"Neuter. Оказать влияние = to exert influence.\nВлиять на + ACC = to influence.",
 example:"A: Какое влияние у этой книги?\nB: Большое влияние.",
 exampleSrc:"A: What influence does this book have?\nB: Great influence.",
 funFact:"Влияние shares its root with 'вливать' (to pour in) — literally 'pouring' of one thing into another."},
{type:"teach", trg:"точка зрения", src:"point of view / perspective", pos:"noun", gender:"f",
 phonetic:"tochka zreniya",
 note:"Feminine phrase: точка (point) + зрения (of vision).\nС моей точки зрения = from my perspective.",
 example:"A: Какая у тебя точка зрения?\nB: Моя точка зрения простая.",
 exampleSrc:"A: What is your point of view?\nB: My point of view is simple.",
 funFact:"Russian argumentative essays always open with a 'точка зрения' in the introduction. A direct calque of 'point of view.'"},
{type:"teach", trg:"однако", src:"however", pos:"conj", gender:null,
 phonetic:"odnako",
 note:"Formal connector — more academic than но.\nUsed at sentence start or in the middle.",
 example:"A: План хороший. Однако, это очень дорого.\nB: Мы согласны.",
 exampleSrc:"A: The plan is good. However, it is very expensive.\nB: We agree.",
 funFact:"Formal academic and journalistic Russian prefers 'однако' over 'но' — the latter is conversational while the former belongs in written argument."},
{type:"teach", trg:"следовательно", src:"therefore / consequently", pos:"adv", gender:null,
 phonetic:"sledovatel'no",
 note:"Formal adverb introducing a logical conclusion.\nSynonyms: поэтому (more casual), значит (conversational).",
 example:"A: Мы хотим помочь. Следовательно, мы работаем.\nB: Правильно.",
 exampleSrc:"A: We want to help. Therefore, we work.\nB: Correct.",
 funFact:"Следовательно comes from 'следовать' (to follow) — 'it follows that.' Standard marker of valid inference in Russian logic and law."},
{type:"teach", trg:"важный", src:"important", pos:"adj", gender:"m",
 phonetic:"vazhnyy",
 note:"Masculine. Feminine: важная. Plural: важные.\nCore descriptive adjective.",
 example:"A: Это важный вопрос?\nB: Да, очень важный.",
 exampleSrc:"A: Is this an important question?\nB: Yes, very important.",
 funFact:"Важный shares its root with вес (weight) — important things have 'weight' in Russian thinking."},
{type:"teach", trg:"серьёзный", src:"serious", pos:"adj", gender:"m",
 phonetic:"ser'yoznyy",
 note:"Masculine. Feminine: серьёзная. Plural: серьёзные.\nBoth for people and situations.",
 example:"A: Это серьёзный вопрос?\nB: Да, очень серьёзный.",
 exampleSrc:"A: Is this a serious question?\nB: Yes, very serious.",
 funFact:"Серьёзный entered Russian via French 'sérieux' in the 18th century. Core B1 vocabulary for everyday speech about character and important matters."},
{type:"tip", title:"Academic Russian: Formal Connectors",
 text:"B1 academic Russian uses formal connectors:\n\nоднако — however (vs spoken 'но')\nследовательно — therefore (vs spoken 'поэтому')\nнесмотря на — despite\n\nTRKI B1 writing rewards this register.",
 deepDive:{title:"Гипотеза and доказательство pair",
  text:"Russian academic argument pattern: 'Моя гипотеза — X. Доказательство показывает Y.' (My hypothesis is X. The evidence shows Y.)"}},
{type:"mc", q:"Какое слово означает 'hypothesis'?",
 opts:["гипотеза","доказательство","влияние","точка зрения"],
 ans:"гипотеза",
 hint:"Feminine noun; kept the Greek root intact."},
{type:"mc", q:"Какой формальный коннектор означает 'however'?",
 opts:["но","однако","значит","поэтому"],
 ans:"однако",
 hint:"Formal writing choice; literally means 'one-like.'"},
{type:"fb", s:"Моя {1} простая.", a:"гипотеза", opts:["гипотеза","точка","проблема","работа"],
 hint:"Feminine noun — your starting proposition.", sSrc:"My {1} is simple."},
{type:"fb", s:"План хороший. {1}, это дорого.", a:"однако", opts:["однако","но","поэтому","значит"],
 hint:"Formal connector meaning 'however.'", sSrc:"The plan is good. {1}, it is expensive."},
{type:"fb", s:"Это {1} вопрос.", a:"серьёзный", opts:["серьёзный","простой","новый","быстрый"],
 hint:"Masculine adjective meaning 'serious.'", sSrc:"This is a {1} question."},
{type:"fb", s:"Это {1} вопрос для нас.", a:"важный", opts:["важный","старый","новый","хороший"],
 hint:"Masculine adjective meaning 'important.'", sSrc:"This is a {1} question for us."},
{type:"match", pairs:[
  {trg:"гипотеза", src:"hypothesis"},
  {trg:"доказательство", src:"evidence"},
  {trg:"влияние", src:"influence"},
  {trg:"точка зрения", src:"point of view"}
]},
{type:"match", pairs:[
  {trg:"однако", src:"however"},
  {trg:"следовательно", src:"therefore"},
  {trg:"важный", src:"important"},
  {trg:"серьёзный", src:"serious"}
]}
]}

]};
export default UNIT_16;
