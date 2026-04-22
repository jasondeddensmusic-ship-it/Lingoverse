const LESSON_1 = {
  id:"frv2_b2g8_l1", title:"Altérations et transformations", icon:"\u{1F504}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Altérations et transformations",
     desc:"Explore vocabulary for describing changes, modifications, and deterioration in formal contexts.",
     goals:["Learn 15 words about change and transformation","Distinguish subtle differences in meaning","Use formal register for describing processes"]},

    {type:"teach", trg:"l'altération", src:"the alteration, the deterioration", pos:"noun", gender:"f",
     note:"Feminine noun. A change that damages or distorts.\nStronger than 'modification'.",
     example:"A: L'altération du signal pose problème.\nB: Oui, la qualité se dégrade rapidement.",
     exampleSrc:"A: The alteration of the signal is a problem.\nB: Yes, the quality is degrading rapidly.",
     funFact:"In music, 'altération' means a sharp or flat. Same Latin root as English 'alter'."},

    {type:"teach", trg:"l'accélération", src:"the acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of speeding up.\nUsed in physics and everyday French.",
     example:"A: L'accélération du projet est nécessaire.\nB: On doit respecter les délais.",
     exampleSrc:"A: The acceleration of the project is necessary.\nB: We must meet the deadlines.",
     funFact:"France's TGV can reach 320 km/h. The word is used constantly in transport discussions."},

    {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The act of making something more intense.\nCommon in news and reports.",
     example:"A: L'intensification des contrôles est prévue.\nB: Cela va améliorer la sécurité.",
     exampleSrc:"A: The intensification of checks is planned.\nB: That will improve security.",
     funFact:"French media loves this word for describing escalating situations, from weather to conflicts."},

    {type:"teach", trg:"l'inflexion", src:"the inflection, the shift", pos:"noun", gender:"f",
     note:"Feminine noun. A change in direction or tone.\nUsed in grammar, economics, and politics.",
     example:"A: On observe une inflexion de la courbe.\nB: La tendance commence à s'inverser.",
     exampleSrc:"A: We observe an inflection in the curve.\nB: The trend is starting to reverse.",
     funFact:"In French grammar, 'inflexion' also refers to changes in word form for tense or number."},

    {type:"mc",
     q:"Quel mot décrit un changement qui endommage quelque chose ?",
     opts:["altération","accélération","inflexion","intensification"],
     ans:"altération",
     hint:"Think of a change that damages or distorts, not just speeds up or shifts direction."},

    {type:"teach", trg:"la matérialisation", src:"the materialization", pos:"noun", gender:"f",
     note:"Feminine noun. Something abstract becoming real or concrete.",
     example:"A: C'est la matérialisation de nos efforts.\nB: Enfin, on voit des résultats concrets.",
     exampleSrc:"A: It's the materialization of our efforts.\nB: Finally, we see concrete results.",
     funFact:"Used in both everyday French and paranormal contexts. 'Se matérialiser' means to appear suddenly."},

    {type:"teach", trg:"l'obtention", src:"the obtaining, the achievement", pos:"noun", gender:"f",
     note:"Feminine noun. The act of getting or achieving something.\nFormal register.",
     example:"A: L'obtention du visa a pris trois mois.\nB: C'est long, mais ça en valait la peine.",
     exampleSrc:"A: Obtaining the visa took three months.\nB: It's long, but it was worth it.",
     funFact:"Very common in administrative French. You will see it on every government form."},

    {type:"teach", trg:"la déduction", src:"the deduction", pos:"noun", gender:"f",
     note:"Feminine noun. Logical reasoning, or a financial subtraction.\nTwo distinct meanings.",
     example:"A: Par déduction, c'est lui le responsable.\nB: Ta logique est imparable.",
     exampleSrc:"A: By deduction, he's the one responsible.\nB: Your logic is flawless.",
     funFact:"Descartes championed deductive reasoning. 'Déduction fiscale' means tax deduction."},

    {type:"fb",
     s:"L'{1} du projet est nécessaire pour respecter les délais.",
     a:["accélération"],
     opts:["accélération","altération","déduction","inflexion"],
     hint:"The process of speeding something up. Think of a car gaining speed.",
     sSrc:"The {1} of the project is necessary to meet the deadlines."},

    {type:"teach", trg:"l'omission", src:"the omission", pos:"noun", gender:"f",
     note:"Feminine noun. Something left out, whether by accident or on purpose.",
     example:"A: Cette omission est regrettable.\nB: On aurait dû vérifier avant.",
     exampleSrc:"A: This omission is regrettable.\nB: We should have checked before.",
     funFact:"In French law, 'omission de porter secours' (failure to assist) is a criminal offense."},

    {type:"teach", trg:"l'exaltation", src:"the exaltation, the fervor", pos:"noun", gender:"f",
     note:"Feminine noun. An intense feeling of excitement or enthusiasm.",
     example:"A: Il parlait avec une exaltation incroyable.\nB: Son enthousiasme était contagieux.",
     exampleSrc:"A: He spoke with incredible exaltation.\nB: His enthusiasm was contagious.",
     funFact:"Romantic poets like Victor Hugo were famous for their 'exaltation lyrique'."},

    {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or emphatic phrase.\nAlso a grammar term.",
     example:"A: Son exclamation a surpris tout le monde.\nB: Personne ne s'y attendait.",
     exampleSrc:"A: His exclamation surprised everyone.\nB: Nobody expected it.",
     funFact:"The French exclamation mark was invented in the 14th century. 'Point d'exclamation' is the French name."},

    {type:"mc",
     q:"Quel mot signifie 'le fait d'obtenir quelque chose' ?",
     opts:["déduction","obtention","omission","exaltation"],
     ans:"obtention",
     hint:"The formal noun for the act of getting or achieving. Very common on official documents."},

    {type:"teach", trg:"la justification", src:"the justification", pos:"noun", gender:"f",
     note:"Feminine noun. A reason or explanation defending an action.\nAlso a typographic term.",
     example:"A: Quelle est votre justification ?\nB: Je peux vous fournir tous les documents.",
     exampleSrc:"A: What is your justification?\nB: I can provide you with all the documents.",
     funFact:"In typography, 'justification' means aligning text to both margins, giving a clean block look."},

    {type:"teach", trg:"l'identification", src:"the identification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of recognizing or establishing identity.",
     example:"A: L'identification du suspect a pris du temps.\nB: Les témoins ont finalement confirmé.",
     exampleSrc:"A: The identification of the suspect took time.\nB: The witnesses finally confirmed.",
     funFact:"'Pièce d'identification' is the formal term for an identity document in francophone countries."},

    {type:"teach", trg:"l'interaction", src:"the interaction", pos:"noun", gender:"f",
     note:"Feminine noun. Mutual influence between two things or people.",
     example:"A: L'interaction entre les élèves est encouragée.\nB: Cela favorise l'apprentissage.",
     exampleSrc:"A: Interaction between students is encouraged.\nB: It promotes learning.",
     funFact:"Sociologist Erving Goffman's work on interaction was hugely influential in French academia."},

    {type:"fb",
     s:"Cette {1} est regrettable, on aurait dû vérifier.",
     a:["omission"],
     opts:["omission","exclamation","interaction","justification"],
     hint:"Something was left out, whether by mistake or intentionally.",
     sSrc:"This {1} is regrettable, we should have checked."},

    {type:"match", pairs:[
      {trg:"altération", src:"deterioration"},
      {trg:"obtention", src:"obtaining"},
      {trg:"déduction", src:"deduction"},
      {trg:"exaltation", src:"fervor"},
      {trg:"interaction", src:"interaction"}
    ]},

    {type:"mc",
     q:"Que signifie 'l'inflexion de la courbe' ?",
     opts:["Une disparition","Un arrêt complet","Un changement de direction","Une accélération"],
     ans:"Un changement de direction",
     hint:"The curve is not stopping or speeding up. It is shifting its trajectory."},

    {type:"fb",
     s:"Il parlait avec une {1} incroyable, son enthousiasme était contagieux.",
     a:["exaltation"],
     opts:["exaltation","exclamation","identification","justification"],
     hint:"An intense feeling of excitement or fervor. Think of passionate poets.",
     sSrc:"He spoke with incredible {1}, his enthusiasm was contagious."}
  ]
};
export default LESSON_1;
