// Batch 6 – Unit 05 (A1.2 Food & Drink): Cooking & Kitchen
const BATCH6_L1 = {
  id:"jav2_u05l_b6_1", title:"料理(りょうり)", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"料理(りょうり)",
     desc:"Expand your food vocabulary with cooking verbs and kitchen items. Learn how to talk about preparing meals, which is central to Japanese home life and culture.",
     goals:["Name basic kitchen tools and actions","Use cooking verbs: 煮(に)る, 焼(や)く, 切(き)る","Describe simple cooking steps"]},

    {type:"teach", trg:"料理(りょうり)", src:"cooking / cuisine / dish", pos:"noun", gender:null,
     note:"Kanji: 料理. 料理(りょうり)する = to cook. 料理人(りょうりにん) = cook/chef.\n和食(わしょく) = Japanese cuisine.",
     example:"A: 料理(りょうり)は好(す)きですか？\nB: はい、日本料理(にほんりょうり)をよく作(つく)ります。",
     exampleSrc:"A: Do you like cooking?\nB: Yes, I often make Japanese food.",
     funFact:"料理(りょうり) combines 料 (materials) and 理 (manage/arrange). Japanese cuisine (和食(わしょく)) became a UNESCO Intangible Cultural Heritage in 2013. The philosophy centers on respecting ingredients and seasonal freshness."},

    {type:"teach", trg:"切(き)る", src:"to cut", pos:"verb", gender:null,
     note:"Group 1 verb. 野菜(やさい)を切(き)る = to cut vegetables.\nKanji: 切る. Also means to turn off (電気(でんき)を切(き)る).",
     example:"A: 玉(たま)ねぎを切(き)ってください。\nB: はい、薄(うす)く切(き)りますか？",
     exampleSrc:"A: Please cut the onions.\nB: Okay, shall I cut them thin?",
     funFact:"切(き)る has many meanings: cut (紙(かみ)を切(き)る), turn off (電気(でんき)を切(き)る), hang up (電話(でんわ)を切(き)る), run out of (ガソリンが切(き)れる). Japanese kitchen knives (包丁(ほうちょう)) from 堺(さかい) and 関(せき) are prized by chefs worldwide."},

    {type:"teach", trg:"焼(や)く", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"Group 1 verb. Dry heat cooking. 肉(にく)を焼(や)く = to grill meat.\nKanji: 焼く.",
     example:"A: 魚(さかな)を焼(や)きましょう。\nB: いいですね。塩焼(しおや)きですか？",
     exampleSrc:"A: Let us grill some fish.\nB: Sounds good. Salt-grilled?",
     funFact:"焼(や)く covers grilling, baking, roasting, and toasting. 焼(や)き肉(にく) (grilled meat), 焼(や)き魚(ざかな) (grilled fish), 焼(や)きそば (fried noodles), たこ焼(や)き (octopus balls), お好(この)み焼(や)き (savory pancake). Japan has a 焼(や)き dish for everything."},

    {type:"teach", trg:"煮(に)る", src:"to boil / to simmer / to stew", pos:"verb", gender:null,
     note:"Group 2 verb. Wet heat cooking. 煮物(にもの) = simmered dish.\nKanji: 煮る.",
     example:"A: 野菜(やさい)を煮(に)ています。\nB: いい匂(にお)いですね。",
     exampleSrc:"A: I am simmering vegetables.\nB: It smells good.",
     funFact:"煮物(にもの) (simmered dishes) are the heart of Japanese home cooking. 肉(にく)じゃが (meat and potatoes), おでん (winter hot pot), and かぼちゃの煮物(にもの) (simmered pumpkin) are comfort foods. Slow simmering in だし (broth) creates deep umami flavors."},

    {type:"teach", trg:"混(ま)ぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Group 2 verb. よく混(ま)ぜてください = please mix well.\nKanji: 混ぜる.",
     example:"A: 卵(たまご)をよく混(ま)ぜてください。\nB: はい、混(ま)ぜました。",
     exampleSrc:"A: Please mix the eggs well.\nB: Okay, I mixed them.",
     funFact:"混(ま)ぜる is essential for many Japanese dishes. 混(ま)ぜご飯(はん) is mixed rice with vegetables and seasonings. 納豆(なっとう) (fermented soybeans) must be thoroughly 混(ま)ぜる before eating. Some people stir it over 100 times for the ideal texture."},

    {type:"mc", q:"焼(や)く is used for which type of cooking?", opts:["Grilling, baking, or roasting","Boiling or simmering","Cutting or slicing","Mixing or stirring"], ans:"Grilling, baking, or roasting",
     hint:"This verb covers dry heat cooking methods."},

    {type:"teach", trg:"鍋(なべ)", src:"pot / pan / hot pot", pos:"noun", gender:null,
     note:"Kanji: 鍋. Also a dish name: 鍋料理(なべりょうり) = hot pot dish.\nフライパン = frying pan.",
     example:"A: 大(おお)きい鍋(なべ)でスープを作(つく)りましょう。\nB: いいですね。野菜(やさい)を入(い)れてください。",
     exampleSrc:"A: Let us make soup in a big pot.\nB: Sounds good. Please put in the vegetables.",
     funFact:"鍋(なべ) is both a cooking tool and a genre of food. In winter, families gather around a shared hot pot (鍋料理(なべりょうり)) on the table. Popular types: すき焼(や)き, しゃぶしゃぶ, キムチ鍋(なべ). The communal eating style strengthens family bonds."},

    {type:"teach", trg:"皿(さら)", src:"plate / dish", pos:"noun", gender:null,
     note:"Kanji: 皿. お皿(さら) = plate (polite). 大皿(おおざら) = large plate.\n皿洗(さらあら)い = dishwashing.",
     example:"A: お皿(さら)を出(だ)してください。\nB: 何枚(なんまい)いりますか？",
     exampleSrc:"A: Please take out the plates.\nB: How many do we need?",
     funFact:"Japanese plates (皿(さら)) come in endless shapes: round, square, leaf-shaped, boat-shaped. Unlike Western dining where matched sets are standard, Japanese table settings mix different plates to create visual harmony. The art of plating (盛(も)り付(つ)け) is taken very seriously."},

    {type:"teach", trg:"箸(はし)", src:"chopsticks", pos:"noun", gender:null,
     note:"Kanji: 箸. お箸(はし) = chopsticks (polite). 割(わり)箸(ばし) = disposable chopsticks.\nDifferent from 橋(はし) (bridge).",
     example:"A: お箸(はし)を使(つか)えますか？\nB: はい、少(すこ)し使(つか)えます。",
     exampleSrc:"A: Can you use chopsticks?\nB: Yes, I can use them a little.",
     funFact:"箸(はし) (chopsticks) is a homophone of 橋(はし) (bridge). There are strict chopstick etiquette rules in Japan: never stick them upright in rice (funeral ritual), never pass food chopstick-to-chopstick (another funeral association), and never point with them."},

    {type:"teach", trg:"味(あじ)", src:"taste / flavor", pos:"noun", gender:null,
     note:"Kanji: 味. 味(あじ)を見(み)る = to taste/check flavor.\n味付(あじつ)け = seasoning.",
     example:"A: このスープの味(あじ)はどうですか？\nB: おいしいです！ちょうどいい味(あじ)です。",
     exampleSrc:"A: How is the taste of this soup?\nB: Delicious! The flavor is just right.",
     funFact:"Japan recognizes five basic tastes: 甘(あま)い (sweet), 辛(から)い (spicy), 塩辛(しおから)い (salty), 酸(す)っぱい (sour), and うまみ (umami/savory). Umami was discovered by Japanese chemist 池田菊苗(いけだきくなえ) in 1908, adding a fifth taste to the worldwide culinary vocabulary."},

    {type:"teach", trg:"熱(あつ)い", src:"hot (temperature)", pos:"adj", gender:null,
     note:"I-adjective. 熱(あつ)いお茶(ちゃ) = hot tea. 熱(あつ)い！= It is hot!\nKanji: 熱い (for objects), 暑い (for weather).",
     example:"A: スープが熱(あつ)いですよ。気(き)をつけてください。\nB: ありがとう。少(すこ)し冷(さ)ましてから食(た)べます。",
     exampleSrc:"A: The soup is hot. Please be careful.\nB: Thank you. I will let it cool a little before eating.",
     funFact:"Japanese has two 熱(あつ)い: 熱(あつ)い for hot objects/liquids and 暑(あつ)い for hot weather. They sound identical but use different kanji. A third homophone, 厚(あつ)い, means thick. Context always makes the meaning clear."},

    {type:"fb", s:"野菜(やさい)を{1}てください。\n(Please cut the vegetables.)", a:"切(き)っ", opts:["切(き)っ","焼(や)い","煮(に)","混(ま)ぜ"], sSrc:"Please cut the vegetables.",
     hint:"The て-form of 切(き)る (to cut). The stem 切(き)り becomes 切(き)って."},

    {type:"teach", trg:"薄(うす)い", src:"thin / light (color, flavor)", pos:"adj", gender:null,
     note:"I-adjective. Opposite of 厚(あつ)い (thick) or 濃(こ)い (concentrated).\n薄(うす)く切(き)る = to slice thin.",
     example:"A: 薄(うす)く切(き)ってください。\nB: はい、このくらいでいいですか？",
     exampleSrc:"A: Please cut it thin.\nB: Okay, is this thickness alright?",
     funFact:"薄(うす)い pairs with 濃(こ)い (thick/concentrated) for flavors: 薄(うす)い味(あじ) (light flavor), 濃(こ)い味(あじ) (rich flavor). Kansai region (Osaka/Kyoto) cuisine is known for 薄味(うすあじ) (light seasoning), while Kanto (Tokyo) tends toward 濃(こ)い味(あじ). This difference sparks friendly regional rivalry."},

    {type:"mc", q:"What does 鍋(なべ) mean?", opts:["Pot or hot pot dish","Plate or dish","Chopsticks","Knife"], ans:"Pot or hot pot dish",
     hint:"This word is both a cooking vessel and a type of communal meal."},

    {type:"match", pairs:[
      {trg:"切(き)る", src:"to cut"},
      {trg:"焼(や)く", src:"to grill"},
      {trg:"煮(に)る", src:"to simmer"},
      {trg:"混(ま)ぜる", src:"to mix"},
      {trg:"味(あじ)", src:"taste / flavor"}
    ]},

    {type:"fb", s:"スープが{1}ですよ。気(き)をつけて。\n(The soup is hot. Be careful.)", a:"熱(あつ)い", opts:["熱(あつ)い","冷(つめ)たい","薄(うす)い","辛(から)い"], sSrc:"The soup is hot. Be careful.",
     hint:"This i-adjective describes high temperature of objects and liquids."},

    {type:"mc", q:"The opposite of 薄(うす)い (thin/light) in terms of flavor is:", opts:["濃(こ)い (thick/rich)","甘(あま)い (sweet)","苦(にが)い (bitter)","酸(す)っぱい (sour)"], ans:"濃(こ)い (thick/rich)",
     hint:"This adjective describes a strong, concentrated flavor."}
  ]
};
export default BATCH6_L1;
