// Batch 8 – Unit 05 (A1.2 Food): Kitchen & Cooking Vocabulary
const BATCH8_L1 = {
  id:"jav2_u05l_b8_1", title:"だいどころ", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"だいどころ",
     desc:"Learn vocabulary for the kitchen, cooking tools, and food preparation. Japanese home cooking has a rich vocabulary that goes beyond restaurant food.",
     goals:["Name kitchen utensils and appliances","Describe basic cooking actions","Talk about ingredients and preparation"]},

    {type:"teach", trg:"だいどころ", src:"kitchen", pos:"noun", gender:null,
     note:"Kanji: 台所. Also キッチン (loanword).\nだいどころにたつ = to stand in the kitchen (to cook).",
     example:"A: だいどころはどこですか？\nB: あちらです。ひろいですよ。",
     exampleSrc:"A: Where is the kitchen?\nB: Over there. It is spacious.",
     funFact:"だいどころ literally means 'place of the stand/counter.' Traditional Japanese kitchens had raised cooking areas. Modern apartments often say キッチン in listings. Japanese だいどころ are typically small by Western standards but extremely efficient in their layout."},

    {type:"teach", trg:"なべ", src:"pot / pan / hot pot", pos:"noun", gender:null,
     note:"Used for both cooking pots and the hot pot dish.\nなべりょうり = hot pot cooking.",
     example:"A: おおきいなべでスープをつくります。\nB: なんにんぶんですか？",
     exampleSrc:"A: I will make soup in a big pot.\nB: For how many people?",
     funFact:"なべ has double meaning: the cooking vessel and the communal hot pot dish. なべパーティー (nabe party) is a classic winter gathering where friends cook together from one なべ. Popular types include すきやき, しゃぶしゃぶ, and キムチなべ."},

    {type:"teach", trg:"ほうちょう", src:"kitchen knife", pos:"noun", gender:null,
     note:"Kanji: 包丁. ほうちょうできる = to cut with a kitchen knife.\nJapanese knives are world-famous.",
     example:"A: このほうちょうはよくきれます。\nB: にほんせいですか？",
     exampleSrc:"A: This knife cuts very well.\nB: Is it Japanese-made?",
     funFact:"Japanese ほうちょう are prized by chefs worldwide. Traditional types include さしみぼうちょう (sashimi knife, single-bevel) and でばぼうちょう (heavy cleaver for fish). The blade-making city of せき in Gifu has 800 years of sword-to-knife crafting history."},

    {type:"teach", trg:"まないた", src:"cutting board", pos:"noun", gender:null,
     note:"Kanji: 俎板. まないたにのせる = to place on the cutting board.\nWood or plastic types.",
     example:"A: やさいをまないたできってください。\nB: はい、ほうちょうはどこですか？",
     exampleSrc:"A: Please cut the vegetables on the cutting board.\nB: Okay, where is the knife?",
     funFact:"Traditional Japanese まないた are made from ひのき (cypress) wood, which has natural antibacterial properties. The phrase まないたのうえのこい (a carp on the cutting board) means someone who has accepted their fate and is at the mercy of others."},

    {type:"teach", trg:"おたま", src:"ladle", pos:"noun", gender:null,
     note:"Short for おたまじゃくし (tadpole), named for the shape.\nみそしるをおたまですくう = to scoop miso soup with a ladle.",
     example:"A: おたまでスープをもってください。\nB: はい、あついですからきをつけて。",
     exampleSrc:"A: Please serve the soup with the ladle.\nB: Okay, be careful because it is hot.",
     funFact:"おたま gets its name from おたまじゃくし (tadpole) because the round shape looks like a tadpole head. Interestingly, おたまじゃくし also means musical notes in informal Japanese, again because of the round-headed shape."},

    {type:"mc", q:"What does ほうちょう mean?", opts:["Kitchen knife","Ladle","Cutting board","Pot"], ans:"Kitchen knife",
     hint:"Japanese versions of this tool are prized by professional chefs worldwide."},

    {type:"teach", trg:"すいはんき", src:"rice cooker", pos:"noun", gender:null,
     note:"Kanji: 炊飯器. すいはん = cooking rice. き = machine.\nEvery Japanese home has one.",
     example:"A: すいはんきでごはんをたきます。\nB: なんごうたきますか？",
     exampleSrc:"A: I will cook rice in the rice cooker.\nB: How many cups will you cook?",
     funFact:"The すいはんき is arguably Japan's most important kitchen appliance. Japanese rice cookers are technological marvels with AI, pressure cooking, and induction heating. High-end models cost over 100,000 yen. Chinese and Korean tourists buy them as souvenirs."},

    {type:"teach", trg:"れいぞうこ", src:"refrigerator", pos:"noun", gender:null,
     note:"Kanji: 冷蔵庫. れいとうこ = freezer.\nれいぞうこにいれる = to put in the fridge.",
     example:"A: ぎゅうにゅうをれいぞうこにいれてください。\nB: もうはいっていますよ。",
     exampleSrc:"A: Please put the milk in the refrigerator.\nB: It is already in there.",
     funFact:"Japanese れいぞうこ are designed to be narrow and tall to fit Japanese apartments. Many have separate compartments for vegetables (やさいしつ), chilled items (チルドしつ), and ice makers. The れいとうこ (freezer) section is crucial for storing frozen foods and ice cream."},

    {type:"teach", trg:"でんしレンジ", src:"microwave oven", pos:"noun", gender:null,
     note:"でんし = electronic + レンジ = range/oven.\nチンする = to microwave (from the ding sound).",
     example:"A: おべんとうをでんしレンジであたためます。\nB: なんぷんですか？",
     exampleSrc:"A: I will heat the lunch box in the microwave.\nB: For how many minutes?",
     funFact:"Japanese people often say チンする instead of でんしレンジであたためる. チン mimics the ding sound the microwave makes when done. This is a classic example of onomatopoeia becoming a verb. Convenience stores have free でんしレンジ for heating purchases."},

    {type:"teach", trg:"にる", src:"to boil / to simmer / to stew", pos:"verb", gender:null,
     note:"にもの = simmered/stewed dish. にる is fundamental to Japanese cooking.\nよわびでにる = to simmer on low heat.",
     example:"A: やさいをにています。\nB: あとなんぷんくらいですか？",
     exampleSrc:"A: I am simmering the vegetables.\nB: About how many more minutes?",
     funFact:"にる is one of the essential Japanese cooking verbs. にもの (simmered dishes) like にくじゃが and かぼちゃのにもの are the heart of おふくろのあじ (mother's home cooking). The secret is ことこと (the gentle bubbling sound) over low heat for a long time."},

    {type:"teach", trg:"むす", src:"to steam", pos:"verb", gender:null,
     note:"むしもの = steamed dish. むしき = steamer.\nちゃわんむし = savory egg custard (steamed in a cup).",
     example:"A: さかなをむしてつくります。\nB: ヘルシーですね。",
     exampleSrc:"A: I will make the fish by steaming it.\nB: That is healthy.",
     funFact:"むす (steaming) is a cornerstone of Japanese cuisine. ちゃわんむし (steamed egg custard with shrimp and chicken) is a beloved side dish. むしパン (steamed bread) is a popular snack. Steaming preserves nutrients better than frying, aligning with Japanese health-conscious cooking."},

    {type:"fb", s:"ごはんを{1}でたきます。\n(I cook rice in the rice cooker.)", a:"すいはんき", opts:["すいはんき","でんしレンジ","れいぞうこ","なべ"], sSrc:"I cook rice in the rice cooker.",
     hint:"This essential Japanese kitchen appliance is specifically designed for cooking rice perfectly."},

    {type:"teach", trg:"いためる", src:"to stir-fry / to saute", pos:"verb", gender:null,
     note:"やさいいため = stir-fried vegetables.\nつよびでいためる = to stir-fry on high heat.",
     example:"A: たまねぎをいためてください。\nB: バターでいためますか？",
     exampleSrc:"A: Please stir-fry the onions.\nB: Shall I stir-fry them in butter?",
     funFact:"いためる is the go-to technique for quick Japanese home cooking. やさいいため (stir-fried vegetables) and チャーハン (fried rice) are いためもの classics. The Chinese wok technique influenced Japanese いためる cooking, but Japanese versions tend to use less oil."},

    {type:"teach", trg:"あげる", src:"to deep-fry", pos:"verb", gender:null,
     note:"Not to be confused with あげる (to give). Context makes it clear.\nあげもの = deep-fried food. てんぷら, とんかつ.",
     example:"A: とんかつをあげています。\nB: いいにおいですね！",
     exampleSrc:"A: I am deep-frying tonkatsu.\nB: It smells great!",
     funFact:"あげもの (deep-fried foods) are a major part of Japanese cuisine: てんぷら, とんかつ, からあげ, コロッケ. Despite the oil, these are considered everyday foods. Supermarket あげもの sections (おそうざい) are popular for busy families buying ready-made dinner sides."},

    {type:"match", pairs:[{trg:"にる",src:"to simmer/stew"},{trg:"むす",src:"to steam"},{trg:"いためる",src:"to stir-fry"},{trg:"あげる",src:"to deep-fry"},{trg:"やく",src:"to grill/bake"}],
     hint:"Match each cooking method with its English translation."},

    {type:"mc", q:"What does チンする mean?", opts:["To heat in the microwave","To boil water","To ring a bell","To chop vegetables"], ans:"To heat in the microwave",
     hint:"This casual verb comes from the sound a kitchen appliance makes when it finishes."},

    {type:"fb", s:"やさいを{1}ています。\n(I am simmering the vegetables.)", a:"に", opts:["に","むし","いため","あげ"], sSrc:"I am simmering the vegetables.",
     hint:"This cooking method involves cooking food slowly in liquid over low heat."},

    {type:"mc", q:"What is a まないた?", opts:["A cutting board","A rice cooker","A ladle","A microwave"], ans:"A cutting board",
     hint:"Traditional Japanese versions are made from cypress wood for its antibacterial properties."}
  ]
};
export default BATCH8_L1;
