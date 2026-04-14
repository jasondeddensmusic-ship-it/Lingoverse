// Lesson 15 — Historia y epocas (History and Eras)
const LESSON_15 = {id:"esv2_b2g9_l15", title:"Historia y \u00e9pocas", icon:"\u{1F3DB}\uFE0F", xp:25, board:true, steps:[
  {type:"intro", title:"Historia y \u00e9pocas",
   desc:"Navigate conversations about history with vocabulary for eras, periods, and historical events. Essential for understanding culture and current affairs.",
   goals:["Learn 10 terms for historical periods and concepts","Discuss history and civilisations in Spanish","Use formal vocabulary for academic historical topics"]},

  {type:"teach", trg:"la edad antigua", src:"the ancient age; antiquity", pos:"noun", gender:"f",
   note:"Edad (age) + antigua (ancient).\nThe period from early civilisations to the fall of Rome.",
   example:"A: La edad antigua comprende desde Mesopotamia hasta Roma.\nB: Es un per\u00edodo muy largo.\nA: Miles de a\u00f1os de historia.\nB: Y la base de nuestra civilizaci\u00f3n.",
   exampleSrc:"A: The ancient age spans from Mesopotamia to Rome.\nB: It is a very long period.\nA: Thousands of years of history.\nB: And the foundation of our civilisation.",
   funFact:"Spanish history education divides time into Edad Antigua, Edad Media, Edad Moderna, and Edad Contempor\u00e1nea."},

  {type:"teach", trg:"la edad contempor\u00e1nea", src:"the contemporary age", pos:"noun", gender:"f",
   note:"Edad (age) + contempor\u00e1nea (contemporary).\nFrom the French Revolution (1789) to the present.",
   example:"A: La edad contempor\u00e1nea empieza con la Revoluci\u00f3n Francesa.\nB: \u00bfPor qu\u00e9 ese evento marca el cambio?\nA: Porque transform\u00f3 la pol\u00edtica y la sociedad de Europa.\nB: Y sus ideas a\u00fan influyen hoy.",
   exampleSrc:"A: The contemporary age begins with the French Revolution.\nB: Why does that event mark the change?\nA: Because it transformed the politics and society of Europe.\nB: And its ideas still influence us today.",
   funFact:"In Spain, 'Edad Contempor\u00e1nea' includes the Spanish Civil War (1936-1939) and the transition to democracy (1975-1982)."},

  {type:"teach", trg:"la edad de bronce", src:"the Bronze Age", pos:"noun", gender:"f",
   note:"Edad (age) + de bronce (of bronze).\nThe period when bronze tools replaced stone ones.",
   example:"A: En la edad de bronce, los humanos aprendieron a fundir metales.\nB: Fue un avance enorme.\nA: La metalurgia cambi\u00f3 la forma de hacer herramientas y armas.\nB: Y permiti\u00f3 el comercio a larga distancia.",
   exampleSrc:"A: In the Bronze Age, humans learned to smelt metals.\nB: It was a huge advance.\nA: Metallurgy changed the way tools and weapons were made.\nB: And it allowed long-distance trade.",
   funFact:"The Iberian Peninsula had important Bronze Age cultures, including El Argar in southeast Spain (2200-1550 BC)."},

  {type:"teach", trg:"la edad de piedra", src:"the Stone Age", pos:"noun", gender:"f",
   note:"Edad (age) + de piedra (of stone).\nThe earliest period of human development.",
   example:"A: En la edad de piedra se tallaban herramientas de s\u00edlex.\nB: Tambi\u00e9n pintaban en las cuevas.\nA: S\u00ed, las pinturas de Altamira son un ejemplo famoso.\nB: Tienen m\u00e1s de quince mil a\u00f1os.",
   exampleSrc:"A: In the Stone Age, they carved tools from flint.\nB: They also painted in caves.\nA: Yes, the Altamira paintings are a famous example.\nB: They are more than fifteen thousand years old.",
   funFact:"Altamira cave in Cantabria, Spain, is called the 'Sistine Chapel of Prehistory' for its magnificent prehistoric paintings."},

  {type:"teach", trg:"la cristianizaci\u00f3n", src:"the Christianisation", pos:"noun", gender:"f",
   note:"From cristiano (Christian) + -izaci\u00f3n (process).\nThe process of converting to Christianity.",
   example:"A: La cristianizaci\u00f3n de la Pen\u00ednsula Ib\u00e9rica fue un proceso largo.\nB: Comenz\u00f3 con los romanos.\nA: Y continu\u00f3 durante siglos despu\u00e9s.\nB: Es fundamental para entender la cultura espa\u00f1ola.",
   exampleSrc:"A: The Christianisation of the Iberian Peninsula was a long process.\nB: It began with the Romans.\nA: And continued for centuries afterwards.\nB: It is fundamental for understanding Spanish culture.",
   funFact:"The Reconquista (718-1492) was partly driven by Christianisation, reshaping the religious map of the Iberian Peninsula."},

  {type:"mc", q:"\u00bfQu\u00e9 evento marca el inicio de la Edad Contempor\u00e1nea?",
   opts:["El descubrimiento de Am\u00e9rica","La Revoluci\u00f3n Francesa","La ca\u00edda del Imperio Romano","La Primera Guerra Mundial"],
   ans:"La Revoluci\u00f3n Francesa",
   hint:"This 1789 event in Paris transformed European politics and society."},

  {type:"teach", trg:"la evangelizaci\u00f3n", src:"the evangelisation", pos:"noun", gender:"f",
   note:"From evangelizar (to evangelise).\nSpreading the Christian gospel, especially in the Americas.",
   example:"A: La evangelizaci\u00f3n de Am\u00e9rica fue un proceso controvertido.\nB: Muchas culturas ind\u00edgenas fueron destruidas.\nA: Es una parte dif\u00edcil de la historia.\nB: Hay que estudiarla con sentido cr\u00edtico.",
   exampleSrc:"A: The evangelisation of the Americas was a controversial process.\nB: Many indigenous cultures were destroyed.\nA: It is a difficult part of history.\nB: We must study it with a critical mindset.",
   funFact:"The Spanish missions of California, founded from 1769, were part of the evangelisation effort and now give their names to major cities."},

  {type:"teach", trg:"la educaci\u00f3n f\u00edsica", src:"physical education", pos:"noun", gender:"f",
   note:"Educaci\u00f3n (education) + f\u00edsica (physical).\nSchool subject focused on sports and exercise.",
   example:"A: La educaci\u00f3n f\u00edsica es mi asignatura favorita.\nB: \u00bfQu\u00e9 hac\u00e9is en clase?\nA: Atletismo, baloncesto y gimnasia.\nB: Es importante hacer ejercicio desde peque\u00f1os.",
   exampleSrc:"A: Physical education is my favourite subject.\nB: What do you do in class?\nA: Athletics, basketball, and gymnastics.\nB: It is important to exercise from a young age.",
   funFact:"In Spain, physical education is mandatory from primary school through secondary education, with a minimum of two hours per week."},

  {type:"teach", trg:"la edad de hierro", src:"the Iron Age", pos:"noun", gender:"f",
   note:"Edad (age) + de hierro (of iron).\nThe period after the Bronze Age when iron tools became common.",
   example:"A: La edad de hierro trajo herramientas m\u00e1s resistentes.\nB: El hierro era m\u00e1s f\u00e1cil de encontrar que el bronce.\nA: Y las armas de hierro eran m\u00e1s eficaces.\nB: Eso cambi\u00f3 el equilibrio de poder entre los pueblos.",
   exampleSrc:"A: The Iron Age brought more resistant tools.\nB: Iron was easier to find than bronze.\nA: And iron weapons were more effective.\nB: That changed the balance of power between peoples.",
   funFact:"The Celtiberian culture of central Spain was an Iron Age people who fiercely resisted Roman conquest."},

  {type:"fb", s:"Las pinturas de Altamira son de la {1}.", a:["edad de piedra"],
   opts:["edad de piedra","edad de bronce","edad de hierro","edad contempor\u00e1nea"],
   hint:"The oldest period, when humans used stone tools and painted in caves.",
   sSrc:"The Altamira paintings are from the {1}."},

  {type:"teach", trg:"el mejoramiento", src:"the improvement; betterment", pos:"noun", gender:"m",
   note:"From mejorar (to improve) + -miento.\nThe process or result of making something better.",
   example:"A: El mejoramiento de las carreteras ha reducido los accidentes.\nB: Es una buena inversi\u00f3n.\nA: El mejoramiento de la infraestructura es prioritario.\nB: Tambi\u00e9n deber\u00edan mejorar el transporte p\u00fablico.",
   exampleSrc:"A: The improvement of roads has reduced accidents.\nB: It is a good investment.\nA: Infrastructure improvement is a priority.\nB: They should also improve public transport.",
   funFact:"In Latin America, 'mejoramiento' is common, while in Spain 'mejora' is preferred for the same concept."},

  {type:"mc", q:"\u00bfQu\u00e9 metal caracteriza a la edad de bronce?",
   opts:["El hierro","El oro","El bronce","El cobre"],
   ans:"El bronce",
   hint:"The age is named after this metal, an alloy of copper and tin."},

  {type:"fb", s:"La {1} de Am\u00e9rica por los espa\u00f1oles es un tema controvertido.", a:["evangelizaci\u00f3n"],
   opts:["evangelizaci\u00f3n","cristianizaci\u00f3n","educaci\u00f3n f\u00edsica","edad antigua"],
   hint:"The process of spreading the Christian gospel specifically in the Americas.",
   sSrc:"The {1} of the Americas by the Spanish is a controversial topic."},

  {type:"match", pairs:[
    {trg:"edad antigua", src:"ancient age"},
    {trg:"edad contempor\u00e1nea", src:"contemporary age"},
    {trg:"edad de bronce", src:"Bronze Age"},
    {trg:"edad de piedra", src:"Stone Age"},
    {trg:"edad de hierro", src:"Iron Age"}
  ]},

  {type:"mc", q:"\u00bfCu\u00e1l es el orden cronol\u00f3gico correcto?",
   opts:["Piedra, Hierro, Bronce","Bronce, Piedra, Hierro","Piedra, Bronce, Hierro","Hierro, Bronce, Piedra"],
   ans:"Piedra, Bronce, Hierro",
   hint:"Humans first used stone, then learned to mix metals (bronze), then mastered a harder metal."},

  {type:"drag_fill", s:"La {1} empieza con la Revoluci\u00f3n Francesa. La {2} es la base de la civilizaci\u00f3n occidental.",
   blanks:{"1":"edad contempor\u00e1nea","2":"edad antigua"},
   pool:["edad contempor\u00e1nea","edad antigua","edad de bronce","cristianizaci\u00f3n","educaci\u00f3n f\u00edsica"],
   hint:"The modern era from 1789. The earliest civilisations (Egypt, Greece, Rome)."}
]};
export default LESSON_15;
