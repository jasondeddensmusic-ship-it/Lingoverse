// French B2 Gap Batch D Lesson 12. History and Heritage
const LESSON_12 = {id:"frv2_b2gD_l12", title:"Histoire et patrimoine", icon:"🏰", xp:15, board:true, steps:[
  {type:"intro", title:"Histoire et patrimoine",
   desc:"Build vocabulary for discussing historical events, cultural heritage, and the past in French.",
   goals:["Learn 10 history and heritage terms","Discuss historical events and figures","Use formal historical register"]},

  {type:"teach", trg:"le pharaon", src:"the pharaoh", pos:"noun", gender:"m",
   note:"A ruler of ancient Egypt.\nUsed literally and figuratively for an all-powerful leader.",
   example:"A: Le pharaon Ramsès II a régné pendant 66 ans.\nB: C'est un des plus longs règnes de l'histoire.\nA: Il a construit des temples magnifiques.\nB: Abou Simbel est le plus impressionnant.",
   exampleSrc:"A: Pharaoh Ramesses II reigned for 66 years.\nB: That's one of the longest reigns in history.\nA: He built magnificent temples.\nB: Abu Simbel is the most impressive.",
   funFact:"From Egyptian 'per-aa' (great house). France's Louvre houses major Egyptian collections. Napoleon's Egypt expedition sparked Egyptology."},

  {type:"teach", trg:"le parachute", src:"the parachute", pos:"noun", gender:"m",
   note:"A device to slow descent through air.\nFigurative: 'parachute doré' (golden parachute, CEO severance).",
   example:"A: Son parachute doré fait scandale.\nB: Combien a-t-il touché?\nA: Plusieurs millions d'euros.\nB: Alors que l'entreprise licencie des employés.",
   exampleSrc:"A: His golden parachute is causing a scandal.\nB: How much did he receive?\nA: Several million euros.\nB: While the company is laying off employees.",
   funFact:"Invented by Louis-Sebastien Lenormand in France (1783). The word comes from 'para-' (against) + 'chute' (fall). A French invention."},

  {type:"teach", trg:"la paroisse", src:"the parish", pos:"noun", gender:"f",
   note:"A local church community and its territory.\nHistorically the basic unit of French social organization.",
   example:"A: La paroisse organise une fête de village.\nB: C'est ce samedi?\nA: Oui, avec un marché et un concert.\nB: Toute la communauté sera là.",
   exampleSrc:"A: The parish is organizing a village festival.\nB: Is it this Saturday?\nA: Yes, with a market and a concert.\nB: The whole community will be there.",
   funFact:"Before the Revolution, parishes were the administrative units of France. The word comes from Greek 'paroikia' (neighborhood)."},

  {type:"teach", trg:"le préambule", src:"the preamble / prelude", pos:"noun", gender:"m",
   note:"An introductory statement or event before the main content.\n'Sans préambule' = without preamble, directly.",
   example:"A: Sans préambule, passons au sujet principal.\nB: D'accord, je vous écoute.\nA: Le projet nécessite un investissement important.\nB: Combien exactement?",
   exampleSrc:"A: Without preamble, let's get to the main topic.\nB: Alright, I'm listening.\nA: The project requires a significant investment.\nB: How much exactly?",
   funFact:"The preamble of the French Constitution (1958) references the 1789 Declaration and the 1946 preamble. It has constitutional force."},

  {type:"mc",
   q:"Que signifie 'un parachute doré' en français?",
   opts:["Une indemnité de départ très élevée pour un dirigeant","Un sport de parachutisme en or","Un objet historique au musée","Une décoration militaire"],
   ans:"Une indemnité de départ très élevée pour un dirigeant",
   hint:"Think of a CEO who 'falls' safely from a company with a very generous financial cushion."},

  {type:"teach", trg:"la lèse-majesté", src:"the lese-majesty / offense against authority", pos:"noun", gender:"f",
   note:"An offense against the dignity of a ruler.\nNow figurative: any challenge to authority. Fixed expression.",
   example:"A: Critiquer le chef, c'est de la lèse-majesté ici.\nB: Il n'accepte aucune opposition?\nA: Non, il prend tout comme une attaque personnelle.\nB: Ce n'est pas un bon style de management.",
   exampleSrc:"A: Criticizing the boss is lese-majesty here.\nB: He doesn't accept any opposition?\nA: No, he takes everything as a personal attack.\nB: That's not a good management style.",
   funFact:"From Latin 'laesa majestas' (injured majesty). In Thailand, lese-majesty laws still carry prison sentences. In France, it was abolished in 1881."},

  {type:"teach", trg:"le guet-apens", src:"the ambush / trap", pos:"noun", gender:"m",
   note:"A planned attack on an unsuspecting person.\nLegal term and everyday expression. Plural: guets-apens.",
   example:"A: Les policiers sont tombés dans un guet-apens.\nB: C'était un piège?\nA: Oui, les malfaiteurs les attendaient.\nB: Heureusement, personne n'a été blessé.",
   exampleSrc:"A: The police officers fell into an ambush.\nB: Was it a trap?\nA: Yes, the criminals were waiting for them.\nB: Fortunately, nobody was injured.",
   funFact:"From Old French 'guet' (watch) + 'apens' (premeditated). The 's' in 'apens' is silent. A legal term still used in French criminal law."},

  {type:"teach", trg:"l'obus", src:"the shell / artillery round", pos:"noun", gender:"m",
   note:"A projectile fired from a cannon or heavy weapon.\nThe 's' is silent. Common in WWI history.",
   example:"A: Des obus de la Première Guerre sont encore trouvés.\nB: C'est dangereux?\nA: Très. Les démineurs interviennent régulièrement.\nB: Cent ans après, la terre garde ses cicatrices.",
   exampleSrc:"A: Shells from World War I are still being found.\nB: Is it dangerous?\nA: Very. Bomb disposal teams intervene regularly.\nB: A hundred years later, the earth keeps its scars.",
   funFact:"From Czech 'houfnice' via German. Northern France still yields hundreds of WWI shells annually. The 'zone rouge' remains contaminated."},

  {type:"fb",
   s:"Les soldats sont tombés dans un {1} en traversant la forêt.",
   a:["guet-apens"],
   opts:["guet-apens","préambule","parachute","obus"],
   hint:"This compound noun describes a premeditated surprise attack, literally a 'watched trap'.",
   sSrc:"The soldiers fell into an {1} while crossing the forest."},

  {type:"teach", trg:"la détonation", src:"the detonation / explosion", pos:"noun", gender:"f",
   note:"A sudden, violent explosion. Also: the sound of an explosion.\nFrom 'détoner' (to detonate).",
   example:"A: Une forte détonation a réveillé tout le quartier.\nB: C'était quoi?\nA: L'usine voisine a eu un accident.\nB: Heureusement, il n'y a pas de victimes.",
   exampleSrc:"A: A loud detonation woke up the whole neighborhood.\nB: What was it?\nA: The neighboring factory had an accident.\nB: Fortunately, there are no victims.",
   funFact:"From Latin 'detonare' (to thunder down). Not to be confused with 'déflagration', which is a slower combustion. Both are B2 vocabulary."},

  {type:"teach", trg:"le positivisme", src:"the positivism", pos:"noun", gender:"m",
   note:"A philosophy that only accepts scientific, verifiable knowledge.\nFounded by Auguste Comte.",
   example:"A: Le positivisme a dominé la pensée du XIXe siècle.\nB: Auguste Comte en est le fondateur?\nA: Oui, il croyait en la science comme guide moral.\nB: Cette philosophie a influencé toute l'Europe.",
   exampleSrc:"A: Positivism dominated 19th-century thought.\nB: Auguste Comte is the founder?\nA: Yes, he believed in science as a moral guide.\nB: This philosophy influenced all of Europe.",
   funFact:"Auguste Comte, a Frenchman, founded positivism. Brazil's flag motto 'Ordem e Progresso' comes directly from Comte's positivist principles."},

  {type:"mc",
   q:"Qu'est-ce qu'un obus?",
   opts:["Un casque militaire","Un projectile tiré par un canon","Un mur de fortification","Un type de bouclier"],
   ans:"Un projectile tiré par un canon",
   hint:"This military term refers to what heavy weapons fire. Many are still found in French soil from WWI."},

  {type:"match", pairs:[
    {trg:"pharaon", src:"pharaoh"},
    {trg:"paroisse", src:"parish"},
    {trg:"lèse-majesté", src:"lese-majesty"},
    {trg:"obus", src:"shell"},
    {trg:"détonation", src:"detonation"}
  ]},

  {type:"fb",
   s:"Le {1} d'Auguste Comte a profondément influencé la science moderne.",
   a:["positivisme"],
   opts:["positivisme","préambule","pharaon","parachute"],
   hint:"This 19th-century French philosophy holds that only scientific, verifiable knowledge is valid.",
   sSrc:"Auguste Comte's {1} profoundly influenced modern science."}
]};
export default LESSON_12;
