// Spanish B2 Gap Batch 3 - Lesson 20: Advanced Adjectives & Descriptions
// 15 teach cards + quizzes, max 30 steps

const LESSON_20 = {id:"esv2_b2g3_l20", title:"Adjetivos avanzados", icon:"🎨", xp:15, board:true, steps:[
  {type:"intro", title:"Adjetivos avanzados", desc:"Expand your descriptive power with advanced B2 adjectives. Move beyond basic descriptions to nuanced, precise characterizations.", goals:["Learn 15 advanced adjectives","Describe people and situations precisely","Express subtle evaluations"]},

  {type:"teach", trg:"desfavorable", src:"unfavourable", pos:"adj", gender:null, note:"Des- + favorable. Negative or disadvantageous.\nCondiciones desfavorables = unfavourable conditions.", example:"A: El informe es desfavorable para nuestra propuesta.\nB: Tendremos que modificarla antes de presentarla.", exampleSrc:"A: The report is unfavourable for our proposal.\nB: We'll have to modify it before presenting it.", funFact:"Desfavorable is milder than adverso (adverse). It means 'not in favour', while adverso means 'actively against'."},

  {type:"teach", trg:"desolador", src:"devastating / desolate", pos:"adj", gender:null, note:"Something that causes profound sadness or emptiness.\nUn panorama desolador = a desolate panorama.", example:"A: El panorama después del terremoto era desolador.\nB: Casas destruidas, gente llorando, un silencio terrible.", exampleSrc:"A: The panorama after the earthquake was devastating.\nB: Destroyed houses, people crying, a terrible silence.", funFact:"From desolar (to leave alone, to devastate). The -dor suffix creates adjectives of effect: aterrador, conmovedor, desolador."},

  {type:"teach", trg:"desastroso", src:"disastrous", pos:"adj", gender:null, note:"Causing or characterized by disaster.\nUna decisión desastrosa = a disastrous decision.", example:"A: La reforma fiscal ha sido desastrosa para las pymes.\nB: Muchas pequeñas empresas han tenido que cerrar.", exampleSrc:"A: The tax reform has been disastrous for small businesses.\nB: Many small companies have had to close.", funFact:"From desastre (disaster), from Italian dis-astro (bad star). A desastrosa outcome was literally written in the stars."},

  {type:"teach", trg:"despilfarrador", src:"wasteful / spendthrift", pos:"adj", gender:null, note:"Someone who wastes resources irresponsibly.\nFemenine: despilfarradora.", example:"A: El gobierno ha sido despilfarrador con los fondos públicos.\nB: Es hora de exigir responsabilidad fiscal.", exampleSrc:"A: The government has been wasteful with public funds.\nB: It's time to demand fiscal responsibility.", funFact:"The -ador suffix creates both agent nouns and adjectives: trabajador (hard-working), despilfarrador (wasteful), innovador (innovative)."},

  {type:"teach", trg:"duradero", src:"lasting / durable", pos:"adj", gender:null, note:"From durar (to last). Something that endures.\nDevelopment duradero = sustainable development.", example:"A: Queremos crear un cambio duradero en la comunidad.\nB: No basta con soluciones temporales.", exampleSrc:"A: We want to create lasting change in the community.\nB: Temporary solutions aren't enough.", funFact:"Desarrollo duradero and desarrollo sostenible both translate to sustainable development. Duradero emphasizes lasting, sostenible emphasizes balance."},

  {type:"teach", trg:"efímero", src:"ephemeral / fleeting", pos:"adj", gender:null, note:"Lasting only a very short time. Literary and formal.\nArte efímero = ephemeral art (installations, performances).", example:"A: La felicidad del éxito es efímera.\nB: Por eso hay que disfrutarla mientras dura.", exampleSrc:"A: The happiness of success is ephemeral.\nB: That's why you have to enjoy it while it lasts.", funFact:"Efímero and duradero are perfect antonyms. Art exhibitions often contrast arte efímero (temporary installations) with obras permanentes."},

  {type:"mc", q:"¿Cuál es lo contrario de 'duradero'?", opts:["Efímero","Desfavorable","Desastroso","Despilfarrador"], ans:"Efímero", hint:"Duradero means lasting. Its opposite describes something that barely lasts at all."},

  {type:"teach", trg:"depresivo", src:"depressive", pos:"adj", gender:null, note:"Related to depression. Un episodio depresivo = a depressive episode.\nAlso used casually: un ambiente depresivo.", example:"A: Ha pasado por un episodio depresivo muy difícil.\nB: Es importante que tenga apoyo profesional.", exampleSrc:"A: He's been through a very difficult depressive episode.\nB: It's important that he has professional support.", funFact:"Depression (depresión) is now openly discussed in Spain. Campaigns to reduce stigma have changed how depresivo is used in public discourse."},

  {type:"teach", trg:"destructivo", src:"destructive", pos:"adj", gender:null, note:"Causing destruction. Physical or emotional.\nUna relación destructiva = a destructive relationship.", example:"A: Las críticas constantes son muy destructivas.\nB: Es mejor dar retroalimentación constructiva.", exampleSrc:"A: Constant criticism is very destructive.\nB: It's better to give constructive feedback.", funFact:"Destructivo vs destructor: destructivo is the nature (a destructive habit), destructor is the agent (a destroyer ship). Adjective vs noun."},

  {type:"teach", trg:"dispar", src:"unequal / disparate", pos:"adj", gender:null, note:"Different and unequal. Same form for m/f.\nResultados dispares = uneven results.", example:"A: Los resultados de los estudiantes son muy dispares.\nB: Algunos sacan sobresaliente y otros suspenden.", exampleSrc:"A: The students' results are very uneven.\nB: Some get top marks and others fail.", funFact:"From Latin dispar (unequal). Disparidad (disparity) is the noun form. Both are common in academic and journalistic Spanish."},

  {type:"teach", trg:"cuerdo", src:"sane / sensible", pos:"adj", gender:null, note:"The opposite of loco (crazy).\nMantenerse cuerdo = to stay sane.", example:"A: ¿Cómo te mantienes cuerdo con tanto trabajo?\nB: Hago deporte y desconecto los fines de semana.", exampleSrc:"A: How do you stay sane with so much work?\nB: I exercise and disconnect on weekends.", funFact:"From Latin cordatus (wise-hearted), from cor (heart). Being cuerdo meant having a good heart, then a sound mind."},

  {type:"fb", s:"Los resultados del estudio fueron muy {1} entre las diferentes regiones.", a:["dispares"], opts:["dispares","duraderos","destructivos","depresivos"], hint:"Uneven and unequal, varying significantly from one group to another.", sSrc:"The study results were very {1} across the different regions."},

  {type:"teach", trg:"destartalado", src:"ramshackle / dilapidated", pos:"adj", gender:null, note:"Falling apart, poorly maintained.\nUna casa destartalada = a ramshackle house.", example:"A: Vivían en una casa destartalada en las afueras.\nB: Pero la reformaron y ahora es preciosa.", exampleSrc:"A: They lived in a ramshackle house on the outskirts.\nB: But they renovated it and now it's beautiful.", funFact:"From destartar (to remove tar/grease). A destartalado building has lost its protective coating, figuratively falling apart."},

  {type:"teach", trg:"cabal", src:"exact / sound / complete", pos:"adj", gender:null, note:"Precise, complete, or mentally sound.\nNo estar en sus cabales = to not be in one's right mind.", example:"A: No está en sus cabales si cree que eso va a funcionar.\nB: Tiene ideas muy arriesgadas, desde luego.", exampleSrc:"A: He's not in his right mind if he thinks that will work.\nB: He certainly has very risky ideas.", funFact:"No estar en sus cabales is a common idiom meaning 'to not be thinking straight'. Cabal comes from Latin caput (head)."},

  {type:"teach", trg:"deseoso", src:"eager / desirous", pos:"adj", gender:null, note:"From deseo (desire). Wanting something strongly.\nDeseoso de aprender = eager to learn.", example:"A: Está deseoso de empezar su nuevo trabajo.\nB: Se nota que tiene mucha ilusión.", exampleSrc:"A: He's eager to start his new job.\nB: You can tell he's very excited.", funFact:"Deseoso always takes de before an infinitive: deseoso de viajar, deseoso de saber. The -oso suffix means 'full of': deseo > deseoso."},

  {type:"mc", q:"'No estar en sus cabales' significa...", opts:["No estar pensando con claridad","Estar muy contento","Estar en buena forma física","Estar muy cansado"], ans:"No estar pensando con claridad", hint:"Cabal means sound/exact. If someone is NOT in their cabales, their thinking is off."},

  {type:"match", pairs:[{trg:"desfavorable", src:"unfavourable"},{trg:"duradero", src:"lasting"},{trg:"efímero", src:"ephemeral"},{trg:"dispar", src:"unequal"},{trg:"destartalado", src:"ramshackle"}]},

  {type:"fb", s:"Las condiciones meteorológicas son {1} para la navegación.", a:["desfavorables"], opts:["desfavorables","duraderas","efímeras","cabales"], hint:"Not in your favour, presenting a disadvantage for the activity.", sSrc:"The weather conditions are {1} for sailing."},

  {type:"mc", q:"'Destartalado' describe algo que...", opts:["Está en mal estado y cayéndose a pedazos","Es muy moderno y nuevo","Está pintado de muchos colores","Es extremadamente caro"], ans:"Está en mal estado y cayéndose a pedazos", hint:"Think of an old building or vehicle that's falling apart from lack of maintenance."},

  {type:"fb", s:"Estamos {1} de conocer los resultados del proyecto.", a:["deseosos"], opts:["deseosos","desastrosos","destructivos","depresivos"], hint:"Eagerly wanting and full of desire to find out something.", sSrc:"We are {1} to know the results of the project."}
]};

export default LESSON_20;
