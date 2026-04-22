// B2 Gap Batch 6 Lesson 13 - History & Heritage
const LESSON_13 = {id:"esv2_b2g6_l13",title:"Historia y patrimonio",icon:"🏰",xp:15,board:true,steps:[
{type:"intro",title:"Historia y patrimonio",desc:"Master vocabulary for discussing historical periods, cultural heritage, and historical processes.",goals:["Learn 15 history and heritage terms","Discuss historical events and periods","Use formal historical vocabulary"]},

{type:"teach",trg:"la edad antigua",src:"the ancient age / antiquity",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The historical period from\nwriting to the fall of Rome.",
 example:"A: La edad antigua abarca desde la invención de la escritura.\nB: Hasta la caída del Imperio Romano en el siglo quinto.",
 exampleSrc:"A: The ancient age spans from the invention of writing.\nB: Until the fall of the Roman Empire in the fifth century.",
 funFact:"Spain's 'edad antigua' includes Phoenician, Greek, Carthaginian, and Roman settlements."},

{type:"teach",trg:"la edad de bronce",src:"the Bronze Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The period when bronze tools\nwere dominant. Bronce = bronze.",
 example:"A: La edad de bronce dejó restos arqueológicos impresionantes.\nB: Especialmente en el sureste de España.",
 exampleSrc:"A: The Bronze Age left impressive archaeological remains.\nB: Especially in southeastern Spain.",
 funFact:"The Bronze Age site of El Argar in Almería is one of Europe's most important early civilizations."},

{type:"teach",trg:"la edad de hierro",src:"the Iron Age",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The period when iron tools\nreplaced bronze. Hierro = iron.",
 example:"A: Durante la edad de hierro se desarrollaron los pueblos celtas.\nB: Sus castros todavía se conservan en Galicia.",
 exampleSrc:"A: During the Iron Age the Celtic peoples developed.\nB: Their hill forts are still preserved in Galicia.",
 funFact:"'Castro' (hill fort) from the Iron Age gives its name to many Spanish places: Castro Urdiales, Castrojeriz."},

{type:"teach",trg:"la cristianización",src:"Christianization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of converting to Christianity.\nCristiano + -ización.",
 example:"A: La cristianización de la península fue un proceso largo.\nB: Duró varios siglos después de los romanos.",
 exampleSrc:"A: The Christianization of the peninsula was a long process.\nB: It lasted several centuries after the Romans.",
 funFact:"Spain's Reconquista (711-1492) was partly driven by the goal of re-Christianizing the peninsula."},

{type:"mc",q:"¿Qué período histórico es la edad de bronce?",opts:["Cuando se usaban herramientas de bronce","Cuando se inventó la escritura","Cuando cayó el Imperio Romano","Cuando llegaron los árabes a España"],ans:"Cuando se usaban herramientas de bronce",hint:"A period named after the metal used for tools and weapons."},

{type:"teach",trg:"el hacendado",src:"the landowner / rancher",pos:"noun",gender:"m",
 note:"Masculine noun. Owner of a large estate.\nFrom hacienda (estate). Fem: la hacendada.",
 example:"A: Los hacendados controlaban grandes extensiones de tierra.\nB: Tenían mucho poder político en la época colonial.",
 exampleSrc:"A: The landowners controlled large extensions of land.\nB: They had a lot of political power in the colonial era.",
 funFact:"'Hacienda' comes from Latin facienda (things to be done). A hacendado managed the 'things to be done'."},

{type:"teach",trg:"el heroísmo",src:"heroism",pos:"noun",gender:"m",
 note:"Masculine noun. Great bravery or courage.\nFrom héroe (hero) + -ismo.",
 example:"A: El heroísmo de los bomberos salvó muchas vidas.\nB: Arriesgaron su propia seguridad por los demás.",
 exampleSrc:"A: The firefighters' heroism saved many lives.\nB: They risked their own safety for others.",
 funFact:"'Heroísmo' and 'heroicidad' are near-synonyms. 'Heroísmo' is more about the quality, 'heroicidad' about the act."},

{type:"teach",trg:"la heroicidad",src:"the heroic deed / heroic quality",pos:"noun",gender:"f",
 note:"Feminine noun. An act of heroism or the quality\nof being heroic. From heroico + -idad.",
 example:"A: Su heroicidad durante la emergencia fue reconocida.\nB: Le dieron una medalla al valor.",
 exampleSrc:"A: Her heroic deed during the emergency was recognized.\nB: She was given a medal for valor.",
 funFact:"The suffix -idad turns adjectives into abstract nouns: heroico > heroicidad, like English -ity."},

{type:"fb",s:"El {1} de los bomberos salvó a toda la familia.",a:["heroísmo"],opts:["heroísmo","hacendado","cristianización","heroicidad"],hint:"The quality of being brave and courageous.",sSrc:"The {1} of the firefighters saved the whole family."},

{type:"teach",trg:"el arcabuz",src:"the arquebus / musket",pos:"noun",gender:"m",
 note:"Masculine noun. An early firearm from the 15th-16th\ncentury. From German Hakenbüchse.",
 example:"A: Los conquistadores llevaban arcabuces.\nB: Eran armas muy superiores a las flechas.",
 exampleSrc:"A: The conquistadors carried arquebuses.\nB: They were weapons far superior to arrows.",
 funFact:"From German Hakenbüchse (hook gun). The arquebus changed warfare in the Spanish empire."},

{type:"teach",trg:"el garrote",src:"the garrote / club",pos:"noun",gender:"m",
 note:"Masculine noun. A thick stick used as a weapon,\nor a method of execution.",
 example:"A: El garrote vil fue un método de ejecución en España.\nB: Fue abolido con la constitución de 1978.",
 exampleSrc:"A: The garrote was a method of execution in Spain.\nB: It was abolished with the 1978 constitution.",
 funFact:"'Garrote vil' was Spain's official method of execution until the abolition of the death penalty in 1978."},

{type:"teach",trg:"el descendimiento",src:"the descent / the Deposition",pos:"noun",gender:"m",
 note:"Masculine noun. The act of descending, or in art,\nChrist being taken down from the cross.",
 example:"A: El Descendimiento de Van der Weyden está en el Prado.\nB: Es una de las obras más impresionantes del museo.",
 exampleSrc:"A: Van der Weyden's Descent from the Cross is in the Prado.\nB: It is one of the most impressive works in the museum.",
 funFact:"The Prado Museum's Descendimiento (1435) is considered one of the masterpieces of Flemish painting."},

{type:"mc",q:"¿Qué es un arcabuz?",opts:["Un instrumento musical","Un arma de fuego antigua","Un tipo de barco","Una herramienta agrícola"],ans:"Un arma de fuego antigua",hint:"An early firearm used by the Spanish conquistadors."},

{type:"match",pairs:[
  {trg:"edad antigua",src:"ancient age"},
  {trg:"edad de bronce",src:"Bronze Age"},
  {trg:"heroísmo",src:"heroism"},
  {trg:"hacendado",src:"landowner"},
  {trg:"garrote",src:"garrote / club"}
]},

{type:"fb",s:"La {1} de los pueblos germánicos fue un proceso lento.",a:["cristianización"],opts:["cristianización","heroicidad","edad de hierro","edad de bronce"],hint:"The process of converting people to Christianity.",sSrc:"The {1} of the Germanic peoples was a slow process."}
]};
export default LESSON_13;
