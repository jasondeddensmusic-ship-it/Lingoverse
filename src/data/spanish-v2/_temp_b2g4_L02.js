// B2 Gap Batch 4 Lesson 02 - Economy & Business
const LESSON_2 = {id:"esv2_b2g4_l2",title:"Economía y empresa",icon:"📊",xp:15,board:true,steps:[
{type:"intro",title:"Economía y empresa",desc:"Build advanced vocabulary for discussing business operations, economic concepts, and workplace structures.",goals:["Learn 15 words about economy and business","Discuss corporate structures","Use economic terminology naturally"]},

{type:"teach",trg:"la factoría",src:"the factory",pos:"noun",gender:"f",
 note:"Feminine noun. A manufacturing plant.\nMore formal than 'fábrica'.",
 example:"A: La factoría de coches cerró el año pasado.\nB: Muchos trabajadores perdieron su empleo.",
 exampleSrc:"A: The car factory closed last year.\nB: Many workers lost their jobs.",
 funFact:"Originally meant a trading post overseas. Now mainly used for large industrial plants."},

{type:"teach",trg:"factible",src:"feasible / achievable",pos:"adj",gender:null,
 note:"Adjective. Something that can be done.\nSynonym: viable, realizable.",
 example:"A: ¿Es factible terminar el proyecto este mes?\nB: Sí, si contratamos más personal.",
 exampleSrc:"A: Is it feasible to finish the project this month?\nB: Yes, if we hire more staff.",
 funFact:"From Latin factibilis (doable). Preferred in formal business Spanish over 'posible'."},

{type:"teach",trg:"la estafa",src:"the scam / fraud",pos:"noun",gender:"f",
 note:"Feminine noun. A dishonest scheme to get money.\nVerb: estafar.",
 example:"A: Cayeron en una estafa por internet.\nB: Hay que tener mucho cuidado con los correos sospechosos.",
 exampleSrc:"A: They fell for an internet scam.\nB: You have to be very careful with suspicious emails.",
 funFact:"From Italian staffa. Phone scams targeting the elderly are a growing problem in Spain."},

{type:"teach",trg:"la estabilidad",src:"the stability",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being stable.\nCommon: estabilidad laboral (job stability).",
 example:"A: Lo que más valoro en un trabajo es la estabilidad.\nB: Yo también. La incertidumbre es agotadora.",
 exampleSrc:"A: What I value most in a job is stability.\nB: Me too. Uncertainty is exhausting.",
 funFact:"'Estabilidad presupuestaria' (fiscal stability) became a constitutional principle in Spain in 2011."},

{type:"teach",trg:"el estándar",src:"the standard",pos:"noun",gender:"m",
 note:"Masculine noun. An accepted level of quality.\nAlso used as adjective: un producto estándar.",
 example:"A: Necesitamos cumplir los estándares internacionales.\nB: El departamento de calidad lo supervisará.",
 exampleSrc:"A: We need to meet international standards.\nB: The quality department will oversee it.",
 funFact:"Borrowed from English 'standard'. The RAE accepted it with accent mark on the 'á'."},

{type:"mc",q:"¿Qué es una estafa?",opts:["Un engaño para obtener dinero","Un tipo de contrato","Una inversión segura","Un préstamo bancario"],ans:"Un engaño para obtener dinero",hint:"Think about dishonest schemes that trick people out of money."},

{type:"teach",trg:"estandarizar",src:"to standardize",pos:"verb",gender:null,
 note:"Regular -ar verb. To make uniform or consistent.\nNoun: la estandarización.",
 example:"A: Queremos estandarizar los procesos de producción.\nB: Eso mejorará la eficiencia.",
 exampleSrc:"A: We want to standardize the production processes.\nB: That will improve efficiency.",
 funFact:"The RAE also accepts 'estandardizar', but the shorter form is far more common."},

{type:"teach",trg:"exportador",src:"exporting / exporter",pos:"adj",gender:null,
 note:"Adjective or noun. Related to selling goods abroad.\nFeminine: exportadora.",
 example:"A: España es un gran país exportador de aceite de oliva.\nB: Es el mayor productor del mundo.",
 exampleSrc:"A: Spain is a major olive oil exporting country.\nB: It is the world's largest producer.",
 funFact:"Spain exports over 50% of the world's olive oil, making it the undisputed global leader."},

{type:"teach",trg:"la expropiación",src:"the expropriation",pos:"noun",gender:"f",
 note:"Feminine noun. Government seizure of private property.\nVerb: expropiar.",
 example:"A: La expropiación de los terrenos generó mucha polémica.\nB: Los vecinos exigieron una compensación justa.",
 exampleSrc:"A: The expropriation of the land generated a lot of controversy.\nB: The residents demanded fair compensation.",
 funFact:"In Spain, expropriation requires 'causa de utilidad pública' (public utility justification)."},

{type:"teach",trg:"expropiar",src:"to expropriate",pos:"verb",gender:null,
 note:"Regular -ar verb. To take private property for public use.\nRequires legal justification.",
 example:"A: El ayuntamiento quiere expropiar los terrenos para construir un hospital.\nB: Tendrán que pagar a los propietarios.",
 exampleSrc:"A: The city council wants to expropriate the land to build a hospital.\nB: They will have to pay the owners.",
 funFact:"From Latin expropriare (ex- out + proprius own). A highly debated political topic in Spain."},

{type:"fb",s:"La empresa necesita cumplir los {1} de calidad europeos.",a:["estándares"],opts:["estándares","estafas","factorías","expropiaciones"],hint:"The accepted levels of quality that products must meet.",sSrc:"The company needs to meet European quality {1}."},

{type:"teach",trg:"especular",src:"to speculate",pos:"verb",gender:null,
 note:"Regular -ar verb. To make risky financial bets or to theorize.\nNoun: la especulación.",
 example:"A: Muchos inversores especularon con la vivienda.\nB: Y eso contribuyó a la burbuja inmobiliaria.",
 exampleSrc:"A: Many investors speculated on housing.\nB: And that contributed to the real estate bubble.",
 funFact:"From Latin speculari (to observe). Spain's 2008 housing crash was fueled by speculation."},

{type:"teach",trg:"especulativo",src:"speculative",pos:"adj",gender:null,
 note:"Adjective. Based on speculation rather than facts.\nFeminine: especulativa.",
 example:"A: Esa inversión es demasiado especulativa para mí.\nB: Entiendo, prefieres algo más seguro.",
 exampleSrc:"A: That investment is too speculative for me.\nB: I understand, you prefer something safer.",
 funFact:"'Burbuja especulativa' (speculative bubble) is one of Spain's most discussed economic terms."},

{type:"teach",trg:"el exponente",src:"the exponent / example",pos:"noun",gender:"m",
 note:"Masculine noun. A leading representative or mathematical power.\nAlso: el máximo exponente.",
 example:"A: Picasso es el máximo exponente del cubismo.\nB: Su obra revolucionó el arte del siglo XX.",
 exampleSrc:"A: Picasso is the greatest exponent of cubism.\nB: His work revolutionized twentieth-century art.",
 funFact:"In math, 'exponente' means the power to which a number is raised, just like in English."},

{type:"mc",q:"¿Qué significa 'factible'?",opts:["Que se puede hacer","Que es muy caro","Que está prohibido","Que ya está hecho"],ans:"Que se puede hacer",hint:"Think about whether a plan or project can actually be carried out."},

{type:"teach",trg:"la especialización",src:"the specialization",pos:"noun",gender:"f",
 note:"Feminine noun. Focusing on a specific area.\nVerb: especializarse.",
 example:"A: ¿Cuál es tu especialización profesional?\nB: Me especializo en derecho laboral.",
 exampleSrc:"A: What is your professional specialization?\nB: I specialize in labor law.",
 funFact:"Spanish universities offer 'másteres de especialización' as post-graduate focused programs."},

{type:"fb",s:"Es {1} terminar antes del viernes si todos colaboramos.",a:["factible"],opts:["factible","especulativo","exportador","estéril"],hint:"Something that can realistically be accomplished or achieved.",sSrc:"It is {1} to finish before Friday if we all collaborate."},

{type:"match",pairs:[{trg:"estafa",src:"scam"},{trg:"factoría",src:"factory"},{trg:"estabilidad",src:"stability"},{trg:"expropiación",src:"expropriation"},{trg:"exponente",src:"exponent"}]},

{type:"mc",q:"España es el mayor país exportador de:",opts:["Aceite de oliva","Café","Chocolate","Algodón"],ans:"Aceite de oliva",hint:"Think about the Mediterranean product Spain produces more than anyone else."},

{type:"fb",s:"La {1} inmobiliaria causó la crisis de 2008 en España.",a:["especulación"],opts:["especulación","estabilidad","expropiación","especialización"],hint:"Risky financial betting on rising property prices.",sSrc:"Real estate {1} caused the 2008 crisis in Spain."}
]};

export default LESSON_2;
