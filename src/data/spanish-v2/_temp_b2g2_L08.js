// B2 Gap2 Lesson 08 - Abstract Concepts
const LESSON_8 = {id:"esv2_b2g2_l8",title:"Conceptos abstractos",icon:"💭",xp:15,board:true,steps:[
{type:"intro",title:"Conceptos abstractos",desc:"Master abstract nouns that are essential for discussing ideas, certainty, and quality in advanced Spanish.",goals:["Learn 20 abstract concept words","Express certainty and doubt precisely","Discuss qualities and assessments fluently"]},

{type:"teach",trg:"la certeza",src:"the certainty",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being sure about something.",
 example:"A: No tengo la certeza de que sea verdad.\nB: Entonces deberíamos investigar más.",
 exampleSrc:"A: I do not have the certainty that it is true.\nB: Then we should investigate further.",
 funFact:"'Con certeza' (with certainty) is more formal than 'seguro' (sure) in written Spanish."},

{type:"teach",trg:"la coincidencia",src:"the coincidence",pos:"noun",gender:"f",
 note:"Feminine noun. When things happen at the same time by chance.",
 example:"A: ¡Qué coincidencia encontrarte aquí!\nB: El mundo es un pañuelo, como dicen.",
 exampleSrc:"A: What a coincidence to find you here!\nB: It is a small world, as they say.",
 funFact:"'El mundo es un pañuelo' (the world is a handkerchief) is Spain's version of 'small world'."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of uncertainty or mixing things up.",
 example:"A: Hubo una confusión con las reservas del hotel.\nB: Nos dieron la habitación equivocada.",
 exampleSrc:"A: There was a confusion with the hotel reservations.\nB: They gave us the wrong room.",
 funFact:"'Sembrar la confusión' (to sow confusion) is a common expression in Spanish politics."},

{type:"teach",trg:"la consistencia",src:"the consistency",pos:"noun",gender:"f",
 note:"Feminine noun. Firmness of texture, or reliability of behavior.",
 example:"A: La salsa necesita más consistencia.\nB: Añade un poco más de harina.",
 exampleSrc:"A: The sauce needs more consistency.\nB: Add a little more flour.",
 funFact:"Works for both physical texture and abstract reliability, just like in English."},

{type:"teach",trg:"la contemplación",src:"the contemplation",pos:"noun",gender:"f",
 note:"Feminine noun. Deep, reflective thought about something.",
 example:"A: Se quedó en contemplación ante el paisaje.\nB: Era una vista que invitaba a la reflexión.",
 exampleSrc:"A: He stood in contemplation before the landscape.\nB: It was a view that invited reflection.",
 funFact:"'Sin contemplaciones' means 'without mercy/hesitation', a very common Spanish expression."},

{type:"mc",q:"¿Qué es una coincidencia?",opts:["Algo que ocurre por casualidad al mismo tiempo","Una opinión compartida por todos","Un error en un documento","Una decisión tomada en grupo"],ans:"Algo que ocurre por casualidad al mismo tiempo",hint:"Think about unexpected events that happen at the same time by pure chance."},

{type:"teach",trg:"el convencimiento",src:"the conviction / belief",pos:"noun",gender:"m",
 note:"Masculine noun. A firm belief or the act of convincing.",
 example:"A: Tengo el convencimiento de que es inocente.\nB: ¿En qué basas esa certeza?",
 exampleSrc:"A: I have the conviction that he is innocent.\nB: What do you base that certainty on?",
 funFact:"From 'convencer' (to convince). More personal than 'convicción', which sounds more political."},

{type:"teach",trg:"la correspondencia",src:"the correspondence / mail",pos:"noun",gender:"f",
 note:"Feminine noun. Letters exchanged, or a relationship of equivalence.",
 example:"A: La correspondencia entre ambos escritores duró treinta años.\nB: Se conservan más de doscientas cartas.",
 exampleSrc:"A: The correspondence between both writers lasted thirty years.\nB: More than two hundred letters are preserved.",
 funFact:"Also used for public transport connections: 'hacer correspondencia' means to transfer lines."},

{type:"teach",trg:"la abstracción",src:"the abstraction",pos:"noun",gender:"f",
 note:"Feminine noun. The process of considering something in theory, not concretely.",
 example:"A: El arte abstracto requiere capacidad de abstracción.\nB: No todos saben apreciarlo.",
 exampleSrc:"A: Abstract art requires the capacity for abstraction.\nB: Not everyone knows how to appreciate it.",
 funFact:"Picasso said abstraction begins when reality is simplified. Spanish abstract art thrived post-war."},

{type:"teach",trg:"la adecuación",src:"the suitability / adaptation",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being appropriate for a purpose.",
 example:"A: La adecuación del local a las normas de seguridad costó mucho.\nB: Pero era imprescindible para abrir.",
 exampleSrc:"A: Adapting the venue to safety regulations cost a lot.\nB: But it was essential to open.",
 funFact:"From 'adecuar' (to adapt). The adjective 'adecuado' (suitable) is much more commonly used."},

{type:"teach",trg:"la brevedad",src:"the brevity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being short or concise.",
 example:"A: A la mayor brevedad posible, necesito el informe.\nB: Lo tendrás mañana a primera hora.",
 exampleSrc:"A: As soon as possible, I need the report.\nB: You will have it first thing tomorrow.",
 funFact:"'A la mayor brevedad' is the standard formal way to say 'as soon as possible' in business."},

{type:"fb",s:"No tengo la {1} de que eso sea verdad.",a:["certeza"],opts:["certeza","confusión","brevedad","abstracción"],hint:"The noun meaning complete sureness or certainty about something.",sSrc:"I do not have the {1} that this is true."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The space or capacity to fit something.",
 example:"A: El estadio tiene cabida para ochenta mil espectadores.\nB: Es uno de los más grandes de Europa.",
 exampleSrc:"A: The stadium has room for eighty thousand spectators.\nB: It is one of the largest in Europe.",
 funFact:"'Dar cabida a' means to make room for something, both literally and figuratively."},

{type:"teach",trg:"la compenetración",src:"the mutual understanding / rapport",pos:"noun",gender:"f",
 note:"Feminine noun. Deep understanding and harmony between people.",
 example:"A: La compenetración entre los dos músicos es perfecta.\nB: Llevan tocando juntos más de diez años.",
 exampleSrc:"A: The rapport between the two musicians is perfect.\nB: They have been playing together for more than ten years.",
 funFact:"Compound: con + penetración. The idea of 'penetrating into' each other's thinking."},

{type:"teach",trg:"la cualificación",src:"the qualification",pos:"noun",gender:"f",
 note:"Feminine noun. The skills and training needed for a job.",
 example:"A: Este puesto requiere una alta cualificación.\nB: Necesitan ingenieros con experiencia.",
 exampleSrc:"A: This position requires high qualifications.\nB: They need engineers with experience.",
 funFact:"Spain uses both 'cualificación' and 'calificación' but with different meanings. The first is skills."},

{type:"teach",trg:"la cuantía",src:"the amount / sum",pos:"noun",gender:"f",
 note:"Feminine noun. The monetary amount of something, used in formal contexts.",
 example:"A: La cuantía de la indemnización supera los mil euros.\nB: Es justo, dado los daños sufridos.",
 exampleSrc:"A: The amount of the compensation exceeds one thousand euros.\nB: It is fair, given the damages suffered.",
 funFact:"More formal than 'cantidad'. Used almost exclusively in legal and financial documents."},

{type:"mc",q:"¿Qué significa 'a la mayor brevedad posible'?",opts:["Sin ninguna prisa","Lo antes posible","Con mucha calma","De forma breve"],ans:"Lo antes posible",hint:"A formal business expression asking for something to be done quickly."},

{type:"teach",trg:"la autenticidad",src:"the authenticity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being genuine and real.",
 example:"A: Dudan de la autenticidad del cuadro.\nB: Van a analizarlo con rayos X.",
 exampleSrc:"A: They doubt the authenticity of the painting.\nB: They are going to analyze it with X-rays.",
 funFact:"Spain's art market takes autenticidad seriously. Forgeries of Goya and Dalí have made headlines."},

{type:"teach",trg:"la constatación",src:"the verification / confirmation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of confirming or verifying a fact.",
 example:"A: La constatación de los hechos llevó semanas.\nB: Pero ahora tenemos pruebas sólidas.",
 exampleSrc:"A: The verification of the facts took weeks.\nB: But now we have solid evidence.",
 funFact:"From 'constatar' (to verify). More formal than 'comprobación'. Common in academic writing."},

{type:"teach",trg:"contrastar",src:"to contrast / to verify",pos:"verb",gender:null,
 note:"Regular -ar verb. To compare differences, or to check information.",
 example:"A: Hay que contrastar la información antes de publicarla.\nB: No podemos arriesgarnos a difundir datos falsos.",
 exampleSrc:"A: We must verify the information before publishing it.\nB: We cannot risk spreading false data.",
 funFact:"Spanish journalism uses 'contrastar fuentes' (cross-check sources) as a professional standard."},

{type:"teach",trg:"corroborar",src:"to corroborate / to confirm",pos:"verb",gender:null,
 note:"Regular -ar verb. To strengthen or support with additional evidence.",
 example:"A: Los testigos corroboraron la versión del acusado.\nB: Su testimonio coincidía punto por punto.",
 exampleSrc:"A: The witnesses corroborated the defendant's version.\nB: Their testimony matched point by point.",
 funFact:"From Latin corroborare (to strengthen). Used heavily in legal and journalistic Spanish."},

{type:"fb",s:"La {1} entre los jugadores del equipo es excepcional.",a:["compenetración"],opts:["compenetración","confusión","brevedad","cuantía"],hint:"The deep mutual understanding and harmony between team members.",sSrc:"The {1} between the team's players is exceptional."},

{type:"match",pairs:[{trg:"certeza",src:"certainty"},{trg:"brevedad",src:"brevity"},{trg:"cuantía",src:"amount"},{trg:"contrastar",src:"to verify"},{trg:"corroborar",src:"to corroborate"}]}
]};

export default LESSON_8;
