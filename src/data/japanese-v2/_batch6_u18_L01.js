// Batch 6 – Unit 18 (B1.1 Causative): Household Chores & Tasks
const BATCH6_L1 = {
  id:"jav2_u18l_b6_1", title:"家事(かじ)と掃除(そうじ)", icon:"🧹", xp:15, board:true,
  steps:[
    {type:"intro", title:"家事(かじ)と掃除(そうじ)",
     desc:"Learn vocabulary for household chores and cleaning. The causative form naturally applies here: parents make children do chores, bosses assign tasks. Master practical daily life verbs.",
     goals:["Name common household chores","Use cleaning and maintenance verbs","Practice causative patterns with chore vocabulary"]},

    {type:"teach", trg:"掃除(そうじ)", src:"cleaning", pos:"noun", gender:null,
     note:"Kanji: 掃除. 掃除(そうじ)する = to clean.\n掃除機(そうじき) = vacuum cleaner.",
     example:"A: 今日(きょう)は部屋(へや)の掃除(そうじ)をしましょう。\nB: まず掃除機(そうじき)をかけます。",
     exampleSrc:"A: Let us clean the room today.\nB: First I will vacuum.",
     funFact:"Japanese schools have お掃除(そうじ)の時間(じかん) (cleaning time) where students clean their own classrooms, hallways, and toilets. This builds responsibility and community spirit. There are no janitors for daily cleaning. The phrase 掃除(そうじ)のおばさん (cleaning lady) refers to special deep-cleaning staff."},

    {type:"teach", trg:"洗(あら)う", src:"to wash", pos:"verb", gender:null,
     note:"Group 1 verb. 皿(さら)を洗(あら)う = to wash dishes. 手(て)を洗(あら)う = to wash hands.\nKanji: 洗う.",
     example:"A: ご飯(はん)の後(あと)で皿(さら)を洗(あら)ってください。\nB: はい、すぐ洗(あら)います。",
     exampleSrc:"A: Please wash the dishes after the meal.\nB: Okay, I will wash them right away.",
     funFact:"洗(あら)う with different objects creates different activities: 手(て)を洗(あら)う (wash hands, basic hygiene), 服(ふく)を洗(あら)う (do laundry), 車(くるま)を洗(あら)う (wash the car). 洗濯(せんたく) (laundry) uses the same 洗 kanji. Japanese hand-washing culture intensified after 2020."},

    {type:"teach", trg:"干(ほ)す", src:"to hang out to dry / to air", pos:"verb", gender:null,
     note:"Group 1 verb. 洗濯物(せんたくもの)を干(ほ)す = to hang laundry to dry.\nKanji: 干す.",
     example:"A: 洗濯物(せんたくもの)を外(そと)に干(ほ)しましょう。\nB: 天気(てんき)がいいのでよく乾(かわ)きますね。",
     exampleSrc:"A: Let us hang the laundry outside.\nB: The weather is good so it will dry well.",
     funFact:"Japanese apartments typically have balconies specifically for 干(ほ)す (drying laundry). Dryers are less common than in Western countries. 布団(ふとん)を干(ほ)す (airing out futons) is a regular task. Tapping hanging futons with a 布団叩(ふとんたた)き (futon beater) is a distinctive Japanese sound."},

    {type:"teach", trg:"畳(たた)む", src:"to fold", pos:"verb", gender:null,
     note:"Group 1 verb. 服(ふく)を畳(たた)む = to fold clothes.\nKanji: 畳む. Also: 傘(かさ)を畳(たた)む = to fold an umbrella.",
     example:"A: 洗濯物(せんたくもの)を畳(たた)んでください。\nB: はい、タンスに入(い)れますね。",
     exampleSrc:"A: Please fold the laundry.\nB: Okay, I will put it in the dresser.",
     funFact:"畳(たた)む shares its root with 畳(たたみ) (tatami), the folding reed mats in Japanese rooms. Japanese folding techniques are admired: Marie Kondo's KonMari method (こんまり) teaches standing folds that save space. 折(お)り紙(がみ) (folding paper) is another expression of Japan's folding mastery."},

    {type:"teach", trg:"掃(は)く", src:"to sweep", pos:"verb", gender:null,
     note:"Group 1 verb. 床(ゆか)を掃(は)く = to sweep the floor. Different from 履(は)く (to put on shoes/pants).\nKanji: 掃く.",
     example:"A: 玄関(げんかん)を掃(は)いてください。\nB: はい、ほうきはどこですか？",
     exampleSrc:"A: Please sweep the entrance.\nB: Okay, where is the broom?",
     funFact:"掃(は)く (掃く, sweep) is a homophone of 履(は)く (履く, put on lower garments). Context clarifies meaning. Sweeping the entrance (玄関(げんかん)を掃(は)く) is a morning routine in traditional Japanese homes and shops. Shopkeepers sweep the sidewalk in front of their stores as a form of community care."},

    {type:"mc", q:"洗濯物(せんたくもの)を干(ほ)す means:", opts:["To hang laundry out to dry","To fold laundry","To wash clothes","To iron clothes"], ans:"To hang laundry out to dry",
     hint:"干(ほ)す means to d... something by hanging it in air or sunlight."},

    {type:"teach", trg:"拭(ふ)く", src:"to wipe", pos:"verb", gender:null,
     note:"Group 1 verb. テーブルを拭(ふ)く = to wipe the table.\nKanji: 拭く. ぞうきん = cleaning cloth.",
     example:"A: テーブルを拭(ふ)いてもらえますか？\nB: はい、ぞうきんを持(も)ってきます。",
     exampleSrc:"A: Could you wipe the table?\nB: Yes, I will bring a cloth.",
     funFact:"ぞうきんがけ (floor wiping with a cloth) is a classic Japanese school cleaning activity. Students get on hands and knees and race down hallways pushing a wet cloth. This activity builds humility and team spirit. The verb 拭(ふ)く also means to blow (wind, nose), written with different kanji (吹く)."},

    {type:"teach", trg:"乾(かわ)かす", src:"to dry (something)", pos:"verb", gender:null,
     note:"Group 1 verb. Transitive: 乾(かわ)かす. Intransitive: 乾(かわ)く (to dry/become dry).\nKanji: 乾かす.",
     example:"A: 髪(かみ)をドライヤーで乾(かわ)かしてください。\nB: はい、もうすぐ乾(かわ)きます。",
     exampleSrc:"A: Please dry your hair with a dryer.\nB: Okay, it will be dry soon.",
     funFact:"乾(かわ)かす/乾(かわ)く is another transitive/intransitive pair. 喉(のど)が乾(かわ)く (throat is dry = I am thirsty) and 洗濯物(せんたくもの)が乾(かわ)く (laundry dries) use the intransitive form. Japanese 布団(ふとん) need to 乾(かわ)かす regularly to prevent mold in the humid climate."},

    {type:"teach", trg:"捨(す)てる", src:"to throw away / to discard", pos:"verb", gender:null,
     note:"Group 2 verb. ゴミを捨(す)てる = to throw away trash.\nKanji: 捨てる.",
     example:"A: ゴミはどこに捨(す)てますか？\nB: 分別(ぶんべつ)して出(だ)してください。",
     exampleSrc:"A: Where do I throw away the trash?\nB: Please sort it and put it out.",
     funFact:"Japanese garbage sorting (分別(ぶんべつ)) is famously detailed: 燃(も)えるゴミ (burnable), 燃(も)えないゴミ (non-burnable), プラスチック, ペットボトル, 缶(かん) (cans), 瓶(びん) (bottles). Collection days differ by type. Improper sorting can get your trash rejected with a warning sticker."},

    {type:"teach", trg:"磨(みが)く", src:"to polish / to brush (teeth)", pos:"verb", gender:null,
     note:"Group 1 verb. 歯(は)を磨(みが)く = to brush teeth. 靴(くつ)を磨(みが)く = to polish shoes.\nKanji: 磨く.",
     example:"A: 歯(は)を磨(みが)いてからねてください。\nB: はい、もう磨(みが)きました。",
     exampleSrc:"A: Please brush your teeth before sleeping.\nB: Yes, I already brushed them.",
     funFact:"歯磨(はみが)き (tooth-brushing) is taken seriously in Japan. Many office workers brush teeth after lunch (workplace washrooms have toothbrush holders). Japanese toothpaste often comes in smaller tubes than Western brands. 磨(みが)く also means to polish skills: 腕(うで)を磨(みが)く (polish one's abilities)."},

    {type:"teach", trg:"硬(かた)い", src:"hard / stiff / firm", pos:"adj", gender:null,
     note:"I-adjective. 硬(かた)い肉(にく) = tough meat. 頭(あたま)が硬(かた)い = stubborn.\nKanji: 硬い/固い. Opposite: 柔(やわ)らかい.",
     example:"A: このパンは少(すこ)し硬(かた)いですね。\nB: レンジで温(あたた)めると柔(やわ)らかくなりますよ。",
     exampleSrc:"A: This bread is a bit hard.\nB: It will soften if you heat it in the microwave.",
     funFact:"硬(かた)い has multiple kanji: 硬い (physical hardness), 固い (firmness), 堅い (solid/reliable). Each nuance differs slightly. 頭(あたま)が硬(かた)い (hard-headed) means stubborn. 硬(かた)い話(はなし) (a stiff/formal conversation) describes overly serious talk. The opposite 柔(やわ)らかい means soft and flexible."},

    {type:"fb", s:"ゴミを分別(ぶんべつ)して{1}てください。\n(Please sort the trash and throw it away.)", a:"捨(す)て", opts:["捨(す)て","洗(あら)っ","畳(たた)ん","干(ほ)し"], sSrc:"Please sort the trash and throw it away.",
     hint:"The て-form of the verb meaning to discard or throw away."},

    {type:"teach", trg:"柔(やわ)らかい", src:"soft / tender / gentle", pos:"adj", gender:null,
     note:"I-adjective. 柔(やわ)らかい肉(にく) = tender meat. Opposite: 硬(かた)い.\nKanji: 柔らかい.",
     example:"A: この枕(まくら)は柔(やわ)らかくていいですね。\nB: そうですね。ぐっすり眠(ねむ)れます。",
     exampleSrc:"A: This pillow is nice and soft.\nB: Yes. You can sleep soundly.",
     funFact:"柔(やわ)らかい extends to personality: 柔(やわ)らかい表現(ひょうげん) (gentle expression), 柔(やわ)らかい態度(たいど) (flexible attitude). Japanese martial art 柔道(じゅうどう) uses the same 柔 kanji, meaning 'the gentle way.' The philosophy: softness overcomes hardness."},

    {type:"mc", q:"分別(ぶんべつ) in trash context means:", opts:["Sorting trash into categories","Throwing everything away together","Recycling only plastic","Burning all trash"], ans:"Sorting trash into categories",
     hint:"Japanese garbage must be separated into specific types before disposal."},

    {type:"match", pairs:[
      {trg:"掃除(そうじ)", src:"cleaning"},
      {trg:"洗(あら)う", src:"to wash"},
      {trg:"干(ほ)す", src:"to hang to dry"},
      {trg:"畳(たた)む", src:"to fold"},
      {trg:"捨(す)てる", src:"to throw away"}
    ]},

    {type:"fb", s:"歯(は)を{1}てからねてください。\n(Please brush your teeth before sleeping.)", a:"磨(みが)い", opts:["磨(みが)い","洗(あら)っ","拭(ふ)い","掃(は)い"], sSrc:"Please brush your teeth before sleeping.",
     hint:"The て-form of the verb meaning to brush or polish."},

    {type:"mc", q:"The pair 硬(かた)い / 柔(やわ)らかい means:", opts:["Hard / soft","Hot / cold","Deep / shallow","Wide / narrow"], ans:"Hard / soft",
     hint:"These opposite adjectives describe texture and firmness."}
  ]
};
export default BATCH6_L1;
