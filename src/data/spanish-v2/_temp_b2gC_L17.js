// B2 Gap Batch C Lesson 17 - Technology & Innovation
const LESSON_17 = {id:"esv2_b2gC_l17",title:"Tecnología e innovación",icon:"💡",xp:15,board:true,steps:[
{type:"intro",title:"Tecnología e innovación",desc:"Learn vocabulary for technology, digital innovation, and the knowledge economy in the Spanish-speaking world.",goals:["Learn 12 words about technology and innovation","Discuss digital transformation and computing","Use tech industry vocabulary"]},

{type:"teach",trg:"el computador",src:"the computer",pos:"noun",gender:"m",
 note:"Masculine noun. Used in Latin America.\nIn Spain: el ordenador.",
 example:"A: Mi computador necesita más memoria RAM.\nB: En España dirían 'ordenador', pero aquí decimos 'computador'.",
 exampleSrc:"A: My computer needs more RAM.\nB: In Spain they would say 'ordenador', but here we say 'computador'.",
 funFact:"Spain uses 'ordenador' (from French ordinateur), while Latin America uses 'computador/computadora' (from English)."},

{type:"teach",trg:"el mejoramiento",src:"the improvement / enhancement",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something better.\nMore common in Latin America.",
 example:"A: El mejoramiento de la infraestructura digital es prioritario.\nB: Sin buena conexión, no hay transformación digital.",
 exampleSrc:"A: The improvement of digital infrastructure is a priority.\nB: Without good connectivity, there is no digital transformation.",
 funFact:"In Peninsular Spanish, 'mejora' is more common than 'mejoramiento', but both are correct."},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine compound noun. A newspaper published online.\nAlso: periódico digital.",
 example:"A: Cada vez más personas leen el diario digital en vez del papel.\nB: Es más barato y se actualiza en tiempo real.",
 exampleSrc:"A: More and more people read the online newspaper instead of print.\nB: It's cheaper and updates in real time.",
 funFact:"Spain's digital newspaper readership surpassed print in 2015. El Confidencial is a digital-only success story."},

{type:"teach",trg:"la ciencia de la información",src:"the information science",pos:"noun",gender:"f",
 note:"Feminine compound noun. The study of information systems.\nAcademic field related to library/data science.",
 example:"A: Estudié ciencias de la información en la universidad.\nB: Es una carrera con muchas salidas profesionales.",
 exampleSrc:"A: I studied information science at university.\nB: It's a degree with many career opportunities.",
 funFact:"In Spain, this degree was traditionally linked to journalism schools before evolving into data science."},

{type:"mc",q:"¿Cómo se dice 'computer' en la mayor parte de Latinoamérica?",opts:["Computador o computadora","Ordenador","Calculadora","Procesador"],ans:"Computador o computadora",hint:"This word comes directly from the English term, unlike the word used in Spain."},

{type:"teach",trg:"el día",src:"the day",pos:"noun",gender:"m",
 note:"Masculine noun despite ending in -a.\nFrom Latin dies (day).",
 example:"A: ¿Qué día es la presentación del nuevo producto?\nB: El jueves, a las diez de la mañana.",
 exampleSrc:"A: What day is the new product presentation?\nB: Thursday, at ten in the morning.",
 funFact:"'Día' is masculine despite ending in -a because it comes from Latin dies (masculine). A classic Spanish exception."},

{type:"teach",trg:"en cambio",src:"on the other hand / instead",pos:"adv",gender:null,
 note:"Adverbial phrase. Introduces a contrast.\nMore formal than 'pero' for contrasting.",
 example:"A: El proyecto A fracasó. En cambio, el proyecto B fue un éxito.\nB: Deberíamos analizar qué hicimos diferente.",
 exampleSrc:"A: Project A failed. On the other hand, Project B was a success.\nB: We should analyze what we did differently.",
 funFact:"'En cambio' is a discourse marker that appears constantly in Spanish academic and journalistic writing."},

{type:"teach",trg:"a partir de",src:"from (a point in time/space) / starting from",pos:"prep",gender:null,
 note:"Prepositional phrase. Indicates a starting point.\nVery frequent in formal Spanish.",
 example:"A: A partir de mañana, el nuevo horario entrará en vigor.\nB: Entonces empezaremos media hora antes.",
 exampleSrc:"A: Starting from tomorrow, the new schedule will take effect.\nB: Then we'll start half an hour earlier.",
 funFact:"'A partir de' is one of the most useful B2 connectors. It works for time, quantity, and abstract concepts."},

{type:"fb",s:"El proyecto A fracasó. {1}, el proyecto B fue un éxito total.",a:["En cambio"],opts:["En cambio","A partir de","En caso de","Sin embargo"],hint:"A two-word phrase used to introduce a contrasting idea, meaning 'on the other hand'.",sSrc:"Project A failed. {1}, Project B was a total success."},

{type:"teach",trg:"como que no",src:"no way / as if not",pos:"adv",gender:null,
 note:"Colloquial expression. Emphatic disagreement.\nUsed in informal conversation.",
 example:"A: ¿Le prestaste dinero otra vez? Como que no va a devolvértelo.\nB: Esta vez me ha prometido que sí.",
 exampleSrc:"A: You lent him money again? No way he's going to pay you back.\nB: This time he promised me he would.",
 funFact:"This colloquial expression is typical of informal Peninsular Spanish and shows skepticism or disbelief."},

{type:"teach",trg:"justo a tiempo",src:"just in time",pos:"adv",gender:null,
 note:"Adverbial phrase. Arriving at the exact right moment.\nAlso a manufacturing method (JIT).",
 example:"A: Llegaste justo a tiempo para la reunión.\nB: Por poco no llego, había mucho tráfico.",
 exampleSrc:"A: You arrived just in time for the meeting.\nB: I almost didn't make it, there was a lot of traffic.",
 funFact:"In manufacturing, 'justo a tiempo' (JIT) is a production strategy that minimizes inventory waste."},

{type:"teach",trg:"en casa",src:"at home",pos:"adv",gender:null,
 note:"Adverbial phrase. In one's own home.\nAlso figurative: comfortable, in familiar territory.",
 example:"A: Prefiero trabajar en casa los viernes.\nB: El teletrabajo ha cambiado la forma de vivir.",
 exampleSrc:"A: I prefer to work from home on Fridays.\nB: Remote work has changed the way we live.",
 funFact:"Since 2020, 'trabajar en casa' and 'teletrabajo' have become part of everyday Spanish vocabulary."},

{type:"mc",q:"¿Qué expresión indica un punto de inicio en el tiempo?",opts:["A partir de","En cambio","Como que no","Justo a tiempo"],ans:"A partir de",hint:"This two-word prepositional phrase means 'starting from' a specific moment."},

{type:"fb",s:"{1} el lunes, el nuevo sistema estará operativo.",a:["A partir de"],opts:["A partir de","En cambio","Justo a tiempo","En casa"],hint:"A prepositional phrase meaning 'starting from' or 'as of' a particular date.",sSrc:"{1} Monday, the new system will be operational."},

{type:"match",pairs:[{trg:"computador",src:"computer (Latin America)"},{trg:"en cambio",src:"on the other hand"},{trg:"a partir de",src:"starting from"},{trg:"justo a tiempo",src:"just in time"},{trg:"como que no",src:"no way"}]}
]};

export default LESSON_17;
