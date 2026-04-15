// B2 Gap Batch B Lesson 04 — Environment & Nature
const LESSON_4 = {id:"esv2_b2gB_l4",title:"El medio ambiente y la naturaleza",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"El medio ambiente y la naturaleza",desc:"Explore environmental vocabulary including trees, landscapes, and ecological concepts in Spanish.",goals:["Learn 12 words about the environment and nature","Discuss ecology and natural phenomena","Use scientific and descriptive nature vocabulary"]},

{type:"teach",trg:"el olmo",src:"the elm tree",pos:"noun",gender:"m",
 note:"Masculine noun. A large deciduous tree.\nOnce common across Spain.",
 example:"A: Este olmo tiene más de doscientos años.\nB: Es uno de los pocos que sobrevivieron a la enfermedad.",
 exampleSrc:"A: This elm tree is more than two hundred years old.\nB: It is one of the few that survived the disease.",
 funFact:"The poem 'A un olmo seco' by Antonio Machado is one of Spain's most beloved literary works."},

{type:"teach",trg:"la olmeda",src:"the elm grove",pos:"noun",gender:"f",
 note:"Feminine noun. A grove or stand of elm trees.\nFrom olmo + the collective suffix -eda.",
 example:"A: Paseamos por una olmeda junto al río.\nB: Las hojas empezaban a cambiar de color.",
 exampleSrc:"A: We walked through an elm grove along the river.\nB: The leaves were starting to change color.",
 funFact:"The suffix -eda creates collective nouns for tree groves: roble > robleda, haya > hayeda."},

{type:"teach",trg:"el laurel",src:"the laurel / bay tree",pos:"noun",gender:"m",
 note:"Masculine noun. An aromatic evergreen tree.\nIts leaves are used in cooking.",
 example:"A: Pon una hoja de laurel en el caldo.\nB: Le da un sabor muy especial.",
 exampleSrc:"A: Put a bay leaf in the broth.\nB: It gives it a very special flavor.",
 funFact:"From Latin laurus. Roman victors wore laurel wreaths. 'Laureado' (laureate) preserves this tradition."},

{type:"teach",trg:"el nitrógeno",src:"the nitrogen",pos:"noun",gender:"m",
 note:"Masculine noun. Chemical element N.\nMakes up 78% of Earth's atmosphere.",
 example:"A: El nitrógeno es esencial para el crecimiento de las plantas.\nB: Por eso los fertilizantes lo contienen.",
 exampleSrc:"A: Nitrogen is essential for plant growth.\nB: That's why fertilizers contain it.",
 funFact:"From Greek nitron (saltpeter) + genes (producing). The Spanish word follows the French 'nitrogene'."},

{type:"mc",q:"¿Qué es una olmeda?",
 opts:["Un conjunto de olmos","Un tipo de flor silvestre","Una montaña nevada","Un río subterráneo"],
 ans:"Un conjunto de olmos",
 hint:"Think about the tree name 'olmo' plus a suffix that means a group of trees."},

{type:"teach",trg:"el nitrato",src:"the nitrate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound containing nitrogen.\nUsed in fertilizers and food preservation.",
 example:"A: Los nitratos en el agua pueden ser peligrosos.\nB: Hay que controlar la contaminación agrícola.",
 exampleSrc:"A: Nitrates in the water can be dangerous.\nB: Agricultural pollution must be controlled.",
 funFact:"Spain's intensive farming regions struggle with nitrate contamination in groundwater."},

{type:"teach",trg:"la onda",src:"the wave / ripple",pos:"noun",gender:"f",
 note:"Feminine noun. A wave-like movement.\nPhysics: sound waves, light waves.\nAlso figurative: trend, vibe.",
 example:"A: Las ondas de radio viajan a la velocidad de la luz.\nB: Es increíble cómo funciona la tecnología.",
 exampleSrc:"A: Radio waves travel at the speed of light.\nB: It's incredible how technology works.",
 funFact:"In Mexican Spanish, 'buena onda' means 'good vibes'. In Spain, it is less common but understood."},

{type:"teach",trg:"la ondulación",src:"the undulation / wave pattern",pos:"noun",gender:"f",
 note:"Feminine noun. A gentle wave-like motion.\nFrom ondular (to undulate).",
 example:"A: La ondulación del terreno hacía difícil el camino.\nB: Subíamos y bajábamos sin parar.",
 exampleSrc:"A: The undulation of the terrain made the path difficult.\nB: We kept going up and down nonstop.",
 funFact:"In hairdressing, 'ondulación permanente' is the Spanish term for a permanent wave (perm)."},

{type:"fb",s:"Pon una hoja de {1} en la sopa para darle más sabor.",
 a:["laurel"],opts:["laurel","olmo","nitrógeno","nitrato"],
 hint:"An aromatic leaf from an evergreen tree, commonly used in Spanish cooking.",
 sSrc:"Put a {1} leaf in the soup to give it more flavor."},

{type:"teach",trg:"el nevado",src:"the snow-capped peak / snowfall",pos:"noun",gender:"m",
 note:"Masculine noun. A mountain covered in snow.\nFrom nevar (to snow). Also adj: snowy.",
 example:"A: Desde aquí se ven los nevados de Sierra Nevada.\nB: Son impresionantes en invierno.",
 exampleSrc:"A: From here you can see the snowy peaks of Sierra Nevada.\nB: They are impressive in winter.",
 funFact:"Sierra Nevada in Granada hosts Europe's southernmost ski resort, just 30km from the Mediterranean."},

{type:"teach",trg:"la normalización",src:"the normalization / standardization",pos:"noun",gender:"f",
 note:"Feminine noun. Making something standard or normal.\nUsed in politics, linguistics, and industry.",
 example:"A: La normalización lingüística es un tema polémico.\nB: Cada comunidad autónoma tiene su política.",
 exampleSrc:"A: Linguistic normalization is a controversial topic.\nB: Each autonomous community has its own policy.",
 funFact:"In Spain, 'normalización lingüística' refers to policies promoting Catalan, Basque, or Galician."},

{type:"teach",trg:"la normativa",src:"the regulations / rules",pos:"noun",gender:"f",
 note:"Feminine noun. A set of rules or regulations.\nMore formal than 'reglas'.",
 example:"A: La normativa medioambiental es cada vez más estricta.\nB: Las empresas tienen que adaptarse.",
 exampleSrc:"A: Environmental regulations are increasingly strict.\nB: Companies have to adapt.",
 funFact:"Spain's environmental normativa is largely shaped by EU directives, translated into national law."},

{type:"mc",q:"¿Qué elemento químico compone el 78% de la atmósfera?",
 opts:["El nitrógeno","El nitrato","El laurel","El nevado"],
 ans:"El nitrógeno",
 hint:"The most abundant gas in our atmosphere, essential for plant growth."},

{type:"match",pairs:[
 {trg:"olmo",src:"elm tree"},
 {trg:"laurel",src:"laurel / bay tree"},
 {trg:"onda",src:"wave / ripple"},
 {trg:"nevado",src:"snow-capped peak"},
 {trg:"normativa",src:"regulations"}
]},

{type:"fb",s:"La {1} medioambiental prohíbe verter residuos al río.",
 a:["normativa"],opts:["normativa","normalización","ondulación","olmeda"],
 hint:"The official set of rules and regulations that govern what is and is not allowed.",
 sSrc:"The environmental {1} prohibits dumping waste in the river."},

{type:"fb",s:"Las {1} de sonido se propagan por el aire a unos 343 metros por segundo.",
 a:["ondas"],opts:["ondas","ondulaciones","normativas","olmedas"],
 hint:"The physical phenomenon that carries sound energy through a medium.",
 sSrc:"Sound {1} travel through the air at about 343 meters per second."},

]};
export default LESSON_4;
