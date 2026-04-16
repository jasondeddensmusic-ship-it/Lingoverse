// Batch 4 — Unit 04 Lesson 1: Sizes, Shapes & Materials
const BATCH4_L_1 = {
  id:"jav2_u04l_b4_1", title:"かたちとざいりょう", icon:"🔷", xp:15, board:true,
  steps:[
    {type:"intro", title:"かたちとざいりょう",
     desc:"Learn to describe objects by their size, shape, and material. These adjectives and nouns expand your descriptive vocabulary.",
     goals:["Describe sizes from small to large","Name basic shapes","Talk about what things are made of"]},

    {type:"teach", trg:"おおきい", src:"big / large", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 大きい. One of the first adjectives to learn.",
     example:"このいぬはおおきいですね。",
     exampleSrc:"This dog is big, isn't it?",
     funFact:"大 is one of the simplest kanji: a person with arms spread wide. The annual Gozan no Okuribi festival in Kyoto lights 大 on fire on a mountainside, visible across the entire city."},

    {type:"teach", trg:"ちいさい", src:"small / little", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 小さい. Opposite of おおきい.",
     example:"ちいさいかばんがほしいです。",
     exampleSrc:"I want a small bag.",
     funFact:"Japan excels at making small things. From bonsai trees to miniature electronics, the culture of 'small is beautiful' runs deep. The word chiisai embodies this aesthetic appreciation of the compact."},

    {type:"teach", trg:"ながい", src:"long", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 長い. Used for both length and duration.",
     example:"このかわはながいです。",
     exampleSrc:"This river is long.",
     funFact:"Nagai works for both physical length and time duration. Nagai hanashi (a long story), nagai natsu yasumi (a long summer vacation). The kanji 長 also means 'chief/leader,' as in 社長 (company president)."},

    {type:"teach", trg:"みじかい", src:"short (length)", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 短い. For length/duration. Height uses ひくい.",
     example:"やすみはみじかいです。",
     exampleSrc:"The vacation is short.",
     funFact:"Mijikai is only for length and time, never for height. A short person is 背が低い (se ga hikui), never 短い. This distinction trips up many learners."},

    {type:"teach", trg:"ふとい", src:"thick / fat", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 太い. For thickness of objects and body size.",
     example:"ふといえんぴつをつかっています。",
     exampleSrc:"I am using a thick pencil.",
     funFact:"The kanji 太 adds a dot to 大 (big), suggesting something that is big and then some. Calling someone futoi (fat) is rude in Japanese, just as in English. Use the polite ふくよか (plump, pleasant) instead."},

    {type:"teach", trg:"ほそい", src:"thin / slim", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 細い. Opposite of ふとい.",
     example:"ほそいみちをあるきました。",
     exampleSrc:"I walked along a narrow path.",
     funFact:"Hosoi can describe both thin objects and slim bodies. Unlike futoi, calling someone hosoi is usually a compliment in Japan. Japanese narrow alleyways (路地 roji) are described as hosoi michi."},

    {type:"teach", trg:"まるい", src:"round / circular", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 丸い. The most basic shape adjective.",
     example:"つきはまるいです。",
     exampleSrc:"The moon is round.",
     funFact:"丸 (maru) also means 'circle' as a noun. Japanese teachers mark correct answers with a circle (O) instead of a checkmark. Getting a maru means you got it right. Wrong answers get batsu (X)."},

    {type:"teach", trg:"しかくい", src:"square / rectangular", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 四角い. Four + corner + adjective ending.",
     example:"しかくいはこをください。",
     exampleSrc:"Please give me a square box.",
     funFact:"Shikaku literally means 'four corners.' Japanese watermelons are sometimes grown in square molds as novelty gifts. A square watermelon can cost over 10,000 yen."},

    {type:"teach", trg:"かるい", src:"light (weight)", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 軽い. Opposite of おもい.",
     example:"このかばんはかるいです。",
     exampleSrc:"This bag is light.",
     funFact:"Japanese manufacturers obsess over making products lighter. The pursuit of 軽さ (lightness) drives innovation in everything from laptops to umbrellas to cars (the kei-car class, 軽自動車)."},

    {type:"teach", trg:"おもい", src:"heavy", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 重い. Also means 'serious' for topics.",
     example:"このにもつはおもいです。",
     exampleSrc:"This luggage is heavy.",
     funFact:"Omoi has a double meaning: physically heavy and emotionally serious. 重い話 (omoi hanashi) means a heavy/serious conversation. This metaphor works the same way in English and Japanese."},

    {type:"teach", trg:"き", src:"wood / tree", pos:"noun", gender:null,
     note:"Kanji: 木. One of the simplest kanji, depicting a tree.",
     example:"このテーブルはきでできています。",
     exampleSrc:"This table is made of wood.",
     funFact:"木 is a pictograph of a tree. Two trees make 林 (hayashi, grove). Three trees make 森 (mori, forest). This kanji progression from one tree to a forest is a famous example of how kanji logic works."},

    {type:"teach", trg:"かわ", src:"leather", pos:"noun", gender:null,
     note:"Kanji: 革. Different from かわ meaning river (川).",
     example:"かわのくつをかいました。",
     exampleSrc:"I bought leather shoes.",
     funFact:"The kanji 革 shows an animal hide being stretched. Japanese leather craftsmanship is highly regarded. Brands from the Tochigi region produce some of the finest vegetable-tanned leather in the world."},

    {type:"teach", trg:"ガラス", src:"glass (material)", pos:"noun", gender:null,
     note:"From Dutch 'glas.' Another Dutch loanword in Japanese.",
     example:"ガラスのコップをわりました。",
     exampleSrc:"I broke a glass cup.",
     funFact:"Like ゴム (rubber), ガラス comes from Dutch, reflecting the Edo-period Dutch influence. Nagasaki's Dejima island was the sole Dutch trading post for 200 years. Dutch words for materials and science entered Japanese through this tiny island."},

    {type:"teach", trg:"プラスチック", src:"plastic", pos:"noun", gender:null,
     note:"From English 'plastic.' Japan is the world's second-largest plastic consumer per capita.",
     example:"プラスチックはかんきょうにわるいです。",
     exampleSrc:"Plastic is bad for the environment.",
     funFact:"Japan uses enormous amounts of plastic packaging but also has one of the world's best recycling systems. Sorting trash into 10+ categories is normal. Plastic bottle recycling rates exceed 85%."},

    {type:"mc", q:"What does まるい mean?",
     opts:["round","square","thin","thick"], ans:"round",
     hint:"The shape of a ball, a coin, or the full moon."},

    {type:"fb", s:"このかばんは{1}です。", a:"かるい",
     sSrc:"This bag is light.",
     opts:["かるい","おもい","おおきい","ながい"],
     hint:"The opposite of heavy, meaning not much weight."},

    {type:"match", pairs:[
      {trg:"ふとい", src:"thick"},
      {trg:"ほそい", src:"thin"},
      {trg:"ながい", src:"long"},
      {trg:"みじかい", src:"short (length)"}
    ]},

    {type:"mc", q:"ガラス comes from which language?",
     opts:["Dutch","English","Portuguese","German"], ans:"Dutch",
     hint:"The European nation that traded with Japan from Dejima island."},

    {type:"fb", s:"このテーブルは{1}でできています。", a:"き",
     sSrc:"This table is made of wood.",
     opts:["き","かわ","ガラス","プラスチック"],
     hint:"The natural material that comes from trees."},

    {type:"mc", q:"What is the opposite of おおきい?",
     opts:["ちいさい","ながい","おもい","ふとい"], ans:"ちいさい",
     hint:"Describes something that is small or little in size."},

    {type:"mc", q:"しかくい means:",
     opts:["square","round","triangle","oval"], ans:"square",
     hint:"A shape with four equal corners and straight sides."}
  ]
};
export default BATCH4_L_1;
