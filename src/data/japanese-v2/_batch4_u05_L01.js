// Batch 4 — Unit 05 Lesson 1: Cooking Methods & Kitchen
const BATCH4_L_1 = {
  id:"jav2_u05l_b4_1", title:"りょうりのしかた", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"りょうりのしかた",
     desc:"Learn cooking methods and kitchen vocabulary. Japanese cuisine uses specific techniques that have their own dedicated words.",
     goals:["Name cooking methods (fry, boil, steam, grill)","Learn kitchen equipment words","Describe how food is prepared"]},

    {type:"teach", trg:"やく", src:"to grill / to bake / to roast", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 焼く. Covers grilling, baking, and roasting.",
     example:"にくをやきます。",
     exampleSrc:"I grill meat.",
     funFact:"Yaku covers an enormous range: yakitori (grilled chicken), yakiniku (grilled meat), yakisoba (fried noodles), takoyaki (octopus balls), okonomiyaki (savory pancakes). It is the king of Japanese cooking verbs."},

    {type:"teach", trg:"にる", src:"to simmer / to boil (cook)", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 煮る. Slow cooking in liquid.",
     example:"やさいをにます。",
     exampleSrc:"I simmer the vegetables.",
     funFact:"Nimono (煮物, simmered dishes) is a pillar of Japanese home cooking. Vegetables, tofu, and fish simmered in dashi, soy sauce, and mirin. Every Japanese mother has her own nimono recipe passed down through generations."},

    {type:"teach", trg:"あげる", src:"to deep-fry", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 揚げる. Different kanji from あげる (to give).",
     example:"てんぷらをあげます。",
     exampleSrc:"I deep-fry tempura.",
     funFact:"Tempura was introduced by Portuguese missionaries in the 16th century. The word may come from Latin 'tempora' (times of fasting, when only fish was eaten). Japan transformed it into an art form."},

    {type:"teach", trg:"むす", src:"to steam", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 蒸す. Used for steamed dishes and rice.",
     example:"おまんじゅうをむします。",
     exampleSrc:"I steam the buns.",
     funFact:"Mushimono (steamed dishes) are considered the healthiest cooking method in Japan. Chawanmushi (steamed egg custard with fillings) is a classic Japanese dish found in traditional kaiseki courses."},

    {type:"teach", trg:"いためる", src:"to stir-fry", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 炒める. Quick cooking in oil over high heat.",
     example:"やさいをいためます。",
     exampleSrc:"I stir-fry the vegetables.",
     funFact:"Stir-frying came to Japan from Chinese cooking. Yasai itame (stir-fried vegetables) is one of the quickest Japanese home meals. The key is using very high heat for a very short time."},

    {type:"teach", trg:"きる", src:"to cut", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 切る. Essential kitchen verb.",
     example:"たまねぎをきります。",
     exampleSrc:"I cut the onion.",
     funFact:"Japanese knives are considered the best in the world. Cities like Sakai and Seki have been making blades for centuries. A single handcrafted Japanese chef's knife can cost over $1,000."},

    {type:"teach", trg:"まぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 混ぜる. Combining ingredients together.",
     example:"たまごをまぜてください。",
     exampleSrc:"Please mix the eggs.",
     funFact:"Mazeru is essential for natto (fermented soybeans). The proper way to eat natto is to stir it vigorously until it becomes very sticky. Some people stir over 100 times for the best texture."},

    {type:"teach", trg:"なべ", src:"pot / saucepan", pos:"noun", gender:null,
     note:"Kanji: 鍋. Also refers to hot pot dishes (nabe-ryouri).",
     example:"おおきいなべでスープをつくります。",
     exampleSrc:"I make soup in a big pot.",
     funFact:"Nabe (hot pot) is Japan's favorite winter meal. Families and friends gather around a bubbling pot of broth, adding meat, vegetables, and tofu. There are regional varieties: chanko-nabe (sumo), kimchi-nabe, and more."},

    {type:"teach", trg:"フライパン", src:"frying pan", pos:"noun", gender:null,
     note:"From English 'fry pan.' The standard kitchen pan.",
     example:"フライパンであぶらをあたためます。",
     exampleSrc:"I heat oil in the frying pan.",
     funFact:"Japanese home cooks typically use a single small frying pan called a tamagoyaki-ki (玉子焼き器) just for making the rolled egg omelet that goes in bento boxes. A dedicated pan for one dish."},

    {type:"teach", trg:"ほうちょう", src:"kitchen knife", pos:"noun", gender:null,
     note:"Kanji: 包丁. Originally meant 'cooking' itself, now specifically the knife.",
     example:"ほうちょうでさかなをきります。",
     exampleSrc:"I cut the fish with a kitchen knife.",
     funFact:"The word houchou comes from an ancient Chinese chef named 庖丁 (Pao Ding) who was so skilled he could butcher an ox without dulling his blade. The name became the word for the tool itself."},

    {type:"teach", trg:"まないた", src:"cutting board", pos:"noun", gender:null,
     note:"Kanji: まな板. Mana (fish) + ita (board). Originally for fish preparation.",
     example:"まないたのうえでやさいをきります。",
     exampleSrc:"I cut vegetables on the cutting board.",
     funFact:"Japanese cutting boards are traditionally made from hinoki cypress wood, which is naturally antibacterial. The word literally means 'fish board' because its original purpose was preparing raw fish for sashimi."},

    {type:"teach", trg:"あじ", src:"flavor / taste", pos:"noun", gender:null,
     note:"Kanji: 味. One of the most important food words.",
     example:"このスープはいいあじですね。",
     exampleSrc:"This soup has a good flavor.",
     funFact:"Japan identified the fifth basic taste, umami (うま味), in 1908. Scientist Ikeda Kikunae discovered glutamate in kombu seaweed was responsible for this savory taste. The whole world now uses the Japanese word 'umami.'"},

    {type:"teach", trg:"しょうゆ", src:"soy sauce", pos:"noun", gender:null,
     note:"Kanji: 醤油. Japan's most essential condiment.",
     example:"さしみにしょうゆをつけます。",
     exampleSrc:"I dip sashimi in soy sauce.",
     funFact:"Soy sauce was invented in China but Japan refined it into an art. Kikkoman, founded in 1917, is the world's largest soy sauce maker. Some artisanal soy sauces are aged for over 3 years in wooden barrels."},

    {type:"teach", trg:"みそ", src:"miso (fermented soybean paste)", pos:"noun", gender:null,
     note:"Kanji: 味噌. The base of Japan's most iconic soup.",
     example:"あさごはんにみそしるをのみます。",
     exampleSrc:"I drink miso soup for breakfast.",
     funFact:"There are over 1,000 varieties of miso in Japan, ranging from white (sweet) to red (salty). Each region has its own style. Miso soup is consumed by over 75% of Japanese people every single day."},

    {type:"mc", q:"What does やく mean in cooking?",
     opts:["to grill/bake/roast","to boil","to steam","to cut"], ans:"to grill/bake/roast",
     hint:"The cooking verb behind yakitori, yakiniku, and okonomiyaki."},

    {type:"fb", s:"てんぷらを{1}ます。", a:"あげ",
     sSrc:"I deep-fry tempura.",
     opts:["あげ","やき","に","むし"],
     hint:"Cooking by submerging food completely in hot oil."},

    {type:"match", pairs:[
      {trg:"にる", src:"to simmer"},
      {trg:"むす", src:"to steam"},
      {trg:"いためる", src:"to stir-fry"},
      {trg:"まぜる", src:"to mix"}
    ]},

    {type:"mc", q:"ほうちょう means:",
     opts:["kitchen knife","cutting board","frying pan","pot"], ans:"kitchen knife",
     hint:"Named after a legendary Chinese chef who was incredibly skilled with blades."},

    {type:"fb", s:"さしみに{1}をつけます。", a:"しょうゆ",
     sSrc:"I dip sashimi in soy sauce.",
     opts:["しょうゆ","みそ","さとう","しお"],
     hint:"Japan's most essential liquid condiment, dark and salty."},

    {type:"mc", q:"Which taste did Japan discover?",
     opts:["umami","sweet","sour","bitter"], ans:"umami",
     hint:"The savory fifth taste, identified by a Japanese scientist in 1908."},

    {type:"mc", q:"What is a なべ?",
     opts:["pot / hot pot","knife","pan","bowl"], ans:"pot / hot pot",
     hint:"Both a cooking vessel and a popular winter group meal in Japan."}
  ]
};
export default BATCH4_L_1;
