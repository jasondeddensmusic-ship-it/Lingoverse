// Batch 4 — Unit 06 Lesson 1: Body Parts
const BATCH4_L_1 = {
  id:"jav2_u06l_b4_1", title:"体(からだ)", icon:"🦵", xp:15, board:true,
  steps:[
    {type:"intro", title:"体(からだ)の部分(ぶぶん)",
     desc:"Learn the names of body parts in Japanese. This vocabulary is essential for describing yourself, visiting a doctor, and understanding health conversations.",
     goals:["Name major body parts","Describe physical sensations","Use body part vocabulary in context"]},

    {type:"teach", trg:"体(からだ)", src:"body", pos:"noun", gender:null,
     note:"Kanji: 体. The general word for the physical body.",
     example:"体(からだ)に気(き)をつけてください。",
     exampleSrc:"Please take care of your body.",
     funFact:"体 has two readings: karada (body) and tai (physical). Tai appears in 体育(たいいく) (taiiku, physical education), 体温(たいおん) (taion, body temperature), and 体重(たいじゅう) (taijuu, body weight)."},

    {type:"teach", trg:"頭(あたま)", src:"head", pos:"noun", gender:null,
     note:"Kanji: 頭. Also means 'brain/intelligence' in idioms.",
     example:"頭(あたま)が痛(いた)いです。",
     exampleSrc:"I have a headache.",
     funFact:"頭(あたま)がいい (smart/intelligent, 'good head'). 頭(あたま)が固(かた)い means 'stubborn' ('hard head'). Japanese has many personality idioms using body parts."},

    {type:"teach", trg:"顔(かお)", src:"face", pos:"noun", gender:null,
     note:"Kanji: 顔. Used in many expressions about reputation and emotion.",
     example:"顔(かお)を洗(あら)います。",
     exampleSrc:"I wash my face.",
     funFact:"'Losing face' (顔(かお)を潰(つぶ)す, kao wo tsubusu) is deeply important in Japan. Causing someone to lose face publicly is one of the worst social offenses. Many Japanese social customs exist specifically to preserve everyone's face."},

    {type:"teach", trg:"目(め)", src:"eye", pos:"noun", gender:null,
     note:"Kanji: 目. One of the simplest body part kanji.",
     example:"目(め)がかゆいです。",
     exampleSrc:"My eyes are itchy.",
     funFact:"目 is a pictograph of an eye turned sideways. Japanese anime eyes are famously large because manga pioneer Tezuka Osamu was inspired by Disney's Betty Boop. The large eye style became a trademark of Japanese animation."},

    {type:"teach", trg:"耳(みみ)", src:"ear", pos:"noun", gender:null,
     note:"Kanji: 耳. Also means 'edge/crust' of bread (パンの耳(みみ)).",
     example:"耳(みみ)が痛(いた)いです。",
     exampleSrc:"My ear hurts.",
     funFact:"The kanji 耳 is a pictograph of an ear. An unusual usage: the crust or edge of bread is called パンの耳(みみ) (pan no mimi, bread's ears). Bread ears are sometimes sold cheaply at bakeries."},

    {type:"teach", trg:"鼻(はな)", src:"nose", pos:"noun", gender:null,
     note:"Kanji: 鼻. Same sound as 花(はな) (flower) but different kanji.",
     example:"鼻(はな)が詰(つ)まっています。",
     exampleSrc:"My nose is stuffed up.",
     funFact:"鼻(はな) (nose) and 花(はな) (flower) are homophones. Context makes the difference clear. In Japanese culture, a high nose (鼻(はな)が高(たか)い) means 'proud,' because Westerners' higher nose bridges were associated with confidence."},

    {type:"teach", trg:"口(くち)", src:"mouth", pos:"noun", gender:null,
     note:"Kanji: 口. One of the most basic kanji. Also means 'opening/entrance.'",
     example:"口(くち)を開(あ)けてください。",
     exampleSrc:"Please open your mouth.",
     funFact:"口 (kuchi/guchi/kou) appears in many words: 入口(いりぐち) (iriguchi, entrance), 出口(でぐち) (deguchi, exit), 人口(じんこう) (jinkou, population, literally 'human mouths'). The kanji is a simple square representing an open mouth."},

    {type:"teach", trg:"歯(は)", src:"tooth", pos:"noun", gender:null,
     note:"Kanji: 歯. Different from 葉(は) (leaf) and は (particle).",
     example:"歯(は)を磨(みが)きます。",
     exampleSrc:"I brush my teeth.",
     funFact:"Japanese dentistry emphasizes prevention. Most people visit the dentist 2-4 times a year for cleaning. In the past, ohaguro (teeth blackening with iron dye) was fashionable among nobles and married women."},

    {type:"teach", trg:"手(て)", src:"hand", pos:"noun", gender:null,
     note:"Kanji: 手. Appears in dozens of compound words.",
     example:"手(て)を洗(あら)いましょう。",
     exampleSrc:"Let's wash our hands.",
     funFact:"手 combines with many words: 手紙(てがみ) (tegami, letter), 上手(じょうず) (jouzu, skilled), 下手(へた) (heta, unskilled), 手伝(てつだ)う (tetsudau, to help). The hand is the most productive body part in Japanese word formation."},

    {type:"teach", trg:"指(ゆび)", src:"finger", pos:"noun", gender:null,
     note:"Kanji: 指. Also means 'toe' when combined: 足(あし)の指(ゆび).",
     example:"指(ゆび)を怪我(けが)しました。",
     exampleSrc:"I injured my finger.",
     funFact:"Japanese counts fingers differently. Thumb is 親指(おやゆび) (oyayubi, parent finger). Index finger is 人差(ひとさ)し指(ゆび) (hitosashi-yubi, person-pointing finger). This naming reveals cultural values about hierarchy and pointing."},

    {type:"teach", trg:"足(あし)", src:"leg / foot", pos:"noun", gender:null,
     note:"Kanji: 足. Covers both the entire leg and the foot.",
     example:"足(あし)が痛(いた)いです。",
     exampleSrc:"My leg/foot hurts.",
     funFact:"Japanese does not traditionally distinguish between 'leg' and 'foot' like English does. Both are 足(あし). If you need to specify, use 脚(あし) (leg specifically) vs 足(あし) (foot). But most people use 足 for both."},

    {type:"teach", trg:"お腹(なか)", src:"stomach / belly", pos:"noun", gender:null,
     note:"Polite form. Plain: 腹(はら). The seat of emotions in Japanese culture.",
     example:"お腹(なか)が空(す)きました。",
     exampleSrc:"I'm hungry. (My stomach is empty.)",
     funFact:"In Japanese culture, the stomach (腹(はら)) is where true feelings reside, not the heart. 腹(はら)を割(わ)る (open your belly) means 'speak honestly.' This is also why seppuku (ritual suicide) involves the abdomen, revealing one's true self."},

    {type:"teach", trg:"背中(せなか)", src:"back (body)", pos:"noun", gender:null,
     note:"Kanji: 背中. Back-height + middle.",
     example:"背中(せなか)がかゆいです。",
     exampleSrc:"My back is itchy.",
     funFact:"In Japanese culture, 背中(せなか)を見(み)せる (showing one's back) to children means leading by example. Parents and mentors demonstrate rather than lecture. 'Watch my back and learn' is a deep cultural teaching philosophy."},

    {type:"teach", trg:"肩(かた)", src:"shoulder", pos:"noun", gender:null,
     note:"Kanji: 肩. Shoulder stiffness (肩(かた)こり) is Japan's national ailment.",
     example:"肩(かた)がこっています。",
     exampleSrc:"My shoulders are stiff.",
     funFact:"肩(かた)こり (katakori, stiff shoulders) is so common in Japan it is practically a national condition. Massage chairs, hot spring baths, and shoulder patches are billion-yen industries dedicated to this one ailment."},

    {type:"mc", q:"What does お腹(なか) mean?",
     opts:["stomach/belly","back","chest","shoulder"], ans:"stomach/belly",
     hint:"The body part that gets empty when you are hungry."},

    {type:"fb", s:"{1}が痛(いた)いです。", a:"頭(あたま)",
     sSrc:"I have a headache.",
     opts:["頭(あたま)","お腹(なか)","足(あし)","肩(かた)"],
     hint:"The body part on top of your neck that contains your brain."},

    {type:"match", pairs:[
      {trg:"目(め)", src:"eye"},
      {trg:"耳(みみ)", src:"ear"},
      {trg:"鼻(はな)", src:"nose"},
      {trg:"口(くち)", src:"mouth"}
    ]},

    {type:"mc", q:"Which body part is used in the idiom for 'smart'?",
     opts:["頭(あたま) (head)","手(て) (hand)","目(め) (eye)","鼻(はな) (nose)"], ans:"頭(あたま) (head)",
     hint:"'Good ___' means intelligent in Japanese, just like in English."},

    {type:"fb", s:"{1}を洗(あら)いましょう。", a:"手(て)",
     sSrc:"Let's wash our hands.",
     opts:["手(て)","顔(かお)","歯(は)","足(あし)"],
     hint:"What you wash frequently for hygiene, especially before eating."},

    {type:"mc", q:"肩(かた)こり means:",
     opts:["stiff shoulders","headache","stomachache","backache"], ans:"stiff shoulders",
     hint:"Japan's most common physical complaint, treated with massage."},

    {type:"mc", q:"What does 指(ゆび) mean?",
     opts:["finger","wrist","elbow","knee"], ans:"finger",
     hint:"The five digits at the end of your hand used for gripping."}
  ]
};
export default BATCH4_L_1;
