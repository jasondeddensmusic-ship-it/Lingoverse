// French B2 Gap Batch D Lesson 17. Abstract Concepts
const LESSON_17 = {id:"frv2_b2gD_l17", title:"Concepts abstraits", icon:"💡", xp:15, board:true, steps:[
  {type:"intro", title:"Concepts abstraits",
   desc:"Master abstract vocabulary for philosophical discussion, intellectual debate, and critical thinking.",
   goals:["Learn 10 abstract concept terms","Discuss philosophical ideas in French","Use high-register abstract nouns"]},

  {type:"teach", trg:"l'intégrisme", src:"the fundamentalism", pos:"noun", gender:"m",
   note:"Strict adherence to fundamental principles, especially religious.\nOriginally about Catholic traditionalism in France.",
   example:"A: L'intégrisme refuse tout compromis.\nB: C'est le contraire du dialogue.\nA: La tolérance est essentielle en démocratie.\nB: Le respect des différences aussi.",
   exampleSrc:"A: Fundamentalism refuses all compromise.\nB: It's the opposite of dialogue.\nA: Tolerance is essential in democracy.\nB: Respect for differences too.",
   funFact:"Originally a Catholic term for rejecting Vatican II reforms. Now used for any rigid ideological position. French distinguishes 'intégrisme' from 'extrémisme'."},

  {type:"teach", trg:"la matérialisation", src:"the materialization", pos:"noun", gender:"f",
   note:"The process of becoming real or physical.\nAbstract ideas becoming concrete reality.",
   example:"A: Ce bâtiment est la matérialisation d'un rêve.\nB: L'architecte y a travaillé dix ans.\nA: Le résultat est spectaculaire.\nB: Parfois la patience produit des chefs-d'oeuvre.",
   exampleSrc:"A: This building is the materialization of a dream.\nB: The architect worked on it for ten years.\nA: The result is spectacular.\nB: Sometimes patience produces masterpieces.",
   funFact:"From 'matériel' (material) + '-isation'. In philosophy, 'matérialisme' is the belief that only physical matter exists."},

  {type:"teach", trg:"le pire", src:"the worst", pos:"noun", gender:"m",
   note:"The worst thing or outcome. Always masculine.\n'Le pire est passé' = the worst is over.",
   example:"A: Le pire dans cette histoire, c'est le mensonge.\nB: Tu as raison, la confiance est brisée.\nA: Le pire est peut-être passé.\nB: Espérons que les choses s'améliorent.",
   exampleSrc:"A: The worst thing in this story is the lie.\nB: You're right, trust is broken.\nA: The worst may be over.\nB: Let's hope things improve.",
   funFact:"'Le pire' as a noun is always masculine. As an adjective, it agrees: 'la pire erreur' (the worst mistake). Superlative of 'mauvais'."},

  {type:"teach", trg:"le contrario", src:"the opposite view", pos:"noun", gender:"m",
   note:"Used only in 'a contrario' (on the contrary, by opposite reasoning).\nLegal and formal Latin expression.",
   example:"A: A contrario, si les ventes augmentent, on recrutera.\nB: C'est une bonne nouvelle potentielle.\nA: Tout dépend du marché.\nB: Restons optimistes.",
   exampleSrc:"A: Conversely, if sales increase, we'll hire.\nB: That's potential good news.\nA: It all depends on the market.\nB: Let's stay optimistic.",
   funFact:"Latin expression meaning 'by the opposite'. Used in legal reasoning and formal arguments. The opposite of 'a fortiori' (even more so)."},

  {type:"mc",
   q:"Que signifie 'le pire est passé'?",
   opts:["Le moment le plus difficile est derrière nous","La situation va empirer","Le pire n'est pas encore arrivé","Il faut se préparer au pire"],
   ans:"Le moment le plus difficile est derrière nous",
   hint:"'Le pire' means 'the worst'. If it '… passé' (has passed), what does that mean for the future?"},

  {type:"teach", trg:"la néologie", src:"the neology / word creation", pos:"noun", gender:"f",
   note:"The creation of new words or expressions.\nA field of linguistics that studies new vocabulary.",
   example:"A: La néologie est très active en français.\nB: Avec les anglicismes et la technologie?\nA: Oui, et aussi les mots inventés sur les réseaux sociaux.\nB: La langue évolue constamment.",
   exampleSrc:"A: Neology is very active in French.\nB: With anglicisms and technology?\nA: Yes, and also words invented on social media.\nB: Language constantly evolves.",
   funFact:"The Academie Francaise actively creates French alternatives to English tech words: 'courriel' for email, 'mot-dièse' for hashtag."},

  {type:"teach", trg:"la désillusionnement", src:"the disillusionment", pos:"noun", gender:"m",
   note:"The loss of illusions or false beliefs.\nA key concept in political and social commentary.",
   example:"A: Le désillusionnement des jeunes face à la politique est inquiétant.\nB: Ils ne votent plus?\nA: De moins en moins.\nB: Il faut leur redonner confiance dans le système.",
   exampleSrc:"A: Young people's disillusionment with politics is worrying.\nB: They no longer vote?\nA: Less and less.\nB: We need to restore their confidence in the system.",
   funFact:"From 'dés-' (un-) + 'illusion'. The noun 'désillusion' is more common. 'Être désillusion' describes losing naive beliefs."},

  {type:"teach", trg:"la pondération", src:"the weighting / balance", pos:"noun", gender:"f",
   note:"Statistical weighting of different factors.\nAlso: emotional balance and moderation (see L3 for personal sense).",
   example:"A: La pondération des critères est déterminante.\nB: On accorde plus de poids à l'expérience?\nA: Oui, quarante pour cent du score total.\nB: C'est logique pour ce poste.",
   exampleSrc:"A: The weighting of criteria is decisive.\nB: Do we give more weight to experience?\nA: Yes, forty percent of the total score.\nB: That makes sense for this position.",
   funFact:"In statistics, 'coefficient de pondération' means weighting coefficient. Same root as the personal virtue meaning from lesson 3."},

  {type:"fb",
   s:"Ce bâtiment est la {1} d'une vision architecturale révolutionnaire.",
   a:["matérialisation"],
   opts:["matérialisation","néologie","pondération","désillusionnement"],
   hint:"This noun describes the process of an abstract idea becoming physical reality.",
   sSrc:"This building is the {1} of a revolutionary architectural vision."},

  {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
   note:"Seeing something as better than reality. Recycled from L4.\nHere in philosophical context.",
   example:"A: L'idéalisation de la nature est un thème romantique.\nB: Rousseau a beaucoup contribué à cette vision.\nA: Le mythe du bon sauvage.\nB: Une idéalisation qui persiste dans l'écologie.",
   exampleSrc:"A: The idealization of nature is a romantic theme.\nB: Rousseau greatly contributed to this vision.\nA: The myth of the noble savage.\nB: An idealization that persists in ecology.",
   funFact:"Rousseau's idealization of the 'state of nature' influenced French philosophy profoundly. It still shapes environmental thinking."},

  {type:"teach", trg:"le précepte", src:"the precept / moral rule", pos:"noun", gender:"m",
   note:"A guiding moral or practical rule. Recycled from L5.\nHere in philosophical context.",
   example:"A: Les préceptes stoïciens restent pertinents.\nB: Contrôler ce qu'on peut, accepter le reste?\nA: Exactement. Une philosophie de vie.\nB: Marc Aurèle l'a magnifiquement exprimé.",
   exampleSrc:"A: Stoic precepts remain relevant.\nB: Control what you can, accept the rest?\nA: Exactly. A philosophy of life.\nB: Marcus Aurelius expressed it beautifully.",
   funFact:"The Stoics greatly influenced French philosophy. Montaigne, Descartes, and even modern French self-help draw on Stoic precepts."},

  {type:"mc",
   q:"Qu'est-ce que 'la néologie'?",
   opts:["L'analyse des accents régionaux","L'étude et la création de mots nouveaux","L'étude des langues anciennes","La grammaire des verbes irréguliers"],
   ans:"L'étude et la création de mots nouveaux",
   hint:"'Néo-' means 'new' and '-logie' means 'study of'. This field creates and studies new vocabulary."},

  {type:"match", pairs:[
    {trg:"intégrisme", src:"fundamentalism"},
    {trg:"pire", src:"the worst"},
    {trg:"néologie", src:"word creation"},
    {trg:"contrario", src:"opposite view"},
    {trg:"matérialisation", src:"materialization"}
  ]},

  {type:"fb",
   s:"A {1}, si l'on augmente les prix, les ventes diminueront.",
   a:["contrario"],
   opts:["contrario","priori","posteriori","fortiori"],
   hint:"This Latin expression means 'by opposite reasoning' and is used in formal arguments.",
   sSrc:"Conversely, if prices are raised, sales will decrease."}
]};
export default LESSON_17;
