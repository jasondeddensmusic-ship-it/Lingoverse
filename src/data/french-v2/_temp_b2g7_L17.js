const LESSON_17 = {
  id:"frv2_b2g7_l17", title:"Pensee abstraite", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pensee abstraite",
     desc:"Develop vocabulary for discussing abstract ideas, philosophical concepts, and intellectual debate.",
     goals:["Learn 15 words for abstract reasoning","Discuss complex concepts","Form nuanced arguments"]},

    {type:"teach", trg:"l'infidelite", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Betrayal of trust, especially in relationships.\nAlso: inaccuracy in a translation.",
     example:"A: L'infidelite a detruit leur mariage.\nB: La confiance est difficile a reconstruire.",
     exampleSrc:"A: Infidelity destroyed their marriage.\nB: Trust is hard to rebuild.",
     funFact:"'Les belles infideles' is a famous French expression for translations that are beautiful but inaccurate. Beauty vs. fidelity in translation."},

    {type:"teach", trg:"l'inefficacite", src:"inefficiency, ineffectiveness", pos:"noun", gender:"f",
     note:"Feminine noun. The state of not producing desired results.",
     example:"A: L'inefficacite de cette politique est evidente.\nB: Il faut changer de strategie.",
     exampleSrc:"A: The inefficiency of this policy is obvious.\nB: We need to change strategy.",
     funFact:"French bureaucracy is often accused of 'inefficacite'. The 'simplification administrative' is a never-ending reform effort."},

    {type:"teach", trg:"infime", src:"tiny, infinitesimal", pos:"adj", gender:null,
     note:"Adjective. Extremely small, negligible.",
     example:"A: La difference est infime.\nB: On peut considerer que c'est identique.",
     exampleSrc:"A: The difference is infinitesimal.\nB: We can consider it identical.",
     funFact:"From Latin 'infimus' meaning lowest. Not related to 'infini' (infinite) despite looking similar. A common confusion."},

    {type:"teach", trg:"la dechainement", src:"an unleashing", pos:"noun", gender:"m",
     note:"Masculine noun. A violent outburst of emotion or force.",
     example:"A: Le dechainement des elements a surpris les marins.\nB: La tempete etait imprevisible.",
     exampleSrc:"A: The unleashing of the elements surprised the sailors.\nB: The storm was unpredictable.",
     funFact:"'Se dechainer' means to go wild. From 'de-' (un-) + 'chaine' (chain). Breaking free from all restraint."},

    {type:"mc",
     q:"Quel adjectif signifie 'extremement petit, negligeable' ?",
     opts:["infime","infidele","inefficace","infini"],
     ans:"infime",
     hint:"From Latin 'infimus' (lowest). Means tiny, not infinite."},

    {type:"teach", trg:"la desillusion", src:"disillusionment", pos:"noun", gender:"f",
     note:"Feminine noun. The loss of illusions or naive hopes.",
     example:"A: La desillusion apres les elections etait grande.\nB: Les promesses n'ont pas ete tenues.",
     exampleSrc:"A: The disillusionment after the elections was great.\nB: The promises weren't kept.",
     funFact:"French literature of the 19th century (Flaubert, Balzac) is built on 'desillusion'. Characters lose their romantic ideals."},

    {type:"teach", trg:"la dissociation", src:"dissociation, separation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of separating things that were connected.\nAlso a psychological term.",
     example:"A: La dissociation entre theorie et pratique est un probleme.\nB: Il faut unir les deux.",
     exampleSrc:"A: The dissociation between theory and practice is a problem.\nB: We need to unite the two.",
     funFact:"In psychology, 'dissociation' is a defense mechanism where a person detaches from reality. In chemistry, molecules dissociate."},

    {type:"teach", trg:"la divulgation", src:"disclosure, divulgence", pos:"noun", gender:"f",
     note:"Feminine noun. The act of revealing secret or private information.",
     example:"A: La divulgation de ces documents a provoque un scandale.\nB: Quelqu'un a trahi le secret.",
     exampleSrc:"A: The disclosure of these documents caused a scandal.\nB: Someone betrayed the secret.",
     funFact:"In French law, 'divulgation de secret professionnel' (breach of professional confidentiality) is a criminal offense."},

    {type:"fb",
     s:"L'{1} de ce systeme coute des millions aux contribuables.",
     a:["inefficacite"],
     opts:["inefficacite","infidelite","infime","dissociation"],
     hint:"Not producing results, wasting resources. The opposite of efficiency.",
     sSrc:"The {1} of this system costs taxpayers millions."},

    {type:"teach", trg:"la diplomatie", src:"diplomacy", pos:"noun", gender:"f",
     note:"Feminine noun. The art of managing international relations.\nAlso: tactful behavior.",
     example:"A: La diplomatie est l'art du compromis.\nB: Parler avant de se battre.",
     exampleSrc:"A: Diplomacy is the art of compromise.\nB: Talk before fighting.",
     funFact:"French was the language of diplomacy for centuries. The word 'diplomatie' itself comes from Greek 'diploma' (folded document)."},

    {type:"teach", trg:"la classification", src:"classification", pos:"noun", gender:"f",
     note:"Feminine noun. The systematic grouping of things into categories.",
     example:"A: La classification des especes est complexe.\nB: Elle evolue avec les decouvertes genetiques.",
     exampleSrc:"A: The classification of species is complex.\nB: It evolves with genetic discoveries.",
     funFact:"Buffon, the French naturalist, created one of the first comprehensive classification systems at the Jardin des Plantes in Paris."},

    {type:"teach", trg:"la coalition", src:"a coalition", pos:"noun", gender:"f",
     note:"Feminine noun. An alliance of different groups for a common purpose.",
     example:"A: La coalition gouvernementale est fragile.\nB: Les partis ne s'entendent pas sur tout.",
     exampleSrc:"A: The government coalition is fragile.\nB: The parties don't agree on everything.",
     funFact:"France's Fifth Republic was designed to avoid unstable coalitions. Despite this, coalition governments have become more common since 2022."},

    {type:"mc",
     q:"Quel mot designe la revelation d'informations secretes ?",
     opts:["la divulgation","la dissociation","la diplomatie","la classification"],
     ans:"la divulgation",
     hint:"Making secret information public, disclosing what was hidden."},

    {type:"teach", trg:"la charte", src:"a charter", pos:"noun", gender:"f",
     note:"Feminine noun. A formal document stating principles or rights.",
     example:"A: La charte de qualite garantit nos standards.\nB: Chaque employe doit la signer.",
     exampleSrc:"A: The quality charter guarantees our standards.\nB: Every employee must sign it.",
     funFact:"France's 'Charte de la laicite' is displayed in every public school, outlining principles of secularism."},

    {type:"teach", trg:"la contraction", src:"a contraction", pos:"noun", gender:"f",
     note:"Feminine noun. A shortening or tightening.\nAlso: a summary exercise in French schools.",
     example:"A: La contraction musculaire etait douloureuse.\nB: Il faut s'etirer avant l'effort.",
     exampleSrc:"A: The muscle contraction was painful.\nB: You need to stretch before exercise.",
     funFact:"In French education, 'contraction de texte' is a formal exercise: summarizing a text to a fraction of its length. A key DELF skill."},

    {type:"fb",
     s:"La {1} entre les deux pays a evite un conflit arme.",
     a:["diplomatie"],
     opts:["diplomatie","divulgation","dissociation","classification"],
     hint:"The art of negotiation between nations to resolve disputes peacefully.",
     sSrc:"{1} between the two countries avoided an armed conflict."},

    {type:"match", pairs:[
      {trg:"infidelite", src:"unfaithfulness"},
      {trg:"infime", src:"tiny"},
      {trg:"desillusion", src:"disillusionment"},
      {trg:"coalition", src:"alliance"},
      {trg:"charte", src:"charter"}
    ]},

    {type:"mc",
     q:"Quel exercice scolaire consiste a resumer un texte en le raccourcissant ?",
     opts:["la contraction","la classification","la coalition","la charte"],
     ans:"la contraction",
     hint:"Reducing a text to a fraction of its length. A key skill for French exams."},

    {type:"fb",
     s:"La {1} gouvernementale pourrait eclater a tout moment.",
     a:["coalition"],
     opts:["coalition","contraction","charte","classification"],
     hint:"An alliance of different political parties governing together.",
     sSrc:"The government {1} could break apart at any moment."}
  ]
};
export default LESSON_17;
