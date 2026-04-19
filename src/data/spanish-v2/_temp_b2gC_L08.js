// B2 Gap Batch C Lesson 08 - History & Archaeology
const LESSON_8 = {id:"esv2_b2gC_l8",title:"Historia y arqueología",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Historia y arqueología",desc:"Master vocabulary for historical periods, archaeological discoveries, and Spain's rich ancient heritage.",goals:["Learn 12 words about history and archaeology","Discuss historical periods and discoveries","Use academic historical register"]},

{type:"teach",trg:"la edad de piedra",src:"the Stone Age",pos:"noun",gender:"f",
 note:"Feminine compound noun. The earliest period of human history.\nCharacterized by stone tools.",
 example:"A: En la edad de piedra, los humanos vivían en cuevas.\nB: Las pinturas rupestres de Altamira lo demuestran.",
 exampleSrc:"A: In the Stone Age, humans lived in caves.\nB: The cave paintings of Altamira demonstrate this.",
 funFact:"Spain's Altamira cave paintings are among the finest Stone Age art in the world, dating back 36,000 years."},

{type:"teach",trg:"la edad de bronce",src:"the Bronze Age",pos:"noun",gender:"f",
 note:"Feminine compound noun. Period when bronze tools appeared.\nRoughly 3300 to 1200 BC.",
 example:"A: La edad de bronce trajo grandes avances tecnológicos.\nB: La metalurgia cambió la agricultura y la guerra.",
 exampleSrc:"A: The Bronze Age brought great technological advances.\nB: Metallurgy changed agriculture and warfare.",
 funFact:"The Iberian Peninsula was rich in tin and copper, making it a key Bronze Age metallurgy center."},

{type:"teach",trg:"la edad de hierro",src:"the Iron Age",pos:"noun",gender:"f",
 note:"Feminine compound noun. Period when iron tools replaced bronze.\nRoughly 1200 BC to Roman conquest.",
 example:"A: Durante la edad de hierro, los celtas llegaron a la Península.\nB: Sus castros todavía son visibles en Galicia.",
 exampleSrc:"A: During the Iron Age, the Celts arrived on the Peninsula.\nB: Their hill forts are still visible in Galicia.",
 funFact:"The celtiberos (Celtiberians) combined Celtic and Iberian cultures during Spain's Iron Age."},

{type:"teach",trg:"la edad antigua",src:"the Ancient Age / Classical Antiquity",pos:"noun",gender:"f",
 note:"Feminine compound noun. From writing's invention to Rome's fall.\nApproximately 3000 BC to 476 AD.",
 example:"A: La edad antigua en España incluye la presencia romana.\nB: Ciudades como Mérida conservan ruinas impresionantes.",
 exampleSrc:"A: The Ancient Age in Spain includes the Roman presence.\nB: Cities like Mérida preserve impressive ruins.",
 funFact:"Mérida's Roman theater still hosts performances. It is the best-preserved Roman theater in the world."},

{type:"mc",q:"¿Qué edad histórica se caracteriza por el uso de herramientas de piedra?",opts:["La edad de piedra","La edad de bronce","La edad de hierro","La edad antigua"],ans:"La edad de piedra",hint:"The earliest historical period, named after the material used for the first tools."},

{type:"teach",trg:"la edad contemporánea",src:"the Contemporary Age / Modern Era",pos:"noun",gender:"f",
 note:"Feminine compound noun. From the French Revolution to today.\nSpanish periodization differs from English.",
 example:"A: La edad contemporánea en España empieza con la Guerra de Independencia.\nB: Contra Napoleón, en 1808.",
 exampleSrc:"A: The Contemporary Age in Spain begins with the War of Independence.\nB: Against Napoleon, in 1808.",
 funFact:"Spanish historians divide history into four ages: Antigua, Media, Moderna, and Contemporánea."},

{type:"teach",trg:"el palimpsesto",src:"the palimpsest",pos:"noun",gender:"m",
 note:"Masculine noun. A manuscript rewritten over older text.\nFrom Greek palimpsestos (scraped again).",
 example:"A: Los investigadores descubrieron un palimpsesto medieval.\nB: Bajo el texto visible había un manuscrito del siglo IX.",
 exampleSrc:"A: The researchers discovered a medieval palimpsest.\nB: Under the visible text was a 9th-century manuscript.",
 funFact:"Modern imaging technology can now read the hidden layers of palimpsestos without damaging them."},

{type:"teach",trg:"el papiro",src:"the papyrus",pos:"noun",gender:"m",
 note:"Masculine noun. Ancient writing material from Egypt.\nAlso the plant itself.",
 example:"A: Los egipcios escribían sobre papiro hace miles de años.\nB: Algunos papiros han sobrevivido hasta hoy.",
 exampleSrc:"A: The Egyptians wrote on papyrus thousands of years ago.\nB: Some papyri have survived to this day.",
 funFact:"The English word 'paper' comes from papiro via Latin papyrus and French papier."},

{type:"fb",s:"Los investigadores descubrieron un {1} con textos ocultos del siglo IX.",a:["palimpsesto"],opts:["palimpsesto","papiro","pedernal","patriota"],hint:"An ancient manuscript where the original text was scraped off and written over.",sSrc:"The researchers discovered a {1} with hidden 9th-century texts."},

{type:"teach",trg:"el pedernal",src:"the flint",pos:"noun",gender:"m",
 note:"Masculine noun. A hard stone used for making fire.\nAlso used for Stone Age tools.",
 example:"A: Los primeros humanos usaban pedernal para hacer fuego.\nB: También hacían cosas muy útiles con él.",
 exampleSrc:"A: The first humans used flint to make fire.\nB: They also made very useful things from it.",
 funFact:"Pedernal comes from Latin petra (stone) + ignis (fire). A stone that creates fire."},

{type:"teach",trg:"la cristianización",src:"the Christianization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of converting to Christianity.\nKey concept in Spanish history.",
 example:"A: La cristianización de Hispania fue un proceso gradual.\nB: Comenzó con los romanos y se completó con los visigodos.",
 exampleSrc:"A: The Christianization of Hispania was a gradual process.\nB: It began with the Romans and was completed by the Visigoths.",
 funFact:"The Reconquista (711-1492) is often framed as re-Christianization after the Moorish conquest."},

{type:"teach",trg:"el descendimiento",src:"the descent (from the cross) / lowering",pos:"noun",gender:"m",
 note:"Masculine noun. The act of taking Christ down from the cross.\nA major theme in Spanish art.",
 example:"A: El descendimiento de van der Weyden está en el Museo del Prado.\nB: Es una de las pinturas más famosas del museo.",
 exampleSrc:"A: Van der Weyden's Descent from the Cross is in the Prado Museum.\nB: It is one of the most famous paintings in the museum.",
 funFact:"The Prado's Descendimiento is considered one of the greatest masterpieces of Flemish painting."},

{type:"mc",q:"¿Qué material usaban los primeros humanos para hacer fuego?",opts:["El pedernal","El papiro","El palimpsesto","El bronce"],ans:"El pedernal",hint:"A very hard type of stone that produces sparks when struck."},

{type:"fb",s:"La {1} de la Península Ibérica fue un proceso largo.",a:["cristianización"],opts:["cristianización","edad antigua","edad de piedra","edad contemporánea"],hint:"The historical process of converting a region's population to Christianity.",sSrc:"The {1} of the Iberian Peninsula was a long process."},

{type:"match",pairs:[{trg:"edad de piedra",src:"Stone Age"},{trg:"edad de bronce",src:"Bronze Age"},{trg:"papiro",src:"papyrus"},{trg:"palimpsesto",src:"palimpsest"},{trg:"pedernal",src:"flint"}]},

{type:"fb",s:"Los egipcios escribían sobre {1} hace miles de años.",a:["papiro"],opts:["papiro","pedernal","palimpsesto","pergamino"],hint:"An ancient writing material made from a plant that grew along the Nile River.",sSrc:"The Egyptians wrote on {1} thousands of years ago."}
]};

export default LESSON_8;
