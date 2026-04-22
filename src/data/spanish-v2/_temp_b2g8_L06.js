// B2 Gap Batch 8 Lesson 06 - Industry & Manufacturing
const LESSON_6 = {id:"esv2_b2g8_l6",title:"Industria y fabricación",icon:"🏭",xp:15,board:true,steps:[
{type:"intro",title:"Industria y fabricación",desc:"Explore vocabulary for manufacturing, industrial processes, and traditional crafts in Spain.",goals:["Learn 14 industry and craft terms","Discuss manufacturing processes","Use technical vocabulary for production"]},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of woodworking, or the workshop itself.\nCarpintero/a = carpenter.",
 example:"A: Mi abuelo tenía una carpintería en el pueblo.\nB: ¿Todavía existe? Me encantaría visitarla.",
 exampleSrc:"A: My grandfather had a carpentry workshop in the village.\nB: Does it still exist? I would love to visit it.",
 funFact:"From Latin carpentarius (wagon maker). Spanish carpintería traditionally uses local woods like oak and walnut."},

{type:"teach",trg:"el mecanismo",src:"the mechanism",pos:"noun",gender:"m",
 note:"Masculine noun. A system of moving parts that performs a function.\nAlso used figuratively.",
 example:"A: El mecanismo de este reloj es increíblemente preciso.\nB: Es suizo. Tienen siglos de experiencia.",
 exampleSrc:"A: The mechanism of this watch is incredibly precise.\nB: It is Swiss. They have centuries of experience.",
 funFact:"Figuratively, 'mecanismo de defensa' (defense mechanism) is widely used in Spanish psychology texts."},

{type:"teach",trg:"el fierro",src:"the iron (material)",pos:"noun",gender:"m",
 note:"Masculine noun. Iron, especially in its raw form.\nMore common in Latin America than 'hierro'.",
 example:"A: Las puertas de fierro son muy resistentes.\nB: Sí, pero necesitan mantenimiento contra la oxidación.",
 exampleSrc:"A: Iron doors are very resistant.\nB: Yes, but they need maintenance against rust.",
 funFact:"In Peninsular Spanish, 'hierro' is standard. 'Fierro' is the Latin American variant from Latin ferrum."},

{type:"teach",trg:"la hilera",src:"the row / line / wire-drawing plate",pos:"noun",gender:"f",
 note:"Feminine noun. A line of things, or a tool for drawing wire.\nFrom hilo (thread).",
 example:"A: Los árboles están plantados en hileras perfectas.\nB: Es un olivar muy bien cuidado.",
 exampleSrc:"A: The trees are planted in perfect rows.\nB: It is a very well-maintained olive grove.",
 funFact:"In metalworking, a 'hilera' is the die through which wire is drawn. Same word, very different context."},

{type:"mc",q:"¿Qué es una carpintería?",
 opts:["Un taller donde se trabaja la madera","Una fábrica de coches","Un almacén de comida","Una oficina de diseño"],
 ans:"Un taller donde se trabaja la madera",
 hint:"Think about the craft of working with wood and the place where it happens."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / preparation",pos:"noun",gender:"m",
 note:"Masculine noun. The process of preparing or adapting something.\nAire acondicionado = air conditioning.",
 example:"A: El acondicionamiento del local costó más de lo previsto.\nB: Las reformas siempre se encarecen.",
 exampleSrc:"A: The conditioning of the premises cost more than expected.\nB: Renovations always become more expensive.",
 funFact:"'Acondicionamiento' is used for everything from gym conditioning to industrial site preparation."},

{type:"teach",trg:"el autoservicio",src:"the self-service",pos:"noun",gender:"m",
 note:"Masculine noun. A system where customers serve themselves.\nAuto- = self, servicio = service.",
 example:"A: Este restaurante funciona como autoservicio.\nB: Prefiero eso. Es más rápido y económico.",
 exampleSrc:"A: This restaurant operates as self-service.\nB: I prefer that. It is faster and more affordable.",
 funFact:"Spain's first self-service supermarket opened in 1957. Before that, shop assistants served every customer."},

{type:"teach",trg:"la horquilla",src:"the hairpin / fork / bracket",pos:"noun",gender:"f",
 note:"Feminine noun. A hairpin, a pitchfork, or a range between values.\nFrom horca (fork).",
 example:"A: La horquilla de precios va de cincuenta a cien euros.\nB: Es un rango bastante amplio.",
 exampleSrc:"A: The price bracket goes from fifty to one hundred euros.\nB: That is quite a wide range.",
 funFact:"In business Spanish, 'horquilla' commonly means a range or bracket of values. Very useful in negotiations."},

{type:"fb",s:"El {1} del nuevo almacén incluye electricidad, pintura y suelos.",
 a:["acondicionamiento"],opts:["acondicionamiento","autoservicio","mecanismo","fierro"],
 hint:"The process of preparing and adapting a space so it is ready for use.",
 sSrc:"The {1} of the new warehouse includes electricity, paint, and flooring."},

{type:"teach",trg:"el llavero",src:"the keychain",pos:"noun",gender:"m",
 note:"Masculine noun. A ring or holder for keys.\nLlave (key) + -ero (holder).",
 example:"A: ¿Has visto mi llavero? No encuentro las llaves del coche.\nB: Mira en el cajón de la entrada.",
 exampleSrc:"A: Have you seen my keychain? I cannot find the car keys.\nB: Look in the drawer by the entrance.",
 funFact:"The suffix -ero often indicates a container: llave > llavero, moneda > monedero, joya > joyero."},

{type:"teach",trg:"la finalización",src:"the completion / finalization",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing or completing something.\nVerb: finalizar.",
 example:"A: La finalización del proyecto está prevista para diciembre.\nB: Espero que no haya más retrasos.",
 exampleSrc:"A: The completion of the project is planned for December.\nB: I hope there are no more delays.",
 funFact:"In formal Spanish, 'finalización' is preferred over 'terminación' in contracts and official documents."},

{type:"teach",trg:"el mejoramiento",src:"the improvement",pos:"noun",gender:"m",
 note:"Masculine noun. The process of making something better.\nMore formal than 'mejora'.",
 example:"A: El mejoramiento de las instalaciones llevará tres meses.\nB: Valdrá la pena. Están muy deterioradas.",
 exampleSrc:"A: The improvement of the facilities will take three months.\nB: It will be worth it. They are very deteriorated.",
 funFact:"'Mejora' is everyday, 'mejoramiento' is technical/formal. Both come from mejorar (to improve)."},

{type:"mc",q:"Si un precio puede estar entre 50 y 100 euros, ¿cómo se llama ese rango?",
 opts:["Hilera de precios","Horquilla de precios","Mecanismo de precios","Autoservicio de precios"],
 ans:"Horquilla de precios",
 hint:"A word that literally means hairpin or fork, used in business for a range of values."},

{type:"teach",trg:"el manual",src:"the manual / handbook",pos:"noun",gender:"m",
 note:"Masculine noun. A book of instructions or reference.\nAlso an adjective meaning 'hand-operated'.",
 example:"A: ¿Has leído el manual de instrucciones de la máquina?\nB: No, pero debería antes de usarla.",
 exampleSrc:"A: Have you read the instruction manual for the machine?\nB: No, but I should before using it.",
 funFact:"As an adjective, 'trabajo manual' means manual labor. As a noun, it is a guidebook or handbook."},

{type:"teach",trg:"el manuscrito",src:"the manuscript",pos:"noun",gender:"m",
 note:"Masculine noun. A handwritten or typed document, especially unpublished.\nManu (hand) + scrito (written).",
 example:"A: Encontraron un manuscrito medieval en la biblioteca.\nB: ¿De qué época? Debe ser muy importante.",
 exampleSrc:"A: They found a medieval manuscript in the library.\nB: From what period? It must be very important.",
 funFact:"Spain's Royal Library holds over 3,000 medieval manuscripts, including Arabic texts from Al-Andalus."},

{type:"fb",s:"La {1} de las obras está prevista para el próximo mes de junio.",
 a:["finalización"],opts:["finalización","horquilla","carpintería","hilera"],
 hint:"The formal word for the completion or ending of a project.",
 sSrc:"The {1} of the construction work is planned for next June."},

{type:"match",pairs:[
 {trg:"el mecanismo",src:"mechanism"},
 {trg:"el autoservicio",src:"self-service"},
 {trg:"el llavero",src:"keychain"},
 {trg:"el manuscrito",src:"manuscript"},
 {trg:"el mejoramiento",src:"improvement"}
]},

{type:"mc",q:"¿Qué sufijo español crea sustantivos que significan 'contenedor de algo'?",
 opts:["-miento (mejoramiento)","-ura (dureza)","-ero (llavero, monedero)","-ción (finalización)"],
 ans:"-ero (llavero, monedero)",
 hint:"Think about llave > l..., moneda > m.... What ending do they share?"}
]};
export default LESSON_6;
