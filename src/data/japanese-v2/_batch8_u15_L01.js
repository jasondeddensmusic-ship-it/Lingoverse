// Batch 8 – Unit 15 (A2.2 Directions): Landmarks & Navigation
const BATCH8_L1 = {
  id:"jav2_u15l_b8_1", title:"目印(めじるし)とナビ", icon:"🗼", xp:15, board:true,
  steps:[
    {type:"intro", title:"目印(めじるし)とナビ",
     desc:"Learn landmark and navigation vocabulary for getting around Japanese cities. Since many streets have no names, landmarks are essential for directions.",
     goals:["Identify common urban landmarks","Give and follow landmark-based directions","Navigate using Japanese spatial vocabulary"]},

    {type:"teach", trg:"目印(めじるし)", src:"landmark / sign / mark", pos:"noun", gender:null,
     note:"め (eye) + しるし (mark). 目印(めじるし)にする = to use as a landmark.\nUsed constantly in directions.",
     example:"A: 何(なに)か目印(めじるし)はありますか？\nB: 赤(あか)いポストが目印(めじるし)です。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Is there any landmark?\nB: The red post box is the landmark.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Because most Japanese streets lack names, directions rely on 目印(めじるし). Common ones: コンビニ (convenience store), 交差点(こうさてん) (intersection), and 信号(しんごう) (traffic light). Delivery drivers and taxi drivers become experts at 目印(めじるし) navigation."},

    {type:"teach", trg:"交差点(こうさてん)", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"Kanji: 交差点. 交差点(こうさてん)を渡(わた)る = to cross the intersection.\nスクランブル交差点(こうさてん) = scramble crossing.",
     example:"A: 次(つぎ)の交差点(こうさてん)を右(みぎ)に曲(ま)がってください。\nB: 信号(しんごう)のある交差点(こうさてん)ですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please turn right at the next intersection.\nB: The intersection with a traffic light?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"渋谷(しぶや)スクランブル交差点(こうさてん) is the world's busiest intersection, with up to 3,000 people crossing at once during peak times. It has become a symbol of Tokyo. 交差点(こうさてん) are the primary reference points in Japanese directions since streets often lack names."},

    {type:"teach", trg:"信号(しんごう)", src:"traffic light / signal", pos:"noun", gender:null,
     note:"Kanji: 信号. 青(あお)信号(しんごう) = green light. 赤(あか)信号(しんごう) = red light.\nNote: Japanese call green lights 'blue.'",
     example:"A: 信号(しんごう)が青(あお)になったら渡(わた)ってください。\nB: はい、わかりました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Please cross when the light turns green.\nB: Okay, understood.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Japanese traffic lights are called あお (blue) even though they look green. This is because classical Japanese grouped blue and green under one color word あお. Modern Japanese created みどり for green, but 信号(しんごう) kept あお. Some say Japanese green lights are slightly bluer than other countries to match the word."},

    {type:"teach", trg:"踏切(ふみきり)", src:"railroad crossing", pos:"noun", gender:null,
     note:"Kanji: 踏切. 踏切(ふみきり)が閉(し)まる = the crossing gate closes.\nカンカンカン = the crossing bell sound.",
     example:"A: 踏切(ふみきり)が閉(し)まっています。待(ま)ちましょう。\nB: 電車(でんしゃ)が来(く)るんですね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: The railroad crossing is closed. Let us wait.\nB: A train is coming.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"踏切(ふみきり) (railroad crossings) are extremely common in Japan due to the dense rail network. The distinctive カンカンカン bell sound is iconic. Long 踏切(ふみきり)待(ま)ち (waiting at crossings) is a common frustration. Some crossings in Tokyo close for 40+ minutes per hour during rush periods."},

    {type:"teach", trg:"横断歩道(おうだんほどう)", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"Kanji: 横断歩道. 横断歩道(おうだんほどう)を渡(わた)る = to cross the crosswalk.\nThe zebra stripes.",
     example:"A: 横断歩道(おうだんほどう)で渡(わた)ってください。\nB: はい、信号(しんごう)を待(ま)ちます。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: Okay, I will wait for the light.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Japanese 横断歩道(おうだんほどう) have a unique culture: drivers actually stop for pedestrians, even at crossings without signals. Students wear yellow hats and cross in groups. School zones have みどりのおばさん/おじさん (green crossing guards) who help children cross safely."},

    {type:"mc", q:"Why do Japanese people call green traffic lights あお (blue)?", opts:["Classical Japanese grouped blue and green under one word","The lights are actually blue in Japan","It is slang among young people","It is a regional dialect"], ans:"Classical Japanese grouped blue and green under one word",
     hint:"The traditional color category あお covered both b... and g...."},

    {type:"teach", trg:"地下鉄(ちかてつ)", src:"subway / underground railway", pos:"noun", gender:null,
     note:"Kanji: 地下鉄. 地下鉄(ちかてつ)の駅(えき) = subway station.\nメトロ is also used in some cities.",
     example:"A: 地下鉄(ちかてつ)で行(い)きましょう。早(はや)いです。\nB: 何番線(なんばんせん)ですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Let us go by subway. It is fast.\nB: Which line number?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Tokyo's 地下鉄(ちかてつ) has 13 lines operated by two companies (東京(とうきょう)メトロ and 都営(とえい)地下鉄(ちかてつ)). The system carries 8 million passengers daily. First built in 1927, the 銀座線(ぎんざせん) (Ginza line) was Asia's first subway. Japanese subways are famous for being clean, punctual, and safe."},

    {type:"teach", trg:"乗(の)り場(ば)", src:"boarding area / platform / stop", pos:"noun", gender:null,
     note:"乗(の)る (to board) + 場(ば) (place). バス乗(の)り場(ば) = bus stop.\nタクシー乗(の)り場(ば) = taxi stand.",
     example:"A: バス乗(の)り場(ば)はどこですか？\nB: 駅(えき)の北口(きたぐち)にあります。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Where is the bus stop?\nB: It is at the north exit of the station.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Japanese 乗(の)り場(ば) are precisely organized. Platforms have numbered positions where specific trains stop. Bus 乗(の)り場(ば) have schedules accurate to the minute. Even taxi 乗(の)り場(ば) have orderly queues. The efficiency of Japanese 乗(の)り場(ば) systems is studied worldwide."},

    {type:"teach", trg:"改札口(かいさつぐち)", src:"ticket gate / fare gate", pos:"noun", gender:null,
     note:"Kanji: 改札口. IC card or ticket required.\n自動(じどう)改札(かいさつ) = automatic ticket gate.",
     example:"A: 改札口(かいさつぐち)で待(ま)っています。\nB: 今(いま)行(い)きます。5分(ごふん)待(ま)ってください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I am waiting at the ticket gate.\nB: I am coming now. Please wait five minutes.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"改札口(かいさつぐち) meeting is a classic Japanese arrangement. Before smartphones, people agreed to meet at specific 改札口(かいさつぐち). Large stations have multiple exits (北口(きたぐち), 南口(みなみぐち)), so specifying which 改札口(かいさつぐち) is crucial. IC cards like Suica make passing through 改札(かいさつ) instant."},

    {type:"teach", trg:"駅近(えきちか)", src:"near the station / station area", pos:"noun", gender:null,
     note:"駅(えき) (station) + 近(ちか) (near). Short for 駅(えき)に近(ちか)い.\n駅近(えきちか)便利(べんり) = conveniently close to the station.",
     example:"A: 駅近(えきちか)のレストランを探(さが)しています。\nB: 北口(きたぐち)にたくさんありますよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I am looking for a restaurant near the station.\nB: There are many at the north exit.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"駅近(えきちか) is a key real estate term. Property value in Japan is largely determined by 駅(えき)からの距離(きょり) (distance from the station). 駅近(えきちか)物件(ぶっけん) (properties near stations) command premium prices. The phrase 駅近(えきちか)10分(じゅっぷん) (10 minutes from the station) is a standard listing format."},

    {type:"teach", trg:"地下街(ちかがい)", src:"underground shopping area", pos:"noun", gender:null,
     note:"地下(ちか) (underground) + 街(がい) (shopping area). Also 地下(ちか)みせ.\nFound beneath most major stations.",
     example:"A: 雨(あめ)ですから地下街(ちかがい)を歩(ある)きましょう。\nB: 駅(えき)からつながっていますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: It is raining so let us walk through the underground shops.\nB: Is it connected to the station?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japanese 地下街(ちかがい) (underground shopping streets) are elaborate networks beneath stations. なんば and うめだ in Osaka, 八重洲(やえす) in Tokyo have kilometers of underground shops and restaurants. You can walk for 30+ minutes underground without seeing daylight, staying dry in rain."},

    {type:"fb", s:"次(つぎ)の{1}を右(みぎ)に曲(ま)がってください。\n(Please turn right at the next intersection.)", a:"交差点(こうさてん)", opts:["交差点(こうさてん)","信号(しんごう)","踏切(ふみきり)","駅(えき)"], sSrc:"Please turn right at the next intersection.",
     hint:"This is where two roads cross each other."},

    {type:"teach", trg:"地図(ちず)", src:"map", pos:"noun", gender:null,
     note:"Kanji: 地図. 地図(ちず)を見(み)る = to look at a map.\nGoogleマップ = Google Maps.",
     example:"A: 地図(ちず)を見(み)てもわかりません。\nB: 一緒(いっしょ)に行(い)きましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I cannot figure it out even looking at the map.\nB: Let us go together.\nA: How was it?\nB: It was very good.",
     funFact:"Japanese 地図(ちず) at stations often show north at the top, but many street 地図(ちず) are oriented with 'forward' matching the direction you are facing. This avoids the confusion of translating north/south. Before smartphones, pocket 地図(ちず) books for each city were bestsellers."},

    {type:"teach", trg:"歩行者天国(ほこうしゃてんごく)", src:"pedestrian paradise (car-free zone)", pos:"noun", gender:null,
     note:"歩行者(ほこうしゃ) (pedestrian) + 天国(てんごく) (heaven/paradise).\nSunday car-free street events in cities.",
     example:"A: 日曜日(にちようび)は歩行者天国(ほこうしゃてんごく)です。\nB: 道(みち)で歩(ある)けるんですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Sunday is pedestrian paradise.\nB: So we can walk on the road.\nA: When was it?\nB: It was last summer.",
     funFact:"歩行者天国(ほこうしゃてんごく) turns major shopping streets car-free on weekends. 秋葉原(あきはばら) and 銀座(ぎんざ) in Tokyo are famous for this. The term literally means 'pedestrian heaven.' Street performers, food vendors, and casual strollers fill the roads. It started in the 1970s as a response to air pollution."},

    {type:"match", pairs:[{trg:"交差点(こうさてん)",src:"intersection"},{trg:"信号(しんごう)",src:"traffic light"},{trg:"改札口(かいさつぐち)",src:"ticket gate"},{trg:"乗(の)り場(ば)",src:"boarding area"},{trg:"地下鉄(ちかてつ)",src:"subway"}],
     hint:"Match each navigation term with its English meaning."},

    {type:"mc", q:"What is 歩行者天国(ほこうしゃてんごく)?", opts:["An underground passage","A car-free pedestrian zone on weekends","A religious festival","A type of crosswalk"], ans:"A car-free pedestrian zone on weekends",
     hint:"The name literally means 'p... paradise' or 'p... heaven.'"},

    {type:"fb", s:"{1}で待(ま)っています。\n(I am waiting at the ticket gate.)", a:"改札口(かいさつぐち)", opts:["改札口(かいさつぐち)","乗(の)り場(ば)","交差点(こうさてん)","駅近(えきちか)"], sSrc:"I am waiting at the ticket gate.",
     hint:"This is where you tap your IC card or insert your ticket to enter a station."},

    {type:"mc", q:"What is special about Japanese 地下街(ちかがい)?", opts:["Parking structures under buildings","Secret tunnels from World War II","Elaborate underground shopping networks beneath stations","Museums built underground"], ans:"Elaborate underground shopping networks beneath stations",
     hint:"You can walk for kilometers u..., staying dry in rain and connected to s...."}
  ,{type:"match",pairs:[{trg:"目印(めじるし)",src:"landmark / sign / mark"},{trg:"踏切(ふみきり)",src:"railroad crossing"},{trg:"横断歩道(おうだんほどう)",src:"pedestrian crossing / crosswalk"},{trg:"駅近(えきちか)",src:"near the station / station area"},{trg:"地下街(ちかがい)",src:"underground shopping area"},{trg:"地図(ちず)",src:"map"}]},{type:"match",pairs:[{trg:"歩行者天国(ほこうしゃてんごく)",src:"pedestrian paradise (car-free zone)"}]}]
};
export default BATCH8_L1;
