// French B2 Gap Batch D Lesson 11. Food and Gastronomy
const LESSON_11 = {id:"frv2_b2gD_l11", title:"Gastronomie et cuisine", icon:"🍷", xp:15, board:true, steps:[
  {type:"intro", title:"Gastronomie et cuisine",
   desc:"Explore the rich vocabulary of French food culture, from dining establishments to culinary traditions.",
   goals:["Learn 10 food and gastronomy terms","Discuss French culinary traditions","Use food-related compound nouns"]},

  {type:"teach", trg:"l'amuse-gueule", src:"the appetizer / finger food", pos:"noun", gender:"m",
   note:"A small bite served before the main meal.\nInformal compound: 'amuse' (amuse) + 'gueule' (mouth, slang).",
   example:"A: Les amuse-gueules sont délicieux ce soir.\nB: C'est le nouveau chef qui les a préparés.\nA: Les petits feuilletés au fromage sont parfaits.\nB: Et les verrines de saumon aussi.",
   exampleSrc:"A: The appetizers are delicious tonight.\nB: The new chef prepared them.\nA: The small cheese pastries are perfect.\nB: And the salmon verrines too.",
   funFact:"Literally 'mouth-amuser'. 'Gueule' is slang for mouth (properly animal). The polite version is 'amuse-bouche', used in fine dining."},

  {type:"teach", trg:"le café-crème", src:"the coffee with cream", pos:"noun", gender:"m",
   note:"Coffee with steamed milk. The classic French café order.\nOften shortened to 'un crème'.",
   example:"A: Un café-crème, s'il vous plait.\nB: Tout de suite. Avec un croissant?\nA: Oui, bien chaud si possible.\nB: C'est le petit-déjeuner parisien typique.",
   exampleSrc:"A: A coffee with cream, please.\nB: Right away. With a croissant?\nA: Yes, nice and warm if possible.\nB: It's the typical Parisian breakfast.",
   funFact:"In Paris, ordering 'un crème' is the insider way. 'Un café' gets you an espresso. French café culture is UNESCO intangible heritage."},

  {type:"teach", trg:"le café-tabac", src:"the tobacconist-cafe", pos:"noun", gender:"m",
   note:"A café that also sells tobacco, stamps, and lottery tickets.\nA quintessential French institution.",
   example:"A: On se retrouve au café-tabac du coin?\nB: Celui en face de la mairie?\nA: Oui, ils ont une bonne terrasse.\nB: Et le patron est très sympa.",
   exampleSrc:"A: Shall we meet at the corner tobacconist-cafe?\nB: The one across from city hall?\nA: Yes, they have a nice terrace.\nB: And the owner is very friendly.",
   funFact:"The red diamond sign marks a 'tabac'. They sell stamps, phone cards, and metro tickets. Declining in number but still iconic."},

  {type:"teach", trg:"le porcelet", src:"the piglet", pos:"noun", gender:"m",
   note:"A young pig, especially as a culinary term.\nDiminutive of 'porc' (pig) with '-elet'.",
   example:"A: Le porcelet rôti est la spécialité de la maison.\nB: Ça sent divinement bon.\nA: C'est une recette traditionnelle du Sud-Ouest.\nB: Avec des pommes de terre sarladaises.",
   exampleSrc:"A: Roast piglet is the house specialty.\nB: It smells divine.\nA: It's a traditional recipe from the Southwest.\nB: With Sarladaise potatoes.",
   funFact:"The suffix '-elet' is a double diminutive: 'porc' > 'porcel' > 'porcelet'. Compare 'agneau' > 'agnelet' (small lamb)."},

  {type:"mc",
   q:"Qu'est-ce qu'un amuse-gueule?",
   opts:["Un petit morceau servi avant le repas principal","Un dessert traditionnel français","Un grand plat pour les fêtes","Une boisson apéritive"],
   ans:"Un petit morceau servi avant le repas principal",
   hint:"The name literally means something that 'amuses' the 'mouth' before the real meal begins."},

  {type:"teach", trg:"le plat du jour", src:"the daily special", pos:"noun", gender:"m",
   note:"The dish of the day at a restaurant.\nUsually cheaper and freshly prepared. 'Quel est le plat du jour?'",
   example:"A: Quel est le plat du jour?\nB: Poulet basquaise avec du riz.\nA: C'est combien?\nB: Douze euros avec une entrée au choix.",
   exampleSrc:"A: What is the daily special?\nB: Basque-style chicken with rice.\nA: How much is it?\nA: Twelve euros with a starter of your choice.",
   funFact:"Nearly every French restaurant offers a 'plat du jour'. It's the best value option and usually the freshest since it changes daily."},

  {type:"teach", trg:"la crêperie", src:"the creperie / pancake restaurant", pos:"noun", gender:"f",
   note:"A restaurant specializing in crêpes.\nEspecially common in Brittany. Plural: crêperies.",
   example:"A: Il y a une excellente crêperie près d'ici.\nB: Galettes de sarrasin et crêpes sucrées?\nA: Oui, avec du cidre breton.\nB: Le repas parfait pour un dimanche pluvieux.",
   exampleSrc:"A: There's an excellent creperie near here.\nB: Buckwheat galettes and sweet crepes?\nA: Yes, with Breton cider.\nB: The perfect meal for a rainy Sunday.",
   funFact:"In Brittany, savory crepes are called 'galettes' (made with buckwheat flour). Sweet ones are 'crêpes'. Parisians often confuse the terms."},

  {type:"teach", trg:"l'indigène", src:"the indigenous person / native", pos:"noun", gender:"m",
   note:"A person native to a region. Historically loaded term in French.\nAdjective form also exists: 'indigène'.",
   example:"A: Les savoirs indigènes sont essentiels pour la biodiversité.\nB: Les peuples autochtones protègent leurs forêts.\nA: Leur connaissance des plantes est irremplaçable.\nB: Il faut les écouter dans les négociations climatiques.",
   exampleSrc:"A: Indigenous knowledge is essential for biodiversity.\nB: Native peoples protect their forests.\nA: Their knowledge of plants is irreplaceable.\nB: They must be heard in climate negotiations.",
   funFact:"In modern French, 'autochtone' is generally preferred over 'indigène' due to colonial connotations. Context matters greatly."},

  {type:"fb",
   s:"La {1} bretonne sert des galettes de sarrasin et des crêpes sucrées.",
   a:["crêperie"],
   opts:["crêperie","pâtisserie","boulangerie","fromagerie"],
   hint:"This type of restaurant specializes in thin pancakes, both savory and sweet, from Brittany.",
   sSrc:"The Breton {1} serves buckwheat galettes and sweet crepes."},

  {type:"teach", trg:"le polo", src:"the polo shirt", pos:"noun", gender:"m",
   note:"A casual shirt with a collar and short sleeves.\nAlso: the sport played on horseback.",
   example:"A: Je cherche un polo pour le bureau.\nB: Quelle couleur?\nA: Bleu marine, c'est toujours élégant.\nB: Avec un jean foncé, c'est parfait.",
   exampleSrc:"A: I'm looking for a polo shirt for the office.\nB: What color?\nA: Navy blue, it's always elegant.\nB: With dark jeans, it's perfect.",
   funFact:"Named after the horse sport. Ralph Lauren popularized the polo shirt in the 1970s. In French, 'un polo' is strictly the shirt."},

  {type:"teach", trg:"la jointure", src:"the joint / junction", pos:"noun", gender:"f",
   note:"The point where two things meet.\nAnatomical: a body joint. Also: a seam or juncture.",
   example:"A: J'ai mal aux jointures des doigts.\nB: C'est l'arthrite?\nA: Le médecin pense que oui.\nB: Le froid aggrave souvent les symptômes.",
   exampleSrc:"A: My finger joints hurt.\nB: Is it arthritis?\nA: The doctor thinks so.\nB: Cold weather often makes the symptoms worse.",
   funFact:"From 'joindre' (to join). In construction, 'jointure' describes where materials meet. In anatomy, it's the knuckle or joint."},

  {type:"mc",
   q:"Quel est le 'plat du jour' dans un restaurant français?",
   opts:["Le menu complet pour enfants","Le plat spécial qui change chaque jour","Le dessert le plus populaire","L'entrée la plus chère"],
   ans:"Le plat spécial qui change chaque jour",
   hint:"This compound literally means 'dish of the day' and is usually the freshest, most affordable option."},

  {type:"match", pairs:[
    {trg:"amuse-gueule", src:"appetizer"},
    {trg:"café-crème", src:"coffee with cream"},
    {trg:"porcelet", src:"piglet"},
    {trg:"crêperie", src:"creperie"},
    {trg:"jointure", src:"joint"}
  ]},

  {type:"fb",
   s:"On se retrouve au {1} pour prendre un café et acheter des timbres.",
   a:["café-tabac"],
   opts:["café-tabac","café-crème","plat du jour","amuse-gueule"],
   hint:"This uniquely French establishment combines a cafe with a shop selling tobacco, stamps, and lottery tickets.",
   sSrc:"Let's meet at the {1} for coffee and to buy stamps."}
]};
export default LESSON_11;
