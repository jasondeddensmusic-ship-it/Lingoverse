// B2 Gap2 Lesson 15 - Verbs of Influence & Communication
const LESSON_15 = {id:"esv2_b2g2_l15",title:"Influir y comunicar",icon:"🗣️",xp:15,board:true,steps:[
{type:"intro",title:"Influir y comunicar",desc:"Master verbs of persuasion, verification, and communication essential for advanced Spanish discourse.",goals:["Learn 20 verbs of influence and communication","Express persuasion and verification","Argue and negotiate with precision"]},

{type:"teach",trg:"contradecir",src:"to contradict",pos:"verb",gender:null,
 note:"Irregular: like decir. contradigo, contradices.\nTo say the opposite of what someone claims.",
 example:"A: No me gusta contradecir a mi jefe, pero tenía razón.\nB: A veces hay que hablar aunque sea difícil.",
 exampleSrc:"A: I do not like to contradict my boss, but I was right.\nB: Sometimes you have to speak up even if it is difficult.",
 funFact:"From Latin contradicere. 'Sin contradecir' (without contradicting) is a polite discourse marker."},

{type:"teach",trg:"cotejar",src:"to compare / to cross-check",pos:"verb",gender:null,
 note:"Regular -ar verb. To compare two things carefully to check for matches.",
 example:"A: Hay que cotejar las firmas con el documento original.\nB: Si no coinciden, podría ser un problema muy serio.",
 exampleSrc:"A: We need to cross-check the signatures against the original document.\nB: If they do not match, it could be a very serious problem.",
 funFact:"Common in legal and archival work. 'Cotejo de documentos' is a standard bureaucratic procedure."},

{type:"teach",trg:"achacar",src:"to attribute / to blame on",pos:"verb",gender:null,
 note:"Regular -ar verb. To assign blame or a cause to something.",
 example:"A: Le achacan la derrota al mal tiempo.\nB: Pero en realidad jugaron muy mal.",
 exampleSrc:"A: They blame the defeat on the bad weather.\nB: But in reality they played very poorly.",
 funFact:"From an Arabic root. Often used to deflect blame: 'achacar a otros' (blame it on others)."},

{type:"teach",trg:"deleitar",src:"to delight / to please",pos:"verb",gender:null,
 note:"Regular -ar verb. To give great pleasure.\nReflexive: deleitarse.",
 example:"A: La música de la orquesta deleitó a todos los asistentes.\nB: Fue un concierto inolvidable.",
 exampleSrc:"A: The orchestra's music delighted all the attendees.\nB: It was an unforgettable concert.",
 funFact:"From Latin delectare. More literary than 'encantar'. 'Deleite' (noun) means exquisite pleasure."},

{type:"teach",trg:"degustar",src:"to taste / to savor",pos:"verb",gender:null,
 note:"Regular -ar verb. To taste food or wine with attention and appreciation.",
 example:"A: Ven a degustar los vinos de la Rioja.\nB: Tienen una cata especial este fin de semana.",
 exampleSrc:"A: Come taste the wines of La Rioja.\nB: They have a special tasting this weekend.",
 funFact:"'Degustación' (tasting) is the formal word. Spain's wine culture revolves around degustaciones."},

{type:"mc",q:"¿Qué significa cotejar dos documentos?",opts:["Compararlos cuidadosamente","Destruirlos juntos","Firmarlos a la vez","Guardarlos en un archivo"],ans:"Compararlos cuidadosamente",hint:"Think about carefully checking two versions side by side to see if they match."},

{type:"teach",trg:"decantar",src:"to decant / to lean toward",pos:"verb",gender:null,
 note:"Regular -ar verb. To pour liquid carefully, or to decide in favor of.\nReflexive: decantarse por.",
 example:"A: Al final se decantó por el coche rojo.\nB: Le costó decidirse, pero le convenció el precio.",
 exampleSrc:"A: In the end he opted for the red car.\nB: It was hard to decide, but the price convinced him.",
 funFact:"From wine culture: decantar is to pour wine off its sediment. The figurative sense means to choose."},

{type:"teach",trg:"accionar",src:"to activate / to take action",pos:"verb",gender:null,
 note:"Regular -ar verb. To set something in motion or trigger a mechanism.",
 example:"A: Acciona la palanca para abrir la compuerta.\nB: Ten cuidado, es un mecanismo muy sensible.",
 exampleSrc:"A: Activate the lever to open the gate.\nB: Be careful, it is a very sensitive mechanism.",
 funFact:"From 'acción' (action). In business, 'accionar' can also mean to take legal action."},

{type:"teach",trg:"la aspiración",src:"the aspiration / ambition",pos:"noun",gender:"f",
 note:"Feminine noun. A strong hope or goal for the future.",
 example:"A: Mi mayor aspiración es contribuir a la educación.\nB: Es un objetivo muy noble.",
 exampleSrc:"A: My greatest aspiration is to contribute to education.\nB: That is a very noble goal.",
 funFact:"In phonetics, 'aspiración' means the puff of air in certain sounds. Dual meaning in Spanish."},

{type:"teach",trg:"cosificar",src:"to objectify / to treat as a thing",pos:"verb",gender:null,
 note:"Regular -ar verb. To treat a person as if they were an object.",
 example:"A: La publicidad a veces cosifica a las personas.\nB: Es un debate muy necesario en la sociedad.",
 exampleSrc:"A: Advertising sometimes objectifies people.\nB: It is a very necessary debate in society.",
 funFact:"From 'cosa' (thing). A relatively modern word, born from feminist discourse in Spanish."},

{type:"teach",trg:"coquetear",src:"to flirt",pos:"verb",gender:null,
 note:"Regular -ar verb. To behave amorously without serious intent.",
 example:"A: Estuvieron coqueteando toda la noche en la fiesta.\nB: Se nota que hay química entre ellos.",
 exampleSrc:"A: They were flirting all night at the party.\nB: You can tell there is chemistry between them.",
 funFact:"From French 'coqueter'. Also used figuratively: 'coquetear con una idea' means to toy with an idea."},

{type:"fb",s:"Al final se {1} por la opción más económica.",a:["decantó"],opts:["decantó","deleitó","contradijo","achacó"],hint:"The past tense of the verb meaning to lean toward a choice or opt for something.",sSrc:"In the end he {1} for the most economical option."},

{type:"teach",trg:"apuntalar",src:"to prop up / to shore up",pos:"verb",gender:null,
 note:"Regular -ar verb. To support with beams, or figuratively to reinforce.",
 example:"A: Hay que apuntalar el muro antes de que se derrumbe.\nB: Los ingenieros vendrán mañana.",
 exampleSrc:"A: We need to shore up the wall before it collapses.\nB: The engineers will come tomorrow.",
 funFact:"From 'puntal' (prop/support beam). Figuratively: 'apuntalar la economía' means to prop up the economy."},

{type:"teach",trg:"costear",src:"to fund / to cover the cost of",pos:"verb",gender:null,
 note:"Regular -ar verb. To pay for something.",
 example:"A: ¿Quién va a costear las obras del puente?\nB: El gobierno regional y fondos europeos.",
 exampleSrc:"A: Who is going to fund the bridge works?\nB: The regional government and European funds.",
 funFact:"From 'coste' (cost). Not to be confused with 'costar' (to cost), which is intransitive."},

{type:"teach",trg:"anegar",src:"to flood / to inundate",pos:"verb",gender:null,
 note:"Regular -ar verb. To cover completely with water.",
 example:"A: Las lluvias anegaron las calles del centro.\nB: El agua llegaba hasta las rodillas.",
 exampleSrc:"A: The rains flooded the downtown streets.\nB: The water reached up to the knees.",
 funFact:"More literary than 'inundar'. 'Anegarse en lágrimas' (to be drowned in tears) is poetic."},

{type:"teach",trg:"acurrucar",src:"to curl up / to snuggle",pos:"verb",gender:null,
 note:"Regular -ar verb. To curl up into a cozy ball.\nReflexive: acurrucarse.",
 example:"A: El gato se acurrucó en el sofá junto a la chimenea.\nB: No hay quien lo mueva de ahí en invierno.",
 exampleSrc:"A: The cat curled up on the sofa by the fireplace.\nB: Nobody can move it from there in winter.",
 funFact:"Evokes warmth and comfort. 'Acurrucarse' is one of those cozy Spanish words with no exact English match."},

{type:"mc",q:"¿Qué significa cosificar a alguien?",opts:["Tratarle como si fuera un objeto","Hacerle un regalo","Darle un empleo","Describirle con detalle"],ans:"Tratarle como si fuera un objeto",hint:"Think about reducing a person to the status of a thing, removing their humanity."},

{type:"teach",trg:"abusar",src:"to abuse / to take advantage",pos:"verb",gender:null,
 note:"Regular -ar verb. To use excessively or treat badly.\nOften followed by 'de'.",
 example:"A: No se puede abusar de la confianza de los demás.\nB: Es la forma más rápida de perder amigos.",
 exampleSrc:"A: You cannot abuse other people's trust.\nB: It is the fastest way to lose friends.",
 funFact:"'Abusar de' takes the preposition 'de'. 'Abuso de poder' (abuse of power) is a major legal concept."},

{type:"teach",trg:"abrasar",src:"to burn / to scorch",pos:"verb",gender:null,
 note:"Regular -ar verb. To burn intensely. Not 'abrazar' (to hug).",
 example:"A: El sol de agosto abrasa la piel si no usas protección.\nB: Siempre me pongo crema solar.",
 exampleSrc:"A: The August sun scorches the skin if you do not use protection.\nB: I always put on sunscreen.",
 funFact:"Do not confuse: 'abrasar' (to burn) vs 'abrazar' (to hug). One letter makes a big difference."},

{type:"teach",trg:"dar de alta",src:"to discharge / to register",pos:"verb",gender:null,
 note:"Verbal phrase. To discharge from hospital, or to register for a service.",
 example:"A: Le dieron de alta del hospital esta mañana.\nB: Ya se encuentra mucho mejor.",
 exampleSrc:"A: They discharged him from the hospital this morning.\nB: He is feeling much better now.",
 funFact:"The opposite is 'dar de baja' (to deregister/discharge). Essential for Spanish bureaucracy."},

{type:"teach",trg:"la agrado",src:"the pleasure / liking",pos:"noun",gender:"m",
 note:"Masculine noun. A feeling of pleasure or satisfaction.",
 example:"A: Espero que la cena sea de su agrado.\nB: Todo estuvo delicioso, muchas gracias.",
 exampleSrc:"A: I hope the dinner is to your liking.\nB: Everything was delicious, thank you very much.",
 funFact:"'Ser del agrado de alguien' is a very polite, formal way to ask if someone likes something."},

{type:"fb",s:"Las lluvias torrenciales {1} las calles del barrio antiguo.",a:["anegaron"],opts:["anegaron","abrasaron","acurrucaron","coquetearon"],hint:"The past tense verb meaning to flood or completely cover with water.",sSrc:"The torrential rains {1} the streets of the old neighborhood."},

{type:"match",pairs:[{trg:"contradecir",src:"to contradict"},{trg:"deleitar",src:"to delight"},{trg:"degustar",src:"to taste"},{trg:"abrasar",src:"to scorch"},{trg:"acurrucar",src:"to curl up"}]}
]};

export default LESSON_15;
