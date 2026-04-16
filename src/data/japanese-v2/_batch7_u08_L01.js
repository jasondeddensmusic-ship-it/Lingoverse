// Batch 7 – Unit 08 (A2.1 Places & Location): Buildings & Facilities
const BATCH7_L1 = {
  id:"jav2_u08l_b7_1", title:"しせつとたてもの", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しせつとたてもの",
     desc:"Learn the names of buildings and public facilities you encounter in a Japanese town. From hospitals to post offices, these nouns will help you navigate any neighborhood.",
     goals:["Name common public buildings and facilities","Ask for directions to specific places","Use location phrases with new building vocabulary"]},

    {type:"teach", trg:"びょういん", src:"hospital", pos:"noun", gender:null,
     note:"Kanji: 病院. びょういんにいく = to go to the hospital.\nDifferent from クリニック (small clinic).",
     example:"A: びょういんはどこですか？\nB: あのおおきいたてものです。",
     exampleSrc:"A: Where is the hospital?\nB: That big building over there.",
     funFact:"Japanese hospitals (びょういん) often have long wait times. The expression 3じかんまち、3ぷんしんさつ (3-hour wait, 3-minute consultation) is a famous complaint. Many people go to smaller クリニック (clinics) first. You need a referral letter (紹介状) for large hospitals."},

    {type:"teach", trg:"やくしょ", src:"city hall / government office", pos:"noun", gender:null,
     note:"Kanji: 役所. Also: しやくしょ = city hall.\nやくしょにとどけをだす = to file paperwork.",
     example:"A: ひっこしのてつづきはやくしょでします。\nB: なんじまであいていますか？",
     exampleSrc:"A: Moving paperwork is done at city hall.\nB: Until what time is it open?",
     funFact:"やくしょ handles all life events: birth registration, marriage, moving, passports, and death certificates. Japanese bureaucracy requires physical documents with personal seals (はんこ). Digital government services are slowly expanding, but paper forms remain common."},

    {type:"teach", trg:"としょかん", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. としょかんでほんをかりる = to borrow books at the library.",
     example:"A: としょかんでべんきょうしましょう。\nB: いいですね。しずかですから。",
     exampleSrc:"A: Let us study at the library.\nB: Good idea. It is quiet.",
     funFact:"Japanese libraries (としょかん) are remarkably quiet and well-maintained. Many have manga sections, CD/DVD lending, and free study rooms. Some modern libraries like Takeo City Library (designed with Tsutaya) have become tourist attractions with cafes inside."},

    {type:"teach", trg:"ゆうびんきょく", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. ゆうびんきょくいん = postal worker.\nMark: red 〒 symbol.",
     example:"A: ゆうびんきょくはなんじからですか？\nB: くじからごじまでです。",
     exampleSrc:"A: From what time is the post office open?\nB: From 9 to 5.",
     funFact:"Japanese post offices (ゆうびんきょく) do more than mail. They offer savings accounts, insurance, and ATM services. The red 〒 symbol is unique to Japan. New Year postcards (ねんがじょう) are a massive postal event: over 2 billion cards are sent annually."},

    {type:"teach", trg:"けいさつしょ", src:"police station", pos:"noun", gender:null,
     note:"Also: こうばん = police box (small local station).\nけいさつ = police. しょ = station/office.",
     example:"A: さいふをなくしました。けいさつしょはどこですか？\nB: えきのとなりにあります。",
     exampleSrc:"A: I lost my wallet. Where is the police station?\nB: It is next to the station.",
     funFact:"Japan's こうばん (police box) system is admired worldwide. Small neighborhood police stations staffed by officers who know the local area. They help with directions, lost items, and minor disputes. Japan's lost-and-found system is legendary. Over 3 million items are returned annually."},

    {type:"teach", trg:"しょうぼうしょ", src:"fire station", pos:"noun", gender:null,
     note:"しょうぼうし = firefighter. しょうぼうしゃ = fire truck.\nきゅうきゅうしゃ = ambulance.",
     example:"A: しょうぼうしょのでんわばんごうは119ばんです。\nB: けいさつは110ばんですね。",
     exampleSrc:"A: The fire station number is 119.\nB: Police is 110, right?",
     funFact:"Japan's emergency numbers differ from many countries: 110 for police, 119 for fire and ambulance. しょうぼうしょ also dispatches ambulances. Japanese firefighters (しょうぼうし) are highly respected and perform annual acrobatic ladder performances (出初式) on New Year."},

    {type:"teach", trg:"たいいくかん", src:"gymnasium / sports hall", pos:"noun", gender:null,
     note:"たいいく = physical education. かん = hall/building.\nEvery school has a たいいくかん.",
     example:"A: たいいくかんでバスケットボールをしましょう。\nB: いいですね。",
     exampleSrc:"A: Let us play basketball in the gym.\nB: Sounds good.",
     funFact:"Every Japanese school has a たいいくかん that doubles as a community hall and emergency shelter. During disasters, schools open their gyms for evacuees. The たいいくかん also hosts entrance ceremonies (にゅうがくしき) and graduation ceremonies (そつぎょうしき)."},

    {type:"teach", trg:"はくぶつかん", src:"museum", pos:"noun", gender:null,
     note:"はく = broad, ぶつ = things, かん = hall.\nびじゅつかん = art museum (different word).",
     example:"A: はくぶつかんにいきませんか？\nB: いいですね。にちようびはむりょうですよ。",
     exampleSrc:"A: Shall we go to the museum?\nB: Sounds good. It is free on Sundays.",
     funFact:"Japan has over 5,700 museums (はくぶつかん), one of the highest numbers per capita. The Tokyo National Museum (東京国立博物館) holds 120,000 artifacts. Japanese museums range from national treasures to quirky specialty museums like the Cup Noodle Museum and the Toilet Museum."},

    {type:"teach", trg:"じんじゃ", src:"Shinto shrine", pos:"noun", gender:null,
     note:"Also: おみや (polite). Mark: torii gate (鳥居).\nおまいりする = to visit a shrine.",
     example:"A: おしょうがつにじんじゃにいきますか？\nB: はい、はつもうでにいきます。",
     exampleSrc:"A: Do you go to a shrine at New Year?\nB: Yes, I go for the first visit.",
     funFact:"Japan has about 80,000 じんじゃ (Shinto shrines), more than convenience stores. はつもうで (first shrine visit of the year) draws over 80 million visitors in the first three days of January. You clap twice, bow, and make a wish. The torii gate marks the boundary between sacred and ordinary."},

    {type:"teach", trg:"おてら", src:"Buddhist temple", pos:"noun", gender:null,
     note:"Also: じ/てら without お prefix. Mark: 卍 (manji) symbol on maps.\nざぜん = temple meditation.",
     example:"A: きょうとでおてらをみましたか？\nB: はい、きんかくじにいきました。",
     exampleSrc:"A: Did you see temples in Kyoto?\nB: Yes, I went to Kinkakuji.",
     funFact:"Japan has 77,000 Buddhist temples (おてら). Most Japanese practice both Shinto and Buddhism without contradiction. They visit じんじゃ for life celebrations and おてら for funerals. Kyoto alone has over 1,600 temples. Many offer stays (宿坊) where visitors can experience monk life."},

    {type:"teach", trg:"くうこう", src:"airport", pos:"noun", gender:null,
     note:"Kanji: 空港. くう = sky/air, こう = port.\nくうこうバス = airport bus.",
     example:"A: くうこうまでどうやっていきますか？\nB: でんしゃでいちじかんです。",
     exampleSrc:"A: How do you get to the airport?\nB: One hour by train.",
     funFact:"Narita Airport is 60 km from central Tokyo, an unusually long distance. This is because of fierce 1960s-70s protests by farmers who refused to sell their land. Some holdout farms still exist inside the airport perimeter. Haneda Airport, closer to the city, has become the preferred gateway."},

    {type:"teach", trg:"こうえん", src:"park", pos:"noun", gender:null,
     note:"Kanji: 公園. こうえんであそぶ = to play in the park.\nちゅうおうこうえん = central park.",
     example:"A: にちようびはこうえんにいきましょう。\nB: いいですね。おべんとうをもっていきましょう。",
     exampleSrc:"A: Let us go to the park on Sunday.\nB: Sounds good. Let us bring lunch boxes.",
     funFact:"こうえん are centers of community life. Hanami (flower viewing) in parks draws millions. Many parks have free exercise equipment for elderly residents doing morning radio exercises (ラジオたいそう). Tokyo's Yoyogi Park, Ueno Park, and Shinjuku Gyoen are famous nationwide."},

    {type:"teach", trg:"どうぶつえん", src:"zoo", pos:"noun", gender:null,
     note:"どうぶつ = animal, えん = garden/park.\nうえのどうぶつえん = Ueno Zoo (Tokyo's oldest).",
     example:"A: どうぶつえんにパンダがいますか？\nB: はい、うえのどうぶつえんにいますよ。",
     exampleSrc:"A: Are there pandas at the zoo?\nB: Yes, at Ueno Zoo.",
     funFact:"Ueno Zoo (うえのどうぶつえん) opened in 1882 and is Japan's oldest zoo. When giant pandas arrived in 1972 as a diplomatic gift from China, pandamania swept Japan. Baby panda births still make national news. Over 3 million people visit Ueno Zoo annually."},

    // Quiz steps
    {type:"mc", q:"Japan's emergency number for fire and ambulance is:",
     opts:["119","110","911","112"],
     ans:"119",
     hint:"Different from the police number (110). The fire station also dispatches ambulances."},

    {type:"match", pairs:[
      {trg:"びょういん", src:"hospital"},
      {trg:"としょかん", src:"library"},
      {trg:"ゆうびんきょく", src:"post office"},
      {trg:"けいさつしょ", src:"police station"},
      {trg:"くうこう", src:"airport"}
    ]},

    {type:"fb", s:"ひっこしのてつづきは{1}でします。",
     a:["やくしょ"],
     opts:["やくしょ","びょういん","ゆうびんきょく","けいさつしょ"],
     hint:"This is the government office where you file paperwork for moving, births, and marriages.",
     sSrc:"Moving paperwork is done at the {1}."},

    {type:"mc", q:"じんじゃ and おてら: which one has a torii gate?",
     opts:["じんじゃ (Shinto shrine)","おてら (Buddhist temple)","Both have torii gates","Neither has torii gates"],
     ans:"じんじゃ (Shinto shrine)",
     hint:"The red gate that marks the boundary between the ordinary and sacred world belongs to this type of religious site."},

    {type:"fb", s:"にちようびは{1}がむりょうですよ。",
     a:["はくぶつかん"],
     opts:["はくぶつかん","レストラン","スーパー","びょういん"],
     hint:"Some of these cultural institutions are free on Sundays. They house historical and scientific collections.",
     sSrc:"The {1} is free on Sundays."},

    {type:"mc", q:"こうばん is:",
     opts:["A small neighborhood police station","A large central police headquarters","A type of convenience store","A train station ticket office"],
     ans:"A small neighborhood police station",
     hint:"These s... local stations are staffed by officers who know the area and help with directions and lost items."},

    {type:"match", pairs:[
      {trg:"じんじゃ", src:"Shinto shrine"},
      {trg:"おてら", src:"Buddhist temple"},
      {trg:"こうえん", src:"park"},
      {trg:"はくぶつかん", src:"museum"},
      {trg:"たいいくかん", src:"gymnasium"}
    ]},

    {type:"fb", s:"うえの{1}にパンダがいますよ。",
     a:["どうぶつえん"],
     opts:["どうぶつえん","こうえん","はくぶつかん","じんじゃ"],
     hint:"This facility keeps animals for public viewing. Ueno's is Tokyo's oldest and most famous.",
     sSrc:"There are pandas at Ueno {1}."}
  ]
};
export default BATCH7_L1;
