// B2 Gap Batch 5 Lesson 10 - Deception, Crime & Justice
const LESSON_10 = {id:"esv2_b2g5_l10",title:"Engaño y justicia",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Engaño y justicia",desc:"Learn vocabulary about crime, deception, punishment, and the justice system.",goals:["Learn 15 words about crime and justice","Discuss legal and moral issues","Use formal legal vocabulary"]},

{type:"teach",trg:"la fechoría",src:"the misdeed / wrongdoing",pos:"noun",gender:"f",
 note:"Feminine noun. A wicked or criminal act.\nOften used in plural: fechorías.",
 example:"A: Sus fechorías acabaron por llevarle ante el juez.\nB: No podrá escapar de la justicia esta vez.",
 exampleSrc:"A: His misdeeds ended up bringing him before the judge.\nB: He won't be able to escape justice this time.",
 funFact:"From hecho (deed) + the pejorative suffix -oría. The word implies repeated, habitual wrongdoing."},

{type:"teach",trg:"el apuñalamiento",src:"the stabbing",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stabbing someone.\nFrom apuñalar (to stab), from puñal (dagger).",
 example:"A: La víctima del apuñalamiento está en el hospital.\nB: La policía busca al responsable.",
 exampleSrc:"A: The stabbing victim is in the hospital.\nB: The police are looking for the person responsible.",
 funFact:"From puñal (dagger), which comes from puño (fist). A puñal was the small knife kept at the belt."},

{type:"teach",trg:"la cuchillada",src:"the stab wound / knife slash",pos:"noun",gender:"f",
 note:"Feminine noun. A wound caused by a knife.\nFrom cuchillo (knife).",
 example:"A: La cuchillada le dejó una cicatriz en el brazo.\nB: Tuvo suerte de que no fuera más grave.",
 exampleSrc:"A: The knife wound left a scar on his arm.\nB: He was lucky it wasn't more serious.",
 funFact:"In Golden Age literature, 'cuchilladas' appear constantly as dueling was common among Spanish gentlemen."},

{type:"teach",trg:"el escrúpulo",src:"the scruple / qualm",pos:"noun",gender:"m",
 note:"Masculine noun. A moral doubt or hesitation.\nOften plural: sin escrúpulos (unscrupulous).",
 example:"A: Es un hombre sin escrúpulos.\nB: Haría cualquier cosa por dinero.",
 exampleSrc:"A: He is a man without scruples.\nB: He would do anything for money.",
 funFact:"From Latin scrupulus (small sharp stone in a shoe). A moral irritant you cannot ignore."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem larger or more important than it is.",
 example:"A: Decir que fue un desastre es una exageración.\nB: Bueno, no fue perfecto pero tampoco tan malo.",
 exampleSrc:"A: Saying it was a disaster is an exaggeration.\nB: Well, it wasn't perfect but not that bad either.",
 funFact:"Spaniards are known for expressive exaggeration. 'Es la leche' and 'mola mazo' are everyday hyperboles."},

{type:"mc",q:"¿Qué es una fechoría?",opts:["Una acción malvada o criminal","Una celebración festiva","Un documento legal","Un tipo de castigo"],ans:"Una acción malvada o criminal",hint:"A word for a wicked deed or c... act, often used in the plural."},

{type:"teach",trg:"fulminar",src:"to strike down / to annihilate",pos:"verb",gender:null,
 note:"Regular -ar verb. To destroy with force, like lightning.\nFigurative: to glare at someone.",
 example:"A: Le fulminó con la mirada cuando llegó tarde.\nB: Si las miradas matasen...",
 exampleSrc:"A: She struck him down with a look when he arrived late.\nB: If looks could kill...",
 funFact:"From Latin fulminare (to hurl lightning). 'Fulminar con la mirada' is a wonderfully dramatic expression."},

{type:"teach",trg:"fustigar",src:"to whip / to lash / to criticize harshly",pos:"verb",gender:null,
 note:"Regular -ar verb. Literal: to whip.\nFigurative: to criticize severely.",
 example:"A: La prensa fustigó al gobierno por su inacción.\nB: Los editoriales fueron muy duros.",
 exampleSrc:"A: The press lashed the government for its inaction.\nB: The editorials were very harsh.",
 funFact:"From Latin fustigare (to beat with a stick). In modern use, almost always figurative."},

{type:"teach",trg:"el enredo",src:"the tangle / mess / intrigue",pos:"noun",gender:"m",
 note:"Masculine noun. A complicated or confusing situation.\nAlso: a love affair or scheme.",
 example:"A: Esta historia es un enredo de mentiras.\nB: Nadie sabe ya quién dice la verdad.",
 exampleSrc:"A: This story is a tangle of lies.\nB: Nobody knows anymore who is telling the truth.",
 funFact:"In theater, 'comedia de enredo' is the Spanish equivalent of 'comedy of errors' (intricate plot comedy)."},

{type:"teach",trg:"el degenerado",src:"the degenerate (person)",pos:"noun",gender:"m",
 note:"Masculine noun. A morally corrupt person.\nAlso adjective. Very strong insult.",
 example:"A: Llamarle degenerado es un insulto muy grave.\nB: Sí, hay que tener cuidado con esa palabra.",
 exampleSrc:"A: Calling him a degenerate is a very serious insult.\nB: Yes, you have to be careful with that word.",
 funFact:"From Latin degenerare (to depart from one's kind). The word carries extremely negative moral judgment."},

{type:"fb",s:"Cometió tantas {1} que acabó en la cárcel.",a:["fechorías"],opts:["fechorías","exageraciones","escrúpulos","definiciones"],hint:"Wicked deeds or criminal acts, often used in the plural form.",sSrc:"He committed so many {1} that he ended up in prison."},

{type:"teach",trg:"el garrote",src:"the club / garrote (execution device)",pos:"noun",gender:"m",
 note:"Masculine noun. A thick stick used as a weapon.\nHistorical: execution method by strangulation.",
 example:"A: El garrote vil fue un método de ejecución en España.\nB: Se abolió definitivamente en 1978.",
 exampleSrc:"A: The garrote was a method of execution in Spain.\nB: It was definitively abolished in 1978.",
 funFact:"The last execution by garrote in Spain was in 1974. The 1978 Constitution banned the death penalty."},

{type:"teach",trg:"el descontrol",src:"the lack of control / chaos",pos:"noun",gender:"m",
 note:"Masculine noun. A state of disorder or absence of control.\nPrefix des- negates control.",
 example:"A: Hay un descontrol total en la organización del evento.\nB: Nadie sabe qué tiene que hacer.",
 exampleSrc:"A: There is total chaos in the event organization.\nB: Nobody knows what they have to do.",
 funFact:"Very common in colloquial Spanish. 'Fue un descontrol' describes any situation gone wild."},

{type:"teach",trg:"la desviación",src:"the deviation / detour",pos:"noun",gender:"f",
 note:"Feminine noun. A departure from the norm or expected path.\nAlso: road detour.",
 example:"A: Cualquier desviación del plan debe ser comunicada.\nB: Es importante mantener el control del proyecto.",
 exampleSrc:"A: Any deviation from the plan must be reported.\nB: It is important to maintain project control.",
 funFact:"In statistics, 'desviación estándar' (standard deviation) measures how spread out data points are."},

{type:"teach",trg:"el desperfecto",src:"the damage / defect",pos:"noun",gender:"m",
 note:"Masculine noun. Minor damage or a flaw.\nFrom des- (un-) + perfecto (perfect).",
 example:"A: La tormenta causó desperfectos en varios edificios.\nB: Sobre todo en los tejados y ventanas.",
 exampleSrc:"A: The storm caused damage to several buildings.\nB: Especially to roofs and windows.",
 funFact:"'Sin desperfectos' (without defects) is the standard phrase used when inspecting apartments in Spain."},

{type:"mc",q:"¿Qué significa 'fulminar con la mirada'?",opts:["Mirar a alguien con mucha furia","Cerrar los ojos lentamente","Guiñar un ojo","Mirar con curiosidad"],ans:"Mirar a alguien con mucha furia",hint:"Think about looks that could kill, like being struck by lightning from someone's eyes."},

{type:"fb",s:"La prensa {1} al gobierno por su falta de acción.",a:["fustigó"],opts:["fustigó","fulminó","enredó","exageró"],hint:"To criticize harshly, as if whipping with words.",sSrc:"The press {1} the government for its lack of action."},

{type:"match",pairs:[{trg:"escrúpulo",src:"scruple"},{trg:"enredo",src:"tangle / mess"},{trg:"descontrol",src:"chaos"},{trg:"desperfecto",src:"damage / defect"},{trg:"desviación",src:"deviation"}]},

{type:"fb",s:"La tormenta causó {1} en las fachadas de varios edificios.",a:["desperfectos"],opts:["desperfectos","escrúpulos","enredos","exageraciones"],hint:"Minor damage or flaws, from the opposite of 'perfecto'.",sSrc:"The storm caused {1} to the facades of several buildings."},

{type:"mc",q:"¿Qué es un enredo?",opts:["Una situación confusa y complicada","Un tipo de castigo legal","Una exageración evidente","Un arma antigua"],ans:"Una situación confusa y complicada",hint:"Think about a tangled mess of lies, schemes, or confusing circumstances."}
]};

export default LESSON_10;
