// Batch 11 – Unit 11 (A2.1 Te-Form): Daily Activity Verbs
const BATCH11_L1 = {
  id:"jav2_u11l_b11_1", title:"まいにちのどうし", icon:"🏃", xp:15, board:true,
  steps:[
    {type:"intro", title:"まいにちのどうし",
     desc:"Learn essential daily activity verbs and practice using them with the te-form. These verbs describe routines, habits, and common actions.",
     goals:["Use core daily verbs in polite and te-forms","Describe daily routines with ている","Chain actions using the te-form"]},

    {type:"teach", trg:"あらう", src:"to wash", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: あらって.\nてをあらう = wash hands.",
     example:"A: ごはんのまえにてをあらってください。\nB: はい、もうあらいました。",
     exampleSrc:"A: Please wash your hands before the meal.\nB: Yes, I already washed them.",
     funFact:"てをあらう (washing hands) is deeply ingrained in Japanese culture, long before modern hygiene awareness. Japanese homes have a separate sink (手洗い) just for handwashing, often near the entrance. The word おてあらい (washroom) literally means 'hand washing place.'"},

    {type:"teach", trg:"きがえる", src:"to change clothes", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: きがえて.\nきがえ = a change of clothes.",
     example:"A: すぐきがえてください。\nB: ごふんまってください。",
     exampleSrc:"A: Please change clothes quickly.\nB: Please wait five minutes.",
     funFact:"Changing clothes (きがえる) has cultural significance in Japan. Students change into indoor shoes (うわばき) at school. Office workers sometimes change into comfortable work clothes. Onsen visitors change in shared changing rooms (脱衣所) with organized locker systems."},

    {type:"teach", trg:"そうじする", src:"to clean", pos:"verb", gender:null,
     note:"する verb. て-form: そうじして.\nおそうじ = cleaning (polite).",
     example:"A: きょうはへやのそうじをしましょう。\nB: わたしはまどをふきます。",
     exampleSrc:"A: Let's clean the room today.\nB: I will wipe the windows.",
     funFact:"In Japanese schools, students clean their own classrooms, hallways, and toilets every day (掃除の時間). There are no janitors for daily cleaning. This practice teaches responsibility and respect for shared spaces. Japanese train stations and streets are remarkably clean for the same cultural reason."},

    {type:"teach", trg:"せんたくする", src:"to do laundry", pos:"verb", gender:null,
     note:"する verb. て-form: せんたくして.\nせんたくき = washing machine.",
     example:"A: せんたくものがたまっています。\nB: あしたせんたくしましょう。",
     exampleSrc:"A: The laundry has piled up.\nB: Let's do laundry tomorrow.",
     funFact:"Most Japanese households hang laundry outside to dry (外干し) rather than using dryers, even in apartment complexes. The daily weather forecast includes a せんたくもの指数 (laundry index) rating how good the day is for drying clothes outside. Rainy season (梅雨) is the worst time for laundry."},

    {type:"teach", trg:"かたづける", src:"to tidy up / organize", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: かたづけて.\nへやをかたづける = tidy up the room.",
     example:"A: つくえのうえをかたづけてください。\nB: はい、すぐかたづけます。",
     exampleSrc:"A: Please tidy up the desk.\nB: Yes, I will tidy it right away.",
     funFact:"Marie Kondo's konmari method (こんまりメソッド) made Japanese tidying famous worldwide. The core principle: keep only things that 'spark joy' (ときめく). Japanese small living spaces make かたづける a daily necessity, and organizing is considered a life skill taught from childhood."},

    {type:"teach", trg:"でかける", src:"to go out", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: でかけて.\nおでかけ = going out (polite/cute).",
     example:"A: どこにでかけますか？\nB: ともだちとえいがをみにいきます。",
     exampleSrc:"A: Where are you going out?\nB: I am going to see a movie with a friend.",
     funFact:"おでかけ (going out) is a significant concept in Japanese daily life. Weekend おでかけ plans are a common conversation topic. TV shows dedicate segments to おでかけスポット (outing spots). The word carries a lighter, more fun connotation than the neutral でる (to leave)."},

    {type:"teach", trg:"もどる", src:"to return / go back", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: もどって.\nもとにもどる = return to the original state.",
     example:"A: いつもどりますか？\nB: ごじごろにもどります。",
     exampleSrc:"A: When will you come back?\nB: I will return around 5.",
     funFact:"Japanese has multiple words for 'return': もどる (return to a place you left temporarily), かえる (go home), and もどす (return something/restore). もどる implies you will continue what you were doing, while かえる means you are done for the day."},

    {type:"teach", trg:"やすむ", src:"to rest / take a day off", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: やすんで.\nきょうはやすみます = I will take today off.",
     example:"A: かぜをひいたのでやすみます。\nB: おだいじに。ゆっくりやすんでください。",
     exampleSrc:"A: I caught a cold so I will take the day off.\nB: Take care. Please rest well.",
     funFact:"やすむ serves double duty: 'to rest' and 'to be absent/take a day off.' がっこうをやすむ = be absent from school. In Japan, taking sick days (病欠) is sometimes stigmatized, but attitudes are slowly changing. おやすみなさい (good night) literally means 'please rest.'"},

    {type:"teach", trg:"つかう", src:"to use", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: つかって.\nつかいかた = how to use / usage.",
     example:"A: このアプリのつかいかたをおしえてください。\nB: かんたんですよ。ここをおしてください。",
     exampleSrc:"A: Please teach me how to use this app.\nB: It is easy. Press here.",
     funFact:"つかいすてる (use and throw away = disposable) reflects Japan's complicated relationship with convenience and waste. While Japanese recycling is meticulous, the culture of individual wrapping (個包装) creates significant packaging waste. つかいかた manuals in Japan are famously detailed."},

    {type:"teach", trg:"おぼえる", src:"to memorize / remember", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: おぼえて.\nDifferent from おもいだす (to recall).",
     example:"A: このかんじをおぼえましたか？\nB: まだおぼえていません。むずかしいです。",
     exampleSrc:"A: Did you memorize this kanji?\nB: I haven't memorized it yet. It is difficult.",
     funFact:"おぼえる (to memorize actively) is different from しる (to know) and おもいだす (to recall a memory). Japanese students spend enormous effort on おぼえる: kanji, vocabulary, historical dates. Rote memorization (暗記) is a core study method, though active recall methods are gaining popularity."},

    {type:"teach", trg:"わすれる", src:"to forget", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: わすれて.\nOpposite of おぼえる.\nわすれものをする = leave something behind.",
     example:"A: かさをわすれました！\nB: だいじょうぶ、かしますよ。",
     exampleSrc:"A: I forgot my umbrella!\nB: It is okay, I will lend you one.",
     funFact:"Japan has an amazing lost-and-found system (落とし物/わすれもの). Police stations hold lost items, and train companies have dedicated わすれもの centers. Over 80% of lost wallets are returned with all cash intact. The country's honesty culture makes forgetting things less stressful."},

    // Quiz steps
    {type:"mc", q:"にほんのがっこうでは、だれがきょうしつをそうじしますか？",
     opts:["The students themselves","Professional janitors","The teachers","Parent volunteers"],
     ans:"The students themselves",
     hint:"This daily practice teaches responsibility. S... take turns cleaning different areas of the school."},

    {type:"fb", s:"ごはんのまえにてを{1}ください。",
     a:["あらって"],
     opts:["あらって","きがえて","かたづけて","つかって"],
     hint:"Before eating, you need to clean your hands. Use the te-form of the verb meaning 'to wash.'",
     sSrc:"Please wash your hands before the meal."},

    {type:"match", pairs:[
      {trg:"おぼえる", src:"to memorize"},
      {trg:"わすれる", src:"to forget"},
      {trg:"やすむ", src:"to rest"},
      {trg:"もどる", src:"to return"}
    ]},

    {type:"mc", q:"「もどる」と「かえる」はどうちがいますか？",
     opts:["もどる is temporary return, かえる is going home","They mean the same thing","もどる is polite, かえる is casual","もどる is for things, かえる is for people"],
     ans:"もどる is temporary return, かえる is going home",
     hint:"One word implies you will come back and continue, while the other means you are done for the day."},

    {type:"fb", s:"かさを{1}！",
     a:["わすれました"],
     opts:["わすれました","おぼえました","つかいました","あらいました"],
     hint:"Oh no, you left your umbrella somewhere! Use the past tense of the verb meaning 'to forget.'",
     sSrc:"I forgot my umbrella!"},

    {type:"mc", q:"にほんのてんきよほうではなにがほうそうされますか？",
     opts:["A laundry drying index","A cooking difficulty index","A shopping index","A sleep quality index"],
     ans:"A laundry drying index",
     hint:"Because most Japanese households dry clothes outside, the weather forecast includes a helpful rating about this daily chore."}
  ]
};
export default BATCH11_L1;
