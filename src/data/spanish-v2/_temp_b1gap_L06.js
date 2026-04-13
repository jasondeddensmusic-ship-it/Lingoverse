// L06: Culture & Arts - Painting, crafts, and artistic expression
const LESSON_6 = {
  id:"esv2_b1gap_l6", title:"Arte y cultura", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arte y cultura",
     desc:"Discover the world of art and culture. Learn vocabulary for artistic techniques, crafts, and creative expression.",
     goals:["Learn 20 art and culture words","Describe artworks and techniques","Talk about creative activities"]},

    {type:"teach", trg:"la acuarela", src:"the watercolor", pos:"noun", gender:"f",
     note:"Feminine noun. Both the paint and the technique.\nPintar con acuarelas = to paint with watercolors.",
     example:"A: Este cuadro es una acuarela.\nB: Qu\u00e9 bonitos colores. Parece muy f\u00e1cil.",
     exampleSrc:"A: This painting is a watercolor.\nB: What beautiful colors. It looks very easy.",
     funFact:"From Italian 'acquarella', from 'acqua' (water). Watercolors use water as a solvent. Durer was one of the first great watercolor masters."},

    {type:"teach", trg:"el boceto", src:"the sketch, draft", pos:"noun", gender:"m",
     note:"Masculine noun. A preliminary drawing or plan.\nHacer un boceto = to make a sketch.",
     example:"A: Primero hago un boceto a l\u00e1piz.\nB: \u00bfY despu\u00e9s lo pintas?",
     exampleSrc:"A: First I make a pencil sketch.\nB: And then you paint it?",
     funFact:"From Italian 'bozzetto' (small rough model). Picasso's 'Guernica' had dozens of bocetos before the final painting."},

    {type:"teach", trg:"el bordado", src:"the embroidery", pos:"noun", gender:"m",
     note:"Masculine noun. Decorative needlework on fabric.\nAlso past participle of 'bordar'.",
     example:"A: Mira este bordado tan fino.\nB: Es precioso. \u00bfQui\u00e9n lo hizo?",
     exampleSrc:"A: Look at this fine embroidery.\nB: It is beautiful. Who made it?",
     funFact:"From Frankish 'bruzdan' (to embroider). Spanish embroidery traditions blend Moorish geometric patterns with European floral designs."},

    {type:"teach", trg:"bordar", src:"to embroider", pos:"verb", gender:null,
     note:"Regular -ar verb. Also colloquial: bordar algo = to nail it.\nBord\u00f3 el examen = she aced the exam.",
     example:"A: Mi abuela sabe bordar muy bien.\nB: \u00bfMe puede ense\u00f1ar?",
     exampleSrc:"A: My grandmother knows how to embroider very well.\nB: Can she teach me?",
     funFact:"The figurative use 'bordar algo' (to do something perfectly) compares flawless execution to the precision of embroidery stitches."},

    {type:"teach", trg:"el adorno", src:"the ornament, decoration", pos:"noun", gender:"m",
     note:"Masculine noun. Any decorative item.\nAdornos de Navidad = Christmas ornaments.",
     example:"A: \u00bfPonemos los adornos del \u00e1rbol?\nB: S\u00ed, \u00a1ya es Navidad!",
     exampleSrc:"A: Shall we put up the tree ornaments?\nB: Yes, it is Christmas already!",
     funFact:"From Latin 'adornare' (to equip, decorate). The verb 'adornar' and noun 'adorno' are used for everything from Christmas to cake decoration."},

    {type:"teach", trg:"adornar", src:"to decorate, to adorn", pos:"verb", gender:null,
     note:"Regular -ar verb. To add decorations.\nAdornar la casa = to decorate the house.",
     example:"A: Vamos a adornar el sal\u00f3n para la fiesta.\nB: Tengo globos y guirnaldas.",
     exampleSrc:"A: Let's decorate the living room for the party.\nB: I have balloons and garlands.",
     funFact:"From Latin 'adornare' (to furnish). In rhetoric, 'adornar un discurso' means to embellish a speech with elegant language."},

    {type:"mc",
     q:"\u00bfQu\u00e9 se hace antes de pintar un cuadro?",
     opts:["un boceto","un bordado","un adorno","una acuarela"],
     ans:"un boceto",
     hint:"A preliminary pencil drawing that serves as the plan for the final artwork."},

    {type:"teach", trg:"el artesano", src:"the artisan, craftsman", pos:"noun", gender:"m",
     note:"Masculine noun. La artesana = female artisan.\nSomeone who makes things by hand.",
     example:"A: Este plato lo hizo un artesano local.\nB: Se nota la calidad del trabajo.",
     exampleSrc:"A: A local artisan made this plate.\nB: You can tell the quality of the work.",
     funFact:"From Italian 'artigiano', from Latin 'ars' (art, skill). Spanish markets often have a 'mercado artesanal' with handmade goods."},

    {type:"teach", trg:"la alegor\u00eda", src:"the allegory", pos:"noun", gender:"f",
     note:"Feminine noun. A symbolic story or representation.\nCommon in literature and art.",
     example:"A: Esta pintura es una alegor\u00eda de la justicia.\nB: \u00bfPor eso lleva una balanza?",
     exampleSrc:"A: This painting is an allegory of justice.\nB: Is that why she carries scales?",
     funFact:"From Greek 'allegoria' (speaking otherwise). Cervantes' Don Quixote is full of allegories about idealism versus reality."},

    {type:"teach", trg:"el acorde", src:"the chord", pos:"noun", gender:"m",
     note:"Masculine noun. A combination of musical notes.\nAlso adjective: acorde con = in keeping with.",
     example:"A: \u00bfSabes tocar este acorde?\nB: S\u00ed, es un do mayor.",
     exampleSrc:"A: Do you know how to play this chord?\nB: Yes, it is a C major.",
     funFact:"From Latin 'accordare' (to bring into harmony). The adjective form 'acorde con' means 'in agreement with', maintaining the harmony metaphor."},

    {type:"teach", trg:"el activista", src:"the activist", pos:"noun", gender:"m",
     note:"Common gender noun. El/la activista.\nAlguien que lucha por una causa.",
     example:"A: Es activista por los derechos humanos.\nB: Es una causa muy importante.",
     exampleSrc:"A: She is an activist for human rights.\nB: It is a very important cause.",
     funFact:"From 'activo' + '-ista'. The -ista suffix creates agent nouns from adjectives. Like pianist from piano, activist from active."},

    {type:"fb",
     s:"Este cuadro est\u00e1 pintado con {1}, se notan los tonos suaves.",
     a:["acuarela"],
     opts:["acuarela","alegor\u00eda","bordado","adorno"],
     hint:"A painting technique that uses water-based pigments for soft, translucent effects.",
     sSrc:"This painting is done with {1}, you can see the soft tones."},

    {type:"teach", trg:"el argumento", src:"the plot, argument", pos:"noun", gender:"m",
     note:"Masculine noun. The plot of a story OR a reasoned argument.\nTwo distinct meanings.",
     example:"A: \u00bfDe qu\u00e9 va la pel\u00edcula?\nB: El argumento es sobre un viaje en el tiempo.",
     exampleSrc:"A: What is the movie about?\nB: The plot is about time travel.",
     funFact:"From Latin 'argumentum' (proof). False friend alert: in English, 'argument' usually means a dispute, but in Spanish it primarily means 'plot' or 'reasoning'."},

    {type:"teach", trg:"el amuleto", src:"the amulet, lucky charm", pos:"noun", gender:"m",
     note:"Masculine noun. An object believed to bring luck.\nCarried for protection.",
     example:"A: \u00bfQu\u00e9 es eso que llevas al cuello?\nB: Es un amuleto de mi abuela.",
     exampleSrc:"A: What is that you wear around your neck?\nB: It is an amulet from my grandmother.",
     funFact:"From Latin 'amuletum' (means of defense). The 'ojo turco' (evil eye charm) is one of the most popular amuletos in the Mediterranean."},

    {type:"teach", trg:"ancestral", src:"ancestral", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nRelated to ancestors or traditions.",
     example:"A: Es una tradici\u00f3n ancestral de esta regi\u00f3n.\nB: Tiene cientos de a\u00f1os.",
     exampleSrc:"A: It is an ancestral tradition of this region.\nB: It is hundreds of years old.",
     funFact:"From French 'ancestral', from Latin 'antecessor' (predecessor). Nearly identical in many European languages due to shared Latin roots."},

    {type:"teach", trg:"la alabanza", src:"the praise", pos:"noun", gender:"f",
     note:"Feminine noun. Words of admiration or worship.\nAlabar = to praise.",
     example:"A: Recibi\u00f3 muchas alabanzas por su trabajo.\nB: Se lo merece, es excelente.",
     exampleSrc:"A: She received a lot of praise for her work.\nB: She deserves it, it is excellent.",
     funFact:"From Arabic 'al-hamdh' (praise). In religious context, 'alabanza' often refers to worship songs. 'Alabado sea Dios' = Praise God."},

    {type:"mc",
     q:"\u00bfQu\u00e9 significa 'argumento' cuando hablamos de una pel\u00edcula?",
     opts:["La historia o trama","Una discusi\u00f3n","Un documento legal","Una nota musical"],
     ans:"La historia o trama",
     hint:"In Spanish, this word primarily refers to the storyline of a movie, book, or play. Not a dispute."},

    {type:"teach", trg:"la ambientaci\u00f3n", src:"the setting, ambiance", pos:"noun", gender:"f",
     note:"Feminine noun. The atmosphere or setting of a place.\nFrom 'ambientar' (to set the scene).",
     example:"A: La ambientaci\u00f3n del restaurante es perfecta.\nB: S\u00ed, la m\u00fasica y las luces crean un ambiente genial.",
     exampleSrc:"A: The ambiance of the restaurant is perfect.\nB: Yes, the music and lights create a great atmosphere.",
     funFact:"From 'ambiente' (environment) + '-aci\u00f3n'. In film and theater, 'ambientaci\u00f3n' refers to the set design, props, and atmosphere."},

    {type:"fb",
     s:"El {1} local vende cer\u00e1mica hecha a mano.",
     a:["artesano"],
     opts:["artesano","activista","argumento","amuleto"],
     hint:"A person who creates handmade goods using traditional craft techniques.",
     sSrc:"The local {1} sells handmade ceramics."},

    {type:"match", pairs:[
      {trg:"acuarela", src:"watercolor"},
      {trg:"boceto", src:"sketch"},
      {trg:"artesano", src:"artisan"},
      {trg:"argumento", src:"plot"},
      {trg:"alabanza", src:"praise"}
    ]}
  ]
};
export default LESSON_6;
