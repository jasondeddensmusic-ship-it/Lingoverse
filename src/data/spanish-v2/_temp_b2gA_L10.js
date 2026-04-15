// Lesson 10 — Literatura y creación
const LESSON_10 = {id:"esv2_b2gA_l10", title:"Literatura y creación", icon:"📚", xp:15, board:true, steps:[
{type:"intro", title:"Literatura y creación", desc:"Explore vocabulary for discussing literature, literary devices, and creative expression.", goals:["Learn 15 literary and creative terms","Discuss books and writing with precision","Use artistic vocabulary confidently"]},

{type:"teach", trg:"la metáfora", src:"the metaphor", pos:"noun", gender:"f",
 note:"A figure of speech comparing two things without 'like' or 'as'.\nFrom Greek metaphora.",
 example:"A: 'La vida es un viaje' es una metáfora muy conocida.\nB: Las metáforas hacen el lenguaje más expresivo.",
 exampleSrc:"A: 'Life is a journey' is a very well-known metaphor.\nB: Metaphors make language more expressive.",
 funFact:"From Greek meta (beyond) + pherein (to carry). Literally 'to carry beyond'."},

{type:"teach", trg:"la literatura popular", src:"popular literature / folk literature", pos:"noun", gender:"f",
 note:"Literature from oral tradition or mass appeal.\nRomances, coplas, cuentos populares.",
 example:"A: La literatura popular española es riquísima en romances.\nB: Se transmitían oralmente de generación en generación.",
 exampleSrc:"A: Spanish popular literature is very rich in ballads.\nB: They were transmitted orally from generation to generation.",
 funFact:"Spain's 'romancero' (ballad collection) dates back to the 14th century."},

{type:"teach", trg:"el fetiche", src:"the fetish / talisman", pos:"noun", gender:"m",
 note:"An object believed to have magical power.\nAlso: an obsessive fixation.",
 example:"A: Ese escritor tiene un fetiche con los finales abiertos.\nB: Es verdad, nunca cierra sus historias del todo.",
 exampleSrc:"A: That writer has a fetish for open endings.\nB: It's true, he never fully closes his stories.",
 funFact:"From Portuguese feitico (artificial), brought back by sailors from West Africa."},

{type:"teach", trg:"el nicho", src:"the niche", pos:"noun", gender:"m",
 note:"A small, specialized segment. Also: a wall recess.\nFrom Italian nicchia.",
 example:"A: Esa editorial se ha especializado en un nicho muy concreto.\nB: Publican solo novela negra nórdica.",
 exampleSrc:"A: That publisher has specialized in a very specific niche.\nB: They only publish Nordic crime fiction.",
 funFact:"In cemeteries, 'nicho' means a burial niche in a wall. Very common in Spain."},

{type:"teach", trg:"el náufrago", src:"the castaway / shipwreck survivor", pos:"noun", gender:"m",
 note:"A person stranded after a shipwreck.\nFrom Latin naufragus.",
 example:"A: Robinson Crusoe es el náufrago más famoso de la literatura.\nB: Pero hay náufragos reales igual de fascinantes.",
 exampleSrc:"A: Robinson Crusoe is the most famous castaway in literature.\nB: But there are real castaways just as fascinating.",
 funFact:"From Latin navis (ship) + frangere (to break). Literally 'ship-broken'."},

{type:"mc", q:"¿Qué es una metáfora?", opts:["Una comparación directa sin usar 'como'","Una pregunta retórica","Una repetición de sonidos","Una exageración extrema"], ans:"Una comparación directa sin usar 'como'",
 hint:"This figure of speech says something IS something else, without 'like'."},

{type:"fb", s:"Esa editorial ha encontrado su {1} en la novela histórica.", a:["nicho"], opts:["nicho","náufrago","fetiche","metáfora"],
 hint:"This noun means a small, specialized segment of a market or field.",
 sSrc:"That publisher has found its {1} in historical fiction."},

{type:"teach", trg:"modélico", src:"exemplary / model", pos:"adj", gender:null,
 note:"Serving as a perfect example.\nFrom modelo (model).",
 example:"A: Su comportamiento durante la crisis fue modélico.\nB: Todos deberíamos aprender de su ejemplo.",
 exampleSrc:"A: Her behavior during the crisis was exemplary.\nB: We should all learn from her example.",
 funFact:"'Ciudadano modélico' (model citizen) is a common expression in Spanish media."},

{type:"teach", trg:"el motivo", src:"the motive / motif / reason", pos:"noun", gender:"m",
 note:"The reason for something. In art: a recurring theme or pattern.",
 example:"A: ¿Cuál fue el motivo de su decisión?\nB: Razones personales que prefiere no explicar.",
 exampleSrc:"A: What was the motive for his decision?\nB: Personal reasons he prefers not to explain.",
 funFact:"In music, a 'motivo' is a short musical idea that recurs throughout a piece."},

{type:"teach", trg:"mísero", src:"miserable / wretched / meager", pos:"adj", gender:null,
 note:"Extremely poor, wretched, or insignificant.\nMore literary than 'miserable'.",
 example:"A: Vivían en una mísera cabaña sin agua corriente.\nB: Las condiciones eran inhumanas.",
 exampleSrc:"A: They lived in a wretched cabin without running water.\nB: The conditions were inhumane.",
 funFact:"Very literary register. Used in novels and formal writing more than daily speech."},

{type:"mc", q:"¿Qué significa 'modélico'?", opts:["Que sirve como ejemplo perfecto","Que es muy moderno","Que trabaja como modelo","Que es modificable"], ans:"Que sirve como ejemplo perfecto",
 hint:"Think about someone whose behavior is so good it could be a model for others."},

{type:"fb", s:"El {1} del crimen nunca fue esclarecido por la policía.", a:["motivo"], opts:["motivo","nicho","fetiche","náufrago"],
 hint:"This noun means the reason or cause behind an action.",
 sSrc:"The {1} of the crime was never clarified by the police."},

{type:"teach", trg:"el moño", src:"the bun (hairstyle)", pos:"noun", gender:"m",
 note:"Hair gathered and twisted into a knot.\nAlso: 'estar hasta el moño' (to be fed up).",
 example:"A: Se recogió el pelo en un moño elegante.\nB: Le quedaba perfecto para la gala.",
 exampleSrc:"A: She gathered her hair in an elegant bun.\nB: It looked perfect for the gala.",
 funFact:"'Estar hasta el moño' (to be up to the bun) is slang for being completely fed up."},

{type:"teach", trg:"la desnudez", src:"nudity / nakedness", pos:"noun", gender:"f",
 note:"The state of being unclothed. Also figurative: raw honesty.\nFrom desnudo (naked).",
 example:"A: La desnudez en el arte clásico no se consideraba escandalosa.\nB: Era una expresión de belleza ideal.",
 exampleSrc:"A: Nudity in classical art was not considered scandalous.\nB: It was an expression of ideal beauty.",
 funFact:"Velazquez's 'La Venus del espejo' was the first major Spanish painting with a female nude."},

{type:"teach", trg:"el laurel", src:"the laurel / bay leaf", pos:"noun", gender:"m",
 note:"An evergreen tree. Symbol of victory.\nAlso: the cooking herb (bay leaf).",
 example:"A: Los poetas romanos recibían una corona de laurel.\nB: Hoy usamos hojas de laurel para cocinar.",
 exampleSrc:"A: Roman poets received a laurel wreath.\nB: Today we use bay leaves for cooking.",
 funFact:"'Dormirse en los laureles' (to rest on your laurels) means to become complacent."},

{type:"match", pairs:[
 {trg:"la metáfora", src:"metaphor"},
 {trg:"el náufrago", src:"castaway"},
 {trg:"modélico", src:"exemplary"},
 {trg:"mísero", src:"wretched"},
 {trg:"el laurel", src:"laurel"}
]},

{type:"fb", s:"La {1} en el arte renacentista era símbolo de pureza.", a:["desnudez"], opts:["desnudez","metáfora","literatura","creación"],
 hint:"This noun refers to the state of being unclothed, common in classical art.",
 sSrc:"{1} in Renaissance art was a symbol of purity."},

{type:"mc", q:"¿Qué significa 'dormirse en los laureles'?", opts:["Volverse complaciente y dejar de esforzarse","Dormir muy bien","Ganar un premio importante","Cocinar con hojas de laurel"], ans:"Volverse complaciente y dejar de esforzarse",
 hint:"After winning victory (the laurel wreath), one might stop trying hard."},

{type:"drag_fill", s:"Su novela era una {1} sobre la vida {2} de los campesinos.", blanks:{"1":"metáfora","2":"mísera"}, pool:["metáfora","mísera","modélica","popular"],
 hint:"The novel used a literary comparison to describe the wretched life of peasants."},

{type:"fb", s:"Se hizo un {1} alto para la entrevista de trabajo.", a:["moño"], opts:["moño","laurel","nicho","motivo"],
 hint:"This noun describes a hairstyle where hair is gathered in a knot.",
 sSrc:"She put her hair in a high {1} for the job interview."},

{type:"match", pairs:[
 {trg:"la literatura popular", src:"folk literature"},
 {trg:"el fetiche", src:"fetish"},
 {trg:"el nicho", src:"niche"},
 {trg:"el motivo", src:"motive"},
 {trg:"la desnudez", src:"nudity"}
]}
]};
export default LESSON_10;
