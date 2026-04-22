// B2 Gap Batch 8 Lesson 09 - Education & Academia
const LESSON_9 = {id:"esv2_b2g8_l9",title:"Educación y academia",icon:"🎓",xp:15,board:true,steps:[
{type:"intro",title:"Educación y academia",desc:"Build vocabulary for discussing the Spanish education system, academic fields, and professional training.",goals:["Learn 14 education and academic terms","Discuss the university system","Use formal academic register"]},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine noun. School subject focused on sports and fitness.\nAbbreviated: EF.",
 example:"A: ¿Te gustaba la educación física en el instituto?\nB: Sí, era mi asignatura favorita.",
 exampleSrc:"A: Did you like physical education in high school?\nB: Yes, it was my favorite subject.",
 funFact:"In Spain, PE is mandatory from primary school through the first year of bachillerato (ages 6-17)."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A fully grown person. Also an adjective.\nFeminine: la adulta.",
 example:"A: Los cursos de español para adultos empiezan en octubre.\nB: ¿Cuántas horas a la semana son?",
 exampleSrc:"A: Spanish courses for adults start in October.\nB: How many hours per week are they?",
 funFact:"Spain has an extensive 'educación de adultos' system, offering free basic education to adults over 18."},

{type:"teach",trg:"el curso abierto",src:"the open course",pos:"noun",gender:"m",
 note:"Masculine noun. A course available to anyone without prerequisites.\nAbierto = open.",
 example:"A: Me he apuntado a un curso abierto de inteligencia artificial.\nB: ¿Es gratuito? Me interesaría también.",
 exampleSrc:"A: I have signed up for an open course on artificial intelligence.\nB: Is it free? I would be interested too.",
 funFact:"Spanish universities offer MOOCs (cursos abiertos masivos en línea). The UNED is a pioneer in distance learning."},

{type:"teach",trg:"la lingüista",src:"the linguist (f)",pos:"noun",gender:"f",
 note:"Feminine noun. A specialist in language study.\nMasculine: el lingüista. Same form, different article.",
 example:"A: Mi profesora es una lingüista experta en dialectos andaluces.\nB: ¡Qué interesante! Me encantaría asistir a sus clases.",
 exampleSrc:"A: My professor is a linguist specializing in Andalusian dialects.\nB: How interesting! I would love to attend her classes.",
 funFact:"'Lingüista' is one of many Spanish nouns where only the article changes for gender: el/la lingüista."},

{type:"mc",q:"¿Qué es un curso abierto?",
 opts:["Un curso sin requisitos previos abierto a todos","Un curso solo para profesores","Un curso muy difícil","Un curso de puertas abiertas"],
 ans:"Un curso sin requisitos previos abierto a todos",
 hint:"'A...' means open. What kind of course is accessible to anyone?"},

{type:"teach",trg:"el léxico",src:"the lexicon / vocabulary",pos:"noun",gender:"m",
 note:"Masculine noun. The total set of words in a language or a person's vocabulary.\nFrom Greek lexikos.",
 example:"A: El léxico del español tiene influencias de muchas lenguas.\nB: Sí, del árabe, del latín, del griego.",
 exampleSrc:"A: The lexicon of Spanish has influences from many languages.\nB: Yes, from Arabic, Latin, Greek.",
 funFact:"The Spanish lexicon contains around 93,000 words in the RAE dictionary, but native speakers use about 20,000."},

{type:"teach",trg:"la ilustración",src:"the illustration / the Enlightenment",pos:"noun",gender:"f",
 note:"Feminine noun. A picture, or the 18th-century intellectual movement.\nContext determines meaning.",
 example:"A: La Ilustración transformó el pensamiento europeo.\nB: Sí, promovió la razón y la ciencia sobre la tradición.",
 exampleSrc:"A: The Enlightenment transformed European thought.\nB: Yes, it promoted reason and science over tradition.",
 funFact:"Spain's Ilustración was led by figures like Jovellanos. It had to contend with the Inquisition's resistance."},

{type:"teach",trg:"el infante",src:"the prince / child (formal)",pos:"noun",gender:"m",
 note:"Masculine noun. A royal prince, or a young child in formal register.\nFeminine: la infanta.",
 example:"A: La infanta asistió a la ceremonia de graduación.\nB: Estudió relaciones internacionales.",
 exampleSrc:"A: The princess attended the graduation ceremony.\nB: She studied international relations.",
 funFact:"In Spain, 'infante/a' specifically means a royal child who is NOT the heir to the throne."},

{type:"fb",s:"El {1} del español tiene más de cuatro mil palabras de origen árabe.",
 a:["léxico"],opts:["léxico","adulto","curso abierto","infante"],
 hint:"The total vocabulary of a language. A technical term from linguistics.",
 sSrc:"The Spanish {1} has more than four thousand words of Arabic origin."},

{type:"teach",trg:"la aspiración",src:"the aspiration / ambition",pos:"noun",gender:"f",
 note:"Feminine noun. A strong desire to achieve something, or breathing in.\nVerb: aspirar.",
 example:"A: Su mayor aspiración es estudiar medicina.\nB: Tiene las notas necesarias. Lo conseguirá.",
 exampleSrc:"A: Her greatest aspiration is to study medicine.\nB: She has the required grades. She will achieve it.",
 funFact:"In phonetics, 'aspiración' refers to the breathy pronunciation of 's' in southern Spanish dialects."},

{type:"teach",trg:"la interacción",src:"the interaction",pos:"noun",gender:"f",
 note:"Feminine noun. Mutual action between people or things.\nInter- (between) + acción.",
 example:"A: La interacción entre profesores y alumnos ha mejorado.\nB: Las clases son ahora mucho más participativas.",
 exampleSrc:"A: Interaction between teachers and students has improved.\nB: Classes are now much more participatory.",
 funFact:"Modern Spanish pedagogy emphasizes 'interacción' over one-way lecturing, following European standards."},

{type:"teach",trg:"maternal",src:"maternal",pos:"adj",gender:null,
 note:"Adjective. Related to a mother or motherhood.\nLengua maternal = mother tongue. Same form for both genders.",
 example:"A: El instinto maternal es un tema complejo.\nB: Sí, no es igual en todas las culturas.",
 exampleSrc:"A: Maternal instinct is a complex topic.\nB: Yes, it is not the same in all cultures.",
 funFact:"'Lengua materna' (mother tongue) is the standard term, but 'lengua maternal' is also grammatically correct."},

{type:"mc",q:"¿Qué fue la Ilustración?",
 opts:["Un estilo de escritura","Un movimiento intelectual del siglo XVIII","Un tipo de arte medieval","Una ley educativa"],
 ans:"Un movimiento intelectual del siglo XVIII",
 hint:"An intellectual movement that promoted reason and science. Think 18th century."},

{type:"teach",trg:"la medición",src:"the measurement",pos:"noun",gender:"f",
 note:"Feminine noun. The act of measuring something.\nVerb: medir. From Latin mensuratio.",
 example:"A: La medición del rendimiento académico es difícil.\nB: No todo se puede evaluar con exámenes.",
 exampleSrc:"A: Measuring academic performance is difficult.\nB: Not everything can be assessed with exams.",
 funFact:"'Medición' is more formal than 'medida'. Used in scientific and academic contexts."},

{type:"teach",trg:"mensual",src:"monthly",pos:"adj",gender:null,
 note:"Adjective. Happening once a month.\nMes (month) + -ual. Same form for both genders.",
 example:"A: Los informes mensuales se entregan el día uno.\nB: ¿También durante las vacaciones de verano?",
 exampleSrc:"A: Monthly reports are submitted on the first.\nB: Also during summer holidays?",
 funFact:"Related words: semanal (weekly), quincenal (biweekly), trimestral (quarterly), anual (yearly)."},

{type:"fb",s:"Su mayor {1} es convertirse en investigadora en neurociencia.",
 a:["aspiración"],opts:["aspiración","interacción","medición","ilustración"],
 hint:"A strong desire or ambition to achieve something in the future.",
 sSrc:"Her greatest {1} is to become a researcher in neuroscience."},

{type:"match",pairs:[
 {trg:"la educación física",src:"physical education"},
 {trg:"el léxico",src:"lexicon / vocabulary"},
 {trg:"la ilustración",src:"Enlightenment / illustration"},
 {trg:"mensual",src:"monthly"},
 {trg:"la medición",src:"measurement"}
]}
]};
export default LESSON_9;
