// Lesson 17. Procesos y cambios (Processes and Changes)
const LESSON_17 = {id:"esv2_b2g9_l17", title:"Procesos y cambios", icon:"\u{1F504}", xp:25, board:true, steps:[
  {type:"intro", title:"Procesos y cambios",
   desc:"Discuss processes, transformations, and changes with formal vocabulary. These nouns describe how things evolve, interact, and complement each other.",
   goals:["Learn 10 terms for processes and transformations","Describe how things change and interact","Use formal process vocabulary in academic contexts"]},

  {type:"teach", trg:"la complementaci\u00f3n", src:"complementation; the act of completing", pos:"noun", gender:"f",
   note:"From complementar (to complement).\nThe process of completing or supplementing something.",
   example:"A: La complementaci\u00f3n de los dos equipos es perfecta.\nB: Cada uno aporta lo que el otro necesita.\nA: Juntos son mucho m\u00e1s eficaces.\nB: Es un buen ejemplo de trabajo en equipo.",
   exampleSrc:"A: The complementation of the two teams is perfect.\nB: Each one contributes what the other needs.\nA: Together they are much more effective.\nB: It is a good example of teamwork.",
   funFact:"In Spanish grammar, 'complementaci\u00f3n' refers to how complements (objects, adverbs) complete the meaning of verbs."},

  {type:"teach", trg:"la contraprestaci\u00f3n", src:"the consideration; return service; quid pro quo", pos:"noun", gender:"f",
   note:"Contra- (in return) + prestaci\u00f3n (service/benefit).\nSomething given in exchange for something else.",
   example:"A: \u00bfCu\u00e1l es la contraprestaci\u00f3n por este servicio?\nB: El pago de una cuota mensual.\nA: \u00bfY si no pagamos?\nB: Se suspende el servicio autom\u00e1ticamente.",
   exampleSrc:"A: What is the consideration for this service?\nB: The payment of a monthly fee.\nA: And if we do not pay?\nB: The service is suspended automatically.",
   funFact:"In Spanish contract law, 'contraprestaci\u00f3n' is a key legal term meaning what each party gives in exchange for what they receive."},

  {type:"teach", trg:"la coproducci\u00f3n", src:"the co-production", pos:"noun", gender:"f",
   note:"Co- (together) + producci\u00f3n (production).\nA joint production, especially in film or TV.",
   example:"A: La pel\u00edcula es una coproducci\u00f3n hispano-francesa.\nB: \u00bfSe rod\u00f3 en los dos pa\u00edses?\nA: S\u00ed, en Barcelona y en Par\u00eds.\nB: Las coproducciones son cada vez m\u00e1s comunes.",
   exampleSrc:"A: The film is a Spanish-French co-production.\nB: Was it shot in both countries?\nA: Yes, in Barcelona and in Paris.\nB: Co-productions are increasingly common.",
   funFact:"Spain is one of Europe's most active countries in film co-productions, with frequent partnerships with France, Argentina, and Italy."},

  {type:"teach", trg:"la detonaci\u00f3n", src:"the detonation; explosion", pos:"noun", gender:"f",
   note:"From detonar (to detonate).\nA sudden, violent explosion.",
   example:"A: La detonaci\u00f3n se oy\u00f3 a varios kil\u00f3metros.\nB: \u00bfQu\u00e9 pas\u00f3?\nA: Una demolici\u00f3n controlada de un edificio viejo.\nB: Menos mal. Pens\u00e9 que era algo peor.",
   exampleSrc:"A: The detonation was heard several kilometres away.\nB: What happened?\nA: A controlled demolition of an old building.\nB: Thank goodness. I thought it was something worse.",
   funFact:"Spain's TEDAX (bomb disposal unit) is considered one of Europe's most experienced, having dealt with decades of ETA-related incidents."},

  {type:"teach", trg:"el contragolpe", src:"the counterattack; backlash", pos:"noun", gender:"m",
   note:"Contra- (against) + golpe (blow/strike).\nA retaliatory strike or a quick counter in sports.",
   example:"A: El equipo marc\u00f3 un gol de contragolpe.\nB: Fueron muy r\u00e1pidos.\nA: Tres pases y gol. Impresionante.\nB: El contragolpe es su mejor arma.",
   exampleSrc:"A: The team scored a counterattack goal.\nB: They were very fast.\nA: Three passes and goal. Impressive.\nB: The counterattack is their best weapon.",
   funFact:"In Spanish football, 'contragolpe' is the signature tactic of many teams, with Real Madrid historically famous for this style."},

  {type:"mc", q:"\u00bfQu\u00e9 es una coproducci\u00f3n?",
   opts:["Una pel\u00edcula muy cara","Una producci\u00f3n conjunta entre dos o m\u00e1s pa\u00edses","Un tipo de documental","Una secuela de una pel\u00edcula"],
   ans:"Una producci\u00f3n conjunta entre dos o m\u00e1s pa\u00edses",
   hint:"Co- means together. Two countries or companies produce something jointly."},

  {type:"teach", trg:"el acondicionamiento", src:"the conditioning; fitting out", pos:"noun", gender:"m",
   note:"From acondicionar (to condition/equip).\nPreparing or adapting a space for a specific use.",
   example:"A: El acondicionamiento del local cost\u00f3 cincuenta mil euros.\nB: \u00bfQu\u00e9 incluy\u00f3?\nA: Aire acondicionado, iluminaci\u00f3n y mobiliario.\nB: Es una inversi\u00f3n necesaria para abrir el negocio.",
   exampleSrc:"A: The fitting out of the premises cost fifty thousand euros.\nB: What did it include?\nA: Air conditioning, lighting, and furniture.\nB: It is a necessary investment to open the business.",
   funFact:"'Aire acondicionado' (air conditioning) is derived from the same root. Spain's hot summers make it nearly universal in public buildings."},

  {type:"teach", trg:"la fechor\u00eda", src:"the misdeed; wrongdoing", pos:"noun", gender:"f",
   note:"From fecha/hecho (deed) + -or\u00eda (suffix).\nA criminal or morally wrong action.",
   example:"A: La polic\u00eda investiga las fechor\u00edas de la banda.\nB: \u00bfCu\u00e1ntos delitos cometieron?\nA: Al menos diez robos en tres meses.\nB: Espero que los atrapen pronto.",
   exampleSrc:"A: The police are investigating the misdeeds of the gang.\nB: How many crimes did they commit?\nA: At least ten robberies in three months.\nB: I hope they catch them soon.",
   funFact:"'Fechor\u00eda' has an old-fashioned, almost literary ring. Modern Spanish often uses 'delito' (crime) or 'travesura' (prank) depending on severity."},

  {type:"teach", trg:"el descendimiento", src:"the descent; the taking down (from the cross)", pos:"noun", gender:"m",
   note:"From descender (to descend) + -imiento.\nIn art: the taking down of Christ from the cross.",
   example:"A: El Descendimiento de Van der Weyden es una obra maestra.\nB: Est\u00e1 en el Museo del Prado.\nA: S\u00ed, es una de las pinturas m\u00e1s emocionantes que he visto.\nB: La expresi\u00f3n de dolor es incre\u00edble.",
   exampleSrc:"A: Van der Weyden's Descent from the Cross is a masterpiece.\nB: It is in the Prado Museum.\nA: Yes, it is one of the most moving paintings I have seen.\nB: The expression of pain is incredible.",
   funFact:"The Prado's Descendimiento by Van der Weyden was acquired by Philip II of Spain and has been in Spain since the 16th century."},

  {type:"fb", s:"El equipo marc\u00f3 dos goles de {1} en el segundo tiempo.", a:["contragolpe"],
   opts:["contragolpe","coproducci\u00f3n","detonaci\u00f3n","acondicionamiento"],
   hint:"A fast counterattacking play that catches the opponent off guard.",
   sSrc:"The team scored two {1} goals in the second half."},

  {type:"teach", trg:"el indicador", src:"the indicator; gauge; sign", pos:"noun", gender:"m",
   note:"From indicar (to indicate) + -dor.\nSomething that shows or measures a condition.",
   example:"A: Los indicadores econ\u00f3micos son positivos.\nB: \u00bfQu\u00e9 indicadores exactamente?\nA: El empleo, el PIB y la inflaci\u00f3n.\nB: Buenas noticias para el pa\u00eds.",
   exampleSrc:"A: The economic indicators are positive.\nB: Which indicators exactly?\nA: Employment, GDP, and inflation.\nB: Good news for the country.",
   funFact:"The INE (Instituto Nacional de Estad\u00edstica) publishes Spain's key economic and social indicators regularly."},

  {type:"mc", q:"\u00bfQu\u00e9 es una contraprestaci\u00f3n?",
   opts:["Lo que se da a cambio de un servicio recibido","Un tipo de multa","Una promesa verbal","Un regalo sin condiciones"],
   ans:"Lo que se da a cambio de un servicio recibido",
   hint:"Contra means in return. Prestaci\u00f3n means service or benefit. Together: something given in exchange."},

  {type:"fb", s:"El {1} del local incluy\u00f3 aire acondicionado e iluminaci\u00f3n.", a:["acondicionamiento"],
   opts:["acondicionamiento","descendimiento","contragolpe","indicador"],
   hint:"The process of preparing and equipping a space for its intended use.",
   sSrc:"The {1} of the premises included air conditioning and lighting."},

  {type:"match", pairs:[
    {trg:"contraprestaci\u00f3n", src:"consideration; quid pro quo"},
    {trg:"coproducci\u00f3n", src:"co-production"},
    {trg:"detonaci\u00f3n", src:"detonation"},
    {trg:"contragolpe", src:"counterattack"},
    {trg:"indicador", src:"indicator; gauge"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 es el Descendimiento en el contexto del arte?",
   opts:["Un paisaje","La representaci\u00f3n de bajar a Cristo de la cruz","Un retrato del rey","Una escena de batalla"],
   ans:"La representaci\u00f3n de bajar a Cristo de la cruz",
   hint:"From descender (to go down). A common theme in religious painting showing a very specific biblical moment."},

  {type:"drag_fill", s:"Los {1} econ\u00f3micos muestran que la {2} de los dos equipos es fundamental.",
   blanks:{"1":"indicadores","2":"complementaci\u00f3n"},
   pool:["indicadores","complementaci\u00f3n","detonaciones","fechor\u00edas","coproducciones"],
   hint:"Economic measurements show that the two teams completing each other is essential."},

  {type:"fb", s:"La polic\u00eda investiga las {1} de la banda criminal.", a:["fechor\u00edas"],
   opts:["fechor\u00edas","coproducciones","complementaciones","detonaciones"],
   hint:"The criminal acts or misdeeds committed by the gang.",
   sSrc:"The police are investigating the {1} of the criminal gang."}
]};
export default LESSON_17;
