const LESSON_3 = {
  id:"frv2_b2g8_l3", title:"Corps et santé", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Corps et santé",
     desc:"Medical and health vocabulary for discussing anatomy, illness, and wellbeing at B2 level.",
     goals:["Learn 15 health and body-related words","Discuss medical topics with precision","Understand formal health terminology"]},

    {type:"teach", trg:"l'hépatite", src:"hepatitis", pos:"noun", gender:"f",
     note:"Feminine noun. An inflammation of the liver.\nTypes A, B, and C are most common.",
     example:"A: Il a été diagnostiqué avec une hépatite B.\nB: Il doit suivre un traitement.",
     exampleSrc:"A: He was diagnosed with hepatitis B.\nB: He needs to follow a treatment.",
     funFact:"From Greek 'hepar' meaning liver. France launched a massive hepatitis C screening program in 2019."},

    {type:"teach", trg:"un mammifère", src:"a mammal", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that nurses its young.\nFrom Latin 'mamma' (breast).",
     example:"A: La baleine est un mammifère marin.\nB: Oui, elle allaite ses petits.",
     exampleSrc:"A: The whale is a marine mammal.\nB: Yes, it nurses its young.",
     funFact:"France is home to about 120 mammal species, including wolves that returned to the Alps in the 1990s."},

    {type:"teach", trg:"un neurone", src:"a neuron", pos:"noun", gender:"m",
     note:"Masculine noun. A nerve cell in the brain or nervous system.",
     example:"A: Le cerveau contient des milliards de neurones.\nB: C'est un organe fascinant.",
     exampleSrc:"A: The brain contains billions of neurons.\nB: It's a fascinating organ.",
     funFact:"The French idiom 'faire chauffer ses neurones' means to think hard, literally 'heat up your neurons'."},

    {type:"teach", trg:"la mâchoire", src:"the jaw", pos:"noun", gender:"f",
     note:"Feminine noun. The bony structure of the mouth.\nCircumflex on the 'a' is mandatory.",
     example:"A: Il s'est cassé la mâchoire en tombant.\nB: C'est très douloureux.",
     exampleSrc:"A: He broke his jaw falling.\nB: That's very painful.",
     funFact:"The circumflex marks a lost 's' from Old French 'maschoire'. Related to 'mâcher' (to chew)."},

    {type:"mc",
     q:"Quel organe contient des milliards de neurones ?",
     opts:["Le cerveau","La mâchoire","Le foie","L'estomac"],
     ans:"Le cerveau",
     hint:"Neurons are nerve cells. Which organ is the center of the nervous system?"},

    {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Difficulty digesting food.\nAlso used figuratively for excess.",
     example:"A: J'ai une indigestion terrible.\nB: Tu as trop mangé hier soir.",
     exampleSrc:"A: I have terrible indigestion.\nB: You ate too much last night.",
     funFact:"'Indigestion de chocolat' is a common French childhood complaint, especially after Easter."},

    {type:"teach", trg:"l'inhalation", src:"inhalation", pos:"noun", gender:"f",
     note:"Feminine noun. Breathing in, or a steam treatment.\nAlso a medical procedure.",
     example:"A: Le médecin lui a prescrit des inhalations.\nB: Ça soulage bien les bronches.",
     exampleSrc:"A: The doctor prescribed inhalations for him.\nB: It relieves the bronchial tubes well.",
     funFact:"French grandmothers swear by inhalation with thyme or eucalyptus for colds. A home remedy classic."},

    {type:"teach", trg:"la malformation", src:"the malformation", pos:"noun", gender:"f",
     note:"Feminine noun. An abnormal formation of a body part.\nMedical register.",
     example:"A: La malformation a été détectée à l'échographie.\nB: Une intervention sera nécessaire.",
     exampleSrc:"A: The malformation was detected on the ultrasound.\nB: Surgery will be necessary.",
     funFact:"'Malformation congénitale' means birth defect. 'Mal' + 'formation' is transparent."},

    {type:"fb",
     s:"Il s'est cassé la {1} en tombant de vélo.",
     a:["mâchoire"],
     opts:["mâchoire","hépatite","inhalation","malformation"],
     hint:"The bony structure around your mouth. Think of chewing.",
     sSrc:"He broke his {1} falling off his bike."},

    {type:"teach", trg:"un crustacé", src:"a crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. A shellfish like a crab or lobster.\nPlural: des crustacés.",
     example:"A: Les crustacés sont chers ici.\nB: Normal, on est loin de la mer.",
     exampleSrc:"A: Crustaceans are expensive here.\nB: Of course, we're far from the sea.",
     funFact:"France is the largest consumer of crustaceans in Europe. The 'plateau de fruits de mer' is iconic."},

    {type:"teach", trg:"l'insuffisance", src:"the insufficiency, the inadequacy", pos:"noun", gender:"f",
     note:"Feminine noun. A lack or failure to meet a standard.\nMedical and general use.",
     example:"A: Il souffre d'une insuffisance cardiaque.\nB: Il doit se reposer davantage.",
     exampleSrc:"A: He suffers from heart failure.\nB: He needs to rest more.",
     funFact:"'Insuffisance rénale' (kidney failure) is a major health concern in France's aging population."},

    {type:"teach", trg:"l'incapacité", src:"the incapacity, the inability", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being unable to do something.\nLegal and medical term.",
     example:"A: Son incapacité de travail est temporaire.\nB: Il reprendra dans un mois.",
     exampleSrc:"A: His incapacity to work is temporary.\nB: He'll be back in a month.",
     funFact:"In French labor law, 'incapacité de travail' triggers specific insurance benefits."},

    {type:"mc",
     q:"Quel mot désigne un animal à carapace comme le crabe ou le homard ?",
     opts:["une mâchoire","un crustacé","un mammifère","un neurone"],
     ans:"un crustacé",
     hint:"Think of shellfish. Crabs, lobsters, and shrimp all belong to this category."},

    {type:"teach", trg:"la mutilation", src:"the mutilation", pos:"noun", gender:"f",
     note:"Feminine noun. Severe damage to a body part.\nAlso used figuratively.",
     example:"A: La mutilation des arbres est interdite.\nB: Il faut respecter la nature.",
     exampleSrc:"A: The mutilation of trees is forbidden.\nB: We must respect nature.",
     funFact:"French law specifically protects trees from 'mutilation'. Cities can fine for excessive pruning."},

    {type:"teach", trg:"l'hérédité", src:"heredity", pos:"noun", gender:"f",
     note:"Feminine noun. The passing of traits from parents to children.\nGenetics vocabulary.",
     example:"A: L'hérédité joue un rôle dans cette maladie.\nB: Oui, c'est un facteur important.",
     exampleSrc:"A: Heredity plays a role in this disease.\nB: Yes, it's an important factor.",
     funFact:"Gregor Mendel's work was first translated into French in 1907, launching genetics research in France."},

    {type:"teach", trg:"l'extrémité", src:"the extremity, the tip", pos:"noun", gender:"f",
     note:"Feminine noun. The farthest point or end of something.\nAlso body extremities.",
     example:"A: J'ai froid aux extrémités.\nB: Mets des gants et des chaussettes.",
     exampleSrc:"A: My extremities are cold.\nB: Put on gloves and socks.",
     funFact:"In French medicine, 'les extrémités' specifically means hands and feet, not arms and legs."},

    {type:"fb",
     s:"Il souffre d'une {1} cardiaque depuis deux ans.",
     a:["insuffisance"],
     opts:["insuffisance","incapacité","hérédité","mutilation"],
     hint:"A medical term meaning the heart is not working well enough. Think of 'not sufficient'.",
     sSrc:"He has been suffering from heart {1} for two years."},

    {type:"match", pairs:[
      {trg:"hépatite", src:"hepatitis"},
      {trg:"neurone", src:"neuron"},
      {trg:"crustacé", src:"crustacean"},
      {trg:"hérédité", src:"heredity"},
      {trg:"extrémité", src:"extremity"}
    ]},

    {type:"mc",
     q:"Quel mot signifie 'la transmission des caractères biologiques des parents aux enfants' ?",
     opts:["l'indigestion","l'insuffisance","l'hérédité","la malformation"],
     ans:"l'hérédité",
     hint:"The passing of traits from one generation to the next. Think of genes and DNA."},

    {type:"fb",
     s:"Son {1} de travail est temporaire, il reprendra bientôt.",
     a:["incapacité"],
     opts:["incapacité","insuffisance","inhalation","hérédité"],
     hint:"The state of being unable to do something. A legal and medical term.",
     sSrc:"His work {1} is temporary, he will be back soon."}
  ]
};
export default LESSON_3;
