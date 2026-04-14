// Spanish B2 Gap Batch 3 - Lesson 15: Verbs of Waste & Excess
// 15 teach cards + quizzes, max 30 steps

const LESSON_15 = {id:"esv2_b2g3_l15", title:"Verbos: exceso y despilfarro", icon:"💸", xp:15, board:true, steps:[
  {type:"intro", title:"Verbos: exceso y despilfarro", desc:"Learn verbs and adjectives related to wastefulness, excess, and mismanagement. Express criticism of irresponsible behaviour at a B2 level.", goals:["Learn 15 waste and excess terms","Express criticism constructively","Discuss irresponsible behaviour"]},

  {type:"teach", trg:"despilfarrar", src:"to squander / to waste (money)", pos:"verb", gender:null, note:"Stronger than gastar (to spend). Implies reckless waste.\nDespilfarro = squandering (noun).", example:"A: Ha despilfarrado toda su herencia en dos años.\nB: Es increíble, era una fortuna.", exampleSrc:"A: He squandered his entire inheritance in two years.\nB: It's incredible, it was a fortune.", funFact:"Despilfarrar may come from piltrafa (scrap). To reduce something valuable to scraps through careless spending."},

  {type:"teach", trg:"despilfarrador", src:"wasteful / spendthrift", pos:"adj", gender:null, note:"Someone who squanders money. Also used as a noun.\nFemenine: despilfarradora.", example:"A: No seas tan despilfarrador con la electricidad.\nB: Tienes razón, dejo las luces encendidas siempre.", exampleSrc:"A: Don't be so wasteful with electricity.\nB: You're right, I always leave the lights on.", funFact:"The -ador suffix creates agent nouns from verbs: despilfarrar > despilfarrador, like English -er (spender, waster)."},

  {type:"teach", trg:"descontrolar", src:"to lose control of", pos:"verb", gender:null, note:"Reflexive: descontrolarse (to get out of control).\nLa situación se descontroló = things spiralled.", example:"A: La manifestación se descontroló al caer la noche.\nB: Hubo que intervenir para restablecer el orden.", exampleSrc:"A: The protest got out of control at nightfall.\nB: Intervention was needed to restore order.", funFact:"Descontrolarse is very common in spoken Spanish for any situation that spirals. Parties, projects, even diets."},

  {type:"teach", trg:"desmesurar", src:"to go to excess / to go overboard", pos:"verb", gender:null, note:"Des- + mesura (moderation). To exceed proper limits.\nDesmesurado = excessive, disproportionate.", example:"A: No te desmesures con los gastos navideños.\nB: Lo sé, este año voy a ser más prudente.", exampleSrc:"A: Don't go overboard with Christmas spending.\nB: I know, this year I'll be more prudent.", funFact:"Mesura is an old word for moderation and restraint. Desmesura is its opposite: excess beyond all reason."},

  {type:"teach", trg:"descompensar", src:"to imbalance / to throw off balance", pos:"verb", gender:null, note:"Des- + compensar (to compensate).\nDescompensación = imbalance.", example:"A: Comer solo dulces descompensa la dieta.\nB: Hay que incluir verduras y proteínas.", exampleSrc:"A: Eating only sweets throws off the balance of your diet.\nB: You need to include vegetables and proteins.", funFact:"Medical use: descompensación diabética is a dangerous blood sugar imbalance. Common in hospital terminology."},

  {type:"teach", trg:"el desajuste", src:"the mismatch / misalignment", pos:"noun", gender:"m", note:"Des- + ajuste (adjustment). Something that doesn't fit properly.\nDesajuste hormonal = hormonal imbalance.", example:"A: Hay un desajuste entre la oferta y la demanda.\nB: Por eso los precios han subido tanto.", exampleSrc:"A: There's a mismatch between supply and demand.\nB: That's why prices have risen so much.", funFact:"Desajuste is gentler than desequilibrio. It suggests things are slightly off, not catastrophically wrong."},

  {type:"mc", q:"¿Cuál es la diferencia entre 'gastar' y 'despilfarrar'?", opts:["Gastar es neutro; despilfarrar implica derroche irresponsable","Son sinónimos exactos","Gastar es formal; despilfarrar es informal","Gastar es más fuerte que despilfarrar"], ans:"Gastar es neutro; despilfarrar implica derroche irresponsable", hint:"One simply means to spend, the other implies reckless, irresponsible waste."},

  {type:"teach", trg:"el desfase", src:"the gap / disconnect", pos:"noun", gender:"m", note:"A lag or disconnect between two things.\nDesfase horario = jet lag.", example:"A: Hay un desfase entre lo que dice y lo que hace.\nB: Siempre promete mucho y cumple poco.", exampleSrc:"A: There's a disconnect between what he says and what he does.\nB: He always promises a lot and delivers little.", funFact:"Desfase horario (jet lag) is the most common use. Literally 'phase mismatch'. The body and the timezone are out of sync."},

  {type:"teach", trg:"desfavorable", src:"unfavourable", pos:"adj", gender:null, note:"Des- + favorable. Negative or disadvantageous.\nCondiciones desfavorables = unfavourable conditions.", example:"A: Las condiciones meteorológicas son desfavorables para el vuelo.\nB: Han retrasado la salida dos horas.", exampleSrc:"A: The weather conditions are unfavourable for the flight.\nB: They've delayed departure by two hours.", funFact:"Desfavorable vs adverso: desfavorable is milder (not ideal), adverso is stronger (actively harmful). Degrees of negativity."},

  {type:"teach", trg:"descolocar", src:"to displace / to throw off", pos:"verb", gender:null, note:"Des- + colocar (to place). To move out of position.\nAlso: to disconcert or confuse someone.", example:"A: Tu respuesta me ha descolocado completamente.\nB: No era mi intención, perdona.", exampleSrc:"A: Your answer has completely thrown me off.\nB: That wasn't my intention, sorry.", funFact:"In football, descolocar al portero means to wrong-foot the goalkeeper. Make them go the wrong way."},

  {type:"fb", s:"Ha {1} todos sus ahorros en inversiones arriesgadas.", a:["despilfarrado"], opts:["despilfarrado","descolocado","desfasado","desajustado"], hint:"To recklessly waste money on risky ventures, squandering all savings.", sSrc:"He has {1} all his savings on risky investments."},

  {type:"teach", trg:"el desconcierto", src:"the bewilderment / confusion", pos:"noun", gender:"m", note:"A state of being confused and disoriented.\nFrom desconcertar (to disconcert).", example:"A: La noticia causó un gran desconcierto entre los empleados.\nB: Nadie se esperaba esos cambios.", exampleSrc:"A: The news caused great bewilderment among the employees.\nB: Nobody expected those changes.", funFact:"Des- + concierto (concert/harmony). When harmony is removed, what remains is confusion and disorder."},

  {type:"teach", trg:"descortés", src:"rude / discourteous", pos:"adj", gender:null, note:"Des- + cortés (polite). Same form for m/f.\nUn comentario descortés = a rude comment.", example:"A: Fue muy descortés no saludar al llegar.\nB: Quizás estaba distraído, no creo que fuera intencionado.", exampleSrc:"A: It was very rude not to greet people upon arriving.\nB: Maybe he was distracted, I don't think it was intentional.", funFact:"Cortés comes from corte (court). Courtly behaviour meant politeness. Descortés = un-courtly. Manners from medieval courts."},

  {type:"teach", trg:"duradero", src:"lasting / durable", pos:"adj", gender:null, note:"From durar (to last). Something that endures over time.\nPaz duradera = lasting peace.", example:"A: Queremos construir una relación comercial duradera.\nB: Nosotros también valoramos la estabilidad.", exampleSrc:"A: We want to build a lasting business relationship.\nB: We also value stability.", funFact:"The -ero suffix for adjectives often means 'tending to': durar > duradero (tending to last), perecedero (tending to perish)."},

  {type:"mc", q:"¿Qué es el 'desfase horario'?", opts:["El jet lag, desajuste entre el cuerpo y la zona horaria","Un reloj que va mal","Una diferencia de opinión","Un error en el calendario"], ans:"El jet lag, desajuste entre el cuerpo y la zona horaria", hint:"When your body's internal clock doesn't match the time zone you're in after a long flight."},

  {type:"match", pairs:[{trg:"despilfarrar", src:"to squander"},{trg:"desfase", src:"gap / disconnect"},{trg:"desconcierto", src:"bewilderment"},{trg:"descort��s", src:"rude"},{trg:"duradero", src:"lasting"}]},

  {type:"fb", s:"Su comentario fue bastante {1}, debería disculparse.", a:["descortés"], opts:["descortés","duradero","desfavorable","despilfarrador"], hint:"Lacking basic politeness and manners. Courtly behaviour removed.", sSrc:"His comment was quite {1}, he should apologize."},

  {type:"mc", q:"'Descolocar' en sentido figurado significa...", opts:["Sorprender y confundir a alguien","Mudarse de casa","Colocar algo en orden","Pintar de otro color"], ans:"Sorprender y confundir a alguien", hint:"To take someone out of their expected position, mentally throwing them off balance."},

  {type:"fb", s:"Hay un {1} entre lo que se enseña en la universidad y lo que pide el mercado laboral.", a:["desfase"], opts:["desfase","desajuste","desconcierto","descontrol"], hint:"A disconnect or gap between two things that should be aligned.", sSrc:"There is a {1} between what is taught at university and what the job market demands."}
]};

export default LESSON_15;
