// B2 Gap Batch 4 Lesson 04 - Emotions & Character
const LESSON_4 = {id:"esv2_b2g4_l4",title:"Emociones y carácter",icon:"💭",xp:15,board:true,steps:[
{type:"intro",title:"Emociones y carácter",desc:"Express complex emotions and describe personality traits with advanced vocabulary.",goals:["Learn 15 emotion and character words","Describe people's personalities in depth","Discuss abstract emotional states"]},

{type:"teach",trg:"entusiasta",src:"enthusiastic / enthusiast",pos:"adj",gender:null,
 note:"Adjective or noun. Showing great excitement.\nInvariant form for both genders as adjective.",
 example:"A: Es una profesora muy entusiasta.\nB: Se nota que le apasiona su trabajo.",
 exampleSrc:"A: She is a very enthusiastic teacher.\nB: You can tell she is passionate about her work.",
 funFact:"From Greek enthousiastes (inspired by a god). Used as both adjective and noun in Spanish."},

{type:"teach",trg:"enérgico",src:"energetic / forceful",pos:"adj",gender:null,
 note:"Adjective. Full of energy or strength.\nFeminine: enérgica.",
 example:"A: El entrenador dio un discurso muy enérgico.\nB: El equipo salió al campo con ganas de ganar.",
 exampleSrc:"A: The coach gave a very energetic speech.\nB: The team went onto the field eager to win.",
 funFact:"From Greek energeia (activity). An 'enérgica protesta' is a forceful protest in news Spanish."},

{type:"teach",trg:"envidiable",src:"enviable",pos:"adj",gender:null,
 note:"Adjective. Worth envying, desirable.\nFrom envidia (envy).",
 example:"A: Tiene una salud envidiable para su edad.\nB: Hace ejercicio todos los días sin excepción.",
 exampleSrc:"A: She has enviable health for her age.\nB: She exercises every day without exception.",
 funFact:"'En una posición envidiable' is the standard expression for being in an enviable position."},

{type:"teach",trg:"espeluznante",src:"terrifying / hair-raising",pos:"adj",gender:null,
 note:"Adjective. So scary it makes your hair stand on end.\nFrom espeluznar (to make hair bristle).",
 example:"A: La película fue absolutamente espeluznante.\nB: No pude dormir en toda la noche.",
 exampleSrc:"A: The movie was absolutely terrifying.\nB: I could not sleep all night.",
 funFact:"Literally 'hair-raising', from pelo (hair). A vivid, visceral Spanish word for deep horror."},

{type:"teach",trg:"la extrañeza",src:"the strangeness / surprise",pos:"noun",gender:"f",
 note:"Feminine noun. The feeling of something being odd.\nAlso: causar extrañeza (to cause surprise).",
 example:"A: Su reacción me causó mucha extrañeza.\nB: A mí también. No es normal en ella.",
 exampleSrc:"A: Her reaction caused me great surprise.\nB: Me too. It is not normal for her.",
 funFact:"From extraño (strange). 'Causar extrañeza' is more formal than 'sorprender'."},

{type:"mc",q:"¿Qué significa 'espeluznante'?",opts:["Que causa mucho miedo","Que es muy divertido","Que resulta aburrido","Que provoca tristeza"],ans:"Que causa mucho miedo",hint:"Think about a horror movie that makes your hair stand on end."},

{type:"teach",trg:"la debilidad",src:"the weakness",pos:"noun",gender:"f",
 note:"Feminine noun. A lack of strength or a fondness.\nAlso: tener debilidad por (to have a weakness for).",
 example:"A: El chocolate es mi mayor debilidad.\nB: A mí me pasa lo mismo con el queso.",
 exampleSrc:"A: Chocolate is my greatest weakness.\nB: The same thing happens to me with cheese.",
 funFact:"'Tener debilidad por alguien' means to have a soft spot for someone. Very common idiom."},

{type:"teach",trg:"la devoción",src:"the devotion",pos:"noun",gender:"f",
 note:"Feminine noun. Deep love, loyalty, or religious dedication.\nPlural: devociones.",
 example:"A: Siente una enorme devoción por sus abuelos.\nB: Los visita todas las semanas sin falta.",
 exampleSrc:"A: He feels an enormous devotion for his grandparents.\nB: He visits them every week without fail.",
 funFact:"In Spain, 'devociones' often refers to religious practices like praying to patron saints."},

{type:"teach",trg:"el escrúpulo",src:"the scruple / qualm",pos:"noun",gender:"m",
 note:"Masculine noun. A moral doubt or hesitation.\nOften plural: sin escrúpulos (unscrupulous).",
 example:"A: Actuó sin ningún escrúpulo.\nB: No le importó el daño que causaba a los demás.",
 exampleSrc:"A: He acted without any scruples.\nB: He did not care about the harm he caused to others.",
 funFact:"From Latin scrupulus (small sharp stone). Moral discomfort was likened to a pebble in your shoe."},

{type:"teach",trg:"la evocación",src:"the evocation / recollection",pos:"noun",gender:"f",
 note:"Feminine noun. Calling up memories or feelings.\nVerb: evocar.",
 example:"A: Esta canción me produce una evocación muy fuerte.\nB: ¿Te recuerda a tu infancia?",
 exampleSrc:"A: This song produces a very strong evocation in me.\nB: Does it remind you of your childhood?",
 funFact:"From Latin evocare (to call out). 'Evocar' in literature means to conjure vivid imagery."},

{type:"fb",s:"Actuaron sin ningún {1} moral.",a:["escrúpulo"],opts:["escrúpulo","entusiasmo","debilidad","extrañeza"],hint:"A moral doubt or hesitation about doing something wrong.",sSrc:"They acted without any moral {1}."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem bigger than it is.\nVerb: exagerar.",
 example:"A: Decir que es el mejor restaurante del mundo es una exageración.\nB: Bueno, pero está muy rico.",
 exampleSrc:"A: Saying it is the best restaurant in the world is an exaggeration.\nB: Well, but it is very tasty.",
 funFact:"Spaniards are known for expressive language. 'No exageres' (do not exaggerate) is said daily."},

{type:"teach",trg:"exaltar",src:"to exalt / to get agitated",pos:"verb",gender:null,
 note:"Regular -ar verb. To praise highly or to become upset.\nReflexive: exaltarse (to get worked up).",
 example:"A: No te exaltes, podemos hablarlo con calma.\nB: Tienes razón, estoy perdiendo los nervios.",
 exampleSrc:"A: Do not get worked up, we can discuss it calmly.\nB: You are right, I am losing my temper.",
 funFact:"'Exaltarse' is the go-to word when someone gets overly heated in a Spanish argument."},

{type:"teach",trg:"extenuante",src:"exhausting",pos:"adj",gender:null,
 note:"Adjective. Extremely tiring.\nSynonym: agotador.",
 example:"A: La mudanza fue extenuante.\nB: Necesito un fin de semana entero para recuperarme.",
 exampleSrc:"A: The move was exhausting.\nB: I need an entire weekend to recover.",
 funFact:"From Latin extenuare (to thin out). Being 'thinned out' by effort became meaning 'exhausted'."},

{type:"mc",q:"Si alguien actúa 'sin escrúpulos', significa que:",opts:["No tiene moral ni remordimientos","Es muy tímido","Tiene mucha energía","Se esfuerza mucho"],ans:"No tiene moral ni remordimientos",hint:"Think about someone who has no moral doubts about their actions."},

{type:"teach",trg:"el elogio",src:"the praise / compliment",pos:"noun",gender:"m",
 note:"Masculine noun. Words of admiration or approval.\nVerb: elogiar. Plural: elogios.",
 example:"A: El director dedicó muchos elogios al equipo.\nB: Se lo merecían. Trabajaron muy duro.",
 exampleSrc:"A: The director gave many praises to the team.\nB: They deserved it. They worked very hard.",
 funFact:"From Latin elogium. A 'discurso de elogio' is a formal speech of praise, like a eulogy."},

{type:"fb",s:"El público dedicó grandes {1} a la actriz.",a:["elogios"],opts:["elogios","escrúpulos","debilidades","extrañezas"],hint:"Words of admiration and approval for someone's performance.",sSrc:"The audience gave great {1} to the actress."},

{type:"match",pairs:[{trg:"entusiasta",src:"enthusiastic"},{trg:"espeluznante",src:"terrifying"},{trg:"debilidad",src:"weakness"},{trg:"elogio",src:"praise"},{trg:"devoción",src:"devotion"}]},

{type:"mc",q:"¿Qué significa 'extenuante'?",opts:["Extremadamente cansado","Muy divertido","Bastante fácil","Poco interesante"],ans:"Extremadamente cansado",hint:"Think about an activity that leaves you completely drained of energy."},

{type:"fb",s:"Su reacción me causó gran {1}.",a:["extrañeza"],opts:["extrañeza","exageración","evocación","devoción"],hint:"The feeling of something being odd or surprising.",sSrc:"His reaction caused me great {1}."}
]};

export default LESSON_4;
