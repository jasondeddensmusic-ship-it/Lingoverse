// Batch 4. Unit 15 Lesson 1: At the Station & On the Train
const BATCH4_L_1 = {
  id:"jav2_u15l_b4_1", title:"駅(えき)と電車(でんしゃ)", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"駅(えき)と電車(でんしゃ)",
     desc:"Learn practical vocabulary for navigating train stations and riding trains. Japan's rail system is the best in the world, and these words help you use it confidently.",
     goals:["Navigate station facilities","Understand train announcements","Handle delays and schedule changes"]},

    {type:"teach", trg:"快速(かいそく)", src:"rapid train", pos:"noun", gender:null,
     note:"Kanji: 快速. Pleasant + fast. Faster than local, skips some stops.",
     example:"快速(かいそく)で渋谷(しぶや)に行(い)きます。",
     exampleSrc:"I go to Shibuya by rapid train.",
     funFact:"Japanese train types from slowest to fastest: 各駅停車 (local), 快速 (rapid), 急行 (express), 特急 (limited express). Understanding these saves enormous time. A local train from Tokyo to Yokohama takes twice as long as a rapid."},

    {type:"teach", trg:"急行(きゅうこう)", src:"express train", pos:"noun", gender:null,
     note:"Kanji: 急行. Urgent + go. Faster than rapid, fewer stops.",
     example:"急行(きゅうこう)に乗(の)り換(か)えましょう。",
     exampleSrc:"Let's transfer to the express.",
     funFact:"Express trains (急行) can save 15-30 minutes on long routes. Some require extra tickets (特急券 tokkyuuken). The challenge is knowing which train to take. Station display boards show all types with color coding."},

    {type:"teach", trg:"時刻表(じこくひょう)", src:"timetable / schedule", pos:"noun", gender:null,
     note:"Kanji: 時刻表. Time + engrave + table. Train schedules.",
     example:"時刻表(じこくひょう)を確認(かくにん)してください。",
     exampleSrc:"Please check the timetable.",
     funFact:"Japan's train timetable (時刻表) is a 1,000-page book published monthly. Enthusiasts called 'tetsudou otaku' (train nerds) memorize entire schedules. The book has been published continuously since 1925."},

    {type:"teach", trg:"遅(おく)れ", src:"delay", pos:"noun", gender:null,
     note:"From 遅(おく)れる (to be late). When trains run behind schedule.",
     example:"十分(じゅっぷん)の遅(おく)れが出(で)ています。",
     exampleSrc:"There is a 10-minute delay.",
     funFact:"Japanese trains are so punctual that a 5-minute delay makes the news. When delays occur, the railway company issues 遅延証明書 (chien shoumeisho, delay certificates) so passengers can prove to employers why they were late."},

    {type:"teach", trg:"運転見合(うんてんみあ)わせ", src:"suspension of service", pos:"noun", gender:null,
     note:"Kanji: 運転見合わせ. Operation + postponement. Trains stopped.",
     example:"地震(じしん)で運転見合(うんてんみあ)わせになりました。",
     exampleSrc:"Service was suspended due to an earthquake.",
     funFact:"Service suspension (unten miawase) usually happens during typhoons, earthquakes, or accidents. When Tokyo trains stop, millions of commuters are stranded. This phenomenon is called 帰宅難民 (kitaku nanmin, commute refugees)."},

    {type:"teach", trg:"終電(しゅうでん)", src:"last train", pos:"noun", gender:null,
     note:"Kanji: 終電. End + electricity. The last train of the night.",
     example:"終電(しゅうでん)に間(ま)に合(あ)いませんでした。",
     exampleSrc:"I didn't make it to the last train.",
     funFact:"Missing the shuuden (usually around midnight-1AM) is a common Tokyo experience. Options include taxi (very expensive), manga cafes, capsule hotels, or karaoke until the first train (始発 shihatsu) at 5 AM. This is a rite of passage."},

    {type:"teach", trg:"切符売(きっぷう)り場(ば)", src:"ticket counter / ticket office", pos:"noun", gender:null,
     note:"Kanji: 切符売り場. Ticket + selling + place.",
     example:"切符売(きっぷう)り場(ば)はどこですか？",
     exampleSrc:"Where is the ticket counter?",
     funFact:"Most people use IC cards now, but kippu uriba are still needed for special tickets, shinkansen, and long-distance travel. Automated ticket machines (券売機) handle most purchases and accept cash, IC cards, and credit cards."},

    {type:"teach", trg:"自由席(じゆうせき)", src:"unreserved seat", pos:"noun", gender:null,
     note:"Kanji: 自由席. Free + seat. First-come-first-served seating.",
     example:"自由席(じゆうせき)で大丈夫(だいじょうぶ)です。",
     exampleSrc:"Unreserved seats are fine.",
     funFact:"Shinkansen offer 自由席 (unreserved) and 指定席 (reserved). Unreserved is cheaper but you might stand. Experienced travelers know which cars are unreserved and line up early. During holidays, unreserved cars can be standing-room only."},

    {type:"teach", trg:"指定席(していせき)", src:"reserved seat", pos:"noun", gender:null,
     note:"Kanji: 指定席. Designate + seat. Pre-booked guaranteed seat.",
     example:"指定席(していせき)を予約(よやく)しました。",
     exampleSrc:"I reserved a designated seat.",
     funFact:"Reserved seats (指定席) guarantee a specific seat number. During peak travel (Golden Week, Obon, New Year), they sell out weeks in advance. The extra fee is worth it for peace of mind on long journeys."},

    {type:"teach", trg:"線路(せんろ)", src:"railway track / rail line", pos:"noun", gender:null,
     note:"Kanji: 線路. Line + road. The physical tracks.",
     example:"線路(せんろ)に物(もの)を落(お)とさないでください。",
     exampleSrc:"Please do not drop things on the tracks.",
     funFact:"Senro (track) safety is taken extremely seriously. Platform doors (ホームドア) are being installed at major stations to prevent falls. Station announcements constantly remind passengers to stand behind the yellow line."},

    {type:"teach", trg:"通勤(つうきん)", src:"commuting (to work)", pos:"noun", gender:null,
     note:"Kanji: 通勤. Pass through + serve. Daily work commute.",
     example:"通勤(つうきん)に一時間(いちじかん)かかります。",
     exampleSrc:"My commute takes one hour.",
     funFact:"The average Tokyo commute is about 50 minutes one way. Some commuters travel 1.5-2 hours each way. 通勤ラッシュ (tsuukin rasshu, commuter rush) between 7:30-9:00 AM is one of the most intense human compression events on Earth."},

    {type:"teach", trg:"手数料(てすうりょう)", src:"handling fee / service charge", pos:"noun", gender:null,
     note:"Kanji: 手数料. Hand + number + fee. Administrative charges.",
     example:"手数料(てすうりょう)がかかります。",
     exampleSrc:"There is a handling fee.",
     funFact:"Tesuuryou appears when changing or canceling tickets, using ATMs at certain times, or making bank transfers. Japanese are accustomed to small fees for services that might be free elsewhere. Knowing this word prevents surprises."},

    {type:"teach", trg:"優先席(ゆうせんせき)", src:"priority seat", pos:"noun", gender:null,
     note:"Kanji: 優先席. Priority + seat. For elderly, pregnant, disabled.",
     example:"優先席(ゆうせんせき)はお年寄(としよ)りに譲(ゆず)ってください。",
     exampleSrc:"Please give priority seats to elderly people.",
     funFact:"Priority seats (usually marked in a different color) are designated for elderly, pregnant women, people with disabilities, and those with injuries. Social pressure to give up these seats is strong. Phone use near priority seats is discouraged too."},

    {type:"mc", q:"What is a 終電(しゅうでん)?",
     opts:["last train of the night","first train","express train","bullet train"], ans:"last train of the night",
     hint:"Miss this one and you are stuck until early morning."},

    {type:"fb", s:"十分(じゅっぷん)の{1}が出(で)ています。", a:"遅(おく)れ",
     sSrc:"There is a 10-minute delay.",
     opts:["遅(おく)れ","運転(うんてん)","快速(かいそく)","乗(の)り換(か)え"],
     hint:"When a train arrives later than its scheduled time."},

    {type:"match", pairs:[
      {trg:"自由席(じゆうせき)", src:"unreserved seat"},
      {trg:"指定席(していせき)", src:"reserved seat"},
      {trg:"優先席(ゆうせんせき)", src:"priority seat"},
      {trg:"切符売(きっぷう)り場(ば)", src:"ticket counter"}
    ]},

    {type:"mc", q:"Train types from slowest to fastest:",
     opts:["rapid, local, express, limited","local, rapid, express, limited express","express, rapid, local, limited","limited, express, rapid, local"], ans:"local, rapid, express, limited express",
     hint:"各駅停車, 快速, 急行, 特急 in speed order."},

    {type:"fb", s:"{1}に一時間(いちじかん)かかります。", a:"通勤(つうきん)",
     sSrc:"My commute takes one hour.",
     opts:["通勤(つうきん)","旅行(りょこう)","散歩(さんぽ)","買(か)い物(もの)"],
     hint:"The daily journey from home to your workplace."},

    {type:"mc", q:"What is a 遅延証明書?",
     opts:["a schedule change notice","a lost item report","a delay certificate from the railway","a ticket refund"], ans:"a delay certificate from the railway",
     hint:"Given to passengers so they can prove to employers why they were late."},

    {type:"mc", q:"運転見合(うんてんみあ)わせ means:",
     opts:["delay","schedule change","extra train","suspension of train service"], ans:"suspension of train service",
     hint:"When trains completely stop running on a line."}
  ,{type:"match",pairs:[{trg:"快速(かいそく)",src:"rapid train"},{trg:"急行(きゅうこう)",src:"express train"},{trg:"時刻表(じこくひょう)",src:"timetable / schedule"},{trg:"運転見合(うんてんみあ)わせ",src:"suspension of service"},{trg:"終電(しゅうでん)",src:"last train"},{trg:"線路(せんろ)",src:"railway track / rail line"}]},{type:"match",pairs:[{trg:"手数料(てすうりょう)",src:"handling fee / service charge"}]}]
};
export default BATCH4_L_1;
