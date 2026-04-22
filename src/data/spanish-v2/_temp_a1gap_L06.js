// L06: Nature & Animals. The natural world
const LESSON_6 = {
  id:"esv2_a1gap_l6", title:"La naturaleza", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La naturaleza",
     desc:"Explore the natural world in Spanish. Animals, water, air, and the landscape around you.",
     goals:["Learn 20 nature and animal words","Describe the natural environment","Use nature vocabulary in context"]},

    {type:"teach", trg:"el agua", src:"the water", pos:"noun", gender:"f",
     note:"Feminine noun, but uses 'el' (el agua, not la agua).\nLike 'el alma', to avoid two 'a' sounds.",
     example:"A: \u00bfQuieres agua?\nB: Sí, un vaso de agua, por favor.",
     exampleSrc:"A: Do you want water?\nB: Yes, a glass of water, please.",
     funFact:"Feminine despite 'el'. You say 'el agua fría' (cold water) with feminine adjective. From Latin 'aqua'."},

    {type:"teach", trg:"el aire", src:"the air", pos:"noun", gender:"m",
     note:"Masculine noun. Aire libre = open air, outdoors.\nAire acondicionado = air conditioning.",
     example:"A: Vamos al aire libre.\nB: Sí, hace buen tiempo.",
     exampleSrc:"A: Let's go outdoors.\nB: Yes, the weather is nice.",
     funFact:"From Latin 'aer', from Greek 'aer'. 'Al aire libre' (in the open air) is a very common expression."},

    {type:"teach", trg:"el animal", src:"the animal", pos:"noun", gender:"m",
     note:"Masculine noun. Animal doméstico = pet.\nAnimal salvaje = wild animal.",
     example:"A: \u00bfTe gustan los animales?\nB: Sí, tengo dos gatos.",
     exampleSrc:"A: Do you like animals?\nB: Yes, I have two cats.",
     funFact:"From Latin 'animalis' (having breath), from 'anima' (soul, breath). Animals are literally 'those who breathe'."},

    {type:"teach", trg:"el ave", src:"the bird", pos:"noun", gender:"f",
     note:"Feminine noun, but uses 'el' (el ave).\nMore literary than 'pájaro' (everyday bird).",
     example:"A: Mira esa ave tan grande.\nB: Es un águila.",
     exampleSrc:"A: Look at that big bird.\nB: It is an eagle.",
     funFact:"From Latin 'avis' (bird). Uses 'el' like 'el agua' and 'el alma'. The word 'avión' (airplane) comes from this root."},

    {type:"teach", trg:"la arena", src:"the sand", pos:"noun", gender:"f",
     note:"Feminine noun. Playa de arena = sandy beach.\nAlso means 'arena' (from same root).",
     example:"A: Me gusta caminar por la arena.\nB: A mí también.",
     exampleSrc:"A: I like to walk on the sand.\nB: Me too.",
     funFact:"From Latin 'arena' (sand). The Roman arena was covered in sand to absorb blood during gladiator fights."},

    {type:"teach", trg:"la ballena", src:"the whale", pos:"noun", gender:"f",
     note:"Feminine noun. Ballena azul = blue whale.\nLargest animal on Earth.",
     example:"A: Vi una ballena en el mar.\nB: \u00bfDe verdad? Qué suerte.",
     exampleSrc:"A: I saw a whale in the sea.\nB: Really? How lucky.",
     funFact:"From Latin 'ballaena', from Greek 'phalaina'. You can spot whales off the coast of the Canary Islands."},

    {type:"mc",
     q:"\u00bfQué artículo usa la palabra 'agua'?",
     opts:["el agua","la agua","un agua","lo agua"],
     ans:"el agua",
     hint:"Some feminine nouns starting with stressed 'a' use 'el' instead of 'la' to avoid the double-a sound."},

    {type:"teach", trg:"la bahía", src:"the bay", pos:"noun", gender:"f",
     note:"Feminine noun. La bahía de Cádiz = the Bay of Cádiz.\nCoastal geography term.",
     example:"A: La bahía es muy bonita.\nB: Sí, el agua es azul.",
     exampleSrc:"A: The bay is very beautiful.\nB: Yes, the water is blue.",
     funFact:"Possibly from French 'baie'. Spain has stunning bays, from the Bay of Biscay (Golfo de Vizcaya) to tropical ones in the Canaries."},

    {type:"teach", trg:"el arco", src:"the arch, bow", pos:"noun", gender:"m",
     note:"Masculine noun. Arco iris = rainbow.\nAlso: arch in architecture.",
     example:"A: Mira, hay un arco iris.\nB: Qué bonito, tiene todos los colores.",
     exampleSrc:"A: Look, there is a rainbow.\nB: How beautiful, it has all the colors.",
     funFact:"From Latin 'arcus'. 'Arco iris' literally means 'Iris's bow'. Iris was the Greek goddess of the rainbow."},

    {type:"teach", trg:"la agricultura", src:"agriculture", pos:"noun", gender:"f",
     note:"Feminine noun. Spain has a strong agricultural sector.\nOlives, wine, citrus fruits.",
     example:"A: La agricultura es importante en España.\nB: Sí, producen mucho aceite de oliva.",
     exampleSrc:"A: Agriculture is important in Spain.\nB: Yes, they produce a lot of olive oil.",
     funFact:"From Latin 'agricultura' (field cultivation). Spain is Europe's largest fruit and vegetable exporter."},

    {type:"teach", trg:"abundante", src:"abundant, plentiful", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine.\nComida abundante = plentiful food.",
     example:"A: La comida es muy abundante.\nB: Sí, no puedo comer más.",
     exampleSrc:"A: The food is very plentiful.\nB: Yes, I cannot eat any more.",
     funFact:"From Latin 'abundans' (overflowing), from 'unda' (wave). Abundance originally meant 'overflowing like water'."},

    {type:"fb",
     s:"Mira, después de la lluvia hay un {1} iris en el cielo.",
     a:["arco"],
     opts:["arco","aire","animal","ave"],
     hint:"This word means bow or arch. Combined with 'iris' it describes the colorful phenomenon after rain.",
     sSrc:"Look, after the rain there is a rain{1} in the sky."},

    {type:"teach", trg:"el archipiélago", src:"the archipelago", pos:"noun", gender:"m",
     note:"Masculine noun. Spain has two: Canarias and Baleares.\nGroup of islands.",
     example:"A: Las Canarias son un archipiélago.\nB: \u00bfCuántas islas tiene?",
     exampleSrc:"A: The Canary Islands are an archipelago.\nB: How many islands does it have?",
     funFact:"From Italian 'arcipelago', originally the name for the Aegean Sea. Spain's two archipelagos attract millions of tourists yearly."},

    {type:"teach", trg:"la altura", src:"the height, altitude", pos:"noun", gender:"f",
     note:"Feminine noun. A una altura de = at a height of.\nFrom alto (tall, high).",
     example:"A: Madrid está a mucha altura.\nB: Sí, a más de 600 metros.",
     exampleSrc:"A: Madrid is at a high altitude.\nB: Yes, at more than 600 meters.",
     funFact:"Madrid is the highest capital in the European Union at 667 meters above sea level."},

    {type:"teach", trg:"el ambiente", src:"the environment, atmosphere", pos:"noun", gender:"m",
     note:"Masculine noun. Medio ambiente = environment.\nBuen ambiente = good atmosphere.",
     example:"A: Este bar tiene buen ambiente.\nB: Sí, la gente es muy simpática.",
     exampleSrc:"A: This bar has a good atmosphere.\nB: Yes, the people are very friendly.",
     funFact:"From Latin 'ambiens' (surrounding). 'Medio ambiente' (environment) literally means 'surrounding medium'."},

    {type:"teach", trg:"la alubia", src:"the bean", pos:"noun", gender:"f",
     note:"Feminine noun. Alubias blancas = white beans.\nRegional names vary: judía, frijol.",
     example:"A: Hoy cocino alubias.\nB: \u00bfCon chorizo?\nA: Claro.",
     exampleSrc:"A: Today I am cooking beans.\nB: With chorizo?\nA: Of course.",
     funFact:"From Arabic 'al-lubiya'. Bean stews are winter staples across Spain. The Asturian 'fabada' is the most famous."},

    {type:"mc",
     q:"\u00bfQué archipiélagos tiene España?",
     opts:["Canarias y Sicilia","Canarias y Baleares","Canarias y Azores","Baleares y Madeira"],
     ans:"Canarias y Baleares",
     hint:"One is in the Atlantic Ocean near Africa, the other is in the Mediterranean Sea."},

    {type:"teach", trg:"el almendro", src:"the almond tree", pos:"noun", gender:"m",
     note:"Masculine noun. Tree names often end in -o (masculine).\nAlmendro vs almendra (the nut).",
     example:"A: Los almendros están en flor.\nB: Sí, es precioso en primavera.",
     exampleSrc:"A: The almond trees are in bloom.\nB: Yes, it is beautiful in spring.",
     funFact:"The almond tree blooms in February, one of the earliest signs of spring. Mallorca's almond blossom season is famous."},

    {type:"teach", trg:"agradable", src:"pleasant, nice", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine.\nEl clima es agradable = The weather is pleasant.",
     example:"A: El tiempo es muy agradable hoy.\nB: Sí, perfecto para pasear.",
     exampleSrc:"A: The weather is very pleasant today.\nB: Yes, perfect for a walk.",
     funFact:"From 'agradar' (to please). The prefix 'a-' turns the noun 'grado' (degree, pleasure) into a verb and then an adjective."},

    {type:"teach", trg:"acuático", src:"aquatic", pos:"adj", gender:null,
     note:"Adjective. Parque acuático = water park.\nDeporte acuático = water sport.",
     example:"A: Vamos al parque acuático.\nB: Genial, me encanta nadar.",
     exampleSrc:"A: Let's go to the water park.\nB: Great, I love swimming.",
     funFact:"From Latin 'aquaticus'. Like 'agua', the root is the Latin 'aqua'. Notice how many Spanish water words start with 'a'."},

    {type:"match", pairs:[
      {trg:"agua", src:"water"},
      {trg:"aire", src:"air"},
      {trg:"ballena", src:"whale"},
      {trg:"arena", src:"sand"},
      {trg:"ambiente", src:"environment"}
    ]},

    {type:"fb",
     s:"Las Canarias son un {1} de siete islas principales.",
     a:["archipiélago"],
     opts:["archipiélago","ambiente","animal","almendro"],
     hint:"This geographic term describes a group or chain of islands in the ocean.",
     sSrc:"The Canary Islands are an {1} of seven main islands."},
  ]
};
export default LESSON_6;
