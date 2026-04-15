// B2 Gap Batch C Lesson 13 - Fashion & Personal Style
const LESSON_13 = {id:"esv2_b2gC_l13",title:"Moda y estilo personal",icon:"👗",xp:15,board:true,steps:[
{type:"intro",title:"Moda y estilo personal",desc:"Master vocabulary for fashion, personal style, grooming, and the Spanish fashion industry.",goals:["Learn 12 words about fashion and personal style","Discuss clothing, grooming, and appearance","Use fashion and lifestyle vocabulary"]},

{type:"teach",trg:"la patilla",src:"the sideburn / temple (of glasses)",pos:"noun",gender:"f",
 note:"Feminine noun. The hair growing in front of the ears.\nAlso the arm of eyeglasses.",
 example:"A: Se ha dejado las patillas largas al estilo de los setenta.\nB: Le quedan muy bien con ese corte de pelo.",
 exampleSrc:"A: He's grown long sideburns in the seventies style.\nB: They look great with that haircut.",
 funFact:"In Spain, patillas are associated with the 1970s look. The word also means a slice of watermelon."},

{type:"teach",trg:"la calza",src:"the stocking / hose / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. Historical: tight-fitting leg coverings.\nModern: a wedge placed under something.",
 example:"A: En el Siglo de Oro, los caballeros llevaban calzas de seda.\nB: Eran un símbolo de riqueza y estatus social.",
 exampleSrc:"A: In the Golden Age, gentlemen wore silk hose.\nB: They were a symbol of wealth and social status.",
 funFact:"The word 'calzado' (footwear) comes from the same root. Calzar means to put shoes on."},

{type:"teach",trg:"la perilla",src:"the goatee / small knob",pos:"noun",gender:"f",
 note:"Feminine noun. A small beard on the chin.\nAlso a door knob or small pear.",
 example:"A: Se ha recortado la perilla para la entrevista.\nB: Le da un aspecto más profesional.",
 exampleSrc:"A: He trimmed his goatee for the interview.\nB: It gives him a more professional look.",
 funFact:"From pera (pear), because the goatee shape resembles a small pear. Very common in 17th-century portraits."},

{type:"teach",trg:"el mostacho",src:"the moustache (thick)",pos:"noun",gender:"m",
 note:"Masculine noun. A large, prominent moustache.\nMore literary than 'bigote'.",
 example:"A: Salvador Dalí era famoso por su mostacho extravagante.\nB: Lo consideraba una obra de arte en sí mismo.",
 exampleSrc:"A: Salvador Dalí was famous for his extravagant moustache.\nB: He considered it a work of art in itself.",
 funFact:"Dalí's mostacho is so iconic that the Dalí Museum in Figueres has a section dedicated to it."},

{type:"mc",q:"¿Qué artista español era famoso por su mostacho extravagante?",opts:["Salvador Dalí","Pablo Picasso","Francisco Goya","Joan Miró"],ans:"Salvador Dalí",hint:"This surrealist painter from Catalonia treated his facial hair as a work of art."},

{type:"teach",trg:"el palacete",src:"the small palace / mansion",pos:"noun",gender:"m",
 note:"Masculine noun. A small but elegant palace.\nDiminutive of palacio.",
 example:"A: Viven en un palacete del siglo XIX en el centro.\nB: Lo restauraron hace cinco años, está precioso.",
 exampleSrc:"A: They live in a 19th-century mansion in the center.\nB: They restored it five years ago, it's beautiful.",
 funFact:"Madrid's Barrio de Salamanca has many palacetes built by the aristocracy in the late 1800s."},

{type:"teach",trg:"el parador",src:"the state-run hotel (historic building)",pos:"noun",gender:"m",
 note:"Masculine noun. A luxury hotel in a historic building.\nRun by Spain's Paradores network.",
 example:"A: Nos alojamos en un parador en un castillo medieval.\nB: La experiencia fue inolvidable, con vistas espectaculares.",
 exampleSrc:"A: We stayed at a parador in a medieval castle.\nB: The experience was unforgettable, with spectacular views.",
 funFact:"Spain's Paradores chain has 97 hotels in castles, monasteries, and palaces. It was founded in 1928."},

{type:"teach",trg:"la montera",src:"the bullfighter's hat / cap",pos:"noun",gender:"f",
 note:"Feminine noun. The black hat worn by matadors.\nAlso a hunter's cap.",
 example:"A: El torero lanzó su montera al público antes de la faena.\nB: Es una tradición que simboliza dedicar la lidia.",
 exampleSrc:"A: The bullfighter threw his hat to the audience before the fight.\nB: It's a tradition that symbolizes dedicating the fight.",
 funFact:"The montera's shape has evolved over centuries. Today's version dates from the 19th century."},

{type:"fb",s:"Nos alojamos en un {1} dentro de un castillo medieval.",a:["parador"],opts:["parador","palacete","mostacho","montera"],hint:"A state-run luxury hotel housed in a historic building like a castle or monastery.",sSrc:"We stayed at a {1} inside a medieval castle."},

{type:"teach",trg:"el pepinillo",src:"the gherkin / small pickle",pos:"noun",gender:"m",
 note:"Masculine noun. A small pickled cucumber.\nDiminutive of pepino (cucumber).",
 example:"A: ¿Quieres pepinillos con la hamburguesa?\nB: Sí, me encantan los pepinillos en vinagre.",
 exampleSrc:"A: Do you want gherkins with the hamburger?\nB: Yes, I love pickled gherkins.",
 funFact:"Pepinillos are a staple of Spanish tapas bars, often served alongside olives and other pickled vegetables."},

{type:"teach",trg:"la paleta",src:"the palette / trowel / ice lolly",pos:"noun",gender:"f",
 note:"Feminine noun. A flat implement or frozen treat.\nFrom pala (shovel/blade).",
 example:"A: En verano los niños comen paletas heladas en la playa.\nB: Las de limón son las más refrescantes.",
 exampleSrc:"A: In summer children eat ice lollies on the beach.\nB: The lemon ones are the most refreshing.",
 funFact:"In Mexico, 'paleta' always means ice lolly. In Spain, 'polo' is more common for the frozen treat."},

{type:"teach",trg:"el paje",src:"the page (attendant) / nativity figure",pos:"noun",gender:"m",
 note:"Masculine noun. A young attendant or servant.\nAlso a figure in the Nativity procession.",
 example:"A: Los pajes reales recogen las cartas de los niños antes de Reyes.\nB: Es una de las tradiciones más bonitas de la Navidad española.",
 exampleSrc:"A: The royal pages collect children's letters before Epiphany.\nB: It's one of the most beautiful traditions of Spanish Christmas.",
 funFact:"In Spain, the Paje Real visits shopping centers before January 6th so children can give their wish lists."},

{type:"mc",q:"¿Qué prenda lanza el torero al público?",opts:["La montera","La calza","La perilla","La patilla"],ans:"La montera",hint:"The distinctive black hat that the matador wears during a bullfight."},

{type:"fb",s:"Se recortó la {1} para tener un aspecto más profesional.",a:["perilla"],opts:["perilla","patilla","montera","paleta"],hint:"A small pointed beard grown only on the chin, shaped like a small pear.",sSrc:"He trimmed his {1} to have a more professional look."},

{type:"match",pairs:[{trg:"patilla",src:"sideburn"},{trg:"palacete",src:"mansion"},{trg:"parador",src:"state-run hotel"},{trg:"paje",src:"page / attendant"},{trg:"pepinillo",src:"gherkin"}]},

{type:"fb",s:"Viven en un {1} del siglo XIX en el centro de Madrid.",a:["palacete"],opts:["palacete","parador","paje","montera"],hint:"A small but elegant palace, typically a 19th-century urban mansion.",sSrc:"They live in a 19th-century {1} in the center of Madrid."}
]};

export default LESSON_13;
