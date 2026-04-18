// Batch 8 — Unit 24 extra lesson. If-Clauses: Regrets & Missed Opportunities
const BATCH8_L1 = {id:"itv2_u24l_b8_1", title:"Rimpianti e occasioni", icon:"⏳", xp:15, board:true, steps:[
{type:"intro", title:"Rimpianti e occasioni",
 desc:"Learn to express regrets, missed opportunities, and unrealized possibilities using conditional structures.",
 goals:["Express regrets about the past","Discuss missed opportunities","Use past conditional and subjunctive together"]},

{type:"teach", trg:"l'occasione", src:"the opportunity / occasion", pos:"noun", gender:"f",
 note:"Feminine noun. 'Cogliere l'occasione' = to seize the opportunity.\n'L'occasione fa l'uomo ladro' = opportunity makes the thief.",
 example:"A: Ho perso un'occasione importante.\nB: Non preoccuparti, ne arriveranno altre.",
 exampleSrc:"A: I missed an important opportunity.\nB: Do not worry, others will come.",
 funFact:"'L'occasione fa l'uomo ladro' (opportunity makes the thief) is a classic Italian proverb. It means temptation can corrupt anyone when the circumstances are right."},

{type:"teach", trg:"pentirsi", src:"to regret / to repent", pos:"verb", gender:null,
 note:"Reflexive verb. Past: mi sono pentito/a.\n'Il pentimento' = repentance/regret.",
 example:"A: Mi sono pentito di non aver studiato.\nB: Non e mai troppo tardi per ricominciare.",
 exampleSrc:"A: I regretted not having studied.\nB: It is never too late to start again.",
 funFact:"'Pentirsi' has religious roots (repentance) but is used casually. 'Te ne pentirai!' (you will regret it!) is a dramatic threat in Italian films and family arguments."},

{type:"teach", trg:"sprecare", src:"to waste", pos:"verb", gender:null,
 note:"Regular -are verb. 'Lo spreco' = the waste.\n'Sprecare tempo/soldi/cibo' = waste time/money/food.",
 example:"A: Non sprecare questa opportunita!\nB: Hai ragione, devo agire ora.",
 exampleSrc:"A: Do not waste this opportunity!\nB: You are right, I must act now.",
 funFact:"'Spreco alimentare' (food waste) is a hot topic in Italy. A 2016 law encourages businesses to donate unsold food. Wasting food is deeply offensive in Italian culture."},

{type:"teach", trg:"il destino", src:"the destiny / fate", pos:"noun", gender:"m",
 note:"Masculine noun. 'Il destino ha voluto che...' = fate wanted that...\n'Destinato a' = destined to.",
 example:"A: Credi nel destino?\nB: Un po'. Certi incontri non sono casuali.",
 exampleSrc:"A: Do you believe in destiny?\nB: A little. Certain encounters are not accidental.",
 funFact:"Italians have a complex relationship with 'il destino.' Catholic fatalism blends with Mediterranean superstition. 'Era destino' (it was destiny) explains both good and bad luck."},

{type:"teach", trg:"la conseguenza", src:"the consequence", pos:"noun", gender:"f",
 note:"Feminine noun. 'Di conseguenza' = consequently.\n'Subire le conseguenze' = to suffer the consequences.",
 example:"A: Ogni scelta ha le sue conseguenze.\nB: Per questo bisogna pensarci bene.",
 exampleSrc:"A: Every choice has its consequences.\nB: That is why you need to think carefully.",
 funFact:"'Di conseguenza' is a key connector in formal Italian writing and speeches. It is the equivalent of 'therefore' or 'consequently' and sounds very polished."},

{type:"teach", trg:"il rimorso", src:"the remorse", pos:"noun", gender:"m",
 note:"Masculine noun. 'Avere rimorso' = to feel remorse.\nStronger than 'rimpianto' (regret).",
 example:"A: Non ho rimorsi per la mia decisione.\nB: Allora hai fatto la scelta giusta.",
 exampleSrc:"A: I have no remorse for my decision.\nB: Then you made the right choice.",
 funFact:"Italian distinguishes 'rimpianto' (wishing things were different) from 'rimorso' (guilt for wrongdoing). Rimpianto is wistful, rimorso is painful."},

{type:"teach", trg:"l'imprevisto", src:"the unforeseen event", pos:"noun", gender:"m",
 note:"Masculine noun. 'Un imprevisto' = an unexpected event.\n'Imprevedibile' = unpredictable.",
 example:"A: C'e stato un imprevisto, non posso venire.\nB: Che peccato, sara per un'altra volta.",
 exampleSrc:"A: Something unexpected came up, I cannot come.\nB: What a pity, next time then.",
 funFact:"'Un imprevisto' is the universal Italian excuse for cancellations. It covers everything from real emergencies to simply not wanting to go. Polite and wonderfully vague."},

{type:"teach", trg:"la svolta", src:"the turning point", pos:"noun", gender:"f",
 note:"Feminine noun. 'Svoltare' = to turn (a corner).\n'Una svolta decisiva' = a decisive turning point.",
 example:"A: Quell'incontro e stato la svolta della mia vita.\nB: A volte basta un momento.",
 exampleSrc:"A: That meeting was the turning point of my life.\nB: Sometimes one moment is enough.",
 funFact:"'Dare una svolta' (to give a turn) means to change direction in life. Young Italians often use 'svoltare' colloquially for any positive breakthrough."},

{type:"teach", trg:"il bivio", src:"the crossroads / fork in the road", pos:"noun", gender:"m",
 note:"Masculine noun. 'Essere a un bivio' = to be at a crossroads.\nFrom Latin 'bi' (two) + 'via' (road).",
 example:"A: Sono a un bivio: restare o partire?\nB: Ascolta il tuo cuore.",
 exampleSrc:"A: I am at a crossroads: stay or leave?\nB: Listen to your heart.",
 funFact:"'Bivio' is used both literally (a road fork) and figuratively (a life decision). The related word 'trivio' (three roads) gives us 'trivial' (common, from what everyone discussed at crossroads)."},

{type:"mc",
 q:"What is the difference between 'rimpianto' and 'rimorso'?",
 opts:["Rimpianto is wistful wishing, rimorso is guilt for wrongdoing","They mean the same thing","Rimpianto is stronger","Rimorso is positive"],
 ans:"Rimpianto is wistful wishing, rimorso is guilt for wrongdoing",
 hint:"One is about w... things had been different. The other is about feeling guilty for something you did wrong."},

{type:"match", pairs:[
  {trg:"pentirsi", src:"to regret"},
  {trg:"sprecare", src:"to waste"},
  {trg:"la svolta", src:"the turning point"},
  {trg:"il bivio", src:"the crossroads"}
]},

{type:"fb",
 s:"C'e stato un {1}, non posso venire stasera.",
 a:["imprevisto"],
 opts:["imprevisto","destino","rimorso","bivio"],
 hint:"Something unexpected happened. This polite excuse works for any last-minute cancellation.",
 sSrc:"Something {1} came up, I cannot come tonight."},

{type:"mc",
 q:"What does 'l'occasione fa l'uomo ladro' mean?",
 opts:["Opportunity makes the thief (temptation can corrupt anyone)","Thieves create opportunities","Crime never pays","Always lock your doors"],
 ans:"Opportunity makes the thief (temptation can corrupt anyone)",
 hint:"This proverb says that even honest people can be tempted when the right circumstances arise."},

{type:"fb",
 s:"Quell'incontro e stato la {1} della mia vita.",
 a:["svolta"],
 opts:["svolta","conseguenza","occasione","bivio"],
 hint:"This word means a turning point. After that moment, everything changed direction.",
 sSrc:"That meeting was the {1} of my life."},

{type:"mc",
 q:"What word gives us 'trivial' through the concept of a three-road crossroads?",
 opts:["Trivio","Bivio","Quadrivio","Via"],
 ans:"Trivio",
 hint:"Three roads meeting at a point. Common things discussed there by passersby became 'trivial' (ordinary)."}
,{type:"match",pairs:[{trg:"il destino",src:"the destiny / fate"},{trg:"la conseguenza",src:"the consequence"},{trg:"il rimorso",src:"the remorse"}]},{type:"mc",q:"How do you say \"opportunity / occasion\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'occasione"],ans:"l'occasione",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
