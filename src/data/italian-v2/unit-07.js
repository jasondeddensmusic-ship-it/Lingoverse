// Italian V2 Unit 07 — Al ristorante (At the Restaurant) (A2.1)
// CILS/CELI A2 aligned. Ordering food, restaurant phrases, food adjectives.

const UNIT_07 = {
  n:7, lang:"it", srcLang:"en", track:"v2",
  title:"Al ristorante", sub:"At the Restaurant",
  icon:"\uD83C\uDF7D\uFE0F", level:"A2.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u7l1", title:"Ordinare al ristorante", icon:"\uD83D\uDCCB", xp:15, board:true, steps:[
      {type:"intro", title:"Ordinare al ristorante",
       desc:"Learn how to read an Italian menu and order food at a restaurant. Italian meals follow a traditional structure with distinct courses.",
       goals:["Name the courses of an Italian meal","Read a basic Italian menu","Order food politely"]},

      {type:"teach", trg:"il menu", src:"the menu", pos:"noun", gender:"m",
       note:"Masculine. Invariable: singular and plural both 'menu.'\nAlso spelled 'il menu' with no accent in everyday use.",
       example:"A: Posso vedere il menu?\nB: Certo, ecco il menu.",
       exampleSrc:"A: May I see the menu?\nB: Of course, here is the menu.",
       funFact:"Italian menus follow a strict course order: antipasto, primo, secondo with contorno, then dolce. You are not expected to order every course. Even Italians often skip one or two."},

      {type:"teach", trg:"l'antipasto", src:"the appetizer / starter", pos:"noun", gender:"m",
       note:"Masculine. Literally 'before the meal' (anti + pasto).\nPlural: gli antipasti.",
       example:"A: Cosa prende come antipasto?\nB: La bruschetta, per favore.",
       exampleSrc:"A: What will you have as a starter?\nB: The bruschetta, please.",
       funFact:"'Anti' here is from Latin 'ante' (before), not Greek 'anti' (against). So 'antipasto' means 'before the meal,' not 'against the meal.' Common antipasti include bruschetta, prosciutto e melone, and caprese salad."},

      {type:"teach", trg:"il primo", src:"the first course", pos:"noun", gender:"m",
       note:"Masculine. Short for 'il primo piatto' (first dish).\nUsually pasta, risotto, or soup.",
       example:"A: Cosa c'e come primo?\nB: Abbiamo spaghetti e risotto.",
       exampleSrc:"A: What is there for the first course?\nB: We have spaghetti and risotto.",
       funFact:"The 'primo' is the heart of an Italian meal. Pasta is always a first course, never a side dish. Serving pasta alongside meat would be considered very strange in Italy. Each course has its own plate."},

      {type:"teach", trg:"il secondo", src:"the second course / main", pos:"noun", gender:"m",
       note:"Masculine. Short for 'il secondo piatto' (second dish).\nUsually meat or fish.",
       example:"A: E come secondo?\nB: Il pesce del giorno, grazie.",
       exampleSrc:"A: And for the main course?\nB: The fish of the day, thanks.",
       funFact:"The 'secondo' is always protein: meat, fish, or eggs. It arrives on its own plate, with no sides. If you want vegetables or salad, you order a 'contorno' separately. This surprises many foreign visitors."},

      {type:"teach", trg:"il contorno", src:"the side dish", pos:"noun", gender:"m",
       note:"Masculine. From 'contornare' (to surround).\nVegetables or salad served alongside the secondo.",
       example:"A: Desidera un contorno?\nB: Si, un'insalata mista.",
       exampleSrc:"A: Would you like a side dish?\nB: Yes, a mixed salad.",
       funFact:"Side dishes must be ordered separately in Italy. They never come automatically with the main course. Common contorni include insalata mista (mixed salad), patate arrosto (roasted potatoes), and verdure grigliate (grilled vegetables)."},

      {type:"teach", trg:"il dolce", src:"the dessert", pos:"noun", gender:"m",
       note:"Masculine as a noun (the dessert). Also adjective meaning 'sweet.'\nFrom Latin 'dulcis' (sweet).",
       example:"A: Prendiamo un dolce?\nB: Si, il tiramisu!",
       exampleSrc:"A: Shall we have dessert?\nB: Yes, the tiramisu!",
       funFact:"'Dolce' means both 'dessert' and 'sweet.' When someone says 'la dolce vita,' it literally means 'the sweet life.' The word gave English 'dulcet' (sweet-sounding). Tiramisu, panna cotta, and gelato are classic Italian dolci."},

      {type:"teach", trg:"ordinare", src:"to order", pos:"verb", gender:null,
       note:"Regular -are verb. Present: ordino, ordini, ordina.\nFrom Latin 'ordinare' (to put in order).",
       example:"A: Siete pronti per ordinare?\nB: Si, vorremmo ordinare.",
       exampleSrc:"A: Are you ready to order?\nB: Yes, we would like to order.",
       funFact:"From Latin 'ordinare' (to arrange, put in order). English 'order' comes from the same root. In Italian restaurants, the waiter often asks 'Avete scelto?' (Have you chosen?) rather than 'Siete pronti per ordinare?'"},

      {type:"teach", trg:"il piatto", src:"the dish / plate", pos:"noun", gender:"m",
       note:"Masculine. Both the physical plate and the food on it.\n'Piatto del giorno' = dish of the day.",
       example:"A: Qual e il piatto del giorno?\nB: Oggi abbiamo la lasagna.",
       exampleSrc:"A: What is the dish of the day?\nB: Today we have lasagna.",
       funFact:"From Greek 'platys' (flat, broad). The same root gave English 'plate,' 'platform,' and 'plateau.' In Italian restaurants, 'il piatto del giorno' is usually the chef's best offer, made with the freshest ingredients."},

      // Quiz steps
      {type:"mc", q:"What is 'il primo' at an Italian restaurant?",
       opts:["The first course (pasta/risotto)","The appetizer","The main course","The dessert"],
       ans:"The first course (pasta/risotto)",
       hint:"This is the course that comes after the antipasto. It is where you find pasta, risotto, and soup."},

      {type:"fb", s:"Posso vedere il {1}?",
       a:["menu"],
       opts:["menu","piatto","primo","conto"],
       hint:"This is the list of food and drinks available. You ask for it when you sit down.",
       sSrc:"May I see the {1}?"},

      {type:"match", pairs:[
        {trg:"l'antipasto", src:"the appetizer"},
        {trg:"il primo", src:"the first course"},
        {trg:"il secondo", src:"the main course"},
        {trg:"il contorno", src:"the side dish"},
        {trg:"il dolce", src:"the dessert"}
      ]},

      {type:"mc", q:"What does 'il contorno' mean?",
       opts:["The side dish","The main course","The bill","The menu"],
       ans:"The side dish",
       hint:"In Italy, vegetables and salad do not come with the main course. You must request them separately."},

      {type:"fb", s:"Siete pronti per {1}?",
       a:["ordinare"],
       opts:["ordinare","mangiare","pagare","prendere"],
       hint:"The waiter asks if you have decided what food you want. This verb means 'to order.'",
       sSrc:"Are you ready to {1}?"},

      {type:"mc", q:"What does 'il dolce' literally mean?",
       opts:["The sweet","The plate","The first","The end"],
       ans:"The sweet",
       hint:"This word is both a noun (dessert) and an adjective. Think of 'la dolce vita' (the sweet life)."},

      {type:"fb", s:"Qual e il {1} del giorno?",
       a:["piatto"],
       opts:["piatto","primo","menu","dolce"],
       hint:"This word means both the physical plate and the dish of food served on it.",
       sSrc:"What is the {1} of the day?"},

      {type:"mc", q:"Which course at an Italian meal is typically meat or fish?",
       opts:["Il secondo","Il primo","L'antipasto","Il contorno"],
       ans:"Il secondo",
       hint:"This comes after the pasta course. It is the protein-based main dish, served on its own plate."}
    ]},

    {id:"itv2_u7l2", title:"Al tavolo", icon:"\uD83E\uDD57", xp:15, board:true, steps:[
      {type:"intro", title:"Al tavolo",
       desc:"Learn essential restaurant phrases for communicating with the waiter, requesting things at the table, and paying the bill.",
       goals:["Ask for a table and make requests","Communicate politely with the waiter","Ask for and pay the bill"]},

      {type:"teach", trg:"prenotare", src:"to book / to reserve", pos:"verb", gender:null,
       note:"Regular -are verb. Present: prenoto, prenoti, prenota.\n'Ho prenotato' = I have reserved.",
       example:"A: Ha prenotato?\nB: Si, a nome Rossi, per due.",
       exampleSrc:"A: Have you reserved?\nB: Yes, under the name Rossi, for two.",
       funFact:"From 'nota' (note), with prefix 'pre-' (beforehand). Literally 'to note beforehand.' Popular restaurants in Italy, especially in tourist areas, require reservations. Calling ahead is always a good idea for dinner."},

      {type:"teach", trg:"il cameriere", src:"the waiter", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cameriera (waitress).\nFrom 'camera' (room). Literally 'room attendant.'",
       example:"A: Scusi, cameriere!\nB: Si, dica.",
       exampleSrc:"A: Excuse me, waiter!\nB: Yes, tell me.",
       funFact:"From 'camera' (room), because waiters originally served in private rooms. Address them with 'scusi' (excuse me), never by snapping fingers or shouting. The feminine form 'cameriera' is used for waitresses."},

      {type:"teach", trg:"il conto", src:"the bill / check", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'computus' (calculation).\n'Il conto, per favore' is how you ask for the bill.",
       example:"A: Il conto, per favore.\nB: Certo, un momento.",
       exampleSrc:"A: The bill, please.\nB: Of course, one moment.",
       funFact:"In Italy, the waiter will never bring the bill until you ask. It is considered rude to rush diners. Say 'Il conto, per favore' when ready. The same root 'computus' gave English 'count,' 'account,' and 'computer.'"},

      {type:"teach", trg:"la mancia", src:"the tip", pos:"noun", gender:"f",
       note:"Feminine. Not obligatory in Italy, but appreciated.\nService charge ('coperto') is often included.",
       example:"A: Lasciamo la mancia?\nB: Si, il servizio era ottimo.",
       exampleSrc:"A: Shall we leave a tip?\nB: Yes, the service was excellent.",
       funFact:"Tipping in Italy is very different from the US. A 'coperto' (cover charge) of 1-3 euros per person is standard. Tips are optional, usually just rounding up. Leaving 15-20% would be considered extremely generous."},

      {type:"teach", trg:"il bicchiere", src:"the glass", pos:"noun", gender:"m",
       note:"Masculine. Plural: i bicchieri.\nFrom Germanic 'beker' (cup, beaker).",
       example:"A: Un bicchiere d'acqua, per favore.\nB: Naturale o frizzante?",
       exampleSrc:"A: A glass of water, please.\nB: Still or sparkling?",
       funFact:"In Italy, you will always be asked 'naturale o frizzante?' (still or sparkling?) when ordering water. Tap water is safe but rarely served in restaurants. Italians strongly prefer bottled water at meals."},

      {type:"teach", trg:"la bottiglia", src:"the bottle", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'butticula' (small cask).\nDouble -gli- sound: bot-TI-glia.",
       example:"A: Una bottiglia di vino rosso, per favore.\nB: Subito.",
       exampleSrc:"A: A bottle of red wine, please.\nB: Right away.",
       funFact:"The 'gli' in 'bottiglia' makes a sound like 'lyee.' This sound does not exist in English. It is one of the trickiest Italian sounds for English speakers. Practice: put your tongue behind your top teeth and say 'lyee.'"},

      {type:"teach", trg:"il tovagliolo", src:"the napkin", pos:"noun", gender:"m",
       note:"Masculine. From 'tavola' (table) via French 'touaille.'\nPlural: i tovaglioli.",
       example:"A: Mi puo portare un tovagliolo?\nB: Certo, eccolo.",
       exampleSrc:"A: Can you bring me a napkin?\nB: Of course, here it is.",
       funFact:"Related to 'tavola' (table). In formal Italian dining, the napkin goes on your lap, never tucked into your collar. Using bread to mop up sauce from your plate is called 'fare la scarpetta' (make the little shoe), and opinions on its politeness vary."},

      {type:"teach", trg:"consigliare", src:"to recommend / to advise", pos:"verb", gender:null,
       note:"Regular -are verb. 'Cosa consiglia?' = What do you recommend?\nFrom Latin 'consilium' (counsel).",
       example:"A: Cosa ci consiglia?\nB: Vi consiglio il risotto ai funghi.",
       exampleSrc:"A: What do you recommend?\nB: I recommend the mushroom risotto.",
       funFact:"From Latin 'consilium' (counsel, plan), which also gave English 'counsel' and 'council.' Asking 'Cosa consiglia?' is a polite and common way to get the waiter's suggestion for the best dish."},

      // Quiz steps
      {type:"mc", q:"How do you ask for the bill in Italian?",
       opts:["Il conto, per favore","La mancia, per favore","Il menu, per favore","Il piatto, per favore"],
       ans:"Il conto, per favore",
       hint:"This word comes from Latin 'computus' (calculation). You ask for it when you are done eating."},

      {type:"fb", s:"Ha {1}? A nome Rossi.",
       a:["prenotato"],
       opts:["prenotato","ordinato","pagato","mangiato"],
       hint:"The waiter asks if you made a reservation. This is the past participle of 'to book.'",
       sSrc:"Have you {1}? Under the name Rossi."},

      {type:"match", pairs:[
        {trg:"il cameriere", src:"the waiter"},
        {trg:"il conto", src:"the bill"},
        {trg:"la mancia", src:"the tip"},
        {trg:"il bicchiere", src:"the glass"},
        {trg:"la bottiglia", src:"the bottle"}
      ]},

      {type:"mc", q:"What is the 'coperto' in an Italian restaurant?",
       opts:["A cover charge per person","The tip for the waiter","The tax on food","The price of dessert"],
       ans:"A cover charge per person",
       hint:"This is a standard charge of 1-3 euros added to your bill. It is not the same as a voluntary tip."},

      {type:"fb", s:"Un {1} d'acqua, per favore.",
       a:["bicchiere"],
       opts:["bicchiere","bottiglia","piatto","tovagliolo"],
       hint:"You want a single serving of water, not an entire bottle. This is a drinking vessel.",
       sSrc:"A {1} of water, please."},

      {type:"mc", q:"What does 'consigliare' mean?",
       opts:["To recommend","To order","To reserve","To pay"],
       ans:"To recommend",
       hint:"From Latin 'consilium' (counsel). You use this verb to ask the waiter what dish is best today."},

      {type:"fb", s:"Mi puo portare un {1}?",
       a:["tovagliolo"],
       opts:["tovagliolo","bicchiere","conto","menu"],
       hint:"You need something to wipe your hands. This cloth item sits on your lap during the meal.",
       sSrc:"Can you bring me a {1}?"},

      {type:"mc", q:"What will the waiter ask about water in Italy?",
       opts:["Naturale o frizzante?","Calda o fredda?","Grande o piccola?","Dolce o amara?"],
       ans:"Naturale o frizzante?",
       hint:"Italian restaurants serve bottled water. You choose between still or sparkling."}
    ]},

    {id:"itv2_u7l3", title:"I sapori", icon:"\uD83C\uDF36\uFE0F", xp:15, board:true, steps:[
      {type:"intro", title:"I sapori",
       desc:"Learn adjectives to describe food in Italian. Being able to say what you like helps you order better and enjoy Italian cuisine more.",
       goals:["Describe food with taste adjectives","Express preferences at a restaurant","Use adjective agreement with food words"]},

      {type:"teach", trg:"fresco", src:"fresh", pos:"adj", gender:null,
       note:"Adj. Feminine: fresca. Plural: freschi/fresche.\nFrom Germanic 'frisk' (fresh, cool).",
       example:"A: Il pesce e fresco?\nB: Si, freschissimo! Arriva ogni mattina.",
       exampleSrc:"A: Is the fish fresh?\nB: Yes, very fresh! It arrives every morning.",
       funFact:"'Fresco' also means 'cool' (temperature). 'Stare fresco' is an idiom meaning 'to be in trouble,' literally 'to stay cool.' When Italians say food is 'freschissimo,' the -issimo suffix means 'extremely.'"},

      {type:"teach", trg:"cotto", src:"cooked", pos:"adj", gender:null,
       note:"Adj. Past participle of 'cuocere' (to cook). Feminine: cotta.\nOpposite: crudo (raw).",
       example:"A: Come vuole la bistecca?\nB: Ben cotta, per favore.",
       exampleSrc:"A: How would you like the steak?\nB: Well done, please.",
       funFact:"'Ben cotto' (well done), 'al sangue' (rare, literally 'with blood'), and 'media cottura' (medium). 'Cotto' also appears in 'prosciutto cotto' (cooked ham) versus 'prosciutto crudo' (cured/raw ham)."},

      {type:"teach", trg:"crudo", src:"raw", pos:"adj", gender:null,
       note:"Adj. Feminine: cruda. From Latin 'crudus' (raw, bleeding).\nOpposite: cotto (cooked).",
       example:"A: Il prosciutto e cotto o crudo?\nB: Crudo, stagionato 24 mesi.",
       exampleSrc:"A: Is the ham cooked or raw?\nB: Raw, aged 24 months.",
       funFact:"'Prosciutto crudo' is not actually raw meat. It is salt-cured and air-dried for months or years. Parma ham (Prosciutto di Parma) must be aged at least 12 months. The word gave English 'crude' (rough, unrefined)."},

      {type:"teach", trg:"piccante", src:"spicy / hot", pos:"adj", gender:null,
       note:"Adj. Same form for masculine and feminine (-e ending).\nFrom 'piccare' (to sting, prick).",
       example:"A: Il sugo e piccante?\nB: Un po'. Vuole del peperoncino?",
       exampleSrc:"A: Is the sauce spicy?\nB: A little. Would you like some chili pepper?",
       funFact:"Italian cuisine is not typically very spicy. The south uses more 'peperoncino' (chili pepper) than the north. Calabria is known as the spiciest region, famous for 'nduja, a spicy spreadable salami."},

      {type:"teach", trg:"dolce", src:"sweet", pos:"adj", gender:null,
       note:"Adj. Same form for masculine and feminine (-e ending).\nAlso a noun meaning 'dessert.'",
       example:"A: Questo vino e dolce?\nB: No, e secco.",
       exampleSrc:"A: Is this wine sweet?\nB: No, it is dry.",
       funFact:"'Dolce' as an adjective means 'sweet.' As a noun, it means 'dessert.' 'Dolcevita' is also the Italian word for a turtleneck sweater, inspired by the glamorous style of Fellini's film 'La Dolce Vita.'"},

      {type:"teach", trg:"amaro", src:"bitter", pos:"adj", gender:null,
       note:"Adj. Feminine: amara. From Latin 'amarus' (bitter).\nAlso a type of Italian digestive liqueur.",
       example:"A: Il caffe e amaro?\nB: Si, non ho messo lo zucchero.",
       exampleSrc:"A: Is the coffee bitter?\nB: Yes, I did not put in sugar.",
       funFact:"'Amaro' is also the name of a category of Italian herbal liqueurs drunk after dinner as digestives. Famous brands include Averna, Montenegro, and Fernet-Branca. Italians believe they aid digestion."},

      {type:"teach", trg:"saporito", src:"tasty / flavorful", pos:"adj", gender:null,
       note:"Adj. Feminine: saporita. From 'sapore' (flavor, taste).\nSynonym: gustoso.",
       example:"A: Com'e la zuppa?\nB: Molto saporita! Complimenti al cuoco.",
       exampleSrc:"A: How is the soup?\nB: Very tasty! Compliments to the chef.",
       funFact:"From 'sapore' (taste), from Latin 'sapor.' The same root gave English 'savor' and 'savory.' The related verb 'sapere' means both 'to know' and 'to taste' in Italian, linking knowledge with sensory experience."},

      {type:"teach", trg:"leggero", src:"light (food)", pos:"adj", gender:null,
       note:"Adj. Feminine: leggera. Opposite: pesante (heavy).\nFrom Latin 'levis' (light in weight).",
       example:"A: Vorrei qualcosa di leggero.\nB: Le consiglio l'insalata di mare.",
       exampleSrc:"A: I would like something light.\nB: I recommend the seafood salad.",
       funFact:"Italians take digestibility seriously. Meals are designed to progress from light to heavy and back to light again: a light antipasto, heavier primo and secondo, then a light dolce. Espresso at the end aids this balance."},

      // Quiz steps
      {type:"mc", q:"What does 'piccante' mean?",
       opts:["Spicy / hot","Sweet","Bitter","Light"],
       ans:"Spicy / hot",
       hint:"From 'piccare' (to sting). Calabria in southern Italy is the region most known for this flavor."},

      {type:"fb", s:"Il prosciutto e cotto o {1}?",
       a:["crudo"],
       opts:["crudo","fresco","dolce","amaro"],
       hint:"This means the ham is not cooked but salt-cured and air-dried. Opposite of 'cotto.'",
       sSrc:"Is the ham cooked or {1}?"},

      {type:"match", pairs:[
        {trg:"fresco", src:"fresh"},
        {trg:"cotto", src:"cooked"},
        {trg:"crudo", src:"raw"},
        {trg:"piccante", src:"spicy"},
        {trg:"amaro", src:"bitter"}
      ]},

      {type:"mc", q:"What is the opposite of 'dolce' in describing taste?",
       opts:["Amaro","Fresco","Cotto","Leggero"],
       ans:"Amaro",
       hint:"Sweet versus this taste. This word is also the name of a category of Italian herbal liqueurs."},

      {type:"fb", s:"Vorrei qualcosa di {1}.",
       a:["leggero"],
       opts:["leggero","piccante","amaro","crudo"],
       hint:"You do not want heavy food. You want something that will not weigh you down.",
       sSrc:"I would like something {1}."},

      {type:"mc", q:"What does 'saporito' mean?",
       opts:["Tasty / flavorful","Soapy","Spicy","Salty"],
       ans:"Tasty / flavorful",
       hint:"From 'sapore' (flavor). English 'savor' shares this Latin root. It describes food with good taste."},

      {type:"fb", s:"Il pesce e {1}? Arriva ogni mattina.",
       a:["fresco"],
       opts:["fresco","cotto","amaro","piccante"],
       hint:"The fish was caught recently. It is not frozen or old. It arrives daily.",
       sSrc:"Is the fish {1}? It arrives every morning."},

      {type:"mc", q:"How do you say 'well done' for steak in Italian?",
       opts:["Ben cotto","Ben crudo","Molto fresco","Molto piccante"],
       ans:"Ben cotto",
       hint:"'Ben' means 'well.' The second word means 'cooked.' Together: thoroughly cooked."}
    ]}
  ]
};
export default UNIT_07;
