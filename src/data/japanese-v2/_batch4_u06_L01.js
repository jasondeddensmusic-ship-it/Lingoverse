// Batch 4 — Unit 06 Lesson 1: Body Parts
const BATCH4_L_1 = {
  id:"jav2_u06l_b4_1", title:"からだ", icon:"🦵", xp:15, board:true,
  steps:[
    {type:"intro", title:"からだのぶぶん",
     desc:"Learn the names of body parts in Japanese. This vocabulary is essential for describing yourself, visiting a doctor, and understanding health conversations.",
     goals:["Name major body parts","Describe physical sensations","Use body part vocabulary in context"]},

    {type:"teach", trg:"からだ", src:"body", pos:"noun", gender:null,
     note:"Kanji: 体. The general word for the physical body.",
     example:"からだにきをつけてください。",
     exampleSrc:"Please take care of your body.",
     funFact:"体 has two readings: karada (body) and tai (physical). Tai appears in 体育 (taiiku, physical education), 体温 (taion, body temperature), and 体重 (taijuu, body weight)."},

    {type:"teach", trg:"あたま", src:"head", pos:"noun", gender:null,
     note:"Kanji: 頭. Also means 'brain/intelligence' in idioms.",
     example:"あたまがいたいです。",
     exampleSrc:"I have a headache.",
     funFact:"Atama ga ii (頭がいい) means 'smart/intelligent' (good head). Atama ga katai (頭が固い) means 'stubborn' (hard head). Japanese has many personality idioms using body parts."},

    {type:"teach", trg:"かお", src:"face", pos:"noun", gender:null,
     note:"Kanji: 顔. Used in many expressions about reputation and emotion.",
     example:"かおをあらいます。",
     exampleSrc:"I wash my face.",
     funFact:"'Losing face' (顔を潰す, kao wo tsubusu) is deeply important in Japan. Causing someone to lose face publicly is one of the worst social offenses. Many Japanese social customs exist specifically to preserve everyone's face."},

    {type:"teach", trg:"め", src:"eye", pos:"noun", gender:null,
     note:"Kanji: 目. One of the simplest body part kanji.",
     example:"めがかゆいです。",
     exampleSrc:"My eyes are itchy.",
     funFact:"目 is a pictograph of an eye turned sideways. Japanese anime eyes are famously large because manga pioneer Tezuka Osamu was inspired by Disney's Betty Boop. The large eye style became a trademark of Japanese animation."},

    {type:"teach", trg:"みみ", src:"ear", pos:"noun", gender:null,
     note:"Kanji: 耳. Also means 'edge/crust' of bread (パンの耳).",
     example:"みみがいたいです。",
     exampleSrc:"My ear hurts.",
     funFact:"The kanji 耳 is a pictograph of an ear. An unusual usage: the crust or edge of bread is called パンの耳 (pan no mimi, bread's ears). Bread ears are sometimes sold cheaply at bakeries."},

    {type:"teach", trg:"はな", src:"nose", pos:"noun", gender:null,
     note:"Kanji: 鼻. Same sound as はな (flower, 花) but different kanji.",
     example:"はながつまっています。",
     exampleSrc:"My nose is stuffed up.",
     funFact:"Hana (nose) and hana (flower) are homophones. Context makes the difference clear. In Japanese culture, a high nose (鼻が高い) means 'proud,' because Westerners' higher nose bridges were associated with confidence."},

    {type:"teach", trg:"くち", src:"mouth", pos:"noun", gender:null,
     note:"Kanji: 口. One of the most basic kanji. Also means 'opening/entrance.'",
     example:"くちをあけてください。",
     exampleSrc:"Please open your mouth.",
     funFact:"口 (kuchi/guchi/kou) appears in many words: 入口 (iriguchi, entrance), 出口 (deguchi, exit), 人口 (jinkou, population, literally 'human mouths'). The kanji is a simple square representing an open mouth."},

    {type:"teach", trg:"は", src:"tooth", pos:"noun", gender:null,
     note:"Kanji: 歯. Different from は (leaf, 葉) and は (particle).",
     example:"はをみがきます。",
     exampleSrc:"I brush my teeth.",
     funFact:"Japanese dentistry emphasizes prevention. Most people visit the dentist 2-4 times a year for cleaning. In the past, ohaguro (teeth blackening with iron dye) was fashionable among nobles and married women."},

    {type:"teach", trg:"て", src:"hand", pos:"noun", gender:null,
     note:"Kanji: 手. Appears in dozens of compound words.",
     example:"てをあらいましょう。",
     exampleSrc:"Let's wash our hands.",
     funFact:"手 combines with many words: 手紙 (tegami, letter), 上手 (jouzu, skilled), 下手 (heta, unskilled), 手伝う (tetsudau, to help). The hand is the most productive body part in Japanese word formation."},

    {type:"teach", trg:"ゆび", src:"finger", pos:"noun", gender:null,
     note:"Kanji: 指. Also means 'toe' when combined: あしのゆび.",
     example:"ゆびをけがしました。",
     exampleSrc:"I injured my finger.",
     funFact:"Japanese counts fingers differently. Thumb is 親指 (oyayubi, parent finger). Index finger is 人差し指 (hitosashi-yubi, person-pointing finger). This naming reveals cultural values about hierarchy and pointing."},

    {type:"teach", trg:"あし", src:"leg / foot", pos:"noun", gender:null,
     note:"Kanji: 足. Covers both the entire leg and the foot.",
     example:"あしがいたいです。",
     exampleSrc:"My leg/foot hurts.",
     funFact:"Japanese does not traditionally distinguish between 'leg' and 'foot' like English does. Both are あし. If you need to specify, use 脚 (ashi, leg specifically) vs 足 (ashi, foot). But most people use 足 for both."},

    {type:"teach", trg:"おなか", src:"stomach / belly", pos:"noun", gender:null,
     note:"Polite form. Plain: はら (腹). The seat of emotions in Japanese culture.",
     example:"おなかがすきました。",
     exampleSrc:"I'm hungry. (My stomach is empty.)",
     funFact:"In Japanese culture, the stomach (腹) is where true feelings reside, not the heart. Hara wo waru (open your belly) means 'speak honestly.' This is also why seppuku (ritual suicide) involves the abdomen, revealing one's true self."},

    {type:"teach", trg:"せなか", src:"back (body)", pos:"noun", gender:null,
     note:"Kanji: 背中. Back-height + middle.",
     example:"せなかがかゆいです。",
     exampleSrc:"My back is itchy.",
     funFact:"In Japanese culture, 背中を見せる (showing one's back) to children means leading by example. Parents and mentors demonstrate rather than lecture. 'Watch my back and learn' is a deep cultural teaching philosophy."},

    {type:"teach", trg:"かた", src:"shoulder", pos:"noun", gender:null,
     note:"Kanji: 肩. Shoulder stiffness (肩こり) is Japan's national ailment.",
     example:"かたがこっています。",
     exampleSrc:"My shoulders are stiff.",
     funFact:"肩こり (katakori, stiff shoulders) is so common in Japan it is practically a national condition. Massage chairs, hot spring baths, and shoulder patches are billion-yen industries dedicated to this one ailment."},

    {type:"mc", q:"What does おなか mean?",
     opts:["stomach/belly","back","chest","shoulder"], ans:"stomach/belly",
     hint:"The body part that gets empty when you are hungry."},

    {type:"fb", s:"{1}がいたいです。", a:"あたま",
     sSrc:"I have a headache.",
     opts:["あたま","おなか","あし","かた"],
     hint:"The body part on top of your neck that contains your brain."},

    {type:"match", pairs:[
      {trg:"め", src:"eye"},
      {trg:"みみ", src:"ear"},
      {trg:"はな", src:"nose"},
      {trg:"くち", src:"mouth"}
    ]},

    {type:"mc", q:"Which body part is used in the idiom for 'smart'?",
     opts:["あたま (head)","て (hand)","め (eye)","はな (nose)"], ans:"あたま (head)",
     hint:"'Good ___' means intelligent in Japanese, just like in English."},

    {type:"fb", s:"{1}をあらいましょう。", a:"て",
     sSrc:"Let's wash our hands.",
     opts:["て","かお","は","あし"],
     hint:"What you wash frequently for hygiene, especially before eating."},

    {type:"mc", q:"かたこり means:",
     opts:["stiff shoulders","headache","stomachache","backache"], ans:"stiff shoulders",
     hint:"Japan's most common physical complaint, treated with massage."},

    {type:"mc", q:"What does ゆび mean?",
     opts:["finger","wrist","elbow","knee"], ans:"finger",
     hint:"The five digits at the end of your hand used for gripping."}
  ]
};
export default BATCH4_L_1;
