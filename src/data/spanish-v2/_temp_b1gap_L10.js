// L10: Travel & Transport - Journeys, vehicles, and navigation
const LESSON_10 = {
  id:"esv2_b1gap_l10", title:"Viajes y transporte", icon:"\u{2708}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Viajes y transporte",
     desc:"Hit the road. Learn vocabulary for travel, vehicles, and navigating new places.",
     goals:["Learn 20 travel and transport words","Describe journeys and destinations","Handle travel situations"]},

    {type:"teach", trg:"el aterrizaje", src:"the landing (aircraft)", pos:"noun", gender:"m",
     note:"Masculine noun. From 'aterrizar' (to land).\nOpposite: el despegue (takeoff).",
     example:"A: El aterrizaje fue muy suave.\nB: S\u00ed, el piloto es muy bueno.",
     exampleSrc:"A: The landing was very smooth.\nB: Yes, the pilot is very good.",
     funFact:"From 'a-' + 'tierra' (earth) + '-izar'. Literally 'to go toward earth'. The lunar landing is 'el alunizaje' (from 'luna', moon)."},

    {type:"teach", trg:"el buque", src:"the ship, vessel", pos:"noun", gender:"m",
     note:"Masculine noun. A large ship.\nBuque de guerra = warship.",
     example:"A: El buque zarpa ma\u00f1ana del puerto.\nB: \u00bfAdonde va?",
     exampleSrc:"A: The ship departs tomorrow from the port.\nB: Where is it going?",
     funFact:"From Old French 'buc' (hull). In Spanish, 'buque' is for large vessels; 'barco' is more general; 'bote' is for small boats."},

    {type:"teach", trg:"la armada", src:"the navy, fleet", pos:"noun", gender:"f",
     note:"Feminine noun. A country's naval force.\nLa Armada Espa\u00f1ola = the Spanish Navy.",
     example:"A: Mi hermano sirve en la Armada.\nB: \u00bfEst\u00e1 en un barco ahora?",
     exampleSrc:"A: My brother serves in the Navy.\nB: Is he on a ship now?",
     funFact:"From 'armar' (to arm). The most famous was the 'Armada Invencible' (Spanish Armada) of 1588, which sailed against England."},

    {type:"teach", trg:"armar", src:"to arm, to assemble", pos:"verb", gender:null,
     note:"Regular -ar verb. Multiple meanings.\nArmar un mueble = to assemble furniture.",
     example:"A: \u00bfMe ayudas a armar esta estanter\u00eda?\nB: Claro, \u00bfd\u00f3nde est\u00e1n las instrucciones?",
     exampleSrc:"A: Can you help me assemble this bookshelf?\nB: Sure, where are the instructions?",
     funFact:"From Latin 'armare' (to equip). The double meaning (to arm/to assemble) makes sense: you 'equip' something by putting parts together."},

    {type:"teach", trg:"el ancla", src:"the anchor", pos:"noun", gender:"f",
     note:"Feminine noun but uses 'el' in singular.\nLike 'el agua'. Echar el ancla = to drop anchor.",
     example:"A: El capit\u00e1n orden\u00f3 echar el ancla.\nB: Por fin llegamos al puerto.",
     exampleSrc:"A: The captain ordered to drop anchor.\nB: We finally arrived at the port.",
     funFact:"From Latin 'ancora', from Greek 'ankura'. Uses 'el' in singular (stressed 'a') but remains feminine: las anclas, el ancla pesada."},

    {type:"mc",
     q:"\u00bfQu\u00e9 se echa al agua para que un barco no se mueva?",
     opts:["el ancla","el buque","la armada","el aterrizaje"],
     ans:"el ancla",
     hint:"A heavy metal device attached to a chain, dropped to the seabed to hold a vessel in place."},

    {type:"teach", trg:"atrasar", src:"to delay, to set back", pos:"verb", gender:null,
     note:"Regular -ar verb. Atrasar el reloj = to set the clock back.\nEl tren se atras\u00f3 = the train was delayed.",
     example:"A: El vuelo se ha atrasado una hora.\nB: \u00bfOtra vez? Siempre pasa lo mismo.",
     exampleSrc:"A: The flight has been delayed one hour.\nB: Again? It always happens.",
     funFact:"From 'atr\u00e1s' (behind, back). In autumn, Spaniards 'atrasan' their clocks one hour. The opposite is 'adelantar' (to bring forward)."},

    {type:"teach", trg:"adelante", src:"forward, go ahead", pos:"adv", gender:null,
     note:"Adverb. Very common in daily speech.\n\u00a1Adelante! = Go ahead! Come in!",
     example:"A: \u00bfPuedo pasar?\nB: \u00a1Adelante! La puerta est\u00e1 abierta.",
     exampleSrc:"A: May I come in?\nB: Go ahead! The door is open.",
     funFact:"From 'ad' (to) + 'delante' (in front). 'Seguir adelante' (to keep going) is one of the most motivational phrases in Spanish."},

    {type:"teach", trg:"la ausencia", src:"the absence", pos:"noun", gender:"f",
     note:"Feminine noun. Being away or not present.\nBrillar por su ausencia = conspicuous absence.",
     example:"A: Su ausencia fue muy clara.\nB: S\u00ed, todos preguntaron por \u00e9l.",
     exampleSrc:"A: His absence was very clear.\nB: Yes, everyone asked about him.",
     funFact:"From Latin 'absentia'. The phrase 'brillar por su ausencia' (to shine by one's absence) comes from a speech by Tacitus about Roman politics."},

    {type:"teach", trg:"ascender", src:"to ascend, to be promoted", pos:"verb", gender:null,
     note:"Irregular -er verb. e > ie: asciendo.\nDouble meaning: climb or get promoted.",
     example:"A: Ascendi\u00f3 a directora el mes pasado.\nB: Se lo merece, trabaja much\u00edsimo.",
     exampleSrc:"A: She was promoted to director last month.\nB: She deserves it, she works very hard.",
     funFact:"From Latin 'ascendere' (to climb up). Both meanings relate to going 'up': physically climbing or climbing the career ladder."},

    {type:"fb",
     s:"El {1} del avi\u00f3n fue un poco brusco por el viento.",
     a:["aterrizaje"],
     opts:["aterrizaje","ancla","buque","adelante"],
     hint:"The moment when an aircraft touches down on the runway after a flight.",
     sSrc:"The {1} of the plane was a bit rough because of the wind."},

    {type:"teach", trg:"la arroba", src:"the at sign (@)", pos:"noun", gender:"f",
     note:"Feminine noun. The @ symbol in email addresses.\nAlso an old unit of weight (~11 kg).",
     example:"A: \u00bfCu\u00e1l es tu correo?\nB: Es juan arroba gmail punto com.",
     exampleSrc:"A: What is your email?\nB: It is juan at gmail dot com.",
     funFact:"Originally an old Spanish/Portuguese weight measure (~11.5 kg). The @ symbol was repurposed for email in 1971. Spaniards already had the perfect word for it."},

    {type:"teach", trg:"atascar", src:"to block, to clog, to get stuck", pos:"verb", gender:null,
     note:"Regular -ar verb. El tr\u00e1fico se atasc\u00f3 = traffic got jammed.\nAtascarse = to get stuck.",
     example:"A: Nos hemos atascado en un atasco enorme.\nB: Vamos a llegar tarde.",
     exampleSrc:"A: We are stuck in a huge traffic jam.\nB: We are going to be late.",
     funFact:"Possibly from Gothic 'taska' (pocket, small enclosure). An 'atasco' (traffic jam) is Madrid's daily reality. 'Atascos' trend on Spanish Twitter."},

    {type:"teach", trg:"abordar", src:"to board, to tackle", pos:"verb", gender:null,
     note:"Regular -ar verb. Abordar un avi\u00f3n = to board a plane.\nAbordar un tema = to tackle a subject.",
     example:"A: Ya podemos abordar el avi\u00f3n.\nB: Estupendo, tengo el asiento de ventanilla.",
     exampleSrc:"A: We can board the plane now.\nB: Great, I have the window seat.",
     funFact:"From 'a bordo' (on board). Originally a naval term: to come alongside another ship. Now used for planes, topics, and problems."},

    {type:"teach", trg:"el avistamiento", src:"the sighting", pos:"noun", gender:"m",
     note:"Masculine noun. Seeing something notable.\nAvistamiento de ballenas = whale watching.",
     example:"A: Hicimos un avistamiento de delfines.\nB: \u00a1Qu\u00e9 suerte! \u00bfCu\u00e1ntos visteis?",
     exampleSrc:"A: We did a dolphin sighting.\nB: How lucky! How many did you see?",
     funFact:"From 'avistar' (to sight, to spot). Whale watching tours are called 'excursiones de avistamiento de ballenas' in Spanish coastal tourism."},

    {type:"mc",
     q:"\u00bfQu\u00e9 significa 'atascarse' cuando hablamos de tr\u00e1fico?",
     opts:["Aparcar el coche","Quedarse parado sin avanzar","Ir muy r\u00e1pido","Tomar un desv\u00edo"],
     ans:"Quedarse parado sin avanzar",
     hint:"When too many cars try to use the same road and nobody can move forward."},

    {type:"teach", trg:"el bot\u00edn", src:"the loot, booty", pos:"noun", gender:"m",
     note:"Masculine noun. Stolen goods or war spoils.\nAlso: un bot\u00edn = an ankle boot.",
     example:"A: Los piratas escondieron el bot\u00edn en una isla.\nB: Como en las pel\u00edculas.",
     exampleSrc:"A: The pirates hid the loot on an island.\nB: Like in the movies.",
     funFact:"From Old French 'butin' (plunder). The double meaning (loot and boot) comes from different origins: the footwear 'bot\u00edn' is from French 'bottine'."},

    {type:"teach", trg:"averiar", src:"to break down, to damage", pos:"verb", gender:null,
     note:"Regular -ar verb. El coche se averi\u00f3 = the car broke down.\nAver\u00eda = breakdown.",
     example:"A: Se nos ha averiado el coche en la autopista.\nB: Llama a la gr\u00faa.",
     exampleSrc:"A: Our car has broken down on the highway.\nB: Call the tow truck.",
     funFact:"From Arabic 'awariyya' (defective goods). In maritime law, 'aver\u00eda' was damage to cargo. Now it means any mechanical breakdown."},

    {type:"fb",
     s:"\u00a1{1}! No te detengas, sigue caminando.",
     a:["Adelante"],
     opts:["Adelante","Ausencia","Arroba","Ancla"],
     hint:"An encouraging word meaning 'forward' or 'go ahead', used daily in Spanish.",
     sSrc:"{1}! Do not stop, keep walking."},

    {type:"match", pairs:[
      {trg:"aterrizaje", src:"landing"},
      {trg:"buque", src:"ship"},
      {trg:"ausencia", src:"absence"},
      {trg:"abordar", src:"to board"},
      {trg:"averiar", src:"to break down"}
    ]}
  ]
};
export default LESSON_10;
