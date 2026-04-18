// Batch 4 — Unit 10 Lesson 1: Nature & Animals
const BATCH4_L_1 = {
  id:"jav2_u10l_b4_1", title:"自然(しぜん)と動物(どうぶつ)", icon:"🦊", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然(しぜん)と動物(どうぶつ)",
     desc:"Learn the names of animals and nature vocabulary. Japan's unique wildlife and natural beauty have shaped its culture deeply.",
     goals:["Name common animals","Describe natural features","Talk about nature and outdoor activities"]},

    {type:"teach", trg:"動物(どうぶつ)", src:"animal", pos:"noun", gender:null,
     note:"Move + thing. Living things that move.",
     example:"動物園(どうぶつえん)に行(い)きましょう。",
     exampleSrc:"Let's go to the zoo.",
     funFact:"Japan has unique wildlife found nowhere else: the Japanese macaque (snow monkey), tanuki (raccoon dog), and giant salamander. The concept of 動物 includes all creatures that move, from insects to whales."},

    {type:"teach", trg:"犬(いぬ)", src:"dog", pos:"noun", gender:null,
     note:"One of the simplest kanji, depicting a dog.",
     example:"犬(いぬ)と散歩(さんぽ)に行(い)きます。",
     exampleSrc:"I go for a walk with the dog.",
     funFact:"Hachiko, the loyal Akita dog who waited at Shibuya Station for 9 years after his owner died, is Japan's most famous animal. His statue is a top meeting spot. Japan has many native dog breeds: Shiba Inu, Akita, Tosa, Kai."},

    {type:"teach", trg:"猫(ねこ)", src:"cat", pos:"noun", gender:null,
     note:"Japan's love of cats is legendary.",
     example:"この猫(ねこ)はかわいいですね。",
     exampleSrc:"This cat is cute, isn't it?",
     funFact:"Japan has cat cafes (猫カフェ), cat islands (田代島), and the beckoning cat (招き猫). The Japanese cat sound is 'nyaa' not 'meow.' Hello Kitty is the world's most valuable cat character, worth billions."},

    {type:"teach", trg:"鳥(とり)", src:"bird", pos:"noun", gender:null,
     note:"Also means chicken meat (鳥肉(とりにく)).",
     example:"庭(にわ)で鳥(とり)が鳴(な)いています。",
     exampleSrc:"Birds are singing in the garden.",
     funFact:"The crane (鶴 tsuru) is Japan's most sacred bird, symbolizing longevity and good fortune. Folding 1,000 paper cranes (千羽鶴 senbazuru) is believed to grant a wish. This tradition became a global peace symbol after Hiroshima."},

    {type:"teach", trg:"魚(さかな)", src:"fish", pos:"noun", gender:null,
     note:"Japan consumes more fish per capita than almost any country.",
     example:"海(うみ)で魚(さかな)を釣(つ)りました。",
     exampleSrc:"I caught fish in the sea.",
     funFact:"Tsukiji (now Toyosu) fish market in Tokyo is the world's largest. Japan consumes about 7 million tons of seafood annually. The first tuna auction of the year regularly makes headlines when a single fish sells for millions of yen."},

    {type:"teach", trg:"虫(むし)", src:"insect / bug", pos:"noun", gender:null,
     note:"General word for all insects and some small creatures.",
     example:"子供(こども)は虫(むし)が好(す)きです。",
     exampleSrc:"Children like insects.",
     funFact:"Japanese children actively collect insects as a hobby. Beetle collecting (カブトムシ) and cricket-keeping are traditional pastimes. Department stores sell live beetles in summer. This love of insects is uniquely Japanese."},

    {type:"teach", trg:"山(やま)", src:"mountain", pos:"noun", gender:null,
     note:"One of the first kanji children learn. A pictograph.",
     example:"あの山(やま)はきれいですね。",
     exampleSrc:"That mountain is beautiful, isn't it?",
     funFact:"Japan is 73% mountains. Mount Fuji (富士山, 3,776m) is the most iconic. The kanji 山 is a pictograph of three mountain peaks. Mountains are considered sacred in Shinto religion, home to gods and spirits."},

    {type:"teach", trg:"川(かわ)", src:"river", pos:"noun", gender:null,
     note:"A pictograph showing flowing water between banks.",
     example:"この川(かわ)はきれいです。",
     exampleSrc:"This river is clean.",
     funFact:"The kanji 川 is three vertical strokes representing flowing water. Japan's rivers are short and fast due to the mountainous terrain. The Shinano River (信濃川) at 367km is Japan's longest."},

    {type:"teach", trg:"海(うみ)", src:"sea / ocean", pos:"noun", gender:null,
     note:"Japan is surrounded by the sea on all sides.",
     example:"夏(なつ)に海(うみ)に行(い)きます。",
     exampleSrc:"I go to the sea in summer.",
     funFact:"Japan is an island nation with over 6,800 islands. No point in Japan is more than 150km from the sea. 海 appears in 海外(かいがい) (overseas/abroad), reflecting Japan's island perspective where everything else is 'across the sea.'"},

    {type:"teach", trg:"森(もり)", src:"forest", pos:"noun", gender:null,
     note:"Three trees stacked together. More dense than 林 (grove).",
     example:"森(もり)の中(なか)を歩(ある)きました。",
     exampleSrc:"I walked through the forest.",
     funFact:"Japan is one of the most forested nations (67% forest coverage). Yakushima island has ancient cedar forests featured in Studio Ghibli's Princess Mononoke. Forest bathing (森林浴 shinrin-yoku) is a Japanese wellness practice now popular globally."},

    {type:"teach", trg:"花(はな)", src:"flower", pos:"noun", gender:null,
     note:"Different kanji from 鼻(はな) (nose).",
     example:"桜(さくら)の花(はな)が咲(さ)きました。",
     exampleSrc:"Cherry blossom flowers have bloomed.",
     funFact:"花見(はなみ) (hanami, flower viewing) is Japan's most beloved spring tradition. Millions gather under cherry blossom trees to eat, drink, and enjoy the fleeting beauty. The transience of the blossoms symbolizes the Japanese concept of 物の哀れ (mono no aware)."},

    {type:"teach", trg:"空(そら)", src:"sky", pos:"noun", gender:null,
     note:"Also means 'empty' (からっぽ). Sky is the great emptiness above.",
     example:"今日(きょう)の空(そら)は青(あお)いです。",
     exampleSrc:"Today's sky is blue.",
     funFact:"空 means both 'sky' and 'empty.' In Buddhist philosophy, 空 (kuu) is the concept of emptiness/void, a fundamental principle. The same kanji connecting sky and emptiness reflects deep philosophical thinking."},

    {type:"teach", trg:"星(ほし)", src:"star", pos:"noun", gender:null,
     note:"Sun + life. Stars are living suns.",
     example:"夜(よる)の星(ほし)がきれいです。",
     exampleSrc:"The stars at night are beautiful.",
     funFact:"Tanabata (七夕, Star Festival) on July 7th celebrates the annual meeting of star-crossed lovers Orihime and Hikoboshi across the Milky Way. People write wishes on paper strips and hang them on bamboo branches."},

    {type:"mc", q:"What does 森(もり) mean?",
     opts:["forest","mountain","river","sea"], ans:"forest",
     hint:"The kanji shows three trees stacked together for a dense woodland."},

    {type:"fb", s:"{1}に行(い)きましょう。", a:"動物園(どうぶつえん)",
     sSrc:"Let's go to the zoo.",
     opts:["動物園(どうぶつえん)","海(うみ)","山(やま)","森(もり)"],
     hint:"A park where you can see many different animals from around the world."},

    {type:"match", pairs:[
      {trg:"犬(いぬ)", src:"dog"},
      {trg:"猫(ねこ)", src:"cat"},
      {trg:"鳥(とり)", src:"bird"},
      {trg:"魚(さかな)", src:"fish"}
    ]},

    {type:"mc", q:"What does 空 mean in addition to 'sky'?",
     opts:["empty","full","bright","dark"], ans:"empty",
     hint:"A Buddhist concept connecting the vast sky with the void."},

    {type:"fb", s:"夏(なつ)に{1}に行(い)きます。", a:"海(うみ)",
     sSrc:"I go to the sea in summer.",
     opts:["海(うみ)","山(やま)","森(もり)","川(かわ)"],
     hint:"The large body of salt water surrounding Japan's islands."},

    {type:"mc", q:"Tanabata celebrates:",
     opts:["star-crossed lovers meeting across the Milky Way","the New Year","cherry blossoms","autumn harvest"], ans:"star-crossed lovers meeting across the Milky Way",
     hint:"A July festival where people write wishes on paper strips."},

    {type:"mc", q:"虫(むし) means:",
     opts:["insect","fish","bird","snake"], ans:"insect",
     hint:"Japanese children famously love to collect these small creatures."}
  ,{type:"match",pairs:[{trg:"動物(どうぶつ)",src:"animal"},{trg:"虫(むし)",src:"insect / bug"},{trg:"山(やま)",src:"mountain"},{trg:"川(かわ)",src:"river"},{trg:"森(もり)",src:"forest"},{trg:"花(はな)",src:"flower"}]},{type:"match",pairs:[{trg:"空(そら)",src:"sky"},{trg:"星(ほし)",src:"star"}]}]
};
export default BATCH4_L_1;
