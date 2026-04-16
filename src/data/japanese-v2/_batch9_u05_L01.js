// Batch 9 – Unit 05 (A1.2 Food): Cooking & Kitchen
const BATCH9_L1 = {
  id:"jav2_u05l_b9_1", title:"だいどころ", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"だいどころ",
     desc:"Learn kitchen vocabulary and basic cooking terms. Japanese cuisine has a rich vocabulary for preparation methods and kitchen tools.",
     goals:["Name common kitchen items","Describe basic cooking actions","Understand Japanese meal preparation terms"]},

    {type:"teach", trg:"なべ", src:"pot / saucepan", pos:"noun", gender:null,
     note:"Also a type of hot pot dish: なべりょうり.\nフライパン = frying pan.",
     example:"A: おおきいなべでみずをわかしてください。\nB: わかりました。",
     exampleSrc:"A: Please boil water in a large pot.\nB: Understood.",
     funFact:"なべ (鍋) refers both to the cooking vessel and to the communal hot pot dish. なべパーティー (nabe party) is a popular winter social activity where friends gather around a bubbling pot and cook ingredients together. Every region has its own なべ specialty."},

    {type:"teach", trg:"ほうちょう", src:"kitchen knife", pos:"noun", gender:null,
     note:"ほうちょうできる = to cut with a knife.\nSakai, Osaka is famous for Japanese knives.",
     example:"A: このほうちょうはよくきれますね。\nB: にほんせいですから。",
     exampleSrc:"A: This knife cuts well.\nB: Because it is Japanese-made.",
     funFact:"Japanese ほうちょう (包丁) are prized worldwide. The craft tradition comes from katana sword-making. Sakai city produces 90% of professional ほうちょう in Japan. A good ほうちょう is passed down through generations and regularly sharpened on whetstones."},

    {type:"teach", trg:"まないた", src:"cutting board", pos:"noun", gender:null,
     note:"まないたのうえできる = to cut on the cutting board.\nWood or plastic types.",
     example:"A: まないたをあらってください。\nB: はい、すぐあらいます。",
     exampleSrc:"A: Please wash the cutting board.\nB: Yes, I will wash it right away.",
     funFact:"まないた (俎板) literally means 'fish-cutting board.' Traditional Japanese まないた are made of hinoki (Japanese cypress) wood, which is naturally antibacterial. The expression まないたのうえのこい (a carp on a cutting board) means someone helpless and at another's mercy."},

    {type:"teach", trg:"やく", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"やきにく = grilled meat. やきざかな = grilled fish.\nたまごをやく = to fry an egg.",
     example:"A: にくをやきましょう。\nB: ちゅうかでおねがいします。",
     exampleSrc:"A: Let's grill the meat.\nB: Medium, please.",
     funFact:"やく (焼く) covers grilling, baking, roasting, and frying. やきとり (grilled chicken skewers), やきそば (fried noodles), たこやき (octopus balls), and おこのみやき (savory pancakes) all use やく. The versatility of this one verb reflects Japan's love of cooked food."},

    {type:"teach", trg:"にる", src:"to boil / to stew / pos:simmer", pos:"verb", gender:null,
     note:"にもの = stewed dish. にこむ = to simmer thoroughly.\nA fundamental Japanese cooking method.",
     example:"A: やさいをにましょう。\nB: どのくらいにますか？",
     exampleSrc:"A: Let's stew the vegetables.\nB: How long shall we stew them?",
     funFact:"にる (煮る) is central to Japanese home cooking. にもの (simmered dishes) like にくじゃが (meat and potatoes) and かぼちゃのにもの (simmered pumpkin) are comfort food staples. The low, slow cooking extracts umami flavors that define おふくろのあじ (mother's cooking)."},

    {type:"teach", trg:"むす", src:"to steam", pos:"verb", gender:null,
     note:"むしやさい = steamed vegetables.\nちゃわんむし = savory egg custard.",
     example:"A: さかなをむしましょう。\nB: ヘルシーでいいですね。",
     exampleSrc:"A: Let's steam the fish.\nB: Healthy, that is nice.",
     funFact:"むす (蒸す) is one of the healthiest Japanese cooking methods. ちゃわんむし (steamed egg custard) is a classic dish served in a tea cup. Japan's natural hot springs led to the tradition of じごくむし (hell steaming) where food is cooked in volcanic steam."},

    {type:"teach", trg:"きる", src:"to cut / to chop", pos:"verb", gender:null,
     note:"In cooking context: やさいをきる = to cut vegetables.\nうすぎり = thin slices.",
     example:"A: たまねぎをきってください。\nB: どうやってきりますか？",
     exampleSrc:"A: Please cut the onion.\nB: How shall I cut it?",
     funFact:"Japanese cuisine has many specific きり方 (cutting styles): せんぎり (julienne), いちょうぎり (quarter-rounds), さいのめぎり (cubes), and ささがき (shavings). The way ingredients are cut affects both cooking time and presentation, which is crucial in washoku."},

    {type:"teach", trg:"あじみ", src:"taste testing / tasting", pos:"noun", gender:null,
     note:"あじみをする = to taste-test.\nあじ = flavor, み = seeing/trying.",
     example:"A: あじみをしてください。\nB: うん、もうすこししおがひつようです。",
     exampleSrc:"A: Please taste it.\nB: Hmm, it needs a bit more salt.",
     funFact:"あじみ (味見) literally means 'taste-seeing.' In Japanese cooking, あじみ is essential before serving. Professional chefs あじみ constantly during cooking. The phrase あじがきまる means the seasoning is perfectly balanced, a moment of pride for any cook."},

    {type:"mc", q:"What cooking method does にる refer to?", opts:["Boiling or stewing","Grilling","Steaming","Frying"], ans:"Boiling or stewing",
     hint:"This method involves cooking ingredients slowly in liquid, creating にもの (stewed dishes)."},

    {type:"fb", s:"にくを{1}ましょう。\n(Let's grill the meat.)", a:"やき", opts:["やき","に","むし","きり"], sSrc:"Let's grill the meat.",
     hint:"This versatile cooking verb covers grilling, baking, roasting, and pan-frying."},

    {type:"match", pairs:[
      {trg:"なべ", src:"pot"},
      {trg:"ほうちょう", src:"kitchen knife"},
      {trg:"まないた", src:"cutting board"},
      {trg:"あじみ", src:"taste testing"}
    ]},

    {type:"mc", q:"What is ちゃわんむし?", opts:["Steamed egg custard","Grilled chicken","Boiled rice","Cut vegetables"], ans:"Steamed egg custard",
     hint:"ちゃわん means tea cup and むし means s.... It is a savory dish."}
  ]
};
export default BATCH9_L1;
