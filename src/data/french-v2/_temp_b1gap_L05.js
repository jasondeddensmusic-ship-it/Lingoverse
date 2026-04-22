// L05 - Places & Spatial Expressions
const LESSON_5 = {id:"frv2_b1gap_l5", title:"Ici et ailleurs", icon:"\u{1F30D}", xp:15, board:true, steps:[

{type:"intro", title:"Ici et ailleurs",
 desc:"Learn spatial expressions, location vocabulary, and adverbs that describe where things are in relation to each other.",
 goals:["Learn 20 spatial and location expressions","Use au-delà, en amont, and similar phrases","Describe positions and boundaries"]},

{type:"teach", trg:"au-delà", src:"beyond", pos:"adv", gender:null,
 note:"Adverb or preposition. Au-delà de = beyond.\nAlso a noun: l'au-delà = the afterlife.",
 example:"A: La forêt s'étend au-delà de la rivière.\nB: On peut y accéder par le pont.",
 exampleSrc:"A: The forest extends beyond the river.\nB: You can access it via the bridge.",
 funFact:"L'au-delà (the beyond/afterlife) is a deeply philosophical word in French literature."},

{type:"teach", trg:"au-dessous", src:"below, underneath", pos:"adv", gender:null,
 note:"Adverb. Au-dessous de = below something.\nOpposite of au-dessus.",
 example:"A: L'appartement au-dessous est vacant.\nB: On devrait le visiter, il est moins cher.",
 exampleSrc:"A: The apartment below is vacant.\nB: We should visit it, it's cheaper.",
 funFact:"Au-dessous and en dessous are nearly identical. Au-dessous is slightly more formal."},

{type:"teach", trg:"l'arrière-plan", src:"background", pos:"noun", gender:"m",
 note:"Masculine noun. The background of a scene or photo.\nOpposite: le premier plan.",
 example:"A: On voit une montagne en arrière-plan.\nB: C'est le Mont Blanc, je crois.",
 exampleSrc:"A: You can see a mountain in the background.\nB: That's Mont Blanc, I think.",
 funFact:"In cinema, 'arrière-plan' is the background. 'Premier plan' is the foreground. 'Gros plan' is close-up."},

{type:"teach", trg:"arrière", src:"back, rear", pos:"adj", gender:null,
 note:"Adjective or noun. La roue arrière = the rear wheel.\nEn arrière = backwards.",
 example:"A: La porte arrière est fermée à clé.\nB: Passons par l'entrée principale.",
 exampleSrc:"A: The back door is locked.\nB: Let's go through the main entrance.",
 funFact:"In French football, the arrière is the defender position. Arrière droit = right back."},

{type:"teach", trg:"l'amont", src:"upstream, uphill", pos:"noun", gender:"m",
 note:"Masculine noun. The upper part of a river or slope.\nEn amont de = upstream of.",
 example:"A: Le village est en amont de la rivière.\nB: L'eau y est plus pure qu'en aval.",
 exampleSrc:"A: The village is upstream of the river.\nB: The water is purer there than downstream.",
 funFact:"En amont also means 'beforehand' in business: 'en amont du projet' = before the project starts."},

{type:"mc",
 q:"Quel mot désigne ce qui se trouve plus haut sur une rivière ?",
 opts:["l'amont","l'aval","l'arrière","l'au-delà"],
 ans:"l'amont",
 hint:"This is the opposite of downstream. It also means 'beforehand' in business contexts."},

{type:"teach", trg:"l'alignement", src:"alignment, line-up", pos:"noun", gender:"m",
 note:"Masculine noun. Being in a straight line.\nAlso: political alignment.",
 example:"A: L'alignement des planètes est rare.\nB: Ça n'arrive que tous les cent ans.",
 exampleSrc:"A: Planetary alignment is rare.\nB: It only happens every hundred years.",
 funFact:"In French politics, 'alignement' means following another country's policy. Cold War vocabulary."},

{type:"teach", trg:"aligner", src:"to align, to line up", pos:"verb", gender:null,
 note:"Regular -er verb. To put in a straight line.\nS'aligner sur = to align with a position.",
 example:"A: Alignez-vous contre le mur, s'il vous plaît.\nB: D'accord, on est prêts pour la photo.",
 exampleSrc:"A: Line up against the wall, please.\nB: Okay, we're ready for the photo.",
 funFact:"In cycling, 's'aligner au départ' means to line up at the start. Tour de France vocabulary."},

{type:"teach", trg:"l'approche", src:"approach, method", pos:"noun", gender:"f",
 note:"Feminine noun. Both physical approach and methodology.\nÀ l'approche de = as something nears.",
 example:"A: Quelle est ton approche pour ce problème ?\nB: Je préfère commencer par les données.",
 exampleSrc:"A: What's your approach to this problem?\nB: I prefer to start with the data.",
 funFact:"À l'approche de Noël means 'as Christmas approaches.' Very common seasonal expression."},

{type:"teach", trg:"l'arcade", src:"arcade, arch", pos:"noun", gender:"f",
 note:"Feminine noun. An arched passageway.\nAlso: arcade sourcilière = brow ridge.",
 example:"A: Les arcades de la place des Vosges sont magnifiques.\nB: C'est le plus vieux square de Paris.",
 exampleSrc:"A: The arcades of Place des Vosges are magnificent.\nB: It's the oldest square in Paris.",
 funFact:"Paris has beautiful arcades: Galerie Vivienne, Passage des Panoramas. 19th-century shopping malls."},

{type:"fb",
 s:"La forêt s'étend {1} de la montagne.",
 a:["au-delà"],
 opts:["au-delà","au-dessous","en amont","en arrière"],
 hint:"This expression means 'beyond' and is also used as a noun to mean the afterlife.",
 sSrc:"The forest extends {1} the mountain."},

{type:"teach", trg:"l'antenne", src:"antenna, branch office", pos:"noun", gender:"f",
 note:"Feminine noun. TV/radio antenna.\nAlso: local branch of an organization.",
 example:"A: L'antenne de la radio est sur le toit.\nB: C'est pour capter les stations locales.",
 exampleSrc:"A: The radio antenna is on the roof.\nB: It's to pick up local stations.",
 funFact:"'Être sur les antennes' means to be on the air. French TV shows say 'vous êtes à l'antenne.'"},

{type:"teach", trg:"l'antipode", src:"antipode, opposite", pos:"noun", gender:"m",
 note:"Masculine noun. The exact opposite point on Earth.\nFigurative: the polar opposite.",
 example:"A: La Nouvelle-Zélande est aux antipodes de la France.\nB: C'est littéralement de l'autre côté du monde.",
 exampleSrc:"A: New Zealand is at the antipodes of France.\nB: It's literally the other side of the world.",
 funFact:"Aux antipodes de means 'the polar opposite of.' Used figuratively for contrasting ideas."},

{type:"teach", trg:"l'aqueduc", src:"aqueduct", pos:"noun", gender:"m",
 note:"Masculine noun. A water-carrying structure.\nFrom Latin aquaeductus.",
 example:"A: Le pont du Gard est un aqueduc romain.\nB: Il a presque deux mille ans.",
 exampleSrc:"A: The Pont du Gard is a Roman aqueduct.\nB: It's almost two thousand years old.",
 funFact:"The Pont du Gard near Nîmes is France's most famous aqueduc, a UNESCO World Heritage Site."},

{type:"teach", trg:"l'arsenal", src:"arsenal, stockpile", pos:"noun", gender:"m",
 note:"Masculine noun. A weapons depot or large collection.\nFigurative: arsenal of arguments.",
 example:"A: La police a découvert un arsenal d'armes.\nB: L'enquête va se poursuivre.",
 exampleSrc:"A: The police discovered an arsenal of weapons.\nB: The investigation will continue.",
 funFact:"From Arabic dar as-sina'a (house of manufacture). Venice's Arsenale gave the word to all Europe."},

{type:"mc",
 q:"Quel lieu est littéralement de l'autre côté de la Terre ?",
 opts:["l'au-delà","les antipodes","l'arrière-plan","l'amont"],
 ans:"les antipodes",
 hint:"This word comes from Greek, meaning 'opposite feet.' New Zealand is this for France."},

{type:"teach", trg:"l'alpage", src:"mountain pasture", pos:"noun", gender:"m",
 note:"Masculine noun. High-altitude grazing land in the Alps.\nWhere cows spend summer.",
 example:"A: Les vaches montent à l'alpage en été.\nB: Le fromage d'alpage a un goût unique.",
 exampleSrc:"A: The cows go up to the mountain pasture in summer.\nB: Mountain pasture cheese has a unique taste.",
 funFact:"The seasonal move of cattle to alpages is called 'la transhumance,' a celebrated Alpine tradition."},

{type:"teach", trg:"l'arbuste", src:"shrub, bush", pos:"noun", gender:"m",
 note:"Masculine noun. A small tree or large bush.\nSmaller than un arbre (tree).",
 example:"A: Les arbustes du jardin ont besoin d'être taillés.\nB: Je m'en occupe ce week-end.",
 exampleSrc:"A: The garden shrubs need to be trimmed.\nB: I'll take care of it this weekend.",
 funFact:"The diminutive of arbre (tree). An arbuste is between a bush (buisson) and a tree in size."},

{type:"teach", trg:"l'arc-en-ciel", src:"rainbow", pos:"noun", gender:"m",
 note:"Masculine noun. Literally 'arc in the sky.'\nPlural: des arcs-en-ciel.",
 example:"A: Regarde, un arc-en-ciel après la pluie !\nB: Il est magnifique, on voit toutes les couleurs.",
 exampleSrc:"A: Look, a rainbow after the rain!\nB: It's magnificent, you can see all the colors.",
 funFact:"Literally 'bow in the sky.' One of French's most poetic compound nouns. The plural keeps arc plural only."},

{type:"teach", trg:"l'arrosage", src:"watering, irrigation", pos:"noun", gender:"m",
 note:"Masculine noun. From arroser (to water).\nGarden and agriculture vocabulary.",
 example:"A: L'arrosage du jardin est interdit en période de sécheresse.\nB: On doit économiser l'eau.",
 exampleSrc:"A: Garden watering is forbidden during drought.\nB: We must save water.",
 funFact:"L'arroseur arrosé (the waterer gets watered) means a prankster who gets pranked back. Classic idiom."},

{type:"fb",
 s:"Les vaches montent à l'{1} pendant les mois d'été.",
 a:["alpage"],
 opts:["alpage","arbuste","arsenal","arcade"],
 hint:"This masculine noun describes high mountain pastures where cattle graze in summer.",
 sSrc:"The cows go up to the {1} during the summer months."},

{type:"match", pairs:[
  {trg:"au-delà", src:"beyond"},
  {trg:"l'arrière-plan", src:"background"},
  {trg:"l'arc-en-ciel", src:"rainbow"},
  {trg:"l'antenne", src:"antenna"},
  {trg:"l'arrosage", src:"watering"}
]},

{type:"mc",
 q:"Comment appelle-t-on un petit arbre ou un grand buisson ?",
 opts:["une arcade","un alpage","un arbuste","un arbre"],
 ans:"un arbuste",
 hint:"This is the diminutive form of the word for 'tree.' Smaller than a tree but bigger than a bush."}

]};
export default LESSON_5;
