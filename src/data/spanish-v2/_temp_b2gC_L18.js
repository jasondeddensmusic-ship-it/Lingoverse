// B2 Gap Batch C Lesson 18 - Architecture & Heritage Buildings
const LESSON_18 = {id:"esv2_b2gC_l18",title:"Arquitectura y patrimonio",icon:"🏰",xp:15,board:true,steps:[
{type:"intro",title:"Arquitectura y patrimonio",desc:"Master vocabulary for architecture, heritage buildings, and Spain's rich architectural tradition.",goals:["Learn 12 words about architecture and heritage","Discuss historic buildings and construction","Use architectural vocabulary precisely"]},

{type:"teach",trg:"el palacio de congresos",src:"the convention center",pos:"noun",gender:"m",
 note:"Masculine compound noun. A large building for conferences.\nEvery major Spanish city has one.",
 example:"A: El palacio de congresos acoge la feria internacional este año.\nB: Esperan más de diez mil visitantes.",
 exampleSrc:"A: The convention center hosts the international fair this year.\nB: They expect more than ten thousand visitors.",
 funFact:"Madrid's IFEMA and Barcelona's Fira are Spain's largest palacios de congresos, hosting world-class events."},

{type:"teach",trg:"el batiente",src:"the doorjamb / leaf (of a door)",pos:"noun",gender:"m",
 note:"Masculine noun. The frame or movable part of a door.\nFrom batir (to beat/swing).",
 example:"A: La puerta golpeaba contra el batiente con el viento.\nB: Hay que arreglar las bisagras.",
 exampleSrc:"A: The door was banging against the frame in the wind.\nB: The hinges need to be fixed.",
 funFact:"The expression 'a puerta batiente' means wide open. In printing, 'batiente' is where type strikes paper."},

{type:"teach",trg:"el cañizal",src:"the reed bed / cane field",pos:"noun",gender:"m",
 note:"Masculine noun. An area where reeds or canes grow.\nFrom caña (cane/reed).",
 example:"A: El cañizal junto al río es refugio de muchas aves.\nB: Es una zona protegida desde hace diez años.",
 exampleSrc:"A: The reed bed by the river is a refuge for many birds.\nB: It has been a protected area for ten years.",
 funFact:"Traditional Spanish cañizales provided material for ceilings, fences, and musical instruments."},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's shop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of woodworking or a workshop.\nFrom carpintero (carpenter).",
 example:"A: La carpintería de mi barrio hace muebles a medida.\nB: Son más caros, pero la calidad es insuperable.",
 exampleSrc:"A: The carpentry shop in my neighborhood makes custom furniture.\nB: They're more expensive, but the quality is unbeatable.",
 funFact:"Spanish carpintería traditionally distinguished between 'carpintería de armar' (structural) and 'de taller' (furniture)."},

{type:"mc",q:"¿Qué edificio acoge ferias y conferencias internacionales?",opts:["El palacio de congresos","El palacete","El batiente","El cañizal"],ans:"El palacio de congresos",hint:"A large public building specifically designed for hosting conventions and exhibitions."},

{type:"teach",trg:"la olmeda",src:"the elm grove",pos:"noun",gender:"f",
 note:"Feminine noun. A place where elm trees grow.\nFrom olmo (elm tree).",
 example:"A: La olmeda del parque fue devastada por la grafiosis.\nB: Están replantando con especies resistentes.",
 exampleSrc:"A: The elm grove in the park was devastated by Dutch elm disease.\nB: They're replanting with resistant species.",
 funFact:"Dutch elm disease (grafiosis) destroyed most of Spain's olmedas in the 1980s. Recovery efforts continue."},

{type:"teach",trg:"el fierro",src:"the iron (Latin American) / branding iron",pos:"noun",gender:"m",
 note:"Masculine noun. Iron metal, used in Latin America.\nIn Spain: hierro.",
 example:"A: Los rancheros marcaban el ganado con un fierro al rojo.\nB: Cada familia tenía su propia marca.",
 exampleSrc:"A: Ranchers branded cattle with a red-hot iron.\nB: Each family had their own brand.",
 funFact:"'Fierro' preserves the older Spanish pronunciation. 'Hierro' evolved through aspiration of the initial F."},

{type:"teach",trg:"la línea",src:"the line / route / figure",pos:"noun",gender:"f",
 note:"Feminine noun. A mark, route, or body shape.\nFrom Latin linea (thread).",
 example:"A: La línea del metro más nueva conecta el aeropuerto.\nB: Ha reducido el tiempo de viaje a la mitad.",
 exampleSrc:"A: The newest metro line connects the airport.\nB: It has cut travel time in half.",
 funFact:"'Guardar la línea' means to watch your figure. 'En línea' means online. One word, many Spanish uses."},

{type:"fb",s:"La {1} del parque fue destruida por una enfermedad de los olmos.",a:["olmeda"],opts:["olmeda","carpintería","línea","cañizal"],hint:"A grove or group of elm trees, devastated across Europe by a fungal disease.",sSrc:"The {1} in the park was destroyed by an elm disease."},

{type:"teach",trg:"el agente",src:"the agent / officer",pos:"noun",gender:"m",
 note:"Masculine noun. A person who acts on behalf of others.\nFeminine: la agente.",
 example:"A: El agente inmobiliario nos mostró tres pisos.\nB: El del centro era el más caro pero el mejor situado.",
 exampleSrc:"A: The real estate agent showed us three apartments.\nB: The one in the center was the most expensive but best located.",
 funFact:"'Agente de bolsa' (stockbroker), 'agente de policía' (police officer), 'agente secreto' (secret agent) all use this word."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A group assembled for a purpose.\nFrom Latin congregare (to gather together).",
 example:"A: La congregación de vecinos decidió renovar la fachada.\nB: Van a pintar todo el edificio de blanco.",
 exampleSrc:"A: The residents' gathering decided to renovate the facade.\nB: They're going to paint the whole building white.",
 funFact:"In Spanish, 'congregación' can be religious (a community) or secular (any formal gathering of people)."},

{type:"teach",trg:"la paleta",src:"the trowel / palette / front tooth",pos:"noun",gender:"f",
 note:"Feminine noun. In construction: a bricklayer's tool.\nAlso painter's palette.",
 example:"A: El albañil extiende el cemento con la paleta.\nB: Lleva trabajando en la obra desde las siete.",
 exampleSrc:"A: The bricklayer spreads cement with the trowel.\nB: He's been working on the site since seven.",
 funFact:"A child with prominent front teeth is said to have 'paletas grandes'. One word, five different meanings."},

{type:"mc",q:"¿Qué herramienta usa un albañil para extender cemento?",opts:["La paleta","La línea","La olmeda","El fierro"],ans:"La paleta",hint:"A flat tool with a handle used to spread mortar or plaster in construction work."},

{type:"fb",s:"El {1} inmobiliario nos mostró tres apartamentos en el centro.",a:["agente"],opts:["agente","batiente","fierro","cañizal"],hint:"A professional who acts as an intermediary, in this case for buying and selling property.",sSrc:"The real estate {1} showed us three apartments in the center."},

{type:"match",pairs:[{trg:"palacio de congresos",src:"convention center"},{trg:"carpintería",src:"carpentry shop"},{trg:"olmeda",src:"elm grove"},{trg:"fierro",src:"iron (Latin Am.)"},{trg:"agente",src:"agent"}]},

{type:"fb",s:"La {1} de metro más nueva conecta el centro con el aeropuerto.",a:["línea"],opts:["línea","olmeda","paleta","congregación"],hint:"A route or track that connects two points, in this case a metro route.",sSrc:"The newest metro {1} connects the center with the airport."}
]};

export default LESSON_18;
