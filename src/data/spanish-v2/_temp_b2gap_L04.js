// B2 Gap Lesson 04 - Business & Work
const LESSON_4 = {id:"esv2_b2gap_l4",title:"Negocios y trabajo",icon:"💼",xp:15,board:true,steps:[
{type:"intro",title:"Negocios y trabajo",desc:"Master essential business and employment vocabulary for the professional world.",goals:["Learn 20 words about business and employment","Discuss work roles and economics","Use professional vocabulary accurately"]},

{type:"teach",trg:"el administrador",src:"the administrator",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who manages.\nFeminine: la administradora.",
 example:"A: El administrador de la finca resolvió el problema.\nB: Menos mal, llevábamos semanas esperando.",
 exampleSrc:"A: The building administrator solved the problem.\nB: Thank goodness, we had been waiting for weeks.",
 funFact:"In Spain, 'administrador de fincas' manages apartment buildings, a common and regulated profession."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay raise",pos:"noun",gender:"m",
 note:"Masculine compound noun. Aumento (increase) + de sueldo (of salary).",
 example:"A: ¿Pediste el aumento de sueldo?\nB: Sí, y me lo aprobaron a partir del mes que viene.",
 exampleSrc:"A: Did you ask for the pay raise?\nB: Yes, and they approved it starting next month.",
 funFact:"In Spain, many salaries are paid in 14 installments: 12 monthly plus two 'pagas extra'."},

{type:"teach",trg:"el becario",src:"the intern",pos:"noun",gender:"m",
 note:"Masculine noun. A trainee or scholarship holder.\nFeminine: la becaria.",
 example:"A: El becario aprende muy rápido.\nB: Seguro que le ofrecen un contrato.",
 exampleSrc:"A: The intern learns very quickly.\nB: I am sure they will offer him a contract.",
 funFact:"From beca (scholarship). Spanish internships have been criticized for low or no pay."},

{type:"teach",trg:"el asalariado",src:"the salaried worker",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who earns a salary.\nFeminine: la asalariada.",
 example:"A: Los asalariados pagan impuestos cada mes.\nB: A través de la nómina, directamente.",
 exampleSrc:"A: Salaried workers pay taxes every month.\nB: Through their payroll, directly.",
 funFact:"From salario, from Latin salarium (salt money). Roman soldiers were supposedly paid in salt."},

{type:"teach",trg:"el autónomo",src:"the self-employed person",pos:"noun",gender:"m",
 note:"Masculine noun. A freelancer or self-employed worker.\nFeminine: la autónoma.",
 example:"A: Soy autónomo desde hace tres años.\nB: ¿Es difícil gestionar los impuestos?",
 exampleSrc:"A: I have been self-employed for three years.\nB: Is it difficult to manage taxes?",
 funFact:"Spain has over 3 million 'autónomos'. Their monthly social security fee is a hot political topic."},

{type:"mc",q:"Una persona que trabaja por cuenta propia es un:",opts:["autónomo","administrador","becario","asalariado"],ans:"autónomo",hint:"This person does not have an employer, they work for themselves."},

{type:"teach",trg:"el comercio exterior",src:"the foreign trade",pos:"noun",gender:"m",
 note:"Masculine compound noun. Trade between countries.",
 example:"A: El comercio exterior creció un cinco por ciento.\nB: Las exportaciones de fruta fueron clave.",
 exampleSrc:"A: Foreign trade grew by five percent.\nB: Fruit exports were key.",
 funFact:"Spain is the world's largest exporter of olive oil, a major part of its 'comercio exterior'."},

{type:"teach",trg:"competente",src:"competent",pos:"adj",gender:null,
 note:"Adjective. Having the ability to do something well. Invariable.",
 example:"A: Necesitamos a alguien competente para el puesto.\nB: El candidato de ayer parecía muy preparado.",
 exampleSrc:"A: We need someone competent for the position.\nB: Yesterday's candidate seemed very prepared.",
 funFact:"In legal Spanish, 'tribunal competente' means the court with jurisdiction over a case."},

{type:"teach",trg:"competitivo",src:"competitive",pos:"adj",gender:null,
 note:"Adjective. Able to compete well.\nFeminine: competitiva.",
 example:"A: Los precios son muy competitivos.\nB: Más baratos que en la competencia.",
 exampleSrc:"A: The prices are very competitive.\nB: Cheaper than the competition.",
 funFact:"'Ventaja competitiva' (competitive advantage) is a key concept in Spanish business schools."},

{type:"teach",trg:"la competitividad",src:"the competitiveness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being competitive.",
 example:"A: La competitividad del sector ha aumentado.\nB: Hay más empresas compitiendo por los mismos clientes.",
 exampleSrc:"A: The competitiveness of the sector has increased.\nB: There are more companies competing for the same clients.",
 funFact:"Spain ranks around 30th globally in competitiveness indexes, aiming to improve through innovation."},

{type:"fb",s:"El {1} gestiona todos los asuntos del edificio.",a:["administrador"],opts:["administrador","becario","autónomo","asalariado"],hint:"The person who manages a property or organization.",sSrc:"The {1} manages all the building's affairs."},

{type:"teach",trg:"compaginar",src:"to combine / to balance",pos:"verb",gender:null,
 note:"Regular -ar verb. To juggle multiple activities.",
 example:"A: ¿Cómo compaginas trabajo y estudios?\nB: Es difícil, pero me organizo bien.",
 exampleSrc:"A: How do you balance work and studies?\nB: It is difficult, but I organize myself well.",
 funFact:"From Latin compaginare (to join pages together). Balancing tasks is like binding pages."},

{type:"teach",trg:"el computador",src:"the computer",pos:"noun",gender:"m",
 note:"Masculine noun. Peninsular Spanish prefers 'ordenador'.\nCommon in Latin America.",
 example:"A: ¿Funciona bien el computador nuevo?\nB: Sí, es mucho más rápido que el anterior.",
 exampleSrc:"A: Does the new computer work well?\nB: Yes, it is much faster than the previous one.",
 funFact:"In Spain, 'ordenador' is standard. In Latin America, 'computador' or 'computadora' is used."},

{type:"teach",trg:"computar",src:"to compute / to count",pos:"verb",gender:null,
 note:"Regular -ar verb. To calculate or count toward a total.",
 example:"A: Esas horas no computan para el total.\nB: Entonces no llegaré al mínimo.",
 exampleSrc:"A: Those hours do not count toward the total.\nB: Then I will not reach the minimum.",
 funFact:"From Latin computare (to reckon). English 'computer' and Spanish 'computar' share this root."},

{type:"teach",trg:"el autoservicio",src:"the self-service",pos:"noun",gender:"m",
 note:"Masculine noun. A self-service shop or system.",
 example:"A: Hay un autoservicio abierto las veinticuatro horas.\nB: Perfecto para compras de última hora.",
 exampleSrc:"A: There is a self-service shop open twenty-four hours.\nB: Perfect for last-minute shopping.",
 funFact:"Auto- (self) + servicio (service). Spain's first supermarkets in the 1960s were called 'autoservicios'."},

{type:"mc",q:"Compaginar trabajo y familia significa:",opts:["Abandonar uno de los dos","Equilibrar ambas responsabilidades","Trabajar más horas","Pedir un aumento"],ans:"Equilibrar ambas responsabilidades",hint:"Think about juggling or balancing multiple things at once."},

{type:"teach",trg:"el autoconsumo",src:"the self-consumption",pos:"noun",gender:"m",
 note:"Masculine noun. Producing goods for your own use.",
 example:"A: El autoconsumo de energía solar está creciendo.\nB: Cada vez más familias instalan paneles.",
 exampleSrc:"A: Self-consumption of solar energy is growing.\nB: More and more families are installing panels.",
 funFact:"Spain passed a 'sun tax' in 2015, later repealed in 2018, that penalized solar self-consumption."},

{type:"teach",trg:"la calificación",src:"the grade / rating",pos:"noun",gender:"f",
 note:"Feminine noun. A score given to evaluate something.",
 example:"A: Mi calificación en matemáticas fue sobresaliente.\nB: Enhorabuena, eso es un diez.",
 exampleSrc:"A: My grade in mathematics was outstanding.\nB: Congratulations, that is a ten.",
 funFact:"Spanish grades: suspenso (fail), aprobado (pass), notable (good), sobresaliente (outstanding)."},

{type:"teach",trg:"la clasificación",src:"the classification / rankings",pos:"noun",gender:"f",
 note:"Feminine noun. A ranking or the act of sorting.",
 example:"A: España subió en la clasificación mundial.\nB: Ya está entre los diez primeros.",
 exampleSrc:"A: Spain rose in the world rankings.\nB: It is now in the top ten.",
 funFact:"In football, 'la clasificación' is the league table. Every Monday, Spaniards check it."},

{type:"teach",trg:"el asociado",src:"the associate / partner",pos:"noun",gender:"m",
 note:"Masculine noun. A business partner or member.\nFeminine: la asociada.",
 example:"A: Mi asociado se encarga de las finanzas.\nB: Es importante tener un buen socio.",
 exampleSrc:"A: My associate handles the finances.\nB: It is important to have a good partner.",
 funFact:"'Asociado' implies a formal link. 'Socio' is more common in everyday business Spanish."},

{type:"teach",trg:"el cliente",src:"the client / customer",pos:"noun",gender:"m",
 note:"Common gender noun. La cliente for feminine.\nFrom Latin cliens.",
 example:"A: El cliente siempre tiene la razón.\nB: Eso dicen, pero no siempre es verdad.",
 exampleSrc:"A: The customer is always right.\nB: So they say, but it is not always true.",
 funFact:"The phrase 'el cliente siempre tiene la razón' is as common in Spain as in English-speaking countries."},

{type:"fb",s:"Los {1} pagan sus impuestos a través de la nómina.",a:["asalariados"],opts:["asalariados","autónomos","becarios","clientes"],hint:"Workers who receive a fixed salary from an employer.",sSrc:"The {1} pay their taxes through their payroll."},

{type:"mc",q:"La nota más alta en el sistema español es:",opts:["notable","aprobado","sobresaliente","suficiente"],ans:"sobresaliente",hint:"Think about what 'outstanding' translates to in Spanish grades."},

{type:"match",pairs:[{trg:"becario",src:"intern"},{trg:"autónomo",src:"self-employed"},{trg:"asalariado",src:"salaried worker"},{trg:"cliente",src:"customer"},{trg:"calificación",src:"grade / rating"}]},

{type:"fb",s:"La {1} del sector tecnológico es cada vez mayor.",a:["competitividad"],opts:["competitividad","calificación","clasificación","conformidad"],hint:"The quality of being able to compete effectively in a market.",sSrc:"The {1} of the tech sector is increasingly high."},

{type:"mc",q:"¿Qué significa 'compaginar trabajo y estudios'?",opts:["Estudiar más","Buscar un becario","Dejar de trabajar","Equilibrar ambas actividades"],ans:"Equilibrar ambas actividades",hint:"Balancing two things so neither suffers."}
]};

export default LESSON_4;
