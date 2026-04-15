// Italian V2 Unit 07 Expansion — Lesson 6: Allergie e dieta (Allergies & Dietary Needs)
// Expands restaurant unit with dietary restrictions, allergies, food intolerances.

const LESSON_6 = {id:"itv2_u7l6", title:"Allergie e dieta", icon:"\u26A0\uFE0F", xp:15, board:true, steps:[
  {type:"intro", title:"Allergie e dieta",
   desc:"Learn how to communicate dietary restrictions and food allergies in Italian. Being able to explain what you cannot eat is essential for safe travel.",
   goals:["Explain food allergies and intolerances","Ask about ingredients in dishes","Communicate dietary preferences clearly"]},

  {type:"teach", trg:"l'allergia", src:"the allergy", pos:"noun", gender:"f",
   note:"Feminine. From Greek 'allos' (other) + 'ergon' (reaction).\nPlural: le allergie. 'Ho un'allergia' = I have an allergy.",
   example:"A: Ha delle allergie alimentari?\nB: Si, sono allergico alle noci.",
   exampleSrc:"A: Do you have any food allergies?\nB: Yes, I am allergic to nuts.",
   funFact:"Italian restaurants are legally required to list allergens on their menus since 2014 (EU Regulation 1169/2011). The 14 major allergens must be identified. If you do not see allergen information, ask: 'Avete la lista degli allergeni?'"},

  {type:"teach", trg:"allergico", src:"allergic", pos:"adj", gender:null,
   note:"Adj. Feminine: allergica. 'Sono allergico/a a...' = I am allergic to...\nFollowed by 'a' + allergen.",
   example:"A: E allergico a qualcosa?\nB: Si, sono allergico al glutine.",
   exampleSrc:"A: Are you allergic to anything?\nB: Yes, I am allergic to gluten.",
   funFact:"The adjective changes gender to match the speaker: 'allergico' (male), 'allergica' (female). Italian uses 'a' before the allergen: 'allergico AL latte' (to milk), 'allergica ALLE uova' (to eggs). The preposition combines with the article."},

  {type:"teach", trg:"intollerante", src:"intolerant (food)", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\n'Sono intollerante al lattosio' = I am lactose intolerant.",
   example:"A: Sono intollerante al lattosio.\nB: Abbiamo piatti senza latticini.",
   exampleSrc:"A: I am lactose intolerant.\nB: We have dairy-free dishes.",
   funFact:"Lactose intolerance is very common in southern Italy, where up to 40% of adults may be affected. Despite this, Italian cuisine uses enormous amounts of cheese. Many aged cheeses like Parmigiano-Reggiano are naturally very low in lactose."},

  {type:"teach", trg:"senza glutine", src:"gluten-free", pos:"adj", gender:null,
   note:"Invariable expression. 'Senza' = without.\n'Pasta senza glutine' = gluten-free pasta.",
   example:"A: Avete piatti senza glutine?\nB: Si, abbiamo pasta e pizza senza glutine.",
   exampleSrc:"A: Do you have gluten-free dishes?\nB: Yes, we have gluten-free pasta and pizza.",
   funFact:"Italy is considered one of the best countries for celiacs. By law, Italian restaurants must offer gluten-free options. The Italian Celiac Association (AIC) certifies restaurants with a 'spiga barrata' (crossed wheat stalk) symbol."},

  {type:"teach", trg:"vegetariano", src:"vegetarian", pos:"adj", gender:null,
   note:"Adj. Feminine: vegetariana. 'Sono vegetariano/a' = I am vegetarian.\nAlso used as a noun.",
   example:"A: Sono vegetariana. Cosa mi consiglia?\nB: La parmigiana di melanzane.",
   exampleSrc:"A: I am vegetarian. What do you recommend?\nB: The eggplant parmigiana.",
   funFact:"Italy is surprisingly vegetarian-friendly due to its rich tradition of vegetable-based dishes. 'Primi' (pasta courses) often have no meat. Classic vegetarian dishes include melanzane alla parmigiana, pasta al pomodoro, and risotto ai funghi."},

  {type:"teach", trg:"vegano", src:"vegan", pos:"adj", gender:null,
   note:"Adj. Feminine: vegana. 'Sono vegano/a' = I am vegan.\nMore challenging in Italy than vegetarian.",
   example:"A: Sono vegano. C'e qualcosa per me?\nB: La pasta con verdure, senza formaggio.",
   exampleSrc:"A: I am vegan. Is there something for me?\nB: The pasta with vegetables, without cheese.",
   funFact:"Being vegan in Italy is more challenging because cheese and eggs appear in many dishes. However, southern Italian cuisine ('cucina povera') is naturally plant-heavy. Pasta with tomato sauce, minestrone, and bruschetta are naturally vegan."},

  {type:"teach", trg:"contiene", src:"it contains", pos:"verb", gender:null,
   note:"Third person of 'contenere' (to contain). Irregular like 'tenere.'\n'Contiene latte?' = Does it contain milk?",
   example:"A: Questo piatto contiene uova?\nB: No, nessun uovo.",
   exampleSrc:"A: Does this dish contain eggs?\nB: No, no eggs.",
   funFact:"'Contenere' follows the same pattern as 'tenere' (to hold): contengo, contieni, contiene. This verb is essential for allergy safety. Always ask 'Contiene...?' followed by the allergen: latte (milk), uova (eggs), noci (nuts), crostacei (shellfish)."},

  {type:"teach", trg:"gli ingredienti", src:"the ingredients", pos:"noun", gender:"m",
   note:"Masculine PLURAL. Singular: l'ingrediente.\nFrom Latin 'ingredi' (to enter into).",
   example:"A: Quali sono gli ingredienti?\nB: Farina, uova, burro e zucchero.",
   exampleSrc:"A: What are the ingredients?\nB: Flour, eggs, butter, and sugar.",
   funFact:"From Latin 'ingredi' (to go into, to enter), because ingredients 'enter' a recipe. The same root gave English 'ingredient.' Italian food labels list ingredients in order of quantity, largest first, just like in most countries."},

  {type:"teach", trg:"le noci", src:"nuts / walnuts", pos:"noun", gender:"f",
   note:"Feminine PLURAL. Singular: la noce.\nOften used broadly for all tree nuts in allergy contexts.",
   example:"A: Attenzione, contiene noci.\nB: Grazie per l'avviso. Sono allergico.",
   exampleSrc:"A: Warning, it contains nuts.\nB: Thanks for the warning. I am allergic.",
   funFact:"'Noce' specifically means walnut, but in allergy warnings, 'noci' often covers all tree nuts. For precision: 'mandorle' (almonds), 'nocciole' (hazelnuts), 'pistacchi' (pistachios), 'arachidi' (peanuts). Peanuts are technically legumes, not tree nuts."},

  {type:"teach", trg:"i latticini", src:"dairy products", pos:"noun", gender:"m",
   note:"Masculine PLURAL. From 'latte' (milk).\nIncludes cheese, cream, butter, yogurt.",
   example:"A: Questo piatto ha latticini?\nB: Si, c'e parmigiano e panna.",
   exampleSrc:"A: Does this dish have dairy?\nB: Yes, there is parmesan and cream.",
   funFact:"From 'latte' (milk). Italian cuisine is heavy on dairy: Parmigiano-Reggiano, mozzarella, ricotta, mascarpone, burro (butter), panna (cream). Aged hard cheeses contain much less lactose than soft cheeses, which helps those with mild intolerance."},

  // Quiz steps
  {type:"mc", q:"How do you say 'I am allergic to nuts' in Italian (male speaker)?",
   opts:["Sono allergico alle noci","Sono allergica alle noci","Ho allergia noci","Noci allergia ho"],
   ans:"Sono allergico alle noci",
   hint:"Male speaker = 'allergico' (masculine -o). Use 'a' + article: 'alle noci.' 'Sono' = I am."},

  {type:"fb", s:"Avete piatti {1} glutine?",
   a:["senza"],
   opts:["senza","con","di","per"],
   hint:"You need dishes that do not contain this protein. This preposition means 'without.'",
   sSrc:"Do you have {1} gluten dishes?"},

  {type:"match", pairs:[
    {trg:"l'allergia", src:"the allergy"},
    {trg:"vegetariano", src:"vegetarian"},
    {trg:"vegano", src:"vegan"},
    {trg:"senza glutine", src:"gluten-free"},
    {trg:"i latticini", src:"dairy products"}
  ]},

  {type:"mc", q:"Why is Italy considered good for celiacs?",
   opts:["Restaurants must offer gluten-free options by law","Italians do not eat wheat","Gluten does not exist in Italian food","Pasta is naturally gluten-free"],
   ans:"Restaurants must offer gluten-free options by law",
   hint:"Italian law and the Celiac Association work together. Look for the crossed wheat stalk symbol."},

  {type:"fb", s:"Questo piatto {1} uova?",
   a:["contiene"],
   opts:["contiene","ha","mangia","prende"],
   hint:"You are asking whether eggs are among the ingredients. This verb means 'it contains.'",
   sSrc:"Does this dish {1} eggs?"},

  {type:"mc", q:"What does 'intollerante al lattosio' mean?",
   opts:["Lactose intolerant","Allergic to milk","Dislikes dairy","Cannot eat cheese"],
   ans:"Lactose intolerant",
   hint:"An intolerance is different from an allergy. This is specifically about the sugar found in milk products."},

  {type:"fb", s:"Quali sono gli {1}?",
   a:["ingredienti"],
   opts:["ingredienti","allergie","piatti","vini"],
   hint:"You want to know what goes into the dish. This plural noun lists what the recipe is made of.",
   sSrc:"What are the {1}?"},

  {type:"mc", q:"What is the difference between 'vegetariano' and 'vegano'?",
   opts:["Vegetarians eat dairy and eggs, vegans eat no animal products","They are the same","Vegans eat fish","Vegetarians eat no plants"],
   ans:"Vegetarians eat dairy and eggs, vegans eat no animal products",
   hint:"One excludes meat only. The other excludes all animal-derived products including cheese, eggs, and honey."},

  {type:"fb", s:"Sono {1} al lattosio.",
   a:["intollerante"],
   opts:["intollerante","allergico","vegano","vegetariano"],
   hint:"You have difficulty digesting the sugar in milk. This adjective describes a food sensitivity, not an allergy.",
   sSrc:"I am {1} to lactose."}
]};
export default LESSON_6;
