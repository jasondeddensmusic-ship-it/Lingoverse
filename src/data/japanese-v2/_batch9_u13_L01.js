// Batch 9 – Unit 13 (B1.1 Experience): Travel Experiences
const BATCH9_L1 = {
  id:"jav2_u13l_b9_1", title:"りょこうたいけん", icon:"✈️", xp:15, board:true,
  steps:[
    {type:"intro", title:"りょこうたいけん",
     desc:"Learn vocabulary for sharing travel experiences and adventures. Talk about trips, accommodations, and memorable moments.",
     goals:["Describe travel experiences","Use experience-related grammar naturally","Discuss accommodations and destinations"]},

    {type:"teach", trg:"りょかん", src:"traditional Japanese inn", pos:"noun", gender:null,
     note:"Features たたみ rooms, おんせん, and かいせきりょうり.\nおかみ = ryokan proprietress.",
     example:"A: りょかんにとまったことがありますか？\nB: はい、きょうとでとまりました。",
     exampleSrc:"A: Have you stayed at a ryokan?\nB: Yes, I stayed at one in Kyoto.",
     funFact:"りょかん (旅館) offer an immersive Japanese experience: ゆかた (light kimono), おんせん (hot spring baths), and かいせきりょうり (multi-course dinner). The おかみ (proprietress) personally oversees guest care. Some りょかん have operated for centuries. Nishiyama Onsen Keiunkan has been open since 705 AD."},

    {type:"teach", trg:"みんしゅく", src:"guesthouse / homestay lodging", pos:"noun", gender:null,
     note:"Cheaper than りょかん. Run by families.\nみん = people, しゅく = lodging.",
     example:"A: みんしゅくはやすくていいですよ。\nB: よやくはどうしますか？",
     exampleSrc:"A: Guesthouses are cheap and good.\nB: How do you make reservations?",
     funFact:"みんしゅく (民宿) are family-run lodgings, simpler and cheaper than りょかん. They offer a more personal experience with home-cooked meals. In rural Japan and fishing villages, みんしゅく let you experience local life authentically. Recent years have seen a boom in Airbnb-style みんぱく (private lodging)."},

    {type:"teach", trg:"おみやげ", src:"souvenir / gift from travels", pos:"noun", gender:null,
     note:"Buying おみやげ for coworkers and friends is expected.\nおみやげやさん = souvenir shop.",
     example:"A: おみやげはなにがいいですか？\nB: おかしがよろこばれますよ。",
     exampleSrc:"A: What would be a good souvenir?\nB: Sweets are always appreciated.",
     funFact:"おみやげ (お土産) culture is deeply ingrained. Returning from a trip without おみやげ for coworkers is a social faux pas. Each region has めいぶつ (specialty products). Tokyo Banana, Kyoto yatsuhashi, and Hokkaido Shiroi Koibito are classic おみやげ. Airports and stations have huge おみやげ sections."},

    {type:"teach", trg:"けしき", src:"scenery / landscape", pos:"noun", gender:null,
     note:"けしきがきれい = beautiful scenery.\nけしきをたのしむ = to enjoy the view.",
     example:"A: すばらしいけしきですね。\nB: しゃしんをとりましょう。",
     exampleSrc:"A: What wonderful scenery.\nB: Let's take a photo.",
     funFact:"けしき (景色) appreciation is central to Japanese culture. にほんさんけい (Three Views of Japan) are officially designated scenic spots. Japanese gardens are designed to frame けしき. The concept of しき (borrowed scenery) uses distant mountains as part of garden design."},

    {type:"teach", trg:"めいしょ", src:"famous place / tourist spot", pos:"noun", gender:null,
     note:"かんこうめいしょ = tourist attraction.\nめい = famous, しょ = place.",
     example:"A: このまちのめいしょはどこですか？\nB: おしろがゆうめいです。",
     exampleSrc:"A: What are the famous places in this town?\nB: The castle is famous.",
     funFact:"めいしょ (名所) culture has a long history in Japan. Ukiyo-e artists like Hiroshige painted めいしょ series. Today, every region promotes its めいしょ for tourism. The concept of パワースポット (power spots) adds a spiritual dimension to めいしょ visiting."},

    {type:"teach", trg:"のりかえる", src:"to transfer (trains/buses)", pos:"verb", gender:null,
     note:"のりかえ = transfer. のりかええき = transfer station.\nのりかえなし = no transfer needed.",
     example:"A: しんじゅくでのりかえてください。\nB: なんばんせんですか？",
     exampleSrc:"A: Please transfer at Shinjuku.\nB: Which platform?",
     funFact:"のりかえ (乗り換え) is an essential travel skill in Japan's complex train network. Tokyo's station maps look like spider webs. Apps like Google Maps and NAVITIME are lifesavers. Japanese people navigate のりかえ with remarkable efficiency. The record is Umeda Station in Osaka with connections to 8+ lines."},

    {type:"teach", trg:"よやく", src:"reservation / booking", pos:"noun", gender:null,
     note:"よやくする = to make a reservation.\nよやくせい = reservation required.",
     example:"A: レストランをよやくしましたか？\nB: はい、しちじでよやくしました。",
     exampleSrc:"A: Did you reserve the restaurant?\nB: Yes, I reserved for seven o'clock.",
     funFact:"よやく (予約) is highly recommended in Japan, especially for popular restaurants and りょかん. No-shows are considered extremely rude. Some top restaurants require よやく months in advance. The phrase よやくなしでもだいじょうぶですか means 'is it okay without a reservation?'"},

    {type:"teach", trg:"おもいで", src:"memory / memorable experience", pos:"noun", gender:null,
     note:"いいおもいで = good memory.\nおもいでをつくる = to create memories.",
     example:"A: にほんのいちばんのおもいではなんですか？\nB: ふじさんにのぼったことです。",
     exampleSrc:"A: What is your best memory of Japan?\nB: Climbing Mount Fuji.",
     funFact:"おもいで (思い出) literally means 'thought that comes out.' Japanese culture places great value on creating おもいで, especially through shared experiences. The phrase いちごいちえ (one meeting, one chance) from tea ceremony philosophy means every encounter is a unique おもいで to be treasured."},

    {type:"mc", q:"What is considered a social faux pas after returning from a trip?", opts:["Not bringing おみやげ for coworkers","Not showing photos","Not posting on social media","Not writing a trip report"], ans:"Not bringing おみやげ for coworkers",
     hint:"Japanese workplace culture expects travelers to bring back regional specialty gifts."},

    {type:"fb", s:"しんじゅくで{1}てください。\n(Please transfer at Shinjuku.)", a:"のりかえ", opts:["のりかえ","のり","おり","まち"], sSrc:"Please transfer at Shinjuku.",
     hint:"This verb means to change from one train or bus line to another."},

    {type:"match", pairs:[
      {trg:"りょかん", src:"traditional inn"},
      {trg:"おみやげ", src:"souvenir"},
      {trg:"けしき", src:"scenery"},
      {trg:"おもいで", src:"memory"}
    ]},

    {type:"mc", q:"What makes りょかん different from regular hotels?", opts:["Tatami rooms, onsen, and kaiseki cuisine","Cheaper prices","Western-style beds","24-hour room service"], ans:"Tatami rooms, onsen, and kaiseki cuisine",
     hint:"These traditional inns offer an immersive Japanese cultural experience with specific features."}
  ]
};
export default BATCH9_L1;
