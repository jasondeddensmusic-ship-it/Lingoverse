// Lesson 8. Sociedad y convivencia (Society and Coexistence)
const LESSON_8 = {id:"esv2_b2g9_l8", title:"Sociedad y convivencia", icon:"\u{1F91D}", xp:25, board:true, steps:[
  {type:"intro", title:"Sociedad y convivencia",
   desc:"Discuss social issues, family dynamics, and community life. These terms help you navigate conversations about how people live together.",
   goals:["Learn 10 terms for social and family relationships","Discuss societal issues with nuance","Use formal vocabulary for sensitive topics"]},

  {type:"teach", trg:"el machismo", src:"machismo; male chauvinism", pos:"noun", gender:"m",
   note:"From macho (male) + -ismo (ideology).\nThe belief in male superiority over women.",
   example:"A: El machismo sigue siendo un problema en muchos pa\u00edses.\nB: Es verdad, aunque se ha avanzado mucho.\nA: La educaci\u00f3n es clave para combatirlo.\nB: Y tambi\u00e9n las leyes de igualdad.",
   exampleSrc:"A: Machismo is still a problem in many countries.\nB: That is true, although a lot of progress has been made.\nA: Education is key to combating it.\nB: And also equality laws.",
   funFact:"The word 'machismo' has been borrowed into English and many other languages directly from Spanish."},

  {type:"teach", trg:"el maltrato", src:"mistreatment; abuse", pos:"noun", gender:"m",
   note:"Mal (bad) + trato (treatment).\nUsed for domestic violence, child abuse, and animal cruelty.",
   example:"A: El maltrato animal debe ser castigado con dureza.\nB: Estoy completamente de acuerdo.\nA: Hay que denunciar cualquier caso de maltrato.\nB: En Espa\u00f1a ya es un delito grave.",
   exampleSrc:"A: Animal abuse should be punished harshly.\nB: I completely agree.\nA: Any case of abuse must be reported.\nB: In Spain it is already a serious crime.",
   funFact:"Spain's 2004 Gender Violence Law was one of Europe's first comprehensive laws against domestic abuse."},

  {type:"teach", trg:"la madrastra", src:"the stepmother", pos:"noun", gender:"f",
   note:"From madre (mother) + -astra (step- suffix).\nMale equivalent: padrastro.",
   example:"A: Mi madrastra es una persona maravillosa.\nB: \u00bfOs llev\u00e1is bien?\nA: S\u00ed, desde el principio me trat\u00f3 como a su propia hija.\nB: Eso dice mucho de ella.",
   exampleSrc:"A: My stepmother is a wonderful person.\nB: Do you get along well?\nA: Yes, from the beginning she treated me like her own daughter.\nB: That says a lot about her.",
   funFact:"The -astro/-astra suffix for step-relatives comes from Latin, where it had a slightly pejorative tone that modern usage has softened."},

  {type:"teach", trg:"la definici\u00f3n", src:"the definition", pos:"noun", gender:"f",
   note:"From definir (to define).\nUsed in academic, legal, and everyday contexts.",
   example:"A: \u00bfCu\u00e1l es la definici\u00f3n de democracia?\nB: El gobierno del pueblo, por el pueblo.\nA: Es una definici\u00f3n muy conocida.\nB: Y bastante precisa, en mi opini\u00f3n.",
   exampleSrc:"A: What is the definition of democracy?\nB: Government of the people, by the people.\nA: That is a very well-known definition.\nB: And quite precise, in my opinion.",
   funFact:"The RAE (Real Academia Espa\u00f1ola) updates its definitions regularly. The latest edition has over 93,000 entries."},

  {type:"teach", trg:"la exageraci\u00f3n", src:"the exaggeration", pos:"noun", gender:"f",
   note:"From exagerar (to exaggerate).\nMaking something seem bigger or more important than it is.",
   example:"A: Dice que anduvo cien kil\u00f3metros.\nB: Eso es una exageraci\u00f3n.\nA: Ya lo s\u00e9. Siempre exagera todo.\nB: Le gusta hacer las cosas m\u00e1s grandes de lo que son.",
   exampleSrc:"A: He says he walked a hundred kilometres.\nB: That is an exaggeration.\nA: I know. He always exaggerates everything.\nB: He likes to make things bigger than they are.",
   funFact:"Spanish speakers often use 'sin exageraci\u00f3n' before a statement to emphasise they are being truthful."},

  {type:"mc", q:"\u00bfQu\u00e9 es el machismo?",
   opts:["La creencia en la superioridad del hombre","Un deporte tradicional","Un estilo de m\u00fasica","Un tipo de comida"],
   ans:"La creencia en la superioridad del hombre",
   hint:"From 'macho' (male). It describes an ideology based on male dominance."},

  {type:"teach", trg:"la menci\u00f3n", src:"the mention", pos:"noun", gender:"f",
   note:"From mencionar (to mention).\nCommon phrase: 'hacer menci\u00f3n de' (to make mention of).",
   example:"A: El profesor hizo menci\u00f3n de tu proyecto.\nB: \u00bfEn serio? \u00bfQu\u00e9 dijo?\nA: Que era uno de los mejores de la clase.\nB: Qu\u00e9 alegr\u00eda. He trabajado mucho en \u00e9l.",
   exampleSrc:"A: The professor made mention of your project.\nB: Really? What did they say?\nA: That it was one of the best in the class.\nB: How exciting. I have worked hard on it.",
   funFact:"The academic honour 'menci\u00f3n honor\u00edfica' in Spanish universities is equivalent to 'honours' or 'distinction'."},

  {type:"teach", trg:"el lamento", src:"the lament; complaint", pos:"noun", gender:"m",
   note:"From lamentar (to lament/regret).\nAn expression of grief, regret, or sorrow.",
   example:"A: Se o\u00edan los lamentos de los vecinos afectados.\nB: \u00bfQu\u00e9 ha pasado?\nA: Una inundaci\u00f3n destruy\u00f3 sus casas.\nB: Qu\u00e9 tragedia. Hay que ayudarles.",
   exampleSrc:"A: You could hear the laments of the affected neighbours.\nB: What happened?\nA: A flood destroyed their houses.\nB: What a tragedy. We must help them.",
   funFact:"The flamenco genre 'cante jondo' (deep song) is built on the tradition of the lament, expressing profound human suffering."},

  {type:"teach", trg:"el indicio", src:"the clue; indication; sign", pos:"noun", gender:"m",
   note:"From Latin indicium (sign/evidence).\nUsed in legal, detective, and everyday contexts.",
   example:"A: La polic\u00eda encontr\u00f3 varios indicios en la escena.\nB: \u00bfQu\u00e9 tipo de indicios?\nA: Huellas dactilares y fibras de ropa.\nB: Eso deber\u00eda ser suficiente para identificar al sospechoso.",
   exampleSrc:"A: The police found several clues at the scene.\nB: What type of clues?\nA: Fingerprints and clothing fibres.\nB: That should be enough to identify the suspect.",
   funFact:"In Spanish law, 'prueba indiciaria' (circumstantial evidence) is built from multiple 'indicios' that together point to guilt."},

  {type:"fb", s:"La polic\u00eda encontr\u00f3 varios {1} en la escena del crimen.", a:["indicios"],
   opts:["indicios","lamentos","definiciones","exageraciones"],
   hint:"Clues or signs that help solve a crime.",
   sSrc:"The police found several {1} at the crime scene."},

  {type:"teach", trg:"la dureza", src:"hardness; harshness; toughness", pos:"noun", gender:"f",
   note:"From duro (hard) + -eza (quality suffix).\nPhysical hardness or emotional harshness.",
   example:"A: La dureza del invierno afect\u00f3 a las cosechas.\nB: Ha sido el m\u00e1s fr\u00edo en veinte a\u00f1os.\nA: Los agricultores necesitan ayuda urgente.\nB: El gobierno deber\u00eda actuar ya.",
   exampleSrc:"A: The harshness of winter affected the harvests.\nB: It has been the coldest in twenty years.\nA: The farmers need urgent help.\nB: The government should act now.",
   funFact:"The -eza suffix creates abstract nouns from adjectives: duro > dureza, bello > belleza, puro > pureza."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'hacer menci\u00f3n de algo'?",
   opts:["Olvidar algo","Referirse a algo brevemente","Destruir algo","Copiar algo"],
   ans:"Referirse a algo brevemente",
   hint:"Mencionar means to mention. The phrase means to briefly talk about or refer to something."},

  {type:"fb", s:"Eso es una {1}. En realidad solo recorrimos cinco kil\u00f3metros.", a:["exageraci\u00f3n"],
   opts:["exageraci\u00f3n","definici\u00f3n","menci\u00f3n","dureza"],
   hint:"Making something sound much bigger or more impressive than it really was.",
   sSrc:"That is an {1}. In reality we only covered five kilometres."},

  {type:"match", pairs:[
    {trg:"machismo", src:"male chauvinism"},
    {trg:"maltrato", src:"mistreatment; abuse"},
    {trg:"madrastra", src:"stepmother"},
    {trg:"lamento", src:"lament; complaint"},
    {trg:"dureza", src:"hardness; harshness"}
  ]},

  {type:"mc", q:"\u00bfCu\u00e1l es el equivalente masculino de 'madrastra'?",
   opts:["Abuelo","Madrastro","Padrastro","Padrino"],
   ans:"Padrastro",
   hint:"The -astro/-astra suffix marks step-relatives. For the father figure, it is padr-."},

  {type:"drag_fill", s:"Se o\u00edan los {1} de las v\u00edctimas. La {2} del desastre fue enorme.",
   blanks:{"1":"lamentos","2":"dureza"},
   pool:["lamentos","dureza","indicios","exageraciones","definiciones"],
   hint:"Cries of grief from the victims. The severity or harshness of what happened."}
]};
export default LESSON_8;
