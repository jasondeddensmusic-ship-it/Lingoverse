// B2 Gap Batch B Lesson 19. Social Issues & Society
const LESSON_19 = {id:"esv2_b2gB_l19",title:"Problemas sociales",icon:"🤲",xp:15,board:true,steps:[
{type:"intro",title:"Problemas sociales",desc:"Learn vocabulary for discussing social issues, inequality, and contemporary challenges in Spanish society.",goals:["Learn 12 words about social issues","Discuss inequality and cultural challenges","Use vocabulary for social analysis"]},

{type:"teach",trg:"el gueto",src:"the ghetto",pos:"noun",gender:"m",
 note:"Masculine noun. An area where a minority is confined.\nAlso figurative: any isolated group.",
 example:"A: Algunas ciudades tienen guetos donde viven comunidades marginadas.\nB: La integración social es un reto pendiente.",
 exampleSrc:"A: Some cities have ghettos where marginalized communities live.\nB: Social integration is a pending challenge.",
 funFact:"From Italian 'ghetto', possibly from the foundry (getto) near Venice's original Jewish quarter."},

{type:"teach",trg:"el infierno",src:"the hell / inferno",pos:"noun",gender:"m",
 note:"Masculine noun. The underworld in religion.\nAlso figurative: a terrible situation.",
 example:"A: El tráfico en hora punta es un infierno.\nB: Tardo más de una hora en llegar al trabajo.",
 exampleSrc:"A: Rush hour traffic is hell.\nB: It takes me more than an hour to get to work.",
 funFact:"Dante's 'Inferno' was hugely influential in Spanish literature. 'Infierno' is commonly used figuratively."},

{type:"teach",trg:"el multimillonario",src:"the multimillionaire",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la multimillonaria.\nA person of extreme wealth.",
 example:"A: El multimillonario donó una parte de su fortuna a la educación.\nB: Financió la construcción de diez colegios.",
 exampleSrc:"A: The multimillionaire donated part of his fortune to education.\nB: He funded the construction of ten schools.",
 funFact:"Spain's wealthiest person, Amancio Ortega (Zara founder), is among the world's top multimillonarios."},

{type:"teach",trg:"el jaque",src:"the check (in chess) / threat",pos:"noun",gender:"m",
 note:"Masculine noun. A chess term.\nFigurative: putting someone in a difficult position.",
 example:"A: La oposición ha puesto en jaque al gobierno con su propuesta.\nB: Ahora tienen que responder públicamente.",
 exampleSrc:"A: The opposition has put the government in check with their proposal.\nB: Now they have to respond publicly.",
 funFact:"From Arabic 'shah' (king). 'Jaque mate' (checkmate) comes from 'shah mat' (the king is dead)."},

{type:"mc",q:"¿De qué idioma viene la palabra 'jaque'?",
 opts:["Del árabe (shah = rey)","Del latín (iactus = lanzamiento)","Del griego (chekos = control)","Del francés (jaque = chaqueta)"],
 ans:"Del árabe (shah = rey)",
 hint:"Think about the game of chess and the Arabic word for 'king' that gives us 'checkmate'."},

{type:"teach",trg:"el escaque",src:"the square (on a chessboard)",pos:"noun",gender:"m",
 note:"Masculine noun. One of the 64 squares on a chessboard.\nFrom Arabic ash-shaq (division).",
 example:"A: El caballo puede saltar a cualquier escaque en forma de L.\nB: Es la pieza más impredecible del ajedrez.",
 exampleSrc:"A: The knight can jump to any square in an L shape.\nB: It is the most unpredictable piece in chess.",
 funFact:"'Escaquearse' (to dodge responsibility) comes from escaque, as if hiding on a chess square."},

{type:"teach",trg:"la baba",src:"the drool / slime / slobber",pos:"noun",gender:"f",
 note:"Feminine noun. Saliva that drips from the mouth.\nAlso: slime from snails.",
 example:"A: Al bebé se le cae la baba cuando le salen los dientes.\nB: Es completamente normal a esa edad.",
 exampleSrc:"A: The baby drools when teething.\nB: It is completely normal at that age.",
 funFact:"'Se le cae la baba' (drooling over) means to be extremely proud or delighted, often about a child."},

{type:"teach",trg:"el mostacho",src:"the mustache (thick/bushy)",pos:"noun",gender:"m",
 note:"Masculine noun. A large, thick mustache.\nMore dramatic than 'bigote'.",
 example:"A: Salvador Dalí era famoso por su extravagante mostacho.\nB: Lo convirtió en su marca personal.",
 exampleSrc:"A: Salvador Dali was famous for his extravagant mustache.\nB: He turned it into his personal trademark.",
 funFact:"'Mostacho' implies a thick, prominent mustache. The standard word 'bigote' is more neutral."},

{type:"fb",s:"La oposición puso en {1} al gobierno con sus preguntas.",
 a:["jaque"],opts:["jaque","escaque","gueto","infierno"],
 hint:"A chess term meaning to challenge or threaten someone's position.",
 sSrc:"The opposition put the government in {1} with their questions."},

{type:"teach",trg:"el mirón",src:"the onlooker / voyeur / peeping tom",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la mirona.\nSomeone who watches excessively. Slightly pejorative.",
 example:"A: Había un grupo de mirones viendo el accidente.\nB: En vez de ayudar, se quedaron mirando.",
 exampleSrc:"A: There was a group of onlookers watching the accident.\nB: Instead of helping, they just stood watching.",
 funFact:"'Mirón' always has a negative connotation: watching when you should act, or watching what is private."},

{type:"teach",trg:"el can",src:"the dog (formal/literary)",pos:"noun",gender:"m",
 note:"Masculine noun. Formal or literary word for dog.\nDaily speech uses 'perro'.",
 example:"A: La ordenanza municipal prohíbe los canes sin correa.\nB: Los dueños deben recoger los excrementos.",
 exampleSrc:"A: The municipal ordinance prohibits unleashed dogs.\nB: Owners must pick up droppings.",
 funFact:"'Can' appears in legal texts and literature. From Latin canis. The Canary Islands are named after dogs."},

{type:"teach",trg:"la cobra",src:"the cobra (snake)",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous hooded snake.\nFrom Portuguese/Latin colubra (snake).",
 example:"A: La cobra real es una de las serpientes más peligrosas.\nB: Su veneno puede ser mortal.",
 exampleSrc:"A: The king cobra is one of the most dangerous snakes.\nB: Its venom can be deadly.",
 funFact:"There are no cobras in Spain, but the word is widely known. Spanish has many snake words from Latin colubra."},

{type:"mc",q:"¿Qué connotación tiene la palabra 'mirón'?",
 opts:["Formal: un investigador profesional","Negativa: alguien que mira cuando no debe","Positiva: alguien observador e inteligente","Neutra: simplemente alguien que mira"],
 ans:"Negativa: alguien que mira cuando no debe",
 hint:"Think about someone who just watches instead of helping, or who peeps at private things."},

{type:"match",pairs:[
 {trg:"gueto",src:"ghetto"},
 {trg:"jaque",src:"check (chess)"},
 {trg:"mirón",src:"onlooker / voyeur"},
 {trg:"can",src:"dog (formal)"},
 {trg:"multimillonario",src:"multimillionaire"}
]},

{type:"fb",s:"En las leyes municipales, los {1} deben ir con correa en los parques.",
 a:["canes"],opts:["canes","cobras","mirones","mostachos"],
 hint:"The formal/legal word for dogs, derived from Latin canis.",
 sSrc:"In municipal laws, {1} must be leashed in parks."},

{type:"fb",s:"El vivir en un {1} social dificulta la integración de los inmigrantes.",
 a:["gueto"],opts:["gueto","infierno","escaque","jaque"],
 hint:"An isolated area where a marginalized community lives apart from mainstream society.",
 sSrc:"Living in a social {1} makes the integration of immigrants difficult."},

]};
export default LESSON_19;
