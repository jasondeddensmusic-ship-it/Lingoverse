// L03: Health & Body - Medical terms, body parts, and well-being
const LESSON_3 = {
  id:"esv2_b1gap_l3", title:"Salud y cuerpo", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Salud y cuerpo",
     desc:"Talk about health and the body. Learn medical vocabulary, body parts, and how to describe symptoms.",
     goals:["Learn 20 health and body words","Describe symptoms and conditions","Understand medical contexts"]},

    {type:"teach", trg:"el abdomen", src:"the abdomen", pos:"noun", gender:"m",
     note:"Masculine noun. Medical term for the belly area.\nMore formal than 'barriga'.",
     example:"A: Me duele el abdomen.\nB: \u00bfDesde cu\u00e1ndo? \u00bfHas comido algo malo?",
     exampleSrc:"A: My abdomen hurts.\nB: Since when? Have you eaten something bad?",
     funFact:"Directly from Latin 'abdomen'. In everyday Spanish, people say 'barriga' or 'tripa', but doctors use 'abdomen'."},

    {type:"teach", trg:"la alergia", src:"the allergy", pos:"noun", gender:"f",
     note:"Feminine noun. Tener alergia a = to be allergic to.\nVery common in spring.",
     example:"A: Tengo alergia al polen.\nB: Yo tambi\u00e9n. La primavera es dif\u00edcil.",
     exampleSrc:"A: I am allergic to pollen.\nB: Me too. Spring is difficult.",
     funFact:"Coined in 1906 by Austrian doctor Clemens von Pirquet, from Greek 'allos' (other) + 'ergon' (work). A 'different reaction'."},

    {type:"teach", trg:"al\u00e9rgico", src:"allergic", pos:"adj", gender:null,
     note:"Adjective. Agrees in gender: al\u00e9rgico/al\u00e9rgica.\nSer al\u00e9rgico a = to be allergic to.",
     example:"A: \u00bfEres al\u00e9rgico a algo?\nB: S\u00ed, soy al\u00e9rgico a los frutos secos.",
     exampleSrc:"A: Are you allergic to anything?\nB: Yes, I am allergic to nuts.",
     funFact:"The adjective form follows the standard '-ico' pattern from Greek. Spain has one of the highest pollen allergy rates in Europe."},

    {type:"teach", trg:"el antibi\u00f3tico", src:"the antibiotic", pos:"noun", gender:"m",
     note:"Masculine noun. Requires a prescription in Spain.\nNever self-medicate.",
     example:"A: El m\u00e9dico me ha recetado un antibi\u00f3tico.\nB: T\u00f3matelo con comida.",
     exampleSrc:"A: The doctor has prescribed me an antibiotic.\nB: Take it with food.",
     funFact:"From Greek 'anti' (against) + 'bios' (life). Spanish pharmacies strictly require prescriptions for antibiotics since 2010."},

    {type:"teach", trg:"la arteria", src:"the artery", pos:"noun", gender:"f",
     note:"Feminine noun. Blood vessel carrying blood from the heart.\nAlso used figuratively.",
     example:"A: La arteria principal del coraz\u00f3n se llama aorta.\nB: \u00bfY las peque\u00f1as?",
     exampleSrc:"A: The main artery of the heart is called the aorta.\nB: And the small ones?",
     funFact:"From Greek 'arteria' (windpipe), because ancient Greeks thought arteries carried air. Also used for main roads: 'arteria principal'."},

    {type:"mc",
     q:"\u00bfQu\u00e9 necesitas si tienes una infecci\u00f3n bacteriana?",
     opts:["un antibi\u00f3tico","una alergia","una arteria","un abdomen"],
     ans:"un antibi\u00f3tico",
     hint:"A medicine that fights bacterial infections, prescribed by a doctor."},

    {type:"teach", trg:"la ampolla", src:"the blister", pos:"noun", gender:"f",
     note:"Feminine noun. Also means a glass vial for medicine.\nFrom friction or burns.",
     example:"A: Tengo una ampolla en el pie.\nB: Ponte una tirita y zapatos c\u00f3modos.",
     exampleSrc:"A: I have a blister on my foot.\nB: Put on a bandage and comfortable shoes.",
     funFact:"From Latin 'ampulla' (small bottle). The double meaning (blister and vial) exists because both are small, fluid-filled containers."},

    {type:"teach", trg:"el antebrazo", src:"the forearm", pos:"noun", gender:"m",
     note:"Masculine noun. Ante (before) + brazo (arm).\nThe part between elbow and wrist.",
     example:"A: Me he quemado el antebrazo con el horno.\nB: Pon agua fr\u00eda enseguida.",
     exampleSrc:"A: I burned my forearm on the oven.\nB: Put cold water on it right away.",
     funFact:"A compound word: 'ante' (before, in front of) + 'brazo' (arm). The forearm is 'before' the upper arm when you reach out."},

    {type:"teach", trg:"la ansiedad", src:"the anxiety", pos:"noun", gender:"f",
     note:"Feminine noun. A common mental health term.\nTener ansiedad = to have anxiety.",
     example:"A: Tengo mucha ansiedad por el examen.\nB: Respira hondo. Va a ir bien.",
     exampleSrc:"A: I have a lot of anxiety about the exam.\nB: Breathe deeply. It will go well.",
     funFact:"From Latin 'anxietas' (distress). Mental health vocabulary has become much more common in Spanish media since the 2020s."},

    {type:"teach", trg:"ansioso", src:"anxious", pos:"adj", gender:null,
     note:"Adjective. Ansioso/ansiosa.\nCan also mean eager: ansioso por = eager to.",
     example:"A: Est\u00e1s muy ansioso hoy.\nB: Es que tengo una entrevista importante.",
     exampleSrc:"A: You are very anxious today.\nB: It is because I have an important interview.",
     funFact:"From Latin 'anxiosus'. Note the double meaning: 'Estoy ansioso por verte' means 'I am eager to see you', not worried."},

    {type:"fb",
     s:"Tengo {1} al polen y estornudo mucho en primavera.",
     a:["alergia"],
     opts:["alergia","ampolla","ansiedad","arteria"],
     hint:"A medical condition where your body reacts to harmless substances like pollen.",
     sSrc:"I have an {1} to pollen and I sneeze a lot in spring."},

    {type:"teach", trg:"la barriga", src:"the belly, tummy", pos:"noun", gender:"f",
     note:"Feminine noun. Informal word for stomach area.\nMe duele la barriga = stomachache.",
     example:"A: Me duele la barriga.\nB: \u00bfHas comido demasiado?",
     exampleSrc:"A: My belly hurts.\nB: Have you eaten too much?",
     funFact:"Origin uncertain, possibly pre-Roman Iberian. Much more common in everyday speech than the formal 'abdomen' or 'est\u00f3mago'."},

    {type:"teach", trg:"la bronquitis", src:"the bronchitis", pos:"noun", gender:"f",
     note:"Feminine noun. Inflammation of the bronchial tubes.\nCommon in winter.",
     example:"A: El m\u00e9dico dice que tengo bronquitis.\nB: Descansa y bebe mucho l\u00edquido.",
     exampleSrc:"A: The doctor says I have bronchitis.\nB: Rest and drink lots of fluids.",
     funFact:"From Greek 'bronchos' (windpipe) + '-itis' (inflammation). The '-itis' suffix always means inflammation in medical terms."},

    {type:"teach", trg:"el botiqu\u00edn", src:"the first aid kit", pos:"noun", gender:"m",
     note:"Masculine noun. Also a medicine cabinet.\nEssential for travel and home.",
     example:"A: \u00bfD\u00f3nde est\u00e1 el botiqu\u00edn?\nB: En el ba\u00f1o, encima del espejo.",
     exampleSrc:"A: Where is the first aid kit?\nB: In the bathroom, above the mirror.",
     funFact:"From 'botica' (pharmacy), which comes from Greek 'apotheke' (storehouse). A botiqu\u00edn is a mini pharmacy."},

    {type:"teach", trg:"el aliento", src:"the breath", pos:"noun", gender:"m",
     note:"Masculine noun. Mal aliento = bad breath.\nAlso means encouragement.",
     example:"A: Necesito tomar aliento despu\u00e9s de correr.\nB: Si\u00e9ntate y respira.",
     exampleSrc:"A: I need to catch my breath after running.\nB: Sit down and breathe.",
     funFact:"From Latin 'halitus' (breath). The figurative meaning 'dar aliento' (to encourage) connects breath with life force and motivation."},

    {type:"mc",
     q:"\u00bfD\u00f3nde guardas las tiritas y las medicinas?",
     opts:["en el botiqu\u00edn","en la barriga","en el antebrazo","en la arteria"],
     ans:"en el botiqu\u00edn",
     hint:"A small kit or cabinet specifically designed for storing medical supplies at home."},

    {type:"teach", trg:"la apendicitis", src:"the appendicitis", pos:"noun", gender:"f",
     note:"Feminine noun. Inflammation of the appendix.\nRequires urgent surgery.",
     example:"A: Me llevaron al hospital con apendicitis.\nB: \u00bfTe operaron enseguida?",
     exampleSrc:"A: They took me to the hospital with appendicitis.\nB: Did they operate right away?",
     funFact:"From Latin 'appendix' (something attached) + '-itis'. The appendix was once called 'useless', but scientists now think it helps gut bacteria."},

    {type:"teach", trg:"el ant\u00eddoto", src:"the antidote", pos:"noun", gender:"m",
     note:"Masculine noun. A remedy against poison or venom.\nAlso used figuratively.",
     example:"A: \u00bfExiste un ant\u00eddoto para esa serpiente?\nB: S\u00ed, en el hospital lo tienen.",
     exampleSrc:"A: Is there an antidote for that snake?\nB: Yes, the hospital has it.",
     funFact:"From Greek 'antidoton' (given against). In figurative use: 'El humor es el mejor ant\u00eddoto contra el estr\u00e9s'."},

    {type:"teach", trg:"la arruga", src:"the wrinkle", pos:"noun", gender:"f",
     note:"Feminine noun. On skin or clothing.\nArrugar = to wrinkle, crumple.",
     example:"A: Mi abuela dice que sus arrugas son su historia.\nB: Qu\u00e9 bonita forma de verlo.",
     exampleSrc:"A: My grandmother says her wrinkles are her history.\nB: What a beautiful way to see it.",
     funFact:"Possibly from Latin 'ruga' (fold) with an intensifying prefix. Wrinkle creams are 'cremas antiarrugas' in Spanish."},

    {type:"fb",
     s:"Necesito tomar {1} despu\u00e9s de subir las escaleras.",
     a:["aliento"],
     opts:["aliento","ant\u00eddoto","antibi\u00f3tico","antebrazo"],
     hint:"What you need to catch after physical exertion. Related to breathing.",
     sSrc:"I need to catch my {1} after climbing the stairs."},

    {type:"match", pairs:[
      {trg:"alergia", src:"allergy"},
      {trg:"ampolla", src:"blister"},
      {trg:"botiqu\u00edn", src:"first aid kit"},
      {trg:"barriga", src:"belly"},
      {trg:"arruga", src:"wrinkle"}
    ]}
  ]
};
export default LESSON_3;
