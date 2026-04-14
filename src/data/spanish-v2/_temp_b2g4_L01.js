// B2 Gap Batch 4 Lesson 01 - Health & Body
const LESSON_1 = {id:"esv2_b2g4_l1",title:"Cuerpo y salud avanzada",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Cuerpo y salud avanzada",desc:"Master advanced vocabulary for health conditions, body parts, and medical concepts at B2 level.",goals:["Learn 15 health and body vocabulary words","Discuss medical conditions with precision","Use specialized nouns confidently"]},

{type:"teach",trg:"la extremidad",src:"the extremity / limb",pos:"noun",gender:"f",
 note:"Feminine noun. Refers to arms or legs.\nPlural: las extremidades.",
 example:"A: El paciente tiene dolor en las extremidades inferiores.\nB: Vamos a hacer unas radiografías.",
 exampleSrc:"A: The patient has pain in the lower extremities.\nB: We are going to take some X-rays.",
 funFact:"From Latin extremitas. In medical Spanish, upper limbs are 'extremidades superiores'."},

{type:"teach",trg:"el esguince",src:"the sprain",pos:"noun",gender:"m",
 note:"Masculine noun. An injury to a ligament.\nCommon: esguince de tobillo (ankle sprain).",
 example:"A: Me torcí el tobillo jugando al fútbol.\nB: Parece un esguince. Necesitas hielo y reposo.",
 exampleSrc:"A: I twisted my ankle playing football.\nB: It looks like a sprain. You need ice and rest.",
 funFact:"From Old French esguincer (to swerve). One of the most common sports injuries in Spain."},

{type:"teach",trg:"el estiramiento",src:"the stretching",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stretching muscles.\nFrom estirar (to stretch).",
 example:"A: ¿Haces estiramiento antes de correr?\nB: Siempre. Es fundamental para evitar lesiones.",
 exampleSrc:"A: Do you stretch before running?\nB: Always. It is essential to avoid injuries.",
 funFact:"Spanish physiotherapists recommend 'estiramientos dinámicos' before exercise, not static ones."},

{type:"teach",trg:"el estreñimiento",src:"the constipation",pos:"noun",gender:"m",
 note:"Masculine noun. Difficulty passing stools.\nFalse friend: not 'estreñir' but 'constipar' means catching a cold.",
 example:"A: Llevo días con estreñimiento.\nB: Deberías tomar más fibra y agua.",
 exampleSrc:"A: I have had constipation for days.\nB: You should consume more fiber and water.",
 funFact:"A classic false friend: 'constipado' in Spanish means 'having a cold', not constipated."},

{type:"teach",trg:"el envejecimiento",src:"the aging",pos:"noun",gender:"m",
 note:"Masculine noun. The process of growing old.\nFrom envejecer (to age).",
 example:"A: El envejecimiento de la población es un reto para la sanidad.\nB: Necesitamos más recursos para los mayores.",
 exampleSrc:"A: The aging of the population is a challenge for healthcare.\nB: We need more resources for the elderly.",
 funFact:"Spain has one of the highest life expectancies in the EU, making envejecimiento a hot topic."},

{type:"mc",q:"¿Qué es un esguince?",opts:["Una lesión de ligamentos","Una enfermedad crónica","Un tipo de fractura","Un estiramiento muscular"],ans:"Una lesión de ligamentos",hint:"Think about what happens when you twist your ankle badly."},

{type:"teach",trg:"el diagnóstico",src:"the diagnosis",pos:"noun",gender:"m",
 note:"Masculine noun. Identification of a disease.\nPlural: los diagnósticos.",
 example:"A: ¿Ya tienes el diagnóstico del médico?\nB: Sí, dice que es una simple infección.",
 exampleSrc:"A: Do you have the doctor's diagnosis yet?\nB: Yes, he says it is a simple infection.",
 funFact:"From Greek diagnoustikos (able to distinguish). The accent falls on the 'ó' in Spanish."},

{type:"teach",trg:"la discapacidad",src:"the disability",pos:"noun",gender:"f",
 note:"Feminine noun. A physical or mental condition that limits activity.\nPreferred over older terms.",
 example:"A: La ley protege los derechos de las personas con discapacidad.\nB: Es importante garantizar la accesibilidad.",
 exampleSrc:"A: The law protects the rights of people with disabilities.\nB: It is important to guarantee accessibility.",
 funFact:"Spain replaced 'minusvalía' with 'discapacidad' in official language to promote dignity."},

{type:"teach",trg:"estéril",src:"sterile / infertile",pos:"adj",gender:null,
 note:"Adjective. Can mean medically sterile or unable to reproduce.\nAlso figurative: un debate estéril.",
 example:"A: El quirófano debe estar completamente estéril.\nB: Se desinfecta antes de cada operación.",
 exampleSrc:"A: The operating room must be completely sterile.\nB: It is disinfected before every operation.",
 funFact:"From Latin sterilis. Used figuratively for pointless discussions: 'un esfuerzo estéril'."},

{type:"teach",trg:"envenenar",src:"to poison",pos:"verb",gender:null,
 note:"Regular -ar verb. From veneno (poison).\nAlso figurative: envenenar una relación.",
 example:"A: El río fue envenenado por los residuos de la fábrica.\nB: Es un desastre ecológico.",
 exampleSrc:"A: The river was poisoned by the factory waste.\nB: It is an ecological disaster.",
 funFact:"From Latin venenum, which originally meant 'love potion' before shifting to 'poison'."},

{type:"fb",s:"El médico me dio el {1} después de las pruebas.",a:["diagnóstico"],opts:["diagnóstico","esguince","estiramiento","envejecimiento"],hint:"The identification of what illness or condition you have.",sSrc:"The doctor gave me the {1} after the tests."},

{type:"teach",trg:"estrangular",src:"to strangle / to throttle",pos:"verb",gender:null,
 note:"Regular -ar verb. Physical or figurative choking.\nAlso: estrangular la economía.",
 example:"A: La burocracia puede estrangular el crecimiento económico.\nB: Hay que simplificar los trámites.",
 exampleSrc:"A: Bureaucracy can strangle economic growth.\nB: We need to simplify the procedures.",
 funFact:"From Latin strangulare. In medicine, 'hernia estrangulada' is a surgical emergency."},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine noun. School subject focused on sports and fitness.\nAbbreviated: E.F.",
 example:"A: ¿Te gustaba la educación física en el colegio?\nB: Era mi asignatura favorita.",
 exampleSrc:"A: Did you like physical education at school?\nB: It was my favorite subject.",
 funFact:"In Spain, PE is mandatory through secondary school. Students call it simply 'gimnasia'."},

{type:"teach",trg:"evaporar",src:"to evaporate",pos:"verb",gender:null,
 note:"Regular -ar verb. Also reflexive: evaporarse.\nFigurative: el dinero se evaporó.",
 example:"A: Con este calor, el agua se evapora enseguida.\nB: Hay que regar las plantas por la noche.",
 exampleSrc:"A: With this heat, the water evaporates right away.\nB: We need to water the plants at night.",
 funFact:"From Latin evaporare (e- out + vapor steam). Spain loses massive water to evaporation in summer."},

{type:"mc",q:"¿Qué significa 'estéril' en un contexto médico?",opts:["Libre de gérmenes","Muy doloroso","Relacionado con los huesos","De larga duración"],ans:"Libre de gérmenes",hint:"Think about the cleanliness required in an operating room."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of absorbing.\nUsed in medicine, science, and business.",
 example:"A: La absorción de hierro mejora con vitamina C.\nB: Por eso recomiendan zumo de naranja.",
 exampleSrc:"A: Iron absorption improves with vitamin C.\nB: That is why they recommend orange juice.",
 funFact:"From Latin absorptionem. In business, 'absorción' means a company takeover or merger."},

{type:"teach",trg:"la articulación",src:"the joint / articulation",pos:"noun",gender:"f",
 note:"Feminine noun. Where two bones meet, or clear speech.\nPlural: las articulaciones.",
 example:"A: Me duelen las articulaciones cuando llueve.\nB: Eso le pasa a mucha gente.",
 exampleSrc:"A: My joints hurt when it rains.\nB: That happens to a lot of people.",
 funFact:"From Latin articulatio. Also means the clear pronunciation of sounds in linguistics."},

{type:"fb",s:"Las personas con {1} tienen derecho a la accesibilidad.",a:["discapacidad"],opts:["discapacidad","estreñimiento","esguince","absorción"],hint:"A condition that limits someone's physical or mental abilities.",sSrc:"People with {1} have the right to accessibility."},

{type:"match",pairs:[{trg:"esguince",src:"sprain"},{trg:"diagnóstico",src:"diagnosis"},{trg:"envejecimiento",src:"aging"},{trg:"articulación",src:"joint"},{trg:"extremidad",src:"limb"}]},

{type:"mc",q:"¿Qué se evapora con el calor?",opts:["El agua","El hielo","La tierra","El viento"],ans:"El agua",hint:"Think about what happens to liquid when temperatures rise."},

{type:"fb",s:"Haz {1} antes de empezar a correr para no lesionarte.",a:["estiramiento"],opts:["estiramiento","envejecimiento","estreñimiento","diagnóstico"],hint:"The warm-up exercise where you extend your muscles.",sSrc:"Do {1} before you start running so you do not get injured."}
]};

export default LESSON_1;
