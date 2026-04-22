const LESSON_2 = {
  id:"frv2_b2g7_l2", title:"Medias et communication", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medias et communication",
     desc:"Master vocabulary for discussing media, journalism, and the flow of information in modern society.",
     goals:["Learn 15 media and communication words","Discuss news and information sources","Analyze media influence"]},

    {type:"teach", trg:"la mediation", src:"mediation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of resolving disputes through a neutral third party.",
     example:"A: La mediation a permis d'eviter un proces.\nB: C'est toujours preferable.",
     exampleSrc:"A: Mediation helped avoid a trial.\nB: That's always preferable.",
     funFact:"In France, 'le Mediateur de la Republique' (now Defenseur des droits) handles disputes between citizens and the state."},

    {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
     note:"Feminine noun. The act of recognizing or establishing identity.",
     example:"A: L'identification du suspect a pris deux jours.\nB: Les temoins n'etaient pas surs.",
     exampleSrc:"A: The identification of the suspect took two days.\nB: The witnesses weren't certain.",
     funFact:"In France, carrying an ID card is not legally required but practically essential. 'Piece d'identite' is the general term."},

    {type:"teach", trg:"l'exclamation", src:"an exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or outcry expressing emotion.",
     example:"A: Son exclamation de surprise a fait rire tout le monde.\nB: Il ne s'y attendait vraiment pas.",
     exampleSrc:"A: His exclamation of surprise made everyone laugh.\nB: He really didn't expect it.",
     funFact:"The French exclamation mark is preceded by a space, unlike English. This is true for all double punctuation in French."},

    {type:"teach", trg:"l'indicateur", src:"an indicator, an informant", pos:"noun", gender:"m",
     note:"Masculine noun. A sign that shows something, or a police informant.",
     example:"A: Cet indicateur economique est encourageant.\nB: Oui, le chomage baisse enfin.",
     exampleSrc:"A: This economic indicator is encouraging.\nB: Yes, unemployment is finally dropping.",
     funFact:"In crime fiction, 'un indicateur' or 'un indic' is an informant. In economics, it measures trends."},

    {type:"mc",
     q:"Quel processus permet de resoudre un conflit sans aller au tribunal ?",
     opts:["la mediation","l'identification","l'exclamation","l'indicateur"],
     ans:"la mediation",
     hint:"A neutral third party helps both sides reach an agreement."},

    {type:"teach", trg:"l'intensification", src:"intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming more intense or extreme.",
     example:"A: L'intensification du conflit inquiete la communaute.\nB: Il faut agir rapidement.",
     exampleSrc:"A: The intensification of the conflict worries the community.\nB: We must act quickly.",
     funFact:"Climate scientists use this word constantly: 'l'intensification des evenements meteorologiques extremes'."},

    {type:"teach", trg:"l'interaction", src:"interaction", pos:"noun", gender:"f",
     note:"Feminine noun. Reciprocal action or influence between people or things.",
     example:"A: L'interaction entre eleves favorise l'apprentissage.\nB: Le travail en groupe est essentiel.",
     exampleSrc:"A: Interaction between students promotes learning.\nB: Group work is essential.",
     funFact:"In French linguistics, 'l'interaction verbale' is a major research field studying how people construct meaning together."},

    {type:"teach", trg:"la justification", src:"justification", pos:"noun", gender:"f",
     note:"Feminine noun. A reason or explanation for something.",
     example:"A: Quelle est votre justification pour ce retard ?\nB: Les transports etaient perturbes.",
     exampleSrc:"A: What is your justification for this delay?\nB: Transport was disrupted.",
     funFact:"In typography, 'justification' means text alignment. In French printing, 'justifie a droite' means right-aligned."},

    {type:"fb",
     s:"L'{1} des reseaux sociaux a change notre facon de communiquer.",
     a:["interaction"],
     opts:["interaction","identification","exclamation","intensification"],
     hint:"The reciprocal exchange between people, especially online.",
     sSrc:"The {1} of social networks has changed how we communicate."},

    {type:"teach", trg:"la monotonie", src:"monotony", pos:"noun", gender:"f",
     note:"Feminine noun. Tedious lack of variety.",
     example:"A: La monotonie du quotidien me pese.\nB: Il faut casser la routine.",
     exampleSrc:"A: The monotony of daily life weighs on me.\nB: You need to break the routine.",
     funFact:"From Greek 'monotonia' meaning sameness of tone. Musicians use it for a flat, unvarying performance."},

    {type:"teach", trg:"momentane", src:"momentary, temporary", pos:"adj", gender:null,
     note:"Adjective. Lasting only a short time.\nFeminine: momentanee.",
     example:"A: Ce n'est qu'une panne momentanee.\nB: Tant mieux, j'ai besoin d'internet.",
     exampleSrc:"A: It's just a temporary outage.\nB: Good, I need the internet.",
     funFact:"Unlike 'temporaire' which implies a known duration, 'momentane' suggests something very brief and passing."},

    {type:"teach", trg:"la mediocrite", src:"mediocrity", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being average or below average.",
     example:"A: Je refuse la mediocrite.\nB: L'excellence demande du travail.",
     exampleSrc:"A: I refuse mediocrity.\nB: Excellence requires work.",
     funFact:"From Latin 'mediocritas' meaning the middle state. For Romans, it was positive. In French, it became purely negative."},

    {type:"mc",
     q:"Comment decrit-on quelque chose qui ne dure qu'un instant ?",
     opts:["multinational","momentane","mercantile","mesquin"],
     ans:"momentane",
     hint:"Think of the word 'moment' plus an adjective ending."},

    {type:"teach", trg:"l'injure", src:"an insult, abuse", pos:"noun", gender:"f",
     note:"Feminine noun. An offensive remark. Legally distinct from 'diffamation'.",
     example:"A: Il a profere des injures en pleine rue.\nB: C'est punissable par la loi.",
     exampleSrc:"A: He uttered insults in the middle of the street.\nB: That's punishable by law.",
     funFact:"In French law, 'injure' is a specific offense: an offensive expression not based on fact. 'Diffamation' alleges facts."},

    {type:"teach", trg:"la maladresse", src:"clumsiness, blunder", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of skill or a tactless mistake.",
     example:"A: Sa maladresse diplomatique a cause un incident.\nB: Il aurait du mieux choisir ses mots.",
     exampleSrc:"A: His diplomatic blunder caused an incident.\nB: He should have chosen his words better.",
     funFact:"Built from 'mal' (bad) + 'adresse' (skill). A 'maladroit' person is literally someone with bad aim or dexterity."},

    {type:"fb",
     s:"Cette {1} verbale pourrait mener a un proces.",
     a:["injure"],
     opts:["injure","interaction","intensification","identification"],
     hint:"An offensive remark that is legally punishable in France.",
     sSrc:"This verbal {1} could lead to a lawsuit."},

    {type:"match", pairs:[
      {trg:"mediation", src:"mediation"},
      {trg:"monotonie", src:"monotony"},
      {trg:"mediocrite", src:"mediocrity"},
      {trg:"maladresse", src:"blunder"},
      {trg:"injure", src:"insult"}
    ]},

    {type:"mc",
     q:"Quel mot designe le manque de variete dans la vie quotidienne ?",
     opts:["la mediation","la maladresse","la monotonie","la mediocrite"],
     ans:"la monotonie",
     hint:"Think of 'mono' (one) plus 'tone' meaning the same unchanging note."},

    {type:"fb",
     s:"La {1} de cette candidate ne convainc personne.",
     a:["justification"],
     opts:["justification","mediation","monotonie","exclamation"],
     hint:"The reason or explanation she gives to defend her position.",
     sSrc:"This candidate's {1} convinces no one."}
  ]
};
export default LESSON_2;
