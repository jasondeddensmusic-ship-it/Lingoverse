// French B2 Gap Batch D Lesson 7. Daily Life and Objects
const LESSON_7 = {id:"frv2_b2gD_l7", title:"Vie quotidienne et objets", icon:"🏠", xp:15, board:true, steps:[
  {type:"intro", title:"Vie quotidienne et objets",
   desc:"Learn vocabulary for everyday objects, household items, and daily routines that come up in real French life.",
   goals:["Learn 10 everyday vocabulary words","Describe household objects and activities","Use compound nouns naturally"]},

  {type:"teach", trg:"le coffre-fort", src:"the safe / strongbox", pos:"noun", gender:"m",
   note:"A reinforced box for storing valuables.\nCompound noun: 'coffre' (chest) + 'fort' (strong).",
   example:"A: Tu as un coffre-fort chez toi?\nB: Oui, pour les documents importants.\nA: C'est un bon investissement.\nB: Surtout avec tous les cambriolages du quartier.",
   exampleSrc:"A: Do you have a safe at home?\nB: Yes, for important documents.\nA: It's a good investment.\nB: Especially with all the burglaries in the neighborhood.",
   funFact:"Plural: 'des coffres-forts'. Both parts take the plural. French compound nouns have complex plural rules."},

  {type:"teach", trg:"le grille-pain", src:"the toaster", pos:"noun", gender:"m",
   note:"A device for toasting bread.\nCompound: 'grille' (grills) + 'pain' (bread). Invariable plural.",
   example:"A: Le grille-pain ne marche plus.\nB: Il est vieux, il faut en acheter un nouveau.\nA: Tu préfères un modèle deux ou quatre tranches?\nB: Quatre, on est une grande famille.",
   exampleSrc:"A: The toaster doesn't work anymore.\nB: It's old, we need to buy a new one.\nA: Do you prefer a two or four slice model?\nB: Four, we're a big family.",
   funFact:"The plural is 'des grille-pain' (invariable). The French love their morning tartines (bread with butter and jam)."},

  {type:"teach", trg:"la poussette", src:"the stroller / pushchair", pos:"noun", gender:"f",
   note:"A wheeled chair for babies and toddlers.\nFrom 'pousser' (to push).",
   example:"A: On a besoin d'une nouvelle poussette.\nB: La petite a grandi si vite.\nA: Il nous faut un modèle plus léger.\nB: Pour les voyages, une poussette pliable serait idéale.",
   exampleSrc:"A: We need a new stroller.\nB: The little one has grown so fast.\nA: We need a lighter model.\nB: For traveling, a foldable stroller would be ideal.",
   funFact:"From 'pousser' (to push) + '-ette' (diminutive). Paris is notoriously difficult to navigate with a poussette due to stairs."},

  {type:"teach", trg:"le binocle", src:"the pince-nez / old glasses", pos:"noun", gender:"m",
   note:"Old-fashioned glasses without earpieces.\nNow used humorously for any glasses. Informal.",
   example:"A: Tu as vu mes binocles?\nB: Ils sont sur ta tête, comme d'habitude.\nA: Ah oui, je les cherche toujours.\nB: Tu devrais les accrocher avec un cordon.",
   exampleSrc:"A: Have you seen my glasses?\nB: They're on your head, as usual.\nA: Oh yes, I'm always looking for them.\nB: You should attach them with a cord.",
   funFact:"From Latin 'bini' (two) + 'oculus' (eye). In casual French, 'binocles' is a playful synonym for 'lunettes'."},

  {type:"mc",
   q:"Qu'est-ce qu'un grille-pain?",
   opts:["Un appareil pour faire griller le pain","Un couteau pour couper le pain","Un panier pour ranger le pain","Un plat pour servir le pain"],
   ans:"Un appareil pour faire griller le pain",
   hint:"The compound noun literally describes what this kitchen appliance does to bread."},

  {type:"teach", trg:"le compte-gouttes", src:"the dropper / eyedropper", pos:"noun", gender:"m",
   note:"A small tube for dispensing drops of liquid.\nFigurative: 'au compte-gouttes' = very sparingly.",
   example:"A: Les informations arrivent au compte-gouttes.\nB: C'est frustrant d'attendre.\nA: Ils ne veulent rien révéler trop vite.\nB: La patience est de mise.",
   exampleSrc:"A: Information is coming in drop by drop.\nB: It's frustrating to wait.\nA: They don't want to reveal anything too fast.\nB: Patience is called for.",
   funFact:"The expression 'au compte-gouttes' (drop by drop) is much more common than the literal object. Used for slow information release."},

  {type:"teach", trg:"la maisonnée", src:"the household / everyone in the house", pos:"noun", gender:"f",
   note:"All the people living in one house.\nWarm, slightly old-fashioned word.",
   example:"A: Toute la maisonnée était réunie pour le repas.\nB: C'est rare de nos jours.\nA: Les grands-parents, les enfants, les cousins.\nB: Ces moments sont précieux.",
   exampleSrc:"A: The whole household was gathered for the meal.\nB: That's rare nowadays.\nA: The grandparents, children, cousins.\nA: These moments are precious.",
   funFact:"From 'maison' + '-ée' (collective suffix). The -ée suffix often indicates a quantity: 'bouchée' (mouthful), 'poignée' (handful)."},

  {type:"teach", trg:"le laissez-passer", src:"the pass / permit", pos:"noun", gender:"m",
   note:"An official document granting passage or access.\nInvariable: 'des laissez-passer'.",
   example:"A: Il faut un laissez-passer pour entrer dans la zone.\nB: Où est-ce qu'on le demande?\nA: Au bureau de sécurité, avec une pièce d'identité.\nB: C'est valable combien de temps?",
   exampleSrc:"A: You need a pass to enter the zone.\nB: Where do you request it?\nA: At the security office, with an ID.\nB: How long is it valid?",
   funFact:"Literally 'let pass', a verb phrase frozen as a noun. English borrowed it directly as 'laissez-passer' in diplomacy."},

  {type:"fb",
   s:"Les nouvelles arrivent au {1}, ce qui rend l'attente insupportable.",
   a:["compte-gouttes"],
   opts:["compte-gouttes","grille-pain","coffre-fort","laissez-passer"],
   hint:"This expression means 'drop by drop' or very sparingly, named after a medical instrument.",
   sSrc:"News is coming in {1} by {1}, making the wait unbearable."},

  {type:"teach", trg:"le petit-déjeuner", src:"the breakfast", pos:"noun", gender:"m",
   note:"The morning meal. Compound: 'petit' (small) + 'déjeuner' (lunch).\n'Prendre le petit-déjeuner' = to have breakfast.",
   example:"A: Le petit-déjeuner est le repas le plus important.\nB: Tu prends quoi le matin?\nA: Un café et des tartines beurrées.\nB: Le petit-déjeuner français classique.",
   exampleSrc:"A: Breakfast is the most important meal.\nB: What do you have in the morning?\nA: A coffee and buttered bread slices.\nB: The classic French breakfast.",
   funFact:"French breakfast is traditionally light: coffee, bread, butter, jam. A 'grand petit-déjeuner' with eggs is more Anglo-Saxon."},

  {type:"teach", trg:"la guise", src:"the way / manner", pos:"noun", gender:"f",
   note:"Manner or fashion. Mainly in 'en guise de' (by way of).\nAlso: 'à sa guise' (as one pleases).",
   example:"A: Il a offert des fleurs en guise d'excuse.\nB: C'est un beau geste.\nA: Elle les a acceptées en souriant.\nB: Chacun fait les choses à sa guise.",
   exampleSrc:"A: He offered flowers by way of apology.\nB: That's a nice gesture.\nA: She accepted them with a smile.\nB: Everyone does things their own way.",
   funFact:"From Frankish 'wisa' (manner), same root as German 'Weise'. Almost always used in fixed expressions in modern French."},

  {type:"mc",
   q:"Que signifie 'en guise de remerciement'?",
   opts:["En échange d'un service","Comme façon de remercier","Pour punir quelqu'un","Sans aucune raison"],
   ans:"Comme façon de remercier",
   hint:"'En guise de' means 'by way of' or 'as a form of'. Think about what follows this expression."},

  {type:"match", pairs:[
    {trg:"coffre-fort", src:"safe"},
    {trg:"poussette", src:"stroller"},
    {trg:"maisonnée", src:"household"},
    {trg:"laissez-passer", src:"permit"},
    {trg:"petit-déjeuner", src:"breakfast"}
  ]},

  {type:"fb",
   s:"Il faut un {1} spécial pour accéder à cette zone militaire.",
   a:["laissez-passer"],
   opts:["laissez-passer","coffre-fort","compte-gouttes","grille-pain"],
   hint:"This official document literally means 'let pass' and grants entry to restricted areas.",
   sSrc:"You need a special {1} to access this military zone."}
]};
export default LESSON_7;
