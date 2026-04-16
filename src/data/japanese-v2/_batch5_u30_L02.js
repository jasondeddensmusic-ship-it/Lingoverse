// Unit 30 Batch 5 Lesson 2: にほんしそう (Japanese Thought & Aesthetics)
const BATCH5_L_2 = {
  id:"jav2_u30l_b5_2", title:"にほんしそう", icon:"🎋", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんしそう",
     desc:"Japan has unique philosophical and aesthetic concepts that shape its culture. Learn わびさび (wabi-sabi), もののあわれ (pathos of things), いき (chic refinement), and ま (negative space). These concepts are untranslatable but essential for understanding Japan at a deep level.",
     goals:["Understand key Japanese aesthetic concepts","Discuss Japanese philosophy in Japanese","Recognize how aesthetics shape Japanese culture"]},

    {type:"teach", trg:"わびさび", src:"beauty in imperfection and impermanence", pos:"noun", gender:null,
     note:"わび (rustic simplicity) + さび (patina/elegant aging).\nJapan's most famous aesthetic concept. Found in tea ceremony, pottery, gardens.",
     example:"A: このちゃわんにはわびさびのうつくしさがあります。\nB: かんぺきでないからこそうつくしいのですね。",
     exampleSrc:"A: This tea bowl has the beauty of wabi-sabi.\nB: It is beautiful precisely because it is imperfect.",
     funFact:"わびさび defies translation. わび originally meant loneliness and simplicity; さび meant 'rust' or 'aged patina.' Together they celebrate beauty found in imperfection, transience, and incompleteness. A cracked tea bowl repaired with gold (金継ぎ kintsugi), a moss-covered stone garden, autumn leaves about to fall: all express わびさび. It is the opposite of Western perfectionism."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / bittersweet beauty of impermanence", pos:"noun", gender:null,
     note:"もの (thing) + の + あわれ (pathos/deep emotion).\nCore aesthetic of Heian literature. Sensitivity to beauty and sadness.",
     example:"A: さくらのはなをみると、もののあわれをかんじます。\nB: うつくしいものはすぐちってしまうからですね。",
     exampleSrc:"A: When I see cherry blossoms, I feel the pathos of things.\nB: Because beautiful things fall/scatter so quickly.",
     funFact:"もののあわれ was articulated by Edo-era scholar Motoori Norinaga as the emotional core of Japanese literature. The Tale of Genji embodies it: beauty mixed with sadness, joy tinged with loss. Cherry blossoms (桜) are the perfect symbol: breathtakingly beautiful AND ephemeral. Japanese aesthetic appreciation always includes awareness that beauty is fleeting."},

    {type:"teach", trg:"いき", src:"chic refinement / stylish sophistication", pos:"noun", gender:null,
     note:"Kanji: 粋. いきなひと = a stylish, refined person.\nEdo-period aesthetic of urban sophistication.",
     example:"A: あのひとのふるまいはとてもいきですね。\nB: さりげないおしゃれがすてきです。",
     exampleSrc:"A: That person's behavior is very refined.\nB: Their understated elegance is wonderful.",
     funFact:"粋 is an Edo-period aesthetic ideal: sophisticated, understated, and effortlessly cool. An いき person knows when to speak and when to be silent, wears quality without showing off, and has worldly wisdom. The opposite is 野暮 (yabo, uncouth/tacky). いき influenced fashion, architecture, and social behavior. Modern Japanese still use いきだね (that is stylish/cool) as high praise."},

    {type:"teach", trg:"ま", src:"negative space / pause / interval", pos:"noun", gender:null,
     note:"Kanji: 間. The space between things. Applies to art, music, conversation, architecture.\nまがだいじ = the space/pause is important.",
     example:"A: にほんのけんちくでは「ま」がだいじにされています。\nB: なにもないくうかんにうつくしさがあるのですね。",
     exampleSrc:"A: In Japanese architecture, 'ma' (negative space) is valued.\nB: There is beauty in empty space.",
     funFact:"間 (ma) is the profound appreciation of emptiness. In music, the silence between notes. In architecture, the empty room (和室 washitsu). In conversation, the meaningful pause. In painting, the blank space (余白 yohaku). Western aesthetics fills space; Japanese aesthetics celebrates it. A comedian's ま (timing) is their most valued skill. ま is everywhere once you learn to see it."},

    {type:"mc", q:"わびさび celebrates:", opts:["Beauty in imperfection and transience","Perfect symmetry","Bright colors","Modern technology"], ans:"Beauty in imperfection and transience",
     hint:"This aesthetic finds b... in things that are imperfect, impermanent, and incomplete."},

    {type:"teach", trg:"むじょう", src:"impermanence / transience / mutability", pos:"noun", gender:null,
     note:"Kanji: 無常. Buddhist concept. All things change and pass.\nしょぎょうむじょう = all things are impermanent (Buddhist phrase).",
     example:"A: ぶっきょうではむじょうがちゅうしんてきなおしえです。\nB: へいけものがたりの「しょぎょうむじょう」はゆうめいですね。",
     exampleSrc:"A: In Buddhism, impermanence is a central teaching.\nB: The 'all things are impermanent' from the Tale of the Heike is famous.",
     funFact:"無常 uses 無 (nothing/without) and 常 (constant). The opening of the Heike Monogatari is Japan's most famous literary passage: 'The bell of the Gion temple echoes the impermanence of all things.' むじょう is not pessimism but acceptance: understanding that change is the nature of existence. It frees you from clinging to things that cannot last. This Buddhist concept deeply shapes Japanese aesthetics."},

    {type:"teach", trg:"びいしき", src:"aesthetic sense / sense of beauty", pos:"noun", gender:null,
     note:"Kanji: 美意識. び (beauty) + いしき (consciousness/awareness).\nにほんじんのびいしき = Japanese aesthetic sense.",
     example:"A: にほんじんのびいしきはしぜんとふかくむすびついています。\nB: しき (four seasons) のへんかをたいせつにするぶんかですね。",
     exampleSrc:"A: Japanese aesthetic sense is deeply connected to nature.\nB: It is a culture that treasures the changes of the four seasons.",
     funFact:"美意識 describes conscious aesthetic awareness. Japanese びいしき values: かんそ (simplicity), ちょうわ (harmony), しぜん (naturalness), ひかえめ (restraint). These principles manifest in food presentation (盛り付け), flower arrangement (生け花), garden design (庭園), and architecture. The concept suggests that aesthetic appreciation is not passive enjoyment but active, cultivated awareness."},

    {type:"teach", trg:"ちょうわ", src:"harmony / balance / accord", pos:"noun", gender:null,
     note:"Kanji: 調和. ちょうわする = to harmonize.\nしぜんとのちょうわ = harmony with nature.",
     example:"A: にほんぶんかではちょうわがおもんじられています。\nB: たいりつよりもきょうちょうをだいじにしますね。",
     exampleSrc:"A: Harmony is valued in Japanese culture.\nB: Cooperation is valued more than confrontation.",
     funFact:"調和 uses 調 (tune/adjust) and 和 (harmony/peace). The kanji 和 is also the character for Japan (大和 Yamato) and peace. Japanese culture's emphasis on ちょうわ manifests in architecture (building with nature, not against it), social behavior (avoiding conflict), and aesthetics (balanced composition). Prince Shotoku's 17-Article Constitution begins: 'Harmony is to be valued.'"},

    {type:"tip", title:"Key Japanese Aesthetic Concepts",
     text:"わびさび = beauty in imperfection\nもののあわれ = pathos of impermanence\nいき = chic refinement\nま = negative space/interval\nむじょう = impermanence (Buddhist)\nちょうわ = harmony/balance\nかんそ = simplicity\nようはく = blank space (in art)\n\nThese concepts are:\n- Untranslatable into single English words\n- Interconnected (impermanence enables wabi-sabi)\n- Still active in modern Japan\n- Tested on JLPT N1 reading passages\n- Essential for understanding Japanese art, architecture, and behavior"},

    {type:"teach", trg:"よはく", src:"blank space / margin / negative space (in art)", pos:"noun", gender:null,
     note:"Kanji: 余白. よ (surplus/extra) + はく (white/blank).\nUsed in painting, calligraphy, and design.",
     example:"A: このすいぼくがのよはくがうつくしいですね。\nB: えがかないぶぶんにもいみがあるのです。",
     exampleSrc:"A: The blank space in this ink painting is beautiful.\nB: The parts not painted also have meaning.",
     funFact:"余白 is the Japanese art of meaningful emptiness. In ink painting (水墨画), what is NOT painted is as important as what is. In calligraphy, the white space around characters shapes their beauty. In modern design, Japanese minimalism (ミニマリズム) draws directly from よはく aesthetics. Muji (無印良品) embodies this: simple design with abundant 余白."},

    {type:"fb", s:"さくらのはなをみると、{1}をかんじます。\n(When I see cherry blossoms, I feel the pathos of things.)", a:"もののあわれ", opts:["もののあわれ","わびさび","いき","ま"], sSrc:"When I see cherry blossoms, I feel the pathos of things.",
     hint:"The aesthetic concept of bittersweet beauty in impermanence, associated with Heian literature."},

    {type:"mc", q:"ま in Japanese aesthetics refers to:", opts:["Meaningful negative space, silence, and intervals","Bright decoration","Complex patterns","Loud sounds"], ans:"Meaningful negative space, silence, and intervals",
     hint:"This concept values the empty s... between things as much as the things themselves."},

    {type:"match", pairs:[{trg:"わびさび",src:"beauty in imperfection"},{trg:"もののあわれ",src:"pathos of impermanence"},{trg:"いき",src:"chic refinement"},{trg:"むじょう",src:"impermanence (Buddhist)"}]},

    {type:"fb", s:"にほんぶんかでは{1}がおもんじられています。\n(Harmony is valued in Japanese culture.)", a:"ちょうわ", opts:["ちょうわ","たいりつ","きょうそう","ぶんり"], sSrc:"Harmony is valued in Japanese culture.",
     hint:"The concept of balance and accord, using kanji for 'tune' and 'peace/Japan.'"},

    {type:"mc", q:"Prince Shotoku's constitution begins with:", opts:["Harmony is to be valued","Justice is supreme","The emperor is god","War is inevitable"], ans:"Harmony is to be valued",
     hint:"The first article emphasizes the core Japanese value of わ (h.../peace)."}
  ]
};
export default BATCH5_L_2;
