// B2 Gap2 Lesson 05 - Arts & Culture
const LESSON_5 = {id:"esv2_b2g2_l5",title:"Arte y cultura",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Arte y cultura",desc:"Discover vocabulary for discussing art, music, cultural traditions, and creative expression in the Spanish-speaking world.",goals:["Learn 20 words about arts and culture","Discuss artistic movements and traditions","Describe creative works and performances"]},

{type:"teach",trg:"artesanal",src:"artisanal / handcrafted",pos:"adj",gender:null,
 note:"Adjective. Made by hand using traditional methods. Same form for m/f.",
 example:"A: Me encanta este queso artesanal.\nB: Lo hacen en un pueblo de Asturias.",
 exampleSrc:"A: I love this artisanal cheese.\nB: They make it in a village in Asturias.",
 funFact:"'Productos artesanales' are a point of pride in Spain, from ceramics to leather goods."},

{type:"teach",trg:"el collage",src:"the collage",pos:"noun",gender:"m",
 note:"Masculine noun. An artwork made by combining different materials.",
 example:"A: Los niños hicieron un collage con recortes de revistas.\nB: Quedó muy creativo y colorido.",
 exampleSrc:"A: The children made a collage with magazine clippings.\nB: It turned out very creative and colorful.",
 funFact:"From French 'coller' (to glue). Picasso and Juan Gris pioneered collage in the early 1900s."},

{type:"teach",trg:"el claroscuro",src:"the chiaroscuro",pos:"noun",gender:"m",
 note:"Masculine noun. The contrast of light and shadow in art.",
 example:"A: El claroscuro de este cuadro es impresionante.\nB: Velázquez dominaba esa técnica como nadie.",
 exampleSrc:"A: The chiaroscuro in this painting is impressive.\nB: Velázquez mastered that technique like no one else.",
 funFact:"Compound: claro (light) + oscuro (dark). The technique reached Spain through Italian influence."},

{type:"teach",trg:"el cancionero",src:"the songbook / collection of songs",pos:"noun",gender:"m",
 note:"Masculine noun. A collection of songs or poems.",
 example:"A: Este cancionero recoge canciones populares del siglo XV.\nB: Es un tesoro de la literatura medieval.",
 exampleSrc:"A: This songbook collects popular songs from the 15th century.\nB: It is a treasure of medieval literature.",
 funFact:"The 'Cancionero de Palacio' is one of Spain's most important medieval music manuscripts."},

{type:"teach",trg:"el bailaor",src:"the flamenco dancer (male)",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la bailaora.\nSpecific to flamenco, not general dance.",
 example:"A: El bailaor zapateó con una fuerza increíble.\nB: El público se puso de pie para aplaudir.",
 exampleSrc:"A: The flamenco dancer stomped with incredible force.\nB: The audience stood up to applaud.",
 funFact:"'Bailaor' drops the d from 'bailador', a feature of Andalusian Spanish preserved in flamenco."},

{type:"mc",q:"¿Qué es el claroscuro en pintura?",opts:["El contraste entre luz y sombra","Una mezcla de colores vivos","Un tipo de marco dorado","Una técnica de escultura"],ans:"El contraste entre luz y sombra",hint:"Think about the interplay of brightness and darkness in a painting."},

{type:"teach",trg:"el cantaor",src:"the flamenco singer (male)",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la cantaora.\nSpecific to flamenco singing.",
 example:"A: El cantaor cerró los ojos y empezó a cantar.\nB: Su voz tenía una profundidad conmovedora.",
 exampleSrc:"A: The flamenco singer closed his eyes and began to sing.\nB: His voice had a moving depth.",
 funFact:"Camarón de la Isla is considered the greatest cantaor in flamenco history."},

{type:"teach",trg:"castizo",src:"traditional / authentic (Madrid)",pos:"adj",gender:null,
 note:"Adjective. Authentically traditional, especially of Madrid culture.\nFeminine: castiza.",
 example:"A: Este barrio es muy castizo.\nB: Sí, aquí se vive la fiesta de San Isidro como en ningún sitio.",
 exampleSrc:"A: This neighborhood is very traditional.\nB: Yes, here they celebrate the San Isidro festival like nowhere else.",
 funFact:"A 'madrileño castizo' wears the traditional chulapo outfit during the San Isidro festivities."},

{type:"teach",trg:"la banderilla",src:"the banderilla",pos:"noun",gender:"f",
 note:"Feminine noun. A decorated dart in bullfighting. Also: a skewered tapa.",
 example:"A: ¿Has probado las banderillas de encurtidos?\nB: Sí, son perfectas con una caña de cerveza.",
 exampleSrc:"A: Have you tried the pickled banderillas?\nB: Yes, they are perfect with a beer.",
 funFact:"The tapa version is named after the bullfighting implement. Olives, peppers, and gherkins on a stick."},

{type:"teach",trg:"la armónica",src:"the harmonica",pos:"noun",gender:"f",
 note:"Feminine noun. A small wind instrument played with the mouth.",
 example:"A: Aprendió a tocar la armónica de niño.\nB: Ahora toca en un grupo de blues.",
 exampleSrc:"A: He learned to play the harmonica as a child.\nB: Now he plays in a blues band.",
 funFact:"The harmonica arrived in Spain in the 19th century and became popular in folk music."},

{type:"fb",s:"El {1} zapateó con una energía impresionante en el tablao.",a:["bailaor"],opts:["bailaor","cantaor","cancionero","collage"],hint:"The male flamenco dancer, a word specific to this art form.",sSrc:"The {1} stomped with impressive energy on the flamenco stage."},

{type:"teach",trg:"la cítara",src:"the zither",pos:"noun",gender:"f",
 note:"Feminine noun. A stringed instrument played flat on a surface.",
 example:"A: La cítara produce un sonido muy delicado.\nB: Es un instrumento poco común en España.",
 exampleSrc:"A: The zither produces a very delicate sound.\nB: It is an uncommon instrument in Spain.",
 funFact:"From Greek kithara, which also gave us 'guitarra'. The guitar is a distant cousin of the zither."},

{type:"teach",trg:"el anagrama",src:"the anagram",pos:"noun",gender:"m",
 note:"Masculine noun. A word formed by rearranging letters of another.",
 example:"A: 'Roma' es un anagrama de 'amor'.\nB: Me encantan los juegos de palabras.",
 exampleSrc:"A: 'Roma' is an anagram of 'amor'.\nB: I love word games.",
 funFact:"The Real Academia Española's logo is actually a monogram, though many call it an anagrama."},

{type:"teach",trg:"cronológico",src:"chronological",pos:"adj",gender:null,
 note:"Adjective. Arranged in order of time.\nFeminine: cronológica.",
 example:"A: Ordena los eventos en orden cronológico.\nB: Empiezo por la fecha más antigua.",
 exampleSrc:"A: Arrange the events in chronological order.\nB: I will start with the oldest date.",
 funFact:"From Greek chronos (time) + logos (study). Museums in Spain love 'recorrido cronológico'."},

{type:"teach",trg:"el cronómetro",src:"the stopwatch / chronometer",pos:"noun",gender:"m",
 note:"Masculine noun. A precise timekeeping device.",
 example:"A: El juez activó el cronómetro al inicio de la carrera.\nB: Cada centésima de segundo cuenta.",
 exampleSrc:"A: The judge activated the stopwatch at the start of the race.\nB: Every hundredth of a second counts.",
 funFact:"Compound: crono (time) + metro (measure). Spain's F1 coverage uses 'cronómetro' constantly."},

{type:"mc",q:"¿Cómo se llama el cantante de flamenco?",opts:["Cantaor","Cancionero","Castizo","Claroscuro"],ans:"Cantaor",hint:"A special flamenco term that drops a letter from the standard word for singer."},

{type:"teach",trg:"armonioso",src:"harmonious",pos:"adj",gender:null,
 note:"Adjective. Pleasing in arrangement, balanced.\nFeminine: armoniosa.",
 example:"A: La fachada del edificio es muy armoniosa.\nB: Los arquitectos cuidaron cada detalle.",
 exampleSrc:"A: The building's facade is very harmonious.\nB: The architects took care of every detail.",
 funFact:"From Greek harmonia. Gaudí's buildings look chaotic but are mathematically armoniosos."},

{type:"teach",trg:"la articulación",src:"the articulation / joint",pos:"noun",gender:"f",
 note:"Feminine noun. A body joint, or the clear expression of ideas.",
 example:"A: La articulación de la rodilla me duele al correr.\nB: Deberías ver a un traumatólogo.",
 exampleSrc:"A: My knee joint hurts when I run.\nB: You should see an orthopedic doctor.",
 funFact:"In linguistics, 'punto de articulación' describes where sounds are made in the mouth."},

{type:"teach",trg:"la coproducción",src:"the co-production",pos:"noun",gender:"f",
 note:"Feminine noun. A film or show made jointly by two or more companies.",
 example:"A: La película es una coproducción hispano-francesa.\nB: Se rodó en Barcelona y París.",
 exampleSrc:"A: The film is a Spanish-French co-production.\nB: It was shot in Barcelona and Paris.",
 funFact:"Spain and France are frequent co-production partners, supported by EU film funding."},

{type:"teach",trg:"el compacto",src:"the compact disc / compact",pos:"noun",gender:"m",
 note:"Masculine noun. A CD or something compact. Also adjective.",
 example:"A: ¿Todavía tienes compactos de música?\nB: Sí, una colección entera de los noventa.",
 exampleSrc:"A: Do you still have music CDs?\nB: Yes, a whole collection from the nineties.",
 funFact:"Spain's 'El Corte Inglés' music section was CD paradise in the 1990s and 2000s."},

{type:"teach",trg:"el artista",src:"the artist",pos:"noun",gender:"m",
 note:"Common gender noun: el artista / la artista.\nA creative professional in any medium.",
 example:"A: La artista expone sus obras en el Reina Sofía.\nB: Es una de las galerías más importantes del mundo.",
 exampleSrc:"A: The artist exhibits her works at the Reina Sofía.\nB: It is one of the most important galleries in the world.",
 funFact:"Spain has produced Picasso, Dalí, Miró, Goya, Velázquez. Few countries match that artista roster."},

{type:"fb",s:"La película es una {1} entre España y Francia.",a:["coproducción"],opts:["coproducción","articulación","armónica","banderilla"],hint:"A joint production between two or more countries or companies.",sSrc:"The film is a {1} between Spain and France."},

{type:"match",pairs:[{trg:"bailaor",src:"flamenco dancer"},{trg:"cantaor",src:"flamenco singer"},{trg:"collage",src:"collage"},{trg:"claroscuro",src:"chiaroscuro"},{trg:"artesanal",src:"artisanal"}]},

{type:"mc",q:"¿Qué es una banderilla como tapa?",opts:["Encurtidos ensartados en un palillo","Un trozo de pan con tomate","Un plato de arroz con mariscos","Una rebanada de jamón curado"],ans:"Encurtidos ensartados en un palillo",hint:"Think about pickled items skewered on a small stick, often served with beer."}
]};

export default LESSON_5;
