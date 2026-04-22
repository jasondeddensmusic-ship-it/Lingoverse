// Lesson 13. Verbos de accion (Action Verbs)
const LESSON_13 = {id:"esv2_b2g9_l13", title:"Verbos de acci\u00f3n", icon:"\u{1F4AA}", xp:25, board:true, steps:[
  {type:"intro", title:"Verbos de acci\u00f3n",
   desc:"Expand your verb repertoire with precise action verbs. These B2-level verbs add specificity and richness to your Spanish.",
   goals:["Learn 10 advanced action verbs","Use precise verbs instead of generic ones","Recognise verb patterns and their derived nouns"]},

  {type:"teach", trg:"moldear", src:"to mould; to shape", pos:"verb", gender:null,
   note:"From molde (mould/cast).\nUsed literally (clay, metal) and figuratively (character, future).",
   example:"A: El artista moldea la arcilla con las manos.\nB: Es fascinante ver c\u00f3mo trabaja.\nA: La educaci\u00f3n moldea el car\u00e1cter de los ni\u00f1os.\nB: Por eso es tan importante.",
   exampleSrc:"A: The artist moulds the clay with their hands.\nB: It is fascinating to watch them work.\nA: Education moulds children's character.\nB: That is why it is so important.",
   funFact:"In Spanish, 'moldear' and 'modelar' are near-synonyms, but 'moldear' implies using a mould, while 'modelar' suggests free-form shaping."},

  {type:"teach", trg:"mermar", src:"to diminish; to reduce; to dwindle", pos:"verb", gender:null,
   note:"From Latin minimare (to make smaller).\nA gradual decrease in quantity or quality.",
   example:"A: Las reservas de agua est\u00e1n mermando.\nB: \u00bfPor la sequ\u00eda?\nA: S\u00ed, y el consumo no ha bajado.\nB: Necesitamos medidas de ahorro urgentes.",
   exampleSrc:"A: The water reserves are dwindling.\nB: Because of the drought?\nA: Yes, and consumption has not gone down.\nB: We need urgent saving measures.",
   funFact:"'Mermar' is often used for natural resources and also for shrinkage in retail: 'merma' means loss of stock due to theft or spoilage."},

  {type:"teach", trg:"merodear", src:"to prowl; to lurk around", pos:"verb", gender:null,
   note:"Origin uncertain, possibly from Latin mereri.\nTo wander around a place suspiciously.",
   example:"A: Hab\u00eda alguien merodeando por el jard\u00edn.\nB: \u00bfLlamaste a la polic\u00eda?\nA: S\u00ed, pero cuando llegaron ya no hab\u00eda nadie.\nB: Ten cuidado. Cierra bien las puertas.",
   exampleSrc:"A: There was someone prowling around the garden.\nB: Did you call the police?\nA: Yes, but when they arrived nobody was there.\nB: Be careful. Lock the doors well.",
   funFact:"In military Spanish, 'merodear' originally meant to loot or forage for supplies, a meaning it has mostly lost."},

  {type:"teach", trg:"lamer", src:"to lick", pos:"verb", gender:null,
   note:"From Latin lambere (to lick).\nUsed for animals, ice cream, and figuratively for flames.",
   example:"A: El perro no para de lamerme la mano.\nB: Es su forma de mostrar cari\u00f1o.\nA: S\u00ed, pero me hace cosquillas.\nB: Dale una galleta y dejar\u00e1 de lamerte.",
   exampleSrc:"A: The dog will not stop licking my hand.\nB: It is their way of showing affection.\nA: Yes, but it tickles.\nB: Give them a biscuit and they will stop licking you.",
   funFact:"Spanish uses 'lamer' figuratively for fire: 'las llamas lam\u00edan las paredes' (the flames licked the walls)."},

  {type:"teach", trg:"laurear", src:"to crown with laurels; to honour", pos:"verb", gender:null,
   note:"From laurel (laurel/bay leaf).\nTo award a prize or honour for achievement.",
   example:"A: La universidad laure\u00f3 al cient\u00edfico por su investigaci\u00f3n.\nB: Se lo merec\u00eda despu\u00e9s de tantos a\u00f1os de trabajo.\nA: Es el mayor reconocimiento que puede recibir.\nB: Una carrera brillante.",
   exampleSrc:"A: The university honoured the scientist for their research.\nB: They deserved it after so many years of work.\nA: It is the highest recognition they can receive.\nB: A brilliant career.",
   funFact:"The tradition of crowning with laurels comes from ancient Rome, where victorious generals received a 'corona de laurel'."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'merodear'?",
   opts:["Andar por un lugar de forma sospechosa","Cocinar al aire libre","Dormir profundamente","Correr r\u00e1pidamente"],
   ans:"Andar por un lugar de forma sospechosa",
   hint:"Someone wandering around a place suspiciously, often at night."},

  {type:"teach", trg:"manosear", src:"to handle; to grope; to touch repeatedly", pos:"verb", gender:null,
   note:"From mano (hand) + -sear (frequentative suffix).\nTouching something too much or inappropriately.",
   example:"A: No manosees la fruta en la tienda.\nB: Solo quiero ver si est\u00e1 madura.\nA: Puedes mirar sin tocar tanto.\nB: Vale, tienes raz\u00f3n. Perdona.",
   exampleSrc:"A: Do not handle the fruit so much in the shop.\nB: I just want to see if it is ripe.\nA: You can look without touching so much.\nB: Alright, you are right. Sorry.",
   funFact:"The -sear suffix implies repeated action: manosear (touch repeatedly), curiosear (browse repeatedly), golpear is a similar pattern."},

  {type:"teach", trg:"abanicar", src:"to fan", pos:"verb", gender:null,
   note:"From abanico (fan).\nTo move air with a fan or hand motion.",
   example:"A: Hac\u00eda tanto calor que no paraba de abanicarse.\nB: Normal. Estaban a cuarenta grados.\nA: El abanico es imprescindible en verano en Sevilla.\nB: Es un arte. Las sevillanas lo hacen con mucha gracia.",
   exampleSrc:"A: It was so hot that they did not stop fanning themselves.\nB: Of course. It was forty degrees.\nA: The fan is essential in summer in Seville.\nB: It is an art. Sevillian women do it with great grace.",
   funFact:"The Spanish fan (abanico) has its own unwritten language: how you hold and move it can communicate different messages."},

  {type:"teach", trg:"hender", src:"to cleave; to split; to cut through", pos:"verb", gender:null,
   note:"From Latin findere (to split).\nTo split something or cut through a medium.",
   example:"A: El barco hend\u00eda las olas con facilidad.\nB: Es un velero muy r\u00e1pido.\nA: El viento hend\u00eda la superficie del agua.\nB: Fue una navegaci\u00f3n perfecta.",
   exampleSrc:"A: The boat cleaved through the waves with ease.\nB: It is a very fast sailboat.\nA: The wind split the surface of the water.\nB: It was a perfect sail.",
   funFact:"'Hender' is a literary verb rarely used in everyday speech. 'Cortar' or 'partir' are the common alternatives."},

  {type:"fb", s:"Las reservas de agua est\u00e1n {1} por la sequ\u00eda.", a:["mermando"],
   opts:["mermando","moldeando","merodeando","abanicando"],
   hint:"The water reserves are gradually decreasing or dwindling.",
   sSrc:"The water reserves are {1} because of the drought."},

  {type:"teach", trg:"jabonar", src:"to soap; to lather", pos:"verb", gender:null,
   note:"From jab\u00f3n (soap) + -ar.\nTo apply soap to something for cleaning.",
   example:"A: Jabona bien la ropa antes de meterla en la lavadora.\nB: \u00bfPor qu\u00e9?\nA: Tiene manchas dif\u00edciles.\nB: Vale, la jabonar\u00e9 a mano primero.",
   exampleSrc:"A: Soap the clothes well before putting them in the washing machine.\nB: Why?\nA: They have tough stains.\nB: Alright, I will soap them by hand first.",
   funFact:"Many Spanish verbs are formed from nouns using the -ar suffix: jab\u00f3n > jabonar, cepillo > cepillar, martillo > martillar."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'moldear' en sentido figurado?",
   opts:["Destruir algo","Dar forma al car\u00e1cter o futuro de alguien","Pintar un cuadro","Limpiar una superficie"],
   ans:"Dar forma al car\u00e1cter o futuro de alguien",
   hint:"Just as an artist shapes clay, education and experience shape a person."},

  {type:"fb", s:"No {1} la fruta. Solo m\u00edrala.", a:["manosees"],
   opts:["manosees","lamas","moldees","abaniques"],
   hint:"Do not touch the fruit repeatedly with your hands.",
   sSrc:"Do not {1} the fruit. Just look at it."},

  {type:"match", pairs:[
    {trg:"moldear", src:"to mould; to shape"},
    {trg:"mermar", src:"to diminish; to dwindle"},
    {trg:"merodear", src:"to prowl; to lurk"},
    {trg:"lamer", src:"to lick"},
    {trg:"abanicar", src:"to fan"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 instrumento se asocia con el verbo 'abanicar'?",
   opts:["Un cuchillo","Un abanico","Un martillo","Una escoba"],
   ans:"Un abanico",
   hint:"The verb comes directly from the name of this hand-held cooling device."},

  {type:"drag_fill", s:"El artista {1} la arcilla. Las llamas {2} las paredes.",
   blanks:{"1":"moldeaba","2":"lam\u00edan"},
   pool:["moldeaba","lam\u00edan","merodeaban","abanicaban","jabonaban"],
   hint:"The artist shaped clay. The flames 'licked' the walls in a figurative sense."},

  {type:"fb", s:"La universidad {1} al investigador por su gran contribuci\u00f3n.", a:["laure\u00f3"],
   opts:["laure\u00f3","merode\u00f3","merm\u00f3","jabono"],
   hint:"The institution crowned or honoured the researcher with a formal award.",
   sSrc:"The university {1} the researcher for their great contribution."}
]};
export default LESSON_13;
