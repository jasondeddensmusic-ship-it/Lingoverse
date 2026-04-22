// B2 Gap Batch B Lesson 05. Law & Social Order
const LESSON_5 = {id:"esv2_b2gB_l5",title:"Ley y orden social",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Ley y orden social",desc:"Learn vocabulary related to law, justice, policing, and social order in Spain.",goals:["Learn 12 words about law and social institutions","Discuss legal processes and social structures","Use formal institutional vocabulary"]},

{type:"teach",trg:"la Guardia Civil",src:"the Civil Guard (Spanish national police force)",pos:"noun",gender:"f",
 note:"Feminine proper compound. Spain's oldest law enforcement body.\nOperates mainly in rural areas.",
 example:"A: La Guardia Civil patrulla las carreteras nacionales.\nB: También protegen las fronteras y las costas.",
 exampleSrc:"A: The Civil Guard patrols the national highways.\nB: They also protect the borders and coasts.",
 funFact:"Founded in 1844, the Guardia Civil is recognizable by their distinctive tricorn hats."},

{type:"teach",trg:"el indicio",src:"the clue / indication / evidence",pos:"noun",gender:"m",
 note:"Masculine noun. A sign that points to something.\nLegal: circumstantial evidence.",
 example:"A: No hay indicios de que el sospechoso estuviera presente.\nB: Entonces habrá que buscar otros testigos.",
 exampleSrc:"A: There is no evidence that the suspect was present.\nB: Then we will have to look for other witnesses.",
 funFact:"In Spanish law, 'indicios' (circumstantial evidence) can be enough to open an investigation."},

{type:"teach",trg:"la imposición",src:"the imposition / enforcement",pos:"noun",gender:"f",
 note:"Feminine noun. The act of imposing something.\nAlso: a bank deposit (financial term).",
 example:"A: La imposición de nuevas tasas generó protestas.\nB: Los ciudadanos no estaban de acuerdo.",
 exampleSrc:"A: The imposition of new fees generated protests.\nB: The citizens did not agree.",
 funFact:"In banking, 'imposición a plazo fijo' is a Spanish term for a fixed-term deposit."},

{type:"teach",trg:"la incursión",src:"the incursion / raid",pos:"noun",gender:"f",
 note:"Feminine noun. An invasion or sudden attack.\nAlso figurative: first attempt at something.",
 example:"A: Las incursiones vikingas llegaron hasta las costas gallegas.\nB: Dejaron una huella en la cultura local.",
 exampleSrc:"A: Viking incursions reached the Galician coasts.\nB: They left a mark on local culture.",
 funFact:"Figuratively, 'su primera incursión en la política' means someone's first venture into politics."},

{type:"mc",q:"¿Qué son los indicios?",
 opts:["Señales que apuntan a la verdad de un hecho","Documentos oficiales del gobierno","Leyes aprobadas por el parlamento","Castigos impuestos por un juez"],
 ans:"Señales que apuntan a la verdad de un hecho",
 hint:"Think about clues or signs that suggest something happened, without being definitive proof."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A group gathered for a shared purpose.\nOften religious, but also secular.",
 example:"A: La congregación se reunió en la plaza del pueblo.\nB: Vinieron más de quinientas personas.",
 exampleSrc:"A: The congregation gathered in the town square.\nB: More than five hundred people came.",
 funFact:"In Catholic Spain, 'congregación' often refers to religious orders or parish communities."},

{type:"teach",trg:"la consideración",src:"the consideration / regard",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought, or respect for others.\nFormal register.",
 example:"A: Debemos tener en consideración todos los factores.\nB: Es una decisión que afecta a muchas personas.",
 exampleSrc:"A: We must take all factors into consideration.\nB: It is a decision that affects many people.",
 funFact:"The phrase 'tener en consideración' is more formal than 'tener en cuenta', but they mean the same."},

{type:"teach",trg:"la nobleza",src:"the nobility / nobleness",pos:"noun",gender:"f",
 note:"Feminine noun. The aristocratic class.\nAlso: the quality of being noble in character.",
 example:"A: La nobleza española perdió muchos privilegios en el siglo XIX.\nB: Pero algunos títulos nobiliarios siguen vigentes.",
 exampleSrc:"A: The Spanish nobility lost many privileges in the 19th century.\nB: But some noble titles are still in effect.",
 funFact:"Spain still has over 2,700 active noble titles, though they carry no legal privileges today."},

{type:"fb",s:"La {1} patrulla las zonas rurales y las carreteras de España.",
 a:["Guardia Civil"],opts:["Guardia Civil","congregación","nobleza","imposición"],
 hint:"Spain's national police force known for their green uniforms and tricorn hats.",
 sSrc:"The {1} patrols the rural areas and highways of Spain."},

{type:"teach",trg:"el causante",src:"the person responsible / cause",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la causante.\nThe person or thing that causes something.\nAlso legal: the deceased in inheritance law.",
 example:"A: La policía busca al causante del accidente.\nB: Al parecer, se saltó un semáforo en rojo.",
 exampleSrc:"A: The police are looking for the person responsible for the accident.\nB: Apparently, he ran a red light.",
 funFact:"In Spanish inheritance law, 'causante' specifically means the deceased person whose estate is distributed."},

{type:"teach",trg:"la ocultación",src:"the concealment / hiding",pos:"noun",gender:"f",
 note:"Feminine noun. The act of hiding something.\nLegal: concealment of evidence or assets.",
 example:"A: La ocultación de pruebas es un delito grave.\nB: Puede conllevar penas de prisión.",
 exampleSrc:"A: The concealment of evidence is a serious crime.\nB: It can carry prison sentences.",
 funFact:"In Spanish tax law, 'ocultación de bienes' (concealment of assets) triggers severe penalties."},

{type:"teach",trg:"la incompetencia",src:"the incompetence",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of ability or fitness.\nAlso legal: lack of jurisdiction.",
 example:"A: Su incompetencia causó graves problemas al equipo.\nB: Deberían haber actuado con más profesionalidad.",
 exampleSrc:"A: His incompetence caused serious problems for the team.\nB: They should have acted more professionally.",
 funFact:"In law, 'incompetencia' can mean a court lacks jurisdiction over a case, not that it is unable."},

{type:"mc",q:"¿Qué significa 'ocultación de pruebas'?",
 opts:["Inventar testigos falsos","Esconder evidencias de un delito","Presentar pruebas falsas","Destruir un documento oficial"],
 ans:"Esconder evidencias de un delito",
 hint:"Think about the verb 'ocultar' (to hide) applied to evidence in a legal case."},

{type:"match",pairs:[
 {trg:"indicio",src:"clue / evidence"},
 {trg:"causante",src:"person responsible"},
 {trg:"ocultación",src:"concealment"},
 {trg:"nobleza",src:"nobility"},
 {trg:"imposición",src:"imposition"}
]},

{type:"fb",s:"No hay ningún {1} de que el acusado participara en el robo.",
 a:["indicio"],opts:["indicio","causante","consideración","congregación"],
 hint:"A piece of circumstantial evidence or a sign pointing toward the truth.",
 sSrc:"There is no {1} that the accused participated in the robbery."},

{type:"fb",s:"La {1} de activos es un delito fiscal en España.",
 a:["ocultación"],opts:["ocultación","imposición","incursión","incompetencia"],
 hint:"The act of deliberately hiding something that should be declared or disclosed.",
 sSrc:"The {1} of assets is a tax crime in Spain."},

]};
export default LESSON_5;
