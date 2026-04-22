// Lesson 13. Vida urbana y rural
const LESSON_13 = {id:"esv2_b2gA_l13", title:"Vida urbana y rural", icon:"🏘️", xp:15, board:true, steps:[
{type:"intro", title:"Vida urbana y rural", desc:"Contrast urban and rural life with vocabulary for places, trades, and landscapes.", goals:["Learn 15 urban and rural vocabulary words","Describe towns and countryside","Discuss the rural-urban divide"]},

{type:"teach", trg:"la carpintería", src:"carpentry / carpenter's workshop", pos:"noun", gender:"f",
 note:"Both the craft of woodworking and the workshop where it's done.\nFrom carpintero.",
 example:"A: Mi abuelo tenía una carpintería en el pueblo.\nB: Fabricaba muebles a mano durante cuarenta años.",
 exampleSrc:"A: My grandfather had a carpenter's workshop in the village.\nB: He made furniture by hand for forty years.",
 funFact:"From Latin carpentarius (wagon-maker). Originally about making carts, not furniture."},

{type:"teach", trg:"el leñador", src:"the lumberjack / woodcutter", pos:"noun", gender:"m",
 note:"A person who cuts down trees for wood.\nFeminine: la leñadora. From leña (firewood).",
 example:"A: El leñador cortaba árboles en el bosque cada mañana.\nB: Era un trabajo duro pero bien pagado.",
 exampleSrc:"A: The lumberjack cut trees in the forest every morning.\nB: It was hard work but well paid.",
 funFact:"In Spanish fairy tales, the lumberjack is a stock character, like in Caperucita Roja."},

{type:"teach", trg:"el leño", src:"the log", pos:"noun", gender:"m",
 note:"A piece of cut wood, especially for burning.\nFrom Latin lignum (wood).",
 example:"A: Pon otro leño en la chimenea.\nB: Se está apagando el fuego.",
 exampleSrc:"A: Put another log on the fireplace.\nB: The fire is going out.",
 funFact:"'Dormir como un leño' (to sleep like a log) is the same idiom as in English."},

{type:"teach", trg:"el lagar", src:"the wine press / press house", pos:"noun", gender:"m",
 note:"A facility where grapes or olives are pressed.\nFrom Latin lacus (tank).",
 example:"A: Visitamos un lagar tradicional en La Rioja.\nB: Nos enseñaron cómo se hacía el vino antes.",
 exampleSrc:"A: We visited a traditional wine press in La Rioja.\nB: They showed us how wine was made in the past.",
 funFact:"Many Spanish lagares date back centuries and are now tourist attractions."},

{type:"teach", trg:"el kiosco", src:"the kiosk / newsstand", pos:"noun", gender:"m",
 note:"A small booth selling newspapers, magazines, sweets.\nAlso spelled 'quiosco'.",
 example:"A: Compro el periódico en el kiosco de la esquina.\nB: Los kioscos son cada vez menos comunes.",
 exampleSrc:"A: I buy the newspaper at the corner kiosk.\nB: Kiosks are increasingly less common.",
 funFact:"From Turkish koshk (pavilion). Kiosks are a beloved part of Spanish street culture."},

{type:"mc", q:"¿Qué es un 'lagar'?", opts:["Un lugar donde se prensan uvas o aceitunas","Un tipo de lago grande","Una casa rural","Un establo para animales"], ans:"Un lugar donde se prensan uvas o aceitunas",
 hint:"Think about wine-making. This is where grapes get pressed."},

{type:"fb", s:"El {1} cortó varios árboles para preparar leña para el invierno.", a:["leñador"], opts:["leñador","carpintero","lagar","kiosco"],
 hint:"This person's job involves cutting down trees in the forest.",
 sSrc:"The {1} cut several trees to prepare firewood for winter."},

{type:"teach", trg:"la base", src:"the base / foundation", pos:"noun", gender:"f",
 note:"The bottom support. Also: the foundation of an argument.\nFrom Latin basis.",
 example:"A: La base del edificio necesita refuerzo.\nB: Sin una buena base, la estructura es inestable.",
 exampleSrc:"A: The foundation of the building needs reinforcement.\nB: Without a good base, the structure is unstable.",
 funFact:"'Base militar' (military base), 'base de datos' (database), 'base de maquillaje' (foundation makeup)."},

{type:"teach", trg:"la cabeza", src:"the head", pos:"noun", gender:"f",
 note:"The body part. Also figurative: leader, top.\nFrom Latin caput.",
 example:"A: Me duele la cabeza desde esta mañana.\nB: Tómate una aspirina y descansa.",
 exampleSrc:"A: My head has been hurting since this morning.\nB: Take an aspirin and rest.",
 funFact:"'Cabeza de familia' (head of household), 'cabeza de lista' (top of a list)."},

{type:"teach", trg:"la línea", src:"the line", pos:"noun", gender:"f",
 note:"A line (physical, abstract, or transport).\nFrom Latin linea (thread).",
 example:"A: La línea tres del metro llega hasta el aeropuerto.\nB: Es la forma más rápida de llegar.",
 exampleSrc:"A: Metro line three goes to the airport.\nB: It's the fastest way to get there.",
 funFact:"'En líneas generales' (in general terms) is a very useful B2 expression."},

{type:"mc", q:"¿Qué significa 'dormir como un leño'?", opts:["No poder dormir","Dormir muy profundamente","Dormir poco","Dormir incómodamente"], ans:"Dormir muy profundamente",
 hint:"A log is heavy and motionless. Apply that image to sleeping."},

{type:"fb", s:"Visitamos un {1} del siglo XVIII en La Rioja donde todavía hacen vino.", a:["lagar"], opts:["lagar","kiosco","leño","base"],
 hint:"This is a traditional facility where grapes are pressed to make wine.",
 sSrc:"We visited an 18th-century {1} in La Rioja where they still make wine."},

{type:"teach", trg:"el listón", src:"the bar / standard / ribbon", pos:"noun", gender:"m",
 note:"A thin strip of wood or fabric. Figurative: the standard or bar to meet.\nFrom lista.",
 example:"A: Han puesto el listón muy alto para este puesto.\nB: Solo aceptan candidatos con mucha experiencia.",
 exampleSrc:"A: They've set the bar very high for this position.\nB: They only accept very experienced candidates.",
 funFact:"'Poner el listón alto' (to set the bar high) is used constantly in Spanish."},

{type:"teach", trg:"la malaquita", src:"malachite", pos:"noun", gender:"f",
 note:"A green mineral used in jewelry and decoration.\nFrom Greek malakhe (mallow).",
 example:"A: La malaquita tiene un color verde intenso muy bonito.\nB: Se usa mucho en joyería artesanal.",
 exampleSrc:"A: Malachite has a very beautiful deep green color.\nB: It's used a lot in artisan jewelry.",
 funFact:"Named after the mallow plant whose leaves share the same green color."},

{type:"teach", trg:"el fierro", src:"iron (Latin American)", pos:"noun", gender:"m",
 note:"Latin American word for iron. In Spain: hierro.\nAlso: branding iron for cattle.",
 example:"A: En muchas haciendas todavía marcan el ganado con fierro.\nB: Es una tradición que tiene siglos.",
 exampleSrc:"A: On many ranches they still brand cattle with an iron.\nB: It's a tradition that goes back centuries.",
 funFact:"In Mexico, 'fierro' also means 'cool' or 'great' in youth slang."},

{type:"match", pairs:[
 {trg:"la carpintería", src:"carpenter's workshop"},
 {trg:"el leñador", src:"lumberjack"},
 {trg:"el lagar", src:"wine press"},
 {trg:"el kiosco", src:"kiosk"},
 {trg:"el listón", src:"bar / standard"}
]},

{type:"fb", s:"Han puesto el {1} muy alto para aprobar el examen.", a:["listón"], opts:["listón","leño","fierro","lagar"],
 hint:"This figurative expression means the standard or bar has been set high.",
 sSrc:"They've set the {1} very high to pass the exam."},

{type:"mc", q:"¿Cuál es la diferencia entre 'fierro' y 'hierro'?", opts:["Fierro es más moderno","Hierro es más informal","Fierro es la forma latinoamericana de hierro","Son minerales diferentes"], ans:"Fierro es la forma latinoamericana de hierro",
 hint:"Both words mean iron, but one is standard in Latin America, the other in Spain."},

{type:"drag_fill", s:"El {1} trabajaba en la {2} del pueblo desde joven.", blanks:{"1":"leñador","2":"carpintería"}, pool:["leñador","carpintería","malaquita","kiosco"],
 hint:"The woodcutter worked in the woodworking shop since he was young."},

{type:"fb", s:"Pon otro {1} en la chimenea, que se apaga el fuego.", a:["leño"], opts:["leño","listón","fierro","kiosco"],
 hint:"This noun means a piece of cut wood for burning in a fireplace.",
 sSrc:"Put another {1} on the fireplace, the fire is going out."},

{type:"match", pairs:[
 {trg:"el leño", src:"log"},
 {trg:"la base", src:"base / foundation"},
 {trg:"la cabeza", src:"head"},
 {trg:"la línea", src:"line"},
 {trg:"el fierro", src:"iron (Lat. Am.)"}
]}
]};
export default LESSON_13;
