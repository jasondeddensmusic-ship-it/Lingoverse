// B2 Gap Batch 5 Lesson 06 - History & Archaeology
const LESSON_6 = {id:"esv2_b2g5_l6",title:"Historia y arqueología",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Historia y arqueología",desc:"Explore vocabulary about historical periods, archaeological discoveries, and the study of the past.",goals:["Learn 15 words about history and archaeology","Discuss historical eras and civilizations","Use formal academic vocabulary"]},

{type:"teach",trg:"la Edad de Piedra",src:"the Stone Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The earliest known period of human history.\nAlso: Paleolítico, Neolítico.",
 example:"A: En la Edad de Piedra se usaban herramientas de sílex.\nB: El ser humano ya era muy ingenioso.",
 exampleSrc:"A: In the Stone Age, flint tools were used.\nB: Humans were already very ingenious.",
 funFact:"The caves of Altamira in Cantabria contain Stone Age paintings over 36,000 years old."},

{type:"teach",trg:"la Edad de Bronce",src:"the Bronze Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The period when bronze tools and weapons appeared.",
 example:"A: La Edad de Bronce comenzó hacia el 3000 a.C.\nB: Fue un gran avance tecnológico.",
 exampleSrc:"A: The Bronze Age began around 3000 BC.\nB: It was a great technological advance.",
 funFact:"The Argar culture in southeastern Spain was one of Europe's most advanced Bronze Age civilizations."},

{type:"teach",trg:"la Edad de Hierro",src:"the Iron Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The period when iron replaced bronze for tools and weapons.",
 example:"A: La Edad de Hierro trajo grandes cambios en la agricultura.\nB: Las herramientas de hierro eran mucho más resistentes.",
 exampleSrc:"A: The Iron Age brought great changes in agriculture.\nB: Iron tools were much more resistant.",
 funFact:"The Celts and Iberians are the main Iron Age cultures studied in Spanish archaeology."},

{type:"teach",trg:"la Edad Antigua",src:"the Ancient Age / Antiquity",pos:"noun",gender:"f",
 note:"Feminine noun phrase. From the first civilizations to the fall of Rome (476 AD).",
 example:"A: La Edad Antigua incluye las civilizaciones griega y romana.\nB: También los fenicios en la península.",
 exampleSrc:"A: The Ancient Age includes Greek and Roman civilizations.\nB: Also the Phoenicians on the peninsula.",
 funFact:"Spain's name comes from the Phoenician 'I-shpan-ya', possibly meaning 'land of rabbits'."},

{type:"teach",trg:"la Edad Contemporánea",src:"the Contemporary Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. From the French Revolution (1789) to the present.",
 example:"A: La Edad Contemporánea comienza con la Revolución Francesa.\nB: Es la época de los grandes cambios sociales.",
 exampleSrc:"A: The Contemporary Age begins with the French Revolution.\nB: It is the era of great social changes.",
 funFact:"In Spain, the Contemporary Age saw three civil wars, a dictatorship, and the transition to democracy."},

{type:"mc",q:"¿En qué época se usaban herramientas de sílex?",opts:["La Edad de Piedra","La Edad de Bronce","La Edad de Hierro","La Edad Contemporánea"],ans:"La Edad de Piedra",hint:"The earliest period, before metals were discovered for making tools."},

{type:"teach",trg:"el hallazgo",src:"the finding / discovery",pos:"noun",gender:"m",
 note:"Masculine noun. Something important that is found.\nFrom hallar (to find).",
 example:"A: El hallazgo de esas ruinas romanas fue increíble.\nB: Estaban bajo un aparcamiento del centro.",
 exampleSrc:"A: The discovery of those Roman ruins was incredible.\nB: They were under a parking lot downtown.",
 funFact:"One of Spain's biggest hallazgos was the Dama de Elche, an Iberian bust found by a farmer in 1897."},

{type:"teach",trg:"el fósil",src:"the fossil",pos:"noun",gender:"m",
 note:"Masculine noun. Preserved remains of ancient organisms.\nAlso adjective: combustible fósil.",
 example:"A: Encontraron un fósil de dinosaurio en Teruel.\nB: Tiene más de sesenta millones de años.",
 exampleSrc:"A: They found a dinosaur fossil in Teruel.\nB: It is more than sixty million years old.",
 funFact:"Teruel province has some of Europe's richest dinosaur fossil sites, including 'Dinópolis' museum."},

{type:"teach",trg:"el homínido",src:"the hominid",pos:"noun",gender:"m",
 note:"Masculine noun. An early human ancestor.\nPlural: homínidos.",
 example:"A: En Atapuerca se han encontrado restos de homínidos.\nB: Tienen más de un millón de años.",
 exampleSrc:"A: In Atapuerca, hominid remains have been found.\nB: They are more than a million years old.",
 funFact:"The Atapuerca site near Burgos is a UNESCO World Heritage Site with Europe's oldest human fossils."},

{type:"teach",trg:"el cimiento",src:"the foundation / basis",pos:"noun",gender:"m",
 note:"Masculine noun. The base of a building.\nFigurative: the basis of something. Often plural.",
 example:"A: Los cimientos de este castillo son del siglo XII.\nB: Han sobrevivido terremotos y guerras.",
 exampleSrc:"A: The foundations of this castle are from the 12th century.\nB: They have survived earthquakes and wars.",
 funFact:"Figuratively, 'sentar los cimientos' (to lay the foundations) means to establish the basics of something."},

{type:"fb",s:"El {1} de la moneda romana causó gran emoción entre los arqueólogos.",a:["hallazgo"],opts:["hallazgo","fósil","cimiento","homínido"],hint:"A word meaning an important discovery or finding.",sSrc:"The {1} of the Roman coin caused great excitement among the archaeologists."},

{type:"teach",trg:"el estamento",src:"the estate / social class",pos:"noun",gender:"m",
 note:"Masculine noun. A social class in feudal society.\nThe three estates: nobleza, clero, pueblo.",
 example:"A: En la Edad Media había tres estamentos sociales.\nB: La nobleza, el clero y el pueblo llano.",
 exampleSrc:"A: In the Middle Ages there were three social estates.\nB: The nobility, the clergy, and the common people.",
 funFact:"Spain's Cortes were among Europe's first parliaments, with representatives from all three estamentos."},

{type:"teach",trg:"feudal",src:"feudal",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Relating to the feudal system.\nNoun: el feudalismo.",
 example:"A: El sistema feudal dominó Europa durante siglos.\nB: Los campesinos trabajaban las tierras del señor.",
 exampleSrc:"A: The feudal system dominated Europe for centuries.\nB: Peasants worked the lord's lands.",
 funFact:"Spain's feudal system was complicated by the Reconquista, where frontier lands had different rules."},

{type:"teach",trg:"la gesta",src:"the epic deed / heroic tale",pos:"noun",gender:"f",
 note:"Feminine noun. A heroic deed or the poem that narrates it.\n'Cantar de gesta' = epic poem.",
 example:"A: El Cantar de Mio Cid es la gesta más famosa de España.\nB: Narra las aventuras de Rodrigo Díaz de Vivar.",
 exampleSrc:"A: The Song of the Cid is Spain's most famous epic.\nB: It narrates the adventures of Rodrigo Díaz de Vivar.",
 funFact:"The Cantar de Mio Cid (circa 1200) is the oldest preserved Spanish epic poem."},

{type:"teach",trg:"grecorromano",src:"Greco-Roman",pos:"adj",gender:null,
 note:"Adjective. Relating to both Greek and Roman civilizations.\nFeminine: grecorromana.",
 example:"A: La cultura grecorromana influyó profundamente en España.\nB: Las ruinas de Mérida son prueba de ello.",
 exampleSrc:"A: Greco-Roman culture deeply influenced Spain.\nB: The ruins of Mérida are proof of this.",
 funFact:"Mérida (ancient Emerita Augusta) has Spain's best-preserved Roman theater, still used for performances."},

{type:"teach",trg:"el escribano",src:"the scribe / notary",pos:"noun",gender:"m",
 note:"Masculine noun. A person who copied documents by hand.\nHistorical: also a public notary.",
 example:"A: El escribano escribía todos los documentos oficiales.\nB: Era un oficio muy respetado.",
 exampleSrc:"A: The scribe wrote all the official documents.\nB: It was a very respected profession.",
 funFact:"In colonial Spanish America, the escribano was essential for all legal transactions and land grants."},

{type:"mc",q:"¿Qué es un homínido?",opts:["Un estamento social","Un antepasado del ser humano","Un tipo de fósil vegetal","Una herramienta de piedra"],ans:"Un antepasado del ser humano",hint:"Think about early human ancestors that walked upright millions of years ago."},

{type:"fb",s:"El sistema {1} dividía la sociedad en señores y siervos.",a:["feudal"],opts:["feudal","grecorromano","contemporáneo","fósil"],hint:"A word describing the medieval system of lords and serfs.",sSrc:"The {1} system divided society into lords and serfs."},

{type:"match",pairs:[{trg:"hallazgo",src:"discovery"},{trg:"fósil",src:"fossil"},{trg:"cimiento",src:"foundation"},{trg:"gesta",src:"epic deed"},{trg:"escribano",src:"scribe"}]},

{type:"fb",s:"La cultura {1} dejó una huella profunda en la península ibérica.",a:["grecorromana"],opts:["grecorromana","feudal","contemporánea","paleolítica"],hint:"An adjective combining two ancient Mediterranean civilizations.",sSrc:"The {1} culture left a deep mark on the Iberian Peninsula."},

{type:"mc",q:"¿Qué es un 'cantar de gesta'?",opts:["Un documento oficial","Un hallazgo arqueológico","Un poema épico medieval","Una canción de fiesta"],ans:"Un poema épico medieval",hint:"A literary form that narrates the heroic deeds of warriors and knights."}
]};

export default LESSON_6;
