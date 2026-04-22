// Japanese V2 Unit 03. これは何(なん)ですか (What is this?)
import BATCH11_L1 from './_batch11_u03_L01.js';
import BATCH10_L1 from './_batch10_u03_L01.js';
import BATCH9_L1 from './_batch9_u03_L01.js';
import BATCH7_L1 from './_batch7_u03_L01.js';
import BATCH8_L1 from './_batch8_u03_L01.js';
import BATCH6_L1 from './_batch6_u03_L01.js';
import BATCH4_L02 from './_batch4_u03_L02.js';
import BATCH4_L01 from './_batch4_u03_L01.js';
import BATCH3_L1 from './_batch3_u03_L01.js';
// Level: A1.1. JLPT N5 aligned.
import JEXP_03_L1 from './_temp_u03_expand_L01.js';import JEXP_03_L2 from './_temp_u03_expand_L02.js';import JEXP_03_L3 from './_temp_u03_expand_L03.js';import JEXP_03_L4 from './_temp_u03_expand_L04.js';
import COVERAGE_U03 from './_coverage_u03.js';
// Demonstratives, common objects, nan desu ka, no particle, numbers 1-10.

const UNIT_03 = {
  n:3, lang:"ja", srcLang:"en", track:"v2",
  title:"これは何(なん)ですか", sub:"What Is This?",
  icon:"\u{1F446}", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: これ・それ・あれ (Demonstratives & Objects) ═══
{id:"jav2_u3l1", title:"これ・それ・あれ", icon:"\u{1F4F1}", xp:15, board:true, steps:[
  {type:"intro", title:"これ・それ・あれ",
   desc:"Learn to point things out and ask what they are. Japanese has a three-way system for 'this/that/that over there' based on distance from speaker and listener.",
   goals:["Use kore, sore, are for this/that/that over there","Ask 'what is this?' with nan desu ka","Name common everyday objects"]},

  {type:"teach", trg:"これ", src:"this (thing near me)", pos:"pron", gender:null,
   note:"Points to something close to the speaker. One of the ko-so-a-do demonstratives.",
   example:"A: これは何(なん)ですか?\nB: これは本(ほん)です。",
   exampleSrc:"A: What is this?\nB: This is a book.",
   funFact:"Japanese demonstratives follow the ko-so-a-do pattern. Ko- = near speaker, so- = near listener, a- = far from both, do- = question. This system is everywhere in Japanese grammar."},

  {type:"teach", trg:"それ", src:"that (thing near you)", pos:"pron", gender:null,
   note:"Points to something close to the listener, away from the speaker.",
   example:"A: それはわたしの傘(かさ)です。\nB: ああ、すみません。",
   exampleSrc:"A: That is my umbrella.\nB: Oh, sorry.",
   funFact:"The ko-so-a split is based on psychological distance, not just physical. Sore can refer to something the listener just mentioned, even in abstract conversation."},

  {type:"teach", trg:"あれ", src:"that over there (far from both)", pos:"pron", gender:null,
   note:"Points to something far from both speaker and listener.",
   example:"A: あれは何(なん)ですか?\nB: あれは東京(とうきょう)タワーです。",
   exampleSrc:"A: What is that over there?\nB: That is Tokyo Tower.",
   funFact:"English only has two levels: this and that. Japanese has three. Are covers things far from both people, like a building across the street or a star in the sky."},

  {type:"teach", trg:"何(なん)ですか", src:"what is it?", pos:"pron", gender:null,
   note:"Question word for 'what.' なに (nani) before certain sounds, なん (nan) before d/n/counters.",
   example:"A: これは何(なん)ですか?\nB: 携帯(けいたい)です。",
   exampleSrc:"A: What is this?\nB: It is a cellphone.",
   funFact:"Nan and nani are the same word. Nan appears before desu, de, and counters (nan-nin, nan-ji). Nani appears elsewhere (nani wo, nani ga). The change is purely for smoother pronunciation."},

  {type:"mc", q:"これ refers to something:", opts:["Near the speaker","Near the listener","Far from both","Unknown location"], ans:"Near the speaker",
   hint:"Ko- words are always about what is close to the person speaking."},

  {type:"teach", trg:"本(ほん)", src:"book", pos:"noun", gender:null,
   note:"One of the most common nouns. Counter for long objects is also ほん.\nKanji: 本.",
   example:"A: それは何(なん)の本(ほん)ですか?\nB: 日本語(にほんご)の本(ほん)です。",
   exampleSrc:"A: What kind of book is that?\nB: It is a Japanese language book.",
   funFact:"The kanji 本 originally means 'root' or 'origin' (same as in 日本). It came to mean 'book' because books are the root of knowledge. Also used as a counter for long thin objects like pens and bottles."},

  {type:"teach", trg:"かばん", src:"bag / suitcase", pos:"noun", gender:null,
   note:"Covers bags, backpacks, briefcases. A general word for any bag you carry.",
   example:"A: これは誰(だれ)のかばんですか?\nB: わたしのかばんです。",
   exampleSrc:"A: Whose bag is this?\nB: It is my bag.",
   funFact:"Borrowed from Dutch 'kabas' during the Edo period when Dutch traders were the only Europeans allowed in Japan. Many everyday Japanese words have Dutch origins."},

  {type:"teach", trg:"傘(かさ)", src:"umbrella", pos:"noun", gender:null,
   note:"Essential item in Japan's rainy climate.\nKanji: 傘.",
   example:"A: 傘(かさ)はありますか?\nB: はい、あります。",
   exampleSrc:"A: Do you have an umbrella?\nB: Yes, I do.",
   funFact:"Japan sells about 130 million umbrellas per year. Transparent vinyl umbrellas (biniru-gasa) are everywhere at convenience stores. Umbrella theft is so common it is practically a cultural joke."},

  {type:"fb", s:"{1}は何(なん)ですか?", a:"これ", opts:["これ","です","なん","は"], sSrc:"What is this?",
   hint:"The demonstrative for 'this thing near me.'"},

  {type:"teach", trg:"時計(とけい)", src:"watch / clock", pos:"noun", gender:null,
   note:"Covers both wristwatches and wall clocks.\nKanji: 時計.",
   example:"A: それは時計(とけい)ですか?\nB: はい、日本(にほん)の時計(とけい)です。",
   exampleSrc:"A: Is that a watch?\nB: Yes, it is a Japanese watch.",
   funFact:"時 (time) + 計 (measure). A time-measuring device. Japan is famous for precision timepieces. Seiko, Citizen, and Casio are all Japanese brands that revolutionized watchmaking."},

  {type:"teach", trg:"携帯(けいたい)", src:"cellphone / mobile phone", pos:"noun", gender:null,
   note:"Short for 携帯電話(けいたいでんわ) (portable telephone). Everyone says 携帯(けいたい) or スマホ now.",
   example:"A: これは誰(だれ)の携帯(けいたい)ですか?\nB: わたしのです。",
   exampleSrc:"A: Whose cellphone is this?\nB: It is mine.",
   funFact:"携帯 means 'portable.' Older Japanese people still say keitai, while younger people say sumaho (from smartphone). Japan had advanced flip phones called 'garakei' (Galapagos phones) before smartphones arrived."},

  {type:"teach", trg:"眼鏡(めがね)", src:"glasses / eyeglasses", pos:"noun", gender:null,
   note:"Always plural-sounding in Japanese too. Comes from Portuguese.\nKanji: 眼鏡.",
   example:"A: あれは誰(だれ)の眼鏡(めがね)ですか?\nB: 先生(せんせい)の眼鏡(めがね)です。",
   exampleSrc:"A: Whose glasses are those?\nB: They are the teacher's glasses.",
   funFact:"From Portuguese 'megane' brought by missionaries in the 1500s. 眼 (eye) + 鏡 (mirror). Japan has one of the highest rates of glasses-wearing in the world, especially among young people."},

  {type:"mc", q:"それ refers to something:", opts:["Near the speaker","Near the listener","Far from both","In the past"], ans:"Near the listener",
   hint:"So- words relate to the l...'s area or what the l... just mentioned."},

  {type:"match", pairs:[{trg:"これ",src:"this (near me)"},{trg:"それ",src:"that (near you)"},{trg:"あれ",src:"that over there"},{trg:"何(なん)ですか",src:"what is it?"}]},

  {type:"teach", trg:"鍵(かぎ)", src:"key", pos:"noun", gender:null,
   note:"Both physical keys and metaphorical keys (to success, etc.).\nKanji: 鍵.",
   example:"A: 鍵(かぎ)はどこですか?\nB: かばんの中(なか)です。",
   exampleSrc:"A: Where are the keys?\nB: They are in the bag.",
   funFact:"The kanji 鍵 is one of the most complex everyday kanji with 25 strokes. Many Japanese learners struggle with it even in high school. In daily life, most people just write it in hiragana."},

  {type:"match", pairs:[{trg:"本(ほん)",src:"book"},{trg:"かばん",src:"bag"},{trg:"傘(かさ)",src:"umbrella"},{trg:"携帯(けいたい)",src:"cellphone"}]},

  {type:"fb", s:"あれは{1}ですか?\n(What is that over there?)", a:"何(なん)", opts:["何(なん)","これ","誰(だれ)","どこ"], sSrc:"What is that over there?",
   hint:"The question word for 'what' that pairs with desu ka."},

  {type:"mc", q:"鍵(かぎ) means:", opts:["bag","clock","key","umbrella"], ans:"key",
   hint:"A small metal object that opens locks."},

  {type:"match", pairs:[{trg:"時計(とけい)",src:"watch / clock"},{trg:"眼鏡(めがね)",src:"glasses"},{trg:"鍵(かぎ)",src:"key"},{trg:"傘(かさ)",src:"umbrella"}]},

  {type:"mc", q:"これは眼鏡(めがね)です means:", opts:["Where are the glasses?","Those are glasses","I want glasses","These are glasses"], ans:"These are glasses",
   hint:"Kore (this) + wa (topic) + megane (g...) + desu (is)."},
]},

// ═══ L2: わたしの... (Possession & Numbers) ═══
{id:"jav2_u3l2", title:"わたしの...", icon:"\u{1F522}", xp:15, board:true, steps:[
  {type:"intro", title:"わたしの...",
   desc:"Learn to express possession with the particle no and count from 1 to 10 in Japanese. The no particle is one of the most versatile words in the language.",
   goals:["Express possession with no","Count from 1 to 10","Combine numbers with basic counters"]},

  {type:"teach", trg:"の", src:"'s / of (possession particle)", pos:"part", gender:null,
   note:"Connects two nouns. First noun modifies the second.\nPattern: A の B = A's B / B of A.",
   example:"A: これは誰(だれ)のかばんですか?\nB: わたしのかばんです。",
   exampleSrc:"A: Whose bag is this?\nB: It is my bag.",
   funFact:"No is the most frequently used particle in Japanese. Besides possession, it connects any two nouns: nihongo no hon (a Japanese book), Tokyo no hoteru (a Tokyo hotel). Think of it as a universal noun connector."},

  {type:"teach", trg:"誰(だれ)", src:"who", pos:"pron", gender:null,
   note:"Question word for 'who.' Polite form: どなた (donata).",
   example:"A: あれは誰(だれ)の携帯(けいたい)ですか?\nB: 先生(せんせい)のです。",
   exampleSrc:"A: Whose cellphone is that?\nB: It is the teacher's.",
   funFact:"Dare follows the same ko-so-a-do pattern. Ko-re (this thing), so-re (that thing), a-re (that far thing), do-re (which thing). Da-re is the 'who' version of this pattern."},

  {type:"mc", q:"わたしの本(ほん) means:", opts:["my book","this book","I am a book","a book"], ans:"my book",
   hint:"Watashi (I) + no (possession) + hon (b...)."},

  {type:"teach", trg:"一(いち)", src:"one (1)", pos:"num", gender:null,
   note:"The first number. Also read ひとつ (hitotsu) in native Japanese counting.",
   example:"A: 何歳(なんさい)ですか?\nB: 一歳(いっさい)です。",
   exampleSrc:"A: How old are you?\nB: I am one year old.",
   funFact:"Japanese has TWO number systems: Sino-Japanese (ichi, ni, san) from Chinese, and native Japanese (hitotsu, futatsu, mittsu). Sino-Japanese is used for math and with most counters."},

  {type:"teach", trg:"二(に)", src:"two (2)", pos:"num", gender:null,
   note:"The number two. Also read ふたつ (futatsu) in native counting.",
   example:"A: 本(ほん)は何冊(なんさつ)ですか?\nB: 二冊(にさつ)です。",
   exampleSrc:"A: How many books?\nB: Two books.",
   funFact:"Ni appears in many compounds: nigatsu (February, month 2), niji (2 o'clock), nikai (second floor). The pattern is beautifully logical."},

  {type:"teach", trg:"三(さん)", src:"three (3)", pos:"num", gender:null,
   note:"The number three. Also read みっつ (mittsu) in native counting.",
   example:"A: 眼鏡(めがね)はいくつですか?\nB: 三個(さんこ)です。",
   exampleSrc:"A: How many pairs of glasses?\nB: Three.",
   funFact:"San is also the most common honorific suffix for names (Tanaka-san). But they are completely different words. The number san uses kanji 三, while the name suffix uses 様 or さん."},

  {type:"teach", trg:"四(よん)", src:"four (4)", pos:"num", gender:null,
   note:"Has two readings: よん (yon) and し (shi). Yon is preferred because shi also means death.",
   example:"A: 四人(よにん)家族(かぞく)です。\nB: にぎやかですね!",
   exampleSrc:"A: We are a family of four.\nB: How lively!",
   funFact:"Shi (四) sounds like shi (死, death). Hotels and hospitals often skip room 4 and floor 4. Phone numbers and license plates avoid 4. Most people say 'yon' to dodge the unlucky sound."},

  {type:"mc", q:"The number 四(よん) is preferred over し because:", opts:["Yon is easier to say","Shi means death","Shi is informal","Yon sounds modern"], ans:"Shi means death",
   hint:"Japanese culture has a strong association between the sound and an unlucky meaning."},

  {type:"teach", trg:"五(ご)", src:"five (5)", pos:"num", gender:null,
   note:"The number five. Also read いつつ (itsutsu) in native counting.",
   example:"A: 五人(ごにん)ですか?\nB: はい、五人(ごにん)です。",
   exampleSrc:"A: Five people?\nB: Yes, five people.",
   funFact:"Five has strong cultural weight in Japan. There are five elements (godai), five-storied pagodas (gojuu no tou), and the famous Gorin (Five Rings) by Miyamoto Musashi."},

  {type:"teach", trg:"六(ろく)", src:"six (6)", pos:"num", gender:null,
   note:"The number six. Also read むっつ (muttsu) in native counting.",
   example:"A: 六時(ろくじ)に起(お)きます。\nB: 早(はや)いですね!",
   exampleSrc:"A: I wake up at six.\nB: That is early!",
   funFact:"Roku appears in rokugatsu (June, month 6). The native reading mu/muttsu appears in the old word muika (6th day of the month). Japanese calendars mix both systems."},

  {type:"teach", trg:"七(なな)", src:"seven (7)", pos:"num", gender:null,
   note:"Has two readings: なな (nana) and しち (shichi). Nana is more common.",
   example:"A: 七月(しちがつ)に旅行(りょこう)します。\nB: いいですね!",
   exampleSrc:"A: I will travel in July.\nB: That sounds nice!",
   funFact:"Like four, seven has a secondary reading (shichi) that is sometimes avoided because it sounds like variations of 'death' words. Nana is the safe, clear choice in most contexts."},

  {type:"fb", s:"誰(だれ){1}かばんですか?", a:"の", opts:["の","は","が","を"], sSrc:"Whose bag is it?",
   hint:"The possession particle that connects 'who' to 'bag.'"},

  {type:"teach", trg:"八(はち)", src:"eight (8)", pos:"num", gender:null,
   note:"The number eight. Considered very lucky in Japan.\nAlso read やっつ (yattsu) in native counting.",
   example:"A: 八時(はちじ)に会(あ)いましょう。\nB: はい、八時(はちじ)ですね。",
   exampleSrc:"A: Let's meet at eight.\nB: Yes, eight o'clock.",
   funFact:"Eight is the luckiest number in Japan. The kanji 八 spreads wide at the bottom, symbolizing growing prosperity. Shrine gates, temple roofs, and lucky charms often feature the number eight."},

  {type:"teach", trg:"九(きゅう)", src:"nine (9)", pos:"num", gender:null,
   note:"Has two readings: きゅう (kyuu) and く (ku). Ku can mean suffering.\nKanji: 九.",
   example:"A: 九時(くじ)に寝(ね)ます。\nB: わたしも!",
   exampleSrc:"A: I go to bed at nine.\nB: Me too!",
   funFact:"Ku (九) sounds like ku (苦, suffering). Like four, nine is sometimes considered unlucky. Hospital rooms avoid both 4 and 9. Kyuu is the safer pronunciation in most situations."},

  {type:"teach", trg:"十(じゅう)", src:"ten (10)", pos:"num", gender:null,
   note:"The number ten. Base for teens: 11 = 十一(じゅういち), 12 = 十二(じゅうに), etc.\nKanji: 十.",
   example:"A: 十人(じゅうにん)ですか?\nB: いいえ、八人(はちにん)です。",
   exampleSrc:"A: Ten people?\nB: No, eight people.",
   funFact:"The kanji 十 is a cross shape, representing completeness. Japanese math is beautifully systematic: 11 is juu-ichi (ten-one), 20 is ni-juu (two-tens), 23 is ni-juu-san (two-tens-three)."},

  {type:"match", pairs:[{trg:"一(いち)",src:"one"},{trg:"二(に)",src:"two"},{trg:"三(さん)",src:"three"},{trg:"四(よん)",src:"four"},{trg:"五(ご)",src:"five"}]},

  {type:"match", pairs:[{trg:"六(ろく)",src:"six"},{trg:"七(なな)",src:"seven"},{trg:"八(はち)",src:"eight"},{trg:"九(きゅう)",src:"nine"},{trg:"十(じゅう)",src:"ten"}]},

  {type:"mc", q:"Which number is considered the luckiest in Japan?", opts:["四(よん)","十(じゅう)","八(はち)","五(ご)"], ans:"八(はち)",
   hint:"Its kanji 八 symbolizes spreading prosperity."},

  {type:"fb", s:"これは先生(せんせい){1}傘(かさ)です。", a:"の", opts:["の","は","が","を"], sSrc:"This is the teacher's umbrella.",
   hint:"The possession particle connecting owner to object."},

  {type:"mc", q:"What is 'my cellphone' in Japanese?", opts:["携帯(けいたい)のわたし","わたしは携帯(けいたい)です","これの携帯(けいたい)","わたしの携帯(けいたい)"], ans:"わたしの携帯(けいたい)",
   hint:"Person + no + object = person's object."},

  {type:"tip", title:"Numbers: Two Systems",
   text:"Sino-Japanese (from Chinese):\n一(いち), 二(に), 三(さん), 四(よん), 五(ご), 六(ろく), 七(なな), 八(はち), 九(きゅう), 十(じゅう)\n\nUsed with counters and in math.\n\nThe native Japanese system (hitotsu, futatsu...) is used for general counting without a counter. You will learn it later.",
   deepDive:{title:"Unlucky numbers",
    text:"Four (し/shi) sounds like 死 (death).\nNine (く/ku) sounds like 苦 (suffering).\n\nHotels, hospitals, and apartments often skip floors 4, 9, 13, and 42.\n42 = shi-ni = 'to die.'\n\nMany people use yon (not shi) and kyuu (not ku) to avoid these sounds."}},

  {type:"mc", q:"十二(じゅうに) means:", opts:["12","100","2","20"], ans:"12",
   hint:"Juu (ten) + ni (two) = twelve."},
{type:"match",pairs:[{trg:"誰(だれ)",src:"who"}]}]},

// ═══ L7: 場所(ばしょ)と場所(ばしょ) (Places & Everyday Spaces) ═══
{id:"jav2_u3l7", title:"場所(ばしょ)とまわり", icon:"\u{1F3E2}", xp:15, board:true, steps:[
  {type:"intro", title:"場所(ばしょ)とまわり",
   desc:"Learn five core JLPT N5 nouns for everyday places and spaces you encounter in Japan.",
   goals:["Name a train station, shop, and room","Identify a window and a newspaper","Build simple sentences about places with desu ka"]},

  {type:"teach", trg:"駅(えき)", src:"station / train station", pos:"noun", gender:null,
   note:"The place where you board trains. Ubiquitous in Japanese daily life.",
   example:"A: すみません、駅(えき)はどこですか?\nB: あそこです。",
   exampleSrc:"A: Excuse me, where is the station?\nB: It is over there.",
   funFact:"Japan has over 9,000 train stations. Many major 駅 are cities within cities, with department stores, clinics, and even hotels inside."},

  {type:"teach", trg:"店(みせ)", src:"store / shop", pos:"noun", gender:null,
   note:"Any kind of shop: grocery store, bookstore, clothing store.",
   example:"A: あの店(みせ)は何(なん)の店(みせ)ですか?\nB: 本(ほん)の店(みせ)です。",
   exampleSrc:"A: What kind of shop is that?\nB: It is a bookshop.",
   funFact:"The word 店 can stand alone or combine: 本屋(ほんや) (bookstore), 花屋(はなや) (flower shop). The standalone みせ is more general."},

  {type:"teach", trg:"部屋(へや)", src:"room", pos:"noun", gender:null,
   note:"Refers to any room inside a building: bedroom, living room, classroom.",
   example:"A: これは誰(だれ)の部屋(へや)ですか?\nB: わたしの部屋(へや)です。",
   exampleSrc:"A: Whose room is this?\nB: It is my room.",
   funFact:"Traditional Japanese rooms are measured in tatami mats (畳(じょう)). A 6-mat room (六畳(ろくじょう)) is about 9.7 square metres."},

  {type:"teach", trg:"窓(まど)", src:"window", pos:"noun", gender:null,
   note:"The window of a room or vehicle. Often part of 窓口(まどぐち), a service counter at stations and banks.",
   example:"A: 窓(まど)はどれですか?\nB: あれが窓(まど)です。",
   exampleSrc:"A: Which one is the window?\nB: That over there is the window.",
   funFact:"窓口(まどぐち) literally means 'window opening' but has come to mean any service counter or help desk."},

  {type:"teach", trg:"新聞(しんぶん)", src:"newspaper", pos:"noun", gender:null,
   note:"Japan's major newspapers have daily circulations in the millions.",
   example:"A: それは何(なん)ですか?\nB: 新聞(しんぶん)です。",
   exampleSrc:"A: What is that?\nB: It is a newspaper.",
   funFact:"The Yomiuri Shimbun (読売新聞) holds a Guinness World Record as the world's highest-circulation daily newspaper, with over 7 million copies per day."},

  {type:"tip", title:"は vs が for Location Questions",
   text:"Both particles can introduce location:\n\n駅(えき)はどこですか? = Where IS the station? (topic, expected info)\n駅(えき)がありますか? = Is there a station? (existence, yes/no)\n\nUse は when the listener already knows what you are asking about.\nUse が when asking whether something exists at all.",
   deepDive:{title:"Where vs whether",
    text:"どこですか (where is it?) assumes the thing exists.\nありますか (is there?) questions existence.\n\nIn A1 Japanese, は + どこ and が + あります are the two patterns you need most."}},

  {type:"mc", q:"駅(えき) means:", opts:["room","station","newspaper","window"], ans:"station",
   hint:"This is where you catch trains and subways in Japan."},

  {type:"mc", q:"部屋(へや) means:", opts:["store","window","room","station"], ans:"room",
   hint:"Any enclosed space inside a building, including a bedroom or classroom."},

  {type:"mc", q:"Which word means 'newspaper'?", opts:["窓(まど)","新聞(しんぶん)","店(みせ)","駅(えき)"], ans:"新聞(しんぶん)",
   hint:"A compound of 'new' and 'hear/news.' Print media you read daily."},

  {type:"match", pairs:[{trg:"駅(えき)",src:"station"},{trg:"店(みせ)",src:"store / shop"},{trg:"部屋(へや)",src:"room"},{trg:"窓(まど)",src:"window"}]},

  {type:"mc", q:"あの店(みせ)は本(ほん)の店(みせ)です means:", opts:["That shop sells windows","That shop sells keys","That shop is a bookshop","That is a train station"], ans:"That shop is a bookshop",
   hint:"本 (book) + の attaches it attributively to 店. The の construction names what the store sells."},

  {type:"fb", s:"すみません、{1}はどこですか?\n(Excuse me, where is the station?)", a:"駅(えき)", opts:["駅(えき)","店(みせ)","窓(まど)","部屋(へや)"], sSrc:"Excuse me, where is the station?",
   hint:"The place where trains stop and depart."},

  {type:"fb", s:"これは誰(だれ)の{1}ですか?\n(Whose room is this?)", a:"部屋(へや)", opts:["部屋(へや)","新聞(しんぶん)","鍵(かぎ)","店(みせ)"], sSrc:"Whose room is this?",
   hint:"An enclosed space inside a building, not a vehicle or station."},

  {type:"match", pairs:[{trg:"新聞(しんぶん)",src:"newspaper"},{trg:"窓(まど)",src:"window"},{trg:"駅(えき)",src:"station"},{trg:"部屋(へや)",src:"room"}]},

  {type:"mc", q:"窓口(まどぐち) is derived from:", opts:["newspaper + floor","window + opening","station + exit","room + key"], ans:"window + opening",
   hint:"The second character means the same thing as a mouth-shaped gap in a wall. Together the compound describes a service counter."},
]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
,
  JEXP_03_L1,
  JEXP_03_L2,
  JEXP_03_L3,
  JEXP_03_L4
, COVERAGE_U03]};
export default UNIT_03;
