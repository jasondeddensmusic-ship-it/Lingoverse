// Batch 4. Unit 04 Lesson 1: Sizes, Shapes & Materials
const BATCH4_L_1 = {
  id:"jav2_u04l_b4_1", title:"形(かたち)と材料(ざいりょう)", icon:"🔷", xp:15, board:true,
  steps:[
    {type:"intro", title:"形(かたち)と材料(ざいりょう)",
     desc:"Learn to describe objects by their size, shape, and material. These adjectives and nouns expand your descriptive vocabulary.",
     goals:["Describe sizes from small to large","Name basic shapes","Talk about what things are made of"]},

    {type:"teach", trg:"大(おお)きい", src:"big / large", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 大きい. One of the first adjectives to learn.",
     example:"この犬(いぬ)は大(おお)きいですね。",
     exampleSrc:"This dog is big, isn't it?",
     funFact:"大 is one of the simplest kanji: a person with arms spread wide. The annual Gozan no Okuribi festival in Kyoto lights 大 on fire on a mountainside, visible across the entire city."},

    {type:"teach", trg:"小(ちい)さい", src:"small / little", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 小さい. Opposite of 大(おお)きい.",
     example:"小(ちい)さい鞄(かばん)がほしいです。",
     exampleSrc:"I want a small bag.",
     funFact:"Japan excels at making small things. From bonsai trees to miniature electronics, the culture of 'small is beautiful' runs deep. The word chiisai embodies this aesthetic appreciation of the compact."},

    {type:"teach", trg:"長(なが)い", src:"long", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 長い. Used for both length and duration.",
     example:"この川(かわ)は長(なが)いです。",
     exampleSrc:"This river is long.",
     funFact:"Nagai works for both physical length and time duration. 長(なが)い話(はなし) (a long story), 長(なが)い夏(なつ)休(やす)み (a long summer vacation). The kanji 長 also means 'chief/leader,' as in 社長(しゃちょう) (company president)."},

    {type:"teach", trg:"短(みじか)い", src:"short (length)", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 短い. For length/duration. Height uses 低(ひく)い.",
     example:"休(やす)みは短(みじか)いです。",
     exampleSrc:"The vacation is short.",
     funFact:"Mijikai is only for length and time, never for height. A short person is 背(せ)が低(ひく)い (se ga hikui), never 短(みじか)い. This distinction trips up many learners."},

    {type:"teach", trg:"太(ふと)い", src:"thick / fat", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 太い. For thickness of objects and body size.",
     example:"太(ふと)い鉛筆(えんぴつ)を使(つか)っています。",
     exampleSrc:"I am using a thick pencil.",
     funFact:"The kanji 太 adds a dot to 大 (big), suggesting something that is big and then some. Calling someone futoi (fat) is rude in Japanese, just as in English. Use the polite 豊(ゆた)か (plump, pleasant) instead."},

    {type:"teach", trg:"細(ほそ)い", src:"thin / slim", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 細い. Opposite of 太(ふと)い.",
     example:"細(ほそ)い道(みち)を歩(ある)きました。",
     exampleSrc:"I walked along a narrow path.",
     funFact:"Hosoi can describe both thin objects and slim bodies. Unlike futoi, calling someone hosoi is usually a compliment in Japan. Japanese narrow alleyways (路地(ろじ) roji) are described as 細(ほそ)い道(みち)."},

    {type:"teach", trg:"丸(まる)い", src:"round / circular", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 丸い. The most basic shape adjective.",
     example:"月(つき)は丸(まる)いです。",
     exampleSrc:"The moon is round.",
     funFact:"丸 (maru) also means 'circle' as a noun. Japanese teachers mark correct answers with a circle (O) instead of a checkmark. Getting a maru means you got it right. Wrong answers get batsu (X)."},

    {type:"teach", trg:"四角(しかく)い", src:"square / rectangular", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 四角い. Four + corner + adjective ending.",
     example:"四角(しかく)い箱(はこ)をください。",
     exampleSrc:"Please give me a square box.",
     funFact:"Shikaku literally means 'four corners.' Japanese watermelons are sometimes grown in square molds as novelty gifts. A square watermelon can cost over 10,000 yen."},

    {type:"teach", trg:"軽(かる)い", src:"light (weight)", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 軽い. Opposite of 重(おも)い.",
     example:"この鞄(かばん)は軽(かる)いです。",
     exampleSrc:"This bag is light.",
     funFact:"Japanese manufacturers obsess over making products lighter. The pursuit of 軽(かる)さ (lightness) drives innovation in everything from laptops to umbrellas to cars (the kei-car class, 軽自動車(けいじどうしゃ))."},

    {type:"teach", trg:"重(おも)い", src:"heavy", pos:"adj", gender:null,
     note:"I-adjective. Kanji: 重い. Also means 'serious' for topics.",
     example:"この荷物(にもつ)は重(おも)いです。",
     exampleSrc:"This luggage is heavy.",
     funFact:"Omoi has a double meaning: physically heavy and emotionally serious. 重(おも)い話(はなし) (omoi hanashi) means a heavy/serious conversation. This metaphor works the same way in English and Japanese."},

    {type:"teach", trg:"木(き)", src:"wood / tree", pos:"noun", gender:null,
     note:"Kanji: 木. One of the simplest kanji, depicting a tree.",
     example:"このテーブルは木(き)でできています。",
     exampleSrc:"This table is made of wood.",
     funFact:"木 is a pictograph of a tree. Two trees make 林(はやし) (hayashi, grove). Three trees make 森(もり) (mori, forest). This kanji progression from one tree to a forest is a famous example of how kanji logic works."},

    {type:"teach", trg:"革(かわ)", src:"leather", pos:"noun", gender:null,
     note:"Kanji: 革. Different from 川(かわ) meaning river.",
     example:"革(かわ)の靴(くつ)を買(か)いました。",
     exampleSrc:"I bought leather shoes.",
     funFact:"The kanji 革 shows an animal hide being stretched. Japanese leather craftsmanship is highly regarded. Brands from the Tochigi region produce some of the finest vegetable-tanned leather in the world."},

    {type:"teach", trg:"ガラス", src:"glass (material)", pos:"noun", gender:null,
     note:"From Dutch 'glas.' Another Dutch loanword in Japanese.",
     example:"ガラスのコップを割(わ)りました。",
     exampleSrc:"I broke a glass cup.",
     funFact:"Like ゴム (rubber), ガラス comes from Dutch, reflecting the Edo-period Dutch influence. Nagasaki's Dejima island was the sole Dutch trading post for 200 years. Dutch words for materials and science entered Japanese through this tiny island."},

    {type:"teach", trg:"プラスチック", src:"plastic", pos:"noun", gender:null,
     note:"From English 'plastic.' Japan is the world's second-largest plastic consumer per capita.",
     example:"プラスチックは環境(かんきょう)に悪(わる)いです。",
     exampleSrc:"Plastic is bad for the environment.",
     funFact:"Japan uses enormous amounts of plastic packaging but also has one of the world's best recycling systems. Sorting trash into 10+ categories is normal. Plastic bottle recycling rates exceed 85%."},

    {type:"mc", q:"What does 丸(まる)い mean?",
     opts:["round","square","thin","thick"], ans:"round",
     hint:"The shape of a ball, a coin, or the full moon."},

    {type:"fb", s:"この鞄(かばん)は{1}です。", a:"軽(かる)い",
     sSrc:"This bag is light.",
     opts:["軽(かる)い","重(おも)い","大(おお)きい","長(なが)い"],
     hint:"The opposite of heavy, meaning not much weight."},

    {type:"match", pairs:[
      {trg:"太(ふと)い", src:"thick"},
      {trg:"細(ほそ)い", src:"thin"},
      {trg:"長(なが)い", src:"long"},
      {trg:"短(みじか)い", src:"short (length)"}
    ]},

    {type:"mc", q:"ガラス comes from which language?",
     opts:["German","Dutch","English","Portuguese"], ans:"Dutch",
     hint:"The European nation that traded with Japan from Dejima island."},

    {type:"fb", s:"このテーブルは{1}でできています。", a:"木(き)",
     sSrc:"This table is made of wood.",
     opts:["木(き)","革(かわ)","ガラス","プラスチック"],
     hint:"The natural material that comes from trees."},

    {type:"mc", q:"What is the opposite of 大(おお)きい?",
     opts:["重(おも)い","太(ふと)い","小(ちい)さい","長(なが)い"], ans:"小(ちい)さい",
     hint:"Describes something that is small or little in size."},

    {type:"mc", q:"四角(しかく)い means:",
     opts:["round","triangle","oval","square"], ans:"square",
     hint:"A shape with four equal corners and straight sides."}
  ,{type:"match",pairs:[{trg:"大(おお)きい",src:"big / large"},{trg:"丸(まる)い",src:"round / circular"},{trg:"四角(しかく)い",src:"square / rectangular"},{trg:"革(かわ)",src:"leather"},{trg:"ガラス",src:"glass (material)"},{trg:"プラスチック",src:"plastic"}]}]
};
export default BATCH4_L_1;
