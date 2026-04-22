// B2 Gap Batch D Lesson 1 - Business & Commerce
const LESSON_1 = {id:"esv2_b2gD_l1",title:"Negocios y comercio",icon:"\uD83D\uDCBC",xp:15,board:true,steps:[
{type:"intro",title:"Negocios y comercio",desc:"Master essential business and commerce vocabulary for professional Spanish at B2 level.",goals:["Learn 10 business and trade vocabulary items","Discuss commercial operations confidently","Use formal workplace terminology"]},

{type:"teach",trg:"el comercio exterior",src:"foreign trade",pos:"noun",gender:"m",
 note:"Masculine noun. Comercio (commerce) + exterior (foreign).\nRefers to imports and exports between countries.",
 example:"A: El comercio exterior ha crecido un quince por ciento este trimestre.\nB: Las exportaciones a Asia han sido clave.",
 exampleSrc:"A: Foreign trade has grown fifteen percent this quarter.\nB: Exports to Asia have been key.",
 funFact:"Spain's top export partners are France and Germany. The phrase 'balanza comercial' (trade balance) is central to economic debates."},

{type:"teach",trg:"el convenio colectivo",src:"collective bargaining agreement",pos:"noun",gender:"m",
 note:"Masculine noun. A legally binding labor agreement.\nNegotiated between unions and employers.",
 example:"A: El nuevo convenio colectivo incluye mejores condiciones salariales.\nB: Los sindicatos lucharon mucho por ello.",
 exampleSrc:"A: The new collective agreement includes better salary conditions.\nB: The unions fought hard for it.",
 funFact:"In Spain, convenios colectivos cover roughly 80% of workers, one of the highest rates in Europe."},

{type:"teach",trg:"el aumento de sueldo",src:"pay raise",pos:"noun",gender:"m",
 note:"Masculine noun. Aumento (increase) + de sueldo (of salary).\nA formal way to discuss wage increases.",
 example:"A: Voy a pedir un aumento de sueldo a mi jefa.\nB: Prepara bien tus argumentos antes de la reunión.",
 exampleSrc:"A: I'm going to ask my boss for a pay raise.\nB: Prepare your arguments well before the meeting.",
 funFact:"The verb 'solicitar' (to request formally) is preferred over 'pedir' when asking for a raise in writing."},

{type:"teach",trg:"el jefe",src:"the boss / chief",pos:"noun",gender:"m",
 note:"Masculine noun. The person in charge.\nFeminine form: la jefa.",
 example:"A: Mi jefe quiere que terminemos el proyecto para el viernes.\nB: Entonces tendremos que trabajar horas extra.",
 exampleSrc:"A: My boss wants us to finish the project by Friday.\nB: Then we'll have to work overtime.",
 funFact:"'Jefe' comes from French 'chef'. In Latin America, 'jefe' is also used affectionately for parents."},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. Person who organizes tasks and teams.\nFeminine: la coordinadora.",
 example:"A: El coordinador del evento ha cambiado la fecha.\nB: Espero que nos avise con suficiente antelación.",
 exampleSrc:"A: The event coordinator has changed the date.\nB: I hope he gives us enough advance notice.",
 funFact:"The verb 'coordinar' gained huge usage in corporate Spain after the 2000s management consulting boom."},

{type:"mc",q:"Un convenio colectivo es un acuerdo entre...",opts:["Sindicatos y empresas","Países y organizaciones internacionales","Profesores y alumnos","Médicos y pacientes"],ans:"Sindicatos y empresas",hint:"Think about the workplace: who negotiates salary conditions and labor rights collectively?"},

{type:"teach",trg:"el negociador",src:"the negotiator",pos:"noun",gender:"m",
 note:"Masculine noun. Someone skilled in reaching agreements.\nFrom negociar (to negotiate).",
 example:"A: Necesitamos un buen negociador para cerrar este contrato.\nB: Elena tiene mucha experiencia en negociaciones complejas.",
 exampleSrc:"A: We need a good negotiator to close this contract.\nB: Elena has a lot of experience in complex negotiations.",
 funFact:"The suffix -dor turns verbs into agent nouns: negociar > negociador, like English -tor in negotiator."},

{type:"teach",trg:"el mediador",src:"the mediator",pos:"noun",gender:"m",
 note:"Masculine noun. A neutral third party in disputes.\nFrom mediar (to mediate).",
 example:"A: El mediador logró que ambas partes llegaran a un acuerdo.\nB: Sin su intervención, el conflicto habría continuado.",
 exampleSrc:"A: The mediator managed to get both parties to reach an agreement.\nB: Without his intervention, the conflict would have continued.",
 funFact:"Spain introduced mandatory mediation for many labor disputes in 2012 to reduce court backlogs."},

{type:"teach",trg:"el agente",src:"the agent",pos:"noun",gender:"m",
 note:"Masculine/feminine noun with same form.\nCan refer to police, sales, or real estate agents.",
 example:"A: El agente inmobiliario nos enseñó tres pisos esta mañana.\nB: El segundo me gustó mucho, tiene buena luz.",
 exampleSrc:"A: The real estate agent showed us three apartments this morning.\nB: I liked the second one a lot, it has good light.",
 funFact:"In Spain, 'agente' alone often means police officer. Add the field: agente comercial (sales), agente de seguros (insurance)."},

{type:"fb",s:"La empresa necesita un buen {1} para resolver el conflicto laboral.",a:["mediador"],opts:["mediador","coordinador","jefe","agente"],hint:"A neutral person who helps two opposing sides reach a compromise.",sSrc:"The company needs a good {1} to resolve the labor conflict."},

{type:"teach",trg:"el conductor",src:"the driver / host",pos:"noun",gender:"m",
 note:"Masculine noun. Can mean vehicle driver or TV host.\nFeminine: la conductora.",
 example:"A: El conductor del autobús conoce todas las rutas de la ciudad.\nB: Lleva trabajando aquí más de veinte años.",
 exampleSrc:"A: The bus driver knows all the city routes.\nB: He has been working here for over twenty years.",
 funFact:"In Spain, a TV presenter is called 'presentador', but in Latin America 'conductor' is preferred for this meaning."},

{type:"teach",trg:"la consideración",src:"the consideration / regard",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought or respect for others.\nTener en consideración: to take into account.",
 example:"A: Tu propuesta merece seria consideración.\nB: Gracias, he trabajado mucho en los detalles.",
 exampleSrc:"A: Your proposal deserves serious consideration.\nB: Thank you, I've worked hard on the details.",
 funFact:"In formal letters, 'Le ruego tenga a bien tomar en consideración' is the ultra-polite way to say 'please consider'."},

{type:"mc",q:"Si necesitas un aumento de sueldo, hablas con...",opts:["El mediador del barrio","Tu jefe o jefa","El conductor del autobús","Un agente inmobiliario"],ans:"Tu jefe o jefa",hint:"The person who decides your salary in your workplace."},

{type:"match",pairs:[
 {trg:"negociador",src:"negotiator"},
 {trg:"mediador",src:"mediator"},
 {trg:"coordinador",src:"coordinator"},
 {trg:"conductor",src:"driver / host"},
 {trg:"agente",src:"agent"}
]},

{type:"fb",s:"El {1} ha crecido gracias a las exportaciones de aceite de oliva.",a:["comercio exterior"],opts:["comercio exterior","convenio colectivo","aumento de sueldo","agente"],hint:"The broad term for trade between countries, including imports and exports.",sSrc:"The {1} has grown thanks to olive oil exports."},

{type:"mc",q:"Un coordinador se encarga de...",opts:["Negociar contratos internacionales","Resolver conflictos legales","Organizar tareas y equipos","Conducir vehículos pesados"],ans:"Organizar tareas y equipos",hint:"This role is about keeping tasks and people aligned and organized."},

{type:"fb",s:"Tras meses de negociación, firmaron el nuevo {1}.",a:["convenio colectivo"],opts:["convenio colectivo","aumento de sueldo","comercio exterior","consideración"],hint:"A formal labor agreement negotiated between worker representatives and employers.",sSrc:"After months of negotiation, they signed the new {1}."}
]};
export default LESSON_1;
