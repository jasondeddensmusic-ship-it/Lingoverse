// B2 Gap Batch 4 Lesson 03 - Environment & Nature
const LESSON_3 = {id:"esv2_b2g4_l3",title:"Medio ambiente y naturaleza",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"Medio ambiente y naturaleza",desc:"Learn vocabulary for discussing environmental issues, natural processes, and ecological challenges.",goals:["Learn 15 environment and nature words","Discuss ecology and conservation","Express environmental concerns"]},

{type:"teach",trg:"la corteza",src:"the bark / crust",pos:"noun",gender:"f",
 note:"Feminine noun. Outer layer of a tree or the earth.\nAlso: corteza cerebral (brain cortex).",
 example:"A: La corteza de este roble es muy gruesa.\nB: Los árboles viejos tienen la corteza más rugosa.",
 exampleSrc:"A: The bark of this oak tree is very thick.\nB: Old trees have rougher bark.",
 funFact:"'Corteza terrestre' is the Earth's crust. 'Corteza de pan' is the bread crust. Very versatile word."},

{type:"teach",trg:"el estanque",src:"the pond",pos:"noun",gender:"m",
 note:"Masculine noun. A small body of still water.\nOften found in parks and gardens.",
 example:"A: Hay patos en el estanque del Retiro.\nB: Es uno de los rincones más bonitos de Madrid.",
 exampleSrc:"A: There are ducks in the Retiro pond.\nB: It is one of the prettiest corners of Madrid.",
 funFact:"The famous estanque in Madrid's Retiro Park was built in the 1630s for royal boat pageants."},

{type:"teach",trg:"el epicentro",src:"the epicenter",pos:"noun",gender:"m",
 note:"Masculine noun. The point above where an earthquake originates.\nAlso figurative: the center of activity.",
 example:"A: El epicentro del terremoto fue cerca de la costa.\nB: Se sintió en toda la región.",
 exampleSrc:"A: The epicenter of the earthquake was near the coast.\nB: It was felt across the entire region.",
 funFact:"From Greek epi (above) + kentron (center). Used figuratively for any focal point of events."},

{type:"teach",trg:"la esfera",src:"the sphere",pos:"noun",gender:"f",
 note:"Feminine noun. A round shape, or a domain of activity.\nAlso: la esfera pública (public sphere).",
 example:"A: La Tierra no es una esfera perfecta.\nB: Tiene forma de geoide, algo achatada en los polos.",
 exampleSrc:"A: The Earth is not a perfect sphere.\nB: It has a geoid shape, slightly flattened at the poles.",
 funFact:"From Latin sphaera. 'Esfera de influencia' is used in politics just like 'sphere of influence'."},

{type:"teach",trg:"escasear",src:"to become scarce",pos:"verb",gender:null,
 note:"Regular -ar verb. When something starts to run out.\nRelated: la escasez, escaso.",
 example:"A: El agua empieza a escasear en el sur de España.\nB: La sequía cada año es peor.",
 exampleSrc:"A: Water is starting to become scarce in southern Spain.\nB: The drought is worse every year.",
 funFact:"Water scarcity drives Spain's massive desalination industry, the largest in Europe."},

{type:"mc",q:"¿Qué es un estanque?",opts:["Una masa de agua pequeña y tranquila","Un río caudaloso","Una cascada natural","Un embalse artificial"],ans:"Una masa de agua pequeña y tranquila",hint:"Think about the small body of still water you might find in a park."},

{type:"teach",trg:"la escasez",src:"the scarcity / shortage",pos:"noun",gender:"f",
 note:"Feminine noun. A lack or insufficient supply.\nNo plural form commonly used.",
 example:"A: La escasez de vivienda es un problema grave.\nB: Los precios no dejan de subir.",
 exampleSrc:"A: The housing shortage is a serious problem.\nB: Prices keep going up.",
 funFact:"'Escasez hídrica' (water scarcity) affects over 40% of Spain's territory."},

{type:"teach",trg:"escaso",src:"scarce / limited",pos:"adj",gender:null,
 note:"Adjective. Not enough, in short supply.\nFeminine: escasa. Often precedes time or resources.",
 example:"A: Disponemos de recursos escasos para este proyecto.\nB: Habrá que priorizar bien.",
 exampleSrc:"A: We have scarce resources for this project.\nB: We will have to prioritize well.",
 funFact:"'Escasa visibilidad' is the standard phrase in Spanish weather reports for poor visibility."},

{type:"teach",trg:"la envergadura",src:"the scale / wingspan",pos:"noun",gender:"f",
 note:"Feminine noun. The scope or magnitude of something.\nOriginally: the wingspan of a bird.",
 example:"A: Es un proyecto de gran envergadura.\nB: Necesitaremos un equipo grande.",
 exampleSrc:"A: It is a large-scale project.\nB: We will need a big team.",
 funFact:"From French envergure. Literally measures wingtip to wingtip, but mostly used figuratively."},

{type:"teach",trg:"el desplazamiento",src:"the displacement / journey",pos:"noun",gender:"m",
 note:"Masculine noun. Movement from one place to another.\nAlso: forced displacement of populations.",
 example:"A: El desplazamiento al trabajo me lleva una hora.\nB: ¿No puedes teletrabajar algún día?",
 exampleSrc:"A: The commute to work takes me an hour.\nB: Cannot you work from home some days?",
 funFact:"'Desplazamiento forzado' refers to people forced to leave their homes, a key human rights term."},

{type:"fb",s:"El agua empieza a {1} en muchas regiones del sur.",a:["escasear"],opts:["escasear","evaporar","expandir","estrangular"],hint:"To become scarce, to start running out of supply.",sSrc:"Water is starting to {1} in many southern regions."},

{type:"teach",trg:"expandir",src:"to expand",pos:"verb",gender:null,
 note:"Regular -ir verb. To make larger or spread out.\nReflexive: expandirse.",
 example:"A: La empresa quiere expandir sus operaciones a Portugal.\nB: Es un mercado interesante para ellos.",
 exampleSrc:"A: The company wants to expand its operations to Portugal.\nB: It is an interesting market for them.",
 funFact:"From Latin expandere (to spread out). 'Expansión' is also the name of a major Spanish business daily."},

{type:"teach",trg:"la dispersión",src:"the dispersal / scattering",pos:"noun",gender:"f",
 note:"Feminine noun. Spreading across a wide area.\nAlso: dispersión de la luz (light dispersion).",
 example:"A: La dispersión de semillas por el viento es esencial.\nB: Así los árboles colonizan nuevos territorios.",
 exampleSrc:"A: The dispersal of seeds by the wind is essential.\nB: That is how trees colonize new territories.",
 funFact:"In Spanish optics, 'dispersión' explains why prisms create rainbows from white light."},

{type:"teach",trg:"el enriquecimiento",src:"the enrichment",pos:"noun",gender:"m",
 note:"Masculine noun. Making richer, in any sense.\nFrom enriquecer (to enrich).",
 example:"A: El intercambio cultural es un enriquecimiento mutuo.\nB: Siempre aprendes algo nuevo de otras culturas.",
 exampleSrc:"A: Cultural exchange is a mutual enrichment.\nB: You always learn something new from other cultures.",
 funFact:"'Enriquecimiento ilícito' (illicit enrichment) is a legal term for unexplained wealth by officials."},

{type:"mc",q:"¿Qué significa 'de gran envergadura'?",opts:["De gran tamaño o importancia","De poco interés","De origen extranjero","De corta duración"],ans:"De gran tamaño o importancia",hint:"Think about the scale or magnitude of something very large."},

{type:"fb",s:"La {1} de agua es el mayor problema ambiental de la región.",a:["escasez"],opts:["escasez","esfera","corteza","envergadura"],hint:"The lack or insufficient supply of a vital resource.",sSrc:"Water {1} is the biggest environmental problem in the region."},

{type:"match",pairs:[{trg:"corteza",src:"bark / crust"},{trg:"estanque",src:"pond"},{trg:"epicentro",src:"epicenter"},{trg:"escasez",src:"scarcity"},{trg:"dispersión",src:"dispersal"}]},

{type:"mc",q:"El Retiro de Madrid es famoso por su:",opts:["Estanque con barcas","Epicentro sísmico","Factoría de chocolate","Esfera de cristal"],ans:"Estanque con barcas",hint:"A body of water where visitors can rent small boats in the park."},

{type:"fb",s:"Mi {1} diario al trabajo dura cuarenta y cinco minutos.",a:["desplazamiento"],opts:["desplazamiento","enriquecimiento","estiramiento","epicentro"],hint:"The journey or commute from one place to another.",sSrc:"My daily {1} to work takes forty-five minutes."}
]};

export default LESSON_3;
