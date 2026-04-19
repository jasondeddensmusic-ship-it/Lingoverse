// B2 Gap2 Lesson 06 - Character & Personality
const LESSON_6 = {id:"esv2_b2g2_l6",title:"Carácter y personalidad",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Carácter y personalidad",desc:"Build a rich vocabulary for describing people's character traits, both positive and negative.",goals:["Learn 20 personality and character words","Describe people with nuance","Distinguish between similar character traits"]},

{type:"teach",trg:"arrogante",src:"arrogant",pos:"adj",gender:null,
 note:"Adjective. Having an exaggerated sense of one's own importance. Same form m/f.",
 example:"A: Su actitud arrogante molesta a todos.\nB: Nunca escucha las opiniones de los demás.",
 exampleSrc:"A: His arrogant attitude bothers everyone.\nB: He never listens to other people's opinions.",
 funFact:"From Latin arrogare (to claim for oneself). 'Arrogancia' and 'soberbia' are near-synonyms."},

{type:"teach",trg:"astuto",src:"astute / cunning",pos:"adj",gender:null,
 note:"Adjective. Clever at achieving goals, sometimes slyly.\nFeminine: astuta.",
 example:"A: Es una persona muy astuta.\nB: Siempre consigue lo que quiere sin que nadie se dé cuenta.",
 exampleSrc:"A: She is a very astute person.\nB: She always gets what she wants without anyone noticing.",
 funFact:"Can be positive (clever) or negative (sly). Context decides. Related to 'astucia' (cunning)."},

{type:"teach",trg:"bondadoso",src:"kind-hearted / good-natured",pos:"adj",gender:null,
 note:"Adjective. Naturally kind and generous.\nFeminine: bondadosa.",
 example:"A: Mi abuela era la persona más bondadosa que he conocido.\nB: Siempre ayudaba a todo el mundo.",
 exampleSrc:"A: My grandmother was the kindest person I have ever known.\nB: She always helped everyone.",
 funFact:"From 'bondad' (goodness). Stronger than 'amable' (polite-kind), implies deep inner goodness."},

{type:"teach",trg:"alocado",src:"wild / reckless",pos:"adj",gender:null,
 note:"Adjective. Acting without thinking, impulsive.\nFeminine: alocada.",
 example:"A: Fue una decisión un poco alocada.\nB: Sí, pero al final salió bien.",
 exampleSrc:"A: It was a somewhat reckless decision.\nB: Yes, but in the end it worked out.",
 funFact:"From 'loco' (crazy) with the prefix a-. Less strong than 'loco' but more than 'impulsivo'."},

{type:"teach",trg:"calculador",src:"calculating / scheming",pos:"adj",gender:null,
 note:"Adjective. Coldly planning to get personal advantage.\nFeminine: calculadora.",
 example:"A: No confío en ella, es muy calculadora.\nB: Cada palabra que dice tiene un propósito oculto.",
 exampleSrc:"A: I do not trust her, she is very calculating.\nB: Every word she says has a hidden purpose.",
 funFact:"Note: 'la calculadora' (feminine noun) also means the calculator device. Context is key."},

{type:"mc",q:"¿Cuál es una persona bondadosa?",opts:["Alguien naturalmente amable y generoso","Alguien que calcula todo","Alguien arrogante y frío","Alguien impulsivo y alocado"],ans:"Alguien naturalmente amable y generoso",hint:"Think about deep inner goodness and kindness toward everyone."},

{type:"teach",trg:"avariento",src:"greedy / miserly",pos:"adj",gender:null,
 note:"Adjective. Excessively attached to money.\nFeminine: avarienta.",
 example:"A: Es tan avariento que nunca invita a nadie.\nB: Ni siquiera deja propina en los restaurantes.",
 exampleSrc:"A: He is so miserly that he never treats anyone.\nB: He does not even leave a tip at restaurants.",
 funFact:"From 'avaricia' (greed). One of the seven deadly sins in Catholic tradition: 'la avaricia'."},

{type:"teach",trg:"la audacia",src:"the audacity / boldness",pos:"noun",gender:"f",
 note:"Feminine noun. Boldness and willingness to take risks.",
 example:"A: Admiro tu audacia al emprender ese negocio.\nB: Alguien tenía que dar el primer paso.",
 exampleSrc:"A: I admire your audacity in starting that business.\nB: Someone had to take the first step.",
 funFact:"Can be positive (boldness) or negative (nerve). 'Tuvo la audacia de mentirme' is negative."},

{type:"teach",trg:"el agobio",src:"the stress / overwhelming feeling",pos:"noun",gender:"m",
 note:"Masculine noun. A feeling of being overwhelmed or suffocated.",
 example:"A: El agobio del trabajo no me deja dormir.\nB: Deberías hablar con tu jefe sobre la carga.",
 exampleSrc:"A: The stress from work does not let me sleep.\nB: You should talk to your boss about the workload.",
 funFact:"'Agobio' is deeply Spanish. It captures a specific kind of overwhelm that 'estrés' does not."},

{type:"teach",trg:"agobiante",src:"overwhelming / stifling",pos:"adj",gender:null,
 note:"Adjective. Causing a feeling of being overwhelmed. Same form m/f.",
 example:"A: El calor de agosto en Madrid es agobiante.\nB: Por eso la ciudad se vacía en verano.",
 exampleSrc:"A: The August heat in Madrid is stifling.\nB: That is why the city empties out in summer.",
 funFact:"Spaniards use 'agobiante' for heat, workloads, people, and situations. Extremely versatile."},

{type:"teach",trg:"la delicadeza",src:"the delicacy / gentleness",pos:"noun",gender:"f",
 note:"Feminine noun. Graceful sensitivity or tactful behavior.",
 example:"A: Trató el tema con mucha delicadeza.\nB: No quería herir los sentimientos de nadie.",
 exampleSrc:"A: He handled the topic with great delicacy.\nB: He did not want to hurt anyone's feelings.",
 funFact:"'Falta de delicadeza' (lack of tact) is a common complaint in Spanish workplace culture."},

{type:"fb",s:"El calor de agosto en Sevilla es {1}.",a:["agobiante"],opts:["agobiante","bondadoso","arrogante","alocado"],hint:"An adjective meaning stifling or overwhelming, often used for heat or pressure.",sSrc:"The August heat in Seville is {1}."},

{type:"teach",trg:"apuesto",src:"handsome / good-looking",pos:"adj",gender:null,
 note:"Adjective. Attractive in a distinguished way (usually male).\nFeminine: apuesta.",
 example:"A: Tu hermano se ha puesto muy apuesto.\nB: Sí, ha cambiado mucho desde la universidad.",
 exampleSrc:"A: Your brother has become very handsome.\nB: Yes, he has changed a lot since university.",
 funFact:"From the past participle of 'aponer' (to put well). Literally 'well-composed' in appearance."},

{type:"teach",trg:"angelical",src:"angelic",pos:"adj",gender:null,
 note:"Adjective. Having the innocent beauty of an angel. Same form m/f.",
 example:"A: La niña tiene una cara angelical.\nB: Pero no te dejes engañar, es muy traviesa.",
 exampleSrc:"A: The girl has an angelic face.\nB: But do not be fooled, she is very mischievous.",
 funFact:"Often used ironically in Spanish: 'cara angelical' followed by a but clause about bad behavior."},

{type:"teach",trg:"contundente",src:"forceful / overwhelming",pos:"adj",gender:null,
 note:"Adjective. Strong, decisive, leaving no room for doubt. Same form m/f.",
 example:"A: Su argumento fue contundente.\nB: Nadie pudo rebatirlo en el debate.",
 exampleSrc:"A: His argument was overwhelming.\nB: Nobody could refute it in the debate.",
 funFact:"In law, 'arma contundente' is a blunt weapon. The figurative sense is far more common daily."},

{type:"teach",trg:"decepcionante",src:"disappointing",pos:"adj",gender:null,
 note:"Adjective. Failing to meet expectations. Same form m/f.",
 example:"A: Los resultados del examen fueron decepcionantes.\nB: Esperábamos mucho mejores notas.",
 exampleSrc:"A: The exam results were disappointing.\nB: We expected much better grades.",
 funFact:"False friend alert: 'decepcionar' means to disappoint, NOT to deceive (which is 'engañar')."},

{type:"mc",q:"¿Qué significa ser calculador?",opts:["Planear fríamente para beneficio propio","Ser muy bueno en matemáticas","Tener mucha audacia","Actuar de forma alocada"],ans:"Planear fríamente para beneficio propio",hint:"Think about someone who coldly schemes every move for personal advantage."},

{type:"teach",trg:"borde",src:"rude / unfriendly (colloquial)",pos:"adj",gender:null,
 note:"Adjective. Unfriendly and abrupt (informal Spanish). Same form m/f.",
 example:"A: El camarero fue bastante borde con nosotros.\nB: Quizás estaba teniendo un mal día.",
 exampleSrc:"A: The waiter was quite rude to us.\nB: Maybe he was having a bad day.",
 funFact:"Colloquial Peninsular Spanish. 'Ponerse borde' means to become snippy or unfriendly."},

{type:"teach",trg:"admirable",src:"admirable",pos:"adj",gender:null,
 note:"Adjective. Worthy of admiration and respect. Same form m/f.",
 example:"A: Su dedicación al voluntariado es admirable.\nB: Lleva veinte años ayudando sin pedir nada.",
 exampleSrc:"A: His dedication to volunteering is admirable.\nB: He has been helping for twenty years without asking for anything.",
 funFact:"Same word in English and Spanish, from Latin admirabilis. The stress falls on the third syllable."},

{type:"teach",trg:"cínico",src:"cynical",pos:"adj",gender:null,
 note:"Adjective. Distrusting human goodness, or shamelessly bold.\nFeminine: cínica.",
 example:"A: No seas tan cínico, hay gente buena en el mundo.\nB: Lo sé, pero la experiencia me ha hecho desconfiado.",
 exampleSrc:"A: Do not be so cynical, there are good people in the world.\nB: I know, but experience has made me distrustful.",
 funFact:"From the Greek Cynics, philosophers who rejected social conventions. Diogenes was the most famous."},

{type:"teach",trg:"creíble",src:"credible / believable",pos:"adj",gender:null,
 note:"Adjective. Able to be believed. Same form m/f.",
 example:"A: Su excusa no era muy creíble.\nB: Nadie se la creyó, la verdad.",
 exampleSrc:"A: His excuse was not very credible.\nB: Nobody believed it, to be honest.",
 funFact:"The negative 'increíble' is far more common in daily speech: 'Es increíble' (unbelievable)."},

{type:"fb",s:"Los resultados del equipo este año han sido {1}.",a:["decepcionantes"],opts:["decepcionantes","contundentes","admirables","angelicales"],hint:"An adjective meaning failing to meet expectations, causing letdown.",sSrc:"The team's results this year have been {1}."},

{type:"match",pairs:[{trg:"astuto",src:"astute"},{trg:"bondadoso",src:"kind-hearted"},{trg:"agobiante",src:"overwhelming"},{trg:"apuesto",src:"handsome"},{trg:"cínico",src:"cynical"}]},

{type:"mc",q:"¿Qué palabra describe a alguien que es tacaño con el dinero?",opts:["Avariento","Alocado","Arrogante","Borde"],ans:"Avariento",hint:"Think about someone excessively attached to their money who never treats others."}
]};

export default LESSON_6;
