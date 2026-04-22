// B2 Gap Batch B Lesson 09. Science & Research
const LESSON_9 = {id:"esv2_b2gB_l9",title:"Ciencia e investigación",icon:"🔬",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia e investigación",desc:"Learn scientific vocabulary for discussing research, processes, and discoveries in Spanish.",goals:["Learn 12 words about science and research","Discuss scientific methods and findings","Use precise academic vocabulary"]},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of taking something in.\nUsed in physics, chemistry, and biology.",
 example:"A: La absorción de nutrientes ocurre en el intestino delgado.\nB: Es un proceso fundamental para la salud.",
 exampleSrc:"A: The absorption of nutrients occurs in the small intestine.\nB: It is a fundamental process for health.",
 funFact:"In Spanish physics, 'absorción' also describes how materials absorb light, sound, or radiation."},

{type:"teach",trg:"la aspiración",src:"the aspiration / suction",pos:"noun",gender:"f",
 note:"Feminine noun. Medical: drawing in air or fluid.\nAlso figurative: ambition, desire.",
 example:"A: La aspiración de líquido del pulmón fue necesaria.\nB: El paciente se recuperó en pocos días.",
 exampleSrc:"A: The aspiration of fluid from the lung was necessary.\nB: The patient recovered in a few days.",
 funFact:"In phonetics, 'aspiración' refers to pronouncing 's' as an 'h' sound, common in Andalusia and the Caribbean."},

{type:"teach",trg:"la interacción",src:"the interaction",pos:"noun",gender:"f",
 note:"Feminine noun. Reciprocal action between two things.\nUsed in science, sociology, and computing.",
 example:"A: La interacción entre estos dos compuestos produce calor.\nB: Hay que tener cuidado al mezclarlos.",
 exampleSrc:"A: The interaction between these two compounds produces heat.\nB: You have to be careful when mixing them.",
 funFact:"In social science, 'interacción social' is a core concept in Spanish sociology curricula."},

{type:"teach",trg:"la interconexión",src:"the interconnection",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being linked together.\nCommon in technology and network contexts.",
 example:"A: La interconexión de los sistemas mejoró la eficiencia.\nB: Ahora todos los departamentos comparten datos.",
 exampleSrc:"A: The interconnection of systems improved efficiency.\nB: Now all departments share data.",
 funFact:"Spain's high-speed rail network (AVE) is a showcase of interconexión connecting major cities."},

{type:"mc",q:"¿Dónde ocurre la absorción de nutrientes en el cuerpo?",
 opts:["En el intestino delgado","En el estómago","En los pulmones","En el corazón"],
 ans:"En el intestino delgado",
 hint:"Think about the long, narrow part of the digestive system where food is broken down."},

{type:"teach",trg:"la inflexión",src:"the inflection / turning point",pos:"noun",gender:"f",
 note:"Feminine noun. A change in direction or tone.\nMath: a point where a curve changes concavity.",
 example:"A: El discurso tuvo un punto de inflexión muy dramático.\nB: Cambió completamente el tono de la conversación.",
 exampleSrc:"A: The speech had a very dramatic turning point.\nB: It completely changed the tone of the conversation.",
 funFact:"In linguistics, 'inflexión' refers to how word endings change for grammar (tense, case, number)."},

{type:"teach",trg:"la consistencia",src:"the consistency / texture",pos:"noun",gender:"f",
 note:"Feminine noun. Firmness of texture.\nAlso: coherence or steadiness.",
 example:"A: La consistencia de esta salsa es perfecta.\nB: Ni muy espesa ni muy líquida.",
 exampleSrc:"A: The consistency of this sauce is perfect.\nB: Neither too thick nor too thin.",
 funFact:"Unlike English, Spanish 'consistencia' primarily means texture/firmness. For logical coherence, 'coherencia' is preferred."},

{type:"teach",trg:"la objetividad",src:"the objectivity",pos:"noun",gender:"f",
 note:"Feminine noun. Freedom from personal bias.\nEssential in scientific research.",
 example:"A: La objetividad es fundamental en la investigación científica.\nB: Los resultados no deben depender de opiniones personales.",
 exampleSrc:"A: Objectivity is fundamental in scientific research.\nB: Results should not depend on personal opinions.",
 funFact:"In Spanish journalism, 'objetividad' is considered the gold standard, though it is often debated."},

{type:"fb",s:"La {1} entre los dos medicamentos puede causar efectos secundarios.",
 a:["interacción"],opts:["interacción","absorción","aspiración","inflexión"],
 hint:"The reciprocal effect that two substances have on each other when combined.",
 sSrc:"The {1} between the two medications can cause side effects."},

{type:"teach",trg:"la detonación",src:"the detonation / explosion",pos:"noun",gender:"f",
 note:"Feminine noun. A violent explosion.\nFrom Latin detonare (to thunder down).",
 example:"A: La detonación se escuchó a varios kilómetros de distancia.\nB: Fue una explosión controlada en la cantera.",
 exampleSrc:"A: The detonation was heard several kilometers away.\nB: It was a controlled explosion in the quarry.",
 funFact:"In automotive engineering, 'detonación' refers to engine knock, a harmful premature combustion."},

{type:"teach",trg:"la impulsividad",src:"the impulsivity",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to act without thinking.\nA personality trait studied in psychology.",
 example:"A: La impulsividad puede ser un obstáculo en el trabajo.\nB: Es importante aprender a controlar los impulsos.",
 exampleSrc:"A: Impulsivity can be an obstacle at work.\nB: It is important to learn to control impulses.",
 funFact:"Spanish psychologists classify impulsividad as cognitive (quick decisions) and motor (acting without thinking)."},

{type:"teach",trg:"la fisonomía",src:"the physiognomy / facial features",pos:"noun",gender:"f",
 note:"Feminine noun. The natural features of a person's face.\nAlso the general appearance of a place.",
 example:"A: La fisonomía de la ciudad ha cambiado mucho en veinte años.\nB: Han construido rascacielos donde había casas antiguas.",
 exampleSrc:"A: The physiognomy of the city has changed a lot in twenty years.\nB: They have built skyscrapers where old houses used to be.",
 funFact:"The extended meaning of 'fisonomía' for places is more common in Spanish than in English."},

{type:"mc",q:"¿Qué es la objetividad en la ciencia?",
 opts:["Usar tecnología avanzada","Analizar los hechos sin opiniones personales","Repetir un experimento muchas veces","Publicar los resultados rápidamente"],
 ans:"Analizar los hechos sin opiniones personales",
 hint:"The principle of being unbiased, keeping personal feelings out of the analysis."},

{type:"match",pairs:[
 {trg:"absorción",src:"absorption"},
 {trg:"interacción",src:"interaction"},
 {trg:"objetividad",src:"objectivity"},
 {trg:"inflexión",src:"inflection / turning point"},
 {trg:"detonación",src:"detonation"}
]},

{type:"fb",s:"La {1} es una cualidad esencial para cualquier investigador serio.",
 a:["objetividad"],opts:["objetividad","impulsividad","fisonomía","consistencia"],
 hint:"The quality of analyzing facts without letting personal opinions influence results.",
 sSrc:"{1} is an essential quality for any serious researcher."},

{type:"fb",s:"La {1} de redes permite que los datos fluyan entre distintos sistemas.",
 a:["interconexión"],opts:["interconexión","interacción","inflexión","absorción"],
 hint:"Linking different networks or systems together so they can communicate.",
 sSrc:"The {1} of networks allows data to flow between different systems."},

]};
export default LESSON_9;
