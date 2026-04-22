// Batch 11 – Unit 13 (A2.1 Experience): Hobbies & Interests
const BATCH11_L1 = {
  id:"jav2_u13l_b11_1", title:"趣味(しゅみ)", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"趣味(しゅみ)",
     desc:"Learn to talk about hobbies and interests. This is one of the most common conversation topics when meeting new people in Japan.",
     goals:["Name common hobbies in Japanese","Use しゅみは...です to share your hobbies","Ask others about their interests and pastimes"]},

    {type:"teach", trg:"趣味(しゅみ)", src:"hobby / interest", pos:"noun", gender:null,
     note:"趣味(しゅみ)はなんですか = What are your hobbies?\nVery common self-introduction topic.",
     example:"A: 趣味(しゅみ)はなんですか？\nB: 読書(どくしょ)と旅行(りょこう)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: What are your hobbies?\nB: Reading and travel.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"趣味(しゅみ) is one of the first questions in Japanese self-introductions, right after name and job. In job interviews, 趣味(しゅみ) questions test personality and communication skills. Having no hobby (趣味(しゅみ)がない) is surprisingly difficult to admit in Japan, where well-rounded interests are valued."},

    {type:"teach", trg:"読書(どくしょ)", src:"reading (books)", pos:"noun", gender:null,
     note:"読書(どくしょ)する = to read (books as a hobby).\n読書家(どくしょか) = avid reader.",
     example:"A: 最近(さいきん)なにか読書(どくしょ)しましたか？\nB: 日本(にほん)の小説(しょうせつ)を読(よ)みました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Have you read anything recently?\nB: I read a Japanese novel.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japan has one of the highest literacy rates (99%) and book readership rates in the world. Train commuters reading books and manga is an iconic sight. The 読書(どくしょ)の秋(あき) (reading autumn) tradition encourages reading during the pleasant autumn weather."},

    {type:"teach", trg:"運動(うんどう)", src:"exercise / sports", pos:"noun", gender:null,
     note:"運動(うんどう)する = to exercise.\n運動会(うんどうかい) = sports day (school event).",
     example:"A: 毎日(まいにち)運動(うんどう)していますか？\nB: はい、朝(あさ)ジョギングをしています。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Do you exercise every day?\nB: Yes, I jog in the morning.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Japan's 運動会(うんどうかい) (sports day) is a major school event where families watch children compete in relay races, tug-of-war, and dance performances. ラジオ体操(たいそう) (radio exercises) are broadcast every morning at 6:30 AM and are done by millions of Japanese people as a daily routine."},

    {type:"teach", trg:"料理(りょうり)", src:"cooking", pos:"noun", gender:null,
     note:"料理(りょうり)する = to cook. 日本料理(にほんりょうり) = Japanese cuisine.\n料理教室(りょうりきょうしつ) = cooking class.",
     example:"A: 料理(りょうり)が上手(じょうず)ですね。\nB: ありがとう。母(はは)は料理(りょうり)が上手(じょうず)です。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: You are good at cooking.\nB: Thank you. My mother is good at cooking.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese cuisine (和食(わしょく)) was designated a UNESCO Intangible Cultural Heritage in 2013. The five principles are: five colors (五色(ごしき)), five tastes (五味(ごみ)), five methods (五法(ごほう)). Home cooking (家庭料理(かていりょうり)) is taught in school, and both boys and girls learn to make basic dishes."},

    {type:"teach", trg:"散歩(さんぽ)", src:"a walk / stroll", pos:"noun", gender:null,
     note:"散歩(さんぽ)する = to take a walk.\n朝(あさ)の散歩(さんぽ) = morning walk.",
     example:"A: 一緒(いっしょ)に散歩(さんぽ)しませんか？\nB: いいですね。公園(こうえん)に行(い)きましょう。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Shall we take a walk together?\nB: That sounds nice. Let's go to the park.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"散歩(さんぽ) is a beloved daily activity in Japan, especially among older adults. The verb ぶらぶらする (to stroll aimlessly) captures the Japanese appreciation for wandering without destination. Studio Ghibli's となりのトトロ has a famous song called 散歩(さんぽ) that every Japanese child knows."},

    {type:"teach", trg:"映画(えいが)", src:"movie / film", pos:"noun", gender:null,
     note:"映画(えいが)を見(み)る = to watch a movie.\n映画館(えいがかん) = movie theater.",
     example:"A: 週末(しゅうまつ)に映画(えいが)を見(み)に行(い)きませんか？\nB: いいですね。何(なに)を見(み)ましょうか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Shall we go see a movie this weekend?\nB: Sounds good. What shall we see?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Japan's film industry produced Akira Kurosawa, Hayao Miyazaki, and Hirokazu Koreeda. Anime films regularly top the box office: 鬼滅(きめつ)の刃(やいば) earned over 40 billion yen. Japanese audiences sit through all end credits and leave theaters spotless."},

    {type:"teach", trg:"音楽(おんがく)", src:"music", pos:"noun", gender:null,
     note:"音楽(おんがく)を聞(き)く = to listen to music.\n音楽家(おんがくか) = musician.",
     example:"A: どんな音楽(おんがく)が好(す)きですか？\nB: Jポップとクラシックが好(す)きです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: What kind of music do you like?\nB: I like J-pop and classical.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan is the world's second-largest music market after the US. Physical CD sales remain strong, supported by idol culture and concert ticket lotteries. カラオケ (karaoke, literally 'empty orchestra') was invented in Japan in the 1970s and became a global phenomenon."},

    {type:"teach", trg:"ゲーム", src:"game / video game", pos:"noun", gender:null,
     note:"ゲームをする = to play games.\nゲームセンター = arcade.",
     example:"A: ゲームは好(す)きですか？\nB: はい、ニンテンドーのゲームが大好(だいす)きです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Do you like games?\nB: Yes, I love Nintendo games.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japan created the modern video game industry: Nintendo, Sony PlayStation, Sega, and countless iconic games. ゲームセンター (arcades) remain popular in Japan despite declining elsewhere. Japanese mobile gaming (スマホゲーム) is a multi-billion dollar industry with games like Pokemon GO and Monster Strike."},

    {type:"teach", trg:"写真(しゃしん)", src:"photograph / photography", pos:"noun", gender:null,
     note:"写真(しゃしん)を撮(と)る = to take a photo.\n写真家(しゃしんか) = photographer.",
     example:"A: 写真(しゃしん)を撮(と)ってもいいですか？\nB: もちろん、どうぞ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: May I take a photo?\nB: Of course, go ahead.\nA: How was it?\nB: It was very good.",
     funFact:"Photography (写真(しゃしん)) is hugely popular in Japan. プリクラ (photo sticker booths) are a unique Japanese invention where friends take decorated photos. The Japanese word for 'peace sign' in photos is ピース, and it is ubiquitous in casual snapshots. インスタばえ (Instagrammable) drives tourism to photogenic spots."},

    {type:"teach", trg:"旅行(りょこう)", src:"travel / trip", pos:"noun", gender:null,
     note:"旅行(りょこう)する = to travel.\n海外旅行(かいがいりょこう) = overseas travel.",
     example:"A: 次(つぎ)の旅行(りょこう)はどこに行(い)きますか？\nB: 京都(きょうと)に行(い)きたいです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Where will you go on your next trip?\nB: I want to go to Kyoto.\nA: When was it?\nB: It was last summer.",
     funFact:"Japanese domestic travel is a massive industry. 温泉(おんせん)旅行(りょこう) (hot spring trips) are the most popular weekend getaway. Travel planning is meticulous: Japanese tourists are famous for detailed itineraries. お土産(みやげ) (souvenirs) are obligatory, and every region has its specialty gifts."},

    {type:"teach", trg:"釣(つ)り", src:"fishing", pos:"noun", gender:null,
     note:"釣(つ)りをする = to go fishing.\n海釣(うみづ)り = ocean fishing.",
     example:"A: 休(やす)みに何(なに)をしますか？\nB: 川(かわ)で釣(つ)りをします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What will you do on your day off?\nB: I will go fishing at the river.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Fishing (釣(つ)り) is one of Japan's most popular hobbies, especially among older men. Japan has extensive fishing rights along its coastline and rivers. Catch-and-release (キャッチアンドリリース) is practiced in some areas. Fishing manga and anime like 釣(つ)りバカ日誌(にっし) are cultural touchstones."},

    // Quiz steps
    {type:"mc", q:"日本人(にほんじん)に初(はじ)めて会(あ)ったとき、よく聞(き)かれる質問(しつもん)はなんですか？",
     opts:["趣味(しゅみ)はなんですか","いくらですか","どこに住(す)んでいますか","何歳(なんさい)ですか"],
     ans:"趣味(しゅみ)はなんですか",
     hint:"This question about personal interests is one of the most common topics in Japanese self-introductions."},

    {type:"fb", s:"一緒(いっしょ)に{1}しませんか？公園(こうえん)に行(い)きましょう。",
     a:["散歩(さんぽ)"],
     opts:["散歩(さんぽ)","運動(うんどう)","旅行(りょこう)","釣(つ)り"],
     hint:"The speaker is suggesting a casual walk together to the park, not a sport or a long trip.",
     sSrc:"Shall we take a walk together? Let's go to the park."},

    {type:"match", pairs:[
      {trg:"読書(どくしょ)", src:"reading books"},
      {trg:"料理(りょうり)", src:"cooking"},
      {trg:"写真(しゃしん)", src:"photography"},
      {trg:"釣(つ)り", src:"fishing"}
    ]},

    {type:"mc", q:"カラオケは日本語(にほんご)でなんの意味(いみ)ですか？",
     opts:["Music room","Empty orchestra","Song machine","Voice box"],
     ans:"Empty orchestra",
     hint:"This globally famous word combines から (e...) with オケ (short for o...)."},

    {type:"fb", s:"{1}を撮(と)ってもいいですか？",
     a:["写真(しゃしん)"],
     opts:["写真(しゃしん)","映画(えいが)","音楽(おんがく)","ゲーム"],
     hint:"You are politely asking permission to capture an image with your camera or phone.",
     sSrc:"May I take a photo?"},

    {type:"mc", q:"日本料理(にほんりょうり)は何年(なんねん)にユネスコに登録(とうろく)されましたか？",
     opts:["2005","2018","2013","2020"],
     ans:"2013",
     hint:"Japanese cuisine was recognized by UNESCO as an Intangible Cultural Heritage in the early 2010s."}
  ,{type:"match",pairs:[{trg:"運動(うんどう)",src:"exercise / sports"},{trg:"映画(えいが)",src:"movie / film"},{trg:"音楽(おんがく)",src:"music"},{trg:"ゲーム",src:"game / video game"},{trg:"旅行(りょこう)",src:"travel / trip"}]}]
};
export default BATCH11_L1;
