// Batch 11 – Unit 10 (A1.3 Weather & Seasons): Nature & Environment Basics
const BATCH11_L1 = {
  id:"jav2_u10l_b11_1", title:"しぜん", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜん",
     desc:"Learn essential nature vocabulary to describe the natural world around you. These words connect to weather, seasons, and Japanese cultural appreciation of nature.",
     goals:["Name common natural features and phenomena","Describe nature using basic adjectives","Connect nature words to seasonal vocabulary"]},

    {type:"teach", trg:"しぜん", src:"nature", pos:"noun", gender:null,
     note:"しぜんがゆたかな = rich in nature.\nしぜんに = naturally.",
     example:"A: にほんはしぜんがゆたかですね。\nB: はい、やまもうみもきれいです。",
     exampleSrc:"A: Japan is rich in nature.\nB: Yes, both the mountains and sea are beautiful.",
     funFact:"Japan's relationship with nature (しぜん) is central to its culture. From cherry blossom viewing (花見) to autumn leaf viewing (紅葉狩り), the Japanese calendar revolves around appreciating seasonal nature. The concept of わびさび (wabi-sabi) finds beauty in nature's imperfections."},

    {type:"teach", trg:"やま", src:"mountain", pos:"noun", gender:null,
     note:"やまのぼり = mountain climbing.\nJapan is 73% mountainous.",
     example:"A: あのやまはなんですか？\nB: ふじさんです。にほんでいちばんたかいやまです。",
     exampleSrc:"A: What is that mountain?\nB: It is Mt. Fuji. The tallest mountain in Japan.",
     funFact:"Japan has over 100 active volcanoes and mountains cover 73% of the country. ふじさん (Mt. Fuji, 3,776m) is a UNESCO World Heritage site and a sacred symbol. The climbing season is only July and August. Over 300,000 people climb it annually."},

    {type:"teach", trg:"かわ", src:"river", pos:"noun", gender:null,
     note:"Large rivers: おおかわ. Small streams: おがわ.\nかわの ながれ = river flow.",
     example:"A: このかわはきれいですね。\nB: はい、さかながたくさんいます。",
     exampleSrc:"A: This river is clean.\nB: Yes, there are many fish.",
     funFact:"Japanese rivers are generally short and swift due to the mountainous terrain. The longest river, しなのがわ, is only 367 km. Many cities are named after rivers. Japanese summer traditions include はなび (fireworks) displays over rivers and かわあそび (river play) for children."},

    {type:"teach", trg:"うみ", src:"sea / ocean", pos:"noun", gender:null,
     note:"うみべ = seaside, beach. かいがん = coast.\nJapan is surrounded by sea on all sides.",
     example:"A: なつはうみにいきますか？\nB: はい、おきなわのうみがだいすきです。",
     exampleSrc:"A: Do you go to the sea in summer?\nB: Yes, I love Okinawa's sea.",
     funFact:"As an island nation, the sea (うみ) is integral to Japanese identity. うみのひ (Sea Day) in July is a national holiday. Japanese has specific words for different seas: にほんかい (Sea of Japan), たいへいよう (Pacific Ocean). Seafood is central to the cuisine."},

    {type:"teach", trg:"そら", src:"sky", pos:"noun", gender:null,
     note:"あおぞら = blue sky. ほしぞら = starry sky.\nそらいろ = sky blue (color).",
     example:"A: きょうのそらはきれいですね。\nB: くもひとつないですね。",
     exampleSrc:"A: The sky is beautiful today.\nB: Not a single cloud.",
     funFact:"そら (空) shares its kanji with から (empty), reflecting the Buddhist concept that the sky is emptiness (空虚). Airports are くうこう (sky port). The word carries poetic weight in Japanese literature and music, representing freedom and infinite possibility."},

    {type:"teach", trg:"もり", src:"forest", pos:"noun", gender:null,
     note:"Larger than はやし (grove/woods).\nもりのなか = inside the forest.",
     example:"A: このもりにはどうぶつがいますか？\nB: しかやたぬきがいますよ。",
     exampleSrc:"A: Are there animals in this forest?\nB: There are deer and raccoon dogs.",
     funFact:"Forests cover 67% of Japan, one of the highest ratios among developed nations. しんりんよく (forest bathing) is a Japanese health practice of walking slowly through forests to reduce stress. It has been scientifically shown to lower blood pressure and boost immune function."},

    {type:"teach", trg:"はな", src:"flower", pos:"noun", gender:null,
     note:"おはなみ = flower viewing (cherry blossoms).\nはなび = fireworks (literally: fire flowers).",
     example:"A: はるにはたくさんのはながさきます。\nB: さくらがいちばんすきです。",
     exampleSrc:"A: Many flowers bloom in spring.\nB: I like cherry blossoms the most.",
     funFact:"はな (花) is deeply symbolic in Japanese culture. Each month has its representative flower, and the art of flower arrangement (いけばな/生け花) is a traditional art form. さくら (cherry blossoms) are beloved for their fleeting beauty, embodying the concept of はかなさ (impermanence)."},

    {type:"teach", trg:"き", src:"tree", pos:"noun", gender:null,
     note:"おおきなき = big tree. きのした = under a tree.\nもくようび = Thursday (tree day).",
     example:"A: このきはなんのきですか？\nB: まつのきです。にひゃくねんいじょうです。",
     exampleSrc:"A: What kind of tree is this?\nB: It is a pine tree. Over 200 years old.",
     funFact:"き (木) is one of the simplest and most ancient kanji, derived from a pictograph of a tree. Two trees make はやし (林, grove), three make もり (森, forest). Thursday (木曜日) is literally 'tree day,' named after the Wood element in the Chinese five elements system."},

    {type:"teach", trg:"いし", src:"stone / rock", pos:"noun", gender:null,
     note:"いしばし = stone bridge. ほうせき = gemstone.\nJapanese gardens use stones symbolically.",
     example:"A: このにわのいしはきれいですね。\nB: きょうとからもってきたいしです。",
     exampleSrc:"A: The stones in this garden are beautiful.\nB: They are stones brought from Kyoto.",
     funFact:"Stone arrangement is a core element of Japanese garden design. かれさんすい (dry landscape gardens, like Ryoanji in Kyoto) use stones and raked gravel to represent water and mountains without a single drop of water. The placement of each stone follows strict aesthetic principles."},

    {type:"teach", trg:"ほし", src:"star", pos:"noun", gender:null,
     note:"ほしぞら = starry sky. いちばんぼし = the first star of evening.\nたなばたのほし = Tanabata stars.",
     example:"A: ほしがきれいですね。\nB: いなかだからよくみえますね。",
     exampleSrc:"A: The stars are beautiful.\nB: Because we are in the countryside, we can see them well.",
     funFact:"ほし (星) plays a central role in Tanabata (July 7th), where Orihime (Vega) and Hikoboshi (Altair) are the star-crossed lovers. Japanese children learn to find the Milky Way (あまのがわ) on Tanabata night. The character 星 combines 日 (sun) and 生 (life/born)."},

    {type:"teach", trg:"つき", src:"moon", pos:"noun", gender:null,
     note:"Also means 'month.' おつきみ = moon viewing.\nまんげつ = full moon.",
     example:"A: こんやはまんげつですね。\nB: おつきみだんごをつくりましょう。",
     exampleSrc:"A: Tonight is a full moon.\nB: Let's make moon-viewing dumplings.",
     funFact:"つき (月) doubles as 'moon' and 'month' because the old Japanese calendar was lunar. おつきみ (moon viewing) in September is a beloved tradition with special dumplings (月見団子) and pampas grass decorations. Japanese tradition sees a rabbit making mochi in the moon, not a man's face."},

    // Quiz steps
    {type:"mc", q:"にほんのめんせきのなんパーセントがやまですか？",
     opts:["About 73%","About 50%","About 30%","About 90%"],
     ans:"About 73%",
     hint:"Japan is a very mountainous country. Most of the population lives on a small portion of flat land along the coasts."},

    {type:"fb", s:"はるにはたくさんの{1}がさきます。",
     a:["はな"],
     opts:["はな","き","ほし","いし"],
     hint:"In spring, these beautiful natural things bloom. Think cherry blossoms.",
     sSrc:"Many flowers bloom in spring."},

    {type:"match", pairs:[
      {trg:"やま", src:"mountain"},
      {trg:"かわ", src:"river"},
      {trg:"うみ", src:"sea"},
      {trg:"そら", src:"sky"}
    ]},

    {type:"mc", q:"「しんりんよく」はなんですか？",
     opts:["Forest bathing (walking in forests for health)","Swimming in a forest lake","A type of Japanese bath","Planting trees for charity"],
     ans:"Forest bathing (walking in forests for health)",
     hint:"This Japanese h... practice involves slowly w... through f.... It has been scientifically proven to reduce stress."},

    {type:"fb", s:"こんやは{1}ですね。おだんごをつくりましょう。",
     a:["まんげつ"],
     opts:["まんげつ","ほしぞら","あめ","くもり"],
     hint:"The speaker sees a perfectly round, bright moon tonight and wants to make traditional viewing dumplings.",
     sSrc:"Tonight is a full moon. Let's make dumplings."},

    {type:"mc", q:"にほんのでんとうでは、つきになにがみえますか？",
     opts:["A rabbit making mochi","A man's face","A crab","A tree"],
     ans:"A rabbit making mochi",
     hint:"Japanese tradition sees a different figure in the moon than Western tradition does. It involves an animal and a traditional food."}
  ]
};
export default BATCH11_L1;
