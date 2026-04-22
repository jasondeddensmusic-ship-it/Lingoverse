// B2 Gap Batch D Lesson 11 - Nature & Geography
const LESSON_11 = {id:"esv2_b2gD_l11",title:"Naturaleza y geografía",icon:"\uD83C\uDF3F",xp:15,board:true,steps:[
{type:"intro",title:"Naturaleza y geografía",desc:"Explore vocabulary for plants, animals, landscapes, and geographical features of the Spanish-speaking world.",goals:["Learn 10 nature and geography vocabulary items","Describe landscapes and natural features","Discuss environmental topics with accuracy"]},

{type:"teach",trg:"la cobra",src:"the cobra",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous hooded snake.\nNot native to Spain but well known worldwide.",
 example:"A: La cobra real puede alcanzar los cinco metros de largo.\nB: Es una de las serpientes más peligrosas del mundo.",
 exampleSrc:"A: The king cobra can reach five meters in length.\nB: It's one of the most dangerous snakes in the world.",
 funFact:"'Cobra' entered Spanish from Portuguese, which got it from Latin 'colubra' (snake). In slang, 'hacer una cobra' means to dodge a kiss."},

{type:"teach",trg:"el montañista",src:"the mountaineer / climber",pos:"noun",gender:"m",
 note:"Masculine/feminine (el/la montañista).\nFrom montaña (mountain) + -ista (practitioner).",
 example:"A: Los montañistas alcanzaron la cumbre después de seis horas.\nB: La vista desde arriba era impresionante.",
 exampleSrc:"A: The mountaineers reached the summit after six hours.\nB: The view from the top was stunning.",
 funFact:"Spain has a strong mountaineering tradition. The Picos de Europa and the Pyrenees attract thousands of montañistas each year."},

{type:"teach",trg:"la olmeda",src:"the elm grove",pos:"noun",gender:"f",
 note:"Feminine noun. A group of elm trees.\nFrom olmo (elm) + -eda (collection suffix).",
 example:"A: La olmeda del parque fue destruida por una plaga de grafiosis.\nB: Están replantando con especies resistentes.",
 exampleSrc:"A: The elm grove in the park was destroyed by Dutch elm disease.\nB: They're replanting with resistant species.",
 funFact:"Dutch elm disease devastated Spain's olmedas in the 1980s. Machado's famous poem about the old elm inspired conservation efforts."},

{type:"teach",trg:"la ondulación",src:"the undulation / wave",pos:"noun",gender:"f",
 note:"Feminine noun. A gentle wave-like movement or shape.\nFrom ondular (to undulate).",
 example:"A: Las ondulaciones del terreno hacían difícil el camino.\nB: Pero el paisaje de colinas verdes era precioso.",
 exampleSrc:"A: The undulations of the terrain made the path difficult.\nB: But the landscape of green hills was beautiful.",
 funFact:"In hairdressing, 'ondulación permanente' (permanent wave) is the full name for a perm. Shortened to 'permanente'."},

{type:"mc",q:"Una olmeda es un grupo de...",opts:["Olmos","Olivos","Robles","Pinos"],ans:"Olmos",hint:"The suffix -eda indicates a collection of trees. The root is 'olmo' (elm tree)."},

{type:"teach",trg:"la malaquita",src:"the malachite",pos:"noun",gender:"f",
 note:"Feminine noun. A green mineral used in jewelry.\nCopper carbonate with distinctive banded pattern.",
 example:"A: Este collar de malaquita tiene un verde precioso.\nB: Es una piedra que se ha usado desde la antigüedad.",
 exampleSrc:"A: This malachite necklace has a beautiful green.\nB: It's a stone that has been used since ancient times.",
 funFact:"The word comes from Greek 'malache' (mallow plant), because the stone's green resembles mallow leaves."},

{type:"teach",trg:"el leño",src:"the log / piece of firewood",pos:"noun",gender:"m",
 note:"Masculine noun. A piece of wood, especially for burning.\nRelated to leña (firewood).",
 example:"A: Pon otro leño en la chimenea, se está apagando el fuego.\nB: Quedan pocos, mañana hay que ir a por más.",
 exampleSrc:"A: Put another log on the fireplace, the fire is going out.\nB: There are few left, tomorrow we need to get more.",
 funFact:"'Dormir como un leño' (sleep like a log) exists in both Spanish and English. 'Leña' (firewood) comes from the same Latin root 'lignum'."},

{type:"teach",trg:"la peste",src:"the plague / stench",pos:"noun",gender:"f",
 note:"Feminine noun. A deadly epidemic disease.\nAlso: a terrible smell. 'Huele a peste'.",
 example:"A: La peste negra devastó Europa en el siglo XIV.\nB: Se estima que murió un tercio de la población.",
 exampleSrc:"A: The Black Plague devastated Europe in the 14th century.\nB: It's estimated that a third of the population died.",
 funFact:"'Hablar pestes de alguien' (to speak plagues of someone) means to badmouth them. A very common colloquial expression."},

{type:"fb",s:"Los {1} alcanzaron la cumbre tras una escalada de ocho horas.",a:["montañistas"],opts:["montañistas","patriotas","negociadores","conductores"],hint:"People who climb mountains as a sport or profession.",sSrc:"The {1} reached the summit after an eight-hour climb."},

{type:"teach",trg:"la paradoja",src:"the paradox",pos:"noun",gender:"f",
 note:"Feminine noun. A contradictory statement that contains truth.\nFrom Greek para (against) + doxa (opinion).",
 example:"A: Es una paradoja que cuanto más sabemos, más dudamos.\nB: La incertidumbre es parte del conocimiento.",
 exampleSrc:"A: It's a paradox that the more we know, the more we doubt.\nB: Uncertainty is part of knowledge.",
 funFact:"The 'paradoja del mentiroso' (liar's paradox) fascinated Spanish Golden Age writers, especially in philosophical theater."},

{type:"teach",trg:"el pelotón",src:"the platoon / peloton / firing squad",pos:"noun",gender:"m",
 note:"Masculine noun. A military unit, or the main group in cycling.\nAugmentative of pelota (ball).",
 example:"A: El pelotón de ciclistas avanzaba por la carretera de montaña.\nB: Quedaban solo veinte kilómetros para la meta.",
 exampleSrc:"A: The peloton of cyclists advanced along the mountain road.\nB: There were only twenty kilometers to the finish.",
 funFact:"In cycling, 'pelotón' passed into French and English. In military Spanish, 'pelotón de fusilamiento' is the firing squad."},

{type:"match",pairs:[
 {trg:"cobra",src:"cobra"},
 {trg:"olmeda",src:"elm grove"},
 {trg:"leño",src:"log / firewood"},
 {trg:"paradoja",src:"paradox"},
 {trg:"pelotón",src:"platoon / peloton"}
]},

{type:"mc",q:"'Dormir como un leño' significa...",opts:["Dormir al aire libre","Dormir muy profundamente","Dormir en el suelo","Dormir poco tiempo"],ans:"Dormir muy profundamente",hint:"An idiom comparing deep, unmoving sleep to something heavy and wooden."},

{type:"fb",s:"Es una {1} que la tecnología nos conecte y a la vez nos aísle.",a:["paradoja"],opts:["paradoja","ondulación","peste","malaquita"],hint:"A statement that seems contradictory but reveals a deeper truth about the situation.",sSrc:"It's a {1} that technology connects us and at the same time isolates us."},

{type:"mc",q:"La malaquita es...",opts:["Un tipo de arcilla roja","Un metal precioso","Un mineral verde usado en joyería","Una planta medicinal"],ans:"Un mineral verde usado en joyería",hint:"A distinctive banded green stone made of copper carbonate, used decoratively since antiquity."}
]};
export default LESSON_11;
