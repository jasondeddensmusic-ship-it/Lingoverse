// Batch 10 – Unit 15 (B1.1 Directions): Map Reading & Location Words
const BATCH10_L1 = {
  id:"jav2_u15l_b10_1", title:"ちずのよみかた", icon:"🗺️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちずのよみかた",
     desc:"Learn precise location and direction vocabulary for reading maps and following complex directions in Japanese cities.",
     goals:["Give and follow detailed directions","Read Japanese maps and signs","Use precise positional vocabulary"]},

    {type:"teach", trg:"こうさてん", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"こうさてんをわたる = to cross an intersection.\nしんごう = traffic light.",
     example:"A: つぎのこうさてんをみぎにまがってください。\nB: しんごうのあるこうさてんですか？",
     exampleSrc:"A: Turn right at the next intersection.\nB: The intersection with the traffic light?",
     funFact:"Japanese streets often lack names, making こうさてん (交差点) names crucial for navigation. Famous こうさてん like Shibuya Scramble (スクランブルこうさてん) are landmarks. Tokyo's address system uses ちょうめ (blocks) and ばんち (lot numbers) rather than street names."},

    {type:"teach", trg:"つきあたり", src:"dead end / end of a road", pos:"noun", gender:null,
     note:"つきあたりをみぎ = turn right at the dead end.\nUsed frequently in directions.",
     example:"A: このみちのつきあたりにあります。\nB: まっすぐですね。",
     exampleSrc:"A: It is at the end of this road.\nB: Straight ahead then.",
     funFact:"つきあたり (突き当たり) literally means 'the point where you bump into (a wall/building).' It is one of the most common direction words. Japanese directions often use landmarks and つきあたり rather than distance or street names: 'Go straight until you hit the end, then turn left.'"},

    {type:"teach", trg:"めじるし", src:"landmark / marker", pos:"noun", gender:null,
     note:"めじるしになるたてもの = a building that serves as a landmark.\nめ = eye, じるし = mark.",
     example:"A: なにかめじるしはありますか？\nB: おおきいこうばんがめじるしです。",
     exampleSrc:"A: Is there any landmark?\nB: The large police box is the landmark.",
     funFact:"めじるし (目印) is essential for navigation in Japan where addresses are confusing. When giving directions, Japanese people always mention めじるし: 'There is a red ポスト (mailbox) on the corner' or 'The building next to the コンビニ.' This practical approach compensates for the lack of street names."},

    {type:"teach", trg:"ちかみち", src:"shortcut", pos:"noun", gender:null,
     note:"ちかみちをする = to take a shortcut.\nちか = near, みち = road.",
     example:"A: ちかみちをしりませんか？\nB: あのこうえんをとおるとはやいですよ。",
     exampleSrc:"A: Do you know a shortcut?\nB: Going through that park is faster.",
     funFact:"ちかみち (近道) is often shared as local knowledge. Japanese people love discovering efficient ちかみち through back streets (うらどおり). The phrase じんせいにちかみちはない means 'there are no shortcuts in life,' a popular proverb about the value of hard work."},

    {type:"teach", trg:"いっぽうつうこう", src:"one-way street", pos:"noun", gender:null,
     note:"いっぽう = one direction, つうこう = traffic/passage.\nUsed for both cars and pedestrians.",
     example:"A: このみちはいっぽうつうこうです。\nB: じゃあ、べつのみちからいきましょう。",
     exampleSrc:"A: This road is one-way.\nB: Then let's go another way.",
     funFact:"いっぽうつうこう (一方通行) signs are common in Japan's narrow residential streets. Many Japanese side streets are so narrow that two cars cannot pass, making いっぽうつうこう necessary. Knowing which streets are いっぽうつうこう is part of local knowledge that GPS sometimes gets wrong."},

    {type:"teach", trg:"おうだんほどう", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"おうだんほどうをわたる = to cross at the crosswalk.\nしんごうまち = waiting for the light.",
     example:"A: おうだんほどうをわたってください。\nB: しんごうがみどりになるまでまちましょう。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: Let's wait until the light turns green.",
     funFact:"Japanese おうだんほどう (横断歩道) are strictly respected. Jaywalking is rare and socially frowned upon. Even on empty streets, people wait for みどり (green). Shibuya's スクランブルおうだんほどう (scramble crossing) handles up to 3,000 people per crossing cycle, making it the world's busiest."},

    {type:"teach", trg:"えきまえ", src:"station front / area in front of station", pos:"noun", gender:null,
     note:"えきまえひろば = station square.\nえき = station, まえ = front.",
     example:"A: えきまえでまちあわせしましょう。\nB: なんじにしますか？",
     exampleSrc:"A: Let's meet in front of the station.\nB: What time?",
     funFact:"えきまえ (駅前) is the default meeting spot in Japan and the commercial heart of most towns. えきまえ areas typically have shops, restaurants, and bus stops. The phrase えきちか (near the station) is a top selling point for apartments. Japanese urban planning centers around えきまえ development."},

    {type:"teach", trg:"ほこうしゃてんごく", src:"pedestrian-only zone", pos:"noun", gender:null,
     note:"Literally 'pedestrian paradise.' Common on weekends.\nあるきほうだい = walk freely.",
     example:"A: にちようびはほこうしゃてんごくです。\nB: のんびりあるけますね。",
     exampleSrc:"A: On Sundays it is a pedestrian zone.\nB: We can walk leisurely.",
     funFact:"ほこうしゃてんごく (歩行者天国) literally means 'pedestrian heaven.' Akihabara and Ginza in Tokyo close streets to cars on weekends, creating ほこうしゃてんごく. The concept started in 1970 and has become a beloved urban feature. Street performers and vendors set up during these times."},

    {type:"mc", q:"Why is めじるし essential for navigation in Japan?", opts:["Japanese addresses lack street names, so landmarks guide you","Landmarks are more accurate than GPS","Japanese people cannot read maps","Street signs are only in Japanese"], ans:"Japanese addresses lack street names, so landmarks guide you",
     hint:"Japan's address system uses blocks and lot numbers, making visual reference points crucial."},

    {type:"fb", s:"{1}でまちあわせしましょう。\n(Let's meet in front of the station.)", a:"えきまえ", opts:["えきまえ","こうさてん","つきあたり","おうだんほどう"], sSrc:"Let's meet in front of the station.",
     hint:"This default meeting spot is the commercial center of most Japanese towns."},

    {type:"match", pairs:[
      {trg:"こうさてん", src:"intersection"},
      {trg:"つきあたり", src:"dead end"},
      {trg:"ちかみち", src:"shortcut"},
      {trg:"ほこうしゃてんごく", src:"pedestrian zone"}
    ]},

    {type:"mc", q:"What does ほこうしゃてんごく literally mean?", opts:["Pedestrian heaven","Walking zone","Car-free road","Sunday market"], ans:"Pedestrian heaven",
     hint:"This poetic Japanese term for car-free zones combines 'p...' with 'h.../paradise.'"}
  ]
};
export default BATCH10_L1;
