// Lesson 2 — Pensamiento abstracto
const LESSON_2 = {id:"esv2_b2gA_l2", title:"Pensamiento abstracto", icon:"💭", xp:15, board:true, steps:[
{type:"intro", title:"Pensamiento abstracto", desc:"Develop vocabulary for discussing abstract concepts, reasoning, and intellectual processes.", goals:["Learn 15 abstract nouns and verbs","Express complex ideas precisely","Navigate academic register"]},

{type:"teach", trg:"la consideración", src:"the consideration", pos:"noun", gender:"f",
 note:"Careful thought before deciding.\nAlso: regard, respect for others.",
 example:"A: Debemos tomar en consideración todos los factores.\nB: Estoy de acuerdo, no podemos precipitarnos.",
 exampleSrc:"A: We must take all factors into consideration.\nB: I agree, we can't rush.",
 funFact:"From Latin considerare, originally meaning 'to observe the stars' (sidera)."},

{type:"teach", trg:"la consistencia", src:"consistency", pos:"noun", gender:"f",
 note:"Being constant and reliable over time.\nAlso: physical texture or density.",
 example:"A: Su trabajo destaca por la consistencia.\nB: Sí, siempre mantiene un nivel alto.",
 exampleSrc:"A: Her work stands out for its consistency.\nB: Yes, she always maintains a high standard.",
 funFact:"In cooking, consistencia refers to texture. Context tells you which meaning."},

{type:"teach", trg:"la definición", src:"the definition", pos:"noun", gender:"f",
 note:"A precise statement of meaning.\nFrom de- (fully) + finire (to limit).",
 example:"A: ¿Cuál es la definición exacta de ese término?\nB: Depende del contexto académico.",
 exampleSrc:"A: What is the exact definition of that term?\nB: It depends on the academic context.",
 funFact:"The Real Academia Espanola updates definitions every year in its online dictionary."},

{type:"teach", trg:"la modificación", src:"the modification", pos:"noun", gender:"f",
 note:"A change or alteration to something existing.\nFrom modificar (to modify).",
 example:"A: Han propuesto una modificación del reglamento.\nB: ¿Qué artículo quieren cambiar?",
 exampleSrc:"A: They've proposed a modification to the regulation.\nB: Which article do they want to change?",
 funFact:"In genetics, 'modificación genética' is one of Spain's most debated science topics."},

{type:"teach", trg:"la metodología", src:"the methodology", pos:"noun", gender:"f",
 note:"The system of methods used in a field.\nFrom Greek methodos + logos.",
 example:"A: ¿Qué metodología utilizaste en la investigación?\nB: Una combinación de entrevistas y encuestas.",
 exampleSrc:"A: What methodology did you use in the research?\nB: A combination of interviews and surveys.",
 funFact:"Spanish universities require a methodology chapter in every doctoral thesis."},

{type:"mc", q:"¿Qué significa 'tomar en consideración'?", opts:["Pensar cuidadosamente antes de decidir","Tomar una decisión rápida","Ignorar los detalles","Copiar la idea de otro"], ans:"Pensar cuidadosamente antes de decidir",
 hint:"The phrase involves careful, deliberate thought about something."},

{type:"fb", s:"La {1} del proyecto tuvo que ser aprobada por el comité.", a:["modificación"], opts:["modificación","consistencia","definición","metodología"],
 hint:"This noun means a change or alteration to something already existing.",
 sSrc:"The {1} of the project had to be approved by the committee."},

{type:"teach", trg:"la interacción", src:"the interaction", pos:"noun", gender:"f",
 note:"Mutual action between people, systems, or ideas.\nInter- (between) + acción.",
 example:"A: La interacción entre los alumnos mejora el aprendizaje.\nB: Por eso trabajamos en grupos.",
 exampleSrc:"A: The interaction between students improves learning.\nB: That's why we work in groups.",
 funFact:"Online Spanish uses 'interactuar' (to interact) far more than 20 years ago."},

{type:"teach", trg:"la exageración", src:"the exaggeration", pos:"noun", gender:"f",
 note:"Making something seem larger or more important than it is.\nFrom exagerar.",
 example:"A: Decir que es el peor libro del siglo es una exageración.\nB: Tienes razón, no es para tanto.",
 exampleSrc:"A: Saying it's the worst book of the century is an exaggeration.\nB: You're right, it's not that bad.",
 funFact:"From Latin exaggerare, literally 'to heap up'. Spaniards are famous for expressive speech."},

{type:"teach", trg:"la aspiración", src:"the aspiration / ambition", pos:"noun", gender:"f",
 note:"A strong hope or desire to achieve something.\nAlso: the act of breathing in.",
 example:"A: ¿Cuál es tu mayor aspiración profesional?\nB: Mi aspiración es dirigir mi propia empresa.",
 exampleSrc:"A: What is your greatest professional aspiration?\nB: My aspiration is to run my own company.",
 funFact:"In phonetics, aspiración refers to the puff of air with certain consonants."},

{type:"mc", q:"¿Qué es una metodología?", opts:["Un sistema de métodos para investigar","Un tipo de examen universitario","Una clase de filosofía","Un libro de texto"], ans:"Un sistema de métodos para investigar",
 hint:"Think about the Greek roots: method + study/science."},

{type:"fb", s:"La {1} entre profesor y alumno es clave para el aprendizaje.", a:["interacción"], opts:["interacción","exageración","aspiración","definición"],
 hint:"This noun refers to the mutual exchange between people.",
 sSrc:"The {1} between teacher and student is key to learning."},

{type:"teach", trg:"la inflexión", src:"the inflection / turning point", pos:"noun", gender:"f",
 note:"A change in direction or tone.\nIn grammar: a word form change.",
 example:"A: Este momento marca un punto de inflexión en la historia.\nB: Sí, nada volverá a ser igual.",
 exampleSrc:"A: This moment marks a turning point in history.\nB: Yes, nothing will ever be the same.",
 funFact:"'Punto de inflexión' is used constantly in Spanish political commentary."},

{type:"teach", trg:"la mención", src:"the mention", pos:"noun", gender:"f",
 note:"A brief reference to something or someone.\nFrom mencionar (to mention).",
 example:"A: El informe hace mención de los riesgos ambientales.\nB: Es importante que lo incluyan.",
 exampleSrc:"A: The report makes mention of environmental risks.\nB: It's important that they include it.",
 funFact:"'Mención honorífica' (honorable mention) is used in Spanish academic awards."},

{type:"teach", trg:"la imposición", src:"the imposition", pos:"noun", gender:"f",
 note:"Forcing something on someone.\nAlso: a tax or levy (fiscal context).",
 example:"A: Considero que esa norma es una imposición.\nB: Muchos ciudadanos opinan lo mismo.",
 exampleSrc:"A: I consider that rule an imposition.\nB: Many citizens feel the same way.",
 funFact:"In Spain, 'imposiciones fiscales' are taxes. Double meaning keeps you alert."},

{type:"match", pairs:[
 {trg:"la consideración", src:"consideration"},
 {trg:"la exageración", src:"exaggeration"},
 {trg:"la aspiración", src:"aspiration"},
 {trg:"la inflexión", src:"turning point"},
 {trg:"la imposición", src:"imposition"}
]},

{type:"fb", s:"Su discurso marcó un punto de {1} en la campaña electoral.", a:["inflexión"], opts:["inflexión","imposición","mención","consistencia"],
 hint:"This word describes a critical turning point or change in direction.",
 sSrc:"His speech marked a turning {1} in the electoral campaign."},

{type:"mc", q:"¿Qué indica una 'mención honorífica'?", opts:["Un reconocimiento especial sin ser el primer premio","El primer premio del concurso","Un castigo leve","Una queja formal"], ans:"Un reconocimiento especial sin ser el primer premio",
 hint:"It's an award that recognizes quality without being the top prize."},

{type:"teach", trg:"el indicio", src:"the indication / clue", pos:"noun", gender:"m",
 note:"A sign that suggests something is true.\nStronger than 'pista', weaker than 'prueba'.",
 example:"A: Hay indicios de que la economía mejorará.\nB: Ojalá se confirmen esos indicios.",
 exampleSrc:"A: There are indications that the economy will improve.\nB: I hope those indications are confirmed.",
 funFact:"In criminal law, 'indicios' can lead to an investigation but not a conviction."},

{type:"fb", s:"No hay {1} suficientes para confirmar esa teoría.", a:["indicios"], opts:["indicios","exageraciones","imposiciones","metodologías"],
 hint:"These are clues or signs that point toward something being true.",
 sSrc:"There are not enough {1} to confirm that theory."},

{type:"drag_fill", s:"La {1} de este estudio sigue una {2} rigurosa.", blanks:{"1":"definición","2":"metodología"}, pool:["definición","metodología","exageración","imposición"],
 hint:"The study's scope follows a strict system of methods."},

{type:"mc", q:"¿Cuál es sinónimo de 'aspiración'?", opts:["Ambición","Exageración","Imposición","Consistencia"], ans:"Ambición",
 hint:"Both words refer to a strong desire to achieve something great."},

{type:"match", pairs:[
 {trg:"la metodología", src:"methodology"},
 {trg:"la interacción", src:"interaction"},
 {trg:"la modificación", src:"modification"},
 {trg:"el indicio", src:"clue / indication"},
 {trg:"la definición", src:"definition"}
]}
]};
export default LESSON_2;
