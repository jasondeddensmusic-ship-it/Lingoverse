// B2 Gap Batch 8 Lesson 01 - Business & Corporate Structure
const LESSON_1 = {id:"esv2_b2g8_l1",title:"La empresa moderna",icon:"🏢",xp:15,board:true,steps:[
{type:"intro",title:"La empresa moderna",desc:"Master vocabulary for corporate departments, job titles, and business operations in the Spanish-speaking world.",goals:["Learn 15 corporate and business terms","Discuss company departments and roles","Use formal business register"]},

{type:"teach",trg:"la directora ejecutiva",src:"the executive director (f)",pos:"noun",gender:"f",
 note:"Feminine noun. The highest-ranking officer in a company.\nMasculine: el director ejecutivo.",
 example:"A: ¿Quién es la directora ejecutiva de esta empresa?\nB: Es la señora Martínez, lleva cinco años en el cargo.",
 exampleSrc:"A: Who is the executive director of this company?\nB: It is Mrs. Martinez, she has been in the role for five years.",
 funFact:"In Spain, the term 'consejero delegado' is also used for CEO, while Latin America prefers 'director ejecutivo'."},

{type:"teach",trg:"el departamento de marketing",src:"the marketing department",pos:"noun",gender:"m",
 note:"Masculine noun. The division handling promotion and branding.\nOften shortened to 'marketing'.",
 example:"A: ¿En qué departamento trabajas?\nB: En el departamento de marketing. Nos encargamos de las campañas.",
 exampleSrc:"A: Which department do you work in?\nB: In the marketing department. We handle the campaigns.",
 funFact:"The RAE accepted 'marketing' as a valid Spanish word, though 'mercadotecnia' is the pure Spanish form."},

{type:"teach",trg:"el departamento de formación",src:"the training department",pos:"noun",gender:"m",
 note:"Masculine noun. The division responsible for employee development.\nFormación = training, education.",
 example:"A: ¿Quién organiza los cursos internos?\nB: El departamento de formación. Tienen un programa muy completo.",
 exampleSrc:"A: Who organizes the internal courses?\nB: The training department. They have a very complete program.",
 funFact:"Spanish companies are legally required to allocate a percentage of payroll to employee training."},

{type:"teach",trg:"el coordinador",src:"the coordinator (m)",pos:"noun",gender:"m",
 note:"Masculine noun. Person who organizes activities between teams.\nFeminine: la coordinadora.",
 example:"A: ¿Conoces al nuevo coordinador del proyecto?\nB: Sí, viene del departamento de logística.",
 exampleSrc:"A: Do you know the new project coordinator?\nB: Yes, he comes from the logistics department.",
 funFact:"From Latin coordinare (to arrange together). The prefix co- means 'together' in both languages."},

{type:"teach",trg:"la logística",src:"the logistics",pos:"noun",gender:"f",
 note:"Feminine noun. The management of supply chains and distribution.",
 example:"A: La logística de esta empresa es muy eficiente.\nB: Sí, las entregas siempre llegan a tiempo.",
 exampleSrc:"A: This company's logistics are very efficient.\nB: Yes, deliveries always arrive on time.",
 funFact:"From French logistique, originally a military term. Spain's logistics sector employs over 800,000 people."},

{type:"mc",q:"¿Qué hace el departamento de formación?",
 opts:["Organiza cursos para los empleados","Gestiona las finanzas","Diseña productos nuevos","Contrata personal"],
 ans:"Organiza cursos para los empleados",
 hint:"Think about what 'formación' means: training and professional development."},

{type:"teach",trg:"el jefe de producción",src:"the production manager",pos:"noun",gender:"m",
 note:"Masculine noun. Person in charge of manufacturing processes.\nFeminine: la jefa de producción.",
 example:"A: El jefe de producción quiere reunirse con nosotros.\nB: ¿Sobre qué? ¿Los plazos de entrega?",
 exampleSrc:"A: The production manager wants to meet with us.\nB: About what? The delivery deadlines?",
 funFact:"In Spanish factories, the jefe de producción often holds an engineering degree (ingeniero industrial)."},

{type:"teach",trg:"la jefa de equipo",src:"the team leader (f)",pos:"noun",gender:"f",
 note:"Feminine noun. Woman who leads a work team.\nMasculine: el jefe de equipo.",
 example:"A: Mi jefa de equipo es muy exigente pero justa.\nB: Eso es lo mejor. Te ayuda a crecer.",
 exampleSrc:"A: My team leader is very demanding but fair.\nB: That is the best kind. She helps you grow.",
 funFact:"The feminization of job titles is advancing rapidly in Spain. 'Jefa' is now universally accepted."},

{type:"teach",trg:"el jefe de ventas",src:"the sales manager",pos:"noun",gender:"m",
 note:"Masculine noun. Person directing the sales team and strategy.\nAlso: director comercial.",
 example:"A: ¿Has hablado con el jefe de ventas sobre la nueva cuenta?\nB: Sí, está muy interesado en cerrar el trato.",
 exampleSrc:"A: Have you spoken with the sales manager about the new account?\nB: Yes, he is very interested in closing the deal.",
 funFact:"In Spain, a 'comercial' is a sales representative, while 'jefe de ventas' manages the whole team."},

{type:"fb",s:"La {1} del proyecto se encarga de coordinar a todos los equipos.",
 a:["coordinadora"],opts:["coordinadora","logística","formación","directora"],
 hint:"The person who organizes activities between different teams. Feminine form.",
 sSrc:"The {1} of the project is in charge of coordinating all the teams."},

{type:"teach",trg:"el comercio exterior",src:"the foreign trade",pos:"noun",gender:"m",
 note:"Masculine noun. International buying and selling of goods.\nAlso: comercio internacional.",
 example:"A: España tiene un comercio exterior muy activo.\nB: Sí, exportamos mucho a Francia y Alemania.",
 exampleSrc:"A: Spain has very active foreign trade.\nB: Yes, we export a lot to France and Germany.",
 funFact:"Spain is the 16th largest exporter in the world. Olive oil, wine, and cars are top exports."},

{type:"teach",trg:"el convenio colectivo",src:"the collective agreement",pos:"noun",gender:"m",
 note:"Masculine noun. A labor contract between employers and workers.\nRegulates wages and conditions.",
 example:"A: ¿Ya se firmó el nuevo convenio colectivo?\nB: No, las negociaciones siguen abiertas.",
 exampleSrc:"A: Has the new collective agreement been signed yet?\nB: No, negotiations are still ongoing.",
 funFact:"Spain has one of the highest rates of collective bargaining coverage in Europe, around 80%."},

{type:"teach",trg:"dar de alta",src:"to register / to sign up",pos:"verb",gender:null,
 note:"Phrasal verb. To officially register someone in a system.\nOpposite: dar de baja.",
 example:"A: ¿Ya te han dado de alta en la Seguridad Social?\nB: Sí, mi empresa lo gestionó la primera semana.",
 exampleSrc:"A: Have they registered you with Social Security yet?\nB: Yes, my company handled it the first week.",
 funFact:"In Spain, 'dar de alta' is essential for employment, healthcare, and utilities. No alta, no services."},

{type:"mc",q:"¿Qué significa 'dar de alta' a un empleado?",
 opts:["Enviarlo a formación","Registrarlo oficialmente en el sistema","Despedirlo del trabajo","Ascenderlo de puesto"],
 ans:"Registrarlo oficialmente en el sistema",
 hint:"Think about the process of officially entering someone into a registry or system."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay raise",pos:"noun",gender:"m",
 note:"Masculine noun. An increase in salary.\nAumento = increase, sueldo = salary.",
 example:"A: ¿Vas a pedir un aumento de sueldo?\nB: Sí, llevo tres años sin ninguna subida.",
 exampleSrc:"A: Are you going to ask for a pay raise?\nB: Yes, I have gone three years without any increase.",
 funFact:"In Spain, the phrase 'subida salarial' is equally common. Both mean the same thing."},

{type:"teach",trg:"el concursante",src:"the contestant / candidate",pos:"noun",gender:"m",
 note:"Masculine noun. Person competing for a position or prize.\nFrom concurso (competition).",
 example:"A: ¿Cuántos concursantes hay para el puesto?\nB: Más de doscientos, es muy competitivo.",
 exampleSrc:"A: How many candidates are there for the position?\nB: More than two hundred, it is very competitive.",
 funFact:"In job contexts, 'concursante' refers to someone in a public competition (oposición) for government jobs."},

{type:"fb",s:"El {1} regula los salarios y las condiciones laborales de los trabajadores.",
 a:["convenio colectivo"],opts:["convenio colectivo","comercio exterior","aumento de sueldo","departamento de formación"],
 hint:"A formal labor agreement negotiated between employers and workers' representatives.",
 sSrc:"The {1} regulates wages and working conditions for employees."},

{type:"match",pairs:[
 {trg:"la directora ejecutiva",src:"executive director"},
 {trg:"el jefe de ventas",src:"sales manager"},
 {trg:"el departamento de formación",src:"training department"},
 {trg:"el aumento de sueldo",src:"pay raise"},
 {trg:"dar de alta",src:"to register"}
]},

{type:"mc",q:"¿A qué se dedica el jefe de producción?",
 opts:["Forma a los empleados nuevos","Negocia con los sindicatos","Supervisa los procesos de fabricación","Gestiona las campañas publicitarias"],
 ans:"Supervisa los procesos de fabricación",
 hint:"Production relates to manufacturing and making things. What does this manager oversee?"},

{type:"fb",s:"España tiene un {1} muy activo con los países de la Unión Europea.",
 a:["comercio exterior"],opts:["comercio exterior","convenio colectivo","departamento de marketing","aumento de sueldo"],
 hint:"International trade: buying and selling goods across borders.",
 sSrc:"Spain has very active {1} with European Union countries."}
]};
export default LESSON_1;
