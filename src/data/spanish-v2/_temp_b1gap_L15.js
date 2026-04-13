// L15: Education & Learning - Schools, knowledge, and academic life
const LESSON_15 = {
  id:"esv2_b1gap_l15", title:"Educaci\u00f3n y aprendizaje", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Educaci\u00f3n y aprendizaje",
     desc:"Enter the world of education. Learn vocabulary for schools, academic life, and the pursuit of knowledge.",
     goals:["Learn 20 education and learning words","Talk about schools and academic topics","Describe learning experiences"]},

    {type:"teach", trg:"el arque\u00f3logo", src:"the archaeologist", pos:"noun", gender:"m",
     note:"Masculine noun. La arque\u00f3loga = female.\nSomeone who studies ancient civilizations.",
     example:"A: Los arque\u00f3logos encontraron ruinas romanas.\nB: \u00bfD\u00f3nde? \u00bfCerca de aqu\u00ed?",
     exampleSrc:"A: The archaeologists found Roman ruins.\nB: Where? Near here?",
     funFact:"From Greek 'arkhaios' (ancient) + 'logos' (study). Spain is rich in archaeological sites: Roman Merida, Moorish Alhambra, Altamira cave paintings."},

    {type:"teach", trg:"el acierto", src:"the correct answer, good choice", pos:"noun", gender:"m",
     note:"Masculine noun. Getting something right.\nUn acierto = a hit, a success.",
     example:"A: \u00a1Diez aciertos en el examen!\nB: \u00a1Muy bien! Has estudiado mucho.",
     exampleSrc:"A: Ten correct answers on the exam!\nB: Very well! You have studied a lot.",
     funFact:"From 'acertar' (to get right), from Latin 'certus' (certain). In game shows, each 'acierto' scores points. Opposite: 'fallo' (miss, error)."},

    {type:"teach", trg:"el acercamiento", src:"the approach, rapprochement", pos:"noun", gender:"m",
     note:"Masculine noun. From 'acercar' (to bring closer).\nCan be physical or figurative.",
     example:"A: Hubo un acercamiento entre los dos pa\u00edses.\nB: Eso es una buena noticia.",
     exampleSrc:"A: There was a rapprochement between the two countries.\nB: That is good news.",
     funFact:"From 'a-' + 'cerca' (near). A diplomatic 'acercamiento' means two sides moving closer to agreement. Also used for personal relationships."},

    {type:"teach", trg:"abundar", src:"to abound, to be plentiful", pos:"verb", gender:null,
     note:"Regular -ar verb. To exist in large quantities.\nAbundan los errores = errors abound.",
     example:"A: En esta regi\u00f3n abundan los olivos.\nB: Por eso producen tanto aceite.",
     exampleSrc:"A: In this region olive trees abound.\nB: That is why they produce so much oil.",
     funFact:"From Latin 'abundare' (to overflow), from 'unda' (wave). When something 'overflows' like waves, there is plenty of it."},

    {type:"teach", trg:"acentuar", src:"to accentuate, to stress", pos:"verb", gender:null,
     note:"Regular -ar verb. To emphasize or add an accent mark.\nAcentuar una s\u00edlaba = to stress a syllable.",
     example:"A: Hay que acentuar la \u00faltima s\u00edlaba.\nB: \u00bfCon tilde o solo con la voz?",
     exampleSrc:"A: You need to stress the last syllable.\nB: With a written accent or just vocally?",
     funFact:"From 'acento' (accent), from Latin 'accentus' (singing to). Spanish accent marks (tildes) follow strict rules that help pronunciation."},

    {type:"mc",
     q:"\u00bfQui\u00e9n estudia civilizaciones antiguas desenterrando objetos?",
     opts:["el arque\u00f3logo","el asesor","el artesano","el admirador"],
     ans:"el arque\u00f3logo",
     hint:"A scientist who excavates ancient sites to study past civilizations and their artifacts."},

    {type:"teach", trg:"adherir", src:"to adhere, to stick", pos:"verb", gender:null,
     note:"Irregular -ir verb. e > ie: adhiero.\nAdherirse a = to join (an idea, group).",
     example:"A: \u00bfTe adhieres a nuestra propuesta?\nB: S\u00ed, estoy de acuerdo.",
     exampleSrc:"A: Do you support our proposal?\nB: Yes, I agree.",
     funFact:"From Latin 'adhaerere' (to stick to). The figurative use 'adherirse a un partido' (to join a party) treats political alignment as 'sticking to' a group."},

    {type:"teach", trg:"agregar", src:"to add, to attach", pos:"verb", gender:null,
     note:"Regular -ar verb. To add something to a group.\nAgregar un amigo = to add a friend (social media).",
     example:"A: Agrega un poco de sal a la sopa.\nB: \u00bfCu\u00e1nta? \u00bfUna cucharadita?",
     exampleSrc:"A: Add a bit of salt to the soup.\nB: How much? A teaspoon?",
     funFact:"From Latin 'aggregare' (to join to a flock), from 'grex' (flock). In social media, 'agregar' is 'to add' (a friend). 'A\u00f1adir' is a synonym."},

    {type:"teach", trg:"alertar", src:"to alert, to warn", pos:"verb", gender:null,
     note:"Regular -ar verb. To warn of danger.\nAlerta = alert (noun/adjective).",
     example:"A: La polic\u00eda alert\u00f3 a los vecinos del peligro.\nB: Menos mal que actuaron r\u00e1pido.",
     exampleSrc:"A: The police alerted the neighbors of the danger.\nB: Thank goodness they acted quickly.",
     funFact:"From Italian 'all'erta' (on the watch), from 'erta' (steep place). Guards stood on high ground ('erta') to watch for danger."},

    {type:"teach", trg:"agradar", src:"to please, to be pleasing", pos:"verb", gender:null,
     note:"Regular -ar verb. Works like 'gustar'.\nMe agrada = it pleases me.",
     example:"A: Me agrada tu compa\u00f1\u00eda.\nB: Gracias, a m\u00ed tambi\u00e9n me agrada la tuya.",
     exampleSrc:"A: I enjoy your company.\nB: Thank you, I enjoy yours too.",
     funFact:"From Latin 'gratus' (pleasing). 'Agradable' (pleasant) and 'agradecer' (to thank) share this root. All connect to things that please."},

    {type:"fb",
     s:"Los arque\u00f3logos {1} en esta zona muchos restos romanos.",
     a:["encontraron"],
     opts:["encontraron","abundaron","agregaron","alertaron"],
     hint:"Past tense of 'encontrar' (to find). Archaeologists excavate and discover artifacts.",
     sSrc:"The archaeologists {1} many Roman remains in this area."},

    {type:"teach", trg:"el aprovechamiento", src:"the use, utilization", pos:"noun", gender:"m",
     note:"Masculine noun. Making good use of something.\nAprovechamiento de recursos = resource utilization.",
     example:"A: El aprovechamiento del agua es fundamental.\nB: S\u00ed, no podemos desperdiciarla.",
     exampleSrc:"A: The utilization of water is fundamental.\nB: Yes, we cannot waste it.",
     funFact:"From 'aprovechar' (to take advantage of). '\u00a1Que aproveche!' is said before meals, like 'Bon appetit!' Literally: 'May it serve you well!'"},

    {type:"teach", trg:"el analfabetismo", src:"the illiteracy", pos:"noun", gender:"m",
     note:"Masculine noun. Not being able to read or write.\nAnalfabeto = illiterate.",
     example:"A: El analfabetismo ha disminuido mucho.\nB: Gracias a la educaci\u00f3n p\u00fablica.",
     exampleSrc:"A: Illiteracy has decreased a lot.\nB: Thanks to public education.",
     funFact:"From Greek 'a-' (without) + 'alphabetos'. In 1900, over 50% of Spaniards were illiterate. Today it is under 2%, one of the biggest social transformations."},

    {type:"teach", trg:"el apartado", src:"the section, paragraph", pos:"noun", gender:"m",
     note:"Masculine noun. A section of a text or form.\nApartado de correos = PO box.",
     example:"A: Lee el apartado tres del contrato.\nB: \u00bfD\u00f3nde habla de las condiciones?",
     exampleSrc:"A: Read section three of the contract.\nB: Where it talks about the conditions?",
     funFact:"From 'apartar' (to separate). An 'apartado' is a separated section. 'Apartado de correos' (PO box) is a separated place for mail."},

    {type:"teach", trg:"la alineaci\u00f3n", src:"the alignment, lineup", pos:"noun", gender:"f",
     note:"Feminine noun. From 'alinear' (to align).\nAlso: football team lineup.",
     example:"A: La alineaci\u00f3n del equipo est\u00e1 lista.\nB: \u00bfJuega el delantero nuevo?",
     exampleSrc:"A: The team lineup is ready.\nB: Is the new forward playing?",
     funFact:"From 'a-' + 'l\u00ednea' (line). In football, the 'alineaci\u00f3n' is announced before each match. It also means alignment in mechanics and typography."},

    {type:"mc",
     q:"\u00bfQu\u00e9 problema social se combate con la educaci\u00f3n p\u00fablica?",
     opts:["el analfabetismo","el aprovechamiento","el acercamiento","el apartado"],
     ans:"el analfabetismo",
     hint:"The inability to read and write, which has been greatly reduced through public schooling."},

    {type:"teach", trg:"el ateneo", src:"the atheneum, cultural center", pos:"noun", gender:"m",
     note:"Masculine noun. A cultural or literary institution.\nNamed after the Greek goddess Athena.",
     example:"A: Hay una conferencia en el ateneo esta noche.\nB: \u00bfSobre qu\u00e9 tema?",
     exampleSrc:"A: There is a lecture at the atheneum tonight.\nB: About what topic?",
     funFact:"Named after Athena, Greek goddess of wisdom. Madrid's Ateneo, founded in 1835, has been a key intellectual hub where major Spanish thinkers debated."},

    {type:"teach", trg:"asentar", src:"to settle, to establish", pos:"verb", gender:null,
     note:"Irregular -ar verb. e > ie: asiento.\nAsentarse = to settle down in a place.",
     example:"A: Se asentaron en un pueblo peque\u00f1o.\nB: Les gusta la vida tranquila.",
     exampleSrc:"A: They settled in a small town.\nB: They like the quiet life.",
     funFact:"From 'a-' + 'sentar' (to sit), from Latin 'sedere'. To 'settle' is literally to 'sit down' in a place. 'Asentamiento' is a settlement."},

    {type:"fb",
     s:"Lee el {1} cuatro del reglamento antes de firmar.",
     a:["apartado"],
     opts:["apartado","ateneo","acercamiento","aprovechamiento"],
     hint:"A noun meaning 'section' or 'paragraph', a separated part of a document.",
     sSrc:"Read {1} four of the regulations before signing."},

    {type:"match", pairs:[
      {trg:"arque\u00f3logo", src:"archaeologist"},
      {trg:"analfabetismo", src:"illiteracy"},
      {trg:"aprovechamiento", src:"utilization"},
      {trg:"apartado", src:"section"},
      {trg:"agradar", src:"to please"}
    ]}
  ]
};
export default LESSON_15;
