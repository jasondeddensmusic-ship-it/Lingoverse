// B2 Gap Batch B Lesson 01 — Business & Negotiation
const LESSON_1 = {id:"esv2_b2gB_l1",title:"Negocios y negociaciones",icon:"🤝",xp:15,board:true,steps:[
{type:"intro",title:"Negocios y negociaciones",desc:"Master the language of business negotiations, corporate roles, and professional agreements in Spanish.",goals:["Learn 12 words related to business and negotiation","Discuss corporate structures and deals","Use formal register in professional contexts"]},

{type:"teach",trg:"la negociación",src:"the negotiation",pos:"noun",gender:"f",
 note:"Feminine noun. From negocio (business).\nPlural: negociaciones.",
 example:"A: La negociación con la empresa duró tres meses.\nB: Al final, llegaron a un acuerdo beneficioso.",
 exampleSrc:"A: The negotiation with the company lasted three months.\nB: In the end, they reached a beneficial agreement.",
 funFact:"From Latin negotium (not leisure). Romans saw business as the opposite of otium (leisure)."},

{type:"teach",trg:"el negociador",src:"the negotiator",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la negociadora.\nSomeone who conducts negotiations.",
 example:"A: El negociador principal tiene mucha experiencia.\nB: Ha trabajado en acuerdos internacionales.",
 exampleSrc:"A: The lead negotiator has a lot of experience.\nB: He has worked on international agreements.",
 funFact:"In Spain, 'negociador social' refers specifically to someone who mediates between unions and employers."},

{type:"teach",trg:"el convenio colectivo",src:"the collective agreement",pos:"noun",gender:"m",
 note:"Masculine compound noun. A formal labor contract.\nBetween employers and workers' representatives.",
 example:"A: El convenio colectivo establece los salarios mínimos.\nB: Se renueva cada dos años.",
 exampleSrc:"A: The collective agreement establishes minimum wages.\nB: It is renewed every two years.",
 funFact:"Spain has one of the most regulated collective bargaining systems in Europe, covering most workers."},

{type:"teach",trg:"la contraprestación",src:"the consideration / compensation",pos:"noun",gender:"f",
 note:"Feminine noun. Something given in exchange.\nLegal and business term.",
 example:"A: ¿Cuál es la contraprestación por este servicio?\nB: Ofrecemos un descuento del veinte por ciento.",
 exampleSrc:"A: What is the compensation for this service?\nB: We offer a twenty percent discount.",
 funFact:"From contra (against) + prestación (provision). Essential in Spanish contract law."},

{type:"mc",q:"¿Qué es un convenio colectivo?",
 opts:["Un acuerdo laboral entre empresas y trabajadores","Un contrato de compraventa","Una ley del gobierno","Un acuerdo entre dos países"],
 ans:"Un acuerdo laboral entre empresas y trabajadores",
 hint:"Think about what is negotiated between employers and employees as a group."},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la coordinadora.\nSomeone who organizes activities.",
 example:"A: La coordinadora del proyecto ha convocado una reunión.\nB: Quiere revisar los plazos de entrega.",
 exampleSrc:"A: The project coordinator has called a meeting.\nB: She wants to review the delivery deadlines.",
 funFact:"In Spanish universities, 'coordinador de grado' is the person who oversees an entire degree program."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay raise",pos:"noun",gender:"m",
 note:"Masculine compound phrase. Aumento (increase) + de sueldo (of salary).",
 example:"A: He pedido un aumento de sueldo a mi jefa.\nB: ¿Y qué te ha dicho?\nA: Que lo estudiarán el mes que viene.",
 exampleSrc:"A: I asked my boss for a pay raise.\nB: And what did she say?\nA: That they will consider it next month.",
 funFact:"In Spain, the average annual salary review happens in January, tied to inflation and convenio updates."},

{type:"teach",trg:"el jefe",src:"the boss / chief",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la jefa.\nFrom French chef, which comes from Latin caput (head).",
 example:"A: Mi jefe es bastante exigente con los plazos.\nB: El mío también, pero es justo.",
 exampleSrc:"A: My boss is quite demanding with deadlines.\nB: Mine too, but he is fair.",
 funFact:"In informal Spanish, 'jefe' is used affectionately to address friends, similar to 'boss' in English."},

{type:"fb",s:"La {1} entre los sindicatos y la empresa fue muy difícil.",
 a:["negociación"],opts:["negociación","coordinador","contraprestación","convenio"],
 hint:"The process of discussing terms between two parties to reach an agreement.",
 sSrc:"The {1} between the unions and the company was very difficult."},

{type:"teach",trg:"la nómina",src:"the payroll / payslip",pos:"noun",gender:"f",
 note:"Feminine noun. The list of employees and their salaries.\nAlso the individual payslip.",
 example:"A: ¿Has revisado tu nómina de este mes?\nB: Sí, han incluido las horas extra.",
 exampleSrc:"A: Have you checked your payslip this month?\nB: Yes, they included the overtime hours.",
 funFact:"From Latin nominalis (of a name). The nómina literally started as a list of names."},

{type:"teach",trg:"el mediador",src:"the mediator",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la mediadora.\nA neutral party who helps resolve disputes.",
 example:"A: Hemos contratado a un mediador profesional.\nB: Es la mejor opción antes de ir a juicio.",
 exampleSrc:"A: We have hired a professional mediator.\nB: It is the best option before going to court.",
 funFact:"Mediation (mediación) has grown rapidly in Spain since the 2012 law encouraging it over litigation."},

{type:"teach",trg:"la mediación",src:"the mediation",pos:"noun",gender:"f",
 note:"Feminine noun. The process of resolving a dispute.\nWith the help of a neutral third party.",
 example:"A: La mediación evitó un largo juicio.\nB: Ambas partes quedaron satisfechas.",
 exampleSrc:"A: The mediation avoided a long trial.\nB: Both parties were satisfied.",
 funFact:"Spain requires mediation attempts before certain types of lawsuits can proceed."},

{type:"mc",q:"¿Qué aparece en una nómina?",
 opts:["El salario y las deducciones del trabajador","Los productos de una tienda","Las notas de un estudiante","Los horarios de los trenes"],
 ans:"El salario y las deducciones del trabajador",
 hint:"Think about what a worker receives at the end of each month showing their earnings."},

{type:"teach",trg:"la intermediación",src:"the intermediation / brokerage",pos:"noun",gender:"f",
 note:"Feminine noun. Acting as a go-between.\nCommon in finance and real estate.",
 example:"A: La intermediación financiera es clave en el mercado.\nB: Los bancos son los principales intermediarios.",
 exampleSrc:"A: Financial intermediation is key in the market.\nB: Banks are the main intermediaries.",
 funFact:"In Spain, intermediación inmobiliaria (real estate brokerage) typically charges 3-5% commission."},

{type:"match",pairs:[
 {trg:"negociación",src:"negotiation"},
 {trg:"nómina",src:"payroll / payslip"},
 {trg:"mediación",src:"mediation"},
 {trg:"contraprestación",src:"consideration"},
 {trg:"aumento de sueldo",src:"pay raise"}
]},

{type:"fb",s:"El {1} del proyecto organizó todas las reuniones de equipo.",
 a:["coordinador"],opts:["coordinador","mediador","negociador","jefe"],
 hint:"The person whose role is specifically to organize and synchronize activities.",
 sSrc:"The project {1} organized all the team meetings."},

{type:"mc",q:"¿Cuál es la función de un mediador?",
 opts:["Ayudar a resolver conflictos de forma neutral","Dirigir una empresa","Vender productos financieros","Escribir contratos legales"],
 ans:"Ayudar a resolver conflictos de forma neutral",
 hint:"This person does not take sides. They help two parties find common ground."},

{type:"fb",s:"La empresa ofrece una {1} por cada contrato completado.",
 a:["contraprestación"],opts:["contraprestación","negociación","nómina","mediación"],
 hint:"Something given in return for a service. A formal business term for compensation.",
 sSrc:"The company offers a {1} for each completed contract."},

]};
export default LESSON_1;
