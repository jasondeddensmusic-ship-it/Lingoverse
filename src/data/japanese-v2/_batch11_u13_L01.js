// Batch 11 – Unit 13 (A2.1 Experience): Hobbies & Interests
const BATCH11_L1 = {
  id:"jav2_u13l_b11_1", title:"しゅみ", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゅみ",
     desc:"Learn to talk about hobbies and interests. This is one of the most common conversation topics when meeting new people in Japan.",
     goals:["Name common hobbies in Japanese","Use しゅみは...です to share your hobbies","Ask others about their interests and pastimes"]},

    {type:"teach", trg:"しゅみ", src:"hobby / interest", pos:"noun", gender:null,
     note:"しゅみはなんですか = What are your hobbies?\nVery common self-introduction topic.",
     example:"A: しゅみはなんですか？\nB: どくしょとりょこうです。",
     exampleSrc:"A: What are your hobbies?\nB: Reading and travel.",
     funFact:"しゅみ is one of the first questions in Japanese self-introductions, right after name and job. In job interviews, しゅみ questions test personality and communication skills. Having no hobby (しゅみがない) is surprisingly difficult to admit in Japan, where well-rounded interests are valued."},

    {type:"teach", trg:"どくしょ", src:"reading (books)", pos:"noun", gender:null,
     note:"どくしょする = to read (books as a hobby).\nどくしょか = avid reader.",
     example:"A: さいきんなにかどくしょしましたか？\nB: にほんのしょうせつをよみました。",
     exampleSrc:"A: Have you read anything recently?\nB: I read a Japanese novel.",
     funFact:"Japan has one of the highest literacy rates (99%) and book readership rates in the world. Train commuters reading books and manga is an iconic sight. The 読書の秋 (reading autumn) tradition encourages reading during the pleasant autumn weather."},

    {type:"teach", trg:"うんどう", src:"exercise / sports", pos:"noun", gender:null,
     note:"うんどうする = to exercise.\nうんどうかい = sports day (school event).",
     example:"A: まいにちうんどうしていますか？\nB: はい、あさジョギングをしています。",
     exampleSrc:"A: Do you exercise every day?\nB: Yes, I jog in the morning.",
     funFact:"Japan's うんどうかい (sports day) is a major school event where families watch children compete in relay races, tug-of-war, and dance performances. ラジオたいそう (radio exercises) are broadcast every morning at 6:30 AM and are done by millions of Japanese people as a daily routine."},

    {type:"teach", trg:"りょうり", src:"cooking", pos:"noun", gender:null,
     note:"りょうりする = to cook. にほんりょうり = Japanese cuisine.\nりょうりきょうしつ = cooking class.",
     example:"A: りょうりがじょうずですね。\nB: ありがとう。はははりょうりがじょうずです。",
     exampleSrc:"A: You are good at cooking.\nB: Thank you. My mother is good at cooking.",
     funFact:"Japanese cuisine (和食) was designated a UNESCO Intangible Cultural Heritage in 2013. The five principles are: five colors (五色), five tastes (五味), five methods (五法). Home cooking (家庭料理) is taught in school, and both boys and girls learn to make basic dishes."},

    {type:"teach", trg:"さんぽ", src:"a walk / stroll", pos:"noun", gender:null,
     note:"さんぽする = to take a walk.\nあさのさんぽ = morning walk.",
     example:"A: いっしょにさんぽしませんか？\nB: いいですね。こうえんにいきましょう。",
     exampleSrc:"A: Shall we take a walk together?\nB: That sounds nice. Let's go to the park.",
     funFact:"さんぽ is a beloved daily activity in Japan, especially among older adults. The verb ぶらぶらする (to stroll aimlessly) captures the Japanese appreciation for wandering without destination. Studio Ghibli's となりのトトロ has a famous song called さんぽ that every Japanese child knows."},

    {type:"teach", trg:"えいが", src:"movie / film", pos:"noun", gender:null,
     note:"えいがをみる = to watch a movie.\nえいがかん = movie theater.",
     example:"A: しゅうまつにえいがをみにいきませんか？\nB: いいですね。なにをみましょうか？",
     exampleSrc:"A: Shall we go see a movie this weekend?\nB: Sounds good. What shall we see?",
     funFact:"Japan's film industry produced Akira Kurosawa, Hayao Miyazaki, and Hirokazu Koreeda. Anime films regularly top the box office: 鬼滅の刃 earned over 40 billion yen. Japanese audiences sit through all end credits and leave theaters spotless."},

    {type:"teach", trg:"おんがく", src:"music", pos:"noun", gender:null,
     note:"おんがくをきく = to listen to music.\nおんがくか = musician.",
     example:"A: どんなおんがくがすきですか？\nB: Jポップとクラシックがすきです。",
     exampleSrc:"A: What kind of music do you like?\nB: I like J-pop and classical.",
     funFact:"Japan is the world's second-largest music market after the US. Physical CD sales remain strong, supported by idol culture and concert ticket lotteries. カラオケ (karaoke, literally 'empty orchestra') was invented in Japan in the 1970s and became a global phenomenon."},

    {type:"teach", trg:"ゲーム", src:"game / video game", pos:"noun", gender:null,
     note:"ゲームをする = to play games.\nゲームセンター = arcade.",
     example:"A: ゲームはすきですか？\nB: はい、にんてんどうのゲームがだいすきです。",
     exampleSrc:"A: Do you like games?\nB: Yes, I love Nintendo games.",
     funFact:"Japan created the modern video game industry: Nintendo, Sony PlayStation, Sega, and countless iconic games. ゲームセンター (arcades) remain popular in Japan despite declining elsewhere. Japanese mobile gaming (スマホゲーム) is a multi-billion dollar industry with games like Pokemon GO and Monster Strike."},

    {type:"teach", trg:"しゃしん", src:"photograph / photography", pos:"noun", gender:null,
     note:"しゃしんをとる = to take a photo.\nしゃしんか = photographer.",
     example:"A: しゃしんをとってもいいですか？\nB: もちろん、どうぞ。",
     exampleSrc:"A: May I take a photo?\nB: Of course, go ahead.",
     funFact:"Photography (写真) is hugely popular in Japan. プリクラ (photo sticker booths) are a unique Japanese invention where friends take decorated photos. The Japanese word for 'peace sign' in photos is ピース, and it is ubiquitous in casual snapshots. インスタばえ (Instagrammable) drives tourism to photogenic spots."},

    {type:"teach", trg:"りょこう", src:"travel / trip", pos:"noun", gender:null,
     note:"りょこうする = to travel.\nかいがいりょこう = overseas travel.",
     example:"A: つぎのりょこうはどこにいきますか？\nB: きょうとにいきたいです。",
     exampleSrc:"A: Where will you go on your next trip?\nB: I want to go to Kyoto.",
     funFact:"Japanese domestic travel is a massive industry. おんせん旅行 (hot spring trips) are the most popular weekend getaway. Travel planning is meticulous: Japanese tourists are famous for detailed itineraries. おみやげ (souvenirs) are obligatory, and every region has its specialty gifts."},

    {type:"teach", trg:"つり", src:"fishing", pos:"noun", gender:null,
     note:"つりをする = to go fishing.\nうみづり = ocean fishing.",
     example:"A: やすみになにをしますか？\nB: かわでつりをします。",
     exampleSrc:"A: What will you do on your day off?\nB: I will go fishing at the river.",
     funFact:"Fishing (つり) is one of Japan's most popular hobbies, especially among older men. Japan has extensive fishing rights along its coastline and rivers. Catch-and-release (キャッチアンドリリース) is practiced in some areas. Fishing manga and anime like つりバカ日誌 are cultural touchstones."},

    // Quiz steps
    {type:"mc", q:"にほんじんにはじめてあったとき、よくきかれるしつもんはなんですか？",
     opts:["しゅみはなんですか","いくらですか","どこにすんでいますか","なんさいですか"],
     ans:"しゅみはなんですか",
     hint:"This question about personal interests is one of the most common topics in Japanese self-introductions."},

    {type:"fb", s:"いっしょに{1}しませんか？こうえんにいきましょう。",
     a:["さんぽ"],
     opts:["さんぽ","うんどう","りょこう","つり"],
     hint:"The speaker is suggesting a casual walk together to the park, not a sport or a long trip.",
     sSrc:"Shall we take a walk together? Let's go to the park."},

    {type:"match", pairs:[
      {trg:"どくしょ", src:"reading books"},
      {trg:"りょうり", src:"cooking"},
      {trg:"しゃしん", src:"photography"},
      {trg:"つり", src:"fishing"}
    ]},

    {type:"mc", q:"カラオケはにほんごでなんのいみですか？",
     opts:["Empty orchestra","Song machine","Voice box","Music room"],
     ans:"Empty orchestra",
     hint:"This globally famous word combines から (e...) with オケ (short for o...)."},

    {type:"fb", s:"{1}をとってもいいですか？",
     a:["しゃしん"],
     opts:["しゃしん","えいが","おんがく","ゲーム"],
     hint:"You are politely asking permission to capture an image with your camera or phone.",
     sSrc:"May I take a photo?"},

    {type:"mc", q:"にほんりょうりはなんねんにユネスコにとうろくされましたか？",
     opts:["2013","2020","2005","2018"],
     ans:"2013",
     hint:"Japanese cuisine was recognized by UNESCO as an Intangible Cultural Heritage in the early 2010s."}
  ]
};
export default BATCH11_L1;
