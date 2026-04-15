// B2 Gap Batch 5 Lesson 02 - Business & Commerce
const LESSON_2 = {id:"esv2_b2g5_l2",title:"Negocios y comercio",icon:"💼",xp:15,board:true,steps:[
{type:"intro",title:"Negocios y comercio",desc:"Master essential business and commerce vocabulary used in Spanish professional settings.",goals:["Learn 15 words about business operations","Discuss commercial activities and finance","Use formal register for professional contexts"]},

{type:"teach",trg:"la facturación",src:"the billing / invoicing / turnover",pos:"noun",gender:"f",
 note:"Feminine noun. The process of issuing invoices.\nAlso means total revenue or turnover.",
 example:"A: La facturación de la empresa creció un diez por ciento.\nB: Es una cifra muy positiva.",
 exampleSrc:"A: The company's turnover grew by ten percent.\nB: That is a very positive figure.",
 funFact:"From factura (invoice). At Spanish airports, 'facturación' also means baggage check-in."},

{type:"teach",trg:"las finanzas",src:"the finances",pos:"noun",gender:"f",
 note:"Feminine noun, usually plural.\nRefers to the management of money.",
 example:"A: ¿Quién se encarga de las finanzas de la empresa?\nB: El departamento de contabilidad.",
 exampleSrc:"A: Who handles the company's finances?\nB: The accounting department.",
 funFact:"From Latin finis (end), referring to settling debts. 'Finanzas personales' is a growing field in Spain."},

{type:"teach",trg:"el comercio exterior",src:"the foreign trade",pos:"noun",gender:"m",
 note:"Masculine noun. International buying and selling.\nOpposite: comercio interior.",
 example:"A: El comercio exterior es clave para la economía española.\nB: Sobre todo las exportaciones de alimentos.",
 exampleSrc:"A: Foreign trade is key for the Spanish economy.\nB: Especially food exports.",
 funFact:"Spain is one of the world's top exporters of olive oil, wine, and citrus fruits."},

{type:"teach",trg:"el gravamen",src:"the tax / levy / encumbrance",pos:"noun",gender:"m",
 note:"Masculine noun. A charge or tax imposed on property or goods.\nPlural: gravámenes.",
 example:"A: Han aumentado el gravamen sobre los bienes inmuebles.\nB: Eso afectará a muchos propietarios.",
 exampleSrc:"A: They have increased the tax on real estate.\nB: That will affect many property owners.",
 funFact:"From Latin gravamen (burden). More formal than 'impuesto' and used in legal/fiscal contexts."},

{type:"teach",trg:"el convenio colectivo",src:"the collective agreement",pos:"noun",gender:"m",
 note:"Masculine noun. A labor contract between employers and unions.",
 example:"A: ¿Cuándo se renueva el convenio colectivo?\nB: Las negociaciones empiezan el mes que viene.",
 exampleSrc:"A: When is the collective agreement renewed?\nB: Negotiations start next month.",
 funFact:"Spain has one of Europe's highest rates of collective bargaining coverage, around 80%."},

{type:"mc",q:"¿Qué es la facturación de una empresa?",opts:["El total de ingresos por ventas","El número de empleados","La lista de proveedores","El horario de trabajo"],ans:"El total de ingresos por ventas",hint:"Think about the t... revenue a company brings in from selling goods or services."},

{type:"teach",trg:"el autoservicio",src:"the self-service (shop)",pos:"noun",gender:"m",
 note:"Masculine noun. A shop where customers serve themselves.\nCompound: auto + servicio.",
 example:"A: Prefiero comprar en el autoservicio de la esquina.\nB: Es más rápido que un supermercado grande.",
 exampleSrc:"A: I prefer buying at the self-service shop on the corner.\nB: It's faster than a big supermarket.",
 funFact:"Self-service shops arrived in Spain in the 1960s, replacing traditional counter-service grocers."},

{type:"teach",trg:"la contraprestación",src:"the consideration / compensation",pos:"noun",gender:"f",
 note:"Feminine noun. Something given in return for a service.\nLegal and business term.",
 example:"A: ¿Cuál es la contraprestación por este servicio?\nB: Quinientos euros al mes.",
 exampleSrc:"A: What is the compensation for this service?\nB: Five hundred euros per month.",
 funFact:"In contract law, a valid agreement requires 'contraprestación' from both parties."},

{type:"teach",trg:"el fraude",src:"the fraud",pos:"noun",gender:"m",
 note:"Masculine noun. Criminal deception for financial gain.\nRelated: fraudulento (fraudulent).",
 example:"A: Descubrieron un fraude fiscal en esa empresa.\nB: El director está siendo investigado.",
 exampleSrc:"A: They discovered tax fraud in that company.\nB: The director is being investigated.",
 funFact:"'Fraude fiscal' (tax fraud) is a major public issue in Spain, with high-profile cases regularly in the news."},

{type:"teach",trg:"el fiasco",src:"the fiasco / disaster",pos:"noun",gender:"m",
 note:"Masculine noun. A complete and embarrassing failure.",
 example:"A: El lanzamiento del producto fue un fiasco total.\nB: No vendieron ni cien unidades.",
 exampleSrc:"A: The product launch was a total fiasco.\nB: They didn't sell even a hundred units.",
 funFact:"From Italian fiasco (bottle). Legend says it comes from Venetian glassblowers who discarded flawed bottles."},

{type:"fb",s:"Las {1} de la empresa están en manos del nuevo director.",a:["finanzas"],opts:["finanzas","facturación","fraudes","contraprestaciones"],hint:"The general management of money and monetary resources.",sSrc:"The company's {1} are in the hands of the new director."},

{type:"teach",trg:"el aumento de sueldo",src:"the pay rise / salary increase",pos:"noun",gender:"m",
 note:"Masculine noun phrase. Aumento (increase) + de sueldo (of salary).",
 example:"A: He pedido un aumento de sueldo.\nB: ¿Y qué te han dicho?\nA: Que lo van a estudiar.",
 exampleSrc:"A: I have asked for a pay rise.\nB: And what did they say?\nA: That they will look into it.",
 funFact:"In Spain, salary negotiations typically happen during convenio colectivo renewals rather than individually."},

{type:"teach",trg:"la conveniencia",src:"the convenience / suitability",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being useful or appropriate.\nAlso: self-interest.",
 example:"A: Actuó por conveniencia, no por convicción.\nB: Eso no me sorprende nada.",
 exampleSrc:"A: He acted out of convenience, not conviction.\nB: That doesn't surprise me at all.",
 funFact:"'Matrimonio de conveniencia' (marriage of convenience) is used both literally and metaphorically."},

{type:"teach",trg:"la consistencia",src:"the consistency / firmness",pos:"noun",gender:"f",
 note:"Feminine noun. Firmness or coherence.\nAlso physical texture.",
 example:"A: La consistencia de su trabajo es admirable.\nB: Siempre entrega resultados de calidad.",
 exampleSrc:"A: The consistency of his work is admirable.\nB: He always delivers quality results.",
 funFact:"Beware: in Spanish 'consistencia' mainly means firmness/coherence, not logical consistency (that's 'coherencia')."},

{type:"teach",trg:"la estipulación",src:"the stipulation / clause",pos:"noun",gender:"f",
 note:"Feminine noun. A condition or requirement in an agreement.",
 example:"A: El contrato incluye una estipulación sobre plazos.\nB: Hay que cumplirla o habrá penalización.",
 exampleSrc:"A: The contract includes a stipulation about deadlines.\nB: We must comply or there will be a penalty.",
 funFact:"From Latin stipulatio, an ancient Roman verbal contract form requiring a formal question and answer."},

{type:"teach",trg:"la coproducción",src:"the co-production",pos:"noun",gender:"f",
 note:"Feminine noun. A joint production between two or more parties.\nCommon in film and TV.",
 example:"A: Esta película es una coproducción hispano-francesa.\nB: Por eso tiene actores de ambos países.",
 exampleSrc:"A: This film is a Spanish-French co-production.\nB: That's why it has actors from both countries.",
 funFact:"Spain has co-production treaties with over 20 countries, making it a hub for international filmmaking."},

{type:"mc",q:"¿Qué es un gravamen?",opts:["Un impuesto o carga fiscal","Un tipo de contrato laboral","Una reunión de negocios","Un aumento de precio"],ans:"Un impuesto o carga fiscal",hint:"A formal word for a burden or charge placed on property or goods by the government."},

{type:"fb",s:"El {1} colectivo establece las condiciones laborales del sector.",a:["convenio"],opts:["convenio","gravamen","fraude","autoservicio"],hint:"A formal agreement negotiated between workers' unions and employers.",sSrc:"The collective {1} establishes the working conditions for the sector."},

{type:"match",pairs:[{trg:"facturación",src:"billing / turnover"},{trg:"fraude",src:"fraud"},{trg:"gravamen",src:"tax / levy"},{trg:"fiasco",src:"fiasco"},{trg:"conveniencia",src:"convenience"}]},

{type:"fb",s:"El lanzamiento fue un {1} porque nadie compró el producto.",a:["fiasco"],opts:["fiasco","fraude","gravamen","convenio"],hint:"A word for a complete and embarrassing failure, borrowed from Italian.",sSrc:"The launch was a {1} because nobody bought the product."},

{type:"mc",q:"¿Qué es una contraprestación?",opts:["Algo que se da a cambio de un servicio","Un tipo de fraude comercial","Una queja formal al director","Un aumento de sueldo anual"],ans:"Algo que se da a cambio de un servicio",hint:"In a contract, both sides must give something. This word describes what is given in return."}
]};

export default LESSON_2;
