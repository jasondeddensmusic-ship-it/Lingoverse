const LESSON_11 = {
  id:"frv2_b2g4_l11", title:"Science et decouverte", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Science et decouverte",
     desc:"Learn vocabulary for discussing scientific research, discoveries, and academic inquiry.",
     goals:["Learn 15 science and research words","Discuss scientific methods in French","Understand academic vocabulary at B2 level"]},

    {type:"teach", trg:"un anthropologue", src:"an anthropologist", pos:"noun", gender:"m",
     note:"Masculine noun. A scientist who studies human societies. Feminine: anthropologue.",
     example:"A: L'anthropologue etudie les tribus amazoniennes.\nB: Son travail de terrain dure six mois.",
     exampleSrc:"A: The anthropologist studies Amazonian tribes.\nB: His fieldwork lasts six months.",
     funFact:"Claude Levi-Strauss, the most famous French anthropologist, revolutionized the field with structuralism."},

    {type:"teach", trg:"un ethnologue", src:"an ethnologist", pos:"noun", gender:"m",
     note:"Masculine noun. Studies cultures through direct observation. Feminine: ethnologue.",
     example:"A: L'ethnologue vit avec la communaute qu'il etudie.\nB: C'est la methode d'immersion totale.",
     exampleSrc:"A: The ethnologist lives with the community he studies.\nB: It's the total immersion method.",
     funFact:"France pioneered ethnology. The Musee de l'Homme in Paris was the world's first ethnology museum."},

    {type:"teach", trg:"un demographe", src:"a demographer", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist who studies population trends. Feminine: demographe.",
     example:"A: Le demographe prevoit un vieillissement de la population.\nB: Les naissances diminuent chaque annee.",
     exampleSrc:"A: The demographer forecasts population aging.\nB: Births decrease every year.",
     funFact:"France has kept meticulous demographic records since the 1600s. The INSEE is a world reference."},

    {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: La criminologie analyse les causes du crime.\nB: C'est un domaine interdisciplinaire.",
     exampleSrc:"A: Criminology analyzes the causes of crime.\nB: It's an interdisciplinary field.",
     funFact:"France was a criminology pioneer. Cesare Lombroso and Alexandre Lacassagne shaped the field."},

    {type:"teach", trg:"un criminologue", src:"a criminologist", pos:"noun", gender:"m",
     note:"Masculine noun. An expert in crime study. Feminine: criminologue.",
     example:"A: La criminologue a presente son rapport au tribunal.\nB: Ses conclusions ont influence le verdict.",
     exampleSrc:"A: The criminologist presented her report to the court.\nB: Her conclusions influenced the verdict.",
     funFact:"French criminologists often appear on TV news as expert commentators on major crime cases."},

    {type:"mc",
     q:"Quel scientifique etudie les societes humaines et leurs cultures ?",
     opts:["un anthropologue","un demographe","un criminologue","un geologue"],
     ans:"un anthropologue",
     hint:"From Greek 'anthropos' (human) and 'logos' (study). Studies humanity as a whole."},

    {type:"teach", trg:"un derive", src:"a derivative, a by-product", pos:"noun", gender:"m",
     note:"Masculine noun. Something that comes from a source. Also adjective: derived.",
     example:"A: Ce produit est un derive du petrole.\nB: Beaucoup de plastiques le sont aussi.",
     exampleSrc:"A: This product is a petroleum derivative.\nB: Many plastics are too.",
     funFact:"In math, 'la derivee' (feminine) is the calculus derivative. Different gender, related concept."},

    {type:"teach", trg:"l'archetyoe", src:"the archetype", pos:"noun", gender:"m",
     note:"Masculine noun. The original model from which copies are made.",
     example:"A: Le heros est un archetype universel.\nB: On le retrouve dans toutes les cultures.",
     exampleSrc:"A: The hero is a universal archetype.\nB: It appears in all cultures.",
     funFact:"Carl Jung made 'archetype' central to psychology. From Greek 'arche' (first) + 'typos' (model)."},

    {type:"teach", trg:"l'idealisation", src:"the idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Representing something as perfect or better than reality.",
     example:"A: L'idealisation du passe est un piege.\nB: Tout n'etait pas mieux avant.",
     exampleSrc:"A: Idealizing the past is a trap.\nB: Not everything was better before.",
     funFact:"Freud wrote extensively about idealization as a defense mechanism. A key concept in psychoanalysis."},

    {type:"fb",
     s:"Le {1} etudie les tendances de la population et les taux de natalite.",
     a:["demographe"],
     opts:["demographe","anthropologue","criminologue","ethnologue"],
     hint:"A specialist in population statistics. From Greek 'demos' (people) + 'graphein' (to write).",
     sSrc:"The {1} studies population trends and birth rates."},

    {type:"teach", trg:"le decimetre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. One tenth of a meter (10 centimeters).",
     example:"A: Mesure cette planche en decimetres.\nB: Elle fait exactement huit decimetres.",
     exampleSrc:"A: Measure this board in decimeters.\nB: It's exactly eight decimeters.",
     funFact:"The metric system was invented during the French Revolution. France standardized global measurement."},

    {type:"teach", trg:"herculeen", src:"Herculean, superhuman", pos:"adj", gender:null,
     note:"Adjective. Requiring enormous strength or effort. Feminine: herculeenne.",
     example:"A: C'est un effort herculeen de finir ce projet.\nB: On y arrivera quand meme.",
     exampleSrc:"A: It's a Herculean effort to finish this project.\nB: We'll manage anyway.",
     funFact:"From Hercules, the Roman demigod of strength. French uses it for any superhuman task."},

    {type:"teach", trg:"fonde", src:"founded, well-grounded", pos:"adj", gender:null,
     note:"Past participle used as adjective. Having a solid basis. Feminine: fondee.",
     example:"A: Votre critique est-elle fondee ?\nB: Oui, j'ai des preuves concretes.",
     exampleSrc:"A: Is your criticism well-founded?\nB: Yes, I have concrete evidence.",
     funFact:"'Mal fonde' means baseless. French law frequently uses 'fonde' to assess whether claims have merit."},

    {type:"mc",
     q:"Quel mot designe le modele original dont d'autres sont copies ?",
     opts:["un criminologue","un archetype","un derive","un decimetre"],
     ans:"un archetype",
     hint:"From Greek 'arche' (first) and 'typos' (model). Jung made it a psychology concept."},

    {type:"teach", trg:"le cinquantieme", src:"the fiftieth", pos:"noun", gender:"m",
     note:"Ordinal number. Can be noun or adjective.",
     example:"A: C'est le cinquantieme anniversaire de l'entreprise.\nB: On organise une grande fete.",
     exampleSrc:"A: It's the company's fiftieth anniversary.\nB: We're organizing a big celebration.",
     funFact:"French ordinals add -ieme to the cardinal number, dropping the final -e: cinquante > cinquantieme."},

    {type:"fb",
     s:"Votre accusation n'est pas {1}, il n'y a aucune preuve.",
     a:["fondee"],
     opts:["fondee","herculeenne","idealisee","derivee"],
     hint:"Well-grounded, having a solid basis. From the verb 'fonder' meaning to establish.",
     sSrc:"Your accusation is not {1}, there is no evidence."},

    {type:"match", pairs:[
      {trg:"anthropologue", src:"anthropologist"},
      {trg:"ethnologue", src:"ethnologist"},
      {trg:"criminologue", src:"criminologist"},
      {trg:"archetype", src:"original model"},
      {trg:"derive", src:"derivative"}
    ]},

    {type:"mc",
     q:"Que signifie 'herculeen' ?",
     opts:["Qui est invisible","Qui est rapide","Qui demande une force surhumaine","Qui est tres facile"],
     ans:"Qui demande une force surhumaine",
     hint:"Named after the Roman demigod Hercules, known for his incredible strength."}
  ]
};
export default LESSON_11;
