// Batch 4 — Unit 05 Lesson 1: Cooking Methods & Kitchen
const BATCH4_L_1 = {
  id:"jav2_u05l_b4_1", title:"料理(りょうり)のしかた", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"料理(りょうり)のしかた",
     desc:"Learn cooking methods and kitchen vocabulary. Japanese cuisine uses specific techniques that have their own dedicated words.",
     goals:["Name cooking methods (fry, boil, steam, grill)","Learn kitchen equipment words","Describe how food is prepared"]},

    {type:"teach", trg:"焼(や)く", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 焼く. Covers grilling, baking, and roasting.",
     example:"肉(にく)を焼(や)きます。",
     exampleSrc:"I grill meat.",
     funFact:"Yaku covers an enormous range: 焼(や)き鳥(とり) (grilled chicken), 焼(や)き肉(にく) (grilled meat), 焼(や)きそば (fried noodles), たこ焼(や)き (octopus balls), お好(この)み焼(や)き (savory pancakes). It is the king of Japanese cooking verbs."},

    {type:"teach", trg:"煮(に)る", src:"to simmer / to boil (cook)", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 煮る. Slow cooking in liquid.",
     example:"野菜(やさい)を煮(に)ます。",
     exampleSrc:"I simmer the vegetables.",
     funFact:"煮物(にもの) (simmered dishes) is a pillar of Japanese home cooking. Vegetables, tofu, and fish simmered in dashi, soy sauce, and mirin. Every Japanese mother has her own nimono recipe passed down through generations."},

    {type:"teach", trg:"揚(あ)げる", src:"to deep-fry", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 揚げる. Different kanji from あげる (to give).",
     example:"天(てん)ぷらを揚(あ)げます。",
     exampleSrc:"I deep-fry tempura.",
     funFact:"Tempura was introduced by Portuguese missionaries in the 16th century. The word may come from Latin 'tempora' (times of fasting, when only fish was eaten). Japan transformed it into an art form."},

    {type:"teach", trg:"蒸(む)す", src:"to steam", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 蒸す. Used for steamed dishes and rice.",
     example:"お饅頭(まんじゅう)を蒸(む)します。",
     exampleSrc:"I steam the buns.",
     funFact:"蒸(む)し物(もの) (steamed dishes) are considered the healthiest cooking method in Japan. 茶碗蒸(ちゃわんむ)し (steamed egg custard with fillings) is a classic Japanese dish found in traditional kaiseki courses."},

    {type:"teach", trg:"炒(いた)める", src:"to stir-fry", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 炒める. Quick cooking in oil over high heat.",
     example:"野菜(やさい)を炒(いた)めます。",
     exampleSrc:"I stir-fry the vegetables.",
     funFact:"Stir-frying came to Japan from Chinese cooking. 野菜炒(やさいいた)め (stir-fried vegetables) is one of the quickest Japanese home meals. The key is using very high heat for a very short time."},

    {type:"teach", trg:"切(き)る", src:"to cut", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 切る. Essential kitchen verb.",
     example:"玉(たま)ねぎを切(き)ります。",
     exampleSrc:"I cut the onion.",
     funFact:"Japanese knives are considered the best in the world. Cities like Sakai and Seki have been making blades for centuries. A single handcrafted Japanese chef's knife can cost over $1,000."},

    {type:"teach", trg:"混(ま)ぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 混ぜる. Combining ingredients together.",
     example:"卵(たまご)を混(ま)ぜてください。",
     exampleSrc:"Please mix the eggs.",
     funFact:"Mazeru is essential for natto (fermented soybeans). The proper way to eat natto is to stir it vigorously until it becomes very sticky. Some people stir over 100 times for the best texture."},

    {type:"teach", trg:"鍋(なべ)", src:"pot / saucepan", pos:"noun", gender:null,
     note:"Kanji: 鍋. Also refers to hot pot dishes (nabe-ryouri).",
     example:"大(おお)きい鍋(なべ)でスープを作(つく)ります。",
     exampleSrc:"I make soup in a big pot.",
     funFact:"鍋(なべ) (hot pot) is Japan's favorite winter meal. Families and friends gather around a bubbling pot of broth, adding meat, vegetables, and tofu. There are regional varieties: chanko-nabe (sumo), kimchi-nabe, and more."},

    {type:"teach", trg:"フライパン", src:"frying pan", pos:"noun", gender:null,
     note:"From English 'fry pan.' The standard kitchen pan.",
     example:"フライパンで油(あぶら)を温(あたた)めます。",
     exampleSrc:"I heat oil in the frying pan.",
     funFact:"Japanese home cooks typically use a single small frying pan called a tamagoyaki-ki (玉子焼(たまごや)き器(き)) just for making the rolled egg omelet that goes in bento boxes. A dedicated pan for one dish."},

    {type:"teach", trg:"包丁(ほうちょう)", src:"kitchen knife", pos:"noun", gender:null,
     note:"Kanji: 包丁. Originally meant 'cooking' itself, now specifically the knife.",
     example:"包丁(ほうちょう)で魚(さかな)を切(き)ります。",
     exampleSrc:"I cut the fish with a kitchen knife.",
     funFact:"The word houchou comes from an ancient Chinese chef named 庖丁 (Pao Ding) who was so skilled he could butcher an ox without dulling his blade. The name became the word for the tool itself."},

    {type:"teach", trg:"まな板(いた)", src:"cutting board", pos:"noun", gender:null,
     note:"Kanji: まな板. Mana (fish) + ita (board). Originally for fish preparation.",
     example:"まな板(いた)の上(うえ)で野菜(やさい)を切(き)ります。",
     exampleSrc:"I cut vegetables on the cutting board.",
     funFact:"Japanese cutting boards are traditionally made from hinoki cypress wood, which is naturally antibacterial. The word literally means 'fish board' because its original purpose was preparing raw fish for sashimi."},

    {type:"teach", trg:"味(あじ)", src:"flavor / taste", pos:"noun", gender:null,
     note:"Kanji: 味. One of the most important food words.",
     example:"このスープはいい味(あじ)ですね。",
     exampleSrc:"This soup has a good flavor.",
     funFact:"Japan identified the fifth basic taste, うま味(み) (umami), in 1908. Scientist Ikeda Kikunae discovered glutamate in kombu seaweed was responsible for this savory taste. The whole world now uses the Japanese word 'umami.'"},

    {type:"teach", trg:"醤油(しょうゆ)", src:"soy sauce", pos:"noun", gender:null,
     note:"Kanji: 醤油. Japan's most essential condiment.",
     example:"刺身(さしみ)に醤油(しょうゆ)をつけます。",
     exampleSrc:"I dip sashimi in soy sauce.",
     funFact:"Soy sauce was invented in China but Japan refined it into an art. Kikkoman, founded in 1917, is the world's largest soy sauce maker. Some artisanal soy sauces are aged for over 3 years in wooden barrels."},

    {type:"teach", trg:"味噌(みそ)", src:"miso (fermented soybean paste)", pos:"noun", gender:null,
     note:"Kanji: 味噌. The base of Japan's most iconic soup.",
     example:"朝(あさ)ご飯(はん)に味噌(みそ)汁(しる)を飲(の)みます。",
     exampleSrc:"I drink miso soup for breakfast.",
     funFact:"There are over 1,000 varieties of miso in Japan, ranging from white (sweet) to red (salty). Each region has its own style. Miso soup is consumed by over 75% of Japanese people every single day."},

    {type:"mc", q:"What does 焼(や)く mean in cooking?",
     opts:["to grill/bake/roast","to boil","to steam","to cut"], ans:"to grill/bake/roast",
     hint:"The cooking verb behind yakitori, yakiniku, and okonomiyaki."},

    {type:"fb", s:"天(てん)ぷらを{1}ます。", a:"揚(あ)げ",
     sSrc:"I deep-fry tempura.",
     opts:["揚(あ)げ","焼(や)き","煮(に)","蒸(む)し"],
     hint:"Cooking by submerging food completely in hot oil."},

    {type:"match", pairs:[
      {trg:"煮(に)る", src:"to simmer"},
      {trg:"蒸(む)す", src:"to steam"},
      {trg:"炒(いた)める", src:"to stir-fry"},
      {trg:"混(ま)ぜる", src:"to mix"}
    ]},

    {type:"mc", q:"包丁(ほうちょう) means:",
     opts:["kitchen knife","cutting board","frying pan","pot"], ans:"kitchen knife",
     hint:"Named after a legendary Chinese chef who was incredibly skilled with blades."},

    {type:"fb", s:"刺身(さしみ)に{1}をつけます。", a:"醤油(しょうゆ)",
     sSrc:"I dip sashimi in soy sauce.",
     opts:["醤油(しょうゆ)","味噌(みそ)","砂糖(さとう)","塩(しお)"],
     hint:"Japan's most essential liquid condiment, dark and salty."},

    {type:"mc", q:"Which taste did Japan discover?",
     opts:["umami","sweet","sour","bitter"], ans:"umami",
     hint:"The savory fifth taste, identified by a Japanese scientist in 1908."},

    {type:"mc", q:"What is a 鍋(なべ)?",
     opts:["pot / hot pot","knife","pan","bowl"], ans:"pot / hot pot",
     hint:"Both a cooking vessel and a popular winter group meal in Japan."}
  ,{type:"match",pairs:[{trg:"焼(や)く",src:"to grill / to bake / to roast"},{trg:"切(き)る",src:"to cut"},{trg:"鍋(なべ)",src:"pot / saucepan"},{trg:"フライパン",src:"frying pan"},{trg:"包丁(ほうちょう)",src:"kitchen knife"},{trg:"まな板(いた)",src:"cutting board"}]},{type:"match",pairs:[{trg:"味(あじ)",src:"flavor / taste"},{trg:"味噌(みそ)",src:"miso (fermented soybean paste)"}]},
  {type:"fb", s:"とんかつを作(つく)るには油(あぶら)で肉(にく)を{1}ます。", a:["揚(あ)げる"], opts:["揚(あ)げる","焼(や)く","煮(に)る","蒸(む)す"], hint:"The cooking method that submerges food in hot oil until crispy.", sSrc:"To make tonkatsu, you {1} the meat in oil."}
]
};
export default BATCH4_L_1;
