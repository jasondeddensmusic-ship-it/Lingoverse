// Batch 2 expansion for Unit 13 (Experience) — more life experiences, travel, cultural activities
const BATCH2_L_1 = {
  id:"jav2_u13l_b2_1", title:"素敵(すてき)な体験(たいけん)", icon:"🎌", xp:15, board:true,
  steps:[
  {type:"intro", title:"素敵(すてき)な体験(たいけん)",
   desc:"Expand your experience vocabulary with more travel activities, cultural experiences, and life milestones. Practice the たことがある pattern with richer, more varied verbs to tell deeper stories about your life.",
   goals:["Use experience patterns with sports and cultural activities","Describe travel experiences with specific activities","Talk about memorable life events and firsts"]},

  {type:"teach", trg:"スキューバダイビング", src:"scuba diving", pos:"noun", gender:null,
   note:"Katakana loanword. Popular in Okinawa and tropical destinations.\nスキューバダイビングをする = to go scuba diving.",
   example:"A: スキューバダイビングをしたことがありますか？\nB: はい、沖縄(おきなわ)でしました。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: Have you ever been scuba diving?\nB: Yes, I did in Okinawa.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"Okinawa is Japan's scuba diving paradise with crystal-clear waters and coral reefs. Many Japanese get their diving license during summer trips. ダイビングライセンス (diving license) courses are offered in resort areas year-round."},

  {type:"teach", trg:"スノーボード", src:"snowboarding", pos:"noun", gender:null,
   note:"Katakana loanword. Very popular winter sport in Japan.\nスノーボードをする = to go snowboarding.",
   example:"A: スノーボードをしたことがありますか？\nB: いいえ、でもやってみたいです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Have you ever been snowboarding?\nB: No, but I want to try it.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"Japan is a world-class snowboarding destination. 北海道(ほっかいどう)の powder snow is legendary among snowboarders globally. ニセコ has become internationally famous. Many Japanese take annual ski/snowboard trips in winter, with resorts accessible by bullet train from Tokyo."},

  {type:"teach", trg:"釣(つ)り", src:"fishing", pos:"noun", gender:null,
   note:"A popular hobby for all ages. 釣(つ)りをする = to go fishing.\nKanji: 釣(つ)り.",
   example:"A: 海(うみ)で釣(つ)りをしたことがありますか？\nB: はい、鯛(たい)を釣(つ)りました！\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Have you ever fished in the ocean?\nB: Yes, I caught a sea bream!\nA: How long did it take?\nB: About two hours.",
   funFact:"Fishing is one of Japan's most popular hobbies. 釣(つ)り combines 釣(つ) (hook) with り (nominalization). Types include: 海釣(うみづ)り (sea fishing), 川釣(かわづ)り (river fishing), and バス釣(づ)り (bass fishing). Fishing anime and manga are a genuine genre in Japan."},

  {type:"teach", trg:"キャンプ", src:"camping", pos:"noun", gender:null,
   note:"Katakana loanword. Camping has seen a huge boom in Japan recently.\nキャンプをする = to go camping.",
   example:"A: 山(やま)でキャンプをしたことがありますか？\nB: はい、とても楽(たの)しかったです。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Have you ever camped in the mountains?\nB: Yes, it was very fun.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"Camping exploded in popularity in Japan after the anime ゆるキャン (Laid-Back Camp) aired. Japanese camping culture emphasizes quality gear, beautiful scenery, and gourmet outdoor cooking. Solo camping (ソロキャンプ) has become especially trendy among adults."},

  {type:"mc", q:"スノーボードをしたことがありますか means:", opts:["Do you want to snowboard?","Have you ever been snowboarding?","Can you snowboard?","Are you snowboarding now?"], ans:"Have you ever been snowboarding?",
   hint:"た-form + ことがある asks about past life experience."},

  {type:"teach", trg:"ホームステイ", src:"homestay", pos:"noun", gender:null,
   note:"Katakana loanword. Staying with a host family, common for exchange students.\nホームステイをする = to do a homestay.",
   example:"A: 日本(にほん)でホームステイをしたことがありますか？\nB: はい、東京(とうきょう)で三(さん)ヶ月(かげつ)しました。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: Have you done a homestay in Japan?\nB: Yes, three months in Tokyo.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"Homestays are a popular way to experience Japanese culture firsthand. Host families often share traditional meals, help with language practice, and take guests to local events. Many lifelong friendships form through homestay programs."},

  {type:"teach", trg:"有名(ゆうめい)", src:"famous / well-known", pos:"adj", gender:null,
   note:"な-adjective. 有名(ゆうめい)な場所(ばしょ) = famous place.\nKanji: 有名(ゆうめい).",
   example:"A: 有名(ゆうめい)なお寺(てら)に行(い)ったことがありますか？\nB: はい、金閣寺(きんかくじ)に行(い)きました。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: Have you visited a famous temple?\nB: Yes, I visited Kinkakuji.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"有名 combines 有(う) (exist/have) and 名(めい) (name), literally 'having a name.' The opposite is 無名(むめい) (unknown). 有名人(ゆうめいじん) means 'celebrity.' Many Japanese travel guides rank places by how 有名(ゆうめい) they are."},

  {type:"teach", trg:"踊(おど)る", src:"to dance", pos:"verb", gender:null,
   note:"Group 1 verb. 踊(おど)った = danced. Traditional and modern dance.\nKanji: 踊(おど)る.",
   example:"A: 盆踊(ぼんおど)りを踊(おど)ったことがありますか？\nB: はい、夏祭(なつまつ)りで踊(おど)りました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: Have you danced bon-odori?\nB: Yes, I danced at a summer festival.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"踊(おど)る covers all types of dance. 盆踊(ぼんおど)り (Bon dance) is performed at summer festivals in circles around a central tower. It is open to everyone and easy to join. Modern Japanese is also famous for パラパラ (eurobeat hand dance) and よさこい (energetic group dance)."},

  {type:"fb", s:"有名(ゆうめい)なお寺(てら)に{1}ことがありますか？\n(Have you visited a famous temple?)", a:"行(い)った", opts:["行(い)った","行(い)く","行(い)って","行(い)ける"], sSrc:"Have you visited a famous temple?",
   hint:"The た-form (past tense) of 行(い)く, needed before ことがある."},

  {type:"teach", trg:"素晴(すば)らしい", src:"wonderful / magnificent", pos:"adj", gender:null,
   note:"い-adjective expressing strong positive impression.\nKanji: 素晴(すば)らしい.",
   example:"A: 沖縄(おきなわ)の海(うみ)は素晴(すば)らしかったです。\nB: いつか行(い)きたいです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: The sea in Okinawa was wonderful.\nB: I want to go someday.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"素晴(すば)らしい is stronger than いい (good) or きれい (beautiful). It expresses genuine awe. Using it shows deep appreciation. It is appropriate for natural beauty, performances, achievements, and any truly impressive experience."},

  {type:"teach", trg:"つまらない", src:"boring / uninteresting", pos:"adj", gender:null,
   note:"い-adjective. Opposite of 面白(おもしろ)い (interesting).\nCan be rude if said about someone's work.",
   example:"A: 映画(えいが)はどうでしたか？\nB: ちょっとつまらなかったです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: How was the movie?\nB: It was a bit boring.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"つまらない comes from つまる (to be packed/stuffed), so つまらない literally means 'not filling/not satisfying.' It is also used as a humble expression: つまらないものですが (it is a boring thing, but...) when giving a gift, downplaying its value out of modesty."},

  {type:"teach", trg:"怖(こわ)い", src:"scary / frightening", pos:"adj", gender:null,
   note:"い-adjective for fear. 怖(こわ)かった = was scary.\nKanji: 怖(こわ)い.",
   example:"A: おばけ屋敷(やしき)に入(はい)ったことがありますか？\nB: はい、とても怖(こわ)かったです！\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Have you ever entered a haunted house?\nB: Yes, it was very scary!\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"怖(こわ)い is used for everything from horror movies to roller coasters to scary teachers. Japan has a rich horror tradition: Japanese horror films (J-horror) like Ring and Ju-On influenced global cinema. おばけ屋敷(やしき) (haunted houses) at festivals are a summer staple."},

  {type:"teach", trg:"楽(たの)しかった", src:"was fun / was enjoyable (past)", pos:"adj", gender:null,
   note:"Past tense of 楽(たの)しい (fun). い-adjective past: drop い, add かった.",
   example:"A: 旅行(りょこう)はどうでしたか？\nB: とても楽(たの)しかったです！\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: How was the trip?\nB: It was very fun!\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"楽(たの)しかった is the most common response to 'how was it?' questions about experiences. The い-adjective past formation (drop い, add かった) is one of the most useful grammar patterns for sharing stories about past experiences."},

  {type:"mc", q:"つまらない means:", opts:["scary","wonderful","boring","difficult"], ans:"boring",
   hint:"The opposite of 面白(おもしろ)い, expressing lack of interest or satisfaction."},

  {type:"match", pairs:[{trg:"釣(つ)り",src:"fishing"},{trg:"キャンプ",src:"camping"},{trg:"ホームステイ",src:"homestay"},{trg:"踊(おど)る",src:"to dance"}]},

  {type:"match", pairs:[{trg:"素晴(すば)らしい",src:"wonderful"},{trg:"つまらない",src:"boring"},{trg:"怖(こわ)い",src:"scary"},{trg:"楽(たの)しかった",src:"was fun"}]},

  {type:"fb", s:"とても{1}です！\n(It was very fun!)", a:"楽(たの)しかった", opts:["楽(たの)しかった","楽(たの)しい","楽(たの)しく","楽(たの)しくない"], sSrc:"It was very fun!",
   hint:"The past tense of the い-adjective 楽(たの)しい (fun)."},

  {type:"mc", q:"素晴(すば)らしい expresses:", opts:["mild approval","strong negative feeling","genuine awe and admiration","indifference"], ans:"genuine awe and admiration",
   hint:"This is stronger than いい, used for truly impressive experiences."},

  {type:"fb", s:"山(やま)でキャンプを{1}ことがありますか？\n(Have you ever camped in the mountains?)", a:"した", opts:["した","する","して","できる"], sSrc:"Have you ever camped in the mountains?",
   hint:"The た-form of する, needed before ことがある for experiences."},
{type:"match",pairs:[{trg:"スキューバダイビング",src:"scuba diving"},{trg:"スノーボード",src:"snowboarding"},{trg:"有名(ゆうめい)",src:"famous / well-known"}]}]};
export default BATCH2_L_1;
