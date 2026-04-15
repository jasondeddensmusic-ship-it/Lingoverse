// B2 Gap Batch B Lesson 07 — Education & Academia
const LESSON_7 = {id:"esv2_b2gB_l7",title:"Educación y mundo académico",icon:"🎓",xp:15,board:true,steps:[
{type:"intro",title:"Educación y mundo académico",desc:"Master vocabulary for the Spanish education system, academic disciplines, and university life.",goals:["Learn 12 words about education and academia","Discuss academic fields and methods","Navigate the Spanish education system vocabulary"]},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine compound. The school subject for sports and exercise.\nOften abbreviated as EF.",
 example:"A: La educación física es obligatoria hasta los dieciséis años.\nB: A mí siempre me gustó mucho esa asignatura.",
 exampleSrc:"A: Physical education is mandatory until age sixteen.\nB: I always really liked that subject.",
 funFact:"In Spain, PE teachers must hold a university degree in 'Ciencias de la Actividad Fisica y del Deporte'."},

{type:"teach",trg:"la metodología",src:"the methodology",pos:"noun",gender:"f",
 note:"Feminine noun. A system of methods in a field.\nFrom Greek methodos (pursuit) + logos (study).",
 example:"A: La metodología de este estudio es muy rigurosa.\nB: Han utilizado datos de más de diez mil participantes.",
 exampleSrc:"A: The methodology of this study is very rigorous.\nB: They used data from more than ten thousand participants.",
 funFact:"Spanish universities use 'metodología docente' to describe their teaching approach on every syllabus."},

{type:"teach",trg:"el lingüista",src:"the linguist",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la lingüista.\nA specialist in the science of language.",
 example:"A: Los lingüistas estudian la estructura de las lenguas.\nB: Es una disciplina fascinante y muy amplia.",
 exampleSrc:"A: Linguists study the structure of languages.\nB: It is a fascinating and very broad discipline.",
 funFact:"Spain's Real Academia Espanola, founded in 1713, employs some of the world's top lingüistas."},

{type:"teach",trg:"el léxico",src:"the lexicon / vocabulary",pos:"noun",gender:"m",
 note:"Masculine noun. The total word stock of a language.\nAlso: a person's vocabulary range.",
 example:"A: El léxico del español tiene muchas palabras de origen árabe.\nB: Aproximadamente cuatro mil, según los expertos.",
 exampleSrc:"A: The Spanish lexicon has many words of Arabic origin.\nB: Approximately four thousand, according to experts.",
 funFact:"About 8% of the Spanish léxico comes from Arabic, a legacy of 800 years of Moorish presence."},

{type:"mc",q:"¿Qué estudia un lingüista?",
 opts:["La estructura y el funcionamiento de las lenguas","La historia de los países","Las leyes del parlamento","Los movimientos artísticos"],
 ans:"La estructura y el funcionamiento de las lenguas",
 hint:"Think about someone whose career focuses on how languages work, their grammar, and evolution."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A precise explanation of meaning.\nFrom Latin definire (to set limits).",
 example:"A: La definición de esta palabra no está clara.\nB: Busca en el diccionario de la RAE.",
 exampleSrc:"A: The definition of this word is not clear.\nB: Look it up in the RAE dictionary.",
 funFact:"The RAE dictionary (DRAE) is the authoritative source for Spanish definitions, updated every few years."},

{type:"teach",trg:"la metáfora",src:"the metaphor",pos:"noun",gender:"f",
 note:"Feminine noun. A figure of speech comparing two unlike things.\nFrom Greek metaphora (transfer).",
 example:"A: Esta novela está llena de metáforas sobre la guerra.\nB: La autora usa el lenguaje de forma muy poética.",
 exampleSrc:"A: This novel is full of metaphors about war.\nB: The author uses language in a very poetic way.",
 funFact:"Spanish literature is rich in metaphor. Lorca's poetry is studied worldwide for its striking metáforas."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Representing something as greater than it is.\nFrom Latin exaggerare (to heap up).",
 example:"A: Decir que hace un millón de grados es una exageración.\nB: Bueno, pero hace mucho calor.",
 exampleSrc:"A: Saying it's a million degrees is an exaggeration.\nB: Well, but it is very hot.",
 funFact:"In rhetoric, exageración is the informal term for hyperbole, one of the most common literary devices."},

{type:"fb",s:"El {1} del español incluye unas cuatro mil palabras de origen árabe.",
 a:["léxico"],opts:["léxico","lingüista","metodología","definición"],
 hint:"The total collection of words in a language, its complete vocabulary stock.",
 sSrc:"The Spanish {1} includes about four thousand words of Arabic origin."},

{type:"teach",trg:"el manual",src:"the manual / handbook / textbook",pos:"noun",gender:"m",
 note:"Masculine noun. A book of instructions or reference.\nAlso adj: done by hand.",
 example:"A: El manual de estilo de la universidad es muy estricto.\nB: Hay que seguir las normas de citación.",
 exampleSrc:"A: The university style manual is very strict.\nB: You have to follow the citation rules.",
 funFact:"In Spain, 'manual de estilo' is essential in journalism and academia for consistent writing standards."},

{type:"teach",trg:"la complementación",src:"the complementation / supplementation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing.\nLinguistic term for clause structures.",
 example:"A: La complementación verbal es un tema complejo en gramática.\nB: Hay que distinguir entre complementos directos e indirectos.",
 exampleSrc:"A: Verbal complementation is a complex topic in grammar.\nB: You have to distinguish between direct and indirect complements.",
 funFact:"In Spanish linguistics, 'complementación' is studied extensively due to the rich system of clitics."},

{type:"teach",trg:"la modificación",src:"the modification / alteration",pos:"noun",gender:"f",
 note:"Feminine noun. A change made to something.\nFrom modificar (to modify).",
 example:"A: La modificación del plan de estudios fue aprobada ayer.\nB: Los nuevos cambios entrarán en vigor en septiembre.",
 exampleSrc:"A: The modification of the study plan was approved yesterday.\nB: The new changes will take effect in September.",
 funFact:"Spanish universities undergo plan de estudios modifications every few years to meet European standards."},

{type:"mc",q:"¿Qué es una metáfora?",
 opts:["Una comparación implícita entre dos cosas distintas","Una palabra con varios significados","Un error gramatical frecuente","Una regla de ortografía"],
 ans:"Una comparación implícita entre dos cosas distintas",
 hint:"A literary device where you describe one thing using the imagery of another."},

{type:"match",pairs:[
 {trg:"léxico",src:"lexicon / vocabulary"},
 {trg:"metáfora",src:"metaphor"},
 {trg:"definición",src:"definition"},
 {trg:"lingüista",src:"linguist"},
 {trg:"manual",src:"manual / handbook"}
]},

{type:"fb",s:"La {1} de investigación debe explicarse con detalle en la tesis.",
 a:["metodología"],opts:["metodología","metáfora","exageración","definición"],
 hint:"The systematic approach or framework that guides how research is conducted.",
 sSrc:"The research {1} must be explained in detail in the thesis."},

{type:"fb",s:"La {1} del horario de clases afectó a todos los estudiantes.",
 a:["modificación"],opts:["modificación","complementación","exageración","definición"],
 hint:"A change or alteration made to an existing plan or schedule.",
 sSrc:"The {1} of the class schedule affected all students."},

]};
export default LESSON_7;
