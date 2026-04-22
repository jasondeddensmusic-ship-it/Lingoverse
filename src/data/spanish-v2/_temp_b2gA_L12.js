// Lesson 12. Normas y regulación
const LESSON_12 = {id:"esv2_b2gA_l12", title:"Normas y regulación", icon:"📋", xp:15, board:true, steps:[
{type:"intro", title:"Normas y regulación", desc:"Navigate formal vocabulary about rules, standards, and regulatory frameworks.", goals:["Learn 15 regulation and compliance terms","Discuss rules and standards formally","Use administrative vocabulary precisely"]},

{type:"teach", trg:"dar de alta", src:"to register / to discharge (medical)", pos:"verb", gender:null,
 note:"Two meanings: register someone in a system, or discharge from hospital.\nVery common phrase.",
 example:"A: Me dieron de alta en la Seguridad Social ayer.\nB: Perfecto, ya puedes empezar a trabajar.",
 exampleSrc:"A: I was registered with Social Security yesterday.\nB: Great, you can start working now.",
 funFact:"The opposite is 'dar de baja' (to deregister/admit). Both are essential bureaucratic terms."},

{type:"teach", trg:"noquear", src:"to knock out", pos:"verb", gender:null,
 note:"To render unconscious with a blow. From English 'knock out'.\nAlso figurative.",
 example:"A: El boxeador noqueó a su rival en el tercer asalto.\nB: Fue un golpe demoledor.",
 exampleSrc:"A: The boxer knocked out his rival in the third round.\nB: It was a devastating blow.",
 funFact:"One of many English sports terms adopted into Spanish: 'noquear' from 'knock out'."},

{type:"teach", trg:"el nudismo", src:"nudism", pos:"noun", gender:"m",
 note:"The practice of going unclothed, typically in designated areas.\nFrom desnudo (nude).",
 example:"A: El nudismo es legal en muchas playas españolas.\nB: España tiene más de trescientas playas nudistas.",
 exampleSrc:"A: Nudism is legal on many Spanish beaches.\nB: Spain has more than three hundred nudist beaches.",
 funFact:"Spain has the most nudist beaches in Europe, concentrated along the Mediterranean."},

{type:"teach", trg:"nudista", src:"nudist", pos:"adj", gender:null,
 note:"Relating to nudism. Also a noun: un/una nudista.\nUsed for beaches, camps, resorts.",
 example:"A: ¿Has estado alguna vez en una playa nudista?\nB: Sí, en Cabo de Gata. Es muy tranquila.",
 exampleSrc:"A: Have you ever been to a nudist beach?\nB: Yes, in Cabo de Gata. It's very peaceful.",
 funFact:"Cabo de Gata in Almeria has some of Spain's most famous nudist beaches."},

{type:"teach", trg:"nonato", src:"unborn / extracted by caesarean", pos:"adj", gender:null,
 note:"Literally 'not born'. Used for caesarean births.\nAlso figurative: unrealized.",
 example:"A: San Ramón Nonato es el patrón de las embarazadas.\nB: Su nombre significa que nació por cesárea.",
 exampleSrc:"A: Saint Raymond Nonnatus is the patron of pregnant women.\nB: His name means he was born by caesarean.",
 funFact:"From Latin non natus (not born). The saint's name literally means 'not born naturally'."},

{type:"mc", q:"¿Qué significa 'dar de alta' en un hospital?", opts:["Permitir que el paciente se vaya a casa","Ingresar al paciente","Operar al paciente","Darle medicación"], ans:"Permitir que el paciente se vaya a casa",
 hint:"In medical context, it means the patient is well enough to leave."},

{type:"fb", s:"El boxeador {1} a su oponente con un derechazo perfecto.", a:["noqueó"], opts:["noqueó","registró","curó","normalizó"],
 hint:"This verb means to render unconscious with a blow, from English 'knock out'.",
 sSrc:"The boxer {1} his opponent with a perfect right hook."},

{type:"teach", trg:"la fechoría", src:"the misdeed / wrongdoing", pos:"noun", gender:"f",
 note:"A bad or criminal act. Slightly old-fashioned but still used.\nFrom hecho (deed).",
 example:"A: Las fechorías del ladrón fueron descubiertas por la policía.\nB: Llevaba meses haciendo cosas muy malas en la zona.",
 exampleSrc:"A: The thief's misdeeds were discovered by the police.\nB: He had been doing very bad things in the area for months.",
 funFact:"Has a slightly theatrical quality. Often used in children's stories for villains."},

{type:"teach", trg:"la detonación", src:"the detonation / explosion", pos:"noun", gender:"f",
 note:"The act of exploding or setting off an explosive.\nFrom detonar (to detonate).",
 example:"A: La detonación se oyó a varios kilómetros.\nB: Fue una demolición controlada del edificio viejo.",
 exampleSrc:"A: The detonation was heard several kilometers away.\nB: It was a controlled demolition of the old building.",
 funFact:"From Latin detonare (to thunder). The prefix de- intensifies tonare (to thunder)."},

{type:"teach", trg:"el descendimiento", src:"the descent / lowering", pos:"noun", gender:"m",
 note:"The act of bringing down. In art: the Descent from the Cross.\nFrom descender.",
 example:"A: El Descendimiento de Van der Weyden está en el Prado.\nB: Es una de las obras maestras del museo.",
 exampleSrc:"A: Van der Weyden's Descent from the Cross is in the Prado.\nB: It's one of the museum's masterpieces.",
 funFact:"One of the most painted scenes in Western art. The Prado version is considered the finest."},

{type:"mc", q:"¿Qué es una 'fechoría'?", opts:["Una fecha importante","Un acto malo o criminal","Una fiesta popular","Un tipo de comida"], ans:"Un acto malo o criminal",
 hint:"Despite sounding like 'fecha' (date), it comes from 'hecho' (deed) and means a bad act."},

{type:"fb", s:"La {1} controlada del puente se realizó sin incidentes.", a:["detonación"], opts:["detonación","fechoría","normalización","regulación"],
 hint:"This noun describes an explosion, in this case a planned one.",
 sSrc:"The controlled {1} of the bridge was carried out without incidents."},

{type:"teach", trg:"el imperfecto", src:"the imperfect tense", pos:"noun", gender:"m",
 note:"A past tense for ongoing or habitual actions.\nIm- (not) + perfecto (completed).",
 example:"A: En español, el imperfecto describe acciones habituales del pasado.\nB: 'Cuando era niño, jugaba al fútbol todos los días.'",
 exampleSrc:"A: In Spanish, the imperfect describes habitual past actions.\nB: 'When I was a child, I played football every day.'",
 funFact:"Literally 'not completed'. The action is viewed as ongoing, not finished."},

{type:"teach", trg:"la educación física", src:"physical education", pos:"noun", gender:"f",
 note:"The school subject focused on sports and physical fitness.\nAbbreviated: EF.",
 example:"A: La educación física es obligatoria en todas las escuelas españolas.\nB: Los niños tienen dos horas a la semana.",
 exampleSrc:"A: Physical education is mandatory in all Spanish schools.\nB: Children have two hours per week.",
 funFact:"In Spain, PE teachers need a university degree in 'Ciencias de la Actividad Física'."},

{type:"teach", trg:"en cambio", src:"on the other hand / however", pos:"adv", gender:null,
 note:"A connector showing contrast between two ideas.\nVery frequent in formal writing.",
 example:"A: Madrid es muy grande. Barcelona, en cambio, es más compacta.\nB: Ambas ciudades tienen su encanto.",
 exampleSrc:"A: Madrid is very large. Barcelona, on the other hand, is more compact.\nB: Both cities have their charm.",
 funFact:"One of the most useful B2 connectors. Essential for DELE essay writing."},

{type:"match", pairs:[
 {trg:"dar de alta", src:"to register / discharge"},
 {trg:"noquear", src:"to knock out"},
 {trg:"la fechoría", src:"misdeed"},
 {trg:"la detonación", src:"detonation"},
 {trg:"en cambio", src:"on the other hand"}
]},

{type:"fb", s:"Madrid es ruidosa; Sevilla, {1}, tiene un ritmo más tranquilo.", a:["en cambio"], opts:["en cambio","en total","sin embargo","por ejemplo"],
 hint:"This connector introduces a contrast between two statements.",
 sSrc:"Madrid is noisy; Seville, {1}, has a calmer rhythm."},

{type:"mc", q:"¿Qué describe el 'imperfecto' en gramática?", opts:["Acciones completadas en el pasado","Órdenes directas","Acciones habituales o en progreso en el pasado","Acciones futuras"], ans:"Acciones habituales o en progreso en el pasado",
 hint:"This tense views past actions as ongoing or repeated, not finished."},

{type:"drag_fill", s:"Le dieron de {1} en el hospital después de la {2}.", blanks:{"1":"alta","2":"neumonía"}, pool:["alta","neumonía","baja","detonación"],
 hint:"The patient was discharged from hospital after recovering from a lung infection."},

{type:"fb", s:"La {1} es obligatoria en los colegios españoles.", a:["educación física"], opts:["educación física","fechoría","detonación","normativa"],
 hint:"This school subject involves sports and physical fitness activities.",
 sSrc:"{1} is mandatory in Spanish schools."},

{type:"match", pairs:[
 {trg:"el nudismo", src:"nudism"},
 {trg:"nudista", src:"nudist"},
 {trg:"nonato", src:"unborn"},
 {trg:"el imperfecto", src:"imperfect tense"},
 {trg:"la educación física", src:"physical education"}
]}
]};
export default LESSON_12;
