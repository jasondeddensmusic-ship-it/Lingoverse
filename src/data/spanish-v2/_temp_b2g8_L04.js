// B2 Gap Batch 8 Lesson 04 - Environment & Nature
const LESSON_4 = {id:"esv2_b2g8_l4",title:"Medio ambiente y naturaleza",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"Medio ambiente y naturaleza",desc:"Learn vocabulary for environmental topics, natural landscapes, and ecological issues in Spain.",goals:["Learn 14 environmental and nature terms","Discuss ecological challenges","Use scientific register for nature topics"]},

{type:"teach",trg:"el medioambiente",src:"the environment",pos:"noun",gender:"m",
 note:"Masculine noun. The natural world and ecological systems.\nAlso written as two words: medio ambiente.",
 example:"A: ¿Qué podemos hacer para proteger el medioambiente?\nB: Reducir el consumo de plástico es un buen comienzo.",
 exampleSrc:"A: What can we do to protect the environment?\nB: Reducing plastic consumption is a good start.",
 funFact:"The RAE accepts both 'medioambiente' (one word) and 'medio ambiente' (two words) as correct."},

{type:"teach",trg:"el litoral",src:"the coastline / littoral",pos:"noun",gender:"m",
 note:"Masculine noun. The coastal strip of land along the sea.\nFrom Latin litoralis.",
 example:"A: El litoral mediterráneo atrae millones de turistas.\nB: Pero la urbanización excesiva es un problema serio.",
 exampleSrc:"A: The Mediterranean coastline attracts millions of tourists.\nB: But excessive urbanization is a serious problem.",
 funFact:"Spain has over 8,000 km of coastline, making it one of Europe's longest littoral zones."},

{type:"teach",trg:"el hidrocarburo",src:"the hydrocarbon",pos:"noun",gender:"m",
 note:"Masculine noun. Chemical compound of hydrogen and carbon.\nHidro- (water/hydrogen) + carburo (carbon compound).",
 example:"A: Los hidrocarburos son la principal fuente de contaminación.\nB: Por eso necesitamos energías renovables.",
 exampleSrc:"A: Hydrocarbons are the main source of pollution.\nB: That is why we need renewable energies.",
 funFact:"Spain imports about 99% of its oil and gas. The transition to renewables is a national priority."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of absorbing or being absorbed.\nVerb: absorber.",
 example:"A: Los bosques son fundamentales para la absorción de CO2.\nB: Cada hectárea absorbe toneladas al año.",
 exampleSrc:"A: Forests are fundamental for the absorption of CO2.\nB: Each hectare absorbs tons per year.",
 funFact:"Spain's reforestation programs have increased forest cover by 33% since 1990."},

{type:"mc",q:"¿Qué es el litoral?",
 opts:["La zona costera junto al mar","Un tipo de planta acuática","Una ley medioambiental","Un parque nacional"],
 ans:"La zona costera junto al mar",
 hint:"Think about the strip of land where the earth meets the sea."},

{type:"teach",trg:"lacustre",src:"lake-related / lacustrine",pos:"adj",gender:null,
 note:"Adjective. Related to lakes. Invariable for gender.\nEcosistema lacustre = lake ecosystem.",
 example:"A: Las zonas lacustres de Castilla son hábitats protegidos.\nB: Sí, albergan especies de aves únicas.",
 exampleSrc:"A: The lake areas of Castilla are protected habitats.\nB: Yes, they shelter unique bird species.",
 funFact:"Spain's largest natural lake is the Lago de Sanabria in Zamora, a glacial lacustrine formation."},

{type:"teach",trg:"el laurel",src:"the laurel / bay leaf",pos:"noun",gender:"m",
 note:"Masculine noun. An evergreen tree, also the bay leaf used in cooking.\nSymbol of victory.",
 example:"A: Pon una hoja de laurel en el guiso.\nB: Ya la puse. Le da un sabor increíble.",
 exampleSrc:"A: Put a bay leaf in the stew.\nB: I already did. It gives it an incredible flavor.",
 funFact:"From Latin laurus. In ancient Rome, laurel wreaths crowned victors. 'Laureado' means honored."},

{type:"teach",trg:"el litio",src:"the lithium",pos:"noun",gender:"m",
 note:"Masculine noun. A light metal used in batteries and medicine.\nChemical symbol: Li.",
 example:"A: Las baterías de litio son esenciales para los coches eléctricos.\nB: Pero su extracción tiene un alto coste ambiental.",
 exampleSrc:"A: Lithium batteries are essential for electric cars.\nB: But their extraction has a high environmental cost.",
 funFact:"Spain has significant lithium deposits in Extremadura, sparking debate between mining and conservation."},

{type:"fb",s:"Los bosques son fundamentales para la {1} de dióxido de carbono.",
 a:["absorción"],opts:["absorción","incursión","imposición","definición"],
 hint:"The process by which trees take in and capture CO2 from the atmosphere.",
 sSrc:"Forests are fundamental for the {1} of carbon dioxide."},

{type:"teach",trg:"la manada",src:"the herd / pack",pos:"noun",gender:"f",
 note:"Feminine noun. A group of animals, especially large mammals.\nManada de lobos = wolf pack.",
 example:"A: Vimos una manada de ciervos en el parque nacional.\nB: ¡Qué suerte! Son difíciles de ver de cerca.",
 exampleSrc:"A: We saw a herd of deer in the national park.\nB: How lucky! They are hard to see up close.",
 funFact:"The Iberian wolf lives in packs (manadas) in northern Spain. Their protection is controversial among farmers."},

{type:"teach",trg:"el mejillón",src:"the mussel",pos:"noun",gender:"m",
 note:"Masculine noun. An edible shellfish common in Spanish cuisine.\nDiminutive of 'mejilla' (cheek).",
 example:"A: Los mejillones al vapor son mi plato favorito.\nB: Los de Galicia son los mejores de España.",
 exampleSrc:"A: Steamed mussels are my favorite dish.\nB: The ones from Galicia are the best in Spain.",
 funFact:"Galicia produces over 250,000 tons of mussels annually, making Spain the world's second largest producer."},

{type:"teach",trg:"la melaza",src:"the molasses",pos:"noun",gender:"f",
 note:"Feminine noun. Thick dark syrup from sugar refining.\nFrom miel (honey) + -aza (augmentative).",
 example:"A: La melaza de caña se usa en muchos postres tradicionales.\nB: También es un endulzante natural muy nutritivo.",
 exampleSrc:"A: Cane molasses is used in many traditional desserts.\nB: It is also a very nutritious natural sweetener.",
 funFact:"In the Canary Islands, melaza de caña is a traditional ingredient in local pastries and rum production."},

{type:"mc",q:"¿Qué animal vive en manadas en el norte de España?",
 opts:["El atún rojo","El lobo ibérico","El toro bravo","El flamenco"],
 ans:"El lobo ibérico",
 hint:"A predator that hunts in organized groups in the mountains of northern Spain."},

{type:"teach",trg:"el manto",src:"the mantle / cloak",pos:"noun",gender:"m",
 note:"Masculine noun. A covering layer. Used for geology (Earth's mantle) and clothing.\nFrom Latin mantum.",
 example:"A: Un manto de nieve cubrió toda la sierra.\nB: Es la primera nevada importante del invierno.",
 exampleSrc:"A: A mantle of snow covered the entire mountain range.\nB: It is the first significant snowfall of winter.",
 funFact:"In geology, 'el manto terrestre' (Earth's mantle) is the layer between the crust and the core."},

{type:"teach",trg:"la dureza",src:"the hardness / toughness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being hard or tough.\nFrom duro (hard) + -eza (abstract suffix).",
 example:"A: La dureza del clima hace difícil la agricultura.\nB: Solo se cultivan olivos y almendros aquí.",
 exampleSrc:"A: The harshness of the climate makes agriculture difficult.\nB: Only olive and almond trees are grown here.",
 funFact:"The suffix -eza creates abstract nouns from adjectives: duro > dureza, bello > belleza, puro > pureza."},

{type:"fb",s:"El {1} mediterráneo atrae millones de turistas cada verano.",
 a:["litoral"],opts:["litoral","manto","hidrocarburo","litio"],
 hint:"The coastal zone where land meets the sea, especially along the Mediterranean.",
 sSrc:"The Mediterranean {1} attracts millions of tourists every summer."},

{type:"match",pairs:[
 {trg:"el medioambiente",src:"the environment"},
 {trg:"la manada",src:"herd / pack"},
 {trg:"el mejillón",src:"mussel"},
 {trg:"lacustre",src:"lake-related"},
 {trg:"la dureza",src:"hardness / toughness"}
]}
]};
export default LESSON_4;
