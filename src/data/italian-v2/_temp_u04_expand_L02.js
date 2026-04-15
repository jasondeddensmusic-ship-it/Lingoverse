// Unit 04 Expansion — Lesson 4: At the Restaurant
// Theme: Restaurant vocabulary, ordering a full meal, restaurant etiquette

const LESSON_4 = {
  id:"itv2_u4l4", title:"Al ristorante", icon:"\ud83c\udf74", xp:15, board:true,
  steps:[
    {type:"intro", title:"Al ristorante",
     desc:"Learn essential vocabulary for dining at an Italian restaurant, from reservations to paying.",
     goals:["Make a restaurant reservation","Navigate an Italian menu","Handle the dining experience from start to finish"]},

    {type:"teach", trg:"prenotare", src:"to reserve / to book", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ho prenotato un tavolo' = I booked a table.\nFrom 'nota' (note) with prefix 'pre-.'",
     example:"A: Vorrei prenotare un tavolo per due.\nB: Per che ora?\nA: Per le otto.",
     exampleSrc:"A: I would like to book a table for two.\nB: For what time?\nA: For eight o'clock.",
     funFact:"Reservations are essential at popular Italian restaurants, especially on weekends. Walk-ins are common at trattorias but not at ristoranti. 'Prenotare' literally means 'to pre-note' (to write down in advance)."},

    {type:"teach", trg:"il menu", src:"the menu", pos:"noun", gender:"m",
     note:"Masculine. Also spelled 'il menu.' Invariable in plural.\nFrom French 'menu' (small, detailed list).",
     example:"A: Posso avere il menu, per favore?\nB: Certo, eccolo!",
     exampleSrc:"A: Can I have the menu, please?\nB: Of course, here it is!",
     funFact:"Italian menus are organized by course: antipasti (starters), primi (first courses), secondi (second courses), contorni (side dishes), dolci (desserts). Beverages are usually listed separately at the back."},

    {type:"teach", trg:"l'antipasto", src:"the appetizer / starter", pos:"noun", gender:"m",
     note:"Masculine. Literally: anti (before) + pasto (meal).\nPlural: gli antipasti. Shared plates are common.",
     example:"A: Prendiamo un antipasto?\nB: Si, un tagliere misto!",
     exampleSrc:"A: Shall we have a starter?\nB: Yes, a mixed platter!",
     funFact:"'Antipasto' means 'before the meal.' Common antipasti include bruschetta, affettati misti (mixed cold cuts), and caprese (mozzarella and tomato). In Italy, antipasti are often shared at the table."},

    {type:"teach", trg:"il primo", src:"the first course", pos:"noun", gender:"m",
     note:"Masculine. Short for 'il primo piatto.' Always pasta, risotto, or soup.\nThe heart of an Italian meal.",
     example:"A: Cosa prendi come primo?\nB: Prendo le tagliatelle al ragu.",
     exampleSrc:"A: What are you having as first course?\nB: I'll have tagliatelle with meat sauce.",
     funFact:"The primo is sacred in Italian dining. It is always a carb-based dish: pasta, risotto, gnocchi, or soup. Skipping the primo and going straight to meat is acceptable but raises eyebrows in traditional restaurants."},

    {type:"teach", trg:"il secondo", src:"the second course", pos:"noun", gender:"m",
     note:"Masculine. Short for 'il secondo piatto.' Always protein: meat or fish.\nServed AFTER the primo, never together.",
     example:"A: E come secondo?\nB: La bistecca alla fiorentina.",
     exampleSrc:"A: And for the second course?\nB: The Florentine steak.",
     funFact:"The secondo is served separately from the primo, never on the same plate. Side dishes (contorni) are ordered separately too. This course-by-course structure means Italian meals last 1-2 hours minimum."},

    {type:"teach", trg:"il contorno", src:"the side dish", pos:"noun", gender:"m",
     note:"Masculine. Ordered separately from the secondo.\nTypically: salad, grilled vegetables, roasted potatoes.",
     example:"A: Vuole un contorno?\nB: Si, un'insalata mista.",
     exampleSrc:"A: Would you like a side dish?\nB: Yes, a mixed salad.",
     funFact:"Unlike American restaurants, side dishes do not come automatically with the main course in Italy. You must order them separately. Vegetables are a separate choice, not an afterthought paired with protein."},

    {type:"teach", trg:"il dolce", src:"the dessert", pos:"noun", gender:"m",
     note:"Masculine. Literally means 'sweet.' 'I dolci' = desserts/sweets.\nAlso used as an adjective: 'acqua dolce' (fresh water).",
     example:"A: Prendiamo un dolce?\nB: Si, il tiramisu per favore!",
     exampleSrc:"A: Shall we have a dessert?\nB: Yes, the tiramisu please!",
     funFact:"'Dolce' as an adjective means 'sweet,' but as a noun it means 'dessert.' Famous Italian dolci: tiramisu (pick-me-up), panna cotta (cooked cream), cannoli (filled tubes). 'La dolce vita' means 'the sweet life.'"},

    {type:"teach", trg:"il cameriere", src:"the waiter", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la cameriera (waitress).\nFrom 'camera' (room). Literally: room attendant.",
     example:"A: Scusi, cameriere!\nB: Si, dica!",
     exampleSrc:"A: Excuse me, waiter!\nB: Yes, tell me!",
     funFact:"In Italy, never snap your fingers or wave aggressively at a waiter. Eye contact and a gentle 'scusi' is the polite way. Italian waiters are professionals, not students working part-time. Service is a respected career."},

    {type:"teach", trg:"il coperto", src:"the cover charge", pos:"noun", gender:"m",
     note:"Masculine. A per-person charge for bread and table setting.\nUsually 1-3 euros. Listed on the menu or receipt.",
     example:"A: Cos'e il coperto?\nB: E la tariffa per il pane e la tavola.",
     exampleSrc:"A: What is the cover charge?\nB: It is the fee for bread and the table setting.",
     funFact:"The 'coperto' is unique to Italian dining. It covers bread, tablecloth, and place settings. It is NOT a tip. Tourists are often surprised by this line on the bill. Some regions have banned it, but most keep the tradition."},

    {type:"teach", trg:"la mancia", src:"the tip", pos:"noun", gender:"f",
     note:"Feminine. Tipping is appreciated but not expected in Italy.\nService is usually included in the price.",
     example:"A: Lasciamo la mancia?\nB: Si, un paio di euro. Il servizio era ottimo.",
     exampleSrc:"A: Shall we leave a tip?\nB: Yes, a couple of euros. The service was excellent.",
     funFact:"Italian waiters earn a living wage, unlike in the US. Tipping is not expected but appreciated. Rounding up the bill or leaving 5-10% for exceptional service is generous. No one will chase you for not tipping."},

    {type:"teach", trg:"caldo", src:"hot (temperature)", pos:"adj", gender:"m",
     note:"Masculine: caldo. Feminine: calda.\nFor food and weather. 'Acqua calda' = hot water.",
     example:"A: Il caffe e caldo?\nB: Si, e molto caldo. Attento!",
     exampleSrc:"A: Is the coffee hot?\nB: Yes, it is very hot. Careful!",
     funFact:"False friend for Spanish speakers: Italian 'caldo' means 'hot,' not 'broth' (that is 'brodo'). For English speakers: it comes from Latin 'calidus' (warm). English 'calorie' shares this heat-related root."},

    {type:"teach", trg:"freddo", src:"cold", pos:"adj", gender:"m",
     note:"Masculine: freddo. Feminine: fredda.\nFor food, drinks, and weather. From Latin 'frigidus.'",
     example:"A: Vorrei un te freddo.\nB: Alla pesca o al limone?",
     exampleSrc:"A: I would like an iced tea.\nB: Peach or lemon?",
     funFact:"From Latin 'frigidus' (cold), which also gave English 'frigid' and 'refrigerator.' 'Caffe freddo' (cold coffee) is a summer staple in Italy, served sweetened and shaken with ice."},

    // Quiz steps
    {type:"mc", q:"What is 'il primo' in an Italian meal?",
     opts:["The first course (pasta/risotto)","The appetizer","The main course","The dessert"],
     ans:"The first course (pasta/risotto)",
     hint:"This carb-based course is the heart of an Italian meal. It always comes after the antipasto."},

    {type:"fb", s:"Vorrei {1} un tavolo per due.",
     a:["prenotare"],
     opts:["prenotare","ordinare","pagare","mangiare"],
     hint:"You want to book a table in advance. Literally 'to pre-note.'",
     sSrc:"I would like to {1} a table for two."},

    {type:"mc", q:"What is 'il coperto' on an Italian bill?",
     opts:["A per-person cover charge for bread and table","The tip","The service charge","Tax"],
     ans:"A per-person cover charge for bread and table",
     hint:"Unique to Italy, this small fee covers your place setting and bread basket. It is not a tip."},

    {type:"fb", s:"E come {1}? La bistecca, per favore.",
     a:["secondo"],
     opts:["secondo","primo","dolce","antipasto"],
     hint:"This is the protein course, served after pasta. Usually meat or fish.",
     sSrc:"And for the {1}? The steak, please."},

    {type:"match", pairs:[
      {trg:"l'antipasto", src:"the appetizer"},
      {trg:"il primo", src:"the first course"},
      {trg:"il secondo", src:"the second course"},
      {trg:"il contorno", src:"the side dish"},
      {trg:"il dolce", src:"the dessert"}
    ]},

    {type:"mc", q:"Is tipping expected in Italy?",
     opts:["No, but it is appreciated","Yes, 20% minimum","Yes, always 15%","Tipping is rude"],
     ans:"No, but it is appreciated",
     hint:"Italian waiters earn a living wage. Rounding up or leaving a few euros is generous but not required."},

    {type:"fb", s:"Vorrei un te {1}.",
     a:["freddo"],
     opts:["freddo","caldo","buono","dolce"],
     hint:"You want a cold drink. This adjective means cold, from Latin 'frigidus.'",
     sSrc:"I would like an iced {1}."},

    {type:"mc", q:"How should you get a waiter's attention in Italy?",
     opts:["Eye contact and 'scusi'","Snap your fingers","Wave your hand","Shout 'cameriere!'"],
     ans:"Eye contact and 'scusi'",
     hint:"Italian dining etiquette values subtlety. A gentle 'excuse me' with eye contact is proper."},

    {type:"fb", s:"Scusi, posso avere il {1}?",
     a:["menu"],
     opts:["menu","conto","coperto","piatto"],
     hint:"You just sat down and want to see the list of dishes available. From French.",
     sSrc:"Excuse me, can I have the {1}?"},

    {type:"mc", q:"What does 'dolce' mean as an adjective?",
     opts:["Sweet","Dessert","Hot","Soft"],
     ans:"Sweet",
     hint:"As a noun it means dessert. As an adjective it means sweet. 'La dolce vita' = the sweet life."}
  ]
};
export default LESSON_4;
