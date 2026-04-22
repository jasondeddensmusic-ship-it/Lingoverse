// Lesson 20. Naturaleza y tradicion (Nature and Tradition)
const LESSON_20 = {id:"esv2_b2g9_l20", title:"Naturaleza y tradici\u00f3n", icon:"\u{1F33F}", xp:25, board:true, steps:[
  {type:"intro", title:"Naturaleza y tradici\u00f3n",
   desc:"Close this unit with vocabulary that connects nature, animals, food traditions, and cultural heritage. These words round out your B2 Spanish.",
   goals:["Learn 10 terms for nature, food, and cultural traditions","Discuss rural life and traditions in Spain","Use specialised vocabulary for animals and plants"]},

  {type:"teach", trg:"el boj", src:"the boxwood", pos:"noun", gender:"m",
   note:"From Latin buxus.\nAn evergreen shrub used in ornamental gardens.",
   example:"A: Los setos de boj son t\u00edpicos de los jardines cl\u00e1sicos.\nB: S\u00ed, se recortan en formas geom\u00e9tricas.\nA: El boj crece muy despacio.\nB: Por eso es tan valorado en jardiner\u00eda.",
   exampleSrc:"A: Boxwood hedges are typical of classical gardens.\nB: Yes, they are trimmed into geometric shapes.\nA: Boxwood grows very slowly.\nB: That is why it is so valued in gardening.",
   funFact:"The gardens of the Alhambra in Granada feature centuries-old boxwood hedges that are still carefully maintained."},

  {type:"teach", trg:"la cobra", src:"the cobra", pos:"noun", gender:"f",
   note:"From Portuguese cobra (snake).\nA venomous hooded snake from Asia and Africa.",
   example:"A: La cobra real es la serpiente venenosa m\u00e1s larga del mundo.\nB: \u00bfCu\u00e1nto puede medir?\nA: Hasta cinco metros.\nB: Impresionante y aterrador a la vez.",
   exampleSrc:"A: The king cobra is the longest venomous snake in the world.\nB: How long can it be?\nA: Up to five metres.\nB: Impressive and terrifying at the same time.",
   funFact:"The word 'cobra' comes from Portuguese 'cobra de capelo' (hooded snake), shortened during colonial exploration."},

  {type:"teach", trg:"la melaza", src:"molasses; treacle", pos:"noun", gender:"f",
   note:"From miel (honey) + -aza (augmentative).\nA thick, dark syrup from sugar production.",
   example:"A: La melaza se usa para hacer ron.\nB: \u00bfEn serio?\nA: S\u00ed, es un subproducto del az\u00facar de ca\u00f1a.\nB: Tambi\u00e9n se usa en reposter\u00eda para dar color y sabor.",
   exampleSrc:"A: Molasses is used to make rum.\nB: Really?\nA: Yes, it is a by-product of sugar cane.\nB: It is also used in baking to add colour and flavour.",
   funFact:"The Canary Islands have a long tradition of using melaza in cooking and rum production, dating back to the sugar cane era."},

  {type:"teach", trg:"el mondongo", src:"tripe stew; innards", pos:"noun", gender:"m",
   note:"Origin debated (possibly from African languages).\nA hearty stew made from animal stomach.",
   example:"A: En muchos pa\u00edses latinos, el mondongo es un plato tradicional.\nB: \u00bfQu\u00e9 lleva?\nA: Tripas, patatas, verduras y especias.\nB: Es un plato humilde pero delicioso.",
   exampleSrc:"A: In many Latin countries, mondongo is a traditional dish.\nB: What does it contain?\nA: Tripe, potatoes, vegetables, and spices.\nB: It is a humble but delicious dish.",
   funFact:"In Spain, the equivalent dish is 'callos', while 'mondongo' is the term used across Latin America."},

  {type:"teach", trg:"el bolillo", src:"the bread roll; bobbin", pos:"noun", gender:"m",
   note:"Diminutive of bolo (ball/small rounded object).\nIn Mexico: a small French-style bread roll.",
   example:"A: \u00bfQuieres un bolillo con mantequilla?\nB: S\u00ed, con un caf\u00e9, perfecto.\nA: En M\u00e9xico el bolillo es el pan m\u00e1s com\u00fan.\nB: En Espa\u00f1a le llamamos barra o pistola.",
   exampleSrc:"A: Do you want a bread roll with butter?\nB: Yes, with a coffee, perfect.\nA: In Mexico, the bolillo is the most common bread.\nB: In Spain we call it barra or pistola.",
   funFact:"The bolillo was brought to Mexico by French bakers during the brief French intervention of the 1860s."},

  {type:"mc", q:"\u00bfQu\u00e9 es la melaza?",
   opts:["Un tipo de miel","Un sirope oscuro y espeso del az\u00facar de ca\u00f1a","Un postre t\u00edpico","Una bebida caliente"],
   ans:"Un sirope oscuro y espeso del az\u00facar de ca\u00f1a",
   hint:"It is a thick, dark syrup that is a by-product of sugar production. Used in rum-making and baking."},

  {type:"teach", trg:"el list\u00f3n", src:"the bar; standard; ribbon", pos:"noun", gender:"m",
   note:"From lista (strip) + -\u00f3n (augmentative).\nThe bar in high jump, or a metaphorical standard.",
   example:"A: Ha puesto el list\u00f3n muy alto.\nB: \u00bfEn qu\u00e9 sentido?\nA: Su presentaci\u00f3n fue brill\u00e1nte. Ahora todos tenemos que superarla.\nB: Eso es bueno. Nos motiva a mejorar.",
   exampleSrc:"A: They have set the bar very high.\nB: In what sense?\nA: Their presentation was brilliant. Now we all have to surpass it.\nB: That is good. It motivates us to improve.",
   funFact:"The expression 'poner el list\u00f3n alto' (to set the bar high) comes from the high jump, where the list\u00f3n is the bar athletes must clear."},

  {type:"teach", trg:"el enrejado", src:"the lattice; the grille; trellis", pos:"noun", gender:"m",
   note:"From reja (grille/bar) + en- + -ado.\nA framework of crossed strips of metal or wood.",
   example:"A: Las ventanas tienen un enrejado de hierro.\nB: Es t\u00edpico de las casas andaluzas.\nA: Adem\u00e1s de decorativo, es una protecci\u00f3n.\nB: S\u00ed, es muy com\u00fan en la planta baja.",
   exampleSrc:"A: The windows have an iron grille.\nB: It is typical of Andalusian houses.\nA: Besides being decorative, it is a protection.\nB: Yes, it is very common on the ground floor.",
   funFact:"The ornamental iron grilles (rejas) of Andalusian windows are a symbol of traditional Spanish architecture."},

  {type:"teach", trg:"la cola de caballo", src:"horsetail (plant); ponytail", pos:"noun", gender:"f",
   note:"Cola (tail) + de caballo (of horse).\nBoth a plant and a hair style.",
   example:"A: Siempre lleva el pelo recogido en una cola de caballo.\nB: Es un peinado muy pr\u00e1ctico.\nA: Y la cola de caballo es tambi\u00e9n una planta medicinal.\nB: S\u00ed, se usa para fortalecer las u\u00f1as y el pelo.",
   exampleSrc:"A: They always wear their hair in a ponytail.\nB: It is a very practical hairstyle.\nA: And horsetail is also a medicinal plant.\nB: Yes, it is used to strengthen nails and hair.",
   funFact:"The cola de caballo plant (Equisetum) is one of Earth's oldest plant species, dating back over 300 million years."},

  {type:"fb", s:"Ha puesto el {1} muy alto con su presentaci\u00f3n.", a:["list\u00f3n"],
   opts:["list\u00f3n","bolillo","boj","enrejado"],
   hint:"A metaphorical bar or standard that others must now try to reach.",
   sSrc:"They have set the {1} very high with their presentation."},

  {type:"teach", trg:"el menhir", src:"the menhir; standing stone", pos:"noun", gender:"m",
   note:"From Breton men (stone) + hir (long).\nA tall upright stone from prehistoric times.",
   example:"A: Hay un menhir en las afueras del pueblo.\nB: \u00bfDe qu\u00e9 \u00e9poca es?\nA: Del neol\u00edtico, unos cinco mil a\u00f1os.\nB: Es muy antiguo y muy impresionante.",
   exampleSrc:"A: There is a menhir on the outskirts of the village.\nB: From what period is it?\nA: From the Neolithic, about five thousand years.\nB: It is very old and very impressive.",
   funFact:"Galicia in northwest Spain has hundreds of menhirs, rivalling Brittany as one of Europe's richest regions for megalithic monuments."},

  {type:"mc", q:"\u00bfQu\u00e9 es un enrejado en una casa andaluza?",
   opts:["Una estructura de barras de hierro en las ventanas","Un jard\u00edn interior","Un pozo de agua","Un tipo de tejado"],
   ans:"Una estructura de barras de hierro en las ventanas",
   hint:"Reja means grille or bar. The -ado suffix means it has been fitted with these bars."},

  {type:"fb", s:"La {1} se usa como planta medicinal para fortalecer el pelo.", a:["cola de caballo"],
   opts:["cola de caballo","melaza","cobra","bolita"],
   hint:"A plant named after an animal's tail because of its appearance.",
   sSrc:"The {1} is used as a medicinal plant to strengthen hair."},

  {type:"match", pairs:[
    {trg:"boj", src:"boxwood"},
    {trg:"melaza", src:"molasses"},
    {trg:"list\u00f3n", src:"bar; standard"},
    {trg:"enrejado", src:"lattice; grille"},
    {trg:"menhir", src:"standing stone"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'poner el list\u00f3n alto'?",
   opts:["Colgar una cinta alta","Establecer un est\u00e1ndar muy exigente","Subir a un lugar elevado","Ganar una competici\u00f3n"],
   ans:"Establecer un est\u00e1ndar muy exigente",
   hint:"From high jump athletics: the bar (list\u00f3n) that competitors must clear."},

  {type:"drag_fill", s:"Los setos de {1} son t\u00edpicos de los jardines. La {2} es un subproducto del az\u00facar.",
   blanks:{"1":"boj","2":"melaza"},
   pool:["boj","melaza","cobra","menhir","mondongo"],
   hint:"An evergreen shrub for hedges. A thick dark syrup from sugar cane."},

  {type:"fb", s:"En Galicia hay muchos {1} del neol\u00edtico.", a:["menhires"],
   opts:["menhires","enrejados","bolillos","listones"],
   hint:"Tall upright prehistoric stones that are thousands of years old.",
   sSrc:"In Galicia there are many {1} from the Neolithic."}
]};
export default LESSON_20;
