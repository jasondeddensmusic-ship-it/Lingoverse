// B2 Gap Batch 6 Lesson 20 - Prefixed Words & Advanced Adjectives
const LESSON_20 = {id:"esv2_b2g6_l20",title:"Palabras con prefijo",icon:"🔤",xp:15,board:true,steps:[
{type:"intro",title:"Palabras con prefijo",desc:"Master advanced vocabulary using Spanish prefixes. Learn how in-, im-, ir-, and other prefixes create sophisticated B2-level words.",goals:["Learn 15 prefixed adjectives and nouns","Understand how prefixes change meaning","Use advanced prefixed vocabulary naturally"]},

{type:"teach",trg:"imborrable",src:"indelible / unforgettable",pos:"adj",gender:null,
 note:"Adjective. Impossible to erase or forget.\nIm- (not) + borrable (erasable).",
 example:"A: El viaje dejó recuerdos imborrables.\nB: Fue lo mejor de mi vida.",
 exampleSrc:"A: The trip left indelible memories.\nB: It was the best of my life.",
 funFact:"From borrar (to erase). Something imborrable cannot be erased from memory or paper."},

{type:"teach",trg:"invencible",src:"invincible",pos:"adj",gender:null,
 note:"Adjective. Impossible to defeat.\nIn- (not) + vencible (conquerable).",
 example:"A: La Armada Invencible no fue tan invencible al final.\nB: La tormenta y los ingleses la derrotaron.",
 exampleSrc:"A: The Invincible Armada was not so invincible in the end.\nB: The storm and the English defeated it.",
 funFact:"Spain's 1588 fleet was called 'la Armada Invencible'. Its defeat marked a turning point in European history."},

{type:"teach",trg:"inofensivo",src:"harmless / inoffensive",pos:"adj",gender:null,
 note:"Adjective. Not causing harm.\nIn- (not) + ofensivo (offensive).",
 example:"A: Esta araña es completamente inofensiva.\nB: Aun así, prefiero no tocarla.",
 exampleSrc:"A: This spider is completely harmless.\nB: Even so, I prefer not to touch it.",
 funFact:"In- negates the root: ofensivo > inofensivo. The same pattern works for many adjectives."},

{type:"teach",trg:"insostenible",src:"unsustainable",pos:"adj",gender:null,
 note:"Adjective. Not able to be maintained.\nIn- (not) + sostenible (sustainable).",
 example:"A: Este ritmo de trabajo es insostenible.\nB: Necesitamos contratar más personal.",
 exampleSrc:"A: This pace of work is unsustainable.\nB: We need to hire more staff.",
 funFact:"Environmental activism has made 'sostenible/insostenible' among the most-used words in Spanish media."},

{type:"mc",q:"¿Qué significa imborrable?",opts:["Que no se puede borrar","Que se borra fácilmente","Que es aburrido","Que es temporal"],ans:"Que no se puede borrar",hint:"Something that cannot be erased from memory or a surface."},

{type:"teach",trg:"intolerable",src:"intolerable / unbearable",pos:"adj",gender:null,
 note:"Adjective. Too bad or extreme to be accepted.\nIn- (not) + tolerable.",
 example:"A: El calor en agosto es intolerable.\nB: Sin aire acondicionado es imposible dormir.",
 exampleSrc:"A: The heat in August is intolerable.\nB: Without air conditioning it is impossible to sleep.",
 funFact:"Spain experienced record temperatures above 45C in 2023, making 'intolerable' a frequent weather descriptor."},

{type:"teach",trg:"insobornable",src:"incorruptible / unbribable",pos:"adj",gender:null,
 note:"Adjective. Impossible to bribe or corrupt.\nIn- (not) + sobornable (bribable).",
 example:"A: El juez tiene fama de ser insobornable.\nB: Por eso le asignaron este caso tan delicado.",
 exampleSrc:"A: The judge has a reputation for being incorruptible.\nB: That is why they assigned him this delicate case.",
 funFact:"From sobornar (to bribe). 'Soborno' (bribe) comes from Latin subornare (to equip secretly)."},

{type:"teach",trg:"irremediable",src:"irremediable / hopeless",pos:"adj",gender:null,
 note:"Adjective. Impossible to fix or correct.\nIr- (not) + remediable.",
 example:"A: El daño al ecosistema parece irremediable.\nB: Aún estamos a tiempo si actuamos ahora.",
 exampleSrc:"A: The damage to the ecosystem seems irremediable.\nB: We are still in time if we act now.",
 funFact:"The prefix ir- appears before 'r' in Spanish, while in- appears before most other consonants."},

{type:"fb",s:"La situación medioambiental es {1} si no cambiamos nuestros hábitos.",a:["insostenible"],opts:["insostenible","inofensiva","imborrable","invencible"],hint:"Cannot be maintained. Not able to continue at this rate.",sSrc:"The environmental situation is {1} if we do not change our habits."},

{type:"teach",trg:"improductivo",src:"unproductive",pos:"adj",gender:null,
 note:"Adjective. Not producing results or goods.\nIm- (not) + productivo.",
 example:"A: Las reuniones largas son improductivas.\nB: Es mejor hacer reuniones cortas y concretas.",
 exampleSrc:"A: Long meetings are unproductive.\nB: It is better to have short, focused meetings.",
 funFact:"Spain has debated its work culture: long hours do not always mean productivity."},

{type:"teach",trg:"la imparcialidad",src:"impartiality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being fair and unbiased.\nImparcial + -idad.",
 example:"A: La imparcialidad de los medios de comunicación es fundamental.\nB: El público merece información objetiva.",
 exampleSrc:"A: The impartiality of the media is fundamental.\nB: The public deserves objective information.",
 funFact:"'Imparcialidad' is a key principle in Spanish journalism ethics codes."},

{type:"teach",trg:"la impureza",src:"impurity",pos:"noun",gender:"f",
 note:"Feminine noun. Something that makes a substance\nnot pure. Im- (not) + pureza.",
 example:"A: El agua del grifo tiene algunas impurezas.\nB: Un filtro las elimina fácilmente.",
 exampleSrc:"A: The tap water has some impurities.\nB: A filter eliminates them easily.",
 funFact:"The -eza suffix creates abstract nouns from adjectives: puro > pureza, and then impureza."},

{type:"teach",trg:"inimaginable",src:"unimaginable",pos:"adj",gender:null,
 note:"Adjective. Beyond what can be imagined.\nIn- (not) + imaginable.",
 example:"A: El progreso tecnológico de los últimos años es inimaginable.\nB: Lo que hoy es normal, antes era ciencia ficción.",
 exampleSrc:"A: The technological progress of recent years is unimaginable.\nB: What is normal today was science fiction before.",
 funFact:"Triple prefix stacking is rare but possible: in-imagin-able. Each layer adds to the word."},

{type:"mc",q:"¿Qué significa insobornable?",opts:["Que es muy generoso","Que no se puede sobornar ni corromper","Que se enfada fácilmente","Que no tiene solución"],ans:"Que no se puede sobornar ni corromper",hint:"A person who cannot be bribed. Completely incorruptible."},

{type:"match",pairs:[
  {trg:"imborrable",src:"indelible"},
  {trg:"invencible",src:"invincible"},
  {trg:"insostenible",src:"unsustainable"},
  {trg:"insobornable",src:"incorruptible"},
  {trg:"irremediable",src:"irremediable"}
]},

{type:"fb",s:"El calor del verano pasado fue {1}, superamos los cuarenta y cinco grados.",a:["intolerable"],opts:["intolerable","improductivo","inofensivo","invencible"],hint:"Too extreme to bear or accept.",sSrc:"The heat of last summer was {1}, we exceeded forty-five degrees."}
]};
export default LESSON_20;
