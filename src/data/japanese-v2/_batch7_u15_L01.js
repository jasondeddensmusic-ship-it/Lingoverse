// Batch 7 – Unit 15 (B1.1 Directions): Transportation & Navigation
const BATCH7_L1 = {
  id:"jav2_u15l_b7_1", title:"こうつうとナビ", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうつうとナビ",
     desc:"Learn advanced transportation and navigation vocabulary. Japan's transit system is the world's most complex, and these words will help you navigate it confidently.",
     goals:["Navigate the Japanese rail system","Use transit-specific vocabulary","Ask for and give detailed directions"]},

    {type:"teach", trg:"かくえきていしゃ", src:"local train (stops at every station)", pos:"noun", gender:null,
     note:"かくえき = each station. ていしゃ = stopping.\nOpposite: きゅうこう (express).",
     example:"A: かくえきていしゃとかいそくどちらがはやいですか？\nB: かいそくのほうがはやいです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Which is faster, the local or the rapid?\nB: The rapid is faster.\nA: How long did it take?\nB: About two hours.",
     funFact:"Japanese trains have multiple speed tiers: かくえきていしゃ (local), かいそく (rapid), きゅうこう (express), とっきゅう (limited express), and しんかんせん (bullet train). Taking the wrong tier is a common mistake. Some require extra tickets (特急券). Station displays show which train to catch."},

    {type:"teach", trg:"しゅうでん", src:"last train", pos:"noun", gender:null,
     note:"しゅう = end, でん = train.\nしゅうでんにまにあう = to catch the last train.",
     example:"A: しゅうでんはなんじですか？\nB: 23じ50ぷんです。いそぎましょう！\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What time is the last train?\nB: 11:50 PM. Let us hurry!\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Missing the しゅうでん is a Japanese urban nightmare. After midnight, options are: expensive taxi (タクシー), manga cafe (マンガきっさ) to sleep until morning, or karaoke until first train (始発, しはつ). Friday nights, stations are full of people desperately running for しゅうでん."},

    {type:"teach", trg:"じこくひょう", src:"timetable / schedule", pos:"noun", gender:null,
     note:"じこく = time, ひょう = table/chart.\nじこくひょうをしらべる = to check the timetable.",
     example:"A: じこくひょうはどこでみられますか？\nB: えきのホームにあります。アプリもべんりですよ。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Where can I see the timetable?\nB: It is on the station platform. Apps are convenient too.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japanese train じこくひょう are famously precise. Trains depart on the second, not the minute. The Shinkansen averages less than 1 minute of delay per year. Paper じこくひょう books were once bestsellers. Now apps like Yahoo Transit and Google Maps handle route planning."},

    {type:"teach", trg:"のりば", src:"boarding area / platform", pos:"noun", gender:null,
     note:"のり = ride, ば = place.\nバスのりば = bus stop. タクシーのりば = taxi stand.",
     example:"A: 3ばんのりばはどこですか？\nB: あのかいだんをおりてください。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Where is platform 3?\nB: Please go down those stairs.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japanese station のりば (platforms) are numbered and color-coded. Floor markings show exactly where each car door will open. Passengers line up orderly (整列乗車, せいれつじょうしゃ). Priority seats (優先席, ゆうせんせき) near doors are for elderly, disabled, pregnant, and injured passengers."},

    {type:"teach", trg:"かたみち", src:"one way (ticket)", pos:"noun", gender:null,
     note:"かた = one side, みち = road.\nOpposite: おうふく (round trip).",
     example:"A: かたみちですか？おうふくですか？\nB: おうふくでおねがいします。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: One way or round trip?\nB: Round trip please.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"かたみち (片道) vs おうふく (往復) is the first question at any ticket counter. Round trip tickets (おうふくきっぷ) are usually cheaper than two かたみち tickets. The Shinkansen offers big discounts on おうふく. Always check before buying かたみち."},

    {type:"teach", trg:"ちかみち", src:"shortcut", pos:"noun", gender:null,
     note:"ちか = near, みち = road.\nちかみちをおしえてください = please tell me a shortcut.",
     example:"A: えきまでちかみちはありますか？\nB: あのこうえんをとおるとはやいですよ。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Is there a shortcut to the station?\nB: Going through that park is faster.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ちかみち (近道) culture is strong in Japan. Local residents know hidden passages through neighborhoods. Station ちかみち (shortcuts through underground passages) save minutes on commutes. Tokyo's underground network connects buildings, stations, and shops into a vast ちかみち system."},

    {type:"teach", trg:"おうだんほどう", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"Also: よこだんほどう. The zebra stripes on roads.\nおうだんほどうをわたる = to cross at the crosswalk.",
     example:"A: おうだんほどうをわたってください。\nB: しんごうがあおになったらわたります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: I will cross when the light turns green.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Shibuya Crossing (スクランブルこうさてん) is the world's busiest おうだんほどう, with up to 3,000 people crossing simultaneously every light change. Japanese pedestrians strictly follow signals even with no cars in sight. Jaywalking is rare and frowned upon, especially when children might see."},

    {type:"teach", trg:"こうさてん", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"こうさ = crossing, てん = point.\nつぎのこうさてんをみぎ = turn right at the next intersection.",
     example:"A: つぎのこうさてんをひだりにまがってください。\nB: みっつめのこうさてんですか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Please turn left at the next intersection.\nB: The third intersection?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Giving directions using こうさてん is standard in Japan. Addresses are confusing (block-based, not street-based), so landmarks and こうさてん are preferred. 'Turn right at the convenience store intersection' is a typical direction. GPS navigation says つぎのこうさてん constantly."},

    {type:"teach", trg:"いっぽうつうこう", src:"one-way street", pos:"noun", gender:null,
     note:"いっぽう = one direction. つうこう = traffic passage.\nいっぽうつうこうです = it is a one-way street.",
     example:"A: このみちはいっぽうつうこうですよ。\nB: すみません、しりませんでした。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: This road is one-way.\nB: Sorry, I did not know.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japan's narrow streets often require いっぽうつうこう (one-way traffic). Many residential areas alternate direction by street. The signs show a blue arrow for the permitted direction. Foreign drivers frequently make mistakes with いっぽうつうこう in cities."},

    {type:"teach", trg:"ちゅうしゃじょう", src:"parking lot", pos:"noun", gender:null,
     note:"ちゅうしゃ = parking. じょう = place/grounds.\nちゅうしゃきんし = no parking.",
     example:"A: このちかくにちゅうしゃじょうはありますか？\nB: えきのしたにあります。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Is there a parking lot nearby?\nB: There is one under the station.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Parking in Japan requires proof of a parking space (車庫証明, しゃこしょうめい) just to buy a car. Urban parking is expensive and automated. Mechanical parking towers (機械式駐車場) stack cars vertically like a Ferris wheel. Monthly ちゅうしゃじょう fees in Tokyo can exceed 30,000 yen."},

    {type:"teach", trg:"うんてんめんきょ", src:"driver's license", pos:"noun", gender:null,
     note:"うんてん = driving. めんきょ = license/permit.\nめんきょしょう = license certificate.",
     example:"A: うんてんめんきょをもっていますか？\nB: はい、にねんまえにとりました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Do you have a driver's license?\nB: Yes, I got it two years ago.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese driver's licenses are famously hard to get. Driving school (教習所, きょうしゅうじょ) costs 200,000-300,000 yen and takes weeks. The test has strict rules: check mirrors in specific order, look left-right-left at intersections, and make exaggerated head movements. Foreign licenses require conversion."},

    {type:"teach", trg:"わたる", src:"to cross (a road/bridge)", pos:"verb", gender:null,
     note:"Group 1 verb. はしをわたる = to cross a bridge.\nみちをわたる = to cross a road.",
     example:"A: このはしをわたるときれいなけしきがみえます。\nB: いきましょう！\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: If you cross this bridge, you can see beautiful scenery.\nB: Let us go!\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"わたる (渡る) appears in a famous proverb: 石橋を叩いて渡る (tap a stone bridge before crossing), meaning to be extremely cautious. This proverb perfectly captures the Japanese preference for careful preparation. 渡る also means 'to hand over' (わたす) in its transitive form."},

    {type:"teach", trg:"おりる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. でんしゃをおりる = to get off a train.\nやまをおりる = to descend a mountain.",
     example:"A: つぎのえきでおります。\nB: このドアからおりてください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I will get off at the next station.\nB: Please exit from this door.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"おりる (降りる) vs おろす (降ろす): intransitive vs transitive. You おりる (get off), but the bus driver おろす (lets you off). In trains, announcements say 'doors opening on the right side' to tell you which side to おりる. Exiting before your stop (降り遅れ) is a real fear on express trains."},

    // Quiz steps
    {type:"mc", q:"しゅうでん is important because:",
     opts:["Missing it means no trains until morning","It is the cheapest train","It is the fastest train","It goes to the airport"],
     ans:"Missing it means no trains until morning",
     hint:"After this last train, your options are taxis, manga cafes, or karaoke u... first train."},

    {type:"match", pairs:[
      {trg:"かくえきていしゃ", src:"local train"},
      {trg:"しゅうでん", src:"last train"},
      {trg:"かたみち", src:"one way"},
      {trg:"ちかみち", src:"shortcut"},
      {trg:"こうさてん", src:"intersection"}
    ]},

    {type:"fb", s:"3ばん{1}からでんしゃがでます。",
     a:["のりば"],
     opts:["のりば","おりば","えき","ホーム"],
     hint:"The platform or boarding area where you catch your train. Numbered at Japanese stations.",
     sSrc:"The train departs from {1} number 3."},

    {type:"mc", q:"To buy a car in Japan, you need:",
     opts:["Proof of a parking space (車庫証明)","Only a driver's license","Permission from neighbors","A recommendation letter"],
     ans:"Proof of a parking space (車庫証明)",
     hint:"You must prove you have somewhere to park before you can purchase a vehicle."},

    {type:"fb", s:"おうだんほどうをしんごうが{1}になったらわたりましょう。",
     a:["あお"],
     opts:["あお","あか","きいろ","しろ"],
     hint:"Wait for the traffic light to show this color (called 'blue' in Japanese, though it looks green).",
     sSrc:"Let us cross the crosswalk when the signal turns {1}."},

    {type:"mc", q:"かくえきていしゃ means the train:",
     opts:["Stops at every station","Skips most stations","Only runs on weekends","Goes to the airport"],
     ans:"Stops at every station",
     hint:"かくえき means 'each s...' and ていしゃ means 'stopping.' The slowest but most thorough service."},

    {type:"match", pairs:[
      {trg:"おうだんほどう", src:"crosswalk"},
      {trg:"いっぽうつうこう", src:"one-way street"},
      {trg:"ちゅうしゃじょう", src:"parking lot"},
      {trg:"わたる", src:"to cross"},
      {trg:"おりる", src:"to get off"}
    ]},

    {type:"fb", s:"にほんの{1}しょう(license)はとるのがたいへんです。",
     a:["うんてんめんきょ"],
     opts:["うんてんめんきょ","じこくひょう","のりば","こうさてん"],
     hint:"Japanese driving licenses are famously expensive and difficult to obtain. Driving school costs 200,000+ yen.",
     sSrc:"Japanese {1} is difficult to get."}
  ]
};
export default BATCH7_L1;
