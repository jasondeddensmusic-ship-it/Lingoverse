// B2 Gap2 Lesson 19 - Verbs of Transformation
const LESSON_19 = {id:"esv2_b2g2_l19",title:"Verbos de transformación",icon:"🔀",xp:15,board:true,steps:[
{type:"intro",title:"Verbos de transformación",desc:"Master verbs that describe physical and emotional transformations, from destruction to creation.",goals:["Learn 20 transformation verbs","Describe changes and processes precisely","Express cause and effect with advanced verbs"]},

{type:"teach",trg:"decaer",src:"to decline / to deteriorate",pos:"verb",gender:null,
 note:"Irregular: conjugates like caer. decaigo, decaes.\nUsed for health, morale, quality declining.",
 example:"A: El ánimo del equipo ha decaído mucho.\nB: Necesitan una victoria para recuperar la confianza.",
 exampleSrc:"A: The team's morale has declined a lot.\nB: They need a victory to regain confidence.",
 funFact:"From de + caer (to fall). 'Decadencia' (decline) and 'decaimiento' (weakening) share this root."},

{type:"teach",trg:"decrecer",src:"to decrease / to shrink",pos:"verb",gender:null,
 note:"Irregular: like crecer. decrezco, decreces.\nTo become smaller in quantity or size.",
 example:"A: Las ventas han decrecido un quince por ciento.\nB: Tenemos que cambiar la estrategia comercial.",
 exampleSrc:"A: Sales have decreased by fifteen percent.\nB: We need to change the business strategy.",
 funFact:"The noun 'decrecimiento' (degrowth) is a major concept in European environmental economics."},

{type:"teach",trg:"degenerar",src:"to degenerate / to worsen",pos:"verb",gender:null,
 note:"Regular -ar verb. To decline in quality, morals, or physical condition.",
 example:"A: La conversación degeneró en insultos.\nB: Tuvimos que parar antes de que fuera a más.",
 exampleSrc:"A: The conversation degenerated into insults.\nB: We had to stop before it got worse.",
 funFact:"From Latin degenerare. 'Enfermedad degenerativa' is the medical term for degenerative disease."},

{type:"teach",trg:"debilitar",src:"to weaken",pos:"verb",gender:null,
 note:"Regular -ar verb. To make weaker.\nReflexive: debilitarse (to become weaker).",
 example:"A: La crisis debilitó las finanzas de muchas familias.\nB: Tardaron años en recuperarse.",
 exampleSrc:"A: The crisis weakened the finances of many families.\nB: It took them years to recover.",
 funFact:"From 'débil' (weak). The opposite pair: debilitar/fortalecer (weaken/strengthen)."},

{type:"teach",trg:"agravar",src:"to aggravate / to make worse",pos:"verb",gender:null,
 note:"Regular -ar verb. To make a bad situation even worse.\nReflexive: agravarse.",
 example:"A: Las lluvias agravaron la situación de los damnificados.\nB: Las carreteras quedaron intransitables.",
 exampleSrc:"A: The rains aggravated the situation of the flood victims.\nB: The roads became impassable.",
 funFact:"In law, an 'agravante' is an aggravating circumstance that increases the severity of a sentence."},

{type:"mc",q:"¿Qué pasa cuando algo se agrava?",opts:["Empeora","Mejora","Se mantiene igual","Desaparece"],ans:"Empeora",hint:"Think about a situation that was already bad getting even worse."},

{type:"teach",trg:"cuajar",src:"to curdle / to take shape",pos:"verb",gender:null,
 note:"Regular -ar verb. To solidify (milk/cheese), or to succeed/materialize.",
 example:"A: El proyecto no cuajó por falta de financiación.\nB: Una lástima, era una buena idea.",
 exampleSrc:"A: The project did not materialize due to lack of funding.\nB: A shame, it was a good idea.",
 funFact:"Literal: milk curdles into cheese. Figurative: ideas 'curdle' into reality. Beautifully versatile."},

{type:"teach",trg:"corromper",src:"to corrupt / to spoil",pos:"verb",gender:null,
 note:"Regular -er verb. To morally degrade, or to rot food.",
 example:"A: El calor puede corromper los alimentos rápidamente.\nB: Guárdalos siempre en la nevera.",
 exampleSrc:"A: Heat can spoil food quickly.\nB: Always keep them in the refrigerator.",
 funFact:"Works for both morals and food. 'Poder corrompe' (power corrupts) is a universal saying."},

{type:"teach",trg:"alarmar",src:"to alarm / to frighten",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause sudden fear or worry.\nReflexive: alarmarse.",
 example:"A: No quiero alarmarte, pero hay un problema con el motor.\nB: ¿Es grave o tiene solución fácil?",
 exampleSrc:"A: I do not want to alarm you, but there is a problem with the engine.\nB: Is it serious or does it have an easy fix?",
 funFact:"From Italian 'all'arme!' (to arms!). The original alarm was a military call to action."},

{type:"teach",trg:"anular",src:"to annul / to void",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something legally or officially invalid.",
 example:"A: Anularon el gol por fuera de juego.\nB: El VAR lo detectó en la repetición.",
 exampleSrc:"A: They annulled the goal for offside.\nB: VAR detected it in the replay.",
 funFact:"From Latin annulare. Used in sports (cancel a goal), law (void a contract), and daily life."},

{type:"teach",trg:"acoplar",src:"to couple / to connect",pos:"verb",gender:null,
 note:"Regular -ar verb. To join two parts together.\nReflexive: acoplarse (to adapt).",
 example:"A: El técnico acopló las dos piezas del motor.\nB: Encajaron perfectamente después del ajuste.",
 exampleSrc:"A: The technician coupled the two engine parts.\nB: They fit perfectly after the adjustment.",
 funFact:"'Acoplamiento' in space means docking. The ISS uses this term in Spanish broadcast coverage."},

{type:"fb",s:"El proyecto no {1} por falta de apoyo institucional.",a:["cuajó"],opts:["cuajó","corrompió","alarmó","anuló"],hint:"The verb meaning to take shape, materialize, or succeed. Comes from cheesemaking.",sSrc:"The project did not {1} due to lack of institutional support."},

{type:"teach",trg:"captar",src:"to capture / to attract",pos:"verb",gender:null,
 note:"Regular -ar verb. To attract attention, pick up signals, or understand.",
 example:"A: La empresa busca captar nuevos clientes jóvenes.\nB: Han lanzado una campaña en redes sociales.",
 exampleSrc:"A: The company seeks to attract new young customers.\nB: They have launched a social media campaign.",
 funFact:"'Captar la idea' (to get the idea), 'captar fondos' (to raise funds), 'captar señal' (to pick up signal)."},

{type:"teach",trg:"calificar",src:"to grade / to describe as",pos:"verb",gender:null,
 note:"Regular -ar verb. To assign a rating or to characterize.",
 example:"A: Los expertos calificaron la situación de preocupante.\nB: Recomiendan tomar medidas urgentes.",
 exampleSrc:"A: Experts described the situation as concerning.\nB: They recommend taking urgent measures.",
 funFact:"Dual use: academic (to grade) and descriptive (to characterize). Both are very common."},

{type:"teach",trg:"apaciguar",src:"to pacify / to calm",pos:"verb",gender:null,
 note:"Regular -ar verb. To restore peace or calm someone down.",
 example:"A: Los mediadores lograron apaciguar a ambas partes.\nB: La tensión bajó tras horas de negociación.",
 exampleSrc:"A: The mediators managed to pacify both sides.\nB: Tension dropped after hours of negotiation.",
 funFact:"From 'paz' (peace). The Basque word for peace, 'bakea', influenced regional Spanish expressions too."},

{type:"teach",trg:"arrebatar",src:"to snatch / to captivate",pos:"verb",gender:null,
 note:"Regular -ar verb. To grab violently, or to captivate emotionally.",
 example:"A: Su interpretación arrebató al público.\nB: Todos se pusieron de pie al terminar.",
 exampleSrc:"A: Her performance captivated the audience.\nB: Everyone stood up at the end.",
 funFact:"Two opposite vibes: violent snatching and passionate captivation. Context is everything."},

{type:"mc",q:"¿Qué significa que un proyecto no cuajó?",opts:["Que no se materializó o no tuvo éxito","Que se completó perfectamente","Que fue muy costoso","Que fue demasiado largo"],ans:"Que no se materializó o no tuvo éxito",hint:"Think about milk that does not solidify into cheese. The figurative meaning is similar."},

{type:"teach",trg:"curvar",src:"to bend / to curve",pos:"verb",gender:null,
 note:"Regular -ar verb. To make something curved.\nReflexive: curvarse.",
 example:"A: El calor curvó las vías del tren.\nB: Tuvieron que suspender el servicio durante horas.",
 exampleSrc:"A: The heat curved the train tracks.\nB: They had to suspend service for hours.",
 funFact:"'Curva de aprendizaje' (learning curve) is used constantly in Spanish business and education."},

{type:"teach",trg:"amortiguar",src:"to cushion / to dampen",pos:"verb",gender:null,
 note:"Regular -ar verb. To reduce the impact of a blow, sound, or shock.",
 example:"A: Las alfombras amortiguan el sonido de los pasos.\nB: Ideal para no molestar a los vecinos de abajo.",
 exampleSrc:"A: Carpets cushion the sound of footsteps.\nB: Ideal for not disturbing the neighbors below.",
 funFact:"From 'amortizar' (to pay off). Both share the idea of reducing or absorbing something over time."},

{type:"teach",trg:"accionar",src:"to activate / to trigger",pos:"verb",gender:null,
 note:"Regular -ar verb. To set a mechanism or process in motion.",
 example:"A: Acciona el botón de emergencia si hay peligro.\nB: La alarma sonará en todo el edificio.",
 exampleSrc:"A: Press the emergency button if there is danger.\nB: The alarm will sound throughout the building.",
 funFact:"From 'acción'. 'Accionar judicialmente' means to take legal action against someone."},

{type:"fb",s:"Las alfombras {1} el ruido de los pasos en el pasillo.",a:["amortiguan"],opts:["amortiguan","agravan","corrompen","arrebatan"],hint:"The verb meaning to cushion or muffle sound, reducing its impact.",sSrc:"The carpets {1} the noise of footsteps in the hallway."},

{type:"match",pairs:[{trg:"decaer",src:"to decline"},{trg:"cuajar",src:"to take shape"},{trg:"anular",src:"to annul"},{trg:"curvar",src:"to bend"},{trg:"amortiguar",src:"to cushion"}]}
]};

export default LESSON_19;
