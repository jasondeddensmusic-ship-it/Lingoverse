// B2 Gap2 Lesson 09 - Verbs of Action & Change
const LESSON_9 = {id:"esv2_b2g2_l9",title:"Verbos de acción y cambio",icon:"🔄",xp:15,board:true,steps:[
{type:"intro",title:"Verbos de acción y cambio",desc:"Master powerful verbs for describing actions, interventions, and physical or emotional changes.",goals:["Learn 20 action and change verbs","Express complex actions with precision","Describe transformations and interventions"]},

{type:"teach",trg:"acarrear",src:"to carry / to cause (problems)",pos:"verb",gender:null,
 note:"Regular -ar verb. To transport, or figuratively to bring consequences.",
 example:"A: Esta decisión puede acarrear graves problemas.\nB: Deberíamos pensar bien antes de actuar.",
 exampleSrc:"A: This decision could cause serious problems.\nB: We should think carefully before acting.",
 funFact:"From 'carro' (cart). Originally meant to transport by cart. The figurative sense dominates now."},

{type:"teach",trg:"acoplar",src:"to couple / to fit together",pos:"verb",gender:null,
 note:"Regular -ar verb. To join two parts. Reflexive: acoplarse (to adapt).",
 example:"A: Hay que acoplar las dos piezas con cuidado.\nB: Si las fuerzas, se romperán.",
 exampleSrc:"A: You need to fit the two pieces together carefully.\nB: If you force them, they will break.",
 funFact:"In space, 'acoplamiento' is the term for spacecraft docking. Same root as English 'couple'."},

{type:"teach",trg:"afrontar",src:"to face / to confront",pos:"verb",gender:null,
 note:"Regular -ar verb. To bravely deal with a difficult situation.",
 example:"A: Hay que afrontar los problemas, no huir de ellos.\nB: Lo sé, pero a veces es difícil.",
 exampleSrc:"A: You have to face problems, not run from them.\nB: I know, but sometimes it is difficult.",
 funFact:"From 'frente' (front/forehead). To face something head-on. More resolute than 'enfrentar'."},

{type:"teach",trg:"agravar",src:"to aggravate / to worsen",pos:"verb",gender:null,
 note:"Regular -ar verb. To make a bad situation worse.\nReflexive: agravarse.",
 example:"A: La tormenta agravó los daños en la carretera.\nB: Ahora el tráfico está completamente cortado.",
 exampleSrc:"A: The storm aggravated the damage to the road.\nB: Now traffic is completely cut off.",
 funFact:"From Latin aggravare (to make heavier). An 'agravante' is a legal aggravating factor."},

{type:"teach",trg:"alarmar",src:"to alarm / to worry",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause fear or concern.\nReflexive: alarmarse.",
 example:"A: No quiero alarmarte, pero el informe no es bueno.\nB: Dime la verdad, prefiero saberlo.",
 exampleSrc:"A: I do not want to alarm you, but the report is not good.\nB: Tell me the truth, I prefer to know.",
 funFact:"From Italian 'all'arme' (to arms!). The original alarm was a call to grab weapons."},

{type:"mc",q:"¿Qué significa afrontar un problema?",opts:["Enfrentarse a él con valentía","Ignorarlo completamente","Empeorar la situación","Buscar a alguien que lo resuelva"],ans:"Enfrentarse a él con valentía",hint:"Think about dealing with something head-on rather than avoiding it."},

{type:"teach",trg:"albergar",src:"to house / to harbor",pos:"verb",gender:null,
 note:"Regular -ar verb. To provide shelter, or figuratively to hold feelings.",
 example:"A: El centro alberga a más de cien refugiados.\nB: Necesitan más recursos para atenderlos.",
 exampleSrc:"A: The center houses more than one hundred refugees.\nB: They need more resources to assist them.",
 funFact:"From 'albergue' (shelter/hostel). The Camino de Santiago has hundreds of albergues for pilgrims."},

{type:"teach",trg:"amortiguar",src:"to cushion / to absorb",pos:"verb",gender:null,
 note:"Regular -ar verb. To reduce the impact of a blow or shock.",
 example:"A: Los airbags amortiguan el golpe en un accidente.\nB: Han salvado miles de vidas desde su invención.",
 exampleSrc:"A: Airbags cushion the impact in an accident.\nB: They have saved thousands of lives since their invention.",
 funFact:"From 'amortecer' (to deaden). Also used for sound: 'amortiguar el ruido' (muffle noise)."},

{type:"teach",trg:"apaciguar",src:"to pacify / to calm down",pos:"verb",gender:null,
 note:"Regular -ar verb. To soothe someone or reduce conflict.",
 example:"A: La madre logró apaciguar al niño con una canción.\nB: Se quedó dormido en pocos minutos.",
 exampleSrc:"A: The mother managed to calm the child with a song.\nB: He fell asleep in a few minutes.",
 funFact:"From 'paz' (peace). The root connects to 'pacífico', 'pacifismo', and the Pacific Ocean."},

{type:"teach",trg:"aplazar",src:"to postpone / to defer",pos:"verb",gender:null,
 note:"Regular -ar verb. To delay to a later date.",
 example:"A: Han aplazado la reunión hasta el lunes.\nB: Mejor, así tenemos tiempo para prepararnos.",
 exampleSrc:"A: They have postponed the meeting until Monday.\nB: Better, that way we have time to prepare.",
 funFact:"From 'plazo' (deadline/term). In academic Spanish, 'aplazar' also means to fail a student."},

{type:"teach",trg:"argumentar",src:"to argue (a point) / to reason",pos:"verb",gender:null,
 note:"Regular -ar verb. To present reasons in support of an idea.",
 example:"A: Argumentó que la medida era necesaria para el progreso.\nB: Pero no todos estaban convencidos.",
 exampleSrc:"A: He argued that the measure was necessary for progress.\nB: But not everyone was convinced.",
 funFact:"Different from 'discutir' (to argue/fight). 'Argumentar' is rational, 'discutir' can be heated."},

{type:"fb",s:"Han {1} la reunión hasta la próxima semana.",a:["aplazado"],opts:["aplazado","agravado","alarmado","acoplado"],hint:"The past participle of the verb meaning to postpone or delay something.",sSrc:"They have {1} the meeting until next week."},

{type:"teach",trg:"arrebatar",src:"to snatch / to seize",pos:"verb",gender:null,
 note:"Regular -ar verb. To grab something violently from someone.",
 example:"A: Le arrebataron el bolso en plena calle.\nB: Por suerte, un vecino atrapó al ladrón.",
 exampleSrc:"A: They snatched her bag in the middle of the street.\nB: Luckily, a neighbor caught the thief.",
 funFact:"Also means to captivate: 'una interpretación arrebatadora' (a captivating performance)."},

{type:"teach",trg:"arrimar",src:"to move closer / to bring near",pos:"verb",gender:null,
 note:"Regular -ar verb. To push something closer. Reflexive: arrimarse.",
 example:"A: Arrima la silla a la mesa, por favor.\nB: ¿Así está bien?",
 exampleSrc:"A: Move the chair closer to the table, please.\nB: Is that good?",
 funFact:"'Arrimar el hombro' (to put your shoulder in) means to pitch in and help with a task."},

{type:"teach",trg:"arropar",src:"to wrap up / to tuck in",pos:"verb",gender:null,
 note:"Regular -ar verb. To cover warmly, or figuratively to support.",
 example:"A: Arropa bien al niño, que hace frío esta noche.\nB: Ya le he puesto dos mantas.",
 exampleSrc:"A: Tuck the child in well, it is cold tonight.\nB: I have already put two blankets on him.",
 funFact:"From 'ropa' (clothes). Figuratively: 'arropar a alguien' means to give emotional support."},

{type:"teach",trg:"captar",src:"to capture / to grasp",pos:"verb",gender:null,
 note:"Regular -ar verb. To attract, to understand, or to pick up signals.",
 example:"A: La campaña logró captar la atención del público.\nB: El mensaje era claro y directo.",
 exampleSrc:"A: The campaign managed to capture the public's attention.\nB: The message was clear and direct.",
 funFact:"Multiple uses: 'captar fondos' (raise funds), 'captar señal' (pick up signal), 'captar una idea' (grasp)."},

{type:"mc",q:"¿Qué hace alguien que arrebata algo?",opts:["Lo quita con violencia","Lo presta amablemente","Lo guarda con cuidado","Lo repara con paciencia"],ans:"Lo quita con violencia",hint:"Think about a sudden, forceful action of taking something from someone's hands."},

{type:"teach",trg:"calificar",src:"to grade / to describe as",pos:"verb",gender:null,
 note:"Regular -ar verb. To assign a grade, or to characterize something.",
 example:"A: La prensa calificó el discurso de histórico.\nB: Fue un momento que nadie olvidará.",
 exampleSrc:"A: The press described the speech as historic.\nB: It was a moment nobody will forget.",
 funFact:"'Calificación' means both grade (academic) and rating. 'Calificación crediticia' is credit rating."},

{type:"teach",trg:"capacitar",src:"to train / to qualify",pos:"verb",gender:null,
 note:"Regular -ar verb. To give someone the skills needed for a task.",
 example:"A: Este curso te capacita para trabajar como técnico.\nB: Incluye prácticas en empresas reales.",
 exampleSrc:"A: This course qualifies you to work as a technician.\nB: It includes internships at real companies.",
 funFact:"'Capacitación' is training. In Spain, 'formación' is more common; Latin America prefers 'capacitación'."},

{type:"teach",trg:"debilitar",src:"to weaken",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something or someone weaker.\nReflexive: debilitarse.",
 example:"A: La enfermedad debilitó mucho su sistema inmunológico.\nB: Necesita meses de recuperación.",
 exampleSrc:"A: The illness greatly weakened his immune system.\nB: He needs months of recovery.",
 funFact:"From 'débil' (weak). The opposite 'fortalecer' (to strengthen) follows the same -ecer pattern."},

{type:"teach",trg:"curvar",src:"to curve / to bend",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something curved.\nReflexive: curvarse.",
 example:"A: El peso de la nieve curvó las ramas del árbol.\nB: Parecía que iban a romperse.",
 exampleSrc:"A: The weight of the snow bent the tree branches.\nB: It seemed like they were going to break.",
 funFact:"From Latin curvare. 'Curva' (curve) is also used for road bends: 'curva peligrosa' (dangerous bend)."},

{type:"fb",s:"La campaña logró {1} la atención de los votantes jóvenes.",a:["captar"],opts:["captar","aplazar","agravar","arropar"],hint:"The verb meaning to attract or capture someone's attention or interest.",sSrc:"The campaign managed to {1} the attention of young voters."},

{type:"match",pairs:[{trg:"afrontar",src:"to face"},{trg:"aplazar",src:"to postpone"},{trg:"amortiguar",src:"to cushion"},{trg:"debilitar",src:"to weaken"},{trg:"albergar",src:"to house"}]}
]};

export default LESSON_9;
