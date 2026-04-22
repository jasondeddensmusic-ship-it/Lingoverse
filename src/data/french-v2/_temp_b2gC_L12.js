// L12 - Food & Gastronomy
const LESSON_12 = {id:"frv2_b2gC_l12", title:"Gastronomie et traditions", icon:"\u{1F37D}", xp:15, board:true, steps:[

{type:"intro", title:"Gastronomie et traditions",
 desc:"Explore French culinary culture, food traditions, and the vocabulary of gastronomy.",
 goals:["Learn 8 words for food and gastronomy","Discuss French culinary traditions","Navigate conversations about dining and cuisine"]},

{type:"teach", trg:"l'amuse-gueule", src:"appetizer, nibble", pos:"noun", gender:"m",
 note:"Masculine noun. A small bite served before a meal.\nLiterally: mouth-amuser. Plural: amuse-gueules.",
 example:"A: Les amuse-gueules sont délicieux ce soir.\nB: Oui, le chef a préparé des mini-tartines au saumon.",
 exampleSrc:"A: The appetizers are delicious tonight.\nB: Yes, the chef prepared mini salmon toasts.",
 funFact:"Gueule is informal for mouth (literally animal's mouth). The polite version would be amuse-bouche."},

{type:"teach", trg:"le café-tabac", src:"cafe-tobacconist", pos:"noun", gender:"m",
 note:"Masculine noun. A typical French establishment selling coffee, cigarettes, and lottery tickets.",
 example:"A: On se retrouve au café-tabac du coin ?\nB: Oui, je prendrai un café et le journal.",
 exampleSrc:"A: Shall we meet at the corner cafe-tobacconist?\nB: Yes, I will have a coffee and the newspaper.",
 funFact:"The red diamond-shaped sign marks every café-tabac. They also sell stamps, metro tickets, and phone cards."},

{type:"teach", trg:"le porcelet", src:"piglet, suckling pig", pos:"noun", gender:"m",
 note:"Masculine noun. A young pig.\nThe -et suffix makes it a diminutive of porc.",
 example:"A: Le porcelet rôti est une spécialité de cette région.\nB: C'est un plat traditionnel des grandes fêtes.",
 exampleSrc:"A: Roast suckling pig is a specialty of this region.\nB: It is a traditional dish for big celebrations.",
 funFact:"The -et/-ette suffix creates diminutives in French: porc>porcelet, jardin>jardinet, maison>maisonnette."},

{type:"teach", trg:"les crêperies", src:"creperies", pos:"noun", gender:"f",
 note:"Feminine noun (plural). Restaurants specializing in crêpes.\nEssentially Breton restaurants.",
 example:"A: Il y a beaucoup de crêperies à Rennes.\nB: Normal, c'est la capitale de la Bretagne.",
 exampleSrc:"A: There are many creperies in Rennes.\nB: Of course, it is the capital of Brittany.",
 funFact:"Crêperies serve both crêpes sucrées (sweet, wheat) and galettes (savory, buckwheat). A Breton institution."},

{type:"teach", trg:"le plat du jour", src:"dish of the day", pos:"noun", gender:"m",
 note:"Masculine noun. The daily special at a restaurant.\nUsually the best value on the menu.",
 example:"A: Quel est le plat du jour ?\nB: Un boeuf bourguignon avec des légumes de saison.",
 exampleSrc:"A: What is the dish of the day?\nB: A beef bourguignon with seasonal vegetables.",
 funFact:"Every French bistro has a plat du jour. It is often the freshest dish because the chef bought ingredients that morning."},

{type:"teach", trg:"le petit-déjeuner", src:"breakfast", pos:"noun", gender:"m",
 note:"Masculine noun. The first meal of the day.\nCompound: petit (small) + déjeuner (lunch).",
 example:"A: Qu'est-ce que tu prends au petit-déjeuner ?\nB: Un café au lait, une tartine beurrée et du jus d'orange.",
 exampleSrc:"A: What do you have for breakfast?\nB: A café au lait, buttered toast, and orange juice.",
 funFact:"The French petit-déjeuner is traditionally light: bread, butter, jam, and coffee. No eggs or bacon."},

{type:"teach", trg:"l'encombre", src:"obstacle, hindrance", pos:"noun", gender:"m",
 note:"Masculine noun. An obstacle or obstruction.\nOften in: sans encombre (without a hitch).",
 example:"A: Le repas s'est déroulé sans encombre.\nB: Tout le monde a apprécié le menu.",
 exampleSrc:"A: The meal went without a hitch.\nB: Everyone enjoyed the menu.",
 funFact:"Sans encombre is a very common expression meaning smoothly, without problems. Très utile."},

{type:"teach", trg:"proférer", src:"to utter, to pronounce", pos:"verb", gender:null,
 note:"Irregular verb (é>è before mute e).\nOften negative: proférer des menaces (utter threats).",
 example:"A: Il a proféré des insultes contre le serveur.\nB: C'est inacceptable, on devrait partir.",
 exampleSrc:"A: He uttered insults against the waiter.\nB: That is unacceptable, we should leave.",
 funFact:"Proférer is almost always used with negative words: menaces, insultes, injures. Rarely positive."},

{type:"mc",
 q:"Quel est le nom français d'un petit apéritif servi avant le repas ?",
 opts:["un amuse-gueule","un petit-déjeuner","un plat du jour","un porcelet"],
 ans:"un amuse-gueule",
 hint:"A bite-sized nibble served before the starter. The name refers to entertaining one's palate before eating."},

{type:"fb",
 s:"Le {1} propose un boeuf bourguignon aujourd'hui.",
 a:["plat du jour"], opts:["plat du jour","petit-déjeuner","café-tabac","amuse-gueule"],
 hint:"The daily special. The best-value item on a French bistro menu.",
 sSrc:"The {1} is a beef bourguignon today."},

{type:"mc",
 q:"Dans quelle région française trouve-t-on le plus de crêperies ?",
 opts:["En Normandie","En Bretagne","En Provence","En Alsace"],
 ans:"En Bretagne",
 hint:"The homeland of crêpes and galettes. Its capital is Rennes."},

{type:"match", pairs:[
  {trg:"l'amuse-gueule", src:"appetizer"},
  {trg:"le café-tabac", src:"cafe-tobacconist"},
  {trg:"le porcelet", src:"piglet"},
  {trg:"le plat du jour", src:"dish of the day"},
  {trg:"le petit-déjeuner", src:"breakfast"}
]},

{type:"fb",
 s:"Le {1} français traditionnel se compose de café, pain et confiture.",
 a:["petit-déjeuner"], opts:["petit-déjeuner","plat du jour","amuse-gueule","porcelet"],
 hint:"The first meal of the day. In French literally 'small lunch.'",
 sSrc:"The traditional French {1} consists of coffee, bread, and jam."},

{type:"mc",
 q:"Que peut-on acheter dans un café-tabac en plus du café ?",
 opts:["Des médicaments","Des livres scolaires","Des cigarettes, des timbres et des tickets de métro","Des vêtements"],
 ans:"Des cigarettes, des timbres et des tickets de métro",
 hint:"These establishments serve multiple purposes. Look for the red diamond sign."},

{type:"fb",
 s:"Heureusement, la soirée s'est déroulée sans {1}.",
 a:["encombre"], opts:["encombre","porcelet","crêperie","amuse-gueule"],
 hint:"Without a hitch, smoothly. A common expression meaning no obstacles.",
 sSrc:"Fortunately, the evening went without a {1}."},

{type:"drag_fill",
 s:"Il a {1} des insultes et le dîner ne s'est pas déroulé sans {2}.",
 blanks:{"1":"proféré","2":"encombre"},
 pool:["proféré","encombre","porcelet","crêperie"],
 hint:"He uttered insults, so the dinner did not go smoothly"},

{type:"mc",
 q:"Quel suffixe transforme 'porc' en 'porcelet' ?",
 opts:["-ment (adverbe)","-tion (action)","-eur (agent)","-et (diminutif)"],
 ans:"-et (diminutif)",
 hint:"This suffix makes things smaller. Like jardin > jardinet. A baby version."}

]};
export default LESSON_12;
