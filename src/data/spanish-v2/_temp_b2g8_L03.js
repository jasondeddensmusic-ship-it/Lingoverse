// B2 Gap Batch 8 Lesson 03 - Law & Legislation
const LESSON_3 = {id:"esv2_b2g8_l3",title:"Leyes y legislación",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Leyes y legislación",desc:"Build vocabulary for discussing laws, legal processes, and the justice system in Spain.",goals:["Learn 14 legal and legislative terms","Discuss laws and regulations confidently","Understand formal legal register"]},

{type:"teach",trg:"la legislación",src:"the legislation",pos:"noun",gender:"f",
 note:"Feminine noun. The body of laws governing a country or area.\nFrom Latin legislatio.",
 example:"A: ¿Conoces la legislación sobre protección de datos?\nB: Sí, en España es muy estricta desde 2018.",
 exampleSrc:"A: Do you know the legislation on data protection?\nB: Yes, in Spain it has been very strict since 2018.",
 funFact:"Spain's data protection law (LOPD) was among the strictest in Europe even before GDPR."},

{type:"teach",trg:"la legitimidad",src:"the legitimacy",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being lawful or justified.\nAdjective: legítimo/a.",
 example:"A: La legitimidad del gobierno depende del apoyo popular.\nB: Por eso son tan importantes las elecciones.",
 exampleSrc:"A: The legitimacy of the government depends on popular support.\nB: That is why elections are so important.",
 funFact:"After Franco's dictatorship, Spain's transition to democracy restored democratic legitimacy through the 1978 Constitution."},

{type:"teach",trg:"legitimar",src:"to legitimize",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something lawful or acceptable.\nNoun: legitimación.",
 example:"A: ¿Qué puede legitimar una intervención militar?\nB: Solo una resolución del Consejo de Seguridad.",
 exampleSrc:"A: What can legitimize a military intervention?\nB: Only a resolution from the Security Council.",
 funFact:"From Latin legitimare. In philosophy, 'legitimar' often appears in discussions about power and authority."},

{type:"teach",trg:"el causante",src:"the person responsible / cause",pos:"noun",gender:"m",
 note:"Masculine noun. The person or thing that causes something.\nFrom causar (to cause).",
 example:"A: ¿Quién fue el causante del accidente?\nB: Un conductor que no respetó el semáforo.",
 exampleSrc:"A: Who was the person responsible for the accident?\nB: A driver who did not respect the traffic light.",
 funFact:"In legal Spanish, 'causante' also means the deceased person whose estate is being inherited."},

{type:"mc",q:"¿Qué significa 'legislación'?",
 opts:["El conjunto de leyes de un país","Un tipo de documento notarial","El proceso de votar","Una sentencia judicial"],
 ans:"El conjunto de leyes de un país",
 hint:"Think about the body of rules that govern society. Related to 'ley' (law)."},

{type:"teach",trg:"la imposición",src:"the imposition / tax levy",pos:"noun",gender:"f",
 note:"Feminine noun. The act of imposing something, or a tax.\nFrom imponer (to impose).",
 example:"A: La imposición de nuevos impuestos generó protestas.\nB: La gente no acepta más subidas sin mejoras.",
 exampleSrc:"A: The imposition of new taxes generated protests.\nB: People do not accept more increases without improvements.",
 funFact:"In banking, 'imposición' also means a deposit. 'Imposición a plazo fijo' = fixed-term deposit."},

{type:"teach",trg:"el indicio",src:"the clue / indication",pos:"noun",gender:"m",
 note:"Masculine noun. A sign or piece of evidence suggesting something.\nPlural: indicios.",
 example:"A: ¿Hay indicios de fraude en las cuentas?\nB: Sí, varios movimientos parecen sospechosos.",
 exampleSrc:"A: Are there indications of fraud in the accounts?\nB: Yes, several transactions look suspicious.",
 funFact:"In Spanish law, 'indicios' are preliminary evidence, weaker than 'pruebas' (proof)."},

{type:"teach",trg:"la incursión",src:"the incursion / foray",pos:"noun",gender:"f",
 note:"Feminine noun. An invasion or raid, also a first attempt at something new.\nFrom Latin incursio.",
 example:"A: Su primera incursión en la política fue en 2015.\nB: Desde entonces no ha parado de crecer.",
 exampleSrc:"A: His first foray into politics was in 2015.\nB: Since then he has not stopped growing.",
 funFact:"Originally military, 'incursión' is now commonly used figuratively for entering new fields."},

{type:"fb",s:"Los investigadores encontraron {1} de que alguien había manipulado los documentos.",
 a:["indicios"],opts:["indicios","legislación","imposiciones","legitimidad"],
 hint:"Preliminary signs or clues that suggest something has happened.",
 sSrc:"The investigators found {1} that someone had tampered with the documents."},

{type:"teach",trg:"la congregación",src:"the congregation / assembly",pos:"noun",gender:"f",
 note:"Feminine noun. A group gathered together, often religious.\nFrom Latin congregatio.",
 example:"A: La congregación se reunió para discutir el nuevo proyecto.\nB: Asistieron más de trescientas personas.",
 exampleSrc:"A: The congregation gathered to discuss the new project.\nB: More than three hundred people attended.",
 funFact:"In Spain, some powerful religious congregations have influenced legislation for centuries."},

{type:"teach",trg:"la invalidez",src:"the disability / invalidity",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being disabled or legally invalid.\nPensión de invalidez = disability pension.",
 example:"A: ¿Cuáles son los requisitos para la pensión de invalidez?\nB: Es un proceso muy largo y muy difícil.",
 exampleSrc:"A: What are the requirements for the disability pension?\nB: It is a very long and very difficult process.",
 funFact:"Spain distinguishes between 'invalidez permanente parcial' (partial) and 'total' (total) disability."},

{type:"teach",trg:"el mandato",src:"the mandate / term of office",pos:"noun",gender:"m",
 note:"Masculine noun. An official order, or a period of authority.\nFrom Latin mandatum.",
 example:"A: El mandato del presidente dura cuatro años.\nB: Sí, y puede ser reelegido una vez.",
 exampleSrc:"A: The president's term of office lasts four years.\nB: Yes, and he can be re-elected once.",
 funFact:"In Spain, there is no constitutional limit on how many terms a prime minister can serve."},

{type:"mc",q:"Si alguien entra por primera vez en el mundo de los negocios, eso es una...",
 opts:["invalidez","incursión","imposición","legislación"],
 ans:"incursión",
 hint:"A first attempt at something new, like entering an unfamiliar territory."},

{type:"teach",trg:"el mandatario",src:"the leader / head of state",pos:"noun",gender:"m",
 note:"Masculine noun. A person in a position of authority, especially political.\nFeminine: la mandataria.",
 example:"A: Los mandatarios europeos se reunieron en Bruselas.\nB: Discutieron la crisis energética durante dos días.",
 exampleSrc:"A: The European leaders met in Brussels.\nB: They discussed the energy crisis for two days.",
 funFact:"'Primer mandatario' is a common synonym for president in Latin American Spanish."},

{type:"teach",trg:"la imparcialidad",src:"the impartiality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being fair and unbiased.\nIm- (not) + parcial (partial).",
 example:"A: La imparcialidad del juez es fundamental para la justicia.\nB: Sin ella, el sistema no funciona.",
 exampleSrc:"A: The impartiality of the judge is fundamental for justice.\nB: Without it, the system does not work.",
 funFact:"Spanish judges must recuse themselves if they have any personal connection to a case."},

{type:"fb",s:"El {1} del alcalde finaliza en junio y habrá nuevas elecciones.",
 a:["mandato"],opts:["mandato","causante","indicio","mandatario"],
 hint:"The official period during which a leader holds power. A term of office.",
 sSrc:"The mayor's {1} ends in June and there will be new elections."},

{type:"match",pairs:[
 {trg:"la legislación",src:"legislation"},
 {trg:"el indicio",src:"clue / indication"},
 {trg:"la imposición",src:"imposition / tax levy"},
 {trg:"el mandatario",src:"leader / head of state"},
 {trg:"la imparcialidad",src:"impartiality"}
]},

{type:"mc",q:"¿Qué cualidad debe tener un juez por encima de todo?",
 opts:["Incursión","Invalidez","Imparcialidad","Imposición"],
 ans:"Imparcialidad",
 hint:"A judge must be fair, neutral, and unbiased. What is the noun for that quality?"}
]};
export default LESSON_3;
