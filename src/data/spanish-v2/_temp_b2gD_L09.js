// B2 Gap Batch D Lesson 9 - Architecture & Places
const LESSON_9 = {id:"esv2_b2gD_l9",title:"Arquitectura y lugares",icon:"\uD83C\uDFDB\uFE0F",xp:15,board:true,steps:[
{type:"intro",title:"Arquitectura y lugares",desc:"Learn vocabulary for buildings, architectural features, and distinctive places in the Spanish-speaking world.",goals:["Learn 10 architecture and place vocabulary items","Describe buildings and structures with precision","Discuss historical and modern places"]},

{type:"teach",trg:"el palacete",src:"the small palace / mansion",pos:"noun",gender:"m",
 note:"Masculine noun. A stately house, smaller than a palace.\nDiminutive of palacio + -ete.",
 example:"A: Ese palacete del siglo XIX ahora es un museo.\nB: La restauración ha sido magnífica, merece una visita.",
 exampleSrc:"A: That 19th-century mansion is now a museum.\nB: The restoration has been magnificent, it's worth a visit.",
 funFact:"Many palacetes in Madrid's Salamanca district were built by the bourgeoisie who wanted palace-like homes without royal pretensions."},

{type:"teach",trg:"el parador",src:"the state-run historic hotel",pos:"noun",gender:"m",
 note:"Masculine noun. A hotel in a historic building.\nThe Paradores chain is uniquely Spanish.",
 example:"A: Nos alojamos en el parador de Granada, junto a la Alhambra.\nB: Dormir en un edificio histórico es una experiencia única.",
 exampleSrc:"A: We stayed at the parador in Granada, next to the Alhambra.\nB: Sleeping in a historic building is a unique experience.",
 funFact:"Spain's Paradores network has 97 hotels in castles, monasteries, and fortresses. It was created in 1928 to promote tourism."},

{type:"teach",trg:"la pasarela",src:"the catwalk / footbridge / gangway",pos:"noun",gender:"f",
 note:"Feminine noun. A narrow elevated walkway.\nFashion: runway. Ships: gangway.",
 example:"A: La modelo desfiló por la pasarela con un vestido espectacular.\nB: La colección de este diseñador es impresionante.",
 exampleSrc:"A: The model walked the catwalk in a spectacular dress.\nB: This designer's collection is impressive.",
 funFact:"Madrid's fashion week is called 'Pasarela Cibeles' (now MBFWM). 'Pasarela' literally means 'little passage'."},

{type:"teach",trg:"la hilera",src:"the row / line / file",pos:"noun",gender:"f",
 note:"Feminine noun. A straight line of things or people.\nFrom hilo (thread) + -era.",
 example:"A: Una hilera de cipreses bordeaba el camino hacia la casa.\nB: El paisaje parecía sacado de un cuadro italiano.",
 exampleSrc:"A: A row of cypresses lined the path to the house.\nB: The landscape looked like something from an Italian painting.",
 funFact:"The connection to 'hilo' (thread) is visual: objects in a hilera are strung together like beads on a thread."},

{type:"mc",q:"Un parador es...",opts:["Un hotel estatal en un edificio histórico","Un parque nacional protegido","Un centro comercial moderno","Un aparcamiento público"],ans:"Un hotel estatal en un edificio histórico",hint:"A uniquely Spanish concept: historic buildings converted into government-run accommodation."},

{type:"teach",trg:"la base",src:"the base / foundation / basis",pos:"noun",gender:"f",
 note:"Feminine noun. The bottom support, or the foundation of an idea.\nMilitary: la base aérea (air base).",
 example:"A: La confianza es la base de cualquier buena relación.\nB: Sin ella, todo lo demás se derrumba.",
 exampleSrc:"A: Trust is the foundation of any good relationship.\nB: Without it, everything else falls apart.",
 funFact:"'A base de' (by means of) is a common preposition phrase: 'Lo consiguió a base de esfuerzo' (achieved it through effort)."},

{type:"teach",trg:"el palomar",src:"the dovecote / pigeon loft",pos:"noun",gender:"m",
 note:"Masculine noun. A structure for housing pigeons.\nFrom paloma (dove) + -ar (place suffix).",
 example:"A: El palomar del castillo todavía tiene palomas.\nB: Antes servían para enviar mensajes importantes.",
 exampleSrc:"A: The castle's dovecote still has pigeons.\nB: They used to serve for sending important messages.",
 funFact:"Medieval Spanish castles used palomares for messenger pigeons. Castilla y León alone has over 500 historic dovecotes."},

{type:"teach",trg:"la pega",src:"the snag / drawback / magpie",pos:"noun",gender:"f",
 note:"Feminine noun. A problem or difficulty.\nAlso: the magpie bird. 'Poner pegas': to find fault.",
 example:"A: La única pega del apartamento es que no tiene terraza.\nB: Bueno, el precio es muy bueno para la zona.",
 exampleSrc:"A: The only drawback of the apartment is that it has no terrace.\nB: Well, the price is very good for the area.",
 funFact:"'Poner pegas' (to put snags) means to nitpick or find problems. Very common in everyday Spanish complaints."},

{type:"fb",s:"Nos alojamos en el {1} de Toledo, un antiguo convento.",a:["parador"],opts:["parador","palacete","palomar","pastizal"],hint:"A Spanish state-run hotel typically housed in a converted historic building.",sSrc:"We stayed at the {1} in Toledo, a former convent."},

{type:"teach",trg:"el paredón",src:"the thick wall / execution wall",pos:"noun",gender:"m",
 note:"Masculine noun. A large, thick wall.\nHistorically: the wall against which people were executed.",
 example:"A: El paredón de la fortaleza tiene tres metros de grosor.\nB: Era necesario para resistir los ataques de artillería.",
 exampleSrc:"A: The fortress wall is three meters thick.\nB: It was necessary to withstand artillery attacks.",
 funFact:"'Llevar al paredón' (take to the wall) means to execute by firing squad. The augmentative -ón emphasizes the wall's imposing size."},

{type:"teach",trg:"el palacio de congresos",src:"the convention center",pos:"noun",gender:"m",
 note:"Masculine compound noun. A large building for conferences.\nPalacio (palace) elevates the status of the venue.",
 example:"A: La conferencia se celebra en el palacio de congresos.\nB: Tiene capacidad para dos mil personas.",
 exampleSrc:"A: The conference is held at the convention center.\nB: It has capacity for two thousand people.",
 funFact:"Spanish cities use 'palacio' for grand public buildings: Palacio de Deportes (sports arena), Palacio de Congresos, Palacio de Justicia."},

{type:"match",pairs:[
 {trg:"palacete",src:"mansion"},
 {trg:"parador",src:"historic hotel"},
 {trg:"pasarela",src:"catwalk / footbridge"},
 {trg:"palomar",src:"dovecote"},
 {trg:"paredón",src:"thick wall"}
]},

{type:"mc",q:"'Poner pegas' significa...",opts:["Decorar una casa","Encontrar problemas o defectos","Construir un muro","Organizar una fiesta"],ans:"Encontrar problemas o defectos",hint:"An expression about finding fault or highlighting drawbacks. Related to 'la pega' (snag)."},

{type:"fb",s:"Una {1} de árboles bordeaba la entrada al jardín.",a:["hilera"],opts:["hilera","pasarela","pega","base"],hint:"A straight line of objects arranged in order, like trees lining a path.",sSrc:"A {1} of trees lined the entrance to the garden."},

{type:"mc",q:"¿Qué es una pasarela en el mundo de la moda?",opts:["Un tipo de tela muy fina","Un complemento para el pelo","La plataforma donde desfilan los modelos","Una tienda de ropa exclusiva"],ans:"La plataforma donde desfilan los modelos",hint:"The elevated walkway in fashion shows where models display clothing collections."}
]};
export default LESSON_9;
