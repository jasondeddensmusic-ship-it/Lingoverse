// Batch 11 – Unit 11 (A2.1 Te-Form): Daily Activity Verbs
const BATCH11_L1 = {
  id:"jav2_u11l_b11_1", title:"毎日(まいにち)の動詞(どうし)", icon:"🏃", xp:15, board:true,
  steps:[
    {type:"intro", title:"毎日(まいにち)の動詞(どうし)",
     desc:"Learn essential daily activity verbs and practice using them with the te-form. These verbs describe routines, habits, and common actions.",
     goals:["Use core daily verbs in polite and te-forms","Describe daily routines with ている","Chain actions using the te-form"]},

    {type:"teach", trg:"洗(あら)う", src:"to wash", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 洗(あら)って.\n手(て)を洗(あら)う = wash hands.",
     example:"A: ごはんの前(まえ)に手(て)を洗(あら)ってください。\nB: はい、もう洗(あら)いました。",
     exampleSrc:"A: Please wash your hands before the meal.\nB: Yes, I already washed them.",
     funFact:"手(て)を洗(あら)う (washing hands) is deeply ingrained in Japanese culture, long before modern hygiene awareness. Japanese homes have a separate sink (手洗(てあら)い) just for handwashing, often near the entrance. The word お手洗(てあら)い (washroom) literally means 'hand washing place.'"},

    {type:"teach", trg:"着替(きが)える", src:"to change clothes", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 着替(きが)えて.\n着替(きが)え = a change of clothes.",
     example:"A: すぐ着替(きが)えてください。\nB: 五分(ごふん)待(ま)ってください。",
     exampleSrc:"A: Please change clothes quickly.\nB: Please wait five minutes.",
     funFact:"Changing clothes (着替(きが)える) has cultural significance in Japan. Students change into indoor shoes (うわばき) at school. Office workers sometimes change into comfortable work clothes. Onsen visitors change in shared changing rooms (脱衣所(だついじょ)) with organized locker systems."},

    {type:"teach", trg:"掃除(そうじ)する", src:"to clean", pos:"verb", gender:null,
     note:"する verb. て-form: 掃除(そうじ)して.\nお掃除(そうじ) = cleaning (polite).",
     example:"A: 今日(きょう)は部屋(へや)の掃除(そうじ)をしましょう。\nB: 私(わたし)は窓(まど)を拭(ふ)きます。",
     exampleSrc:"A: Let's clean the room today.\nB: I will wipe the windows.",
     funFact:"In Japanese schools, students clean their own classrooms, hallways, and toilets every day (掃除(そうじ)の時間(じかん)). There are no janitors for daily cleaning. This practice teaches responsibility and respect for shared spaces. Japanese train stations and streets are remarkably clean for the same cultural reason."},

    {type:"teach", trg:"洗濯(せんたく)する", src:"to do laundry", pos:"verb", gender:null,
     note:"する verb. て-form: 洗濯(せんたく)して.\n洗濯機(せんたくき) = washing machine.",
     example:"A: 洗濯物(せんたくもの)がたまっています。\nB: 明日(あした)洗濯(せんたく)しましょう。",
     exampleSrc:"A: The laundry has piled up.\nB: Let's do laundry tomorrow.",
     funFact:"Most Japanese households hang laundry outside to dry (外干(そとほ)し) rather than using dryers, even in apartment complexes. The daily weather forecast includes a 洗濯物(せんたくもの)指数(しすう) (laundry index) rating how good the day is for drying clothes outside. Rainy season (梅雨(つゆ)) is the worst time for laundry."},

    {type:"teach", trg:"片付(かたづ)ける", src:"to tidy up / organize", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 片付(かたづ)けて.\n部屋(へや)を片付(かたづ)ける = tidy up the room.",
     example:"A: 机(つくえ)の上(うえ)を片付(かたづ)けてください。\nB: はい、すぐ片付(かたづ)けます。",
     exampleSrc:"A: Please tidy up the desk.\nB: Yes, I will tidy it right away.",
     funFact:"Marie Kondo's konmari method (こんまりメソッド) made Japanese tidying famous worldwide. The core principle: keep only things that 'spark joy' (ときめく). Japanese small living spaces make 片付(かたづ)ける a daily necessity, and organizing is considered a life skill taught from childhood."},

    {type:"teach", trg:"出(で)かける", src:"to go out", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 出(で)かけて.\nお出(で)かけ = going out (polite/cute).",
     example:"A: どこに出(で)かけますか？\nB: 友達(ともだち)と映画(えいが)を見(み)に行(い)きます。",
     exampleSrc:"A: Where are you going out?\nB: I am going to see a movie with a friend.",
     funFact:"お出(で)かけ (going out) is a significant concept in Japanese daily life. Weekend お出(で)かけ plans are a common conversation topic. TV shows dedicate segments to お出(で)かけスポット (outing spots). The word carries a lighter, more fun connotation than the neutral 出(で)る (to leave)."},

    {type:"teach", trg:"戻(もど)る", src:"to return / go back", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 戻(もど)って.\n元(もと)に戻(もど)る = return to the original state.",
     example:"A: いつ戻(もど)りますか？\nB: 五時(ごじ)ごろに戻(もど)ります。",
     exampleSrc:"A: When will you come back?\nB: I will return around 5.",
     funFact:"Japanese has multiple words for 'return': 戻(もど)る (return to a place you left temporarily), 帰(かえ)る (go home), and 戻(もど)す (return something/restore). 戻(もど)る implies you will continue what you were doing, while 帰(かえ)る means you are done for the day."},

    {type:"teach", trg:"休(やす)む", src:"to rest / take a day off", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 休(やす)んで.\n今日(きょう)は休(やす)みます = I will take today off.",
     example:"A: 風邪(かぜ)をひいたので休(やす)みます。\nB: お大事(だいじ)に。ゆっくり休(やす)んでください。",
     exampleSrc:"A: I caught a cold so I will take the day off.\nB: Take care. Please rest well.",
     funFact:"休(やす)む serves double duty: 'to rest' and 'to be absent/take a day off.' 学校(がっこう)を休(やす)む = be absent from school. In Japan, taking sick days (病欠(びょうけつ)) is sometimes stigmatized, but attitudes are slowly changing. おやすみなさい (good night) literally means 'please rest.'"},

    {type:"teach", trg:"使(つか)う", src:"to use", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 使(つか)って.\n使(つか)い方(かた) = how to use / usage.",
     example:"A: このアプリの使(つか)い方(かた)を教(おし)えてください。\nB: 簡単(かんたん)ですよ。ここを押(お)してください。",
     exampleSrc:"A: Please teach me how to use this app.\nB: It is easy. Press here.",
     funFact:"使(つか)い捨(す)てる (use and throw away = disposable) reflects Japan's complicated relationship with convenience and waste. While Japanese recycling is meticulous, the culture of individual wrapping (個包装(こほうそう)) creates significant packaging waste. 使(つか)い方(かた) manuals in Japan are famously detailed."},

    {type:"teach", trg:"覚(おぼ)える", src:"to memorize / remember", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 覚(おぼ)えて.\nDifferent from 思(おも)い出(だ)す (to recall).",
     example:"A: この漢字(かんじ)を覚(おぼ)えましたか？\nB: まだ覚(おぼ)えていません。難(むずか)しいです。",
     exampleSrc:"A: Did you memorize this kanji?\nB: I haven't memorized it yet. It is difficult.",
     funFact:"覚(おぼ)える (to memorize actively) is different from 知(し)る (to know) and 思(おも)い出(だ)す (to recall a memory). Japanese students spend enormous effort on 覚(おぼ)える: kanji, vocabulary, historical dates. Rote memorization (暗記(あんき)) is a core study method, though active recall methods are gaining popularity."},

    {type:"teach", trg:"忘(わす)れる", src:"to forget", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 忘(わす)れて.\nOpposite of 覚(おぼ)える.\n忘(わす)れ物(もの)をする = leave something behind.",
     example:"A: かさを忘(わす)れました！\nB: 大丈夫(だいじょうぶ)、貸(か)しますよ。",
     exampleSrc:"A: I forgot my umbrella!\nB: It is okay, I will lend you one.",
     funFact:"Japan has an amazing lost-and-found system (落(お)とし物(もの)/忘(わす)れ物(もの)). Police stations hold lost items, and train companies have dedicated 忘(わす)れ物(もの)センター. Over 80% of lost wallets are returned with all cash intact. The country's honesty culture makes forgetting things less stressful."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の学校(がっこう)では、だれが教室(きょうしつ)を掃除(そうじ)しますか？",
     opts:["The students themselves","Professional janitors","The teachers","Parent volunteers"],
     ans:"The students themselves",
     hint:"This daily practice teaches responsibility. S... take turns cleaning different areas of the school."},

    {type:"fb", s:"ごはんの前(まえ)に手(て)を{1}ください。",
     a:["洗(あら)って"],
     opts:["洗(あら)って","着替(きが)えて","片付(かたづ)けて","使(つか)って"],
     hint:"Before eating, you need to clean your hands. Use the te-form of the verb meaning 'to wash.'",
     sSrc:"Please wash your hands before the meal."},

    {type:"match", pairs:[
      {trg:"覚(おぼ)える", src:"to memorize"},
      {trg:"忘(わす)れる", src:"to forget"},
      {trg:"休(やす)む", src:"to rest"},
      {trg:"戻(もど)る", src:"to return"}
    ]},

    {type:"mc", q:"「戻(もど)る」と「帰(かえ)る」はどう違(ちが)いますか？",
     opts:["戻(もど)る is temporary return, 帰(かえ)る is going home","They mean the same thing","戻(もど)る is polite, 帰(かえ)る is casual","戻(もど)る is for things, 帰(かえ)る is for people"],
     ans:"戻(もど)る is temporary return, 帰(かえ)る is going home",
     hint:"One word implies you will come back and continue, while the other means you are done for the day."},

    {type:"fb", s:"かさを{1}！",
     a:["忘(わす)れました"],
     opts:["忘(わす)れました","覚(おぼ)えました","使(つか)いました","洗(あら)いました"],
     hint:"Oh no, you left your umbrella somewhere! Use the past tense of the verb meaning 'to forget.'",
     sSrc:"I forgot my umbrella!"},

    {type:"mc", q:"日本(にほん)の天気予報(てんきよほう)ではなにが放送(ほうそう)されますか？",
     opts:["A laundry drying index","A cooking difficulty index","A shopping index","A sleep quality index"],
     ans:"A laundry drying index",
     hint:"Because most Japanese households dry clothes outside, the weather forecast includes a helpful rating about this daily chore."}
  ,{type:"match",pairs:[{trg:"洗(あら)う",src:"to wash"},{trg:"着替(きが)える",src:"to change clothes"},{trg:"掃除(そうじ)する",src:"to clean"},{trg:"洗濯(せんたく)する",src:"to do laundry"},{trg:"片付(かたづ)ける",src:"to tidy up / organize"},{trg:"出(で)かける",src:"to go out"}]},{type:"match",pairs:[{trg:"使(つか)う",src:"to use"}]}]
};
export default BATCH11_L1;
