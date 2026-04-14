// Lesson 4 — Poder y gobierno (Power and Government)
const LESSON_4 = {id:"esv2_b2g9_l4", title:"Poder y gobierno", icon:"\u{1F3DB}\uFE0F", xp:25, board:true, steps:[
  {type:"intro", title:"Poder y gobierno",
   desc:"Understand how Spanish-speaking countries talk about government, law enforcement, and political structures. Essential for reading news and discussing current affairs.",
   goals:["Learn 10 terms for government and institutions","Discuss political structures in Spanish","Recognise formal institutional vocabulary"]},

  {type:"teach", trg:"el mandatario", src:"the leader; head of state", pos:"noun", gender:"m",
   note:"From mandato (mandate/term of office).\nFeminine: la mandataria.",
   example:"A: El mandatario visit\u00f3 tres pa\u00edses en una semana.\nB: \u00bfPara qu\u00e9?\nA: Para firmar acuerdos comerciales.\nB: Es importante mantener buenas relaciones internacionales.",
   exampleSrc:"A: The head of state visited three countries in one week.\nB: What for?\nA: To sign trade agreements.\nB: It is important to maintain good international relations.",
   funFact:"In Latin America, 'primer mandatario' is the standard way to refer to the president in formal news."},

  {type:"teach", trg:"el manifestante", src:"the protester; demonstrator", pos:"noun", gender:"m",
   note:"From manifestar (to demonstrate/show).\nFeminine: la manifestante.",
   example:"A: Miles de manifestantes llenaron la plaza.\nB: \u00bfQu\u00e9 ped\u00edan?\nA: Mejores condiciones laborales.\nB: Las manifestaciones son un derecho fundamental.",
   exampleSrc:"A: Thousands of protesters filled the square.\nB: What were they demanding?\nA: Better working conditions.\nB: Demonstrations are a fundamental right.",
   funFact:"Spain's constitution of 1978 guarantees the right to demonstrate, one of the democratic freedoms restored after Franco."},

  {type:"teach", trg:"la guardia civil", src:"the Civil Guard", pos:"noun", gender:"f",
   note:"Guardia (guard) + civil (civil/civilian).\nSpain's oldest national law enforcement body.",
   example:"A: La guardia civil patrulla las carreteras.\nB: Tambi\u00e9n trabajan en zonas rurales.\nA: S\u00ed, son muy importantes fuera de las ciudades.\nB: Llevan un uniforme verde inconfundible.",
   exampleSrc:"A: The Civil Guard patrols the roads.\nB: They also work in rural areas.\nA: Yes, they are very important outside the cities.\nB: They wear an unmistakable green uniform.",
   funFact:"Founded in 1844, the Guardia Civil is a military police force that traditionally operates in rural Spain and along borders."},

  {type:"teach", trg:"la congregaci\u00f3n", src:"the congregation; gathering", pos:"noun", gender:"f",
   note:"From congregar (to gather).\nUsed for religious groups and formal assemblies.",
   example:"A: La congregaci\u00f3n se reuni\u00f3 en la iglesia principal.\nB: \u00bfCu\u00e1ntas personas hab\u00eda?\nA: M\u00e1s de quinientas.\nB: Es una comunidad muy activa.",
   exampleSrc:"A: The congregation gathered in the main church.\nB: How many people were there?\nA: More than five hundred.\nB: It is a very active community.",
   funFact:"In Spain, 'congregaci\u00f3n' also refers to specific Catholic religious orders, such as the Congregation of Jesus."},

  {type:"teach", trg:"el comunismo", src:"communism", pos:"noun", gender:"m",
   note:"From com\u00fan (common) + -ismo (system/belief).\nA political and economic ideology.",
   example:"A: \u00bfHas estudiado el comunismo en clase de historia?\nB: S\u00ed, analizamos la revoluci\u00f3n rusa.\nA: Es un tema complejo.\nB: Y muy importante para entender el siglo XX.",
   exampleSrc:"A: Have you studied communism in history class?\nB: Yes, we analysed the Russian revolution.\nA: It is a complex topic.\nB: And very important for understanding the 20th century.",
   funFact:"The Spanish Communist Party (PCE) played a key role in the transition to democracy after Franco's death in 1975."},

  {type:"mc", q:"\u00bfQu\u00e9 es la Guardia Civil?",
   opts:["Un partido pol\u00edtico","Un cuerpo de seguridad del Estado","Una organizaci\u00f3n humanitaria","Un sindicato de trabajadores"],
   ans:"Un cuerpo de seguridad del Estado",
   hint:"They wear green uniforms and patrol roads and rural areas in Spain."},

  {type:"teach", trg:"la legitimidad", src:"the legitimacy", pos:"noun", gender:"f",
   note:"From leg\u00edtimo (legitimate).\nThe rightful authority or validity of something.",
   example:"A: La legitimidad del gobierno depende de las elecciones.\nB: Sin elecciones libres, no hay legitimidad.\nA: Exacto. El voto popular es la base de la democracia.\nB: Por eso es tan importante votar.",
   exampleSrc:"A: The legitimacy of the government depends on elections.\nB: Without free elections, there is no legitimacy.\nA: Exactly. The popular vote is the basis of democracy.\nB: That is why it is so important to vote.",
   funFact:"In Spanish political discourse, 'legitimidad' is often distinguished from 'legalidad': something can be legal but lack popular legitimacy."},

  {type:"teach", trg:"la imparcialidad", src:"the impartiality", pos:"noun", gender:"f",
   note:"Im- (not) + parcialidad (partiality).\nBeing fair and neutral, without favouring either side.",
   example:"A: Los jueces deben actuar con imparcialidad.\nB: Es la base del sistema judicial.\nA: Sin imparcialidad, no hay justicia.\nB: Por eso la independencia judicial es tan importante.",
   exampleSrc:"A: Judges must act with impartiality.\nB: It is the foundation of the judicial system.\nA: Without impartiality, there is no justice.\nB: That is why judicial independence is so important.",
   funFact:"Spain's constitution explicitly requires 'imparcialidad' from all public servants, not just judges."},

  {type:"teach", trg:"el mit\u00edn", src:"the rally; political meeting", pos:"noun", gender:"m",
   note:"From English 'meeting'.\nAdapted into Spanish for political gatherings.",
   example:"A: El partido organiz\u00f3 un mit\u00edn en la plaza mayor.\nB: \u00bfAsisti\u00f3 mucha gente?\nA: S\u00ed, m\u00e1s de tres mil personas.\nB: Los m\u00edtines son clave en campa\u00f1a electoral.",
   exampleSrc:"A: The party organised a rally in the main square.\nB: Did many people attend?\nA: Yes, more than three thousand.\nB: Rallies are key during election campaigns.",
   funFact:"The word 'mit\u00edn' was borrowed from English 'meeting' in the 19th century but narrowed to mean specifically political rallies."},

  {type:"fb", s:"Los {1} marcharon pac\u00edficamente por el centro de la ciudad.", a:["manifestantes"],
   opts:["manifestantes","mandatarios","mediadores","conductores"],
   hint:"People who take to the streets to express their views publicly.",
   sSrc:"The {1} marched peacefully through the city centre."},

  {type:"teach", trg:"la imposici\u00f3n", src:"the imposition", pos:"noun", gender:"f",
   note:"From imponer (to impose).\nForcing something on others, often used for taxes or rules.",
   example:"A: La imposici\u00f3n de nuevos impuestos no es popular.\nB: Nadie quiere pagar m\u00e1s.\nA: Pero el gobierno dice que es necesario.\nB: Deber\u00edan explicar mejor c\u00f3mo se usa el dinero.",
   exampleSrc:"A: The imposition of new taxes is not popular.\nB: Nobody wants to pay more.\nA: But the government says it is necessary.\nB: They should explain better how the money is used.",
   funFact:"In Spanish tax law, 'imposici\u00f3n' and 'tributo' are near-synonyms, but 'imposici\u00f3n' emphasises the compulsory nature."},

  {type:"mc", q:"\u00bfQu\u00e9 es un mit\u00edn?",
   opts:["Una reuni\u00f3n de trabajo","Un acto pol\u00edtico con discursos","Una competici\u00f3n deportiva","Un tipo de examen"],
   ans:"Un acto pol\u00edtico con discursos",
   hint:"This word comes from the English word 'meeting' but refers specifically to political events."},

  {type:"fb", s:"La {1} del gobierno fue cuestionada por la oposici\u00f3n.", a:["legitimidad"],
   opts:["legitimidad","imparcialidad","imposici\u00f3n","congregaci\u00f3n"],
   hint:"The rightful authority of the ruling party was questioned by opponents.",
   sSrc:"The {1} of the government was questioned by the opposition."},

  {type:"match", pairs:[
    {trg:"mandatario", src:"head of state"},
    {trg:"manifestante", src:"protester"},
    {trg:"legitimidad", src:"legitimacy"},
    {trg:"imparcialidad", src:"impartiality"},
    {trg:"mit\u00edn", src:"political rally"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'imparcialidad'?",
   opts:["Ser partidario de algo","Actuar con neutralidad y justicia","Imponer una decisi\u00f3n","No tener opini\u00f3n"],
   ans:"Actuar con neutralidad y justicia",
   hint:"The prefix im- means 'not'. Parcial means 'biased'. So this means 'not biased'."},

  {type:"drag_fill", s:"El {1} pronunci\u00f3 un discurso en el {2} electoral.",
   blanks:{"1":"mandatario","2":"mit\u00edn"},
   pool:["mandatario","mit\u00edn","manifestante","monopolio","comunismo"],
   hint:"The head of state spoke at a political gathering during the campaign."},

  {type:"fb", s:"La {1} de nuevas normas provoc\u00f3 protestas en todo el pa\u00eds.", a:["imposici\u00f3n"],
   opts:["imposici\u00f3n","imparcialidad","legitimidad","congregaci\u00f3n"],
   hint:"The act of forcing new rules on people against their will.",
   sSrc:"The {1} of new rules caused protests across the country."}
]};
export default LESSON_4;
