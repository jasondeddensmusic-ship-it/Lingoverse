// Batch 7 – Unit 13 (B1.1 Experience): Travel Experience Vocabulary
const BATCH7_L1 = {
  id:"jav2_u13l_b7_1", title:"旅(たび)の体験(たいけん)", icon:"✈️", xp:15, board:true,
  steps:[
    {type:"intro", title:"旅(たび)の体験(たいけん)",
     desc:"Build vocabulary for describing travel experiences. These words help you talk about trips, accommodations, and memorable moments, connecting naturally with the experience grammar of this unit.",
     goals:["Describe travel destinations and activities","Use accommodation and transportation vocabulary","Share travel memories and impressions"]},

    {type:"teach", trg:"目的地(もくてきち)", src:"destination", pos:"noun", gender:null,
     note:"目的(もくてき) = purpose, 地(ち) = place.\n旅行(りょこう)の目的地(もくてきち) = travel destination.",
     example:"A: 目的地(もくてきち)はどこですか？\nB: 京都(きょうと)です。お寺(てら)を見(み)たいです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What is your destination?\nB: Kyoto. I want to see temples.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"目的地(もくてきち) literally means 'purpose place.' Japanese travel culture values the journey (旅(たび)) as much as the 目的地(もくてきち). The concept of 旅(たび) carries a poetic, almost spiritual meaning that 'travel' or 'trip' does not fully capture. Basho's haiku journeys embody this spirit."},

    {type:"teach", trg:"旅館(りょかん)", src:"traditional Japanese inn", pos:"noun", gender:null,
     note:"Includes meals, onsen, and futon.\n旅館(りょかん)に泊(と)まる = to stay at a ryokan.",
     example:"A: 旅館(りょかん)に泊(と)まったことがありますか？\nB: はい、温泉旅館(おんせんりょかん)に泊(と)まりました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Have you stayed at a ryokan?\nB: Yes, I stayed at a hot spring ryokan.\nA: How was it?\nB: It was very good.",
     funFact:"旅館(りょかん) are the traditional alternative to hotels. They include dinner (夕食(ゆうしょく)) and breakfast (朝食(ちょうしょく)), often featuring local specialties. Guests wear 浴衣(ゆかた), sleep on 布団(ふとん), and bathe in 温泉(おんせん). The おもてなし (hospitality) at high-end 旅館(りょかん) is world-class."},

    {type:"teach", trg:"お土産(おみやげ)", src:"souvenir", pos:"noun", gender:null,
     note:"お土産(おみやげ)を買(か)う = to buy souvenirs.\nExpected to bring back for colleagues and family.",
     example:"A: お土産(おみやげ)は何(なに)を買(か)いましたか？\nB: もみじまんじゅうを買(か)いました。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: What souvenirs did you buy?\nB: I bought maple leaf cakes.\nA: When was it?\nB: It was last summer.",
     funFact:"お土産(おみやげ) culture is a serious social obligation. You MUST bring back お土産(おみやげ) for colleagues, family, and close friends after any trip. Each region has 名物(めいぶつ) (famous local products). Airports and stations have enormous お土産(おみやげ) sections. Forgetting お土産(おみやげ) is a social error."},

    {type:"teach", trg:"景色(けしき)", src:"scenery / landscape", pos:"noun", gender:null,
     note:"景色(けしき)がきれい = the scenery is beautiful.\n景色(けしき)を楽(たの)しむ = to enjoy the scenery.",
     example:"A: ここの景色(けしき)はすばらしいですね。\nB: はい、日本三景(にほんさんけい)の一(ひと)つです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: The scenery here is wonderful.\nB: Yes, it is one of Japan's three most scenic views.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"日本三景(にほんさんけい) (Japan's Three Views) are Matsushima (pine islands), Amanohashidate (heaven's bridge), and Miyajima (shrine island). Ranking things in threes (三大(さんだい)) is a Japanese tradition. Every category has its top three: three castles, three gardens, three festivals."},

    {type:"teach", trg:"温泉(おんせん)", src:"hot spring", pos:"noun", gender:null,
     note:"温泉(おんせん)に入(はい)る = to bathe in hot springs.\n露天風呂(ろてんぶろ) = outdoor bath.",
     example:"A: 温泉(おんせん)に入(はい)りたいです。\nB: 箱根(はこね)の温泉(おんせん)がおすすめですよ。\nA: そうですか。良(よ)かったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I want to bathe in hot springs.\nB: I recommend Hakone hot springs.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japan has 27,000 温泉(おんせん) sources, more than any country. Each 温泉(おんせん) has different mineral properties. Tattoos are often banned (because of yakuza associations). The etiquette: wash thoroughly BEFORE entering, no swimsuits, no towels in the water. It is a deeply relaxing ritual."},

    {type:"teach", trg:"予約(よやく)", src:"reservation", pos:"noun", gender:null,
     note:"予約(よやく)する = to make a reservation.\n予約(よやく)番号(ばんごう) = reservation number.",
     example:"A: レストランの予約(よやく)をしましたか？\nB: はい、七時(しちじ)に予約(よやく)しました。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Did you make a restaurant reservation?\nB: Yes, I reserved for 7 o'clock.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"予約(よやく) is essential in Japan. Popular restaurants, hotels, and activities require advance 予約(よやく). No-shows are considered extremely rude. Some restaurants charge cancellation fees. Online reservation systems (ネット予約(よやく)) have made booking easier, but phone 予約(よやく) is still common."},

    {type:"teach", trg:"迷(まよ)う", src:"to get lost / to be undecided", pos:"verb", gender:null,
     note:"Group 1 verb. 道(みち)に迷(まよ)う = to get lost (on the road).\n迷(まよ)っています = I am undecided.",
     example:"A: 道(みち)に迷(まよ)いました。\nB: スマホの地図(ちず)を見(み)ましょう。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I got lost.\nB: Let us look at the phone map.\nA: How long did it take?\nB: About two hours.",
     funFact:"迷(まよ)う covers both physical getting lost and mental indecision. 迷子(まいご) (lost child) uses the same kanji. Japanese stations and malls are famously confusing, even for locals. 新宿駅(しんじゅくえき) (Shinjuku Station) with its 200+ exits is nicknamed 'the dungeon' because everyone gets 迷(まよ)う."},

    {type:"teach", trg:"乗(の)り遅(おく)れる", src:"to miss (a train/bus)", pos:"verb", gender:null,
     note:"Group 2 verb. 乗(の)り = ride, 遅(おく)れる = to be late.\n電車(でんしゃ)に乗(の)り遅(おく)れた = missed the train.",
     example:"A: 電車(でんしゃ)に乗(の)り遅(おく)れました！\nB: 次(つぎ)は5分後(ごふんご)ですよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I missed the train!\nB: The next one is in 5 minutes.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Missing a train (乗(の)り遅(おく)れる) in Japan usually means waiting only a few minutes, thanks to incredibly punctual schedules. Tokyo trains run every 2-3 minutes during rush hour. The average delay is under 1 minute per year. When trains ARE late, passengers receive delay certificates (遅延証明書(ちえんしょうめいしょ)) for their employers."},

    {type:"teach", trg:"思(おも)い出(で)", src:"memory / fond recollection", pos:"noun", gender:null,
     note:"思(おも)い出(で) = memories (positive). 思(おも)い出(で)になる = to become a memory.\nいい思(おも)い出(で) = a good memory.",
     example:"A: 日本(にほん)で一番(いちばん)の思(おも)い出(で)は何(なに)ですか？\nB: 富士山(ふじさん)に登(のぼ)ったことです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: What is your best memory of Japan?\nB: Climbing Mt. Fuji.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"思(おも)い出(で) is a deeply emotional word. The kanji combine 思 (think) and 出 (come out). Memories come out from the heart. Japanese people treasure 思(おも)い出(で) intensely. Photo albums, journals, and お土産(おみやげ) serve as physical anchors for 思(おも)い出(で). The phrase いい思(おも)い出(で)になりました is a heartfelt thank-you."},

    {type:"teach", trg:"危険(きけん)", src:"dangerous", pos:"adj", gender:null,
     note:"Na-adjective. 危険(きけん)な場所(ばしょ) = dangerous place.\nOpposite: 安全(あんぜん) (safe).",
     example:"A: この道(みち)は危険(きけん)ですか？\nB: 夜(よる)は危険(きけん)です。昼間(ひるま)は大丈夫(だいじょうぶ)です。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Is this road dangerous?\nB: At night it is dangerous. Daytime is fine.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japan is one of the safest countries in the world, so 危険(きけん) warnings are taken very seriously. Signs saying 危険(きけん) appear near cliffs, railway crossings, and construction. Natural disasters (地震(じしん), 台風(たいふう)) are the primary 危険(きけん) sources, not crime. Japan's murder rate is among the lowest globally."},

    {type:"teach", trg:"注意(ちゅうい)", src:"caution / warning", pos:"noun", gender:null,
     note:"注意(ちゅうい)する = to pay attention / to warn.\n注意(ちゅうい)してください = please be careful.",
     example:"A: 足元(あしもと)に注意(ちゅうい)してください。\nB: はい、気(き)をつけます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please watch your step.\nB: Yes, I will be careful.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"注意(ちゅうい) signs are everywhere in Japan: trains, stations, escalators, sidewalks. Japanese society relies on gentle warnings rather than strict enforcement. The phrase 注意(ちゅうい) is less alarming than 危険(きけん) but still commands respect. Announcements on trains constantly remind passengers to 注意(ちゅうい)."},

    {type:"teach", trg:"満足(まんぞく)", src:"satisfaction / satisfied", pos:"noun", gender:null,
     note:"Na-adjective/noun. 満足(まんぞく)する = to be satisfied.\n満足(まんぞく)しています = I am satisfied.",
     example:"A: 旅行(りょこう)は満足(まんぞく)でしたか？\nB: はい、とても満足(まんぞく)です。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Were you satisfied with the trip?\nB: Yes, very satisfied.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"満足(まんぞく) combines 満 (full) and 足 (foot/sufficient). Being satisfied means being 'fully sufficient.' Japanese customer satisfaction surveys use 大変満足(たいへんまんぞく) (very satisfied) to まったく不満足(ふまんぞく) (completely unsatisfied). Japanese service aims for 満足(まんぞく) through obsessive attention to detail."},

    {type:"teach", trg:"残念(ざんねん)", src:"disappointing / regrettable", pos:"adj", gender:null,
     note:"Na-adjective. 残念(ざんねん)です = that is a shame/too bad.\n残念(ざんねん)ながら = unfortunately.",
     example:"A: 明日(あした)は雨(あめ)だそうです。\nB: 残念(ざんねん)ですね。花見(はなみ)は無理(むり)ですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: It seems it will rain tomorrow.\nB: That is a shame. Cherry blossom viewing is not possible.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"残念(ざんねん) is used constantly in daily Japanese. It is softer than 'disappointing' and conveys shared regret. The book 残念(ざんねん)ないきもの (Disappointing Animals) became a bestseller, making 残念(ざんねん) a trendy word. It describes animals with comically impractical features."},

    {type:"teach", trg:"感動(かんどう)する", src:"to be moved / to be impressed", pos:"verb", gender:null,
     note:"Suru verb. 感動的(かんどうてき) = impressive/moving.\n感動(かんどう)しました = I was deeply moved.",
     example:"A: この映画(えいが)に感動(かんどう)しました。\nB: 私(わたし)もです。泣(な)きました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I was moved by this movie.\nB: Me too. I cried.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"感動(かんどう) is a powerful word expressing deep emotional impact. Japanese people value experiences that cause 感動(かんどう): beautiful scenery, kind gestures, impressive performances. Saying 感動(かんどう)しました is high praise. Japanese TV shows often feature 'touching' (感動(かんどう)) stories that make the studio audience cry."},

    // Quiz steps
    {type:"mc", q:"お土産(おみやげ) in Japan is:",
     opts:["A social obligation when returning from trips","Optional and rare","Only for family members","Only available at airports"],
     ans:"A social obligation when returning from trips",
     hint:"Forgetting to bring back souvenirs for colleagues and family is considered a s... error."},

    {type:"match", pairs:[
      {trg:"目的地(もくてきち)", src:"destination"},
      {trg:"お土産(おみやげ)", src:"souvenir"},
      {trg:"景色(けしき)", src:"scenery"},
      {trg:"温泉(おんせん)", src:"hot spring"},
      {trg:"思(おも)い出(で)", src:"memory"}
    ]},

    {type:"fb", s:"電車(でんしゃ)に{1}ました。次(つぎ)は5分後(ごふんご)です。",
     a:["乗(の)り遅(おく)れ"],
     opts:["乗(の)り遅(おく)れ","乗(の)り換(か)え","迷(まよ)い","休(やす)み"],
     hint:"You missed the train. This compound verb means 'to miss a ride.'",
     sSrc:"I {1} the train. The next one is in 5 minutes."},

    {type:"mc", q:"温泉(おんせん) etiquette requires:",
     opts:["Entering with shoes on","Washing your body before entering the bath","Wearing a swimsuit in the water","Bringing a towel into the water"],
     ans:"Washing your body before entering the bath",
     hint:"You must be completely clean b... e... the shared hot water. No swimsuits allowed."},

    {type:"fb", s:"明日(あした)は雨(あめ)です。{1}ですね。",
     a:["残念(ざんねん)"],
     opts:["残念(ざんねん)","満足(まんぞく)","危険(きけん)","安全(あんぜん)"],
     hint:"The rain ruins plans. This na-adjective expresses regret or disappointment.",
     sSrc:"It will rain tomorrow. That is {1}."},

    {type:"mc", q:"新宿駅(しんじゅくえき) is nicknamed 'the dungeon' because:",
     opts:["It is dark","It is old","People get lost due to 200+ exits","It is underground"],
     ans:"People get lost due to 200+ exits",
     hint:"Even locals g... 迷(まよ)う in this enormous station with its confusing maze of passages and e...."},

    {type:"match", pairs:[
      {trg:"予約(よやく)", src:"reservation"},
      {trg:"迷(まよ)う", src:"to get lost"},
      {trg:"危険(きけん)", src:"dangerous"},
      {trg:"注意(ちゅうい)", src:"caution"},
      {trg:"感動(かんどう)する", src:"to be moved"}
    ]},

    {type:"fb", s:"この映画(えいが)に{1}しました。泣(な)きました。",
     a:["感動(かんどう)"],
     opts:["感動(かんどう)","満足(まんぞく)","残念(ざんねん)","注意(ちゅうい)"],
     hint:"The movie deeply impressed and emotionally moved you. You even cried.",
     sSrc:"I was {1} by this movie. I cried."}
  ,{type:"match",pairs:[{trg:"旅館(りょかん)",src:"traditional Japanese inn"},{trg:"満足(まんぞく)",src:"satisfaction / satisfied"}]}]
};
export default BATCH7_L1;
