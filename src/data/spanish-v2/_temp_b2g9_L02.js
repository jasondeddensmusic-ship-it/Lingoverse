// Lesson 2 — La oficina moderna (The Modern Office)
const LESSON_2 = {id:"esv2_b2g9_l2", title:"La oficina moderna", icon:"\u{1F3E2}", xp:25, board:true, steps:[
  {type:"intro", title:"La oficina moderna",
   desc:"Navigate the modern workplace with vocabulary for departments, roles, and daily office life. Essential for any professional environment.",
   goals:["Learn 10 terms for office roles and departments","Discuss workplace structure confidently","Use formal register in professional contexts"]},

  {type:"teach", trg:"el departamento de marketing", src:"the marketing department", pos:"noun", gender:"m",
   note:"Departamento (department) + de marketing.\nMarketing is used as a loanword in Spanish.",
   example:"A: \u00bfEn qu\u00e9 departamento trabajas?\nB: En el departamento de marketing.\nA: \u00bfY qu\u00e9 haces exactamente?\nB: Dise\u00f1o campa\u00f1as publicitarias.",
   exampleSrc:"A: Which department do you work in?\nB: In the marketing department.\nA: And what do you do exactly?\nB: I design advertising campaigns.",
   funFact:"Though 'mercadotecnia' exists as a Spanish equivalent, 'marketing' is overwhelmingly preferred in Peninsular Spanish."},

  {type:"teach", trg:"la directora ejecutiva", src:"the executive director (f.)", pos:"noun", gender:"f",
   note:"Directora (director, f.) + ejecutiva (executive).\nMale form: el director ejecutivo.",
   example:"A: La directora ejecutiva convoc\u00f3 una reuni\u00f3n urgente.\nB: \u00bfSobre qu\u00e9 tema?\nA: Sobre la reestructuraci\u00f3n de la empresa.\nB: Espero que no haya despidos.",
   exampleSrc:"A: The executive director called an urgent meeting.\nB: About what topic?\nA: About the restructuring of the company.\nB: I hope there are no layoffs.",
   funFact:"In Spain, the abbreviation CEO is increasingly used alongside 'director/a ejecutivo/a' in corporate settings."},

  {type:"teach", trg:"la jefa de equipo", src:"the team leader (f.)", pos:"noun", gender:"f",
   note:"Jefa (boss, f.) + de equipo (of team).\nMale form: el jefe de equipo.",
   example:"A: Mi jefa de equipo es muy exigente.\nB: \u00bfPero es justa?\nA: S\u00ed, es estricta pero siempre reconoce el buen trabajo.\nB: Eso es lo importante.",
   exampleSrc:"A: My team leader is very demanding.\nB: But is she fair?\nA: Yes, she is strict but she always recognises good work.\nB: That is what matters.",
   funFact:"Spanish workplace culture increasingly uses feminine forms of job titles, a shift formalised by the RAE in recent decades."},

  {type:"teach", trg:"el jefe de ventas", src:"the sales manager", pos:"noun", gender:"m",
   note:"Jefe (boss) + de ventas (of sales).\nAlso: director/a de ventas (more formal).",
   example:"A: El jefe de ventas est\u00e1 de viaje en M\u00e1laga.\nB: \u00bfVisitando clientes?\nA: S\u00ed, tiene tres reuniones esta semana.\nB: El sur es un mercado muy importante para nosotros.",
   exampleSrc:"A: The sales manager is on a trip in Malaga.\nB: Visiting clients?\nA: Yes, he has three meetings this week.\nB: The south is a very important market for us.",
   funFact:"In many Spanish companies, 'jefe' implies direct authority, while 'director' suggests a broader strategic role."},

  {type:"mc", q:"\u00bfQu\u00e9 hace el departamento de marketing?",
   opts:["Lleva la contabilidad","Dise\u00f1a campa\u00f1as publicitarias","Repara ordenadores","Contrata empleados"],
   ans:"Dise\u00f1a campa\u00f1as publicitarias",
   hint:"This department is responsible for promoting products and building brand awareness."},

  {type:"teach", trg:"dar de alta", src:"to register; to sign up officially", pos:"verb", gender:null,
   note:"Dar (give) + de alta (from discharge/registration).\nUsed for official registrations.",
   example:"A: \u00bfYa te han dado de alta en la Seguridad Social?\nB: S\u00ed, me dieron de alta el primer d\u00eda de trabajo.\nA: Perfecto. Sin eso no puedes ir al m\u00e9dico.\nB: Lo s\u00e9, es lo primero que hay que hacer.",
   exampleSrc:"A: Have they registered you with Social Security yet?\nB: Yes, they registered me on the first day of work.\nA: Perfect. Without that you cannot go to the doctor.\nB: I know, it is the first thing you have to do.",
   funFact:"In Spain, 'dar de alta' is used for registering with utilities, doctors, and employment. The opposite is 'dar de baja'."},

  {type:"teach", trg:"la consideraci\u00f3n", src:"the consideration", pos:"noun", gender:"f",
   note:"From considerar (to consider).\nUsed formally: 'tener en consideraci\u00f3n' (to take into account).",
   example:"A: Su propuesta merece nuestra consideraci\u00f3n.\nB: Estoy de acuerdo. Es una buena idea.\nA: La tendremos en consideraci\u00f3n para el pr\u00f3ximo trimestre.\nB: Gracias por escucharnos.",
   exampleSrc:"A: Your proposal deserves our consideration.\nB: I agree. It is a good idea.\nA: We will take it into consideration for the next quarter.\nB: Thank you for listening to us.",
   funFact:"The phrase 'de mi consideraci\u00f3n' opens formal letters in Spanish, similar to 'Dear Sir/Madam'."},

  {type:"teach", trg:"la consistencia", src:"the consistency", pos:"noun", gender:"f",
   note:"From consistente (consistent).\nUsed for texture (food) and reliability (work).",
   example:"A: La consistencia de este producto es perfecta.\nB: Hemos trabajado mucho en la f\u00f3rmula.\nA: Se nota. Los clientes est\u00e1n encantados.\nB: La consistencia en la calidad es nuestra prioridad.",
   exampleSrc:"A: The consistency of this product is perfect.\nB: We have worked a lot on the formula.\nA: It shows. The clients are delighted.\nB: Consistency in quality is our priority.",
   funFact:"In cooking, 'consistencia' describes texture, while in business it means reliability and steadiness."},

  {type:"fb", s:"La {1} convoc\u00f3 una reuni\u00f3n para todo el personal.", a:["directora ejecutiva"],
   opts:["directora ejecutiva","jefa de equipo","consideraci\u00f3n","consistencia"],
   hint:"The highest-ranking woman in the company called a meeting.",
   sSrc:"The {1} called a meeting for all staff."},

  {type:"teach", trg:"la modificaci\u00f3n", src:"the modification", pos:"noun", gender:"f",
   note:"From modificar (to modify).\nCommon in legal, technical, and business contexts.",
   example:"A: El contrato necesita una modificaci\u00f3n.\nB: \u00bfQu\u00e9 cl\u00e1usula hay que cambiar?\nA: La de las condiciones de pago.\nB: De acuerdo, enviar\u00e9 la modificaci\u00f3n ma\u00f1ana.",
   exampleSrc:"A: The contract needs a modification.\nB: Which clause needs to change?\nA: The one about payment conditions.\nB: Agreed, I will send the modification tomorrow.",
   funFact:"In Spanish law, 'modificaci\u00f3n sustancial' refers to a significant change to working conditions that requires legal process."},

  {type:"teach", trg:"la metodolog\u00eda", src:"the methodology", pos:"noun", gender:"f",
   note:"M\u00e9todo (method) + -log\u00eda (study of).\nUsed in academic and professional settings.",
   example:"A: \u00bfQu\u00e9 metodolog\u00eda us\u00e1is en este proyecto?\nB: Usamos la metodolog\u00eda \u00e1gil.\nA: Interesante. \u00bfY funciona bien?\nB: S\u00ed, nos permite adaptarnos r\u00e1pidamente a los cambios.",
   exampleSrc:"A: What methodology do you use in this project?\nB: We use agile methodology.\nA: Interesting. And does it work well?\nB: Yes, it allows us to adapt quickly to changes.",
   funFact:"Agile methodology, known as 'metodolog\u00eda \u00e1gil' in Spanish, has become the standard in Spanish tech companies."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'dar de alta'?",
   opts:["Despedir a un empleado","Registrar oficialmente a alguien","Dar un ascenso","Firmar un contrato"],
   ans:"Registrar oficialmente a alguien",
   hint:"This expression is used when someone is officially signed up for a system or service."},

  {type:"fb", s:"El {1} est\u00e1 visitando clientes en el sur de Espa\u00f1a.", a:["jefe de ventas"],
   opts:["jefe de ventas","departamento de marketing","consideraci\u00f3n","metodolog\u00eda"],
   hint:"The person responsible for the sales team is away on business.",
   sSrc:"The {1} is visiting clients in the south of Spain."},

  {type:"match", pairs:[
    {trg:"directora ejecutiva", src:"executive director (f.)"},
    {trg:"jefa de equipo", src:"team leader (f.)"},
    {trg:"jefe de ventas", src:"sales manager"},
    {trg:"dar de alta", src:"to register officially"},
    {trg:"metodolog\u00eda", src:"methodology"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 es una modificaci\u00f3n del contrato?",
   opts:["La firma del contrato","Un cambio en las condiciones del contrato","La cancelaci\u00f3n del contrato","Una copia del contrato"],
   ans:"Un cambio en las condiciones del contrato",
   hint:"Modificar means to change. This noun refers to the act of changing something."},

  {type:"drag_fill", s:"La {1} us\u00f3 una nueva {2} para el proyecto.",
   blanks:{"1":"jefa de equipo","2":"metodolog\u00eda"},
   pool:["jefa de equipo","metodolog\u00eda","consistencia","modificaci\u00f3n","consideraci\u00f3n"],
   hint:"The team leader chose a systematic approach for managing the project."},

  {type:"fb", s:"Necesitamos m\u00e1s {1} en la calidad de nuestros productos.", a:["consistencia"],
   opts:["consistencia","consideraci\u00f3n","modificaci\u00f3n","metodolog\u00eda"],
   hint:"Reliability and steadiness over time, not a one-off improvement.",
   sSrc:"We need more {1} in the quality of our products."}
]};
export default LESSON_2;
