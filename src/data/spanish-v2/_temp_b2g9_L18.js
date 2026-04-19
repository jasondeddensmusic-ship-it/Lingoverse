// Lesson 18 — Cuerpo y salud (Body and Health)
const LESSON_18 = {id:"esv2_b2g9_l18", title:"Cuerpo y salud", icon:"\u{1FA7A}", xp:25, board:true, steps:[
  {type:"intro", title:"Cuerpo y salud",
   desc:"Expand your medical and body vocabulary with specialised terms. From skin layers to stretching, these words help you discuss health with precision.",
   goals:["Learn 10 terms for body parts, health, and medicine","Discuss medical topics with accurate vocabulary","Use formal health-related terminology"]},

  {type:"teach", trg:"la dermis", src:"the dermis (inner skin layer)", pos:"noun", gender:"f",
   note:"From Greek derma (skin).\nThe thick layer of skin below the outer epidermis.",
   example:"A: La dermis est\u00e1 debajo de la epidermis.\nB: \u00bfQu\u00e9 funci\u00f3n tiene?\nA: Contiene los vasos sangu\u00edneos y los nervios.\nB: Por eso sentimos dolor cuando nos cortamos profundamente.",
   exampleSrc:"A: The dermis is below the epidermis.\nB: What function does it have?\nA: It contains blood vessels and nerves.\nB: That is why we feel pain when we cut ourselves deeply.",
   funFact:"The word 'dermatologist' comes from the same Greek root: derma (skin) + logos (study)."},

  {type:"teach", trg:"el gl\u00fateo", src:"the gluteal muscle; buttock", pos:"noun", gender:"m",
   note:"From Greek gloutos (buttock).\nThe muscles of the buttocks. Often used in plural: gl\u00fateos.",
   example:"A: Los gl\u00fateos son los m\u00fasculos m\u00e1s grandes del cuerpo.\nB: \u00bfC\u00f3mo se ejercitan?\nA: Con sentadillas y subir escaleras.\nB: Entonces las escaleras del metro cuentan como ejercicio.",
   exampleSrc:"A: The glutes are the largest muscles in the body.\nB: How do you exercise them?\nA: With squats and climbing stairs.\nB: Then the metro stairs count as exercise.",
   funFact:"Fitness culture in Spain has popularised 'gl\u00fateos' as the standard term, replacing the colloquial 'trasero' in gym contexts."},

  {type:"teach", trg:"la conjuntivitis", src:"conjunctivitis", pos:"noun", gender:"f",
   note:"From conjuntiva (conjunctiva) + -itis (inflammation).\nInflammation of the eye membrane.",
   example:"A: Tengo los ojos rojos. Creo que es conjuntivitis.\nB: No te toques los ojos. Es muy contagioso.\nA: \u00bfDebo ir al m\u00e9dico?\nB: S\u00ed, te recetará unas gotas.",
   exampleSrc:"A: My eyes are red. I think it is conjunctivitis.\nB: Do not touch your eyes. It is very contagious.\nA: Should I go to the doctor?\nB: Yes, they will prescribe some drops.",
   funFact:"The -itis suffix always means inflammation in medical Spanish: bronquitis, gastritis, artritis, conjuntivitis."},

  {type:"teach", trg:"la c\u00f3lera", src:"cholera; anger/rage", pos:"noun", gender:"f",
   note:"From Greek cholera (bile disease).\nAs feminine: the disease. As masculine (el c\u00f3lera): anger.",
   example:"A: La c\u00f3lera fue una epidemia terrible en el siglo XIX.\nB: Miles de personas perdieron la vida.\nA: Hoy se puede prevenir con agua limpia.\nB: Pero a\u00fan existe en algunos pa\u00edses.",
   exampleSrc:"A: Cholera was a terrible epidemic in the 19th century.\nB: Thousands of people lost their lives.\nA: Today it can be prevented with clean water.\nB: But it still exists in some countries.",
   funFact:"Gender matters: 'la c\u00f3lera' is the disease cholera, while 'el c\u00f3lera' means rage or fury. Gabriel Garc\u00eda M\u00e1rquez played on this in his famous novel."},

  {type:"teach", trg:"el excremento", src:"excrement", pos:"noun", gender:"m",
   note:"From Latin excrementum (what is sifted out).\nBodily waste matter. Formal/medical register.",
   example:"A: El an\u00e1lisis de excrementos es una prueba m\u00e9dica com\u00fan.\nB: \u00bfPara qu\u00e9 se usa?\nA: Para detectar par\u00e1sitos o infecciones.\nB: No es agradable, pero es necesario.",
   exampleSrc:"A: Stool analysis is a common medical test.\nB: What is it used for?\nA: To detect parasites or infections.\nB: It is not pleasant, but it is necessary.",
   funFact:"In veterinary Spanish, 'excrementos' is the standard clinical term. The colloquial equivalent varies widely by region."},

  {type:"mc", q:"\u00bfQu\u00e9 es la dermis?",
   opts:["La capa exterior de la piel","La capa interior de la piel, debajo de la epidermis","Un tipo de crema para la piel","Una enfermedad de la piel"],
   ans:"La capa interior de la piel, debajo de la epidermis",
   hint:"It is the layer underneath the surface. It contains blood vessels and nerve endings."},

  {type:"teach", trg:"el acupuntor", src:"the acupuncturist", pos:"noun", gender:"m",
   note:"From acupuntura (acupuncture) + -or (agent).\nFeminine: la acupuntora.",
   example:"A: Fui al acupuntor para el dolor de espalda.\nB: \u00bfY te ayud\u00f3?\nA: S\u00ed, despu\u00e9s de tres sesiones me sent\u00ed mucho mejor.\nB: Cada vez m\u00e1s gente conf\u00eda en la acupuntura.",
   exampleSrc:"A: I went to the acupuncturist for back pain.\nB: And did it help?\nA: Yes, after three sessions I felt much better.\nB: More and more people trust acupuncture.",
   funFact:"Spain's public health system does not cover acupuncture, but it is one of the most popular complementary therapies in the country."},

  {type:"teach", trg:"el hospital general", src:"the general hospital", pos:"noun", gender:"m",
   note:"Hospital (hospital) + general (general).\nA hospital that treats all types of conditions.",
   example:"A: Me derivaron al hospital general para las pruebas.\nB: \u00bfCu\u00e1l?\nA: El Hospital General de Valencia.\nB: Es uno de los m\u00e1s grandes de la comunidad.",
   exampleSrc:"A: I was referred to the general hospital for tests.\nB: Which one?\nA: The General Hospital of Valencia.\nB: It is one of the largest in the region.",
   funFact:"Spain's Hospital General de Valencia, founded in 1512, is one of the oldest still-functioning hospitals in Europe."},

  {type:"teach", trg:"el la\u00fad", src:"the lute", pos:"noun", gender:"m",
   note:"From Arabic al-ud (the wood).\nA stringed instrument from the Middle Ages.",
   example:"A: El la\u00fad es un instrumento medieval.\nB: \u00bfTodav\u00eda se toca?\nA: S\u00ed, en m\u00fasica antigua y folk.\nB: Tiene un sonido muy bonito y delicado.",
   exampleSrc:"A: The lute is a medieval instrument.\nB: Is it still played?\nA: Yes, in early music and folk.\nB: It has a very beautiful and delicate sound.",
   funFact:"The Spanish word 'la\u00fad' comes from Arabic 'al-\u00fbd', reflecting the instrument's journey from the Arab world to medieval Spain."},

  {type:"fb", s:"Tengo los ojos rojos. Creo que tengo {1}.", a:["conjuntivitis"],
   opts:["conjuntivitis","c\u00f3lera","dermis","gl\u00fateos"],
   hint:"An inflammation of the eye membrane that makes eyes red and itchy.",
   sSrc:"My eyes are red. I think I have {1}."},

  {type:"teach", trg:"la bolita", src:"the small ball; pellet; marble", pos:"noun", gender:"f",
   note:"Diminutive of bola (ball) + -ita.\nA small round object.",
   example:"A: Los ni\u00f1os jugaban con bolitas en el patio.\nB: \u00bfCon canicas?\nA: S\u00ed, las bolitas de cristal de colores.\nB: Yo tambi\u00e9n jugaba con ellas de peque\u00f1o.",
   exampleSrc:"A: The children were playing with marbles in the playground.\nB: With glass marbles?\nA: Yes, the little coloured glass balls.\nB: I also played with them as a child.",
   funFact:"In Spain, 'canicas' is more common for marbles, while 'bolitas' is standard in Argentina and other Latin American countries."},

  {type:"mc", q:"\u00bfCu\u00e1l es la diferencia entre 'la c\u00f3lera' y 'el c\u00f3lera'?",
   opts:["No hay diferencia","La c\u00f3lera es la enfermedad, el c\u00f3lera es la ira","La c\u00f3lera es femenina, el c\u00f3lera es el plural","Uno es formal y otro informal"],
   ans:"La c\u00f3lera es la enfermedad, el c\u00f3lera es la ira",
   hint:"Gender changes meaning: the feminine article gives the disease, the masculine gives the emotion."},

  {type:"fb", s:"Los {1} son los m\u00fasculos m\u00e1s grandes del cuerpo humano.", a:["gl\u00fateos"],
   opts:["gl\u00fateos","excrementos","la\u00fades","indicadores"],
   hint:"The muscles in your buttocks. You exercise them with squats and stairs.",
   sSrc:"The {1} are the largest muscles in the human body."},

  {type:"match", pairs:[
    {trg:"dermis", src:"dermis (inner skin)"},
    {trg:"conjuntivitis", src:"conjunctivitis"},
    {trg:"acupuntor", src:"acupuncturist"},
    {trg:"la\u00fad", src:"lute"},
    {trg:"bolita", src:"small ball; marble"}
  ]},

  {type:"mc", q:"\u00bfDe d\u00f3nde viene la palabra 'la\u00fad'?",
   opts:["Del lat\u00edn","Del \u00e1rabe","Del franc\u00e9s","Del italiano"],
   ans:"Del \u00e1rabe",
   hint:"Many Spanish musical terms come from the language of the Moors. Al-ud means 'the wood'."},

  {type:"drag_fill", s:"Fui al {1} para el dolor de espalda. Me derivaron al {2} para m\u00e1s pruebas.",
   blanks:{"1":"acupuntor","2":"hospital general"},
   pool:["acupuntor","hospital general","dermat\u00f3logo","gl\u00fateo","la\u00fad"],
   hint:"A complementary therapy practitioner. A main hospital that treats all conditions."}
]};
export default LESSON_18;
