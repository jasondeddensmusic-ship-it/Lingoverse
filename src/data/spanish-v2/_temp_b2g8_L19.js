// B2 Gap Batch 8 Lesson 19 - Arts, Publishing & Manuscripts
const LESSON_19 = {id:"esv2_b2g8_l19",title:"Artes y publicaciones",icon:"📜",xp:15,board:true,steps:[
{type:"intro",title:"Artes y publicaciones",desc:"Learn vocabulary for arts, publishing, manuscripts, and media in Spanish culture.",goals:["Learn 15 words about arts and publishing","Discuss manuscripts and cultural works","Use specialized vocabulary for media and design"]},

{type:"teach",trg:"el manuscrito",src:"the manuscript",pos:"noun",gender:"m",
 note:"Masculine noun. A handwritten or typed text, especially before publication.\nManu (hand) + scrito (written).",
 example:"A: Encontraron un manuscrito medieval en la biblioteca.\nB: Podría tener más de quinientos años de antigüedad.",
 exampleSrc:"A: They found a medieval manuscript in the library.\nB: It could be over five hundred years old.",
 funFact:"Spain's National Library holds the Beatus manuscripts, illustrated apocalyptic texts from the 10th century."},

{type:"teach",trg:"el mapamundi",src:"the world map",pos:"noun",gender:"m",
 note:"Masculine noun. A map showing the entire world.\nFrom Latin mappa mundi (cloth of the world).",
 example:"A: El mapamundi del siglo XVI mostraba las rutas de los exploradores.\nB: Es fascinante ver cómo entendían el mundo.",
 exampleSrc:"A: The 16th-century world map showed the explorers' routes.\nB: It is fascinating to see how they understood the world.",
 funFact:"The earliest known mapamundi in Spain is the Beatus world map from around 776 AD, showing a flat earth."},

{type:"teach",trg:"el maquetador",src:"the layout designer / typesetter",pos:"noun",gender:"m",
 note:"Masculine noun. A person who designs the layout of publications.\nFeminine: la maquetadora. From maqueta (mock-up).",
 example:"A: El maquetador diseñó las páginas de la revista con mucho cuidado.\nB: El resultado es muy profesional y atractivo.",
 exampleSrc:"A: The layout designer arranged the magazine pages with great care.\nB: The result is very professional and attractive.",
 funFact:"Despite digital tools, skilled maquetadores are still valued in Spanish publishing for their artistic eye."},

{type:"teach",trg:"el margen",src:"the margin / edge",pos:"noun",gender:"m",
 note:"Masculine noun (when meaning edge/margin).\nFeminine 'la margen' means riverbank.\nMargen de beneficio = profit margin.",
 example:"A: Escribe las notas en el margen del libro.\nB: Prefiero usar un cuaderno aparte para eso.",
 exampleSrc:"A: Write your notes in the margin of the book.\nB: I prefer to use a separate notebook for that.",
 funFact:"'El margen' (m) is the space on a page; 'la margen' (f) is a riverbank. Same word, different gender, different meaning."},

{type:"teach",trg:"el manual",src:"the manual / handbook",pos:"noun",gender:"m",
 note:"Masculine noun. A book of instructions or reference.\nAlso adjective: trabajo manual = manual labor.",
 example:"A: ¿Has leído el manual de instrucciones del aparato?\nB: No, pero debería. No consigo que funcione.",
 exampleSrc:"A: Have you read the instruction manual for the device?\nB: No, but I should. I cannot get it to work.",
 funFact:"The adjective 'manual' comes from Latin manualis (of the hand). Trabajo manual = work done by hand."},

{type:"mc",q:"¿Qué es un mapamundi?",
 opts:["Un mapa que muestra todo el mundo","Un tipo de manuscrito","Un diseño de revista","Una escultura antigua"],
 ans:"Un mapa que muestra todo el mundo",
 hint:"Mappa (cloth/map) + mundi (of the world). A complete representation of the globe."},

{type:"teach",trg:"la melena",src:"the long loose hair / mane",pos:"noun",gender:"f",
 note:"Feminine noun. Long hair worn loose, or a lion's mane.\nMelenudo/a = long-haired person.",
 example:"A: Llevaba una melena rubia que le llegaba hasta la cintura.\nB: Tardará horas en secarse después de lavarla.",
 exampleSrc:"A: She had long blonde hair that reached her waist.\nB: It will take hours to dry after washing it.",
 funFact:"In the 1960s, having a 'melena' as a man was considered rebellious in Spain under Franco's regime."},

{type:"teach",trg:"la mención",src:"the mention / citation",pos:"noun",gender:"f",
 note:"Feminine noun. A reference to something or someone.\nMención honorífica = honorable mention.",
 example:"A: El artículo hace mención de los problemas ambientales.\nB: Es un tema que aparece cada vez más en los medios.",
 exampleSrc:"A: The article makes mention of environmental problems.\nB: It is a topic that appears more and more in the media.",
 funFact:"'Mención especial' and 'mención honorífica' are used in Spanish academic and literary awards."},

{type:"teach",trg:"el medioambiente",src:"the environment",pos:"noun",gender:"m",
 note:"Masculine noun. The natural world and ecosystems.\nAlso written as two words: medio ambiente.",
 example:"A: La protección del medioambiente es responsabilidad de todos.\nB: Pequeños gestos diarios marcan la diferencia.",
 exampleSrc:"A: Protecting the environment is everyone's responsibility.\nB: Small daily actions make a difference.",
 funFact:"Spain's Ministerio para la Transicion Ecologica handles environmental policy. The word can be one or two words."},

{type:"fb",s:"Encontraron un {1} del siglo XV en perfecto estado de conservación.",
 a:["manuscrito"],opts:["manuscrito","mapamundi","manual","margen"],
 hint:"A handwritten text from centuries ago, often found in libraries or archives.",
 sSrc:"They found a 15th-century {1} in perfect condition."},

{type:"teach",trg:"la mediación",src:"the mediation",pos:"noun",gender:"f",
 note:"Feminine noun. Intervention to resolve a dispute between parties.\nFrom mediar (to mediate).",
 example:"A: La mediación del sindicato evitó la huelga.\nB: Ambas partes llegaron a un acuerdo satisfactorio.",
 exampleSrc:"A: The union's mediation prevented the strike.\nB: Both parties reached a satisfactory agreement.",
 funFact:"Spain has professional mediadores familiares who help resolve family disputes outside of court."},

{type:"teach",trg:"la mediocridad",src:"the mediocrity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being average or below standard.\nFrom mediocre (mediocre).",
 example:"A: Para ella, la mediocridad en el trabajo era inaceptable.\nB: Siempre buscaba lo mejor en cada proyecto.",
 exampleSrc:"A: For her, mediocrity at work was unacceptable.\nB: She always sought the best in every project.",
 funFact:"The word 'mediocre' comes from Latin mediocris, literally 'halfway up the mountain' (medius + ocris)."},

{type:"teach",trg:"la ilustración",src:"the illustration / the Enlightenment",pos:"noun",gender:"f",
 note:"Feminine noun. A picture in a book, or the 18th-century intellectual movement.\nFrom ilustrar (to illustrate/enlighten).",
 example:"A: Las ilustraciones del libro infantil son preciosas.\nB: El ilustrador ganó un premio internacional.",
 exampleSrc:"A: The illustrations in the children's book are beautiful.\nB: The illustrator won an international prize.",
 funFact:"'La Ilustracion' (the Enlightenment) reached Spain through figures like Jovellanos and Feijoo in the 18th century."},

{type:"mc",q:"'El margen' y 'la margen' tienen distinto significado. ¿Cuál es femenino?",
 opts:["La orilla de un río","El espacio en blanco de una página","El beneficio económico","El borde de un libro"],
 ans:"La orilla de un río",
 hint:"When feminine, this word refers to the bank or edge of a river. The masculine form is for page edges."},

{type:"teach",trg:"la impronta",src:"the imprint / mark / influence",pos:"noun",gender:"f",
 note:"Feminine noun. A lasting mark or influence left on something.\nFrom Latin imprimere (to press into).",
 example:"A: La cultura árabe dejó una impronta profunda en España.\nB: Se nota en la arquitectura, la lengua y la gastronomía.",
 exampleSrc:"A: Arab culture left a deep imprint on Spain.\nB: You can see it in the architecture, language, and cuisine.",
 funFact:"Over 4,000 Spanish words come from Arabic, including almohada, alfombra, and aceite. A lasting impronta."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem larger or more important than it is.\nFrom exagerar (to exaggerate).",
 example:"A: Decir que es el mejor libro del siglo es una exageración.\nB: Bueno, es muy bueno, pero quizás no tanto.",
 exampleSrc:"A: Saying it is the best book of the century is an exaggeration.\nB: Well, it is very good, but perhaps not that much.",
 funFact:"Spaniards are known for expressive speech. Hyperbole and exaggeration are natural rhetorical tools."},

{type:"fb",s:"La {1} entre las dos empresas resolvió el conflicto sin ir a juicio.",
 a:["mediación"],opts:["mediación","mediocridad","mención","exageración"],
 hint:"The process of a third party helping two sides reach an agreement.",
 sSrc:"The {1} between the two companies resolved the conflict without going to court."},

{type:"mc",q:"¿Qué hace un maquetador?",
 opts:["Diseña la disposición visual de publicaciones","Escribe artículos de prensa","Repara máquinas","Conduce un camión de reparto"],
 ans:"Diseña la disposición visual de publicaciones",
 hint:"This person arranges text, images, and layout for magazines, books, or newspapers."},

{type:"match",pairs:[
 {trg:"manuscrito",src:"manuscript"},
 {trg:"medioambiente",src:"environment"},
 {trg:"ilustración",src:"illustration"},
 {trg:"impronta",src:"imprint / influence"},
 {trg:"melena",src:"long hair / mane"}
]},

{type:"fb",s:"No te conformes con la {1}. Siempre busca mejorar.",
 a:["mediocridad"],opts:["mediocridad","mediación","mención","melena"],
 hint:"The quality of being average, settling for less than excellence.",
 sSrc:"Do not settle for {1}. Always seek to improve."},

{type:"mc",q:"¿Qué es una impronta cultural?",
 opts:["Una huella o influencia duradera en la cultura","Un tipo de estampa decorativa","Un documento oficial","Una ceremonia religiosa"],
 ans:"Una huella o influencia duradera en la cultura",
 hint:"A lasting mark or influence left behind. Think of how Arab culture shaped Spanish architecture."}
]};
export default LESSON_19;
