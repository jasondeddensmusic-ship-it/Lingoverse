// Spanish B2 Final Batch - Lesson 4: Economy & Business
const LESSON_4 = {
  id:"esv2_b2fin_l4", title:"Economía y Negocios", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economía y Negocios",
     desc:"Learn the vocabulary of economics, finance, and business. Discuss markets, investment, and entrepreneurship with confidence.",
     goals:["Describe economic concepts and market dynamics","Discuss investment and corporate vocabulary","Express opinions about economic trends and policies"]},

    {type:"teach", trg:"la inversión", src:"the investment", pos:"noun", gender:"f",
     note:"Money put into something with the expectation of future profit.",
     example:"A: ¿Es buena idea hacer una inversión en bolsa?\nB: Depende de tu tolerancia al riesgo.",
     exampleSrc:"A: Is it a good idea to make an investment in the stock market?\nB: It depends on your risk tolerance.",
     funFact:"From Latin 'investire' (to clothe). You 'clothe' your money in an asset, hoping it grows."},

    {type:"teach", trg:"empresarial", src:"business / corporate", pos:"adj", gender:null,
     note:"Related to businesses or companies. Used in formal and academic contexts.",
     example:"A: El sector empresarial pide menos impuestos.\nB: La cultura empresarial en España está cambiando.",
     exampleSrc:"A: The business sector is asking for lower taxes.\nB: Business culture in Spain is changing.",
     funFact:"From 'empresa' (company/enterprise), from Italian 'impresa' (undertaking). Same root as 'entrepreneur'."},

    {type:"teach", trg:"la cotización", src:"the stock price / quote", pos:"noun", gender:"f",
     note:"The current price of a stock or asset on the market.",
     example:"A: ¿Cuál es la cotización del euro hoy?\nB: La cotización ha subido respecto a ayer.",
     exampleSrc:"A: What is the euro quote today?\nB: The price has gone up compared to yesterday.",
     funFact:"From 'cotizar' (to quote a price). Originally meant 'to assess a share' in medieval trade guilds."},

    {type:"teach", trg:"la bolsa", src:"the stock market / stock exchange", pos:"noun", gender:"f",
     note:"The financial market where stocks are traded. Also means 'bag'.",
     example:"A: La bolsa cayó un 3% esta mañana.\nB: Los inversores están nerviosos por la bolsa.",
     exampleSrc:"A: The stock market fell 3% this morning.\nB: Investors are nervous about the market.",
     funFact:"Named after the Van der Beurze family of Bruges, whose house hosted early stock trades in the 1300s."},

    {type:"teach", trg:"el presupuesto", src:"the budget", pos:"noun", gender:"m",
     note:"An estimate of income and spending for a set period.",
     example:"A: ¿Habéis aprobado el presupuesto para este año?\nB: El presupuesto incluye más gasto en educación.",
     exampleSrc:"A: Have you approved the budget for this year?\nB: The budget includes more spending on education.",
     funFact:"From 'pre-' (before) + 'supuesto' (assumed). A budget 'pre-assumes' future costs and income."},

    {type:"teach", trg:"el beneficio", src:"the profit / benefit", pos:"noun", gender:"m",
     note:"Financial gain from business. Also means advantage or benefit in general.",
     example:"A: La empresa obtuvo un beneficio récord.\nB: Parte del beneficio se reinvierte en innovación.",
     exampleSrc:"A: The company made a record profit.\nB: Part of the profit is reinvested in innovation.",
     funFact:"From Latin 'beneficium' (good deed). In business, it shifted to mean financial gain specifically."},

    {type:"mc", q:"¿Qué es 'la bolsa' en el contexto financiero?",
     opts:["El mercado donde se negocian acciones","Un presupuesto","Una tienda","Un banco"],
     ans:"El mercado donde se negocian acciones",
     hint:"This is the financial market where company shares are bought and sold."},

    {type:"teach", trg:"la deuda", src:"the debt", pos:"noun", gender:"f",
     note:"Money owed to another person, company, or institution.",
     example:"A: La deuda pública ha crecido enormemente.\nB: Reducir la deuda es una prioridad del gobierno.",
     exampleSrc:"A: Public debt has grown enormously.\nB: Reducing debt is a government priority.",
     funFact:"From Latin 'debita' (things owed). Spanish kept the Latin feminine form while English simplified it."},

    {type:"teach", trg:"el desempleo", src:"unemployment", pos:"noun", gender:"m",
     note:"The state of being without a job. A key economic indicator.",
     example:"A: La tasa de desempleo ha bajado al 11%.\nB: El desempleo juvenil sigue siendo un problema grave.",
     exampleSrc:"A: The unemployment rate has dropped to 11%.\nB: Youth unemployment remains a serious problem.",
     funFact:"'Des-' (un-) + 'empleo' (employment). Spain historically has one of the highest rates in the EU."},

    {type:"teach", trg:"rentable", src:"profitable", pos:"adj", gender:null,
     note:"Producing a financial return that justifies the investment.",
     example:"A: ¿Es rentable abrir un restaurante en esta zona?\nB: Sí, hay mucho turismo y es muy rentable.",
     exampleSrc:"A: Is it profitable to open a restaurant in this area?\nB: Yes, there's a lot of tourism and it's very profitable.",
     funFact:"From 'renta' (income/rent), Latin 'reddita' (things returned). Profitable means it 'returns' money."},

    {type:"fb", s:"La empresa obtuvo un {1} de tres millones de euros.", a:["beneficio"],
     opts:["beneficio","presupuesto","desempleo","deuda"],
     hint:"This word means financial gain or profit earned by a company.",
     sSrc:"The company earned a {1} of three million euros."},

    {type:"teach", trg:"la inflación", src:"inflation", pos:"noun", gender:"f",
     note:"The general rise in prices over time, reducing purchasing power.",
     example:"A: La inflación ha subido al 5% este trimestre.\nB: Con tanta inflación, todo es más caro.",
     exampleSrc:"A: Inflation has risen to 5% this quarter.\nB: With so much inflation, everything is more expensive.",
     funFact:"From Latin 'inflatio' (swelling). Prices 'swell' when there is too much money chasing too few goods."},

    {type:"teach", trg:"el impuesto", src:"the tax", pos:"noun", gender:"m",
     note:"A mandatory financial charge imposed by the government.",
     example:"A: ¿Cuánto pagas de impuestos al año?\nB: Los impuestos sobre la renta son bastante altos.",
     exampleSrc:"A: How much do you pay in taxes per year?\nB: Income taxes are quite high.",
     funFact:"From Latin 'impositus' (placed upon). Taxes are literally 'placed upon' citizens by the state."},

    {type:"teach", trg:"la competencia", src:"the competition / competence", pos:"noun", gender:"f",
     note:"Rivalry between companies in a market. Also means skill or ability.",
     example:"A: La competencia en el sector tecnológico es feroz.\nB: Hay que diferenciarse de la competencia.",
     exampleSrc:"A: Competition in the tech sector is fierce.\nB: You have to differentiate yourself from the competition.",
     funFact:"From Latin 'competentia'. Dual meaning in Spanish: both rivalry and capability/jurisdiction."},

    {type:"teach", trg:"exportar", src:"to export", pos:"verb", gender:null,
     note:"To sell and send goods to another country.",
     example:"A: España exporta mucho aceite de oliva.\nB: Queremos exportar nuestros productos a Asia.",
     exampleSrc:"A: Spain exports a lot of olive oil.\nB: We want to export our products to Asia.",
     funFact:"From Latin 'exportare' (to carry out). 'Ex-' (out) + 'portare' (to carry). Opposite: 'importar'."},

    {type:"mc", q:"¿Qué indica una tasa de inflación alta?",
     opts:["Que los precios bajan","Que los precios suben continuamente","Que hay más empleo","Que la bolsa sube"],
     ans:"Que los precios suben continuamente",
     hint:"This economic phenomenon means your money buys less because prices keep rising."},

    {type:"teach", trg:"el accionista", src:"the shareholder", pos:"noun", gender:"m",
     note:"A person who owns shares in a company.",
     example:"A: Los accionistas exigen más transparencia.\nB: Cada accionista tiene derecho a voto.",
     exampleSrc:"A: The shareholders demand more transparency.\nB: Each shareholder has the right to vote.",
     funFact:"From 'acción' (share/action). Shareholders own 'actions' (shares) in the company."},

    {type:"teach", trg:"la facturación", src:"the revenue / turnover", pos:"noun", gender:"f",
     note:"Total income generated by a business before expenses.",
     example:"A: La facturación anual superó los diez millones.\nB: Es la mayor facturación en la historia de la empresa.",
     exampleSrc:"A: Annual revenue exceeded ten million.\nB: It's the highest revenue in the company's history.",
     funFact:"From 'factura' (invoice), Latin 'factura' (making). Revenue is the total of all invoices issued."},

    {type:"teach", trg:"la subvención", src:"the subsidy / grant", pos:"noun", gender:"f",
     note:"Financial aid given by the government to support an industry or cause.",
     example:"A: El gobierno ofrece subvenciones para energías renovables.\nB: Solicitamos una subvención para nuestro proyecto.",
     exampleSrc:"A: The government offers subsidies for renewable energy.\nB: We applied for a grant for our project.",
     funFact:"From Latin 'subventio' (help from below). The state helps 'from below' to support initiatives."},

    {type:"fb", s:"La tasa de {1} juvenil en España supera el 25%.", a:["desempleo"],
     opts:["desempleo","inflación","inversión","beneficio"],
     hint:"This word means the state of not having a job, a major economic indicator.",
     sSrc:"The youth {1} rate in Spain exceeds 25%."},

    {type:"match", pairs:[
      {trg:"la inversión", src:"the investment"},
      {trg:"la deuda", src:"the debt"},
      {trg:"el impuesto", src:"the tax"},
      {trg:"exportar", src:"to export"}
    ]},

    {type:"mc", q:"¿Qué es una 'subvención'?",
     opts:["Una inversión privada","Un préstamo bancario","Una ayuda económica del gobierno","Un tipo de impuesto"],
     ans:"Una ayuda económica del gobierno",
     hint:"The government provides this financial support to help industries or initiatives."},

    {type:"fb", s:"Los {1} votaron a favor de la fusión de las dos empresas.", a:["accionistas"],
     opts:["accionistas","presupuestos","impuestos","beneficios"],
     hint:"These people own shares in a company and have voting rights.",
     sSrc:"The {1} voted in favor of the merger of the two companies."},

    {type:"match", pairs:[
      {trg:"rentable", src:"profitable"},
      {trg:"la inflación", src:"inflation"},
      {trg:"la facturación", src:"revenue"},
      {trg:"la competencia", src:"the competition"}
    ]},

    {type:"mc", q:"¿Qué significa que un negocio es 'rentable'?",
     opts:["Que está en bolsa","Que exporta productos","Que tiene muchas deudas","Que genera beneficios económicos"],
     ans:"Que genera beneficios económicos",
     hint:"This adjective means the business produces enough income to justify its costs."}
  ]
};
export default LESSON_4;
