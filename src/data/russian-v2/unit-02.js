// Russian V2 Unit 2 — Numbers and Age (A1.1)
const UNIT_02 = {n:2, lang:"ru", srcLang:"en", track:"v2", title:"Мне 25 лет", sub:"Numbers and Age",
 icon:"🔢", level:"A1.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u2l1", title:"Числа 1-5", icon:"🔢", xp:15, board:true, steps:[

{type:"intro", title:"Numbers 1-5",
 desc:"Russian numbers are your doorway to age, time, and prices. Start with 1-5 and the crucial detail: 'one' and 'two' have gender.",
 goals:["Count 1 to 5 in Russian","Know that один/одна/одно change for gender","Use два/две with masc/fem nouns"]},

{type:"teach", trg:"один", src:"one (masculine)", pos:"num", gender:null,
 note:"Used with masculine nouns.\nOne of the few numbers that changes for gender.",
 example:"A: Сколько у тебя братьев?\nB: Один брат.",
 exampleSrc:"A: How many brothers do you have?\nB: One brother.",
 funFact:"Russian 'one' agrees with the noun's gender: один (m), одна (f), одно (n). This is rare among languages — most treat 1 as a single form."},

{type:"teach", trg:"одна", src:"one (feminine)", pos:"num", gender:null,
 note:"Used with feminine nouns.\nAgrees with the following noun.",
 example:"A: Сколько у вас сестёр?\nB: Одна сестра.",
 exampleSrc:"A: How many sisters do you have?\nB: One sister.",
 funFact:"Gender agreement is everywhere in Russian. Even the number 'one' must match. You'll learn this pattern for adjectives and pronouns too."},

{type:"teach", trg:"два", src:"two (masculine/neuter)", pos:"num", gender:null,
 note:"Used with masculine and neuter nouns.\nAlso has a feminine form: две.",
 example:"A: Сколько у тебя братьев?\nB: Два брата.",
 exampleSrc:"A: How many brothers do you have?\nB: Two brothers.",
 funFact:"After 2 (and 3, 4), Russian uses the GENITIVE SINGULAR form: два брата (not братья). The number controls the case of the noun. You'll learn this in B1."},

{type:"teach", trg:"две", src:"two (feminine)", pos:"num", gender:null,
 note:"Used with feminine nouns ONLY.\nAlways две, never два with feminine.",
 example:"A: Сколько у вас сестёр?\nB: Две сестры.",
 exampleSrc:"A: How many sisters do you have?\nB: Two sisters.",
 funFact:"Only 1 and 2 are gendered in Russian. 3 and up are genderless. This quirk traces back to Proto-Indo-European roots."},

{type:"teach", trg:"три", src:"three", pos:"num", gender:null,
 note:"Same form regardless of gender.\nFollowed by genitive singular.",
 example:"A: У вас есть дети?\nB: Да, три ребёнка.",
 exampleSrc:"A: Do you have children?\nB: Yes, three children.",
 funFact:"Sounds like English 'tree' but with a rolled R. Three of something is 'три + gen sg': три книги (3 books), три друга (3 friends)."},

{type:"teach", trg:"четыре", src:"four", pos:"num", gender:null,
 note:"Stress on first syllable: CHE-ty-re.\nFollowed by genitive singular.",
 example:"A: Сколько этажей в вашем доме?\nB: Четыре этажа.",
 exampleSrc:"A: How many floors in your building?\nB: Four floors.",
 funFact:"Used with the same genitive singular as 2 and 3. Four of something ends the '2-3-4 singular' pattern. Starting with 5, plural genitive takes over."},

{type:"teach", trg:"пять", src:"five", pos:"num", gender:null,
 note:"Ends in soft sign ь.\nFollowed by GENITIVE PLURAL (different pattern from 2-4).",
 example:"A: Сколько у тебя книг?\nB: Пять книг.",
 exampleSrc:"A: How many books do you have?\nB: Five books.",
 funFact:"Huge transition at 5: the noun switches from genitive singular (four books = четыре книги) to genitive plural (five books = пять книг). This 'five-rule' applies for 5-20, 25+, 30+..."},

{type:"tip", title:"Russian Numbers Change the Noun",
 text:"Russian numbers control the CASE of the following noun. This is called the 'numeric paradigm.'\n\nRules:\n1 (один/одна/одно): nominative singular (один брат, одна сестра).\n2, 3, 4: GENITIVE SINGULAR (два брата, три сестры).\n5+: GENITIVE PLURAL (пять братьев, пять сестёр).\n\nDon't worry about memorizing all the endings now. For A1, just know that 2-4 behaves differently from 5+. You'll master this in B1."},

{type:"mc", q:"Which form of 'one' do you use with 'sister' (сестра)?",
 opts:["один","одна","одно","один-одна"],
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
 funFact:"Лет is the genitive plural form of 'year' used after 5 and up. The singular nominative 'год' (year) becomes 'лет' — an irregular stem change seen only with years."},

{type:"teach", trg:"семь", src:"seven", pos:"num", gender:null,
 note:"Soft sign ending.\nЕ reduces to 'ye' sound.",
 example:"A: Который час?\nB: Семь часов.",
 exampleSrc:"A: What time is it?\nB: Seven o'clock.",
 funFact:"Часов is the genitive plural of час (hour). Russian time expressions use numbers + gen pl: семь часов (seven hours/o'clock), пять часов (five)."},

{type:"teach", trg:"восемь", src:"eight", pos:"num", gender:null,
 note:"Stress on first syllable: VO-sem.\nEnds in soft sign.",
 example:"A: Сколько комнат в квартире?\nB: Восемь комнат.",
 exampleSrc:"A: How many rooms in the apartment?\nB: Eight rooms.",
 funFact:"Восемь is tricky to pronounce. The в and с are voiced/voiceless consonant cluster. Practice: 'VO-sim' with a very soft м at the end."},

{type:"teach", trg:"девять", src:"nine", pos:"num", gender:null,
 note:"Stress on first: DYE-vyat.\nContains the 'ya' sound.",
 example:"A: Когда открывается магазин?\nB: В девять часов.",
 exampleSrc:"A: When does the shop open?\nB: At nine o'clock.",
 funFact:"The preposition 'в' (at/in) + nominative is a common time pattern: в девять (at 9), в пять (at 5). For hours, always nominative."},

{type:"teach", trg:"десять", src:"ten", pos:"num", gender:null,
 note:"Stress on first: DYE-syat.\nCompletes your basic counting.",
 example:"A: Сколько минут до автобуса?\nB: Десять минут.",
 exampleSrc:"A: How many minutes until the bus?\nB: Ten minutes.",
 funFact:"Минут is genitive plural of минута (minute). Russian time often uses genitive plurals: десять минут, пять минут. The unusually short form after numbers is a puzzle for beginners."},

{type:"teach", trg:"ноль", src:"zero", pos:"num", gender:null,
 note:"Also spelled нуль in some contexts.\nMasculine noun when used as a word.",
 example:"A: Какой у вас номер?\nB: Ноль, семь, три, девять.",
 exampleSrc:"A: What's your number?\nB: Zero, seven, three, nine.",
 funFact:"Used in phone numbers and scores. '-1' is written 'минус один.' Russian decimal: used with запятая (comma), not period: 3,14 not 3.14."},

{type:"tip", title:"The 5+ Pattern",
 text:"For numbers 5 through 20, the noun ALWAYS takes the genitive plural.\n\nExamples:\nпять минут (five minutes, not минуты).\nшесть книг (six books, not книги).\nсемь дней (seven days).\nдесять рублей (ten rubles).\n\nThe genitive plural usually looks different from what you'd expect. Start by memorizing common ones: минут, книг, дней, лет, рублей, часов, минут, детей.",
 icon:"🔑"},

{type:"mc", q:"Which number triggers the genitive PLURAL in the following noun?",
 opts:["один","два","три","пять"],
 ans:"пять",
 hint:"Numbers 5 and above take genitive plural. Numbers 2-4 take genitive singular."},

{type:"mc", q:"How do you say 'ten hours' (как 10 часов)?",
 opts:["десять часа","десять часы","десять часов","десять час"],
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
 desc:"Age in Russian uses a construction that means 'to me [it is] X years.' It's impersonal — like many Russian feeling/state expressions.",
 goals:["Ask age formally and informally","State your age with Мне/Тебе/Ему/Ей","Use лет, года, год correctly"]},

{type:"teach", trg:"Сколько", src:"how much / how many", pos:"pron", gender:null,
 note:"Used for countable and uncountable.\nTriggers genitive in following noun.",
 example:"A: Сколько у тебя денег?\nB: Немного.",
 exampleSrc:"A: How much money do you have?\nB: Not much.",
 funFact:"Сколько стоит? (How much does it cost?) is your essential shopping phrase. It's also used with time: сколько времени? (what time is it?)."},

{type:"teach", trg:"Мне", src:"to me (dative)", pos:"pron", gender:null,
 note:"Dative form of я (I).\nUsed for age, feelings, impersonal states.",
 example:"A: Сколько тебе лет?\nB: Мне 25 лет.",
 exampleSrc:"A: How old are you?\nB: I am 25 (years old).",
 funFact:"Russian age is impersonal: 'to-me [it is] 25 years' — not 'I am 25.' This impersonal style pervades Russian: 'to-me cold' (мне холодно), 'to-me boring' (мне скучно)."},

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

{type:"teach", trg:"лет", src:"years (after 5+, 0)", pos:"noun", gender:null,
 note:"Genitive plural of год.\nUsed with 0 and with numbers ending 5-9, or 10-20.",
 example:"A: Сколько вам лет?\nB: Мне двадцать лет.",
 exampleSrc:"A: How old are you?\nB: I'm twenty years old.",
 funFact:"Лет is actually from a different root (лето = summer). Early Russians said 'I have seen X summers' rather than 'years.' The word survived for counting years."},

{type:"teach", trg:"года", src:"years (after 2, 3, 4)", pos:"noun", gender:null,
 note:"Genitive singular of год.\nUsed after numbers ending in 2, 3, 4 (but NOT 12, 13, 14).",
 example:"A: Сколько лет твоему сыну?\nB: Моему сыну два года.",
 exampleSrc:"A: How old is your son?\nB: My son is two years old.",
 funFact:"Два года, три года, четыре года: the '2-3-4 rule.' BUT двенадцать лет, тринадцать лет (12, 13 teens use the 5+ pattern). Because Russian rules are like that."},

{type:"teach", trg:"год", src:"year (after 1, 21, 31...)", pos:"noun", gender:"m",
 note:"Nominative singular.\nUsed after numbers ending in 1 (but NOT 11).",
 example:"A: Сколько лет ребёнку?\nB: Ему один год.",
 exampleSrc:"A: How old is the child?\nB: He is one year old.",
 funFact:"Один год (1), двадцать один год (21), тридцать один год (31). BUT одиннадцать лет (11). The 'teen rule' overrides the ends-in-1 rule for 11-19."},

{type:"tip", title:"The Age Formula",
 text:"AGE FORMULA: Dative pronoun + number + [год/года/лет]\n\nPick the right year-word based on the LAST DIGIT of the number:\n- Ends in 1 (except 11): год. Мне один год. (I'm 1)\n- Ends in 2, 3, 4 (except 12, 13, 14): года. Мне двадцать два года. (I'm 22)\n- Ends in 5-9, 0, or is 11-19: лет. Мне пять лет. Мне двенадцать лет. (I'm 5, I'm 12)\n\nExample ages:\n21 год, 22 года, 25 лет, 30 лет, 35 лет, 41 год, 43 года, 50 лет, 100 лет.",
 icon:"🔢"},

{type:"mc", q:"Which is correct?",
 opts:["Мне двадцать пять года","Мне двадцать пять лет","Мне двадцать пять год","Мне двадцать пять"],
 ans:"Мне двадцать пять лет",
 hint:"25 ends in 5 → use the gen plural 'лет.' And don't forget the word for 'years' is not optional."},

{type:"mc", q:"Which is the FORMAL way to ask someone's age?",
 opts:["Сколько тебе лет?","Сколько твои года?","Сколько вам лет?","Сколько ты старый?"],
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
]},

{type:"mc", q:"Why does Russian use 'Мне' (to me) for age instead of 'Я' (I)?",
 opts:["Grammar error in tradition","Russian uses impersonal constructions for states and feelings","To sound more formal","It's only in Moscow dialect"],
 ans:"Russian uses impersonal constructions for states and feelings",
 hint:"Think about how ___ says 'I'm cold' (мне холодно) — the pattern is consistent."}
]}

]};
export default UNIT_02;
