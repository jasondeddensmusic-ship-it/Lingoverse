// B2 Gap Batch 6 Lesson 14 - Food & Agriculture
const LESSON_14 = {id:"esv2_b2g6_l14",title:"Alimentación y agricultura",icon:"🌾",xp:15,board:true,steps:[
{type:"intro",title:"Alimentación y agricultura",desc:"Learn vocabulary about food production, agriculture, and culinary culture in Spain.",goals:["Learn 15 food and agriculture terms","Discuss farming and food production","Use specialized agricultural vocabulary"]},

{type:"teach",trg:"el brécol",src:"broccoli",pos:"noun",gender:"m",
 note:"Masculine noun. The green vegetable broccoli.\nFrom Italian broccoli (little sprouts).",
 example:"A: ¿Te gusta el brécol?\nB: Sí, especialmente al vapor con un poco de aceite.",
 exampleSrc:"A: Do you like broccoli?\nB: Yes, especially steamed with a little oil.",
 funFact:"In Spain, both 'brécol' and 'brócoli' are used. The RAE prefers 'brécol'."},

{type:"teach",trg:"el bolillo",src:"the small bread roll",pos:"noun",gender:"m",
 note:"Masculine noun. A type of white bread roll.\nDiminutive of bolo (ball/lump).",
 example:"A: Compra unos bolillos para la cena.\nB: ¿De la panadería de la esquina?",
 exampleSrc:"A: Buy some bread rolls for dinner.\nB: From the bakery on the corner?",
 funFact:"In Mexico, 'bolillo' is the standard word for a French-style bread roll. In Spain, 'panecillo' is more common."},

{type:"teach",trg:"la carpintería",src:"carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of woodworking, or the\nplace where it is done. From carpintero.",
 example:"A: Aprendió carpintería en el taller de su abuelo.\nB: Ahora hace muebles a medida.",
 exampleSrc:"A: He learned carpentry in his grandfather's workshop.\nB: Now he makes custom furniture.",
 funFact:"From Latin carpentarius (cart-maker). Originally about building carts, now all woodworking."},

{type:"teach",trg:"el boj",src:"boxwood",pos:"noun",gender:"m",
 note:"Masculine noun. A slow-growing evergreen shrub.\nFrom Latin buxus.",
 example:"A: Los setos de boj dan un aspecto elegante al jardín.\nB: Pero crecen muy despacio.",
 exampleSrc:"A: Boxwood hedges give an elegant look to the garden.\nB: But they grow very slowly.",
 funFact:"Boxwood has been used in Spanish gardens since Roman times for ornamental hedges and topiary."},

{type:"mc",q:"¿Qué es el brécol?",opts:["Una verdura verde parecida a un arbolito","Un tipo de pan","Un arbusto de jardín","Una herramienta de carpintería"],ans:"Una verdura verde parecida a un arbolito",hint:"A green vegetable that looks like tiny trees. Also called broccoli."},

{type:"teach",trg:"el grumo",src:"the lump / clump",pos:"noun",gender:"f",
 note:"Masculine noun. A small, solid lump in a liquid.\nFrom Latin grumus (heap).",
 example:"A: La salsa tiene grumos, no la mezclaste bien.\nB: Déjame pasarla por el colador.",
 exampleSrc:"A: The sauce has lumps, you did not mix it well.\nB: Let me strain it.",
 funFact:"'Sin grumos' (without lumps) is the standard quality claim on Spanish bechamel sauce packaging."},

{type:"teach",trg:"la alberca",src:"the water tank / swimming pool",pos:"noun",gender:"f",
 note:"Feminine noun. A large water container for irrigation,\nor a swimming pool (Latin America).",
 example:"A: La alberca del huerto necesita limpieza.\nB: Con las lluvias se ha llenado de hojas.",
 exampleSrc:"A: The irrigation tank in the orchard needs cleaning.\nB: With the rains it has filled with leaves.",
 funFact:"From Arabic al-birka (the pond). In Mexico, 'alberca' means swimming pool. In Spain, it is a farm water tank."},

{type:"teach",trg:"la cana",src:"the gray/white hair",pos:"noun",gender:"f",
 note:"Feminine noun. A single white or gray hair.\nUsually plural: las canas.",
 example:"A: Me están saliendo canas con este estrés.\nB: Son señal de experiencia, no de vejez.",
 exampleSrc:"A: I am getting gray hairs from this stress.\nB: They are a sign of experience, not old age.",
 funFact:"'Echar una cana al aire' means to let your hair down or have a fling. A very common idiom."},

{type:"fb",s:"La salsa bechamel no debe tener {1}.",a:["grumos"],opts:["grumos","bolillos","canas","albercas"],hint:"Small lumps or clumps in a sauce that should be smooth.",sSrc:"Bechamel sauce should not have {1}."},

{type:"teach",trg:"la cola de caballo",src:"horsetail / ponytail",pos:"noun",gender:"f",
 note:"Feminine noun phrase. A plant with thin stems,\nor a ponytail hairstyle.",
 example:"A: La cola de caballo es una planta medicinal.\nB: Se usa para fortalecer el cabello y las uñas.",
 exampleSrc:"A: Horsetail is a medicinal plant.\nB: It is used to strengthen hair and nails.",
 funFact:"The plant looks like a horse's tail. The same name is used for the ponytail hairstyle."},

{type:"teach",trg:"la calza",src:"the stocking / hose / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. Historical tight-fitting leg garment.\nAlso a wedge to stabilize something.",
 example:"A: En el siglo diecisiete, los hombres llevaban calzas.\nB: Era parte del traje de la nobleza.",
 exampleSrc:"A: In the seventeenth century, men wore hose.\nB: It was part of the noble's outfit.",
 funFact:"From Latin calceus (shoe). 'Calzado' (footwear) and 'calcetín' (sock) share the same root."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The space available to hold things.\nFrom caber (to fit).",
 example:"A: El almacén tiene cabida para mil toneladas.\nB: Suficiente para toda la cosecha de este año.",
 exampleSrc:"A: The warehouse has capacity for a thousand tons.\nB: Enough for the whole harvest this year.",
 funFact:"From the verb 'caber' (to fit). 'Dar cabida' means to make room for or accommodate."},

{type:"mc",q:"¿Qué es una alberca en España?",opts:["Una herramienta agrícola","Un depósito de agua para riego","Una piscina deportiva","Un tipo de huerto"],ans:"Un depósito de agua para riego",hint:"A water container used for farm irrigation. From Arabic."},

{type:"match",pairs:[
  {trg:"brécol",src:"broccoli"},
  {trg:"grumo",src:"lump"},
  {trg:"alberca",src:"water tank"},
  {trg:"cola de caballo",src:"horsetail"},
  {trg:"cabida",src:"capacity"}
]},

{type:"fb",s:"El almacén tiene {1} para almacenar toda la producción.",a:["cabida"],opts:["cabida","alberca","carpintería","calza"],hint:"The capacity or room to fit things inside.",sSrc:"The warehouse has {1} to store all the production."}
]};
export default LESSON_14;
