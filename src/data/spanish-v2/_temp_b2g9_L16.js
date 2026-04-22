// Lesson 16. Estilo y apariencia (Style and Appearance)
const LESSON_16 = {id:"esv2_b2g9_l16", title:"Estilo y apariencia", icon:"\u{1F453}", xp:25, board:true, steps:[
  {type:"intro", title:"Estilo y apariencia",
   desc:"Describe style, appearance, and design with sophisticated vocabulary. From minimalism to colour theory, these terms help you discuss aesthetics.",
   goals:["Learn 10 terms for style, appearance, and design","Describe visual qualities with precision","Use adjectives for aesthetic criticism"]},

  {type:"teach", trg:"minimalista", src:"minimalist", pos:"adj", gender:null,
   note:"From m\u00ednimo (minimum) + -ista (follower).\nA style with the fewest elements possible.",
   example:"A: Me encanta el dise\u00f1o minimalista.\nB: A m\u00ed tambi\u00e9n. Menos es m\u00e1s.\nA: Mi apartamento es muy minimalista.\nB: \u00bfNo te parece fr\u00edo?\nA: No, me parece tranquilo.",
   exampleSrc:"A: I love minimalist design.\nB: Me too. Less is more.\nA: My flat is very minimalist.\nB: Do you not find it cold?\nA: No, I find it peaceful.",
   funFact:"The minimalist movement in Spain gained popularity through the architecture of Alberto Campo Baeza, known for his white, light-filled buildings."},

  {type:"teach", trg:"monocromo", src:"monochrome; single-coloured", pos:"adj", gender:null,
   note:"Mono- (single) + cromo (colour).\nUsing only one colour or shades of one colour.",
   example:"A: La exposici\u00f3n es toda en fotograf\u00eda monocroma.\nB: \u00bfBlanco y negro?\nA: S\u00ed. Tiene una belleza especial.\nB: A veces menos color dice m\u00e1s.",
   exampleSrc:"A: The exhibition is all in monochrome photography.\nB: Black and white?\nA: Yes. It has a special beauty.\nB: Sometimes less colour says more.",
   funFact:"Monochrome photography in Spain has a rich tradition, especially in the documentary work of photographers like Cristina Garc\u00eda Rodero."},

  {type:"teach", trg:"el color de pelo", src:"hair colour", pos:"noun", gender:"m",
   note:"Color (colour) + de pelo (of hair).\nA compound noun for describing someone's hair colour.",
   example:"A: \u00bfCu\u00e1l es tu color de pelo natural?\nB: Casta\u00f1o oscuro.\nA: \u00bfNunca te lo has te\u00f1ido?\nB: Una vez, de rubio. Fue un desastre.",
   exampleSrc:"A: What is your natural hair colour?\nB: Dark brown.\nA: Have you never dyed it?\nB: Once, blonde. It was a disaster.",
   funFact:"In Spanish, hair colours include: rubio (blonde), moreno (dark brown/black), casta\u00f1o (chestnut), pelirrojo (redhead), and canoso (grey)."},

  {type:"teach", trg:"el color de piel", src:"skin colour", pos:"noun", gender:"m",
   note:"Color (colour) + de piel (of skin).\nUsed in descriptions and discussions of identity.",
   example:"A: El color de piel no deber\u00eda importar.\nB: Estoy completamente de acuerdo.\nA: Lo que importa es c\u00f3mo tratas a los dem\u00e1s.\nB: Exacto. El respeto no tiene color.",
   exampleSrc:"A: Skin colour should not matter.\nB: I completely agree.\nA: What matters is how you treat others.\nB: Exactly. Respect has no colour.",
   funFact:"Spanish uses 'tono de piel' (skin tone) and 'color de piel' (skin colour) interchangeably in most contexts."},

  {type:"teach", trg:"la fisonomia", src:"the physiognomy; facial features", pos:"noun", gender:"f",
   note:"From Greek physiognomia (judging nature from face).\nThe features of a person's face.",
   example:"A: Tiene una fisonom\u00eda muy interesante.\nB: S\u00ed, sus rasgos son muy marcados.\nA: Parece de origen mediterr\u00e1neo.\nB: Es de origen griego, creo.",
   exampleSrc:"A: They have a very interesting physiognomy.\nB: Yes, their features are very defined.\nA: They look Mediterranean.\nB: They are of Greek origin, I think.",
   funFact:"In art, 'fisonom\u00eda' is used to describe how painters capture facial character, especially in portrait painting."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'monocromo'?",
   opts:["Con un solo color","Sin ning\u00fan color","Con colores pastel","Con muchos colores"],
   ans:"Con un solo color",
   hint:"Mono means one, single. Cromo means colour."},

  {type:"teach", trg:"lacio", src:"straight; limp (hair)", pos:"adj", gender:null,
   note:"From Latin flaccidus (limp/slack).\nDescribes straight, smooth hair without curls.",
   example:"A: Tengo el pelo lacio y fino.\nB: \u00bfNo te gustar\u00eda tenerlo diferente?\nA: A veces. Pero el pelo lacio es m\u00e1s f\u00e1cil de peinar.\nB: Eso es verdad.",
   exampleSrc:"A: I have straight, fine hair.\nB: Would you not like to have it different?\nA: Sometimes. But straight hair is easier to comb.\nB: That is true.",
   funFact:"In Latin America, 'lacio' is the standard word for straight hair. In Spain, 'liso' is more common."},

  {type:"teach", trg:"model\u00edco", src:"exemplary; model (adj.)", pos:"adj", gender:null,
   note:"From modelo (model) + -ico.\nSomething that serves as a perfect example.",
   example:"A: Su comportamiento fue mod\u00e9lico.\nB: Siempre es muy profesional.\nA: Deber\u00eda ser un ejemplo para los dem\u00e1s.\nB: Es el empleado del a\u00f1o, sin duda.",
   exampleSrc:"A: Their behaviour was exemplary.\nB: They are always very professional.\nA: They should be an example for the others.\nB: They are the employee of the year, without a doubt.",
   funFact:"In Spanish journalism, 'conducta mod\u00e9lica' (model behaviour) is the phrase used when prisoners earn early release for good conduct."},

  {type:"teach", trg:"la desnudez", src:"nudity; nakedness", pos:"noun", gender:"f",
   note:"From desnudo (naked) + -ez.\nThe state of being unclothed. Used in art and social contexts.",
   example:"A: La desnudez en el arte ha sido tema de debate durante siglos.\nB: Los griegos la celebraban como belleza pura.\nA: En otras \u00e9pocas se consider\u00f3 escandalosa.\nB: Hoy en d\u00eda es m\u00e1s aceptada.",
   exampleSrc:"A: Nudity in art has been a topic of debate for centuries.\nB: The Greeks celebrated it as pure beauty.\nA: In other eras it was considered scandalous.\nB: Nowadays it is more accepted.",
   funFact:"The Museo del Prado in Madrid has numerous works featuring nudity, including Vel\u00e1zquez's famous Venus del espejo."},

  {type:"fb", s:"Me encanta el dise\u00f1o {1}. Menos es m\u00e1s.", a:["minimalista"],
   opts:["minimalista","monocromo","lacio","mod\u00e9lico"],
   hint:"A style that uses the minimum number of elements. Clean, simple, uncluttered.",
   sSrc:"I love {1} design. Less is more."},

  {type:"teach", trg:"la materialidad", src:"materiality; material quality", pos:"noun", gender:"f",
   note:"From material + -idad.\nThe physical quality or tangibility of something.",
   example:"A: La materialidad de este edificio es impresionante.\nB: Los materiales son muy buenos.\nA: Piedra natural y madera de roble.\nB: Se nota la calidad de los materiales.",
   exampleSrc:"A: The materiality of this building is impressive.\nB: The materials are very good.\nA: Natural stone and oak wood.\nB: You can feel the quality of the materials.",
   funFact:"In architecture, 'materialidad' refers to how materials are chosen and used to create sensory experiences in a building."},

  {type:"mc", q:"\u00bfQu\u00e9 describe la palabra 'lacio' referida al pelo?",
   opts:["Rizado y voluminoso","Liso y sin ondas","Corto y grueso","Te\u00f1ido de rubio"],
   ans:"Liso y sin ondas",
   hint:"This adjective describes hair that falls straight without any curls or waves."},

  {type:"fb", s:"Su comportamiento fue {1}. Es un ejemplo para todos.", a:["mod\u00e9lico"],
   opts:["mod\u00e9lico","minimalista","monocromo","lacio"],
   hint:"This adjective describes behaviour so exemplary that others should aspire to imitate it.",
   sSrc:"Their behaviour was {1}. They are an example for everyone."},

  {type:"match", pairs:[
    {trg:"minimalista", src:"minimalist"},
    {trg:"monocromo", src:"monochrome"},
    {trg:"lacio", src:"straight (hair)"},
    {trg:"fisonom\u00eda", src:"facial features"},
    {trg:"materialidad", src:"materiality"}
  ]},

  {type:"mc", q:"\u00bfD\u00f3nde se usa 'fisonom\u00eda' con m\u00e1s frecuencia?",
   opts:["En los deportes","En la cocina","En las descripciones de rostros y rasgos faciales","En la m\u00fasica"],
   ans:"En las descripciones de rostros y rasgos faciales",
   hint:"From Greek physiognomia, this word specifically describes the features of a person's face."},

  {type:"drag_fill", s:"La fotograf\u00eda {1} usa un solo color. El apartamento tiene un dise\u00f1o {2}.",
   blanks:{"1":"monocroma","2":"minimalista"},
   pool:["monocroma","minimalista","mod\u00e9lica","lacia","desnuda"],
   hint:"One colour only. Clean and simple with minimal elements."}
]};
export default LESSON_16;
