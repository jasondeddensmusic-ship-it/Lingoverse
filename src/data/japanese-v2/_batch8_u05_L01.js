// Batch 8 – Unit 05 (A1.2 Food): Kitchen & Cooking Vocabulary
const BATCH8_L1 = {
  id:"jav2_u05l_b8_1", title:"台所(だいどころ)", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"台所(だいどころ)",
     desc:"Learn vocabulary for the kitchen, cooking tools, and food preparation. Japanese home cooking has a rich vocabulary that goes beyond restaurant food.",
     goals:["Name kitchen utensils and appliances","Describe basic cooking actions","Talk about ingredients and preparation"]},

    {type:"teach", trg:"台所(だいどころ)", src:"kitchen", pos:"noun", gender:null,
     note:"Kanji: 台所. Also キッチン (loanword).\n台所(だいどころ)に立(た)つ = to stand in the kitchen (to cook).",
     example:"A: 台所(だいどころ)はどこですか？\nB: あちらです。広(ひろ)いですよ。",
     exampleSrc:"A: Where is the kitchen?\nB: Over there. It is spacious.",
     funFact:"台所(だいどころ) literally means 'place of the stand/counter.' Traditional Japanese kitchens had raised cooking areas. Modern apartments often say キッチン in listings. Japanese 台所(だいどころ) are typically small by Western standards but extremely efficient in their layout."},

    {type:"teach", trg:"鍋(なべ)", src:"pot / pan / hot pot", pos:"noun", gender:null,
     note:"Used for both cooking pots and the hot pot dish.\n鍋(なべ)料理(りょうり) = hot pot cooking.",
     example:"A: 大(おお)きい鍋(なべ)でスープを作(つく)ります。\nB: 何人(なんにん)分(ぶん)ですか？",
     exampleSrc:"A: I will make soup in a big pot.\nB: For how many people?",
     funFact:"鍋(なべ) has double meaning: the cooking vessel and the communal hot pot dish. 鍋(なべ)パーティー (nabe party) is a classic winter gathering where friends cook together from one 鍋(なべ). Popular types include すきやき、しゃぶしゃぶ、and キムチ鍋(なべ)."},

    {type:"teach", trg:"包丁(ほうちょう)", src:"kitchen knife", pos:"noun", gender:null,
     note:"Kanji: 包丁. 包丁(ほうちょう)で切(き)る = to cut with a kitchen knife.\nJapanese knives are world-famous.",
     example:"A: この包丁(ほうちょう)はよく切(き)れます。\nB: 日本(にほん)製(せい)ですか？",
     exampleSrc:"A: This knife cuts very well.\nB: Is it Japanese-made?",
     funFact:"Japanese 包丁(ほうちょう) are prized by chefs worldwide. Traditional types include 刺身(さしみ)包丁(ほうちょう) (sashimi knife, single-bevel) and 出刃(でば)包丁(ほうちょう) (heavy cleaver for fish). The blade-making city of 関(せき) in Gifu has 800 years of sword-to-knife crafting history."},

    {type:"teach", trg:"まないた", src:"cutting board", pos:"noun", gender:null,
     note:"Kanji: 俎板. まないたに乗(の)せる = to place on the cutting board.\nWood or plastic types.",
     example:"A: 野菜(やさい)をまないたで切(き)ってください。\nB: はい、包丁(ほうちょう)はどこですか？",
     exampleSrc:"A: Please cut the vegetables on the cutting board.\nB: Okay, where is the knife?",
     funFact:"Traditional Japanese まないた are made from 檜(ひのき) (cypress) wood, which has natural antibacterial properties. The phrase まないたの上(うえ)の鯉(こい) (a carp on the cutting board) means someone who has accepted their fate and is at the mercy of others."},

    {type:"teach", trg:"おたま", src:"ladle", pos:"noun", gender:null,
     note:"Short for おたまじゃくし (tadpole), named for the shape.\n味噌汁(みそしる)をおたまですくう = to scoop miso soup with a ladle.",
     example:"A: おたまでスープを持(も)ってください。\nB: はい、熱(あつ)いですから気(き)をつけて。",
     exampleSrc:"A: Please serve the soup with the ladle.\nB: Okay, be careful because it is hot.",
     funFact:"おたま gets its name from おたまじゃくし (tadpole) because the round shape looks like a tadpole head. Interestingly、おたまじゃくし also means musical notes in informal Japanese, again because of the round-headed shape."},

    {type:"mc", q:"What does 包丁(ほうちょう) mean?", opts:["Kitchen knife","Ladle","Cutting board","Pot"], ans:"Kitchen knife",
     hint:"Japanese versions of this tool are prized by professional chefs worldwide."},

    {type:"teach", trg:"炊飯器(すいはんき)", src:"rice cooker", pos:"noun", gender:null,
     note:"Kanji: 炊飯器. 炊飯(すいはん) = cooking rice. 器(き) = machine.\nEvery Japanese home has one.",
     example:"A: 炊飯器(すいはんき)でご飯(はん)を炊(た)きます。\nB: 何合(なんごう)炊(た)きますか？",
     exampleSrc:"A: I will cook rice in the rice cooker.\nB: How many cups will you cook?",
     funFact:"The 炊飯器(すいはんき) is arguably Japan's most important kitchen appliance. Japanese rice cookers are technological marvels with AI, pressure cooking, and induction heating. High-end models cost over 100,000 yen. Chinese and Korean tourists buy them as souvenirs."},

    {type:"teach", trg:"冷蔵庫(れいぞうこ)", src:"refrigerator", pos:"noun", gender:null,
     note:"Kanji: 冷蔵庫. 冷凍庫(れいとうこ) = freezer.\n冷蔵庫(れいぞうこ)に入(い)れる = to put in the fridge.",
     example:"A: 牛乳(ぎゅうにゅう)を冷蔵庫(れいぞうこ)に入(い)れてください。\nB: もう入(はい)っていますよ。",
     exampleSrc:"A: Please put the milk in the refrigerator.\nB: It is already in there.",
     funFact:"Japanese 冷蔵庫(れいぞうこ) are designed to be narrow and tall to fit Japanese apartments. Many have separate compartments for vegetables (野菜室(やさいしつ)), chilled items (チルド室(しつ)), and ice makers. The 冷凍庫(れいとうこ) (freezer) section is crucial for storing frozen foods and ice cream."},

    {type:"teach", trg:"電子(でんし)レンジ", src:"microwave oven", pos:"noun", gender:null,
     note:"電子(でんし) = electronic + レンジ = range/oven.\nチンする = to microwave (from the ding sound).",
     example:"A: お弁当(べんとう)を電子(でんし)レンジで温(あたた)めます。\nB: 何分(なんぷん)ですか？",
     exampleSrc:"A: I will heat the lunch box in the microwave.\nB: For how many minutes?",
     funFact:"Japanese people often say チンする instead of 電子(でんし)レンジで温(あたた)める. チン mimics the ding sound the microwave makes when done. This is a classic example of onomatopoeia becoming a verb. Convenience stores have free 電子(でんし)レンジ for heating purchases."},

    {type:"teach", trg:"煮(に)る", src:"to boil / to simmer / to stew", pos:"verb", gender:null,
     note:"煮物(にもの) = simmered/stewed dish. 煮(に)る is fundamental to Japanese cooking.\n弱火(よわび)で煮(に)る = to simmer on low heat.",
     example:"A: 野菜(やさい)を煮(に)ています。\nB: あと何分(なんぷん)くらいですか？",
     exampleSrc:"A: I am simmering the vegetables.\nB: About how many more minutes?",
     funFact:"煮(に)る is one of the essential Japanese cooking verbs. 煮物(にもの) (simmered dishes) like 肉(にく)じゃが and かぼちゃの煮物(にもの) are the heart of おふくろの味(あじ) (mother's home cooking). The secret is ことこと (the gentle bubbling sound) over low heat for a long time."},

    {type:"teach", trg:"蒸(む)す", src:"to steam", pos:"verb", gender:null,
     note:"蒸(む)し物(もの) = steamed dish. 蒸(む)し器(き) = steamer.\n茶碗蒸(ちゃわんむ)し = savory egg custard (steamed in a cup).",
     example:"A: 魚(さかな)を蒸(む)して作(つく)ります。\nB: ヘルシーですね。",
     exampleSrc:"A: I will make the fish by steaming it.\nB: That is healthy.",
     funFact:"蒸(む)す (steaming) is a cornerstone of Japanese cuisine. 茶碗蒸(ちゃわんむ)し (steamed egg custard with shrimp and chicken) is a beloved side dish. 蒸(む)しパン (steamed bread) is a popular snack. Steaming preserves nutrients better than frying, aligning with Japanese health-conscious cooking."},

    {type:"fb", s:"ご飯(はん)を{1}で炊(た)きます。\n(I cook rice in the rice cooker.)", a:"炊飯器(すいはんき)", opts:["炊飯器(すいはんき)","電子(でんし)レンジ","冷蔵庫(れいぞうこ)","鍋(なべ)"], sSrc:"I cook rice in the rice cooker.",
     hint:"This essential Japanese kitchen appliance is specifically designed for cooking rice perfectly."},

    {type:"teach", trg:"炒(いた)める", src:"to stir-fry / to saute", pos:"verb", gender:null,
     note:"野菜(やさい)炒(いた)め = stir-fried vegetables.\n強火(つよび)で炒(いた)める = to stir-fry on high heat.",
     example:"A: 玉(たま)ねぎを炒(いた)めてください。\nB: バターで炒(いた)めますか？",
     exampleSrc:"A: Please stir-fry the onions.\nB: Shall I stir-fry them in butter?",
     funFact:"炒(いた)める is the go-to technique for quick Japanese home cooking. 野菜(やさい)炒(いた)め (stir-fried vegetables) and チャーハン (fried rice) are 炒(いた)め物(もの) classics. The Chinese wok technique influenced Japanese 炒(いた)める cooking, but Japanese versions tend to use less oil."},

    {type:"teach", trg:"揚(あ)げる", src:"to deep-fry", pos:"verb", gender:null,
     note:"Not to be confused with あげる (to give). Context makes it clear.\n揚(あ)げ物(もの) = deep-fried food. てんぷら、とんかつ.",
     example:"A: とんかつを揚(あ)げています。\nB: いいにおいですね！",
     exampleSrc:"A: I am deep-frying tonkatsu.\nB: It smells great!",
     funFact:"揚(あ)げ物(もの) (deep-fried foods) are a major part of Japanese cuisine: てんぷら、とんかつ、からあげ、コロッケ. Despite the oil, these are considered everyday foods. Supermarket 揚(あ)げ物(もの) sections (お総菜(そうざい)) are popular for busy families buying ready-made dinner sides."},

    {type:"match", pairs:[{trg:"煮(に)る",src:"to simmer/stew"},{trg:"蒸(む)す",src:"to steam"},{trg:"炒(いた)める",src:"to stir-fry"},{trg:"揚(あ)げる",src:"to deep-fry"},{trg:"焼(や)く",src:"to grill/bake"}],
     hint:"Match each cooking method with its English translation."},

    {type:"mc", q:"What does チンする mean?", opts:["To heat in the microwave","To boil water","To ring a bell","To chop vegetables"], ans:"To heat in the microwave",
     hint:"This casual verb comes from the sound a kitchen appliance makes when it finishes."},

    {type:"fb", s:"野菜(やさい)を{1}ています。\n(I am simmering the vegetables.)", a:"煮(に)", opts:["煮(に)","蒸(む)し","炒(いた)め","揚(あ)げ"], sSrc:"I am simmering the vegetables.",
     hint:"This cooking method involves cooking food slowly in liquid over low heat."},

    {type:"mc", q:"What is a まないた?", opts:["A cutting board","A rice cooker","A ladle","A microwave"], ans:"A cutting board",
     hint:"Traditional Japanese versions are made from cypress wood for its antibacterial properties."}
  ,{type:"match",pairs:[{trg:"台所(だいどころ)",src:"kitchen"},{trg:"鍋(なべ)",src:"pot / pan / hot pot"},{trg:"包丁(ほうちょう)",src:"kitchen knife"},{trg:"まないた",src:"cutting board"},{trg:"おたま",src:"ladle"},{trg:"冷蔵庫(れいぞうこ)",src:"refrigerator"}]},{type:"match",pairs:[{trg:"電子(でんし)レンジ",src:"microwave oven"}]}]
};
export default BATCH8_L1;
