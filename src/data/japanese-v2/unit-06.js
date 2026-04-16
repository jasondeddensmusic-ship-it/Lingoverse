// Japanese V2 Unit 06. かぞく (Family)
import BATCH4_L02 from './_batch4_u06_L02.js';
import BATCH4_L01 from './_batch4_u06_L01.js';
import BATCH2_L1 from './_batch2_u06_L01.js';
// Level: A1.2. JLPT N5 aligned.
// Family members, humble vs honorific forms, counting people.

const UNIT_06 = {
  n:6, lang:"ja", srcLang:"en", track:"v2",
  title:"かぞく", sub:"Family",
  icon:"👨‍👩‍👧‍👦", level:"A1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: わたしのかぞく (My Family) ═══
{id:"jav2_u6l1", title:"わたしのかぞく", icon:"👪", xp:15, board:true, steps:[
  {type:"intro", title:"わたしのかぞく",
   desc:"Learn to talk about your family in Japanese. Japanese has two sets of family words: humble forms for YOUR family and honorific forms for SOMEONE ELSE'S family. This lesson covers the core members.",
   goals:["Name immediate family members","Understand humble vs honorific family terms","Use no (possessive) with family words"]},

  {type:"teach", trg:"かぞく", src:"family", pos:"noun", gender:null,
   note:"General word for family. Works for anyone's family.\nKanji: 家族.",
   example:"A: かぞくはなんにんですか？\nB: よにんです。",
   exampleSrc:"A: How many people in your family?\nB: Four people.",
   funFact:"家 (ka, house) + 族 (zoku, clan). The kanji 家 shows a roof over a pig, because historically a household was defined by having livestock under one roof. Family is central to Japanese culture and a very common conversation topic."},

  {type:"teach", trg:"おかあさん", src:"mother (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. Used for OTHER people's mothers or when addressing your own.\nFor YOUR mother when talking to others: はは.",
   example:"A: おかあさんはおげんきですか？\nB: はい、げんきです。",
   exampleSrc:"A: Is your mother well?\nB: Yes, she is well.",
   funFact:"Okaasan has the honorific o- prefix and -san suffix. Children call their own mother okaasan at home, but when talking ABOUT her to outsiders, they switch to haha (humble form). This humble/honorific split runs through all Japanese family words."},

  {type:"teach", trg:"はは", src:"mother (my own, humble)", pos:"noun", gender:null,
   note:"Humble form used when talking about YOUR mother to others.\nKanji: 母.",
   example:"A: おかあさんはおしごとをしていますか？\nB: はい、はははせんせいです。",
   exampleSrc:"A: Does your mother work?\nB: Yes, my mother is a teacher.",
   funFact:"母 is a pictograph of a woman with two dots representing breasts, symbolizing nurturing. Haha is the formal humble way to refer to your own mother. At home you still say okaasan. The switch to haha only happens in polite/outside contexts."},

  {type:"teach", trg:"おとうさん", src:"father (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. Used for OTHER people's fathers or when addressing your own.\nFor YOUR father when talking to others: ちち.",
   example:"A: おとうさんはなにをしていますか？\nB: かいしゃいんです。",
   exampleSrc:"A: What does your father do?\nB: He is a company employee.",
   funFact:"Otousan literally uses the honorific o- prefix. Younger generations sometimes use papa instead, especially small children. The traditional form tousan (without o-) sounds rougher and more masculine, used in some families."},

  {type:"teach", trg:"ちち", src:"father (my own, humble)", pos:"noun", gender:null,
   note:"Humble form used when talking about YOUR father to others.\nKanji: 父.",
   example:"A: ちちはいしゃです。\nB: そうですか！すごいですね。",
   exampleSrc:"A: My father is a doctor.\nB: Really? That is amazing!",
   funFact:"父 shows a hand holding a tool or weapon, representing a working man/protector. Chichi sounds formal and may feel stiff to beginners, but it is the correct way to refer to your father when speaking to teachers, coworkers, or strangers."},

  {type:"mc", q:"When talking about YOUR mother to an outsider, you say:", opts:["はは","おかあさん","おねえさん","あね"], ans:"はは",
   hint:"The humble form for your own mother when speaking to people outside your family."},

  {type:"tip", title:"Humble vs Honorific Family Words",
   text:"When talking about YOUR family to outsiders, use HUMBLE forms:\nはは (my mother), ちち (my father)\n\nWhen talking about SOMEONE ELSE'S family, use HONORIFIC forms:\nおかあさん (your mother), おとうさん (your father)\n\nAt home, everyone uses the honorific forms to address family directly:\nおかあさん！ (Mom!), おとうさん！ (Dad!)",
   deepDive:{title:"Why two sets?",
    text:"This system reflects uchi-soto (inside-outside) thinking. Your own family is 'inside' and must be spoken of humbly. Other people's families are 'outside' and deserve respect.\n\nThis is not about loving your family less. It is a social code that shows humility about your own group while elevating others. The same principle applies to coworkers, company, and social groups."}},

  {type:"teach", trg:"あに", src:"older brother (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR older brother. Honorific: おにいさん.\nKanji: 兄.",
   example:"A: あにはだいがくせいです。\nB: なにをべんきょうしていますか？",
   exampleSrc:"A: My older brother is a university student.\nB: What is he studying?",
   funFact:"兄 shows legs beneath a mouth/head, representing the firstborn who walks ahead. Japanese strictly distinguishes older vs younger siblings. There is no single word for just 'brother' without specifying age order. This reflects Confucian age-respect values."},

  {type:"teach", trg:"おにいさん", src:"older brother (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. Also used to address your own older brother at home.",
   example:"A: おにいさんはおいくつですか？\nB: にじゅうさんさいです。",
   exampleSrc:"A: How old is your older brother?\nB: He is 23 years old.",
   funFact:"Oniisan is also used to address young men in shops or on the street. A vendor might call a male customer 'oniisan' even if he is not anyone's brother. Similarly, onesan is used for young women. It is friendly, not literal."},

  {type:"teach", trg:"あね", src:"older sister (my own, humble)", pos:"noun", gender:null,
   note:"Humble form for YOUR older sister. Honorific: おねえさん.\nKanji: 姉.",
   example:"A: あねはとうきょうにすんでいます。\nB: いいですね！",
   exampleSrc:"A: My older sister lives in Tokyo.\nB: That is nice!",
   funFact:"姉 combines 女 (woman) with 市 (city/market), perhaps suggesting the older daughter who goes to market. The older sister often takes a responsible role in Japanese families, reflected in anime and manga where the 'oneesan' character is typically mature and caring."},

  {type:"teach", trg:"おねえさん", src:"older sister (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. Also used to address your own older sister at home.",
   example:"A: おねえさんもにほんごをべんきょうしていますか？\nB: いいえ、えいごをべんきょうしています。",
   exampleSrc:"A: Is your older sister also studying Japanese?\nB: No, she is studying English.",
   funFact:"Like oniisan, oneesan is used for young women in general. At restaurants, you might hear a customer call a waitress 'oneesan' to get her attention. This is considered casual but not rude."},

  {type:"fb", s:"{1}はだいがくせいです。\n(My older brother is a university student.)", a:"あに", opts:["あに","おにいさん","ちち","あね"], sSrc:"My older brother is a university student.",
   hint:"The humble form for your own older brother."},

  {type:"teach", trg:"いもうと", src:"younger sister", pos:"noun", gender:null,
   note:"Same word for your own and others' (add さん for others': いもうとさん).\nKanji: 妹.",
   example:"A: いもうとはなんさいですか？\nB: じゅうにさいです。",
   exampleSrc:"A: How old is your younger sister?\nB: She is 12 years old.",
   funFact:"妹 combines 女 (woman) with 未 (not yet), literally 'the woman who has not yet (grown up).' Younger siblings have simpler humble/honorific distinctions: just add -san for someone else's younger sibling."},

  {type:"teach", trg:"おとうと", src:"younger brother", pos:"noun", gender:null,
   note:"Same word for your own and others' (add さん for others': おとうとさん).\nKanji: 弟.",
   example:"A: おとうとはがっこうにいっています。\nB: なんねんせいですか？",
   exampleSrc:"A: My younger brother goes to school.\nB: What grade is he in?",
   funFact:"弟 originally showed a thread being wound in order, representing the sequence of brothers. The younger sibling words (imouto, otouto) do not change as drastically between humble and honorific. You just add or drop -san."},

  {type:"match", pairs:[{trg:"はは",src:"my mother"},{trg:"ちち",src:"my father"},{trg:"あに",src:"my older brother"},{trg:"あね",src:"my older sister"}]},

  {type:"match", pairs:[{trg:"おかあさん",src:"(your) mother"},{trg:"おとうさん",src:"(your) father"},{trg:"いもうと",src:"younger sister"},{trg:"おとうと",src:"younger brother"}]},

  {type:"mc", q:"いもうと means:", opts:["older sister","younger sister","older brother","younger brother"], ans:"younger sister",
   hint:"The y... female sibling whose kanji contains 'not yet grown.'"},

  {type:"mc", q:"How would you refer to someone else's older sister?", opts:["あね","はは","おねえさん","いもうと"], ans:"おねえさん",
   hint:"The honorific form with the o- prefix and -san suffix."},
]},

// ═══ L2: なんにんですか (Counting People) ═══
{id:"jav2_u6l2", title:"なんにんですか", icon:"👥", xp:15, board:true, steps:[
  {type:"intro", title:"なんにんですか",
   desc:"Learn to count people in Japanese and ask about family size. People have their own special counter with unique readings for one and two. You will also practice the verb imasu (to exist, for living things).",
   goals:["Count people from 1 to 10","Ask 'how many people?' with nannin","Use imasu for people and animals"]},

  {type:"teach", trg:"ひとり", src:"one person", pos:"num", gender:null,
   note:"Irregular reading. NOT 'ichinin.' Uses native Japanese number hito + ri.\nKanji: 一人.",
   example:"A: なんにんですか？\nB: ひとりです。",
   exampleSrc:"A: How many people?\nB: One person.",
   funFact:"Hitori uses the native Japanese number system (hito = one), not the Chinese-origin system (ichi). Only 1 and 2 use native readings: hitori, futari. From 3 onward, it switches to the Chinese system: san-nin, yo-nin, etc."},

  {type:"teach", trg:"ふたり", src:"two people", pos:"num", gender:null,
   note:"Irregular reading. NOT 'ninin.' Uses native Japanese number futa + ri.\nKanji: 二人.",
   example:"A: きょうだいはなんにんですか？\nB: ふたりです。あにとわたしです。",
   exampleSrc:"A: How many siblings do you have?\nB: Two. My older brother and me.",
   funFact:"Futari is the last people-counter to use a native Japanese reading. It appears in many set phrases: futari-gumi (pair/duo), futari-kiri (just the two of us). From three onward, you simply add -nin to the Chinese number."},

  {type:"teach", trg:"さんにん", src:"three people", pos:"num", gender:null,
   note:"Regular pattern from here: number + にん. San + nin = sannin.\nKanji: 三人.",
   example:"A: かぞくはさんにんですか？\nB: はい、ちちとははとわたしです。",
   exampleSrc:"A: Is your family three people?\nB: Yes, my father, mother, and me.",
   funFact:"From 3 onward, the pattern is simple: san-nin (3), yo-nin (4, uses yo not shi), go-nin (5), roku-nin (6), etc. The only tricky one is 4: yo-nin, because shi (the Chinese reading of 4) sounds like 死 (death) and is avoided."},

  {type:"mc", q:"How do you say 'one person'?", opts:["ひとり","いちにん","いちり","ひとにん"], ans:"ひとり",
   hint:"This uses the native Japanese counting system, not the Chinese-origin numbers."},

  {type:"teach", trg:"なんにん", src:"how many people?", pos:"pron", gender:null,
   note:"Question word: nan (what/how many) + nin (people counter).\nKanji: 何人.",
   example:"A: かぞくはなんにんですか？\nB: ごにんです。",
   exampleSrc:"A: How many people in your family?\nB: Five people.",
   funFact:"Nan replaces the number to make a question: nannin (how many people), nanko (how many small things), nanmai (how many flat things). This nan+counter pattern works with every counter in Japanese."},

  {type:"teach", trg:"います", src:"to exist (living things)", pos:"verb", gender:null,
   note:"For people, animals, insects. Inanimate objects use あります instead.\nDictionary form: いる.",
   example:"A: きょうだいがいますか？\nB: はい、あにがひとりいます。",
   exampleSrc:"A: Do you have siblings?\nB: Yes, I have one older brother.",
   funFact:"Japanese splits existence into two verbs: imasu for living things that can move on their own (people, animals, fish, insects) and arimasu for inanimate objects (books, buildings, trees). Plants use arimasu because they do not move."},

  {type:"fb", s:"かぞくは{1}ですか？\n(How many people in your family?)", a:"なんにん", opts:["なんにん","さんにん","ひとり","ふたり"], sSrc:"How many people in your family?",
   hint:"The question word combining 'what' with the people counter."},

  {type:"teach", trg:"きょうだい", src:"siblings / brothers and sisters", pos:"noun", gender:null,
   note:"General word for siblings regardless of gender. Can mean just brothers too.\nKanji: 兄弟.",
   example:"A: きょうだいはいますか？\nB: はい、あねがひとりといもうとがひとりいます。",
   exampleSrc:"A: Do you have siblings?\nB: Yes, I have one older sister and one younger sister.",
   funFact:"兄弟 literally means 'older brother + younger brother' but covers all siblings. A newer gender-neutral option shimai (姉妹, older sister + younger sister) exists but only for sisters. There is no single commonly used word that is fully gender-neutral."},

  {type:"teach", trg:"よにん", src:"four people", pos:"num", gender:null,
   note:"Uses 'yo' not 'shi' because shi sounds like 死 (death). Yo-nin, not shi-nin.\nKanji: 四人.",
   example:"A: かぞくはよにんですか？\nB: はい、ちちとははとあにとわたしです。",
   exampleSrc:"A: Is your family four people?\nB: Yes, my father, mother, older brother, and me.",
   funFact:"Avoiding shi (four) because it sounds like death is a major cultural practice. Hospitals skip room number 4. Buildings skip floor 4. Gift sets avoid groups of 4. The alternative reading yo appears in yottsu (4 things), yokka (4th day), and yo-nin."},

  {type:"teach", trg:"ごにん", src:"five people", pos:"num", gender:null,
   note:"Regular: go (five) + nin (people). No sound changes.\nKanji: 五人.",
   example:"A: パーティーにはなんにんきますか？\nB: ごにんです。",
   exampleSrc:"A: How many people are coming to the party?\nB: Five people.",
   funFact:"Five is considered a lucky number in Japanese culture. Go-en (five yen) coins are the traditional offering at shrines because go-en also means 'good connection/fate.' Five-person groups appear often in Japanese media: Super Sentai (Power Rangers) always has five members."},

  {type:"mc", q:"Why is four people よにん and not しにん?", opts:["Yo is the original Japanese reading","Shi sounds like the word for death","Yo is easier to pronounce","There is no special reason"], ans:"Shi sounds like the word for death",
   hint:"Japanese culture avoids this number reading due to its homophone."},

  {type:"teach", trg:"おじいさん", src:"grandfather (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. For YOUR grandfather when talking to others: そふ.\nAlso means 'old man' in general.",
   example:"A: おじいさんはおげんきですか？\nB: はい、とてもげんきです。",
   exampleSrc:"A: Is your grandfather well?\nB: Yes, he is very well.",
   funFact:"Ojiisan (with long ii) means grandfather or old man. Be careful: ojisan (short i) means uncle or middle-aged man. The length of the vowel changes the meaning entirely. This is a famous pair that trips up learners."},

  {type:"teach", trg:"おばあさん", src:"grandmother (someone else's)", pos:"noun", gender:null,
   note:"Honorific form. For YOUR grandmother when talking to others: そぼ.\nAlso means 'old woman' in general.",
   example:"A: おばあさんはどこにすんでいますか？\nB: おおさかにすんでいます。",
   exampleSrc:"A: Where does your grandmother live?\nB: She lives in Osaka.",
   funFact:"Same vowel-length trap: obaasan (long aa) means grandmother/old lady. Obasan (short a) means aunt/middle-aged woman. Mixing these up is a classic and embarrassing mistake. Pay attention to long vs short vowels."},

  {type:"fb", s:"きょうだいが{1}か？\n(Do you have siblings?)", a:"います", opts:["います","あります","です","ます"], sSrc:"Do you have siblings?",
   hint:"The existence verb for living things like people."},

  {type:"match", pairs:[{trg:"ひとり",src:"one person"},{trg:"ふたり",src:"two people"},{trg:"さんにん",src:"three people"},{trg:"よにん",src:"four people"}]},

  {type:"match", pairs:[{trg:"かぞく",src:"family"},{trg:"きょうだい",src:"siblings"},{trg:"おじいさん",src:"grandfather"},{trg:"おばあさん",src:"grandmother"}]},

  {type:"mc", q:"います is used for:", opts:["books and buildings","weather and time","people and animals","food and drink"], ans:"people and animals",
   hint:"This verb describes existence specifically for living, moving beings."},

  {type:"fb", s:"かぞくは{1}です。\n(My family is five people.)", a:"ごにん", opts:["ごにん","いつつ","ごこ","ごまい"], sSrc:"My family is five people.",
   hint:"The people counter for five: number + nin."},

  {type:"mc", q:"おばあさん means:", opts:["aunt","mother","younger sister","grandmother"], ans:"grandmother",
   hint:"The word with long aa vowel, using the honorific o- prefix."},

  {type:"mc", q:"おじいさん means:", opts:["grandfather","uncle","father","older brother"], ans:"grandfather",
   hint:"The honorific form with a long vowel, for someone's elderly male relative."},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
]};
export default UNIT_06;
