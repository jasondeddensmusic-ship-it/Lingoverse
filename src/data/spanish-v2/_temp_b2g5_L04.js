// B2 Gap Batch 5 Lesson 04 - Food & Cooking
const LESSON_4 = {id:"esv2_b2g5_l4",title:"En la cocina",icon:"🍳",xp:15,board:true,steps:[
{type:"intro",title:"En la cocina",desc:"Learn culinary vocabulary for cooking techniques, ingredients, and food preparation.",goals:["Learn 15 words about cooking and food","Discuss recipes and culinary techniques","Use specialized kitchen vocabulary"]},

{type:"teach",trg:"guisar",src:"to stew / to cook slowly",pos:"verb",gender:null,
 note:"Regular -ar verb. To cook slowly in liquid.\nRelated noun: el guiso (stew).",
 example:"A: Mi abuela guisaba las lentejas durante horas.\nB: Por eso estaban tan ricas.",
 exampleSrc:"A: My grandmother stewed the lentils for hours.\nB: That's why they were so delicious.",
 funFact:"Guisar is the heart of Spanish home cooking. Cocido, fabada, and lentejas are all guisos."},

{type:"teach",trg:"el guisado",src:"the stew / stewed dish",pos:"noun",gender:"m",
 note:"Masculine noun. A dish cooked slowly in sauce.\nSimilar to guiso but implies more sauce.",
 example:"A: Este guisado de ternera huele fenomenal.\nB: Lleva cocinándose desde esta mañana.",
 exampleSrc:"A: This beef stew smells amazing.\nB: It's been cooking since this morning.",
 funFact:"Every region of Spain has its signature guisado, from Asturian fabada to Catalan escudella."},

{type:"teach",trg:"gratinar",src:"to gratinate / to broil",pos:"verb",gender:null,
 note:"Regular -ar verb. To brown the top of a dish under heat.\nRelated: gratinado (noun/adj).",
 example:"A: ¿Puedes gratinar las patatas con queso?\nB: Claro, las meto al horno cinco minutos.",
 exampleSrc:"A: Can you gratinate the potatoes with cheese?\nB: Sure, I'll put them in the oven for five minutes.",
 funFact:"From French gratiner. The golden crust formed on top is called 'costra' or 'gratén' in Spanish."},

{type:"teach",trg:"el gratinado",src:"the gratin / gratinated dish",pos:"noun",gender:"m",
 note:"Masculine noun. A dish with a browned cheese or breadcrumb crust.",
 example:"A: El gratinado de verduras está listo.\nB: ¡Qué buena pinta tiene!",
 exampleSrc:"A: The vegetable gratin is ready.\nB: It looks so good!",
 funFact:"In Spain, gratinado de patatas (potato gratin) is a popular winter side dish."},

{type:"teach",trg:"glasear",src:"to glaze",pos:"verb",gender:null,
 note:"Regular -ar verb. To coat food with a shiny layer.\nUsed in pastry and savory cooking.",
 example:"A: Hay que glasear el bizcocho con chocolate.\nB: Lo haré cuando se enfríe un poco.",
 exampleSrc:"A: We need to glaze the sponge cake with chocolate.\nB: I'll do it when it cools down a bit.",
 funFact:"From French glacer (to freeze/glaze). In pastry, 'glasear' creates a mirror-like shine."},

{type:"mc",q:"¿Qué significa 'guisar'?",opts:["Cocinar lentamente en líquido","Cortar en trozos pequeños","Freír a alta temperatura","Servir en un plato"],ans:"Cocinar lentamente en líquido",hint:"Think about slow-cooking a dish like lentils or a stew for a long time."},

{type:"teach",trg:"la habichuela",src:"the bean / kidney bean",pos:"noun",gender:"f",
 note:"Feminine noun. A type of bean, especially kidney beans.\nSynonym: judía, alubia (regional).",
 example:"A: Las habichuelas con arroz son un plato clásico.\nB: Sí, muy nutritivo y barato.",
 exampleSrc:"A: Beans with rice is a classic dish.\nB: Yes, very nutritious and cheap.",
 funFact:"Spain has over 20 regional names for beans: habichuela, judía, alubia, faba, mongeta, bajoca."},

{type:"teach",trg:"el brócoli",src:"the broccoli",pos:"noun",gender:"m",
 note:"Masculine noun. Green vegetable with tree-like florets.\nAlso: brécol (less common).",
 example:"A: ¿Te gusta el brócoli al vapor?\nB: Sí, con un poco de aceite de oliva está riquísimo.",
 exampleSrc:"A: Do you like steamed broccoli?\nB: Yes, with a bit of olive oil it's delicious.",
 funFact:"Murcia is Spain's largest broccoli-producing region, exporting to all of Europe."},

{type:"teach",trg:"graso",src:"greasy / fatty",pos:"adj",gender:null,
 note:"Adjective. Containing a lot of fat.\nFeminine: grasa. Related noun: la grasa (fat).",
 example:"A: La comida rápida suele ser muy grasa.\nB: Por eso no es buena para la salud.",
 exampleSrc:"A: Fast food tends to be very greasy.\nB: That's why it's not good for your health.",
 funFact:"'Materia grasa' on Spanish food labels indicates the fat content percentage."},

{type:"teach",trg:"el grumo",src:"the lump / clump",pos:"noun",gender:"m",
 note:"Masculine noun. A small hard piece in a liquid or sauce.\nUsually unwanted in cooking.",
 example:"A: La salsa tiene grumos.\nB: Pásala por el colador y quedarán perfecta.",
 exampleSrc:"A: The sauce has lumps.\nB: Strain it and it will be perfect.",
 funFact:"The key to avoiding grumos in bechamel is to add the milk slowly while stirring constantly."},

{type:"fb",s:"Mi abuela solía {1} las lentejas durante tres horas.",a:["guisar"],opts:["guisar","gratinar","glasear","gritar"],hint:"To cook slowly in liquid, the classic method for stews.",sSrc:"My grandmother used to {1} the lentils for three hours."},

{type:"teach",trg:"glotón",src:"greedy / gluttonous",pos:"adj",gender:null,
 note:"Adjective. Eating excessively or greedily.\nAlso a noun: el glotón (the glutton).",
 example:"A: No seas glotón, deja algo para los demás.\nB: Es que todo está tan bueno.",
 exampleSrc:"A: Don't be greedy, leave some for the others.\nB: But everything is so good.",
 funFact:"The animal wolverine is called 'glotón' in Spanish because of its voracious eating habits."},

{type:"teach",trg:"grato",src:"pleasant / agreeable",pos:"adj",gender:null,
 note:"Adjective. Pleasing, especially of experiences.\nFeminine: grata. Formal register.",
 example:"A: Fue una velada muy grata.\nB: Sí, la cena y la compañía fueron excelentes.",
 exampleSrc:"A: It was a very pleasant evening.\nB: Yes, the dinner and the company were excellent.",
 funFact:"In formal letters, 'grato' appears in phrases like 'me es grato comunicarle' (I am pleased to inform you)."},

{type:"teach",trg:"el gastrónomo",src:"the gastronome / food expert",pos:"noun",gender:"m",
 note:"Masculine noun. An expert in fine food.\nFeminine: la gastrónoma.",
 example:"A: Es un gastrónomo reconocido internacionalmente.\nB: Ha escrito tres libros sobre cocina española.",
 exampleSrc:"A: He is an internationally recognized gastronome.\nB: He has written three books on Spanish cuisine.",
 funFact:"Spain has more restaurants on the World's 50 Best list than any other European country."},

{type:"teach",trg:"la faena",src:"the task / chore / job",pos:"noun",gender:"f",
 note:"Feminine noun. A piece of work or a chore.\nAlso: the bullfighter's performance.",
 example:"A: Preparar la cena para veinte personas es una faena.\nB: Pero merece la pena cuando todos disfrutan.",
 exampleSrc:"A: Preparing dinner for twenty people is a big job.\nB: But it's worth it when everyone enjoys it.",
 funFact:"In bullfighting, 'faena' refers to the matador's entire performance with the cape and sword."},

{type:"mc",q:"¿Qué son los grumos?",opts:["Trozos sólidos no deseados en una salsa","Un tipo de especia española","Verduras cortadas en trozos","Un plato tradicional catalán"],ans:"Trozos sólidos no deseados en una salsa",hint:"Small hard pieces that form when you don't stir a liquid mixture properly."},

{type:"fb",s:"Hay que {1} el bizcocho con chocolate para que brille.",a:["glasear"],opts:["glasear","guisar","gratinar","gritar"],hint:"To coat food with a shiny layer, especially in pastry-making.",sSrc:"We need to {1} the sponge cake with chocolate so it shines."},

{type:"match",pairs:[{trg:"guisado",src:"stew"},{trg:"gratinado",src:"gratin"},{trg:"brócoli",src:"broccoli"},{trg:"habichuela",src:"bean"},{trg:"gastrónomo",src:"gastronome"}]},

{type:"fb",s:"No seas {1}, deja algo para los demás.",a:["glotón"],opts:["glotón","grato","graso","grumo"],hint:"A word meaning greedy or eating excessively.",sSrc:"Don't be {1}, leave some for the others."},

{type:"mc",q:"¿Qué significa 'gratinar'?",opts:["Dorar la superficie de un plato al horno","Cocinar lentamente en líquido","Cortar verduras en trozos finos","Cubrir con una capa brillante"],ans:"Dorar la superficie de un plato al horno",hint:"Think about putting a dish under high heat to create a golden, crispy top layer."}
]};

export default LESSON_4;
