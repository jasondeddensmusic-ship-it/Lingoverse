// Batch 6 – Unit 18 (B1.1 Causative): Household Chores & Tasks
const BATCH6_L1 = {
  id:"jav2_u18l_b6_1", title:"かじとそうじ", icon:"🧹", xp:15, board:true,
  steps:[
    {type:"intro", title:"かじとそうじ",
     desc:"Learn vocabulary for household chores and cleaning. The causative form naturally applies here: parents make children do chores, bosses assign tasks. Master practical daily life verbs.",
     goals:["Name common household chores","Use cleaning and maintenance verbs","Practice causative patterns with chore vocabulary"]},

    {type:"teach", trg:"そうじ", src:"cleaning", pos:"noun", gender:null,
     note:"Kanji: 掃除. そうじする = to clean.\nそうじき = vacuum cleaner.",
     example:"A: きょうはへやのそうじをしましょう。\nB: まずそうじきをかけます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Let us clean the room today.\nB: First I will vacuum.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"Japanese schools have おそうじのじかん (cleaning time) where students clean their own classrooms, hallways, and toilets. This builds responsibility and community spirit. There are no janitors for daily cleaning. The phrase そうじのおばさん (cleaning lady) refers to special deep-cleaning staff."},

    {type:"teach", trg:"あらう", src:"to wash", pos:"verb", gender:null,
     note:"Group 1 verb. さらをあらう = to wash dishes. てをあらう = to wash hands.\nKanji: 洗う.",
     example:"A: ごはんのあとでさらをあらってください。\nB: はい、すぐあらいます。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Please wash the dishes after the meal.\nB: Okay, I will wash them right away.\nA: How long did it take?\nB: About two hours.",
     funFact:"あらう with different objects creates different activities: てをあらう (wash hands, basic hygiene), ふくをあらう (do laundry), くるまをあらう (wash the car). せんたく (洗濯, laundry) uses the same 洗 kanji. Japanese hand-washing culture intensified after 2020."},

    {type:"teach", trg:"ほす", src:"to hang out to dry / to air", pos:"verb", gender:null,
     note:"Group 1 verb. せんたくものをほす = to hang laundry to dry.\nKanji: 干す.",
     example:"A: せんたくものをそとにほしましょう。\nB: てんきがいいのでよくかわきますね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Let us hang the laundry outside.\nB: The weather is good so it will dry well.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"Japanese apartments typically have balconies specifically for ほす (drying laundry). Dryers are less common than in Western countries. ふとんをほす (airing out futons) is a regular task. Tapping hanging futons with a ふとんたたき (futon beater) is a distinctive Japanese sound."},

    {type:"teach", trg:"たたむ", src:"to fold", pos:"verb", gender:null,
     note:"Group 1 verb. ふくをたたむ = to fold clothes.\nKanji: 畳む. Also: かさをたたむ = to fold an umbrella.",
     example:"A: せんたくものをたたんでください。\nB: はい、たんすにいれますね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Please fold the laundry.\nB: Okay, I will put it in the dresser.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"たたむ shares its root with たたみ (tatami), the folding reed mats in Japanese rooms. Japanese folding techniques are admired: Marie Kondo's KonMari method (こんまり) teaches standing folds that save space. おりがみ (folding paper) is another expression of Japan's folding mastery."},

    {type:"teach", trg:"はく", src:"to sweep", pos:"verb", gender:null,
     note:"Group 1 verb. ゆかをはく = to sweep the floor. Different from はく (to put on shoes/pants).\nKanji: 掃く.",
     example:"A: げんかんをはいてください。\nB: はい、ほうきはどこですか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Please sweep the entrance.\nB: Okay, where is the broom?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"はく (掃く, sweep) is a homophone of はく (履く, put on lower garments). Context clarifies meaning. Sweeping the entrance (げんかんをはく) is a morning routine in traditional Japanese homes and shops. Shopkeepers sweep the sidewalk in front of their stores as a form of community care."},

    {type:"mc", q:"せんたくものをほす means:", opts:["To hang laundry out to dry","To fold laundry","To wash clothes","To iron clothes"], ans:"To hang laundry out to dry",
     hint:"ほす means to d... something by hanging it in air or sunlight."},

    {type:"teach", trg:"ふく", src:"to wipe", pos:"verb", gender:null,
     note:"Group 1 verb. テーブルをふく = to wipe the table.\nKanji: 拭く. ぞうきん = cleaning cloth.",
     example:"A: テーブルをふいてもらえますか？\nB: はい、ぞうきんをもってきます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Could you wipe the table?\nB: Yes, I will bring a cloth.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"ぞうきんがけ (floor wiping with a cloth) is a classic Japanese school cleaning activity. Students get on hands and knees and race down hallways pushing a wet cloth. This activity builds humility and team spirit. The verb ふく also means to blow (wind, nose), written with different kanji (吹く)."},

    {type:"teach", trg:"かわかす", src:"to dry (something)", pos:"verb", gender:null,
     note:"Group 1 verb. Transitive: かわかす. Intransitive: かわく (to dry/become dry).\nKanji: 乾かす.",
     example:"A: かみをドライヤーでかわかしてください。\nB: はい、もうすぐかわきます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Please dry your hair with a dryer.\nB: Okay, it will be dry soon.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"かわかす/かわく is another transitive/intransitive pair. のどがかわく (throat is dry = I am thirsty) and せんたくものがかわく (laundry dries) use the intransitive form. Japanese futons need to かわかす regularly to prevent mold in the humid climate."},

    {type:"teach", trg:"すてる", src:"to throw away / to discard", pos:"verb", gender:null,
     note:"Group 2 verb. ゴミをすてる = to throw away trash.\nKanji: 捨てる.",
     example:"A: ゴミはどこにすてますか？\nB: ぶんべつしてだしてください。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Where do I throw away the trash?\nB: Please sort it and put it out.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Japanese garbage sorting (ぶんべつ) is famously detailed: もえるゴミ (burnable), もえないゴミ (non-burnable), プラスチック, ペットボトル, かん (cans), びん (bottles). Collection days differ by type. Improper sorting can get your trash rejected with a warning sticker."},

    {type:"teach", trg:"みがく", src:"to polish / to brush (teeth)", pos:"verb", gender:null,
     note:"Group 1 verb. はをみがく = to brush teeth. くつをみがく = to polish shoes.\nKanji: 磨く.",
     example:"A: はをみがいてからねてください。\nB: はい、もうみがきました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Please brush your teeth before sleeping.\nB: Yes, I already brushed them.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"はみがき (tooth-brushing) is taken seriously in Japan. Many office workers brush teeth after lunch (workplace washrooms have toothbrush holders). Japanese toothpaste often comes in smaller tubes than Western brands. みがく also means to polish skills: うでをみがく (polish one's abilities)."},

    {type:"teach", trg:"かたい", src:"hard / stiff / firm", pos:"adj", gender:null,
     note:"I-adjective. かたいにく = tough meat. あたまがかたい = stubborn.\nKanji: 硬い/固い. Opposite: やわらかい.",
     example:"A: このパンはすこしかたいですね。\nB: レンジであたためるとやわらかくなりますよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: This bread is a bit hard.\nB: It will soften if you heat it in the microwave.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"かたい has multiple kanji: 硬い (physical hardness), 固い (firmness), 堅い (solid/reliable). Each nuance differs slightly. あたまがかたい (hard-headed) means stubborn. かたいはなし (a stiff/formal conversation) describes overly serious talk. The opposite やわらかい means soft and flexible."},

    {type:"fb", s:"ゴミをぶんべつして{1}てください。\n(Please sort the trash and throw it away.)", a:"すて", opts:["すて","あらっ","たたん","ほし"], sSrc:"Please sort the trash and throw it away.",
     hint:"The て-form of the verb meaning to discard or throw away."},

    {type:"teach", trg:"やわらかい", src:"soft / tender / gentle", pos:"adj", gender:null,
     note:"I-adjective. やわらかいにく = tender meat. Opposite: かたい.\nKanji: 柔らかい.",
     example:"A: このまくらはやわらかくていいですね。\nB: そうですね。ぐっすりねむれます。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: This pillow is nice and soft.\nB: Yes. You can sleep soundly.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"やわらかい extends to personality: やわらかいひょうげん (gentle expression), やわらかいたいど (flexible attitude). Japanese martial art じゅうどう (柔道) uses the same 柔 kanji, meaning 'the gentle way.' The philosophy: softness overcomes hardness."},

    {type:"mc", q:"ぶんべつ in trash context means:", opts:["Sorting trash into categories","Throwing everything away together","Recycling only plastic","Burning all trash"], ans:"Sorting trash into categories",
     hint:"Japanese garbage must be separated into specific types before disposal."},

    {type:"match", pairs:[
      {trg:"そうじ", src:"cleaning"},
      {trg:"あらう", src:"to wash"},
      {trg:"ほす", src:"to hang to dry"},
      {trg:"たたむ", src:"to fold"},
      {trg:"すてる", src:"to throw away"}
    ]},

    {type:"fb", s:"はを{1}てからねてください。\n(Please brush your teeth before sleeping.)", a:"みがい", opts:["みがい","あらっ","ふい","はい"], sSrc:"Please brush your teeth before sleeping.",
     hint:"The て-form of the verb meaning to brush or polish."},

    {type:"mc", q:"The pair かたい / やわらかい means:", opts:["Hard / soft","Hot / cold","Deep / shallow","Wide / narrow"], ans:"Hard / soft",
     hint:"These opposite adjectives describe texture and firmness."}
  ]
};
export default BATCH6_L1;
