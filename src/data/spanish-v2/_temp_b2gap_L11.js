// B2 Gap Lesson 11 - Buildings & Places
const LESSON_11 = {id:"esv2_b2gap_l11",title:"Edificios y lugares",icon:"🏰",xp:15,board:true,steps:[
{type:"intro",title:"Edificios y lugares",desc:"Learn vocabulary for buildings, workshops, and places that define Spanish towns and cities.",goals:["Learn 20 place and building words","Describe urban and rural settings","Navigate Spanish architectural vocabulary"]},

{type:"teach",trg:"la alcazaba",src:"the citadel / Moorish fortress",pos:"noun",gender:"f",
 note:"Feminine noun. A fortified enclosure within a city.",
 example:"A: La alcazaba de Málaga tiene unas vistas espectaculares.\nB: Merece la pena subir hasta arriba.",
 exampleSrc:"A: The Malaga citadel has spectacular views.\nB: It is worth climbing to the top.",
 funFact:"From Arabic al-qasbah (the fortress). Spain's alcazabas are UNESCO heritage treasures."},

{type:"teach",trg:"la alfarería",src:"the pottery / pottery workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of making pottery, or the workshop itself.",
 example:"A: Visitamos una alfarería tradicional en Talavera.\nB: Vimos cómo hacen los platos a mano.",
 exampleSrc:"A: We visited a traditional pottery workshop in Talavera.\nB: We saw how they make plates by hand.",
 funFact:"From Arabic al-fahhar (the potter). Talavera de la Reina pottery is world-famous."},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft or workshop of woodworking.",
 example:"A: Mi tío tiene una carpintería en el pueblo.\nB: Hace muebles a medida preciosos.",
 exampleSrc:"A: My uncle has a carpentry workshop in the village.\nB: He makes beautiful custom furniture.",
 funFact:"From carpintero (carpenter), from Latin carpentarius (maker of carriages)."},

{type:"teach",trg:"la choza",src:"the hut / shack",pos:"noun",gender:"f",
 note:"Feminine noun. A simple, rustic dwelling.",
 example:"A: Los pastores construían chozas en la montaña.\nB: Les servían de refugio durante el invierno.",
 exampleSrc:"A: The shepherds built huts in the mountains.\nB: They served as shelter during winter.",
 funFact:"Origin uncertain, possibly pre-Roman. 'Choza' evokes rural simplicity and pastoral life."},

{type:"teach",trg:"la alberca",src:"the water tank / pool",pos:"noun",gender:"f",
 note:"Feminine noun. In Spain: an irrigation pool. In Mexico: a swimming pool.",
 example:"A: La alberca del jardín está llena de nenúfares.\nB: Es un rincón muy tranquilo y bonito.",
 exampleSrc:"A: The garden pool is full of water lilies.\nB: It is a very peaceful and beautiful corner.",
 funFact:"From Arabic al-birka (the pool). Alhambra's gardens have beautiful historical albercas."},

{type:"mc",q:"Una fortaleza árabe dentro de una ciudad española es:",opts:["una alcazaba","una carpintería","una choza","una alberca"],ans:"una alcazaba",hint:"This Arabic-origin word describes a fortified enclosure."},

{type:"teach",trg:"el bungaló",src:"the bungalow",pos:"noun",gender:"m",
 note:"Masculine noun. A small vacation house, usually one story.",
 example:"A: Alquilamos un bungaló cerca de la playa.\nB: Perfecto para una semana de descanso.",
 exampleSrc:"A: We rented a bungalow near the beach.\nB: Perfect for a week of rest.",
 funFact:"From Hindi bangla (Bengali-style house). Entered Spanish via English in the 20th century."},

{type:"teach",trg:"la cabecera",src:"the head / headboard / county seat",pos:"noun",gender:"f",
 note:"Feminine noun. The head of a bed, table, or a main town in a district.",
 example:"A: El pueblo es cabecera de la comarca.\nB: Todos los servicios están concentrados allí.",
 exampleSrc:"A: The town is the county seat of the district.\nB: All services are concentrated there.",
 funFact:"From cabeza (head). 'Cabecera de cama' is headboard. 'Cabecera comarcal' is the main town."},

{type:"teach",trg:"el bazar",src:"the bazaar / dollar store",pos:"noun",gender:"m",
 note:"Masculine noun. A market or cheap goods shop.",
 example:"A: Compré las decoraciones en un bazar del barrio.\nB: Son baratas pero bastante bonitas.",
 exampleSrc:"A: I bought the decorations at a neighborhood bazaar.\nB: They are cheap but quite nice.",
 funFact:"From Persian bazar (marketplace). In Spain, 'bazar' often refers to Chinese-owned variety stores."},

{type:"teach",trg:"el consistorio",src:"the town hall / city council",pos:"noun",gender:"m",
 note:"Masculine noun. The municipal government building or body.",
 example:"A: El consistorio aprobó el nuevo plan urbanístico.\nB: Las obras empezarán el próximo mes.",
 exampleSrc:"A: The city council approved the new urban plan.\nB: Construction will begin next month.",
 funFact:"From Latin consistorium (council chamber). Also called 'ayuntamiento' in everyday Spanish."},

{type:"teach",trg:"los abastos",src:"the provisions / market",pos:"noun",gender:"m",
 note:"Masculine plural noun. Food supplies, or a food market.\n'Mercado de abastos' = food market.",
 example:"A: El mercado de abastos tiene productos frescos.\nB: Vamos temprano para encontrar lo mejor.",
 exampleSrc:"A: The food market has fresh products.\nB: Let us go early to find the best selection.",
 funFact:"'No dar abasto' (to not keep up) comes from not having enough supplies to meet demand."},

{type:"fb",s:"Visitamos la {1} de Málaga y disfrutamos de las vistas.",a:["alcazaba"],opts:["alcazaba","alberca","carpintería","choza"],hint:"A Moorish fortress perched above the city.",sSrc:"We visited the Malaga {1} and enjoyed the views."},

{type:"teach",trg:"el arcón",src:"the large chest / trunk",pos:"noun",gender:"m",
 note:"Masculine noun. A large wooden storage chest.",
 example:"A: Guardamos las mantas en el arcón del abuelo.\nB: Todavía huele a madera vieja.",
 exampleSrc:"A: We store the blankets in grandfather's chest.\nB: It still smells of old wood.",
 funFact:"Augmentative of arca (chest). The Ark of the Covenant is 'el Arca de la Alianza' in Spanish."},

{type:"teach",trg:"el cofre",src:"the treasure chest / small box",pos:"noun",gender:"m",
 note:"Masculine noun. A decorative box or small chest for valuables.",
 example:"A: Encontraron un cofre lleno de monedas antiguas.\nB: Data del siglo dieciséis.",
 exampleSrc:"A: They found a chest full of ancient coins.\nB: It dates from the sixteenth century.",
 funFact:"From French coffre. In pirate stories, 'el cofre del tesoro' is the treasure chest."},

{type:"teach",trg:"el baúl",src:"the trunk / large suitcase",pos:"noun",gender:"m",
 note:"Masculine noun. A large travel trunk or storage container.",
 example:"A: El baúl de la abuela estaba en el desván.\nB: Dentro había fotos y cartas antiguas.",
 exampleSrc:"A: Grandmother's trunk was in the attic.\nB: Inside there were old photos and letters.",
 funFact:"From Old French bahut. Before suitcases, travelers used 'baúles' for long journeys."},

{type:"teach",trg:"la cartulina",src:"the cardboard / card stock",pos:"noun",gender:"f",
 note:"Feminine noun. Stiff paper used for crafts and signs.",
 example:"A: Necesito cartulina roja para el proyecto del colegio.\nB: Hay en la papelería de la esquina.",
 exampleSrc:"A: I need red card stock for the school project.\nB: There is some at the stationery shop on the corner.",
 funFact:"Diminutive of cartula, from Latin chartula (small paper). Essential in every Spanish school."},

{type:"mc",q:"El gobierno municipal de un pueblo se llama:",opts:["la alcazaba","el consistorio","la carpintería","el bazar"],ans:"el consistorio",hint:"The official body that governs a town, similar to city hall."},

{type:"teach",trg:"el batiente",src:"the frame / the slamming part of a door",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door or window frame that receives the closing panel.",
 example:"A: La puerta golpea contra el batiente con el viento.\nB: Hay que ajustar las bisagras.",
 exampleSrc:"A: The door hits against the frame in the wind.\nB: We need to adjust the hinges.",
 funFact:"From batir (to beat). The batiente is literally what gets 'beaten' when the door slams shut."},

{type:"teach",trg:"la base",src:"the base / basis",pos:"noun",gender:"f",
 note:"Feminine noun. Foundation or starting point.",
 example:"A: La base del edificio es de piedra caliza.\nB: Le da mucha solidez y estabilidad.",
 exampleSrc:"A: The base of the building is limestone.\nB: It gives it great solidity and stability.",
 funFact:"From Latin basis, from Greek basis (step). 'Base de datos' is the Spanish for database."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The space available to hold things or people.",
 example:"A: El estadio tiene cabida para ochenta mil personas.\nB: Es uno de los más grandes de Europa.",
 exampleSrc:"A: The stadium has capacity for eighty thousand people.\nB: It is one of the largest in Europe.",
 funFact:"From caber (to fit). 'Dar cabida a' means to make room for or accommodate something."},

{type:"teach",trg:"la coincidencia",src:"the coincidence",pos:"noun",gender:"f",
 note:"Feminine noun. When events happen at the same time by chance.",
 example:"A: Qué coincidencia encontrarte aquí.\nB: El mundo es un pañuelo.",
 exampleSrc:"A: What a coincidence running into you here.\nB: It is a small world.",
 funFact:"'El mundo es un pañuelo' (the world is a handkerchief) is Spain's version of 'small world'."},

{type:"teach",trg:"el cojín",src:"the cushion",pos:"noun",gender:"m",
 note:"Masculine noun. A soft pad for sitting or decoration.",
 example:"A: Pon un cojín en la silla, es más cómodo.\nB: Buena idea, la madera es muy dura.",
 exampleSrc:"A: Put a cushion on the chair, it is more comfortable.\nB: Good idea, the wood is very hard.",
 funFact:"From Old French coussin. Spaniards love decorating sofas with 'cojines' of every color."},

{type:"fb",s:"El estadio tiene {1} para sesenta mil espectadores.",a:["cabida"],opts:["cabida","base","coincidencia","cartulina"],hint:"The capacity or room to hold a certain number of people.",sSrc:"The stadium has {1} for sixty thousand spectators."},

{type:"mc",q:"¿Dónde compras productos frescos en un pueblo español?",opts:["En el bazar","En la alcazaba","En el mercado de abastos","En la carpintería"],ans:"En el mercado de abastos",hint:"A traditional market focused on fresh food and provisions."},

{type:"match",pairs:[{trg:"alcazaba",src:"Moorish fortress"},{trg:"alfarería",src:"pottery workshop"},{trg:"consistorio",src:"town hall"},{trg:"cofre",src:"treasure chest"},{trg:"cojín",src:"cushion"}]},

{type:"fb",s:"Qué {1} encontrarnos en el mismo restaurante.",a:["coincidencia"],opts:["coincidencia","cabida","base","consistorio"],hint:"An unexpected chance meeting in the same place.",sSrc:"What a {1} running into each other at the same restaurant."},

{type:"mc",q:"Un 'arcón' es:",opts:["Una ventana pequeña","Un muro de piedra","Un jardín interior","Un baúl grande de madera"],ans:"Un baúl grande de madera",hint:"A large storage container, bigger than a regular chest."}
]};

export default LESSON_11;
