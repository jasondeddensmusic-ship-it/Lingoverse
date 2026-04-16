// Batch 6 – Unit 07 (A1.2 Time & Daily Routine): Transportation Routine
const BATCH6_L1 = {
  id:"jav2_u07l_b6_1", title:"つうきん・つうがく", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"つうきん・つうがく",
     desc:"Learn vocabulary for commuting, taking trains, and daily transportation. Japan's train system is one of the most efficient in the world, and commuting vocabulary is essential for daily life.",
     goals:["Describe your daily commute","Use transportation verbs: のる, おりる, のりかえる","Navigate basic train station vocabulary"]},

    {type:"teach", trg:"つうきん", src:"commuting (to work)", pos:"noun", gender:null,
     note:"Kanji: 通勤. つうきんでんしゃ = commuter train.\nつうきんじかん = commute time.",
     example:"A: つうきんじかんはどのくらいですか？\nB: でんしゃでいちじかんくらいです。",
     exampleSrc:"A: How long is your commute?\nB: About one hour by train.",
     funFact:"Tokyo's average commute is about 50 minutes one way. During rush hour (ラッシュアワー), trains can reach 180% capacity. Professional pushers (おしや) help squeeze passengers in. Despite this, trains arrive within seconds of schedule."},

    {type:"teach", trg:"のる", src:"to ride / to get on (transport)", pos:"verb", gender:null,
     note:"Group 1 verb. でんしゃにのる = to ride a train.\nKanji: 乗る. Particle: に.",
     example:"A: なんじのでんしゃにのりますか？\nB: はちじのきゅうこうにのります。",
     exampleSrc:"A: What time train do you take?\nB: I take the 8 o'clock express.",
     funFact:"のる takes the particle に for the vehicle: バスにのる, タクシーにのる, ひこうきにのる. For bicycles, のる is also used. The kanji 乗 shows a person climbing onto something, capturing the physical act of boarding."},

    {type:"teach", trg:"おりる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. でんしゃをおりる = to get off a train.\nKanji: 降りる. Particle: を.",
     example:"A: つぎのえきでおります。\nB: はい、きをつけてください。",
     exampleSrc:"A: I will get off at the next station.\nB: Okay, please be careful.",
     funFact:"Notice the particle change: のる uses に (onto), おりる uses を (off of). おりる also means to descend: やまをおりる (descend a mountain), かいだんをおりる (go down stairs). The kanji 降 shows rain falling down."},

    {type:"teach", trg:"のりかえる", src:"to transfer / to change (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. のりかえ = transfer (noun).\nしぶやでのりかえてください = please transfer at Shibuya.",
     example:"A: しんじゅくでのりかえますか？\nB: はい、ちゅうおうせんにのりかえます。",
     exampleSrc:"A: Do you transfer at Shinjuku?\nB: Yes, I transfer to the Chuo Line.",
     funFact:"のりかえる combines のる (ride) and かえる (change). Tokyo's train map has over 280 stations across dozens of lines. Navigating transfers (のりかえ) is a daily skill. Apps like Google Maps and Yahoo! Japan show のりかえ routes in real time."},

    {type:"teach", trg:"きっぷ", src:"ticket", pos:"noun", gender:null,
     note:"Kanji: 切符. きっぷをかう = to buy a ticket.\nきっぷうりば = ticket counter.",
     example:"A: きっぷはどこでかいますか？\nB: あのきかいでかえます。",
     exampleSrc:"A: Where do I buy a ticket?\nB: You can buy it at that machine.",
     funFact:"Most Japanese commuters use IC cards (Suica, Pasmo, ICOCA) instead of paper きっぷ. You tap the card on a sensor (タッチ) to enter and exit. The fare is calculated automatically. Paper tickets are mainly used by tourists now."},

    {type:"mc", q:"でんしゃにのる means:", opts:["To ride a train","To get off a train","To transfer trains","To buy a ticket"], ans:"To ride a train",
     hint:"The verb のる means to board or r..., and the particle に marks the vehicle."},

    {type:"teach", trg:"ホーム", src:"platform (train station)", pos:"noun", gender:null,
     note:"From English 'platform' (shortened). いちばんホーム = platform 1.\nAlso プラットホーム (full form).",
     example:"A: つぎのでんしゃはなんばんホームですか？\nB: さんばんホームです。",
     exampleSrc:"A: What platform is the next train?\nB: Platform 3.",
     funFact:"Japanese station platforms have melody jingles (はっしゃメロディー) instead of buzzers. Each station often has a unique jingle. Takadanobaba plays the Astro Boy theme, and Ebisu plays a beer commercial song. These melodies are beloved cultural icons."},

    {type:"teach", trg:"まにあう", src:"to be on time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. でんしゃにまにあう = to catch the train in time.\nKanji: 間に合う.",
     example:"A: でんしゃにまにあいましたか？\nB: はい、ぎりぎりまにあいました。",
     exampleSrc:"A: Did you make it on time for the train?\nB: Yes, I barely made it.",
     funFact:"まにあう (間に合う) literally means 'to fit in the interval.' The opposite, まにあわない, means to miss it. ぎりぎり (just barely) is a common companion word. Japanese punctuality makes まにあう more achievable: trains that are even 1 minute late issue apology announcements."},

    {type:"teach", trg:"おくれる", src:"to be late / to be delayed", pos:"verb", gender:null,
     note:"Group 2 verb. でんしゃがおくれる = the train is delayed.\nKanji: 遅れる.",
     example:"A: すみません、でんしゃがおくれて、おそくなりました。\nB: だいじょうぶですよ。",
     exampleSrc:"A: Sorry, the train was delayed and I am late.\nB: It is okay.",
     funFact:"When Japanese trains are delayed, the railway company issues ちえんしょうめいしょ (delay certificates). Passengers present these to their employers as proof that the delay was not their fault. This system shows how seriously punctuality is taken."},

    {type:"teach", trg:"こむ", src:"to be crowded", pos:"verb", gender:null,
     note:"Group 1 verb. こんでいる = is crowded (state).\nKanji: 込む. Also written 混む.",
     example:"A: あさのでんしゃはこんでいますね。\nB: そうですね。いつもまんいんです。",
     exampleSrc:"A: Morning trains are crowded, aren't they?\nB: Yes. They are always full.",
     funFact:"こむ appears in many compounds: こみあう (to be packed), ひとごみ (crowd of people). Rush hour trains in Tokyo can reach すしづめ (packed like sushi), a vivid Japanese expression. Newer trains have screens showing crowding levels by car."},

    {type:"fb", s:"しぶやで{1}てください。\n(Please transfer at Shibuya.)", a:"のりかえ", opts:["のりかえ","のっ","おり","まにあっ"], sSrc:"Please transfer at Shibuya.",
     hint:"The て-form of the verb meaning to change/transfer trains."},

    {type:"teach", trg:"はこぶ", src:"to carry / to transport", pos:"verb", gender:null,
     note:"Group 1 verb. にもつをはこぶ = to carry luggage.\nKanji: 運ぶ.",
     example:"A: このにもつをへやまではこんでください。\nB: はい、わかりました。",
     exampleSrc:"A: Please carry this luggage to the room.\nB: Okay, understood.",
     funFact:"はこぶ (運ぶ) uses the same kanji as うんどう (運動, exercise) and うん (運, luck). The common thread is movement. はこぶ can also describe progress: はなしがうまくはこぶ (the conversation goes well), showing how physical carrying became a metaphor for smooth progress."},

    {type:"mc", q:"What does まにあう mean?", opts:["To be on time / to make it","To be late","To be crowded","To transfer"], ans:"To be on time / to make it",
     hint:"This verb means to arrive within the t... limit."},

    {type:"teach", trg:"まわす", src:"to turn / to spin / to rotate", pos:"verb", gender:null,
     note:"Group 1 verb. ハンドルをまわす = to turn a handle/steering wheel.\nKanji: 回す.",
     example:"A: このダイヤルをみぎにまわしてください。\nB: はい、こうですか？",
     exampleSrc:"A: Please turn this dial to the right.\nB: Like this?",
     funFact:"まわす (回す) and its intransitive pair まわる (to go around) are everywhere in Japanese. みまわす (to look around), てまわし (preparation), ひとまわり (one full cycle). The kanji 回 shows a whirlpool, perfectly capturing rotation."},

    {type:"match", pairs:[
      {trg:"のる", src:"to ride / get on"},
      {trg:"おりる", src:"to get off"},
      {trg:"のりかえる", src:"to transfer"},
      {trg:"まにあう", src:"to make it on time"},
      {trg:"おくれる", src:"to be late"}
    ]},

    {type:"fb", s:"あさのでんしゃは{1}います。\n(Morning trains are crowded.)", a:"こんで", opts:["こんで","のって","おりて","まにあって"], sSrc:"Morning trains are crowded.",
     hint:"The て-form of こむ (to be crowded) in the progressive state."},

    {type:"mc", q:"はこぶ means:", opts:["To carry or transport","To push","To pull","To ride"], ans:"To carry or transport",
     hint:"This verb describes moving objects from one place to another."}
  ]
};
export default BATCH6_L1;
