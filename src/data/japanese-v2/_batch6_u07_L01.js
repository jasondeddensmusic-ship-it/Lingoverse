// Batch 6 – Unit 07 (A1.2 Time & Daily Routine): Transportation Routine
const BATCH6_L1 = {
  id:"jav2_u07l_b6_1", title:"通勤(つうきん)・通学(つうがく)", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"通勤(つうきん)・通学(つうがく)",
     desc:"Learn vocabulary for commuting, taking trains, and daily transportation. Japan's train system is one of the most efficient in the world, and commuting vocabulary is essential for daily life.",
     goals:["Describe your daily commute","Use transportation verbs: 乗(の)る, 降(お)りる, 乗(の)り換(か)える","Navigate basic train station vocabulary"]},

    {type:"teach", trg:"通勤(つうきん)", src:"commuting (to work)", pos:"noun", gender:null,
     note:"Kanji: 通勤. 通勤電車(つうきんでんしゃ) = commuter train.\n通勤時間(つうきんじかん) = commute time.",
     example:"A: 通勤時間(つうきんじかん)はどのくらいですか？\nB: 電車(でんしゃ)で一時間(いちじかん)くらいです。",
     exampleSrc:"A: How long is your commute?\nB: About one hour by train.",
     funFact:"Tokyo's average commute is about 50 minutes one way. During rush hour (ラッシュアワー), trains can reach 180% capacity. Professional pushers (押(お)し屋(や)) help squeeze passengers in. Despite this, trains arrive within seconds of schedule."},

    {type:"teach", trg:"乗(の)る", src:"to ride / to get on (transport)", pos:"verb", gender:null,
     note:"Group 1 verb. 電車(でんしゃ)に乗(の)る = to ride a train.\nKanji: 乗る. Particle: に.",
     example:"A: 何時(なんじ)の電車(でんしゃ)に乗(の)りますか？\nB: 8時(はちじ)の急行(きゅうこう)に乗(の)ります。",
     exampleSrc:"A: What time train do you take?\nB: I take the 8 o'clock express.",
     funFact:"乗(の)る takes the particle に for the vehicle: バスに乗(の)る, タクシーに乗(の)る, 飛行機(ひこうき)に乗(の)る. For bicycles, 乗(の)る is also used. The kanji 乗(の)る shows a person climbing onto something, capturing the physical act of boarding."},

    {type:"teach", trg:"降(お)りる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. 電車(でんしゃ)を降(お)りる = to get off a train.\nKanji: 降りる. Particle: を.",
     example:"A: 次(つぎ)の駅(えき)で降(お)ります。\nB: はい、気(き)をつけてください。",
     exampleSrc:"A: I will get off at the next station.\nB: Okay, please be careful.",
     funFact:"Notice the particle change: 乗(の)る uses に (onto), 降(お)りる uses を (off of). 降(お)りる also means to descend: 山(やま)を降(お)りる (descend a mountain), 階段(かいだん)を降(お)りる (go down stairs). The kanji 降 shows rain falling down."},

    {type:"teach", trg:"乗(の)り換(か)える", src:"to transfer / to change (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. 乗(の)り換(か)え = transfer (noun).\n渋谷(しぶや)で乗(の)り換(か)えてください = please transfer at Shibuya.",
     example:"A: 新宿(しんじゅく)で乗(の)り換(か)えますか？\nB: はい、中央線(ちゅうおうせん)に乗(の)り換(か)えます。",
     exampleSrc:"A: Do you transfer at Shinjuku?\nB: Yes, I transfer to the Chuo Line.",
     funFact:"乗(の)り換(か)える combines 乗(の)る (ride) and 変(か)える (change). Tokyo's train map has over 280 stations across dozens of lines. Navigating transfers (乗(の)り換(か)え) is a daily skill. Apps like Google Maps and Yahoo! Japan show 乗(の)り換(か)え routes in real time."},

    {type:"teach", trg:"切符(きっぷ)", src:"ticket", pos:"noun", gender:null,
     note:"Kanji: 切符. 切符(きっぷ)を買(か)う = to buy a ticket.\n切符(きっぷ)売(う)り場(ば) = ticket counter.",
     example:"A: 切符(きっぷ)はどこで買(か)いますか？\nB: あの機械(きかい)で買(か)えます。",
     exampleSrc:"A: Where do I buy a ticket?\nB: You can buy it at that machine.",
     funFact:"Most Japanese commuters use IC cards (Suica, Pasmo, ICOCA) instead of paper 切符(きっぷ). You tap the card on a sensor (タッチ) to enter and exit. The fare is calculated automatically. Paper tickets are mainly used by tourists now."},

    {type:"mc", q:"電車(でんしゃ)に乗(の)る means:", opts:["To ride a train","To get off a train","To transfer trains","To buy a ticket"], ans:"To ride a train",
     hint:"The verb 乗(の)る means to board or r..., and the particle に marks the vehicle."},

    {type:"teach", trg:"ホーム", src:"platform (train station)", pos:"noun", gender:null,
     note:"From English 'platform' (shortened). 一番(いちばん)ホーム = platform 1.\nAlso プラットホーム (full form).",
     example:"A: 次(つぎ)の電車(でんしゃ)は何番(なんばん)ホームですか？\nB: 3番(さんばん)ホームです。",
     exampleSrc:"A: What platform is the next train?\nB: Platform 3.",
     funFact:"Japanese station platforms have melody jingles (発車(はっしゃ)メロディー) instead of buzzers. Each station often has a unique jingle. 高田馬場(たかだのばば) plays the Astro Boy theme, and 恵比寿(えびす) plays a beer commercial song. These melodies are beloved cultural icons."},

    {type:"teach", trg:"間(ま)に合(あ)う", src:"to be on time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. 電車(でんしゃ)に間(ま)に合(あ)う = to catch the train in time.\nKanji: 間に合う.",
     example:"A: 電車(でんしゃ)に間(ま)に合(あ)いましたか？\nB: はい、ぎりぎり間(ま)に合(あ)いました。",
     exampleSrc:"A: Did you make it on time for the train?\nB: Yes, I barely made it.",
     funFact:"間(ま)に合(あ)う literally means 'to fit in the interval.' The opposite, 間(ま)に合(あ)わない, means to miss it. ぎりぎり (just barely) is a common companion word. Japanese punctuality makes 間(ま)に合(あ)う more achievable: trains that are even 1 minute late issue apology announcements."},

    {type:"teach", trg:"遅(おく)れる", src:"to be late / to be delayed", pos:"verb", gender:null,
     note:"Group 2 verb. 電車(でんしゃ)が遅(おく)れる = the train is delayed.\nKanji: 遅れる.",
     example:"A: すみません、電車(でんしゃ)が遅(おく)れて、遅(おそ)くなりました。\nB: 大丈夫(だいじょうぶ)ですよ。",
     exampleSrc:"A: Sorry, the train was delayed and I am late.\nB: It is okay.",
     funFact:"When Japanese trains are delayed, the railway company issues 遅延証明書(ちえんしょうめいしょ) (delay certificates). Passengers present these to their employers as proof that the delay was not their fault. This system shows how seriously punctuality is taken."},

    {type:"teach", trg:"混(こ)む", src:"to be crowded", pos:"verb", gender:null,
     note:"Group 1 verb. 混(こ)んでいる = is crowded (state).\nKanji: 込む. Also written 混む.",
     example:"A: 朝(あさ)の電車(でんしゃ)は混(こ)んでいますね。\nB: そうですね。いつも満員(まんいん)です。",
     exampleSrc:"A: Morning trains are crowded, aren't they?\nB: Yes. They are always full.",
     funFact:"混(こ)む appears in many compounds: 込(こ)み合(あ)う (to be packed), 人(ひと)ごみ (crowd of people). Rush hour trains in Tokyo can reach すしづめ (packed like sushi), a vivid Japanese expression. Newer trains have screens showing crowding levels by car."},

    {type:"fb", s:"渋谷(しぶや)で{1}てください。\n(Please transfer at Shibuya.)", a:"乗(の)り換(か)え", opts:["乗(の)り換(か)え","乗(の)っ","降(お)り","間(ま)に合(あ)っ"], sSrc:"Please transfer at Shibuya.",
     hint:"The て-form of the verb meaning to change/transfer trains."},

    {type:"teach", trg:"運(はこ)ぶ", src:"to carry / to transport", pos:"verb", gender:null,
     note:"Group 1 verb. 荷物(にもつ)を運(はこ)ぶ = to carry luggage.\nKanji: 運ぶ.",
     example:"A: この荷物(にもつ)を部屋(へや)まで運(はこ)んでください。\nB: はい、分(わ)かりました。",
     exampleSrc:"A: Please carry this luggage to the room.\nB: Okay, understood.",
     funFact:"運(はこ)ぶ uses the same kanji as 運動(うんどう) (exercise) and 運(うん) (luck). The common thread is movement. 運(はこ)ぶ can also describe progress: 話(はなし)がうまく運(はこ)ぶ (the conversation goes well), showing how physical carrying became a metaphor for smooth progress."},

    {type:"mc", q:"What does 間(ま)に合(あ)う mean?", opts:["To be on time / to make it","To be late","To be crowded","To transfer"], ans:"To be on time / to make it",
     hint:"This verb means to arrive within the t... limit."},

    {type:"teach", trg:"回(まわ)す", src:"to turn / to spin / to rotate", pos:"verb", gender:null,
     note:"Group 1 verb. ハンドルを回(まわ)す = to turn a handle/steering wheel.\nKanji: 回す.",
     example:"A: このダイヤルを右(みぎ)に回(まわ)してください。\nB: はい、こうですか？",
     exampleSrc:"A: Please turn this dial to the right.\nB: Like this?",
     funFact:"回(まわ)す and its intransitive pair 回(まわ)る (to go around) are everywhere in Japanese. 見(み)回(まわ)す (to look around), 手回(てまわ)し (preparation), 一回(ひとまわ)り (one full cycle). The kanji 回 shows a whirlpool, perfectly capturing rotation."},

    {type:"match", pairs:[
      {trg:"乗(の)る", src:"to ride / get on"},
      {trg:"降(お)りる", src:"to get off"},
      {trg:"乗(の)り換(か)える", src:"to transfer"},
      {trg:"間(ま)に合(あ)う", src:"to make it on time"},
      {trg:"遅(おく)れる", src:"to be late"}
    ]},

    {type:"fb", s:"朝(あさ)の電車(でんしゃ)は{1}います。\n(Morning trains are crowded.)", a:"混(こ)んで", opts:["混(こ)んで","乗(の)って","降(お)りて","間(ま)に合(あ)って"], sSrc:"Morning trains are crowded.",
     hint:"The て-form of 混(こ)む (to be crowded) in the progressive state."},

    {type:"mc", q:"運(はこ)ぶ means:", opts:["To carry or transport","To push","To pull","To ride"], ans:"To carry or transport",
     hint:"This verb describes moving objects from one place to another."}
  ]
};
export default BATCH6_L1;
