// B2 Gap Batch 4 Lesson 07 - House & Daily Life
const LESSON_7 = {id:"esv2_b2g4_l7",title:"Casa y vida cotidiana",icon:"🏠",xp:15,board:true,steps:[
{type:"intro",title:"Casa y vida cotidiana",desc:"Learn vocabulary for household items, domestic spaces, and daily routines at an advanced level.",goals:["Learn 15 household and daily life words","Describe domestic situations","Discuss home maintenance and cooking"]},

{type:"teach",trg:"el desván",src:"the attic",pos:"noun",gender:"m",
 note:"Masculine noun. The space under the roof.\nSynonym: la buhardilla.",
 example:"A: Encontré fotos antiguas en el desván.\nB: ¿De qué época son?",
 exampleSrc:"A: I found old photos in the attic.\nB: What era are they from?",
 funFact:"From Old French desvan. In many Spanish houses, the desván stores generations of family history."},

{type:"teach",trg:"la ensaladera",src:"the salad bowl",pos:"noun",gender:"f",
 note:"Feminine noun. A large bowl for serving salad.\nFrom ensalada (salad).",
 example:"A: Pásame la ensaladera grande, por favor.\nB: ¿Esta de cristal o la de madera?",
 exampleSrc:"A: Pass me the big salad bowl, please.\nB: This glass one or the wooden one?",
 funFact:"Spanish families often serve communal salads in large 'ensaladeras' at the center of the table."},

{type:"teach",trg:"el exprimidor",src:"the juicer / squeezer",pos:"noun",gender:"m",
 note:"Masculine noun. A device for squeezing juice.\nFrom exprimir (to squeeze).",
 example:"A: ¿Dónde está el exprimidor? Quiero hacer zumo de naranja.\nB: En el armario de arriba, junto a la tostadora.",
 exampleSrc:"A: Where is the juicer? I want to make orange juice.\nB: In the upper cupboard, next to the toaster.",
 funFact:"Fresh-squeezed orange juice (zumo natural) is a staple of Spanish breakfasts, especially in bars."},

{type:"teach",trg:"el escurridor",src:"the drainer / colander",pos:"noun",gender:"m",
 note:"Masculine noun. A device for draining water from dishes or food.\nFrom escurrir (to drain).",
 example:"A: Pon la pasta en el escurridor cuando esté lista.\nB: Vale, ya está hirviendo el agua.",
 exampleSrc:"A: Put the pasta in the colander when it is ready.\nB: OK, the water is already boiling.",
 funFact:"Also 'escurreplatos' for a dish rack. Spanish kitchens typically have both types."},

{type:"teach",trg:"el ensamblaje",src:"the assembly",pos:"noun",gender:"m",
 note:"Masculine noun. Putting parts together.\nFrom ensamblar (to assemble).",
 example:"A: El ensamblaje de los muebles me llevó toda la tarde.\nB: ¿No venían con instrucciones?",
 exampleSrc:"A: The assembly of the furniture took me all afternoon.\nB: Did they not come with instructions?",
 funFact:"From French assemblage. IKEA furniture assembly is a universal experience in modern Spain."},

{type:"mc",q:"¿Qué es un desván?",opts:["El espacio bajo el tejado de una casa","Un tipo de garaje","Una habitación para invitados","Un patio interior"],ans:"El espacio bajo el tejado de una casa",hint:"Think about the space right under the roof where old things are stored."},

{type:"teach",trg:"embellecer",src:"to beautify / to embellish",pos:"verb",gender:null,
 note:"Irregular verb (c>zc before a/o). To make more beautiful.\nNoun: el embellecimiento.",
 example:"A: Quieren embellecer la plaza del pueblo.\nB: Van a plantar árboles y poner bancos nuevos.",
 exampleSrc:"A: They want to beautify the town square.\nB: They are going to plant trees and put in new benches.",
 funFact:"Spanish towns compete for 'pueblos más bonitos de España' awards, driving embellishment projects."},

{type:"teach",trg:"estático",src:"static / motionless",pos:"adj",gender:null,
 note:"Adjective. Not moving or changing.\nFeminine: estática. Also: electricidad estática.",
 example:"A: La imagen se quedó estática en la pantalla.\nB: Creo que el ordenador se ha bloqueado.",
 exampleSrc:"A: The image stayed static on the screen.\nB: I think the computer has frozen.",
 funFact:"'Electricidad estática' is what makes your hair stand up. From Greek statikos (standing still)."},

{type:"teach",trg:"el estampido",src:"the bang / blast",pos:"noun",gender:"m",
 note:"Masculine noun. A sudden loud noise.\nFrom estampar (to stamp).",
 example:"A: Se oyó un estampido terrible en la calle.\nB: Fue un petardo, no te preocupes.",
 exampleSrc:"A: A terrible bang was heard in the street.\nB: It was a firecracker, do not worry.",
 funFact:"During Spanish festivals like Las Fallas, estampidos from firecrackers are constant."},

{type:"teach",trg:"la cabecera",src:"the headboard / head of the table",pos:"noun",gender:"f",
 note:"Feminine noun. The top end of a bed or table.\nAlso: médico de cabecera (family doctor).",
 example:"A: Necesitamos una cabecera nueva para la cama.\nB: Vi unas preciosas en la tienda de muebles.",
 exampleSrc:"A: We need a new headboard for the bed.\nB: I saw some beautiful ones at the furniture shop.",
 funFact:"'Médico de cabecera' (family doctor) literally means 'bedside doctor'. Very common expression."},

{type:"fb",s:"Encontré una caja de recuerdos en el {1} de la casa.",a:["desván"],opts:["desván","escurridor","exprimidor","ensamblaje"],hint:"The storage space under the roof of a house.",sSrc:"I found a box of memories in the {1} of the house."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The amount of space or room available.\nCommon: dar cabida a (to accommodate).",
 example:"A: El teatro tiene cabida para quinientas personas.\nB: Se llenará rápido. Compra las entradas ya.",
 exampleSrc:"A: The theater has room for five hundred people.\nB: It will fill up quickly. Buy the tickets now.",
 funFact:"'Dar cabida' is used figuratively: 'dar cabida a nuevas ideas' means to make room for new ideas."},

{type:"teach",trg:"el cimiento",src:"the foundation",pos:"noun",gender:"m",
 note:"Masculine noun. The base of a building.\nUsually plural: los cimientos. Also figurative.",
 example:"A: Los cimientos de la casa están dañados.\nB: Necesitamos un ingeniero para evaluarlos.",
 exampleSrc:"A: The foundations of the house are damaged.\nB: We need an engineer to evaluate them.",
 funFact:"Figuratively, 'sentar los cimientos' means to lay the groundwork for something."},

{type:"mc",q:"¿Para qué sirve un exprimidor?",opts:["Para hacer zumo de frutas","Para lavar platos","Para guardar alimentos","Para calentar comida"],ans:"Para hacer zumo de frutas",hint:"Think about the kitchen device you use to squeeze oranges."},

{type:"teach",trg:"el enredo",src:"the tangle / mess / intrigue",pos:"noun",gender:"m",
 note:"Masculine noun. A confusing situation or tangled mess.\nVerb: enredar.",
 example:"A: Menudo enredo con los billetes de avión.\nB: Al final reservamos los vuelos equivocados.",
 exampleSrc:"A: What a mess with the plane tickets.\nB: In the end we booked the wrong flights.",
 funFact:"In theater, 'comedia de enredo' is the Spanish equivalent of a comedy of errors or farce."},

{type:"fb",s:"Los {1} del edificio se construyeron hace doscientos años.",a:["cimientos"],opts:["cimientos","desvanes","ensamblajes","enredos"],hint:"The structural base that supports a building from below.",sSrc:"The {1} of the building were built two hundred years ago."},

{type:"match",pairs:[{trg:"desván",src:"attic"},{trg:"ensaladera",src:"salad bowl"},{trg:"exprimidor",src:"juicer"},{trg:"escurridor",src:"colander"},{trg:"cabecera",src:"headboard"}]},

{type:"mc",q:"¿Qué significa 'dar cabida a'?",opts:["Tener espacio para algo o alguien","Cerrar una puerta","Romper una ventana","Pintar una pared"],ans:"Tener espacio para algo o alguien",hint:"Think about making room or space for something or someone."},

{type:"fb",s:"El {1} de la estantería me llevó dos horas.",a:["ensamblaje"],opts:["ensamblaje","estampido","enredo","cimiento"],hint:"The process of putting furniture parts together.",sSrc:"The {1} of the bookshelf took me two hours."}
]};

export default LESSON_7;
