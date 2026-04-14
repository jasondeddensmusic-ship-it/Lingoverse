// B2 Gap Batch 6 Lesson 15 - Industry & Manufacturing
const LESSON_15 = {id:"esv2_b2g6_l15",title:"Industria y fabricación",icon:"🏭",xp:15,board:true,steps:[
{type:"intro",title:"Industria y fabricación",desc:"Learn vocabulary for discussing industrial processes, manufacturing, and workplace safety.",goals:["Learn 15 industry and manufacturing terms","Discuss production and workplace topics","Use technical industrial vocabulary"]},

{type:"teach",trg:"el desplazamiento",src:"the displacement / commute / trip",pos:"noun",gender:"m",
 note:"Masculine noun. Movement from one place to another.\nFrom desplazar (to displace).",
 example:"A: El desplazamiento al trabajo me lleva una hora.\nB: ¿Has pensado en el teletrabajo?",
 exampleSrc:"A: The commute to work takes me an hour.\nB: Have you considered remote work?",
 funFact:"In physics, 'desplazamiento' means displacement. In daily life, it means any trip or commute."},

{type:"teach",trg:"el enrejado",src:"the lattice / grating / trellis",pos:"noun",gender:"m",
 note:"Masculine noun. A framework of crossed bars.\nFrom enrejar (to put bars on).",
 example:"A: El enrejado del balcón es de hierro forjado.\nB: Le da un aspecto muy andaluz a la casa.",
 exampleSrc:"A: The balcony grating is made of wrought iron.\nB: It gives the house a very Andalusian look.",
 funFact:"Wrought iron enrejados are iconic in Andalusian architecture, especially in Seville and Cordoba."},

{type:"teach",trg:"el elevador",src:"the elevator / lift",pos:"noun",gender:"m",
 note:"Masculine noun. A device that lifts people or goods.\nFrom elevar (to raise).",
 example:"A: El elevador de carga puede levantar dos toneladas.\nB: Suficiente para los palés del almacén.",
 exampleSrc:"A: The cargo elevator can lift two tons.\nB: Enough for the warehouse pallets.",
 funFact:"In Spain, 'ascensor' is the word for a building elevator. 'Elevador' is used for industrial lifts."},

{type:"teach",trg:"el batiente",src:"the frame / jamb / leaf of a door",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door frame where\nthe door closes against.",
 example:"A: La puerta golpea contra el batiente con el viento.\nB: Hay que ajustar las bisagras.",
 exampleSrc:"A: The door bangs against the frame in the wind.\nB: The hinges need adjusting.",
 funFact:"From batir (to beat/strike). The batiente is what the door 'beats' against when closing."},

{type:"mc",q:"¿Qué es un desplazamiento al trabajo?",opts:["El viaje diario de casa al trabajo","Un ascensor industrial","Un tipo de enrejado","Una herramienta de fábrica"],ans:"El viaje diario de casa al trabajo",hint:"The daily trip from home to the workplace. A commute."},

{type:"teach",trg:"la crin",src:"horsehair / mane hair",pos:"noun",gender:"f",
 note:"Feminine noun. Hair from a horse's mane or tail.\nFrom Latin crinis (hair).",
 example:"A: Los colchones antiguos se rellenaban con crin.\nB: Ahora se usan materiales sintéticos.",
 exampleSrc:"A: Old mattresses were filled with horsehair.\nB: Now synthetic materials are used.",
 funFact:"Horsehair was historically used for mattresses, upholstery, and violin bows in Spain."},

{type:"teach",trg:"el fierro",src:"iron / branding iron",pos:"noun",gender:"m",
 note:"Masculine noun. Iron, or a branding iron for cattle.\nFrom Latin ferrum.",
 example:"A: En las haciendas marcaban al ganado con un fierro.\nB: Cada ganadero tenía su propio diseño.",
 exampleSrc:"A: On the ranches they branded cattle with a branding iron.\nB: Each rancher had his own design.",
 funFact:"'Fierro' is the traditional form. In modern Spain, 'hierro' is standard. 'Fierro' persists in Latin America."},

{type:"teach",trg:"el asta",src:"the shaft / pole / horn",pos:"noun",gender:"f",
 note:"Feminine noun (but uses 'el' for phonetics: el asta).\nA pole, or an animal's horn.",
 example:"A: La bandera ondea en el asta del ayuntamiento.\nB: La cambiaron por una nueva esta mañana.",
 exampleSrc:"A: The flag waves on the pole at city hall.\nB: They changed it for a new one this morning.",
 funFact:"Uses 'el' despite being feminine (like 'el agua'). Plural is 'las astas'. Also means a bull's horn."},

{type:"fb",s:"La bandera está a media {1} en señal de luto.",a:["asta"],opts:["asta","crin","fierro","enrejado"],hint:"The pole or staff that holds a flag.",sSrc:"The flag is at half {1} as a sign of mourning."},

{type:"teach",trg:"el joyero",src:"the jeweler / jewelry box",pos:"noun",gender:"m",
 note:"Masculine noun. A person who makes jewelry,\nor a box for keeping jewelry.",
 example:"A: El joyero reparó el anillo de mi abuela.\nB: Hizo un trabajo precioso.",
 exampleSrc:"A: The jeweler repaired my grandmother's ring.\nB: He did a beautiful job.",
 funFact:"Same word for the person and the box. Context makes it clear: 'Fui al joyero' (jeweler) vs 'Guárdalo en el joyero' (box)."},

{type:"teach",trg:"el escribiente",src:"the clerk / scribe",pos:"noun",gender:"m",
 note:"Masculine noun. A person who copies or writes\ndocuments. From escribir (to write).",
 example:"A: En el siglo diecinueve, los escribientes copiaban documentos a mano.\nB: Era un trabajo tedioso pero necesario.",
 exampleSrc:"A: In the nineteenth century, clerks copied documents by hand.\nB: It was a tedious but necessary job.",
 funFact:"Melville's famous story 'Bartleby the Scrivener' is translated as 'Bartleby el escribiente' in Spanish."},

{type:"teach",trg:"la jugada",src:"the play / move / trick",pos:"noun",gender:"f",
 note:"Feminine noun. A move in a game, or a clever trick.\nFrom jugar (to play).",
 example:"A: Fue una jugada muy inteligente por parte de la empresa.\nB: Consiguieron adelantarse a la competencia.",
 exampleSrc:"A: It was a very intelligent move by the company.\nB: They managed to get ahead of the competition.",
 funFact:"'Mala jugada' means a dirty trick. 'Buena jugada' means a clever move. Very common in business."},

{type:"mc",q:"¿Qué es un joyero?",opts:["Un artesano que hace joyas o una caja para guardarlas","Un tipo de metal precioso","Un almacén de lujo","Un diseñador de moda"],ans:"Un artesano que hace joyas o una caja para guardarlas",hint:"Can mean both the person who works with jewelry and the box that holds it."},

{type:"match",pairs:[
  {trg:"desplazamiento",src:"commute / displacement"},
  {trg:"elevador",src:"elevator / lift"},
  {trg:"escribiente",src:"clerk / scribe"},
  {trg:"joyero",src:"jeweler / jewelry box"},
  {trg:"jugada",src:"play / move"}
]},

{type:"fb",s:"Fue una {1} maestra que nadie esperaba.",a:["jugada"],opts:["jugada","crin","asta","fierro"],hint:"A clever strategic move, like in chess or business.",sSrc:"It was a masterful {1} that nobody expected."}
]};
export default LESSON_15;
