// B2 Gap Batch 8 Lesson 16 - Real Estate & Housing
const LESSON_16 = {id:"esv2_b2g8_l16",title:"Vivienda e inmuebles",icon:"🏠",xp:15,board:true,steps:[
{type:"intro",title:"Vivienda e inmuebles",desc:"Learn vocabulary for real estate, housing, and property in the Spanish market.",goals:["Learn 14 real estate and housing terms","Discuss property and construction","Use formal vocabulary for housing topics"]},

{type:"teach",trg:"inmueble",src:"real estate / property (adj)",pos:"adj",gender:null,
 note:"Adjective (also noun). Related to property that cannot be moved.\nBien inmueble = real estate property.",
 example:"A: El sector inmueble ha crecido un diez por ciento este año.\nB: Los precios de las viviendas no paran de subir.",
 exampleSrc:"A: The real estate sector has grown ten percent this year.\nB: Housing prices do not stop rising.",
 funFact:"Spain's 2008 housing crash (burbuja inmobiliaria) was one of the worst in European history."},

{type:"teach",trg:"el enrejado",src:"the grating / lattice / trellis",pos:"noun",gender:"m",
 note:"Masculine noun. A structure made of crossed bars or strips.\nFrom reja (bar/grate).",
 example:"A: El enrejado del balcón necesita una mano de pintura.\nB: Sí, está bastante oxidado por la humedad.",
 exampleSrc:"A: The balcony grating needs a coat of paint.\nB: Yes, it is quite rusty from the humidity.",
 funFact:"Traditional Spanish houses feature elaborate wrought-iron enrejados, especially in Andalusia."},

{type:"teach",trg:"el bidet",src:"the bidet",pos:"noun",gender:"m",
 note:"Masculine noun. A low bathroom fixture for personal hygiene.\nFrom French bidet.",
 example:"A: ¿El apartamento tiene bidet en el baño?\nB: Sí, es un piso reformado con todas las comodidades.",
 exampleSrc:"A: Does the apartment have a bidet in the bathroom?\nB: Yes, it is a renovated flat with all amenities.",
 funFact:"Bidets are standard in Spanish bathrooms. Not having one is considered unusual, unlike in the UK or US."},

{type:"teach",trg:"la borda",src:"the hut / mountainside cabin",pos:"noun",gender:"f",
 note:"Feminine noun. A mountain cabin or hut, especially in the Pyrenees.\nAlso: echar por la borda = to throw overboard.",
 example:"A: Pasamos la noche en una borda en los Pirineos.\nB: ¿Con electricidad? ¿O era rústica del todo?",
 exampleSrc:"A: We spent the night in a mountain cabin in the Pyrenees.\nB: With electricity? Or was it completely rustic?",
 funFact:"In the Pyrenees, 'bordas' are traditional stone shepherds' huts. Many are now converted into rural tourism."},

{type:"mc",q:"¿Qué es un bien inmueble?",
 opts:["Una propiedad que no se puede mover, como un edificio","Un coche de lujo","Una obra de arte","Un negocio ambulante"],
 ans:"Una propiedad que no se puede mover, como un edificio",
 hint:"In- (not) + mueble (movable). Property that stays in one place."},

{type:"teach",trg:"el batiente",src:"the frame (of a door/window) / swinging door",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door frame that the door rests against.\nFrom batir (to beat/strike).",
 example:"A: La puerta no cierra bien porque el batiente está deformado.\nB: Habrá que llamar a un carpintero.",
 exampleSrc:"A: The door does not close properly because the frame is warped.\nB: We will have to call a carpenter.",
 funFact:"In nautical Spanish, 'batiente' also refers to the part of a ship's hull that hits the waves."},

{type:"teach",trg:"la calza",src:"the wedge / shim",pos:"noun",gender:"f",
 note:"Feminine noun. A piece used to level or stabilize furniture or structures.\nFrom calzar (to wedge).",
 example:"A: La mesa cojea. Necesita una calza en esa pata.\nB: Pon un trozo de cartón debajo, servirá.",
 exampleSrc:"A: The table wobbles. It needs a wedge under that leg.\nB: Put a piece of cardboard underneath, it will work.",
 funFact:"In old Spanish, 'calzas' were tight-fitting trousers. The footwear connection: calzar = to put on shoes."},

{type:"teach",trg:"la crin",src:"the horsehair / mane hair",pos:"noun",gender:"f",
 note:"Feminine noun. Hair from a horse's mane or tail, used in upholstery.\nFrom Latin crinis.",
 example:"A: Los colchones antiguos se rellenaban de crin.\nB: Ahora se usan materiales sintéticos mucho más cómodos.",
 exampleSrc:"A: Old mattresses were filled with horsehair.\nB: Now much more comfortable synthetic materials are used.",
 funFact:"Horsehair (crin) was the standard mattress filling in Spain until the mid-20th century."},

{type:"fb",s:"El sector {1} español se recuperó lentamente tras la crisis de 2008.",
 a:["inmueble"],opts:["inmueble","enrejado","batiente","industrial"],
 hint:"The property market, dealing with buildings and land that cannot be moved.",
 sSrc:"The Spanish {1} sector recovered slowly after the 2008 crisis."},

{type:"teach",trg:"el loft",src:"the loft / converted space",pos:"noun",gender:"m",
 note:"Masculine noun. An open-plan living space, often a converted warehouse.\nBorrowed from English.",
 example:"A: Vivimos en un loft en el centro de la ciudad.\nB: Me encantan los techos altos y el espacio abierto.",
 exampleSrc:"A: We live in a loft in the city center.\nB: I love the high ceilings and open space.",
 funFact:"Lofts became trendy in Madrid and Barcelona in the 2000s, converting old industrial spaces into homes."},

{type:"teach",trg:"el leño",src:"the log / firewood",pos:"noun",gender:"m",
 note:"Masculine noun. A piece of wood for burning.\nDormir como un leño = to sleep like a log.",
 example:"A: Pon otro leño en la chimenea, se está apagando.\nB: Es el último. Mañana hay que comprar más.",
 exampleSrc:"A: Put another log on the fireplace, it is going out.\nB: It is the last one. Tomorrow we need to buy more.",
 funFact:"The expression 'dormir como un leño' (to sleep like a log) is identical in Spanish and English."},

{type:"teach",trg:"el leñador",src:"the lumberjack / woodcutter",pos:"noun",gender:"m",
 note:"Masculine noun. A person who cuts down trees for wood.\nLeña (firewood) + -ador.",
 example:"A: Los leñadores trabajan en los bosques del norte.\nB: Es un oficio muy duro, sobre todo en invierno.",
 exampleSrc:"A: Lumberjacks work in the northern forests.\nB: It is a very hard trade, especially in winter.",
 funFact:"The leñador is a classic figure in Spanish fairy tales, just like the woodcutter in English ones."},

{type:"mc",q:"¿Qué es un loft?",
 opts:["Un espacio abierto, a menudo una nave industrial convertida en vivienda","Un tipo de tejado","Un garaje subterráneo","Un jardín en la azotea"],
 ans:"Un espacio abierto, a menudo una nave industrial convertida en vivienda",
 hint:"An English borrowing for a large, open-plan converted living space. Think urban and modern."},

{type:"teach",trg:"el lagar",src:"the wine press / oil press",pos:"noun",gender:"m",
 note:"Masculine noun. A facility for pressing grapes or olives.\nFrom Latin lacus (basin).",
 example:"A: Visitamos un lagar antiguo en La Rioja.\nB: ¿Todavía funciona o es un museo?",
 exampleSrc:"A: We visited an old wine press in La Rioja.\nB: Does it still work or is it a museum?",
 funFact:"Many traditional lagares in Spain have been converted into rural hotels and wine tourism centers."},

{type:"teach",trg:"el madero",src:"the plank / timber",pos:"noun",gender:"m",
 note:"Masculine noun. A thick piece of wood or timber.\nFrom madera (wood). Also slang for 'cop'.",
 example:"A: Los maderos de la estructura están en buen estado.\nB: La casa tiene más de cien años pero es sólida.",
 exampleSrc:"A: The timbers of the structure are in good condition.\nB: The house is over a hundred years old but solid.",
 funFact:"In colloquial Spanish, 'madero' is slang for a police officer. Origin debated but widely used."},

{type:"fb",s:"El {1} antiguo de la bodega aún se usa para prensar uvas cada otoño.",
 a:["lagar"],opts:["lagar","loft","leño","madero"],
 hint:"A facility specifically designed for pressing grapes to make wine.",
 sSrc:"The old {1} of the winery is still used to press grapes every autumn."},

{type:"match",pairs:[
 {trg:"inmueble",src:"real estate / property"},
 {trg:"el enrejado",src:"grating / lattice"},
 {trg:"el loft",src:"loft / converted space"},
 {trg:"el leñador",src:"lumberjack"},
 {trg:"el lagar",src:"wine press"}
]}
]};
export default LESSON_16;
