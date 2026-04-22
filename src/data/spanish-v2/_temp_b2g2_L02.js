// B2 Gap2 Lesson 02 - Economy & Business
const LESSON_2 = {id:"esv2_b2g2_l2",title:"Economía y negocios",icon:"💼",xp:15,board:true,steps:[
{type:"intro",title:"Economía y negocios",desc:"Master the vocabulary of business, finance, and the corporate world in Spanish.",goals:["Learn 20 words about economy and business","Discuss financial topics confidently","Understand corporate Spanish terminology"]},

{type:"teach",trg:"el accionista",src:"the shareholder",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la accionista.\nOwner of shares (acciones) in a company.",
 example:"A: Los accionistas exigen más transparencia.\nB: Tienen derecho a conocer los resultados.",
 exampleSrc:"A: The shareholders demand more transparency.\nB: They have the right to know the results.",
 funFact:"From 'acción' (share/stock). The Madrid Stock Exchange (Bolsa de Madrid) dates back to 1831."},

{type:"teach",trg:"la bancarrota",src:"the bankruptcy",pos:"noun",gender:"f",
 note:"Feminine noun. Financial ruin, inability to pay debts.",
 example:"A: La empresa declaró la bancarrota el viernes.\nB: Más de doscientos empleados perderán su trabajo.",
 exampleSrc:"A: The company declared bankruptcy on Friday.\nB: More than two hundred employees will lose their jobs.",
 funFact:"From Italian 'banca rotta' (broken bench). Bankrupt merchants had their benches smashed."},

{type:"teach",trg:"la cotización",src:"the stock price / contribution rate",pos:"noun",gender:"f",
 note:"Feminine noun. Market price of shares, or social security contribution.",
 example:"A: ¿Cómo va la cotización de esa empresa?\nB: Ha subido un tres por ciento esta semana.",
 exampleSrc:"A: How is that company's stock price doing?\nB: It has risen three percent this week.",
 funFact:"'Cotizar a la Seguridad Social' means to pay social security contributions in Spain."},

{type:"teach",trg:"alcista",src:"bullish / upward-trending",pos:"adj",gender:null,
 note:"Adjective. Describes a rising market or optimistic trend.\nInvariant form for m/f.",
 example:"A: El mercado muestra una tendencia alcista.\nB: Los inversores están contentos con los resultados.",
 exampleSrc:"A: The market shows a bullish trend.\nB: Investors are happy with the results.",
 funFact:"The opposite is 'bajista' (bearish). Spanish uses 'al alza' and 'a la baja' as alternatives."},

{type:"teach",trg:"costear",src:"to finance / to cover the cost",pos:"verb",gender:null,
 note:"Regular -ar verb. To pay for something.",
 example:"A: ¿Quién va a costear las reformas?\nB: El ayuntamiento asumirá la mayor parte.",
 exampleSrc:"A: Who is going to finance the renovations?\nB: The city council will assume the majority.",
 funFact:"'Costear' can also mean to sail along a coast, from 'costa'. Context tells you which meaning."},

{type:"mc",q:"¿Qué es un accionista?",opts:["El dueño de acciones de una empresa","Un empleado del banco","Un tipo de impuesto","Un asesor financiero"],ans:"El dueño de acciones de una empresa",hint:"Someone who owns a piece of a company through shares."},

{type:"teach",trg:"costoso",src:"costly / expensive",pos:"adj",gender:null,
 note:"Adjective. Expensive or requiring great effort.\nFeminine: costosa.",
 example:"A: La reparación va a ser muy costosa.\nB: Quizás sea mejor comprar uno nuevo.",
 exampleSrc:"A: The repair is going to be very costly.\nB: Perhaps it is better to buy a new one.",
 funFact:"More formal than 'caro'. Used for processes and abstract costs, not just money."},

{type:"teach",trg:"contabilizar",src:"to account for / to record",pos:"verb",gender:null,
 note:"Regular -ar verb. To register in the accounts.",
 example:"A: ¿Ya contabilizaron todos los gastos del trimestre?\nB: Sí, el informe está listo.",
 exampleSrc:"A: Did they already account for all the quarterly expenses?\nB: Yes, the report is ready.",
 funFact:"From 'contable' (accountant). Spain uses 'contable' while Latin America prefers 'contador'."},

{type:"teach",trg:"la contratación",src:"the hiring / contracting",pos:"noun",gender:"f",
 note:"Feminine noun. The process of hiring employees or signing contracts.",
 example:"A: La contratación se ha frenado por la crisis.\nB: Muchas empresas han congelado los puestos.",
 exampleSrc:"A: Hiring has slowed down due to the crisis.\nB: Many companies have frozen positions.",
 funFact:"'Contratación temporal' (temporary hiring) is a major labor issue in Spain's economy."},

{type:"teach",trg:"la competitividad",src:"the competitiveness",pos:"noun",gender:"f",
 note:"Feminine noun. The ability to compete effectively in a market.",
 example:"A: Hay que mejorar la competitividad de nuestros productos.\nB: Podríamos invertir en innovación.",
 exampleSrc:"A: We need to improve the competitiveness of our products.\nB: We could invest in innovation.",
 funFact:"Spain ranks around 30th globally in the World Economic Forum competitiveness index."},

{type:"fb",s:"La empresa declaró la {1} tras años de pérdidas.",a:["bancarrota"],opts:["bancarrota","cotización","contratación","competitividad"],hint:"The state of being financially ruined and unable to pay debts.",sSrc:"The company declared {1} after years of losses."},

{type:"teach",trg:"corporativo",src:"corporate",pos:"adj",gender:null,
 note:"Adjective. Relating to a corporation or business entity.\nFeminine: corporativa.",
 example:"A: La imagen corporativa necesita una renovación.\nB: El logotipo tiene más de veinte años.",
 exampleSrc:"A: The corporate image needs a refresh.\nB: The logo is more than twenty years old.",
 funFact:"'Responsabilidad social corporativa' (CSR) became a buzzword in Spanish business in the 2000s."},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la coordinadora.\nPerson who organizes and harmonizes efforts.",
 example:"A: ¿Quién es el coordinador del proyecto?\nB: María, lleva coordinando equipos cinco años.",
 exampleSrc:"A: Who is the project coordinator?\nB: María, she has been coordinating teams for five years.",
 funFact:"In Spanish politics, 'coordinador general' is a common party leadership title."},

{type:"teach",trg:"el convenio colectivo",src:"the collective agreement",pos:"noun",gender:"m",
 note:"Masculine noun. A labor agreement negotiated between unions and employers.",
 example:"A: El nuevo convenio colectivo incluye mejoras salariales.\nB: Los sindicatos están satisfechos.",
 exampleSrc:"A: The new collective agreement includes salary improvements.\nB: The unions are satisfied.",
 funFact:"Spain has one of Europe's most extensive collective bargaining systems, covering millions."},

{type:"teach",trg:"avalar",src:"to endorse / to guarantee",pos:"verb",gender:null,
 note:"Regular -ar verb. To back something financially or morally.",
 example:"A: ¿Quién va a avalar el préstamo?\nB: Mis padres se han ofrecido como avalistas.",
 exampleSrc:"A: Who is going to guarantee the loan?\nB: My parents have offered to be guarantors.",
 funFact:"An 'aval' is a guarantee. Needing a guarantor ('avalista') is standard for Spanish rentals."},

{type:"mc",q:"¿Qué describe una tendencia alcista?",opts:["Un impuesto nuevo","Un mercado que sube","Un mercado que baja","Una empresa en bancarrota"],ans:"Un mercado que sube",hint:"Think about the direction of stock prices when investors are optimistic."},

{type:"teach",trg:"el conglomerado",src:"the conglomerate",pos:"noun",gender:"m",
 note:"Masculine noun. A large corporation made up of diverse businesses.",
 example:"A: El conglomerado controla empresas de varios sectores.\nB: Desde alimentación hasta tecnología.",
 exampleSrc:"A: The conglomerate controls companies in various sectors.\nB: From food to technology.",
 funFact:"Major Spanish conglomerates include ACS and Ferrovial, active worldwide in infrastructure."},

{type:"teach",trg:"la credibilidad",src:"the credibility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being trusted and believed.",
 example:"A: El banco ha perdido toda credibilidad.\nB: Después del escándalo, nadie confía en ellos.",
 exampleSrc:"A: The bank has lost all credibility.\nB: After the scandal, nobody trusts them.",
 funFact:"From Latin credibilis. 'Dar credibilidad' means to lend credibility to something."},

{type:"teach",trg:"el autoservicio",src:"the self-service (store)",pos:"noun",gender:"m",
 note:"Masculine noun. A shop where customers serve themselves.",
 example:"A: Prefiero comprar en el autoservicio de la esquina.\nB: Es más rápido que el supermercado grande.",
 exampleSrc:"A: I prefer to shop at the self-service store on the corner.\nB: It is faster than the big supermarket.",
 funFact:"Compound: auto (self) + servicio (service). Small self-service shops are common in Spanish towns."},

{type:"teach",trg:"el administrador",src:"the administrator / manager",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la administradora.\nPerson who manages property or a company.",
 example:"A: El administrador de la finca convocó una reunión.\nB: Hay que hablar del presupuesto anual.",
 exampleSrc:"A: The building manager called a meeting.\nB: We need to discuss the annual budget.",
 funFact:"In Spain, every apartment building has an 'administrador de fincas' who manages shared costs."},

{type:"teach",trg:"el asociado",src:"the associate / partner",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la asociada.\nA business partner or member of an association.",
 example:"A: Es asociado del bufete desde hace diez años.\nB: Ahora quiere montar su propia empresa.",
 exampleSrc:"A: He has been an associate at the law firm for ten years.\nB: Now he wants to start his own company.",
 funFact:"'Socio' is the more common word for business partner. 'Asociado' sounds more corporate."},

{type:"fb",s:"Los sindicatos negociaron un nuevo {1} con la empresa.",a:["convenio colectivo"],opts:["convenio colectivo","conglomerado","autoservicio","administrador"],hint:"A labor agreement between workers and employers about salaries and conditions.",sSrc:"The unions negotiated a new {1} with the company."},

{type:"match",pairs:[{trg:"bancarrota",src:"bankruptcy"},{trg:"cotización",src:"stock price"},{trg:"accionista",src:"shareholder"},{trg:"avalar",src:"to guarantee"},{trg:"credibilidad",src:"credibility"}]},

{type:"mc",q:"¿Quién custodia el dinero de los accionistas?",opts:["El asociado del bufete","El dueño del autoservicio","El administrador de la empresa","El coordinador del proyecto"],ans:"El administrador de la empresa",hint:"The person who manages and oversees a company's resources."}
]};

export default LESSON_2;
