// B2 Gap Batch 8 Lesson 20 - Economy & Trade
const LESSON_20 = {id:"esv2_b2g8_l20",title:"Economía y comercio",icon:"📊",xp:15,board:true,steps:[
{type:"intro",title:"Economía y comercio",desc:"Master vocabulary for discussing markets, trade, measurement, and business in the Spanish-speaking world.",goals:["Learn 15 words about economy and trade","Discuss markets and business structures","Use formal economic vocabulary"]},

{type:"teach",trg:"el mercado",src:"the market",pos:"noun",gender:"m",
 note:"Masculine noun. A place for buying and selling, or an economic system.\nMercado laboral = job market.",
 example:"A: El mercado de abastos del centro tiene productos frescos.\nB: Voy todos los sábados a comprar fruta y verdura.",
 exampleSrc:"A: The central food market has fresh products.\nB: I go every Saturday to buy fruit and vegetables.",
 funFact:"Spain's Mercado de la Boqueria in Barcelona is one of the world's most famous food markets."},

{type:"teach",trg:"la mercadería",src:"the merchandise / goods",pos:"noun",gender:"f",
 note:"Feminine noun. Goods for sale or trade.\nMore common in Latin America. In Spain: mercancía.",
 example:"A: La mercadería llegó al puerto en tres contenedores.\nB: Hay que revisarla antes de distribuirla a las tiendas.",
 exampleSrc:"A: The merchandise arrived at the port in three containers.\nB: It must be inspected before distributing it to the stores.",
 funFact:"In Peninsular Spanish, 'mercancía' is preferred, but 'mercadería' appears in legal and trade contexts."},

{type:"teach",trg:"el mecanismo",src:"the mechanism",pos:"noun",gender:"m",
 note:"Masculine noun. A system of parts working together, literal or figurative.\nMecanismo de defensa = defense mechanism.",
 example:"A: El mecanismo del reloj antiguo necesita reparación.\nB: Solo hay un relojero en la ciudad que sabe arreglarlo.",
 exampleSrc:"A: The mechanism of the antique clock needs repair.\nB: There is only one watchmaker in the city who knows how to fix it.",
 funFact:"'Mecanismo de control' is a key phrase in Spanish politics and economics, referring to oversight systems."},

{type:"teach",trg:"mensual",src:"monthly",pos:"adj",gender:null,
 note:"Adjective. Happening once a month.\nPago mensual = monthly payment. Invariable for gender.",
 example:"A: El informe mensual muestra un aumento de ventas.\nB: Es la mejor cifra desde que abrimos la empresa.",
 exampleSrc:"A: The monthly report shows an increase in sales.\nB: It is the best figure since we opened the company.",
 funFact:"From Latin mensis (month). Related forms: bimensual (twice monthly), trimestral (quarterly), anual (annual)."},

{type:"teach",trg:"el mejoramiento",src:"the improvement / betterment",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something better.\nSynonym: la mejora (more common in Spain).",
 example:"A: El mejoramiento de las infraestructuras tardará varios años.\nB: Pero los resultados beneficiarán a toda la región.",
 exampleSrc:"A: The improvement of infrastructure will take several years.\nB: But the results will benefit the entire region.",
 funFact:"In Spain, 'mejora' is preferred over 'mejoramiento'. Latin America favors the longer form."},

{type:"mc",q:"¿Qué es el mercado laboral?",
 opts:["El sistema de oferta y demanda de empleo","Un supermercado grande","Una feria de artesanía","Un mercado de frutas"],
 ans:"El sistema de oferta y demanda de empleo",
 hint:"Think about jobs, employment, hiring. Laboral relates to work and labor."},

{type:"teach",trg:"el mediador",src:"the mediator",pos:"noun",gender:"m",
 note:"Masculine noun. A person who helps resolve a dispute between others.\nFeminine: la mediadora.",
 example:"A: El mediador logró que las dos partes firmaran el acuerdo.\nB: Sin su intervención, el conflicto habría continuado.",
 exampleSrc:"A: The mediator managed to get both parties to sign the agreement.\nB: Without his intervention, the conflict would have continued.",
 funFact:"Spain's mediation system (mediacion civil y mercantil) was formalized by law in 2012."},

{type:"teach",trg:"la medición",src:"the measurement",pos:"noun",gender:"f",
 note:"Feminine noun. The act or result of measuring something.\nFrom medir (to measure).",
 example:"A: Las mediciones del terreno indican que es más grande de lo esperado.\nB: Eso podría aumentar el valor de la propiedad.",
 exampleSrc:"A: The land measurements indicate it is larger than expected.\nB: That could increase the property value.",
 funFact:"Spain uses the metric system exclusively. The imperial system was never widely adopted there."},

{type:"teach",trg:"el medio de comunicación",src:"the media outlet / means of communication",pos:"noun",gender:"m",
 note:"Masculine noun phrase. A channel for distributing information.\nUsually plural: los medios de comunicación = the media.",
 example:"A: Los medios de comunicación cubrieron la noticia durante semanas.\nB: Fue el tema más comentado del año.",
 exampleSrc:"A: The media covered the story for weeks.\nB: It was the most discussed topic of the year.",
 funFact:"Spain's major media groups include PRISA (El Pais), Vocento, and Atresmedia. Press freedom is constitutionally protected."},

{type:"fb",s:"El {1} del reloj dejó de funcionar hace meses.",
 a:["mecanismo"],opts:["mecanismo","mercado","mediador","mejoramiento"],
 hint:"The internal system of parts that makes a machine work.",
 sSrc:"The clock's {1} stopped working months ago."},

{type:"teach",trg:"el mendigo",src:"the beggar",pos:"noun",gender:"m",
 note:"Masculine noun. A person who begs for money or food.\nFeminine: la mendiga. From Latin mendicare.",
 example:"A: El mendigo se sentaba siempre en la misma esquina.\nB: Los vecinos le llevaban comida y ropa de abrigo.",
 exampleSrc:"A: The beggar always sat on the same corner.\nB: The neighbors brought him food and warm clothing.",
 funFact:"The picaresque novel genre, born in Spain, often features mendigos and vagabonds as protagonists."},

{type:"teach",trg:"el mejillón",src:"the mussel",pos:"noun",gender:"m",
 note:"Masculine noun. An edible shellfish with a dark blue-black shell.\nDiminutive of mejilla (cheek), from the shell's shape.",
 example:"A: Los mejillones al vapor con limón están deliciosos.\nB: Los de Galicia son los mejores de toda España.",
 exampleSrc:"A: The steamed mussels with lemon are delicious.\nB: The ones from Galicia are the best in all of Spain.",
 funFact:"Galicia produces over 250,000 tons of mejillones annually on floating rafts called 'bateas'. World-class quality."},

{type:"teach",trg:"el listado",src:"the list / listing",pos:"noun",gender:"m",
 note:"Masculine noun. A formal or detailed list.\nFrom lista (list). More formal than 'lista'.",
 example:"A: ¿Me puedes enviar el listado de proveedores?\nB: Sí, te lo mando por correo antes de las cinco.",
 exampleSrc:"A: Can you send me the supplier listing?\nB: Yes, I will send it to you by email before five.",
 funFact:"In business Spanish, 'listado' implies a structured, formal document. 'Lista' is more everyday and casual."},

{type:"mc",q:"¿Cuál es la función de un mediador?",
 opts:["Ayudar a resolver conflictos entre dos partes","Vender productos en un mercado","Medir terrenos y propiedades","Escribir informes mensuales"],
 ans:"Ayudar a resolver conflictos entre dos partes",
 hint:"This person intervenes between two sides in a dispute to help them reach agreement."},

{type:"teach",trg:"la logística",src:"the logistics",pos:"noun",gender:"f",
 note:"Feminine noun. The organization of complex operations, especially transport.\nFrom Greek logistikos (skilled in calculating).",
 example:"A: La logística de la empresa funciona como un reloj.\nB: Cada pedido llega en menos de veinticuatro horas.",
 exampleSrc:"A: The company's logistics run like clockwork.\nB: Every order arrives in less than twenty-four hours.",
 funFact:"Spain is a logistics hub for southern Europe. Zaragoza's PLAZA is Europe's largest logistics platform."},

{type:"teach",trg:"la legislación",src:"the legislation",pos:"noun",gender:"f",
 note:"Feminine noun. A collection of laws governing a particular area.\nFrom Latin legislatio.",
 example:"A: La legislación laboral española protege a los trabajadores.\nB: Pero muchos dicen que necesita modernizarse.",
 exampleSrc:"A: Spanish labor legislation protects workers.\nB: But many say it needs to be modernized.",
 funFact:"Spain's Estatuto de los Trabajadores (Workers' Statute) from 1980 is the backbone of labor legislation."},

{type:"fb",s:"Los {1} de comunicación informaron sobre la crisis económica.",
 a:["medios"],opts:["medios","mercados","mecanismos","listados"],
 hint:"Television, radio, newspapers, and online outlets that distribute news.",
 sSrc:"The {1} reported on the economic crisis."},

{type:"match",pairs:[
 {trg:"mercado",src:"market"},
 {trg:"medición",src:"measurement"},
 {trg:"logística",src:"logistics"},
 {trg:"legislación",src:"legislation"},
 {trg:"mejillón",src:"mussel"}
]},

{type:"fb",s:"El pago {1} del alquiler se realiza el día primero de cada mes.",
 a:["mensual"],opts:["mensual","manual","mayoritario","maternal"],
 hint:"Happening once every month, on a regular cycle. Related to 'mes' (month).",
 sSrc:"The {1} rent payment is made on the first day of each month."},

{type:"mc",q:"¿De dónde son famosos los mejillones en España?",
 opts:["De Galicia","De Andalucía","De Madrid","De Canarias"],
 ans:"De Galicia",
 hint:"This northwestern region of Spain is renowned for its seafood, especially shellfish from floating rafts."}
]};
export default LESSON_20;
