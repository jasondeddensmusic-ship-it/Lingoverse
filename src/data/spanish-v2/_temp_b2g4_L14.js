// B2 Gap Batch 4 Lesson 14 - History & Culture
const LESSON_14 = {id:"esv2_b2g4_l14",title:"Historia y cultura",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Historia y cultura",desc:"Master vocabulary for discussing historical periods, cultural movements, and heritage.",goals:["Learn 18 history and culture terms","Discuss historical periods with precision","Use cultural and artistic vocabulary"]},

{type:"teach",trg:"el arabismo",src:"the Arabism / Arabic loanword",pos:"noun",gender:"m",
 note:"Masculine noun. A word borrowed from Arabic into Spanish.\nSpanish has over 4,000 arabismos.",
 example:"A: 'Almohada' es un arabismo muy conocido.\nB: Hay miles de palabras de origen árabe en español.",
 exampleSrc:"A: 'Almohada' (pillow) is a well-known Arabism.\nB: There are thousands of words of Arabic origin in Spanish.",
 funFact:"Spanish has the most Arabic loanwords of any Romance language, from 800 years of Moorish presence."},

{type:"teach",trg:"el americanismo",src:"the Americanism (Latin American word)",pos:"noun",gender:"m",
 note:"Masculine noun. A word or expression from Latin American Spanish.\nPlural: americanismos.",
 example:"A: 'Computadora' es un americanismo. En España decimos 'ordenador'.\nB: Las diferencias son fascinantes.",
 exampleSrc:"A: 'Computadora' is an Americanism. In Spain we say 'ordenador'.\nB: The differences are fascinating.",
 funFact:"The RAE dictionary marks words as americanismos to show they are primarily used in the Americas."},

{type:"teach",trg:"el apocalipsis",src:"the apocalypse",pos:"noun",gender:"m",
 note:"Masculine noun. A catastrophic event or the biblical Revelation.\nNote: masculine despite -is ending.",
 example:"A: La novela describe un apocalipsis climático devastador.\nB: Es una advertencia sobre el cambio climático.",
 exampleSrc:"A: The novel describes a devastating climate apocalypse.\nB: It is a warning about climate change.",
 funFact:"In Spanish, 'apocalipsis' is masculine, unlike most -is words which tend to be feminine."},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. A political ideology.\nAdjective: comunista.",
 example:"A: El comunismo tuvo gran influencia en la política española del siglo XX.\nB: La Guerra Civil dividió al país ideológicamente.",
 exampleSrc:"A: Communism had great influence on 20th-century Spanish politics.\nB: The Civil War divided the country ideologically.",
 funFact:"Spain's Communist Party, PCE, played a key role in the transition to democracy after Franco."},

{type:"teach",trg:"la evangelización",src:"the evangelization",pos:"noun",gender:"f",
 note:"Feminine noun. The spread of Christian faith.\nFrom evangelizar (to evangelize).",
 example:"A: La evangelización de América fue un proceso complejo.\nB: Mezcló imposición y sincretismo cultural.",
 exampleSrc:"A: The evangelization of the Americas was a complex process.\nB: It mixed imposition and cultural syncretism.",
 funFact:"Spanish missionaries created some of the first dictionaries of indigenous languages during evangelización."},

{type:"mc",q:"Un 'arabismo' en español es:",opts:["Una palabra de origen árabe","Un tipo de arquitectura","Un movimiento político","Una danza tradicional"],ans:"Una palabra de origen árabe",hint:"Think about the linguistic legacy that Arabic left in the Spanish language."},

{type:"teach",trg:"el cancionero",src:"the songbook / song collection",pos:"noun",gender:"m",
 note:"Masculine noun. A collection of poems or songs.\nFrom canción (song).",
 example:"A: El Cancionero de Palacio es una joya de la música medieval.\nB: Contiene canciones de los siglos XV y XVI.",
 exampleSrc:"A: The Palace Songbook is a jewel of medieval music.\nB: It contains songs from the 15th and 16th centuries.",
 funFact:"Medieval 'cancioneros' are crucial sources for studying early Spanish poetry and music."},

{type:"teach",trg:"el criado",src:"the servant",pos:"noun",gender:"m",
 note:"Masculine noun. A domestic servant.\nFeminine: la criada. From criar (to raise).",
 example:"A: En las obras de teatro clásico, el criado suele ser el personaje más astuto.\nB: Como Lazarillo de Tormes.",
 exampleSrc:"A: In classical plays, the servant is usually the cleverest character.\nB: Like Lazarillo de Tormes.",
 funFact:"The 'criado pícaro' (rogue servant) is a classic figure in Spanish Golden Age literature."},

{type:"teach",trg:"la dinámica",src:"the dynamic / dynamics",pos:"noun",gender:"f",
 note:"Feminine noun. The pattern of change or forces at work.\nAlso adjective: dinámico.",
 example:"A: La dinámica de grupo mejora la productividad.\nB: Trabajar en equipo genera mejores ideas.",
 exampleSrc:"A: Group dynamics improve productivity.\nB: Working as a team generates better ideas.",
 funFact:"'Dinámica de grupo' is a core concept in Spanish business culture and education."},

{type:"teach",trg:"la autocrítica",src:"the self-criticism",pos:"noun",gender:"f",
 note:"Feminine noun. Critical examination of one's own actions.\nFrom auto- (self) + crítica.",
 example:"A: La autocrítica es esencial para mejorar como profesional.\nB: Hay que reconocer los propios errores.",
 exampleSrc:"A: Self-criticism is essential to improve as a professional.\nB: One must acknowledge one's own mistakes.",
 funFact:"In Spanish politics, 'autocrítica' is often demanded of parties after an election defeat."},

{type:"fb",s:"'Almohada' y 'aceite' son {1} muy comunes en español.",a:["arabismos"],opts:["arabismos","americanismos","cancioneros","apocalipsis"],hint:"Words that entered Spanish from the Arabic language during the Moorish period.",sSrc:"'Almohada' and 'aceite' are very common {1} in Spanish."},

{type:"teach",trg:"denotar",src:"to denote / to indicate",pos:"verb",gender:null,
 note:"Regular -ar verb. To indicate or signify.\nMore formal than indicar.",
 example:"A: Su tono de voz denota una gran frustración.\nB: Lleva semanas sin encontrar trabajo.",
 exampleSrc:"A: His tone of voice denotes great frustration.\nB: He has been weeks without finding a job.",
 funFact:"In linguistics, 'denotar' (denotation) is the literal meaning, vs 'connotar' (connotation)."},

{type:"teach",trg:"denostar",src:"to revile / to insult gravely",pos:"verb",gender:null,
 note:"Stem-changing verb (o>ue): denuesto.\nVery formal. To publicly criticize harshly.",
 example:"A: El artículo denostaba la gestión del gobierno.\nB: El periodista no se guardó ninguna crítica.",
 exampleSrc:"A: The article reviled the government's management.\nB: The journalist held back no criticism.",
 funFact:"'Denostar' is quite literary. Everyday Spanish would use 'criticar duramente' or 'insultar'."},

{type:"teach",trg:"el escribiente",src:"the scribe / clerk",pos:"noun",gender:"m",
 note:"Masculine noun. A person who copies documents by hand.\nFrom escribir (to write).",
 example:"A: Bartleby el escribiente es un cuento clásico de Melville.\nB: El personaje se niega a trabajar.",
 exampleSrc:"A: Bartleby the Scrivener is a classic tale by Melville.\nB: The character refuses to work.",
 funFact:"Before the printing press, 'escribientes' were essential. Spain's famous ones worked in monasteries."},

{type:"teach",trg:"la eucaristía",src:"the Eucharist",pos:"noun",gender:"f",
 note:"Feminine noun. The Christian sacrament of communion.\nFrom Greek eucharistia (thanksgiving).",
 example:"A: La eucaristía es el sacramento central del catolicismo.\nB: Se celebra en cada misa.",
 exampleSrc:"A: The Eucharist is the central sacrament of Catholicism.\nB: It is celebrated at every Mass.",
 funFact:"Spain's Corpus Christi celebrations, honoring the Eucharist, feature elaborate street processions."},

{type:"mc",q:"El personaje del 'criado' en el teatro clásico español suele ser:",opts:["Astuto e ingenioso","Torpe y lento","Malvado y cruel","Rico y poderoso"],ans:"Astuto e ingenioso",hint:"Think about the clever servant archetype in Spanish Golden Age plays."},

{type:"teach",trg:"la décima",src:"the tenth / a type of verse",pos:"noun",gender:"f",
 note:"Feminine noun. A tenth part or a 10-line poetic form.\nPoetry: décima espinela (10 octosyllabic lines).",
 example:"A: La décima es una forma poética muy popular en el Caribe.\nB: Los repentistas cubanos la improvisan con maestría.",
 exampleSrc:"A: The décima is a very popular poetic form in the Caribbean.\nB: Cuban repentistas improvise them masterfully.",
 funFact:"UNESCO declared the 'décima' an Intangible Cultural Heritage. It spread from Spain to all of Latin America."},

{type:"fb",s:"Su expresión {1} una profunda preocupación por la situación.",a:["denota"],opts:["denota","denuesta","emana","deviene"],hint:"To indicate or signal something, often used for visible signs of an emotion.",sSrc:"His expression {1} a deep concern about the situation."},

{type:"match",pairs:[{trg:"arabismo",src:"Arabic loanword"},{trg:"cancionero",src:"songbook"},{trg:"criado",src:"servant"},{trg:"autocrítica",src:"self-criticism"},{trg:"décima",src:"tenth / verse form"}]}
]};

export default LESSON_14;
