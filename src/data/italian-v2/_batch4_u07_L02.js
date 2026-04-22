// Batch 4. Unit 07, Lesson 2: Dietary Needs & Food Allergies
const BATCH4_U07_L2 = {
  id:"itv2_u07l_b4_2", title:"Allergie e diete", icon:"\u26A0\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Allergie e diete",
     desc:"Learn essential vocabulary for communicating dietary needs, allergies, and food preferences at restaurants.",
     goals:["Communicate food allergies","Express dietary restrictions","Ask about ingredients"]},

    {type:"teach", trg:"l'allergia", src:"the allergy", pos:"noun", gender:"f",
     note:"Feminine. Plural: le allergie. 'Sono allergico a...' = I am allergic to...\nFrom Greek 'allos' (other) + 'ergon' (work).",
     example:"A: Ho un'allergia alle arachidi.\nB: Lo dico subito al cuoco.",
     exampleSrc:"A: I have a peanut allergy.\nB: I'll tell the chef right away.",
     funFact:"Italian restaurants take allergies seriously since EU regulations require allergen menus. The 14 major allergens must be listed. Saying 'sono allergico/a' immediately gets a waiter's full attention."},

    {type:"teach", trg:"allergico", src:"allergic", pos:"adj", gender:"m",
     note:"Masculine. Feminine: allergica. 'Sono allergico al glutine' = I am allergic to gluten.\nAlways used with 'a' (to).",
     example:"A: E allergico a qualcosa?\nB: Si, sono allergico al lattosio.",
     exampleSrc:"A: Are you allergic to anything?\nB: Yes, I am allergic to lactose.",
     funFact:"In Italian, you say 'allergico A' (allergic to), not 'allergico DI.' This is a common preposition error. The feminine form 'allergica' is important for women to use when speaking about themselves."},

    {type:"teach", trg:"vegetariano", src:"vegetarian", pos:"adj", gender:"m",
     note:"Masculine. Feminine: vegetariana. Both an adjective and noun.\n'Sono vegetariano/a' = I am vegetarian.",
     example:"A: Avete piatti vegetariani?\nB: Si, abbiamo pasta e risotto senza carne.",
     exampleSrc:"A: Do you have vegetarian dishes?\nB: Yes, we have pasta and risotto without meat.",
     funFact:"Italy is surprisingly vegetarian-friendly. Many traditional dishes are naturally meatless: pasta al pomodoro, margherita pizza, risotto ai funghi, caprese salad. Italy has one of Europe's highest rates of vegetarianism."},

    {type:"teach", trg:"vegano", src:"vegan", pos:"adj", gender:"m",
     note:"Masculine. Feminine: vegana. Both adjective and noun.\n'Senza prodotti animali' = without animal products.",
     example:"A: Sono vegana. Avete opzioni per me?\nB: Certo, la pasta con le verdure.",
     exampleSrc:"A: I am vegan. Do you have options for me?\nB: Of course, the pasta with vegetables.",
     funFact:"Veganism is growing in Italy but can clash with traditional cuisine that relies on Parmigiano, eggs, and butter. Italian cities like Milan and Turin are leading the vegan restaurant boom. Rome now has many dedicated vegan eateries."},

    {type:"teach", trg:"intollerante", src:"intolerant (food)", pos:"adj", gender:null,
     note:"Same form for masculine and feminine. 'Intollerante al lattosio' = lactose intolerant.\nMedical term used commonly.",
     example:"A: Sono intollerante al glutine.\nB: Abbiamo la pasta senza glutine.",
     exampleSrc:"A: I am gluten intolerant.\nB: We have gluten-free pasta.",
     funFact:"'Intolleranza al lattosio' (lactose intolerance) is common in southern Italy. Many traditional southern dishes use sheep's cheese (pecorino) which is naturally lower in lactose than cow's cheese. The south adapted centuries ago."},

    {type:"teach", trg:"senza", src:"without", pos:"prep", gender:null,
     note:"Preposition. 'Senza glutine' = gluten-free. 'Senza zucchero' = sugar-free.\nOpposite: con (with).",
     example:"A: Avete il pane senza glutine?\nB: Si, lo abbiamo.",
     exampleSrc:"A: Do you have gluten-free bread?\nB: Yes, we have it.",
     funFact:"'Senza' is the key word for dietary restrictions. Italian supermarkets have large 'senza glutine' sections. Italy was one of the first countries to screen all children for celiac disease, leading to widespread gluten-free options."},

    {type:"teach", trg:"il glutine", src:"gluten", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'gluten' (glue).\n'Senza glutine' = gluten-free. 'Celiaco' = celiac.",
     example:"A: Questa pasta contiene glutine?\nB: No, e fatta di riso.",
     exampleSrc:"A: Does this pasta contain gluten?\nB: No, it is made from rice.",
     funFact:"Italy has one of the highest rates of diagnosed celiac disease in the world. Italian law guarantees free gluten-free food to diagnosed celiacs through the national health system. Every Italian pharmacy stocks gluten-free products."},

    {type:"teach", trg:"il lattosio", src:"lactose", pos:"noun", gender:"m",
     note:"Masculine. From 'latte' (milk) + '-osio' (sugar suffix).\n'Senza lattosio' = lactose-free.",
     example:"A: Il gelato contiene lattosio?\nB: Quello alla frutta no.",
     exampleSrc:"A: Does the ice cream contain lactose?\nB: The fruit one does not.",
     funFact:"Italy produces excellent 'senza lattosio' versions of its classic cheeses and dairy products. Lactose-free mozzarella, ricotta, and gelato are widely available. Italian food science adapted traditional recipes for modern dietary needs."},

    {type:"teach", trg:"le arachidi", src:"peanuts", pos:"noun", gender:"f",
     note:"Feminine plural. Singular: l'arachide.\nA serious allergen. 'Burro di arachidi' = peanut butter.",
     example:"A: Contiene arachidi questo dolce?\nB: No, solo mandorle.",
     exampleSrc:"A: Does this dessert contain peanuts?\nB: No, only almonds.",
     funFact:"Peanut butter is virtually unknown in traditional Italian cuisine. Italians find the idea of putting peanut butter on bread strange. However, peanuts appear in some Italian pastries and snacks, making the allergy communication important."},

    {type:"teach", trg:"il grano", src:"wheat / grain", pos:"noun", gender:"m",
     note:"Masculine. 'Farina di grano' = wheat flour.\n'Grano duro' = durum wheat (for pasta).",
     example:"A: E fatto con farina di grano?\nB: Si, contiene grano.",
     exampleSrc:"A: Is it made with wheat flour?\nB: Yes, it contains wheat.",
     funFact:"Italy uses 'grano duro' (durum wheat) for pasta and 'grano tenero' (soft wheat) for bread and pastries. The distinction is crucial in Italian cuisine. True Italian dried pasta must be made from 100% durum wheat by law."},

    {type:"teach", trg:"contenere", src:"to contain", pos:"verb", gender:null,
     note:"Irregular. Like 'tenere.' 'Contiene noci?' = Does it contain nuts?\nEssential for allergen questions.",
     example:"A: Questo piatto contiene uova?\nB: Si, contiene uova e latte.",
     exampleSrc:"A: Does this dish contain eggs?\nB: Yes, it contains eggs and milk.",
     funFact:"'Contenere' conjugates like 'tenere' (to hold): contiene, contengono. At Italian restaurants, asking 'contiene...?' is the safest way to check for allergens. Staff are trained to answer these questions accurately."},

    {type:"teach", trg:"evitare", src:"to avoid", pos:"verb", gender:null,
     note:"Regular -are verb. 'Devo evitare il lattosio' = I must avoid lactose.\nFrom Latin 'evitare.'",
     example:"A: Devo evitare il glutine.\nB: Allora prenda il risotto.",
     exampleSrc:"A: I must avoid gluten.\nB: Then have the risotto.",
     funFact:"'Evitare' is essential for dietary communication. Italian doctors frequently prescribe dietary avoidance: 'evitare i latticini' (avoid dairy), 'evitare i fritti' (avoid fried foods). Food and medicine are closely linked in Italian culture."},

    {type:"teach", trg:"fresco", src:"fresh", pos:"adj", gender:"m",
     note:"Masculine. Feminine: fresca. 'Prodotti freschi' = fresh products.\nAlso means 'cool' (temperature).",
     example:"A: Il pesce e fresco?\nB: Freschissimo! Arriva ogni mattina.",
     exampleSrc:"A: Is the fish fresh?\nB: Very fresh! It arrives every morning.",
     funFact:"Freshness is a core Italian food value. 'Fresco di giornata' (today's fresh) is the highest compliment for seafood. Italian markets open at dawn to ensure the freshest produce. Many Italians still shop daily for fresh food."},

    {type:"teach", trg:"biologico", src:"organic", pos:"adj", gender:"m",
     note:"Masculine. Feminine: biologica. Shortened to 'bio.'\n'Prodotti biologici' = organic products.",
     example:"A: Preferisco i prodotti biologici.\nB: Il mercato ha una sezione bio.",
     exampleSrc:"A: I prefer organic products.\nB: The market has an organic section.",
     funFact:"Italy is Europe's largest organic farming country by number of farms. 'Bio' labels are everywhere in Italian supermarkets. The organic movement aligns naturally with Italian values of quality ingredients and traditional farming methods."},

    {type:"teach", trg:"digerire", src:"to digest", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc-). 'Non digerisco il latte' = I don't digest milk.\n'La digestione' = digestion.",
     example:"A: Non digerisco bene i fritti.\nB: Prova qualcosa di leggero.",
     exampleSrc:"A: I don't digest fried food well.\nB: Try something light.",
     funFact:"Italians are deeply concerned with 'digestione.' After a big meal, an 'ammazzacaffe' (literally 'coffee killer,' a digestif liqueur) is standard. The belief that cold water after a meal harms digestion is widespread in Italy."},

    // Quiz steps
    {type:"mc", q:"Come dici al cameriere che sei allergico ai latticini?",
     opts:["Sono allergico al lattosio","Sono allergico al glutine","Non mangio pesce","Sono vegetariano"],
     ans:"Sono allergico al lattosio",
     hint:"L... is the sugar found in milk and dairy products."},

    {type:"fb", s:"Avete la pasta {1} glutine?",
     a:["senza"], opts:["senza","con","di","al"],
     hint:"You need the preposition meaning 'without' to ask for gluten-free.",
     sSrc:"Do you have {1} gluten pasta?"},

    {type:"match", pairs:[
      {trg:"vegetariano", src:"vegetarian"},
      {trg:"vegano", src:"vegan"},
      {trg:"allergico", src:"allergic"},
      {trg:"intollerante", src:"intolerant"},
      {trg:"biologico", src:"organic"}
    ]},

    {type:"mc", q:"Perche l'Italia ha molte opzioni senza glutine?",
     opts:["Restaurants are required to remove gluten","Italy screens all children for celiac disease","Gluten-free is a trend","Italian wheat has no gluten"],
     ans:"Italy screens all children for celiac disease",
     hint:"I... has one of the highest diagnosed c... rates due to national screening."},

    {type:"fb", s:"Questo dolce {1} arachidi e noci.",
     a:["contiene"], opts:["contiene","evita","digerisce","preferisce"],
     hint:"The dessert has peanuts and nuts in it.",
     sSrc:"This dessert {1} peanuts and nuts."},

    {type:"mc", q:"Cosa significa 'fresco di giornata'?",
     opts:["Freshly frozen","Freshly imported","Fresh from today","Fresh from the fridge"],
     ans:"Fresh from today",
     hint:"This expression is the highest compliment for seafood and produce."},

    {type:"fb", s:"Devo {1} i latticini, sono intollerante.",
     a:["evitare"], opts:["evitare","mangiare","contenere","digerire"],
     hint:"Because of your intolerance, you must stay away from dairy.",
     sSrc:"I must {1} dairy, I am intolerant."},

    {type:"mc", q:"Cos'e un 'ammazzacaffe'?",
     opts:["A very strong coffee","A coffee-flavored cake","A coffee substitute","A digestif liqueur after coffee"],
     ans:"A digestif liqueur after coffee",
     hint:"Literally 'c... killer,' this drink aids digestion a... a heavy meal."}
  ,{type:"match",pairs:[{trg:"il glutine",src:"gluten"},{trg:"il lattosio",src:"lactose"},{trg:"le arachidi",src:"peanuts"},{trg:"il grano",src:"wheat / grain"},{trg:"contenere",src:"to contain"},{trg:"fresco",src:"fresh"}]},{type:"match",pairs:[{trg:"digerire",src:"to digest"}]},{type:"mc",q:"How do you say \"allergy\" in Italian?",opts:["l'allergia","la finestra","il tavolo","la bicicletta"],ans:"l'allergia",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH4_U07_L2;
