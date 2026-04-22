// B2 Gap Batch D Lesson 14 - Emotions & Psychology
const LESSON_14 = {id:"esv2_b2gD_l14",title:"Emociones y psicología",icon:"\uD83E\uDDE0",xp:15,board:true,steps:[
{type:"intro",title:"Emociones y psicología",desc:"Explore vocabulary for complex emotions, psychological states, and interpersonal dynamics at an advanced level.",goals:["Learn 10 emotion and psychology vocabulary items","Describe complex emotional states precisely","Discuss psychological concepts in Spanish"]},

{type:"teach",trg:"la paranoia",src:"the paranoia",pos:"noun",gender:"f",
 note:"Feminine noun. Irrational suspicion and distrust.\nClinical and colloquial usage.",
 example:"A: Su paranoia le impedía confiar en nadie.\nB: Debería hablar con un profesional sobre ello.",
 exampleSrc:"A: His paranoia prevented him from trusting anyone.\nB: He should talk to a professional about it.",
 funFact:"In colloquial Spanish, 'paranoico' is used loosely for anyone overly suspicious. Clinical paranoia is a distinct condition."},

{type:"teach",trg:"la irritación",src:"the irritation / annoyance",pos:"noun",gender:"f",
 note:"Feminine noun. State of being annoyed or inflamed.\nBoth emotional and physical (skin irritation).",
 example:"A: No pudo ocultar su irritación cuando le interrumpieron otra vez.\nB: Es comprensible, llevaba hablando solo dos minutos.",
 exampleSrc:"A: He couldn't hide his irritation when they interrupted him again.\nB: It's understandable, he had only been speaking for two minutes.",
 funFact:"'Irritación' in medicine refers to inflammation (irritación cutánea = skin irritation). The emotional and physical meanings share the same Latin root."},

{type:"teach",trg:"la impureza",src:"the impurity",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being impure or contaminated.\nFrom im- (not) + pureza (purity).",
 example:"A: El filtro elimina las impurezas del agua.\nB: Por eso el agua muy limpia tiene mejor sabor.",
 exampleSrc:"A: The filter removes impurities from the water.\nB: That is why very clean water tastes better.",
 funFact:"In medieval Spain, 'limpieza de sangre' (blood purity) certificates were required to prove lack of Jewish or Moorish ancestry."},

{type:"teach",trg:"el infierno",src:"the hell / inferno",pos:"noun",gender:"m",
 note:"Masculine noun. The underworld or a terrible situation.\nFrom Latin infernum (below).",
 example:"A: El tráfico en hora punta es un auténtico infierno.\nB: Por eso prefiero ir en metro siempre que puedo.",
 exampleSrc:"A: Rush hour traffic is absolute hell.\nB: That's why I prefer to take the metro whenever I can.",
 funFact:"In Dante's Divine Comedy, translated widely in Spain, the 'Infierno' has nine circles. 'Irse al infierno' means to fail completely."},

{type:"mc",q:"'La irritación' puede referirse a...",opts:["Una emoción negativa o una inflamación física","Solo un sentimiento de tristeza","Un tipo de medicamento","Una técnica de relajación"],ans:"Una emoción negativa o una inflamación física",hint:"This word has dual meaning: emotional annoyance AND physical inflammation of tissue."},

{type:"teach",trg:"el parpadeo",src:"the blinking / flickering",pos:"noun",gender:"m",
 note:"Masculine noun. The act of blinking eyes or flickering light.\nFrom parpadear (to blink).",
 example:"A: El parpadeo constante de la luz me estaba poniendo nervioso.\nB: Creo que la bombilla está a punto de fundirse.",
 exampleSrc:"A: The constant flickering of the light was making me nervous.\nB: I think the bulb is about to burn out.",
 funFact:"Humans blink about 15-20 times per minute. In Spanish, 'sin pestañear' (without blinking) means without hesitation."},

{type:"teach",trg:"el parto",src:"the childbirth / delivery",pos:"noun",gender:"m",
 note:"Masculine noun. The process of giving birth.\nParto natural: natural birth. Sala de partos: delivery room.",
 example:"A: El parto fue largo pero sin complicaciones.\nB: Madre e hijo están en perfecto estado.",
 exampleSrc:"A: The delivery was long but without complications.\nB: Mother and baby are in perfect condition.",
 funFact:"'Estar de parto' (to be in labor) is also used figuratively for being about to finish a difficult creative project."},

{type:"fb",s:"Su {1} le impedía confiar en sus compañeros de trabajo.",a:["paranoia"],opts:["paranoia","irritación","impureza","parpadeo"],hint:"An irrational and persistent distrust of others, a psychological condition.",sSrc:"His {1} prevented him from trusting his coworkers."},

{type:"teach",trg:"la cólera",src:"the cholera / anger (archaic)",pos:"noun",gender:"f",
 note:"Feminine noun. A dangerous intestinal disease.\nAlso literary: intense fury (el cólera = anger).",
 example:"A: La epidemia de cólera devastó la ciudad en el siglo XIX.\nB: La falta de agua potable fue la causa principal.",
 exampleSrc:"A: The cholera epidemic devastated the city in the 19th century.\nB: The lack of clean drinking water was the main cause.",
 funFact:"García Márquez's novel 'El amor en los tiempos del cólera' plays on both meanings: the disease and passionate fury."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A fully grown person.\nFeminine: la adulta. Adjective: adulto/a.",
 example:"A: Los adultos a menudo olvidan lo difícil que es ser adolescente.\nB: Tienes razón, tendríamos que ser más comprensivos.",
 exampleSrc:"A: Adults often forget how hard it is to be a teenager.\nB: You're right, we should be more understanding.",
 funFact:"'Edad adulta' (adulthood) legally starts at 18 in Spain. 'Adulto' also means 'for adults' in content ratings."},

{type:"teach",trg:"pecuario",src:"relating to livestock",pos:"adj",gender:null,
 note:"Adjective. Related to cattle and livestock farming.\nFrom Latin pecus (cattle). Sector pecuario.",
 example:"A: El sector pecuario representa el veinte por ciento de la economía regional.\nB: La ganadería extensiva es la más sostenible.",
 exampleSrc:"A: The livestock sector represents twenty percent of the regional economy.\nB: Extensive farming is the most sustainable.",
 funFact:"The word 'pecuniario' (financial) shares the same Latin root: in ancient Rome, cattle were a form of currency."},

{type:"match",pairs:[
 {trg:"paranoia",src:"paranoia"},
 {trg:"irritación",src:"irritation"},
 {trg:"infierno",src:"hell"},
 {trg:"parto",src:"childbirth"},
 {trg:"cólera",src:"cholera / anger"}
]},

{type:"mc",q:"El tráfico en hora punta es descrito como un...",opts:["parto","infierno","paraíso","parpadeo"],ans:"infierno",hint:"A place or situation of extreme suffering, chaos, and frustration."},

{type:"fb",s:"El {1} fue largo pero todo salió bien para la madre y el bebé.",a:["parto"],opts:["parto","infierno","parpadeo","cólera"],hint:"The medical process of giving birth to a baby.",sSrc:"The {1} was long but everything went well for the mother and baby."},

{type:"mc",q:"'El amor en los tiempos del cólera' juega con...",opts:["Un brote de gripe","La vida de un farmacéutico","El doble significado: enfermedad y furia","La historia de un médico"],ans:"El doble significado: enfermedad y furia",hint:"García Márquez used a word that means both a disease and intense passion/anger."}
]};
export default LESSON_14;
