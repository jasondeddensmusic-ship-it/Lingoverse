// B2 Gap Batch 6 Lesson 09 - Psychology & Emotions
const LESSON_9 = {id:"esv2_b2g6_l9",title:"Psicología y emociones",icon:"🧠",xp:15,board:true,steps:[
{type:"intro",title:"Psicología y emociones",desc:"Explore vocabulary for discussing emotions, psychological states, and human behavior.",goals:["Learn 15 psychology and emotion terms","Discuss feelings and mental states","Express complex emotional concepts"]},

{type:"teach",trg:"la ira",src:"anger / wrath",pos:"noun",gender:"f",
 note:"Feminine noun. Intense anger or fury.\nFrom Latin ira. More literary than 'enfado'.",
 example:"A: Sintió una ira incontrolable al enterarse de la traición.\nB: Es comprensible, pero necesita calmarse.",
 exampleSrc:"A: He felt an uncontrollable rage upon learning of the betrayal.\nB: It is understandable, but he needs to calm down.",
 funFact:"The adjective 'iracundo' (wrathful) comes from the same root. Ira is one of the seven deadly sins."},

{type:"teach",trg:"la irritación",src:"the irritation",pos:"noun",gender:"f",
 note:"Feminine noun. Annoyance or physical inflammation.\nFrom Latin irritare.",
 example:"A: La irritación de sus comentarios me molestó mucho.\nB: Intenta no tomártelo como algo personal.",
 exampleSrc:"A: The irritation from his comments bothered me a lot.\nB: Try not to take it personally.",
 funFact:"Can mean both emotional annoyance and physical irritation (skin, eyes). Context makes it clear."},

{type:"teach",trg:"la irritabilidad",src:"irritability",pos:"noun",gender:"f",
 note:"Feminine noun. A tendency to get easily annoyed.\nFrom irritable + -idad.",
 example:"A: La falta de sueño aumenta la irritabilidad.\nB: Es verdad, estoy de mal humor todo el día.",
 exampleSrc:"A: Lack of sleep increases irritability.\nB: It is true, I am in a bad mood all day.",
 funFact:"The -idad suffix creates abstract quality nouns: irritable > irritabilidad, like English -ity."},

{type:"teach",trg:"la impulsividad",src:"impulsivity",pos:"noun",gender:"f",
 note:"Feminine noun. Acting without thinking first.\nFrom impulsivo + -idad.",
 example:"A: Su impulsividad le ha causado muchos problemas.\nB: Debería pensar antes de actuar.",
 exampleSrc:"A: His impulsivity has caused him many problems.\nB: He should think before acting.",
 funFact:"From Latin impulsus (push). An impulsive person is 'pushed' to act without reflection."},

{type:"mc",q:"¿Qué es la ira?",opts:["Un sentimiento de enfado intenso","Un tipo de tristeza","Una emoción positiva","Una enfermedad mental"],ans:"Un sentimiento de enfado intenso",hint:"Think of intense anger or wrath. One of the seven deadly sins."},

{type:"teach",trg:"inquietar",src:"to worry / to unsettle",pos:"verb",gender:null,
 note:"Regular -ar verb. To make someone uneasy.\nReflexive: inquietarse (to become worried).",
 example:"A: Las noticias sobre la economía me inquietan.\nB: A mí también, pero intentemos ser optimistas.",
 exampleSrc:"A: The news about the economy worries me.\nB: Me too, but let us try to be optimistic.",
 funFact:"From in- (not) + quieto (quiet). To 'un-quiet' someone, to disturb their peace."},

{type:"teach",trg:"ilusionar",src:"to excite / to fill with hope",pos:"verb",gender:null,
 note:"Regular -ar verb. To create excitement or hope.\nReflexive: ilusionarse (to get excited).",
 example:"A: Me ilusiona mucho el viaje a Barcelona.\nB: ¡A mí también! Va a ser genial.",
 exampleSrc:"A: I am very excited about the trip to Barcelona.\nB: Me too! It is going to be great.",
 funFact:"'Hacerse ilusiones' means to get your hopes up. 'No te hagas ilusiones' means do not get your hopes up."},

{type:"teach",trg:"la infelicidad",src:"unhappiness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unhappy.\nIn- (not) + felicidad (happiness).",
 example:"A: La infelicidad en el trabajo afecta a toda la vida.\nB: Por eso es importante encontrar algo que te motive.",
 exampleSrc:"A: Unhappiness at work affects your whole life.\nB: That is why it is important to find something that motivates you.",
 funFact:"The prefix in- negates the root: felicidad > infelicidad. Same pattern as seguridad > inseguridad."},

{type:"fb",s:"Su {1} le llevó a tomar decisiones precipitadas.",a:["impulsividad"],opts:["impulsividad","irritabilidad","infelicidad","ira"],hint:"The tendency to act without thinking first.",sSrc:"His {1} led him to make hasty decisions."},

{type:"teach",trg:"la insatisfacción",src:"dissatisfaction",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of satisfaction.\nIn- (not) + satisfacción.",
 example:"A: La insatisfacción de los empleados es evidente.\nB: Necesitan mejores condiciones laborales.",
 exampleSrc:"A: The employees' dissatisfaction is evident.\nB: They need better working conditions.",
 funFact:"The prefix in- is extremely productive in Spanish for creating negative abstract nouns."},

{type:"teach",trg:"la idiosincrasia",src:"idiosyncrasy / character",pos:"noun",gender:"f",
 note:"Feminine noun. The distinctive character of a person\nor culture. From Greek idios (own).",
 example:"A: La idiosincrasia española incluye la pasión por la vida social.\nB: Las terrazas y las tapas son un buen ejemplo.",
 exampleSrc:"A: The Spanish idiosyncrasy includes a passion for social life.\nB: Terraces and tapas are a good example.",
 funFact:"From Greek idios (own) + synkrasis (mixture). Each person's or culture's unique blend of traits."},

{type:"teach",trg:"la extrañeza",src:"strangeness / surprise",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being strange,\nor a feeling of surprise. From extraño.",
 example:"A: Me miró con extrañeza cuando hablé en español.\nB: No esperaba que un extranjero lo hablara tan bien.",
 exampleSrc:"A: She looked at me with surprise when I spoke in Spanish.\nB: She did not expect a foreigner to speak it so well.",
 funFact:"Can mean both the quality of strangeness and the feeling of surprise. 'Causar extrañeza' means to cause surprise."},

{type:"mc",q:"¿Qué significa ilusionarse?",opts:["Tener miedo","Llenarse de esperanza o emoción","Sentir ira","Estar irritado"],ans:"Llenarse de esperanza o emoción",hint:"Getting excited or hopeful about something positive."},

{type:"match",pairs:[
  {trg:"ira",src:"anger / wrath"},
  {trg:"inquietar",src:"to worry"},
  {trg:"ilusionar",src:"to excite"},
  {trg:"insatisfacción",src:"dissatisfaction"},
  {trg:"idiosincrasia",src:"idiosyncrasy"}
]},

{type:"fb",s:"Me {1} mucho la idea de estudiar en el extranjero.",a:["ilusiona"],opts:["ilusiona","inquieta","irrita","entristece"],hint:"The verb meaning to fill with excitement and hope.",sSrc:"The idea of studying abroad {1} me a lot."}
]};
export default LESSON_9;
