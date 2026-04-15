// French B2 Gap Batch 9 — Lesson 17: Noms Composés
// Compound nouns and hyphenated words

const LESSON_17 = {id:"frv2_b2g9_l17", title:"Noms Composés", icon:"🔗", xp:15, board:true, steps:[
  {type:"intro", title:"Noms Composés",
   desc:"Master French compound nouns: how they are formed, how they pluralize, and what they mean. Compound nouns are a hallmark of advanced French.",
   goals:["Learn 20 compound nouns","Understand pluralization rules","Use compounds naturally in context"]},

  {type:"teach", trg:"le grille-pain", src:"toaster", pos:"noun", gender:"m",
   note:"Griller (to toast) + pain (bread).\nInvariable plural: des grille-pain.",
   example:"A: Le grille-pain a brûlé ma tartine!\nB: Baisse le thermostat la prochaine fois.",
   exampleSrc:"A: The toaster burned my toast!\nB: Lower the thermostat next time.",
   funFact:"Verb+noun compounds are invariable in plural: un grille-pain, des grille-pain. The verb never changes."},

  {type:"teach", trg:"le coffre-fort", src:"safe, strongbox", pos:"noun", gender:"m",
   note:"Coffre (chest) + fort (strong).\nPlural: des coffres-forts (both change).",
   example:"A: Le code du coffre-fort a été changé.\nB: Seul le directeur le connaît.",
   exampleSrc:"A: The safe's code has been changed.\nB: Only the director knows it.",
   funFact:"Noun+adjective compounds pluralize both parts: coffre-fort > coffres-forts."},

  {type:"teach", trg:"le coupe-papier", src:"letter opener", pos:"noun", gender:"m",
   note:"Couper (to cut) + papier (paper).\nInvariable: des coupe-papier.",
   example:"A: Ce coupe-papier en ivoire est une antiquité.\nB: Il appartenait à mon arrière-grand-mère.",
   exampleSrc:"A: This ivory letter opener is an antique.\nB: It belonged to my great-grandmother.",
   funFact:"Like all verb+noun compounds, the plural does not change: des coupe-papier."},

  {type:"teach", trg:"le compte-gouttes", src:"dropper, eyedropper", pos:"noun", gender:"m",
   note:"Compter (to count) + gouttes (drops).\nFigurative: au compte-gouttes = very sparingly.",
   example:"A: Administrez le médicament au compte-gouttes.\nB: Trois gouttes toutes les quatre heures.",
   exampleSrc:"A: Administer the medicine with the dropper.\nB: Three drops every four hours.",
   funFact:"Au compte-gouttes is used 10 times more in its figurative meaning than its literal one."},

  {type:"teach", trg:"le garde-chasse", src:"gamekeeper", pos:"noun", gender:"m",
   note:"Garde (guard) + chasse (hunting).\nPlural: des gardes-chasse.",
   example:"A: Le garde-chasse veille sur la réserve.\nB: Il connaît chaque sentier de la forêt.",
   exampleSrc:"A: The gamekeeper watches over the reserve.\nB: He knows every path in the forest.",
   funFact:"When garde means a person (not the action), it changes in plural: gardes-chasse."},

  {type:"teach", trg:"le pied-de-biche", src:"crowbar", pos:"noun", gender:"m",
   note:"Pied (foot) + de + biche (doe).\nShaped like a deer's split hoof.",
   example:"A: Le cambrioleur a utilisé un pied-de-biche.\nB: La porte a été forcée.",
   exampleSrc:"A: The burglar used a crowbar.\nB: The door was forced open.",
   funFact:"Also means the presser foot of a sewing machine. Same shape, different scale."},

  {type:"teach", trg:"le café-tabac", src:"cafe-tobacconist", pos:"noun", gender:"m",
   note:"A cafe that also sells tobacco.\nPlural: des cafés-tabacs.",
   example:"A: Retrouvons-nous au café-tabac de la place.\nB: Je serai là à midi.",
   exampleSrc:"A: Let's meet at the cafe-tobacconist on the square.\nB: I'll be there at noon.",
   funFact:"The red diamond sign of the tabac is one of the most recognizable symbols in France."},

  {type:"teach", trg:"le guet-apens", src:"ambush", pos:"noun", gender:"m",
   note:"Guet (watching) + apens (premeditated).\nInvariable: des guet-apens.",
   example:"A: Le guet-apens était minutieusement préparé.\nB: Les victimes n'avaient aucune chance.",
   exampleSrc:"A: The ambush was meticulously prepared.\nB: The victims had no chance.",
   funFact:"Apens only exists in this compound. It is a fossil from Old French meaning 'premeditated'."},

  {type:"teach", trg:"le laissez-passer", src:"permit, pass", pos:"noun", gender:"m",
   note:"Laissez (let) + passer (pass). An imperative compound.\nInvariable: des laissez-passer.",
   example:"A: Sans laissez-passer, l'entrée est interdite.\nB: Demandez-en un à l'accueil.",
   exampleSrc:"A: Without a pass, entry is forbidden.\nB: Ask for one at reception.",
   funFact:"Imperative compounds like laissez-passer and laissez-faire never change in plural."},

  {type:"tip", title:"Compound Noun Plurals",
   text:"French compound noun plurals follow patterns:\n\n1. Verb + noun: invariable (des grille-pain, des coupe-papier)\n2. Noun + adjective: both change (des coffres-forts)\n3. Noun + noun: both change (des cafés-tabacs)\n4. Noun + de + noun: first changes (des arcs-en-ciel)\n5. Imperative: invariable (des laissez-passer)\n6. Person + noun: person changes (des gardes-chasse)",
   deepDive:{title:"Why So Complicated?",
    text:"Each compound reflects its internal grammar. In grille-pain, the verb 'griller' never takes a plural. In coffres-forts, both parts are independent words that can be pluralized. The rules follow logic, but you need to know the structure of each compound to apply them correctly. When in doubt, check a dictionary."}},

  {type:"mc", q:"Le pluriel de grille-pain est:", opts:["Des grilles-pains","Des grille-pains","Des grille-pain","Des grilles-pain"], ans:"Des grille-pain",
   hint:"Verb + noun compounds are invariable. Neither part changes in the plural."},

  {type:"teach", trg:"l'amuse-gueule", src:"appetizer snack", pos:"noun", gender:"m",
   note:"Amuser (to amuse) + gueule (mouth).\nSmall bites before a meal.",
   example:"A: Les amuse-gueules étaient délicieux.\nB: Surtout les petits feuilletés au fromage.",
   exampleSrc:"A: The appetizers were delicious.\nB: Especially the small cheese pastries.",
   funFact:"The more polite alternative is amuse-bouche (using bouche instead of the informal gueule)."},

  {type:"teach", trg:"le petit-déjeuner", src:"breakfast", pos:"noun", gender:"m",
   note:"Petit (small) + déjeuner (lunch).\nThe 'little lunch' that comes before lunch.",
   example:"A: Le petit-déjeuner est inclus dans le prix de l'hôtel.\nB: Croissants et café à volonté!",
   exampleSrc:"A: Breakfast is included in the hotel price.\nB: Unlimited croissants and coffee!",
   funFact:"In Belgium and Switzerland, déjeuner means breakfast and dîner means lunch. Regional variation!"},

  {type:"teach", trg:"la lèse-majesté", src:"lese-majesty", pos:"noun", gender:"f",
   note:"Léser (to harm) + majesté.\nOffense against royal or state authority.",
   example:"A: Le concept de lèse-majesté remonte au Moyen Âge.\nB: Insulter le roi était passible de mort.",
   exampleSrc:"A: The concept of lese-majesty dates back to the Middle Ages.\nB: Insulting the king was punishable by death.",
   funFact:"France abolished lèse-majesté with the Republic. Some monarchies still enforce it."},

  {type:"teach", trg:"le passe-passe", src:"sleight of hand", pos:"noun", gender:"m",
   note:"Used only in: tour de passe-passe.\nA magic trick or clever deception.",
   example:"A: C'est un tour de passe-passe financier.\nB: L'argent disparaît des comptes.",
   exampleSrc:"A: It's a financial sleight of hand.\nB: Money disappears from the accounts.",
   funFact:"The repetition passe-passe mimics the magician's hand going back and forth."},

  {type:"fb", s:"Le pluriel de coffre-fort est {1}.", a:["coffres-forts"], opts:["coffres-forts","coffre-forts","coffres-fort","coffre-fort"],
   hint:"Noun + adjective: both parts take the plural. Two independent words.",
   sSrc:"The plural of coffre-fort is {1}."},

  {type:"mc", q:"Un amuse-bouche et un amuse-gueule sont:", opts:["Complètement différents","Le même concept, gueule est plus familier","L'un est salé, l'autre sucré","L'un est chaud, l'autre froid"], ans:"Le même concept, gueule est plus familier",
   hint:"Both mean appetizer snacks. G... (mouth, informal) vs bouche (mouth, polite)."},

  {type:"fb", s:"C'est un véritable {1} comptable.", a:["tour de passe-passe"], opts:["tour de passe-passe","tour de garde-chasse","tour de compte-gouttes","tour de café-tabac"],
   hint:"A magic trick, figuratively. Making money disappear like a magician.",
   sSrc:"It's a real accounting {1}."},

  {type:"match", pairs:[
    {trg:"le grille-pain", src:"toaster"},
    {trg:"le coffre-fort", src:"safe"},
    {trg:"le coupe-papier", src:"letter opener"},
    {trg:"le compte-gouttes", src:"dropper"}
  ]},

  {type:"mc", q:"Pourquoi dit-on 'des gardes-chasse' et non 'des garde-chasse'?", opts:["Parce que c'est un verbe","Parce que garde désigne une personne","Parce que chasse est féminin","Parce que c'est une exception"], ans:"Parce que garde désigne une personne",
   hint:"When g... means a person (not the action of guarding), it takes the plural."},

  {type:"fb", s:"Sans {1}, vous ne pouvez pas entrer dans la zone.", a:["laissez-passer"], opts:["laissez-passer","guet-apens","pied-de-biche","passe-passe"],
   hint:"An official permit. An imperative compound meaning 'let pass'.",
   sSrc:"Without a {1}, you cannot enter the zone."},

  {type:"match", pairs:[
    {trg:"le guet-apens", src:"ambush"},
    {trg:"le laissez-passer", src:"permit"},
    {trg:"le petit-déjeuner", src:"breakfast"},
    {trg:"la lèse-majesté", src:"lese-majesty"}
  ]}
]};

export default LESSON_17;
