// B2 Gap Batch B Lesson 06 — History & Civilization
const LESSON_6 = {id:"esv2_b2gB_l6",title:"Historia y civilización",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Historia y civilización",desc:"Learn vocabulary about historical periods, civilizations, and cultural movements in the Spanish-speaking world.",goals:["Learn 12 words about history and civilization","Discuss historical periods and events","Use academic vocabulary for historical analysis"]},

{type:"teach",trg:"la Edad Antigua",src:"the Ancient Age / Classical Antiquity",pos:"noun",gender:"f",
 note:"Feminine compound. The historical period from writing to Rome's fall.\nCapitalized as a proper period name.",
 example:"A: La Edad Antigua abarca desde la escritura hasta la caída de Roma.\nB: Es un período fascinante de la historia.",
 exampleSrc:"A: The Ancient Age spans from writing to the fall of Rome.\nB: It is a fascinating period of history.",
 funFact:"In the Spanish curriculum, the Edad Antigua includes Iberian, Celtic, Phoenician, and Roman civilizations."},

{type:"teach",trg:"la Edad de Piedra",src:"the Stone Age",pos:"noun",gender:"f",
 note:"Feminine compound. The earliest period of human tool use.\nStone tools define this era.",
 example:"A: En la Edad de Piedra, los humanos vivían en cuevas.\nB: Las pinturas de Altamira son de esa época.",
 exampleSrc:"A: In the Stone Age, humans lived in caves.\nB: The Altamira paintings are from that era.",
 funFact:"Spain's Altamira cave paintings, dating to 36,000 years ago, are among the finest Stone Age art worldwide."},

{type:"teach",trg:"la Edad de Bronce",src:"the Bronze Age",pos:"noun",gender:"f",
 note:"Feminine compound. When bronze tools replaced stone.\nIn Spain, roughly 3000-1000 BCE.",
 example:"A: La Edad de Bronce trajo grandes avances tecnológicos.\nB: La metalurgia cambió la vida cotidiana.",
 exampleSrc:"A: The Bronze Age brought great technological advances.\nB: Metalworking changed daily life.",
 funFact:"The Iberian Peninsula was rich in tin and copper, making it a key Bronze Age trading center."},

{type:"teach",trg:"la Edad de Hierro",src:"the Iron Age",pos:"noun",gender:"f",
 note:"Feminine compound. When iron replaced bronze.\nIn Spain, the time of Celts and Iberians.",
 example:"A: Durante la Edad de Hierro, los íberos desarrollaron su propia escritura.\nB: Todavía no la hemos descifrado completamente.",
 exampleSrc:"A: During the Iron Age, the Iberians developed their own writing.\nB: We still haven't fully deciphered it.",
 funFact:"The Lady of Elche bust, a masterpiece of Iberian Iron Age sculpture, is in Madrid's National Archaeological Museum."},

{type:"mc",q:"¿Qué periodo es anterior a la Edad de Bronce?",
 opts:["La Edad de Piedra","La Edad de Hierro","La Edad Antigua","La Edad Contemporánea"],
 ans:"La Edad de Piedra",
 hint:"Think about the chronological order: the most primitive tools came first."},

{type:"teach",trg:"la Edad Contemporánea",src:"the Contemporary Age / Modern Era",pos:"noun",gender:"f",
 note:"Feminine compound. From the French Revolution to the present.\nIn Spanish historiography, begins 1789.",
 example:"A: La Edad Contemporánea empieza con la Revolución Francesa.\nB: Es el período de las grandes transformaciones sociales.",
 exampleSrc:"A: The Contemporary Age begins with the French Revolution.\nB: It is the period of great social transformations.",
 funFact:"Spanish historians divide modern history differently from Anglo-Saxon tradition, using 1789 as the key dividing line."},

{type:"teach",trg:"la cristianización",src:"the Christianization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of converting to Christianity.\nFrom cristiano (Christian).",
 example:"A: La cristianización de Hispania fue un proceso gradual.\nB: Duró varios siglos tras la llegada de los romanos.",
 exampleSrc:"A: The Christianization of Hispania was a gradual process.\nB: It lasted several centuries after the Romans arrived.",
 funFact:"Spain's Christianization was so thorough that it became known as 'la tierra de Maria Santisima'."},

{type:"teach",trg:"la evangelización",src:"the evangelization",pos:"noun",gender:"f",
 note:"Feminine noun. Spreading the Christian faith.\nKey concept in colonial history.",
 example:"A: La evangelización de América fue una empresa enorme.\nB: Los misioneros fundaron cientos de iglesias.",
 exampleSrc:"A: The evangelization of the Americas was an enormous undertaking.\nB: Missionaries founded hundreds of churches.",
 funFact:"Franciscan, Dominican, and Jesuit missionaries were the three main orders in Spain's American evangelización."},

{type:"fb",s:"Las pinturas de Altamira son del periodo de la {1}.",
 a:["Edad de Piedra"],opts:["Edad de Piedra","Edad de Bronce","Edad de Hierro","Edad Contemporánea"],
 hint:"The earliest era when humans made tools from a hard natural material found on the ground.",
 sSrc:"The Altamira paintings are from the {1} period."},

{type:"teach",trg:"el arcabuz",src:"the arquebus (early firearm)",pos:"noun",gender:"m",
 note:"Masculine noun. An early portable gun.\nUsed by Spanish soldiers in the 15th-17th centuries.",
 example:"A: Los soldados españoles usaban arcabuces en las batallas.\nB: Eran armas pesadas y difíciles de cargar.",
 exampleSrc:"A: Spanish soldiers used arquebuses in battle.\nB: They were heavy weapons and difficult to load.",
 funFact:"From Arabic al-qabus. The Spanish tercios armed with arcabuces dominated European battlefields for over a century."},

{type:"teach",trg:"el infante",src:"the prince (royal) / infant soldier",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la infanta.\nA royal child, or historically a foot soldier.",
 example:"A: Los infantes de España no pueden heredar el trono directamente.\nB: Solo la princesa de Asturias es heredera.",
 exampleSrc:"A: The infantes of Spain cannot inherit the throne directly.\nB: Only the Princess of Asturias is the heir.",
 funFact:"'Infanta' is the title still used for Spanish royal daughters. It also gave us the word 'infantry'."},

{type:"teach",trg:"el descendimiento",src:"the descent (from the cross)",pos:"noun",gender:"m",
 note:"Masculine noun. The removal of Christ from the cross.\nArt and religious term.",
 example:"A: El Descendimiento de Van der Weyden está en el Museo del Prado.\nB: Es una de las obras maestras del museo.",
 exampleSrc:"A: Van der Weyden's Descent from the Cross is in the Prado Museum.\nB: It is one of the museum's masterpieces.",
 funFact:"Spain's Holy Week processions often feature elaborate pasos (floats) depicting the Descendimiento."},

{type:"mc",q:"¿Qué es un arcabuz?",
 opts:["Un arma de fuego antigua","Un instrumento musical","Una herramienta agrícola","Un tipo de embarcación"],
 ans:"Un arma de fuego antigua",
 hint:"Think about early firearms used by soldiers before modern rifles were invented."},

{type:"match",pairs:[
 {trg:"Edad de Piedra",src:"Stone Age"},
 {trg:"Edad de Bronce",src:"Bronze Age"},
 {trg:"Edad de Hierro",src:"Iron Age"},
 {trg:"infante",src:"prince / royal child"},
 {trg:"arcabuz",src:"arquebus"}
]},

{type:"fb",s:"La {1} de América fue liderada por órdenes religiosas como los franciscanos.",
 a:["evangelización"],opts:["evangelización","cristianización","Edad Antigua","Edad Contemporánea"],
 hint:"The organized effort to spread the Christian faith to new populations.",
 sSrc:"The {1} of the Americas was led by religious orders like the Franciscans."},

{type:"fb",s:"La {1} comienza con la Revolución Francesa en 1789.",
 a:["Edad Contemporánea"],opts:["Edad Contemporánea","Edad Antigua","Edad de Hierro","cristianización"],
 hint:"The most recent major historical period, starting with a famous revolution.",
 sSrc:"The {1} begins with the French Revolution in 1789."},

]};
export default LESSON_6;
