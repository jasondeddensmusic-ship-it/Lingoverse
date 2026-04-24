// Russian V2 Unit 2. Numbers and Age (A1.1)
const UNIT_02 = {n:2, lang:"ru", srcLang:"en", track:"v2", title:"Мне 25 лет", sub:"Numbers and Age",
 icon:"🔢", level:"A1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u2l1", title:"Числа 1-5", icon:"🔢", xp:15, board:true, steps:[

{type:"intro", title:"Numbers 1-5",
 desc:"Russian numbers are your doorway to age, time, and prices. Start with 1-5 and the crucial detail: 'one' and 'two' have gender.",
 goals:["Count 1 to 5 in Russian","Know that один/одна/одно change for gender","Use два/две with masc/fem nouns"]},

{type:"teach", trg:"один", src:"one (masculine)", pos:"num", gender:null,
 note:"Used with masculine nouns.\nOne of the few numbers that changes for gender.",
 example:"A: Один рубль?\nB: Да, один рубль.",
 exampleSrc:"A: One ruble?\nB: Yes, one ruble.",
 funFact:"Russian 'one' agrees with the noun's gender: один (m), одна (f), одно (n). This is rare among languages, most treat 1 as a single form."},

{type:"teach", trg:"одна", src:"one (feminine)", pos:"num", gender:null,
 note:"Used with feminine nouns.\nAgrees with the following noun.",
 example:"A: Одна минута?\nB: Да, одна минута.",
 exampleSrc:"A: One minute?\nB: Yes, one minute.",
 funFact:"Gender agreement is everywhere in Russian. Even the number 'one' must match. You'll learn this pattern for adjectives and pronouns too."},

{type:"teach", trg:"два", src:"two (masculine/neuter)", pos:"num", gender:null,
 note:"Used with masculine and neuter nouns.\nAlso has a feminine form: две.",
 example:"A: Сколько рублей?\nB: Два рубля.",
 exampleSrc:"A: How many rubles?\nB: Two rubles.",
 funFact:"After 2 (and 3, 4), Russian uses the GENITIVE SINGULAR form: два брата (not братья). The number controls the case of the noun. You'll learn this in B1."},

{type:"teach", trg:"две", src:"two (feminine)", pos:"num", gender:null,
 note:"Used with feminine nouns ONLY.\nAlways две, never два with feminine.",
 example:"A: Сколько минут?\nB: Две минуты.",
 exampleSrc:"A: How many minutes?\nB: Two minutes.",
 funFact:"Only 1 and 2 are gendered in Russian. 3 and up are genderless. This quirk traces back to Proto-Indo-European roots."},

{type:"teach", trg:"три", src:"three", pos:"num", gender:null,
 note:"Same form regardless of gender.\nFollowed by genitive singular.",
 example:"A: Сколько рублей?\nB: Три рубля.",
 exampleSrc:"A: How many rubles?\nB: Three rubles.",
 funFact:"Sounds like English 'tree' but with a rolled R. Three of something is 'три + gen sg': три книги (3 books), три друга (3 friends)."},

{type:"teach", trg:"четыре", src:"four", pos:"num", gender:null,
 note:"Stress on first syllable: CHE-ty-re.\nFollowed by genitive singular.",
 example:"A: Сколько рублей?\nB: Четыре рубля.",
 exampleSrc:"A: How many rubles?\nB: Four rubles.",
 funFact:"Used with the same genitive singular as 2 and 3. Four of something ends the '2-3-4 singular' pattern. Starting with 5, plural genitive takes over."},

{type:"teach", trg:"пять", src:"five", pos:"num", gender:null,
 note:"Ends in soft sign ь.\nFollowed by GENITIVE PLURAL (different pattern from 2-4).",
 example:"A: Сколько рублей?\nB: Пять рублей.",
 exampleSrc:"A: How many rubles?\nB: Five rubles.",
 funFact:"Huge transition at 5: the noun switches from genitive singular (four books = четыре книги) to genitive plural (five books = пять книг). This 'five-rule' applies for 5-20, 25+, 30+..."},

{type:"tip", title:"Russian Numbers Change the Noun",
 text:"Russian numbers control the CASE of the following noun. This is called the 'numeric paradigm.'\n\nRules:\n1 (один/одна/одно): nominative singular (один брат, одна сестра).\n2, 3, 4: GENITIVE SINGULAR (два брата, три сестры).\n5+: GENITIVE PLURAL (пять братьев, пять сестёр).\n\nDon't worry about memorizing all the endings now. For A1, just know that 2-4 behaves differently from 5+. You'll master this in B1."},

{type:"mc", q:"Which form of 'one' do you use with 'sister' (сестра)?",
 opts:["одна","одно","один-одна","один"],
 ans:"одна",
 hint:"Сестра is feminine (ends in -а). Use the feminine form."},

{type:"mc", q:"Which form of 'two' do you use with 'house' (дом, masculine)?",
 opts:["две","два","оба","два-две"],
 ans:"два",
 hint:"Дом is masculine. Use the masculine/neuter form."},

{type:"fb", s:"A: У тебя есть книги?\nB: Да, у меня {1} книги.",
 a:["три"],
 opts:["три","пять","одна","две"],
 hint:"The answer uses plural singular form 'книги' (with -и ending). This matches 2-4 count pattern. Answer is the number that fits between 2 and 4.",
 sSrc:"A: Do you have books?\nB: Yes, I have {1} books."},

{type:"match", pairs:[
  {trg:"один/одна", src:"one"},
  {trg:"два/две", src:"two"},
  {trg:"три", src:"three"},
  {trg:"четыре", src:"four"},
  {trg:"пять", src:"five"}
]}
]},

{id:"ruv2_u2l2", title:"Числа 6-10", icon:"🔢", xp:15, board:true, steps:[

{type:"intro", title:"Numbers 6-10",
 desc:"Complete your basic number set. Six through ten are all genderless and follow the same genitive plural pattern as five.",
 goals:["Count 6 to 10","Know the genitive plural rule after 5-10","Form basic counting phrases"]},

{type:"teach", trg:"шесть", src:"six", pos:"num", gender:null,
 note:"Ends in soft sign ь (like пять).\nFollowed by genitive plural.",
 example:"A: Сколько вам лет?\nB: Мне шесть лет.",
 exampleSrc:"A: How old are you?\nB: I am six years old.",
 funFact:"Лет is the genitive plural form of 'year' used after 5 and up. The singular nominative 'год' (year) becomes 'лет', an irregular stem change seen only with years."},

{type:"teach", trg:"семь", src:"seven", pos:"num", gender:null,
 note:"Soft sign ending.\nЕ reduces to 'ye' sound.",
 example:"A: Сколько рублей?\nB: Семь рублей.",
 exampleSrc:"A: How many rubles?\nB: Seven rubles.",
 funFact:"Часов is the genitive plural of час (hour). Russian time expressions use numbers + gen pl: семь часов (seven hours/o'clock), пять часов (five)."},

{type:"teach", trg:"восемь", src:"eight", pos:"num", gender:null,
 note:"Stress on first syllable: VO-sem.\nEnds in soft sign.",
 example:"A: Сколько рублей?\nB: Восемь рублей.",
 exampleSrc:"A: How many rubles?\nB: Eight rubles.",
 funFact:"Восемь is tricky to pronounce. The в and с are voiced/voiceless consonant cluster. Practice: 'VO-sim' with a very soft м at the end."},

{type:"teach", trg:"девять", src:"nine", pos:"num", gender:null,
 note:"Stress on first: DYE-vyat.\nContains the 'ya' sound.",
 example:"A: Сколько рублей?\nB: Девять рублей.",
 exampleSrc:"A: How many rubles?\nB: Nine rubles.",
 funFact:"The preposition 'в' (at/in) + nominative is a common time pattern: в девять (at 9), в пять (at 5). For hours, always nominative."},

{type:"teach", trg:"десять", src:"ten", pos:"num", gender:null,
 note:"Stress on first: DYE-syat.\nCompletes your basic counting.",
 example:"A: Сколько рублей?\nB: Десять рублей.",
 exampleSrc:"A: How many rubles?\nB: Ten rubles.",
 funFact:"Минут is genitive plural of минута (minute). Russian time often uses genitive plurals: десять минут, пять минут. The unusually short form after numbers is a puzzle for beginners."},

{type:"teach", trg:"ноль", src:"zero", pos:"num", gender:null,
 note:"Also spelled нуль in some contexts.\nMasculine noun when used as a word.",
 example:"A: Сколько?\nB: Ноль рублей.",
 exampleSrc:"A: How many?\nB: Zero rubles.",
 funFact:"Used in phone numbers and scores. '-1' is written 'минус один.' Russian decimal: used with запятая (comma), not period: 3,14 not 3.14."},

{type:"tip", title:"The 5+ Pattern",
 text:"For numbers 5 through 20, the noun ALWAYS takes the genitive plural.\n\nExamples:\nпять минут (five minutes, not минуты).\nшесть книг (six books, not книги).\nсемь дней (seven days).\nдесять рублей (ten rubles).\n\nThe genitive plural usually looks different from what you'd expect. Start by memorizing common ones: минут, книг, дней, лет, рублей, часов, минут, детей.",
 icon:"🔑"},

{type:"mc", q:"Which number triggers the genitive PLURAL in the following noun?",
 opts:["пять","один","два","три"],
 ans:"пять",
 hint:"Numbers 5 and above take genitive plural. Numbers 2-4 take genitive singular."},

{type:"mc", q:"How do you say 'ten hours' (как 10 часов)?",
 opts:["десять часы","десять часов","десять час","десять часа"],
 ans:"десять часов",
 hint:"Ten is 5+, so genitive plural. The gen pl of час is часов."},

{type:"fb", s:"A: Сколько минут осталось?\nB: {1} минут.",
 a:["десять"],
 opts:["десять","один","две","три"],
 hint:"Looking at the answer: 'минут' is genitive PLURAL. Only numbers 5+ take gen pl. Pick the largest option.",
 sSrc:"A: How many minutes are left?\nB: {1} minutes."},

{type:"match", pairs:[
  {trg:"шесть", src:"six"},
  {trg:"семь", src:"seven"},
  {trg:"восемь", src:"eight"},
  {trg:"девять", src:"nine"},
  {trg:"десять", src:"ten"}
]}
]},

{id:"ruv2_u2l3", title:"Сколько вам лет?", icon:"🎂", xp:15, board:true, steps:[

{type:"intro", title:"How Old Are You?",
 desc:"Age in Russian uses a construction that means 'to me [it is] X years.' It's impersonal, like many Russian feeling/state expressions.",
 goals:["Ask age formally and informally","State your age with Мне/Тебе/Ему/Ей","Use лет, года, год correctly"]},

{type:"teach", trg:"Сколько", src:"how much / how many", pos:"pron", gender:null,
 note:"Used for countable and uncountable.\nTriggers genitive in following noun.",
 example:"A: Сколько рублей?\nB: Пять рублей.",
 exampleSrc:"A: How many rubles?\nB: Five rubles.",
 funFact:"Сколько стоит? (How much does it cost?) is your essential shopping phrase. It's also used with time: сколько времени? (what time is it?)."},

{type:"teach", trg:"Мне", src:"to me (dative)", pos:"pron", gender:null,
 note:"Dative form of я (I).\nUsed for age, feelings, impersonal states.",
 example:"A: Сколько тебе лет?\nB: Мне 25 лет.",
 exampleSrc:"A: How old are you?\nB: I am 25 (years old).",
 funFact:"Russian age is impersonal: 'to-me [it is] 25 years', not 'I am 25.' This impersonal style pervades Russian: 'to-me cold' (мне холодно), 'to-me boring' (мне скучно)."},

{type:"teach", trg:"Тебе", src:"to you (dative, informal)", pos:"pron", gender:null,
 note:"Dative form of ты.\nFor informal age questions.",
 example:"A: Сколько тебе лет?\nB: Мне 30 лет.",
 exampleSrc:"A: How old are you? (informal)\nB: I'm 30.",
 funFact:"Use тебе only with friends, family, and children. With strangers, switch to вам (formal dative of вы)."},

{type:"teach", trg:"Вам", src:"to you (dative, formal)", pos:"pron", gender:null,
 note:"Dative form of вы.\nAlso used for plural 'you.'",
 example:"A: Сколько вам лет?\nB: Мне 45 лет.",
 exampleSrc:"A: How old are you? (formal)\nB: I'm 45.",
 funFact:"The standard polite age question. Even doctors, flight attendants, and service staff use this with you. The answer starts with Мне, not Я."},

{type:"teach", trg:"лет", src:"years (after 5+, 0)", pos:"noun", gender:"pl",
 note:"Genitive plural of год.\nUsed with 0 and with numbers ending 5-9, or 10-20.",
 example:"A: Сколько вам лет?\nB: Мне двадцать лет.",
 exampleSrc:"A: How old are you?\nB: I'm twenty years old.",
 funFact:"Лет is actually from a different root (лето = summer). Early Russians said 'I have seen X summers' rather than 'years.' The word survived for counting years."},

{type:"teach", trg:"года", src:"years (after 2, 3, 4)", pos:"noun", gender:"m",
 note:"Genitive singular of год.\nUsed after numbers ending in 2, 3, 4 (but NOT 12, 13, 14).",
 example:"A: Сколько тебе лет?\nB: Мне два года.",
 exampleSrc:"A: How old are you?\nB: I am two years old.",
 funFact:"Два года, три года, четыре года: the '2-3-4 rule.' BUT двенадцать лет, тринадцать лет (12, 13 teens use the 5+ pattern). Because Russian rules are like that."},

{type:"teach", trg:"год", src:"year (after 1, 21, 31...)", pos:"noun", gender:"m",
 note:"Nominative singular.\nUsed after numbers ending in 1 (but NOT 11).",
 example:"A: Сколько тебе лет?\nB: Мне один год.",
 exampleSrc:"A: How old are you?\nB: I am one year old.",
 funFact:"Один год (1), двадцать один год (21), тридцать один год (31). BUT одиннадцать лет (11). The 'teen rule' overrides the ends-in-1 rule for 11-19."},

{type:"tip", title:"The Age Formula",
 text:"AGE FORMULA: Dative pronoun + number + [год/года/лет]\n\nPick the right year-word based on the LAST DIGIT of the number:\n- Ends in 1 (except 11): год. Мне один год. (I'm 1)\n- Ends in 2, 3, 4 (except 12, 13, 14): года. Мне двадцать два года. (I'm 22)\n- Ends in 5-9, 0, or is 11-19: лет. Мне пять лет. Мне двенадцать лет. (I'm 5, I'm 12)\n\nExample ages:\n21 год, 22 года, 25 лет, 30 лет, 35 лет, 41 год, 43 года, 50 лет, 100 лет.",
 icon:"🔢"},

{type:"mc", q:"Which is correct?",
 opts:["Мне двадцать пять лет","Мне двадцать пять год","Мне двадцать пять","Мне двадцать пять года"],
 ans:"Мне двадцать пять лет",
 hint:"25 ends in 5 → use the gen plural 'лет.' And don't forget the word for 'years' is not optional."},

{type:"mc", q:"Which is the FORMAL way to ask someone's age?",
 opts:["Сколько твои года?","Сколько вам лет?","Сколько ты старый?","Сколько тебе лет?"],
 ans:"Сколько вам лет?",
 hint:"Formal 'you' (dative of вы). The word order and pronoun matter."},

{type:"fb", s:"A: Сколько твоей сестре лет?\nB: Моей сестре {1}.",
 a:["пять лет"],
 opts:["пять лет","пять года","пять год","пять"],
 hint:"5 ends in 5, so use the 5+ pattern. Number + лет.",
 sSrc:"A: How old is your sister?\nB: My sister is {1}."},

{type:"fb", s:"A: Сколько лет твоему отцу?\nB: Ему сорок два {1}.",
 a:["года"],
 opts:["года","лет","год","годов"],
 hint:"42 ends in 2, so use the '2/3/4 rule' → gen singular.",
 sSrc:"A: How old is your father?\nB: He is forty-two {1} old."},

{type:"match", pairs:[
  {trg:"Мне 1 год", src:"I'm 1 year old"},
  {trg:"Мне 3 года", src:"I'm 3 years old"},
  {trg:"Мне 7 лет", src:"I'm 7 years old"},
  {trg:"Мне 21 год", src:"I'm 21 years old"}
,{trg:"ноль",src:"zero"}]},

{type:"mc", q:"Why does Russian use 'Мне' (to me) for age instead of 'Я' (I)?",
 opts:["It's only in Moscow dialect","Grammar error in tradition","Russian uses impersonal constructions for states and feelings","To sound more formal"],
 ans:"Russian uses impersonal constructions for states and feelings",
 hint:"Think about how ___ says 'I'm cold' (мне холодно), the pattern is consistent."}
]},

{id:"ruv2_u2l_form", title:"Заполнение анкеты", icon:"📝", xp:15, board:true, steps:[

{type:"intro", title:"Filling Out Forms",
 desc:"Learn to read and fill out basic forms in Russian: name, address, email, date of birth. Essential for hotel registration, TRKI exam entry forms, and official documents.",
 goals:["Read basic form field labels in Russian","Fill in personal details in Cyrillic","Write a simple formal message greeting"]},

{type:"teach", trg:"имя", src:"first name", pos:"noun", gender:"n",
 note:"Neuter. Irregular: ends in -мя but has hidden -ен- stem in all cases.\nForm label: 'Имя:'",
 example:"A: Ваше имя?\nB: Моё имя, Анна.",
 exampleSrc:"A: Your first name?\nB: My name is Anna.",
 funFact:"Имя belongs to a rare group of 12 neuter -мя nouns (время, знамя, племя...). They all add -ен- in oblique cases: имя → имени. Ancient Greek and Latin had the same pattern."},

{type:"teach", trg:"фамилия", src:"surname / last name", pos:"noun", gender:"f",
 note:"Feminine. Ends in -ия (soft feminine).\nForm label: 'Фамилия:'",
 example:"A: Ваша фамилия?\nB: Моя фамилия, Иванова.",
 exampleSrc:"A: Your surname?\nB: My surname is Ivanova.",
 funFact:"Russian surnames change by gender: Иванов (male), Иванова (female). On forms you always write the female form for women. This system traces back to Old Slavic adjective declension."},

{type:"teach", trg:"адрес", src:"address", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nForm label: 'Адрес:'",
 example:"A: Ваш адрес?\nB: Мой адрес, Москва.",
 exampleSrc:"A: Your address?\nB: My address is Moscow.",
 funFact:"Borrowed from French adresse in the 18th century under Peter the Great, who modernised Russia's postal system. Before that, letters were addressed by village name and nearest church."},

{type:"teach", trg:"электронная почта", src:"email (lit. electronic mail)", pos:"noun", gender:"f",
 note:"Feminine (почта = post, mail is feminine).\nAbbreviated as эл. почта or емейл in informal use.",
 example:"A: Ваша электронная почта?\nB: Моя электронная почта, здесь.",
 exampleSrc:"A: Your email address?\nB: My email is right here.",
 funFact:"Почта (post/mail) comes from the Italian posta, which itself came from Latin posita (placed). Modern Russians also just say емейл (pronounced 'ye-mail') in everyday speech."},

{type:"teach", trg:"дата рождения", src:"date of birth", pos:"noun", gender:"f",
 note:"Дата (f) + рождения (genitive of рождение, birth).\nForm label: 'Дата рождения:' Written day.month.year in Russia.",
 example:"A: Дата рождения?\nB: Первое января.",
 exampleSrc:"A: Date of birth?\nB: January first.",
 funFact:"Russian dates use ordinal numbers: 'the first of January' (первое января). Day comes first, then month: 01.01.1990. This European format differs from US month-day-year."},

{type:"teach", trg:"заполнить", src:"to fill out (perfective)", pos:"verb", gender:null,
 note:"Perfective aspect. Imperfective pair: заполнять.\nUse заполнить for completing the action once.",
 example:"A: Надо заполнить это?\nB: Да, заполнить здесь.",
 exampleSrc:"A: Do I need to fill this out?\nB: Yes, fill it in here.",
 funFact:"The prefix за- here means 'to completion.' It appears in many verbs: записать (write down), закрыть (close). Perfective aspect always signals a completed or bounded action."},

{type:"teach", trg:"Уважаемый", src:"Dear (formal salutation, masculine)", pos:"adj", gender:"m",
 note:"Adjective from уважать (to respect).\nUse Уважаемый for male, Уважаемая for female recipients.",
 example:"A: Уважаемый Иван!\nB: Уважаемая Анна!",
 exampleSrc:"A: Dear Ivan!\nB: Dear Anna!",
 funFact:"Russian formal letters open with Уважаемый/Уважаемая + name in vocative-style. Emails follow the same convention. Dropping this greeting in official writing is considered rude."},

{type:"tip", title:"Reading a Russian Form",
 text:"Russian official forms follow a standard layout. These fields appear on hotel registration, TRKI entry, bank forms, and post office slips.\n\nCOMMON FORM FIELDS:\nФамилия: surname\nИмя: first name\nОтчество: patronymic (middle name based on father's first name)\nДата рождения: date of birth (day.month.year format)\nАдрес: address\nЭлектронная почта / Эл. почта: email\nТелефон: phone\n\nREMEMBER: Russians write day first, then month, then year.\n01.03.1990 = March 1st, 1990 (NOT January 3rd)."},

{type:"mc", q:"What does 'Фамилия' mean on a Russian form?",
 opts:["Surname / last name","Email address","First name","Date of birth"],
 ans:"Surname / last name",
 hint:"This word shares its root with 'family' (семья). Think of it as your inherited family identity, not your personal given identity."},

{type:"mc", q:"A form says 'Электронная почта:'. What should you write?",
 opts:["Your phone number","Your email address","Your home address","Your date of birth"],
 ans:"Your email address",
 hint:"Почта means 'post/mail.' The adjective before it means 'electronic.'"},

{type:"fb", s:"Ваше {1}: Иванов.",
 a:["Фамилия"],
 opts:["Фамилия","Имя","Адрес","Дата рождения"],
 hint:"'Иванов' is a typical Russian surname. The form label for a last name starts with Ф.",
 sSrc:"Your {1}: Ivanov."},

{type:"fb", s:"Уважаемая {1}!",
 a:["Анна"],
 opts:["Анна","Иванов","Да","Нет"],
 hint:"This is the opening of a formal message to a woman. After the salutation comes the recipient's given name.",
 sSrc:"Dear {1}!"},

{type:"mc", q:"Which Russian word means 'to fill out' a form?",
 opts:["прочитать","открыть","заполнить","написать"],
 ans:"заполнить",
 hint:"The за- prefix often marks completion of an action. The root means 'to fill.'"},

{type:"mc", q:"How do you open a formal letter or email to a male recipient in Russian?",
 opts:["Привет","Меня зовут","Пожалуйста","Уважаемый"],
 ans:"Уважаемый",
 hint:"The word comes from уважать (to respect). Use the masculine form for male recipients."},

{type:"match", pairs:[
 {trg:"имя", src:"first name"},
 {trg:"фамилия", src:"surname"},
 {trg:"адрес", src:"address"},
 {trg:"дата рождения", src:"date of birth"},
 {trg:"электронная почта", src:"email"},
 {trg:"Уважаемый", src:"Dear (formal, masculine)"}
]}

]}

]};
export default UNIT_02;
