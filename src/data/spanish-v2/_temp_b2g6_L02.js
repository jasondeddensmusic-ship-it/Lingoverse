// B2 Gap Batch 6 Lesson 02 - Media & Communication
const LESSON_2 = {id:"esv2_b2g6_l2",title:"Medios y comunicación",icon:"📡",xp:15,board:true,steps:[
{type:"intro",title:"Medios y comunicación",desc:"Explore vocabulary related to media, journalism, and modern communication in the Spanish-speaking world.",goals:["Learn 15 media and communication terms","Discuss journalism and digital media","Use media vocabulary in context"]},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine noun. A newspaper published online.\nDigital specifies the format.",
 example:"A: ¿Lees algún diario digital?\nB: Sí, leo El País y eldiario.es cada mañana.",
 exampleSrc:"A: Do you read any online newspaper?\nB: Yes, I read El País and eldiario.es every morning.",
 funFact:"Spain's El País was the first major Spanish newspaper to launch a full digital edition in 1996."},

{type:"teach",trg:"la comunicación empresarial",src:"corporate communication",pos:"noun",gender:"f",
 note:"Feminine noun phrase. Communication within or\nby a company. Empresarial means corporate.",
 example:"A: La comunicación empresarial ha mejorado mucho.\nB: Sí, ahora usamos una plataforma interna.",
 exampleSrc:"A: Corporate communication has improved a lot.\nB: Yes, now we use an internal platform.",
 funFact:"'Comunicación corporativa' and 'comunicación empresarial' are used interchangeably in Spain."},

{type:"teach",trg:"el entrevistador",src:"the interviewer",pos:"noun",gender:"m",
 note:"Masculine noun. The person who conducts interviews.\nFeminine: la entrevistadora.",
 example:"A: El entrevistador hizo preguntas muy difíciles.\nB: Normal, es un periodista con mucha experiencia.",
 exampleSrc:"A: The interviewer asked very difficult questions.\nB: Normal, he is a journalist with a lot of experience.",
 funFact:"From entre (between) + vista (view). An interview is literally a 'between-seeing'."},

{type:"teach",trg:"la filmografía",src:"the filmography",pos:"noun",gender:"f",
 note:"Feminine noun. The complete list of films by a director\nor actor. Film + grafía (writing).",
 example:"A: La filmografía de Almodóvar es impresionante.\nB: Tiene más de veinte películas.",
 exampleSrc:"A: Almodóvar's filmography is impressive.\nB: He has more than twenty films.",
 funFact:"Pedro Almodóvar is Spain's most internationally recognized filmmaker, with two Academy Awards."},

{type:"mc",q:"¿Qué es un diario digital?",opts:["Un periódico publicado en internet","Una agenda electrónica","Un programa de televisión","Un blog personal"],ans:"Un periódico publicado en internet",hint:"A newspaper that exists online rather than in print."},

{type:"teach",trg:"el folletín",src:"the serial / serialized story",pos:"noun",gender:"m",
 note:"Masculine noun. A story published in installments.\nDiminutive of folleto (pamphlet).",
 example:"A: Las novelas del siglo XIX se publicaban como folletines.\nB: Sí, los lectores esperaban cada capítulo con ansiedad.",
 exampleSrc:"A: Nineteenth-century novels were published as serials.\nB: Yes, readers waited for each chapter with anxiety.",
 funFact:"The folletín tradition influenced telenovelas, which are essentially televised serial stories."},

{type:"teach",trg:"la coproducción",src:"the co-production",pos:"noun",gender:"f",
 note:"Feminine noun. A joint production between\ntwo or more companies or countries.",
 example:"A: Esta película es una coproducción hispano-francesa.\nB: Por eso tiene actores de los dos países.",
 exampleSrc:"A: This film is a Spanish-French co-production.\nB: That is why it has actors from both countries.",
 funFact:"Spain co-produces more films with Latin America than with any European country."},

{type:"teach",trg:"la dirección comercial",src:"the commercial management / sales direction",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The department or role\noverseeing sales strategy.",
 example:"A: La dirección comercial aprobó la nueva estrategia.\nB: Esperan aumentar las ventas un veinte por ciento.",
 exampleSrc:"A: The commercial management approved the new strategy.\nB: They expect to increase sales by twenty percent.",
 funFact:"In Spanish business, 'dirección' can mean both 'address' and 'management/leadership'."},

{type:"fb",s:"El {1} hizo preguntas incómodas al político.",a:["entrevistador"],opts:["entrevistador","diario digital","folletín","fundador"],hint:"The person whose job is to ask questions in interviews.",sSrc:"The {1} asked uncomfortable questions to the politician."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A statement of exact meaning.\nFrom Latin definitio.",
 example:"A: ¿Cuál es la definición de periodismo de calidad?\nB: Informar con rigor, veracidad y ética.",
 exampleSrc:"A: What is the definition of quality journalism?\nB: Reporting with rigor, truthfulness, and ethics.",
 funFact:"The RAE (Real Academia Española) publishes the most authoritative definitions of Spanish words."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Representing something as larger\nor more extreme than it really is.",
 example:"A: Decir que es el mejor libro del siglo es una exageración.\nB: Bueno, es muy bueno, pero tienes razón.",
 exampleSrc:"A: Saying it is the best book of the century is an exaggeration.\nB: Well, it is very good, but you are right.",
 funFact:"Spanish speakers often use exaggeration humorously: 'Tengo un hambre que me muero' (I am so hungry I could die)."},

{type:"teach",trg:"la ilustración",src:"the illustration / the Enlightenment",pos:"noun",gender:"f",
 note:"Feminine noun. A drawing in a publication, or the\nhistorical Enlightenment period.",
 example:"A: Las ilustraciones del libro son preciosas.\nB: Sí, el ilustrador es muy conocido.",
 exampleSrc:"A: The illustrations in the book are beautiful.\nB: Yes, the illustrator is very well known.",
 funFact:"Capitalized, 'la Ilustración' refers to the 18th-century Enlightenment. Lowercase means a drawing or picture."},

{type:"teach",trg:"el ilustrador",src:"the illustrator",pos:"noun",gender:"m",
 note:"Masculine noun. An artist who creates illustrations.\nFeminine: la ilustradora.",
 example:"A: Mi hermana trabaja como ilustradora freelance.\nB: ¿Para qué tipo de publicaciones?",
 exampleSrc:"A: My sister works as a freelance illustrator.\nB: For what type of publications?",
 funFact:"Spain has a strong tradition of comic illustration, especially in Barcelona's underground scene."},

{type:"mc",q:"¿Qué es una coproducción?",opts:["Un proyecto realizado entre varios productores","Un periódico local","Una entrevista en televisión","Un tipo de publicidad"],ans:"Un proyecto realizado entre varios productores",hint:"The prefix 'co-' means together. Multiple parties producing something jointly."},

{type:"match",pairs:[
  {trg:"diario digital",src:"online newspaper"},
  {trg:"entrevistador",src:"interviewer"},
  {trg:"filmografía",src:"filmography"},
  {trg:"folletín",src:"serial story"},
  {trg:"ilustrador",src:"illustrator"}
]},

{type:"fb",s:"La {1} de este libro infantil fue premiada.",a:["ilustración"],opts:["ilustración","exageración","definición","coproducción"],hint:"The drawings or artwork in a publication.",sSrc:"The {1} of this children's book was awarded a prize."}
]};
export default LESSON_2;
