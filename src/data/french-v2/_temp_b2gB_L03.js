const LESSON_3 = {
  id:"frv2_b2gB_l3", title:"Politique et citoyennete", icon:"\u{1F3DB}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et citoyennete",
     desc:"Engage with the vocabulary of politics, governance, and democratic life in France.",
     goals:["Learn 10 political and civic terms","Discuss democracy and governance","Express political opinions formally"]},

    {type:"teach", trg:"la democratisation", src:"democratization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming democratic.\nDemocratisation de l'enseignement = making education accessible to all.",
     example:"A: La democratisation de l'acces a internet a change la societe.\nB: Tout le monde peut s'informer maintenant.",
     exampleSrc:"A: The democratization of internet access has changed society.\nB: Everyone can get information now.",
     funFact:"France's Fifth Republic was founded in 1958 by de Gaulle. The country has had five different republican constitutions."},

    {type:"teach", trg:"communiste", src:"communist", pos:"noun", gender:null,
     note:"Noun and adjective. Un/une communiste.\nLe Parti communiste francais (PCF) was a major political force until the 1980s.",
     example:"A: Son grand-pere etait communiste.\nB: A cette epoque, le parti etait tres puissant.",
     exampleSrc:"A: His grandfather was a communist.\nB: At that time, the party was very powerful.",
     funFact:"The PCF regularly won 20%+ of votes in post-war France. French intellectuals like Sartre famously supported it."},

    {type:"teach", trg:"la preconisation", src:"the recommendation", pos:"noun", gender:"f",
     note:"Feminine noun. A formal recommendation, often from authorities.\nMore official than 'recommandation'.",
     example:"A: Les preconisations du rapport sont claires.\nB: Il faut les appliquer sans tarder.",
     exampleSrc:"A: The report's recommendations are clear.\nB: We need to implement them without delay.",
     funFact:"In French administration, preconisation sounds more authoritative than recommandation. It implies expert-backed guidance."},

    {type:"teach", trg:"un precurseur", src:"a precursor, a pioneer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone or something that comes before and influences what follows.\nFeminine: une precurseuse (rare).",
     example:"A: Voltaire etait un precurseur des droits de l'homme.\nB: Ses idees ont influence la Revolution.",
     exampleSrc:"A: Voltaire was a precursor of human rights.\nB: His ideas influenced the Revolution.",
     funFact:"The word literally means forerunner. In chemistry, a precurseur is a substance that transforms into another."},

    {type:"teach", trg:"predominant", src:"predominant, prevailing", pos:"adj", gender:null,
     note:"Adjective. Having the most influence or importance.\nFeminine: predominante.",
     example:"A: L'opinion predominante est en faveur de la reforme.\nB: Les sondages le confirment depuis des mois.",
     exampleSrc:"A: The predominant opinion is in favor of the reform.\nB: Polls have confirmed it for months.",
     funFact:"French political polls (sondages) are restricted near election day. Publishing polls is banned 48 hours before voting."},

    {type:"teach", trg:"la ponderation", src:"moderation, weighting", pos:"noun", gender:"f",
     note:"Feminine noun. Calm self-control, or a mathematical weighting.\nFaire preuve de ponderation = to show restraint.",
     example:"A: Sa ponderation est admirable dans ce debat.\nB: Il ne s'enerve jamais, meme sous pression.",
     exampleSrc:"A: His moderation is admirable in this debate.\nB: He never gets upset, even under pressure.",
     funFact:"In French statistics, ponderation means weighting. A 'moyenne ponderee' is a weighted average."},

    {type:"teach", trg:"un profiteur", src:"a profiteer, an exploiter", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who takes unfair advantage of a situation.\nFeminine: une profiteuse. Always negative.",
     example:"A: Les profiteurs de crise sont severement punis.\nB: Ils augmentent les prix quand les gens sont vulnerables.",
     exampleSrc:"A: Crisis profiteers are severely punished.\nB: They raise prices when people are vulnerable.",
     funFact:"During both World Wars, French law created special provisions to punish profiteurs de guerre (war profiteers)."},

    {type:"teach", trg:"l'affirmation", src:"the assertion, the affirmation", pos:"noun", gender:"f",
     note:"Feminine noun. A confident statement or the act of asserting oneself.\nAffirmation de soi = self-assertion.",
     example:"A: Son affirmation a surpris tout le monde.\nB: Personne ne s'attendait a cette declaration.",
     exampleSrc:"A: His assertion surprised everyone.\nB: Nobody expected this statement.",
     funFact:"L'affirmation de soi is a key concept in French psychology. Assertiveness training is called 'formation a l'affirmation de soi'."},

    {type:"teach", trg:"un preambule", src:"a preamble", pos:"noun", gender:"m",
     note:"Masculine noun. An introduction to a formal document or speech.\nSans preambule = without preamble, getting straight to the point.",
     example:"A: Le preambule de la Constitution affirme les droits fondamentaux.\nB: C'est un texte fondateur de la Republique.",
     exampleSrc:"A: The preamble of the Constitution affirms fundamental rights.\nB: It's a founding text of the Republic.",
     funFact:"The French Constitution's preamble references the 1789 Declaration of Rights. It has legal force, unlike some other countries."},

    {type:"teach", trg:"un predateur", src:"a predator", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that hunts, or a person who exploits others.\nPredateur sexuel is a recognized legal term.",
     example:"A: Les predateurs financiers ciblent les personnes agees.\nB: Il faut renforcer la protection des victimes.",
     exampleSrc:"A: Financial predators target elderly people.\nB: We need to strengthen victim protection.",
     funFact:"In French ecology, predateur has no negative connotation. In social contexts, it always implies exploitation."},

    {type:"mc", q:"Qu'est-ce qu'un 'precurseur'?",
     opts:["Quelqu'un qui ouvre la voie","Quelqu'un qui suit les regles","Un document officiel","Un parti politique"],
     ans:"Quelqu'un qui ouvre la voie",
     hint:"Think of someone who comes before and paves the way for others"},

    {type:"fb", s:"La {1} de l'enseignement superieur a permis l'acces pour tous.",
     a:["democratisation"], opts:["democratisation","ponderation","affirmation","preconisation"],
     hint:"The process of making something accessible to all citizens, not just the elite",
     sSrc:"The {1} of higher education enabled access for all."},

    {type:"mc", q:"Que signifie 'faire preuve de ponderation'?",
     opts:["Montrer de la retenue","Faire un calcul","Prendre du poids","Etre indecis"],
     ans:"Montrer de la retenue",
     hint:"This expression describes calm, measured behavior in difficult situations"},

    {type:"match", pairs:[
      {trg:"un profiteur", src:"a profiteer"},
      {trg:"un predateur", src:"a predator"},
      {trg:"un preambule", src:"a preamble"},
      {trg:"un precurseur", src:"a precursor"}
    ]},

    {type:"fb", s:"Les {1} du rapport doivent etre suivies.",
     a:["preconisations"], opts:["preconisations","democratisations","affirmations","ponderations"],
     hint:"These are formal, expert-backed recommendations from an official source",
     sSrc:"The report's {1} must be followed."},

    {type:"mc", q:"Le PCF signifie:",
     opts:["Parti communiste francais","Parti conservateur francais","Parti centriste federal","Parti citoyen fondateur"],
     ans:"Parti communiste francais",
     hint:"This political party was very influential in post-war France"},

    {type:"fb", s:"L'{1} de soi est essentielle pour reussir en politique.",
     a:["affirmation"], opts:["affirmation","ponderation","democratisation","preconisation"],
     hint:"The noun describes confidently asserting oneself and one's beliefs",
     sSrc:"Self-{1} is essential for succeeding in politics."},

    {type:"mc", q:"'Sans preambule' signifie:",
     opts:["Sans introduction","Sans permission","Sans raison","Sans conclusion"],
     ans:"Sans introduction",
     hint:"A preamble comes at the beginning of something, so without it means..."},

    {type:"fb", s:"L'opinion {1} dans le pays est favorable a cette loi.",
     a:["predominante"], opts:["predominante","communiste","proscrite","profiteuse"],
     hint:"The adjective describes what has the most influence or prevalence",
     sSrc:"The {1} opinion in the country is favorable to this law."},

    {type:"match", pairs:[
      {trg:"la democratisation", src:"democratization"},
      {trg:"la ponderation", src:"moderation"},
      {trg:"l'affirmation", src:"assertion"},
      {trg:"predominant", src:"predominant"}
    ]}
  ]
};
export default LESSON_3;
