const LESSON_18 = {
  id:"frv2_b2g4_l18", title:"Langage et idees", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Langage et idees",
     desc:"Explore words about language, thought, identity, and the world of abstract ideas.",
     goals:["Learn 15 words about language and abstract concepts","Discuss identity and thought processes","Express nuanced intellectual opinions"]},

    {type:"teach", trg:"un idiomatisme", src:"an idiom, an idiomatic expression", pos:"noun", gender:"m",
     note:"Masculine noun. A fixed expression whose meaning differs from the literal words.",
     example:"A: Les idiomatismes sont difficiles a traduire.\nB: Chaque langue a les siens.",
     exampleSrc:"A: Idioms are difficult to translate.\nB: Every language has its own.",
     funFact:"French has thousands of idiomatismes. 'Tomber dans les pommes' (to faint) literally means falling into apples."},

    {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced here in identity context.\nThe act of identifying.",
     example:"A: L'identification des victimes prend du temps.\nB: La police utilise l'ADN.",
     exampleSrc:"A: Identifying the victims takes time.\nB: Police use DNA.",
     funFact:"In France, you must carry ID at all times. 'Piece d'identite' (ID document) is always required."},

    {type:"teach", trg:"l'alteration", src:"alteration, deterioration", pos:"noun", gender:"f",
     note:"Feminine noun. A change, usually for the worse.\nDegradation or corruption.",
     example:"A: L'alteration du climat est visible chaque annee.\nB: Les temperatures augmentent regulierement.",
     exampleSrc:"A: Climate deterioration is visible every year.\nB: Temperatures rise regularly.",
     funFact:"In music, 'alteration' means a sharp or flat. In law, it means tampering with evidence."},

    {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters in a writing system.\nFrom Greek alpha + beta.",
     example:"A: L'alphabet francais compte vingt-six lettres.\nB: Mais les accents ajoutent de la complexite.",
     exampleSrc:"A: The French alphabet has twenty-six letters.\nB: But accents add complexity.",
     funFact:"French uses the same 26 Latin letters as English but adds 13 accented characters and ligatures."},

    {type:"teach", trg:"la deduction", src:"deduction, reasoning", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in logic context.\nLogical reasoning from general to specific.",
     example:"A: Par deduction, le coupable est le voisin.\nB: Tous les indices le designent.",
     exampleSrc:"A: By deduction, the culprit is the neighbor.\nB: All the clues point to him.",
     funFact:"Descartes' deductive method shaped French intellectual culture. 'Je pense, donc je suis.'"},

    {type:"mc",
     q:"Quel mot designe une expression figee propre a une langue ?",
     opts:["un idiomatisme","un alphabet","une alteration","une deduction"],
     ans:"un idiomatisme",
     hint:"'Tomber dans les pommes' is an example. Fixed expressions that cannot be translated literally."},

    {type:"teach", trg:"l'excoriation", src:"abrasion, sharp criticism", pos:"noun", gender:"f",
     note:"Feminine noun. A skin scrape. Figuratively: harsh criticism.\nMedical and literary register.",
     example:"A: L'excoriation du genou necessite un pansement.\nB: Ce n'est pas grave, juste une egratignure.",
     exampleSrc:"A: The knee abrasion needs a bandage.\nB: It's not serious, just a scrape.",
     funFact:"In literary criticism, 'excoriation' means a devastating review. Literally: to strip the skin off."},

    {type:"teach", trg:"la concordance", src:"agreement, concordance", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in grammar context.\nSequence of tenses.",
     example:"A: La concordance des temps est essentielle en francais.\nB: Le subjonctif depend du verbe principal.",
     exampleSrc:"A: Sequence of tenses is essential in French.\nB: The subjunctive depends on the main verb.",
     funFact:"La concordance des temps is one of the hardest French grammar rules. Even natives make mistakes."},

    {type:"teach", trg:"differencie", src:"differentiated, distinct", pos:"adj", gender:null,
     note:"Adjective. Made distinct or specialized.\nFrom 'differencier' (to differentiate).",
     example:"A: L'enseignement differencie s'adapte a chaque eleve.\nB: Chacun progresse a son rythme.",
     exampleSrc:"A: Differentiated teaching adapts to each student.\nB: Everyone progresses at their own pace.",
     funFact:"'Pedagogie differenciee' is a major concept in French education, mandated in national curricula."},

    {type:"fb",
     s:"L'{1} francais compte vingt-six lettres plus des accents.",
     a:["alphabet"],
     opts:["alphabet","idiomatisme","alteration","excoriation"],
     hint:"From Greek alpha and beta. The complete set of letters in a writing system.",
     sSrc:"The French {1} has twenty-six letters plus accents."},

    {type:"teach", trg:"l'exaltation", src:"exaltation, elation", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in intellectual context.\nIntense excitement or passion.",
     example:"A: L'exaltation des supporters etait palpable.\nB: Leur equipe venait de gagner la finale.",
     exampleSrc:"A: The fans' elation was palpable.\nB: Their team had just won the final.",
     funFact:"In psychiatry, 'exaltation' describes a manic state. In everyday French, it means intense enthusiasm."},

    {type:"teach", trg:"approfondie", src:"thorough, in-depth", pos:"adj", gender:null,
     note:"Adjective. Studied or examined in great depth.\nFeminine form of 'approfondi'.",
     example:"A: Une analyse approfondie du probleme est necessaire.\nB: Les solutions superficielles ne marchent pas.",
     exampleSrc:"A: A thorough analysis of the problem is necessary.\nB: Superficial solutions don't work.",
     funFact:"From 'approfondir' (to deepen). 'Etude approfondie' is a standard academic phrase in French."},

    {type:"teach", trg:"un derive", src:"a derivative, a byproduct", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier. Reinforced in language context.\nSomething derived from another.",
     example:"A: Le mot 'librement' est un derive de 'libre'.\nB: Le suffixe -ment forme des adverbes.",
     exampleSrc:"A: The word 'librement' is a derivative of 'libre'.\nB: The -ment suffix forms adverbs.",
     funFact:"French word formation relies heavily on derivation: prefixes and suffixes create thousands of new words."},

    {type:"mc",
     q:"Quel adjectif signifie 'etudie en profondeur' ?",
     opts:["approfondie","differencie","adopte","grotesque"],
     ans:"approfondie",
     hint:"From 'approfondir' meaning to deepen. Used for thorough analysis or in-depth study."},

    {type:"teach", trg:"genevois", src:"Genevan, from Geneva", pos:"adj", gender:null,
     note:"Adjective. Relating to Geneva, Switzerland.\nFeminine: genevoise.",
     example:"A: L'accent genevois est different de l'accent parisien.\nB: Le francais suisse a ses particularites.",
     exampleSrc:"A: The Genevan accent is different from the Parisian one.\nB: Swiss French has its particularities.",
     funFact:"Geneva's French has distinct vocabulary: 'septante' (70) and 'nonante' (90) instead of 'soixante-dix' and 'quatre-vingt-dix'."},

    {type:"fb",
     s:"Une analyse {1} du probleme a revele la cause.",
     a:["approfondie"],
     opts:["approfondie","differencie","genevois","identitaire"],
     hint:"An adjective meaning thorough or in-depth, from the verb 'approfondir' (to deepen).",
     sSrc:"A thorough {1} analysis of the problem revealed the cause."},

    {type:"match", pairs:[
      {trg:"idiomatisme", src:"idiomatic expression"},
      {trg:"alteration", src:"deterioration"},
      {trg:"excoriation", src:"abrasion, harsh criticism"},
      {trg:"differencie", src:"differentiated"},
      {trg:"genevois", src:"Genevan"}
    ]},

    {type:"mc",
     q:"En francais suisse, comment dit-on soixante-dix ?",
     opts:["septante","soixante-dix","huitante","octante"],
     ans:"septante",
     hint:"Geneva uses a simpler number system than France. This word replaces the complex 'sixty-ten'."}
  ]
};
export default LESSON_18;
