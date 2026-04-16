// Batch 7 – Unit 05 (A1.2 Food & Drink): Kitchen & Cooking Vocabulary
const BATCH7_L1 = {
  id:"jav2_u05l_b7_1", title:"だいどころ", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"だいどころ",
     desc:"Learn kitchen items and basic cooking vocabulary. Japanese cooking (和食, washoku) is a UNESCO World Heritage tradition, and knowing these words opens the door to food culture conversations.",
     goals:["Name kitchen utensils and appliances","Use basic cooking action verbs","Describe simple cooking steps"]},

    {type:"teach", trg:"だいどころ", src:"kitchen", pos:"noun", gender:null,
     note:"Kanji: 台所. Also called キッチン (loanword).\nだいどころでりょうりをする = to cook in the kitchen.",
     example:"A: おかあさんはだいどころにいますか？\nB: はい、ばんごはんをつくっています。",
     exampleSrc:"A: Is Mom in the kitchen?\nB: Yes, she is making dinner.",
     funFact:"台所 literally means 'stand-place' because it was where you stood to prepare food. Traditional Japanese kitchens had a raised platform (台) for food prep. Modern apartments often have open キッチン (kitchen) connected to the living room, a Western influence."},

    {type:"teach", trg:"なべ", src:"pot / pan", pos:"noun", gender:null,
     note:"General word for cooking pot.\nなべりょうり = hot pot dish (cooked at the table).",
     example:"A: おおきいなべでスープをつくります。\nB: なんにんぶんですか？",
     exampleSrc:"A: I will make soup in a big pot.\nB: How many servings?",
     funFact:"なべ is both a cooking tool and a beloved winter dish. なべりょうり (hot pot) is Japan's favorite cold-weather meal. Families gather around a boiling pot and cook together. Each region has its own なべ style: ちゃんこなべ (sumo hot pot), もつなべ (offal hot pot), and more."},

    {type:"teach", trg:"ほうちょう", src:"kitchen knife", pos:"noun", gender:null,
     note:"Kanji: 包丁. ほうちょうできる = to cut with a knife.\nJapanese knives are world-famous.",
     example:"A: ほうちょうでやさいをきってください。\nB: はい、うすくきりますね。",
     exampleSrc:"A: Please cut the vegetables with the knife.\nB: Okay, I will cut them thin.",
     funFact:"Japanese kitchen knives (ほうちょう) are prized worldwide. The city of Sakai in Osaka has made blades for 600 years. Unlike Western double-bevel knives, traditional Japanese ほうちょう have a single bevel edge for more precise cuts. Chefs treat their knives with deep respect."},

    {type:"teach", trg:"さら", src:"plate / dish", pos:"noun", gender:null,
     note:"Counter: いちまい, にまい (flat objects).\nおさらをあらう = to wash dishes.",
     example:"A: さらをテーブルにならべてください。\nB: なんまいですか？",
     exampleSrc:"A: Please set the plates on the table.\nB: How many?",
     funFact:"Japanese cuisine values presentation on さら (plates). The saying 'you eat with your eyes first' is taken seriously. Different dishes use different plates: round for sashimi, rectangular for grilled fish, small for pickles. A full Japanese meal uses 5 or more plates."},

    {type:"teach", trg:"ちゃわん", src:"rice bowl", pos:"noun", gender:null,
     note:"Also used for tea cups in some contexts.\nごはんぢゃわん = rice bowl specifically.",
     example:"A: ちゃわんにごはんをよそってください。\nB: おおもりですか？",
     exampleSrc:"A: Please serve rice in the bowl.\nB: A large portion?",
     funFact:"ちゃわん (茶碗) literally means 'tea bowl.' Rice bowls are called ちゃわん because tea was originally served in the same type of vessel. In Japanese etiquette, you hold the ちゃわん in one hand while eating with chopsticks in the other. Setting it down between bites is fine."},

    {type:"teach", trg:"はし", src:"chopsticks", pos:"noun", gender:null,
     note:"Also written おはし (polite).\nはしをつかう = to use chopsticks.",
     example:"A: おはしをつかえますか？\nB: はい、すこしつかえます。",
     exampleSrc:"A: Can you use chopsticks?\nB: Yes, I can use them a little.",
     funFact:"はし (箸) has strict etiquette rules. Never stick chopsticks upright in rice (funeral ritual). Never pass food chopstick-to-chopstick (another funeral association). Never point with chopsticks. Japanese children learn proper はし technique by age 5 or 6."},

    {type:"teach", trg:"きる", src:"to cut", pos:"verb", gender:null,
     note:"Group 1 verb. Different from きる (to wear, Group 2).\nやさいをきる = to cut vegetables.",
     example:"A: たまねぎをこまかくきってください。\nB: めがいたいです！",
     exampleSrc:"A: Please chop the onion finely.\nB: My eyes hurt!",
     funFact:"きる (切る) has many compound words: きりかえる (to switch), しめきり (deadline, literally 'close-cut'), きりがない (endless). The verb also means 'to end a phone call' (でんわをきる). Japanese chefs' cutting techniques (きりかた) take years to master."},

    {type:"teach", trg:"にる", src:"to boil / to simmer", pos:"verb", gender:null,
     note:"Group 2 verb. にもの = simmered dish.\nやさいをにる = to simmer vegetables.",
     example:"A: だいこんをにています。\nB: いいにおいですね。",
     exampleSrc:"A: I am simmering daikon radish.\nB: It smells good.",
     funFact:"にる (煮る) is the most essential Japanese cooking technique. にもの (simmered dishes) are the heart of home cooking: にくじゃが (meat and potato stew), おでん (various items simmered in dashi). Japanese mothers are often judged by their にもの skills."},

    {type:"teach", trg:"やく", src:"to grill / to bake / to fry", pos:"verb", gender:null,
     note:"Group 1 verb. Covers many heat methods.\nやきにく = grilled meat. やきざかな = grilled fish.",
     example:"A: さかなをやきましょうか？\nB: はい、しおやきでおねがいします。",
     exampleSrc:"A: Shall I grill the fish?\nB: Yes, salt-grilled please.",
     funFact:"やく (焼く) covers grilling, baking, roasting, and pan-frying. Japanese food names reveal the method: やきとり (grilled chicken), やきそば (fried noodles), たこやき (octopus balls), おこのみやき (savory pancake). The verb is everywhere in Japanese cuisine."},

    {type:"teach", trg:"むす", src:"to steam", pos:"verb", gender:null,
     note:"Group 1 verb. むしやさい = steamed vegetables.\nちゃわんむし = savory egg custard.",
     example:"A: やさいをむしてたべましょう。\nB: ヘルシーですね。",
     exampleSrc:"A: Let us steam vegetables and eat them.\nB: That is healthy.",
     funFact:"Steaming (むす) is considered the healthiest Japanese cooking method. ちゃわんむし (steamed egg custard in a teacup) is a beloved dish at every class of restaurant. The word むしあつい (muggy/humid) also uses むす because humid air feels like being steamed."},

    {type:"teach", trg:"まぜる", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Group 2 verb. よくまぜてください = please mix well.\nまぜごはん = mixed rice.",
     example:"A: たまごをよくまぜてください。\nB: はい、まぜています。",
     exampleSrc:"A: Please mix the egg well.\nB: Yes, I am mixing it.",
     funFact:"まぜる (混ぜる) is key to many Japanese dishes. まぜごはん (mixed rice) is comfort food with seasonal ingredients stirred into white rice. なっとう (fermented soybeans) must be stirred vigorously before eating. Some people stir it 100 times for the perfect texture."},

    {type:"teach", trg:"あじ", src:"flavor / taste", pos:"noun", gender:null,
     note:"あじをみる = to taste (test the flavor).\nあじがうすい = the flavor is mild.",
     example:"A: あじはどうですか？\nB: おいしいです！あじがちょうどいいです。",
     exampleSrc:"A: How is the taste?\nB: Delicious! The flavor is just right.",
     funFact:"Japanese cuisine recognizes five basic あじ (tastes): あまい (sweet), しおからい (salty), すっぱい (sour), にがい (bitter), and うまみ (savory). Umami was discovered by Japanese scientist Ikeda Kikunae in 1908 and is now recognized worldwide as the fifth taste."},

    {type:"teach", trg:"レシピ", src:"recipe", pos:"noun", gender:null,
     note:"Katakana loanword from English 'recipe.'\nレシピをみる = to look at a recipe.",
     example:"A: このレシピはかんたんですよ。\nB: いいですね。つくってみます。",
     exampleSrc:"A: This recipe is simple.\nB: Nice. I will try making it.",
     funFact:"Japan's most popular recipe website, Cookpad, has over 3 million user-submitted レシピ. Japanese home cooks share detailed レシピ with photos of every step. The site revolutionized home cooking in Japan and has expanded to 70 countries."},

    // Quiz steps
    {type:"mc", q:"なべ is both a cooking tool and:",
     opts:["A winter hot pot dish","A type of knife","A plate","A bowl"],
     ans:"A winter hot pot dish",
     hint:"Families gather around this boiling communal d... in w.... Each region has its own style."},

    {type:"match", pairs:[
      {trg:"ほうちょう", src:"kitchen knife"},
      {trg:"さら", src:"plate"},
      {trg:"ちゃわん", src:"rice bowl"},
      {trg:"はし", src:"chopsticks"},
      {trg:"なべ", src:"pot"}
    ]},

    {type:"fb", s:"やさいをほうちょうで{1}ください。",
     a:["きって"],
     opts:["きって","にて","やいて","まぜて"],
     hint:"The て-form of the verb meaning 'to cut.' You use a knife for this action.",
     sSrc:"Please {1} the vegetables with a knife."},

    {type:"mc", q:"むす means:",
     opts:["To steam","To boil","To grill","To fry"],
     ans:"To steam",
     hint:"This cooking method uses hot water vapor. ちゃわんむし is a famous dish made this way."},

    {type:"fb", s:"たまごをよく{1}ください。",
     a:["まぜて"],
     opts:["まぜて","きって","やいて","にて"],
     hint:"Stir the egg well. This Group 2 verb means 'to mix.'",
     sSrc:"Please {1} the egg well."},

    {type:"mc", q:"Japanese chopstick etiquette forbids:",
     opts:["Sticking chopsticks upright in rice","Using chopsticks to eat sushi","Resting chopsticks on a plate","Holding chopsticks in the right hand"],
     ans:"Sticking chopsticks upright in rice",
     hint:"This action resembles a ritual performed at funerals and is considered very bad manners."},

    {type:"match", pairs:[
      {trg:"きる", src:"to cut"},
      {trg:"にる", src:"to simmer"},
      {trg:"やく", src:"to grill"},
      {trg:"むす", src:"to steam"},
      {trg:"まぜる", src:"to mix"}
    ]},

    {type:"fb", s:"{1}はどうですか？ちょうどいいですか？",
     a:["あじ"],
     opts:["あじ","いろ","かたち","サイズ"],
     hint:"The cook is asking about how the food tastes. This noun means 'flavor.'",
     sSrc:"How is the {1}? Is it just right?"}
  ]
};
export default BATCH7_L1;
