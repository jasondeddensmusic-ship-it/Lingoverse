// Lesson 1 — El mundo empresarial (The Business World)
const LESSON_1 = {id:"esv2_b2g9_l1", title:"El mundo empresarial", icon:"\u{1F4BC}", xp:25, board:true, steps:[
  {type:"intro", title:"El mundo empresarial",
   desc:"Explore the vocabulary of the modern workplace. From departments to leadership roles, these terms are essential for professional Spanish.",
   goals:["Learn 10 core business and workplace terms","Use professional vocabulary in context","Discuss corporate structure in Spanish"]},

  {type:"teach", trg:"el comercio exterior", src:"foreign trade", pos:"noun", gender:"m",
   note:"Comercio (commerce) + exterior (foreign).\nRefers to international buying and selling.",
   example:"A: \u00bfA qu\u00e9 se dedica tu empresa?\nB: Nos dedicamos al comercio exterior.\nA: \u00bfCon qu\u00e9 pa\u00edses trabaj\u00e1is?\nB: Principalmente con Alemania y Francia.",
   exampleSrc:"A: What does your company do?\nB: We work in foreign trade.\nA: Which countries do you work with?\nB: Mainly with Germany and France.",
   funFact:"Spain's main trading partner is France, followed by Germany and Portugal."},

  {type:"teach", trg:"el coordinador", src:"the coordinator", pos:"noun", gender:"m",
   note:"From coordinar (to coordinate).\nFeminine form: la coordinadora.",
   example:"A: \u00bfQui\u00e9n organiza las reuniones del equipo?\nB: El coordinador del proyecto.\nA: \u00bfEs un puesto nuevo?\nB: S\u00ed, lo crearon hace tres meses.",
   exampleSrc:"A: Who organises the team meetings?\nB: The project coordinator.\nA: Is it a new position?\nB: Yes, they created it three months ago.",
   funFact:"In Spain, coordinador can refer to both academic and corporate roles."},

  {type:"teach", trg:"el conductor", src:"the driver; the presenter", pos:"noun", gender:"m",
   note:"From conducir (to drive/lead).\nIn media, means TV presenter or host.",
   example:"A: El conductor del autob\u00fas lleg\u00f3 tarde.\nB: \u00bfOtra vez? Es la tercera vez esta semana.\nA: Necesitan un conductor m\u00e1s responsable.\nB: O m\u00e1s autobuses.",
   exampleSrc:"A: The bus driver arrived late.\nB: Again? That is the third time this week.\nA: They need a more responsible driver.\nB: Or more buses.",
   funFact:"In Latin America, conductor often means TV host, while in Spain it primarily means driver."},

  {type:"teach", trg:"el convenio colectivo", src:"collective agreement", pos:"noun", gender:"m",
   note:"Convenio (agreement) + colectivo (collective).\nA labour contract between employers and unions.",
   example:"A: \u00bfHab\u00e9is firmado el nuevo convenio colectivo?\nB: Todav\u00eda estamos negociando.\nA: \u00bfQu\u00e9 puntos faltan por acordar?\nB: El aumento de sueldo y las vacaciones.",
   exampleSrc:"A: Have you signed the new collective agreement?\nB: We are still negotiating.\nA: Which points remain to be agreed?\nB: The pay rise and holidays.",
   funFact:"Spain has one of Europe's most developed systems of collective bargaining, covering over 80% of workers."},

  {type:"teach", trg:"el aumento de sueldo", src:"pay rise", pos:"noun", gender:"m",
   note:"Aumento (increase) + de sueldo (of salary).\nA common topic in labour negotiations.",
   example:"A: Voy a pedir un aumento de sueldo.\nB: \u00bfCu\u00e1nto vas a pedir?\nA: Un diez por ciento.\nB: Buena suerte. Yo llevo dos a\u00f1os esperando el m\u00edo.",
   exampleSrc:"A: I am going to ask for a pay rise.\nB: How much are you going to ask for?\nA: Ten percent.\nB: Good luck. I have been waiting two years for mine.",
   funFact:"The Spanish expression 'pedir un aumento' is used much more than the formal 'solicitar un incremento salarial'."},

  {type:"mc", q:"\u00bfQu\u00e9 es un convenio colectivo?",
   opts:["Un contrato individual de trabajo","Un acuerdo entre empresarios y sindicatos","Un tipo de seguro m\u00e9dico","Una ley del gobierno"],
   ans:"Un acuerdo entre empresarios y sindicatos",
   hint:"It involves negotiation between two sides: employers and workers' representatives."},

  {type:"teach", trg:"el concursante", src:"the contestant", pos:"noun", gender:"m",
   note:"From concurso (contest/competition).\nFeminine: la concursante.",
   example:"A: \u00bfViste el programa de ayer?\nB: S\u00ed, el concursante de Barcelona fue incre\u00edble.\nA: Gan\u00f3 diez mil euros en la final.\nB: Me gustar\u00eda presentarme como concursante alg\u00fan d\u00eda.",
   exampleSrc:"A: Did you see the programme yesterday?\nB: Yes, the contestant from Barcelona was incredible.\nA: He won ten thousand euros in the final.\nB: I would like to enter as a contestant someday.",
   funFact:"Spain's longest-running game show 'Pasapalabra' regularly attracts over 3 million viewers."},

  {type:"teach", trg:"el causante", src:"the cause; the person responsible", pos:"noun", gender:"m",
   note:"From causar (to cause).\nCan mean both the cause itself and the person who caused something.",
   example:"A: \u00bfQui\u00e9n fue el causante del accidente?\nB: Un conductor que no respet\u00f3 el sem\u00e1foro.\nA: \u00bfHubo heridos?\nB: Por suerte, solo da\u00f1os materiales.",
   exampleSrc:"A: Who was responsible for the accident?\nB: A driver who did not respect the traffic light.\nA: Were there injuries?\nB: Fortunately, only material damage.",
   funFact:"In legal Spanish, causante also means 'the deceased' in inheritance law."},

  {type:"teach", trg:"el autoservicio", src:"self-service", pos:"noun", gender:"m",
   note:"Auto- (self) + servicio (service).\nUsed for shops, petrol stations, and restaurants.",
   example:"A: \u00bfPrefieres restaurante o autoservicio?\nB: Autoservicio. Es m\u00e1s r\u00e1pido y barato.\nA: Pero la comida no es tan buena.\nB: Para un almuerzo r\u00e1pido, es perfecto.",
   exampleSrc:"A: Do you prefer a restaurant or self-service?\nB: Self-service. It is faster and cheaper.\nA: But the food is not as good.\nB: For a quick lunch, it is perfect.",
   funFact:"The first self-service supermarket in Spain opened in 1957 in Barcelona."},

  {type:"fb", s:"Los sindicatos negocian el {1} con la empresa cada a\u00f1o.", a:["convenio colectivo"],
   opts:["convenio colectivo","aumento de sueldo","autoservicio","comercio exterior"],
   hint:"This is the formal labour agreement between workers and employers.",
   sSrc:"The unions negotiate the {1} with the company every year."},

  {type:"teach", trg:"el mecanismo", src:"the mechanism", pos:"noun", gender:"m",
   note:"From Greek mechanismos via Latin.\nUsed literally (machine parts) and figuratively (process).",
   example:"A: \u00bfC\u00f3mo funciona el mecanismo de este reloj?\nB: Es un mecanismo de cuerda tradicional.\nA: Fascinante. No hay bater\u00edas.\nB: Eso es lo bonito de la relojer\u00eda cl\u00e1sica.",
   exampleSrc:"A: How does the mechanism of this watch work?\nB: It is a traditional winding mechanism.\nA: Fascinating. There are no batteries.\nB: That is the beauty of classic watchmaking.",
   funFact:"Spanish uses mecanismo both for physical devices and abstract systems like 'mecanismos de defensa' (defence mechanisms)."},

  {type:"teach", trg:"la conformidad", src:"conformity; compliance", pos:"noun", gender:"f",
   note:"From conforme (in agreement).\nUsed in legal and business contexts.",
   example:"A: \u00bfEl cliente ha dado su conformidad?\nB: S\u00ed, firm\u00f3 el documento esta ma\u00f1ana.\nA: Perfecto. Podemos empezar el proyecto.\nB: Enviar\u00e9 la conformidad por correo electr\u00f3nico tambi\u00e9n.",
   exampleSrc:"A: Has the client given their approval?\nB: Yes, they signed the document this morning.\nA: Perfect. We can start the project.\nB: I will send the approval by email as well.",
   funFact:"The expression 'dar su conformidad' is the standard way to say 'to give one's approval' in formal Spanish."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'dar de alta'?",
   opts:["Despedir a alguien","Registrar oficialmente","Cerrar una cuenta","Pedir un favor"],
   ans:"Registrar oficialmente",
   hint:"This phrase is used when you sign up for utilities, register at a doctor, or start a job officially."},

  {type:"fb", s:"El {1} del proyecto organiza las reuniones semanales.", a:["coordinador"],
   opts:["coordinador","conductor","causante","concursante"],
   hint:"The person whose role is to bring people together and organise team work.",
   sSrc:"The {1} of the project organises the weekly meetings."},

  {type:"match", pairs:[
    {trg:"comercio exterior", src:"foreign trade"},
    {trg:"convenio colectivo", src:"collective agreement"},
    {trg:"aumento de sueldo", src:"pay rise"},
    {trg:"autoservicio", src:"self-service"},
    {trg:"conformidad", src:"conformity; compliance"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 es un autoservicio?",
   opts:["Un taller mec\u00e1nico","Un tipo de restaurante donde te sirves t\u00fa mismo","Una oficina de correos","Un banco en l\u00ednea"],
   ans:"Un tipo de restaurante donde te sirves t\u00fa mismo",
   hint:"The prefix auto- means self. What kind of place lets you serve yourself?"},

  {type:"fb", s:"Espa\u00f1a tiene mucho {1} con Francia y Alemania.", a:["comercio exterior"],
   opts:["comercio exterior","autoservicio","mecanismo","conformidad"],
   hint:"International buying and selling between countries.",
   sSrc:"Spain has a lot of {1} with France and Germany."},

  {type:"mc", q:"El {blank} gan\u00f3 el premio final del programa de televisi\u00f3n.",
   opts:["coordinador","concursante","causante","conductor"],
   ans:"concursante",
   hint:"A person who takes part in a competition or game show."},

  {type:"drag_fill", s:"El {1} del accidente fue un {2} imprudente.",
   blanks:{"1":"causante","2":"conductor"},
   pool:["causante","conductor","concursante","coordinador","mecanismo"],
   hint:"The person responsible was someone who drives."}
]};
export default LESSON_1;
