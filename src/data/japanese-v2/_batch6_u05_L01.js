// Batch 6 – Unit 05 (A1.2 Food & Drink): Cooking & Kitchen
const BATCH6_L1 = {
  id:"jav2_u05l_b6_1", title:"りょうり", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"りょうり",
     desc:"Expand your food vocabulary with cooking verbs and kitchen items. Learn how to talk about preparing meals, which is central to Japanese home life and culture.",
     goals:["Name basic kitchen tools and actions","Use cooking verbs: にる, やく, きる","Describe simple cooking steps"]},

    {type:"teach", trg:"りょうり", src:"cooking / cuisine / dish", pos:"noun", gender:null,
     note:"Kanji: 料理. りょうりする = to cook. りょうりにん = cook/chef.\nわしょく = Japanese cuisine.",
     example:"A: りょうりはすきですか？\nB: はい、にほんりょうりをよくつくります。",
     exampleSrc:"A: Do you like cooking?\nB: Yes, I often make Japanese food.",
     funFact:"料理 combines 料 (materials) and 理 (manage/arrange). Japanese cuisine (和食, washoku) became a UNESCO Intangible Cultural Heritage in 2013. The philosophy centers on respecting ingredients and seasonal freshness."},

    {type:"teach", trg:"きる", src:"to cut", pos:"verb", gender:null,
     note:"Group 1 verb. やさいをきる = to cut vegetables.\nKanji: 切る. Also means to turn off (でんきをきる).",
     example:"A: たまねぎをきってください。\nB: はい、うすくきりますか？",
     exampleSrc:"A: Please cut the onions.\nB: Okay, shall I cut them thin?",
     funFact:"きる has many meanings: cut (紙を切る), turn off (電気を切る), hang up (電話を切る), run out of (ガソリンが切れる). Japanese kitchen knives (包丁, ほうちょう) from Sakai and Seki are prized by chefs worldwide."},

    {type:"teach", trg:"やく", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"Group 1 verb. Dry heat cooking. にくをやく = to grill meat.\nKanji: 焼く.",
     example:"A: さかなをやきましょう。\nB: いいですね。しおやきですか？",
     exampleSrc:"A: Let us grill some fish.\nB: Sounds good. Salt-grilled?",
     funFact:"やく covers grilling, baking, roasting, and toasting. やきにく (grilled meat), やきざかな (grilled fish), やきそば (fried noodles), たこやき (octopus balls), おこのみやき (savory pancake). Japan has a やき dish for everything."},

    {type:"teach", trg:"にる", src:"to boil / to simmer / to stew", pos:"verb", gender:null,
     note:"Group 2 verb. Wet heat cooking. にもの = simmered dish.\nKanji: 煮る.",
     example:"A: やさいをにています。\nB: いいにおいですね。",
     exampleSrc:"A: I am simmering vegetables.\nB: It smells good.",
     funFact:"にもの (simmered dishes) are the heart of Japanese home cooking. にくじゃが (meat and potatoes), おでん (winter hot pot), and かぼちゃのにもの (simmered pumpkin) are comfort foods. Slow simmering in だし (broth) creates deep umami flavors."},

    {type:"teach", trg:"まぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Group 2 verb. よくまぜてください = please mix well.\nKanji: 混ぜる.",
     example:"A: たまごをよくまぜてください。\nB: はい、まぜました。",
     exampleSrc:"A: Please mix the eggs well.\nB: Okay, I mixed them.",
     funFact:"まぜる is essential for many Japanese dishes. まぜごはん is mixed rice with vegetables and seasonings. なっとう (fermented soybeans) must be thoroughly まぜる before eating. Some people stir it over 100 times for the ideal texture."},

    {type:"mc", q:"やく is used for which type of cooking?", opts:["Grilling, baking, or roasting","Boiling or simmering","Cutting or slicing","Mixing or stirring"], ans:"Grilling, baking, or roasting",
     hint:"This verb covers dry heat cooking methods."},

    {type:"teach", trg:"なべ", src:"pot / pan / hot pot", pos:"noun", gender:null,
     note:"Kanji: 鍋. Also a dish name: なべりょうり = hot pot dish.\nフライパン = frying pan.",
     example:"A: おおきいなべでスープをつくりましょう。\nB: いいですね。やさいをいれてください。",
     exampleSrc:"A: Let us make soup in a big pot.\nB: Sounds good. Please put in the vegetables.",
     funFact:"なべ is both a cooking tool and a genre of food. In winter, families gather around a shared hot pot (なべりょうり) on the table. Popular types: すきやき, しゃぶしゃぶ, キムチなべ. The communal eating style strengthens family bonds."},

    {type:"teach", trg:"さら", src:"plate / dish", pos:"noun", gender:null,
     note:"Kanji: 皿. おさら = plate (polite). おおざら = large plate.\nさらあらい = dishwashing.",
     example:"A: おさらをだしてください。\nB: なんまいいりますか？",
     exampleSrc:"A: Please take out the plates.\nB: How many do we need?",
     funFact:"Japanese plates (皿) come in endless shapes: round, square, leaf-shaped, boat-shaped. Unlike Western dining where matched sets are standard, Japanese table settings mix different plates to create visual harmony. The art of plating (もりつけ) is taken very seriously."},

    {type:"teach", trg:"はし", src:"chopsticks", pos:"noun", gender:null,
     note:"Kanji: 箸. おはし = chopsticks (polite). わりばし = disposable chopsticks.\nDifferent from はし (bridge, 橋).",
     example:"A: おはしをつかえますか？\nB: はい、すこしつかえます。",
     exampleSrc:"A: Can you use chopsticks?\nB: Yes, I can use them a little.",
     funFact:"はし (chopsticks) is a homophone of はし (bridge). There are strict chopstick etiquette rules in Japan: never stick them upright in rice (funeral ritual), never pass food chopstick-to-chopstick (another funeral association), and never point with them."},

    {type:"teach", trg:"あじ", src:"taste / flavor", pos:"noun", gender:null,
     note:"Kanji: 味. あじをみる = to taste/check flavor.\nあじつけ = seasoning.",
     example:"A: このスープのあじはどうですか？\nB: おいしいです！ちょうどいいあじです。",
     exampleSrc:"A: How is the taste of this soup?\nB: Delicious! The flavor is just right.",
     funFact:"Japan recognizes five basic tastes: あまい (sweet), からい (spicy), しおからい (salty), すっぱい (sour), and うまみ (umami/savory). Umami was discovered by Japanese chemist Ikeda Kikunae in 1908, adding a fifth taste to the worldwide culinary vocabulary."},

    {type:"teach", trg:"あつい", src:"hot (temperature)", pos:"adj", gender:null,
     note:"I-adjective. あついおちゃ = hot tea. あつい！= It is hot!\nKanji: 熱い (for objects), 暑い (for weather).",
     example:"A: スープがあついですよ。きをつけてください。\nB: ありがとう。すこしさましてからたべます。",
     exampleSrc:"A: The soup is hot. Please be careful.\nB: Thank you. I will let it cool a little before eating.",
     funFact:"Japanese has two あつい: 熱い for hot objects/liquids and 暑い for hot weather. They sound identical but use different kanji. A third homophone, 厚い, means thick. Context always makes the meaning clear."},

    {type:"fb", s:"やさいを{1}てください。\n(Please cut the vegetables.)", a:"きっ", opts:["きっ","やい","に","まぜ"], sSrc:"Please cut the vegetables.",
     hint:"The て-form of きる (to cut). The stem きり becomes きって."},

    {type:"teach", trg:"うすい", src:"thin / light (color, flavor)", pos:"adj", gender:null,
     note:"I-adjective. Opposite of あつい (thick) or こい (concentrated).\nうすくきる = to slice thin.",
     example:"A: うすくきってください。\nB: はい、このくらいでいいですか？",
     exampleSrc:"A: Please cut it thin.\nB: Okay, is this thickness alright?",
     funFact:"うすい pairs with こい (thick/concentrated) for flavors: うすいあじ (light flavor), こいあじ (rich flavor). Kansai region (Osaka/Kyoto) cuisine is known for うすあじ (light seasoning), while Kanto (Tokyo) tends toward こいあじ. This difference sparks friendly regional rivalry."},

    {type:"mc", q:"What does なべ mean?", opts:["Pot or hot pot dish","Plate or dish","Chopsticks","Knife"], ans:"Pot or hot pot dish",
     hint:"This word is both a cooking vessel and a type of communal meal."},

    {type:"match", pairs:[
      {trg:"きる", src:"to cut"},
      {trg:"やく", src:"to grill"},
      {trg:"にる", src:"to simmer"},
      {trg:"まぜる", src:"to mix"},
      {trg:"あじ", src:"taste / flavor"}
    ]},

    {type:"fb", s:"スープが{1}ですよ。きをつけて。\n(The soup is hot. Be careful.)", a:"あつい", opts:["あつい","つめたい","うすい","からい"], sSrc:"The soup is hot. Be careful.",
     hint:"This i-adjective describes high temperature of objects and liquids."},

    {type:"mc", q:"The opposite of うすい (thin/light) in terms of flavor is:", opts:["こい (thick/rich)","あまい (sweet)","にがい (bitter)","すっぱい (sour)"], ans:"こい (thick/rich)",
     hint:"This adjective describes a strong, concentrated flavor."}
  ]
};
export default BATCH6_L1;
