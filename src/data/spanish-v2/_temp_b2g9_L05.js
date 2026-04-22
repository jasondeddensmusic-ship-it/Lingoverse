// Lesson 5. Profesiones y oficios (Professions and Trades)
const LESSON_5 = {id:"esv2_b2g9_l5", title:"Profesiones y oficios", icon:"\u{1F527}", xp:25, board:true, steps:[
  {type:"intro", title:"Profesiones y oficios",
   desc:"Expand your professional vocabulary with trades, crafts, and specialist roles. From woodworkers to linguists, every job has its word.",
   goals:["Learn 10 terms for professions and trades","Use job titles with correct gender marking","Discuss different careers and their requirements"]},

  {type:"teach", trg:"la carpinter\u00eda", src:"carpentry; carpenter's workshop", pos:"noun", gender:"f",
   note:"From carpintero (carpenter).\nRefers to both the craft and the physical workshop.",
   example:"A: Mi abuelo ten\u00eda una carpinter\u00eda en el pueblo.\nB: \u00bfQu\u00e9 hac\u00eda?\nA: Muebles a medida. Mesas, sillas, armarios.\nB: La carpinter\u00eda es un oficio precioso.",
   exampleSrc:"A: My grandfather had a carpentry workshop in the village.\nB: What did he make?\nA: Custom furniture. Tables, chairs, wardrobes.\nB: Carpentry is a beautiful trade.",
   funFact:"Spanish distinguishes between 'carpintero' (works with wood for furniture) and 'ebanista' (works with fine wood and veneers)."},

  {type:"teach", trg:"el le\u00f1ador", src:"the lumberjack; woodcutter", pos:"noun", gender:"m",
   note:"From le\u00f1a (firewood) + -dor (agent suffix).\nFeminine: la le\u00f1adora.",
   example:"A: Los le\u00f1adores trabajan en el bosque todo el invierno.\nB: Es un trabajo muy duro.\nA: S\u00ed, y peligroso tambi\u00e9n.\nB: Antes era una de las profesiones m\u00e1s comunes en la monta\u00f1a.",
   exampleSrc:"A: The lumberjacks work in the forest all winter.\nB: It is very hard work.\nA: Yes, and dangerous too.\nB: It used to be one of the most common professions in the mountains.",
   funFact:"The -dor suffix creates agent nouns from verbs in Spanish: cortar > cortador, pescar > pescador, le\u00f1a > le\u00f1ador."},

  {type:"teach", trg:"el molinero", src:"the miller", pos:"noun", gender:"m",
   note:"From molino (mill) + -ero (agent suffix).\nFeminine: la molinera.",
   example:"A: \u00bfSabes qu\u00e9 hac\u00eda un molinero?\nB: Mol\u00eda el trigo para hacer harina.\nA: Es una profesi\u00f3n que casi ha desaparecido.\nB: Ahora las f\u00e1bricas hacen todo autom\u00e1ticamente.",
   exampleSrc:"A: Do you know what a miller did?\nB: He ground wheat to make flour.\nA: It is a profession that has almost disappeared.\nB: Now factories do everything automatically.",
   funFact:"El sombrero de tres picos, a famous Spanish novel, features a miller and his wife in a comic tale of rural Spain."},

  {type:"teach", trg:"el ling\u00fcista", src:"the linguist", pos:"noun", gender:"m",
   note:"From lengua (language) + -ista (specialist).\nSame form for masculine and feminine: el/la ling\u00fcista.",
   example:"A: Mi profesora es ling\u00fcista.\nB: \u00bfEn qu\u00e9 se especializa?\nA: En socioling\u00fc\u00edstica. Estudia c\u00f3mo hablamos en diferentes contextos.\nB: Fascinante. Me encantar\u00eda estudiar eso.",
   exampleSrc:"A: My teacher is a linguist.\nB: What does she specialise in?\nA: In sociolinguistics. She studies how we speak in different contexts.\nB: Fascinating. I would love to study that.",
   funFact:"The diaeresis on the u in ling\u00fcista is essential: without it, the u would be silent, as in 'guitarra'."},

  {type:"teach", trg:"el adulto", src:"the adult", pos:"noun", gender:"m",
   note:"From Latin adultus (grown up).\nFeminine: la adulta. Also used as adjective.",
   example:"A: Este curso es solo para adultos.\nB: \u00bfA partir de qu\u00e9 edad?\nA: Mayores de dieciocho a\u00f1os.\nB: Perfecto. Es muy bueno para m\u00ed.",
   exampleSrc:"A: This course is only for adults.\nB: From what age?\nA: Over eighteen years old.\nB: Perfect. It is very good for me.",
   funFact:"Spanish law defines an 'adulto' as someone aged 18 or over, the same age at which you can vote and drive."},

  {type:"mc", q:"\u00bfQu\u00e9 es una carpinter\u00eda?",
   opts:["Un taller donde se trabaja la madera","Una oficina de correos","Un sal\u00f3n de belleza","Una tienda de ropa"],
   ans:"Un taller donde se trabaja la madera",
   hint:"A carpenter works with wood. The -er\u00eda suffix often indicates a workshop or shop."},

  {type:"teach", trg:"el infante", src:"the infant; prince/princess (royal)", pos:"noun", gender:"m",
   note:"From Latin infans (unable to speak).\nIn royalty: non-heir prince/princess of Spain.",
   example:"A: La infanta Sofia asisti\u00f3 a la ceremonia.\nB: \u00bfEs la hija menor del rey?\nA: S\u00ed. En Espa\u00f1a, los hijos del rey que no son herederos se llaman infantes.\nB: Es un t\u00edtulo muy antiguo.",
   exampleSrc:"A: Princess Sofia attended the ceremony.\nB: Is she the younger daughter of the king?\nA: Yes. In Spain, the king's children who are not heirs are called infantes.\nB: It is a very old title.",
   funFact:"In the Spanish monarchy, only the heir to the throne is 'Pr\u00edncipe/Princesa de Asturias'. Other royal children are 'Infante/Infanta'."},

  {type:"teach", trg:"el mendigo", src:"the beggar", pos:"noun", gender:"m",
   note:"From mendigar (to beg).\nFeminine: la mendiga.",
   example:"A: Hay un mendigo en la esquina de mi calle.\nB: \u00bfLe has hablado alguna vez?\nA: S\u00ed, se llama Pedro y antes era electricista.\nB: Es triste c\u00f3mo cambia la vida a veces.",
   exampleSrc:"A: There is a beggar on the corner of my street.\nB: Have you ever talked to him?\nA: Yes, his name is Pedro and he used to be an electrician.\nB: It is sad how life changes sometimes.",
   funFact:"The verb 'mendigar' comes from Latin mendicare. A more empathetic term used today is 'persona sin hogar' (homeless person)."},

  {type:"teach", trg:"el comendador", src:"the commander (of a military order)", pos:"noun", gender:"m",
   note:"From encomienda (a land grant or charge).\nHistorical title in Spanish military orders.",
   example:"A: En la obra de teatro, el comendador es el villano.\nB: \u00bfQu\u00e9 obra es?\nA: Fuenteovejuna, de Lope de Vega.\nB: Es una de las grandes obras del teatro espa\u00f1ol.",
   exampleSrc:"A: In the play, the commander is the villain.\nB: Which play is it?\nA: Fuenteovejuna, by Lope de Vega.\nA: It is one of the great works of Spanish theatre.",
   funFact:"In Lope de Vega's Fuenteovejuna (1619), the villagers collectively kill the tyrannical comendador and claim 'Fuenteovejuna did it'."},

  {type:"fb", s:"El {1} trabaja en el bosque cortando \u00e1rboles.", a:["le\u00f1ador"],
   opts:["le\u00f1ador","molinero","ling\u00fcista","comendador"],
   hint:"This person cuts down trees for a living. Their name comes from 'le\u00f1a' (firewood).",
   sSrc:"The {1} works in the forest cutting down trees."},

  {type:"teach", trg:"el monta\u00f1ista", src:"the mountaineer", pos:"noun", gender:"m",
   note:"From monta\u00f1a (mountain) + -ista (practitioner).\nAlso: alpinista, escalador.",
   example:"A: Mi hermano es monta\u00f1ista profesional.\nB: \u00bfQu\u00e9 monta\u00f1as ha escalado?\nA: Los Pirineos, los Alpes y los Andes.\nB: Impresionante. Yo tengo v\u00e9rtigo.",
   exampleSrc:"A: My brother is a professional mountaineer.\nB: What mountains has he climbed?\nA: The Pyrenees, the Alps, and the Andes.\nB: Impressive. I have vertigo.",
   funFact:"Spain's Picos de Europa and the Sierra Nevada offer world-class mountaineering, making monta\u00f1ismo a popular sport."},

  {type:"mc", q:"\u00bfQu\u00e9 es un infante en la monarqu\u00eda espa\u00f1ola?",
   opts:["El heredero al trono","Un hijo del rey que no es heredero","Un soldado","Un ni\u00f1o peque\u00f1o"],
   ans:"Un hijo del rey que no es heredero",
   hint:"Only the heir is called Pr\u00edncipe. The other royal children receive a different title."},

  {type:"fb", s:"La {1} es un oficio precioso que casi ha desaparecido.", a:["carpinter\u00eda"],
   opts:["carpinter\u00eda","mediaci\u00f3n","imposici\u00f3n","congregaci\u00f3n"],
   hint:"A craft that involves working with wood to make furniture and objects.",
   sSrc:"{1} is a beautiful trade that has almost disappeared."},

  {type:"match", pairs:[
    {trg:"le\u00f1ador", src:"lumberjack"},
    {trg:"molinero", src:"miller"},
    {trg:"ling\u00fcista", src:"linguist"},
    {trg:"monta\u00f1ista", src:"mountaineer"},
    {trg:"mendigo", src:"beggar"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 estudia un ling\u00fcista?",
   opts:["Las leyes de un pa\u00eds","Las lenguas y c\u00f3mo funcionan","Los n\u00fameros y las matem\u00e1ticas","La historia del arte"],
   ans:"Las lenguas y c\u00f3mo funcionan",
   hint:"The root word is 'lengua' (language). This person is a specialist in that field."},

  {type:"drag_fill", s:"El {1} mol\u00eda el trigo y el {2} cortaba la madera.",
   blanks:{"1":"molinero","2":"le\u00f1ador"},
   pool:["molinero","le\u00f1ador","ling\u00fcista","mendigo","adulto"],
   hint:"One ground grain at the mill, the other worked in the forest."}
]};
export default LESSON_5;
