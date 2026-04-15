// B2 Gap Batch B Lesson 03 — Health & the Human Body
const LESSON_3 = {id:"esv2_b2gB_l3",title:"El cuerpo y la salud",icon:"🩺",xp:15,board:true,steps:[
{type:"intro",title:"El cuerpo y la salud",desc:"Learn vocabulary about the human body, physical conditions, and health-related topics at an advanced level.",goals:["Learn 12 words about the body and health","Discuss physical conditions and medical topics","Use precise anatomical and health vocabulary"]},

{type:"teach",trg:"la nuca",src:"the nape (of the neck)",pos:"noun",gender:"f",
 note:"Feminine noun. The back part of the neck.\nFrom Arabic nukha (spinal marrow).",
 example:"A: Me duele mucho la nuca después de trabajar todo el día.\nB: Deberías ajustar la altura de tu pantalla.",
 exampleSrc:"A: My nape hurts a lot after working all day.\nB: You should adjust the height of your screen.",
 funFact:"One of many Spanish words from Arabic. The original nukha referred to the spinal cord."},

{type:"teach",trg:"el muslo",src:"the thigh",pos:"noun",gender:"m",
 note:"Masculine noun. The upper leg between hip and knee.\nAlso used for poultry cuts.",
 example:"A: Me he lesionado el muslo jugando al fútbol.\nB: ¿Te has puesto hielo?",
 exampleSrc:"A: I injured my thigh playing football.\nB: Did you put ice on it?",
 funFact:"In cooking, 'muslo de pollo' (chicken thigh) is Spain's most popular poultry cut."},

{type:"teach",trg:"la obesidad",src:"the obesity",pos:"noun",gender:"f",
 note:"Feminine noun. A medical condition of excess weight.\nFrom Latin obesus (having eaten until fat).",
 example:"A: La obesidad es un problema creciente en España.\nB: La dieta mediterránea puede ayudar a prevenirla.",
 exampleSrc:"A: Obesity is a growing problem in Spain.\nB: The Mediterranean diet can help prevent it.",
 funFact:"Despite the Mediterranean diet tradition, Spain's obesity rate has tripled since the 1970s."},

{type:"teach",trg:"la neumonía",src:"the pneumonia",pos:"noun",gender:"f",
 note:"Feminine noun. A serious lung infection.\nFrom Greek pneumon (lung).",
 example:"A: Mi abuelo fue hospitalizado por una neumonía.\nB: Espero que se recupere pronto.",
 exampleSrc:"A: My grandfather was hospitalized for pneumonia.\nB: I hope he recovers soon.",
 funFact:"The Spanish spelling drops the initial 'p' from the Greek pneumonia, unlike English."},

{type:"mc",q:"¿Dónde está la nuca?",
 opts:["En la parte posterior del cuello","En la parte delantera del pecho","En el costado del cuerpo","En la parte inferior de la espalda"],
 ans:"En la parte posterior del cuello",
 hint:"Think about the area at the back of your head where it meets the neck."},

{type:"teach",trg:"el estiramiento",src:"the stretching / stretch",pos:"noun",gender:"m",
 note:"Masculine noun. From estirar (to stretch).\nCommon in sports and physiotherapy.",
 example:"A: Haz estiramientos antes de correr.\nB: Ya lo sé, la última vez no los hice y me lesioné.",
 exampleSrc:"A: Do stretches before running.\nB: I know, last time I didn't and I got injured.",
 funFact:"Spanish physiotherapists recommend 'estiramientos dinámicos' before exercise and 'estáticos' after."},

{type:"teach",trg:"la irritación",src:"the irritation (physical)",pos:"noun",gender:"f",
 note:"Feminine noun. A reaction causing redness or discomfort.\nAlso used figuratively for annoyance.",
 example:"A: Tengo una irritación en la piel por la alergia.\nB: Deberías usar una crema calmante.",
 exampleSrc:"A: I have a skin irritation from the allergy.\nB: You should use a soothing cream.",
 funFact:"In medical Spanish, 'irritación' is purely physical. For emotional irritation, 'irritabilidad' is preferred."},

{type:"teach",trg:"la irritabilidad",src:"the irritability",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to become easily annoyed.\nOften a medical symptom.",
 example:"A: La falta de sueño aumenta la irritabilidad.\nB: Por eso estoy de tan mal humor hoy.",
 exampleSrc:"A: Lack of sleep increases irritability.\nB: That's why I'm in such a bad mood today.",
 funFact:"In Spanish medical contexts, irritabilidad is listed as a symptom of anxiety, depression, and thyroid disorders."},

{type:"fb",s:"El médico recomendó {1} diarios para prevenir lesiones de espalda.",
 a:["estiramientos"],opts:["estiramientos","irritaciones","neumonías","muslos"],
 hint:"Gentle exercises where you extend your muscles to increase flexibility.",
 sSrc:"The doctor recommended daily {1} to prevent back injuries."},

{type:"teach",trg:"la oftalmología",src:"the ophthalmology",pos:"noun",gender:"f",
 note:"Feminine noun. The medical specialty for eyes.\nFrom Greek ophthalmos (eye).",
 example:"A: Tengo cita en oftalmología la semana que viene.\nB: ¿Te van a revisar la vista?",
 exampleSrc:"A: I have an ophthalmology appointment next week.\nB: Are they going to check your eyesight?",
 funFact:"Spain has some of Europe's leading ophthalmology centers, especially the Barraquer Clinic in Barcelona."},

{type:"teach",trg:"la invalidez",src:"the disability / invalidity",pos:"noun",gender:"f",
 note:"Feminine noun. A condition preventing normal function.\nLegal term for disability benefits.",
 example:"A: Recibe una pensión por invalidez permanente.\nB: Tuvo un accidente laboral hace cinco años.",
 exampleSrc:"A: He receives a permanent disability pension.\nB: He had a workplace accident five years ago.",
 funFact:"In Spain, 'invalidez' is the legal term, while 'discapacidad' is preferred in everyday language."},

{type:"teach",trg:"el glúteo",src:"the gluteus / buttock muscle",pos:"noun",gender:"m",
 note:"Masculine noun. Usually plural: los glúteos.\nFrom Greek gloutos (buttock).",
 example:"A: Estos ejercicios fortalecen los glúteos.\nB: Son muy importantes para la postura.",
 exampleSrc:"A: These exercises strengthen the glutes.\nB: They are very important for posture.",
 funFact:"Spanish fitness trainers often say 'activa los glúteos' (activate your glutes) as a key cue."},

{type:"mc",q:"¿Qué especialidad médica trata los problemas de los ojos?",
 opts:["La oftalmología","La neumonía","La irritabilidad","La invalidez"],
 ans:"La oftalmología",
 hint:"Think about the Greek root for 'eye' and the medical suffix for a branch of medicine."},

{type:"match",pairs:[
 {trg:"nuca",src:"nape of the neck"},
 {trg:"muslo",src:"thigh"},
 {trg:"glúteo",src:"gluteus muscle"},
 {trg:"estiramiento",src:"stretching"},
 {trg:"oftalmología",src:"ophthalmology"}
]},

{type:"fb",s:"La {1} puede ser un síntoma del estrés crónico.",
 a:["irritabilidad"],opts:["irritabilidad","obesidad","nuca","oftalmología"],
 hint:"The tendency to become easily annoyed or upset, often linked to stress or fatigue.",
 sSrc:"{1} can be a symptom of chronic stress."},

{type:"fb",s:"La {1} es una infección grave que afecta a los pulmones.",
 a:["neumonía"],opts:["neumonía","obesidad","irritación","invalidez"],
 hint:"A serious respiratory illness where the lungs become inflamed and fill with fluid.",
 sSrc:"{1} is a serious infection that affects the lungs."},

]};
export default LESSON_3;
