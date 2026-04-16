// Batch 7 – Unit 19 (B1.2 Conditionals): Comparison & Evaluation Words
const BATCH7_L1 = {
  id:"jav2_u19l_b7_1", title:"ひかくとひょうか", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ひかくとひょうか",
     desc:"Learn vocabulary for comparing things, evaluating quality, and expressing preferences. These words work naturally with conditional grammar to discuss choices and alternatives.",
     goals:["Compare items using degree vocabulary","Express evaluations and judgments","Use preference and ranking expressions"]},

    {type:"teach", trg:"くらべる", src:"to compare", pos:"verb", gender:null,
     note:"Group 2 verb. AとBをくらべる = to compare A and B.\nひかく = comparison (noun).",
     example:"A: ねだんをくらべてからかいましょう。\nB: そうですね。いくつかのみせでくらべます。",
     exampleSrc:"A: Let us compare prices before buying.\nB: Yes. I will compare at several stores.",
     funFact:"くらべる (比べる) is essential in Japan's consumer culture. Japanese shoppers meticulously くらべる before purchasing. 価格.com (kakaku.com) is Japan's largest price comparison site. The habit of careful comparison extends to choosing schools, jobs, and even marriage partners."},

    {type:"teach", trg:"ゆうしゅう", src:"excellent / outstanding", pos:"adj", gender:null,
     note:"Na-adjective. ゆうしゅうなせいせき = excellent grades.\nゆうしゅうなじんざい = outstanding talent.",
     example:"A: このがくせいはゆうしゅうですね。\nB: はい、まいかいまんてんです。",
     exampleSrc:"A: This student is excellent.\nB: Yes, perfect scores every time.",
     funFact:"ゆうしゅう (優秀) combines 優 (superior/gentle) and 秀 (excel). Being called ゆうしゅう is high praise in Japan's academic culture. School report cards use a grading system where 優 (yuu) is the highest mark, above 良 (ryou, good) and 可 (ka, acceptable)."},

    {type:"teach", trg:"ふつう", src:"normal / ordinary / average", pos:"adj", gender:null,
     note:"Na-adjective/adverb. ふつうのひと = an ordinary person.\nふつうにおいしい = just normally delicious.",
     example:"A: あじはどうですか？\nB: ふつうですね。とくべつではないです。",
     exampleSrc:"A: How does it taste?\nB: It is ordinary. Nothing special.",
     funFact:"ふつう (普通) is loaded with meaning. Calling something ふつう can be neutral or slightly negative (merely average). ふつうのしあわせ (ordinary happiness) is positive, meaning a simple contented life. Train classification: ふつう = local (slowest). In conversation, ふつうにすごい means 'genuinely impressive.'"},

    {type:"teach", trg:"めずらしい", src:"rare / unusual", pos:"adj", gender:null,
     note:"I-adjective. めずらしいもの = a rare thing.\nめずらしいですね = how unusual.",
     example:"A: ここではしろいくじゃくがみられます。\nB: めずらしいですね！",
     exampleSrc:"A: You can see white peacocks here.\nB: How rare!",
     funFact:"めずらしい (珍しい) triggers curiosity and positive interest. Japanese people love めずらしい things: unusual foods, rare limited editions, unique regional products. Tourist attractions advertise めずらしい experiences. The word 珍 also appears in 珍味 (chinmi, delicacy) and 珍事 (chinji, unusual event)."},

    {type:"teach", trg:"じゅうぶん", src:"sufficient / enough", pos:"adj", gender:null,
     note:"Na-adjective/adverb. じゅうぶんです = it is enough.\nじゅうぶんにきをつけて = be careful enough.",
     example:"A: じかんはじゅうぶんありますか？\nB: はい、じゅうぶんです。",
     exampleSrc:"A: Do you have enough time?\nB: Yes, it is sufficient.",
     funFact:"じゅうぶん (十分) literally means 'ten parts' (10/10 = complete/full). The expression もうじゅうぶんです (that is already enough) is used to decline more food, help, or information. Japanese modesty means people often say じゅうぶん even when they might want more."},

    {type:"teach", trg:"たりない", src:"not enough / insufficient", pos:"adj", gender:null,
     note:"Negative of たりる (to suffice). じかんがたりない = not enough time.\nおかねがたりない = not enough money.",
     example:"A: ねむるじかんがたりません。\nB: もうすこしはやくねたほうがいいですよ。",
     exampleSrc:"A: I do not have enough sleep time.\nB: You should go to bed a bit earlier.",
     funFact:"たりない (足りない) uses 足 (foot/sufficient). Not having enough 'footing.' In Japanese business, 準備が足りない (preparation is insufficient) is a serious criticism. The phrase 足るを知る (たるをしる, know sufficiency) from Lao Tzu is a Japanese philosophical ideal about contentment."},

    {type:"teach", trg:"すぐれた", src:"superior / outstanding", pos:"adj", gender:null,
     note:"From すぐれる (to excel). すぐれたぎじゅつ = superior technology.\nすぐれたさくひん = an excellent work.",
     example:"A: にほんのぎじゅつはすぐれていますね。\nB: とくにものづくりのぎじゅつは世界一です。",
     exampleSrc:"A: Japanese technology is outstanding.\nB: Especially manufacturing technology is world-class.",
     funFact:"すぐれた (優れた) uses the same kanji as ゆうしゅう but reads differently. Japan's pride in すぐれたぎじゅつ (superior technology) drives ものづくり (manufacturing) culture. From bullet trains to toilets, Japanese engineering aims for すぐれた quality. 'Made in Japan' carries this reputation."},

    {type:"teach", trg:"おとる", src:"inferior / falling behind", pos:"verb", gender:null,
     note:"Group 1 verb. Opposite of すぐれる.\nAにおとらない = not inferior to A.",
     example:"A: このせいひんはほかのにおとりません。\nB: それならかいましょう。",
     exampleSrc:"A: This product is not inferior to others.\nB: Then let us buy it.",
     funFact:"おとる (劣る) is used carefully because it can offend. Japanese people prefer indirect comparisons. Instead of saying 'A is inferior to B,' they say 'A has a different strong point.' The phrase 勝るとも劣らない (not inferior, if not superior) is a common praise that avoids direct ranking."},

    {type:"teach", trg:"ちがい", src:"difference", pos:"noun", gender:null,
     note:"ちがう = to differ (verb). おおきなちがい = a big difference.\nちがいがわかる = to notice the difference.",
     example:"A: このふたつのちがいはなんですか？\nB: ねだんとサイズがちがいます。",
     exampleSrc:"A: What is the difference between these two?\nB: The price and size are different.",
     funFact:"ちがい (違い) is central to Japanese aesthetics and cuisine. ちがいがわかるひと (a person who notices differences) is a compliment for refined taste. Wine, tea, and food connoisseurs are valued for detecting subtle ちがい. The phrase 一味違う (ひとあじちがう, a different flavor) means 'uniquely special.'"},

    {type:"teach", trg:"にている", src:"similar / resembling", pos:"verb", gender:null,
     note:"て-form of にる (to resemble). AとBはにている = A and B are similar.\nにていない = not similar.",
     example:"A: このふたりはにていますね。\nB: きょうだいですよ。",
     exampleSrc:"A: These two people look similar.\nB: They are siblings.",
     funFact:"にている (似ている) covers physical resemblance, behavioral similarity, and conceptual likeness. Japanese has a rich vocabulary for types of similarity: そっくり (spitting image), おなじ (same), たぐいのない (unparalleled). Saying AとBがにている can start interesting conversations about hidden connections."},

    {type:"teach", trg:"べつに", src:"not particularly / nothing special", pos:"adv", gender:null,
     note:"Often used to dismiss or deflect.\nべつにいいです = I don't particularly mind.",
     example:"A: どうしたの？\nB: べつに。なんでもない。",
     exampleSrc:"A: What's wrong?\nB: Nothing special. It's nothing.",
     funFact:"べつに is the quintessential Japanese deflection. Teenagers use it constantly. べつに combined with a shrug means 'I don't care' or 'it's nothing.' In anime, tsundere characters say べつに before reluctantly showing they DO care. It is simultaneously dismissive and revealing."},

    {type:"teach", trg:"とくちょう", src:"characteristic / feature", pos:"noun", gender:null,
     note:"とくちょうてき = characteristic (adjective).\nこのせいひんのとくちょうは = the feature of this product is.",
     example:"A: このスマホのとくちょうはなんですか？\nB: カメラがとくにすぐれています。",
     exampleSrc:"A: What is the feature of this smartphone?\nB: The camera is especially outstanding.",
     funFact:"とくちょう (特徴) is essential in product descriptions, self-introductions, and academic writing. Japanese product marketing emphasizes とくちょう (unique features) rather than superiority claims. School essays ask students to describe their とくちょう (personal characteristics). Knowing your own とくちょう shows self-awareness."},

    // Quiz steps
    {type:"mc", q:"ふつう for trains means:",
     opts:["Local (stops at every station)","Express","Bullet train","Freight"],
     ans:"Local (stops at every station)",
     hint:"In the train classification system, this word describes the slowest service that s... everywhere."},

    {type:"match", pairs:[
      {trg:"くらべる", src:"to compare"},
      {trg:"めずらしい", src:"rare"},
      {trg:"じゅうぶん", src:"sufficient"},
      {trg:"たりない", src:"not enough"},
      {trg:"ちがい", src:"difference"}
    ]},

    {type:"fb", s:"このがくせいのせいせきは{1}です。まんてんばかりです。",
     a:["ゆうしゅう"],
     opts:["ゆうしゅう","ふつう","べつに","めずらしい"],
     hint:"Perfect scores every time. This na-adjective means 'excellent' or 'outstanding.'",
     sSrc:"This student's grades are {1}. Perfect scores only."},

    {type:"mc", q:"べつに is often used by:",
     opts:["Teenagers deflecting questions","Business executives in meetings","Teachers praising students","Doctors diagnosing patients"],
     ans:"Teenagers deflecting questions",
     hint:"This word is the quintessential dismissive response meaning 'nothing special' or 'whatever.'"},

    {type:"fb", s:"このふたりはよく{1}いますね。きょうだいですか？",
     a:["にて"],
     opts:["にて","ちがって","くらべて","おとって"],
     hint:"These two people look alike. This verb means 'to resemble.'",
     sSrc:"These two really {1} each other. Are they siblings?"},

    {type:"mc", q:"足るを知る (たるをしる) teaches:",
     opts:["Contentment with what you have","Striving for more","Comparing with others","Working harder"],
     ans:"Contentment with what you have",
     hint:"This philosophical concept from Lao Tzu, embraced in Japanese culture, is about knowing when enough is enough."},

    {type:"match", pairs:[
      {trg:"ゆうしゅう", src:"excellent"},
      {trg:"すぐれた", src:"superior"},
      {trg:"おとる", src:"inferior"},
      {trg:"にている", src:"similar"},
      {trg:"とくちょう", src:"characteristic"}
    ]},

    {type:"fb", s:"このせいひんの{1}はカメラのせいのうです。",
     a:["とくちょう"],
     opts:["とくちょう","ちがい","ふつう","めずらしい"],
     hint:"The standout feature of this product is its camera. This noun means 'characteristic.'",
     sSrc:"The {1} of this product is camera performance."}
  ]
};
export default BATCH7_L1;
