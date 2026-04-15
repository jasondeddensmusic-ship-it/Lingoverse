// B2 Gap Batch C Lesson 03 - Human Resources & Training
const LESSON_3 = {id:"esv2_b2gC_l3",title:"Recursos humanos y formación",icon:"🎓",xp:15,board:true,steps:[
{type:"intro",title:"Recursos humanos y formación",desc:"Learn vocabulary for human resources departments, employee training, and professional development in Spanish companies.",goals:["Learn 12 words about HR and training","Discuss employee development","Use formal professional register"]},

{type:"teach",trg:"el departamento de formación",src:"the training department",pos:"noun",gender:"m",
 note:"Masculine compound noun. Organizes employee learning.\nFormación means both training and education.",
 example:"A: El departamento de formación ofrece cursos de idiomas.\nB: Me he apuntado al de inglés avanzado.",
 exampleSrc:"A: The training department offers language courses.\nB: I've signed up for the advanced English one.",
 funFact:"In Spain, companies with over 250 employees must invest at least 0.7% of payroll in training."},

{type:"teach",trg:"el departamento de marketing",src:"the marketing department",pos:"noun",gender:"m",
 note:"Masculine compound noun. Handles promotion and branding.\nSpain uses 'marketing' as a loanword.",
 example:"A: El departamento de marketing necesita un diseñador gráfico.\nB: He visto la oferta, voy a enviar mi currículum.",
 exampleSrc:"A: The marketing department needs a graphic designer.\nB: I've seen the posting, I'm going to send my CV.",
 funFact:"Despite the Real Academia recommending 'mercadotecnia', most Spaniards say 'marketing'."},

{type:"teach",trg:"el departamento de contabilidad",src:"the accounting department",pos:"noun",gender:"m",
 note:"Masculine compound noun. Manages finances and books.\nContabilidad from contar (to count).",
 example:"A: El departamento de contabilidad ha detectado un error.\nB: Tenemos que corregirlo antes del cierre fiscal.",
 exampleSrc:"A: The accounting department has detected an error.\nB: We have to correct it before the fiscal close.",
 funFact:"Spanish accounting follows the Plan General Contable, updated in 2007 to align with EU standards."},

{type:"teach",trg:"el curso abierto",src:"the open course",pos:"noun",gender:"m",
 note:"Masculine compound noun. A course available to all.\nAlso: curso en abierto (open-access course).",
 example:"A: He encontrado un curso abierto de programación.\nB: ¿Es gratuito? Me encantaría apuntarme.",
 exampleSrc:"A: I've found an open programming course.\nB: Is it free? I'd love to sign up.",
 funFact:"Spain's UNED university is Europe's second largest distance-learning institution by enrollment."},

{type:"mc",q:"¿Qué departamento organiza los cursos para los empleados?",opts:["El departamento de formación","El departamento de contabilidad","El departamento de marketing","El departamento de ventas"],ans:"El departamento de formación",hint:"This department's name literally includes the Spanish word for training."},

{type:"teach",trg:"el empleo estatal",src:"the government job / public employment",pos:"noun",gender:"m",
 note:"Masculine compound noun. A position in the public sector.\nAlso: empleo público.",
 example:"A: Ha conseguido un empleo estatal como funcionario.\nB: ¡Enhorabuena! Las oposiciones son muy difíciles.",
 exampleSrc:"A: He's gotten a government job as a civil servant.\nB: Congratulations! The civil service exams are very difficult.",
 funFact:"In Spain, 'oposiciones' are competitive exams for government jobs. Some take years of preparation."},

{type:"teach",trg:"el perfeccionamiento",src:"the improvement / refinement",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something perfect.\nFrom perfeccionar (to perfect).",
 example:"A: El perfeccionamiento de nuestros procesos ha reducido costes.\nB: Un 15% menos en el último trimestre.",
 exampleSrc:"A: The improvement of our processes has reduced costs.\nB: 15% less in the last quarter.",
 funFact:"In academic Spanish, 'perfeccionamiento profesional' is the standard term for continuing professional development."},

{type:"teach",trg:"el obrero cualificado",src:"the skilled worker",pos:"noun",gender:"m",
 note:"Masculine compound noun. A worker with specialized training.\nFeminine: la obrera cualificada.",
 example:"A: Necesitamos obreros cualificados para este proyecto.\nB: Hay escasez en el sector de la construcción.",
 exampleSrc:"A: We need skilled workers for this project.\nB: There's a shortage in the construction sector.",
 funFact:"Spain has one of Europe's highest rates of overqualification, with many graduates in unskilled jobs."},

{type:"fb",s:"El {1} ofrece cursos de idiomas a todos los empleados.",a:["departamento de formación"],opts:["departamento de formación","departamento de marketing","departamento de contabilidad","empleo estatal"],hint:"The department within a company that organizes training and learning opportunities.",sSrc:"The {1} offers language courses to all employees."},

{type:"teach",trg:"la normalización",src:"the standardization / normalization",pos:"noun",gender:"f",
 note:"Feminine noun. Making something conform to a standard.\nFrom normalizar (to standardize).",
 example:"A: La normalización de los procesos ha mejorado la calidad.\nB: Ahora todos los equipos siguen el mismo protocolo.",
 exampleSrc:"A: The standardization of processes has improved quality.\nB: Now all teams follow the same protocol.",
 funFact:"In linguistics, 'normalización lingüística' refers to policies promoting minority languages like Catalan or Basque."},

{type:"teach",trg:"la modificación",src:"the modification / change",pos:"noun",gender:"f",
 note:"Feminine noun. A change or alteration to something.\nFrom modificar (to modify).",
 example:"A: La modificación del contrato requiere la firma de ambas partes.\nB: Lo revisaré con mi abogado antes de firmar.",
 exampleSrc:"A: The modification of the contract requires both parties' signatures.\nB: I'll review it with my lawyer before signing.",
 funFact:"In legal Spanish, 'modificación sustancial' (substantial modification) has specific labor law implications."},

{type:"teach",trg:"la finalización",src:"the completion / conclusion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing something.\nFrom finalizar (to finish).",
 example:"A: La finalización del proyecto está prevista para junio.\nB: Vamos bien de tiempo, no habrá retrasos.",
 exampleSrc:"A: The completion of the project is scheduled for June.\nB: We're on track, there won't be delays.",
 funFact:"Spanish loves abstract -ción nouns. There are over 5,000 words ending in -ción in standard dictionaries."},

{type:"mc",q:"¿Qué significa 'perfeccionamiento'?",opts:["El proceso de mejorar algo hasta hacerlo perfecto","Un tipo de empleo público","Un departamento de la empresa","Un contrato laboral especial"],ans:"El proceso de mejorar algo hasta hacerlo perfecto",hint:"This word is built from the verb meaning 'to perfect' or 'to refine'."},

{type:"fb",s:"La {1} del contrato debe ser aprobada por ambas partes.",a:["modificación"],opts:["modificación","normalización","finalización","formación"],hint:"A change or alteration to an existing agreement or document.",sSrc:"The {1} of the contract must be approved by both parties."},

{type:"match",pairs:[{trg:"empleo estatal",src:"government job"},{trg:"obrero cualificado",src:"skilled worker"},{trg:"normalización",src:"standardization"},{trg:"finalización",src:"completion"},{trg:"curso abierto",src:"open course"}]},

{type:"fb",s:"Necesitamos {1} para este trabajo de construcción.",a:["obreros cualificados"],opts:["obreros cualificados","empleos estatales","cursos abiertos","departamentos"],hint:"Workers who have specialized training and skills for a particular trade.",sSrc:"We need {1} for this construction job."}
]};

export default LESSON_3;
