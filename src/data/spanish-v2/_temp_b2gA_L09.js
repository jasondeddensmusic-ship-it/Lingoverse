// Lesson 9. Comercio y economía
const LESSON_9 = {id:"esv2_b2gA_l9", title:"Comercio y economía", icon:"📊", xp:15, board:true, steps:[
{type:"intro", title:"Comercio y economía", desc:"Navigate the vocabulary of trade, markets, and economic policy at B2 level.", goals:["Learn 15 commerce and economy terms","Discuss trade and market dynamics","Use formal business register"]},

{type:"teach", trg:"el comercio exterior", src:"foreign trade", pos:"noun", gender:"m",
 note:"The exchange of goods and services between countries.\nExterior = foreign/external.",
 example:"A: El comercio exterior de España creció un diez por ciento.\nB: Las exportaciones de fruta fueron clave.",
 exampleSrc:"A: Spain's foreign trade grew by ten percent.\nB: Fruit exports were key.",
 funFact:"Spain is the world's largest exporter of olive oil and a top citrus exporter."},

{type:"teach", trg:"el mercado común", src:"the common market", pos:"noun", gender:"m",
 note:"An economic area with free movement of goods.\nThe EU single market.",
 example:"A: El mercado común europeo eliminó muchas barreras comerciales.\nB: Ahora los productos circulan libremente.",
 exampleSrc:"A: The European common market eliminated many trade barriers.\nB: Now products circulate freely.",
 funFact:"Spain joined the European common market in 1986, transforming its economy."},

{type:"teach", trg:"la mercadería", src:"merchandise / goods", pos:"noun", gender:"f",
 note:"Goods for sale. More formal than 'mercancía'.\nFrom mercado (market).",
 example:"A: La mercadería llegó al puerto en perfecto estado.\nB: Los contenedores estaban bien sellados.",
 exampleSrc:"A: The merchandise arrived at the port in perfect condition.\nB: The containers were well sealed.",
 funFact:"More common in Latin America. Spain prefers 'mercancía' for the same concept."},

{type:"teach", trg:"el margen", src:"the margin", pos:"noun", gender:"m",
 note:"The edge, or the profit margin in business.\nFrom Latin margo (border).",
 example:"A: El margen de beneficio es demasiado bajo.\nB: Necesitamos reducir los costes de producción.",
 exampleSrc:"A: The profit margin is too low.\nB: We need to reduce production costs.",
 funFact:"'Al margen de' means 'aside from' or 'regardless of'. Very useful phrase."},

{type:"teach", trg:"el montante", src:"the total amount", pos:"noun", gender:"m",
 note:"The final sum or total. Very formal business register.\nFrom montar (to amount to).",
 example:"A: ¿Cuál es el montante total de la inversión?\nB: Asciende a tres millones de euros.",
 exampleSrc:"A: What is the total amount of the investment?\nB: It amounts to three million euros.",
 funFact:"In architecture, 'montante' means a transom window above a door."},

{type:"mc", q:"¿Qué es el 'comercio exterior'?", opts:["El intercambio de bienes entre países","Las tiendas de una calle comercial","La venta por internet","El comercio dentro de una ciudad"], ans:"El intercambio de bienes entre países",
 hint:"The key word is 'exterior' (foreign/external), meaning across borders."},

{type:"fb", s:"El {1} de beneficio de la empresa subió al quince por ciento.", a:["margen"], opts:["margen","montante","mercado","comercio"],
 hint:"This noun refers to the difference between cost and selling price.",
 sSrc:"The company's profit {1} rose to fifteen percent."},

{type:"teach", trg:"el convenio colectivo", src:"the collective agreement", pos:"noun", gender:"m",
 note:"A labor agreement between employers and unions.\nConvenio = pact, agreement.",
 example:"A: El nuevo convenio colectivo mejora las condiciones salariales.\nB: Los sindicatos lucharon por ello durante meses.",
 exampleSrc:"A: The new collective agreement improves salary conditions.\nB: The unions fought for it for months.",
 funFact:"Spain's convenios colectivos cover over 80% of workers, one of Europe's highest rates."},

{type:"teach", trg:"el aumento de sueldo", src:"the pay raise", pos:"noun", gender:"m",
 note:"An increase in salary. Aumento = increase, sueldo = salary.",
 example:"A: He pedido un aumento de sueldo a mi jefa.\nB: ¿Y qué te ha dicho?\nA: Que lo estudiará el mes que viene.",
 exampleSrc:"A: I've asked my boss for a pay raise.\nB: And what did she say?\nA: That she'll consider it next month.",
 funFact:"Spain's minimum wage has risen over 50% since 2018, one of Europe's biggest jumps."},

{type:"teach", trg:"el concursante", src:"the contestant / competitor", pos:"noun", gender:"m",
 note:"A person who takes part in a contest.\nFeminine: la concursante. From concurso.",
 example:"A: El concursante respondió todas las preguntas correctamente.\nB: Se llevó el premio de diez mil euros.",
 exampleSrc:"A: The contestant answered all the questions correctly.\nB: He won the ten-thousand-euro prize.",
 funFact:"In legal Spanish, 'concursante' also means a company in bankruptcy proceedings."},

{type:"mc", q:"¿Qué es un 'convenio colectivo'?", opts:["Un acuerdo entre dos amigos","Un acuerdo laboral entre empresarios y sindicatos","Un tipo de contrato individual","Una ley del gobierno"], ans:"Un acuerdo laboral entre empresarios y sindicatos",
 hint:"This agreement is 'collective' because it covers all workers in a sector."},

{type:"fb", s:"El {1} total de la operación asciende a cinco millones.", a:["montante"], opts:["montante","margen","aumento","convenio"],
 hint:"This very formal noun means the final sum or total amount.",
 sSrc:"The total {1} of the operation amounts to five million."},

{type:"teach", trg:"el empleo estatal", src:"state employment / public sector job", pos:"noun", gender:"m",
 note:"A job in the public sector, working for the government.\nEstatal = state-related.",
 example:"A: El empleo estatal ofrece más estabilidad que el privado.\nB: Pero el proceso de selección es muy largo.",
 exampleSrc:"A: State employment offers more stability than the private sector.\nB: But the selection process is very long.",
 funFact:"Spain's oposiciones (civil service exams) can take years of preparation."},

{type:"teach", trg:"el causante", src:"the person responsible / the cause", pos:"noun", gender:"m",
 note:"The person or thing that causes something.\nFrom causar (to cause).",
 example:"A: La policía busca al causante del accidente.\nB: Parece que se dio a la fuga.",
 exampleSrc:"A: The police are looking for the person responsible for the accident.\nB: It seems they fled the scene.",
 funFact:"In tax law, 'causante' means the deceased person whose estate is being taxed."},

{type:"teach", trg:"el conductor", src:"the driver / presenter", pos:"noun", gender:"m",
 note:"A person who drives, or a TV presenter.\nFeminine: la conductora.",
 example:"A: El conductor del autobús frenó justo a tiempo.\nB: Los pasajeros le aplaudieron.",
 exampleSrc:"A: The bus driver braked just in time.\nB: The passengers applauded him.",
 funFact:"In Latin America, 'conductor' means TV host. In Spain, 'presentador' is more common."},

{type:"match", pairs:[
 {trg:"el comercio exterior", src:"foreign trade"},
 {trg:"el mercado común", src:"common market"},
 {trg:"el convenio colectivo", src:"collective agreement"},
 {trg:"el aumento de sueldo", src:"pay raise"},
 {trg:"el empleo estatal", src:"state employment"}
]},

{type:"fb", s:"Los sindicatos negociaron un {1} del tres por ciento.", a:["aumento de sueldo"], opts:["aumento de sueldo","mercado común","empleo estatal","convenio colectivo"],
 hint:"This compound noun means a raise in salary for workers.",
 sSrc:"The unions negotiated a {1} of three percent."},

{type:"mc", q:"¿Qué es un 'concursante' en un contexto legal?", opts:["Un juez de un concurso","Un abogado especializado","Una empresa en proceso de quiebra","Un participante en un juego"], ans:"Una empresa en proceso de quiebra",
 hint:"In legal Spanish, 'concurso de acreedores' means bankruptcy proceedings."},

{type:"drag_fill", s:"El {1} identificó al {2} del incendio forestal.", blanks:{"1":"conductor","2":"causante"}, pool:["conductor","causante","concursante","montante"],
 hint:"The driver identified the person responsible for the forest fire."},

{type:"fb", s:"España ingresó en el {1} europeo en mil novecientos ochenta y seis.", a:["mercado común"], opts:["mercado común","comercio exterior","convenio colectivo","empleo estatal"],
 hint:"This economic zone allows free movement of goods between member nations.",
 sSrc:"Spain joined the European {1} in 1986."},

{type:"match", pairs:[
 {trg:"la mercadería", src:"merchandise"},
 {trg:"el montante", src:"total amount"},
 {trg:"el concursante", src:"contestant"},
 {trg:"el causante", src:"person responsible"},
 {trg:"el conductor", src:"driver"}
]}
]};
export default LESSON_9;
