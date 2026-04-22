// B2 Gap Batch C Lesson 01 - Corporate Leadership & Management
const LESSON_1 = {id:"esv2_b2gC_l1",title:"Liderazgo empresarial",icon:"👔",xp:15,board:true,steps:[
{type:"intro",title:"Liderazgo empresarial",desc:"Master vocabulary for corporate leadership, management roles, and executive decision-making in the Spanish business world.",goals:["Learn 12 words about corporate leadership","Discuss management structures and roles","Use formal business register"]},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. Person who organizes teamwork.\nFeminine: la coordinadora.",
 example:"A: El coordinador ha organizado la reunión para las tres.\nB: Perfecto, aviso al resto del equipo.",
 exampleSrc:"A: The coordinator has organized the meeting for three.\nB: Perfect, I'll let the rest of the team know.",
 funFact:"From Latin coordinare (to arrange together). In Spain, coordinador is used in both business and education."},

{type:"teach",trg:"la directora ejecutiva",src:"the CEO (female)",pos:"noun",gender:"f",
 note:"Feminine noun. The highest-ranking executive.\nMale form: el director ejecutivo.",
 example:"A: La directora ejecutiva presentará los resultados anuales.\nB: Dicen que han superado las expectativas.",
 exampleSrc:"A: The CEO will present the annual results.\nB: They say they have exceeded expectations.",
 funFact:"In Spain, the percentage of female CEOs has doubled in the last decade, though still below 20%."},

{type:"teach",trg:"el jefe de producción",src:"the production manager",pos:"noun",gender:"m",
 note:"Masculine compound noun. Manages manufacturing.\nFeminine: la jefa de producción.",
 example:"A: El jefe de producción ha parado la cadena.\nB: ¿Por qué? ¿Ha habido algún problema?",
 exampleSrc:"A: The production manager has stopped the line.\nB: Why? Has there been a problem?",
 funFact:"In Spanish factories, the jefe de producción is often the most hands-on leadership role."},

{type:"teach",trg:"la jefa de equipo",src:"the team leader (female)",pos:"noun",gender:"f",
 note:"Feminine compound noun. Leads a working group.\nMale form: el jefe de equipo.",
 example:"A: La jefa de equipo nos ha asignado nuevas tareas.\nB: Es muy organizada, siempre cumple los plazos.",
 exampleSrc:"A: The team leader has assigned us new tasks.\nB: She's very organized, always meets deadlines.",
 funFact:"The word jefe comes from French chef, which itself comes from Latin caput (head)."},

{type:"mc",q:"¿Quién presenta los resultados anuales de la empresa?",opts:["La directora ejecutiva","El coordinador","La jefa de equipo","El jefe de producción"],ans:"La directora ejecutiva",hint:"This is the highest-ranking executive in a company."},

{type:"teach",trg:"el mediador",src:"the mediator",pos:"noun",gender:"m",
 note:"Masculine noun. Person who resolves conflicts.\nFeminine: la mediadora.",
 example:"A: Necesitamos un mediador para resolver este conflicto.\nB: Conozco a alguien con experiencia en mediación laboral.",
 exampleSrc:"A: We need a mediator to resolve this conflict.\nB: I know someone with experience in labor mediation.",
 funFact:"Spain's labor law requires mediation before most employment disputes can reach court."},

{type:"teach",trg:"el negociador",src:"the negotiator",pos:"noun",gender:"m",
 note:"Masculine noun. Person skilled in reaching deals.\nFeminine: la negociadora.",
 example:"A: Es un negociador brillante, siempre consigue buenos acuerdos.\nB: Por eso le han ascendido a director comercial.",
 exampleSrc:"A: He's a brilliant negotiator, he always gets good deals.\nB: That's why he was promoted to commercial director.",
 funFact:"From Latin negotium (business), literally neg (not) + otium (leisure). Business is the absence of leisure."},

{type:"fb",s:"El {1} organizó la reunión con todos los departamentos.",a:["coordinador"],opts:["coordinador","mediador","negociador","jefe"],hint:"The person whose role is to arrange and synchronize teamwork across groups.",sSrc:"The {1} organized the meeting with all the departments."},

{type:"teach",trg:"el convenio colectivo",src:"the collective bargaining agreement",pos:"noun",gender:"m",
 note:"Masculine compound noun. A labor contract between\nunions and employers.",
 example:"A: El nuevo convenio colectivo incluye un aumento salarial.\nB: Ya era hora, llevamos tres años sin subida.",
 exampleSrc:"A: The new collective agreement includes a pay raise.\nB: It was about time, we've gone three years without a raise.",
 funFact:"In Spain, convenios colectivos cover over 80% of workers, one of the highest rates in Europe."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay raise",pos:"noun",gender:"m",
 note:"Masculine compound noun. An increase in salary.\nSueldo comes from Latin solidus (a coin).",
 example:"A: Voy a pedir un aumento de sueldo este mes.\nB: Buena idea, te lo mereces por tu trabajo.",
 exampleSrc:"A: I'm going to ask for a pay raise this month.\nB: Good idea, you deserve it for your work.",
 funFact:"The Spanish word sueldo comes from the Roman solidus coin, once used to pay soldiers."},

{type:"teach",trg:"la consideración",src:"the consideration / regard",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought or respect.\nCommon in formal business language.",
 example:"A: Agradecemos su consideración respecto a nuestra propuesta.\nB: La estudiaremos con detenimiento.",
 exampleSrc:"A: We appreciate your consideration regarding our proposal.\nB: We will study it carefully.",
 funFact:"In business Spanish, 'tener en consideración' is more formal than 'tener en cuenta' (to take into account)."},

{type:"mc",q:"¿Qué es un convenio colectivo?",opts:["Un contrato individual de trabajo","Un acuerdo laboral entre sindicatos y empresas","Una reunión de todos los empleados","Un aumento de sueldo general"],ans:"Un acuerdo laboral entre sindicatos y empresas",hint:"Think about organized labor groups negotiating terms with employers."},

{type:"teach",trg:"dar de alta",src:"to register / to enroll",pos:"verb",gender:null,
 note:"Phrasal verb. To officially register someone.\nOpposite: dar de baja (to deregister).",
 example:"A: ¿Ya te han dado de alta en la Seguridad Social?\nB: Sí, mi empresa lo gestionó el primer día.",
 exampleSrc:"A: Have they registered you with Social Security yet?\nB: Yes, my company handled it on the first day.",
 funFact:"In Spain, dar de alta is essential for healthcare and employment. Without it, you have no public health coverage."},

{type:"teach",trg:"la consistencia",src:"the consistency / firmness",pos:"noun",gender:"f",
 note:"Feminine noun. Steadiness of behavior or texture.\nFrom Latin consistere (to stand firm).",
 example:"A: La consistencia de su trabajo le ha valido el ascenso.\nB: Nunca ha fallado en un solo proyecto.",
 exampleSrc:"A: The consistency of her work has earned her the promotion.\nB: She has never failed on a single project.",
 funFact:"Unlike English, Spanish 'consistencia' can refer to physical texture (thick soup) or abstract reliability."},

{type:"fb",s:"Mi empresa me ha {1} en la Seguridad Social.",a:["dado de alta"],opts:["dado de alta","dado de baja","hecho caso","puesto al día"],hint:"The formal process of officially registering someone in the social security system.",sSrc:"My company has {1} me with Social Security."},

{type:"match",pairs:[{trg:"negociador",src:"negotiator"},{trg:"mediador",src:"mediator"},{trg:"coordinador",src:"coordinator"},{trg:"aumento de sueldo",src:"pay raise"},{trg:"convenio colectivo",src:"collective agreement"}]},

{type:"mc",q:"¿Qué significa 'dar de alta'?",opts:["Subir el sueldo","Organizar una reunión","Registrar oficialmente a alguien","Despedir a un empleado"],ans:"Registrar oficialmente a alguien",hint:"This phrase involves official enrollment, often in social security or a professional registry."},

{type:"fb",s:"La {1} de su trabajo le ha valido el reconocimiento de todos.",a:["consistencia"],opts:["consistencia","consideración","coordinación","mediación"],hint:"The quality of being steady and reliable over time.",sSrc:"The {1} of her work has earned her everyone's recognition."}
]};

export default LESSON_1;
