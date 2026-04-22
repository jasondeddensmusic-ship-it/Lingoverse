// Spanish B2 Gap Batch 3 - Lesson 13: Destruction & Decline
// 15 teach cards + quizzes, max 30 steps

const LESSON_13 = {id:"esv2_b2g3_l13", title:"Destrucción y declive", icon:"🌪️", xp:15, board:true, steps:[
  {type:"intro", title:"Destrucción y declive", desc:"Learn powerful vocabulary for describing damage, collapse, and devastating events. Essential for news comprehension and formal discussions.", goals:["Learn 15 destruction and decline terms","Describe catastrophic events","Express severity and impact"]},

  {type:"teach", trg:"devastar", src:"to devastate", pos:"verb", gender:null, note:"To cause massive destruction.\nDevastador = devastating (adjective).", example:"A: El huracán devastó la costa entera.\nB: Miles de familias perdieron sus hogares.", exampleSrc:"A: The hurricane devastated the entire coast.\nB: Thousands of families lost their homes.", funFact:"From Latin devastare (to lay waste). The Romans used it for military destruction. Now it covers any massive damage."},

  {type:"teach", trg:"derrumbar", src:"to demolish / to collapse", pos:"verb", gender:null, note:"Also reflexive: derrumbarse (to collapse, to fall apart).\nPhysical or emotional collapse.", example:"A: El edificio se derrumbó por las lluvias.\nB: Afortunadamente estaba deshabitado.", exampleSrc:"A: The building collapsed because of the rains.\nB: Fortunately it was uninhabited.", funFact:"Derrumbar vs derribar: derrumbar is uncontrolled collapse, derribar is deliberate demolition. Nature vs human action."},

  {type:"teach", trg:"destructivo", src:"destructive", pos:"adj", gender:null, note:"Causing great damage or harm.\nComportamiento destructivo = destructive behaviour.", example:"A: Las tormentas fueron especialmente destructivas este año.\nB: El cambio climático está intensificando los fenómenos.", exampleSrc:"A: The storms were especially destructive this year.\nB: Climate change is intensifying weather events.", funFact:"Destructivo vs destructor: destructivo describes the nature (a destructive force), destructor describes the agent (a destroyer)."},

  {type:"teach", trg:"desplomar", src:"to collapse / to plummet", pos:"verb", gender:null, note:"Reflexive: desplomarse. Physical fall or economic crash.\nLa bolsa se desplomó = the stock market crashed.", example:"A: Las ventas se han desplomado este trimestre.\nB: Hay que cambiar la estrategia urgentemente.", exampleSrc:"A: Sales have plummeted this quarter.\nB: We need to change the strategy urgently.", funFact:"From des- + plomo (lead). To fall like lead, heavy and fast. Perfectly captures both physical collapse and economic crashes."},

  {type:"teach", trg:"el desplome", src:"the collapse / plunge", pos:"noun", gender:"m", note:"Noun form of desplomar. A sudden dramatic fall.\nEl desplome de los precios = the price crash.", example:"A: El desplome del mercado inmobiliario fue inesperado.\nB: Mucha gente perdió sus ahorros.", exampleSrc:"A: The collapse of the property market was unexpected.\nB: Many people lost their savings.", funFact:"Spain's 2008 property crash is remembered as el desplome inmobiliario. It was one of the worst in European history."},

  {type:"teach", trg:"desastroso", src:"disastrous", pos:"adj", gender:null, note:"Causing or involving disaster.\nResultados desastrosos = disastrous results.", example:"A: La gestión de la crisis fue desastrosa.\nB: Se cometieron errores en todos los niveles.", exampleSrc:"A: The management of the crisis was disastrous.\nB: Mistakes were made at every level.", funFact:"From desastre, which comes from Italian disastro (bad star). Disasters were once blamed on unfavourable star alignments."},

  {type:"mc", q:"¿Cuál es la diferencia entre 'derrumbar' y 'derribar'?", opts:["Derrumbar es caída accidental; derribar es demolición intencionada","Son sinónimos exactos","Derrumbar es para edificios; derribar para personas","No hay diferencia práctica"], ans:"Derrumbar es caída accidental; derribar es demolición intencionada", hint:"One involves uncontrolled collapse, the other is a deliberate act of taking something down."},

  {type:"teach", trg:"el descenso", src:"the descent / decline", pos:"noun", gender:"m", note:"A downward movement, physically or figuratively.\nFrom descender (to descend).", example:"A: El descenso de la natalidad preocupa a los demógrafos.\nB: Cada vez nacen menos niños en Europa.", exampleSrc:"A: The decline in birth rate worries demographers.\nB: Fewer and fewer children are born in Europe.", funFact:"In Spanish football, el descenso is relegation to a lower division. One of the most feared words in the sport."},

  {type:"teach", trg:"el desperdicio", src:"the waste / squandering", pos:"noun", gender:"m", note:"Something wasted. From desperdiciar (to waste).\nDesperdicio de comida = food waste.", example:"A: El desperdicio de agua es un problema serio.\nB: Deberíamos instalar sistemas de reutilización.", exampleSrc:"A: Water waste is a serious problem.\nB: We should install reuse systems.", funFact:"Spain wastes about 1,300 million kilos of food per year. Leyes contra el desperdicio alimentario (food waste laws) were passed in 2022."},

  {type:"teach", trg:"el desperfecto", src:"the damage / flaw", pos:"noun", gender:"m", note:"A defect or damage, usually minor or repairable.\nDes- (negation) + perfecto.", example:"A: La mudanza causó algunos desperfectos en los muebles.\nB: Nada grave, solo arañazos superficiales.", exampleSrc:"A: The move caused some damage to the furniture.\nB: Nothing serious, just superficial scratches.", funFact:"Literally 'un-perfection'. A desperfecto is less severe than destrucción: fixable damage, not total ruin."},

  {type:"fb", s:"El terremoto {1} varias poblaciones de la costa.", a:["devastó"], opts:["devastó","desperdició","descendió","desplomó"], hint:"To cause massive, widespread destruction across multiple areas.", sSrc:"The earthquake {1} several towns on the coast."},

  {type:"teach", trg:"la desolación", src:"desolation", pos:"noun", gender:"f", note:"A state of complete emptiness and destruction.\nAlso: deep emotional grief.", example:"A: La desolación del paisaje después del incendio era total.\nB: No quedaba ni un árbol en pie.", exampleSrc:"A: The desolation of the landscape after the fire was total.\nB: Not a single tree was left standing.", funFact:"From Latin desolare (to leave alone). Desolación captures both physical emptiness and emotional devastation."},

  {type:"teach", trg:"el atraso", src:"the delay / backwardness", pos:"noun", gender:"m", note:"Being behind schedule or behind in development.\nAtraso tecnológico = technological lag.", example:"A: El tren lleva treinta minutos de atraso.\nB: Es la tercera vez esta semana.", exampleSrc:"A: The train has a thirty-minute delay.\nB: It's the third time this week.", funFact:"Atraso vs retraso: in Spain both mean delay, but atraso can also mean cultural/economic backwardness. Retraso is safer for simple delays."},

  {type:"teach", trg:"la desviación", src:"the deviation / detour", pos:"noun", gender:"f", note:"Straying from a path or standard.\nDesviación típica = standard deviation (statistics).", example:"A: Hay una desviación en la carretera por obras.\nB: Tendremos que ir por otro camino.", exampleSrc:"A: There's a detour on the road due to construction.\nB: We'll have to go another way.", funFact:"In statistics, desviación típica (standard deviation) is essential vocabulary. From desviar (to divert from the path)."},

  {type:"mc", q:"¿Qué es un desperfecto?", opts:["Una mejora inesperada","Un daño menor y reparable","Una destrucción total","Un desastre natural"], ans:"Un daño menor y reparable", hint:"The word literally means 'un-perfection': a flaw or minor damage that can be fixed."},

  {type:"match", pairs:[{trg:"devastar", src:"to devastate"},{trg:"desplome", src:"collapse / plunge"},{trg:"desperdicio", src:"waste"},{trg:"descenso", src:"descent / decline"},{trg:"desolación", src:"desolation"}]},

  {type:"fb", s:"Las ventas se han {1} un cuarenta por ciento este mes.", a:["desplomado"], opts:["desplomado","derrumbado","devastado","desviado"], hint:"To drop dramatically and suddenly, like lead falling. Used for prices, sales, and markets.", sSrc:"Sales have {1} forty percent this month."},

  {type:"mc", q:"'El desperdicio de comida' se refiere a...", opts:["Comprar comida cara","Comer muy rápido","Tirar comida que se podría haber aprovechado","Cocinar demasiada comida"], ans:"Tirar comida que se podría haber aprovechado", hint:"Food that could have been used but was thrown away instead. A global problem."},

  {type:"fb", s:"La gestión del proyecto fue {1}, perdimos tiempo y dinero.", a:["desastrosa"], opts:["desastrosa","destructiva","desoladora","desviada"], hint:"Describes something that went terribly wrong, involving multiple failures.", sSrc:"The project management was {1}, we lost time and money."}
]};

export default LESSON_13;
