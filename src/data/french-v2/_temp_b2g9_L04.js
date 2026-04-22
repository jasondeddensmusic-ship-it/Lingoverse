// French B2 Gap Batch 9. Lesson 4: Vie Quotidienne Avancée
// Advanced daily life vocabulary

const LESSON_4 = {id:"frv2_b2g9_l4", title:"Vie Quotidienne Avancée", icon:"🏠", xp:15, board:true, steps:[
  {type:"intro", title:"Vie Quotidienne Avancée",
   desc:"Expand your everyday vocabulary with advanced household, food, and daily routine words that native speakers use constantly.",
   goals:["Learn 20 advanced daily life words","Describe household objects precisely","Discuss routines and habits"]},

  {type:"teach", trg:"le grille-pain", src:"toaster", pos:"noun", gender:"m",
   note:"Griller (to toast) + pain (bread).\nA compound noun. Invariable plural: des grille-pain.",
   example:"A: Le grille-pain est cassé.\nB: Achètes-en un nouveau, celui-ci a dix ans.",
   exampleSrc:"A: The toaster is broken.\nB: Buy a new one, this one is ten years old.",
   funFact:"French compound nouns with verb+noun often do not change in the plural: un grille-pain, des grille-pain."},

  {type:"teach", trg:"le coffre-fort", src:"safe, strongbox", pos:"noun", gender:"m",
   note:"Coffre (chest) + fort (strong).\nPlural: des coffres-forts (both parts change).",
   example:"A: Les bijoux sont dans le coffre-fort.\nB: Tu connais la combinaison?",
   exampleSrc:"A: The jewels are in the safe.\nB: Do you know the combination?",
   funFact:"Unlike grille-pain, coffre-fort pluralizes both parts because both are nouns/adjectives."},

  {type:"teach", trg:"le petit-déjeuner", src:"breakfast", pos:"noun", gender:"m",
   note:"Petit (small) + déjeuner (lunch).\nThe 'small lunch' before the real lunch.",
   example:"A: Le petit-déjeuner est servi jusqu'à dix heures.\nB: Je prendrai un croissant et un café.",
   exampleSrc:"A: Breakfast is served until ten o'clock.\nB: I'll have a croissant and a coffee.",
   funFact:"In France, petit-déjeuner is typically light: bread, butter, jam, and coffee. No eggs or bacon."},

  {type:"teach", trg:"l'amuse-gueule", src:"appetizer, snack", pos:"noun", gender:"m",
   note:"Amuser (to amuse) + gueule (mouth, informal).\nSmall bites served before a meal.",
   example:"A: J'ai préparé des amuse-gueules pour l'apéro.\nB: Les mini-quiches sont délicieuses!",
   exampleSrc:"A: I prepared appetizers for the drinks.\nB: The mini-quiches are delicious!",
   funFact:"Gueule literally means an animal's mouth. Using it for humans is informal but accepted here."},

  {type:"teach", trg:"le grillage", src:"wire mesh, fencing", pos:"noun", gender:"m",
   note:"From grille (grid) + -age.\nMetal fence or wire netting.",
   example:"A: Le grillage du jardin est rouillé.\nB: Il faut le remplacer avant l'hiver.",
   exampleSrc:"A: The garden fence is rusty.\nB: We need to replace it before winter.",
   funFact:"Grillage comes from grille, which gave English 'grill'. The mesh looks like a grill pattern."},

  {type:"teach", trg:"le peigne", src:"comb", pos:"noun", gender:"m",
   note:"From Latin pecten (comb).\nPeigner = to comb. Se peigner = to comb one's hair.",
   example:"A: Passe-moi le peigne, s'il te plaît.\nB: Il est dans le tiroir de la salle de bain.",
   exampleSrc:"A: Pass me the comb, please.\nB: It's in the bathroom drawer.",
   funFact:"The expression 'passer au peigne fin' means to go through with a fine-tooth comb."},

  {type:"teach", trg:"la maisonnée", src:"household (people)", pos:"noun", gender:"f",
   note:"From maison + -ée.\nAll the people living in one house.",
   example:"A: Toute la maisonnée était endormie.\nB: Seul le chat était encore éveillé.",
   exampleSrc:"A: The whole household was asleep.\nB: Only the cat was still awake.",
   funFact:"The -ée suffix often indicates a collective: maisonnée (household), tablée (table full of people)."},

  {type:"teach", trg:"le binocle", src:"pince-nez, spectacles (old)", pos:"noun", gender:"m",
   note:"Bi- (two) + Latin oculus (eye).\nOld-fashioned glasses without earpieces.",
   example:"A: Mon arrière-grand-père portait un binocle.\nB: C'était courant au dix-neuvième siècle.",
   exampleSrc:"A: My great-grandfather wore a pince-nez.\nB: That was common in the nineteenth century.",
   funFact:"In modern French, binocle is sometimes used humorously for any glasses: 'Où sont mes binocles?'"},

  {type:"teach", trg:"la grossièreté", src:"rudeness, vulgarity", pos:"noun", gender:"f",
   note:"From grossier (rude, coarse) + -eté.\nBad manners or vulgar language.",
   example:"A: Sa grossièreté a choqué tout le monde.\nB: On ne parle pas comme ça en société.",
   exampleSrc:"A: His rudeness shocked everyone.\nB: You don't talk like that in company.",
   funFact:"Grossier originally meant 'thick, coarse' (from gros). The meaning shifted to 'rude'."},

  {type:"mc", q:"Un amuse-gueule est:", opts:["Un petit en-cas servi avant le repas","Un jeu de société","Un plat principal","Un dessert"], ans:"Un petit en-cas servi avant le repas",
   hint:"It 'amuses' the mouth before the main meal. Small bites with drinks."},

  {type:"teach", trg:"le penchant", src:"inclination, tendency", pos:"noun", gender:"m",
   note:"From pencher (to lean).\nA natural tendency toward something.",
   example:"A: Il a un penchant pour les sucreries.\nB: Il en mange à chaque repas.",
   exampleSrc:"A: He has a weakness for sweets.\nB: He eats them at every meal.",
   funFact:"Pencher means to lean. A penchant is a psychological 'leaning' toward something."},

  {type:"teach", trg:"pentu", src:"steep, sloping", pos:"adj", gender:null,
   note:"From pente (slope).\nDescribes terrain or surfaces. Feminine: pentue.",
   example:"A: La rue est très pentue ici.\nB: Fais attention en hiver quand il y a du verglas.",
   exampleSrc:"A: The street is very steep here.\nB: Be careful in winter when there's ice.",
   funFact:"Pente gives pentu (steep) the way that côte gives côtu... except côtu does not exist!"},

  {type:"teach", trg:"l'encombre", src:"obstacle, hindrance", pos:"noun", gender:"m",
   note:"Usually in: sans encombre = without a hitch.\nFrom encombrer (to obstruct).",
   example:"A: Le voyage s'est passé sans encombre.\nB: Pas de retard, pas de problème!",
   exampleSrc:"A: The trip went without a hitch.\nB: No delay, no problem!",
   funFact:"Sans encombre is one of the most common fixed expressions using this word."},

  {type:"teach", trg:"la niaiserie", src:"foolishness, silliness", pos:"noun", gender:"f",
   note:"From niais (naive, silly).\nStupid behavior or silly remarks.",
   example:"A: Arrête tes niaiseries!\nB: Je plaisantais, c'est tout.",
   exampleSrc:"A: Stop your nonsense!\nB: I was just joking, that's all.",
   funFact:"Niais originally meant a young falcon not yet trained. The meaning shifted to 'foolish' over centuries."},

  {type:"fb", s:"Le voyage s'est déroulé sans {1}.", a:["encombre"], opts:["encombre","peigne","grillage","binocle"],
   hint:"Everything went smoothly, without any obstacle or problem.",
   sSrc:"The trip went without any {1}."},

  {type:"teach", trg:"la petitesse", src:"smallness, pettiness", pos:"noun", gender:"f",
   note:"From petit (small) + -esse.\nPhysical smallness or moral pettiness.",
   example:"A: La petitesse de son geste m'a déçu.\nB: On attendait mieux de lui.",
   exampleSrc:"A: The pettiness of his gesture disappointed me.\nB: We expected better from him.",
   funFact:"The -esse suffix creates abstract nouns: petit > petitesse, like English small > smallness."},

  {type:"teach", trg:"la malhonnêteté", src:"dishonesty", pos:"noun", gender:"f",
   note:"Mal- (bad) + honnêteté (honesty).\nLack of integrity or truthfulness.",
   example:"A: La malhonnêteté du vendeur était évidente.\nB: Il a été sanctionné par l'entreprise.",
   exampleSrc:"A: The seller's dishonesty was obvious.\nB: He was sanctioned by the company.",
   funFact:"Honnête in French means both 'honest' and 'decent'. Malhonnête covers both opposites."},

  {type:"teach", trg:"piteux", src:"pitiful, pathetic", pos:"adj", gender:null,
   note:"In a sorry state. Feminine: piteuse.\nOften: en piteux état = in a sorry state.",
   example:"A: La voiture est en piteux état.\nB: Elle ne passera jamais le contrôle technique.",
   exampleSrc:"A: The car is in a pitiful state.\nB: It will never pass the inspection.",
   funFact:"From Old French pité (pity). The expression 'faire piteuse mine' means to look wretched."},

  {type:"mc", q:"'Sans encombre' signifie:", opts:["Avec difficulté","Sans aucun problème","Avec beaucoup de monde","En retard"], ans:"Sans aucun problème",
   hint:"Encombre means obstacle. Without any obstacle means smoothly."},

  {type:"fb", s:"Il a un {1} pour le chocolat noir.", a:["penchant"], opts:["penchant","peigne","pilier","pamphlet"],
   hint:"A natural inclination or weakness. From pencher, to lean toward something.",
   sSrc:"He has a {1} for dark chocolate."},

  {type:"match", pairs:[
    {trg:"le grille-pain", src:"toaster"},
    {trg:"le coffre-fort", src:"safe"},
    {trg:"le peigne", src:"comb"},
    {trg:"le binocle", src:"pince-nez"}
  ]},

  {type:"mc", q:"La voiture est en piteux état signifie:", opts:["La voiture est chère","La voiture est neuve","La voiture est en mauvais état","La voiture est rapide"], ans:"La voiture est en mauvais état",
   hint:"Piteux comes from the word for pity. In a pitiable, sorry condition."},

  {type:"fb", s:"Sa {1} a choqué ses collègues.", a:["grossièreté"], opts:["grossièreté","petitesse","maisonnée","niaiserie"],
   hint:"His vulgar, rude behavior. From grossier meaning coarse.",
   sSrc:"His {1} shocked his colleagues."},

  {type:"match", pairs:[
    {trg:"la maisonnée", src:"household"},
    {trg:"la grossièreté", src:"rudeness"},
    {trg:"la petitesse", src:"pettiness"},
    {trg:"la malhonnêteté", src:"dishonesty"}
  ]}
]};

export default LESSON_4;
