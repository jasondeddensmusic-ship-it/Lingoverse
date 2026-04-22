// B2 Gap Batch D Lesson 5 - Abstract Qualities & States
const LESSON_5 = {id:"esv2_b2gD_l5",title:"Cualidades abstractas",icon:"\uD83C\uDFAD",xp:15,board:true,steps:[
{type:"intro",title:"Cualidades abstractas",desc:"Master abstract nouns describing human qualities and psychological states. Essential for nuanced B2 expression.",goals:["Learn 10 abstract quality nouns","Describe personality traits and states precisely","Use the -dad, -ez, and -idad suffixes productively"]},

{type:"teach",trg:"la impulsividad",src:"the impulsivity",pos:"noun",gender:"f",
 note:"Feminine noun. Tendency to act without thinking.\nFrom impulsivo (impulsive) + -idad.",
 example:"A: Su impulsividad le ha causado muchos problemas en el trabajo.\nB: Debería aprender a contar hasta diez antes de reaccionar.",
 exampleSrc:"A: His impulsivity has caused him many problems at work.\nB: He should learn to count to ten before reacting.",
 funFact:"The -idad suffix is the most productive abstract noun builder in Spanish, equivalent to English -ity."},

{type:"teach",trg:"la irritabilidad",src:"the irritability",pos:"noun",gender:"f",
 note:"Feminine noun. Tendency to become easily annoyed.\nMedical and everyday usage.",
 example:"A: La falta de sueño aumenta la irritabilidad.\nB: Por eso es tan importante dormir al menos siete horas.",
 exampleSrc:"A: Lack of sleep increases irritability.\nB: That's why it's so important to sleep at least seven hours.",
 funFact:"In psychology, 'irritabilidad' is a clinical symptom measured on standardized scales, not just a personality trait."},

{type:"teach",trg:"la incompetencia",src:"the incompetence",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of ability or skill.\nPrefix in- (not) + competencia (competence).",
 example:"A: La incompetencia del director provocó la crisis.\nB: Deberían haberlo reemplazado hace meses.",
 exampleSrc:"A: The director's incompetence caused the crisis.\nB: They should have replaced him months ago.",
 funFact:"In Spanish law, 'incompetencia' also means lack of legal jurisdiction: a court can be 'incompetente' for a case."},

{type:"teach",trg:"la pasividad",src:"the passivity",pos:"noun",gender:"f",
 note:"Feminine noun. State of being inactive or accepting.\nOpposite: la actividad.",
 example:"A: La pasividad del gobierno ante la crisis generó protestas.\nB: La gente exige acciones concretas, no solo palabras.",
 exampleSrc:"A: The government's passivity in the face of the crisis sparked protests.\nB: People demand concrete actions, not just words.",
 funFact:"In grammar, 'voz pasiva' (passive voice) shares the same root. Both imply receiving action rather than performing it."},

{type:"mc",q:"La impulsividad se caracteriza por...",opts:["Actuar sin pensar en las consecuencias","Planificar todo con cuidado","Ser muy paciente y tranquilo","Evitar cualquier tipo de riesgo"],ans:"Actuar sin pensar en las consecuencias",hint:"Acting on immediate urges without considering what might happen next."},

{type:"teach",trg:"la invalidez",src:"the disability / invalidity",pos:"noun",gender:"f",
 note:"Feminine noun. State of being unable to work due to injury.\nPensión de invalidez: disability pension.",
 example:"A: Tras el accidente, le concedieron una pensión de invalidez.\nB: Al menos tiene cierta seguridad económica.",
 exampleSrc:"A: After the accident, he was granted a disability pension.\nB: At least he has some economic security.",
 funFact:"Spanish law distinguishes 'invalidez parcial' (partial) from 'invalidez total' (total) based on remaining work capacity."},

{type:"teach",trg:"la desnudez",src:"the nakedness / bareness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unclothed.\nAlso figurative: emotional openness or vulnerability.",
 example:"A: La desnudez emocional del poema conmovió al público.\nB: El poeta no tuvo miedo de mostrar sus sentimientos.",
 exampleSrc:"A: The emotional nakedness of the poem moved the audience.\nB: The poet was not afraid to show his feelings.",
 funFact:"In art criticism, 'desnudez' versus 'desnudo' distinguishes the state from the artistic representation."},

{type:"teach",trg:"la pequeñez",src:"the smallness / pettiness",pos:"noun",gender:"f",
 note:"Feminine noun. Being small, or being mean-spirited.\nFrom pequeño (small) + -ez.",
 example:"A: No me interesan las pequeñeces de la política local.\nB: Tienes razón, hay problemas mucho más importantes.",
 exampleSrc:"A: I'm not interested in the pettiness of local politics.\nB: You're right, there are much more important problems.",
 funFact:"The -ez suffix creates abstract nouns from adjectives: pequeño > pequeñez, estúpido > estupidez, viejo > vejez."},

{type:"fb",s:"La {1} del gobierno provocó manifestaciones en todo el país.",a:["pasividad"],opts:["pasividad","impulsividad","invalidez","pequeñez"],hint:"The state of doing nothing, being inactive when action is expected.",sSrc:"The government's {1} provoked demonstrations across the country."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem larger than reality.\nFrom exagerar (to exaggerate).",
 example:"A: Decir que fue el peor día de mi vida es una exageración.\nB: Bueno, admito que fue bastante malo.",
 exampleSrc:"A: Saying it was the worst day of my life is an exaggeration.\nB: Well, I admit it was pretty bad.",
 funFact:"Spanish speakers use 'sin exagerar' (without exaggerating) as an intensifier, which is itself a mild form of exaggeration."},

{type:"teach",trg:"la inconveniencia",src:"the inconvenience / unsuitability",pos:"noun",gender:"f",
 note:"Feminine noun. Something that causes trouble or is unsuitable.\nMore formal than 'molestia'.",
 example:"A: Lamentamos la inconveniencia causada por las obras.\nB: Esperamos que terminen pronto, el ruido es insoportable.",
 exampleSrc:"A: We apologize for the inconvenience caused by the construction.\nB: We hope it finishes soon, the noise is unbearable.",
 funFact:"'Inconveniencia' is preferred in formal written Spanish. In everyday speech, 'inconveniente' (noun) is more common."},

{type:"match",pairs:[
 {trg:"impulsividad",src:"impulsivity"},
 {trg:"pasividad",src:"passivity"},
 {trg:"pequeñez",src:"pettiness"},
 {trg:"desnudez",src:"nakedness"},
 {trg:"invalidez",src:"disability"}
]},

{type:"mc",q:"El sufijo '-ez' forma sustantivos abstractos a partir de...",opts:["Preposiciones","Adjetivos","Verbos","Sustantivos concretos"],ans:"Adjetivos",hint:"Think: pequeño > pequeñez, viejo > vejez, estúpido > estupidez. What part of speech starts the pattern?"},

{type:"fb",s:"Tras el accidente, le concedieron una pensión de {1}.",a:["invalidez"],opts:["invalidez","impulsividad","exageración","desnudez"],hint:"A state of being unable to work, entitling someone to a disability pension.",sSrc:"After the accident, he was granted a {1} pension."},

{type:"mc",q:"La desnudez emocional en un poema significa...",opts:["No tener vocabulario suficiente","Ser superficial en la expresión","Mostrar sentimientos sin filtro","Escribir sobre el cuerpo humano"],ans:"Mostrar sentimientos sin filtro",hint:"Figurative use: emotional vulnerability, showing raw feelings without protection."}
]};
export default LESSON_5;
