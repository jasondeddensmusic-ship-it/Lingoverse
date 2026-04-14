// French B2 Gap Batch 9 — Lesson 14: Politique et Débat
// Politics and debate vocabulary

const LESSON_14 = {id:"frv2_b2g9_l14", title:"Politique et Débat", icon:"🗳️", xp:15, board:true, steps:[
  {type:"intro", title:"Politique et Débat",
   desc:"Master the vocabulary of political discourse, debate, and argumentation. Essential for B2 discussions about governance and ideology.",
   goals:["Learn 20 political discourse words","Argue and debate effectively","Analyze political positions"]},

  {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
   note:"From diaboliser (to demonize).\nMaking an opponent appear evil rather than wrong.",
   example:"A: La diabolisation de l'adversaire empoisonne le débat.\nB: On ne discute plus des idées.",
   exampleSrc:"A: Demonizing the opponent poisons the debate.\nB: We no longer discuss ideas.",
   funFact:"French political analysts use diabolisation constantly. It is a key concept in French media."},

  {type:"teach", trg:"l'intégrisme", src:"fundamentalism", pos:"noun", gender:"m",
   note:"From intègre (upright) + -isme.\nRigid adherence to traditional beliefs.",
   example:"A: L'intégrisme est une menace pour la laïcité.\nB: La tolérance doit être défendue.",
   exampleSrc:"A: Fundamentalism is a threat to secularism.\nB: Tolerance must be defended.",
   funFact:"Originally a Catholic term. Now used for any form of rigid fundamentalism."},

  {type:"teach", trg:"le pamphlet", src:"polemical text, lampoon", pos:"noun", gender:"m",
   note:"A sharp, critical written attack.\nStronger than the English meaning of pamphlet.",
   example:"A: Ce pamphlet dénonce la corruption du pouvoir.\nB: L'auteur risque des poursuites.",
   exampleSrc:"A: This pamphlet denounces the corruption of power.\nB: The author risks prosecution.",
   funFact:"Voltaire, Zola, and Hugo were all famous French pamphlétaires."},

  {type:"teach", trg:"paternaliste", src:"paternalistic", pos:"adj", gender:null,
   note:"Treating people as children.\nA governance style that controls 'for their own good'.",
   example:"A: Cette politique paternaliste infantilise les citoyens.\nB: Les gens peuvent décider par eux-mêmes.",
   exampleSrc:"A: This paternalistic policy infantilizes citizens.\nB: People can decide for themselves.",
   funFact:"The French State has historically been called 'l'Etat-papa' (daddy State) by critics."},

  {type:"teach", trg:"le modéré", src:"moderate (person)", pos:"noun", gender:"m",
   note:"A person with centrist political views.\nOpposite: un extrémiste.",
   example:"A: Les modérés peinent à se faire entendre.\nB: Les voix extrêmes dominent les médias.",
   exampleSrc:"A: Moderates struggle to be heard.\nB: Extreme voices dominate the media.",
   funFact:"In the French Revolution, the modérés (Girondins) lost to the radical Montagnards."},

  {type:"teach", trg:"le communiste", src:"communist", pos:"noun", gender:"m",
   note:"Adherent of communism. Also adjective.\nFeminine: la communiste.",
   example:"A: Les communistes ont joué un rôle clé dans la Résistance.\nB: Leur sacrifice est reconnu par tous.",
   exampleSrc:"A: Communists played a key role in the Resistance.\nB: Their sacrifice is recognized by all.",
   funFact:"The PCF got 28% of votes in 1946. Today it gets around 2%. The decline is dramatic."},

  {type:"teach", trg:"le particularisme", src:"particularism", pos:"noun", gender:"m",
   note:"Defending local or group interests over universal ones.\nFrom particulier + -isme.",
   example:"A: Le particularisme corse reste très fort.\nB: L'île revendique sa propre identité culturelle.",
   exampleSrc:"A: Corsican particularism remains very strong.\nB: The island claims its own cultural identity.",
   funFact:"France's Jacobin centralism has always clashed with regional particularismes."},

  {type:"teach", trg:"l'affirmation", src:"assertion, claim", pos:"noun", gender:"f",
   note:"From affirmer (to assert).\nA strong statement or declaration.",
   example:"A: Cette affirmation est sans fondement.\nB: Il faudrait des preuves pour la soutenir.",
   exampleSrc:"A: This assertion is unfounded.\nB: Evidence would be needed to support it.",
   funFact:"Affirmation de soi (self-assertion) is a key concept in French psychology and self-help."},

  {type:"teach", trg:"la démocratisation", src:"democratization", pos:"noun", gender:"f",
   note:"Making something accessible to all.\nFrom démocratiser + -ation.",
   example:"A: La démocratisation de l'internet a changé le monde.\nB: L'accès à l'information est universel.",
   exampleSrc:"A: The democratization of the internet changed the world.\nB: Access to information is universal.",
   funFact:"French uses démocratisation broadly: of culture, education, technology, not just governance."},

  {type:"mc", q:"La diabolisation consiste à:", opts:["Analyser les arguments adverses","Présenter l'adversaire comme diabolique","Proposer un compromis","Respecter l'opinion contraire"], ans:"Présenter l'adversaire comme diabolique",
   hint:"From diable (devil). Making your opponent appear evil rather than simply wrong."},

  {type:"teach", trg:"la laïcité", src:"secularism", pos:"noun", gender:"f",
   note:"The French principle of separation of church and state.\nFrom laïc (lay, secular).",
   example:"A: La laïcité est un pilier de la République.\nB: L'État ne favorise aucune religion.",
   exampleSrc:"A: Secularism is a pillar of the Republic.\nB: The State favors no religion.",
   funFact:"French laïcité (law of 1905) is stricter than American separation of church and state."},

  {type:"teach", trg:"la justification", src:"justification", pos:"noun", gender:"f",
   note:"From justifier (to justify) + -ation.\nReasons or evidence supporting a decision.",
   example:"A: Quelle est la justification de cette mesure?\nB: Le gouvernement invoque la sécurité.",
   exampleSrc:"A: What is the justification for this measure?\nB: The government invokes security.",
   funFact:"In typography, justification also means text alignment, the same word with double meaning."},

  {type:"teach", trg:"le pamphlétaire", src:"pamphleteer", pos:"noun", gender:"m",
   note:"One who writes polemical pamphlets.\nFeminine: la pamphlétaire.",
   example:"A: Émile Zola était un grand pamphlétaire.\nB: Son 'J'accuse' a changé l'histoire.",
   exampleSrc:"A: Émile Zola was a great pamphleteer.\nB: His 'J'accuse' changed history.",
   funFact:"Zola's 'J'accuse' (1898) defending Dreyfus is the most famous French pamphlet in history."},

  {type:"teach", trg:"le scrutin", src:"ballot, vote", pos:"noun", gender:"m",
   note:"The act or method of voting.\nScrutin uninominal = first-past-the-post.",
   example:"A: Le scrutin a lieu dimanche prochain.\nB: Les bureaux de vote ouvrent à huit heures.",
   exampleSrc:"A: The vote takes place next Sunday.\nB: Polling stations open at eight o'clock.",
   funFact:"France votes on Sundays. Scrutin comes from Latin scrutinium (examination, search)."},

  {type:"fb", s:"La {1} est un principe fondamental de la République française.", a:["laïcité"], opts:["laïcité","diabolisation","justification","démocratisation"],
   hint:"The French principle of strict separation of church and state, enshrined in the 1905 law.",
   sSrc:"{1} is a fundamental principle of the French Republic."},

  {type:"teach", trg:"la revendication", src:"demand, claim", pos:"noun", gender:"f",
   note:"From revendiquer (to demand, to claim).\nPolitical or social demands.",
   example:"A: Les revendications des manifestants sont claires.\nB: Ils demandent de meilleurs salaires.",
   exampleSrc:"A: The demonstrators' demands are clear.\nB: They are asking for better wages.",
   funFact:"Revendiquer comes from Latin re- + vindicare (to claim). Same root as 'vindicate'."},

  {type:"mc", q:"Un scrutin est:", opts:["Un discours politique","Un vote ou une élection","Un débat télévisé","Un sondage d'opinion"], ans:"Un vote ou une élection",
   hint:"The formal process of casting ballots. Happens at polling stations."},

  {type:"fb", s:"Les {1} des syndicats portent sur les conditions de travail.", a:["revendications"], opts:["revendications","diabolisations","justifications","affirmations"],
   hint:"Demands or claims made by a group. From revendiquer, to demand.",
   sSrc:"The unions' {1} concern working conditions."},

  {type:"match", pairs:[
    {trg:"la diabolisation", src:"demonization"},
    {trg:"l'intégrisme", src:"fundamentalism"},
    {trg:"le pamphlet", src:"polemical text"},
    {trg:"la laïcité", src:"secularism"}
  ]},

  {type:"mc", q:"Le particularisme régional défend:", opts:["Les intérêts universels","Les identités et traditions locales","La centralisation de l'État","L'uniformité nationale"], ans:"Les identités et traditions locales",
   hint:"Particulier means specific. Defending what makes a region unique."},

  {type:"fb", s:"Zola était un grand {1} engagé.", a:["pamphlétaire"], opts:["pamphlétaire","communiste","modéré","scrutin"],
   hint:"Someone who writes sharp, polemical texts attacking injustice.",
   sSrc:"Zola was a great committed {1}."},

  {type:"match", pairs:[
    {trg:"le scrutin", src:"ballot, vote"},
    {trg:"la revendication", src:"demand"},
    {trg:"le modéré", src:"moderate"},
    {trg:"la justification", src:"justification"}
  ]}
]};

export default LESSON_14;
