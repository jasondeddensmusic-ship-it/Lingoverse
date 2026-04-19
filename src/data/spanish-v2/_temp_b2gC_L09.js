// B2 Gap Batch C Lesson 09 - Geography & Cultural Identity
const LESSON_9 = {id:"esv2_b2gC_l9",title:"Geografía e identidad cultural",icon:"🗺️",xp:15,board:true,steps:[
{type:"intro",title:"Geografía e identidad cultural",desc:"Learn vocabulary about geographic regions, cultural identity, and the diverse peoples of the Spanish-speaking world.",goals:["Learn 12 words about geography and cultural identity","Discuss regional identity and heritage","Use geographic and demographic vocabulary"]},

{type:"teach",trg:"el patriota",src:"the patriot",pos:"noun",gender:"m",
 note:"Masculine noun. A person who loves their country.\nFeminine: la patriota (same form).",
 example:"A: Se consideraba un patriota que luchaba por su pueblo.\nB: Su discurso emocionó a todos los presentes.",
 exampleSrc:"A: He considered himself a patriot fighting for his people.\nB: His speech moved everyone present.",
 funFact:"From Greek patrios (of one's father). In Spain, 'patriota' was used by guerrillas fighting Napoleon."},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. A political ideology of collective ownership.\nFrom Latin communis (common).",
 example:"A: El comunismo tuvo un papel importante en la Guerra Civil.\nB: El Partido Comunista sigue existiendo hoy en España.",
 exampleSrc:"A: Communism played an important role in the Civil War.\nB: The Communist Party still exists today in Spain.",
 funFact:"Spain's Communist Party (PCE) was legalized in 1977, a key moment in the transition to democracy."},

{type:"teach",trg:"la lengua indígena",src:"the indigenous language",pos:"noun",gender:"f",
 note:"Feminine compound noun. A native language of a region.\nKey concept in Latin American identity.",
 example:"A: En América Latina se hablan cientos de lenguas indígenas.\nB: El quechua y el guaraní tienen millones de hablantes.",
 exampleSrc:"A: In Latin America, hundreds of indigenous languages are spoken.\nB: Quechua and Guarani have millions of speakers.",
 funFact:"Mexico alone has 68 recognized indigenous languages. Paraguay is officially bilingual in Spanish and Guarani."},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine compound noun. School subject focused on sport and fitness.\nAbbreviated as EF.",
 example:"A: La educación física es obligatoria en todos los colegios.\nB: Los niños necesitan al menos una hora diaria de ejercicio.",
 exampleSrc:"A: Physical education is compulsory in all schools.\nB: Children need at least one hour of daily exercise.",
 funFact:"In Spain, PE teachers must have a university degree in Ciencias de la Actividad Física y del Deporte."},

{type:"mc",q:"¿Qué son el quechua y el guaraní?",opts:["Lenguas indígenas de América Latina","Deportes tradicionales","Comidas típicas","Ciudades de España"],ans:"Lenguas indígenas de América Latina",hint:"These are native languages spoken by millions in South America."},

{type:"teach",trg:"el medio de comunicación",src:"the media outlet / means of communication",pos:"noun",gender:"m",
 note:"Masculine compound noun. A channel for spreading information.\nPlural: los medios de comunicación.",
 example:"A: Los medios de comunicación cubren la noticia las 24 horas.\nB: La televisión y las redes sociales compiten por la audiencia.",
 exampleSrc:"A: The media outlets cover the news 24 hours a day.\nB: Television and social media compete for the audience.",
 funFact:"Spain has over 100 daily newspapers. El País and El Mundo are the two largest national dailies."},

{type:"teach",trg:"la evangelización",src:"the evangelization",pos:"noun",gender:"f",
 note:"Feminine noun. The spread of Christian gospel.\nKey historical concept in Latin American colonization.",
 example:"A: La evangelización de América fue paralela a la conquista.\nB: Los frailes aprendieron lenguas indígenas para predicar.",
 exampleSrc:"A: The evangelization of the Americas was parallel to the conquest.\nB: The friars learned indigenous languages to preach.",
 funFact:"Franciscan and Dominican friars created some of the first dictionaries of indigenous American languages."},

{type:"teach",trg:"la pasarela",src:"the catwalk / footbridge / gangway",pos:"noun",gender:"f",
 note:"Feminine noun. A narrow walkway or fashion runway.\nFrom pasar (to pass).",
 example:"A: Las modelos desfilaron por la pasarela con la nueva colección.\nB: El diseñador recibió una gran ovación al final.",
 exampleSrc:"A: The models walked the catwalk with the new collection.\nB: The designer received a great ovation at the end.",
 funFact:"Madrid Fashion Week (MBFWM) is Spain's top pasarela event, held twice a year at IFEMA."},

{type:"fb",s:"Los {1} cubren la noticia las veinticuatro horas del día.",a:["medios de comunicación"],opts:["medios de comunicación","lenguas indígenas","patriotas","educaciones físicas"],hint:"The channels through which news and information reach the public: TV, newspapers, radio, internet.",sSrc:"The {1} cover the news twenty-four hours a day."},

{type:"teach",trg:"la montañista",src:"the mountaineer (female)",pos:"noun",gender:"f",
 note:"Feminine noun. A person who climbs mountains.\nMale form: el montañista.",
 example:"A: La montañista llegó a la cima del Everest sin oxígeno.\nB: Es la primera española en conseguirlo.",
 exampleSrc:"A: The mountaineer reached the top of Everest without oxygen.\nB: She's the first Spanish woman to achieve it.",
 funFact:"Spain has a strong mountaineering tradition. The Pyrenees and Sierra Nevada are popular training grounds."},

{type:"teach",trg:"la peineta",src:"the ornamental comb",pos:"noun",gender:"f",
 note:"Feminine noun. A large decorative hair comb.\nIconic in traditional Spanish dress.",
 example:"A: La peineta y la mantilla son típicas de las fiestas españolas.\nB: Se usan especialmente en Semana Santa y ferias.",
 exampleSrc:"A: The ornamental comb and mantilla are typical of Spanish festivals.\nB: They are used especially during Holy Week and fairs.",
 funFact:"The peineta holds the mantilla (lace veil) in place. Together they are Spain's most iconic female accessory."},

{type:"teach",trg:"el moño",src:"the bun (hairstyle) / topknot",pos:"noun",gender:"m",
 note:"Masculine noun. Hair gathered in a knot.\nAlso colloquial: estar hasta el moño (to be fed up).",
 example:"A: Se recogió el pelo en un moño elegante para la gala.\nB: Le quedaba perfecto con los pendientes largos.",
 exampleSrc:"A: She put her hair up in an elegant bun for the gala.\nB: It looked perfect with the long earrings.",
 funFact:"In bullfighting, the matador's moño (coleta) is ceremonially cut when they retire."},

{type:"mc",q:"¿Qué complemento suele sujetar la mantilla española?",opts:["La peineta","El moño","La pasarela","El pedernal"],ans:"La peineta",hint:"A large decorative comb placed in the hair to hold lace fabric in place."},

{type:"fb",s:"La {1} coronó la cima del Everest sin oxígeno suplementario.",a:["montañista"],opts:["montañista","patriota","peineta","pasarela"],hint:"A person who climbs mountains as a sport or profession.",sSrc:"The {1} summited the top of Everest without supplemental oxygen."},

{type:"match",pairs:[{trg:"patriota",src:"patriot"},{trg:"lengua indígena",src:"indigenous language"},{trg:"pasarela",src:"catwalk"},{trg:"peineta",src:"ornamental comb"},{trg:"moño",src:"hair bun"}]}
]};

export default LESSON_9;
