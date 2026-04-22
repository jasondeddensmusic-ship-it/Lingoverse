// Lesson 19. Tecnologia y modernidad (Technology and Modernity)
const LESSON_19 = {id:"esv2_b2g9_l19", title:"Tecnolog\u00eda y modernidad", icon:"\u{1F4F1}", xp:25, board:true, steps:[
  {type:"intro", title:"Tecnolog\u00eda y modernidad",
   desc:"Navigate the vocabulary of technology, innovation, and the modern digital world. From GPS to casting calls, these terms define contemporary life.",
   goals:["Learn 10 terms for technology and modern life","Discuss innovation and digital culture","Use loanwords and neologisms correctly in Spanish"]},

  {type:"teach", trg:"el GPS", src:"GPS (Global Positioning System)", pos:"noun", gender:"m",
   note:"Pronounced 'heh-peh-EH-seh' in Spanish.\nSpanish keeps the English abbreviation.",
   example:"A: \u00bfTienes GPS en el coche?\nB: S\u00ed, pero prefiero usar el del m\u00f3vil.\nA: El GPS del m\u00f3vil es m\u00e1s preciso.\nB: Y se actualiza autom\u00e1ticamente.",
   exampleSrc:"A: Do you have GPS in the car?\nB: Yes, but I prefer to use the one on my phone.\nA: The phone GPS is more accurate.\nB: And it updates automatically.",
   funFact:"In Spain, GPS is pronounced letter by letter in Spanish: ge-pe-ese. Unlike English, the letters follow Spanish phonetics."},

  {type:"teach", trg:"el casting", src:"the casting; audition", pos:"noun", gender:"m",
   note:"English loanword.\nThe process of selecting actors for roles.",
   example:"A: Ma\u00f1ana tengo un casting para un anuncio.\nB: \u00a1Qu\u00e9 bien! \u00bfDe qu\u00e9 producto?\nA: De una marca de coches.\nB: Mu\u00e9strate natural. Eso es lo que buscan.",
   exampleSrc:"A: Tomorrow I have a casting for an advert.\nB: How exciting! For what product?\nA: For a car brand.\nB: Be natural. That is what they are looking for.",
   funFact:"The RAE accepts 'casting' as a valid Spanish word. There is no widely used Spanish equivalent."},

  {type:"teach", trg:"el computador", src:"the computer", pos:"noun", gender:"m",
   note:"From computar (to compute).\nUsed in Latin America. In Spain: 'el ordenador'.",
   example:"A: Mi computador es muy lento.\nB: \u00bfCu\u00e1ntos a\u00f1os tiene?\nA: Cinco. Necesito uno nuevo.\nB: En Espa\u00f1a decimos 'ordenador', pero es lo mismo.",
   exampleSrc:"A: My computer is very slow.\nB: How old is it?\nA: Five years. I need a new one.\nB: In Spain we say 'ordenador', but it is the same thing.",
   funFact:"Latin America uses 'computador/a' (from English 'computer'), while Spain uses 'ordenador' (from French 'ordinateur'). Both are correct."},

  {type:"teach", trg:"la fotonovela", src:"the photo novel; photo story", pos:"noun", gender:"f",
   note:"Foto (photo) + novela (novel).\nA narrative told through photographs with dialogue bubbles.",
   example:"A: Mi abuela le\u00eda fotonovelas en los a\u00f1os sesenta.\nB: \u00bfQu\u00e9 son exactamente?\nA: Historias con fotos y di\u00e1logos, como un c\u00f3mic.\nB: \u00a1Qu\u00e9 curioso! Es como un precursor de Instagram.",
   exampleSrc:"A: My grandmother read photo novels in the sixties.\nB: What are they exactly?\nA: Stories with photos and dialogue, like a comic.\nB: How curious! It is like a precursor of Instagram.",
   funFact:"Photo novels were hugely popular in Spain and Latin America from the 1950s to 1980s, with millions of weekly readers."},

  {type:"teach", trg:"el kiosco", src:"the kiosk; newsstand", pos:"noun", gender:"m",
   note:"From Turkish koshk (pavilion).\nAlso spelled 'quiosco'. A small stand selling newspapers.",
   example:"A: Voy al kiosco a comprar el peri\u00f3dico.\nB: \u00bfTodav\u00eda compras el peri\u00f3dico en papel?\nA: S\u00ed, me gusta leerlo con el caf\u00e9.\nB: Es un placer que se est\u00e1 perdiendo.",
   exampleSrc:"A: I am going to the newsstand to buy the newspaper.\nB: Do you still buy the newspaper in print?\nA: Yes, I like reading it with my coffee.\nB: It is a pleasure that is being lost.",
   funFact:"Spanish kioscos are disappearing. In 2000 there were over 30,000 in Spain; today fewer than 10,000 remain."},

  {type:"mc", q:"\u00bfCu\u00e1l es la diferencia entre 'computador' y 'ordenador'?",
   opts:["Uno es un port\u00e1til y otro un sobremesa","Computador se usa en Am\u00e9rica Latina, ordenador en Espa\u00f1a","Uno es m\u00e1s moderno que el otro","No hay diferencia"],
   ans:"Computador se usa en Am\u00e9rica Latina, ordenador en Espa\u00f1a",
   hint:"Both mean the same thing but come from different source languages: English vs. French."},

  {type:"teach", trg:"hiperconectar", src:"to hyperconnect", pos:"verb", gender:null,
   note:"Hiper- (hyper/over) + conectar (to connect).\nTo be excessively connected through technology.",
   example:"A: Vivimos en una sociedad hiperconectada.\nB: Es verdad. Estamos siempre con el m\u00f3vil.\nA: Deber\u00edamos desconectar de vez en cuando.\nB: Una desintoxicaci\u00f3n digital nos vendr\u00eda bien.",
   exampleSrc:"A: We live in a hyperconnected society.\nB: That is true. We are always on our phones.\nA: We should disconnect from time to time.\nB: A digital detox would do us good.",
   funFact:"Spain ranks among Europe's most digitally connected countries, with over 90% smartphone penetration."},

  {type:"teach", trg:"la base", src:"the base; foundation; basis", pos:"noun", gender:"f",
   note:"From Latin basis (foundation).\nA fundamental starting point, both physical and abstract.",
   example:"A: La base de una buena educaci\u00f3n es la lectura.\nB: Estoy de acuerdo.\nA: Sin una base s\u00f3lida, es dif\u00edcil progresar.\nB: Leer desde peque\u00f1os marca la diferencia.",
   exampleSrc:"A: The basis of a good education is reading.\nB: I agree.\nA: Without a solid foundation, it is difficult to progress.\nB: Reading from a young age makes a difference.",
   funFact:"In Spanish military terminology, 'base' refers to a military installation. The US naval base at Rota, Spain, has been active since 1953."},

  {type:"teach", trg:"el ere", src:"the redundancy plan (ERE)", pos:"noun", gender:"m",
   note:"Abbreviation: Expediente de Regulaci\u00f3n de Empleo.\nA formal procedure for mass layoffs in Spain.",
   example:"A: La empresa anunci\u00f3 un ERE que afectar\u00e1 a doscientos empleados.\nB: \u00bfPor qu\u00e9?\nA: Porque han perdido un contrato importante.\nB: Es una situaci\u00f3n muy dif\u00edcil para los trabajadores.",
   exampleSrc:"A: The company announced a redundancy plan affecting two hundred employees.\nB: Why?\nA: Because they lost an important contract.\nB: It is a very difficult situation for the workers.",
   funFact:"ERE is one of Spain's most dreaded workplace acronyms. During the 2008 crisis, thousands of EREs were filed across the country."},

  {type:"fb", s:"Vivimos en una sociedad {1}. Siempre estamos con el m\u00f3vil.", a:["hiperconectada"],
   opts:["hiperconectada","minimalista","monocroma","mod\u00e9lica"],
   hint:"Overly or excessively connected through digital technology.",
   sSrc:"We live in a {1} society. We are always on our phones."},

  {type:"teach", trg:"la cabeza", src:"the head", pos:"noun", gender:"f",
   note:"From Latin capitia (head).\nBoth the body part and figurative meanings (leader, top).",
   example:"A: Me duele la cabeza desde esta ma\u00f1ana.\nB: \u00bfHas tomado algo?\nA: S\u00ed, un paracetamol, pero no me ha hecho efecto.\nB: Si contin\u00faa, deber\u00edas ir al m\u00e9dico.",
   exampleSrc:"A: My head has hurt since this morning.\nB: Have you taken anything?\nA: Yes, a paracetamol, but it has not worked.\nB: If it continues, you should go to the doctor.",
   funFact:"'Cabeza' appears in many Spanish expressions: 'cabeza de turco' (scapegoat), 'de cabeza' (headfirst), 'perder la cabeza' (to lose one's mind)."},

  {type:"mc", q:"\u00bfQu\u00e9 es un ERE?",
   opts:["Un procedimiento formal de despido masivo","Una empresa de trabajo temporal","Un sindicato","Un tipo de contrato laboral"],
   ans:"Un procedimiento formal de despido masivo",
   hint:"Expediente de Regulaci\u00f3n de Empleo. It is what companies must file when laying off many workers at once."},

  {type:"fb", s:"Voy al {1} a comprar el peri\u00f3dico y una revista.", a:["kiosco"],
   opts:["kiosco","casting","GPS","ERE"],
   hint:"A small stand on the street that sells newspapers and magazines.",
   sSrc:"I am going to the {1} to buy the newspaper and a magazine."},

  {type:"match", pairs:[
    {trg:"GPS", src:"GPS"},
    {trg:"casting", src:"casting; audition"},
    {trg:"kiosco", src:"kiosk; newsstand"},
    {trg:"hiperconectar", src:"to hyperconnect"},
    {trg:"ERE", src:"redundancy plan"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 eran las fotonovelas?",
   opts:["Pel\u00edculas en fotograf\u00eda","Historias contadas con fotos y di\u00e1logos","Revistas de fotograf\u00eda art\u00edstica","Tutoriales de fotograf\u00eda"],
   ans:"Historias contadas con fotos y di\u00e1logos",
   hint:"Like comic books, but using photographs instead of drawings, with dialogue bubbles added."},

  {type:"drag_fill", s:"La {1} de una buena investigaci\u00f3n es la metodolog\u00eda. Me duele la {2}.",
   blanks:{"1":"base","2":"cabeza"},
   pool:["base","cabeza","fotonovela","kiosco","casting"],
   hint:"The foundation of good research. The body part that hurts when you have a headache."}
]};
export default LESSON_19;
