// B2 Gap Batch B Lesson 17 — Medicine & Wellness
const LESSON_17 = {id:"esv2_b2gB_l17",title:"Medicina y bienestar",icon:"💊",xp:15,board:true,steps:[
{type:"intro",title:"Medicina y bienestar",desc:"Learn advanced medical vocabulary for discussing health conditions, treatments, and wellness in Spanish.",goals:["Learn 12 words about medicine and wellness","Discuss medical conditions and treatments","Use formal healthcare vocabulary"]},

{type:"teach",trg:"la cólera",src:"the anger / the cholera (disease)",pos:"noun",gender:"f",
 note:"Feminine noun. Two meanings:\n1. Intense anger (la cólera).\n2. The disease cholera (el cólera, masculine).",
 example:"A: La cólera del público fue evidente después del discurso.\nB: Muchos se levantaron y se fueron.",
 exampleSrc:"A: The anger of the audience was evident after the speech.\nB: Many stood up and left.",
 funFact:"Gender changes meaning: 'la cólera' = anger, 'el cólera' = cholera (the disease). Both from Greek khole (bile)."},

{type:"teach",trg:"la neurofisiología",src:"the neurophysiology",pos:"noun",gender:"f",
 note:"Feminine noun. The study of nervous system function.\nA medical and scientific specialty.",
 example:"A: La neurofisiología estudia cómo funcionan las neuronas.\nB: Es fundamental para entender el cerebro.",
 exampleSrc:"A: Neurophysiology studies how neurons work.\nB: It is fundamental for understanding the brain.",
 funFact:"In Spanish hospitals, 'neurofisiología clínica' is a separate department that performs EEGs and nerve tests."},

{type:"teach",trg:"el excremento",src:"the excrement / feces",pos:"noun",gender:"m",
 note:"Masculine noun. Waste matter expelled from the body.\nFormal/medical register.",
 example:"A: El análisis de excrementos puede detectar infecciones.\nB: Es una prueba diagnóstica habitual.",
 exampleSrc:"A: Stool analysis can detect infections.\nB: It is a routine diagnostic test.",
 funFact:"The formal 'excremento' is used in medical settings. Colloquial alternatives are much more common in daily speech."},

{type:"teach",trg:"el abastos",src:"the provisions / food supply",pos:"noun",gender:"m",
 note:"Masculine noun, usually plural.\nMercado de abastos = food market.",
 example:"A: El mercado de abastos tiene productos frescos todos los días.\nB: Los pescadores traen el pescado directamente.",
 exampleSrc:"A: The food market has fresh products every day.\nB: The fishermen bring the fish directly.",
 funFact:"Spain's 'mercados de abastos' are being modernized into gourmet food halls, like Madrid's Mercado de San Miguel."},

{type:"mc",q:"¿Cómo cambia el significado de 'cólera' según el género?",
 opts:["La cólera = ira, el cólera = enfermedad","La cólera = enfermedad, el cólera = ira","No cambia de significado","La cólera = río, el cólera = montaña"],
 ans:"La cólera = ira, el cólera = enfermedad",
 hint:"One gender refers to an emotion, the other to a deadly infectious disease."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / fitting out",pos:"noun",gender:"m",
 note:"Masculine noun. The process of preparing or equipping.\nAire acondicionado = air conditioning.",
 example:"A: El acondicionamiento del gimnasio costó cincuenta mil euros.\nB: Ahora tiene máquinas de última generación.",
 exampleSrc:"A: The fitting out of the gym cost fifty thousand euros.\nB: Now it has state-of-the-art machines.",
 funFact:"'Acondicionamiento fisico' means physical conditioning/fitness, commonly used in sports and health contexts."},

{type:"teach",trg:"el nudismo",src:"the nudism / naturism",pos:"noun",gender:"m",
 note:"Masculine noun. The practice of being nude in social settings.\nLegal in Spain in designated areas.",
 example:"A: El nudismo es legal en muchas playas de España.\nB: Hay zonas específicas para los naturistas.",
 exampleSrc:"A: Nudism is legal on many beaches in Spain.\nB: There are specific areas for naturists.",
 funFact:"Spain is one of Europe's most tolerant countries for nudism, with over 400 naturist-friendly beaches."},

{type:"teach",trg:"la mousse",src:"the mousse",pos:"noun",gender:"f",
 note:"Feminine noun. A light, creamy dessert or hair product.\nFrom French mousse (foam).",
 example:"A: La mousse de chocolate de este restaurante es famosa.\nB: Es ligera y muy cremosa.",
 exampleSrc:"A: The chocolate mousse at this restaurant is famous.\nB: It is light and very creamy.",
 funFact:"Spanish kept the French pronunciation and spelling. The word entered Spanish cuisine in the 19th century."},

{type:"fb",s:"El {1} del local incluyó nueva iluminación y ventilación.",
 a:["acondicionamiento"],opts:["acondicionamiento","excremento","nudismo","abastos"],
 hint:"The process of equipping and preparing a space with the necessary facilities.",
 sSrc:"The {1} of the premises included new lighting and ventilation."},

{type:"teach",trg:"el monopatín",src:"the skateboard / scooter",pos:"noun",gender:"m",
 note:"Masculine noun. A board with wheels for riding.\nFrom mono (single) + patín (skate).",
 example:"A: Los jóvenes practican trucos con el monopatín en el parque.\nB: Es un deporte urbano muy popular.",
 exampleSrc:"A: Young people practice tricks with their skateboards in the park.\nB: It is a very popular urban sport.",
 funFact:"In Spain, 'monopatín' usually means skateboard, while 'patinete' is used for kick scooters."},

{type:"teach",trg:"la montañista",src:"the (female) mountaineer / mountain climber",pos:"noun",gender:"f",
 note:"Feminine noun. Masculine: el montañista.\nSomeone who climbs mountains as sport.",
 example:"A: La montañista escaló el Aneto en tiempo récord.\nB: Es la cumbre más alta de los Pirineos.",
 exampleSrc:"A: The mountaineer climbed Aneto in record time.\nB: It is the highest peak in the Pyrenees.",
 funFact:"Spain's Picos de Europa and Sierra Nevada offer world-class montañismo (mountaineering)."},

{type:"teach",trg:"el motorista",src:"the motorcyclist / biker",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la motorista.\nA person who rides a motorcycle.",
 example:"A: El motorista llevaba un casco rojo muy llamativo.\nB: Es obligatorio llevar casco en España.",
 exampleSrc:"A: The motorcyclist wore a very striking red helmet.\nB: Wearing a helmet is mandatory in Spain.",
 funFact:"Spain is a major motorcycle market. The MotoGP has deep roots in Spanish culture and many Spanish champions."},

{type:"mc",q:"¿Qué es un mercado de abastos?",
 opts:["Un mercado de alimentos frescos","Un centro comercial de ropa","Una tienda de electrónica","Un almacén de construcción"],
 ans:"Un mercado de alimentos frescos",
 hint:"Think about a traditional market where you can buy fresh fish, meat, vegetables, and fruit."},

{type:"match",pairs:[
 {trg:"cólera (fem.)",src:"anger"},
 {trg:"acondicionamiento",src:"conditioning / fitting out"},
 {trg:"monopatín",src:"skateboard"},
 {trg:"motorista",src:"motorcyclist"},
 {trg:"mousse",src:"mousse"}
]},

{type:"fb",s:"La {1} española coronó la cima del Everest en 1998.",
 a:["montañista"],opts:["montañista","motorista","mousse","cólera"],
 hint:"A woman who climbs mountains professionally or as a serious sport.",
 sSrc:"The Spanish {1} summited Everest in 1998."},

{type:"fb",s:"El {1} debe llevar casco y chaleco reflectante por seguridad.",
 a:["motorista"],opts:["motorista","montañista","monopatín","leñador"],
 hint:"A person who rides a two-wheeled motor vehicle on the road.",
 sSrc:"The {1} must wear a helmet and reflective vest for safety."},

]};
export default LESSON_17;
