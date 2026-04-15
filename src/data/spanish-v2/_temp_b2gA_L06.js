// Lesson 6 — Tecnología e innovación
const LESSON_6 = {id:"esv2_b2gA_l6", title:"Tecnología e innovación", icon:"💻", xp:15, board:true, steps:[
{type:"intro", title:"Tecnología e innovación", desc:"Navigate vocabulary about technology, digital tools, and modern innovation in Spanish.", goals:["Learn 15 technology and innovation terms","Discuss digital transformation","Use tech vocabulary in formal contexts"]},

{type:"teach", trg:"la interconexión", src:"interconnection", pos:"noun", gender:"f",
 note:"The state of being connected to each other.\nInter- (between) + conexión.",
 example:"A: La interconexión de los dispositivos facilita el trabajo.\nB: Todo está conectado a la misma red.",
 exampleSrc:"A: The interconnection of devices makes work easier.\nB: Everything is connected to the same network.",
 funFact:"The 'Internet of Things' is called 'el Internet de las cosas' in Spanish."},

{type:"teach", trg:"numérico", src:"numerical / digital", pos:"adj", gender:null,
 note:"Related to numbers. In tech contexts, means digital.\nFrom número.",
 example:"A: Los datos numéricos confirman la tendencia.\nB: Las cifras no mienten.",
 exampleSrc:"A: The numerical data confirms the trend.\nB: The numbers don't lie.",
 funFact:"In French, 'numérique' means digital. Spanish uses both 'numérico' and 'digital'."},

{type:"teach", trg:"el listado", src:"the listing / list", pos:"noun", gender:"m",
 note:"A formatted list or inventory. More formal than 'lista'.\nFrom listar (to list).",
 example:"A: ¿Puedes enviarme el listado de participantes?\nB: Te lo mando por correo ahora mismo.",
 exampleSrc:"A: Can you send me the list of participants?\nB: I'll email it to you right now.",
 funFact:"In computing, 'listado' originally meant a printout from a dot-matrix printer."},

{type:"teach", trg:"el logo", src:"the logo", pos:"noun", gender:"m",
 note:"Short for logotipo. The visual symbol of a brand.\nFrom Greek logos (word).",
 example:"A: Han cambiado el logo de la empresa.\nB: El nuevo logo es mucho más moderno.",
 exampleSrc:"A: They've changed the company logo.\nB: The new logo is much more modern.",
 funFact:"Spain's Zara redesigned its logo in 2019, sparking major debate among designers."},

{type:"teach", trg:"el manual", src:"the manual / handbook", pos:"noun", gender:"m",
 note:"An instruction book or guide.\nAlso an adjective meaning 'by hand'.",
 example:"A: ¿Has leído el manual de instrucciones?\nB: Nadie lee los manuales, pero deberíamos.",
 exampleSrc:"A: Have you read the instruction manual?\nB: Nobody reads manuals, but we should.",
 funFact:"As adjective: 'trabajo manual' (manual labor). Spanish loves words with double lives."},

{type:"mc", q:"¿Qué es la 'interconexión de dispositivos'?", opts:["La conexión mutua entre aparatos electrónicos","Un tipo de cable especial","Una red social","Un programa informático"], ans:"La conexión mutua entre aparatos electrónicos",
 hint:"The prefix 'inter-' means between, and 'c...' means connection."},

{type:"fb", s:"El {1} de empleados incluye más de quinientos nombres.", a:["listado"], opts:["listado","logo","manual","numérico"],
 hint:"This formal noun means a formatted list or inventory of items.",
 sSrc:"The {1} of employees includes more than five hundred names."},

{type:"teach", trg:"el lineamiento", src:"the guideline / guiding principle", pos:"noun", gender:"m",
 note:"A directive or guiding principle for action.\nMore common in Latin America than Spain.",
 example:"A: Los lineamientos del proyecto están en el documento.\nB: Debemos seguirlos al pie de la letra.",
 exampleSrc:"A: The project guidelines are in the document.\nB: We must follow them to the letter.",
 funFact:"In Spain, 'directriz' is more common. Latin America prefers 'lineamiento'."},

{type:"teach", trg:"la coproducción", src:"the co-production", pos:"noun", gender:"f",
 note:"Joint production by two or more parties.\nCo- (together) + producción.",
 example:"A: La película es una coproducción hispano-francesa.\nB: Eso explica los actores de ambos países.",
 exampleSrc:"A: The film is a Spanish-French co-production.\nB: That explains the actors from both countries.",
 funFact:"Spain and France co-produce more films together than any other European pair."},

{type:"teach", trg:"el coordinador", src:"the coordinator", pos:"noun", gender:"m",
 note:"A person who organizes joint activities.\nFeminine: la coordinadora.",
 example:"A: El coordinador del proyecto ha convocado una reunión.\nB: Espero que nos actualice sobre los plazos.",
 exampleSrc:"A: The project coordinator has called a meeting.\nB: I hope he updates us on the deadlines.",
 funFact:"In Spanish politics, 'coordinador general' is a common party leadership title."},

{type:"mc", q:"¿Qué es un 'lineamiento'?", opts:["Una directriz o principio guía","Un tipo de línea telefónica","Un programa de diseño","Un cable de red"], ans:"Una directriz o principio guía",
 hint:"Think about 'línea' (line) in the sense of a guiding direction."},

{type:"fb", s:"La película es una {1} entre tres países europeos.", a:["coproducción"], opts:["coproducción","interconexión","coordinación","producción"],
 hint:"This noun means a joint production between multiple parties.",
 sSrc:"The film is a {1} between three European countries."},

{type:"teach", trg:"la fotonovela", src:"the photo novel / photo story", pos:"noun", gender:"f",
 note:"A story told through photographs with speech bubbles.\nFoto + novela.",
 example:"A: Mi abuela coleccionaba fotonovelas en los años setenta.\nB: Eran muy populares en toda Latinoamérica.",
 exampleSrc:"A: My grandmother collected photo novels in the seventies.\nB: They were very popular across Latin America.",
 funFact:"Fotonovelas were a massive cultural phenomenon in 1960s-70s Latin America."},

{type:"teach", trg:"el monopatín", src:"the skateboard", pos:"noun", gender:"m",
 note:"A board with wheels for riding.\nMono- (single) + patín (skate).",
 example:"A: Mi sobrino va al colegio en monopatín.\nB: Es más rápido que caminar.",
 exampleSrc:"A: My nephew goes to school on a skateboard.\nB: It's faster than walking.",
 funFact:"In Spain 'patinete' means scooter. Electric scooters revolutionized Spanish cities since 2018."},

{type:"teach", trg:"el monólogo", src:"the monologue", pos:"noun", gender:"m",
 note:"A long speech by one person.\nMono- (one) + logos (word).",
 example:"A: El monólogo del actor duró quince minutos.\nB: El público estaba completamente cautivado.",
 exampleSrc:"A: The actor's monologue lasted fifteen minutes.\nB: The audience was completely captivated.",
 funFact:"Stand-up comedy in Spain is called 'monólogos'. Dani Rovira popularized the format."},

{type:"match", pairs:[
 {trg:"la interconexión", src:"interconnection"},
 {trg:"el lineamiento", src:"guideline"},
 {trg:"la coproducción", src:"co-production"},
 {trg:"el coordinador", src:"coordinator"},
 {trg:"la fotonovela", src:"photo novel"}
]},

{type:"fb", s:"El {1} del equipo organiza todas las reuniones semanales.", a:["coordinador"], opts:["coordinador","monólogo","listado","manual"],
 hint:"This person is responsible for organizing joint activities and meetings.",
 sSrc:"The team {1} organizes all the weekly meetings."},

{type:"mc", q:"¿Qué es una 'fotonovela'?", opts:["Una historia contada con fotografías y bocadillos de diálogo","Una novela sobre fotografía","Un álbum de fotos familiar","Una revista de moda"], ans:"Una historia contada con fotografías y bocadillos de diálogo",
 hint:"Combine 'foto' (photo) with 'novela' (novel) for this storytelling format."},

{type:"drag_fill", s:"El {1} incluía los {2} para el desarrollo del proyecto.", blanks:{"1":"manual","2":"lineamientos"}, pool:["manual","lineamientos","monólogo","logo"],
 hint:"The handbook contained the guiding principles for the project."},

{type:"fb", s:"Los datos {1} demuestran un crecimiento del ocho por ciento.", a:["numéricos"], opts:["numéricos","manuales","logísticos","coordinados"],
 hint:"This adjective relates to numbers and quantitative data.",
 sSrc:"The {1} data demonstrates eight percent growth."},

{type:"match", pairs:[
 {trg:"numérico", src:"numerical"},
 {trg:"el listado", src:"listing"},
 {trg:"el logo", src:"logo"},
 {trg:"el monopatín", src:"skateboard"},
 {trg:"el monólogo", src:"monologue"}
]}
]};
export default LESSON_6;
