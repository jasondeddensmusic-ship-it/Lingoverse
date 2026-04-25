// L16: Environment & Weather - Climate, nature conservation, and atmospheric conditions
const LESSON_16 = {
  id:"esv2_b1gap_l16", title:"Medio ambiente", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medio ambiente",
     desc:"Care for the planet. Learn vocabulary for the environment, weather, and conservation.",
     goals:["Learn 20 environment and weather words","Discuss climate and conservation","Describe atmospheric conditions"]},

    {type:"teach", trg:"atmosf\u00e9rico", src:"atmospheric", pos:"adj", gender:null,
     note:"Adjective. Atmosf\u00e9rico/atmosf\u00e9rica.\nPresi\u00f3n atmosf\u00e9rica = atmospheric pressure.",
     example:"A: Las condiciones atmosf\u00e9ricas son malas hoy.\nB: S\u00ed, hay mucho viento.",
     exampleSrc:"A: The atmospheric conditions are bad today.\nB: Yes, it is very windy.",
     funFact:"From 'atm\u00f3sfera' + '-ico'. In weather reports, 'condiciones atmosf\u00e9ricas' is the formal phrase. Casual Spanish just says 'el tiempo' (the weather)."},

    {type:"teach", trg:"austral", src:"southern, austral", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nHemisferio austral = southern hemisphere.",
     example:"A: El invierno austral es de junio a agosto.\nB: Todo al rev\u00e9s que aqu\u00ed.",
     exampleSrc:"A: The southern winter is from June to August.\nB: Everything is opposite to here.",
     funFact:"From Latin 'australis' (southern), from 'auster' (south wind). Australia's name shares this root: the 'southern land'."},

    {type:"teach", trg:"boreal", src:"northern, boreal", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nAurora boreal = northern lights.",
     example:"A: La aurora boreal es incre\u00edble.\nB: Alg\u00fan d\u00eda quiero verla en persona.",
     exampleSrc:"A: The northern lights are incredible.\nB: Someday I want to see them in person.",
     funFact:"From Greek 'Boreas', the god of the north wind. 'Boreal' is the poetic/scientific opposite of 'austral'. Both are used in geography and ecology."},

    {type:"teach", trg:"ant\u00e1rtico", src:"Antarctic", pos:"adj", gender:null,
     note:"Adjective. Ant\u00e1rtico/ant\u00e1rtica.\nFrom Greek: anti (opposite) + arktikos (of the bear).",
     example:"A: Las temperaturas ant\u00e1rticas son muy bajas.\nB: Pueden llegar a menos sesenta grados.",
     exampleSrc:"A: Antarctic temperatures are very low.\nB: They can reach minus sixty degrees.",
     funFact:"'Ant-' (opposite) + 'arktikos' (of the bear, i.e. the constellation). The Arctic is under the Great Bear; the Antarctic is its opposite."},

    {type:"teach", trg:"el antioxidante", src:"the antioxidant", pos:"noun", gender:"m",
     note:"Masculine noun. Substance that prevents oxidation.\nFound in fruits and vegetables.",
     example:"A: Los ar\u00e1ndanos tienen muchos antioxidantes.\nB: Por eso dicen que son tan sanos.",
     exampleSrc:"A: Blueberries have many antioxidants.\nB: That is why they say they are so healthy.",
     funFact:"Latin 'anti' (against) + 'oxidans' (oxidizing). The concept exploded in popular health culture in the 2000s, making foods like berries trendy."},

    {type:"mc",
     q:"\u00bfCu\u00e1l es el fen\u00f3meno luminoso del cielo nocturno en el norte?",
     opts:["la aurora boreal","la atm\u00f3sfera","el antioxidante","lo austral"],
     ans:"la aurora boreal",
     hint:"A natural light display in the sky, named after the northern wind god and the goddess of dawn."},

    {type:"teach", trg:"el b\u00e1lsamo", src:"the balm, balsam", pos:"noun", gender:"m",
     note:"Masculine noun. A soothing ointment.\nAlso figurative: un b\u00e1lsamo para el alma.",
     example:"A: Este b\u00e1lsamo para los labios es muy bueno.\nB: \u00bfDe qu\u00e9 marca es?",
     exampleSrc:"A: This lip balm is very good.\nB: What brand is it?",
     funFact:"From Latin 'balsamum', from Greek, from Semitic languages. The ancient Egyptians used balsam in mummification. Today's lip balm carries ancient roots."},

    {type:"teach", trg:"la cala", src:"the cove, small bay", pos:"noun", gender:"f",
     note:"Feminine noun. A small, sheltered bay.\nSpain's Mediterranean coast has beautiful calas.",
     example:"A: Encontramos una cala preciosa y tranquila.\nB: \u00bfCon agua cristalina?",
     exampleSrc:"A: We found a beautiful and quiet cove.\nB: With crystal clear water?",
     funFact:"Possibly from Arabic 'qal'a' (fortress) or pre-Roman origin. Mallorca and the Costa Brava are famous for their hidden calas with turquoise water."},

    {type:"teach", trg:"el acaso", src:"perhaps, by chance", pos:"noun", gender:null,
     note:"Adverb. Formal for 'quiz\u00e1s' or 'tal vez'.\nSi acaso = if anything, just in case.",
     example:"A: Acaso llueva esta tarde.\nB: Mejor llevamos paraguas.",
     exampleSrc:"A: Perhaps it will rain this afternoon.\nB: Better take an umbrella.",
     funFact:"From Latin 'a casu' (by chance). More literary than 'quiz\u00e1s'. 'Si acaso' (just in case) is extremely common in everyday speech though."},

    {type:"teach", trg:"la aversi\u00f3n", src:"the aversion, dislike", pos:"noun", gender:"f",
     note:"Feminine noun. Strong dislike or disgust.\nSentir aversi\u00f3n por = to feel aversion toward.",
     example:"A: Tiene aversi\u00f3n a las alturas.\nB: Entonces no subamos a la torre.",
     exampleSrc:"A: She has an aversion to heights.\nB: Then let's not go up the tower.",
     funFact:"From Latin 'aversio' (turning away). Literally turning away from something unpleasant. Stronger than 'desagrado' but weaker than 'odio'."},

    {type:"fb",
     s:"Encontramos una {1} escondida con agua cristalina.",
     a:["cala"],
     opts:["cala","brasa","aurora","burbuja"],
     hint:"A small, sheltered bay along the coast, often with clear water and hidden from view.",
     sSrc:"We found a hidden {1} with crystal clear water."},

    {type:"teach", trg:"el asco", src:"the disgust, revulsion", pos:"noun", gender:"m",
     note:"Masculine noun. Strong feeling of repulsion.\nDar asco = to disgust. \u00a1Qu\u00e9 asco! = How gross!",
     example:"A: \u00a1Qu\u00e9 asco! Hay una cucaracha.\nB: Tranquilo, la saco de aqu\u00ed.",
     exampleSrc:"A: How gross! There is a cockroach.\nB: Calm down, I will get it out of here.",
     funFact:"Origin debated, possibly from Vulgar Latin 'ascu'. '\u00a1Qu\u00e9 asco!' is one of the most common exclamations in Spanish. Kids say it about everything."},

    {type:"teach", trg:"el aseo", src:"the cleanliness, washroom", pos:"noun", gender:"m",
     note:"Masculine noun. Hygiene or a restroom.\nAseos = restrooms (in public places).",
     example:"A: \u00bfD\u00f3nde est\u00e1n los aseos?\nB: Al fondo del pasillo, a la izquierda.",
     exampleSrc:"A: Where are the restrooms?\nB: At the end of the hallway, on the left.",
     funFact:"From 'asear' (to clean up). In Spain, 'aseos' is the polite word for public restrooms. At home, 'cuarto de ba\u00f1o' (bathroom) is used."},

    {type:"teach", trg:"la amenaza", src:"the threat", pos:"noun", gender:"f",
     note:"Feminine noun. A danger or warning of harm.\nAmenazar = to threaten.",
     example:"A: El cambio clim\u00e1tico es una amenaza real.\nB: Tenemos que actuar ya.",
     exampleSrc:"A: Climate change is a real threat.\nB: We need to act now.",
     funFact:"From Latin 'minacia' (threat), from 'minari' (to threaten). The shift from Latin 'm' to Spanish 'am-' happened through Vulgar Latin pronunciation changes."},

    {type:"teach", trg:"el auxilio", src:"the help, aid", pos:"noun", gender:"m",
     note:"Masculine noun. Urgent assistance.\n\u00a1Auxilio! = Help! Primeros auxilios = first aid.",
     example:"A: \u00a1Auxilio! \u00a1Alguien necesita ayuda!\nB: Voy a llamar a una ambulancia.",
     exampleSrc:"A: Help! Someone needs help!\nB: I am going to call an ambulance.",
     funFact:"From Latin 'auxilium' (help). '\u00a1Auxilio!' is the formal cry for help. '\u00a1Socorro!' is more common in everyday emergencies. Both work."},

    {type:"mc",
     q:"\u00bfC\u00f3mo se llama un lugar peque\u00f1o y protegido en la costa?",
     opts:["una amenaza","una cala","una brecha","una brasa"],
     ans:"una cala",
     hint:"A small sheltered inlet along the Mediterranean coast, popular with swimmers and sunbathers."},

    {type:"teach", trg:"azucarar", src:"to add sugar to, to sweeten", pos:"verb", gender:null,
     note:"Regular -ar verb. From 'az\u00facar' (sugar).\nAzucarar el caf\u00e9 = to add sugar to coffee.",
     example:"A: \u00bfAzucaro el caf\u00e9?\nB: No, lo prefiero sin az\u00facar.",
     exampleSrc:"A: Shall I add sugar to the coffee?\nB: No, I prefer it without sugar.",
     funFact:"From 'az\u00facar', from Arabic 'as-sukkar', from Sanskrit 'sharkara' (gravel, sugar). The word traveled from India to Arabia to Spain."},

    {type:"teach", trg:"el acero", src:"the steel", pos:"noun", gender:"m",
     note:"Masculine noun. A strong metal alloy.\nAcero inoxidable = stainless steel.",
     example:"A: Esta sart\u00e9n es de acero inoxidable.\nB: Es la mejor para cocinar.",
     exampleSrc:"A: This frying pan is stainless steel.\nB: It is the best for cooking.",
     funFact:"From Latin 'acies' (edge, sharpness). Toledo was famous for its steel swords since Roman times. 'Acero de Toledo' was the finest blade steel."},

    {type:"fb",
     s:"El cambio clim\u00e1tico es una {1} para toda la humanidad.",
     a:["amenaza"],
     opts:["amenaza","aurora","atm\u00f3sfera","alineaci\u00f3n"],
     hint:"A noun meaning a danger or warning of potential harm to come.",
     sSrc:"Climate change is a {1} to all of humanity."},

    {type:"match", pairs:[
      {trg:"austral", src:"southern"},
      {trg:"boreal", src:"northern"},
      {trg:"cala", src:"cove"},
      {trg:"amenaza", src:"threat"},
      {trg:"auxilio", src:"help"}
    ]}
  ]
};
export default LESSON_16;
