// Batch 2 expansion for Unit 13 (Experience) — more life experiences, travel, cultural activities
const BATCH2_L_1 = {
  id:"jav2_u13l_b2_1", title:"すてきなたいけん", icon:"🎌", xp:15, board:true,
  steps:[
  {type:"intro", title:"すてきなたいけん",
   desc:"Expand your experience vocabulary with more travel activities, cultural experiences, and life milestones. Practice the たことがある pattern with richer, more varied verbs to tell deeper stories about your life.",
   goals:["Use experience patterns with sports and cultural activities","Describe travel experiences with specific activities","Talk about memorable life events and firsts"]},

  {type:"teach", trg:"スキューバダイビング", src:"scuba diving", pos:"noun", gender:null,
   note:"Katakana loanword. Popular in Okinawa and tropical destinations.\nスキューバダイビングをする = to go scuba diving.",
   example:"A: スキューバダイビングをしたことがありますか？\nB: はい、おきなわでしました。",
   exampleSrc:"A: Have you ever been scuba diving?\nB: Yes, I did in Okinawa.",
   funFact:"Okinawa is Japan's scuba diving paradise with crystal-clear waters and coral reefs. Many Japanese get their diving license during summer trips. ダイビングライセンス (diving license) courses are offered in resort areas year-round."},

  {type:"teach", trg:"スノーボード", src:"snowboarding", pos:"noun", gender:null,
   note:"Katakana loanword. Very popular winter sport in Japan.\nスノーボードをする = to go snowboarding.",
   example:"A: スノーボードをしたことがありますか？\nB: いいえ、でもやってみたいです。",
   exampleSrc:"A: Have you ever been snowboarding?\nB: No, but I want to try it.",
   funFact:"Japan is a world-class snowboarding destination. Hokkaido's powder snow is legendary among snowboarders globally. Niseko has become internationally famous. Many Japanese take annual ski/snowboard trips in winter, with resorts accessible by bullet train from Tokyo."},

  {type:"teach", trg:"つり", src:"fishing", pos:"noun", gender:null,
   note:"A popular hobby for all ages. つりをする = to go fishing.\nKanji: 釣り.",
   example:"A: うみでつりをしたことがありますか？\nB: はい、たいをつりました！",
   exampleSrc:"A: Have you ever fished in the ocean?\nB: Yes, I caught a sea bream!",
   funFact:"Fishing is one of Japan's most popular hobbies. 釣り combines 釣 (hook) with り (nominalization). Types include: うみづり (sea fishing), かわづり (river fishing), and バスつり (bass fishing). Fishing anime and manga are a genuine genre in Japan."},

  {type:"teach", trg:"キャンプ", src:"camping", pos:"noun", gender:null,
   note:"Katakana loanword. Camping has seen a huge boom in Japan recently.\nキャンプをする = to go camping.",
   example:"A: やまでキャンプをしたことがありますか？\nB: はい、とてもたのしかったです。",
   exampleSrc:"A: Have you ever camped in the mountains?\nB: Yes, it was very fun.",
   funFact:"Camping exploded in popularity in Japan after the anime ゆるキャン (Laid-Back Camp) aired. Japanese camping culture emphasizes quality gear, beautiful scenery, and gourmet outdoor cooking. Solo camping (ソロキャンプ) has become especially trendy among adults."},

  {type:"mc", q:"スノーボードをしたことがありますか means:", opts:["Do you want to snowboard?","Have you ever been snowboarding?","Can you snowboard?","Are you snowboarding now?"], ans:"Have you ever been snowboarding?",
   hint:"た-form + ことがある asks about past life experience."},

  {type:"teach", trg:"ホームステイ", src:"homestay", pos:"noun", gender:null,
   note:"Katakana loanword. Staying with a host family, common for exchange students.\nホームステイをする = to do a homestay.",
   example:"A: にほんでホームステイをしたことがありますか？\nB: はい、とうきょうでさんかげつしました。",
   exampleSrc:"A: Have you done a homestay in Japan?\nB: Yes, three months in Tokyo.",
   funFact:"Homestays are a popular way to experience Japanese culture firsthand. Host families often share traditional meals, help with language practice, and take guests to local events. Many lifelong friendships form through homestay programs."},

  {type:"teach", trg:"ゆうめい", src:"famous / well-known", pos:"adj", gender:null,
   note:"な-adjective. ゆうめいなばしょ = famous place.\nKanji: 有名.",
   example:"A: ゆうめいなおてらにいったことがありますか？\nB: はい、きんかくじにいきました。",
   exampleSrc:"A: Have you visited a famous temple?\nB: Yes, I visited Kinkakuji.",
   funFact:"有名 combines 有 (exist/have) and 名 (name), literally 'having a name.' The opposite is 無名 (mumei, unknown). ゆうめいじん means 'celebrity.' Many Japanese travel guides rank places by how ゆうめい they are."},

  {type:"teach", trg:"おどる", src:"to dance", pos:"verb", gender:null,
   note:"Group 1 verb. おどった = danced. Traditional and modern dance.\nKanji: 踊る.",
   example:"A: ぼんおどりをおどったことがありますか？\nB: はい、なつまつりでおどりました。",
   exampleSrc:"A: Have you danced bon-odori?\nB: Yes, I danced at a summer festival.",
   funFact:"おどる covers all types of dance. ぼんおどり (Bon dance) is performed at summer festivals in circles around a central tower. It is open to everyone and easy to join. Modern Japanese is also famous for パラパラ (eurobeat hand dance) and よさこい (energetic group dance)."},

  {type:"fb", s:"ゆうめいなおてらに{1}ことがありますか？\n(Have you visited a famous temple?)", a:"いった", opts:["いった","いく","いって","いける"], sSrc:"Have you visited a famous temple?",
   hint:"The た-form (past tense) of いく, needed before ことがある."},

  {type:"teach", trg:"すばらしい", src:"wonderful / magnificent", pos:"adj", gender:null,
   note:"い-adjective expressing strong positive impression.\nKanji: 素晴らしい.",
   example:"A: おきなわのうみはすばらしかったです。\nB: いつかいきたいです。",
   exampleSrc:"A: The sea in Okinawa was wonderful.\nB: I want to go someday.",
   funFact:"すばらしい is stronger than いい (good) or きれい (beautiful). It expresses genuine awe. Using it shows deep appreciation. It is appropriate for natural beauty, performances, achievements, and any truly impressive experience."},

  {type:"teach", trg:"つまらない", src:"boring / uninteresting", pos:"adj", gender:null,
   note:"い-adjective. Opposite of おもしろい (interesting).\nCan be rude if said about someone's work.",
   example:"A: えいがはどうでしたか？\nB: ちょっとつまらなかったです。",
   exampleSrc:"A: How was the movie?\nB: It was a bit boring.",
   funFact:"つまらない comes from つまる (to be packed/stuffed), so つまらない literally means 'not filling/not satisfying.' It is also used as a humble expression: つまらないものですが (it is a boring thing, but...) when giving a gift, downplaying its value out of modesty."},

  {type:"teach", trg:"こわい", src:"scary / frightening", pos:"adj", gender:null,
   note:"い-adjective for fear. こわかった = was scary.\nKanji: 怖い.",
   example:"A: おばけやしきにはいったことがありますか？\nB: はい、とてもこわかったです！",
   exampleSrc:"A: Have you ever entered a haunted house?\nB: Yes, it was very scary!",
   funFact:"こわい is used for everything from horror movies to roller coasters to scary teachers. Japan has a rich horror tradition: Japanese horror films (J-horror) like Ring and Ju-On influenced global cinema. おばけやしき (haunted houses) at festivals are a summer staple."},

  {type:"teach", trg:"たのしかった", src:"was fun / was enjoyable (past)", pos:"adj", gender:null,
   note:"Past tense of たのしい (fun). い-adjective past: drop い, add かった.",
   example:"A: りょこうはどうでしたか？\nB: とてもたのしかったです！",
   exampleSrc:"A: How was the trip?\nB: It was very fun!",
   funFact:"たのしかった is the most common response to 'how was it?' questions about experiences. The い-adjective past formation (drop い, add かった) is one of the most useful grammar patterns for sharing stories about past experiences."},

  {type:"mc", q:"つまらない means:", opts:["scary","wonderful","boring","difficult"], ans:"boring",
   hint:"The opposite of おもしろい, expressing lack of interest or satisfaction."},

  {type:"match", pairs:[{trg:"つり",src:"fishing"},{trg:"キャンプ",src:"camping"},{trg:"ホームステイ",src:"homestay"},{trg:"おどる",src:"to dance"}]},

  {type:"match", pairs:[{trg:"すばらしい",src:"wonderful"},{trg:"つまらない",src:"boring"},{trg:"こわい",src:"scary"},{trg:"たのしかった",src:"was fun"}]},

  {type:"fb", s:"とても{1}です！\n(It was very fun!)", a:"たのしかった", opts:["たのしかった","たのしい","たのしく","たのしくない"], sSrc:"It was very fun!",
   hint:"The past tense of the い-adjective たのしい (fun)."},

  {type:"mc", q:"すばらしい expresses:", opts:["mild approval","strong negative feeling","genuine awe and admiration","indifference"], ans:"genuine awe and admiration",
   hint:"This is stronger than いい, used for truly impressive experiences."},

  {type:"fb", s:"やまでキャンプを{1}ことがありますか？\n(Have you ever camped in the mountains?)", a:"した", opts:["した","する","して","できる"], sSrc:"Have you ever camped in the mountains?",
   hint:"The た-form of する, needed before ことがある for experiences."},
]};
export default BATCH2_L_1;
