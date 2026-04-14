// B2 Gap Batch 8 Lesson 05 - Health & The Human Body
const LESSON_5 = {id:"esv2_b2g8_l5",title:"Salud y cuerpo humano",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Salud y cuerpo humano",desc:"Learn advanced vocabulary about health conditions, body parts, and medical topics.",goals:["Learn 14 health and body terms","Discuss medical conditions formally","Understand anatomical vocabulary"]},

{type:"teach",trg:"la conjuntivitis",src:"the conjunctivitis",pos:"noun",gender:"f",
 note:"Feminine noun. Inflammation of the conjunctiva (eye membrane).\nVery contagious condition.",
 example:"A: Tengo los ojos rojos e irritados.\nB: Parece conjuntivitis. Deberías ir al médico.",
 exampleSrc:"A: My eyes are red and irritated.\nB: It looks like conjunctivitis. You should go to the doctor.",
 funFact:"In Spain, pharmacists can recommend basic eye drops, but conjunctivitis usually requires a prescription."},

{type:"teach",trg:"la dermis",src:"the dermis",pos:"noun",gender:"f",
 note:"Feminine noun. The inner layer of skin beneath the epidermis.\nFrom Greek derma (skin).",
 example:"A: Los tatuajes depositan la tinta en la dermis.\nB: Por eso son permanentes y difíciles de eliminar.",
 exampleSrc:"A: Tattoos deposit ink in the dermis.\nB: That is why they are permanent and difficult to remove.",
 funFact:"The dermis contains blood vessels, nerve endings, and hair follicles. It is thicker than the epidermis."},

{type:"teach",trg:"el glúteo",src:"the gluteus / buttock",pos:"noun",gender:"m",
 note:"Masculine noun. The muscle of the buttock region.\nPlural: los glúteos. From Greek gloutos.",
 example:"A: Me duelen los glúteos después del entrenamiento.\nB: Es normal. Los ejercicios de sentadillas son intensos.",
 exampleSrc:"A: My glutes hurt after the workout.\nB: That is normal. Squat exercises are intense.",
 funFact:"The gluteus maximus is the largest muscle in the human body. In fitness Spanish, 'glúteos' is very common."},

{type:"teach",trg:"lumbar",src:"lumbar / lower back",pos:"adj",gender:null,
 note:"Adjective. Related to the lower back region.\nDolor lumbar = lower back pain.",
 example:"A: Tengo un dolor lumbar terrible desde ayer.\nB: Quizá necesitas una almohada mejor para dormir.",
 exampleSrc:"A: I have had terrible lower back pain since yesterday.\nB: Perhaps you need a better pillow for sleeping.",
 funFact:"Lower back pain is the leading cause of workplace absence in Spain. 80% of adults experience it."},

{type:"mc",q:"¿Qué parte del cuerpo afecta el dolor lumbar?",
 opts:["La zona baja de la espalda","Las rodillas","Los hombros","El cuello"],
 ans:"La zona baja de la espalda",
 hint:"Lumbar refers to the lower region of the spine, near the waist."},

{type:"teach",trg:"el estiramiento",src:"the stretching",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stretching muscles.\nVerb: estirar (to stretch).",
 example:"A: ¿Haces estiramientos antes de correr?\nB: Siempre. Es fundamental para evitar lesiones.",
 exampleSrc:"A: Do you do stretches before running?\nB: Always. It is fundamental to avoid injuries.",
 funFact:"The verb 'estirar' also means to stretch money: 'estirar el presupuesto' = to stretch the budget."},

{type:"teach",trg:"la irritación",src:"the irritation",pos:"noun",gender:"f",
 note:"Feminine noun. Physical inflammation, or emotional annoyance.\nVerb: irritar.",
 example:"A: Tengo una irritación en la piel por la alergia.\nB: Prueba con una crema hidratante sin perfume.",
 exampleSrc:"A: I have skin irritation from the allergy.\nB: Try a fragrance-free moisturizing cream.",
 funFact:"'Irritación' works for both medical and emotional contexts, just like 'irritation' in English."},

{type:"teach",trg:"la irritabilidad",src:"the irritability",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to become easily annoyed.\nRelated to irritar (to irritate).",
 example:"A: La falta de sueño causa irritabilidad y problemas de concentración.\nB: Por eso los médicos recomiendan ocho horas.",
 exampleSrc:"A: Lack of sleep causes irritability and concentration problems.\nB: That is why doctors recommend eight hours.",
 funFact:"The suffix -bilidad creates nouns from adjectives: irritable > irritabilidad, vulnerable > vulnerabilidad."},

{type:"fb",s:"Los {1} antes del ejercicio ayudan a prevenir lesiones musculares.",
 a:["estiramientos"],opts:["estiramientos","glúteos","indicios","mandatos"],
 hint:"The warm-up activity where you elongate your muscles before physical exercise.",
 sSrc:"Doing {1} before exercise helps prevent muscle injuries."},

{type:"teach",trg:"la cólera",src:"the cholera / rage",pos:"noun",gender:"f",
 note:"Feminine noun with two meanings: the disease cholera, or intense anger.\nContext clarifies.",
 example:"A: La cólera fue una epidemia devastadora en el siglo XIX.\nB: Sí, mató a miles de personas en toda Europa.",
 exampleSrc:"A: Cholera was a devastating epidemic in the 19th century.\nB: Yes, it killed thousands of people across Europe.",
 funFact:"When meaning anger, 'cólera' is poetic and literary. 'Montar en cólera' means to fly into a rage."},

{type:"teach",trg:"el lunar",src:"the mole / beauty mark",pos:"noun",gender:"m",
 note:"Masculine noun. A dark spot on the skin.\nAlso the adjective for 'lunar' (related to the moon).",
 example:"A: Deberías hacerte revisar ese lunar por un dermatólogo.\nB: Tienes razón, ha cambiado de forma últimamente.",
 exampleSrc:"A: You should have that mole checked by a dermatologist.\nB: You are right, it has changed shape recently.",
 funFact:"The double meaning of 'lunar' comes from the old belief that moles appeared under the moon's influence."},

{type:"teach",trg:"la melena",src:"the long hair / mane",pos:"noun",gender:"f",
 note:"Feminine noun. Long flowing hair on a person, or a lion's mane.\nAlso used informally.",
 example:"A: Me encanta tu melena. ¿Cómo la cuidas?\nB: Con productos naturales y sin secador.",
 exampleSrc:"A: I love your long hair. How do you take care of it?\nB: With natural products and no hair dryer.",
 funFact:"'Llevar melena' means to have long hair. In the 60s-70s, men with melena were called 'melenudos'."},

{type:"mc",q:"¿Qué deberías hacer si un lunar cambia de forma?",
 opts:["Ir al dermatólogo","Cubrirlo con maquillaje","Ignorarlo completamente","Hacer estiramientos"],
 ans:"Ir al dermatólogo",
 hint:"Changes in skin marks should be evaluated by a skin specialist."},

{type:"teach",trg:"la desnudez",src:"the nudity / nakedness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unclothed.\nFrom desnudo (naked) + -ez.",
 example:"A: La desnudez en el arte siempre ha sido un tema controvertido.\nB: En España hay bastante tolerancia al respecto.",
 exampleSrc:"A: Nudity in art has always been a controversial topic.\nB: In Spain there is quite a lot of tolerance about it.",
 funFact:"Spanish beaches often have designated nudist sections. Spain is one of the most nudism-friendly countries."},

{type:"teach",trg:"la fisonomía",src:"the physiognomy / appearance",pos:"noun",gender:"f",
 note:"Feminine noun. The features of a person's face, or the character of a place.\nAlso: fisionomía.",
 example:"A: La fisonomía de este barrio ha cambiado mucho en diez años.\nB: Sí, antes era industrial y ahora es residencial.",
 exampleSrc:"A: The appearance of this neighborhood has changed a lot in ten years.\nB: Yes, it used to be industrial and now it is residential.",
 funFact:"Both 'fisonomía' and 'fisionomía' are accepted by the RAE. The shorter form is more common."},

{type:"fb",s:"La {1} de la piel puede ser causada por alergias o productos químicos.",
 a:["irritación"],opts:["irritación","irritabilidad","desnudez","fisonomía"],
 hint:"Physical inflammation of the skin, not an emotional state.",
 sSrc:"Skin {1} can be caused by allergies or chemical products."},

{type:"match",pairs:[
 {trg:"la conjuntivitis",src:"conjunctivitis"},
 {trg:"lumbar",src:"lower back"},
 {trg:"el lunar",src:"mole / beauty mark"},
 {trg:"la melena",src:"long hair / mane"},
 {trg:"el estiramiento",src:"stretching"}
]},

{type:"mc",q:"¿Cuál de estas palabras describe una enfermedad de los ojos?",
 opts:["Conjuntivitis","Irritabilidad","Fisonomía","Desnudez"],
 ans:"Conjuntivitis",
 hint:"An eye condition that causes redness and inflammation of the membrane."}
]};
export default LESSON_5;
