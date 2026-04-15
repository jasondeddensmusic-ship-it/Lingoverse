// Unit 13 Expansion L3 — Food Experiences
// Experience pattern with food, cooking, and dining vocabulary.

const LESSON_3 = {id:"jav2_u13l3", title:"たべもののけいけん", icon:"🍣", xp:15, board:true, steps:[
  {type:"intro", title:"たべもののけいけん",
   desc:"Talk about your food adventures using the experience pattern. Japanese cuisine is world-famous, and being able to discuss what you have and have not tried is essential for any visitor or food lover.",
   goals:["Describe food experiences with たことがある/ない","Learn Japanese food vocabulary","Talk about food preferences and recommendations"]},

  {type:"teach", trg:"なっとう", src:"natto (fermented soybeans)", pos:"noun", gender:null,
   note:"Sticky, pungent fermented soybeans. A polarizing Japanese food.\nKanji: 納豆.",
   example:"A: なっとうをたべたことがありますか？\nB: いいえ、まだたべたことがないです。",
   exampleSrc:"A: Have you eaten natto before?\nB: No, I have not eaten it yet.",
   funFact:"Natto divides even Japanese people. Eastern Japan (especially Ibaraki Prefecture) loves it, while western Japan is less enthusiastic. Made by fermenting soybeans with Bacillus subtilis bacteria, it is extremely nutritious. The sticky strings (ねばねば) are its signature."},

  {type:"teach", trg:"ラーメン", src:"ramen (noodle soup)", pos:"noun", gender:null,
   note:"Chinese-origin noodle soup that became quintessentially Japanese.\nMajor styles: しょうゆ, みそ, しお, とんこつ.",
   example:"A: にほんでラーメンをたべたことがありますか？\nB: はい、とてもおいしかったです！",
   exampleSrc:"A: Have you eaten ramen in Japan before?\nB: Yes, it was very delicious!",
   funFact:"Ramen is a national obsession in Japan. Every region has its own style: Hakata tonkotsu, Sapporo miso, Tokyo shoyu. Ramen museums, ranking sites, and late-night ramen runs (shime no ramen, the final ramen after drinking) are cultural institutions. Slurping noodles is not just acceptable but encouraged."},

  {type:"teach", trg:"おこのみやき", src:"savory Japanese pancake", pos:"noun", gender:null,
   note:"Batter-based dish with cabbage and toppings. Two main styles: Osaka and Hiroshima.\nKanji: お好み焼き.",
   example:"A: おこのみやきをつくったことがありますか？\nB: はい、ともだちにおしえてもらいました。",
   exampleSrc:"A: Have you made okonomiyaki before?\nB: Yes, a friend taught me.",
   funFact:"お好み焼き literally means 'grill what you like.' Osaka-style mixes everything in batter, while Hiroshima-style layers ingredients. Both cities fiercely debate which is better. Many restaurants have a hot plate (teppan) at your table so you can cook it yourself."},

  {type:"mc", q:"なっとうをたべたことがない means:", opts:["I ate natto","I like natto","I have never eaten natto","I do not like natto"], ans:"I have never eaten natto",
   hint:"た-form + ことがない = have n... done the action."},

  {type:"teach", trg:"たこやき", src:"octopus balls (fried snack)", pos:"noun", gender:null,
   note:"Ball-shaped snack with octopus inside. Osaka's famous street food.\nたこ (octopus) + やき (grilled).",
   example:"A: おおさかでたこやきをたべたことがありますか？\nB: はい、やたいでたべました。やけどしました！",
   exampleSrc:"A: Have you eaten takoyaki in Osaka before?\nB: Yes, I ate them at a street stall. I burned my mouth!",
   funFact:"Takoyaki is Osaka's most iconic street food. The ball shape comes from special hemispherical molds. A skilled takoyaki chef can flip dozens simultaneously using chopstick-like picks. They are served scorching hot inside, so the first bite often burns. Patience is advised."},

  {type:"teach", trg:"おちゃ", src:"tea (especially green tea)", pos:"noun", gender:null,
   note:"With honorific お. Generally means green tea in Japan. Kanji: お茶.\nこうちゃ = black tea. むぎちゃ = barley tea.",
   example:"A: にほんのおちゃをのんだことがありますか？\nB: はい、まっちゃがすきです。",
   exampleSrc:"A: Have you drunk Japanese tea before?\nB: Yes, I like matcha.",
   funFact:"In Japan, おちゃ defaults to green tea (りょくちゃ). Free green tea is served at every restaurant. まっちゃ (matcha) is the powdered form used in tea ceremony. むぎちゃ (barley tea) is the summer drink served cold in every household. Tea vending machines are on every corner."},

  {type:"teach", trg:"さしみ", src:"sashimi (raw fish slices)", pos:"noun", gender:null,
   note:"Thinly sliced raw fish or seafood. Different from すし (with rice).\nKanji: 刺身.",
   example:"A: さしみをたべたことがありますか？\nB: はい、サーモンのさしみがいちばんすきです。",
   exampleSrc:"A: Have you eaten sashimi before?\nB: Yes, salmon sashimi is my favorite.",
   funFact:"刺身 combines 刺 (stab/pierce) and 身 (body/flesh). Fresh sashimi is an art form. The knife skills (houcho-sabaki) of sashimi chefs require years of training. Japan's fish market culture, epitomized by the old Tsukiji and new Toyosu markets, ensures the freshest possible seafood."},

  {type:"fb", s:"にほんでラーメンを___ことがありますか？\n(Have you eaten ramen in Japan before?)", a:"たべた", opts:["たべた","たべる","たべて","たべ"], sSrc:"Have you eaten ramen in Japan before?",
   hint:"The experience pattern uses the past tense (た-form) before ことがある."},

  {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
   note:"From すすめる (to recommend). おすすめは？ = What do you recommend?\nVery useful in restaurants.",
   example:"A: おすすめはなんですか？\nB: このみせのラーメンがおすすめです。",
   exampleSrc:"A: What do you recommend?\nB: This shop's ramen is recommended.",
   funFact:"おすすめ is perhaps the most useful restaurant word for visitors in Japan. Asking おすすめはなんですか lets the staff guide you to their best dishes. Many menus highlight おすすめ items with stars or special markers. It works for any situation where you want expert advice."},

  {type:"teach", trg:"おいしかった", src:"was delicious (past)", pos:"adj", gender:null,
   note:"Past tense of おいしい. い-adjectives: drop い, add かった.\nおいしい becomes おいしかった.",
   example:"A: りょこうはどうでしたか？\nB: たべものがとてもおいしかったです。",
   exampleSrc:"A: How was the trip?\nB: The food was very delicious.",
   funFact:"おいしかったです is the standard phrase after finishing a meal someone prepared for you. In restaurants, ごちそうさまでした (thank you for the meal) is said upon leaving. Combining both sentiments: とてもおいしかったです。ごちそうさまでした。 This is the gold standard of dining etiquette."},

  {type:"mc", q:"おすすめはなんですか means:", opts:["What is the cheapest?","What is popular?","What do you recommend?","What is new?"], ans:"What do you recommend?",
   hint:"おすすめ comes from すすめる (to r...)."},

  {type:"teach", trg:"やたい", src:"street food stall", pos:"noun", gender:null,
   note:"Mobile food stalls at festivals, markets, and street corners.\nKanji: 屋台.",
   example:"A: やたいでたべたことがありますか？\nB: はい、おまつりでやきそばをたべました。",
   exampleSrc:"A: Have you eaten at a food stall before?\nB: Yes, I ate yakisoba at a festival.",
   funFact:"屋台 combines 屋 (shop/house) and 台 (stand/platform). Festival yatai serve classics like yakisoba, takoyaki, kakigori (shaved ice), and chocolate banana. Fukuoka's yatai along the river are famous nationwide, serving ramen and oden late into the night."},

  {type:"fb", s:"このみせのラーメンが___です。\n(This shop's ramen is recommended.)", a:"おすすめ", opts:["おすすめ","おいしい","にんき","すき"], sSrc:"This shop's ramen is recommended.",
   hint:"The word for a recommendation, from the verb meaning 'to recommend.'"},

  {type:"match", pairs:[{trg:"なっとう",src:"fermented soybeans"},{trg:"ラーメン",src:"ramen"},{trg:"おこのみやき",src:"savory pancake"},{trg:"たこやき",src:"octopus balls"}]},

  {type:"match", pairs:[{trg:"おちゃ",src:"tea"},{trg:"さしみ",src:"raw fish"},{trg:"おすすめ",src:"recommendation"},{trg:"やたい",src:"food stall"}]},

  {type:"mc", q:"おいしかった is the past tense of:", opts:["おいしくない","おいしい","おいしく","おいしさ"], ans:"おいしい",
   hint:"い-adjectives form past tense by dropping い and adding かった."},

  {type:"fb", s:"やたいでやきそばを___ことがあります。\n(I have eaten yakisoba at a food stall before.)", a:"たべた", opts:["たべた","たべる","たべて","たべ"], sSrc:"I have eaten yakisoba at a food stall before.",
   hint:"The experience pattern always uses the た-form (past tense) before こと."},

  {type:"tip", title:"Talking About Food Experiences",
   text:"Have tried: た-form + ことがある\nすしをたべたことがある (have eaten sushi)\n\nHave never tried: た-form + ことがない\nなっとうをたべたことがない (have never eaten natto)\n\nUseful restaurant phrases:\nおすすめはなんですか？ (What do you recommend?)\nおいしかったです！ (It was delicious!)\nごちそうさまでした。 (Thank you for the meal.)",
   deepDive:{title:"Food culture etiquette",
    text:"Essential dining phrases in order:\nBefore eating: いただきます (I humbly receive)\nDuring: おいしい！ (Delicious!)\nAfter: ごちそうさまでした (Thank you for the feast)\n\nAt restaurants:\nおすすめはなんですか？ (What do you recommend?)\nこれをおねがいします。 (This one, please.)\nおかいけいおねがいします。 (Check, please.)\n\nIn Japan, it is polite to finish all your food. Leaving food can imply it was not good. If portions are too large, say すみません、おなかがいっぱいです (Sorry, I am full)."}},
]};
export default LESSON_3;
