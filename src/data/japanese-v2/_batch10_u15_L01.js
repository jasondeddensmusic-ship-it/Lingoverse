// Batch 10 – Unit 15 (B1.1 Directions): Map Reading & Location Words
const BATCH10_L1 = {
  id:"jav2_u15l_b10_1", title:"地図(ちず)の読(よ)み方(かた)", icon:"🗺️", xp:15, board:true,
  steps:[
    {type:"intro", title:"地図(ちず)の読(よ)み方(かた)",
     desc:"Learn precise location and direction vocabulary for reading maps and following complex directions in Japanese cities.",
     goals:["Give and follow detailed directions","Read Japanese maps and signs","Use precise positional vocabulary"]},

    {type:"teach", trg:"交差点(こうさてん)", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"交差点(こうさてん)を渡(わた)る = to cross an intersection.\n信号(しんごう) = traffic light.",
     example:"A: 次(つぎ)の交差点(こうさてん)を右(みぎ)に曲(ま)がってください。\nB: 信号(しんごう)のある交差点(こうさてん)ですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Turn right at the next intersection.\nB: The intersection with the traffic light?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Japanese streets often lack names, making 交差点(こうさてん) (交差点) names crucial for navigation. Famous 交差点(こうさてん) like Shibuya Scramble (スクランブル交差点(こうさてん)) are landmarks. Tokyo's address system uses 丁目(ちょうめ) (blocks) and 番地(ばんち) (lot numbers) rather than street names."},

    {type:"teach", trg:"突(つ)き当(あ)たり", src:"dead end / end of a road", pos:"noun", gender:null,
     note:"突(つ)き当(あ)たりを右(みぎ) = turn right at the dead end.\nUsed frequently in directions.",
     example:"A: この道(みち)の突(つ)き当(あ)たりにあります。\nB: まっすぐですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: It is at the end of this road.\nB: Straight ahead then.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"突(つ)き当(あ)たり (突き当たり) literally means 'the point where you bump into (a wall/building).' It is one of the most common direction words. Japanese directions often use landmarks and 突(つ)き当(あ)たり rather than distance or street names: 'Go straight until you hit the end, then turn left.'"},

    {type:"teach", trg:"目印(めじるし)", src:"landmark / marker", pos:"noun", gender:null,
     note:"目印(めじるし)になる建物(たてもの) = a building that serves as a landmark.\n目(め) = eye, 印(じるし) = mark.",
     example:"A: 何(なに)か目印(めじるし)はありますか？\nB: 大(おお)きい交番(こうばん)が目印(めじるし)です。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Is there any landmark?\nB: The large police box is the landmark.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"目印(めじるし) (目印) is essential for navigation in Japan where addresses are confusing. When giving directions, Japanese people always mention 目印(めじるし): 'There is a red ポスト (mailbox) on the corner' or 'The building next to the コンビニ.' This practical approach compensates for the lack of street names."},

    {type:"teach", trg:"近道(ちかみち)", src:"shortcut", pos:"noun", gender:null,
     note:"近道(ちかみち)をする = to take a shortcut.\n近(ちか) = near, 道(みち) = road.",
     example:"A: 近道(ちかみち)を知(し)りませんか？\nB: あの公園(こうえん)を通(とお)ると早(はや)いですよ。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Do you know a shortcut?\nB: Going through that park is faster.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"近道(ちかみち) (近道) is often shared as local knowledge. Japanese people love discovering efficient 近道(ちかみち) through back streets (裏通(うらどお)り). The phrase 人生(じんせい)に近道(ちかみち)はない means 'there are no shortcuts in life,' a popular proverb about the value of hard work."},

    {type:"teach", trg:"一方通行(いっぽうつうこう)", src:"one-way street", pos:"noun", gender:null,
     note:"一方(いっぽう) = one direction, 通行(つうこう) = traffic/passage.\nUsed for both cars and pedestrians.",
     example:"A: この道(みち)は一方通行(いっぽうつうこう)です。\nB: じゃあ、別(べつ)の道(みち)から行(い)きましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: This road is one-way.\nB: Then let's go another way.\nA: How was it?\nB: It was very good.",
     funFact:"一方通行(いっぽうつうこう) (一方通行) signs are common in Japan's narrow residential streets. Many Japanese side streets are so narrow that two cars cannot pass, making 一方通行(いっぽうつうこう) necessary. Knowing which streets are 一方通行(いっぽうつうこう) is part of local knowledge that GPS sometimes gets wrong."},

    {type:"teach", trg:"横断歩道(おうだんほどう)", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"横断歩道(おうだんほどう)を渡(わた)る = to cross at the crosswalk.\n信号待(しんごうま)ち = waiting for the light.",
     example:"A: 横断歩道(おうだんほどう)を渡(わた)ってください。\nB: 信号(しんごう)が緑(みどり)になるまで待(ま)ちましょう。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: Let's wait until the light turns green.\nA: When was it?\nB: It was last summer.",
     funFact:"Japanese 横断歩道(おうだんほどう) (横断歩道) are strictly respected. Jaywalking is rare and socially frowned upon. Even on empty streets, people wait for 緑(みどり) (green). Shibuya's スクランブル横断歩道(おうだんほどう) (scramble crossing) handles up to 3,000 people per crossing cycle, making it the world's busiest."},

    {type:"teach", trg:"駅前(えきまえ)", src:"station front / area in front of station", pos:"noun", gender:null,
     note:"駅前(えきまえ)広場(ひろば) = station square.\n駅(えき) = station, 前(まえ) = front.",
     example:"A: 駅前(えきまえ)で待(ま)ち合(あ)わせしましょう。\nB: 何時(なんじ)にしますか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Let's meet in front of the station.\nB: What time?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"駅前(えきまえ) (駅前) is the default meeting spot in Japan and the commercial heart of most towns. 駅前(えきまえ) areas typically have shops, restaurants, and bus stops. The phrase 駅近(えきちか) (near the station) is a top selling point for apartments. Japanese urban planning centers around 駅前(えきまえ) development."},

    {type:"teach", trg:"歩行者天国(ほこうしゃてんごく)", src:"pedestrian-only zone", pos:"noun", gender:null,
     note:"Literally 'pedestrian paradise.' Common on weekends.\n歩(ある)き放題(ほうだい) = walk freely.",
     example:"A: 日曜日(にちようび)は歩行者天国(ほこうしゃてんごく)です。\nB: のんびり歩(ある)けますね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: On Sundays it is a pedestrian zone.\nB: We can walk leisurely.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"歩行者天国(ほこうしゃてんごく) (歩行者天国) literally means 'pedestrian heaven.' Akihabara and Ginza in Tokyo close streets to cars on weekends, creating 歩行者天国(ほこうしゃてんごく). The concept started in 1970 and has become a beloved urban feature. Street performers and vendors set up during these times."},

    {type:"mc", q:"Why is 目印(めじるし) essential for navigation in Japan?", opts:["Japanese addresses lack street names, so landmarks guide you","Landmarks are more accurate than GPS","Japanese people cannot read maps","Street signs are only in Japanese"], ans:"Japanese addresses lack street names, so landmarks guide you",
     hint:"Japan's address system uses blocks and lot numbers, making visual reference points crucial."},

    {type:"fb", s:"{1}で待(ま)ち合(あ)わせしましょう。\n(Let's meet in front of the station.)", a:"駅前(えきまえ)", opts:["駅前(えきまえ)","交差点(こうさてん)","突(つ)き当(あ)たり","横断歩道(おうだんほどう)"], sSrc:"Let's meet in front of the station.",
     hint:"This default meeting spot is the commercial center of most Japanese towns."},

    {type:"match", pairs:[
      {trg:"交差点(こうさてん)", src:"intersection"},
      {trg:"突(つ)き当(あ)たり", src:"dead end"},
      {trg:"近道(ちかみち)", src:"shortcut"},
      {trg:"歩行者天国(ほこうしゃてんごく)", src:"pedestrian zone"}
    ]},

    {type:"mc", q:"What does 歩行者天国(ほこうしゃてんごく) literally mean?", opts:["Pedestrian heaven","Walking zone","Car-free road","Sunday market"], ans:"Pedestrian heaven",
     hint:"This poetic Japanese term for car-free zones combines 'p...' with 'h.../paradise.'"}
  ]
};
export default BATCH10_L1;
