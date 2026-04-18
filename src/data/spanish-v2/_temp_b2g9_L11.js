// Lesson 11 — El mundo fisico (The Physical World)
const LESSON_11 = {id:"esv2_b2g9_l11", title:"El mundo f\u00edsico", icon:"\u{1F30D}", xp:25, board:true, steps:[
  {type:"intro", title:"El mundo f\u00edsico",
   desc:"Describe the physical world with precision. From coastlines to minerals, these terms help you discuss geography, nature, and materials.",
   goals:["Learn 10 terms for geography, nature, and materials","Describe landscapes and physical features","Use scientific vocabulary in everyday contexts"]},

  {type:"teach", trg:"el litoral", src:"the coastline; the littoral", pos:"noun", gender:"m",
   note:"From Latin litoralis (of the shore).\nThe coastal region or strip along the sea.",
   example:"A: El litoral mediterr\u00e1neo es precioso.\nB: S\u00ed, desde Barcelona hasta Almer\u00eda.\nA: Miles de turistas visitan el litoral cada verano.\nB: El turismo es la principal industria de la costa.",
   exampleSrc:"A: The Mediterranean coastline is beautiful.\nB: Yes, from Barcelona to Almeria.\nA: Thousands of tourists visit the coast every summer.\nB: Tourism is the main industry of the coast.",
   funFact:"Spain has over 8,000 km of coastline, the longest in continental Europe after Norway."},

  {type:"teach", trg:"el litio", src:"lithium", pos:"noun", gender:"m",
   note:"From Greek lithos (stone).\nA light metal used in batteries and medicine.",
   example:"A: Las bater\u00edas de litio est\u00e1n en todos los m\u00f3viles.\nB: Y en los coches el\u00e9ctricos tambi\u00e9n.\nA: La demanda de litio no para de crecer.\nB: Es el metal del futuro.",
   exampleSrc:"A: Lithium batteries are in all mobile phones.\nB: And in electric cars too.\nA: The demand for lithium keeps growing.\nB: It is the metal of the future.",
   funFact:"The Extremadura region of Spain has one of Europe's largest lithium deposits, discovered in 2016."},

  {type:"teach", trg:"el hidrocarburo", src:"hydrocarbon", pos:"noun", gender:"m",
   note:"Hidro- (water/hydrogen) + carburo (carbide).\nChemical compounds of hydrogen and carbon.",
   example:"A: Los hidrocarburos son la base del petr\u00f3leo.\nB: Y tambi\u00e9n del gas natural.\nA: Necesitamos reducir nuestra dependencia de los hidrocarburos.\nB: Las energ\u00edas renovables son la alternativa.",
   exampleSrc:"A: Hydrocarbons are the basis of petroleum.\nB: And also of natural gas.\nA: We need to reduce our dependence on hydrocarbons.\nB: Renewable energies are the alternative.",
   funFact:"Spain imports over 95% of its hydrocarbons, making it one of the most energy-dependent countries in Europe."},

  {type:"teach", trg:"meteorol\u00f3gico", src:"meteorological; weather-related", pos:"adj", gender:null,
   note:"From meteorolog\u00eda (meteorology).\nRelating to weather and atmospheric conditions.",
   example:"A: La previsi\u00f3n meteorol\u00f3gica anuncia tormentas.\nB: \u00bfPara cu\u00e1ndo?\nA: Para este fin de semana.\nB: Entonces cambiaremos los planes.",
   exampleSrc:"A: The weather forecast announces storms.\nB: For when?\nA: For this weekend.\nB: Then we will change our plans.",
   funFact:"AEMET (Agencia Estatal de Meteorolog\u00eda) is Spain's national weather service, providing forecasts since 1887."},

  {type:"teach", trg:"la hilera", src:"the row; the line", pos:"noun", gender:"f",
   note:"From hilo (thread) + -era.\nA straight line of objects or people.",
   example:"A: Los \u00e1rboles forman una hilera perfecta.\nB: Los plantaron hace cincuenta a\u00f1os.\nA: Dan una sombra maravillosa en verano.\nB: Es un paseo precioso.",
   exampleSrc:"A: The trees form a perfect row.\nB: They were planted fifty years ago.\nA: They give wonderful shade in summer.\nB: It is a beautiful walk.",
   funFact:"The word 'hilera' comes from 'hilo' (thread) because a row of objects looks like items strung on a thread."},

  {type:"mc", q:"\u00bfQu\u00e9 es el litoral?",
   opts:["Una monta\u00f1a","La zona costera","Un r\u00edo","Un desierto"],
   ans:"La zona costera",
   hint:"This word comes from Latin 'litoralis' meaning 'of the shore'. It describes the area along the sea."},

  {type:"teach", trg:"el estiramiento", src:"the stretching", pos:"noun", gender:"m",
   note:"From estirar (to stretch) + -miento.\nUsed for physical exercise and also figuratively.",
   example:"A: Antes de correr, haz estiramientos.\nB: \u00bfCu\u00e1ntos minutos?\nA: Al menos diez minutos de estiramiento.\nB: As\u00ed evitar\u00e1s lesiones.",
   exampleSrc:"A: Before running, do stretches.\nB: How many minutes?\nA: At least ten minutes of stretching.\nB: That way you will avoid injuries.",
   funFact:"The -miento suffix creates nouns from verbs describing the process or result: estirar > estiramiento, conocer > conocimiento."},

  {type:"teach", trg:"el manto", src:"the mantle; the cloak", pos:"noun", gender:"m",
   note:"From Latin mantum (cloak).\nA covering layer, used literally and figuratively.",
   example:"A: Un manto de nieve cubr\u00eda las monta\u00f1as.\nB: \u00bfCu\u00e1ntos cent\u00edmetros cayeron?\nA: M\u00e1s de treinta.\nB: Perfecto para esquiar.",
   exampleSrc:"A: A mantle of snow covered the mountains.\nB: How many centimetres fell?\nA: More than thirty.\nB: Perfect for skiing.",
   funFact:"In geology, 'el manto terrestre' (Earth's mantle) is the thick layer between the crust and the core."},

  {type:"teach", trg:"el margen", src:"the margin; the bank (of a river)", pos:"noun", gender:"m",
   note:"From Latin margo (edge/border).\nGender note: 'el margen' (edge/margin), 'la margen' (riverbank).",
   example:"A: Hay un pueblo en la margen del r\u00edo.\nB: \u00bfEn cu\u00e1l de las dos m\u00e1rgenes?\nA: En la margen derecha.\nB: Es una zona muy f\u00e9rtil por las crecidas del r\u00edo.",
   exampleSrc:"A: There is a village on the bank of the river.\nB: On which of the two banks?\nA: On the right bank.\nB: It is a very fertile area because of the river floods.",
   funFact:"'Margen' changes meaning with gender: 'el margen' means margin or leeway, while 'la margen' means riverbank."},

  {type:"fb", s:"La previsi\u00f3n {1} anuncia lluvias para ma\u00f1ana.", a:["meteorol\u00f3gica"],
   opts:["meteorol\u00f3gica","mercantil","monetaria","minorista"],
   hint:"An adjective relating to weather and atmospheric conditions.",
   sSrc:"The {1} forecast announces rain for tomorrow."},

  {type:"teach", trg:"el lunar", src:"the mole; the beauty spot", pos:"noun", gender:"m",
   note:"From luna (moon) + -ar (relating to).\nA dark spot on the skin.",
   example:"A: Tienes un lunar nuevo en el brazo.\nB: S\u00ed, lo he visto. Deber\u00eda ir al dermat\u00f3logo.\nA: Es importante revisar los lunares regularmente.\nB: Tienes raz\u00f3n. Pedir\u00e9 cita.",
   exampleSrc:"A: You have a new mole on your arm.\nB: Yes, I have seen it. I should go to the dermatologist.\nA: It is important to check moles regularly.\nB: You are right. I will make an appointment.",
   funFact:"The word 'lunar' comes from the belief that moles appeared due to the influence of the moon on the body."},

  {type:"mc", q:"\u00bfQu\u00e9 cambia con el g\u00e9nero de la palabra 'margen'?",
   opts:["Nada, siempre es masculino","El significado: 'el margen' es margen, 'la margen' es orilla del r\u00edo","La pronunciaci\u00f3n","El plural"],
   ans:"El significado: 'el margen' es margen, 'la margen' es orilla del r\u00edo",
   hint:"With the masculine article it means margin or leeway. With the feminine article it means riverbank."},

  {type:"fb", s:"Antes de correr, es importante hacer {1}.", a:["estiramientos"],
   opts:["estiramientos","hidrocarburos","lunares","hileras"],
   hint:"Physical exercises where you lengthen your muscles to avoid injury.",
   sSrc:"Before running, it is important to do {1}."},

  {type:"match", pairs:[
    {trg:"litoral", src:"coastline"},
    {trg:"litio", src:"lithium"},
    {trg:"hidrocarburo", src:"hydrocarbon"},
    {trg:"manto", src:"mantle; cloak"},
    {trg:"lunar", src:"mole; beauty spot"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 son los hidrocarburos?",
   opts:["Minerales encontrados en el agua","Compuestos qu\u00edmicos de hidr\u00f3geno y carbono","Tipos de plantas acu\u00e1ticas","Corrientes de agua subterr\u00e1nea"],
   ans:"Compuestos qu\u00edmicos de hidr\u00f3geno y carbono",
   hint:"The name combines roots for two elements. These organic compounds are the building blocks of petroleum and natural gas."},

  {type:"drag_fill", s:"El {1} mediterr\u00e1neo atrae millones de turistas. Un {2} de nieve cubr\u00eda las cumbres.",
   blanks:{"1":"litoral","2":"manto"},
   pool:["litoral","manto","margen","lunar","litio"],
   hint:"The coast draws visitors. A covering layer of snow blankets the peaks."}
]};
export default LESSON_11;
