// French B2 Gap Lesson 20. Debate and Persuasion
const LESSON_20 = {id:"frv2_b2g5_l20", title:"Débat et persuasion", icon:"🎤", xp:15, board:true, steps:[
  {type:"intro", title:"Débat et persuasion",
   desc:"Master vocabulary for argumentation, debate techniques, and persuasive communication at B2 level.",
   goals:["Learn 15 key words about debate and persuasion","Discuss argumentation strategies","Use vocabulary for formal discussion and reasoning"]},

  {type:"teach", trg:"le bien-dit", src:"the well-said / witticism", pos:"noun", gender:"m",
   note:"A clever or well-phrased remark.\nRare as a noun; 'bien dit!' (well said!) is the common exclamation.",
   example:"A: Bien dit! Ton argument est percutant.\nB: Merci, j'ai beaucoup réfléchi à cette question.\nA: La clarté de ton expression est admirable.\nB: L'art de bien dire s'apprend avec la pratique.",
   exampleSrc:"A: Well said! Your argument is striking.\nB: Thanks, I thought a lot about this question.\nA: The clarity of your expression is admirable.\nB: The art of speaking well is learned with practice.",
   funFact:"The French tradition of 'l'art de bien dire' (the art of speaking well) dates back to classical rhetoric."},

  {type:"teach", trg:"l'incrustation", src:"the embedding / persistence", pos:"noun", gender:"f",
   note:"Reinforcement from L08 in debate context.\nFiguratively: refusing to leave, overstaying.",
   example:"A: Son incrustation dans le débat agace les autres participants.\nB: Il parle sans arrêt et ne laisse personne répondre.\nA: Le modérateur devrait intervenir.\nB: Oui, le temps de parole doit être équitable.",
   exampleSrc:"A: His persistence in the debate annoys the other participants.\nB: He speaks nonstop and doesn't let anyone respond.\nA: The moderator should intervene.\nB: Yes, speaking time should be fair.",
   funFact:"Reinforcement: L08 used it for decorative inlay, here for the figurative sense of 'embedding oneself'."},

  {type:"teach", trg:"l'irrésistible", src:"irresistible (as noun: charm)", pos:"noun", gender:"m",
   note:"Reinforcement from L02. Used as noun: 'un irrésistible charme'.\nDescribing an irresistible force or appeal.",
   example:"A: Son charme est irrésistible, il convainc tout le monde.\nB: C'est un orateur né.\nA: Les mots coulent naturellement.\nB: Le charisme est son arme secrète.",
   exampleSrc:"A: His charm is irresistible, he convinces everyone.\nB: He's a born speaker.\nA: Words flow naturally.\nB: Charisma is his secret weapon.",
   funFact:"Reinforcement: in L02 used as adjective for arguments, here for personal charisma in persuasion."},

  {type:"teach", trg:"le contrario", src:"the contrary (a contrario)", pos:"noun", gender:"m",
   note:"Used in the Latin expression 'a contrario' (from the contrary).\nA formal reasoning technique.",
   example:"A: A contrario, si le suspect était innocent, il n'aurait pas fui.\nB: C'est un raisonnement logique.\nA: Mais la fuite n'est pas toujours un aveu de culpabilité.\nB: Tu as raison, il faut nuancer.",
   exampleSrc:"A: On the contrary, if the suspect were innocent, he wouldn't have fled.\nB: That's logical reasoning.\nA: But fleeing is not always an admission of guilt.\nB: You're right, we need to nuance.",
   funFact:"From Latin 'a contrario'. French legal and philosophical language is full of Latin expressions."},

  {type:"teach", trg:"l'interposer", src:"to interject / to step in (debate)", pos:"verb", gender:null,
   note:"Reinforcement from L15 in debate context.\nTo place oneself or an argument between opposing positions.",
   example:"A: Le modérateur s'est interposé pour calmer le débat.\nB: Les deux parties étaient très énervées.\nA: La neutralité du modérateur est essentielle.\nB: Sans lui, le débat aurait dégénéré.",
   exampleSrc:"A: The moderator stepped in to calm the debate.\nB: Both parties were very agitated.\nA: The moderator's neutrality is essential.\nB: Without him, the debate would have deteriorated.",
   funFact:"Reinforcement: L15 used for physical intervention, here for verbal/intellectual intervention."},

  {type:"teach", trg:"la désapprobation", src:"the disapproval", pos:"noun", gender:"f",
   note:"The expression of objection or disagreement.\nRelated to 'désapprobateur' (L10).",
   example:"A: La désapprobation du public était évidente.\nB: Les sifflets ont couvert le discours.\nA: L'orateur a perdu son audience.\nB: Il aurait dû mieux préparer ses arguments.",
   exampleSrc:"A: The audience's disapproval was obvious.\nB: The boos drowned out the speech.\nA: The speaker lost his audience.\nB: He should have prepared his arguments better.",
   funFact:"From 'désapprouver' (to disapprove). French audiences may whistle ('siffler') to show disapproval."},

  {type:"teach", trg:"la formulation", src:"the wording (reinforcement)", pos:"noun", gender:"f",
   note:"Reinforcement from L02. Critical in debate: how you phrase determines reception.\nPrecision is key.",
   example:"A: La formulation de ta thèse est trop vague.\nB: Comment l'améliorer?\nA: Sois plus précis et utilise des exemples concrets.\nB: D'accord, je reformule pour être plus clair.",
   exampleSrc:"A: The wording of your thesis is too vague.\nB: How can I improve it?\nA: Be more precise and use concrete examples.\nB: Okay, I'll rephrase to be clearer.",
   funFact:"Reinforcement: precision of formulation is the difference between winning and losing a French debate."},

  {type:"teach", trg:"l'ineffable", src:"ineffable / beyond words", pos:"adj", gender:null,
   note:"Too great or extreme to be expressed in words.\nLiterary and poetic. Same form for both genders.",
   example:"A: La joie de cette victoire est ineffable.\nB: Les mots ne suffisent pas.\nA: Certaines émotions dépassent le langage.\nB: C'est ce qui rend la vie belle.",
   exampleSrc:"A: The joy of this victory is ineffable.\nB: Words are not enough.\nA: Some emotions go beyond language.\nB: That's what makes life beautiful.",
   funFact:"From Latin 'ineffabilis': 'in-' (not) + 'effabilis' (utterable). More intense than 'indicible' (L08)."},

  {type:"teach", trg:"l'indiscutablement", src:"indisputably", pos:"adv", gender:null,
   note:"Without any possibility of argument. The adverb form of 'indiscutable' (L07).\nVery formal.",
   example:"A: Il est indiscutablement le meilleur orateur.\nB: Personne ne peut rivaliser avec lui.\nA: Sa maîtrise de la rhétorique est parfaite.\nB: Des années de pratique expliquent ce niveau.",
   exampleSrc:"A: He is indisputably the best speaker.\nB: Nobody can compete with him.\nA: His mastery of rhetoric is perfect.\nB: Years of practice explain this level.",
   funFact:"From 'indiscutable' + '-ment'. One of the most emphatic adverbs in formal French."},

  {type:"mc", q:"Que signifie 'a contrario'?",
   opts:["En raisonnant par le contraire","En accord avec","En résumé","En conclusion"],
   ans:"En raisonnant par le contraire",
   hint:"A Latin expression used in logic: reasoning from the opposite direction"},

  {type:"fb", s:"La {1} du public était évidente: des sifflets ont couvert le discours.",
   a:["désapprobation"], opts:["désapprobation","formulation","incrustation","interaction"],
   hint:"The clear expression of the audience's disagreement and objection",
   sSrc:"The audience's {1} was obvious: boos drowned out the speech."},

  {type:"teach", trg:"la force", src:"the force / strength (adj: forced)", pos:"noun", gender:null,
   note:"As adjective: forced, compelled. 'C'est forcé' = it's inevitable.\n'Force est de constater' = one must acknowledge.",
   example:"A: Force est de constater que le débat n'a rien résolu.\nB: Les positions restent les mêmes.\nA: Il faudra trouver un compromis.\nB: Sans compromis, pas de progrès.",
   exampleSrc:"A: One must acknowledge that the debate resolved nothing.\nB: Positions remain the same.\nA: A compromise will have to be found.\nB: Without compromise, no progress.",
   funFact:"'Force est de' is a very formal construction meaning 'one is forced to'. Elegant and impactful."},

  {type:"teach", trg:"le donnant-donnant", src:"the give-and-take / quid pro quo", pos:"noun", gender:"m",
   note:"A reciprocal exchange where both sides give something.\n'C'est du donnant-donnant' = it's a fair exchange.",
   example:"A: La négociation est du donnant-donnant.\nB: Chaque partie doit faire des concessions.\nA: Sans compromis, pas d'accord possible.\nB: C'est la base de toute négociation.",
   exampleSrc:"A: Negotiation is give-and-take.\nB: Each party must make concessions.\nA: Without compromise, no agreement is possible.\nB: That's the basis of all negotiation.",
   funFact:"From 'donner' (to give) repeated. Literally: 'giving-giving'. A very French way to describe fair exchange."},

  {type:"teach", trg:"en cause", src:"in question / at stake", pos:"adv", gender:null,
   note:"Involved or being discussed. 'Mettre en cause' = to call into question.\n'Remettre en cause' = to challenge.",
   example:"A: Les résultats sont remis en cause par l'opposition.\nB: Ils contestent les chiffres?\nA: Oui, ils demandent un recomptage.\nB: La transparence est essentielle.",
   exampleSrc:"A: The results are being challenged by the opposition.\nB: Are they disputing the numbers?\nA: Yes, they are requesting a recount.\nB: Transparency is essential.",
   funFact:"'Mettre en cause' (to implicate) and 'remettre en cause' (to question) are both very frequent."},

  {type:"mc", q:"Quel adjectif signifie 'trop grand pour être exprimé en mots'?",
   opts:["Inexplicable","Ineffable","Indiscutable","Irrésistible"],
   ans:"Ineffable",
   hint:"Beyond the power of words to express, more intense than merely 'indescribable'"},

  {type:"fb", s:"La négociation est du {1}: chaque partie doit faire des concessions.",
   a:["donnant-donnant"], opts:["donnant-donnant","bien-dit","contrario","demi-tour"],
   hint:"A fair exchange where both sides give something in return",
   sSrc:"Negotiation is {1}: each party must make concessions."},

  {type:"match", pairs:[
    {trg:"a contrario", src:"on the contrary"},
    {trg:"le donnant-donnant", src:"give-and-take"},
    {trg:"ineffable", src:"beyond words"},
    {trg:"en cause", src:"in question"},
    {trg:"indiscutablement", src:"indisputably"}
  ]},

  {type:"mc", q:"Que signifie 'force est de constater'?",
   opts:["On espère changer","On ignore volontairement","On est obligé de reconnaître","On refuse d'admettre"],
   ans:"On est obligé de reconnaître",
   hint:"A formal construction meaning the facts compel us to acknowledge something"},

  {type:"fb", s:"Il est {1} le meilleur orateur de sa génération.",
   a:["indiscutablement"], opts:["indiscutablement","ironiquement","immensément","individuellement"],
   hint:"Without any room for debate or disagreement whatsoever",
   sSrc:"He is {1} the best speaker of his generation."},

  {type:"drag_fill", s:"Les résultats sont remis {1} et la {2} de la thèse doit être améliorée.",
   blanks:{"1":"en cause","2":"formulation"},
   pool:["en cause","formulation","en place","désapprobation"],
   hint:"The results are being challenged and the way the thesis is worded needs improvement"},

  {type:"mc", q:"Comment les Français expriment-ils leur désapprobation dans un spectacle?",
   opts:["En applaudissant","En criant bravo","En frappant sur les tables","En sifflant"],
   ans:"En sifflant",
   hint:"Unlike some cultures, French audiences use this sharp sound to show displeasure"}
]};
export default LESSON_20;
