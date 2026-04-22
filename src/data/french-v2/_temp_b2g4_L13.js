const LESSON_13 = {
  id:"frv2_b2g4_l13", title:"Societe et engagement", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Societe et engagement",
     desc:"Discuss social structures, civic engagement, and the forces that shape communities.",
     goals:["Learn 15 words about society and civic life","Discuss social issues with nuance","Express opinions on community and governance"]},

    {type:"teach", trg:"l'appropriation", src:"appropriation, takeover", pos:"noun", gender:"f",
     note:"Feminine noun. The act of taking something for oneself.\nOften used in cultural debates.",
     example:"A: L'appropriation culturelle est un sujet sensible.\nB: Il faut respecter les traditions des autres.",
     exampleSrc:"A: Cultural appropriation is a sensitive topic.\nB: We must respect the traditions of others.",
     funFact:"In French law, 'appropriation' also means legally acquiring property. Context is everything."},

    {type:"teach", trg:"l'affirmation", src:"assertion, affirmation", pos:"noun", gender:"f",
     note:"Feminine noun. A strong statement or declaration.\nAlso: self-assertion.",
     example:"A: Son affirmation a surpris tout le monde.\nB: Personne ne s'attendait a une telle declaration.",
     exampleSrc:"A: His assertion surprised everyone.\nB: Nobody expected such a statement.",
     funFact:"'Affirmation de soi' means self-assertion. French psychology uses it extensively."},

    {type:"teach", trg:"la concordance", src:"agreement, concordance", pos:"noun", gender:"f",
     note:"Feminine noun. Harmony or agreement between elements.\nIn grammar: sequence of tenses.",
     example:"A: La concordance des temoignages confirme les faits.\nB: Tout le monde raconte la meme chose.",
     exampleSrc:"A: The agreement of the testimonies confirms the facts.\nB: Everyone tells the same story.",
     funFact:"'La concordance des temps' is a grammar rule about matching verb tenses. Students dread it."},

    {type:"teach", trg:"un condamne", src:"a convicted person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone found guilty by a court.\nFeminine: condamnee.",
     example:"A: Le condamne a fait appel de la decision.\nB: Son avocat est confiant.",
     exampleSrc:"A: The convicted person appealed the decision.\nB: His lawyer is confident.",
     funFact:"Victor Hugo's 'Le Dernier Jour d'un Condamne' (1829) argued against the death penalty."},

    {type:"teach", trg:"le harcelement", src:"harassment", pos:"noun", gender:"m",
     note:"Masculine noun. Repeated unwanted behavior.\n'Harcelement moral' = workplace bullying.",
     example:"A: Le harcelement au travail est un delit.\nB: Les victimes doivent porter plainte.",
     exampleSrc:"A: Workplace harassment is a criminal offense.\nB: Victims must file a complaint.",
     funFact:"France was the first country to legally define 'harcelement moral' (workplace bullying) in 2002."},

    {type:"mc",
     q:"Quel terme designe le fait de prendre quelque chose pour soi ?",
     opts:["l'appropriation","l'affirmation","la concordance","la formulation"],
     ans:"l'appropriation",
     hint:"Often discussed in debates about culture. The act of taking or claiming ownership."},

    {type:"teach", trg:"desapprobateur", src:"disapproving", pos:"adj", gender:null,
     note:"Adjective. Showing disapproval. Feminine: desapprobatrice.\nFormal register.",
     example:"A: Il m'a lance un regard desapprobateur.\nB: Il n'etait pas du tout d'accord.",
     exampleSrc:"A: He gave me a disapproving look.\nB: He didn't agree at all.",
     funFact:"Built from des- (un-) + approbation (approval). French loves building words with prefixes."},

    {type:"teach", trg:"adopte", src:"adopted, approved", pos:"adj", gender:null,
     note:"Adjective or past participle. Something officially accepted or a person who was adopted.",
     example:"A: Le projet de loi a ete adopte par le Senat.\nB: Il entrera en vigueur le mois prochain.",
     exampleSrc:"A: The bill was adopted by the Senate.\nB: It will come into effect next month.",
     funFact:"In parliament, 'adopte' means passed. In family law, it means legally taken in as a child."},

    {type:"teach", trg:"la deshumanisation", src:"dehumanization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of stripping away human qualities.",
     example:"A: La deshumanisation de l'ennemi est une tactique de guerre.\nB: C'est moralement inacceptable.",
     exampleSrc:"A: Dehumanization of the enemy is a war tactic.\nB: It is morally unacceptable.",
     funFact:"French philosopher Simone Weil wrote extensively about dehumanization in industrial labor."},

    {type:"fb",
     s:"Le {1} au travail est puni par la loi francaise.",
     a:["harcelement"],
     opts:["harcelement","condamne","affirmation","concordance"],
     hint:"Repeated unwanted behavior in the workplace, made a criminal offense in France in 2002.",
     sSrc:"Workplace {1} is punished by French law."},

    {type:"teach", trg:"un assiste", src:"a welfare recipient", pos:"noun", gender:"m",
     note:"Masculine noun. Someone receiving social aid. Often pejorative.\nFeminine: assistee.",
     example:"A: Il deteste qu'on le traite d'assiste.\nB: Il cherche du travail activement.",
     exampleSrc:"A: He hates being called a welfare case.\nB: He is actively looking for work.",
     funFact:"'Assiste' carries strong negative connotations in France. The debate over 'assistanat' is heated."},

    {type:"teach", trg:"le desclassement", src:"social downgrading", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier in political context.\nReinforced here in social lens.",
     example:"A: La peur du desclassement social touche la classe moyenne.\nB: Les gens ont peur de perdre leur statut.",
     exampleSrc:"A: Fear of social downgrading affects the middle class.\nB: People are afraid of losing their status.",
     funFact:"A central theme in French sociology. Louis Chauvel's work on 'desclassement' shaped public debate."},

    {type:"teach", trg:"la descolarisation", src:"dropping out of school", pos:"noun", gender:"f",
     note:"Feminine noun. The process of leaving the school system.\nA major social concern.",
     example:"A: La descolarisation touche les quartiers defavorises.\nB: Il faut agir pour garder les jeunes a l'ecole.",
     exampleSrc:"A: Dropping out of school affects disadvantaged neighborhoods.\nB: We must act to keep young people in school.",
     funFact:"France has a national plan against 'decrochage scolaire' (school dropout), tracking at-risk students."},

    {type:"mc",
     q:"Comment decrit-on un regard qui montre qu'on n'est pas d'accord ?",
     opts:["genereux","desapprobateur","gracieux","flatteur"],
     ans:"desapprobateur",
     hint:"Built from the prefix des- (un-) plus approbation (approval). A formal word for showing disapproval."},

    {type:"teach", trg:"un garde-chasse", src:"a gamekeeper", pos:"noun", gender:"m",
     note:"Masculine noun. A person who protects game on an estate.\nCompound: garde + chasse.",
     example:"A: Le garde-chasse surveille les braconniers.\nB: Il connait chaque sentier de la foret.",
     exampleSrc:"A: The gamekeeper watches for poachers.\nB: He knows every path in the forest.",
     funFact:"The 'garde-chasse' is a figure in French rural life. They enforce hunting season rules strictly."},

    {type:"teach", trg:"un guet-apens", src:"an ambush, a trap", pos:"noun", gender:"m",
     note:"Masculine noun. A planned surprise attack or trap.\nPlural: guets-apens.",
     example:"A: La police a tendu un guet-apens aux trafiquants.\nB: Ils ont tous ete arretes.",
     exampleSrc:"A: The police set an ambush for the traffickers.\nB: They were all arrested.",
     funFact:"From Old French 'guet apense' (premeditated watch). The silent letters make it tricky to spell."},

    {type:"fb",
     s:"La peur du {1} social touche beaucoup de Francais.",
     a:["desclassement"],
     opts:["desclassement","harcelement","condamne","guet-apens"],
     hint:"The fear of losing your social status, especially among the middle class. A key topic in French sociology.",
     sSrc:"Fear of social {1} affects many French people."},

    {type:"match", pairs:[
      {trg:"appropriation", src:"takeover, appropriation"},
      {trg:"concordance", src:"agreement"},
      {trg:"condamne", src:"convicted person"},
      {trg:"guet-apens", src:"ambush"},
      {trg:"descolarisation", src:"dropping out of school"}
    ]},

    {type:"mc",
     q:"Qui surveille les braconniers dans une propriete ?",
     opts:["un assiste","un administrateur","un garde-chasse","un condamne"],
     ans:"un garde-chasse",
     hint:"A compound word: someone who guards (g...) the hunt (c...) on an estate."}
  ]
};
export default LESSON_13;
