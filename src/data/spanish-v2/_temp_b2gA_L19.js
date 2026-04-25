// Lesson 19. Tradiciones y costumbres
const LESSON_19 = {id:"esv2_b2gA_l19", title:"Tradiciones y costumbres", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Tradiciones y costumbres", desc:"Explore vocabulary for discussing traditions, folklore, and cultural practices in Spain.", goals:["Learn 15 tradition and culture words","Discuss customs and ceremonies","Use cultural vocabulary precisely"]},

{type:"teach", trg:"la baba", src:"drool / slobber", pos:"noun", gender:"f",
 note:"Saliva that flows from the mouth.\n'Caérsele la baba' = to be smitten.",
 example:"A: Al abuelo se le cae la baba con sus nietos.\nB: Los adora con todo su corazón.",
 exampleSrc:"A: Grandpa is completely smitten with his grandchildren.\nB: He adores them with all his heart.",
 funFact:"'Caérsele la baba' is one of Spanish's most charming idioms: to drool with adoration."},

{type:"teach", trg:"el chanquete", src:"the transparent goby (small fish)", pos:"noun", gender:"m",
 note:"A tiny transparent fish from the Mediterranean.\nProtected species since 1988.",
 example:"A: Los chanquetes fritos eran un plato típico malagueño.\nB: Ahora están protegidos y no se pueden pescar.",
 exampleSrc:"A: Fried chanquetes were a typical Malaga dish.\nB: Now they're protected and can't be fished.",
 funFact:"Made famous by the TV character Chanquete in 'Verano Azul' (1981), beloved in Spain."},

{type:"teach", trg:"el chato", src:"the small glass of wine / snub-nosed person", pos:"noun", gender:"m",
 note:"A short, wide glass for wine. Also: someone with a flat nose.\nAlso term of endearment.",
 example:"A: ¿Nos tomamos un chato de vino en el bar?\nB: Sí, invito yo al primer chato.",
 exampleSrc:"A: Shall we have a small glass of wine at the bar?\nB: Yes, the first one's on me.",
 funFact:"Calling someone 'chato/a' is a common term of endearment in Spain, like 'sweetie'."},

{type:"teach", trg:"el comendador", src:"the commander (of a military order)", pos:"noun", gender:"m",
 note:"A knight holding a commendation in a military order.\nHistorical title.",
 example:"A: El comendador de Fuenteovejuna es uno de los villanos más famosos del teatro español.\nB: Lope de Vega lo inmortalizó.",
 exampleSrc:"A: The commander of Fuenteovejuna is one of the most famous villains in Spanish theater.\nB: Lope de Vega immortalized him.",
 funFact:"Fuenteovejuna (1619) by Lope de Vega tells of a town that revolts against a tyrannical comendador."},

{type:"teach", trg:"la guardia civil", src:"the Civil Guard (Spanish police force)", pos:"noun", gender:"f",
 note:"Spain's national gendarmerie, rural and highway police.\nFounded in 1844.",
 example:"A: La guardia civil patrulla las carreteras y los pueblos.\nB: Es un cuerpo con casi doscientos años de historia.",
 exampleSrc:"A: The Civil Guard patrols highways and villages.\nB: It's a force with nearly two hundred years of history.",
 funFact:"The iconic 'tricornio' (three-cornered hat) was their trademark until recently."},

{type:"mc", q:"¿Qué significa 'caérsele la baba' con alguien?", opts:["Estar completamente encantado o enamorado","Tener mucha hambre","Estar muy enfadado","Estar muy cansado"], ans:"Estar completamente encantado o enamorado",
 hint:"Picture someone so smitten they're practically drooling with adoration."},

{type:"fb", s:"¿Nos tomamos un {1} de tinto en esa terraza?", a:["chato"], opts:["chato","chanquete","comendador","guardia"],
 hint:"This small, wide glass is the typical way to serve wine in Spanish bars.",
 sSrc:"Shall we have a small {1} of red wine on that terrace?"},

{type:"teach", trg:"el gitano", src:"the Roma / Romani person", pos:"noun", gender:"m",
 note:"A member of the Roma community. Feminine: la gitana.\nAlso adjective.",
 example:"A: La cultura gitana ha enriquecido enormemente la música española.\nB: El flamenco tiene profundas raíces gitanas.",
 exampleSrc:"A: Roma culture has enormously enriched Spanish music.\nB: Flamenco has deep Roma roots.",
 funFact:"Spain has the largest Roma population in Western Europe, around 750,000 people."},

{type:"teach", trg:"la cólera", src:"cholera / rage", pos:"noun", gender:"f",
 note:"Both the disease and intense anger.\nWith 'el': el cólera = cholera (disease).",
 example:"A: Las epidemias de cólera devastaron Europa en el siglo XIX.\nB: La mejora del agua potable las eliminó.",
 exampleSrc:"A: Cholera epidemics devastated Europe in the 19th century.\nB: Improvement of drinking water eliminated them.",
 funFact:"Gender matters: 'el cólera' = the disease; 'la cólera' = rage, fury."},

{type:"teach", trg:"el acondicionamiento", src:"conditioning / fitting out", pos:"noun", gender:"m",
 note:"Preparing or adapting something for a purpose.\nFrom acondicionar (to condition).",
 example:"A: El acondicionamiento del local costó más de lo previsto.\nB: Pero ahora está perfecto para abrir la tienda.",
 exampleSrc:"A: The fitting out of the premises cost more than expected.\nB: But now it's perfect for opening the shop.",
 funFact:"'Aire acondicionado' (air conditioning) is derived from this same root."},

{type:"mc", q:"¿Cuál es la diferencia entre 'el cólera' y 'la cólera'?", opts:["La cólera es la forma antigua","El cólera = la enfermedad; la cólera = la ira","Son sinónimos","El cólera es más grave"], ans:"El cólera = la enfermedad; la cólera = la ira",
 hint:"The gender of the article changes the entire meaning. Disease vs. emotion."},

{type:"fb", s:"El flamenco tiene profundas raíces en la cultura {1}.", a:["gitana"], opts:["gitana","normanda","nórdica","nipona"],
 hint:"This community's musical traditions are at the heart of flamenco.",
 sSrc:"Flamenco has deep roots in {1} culture."},

{type:"teach", trg:"el hada madrina", src:"the fairy godmother", pos:"noun", gender:"m",
 note:"Uses 'el' despite being feminine (stressed a-).\nMadrina = godmother.",
 example:"A: El hada madrina de Cenicienta convirtió la calabaza en carroza.\nB: Es uno de los personajes más queridos de los cuentos.",
 exampleSrc:"A: Cinderella's fairy godmother turned the pumpkin into a carriage.\nB: She's one of the most beloved characters in fairy tales.",
 funFact:"Like 'el agua' and 'el asta', feminine nouns starting with stressed a- take 'el'."},

{type:"teach", trg:"la cola de caballo", src:"horsetail (plant)", pos:"noun", gender:"f",
 note:"An ancient plant used in herbal medicine.\nAlso: a ponytail hairstyle.",
 example:"A: La cola de caballo se usa como planta medicinal desde la antigüedad.\nB: Es buena para los riñones, dicen.",
 exampleSrc:"A: Horsetail has been used as a medicinal plant since antiquity.\nB: It's good for the kidneys, they say.",
 funFact:"Horsetail is one of the oldest plants on Earth, dating back 350 million years."},

{type:"teach", trg:"el bolívar", src:"the bolivar (Venezuelan currency)", pos:"noun", gender:"m",
 note:"The currency of Venezuela.\nNamed after Simón Bolívar, the liberator.",
 example:"A: El bolívar ha sufrido una inflación extrema en los últimos años.\nB: Venezuela ha tenido que redenominar su moneda varias veces.",
 exampleSrc:"A: The bolivar has suffered extreme inflation in recent years.\nB: Venezuela has had to redenominate its currency several times.",
 funFact:"Named after Simón Bolívar (1783-1830), who liberated six South American nations."},

{type:"match", pairs:[
 {trg:"la baba", src:"drool"},
 {trg:"el chato", src:"small wine glass"},
 {trg:"el comendador", src:"commander"},
 {trg:"la guardia civil", src:"Civil Guard"},
 {trg:"el gitano", src:"Roma person"}
]},

{type:"fb", s:"El {1} del gimnasio incluyó nuevos equipos y duchas.", a:["acondicionamiento"], opts:["acondicionamiento","bolívar","comendador","chanquete"],
 hint:"This noun means the process of fitting out or adapting a space for use.",
 sSrc:"The {1} of the gym included new equipment and showers."},

{type:"mc", q:"¿Quién fue Simón Bolívar?", opts:["Un famoso pintor venezolano","Un explorador portugués","El libertador de varios países sudamericanos","Un rey español del siglo XVIII"], ans:"El libertador de varios países sudamericanos",
 hint:"The Venezuelan currency is named after this iconic independence hero."},

{type:"drag_fill", s:"El {1} de Fuenteovejuna es un villano del teatro de {2}.", blanks:{"1":"comendador","2":"Lope de Vega"}, pool:["comendador","Lope de Vega","Cervantes","chanquete"],
 hint:"This historical figure from a famous play by a Golden Age dramatist."},

{type:"fb", s:"Los {1} fritos ya no se pueden servir porque es una especie protegida.", a:["chanquetes"], opts:["chanquetes","chatos","bolívares","gitanos"],
 hint:"This tiny transparent Mediterranean fish has been protected since 1988.",
 sSrc:"Fried {1} can no longer be served because it's a protected species."},

{type:"match", pairs:[
 {trg:"la cólera", src:"rage / cholera"},
 {trg:"el acondicionamiento", src:"fitting out"},
 {trg:"el hada madrina", src:"fairy godmother"},
 {trg:"el bolívar", src:"bolivar (currency)"},
 {trg:"el chanquete", src:"transparent goby"}
]}
]};
export default LESSON_19;
