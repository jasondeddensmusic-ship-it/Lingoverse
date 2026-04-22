// Lesson 14. Filosofía y ética
const LESSON_14 = {id:"esv2_b2gA_l14", title:"Filosofía y ética", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"Filosofía y ética", desc:"Engage with vocabulary for discussing philosophical ideas, ethics, and moral reasoning.", goals:["Learn 15 philosophy and ethics terms","Discuss abstract moral concepts","Use intellectual vocabulary with precision"]},

{type:"teach", trg:"el comunismo", src:"communism", pos:"noun", gender:"m",
 note:"Political ideology advocating collective ownership.\nFrom Latin communis (common).",
 example:"A: El comunismo influyó profundamente en la historia del siglo XX.\nB: Sus efectos se sienten todavía hoy.",
 exampleSrc:"A: Communism profoundly influenced 20th-century history.\nB: Its effects are still felt today.",
 funFact:"Spain's Communist Party (PCE) was legalized in 1977, two years after Franco's death."},

{type:"teach", trg:"el bienaventurado", src:"the blessed one / fortunate person", pos:"noun", gender:"m",
 note:"A person who is extremely fortunate or blessed.\nBien (well) + aventurado (fated).",
 example:"A: Los bienaventurados del relato medieval recibían la gracia divina.\nB: Era un ideal de vida en la Edad Media.",
 exampleSrc:"A: The blessed ones in medieval tales received divine grace.\nB: It was an ideal of life in the Middle Ages.",
 funFact:"The Beatitudes in Spanish are 'las Bienaventuranzas'. Very literary register."},

{type:"teach", trg:"la eucaristía", src:"the Eucharist", pos:"noun", gender:"f",
 note:"The Christian sacrament of communion.\nFrom Greek eucharistia (thanksgiving).",
 example:"A: La eucaristía es el sacramento central del catolicismo.\nB: Se celebra en cada misa.",
 exampleSrc:"A: The Eucharist is the central sacrament of Catholicism.\nB: It is celebrated at every Mass.",
 funFact:"Spain's Corpus Christi celebrations are among the most spectacular in the world."},

{type:"teach", trg:"el católico", src:"the Catholic", pos:"noun", gender:"m",
 note:"A follower of the Roman Catholic Church.\nAlso adjective: católico/a.",
 example:"A: España fue históricamente un país muy católico.\nB: Hoy la sociedad es más secular.",
 exampleSrc:"A: Spain was historically a very Catholic country.\nB: Today society is more secular.",
 funFact:"Isabella I and Ferdinand II were called 'los Reyes Católicos' (the Catholic Monarchs)."},

{type:"teach", trg:"la evangelización", src:"evangelization", pos:"noun", gender:"f",
 note:"The act of spreading a religious message.\nFrom evangelio (gospel).",
 example:"A: La evangelización de América fue un proceso complejo.\nB: Tuvo consecuencias profundas para las culturas indígenas.",
 exampleSrc:"A: The evangelization of America was a complex process.\nB: It had profound consequences for indigenous cultures.",
 funFact:"Spanish missionaries created the first written grammars of many indigenous languages."},

{type:"mc", q:"¿Qué significa 'bienaventurado'?", opts:["Extremadamente afortunado o bendecido","Muy aventurero","Bien educado","Muy valiente"], ans:"Extremadamente afortunado o bendecido",
 hint:"Break it down: bien (well) + aventurado (fated/destined)."},

{type:"fb", s:"La {1} de América Latina transformó las culturas indígenas.", a:["evangelización"], opts:["evangelización","eucaristía","mediación","cristianización"],
 hint:"This noun refers to the process of spreading religious teachings to new populations.",
 sSrc:"The {1} of Latin America transformed indigenous cultures."},

{type:"teach", trg:"la cristianización", src:"Christianization", pos:"noun", gender:"f",
 note:"The process of converting a population to Christianity.\nFrom cristiano (Christian).",
 example:"A: La cristianización de la Península Ibérica comenzó con los romanos.\nB: Fue un proceso que duró varios siglos.",
 exampleSrc:"A: The Christianization of the Iberian Peninsula began with the Romans.\nB: It was a process that lasted several centuries.",
 funFact:"Spain's Reconquista (711-1492) combined military expansion with Christianization."},

{type:"teach", trg:"la llaneza", src:"simplicity / straightforwardness", pos:"noun", gender:"f",
 note:"Being plain, simple, and unpretentious.\nFrom llano (flat, plain).",
 example:"A: Me encanta la llaneza con que habla el abuelo.\nB: Dice las cosas sin rodeos ni artificio.",
 exampleSrc:"A: I love the straightforwardness with which grandpa speaks.\nB: He says things without beating around the bush.",
 funFact:"Cervantes valued 'llaneza' in writing: clear, direct prose without affectation."},

{type:"teach", trg:"la mnemotecnia", src:"mnemonic technique / mnemonics", pos:"noun", gender:"f",
 note:"Memory aids and techniques for remembering.\nFrom Greek mnemon (mindful).",
 example:"A: Uso la mnemotecnia para memorizar vocabulario.\nB: ¿Qué técnica te funciona mejor?\nA: Asociar palabras con imágenes mentales.",
 exampleSrc:"A: I use mnemonic techniques to memorize vocabulary.\nB: What technique works best for you?\nA: Associating words with mental images.",
 funFact:"The ancient Greeks invented elaborate mnemonic systems. The 'memory palace' is the most famous."},

{type:"mc", q:"¿Qué es la 'llaneza'?", opts:["Una prenda de vestir","Sencillez y naturalidad al hablar o actuar","Un tipo de terreno plano","Una forma de cocinar"], ans:"Sencillez y naturalidad al hablar o actuar",
 hint:"From 'llano' (plain, flat). Applied to character, it means unpretentious simplicity."},

{type:"fb", s:"Las técnicas de {1} ayudan a recordar listas largas.", a:["mnemotecnia"], opts:["mnemotecnia","evangelización","llaneza","filosofía"],
 hint:"This noun refers to memory aids and techniques for better recall.",
 sSrc:"{1} techniques help remember long lists."},

{type:"teach", trg:"el gueto", src:"the ghetto", pos:"noun", gender:"m",
 note:"A segregated area where a minority group lives.\nFrom Italian ghetto (Venice, 1516).",
 example:"A: Los guetos urbanos perpetúan la desigualdad social.\nB: La integración es clave para superarlos.",
 exampleSrc:"A: Urban ghettos perpetuate social inequality.\nB: Integration is key to overcoming them.",
 funFact:"The word comes from Venice's Ghetto Nuovo (1516), the first designated Jewish quarter."},

{type:"teach", trg:"la impureza", src:"impurity", pos:"noun", gender:"f",
 note:"Something that contaminates or is not pure.\nIm- (not) + pureza (purity).",
 example:"A: El agua contiene impurezas que el filtro elimina.\nB: Es importante beber agua limpia.",
 exampleSrc:"A: The water contains impurities that the filter removes.\nB: It's important to drink clean water.",
 funFact:"In Golden Age Spain, 'limpieza de sangre' (blood purity) was an obsessive social concept."},

{type:"teach", trg:"el jaque", src:"check (in chess)", pos:"noun", gender:"m",
 note:"A chess move threatening the king. Also: 'poner en jaque' (to put in check/jeopardy).",
 example:"A: El ajedrecista puso en jaque al rey rival.\nB: Solo le quedaban dos movimientos para escapar.",
 exampleSrc:"A: The chess player put the rival king in check.\nB: He only had two moves left to escape.",
 funFact:"From Arabic shah (king), via Persian. 'Jaque mate' is from 'shah mat' (the king is dead)."},

{type:"match", pairs:[
 {trg:"el comunismo", src:"communism"},
 {trg:"la evangelización", src:"evangelization"},
 {trg:"la llaneza", src:"straightforwardness"},
 {trg:"la mnemotecnia", src:"mnemonics"},
 {trg:"el gueto", src:"ghetto"}
]},

{type:"fb", s:"La situación política ha puesto en {1} la estabilidad del gobierno.", a:["jaque"], opts:["jaque","gueto","comunismo","eucaristía"],
 hint:"This chess term is used figuratively to mean putting something in jeopardy.",
 sSrc:"The political situation has put the government's stability in {1}."},

{type:"mc", q:"¿De qué idioma viene la palabra 'jaque'?", opts:["Del francés","Del inglés","Del árabe, a través del persa","Del latín"], ans:"Del árabe, a través del persa",
 hint:"Chess terminology in Spanish came through Arabic during the Moorish period."},

{type:"drag_fill", s:"La {1} del agua es necesaria para eliminar las {2}.", blanks:{"1":"purificación","2":"impurezas"}, pool:["purificación","impurezas","llaneza","mnemotecnia"],
 hint:"Water cleaning is needed to remove contaminants."},

{type:"fb", s:"La {1} de la Península fue un proceso que duró siglos.", a:["cristianización"], opts:["cristianización","eucaristía","mnemotecnia","llaneza"],
 hint:"This noun describes the process of converting a population to Christianity.",
 sSrc:"The {1} of the Peninsula was a process that lasted centuries."},

{type:"match", pairs:[
 {trg:"el bienaventurado", src:"blessed one"},
 {trg:"la eucaristía", src:"Eucharist"},
 {trg:"el católico", src:"Catholic"},
 {trg:"la impureza", src:"impurity"},
 {trg:"el jaque", src:"check (chess)"}
]}
]};
export default LESSON_14;
