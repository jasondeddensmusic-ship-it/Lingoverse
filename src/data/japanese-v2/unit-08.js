// Japanese V2 Unit 08. 場所(ばしょ) (Places & Location)
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
  title:"場所(ばしょ)", sub:"Places & Location",
  icon:"\u{1F5FA}\uFE0F", level:"A1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: どこですか (Where Is It?) ═══
{id:"jav2_u8l1", title:"どこですか", icon:"\u{1F4CD}", xp:15, board:true, steps:[
  {type:"intro", title:"どこですか",
   desc:"Learn the names of common places and how to ask where things are. You will use arimasu for objects and imasu for people to describe where things exist.",
   goals:["Name common places like school, station, hospital","Ask 'where?' with doko","Use arimasu (objects) and imasu (people) correctly"]},

  {type:"teach", trg:"駅(えき)", src:"train station", pos:"noun", gender:null,
   note:"One of the most important words in Japan. Trains are the main transport.\nKanji: 駅.",
   example:"A: 駅(えき)はどこですか?\nB: あそこです。",
   exampleSrc:"A: Where is the station?\nB: It is over there.",
   funFact:"Japan has over 9,000 train stations, more than any other country. The kanji 駅 originally meant a horse relay station on ancient roads. Tokyo's Shinjuku Station is the busiest in the world, handling over 3.5 million passengers daily."},

  {type:"teach", trg:"病院(びょういん)", src:"hospital", pos:"noun", gender:null,
   note:"A place for medical care. Clinic (smaller) is クリニック or 医院(いいん).\nKanji: 病院.",
   example:"A: 病院(びょういん)はどこですか?\nB: 駅(えき)の近(ちか)くです。",
   exampleSrc:"A: Where is the hospital?\nB: It is near the station.",
   funFact:"病院 combines 病 (sick/illness) and 院 (institution). Japanese healthcare is universal. Everyone has health insurance, and visits are affordable. You can often walk into a clinic without an appointment. Hospital waiting rooms have their own culture of patience and quiet."},

  {type:"teach", trg:"郵便局(ゆうびんきょく)", src:"post office", pos:"noun", gender:null,
   note:"Japan Post handles mail, packages, and banking. Look for the \u3012 symbol.\nKanji: 郵便局.",
   example:"A: 郵便局(ゆうびんきょく)は何時(なんじ)までですか?\nB: 午後(ごご)五時(ごじ)までです。",
   exampleSrc:"A: Until what time is the post office open?\nB: Until 5 PM.",
   funFact:"Japan Post (yuubin-kyoku) is not just for mail. It is also one of Japan's largest banks and insurance companies. The red \u3012 symbol is unique to Japan. Sending New Year postcards (nengajou) through the post office is a huge cultural tradition."},

  {type:"teach", trg:"銀行(ぎんこう)", src:"bank", pos:"noun", gender:null,
   note:"Financial institution. ATMs often have limited hours in Japan.\nKanji: 銀行.",
   example:"A: 銀行(ぎんこう)はどこですか?\nB: 郵便局(ゆうびんきょく)の隣(となり)です。",
   exampleSrc:"A: Where is the bank?\nB: It is next to the post office.",
   funFact:"銀行 literally means 'silver-going,' from the Chinese term for money exchange. Japanese bank ATMs famously close at night and on weekends at some locations. Convenience store ATMs (at 7-Eleven, etc.) have become the go-to for 24-hour cash access."},

  {type:"mc", q:"駅(えき) means:", opts:["train station","bank","hospital","post office"], ans:"train station",
   hint:"Japan's most essential transport hub, found in every town."},

  {type:"teach", trg:"公園(こうえん)", src:"park", pos:"noun", gender:null,
   note:"Public park for recreation. Japan has many beautiful parks, especially for cherry blossoms.\nKanji: 公園.",
   example:"A: 公園(こうえん)で何(なに)をしますか?\nB: 散歩(さんぽ)をします。",
   exampleSrc:"A: What do you do at the park?\nB: I take a walk.",
   funFact:"公園 combines 公 (public) and 園 (garden). Japanese parks are gathering places for hanami (cherry blossom viewing) in spring. Ueno Park in Tokyo has been a public park since 1873 and is home to a zoo, museums, and thousands of cherry trees."},

  {type:"teach", trg:"デパート", src:"department store", pos:"noun", gender:null,
   note:"Loanword from English 'department (store).' Written in katakana. High-end shopping.",
   example:"A: デパートで何(なに)を買(か)いますか?\nB: 服(ふく)を買(か)います。",
   exampleSrc:"A: What will you buy at the department store?\nB: I will buy clothes.",
   funFact:"Japanese department stores (depaato) are legendary for service. Staff bow as the store opens. The basement floor (depachika) has incredible gourmet food halls. Gift wrapping is free and elevated to an art form. Mitsukoshi, founded in 1673, is one of the oldest."},

  {type:"teach", trg:"あります", src:"to exist / there is (inanimate)", pos:"verb", gender:null,
   note:"For objects, buildings, plants. Living things that move use います instead.\nDictionary form: ある.",
   example:"A: 近(ちか)くにコンビニがありますか?\nB: はい、駅(えき)の前(まえ)にあります。",
   exampleSrc:"A: Is there a convenience store nearby?\nB: Yes, there is one in front of the station.",
   funFact:"Arimasu is one of the two existence verbs. It handles everything that cannot move on its own: books, buildings, mountains, trees, events. Even abstract things use arimasu: jikan ga arimasu (I have time), mondai ga arimasu (there is a problem)."},

  {type:"fb", s:"駅(えき)は{1}ですか?\n(Where is the station?)", a:"どこ", opts:["どこ","何(なに)","誰(だれ)","いくら"], sSrc:"Where is the station?",
   hint:"The question word asking about location or place."},

  {type:"teach", trg:"います", src:"to exist / there is (animate)", pos:"verb", gender:null,
   note:"For people, animals, fish, insects. Things that move on their own.\nDictionary form: いる.",
   example:"A: 公園(こうえん)に子供(こども)がいますか?\nB: はい、たくさんいます。",
   exampleSrc:"A: Are there children in the park?\nB: Yes, there are many.",
   funFact:"The animate/inanimate split is strict: a live fish uses imasu, but a fish on a plate uses arimasu. A robot uses arimasu (it is a machine), but some people humorously debate whether AI should use imasu. Plants always use arimasu despite being alive."},

  {type:"teach", trg:"どこ", src:"where?", pos:"pron", gender:null,
   note:"Location question word. Pattern: [place] は どこですか?",
   example:"A: トイレはどこですか?\nB: あちらです。",
   exampleSrc:"A: Where is the restroom?\nB: It is that way.",
   funFact:"Doko belongs to the ko-so-a-do system: koko (here), soko (there near you), asoko (over there), doko (where?). This four-way system is one of the most elegant structures in Japanese and applies to things, places, directions, and more."},

  {type:"mc", q:"Which verb do you use for 'there is a book'?", opts:["います","あります","食(た)べます","飲(の)みます"], ans:"あります",
   hint:"Books cannot move on their own, so they use the inanimate existence verb."},

  {type:"match", pairs:[{trg:"駅(えき)",src:"station"},{trg:"病院(びょういん)",src:"hospital"},{trg:"郵便局(ゆうびんきょく)",src:"post office"},{trg:"銀行(ぎんこう)",src:"bank"}]},

  {type:"match", pairs:[{trg:"公園(こうえん)",src:"park"},{trg:"デパート",src:"department store"},{trg:"あります",src:"exists (object)"},{trg:"います",src:"exists (person)"}]},

  {type:"fb", s:"公園(こうえん)に子供(こども)が{1}。\n(There are children in the park.)", a:"います", opts:["います","あります","行(い)きます","来(き)ます"], sSrc:"There are children in the park.",
   hint:"Children are living things that move, so use the animate existence verb."},

  {type:"mc", q:"郵便局(ゆうびんきょく) means:", opts:["bank","hospital","post office","school"], ans:"post office",
   hint:"The place marked with the \u3012 symbol where you send mail and packages."},

  {type:"tip", title:"Arimasu vs Imasu Quick Guide",
   text:"あります (arimasu) = inanimate things:\n本(ほん)があります。(There is a book.)\n駅(えき)があります。(There is a station.)\n\nいます (imasu) = animate things:\n人(ひと)がいます。(There is a person.)\n猫(ねこ)がいます。(There is a cat.)\n\nPattern: [place] に [thing] が あります/います。",
   deepDive:{title:"Edge cases",
    text:"Tricky cases for the arimasu/imasu split:\n\nPlants: あります (they do not move)\nFish in a tank: います (they swim)\nFish on a plate: あります (it is food now)\nRobots: あります (machines)\nTaxi: あります (it is a vehicle, even with a driver)\n\nWhen in doubt: can it walk away on its own? If yes, imasu. If no, arimasu."}},

  {type:"mc", q:"デパート means:", opts:["convenience store","supermarket","bookshop","department store"], ans:"department store",
   hint:"A katakana loanword from English, known for luxury goods and the famous basement food halls."},
]},

// ═══ L2: 上(うえ)と下(した) (Above & Below) ═══
{id:"jav2_u8l2", title:"上(うえ)と下(した)", icon:"\u2B06\uFE0F", xp:15, board:true, steps:[
  {type:"intro", title:"上(うえ)と下(した)",
   desc:"Learn location words to describe where things are in relation to other things. Above, below, inside, outside, in front, behind, and next to. These words use the pattern [reference] の [location].",
   goals:["Use location words: ue, shita, naka, soto, mae, ushiro, tonari","Build sentences with [thing] no [location] ni arimasu","Describe the position of objects and people"]},

  {type:"teach", trg:"上(うえ)", src:"above / on top", pos:"noun", gender:null,
   note:"Used as a position noun: 机(つくえ)の上(うえ) = on top of the desk.\nKanji: 上.",
   example:"A: 鍵(かぎ)はどこですか?\nB: 机(つくえ)の上(うえ)にあります。",
   exampleSrc:"A: Where are the keys?\nB: They are on top of the desk.",
   funFact:"上 is one of the simplest kanji: a line above a baseline means 'up/above.' It also means 'skill' (jouzu = skillful) and 'senior' (joshi = superior). The kanji appears in joukyuu (advanced level), ue (above), and kami (upper)."},

  {type:"teach", trg:"下(した)", src:"below / under", pos:"noun", gender:null,
   note:"Opposite of 上(うえ). Used as: 机(つくえ)の下(した) = under the desk.\nKanji: 下.",
   example:"A: 猫(ねこ)はどこですか?\nB: テーブルの下(した)にいます。",
   exampleSrc:"A: Where is the cat?\nB: It is under the table.",
   funFact:"下 is the mirror of 上: a line below the baseline means 'down/below.' It also appears in shita (below), kudaru (to descend), ka (under), and gesha (getting off a vehicle). Jouzu/heta (skillful/unskillful) use 上/下 as metaphors."},

  {type:"teach", trg:"中(なか)", src:"inside / in", pos:"noun", gender:null,
   note:"Used as: かばんの中(なか) = inside the bag.\nKanji: 中.",
   example:"A: パスポートはどこですか?\nB: かばんの中(なか)にあります。",
   exampleSrc:"A: Where is the passport?\nB: It is inside the bag.",
   funFact:"中 shows a line through the middle of a rectangle, representing something inside. It also means 'middle' and 'during': chuugoku (China = middle country), chuumon (order = middle of asking), jugyou-chuu (during class)."},

  {type:"teach", trg:"外(そと)", src:"outside", pos:"noun", gender:null,
   note:"Opposite of 中(なか). Used as: 家(いえ)の外(そと) = outside the house.\nKanji: 外.",
   example:"A: 子供(こども)はどこですか?\nB: 外(そと)で遊(あそ)んでいます。",
   exampleSrc:"A: Where are the children?\nB: They are playing outside.",
   funFact:"外 shows a crescent moon outside a box, representing 'outside/foreign.' It appears in gaikoku (foreign country), gaijin (foreigner, casual), sotogawa (outer side). The concept of soto (outside) is central to Japanese uchi-soto social thinking."},

  {type:"mc", q:"机(つくえ)の上(うえ) means:", opts:["on top of the desk","under the desk","next to the desk","inside the desk"], ans:"on top of the desk",
   hint:"Tsukue (d...) + no (possessive) + the word meaning 'above/on t....'"},

  {type:"teach", trg:"前(まえ)", src:"in front of / before", pos:"noun", gender:null,
   note:"Used for both space (in front of) and time (before).\nKanji: 前.",
   example:"A: 駅(えき)の前(まえ)にバス停(てい)があります。\nB: 便利(べんり)ですね。",
   exampleSrc:"A: There is a bus stop in front of the station.\nB: That is convenient.",
   funFact:"前 works for both space and time: eki no mae (in front of the station), san-nen mae (three years ago). This space-time dual meaning exists in many languages. In Japanese, mae no means 'previous' (mae no kaigi = the previous meeting)."},

  {type:"teach", trg:"後(うし)ろ", src:"behind / in back of", pos:"noun", gender:null,
   note:"Opposite of 前(まえ). Pattern: [reference] の後(うし)ろ.\nAlso written 後ろ.",
   example:"A: トイレはどこですか?\nB: この建物(たてもの)の後(うし)ろにあります。",
   exampleSrc:"A: Where is the restroom?\nB: It is behind this building.",
   funFact:"Ushiro is specifically spatial (behind/back). For time, Japanese uses ato (後, after) instead. Standing behind someone is ushiro ni tatsu. The concept of someone's ushiro (back) being a vulnerable spot appears in martial arts and samurai culture."},

  {type:"teach", trg:"隣(となり)", src:"next to / beside", pos:"noun", gender:null,
   note:"For things immediately adjacent. Pattern: [reference] の隣(となり).\nKanji: 隣.",
   example:"A: 銀行(ぎんこう)の隣(となり)に何(なに)がありますか?\nB: 郵便局(ゆうびんきょく)があります。",
   exampleSrc:"A: What is next to the bank?\nB: There is a post office.",
   funFact:"隣 is a complex kanji meaning 'neighboring.' Tonari no Totoro (My Neighbor Totoro) is one of the most famous uses. In Japanese apartments, your tonari (neighbor) relationship is important. It is customary to greet new neighbors with a small gift."},

  {type:"fb", s:"猫(ねこ)はテーブルの{1}にいます。\n(The cat is under the table.)", a:"下(した)", opts:["下(した)","上(うえ)","中(なか)","前(まえ)"], sSrc:"The cat is under the table.",
   hint:"The location word meaning 'below' or 'underneath.'"},

  {type:"teach", trg:"近(ちか)く", src:"near / nearby", pos:"noun", gender:null,
   note:"Used as: 駅(えき)の近(ちか)く = near the station. Often with に particle.\nKanji: 近く.",
   example:"A: コンビニは近(ちか)くにありますか?\nB: はい、駅(えき)の近(ちか)くにあります。",
   exampleSrc:"A: Is there a convenience store nearby?\nB: Yes, there is one near the station.",
   funFact:"近 shows a road (辶) with an axe (斤), suggesting the distance you can walk with a tool, hence 'near.' Chikaku often appears in real-life questions: chikaku ni eki wa arimasu ka? (Is there a station nearby?) is essential for travelers."},

  {type:"teach", trg:"間(あいだ)", src:"between", pos:"noun", gender:null,
   note:"Pattern: A と B の 間(あいだ) = between A and B.\nKanji: 間.",
   example:"A: 郵便局(ゆうびんきょく)はどこですか?\nB: 銀行(ぎんこう)と駅(えき)の間(あいだ)にあります。",
   exampleSrc:"A: Where is the post office?\nB: It is between the bank and the station.",
   funFact:"間 shows sunlight coming through a gate, representing the space between things. It appears in jikan (time = hour-between), ningen (human being = person-between), and aida (between). The concept of ma (space/gap) is central to Japanese aesthetics."},

  {type:"mc", q:"駅(えき)の前(まえ) means:", opts:["inside the station","in front of the station","behind the station","near the station"], ans:"in front of the station",
   hint:"Mae is the position word meaning 'before' or 'in f... of.'"},

  {type:"match", pairs:[{trg:"上(うえ)",src:"above"},{trg:"下(した)",src:"below"},{trg:"中(なか)",src:"inside"},{trg:"外(そと)",src:"outside"}]},

  {type:"match", pairs:[{trg:"前(まえ)",src:"in front of"},{trg:"後(うし)ろ",src:"behind"},{trg:"隣(となり)",src:"next to"},{trg:"近(ちか)く",src:"near"}]},

  {type:"fb", s:"銀行(ぎんこう)の{1}に郵便局(ゆうびんきょく)があります。\n(The post office is next to the bank.)", a:"隣(となり)", opts:["隣(となり)","上(うえ)","下(した)","中(なか)"], sSrc:"The post office is next to the bank.",
   hint:"The location word for things immediately adjacent to each other."},

  {type:"mc", q:"Which pattern is correct for 'between A and B'?", opts:["A の B の間(あいだ)","A に B の間(あいだ)","A と B の間(あいだ)","A は B の間(あいだ)"], ans:"A と B の間(あいだ)",
   hint:"The particle connecting two items before aida is the one meaning 'and.'"},

  {type:"tip", title:"Location Pattern",
   text:"The basic pattern for describing locations:\n[reference] の [position] に [thing] が あります/います。\n\nExamples:\n机(つくえ)の 上(うえ)に 本(ほん)が あります。(On the desk, there is a book.)\n公園(こうえん)の 中(なか)に 子供(こども)が います。(In the park, there are children.)\n駅(えき)の 前(まえ)に バス停(てい)が あります。(In front of the station, there is a bus stop.)",
   deepDive:{title:"Word order flexibility",
    text:"Japanese word order is flexible as long as the verb stays at the end:\n\n机(つくえ)の上(うえ)に 本(ほん)が あります。= On the desk, there is a book.\n本(ほん)は 机(つくえ)の上(うえ)に あります。= The book is on the desk.\n\nBoth are correct. The first emphasizes WHERE. The second emphasizes WHAT. The particle changes (ga vs wa) signal the emphasis shift."}},

  {type:"mc", q:"かばんの中(なか)にあります means:", opts:["It is on the bag","It is near the bag","It is behind the bag","It is inside the bag"], ans:"It is inside the bag",
   hint:"Naka means the interior or i... of something."},
]},

// ═══ L3: 予約(よやく) (Making Appointments) ═══
{id:"jpv2_u8l_apt", title:"予約(よやく)", icon:"📅", xp:15, board:true, steps:[
  {type:"intro", title:"予約(よやく)",
   desc:"Learn to make, confirm, and reschedule appointments in Japanese. These skills are essential for clinics, dentists, and restaurants.",
   goals:["Make appointments by phone","Confirm and cancel appointments","Reschedule a visit","Use polite Japanese"]},

  {type:"teach", trg:"予約(よやく)", src:"appointment / reservation", pos:"noun", gender:null,
   note:"Used for doctor visits, restaurants, hotels, and more. Essential in daily life.\nKanji: 予約.",
   example:"A: 予約(よやく)はありますか?\nB: はい、予約(よやく)があります。",
   exampleSrc:"A: Do you have a reservation?\nB: Yes, I have a reservation.",
   funFact:"予 means 'in advance' and 約 means 'promise/agreement.' Together they mean a promise made in advance. In Japan, making a yoyaku is standard for popular restaurants, clinics, and salons. Walk-in culture is less common than in many other countries."},

  {type:"teach", trg:"予約(よやく)する", src:"to make an appointment", pos:"verb", gender:null,
   note:"A suru-verb. Polite form: 予約(よやく)します. Negative: 予約(よやく)しません.\nKanji: 予約.",
   example:"A: 病院(びょういん)を予約(よやく)しましたか?\nB: はい、明日(あした)予約(よやく)しました。",
   exampleSrc:"A: Did you make a hospital appointment?\nB: Yes, I made one for tomorrow.",
   funFact:"Suru-verbs are one of the most productive patterns in Japanese. You take a noun (yoyaku, benkyou, ryokou) and add suru to make it a verb. This lets you borrow loanwords and use them as verbs: meeru suru (to email), bideo suru (to video), etc."},

  {type:"teach", trg:"確認(かくにん)する", src:"to confirm", pos:"verb", gender:null,
   note:"A suru-verb used for confirming details, bookings, and information.\nKanji: 確認.",
   example:"A: 予約(よやく)を確認(かくにん)したいです。\nB: お名前(なまえ)をどうぞ。",
   exampleSrc:"A: I would like to confirm my appointment.\nB: Your name please.",
   funFact:"確 means 'certain/firm' and 認 means 'to acknowledge/recognize.' Kakunin suru (to confirm) is very common in business Japanese. You will also hear it in daily settings: densha no jikan wo kakunin suru (confirm the train time)."},

  {type:"mc", q:"予約(よやく) means:", opts:["appointment / reservation","confirmation","cancellation","change"], ans:"appointment / reservation",
   hint:"The word made of 予 (in advance) and 約 (promise), used at restaurants and clinics."},

  {type:"teach", trg:"キャンセルする", src:"to cancel", pos:"verb", gender:null,
   note:"Loanword from English 'cancel,' written in katakana. Suru makes it a verb.",
   example:"A: 予約(よやく)をキャンセルしたいのですが。\nB: わかりました。",
   exampleSrc:"A: I would like to cancel my reservation.\nB: I understand.",
   funFact:"Japanese often borrows English words for modern concepts. Kyanseru (cancel) is universal and understood everywhere. The polite construction ...したいのですが (I would like to...) softens requests. The のですが at the end signals you are about to make a polite request."},

  {type:"teach", trg:"変更(へんこう)する", src:"to change / reschedule", pos:"verb", gender:null,
   note:"Used to change dates, times, or details of an appointment.\nKanji: 変更.",
   example:"A: 予約(よやく)の日時(にちじ)を変更(へんこう)できますか?\nB: はい、可能(かのう)です。",
   exampleSrc:"A: Can I change the date and time of my appointment?\nB: Yes, that is possible.",
   funFact:"変 means 'change/strange' and 更 means 'renew/again.' Henkou suru is the formal word for changing a reservation. In everyday speech you might also hear kaeru (to change, casual) but henkou suru is expected in formal service contexts."},

  {type:"teach", trg:"予約(よやく)したいのですが", src:"I would like to make an appointment", pos:"intj", gender:null,
   note:"A polite phone opener. のですが softens the request and invites a response.\nUse this when calling a clinic or restaurant.",
   example:"A: 予約(よやく)したいのですが。\nB: はい、どのような用件(ようけん)でしょうか?",
   exampleSrc:"A: I would like to make an appointment.\nB: Of course, what is the reason for your visit?",
   funFact:"The ending のですが is a classic Japanese politeness strategy. It states your intention but leaves the sentence unfinished, implying 'please help me.' This is softer than a direct request. Using です alone sounds slightly abrupt; のですが sounds considerate and customer-ready."},

  {type:"teach", trg:"空(あ)いている時間(じかん)はありますか", src:"What times are available?", pos:"intj", gender:null,
   note:"Essential when booking. 空(あ)いている = open/available. 時間(じかん) = time.\nKanji: 空, 時間.",
   example:"A: 空(あ)いている時間(じかん)はありますか?\nB: 午後(ごご)二時(にじ)はいかがですか?",
   exampleSrc:"A: What times are available?\nB: How about 2 PM?",
   funFact:"空(あ)いている literally means 'is open/empty' from 空く (to become empty/open). The same verb describes an empty seat (seki ga aite iru) or a free time slot. Time vocabulary from unit 3 combines with this phrase for natural booking conversations."},

  {type:"tip", title:"Making Appointments by Phone",
   text:"A typical phone appointment call in Japanese:\n\n1. 予約(よやく)したいのですが。(I would like to make an appointment.)\n2. 空(あ)いている時間(じかん)はありますか? (What times are available?)\n3. 木曜日(もくようび)の午後(ごご)はいかがですか? (How about Thursday afternoon?)\n4. では、二時(にじ)に予約(よやく)をお願(ねが)いします。(Then please book me in at 2 PM.)\n5. 確認(かくにん)ありがとうございます。(Thank you for confirming.)",
   deepDive:{title:"Polite request endings",
    text:"Polite softeners used in appointment contexts:\n\n...したいのですが = I would like to... (soft request opener)\n...をお願(ねが)いします = Please do... (firm but polite request)\n...はいかがですか = How about...? (offering a suggestion politely)\n...でよろしいでしょうか = Is... acceptable? (formal confirmation)\n\nThese patterns appear throughout service interactions in Japan. Mastering them makes you sound natural and respectful in any booking situation."}},

  {type:"match", pairs:[{trg:"予約(よやく)する",src:"to make an appointment"},{trg:"確認(かくにん)する",src:"to confirm"},{trg:"キャンセルする",src:"to cancel"},{trg:"変更(へんこう)する",src:"to reschedule"}]},

  {type:"fb", s:"予約(よやく)を{1}したいのですが。\n(I would like to cancel my appointment.)", a:"キャンセル", opts:["キャンセル","確認(かくにん)","変更(へんこう)","予約(よやく)"], sSrc:"I would like to cancel my appointment.",
   hint:"The katakana loanword from English meaning to call off a booking."},

  {type:"fb", s:"空(あ)いている{1}はありますか?\n(What times are available?)", a:"時間(じかん)", opts:["時間(じかん)","予約(よやく)","名前(なまえ)","場所(ばしょ)"], sSrc:"What times are available?",
   hint:"The word for 'time' that you ask about when booking."},

  {type:"mc", q:"Which phrase opens a polite phone appointment request?", opts:["予約(よやく)じゃない","予約(よやく)したいのですが","予約(よやく)はいいです","予約(よやく)ありがとう"], ans:"予約(よやく)したいのですが",
   hint:"The polite opener that states your intention with the soft のですが ending."},

  {type:"mc", q:"変更(へんこう)する means:", opts:["to confirm","to cancel","to reschedule / change","to reserve"], ans:"to reschedule / change",
   hint:"The verb built from 変 and 更 (renew), used when moving an appointment to a new time."},
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
