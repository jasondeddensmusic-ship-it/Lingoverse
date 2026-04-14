// French B2 Gap Batch 9 — Lesson 12: Environnement et Nature
// Environment and nature vocabulary

const LESSON_12 = {id:"frv2_b2g9_l12", title:"Environnement et Nature", icon:"🌿", xp:15, board:true, steps:[
  {type:"intro", title:"Environnement et Nature",
   desc:"Master vocabulary for discussing environmental issues, natural phenomena, and ecological challenges at B2 level.",
   goals:["Learn 20 environment and nature words","Discuss ecological challenges","Describe natural phenomena"]},

  {type:"teach", trg:"le phosphate", src:"phosphate", pos:"noun", gender:"m",
   note:"A chemical compound used in fertilizers and detergents.\nFrom phosphore (phosphorus).",
   example:"A: Les phosphates polluent les rivières.\nB: Les algues se multiplient à cause d'eux.",
   exampleSrc:"A: Phosphates pollute rivers.\nB: Algae multiply because of them.",
   funFact:"France banned phosphates in household detergents to protect waterways."},

  {type:"teach", trg:"l'adduction", src:"supply (water), conveyance", pos:"noun", gender:"f",
   note:"From Latin adducere (to bring toward).\nAdduction d'eau = water supply system.",
   example:"A: L'adduction d'eau potable est un défi dans les zones rurales.\nB: Certains villages n'ont toujours pas l'eau courante.",
   exampleSrc:"A: Potable water supply is a challenge in rural areas.\nB: Some villages still don't have running water.",
   funFact:"Adduction is a technical term. For daily use, French says 'approvisionnement en eau'."},

  {type:"teach", trg:"l'orangé", src:"orangish (color)", pos:"noun", gender:"m",
   note:"The color between orange and red.\nAlso adjective: une teinte orangée (feminine).",
   example:"A: Le ciel avait une couleur orangée au coucher du soleil.\nB: C'était magnifique.",
   exampleSrc:"A: The sky had an orangish color at sunset.\nB: It was magnificent.",
   funFact:"French creates color nuances with -é: orangé (orangish), rosé (pinkish), doré (golden)."},

  {type:"teach", trg:"le garde-chasse", src:"gamekeeper", pos:"noun", gender:"m",
   note:"Garde (guard) + chasse (hunting).\nSomeone who protects hunting grounds and wildlife.",
   example:"A: Le garde-chasse a surpris des braconniers.\nB: Ils chassaient sans permis.",
   exampleSrc:"A: The gamekeeper caught poachers.\nB: They were hunting without a license.",
   funFact:"Garde-chasse is a hyphenated compound. Plural: des gardes-chasse (garde changes, chasse does not)."},

  {type:"teach", trg:"la globalité", src:"entirety, whole picture", pos:"noun", gender:"f",
   note:"From global + -ité.\nSeeing the complete picture, not just parts.",
   example:"A: Il faut voir le problème écologique dans sa globalité.\nB: Tout est interconnecté.",
   exampleSrc:"A: We must see the ecological problem in its entirety.\nB: Everything is interconnected.",
   funFact:"Dans sa globalité is the typical collocation: always with possessive sa/leur."},

  {type:"teach", trg:"la détonation", src:"detonation, blast", pos:"noun", gender:"f",
   note:"From détoner (to detonate).\nAlso used for thunder or volcanic explosions.",
   example:"A: La détonation du volcan a été entendue à cent kilomètres.\nB: Les vitres ont vibré dans toute la vallée.",
   exampleSrc:"A: The volcanic blast was heard a hundred kilometers away.\nB: Windows shook throughout the valley.",
   funFact:"Détoner (to detonate) has one N. Détonner (to clash) has two. They sound the same."},

  {type:"teach", trg:"le pied-de-biche", src:"crowbar, claw lever", pos:"noun", gender:"m",
   note:"Pied (foot) + de + biche (doe, female deer).\nA tool shaped like a deer's split hoof.",
   example:"A: Il a forcé la porte avec un pied-de-biche.\nB: La serrure n'a pas résisté.",
   exampleSrc:"A: He forced the door open with a crowbar.\nB: The lock didn't hold.",
   funFact:"Named after the forked shape of a female deer's hoof. Also a sewing machine foot."},

  {type:"teach", trg:"le coupe-papier", src:"letter opener, paper knife", pos:"noun", gender:"m",
   note:"Couper (to cut) + papier (paper).\nA blade for opening envelopes. Invariable plural.",
   example:"A: Il a ouvert la lettre avec un coupe-papier.\nB: C'était un modèle en argent ancien.",
   exampleSrc:"A: He opened the letter with a paper knife.\nB: It was an antique silver model.",
   funFact:"Like grille-pain, coupe-papier does not change in the plural: des coupe-papier."},

  {type:"teach", trg:"le compte-gouttes", src:"dropper, eyedropper", pos:"noun", gender:"m",
   note:"Compter (to count) + gouttes (drops).\nAlso figurative: au compte-gouttes = sparingly.",
   example:"A: Les informations arrivent au compte-gouttes.\nB: On ne sait presque rien pour l'instant.",
   exampleSrc:"A: Information is coming in very sparingly.\nB: We know almost nothing for now.",
   funFact:"Au compte-gouttes (drop by drop) is more common than the literal dropper meaning."},

  {type:"mc", q:"'Au compte-gouttes' signifie:", opts:["En grande quantité","Très lentement et peu à peu","Avec un instrument médical","En comptant soigneusement"], ans:"Très lentement et peu à peu",
   hint:"Drop by drop. A very small amount at a time, sparingly."},

  {type:"teach", trg:"la mégafusion", src:"mega-merger", pos:"noun", gender:"f",
   note:"Méga- (huge) + fusion (merger).\nA very large corporate merger.",
   example:"A: Cette mégafusion va créer un géant industriel.\nB: Les autorités de la concurrence examinent le dossier.",
   exampleSrc:"A: This mega-merger will create an industrial giant.\nB: Competition authorities are examining the case.",
   funFact:"French uses méga- freely as a prefix: mégalopole, mégastructure, mégafusion."},

  {type:"teach", trg:"l'incrustation", src:"inlay, encrustation", pos:"noun", gender:"f",
   note:"From incruster (to encrust, to inlay).\nDecorative embedding or unwanted buildup.",
   example:"A: Les incrustations de calcaire abîment la plomberie.\nB: Il faut utiliser un produit détartrant.",
   exampleSrc:"A: Limestone encrustations damage the plumbing.\nB: You need to use a descaling product.",
   funFact:"Incruster also means to overstay one's welcome informally: 'Il s'est incrusté à la fête.'"},

  {type:"teach", trg:"le clou", src:"nail, highlight", pos:"noun", gender:"m",
   note:"A metal nail. Figurative: le clou du spectacle = the highlight.\nPlural: les clous.",
   example:"A: Le feu d'artifice était le clou de la soirée.\nB: Tout le monde était émerveillé.",
   exampleSrc:"A: The fireworks were the highlight of the evening.\nB: Everyone was amazed.",
   funFact:"Les clous (the nails) also means the pedestrian crossing (passage clouté) in French traffic."},

  {type:"teach", trg:"le frisbee", src:"frisbee", pos:"noun", gender:"m",
   note:"Borrowed from English.\nA flying disc thrown for recreation.",
   example:"A: On joue au frisbee sur la plage?\nB: Bonne idée, il y a assez de vent.",
   exampleSrc:"A: Shall we play frisbee on the beach?\nB: Good idea, there's enough wind.",
   funFact:"French pronounces it 'freez-BEE'. The Académie has no official French replacement."},

  {type:"fb", s:"Les informations arrivent au {1}.", a:["compte-gouttes"], opts:["compte-gouttes","pied-de-biche","coupe-papier","garde-chasse"],
   hint:"Drop by drop, very sparingly. A compound noun meaning dropper.",
   sSrc:"Information is arriving at a {1} pace."},

  {type:"teach", trg:"le pilier", src:"pillar, post", pos:"noun", gender:"m",
   note:"A structural support column.\nFigurative: a key person or element.",
   example:"A: Le chêne est un pilier de l'écosystème forestier.\nB: Des centaines d'espèces en dépendent.",
   exampleSrc:"A: The oak is a pillar of the forest ecosystem.\nB: Hundreds of species depend on it.",
   funFact:"Pilier comes from Latin pila (column). The piliers of a rugby team are the front-row forwards."},

  {type:"mc", q:"Le clou du spectacle est:", opts:["L'entrée des artistes","Le moment le plus ennuyeux","Le point culminant et le meilleur moment","Le prix du billet"], ans:"Le point culminant et le meilleur moment",
   hint:"The nail of the show: the highlight, the best part of the whole event."},

  {type:"fb", s:"Le {1} a surpris des braconniers dans la forêt.", a:["garde-chasse"], opts:["garde-chasse","compte-gouttes","coupe-papier","pied-de-biche"],
   hint:"The person who guards the hunting grounds and protects wildlife.",
   sSrc:"The {1} caught poachers in the forest."},

  {type:"match", pairs:[
    {trg:"le phosphate", src:"phosphate"},
    {trg:"l'adduction", src:"water supply"},
    {trg:"l'orangé", src:"orangish color"},
    {trg:"le garde-chasse", src:"gamekeeper"}
  ]},

  {type:"mc", q:"'S'incruster' familièrement signifie:", opts:["Décorer un meuble","S'imposer quelque part sans y être invité","Construire un mur","Nettoyer du calcaire"], ans:"S'imposer quelque part sans y être invité",
   hint:"To embed yourself somewhere uninvited. To overstay your welcome."},

  {type:"fb", s:"Le feu d'artifice était le {1} de la soirée.", a:["clou"], opts:["clou","pilier","frisbee","phosphate"],
   hint:"The highlight, the best moment. A small metal fastener, used figuratively.",
   sSrc:"The fireworks were the {1} of the evening."},

  {type:"match", pairs:[
    {trg:"le pied-de-biche", src:"crowbar"},
    {trg:"le coupe-papier", src:"letter opener"},
    {trg:"le compte-gouttes", src:"dropper"},
    {trg:"le clou", src:"nail, highlight"}
  ]}
]};

export default LESSON_12;
