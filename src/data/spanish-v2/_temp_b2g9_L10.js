// Lesson 10. Comunicacion y medios (Communication and Media)
const LESSON_10 = {id:"esv2_b2g9_l10", title:"Comunicaci\u00f3n y medios", icon:"\u{1F4F0}", xp:25, board:true, steps:[
  {type:"intro", title:"Comunicaci\u00f3n y medios",
   desc:"Master the vocabulary of media, communication, and the digital world. From newspapers to social media, these terms are essential for modern discourse.",
   goals:["Learn 10 terms for media and communication","Discuss the role of media in society","Use vocabulary for digital and traditional media"]},

  {type:"teach", trg:"el medio de comunicaci\u00f3n", src:"the media outlet; means of communication", pos:"noun", gender:"m",
   note:"Medio (means) + de comunicaci\u00f3n (of communication).\nPlural: los medios de comunicaci\u00f3n (the media).",
   example:"A: Los medios de comunicaci\u00f3n tienen mucho poder.\nB: Es verdad. Influyen en la opini\u00f3n p\u00fablica.\nA: Por eso es importante tener medios libres.\nB: Y que los ciudadanos piensen de forma cr\u00edtica.",
   exampleSrc:"A: The media have a lot of power.\nB: That is true. They influence public opinion.\nA: That is why it is important to have free media.\nB: And for citizens to think critically.",
   funFact:"Spain has over 200 daily newspapers. The most-read digital newspaper is El Pa\u00eds, founded in 1976 during the transition to democracy."},

  {type:"teach", trg:"el diario digital", src:"the online newspaper", pos:"noun", gender:"m",
   note:"Diario (daily/newspaper) + digital.\nAn online-only or digitised newspaper.",
   example:"A: Leo las noticias en un diario digital.\nB: \u00bfCu\u00e1l?\nA: El Confidencial. Es solo digital.\nB: Cada vez m\u00e1s gente lee noticias en el m\u00f3vil.",
   exampleSrc:"A: I read the news on an online newspaper.\nB: Which one?\nA: El Confidencial. It is digital only.\nB: More and more people read news on their phone.",
   funFact:"El Confidencial, founded in 2001, was one of Spain's first digital-only newspapers and is now one of its most widely read."},

  {type:"teach", trg:"la interacci\u00f3n", src:"the interaction", pos:"noun", gender:"f",
   note:"Inter- (between) + acci\u00f3n (action).\nThe act of communicating or influencing each other.",
   example:"A: La interacci\u00f3n en las redes sociales puede ser t\u00f3xica.\nB: Depende de c\u00f3mo las uses.\nA: Es verdad. Tambi\u00e9n hay interacci\u00f3n positiva.\nB: Lo importante es saber filtrar.",
   exampleSrc:"A: Interaction on social media can be toxic.\nB: It depends on how you use them.\nA: That is true. There is also positive interaction.\nB: The important thing is knowing how to filter.",
   funFact:"Spanish digital culture often uses 'interacci\u00f3n' where English might say 'engagement', especially in marketing contexts."},

  {type:"teach", trg:"la interconexion", src:"interconnection", pos:"noun", gender:"f",
   note:"Inter- (between) + conexi\u00f3n (connection).\nLinks between systems, networks, or ideas.",
   example:"A: La interconexi\u00f3n entre los sistemas es fundamental.\nB: Sin ella, los datos no fluyen correctamente.\nA: Necesitamos mejorar la interconexi\u00f3n de nuestras bases de datos.\nB: Eso requiere una inversi\u00f3n importante.",
   exampleSrc:"A: The interconnection between systems is fundamental.\nB: Without it, data does not flow correctly.\nA: We need to improve the interconnection of our databases.\nB: That requires a significant investment.",
   funFact:"Spain's high-speed rail network (AVE) is one of Europe's most interconnected, linking all major cities."},

  {type:"teach", trg:"el logo", src:"the logo", pos:"noun", gender:"m",
   note:"Shortened from logotipo (logotype).\nA visual symbol representing a brand or organisation.",
   example:"A: Necesitamos un nuevo logo para la empresa.\nB: \u00bfQu\u00e9 estilo prefieres?\nA: Algo moderno y minimalista.\nB: Puedo dise\u00f1ar varias propuestas para el viernes.",
   exampleSrc:"A: We need a new logo for the company.\nB: What style do you prefer?\nA: Something modern and minimalist.\nB: I can design several proposals for Friday.",
   funFact:"The full Spanish word 'logotipo' combines Greek logos (word) and typos (impression), literally 'word imprint'."},

  {type:"mc", q:"\u00bfQu\u00e9 son los medios de comunicaci\u00f3n?",
   opts:["Los transportes p\u00fablicos","Los canales que transmiten informaci\u00f3n al p\u00fablico","Los hospitales","Las escuelas"],
   ans:"Los canales que transmiten informaci\u00f3n al p\u00fablico",
   hint:"Television, newspapers, radio, and websites are all examples of these."},

  {type:"teach", trg:"la internacionalizaci\u00f3n", src:"internationalisation", pos:"noun", gender:"f",
   note:"Internacional (international) + -izaci\u00f3n (process suffix).\nThe process of becoming international.",
   example:"A: La internacionalizaci\u00f3n de la empresa es nuestra prioridad.\nB: \u00bfA qu\u00e9 mercados quer\u00e9is expandiros?\nA: Primero a Europa, luego a Latinoam\u00e9rica.\nB: Es un plan ambicioso pero realista.",
   exampleSrc:"A: The internationalisation of the company is our priority.\nB: Which markets do you want to expand to?\nA: First Europe, then Latin America.\nB: It is an ambitious but realistic plan.",
   funFact:"At 26 letters, 'internacionalizaci\u00f3n' is one of the longest common Spanish words and a favourite in spelling challenges."},

  {type:"teach", trg:"la aspiraci\u00f3n", src:"the aspiration; ambition", pos:"noun", gender:"f",
   note:"From aspirar (to aspire/breathe in).\nUsed for both goals and the phonetic concept.",
   example:"A: \u00bfCu\u00e1l es tu mayor aspiraci\u00f3n?\nB: Montar mi propio negocio.\nA: Es una aspiraci\u00f3n muy com\u00fan.\nB: Pero pocos la consiguen. Yo lo voy a intentar.",
   exampleSrc:"A: What is your biggest aspiration?\nB: To start my own business.\nA: That is a very common aspiration.\nB: But few achieve it. I am going to try.",
   funFact:"In phonetics, 'aspiraci\u00f3n' describes the breathy sound of the Spanish 'j' or 's' in certain Andalusian dialects."},

  {type:"teach", trg:"la absorci\u00f3n", src:"absorption", pos:"noun", gender:"f",
   note:"From absorber (to absorb).\nUsed in science, business (mergers), and everyday contexts.",
   example:"A: La absorci\u00f3n de la empresa peque\u00f1a fue r\u00e1pida.\nB: \u00bfMantuvieron a todos los empleados?\nA: S\u00ed, nadie perdi\u00f3 su trabajo.\nB: Eso es lo mejor de estas fusiones.",
   exampleSrc:"A: The absorption of the small company was quick.\nB: Did they keep all the employees?\nA: Yes, nobody lost their job.\nB: That is the best thing about these mergers.",
   funFact:"In business Spanish, 'absorci\u00f3n' describes when a large company takes over a smaller one, differing from 'fusi\u00f3n' (merger of equals)."},

  {type:"fb", s:"Leo las noticias cada ma\u00f1ana en un {1}.", a:["diario digital"],
   opts:["diario digital","medio de comunicaci\u00f3n","logo","manual"],
   hint:"An online newspaper that you read on your phone or computer.",
   sSrc:"I read the news every morning on an {1}."},

  {type:"teach", trg:"el l\u00edder", src:"the leader", pos:"noun", gender:"m",
   note:"From English 'leader'.\nFeminine: la l\u00edder. Same form, different article.",
   example:"A: La l\u00edder del partido present\u00f3 su programa electoral.\nB: \u00bfQu\u00e9 propone?\nA: M\u00e1s inversi\u00f3n en educaci\u00f3n y sanidad.\nB: Suena bien, pero hay que ver si cumple.",
   exampleSrc:"A: The party leader presented their electoral programme.\nB: What do they propose?\nA: More investment in education and healthcare.\nB: Sounds good, but we have to see if they deliver.",
   funFact:"Though 'l\u00edder' comes from English, the RAE accepted it in 1984. The verb 'liderar' (to lead) followed naturally."},

  {type:"mc", q:"\u00bfCu\u00e1ntas letras tiene la palabra 'internacionalizaci\u00f3n'?",
   opts:["26","30","18","22"],
   ans:"26",
   hint:"It is one of the longest common words in Spanish, built from internacional + -izaci\u00f3n."},

  {type:"fb", s:"La {1} entre los dos sistemas permite compartir datos.", a:["interconexi\u00f3n"],
   opts:["interconexi\u00f3n","interacci\u00f3n","internacionalizaci\u00f3n","absorci\u00f3n"],
   hint:"The technical link between two systems that allows data to flow between them.",
   sSrc:"The {1} between the two systems allows sharing data."},

  {type:"match", pairs:[
    {trg:"medio de comunicaci\u00f3n", src:"media outlet"},
    {trg:"diario digital", src:"online newspaper"},
    {trg:"interacci\u00f3n", src:"interaction"},
    {trg:"aspiraci\u00f3n", src:"aspiration; ambition"},
    {trg:"l\u00edder", src:"leader"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 es una 'absorci\u00f3n' en el mundo empresarial?",
   opts:["Cuando dos empresas iguales se unen","Cuando una empresa grande compra una peque\u00f1a","Cuando una empresa cierra","Cuando una empresa cambia de nombre"],
   ans:"Cuando una empresa grande compra una peque\u00f1a",
   hint:"One company takes in or 'absorbs' another. It is different from a merger of equals."},

  {type:"drag_fill", s:"Los {1} influyen en la opini\u00f3n p\u00fablica. El {2} necesita un nuevo dise\u00f1o.",
   blanks:{"1":"medios de comunicaci\u00f3n","2":"logo"},
   pool:["medios de comunicaci\u00f3n","logo","diario digital","interacci\u00f3n","l\u00edder"],
   hint:"The media shape public views. The visual symbol of the brand needs refreshing."}
]};
export default LESSON_10;
