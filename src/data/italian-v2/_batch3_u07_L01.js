// Batch 3 — Unit 07, Lesson 1: Metodi di cottura (Cooking Methods)
const BATCH3_U07_L1 = {
  id:"itv2_u07l_b3_1", title:"Metodi di cottura", icon:"\uD83D\uDD25", xp:15, board:true,
  steps:[
    {type:"intro", title:"Metodi di cottura",
     desc:"Learn Italian cooking methods and preparation vocabulary. Understanding how food is prepared helps you order confidently at any restaurant.",
     goals:["Name common Italian cooking methods","Describe how dishes are prepared","Order with confidence using cooking vocabulary"]},

    {type:"teach", trg:"arrosto", src:"roasted / roast", pos:"adj", gender:null,
     note:"Invariable adjective. 'Pollo arrosto' = roast chicken.\nFrom Germanic 'raustjan' (to roast).",
     example:"A: Il pollo arrosto e buono qui?\nB: Si, e la specialita della casa.",
     exampleSrc:"A: Is the roast chicken good here?\nB: Yes, it is the house specialty.",
     funFact:"'Arrosto' is one of the most common cooking terms in Italy. Sunday 'arrosto' (roast) is a family tradition. The word came to Italian from Germanic languages during the medieval period, replacing the Latin term."},

    {type:"teach", trg:"alla griglia", src:"grilled", pos:"adj", gender:null,
     note:"Prepositional phrase, invariable. 'Pesce alla griglia' = grilled fish.\n'Griglia' = grill/grate.",
     example:"A: Vorrei il pesce alla griglia.\nB: Con limone o senza?",
     exampleSrc:"A: I would like the grilled fish.\nB: With lemon or without?",
     funFact:"Grilling is hugely popular in Italy, especially in summer. 'Grigliata' means a barbecue party. Italian grilling favors simplicity: olive oil, salt, and lemon. Heavy sauces are considered unnecessary when ingredients are fresh."},

    {type:"teach", trg:"fritto", src:"fried", pos:"adj", gender:null,
     note:"Adjective. Feminine: fritta. Past participle of 'friggere' (to fry).\nPlural: fritti/fritte.",
     example:"A: Le verdure fritte sono leggere?\nB: No, sono piuttosto pesanti!",
     exampleSrc:"A: Are the fried vegetables light?\nB: No, they are quite heavy!",
     funFact:"'Fritto misto' (mixed fry) is a beloved dish across Italy. In the south, it often features seafood. In the north, it can include meat and vegetables. Naples is famous for 'pizza fritta' (fried pizza), a street food institution."},

    {type:"teach", trg:"al forno", src:"baked / oven-cooked", pos:"adj", gender:null,
     note:"Prepositional phrase, invariable. 'Forno' = oven.\n'Lasagna al forno' = baked lasagna.",
     example:"A: Le patate al forno sono pronte.\nB: Perfetto, adoro le patate al forno.",
     exampleSrc:"A: The baked potatoes are ready.\nB: Perfect, I love baked potatoes.",
     funFact:"Italian ovens have been central to cooking since Roman times. 'Forno' also means 'bakery' in Italian. 'Il forno del paese' (the village bakery) was historically the social heart of every Italian town, where people brought their bread dough to be baked communally."},

    {type:"teach", trg:"al vapore", src:"steamed", pos:"adj", gender:null,
     note:"Prepositional phrase, invariable. 'Vapore' = steam.\n'Verdure al vapore' = steamed vegetables.",
     example:"A: Il pesce al vapore e piu sano.\nB: Si, ma ha meno sapore.",
     exampleSrc:"A: Steamed fish is healthier.\nB: Yes, but it has less flavor.",
     funFact:"Steaming is considered the healthiest Italian cooking method. Italian dietitians often recommend 'cucina al vapore' for people watching their weight. However, many Italians find steamed food bland and prefer to add olive oil and herbs."},

    {type:"teach", trg:"in umido", src:"stewed / braised", pos:"adj", gender:null,
     note:"Prepositional phrase, invariable. 'Umido' = damp/moist.\n'Coniglio in umido' = stewed rabbit.",
     example:"A: Il coniglio in umido e tipico della Liguria.\nB: Lo voglio provare!",
     exampleSrc:"A: Stewed rabbit is typical of Liguria.\nB: I want to try it!",
     funFact:"'In umido' literally means 'in moisture.' Stewing allows tough cuts of meat to become tender. Each Italian region has signature stewed dishes: Liguria has rabbit, Tuscany has wild boar, and Sardinia has lamb."},

    {type:"teach", trg:"la ricetta", src:"the recipe", pos:"noun", gender:"f",
     note:"Feminine. Same word as 'prescription' in medical contexts.\nFrom Latin 'recepta' (things received).",
     example:"A: Mi dai la ricetta della torta?\nB: Certo, e molto semplice.",
     exampleSrc:"A: Will you give me the cake recipe?\nB: Of course, it is very simple.",
     funFact:"Italian families guard their recipes jealously. A 'ricetta di famiglia' (family recipe) is passed down through generations. Many Italian grandmothers cook without written recipes, measuring by eye. This tradition is called 'cucinare a occhio' (cooking by eye)."},

    {type:"teach", trg:"l'ingrediente", src:"the ingredient", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli ingredienti.\nFrom Latin 'ingrediens' (entering into).",
     example:"A: Quali sono gli ingredienti?\nB: Pomodoro, mozzarella e basilico.",
     exampleSrc:"A: What are the ingredients?\nB: Tomato, mozzarella, and basil.",
     funFact:"Italian cooking philosophy values few, quality ingredients over complex combinations. A classic Margherita pizza has just three ingredients representing the Italian flag: red tomato, white mozzarella, green basil. Simplicity is the hallmark of Italian cuisine."},

    {type:"teach", trg:"condire", src:"to season / to dress", pos:"verb", gender:null,
     note:"Regular -ire verb. 'Condire l'insalata' = to dress the salad.\nFrom Latin 'condire' (to preserve, season).",
     example:"A: Come condisci l'insalata?\nB: Con olio, sale e limone.",
     exampleSrc:"A: How do you dress the salad?\nB: With oil, salt, and lemon.",
     funFact:"In Italy, salad is always dressed at the table, never pre-dressed. Italians use 'olio, sale e aceto' (oil, salt, and vinegar) as standard. Bottled salad dressings barely exist in Italian supermarkets. Dressing your own salad is considered a basic life skill."},

    {type:"teach", trg:"mescolare", src:"to mix / to stir", pos:"verb", gender:null,
     note:"Regular -are verb. 'Mescolare la pasta' = to stir the pasta.\nFrom Latin 'misculare' (to mix).",
     example:"A: Mescola bene la salsa.\nB: Si, per non farla attaccare.",
     exampleSrc:"A: Stir the sauce well.\nB: Yes, so it does not stick.",
     funFact:"'Mescolare' is essential in Italian cooking. Risotto, in particular, requires constant stirring ('mescolare continuamente') for 18-20 minutes. This technique releases starch from the rice, creating the creamy texture that defines a perfect risotto."},

    {type:"teach", trg:"tagliare", src:"to cut / to slice", pos:"verb", gender:null,
     note:"Regular -are verb. 'Tagliare a fette' = to slice.\nFrom Late Latin 'taliare' (to cut).",
     example:"A: Taglia il pane, per favore.\nB: A fette sottili o spesse?",
     exampleSrc:"A: Cut the bread, please.\nB: Thin or thick slices?",
     funFact:"From the same root as 'tagliatelle' (cut pasta). Many pasta names describe their cut: tagliatelle (cut strips), tagliolini (thin cuts), taglierini (even thinner). The knife and cutting board ('tagliere') are named from the same family."},

    {type:"teach", trg:"bollire", src:"to boil", pos:"verb", gender:null,
     note:"Regular -ire verb. 'L'acqua bolle' = the water is boiling.\nFrom Latin 'bullire' (to bubble).",
     example:"A: L'acqua bolle. Butto la pasta?\nB: Si, non dimenticare il sale!",
     exampleSrc:"A: The water is boiling. Shall I add the pasta?\nB: Yes, do not forget the salt!",
     funFact:"Boiling pasta is an Italian ritual with strict rules. The water must be at a full boil before adding pasta. Italians use about one liter of water per 100 grams of pasta. And the golden rule: always salt the water generously."},

    {type:"teach", trg:"il cucchiaio", src:"the spoon", pos:"noun", gender:"m",
     note:"Masculine. Plural: i cucchiai.\nFrom Latin 'cochlearium' (snail shell, used as a spoon).",
     example:"A: Mi passi il cucchiaio?\nB: Eccolo.",
     exampleSrc:"A: Can you pass me the spoon?\nB: Here it is.",
     funFact:"Italians eat certain pasta shapes with a spoon under the fork to help twirl long noodles. However, purists insist you should only use a fork for spaghetti. The 'cucchiaio' is essential for soups, risotto, and gelato."},

    {type:"teach", trg:"la forchetta", src:"the fork", pos:"noun", gender:"f",
     note:"Feminine. Diminutive of 'forca' (pitchfork).\n'Forchetta' literally means 'little fork.'",
     example:"A: Questa forchetta e sporca.\nB: Chiedo al cameriere di cambiarla.",
     exampleSrc:"A: This fork is dirty.\nB: I will ask the waiter to change it.",
     funFact:"The fork spread across Europe from Italy. It was introduced to Venice from Byzantium in the 11th century. For centuries, other Europeans considered using a fork to be an effeminate Italian affectation. It took until the 18th century for forks to become standard in France and England."},

    // Quiz steps
    {type:"mc", q:"What does 'alla griglia' mean?",
     opts:["Baked in the oven","Steamed gently","Fried in oil","Grilled over heat"],
     ans:"Grilled over heat",
     hint:"This method uses direct h... from below. Italians love it for fish and vegetables, especially in summer barbecues."},

    {type:"fb", s:"Il pollo {1} e la specialita della casa.",
     a:["arrosto"],
     opts:["arrosto","fritto","bollito","crudo"],
     hint:"Cooked in the oven until golden brown. A classic Sunday family meal in Italy.",
     sSrc:"The {1} chicken is the house specialty."},

    {type:"match", pairs:[
      {trg:"arrosto", src:"roasted"},
      {trg:"fritto", src:"fried"},
      {trg:"al forno", src:"baked"},
      {trg:"al vapore", src:"steamed"},
      {trg:"in umido", src:"stewed"}
    ]},

    {type:"mc", q:"What is the Italian philosophy about ingredients?",
     opts:["Use many spices for complexity","Few quality ingredients over complex mixes","Always use pre-made sauces","Ingredients do not matter if the technique is right"],
     ans:"Few quality ingredients over complex mixes",
     hint:"A Margherita pizza has just three components. Simplicity with q... is the hallmark of Italian cuisine."},

    {type:"fb", s:"Come {1} l'insalata?",
     a:["condisci"],
     opts:["condisci","mescoli","tagli","bolli"],
     hint:"How do you dress the salad? In Italy, salad is always dressed at the table, never pre-mixed.",
     sSrc:"How do you {1} the salad?"},

    {type:"mc", q:"Which cooking method requires constant stirring for risotto?",
     opts:["Bollire (boiling only)","Friggere (frying)","Al vapore (steaming)","Mescolare continuamente (constant stirring)"],
     ans:"Mescolare continuamente (constant stirring)",
     hint:"18-20 minutes of s... releases starch, creating risotto's signature creamy texture. Patience is key."},

    {type:"fb", s:"L'acqua {1}. Butto la pasta?",
     a:["bolle"],
     opts:["bolle","taglia","condisce","mescola"],
     hint:"The water is bubbling. It has reached 100 degrees. Time to add the pasta with salt.",
     sSrc:"The water is {1}. Shall I add the pasta?"},

    {type:"mc", q:"Where did the table fork spread to Europe from?",
     opts:["France via royal courts","England via merchant traders","Spain via colonial trade","Italy via Venetian Byzantine contacts"],
     ans:"Italy via Venetian Byzantine contacts",
     hint:"The fork arrived in Venice from Byzantium in the 11th century. Other Europeans considered it an overly refined Italian habit for centuries."}
  ,{type:"match",pairs:[{trg:"alla griglia",src:"grilled"},{trg:"la ricetta",src:"the recipe"},{trg:"condire",src:"to season / to dress"},{trg:"tagliare",src:"to cut / to slice"},{trg:"il cucchiaio",src:"the spoon"},{trg:"la forchetta",src:"the fork"}]},{type:"mc",q:"How do you say \"ingredient\" in Italian?",opts:["la finestra","l'ingrediente","il tavolo","la bicicletta"],ans:"l'ingrediente",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_U07_L1;
