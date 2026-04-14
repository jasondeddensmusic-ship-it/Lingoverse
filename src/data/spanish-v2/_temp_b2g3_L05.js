// Spanish B2 Gap Batch 3 - Lesson 5: Environment & Nature
// 15 teach cards + quizzes, max 30 steps

const LESSON_5 = {id:"esv2_b2g3_l5", title:"Naturaleza y medio ambiente", icon:"🌿", xp:15, board:true, steps:[
  {type:"intro", title:"Naturaleza y medio ambiente", desc:"Build vocabulary for discussing the natural world and environmental issues. From deforestation to wildlife, express ecological awareness in Spanish.", goals:["Learn 15 nature and environment terms","Discuss ecological challenges","Describe natural processes"]},

  {type:"teach", trg:"la deforestación", src:"deforestation", pos:"noun", gender:"f", note:"De- (removal) + forestación (forestation).\nThe clearing of forests on a large scale.", example:"A: La deforestación del Amazonas es alarmante.\nB: Cada año se pierden miles de hectáreas.", exampleSrc:"A: The deforestation of the Amazon is alarming.\nB: Every year thousands of hectares are lost.", funFact:"Spain actually gains forest area yearly through reforestation programs. It's one of the most forested countries in Europe."},

  {type:"teach", trg:"la corteza", src:"the bark / the crust", pos:"noun", gender:"f", note:"Double meaning: tree bark or bread crust.\nAlso: corteza cerebral = cerebral cortex.", example:"A: Mira lo gruesa que es la corteza de este alcornoque.\nB: De ahí se saca el corcho para las botellas.", exampleSrc:"A: Look how thick the bark of this cork oak is.\nB: That's where the cork for bottles comes from.", funFact:"Spain is the second largest cork producer in the world. Cork oak (alcornoque) bark regenerates after harvesting."},

  {type:"teach", trg:"la cigarra", src:"the cicada", pos:"noun", gender:"f", note:"A large insect known for its loud buzzing in summer.\nFrom Latin cicada.", example:"A: ¿Oyes las cigarras? El verano ha llegado.\nB: Sí, no paran de cantar desde las doce.", exampleSrc:"A: Do you hear the cicadas? Summer has arrived.\nB: Yes, they don't stop singing since noon.", funFact:"La Fontaine's fable of the ant and the cicada (la hormiga y la cigarra) is taught to every Spanish child."},

  {type:"teach", trg:"la alimaña", src:"vermin / pest animal", pos:"noun", gender:"f", note:"Wild animals considered harmful or unwanted.\nOften used figuratively for despicable people.", example:"A: Las alimañas han atacado el gallinero.\nB: Habrá que poner una valla más resistente.", exampleSrc:"A: Vermin have attacked the henhouse.\nB: We'll need to put up a stronger fence.", funFact:"Historically, Spanish landowners offered bounties for alimañas. The word comes from Arabic al-hayawan (the animal)."},

  {type:"teach", trg:"la cría", src:"the offspring / young animal", pos:"noun", gender:"f", note:"A baby animal. Also means breeding/rearing.\nCría de caballos = horse breeding.", example:"A: La cría de águila ya puede volar.\nB: ¡Qué rápido crecen!", exampleSrc:"A: The eagle chick can already fly.\nB: How fast they grow!", funFact:"Cría comes from criar (to raise/rear). The saying 'cría cuervos y te sacarán los ojos' means raise crows and they'll peck your eyes out."},

  {type:"teach", trg:"la cima", src:"the summit / peak", pos:"noun", gender:"f", note:"The highest point of a mountain or achievement.\nLlegar a la cima = to reach the top.", example:"A: Alcanzamos la cima del Mulhacén al amanecer.\nB: Las vistas debían de ser increíbles.", exampleSrc:"A: We reached the summit of Mulhacén at dawn.\nB: The views must have been incredible.", funFact:"Mulhacén (3,479m) is mainland Spain's highest peak, named after the last sultan of Granada, Muley Hacén."},

  {type:"mc", q:"¿Qué es la corteza de un árbol?", opts:["La capa exterior que protege el tronco","Las hojas que caen en otoño","Las raíces bajo tierra","Las ramas más altas"], ans:"La capa exterior que protege el tronco", hint:"This outer layer wraps around the trunk and protects the tree."},

  {type:"teach", trg:"el cimiento", src:"the foundation (building)", pos:"noun", gender:"m", note:"Usually plural: los cimientos.\nAlso figurative: los cimientos de la democracia.", example:"A: Los cimientos del edificio son muy sólidos.\nB: Normal, es una construcción del siglo dieciocho.", exampleSrc:"A: The foundations of the building are very solid.\nB: Of course, it's an eighteenth-century construction.", funFact:"From Latin caementum (quarry stone), which also gives English 'cement'. The words diverged in meaning over centuries."},

  {type:"teach", trg:"la barranca", src:"the ravine / gorge", pos:"noun", gender:"f", note:"A deep, narrow valley with steep sides.\nAlso spelled barranco (masculine form).", example:"A: Ten cuidado cerca de la barranca.\nB: Sí, la caída es de más de treinta metros.", exampleSrc:"A: Be careful near the ravine.\nB: Yes, the drop is more than thirty metres.", funFact:"Barranca is pre-Roman in origin, possibly Iberian. Many Spanish place names contain barranco or barranca."},

  {type:"teach", trg:"el caparazón", src:"the shell (of a turtle/crustacean)", pos:"noun", gender:"m", note:"The hard outer covering of turtles, crabs, beetles.\nAlso figurative: meterse en su caparazón = to withdraw into one's shell.", example:"A: El caparazón de esta tortuga es enorme.\nB: Puede vivir más de cien años.", exampleSrc:"A: The shell of this turtle is enormous.\nB: It can live more than a hundred years.", funFact:"Masculine despite ending in -ón. From capa (layer) + -razón. The tortuga mora is Spain's only native land tortoise."},

  {type:"fb", s:"La {1} de los bosques tropicales preocupa a toda la comunidad científica.", a:["deforestación"], opts:["deforestación","barranca","corteza","cima"], hint:"The large-scale removal of forest cover that alarms scientists globally.", sSrc:"The {1} of tropical forests concerns the entire scientific community."},

  {type:"teach", trg:"la depuración", src:"the purification / treatment", pos:"noun", gender:"f", note:"From depurar (to purify). Used for water, air, or systems.\nPlanta depuradora = treatment plant.", example:"A: La depuración del agua es esencial en las ciudades.\nB: Sin ella, no tendríamos agua potable.", exampleSrc:"A: Water purification is essential in cities.\nB: Without it, we wouldn't have drinking water.", funFact:"Spain has over 2,000 water treatment plants. The Mediterranean coast relies heavily on depuración for tourism."},

  {type:"teach", trg:"depurar", src:"to purify / to debug", pos:"verb", gender:null, note:"Physical: purify water or air.\nTech: debug code. Political: purge members.", example:"A: Hay que depurar el sistema de filtración.\nB: Sí, lleva meses sin mantenimiento.", exampleSrc:"A: We need to clean up the filtration system.\nB: Yes, it's been months without maintenance.", funFact:"In programming, depurar código means to debug code. The same word for purifying water and fixing software."},

  {type:"teach", trg:"el autoconsumo", src:"self-consumption / self-sufficiency", pos:"noun", gender:"m", note:"Auto- (self) + consumo (consumption).\nGrowing or producing for your own use.", example:"A: Tenemos un huerto para el autoconsumo.\nB: ¿Producís suficientes verduras para todo el año?", exampleSrc:"A: We have a vegetable garden for self-consumption.\nB: Do you produce enough vegetables for the whole year?", funFact:"Autoconsumo energético (energy self-sufficiency) via solar panels has boomed in Spain since 2019's 'sun tax' was repealed."},

  {type:"mc", q:"¿Qué significa 'depurar el agua'?", opts:["Purificar el agua para hacerla potable","Calentar el agua para cocinar","Congelar el agua para conservarla","Mezclar el agua con productos químicos"], ans:"Purificar el agua para hacerla potable", hint:"The process of cleaning water so it's safe to drink."},

  {type:"match", pairs:[{trg:"deforestación", src:"deforestation"},{trg:"cima", src:"summit"},{trg:"barranca", src:"ravine"},{trg:"caparazón", src:"shell"},{trg:"autoconsumo", src:"self-sufficiency"}]},

  {type:"fb", s:"Los {1} del puente resistieron la inundación sin problemas.", a:["cimientos"], opts:["cimientos","caparazones","cortezas","depuraciones"], hint:"The solid base structures that support a building or bridge underground.", sSrc:"The {1} of the bridge withstood the flood without problems."},

  {type:"mc", q:"La cigarra es famosa por...", opts:["su canto intenso en verano","su caparazón duro","su vuelo silencioso","su vida bajo el agua"], ans:"su canto intenso en verano", hint:"This insect is known for its loud, persistent buzzing sound during hot months."},

  {type:"fb", s:"La {1} de águila imperial ya tiene el plumaje de adulto.", a:["cría"], opts:["cría","cima","cigarra","corteza"], hint:"The young offspring of an animal, in this case a bird of prey.", sSrc:"The imperial eagle {1} already has its adult plumage."}
]};

export default LESSON_5;
