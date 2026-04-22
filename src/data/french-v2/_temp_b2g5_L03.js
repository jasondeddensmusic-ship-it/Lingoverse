// French B2 Gap Lesson 3. Environment and Nature
const LESSON_3 = {id:"frv2_b2g5_l3", title:"Environnement et nature", icon:"🌿", xp:15, board:true, steps:[
  {type:"intro", title:"Environnement et nature",
   desc:"Learn vocabulary for discussing environmental issues, nature, and ecological responsibility at a B2 level.",
   goals:["Learn 15 key words about environment and ecology","Discuss pollution, sustainability, and natural phenomena","Use scientific and ecological vocabulary"]},

  {type:"teach", trg:"l'altération", src:"the degradation / alteration", pos:"noun", gender:"f",
   note:"Damage or deterioration of something.\nOften used for environment or health.",
   example:"A: L'altération de la couche d'ozone est préoccupante.\nB: Les scientifiques travaillent sur des solutions.\nA: Les mesures actuelles suffisent-elles?\nB: Non, il faut faire beaucoup plus.",
   exampleSrc:"A: The degradation of the ozone layer is concerning.\nB: Scientists are working on solutions.\nA: Are current measures sufficient?\nB: No, much more needs to be done.",
   funFact:"From Latin 'alterare' (to change). The verb 'altérer' also means 'to make thirsty' in older French."},

  {type:"teach", trg:"insalubre", src:"insalubrious / unhealthy", pos:"adj", gender:null,
   note:"Harmful to health. Describes housing, areas, or conditions.\nA formal register word.",
   example:"A: Cet immeuble est insalubre.\nB: Oui, il y a de la moisissure partout.\nA: Les habitants doivent être relogés.\nB: La mairie promet d'agir rapidement.",
   exampleSrc:"A: This building is insalubrious.\nB: Yes, there is mold everywhere.\nA: The residents must be relocated.\nB: The town hall promises to act quickly.",
   funFact:"From Latin 'insalubris'. The opposite is 'salubre' (healthy), though it is rarer in everyday use."},

  {type:"teach", trg:"l'insecticide", src:"the insecticide", pos:"noun", gender:"m",
   note:"A chemical product to kill insects.\nCentral to debates on agriculture and ecology.",
   example:"A: L'utilisation d'insecticides est controversée.\nB: Oui, ils tuent aussi les abeilles.\nA: Il existe des alternatives naturelles?\nB: Oui, l'agriculture biologique en propose.",
   exampleSrc:"A: The use of insecticides is controversial.\nB: Yes, they also kill bees.\nA: Are there natural alternatives?\nB: Yes, organic farming offers some.",
   funFact:"From Latin 'insectum' + '-cide' (killer). The suffix '-cide' appears in 'homicide' and 'genocide'."},

  {type:"teach", trg:"le crustacé", src:"the crustacean", pos:"noun", gender:"m",
   note:"Marine animals with shells: crabs, lobsters, shrimp.\nBoth a food and ecology term.",
   example:"A: Les crustacés sont menacés par la pollution.\nB: Surtout les crabes et les homards.\nA: La surpêche aussi est un problème.\nB: Il faut protéger les écosystèmes marins.",
   exampleSrc:"A: Crustaceans are threatened by pollution.\nB: Especially crabs and lobsters.\nA: Overfishing is also a problem.\nB: We need to protect marine ecosystems.",
   funFact:"From Latin 'crusta' (shell, crust). Related to 'croûte' (crust) in French."},

  {type:"teach", trg:"le gravier", src:"the gravel", pos:"noun", gender:"m",
   note:"Small stones used in paths and construction.\nAlso found in natural riverbeds.",
   example:"A: Le chemin est couvert de gravier.\nB: Attention, c'est glissant quand il pleut.\nA: On devrait le paver.\nB: Le gravier est plus écologique que le bitume.",
   exampleSrc:"A: The path is covered with gravel.\nB: Be careful, it's slippery when it rains.\nA: We should pave it.\nB: Gravel is more ecological than asphalt.",
   funFact:"From a pre-Celtic root. Gravel paths are traditional in French formal gardens like Versailles."},

  {type:"teach", trg:"le grillage", src:"the wire mesh / fencing", pos:"noun", gender:"m",
   note:"Metal mesh used for fences and enclosures.\nCommon in both urban and rural settings.",
   example:"A: Le grillage du jardin est rouillé.\nB: Il faut le remplacer avant l'hiver.\nA: Quel matériau choisir?\nB: Le grillage en acier inoxydable dure plus longtemps.",
   exampleSrc:"A: The garden fencing is rusted.\nB: We need to replace it before winter.\nA: What material to choose?\nB: Stainless steel wire mesh lasts longer.",
   funFact:"From 'grille' (grid/grill). The diminutive suffix '-age' indicates the material or action."},

  {type:"teach", trg:"le dépotoir", src:"the dump / dumping ground", pos:"noun", gender:"m",
   note:"A place where waste is discarded.\nUsed literally and figuratively.",
   example:"A: Cette rivière est devenue un dépotoir.\nB: C'est scandaleux, il y a des déchets partout.\nA: Qui est responsable?\nB: Les usines qui déversent leurs déchets.",
   exampleSrc:"A: This river has become a dumping ground.\nB: It's outrageous, there is waste everywhere.\nA: Who is responsible?\nB: The factories that dump their waste.",
   funFact:"From 'dé-' (away) + 'pot' (pot/container) + '-oir' (place for). Literally: a place to discard things."},

  {type:"teach", trg:"l'iode", src:"the iodine", pos:"noun", gender:"m",
   note:"A chemical element found in seaweed and seafood.\nEssential for thyroid health.",
   example:"A: L'air marin est riche en iode.\nB: C'est pour cela qu'on se sent bien à la mer.\nA: Les algues contiennent beaucoup d'iode.\nB: Oui, c'est un aliment très sain.",
   exampleSrc:"A: Sea air is rich in iodine.\nB: That's why we feel good at the seaside.\nA: Seaweed contains a lot of iodine.\nB: Yes, it's a very healthy food.",
   funFact:"Named from Greek 'ioeides' (violet-colored), because iodine vapor is purple."},

  {type:"teach", trg:"la globalité", src:"the entirety / totality", pos:"noun", gender:"f",
   note:"The whole of something considered together.\nOften in 'dans sa globalité' (as a whole).",
   example:"A: Il faut considérer le problème dans sa globalité.\nB: Pas seulement les aspects économiques?\nA: Non, aussi les aspects sociaux et écologiques.\nB: Une approche globale est toujours meilleure.",
   exampleSrc:"A: We need to consider the problem in its entirety.\nB: Not just the economic aspects?\nA: No, also the social and ecological aspects.\nB: A holistic approach is always better.",
   funFact:"From 'global' + '-ité'. The adjective 'global' means 'overall' in French, not just 'worldwide'."},

  {type:"mc", q:"Quel mot désigne la détérioration de quelque chose?",
   opts:["L'altération","Le gravier","L'iode","Le crustacé"],
   ans:"L'altération",
   hint:"Damage or deterioration, often used for environmental or health contexts"},

  {type:"fb", s:"Cet immeuble est {1}, il y a de la moisissure partout.",
   a:["insalubre"], opts:["insalubre","irrésistible","insignifiant","incomplet"],
   hint:"An adjective meaning harmful to health, describing poor living conditions",
   sSrc:"This building is {1}, there is mold everywhere."},

  {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
   note:"The process of becoming more intense.\nUsed for weather, conflicts, and agriculture.",
   example:"A: L'intensification des tempêtes est liée au climat.\nB: Les scientifiques sont formels là-dessus.\nA: Que peut-on faire?\nB: Réduire les émissions de gaz à effet de serre.",
   exampleSrc:"A: The intensification of storms is linked to the climate.\nB: Scientists are definitive about this.\nA: What can be done?\nB: Reduce greenhouse gas emissions.",
   funFact:"From 'intensifier' + '-tion'. In agriculture, 'intensification' means using more inputs per hectare."},

  {type:"teach", trg:"l'inhalation", src:"the inhalation", pos:"noun", gender:"f",
   note:"Breathing in, especially of fumes, vapor, or medicine.\nMedical and environmental term.",
   example:"A: L'inhalation de fumée est dangereuse.\nB: Oui, cela endommage les poumons.\nA: Les pompiers portent des masques.\nB: C'est indispensable pour leur protection.",
   exampleSrc:"A: Inhaling smoke is dangerous.\nB: Yes, it damages the lungs.\nA: Firefighters wear masks.\nB: It's essential for their protection.",
   funFact:"From Latin 'inhalare' (to breathe in). The verb 'inhaler' is used both medically and colloquially."},

  {type:"teach", trg:"l'insuffisance", src:"the insufficiency / shortage", pos:"noun", gender:"f",
   note:"A lack or inadequacy. Used for resources, organs, and policies.\n'Insuffisance rénale' = kidney failure.",
   example:"A: L'insuffisance des ressources en eau est alarmante.\nB: Surtout dans les régions arides.\nA: Le gaspillage aggrave le problème.\nB: Il faut économiser chaque goutte.",
   exampleSrc:"A: The insufficiency of water resources is alarming.\nB: Especially in arid regions.\nA: Waste worsens the problem.\nB: We must save every drop.",
   funFact:"From 'in-' (not) + 'suffisance' (sufficiency). Medical uses include 'insuffisance cardiaque' (heart failure)."},

  {type:"mc", q:"Quel animal marin a une coquille et est menacé par la pollution?",
   opts:["Le gravier","Le crustacé","L'insecticide","L'iode"],
   ans:"Le crustacé",
   hint:"Think of crabs, lobsters, and shrimp: shell-bearing sea creatures"},

  {type:"fb", s:"Cette rivière est devenue un {1}, il y a des déchets partout.",
   a:["dépotoir"], opts:["dépotoir","grillage","gravier","crustacé"],
   hint:"A place where waste and rubbish are discarded, a dumping ground",
   sSrc:"This river has become a {1}, there is waste everywhere."},

  {type:"match", pairs:[
    {trg:"insalubre", src:"unhealthy"},
    {trg:"le dépotoir", src:"dumping ground"},
    {trg:"l'intensification", src:"intensification"},
    {trg:"la globalité", src:"entirety"},
    {trg:"l'iode", src:"iodine"}
  ]},

  {type:"mc", q:"Que signifie 'dans sa globalité'?",
   opts:["Au niveau mondial","De manière intense","Dans son ensemble, en considérant tout","Seulement en partie"],
   ans:"Dans son ensemble, en considérant tout",
   hint:"Looking at the whole picture, not just one aspect"},

  {type:"fb", s:"L'{1} des tempêtes est liée au changement climatique.",
   a:["intensification"], opts:["intensification","inhalation","insuffisance","altération"],
   hint:"Storms becoming stronger and more frequent over time",
   sSrc:"The {1} of storms is linked to climate change."},

  {type:"drag_fill", s:"L'{1} de fumée peut causer une {2} pulmonaire grave.",
   blanks:{"1":"inhalation","2":"insuffisance"},
   pool:["inhalation","insuffisance","intensification","altération"],
   hint:"Breathing in smoke can lead to a serious shortage of lung function"},

  {type:"mc", q:"Quel produit chimique est controversé car il tue aussi les abeilles?",
   opts:["L'iode","Le gravier","Le grillage","L'insecticide"],
   ans:"L'insecticide",
   hint:"A product designed to kill insects, but with unintended ecological consequences"}
]};
export default LESSON_3;
