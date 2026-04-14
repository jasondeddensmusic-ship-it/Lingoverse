// Lesson 9 — Arte y literatura (Art and Literature)
const LESSON_9 = {id:"esv2_b2g9_l9", title:"Arte y literatura", icon:"\u{1F3A8}", xp:25, board:true, steps:[
  {type:"intro", title:"Arte y literatura",
   desc:"Discuss art, literature, and figurative language. From metaphors to manuscripts, these terms unlock deeper cultural conversations.",
   goals:["Learn 10 terms for art, literature, and rhetoric","Discuss literary devices in Spanish","Use vocabulary for cultural criticism and analysis"]},

  {type:"teach", trg:"la met\u00e1fora", src:"the metaphor", pos:"noun", gender:"f",
   note:"From Greek metaphora (transfer).\nA figure of speech comparing two unlike things.",
   example:"A: 'La vida es un viaje' es una met\u00e1fora muy com\u00fan.\nB: S\u00ed, comparamos la vida con un camino.\nA: Las met\u00e1foras hacen el lenguaje m\u00e1s rico.\nB: Y m\u00e1s po\u00e9tico tambi\u00e9n.",
   exampleSrc:"A: 'Life is a journey' is a very common metaphor.\nB: Yes, we compare life with a path.\nA: Metaphors make language richer.\nB: And more poetic too.",
   funFact:"Spanish poetry is especially rich in metaphors. Lorca famously called death 'la noche sin fondo' (the bottomless night)."},

  {type:"teach", trg:"la metonimia", src:"metonymy", pos:"noun", gender:"f",
   note:"From Greek metonymia (change of name).\nUsing one thing to represent another related thing.",
   example:"A: Cuando decimos 'la Casa Blanca decidi\u00f3', usamos una metonimia.\nB: Porque el edificio no decide nada.\nA: Exacto. Nos referimos al presidente y su equipo.\nB: El lenguaje est\u00e1 lleno de metonimias.",
   exampleSrc:"A: When we say 'the White House decided', we use metonymy.\nB: Because the building does not decide anything.\nA: Exactly. We mean the president and their team.\nB: Language is full of metonymies.",
   funFact:"In Spanish, 'tomar una copa' (have a drink) is a metonimia: copa (glass) stands for the drink itself."},

  {type:"teach", trg:"el l\u00e9xico", src:"the lexicon; vocabulary", pos:"noun", gender:"m",
   note:"From Greek lexikon (of words).\nThe total vocabulary of a language or a person.",
   example:"A: El l\u00e9xico del espa\u00f1ol tiene influencias de muchas lenguas.\nB: S\u00ed, del \u00e1rabe, del lat\u00edn, del griego.\nA: Y ahora del ingl\u00e9s, con los anglicismos.\nB: El l\u00e9xico evoluciona constantemente.",
   exampleSrc:"A: The Spanish lexicon has influences from many languages.\nB: Yes, from Arabic, Latin, Greek.\nA: And now from English, with anglicisms.\nB: The lexicon evolves constantly.",
   funFact:"About 8% of the Spanish lexicon comes from Arabic, a legacy of nearly 800 years of Moorish presence."},

  {type:"teach", trg:"el idilio", src:"the idyll; love affair", pos:"noun", gender:"m",
   note:"From Greek eidyllion (short poem).\nA romantic relationship or an idealised pastoral scene.",
   example:"A: El idilio entre los dos protagonistas es precioso.\nB: Es una historia de amor muy tierna.\nA: Pero tiene un final tr\u00e1gico.\nB: Las mejores historias de amor suelen ser tristes.",
   exampleSrc:"A: The love affair between the two main characters is beautiful.\nB: It is a very tender love story.\nA: But it has a tragic ending.\nB: The best love stories are usually sad.",
   funFact:"An 'idilio' originally meant a short pastoral poem in ancient Greek literature, describing an idealised rural life."},

  {type:"teach", trg:"el fetiche", src:"the fetish", pos:"noun", gender:"m",
   note:"From Portuguese feiti\u00e7o (charm/sorcery).\nAn object of obsessive devotion or irrational reverence.",
   example:"A: Tiene un fetiche por los coches antiguos.\nB: S\u00ed, tiene una colecci\u00f3n impresionante.\nA: Es m\u00e1s que un hobby, es una obsesi\u00f3n.\nB: Bueno, hay obsesiones peores.",
   exampleSrc:"A: He has a fetish for vintage cars.\nB: Yes, he has an impressive collection.\nA: It is more than a hobby, it is an obsession.\nB: Well, there are worse obsessions.",
   funFact:"The word entered European languages through Portuguese sailors who encountered West African carved figures used in spiritual practices."},

  {type:"mc", q:"\u00bfQu\u00e9 es una metonimia?",
   opts:["Una comparaci\u00f3n directa entre dos cosas","Usar algo para representar otra cosa relacionada","Una exageraci\u00f3n ret\u00f3rica","Una repetici\u00f3n de sonidos"],
   ans:"Usar algo para representar otra cosa relacionada",
   hint:"In 'the Crown decided', the Crown stands for the monarch. The name of one thing substitutes for another."},

  {type:"teach", trg:"la literatura popular", src:"popular literature; folk literature", pos:"noun", gender:"f",
   note:"Literatura (literature) + popular (of the people).\nTraditional stories, ballads, and oral traditions.",
   example:"A: La literatura popular espa\u00f1ola es riqu\u00edsima.\nB: Los romances son un buen ejemplo.\nA: Tambi\u00e9n los cuentos populares como los de \u00c1lvarez Quintero.\nB: Es una tradici\u00f3n que hay que preservar.",
   exampleSrc:"A: Spanish popular literature is extremely rich.\nB: The ballads are a good example.\nA: Also folk tales like those of Alvarez Quintero.\nB: It is a tradition that must be preserved.",
   funFact:"The 'Romancero' is Spain's great collection of popular ballads, passed down orally since the Middle Ages."},

  {type:"teach", trg:"el listado", src:"the list; listing", pos:"noun", gender:"m",
   note:"From lista (list) + -ado (result suffix).\nA formal or official list of items.",
   example:"A: \u00bfTienes el listado de participantes?\nB: S\u00ed, hay ciento veinte inscritos.\nA: Necesitamos preparar las acreditaciones.\nB: Enviar\u00e9 el listado por correo electr\u00f3nico.",
   exampleSrc:"A: Do you have the list of participants?\nB: Yes, there are one hundred and twenty registered.\nA: We need to prepare the accreditations.\nB: I will send the list by email.",
   funFact:"In computing, 'listado' also means a printout or code listing. The word adapted to technology alongside its traditional meaning."},

  {type:"teach", trg:"el manual", src:"the manual; handbook", pos:"noun", gender:"m",
   note:"From Latin manualis (of the hand).\nAlso used as adjective: 'trabajo manual' (manual work).",
   example:"A: Lee el manual antes de usar la m\u00e1quina.\nB: \u00bfNo puedo simplemente encenderla?\nA: No. Sin leer el manual, puedes romperla.\nB: Vale, tienes raz\u00f3n. Lo leer\u00e9 primero.",
   exampleSrc:"A: Read the manual before using the machine.\nB: Can I not just switch it on?\nA: No. Without reading the manual, you can break it.\nB: Fine, you are right. I will read it first.",
   funFact:"The Spanish phrase 'RTFM' equivalent is 'lee el manual', universally understood in tech circles worldwide."},

  {type:"fb", s:"'La vida es un viaje' es un ejemplo de {1}.", a:["met\u00e1fora"],
   opts:["met\u00e1fora","metonimia","exageraci\u00f3n","definici\u00f3n"],
   hint:"A figure of speech that compares two different things directly, without using 'like' or 'as'.",
   sSrc:"'Life is a journey' is an example of {1}."},

  {type:"teach", trg:"el mapamundi", src:"the world map", pos:"noun", gender:"m",
   note:"From Latin mappa mundi (cloth of the world).\nA map showing the entire world.",
   example:"A: En la oficina tenemos un mapamundi enorme.\nB: \u00bfSe\u00f1al\u00e1is los pa\u00edses donde trabaj\u00e1is?\nA: S\u00ed, con chinchetas de colores.\nB: Es una forma visual de ver vuestro alcance global.",
   exampleSrc:"A: In the office we have a huge world map.\nB: Do you mark the countries where you work?\nA: Yes, with coloured pins.\nB: It is a visual way of seeing your global reach.",
   funFact:"The oldest surviving European mapamundi is the Hereford Mappa Mundi from around 1300, showing Jerusalem at its centre."},

  {type:"mc", q:"\u00bfQu\u00e9 porcentaje del l\u00e9xico espa\u00f1ol viene del \u00e1rabe?",
   opts:["Aproximadamente un 2%","Aproximadamente un 8%","Aproximadamente un 25%","Aproximadamente un 50%"],
   ans:"Aproximadamente un 8%",
   hint:"Nearly 800 years of Moorish presence left a significant but not dominant mark on the vocabulary."},

  {type:"fb", s:"Necesito el {1} de participantes para preparar las acreditaciones.", a:["listado"],
   opts:["listado","manual","l\u00e9xico","mapamundi"],
   hint:"A formal document with all the names of people who signed up.",
   sSrc:"I need the {1} of participants to prepare the accreditations."},

  {type:"match", pairs:[
    {trg:"met\u00e1fora", src:"metaphor"},
    {trg:"metonimia", src:"metonymy"},
    {trg:"l\u00e9xico", src:"lexicon; vocabulary"},
    {trg:"idilio", src:"idyll; love affair"},
    {trg:"mapamundi", src:"world map"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 era un idilio originalmente en la literatura griega?",
   opts:["Un poema \u00e9pico largo","Un poema corto sobre la vida rural","Una obra de teatro c\u00f3mica","Un discurso pol\u00edtico"],
   ans:"Un poema corto sobre la vida rural",
   hint:"The word comes from Greek 'eidyllion' (small picture), describing idealised pastoral scenes."},

  {type:"drag_fill", s:"La {1} compara dos cosas directamente. La {2} sustituye una cosa por otra relacionada.",
   blanks:{"1":"met\u00e1fora","2":"metonimia"},
   pool:["met\u00e1fora","metonimia","exageraci\u00f3n","definici\u00f3n","menci\u00f3n"],
   hint:"Two literary devices: one compares, the other substitutes."}
]};
export default LESSON_9;
