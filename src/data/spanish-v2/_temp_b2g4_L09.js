// B2 Gap Batch 4 Lesson 09 - Politics & Society
const LESSON_9 = {id:"esv2_b2g4_l9",title:"Política y sociedad",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y sociedad",desc:"Develop vocabulary for discussing political processes, social movements, and civic engagement.",goals:["Learn 15 politics and society words","Discuss social movements","Analyze political situations"]},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of disorder or bewilderment.\nVerb: confundir.",
 example:"A: Hay mucha confusión sobre las nuevas normas.\nB: Deberían explicarlas mejor a los ciudadanos.",
 exampleSrc:"A: There is a lot of confusion about the new regulations.\nB: They should explain them better to citizens.",
 funFact:"From Latin confusionem (mingling together). 'Crear confusión' is a common political tactic."},

{type:"teach",trg:"la dependencia",src:"the dependency / department",pos:"noun",gender:"f",
 note:"Feminine noun. Reliance on something, or an office/room.\nAlso: dependencia energética.",
 example:"A: España quiere reducir su dependencia del petróleo.\nB: Las energías renovables son clave.",
 exampleSrc:"A: Spain wants to reduce its dependence on oil.\nB: Renewable energies are key.",
 funFact:"'Ley de Dependencia' (2006) was a landmark Spanish law providing care for dependent persons."},

{type:"teach",trg:"el desinterés",src:"the disinterest / lack of interest",pos:"noun",gender:"m",
 note:"Masculine noun. Lack of interest or selflessness.\nAdjective: desinteresado.",
 example:"A: El desinterés de los jóvenes por la política es preocupante.\nB: Hay que buscar nuevas formas de participación.",
 exampleSrc:"A: Young people's lack of interest in politics is worrying.\nB: We need to find new forms of participation.",
 funFact:"Can mean both 'lack of interest' and 'selflessness', depending on context. A useful ambiguity."},

{type:"teach",trg:"la descentralización",src:"the decentralization",pos:"noun",gender:"f",
 note:"Feminine noun. Transferring power from central to local government.\nVerb: descentralizar.",
 example:"A: La descentralización dio más poder a las comunidades autónomas.\nB: Cada región gestiona su propia educación.",
 exampleSrc:"A: Decentralization gave more power to the autonomous communities.\nB: Each region manages its own education.",
 funFact:"Spain is one of the most decentralized countries in Europe, with 17 autonomous communities."},

{type:"teach",trg:"la desviación",src:"the deviation / detour",pos:"noun",gender:"f",
 note:"Feminine noun. Turning away from the normal course.\nVerb: desviar. Also: desviación estándar.",
 example:"A: Hay una desviación en la carretera por obras.\nB: Tendremos que ir por otro camino.",
 exampleSrc:"A: There is a detour on the road due to construction.\nB: We will have to go another way.",
 funFact:"In statistics, 'desviación estándar' (standard deviation) uses the same word."},

{type:"mc",q:"¿Qué es la descentralización?",opts:["Transferir poder a gobiernos locales","Concentrar todo el poder en la capital","Un tipo de elección","Una reforma educativa"],ans:"Transferir poder a gobiernos locales",hint:"Think about the opposite of centralization, giving authority to regions."},

{type:"teach",trg:"la conveniencia",src:"the convenience / suitability",pos:"noun",gender:"f",
 note:"Feminine noun. What is appropriate or useful.\nAdjective: conveniente.",
 example:"A: Debatieron la conveniencia de adelantar las elecciones.\nB: No todos estaban de acuerdo.",
 exampleSrc:"A: They debated the suitability of bringing forward the elections.\nB: Not everyone agreed.",
 funFact:"'Matrimonio de conveniencia' is the Spanish term for a marriage of convenience."},

{type:"teach",trg:"el empate",src:"the draw / tie",pos:"noun",gender:"m",
 note:"Masculine noun. An equal score in a contest.\nVerb: empatar.",
 example:"A: El partido terminó en empate a dos goles.\nB: Tendrán que jugar la prórroga.",
 exampleSrc:"A: The match ended in a two-goal draw.\nB: They will have to play extra time.",
 funFact:"In elections, an 'empate técnico' means the candidates are so close it is effectively a tie."},

{type:"teach",trg:"la asignación",src:"the allocation / assignment",pos:"noun",gender:"f",
 note:"Feminine noun. The distribution of resources or tasks.\nVerb: asignar.",
 example:"A: La asignación de presupuesto fue muy desigual.\nB: Algunas regiones recibieron mucho más que otras.",
 exampleSrc:"A: The budget allocation was very unequal.\nB: Some regions received much more than others.",
 funFact:"'Asignación mensual' can also mean a monthly allowance, especially for children."},

{type:"teach",trg:"extraviar",src:"to lose / to mislay",pos:"verb",gender:null,
 note:"Regular -ar verb. To misplace something.\nReflexive: extraviarse (to get lost).",
 example:"A: Se me ha extraviado el pasaporte.\nB: Tienes que denunciarlo en comisaría.",
 exampleSrc:"A: I have mislaid my passport.\nB: You have to report it at the police station.",
 funFact:"'Extraviarse' is more formal than 'perderse'. Used in official contexts for lost documents."},

{type:"fb",s:"La {1} entre los ciudadanos es total por las nuevas leyes.",a:["confusión"],opts:["confusión","conveniencia","descentralización","asignación"],hint:"A state of disorder where people do not understand what is happening.",sSrc:"The {1} among citizens is total due to the new laws."},

{type:"teach",trg:"la detonación",src:"the detonation",pos:"noun",gender:"f",
 note:"Feminine noun. An explosion or the triggering of an explosive.\nVerb: detonar.",
 example:"A: La detonación se escuchó en toda la ciudad.\nB: Fue una demolición controlada del edificio.",
 exampleSrc:"A: The detonation was heard across the entire city.\nB: It was a controlled demolition of the building.",
 funFact:"'Detonar' can be figurative: 'La crisis detonó las protestas' means the crisis triggered protests."},

{type:"teach",trg:"la contemplación",src:"the contemplation",pos:"noun",gender:"f",
 note:"Feminine noun. Deep thought or consideration.\nCommon: sin contemplaciones (without mercy).",
 example:"A: Actuaron sin contemplaciones contra los corruptos.\nB: Era hora de poner orden.",
 exampleSrc:"A: They acted without mercy against the corrupt officials.\nB: It was time to restore order.",
 funFact:"'Sin contemplaciones' is a strong expression meaning ruthlessly or without holding back."},

{type:"mc",q:"Si un partido termina en 'empate', significa que:",opts:["Los dos equipos tienen la misma puntuación","Un equipo ganó claramente","Se canceló el partido","Los jugadores se pelearon"],ans:"Los dos equipos tienen la misma puntuación",hint:"Think about what happens when neither side wins because the score is equal."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of disorder or bewilderment.\nVerb: confundir.",
 example:"A: La confusión reinaba en la sala.\nB: Nadie sabía qué decisión tomar.",
 exampleSrc:"A: Confusion reigned in the room.\nB: Nobody knew what decision to make.",
 funFact:"From Latin confusionem. 'Sembrar confusión' means to deliberately cause chaos."},

{type:"fb",s:"Se me ha {1} la cartera en el metro.",a:["extraviado"],opts:["extraviado","empate","asignado","detonado"],hint:"To have lost or mislaid something, a formal way to say you cannot find it.",sSrc:"I have {1} my wallet on the metro."},

{type:"match",pairs:[{trg:"confusión",src:"confusion"},{trg:"empate",src:"draw / tie"},{trg:"dependencia",src:"dependency"},{trg:"desinterés",src:"disinterest"},{trg:"asignación",src:"allocation"}]},

{type:"mc",q:"'Sin contemplaciones' significa:",opts:["Sin piedad ni miramientos","Con mucha calma","De forma espiritual","Con gran alegría"],ans:"Sin piedad ni miramientos",hint:"Think about acting ruthlessly, without holding back or showing mercy."},

{type:"fb",s:"La {1} de recursos debe ser justa para todas las regiones.",a:["asignación"],opts:["asignación","confusión","detonación","desviación"],hint:"The distribution or allocation of something among different groups.",sSrc:"The {1} of resources must be fair for all regions."}
]};

export default LESSON_9;
