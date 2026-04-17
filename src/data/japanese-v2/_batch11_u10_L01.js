// Batch 11 – Unit 10 (A1.3 Weather & Seasons): Nature & Environment Basics
const BATCH11_L1 = {
  id:"jav2_u10l_b11_1", title:"自然(しぜん)", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然(しぜん)",
     desc:"Learn essential nature vocabulary to describe the natural world around you. These words connect to weather, seasons, and Japanese cultural appreciation of nature.",
     goals:["Name common natural features and phenomena","Describe nature using basic adjectives","Connect nature words to seasonal vocabulary"]},

    {type:"teach", trg:"自然(しぜん)", src:"nature", pos:"noun", gender:null,
     note:"自然(しぜん)が豊(ゆた)かな = rich in nature.\n自然(しぜん)に = naturally.",
     example:"A: 日本(にほん)は自然(しぜん)が豊(ゆた)かですね。\nB: はい、山(やま)も海(うみ)もきれいです。",
     exampleSrc:"A: Japan is rich in nature.\nB: Yes, both the mountains and sea are beautiful.",
     funFact:"Japan's relationship with nature (自然(しぜん)) is central to its culture. From cherry blossom viewing (花見(はなみ)) to autumn leaf viewing (紅葉狩(もみじが)り), the Japanese calendar revolves around appreciating seasonal nature. The concept of わびさび (wabi-sabi) finds beauty in nature's imperfections."},

    {type:"teach", trg:"山(やま)", src:"mountain", pos:"noun", gender:null,
     note:"山登(やまのぼ)り = mountain climbing.\nJapan is 73% mountainous.",
     example:"A: あの山(やま)はなんですか？\nB: 富士山(ふじさん)です。日本(にほん)で一番(いちばん)高(たか)い山(やま)です。",
     exampleSrc:"A: What is that mountain?\nB: It is Mt. Fuji. The tallest mountain in Japan.",
     funFact:"Japan has over 100 active volcanoes and mountains cover 73% of the country. 富士山(ふじさん) (Mt. Fuji, 3,776m) is a UNESCO World Heritage site and a sacred symbol. The climbing season is only July and August. Over 300,000 people climb it annually."},

    {type:"teach", trg:"川(かわ)", src:"river", pos:"noun", gender:null,
     note:"Large rivers: 大河(おおかわ). Small streams: 小川(おがわ).\n川(かわ)の流(なが)れ = river flow.",
     example:"A: この川(かわ)はきれいですね。\nB: はい、魚(さかな)がたくさんいます。",
     exampleSrc:"A: This river is clean.\nB: Yes, there are many fish.",
     funFact:"Japanese rivers are generally short and swift due to the mountainous terrain. The longest river, 信濃川(しなのがわ), is only 367 km. Many cities are named after rivers. Japanese summer traditions include 花火(はなび) (fireworks) displays over rivers and 川遊(かわあそ)び (river play) for children."},

    {type:"teach", trg:"海(うみ)", src:"sea / ocean", pos:"noun", gender:null,
     note:"海辺(うみべ) = seaside, beach. 海岸(かいがん) = coast.\nJapan is surrounded by sea on all sides.",
     example:"A: 夏(なつ)は海(うみ)に行(い)きますか？\nB: はい、沖縄(おきなわ)の海(うみ)が大好(だいす)きです。",
     exampleSrc:"A: Do you go to the sea in summer?\nB: Yes, I love Okinawa's sea.",
     funFact:"As an island nation, the sea (海(うみ)) is integral to Japanese identity. 海(うみ)の日(ひ) (Sea Day) in July is a national holiday. Japanese has specific words for different seas: 日本海(にほんかい) (Sea of Japan), 太平洋(たいへいよう) (Pacific Ocean). Seafood is central to the cuisine."},

    {type:"teach", trg:"空(そら)", src:"sky", pos:"noun", gender:null,
     note:"青空(あおぞら) = blue sky. 星空(ほしぞら) = starry sky.\n空色(そらいろ) = sky blue (color).",
     example:"A: 今日(きょう)の空(そら)はきれいですね。\nB: 雲(くも)一(ひと)つないですね。",
     exampleSrc:"A: The sky is beautiful today.\nB: Not a single cloud.",
     funFact:"空(そら) (空) shares its kanji with から (empty), reflecting the Buddhist concept that the sky is emptiness (空虚(くうきょ)). Airports are 空港(くうこう) (sky port). The word carries poetic weight in Japanese literature and music, representing freedom and infinite possibility."},

    {type:"teach", trg:"森(もり)", src:"forest", pos:"noun", gender:null,
     note:"Larger than 林(はやし) (grove/woods).\n森(もり)の中(なか) = inside the forest.",
     example:"A: この森(もり)には動物(どうぶつ)がいますか？\nB: 鹿(しか)や狸(たぬき)がいますよ。",
     exampleSrc:"A: Are there animals in this forest?\nB: There are deer and raccoon dogs.",
     funFact:"Forests cover 67% of Japan, one of the highest ratios among developed nations. 森林浴(しんりんよく) (forest bathing) is a Japanese health practice of walking slowly through forests to reduce stress. It has been scientifically shown to lower blood pressure and boost immune function."},

    {type:"teach", trg:"花(はな)", src:"flower", pos:"noun", gender:null,
     note:"お花見(はなみ) = flower viewing (cherry blossoms).\n花火(はなび) = fireworks (literally: fire flowers).",
     example:"A: 春(はる)にはたくさんの花(はな)が咲(さ)きます。\nB: 桜(さくら)が一番(いちばん)好(す)きです。",
     exampleSrc:"A: Many flowers bloom in spring.\nB: I like cherry blossoms the most.",
     funFact:"花(はな) (花) is deeply symbolic in Japanese culture. Each month has its representative flower, and the art of flower arrangement (生(い)け花(ばな)) is a traditional art form. 桜(さくら) (cherry blossoms) are beloved for their fleeting beauty, embodying the concept of はかなさ (impermanence)."},

    {type:"teach", trg:"木(き)", src:"tree", pos:"noun", gender:null,
     note:"大(おお)きな木(き) = big tree. 木(き)の下(した) = under a tree.\n木曜日(もくようび) = Thursday (tree day).",
     example:"A: この木(き)はなんの木(き)ですか？\nB: 松(まつ)の木(き)です。二百年(にひゃくねん)以上(いじょう)です。",
     exampleSrc:"A: What kind of tree is this?\nB: It is a pine tree. Over 200 years old.",
     funFact:"木(き) (木) is one of the simplest and most ancient kanji, derived from a pictograph of a tree. Two trees make 林(はやし) (grove), three make 森(もり) (forest). 木曜日(もくようび) (Thursday) is literally 'tree day,' named after the Wood element in the Chinese five elements system."},

    {type:"teach", trg:"石(いし)", src:"stone / rock", pos:"noun", gender:null,
     note:"石橋(いしばし) = stone bridge. 宝石(ほうせき) = gemstone.\nJapanese gardens use stones symbolically.",
     example:"A: この庭(にわ)の石(いし)はきれいですね。\nB: 京都(きょうと)からもってきた石(いし)です。",
     exampleSrc:"A: The stones in this garden are beautiful.\nB: They are stones brought from Kyoto.",
     funFact:"Stone arrangement is a core element of Japanese garden design. 枯山水(かれさんすい) (dry landscape gardens, like Ryoanji in Kyoto) use stones and raked gravel to represent water and mountains without a single drop of water. The placement of each stone follows strict aesthetic principles."},

    {type:"teach", trg:"星(ほし)", src:"star", pos:"noun", gender:null,
     note:"星空(ほしぞら) = starry sky. 一番星(いちばんぼし) = the first star of evening.\nたなばたの星(ほし) = Tanabata stars.",
     example:"A: 星(ほし)がきれいですね。\nB: 田舎(いなか)だからよく見(み)えますね。",
     exampleSrc:"A: The stars are beautiful.\nB: Because we are in the countryside, we can see them well.",
     funFact:"星(ほし) (星) plays a central role in Tanabata (July 7th), where Orihime (Vega) and Hikoboshi (Altair) are the star-crossed lovers. Japanese children learn to find the Milky Way (天(あま)の川(がわ)) on Tanabata night. The character 星 combines 日 (sun) and 生 (life/born)."},

    {type:"teach", trg:"月(つき)", src:"moon", pos:"noun", gender:null,
     note:"Also means 'month.' お月見(つきみ) = moon viewing.\n満月(まんげつ) = full moon.",
     example:"A: 今夜(こんや)は満月(まんげつ)ですね。\nB: お月見(つきみ)だんごを作(つく)りましょう。",
     exampleSrc:"A: Tonight is a full moon.\nB: Let's make moon-viewing dumplings.",
     funFact:"月(つき) (月) doubles as 'moon' and 'month' because the old Japanese calendar was lunar. お月見(つきみ) (moon viewing) in September is a beloved tradition with special dumplings (月見(つきみ)団子(だんご)) and pampas grass decorations. Japanese tradition sees a rabbit making mochi in the moon, not a man's face."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の面積(めんせき)の何(なん)パーセントが山(やま)ですか？",
     opts:["About 73%","About 50%","About 30%","About 90%"],
     ans:"About 73%",
     hint:"Japan is a very mountainous country. Most of the population lives on a small portion of flat land along the coasts."},

    {type:"fb", s:"春(はる)にはたくさんの{1}が咲(さ)きます。",
     a:["花(はな)"],
     opts:["花(はな)","木(き)","星(ほし)","石(いし)"],
     hint:"In spring, these beautiful natural things bloom. Think cherry blossoms.",
     sSrc:"Many flowers bloom in spring."},

    {type:"match", pairs:[
      {trg:"山(やま)", src:"mountain"},
      {trg:"川(かわ)", src:"river"},
      {trg:"海(うみ)", src:"sea"},
      {trg:"空(そら)", src:"sky"}
    ]},

    {type:"mc", q:"「森林浴(しんりんよく)」はなんですか？",
     opts:["Forest bathing (walking in forests for health)","Swimming in a forest lake","A type of Japanese bath","Planting trees for charity"],
     ans:"Forest bathing (walking in forests for health)",
     hint:"This Japanese h... practice involves slowly w... through f.... It has been scientifically proven to reduce stress."},

    {type:"fb", s:"今夜(こんや)は{1}ですね。お団子(だんご)を作(つく)りましょう。",
     a:["満月(まんげつ)"],
     opts:["満月(まんげつ)","星空(ほしぞら)","雨(あめ)","曇(くも)り"],
     hint:"The speaker sees a perfectly round, bright moon tonight and wants to make traditional viewing dumplings.",
     sSrc:"Tonight is a full moon. Let's make dumplings."},

    {type:"mc", q:"日本(にほん)の伝統(でんとう)では、月(つき)になにが見(み)えますか？",
     opts:["A rabbit making mochi","A man's face","A crab","A tree"],
     ans:"A rabbit making mochi",
     hint:"Japanese tradition sees a different figure in the moon than Western tradition does. It involves an animal and a traditional food."}
  ]
};
export default BATCH11_L1;
