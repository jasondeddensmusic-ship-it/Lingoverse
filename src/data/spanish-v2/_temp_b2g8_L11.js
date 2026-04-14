// B2 Gap Batch 8 Lesson 11 - History & Archaeology
const LESSON_11 = {id:"esv2_b2g8_l11",title:"Historia y arqueología",icon:"🏺",xp:15,board:true,steps:[
{type:"intro",title:"Historia y arqueología",desc:"Learn vocabulary for discussing historical periods, archaeological discoveries, and ancient civilizations.",goals:["Learn 14 history and archaeology terms","Discuss historical periods in Spanish","Use academic register for history"]},

{type:"teach",trg:"la edad antigua",src:"the ancient age / antiquity",pos:"noun",gender:"f",
 note:"Feminine noun. The historical period from the invention of writing to the fall of Rome.\nEdad = age, antigua = ancient.",
 example:"A: La Edad Antigua abarca desde la escritura hasta la caída de Roma.\nB: Es un periodo fascinante de miles de años.",
 exampleSrc:"A: The Ancient Age spans from writing to the fall of Rome.\nB: It is a fascinating period of thousands of years.",
 funFact:"Spain's ancient history includes Iberians, Celts, Phoenicians, Greeks, Carthaginians, and Romans."},

{type:"teach",trg:"la edad contemporánea",src:"the contemporary age / modern era",pos:"noun",gender:"f",
 note:"Feminine noun. The period from the French Revolution to the present.\nContemporánea = contemporary.",
 example:"A: En la Edad Contemporánea se produjeron grandes cambios sociales.\nB: La industrialización transformó todo.",
 exampleSrc:"A: Great social changes occurred in the Contemporary Age.\nB: Industrialization transformed everything.",
 funFact:"In Spanish historiography, the 'Edad Contemporánea' begins in 1789. English-speaking historians use different divisions."},

{type:"teach",trg:"la edad de bronce",src:"the Bronze Age",pos:"noun",gender:"f",
 note:"Feminine noun. The period when bronze tools and weapons were used.\nBronce = bronze.",
 example:"A: En la Edad de Bronce se desarrollaron las primeras ciudades.\nB: También el comercio a larga distancia.",
 exampleSrc:"A: In the Bronze Age, the first cities developed.\nB: Also long-distance trade.",
 funFact:"The Argar culture in southeastern Spain was one of Europe's most advanced Bronze Age civilizations."},

{type:"teach",trg:"la edad de piedra",src:"the Stone Age",pos:"noun",gender:"f",
 note:"Feminine noun. The earliest period of human history using stone tools.\nPiedra = stone.",
 example:"A: Las pinturas de Altamira son de la Edad de Piedra.\nB: Tienen más de quince mil años de antigüedad.",
 exampleSrc:"A: The Altamira paintings are from the Stone Age.\nB: They are more than fifteen thousand years old.",
 funFact:"Spain's Cave of Altamira contains some of the finest Stone Age art in the world, dating to 36,000 years ago."},

{type:"mc",q:"¿A qué periodo pertenecen las pinturas rupestres de Altamira?",
 opts:["A la Edad de Piedra","A la Edad de Bronce","A la Edad Antigua","A la Edad Contemporánea"],
 ans:"A la Edad de Piedra",
 hint:"The earliest period of human history, when people used stone tools."},

{type:"teach",trg:"la cristianización",src:"the Christianization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of converting a population to Christianity.\nCristiano + -ización.",
 example:"A: La cristianización de la Península Ibérica fue un proceso largo.\nB: Duró varios siglos tras la caída de Roma.",
 exampleSrc:"A: The Christianization of the Iberian Peninsula was a long process.\nB: It lasted several centuries after the fall of Rome.",
 funFact:"The Reconquista (711-1492) combined military reconquest with Christianization of formerly Muslim territories."},

{type:"teach",trg:"la evangelización",src:"the evangelization",pos:"noun",gender:"f",
 note:"Feminine noun. The spreading of the Christian gospel.\nSimilar to cristianización but more religious in focus.",
 example:"A: La evangelización de América fue polémica.\nB: Mezcló fe sincera con intereses coloniales.",
 exampleSrc:"A: The evangelization of the Americas was controversial.\nB: It mixed sincere faith with colonial interests.",
 funFact:"Spanish missionaries like Bartolomé de las Casas both evangelized and defended indigenous peoples' rights."},

{type:"teach",trg:"el descendimiento",src:"the descent (from the cross)",pos:"noun",gender:"m",
 note:"Masculine noun. The lowering of Christ from the cross, a major art subject.\nVerb: descender.",
 example:"A: El Descendimiento de Van der Weyden está en el Museo del Prado.\nB: Es una de las obras maestras del museo.",
 exampleSrc:"A: Van der Weyden's Descent from the Cross is in the Prado Museum.\nB: It is one of the museum's masterpieces.",
 funFact:"Spain's Semana Santa processions often feature elaborate 'pasos' depicting the Descendimiento."},

{type:"fb",s:"La {1} de la Península Ibérica comenzó con los romanos.",
 a:["cristianización"],opts:["cristianización","evangelización","edad de bronce","edad contemporánea"],
 hint:"The process of converting a region to Christianity, starting with the Romans.",
 sSrc:"The {1} of the Iberian Peninsula began with the Romans."},

{type:"teach",trg:"el arcabuz",src:"the arquebus / early firearm",pos:"noun",gender:"m",
 note:"Masculine noun. An early type of portable gun used from the 15th century.\nFrom Dutch haakbus.",
 example:"A: Los soldados españoles usaban arcabuces en el siglo XVI.\nB: Fueron un arma decisiva en las guerras europeas.",
 exampleSrc:"A: Spanish soldiers used arquebuses in the sixteenth century.\nB: They were a decisive weapon in European wars.",
 funFact:"The Spanish tercios combined pikemen and arcabuceros, dominating European battlefields for over a century."},

{type:"teach",trg:"el asta",src:"the flagpole / antler / spear shaft",pos:"noun",gender:"f",
 note:"Feminine noun (but uses 'el' for phonetics). A pole, horn, or shaft.\nA media asta = at half-mast.",
 example:"A: La bandera ondea a media asta en señal de duelo.\nB: ¿Qué ha ocurrido? No me he enterado.",
 exampleSrc:"A: The flag is flying at half-mast as a sign of mourning.\nB: What happened? I have not heard.",
 funFact:"Like 'el agua' and 'el alma', feminine nouns starting with stressed 'a' take 'el' but remain feminine."},

{type:"teach",trg:"el acorazado",src:"the battleship / armored ship",pos:"noun",gender:"m",
 note:"Masculine noun. A heavily armored warship.\nFrom coraza (armor) + a- prefix.",
 example:"A: Los acorazados dominaron la guerra naval hasta 1945.\nB: Después los portaaviones los sustituyeron.",
 exampleSrc:"A: Battleships dominated naval warfare until 1945.\nB: After that, aircraft carriers replaced them.",
 funFact:"Spain's 'Acorazado España' served from 1913 to 1937. It was sunk during the Spanish Civil War."},

{type:"mc",q:"¿Qué significa 'a media asta'?",
 opts:["Que la bandera está a mitad del mástil, en señal de duelo","Que la bandera es muy grande","Que el mástil está roto","Que hay celebración"],
 ans:"Que la bandera está a mitad del mástil, en señal de duelo",
 hint:"When something sad happens, flags are lowered to the middle of the pole."},

{type:"teach",trg:"la incursión",src:"the raid / incursion",pos:"noun",gender:"f",
 note:"Feminine noun. A sudden attack or entry into enemy territory.\nFrom Latin incursio.",
 example:"A: Las incursiones vikingas llegaron hasta las costas españolas.\nB: Galicia sufrió varios ataques en el siglo IX.",
 exampleSrc:"A: Viking raids reached the Spanish coasts.\nB: Galicia suffered several attacks in the ninth century.",
 funFact:"Viking incursions into Spain are little known but well documented. They even besieged Seville in 844."},

{type:"teach",trg:"el comendador",src:"the commander (of a military order)",pos:"noun",gender:"m",
 note:"Masculine noun. A knight commander in a religious-military order.\nFrom encomienda.",
 example:"A: El Comendador es un personaje clave en Fuenteovejuna.\nB: Su tiranía provoca la rebelión del pueblo.",
 exampleSrc:"A: The Commander is a key character in Fuenteovejuna.\nB: His tyranny provokes the townspeople's rebellion.",
 funFact:"Lope de Vega's 'Fuenteovejuna' (1619) is one of Spain's greatest plays, featuring a tyrannical Comendador."},

{type:"fb",s:"Los soldados españoles del siglo XVI usaban {1} como arma de fuego.",
 a:["arcabuces"],opts:["arcabuces","acorazados","astas","menhires"],
 hint:"An early portable firearm that Spanish troops used in European and colonial warfare.",
 sSrc:"Spanish soldiers in the sixteenth century used {1} as firearms."},

{type:"match",pairs:[
 {trg:"la edad de piedra",src:"the Stone Age"},
 {trg:"la edad contemporánea",src:"the Contemporary Age"},
 {trg:"el arcabuz",src:"arquebus / early firearm"},
 {trg:"el asta",src:"flagpole / antler"},
 {trg:"el comendador",src:"knight commander"}
]}
]};
export default LESSON_11;
