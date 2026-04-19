// B2 Gap Batch 5 Lesson 18 - Everyday Objects & Tools
const LESSON_18 = {id:"esv2_b2g5_l18",title:"Objetos y herramientas",icon:"🔧",xp:15,board:true,steps:[
{type:"intro",title:"Objetos y herramientas",desc:"Learn vocabulary about everyday objects, tools, and household items.",goals:["Learn 15 words about objects and tools","Describe items and their uses","Use precise vocabulary for physical objects"]},

{type:"teach",trg:"la grapadora",src:"the stapler",pos:"noun",gender:"f",
 note:"Feminine noun. A device for joining papers with staples.\nFrom grapa (staple).",
 example:"A: ¿Me pasas la grapadora? Necesito unir estos documentos.\nB: Está en el segundo cajón del escritorio.",
 exampleSrc:"A: Can you pass me the stapler? I need to join these documents.\nB: It's in the second drawer of the desk.",
 funFact:"In some Latin American countries, the stapler is called 'engrapadora' or 'abrochadora'."},

{type:"teach",trg:"la faja",src:"the belt / sash / girdle",pos:"noun",gender:"f",
 note:"Feminine noun. A band worn around the waist.\nAlso: a postal wrapper or belly band.",
 example:"A: Los toreros llevan una faja debajo del traje de luces.\nB: Es parte esencial de la vestimenta.",
 exampleSrc:"A: Bullfighters wear a sash under the suit of lights.\nB: It is an essential part of the outfit.",
 funFact:"In Spain, 'faja' also refers to the paper band wrapped around books or magazines as a promotional label."},

{type:"teach",trg:"la calza",src:"the stocking / wedge / chock",pos:"noun",gender:"f",
 note:"Feminine noun. Historical: leg covering.\nModern: a wedge to prevent movement.",
 example:"A: Pon una calza debajo de la rueda para que no se mueva.\nB: Buena idea, la cuesta es bastante pronunciada.",
 exampleSrc:"A: Put a chock under the wheel so it doesn't move.\nB: Good idea, the slope is quite steep.",
 funFact:"In the 16th century, 'calzas' were the tight-fitting leg coverings worn by Spanish gentlemen."},

{type:"teach",trg:"la hélice",src:"the propeller / helix",pos:"noun",gender:"f",
 note:"Feminine noun. A rotating blade that produces thrust.\nAlso: a spiral shape.",
 example:"A: La hélice del barco se dañó con las rocas.\nB: Necesitaremos un buceador para repararla.",
 exampleSrc:"A: The ship's propeller was damaged by the rocks.\nB: We will need a diver to repair it.",
 funFact:"From Greek helix (spiral). DNA's structure is a 'doble hélice' (double helix)."},

{type:"teach",trg:"el arcabuz",src:"the arquebus (old firearm)",pos:"noun",gender:"m",
 note:"Masculine noun. A type of early firearm from the 15th-16th century.\nHistorical weapon.",
 example:"A: Los soldados españoles usaban el arcabuz en las batallas.\nB: Era un arma muy importante en su época.",
 exampleSrc:"A: Spanish soldiers used the arquebus in battles.\nB: It was a very important weapon in its time.",
 funFact:"The Spanish tercios (infantry units) mastered the arcabuz, dominating European battlefields for over a century."},

{type:"mc",q:"¿Para qué sirve una grapadora?",opts:["Para unir papeles con grapas","Para cortar cartón","Para pegar sobres","Para perforar agujeros"],ans:"Para unir papeles con grapas",hint:"An office tool that joins sheets of paper together using small metal clips."},

{type:"teach",trg:"el galón",src:"the gallon / braid / chevron",pos:"noun",gender:"m",
 note:"Masculine noun. A unit of liquid measure.\nAlso: military rank stripes on a uniform.",
 example:"A: Los galones del uniforme indican el rango del militar.\nB: Cuantos más galones, mayor es el rango.",
 exampleSrc:"A: The chevrons on the uniform indicate the soldier's rank.\nB: The more chevrons, the higher the rank.",
 funFact:"In Spain, 'galón' as a liquid measure is barely used (they use liters), but military galones are common."},

{type:"teach",trg:"el bolillo",src:"the bobbin / bread roll",pos:"noun",gender:"m",
 note:"Masculine noun. A small wooden tool for making lace.\nAlso: a type of bread roll in Mexico.",
 example:"A: El encaje de bolillos es una artesanía tradicional.\nB: Requiere mucha paciencia y habilidad.",
 exampleSrc:"A: Bobbin lace-making is a traditional craft.\nB: It requires a lot of patience and skill.",
 funFact:"'Encaje de bolillos' (bobbin lace) is famous in towns like Almagro and Camariñas in Spain."},

{type:"teach",trg:"el fierro",src:"the iron / branding iron",pos:"noun",gender:"m",
 note:"Masculine noun. Regional/archaic for hierro (iron).\nIn ranching: a branding iron.",
 example:"A: En las haciendas marcaban el ganado con un fierro.\nB: Era la forma de identificar a los animales.",
 exampleSrc:"A: On ranches they branded the cattle with a branding iron.\nB: It was the way to identify the animals.",
 funFact:"'Fierro' is standard in Latin America but archaic in Spain. The phrase 'a fierro y fuego' means by force."},

{type:"teach",trg:"la cobra",src:"the cobra",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous hooded snake.\nAlso: in bullfighting, a type of maneuver.",
 example:"A: La cobra real es una de las serpientes más peligrosas.\nB: Su veneno puede ser mortal en minutos.",
 exampleSrc:"A: The king cobra is one of the most dangerous snakes.\nB: Its venom can be lethal in minutes.",
 funFact:"From Portuguese cobra (snake), from Latin colubra. Spain has no native cobras, only vipers."},

{type:"fb",s:"La {1} del barco necesita reparación urgente.",a:["hélice"],opts:["hélice","grapadora","calza","faja"],hint:"The rotating blade mechanism that propels a ship through water.",sSrc:"The ship's {1} needs urgent repair."},

{type:"teach",trg:"forrar",src:"to line / to cover / to wrap",pos:"verb",gender:null,
 note:"Regular -ar verb. To cover the inside or outside of something.\nColloquial: forrarse (to get rich).",
 example:"A: Hay que forrar los libros del colegio con plástico.\nB: Es muy bueno para el libro.",
 exampleSrc:"A: We need to cover the school books with plastic.\nB: It is very good for the book.",
 funFact:"'Forrarse' colloquially means to make a fortune: 'se forró con el negocio' (he made a fortune)."},

{type:"teach",trg:"fletar",src:"to charter / to hire (transport)",pos:"verb",gender:null,
 note:"Regular -ar verb. To hire a vehicle for transporting goods.\nRelated: flete (freight charge).",
 example:"A: Fletaron un avión para traer la ayuda humanitaria.\nB: Llegó al país en menos de veinticuatro horas.",
 exampleSrc:"A: They chartered a plane to bring humanitarian aid.\nB: It arrived in the country in less than twenty-four hours.",
 funFact:"From French fret (freight). 'Flete' is the cost of transporting goods, a key logistics term."},

{type:"teach",trg:"el grill",src:"the grill / broiler",pos:"noun",gender:"m",
 note:"Masculine noun. The heating element for grilling in an oven.\nFrom English 'grill'.",
 example:"A: Pon las tostadas en el grill dos minutos.\nB: Vale, pero vigila que no se quemen.",
 exampleSrc:"A: Put the toast in the grill for two minutes.\nB: OK, but watch that they don't burn.",
 funFact:"In Spain, 'grill' refers specifically to the oven's top heating element, not a barbecue (that's 'parrilla')."},

{type:"teach",trg:"el acupuntor",src:"the acupuncturist",pos:"noun",gender:"m",
 note:"Masculine noun. A practitioner of acupuncture.\nFeminine: la acupuntora.",
 example:"A: El acupuntor me ayudó con el dolor de espalda.\nB: ¿De verdad? Yo nunca lo he probado.",
 exampleSrc:"A: The acupuncturist helped me with my back pain.\nB: Really? I've never tried it.",
 funFact:"Acupuncture has grown significantly in Spain since the 1990s, though it remains complementary medicine."},

{type:"mc",q:"¿Qué es el encaje de bolillos?",opts:["Una artesanía de hacer encaje con pequeños husos","Un tipo de bordado a máquina","Una técnica de teñir telas","Un juego de mesa tradicional"],ans:"Una artesanía de hacer encaje con pequeños husos",hint:"A traditional craft using small wooden tools to create delicate lace patterns."},

{type:"fb",s:"{1} un avión para transportar la mercancía urgente.",a:["Fletaron"],opts:["Fletaron","Forraron","Fruncieron","Forjaron"],hint:"To charter or hire a vehicle specifically for transporting goods.",sSrc:"They {1} a plane to transport the urgent merchandise."},

{type:"match",pairs:[{trg:"grapadora",src:"stapler"},{trg:"hélice",src:"propeller"},{trg:"faja",src:"sash"},{trg:"galón",src:"chevron / braid"},{trg:"grill",src:"broiler"}]},

{type:"fb",s:"Hay que {1} los libros con plástico para protegerlos.",a:["forrar"],opts:["forrar","fletar","fruncir","forjar"],hint:"To cover or wrap something with a protective layer.",sSrc:"We need to {1} the books with plastic to protect them."},

{type:"mc",q:"¿Qué significa 'forrarse' en lenguaje coloquial?",opts:["Hacerse muy rico","Ponerse un abrigo","Estudiar mucho","Enfadarse bastante"],ans:"Hacerse muy rico",hint:"The reflexive form of 'forrar' has a colloquial meaning about making a lot of money."}
]};

export default LESSON_18;
