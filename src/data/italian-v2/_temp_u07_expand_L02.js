// Italian V2 Unit 07 Expansion — Lesson 5: Piatti regionali (Regional Dishes)
// Expands restaurant unit with Italian regional cuisine vocabulary.

const LESSON_5 = {id:"itv2_u7l5", title:"Piatti regionali", icon:"\uD83C\uDDEE\uD83C\uDDF9", xp:15, board:true, steps:[
  {type:"intro", title:"Piatti regionali",
   desc:"Discover the rich variety of Italian regional cuisine. Every region of Italy has its own signature dishes, ingredients, and cooking traditions.",
   goals:["Name iconic regional Italian dishes","Identify key Italian ingredients","Discuss regional food differences"]},

  {type:"teach", trg:"la pasta al forno", src:"baked pasta", pos:"noun", gender:"f",
   note:"Feminine ('pasta'). 'Al forno' = in the oven.\nIncludes lasagna, cannelloni, pasta al gratin.",
   example:"A: Cos'e la specialita?\nB: La pasta al forno della nonna.",
   exampleSrc:"A: What is the specialty?\nB: Grandmother's baked pasta.",
   funFact:"Every Italian family has their own recipe for 'pasta al forno.' In the south, it often means baked ziti with mozzarella. In Emilia-Romagna, lasagna reigns supreme. Sunday lunch almost always features a baked pasta dish."},

  {type:"teach", trg:"la bruschetta", src:"toasted bread with toppings", pos:"noun", gender:"f",
   note:"Feminine. Pronounced 'bru-SKET-ta' (not 'brushetta').\nFrom 'bruscare' (to toast over coals).",
   example:"A: Prendiamo una bruschetta?\nB: Si, al pomodoro e basilico.",
   exampleSrc:"A: Shall we have a bruschetta?\nB: Yes, with tomato and basil.",
   funFact:"The most common mispronunciation by English speakers: 'bru-SHET-ta' is wrong. The 'ch' in Italian always sounds like 'k.' Say 'bru-SKET-ta.' The classic topping is diced tomatoes, garlic, basil, and olive oil on grilled bread rubbed with garlic."},

  {type:"teach", trg:"il risotto", src:"risotto (rice dish)", pos:"noun", gender:"m",
   note:"Masculine. From 'riso' (rice) + diminutive '-otto.'\nA creamy northern Italian rice dish cooked slowly with broth.",
   example:"A: Il risotto e pronto?\nB: Ancora cinque minuti. Il risotto non si puo avere fretta.",
   exampleSrc:"A: Is the risotto ready?\nB: Five more minutes. Risotto cannot be rushed.",
   funFact:"Risotto is a northern dish. Milan claims 'risotto alla milanese' (with saffron), while Venice is known for 'risi e bisi' (rice and peas). Southern Italy barely eats risotto. The dish requires constant stirring for 18-20 minutes."},

  {type:"teach", trg:"la focaccia", src:"flatbread", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'focus' (hearth, fire).\nLiguria (Genoa) is the most famous region for focaccia.",
   example:"A: Questa focaccia e buonissima!\nB: E fatta qui, con olio ligure.",
   exampleSrc:"A: This focaccia is delicious!\nB: It is made here, with Ligurian oil.",
   funFact:"From Latin 'focus' (hearth), the same root as 'focolare' (fireplace) and English 'focus.' Genoa's focaccia is thin and oily. Puglia's 'focaccia barese' is thick with tomatoes and olives. Each region claims theirs is the original."},

  {type:"teach", trg:"la mozzarella", src:"mozzarella cheese", pos:"noun", gender:"f",
   note:"Feminine. From 'mozzare' (to cut off).\n'Mozzarella di bufala' = buffalo mozzarella (Campania).",
   example:"A: La mozzarella e fresca?\nB: Freschissima! Di bufala, dalla Campania.",
   exampleSrc:"A: Is the mozzarella fresh?\nB: Very fresh! Buffalo, from Campania.",
   funFact:"Named from 'mozzare' (to cut), describing how the cheese is pulled and cut by hand. True buffalo mozzarella ('di bufala') comes from Campania and tastes completely different from regular cow milk mozzarella. It should be eaten within 24 hours."},

  {type:"teach", trg:"il pesto", src:"pesto sauce", pos:"noun", gender:"m",
   note:"Masculine. From 'pestare' (to pound, crush).\nClassic: pesto alla genovese (basil, pine nuts, garlic, Parmigiano, Pecorino, oil).",
   example:"A: Le trofie al pesto, per favore.\nB: Ottima scelta! Il pesto e fatto in casa.",
   exampleSrc:"A: The trofie with pesto, please.\nB: Excellent choice! The pesto is homemade.",
   funFact:"From 'pestare' (to crush with a mortar and pestle). Traditional pesto is made in a marble mortar, never a blender. Genovese purists insist the ingredients matter: basil from Pra (a Genoa neighborhood), Ligurian olive oil, and a specific ratio of Parmigiano to Pecorino."},

  {type:"teach", trg:"il ragù", src:"meat sauce", pos:"noun", gender:"m",
   note:"Masculine. From French 'ragout.' Bologna's ragù is the original.\nNOT 'spaghetti bolognese' (that does not exist in Italy).",
   example:"A: Vorrei le tagliatelle al ragù.\nB: Perfetto. Il ragù cuoce da quattro ore.",
   exampleSrc:"A: I would like tagliatelle with meat sauce.\nB: Perfect. The meat sauce has been cooking for four hours.",
   funFact:"Italians cringe at 'spaghetti bolognese' because it does not exist in Bologna. The real dish is 'tagliatelle al ragù bolognese' (flat egg pasta, not spaghetti). Ragu cooks for 3-6 hours. Bologna's official recipe was deposited at the Chamber of Commerce in 1982."},

  {type:"teach", trg:"il tartufo", src:"the truffle", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'tuber' (swelling, lump).\nWhite truffles from Alba (Piedmont) are the most valuable.",
   example:"A: Vuole il tartufo sulla pasta?\nB: Si, adoro il tartufo!",
   exampleSrc:"A: Do you want truffle on the pasta?\nB: Yes, I love truffle!",
   funFact:"White truffles from Alba can cost over 3,000 euros per kilo. They cannot be cultivated and are found by trained dogs in Piedmont forests. The annual truffle fair in Alba attracts food lovers from around the world. Black truffles from Umbria are more affordable."},

  {type:"teach", trg:"la specialita", src:"the specialty", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'specialitas.' Invariable: singular and plural both 'specialita.'\n'La specialita della casa' = the house specialty.",
   example:"A: Qual e la specialita della casa?\nB: Il risotto ai funghi porcini.",
   exampleSrc:"A: What is the house specialty?\nB: The porcini mushroom risotto.",
   funFact:"Every Italian restaurant has a 'specialita della casa.' Asking for it shows culinary curiosity and often gets you the best dish. The word ends in an accented vowel and does not change in the plural: 'le specialita' (the specialties)."},

  {type:"teach", trg:"tipico", src:"typical / traditional", pos:"adj", gender:null,
   note:"Adj. Feminine: tipica. 'Piatto tipico' = traditional dish.\n'Cucina tipica' = traditional cuisine.",
   example:"A: Vorrei provare qualcosa di tipico.\nB: Le consiglio gli arancini. Sono tipici siciliani.",
   exampleSrc:"A: I would like to try something traditional.\nB: I recommend the arancini. They are typical Sicilian.",
   funFact:"'Tipico' in Italian food context means authentically local. Restaurants labeled 'cucina tipica' or 'trattoria tipica' serve regional recipes. The Italian government protects regional foods with DOP (Denominazione di Origine Protetta) and IGP labels."},

  // Quiz steps
  {type:"mc", q:"Why do Italians cringe at 'spaghetti bolognese'?",
   opts:["The real Bolognese dish uses tagliatelle, not spaghetti","Bologna does not make pasta","Spaghetti is from Naples only","Bolognese sauce does not exist"],
   ans:"The real Bolognese dish uses tagliatelle, not spaghetti",
   hint:"In Bologna, the meat sauce ('ragu') is served on flat egg pasta, not thin round noodles."},

  {type:"fb", s:"Qual e la {1} della casa?",
   a:["specialita"],
   opts:["specialita","bruschetta","focaccia","mozzarella"],
   hint:"You are asking about the restaurant's signature dish. This word means specialty.",
   sSrc:"What is the house {1}?"},

  {type:"match", pairs:[
    {trg:"la bruschetta", src:"toasted bread with toppings"},
    {trg:"il risotto", src:"creamy rice dish"},
    {trg:"il pesto", src:"basil sauce"},
    {trg:"il ragu", src:"meat sauce"},
    {trg:"il tartufo", src:"truffle"}
  ]},

  {type:"mc", q:"How is 'bruschetta' correctly pronounced?",
   opts:["Bru-SKET-ta","Bru-SHET-ta","BROO-shetta","Bru-CHETTA"],
   ans:"Bru-SKET-ta",
   hint:"The Italian 'ch' always makes a 'k' sound, never a 'sh' sound. This is a common error for English speakers."},

  {type:"fb", s:"La {1} di bufala e freschissima!",
   a:["mozzarella"],
   opts:["mozzarella","focaccia","bruschetta","pasta"],
   hint:"This pulled cheese from Campania is made from water buffalo milk. Best eaten within 24 hours.",
   sSrc:"The buffalo {1} is very fresh!"},

  {type:"mc", q:"Which region is famous for pesto?",
   opts:["Liguria (Genoa)","Lombardia (Milan)","Sicilia","Toscana"],
   ans:"Liguria (Genoa)",
   hint:"This coastal northwest region provides the basil and olive oil. Traditional preparation uses a marble mortar."},

  {type:"fb", s:"Vorrei provare qualcosa di {1}.",
   a:["tipico"],
   opts:["tipico","dolce","cotto","fresco"],
   hint:"You want to try something authentically local and traditional. This adjective means 'typical.'",
   sSrc:"I would like to try something {1}."},

  {type:"mc", q:"Where do the most expensive truffles come from?",
   opts:["Alba, Piedmont","Rome","Naples","Florence"],
   ans:"Alba, Piedmont",
   hint:"White truffles from this P... town can cost thousands of euros per kilo. Found by trained dogs."},

  {type:"fb", s:"Le tagliatelle al {1} cuociono da quattro ore.",
   a:["ragu"],
   opts:["ragu","pesto","tartufo","forno"],
   hint:"This is the Bolognese meat sauce. It requires hours of slow cooking to develop its rich flavor.",
   sSrc:"The tagliatelle with {1} have been cooking for four hours."}
]};
export default LESSON_5;
