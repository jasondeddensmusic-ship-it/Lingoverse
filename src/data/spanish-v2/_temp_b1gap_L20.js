// L20: Family & Celebrations - Kinship, parties, and social life
const LESSON_20 = {
  id:"esv2_b1gap_l20", title:"Familia y celebraciones", icon:"\u{1F389}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Familia y celebraciones",
     desc:"Celebrate with family. Learn vocabulary for family ties, parties, and social traditions.",
     goals:["Learn 20 family and celebration words","Describe relationships and events","Talk about traditions and social gatherings"]},

    {type:"teach", trg:"el bisabuelo", src:"the great-grandfather", pos:"noun", gender:"m",
     note:"Masculine noun. La bisabuela = great-grandmother.\nBis- (twice) + abuelo (grandfather).",
     example:"A: Mi bisabuelo lleg\u00f3 de Italia en 1920.\nB: \u00a1Qu\u00e9 historia tan interesante!",
     exampleSrc:"A: My great-grandfather arrived from Italy in 1920.\nB: What an interesting story!",
     funFact:"The prefix 'bis-' (twice, double) adds a generation: abuelo > bisabuelo > tatarabuelo (great-great-grandfather). Latin 'bis' means twice."},

    {type:"teach", trg:"la amiga", src:"the friend (female)", pos:"noun", gender:"f",
     note:"Feminine noun. Female form of 'amigo'.\nMi mejor amiga = my best friend (female).",
     example:"A: Voy a cenar con mis amigas.\nB: \u00bfDonde quer\u00e9is ir?",
     exampleSrc:"A: I am going to dinner with my (female) friends.\nB: Where do you want to go?",
     funFact:"From Latin 'amica'. In Spanish, 'amigos' (masculine plural) can refer to a mixed group. 'Amigas' specifies an all-female group."},

    {type:"teach", trg:"el cabez\u00f3n", src:"the stubborn person, big-headed", pos:"noun", gender:"m",
     note:"Masculine noun/adjective. Cabez\u00f3n/cabezona.\nAugmentative of 'cabeza' (head).",
     example:"A: Es un cabez\u00f3n, nunca cambia de opini\u00f3n.\nB: D\u00e9jalo, no merece la pena discutir.",
     exampleSrc:"A: He is so stubborn, he never changes his mind.\nB: Leave it, it is not worth arguing.",
     funFact:"From 'cabeza' (head) + augmentative '-\u00f3n'. Someone with a figuratively 'big head' is too stubborn to listen. Used affectionately for headstrong children."},

    {type:"teach", trg:"el besito", src:"the little kiss", pos:"noun", gender:"m",
     note:"Masculine noun. Diminutive of 'beso' (kiss).\nDar un besito = to give a peck.",
     example:"A: Dale un besito a la abuela.\nB: \u00a1Hola, abuela! Te quiero.",
     exampleSrc:"A: Give grandma a little kiss.\nB: Hi, grandma! I love you.",
     funFact:"The '-ito' diminutive adds affection: beso > besito, abrazo > abracito. In Spanish culture, greeting with two kisses (one on each cheek) is standard."},

    {type:"teach", trg:"la cacería", src:"the hunt", pos:"noun", gender:"f",
     note:"Feminine noun. An organized hunting expedition.\nIr de cacer\u00eda = to go hunting.",
     example:"A: La cacer\u00eda es una tradici\u00f3n en esta regi\u00f3n.\nB: Cada vez hay m\u00e1s debate sobre ella.",
     exampleSrc:"A: Hunting is a tradition in this region.\nB: There is more and more debate about it.",
     funFact:"From 'cazar' (to hunt) + '-er\u00eda'. Hunting has deep roots in Spanish culture, from medieval royal hunts to modern 'monter\u00eda' (driven hunts) in Castile and Andalusia."},

    {type:"mc",
     q:"\u00bfQu\u00e9 es un bisabuelo?",
     opts:["El padre de tu abuelo","El hermano de tu padre","Un amigo de la familia","El primo de tu madre"],
     ans:"El padre de tu abuelo",
     hint:"The prefix 'bis-' means 'twice' or 'double', adding one generation beyond grandparent."},

    {type:"teach", trg:"el almirante", src:"the admiral", pos:"noun", gender:"m",
     note:"Masculine noun. The highest naval rank.\nFrom Arabic 'am\u00edr al-bahr' (commander of the sea).",
     example:"A: El almirante dirigi\u00f3 toda la flota.\nB: Es un rango muy importante.",
     exampleSrc:"A: The admiral commanded the entire fleet.\nB: It is a very important rank.",
     funFact:"From Arabic 'amir al-bahr' (commander of the sea). Col\u00f3n was named 'Almirante de la Mar Oc\u00e9ana' (Admiral of the Ocean Sea) by the Spanish Crown."},

    {type:"teach", trg:"el alfajor", src:"the alfajor (sweet)", pos:"noun", gender:"m",
     note:"Masculine noun. A traditional sweet.\nDifferent in Spain vs. Argentina.",
     example:"A: \u00bfHas probado los alfajores argentinos?\nB: S\u00ed, con dulce de leche. Riqu\u00edsimos.",
     exampleSrc:"A: Have you tried Argentine alfajores?\nB: Yes, with dulce de leche. Delicious.",
     funFact:"From Arabic 'al-hasu' (the filling). In Spain, alfajor is a honey-almond bar. In Argentina, it is two cookies with dulce de leche. Same name, different sweet."},

    {type:"teach", trg:"el alhaja", src:"the jewel, treasure", pos:"noun", gender:"f",
     note:"Feminine noun but uses 'el' sometimes.\nAlso figurative: a gem of a person.",
     example:"A: Esta pulsera es una alhaja de familia.\nB: Qu\u00e9 bonita, gu\u00e1rdala bien.",
     exampleSrc:"A: This bracelet is a family jewel.\nB: How beautiful, keep it safe.",
     funFact:"From Arabic 'al-haya' (the precious thing). Also used figuratively: 'Es una alhaja' means someone is a treasure, a wonderful person."},

    {type:"teach", trg:"el animal dom\u00e9stico", src:"the domestic animal, pet", pos:"noun", gender:"m",
     note:"Masculine noun. Compound noun.\nAlso 'mascota' (pet) is more common for house pets.",
     example:"A: \u00bfTienes alg\u00fan animal dom\u00e9stico?\nB: S\u00ed, un gato y un perro.",
     exampleSrc:"A: Do you have any pets?\nB: Yes, a cat and a dog.",
     funFact:"'Dom\u00e9stico' from Latin 'domesticus' (of the house). Spain has over 29 million pets. Dogs and cats are the most popular, followed by birds and fish."},

    {type:"fb",
     s:"Dale un {1} a tu hermanito antes de irte.",
     a:["besito"],
     opts:["besito","bocata","brebaje","brindis"],
     hint:"A diminutive form of 'beso', an affectionate peck typically given to family members.",
     sSrc:"Give your little brother a {1} before you leave."},

    {type:"teach", trg:"el botijo", src:"the clay water jug", pos:"noun", gender:"m",
     note:"Masculine noun. Traditional Spanish clay vessel.\nKeeps water cool through evaporation.",
     example:"A: El agua del botijo est\u00e1 fresca.\nB: Es la magia de la cer\u00e1mica.",
     exampleSrc:"A: The water from the clay jug is cool.\nB: It is the magic of ceramics.",
     funFact:"From 'bota' (wineskin). The botijo cools water through evaporation through its porous clay. A brilliant low-tech solution used in Spain for centuries."},

    {type:"teach", trg:"el cabrero", src:"the goatherd", pos:"noun", gender:"m",
     note:"Masculine noun. La cabrera = female goatherd.\nFrom 'cabra' (goat).",
     example:"A: El cabrero lleva sus cabras por la monta\u00f1a.\nB: Es un oficio muy antiguo.",
     exampleSrc:"A: The goatherd takes his goats through the mountain.\nB: It is a very old profession.",
     funFact:"From 'cabra' (goat) + '-ero' (profession). Goat cheese ('queso de cabra') is a staple of Spanish cuisine. The profession survives in rural mountain areas."},

    {type:"teach", trg:"la atalaya", src:"the watchtower, lookout", pos:"noun", gender:"f",
     note:"Feminine noun. A high point for watching.\nAlso a surname and a figurative vantage point.",
     example:"A: Desde la atalaya se ve toda la costa.\nB: \u00a1Qu\u00e9 vistas tan espectaculares!",
     exampleSrc:"A: From the watchtower you can see the whole coast.\nB: What spectacular views!",
     funFact:"From Arabic 'at-tala'i' (the sentinels). Watchtowers dot the Spanish coast, built to spot pirate ships. Many survive as tourist viewpoints."},

    {type:"teach", trg:"la barriguita", src:"the little belly", pos:"noun", gender:"f",
     note:"Feminine noun. Diminutive of 'barriga'.\nAffectionate term for a small belly.",
     example:"A: El beb\u00e9 tiene una barriguita preciosa.\nB: S\u00ed, est\u00e1 muy gordito.",
     exampleSrc:"A: The baby has a lovely little belly.\nB: Yes, he is very chubby.",
     funFact:"Double diminutive: 'barriga' + '-ita'. Spanish diminutives express affection, not just size. 'Barriguita' is tender. You would never use it mockingly."},

    {type:"mc",
     q:"\u00bfQu\u00e9 objeto tradicional espa\u00f1ol mantiene el agua fresca?",
     opts:["el bast\u00f3n","el botijo","el alfajor","el bong\u00f3"],
     ans:"el botijo",
     hint:"A porous clay vessel that uses evaporation to cool water naturally, used for centuries in Spain."},

    {type:"teach", trg:"la alhambra", src:"the Alhambra (metaphorical: treasure)", pos:"noun", gender:"f",
     note:"Feminine noun. From Arabic: 'the red one'.\nUsed poetically for anything magnificent.",
     example:"A: Granada y su Alhambra son \u00fanicas.\nB: Es el monumento m\u00e1s visitado de Espa\u00f1a.",
     exampleSrc:"A: Granada and its Alhambra are unique.\nB: It is the most visited monument in Spain.",
     funFact:"From Arabic 'al-hamra' (the red one), named for its reddish walls. Built by the Nasrid dynasty, it represents the peak of Moorish art in Spain."},

    {type:"teach", trg:"el amado", src:"the beloved", pos:"noun", gender:"m",
     note:"Masculine noun. La amada = female beloved.\nPoetic and literary word.",
     example:"A: Escribi\u00f3 un poema para su amada.\nB: Qu\u00e9 detalle tan rom\u00e1ntico.",
     exampleSrc:"A: He wrote a poem for his beloved.\nB: What a romantic gesture.",
     funFact:"Past participle of 'amar' (to love) used as a noun. Very literary. In everyday speech, Spaniards say 'mi amor', 'cari\u00f1o', or 'mi vida' instead."},

    {type:"fb",
     s:"Desde la {1} del castillo se vigila toda la comarca.",
     a:["atalaya"],
     opts:["atalaya","alcald\u00eda","arboleda","acera"],
     hint:"A high tower or vantage point used for watching the surrounding area, from Arabic.",
     sSrc:"From the {1} of the castle, the whole region is watched."},

    {type:"match", pairs:[
      {trg:"bisabuelo", src:"great-grandfather"},
      {trg:"alfajor", src:"alfajor (sweet)"},
      {trg:"botijo", src:"clay water jug"},
      {trg:"atalaya", src:"watchtower"},
      {trg:"amado", src:"beloved"}
    ]}
  ]
};
export default LESSON_20;
