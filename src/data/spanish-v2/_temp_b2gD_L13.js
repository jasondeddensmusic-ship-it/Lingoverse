// B2 Gap Batch D Lesson 13 - Formal Connectors & Discourse
const LESSON_13 = {id:"esv2_b2gD_l13",title:"Conectores y discurso",icon:"\uD83D\uDD17",xp:15,board:true,steps:[
{type:"intro",title:"Conectores y discurso",desc:"Master formal connectors, discourse markers, and relative pronouns essential for structured B2 writing and speaking.",goals:["Learn 10 connectors and discourse markers","Link ideas in complex sentences","Use formal register structures confidently"]},

{type:"teach",trg:"en cambio",src:"on the other hand / however",pos:"adv",gender:null,
 note:"Adverbial phrase. Introduces a contrast with the previous idea.\nMore formal than 'pero' or 'sin embargo'.",
 example:"A: A mí me gusta el calor. En cambio, mi hermana prefiere el frío.\nB: Sois muy diferentes en gustos.",
 exampleSrc:"A: I like the heat. On the other hand, my sister prefers the cold.\nB: You two are very different in taste.",
 funFact:"'En cambio' literally means 'in exchange'. It signals a sharper contrast than 'sin embargo', which is more concessive."},

{type:"teach",trg:"a partir de",src:"starting from / as of",pos:"prep",gender:null,
 note:"Prepositional phrase. Marks a starting point in time or space.\nA partir de ahora: from now on.",
 example:"A: A partir de septiembre, las clases empiezan a las ocho.\nB: Entonces tendremos que madrugar más.",
 exampleSrc:"A: Starting from September, classes begin at eight.\nB: Then we'll have to get up earlier.",
 funFact:"'A partir de' is preferred over 'desde' when emphasizing the beginning of a new situation or rule."},

{type:"teach",trg:"el cual",src:"which / whom (formal relative)",pos:"pron",gender:null,
 note:"Relative pronoun. Formal alternative to 'que'.\nForms: el cual, la cual, los cuales, las cuales.",
 example:"A: El proyecto, el cual fue aprobado ayer, empezará en mayo.\nB: Es una gran noticia para todo el departamento.",
 exampleSrc:"A: The project, which was approved yesterday, will begin in May.\nB: It's great news for the whole department.",
 funFact:"'El cual' is used after prepositions and in non-restrictive clauses. Academic writing favors it over 'que' for clarity."},

{type:"teach",trg:"partícipe",src:"participant / party to something",pos:"adj",gender:null,
 note:"Adjective/noun. Someone who takes part in something.\nHacer partícipe: to include someone.",
 example:"A: Quiero hacerte partícipe de una decisión importante.\nB: Te escucho, dime qué has decidido.",
 exampleSrc:"A: I want to include you in an important decision.\nB: I'm listening, tell me what you've decided.",
 funFact:"'Hacer partícipe' is a very formal construction. In everyday Spanish, 'incluir' or 'contar con' are preferred."},

{type:"mc",q:"'En cambio' se usa para...",opts:["Introducir un contraste","Añadir información similar","Dar un ejemplo","Concluir un argumento"],ans:"Introducir un contraste",hint:"This connector highlights a difference or opposition between two ideas."},

{type:"teach",trg:"la complementación",src:"the complementation / supplementing",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing.\nFrom complementar (to complement).",
 example:"A: La complementación entre teoría y práctica es esencial.\nB: No se puede aprender solo con libros.",
 exampleSrc:"A: The complementation between theory and practice is essential.\nB: You can't learn only from books.",
 funFact:"In linguistics, 'complementación' refers to how verbs require certain structures: 'querer' needs a complement (quiero pan, quiero ir)."},

{type:"teach",trg:"la finalización",src:"the completion / finalization",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing or concluding.\nFrom finalizar (to finalize).",
 example:"A: La finalización del proyecto está prevista para diciembre.\nB: Si no hay retrasos, cumpliremos el plazo.",
 exampleSrc:"A: The completion of the project is scheduled for December.\nB: If there are no delays, we'll meet the deadline.",
 funFact:"Spanish business writing prefers 'finalización' over 'terminación'. Both mean completion, but 'finalización' sounds more formal."},

{type:"teach",trg:"el mejoramiento",src:"the improvement / betterment",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something better.\nMore formal than 'mejora'.",
 example:"A: El mejoramiento de las infraestructuras es una prioridad.\nB: Las carreteras de esta zona están en muy mal estado.",
 exampleSrc:"A: The improvement of infrastructure is a priority.\nB: The roads in this area are in very poor condition.",
 funFact:"'Mejoramiento' is preferred in Latin American formal writing. In Spain, 'mejora' is more common in everyday language."},

{type:"fb",s:"El proyecto, {1} fue aprobado ayer, empezará en mayo.",a:["el cual"],opts:["el cual","en cambio","a partir de","partícipe"],hint:"A formal relative pronoun meaning 'which', used in non-restrictive clauses after commas.",sSrc:"The project, {1} was approved yesterday, will begin in May."},

{type:"teach",trg:"el lineamiento",src:"the guideline / policy direction",pos:"noun",gender:"m",
 note:"Masculine noun. A general direction or policy framework.\nMore abstract than 'pauta' (specific guideline).",
 example:"A: Los lineamientos del plan educativo fueron aprobados por el ministerio.\nB: Ahora cada comunidad autónoma debe implementarlos.",
 exampleSrc:"A: The guidelines of the education plan were approved by the ministry.\nB: Now each autonomous community must implement them.",
 funFact:"'Lineamiento' comes from 'línea' (line). It's especially common in Latin American official documents and government policy."},

{type:"teach",trg:"el perfeccionamiento",src:"the improvement / refinement",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something perfect.\nCurso de perfeccionamiento: advanced training course.",
 example:"A: Hizo un curso de perfeccionamiento del inglés en Londres.\nB: Ahora habla con mucha más fluidez.",
 exampleSrc:"A: He took an English improvement course in London.\nB: Now he speaks much more fluently.",
 funFact:"'Perfeccionamiento profesional' (professional development) is the formal term used in Spanish HR departments."},

{type:"match",pairs:[
 {trg:"en cambio",src:"on the other hand"},
 {trg:"a partir de",src:"starting from"},
 {trg:"el cual",src:"which (formal)"},
 {trg:"finalización",src:"completion"},
 {trg:"perfeccionamiento",src:"refinement"}
]},

{type:"mc",q:"'A partir de' marca...",opts:["Un punto de inicio en el tiempo","El final de un proceso","Una comparación entre dos ideas","Una causa y su efecto"],ans:"Un punto de inicio en el tiempo",hint:"This phrase indicates when something begins. Think of a timeline with a clear starting point."},

{type:"fb",s:"La {1} del curso está prevista para el 30 de junio.",a:["finalización"],opts:["finalización","complementación","mejoramiento","perfeccionamiento"],hint:"The formal noun for the act of finishing or concluding a process.",sSrc:"The {1} of the course is scheduled for June 30th."},

{type:"mc",q:"'Hacer partícipe a alguien' significa...",opts:["Incluirlo en algo importante","Excluirlo de una decisión","Criticar su comportamiento","Darle un regalo"],ans:"Incluirlo en algo importante",hint:"To make someone a part of something, to share information or include them in a process."}
]};
export default LESSON_13;
