// L12 - Physical Actions & Movement
const LESSON_12 = {id:"frv2_b1gap_l12", title:"Mouvements et gestes", icon:"\u{1F3C3}", xp:15, board:true, steps:[

{type:"intro", title:"Mouvements et gestes",
 desc:"Learn verbs and nouns for physical actions, movements, and bodily gestures.",
 goals:["Learn 20 physical action words","Describe movements and postures","Use reflexive verbs of movement naturally"]},

{type:"teach", trg:"accourir", src:"to rush over, to come running", pos:"verb", gender:null,
 note:"Irregular verb (like courir). To hurry to a place.\nPast participle: accouru.",
 example:"A: Les voisins ont accouru quand ils ont entendu le cri.\nB: Heureusement, personne n'était blessé.",
 exampleSrc:"A: The neighbors came running when they heard the scream.\nB: Fortunately, nobody was hurt.",
 funFact:"Conjugated like courir: j'accours, nous accourons. The ac- prefix adds 'toward' to running."},

{type:"teach", trg:"s'accouder", src:"to lean on one's elbows", pos:"verb", gender:null,
 note:"Reflexive -er verb. From coude (elbow).\nS'accouder à/sur = to lean elbows on.",
 example:"A: Il s'accoude à la fenêtre pour regarder dehors.\nB: C'est sa position préférée pour rêver.",
 exampleSrc:"A: He leans on his elbows at the window to look outside.\nB: It's his favorite position for daydreaming.",
 funFact:"From coude (elbow). An accoudoir is an armrest. French builds many body-part verbs this way."},

{type:"teach", trg:"s'attabler", src:"to sit down at a table", pos:"verb", gender:null,
 note:"Reflexive -er verb. From table.\nSpecifically to sit at a table, usually to eat.",
 example:"A: Attablons-nous, le dîner est prêt.\nB: Ça sent délicieusement bon.",
 exampleSrc:"A: Let's sit at the table, dinner is ready.\nB: It smells deliciously good.",
 funFact:"Only used for sitting AT a table. You can't s'attabler on a sofa. The table is built into the verb."},

{type:"teach", trg:"s'attarder", src:"to linger, to stay too long", pos:"verb", gender:null,
 note:"Reflexive -er verb. From tard (late).\nS'attarder sur = to dwell on a topic.",
 example:"A: Ne nous attardons pas, il se fait tard.\nB: Tu as raison, partons avant la nuit.",
 exampleSrc:"A: Let's not linger, it's getting late.\nB: You're right, let's leave before dark.",
 funFact:"From tard (late). S'attarder literally means 'to make oneself late.' Very French precision."},

{type:"teach", trg:"atterrir", src:"to land (aircraft)", pos:"verb", gender:null,
 note:"Regular -ir verb. From terre (earth/ground).\nL'avion a atterri = the plane landed.",
 example:"A: L'avion a atterri avec vingt minutes de retard.\nB: Mieux vaut tard que jamais !",
 exampleSrc:"A: The plane landed twenty minutes late.\nB: Better late than never!",
 funFact:"From terre (earth). To atterrir is to return to earth. For water: amerrir. For the moon: alunir."},

{type:"mc",
 q:"Quel verbe décrit le moment où un avion touche le sol ?",
 opts:["atterrir","accourir","s'attarder","s'accouder"],
 ans:"atterrir",
 hint:"This verb comes from the word terre (earth). Returning to the ground after a flight."},

{type:"teach", trg:"s'affairer", src:"to bustle about, to busy oneself", pos:"verb", gender:null,
 note:"Reflexive -er verb. From affaire (business/matter).\nTo bustle around doing things.",
 example:"A: Elle s'affaire dans la cuisine depuis ce matin.\nB: Elle prépare le repas de Noël.",
 exampleSrc:"A: She's been bustling about in the kitchen since this morning.\nB: She's preparing the Christmas meal.",
 funFact:"S'affairer implies productive busyness. It's positive, unlike 's'agiter' which implies nervous energy."},

{type:"teach", trg:"s'adonner", src:"to devote oneself to", pos:"verb", gender:null,
 note:"Reflexive -er verb. S'adonner à = to dedicate oneself to.\nCan be positive or negative.",
 example:"A: Il s'adonne à la peinture depuis sa retraite.\nB: Ses tableaux sont remarquables.",
 exampleSrc:"A: He's devoted himself to painting since retirement.\nB: His paintings are remarkable.",
 funFact:"Can be negative too: 's'adonner à la boisson' means to give oneself over to drinking."},

{type:"teach", trg:"arborer", src:"to display, to sport, to wear proudly", pos:"verb", gender:null,
 note:"Regular -er verb. To display something visible.\nFrom arbre (tree) via the idea of a flagpole.",
 example:"A: Elle arbore un grand sourire aujourd'hui.\nB: Elle a eu une bonne nouvelle.",
 exampleSrc:"A: She's sporting a big smile today.\nB: She got some good news.",
 funFact:"Originally to raise something on a pole (arbre = mast). Now means to display something proudly."},

{type:"teach", trg:"articuler", src:"to articulate, to pronounce clearly", pos:"verb", gender:null,
 note:"Regular -er verb. To speak distinctly.\nAlso: to connect ideas logically.",
 example:"A: Articule mieux, je ne comprends rien.\nB: Désolé, je parle trop vite.",
 exampleSrc:"A: Articulate better, I can't understand anything.\nB: Sorry, I'm speaking too fast.",
 funFact:"French teachers constantly say 'articule !' to students who mumble. A classroom classic."},

{type:"fb",
 s:"Les voisins ont {1} quand ils ont entendu l'alarme.",
 a:["accouru"],
 opts:["accouru","articulé","atterri","arboré"],
 hint:"This irregular verb means to rush over or come running. It follows the pattern of courir.",
 sSrc:"The neighbors {1} when they heard the alarm."},

{type:"teach", trg:"s'assoupir", src:"to doze off, to fall asleep", pos:"verb", gender:null,
 note:"Regular -ir verb. Reflexive. To drift into light sleep.\nGentler than s'endormir.",
 example:"A: Le bébé s'est assoupi dans mes bras.\nB: Ne bouge pas, il dort si bien.",
 exampleSrc:"A: The baby dozed off in my arms.\nB: Don't move, he's sleeping so well.",
 funFact:"S'assoupir implies a gentle drifting, not a deliberate going to sleep. Very tender word."},

{type:"teach", trg:"assouplir", src:"to make supple, to relax (rules)", pos:"verb", gender:null,
 note:"Regular -ir verb. From souple (flexible).\nPhysical flexibility or relaxing regulations.",
 example:"A: Il faut assouplir les règles pour les petites entreprises.\nB: La bureaucratie les étouffe.",
 exampleSrc:"A: We need to relax the rules for small businesses.\nB: Bureaucracy is suffocating them.",
 funFact:"Assouplir ses muscles = to stretch. Assouplir les lois = to relax laws. Same verb, body and politics."},

{type:"teach", trg:"amputer", src:"to amputate, to cut off", pos:"verb", gender:null,
 note:"Regular -er verb. Medical or figurative cutting.\nAmputer un budget = to slash a budget.",
 example:"A: Le chirurgien a dû amputer le bras du patient.\nB: C'était la seule option pour sauver sa vie.",
 exampleSrc:"A: The surgeon had to amputate the patient's arm.\nB: It was the only option to save his life.",
 funFact:"Figuratively, 'amputer un texte' means to cut a text drastically. Editors amputate manuscripts."},

{type:"mc",
 q:"Quel verbe réflexif signifie 's'endormir légèrement' ?",
 opts:["s'attarder","s'assoupir","s'affairer","s'adonner"],
 ans:"s'assoupir",
 hint:"This verb describes a gentle drifting into light sleep. Think of a baby falling asleep in your arms."},

{type:"teach", trg:"l'amusement", src:"amusement, entertainment", pos:"noun", gender:"m",
 note:"Masculine noun. From amuser (to amuse).\nPleasure and entertainment.",
 example:"A: Le parc offre de nombreux amusements pour les enfants.\nB: Ils ne s'ennuient jamais ici.",
 exampleSrc:"A: The park offers many amusements for children.\nB: They never get bored here.",
 funFact:"S'amuser means to have fun. L'amusement is the thing that provides the fun. A useful distinction."},

{type:"teach", trg:"l'applaudissement", src:"applause, clapping", pos:"noun", gender:"m",
 note:"Masculine noun. Usually plural: les applaudissements.\nFrom applaudir (to clap).",
 example:"A: Les applaudissements ont duré cinq minutes.\nB: Le public était debout.",
 exampleSrc:"A: The applause lasted five minutes.\nB: The audience was standing.",
 funFact:"A standing ovation is 'une ovation debout.' But prolonged applaudissements are the real French honor."},

{type:"teach", trg:"apposer", src:"to affix, to apply (a signature or seal)", pos:"verb", gender:null,
 note:"Regular -er verb. Formal. To place something officially.\nApposer sa signature = to affix one's signature.",
 example:"A: Veuillez apposer votre signature en bas de la page.\nB: Voilà, c'est fait.",
 exampleSrc:"A: Please affix your signature at the bottom of the page.\nB: There, it's done.",
 funFact:"French bureaucracy loves apposer. You apposer un cachet (stamp), a visa, a signature. Very official."},

{type:"teach", trg:"s'approprier", src:"to appropriate, to make one's own", pos:"verb", gender:null,
 note:"Reflexive -er verb. To take possession of.\nCan be positive (learning) or negative (theft).",
 example:"A: Les étudiants doivent s'approprier ces concepts.\nB: C'est essentiel pour l'examen.",
 exampleSrc:"A: Students need to make these concepts their own.\nB: It's essential for the exam.",
 funFact:"In education, s'approprier means deep learning. In law, it can mean unlawful seizure."},

{type:"fb",
 s:"Veuillez {1} votre signature au bas du document.",
 a:["apposer"],
 opts:["apposer","articuler","amputer","arborer"],
 hint:"This formal verb means to affix or place something officially, like a signature or seal.",
 sSrc:"Please {1} your signature at the bottom of the document."},

{type:"match", pairs:[
  {trg:"accourir", src:"to rush over"},
  {trg:"atterrir", src:"to land"},
  {trg:"s'assoupir", src:"to doze off"},
  {trg:"arborer", src:"to display proudly"},
  {trg:"apposer", src:"to affix"}
]},

{type:"mc",
 q:"Quel verbe signifie 's'occuper activement de quelque chose' ?",
 opts:["s'attarder","s'accouder","s'affairer","s'assoupir"],
 ans:"s'affairer",
 hint:"This verb implies productive busyness. Think of someone bustling around the kitchen."}

]};
export default LESSON_12;
