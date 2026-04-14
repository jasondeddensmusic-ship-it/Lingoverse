// B2 Gap Batch 6 Lesson 18 - Science & Research
const LESSON_18 = {id:"esv2_b2g6_l18",title:"Ciencia e investigación",icon:"🔬",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia e investigación",desc:"Learn vocabulary for discussing scientific research, discoveries, and academic investigation.",goals:["Learn 15 science and research terms","Discuss research methods and findings","Use scientific vocabulary accurately"]},

{type:"teach",trg:"el homínido",src:"the hominid",pos:"noun",gender:"m",
 note:"Masculine noun. A member of the family that includes\nhumans and their ancestors.",
 example:"A: Los restos de homínidos encontrados en Atapuerca tienen un millón de años.\nB: Es uno de los yacimientos más importantes del mundo.",
 exampleSrc:"A: The hominid remains found at Atapuerca are one million years old.\nB: It is one of the most important sites in the world.",
 funFact:"Atapuerca in Burgos, Spain, has the oldest hominid remains in Western Europe."},

{type:"teach",trg:"el córtex",src:"the cortex",pos:"noun",gender:"m",
 note:"Masculine noun. The outer layer of an organ,\nespecially the brain. From Latin cortex (bark).",
 example:"A: El córtex cerebral controla las funciones superiores.\nB: El lenguaje, la memoria y el razonamiento.",
 exampleSrc:"A: The cerebral cortex controls higher functions.\nB: Language, memory, and reasoning.",
 funFact:"From Latin cortex (bark of a tree). The brain's outer layer wraps around it like bark on a tree."},

{type:"teach",trg:"la fisonomía",src:"the physiognomy / appearance",pos:"noun",gender:"f",
 note:"Feminine noun. The features of a face or the\nappearance of something. From Greek physis + gnomon.",
 example:"A: La fisonomía de la ciudad ha cambiado mucho.\nB: Apenas la reconozco después de diez años.",
 exampleSrc:"A: The physiognomy of the city has changed a lot.\nB: I barely recognize it after ten years.",
 funFact:"Originally the pseudoscience of judging character from facial features. Now just means appearance."},

{type:"teach",trg:"el excremento",src:"excrement",pos:"noun",gender:"m",
 note:"Masculine noun. Waste matter expelled from the body.\nFrom Latin excrementum.",
 example:"A: El análisis de excrementos fósiles revela la dieta antigua.\nB: Los coprolitos son una fuente valiosa de información.",
 exampleSrc:"A: The analysis of fossilized excrement reveals the ancient diet.\nB: Coprolites are a valuable source of information.",
 funFact:"In archaeology, coprolites (fossilized excrement) are studied to understand ancient diets."},

{type:"mc",q:"¿Qué es el córtex cerebral?",opts:["La capa exterior del cerebro","Un hueso del cráneo","Un tipo de neurona","Una enfermedad mental"],ans:"La capa exterior del cerebro",hint:"The outermost layer of the brain responsible for higher functions."},

{type:"teach",trg:"inmerso",src:"immersed / engrossed",pos:"adj",gender:null,
 note:"Adjective. Deeply involved or submerged.\nFrom Latin immersus.",
 example:"A: Estaba tan inmerso en la investigación que olvidó comer.\nB: Le pasa siempre cuando trabaja en el laboratorio.",
 exampleSrc:"A: He was so immersed in the research that he forgot to eat.\nB: It always happens to him when he works in the lab.",
 funFact:"Both literal (inmerso en agua) and figurative (inmerso en un proyecto) uses are common."},

{type:"teach",trg:"ingerir",src:"to ingest / to consume",pos:"verb",gender:null,
 note:"Irregular verb (like preferir: e > ie).\nTo eat or drink, especially in medical contexts.",
 example:"A: No debe ingerir alimentos antes de la operación.\nB: ¿Ni siquiera agua?",
 exampleSrc:"A: You must not ingest food before the operation.\nB: Not even water?",
 funFact:"More formal than 'comer' or 'beber'. Used in medical and scientific writing."},

{type:"teach",trg:"infundir",src:"to instill / to infuse",pos:"verb",gender:null,
 note:"Regular -ir verb. To inspire a feeling in someone.\nFrom Latin infundere (to pour in).",
 example:"A: Su discurso infundió esperanza en los asistentes.\nB: Salieron del auditorio muy motivados.",
 exampleSrc:"A: His speech instilled hope in the attendees.\nB: They left the auditorium very motivated.",
 funFact:"'Infundir miedo' (to instill fear) and 'infundir ánimo' (to instill courage) are common collocations."},

{type:"fb",s:"El paciente no debe {1} alimentos sólidos antes de la cirugía.",a:["ingerir"],opts:["ingerir","infundir","innovar","indagar"],hint:"To eat or consume, especially in a medical context.",sSrc:"The patient must not {1} solid foods before the surgery."},

{type:"teach",trg:"inmunitario",src:"immune (system-related)",pos:"adj",gender:null,
 note:"Adjective. Related to the immune system.\nFrom inmune + -itario.",
 example:"A: El sistema inmunitario protege el cuerpo de infecciones.\nB: Por eso es importante mantenerlo fuerte.",
 exampleSrc:"A: The immune system protects the body from infections.\nB: That is why it is important to keep it strong.",
 funFact:"'Sistema inmunitario' and 'sistema inmunológico' are both correct. The RAE prefers 'inmunitario'."},

{type:"teach",trg:"instrumental",src:"instrumental",pos:"adj",gender:null,
 note:"Adjective. Serving as a means to an end,\nor relating to instruments.",
 example:"A: La tecnología fue instrumental en el avance de la investigación.\nB: Sin ella, habríamos tardado años más.",
 exampleSrc:"A: Technology was instrumental in the advancement of the research.\nB: Without it, we would have taken years longer.",
 funFact:"Also a music term: 'música instrumental' means music without vocals."},

{type:"teach",trg:"insinuar",src:"to insinuate / to hint",pos:"verb",gender:null,
 note:"Regular -ar verb (u carries accent: insinúo).\nTo suggest indirectly. Reflexive: insinuarse.",
 example:"A: ¿Qué intentas insinuar con ese comentario?\nB: Nada, solo hago una observación.",
 exampleSrc:"A: What are you trying to insinuate with that comment?\nB: Nothing, I am just making an observation.",
 funFact:"'Insinuarse a alguien' means to flirt with or make advances toward someone."},

{type:"mc",q:"¿Qué significa estar inmerso en un proyecto?",opts:["Estar profundamente involucrado","Estar aburrido","Estar confundido","Haber abandonado el proyecto"],ans:"Estar profundamente involucrado",hint:"So deeply involved that you lose track of everything else."},

{type:"match",pairs:[
  {trg:"homínido",src:"hominid"},
  {trg:"córtex",src:"cortex"},
  {trg:"ingerir",src:"to ingest"},
  {trg:"inmunitario",src:"immune"},
  {trg:"insinuar",src:"to insinuate"}
]},

{type:"fb",s:"Su discurso {1} confianza en todo el equipo de investigación.",a:["infundió"],opts:["infundió","ingirió","insinuó","insertó"],hint:"To instill or pour a feeling into someone.",sSrc:"His speech {1} confidence in the entire research team."}
]};
export default LESSON_18;
