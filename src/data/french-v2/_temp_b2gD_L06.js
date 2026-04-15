// French B2 Gap Batch D Lesson 6 — Environment and Ecology
const LESSON_6 = {id:"frv2_b2gD_l6", title:"Environnement et écologie", icon:"🌍", xp:15, board:true, steps:[
  {type:"intro", title:"Environnement et écologie",
   desc:"Master vocabulary for discussing environmental issues, sustainability, and ecological challenges.",
   goals:["Learn 10 environment and ecology terms","Discuss pollution and conservation","Express opinions on sustainability"]},

  {type:"teach", trg:"la globalité", src:"the entirety / the whole", pos:"noun", gender:"f",
   note:"The complete whole of something.\n'Dans sa globalité' = in its entirety.",
   example:"A: Il faut aborder le problème dans sa globalité.\nB: Pas seulement la pollution de l'air?\nA: Non, l'eau, les sols, la biodiversité aussi.\nB: Une approche globale est indispensable.",
   exampleSrc:"A: We need to address the problem in its entirety.\nB: Not just air pollution?\nA: No, water, soil, biodiversity too.\nB: A holistic approach is essential.",
   funFact:"From 'global' + '-ité'. Not to be confused with 'mondialisation' (globalization). 'Globalité' is about completeness."},

  {type:"teach", trg:"la porosité", src:"the porosity", pos:"noun", gender:"f",
   note:"The quality of having tiny holes that allow liquid to pass.\nAlso figurative: permeability of borders, ideas.",
   example:"A: La porosité du sol est essentielle pour les nappes phréatiques.\nB: L'urbanisation réduit cette porosité.\nA: Le béton empêche l'eau de s'infiltrer.\nB: C'est une cause majeure d'inondations.",
   exampleSrc:"A: Soil porosity is essential for groundwater.\nB: Urbanization reduces this porosity.\nA: Concrete prevents water from seeping in.\nB: It's a major cause of flooding.",
   funFact:"From Latin 'porosus' (full of pores). Figuratively, French uses it for 'la porosité des frontières' (porous borders)."},

  {type:"teach", trg:"le phosphate", src:"the phosphate", pos:"noun", gender:"m",
   note:"A chemical compound used in fertilizers and detergents.\nA major water pollutant.",
   example:"A: Les phosphates polluent les rivières.\nB: Ils proviennent de l'agriculture?\nA: Oui, surtout des engrais chimiques.\nB: Les algues vertes en sont la conséquence.",
   exampleSrc:"A: Phosphates pollute rivers.\nB: Do they come from agriculture?\nA: Yes, mainly from chemical fertilizers.\nB: Green algae are the consequence.",
   funFact:"Phosphate comes from Greek 'phosphoros' (light-bearer). France banned phosphates in laundry detergent in 2007."},

  {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
   note:"The process of making something more intense.\nOften about agriculture or weather events.",
   example:"A: L'intensification de l'agriculture nuit à la biodiversité.\nB: Les monocultures appauvrissent les sols.\nA: Et les pesticides tuent les insectes pollinisateurs.\nB: On doit revenir à des pratiques durables.",
   exampleSrc:"A: The intensification of agriculture harms biodiversity.\nB: Monocultures deplete the soil.\nA: And pesticides kill pollinating insects.\nB: We must return to sustainable practices.",
   funFact:"Climate scientists use 'intensification' to describe how storms are becoming stronger due to warming oceans."},

  {type:"mc",
   q:"Pourquoi la porosité du sol est-elle importante?",
   opts:["Elle permet à l'eau de s'infiltrer dans les nappes phréatiques","Elle empêche la croissance des plantes","Elle protège contre les tremblements de terre","Elle réduit la température du sol"],
   ans:"Elle permet à l'eau de s'infiltrer dans les nappes phréatiques",
   hint:"Think about what happens when water meets a surface with tiny holes versus solid concrete."},

  {type:"teach", trg:"le grillage", src:"the wire mesh / fencing", pos:"noun", gender:"m",
   note:"Metal wire mesh used for fencing or protection.\nCommon in gardens, farms, construction.",
   example:"A: Le grillage autour du jardin est cassé.\nB: Les lapins ont dû le ronger.\nA: Il faut le remplacer avant le printemps.\nB: Sinon, adieu les légumes du potager.",
   exampleSrc:"A: The wire fence around the garden is broken.\nB: The rabbits must have gnawed it.\nA: It needs to be replaced before spring.\nB: Otherwise, goodbye to the garden vegetables.",
   funFact:"From 'grille' (grate/grid). French gardens are often protected by 'grillage' rather than wooden fences."},

  {type:"teach", trg:"le paludisme", src:"the malaria", pos:"noun", gender:"m",
   note:"A tropical disease transmitted by mosquitoes.\nFrom 'palud' (marsh/swamp).",
   example:"A: Le paludisme tue encore des centaines de milliers de personnes.\nB: Surtout en Afrique subsaharienne?\nA: Oui, les enfants sont les plus vulnérables.\nB: La prévention par moustiquaire est cruciale.",
   exampleSrc:"A: Malaria still kills hundreds of thousands of people.\nB: Mainly in sub-Saharan Africa?\nA: Yes, children are the most vulnerable.\nB: Prevention through mosquito nets is crucial.",
   funFact:"From 'palud' (swamp), because the disease was associated with marshy areas. English 'malaria' comes from Italian 'bad air'."},

  {type:"teach", trg:"la pénurie", src:"the shortage / scarcity", pos:"noun", gender:"f",
   note:"A severe lack of something essential.\nStronger than 'manque'. Often about resources.",
   example:"A: La pénurie d'eau touche de plus en plus de régions.\nB: Le changement climatique aggrave la situation.\nA: Il faut économiser chaque goutte.\nB: Des restrictions sont déjà en place dans le sud.",
   exampleSrc:"A: The water shortage affects more and more regions.\nB: Climate change is making the situation worse.\nA: Every drop must be saved.\nB: Restrictions are already in place in the south.",
   funFact:"From Latin 'penuria' (want/need). During WWII, France experienced severe 'pénuries' of food and fuel."},

  {type:"fb",
   s:"La {1} d'eau potable est un défi mondial qui s'aggrave chaque année.",
   a:["pénurie"],
   opts:["pénurie","porosité","globalité","intensification"],
   hint:"This word means a severe lack or shortage of something essential, stronger than 'manque'.",
   sSrc:"The {1} of drinking water is a global challenge that worsens each year."},

  {type:"teach", trg:"le processeur", src:"the processor", pos:"noun", gender:"m",
   note:"The brain of a computer. Also: someone who processes.\nTech vocabulary essential in modern French.",
   example:"A: Ce processeur est très puissant.\nB: Il consomme beaucoup d'énergie?\nA: Moins que l'ancien modèle, en fait.\nB: La technologie devient plus efficiente.",
   exampleSrc:"A: This processor is very powerful.\nB: Does it consume a lot of energy?\nA: Less than the old model, actually.\nB: Technology is becoming more efficient.",
   funFact:"From 'processus' (process) + '-eur'. Data centers' electricity consumption is a growing environmental concern in France."},

  {type:"teach", trg:"la programmation", src:"the programming", pos:"noun", gender:"f",
   note:"Writing computer code. Also: scheduling events.\n'La programmation informatique' = computer programming.",
   example:"A: La programmation est enseignée dès le primaire maintenant.\nB: En France aussi?\nA: Oui, depuis 2016 dans les écoles.\nB: C'est devenu une compétence fondamentale.",
   exampleSrc:"A: Programming is taught from primary school now.\nB: In France too?\nA: Yes, since 2016 in schools.\nB: It's become a fundamental skill.",
   funFact:"France has produced major tech talent. The original Minitel (1980s) was a precursor to the internet. 42 school teaches coding for free."},

  {type:"mc",
   q:"Quel mot désigne une maladie tropicale transmise par les moustiques?",
   opts:["Le paludisme","Le phosphate","Le grillage","Le processeur"],
   ans:"Le paludisme",
   hint:"This disease name comes from the Latin word for 'swamp', where the transmitting insects breed."},

  {type:"match", pairs:[
    {trg:"pénurie", src:"shortage"},
    {trg:"paludisme", src:"malaria"},
    {trg:"grillage", src:"wire mesh"},
    {trg:"phosphate", src:"phosphate"},
    {trg:"processeur", src:"processor"}
  ]},

  {type:"fb",
   s:"L'{1} de l'agriculture a des conséquences graves sur la biodiversité.",
   a:["intensification"],
   opts:["intensification","globalité","programmation","porosité"],
   hint:"This noun describes the process of making farming more intensive, with monocultures and chemicals.",
   sSrc:"The {1} of agriculture has serious consequences for biodiversity."}
]};
export default LESSON_6;
