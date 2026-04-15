// French B2 Gap Batch D Lesson 10 — Social Issues
const LESSON_10 = {id:"frv2_b2gD_l10", title:"Questions sociales", icon:"🤝", xp:15, board:true, steps:[
  {type:"intro", title:"Questions sociales",
   desc:"Develop vocabulary for discussing social problems, inequality, and community challenges in French.",
   goals:["Learn 10 social issues vocabulary words","Discuss inequality and social challenges","Express nuanced opinions on society"]},

  {type:"teach", trg:"l'infidélité", src:"the infidelity / unfaithfulness", pos:"noun", gender:"f",
   note:"Lack of faithfulness in a relationship or commitment.\nAlso used figuratively: 'infidélité à ses principes'.",
   example:"A: L'infidélité est la première cause de divorce.\nB: La confiance est difficile à reconstruire.\nA: Certains couples y survivent pourtant.\nB: Avec beaucoup de travail et de patience.",
   exampleSrc:"A: Infidelity is the leading cause of divorce.\nB: Trust is hard to rebuild.\nA: Some couples survive it though.\nB: With a lot of work and patience.",
   funFact:"From 'in-' (not) + 'fidélité' (faithfulness). French literature has a long tradition of exploring infidelity, from Madame Bovary onward."},

  {type:"teach", trg:"le plurilinguisme", src:"the multilingualism", pos:"noun", gender:"m",
   note:"The ability to use multiple languages.\nA political and educational goal in Europe.",
   example:"A: Le plurilinguisme est encouragé dans l'Union européenne.\nB: Combien de langues officielles y a-t-il?\nA: Vingt-quatre langues officielles.\nB: C'est une richesse culturelle incroyable.",
   exampleSrc:"A: Multilingualism is encouraged in the European Union.\nB: How many official languages are there?\nA: Twenty-four official languages.\nB: It's an incredible cultural wealth.",
   funFact:"From 'pluri-' (many) + 'linguisme' (language use). The EU invests heavily in multilingualism policies. French speakers often learn 2-3 other languages."},

  {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
   note:"Presenting someone or something as evil.\nCommon in political and media discourse.",
   example:"A: La diabolisation de l'adversaire est une tactique politique.\nB: Ça empêche le débat constructif.\nA: Les médias y contribuent parfois.\nB: Le sensationnalisme fait vendre.",
   exampleSrc:"A: Demonizing the opponent is a political tactic.\nB: It prevents constructive debate.\nA: The media sometimes contributes to it.\nB: Sensationalism sells.",
   funFact:"From 'diable' (devil) + '-isation'. In French politics, 'la dédiabolisation' means softening a party's extreme image."},

  {type:"teach", trg:"l'assisté", src:"the welfare recipient", pos:"noun", gender:"m",
   note:"Someone receiving social assistance. Often used pejoratively.\nPolitically charged term in France.",
   example:"A: Traiter les gens d'assistés est irrespectueux.\nB: Tout le monde peut avoir besoin d'aide un jour.\nA: Le filet social existe pour une raison.\nB: La solidarité est un pilier de la République.",
   exampleSrc:"A: Calling people welfare recipients is disrespectful.\nB: Anyone can need help someday.\nA: The social safety net exists for a reason.\nB: Solidarity is a pillar of the Republic.",
   funFact:"A politically loaded term. Right-wing politicians use it critically. Left-wing voices defend the social model. Context matters enormously."},

  {type:"mc",
   q:"Que signifie 'la diabolisation' en politique?",
   opts:["Présenter l'adversaire comme mauvais ou dangereux","Analyser objectivement un programme politique","Proposer des solutions modérées","Organiser un débat télévisé"],
   ans:"Présenter l'adversaire comme mauvais ou dangereux",
   hint:"Think about the root word 'diable' (devil) and what it means to make someone appear that way."},

  {type:"teach", trg:"la main-d'oeuvre", src:"the workforce / labor", pos:"noun", gender:"f",
   note:"Workers available for employment. Also: the cost of labor.\nCompound noun, invariable plural.",
   example:"A: La main-d'oeuvre qualifiée manque dans ce secteur.\nB: Les entreprises peinent à recruter.\nA: Il faudrait investir dans la formation.\nB: Les apprentissages sont une bonne solution.",
   exampleSrc:"A: Skilled labor is lacking in this sector.\nB: Companies struggle to recruit.\nA: We should invest in training.\nB: Apprenticeships are a good solution.",
   funFact:"Literally 'hand of work'. The hyphenated compound is always feminine and invariable: 'des main-d'oeuvre' (though rarely used in plural)."},

  {type:"teach", trg:"le promeneur", src:"the walker / stroller", pos:"noun", gender:"m",
   note:"Someone who walks for pleasure.\nFrom 'promener' (to walk). Feminine: promeneuse.",
   example:"A: Les promeneurs envahissent le parc le dimanche.\nB: C'est normal, il fait beau.\nA: Les chiens aussi sont de sortie.\nB: C'est l'endroit préféré des familles.",
   exampleSrc:"A: Walkers flood the park on Sundays.\nB: That's normal, the weather is nice.\nA: Dogs are out too.\nB: It's families' favorite spot.",
   funFact:"'Se promener' (to go for a walk) is reflexive in French. The 'Promenade des Anglais' in Nice is a famous waterfront walkway."},

  {type:"teach", trg:"l'encombre", src:"the obstacle / hindrance", pos:"noun", gender:"m",
   note:"An obstacle or difficulty. Mainly in 'sans encombre' (without a hitch).\nOld-fashioned but still used in set phrases.",
   example:"A: Le voyage s'est passé sans encombre.\nB: Pas de retard ni de problème?\nA: Non, tout était parfait.\nB: C'est rare de nos jours.",
   exampleSrc:"A: The trip went without a hitch.\nB: No delays or problems?\nA: No, everything was perfect.\nB: That's rare nowadays.",
   funFact:"Almost exclusively used in 'sans encombre'. The related verb 'encombrer' (to clutter/block) is much more common."},

  {type:"fb",
   s:"Le {1} est un objectif éducatif majeur de l'Union européenne.",
   a:["plurilinguisme"],
   opts:["plurilinguisme","productivisme","expressionnisme","particularisme"],
   hint:"This word describes the ability and policy of using multiple languages, a key EU goal.",
   sSrc:"{1} is a major educational goal of the European Union."},

  {type:"teach", trg:"la pègre", src:"the underworld / criminal class", pos:"noun", gender:"f",
   note:"The criminal underworld, organized crime.\nFrom Occitan 'pègre' (thief). Informal but widely used.",
   example:"A: La pègre contrôle ce quartier depuis des années.\nB: La police n'intervient pas?\nA: C'est compliqué, les témoins ont peur.\nB: Il faudrait des moyens supplémentaires.",
   exampleSrc:"A: The underworld has controlled this neighborhood for years.\nB: Doesn't the police intervene?\nA: It's complicated, witnesses are afraid.\nB: Additional resources would be needed.",
   funFact:"From Occitan 'pègre' (petty thief). French crime novels (polars) love this word. Marseille's underworld is especially famous."},

  {type:"teach", trg:"précipitamment", src:"hastily / precipitously", pos:"adv", gender:null,
   note:"In a rushed, hasty manner.\nFrom 'précipiter' (to rush). Very formal register.",
   example:"A: Il a quitté la salle précipitamment.\nB: Qu'est-ce qui s'est passé?\nA: Il a reçu un appel urgent.\nB: J'espère que ce n'est rien de grave.",
   exampleSrc:"A: He left the room hastily.\nB: What happened?\nA: He received an urgent call.\nB: I hope it's nothing serious.",
   funFact:"One of the hardest French adverbs to spell correctly. The double 'm' comes from 'précipitant' + '-ment'."},

  {type:"mc",
   q:"Que signifie 'sans encombre'?",
   opts:["Sans problème ni difficulté","Avec beaucoup d'obstacles","En courant très vite","Sans aucune aide extérieure"],
   ans:"Sans problème ni difficulté",
   hint:"This fixed expression uses an old word for 'obstacle' preceded by 'sans' (without)."},

  {type:"match", pairs:[
    {trg:"main-d'oeuvre", src:"workforce"},
    {trg:"pègre", src:"underworld"},
    {trg:"promeneur", src:"walker"},
    {trg:"infidélité", src:"infidelity"},
    {trg:"précipitamment", src:"hastily"}
  ]},

  {type:"fb",
   s:"La {1} qualifiée manque cruellement dans le secteur de la construction.",
   a:["main-d'oeuvre"],
   opts:["main-d'oeuvre","pègre","division","globalité"],
   hint:"This compound noun literally means 'hand of work' and describes available workers.",
   sSrc:"Skilled {1} is desperately lacking in the construction sector."}
]};
export default LESSON_10;
