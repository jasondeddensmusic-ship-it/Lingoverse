// Batch 3 — Unit 07, Lesson 2: Restrizioni alimentari (Dietary Restrictions)
const BATCH3_U07_L2 = {
  id:"itv2_u07l_b3_2", title:"Restrizioni alimentari", icon:"\uD83E\uDD66", xp:15, board:true,
  steps:[
    {type:"intro", title:"Restrizioni alimentari",
     desc:"Learn how to communicate dietary needs and restrictions in Italian. Whether you have allergies, follow a special diet, or just want to eat healthier, this vocabulary is essential.",
     goals:["Communicate food allergies and intolerances","Describe dietary preferences","Ask about ingredients in dishes"]},

    {type:"teach", trg:"l'allergia", src:"the allergy", pos:"noun", gender:"f",
     note:"Feminine. Plural: le allergie.\n'Allergia alimentare' = food allergy.",
     example:"A: Ha qualche allergia?\nB: Si, sono allergico alle noci.",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I am allergic to nuts.",
     funFact:"Italian restaurants are legally required to display allergen information. The EU regulation covers 14 major allergens. Waiters in Italy are trained to ask about allergies, and menus often use numbered codes to indicate which dishes contain common allergens."},

    {type:"teach", trg:"intollerante", src:"intolerant (food)", pos:"adj", gender:null,
     note:"Adjective. Same form masculine/feminine (-e ending).\n'Intollerante al lattosio' = lactose intolerant.",
     example:"A: Sono intollerante al glutine.\nB: Abbiamo opzioni senza glutine.",
     exampleSrc:"A: I am gluten intolerant.\nB: We have gluten-free options.",
     funFact:"Celiac disease ('celiachia') affects about 1% of Italians, and awareness has grown enormously. Italy was one of the first countries to mandate gluten-free meals in schools, hospitals, and public cafeterias. Pharmacies even stock gluten-free pasta."},

    {type:"teach", trg:"vegetariano", src:"vegetarian", pos:"adj", gender:null,
     note:"Adjective/noun. Feminine: vegetariana.\n'Sono vegetariano/a' = I am vegetarian.",
     example:"A: Avete piatti vegetariani?\nB: Certo, la pasta al pomodoro e le verdure grigliate.",
     exampleSrc:"A: Do you have vegetarian dishes?\nB: Of course, the tomato pasta and the grilled vegetables.",
     funFact:"Italy is surprisingly vegetarian-friendly. Many traditional Italian dishes are naturally meat-free: pasta al pomodoro, risotto ai funghi, caprese salad, minestrone, pizza margherita. About 7% of Italians identify as vegetarian, one of the highest rates in Europe."},

    {type:"teach", trg:"vegano", src:"vegan", pos:"adj", gender:null,
     note:"Adjective/noun. Feminine: vegana.\n'Cucina vegana' = vegan cuisine.",
     example:"A: Siete vegani?\nB: Si, non mangiamo prodotti animali.",
     exampleSrc:"A: Are you vegan?\nB: Yes, we do not eat animal products.",
     funFact:"Veganism is growing fast in Italy, despite the country's love of cheese and cured meats. Milan, Turin, and Rome have thriving vegan restaurant scenes. Italian chefs have embraced the challenge, creating vegan versions of classics like carbonara and tiramisu."},

    {type:"teach", trg:"senza glutine", src:"gluten-free", pos:"adj", gender:null,
     note:"Prepositional phrase. 'Senza' = without.\n'Pasta senza glutine' = gluten-free pasta.",
     example:"A: Avete la pasta senza glutine?\nB: Si, abbiamo penne e fusilli.",
     exampleSrc:"A: Do you have gluten-free pasta?\nB: Yes, we have penne and fusilli.",
     funFact:"Italy produces excellent gluten-free pasta, often made from rice, corn, or buckwheat flour. The national health system covers gluten-free food purchases for diagnosed celiacs. Many supermarkets have dedicated gluten-free aisles."},

    {type:"teach", trg:"senza lattosio", src:"lactose-free", pos:"adj", gender:null,
     note:"Prepositional phrase. 'Lattosio' = lactose.\n'Latte senza lattosio' = lactose-free milk.",
     example:"A: Questo formaggio e senza lattosio?\nB: Si, e adatto agli intolleranti.",
     exampleSrc:"A: Is this cheese lactose-free?\nB: Yes, it is suitable for intolerant people.",
     funFact:"Many aged Italian cheeses are naturally very low in lactose. Parmigiano Reggiano aged 24 months contains virtually no lactose due to the aging process. Italians who are lactose intolerant often still enjoy aged cheeses without problems."},

    {type:"teach", trg:"il peperoncino", src:"the chili pepper", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'peperone' (bell pepper).\n'Olio al peperoncino' = chili oil.",
     example:"A: Vuole del peperoncino?\nB: Solo un po', non troppo piccante.",
     exampleSrc:"A: Would you like some chili pepper?\nB: Just a little, not too spicy.",
     funFact:"Calabria in southern Italy is the capital of peperoncino. The town of Diamante hosts an annual chili pepper festival. Calabrians put peperoncino in almost everything, including chocolate. The famous 'nduja sausage gets its intense heat from local chilies."},

    {type:"teach", trg:"biologico", src:"organic", pos:"adj", gender:null,
     note:"Adjective. Feminine: biologica. Shortened: 'bio.'\n'Prodotti biologici' = organic products.",
     example:"A: Questi pomodori sono biologici?\nB: Si, vengono da una fattoria locale.",
     exampleSrc:"A: Are these tomatoes organic?\nB: Yes, they come from a local farm.",
     funFact:"Italy is Europe's largest organic food producer. The abbreviation 'bio' appears everywhere in Italian shops and restaurants. Italian organic certification is strict, and 'biologico' products command premium prices. Sicily and Puglia are major organic farming regions."},

    {type:"teach", trg:"il piatto del giorno", src:"the dish of the day", pos:"noun", gender:"m",
     note:"Masculine compound noun. Changes daily.\nUsually the freshest option on the menu.",
     example:"A: Qual e il piatto del giorno?\nB: Oggi abbiamo risotto ai funghi porcini.",
     exampleSrc:"A: What is the dish of the day?\nB: Today we have porcini mushroom risotto.",
     funFact:"The 'piatto del giorno' is often the best choice at an Italian restaurant because it uses the freshest seasonal ingredients. Smart diners always ask about it. The dish changes based on what the chef found at the morning market."},

    {type:"teach", trg:"il coperto", src:"the cover charge", pos:"noun", gender:"m",
     note:"Masculine. A fixed fee per person at the table.\n1-3 euros, always listed on the menu.",
     example:"A: Cos'e il coperto sulla ricevuta?\nB: E un supplemento fisso per ogni persona.",
     exampleSrc:"A: What is the cover charge on the receipt?\nB: It is a fixed supplement per person.",
     funFact:"The 'coperto' covers bread, table setting, and service. It is standard in Italian restaurants and perfectly legal. Some regions have tried to ban it, but it persists. Tourists often mistake it for a hidden charge, but it is always clearly stated on menus."},

    {type:"teach", trg:"digerire", src:"to digest", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc- forms). Present: digerisco.\n'Non digerisco il latte' = I cannot digest milk.",
     example:"A: Non digerisco bene i fritti.\nB: Prova qualcosa di piu leggero.",
     exampleSrc:"A: I do not digest fried food well.\nB: Try something lighter.",
     funFact:"Italians are very conscious of 'digestione' (digestion). After a big meal, they drink espresso or an 'amaro' (bitter liqueur) to aid digestion. The concept of 'digerire bene' (digesting well) is a common topic of Italian conversation, especially among older generations."},

    {type:"teach", trg:"assaggiare", src:"to taste / to try (food)", pos:"verb", gender:null,
     note:"Regular -are verb. 'Vuoi assaggiare?' = Do you want to taste?\nFrom 'saggio' (wise, a test).",
     example:"A: Vuoi assaggiare il mio dolce?\nB: Si, grazie! Sembra delizioso.",
     exampleSrc:"A: Do you want to taste my dessert?\nB: Yes, thanks! It looks delicious.",
     funFact:"Offering to share food is a core Italian social behavior. 'Assaggia!' (Taste it!) is an invitation that is hard to refuse. In Italian food culture, sharing a bite from your plate is a sign of intimacy and generosity, not an invasion of personal space."},

    {type:"teach", trg:"l'olio d'oliva", src:"the olive oil", pos:"noun", gender:"m",
     note:"Masculine. 'Olio extravergine' = extra virgin olive oil.\nThe foundation of Italian cooking.",
     example:"A: Un filo d'olio d'oliva, per favore.\nB: Eccolo. E olio extravergine toscano.",
     exampleSrc:"A: A drizzle of olive oil, please.\nB: Here it is. It is Tuscan extra virgin oil.",
     funFact:"Italy is the world's second-largest olive oil producer after Spain. Tuscany, Puglia, and Sicily produce distinct flavors. A 'filo d'olio' (thread of oil) is the classic finishing touch on nearly every Italian dish. Italians can tell olive oil quality by smell and taste."},

    // Quiz steps
    {type:"mc", q:"What does 'senza glutine' mean?",
     opts:["With extra gluten added","Gluten-free","Low in gluten only","Contains wheat and gluten"],
     ans:"Gluten-free",
     hint:"'Senza' means 'without.' Italy produces excellent wheat-alternative pasta for people who cannot tolerate this protein."},

    {type:"fb", s:"Sono {1} al lattosio.",
     a:["intollerante"],
     opts:["intollerante","allergico","vegetariano","vegano"],
     hint:"You cannot properly digest milk sugar. This condition is different from a full allergy. Many aged Italian cheeses are naturally safe.",
     sSrc:"I am {1} to lactose."},

    {type:"match", pairs:[
      {trg:"l'allergia", src:"the allergy"},
      {trg:"vegetariano", src:"vegetarian"},
      {trg:"vegano", src:"vegan"},
      {trg:"senza glutine", src:"gluten-free"},
      {trg:"biologico", src:"organic"}
    ]},

    {type:"mc", q:"Why can lactose-intolerant people often eat Parmigiano Reggiano?",
     opts:["It is made from goat milk only","The aging process eliminates virtually all lactose","It contains added digestive enzymes","It is not real cheese"],
     ans:"The aging process eliminates virtually all lactose",
     hint:"After 24+ months of a..., the milk sugar is broken down. This is true for many h... Italian cheeses."},

    {type:"fb", s:"Vuoi {1} il mio dolce?",
     a:["assaggiare"],
     opts:["assaggiare","digerire","condire","tagliare"],
     hint:"You are offering someone a bite. Sharing food is a core Italian social gesture of generosity.",
     sSrc:"Do you want to {1} my dessert?"},

    {type:"mc", q:"What is the 'coperto' at an Italian restaurant?",
     opts:["A mandatory tip for the waiter","A fixed cover charge per person","A tax on alcoholic drinks","The cost of the dessert menu"],
     ans:"A fixed cover charge per person",
     hint:"Usually 1-3 euros, it covers bread and table setting. Always listed on the menu. Not a hidden fee."},

    {type:"fb", s:"Un filo d'{1}, per favore.",
     a:["olio d'oliva"],
     opts:["olio d'oliva","aceto","peperoncino","limone"],
     hint:"Italy's most essential cooking ingredient. A thin drizzle of this golden liquid finishes nearly every dish.",
     sSrc:"A drizzle of {1}, please."},

    {type:"mc", q:"Which Italian region is famous for chili peppers?",
     opts:["Toscana (Tuscany)","Calabria","Veneto","Lombardia (Lombardy)"],
     ans:"Calabria",
     hint:"This southern region hosts a chili pepper festival in Diamante. Their famous 'nduja sausage gets its intense heat from local peppers."}
  ]
};
export default BATCH3_U07_L2;
