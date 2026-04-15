// B2 Gap Batch B Lesson 14 — Economics & Trade
const LESSON_14 = {id:"esv2_b2gB_l14",title:"Economía y comercio",icon:"📊",xp:15,board:true,steps:[
{type:"intro",title:"Economía y comercio",desc:"Learn vocabulary about economics, international trade, and financial markets in Spanish.",goals:["Learn 12 words about economics and trade","Discuss markets and commercial activity","Use formal financial vocabulary"]},

{type:"teach",trg:"el comercio exterior",src:"the foreign trade / international trade",pos:"noun",gender:"m",
 note:"Masculine compound. Trade between countries.\nIncludes imports and exports.",
 example:"A: El comercio exterior de España ha crecido un ocho por ciento.\nB: Las exportaciones de alimentos han liderado el crecimiento.",
 exampleSrc:"A: Spain's foreign trade has grown by eight percent.\nB: Food exports have led the growth.",
 funFact:"Spain is the world's largest exporter of olive oil and among the top wine and citrus exporters."},

{type:"teach",trg:"el mercado común",src:"the common market",pos:"noun",gender:"m",
 note:"Masculine compound. An economic area with free trade.\nHistorically refers to the EU's predecessor.",
 example:"A: España entró en el mercado común europeo en 1986.\nB: Fue un momento histórico para la economía española.",
 exampleSrc:"A: Spain entered the European common market in 1986.\nB: It was a historic moment for the Spanish economy.",
 funFact:"Spaniards often still say 'mercado común' informally when referring to the EU single market."},

{type:"teach",trg:"la mercadería",src:"the merchandise / goods",pos:"noun",gender:"f",
 note:"Feminine noun. Goods for sale or trade.\nMore common in Latin America. In Spain: mercancía.",
 example:"A: La mercadería llegó al puerto esta mañana.\nB: Hay que revisar el estado de los productos.",
 exampleSrc:"A: The merchandise arrived at the port this morning.\nB: We have to check the condition of the products.",
 funFact:"In Spain, 'mercancía' is preferred, but 'mercadería' appears in legal and commercial texts."},

{type:"teach",trg:"el montante",src:"the total amount / sum",pos:"noun",gender:"m",
 note:"Masculine noun. The total sum of money.\nFormal financial term.",
 example:"A: El montante total de la deuda asciende a tres millones.\nB: Es una cifra muy preocupante.",
 exampleSrc:"A: The total amount of the debt amounts to three million.\nB: It is a very worrying figure.",
 funFact:"In architecture, 'montante' also means a transom window above a door. Same root: something that 'mounts up'."},

{type:"mc",q:"¿Cuándo entró España en el mercado común europeo?",
 opts:["En 1986","En 1975","En 1992","En 2002"],
 ans:"En 1986",
 hint:"Think about the year Spain joined the European Economic Community, about a decade after Franco's death."},

{type:"teach",trg:"la dirección comercial",src:"the commercial management / sales department",pos:"noun",gender:"f",
 note:"Feminine compound. The department overseeing sales.\nAlso: the address of a business.",
 example:"A: La dirección comercial ha diseñado una nueva estrategia de ventas.\nB: Quieren expandirse al mercado asiático.",
 exampleSrc:"A: The commercial management has designed a new sales strategy.\nB: They want to expand into the Asian market.",
 funFact:"In Spanish business schools, 'Dirección Comercial' is a core subject, equivalent to Sales Management."},

{type:"teach",trg:"el empleo estatal",src:"the public sector employment / government job",pos:"noun",gender:"m",
 note:"Masculine compound. Jobs in the public sector.\nEstatal = of the state.",
 example:"A: El empleo estatal ofrece estabilidad laboral.\nB: Por eso muchas personas preparan oposiciones.",
 exampleSrc:"A: Public sector employment offers job stability.\nB: That's why many people prepare for civil service exams.",
 funFact:"In Spain, getting a government job requires passing 'oposiciones', notoriously competitive state exams."},

{type:"teach",trg:"el asta",src:"the flagpole / horn (of a bull) / shaft",pos:"noun",gender:"f",
 note:"Feminine noun (but uses 'el' for phonetic reasons: el asta).\nLike 'el agua'. Plural: las astas.",
 example:"A: La bandera ondea en lo alto del asta.\nB: La han izado para la ceremonia oficial.",
 exampleSrc:"A: The flag waves at the top of the flagpole.\nB: They have raised it for the official ceremony.",
 funFact:"'El asta' uses masculine article despite being feminine, to avoid the 'la a-' sound clash, like 'el agua'."},

{type:"fb",s:"El {1} de la inversión supera los diez millones de euros.",
 a:["montante"],opts:["montante","mercado","comercio","empleo"],
 hint:"The formal financial term for the total accumulated sum of money.",
 sSrc:"The {1} of the investment exceeds ten million euros."},

{type:"teach",trg:"el marcador",src:"the marker / scoreboard indicator",pos:"noun",gender:"m",
 note:"Masculine noun. Something that marks or indicates.\nAlso: a scoreboard, a highlighter pen.",
 example:"A: Los marcadores económicos indican una recuperación.\nB: El PIB ha subido dos puntos en el último trimestre.",
 exampleSrc:"A: The economic indicators show a recovery.\nB: GDP has risen two points in the last quarter.",
 funFact:"In sports, 'marcador' is the scoreboard. In economics, it means an indicator or benchmark."},

{type:"teach",trg:"la matriz",src:"the matrix / parent company / headquarters",pos:"noun",gender:"f",
 note:"Feminine noun. Also adj: parent, main.\nEmpresa matriz = parent company.",
 example:"A: La empresa matriz está en Madrid.\nB: Tiene filiales en cinco países europeos.",
 exampleSrc:"A: The parent company is in Madrid.\nB: It has subsidiaries in five European countries.",
 funFact:"From Latin matrix (womb). In business, the 'empresa matriz' gives birth to its subsidiary companies."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la adulta.\nA fully grown person. Also adj: mature.",
 example:"A: La formación para adultos es cada vez más demandada.\nB: Muchos vuelven a estudiar después de los cuarenta.",
 exampleSrc:"A: Adult education is increasingly in demand.\nB: Many return to study after forty.",
 funFact:"Spain's 'educación para adultos' system allows completing secondary education at any age, free of charge."},

{type:"mc",q:"¿Qué significa 'empresa matriz'?",
 opts:["La empresa principal que controla otras","Una empresa muy pequeña","Una empresa en quiebra","Una empresa recién creada"],
 ans:"La empresa principal que controla otras",
 hint:"Think about the Latin root meaning 'mother' or 'womb', the source from which others come."},

{type:"match",pairs:[
 {trg:"comercio exterior",src:"foreign trade"},
 {trg:"mercadería",src:"merchandise"},
 {trg:"montante",src:"total amount"},
 {trg:"matriz",src:"parent company"},
 {trg:"marcador",src:"marker / indicator"}
]},

{type:"fb",s:"El {1} de España con Latinoamérica es muy importante.",
 a:["comercio exterior"],opts:["comercio exterior","mercado común","empleo estatal","dirección comercial"],
 hint:"The exchange of goods and services between countries across international borders.",
 sSrc:"Spain's {1} with Latin America is very important."},

{type:"fb",s:"La {1} ha decidido cerrar la filial de Portugal.",
 a:["empresa matriz"],opts:["empresa matriz","dirección comercial","mercadería","asta"],
 hint:"The main company that owns and controls subsidiary companies.",
 sSrc:"The {1} has decided to close the subsidiary in Portugal."},

]};
export default LESSON_14;
