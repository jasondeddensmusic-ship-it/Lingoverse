// B2 Gap Batch D Lesson 2 - Workplace Roles & Professions
const LESSON_2 = {id:"esv2_b2gD_l2",title:"Oficios y profesiones",icon:"\uD83D\uDC77",xp:15,board:true,steps:[
{type:"intro",title:"Oficios y profesiones",desc:"Learn vocabulary for trades, crafts, and professional roles commonly tested at DELE B2.",goals:["Learn 10 profession and trade vocabulary items","Describe workplace roles precisely","Distinguish between related professional terms"]},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. Both the trade and the workshop.\nFrom carpintero (carpenter).",
 example:"A: Mi abuelo tenía una carpintería en el pueblo.\nB: Hacía muebles preciosos con madera de roble.",
 exampleSrc:"A: My grandfather had a carpentry workshop in the village.\nB: He made beautiful furniture from oak wood.",
 funFact:"Carpintería comes from Latin 'carpentarius' (wagon maker). In medieval Spain, carpenters built ships for exploration."},

{type:"teach",trg:"el panadero",src:"the baker",pos:"noun",gender:"m",
 note:"Masculine noun. A person who makes bread.\nFeminine: la panadera. Shop: la panadería.",
 example:"A: El panadero de mi barrio abre a las cinco de la mañana.\nB: Por eso su pan siempre está recién hecho.",
 exampleSrc:"A: The baker in my neighborhood opens at five in the morning.\nB: That's why his bread is always freshly made.",
 funFact:"Spain consumes about 35 kg of bread per person per year. Every village traditionally had its own panadero."},

{type:"teach",trg:"el peluquero",src:"the hairdresser / barber",pos:"noun",gender:"m",
 note:"Masculine noun. From pelo (hair) + -ero suffix.\nFeminine: la peluquera. Shop: la peluquería.",
 example:"A: Necesito ir al peluquero antes de la boda.\nB: Te recomiendo el mío, es muy profesional.",
 exampleSrc:"A: I need to go to the hairdresser before the wedding.\nB: I recommend mine, he's very professional.",
 funFact:"The -ero/-ería pattern is productive: zapato > zapatero > zapatería (shoe > shoemaker > shoe shop)."},

{type:"teach",trg:"la obrera",src:"the female worker / laborer",pos:"noun",gender:"f",
 note:"Feminine noun. A manual or factory worker.\nMasculine: el obrero. Adjective: obrero/a.",
 example:"A: Las obreras de la fábrica exigen mejores condiciones.\nB: Han convocado una huelga para el lunes.",
 exampleSrc:"A: The factory workers demand better conditions.\nB: They've called a strike for Monday.",
 funFact:"'Clase obrera' (working class) remains a powerful political term in Spain, especially in industrial regions like the Basque Country."},

{type:"mc",q:"Si quieres pan recién hecho, vas a ver al...",opts:["panadero","peluquero","carpintero","conductor"],ans:"panadero",hint:"The person who works with flour, yeast, and an oven every morning."},

{type:"teach",trg:"el peletero",src:"the furrier",pos:"noun",gender:"m",
 note:"Masculine noun. A person who works with animal skins.\nFrom piel (skin) via peleter + -o.",
 example:"A: El peletero del centro ha cerrado su tienda.\nB: Normal, la demanda de pieles ha bajado mucho.",
 exampleSrc:"A: The furrier downtown has closed his shop.\nB: Makes sense, the demand for furs has dropped a lot.",
 funFact:"The fur trade was once a major industry in Spain. Peleteros were respected artisans in medieval Toledo."},

{type:"teach",trg:"el maquetador",src:"the layout designer / typesetter",pos:"noun",gender:"m",
 note:"Masculine noun. Designs the visual layout of publications.\nFrom maqueta (mockup) + -dor.",
 example:"A: El maquetador ha terminado el diseño de la revista.\nB: Queda fantástico, muy profesional.",
 exampleSrc:"A: The layout designer has finished the magazine design.\nB: It looks fantastic, very professional.",
 funFact:"With desktop publishing, maquetadores shifted from physical paste-up boards to software like InDesign."},

{type:"teach",trg:"la pescadería",src:"the fish shop / fishmonger's",pos:"noun",gender:"f",
 note:"Feminine noun. A shop specializing in fresh fish.\nFrom pescado (fish) + -ería (shop suffix).",
 example:"A: En la pescadería del mercado tienen gambas frescas hoy.\nB: Perfecto, haré una paella para la cena.",
 exampleSrc:"A: At the fish shop in the market they have fresh prawns today.\nB: Perfect, I'll make a paella for dinner.",
 funFact:"Spain is the largest fish consumer in the EU. Most towns have a dedicated pescadería in their central market."},

{type:"teach",trg:"la papelera",src:"the wastepaper basket / paper factory",pos:"noun",gender:"f",
 note:"Feminine noun. A bin for paper waste.\nAlso a paper manufacturing plant.",
 example:"A: Tira esos papeles a la papelera, por favor.\nB: Espera, creo que uno de ellos es importante.",
 exampleSrc:"A: Throw those papers in the wastepaper basket, please.\nB: Wait, I think one of them is important.",
 funFact:"The -era suffix creates container nouns: papel > papelera (paper basket), azúcar > azucarera (sugar bowl)."},

{type:"fb",s:"El {1} diseña cómo se ven las páginas de una revista o periódico.",a:["maquetador"],opts:["maquetador","panadero","peletero","peluquero"],hint:"This professional arranges text, images, and graphics in publications.",sSrc:"The {1} designs how the pages of a magazine or newspaper look."},

{type:"teach",trg:"el paleontólogo",src:"the paleontologist",pos:"noun",gender:"m",
 note:"Masculine noun. A scientist who studies fossils.\nFeminine: la paleontóloga.",
 example:"A: Los paleontólogos han descubierto un fósil de dinosaurio en Teruel.\nB: Es uno de los yacimientos más importantes de Europa.",
 exampleSrc:"A: Paleontologists have discovered a dinosaur fossil in Teruel.\nB: It's one of the most important sites in Europe.",
 funFact:"Teruel province in Aragon is called 'the land of dinosaurs'. The Dinopolis museum there attracts 200,000 visitors yearly."},

{type:"match",pairs:[
 {trg:"carpintería",src:"carpentry workshop"},
 {trg:"pescadería",src:"fish shop"},
 {trg:"peluquero",src:"hairdresser"},
 {trg:"panadero",src:"baker"},
 {trg:"papelera",src:"wastepaper basket"}
]},

{type:"mc",q:"Un peletero trabaja con...",opts:["Pescado fresco","Pieles de animales","Papel y cartón","Madera y clavos"],ans:"Pieles de animales",hint:"This artisan's raw material comes from animal hides and furs."},

{type:"fb",s:"Compré gambas frescas en la {1} del mercado central.",a:["pescadería"],opts:["pescadería","carpintería","papelera","panadería"],hint:"A shop in the market that specializes in selling fresh seafood and fish.",sSrc:"I bought fresh prawns at the {1} in the central market."},

{type:"mc",q:"Las obreras de la fábrica convocaron una...",opts:["reunión de vecinos","excursión","huelga","fiesta"],ans:"huelga",hint:"When workers collectively stop working to demand better conditions, they call a..."},

{type:"fb",s:"Mi abuelo era {1} y hacía muebles de madera.",a:["carpintero"],opts:["carpintero","panadero","peluquero","peletero"],hint:"A craftsman who works with wood to build furniture, doors, and shelves.",sSrc:"My grandfather was a {1} and made wooden furniture."}
]};
export default LESSON_2;
