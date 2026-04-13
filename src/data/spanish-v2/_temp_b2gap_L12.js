// B2 Gap Lesson 12 - Actions & Change II
const LESSON_12 = {id:"esv2_b2gap_l12",title:"Acciones y cambio II",icon:"⚡",xp:15,board:true,steps:[
{type:"intro",title:"Acciones y cambio II",desc:"Expand your verb repertoire with words about effort, influence, and physical action.",goals:["Learn 20 more action verbs","Express physical and abstract actions","Use reflexive and transitive verbs"]},

{type:"teach",trg:"abaniquear",src:"to fan",pos:"verb",gender:null,
 note:"Regular -ar verb. To cool with a fan.\nAlternative form: abanicar.",
 example:"A: Se abanicaba con un periódico por el calor.\nB: Hacía más de cuarenta grados.",
 exampleSrc:"A: He was fanning himself with a newspaper because of the heat.\nB: It was over forty degrees.",
 funFact:"The Spanish abanico (fan) is a cultural icon. Valencia and Seville are famous for hand-painted fans."},

{type:"teach",trg:"abocar",src:"to pour / to lead to",pos:"verb",gender:null,
 note:"Regular -ar verb. To empty into, or to be headed toward.\nAbocarse a: to devote oneself to.",
 example:"A: La crisis abocó al país a una recesión.\nB: Las consecuencias fueron devastadoras.",
 exampleSrc:"A: The crisis led the country to a recession.\nB: The consequences were devastating.",
 funFact:"From boca (mouth). To 'abocar' is to pour out of the mouth of a container."},

{type:"teach",trg:"adinerar",src:"to make wealthy",pos:"verb",gender:null,
 note:"Regular -ar verb. Rare verb from dinero (money).\nAdinerado (adjective): wealthy.",
 example:"A: El negocio los adineró en pocos años.\nB: Ahora son una de las familias más ricas del pueblo.",
 exampleSrc:"A: The business made them wealthy in a few years.\nB: Now they are one of the richest families in town.",
 funFact:"The adjective 'adinerado' (wealthy) is much more common than the verb form."},

{type:"teach",trg:"afincar",src:"to settle / to establish oneself",pos:"verb",gender:null,
 note:"Regular -ar verb. To settle in a place permanently.\nReflexive: afincarse en.",
 example:"A: Se afincaron en Barcelona tras la jubilación.\nB: Les encanta el clima mediterráneo.",
 exampleSrc:"A: They settled in Barcelona after retirement.\nB: They love the Mediterranean climate.",
 funFact:"From finca (property). To 'afincarse' is literally to put down roots on your own land."},

{type:"teach",trg:"apostillar",src:"to annotate / to add a note",pos:"verb",gender:null,
 note:"Regular -ar verb. To add a marginal note or comment.",
 example:"A: Permíteme apostillar un detalle importante.\nB: Adelante, toda información es bienvenida.",
 exampleSrc:"A: Allow me to add a note about an important detail.\nB: Go ahead, all information is welcome.",
 funFact:"From apostilla (annotation). In diplomacy, an 'apostilla' is an official document certification."},

{type:"mc",q:"¿Qué instrumento típico español se usa para abanicarse?",opts:["Una guitarra","Un abanico","Una castañuela","Un tambor"],ans:"Un abanico",hint:"A folding device used to cool yourself in hot weather."},

{type:"teach",trg:"arrollar",src:"to run over / to overwhelm",pos:"verb",gender:null,
 note:"Regular -ar verb. To knock down, or to dominate completely.",
 example:"A: El equipo local arrolló al visitante por cinco a cero.\nB: Fue una victoria aplastante.",
 exampleSrc:"A: The home team overwhelmed the visitors five to zero.\nB: It was a crushing victory.",
 funFact:"From rollo (roll). To 'arrollar' is to roll over something, either literally or figuratively."},

{type:"teach",trg:"asestar",src:"to deal / to strike (a blow)",pos:"verb",gender:null,
 note:"Regular -ar verb. To deliver a blow, strike, or hit.",
 example:"A: El boxeador asestó un golpe decisivo.\nB: Su rival cayó al suelo inmediatamente.",
 exampleSrc:"A: The boxer dealt a decisive blow.\nB: His rival fell to the ground immediately.",
 funFact:"Often used with 'golpe' (blow) or 'puñetazo' (punch). Very dramatic and literary."},

{type:"teach",trg:"ausentar",src:"to leave / to absent oneself",pos:"verb",gender:null,
 note:"Regular -ar verb. Mainly reflexive: ausentarse.\nTo leave a place temporarily.",
 example:"A: Me voy a ausentar unos minutos de la reunión.\nB: De acuerdo, te ponemos al día después.",
 exampleSrc:"A: I am going to step out of the meeting for a few minutes.\nB: Okay, we will bring you up to speed later.",
 funFact:"From ausente (absent). Very formal. Everyday Spanish prefers 'salir un momento'."},

{type:"teach",trg:"avezar",src:"to accustom / to train",pos:"verb",gender:null,
 note:"Regular -ar verb. To make someone experienced or skilled.\nAvezado: experienced, seasoned.",
 example:"A: Es un periodista avezado en conflictos internacionales.\nB: Lleva treinta años cubriendo guerras.",
 exampleSrc:"A: He is a journalist experienced in international conflicts.\nB: He has been covering wars for thirty years.",
 funFact:"From Old Spanish avezar. 'Avezado' (seasoned) is the most common form in modern usage."},

{type:"fb",s:"El boxeador {1} un golpe definitivo en el último asalto.",a:["asestó"],opts:["asestó","arrolló","abocó","apostilló"],hint:"To deliver or strike a decisive blow.",sSrc:"The boxer {1} a definitive blow in the last round."},

{type:"teach",trg:"bombear",src:"to pump",pos:"verb",gender:null,
 note:"Regular -ar verb. To move liquid with a pump.\nAlso: to lob (in sports).",
 example:"A: Hay que bombear el agua del pozo.\nB: La bomba funciona con energía solar.",
 exampleSrc:"A: We need to pump the water from the well.\nB: The pump runs on solar energy.",
 funFact:"From bomba (pump/bomb). In football, 'bombear' a ball means to lob it high."},

{type:"teach",trg:"calar",src:"to soak through / to figure out",pos:"verb",gender:null,
 note:"Regular -ar verb. To penetrate with liquid, or to understand deeply.\n'Calar a alguien': to see through someone.",
 example:"A: La lluvia nos caló hasta los huesos.\nB: Deberíamos haber traído paraguas.",
 exampleSrc:"A: The rain soaked us to the bone.\nB: We should have brought umbrellas.",
 funFact:"'Calar hondo' means to make a deep impression. A versatile verb with many shades of meaning."},

{type:"teach",trg:"canonizar",src:"to canonize",pos:"verb",gender:null,
 note:"Regular -ar verb. To declare someone a saint.\nAlso figurative: to idealize someone.",
 example:"A: La Iglesia canonizó a la madre Teresa en 2016.\nB: Fue una ceremonia multitudinaria en Roma.",
 exampleSrc:"A: The Church canonized Mother Teresa in 2016.\nB: It was a massive ceremony in Rome.",
 funFact:"From Latin canonizare. Spain has more canonized saints than almost any other country."},

{type:"teach",trg:"cercar",src:"to fence / to surround",pos:"verb",gender:null,
 note:"Regular -ar verb. To enclose with a fence, or to besiege.\nC>qu before e: cerqué.",
 example:"A: Cercaron el terreno con una valla de madera.\nB: Así las ovejas no pueden escapar.",
 exampleSrc:"A: They fenced the land with a wooden fence.\nB: That way the sheep cannot escape.",
 funFact:"From cerca (fence/near). The noun 'cerco' means siege: 'poner cerco a' means to lay siege to."},

{type:"mc",q:"'La lluvia nos caló hasta los huesos' significa:",opts:["Nos mojó completamente","Nos calentó","Nos secó","Nos protegió"],ans:"Nos mojó completamente",hint:"Being soaked so thoroughly that even your bones feel wet."},

{type:"teach",trg:"carcomer",src:"to eat away / to gnaw",pos:"verb",gender:null,
 note:"Regular -er verb. To consume slowly, literally or figuratively.\nLa carcoma: woodworm.",
 example:"A: Los celos le carcomen por dentro.\nB: Debería hablar con alguien de confianza.",
 exampleSrc:"A: Jealousy is eating him up inside.\nB: He should talk to someone he trusts.",
 funFact:"From carcoma (woodworm). The image of a worm slowly eating wood from inside is powerful."},

{type:"teach",trg:"civilizar",src:"to civilize",pos:"verb",gender:null,
 note:"Regular -ar verb. To bring to a more advanced cultural state.\nZ>c before e: civilicé.",
 example:"A: Los romanos civilizaron gran parte de Europa.\nB: Dejaron un legado enorme en España.",
 exampleSrc:"A: The Romans civilized a large part of Europe.\nB: They left an enormous legacy in Spain.",
 funFact:"From Latin civilis. Spain's Roman ruins (Mérida, Tarragona, Segovia) show this legacy."},

{type:"teach",trg:"codiciar",src:"to covet / to desire greatly",pos:"verb",gender:null,
 note:"Regular -ar verb. To strongly desire something belonging to another.",
 example:"A: Todos codiciaban el trono del rey.\nB: La ambición provocó guerras civiles.",
 exampleSrc:"A: Everyone coveted the king's throne.\nB: Ambition provoked civil wars.",
 funFact:"From Latin cupiditiare. 'No codiciarás' (Thou shalt not covet) is one of the Ten Commandments."},

{type:"teach",trg:"cohesionar",src:"to unite / to bring together",pos:"verb",gender:null,
 note:"Regular -ar verb. To create unity within a group.",
 example:"A: El capitán cohesionó al equipo durante la crisis.\nB: Sin él, se habrían rendido.",
 exampleSrc:"A: The captain united the team during the crisis.\nB: Without him, they would have given up.",
 funFact:"From cohesión (cohesion). Very used in sports journalism and political discourse."},

{type:"fb",s:"Los celos le {1} por dentro día tras día.",a:["carcomen"],opts:["carcomen","bombean","cercan","civilizan"],hint:"To eat away at someone slowly, like a worm eating wood.",sSrc:"Jealousy {1} him from the inside day after day."},

{type:"mc",q:"'Cohesionar un equipo' significa:",opts:["Dividirlo","Unirlo y darle fuerza","Eliminarlo","Criticarlo"],ans:"Unirlo y darle fuerza",hint:"Bringing the members together to work as one unit."},

{type:"match",pairs:[{trg:"arrollar",src:"to overwhelm"},{trg:"calar",src:"to soak through"},{trg:"cercar",src:"to fence / surround"},{trg:"codiciar",src:"to covet"},{trg:"cohesionar",src:"to unite"}]},

{type:"fb",s:"Se {1} en un pueblo costero tras jubilarse.",a:["afincaron"],opts:["afincaron","ausentaron","arrollaron","abocaron"],hint:"To settle permanently in a place, putting down roots.",sSrc:"They {1} in a coastal town after retiring."},

{type:"mc",q:"Un periodista 'avezado' es uno que:",opts:["Es novato","Tiene mucha experiencia","Escribe mal","Trabaja poco"],ans:"Tiene mucha experiencia",hint:"Someone who has been trained and seasoned through long practice."}
]};

export default LESSON_12;
