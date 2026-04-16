// Batch 6 – Unit 10 (A1.2 Weather & Seasons): Nature & Landscape
const BATCH6_L1 = {
  id:"jav2_u10l_b6_1", title:"しぜん", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜん",
     desc:"Expand your nature vocabulary with landscape features and natural phenomena. Japan's geography, from mountains to oceans, deeply shapes its culture and daily conversation.",
     goals:["Name natural features: mountains, rivers, oceans","Use descriptive adjectives for nature","Describe landscapes and natural beauty"]},

    {type:"teach", trg:"しぜん", src:"nature", pos:"noun", gender:null,
     note:"Kanji: 自然. しぜんのなかで = in nature.\nしぜんに = naturally.",
     example:"A: にほんはしぜんがうつくしいですね。\nB: そうですね。やまもうみもきれいです。",
     exampleSrc:"A: Japan's nature is beautiful, isn't it?\nB: Yes. Both mountains and the sea are beautiful.",
     funFact:"自然 combines 自 (self) and 然 (as it is). Japan's relationship with nature is central to its culture: haiku poetry captures seasonal moments, gardens recreate natural landscapes in miniature, and Shinto considers natural features as dwelling places of kami (spirits)."},

    {type:"teach", trg:"やま", src:"mountain", pos:"noun", gender:null,
     note:"Kanji: 山. ふじさん = Mt. Fuji.\nやまのぼり = mountain climbing.",
     example:"A: にほんでいちばんたかいやまはなんですか？\nB: ふじさんです。さんぜんななひゃくななじゅうろくメートルです。",
     exampleSrc:"A: What is the tallest mountain in Japan?\nB: Mt. Fuji. It is 3,776 meters.",
     funFact:"Japan is 73% mountains. The kanji 山 is one of the simplest, literally depicting three peaks. Mountain worship (山岳信仰) has deep roots. Many mountains are considered sacred. やまだ (mountain + rice field) is the most common Japanese family name."},

    {type:"teach", trg:"かわ", src:"river", pos:"noun", gender:null,
     note:"Kanji: 川. おおきいかわ = big river.\nかわあそび = playing in the river.",
     example:"A: このかわはきれいですね。\nB: はい、さかながたくさんいます。",
     exampleSrc:"A: This river is beautiful, isn't it?\nB: Yes, there are many fish.",
     funFact:"川 is another pictographic kanji showing flowing water between banks. Japan has many short, fast rivers due to its mountainous terrain. たなばた (Tanabata, Star Festival) celebrates lovers separated by the あまのがわ (Milky Way, literally 'heavenly river')."},

    {type:"teach", trg:"うみ", src:"sea / ocean", pos:"noun", gender:null,
     note:"Kanji: 海. うみべ = seaside/beach.\nにほんかい = Sea of Japan.",
     example:"A: なつはうみにいきますか？\nB: はい、まいとしおきなわにいきます。",
     exampleSrc:"A: Do you go to the sea in summer?\nB: Yes, I go to Okinawa every year.",
     funFact:"Japan is an island nation surrounded by sea on all sides. The word うみ carries emotional weight: songs, poems, and art celebrate the sea. うみびらき (ocean opening) is the official start of the swimming season each July. 海 combines 水 (water) and 毎 (every), suggesting the ever-present waters."},

    {type:"teach", trg:"そら", src:"sky", pos:"noun", gender:null,
     note:"Kanji: 空. あおいそら = blue sky.\nAlso means 'empty' (からの, 空の).",
     example:"A: きょうはそらがきれいですね。\nB: そうですね。くもがひとつもありません。",
     exampleSrc:"A: The sky is beautiful today, isn't it?\nB: Yes. There is not a single cloud.",
     funFact:"空 is a fascinating kanji meaning both 'sky' and 'empty.' Buddhist philosophy connects these: the sky is vast emptiness. This dual meaning appears in からて (karate, 'empty hand') and くうき (air, 'sky spirit'). The character for sky also reads くう in Buddhist contexts."},

    {type:"teach", trg:"もり", src:"forest", pos:"noun", gender:null,
     note:"Kanji: 森. Three trees stacked. もりのなか = inside the forest.\nDifferent from はやし (smaller woods).",
     example:"A: このもりはしずかですね。\nB: はい、とりのこえがきこえます。",
     exampleSrc:"A: This forest is quiet, isn't it?\nB: Yes, you can hear bird voices.",
     funFact:"The kanji 森 is three 木 (tree) characters stacked, perfectly depicting a dense forest. Compare with 林 (はやし, woods), which uses only two trees. The phrase もりのくまさん (Mr. Bear of the forest) is a beloved children's song. Studio Ghibli films often feature magical forests."},

    {type:"mc", q:"うみ means:", opts:["Sea / ocean","Mountain","River","Forest"], ans:"Sea / ocean",
     hint:"Japan is an island nation surrounded by this natural feature."},

    {type:"teach", trg:"ふかい", src:"deep", pos:"adj", gender:null,
     note:"I-adjective. ふかいうみ = deep sea.\nKanji: 深い. Opposite: あさい (shallow).",
     example:"A: このいけはふかいですか？\nB: はい、とてもふかいです。きをつけてください。",
     exampleSrc:"A: Is this pond deep?\nB: Yes, very deep. Please be careful.",
     funFact:"ふかい extends beyond physical depth to abstract meanings: ふかいかんがえ (deep thinking), ふかいきずな (deep bond), ふかいねむり (deep sleep). In Zen philosophy, ふかい understanding comes through meditation. The adjective pair ふかい/あさい mirrors English deep/shallow."},

    {type:"teach", trg:"あさい", src:"shallow", pos:"adj", gender:null,
     note:"I-adjective. あさいかわ = shallow river.\nKanji: 浅い. Opposite: ふかい (deep).",
     example:"A: ここはあさいからこどもでもあんぜんです。\nB: よかったです。あんしんしました。",
     exampleSrc:"A: It is shallow here, so it is safe even for children.\nB: That is good. I am relieved.",
     funFact:"あさい also works metaphorically: あさいねむり (light sleep), あさいしゅうかん (a shallow habit/not deeply ingrained). The famous Tokyo district 浅草 (あさくさ, Asakusa) uses this kanji in its name, referring to shallow grass plains that once existed there."},

    {type:"teach", trg:"ひろい", src:"wide / spacious", pos:"adj", gender:null,
     note:"I-adjective. ひろいこうえん = a spacious park.\nKanji: 広い. Opposite: せまい (narrow).",
     example:"A: このこうえんはひろいですね。\nB: そうですね。さんぽにいいです。",
     exampleSrc:"A: This park is spacious, isn't it?\nB: Yes. It is good for walks.",
     funFact:"ひろい describes both physical width and metaphorical breadth: ひろいこころ (broad mind), ひろいちしき (broad knowledge). The kanji 広 appears in こうこく (広告, advertisement, 'spreading widely') and ひろば (広場, plaza/square)."},

    {type:"teach", trg:"せまい", src:"narrow / cramped", pos:"adj", gender:null,
     note:"I-adjective. せまいみち = a narrow road.\nKanji: 狭い. Opposite: ひろい (wide).",
     example:"A: このへやはすこしせまいですね。\nB: そうですね。でもべんりなばしょです。",
     exampleSrc:"A: This room is a bit cramped, isn't it?\nB: Yes. But it is a convenient location.",
     funFact:"Japan's limited space makes せまい a frequently used word. Tokyo apartments are famously せまい. The expression うさぎごや (rabbit hutch) was infamously used by foreign media to describe small Japanese homes. But Japanese people have mastered living beautifully in compact spaces."},

    {type:"fb", s:"このかわは{1}ですか？\n(Is this river deep?)", a:"ふかい", opts:["ふかい","あさい","ひろい","せまい"], sSrc:"Is this river deep?",
     hint:"The opposite of あさい (shallow). Describes great depth."},

    {type:"teach", trg:"なげる", src:"to throw", pos:"verb", gender:null,
     note:"Group 2 verb. ボールをなげる = to throw a ball.\nKanji: 投げる.",
     example:"A: ボールをなげてください。\nB: はい、いきますよ！",
     exampleSrc:"A: Please throw the ball.\nB: Okay, here it comes!",
     funFact:"なげる (投げる) appears in many sports terms: とうきゅう (pitching), とうてき (throwing events in athletics). なげだす (throw out) means to abandon or give up. In sumo, なげ (throws) are winning techniques. The kanji 投 combines 手 (hand) and a throwing motion."},

    {type:"teach", trg:"ひろう", src:"to pick up", pos:"verb", gender:null,
     note:"Group 1 verb. ゴミをひろう = to pick up trash.\nKanji: 拾う.",
     example:"A: こうえんでゴミをひろいましょう。\nB: いいですね。きれいにしましょう。",
     exampleSrc:"A: Let us pick up trash in the park.\nB: Good idea. Let us clean it up.",
     funFact:"ひろう (拾う) is an important word in Japanese environmental consciousness. Community clean-ups (ゴミひろい) are common events. The word also means 'to find/pick up a taxi' (タクシーをひろう). いのちをひろう (to pick up one's life) means to have a narrow escape."},

    {type:"mc", q:"The pair ふかい / あさい means:", opts:["Deep / shallow","Wide / narrow","High / low","Long / short"], ans:"Deep / shallow",
     hint:"These adjectives describe depth, like water in a river or pool."},

    {type:"match", pairs:[
      {trg:"やま", src:"mountain"},
      {trg:"かわ", src:"river"},
      {trg:"もり", src:"forest"},
      {trg:"そら", src:"sky"},
      {trg:"うみ", src:"sea"}
    ]},

    {type:"fb", s:"このこうえんは{1}ですね。\n(This park is spacious, isn't it?)", a:"ひろい", opts:["ひろい","せまい","ふかい","たかい"], sSrc:"This park is spacious, isn't it?",
     hint:"The i-adjective meaning wide, spacious, or broad."},

    {type:"mc", q:"せまい describes:", opts:["Something narrow or cramped","Something wide or spacious","Something deep","Something tall"], ans:"Something narrow or cramped",
     hint:"This adjective is the opposite of ひろい."}
  ]
};
export default BATCH6_L1;
