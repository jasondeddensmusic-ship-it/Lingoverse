// B2 Gap Batch C Lesson 14 - Psychology & Behavior
const LESSON_14 = {id:"esv2_b2gC_l14",title:"Psicología y comportamiento",icon:"🧠",xp:15,board:true,steps:[
{type:"intro",title:"Psicología y comportamiento",desc:"Explore vocabulary for psychological concepts, personality traits, and human behavior patterns.",goals:["Learn 12 words about psychology and behavior","Discuss personality and emotional states","Use abstract psychological vocabulary"]},

{type:"teach",trg:"la impulsividad",src:"the impulsivity",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to act without thinking.\nFrom impulsivo (impulsive).",
 example:"A: La impulsividad le ha causado muchos problemas laborales.\nB: Debería aprender a pensar antes de actuar.",
 exampleSrc:"A: Impulsivity has caused him many work problems.\nB: He should learn to think before acting.",
 funFact:"In psychology, impulsividad is a key trait in ADHD diagnosis. It is measured with standardized scales."},

{type:"teach",trg:"la paranoia",src:"the paranoia",pos:"noun",gender:"f",
 note:"Feminine noun. Irrational suspicion or distrust.\nFrom Greek para (beside) + nous (mind).",
 example:"A: La paranoia le impide confiar en sus compañeros.\nB: Un buen terapeuta podría ayudarle mucho.",
 exampleSrc:"A: Paranoia prevents him from trusting his colleagues.\nB: A good therapist could help him a lot.",
 funFact:"In colloquial Spanish, 'paranoico' is used loosely for anyone who worries excessively. Clinically, it is much more specific."},

{type:"teach",trg:"persuadir",src:"to persuade",pos:"verb",gender:null,
 note:"Regular -ir verb. To convince someone through argument.\nFrom Latin persuadere.",
 example:"A: Intenté persuadirle para que aceptara el puesto.\nB: Es muy testarudo, no va a cambiar de opinión.",
 exampleSrc:"A: I tried to persuade him to accept the position.\nB: He's very stubborn, he won't change his mind.",
 funFact:"Persuadir takes the subjunctive: 'Le persuadí de que viniera' (I persuaded him to come)."},

{type:"teach",trg:"la persuasión",src:"the persuasion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of convincing someone.\nA key skill in rhetoric and sales.",
 example:"A: El arte de la persuasión es fundamental en la política.\nB: Los mejores oradores saben convencer sin imponer.",
 exampleSrc:"A: The art of persuasion is fundamental in politics.\nB: The best speakers know how to convince without imposing.",
 funFact:"Aristotle's three modes of persuasión: ethos (character), pathos (emotion), logos (logic) are still taught today."},

{type:"mc",q:"¿Qué rasgo psicológico hace que alguien actúe sin pensar?",opts:["La impulsividad","La persuasión","La paranoia","La pasividad"],ans:"La impulsividad",hint:"This trait describes a tendency to act on impulse rather than reflection."},

{type:"teach",trg:"persuasivo",src:"persuasive",pos:"adj",gender:null,
 note:"Adjective. Having the ability to convince.\nFeminine: persuasiva.",
 example:"A: Su argumento fue muy persuasivo y todos le apoyaron.\nB: Tiene un don natural para convencer.",
 exampleSrc:"A: His argument was very persuasive and everyone supported him.\nB: He has a natural gift for convincing.",
 funFact:"In Spanish advertising, 'comunicación persuasiva' is the technical term for marketing communication."},

{type:"teach",trg:"perturbar",src:"to disturb / to perturb",pos:"verb",gender:null,
 note:"Regular -ar verb. To upset or disrupt someone's peace.\nFrom Latin perturbare.",
 example:"A: El ruido constante perturba la concentración de los estudiantes.\nB: Deberían insonorizar las aulas.",
 exampleSrc:"A: The constant noise disturbs the students' concentration.\nB: They should soundproof the classrooms.",
 funFact:"A 'perturbado mental' is a dated, now considered offensive term for someone with a mental illness."},

{type:"teach",trg:"pervertir",src:"to pervert / to corrupt",pos:"verb",gender:null,
 note:"Irregular verb (e > ie). To distort or corrupt.\nFrom Latin pervertere (to turn around).",
 example:"A: Las noticias falsas pueden pervertir la opinión pública.\nB: Es importante verificar las fuentes antes de compartir.",
 exampleSrc:"A: Fake news can pervert public opinion.\nB: It's important to verify sources before sharing.",
 funFact:"The per- prefix in Latin means 'thoroughly'. Pervertir literally means to turn something thoroughly wrong."},

{type:"fb",s:"El arte de la {1} es fundamental en la política.",a:["persuasión"],opts:["persuasión","paranoia","impulsividad","perturbación"],hint:"The skill or act of convincing others through argument and reason.",sSrc:"The art of {1} is fundamental in politics."},

{type:"teach",trg:"perseverar",src:"to persevere",pos:"verb",gender:null,
 note:"Regular -ar verb. To continue despite difficulties.\nFrom Latin perseverare.",
 example:"A: Hay que perseverar aunque los resultados no sean inmediatos.\nB: La constancia siempre da frutos al final.",
 exampleSrc:"A: You have to persevere even if the results aren't immediate.\nB: Persistence always bears fruit in the end.",
 funFact:"The Latin per- (through) + severus (strict) gives us perseverar: to remain strictly committed through hardship."},

{type:"teach",trg:"persistir",src:"to persist / to continue",pos:"verb",gender:null,
 note:"Regular -ir verb. To continue firmly despite opposition.\nFrom Latin persistere.",
 example:"A: Si persistes en tu esfuerzo, conseguirás el objetivo.\nB: No pienso rendirme ahora que estoy tan cerca.",
 exampleSrc:"A: If you persist in your effort, you'll achieve the goal.\nB: I won't give up now that I'm so close.",
 funFact:"Persistir and perseverar are near synonyms, but persistir emphasizes continuation while perseverar emphasizes endurance."},

{type:"teach",trg:"el pecador",src:"the sinner (male)",pos:"noun",gender:"m",
 note:"Masculine noun. A person who sins.\nFeminine: la pecadora. Also adjective.",
 example:"A: En la literatura medieval, el pecador busca redención.\nB: Es un tema universal en todas las culturas.",
 exampleSrc:"A: In medieval literature, the sinner seeks redemption.\nB: It's a universal theme in all cultures.",
 funFact:"'De pecado' means sinfully good in colloquial Spanish: 'un chocolate de pecado' (a sinfully good chocolate)."},

{type:"mc",q:"¿Qué verbo significa continuar a pesar de las dificultades?",opts:["Perseverar","Pervertir","Perturbar","Persuadir"],ans:"Perseverar",hint:"This verb means to keep going firmly through hardship, from Latin roots meaning 'strictly through'."},

{type:"fb",s:"Las noticias falsas pueden {1} la opinión pública.",a:["pervertir"],opts:["pervertir","persuadir","perseverar","persistir"],hint:"To distort or corrupt something, turning it away from its original or correct form.",sSrc:"Fake news can {1} public opinion."},

{type:"match",pairs:[{trg:"persuadir",src:"to persuade"},{trg:"perturbar",src:"to disturb"},{trg:"perseverar",src:"to persevere"},{trg:"persistir",src:"to persist"},{trg:"paranoia",src:"paranoia"}]},

{type:"fb",s:"Si {1} en tu esfuerzo, conseguirás tu objetivo.",a:["persistes"],opts:["persistes","persuades","perturbas","perviertes"],hint:"To continue firmly in a course of action despite difficulties or opposition.",sSrc:"If you {1} in your effort, you'll achieve your goal."}
]};

export default LESSON_14;
