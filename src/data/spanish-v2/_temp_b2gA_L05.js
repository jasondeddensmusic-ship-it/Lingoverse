// Lesson 5 — Discurso académico
const LESSON_5 = {id:"esv2_b2gA_l5", title:"Discurso académico", icon:"🎓", xp:15, board:true, steps:[
{type:"intro", title:"Discurso académico", desc:"Master the language of academic discourse, argumentation, and formal presentations.", goals:["Learn 15 academic discourse terms","Structure arguments formally","Navigate university-level vocabulary"]},

{type:"teach", trg:"la complementación", src:"complementation / supplementation", pos:"noun", gender:"f",
 note:"The act of completing or supplementing something.\nFrom complementar (to complement).",
 example:"A: La complementación de los datos requiere más investigación.\nB: Necesitamos fuentes adicionales.",
 exampleSrc:"A: The supplementation of the data requires more research.\nB: We need additional sources.",
 funFact:"In linguistics, complementation refers to how verbs take their complements."},

{type:"teach", trg:"la intermediación", src:"mediation / intermediation", pos:"noun", gender:"f",
 note:"Acting as a go-between in a negotiation or process.\nFrom intermediar.",
 example:"A: La intermediación del profesor resolvió el conflicto.\nB: Sin su ayuda, no habríamos llegado a un acuerdo.",
 exampleSrc:"A: The teacher's mediation resolved the conflict.\nB: Without her help, we wouldn't have reached an agreement.",
 funFact:"'Intermediación financiera' is what banks do: channel funds from savers to borrowers."},

{type:"teach", trg:"la negociación", src:"the negotiation", pos:"noun", gender:"f",
 note:"Discussion aimed at reaching an agreement.\nFrom negocio (business).",
 example:"A: La negociación salarial duró tres meses.\nB: Al final consiguieron un aumento del cinco por ciento.",
 exampleSrc:"A: The salary negotiation lasted three months.\nB: In the end they got a five percent raise.",
 funFact:"From Latin negotium (not leisure). Business was literally 'not being idle'."},

{type:"teach", trg:"el negociador", src:"the negotiator", pos:"noun", gender:"m",
 note:"A person who conducts negotiations.\nFeminine: la negociadora.",
 example:"A: Necesitamos un buen negociador para este acuerdo.\nB: María es excelente negociadora.",
 exampleSrc:"A: We need a good negotiator for this agreement.\nB: María is an excellent negotiator.",
 funFact:"Spain's top labor negotiators are called 'mediadores sociales'."},

{type:"teach", trg:"la mediación", src:"mediation", pos:"noun", gender:"f",
 note:"Intervention to resolve a dispute.\nDifferent from arbitraje (binding decision).",
 example:"A: Propongo recurrir a la mediación antes de ir a juicio.\nB: Es más rápido y más barato.",
 exampleSrc:"A: I propose resorting to mediation before going to court.\nB: It's faster and cheaper.",
 funFact:"Spain's 2012 mediation law made it a recognized alternative to court proceedings."},

{type:"mc", q:"¿Qué diferencia hay entre mediación y arbitraje?", opts:["La mediación propone, el arbitraje decide","Son exactamente iguales","La mediación es más cara","El arbitraje es voluntario, la mediación obligatoria"], ans:"La mediación propone, el arbitraje decide",
 hint:"One suggests solutions; the other makes a binding decision."},

{type:"fb", s:"La {1} entre los dos países evitó un conflicto mayor.", a:["mediación"], opts:["mediación","negociación","complementación","intermediación"],
 hint:"This noun refers to intervention by a third party to resolve a dispute.",
 sSrc:"The {1} between the two countries avoided a larger conflict."},

{type:"teach", trg:"el mediador", src:"the mediator", pos:"noun", gender:"m",
 note:"A neutral person who helps resolve disputes.\nFeminine: la mediadora.",
 example:"A: El mediador escuchó a ambas partes con imparcialidad.\nB: Su intervención fue decisiva.",
 exampleSrc:"A: The mediator listened to both sides impartially.\nB: His intervention was decisive.",
 funFact:"UN mediators for Spanish-speaking conflicts must be fluent in all local dialects."},

{type:"teach", trg:"la incursión", src:"the incursion / foray", pos:"noun", gender:"f",
 note:"A sudden entry into a new area or territory.\nFrom Latin incursio (attack).",
 example:"A: Su incursión en la política fue breve pero memorable.\nB: Volvió al mundo académico después de dos años.",
 exampleSrc:"A: Her foray into politics was brief but memorable.\nB: She returned to academia after two years.",
 funFact:"Originally a military term. Now commonly used for career changes or new ventures."},

{type:"teach", trg:"la congregación", src:"the congregation / gathering", pos:"noun", gender:"f",
 note:"A group assembled for a common purpose.\nAlso: a religious community.",
 example:"A: La congregación de expertos debatió el tema durante horas.\nB: No llegaron a un consenso claro.",
 exampleSrc:"A: The gathering of experts debated the topic for hours.\nB: They didn't reach a clear consensus.",
 funFact:"In the Vatican, congregaciones are the departments of the Roman Curia."},

{type:"mc", q:"¿Quién es un 'negociador'?", opts:["Una persona que conduce negociaciones","Un tipo de abogado","Un juez de un tribunal","Un político elegido"], ans:"Una persona que conduce negociaciones",
 hint:"The word directly derives from 'negociación' plus the agent suffix -dor."},

{type:"fb", s:"El {1} propuso un compromiso aceptable para ambas partes.", a:["mediador"], opts:["mediador","negociador","mediación","incursión"],
 hint:"This person is a neutral third party who helps resolve disputes.",
 sSrc:"The {1} proposed an acceptable compromise for both parties."},

{type:"teach", trg:"la contraprestación", src:"the consideration / reciprocal payment", pos:"noun", gender:"f",
 note:"What one party gives in return in a contract.\nContra- (against) + prestación (benefit).",
 example:"A: ¿Cuál es la contraprestación por este servicio?\nB: El pago mensual de quinientos euros.",
 exampleSrc:"A: What is the consideration for this service?\nB: A monthly payment of five hundred euros.",
 funFact:"Essential legal term. A contract without contraprestación is technically a gift."},

{type:"teach", trg:"la internacionalización", src:"internationalization", pos:"noun", gender:"f",
 note:"The process of expanding to international markets.\nFrom internacional.",
 example:"A: La internacionalización de la empresa fue un éxito.\nB: Ahora operan en quince países.",
 exampleSrc:"A: The internationalization of the company was a success.\nB: They now operate in fifteen countries.",
 funFact:"At 20 letters, this is one of Spanish's longest commonly used words."},

{type:"teach", trg:"la finalización", src:"the completion / finalization", pos:"noun", gender:"f",
 note:"Bringing something to its end or conclusion.\nFrom finalizar (to finalize).",
 example:"A: La finalización del proyecto se ha retrasado dos semanas.\nB: Esperemos que no haya más retrasos.",
 exampleSrc:"A: The completion of the project has been delayed by two weeks.\nB: Let's hope there are no more delays.",
 funFact:"Spanish loves nominal forms: finalizar becomes finalización, just like English '-ize' becomes '-ization'."},

{type:"match", pairs:[
 {trg:"la negociación", src:"negotiation"},
 {trg:"el mediador", src:"mediator"},
 {trg:"la incursión", src:"foray"},
 {trg:"la contraprestación", src:"reciprocal payment"},
 {trg:"la internacionalización", src:"internationalization"}
]},

{type:"fb", s:"La {1} del acuerdo comercial se celebrará el viernes.", a:["finalización"], opts:["finalización","internacionalización","intermediación","congregación"],
 hint:"This noun means the completion or conclusion of something.",
 sSrc:"The {1} of the trade agreement will take place on Friday."},

{type:"mc", q:"¿Qué es una 'contraprestación'?", opts:["Lo que una parte ofrece a cambio en un contrato","Una queja formal","Un tipo de impuesto","Un regalo sin condiciones"], ans:"Lo que una parte ofrece a cambio en un contrato",
 hint:"In contracts, both sides must give something. This is what one side gives."},

{type:"fb", s:"La {1} de la empresa al mercado asiático generó enormes beneficios.", a:["internacionalización"], opts:["internacionalización","finalización","complementación","congregación"],
 hint:"This very long noun refers to expanding a business to international markets.",
 sSrc:"The {1} of the company to the Asian market generated enormous profits."},

{type:"drag_fill", s:"La {1} entre sindicatos y empresa requirió un {2} neutral.", blanks:{"1":"negociación","2":"mediador"}, pool:["negociación","mediador","incursión","congregación"],
 hint:"The discussion between unions and company needed a neutral third party."},

{type:"match", pairs:[
 {trg:"la mediación", src:"mediation"},
 {trg:"la complementación", src:"supplementation"},
 {trg:"la congregación", src:"gathering"},
 {trg:"la finalización", src:"completion"},
 {trg:"el negociador", src:"negotiator"}
]}
]};
export default LESSON_5;
