// B2 Gap Batch B Lesson 16. Agriculture & Rural Life
const LESSON_16 = {id:"esv2_b2gB_l16",title:"Agricultura y vida rural",icon:"🌾",xp:15,board:true,steps:[
{type:"intro",title:"Agricultura y vida rural",desc:"Learn vocabulary about farming, rural traditions, and agricultural life in Spain.",goals:["Learn 12 words about agriculture and rural life","Discuss farming practices and rural culture","Use agricultural and nature vocabulary"]},

{type:"teach",trg:"ordeñar",src:"to milk (an animal)",pos:"verb",gender:null,
 note:"Regular -ar verb. To extract milk from a cow, goat, etc.\nAlso figurative: to exploit.",
 example:"A: Mi abuelo ordeñaba las vacas al amanecer.\nB: Es una tradición que casi ha desaparecido.",
 exampleSrc:"A: My grandfather milked the cows at dawn.\nB: It is a tradition that has almost disappeared.",
 funFact:"Spain's dairy industry has shifted from manual ordeño to fully automated milking parlors."},

{type:"teach",trg:"el leñador",src:"the woodcutter / lumberjack",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la leñadora.\nFrom leña (firewood).",
 example:"A: El leñador cortaba troncos en el bosque.\nB: Es un oficio cada vez menos común.",
 exampleSrc:"A: The woodcutter was cutting logs in the forest.\nB: It is an increasingly uncommon trade.",
 funFact:"The leñador appears in countless Spanish fairy tales, from 'Caperucita Roja' to regional folklore."},

{type:"teach",trg:"el leño",src:"the log / piece of firewood",pos:"noun",gender:"m",
 note:"Masculine noun. A thick piece of cut wood.\nAlso colloquial: a clumsy or stupid person.",
 example:"A: Pon otro leño en la chimenea, que hace frío.\nB: Este es el último, habrá que ir a buscar más.",
 exampleSrc:"A: Put another log on the fire, it's cold.\nB: This is the last one, we'll have to go get more.",
 funFact:"Calling someone 'un leño' means they are stiff, dull, or clumsy, like a piece of dead wood."},

{type:"teach",trg:"el lagar",src:"the wine press / pressing house",pos:"noun",gender:"m",
 note:"Masculine noun. The place or device where grapes are pressed.\nFrom Latin lacus (vat).",
 example:"A: Visitamos un lagar tradicional en La Rioja.\nB: Todavía hacen vino con métodos artesanales.",
 exampleSrc:"A: We visited a traditional wine press in La Rioja.\nB: They still make wine with artisanal methods.",
 funFact:"In Asturias, 'lagar' specifically refers to a cider press, reflecting the region's cider tradition."},

{type:"mc",q:"¿Qué hace un leñador?",
 opts:["Corta árboles y prepara leña","Cuida de los animales","Cultiva verduras","Pesca en el río"],
 ans:"Corta árboles y prepara leña",
 hint:"Think about someone who works in the forest with an axe, cutting wood."},

{type:"teach",trg:"el bolillo",src:"the bobbin (for lace-making) / bread roll (Mexico)",pos:"noun",gender:"m",
 note:"Masculine noun. A small stick used in bobbin lace.\nIn Mexico: a white bread roll.",
 example:"A: Mi abuela hacía encaje de bolillos con mucha paciencia.\nB: Es un arte que requiere años de práctica.",
 exampleSrc:"A: My grandmother made bobbin lace with great patience.\nB: It is an art that requires years of practice.",
 funFact:"'Encaje de bolillos' is a traditional Spanish craft. The phrase also means something extremely difficult."},

{type:"teach",trg:"la calza",src:"the stocking / hose / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. A historical leg garment.\nAlso: a wedge placed under something to level it.",
 example:"A: En el siglo XVI, los nobles llevaban calzas de seda.\nB: Eran un símbolo de estatus social.",
 exampleSrc:"A: In the 16th century, nobles wore silk stockings.\nB: They were a symbol of social status.",
 funFact:"From Latin calceus (shoe). The verb 'calzar' (to put on shoes) comes from the same root."},

{type:"teach",trg:"ocasionar",src:"to cause / to bring about",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause something, usually negative.\nMore formal than 'causar'.",
 example:"A: La tormenta ocasionó graves daños en los cultivos.\nB: Los agricultores piden ayudas al gobierno.",
 exampleSrc:"A: The storm caused serious damage to the crops.\nB: The farmers are asking the government for aid.",
 funFact:"'Ocasionar' almost always implies negative consequences, unlike the more neutral 'causar'."},

{type:"fb",s:"La tormenta {1} daños en los campos de trigo.",
 a:["ocasionó"],opts:["ocasionó","ordeñó","orilló","optimizó"],
 hint:"A formal verb meaning to cause or bring about, usually something negative.",
 sSrc:"The storm {1} damage to the wheat fields."},

{type:"teach",trg:"orillar",src:"to edge / to skirt / to push aside",pos:"verb",gender:null,
 note:"Regular -ar verb. To move to the edge.\nAlso: to avoid a topic or push someone aside.",
 example:"A: El conductor orilló el coche para dejar pasar a la ambulancia.\nB: Reaccionó muy rápido.",
 exampleSrc:"A: The driver pulled the car to the side to let the ambulance pass.\nB: He reacted very quickly.",
 funFact:"Figuratively, 'orillar un problema' means to avoid dealing with an issue, pushing it to the side."},

{type:"teach",trg:"el fierro",src:"the iron / branding iron",pos:"noun",gender:"m",
 note:"Masculine noun. Regional and Latin American for hierro (iron).\nAlso: a branding iron for cattle.",
 example:"A: Los ganaderos marcaban el ganado con un fierro al rojo.\nB: Cada rancho tenía su marca propia.",
 exampleSrc:"A: Ranchers branded cattle with a red-hot iron.\nB: Each ranch had its own brand.",
 funFact:"'Fierro' preserves an older Spanish pronunciation. In standard Peninsular Spanish, 'hierro' is used."},

{type:"teach",trg:"la cola de caballo",src:"the ponytail / horsetail plant",pos:"noun",gender:"f",
 note:"Feminine compound. Literally 'horse's tail'.\nThe hairstyle and also an herbal plant.",
 example:"A: El té de cola de caballo es bueno para los riñones.\nB: En herboristerías lo venden mucho.",
 exampleSrc:"A: Horsetail tea is good for the kidneys.\nB: They sell it a lot in herbal shops.",
 funFact:"The horsetail plant (Equisetum) has been used in Spanish folk medicine for centuries as a diuretic."},

{type:"mc",q:"¿Qué es un lagar?",
 opts:["Una granja de animales","Un lugar donde se prensan uvas para hacer vino","Un tipo de herramienta agrícola","Un campo de trigo"],
 ans:"Un lugar donde se prensan uvas para hacer vino",
 hint:"Think about the winemaking process, specifically the step where grapes are crushed."},

{type:"match",pairs:[
 {trg:"ordeñar",src:"to milk"},
 {trg:"leñador",src:"woodcutter"},
 {trg:"lagar",src:"wine press"},
 {trg:"ocasionar",src:"to cause (negative)"},
 {trg:"cola de caballo",src:"horsetail / ponytail"}
]},

{type:"fb",s:"El {1} salió al bosque con su hacha al amanecer.",
 a:["leñador"],opts:["leñador","leño","fierro","bolillo"],
 hint:"A person whose job is to cut down trees and prepare firewood.",
 sSrc:"The {1} went out to the forest with his axe at dawn."},

{type:"fb",s:"Pon otro {1} en la chimenea para avivar el fuego.",
 a:["leño"],opts:["leño","lagar","fierro","bolillo"],
 hint:"A thick piece of cut wood that burns in a fireplace.",
 sSrc:"Put another {1} on the fire to stoke the flames."},

]};
export default LESSON_16;
