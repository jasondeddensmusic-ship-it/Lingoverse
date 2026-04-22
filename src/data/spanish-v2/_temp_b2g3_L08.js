// Spanish B2 Gap Batch 3 - Lesson 8: Materials & Construction
// 15 teach cards + quizzes, max 30 steps

const LESSON_8 = {id:"esv2_b2g3_l8", title:"Materiales y construcción", icon:"🧱", xp:15, board:true, steps:[
  {type:"intro", title:"Materiales y construcción", desc:"Learn vocabulary for materials, building components, and physical objects. From chemical compounds to household items.", goals:["Learn 15 material and object terms","Describe physical properties","Discuss construction and crafting"]},

  {type:"teach", trg:"el acetato", src:"acetate", pos:"noun", gender:"m", note:"A synthetic material or chemical compound.\nAlso used for transparent presentation sheets.", example:"A: ¿De qué material es esta tela?\nB: Es de acetato, por eso es tan suave y brillante.", exampleSrc:"A: What material is this fabric?\nB: It's acetate, that's why it's so soft and shiny.", funFact:"From Latin acetum (vinegar). Acetate was first derived from acetic acid, which gives vinegar its sour taste."},

  {type:"teach", trg:"el carbonato", src:"carbonate", pos:"noun", gender:"m", note:"A chemical compound. Carbonato de calcio = calcium carbonate.\nAlso: bicarbonato = baking soda.", example:"A: El carbonato de calcio se usa en la industria farmacéutica.\nB: También está presente en las conchas marinas.", exampleSrc:"A: Calcium carbonate is used in the pharmaceutical industry.\nB: It's also present in seashells.", funFact:"Bicarbonato de sodio (baking soda) is a kitchen staple in Spain, used for everything from cooking to cleaning."},

  {type:"teach", trg:"la cartulina", src:"card stock / cardboard (thin)", pos:"noun", gender:"f", note:"Thicker than paper, thinner than cardboard.\nUsed for school projects and crafts.", example:"A: Necesito cartulina de colores para el proyecto.\nB: En la papelería de la esquina tienen de todos los colores.", exampleSrc:"A: I need coloured card stock for the project.\nB: The stationery shop on the corner has all colours.", funFact:"From Italian cartolina (little card). Cartulina is every Spanish schoolchild's essential craft material."},

  {type:"teach", trg:"el acorazado", src:"the battleship", pos:"noun", gender:"m", note:"From coraza (armour). A heavily armoured warship.\nAlso adjective: un vehículo acorazado = an armoured vehicle.", example:"A: El acorazado Potemkin es una película famosa.\nB: Sí, de Eisenstein, un clásico del cine.", exampleSrc:"A: The Battleship Potemkin is a famous film.\nB: Yes, by Eisenstein, a cinema classic.", funFact:"Spain's naval history includes famous acorazados. The word literally means 'armour-plated', from coraza (cuirass/armour)."},

  {type:"teach", trg:"el arcón", src:"the chest / large trunk", pos:"noun", gender:"m", note:"A large storage chest, often wooden.\nAugmentative of arca (chest).", example:"A: En el arcón del abuelo encontramos fotos antiguas.\nB: ¡Qué tesoro! Hay que conservarlas bien.", exampleSrc:"A: In grandfather's chest we found old photos.\nB: What a treasure! We need to preserve them well.", funFact:"The augmentative -ón suffix makes things bigger: arca > arcón, caja > cajón. Very productive in Spanish."},

  {type:"teach", trg:"el amasijo", src:"the hodgepodge / jumble", pos:"noun", gender:"m", note:"A confused mixture of things. From amasar (to knead).\nOriginal meaning: a batch of dough.", example:"A: Su escritorio es un amasijo de papeles y libros.\nB: Dice que tiene su propio sistema de orden.", exampleSrc:"A: His desk is a jumble of papers and books.\nB: He says he has his own system of order.", funFact:"From amasar (to knead dough). The image of kneading many things together became 'a messy mixture' of anything."},

  {type:"mc", q:"¿Qué es un arcón?", opts:["Un cofre grande para guardar cosas","Un tipo de arco arquitectónico","Una herramienta de carpintería","Un material de construcción"], ans:"Un cofre grande para guardar cosas", hint:"Think of a large, sturdy chest used for storage, often made of wood."},

  {type:"teach", trg:"el amoníaco", src:"ammonia", pos:"noun", gender:"m", note:"A strong-smelling chemical compound.\nUsed in cleaning products and fertilizers.", example:"A: El olor a amoníaco es muy fuerte en este producto.\nB: Abre la ventana, hay que ventilar bien.", exampleSrc:"A: The ammonia smell is very strong in this product.\nB: Open the window, we need to ventilate well.", funFact:"Named after the Temple of Ammon in Libya, where ammonium chloride was first found. Ancient origins, modern chemistry."},

  {type:"teach", trg:"la calza", src:"the wedge / chock", pos:"noun", gender:"f", note:"A piece placed under something to level or block it.\nAlso historical: stockings (calzas).", example:"A: Pon una calza debajo de la mesa para que no cojee.\nB: Buena idea, esta pata es más corta.", exampleSrc:"A: Put a wedge under the table so it doesn't wobble.\nB: Good idea, this leg is shorter.", funFact:"Calzas in the plural once meant stockings or breeches. Don Quijote wore calzas. The modern meaning is more practical."},

  {type:"teach", trg:"el batiente", src:"the door frame / leaf of a door", pos:"noun", gender:"m", note:"The part of a door or window frame that the door closes against.\nFrom batir (to beat/strike).", example:"A: La puerta golpea contra el batiente por el viento.\nB: Hay que ajustar las bisagras.", exampleSrc:"A: The door hits against the frame because of the wind.\nB: We need to adjust the hinges.", funFact:"From batir (to strike). The batiente is where the door 'strikes' when closing. Also used for the flap of a shutter."},

  {type:"fb", s:"Necesito {1} roja y azul para hacer el cartel del festival.", a:["cartulina"], opts:["cartulina","calza","carbonato","acetato"], hint:"A thick paper material in various colours used for crafts and posters.", sSrc:"I need red and blue {1} to make the festival poster."},

  {type:"teach", trg:"la borda", src:"the gunwale / ship's rail", pos:"noun", gender:"f", note:"The upper edge of a ship's side.\nTirar por la borda = to throw overboard (also figurative).", example:"A: No tires por la borda todo tu esfuerzo.\nB: Tienes razón, no voy a rendirme ahora.", exampleSrc:"A: Don't throw all your effort overboard.\nB: You're right, I'm not going to give up now.", funFact:"Tirar por la borda is one of Spain's most common idioms. It means to waste something valuable recklessly."},

  {type:"teach", trg:"el asta", src:"the flagpole / horn (of a bull)", pos:"noun", gender:"f", note:"Uses el despite being feminine (starts with stressed a).\nA media asta = at half-mast.", example:"A: La bandera ondea a media asta por el luto.\nB: Es una muestra de respeto por las víctimas.", exampleSrc:"A: The flag flies at half-mast in mourning.\nB: It's a show of respect for the victims.", funFact:"Like el agua and el águila, el asta uses 'el' despite being feminine because it starts with a stressed 'a' sound."},

  {type:"teach", trg:"el cronómetro", src:"the stopwatch / chronometer", pos:"noun", gender:"m", note:"From Greek chronos (time) + metron (measure).\nUsed in sports and scientific measurement.", example:"A: El cronómetro marca dos minutos y treinta segundos.\nB: Es un nuevo récord personal.", exampleSrc:"A: The stopwatch reads two minutes and thirty seconds.\nB: It's a new personal record.", funFact:"Chrono- words are abundant in Spanish: cronología, crónica, sincronizar. All from Greek chronos (time)."},

  {type:"mc", q:"'Tirar por la borda' significa...", opts:["Pintar una pared","Desperdiciar algo valioso","Lanzar algo al cielo","Construir un barco nuevo"], ans:"Desperdiciar algo valioso", hint:"To throw something overboard, figuratively meaning to waste or discard something valuable."},

  {type:"match", pairs:[{trg:"acetato", src:"acetate"},{trg:"cartulina", src:"card stock"},{trg:"amasijo", src:"hodgepodge"},{trg:"arcón", src:"large chest"},{trg:"cronómetro", src:"stopwatch"}]},

  {type:"fb", s:"La bandera está a media {1} en señal de duelo.", a:["asta"], opts:["asta","borda","calza","batiente"], hint:"The tall pole from which a flag flies, lowered halfway to show mourning.", sSrc:"The flag is at half {1} as a sign of mourning."},

  {type:"mc", q:"¿Cuál es el significado original de 'amasijo'?", opts:["Una herramienta antigua","Un edificio romano","Una masa de pan","Un tipo de metal"], ans:"Una masa de pan", hint:"The original meaning comes from bread-making. Think of kneading dough into a lump before it rises."},

  {type:"fb", s:"El {1} de calcio es un componente fundamental de los huesos.", a:["carbonato"], opts:["carbonato","amoníaco","acetato","cronómetro"], hint:"A chemical compound found in shells, chalk, and bones.", sSrc:"{1} of calcium is a fundamental component of bones."}
]};

export default LESSON_8;
