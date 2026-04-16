// Batch 8 – Unit 15 (A2.2 Directions): Landmarks & Navigation
const BATCH8_L1 = {
  id:"jav2_u15l_b8_1", title:"めじるしとナビ", icon:"🗼", xp:15, board:true,
  steps:[
    {type:"intro", title:"めじるしとナビ",
     desc:"Learn landmark and navigation vocabulary for getting around Japanese cities. Since many streets have no names, landmarks are essential for directions.",
     goals:["Identify common urban landmarks","Give and follow landmark-based directions","Navigate using Japanese spatial vocabulary"]},

    {type:"teach", trg:"めじるし", src:"landmark / sign / mark", pos:"noun", gender:null,
     note:"め (eye) + しるし (mark). めじるしにする = to use as a landmark.\nUsed constantly in directions.",
     example:"A: なにかめじるしはありますか？\nB: あかいポストがめじるしです。",
     exampleSrc:"A: Is there any landmark?\nB: The red post box is the landmark.",
     funFact:"Because most Japanese streets lack names, directions rely on めじるし. Common ones: コンビニ (convenience store), こうさてん (intersection), and しんごう (traffic light). Delivery drivers and taxi drivers become experts at めじるし navigation."},

    {type:"teach", trg:"こうさてん", src:"intersection / crossroads", pos:"noun", gender:null,
     note:"Kanji: 交差点. こうさてんをわたる = to cross the intersection.\nスクランブルこうさてん = scramble crossing.",
     example:"A: つぎのこうさてんをみぎにまがってください。\nB: しんごうのあるこうさてんですか？",
     exampleSrc:"A: Please turn right at the next intersection.\nB: The intersection with a traffic light?",
     funFact:"しぶやスクランブルこうさてん is the world's busiest intersection, with up to 3,000 people crossing at once during peak times. It has become a symbol of Tokyo. こうさてん are the primary reference points in Japanese directions since streets often lack names."},

    {type:"teach", trg:"しんごう", src:"traffic light / signal", pos:"noun", gender:null,
     note:"Kanji: 信号. あおしんごう = green light. あかしんごう = red light.\nNote: Japanese call green lights 'blue.'",
     example:"A: しんごうがあおになったらわたってください。\nB: はい、わかりました。",
     exampleSrc:"A: Please cross when the light turns green.\nB: Okay, understood.",
     funFact:"Japanese traffic lights are called あお (blue) even though they look green. This is because classical Japanese grouped blue and green under one color word あお. Modern Japanese created みどり for green, but しんごう kept あお. Some say Japanese green lights are slightly bluer than other countries to match the word."},

    {type:"teach", trg:"ふみきり", src:"railroad crossing", pos:"noun", gender:null,
     note:"Kanji: 踏切. ふみきりがしまる = the crossing gate closes.\nカンカンカン = the crossing bell sound.",
     example:"A: ふみきりがしまっています。まちましょう。\nB: でんしゃがくるんですね。",
     exampleSrc:"A: The railroad crossing is closed. Let us wait.\nB: A train is coming.",
     funFact:"ふみきり (railroad crossings) are extremely common in Japan due to the dense rail network. The distinctive カンカンカン bell sound is iconic. Long ふみきりまち (waiting at crossings) is a common frustration. Some crossings in Tokyo close for 40+ minutes per hour during rush periods."},

    {type:"teach", trg:"おうだんほどう", src:"pedestrian crossing / crosswalk", pos:"noun", gender:null,
     note:"Kanji: 横断歩道. おうだんほどうをわたる = to cross the crosswalk.\nThe zebra stripes.",
     example:"A: おうだんほどうでわたってください。\nB: はい、しんごうをまちます。",
     exampleSrc:"A: Please cross at the crosswalk.\nB: Okay, I will wait for the light.",
     funFact:"Japanese おうだんほどう have a unique culture: drivers actually stop for pedestrians, even at crossings without signals. Students wear yellow hats and cross in groups. School zones have みどりのおばさん/おじさん (green crossing guards) who help children cross safely."},

    {type:"mc", q:"Why do Japanese people call green traffic lights あお (blue)?", opts:["Classical Japanese grouped blue and green under one word","The lights are actually blue in Japan","It is slang among young people","It is a regional dialect"], ans:"Classical Japanese grouped blue and green under one word",
     hint:"The traditional color category あお covered both b... and g...."},

    {type:"teach", trg:"ちかてつ", src:"subway / underground railway", pos:"noun", gender:null,
     note:"Kanji: 地下鉄. ちかてつのえき = subway station.\nメトロ is also used in some cities.",
     example:"A: ちかてつでいきましょう。はやいです。\nB: なんばんせんですか？",
     exampleSrc:"A: Let us go by subway. It is fast.\nB: Which line number?",
     funFact:"Tokyo's ちかてつ has 13 lines operated by two companies (とうきょうメトロ and とえいちかてつ). The system carries 8 million passengers daily. First built in 1927, the ぎんざせん (Ginza line) was Asia's first subway. Japanese subways are famous for being clean, punctual, and safe."},

    {type:"teach", trg:"のりば", src:"boarding area / platform / stop", pos:"noun", gender:null,
     note:"のる (to board) + ば (place). バスのりば = bus stop.\nタクシーのりば = taxi stand.",
     example:"A: バスのりばはどこですか？\nB: えきのきたぐちにあります。",
     exampleSrc:"A: Where is the bus stop?\nB: It is at the north exit of the station.",
     funFact:"Japanese のりば are precisely organized. Platforms have numbered positions where specific trains stop. Bus のりば have schedules accurate to the minute. Even taxi のりば have orderly queues. The efficiency of Japanese のりば systems is studied worldwide."},

    {type:"teach", trg:"かいさつぐち", src:"ticket gate / fare gate", pos:"noun", gender:null,
     note:"Kanji: 改札口. IC card or ticket required.\nじどうかいさつ = automatic ticket gate.",
     example:"A: かいさつぐちでまっています。\nB: いまいきます。ごふんまってください。",
     exampleSrc:"A: I am waiting at the ticket gate.\nB: I am coming now. Please wait five minutes.",
     funFact:"かいさつぐち meeting is a classic Japanese arrangement. Before smartphones, people agreed to meet at specific かいさつぐち. Large stations have multiple exits (きたぐち, みなみぐち), so specifying which かいさつぐち is crucial. IC cards like Suica make passing through かいさつ instant."},

    {type:"teach", trg:"えきちか", src:"near the station / station area", pos:"noun", gender:null,
     note:"えき (station) + ちか (near). Short for えきにちかい.\nえきちかべんり = conveniently close to the station.",
     example:"A: えきちかのレストランをさがしています。\nB: きたぐちにたくさんありますよ。",
     exampleSrc:"A: I am looking for a restaurant near the station.\nB: There are many at the north exit.",
     funFact:"えきちか is a key real estate term. Property value in Japan is largely determined by えきからのきょり (distance from the station). えきちかぶっけん (properties near stations) command premium prices. The phrase えきちかじゅっぷん (10 minutes from the station) is a standard listing format."},

    {type:"teach", trg:"ちかみせ", src:"underground shopping area", pos:"noun", gender:null,
     note:"ちか (underground) + みせ (shops). Also ちかがい.\nFound beneath most major stations.",
     example:"A: あめですからちかがいをあるきましょう。\nB: えきからつながっていますか？",
     exampleSrc:"A: It is raining so let us walk through the underground shops.\nB: Is it connected to the station?",
     funFact:"Japanese ちかがい (underground shopping streets) are elaborate networks beneath stations. なんば and うめだ in Osaka, やえす in Tokyo have kilometers of underground shops and restaurants. You can walk for 30+ minutes underground without seeing daylight, staying dry in rain."},

    {type:"fb", s:"つぎの{1}をみぎにまがってください。\n(Please turn right at the next intersection.)", a:"こうさてん", opts:["こうさてん","しんごう","ふみきり","えき"], sSrc:"Please turn right at the next intersection.",
     hint:"This is where two roads cross each other."},

    {type:"teach", trg:"ちず", src:"map", pos:"noun", gender:null,
     note:"Kanji: 地図. ちずをみる = to look at a map.\nGoogleマップ = Google Maps.",
     example:"A: ちずをみてもわかりません。\nB: いっしょにいきましょう。",
     exampleSrc:"A: I cannot figure it out even looking at the map.\nB: Let us go together.",
     funFact:"Japanese ちず at stations often show north at the top, but many street ちず are oriented with 'forward' matching the direction you are facing. This avoids the confusion of translating north/south. Before smartphones, pocket ちず books for each city were bestsellers."},

    {type:"teach", trg:"ほこしゃてんごく", src:"pedestrian paradise (car-free zone)", pos:"noun", gender:null,
     note:"ほこしゃ (pedestrian) + てんごく (heaven/paradise).\nSunday car-free street events in cities.",
     example:"A: にちようびはほこしゃてんごくです。\nB: みちであるけるんですね。",
     exampleSrc:"A: Sunday is pedestrian paradise.\nB: So we can walk on the road.",
     funFact:"ほこしゃてんごく turns major shopping streets car-free on weekends. あきはばら and ぎんざ in Tokyo are famous for this. The term literally means 'pedestrian heaven.' Street performers, food vendors, and casual strollers fill the roads. It started in the 1970s as a response to air pollution."},

    {type:"match", pairs:[{trg:"こうさてん",src:"intersection"},{trg:"しんごう",src:"traffic light"},{trg:"かいさつぐち",src:"ticket gate"},{trg:"のりば",src:"boarding area"},{trg:"ちかてつ",src:"subway"}],
     hint:"Match each navigation term with its English meaning."},

    {type:"mc", q:"What is ほこしゃてんごく?", opts:["A car-free pedestrian zone on weekends","A religious festival","A type of crosswalk","An underground passage"], ans:"A car-free pedestrian zone on weekends",
     hint:"The name literally means 'p... paradise' or 'p... heaven.'"},

    {type:"fb", s:"{1}でまっています。\n(I am waiting at the ticket gate.)", a:"かいさつぐち", opts:["かいさつぐち","のりば","こうさてん","えきちか"], sSrc:"I am waiting at the ticket gate.",
     hint:"This is where you tap your IC card or insert your ticket to enter a station."},

    {type:"mc", q:"What is special about Japanese ちかがい?", opts:["Elaborate underground shopping networks beneath stations","Museums built underground","Parking structures under buildings","Secret tunnels from World War II"], ans:"Elaborate underground shopping networks beneath stations",
     hint:"You can walk for kilometers u..., staying dry in rain and connected to s...."}
  ]
};
export default BATCH8_L1;
