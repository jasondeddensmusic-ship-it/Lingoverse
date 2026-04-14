const LESSON_6 = {
  id:"frv2_b2g8_l6", title:"Justice et désobéissance", icon:"\u{2696}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Justice et désobéissance",
     desc:"Legal and justice vocabulary for discussing law, crime, and moral dilemmas at B2 level.",
     goals:["Learn 15 justice and law-related words","Discuss legal matters with precision","Understand formal legal register"]},

    {type:"teach", trg:"un justicier", src:"a vigilante, a justice-seeker", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who takes justice into their own hands.\nFeminine: une justicière.",
     example:"A: Il se prend pour un justicier.\nB: C'est dangereux, laisse faire la police.",
     exampleSrc:"A: He thinks he's a vigilante.\nB: That's dangerous, let the police handle it.",
     funFact:"Zorro and Robin Hood are the classic 'justiciers' in French popular culture."},

    {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone as evil.\nCommon in political discourse.",
     example:"A: La diabolisation de l'adversaire est une stratégie.\nB: C'est efficace mais malhonnête.",
     exampleSrc:"A: The demonization of the opponent is a strategy.\nB: It's effective but dishonest.",
     funFact:"Marine Le Pen's strategy of 'dédiabolisation' (de-demonization) reshaped French politics."},

    {type:"teach", trg:"un guet-apens", src:"an ambush, a trap", pos:"noun", gender:"m",
     note:"Masculine noun. A planned attack by surprise.\nPlural: des guets-apens.",
     example:"A: C'était un véritable guet-apens.\nB: Ils n'avaient aucune chance de fuir.",
     exampleSrc:"A: It was a real ambush.\nB: They had no chance of escaping.",
     funFact:"From 'guet' (watch) + 'apens' (thought out). A premeditated surprise attack."},

    {type:"teach", trg:"neutraliser", src:"to neutralize", pos:"verb", gender:null,
     note:"Verb, first group (-er). To render harmless or ineffective.\nUsed in police and military.",
     example:"A: La police a neutralisé le suspect.\nB: L'opération s'est bien déroulée.",
     exampleSrc:"A: The police neutralized the suspect.\nB: The operation went well.",
     funFact:"French news prefers 'neutraliser' over blunter words. It implies disabling without specifying how."},

    {type:"mc",
     q:"Quel mot signifie 'une embuscade préméditée' ?",
     opts:["un guet-apens","un justicier","une diabolisation","un obus"],
     ans:"un guet-apens",
     hint:"A compound word from 'watching' and 'thought out'. A planned surprise attack."},

    {type:"teach", trg:"un obus", src:"a shell (artillery)", pos:"noun", gender:"m",
     note:"Masculine noun. An explosive projectile fired from a cannon.\nSilent final 's'.",
     example:"A: Un obus a détruit le bâtiment.\nB: Heureusement, il était vide.",
     exampleSrc:"A: A shell destroyed the building.\nB: Fortunately, it was empty.",
     funFact:"From German 'Haubitze' via Czech. The silent 's' surprises many French learners."},

    {type:"teach", trg:"l'ombrage", src:"the umbrage, the shade", pos:"noun", gender:"m",
     note:"Masculine noun. Offense taken, or literally leafy shade.\n'Prendre ombrage' means to take offense.",
     example:"A: Il a pris ombrage de cette remarque.\nB: Il est très susceptible.",
     exampleSrc:"A: He took umbrage at that remark.\nB: He's very sensitive.",
     funFact:"Literally means 'shade from leaves'. Taking umbrage is like being put in someone's shadow."},

    {type:"teach", trg:"obscurcir", src:"to darken, to obscure", pos:"verb", gender:null,
     note:"Verb, second group (-ir). To make dark or unclear.\nAlso used figuratively.",
     example:"A: Les nuages obscurcissent le ciel.\nB: On dirait qu'il va pleuvoir.",
     exampleSrc:"A: The clouds are darkening the sky.\nB: It looks like it's going to rain.",
     funFact:"The figurative sense is very common: 'obscurcir le débat' means to cloud the debate."},

    {type:"fb",
     s:"La police a {1} le suspect sans incident.",
     a:["neutralisé"],
     opts:["neutralisé","obscurci","diabolisé","obstrué"],
     hint:"To render someone harmless. A term used in police and military operations.",
     sSrc:"The police {1} the suspect without incident."},

    {type:"teach", trg:"obstruer", src:"to obstruct, to block", pos:"verb", gender:null,
     note:"Verb, first group (-er). To block or hinder passage.\nPhysical and figurative use.",
     example:"A: Un camion obstrue la route.\nB: Il faut trouver un autre chemin.",
     exampleSrc:"A: A truck is obstructing the road.\nB: We need to find another way.",
     funFact:"In French law, 'obstruction à la justice' (obstruction of justice) is a serious criminal charge."},

    {type:"teach", trg:"s'obstiner", src:"to persist stubbornly", pos:"verb", gender:null,
     note:"Reflexive verb. To stubbornly continue despite opposition.\nNegative connotation.",
     example:"A: Il s'obstine à refuser l'aide.\nB: C'est son caractère, il est têtu.",
     exampleSrc:"A: He stubbornly refuses help.\nB: That's his character, he's stubborn.",
     funFact:"From Latin 'obstinare'. The reflexive form adds emphasis to the stubbornness."},

    {type:"teach", trg:"la lèse-majesté", src:"lese-majesty", pos:"noun", gender:"f",
     note:"Feminine compound noun. An offense against a ruler's dignity.\nNow mostly figurative.",
     example:"A: Critiquer le directeur, c'est de la lèse-majesté ici.\nB: Il se prend vraiment au sérieux.",
     exampleSrc:"A: Criticizing the director is lese-majesty here.\nB: He really takes himself seriously.",
     funFact:"Until 2013, Thailand still enforced lèse-majesté laws. France abolished theirs after the Revolution."},

    {type:"mc",
     q:"Que signifie 'prendre ombrage' ?",
     opts:["Se vexer, se sentir offensé","Prendre de l'ombre","Faire de l'ombre","Donner de l'ombre"],
     ans:"Se vexer, se sentir offensé",
     hint:"'Ombrage' means shade. Taking someone's shade means feeling overshadowed or offended."},

    {type:"teach", trg:"la dépouille", src:"the remains (of a person)", pos:"noun", gender:"f",
     note:"Feminine noun. A dead person's body. Formal, respectful register.",
     example:"A: La dépouille a été rapatriée en France.\nB: La famille peut enfin faire son deuil.",
     exampleSrc:"A: The remains were repatriated to France.\nB: The family can finally grieve.",
     funFact:"'Dépouille mortelle' is the full formal expression. 'Dépouiller' means to strip or to count votes."},

    {type:"teach", trg:"le déchaînement", src:"the unleashing, the outburst", pos:"noun", gender:"m",
     note:"Masculine noun. A sudden violent outburst.\nFrom 'déchaîner' (to unchain).",
     example:"A: Le déchaînement de violence a choqué tout le monde.\nB: C'était totalement inattendu.",
     exampleSrc:"A: The unleashing of violence shocked everyone.\nB: It was totally unexpected.",
     funFact:"Literally 'unchaining'. French uses the image of breaking chains for any uncontrolled outburst."},

    {type:"teach", trg:"le déclassement", src:"the downgrading, the social decline", pos:"noun", gender:"m",
     note:"Masculine noun. Loss of social status.\nA major theme in French sociology.",
     example:"A: La peur du déclassement est réelle.\nB: Beaucoup de familles en souffrent.",
     exampleSrc:"A: The fear of social decline is real.\nB: Many families suffer from it.",
     funFact:"'Déclassement social' is a central concept in French political debate, especially since 2008."},

    {type:"fb",
     s:"Un camion {1} la route, il faut trouver un autre chemin.",
     a:["obstrue"],
     opts:["obstrue","obscurcit","neutralise","s'obstine"],
     hint:"To block or hinder passage. Think of something physically in the way.",
     sSrc:"A truck {1} the road, we need to find another way."},

    {type:"match", pairs:[
      {trg:"guet-apens", src:"ambush"},
      {trg:"lèse-majesté", src:"offense against authority"},
      {trg:"dépouille", src:"remains"},
      {trg:"déchaînement", src:"unleashing"},
      {trg:"déclassement", src:"social decline"}
    ]},

    {type:"mc",
     q:"Quel mot décrit la peur de perdre son statut social ?",
     opts:["le déclassement","le déchaînement","la diabolisation","la lèse-majesté"],
     ans:"le déclassement",
     hint:"'Dé-' means removal, 'classe' means class. Losing your place in the social hierarchy."},

    {type:"fb",
     s:"Il {1} à refuser toute aide malgré ses difficultés.",
     a:["s'obstine"],
     opts:["s'obstine","obstrue","obscurcit","neutralise"],
     hint:"To stubbornly persist in doing something despite opposition. A reflexive verb.",
     sSrc:"He stubbornly {1} to refuse all help despite his difficulties."}
  ]
};
export default LESSON_6;
