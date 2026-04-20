// Batch 4 — Unit 07, Lesson 1: Regional Italian Dishes
const BATCH4_U07_L1 = {
  id:"itv2_u07l_b4_1", title:"Piatti regionali", icon:"\uD83C\uDDEE\uD83C\uDDF9", xp:15, board:true,
  steps:[
    {type:"intro", title:"Piatti regionali",
     desc:"Explore Italy's regional cuisine vocabulary, from Neapolitan classics to Sicilian specialties.",
     goals:["Name regional Italian dishes","Describe ingredients and preparation","Discuss food preferences"]},

    {type:"teach", trg:"il piatto", src:"the dish / plate", pos:"noun", gender:"m",
     note:"Masculine. Plural: i piatti. Means both the physical plate and the dish (recipe).\n'Piatto del giorno' = dish of the day.",
     example:"A: Qual e il piatto del giorno?\nB: Oggi abbiamo risotto ai funghi.",
     exampleSrc:"A: What is the dish of the day?\nB: Today we have mushroom risotto.",
     funFact:"An Italian meal traditionally has multiple 'piatti': antipasto (starter), primo (first course, pasta/rice), secondo (second course, meat/fish), contorno (side dish), and dolce (dessert). This structure is sacred."},

    {type:"teach", trg:"la ricetta", src:"the recipe", pos:"noun", gender:"f",
     note:"Feminine. Also means 'prescription' in medical contexts.\n'Ricetta della nonna' = grandmother's recipe.",
     example:"A: Mi dai la ricetta?\nB: E un segreto di famiglia!",
     exampleSrc:"A: Will you give me the recipe?\nB: It is a family secret!",
     funFact:"Italian families guard recipes ('ricette di famiglia') jealously. The same dish can have dozens of regional variations. Debating the 'correct' recipe for carbonara, ragu, or tiramisu is a national pastime that can get surprisingly heated."},

    {type:"teach", trg:"l'ingrediente", src:"the ingredient", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli ingredienti.\nItalian cooking prizes quality over quantity of ingredients.",
     example:"A: Quali ingredienti servono?\nB: Solo pomodori, basilico e mozzarella.",
     exampleSrc:"A: What ingredients are needed?\nB: Just tomatoes, basil, and mozzarella.",
     funFact:"Italian cuisine is built on 'pochi ingredienti di qualità' (few quality ingredients). A classic Margherita pizza has only five ingredients. Italian chefs believe that great ingredients need minimal manipulation."},

    {type:"teach", trg:"il ragu", src:"the meat sauce", pos:"noun", gender:"m",
     note:"Masculine. Invariable. From French 'ragout.'\n'Ragu bolognese' and 'ragu napoletano' are different dishes.",
     example:"A: Il ragu e pronto?\nB: No, deve cuocere ancora due ore.",
     exampleSrc:"A: Is the meat sauce ready?\nB: No, it needs to cook two more hours.",
     funFact:"Never call it 'bolognese sauce.' In Bologna, it is 'ragu alla bolognese' and it is served with tagliatelle, never spaghetti. The Neapolitan ragu is a completely different dish: slow-cooked meat in tomato sauce for 6+ hours."},

    {type:"teach", trg:"il risotto", src:"the risotto", pos:"noun", gender:"m",
     note:"Masculine. From 'riso' (rice). A creamy northern Italian rice dish.\nMust be constantly stirred while cooking.",
     example:"A: Sai fare il risotto?\nB: Si, il risotto alla milanese e il mio preferito.",
     exampleSrc:"A: Can you make risotto?\nB: Yes, Milanese risotto is my favorite.",
     funFact:"Risotto is a northern Italian speciality. 'Risotto alla milanese' (with saffron) is golden yellow. The technique of 'mantecare' (adding butter and cheese at the end while stirring vigorously) creates the signature creaminess. Never add cream."},

    {type:"teach", trg:"la bruschetta", src:"the bruschetta", pos:"noun", gender:"f",
     note:"Feminine. Pronounced broo-SKET-ta (hard 'ch' like 'k').\nToasted bread with toppings. From 'bruscare' (to toast).",
     example:"A: Prendiamo una bruschetta come antipasto?\nB: Ottima idea!",
     exampleSrc:"A: Shall we have bruschetta as a starter?\nB: Great idea!",
     funFact:"The most common mispronunciation by English speakers: it is 'broo-SKET-ta' NOT 'broo-SHET-ta.' The 'ch' in Italian is always a hard 'k' sound. Getting this right immediately impresses Italians."},

    {type:"teach", trg:"il contorno", src:"the side dish", pos:"noun", gender:"m",
     note:"Masculine. Ordered separately from the main course in Italy.\n'Insalata mista' and 'patate' are common contorni.",
     example:"A: Cosa prende come contorno?\nB: Un'insalata mista, grazie.",
     exampleSrc:"A: What will you have as a side dish?\nB: A mixed salad, thanks.",
     funFact:"In Italian restaurants, the 'contorno' is always separate from the main dish. A 'secondo' arrives alone on the plate. You must actively order sides. This surprises many tourists who expect vegetables included with their meat or fish."},

    {type:"teach", trg:"l'antipasto", src:"the appetizer / starter", pos:"noun", gender:"m",
     note:"Masculine. Literally: anti (before) + pasto (meal).\n'Antipasto misto' = mixed appetizer platter.",
     example:"A: L'antipasto misto e per due persone.\nB: Perfetto, lo dividiamo.",
     exampleSrc:"A: The mixed appetizer is for two people.\nB: Perfect, we'll share it.",
     funFact:"An Italian 'antipasto misto' is an art form: cured meats, cheeses, olives, bruschetta, grilled vegetables. In the south, seafood antipasti dominate. Some restaurants are famous for their antipasti alone, with plates arriving endlessly."},

    {type:"teach", trg:"la porzione", src:"the portion / serving", pos:"noun", gender:"f",
     note:"Feminine. 'Mezza porzione' = half portion (available in many restaurants).\nFrom Latin 'portio.'",
     example:"A: La porzione e grande?\nB: Si, molto abbondante!",
     exampleSrc:"A: Is the portion big?\nB: Yes, very generous!",
     funFact:"Italian restaurant portions are traditionally generous. Ordering a 'mezza porzione' (half portion) is perfectly acceptable, especially for primo piatti. Some restaurants even encourage it so you can try more courses."},

    {type:"teach", trg:"piccante", src:"spicy / hot", pos:"adj", gender:null,
     note:"Same form for masculine and feminine.\n'Peperoncino piccante' = hot chili pepper. From 'piccante' (stinging).",
     example:"A: E piccante questa pasta?\nB: Si, molto! C'e il peperoncino.",
     exampleSrc:"A: Is this pasta spicy?\nB: Yes, very! There is chili pepper.",
     funFact:"Italian 'piccante' means spicy from chili heat, not from spice blends. Southern Italian cuisine, especially Calabrian, loves 'peperoncino.' The 'nduja' of Calabria is a spreadable spicy salami that is fiery. Northern Italian food is generally mild."},

    {type:"teach", trg:"leggero", src:"light (food/weight)", pos:"adj", gender:"m",
     note:"Masculine. Feminine: leggera. Opposite: pesante (heavy).\n'Un pasto leggero' = a light meal.",
     example:"A: Stasera voglio qualcosa di leggero.\nB: Una zuppa?",
     exampleSrc:"A: Tonight I want something light.\nB: A soup?",
     funFact:"Italian doctors prescribe 'mangiare leggero' (eating light) for many ailments. The concept of 'pesantezza' (heaviness after eating) is taken seriously. Italians categorize foods as 'leggeri' or 'pesanti' and plan meals accordingly."},

    {type:"teach", trg:"il formaggio", src:"the cheese", pos:"noun", gender:"m",
     note:"Masculine. Plural: i formaggi. From Latin 'formaticus' (made in a mold).\nItaly has over 450 cheese varieties.",
     example:"A: Vuoi del formaggio?\nB: Si, un po' di parmigiano.",
     exampleSrc:"A: Do you want some cheese?\nB: Yes, a bit of parmesan.",
     funFact:"Italy produces over 450 types of cheese, from Parmigiano Reggiano to Pecorino Romano to Gorgonzola. Each region has its specialties. Italian law protects cheese names: true Parmigiano Reggiano can only come from specific regions."},

    {type:"teach", trg:"l'olio d'oliva", src:"olive oil", pos:"noun", gender:"m",
     note:"Masculine. 'Olio extra vergine d'oliva' = extra virgin olive oil.\nThe foundation of Italian cooking.",
     example:"A: Un filo d'olio d'oliva sulla bruschetta.\nB: L'olio buono fa la differenza.",
     exampleSrc:"A: A drizzle of olive oil on the bruschetta.\nB: Good oil makes all the difference.",
     funFact:"Italy is the world's second-largest olive oil producer. 'Olio extra vergine d'oliva' is liquid gold in Italian kitchens. Italians taste olive oil like wine, noting fruttato (fruity), piccante (peppery), and amaro (bitter) notes."},

    {type:"teach", trg:"consigliare", src:"to recommend / to advise", pos:"verb", gender:null,
     note:"Regular -are verb. 'Cosa mi consiglia?' = What do you recommend?\nFormal 'Lei' form used with waiters.",
     example:"A: Cosa mi consiglia?\nB: Il risotto ai funghi e ottimo oggi.",
     exampleSrc:"A: What do you recommend?\nB: The mushroom risotto is excellent today.",
     funFact:"Asking 'cosa mi consiglia?' shows respect for the waiter's expertise. Italian waiters often have deep knowledge of the menu and genuine pride in the kitchen. Following their recommendation is usually rewarded with the best dishes."},

    {type:"teach", trg:"prenotare", src:"to reserve / to book", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ho prenotato un tavolo' = I reserved a table.\n'La prenotazione' = the reservation.",
     example:"A: Avete prenotato?\nB: Si, una prenotazione per quattro persone.",
     exampleSrc:"A: Have you made a reservation?\nB: Yes, a reservation for four people.",
     funFact:"Reservations are important at popular Italian restaurants, especially on weekends. 'Avete un tavolo per stasera?' (Do you have a table for tonight?) without a reservation often works on weeknights, but Friday and Saturday require planning."},

    // Quiz steps
    {type:"mc", q:"Come si pronuncia 'bruschetta'?",
     opts:["broo-SKET-ta (hard k sound)","broo-SHET-ta (soft sh sound)","BROO-shet-ta","broo-CHET-ta"],
     ans:"broo-SKET-ta (hard k sound)",
     hint:"In Italian, 'ch' is always a h... 'k' s..., never 'sh.'"},

    {type:"fb", s:"Cosa mi {1}? E la mia prima volta qui.",
     a:["consiglia"], opts:["consiglia","ordina","prepara","cucina"],
     hint:"You are asking the waiter for a recommendation at the restaurant.",
     sSrc:"What do you {1}? It is my first time here."},

    {type:"match", pairs:[
      {trg:"l'antipasto", src:"appetizer"},
      {trg:"il primo", src:"first course"},
      {trg:"il secondo", src:"main course"},
      {trg:"il contorno", src:"side dish"},
      {trg:"il dolce", src:"dessert"}
    ]},

    {type:"mc", q:"Con quale pasta si serve il ragu bolognese tradizionale?",
     opts:["Tagliatelle","Spaghetti","Penne","Fusilli"],
     ans:"Tagliatelle",
     hint:"In Bologna, this flat egg pasta is the only correct pairing."},

    {type:"fb", s:"Ho {1} un tavolo per stasera alle otto.",
     a:["prenotato"], opts:["prenotato","cucinato","mangiato","consigliato"],
     hint:"You made a restaurant reservation for tonight.",
     sSrc:"I {1} a table for tonight at eight."},

    {type:"mc", q:"Perche il contorno arriva separato in Italia?",
     opts:["Italian tradition serves the main dish alone, sides are ordered separately","The kitchen forgot the vegetables","It costs extra","Only some restaurants do this"],
     ans:"Italian tradition serves the main dish alone, sides are ordered separately",
     hint:"The secondo comes on its own plate. S... are a separate decision."},

    {type:"fb", s:"Questa pasta e molto {1}, c'e tanto peperoncino!",
     a:["piccante"], opts:["piccante","leggera","dolce","amara"],
     hint:"The pasta has a lot of chili pepper, making it hot and spicy.",
     sSrc:"This pasta is very {1}, there is a lot of chili pepper!"},

    {type:"mc", q:"Quanti tipi di formaggio produce l'Italia?",
     opts:["Over 450","About 50","Around 100","Exactly 200"],
     ans:"Over 450",
     hint:"Italy is one of the world's largest cheese producers with incredible variety."}
  ,{type:"match",pairs:[{trg:"la ricetta",src:"the recipe"},{trg:"la bruschetta",src:"the bruschetta"},{trg:"la porzione",src:"the portion / serving"},{trg:"prenotare",src:"to reserve / to book"}]}]
};
export default BATCH4_U07_L1;
