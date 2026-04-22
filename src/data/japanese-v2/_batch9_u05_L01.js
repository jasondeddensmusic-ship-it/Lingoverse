// Batch 9 – Unit 05 (A1.2 Food): Cooking & Kitchen
const BATCH9_L1 = {
  id:"jav2_u05l_b9_1", title:"台所(だいどころ)", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"台所(だいどころ)",
     desc:"Learn kitchen vocabulary and basic cooking terms. Japanese cuisine has a rich vocabulary for preparation methods and kitchen tools.",
     goals:["Name common kitchen items","Describe basic cooking actions","Understand Japanese meal preparation terms"]},

    {type:"teach", trg:"鍋(なべ)", src:"pot / saucepan", pos:"noun", gender:null,
     note:"Also a type of hot pot dish: 鍋(なべ)料理(りょうり).\nフライパン = frying pan.",
     example:"A: 大(おお)きい鍋(なべ)で水(みず)を沸(わ)かしてください。\nB: わかりました。",
     exampleSrc:"A: Please boil water in a large pot.\nB: Understood.",
     funFact:"鍋(なべ) refers both to the cooking vessel and to the communal hot pot dish. 鍋(なべ)パーティー (nabe party) is a popular winter social activity where friends gather around a bubbling pot and cook ingredients together. Every region has its own 鍋(なべ) specialty."},

    {type:"teach", trg:"包丁(ほうちょう)", src:"kitchen knife", pos:"noun", gender:null,
     note:"包丁(ほうちょう)で切(き)る = to cut with a knife.\nSakai, Osaka is famous for Japanese knives.",
     example:"A: この包丁(ほうちょう)はよく切(き)れますね。\nB: 日本製(にほんせい)ですから。",
     exampleSrc:"A: This knife cuts well.\nB: Because it is Japanese-made.",
     funFact:"Japanese 包丁(ほうちょう) are prized worldwide. The craft tradition comes from katana sword-making. Sakai city produces 90% of professional 包丁(ほうちょう) in Japan. A good 包丁(ほうちょう) is passed down through generations and regularly sharpened on whetstones."},

    {type:"teach", trg:"まな板(いた)", src:"cutting board", pos:"noun", gender:null,
     note:"まな板(いた)の上(うえ)で切(き)る = to cut on the cutting board.\nWood or plastic types.",
     example:"A: まな板(いた)を洗(あら)ってください。\nB: はい、すぐ洗(あら)います。",
     exampleSrc:"A: Please wash the cutting board.\nB: Yes, I will wash it right away.",
     funFact:"まな板(いた) literally means 'fish-cutting board.' Traditional Japanese まな板(いた) are made of hinoki (Japanese cypress) wood, which is naturally antibacterial. The expression まな板(いた)の上(うえ)の鯉(こい) (a carp on a cutting board) means someone helpless and at another's mercy."},

    {type:"teach", trg:"焼(や)く", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"焼(や)き肉(にく) = grilled meat. 焼(や)き魚(ざかな) = grilled fish.\n卵(たまご)を焼(や)く = to fry an egg.",
     example:"A: 肉(にく)を焼(や)きましょう。\nB: 中火(ちゅうか)でお願(ねが)いします。",
     exampleSrc:"A: Let's grill the meat.\nB: Medium, please.",
     funFact:"焼(や)く covers grilling, baking, roasting, and frying. 焼(や)き鳥(とり) (grilled chicken skewers), 焼(や)きそば (fried noodles), たこ焼(や)き (octopus balls), and お好(この)み焼(や)き (savory pancakes) all use 焼(や)く. The versatility of this one verb reflects Japan's love of cooked food."},

    {type:"teach", trg:"煮(に)る", src:"to boil / to stew / to simmer", pos:"verb", gender:null,
     note:"煮物(にもの) = stewed dish. 煮込(にこ)む = to simmer thoroughly.\nA fundamental Japanese cooking method.",
     example:"A: 野菜(やさい)を煮(に)ましょう。\nB: どのくらい煮(に)ますか？",
     exampleSrc:"A: Let's stew the vegetables.\nB: How long shall we stew them?",
     funFact:"煮(に)る is central to Japanese home cooking. 煮物(にもの) (simmered dishes) like 肉(にく)じゃが (meat and potatoes) and かぼちゃの煮物(にもの) (simmered pumpkin) are comfort food staples. The low, slow cooking extracts umami flavors that define おふくろの味(あじ) (mother's cooking)."},

    {type:"teach", trg:"蒸(む)す", src:"to steam", pos:"verb", gender:null,
     note:"蒸(む)し野菜(やさい) = steamed vegetables.\n茶碗蒸(ちゃわんむ)し = savory egg custard.",
     example:"A: 魚(さかな)を蒸(む)しましょう。\nB: ヘルシーでいいですね。",
     exampleSrc:"A: Let's steam the fish.\nB: Healthy, that is nice.",
     funFact:"蒸(む)す is one of the healthiest Japanese cooking methods. 茶碗蒸(ちゃわんむ)し (steamed egg custard) is a classic dish served in a tea cup. Japan's natural hot springs led to the tradition of 地獄蒸(じごくむ)し (hell steaming) where food is cooked in volcanic steam."},

    {type:"teach", trg:"切(き)る", src:"to cut / to chop", pos:"verb", gender:null,
     note:"In cooking context: 野菜(やさい)を切(き)る = to cut vegetables.\n薄切(うすぎ)り = thin slices.",
     example:"A: 玉(たま)ねぎを切(き)ってください。\nB: どうやって切(き)りますか？",
     exampleSrc:"A: Please cut the onion.\nB: How shall I cut it?",
     funFact:"Japanese cuisine has many specific 切(き)り方(かた) (cutting styles): 千切(せんぎ)り (julienne), 銀杏切(いちょうぎ)り (quarter-rounds), 賽(さい)の目切(めぎ)り (cubes), and ささがき (shavings). The way ingredients are cut affects both cooking time and presentation, which is crucial in washoku."},

    {type:"teach", trg:"味見(あじみ)", src:"taste testing / tasting", pos:"noun", gender:null,
     note:"味見(あじみ)をする = to taste-test.\n味(あじ) = flavor, 見(み) = seeing/trying.",
     example:"A: 味見(あじみ)をしてください。\nB: うん、もう少(すこ)し塩(しお)が必要(ひつよう)です。",
     exampleSrc:"A: Please taste it.\nB: Hmm, it needs a bit more salt.",
     funFact:"味見(あじみ) literally means 'taste-seeing.' In Japanese cooking, 味見(あじみ) is essential before serving. Professional chefs 味見(あじみ) constantly during cooking. The phrase 味(あじ)が決(き)まる means the seasoning is perfectly balanced, a moment of pride for any cook."},

    {type:"mc", q:"What cooking method does 煮(に)る refer to?", opts:["Boiling or stewing","Grilling","Steaming","Frying"], ans:"Boiling or stewing",
     hint:"This method involves cooking ingredients slowly in liquid, creating 煮物(にもの) (stewed dishes)."},

    {type:"fb", s:"肉(にく)を{1}ましょう。\n(Let's grill the meat.)", a:"焼(や)き", opts:["焼(や)き","に","蒸(む)し","切(き)り"], sSrc:"Let's grill the meat.",
     hint:"This versatile cooking verb covers grilling, baking, roasting, and pan-frying."},

    {type:"match", pairs:[
      {trg:"鍋(なべ)", src:"pot"},
      {trg:"包丁(ほうちょう)", src:"kitchen knife"},
      {trg:"まな板(いた)", src:"cutting board"},
      {trg:"味見(あじみ)", src:"taste testing"}
    ]},

    {type:"mc", q:"What is 茶碗蒸(ちゃわんむ)し?", opts:["Cut vegetables","Steamed egg custard","Grilled chicken","Boiled rice"], ans:"Steamed egg custard",
     hint:"茶碗(ちゃわん) means tea cup and 蒸(む)し means s.... It is a savory dish."}
  ,{type:"fb", s:"野菜(やさい)と肉(にく)を{1}で食材(しょくざい)を切(き)ります。",
    a:["まな板(いた)"],
    opts:["まな板(いた)","鍋(なべ)","包丁(ほうちょう)","皿(さら)"],
    hint:"You place ingredients on this flat surface before cutting them. Its name literally means 'fish-cutting board.'",
    sSrc:"I cut ingredients on a {1} with vegetables and meat."}
  ,{type:"match",pairs:[{trg:"焼(や)く",src:"to grill / to bake / to roast"},{trg:"煮(に)る",src:"to boil / to stew / to simmer"},{trg:"蒸(む)す",src:"to steam"},{trg:"切(き)る",src:"to cut / to chop"}]}]
};
export default BATCH9_L1;
