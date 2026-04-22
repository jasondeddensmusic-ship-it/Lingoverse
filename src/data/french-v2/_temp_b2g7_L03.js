const LESSON_3 = {
  id:"frv2_b2g7_l3", title:"Environnement et nature", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environnement et nature",
     desc:"Build vocabulary for discussing environmental issues, natural phenomena, and ecological challenges.",
     goals:["Learn 15 environment and nature words","Discuss climate and ecology","Express concern about environmental issues"]},

    {type:"teach", trg:"la meteorologie", src:"meteorology", pos:"noun", gender:"f",
     note:"Feminine noun. The science of weather and atmospheric conditions.",
     example:"A: La meteorologie prevoit de la pluie demain.\nB: Prenons nos parapluies alors.",
     exampleSrc:"A: The weather forecast predicts rain tomorrow.\nB: Let's take our umbrellas then.",
     funFact:"Meteo France is the national weather service. The French say 'la meteo' for short, like saying 'the weather report'."},

    {type:"teach", trg:"un mammifere", src:"a mammal", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that feeds its young with milk.",
     example:"A: La baleine est le plus grand mammifere.\nB: Et pourtant, elle vit dans l'ocean.",
     exampleSrc:"A: The whale is the largest mammal.\nB: And yet, it lives in the ocean.",
     funFact:"From Latin 'mamma' meaning breast. France has about 120 native mammal species, from bats to bears."},

    {type:"teach", trg:"mortifere", src:"deadly, lethal", pos:"adj", gender:null,
     note:"Adjective. Causing or capable of causing death. Formal register.",
     example:"A: Cette substance est mortifere a forte dose.\nB: Il faut la manipuler avec precaution.",
     exampleSrc:"A: This substance is deadly in high doses.\nB: It must be handled with caution.",
     funFact:"From Latin 'mortifer': 'mors' (death) + 'ferre' (to carry). More literary than 'mortel' or 'letal'."},

    {type:"teach", trg:"le gravier", src:"gravel", pos:"noun", gender:"m",
     note:"Masculine noun. Small stones used for paths and roads.",
     example:"A: Le chemin de gravier mene au jardin.\nB: Attention, ca glisse quand il pleut.",
     exampleSrc:"A: The gravel path leads to the garden.\nB: Be careful, it's slippery when it rains.",
     funFact:"French gardens often use 'gravier' for paths between flower beds. The crunch underfoot is considered part of the charm."},

    {type:"mc",
     q:"Quel mot designe un animal qui allaite ses petits ?",
     opts:["un mammifere","un gravier","une meteorologie","un monticule"],
     ans:"un mammifere",
     hint:"Think of the Latin root 'mamma' meaning breast, related to nursing."},

    {type:"teach", trg:"un monticule", src:"a small hill, a mound", pos:"noun", gender:"m",
     note:"Masculine noun. A small natural or artificial hill.",
     example:"A: Les enfants jouent sur le monticule de terre.\nB: Ils adorent grimper et sauter.",
     exampleSrc:"A: The children play on the mound of earth.\nB: They love climbing and jumping.",
     funFact:"Diminutive of 'mont' (mountain). Montmartre in Paris was originally a 'monticule' before becoming a famous hill."},

    {type:"teach", trg:"le grillage", src:"wire mesh, fencing", pos:"noun", gender:"m",
     note:"Masculine noun. Metal wire mesh used as fencing.",
     example:"A: Le grillage protege le potager des lapins.\nB: Sans lui, ils mangeraient tout.",
     exampleSrc:"A: The wire fencing protects the vegetable garden from rabbits.\nB: Without it, they'd eat everything.",
     funFact:"From 'grille' (grill/grid). French allotment gardens ('jardins ouvriers') are typically enclosed by 'grillage'."},

    {type:"teach", trg:"multicolore", src:"multicolored", pos:"adj", gender:null,
     note:"Adjective. Having many colors. Same form for masculine and feminine.",
     example:"A: Le marche est plein de tissus multicolores.\nB: C'est un vrai festival de couleurs.",
     exampleSrc:"A: The market is full of multicolored fabrics.\nB: It's a real festival of colors.",
     funFact:"French loves compound adjectives with 'multi-': multiculturel, multilingue, multinational, multiforme."},

    {type:"fb",
     s:"Cette pollution industrielle est {1} pour la faune locale.",
     a:["mortifere"],
     opts:["mortifere","multicolore","momentane","mercantile"],
     hint:"Carrying death. A formal word for something that kills.",
     sSrc:"This industrial pollution is {1} for local wildlife."},

    {type:"teach", trg:"la globalite", src:"totality, entirety", pos:"noun", gender:"f",
     note:"Feminine noun. The whole, the complete picture.",
     example:"A: Il faut voir le probleme dans sa globalite.\nB: Sinon, on rate l'essentiel.",
     exampleSrc:"A: We need to see the problem in its entirety.\nB: Otherwise, we miss the essential point.",
     funFact:"Not to be confused with 'globalisation'. 'Globalite' means wholeness or totality, not the global economy."},

    {type:"teach", trg:"la longueur", src:"length", pos:"noun", gender:"f",
     note:"Feminine noun. The measurement of how long something is.",
     example:"A: La longueur de ce fleuve depasse mille kilometres.\nB: C'est impressionnant.",
     exampleSrc:"A: The length of this river exceeds a thousand kilometers.\nB: That's impressive.",
     funFact:"The phrase 'trainer en longueur' means to drag on. French uses 'longueur' for boring parts of a book or film too."},

    {type:"teach", trg:"moisi", src:"moldy, musty", pos:"adj", gender:null,
     note:"Adjective. Covered with mold. Also noun: le moisi.\nFeminine: moisie.",
     example:"A: Ce pain est moisi, jette-le.\nB: Dommage, je l'ai achete hier.",
     exampleSrc:"A: This bread is moldy, throw it away.\nB: Too bad, I bought it yesterday.",
     funFact:"The verb 'moisir' also means to waste away doing nothing: 'moisir en prison' (to rot in prison)."},

    {type:"mc",
     q:"Quel mot decrit du pain couvert de champignons verts ?",
     opts:["momentane","moisi","mortifere","multicolore"],
     ans:"moisi",
     hint:"Think of what happens to bread left too long in a damp place."},

    {type:"teach", trg:"la mutilation", src:"mutilation", pos:"noun", gender:"f",
     note:"Feminine noun. Severe damage or destruction to a body or object.",
     example:"A: La mutilation des arbres centenaires est un scandale.\nB: Ces arbres sont irreplacables.",
     exampleSrc:"A: The mutilation of century-old trees is a scandal.\nB: These trees are irreplaceable.",
     funFact:"French environmental activists use 'mutilation' to describe tree-cutting, giving it strong emotional weight."},

    {type:"teach", trg:"minutieux", src:"meticulous, thorough", pos:"adj", gender:null,
     note:"Adjective. Extremely careful and precise.\nFeminine: minutieuse.",
     example:"A: Son travail est toujours minutieux.\nB: Oui, elle ne laisse rien au hasard.",
     exampleSrc:"A: Her work is always meticulous.\nB: Yes, she leaves nothing to chance.",
     funFact:"From 'minute' meaning a tiny detail (not time). A 'minutie' is a small precise detail."},

    {type:"fb",
     s:"L'analyse {1} des echantillons a pris trois semaines.",
     a:["minutieuse"],
     opts:["minutieuse","multicolore","mortifere","moisie"],
     hint:"Done with extreme care and attention to every small detail.",
     sSrc:"The {1} analysis of the samples took three weeks."},

    {type:"match", pairs:[
      {trg:"mammifere", src:"mammal"},
      {trg:"monticule", src:"small hill"},
      {trg:"gravier", src:"gravel"},
      {trg:"longueur", src:"length"},
      {trg:"minutieux", src:"meticulous"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'ensemble complet d'un probleme ou d'une situation ?",
     opts:["la mutilation","la meteorologie","la globalite","la longueur"],
     ans:"la globalite",
     hint:"Seeing the whole picture, not just parts of it."},

    {type:"fb",
     s:"La {1} annonce un week-end ensoleille sur toute la France.",
     a:["meteorologie"],
     opts:["meteorologie","mutilation","globalite","longueur"],
     hint:"The science of weather forecasting, often shortened to 'la meteo'.",
     sSrc:"The {1} forecasts a sunny weekend across all of France."}
  ]
};
export default LESSON_3;
