const LESSON_5 = {
  id:"frv2_b2g8_l5", title:"Caractère et comportement", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Caractère et comportement",
     desc:"Vocabulary for describing personality traits, attitudes, and behavioral patterns at B2 level.",
     goals:["Learn 15 character and behavior words","Describe people with nuance","Use adjectives and nouns for personality"]},

    {type:"teach", trg:"narquois", src:"mocking, sardonic", pos:"adj", gender:null,
     note:"Adjective. Describes a sly, sneering attitude.\nFeminine: narquoise.",
     example:"A: Il avait un sourire narquois.\nB: Oui, il se moquait de nous.",
     exampleSrc:"A: He had a mocking smile.\nB: Yes, he was making fun of us.",
     funFact:"From Old French 'narquois' meaning rogue. The word has kept its sneaky, cunning overtone."},

    {type:"teach", trg:"la grossièreté", src:"the rudeness, the vulgarity", pos:"noun", gender:"f",
     note:"Feminine noun. Rude or vulgar behavior.\nFrom 'grossier' (coarse).",
     example:"A: Sa grossièreté est inacceptable.\nB: Il devrait s'excuser.",
     exampleSrc:"A: His rudeness is unacceptable.\nB: He should apologize.",
     funFact:"French etiquette is legendary. 'Grossièreté' is considered one of the worst social sins."},

    {type:"teach", trg:"la malhonnêteté", src:"the dishonesty", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being dishonest.\n'Mal' + 'honnêteté'.",
     example:"A: La malhonnêteté ne paie jamais.\nB: Tôt ou tard, la vérité éclate.",
     exampleSrc:"A: Dishonesty never pays.\nB: Sooner or later, the truth comes out.",
     funFact:"Built from 'mal' (bad) + 'honnêteté' (honesty). French loves this kind of prefix negation."},

    {type:"teach", trg:"la niaiserie", src:"the foolishness, the silliness", pos:"noun", gender:"f",
     note:"Feminine noun. Naive stupidity or silly behavior.\nFrom 'niais' (naive, foolish).",
     example:"A: Arrête tes niaiseries !\nB: D'accord, je serai sérieux.",
     exampleSrc:"A: Stop your foolishness!\nB: Okay, I'll be serious.",
     funFact:"In Quebec, 'niaiser' is a very common verb meaning to fool around or waste time."},

    {type:"mc",
     q:"Quel adjectif décrit un sourire moqueur et sournois ?",
     opts:["narquois","momentané","naval","méridional"],
     ans:"narquois",
     hint:"A sly, sneering quality. From Old French for 'rogue'. Think of a cunning smile."},

    {type:"teach", trg:"momentané", src:"momentary, temporary", pos:"adj", gender:null,
     note:"Adjective. Lasting only a short time.\nFeminine: momentanée.",
     example:"A: C'est un problème momentané.\nB: Ça devrait se résoudre rapidement.",
     exampleSrc:"A: It's a momentary problem.\nB: It should resolve quickly.",
     funFact:"From Latin 'momentum'. The French say 'panne momentanée' for a temporary outage."},

    {type:"teach", trg:"l'agressivité", src:"aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. Hostile or violent behavior.\nCan be physical or verbal.",
     example:"A: Son agressivité inquiète ses collègues.\nB: Il devrait consulter quelqu'un.",
     exampleSrc:"A: His aggressiveness worries his colleagues.\nB: He should see someone.",
     funFact:"French psychologists distinguish 'agressivité' (tendency) from 'agression' (specific act)."},

    {type:"teach", trg:"l'inefficacité", src:"the inefficiency", pos:"noun", gender:"f",
     note:"Feminine noun. The state of not producing desired results.\n'In' + 'efficacité'.",
     example:"A: L'inefficacité du système est flagrante.\nB: Il faut tout réformer.",
     exampleSrc:"A: The inefficiency of the system is blatant.\nB: Everything needs to be reformed.",
     funFact:"French bureaucracy is both admired for thoroughness and criticized for 'inefficacité'."},

    {type:"fb",
     s:"Sa {1} est inacceptable, il devrait s'excuser.",
     a:["grossièreté"],
     opts:["grossièreté","niaiserie","agressivité","malhonnêteté"],
     hint:"Rude or vulgar behavior. From the adjective meaning coarse or crude.",
     sSrc:"His {1} is unacceptable, he should apologize."},

    {type:"teach", trg:"la médiocrité", src:"mediocrity", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being average or uninspired.\nStronger criticism in French.",
     example:"A: Je refuse la médiocrité.\nB: Tu as raison, visons l'excellence.",
     exampleSrc:"A: I refuse mediocrity.\nB: You're right, let's aim for excellence.",
     funFact:"In French culture, calling something 'médiocre' is a devastating judgment, worse than in English."},

    {type:"teach", trg:"l'infidélité", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Betrayal of trust, especially in relationships.\n'In' + 'fidélité'.",
     example:"A: L'infidélité a détruit leur couple.\nB: La confiance est difficile à reconstruire.",
     exampleSrc:"A: Infidelity destroyed their relationship.\nB: Trust is hard to rebuild.",
     funFact:"France is often stereotyped for tolerance of infidelity, but surveys show attitudes are actually shifting."},

    {type:"teach", trg:"la guise", src:"the manner, the way", pos:"noun", gender:"f",
     note:"Feminine noun. Mostly used in 'en guise de' (by way of) or 'à sa guise' (as one pleases).",
     example:"A: Il fait tout à sa guise.\nB: Il n'écoute jamais les autres.",
     exampleSrc:"A: He does everything as he pleases.\nB: He never listens to others.",
     funFact:"Almost never used alone. 'En guise de' is the key expression, meaning 'as a substitute for'."},

    {type:"mc",
     q:"Quel mot signifie 'le manque d'efficacité' ?",
     opts:["médiocrité","inefficacité","infidélité","agressivité"],
     ans:"inefficacité",
     hint:"The prefix 'in-' negates 'efficacité'. Not about being unfaithful or mediocre."},

    {type:"teach", trg:"l'atrocité", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel act.\nPlural: des atrocités.",
     example:"A: Les atrocités de la guerre sont inimaginables.\nB: Plus jamais ça.",
     exampleSrc:"A: The atrocities of war are unimaginable.\nB: Never again.",
     funFact:"'Atroce' (atrocious) is commonly used in casual French for terrible pain: 'J'ai mal, c'est atroce!'"},

    {type:"teach", trg:"observateur", src:"observant, perceptive", pos:"adj", gender:null,
     note:"Adjective. Also a noun: un observateur (an observer).\nFeminine: observatrice.",
     example:"A: Tu es très observateur.\nB: Je remarque beaucoup de détails.",
     exampleSrc:"A: You're very observant.\nB: I notice a lot of details.",
     funFact:"'L'Observateur' is a common name for French newspapers, reflecting the value placed on keen observation."},

    {type:"teach", trg:"onéreux", src:"expensive, costly", pos:"adj", gender:null,
     note:"Adjective. Formal word for expensive.\nFeminine: onéreuse. More formal than 'cher'.",
     example:"A: Ce traitement est très onéreux.\nB: L'assurance couvre une partie.",
     exampleSrc:"A: This treatment is very expensive.\nB: Insurance covers part of it.",
     funFact:"From Latin 'onerosus' meaning burdensome. Used in legal contracts and formal writing."},

    {type:"fb",
     s:"Il fait tout à sa {1}, il n'écoute jamais personne.",
     a:["guise"],
     opts:["guise","médiocrité","grossièreté","atrocité"],
     hint:"A word meaning manner or way. Used in the expression meaning 'as one pleases'.",
     sSrc:"He does everything as he {1}, he never listens to anyone."},

    {type:"match", pairs:[
      {trg:"narquois", src:"mocking, sardonic"},
      {trg:"médiocrité", src:"mediocrity"},
      {trg:"onéreux", src:"expensive"},
      {trg:"atrocité", src:"atrocity"},
      {trg:"momentané", src:"momentary"}
    ]},

    {type:"mc",
     q:"Quel mot est un synonyme formel de 'cher' ?",
     opts:["momentané","observateur","onéreux","narquois"],
     ans:"onéreux",
     hint:"From Latin 'onerosus' meaning burdensome. Used in formal and legal language."},

    {type:"fb",
     s:"Les {1} de la guerre sont inimaginables.",
     a:["atrocités"],
     opts:["atrocités","niaiseries","médiocrités","grossièretés"],
     hint:"Extremely cruel acts. The singular form describes a single horrific event.",
     sSrc:"The {1} of war are unimaginable."}
  ]
};
export default LESSON_5;
