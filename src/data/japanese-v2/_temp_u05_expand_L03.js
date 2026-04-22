// Unit 05 Expansion L05. Cooking Verbs & Kitchen Words
const LESSON_5 = {
  id:"jav2_u5l5", title:"りょうり", icon:"🔪", xp:15, board:true,
  steps:[
    {type:"intro", title:"りょうり",
     desc:"Learn cooking-related vocabulary: the verbs for preparing food, kitchen tools, and cooking methods. Japanese cooking vocabulary reveals the importance of food preparation in the culture.",
     goals:["Use basic cooking verbs: cut, boil, fry, grill","Name essential kitchen items","Describe how food is prepared"]},

    {type:"teach", trg:"りょうり", src:"cooking / cuisine / dish", pos:"noun", gender:null,
     note:"Both the act of cooking and the resulting dish. りょうりする = to cook.\nKanji: 料理.",
     example:"A: りょうりがすきですか？\nB: はい、にほんりょうりをよくつくります。",
     exampleSrc:"A: Do you like cooking?\nB: Yes, I often make Japanese food.",
     funFact:"料 (measure/material) + 理 (reason/arrange). Cooking is literally 'arranging materials with reason.' Japanese cooking emphasizes seasonal ingredients (shun), careful knife work, and presentation (moritsuke). The aesthetic of food is as important as taste."},

    {type:"teach", trg:"つくる", src:"to make / to cook", pos:"verb", gender:null,
     note:"A u-verb (godan). General verb for making anything, including food.\nKanji: 作る.",
     example:"A: きょうのばんごはん、なにをつくりますか？\nB: カレーをつくります。",
     exampleSrc:"A: What are you making for dinner tonight?\nB: I'm making curry.",
     funFact:"Tsukuru is the general 'make' verb covering food, art, music, and objects. For cooking specifically, ryouri suru (to do cooking) is more precise. But tsukuru is perfectly natural: gohan wo tsukuru (make a meal) is everyday Japanese."},

    {type:"teach", trg:"きる", src:"to cut", pos:"verb", gender:null,
     note:"A u-verb (godan). Same pronunciation as きる (to wear) but different kanji.\nKanji: 切る.",
     example:"A: やさいをきってください。\nB: はい、ちいさくきりますか？",
     exampleSrc:"A: Please cut the vegetables.\nB: Yes, shall I cut them small?",
     funFact:"切る (to cut) is a different word from 着る (to wear) despite sounding the same. Japanese knife skills (hocho-sabaki) are legendary. A Japanese chef's knife (wa-bocho) is sharpened on one side only, creating an incredibly precise cutting edge."},

    {type:"teach", trg:"にる", src:"to boil / to simmer", pos:"verb", gender:null,
     note:"A ru-verb (ichidan). Key Japanese cooking method.\nKanji: 煮る.",
     example:"A: やさいをにましょう。\nB: なんぷんぐらいにますか？",
     exampleSrc:"A: Let's boil the vegetables.\nB: About how many minutes should we boil them?",
     funFact:"Niru covers both boiling and simmering. Nimono (simmered dish) is a fundamental category of Japanese cooking. Nikujaga (meat and potato stew) is called 'the taste of mom' (ofukuro no aji) and is the quintessential home-cooked nimono."},

    {type:"mc", q:"つくる can mean:", opts:["To make anything","To destroy","Only to cook","Only to build"], ans:"To make anything",
     hint:"This versatile verb covers cooking, building, creating, and producing."},

    {type:"teach", trg:"やく", src:"to grill / to bake / to fry", pos:"verb", gender:null,
     note:"A u-verb (godan). Covers grilling, baking, pan-frying, and roasting.\nKanji: 焼く.",
     example:"A: にくをやきましょう。\nB: はい、しおとコショウもいりますか？",
     exampleSrc:"A: Let's grill the meat.\nB: Yes, do we need salt and pepper too?",
     funFact:"Yaku is extremely versatile: yakitori (grilled chicken), yakiniku (grilled meat), takoyaki (grilled octopus balls), okonomiyaki (grilled pancake), yakisoba (fried noodles). The yaki- prefix is one of the most common in Japanese food names."},

    {type:"teach", trg:"あげる", src:"to deep-fry", pos:"verb", gender:null,
     note:"A ru-verb (ichidan). Specifically for deep-frying in oil.\nKanji: 揚げる.",
     example:"A: てんぷらをあげましょう。\nB: あぶらはもうあたたかいですか？",
     exampleSrc:"A: Let's deep-fry tempura.\nB: Is the oil hot yet?",
     funFact:"Ageru (to raise/lift) became 'to deep-fry' because food rises to the surface of oil when cooked. Agemono (fried things) is a whole category: tempura, tonkatsu (pork cutlet), karaage (fried chicken). Japanese fried food is famous for its light, crispy batter."},

    {type:"teach", trg:"むす", src:"to steam", pos:"verb", gender:null,
     note:"A u-verb (godan). Steaming is a gentle, healthy cooking method prized in Japan.\nKanji: 蒸す.",
     example:"A: さかなをむしましょう。\nB: ヘルシーでいいですね。",
     exampleSrc:"A: Let's steam the fish.\nB: Healthy and good.",
     funFact:"Mushimono (steamed dishes) are valued for preserving natural flavors. Chawanmushi (steamed egg custard) is a beloved side dish. Mushigyouza (steamed dumplings) pair perfectly with soy sauce and vinegar. The gentle heat of steaming is considered the most refined cooking method."},

    {type:"fb", s:"にくを{1}ましょう。",
     a:["やき"],
     opts:["やき","にみ","むし","きり"],
     hint:"The polite stem of the verb for grilling, baking, or pan-frying.",
     sSrc:"Let's grill the meat."},

    {type:"teach", trg:"なべ", src:"pot / pan", pos:"noun", gender:null,
     note:"General word for cooking pots. Also a hot pot dish: なべりょうり.\nKanji: 鍋.",
     example:"A: おおきいなべをつかいましょう。\nB: スープをつくりますか？",
     exampleSrc:"A: Let's use the big pot.\nB: Are you making soup?",
     funFact:"Nabe means both the cooking vessel and the communal hot pot dish. Nabe-ryouri (hot pot cooking) is a beloved winter tradition. Family and friends gather around a pot on the table, adding ingredients and sharing from the same pot. It builds togetherness."},

    {type:"teach", trg:"さら", src:"plate / dish", pos:"noun", gender:null,
     note:"For serving food. Counter: まい (for flat objects).\nKanji: 皿.",
     example:"A: おさらにもりつけましょう。\nB: きれいにもりつけてください。",
     exampleSrc:"A: Let's plate the food.\nB: Please plate it beautifully.",
     funFact:"Japanese food presentation (moritsuke) is an art. Chefs consider color, height, space, and the shape of the plate. Different seasons call for different plate styles. Round plates for spring, square for autumn. The space left empty on a plate is as important as the food on it."},

    {type:"teach", trg:"はし", src:"chopsticks", pos:"noun", gender:null,
     note:"The essential Japanese eating utensil. Same sound as はし (bridge).\nKanji: 箸.",
     example:"A: はしをじょうずにつかいますね。\nB: ありがとう。れんしゅうしました。",
     exampleSrc:"A: You use chopsticks well.\nB: Thanks. I practiced.",
     funFact:"Hashi (chopsticks), hashi (bridge), and hashi (edge) are all homophones. Chopstick etiquette is strict: never stick them upright in rice (funeral ritual), never pass food between chopsticks (another funeral ritual), never point with them. My-hashi (personal chopsticks) movement promotes reusable sets."},

    {type:"teach", trg:"ほうちょう", src:"kitchen knife", pos:"noun", gender:null,
     note:"Japanese kitchen knives are world-renowned for quality.\nKanji: 包丁.",
     example:"A: このほうちょうはよくきれますね。\nB: にほんせいです。",
     exampleSrc:"A: This knife cuts well.\nB: It is Japanese-made.",
     funFact:"包 (wrap) + 丁 (counter/just right). Japanese knives (wa-bocho) are single-beveled, giving extreme precision. Sakai city near Osaka has made knives for 600 years. Professional chefs worldwide seek Japanese knives. Some cost over 100,000 yen."},

    {type:"mc", q:"やく covers all EXCEPT:", opts:["Baking","Deep-frying","Pan-frying","Grilling"], ans:"Deep-frying",
     hint:"D...-f... has its own specific verb: ageru."},

    {type:"match", pairs:[
      {trg:"きる", src:"to cut"},
      {trg:"にる", src:"to boil/simmer"},
      {trg:"やく", src:"to grill/bake"},
      {trg:"あげる", src:"to deep-fry"}
    ]},

    {type:"match", pairs:[
      {trg:"なべ", src:"pot"},
      {trg:"さら", src:"plate"},
      {trg:"はし", src:"chopsticks"},
      {trg:"ほうちょう", src:"kitchen knife"}
    ]},

    {type:"fb", s:"てんぷらを{1}ましょう。",
     a:["あげ"],
     opts:["あげ","やき","にみ","むし"],
     hint:"The specific verb for cooking food submerged in hot oil.",
     sSrc:"Let's deep-fry tempura."},

    {type:"mc", q:"はし (chopsticks) etiquette forbids:", opts:["Using them for soup","Putting them on a rest","Sticking them upright in rice","Eating noodles with them"], ans:"Sticking them upright in rice",
     hint:"This action mirrors a Buddhist funeral ritual and is deeply taboo."},

    {type:"mc", q:"なべ means both:", opts:["Knife and fork","Pan and spoon","Pot and plate","Pot and hot pot dish"], ans:"Pot and hot pot dish",
     hint:"The cooking vessel AND the communal winter meal share this name."},
  ]
};
export default LESSON_5;
