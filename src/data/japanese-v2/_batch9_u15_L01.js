// Batch 9 – Unit 15 (B1.1 Directions): Navigation & Transportation
const BATCH9_L1 = {
  id:"jav2_u15l_b9_1", title:"こうつう", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうつう",
     desc:"Master transportation vocabulary for navigating Japan's world-class transit system. Essential for daily life and travel.",
     goals:["Navigate train and bus systems","Buy tickets and use IC cards","Understand transit announcements"]},

    {type:"teach", trg:"かいさつぐち", src:"ticket gate", pos:"noun", gender:null,
     note:"かいさつ = ticket inspection, ぐち = entrance.\nIC card or ticket required to pass.",
     example:"A: かいさつぐちはどこですか？\nB: あのかいだんをおりてください。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Where is the ticket gate?\nB: Go down those stairs.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japanese かいさつぐち (改札口) are automated with IC card readers. The smooth flow of thousands of commuters tapping through かいさつぐち at rush hour is a marvel of efficiency. If your fare is short, you use a のりこしせいさんき (fare adjustment machine) before exiting."},

    {type:"teach", trg:"ホーム", src:"platform (train)", pos:"noun", gender:null,
     note:"Short for プラットホーム. ばんせん = track number.\nホームドア = platform doors.",
     example:"A: さんばんせんのホームにいってください。\nB: わかりました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please go to platform 3.\nB: Understood.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japanese ホーム have marked lines where each car door will stop. Commuters queue orderly behind these lines. えきいん (station staff) with white gloves push passengers into crowded trains during rush hour. ホームドア (platform screen doors) are being installed at busy stations for safety."},

    {type:"teach", trg:"きっぷうりば", src:"ticket counter / ticket office", pos:"noun", gender:null,
     note:"きっぷ = ticket, うりば = selling place.\nまどぐち = service window.",
     example:"A: きっぷうりばでしんかんせんのきっぷをかいます。\nB: じどうけんばいきもありますよ。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I will buy bullet train tickets at the ticket office.\nB: There are also vending machines.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Modern Japanese stations have both きっぷうりば counters and じどうけんばいき (automatic ticket machines). For しんかんせん and special express trains, みどりのまどぐち (Green Window, JR ticket offices) handle reservations. Many travelers now use スマートEX and えきねっと apps instead."},

    {type:"teach", trg:"しんかんせん", src:"bullet train / Shinkansen", pos:"noun", gender:null,
     note:"Japan's high-speed rail network. Up to 320 km/h.\nのぞみ = fastest type. こだま = local type.",
     example:"A: しんかんせんでとうきょうからおおさかまでいきます。\nB: にじかんはんくらいですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I will go from Tokyo to Osaka by bullet train.\nB: About two and a half hours.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"しんかんせん (新幹線) launched in 1964 for the Tokyo Olympics and has had ZERO passenger fatalities in 60+ years. Trains depart on time to the second. The average delay is under one minute per year. Types include のぞみ (fastest), ひかり (semi-express), and こだま (local stops)."},

    {type:"teach", trg:"ちかてつ", src:"subway / metro", pos:"noun", gender:null,
     note:"ちか = underground, てつ = railway.\nとうきょうメトロ and とえいちかてつ serve Tokyo.",
     example:"A: ちかてつがいちばんはやいです。\nB: なんばんせんにのりますか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The subway is fastest.\nB: Which line do we take?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Tokyo's ちかてつ (地下鉄) network has 13 lines and 285 stations, carrying 8.7 million passengers daily. Osaka, Nagoya, Fukuoka, and Sapporo also have ちかてつ. The Tokyo ちかてつ map looks intimidating but is color-coded for easy navigation. Each line has a letter and station numbers."},

    {type:"teach", trg:"ていきけん", src:"commuter pass", pos:"noun", gender:null,
     note:"Monthly or multi-month pass for a fixed route.\nつうきん = commuting, つうがく = school commute.",
     example:"A: ていきけんをかいたいです。\nB: まどぐちでもうしこんでください。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I want to buy a commuter pass.\nB: Please apply at the service window.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japanese companies typically pay for employees' ていきけん (定期券) as part of benefits. A 6-month ていきけん for a Tokyo commute can cost over 100,000 yen. Most ていきけん are now loaded onto IC cards. Students get discounted がくせいていきけん (student passes)."},

    {type:"teach", trg:"しゅうでん", src:"last train", pos:"noun", gender:null,
     note:"しゅうでんにまにあう = to catch the last train.\nしゅうでんをのがす = to miss the last train.",
     example:"A: しゅうでんはなんじですか？\nB: じゅうにじすぎです。いそぎましょう。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: What time is the last train?\nB: Past midnight. Let's hurry.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"しゅうでん (終電) is a crucial concept in Japanese nightlife. Missing the しゅうでん means either an expensive タクシー ride or staying at a ネットカフェ (internet cafe) until the しはつ (first train, around 5 AM). The phrase しゅうでんダッシュ describes the mad sprint to catch the last train."},

    {type:"mc", q:"What happens if your fare is short at the ticket gate?", opts:["Use the fare adjustment machine before exiting","The gate opens anyway","An alarm sounds","You pay the staff directly"], ans:"Use the fare adjustment machine before exiting",
     hint:"The のりこしせいさんき lets you pay the difference b... passing through the exit gate."},

    {type:"fb", s:"{1}はなんじですか？じゅうにじすぎです。\n(What time is the last train? Past midnight.)", a:"しゅうでん", opts:["しゅうでん","しはつ","しんかんせん","ちかてつ"], sSrc:"What time is the last train? Past midnight.",
     hint:"Missing this means an expensive taxi ride or waiting until 5 AM for the first train."},

    {type:"match", pairs:[
      {trg:"かいさつぐち", src:"ticket gate"},
      {trg:"ホーム", src:"platform"},
      {trg:"しんかんせん", src:"bullet train"},
      {trg:"ていきけん", src:"commuter pass"}
    ]},

    {type:"mc", q:"What is remarkable about the Shinkansen's safety record?", opts:["Zero passenger fatalities in 60+ years","It has never been late","It runs 24 hours a day","It is the cheapest train in Japan"], ans:"Zero passenger fatalities in 60+ years",
     hint:"Since launching in 1964, the bullet train has maintained a perfect safety record."}
  ]
};
export default BATCH9_L1;
