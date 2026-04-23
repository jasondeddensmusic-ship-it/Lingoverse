// Batch 7 – Unit 15 (B1.1 Directions): Transportation & Navigation
const BATCH7_L1 = {
  id:"jav2_u15l_b7_1", title:"交通(こうつう)とナビ", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"交通(こうつう)とナビ",
     desc:"Learn advanced transportation and navigation vocabulary. Japan's transit system is the world's most complex, and these words will help you navigate it confidently.",
     goals:["Navigate the Japanese rail system","Use transit-specific vocabulary","Ask for and give detailed directions"]},

    {type:"teach", trg:"各駅停車(かくえきていしゃ)", src:"local train (stops at every station)", pos:"noun", gender:null,
     note:"各駅(かくえき) = each station. 停車(ていしゃ) = stopping.\nOpposite: 急行(きゅうこう) (express).",
     example:"A: 各駅停車(かくえきていしゃ)と快速(かいそく)どちらが速(はや)いですか？\nB: 快速(かいそく)のほうが速(はや)いです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Which is faster, the local or the rapid?\nB: The rapid is faster.\nA: How long did it take?\nB: About two hours.",
     funFact:"Japanese trains have multiple speed tiers: 各駅停車(かくえきていしゃ) (local), 快速(かいそく) (rapid), 急行(きゅうこう) (express), 特急(とっきゅう) (limited express), and 新幹線(しんかんせん) (bullet train). Taking the wrong tier is a common mistake. Some require extra tickets (特急券(とっきゅうけん)). Station displays show which train to catch."},

    {type:"teach", trg:"終電(しゅうでん)", src:"last train", pos:"noun", gender:null,
     note:"終(しゅう) = end, 電(でん) = train.\n終電(しゅうでん)に間(ま)に合(あ)う = to catch the last train.",
     example:"A: 終電(しゅうでん)は何時(なんじ)ですか？\nB: 23時(じ)50分(ぷん)です。急(いそ)ぎましょう！\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: What time is the last train?\nB: 11:50 PM. Let us hurry!\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Missing the 終電(しゅうでん) is a Japanese urban nightmare. After midnight, options are: expensive taxi (タクシー), manga cafe (マンガ喫茶(きっさ)) to sleep until morning, or karaoke until first train (始発(しはつ)). Friday nights, stations are full of people desperately running for 終電(しゅうでん)."},

    {type:"teach", trg:"時刻表(じこくひょう)", src:"timetable / schedule", pos:"noun", gender:null,
     note:"時刻(じこく) = time, 表(ひょう) = table/chart.\n時刻表(じこくひょう)を調(しら)べる = to check the timetable.",
     example:"A: 時刻表(じこくひょう)はどこで見(み)られますか？\nB: 駅(えき)のホームにあります。アプリも便利(べんり)ですよ。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Where can I see the timetable?\nB: It is on the station platform. Apps are convenient too.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japanese train 時刻表(じこくひょう) are famously precise. Trains depart on the second, not the minute. The Shinkansen averages less than 1 minute of delay per year. Paper 時刻表(じこくひょう) books were once bestsellers. Now apps like Yahoo Transit and Google Maps handle route planning."},

    {type:"teach", trg:"乗(の)り場(ば)", src:"boarding area / platform", pos:"noun", gender:null,
     note:"乗(の)り = ride, 場(ば) = place.\nバス乗(の)り場(ば) = bus stop. タクシー乗(の)り場(ば) = taxi stand.",
     example:"A: 3番(ばん)乗(の)り場(ば)はどこですか？\nB: あの階段(かいだん)を降(お)りてください。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Where is platform 3?\nB: Please go down those stairs.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japanese station 乗(の)り場(ば) (platforms) are numbered and color-coded. Floor markings show exactly where each car door will open. Passengers line up orderly (整列乗車(せいれつじょうしゃ)). Priority seats (優先席(ゆうせんせき)) near doors are for elderly, disabled, pregnant, and injured passengers."},

    {type:"teach", trg:"片道(かたみち)", src:"one way (ticket)", pos:"noun", gender:null,
     note:"片(かた) = one side, 道(みち) = road.\nOpposite: 往復(おうふく) (round trip).",
     example:"A: 片道(かたみち)ですか？往復(おうふく)ですか？\nB: 往復(おうふく)でお願(ねが)いします。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: One way or round trip?\nB: Round trip please.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"片道(かたみち) vs 往復(おうふく) is the first question at any ticket counter. Round trip tickets (往復(おうふく)きっぷ) are usually cheaper than two 片道(かたみち) tickets. The Shinkansen offers big discounts on 往復(おうふく). Always check before buying 片道(かたみち)."},

    {type:"teach", trg:"近道(ちかみち)", src:"shortcut", pos:"noun", gender:null,
     note:"近(ちか) = near, 道(みち) = road.\n近道(ちかみち)を教(おし)えてください = please tell me a shortcut.",
     example:"A: 駅(えき)まで近道(ちかみち)はありますか？\nB: あの公園(こうえん)を通(とお)ると速(はや)いですよ。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Is there a shortcut to the station?\nB: Going through that park is faster.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"近道(ちかみち) culture is strong in Japan. Local residents know hidden passages through neighborhoods. Station 近道(ちかみち) (shortcuts through underground passages) save minutes on commutes. Tokyo's underground network connects buildings, stations, and shops into a vast 近道(ちかみち) system."},

    {type:"teach", trg:"横断歩道(おうだんほどう)", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"Also: 横断(よこだん)歩道(ほどう). The zebra stripes on roads.\n横断歩道(おうだんほどう)を渡(わた)る = to cross at the crosswalk.",
     example:"A: 横断歩道(おうだんほどう)を渡(わた)ってください。\nB: 信号(しんごう)が青(あお)になったら渡(わた)ります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: I will cross when the light turns green.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"渋谷(しぶや)スクランブル交差点(こうさてん) is the world's busiest 横断歩道(おうだんほどう), with up to 3,000 people crossing simultaneously every light change. Japanese pedestrians strictly follow signals even with no cars in sight. Jaywalking is rare and frowned upon, especially when children might see."},

    {type:"teach", trg:"交差点(こうさてん)", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"交差(こうさ) = crossing, 点(てん) = point.\n次(つぎ)の交差点(こうさてん)を右(みぎ) = turn right at the next intersection.",
     example:"A: 次(つぎ)の交差点(こうさてん)を左(ひだり)に曲(ま)がってください。\nB: 三(みっ)つめの交差点(こうさてん)ですか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Please turn left at the next intersection.\nB: The third intersection?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Giving directions using 交差点(こうさてん) is standard in Japan. Addresses are confusing (block-based, not street-based), so landmarks and 交差点(こうさてん) are preferred. 'Turn right at the convenience store intersection' is a typical direction. GPS navigation says 次(つぎ)の交差点(こうさてん) constantly."},

    {type:"teach", trg:"一方通行(いっぽうつうこう)", src:"one-way street", pos:"noun", gender:null,
     note:"一方(いっぽう) = one direction. 通行(つうこう) = traffic passage.\n一方通行(いっぽうつうこう)です = it is a one-way street.",
     example:"A: この道(みち)は一方通行(いっぽうつうこう)ですよ。\nB: すみません、知(し)りませんでした。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: This road is one-way.\nB: Sorry, I did not know.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japan's narrow streets often require 一方通行(いっぽうつうこう) (one-way traffic). Many residential areas alternate direction by street. The signs show a blue arrow for the permitted direction. Foreign drivers frequently make mistakes with 一方通行(いっぽうつうこう) in cities."},

    {type:"teach", trg:"駐車場(ちゅうしゃじょう)", src:"parking lot", pos:"noun", gender:null,
     note:"駐車(ちゅうしゃ) = parking. 場(じょう) = place/grounds.\n駐車禁止(ちゅうしゃきんし) = no parking.",
     example:"A: この近(ちか)くに駐車場(ちゅうしゃじょう)はありますか？\nB: 駅(えき)の下(した)にあります。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Is there a parking lot nearby?\nB: There is one under the station.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Parking in Japan requires proof of a parking space (車庫証明(しゃこしょうめい)) just to buy a car. Urban parking is expensive and automated. Mechanical parking towers (機械式駐車場(きかいしきちゅうしゃじょう)) stack cars vertically like a Ferris wheel. Monthly 駐車場(ちゅうしゃじょう) fees in Tokyo can exceed 30,000 yen."},

    {type:"teach", trg:"運転免許(うんてんめんきょ)", src:"driver's license", pos:"noun", gender:null,
     note:"運転(うんてん) = driving. 免許(めんきょ) = license/permit.\n免許証(めんきょしょう) = license certificate.",
     example:"A: 運転免許(うんてんめんきょ)を持(も)っていますか？\nB: はい、二年(にねん)前(まえ)に取(と)りました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Do you have a driver's license?\nB: Yes, I got it two years ago.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese driver's licenses are famously hard to get. Driving school (教習所(きょうしゅうじょ)) costs 200,000-300,000 yen and takes weeks. The test has strict rules: check mirrors in specific order, look left-right-left at intersections, and make exaggerated head movements. Foreign licenses require conversion."},

    {type:"teach", trg:"渡(わた)る", src:"to cross (a road/bridge)", pos:"verb", gender:null,
     note:"Group 1 verb. 橋(はし)を渡(わた)る = to cross a bridge.\n道(みち)を渡(わた)る = to cross a road.",
     example:"A: この橋(はし)を渡(わた)るときれいな景色(けしき)が見(み)えます。\nB: 行(い)きましょう！\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: If you cross this bridge, you can see beautiful scenery.\nB: Let us go!\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"渡(わた)る appears in a famous proverb: 石橋(いしばし)を叩(たた)いて渡(わた)る (tap a stone bridge before crossing), meaning to be extremely cautious. This proverb perfectly captures the Japanese preference for careful preparation. 渡(わた)る also means 'to hand over' (渡(わた)す) in its transitive form."},

    {type:"teach", trg:"降(お)りる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. 電車(でんしゃ)を降(お)りる = to get off a train.\n山(やま)を降(お)りる = to descend a mountain.",
     example:"A: 次(つぎ)の駅(えき)で降(お)ります。\nB: このドアから降(お)りてください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I will get off at the next station.\nB: Please exit from this door.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"降(お)りる vs 降(お)ろす: intransitive vs transitive. You 降(お)りる (get off), but the bus driver 降(お)ろす (lets you off). In trains, announcements say 'doors opening on the right side' to tell you which side to 降(お)りる. Exiting before your stop (降(お)り遅(おく)れ) is a real fear on express trains."},

    // Quiz steps
    {type:"mc", q:"終電(しゅうでん) is important because:",
     opts:["Missing it means no trains until morning","It is the cheapest train","It is the fastest train","It goes to the airport"],
     ans:"Missing it means no trains until morning",
     hint:"After this last train, your options are taxis, manga cafes, or karaoke u... first train."},

    {type:"match", pairs:[
      {trg:"各駅停車(かくえきていしゃ)", src:"local train"},
      {trg:"終電(しゅうでん)", src:"last train"},
      {trg:"片道(かたみち)", src:"one way"},
      {trg:"近道(ちかみち)", src:"shortcut"},
      {trg:"交差点(こうさてん)", src:"intersection"}
    ,{trg:"時刻表(じこくひょう)",src:"timetable / schedule"}]},

    {type:"fb", s:"3番(ばん){1}から電車(でんしゃ)が出(で)ます。",
     a:["乗(の)り場(ば)"],
     opts:["乗(の)り場(ば)","降(お)り場(ば)","駅(えき)","ホーム"],
     hint:"The platform or boarding area where you catch your train. Numbered at Japanese stations.",
     sSrc:"The train departs from {1} number 3."},

    {type:"mc", q:"To buy a car in Japan, you need:",
     opts:["A recommendation letter","Proof of a parking space (車庫証明(しゃこしょうめい))","Only a driver's license","Permission from neighbors"],
     ans:"Proof of a parking space (車庫証明(しゃこしょうめい))",
     hint:"You must prove you have somewhere to park before you can purchase a vehicle."},

    {type:"fb", s:"横断歩道(おうだんほどう)を信号(しんごう)が{1}になったら渡(わた)りましょう。",
     a:["青(あお)"],
     opts:["青(あお)","赤(あか)","黄(き)いろ","白(しろ)"],
     hint:"Wait for the traffic light to show this color (called 'blue' in Japanese, though it looks green).",
     sSrc:"Let us cross the crosswalk when the signal turns {1}."},

    {type:"mc", q:"各駅停車(かくえきていしゃ) means the train:",
     opts:["Only runs on weekends","Goes to the airport","Stops at every station","Skips most stations"],
     ans:"Stops at every station",
     hint:"各駅(かくえき) means 'each s...' and 停車(ていしゃ) means 'stopping.' The slowest but most thorough service."},

    {type:"match", pairs:[
      {trg:"横断歩道(おうだんほどう)", src:"crosswalk"},
      {trg:"一方通行(いっぽうつうこう)", src:"one-way street"},
      {trg:"駐車場(ちゅうしゃじょう)", src:"parking lot"},
      {trg:"渡(わた)る", src:"to cross"},
      {trg:"降(お)りる", src:"to get off"}
    ]},

    {type:"fb", s:"日本(にほん)の{1}はとるのが大変(たいへん)です。",
     a:["運転免許(うんてんめんきょ)"],
     opts:["運転免許(うんてんめんきょ)","時刻表(じこくひょう)","乗(の)り場(ば)","交差点(こうさてん)"],
     hint:"Japanese driving licenses are famously expensive and difficult to obtain. Driving school costs 200,000+ yen.",
     sSrc:"Japanese {1} is difficult to get."}
  ]
};
export default BATCH7_L1;
