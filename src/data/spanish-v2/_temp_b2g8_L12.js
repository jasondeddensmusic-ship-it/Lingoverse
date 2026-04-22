// B2 Gap Batch 8 Lesson 12 - Commerce & Trade
const LESSON_12 = {id:"esv2_b2g8_l12",title:"Comercio y mercados",icon:"🏪",xp:15,board:true,steps:[
{type:"intro",title:"Comercio y mercados",desc:"Learn vocabulary for markets, trade, and commercial activities in the Spanish-speaking world.",goals:["Learn 14 commerce and trade terms","Discuss markets and commercial practices","Use business vocabulary with precision"]},

{type:"teach",trg:"el mercado",src:"the market",pos:"noun",gender:"m",
 note:"Masculine noun. A place for buying and selling, or an economic system.\nFrom Latin mercatus.",
 example:"A: El mercado de abastos del barrio tiene productos fresquísimos.\nB: Voy todos los sábados a comprar fruta y pescado.",
 exampleSrc:"A: The neighborhood food market has very fresh products.\nB: I go every Saturday to buy fruit and fish.",
 funFact:"Spain's traditional 'mercados de abastos' are being revitalized. Many now combine food stalls with restaurants."},

{type:"teach",trg:"la mercadería",src:"the merchandise / goods",pos:"noun",gender:"f",
 note:"Feminine noun. Goods for buying and selling.\nMore common in Latin America. Spain prefers 'mercancía'.",
 example:"A: La mercadería llegó muy mal al almacén.\nB: Tendremos que reclamar al proveedor.",
 exampleSrc:"A: The merchandise arrived in very bad condition at the warehouse.\nB: We will have to file a claim with the supplier.",
 funFact:"In Peninsular Spanish, 'mercancía' is standard. 'Mercadería' is the preferred form in Argentina and Chile."},

{type:"teach",trg:"el margen",src:"the margin",pos:"noun",gender:"m",
 note:"Masculine noun in business (profit margin). Feminine 'la margen' for riverbanks.\nGender changes meaning.",
 example:"A: El margen de beneficio de este producto es muy bajo.\nB: Necesitamos vender mucho volumen para ser rentables.",
 exampleSrc:"A: The profit margin on this product is very low.\nB: We need to sell high volume to be profitable.",
 funFact:"One of Spanish's gender-switching nouns: el margen (margin/profit) vs. la margen (riverbank)."},

{type:"teach",trg:"la intermediación",src:"the intermediation / brokerage",pos:"noun",gender:"f",
 note:"Feminine noun. The act of serving as an intermediary between parties.\nIntermediario = middleman.",
 example:"A: La intermediación financiera es esencial en el comercio internacional.\nB: Sin bancos, las transacciones serían imposibles.",
 exampleSrc:"A: Financial intermediation is essential in international trade.\nB: Without banks, transactions would be impossible.",
 funFact:"Spain's banking sector is dominated by a few large groups after extensive consolidation since 2008."},

{type:"mc",q:"¿Cuál es la diferencia entre 'el margen' y 'la margen'?",
 opts:["El margen es de beneficio, la margen es del río","Son sinónimos exactos","El margen es femenino siempre","La margen se usa solo en plural"],
 ans:"El margen es de beneficio, la margen es del río",
 hint:"Same word, different gender, different meaning. Think business vs. geography."},

{type:"teach",trg:"la contraprestación",src:"the compensation / consideration (in a contract)",pos:"noun",gender:"f",
 note:"Feminine noun. What one party gives in return in a contract.\nContra (against) + prestación.",
 example:"A: ¿Cuál es la contraprestación por tus servicios?\nB: Dos mil euros mensuales más gastos de viaje.",
 exampleSrc:"A: What is the compensation for your services?\nB: Two thousand euros monthly plus travel expenses.",
 funFact:"In Spanish contract law, every valid contract requires a 'contraprestación' from each party."},

{type:"teach",trg:"el kiosco",src:"the kiosk / newsstand",pos:"noun",gender:"m",
 note:"Masculine noun. A small stall selling newspapers, snacks, or drinks.\nAlso: quiosco.",
 example:"A: Compro el periódico en el kiosco de la esquina.\nB: ¿Todavía existen? Yo leo todo en el móvil.",
 exampleSrc:"A: I buy the newspaper at the corner kiosk.\nB: Do they still exist? I read everything on my phone.",
 funFact:"Spain's kioscos are disappearing. From 30,000 in the 1990s to under 10,000 today, replaced by digital."},

{type:"teach",trg:"la base",src:"the base / basis",pos:"noun",gender:"f",
 note:"Feminine noun. The foundation of something, or a starting point.\nBase de datos = database.",
 example:"A: La base de nuestro negocio es la confianza del cliente.\nB: Sin eso, nada más funciona.",
 exampleSrc:"A: The basis of our business is customer trust.\nB: Without that, nothing else works.",
 funFact:"'Sobre la base de' (on the basis of) is a very common formal expression in Spanish business writing."},

{type:"fb",s:"El {1} de beneficio de este restaurante es solo del cinco por ciento.",
 a:["margen"],opts:["margen","mercado","kiosco","base"],
 hint:"The difference between cost and selling price, expressed as a percentage.",
 sSrc:"The profit {1} of this restaurant is only five percent."},

{type:"teach",trg:"la internacionalización",src:"the internationalization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of expanding business across borders.\nInternacional + -ización.",
 example:"A: La internacionalización de la empresa fue un éxito.\nB: Ahora tienen oficinas en doce países.",
 exampleSrc:"A: The internationalization of the company was a success.\nB: Now they have offices in twelve countries.",
 funFact:"Spain's top internationalized companies include Inditex (Zara), Santander, and Telefónica."},

{type:"teach",trg:"el agente",src:"the agent / representative",pos:"noun",gender:"m",
 note:"Masculine noun. A person who acts on behalf of another.\nFeminine: la agente.",
 example:"A: Nuestro agente comercial en Asia ha cerrado tres contratos.\nB: Excelente. Es muy eficaz en ese mercado.",
 exampleSrc:"A: Our commercial agent in Asia has closed three contracts.\nB: Excellent. He is very effective in that market.",
 funFact:"In Spanish grammar, 'agente' also refers to the subject in passive voice: 'La carta fue escrita por el agente'."},

{type:"teach",trg:"la línea",src:"the line / product line",pos:"noun",gender:"f",
 note:"Feminine noun. A range of products, or a boundary.\nLínea de productos = product line.",
 example:"A: Vamos a lanzar una nueva línea de productos orgánicos.\nB: El mercado está creciendo mucho en ese sector.",
 exampleSrc:"A: We are going to launch a new line of organic products.\nB: The market is growing a lot in that sector.",
 funFact:"'Línea' has dozens of uses: línea telefónica, línea de metro, en línea (online), línea de crédito."},

{type:"mc",q:"¿Qué es la internacionalización de una empresa?",
 opts:["Cerrar las oficinas centrales","Expandir su actividad a otros países","Cambiar su nombre","Reducir su plantilla"],
 ans:"Expandir su actividad a otros países",
 hint:"When a company grows beyond its national borders to operate in foreign markets."},

{type:"teach",trg:"el lineamiento",src:"the guideline / directive",pos:"noun",gender:"m",
 note:"Masculine noun. A guiding principle or set of instructions.\nMore common in Latin America.",
 example:"A: Los lineamientos del plan estratégico son claros.\nB: Todos los departamentos deben seguirlos.",
 exampleSrc:"A: The guidelines of the strategic plan are clear.\nB: All departments must follow them.",
 funFact:"In Peninsular Spanish, 'directriz' or 'directrices' are more common than 'lineamiento'."},

{type:"teach",trg:"el listón",src:"the bar (standard) / ribbon",pos:"noun",gender:"m",
 note:"Masculine noun. The bar in high jump, or a standard to meet.\nPoner el listón alto = to set a high bar.",
 example:"A: Han puesto el listón muy alto con este producto.\nB: Será difícil superarlo la próxima temporada.",
 exampleSrc:"A: They have set the bar very high with this product.\nB: It will be hard to surpass it next season.",
 funFact:"'Poner el listón alto' is one of Spain's most used business metaphors, from the high jump in athletics."},

{type:"fb",s:"La {1} de Inditex les permitió abrir tiendas en más de noventa países.",
 a:["internacionalización"],opts:["internacionalización","intermediación","contraprestación","mercadería"],
 hint:"The process of expanding a company's operations across national borders.",
 sSrc:"The {1} of Inditex allowed them to open stores in more than ninety countries."},

{type:"match",pairs:[
 {trg:"el mercado",src:"market"},
 {trg:"el kiosco",src:"kiosk / newsstand"},
 {trg:"el agente",src:"agent / representative"},
 {trg:"el listón",src:"bar (standard)"},
 {trg:"la línea",src:"line / product line"}
]}
]};
export default LESSON_12;
