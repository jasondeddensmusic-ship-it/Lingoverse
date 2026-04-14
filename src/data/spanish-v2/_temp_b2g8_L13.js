// B2 Gap Batch 8 Lesson 13 - Psychology & Behavior
const LESSON_13 = {id:"esv2_b2g8_l13",title:"Psicología y conducta",icon:"🧠",xp:15,board:true,steps:[
{type:"intro",title:"Psicología y conducta",desc:"Master vocabulary for discussing personality, mental states, and human behavior patterns.",goals:["Learn 14 psychology and behavior terms","Describe mental states precisely","Use psychological vocabulary in context"]},

{type:"teach",trg:"la inconveniencia",src:"the inconvenience / impropriety",pos:"noun",gender:"f",
 note:"Feminine noun. Something inappropriate, or a disadvantage.\nFrom inconveniente (inconvenient).",
 example:"A: Perdona la inconveniencia de llamarte tan tarde.\nB: No te preocupes, todavía estaba despierto.",
 exampleSrc:"A: Sorry for the inconvenience of calling you so late.\nB: Do not worry, I was still awake.",
 funFact:"'Inconveniencia' can mean both a practical nuisance and a social faux pas, depending on context."},

{type:"teach",trg:"la irrealidad",src:"the unreality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of seeming unreal or dreamlike.\nIr- (not) + realidad.",
 example:"A: Había una sensación de irrealidad cuando anunciaron la noticia.\nB: Nadie podía creer lo que estaba pasando.",
 exampleSrc:"A: There was a feeling of unreality when they announced the news.\nB: Nobody could believe what was happening.",
 funFact:"In psychology, 'desrealización' is a clinical condition where the world feels permanently unreal."},

{type:"teach",trg:"lerdo",src:"slow-witted / clumsy",pos:"adj",gender:null,
 note:"Adjective. Slow to understand or react.\nMasculine: lerdo, feminine: lerda. Somewhat informal.",
 example:"A: No seas lerdo, la respuesta es obvia.\nB: Perdona, hoy no me concentro bien.",
 exampleSrc:"A: Do not be slow, the answer is obvious.\nB: Sorry, I cannot concentrate well today.",
 funFact:"Originally meant 'heavy, sluggish' (from Latin lurdus). Now mainly used for mental slowness."},

{type:"teach",trg:"la maña",src:"the skill / knack / trick",pos:"noun",gender:"f",
 note:"Feminine noun. A clever ability or trick for doing something.\nDarse maña = to manage skillfully.",
 example:"A: Tiene mucha maña para arreglar cosas.\nB: Sí, puede reparar cualquier aparato.",
 exampleSrc:"A: He has a real knack for fixing things.\nB: Yes, he can repair any device.",
 funFact:"'Mañoso' means handy or clever with hands. In some regions, 'maña' can also mean a bad habit."},

{type:"mc",q:"Si alguien tiene 'maña' para la cocina, ¿qué significa?",
 opts:["Que cocina con habilidad natural","Que cocina muy mal","Que no le gusta cocinar","Que come mucho"],
 ans:"Que cocina con habilidad natural",
 hint:"A natural ability or knack for doing something well. Think of skillfulness."},

{type:"teach",trg:"incomprendido",src:"misunderstood",pos:"adj",gender:null,
 note:"Adjective. Not understood or appreciated by others.\nAlso used as a noun: el/la incomprendido/a.",
 example:"A: Muchos artistas se sienten incomprendidos en su época.\nB: La sociedad a veces tarda en valorar la genialidad.",
 exampleSrc:"A: Many artists feel misunderstood in their time.\nB: Society sometimes takes a while to appreciate genius.",
 funFact:"The 'artista incomprendido' (misunderstood artist) is a powerful archetype in Spanish Romantic literature."},

{type:"teach",trg:"la mediocridad",src:"the mediocrity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being average or uninspired.\nFrom mediocre + -idad.",
 example:"A: No nos conformamos con la mediocridad.\nB: Bien dicho. Siempre hay que aspirar a más.",
 exampleSrc:"A: We do not settle for mediocrity.\nB: Well said. One must always aspire to more.",
 funFact:"In Golden Age Spain, 'mediocridad' had a positive sense: the golden mean, moderation. Now it is negative."},

{type:"teach",trg:"la materialidad",src:"the materiality / physicality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being physical or tangible.\nFrom material + -idad.",
 example:"A: La materialidad de la escultura es parte de su belleza.\nB: El mármol tiene una textura única.",
 exampleSrc:"A: The materiality of the sculpture is part of its beauty.\nB: Marble has a unique texture.",
 funFact:"In accounting, 'materialidad' means significance: an error is 'material' if it affects financial decisions."},

{type:"fb",s:"Muchos genios fueron {1} durante su vida y solo reconocidos después.",
 a:["incomprendidos"],opts:["incomprendidos","lerdos","macabros","mayoritarios"],
 hint:"Not understood or appreciated by the people around them. A common fate for artists.",
 sSrc:"Many geniuses were {1} during their lifetime and only recognized afterwards."},

{type:"teach",trg:"la fechoría",src:"the misdeed / prank",pos:"noun",gender:"f",
 note:"Feminine noun. A bad or mischievous action.\nFrom hecho (deed) with pejorative suffix.",
 example:"A: Las fechorías de los niños enfadaron a los vecinos.\nB: Rompieron tres farolas jugando al fútbol.",
 exampleSrc:"A: The children's misdeeds angered the neighbors.\nB: They broke three street lamps playing football.",
 funFact:"'Fechoría' implies something naughty or criminal. In literature, it describes a rogue's adventures."},

{type:"teach",trg:"la impureza",src:"the impurity",pos:"noun",gender:"f",
 note:"Feminine noun. Something that contaminates or is not pure.\nIm- (not) + pureza (purity).",
 example:"A: El agua tiene impurezas que el filtro elimina.\nB: Por eso es mejor no beber agua del grifo sin filtrar.",
 exampleSrc:"A: The water has impurities that the filter removes.\nB: That is why it is better not to drink unfiltered tap water.",
 funFact:"The suffix -eza creates feminine abstract nouns: puro > pureza, impuro > impureza, bello > belleza."},

{type:"teach",trg:"el infierno",src:"the hell / inferno",pos:"noun",gender:"m",
 note:"Masculine noun. The underworld in religion, or any terrible situation.\nFrom Latin infernum.",
 example:"A: El tráfico en Madrid es un infierno en hora punta.\nB: Por eso prefiero ir en metro.",
 exampleSrc:"A: Traffic in Madrid is hell during rush hour.\nB: That is why I prefer to take the metro.",
 funFact:"'Hacer la vida un infierno' (to make life hell) is a very common expression in everyday Spanish."},

{type:"mc",q:"¿Qué son las 'fechorías' de un niño travieso?",
 opts:["Sus travesuras y malas acciones","Sus buenas notas","Sus amigos del colegio","Sus juguetes favoritos"],
 ans:"Sus travesuras y malas acciones",
 hint:"Naughty actions or misdeeds, especially by children. Think mischief."},

{type:"teach",trg:"la interconexión",src:"the interconnection",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being connected to each other.\nInter- (between) + conexión.",
 example:"A: La interconexión entre economía y medioambiente es evidente.\nB: Lo que afecta a uno afecta al otro.",
 exampleSrc:"A: The interconnection between economy and environment is evident.\nB: What affects one affects the other.",
 funFact:"In tech Spanish, 'interconexión de redes' (network interconnection) is a key telecommunications concept."},

{type:"teach",trg:"el infinito",src:"the infinity / the infinite",pos:"noun",gender:"m",
 note:"Masculine noun. That which has no end or limit.\nAlso an adjective: posibilidades infinitas.",
 example:"A: Las posibilidades de internet parecen infinitas.\nB: Pero también los riesgos que trae consigo.",
 exampleSrc:"A: The possibilities of the internet seem infinite.\nB: But also the risks it brings with it.",
 funFact:"In mathematics, the infinity symbol was invented in 1655. In Spanish philosophy, 'el infinito' is a core concept."},

{type:"fb",s:"Las {1} del bandido legendario se contaban por toda la región.",
 a:["fechorías"],opts:["fechorías","impurezas","inconveniencias","mediocridades"],
 hint:"Criminal or mischievous deeds committed by a wrongdoer. Think adventures of a rogue.",
 sSrc:"The legendary bandit's {1} were told throughout the region."},

{type:"match",pairs:[
 {trg:"la irrealidad",src:"unreality"},
 {trg:"la maña",src:"knack / skill"},
 {trg:"la mediocridad",src:"mediocrity"},
 {trg:"el infierno",src:"hell / inferno"},
 {trg:"el infinito",src:"infinity"}
]}
]};
export default LESSON_13;
