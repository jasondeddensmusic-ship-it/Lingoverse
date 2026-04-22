// Lesson 3. Mercados y dinero (Markets and Money)
const LESSON_3 = {id:"esv2_b2g9_l3", title:"Mercados y dinero", icon:"\u{1F4B0}", xp:25, board:true, steps:[
  {type:"intro", title:"Mercados y dinero",
   desc:"Dive into the language of markets, trade, and finance. From retail to international commerce, these words power economic conversation.",
   goals:["Learn 10 terms for markets, trade, and economics","Discuss economic topics with proper vocabulary","Distinguish between formal and everyday financial terms"]},

  {type:"teach", trg:"el mercado com\u00fan", src:"the common market", pos:"noun", gender:"m",
   note:"Mercado (market) + com\u00fan (common).\nRefers to shared economic zones between countries.",
   example:"A: \u00bfEspa\u00f1a forma parte de un mercado com\u00fan?\nB: S\u00ed, del mercado com\u00fan europeo.\nA: \u00bfQu\u00e9 ventajas tiene?\nB: Libre circulaci\u00f3n de productos y personas.",
   exampleSrc:"A: Is Spain part of a common market?\nB: Yes, the European common market.\nA: What advantages does it have?\nB: Free movement of products and people.",
   funFact:"The European Common Market, created in 1957, was the precursor to today's European Union single market."},

  {type:"teach", trg:"mercantil", src:"mercantile; commercial", pos:"adj", gender:null,
   note:"From Latin mercans (trading).\nUsed in legal and business contexts.",
   example:"A: Necesitamos un abogado mercantil.\nB: \u00bfPara qu\u00e9 tipo de caso?\nA: Un problema con un contrato de distribuci\u00f3n.\nB: Conozco uno muy bueno en Barcelona.",
   exampleSrc:"A: We need a commercial lawyer.\nB: For what type of case?\nA: A problem with a distribution contract.\nB: I know a very good one in Barcelona.",
   funFact:"The 'Registro Mercantil' is Spain's commercial register where all companies must be officially inscribed."},

  {type:"teach", trg:"monetario", src:"monetary", pos:"adj", gender:null,
   note:"From moneda (coin/currency).\nUsed for financial policy and systems.",
   example:"A: La pol\u00edtica monetaria del banco central es muy restrictiva.\nB: \u00bfPor qu\u00e9 han subido los tipos de inter\u00e9s?\nA: Para controlar la inflaci\u00f3n.\nB: Eso afecta a las hipotecas de muchas familias.",
   exampleSrc:"A: The central bank's monetary policy is very restrictive.\nB: Why have they raised interest rates?\nA: To control inflation.\nB: That affects the mortgages of many families.",
   funFact:"Spain adopted the euro in 2002, replacing the peseta after over 130 years of use."},

  {type:"teach", trg:"minorista", src:"retail (adj.); retailer", pos:"adj", gender:null,
   note:"From menor (smaller/lesser).\nOpposite: mayorista (wholesale).",
   example:"A: \u00bfSois mayoristas o minoristas?\nB: Somos minoristas. Vendemos directamente al p\u00fablico.\nA: \u00bfTen\u00e9is tienda f\u00edsica?\nB: S\u00ed, y tambi\u00e9n vendemos por internet.",
   exampleSrc:"A: Are you wholesalers or retailers?\nB: We are retailers. We sell directly to the public.\nA: Do you have a physical shop?\nB: Yes, and we also sell online.",
   funFact:"The word 'minorista' comes from 'menor' because retailers sell in smaller quantities than wholesalers."},

  {type:"teach", trg:"el monopolio", src:"the monopoly", pos:"noun", gender:"m",
   note:"From Greek monos (single) + polein (to sell).\nWhen one company controls an entire market.",
   example:"A: Esta empresa tiene el monopolio del agua en la regi\u00f3n.\nB: \u00bfNo hay competencia?\nA: No, y por eso los precios son tan altos.\nB: El gobierno deber\u00eda intervenir.",
   exampleSrc:"A: This company has the monopoly on water in the region.\nB: Is there no competition?\nA: No, and that is why prices are so high.\nB: The government should intervene.",
   funFact:"Spain's CNMC (National Markets and Competition Commission) was created in 2013 to prevent monopolistic practices."},

  {type:"mc", q:"\u00bfQu\u00e9 es un monopolio?",
   opts:["El control total de un mercado por una sola empresa","Un tipo de impuesto","Un mercado con muchos vendedores","Un acuerdo entre dos empresas"],
   ans:"El control total de un mercado por una sola empresa",
   hint:"Mono- means one or single. Think about a market where just one seller dominates with no rivals."},

  {type:"teach", trg:"la mercader\u00eda", src:"the merchandise; goods", pos:"noun", gender:"f",
   note:"From mercader (merchant).\nUsed more in Latin America; in Spain, 'mercanc\u00eda' is more common.",
   example:"A: La mercader\u00eda lleg\u00f3 en perfecto estado.\nB: \u00bfYa la hab\u00e9is revisado toda?\nA: S\u00ed, no falta nada del pedido.\nB: Perfecto. Podemos empezar a distribuir.",
   exampleSrc:"A: The merchandise arrived in perfect condition.\nB: Have you already checked it all?\nA: Yes, nothing is missing from the order.\nB: Perfect. We can start distributing.",
   funFact:"While 'mercader\u00eda' and 'mercanc\u00eda' are near-synonyms, 'mercanc\u00eda' tends to be more technical and legal in Spain."},

  {type:"teach", trg:"la mediaci\u00f3n", src:"the mediation", pos:"noun", gender:"f",
   note:"From mediar (to mediate).\nA process where a neutral third party helps resolve disputes.",
   example:"A: No pudimos llegar a un acuerdo por nuestra cuenta.\nB: \u00bfHab\u00e9is pensado en la mediaci\u00f3n?\nA: S\u00ed, un mediador podr\u00eda ayudarnos.\nB: Es m\u00e1s r\u00e1pido y barato que ir a juicio.",
   exampleSrc:"A: We could not reach an agreement on our own.\nB: Have you thought about mediation?\nA: Yes, a mediator could help us.\nB: It is faster and cheaper than going to court.",
   funFact:"Spain's 2012 mediation law encourages resolving civil and commercial disputes outside the courts."},

  {type:"teach", trg:"el mediador", src:"the mediator", pos:"noun", gender:"m",
   note:"From mediar (to mediate).\nFeminine: la mediadora.",
   example:"A: El mediador nos ayud\u00f3 a encontrar una soluci\u00f3n.\nB: \u00bfFue un proceso largo?\nA: Solo dos sesiones. Fue muy eficiente.\nB: A veces una persona neutral es lo que se necesita.",
   exampleSrc:"A: The mediator helped us find a solution.\nB: Was it a long process?\nA: Only two sessions. It was very efficient.\nB: Sometimes a neutral person is what you need.",
   funFact:"In Spain, professional mediators must hold a university degree and specific mediation training of at least 100 hours."},

  {type:"fb", s:"La pol\u00edtica {1} del banco central afecta a toda la econom\u00eda.", a:["monetaria"],
   opts:["monetaria","mercantil","minorista","mercader\u00eda"],
   hint:"This adjective relates to money, currency, and financial policy.",
   sSrc:"The central bank's {1} policy affects the entire economy."},

  {type:"teach", trg:"la intermediaci\u00f3n", src:"the intermediation", pos:"noun", gender:"f",
   note:"Inter- (between) + mediaci\u00f3n (mediation).\nActing as a go-between in business or finance.",
   example:"A: Nuestro banco cobra por la intermediaci\u00f3n financiera.\nB: \u00bfCu\u00e1nto cobran?\nA: Un dos por ciento de cada transacci\u00f3n.\nB: Es bastante. Deber\u00edamos buscar alternativas.",
   exampleSrc:"A: Our bank charges for financial intermediation.\nB: How much do they charge?\nA: Two percent of each transaction.\nB: That is quite a lot. We should look for alternatives.",
   funFact:"Financial intermediation is the core business of banks: taking deposits from savers and lending to borrowers."},

  {type:"mc", q:"\u00bfCu\u00e1l es la diferencia entre minorista y mayorista?",
   opts:["Minorista vende al p\u00fablico, mayorista vende a empresas","No hay diferencia","Mayorista es m\u00e1s barato","Minorista solo vende por internet"],
   ans:"Minorista vende al p\u00fablico, mayorista vende a empresas",
   hint:"Minor means smaller quantities (retail). Mayor means larger quantities (wholesale)."},

  {type:"fb", s:"El {1} ayud\u00f3 a las dos partes a llegar a un acuerdo.", a:["mediador"],
   opts:["mediador","monopolio","mercado com\u00fan","minorista"],
   hint:"A neutral person who helps resolve disputes between two sides.",
   sSrc:"The {1} helped both parties reach an agreement."},

  {type:"match", pairs:[
    {trg:"mercado com\u00fan", src:"common market"},
    {trg:"monopolio", src:"monopoly"},
    {trg:"minorista", src:"retail; retailer"},
    {trg:"mediaci\u00f3n", src:"mediation"},
    {trg:"intermediaci\u00f3n", src:"intermediation"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 tipo de abogado necesitas para un problema con un contrato de distribuci\u00f3n?",
   opts:["Un abogado penalista","Un abogado mercantil","Un abogado de familia","Un abogado laboralista"],
   ans:"Un abogado mercantil",
   hint:"This type of lawyer specialises in commercial and business law."},

  {type:"drag_fill", s:"La empresa tiene el {1} del sector porque no hay {2}.",
   blanks:{"1":"monopolio","2":"competencia"},
   pool:["monopolio","competencia","mediaci\u00f3n","mercader\u00eda","intermediaci\u00f3n"],
   hint:"One company controls everything because no rivals exist."},

  {type:"fb", s:"La {1} financiera es el negocio principal de los bancos.", a:["intermediaci\u00f3n"],
   opts:["intermediaci\u00f3n","mediaci\u00f3n","mercader\u00eda","conformidad"],
   hint:"Banks act as go-betweens: taking money from savers and lending it to borrowers.",
   sSrc:"Financial {1} is the main business of banks."}
]};
export default LESSON_3;
