// B2 Gap Batch 6 Lesson 03 - Health & Body
const LESSON_3 = {id:"esv2_b2g6_l3",title:"Salud y cuerpo",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Salud y cuerpo",desc:"Learn medical and body-related vocabulary for discussing health issues, treatments, and well-being.",goals:["Learn 15 health and body terms","Discuss medical conditions and treatments","Use health vocabulary in formal contexts"]},

{type:"teach",trg:"la hernia",src:"the hernia",pos:"noun",gender:"f",
 note:"Feminine noun. A medical condition where tissue\npushes through a weak spot.",
 example:"A: El médico dice que tengo una hernia discal.\nB: ¿Necesitas operarte?",
 exampleSrc:"A: The doctor says I have a disc hernia.\nB: Do you need surgery?",
 funFact:"From Latin hernia. 'Hernia discal' (disc hernia) is one of the most common back problems in Spain."},

{type:"teach",trg:"la hormona",src:"the hormone",pos:"noun",gender:"f",
 note:"Feminine noun. A chemical messenger in the body.\nFrom Greek hormon (to set in motion).",
 example:"A: Las hormonas influyen mucho en el estado de ánimo.\nB: Sí, especialmente durante la adolescencia.",
 exampleSrc:"A: Hormones greatly influence mood.\nB: Yes, especially during adolescence.",
 funFact:"The word was coined in 1905 by British physiologist Ernest Starling from Greek horman (to excite)."},

{type:"teach",trg:"la insulina",src:"insulin",pos:"noun",gender:"f",
 note:"Feminine noun. The hormone that regulates blood sugar.\nFrom Latin insula (island).",
 example:"A: Mi abuelo necesita inyectarse insulina cada día.\nB: La diabetes requiere mucho control.",
 exampleSrc:"A: My grandfather needs to inject insulin every day.\nB: Diabetes requires a lot of management.",
 funFact:"Named after the Islets of Langerhans in the pancreas. 'Insula' means island in Latin."},

{type:"teach",trg:"la dermis",src:"the dermis",pos:"noun",gender:"f",
 note:"Feminine noun. The thick layer of skin below\nthe epidermis. From Greek derma.",
 example:"A: El tatuaje llega hasta la dermis.\nB: Por eso es permanente.",
 exampleSrc:"A: The tattoo reaches the dermis.\nB: That is why it is permanent.",
 funFact:"Greek derma (skin) gives us 'dermatólogo' (dermatologist) and 'dermatitis'."},

{type:"mc",q:"¿Qué es la insulina?",opts:["Una hormona que regula el azúcar en sangre","Un tipo de hernia","Una capa de la piel","Un medicamento para el dolor"],ans:"Una hormona que regula el azúcar en sangre",hint:"Think about diabetes and blood sugar regulation."},

{type:"teach",trg:"el glúteo",src:"the gluteus / buttock muscle",pos:"noun",gender:"m",
 note:"Masculine noun. The large muscle in the buttock.\nFrom Greek gloutos.",
 example:"A: Me duelen los glúteos después del ejercicio.\nB: Es normal, hicimos muchas sentadillas.",
 exampleSrc:"A: My glutes hurt after the exercise.\nB: It is normal, we did many squats.",
 funFact:"In everyday Spanish, 'glúteos' sounds medical. Informally people say 'trasero' or 'culo'."},

{type:"teach",trg:"la conjuntivitis",src:"conjunctivitis",pos:"noun",gender:"f",
 note:"Feminine noun. Inflammation of the eye membrane.\nConjuntiva (conjunctiva) + -itis.",
 example:"A: Tengo los ojos muy rojos, creo que es conjuntivitis.\nB: Deberías ir al oftalmólogo.",
 exampleSrc:"A: My eyes are very red, I think it is conjunctivitis.\nB: You should go to the ophthalmologist.",
 funFact:"Known colloquially in Spain as 'ojo rojo' (red eye). Very common in children."},

{type:"teach",trg:"el estiramiento",src:"the stretch / stretching",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stretching muscles.\nFrom estirar (to stretch).",
 example:"A: ¿Haces estiramientos antes de correr?\nB: Siempre, son esenciales para evitar lesiones.",
 exampleSrc:"A: Do you do stretching before running?\nB: Always, they are essential to avoid injuries.",
 funFact:"From Latin extirare. The verb 'estirar la pata' (to stretch the leg) is slang for dying."},

{type:"fb",s:"El médico recetó una crema para la {1} de la piel.",a:["dermis"],opts:["dermis","hernia","conjuntivitis","hormona"],hint:"The deep layer of skin beneath the surface.",sSrc:"The doctor prescribed a cream for the {1} of the skin."},

{type:"teach",trg:"la incubadora",src:"the incubator",pos:"noun",gender:"f",
 note:"Feminine noun. Equipment for premature babies,\nor a startup support center.",
 example:"A: El bebé prematuro pasó tres semanas en la incubadora.\nB: Ahora está en casa y crece muy bien.",
 exampleSrc:"A: The premature baby spent three weeks in the incubator.\nB: Now he is at home and growing very well.",
 funFact:"Also used for business: 'incubadora de empresas' means a startup incubator."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of taking in or soaking up.\nFrom Latin absorbere.",
 example:"A: La absorción de nutrientes ocurre en el intestino.\nB: Por eso la salud digestiva es tan importante.",
 exampleSrc:"A: Nutrient absorption happens in the intestine.\nB: That is why digestive health is so important.",
 funFact:"Also used in business: 'absorción de una empresa' means a corporate takeover."},

{type:"teach",trg:"la ingesta",src:"the intake / ingestion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of consuming food or drink.\nFrom Latin ingestus.",
 example:"A: Debes controlar la ingesta de sal.\nB: Tienes razón, como demasiados alimentos procesados.",
 exampleSrc:"A: You should control your salt intake.\nB: You are right, I eat too many processed foods.",
 funFact:"'Ingesta calórica' (caloric intake) is a key term in Spanish nutrition and dietetics."},

{type:"mc",q:"¿Qué son los estiramientos?",opts:["Ejercicios para flexibilizar los músculos","Hormonas del cuerpo","Capas de la piel","Inflamaciones oculares"],ans:"Ejercicios para flexibilizar los músculos",hint:"What you do before exercise to prepare your muscles."},

{type:"match",pairs:[
  {trg:"hernia",src:"hernia"},
  {trg:"hormona",src:"hormone"},
  {trg:"insulina",src:"insulin"},
  {trg:"incubadora",src:"incubator"},
  {trg:"ingesta",src:"intake"}
]},

{type:"fb",s:"Es importante controlar la {1} de azúcar en la dieta.",a:["ingesta"],opts:["ingesta","absorción","incubadora","insulina"],hint:"The amount of food or substances you consume.",sSrc:"It is important to control the {1} of sugar in the diet."}
]};
export default LESSON_3;
