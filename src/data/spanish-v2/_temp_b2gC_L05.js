// B2 Gap Batch C Lesson 05 - Industrial Professions & Trades
const LESSON_5 = {id:"esv2_b2gC_l5",title:"Oficios y profesiones",icon:"🔧",xp:15,board:true,steps:[
{type:"intro",title:"Oficios y profesiones",desc:"Master vocabulary for traditional trades, industrial professions, and skilled labor in Spain.",goals:["Learn 12 words about trades and professions","Discuss skilled labor and craftsmanship","Use occupational vocabulary precisely"]},

{type:"teach",trg:"el peluquero",src:"the hairdresser (male)",pos:"noun",gender:"m",
 note:"Masculine noun. A person who cuts and styles hair.\nFeminine: la peluquera.",
 example:"A: Mi peluquero me ha recomendado un nuevo tratamiento.\nB: ¿Es para fortalecer el pelo?",
 exampleSrc:"A: My hairdresser recommended a new treatment to me.\nB: Is it to strengthen the hair?",
 funFact:"From peluca (wig). Originally, peluqueros were wig makers for the aristocracy."},

{type:"teach",trg:"el panadero",src:"the baker (male)",pos:"noun",gender:"m",
 note:"Masculine noun. A person who makes bread.\nFeminine: la panadera.",
 example:"A: El panadero del barrio abre a las seis de la mañana.\nB: Su pan de masa madre es el mejor de la zona.",
 exampleSrc:"A: The neighborhood baker opens at six in the morning.\nB: His sourdough bread is the best in the area.",
 funFact:"Spain consumes about 35 kg of bread per person per year, and neighborhood panaderías remain very popular."},

{type:"teach",trg:"la pescadería",src:"the fish shop / fishmonger's",pos:"noun",gender:"f",
 note:"Feminine noun. A shop that sells fish.\nFrom pescado (fish as food).",
 example:"A: Voy a la pescadería a comprar merluza fresca.\nB: Pregunta si tienen gambas, que están de temporada.",
 exampleSrc:"A: I'm going to the fish shop to buy fresh hake.\nB: Ask if they have prawns, they're in season.",
 funFact:"Spain has the highest per capita fish consumption in the EU after Portugal."},

{type:"teach",trg:"el ingeniero de sistemas",src:"the systems engineer",pos:"noun",gender:"m",
 note:"Masculine compound noun. Designs and manages tech systems.\nFeminine: la ingeniera de sistemas.",
 example:"A: El ingeniero de sistemas ha resuelto el problema del servidor.\nB: Menos mal, llevábamos dos horas sin conexión.",
 exampleSrc:"A: The systems engineer has solved the server problem.\nB: Thank goodness, we'd been without connection for two hours.",
 funFact:"In Spain, 'ingeniero' requires a university degree. It is a protected professional title, unlike in some countries."},

{type:"mc",q:"¿Dónde compras merluza fresca?",opts:["En la pescadería","En la panadería","En la peluquería","En la ingeniería"],ans:"En la pescadería",hint:"This shop specializes in selling fresh fish and seafood."},

{type:"teach",trg:"el paleontólogo",src:"the paleontologist",pos:"noun",gender:"m",
 note:"Masculine noun. A scientist who studies ancient life.\nFeminine: la paleontóloga.",
 example:"A: El paleontólogo descubrió restos de un dinosaurio.\nB: El hallazgo ha sido portada en todo el mundo.",
 exampleSrc:"A: The paleontologist discovered the remains of a dinosaur.\nB: The discovery has been front-page news worldwide.",
 funFact:"Spain's Atapuerca site contains the oldest known human remains in Western Europe, over 800,000 years old."},

{type:"teach",trg:"el maquetador",src:"the layout designer / typesetter",pos:"noun",gender:"m",
 note:"Masculine noun. Person who designs page layouts.\nFeminine: la maquetadora.",
 example:"A: El maquetador ha terminado el diseño de la revista.\nB: Queda muy profesional, buen trabajo.",
 exampleSrc:"A: The layout designer has finished the magazine design.\nB: It looks very professional, good job.",
 funFact:"From maqueta (model/mockup). In the digital age, maquetadores work with software like InDesign."},

{type:"teach",trg:"el peletero",src:"the furrier",pos:"noun",gender:"m",
 note:"Masculine noun. A person who works with animal pelts.\nFeminine: la peletera.",
 example:"A: El peletero de la familia lleva cuatro generaciones en el negocio.\nB: Ahora trabajan más con piel sintética.",
 exampleSrc:"A: The family furrier has been in the business for four generations.\nB: Now they work more with synthetic fur.",
 funFact:"From piel (skin/leather). Spain's fur industry has declined significantly due to animal welfare campaigns."},

{type:"fb",s:"El {1} del barrio hace el mejor pan de la ciudad.",a:["panadero"],opts:["panadero","peluquero","peletero","maquetador"],hint:"The professional who makes bread, usually opening very early each morning.",sSrc:"The neighborhood {1} makes the best bread in the city."},

{type:"teach",trg:"el pelotón",src:"the platoon / peloton / large group",pos:"noun",gender:"m",
 note:"Masculine noun. A military squad or cycling group.\nFrom pelota (ball), via French peloton.",
 example:"A: El pelotón de cabeza lleva una ventaja de dos minutos.\nB: La etapa de montaña decidirá la carrera.",
 exampleSrc:"A: The leading peloton has a two-minute lead.\nB: The mountain stage will decide the race.",
 funFact:"Spain's Vuelta a España is one of cycling's three Grand Tours. 'Pelotón' is used daily during race coverage."},

{type:"teach",trg:"la hilera",src:"the row / line / file",pos:"noun",gender:"f",
 note:"Feminine noun. A line of things or people.\nFrom hilo (thread).",
 example:"A: Los soldados marchaban en hilera por la avenida.\nB: El desfile duró más de una hora.",
 exampleSrc:"A: The soldiers marched in a row down the avenue.\nB: The parade lasted more than an hour.",
 funFact:"From hilo (thread). Things arranged in a hilera look like beads threaded on a string."},

{type:"teach",trg:"la obrera",src:"the worker (female) / worker bee",pos:"noun",gender:"f",
 note:"Feminine noun. A female manual worker.\nAlso: abeja obrera (worker bee).",
 example:"A: Las obreras de la fábrica pidieron mejores condiciones.\nB: La empresa accedió a negociar un nuevo convenio.",
 exampleSrc:"A: The female factory workers asked for better conditions.\nB: The company agreed to negotiate a new agreement.",
 funFact:"In Spanish, 'obrero/obrera' carries more political weight than 'trabajador'. It evokes the labor movement."},

{type:"mc",q:"¿Qué profesional diseña la disposición visual de una revista?",opts:["El maquetador","El peluquero","El paleontólogo","El panadero"],ans:"El maquetador",hint:"This person works with page layouts, arranging text and images for publications."},

{type:"fb",s:"El {1} descubrió fósiles de hace un millón de años.",a:["paleontólogo"],opts:["paleontólogo","ingeniero","maquetador","peletero"],hint:"A scientist who studies fossils and ancient forms of life.",sSrc:"The {1} discovered fossils from a million years ago."},

{type:"match",pairs:[{trg:"peluquero",src:"hairdresser"},{trg:"pescadería",src:"fish shop"},{trg:"pelotón",src:"peloton"},{trg:"hilera",src:"row"},{trg:"obrera",src:"female worker"}]}
]};

export default LESSON_5;
