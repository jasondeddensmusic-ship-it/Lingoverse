// Japanese V2 Unit 03. これはなんですか (What is this?)
import BATCH6_L1 from './_batch6_u03_L01.js';
import BATCH4_L02 from './_batch4_u03_L02.js';
import BATCH4_L01 from './_batch4_u03_L01.js';
import BATCH3_L1 from './_batch3_u03_L01.js';
// Level: A1.1. JLPT N5 aligned.
import JEXP_03_L1 from './_temp_u03_expand_L01.js';import JEXP_03_L2 from './_temp_u03_expand_L02.js';import JEXP_03_L3 from './_temp_u03_expand_L03.js';import JEXP_03_L4 from './_temp_u03_expand_L04.js';
// Demonstratives, common objects, nan desu ka, no particle, numbers 1-10.

const UNIT_03 = {
  n:3, lang:"ja", srcLang:"en", track:"v2",
  title:"これはなんですか", sub:"What Is This?",
  icon:"👆", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: これ・それ・あれ (Demonstratives & Objects) ═══
{id:"jav2_u3l1", title:"これ・それ・あれ", icon:"📱", xp:15, board:true, steps:[
  {type:"intro", title:"これ・それ・あれ",
   desc:"Learn to point things out and ask what they are. Japanese has a three-way system for 'this/that/that over there' based on distance from speaker and listener.",
   goals:["Use kore, sore, are for this/that/that over there","Ask 'what is this?' with nan desu ka","Name common everyday objects"]},

  {type:"teach", trg:"これ", src:"this (thing near me)", pos:"pron", gender:null,
   note:"Points to something close to the speaker. One of the ko-so-a-do demonstratives.",
   example:"A: これはなんですか？\nB: これはほんです。",
   exampleSrc:"A: What is this?\nB: This is a book.",
   funFact:"Japanese demonstratives follow the ko-so-a-do pattern. Ko- = near speaker, so- = near listener, a- = far from both, do- = question. This system is everywhere in Japanese grammar."},

  {type:"teach", trg:"それ", src:"that (thing near you)", pos:"pron", gender:null,
   note:"Points to something close to the listener, away from the speaker.",
   example:"A: それはわたしのかさです。\nB: ああ、すみません。",
   exampleSrc:"A: That is my umbrella.\nB: Oh, sorry.",
   funFact:"The ko-so-a split is based on psychological distance, not just physical. Sore can refer to something the listener just mentioned, even in abstract conversation."},

  {type:"teach", trg:"あれ", src:"that over there (far from both)", pos:"pron", gender:null,
   note:"Points to something far from both speaker and listener.",
   example:"A: あれはなんですか？\nB: あれはとうきょうタワーです。",
   exampleSrc:"A: What is that over there?\nB: That is Tokyo Tower.",
   funFact:"English only has two levels: this and that. Japanese has three. Are covers things far from both people, like a building across the street or a star in the sky."},

  {type:"teach", trg:"なんですか", src:"what is it?", pos:"pron", gender:null,
   note:"Question word for 'what.' なに (nani) before certain sounds, なん (nan) before d/n/counters.",
   example:"A: これはなんですか？\nB: けいたいです。",
   exampleSrc:"A: What is this?\nB: It is a cellphone.",
   funFact:"Nan and nani are the same word. Nan appears before desu, de, and counters (nan-nin, nan-ji). Nani appears elsewhere (nani wo, nani ga). The change is purely for smoother pronunciation."},

  {type:"mc", q:"これ refers to something:", opts:["Near the speaker","Near the listener","Far from both","Unknown location"], ans:"Near the speaker",
   hint:"Ko- words are always about what is close to the person speaking."},

  {type:"teach", trg:"ほん", src:"book", pos:"noun", gender:null,
   note:"One of the most common nouns. Counter for long objects is also ほん.\nKanji: 本.",
   example:"A: それはなんのほんですか？\nB: にほんごのほんです。",
   exampleSrc:"A: What kind of book is that?\nB: It is a Japanese language book.",
   funFact:"The kanji 本 originally means 'root' or 'origin' (same as in 日本). It came to mean 'book' because books are the root of knowledge. Also used as a counter for long thin objects like pens and bottles."},

  {type:"teach", trg:"かばん", src:"bag / suitcase", pos:"noun", gender:null,
   note:"Covers bags, backpacks, briefcases. A general word for any bag you carry.",
   example:"A: これはだれのかばんですか？\nB: わたしのかばんです。",
   exampleSrc:"A: Whose bag is this?\nB: It is my bag.",
   funFact:"Borrowed from Dutch 'kabas' during the Edo period when Dutch traders were the only Europeans allowed in Japan. Many everyday Japanese words have Dutch origins."},

  {type:"teach", trg:"かさ", src:"umbrella", pos:"noun", gender:null,
   note:"Essential item in Japan's rainy climate.\nKanji: 傘.",
   example:"A: かさはありますか？\nB: はい、あります。",
   exampleSrc:"A: Do you have an umbrella?\nB: Yes, I do.",
   funFact:"Japan sells about 130 million umbrellas per year. Transparent vinyl umbrellas (biniru-gasa) are everywhere at convenience stores. Umbrella theft is so common it is practically a cultural joke."},

  {type:"fb", s:"{1}はなんですか？", a:"これ", opts:["これ","です","なん","は"], sSrc:"What is this?",
   hint:"The demonstrative for 'this thing near me.'"},

  {type:"teach", trg:"とけい", src:"watch / clock", pos:"noun", gender:null,
   note:"Covers both wristwatches and wall clocks.\nKanji: 時計.",
   example:"A: それはとけいですか？\nB: はい、にほんのとけいです。",
   exampleSrc:"A: Is that a watch?\nB: Yes, it is a Japanese watch.",
   funFact:"時 (time) + 計 (measure). A time-measuring device. Japan is famous for precision timepieces. Seiko, Citizen, and Casio are all Japanese brands that revolutionized watchmaking."},

  {type:"teach", trg:"けいたい", src:"cellphone / mobile phone", pos:"noun", gender:null,
   note:"Short for けいたいでんわ (携帯電話, portable telephone). Everyone says けいたい or スマホ now.",
   example:"A: これはだれのけいたいですか？\nB: わたしのです。",
   exampleSrc:"A: Whose cellphone is this?\nB: It is mine.",
   funFact:"携帯 means 'portable.' Older Japanese people still say keitai, while younger people say sumaho (from smartphone). Japan had advanced flip phones called 'garakei' (Galapagos phones) before smartphones arrived."},

  {type:"teach", trg:"めがね", src:"glasses / eyeglasses", pos:"noun", gender:null,
   note:"Always plural-sounding in Japanese too. Comes from Portuguese.\nKanji: 眼鏡.",
   example:"A: あれはだれのめがねですか？\nB: せんせいのめがねです。",
   exampleSrc:"A: Whose glasses are those?\nB: They are the teacher's glasses.",
   funFact:"From Portuguese 'megane' brought by missionaries in the 1500s. 眼 (eye) + 鏡 (mirror). Japan has one of the highest rates of glasses-wearing in the world, especially among young people."},

  {type:"mc", q:"それ refers to something:", opts:["Near the speaker","Near the listener","Far from both","In the past"], ans:"Near the listener",
   hint:"So- words relate to the l...'s area or what the l... just mentioned."},

  {type:"match", pairs:[{trg:"これ",src:"this (near me)"},{trg:"それ",src:"that (near you)"},{trg:"あれ",src:"that over there"},{trg:"なんですか",src:"what is it?"}]},

  {type:"teach", trg:"かぎ", src:"key", pos:"noun", gender:null,
   note:"Both physical keys and metaphorical keys (to success, etc.).\nKanji: 鍵.",
   example:"A: かぎはどこですか？\nB: かばんのなかです。",
   exampleSrc:"A: Where are the keys?\nB: They are in the bag.",
   funFact:"The kanji 鍵 is one of the most complex everyday kanji with 25 strokes. Many Japanese learners struggle with it even in high school. In daily life, most people just write it in hiragana."},

  {type:"match", pairs:[{trg:"ほん",src:"book"},{trg:"かばん",src:"bag"},{trg:"かさ",src:"umbrella"},{trg:"けいたい",src:"cellphone"}]},

  {type:"fb", s:"あれは{1}ですか？\n(What is that over there?)", a:"なん", opts:["なん","これ","だれ","どこ"], sSrc:"What is that over there?",
   hint:"The question word for 'what' that pairs with desu ka."},

  {type:"mc", q:"かぎ means:", opts:["bag","clock","key","umbrella"], ans:"key",
   hint:"A small metal object that opens locks."},

  {type:"match", pairs:[{trg:"とけい",src:"watch / clock"},{trg:"めがね",src:"glasses"},{trg:"かぎ",src:"key"},{trg:"かさ",src:"umbrella"}]},

  {type:"mc", q:"これはめがねです means:", opts:["Where are the glasses?","Those are glasses","I want glasses","These are glasses"], ans:"These are glasses",
   hint:"Kore (this) + wa (topic) + megane (g...) + desu (is)."},
]},

// ═══ L2: わたしの... (Possession & Numbers) ═══
{id:"jav2_u3l2", title:"わたしの...", icon:"🔢", xp:15, board:true, steps:[
  {type:"intro", title:"わたしの...",
   desc:"Learn to express possession with the particle no and count from 1 to 10 in Japanese. The no particle is one of the most versatile words in the language.",
   goals:["Express possession with no","Count from 1 to 10","Combine numbers with basic counters"]},

  {type:"teach", trg:"の", src:"'s / of (possession particle)", pos:"part", gender:null,
   note:"Connects two nouns. First noun modifies the second.\nPattern: A の B = A's B / B of A.",
   example:"A: これはだれのかばんですか？\nB: わたしのかばんです。",
   exampleSrc:"A: Whose bag is this?\nB: It is my bag.",
   funFact:"No is the most frequently used particle in Japanese. Besides possession, it connects any two nouns: nihongo no hon (a Japanese book), Tokyo no hoteru (a Tokyo hotel). Think of it as a universal noun connector."},

  {type:"teach", trg:"だれ", src:"who", pos:"pron", gender:null,
   note:"Question word for 'who.' Polite form: どなた (donata).",
   example:"A: あれはだれのけいたいですか？\nB: せんせいのです。",
   exampleSrc:"A: Whose cellphone is that?\nB: It is the teacher's.",
   funFact:"Dare follows the same ko-so-a-do pattern. Ko-re (this thing), so-re (that thing), a-re (that far thing), do-re (which thing). Da-re is the 'who' version of this pattern."},

  {type:"mc", q:"わたしのほん means:", opts:["my book","this book","I am a book","a book"], ans:"my book",
   hint:"Watashi (I) + no (possession) + hon (b...)."},

  {type:"teach", trg:"いち", src:"one (1)", pos:"num", gender:null,
   note:"The first number. Also read ひとつ (hitotsu) in native Japanese counting.",
   example:"A: なんさいですか？\nB: いっさいです。",
   exampleSrc:"A: How old are you?\nB: I am one year old.",
   funFact:"Japanese has TWO number systems: Sino-Japanese (ichi, ni, san) from Chinese, and native Japanese (hitotsu, futatsu, mittsu). Sino-Japanese is used for math and with most counters."},

  {type:"teach", trg:"に", src:"two (2)", pos:"num", gender:null,
   note:"The number two. Also read ふたつ (futatsu) in native counting.",
   example:"A: ほんはなんさつですか？\nB: にさつです。",
   exampleSrc:"A: How many books?\nB: Two books.",
   funFact:"Ni appears in many compounds: nigatsu (February, month 2), niji (2 o'clock), nikai (second floor). The pattern is beautifully logical."},

  {type:"teach", trg:"さん", src:"three (3)", pos:"num", gender:null,
   note:"The number three. Also read みっつ (mittsu) in native counting.",
   example:"A: めがねはいくつですか？\nB: さんこです。",
   exampleSrc:"A: How many pairs of glasses?\nB: Three.",
   funFact:"San is also the most common honorific suffix for names (Tanaka-san). But they are completely different words. The number san uses kanji 三, while the name suffix uses 様 or さん."},

  {type:"teach", trg:"よん", src:"four (4)", pos:"num", gender:null,
   note:"Has two readings: よん (yon) and し (shi). Yon is preferred because shi also means death.",
   example:"A: よにんかぞくです。\nB: にぎやかですね！",
   exampleSrc:"A: We are a family of four.\nB: How lively!",
   funFact:"Shi (四) sounds like shi (死, death). Hotels and hospitals often skip room 4 and floor 4. Phone numbers and license plates avoid 4. Most people say 'yon' to dodge the unlucky sound."},

  {type:"mc", q:"The number よん is preferred over し because:", opts:["Yon is easier to say","Shi means death","Shi is informal","Yon sounds modern"], ans:"Shi means death",
   hint:"Japanese culture has a strong association between the sound and an unlucky meaning."},

  {type:"teach", trg:"ご", src:"five (5)", pos:"num", gender:null,
   note:"The number five. Also read いつつ (itsutsu) in native counting.",
   example:"A: ごにんですか？\nB: はい、ごにんです。",
   exampleSrc:"A: Five people?\nB: Yes, five people.",
   funFact:"Five has strong cultural weight in Japan. There are five elements (godai), five-storied pagodas (gojuu no tou), and the famous Gorin (Five Rings) by Miyamoto Musashi."},

  {type:"teach", trg:"ろく", src:"six (6)", pos:"num", gender:null,
   note:"The number six. Also read むっつ (muttsu) in native counting.",
   example:"A: ろくじにおきます。\nB: はやいですね！",
   exampleSrc:"A: I wake up at six.\nB: That is early!",
   funFact:"Roku appears in rokugatsu (June, month 6). The native reading mu/muttsu appears in the old word muika (6th day of the month). Japanese calendars mix both systems."},

  {type:"teach", trg:"なな", src:"seven (7)", pos:"num", gender:null,
   note:"Has two readings: なな (nana) and しち (shichi). Nana is more common.",
   example:"A: なながつにりょこうします。\nB: いいですね！",
   exampleSrc:"A: I will travel in July.\nB: That sounds nice!",
   funFact:"Like four, seven has a secondary reading (shichi) that is sometimes avoided because it sounds like variations of 'death' words. Nana is the safe, clear choice in most contexts."},

  {type:"fb", s:"だれ{1}かばんですか？", a:"の", opts:["の","は","が","を"], sSrc:"Whose bag is it?",
   hint:"The possession particle that connects 'who' to 'bag.'"},

  {type:"teach", trg:"はち", src:"eight (8)", pos:"num", gender:null,
   note:"The number eight. Considered very lucky in Japan.\nAlso read やっつ (yattsu) in native counting.",
   example:"A: はちじにあいましょう。\nB: はい、はちじですね。",
   exampleSrc:"A: Let's meet at eight.\nB: Yes, eight o'clock.",
   funFact:"Eight is the luckiest number in Japan. The kanji 八 spreads wide at the bottom, symbolizing growing prosperity. Shrine gates, temple roofs, and lucky charms often feature the number eight."},

  {type:"teach", trg:"きゅう", src:"nine (9)", pos:"num", gender:null,
   note:"Has two readings: きゅう (kyuu) and く (ku). Ku can mean suffering.\nKanji: 九.",
   example:"A: きゅうじにねます。\nB: わたしも！",
   exampleSrc:"A: I go to bed at nine.\nB: Me too!",
   funFact:"Ku (九) sounds like ku (苦, suffering). Like four, nine is sometimes considered unlucky. Hospital rooms avoid both 4 and 9. Kyuu is the safer pronunciation in most situations."},

  {type:"teach", trg:"じゅう", src:"ten (10)", pos:"num", gender:null,
   note:"The number ten. Base for teens: 11 = じゅういち, 12 = じゅうに, etc.\nKanji: 十.",
   example:"A: じゅうにんですか？\nB: いいえ、はちにんです。",
   exampleSrc:"A: Ten people?\nB: No, eight people.",
   funFact:"The kanji 十 is a cross shape, representing completeness. Japanese math is beautifully systematic: 11 is juu-ichi (ten-one), 20 is ni-juu (two-tens), 23 is ni-juu-san (two-tens-three)."},

  {type:"match", pairs:[{trg:"いち",src:"one"},{trg:"に",src:"two"},{trg:"さん",src:"three"},{trg:"よん",src:"four"},{trg:"ご",src:"five"}]},

  {type:"match", pairs:[{trg:"ろく",src:"six"},{trg:"なな",src:"seven"},{trg:"はち",src:"eight"},{trg:"きゅう",src:"nine"},{trg:"じゅう",src:"ten"}]},

  {type:"mc", q:"Which number is considered the luckiest in Japan?", opts:["よん","じゅう","はち","ご"], ans:"はち",
   hint:"Its kanji 八 symbolizes spreading prosperity."},

  {type:"fb", s:"これはせんせい{1}かさです。", a:"の", opts:["の","は","が","を"], sSrc:"This is the teacher's umbrella.",
   hint:"The possession particle connecting owner to object."},

  {type:"mc", q:"What is 'my cellphone' in Japanese?", opts:["けいたいのわたし","わたしはけいたいです","これのけいたい","わたしのけいたい"], ans:"わたしのけいたい",
   hint:"Person + no + object = person's object."},

  {type:"tip", title:"Numbers: Two Systems",
   text:"Sino-Japanese (from Chinese):\nいち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう\n\nUsed with counters and in math.\n\nThe native Japanese system (hitotsu, futatsu...) is used for general counting without a counter. You will learn it later.",
   deepDive:{title:"Unlucky numbers",
    text:"Four (し/shi) sounds like 死 (death).\nNine (く/ku) sounds like 苦 (suffering).\n\nHotels, hospitals, and apartments often skip floors 4, 9, 13, and 42.\n42 = shi-ni = 'to die.'\n\nMany people use yon (not shi) and kyuu (not ku) to avoid these sounds."}},

  {type:"mc", q:"じゅうに means:", opts:["12","100","2","20"], ans:"12",
   hint:"Juu (ten) + ni (two) = twelve."},
]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
]};
export default UNIT_03;
