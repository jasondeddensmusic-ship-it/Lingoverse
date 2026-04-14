// B2 Gap Batch 6 Lesson 01 - Business & Corporate World
const LESSON_1 = {id:"esv2_b2g6_l1",title:"El mundo empresarial",icon:"💼",xp:15,board:true,steps:[
{type:"intro",title:"El mundo empresarial",desc:"Master vocabulary for the corporate world: departments, roles, and business operations in Spain.",goals:["Learn 15 business and corporate terms","Discuss company structure and roles","Use formal business register"]},

{type:"teach",trg:"la agencia de publicidad",src:"the advertising agency",pos:"noun",gender:"f",
 note:"Feminine noun. A company that creates ads.\nDe publicidad specifies the type.",
 example:"A: ¿Dónde trabajas ahora?\nB: En una agencia de publicidad en Madrid.",
 exampleSrc:"A: Where do you work now?\nB: At an advertising agency in Madrid.",
 funFact:"Spain's advertising industry is centered on the 'Milla de Oro' in Madrid's Salamanca district."},

{type:"teach",trg:"el departamento de marketing",src:"the marketing department",pos:"noun",gender:"m",
 note:"Masculine noun. The division handling marketing.\nMarketing is borrowed from English.",
 example:"A: ¿A qué departamento perteneces?\nB: Al departamento de marketing, llevamos las campañas.",
 exampleSrc:"A: Which department do you belong to?\nB: The marketing department, we handle the campaigns.",
 funFact:"Despite the English loanword, Spain's RAE has not proposed a Spanish replacement for 'marketing'."},

{type:"teach",trg:"el comercio exterior",src:"foreign trade / international commerce",pos:"noun",gender:"m",
 note:"Masculine noun. Trade between countries.\nExterior means foreign or external.",
 example:"A: El comercio exterior ha crecido un diez por ciento.\nB: Las exportaciones de aceite de oliva ayudaron mucho.",
 exampleSrc:"A: Foreign trade has grown by ten percent.\nB: Olive oil exports helped a lot.",
 funFact:"Spain is the world's largest olive oil producer, making it a key export in their comercio exterior."},

{type:"teach",trg:"la directora ejecutiva",src:"the executive director (f.)",pos:"noun",gender:"f",
 note:"Feminine noun. The top executive role.\nMasculine: el director ejecutivo.",
 example:"A: ¿Quién es la directora ejecutiva de la empresa?\nB: Es Carmen Ruiz, lleva dos años en el cargo.",
 exampleSrc:"A: Who is the executive director of the company?\nB: It is Carmen Ruiz, she has been in the role for two years.",
 funFact:"Spain uses CEO less often than Latin America. 'Consejero delegado' is the most formal equivalent."},

{type:"mc",q:"¿Qué hace una agencia de publicidad?",opts:["Crea campañas y anuncios","Vende productos agrícolas","Gestiona el comercio exterior","Dirige hospitales"],ans:"Crea campañas y anuncios",hint:"Think about what advertising means. Creating campaigns and ads."},

{type:"teach",trg:"el jefe de producción",src:"the production manager",pos:"noun",gender:"m",
 note:"Masculine noun. The person in charge of production.\nFeminine: la jefa de producción.",
 example:"A: El jefe de producción quiere acelerar los plazos.\nB: Tendremos que contratar más personal.",
 exampleSrc:"A: The production manager wants to speed up the deadlines.\nB: We will have to hire more staff.",
 funFact:"In Spain, 'jefe' can sound informal. 'Responsable de produccion' is often preferred in job ads."},

{type:"teach",trg:"el jefe de ventas",src:"the sales manager",pos:"noun",gender:"m",
 note:"Masculine noun. Head of the sales division.\nFeminine: la jefa de ventas.",
 example:"A: Necesitamos hablar con el jefe de ventas.\nB: Tiene una reunión, pero estará libre a las tres.",
 exampleSrc:"A: We need to talk to the sales manager.\nB: He has a meeting, but he will be free at three.",
 funFact:"'Director comercial' is the more formal title used in corporate Spain."},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who organizes and harmonizes.\nFeminine: la coordinadora.",
 example:"A: ¿Quién es el coordinador del proyecto?\nB: Ana se encarga de coordinar a todo el equipo.",
 exampleSrc:"A: Who is the project coordinator?\nB: Ana is in charge of coordinating the whole team.",
 funFact:"From Latin coordinare (to arrange together). The prefix co- means 'together'."},

{type:"fb",s:"El {1} se encarga de organizar las exportaciones.",a:["comercio exterior"],opts:["comercio exterior","departamento de marketing","jefe de ventas","coordinador"],hint:"The term for trade between different countries.",sSrc:"The {1} department handles organizing exports."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay raise",pos:"noun",gender:"m",
 note:"Masculine noun phrase. Aumento means increase,\nsueldo means salary.",
 example:"A: Voy a pedir un aumento de sueldo.\nB: Buena idea, llevas tres años sin uno.",
 exampleSrc:"A: I am going to ask for a pay raise.\nB: Good idea, you have been three years without one.",
 funFact:"In Spain, salary negotiations often happen during the 'revisión salarial anual' (annual salary review)."},

{type:"teach",trg:"el convenio colectivo",src:"the collective agreement",pos:"noun",gender:"m",
 note:"Masculine noun phrase. A labor agreement between\nunions and employers.",
 example:"A: ¿El convenio colectivo incluye días extra de vacaciones?\nB: Sí, dos días más que el mínimo legal.",
 exampleSrc:"A: Does the collective agreement include extra vacation days?\nB: Yes, two more days than the legal minimum.",
 funFact:"Spain has one of Europe's most structured collective bargaining systems, covering most workers."},

{type:"teach",trg:"el empleo estatal",src:"state employment / public sector job",pos:"noun",gender:"m",
 note:"Masculine noun phrase. A job in the public sector.\nEstatal means belonging to the state.",
 example:"A: Mi hermana consiguió un empleo estatal.\nB: ¡Qué bien! Las oposiciones son muy duras.",
 exampleSrc:"A: My sister got a public sector job.\nB: Great! The civil service exams are very tough.",
 funFact:"In Spain, 'oposiciones' are competitive exams for public jobs, and millions prepare for them each year."},

{type:"mc",q:"¿Qué es un convenio colectivo?",opts:["Un acuerdo laboral entre sindicatos y empresas","Un contrato de alquiler","Un examen de oposiciones","Un tipo de comercio"],ans:"Un acuerdo laboral entre sindicatos y empresas",hint:"Think about unions and employers negotiating working conditions together."},

{type:"teach",trg:"la contraprestación",src:"the consideration / compensation",pos:"noun",gender:"f",
 note:"Feminine noun. Something given in return.\nContra (against) + prestación (benefit).",
 example:"A: ¿Cuál es la contraprestación por este servicio?\nB: La empresa ofrece formación gratuita a cambio.",
 exampleSrc:"A: What is the compensation for this service?\nB: The company offers free training in return.",
 funFact:"In legal Spanish, contraprestación is essential in contracts, meaning what each party gives and receives."},

{type:"teach",trg:"el incentivo",src:"the incentive",pos:"noun",gender:"m",
 note:"Masculine noun. Something that motivates action.\nFrom Latin incentivum.",
 example:"A: La empresa ofrece incentivos por productividad.\nB: Es una buena manera de motivar al equipo.",
 exampleSrc:"A: The company offers productivity incentives.\nB: It is a good way to motivate the team.",
 funFact:"Spain's government uses 'incentivos fiscales' (tax incentives) to attract foreign investment."},

{type:"teach",trg:"el fundador",src:"the founder",pos:"noun",gender:"m",
 note:"Masculine noun. The person who establishes something.\nFeminine: la fundadora.",
 example:"A: ¿Conoces al fundador de esta empresa?\nB: Sí, empezó en un pequeño garaje hace veinte años.",
 exampleSrc:"A: Do you know the founder of this company?\nB: Yes, he started in a small garage twenty years ago.",
 funFact:"From Latin fundare (to lay a foundation). Same root as 'fundamento' (foundation)."},

{type:"fb",s:"Los trabajadores pidieron un {1} del quince por ciento.",a:["aumento de sueldo"],opts:["aumento de sueldo","convenio colectivo","empleo estatal","incentivo"],hint:"When workers want more money for the same job.",sSrc:"The workers asked for a {1} of fifteen percent."},

{type:"match",pairs:[
  {trg:"agencia de publicidad",src:"advertising agency"},
  {trg:"comercio exterior",src:"foreign trade"},
  {trg:"convenio colectivo",src:"collective agreement"},
  {trg:"fundador",src:"founder"},
  {trg:"incentivo",src:"incentive"}
]},

{type:"mc",q:"¿Qué necesitas aprobar en España para conseguir un empleo estatal?",opts:["Las oposiciones","El convenio colectivo","El comercio exterior","La contraprestación"],ans:"Las oposiciones",hint:"Competitive exams that are very challenging for public sector positions."},

{type:"fb",s:"La {1} ofrece formación gratuita como parte del acuerdo.",a:["contraprestación"],opts:["contraprestación","agencia de publicidad","directora ejecutiva","coordinadora"],hint:"Something given in return as part of a deal or contract.",sSrc:"The {1} offers free training as part of the agreement."}
]};
export default LESSON_1;
