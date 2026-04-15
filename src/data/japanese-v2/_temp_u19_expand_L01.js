// Unit 19 Expansion. Lesson 3: たらのせかい (The World of たら)
const LESSON_3 = {
  id:"jav2_u19l3", title:"たらのせかい", icon:"🌧️", xp:15, board:true,
  steps:[
    {type:"intro", title:"たらのせかい",
     desc:"Dive deeper into たら, the most versatile conditional. Use it for hypothetical futures, past discoveries, counterfactual wishes, and polite suggestions. たら handles situations the other conditionals cannot, making it the essential all-purpose 'if/when.'",
     goals:["Use たら for past discoveries (when I did X, I found Y)","Express hypothetical wishes with たらいいのに","Make polite suggestions with たらどうですか"]},

    {type:"teach", trg:"あけたら", src:"when I opened (it)", pos:"verb", gender:null,
     note:"たら-form of あける (to open). Past discovery: when I opened it, I found...\nGroup 2: あけた + ら.",
     example:"A: ドアをあけたらねこがいました。\nB: びっくりしましたか？",
     exampleSrc:"A: When I opened the door, there was a cat.\nB: Were you surprised?",
     funFact:"たら for past discoveries is uniquely Japanese. It describes opening/arriving/doing something and finding an unexpected result. あけたら...いた (when I opened, there was...) creates a mini-narrative. This use of たら cannot be replaced by と, ば, or なら. It is exclusive to たら."},

    {type:"teach", trg:"かえったら", src:"when I got home / if I go home", pos:"verb", gender:null,
     note:"たら-form of かえる (to return home). Group 1: かえった + ら.\nPast or future depending on context.",
     example:"A: いえにかえったらだれもいませんでした。\nB: さみしかったですか？",
     exampleSrc:"A: When I got home, nobody was there.\nB: Were you lonely?",
     funFact:"かえったら shows how たら works for both past and future. Past: かえったらだれもいなかった (when I got home, nobody was there). Future: かえったらでんわしてね (when you get home, call me). Context and tense of the main clause determine the meaning."},

    {type:"teach", trg:"〜たらいいのに", src:"I wish ~ would happen (if only ~)", pos:"part", gender:null,
     note:"たら + いい (good) + のに (despite). Expresses an unfulfilled wish.\nあめがやんだらいいのに = I wish the rain would stop.",
     example:"A: もっとじかんがあったらいいのに。\nB: ほんとうにそうですね。",
     exampleSrc:"A: I wish I had more time.\nB: I really think so too.",
     funFact:"たらいいのに is the grammar of wishful thinking. It combines the conditional (if it were so) with いい (good) and のに (but it is not). This creates a bittersweet expression of wanting something that is not the case. It is gentler than English 'I wish' and carries a sigh of resignation."},

    {type:"teach", trg:"〜たらどうですか", src:"how about ~? / why don't you ~?", pos:"part", gender:null,
     note:"たら + どうですか = polite suggestion.\nやすんだらどうですか = how about taking a rest?",
     example:"A: あたまがいたいです。\nB: くすりをのんだらどうですか？",
     exampleSrc:"A: I have a headache.\nB: How about taking some medicine?",
     funFact:"たらどうですか is the polite suggestion pattern. It literally means 'if you did X, how would it be?' This indirect phrasing is very Japanese. Instead of directly telling someone to take medicine, you ask 'how about if you took medicine?' The indirectness softens the advice."},

    {type:"mc", q:"ドアをあけたらねこがいた uses たら for:", opts:["A future plan","A hypothetical wish","A past discovery","A polite suggestion"], ans:"A past discovery",
     hint:"たら in p... tense describes an unexpected finding: when I did X, I discovered Y."},

    {type:"teach", trg:"やむ", src:"to stop (rain/snow/pain)", pos:"verb", gender:null,
     note:"Group 1 verb. あめがやむ = the rain stops.\nKanji: 止む. Only for natural phenomena or sensations.",
     example:"A: あめがやんだらでかけましょう。\nB: いいですね。まちましょう。",
     exampleSrc:"A: When the rain stops, let us go out.\nB: Sounds good. Let us wait.",
     funFact:"止む is specifically for natural cessation: rain stopping, wind dying down, pain subsiding. It cannot be used for people stopping activities (that is やめる or とまる). Japanese weather vocabulary is rich because seasons and weather profoundly affect daily life. The expression 雨が止む (ame ga yamu) is said with relief."},

    {type:"teach", trg:"つけたら", src:"when I turned it on", pos:"verb", gender:null,
     note:"たら-form of つける (to turn on/attach). Group 2: つけた + ら.\nでんきをつけたら = when I turned the light on.",
     example:"A: テレビをつけたらおもしろいばんぐみをやっていました。\nB: なんのばんぐみですか？",
     exampleSrc:"A: When I turned on the TV, an interesting show was on.\nB: What show was it?",
     funFact:"つけたら + discovery is a daily pattern. Turning on the TV and discovering something interesting, turning on the light and seeing something unexpected. This sequential discovery sense of たら makes Japanese storytelling feel like a chain of small reveals, each one uncovered by the previous action."},

    {type:"fb", s:"もっとじかんがあっ{1}いいのに。\n(I wish I had more time.)", a:"たら", opts:["たら","と","ば","なら"], sSrc:"I wish I had more time.",
     hint:"The conditional used with いいのに to express unfulfilled wishes. The most versatile one."},

    {type:"teach", trg:"みつけたら", src:"if/when you find", pos:"verb", gender:null,
     note:"たら-form of みつける (to find). Group 2: みつけた + ら.\nいいみせをみつけたら = if you find a good shop.",
     example:"A: いいレストランをみつけたらおしえてください。\nB: わかりました。さがしてみます。",
     exampleSrc:"A: If you find a good restaurant, please tell me.\nB: Understood. I will try looking.",
     funFact:"みつけたら + request is a practical everyday pattern. Japanese people frequently share recommendations: いいみせをみつけたらおしえて (if you find a good shop, let me know). This information-sharing culture connects to the concept of kuchikomi (word of mouth), which Japanese consumers trust deeply."},

    {type:"teach", trg:"ばんぐみ", src:"TV program / show", pos:"noun", gender:null,
     note:"ばん (number/turn) + ぐみ (group/set). Kanji: 番組.\nテレビばんぐみ = TV program.",
     example:"A: すきなばんぐみはなんですか？\nB: りょうりのばんぐみがすきです。",
     exampleSrc:"A: What is your favorite TV show?\nB: I like cooking programs.",
     funFact:"番組 is essential media vocabulary. Japanese TV has distinctive genres: variety shows (バラエティ), cooking programs (料理番組), quiz shows (クイズ番組), and news programs (ニュース番組). Japanese TV culture is unique, with elaborate food segments, travel features, and celebrity panel discussions."},

    {type:"mc", q:"くすりをのんだらどうですか means:", opts:["Did you take medicine?","How about taking some medicine?","Medicine is bad for you","You must take medicine"], ans:"How about taking some medicine?",
     hint:"たら + どうですか is the pattern for making polite suggestions. Literally: if you did it, how would it be?"},

    {type:"teach", trg:"さがしてみる", src:"to try looking for", pos:"verb", gender:null,
     note:"さがす (to search) + てみる (to try doing).\nてみる adds 'try' to any verb. Exploratory action.",
     example:"A: あたらしいしごとをさがしてみます。\nB: おうえんしています！",
     exampleSrc:"A: I will try looking for a new job.\nB: I am cheering you on!",
     funFact:"てみる (to try doing) is one of the most useful verb combinations. It turns any action into a tentative attempt: たべてみる (try eating), きいてみる (try asking), いってみる (try going). The combination with さがす creates 'I will give searching a try,' which sounds less committed and more natural than a firm declaration."},

    {type:"fb", s:"いいレストランをみつけ{1}おしえてください。\n(If you find a good restaurant, please tell me.)", a:"たら", opts:["たら","と","ば","なら"], sSrc:"If you find a good restaurant, please tell me.",
     hint:"The conditional that works with requests and commands. The most flexible conditional."},

    {type:"tip", title:"Special Uses of たら",
     text:"Past discovery (only たら can do this):\nあけたらねこがいた = when I opened it, a cat was there.\nかえったらだれもいなかった = when I got home, nobody was there.\n\nWishful thinking:\nもっとやすかったらいいのに = I wish it were cheaper.\nあめがやんだらいいのに = I wish the rain would stop.\n\nPolite suggestion:\nやすんだらどうですか = how about resting?\nのんだらどうですか = how about taking (medicine)?\n\nFuture plans:\nおわったらのみにいこう = when it ends, let us go drink.\nやんだらでかけよう = when it stops, let us go out.",
     deepDive:{title:"Why たら Is the Safest Choice",
      text:"When Japanese learners ask which conditional to use, teachers say 'use たら.' Here is why:\n\n1. It works in ALL time frames (past, present, future, hypothetical).\n2. It works with ALL clause types (requests, intentions, suggestions, facts).\n3. It handles discovery, which no other conditional can.\n4. It combines with いいのに for wishes.\n5. It combines with どうですか for suggestions.\n\nThe only situations where たら is slightly unnatural are: pure scientific facts (use と) and responding to context just stated (use なら). In all other cases, たら is perfect."}},

    {type:"match", pairs:[{trg:"あけたら",src:"when opened"},{trg:"かえったら",src:"when got home"},{trg:"つけたら",src:"when turned on"},{trg:"みつけたら",src:"if you find"}]},

    {type:"match", pairs:[{trg:"たらいいのに",src:"I wish (if only)"},{trg:"たらどうですか",src:"how about?"},{trg:"やむ",src:"to stop (rain)"},{trg:"ばんぐみ",src:"TV program"}]},

    {type:"mc", q:"Which use of たら CANNOT be replaced by any other conditional?", opts:["Future plans","Polite suggestions","Past discoveries","Logical conditions"], ans:"Past discoveries",
     hint:"Only たら can describe the pattern: I did X, and unexpectedly discovered Y."},
  ]
};
export default LESSON_3;
