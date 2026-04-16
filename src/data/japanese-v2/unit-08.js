// Japanese V2 Unit 08. ばしょ (Places & Location)
import BATCH11_L1 from './_batch11_u08_L01.js';
import BATCH10_L1 from './_batch10_u08_L01.js';
import BATCH9_L1 from './_batch9_u08_L01.js';
import BATCH7_L1 from './_batch7_u08_L01.js';
import BATCH8_L1 from './_batch8_u08_L01.js';
import BATCH6_L1 from './_batch6_u08_L01.js';
import BATCH4_L02 from './_batch4_u08_L02.js';
import BATCH4_L01 from './_batch4_u08_L01.js';
import BATCH2_L1 from './_batch2_u08_L01.js';
// Level: A1.3. JLPT N5 aligned.
// Places, location words, arimasu vs imasu.

const UNIT_08 = {
  n:8, lang:"ja", srcLang:"en", track:"v2",
  title:"ばしょ", sub:"Places & Location",
  icon:"🗺️", level:"A1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: どこですか (Where Is It?) ═══
{id:"jav2_u8l1", title:"どこですか", icon:"📍", xp:15, board:true, steps:[
  {type:"intro", title:"どこですか",
   desc:"Learn the names of common places and how to ask where things are. You will use arimasu for objects and imasu for people to describe where things exist.",
   goals:["Name common places like school, station, hospital","Ask 'where?' with doko","Use arimasu (objects) and imasu (people) correctly"]},

  {type:"teach", trg:"えき", src:"train station", pos:"noun", gender:null,
   note:"One of the most important words in Japan. Trains are the main transport.\nKanji: 駅.",
   example:"A: えきはどこですか？\nB: あそこです。",
   exampleSrc:"A: Where is the station?\nB: It is over there.",
   funFact:"Japan has over 9,000 train stations, more than any other country. The kanji 駅 originally meant a horse relay station on ancient roads. Tokyo's Shinjuku Station is the busiest in the world, handling over 3.5 million passengers daily."},

  {type:"teach", trg:"びょういん", src:"hospital", pos:"noun", gender:null,
   note:"A place for medical care. Clinic (smaller) is クリニック or いいん.\nKanji: 病院.",
   example:"A: びょういんはどこですか？\nB: えきのちかくです。",
   exampleSrc:"A: Where is the hospital?\nB: It is near the station.",
   funFact:"病院 combines 病 (sick/illness) and 院 (institution). Japanese healthcare is universal. Everyone has health insurance, and visits are affordable. You can often walk into a clinic without an appointment. Hospital waiting rooms have their own culture of patience and quiet."},

  {type:"teach", trg:"ゆうびんきょく", src:"post office", pos:"noun", gender:null,
   note:"Japan Post handles mail, packages, and banking. Look for the 〒 symbol.\nKanji: 郵便局.",
   example:"A: ゆうびんきょくはなんじまでですか？\nB: ごごごじまでです。",
   exampleSrc:"A: Until what time is the post office open?\nB: Until 5 PM.",
   funFact:"Japan Post (yuubin-kyoku) is not just for mail. It is also one of Japan's largest banks and insurance companies. The red 〒 symbol is unique to Japan. Sending New Year postcards (nengajou) through the post office is a huge cultural tradition."},

  {type:"teach", trg:"ぎんこう", src:"bank", pos:"noun", gender:null,
   note:"Financial institution. ATMs often have limited hours in Japan.\nKanji: 銀行.",
   example:"A: ぎんこうはどこですか？\nB: ゆうびんきょくのとなりです。",
   exampleSrc:"A: Where is the bank?\nB: It is next to the post office.",
   funFact:"銀行 literally means 'silver-going,' from the Chinese term for money exchange. Japanese bank ATMs famously close at night and on weekends at some locations. Convenience store ATMs (at 7-Eleven, etc.) have become the go-to for 24-hour cash access."},

  {type:"mc", q:"えき means:", opts:["train station","bank","hospital","post office"], ans:"train station",
   hint:"Japan's most essential transport hub, found in every town."},

  {type:"teach", trg:"こうえん", src:"park", pos:"noun", gender:null,
   note:"Public park for recreation. Japan has many beautiful parks, especially for cherry blossoms.\nKanji: 公園.",
   example:"A: こうえんでなにをしますか？\nB: さんぽをします。",
   exampleSrc:"A: What do you do at the park?\nB: I take a walk.",
   funFact:"公園 combines 公 (public) and 園 (garden). Japanese parks are gathering places for hanami (cherry blossom viewing) in spring. Ueno Park in Tokyo has been a public park since 1873 and is home to a zoo, museums, and thousands of cherry trees."},

  {type:"teach", trg:"デパート", src:"department store", pos:"noun", gender:null,
   note:"Loanword from English 'department (store).' Written in katakana. High-end shopping.",
   example:"A: デパートでなにをかいますか？\nB: ふくをかいます。",
   exampleSrc:"A: What will you buy at the department store?\nB: I will buy clothes.",
   funFact:"Japanese department stores (depaato) are legendary for service. Staff bow as the store opens. The basement floor (depachika) has incredible gourmet food halls. Gift wrapping is free and elevated to an art form. Mitsukoshi, founded in 1673, is one of the oldest."},

  {type:"teach", trg:"あります", src:"to exist / there is (inanimate)", pos:"verb", gender:null,
   note:"For objects, buildings, plants. Living things that move use います instead.\nDictionary form: ある.",
   example:"A: ちかくにコンビニがありますか？\nB: はい、えきのまえにあります。",
   exampleSrc:"A: Is there a convenience store nearby?\nB: Yes, there is one in front of the station.",
   funFact:"Arimasu is one of the two existence verbs. It handles everything that cannot move on its own: books, buildings, mountains, trees, events. Even abstract things use arimasu: jikan ga arimasu (I have time), mondai ga arimasu (there is a problem)."},

  {type:"fb", s:"えきは{1}ですか？\n(Where is the station?)", a:"どこ", opts:["どこ","なに","だれ","いくら"], sSrc:"Where is the station?",
   hint:"The question word asking about location or place."},

  {type:"teach", trg:"います", src:"to exist / there is (animate)", pos:"verb", gender:null,
   note:"For people, animals, fish, insects. Things that move on their own.\nDictionary form: いる.",
   example:"A: こうえんにこどもがいますか？\nB: はい、たくさんいます。",
   exampleSrc:"A: Are there children in the park?\nB: Yes, there are many.",
   funFact:"The animate/inanimate split is strict: a live fish uses imasu, but a fish on a plate uses arimasu. A robot uses arimasu (it is a machine), but some people humorously debate whether AI should use imasu. Plants always use arimasu despite being alive."},

  {type:"teach", trg:"どこ", src:"where?", pos:"pron", gender:null,
   note:"Location question word. Pattern: [place] は どこですか？",
   example:"A: トイレはどこですか？\nB: あちらです。",
   exampleSrc:"A: Where is the restroom?\nB: It is that way.",
   funFact:"Doko belongs to the ko-so-a-do system: koko (here), soko (there near you), asoko (over there), doko (where?). This four-way system is one of the most elegant structures in Japanese and applies to things, places, directions, and more."},

  {type:"mc", q:"Which verb do you use for 'there is a book'?", opts:["います","あります","たべます","のみます"], ans:"あります",
   hint:"Books cannot move on their own, so they use the inanimate existence verb."},

  {type:"match", pairs:[{trg:"えき",src:"station"},{trg:"びょういん",src:"hospital"},{trg:"ゆうびんきょく",src:"post office"},{trg:"ぎんこう",src:"bank"}]},

  {type:"match", pairs:[{trg:"こうえん",src:"park"},{trg:"デパート",src:"department store"},{trg:"あります",src:"exists (object)"},{trg:"います",src:"exists (person)"}]},

  {type:"fb", s:"こうえんにこどもが{1}。\n(There are children in the park.)", a:"います", opts:["います","あります","いきます","きます"], sSrc:"There are children in the park.",
   hint:"Children are living things that move, so use the animate existence verb."},

  {type:"mc", q:"ゆうびんきょく means:", opts:["bank","hospital","post office","school"], ans:"post office",
   hint:"The place marked with the 〒 symbol where you send mail and packages."},

  {type:"tip", title:"Arimasu vs Imasu Quick Guide",
   text:"あります (arimasu) = inanimate things:\nほんがあります。(There is a book.)\nえきがあります。(There is a station.)\n\nいます (imasu) = animate things:\nひとがいます。(There is a person.)\nねこがいます。(There is a cat.)\n\nPattern: [place] に [thing] が あります/います。",
   deepDive:{title:"Edge cases",
    text:"Tricky cases for the arimasu/imasu split:\n\nPlants: あります (they do not move)\nFish in a tank: います (they swim)\nFish on a plate: あります (it is food now)\nRobots: あります (machines)\nTaxi: あります (it is a vehicle, even with a driver)\n\nWhen in doubt: can it walk away on its own? If yes, imasu. If no, arimasu."}},

  {type:"mc", q:"デパート means:", opts:["convenience store","supermarket","bookshop","department store"], ans:"department store",
   hint:"A katakana loanword from English, known for luxury goods and the famous basement food halls."},
]},

// ═══ L2: うえとした (Above & Below) ═══
{id:"jav2_u8l2", title:"うえとした", icon:"⬆️", xp:15, board:true, steps:[
  {type:"intro", title:"うえとした",
   desc:"Learn location words to describe where things are in relation to other things. Above, below, inside, outside, in front, behind, and next to. These words use the pattern [reference] の [location].",
   goals:["Use location words: ue, shita, naka, soto, mae, ushiro, tonari","Build sentences with [thing] no [location] ni arimasu","Describe the position of objects and people"]},

  {type:"teach", trg:"うえ", src:"above / on top", pos:"noun", gender:null,
   note:"Used as a position noun: つくえのうえ = on top of the desk.\nKanji: 上.",
   example:"A: かぎはどこですか？\nB: つくえのうえにあります。",
   exampleSrc:"A: Where are the keys?\nB: They are on top of the desk.",
   funFact:"上 is one of the simplest kanji: a line above a baseline means 'up/above.' It also means 'skill' (jouzu = skillful) and 'senior' (joshi = superior). The kanji appears in joukyuu (advanced level), ue (above), and kami (upper)."},

  {type:"teach", trg:"した", src:"below / under", pos:"noun", gender:null,
   note:"Opposite of うえ. Used as: つくえのした = under the desk.\nKanji: 下.",
   example:"A: ねこはどこですか？\nB: テーブルのしたにいます。",
   exampleSrc:"A: Where is the cat?\nB: It is under the table.",
   funFact:"下 is the mirror of 上: a line below the baseline means 'down/below.' It also appears in shita (below), kudaru (to descend), ka (under), and gesha (getting off a vehicle). Jouzu/heta (skillful/unskillful) use 上/下 as metaphors."},

  {type:"teach", trg:"なか", src:"inside / in", pos:"noun", gender:null,
   note:"Used as: かばんのなか = inside the bag.\nKanji: 中.",
   example:"A: パスポートはどこですか？\nB: かばんのなかにあります。",
   exampleSrc:"A: Where is the passport?\nB: It is inside the bag.",
   funFact:"中 shows a line through the middle of a rectangle, representing something inside. It also means 'middle' and 'during': chuugoku (China = middle country), chuumon (order = middle of asking), jugyou-chuu (during class)."},

  {type:"teach", trg:"そと", src:"outside", pos:"noun", gender:null,
   note:"Opposite of なか. Used as: いえのそと = outside the house.\nKanji: 外.",
   example:"A: こどもはどこですか？\nB: そとであそんでいます。",
   exampleSrc:"A: Where are the children?\nB: They are playing outside.",
   funFact:"外 shows a crescent moon outside a box, representing 'outside/foreign.' It appears in gaikoku (foreign country), gaijin (foreigner, casual), sotogawa (outer side). The concept of soto (outside) is central to Japanese uchi-soto social thinking."},

  {type:"mc", q:"つくえのうえ means:", opts:["on top of the desk","under the desk","next to the desk","inside the desk"], ans:"on top of the desk",
   hint:"Tsukue (d...) + no (possessive) + the word meaning 'above/on t....'"},

  {type:"teach", trg:"まえ", src:"in front of / before", pos:"noun", gender:null,
   note:"Used for both space (in front of) and time (before).\nKanji: 前.",
   example:"A: えきのまえにバスていがあります。\nB: べんりですね。",
   exampleSrc:"A: There is a bus stop in front of the station.\nB: That is convenient.",
   funFact:"前 works for both space and time: eki no mae (in front of the station), san-nen mae (three years ago). This space-time dual meaning exists in many languages. In Japanese, mae no means 'previous' (mae no kaigi = the previous meeting)."},

  {type:"teach", trg:"うしろ", src:"behind / in back of", pos:"noun", gender:null,
   note:"Opposite of まえ. Pattern: [reference] のうしろ.\nAlso written 後ろ.",
   example:"A: トイレはどこですか？\nB: このたてもののうしろにあります。",
   exampleSrc:"A: Where is the restroom?\nB: It is behind this building.",
   funFact:"Ushiro is specifically spatial (behind/back). For time, Japanese uses ato (後, after) instead. Standing behind someone is ushiro ni tatsu. The concept of someone's ushiro (back) being a vulnerable spot appears in martial arts and samurai culture."},

  {type:"teach", trg:"となり", src:"next to / beside", pos:"noun", gender:null,
   note:"For things immediately adjacent. Pattern: [reference] のとなり.\nKanji: 隣.",
   example:"A: ぎんこうのとなりになにがありますか？\nB: ゆうびんきょくがあります。",
   exampleSrc:"A: What is next to the bank?\nB: There is a post office.",
   funFact:"隣 is a complex kanji meaning 'neighboring.' Tonari no Totoro (My Neighbor Totoro) is one of the most famous uses. In Japanese apartments, your tonari (neighbor) relationship is important. It is customary to greet new neighbors with a small gift."},

  {type:"fb", s:"ねこはテーブルの{1}にいます。\n(The cat is under the table.)", a:"した", opts:["した","うえ","なか","まえ"], sSrc:"The cat is under the table.",
   hint:"The location word meaning 'below' or 'underneath.'"},

  {type:"teach", trg:"ちかく", src:"near / nearby", pos:"noun", gender:null,
   note:"Used as: えきのちかく = near the station. Often with に particle.\nKanji: 近く.",
   example:"A: コンビニはちかくにありますか？\nB: はい、えきのちかくにあります。",
   exampleSrc:"A: Is there a convenience store nearby?\nB: Yes, there is one near the station.",
   funFact:"近 shows a road (辶) with an axe (斤), suggesting the distance you can walk with a tool, hence 'near.' Chikaku often appears in real-life questions: chikaku ni eki wa arimasu ka? (Is there a station nearby?) is essential for travelers."},

  {type:"teach", trg:"あいだ", src:"between", pos:"noun", gender:null,
   note:"Pattern: A と B の あいだ = between A and B.\nKanji: 間.",
   example:"A: ゆうびんきょくはどこですか？\nB: ぎんこうとえきのあいだにあります。",
   exampleSrc:"A: Where is the post office?\nB: It is between the bank and the station.",
   funFact:"間 shows sunlight coming through a gate, representing the space between things. It appears in jikan (time = hour-between), ningen (human being = person-between), and aida (between). The concept of ma (space/gap) is central to Japanese aesthetics."},

  {type:"mc", q:"えきのまえ means:", opts:["inside the station","in front of the station","behind the station","near the station"], ans:"in front of the station",
   hint:"Mae is the position word meaning 'before' or 'in f... of.'"},

  {type:"match", pairs:[{trg:"うえ",src:"above"},{trg:"した",src:"below"},{trg:"なか",src:"inside"},{trg:"そと",src:"outside"}]},

  {type:"match", pairs:[{trg:"まえ",src:"in front of"},{trg:"うしろ",src:"behind"},{trg:"となり",src:"next to"},{trg:"ちかく",src:"near"}]},

  {type:"fb", s:"ぎんこうの{1}にゆうびんきょくがあります。\n(The post office is next to the bank.)", a:"となり", opts:["となり","うえ","した","なか"], sSrc:"The post office is next to the bank.",
   hint:"The location word for things immediately adjacent to each other."},

  {type:"mc", q:"Which pattern is correct for 'between A and B'?", opts:["A の B のあいだ","A に B のあいだ","A と B のあいだ","A は B のあいだ"], ans:"A と B のあいだ",
   hint:"The particle connecting two items before aida is the one meaning 'and.'"},

  {type:"tip", title:"Location Pattern",
   text:"The basic pattern for describing locations:\n[reference] の [position] に [thing] が あります/います。\n\nExamples:\nつくえの うえに ほんが あります。(On the desk, there is a book.)\nこうえんの なかに こどもが います。(In the park, there are children.)\nえきの まえに バスていが あります。(In front of the station, there is a bus stop.)",
   deepDive:{title:"Word order flexibility",
    text:"Japanese word order is flexible as long as the verb stays at the end:\n\nつくえのうえに ほんが あります。= On the desk, there is a book.\nほんは つくえのうえに あります。= The book is on the desk.\n\nBoth are correct. The first emphasizes WHERE. The second emphasizes WHAT. The particle changes (ga vs wa) signal the emphasis shift."}},

  {type:"mc", q:"かばんのなかにあります means:", opts:["It is on the bag","It is near the bag","It is behind the bag","It is inside the bag"], ans:"It is inside the bag",
   hint:"Naka means the interior or i... of something."},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_08;
