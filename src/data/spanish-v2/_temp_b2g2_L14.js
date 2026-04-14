// B2 Gap2 Lesson 14 - Science & Knowledge
const LESSON_14 = {id:"esv2_b2g2_l14",title:"Ciencia y conocimiento",icon:"🔬",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia y conocimiento",desc:"Master vocabulary for discussing science, research, intellectual pursuits, and academic assessment.",goals:["Learn 20 words about science and knowledge","Discuss research and academic topics","Express intellectual concepts with precision"]},

{type:"teach",trg:"el astrónomo",src:"the astronomer",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la astrónoma.\nA scientist who studies stars and space.",
 example:"A: El astrónomo descubrió un nuevo asteroide.\nB: Lo observó durante meses con su telescopio.",
 exampleSrc:"A: The astronomer discovered a new asteroid.\nB: He observed it for months with his telescope.",
 funFact:"Spain's Canary Islands host some of the world's best observatories due to clear skies."},

{type:"teach",trg:"aritmético",src:"arithmetic / arithmetical",pos:"adj",gender:null,
 note:"Adjective. Relating to basic mathematics.\nFeminine: aritmética.",
 example:"A: Las operaciones aritméticas son la base de las matemáticas.\nB: Sumar, restar, multiplicar y dividir.",
 exampleSrc:"A: Arithmetic operations are the foundation of mathematics.\nB: Adding, subtracting, multiplying, and dividing.",
 funFact:"From Greek arithmos (number). 'Media aritmética' (arithmetic mean) is used constantly in statistics."},

{type:"teach",trg:"la autoevaluación",src:"the self-assessment",pos:"noun",gender:"f",
 note:"Feminine noun. The process of evaluating your own performance.",
 example:"A: La autoevaluación es parte del proceso formativo.\nB: Te ayuda a identificar tus puntos débiles.",
 exampleSrc:"A: Self-assessment is part of the training process.\nB: It helps you identify your weak points.",
 funFact:"Compound: auto (self) + evaluación (evaluation). Common in Spanish education and corporate HR."},

{type:"teach",trg:"la autocrítica",src:"the self-criticism",pos:"noun",gender:"f",
 note:"Feminine noun. The honest examination of one's own faults.",
 example:"A: Hace falta más autocrítica en este equipo.\nB: No podemos mejorar sin reconocer nuestros errores.",
 exampleSrc:"A: More self-criticism is needed in this team.\nB: We cannot improve without recognizing our errors.",
 funFact:"Compound: auto + crítica. In politics, 'hacer autocrítica' is demanded after electoral defeats."},

{type:"teach",trg:"la accesibilidad",src:"the accessibility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being easy to reach or use by everyone.",
 example:"A: La accesibilidad del edificio no cumple las normas.\nB: Falta una rampa para sillas de ruedas.",
 exampleSrc:"A: The building's accessibility does not meet standards.\nB: A wheelchair ramp is missing.",
 funFact:"Spain's 'Ley de Accesibilidad' mandates universal access. Enforcement varies by region."},

{type:"mc",q:"¿Qué estudia un astrónomo?",opts:["Las estrellas y el espacio","Los terremotos y volcanes","Las plantas y los bosques","Los minerales y las rocas"],ans:"Las estrellas y el espacio",hint:"Think about the scientist who uses telescopes to observe celestial bodies."},

{type:"teach",trg:"el computador",src:"the computer",pos:"noun",gender:"m",
 note:"Masculine noun. A computer. Spain prefers 'ordenador'.",
 example:"A: El computador procesa millones de datos por segundo.\nB: La tecnología avanza a un ritmo increíble.",
 exampleSrc:"A: The computer processes millions of data points per second.\nB: Technology advances at an incredible pace.",
 funFact:"Latin America says 'computador/computadora', Spain says 'ordenador'. Both are correct Spanish."},

{type:"teach",trg:"el condicional",src:"the conditional (tense)",pos:"noun",gender:"m",
 note:"Masculine noun. The grammar tense for hypothetical situations.",
 example:"A: El condicional se usa para expresar deseos.\nB: Por ejemplo: me gustaría viajar más.",
 exampleSrc:"A: The conditional is used to express wishes.\nB: For example: I would like to travel more.",
 funFact:"Spanish conditional endings (-ía) are unique among Romance languages for their simplicity."},

{type:"teach",trg:"el antecedente",src:"the antecedent / precedent",pos:"noun",gender:"m",
 note:"Masculine noun. What came before, or a legal record.",
 example:"A: No hay antecedentes de este tipo de caso.\nB: Será un juicio sin precedentes.",
 exampleSrc:"A: There are no precedents for this type of case.\nB: It will be an unprecedented trial.",
 funFact:"'Antecedentes penales' (criminal record) is what a background check looks for in Spain."},

{type:"teach",trg:"el antecesor",src:"the predecessor / ancestor",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la antecesora.\nSomeone who came before in a role or in a family line.",
 example:"A: Su antecesor en el cargo fue muy popular.\nB: Tiene grandes zapatos que llenar.",
 exampleSrc:"A: His predecessor in the role was very popular.\nB: He has big shoes to fill.",
 funFact:"From Latin antecedere (to go before). 'Antepasados' is the more common word for ancestors."},

{type:"teach",trg:"la complementación",src:"the complementation / completion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing something.",
 example:"A: La complementación de ambos métodos da mejores resultados.\nB: Juntos cubren todas las necesidades.",
 exampleSrc:"A: The complementation of both methods gives better results.\nB: Together they cover all needs.",
 funFact:"In linguistics, 'complementación' refers to how verbs take their objects and clauses."},

{type:"fb",s:"No hay {1} de este tipo de caso en la jurisprudencia española.",a:["antecedentes"],opts:["antecedentes","antecesores","computadores","condicionales"],hint:"The noun meaning precedents or previous cases that could serve as reference.",sSrc:"There are no {1} for this type of case in Spanish jurisprudence."},

{type:"teach",trg:"el corpus",src:"the corpus",pos:"noun",gender:"m",
 note:"Masculine noun. A collection of texts or body of work. Invariable plural.",
 example:"A: El corpus de la literatura española es inmenso.\nB: Desde el Cantar de Mio Cid hasta hoy.",
 exampleSrc:"A: The corpus of Spanish literature is immense.\nB: From the Cantar de Mio Cid to today.",
 funFact:"'Corpus Christi' is a major holiday in Spain. Toledo's Corpus celebration is world-famous."},

{type:"teach",trg:"la automoción",src:"the automotive industry",pos:"noun",gender:"f",
 note:"Feminine noun. The car manufacturing sector.",
 example:"A: La automoción es uno de los pilares de la economía española.\nB: España es el segundo fabricante de coches de Europa.",
 exampleSrc:"A: The automotive industry is one of the pillars of the Spanish economy.\nB: Spain is Europe's second-largest car manufacturer.",
 funFact:"SEAT, Spain's own car brand, was founded in 1950. Now part of the Volkswagen Group."},

{type:"teach",trg:"cronológico",src:"chronological",pos:"adj",gender:null,
 note:"Adjective. Arranged in order of time.\nFeminine: cronológica.",
 example:"A: Ordena los acontecimientos en orden cronológico.\nB: Empiezo por el más antiguo.",
 exampleSrc:"A: Arrange the events in chronological order.\nB: I start with the oldest.",
 funFact:"From Greek chronos (time). 'Orden cronológico' is essential in Spanish history exams."},

{type:"teach",trg:"el asterisco",src:"the asterisk",pos:"noun",gender:"m",
 note:"Masculine noun. The star symbol (*) used in writing.",
 example:"A: Pon un asterisco junto a las palabras nuevas.\nB: Así sabremos cuáles repasar después.",
 exampleSrc:"A: Put an asterisk next to the new words.\nB: That way we will know which ones to review later.",
 funFact:"From Greek asteriskos (little star). In Spanish texting, asterisks are used to correct typos."},

{type:"mc",q:"¿Qué es la autoevaluación?",opts:["Evaluarse a uno mismo","Evaluar a los demás","Un tipo de examen oficial","Una calificación final"],ans:"Evaluarse a uno mismo",hint:"Think about the process where you assess your own strengths and weaknesses."},

{type:"teach",trg:"la abstracción",src:"the abstraction",pos:"noun",gender:"f",
 note:"Feminine noun. The process of thinking about concepts rather than concrete things.",
 example:"A: La capacidad de abstracción es clave en filosofía.\nB: Permite pensar más allá de lo concreto.",
 exampleSrc:"A: The capacity for abstraction is key in philosophy.\nB: It allows thinking beyond the concrete.",
 funFact:"Picasso moved from realism to abstraction. The Reina Sofía museum celebrates this journey."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A precise statement of meaning.",
 example:"A: ¿Cuál es la definición exacta de esa palabra?\nB: Busca en el diccionario de la RAE.",
 exampleSrc:"A: What is the exact definition of that word?\nB: Look it up in the RAE dictionary.",
 funFact:"The RAE (Real Academia Española) has been defining Spanish words since 1713. Over 93,000 entries."},

{type:"teach",trg:"el denominador",src:"the denominator",pos:"noun",gender:"m",
 note:"Masculine noun. The bottom number in a fraction, or a common factor.",
 example:"A: El denominador común de todos estos problemas es la falta de financiación.\nB: Sin dinero no hay solución.",
 exampleSrc:"A: The common denominator of all these problems is the lack of funding.\nB: Without money there is no solution.",
 funFact:"The figurative 'denominador común' (common denominator) is used far more than the mathematical one."},

{type:"fb",s:"La capacidad de {1} es fundamental para las matemáticas avanzadas.",a:["abstracción"],opts:["abstracción","accesibilidad","autocrítica","automoción"],hint:"The noun for thinking about concepts and ideas rather than concrete physical things.",sSrc:"The capacity for {1} is fundamental for advanced mathematics."},

{type:"match",pairs:[{trg:"astrónomo",src:"astronomer"},{trg:"antecedente",src:"precedent"},{trg:"asterisco",src:"asterisk"},{trg:"corpus",src:"corpus"},{trg:"automoción",src:"automotive industry"}]}
]};

export default LESSON_14;
