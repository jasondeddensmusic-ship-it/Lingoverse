// B2 Gap Batch B Lesson 15 — Character & Personality
const LESSON_15 = {id:"esv2_b2gB_l15",title:"Carácter y personalidad",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Carácter y personalidad",desc:"Learn advanced vocabulary for describing character traits, personality, and human behavior in Spanish.",goals:["Learn 12 words about character and personality","Describe people's qualities and flaws","Use nuanced adjectives and nouns"]},

{type:"teach",trg:"el chato",src:"the snub-nosed person / a small glass (of wine)",pos:"noun",gender:"m",
 note:"Masculine noun/adj. Feminine: chata.\nDescribes a flat or snub nose.\nAlso a small wine glass.",
 example:"A: Ponme un chato de vino tinto, por favor.\nB: Marchando, con unas aceitunas.",
 exampleSrc:"A: Pour me a small glass of red wine, please.\nB: Coming right up, with some olives.",
 funFact:"In Spanish bars, 'un chato' is a small glass of wine. It is also an affectionate nickname."},

{type:"teach",trg:"burro",src:"stubborn / stupid / donkey-like",pos:"adj",gender:null,
 note:"Adjective. Feminine: burra. Informal.\nMeans stubborn or dim-witted. From burro (donkey).",
 example:"A: No seas burro, escucha lo que te digo.\nB: Es que no estoy de acuerdo contigo.",
 exampleSrc:"A: Don't be stubborn, listen to what I'm telling you.\nB: It's just that I don't agree with you.",
 funFact:"'Burro' as an insult is very common in Spain. But 'borriquito' (little donkey) is affectionate."},

{type:"teach",trg:"la desnudez",src:"the nakedness / nudity / bareness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being nude.\nAlso figurative: raw honesty.",
 example:"A: La desnudez en el arte ha generado polémica desde siempre.\nB: Muchas obras maestras representan el cuerpo humano.",
 exampleSrc:"A: Nudity in art has always generated controversy.\nB: Many masterpieces depict the human body.",
 funFact:"The Prado Museum houses some of Europe's most famous nudes, including Goya's 'La maja desnuda'."},

{type:"teach",trg:"la llaneza",src:"the simplicity / naturalness / straightforwardness",pos:"noun",gender:"f",
 note:"Feminine noun. Natural simplicity in manner.\nFrom llano (plain, simple).",
 example:"A: Me gusta la llaneza con la que habla el profesor.\nB: Explica cosas complicadas de forma sencilla.",
 exampleSrc:"A: I like the straightforwardness with which the professor speaks.\nB: He explains complicated things in a simple way.",
 funFact:"Cervantes praised 'llaneza' as a virtue: 'La llaneza, Sancho, es la mejor nobleza' is a famous misquote."},

{type:"mc",q:"¿Qué es 'un chato' en un bar español?",
 opts:["Un vaso pequeño de vino","Una tapa de jamón","Un café cortado","Un zumo de naranja"],
 ans:"Un vaso pequeño de vino",
 hint:"Think about a small, wide glass specifically used for serving wine in traditional Spanish bars."},

{type:"teach",trg:"bienaventurado",src:"blessed / fortunate",pos:"adj",gender:null,
 note:"Adjective. Feminine: bienaventurada.\nLiterally 'well-fortuned'. Religious and literary register.",
 example:"A: Bienaventurados los que trabajan por la paz.\nB: Es una frase del Sermón de la Montaña.",
 exampleSrc:"A: Blessed are those who work for peace.\nB: It is a phrase from the Sermon on the Mount.",
 funFact:"The 'Bienaventuranzas' (Beatitudes) are central to Spanish Catholic tradition and widely quoted."},

{type:"teach",trg:"la impureza",src:"the impurity",pos:"noun",gender:"f",
 note:"Feminine noun. Something that makes another thing unclean.\nPhysical or moral.",
 example:"A: El agua contiene impurezas que hay que filtrar.\nB: Por eso se recomienda usar un filtro en casa.",
 exampleSrc:"A: The water contains impurities that need to be filtered.\nB: That's why using a filter at home is recommended.",
 funFact:"In religious Spanish, 'impureza' traditionally referred to moral or spiritual uncleanness."},

{type:"teach",trg:"la muera",src:"the brine / pickling solution",pos:"noun",gender:"f",
 note:"Feminine noun. A salty solution for preserving.\nAlso: the exclamation 'muera!' (death to!).",
 example:"A: Las aceitunas se conservan en muera durante semanas.\nB: Así adquieren su sabor característico.",
 exampleSrc:"A: Olives are preserved in brine for weeks.\nB: That is how they acquire their characteristic flavor.",
 funFact:"Spain is the world's largest olive producer. Muera (brine) is essential in the curing process."},

{type:"fb",s:"No seas {1}, piensa un poco antes de actuar.",
 a:["burro"],opts:["burro","chato","bienaventurado","ordinario"],
 hint:"An informal adjective meaning stubborn or not thinking, derived from the name of a donkey.",
 sSrc:"Don't be {1}, think a little before acting."},

{type:"teach",trg:"el muermo",src:"the bore / boring person / glanders (animal disease)",pos:"noun",gender:"m",
 note:"Masculine noun. Colloquial: a very boring person or thing.\nOriginally: a horse disease.",
 example:"A: Esta película es un muermo total.\nB: Yo me he dormido a los veinte minutos.",
 exampleSrc:"A: This movie is a total bore.\nB: I fell asleep after twenty minutes.",
 funFact:"Originally a respiratory disease in horses (glanders). The figurative sense of 'boring' is purely colloquial."},

{type:"teach",trg:"el mordisco",src:"the bite",pos:"noun",gender:"m",
 note:"Masculine noun. The act of biting, or the mark left.\nFrom morder (to bite).",
 example:"A: El perro le dio un mordisco en la mano.\nB: Tuvieron que ir a urgencias.",
 exampleSrc:"A: The dog bit him on the hand.\nB: They had to go to the emergency room.",
 funFact:"In colloquial Spanish, 'dar un mordisco' to food means to take a bite, while 'bocado' is the mouthful."},

{type:"teach",trg:"la nobleza",src:"the nobleness / nobility of character",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being noble.\nBoth social class and moral virtue.",
 example:"A: Su nobleza de carácter es admirable.\nB: Siempre trata a todos con respeto.",
 exampleSrc:"A: His nobleness of character is admirable.\nB: He always treats everyone with respect.",
 funFact:"The Spanish saying 'nobleza obliga' (nobility obliges) means high status brings responsibility."},

{type:"mc",q:"¿Qué significa 'muermo' en lenguaje coloquial?",
 opts:["Algo o alguien muy aburrido","Una persona muy alta","Un plato de cocina","Un tipo de música"],
 ans:"Algo o alguien muy aburrido",
 hint:"Think about what you might call a movie that puts you to sleep within minutes."},

{type:"match",pairs:[
 {trg:"burro",src:"stubborn / dim-witted"},
 {trg:"llaneza",src:"straightforwardness"},
 {trg:"muermo",src:"bore / boring person"},
 {trg:"mordisco",src:"bite"},
 {trg:"bienaventurado",src:"blessed"}
]},

{type:"fb",s:"La {1} con la que habla hace que todo parezca fácil.",
 a:["llaneza"],opts:["llaneza","nobleza","impureza","desnudez"],
 hint:"A natural simplicity and straightforwardness in communication.",
 sSrc:"The {1} with which she speaks makes everything seem easy."},

{type:"fb",s:"El agua mineral pasa por filtros para eliminar las {1}.",
 a:["impurezas"],opts:["impurezas","mueras","mordiscos","llanezas"],
 hint:"Unwanted substances mixed into something that should be clean.",
 sSrc:"Mineral water goes through filters to remove {1}."},

]};
export default LESSON_15;
