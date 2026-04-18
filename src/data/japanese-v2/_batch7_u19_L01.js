// Batch 7 – Unit 19 (B1.2 Conditionals): Comparison & Evaluation Words
const BATCH7_L1 = {
  id:"jav2_u19l_b7_1", title:"比較(ひかく)と評価(ひょうか)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"比較(ひかく)と評価(ひょうか)",
     desc:"Learn vocabulary for comparing things, evaluating quality, and expressing preferences. These words work naturally with conditional grammar to discuss choices and alternatives.",
     goals:["Compare items using degree vocabulary","Express evaluations and judgments","Use preference and ranking expressions"]},

    {type:"teach", trg:"比(くら)べる", src:"to compare", pos:"verb", gender:null,
     note:"Group 2 verb. AとBを比(くら)べる = to compare A and B.\n比較(ひかく) = comparison (noun).",
     example:"A: 値段(ねだん)を比(くら)べてから買(か)いましょう。\nB: そうですね。いくつかの店(みせ)で比(くら)べます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Let us compare prices before buying.\nB: Yes. I will compare at several stores.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"比(くら)べる is essential in Japan's consumer culture. Japanese shoppers meticulously 比(くら)べる before purchasing. 価格(かかく).com (kakaku.com) is Japan's largest price comparison site. The habit of careful comparison extends to choosing schools, jobs, and even marriage partners."},

    {type:"teach", trg:"優秀(ゆうしゅう)", src:"excellent / outstanding", pos:"adj", gender:null,
     note:"Na-adjective. 優秀(ゆうしゅう)な成績(せいせき) = excellent grades.\n優秀(ゆうしゅう)な人材(じんざい) = outstanding talent.",
     example:"A: この学生(がくせい)は優秀(ゆうしゅう)ですね。\nB: はい、毎回(まいかい)満点(まんてん)です。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: This student is excellent.\nB: Yes, perfect scores every time.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"優秀(ゆうしゅう) combines 優 (superior/gentle) and 秀 (excel). Being called 優秀(ゆうしゅう) is high praise in Japan's academic culture. School report cards use a grading system where 優(ゆう) is the highest mark, above 良(りょう) (good) and 可(か) (acceptable)."},

    {type:"teach", trg:"普通(ふつう)", src:"normal / ordinary / average", pos:"adj", gender:null,
     note:"Na-adjective/adverb. 普通(ふつう)の人(ひと) = an ordinary person.\n普通(ふつう)においしい = just normally delicious.",
     example:"A: 味(あじ)はどうですか？\nB: 普通(ふつう)ですね。特別(とくべつ)ではないです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: How does it taste?\nB: It is ordinary. Nothing special.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"普通(ふつう) is loaded with meaning. Calling something 普通(ふつう) can be neutral or slightly negative (merely average). 普通(ふつう)の幸(しあわ)せ (ordinary happiness) is positive, meaning a simple contented life. Train classification: 普通(ふつう) = local (slowest). In conversation, 普通(ふつう)にすごい means 'genuinely impressive.'"},

    {type:"teach", trg:"珍(めずら)しい", src:"rare / unusual", pos:"adj", gender:null,
     note:"I-adjective. 珍(めずら)しいもの = a rare thing.\n珍(めずら)しいですね = how unusual.",
     example:"A: ここでは白(しろ)い孔雀(くじゃく)が見(み)られます。\nB: 珍(めずら)しいですね！\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: You can see white peacocks here.\nB: How rare!\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"珍(めずら)しい triggers curiosity and positive interest. Japanese people love 珍(めずら)しい things: unusual foods, rare limited editions, unique regional products. Tourist attractions advertise 珍(めずら)しい experiences. The kanji 珍 also appears in 珍味(ちんみ) (delicacy) and 珍事(ちんじ) (unusual event)."},

    {type:"teach", trg:"十分(じゅうぶん)", src:"sufficient / enough", pos:"adj", gender:null,
     note:"Na-adjective/adverb. 十分(じゅうぶん)です = it is enough.\n十分(じゅうぶん)に気(き)をつけて = be careful enough.",
     example:"A: 時間(じかん)は十分(じゅうぶん)ありますか？\nB: はい、十分(じゅうぶん)です。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Do you have enough time?\nB: Yes, it is sufficient.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"十分(じゅうぶん) literally means 'ten parts' (10/10 = complete/full). The expression もう十分(じゅうぶん)です (that is already enough) is used to decline more food, help, or information. Japanese modesty means people often say 十分(じゅうぶん) even when they might want more."},

    {type:"teach", trg:"足(た)りない", src:"not enough / insufficient", pos:"adj", gender:null,
     note:"Negative of 足(た)りる (to suffice). 時間(じかん)が足(た)りない = not enough time.\nお金(かね)が足(た)りない = not enough money.",
     example:"A: 眠(ねむ)る時間(じかん)が足(た)りません。\nB: もう少(すこ)し早(はや)く寝(ね)たほうがいいですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I do not have enough sleep time.\nB: You should go to bed a bit earlier.\nA: How was it?\nB: It was very good.",
     funFact:"足(た)りない uses 足 (foot/sufficient). Not having enough 'footing.' In Japanese business, 準備(じゅんび)が足(た)りない (preparation is insufficient) is a serious criticism. The phrase 足(た)るを知(し)る (know sufficiency) from Lao Tzu is a Japanese philosophical ideal about contentment."},

    {type:"teach", trg:"優(すぐ)れた", src:"superior / outstanding", pos:"adj", gender:null,
     note:"From 優(すぐ)れる (to excel). 優(すぐ)れた技術(ぎじゅつ) = superior technology.\n優(すぐ)れた作品(さくひん) = an excellent work.",
     example:"A: 日本(にほん)の技術(ぎじゅつ)は優(すぐ)れていますね。\nB: 特(とく)にものづくりの技術(ぎじゅつ)は世界一(せかいいち)です。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Japanese technology is outstanding.\nB: Especially manufacturing technology is world-class.\nA: When was it?\nB: It was last summer.",
     funFact:"優(すぐ)れた uses the same kanji as 優秀(ゆうしゅう) but reads differently. Japan's pride in 優(すぐ)れた技術(ぎじゅつ) (superior technology) drives ものづくり (manufacturing) culture. From bullet trains to toilets, Japanese engineering aims for 優(すぐ)れた quality. 'Made in Japan' carries this reputation."},

    {type:"teach", trg:"劣(おと)る", src:"inferior / falling behind", pos:"verb", gender:null,
     note:"Group 1 verb. Opposite of 優(すぐ)れる.\nAに劣(おと)らない = not inferior to A.",
     example:"A: この製品(せいひん)は他(ほか)のに劣(おと)りません。\nB: それなら買(か)いましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: This product is not inferior to others.\nB: Then let us buy it.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"劣(おと)る is used carefully because it can offend. Japanese people prefer indirect comparisons. Instead of saying 'A is inferior to B,' they say 'A has a different strong point.' The phrase 勝(まさ)るとも劣(おと)らない (not inferior, if not superior) is a common praise that avoids direct ranking."},

    {type:"teach", trg:"違(ちが)い", src:"difference", pos:"noun", gender:null,
     note:"違(ちが)う = to differ (verb). 大(おお)きな違(ちが)い = a big difference.\n違(ちが)いがわかる = to notice the difference.",
     example:"A: この二(ふた)つの違(ちが)いは何(なに)ですか？\nB: 値段(ねだん)とサイズが違(ちが)います。\nA: そうですか。良(よ)かったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: What is the difference between these two?\nB: The price and size are different.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"違(ちが)い is central to Japanese aesthetics and cuisine. 違(ちが)いがわかる人(ひと) (a person who notices differences) is a compliment for refined taste. Wine, tea, and food connoisseurs are valued for detecting subtle 違(ちが)い. The phrase 一味(ひとあじ)違(ちが)う (a different flavor) means 'uniquely special.'"},

    {type:"teach", trg:"似(に)ている", src:"similar / resembling", pos:"verb", gender:null,
     note:"て-form of 似(に)る (to resemble). AとBは似(に)ている = A and B are similar.\n似(に)ていない = not similar.",
     example:"A: この二人(ふたり)は似(に)ていますね。\nB: 兄弟(きょうだい)ですよ。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: These two people look similar.\nB: They are siblings.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"似(に)ている covers physical resemblance, behavioral similarity, and conceptual likeness. Japanese has a rich vocabulary for types of similarity: そっくり (spitting image), 同(おな)じ (same), 類(たぐ)いのない (unparalleled). Saying AとBが似(に)ている can start interesting conversations about hidden connections."},

    {type:"teach", trg:"別(べつ)に", src:"not particularly / nothing special", pos:"adv", gender:null,
     note:"Often used to dismiss or deflect.\n別(べつ)にいいです = I don't particularly mind.",
     example:"A: どうしたの？\nB: 別(べつ)に。何(なん)でもない。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What's wrong?\nB: Nothing special. It's nothing.\nA: How long did it take?\nB: About two hours.",
     funFact:"別(べつ)に is the quintessential Japanese deflection. Teenagers use it constantly. 別(べつ)に combined with a shrug means 'I don't care' or 'it's nothing.' In anime, tsundere characters say 別(べつ)に before reluctantly showing they DO care. It is simultaneously dismissive and revealing."},

    {type:"teach", trg:"特徴(とくちょう)", src:"characteristic / feature", pos:"noun", gender:null,
     note:"特徴的(とくちょうてき) = characteristic (adjective).\nこの製品(せいひん)の特徴(とくちょう)は = the feature of this product is.",
     example:"A: このスマホの特徴(とくちょう)は何(なに)ですか？\nB: カメラが特(とく)に優(すぐ)れています。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What is the feature of this smartphone?\nB: The camera is especially outstanding.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"特徴(とくちょう) is essential in product descriptions, self-introductions, and academic writing. Japanese product marketing emphasizes 特徴(とくちょう) (unique features) rather than superiority claims. School essays ask students to describe their 特徴(とくちょう) (personal characteristics). Knowing your own 特徴(とくちょう) shows self-awareness."},

    // Quiz steps
    {type:"mc", q:"普通(ふつう) for trains means:",
     opts:["Local (stops at every station)","Express","Bullet train","Freight"],
     ans:"Local (stops at every station)",
     hint:"In the train classification system, this word describes the slowest service that s... everywhere."},

    {type:"match", pairs:[
      {trg:"比(くら)べる", src:"to compare"},
      {trg:"珍(めずら)しい", src:"rare"},
      {trg:"十分(じゅうぶん)", src:"sufficient"},
      {trg:"足(た)りない", src:"not enough"},
      {trg:"違(ちが)い", src:"difference"}
    ]},

    {type:"fb", s:"この学生(がくせい)の成績(せいせき)は{1}です。満点(まんてん)ばかりです。",
     a:["優秀(ゆうしゅう)"],
     opts:["優秀(ゆうしゅう)","普通(ふつう)","別(べつ)に","珍(めずら)しい"],
     hint:"Perfect scores every time. This na-adjective means 'excellent' or 'outstanding.'",
     sSrc:"This student's grades are {1}. Perfect scores only."},

    {type:"mc", q:"別(べつ)に is often used by:",
     opts:["Teenagers deflecting questions","Business executives in meetings","Teachers praising students","Doctors diagnosing patients"],
     ans:"Teenagers deflecting questions",
     hint:"This word is the quintessential dismissive response meaning 'nothing special' or 'whatever.'"},

    {type:"fb", s:"この二人(ふたり)はよく{1}いますね。兄弟(きょうだい)ですか？",
     a:["似(に)て"],
     opts:["似(に)て","違(ちが)って","比(くら)べて","劣(おと)って"],
     hint:"These two people look alike. This verb means 'to resemble.'",
     sSrc:"These two really {1} each other. Are they siblings?"},

    {type:"mc", q:"足(た)るを知(し)る teaches:",
     opts:["Contentment with what you have","Striving for more","Comparing with others","Working harder"],
     ans:"Contentment with what you have",
     hint:"This philosophical concept from Lao Tzu, embraced in Japanese culture, is about knowing when enough is enough."},

    {type:"match", pairs:[
      {trg:"優秀(ゆうしゅう)", src:"excellent"},
      {trg:"優(すぐ)れた", src:"superior"},
      {trg:"劣(おと)る", src:"inferior"},
      {trg:"似(に)ている", src:"similar"},
      {trg:"特徴(とくちょう)", src:"characteristic"}
    ]},

    {type:"fb", s:"この製品(せいひん)の{1}はカメラの性能(せいのう)です。",
     a:["特徴(とくちょう)"],
     opts:["特徴(とくちょう)","違(ちが)い","普通(ふつう)","珍(めずら)しい"],
     hint:"The standout feature of this product is its camera. This noun means 'characteristic.'",
     sSrc:"The {1} of this product is camera performance."}
  ,{type:"match",pairs:[{trg:"普通(ふつう)",src:"normal / ordinary / average"},{trg:"別(べつ)に",src:"not particularly / nothing special"}]}]
};
export default BATCH7_L1;
