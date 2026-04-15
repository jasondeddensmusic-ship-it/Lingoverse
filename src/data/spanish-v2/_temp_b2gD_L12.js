// B2 Gap Batch D Lesson 12 - Communication & Media
const LESSON_12 = {id:"esv2_b2gD_l12",title:"Comunicación y medios",icon:"\uD83D\uDCF0",xp:15,board:true,steps:[
{type:"intro",title:"Comunicación y medios",desc:"Master vocabulary for media, publishing, and communication. Essential for discussing information and culture at B2.",goals:["Learn 10 media and communication vocabulary items","Discuss journalism and publishing confidently","Use formal communication terminology"]},

{type:"teach",trg:"el medio de comunicación",src:"the media outlet / means of communication",pos:"noun",gender:"m",
 note:"Masculine compound noun. Any channel for sharing information.\nPlural: los medios de comunicación (the media).",
 example:"A: Los medios de comunicación informaron sobre la crisis durante semanas.\nB: Algunos fueron más objetivos que otros.",
 exampleSrc:"A: The media reported on the crisis for weeks.\nB: Some were more objective than others.",
 funFact:"In Spain, 'los medios' alone usually means the press and broadcast media. Social media is 'redes sociales'."},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine compound noun. A newspaper published online.\nDiario (daily) + digital (digital).",
 example:"A: Leo varios diarios digitales cada mañana.\nB: Es la forma más rápida de estar informado.",
 exampleSrc:"A: I read several online newspapers every morning.\nB: It's the fastest way to stay informed.",
 funFact:"Spain's eldiario.es pioneered reader-funded digital journalism in Spanish. 'Diario' literally means 'daily'."},

{type:"teach",trg:"la oratoria",src:"the oratory / public speaking",pos:"noun",gender:"f",
 note:"Feminine noun. The art of eloquent public speaking.\nFrom Latin orator (speaker).",
 example:"A: La oratoria es fundamental para cualquier político.\nB: Un buen discurso puede cambiar la opinión de miles de personas.",
 exampleSrc:"A: Oratory is fundamental for any politician.\nB: A good speech can change thousands of people's opinions.",
 funFact:"Spain has a rich oratory tradition. The Cortes (parliament) debates are known for dramatic rhetoric since the 19th century."},

{type:"teach",trg:"la fotonovela",src:"the photo story / photo romance",pos:"noun",gender:"f",
 note:"Feminine noun. A story told through photographs with speech bubbles.\nPopular in Spain and Latin America 1950s-1980s.",
 example:"A: Mi madre coleccionaba fotonovelas en los años setenta.\nB: Eran como cómics pero con fotos reales de actores.",
 exampleSrc:"A: My mother collected photo stories in the seventies.\nB: They were like comics but with real photos of actors.",
 funFact:"Fotonovelas were hugely popular across the Spanish-speaking world. Some sold millions of copies weekly before television took over."},

{type:"mc",q:"Los medios de comunicación incluyen...",opts:["Prensa, radio, televisión e internet","Solo los periódicos impresos","Únicamente las redes sociales","Las bibliotecas públicas"],ans:"Prensa, radio, televisión e internet",hint:"All channels through which information reaches the public: print, broadcast, and digital."},

{type:"teach",trg:"la literatura popular",src:"the popular literature / folk literature",pos:"noun",gender:"f",
 note:"Feminine compound noun. Literature by and for common people.\nIncludes romances, coplas, and oral traditions.",
 example:"A: La literatura popular española incluye romances y coplas.\nB: Muchas se transmitían oralmente de generación en generación.",
 exampleSrc:"A: Spanish popular literature includes ballads and folk songs.\nB: Many were passed down orally from generation to generation.",
 funFact:"Federico García Lorca drew heavily from Spanish literatura popular, blending folk ballad forms with avant-garde poetry."},

{type:"teach",trg:"la pauta",src:"the guideline / pattern / standard",pos:"noun",gender:"f",
 note:"Feminine noun. A rule or standard to follow.\nAlso: a template or behavioral pattern.",
 example:"A: El médico me dio unas pautas para mejorar mi alimentación.\nB: Sobre todo reducir el azúcar y aumentar las verduras.",
 exampleSrc:"A: The doctor gave me some guidelines to improve my diet.\nB: Mainly reduce sugar and increase vegetables.",
 funFact:"'Marcar la pauta' (to set the standard) is a common expression meaning to lead the way or establish the trend."},

{type:"teach",trg:"el palimpsesto",src:"the palimpsest",pos:"noun",gender:"m",
 note:"Masculine noun. A manuscript with layers of erased and rewritten text.\nAlso figurative: something with hidden layers.",
 example:"A: Los monjes medievales reutilizaban pergaminos creando palimpsestos.\nB: Con tecnología moderna se pueden leer los textos ocultos.",
 exampleSrc:"A: Medieval monks reused parchments creating palimpsests.\nB: With modern technology the hidden texts can be read.",
 funFact:"The most famous palimpsest is the Archimedes Palimpsest, containing erased Greek mathematical texts under medieval prayers."},

{type:"fb",s:"El médico me dio varias {1} para llevar una vida más sana.",a:["pautas"],opts:["pautas","paradojas","fotonovelas","palimpsestos"],hint:"Guidelines or recommendations to follow. Rules that set a standard for behavior.",sSrc:"The doctor gave me several {1} for living a healthier life."},

{type:"teach",trg:"la fisonomía",src:"the physiognomy / facial features",pos:"noun",gender:"f",
 note:"Feminine noun. The appearance of a person's face.\nAlso: the general appearance of a place.",
 example:"A: La fisonomía del barrio ha cambiado completamente en diez años.\nB: Ya no reconozco muchas de las calles.",
 exampleSrc:"A: The physiognomy of the neighborhood has changed completely in ten years.\nB: I don't recognize many of the streets anymore.",
 funFact:"'Fisonomía' can describe both faces and places. A 'fisonomista' is someone good at remembering faces, like a nightclub doorman."},

{type:"teach",trg:"el fetiche",src:"the fetish / lucky charm",pos:"noun",gender:"m",
 note:"Masculine noun. An object believed to have magical power.\nAlso: an obsessive fixation.",
 example:"A: Muchos deportistas tienen un fetiche que les da suerte.\nB: Es una cuestión psicológica, les da confianza.",
 exampleSrc:"A: Many athletes have a lucky charm that brings them luck.\nB: It's a psychological thing, it gives them confidence.",
 funFact:"From Portuguese 'feitico' (sorcery), which itself comes from Latin 'facticius' (made by art). The Portuguese brought the word from West Africa."},

{type:"match",pairs:[
 {trg:"medio de comunicación",src:"media outlet"},
 {trg:"oratoria",src:"public speaking"},
 {trg:"fotonovela",src:"photo story"},
 {trg:"pauta",src:"guideline"},
 {trg:"fisonomía",src:"physiognomy"}
]},

{type:"mc",q:"Un palimpsesto es...",opts:["Un manuscrito con capas de texto borrado y reescrito","Un tipo de periódico antiguo","Una técnica de fotografía","Un instrumento musical medieval"],ans:"Un manuscrito con capas de texto borrado y reescrito",hint:"Medieval monks would erase old text and write over it, creating layers of hidden writing."},

{type:"fb",s:"La {1} del casco antiguo se ha conservado pese a las reformas.",a:["fisonomía"],opts:["fisonomía","oratoria","pauta","fotonovela"],hint:"The general appearance or character of a place, especially its visual identity.",sSrc:"The {1} of the old town has been preserved despite the renovations."},

{type:"mc",q:"'Marcar la pauta' significa...",opts:["Establecer el estándar o liderar","Escribir un libro","Pintar un cuadro","Leer un periódico"],ans:"Establecer el estándar o liderar",hint:"An expression about setting trends or leading the way for others to follow."}
]};
export default LESSON_12;
