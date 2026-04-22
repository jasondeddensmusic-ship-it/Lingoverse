// Lesson 11. Ciencia e investigación
const LESSON_11 = {id:"esv2_b2gA_l11", title:"Ciencia e investigación", icon:"🔬", xp:15, board:true, steps:[
{type:"intro", title:"Ciencia e investigación", desc:"Master scientific vocabulary for discussing research, experiments, and discoveries.", goals:["Learn 15 science and research terms","Discuss scientific topics formally","Navigate academic scientific register"]},

{type:"teach", trg:"la neumonía", src:"pneumonia", pos:"noun", gender:"f",
 note:"A lung infection causing inflammation.\nAlso spelled 'pulmonía' in everyday speech.",
 example:"A: El paciente fue hospitalizado por neumonía.\nB: Necesita antibióticos y reposo absoluto.",
 exampleSrc:"A: The patient was hospitalized for pneumonia.\nB: He needs antibiotics and complete rest.",
 funFact:"From Greek pneumon (lung). 'Pulmonía' (from Latin) is the colloquial variant in Spain."},

{type:"teach", trg:"el estiramiento", src:"stretching", pos:"noun", gender:"m",
 note:"The act of stretching muscles.\nFrom estirar (to stretch).",
 example:"A: Haz estiramientos antes de correr.\nB: Si no, puedes lesionarte los músculos.",
 exampleSrc:"A: Do stretches before running.\nB: Otherwise, you can injure your muscles.",
 funFact:"Spanish gyms call it 'estiramiento' or the English loanword 'stretching'."},

{type:"teach", trg:"la fisonomía", src:"physiognomy / appearance", pos:"noun", gender:"f",
 note:"The natural features of a face or place.\nFrom Greek physis (nature) + gnomon (judge).",
 example:"A: La fisonomía del barrio ha cambiado mucho en diez años.\nB: Antes era industrial, ahora es residencial.",
 exampleSrc:"A: The appearance of the neighborhood has changed a lot in ten years.\nB: It used to be industrial, now it's residential.",
 funFact:"Can describe both a person's face and a place's character. Very versatile word."},

{type:"teach", trg:"el muslo", src:"the thigh", pos:"noun", gender:"m",
 note:"The upper part of the leg, between hip and knee.\nFrom Latin musculus.",
 example:"A: Me duele el muslo después de la carrera.\nB: Probablemente necesitas más estiramientos.",
 exampleSrc:"A: My thigh hurts after the race.\nB: You probably need more stretching.",
 funFact:"'Muslo de pollo' (chicken thigh) is one of the most popular cuts in Spanish cooking."},

{type:"teach", trg:"metafísico", src:"metaphysical", pos:"adj", gender:null,
 note:"Beyond the physical. Related to abstract philosophical concepts.\nMeta- (beyond) + físico.",
 example:"A: Sus preguntas son más metafísicas que científicas.\nB: Le interesa el sentido de la existencia.",
 exampleSrc:"A: His questions are more metaphysical than scientific.\nB: He's interested in the meaning of existence.",
 funFact:"Spanish Golden Age poetry is full of metaphysical themes, especially Quevedo."},

{type:"mc", q:"¿Qué significa 'fisonomía' cuando se aplica a un barrio?", opts:["Su aspecto o carácter general","Su población total","Su código postal","Su tamaño en kilómetros"], ans:"Su aspecto o carácter general",
 hint:"This word describes the outward appearance or character of a place."},

{type:"fb", s:"Los {1} son fundamentales para prevenir lesiones deportivas.", a:["estiramientos"], opts:["estiramientos","muslos","neumonías","fisonomías"],
 hint:"These exercises involve lengthening muscles before or after physical activity.",
 sSrc:"{1} are essential for preventing sports injuries."},

{type:"teach", trg:"ingente", src:"enormous / vast", pos:"adj", gender:null,
 note:"Extremely large in quantity or extent.\nVery formal, literary register.",
 example:"A: La cantidad de datos es ingente.\nB: Necesitaremos semanas para analizarlos todos.",
 exampleSrc:"A: The amount of data is enormous.\nB: We'll need weeks to analyze it all.",
 funFact:"From Latin ingens (huge). More formal than 'enorme'. Loved by journalists."},

{type:"teach", trg:"irreductible", src:"irreducible / unyielding", pos:"adj", gender:null,
 note:"Cannot be reduced or simplified. Also: stubbornly determined.\nIr- (not) + reducible.",
 example:"A: Su compromiso con la justicia es irreductible.\nB: Nada le hará cambiar de opinión.",
 exampleSrc:"A: His commitment to justice is unyielding.\nB: Nothing will make him change his mind.",
 funFact:"The famous Asterix comics were translated as 'los irreductibles galos' in Spanish."},

{type:"teach", trg:"irredento", src:"unredeemed / irredentist", pos:"adj", gender:null,
 note:"Not yet freed or recovered. Historical/political term.\nIr- (not) + redento (redeemed).",
 example:"A: El movimiento irredentista buscaba recuperar territorios perdidos.\nB: Fue una fuerza política importante en el siglo XIX.",
 exampleSrc:"A: The irredentist movement sought to recover lost territories.\nB: It was an important political force in the 19th century.",
 funFact:"From Italian irredento. The term originated with Italian unification in the 1860s."},

{type:"mc", q:"Si algo es 'ingente', es:", opts:["Ligeramente diferente","Enormemente grande","Muy pequeño","Bastante normal"], ans:"Enormemente grande",
 hint:"This formal adjective describes something of vast, enormous proportions."},

{type:"fb", s:"Su voluntad de luchar por sus derechos era {1}.", a:["irreductible"], opts:["irreductible","ingente","irredento","metafísico"],
 hint:"This adjective means unyielding, impossible to reduce or weaken.",
 sSrc:"Her will to fight for her rights was {1}."},

{type:"teach", trg:"el infante", src:"the infant / prince", pos:"noun", gender:"m",
 note:"A royal child (not the heir). Also archaic: a young child.\nFeminine: la infanta.",
 example:"A: La infanta presidió el acto oficial.\nB: Los infantes tienen un papel representativo.",
 exampleSrc:"A: The princess presided over the official event.\nB: Royal children have a representative role.",
 funFact:"'Infanta' is still an active title in the Spanish royal family today."},

{type:"teach", trg:"el infierno", src:"hell", pos:"noun", gender:"m",
 note:"The underworld or a place of suffering.\nFrom Latin infernus (below).",
 example:"A: Dante describió el infierno con detalle aterrador.\nB: Su obra sigue siendo una referencia literaria.",
 exampleSrc:"A: Dante described hell in terrifying detail.\nB: His work remains a literary reference.",
 funFact:"'Irse al infierno' means to fail spectacularly. A very common colloquial expression."},

{type:"teach", trg:"infinito", src:"infinite", pos:"adj", gender:null,
 note:"Without limits or end. Also a noun: el infinito.\nIn- (not) + finito (finite).",
 example:"A: El universo parece infinito.\nB: Los científicos aún debaten si realmente lo es.",
 exampleSrc:"A: The universe seems infinite.\nB: Scientists still debate whether it truly is.",
 funFact:"In grammar, 'infinitivo' (infinitive) is the 'unlimited' form of a verb, without conjugation."},

{type:"match", pairs:[
 {trg:"ingente", src:"enormous"},
 {trg:"irreductible", src:"unyielding"},
 {trg:"metafísico", src:"metaphysical"},
 {trg:"el infante", src:"prince"},
 {trg:"infinito", src:"infinite"}
]},

{type:"fb", s:"La tarea de catalogar todos los documentos es {1}.", a:["ingente"], opts:["ingente","infinita","metafísica","irreductible"],
 hint:"This formal adjective means enormously large in quantity.",
 sSrc:"The task of cataloguing all the documents is {1}."},

{type:"mc", q:"¿Qué es una 'infanta' en la monarquía española?", opts:["La esposa del rey","La primera en la línea de sucesión","Una hija del rey que no es heredera directa","La reina madre"], ans:"Una hija del rey que no es heredera directa",
 hint:"Royal children who are not the direct heir to the throne hold this title."},

{type:"drag_fill", s:"El {1} era una idea {2} para los filósofos griegos.", blanks:{"1":"infinito","2":"metafísica"}, pool:["infinito","metafísica","ingente","irreductible"],
 hint:"The concept of endlessness was a beyond-the-physical idea for Greek thinkers."},

{type:"fb", s:"El paciente se recuperó bien de la {1} tras dos semanas.", a:["neumonía"], opts:["neumonía","fisonomía","metafísica","infancia"],
 hint:"This medical noun refers to a lung infection causing inflammation.",
 sSrc:"The patient recovered well from {1} after two weeks."},

{type:"match", pairs:[
 {trg:"la neumonía", src:"pneumonia"},
 {trg:"el estiramiento", src:"stretching"},
 {trg:"la fisonomía", src:"physiognomy"},
 {trg:"el muslo", src:"thigh"},
 {trg:"el infierno", src:"hell"}
]}
]};
export default LESSON_11;
