// B2 Gap Batch 5 Lesson 05 - Strength, Courage & Character
const LESSON_5 = {id:"esv2_b2g5_l5",title:"Fuerza y carácter",icon:"💪",xp:15,board:true,steps:[
{type:"intro",title:"Fuerza y carácter",desc:"Learn vocabulary about personal strength, courage, moral qualities, and character traits.",goals:["Learn 15 words about character and moral strength","Discuss bravery and personal qualities","Use abstract nouns for personality description"]},

{type:"teach",trg:"la hazaña",src:"the feat / exploit",pos:"noun",gender:"f",
 note:"Feminine noun. A brave or remarkable achievement.\nOften used for heroic deeds.",
 example:"A: Cruzar el Atlántico en solitario fue una gran hazaña.\nB: Pocos se atreven a intentarlo.",
 exampleSrc:"A: Crossing the Atlantic alone was a great feat.\nB: Few dare to attempt it.",
 funFact:"From Arabic hasana (good deed). The word entered Spanish during the centuries of Moorish presence."},

{type:"teach",trg:"heroico",src:"heroic",pos:"adj",gender:null,
 note:"Adjective. Showing extreme courage.\nFeminine: heroica.",
 example:"A: El rescate de los bomberos fue heroico.\nB: Arriesgaron sus vidas para salvar a la familia.",
 exampleSrc:"A: The firefighters' rescue was heroic.\nB: They risked their lives to save the family.",
 funFact:"The 'villa heroica' title was granted to Spanish cities that showed exceptional bravery in wars."},

{type:"teach",trg:"el heroísmo",src:"the heroism",pos:"noun",gender:"m",
 note:"Masculine noun. Great bravery and courage.\nThe quality of being a hero.",
 example:"A: Su heroísmo durante la crisis fue reconocido por todos.\nB: Le dieron una medalla al valor.",
 exampleSrc:"A: His heroism during the crisis was recognized by everyone.\nB: They gave him a medal for valor.",
 funFact:"Spain awards the 'Real y Militar Orden de San Fernando' for acts of heroísmo in military service."},

{type:"teach",trg:"la humildad",src:"the humility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being modest and unpretentious.\nOpposite: soberbia.",
 example:"A: Lo que más admiro de ella es su humildad.\nB: Es muy exitosa pero nunca presume.",
 exampleSrc:"A: What I admire most about her is her humility.\nB: She is very successful but never shows off.",
 funFact:"From Latin humilis (low, grounded). 'Humilde' and 'humildad' share the root with 'humus' (earth)."},

{type:"teach",trg:"humillar",src:"to humiliate",pos:"verb",gender:null,
 note:"Regular -ar verb. To make someone feel ashamed.\nReflexive: humillarse (to humble oneself).",
 example:"A: Nadie tiene derecho a humillar a otra persona.\nB: Estoy de acuerdo. Es una forma de abuso.",
 exampleSrc:"A: Nobody has the right to humiliate another person.\nB: I agree. It is a form of abuse.",
 funFact:"In Medieval Spanish, 'humillarse' meant to kneel or bow, a physical act of submission."},

{type:"mc",q:"¿Qué es una hazaña?",opts:["Una acción valiente y extraordinaria","Un tipo de enfermedad","Un acuerdo comercial","Una técnica de cocina"],ans:"Una acción valiente y extraordinaria",hint:"Think about a brave, remarkable deed that people admire."},

{type:"teach",trg:"la fraternidad",src:"the fraternity / brotherhood",pos:"noun",gender:"f",
 note:"Feminine noun. The bond between brothers or companions.\nAlso: solidarity between people.",
 example:"A: La fraternidad entre los compañeros es admirable.\nB: Se ayudan mutuamente en todo.",
 exampleSrc:"A: The fraternity between the colleagues is admirable.\nB: They help each other in everything.",
 funFact:"'Libertad, igualdad, fraternidad' in Spanish echoes the French revolutionary motto."},

{type:"teach",trg:"la dureza",src:"the hardness / toughness",pos:"noun",gender:"f",
 note:"Feminine noun. Physical or emotional toughness.\nFrom duro (hard).",
 example:"A: La dureza de la vida en el campo le hizo fuerte.\nB: Aprendió a no rendirse nunca.",
 exampleSrc:"A: The toughness of life in the countryside made him strong.\nB: He learned to never give up.",
 funFact:"The suffix -eza creates abstract nouns from adjectives: duro > dureza, bello > belleza, triste > tristeza."},

{type:"teach",trg:"la falsedad",src:"the falsehood / fakeness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being false or deceitful.\nFrom falso (false).",
 example:"A: No soporto la falsedad de esa persona.\nB: Dice una cosa y hace otra.",
 exampleSrc:"A: I can't stand that person's falsehood.\nB: They say one thing and do another.",
 funFact:"Same -dad suffix pattern: falso > falsedad, like verdadero > verdad, libre > libertad."},

{type:"teach",trg:"la fragilidad",src:"the fragility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being easily broken.\nAlso used emotionally.",
 example:"A: La fragilidad del cristal lo hace peligroso.\nB: Hay que manejarlo con mucho cuidado.",
 exampleSrc:"A: The fragility of the glass makes it dangerous.\nB: It has to be handled very carefully.",
 funFact:"Emotionally, 'fragilidad' has lost its stigma in Spain as mental health awareness grows."},

{type:"fb",s:"Su {1} durante la emergencia salvó muchas vidas.",a:["heroísmo"],opts:["heroísmo","humildad","fragilidad","falsedad"],hint:"The quality of showing extraordinary bravery and courage.",sSrc:"His {1} during the emergency saved many lives."},

{type:"teach",trg:"hambriento",src:"hungry / starving",pos:"adj",gender:null,
 note:"Adjective. Extremely hungry.\nFeminine: hambrienta. More intense than 'tener hambre'.",
 example:"A: Los niños llegaron hambrientos del colegio.\nB: Voy a prepararles algo enseguida.",
 exampleSrc:"A: The children arrived starving from school.\nB: I'll prepare something for them right away.",
 funFact:"'Hambriento de poder' (hungry for power) and 'hambriento de justicia' are common figurative uses."},

{type:"teach",trg:"hartar",src:"to fill up / to sicken / to annoy",pos:"verb",gender:null,
 note:"Regular -ar verb. To feed someone until full.\nColloquial: to annoy or tire someone.",
 example:"A: Me harta esperar siempre tanto tiempo.\nB: A mí también. Deberían ser más puntuales.",
 exampleSrc:"A: It sickens me to always wait so long.\nB: Me too. They should be more punctual.",
 funFact:"'Estar harto' (to be fed up) is one of the most common colloquial expressions in Spain."},

{type:"teach",trg:"el fortalecimiento",src:"the strengthening",pos:"noun",gender:"m",
 note:"Masculine noun. The process of becoming stronger.\nFrom fortalecer (to strengthen).",
 example:"A: El fortalecimiento del sistema inmune es fundamental.\nB: Una buena dieta y ejercicio ayudan mucho.",
 exampleSrc:"A: Strengthening the immune system is essential.\nB: A good diet and exercise help a lot.",
 funFact:"Used figuratively for institutions too: 'el fortalecimiento de la democracia' is common in political discourse."},

{type:"teach",trg:"grosero",src:"rude / vulgar",pos:"adj",gender:null,
 note:"Adjective. Lacking manners or refinement.\nFeminine: grosera. Noun: grosería.",
 example:"A: Fue muy grosero con la camarera.\nB: No hay excusa para hablar así a nadie.",
 exampleSrc:"A: He was very rude to the waitress.\nB: There is no excuse for talking to anyone like that.",
 funFact:"From French grossier (coarse). 'Grosería' can mean both rudeness and a rude word/gesture."},

{type:"teach",trg:"horroroso",src:"horrifying / awful",pos:"adj",gender:null,
 note:"Adjective. Causing horror, or extremely bad.\nFeminine: horrorosa. Informal use: terrible quality.",
 example:"A: El tráfico hoy ha sido horroroso.\nB: He tardado dos horas en llegar a casa.",
 exampleSrc:"A: The traffic today was awful.\nB: It took me two hours to get home.",
 funFact:"In everyday Spanish, 'horroroso' is often used hyperbolically for anything mildly unpleasant."},

{type:"mc",q:"¿Qué significa 'humillar'?",opts:["Hacer que alguien se sienta avergonzado","Ser modesto y humilde","Cocinar a fuego lento","Fortalecer el carácter"],ans:"Hacer que alguien se sienta avergonzado",hint:"To make someone feel small, ashamed, or worthless."},

{type:"fb",s:"La {1} de la vida en la montaña forjó su carácter.",a:["dureza"],opts:["dureza","fragilidad","humildad","falsedad"],hint:"The quality of being tough or harsh, from the adjective 'duro'.",sSrc:"The {1} of life in the mountains forged his character."},

{type:"match",pairs:[{trg:"hazaña",src:"feat"},{trg:"humildad",src:"humility"},{trg:"falsedad",src:"falsehood"},{trg:"fraternidad",src:"fraternity"},{trg:"fortalecimiento",src:"strengthening"}]},

{type:"fb",s:"No seas {1}, habla con más educación.",a:["grosero"],opts:["grosero","heroico","hambriento","horroroso"],hint:"A word meaning rude or lacking good manners.",sSrc:"Don't be {1}, speak more politely."},

{type:"mc",q:"¿Qué expresa 'estar harto'?",opts:["Estar muy cansado de algo","Tener mucha hambre","Sentirse heroico","Ser muy grosero"],ans:"Estar muy cansado de algo",hint:"Think about being completely fed up, tired, or sick of something."}
]};

export default LESSON_5;
