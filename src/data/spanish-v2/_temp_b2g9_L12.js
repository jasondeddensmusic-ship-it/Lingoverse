// Lesson 12. Expresiones y adverbios (Expressions and Adverbs)
const LESSON_12 = {id:"esv2_b2g9_l12", title:"Expresiones y adverbios", icon:"\u{1F4AC}", xp:25, board:true, steps:[
  {type:"intro", title:"Expresiones y adverbios",
   desc:"Master useful Spanish expressions and adverbs that add nuance to your speech. These phrases help you sound more natural and fluent.",
   goals:["Learn 10 expressions and adverbs for daily conversation","Use discourse markers and connectors","Add nuance and contrast to your speech"]},

  {type:"teach", trg:"en cambio", src:"on the other hand; instead", pos:"adv", gender:null,
   note:"En (in) + cambio (change).\nA discourse connector that introduces contrast.",
   example:"A: A m\u00ed me encanta el fr\u00edo.\nB: Yo, en cambio, prefiero el calor.\nA: \u00bfEn serio? \u00bfCon este calor?\nB: S\u00ed, en cambio, no soporto el invierno.",
   exampleSrc:"A: I love the cold.\nB: I, on the other hand, prefer the heat.\nA: Really? In this heat?\nB: Yes, on the other hand, I cannot stand winter.",
   funFact:"'En cambio' is one of the most common contrast markers in Spanish, used far more frequently than 'por el contrario'."},

  {type:"teach", trg:"a partir de", src:"from; starting from", pos:"prep", gender:null,
   note:"A (to) + partir (to depart/start) + de (from).\nMarks the starting point of something.",
   example:"A: A partir de ma\u00f1ana, empiezo la dieta.\nB: Eso dices siempre.\nA: Esta vez es en serio.\nB: A partir de lunes ser\u00eda mejor. Ma\u00f1ana es domingo.",
   exampleSrc:"A: Starting from tomorrow, I begin the diet.\nB: You always say that.\nA: This time it is for real.\nB: Starting from Monday would be better. Tomorrow is Sunday.",
   funFact:"'A partir de' works with both time and place: 'a partir de las tres' (from three o'clock), 'a partir de Madrid' (from Madrid onwards)."},

  {type:"teach", trg:"en casa", src:"at home", pos:"adv", gender:null,
   note:"En (in/at) + casa (house).\nA very common expression for being at home.",
   example:"A: \u00bfD\u00f3nde est\u00e1 tu hermano?\nB: Est\u00e1 en casa, estudiando.\nA: \u00bfNo sale nunca?\nB: Los fines de semana s\u00ed, pero entre semana se queda en casa.",
   exampleSrc:"A: Where is your brother?\nB: He is at home, studying.\nA: Does he never go out?\nB: At weekends yes, but during the week he stays at home.",
   funFact:"Spanish distinguishes 'en casa' (at home) from 'a casa' (towards home): 'Estoy en casa' vs. 'Voy a casa'."},

  {type:"teach", trg:"justo a tiempo", src:"just in time", pos:"adv", gender:null,
   note:"Justo (just/exactly) + a tiempo (on time).\nArriving or happening at the exact right moment.",
   example:"A: \u00a1Llegaste justo a tiempo!\nB: Por poco pierdo el tren.\nA: La pr\u00f3xima vez sal antes de casa.\nB: Tienes raz\u00f3n. Siempre voy con prisa.",
   exampleSrc:"A: You arrived just in time!\nB: I almost missed the train.\nA: Next time leave home earlier.\nB: You are right. I am always in a hurry.",
   funFact:"In business, 'justo a tiempo' is the Spanish term for the 'just-in-time' manufacturing system developed by Toyota."},

  {type:"teach", trg:"como que no", src:"as if not; yeah right (ironic)", pos:"adv", gender:null,
   note:"Como (as if) + que no (that not).\nUsed to express disbelief or sarcastic doubt.",
   example:"A: No fui yo quien comi\u00f3 el \u00faltimo trozo de tarta.\nB: \u00bfComo que no? \u00a1Tienes chocolate en la boca!\nA: Es de otra cosa.\nB: S\u00ed, claro. Como que no.",
   exampleSrc:"A: It was not me who ate the last piece of cake.\nB: Yeah right! You have chocolate on your mouth!\nA: It is from something else.\nB: Sure. As if.",
   funFact:"'Como que no' is a distinctly colloquial Spanish expression. In formal writing, you would use 'es evidente que s\u00ed'."},

  {type:"mc", q:"\u00bfCu\u00e1ndo usamos 'en cambio'?",
   opts:["Para introducir un contraste","Para pedir algo","Para disculparse","Para dar un ejemplo"],
   ans:"Para introducir un contraste",
   hint:"This expression introduces something different or opposite to what was just said."},

  {type:"teach", trg:"a la moda", src:"in fashion; trendy", pos:"adv", gender:null,
   note:"A (in) + la moda (the fashion).\nFollowing current trends in clothing or lifestyle.",
   example:"A: Siempre vas muy a la moda.\nB: Me gusta seguir las tendencias.\nA: Pero gastar\u00e1s mucho dinero.\nB: No necesariamente. Hay tiendas con precios razonables.",
   exampleSrc:"A: You are always very fashionable.\nB: I like following trends.\nA: But you must spend a lot of money.\nB: Not necessarily. There are shops with reasonable prices.",
   funFact:"The opposite expression 'pasado de moda' (out of fashion) is equally common in everyday Spanish."},

  {type:"teach", trg:"la finalizaci\u00f3n", src:"the completion; ending", pos:"noun", gender:"f",
   note:"From finalizar (to finish) + -ci\u00f3n.\nThe formal completion or conclusion of something.",
   example:"A: La finalizaci\u00f3n del proyecto est\u00e1 prevista para junio.\nB: \u00bfVamos bien de tiempo?\nA: S\u00ed, estamos dentro del plazo.\nB: Perfecto. Informar\u00e9 al cliente.",
   exampleSrc:"A: The completion of the project is scheduled for June.\nB: Are we on track with time?\nA: Yes, we are within the deadline.\nB: Perfect. I will inform the client.",
   funFact:"In formal documents, 'finalizaci\u00f3n' is preferred over 'final' or 'terminaci\u00f3n' for project milestones and contract dates."},

  {type:"teach", trg:"la fineza", src:"refinement; fineness; courtesy", pos:"noun", gender:"f",
   note:"From fino (fine/refined) + -eza.\nDelicacy, elegance, or a kind gesture.",
   example:"A: Trat\u00f3 a todos con mucha fineza.\nB: Es una persona muy educada.\nA: La fineza en el trato marca la diferencia.\nB: Es verdad. La educaci\u00f3n se nota.",
   exampleSrc:"A: They treated everyone with great refinement.\nB: They are a very well-mannered person.\nA: Refinement in how you treat others makes a difference.\nB: That is true. Good manners show.",
   funFact:"In Latin American Spanish, 'fineza' can also mean a kind gesture or favour, as in 'me hizo la fineza de invitarme' (they did me the kindness of inviting me)."},

  {type:"fb", s:"{1} lunes, el horario de la oficina cambiar\u00e1.", a:["A partir de"],
   opts:["A partir de","En cambio","En casa","Justo a tiempo"],
   hint:"This expression marks the starting point in time when something new begins.",
   sSrc:"{1} Monday, the office schedule will change."},

  {type:"teach", trg:"la llaneza", src:"simplicity; plainness; frankness", pos:"noun", gender:"f",
   note:"From llano (plain/flat) + -eza.\nSimplicity in manner, speech, or appearance.",
   example:"A: Me gusta su llaneza al hablar.\nB: S\u00ed, no usa palabras complicadas.\nA: La llaneza es una virtud.\nB: Sobre todo en pol\u00edtica, donde nadie habla claro.",
   exampleSrc:"A: I like their frankness when speaking.\nB: Yes, they do not use complicated words.\nA: Plainness is a virtue.\nB: Especially in politics, where nobody speaks clearly.",
   funFact:"Cervantes wrote that 'la llaneza' is the essence of good writing. Don Quijote's earthy companion Sancho Panza embodies it."},

  {type:"mc", q:"\u00bfQu\u00e9 diferencia hay entre 'en casa' y 'a casa'?",
   opts:["No hay diferencia","'En casa' significa estar all\u00ed, 'a casa' indica direcci\u00f3n","'A casa' es m\u00e1s formal","'En casa' es solo para preguntas"],
   ans:"'En casa' significa estar all\u00ed, 'a casa' indica direcci\u00f3n",
   hint:"One describes location (being there), the other describes movement (going there)."},

  {type:"fb", s:"A m\u00ed me gusta el caf\u00e9. Mi hermana, {1}, prefiere el t\u00e9.", a:["en cambio"],
   opts:["en cambio","a la moda","justo a tiempo","como que no"],
   hint:"A contrast marker that introduces an opposing preference or opinion.",
   sSrc:"I like coffee. My sister, {1}, prefers tea."},

  {type:"match", pairs:[
    {trg:"en cambio", src:"on the other hand"},
    {trg:"a partir de", src:"starting from"},
    {trg:"justo a tiempo", src:"just in time"},
    {trg:"a la moda", src:"in fashion"},
    {trg:"como que no", src:"yeah right (ironic)"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 expresa 'como que no'?",
   opts:["Acuerdo total","Duda o incredulidad ir\u00f3nica","Una pregunta formal","Una disculpa"],
   ans:"Duda o incredulidad ir\u00f3nica",
   hint:"This colloquial expression is used when you do not believe what someone just said."},

  {type:"drag_fill", s:"La {1} del contrato est\u00e1 prevista para diciembre. Trat\u00f3 a todos con {2}.",
   blanks:{"1":"finalizaci\u00f3n","2":"fineza"},
   pool:["finalizaci\u00f3n","fineza","llaneza","definici\u00f3n","exageraci\u00f3n"],
   hint:"The formal ending of a contract date. Treating others with elegance and courtesy."},

  {type:"fb", s:"Llegamos {1}. El avi\u00f3n estaba a punto de salir.", a:["justo a tiempo"],
   opts:["justo a tiempo","en cambio","a la moda","en casa"],
   hint:"We arrived at the exact right moment, with no time to spare.",
   sSrc:"We arrived {1}. The plane was about to leave."}
]};
export default LESSON_12;
