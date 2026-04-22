const LESSON_3 = {
  id:"frv2_b2g6_l3", title:"L'hypothèse et l'identification", icon:"\uD83D\uDD0D", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'hypothèse et l'identification",
     desc:"Build vocabulary for forming hypotheses, identifying patterns, and reasoning through problems.",
     goals:["Learn 20 words about reasoning and analysis","Form and defend hypotheses in French","Discuss identification and classification"]},

    {type:"teach", trg:"une hypothèse", src:"a hypothesis", pos:"noun", gender:"f",
     note:"Feminine noun. A proposed explanation to be tested.",
     example:"A: Quelle est votre hypothèse ?\nB: Je pense que le problème vient du logiciel.",
     exampleSrc:"A: What is your hypothesis?\nB: I think the problem comes from the software.",
     funFact:"From Greek 'hypothesis' meaning foundation. 'Émettre une hypothèse' is the standard French collocation."},

    {type:"teach", trg:"l'identification", src:"the identification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of recognizing or establishing identity.",
     example:"A: L'identification du suspect a pris des semaines.\nB: Les témoins n'étaient pas sûrs.",
     exampleSrc:"A: The identification of the suspect took weeks.\nB: The witnesses weren't sure.",
     funFact:"In psychology, 'identification' also means unconsciously adopting someone else's traits."},

    {type:"teach", trg:"un indicateur", src:"an indicator", pos:"noun", gender:"m",
     note:"Masculine noun. A sign or measure that shows the state of something.",
     example:"A: Cet indicateur économique est alarmant.\nB: Oui, le chômage augmente.",
     exampleSrc:"A: This economic indicator is alarming.\nB: Yes, unemployment is rising.",
     funFact:"Also means 'informant' in police jargon. 'Indicateur de performance' is a common business term."},

    {type:"teach", trg:"l'incapacité", src:"the inability, the incapacity", pos:"noun", gender:"f",
     note:"Feminine noun. The lack of ability or legal competence to do something.",
     example:"A: Son incapacité à déléguer pose problème.\nB: Il veut tout contrôler.",
     exampleSrc:"A: His inability to delegate is a problem.\nB: He wants to control everything.",
     funFact:"In French law, 'incapacité juridique' means a person cannot legally act on their own behalf."},

    {type:"mc",
     q:"Que signifie 'un indicateur' ?",
     opts:["Un signe qui montre l'état de quelque chose","Un appareil de mesure scientifique","Un document officiel","Une personne qui dirige"],
     ans:"Un signe qui montre l'état de quelque chose",
     hint:"Think of a dashboard showing data. This word points to the state or condition of something."},

    {type:"teach", trg:"l'insuffisance", src:"the insufficiency, the inadequacy", pos:"noun", gender:"f",
     note:"Feminine noun. A lack or shortcoming. Medical: organ failure.",
     example:"A: L'insuffisance de moyens freine le projet.\nB: Il nous faut plus de financement.",
     exampleSrc:"A: The insufficiency of resources is slowing the project.\nB: We need more funding.",
     funFact:"'Insuffisance cardiaque' (heart failure) is the medical usage. Figuratively, means any serious shortcoming."},

    {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming more intense or concentrated.",
     example:"A: L'intensification des contrôles est nécessaire.\nB: La sécurité doit être renforcée.",
     exampleSrc:"A: The intensification of controls is necessary.\nB: Security must be strengthened.",
     funFact:"Used in agriculture ('intensification agricole'), conflict escalation, and weather reports."},

    {type:"teach", trg:"l'interaction", src:"the interaction", pos:"noun", gender:"f",
     note:"Feminine noun. Mutual action or influence between things or people.",
     example:"A: L'interaction entre les deux cultures est enrichissante.\nB: Oui, elles s'influencent mutuellement.",
     exampleSrc:"A: The interaction between the two cultures is enriching.\nB: Yes, they influence each other.",
     funFact:"A recent borrowing compared to most French abstract nouns. Digital 'interactions' made it mainstream."},

    {type:"fb",
     s:"L'{1} du suspect a été confirmée par les empreintes digitales.",
     a:["identification"],
     opts:["identification","interaction","insuffisance","hypothèse"],
     hint:"The process of establishing who someone is, often through evidence or documents.",
     sSrc:"The {1} of the suspect was confirmed by fingerprints."},

    {type:"teach", trg:"inattendu", src:"unexpected", pos:"adj", gender:null,
     note:"Adjective. Not expected. Feminine: inattendue.",
     example:"A: Cette visite est inattendue.\nB: Quelle bonne surprise !",
     exampleSrc:"A: This visit is unexpected.\nB: What a nice surprise!",
     funFact:"From 'in-' (not) + 'attendu' (expected). French literature loves 'le dénouement inattendu' (unexpected ending)."},

    {type:"teach", trg:"une injure", src:"an insult", pos:"noun", gender:"f",
     note:"Feminine noun. A verbal attack on someone's dignity. Legal term.",
     example:"A: Proférer des injures est punissable.\nB: Oui, c'est un délit en France.",
     exampleSrc:"A: Uttering insults is punishable.\nB: Yes, it's an offense in France.",
     funFact:"In French law, 'injure' is distinct from 'diffamation'. Injure is abuse, diffamation involves false facts."},

    {type:"teach", trg:"l'impunité", src:"the impunity", pos:"noun", gender:"f",
     note:"Feminine noun. Exemption from punishment or consequences.",
     example:"A: Ils agissent en toute impunité.\nB: La justice doit réagir.",
     exampleSrc:"A: They act with complete impunity.\nB: Justice must respond.",
     funFact:"'En toute impunité' is a powerful phrase in French journalism, often used to denounce corruption."},

    {type:"mc",
     q:"Quel mot signifie 'qui n'est pas prévu, surprenant' ?",
     opts:["inscrit","inattendu","indicateur","insuffisant"],
     ans:"inattendu",
     hint:"The prefix 'in-' means 'not', and the root relates to waiting or expecting."},

    {type:"teach", trg:"inscrit", src:"registered, enrolled", pos:"adj", gender:null,
     note:"Past participle used as adjective. Feminine: inscrite. Also a noun.",
     example:"A: Êtes-vous inscrit sur les listes électorales ?\nB: Oui, depuis mes dix-huit ans.",
     exampleSrc:"A: Are you registered on the electoral rolls?\nB: Yes, since I turned eighteen.",
     funFact:"'S'inscrire' is essential French admin vocab. You inscribe yourself for everything: school, gym, elections."},

    {type:"teach", trg:"une issue", src:"an outcome, an exit", pos:"noun", gender:"f",
     note:"Feminine noun. A result or way out. NOT the English 'issue' (problem).",
     example:"A: Quelle est l'issue de ces négociations ?\nB: Un accord semble possible.",
     exampleSrc:"A: What is the outcome of these negotiations?\nB: An agreement seems possible.",
     funFact:"False friend alert: 'une issue' means outcome or exit in French, NOT a problem. 'Voie sans issue' means dead end."},

    {type:"teach", trg:"le jargon", src:"the jargon", pos:"noun", gender:"m",
     note:"Masculine noun. Specialized language of a profession or group.",
     example:"A: Le jargon médical est incompréhensible.\nB: Les médecins devraient simplifier.",
     exampleSrc:"A: Medical jargon is incomprehensible.\nB: Doctors should simplify.",
     funFact:"From Old French meaning birdsong. It evolved to mean unintelligible speech, then specialized vocabulary."},

    {type:"fb",
     s:"Ils commettent des crimes en toute {1}.",
     a:["impunité"],
     opts:["impunité","injure","issue","hypothèse"],
     hint:"Freedom from punishment or consequences for wrongdoing.",
     sSrc:"They commit crimes with complete {1}."},

    {type:"teach", trg:"la jubilation", src:"the jubilation, the elation", pos:"noun", gender:"f",
     note:"Feminine noun. Intense joy or triumph.",
     example:"A: La jubilation des supporters était contagieuse.\nB: Tout le stade chantait.",
     exampleSrc:"A: The jubilation of the fans was contagious.\nB: The whole stadium was singing.",
     funFact:"From Latin 'jubilare' meaning to shout for joy. 'Jubilé' (jubilee) shares the same root."},

    {type:"teach", trg:"la jointure", src:"the joint, the junction", pos:"noun", gender:"f",
     note:"Feminine noun. The point where two things meet, or a body joint.",
     example:"A: La jointure du mur est fissurée.\nB: Il faut la réparer avant l'hiver.",
     exampleSrc:"A: The joint in the wall is cracked.\nB: We need to fix it before winter.",
     funFact:"From 'joindre' (to join). 'Jointure des doigts' means the knuckle joints."},

    {type:"match", pairs:[
      {trg:"hypothèse", src:"hypothesis"},
      {trg:"impunité", src:"impunity"},
      {trg:"issue", src:"outcome, exit"},
      {trg:"jargon", src:"jargon"},
      {trg:"jubilation", src:"elation"}
    ]},

    {type:"mc",
     q:"Attention faux ami : que signifie 'une issue' en français ?",
     opts:["Un numéro de magazine","Une question","Un résultat ou une sortie","Un problème"],
     ans:"Un résultat ou une sortie",
     hint:"This is a false friend. In French it means outcome or exit, not a problem."},

    {type:"fb",
     s:"L'{1} des ressources freine le développement de la région.",
     a:["insuffisance"],
     opts:["insuffisance","intensification","interaction","identification"],
     hint:"A lack or shortage that prevents proper functioning.",
     sSrc:"The {1} of resources is slowing the region's development."}
  ]
};
export default LESSON_3;
