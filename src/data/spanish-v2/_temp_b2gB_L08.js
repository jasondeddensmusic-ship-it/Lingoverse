// B2 Gap Batch B Lesson 08 — Industry & Labor
const LESSON_8 = {id:"esv2_b2gB_l8",title:"Industria y trabajo",icon:"🏭",xp:15,board:true,steps:[
{type:"intro",title:"Industria y trabajo",desc:"Learn vocabulary about industry, labor, and the working world in Spain.",goals:["Learn 12 words about industry and labor","Discuss workplace roles and conditions","Use formal employment vocabulary"]},

{type:"teach",trg:"el operario",src:"the machine operator / factory worker",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la operaria.\nA worker who operates machinery or does manual labor.",
 example:"A: Los operarios de la fábrica trabajan en tres turnos.\nB: El turno de noche es el más difícil.",
 exampleSrc:"A: The factory workers work in three shifts.\nB: The night shift is the hardest.",
 funFact:"From Latin operarius (laborer). In Spain, operario is specifically a manual or machine worker."},

{type:"teach",trg:"la obrera",src:"the female worker / laborer",pos:"noun",gender:"f",
 note:"Feminine noun. Masculine: el obrero.\nA manual or industrial worker. Also adj: working-class.",
 example:"A: Las obreras de la fábrica textil organizaron una huelga.\nB: Pedían mejores condiciones laborales.",
 exampleSrc:"A: The women workers at the textile factory organized a strike.\nB: They demanded better working conditions.",
 funFact:"The 'clase obrera' (working class) was central to Spain's labor movement in the 19th and 20th centuries."},

{type:"teach",trg:"el oficinista",src:"the office worker / clerk",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la oficinista.\nFrom oficina (office). A white-collar worker.",
 example:"A: Miles de oficinistas trabajan en el distrito financiero.\nB: La mayoría llegan en metro cada mañana.",
 exampleSrc:"A: Thousands of office workers work in the financial district.\nB: Most of them arrive by metro every morning.",
 funFact:"In Spain, the traditional oficinista schedule was split-shift with a long lunch, now changing to continuous hours."},

{type:"teach",trg:"el mecanismo",src:"the mechanism / device",pos:"noun",gender:"m",
 note:"Masculine noun. A system of moving parts.\nAlso figurative: a method or process.",
 example:"A: El mecanismo del reloj es muy delicado.\nB: Solo un relojero experto puede repararlo.",
 exampleSrc:"A: The clock mechanism is very delicate.\nB: Only an expert watchmaker can repair it.",
 funFact:"Figuratively, 'mecanismos de defensa' (defense mechanisms) is widely used in psychology."},

{type:"mc",q:"¿Cuál es la diferencia entre un operario y un oficinista?",
 opts:["El operario trabaja con máquinas, el oficinista en una oficina","El operario gana más que el oficinista","El oficinista trabaja en una fábrica","No hay ninguna diferencia"],
 ans:"El operario trabaja con máquinas, el oficinista en una oficina",
 hint:"Think about where each one works: a factory floor vs. a desk with a computer."},

{type:"teach",trg:"la finalización",src:"the completion / conclusion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing something.\nFormal register. From finalizar (to finalize).",
 example:"A: La finalización del proyecto está prevista para junio.\nB: Todavía quedan algunos detalles por cerrar.",
 exampleSrc:"A: The completion of the project is planned for June.\nB: There are still some details to finalize.",
 funFact:"In contracts, 'fecha de finalización' is the official end date, distinct from 'fecha de entrega' (delivery date)."},

{type:"teach",trg:"el mejoramiento",src:"the improvement / betterment",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making better.\nMore formal than 'mejora'.",
 example:"A: El mejoramiento de las condiciones laborales es prioritario.\nB: Se han invertido fondos para renovar las instalaciones.",
 exampleSrc:"A: The improvement of working conditions is a priority.\nB: Funds have been invested to renovate the facilities.",
 funFact:"In Latin America, 'mejoramiento' is more common than in Spain, where 'mejora' is preferred in daily speech."},

{type:"teach",trg:"dar de alta",src:"to register / to sign up / to discharge (medical)",pos:"verb",gender:null,
 note:"Verb phrase. Two meanings:\n1. Register someone in a system.\n2. Discharge a patient from hospital.",
 example:"A: Me han dado de alta en la Seguridad Social.\nB: Ahora ya puedes ir al médico con tu tarjeta.",
 exampleSrc:"A: They have registered me in Social Security.\nB: Now you can go to the doctor with your card.",
 funFact:"In Spain, 'dar de alta' and 'dar de baja' (deregister) are essential for employment and healthcare."},

{type:"fb",s:"La {1} del contrato será el treinta y uno de diciembre.",
 a:["finalización"],opts:["finalización","modificación","mejoramiento","complementación"],
 hint:"The formal term for when a contract or project officially ends.",
 sSrc:"The {1} of the contract will be December thirty-first."},

{type:"teach",trg:"optimizar",src:"to optimize",pos:"verb",gender:null,
 note:"Regular -ar verb. To make as effective as possible.\nVery common in business and tech.",
 example:"A: Necesitamos optimizar los procesos de producción.\nB: Así reduciremos costes y tiempo.",
 exampleSrc:"A: We need to optimize the production processes.\nB: That way we will reduce costs and time.",
 funFact:"'Optimizar' entered Spanish from English 'optimize' in the late 20th century via business jargon."},

{type:"teach",trg:"el listado",src:"the list / listing",pos:"noun",gender:"m",
 note:"Masculine noun. A detailed or printed list.\nMore formal than 'lista'.",
 example:"A: El listado de empleados se actualiza cada trimestre.\nB: Incluye nombre, puesto y departamento.",
 exampleSrc:"A: The employee listing is updated every quarter.\nB: It includes name, position, and department.",
 funFact:"In computing, 'listado' also means a printout of code, from the early days of programming."},

{type:"teach",trg:"obsoleto",src:"obsolete / outdated",pos:"adj",gender:null,
 note:"Adjective. No longer useful or current.\nFeminine: obsoleta. From Latin obsoletus.",
 example:"A: Esta maquinaria está completamente obsoleta.\nB: Deberíamos invertir en tecnología nueva.",
 exampleSrc:"A: This machinery is completely obsolete.\nB: We should invest in new technology.",
 funFact:"From Latin obsolescere (to fall into disuse). The noun form 'obsolescencia' is also very common."},

{type:"mc",q:"¿Qué significa 'dar de alta' a un trabajador?",
 opts:["Registrarlo en el sistema de empleo","Despedirlo de la empresa","Darle un ascenso","Enviarle a otra oficina"],
 ans:"Registrarlo en el sistema de empleo",
 hint:"Think about the process of officially adding someone to the payroll or insurance system."},

{type:"match",pairs:[
 {trg:"operario",src:"factory worker"},
 {trg:"oficinista",src:"office worker"},
 {trg:"listado",src:"listing"},
 {trg:"obsoleto",src:"obsolete"},
 {trg:"optimizar",src:"to optimize"}
]},

{type:"fb",s:"Es necesario {1} el uso de recursos para reducir gastos.",
 a:["optimizar"],opts:["optimizar","obsoleto","dar de alta","mecanismo"],
 hint:"To make processes as efficient and effective as possible.",
 sSrc:"It is necessary to {1} the use of resources to reduce expenses."},

{type:"fb",s:"Las máquinas {1} deben ser reemplazadas por modelos más eficientes.",
 a:["obsoletas"],opts:["obsoletas","optimizadas","finalizadas","operarias"],
 hint:"No longer useful because they are outdated and have been surpassed by newer technology.",
 sSrc:"The {1} machines must be replaced by more efficient models."},

]};
export default LESSON_8;
