// Batch 8. Unit 07 extra lesson. Restaurant: Kitchen Ingredients
const BATCH8_L1 = {id:"itv2_u07l_b8_1", title:"Gli ingredienti", icon:"🧄", xp:15, board:true, steps:[
{type:"intro", title:"Gli ingredienti",
 desc:"Learn the essential kitchen ingredients that form the backbone of Italian cooking.",
 goals:["Name basic cooking ingredients","Discuss recipes with ingredient vocabulary","Understand Italian pantry staples"]},

{type:"teach", trg:"l'olio d'oliva", src:"the olive oil", pos:"noun", gender:"m",
 note:"Masculine noun. 'Olio extravergine' = extra virgin olive oil.\nThe foundation of Italian cooking.",
 example:"A: Che olio usi per la pasta?\nB: Solo olio extravergine d'oliva!",
 exampleSrc:"A: What oil do you use for pasta?\nB: Only extra virgin olive oil!",
 funFact:"Italy is the world's second-largest olive oil producer after Spain. Each region has its own oil. Tuscan oil is peppery, Ligurian is delicate, Pugliese is fruity."},

{type:"teach", trg:"l'aceto", src:"the vinegar", pos:"noun", gender:"m",
 note:"Masculine noun. 'Aceto balsamico' = balsamic vinegar.\nFrom 'acido' (acid).",
 example:"A: Metti l'aceto nell'insalata?\nB: Si, un po' di aceto balsamico.",
 exampleSrc:"A: Do you put vinegar on the salad?\nB: Yes, a little balsamic vinegar.",
 funFact:"Authentic 'Aceto Balsamico Tradizionale di Modena' is aged for at least 12 years, sometimes 25. A small bottle can cost over 100 euros. The supermarket version is a different product entirely."},

{type:"teach", trg:"il lievito", src:"the yeast / baking powder", pos:"noun", gender:"m",
 note:"Masculine noun. 'Lievito di birra' = brewer's yeast.\n'Lievitare' = to rise (dough).",
 example:"A: L'impasto deve lievitare per due ore.\nB: Hai messo abbastanza lievito?",
 exampleSrc:"A: The dough needs to rise for two hours.\nB: Did you put enough yeast?",
 funFact:"Italian pizza dough rises slowly, sometimes 24 to 72 hours. Neapolitan pizzaioli say that 'il tempo e il miglior lievito' (time is the best yeast)."},

{type:"teach", trg:"l'aglio", src:"the garlic", pos:"noun", gender:"m",
 note:"Masculine noun. 'Uno spicchio d'aglio' = a clove of garlic.\nEssential in Italian cooking.",
 example:"A: Quanto aglio metti nel sugo?\nB: Due spicchi, non troppo.",
 exampleSrc:"A: How much garlic do you put in the sauce?\nB: Two cloves, not too much.",
 funFact:"Despite what foreigners think, northern Italians use garlic sparingly. The expression 'aglio, olio e peperoncino' names the simplest pasta dish, needing just 3 ingredients."},

{type:"teach", trg:"il basilico", src:"the basil", pos:"noun", gender:"m",
 note:"Masculine noun. Fresh basil is essential.\n'Basilico genovese' is the most prized variety.",
 example:"A: Aggiungi il basilico alla fine.\nB: Fresco, mai cucinato!",
 exampleSrc:"A: Add the basil at the end.\nB: Fresh, never cooked!",
 funFact:"Never chop basil with a knife in Italy. You tear it by hand ('spezzare') to preserve the oils. Cutting with metal is said to oxidize the leaves and ruin the flavor."},

{type:"teach", trg:"il peperoncino", src:"the chili pepper", pos:"noun", gender:"m",
 note:"Masculine noun. Diminutive of 'peperone' (bell pepper).\nEspecially popular in Calabria.",
 example:"A: Ti piace il peperoncino?\nB: Si, lo metto su tutto!",
 exampleSrc:"A: Do you like chili pepper?\nB: Yes, I put it on everything!",
 funFact:"Calabria is the chili capital of Italy. The town of Diamante hosts an annual Peperoncino Festival. The Calabrese put peperoncino in everything, including chocolate."},

{type:"teach", trg:"il prezzemolo", src:"the parsley", pos:"noun", gender:"m",
 note:"Masculine noun. 'Essere come il prezzemolo' = to be everywhere.\nFlat-leaf Italian parsley.",
 example:"A: Metti il prezzemolo sul pesce.\nB: Fresco, tritato fine.",
 exampleSrc:"A: Put parsley on the fish.\nB: Fresh, finely chopped.",
 funFact:"The expression 'essere come il prezzemolo' (to be like parsley) describes a person who shows up everywhere. Parsley appears in nearly every Italian recipe."},

{type:"teach", trg:"il pangrattato", src:"the breadcrumbs", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: pane (bread) + grattato (grated).\nUsed for breading and toppings.",
 example:"A: Passa il pollo nel pangrattato.\nB: Prima nell'uovo, poi nel pangrattato.",
 exampleSrc:"A: Coat the chicken in breadcrumbs.\nB: First in egg, then in breadcrumbs.",
 funFact:"In Sicily, breadcrumbs are called 'la mollica dei poveri' (poor people's crumbs) and are used instead of cheese on pasta. Waste nothing, the Italian way."},

{type:"teach", trg:"il brodo", src:"the broth / stock", pos:"noun", gender:"m",
 note:"Masculine noun. 'Brodo di pollo' = chicken broth.\n'In brodo' = in broth (as a soup).",
 example:"A: Preferisci i tortellini in brodo o asciutti?\nB: In brodo, e più tradizionale.",
 exampleSrc:"A: Do you prefer tortellini in broth or dry?\nB: In broth, it is more traditional.",
 funFact:"In Emilia-Romagna, tortellini MUST be served 'in brodo.' Serving them with cream sauce is considered almost offensive. The broth lets you taste the filling."},

{type:"mc",
 q:"How should you prepare fresh basil according to Italian tradition?",
 opts:["Tear it by hand","Chop it with a knife","Blend it in a mixer","Dry it in the oven"],
 ans:"Tear it by hand",
 hint:"Using metal is said to oxidize the leaves. Italians use a gentler method to preserve the aromatic oils."},

{type:"match", pairs:[
  {trg:"l'olio d'oliva", src:"the olive oil"},
  {trg:"l'aceto", src:"the vinegar"},
  {trg:"il lievito", src:"the yeast"},
  {trg:"il basilico", src:"the basil"}
]},

{type:"fb",
 s:"Aglio, olio e {1} e il piatto più semplice.",
 a:["peperoncino"],
 opts:["peperoncino","prezzemolo","pangrattato","lievito"],
 hint:"This is a small, spicy pepper. Together with garlic and oil, it names the simplest pasta dish.",
 sSrc:"Garlic, oil, and {1} is the simplest dish."},

{type:"mc",
 q:"What does 'essere come il prezzemolo' mean?",
 opts:["To be small","To be everywhere","To be green","To be Italian"],
 ans:"To be everywhere",
 hint:"This herb appears in nearly every Italian recipe. The expression describes someone who shows up in every situation."},

{type:"fb",
 s:"Preferisci i tortellini in {1} o asciutti?",
 a:["brodo"],
 opts:["brodo","aceto","olio","pangrattato"],
 hint:"This is a warm liquid made by simmering meat and vegetables. Traditional in Emilia-Romagna with tortellini.",
 sSrc:"Do you prefer tortellini in {1} or dry?"},

{type:"mc",
 q:"How long can authentic Aceto Balsamico Tradizionale be aged?",
 opts:["6 months","3 to 5 years","12 to 25 years or more","1 to 2 months"],
 ans:"12 to 25 years or more",
 hint:"The traditional version from Modena undergoes an extremely long aging process, unlike the supermarket version."}
]};
export default BATCH8_L1;
