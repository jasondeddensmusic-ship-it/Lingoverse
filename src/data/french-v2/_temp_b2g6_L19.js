const LESSON_19 = {
  id:"frv2_b2g6_l19", title:"Le discours formel", icon:"\uD83C\uDF93", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le discours formel",
     desc:"Master formal academic and diplomatic vocabulary used in speeches, papers, and official communication.",
     goals:["Learn 20 formal discourse B2 words","Write and speak in academic register","Understand diplomatic vocabulary"]},

    {type:"teach", trg:"la prérogative", src:"the prerogative, the privilege", pos:"noun", gender:"f",
     note:"Feminine noun. An exclusive right or privilege linked to a function or status.",
     example:"A: C'est la prérogative du président de dissoudre l'Assemblée.\nB: C'est dans la Constitution.",
     exampleSrc:"A: It's the president's prerogative to dissolve the Assembly.\nB: It's in the Constitution.",
     funFact:"From Latin 'praerogativa'. The French president has more prerogatives than most European leaders."},

    {type:"teach", trg:"le plaidoyer", src:"the plea, the advocacy speech", pos:"noun", gender:"m",
     note:"Masculine noun. A speech defending a cause or person.",
     example:"A: Son plaidoyer pour les droits de l'homme a ému l'assemblée.\nB: Les applaudissements ont duré longtemps.",
     exampleSrc:"A: His plea for human rights moved the assembly.\nB: The applause lasted a long time.",
     funFact:"From 'plaider' (to plead). 'Plaidoyer' is the defense speech; 'réquisitoire' is the prosecution's."},

    {type:"teach", trg:"le réquisitoire", src:"the indictment speech, the prosecution", pos:"noun", gender:"m",
     note:"Masculine noun. The prosecution's closing argument, or a fierce criticism.",
     example:"A: Le réquisitoire du procureur a été sévère.\nB: Il a demandé dix ans de prison.",
     exampleSrc:"A: The prosecutor's closing argument was severe.\nB: He asked for ten years in prison.",
     funFact:"Used figuratively: 'un réquisitoire contre la société' is a scathing indictment of society."},

    {type:"teach", trg:"la cohérence", src:"the coherence, the consistency", pos:"noun", gender:"f",
     note:"Feminine noun. Logical consistency between parts of an argument or plan.",
     example:"A: La cohérence de son raisonnement est impressionnante.\nB: Chaque argument s'enchaîne logiquement.",
     exampleSrc:"A: The coherence of his reasoning is impressive.\nB: Each argument follows logically.",
     funFact:"'Manque de cohérence' (lack of coherence) is a devastating criticism in French academic culture."},

    {type:"mc",
     q:"Quel mot désigne le discours de l'accusation au tribunal ?",
     opts:["le réquisitoire","le plaidoyer","la prérogative","la cohérence"],
     ans:"le réquisitoire",
     hint:"The prosecution's closing argument. The opposite of 'plaidoyer' (defense speech)."},

    {type:"teach", trg:"la concertation", src:"the consultation, the dialogue", pos:"noun", gender:"f",
     note:"Feminine noun. A discussion between parties to reach agreement.",
     example:"A: La concertation avec les syndicats est indispensable.\nB: On ne peut pas décider sans eux.",
     exampleSrc:"A: Consultation with the unions is essential.\nB: We can't decide without them.",
     funFact:"'Concertation sociale' is the French model of dialogue between employers, unions, and government."},

    {type:"teach", trg:"la prémisse", src:"the premise", pos:"noun", gender:"f",
     note:"Feminine noun. A foundational statement from which a conclusion is drawn.",
     example:"A: Si la prémisse est fausse, la conclusion l'est aussi.\nB: Il faut vérifier les bases.",
     exampleSrc:"A: If the premise is false, the conclusion is too.\nB: We need to check the foundations.",
     funFact:"From Latin 'praemissa' meaning sent before. Essential in French philosophical argumentation."},

    {type:"teach", trg:"la synthèse", src:"the synthesis, the summary", pos:"noun", gender:"f",
     note:"Feminine noun. Combining ideas into a whole, or a concise summary.",
     example:"A: Pouvez-vous faire une synthèse de ce rapport ?\nB: Oui, en deux pages maximum.",
     exampleSrc:"A: Can you make a summary of this report?\nB: Yes, two pages maximum.",
     funFact:"The 'note de synthèse' is a key exercise in French civil service exams. Synthesis = combining, not just summarizing."},

    {type:"fb",
     s:"Son {1} en faveur de l'environnement a convaincu le jury.",
     a:["plaidoyer"],
     opts:["plaidoyer","réquisitoire","synthèse","concertation"],
     hint:"A speech defending a cause. From 'plaider' meaning to plead or advocate.",
     sSrc:"His {1} in favor of the environment convinced the jury."},

    {type:"teach", trg:"la nuance", src:"the nuance, the shade", pos:"noun", gender:"f",
     note:"Feminine noun. A subtle difference in meaning, color, or opinion.",
     example:"A: Il faut apporter des nuances à cette analyse.\nB: Tout n'est pas noir ou blanc.",
     exampleSrc:"A: We need to bring nuances to this analysis.\nB: Not everything is black and white.",
     funFact:"French intellectual culture prizes nuance above all. 'Un esprit nuancé' is the highest compliment."},

    {type:"teach", trg:"la rigueur", src:"the rigor, the strictness", pos:"noun", gender:"f",
     note:"Feminine noun. Strict precision, or in 'à la rigueur' meaning if absolutely necessary.",
     example:"A: La rigueur scientifique est essentielle.\nB: Chaque expérience doit être reproductible.",
     exampleSrc:"A: Scientific rigor is essential.\nB: Every experiment must be reproducible.",
     funFact:"'À la rigueur' is a common hedge: 'I suppose, if really necessary.' 'La politique de rigueur' means austerity."},

    {type:"teach", trg:"l'ambiguïté", src:"the ambiguity", pos:"noun", gender:"f",
     note:"Feminine noun. Having multiple possible interpretations. Note the diaeresis on the i.",
     example:"A: L'ambiguïté de sa réponse est troublante.\nB: On ne sait pas ce qu'il veut dire.",
     exampleSrc:"A: The ambiguity of his answer is troubling.\nB: We don't know what he means.",
     funFact:"The tréma (diaeresis) on the 'i' forces separate pronunciation: am-bi-gu-i-té, not am-bi-gwi-té."},

    {type:"mc",
     q:"Que signifie 'à la rigueur' ?",
     opts:["De manière approximative","Si c'est vraiment nécessaire","Avec sévérité","Sans hésitation"],
     ans:"Si c'est vraiment nécessaire",
     hint:"A hedging expression. Literally 'at the rigor', meaning if you absolutely must."},

    {type:"teach", trg:"la pertinence", src:"the relevance, the appropriateness", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being directly relevant and well-chosen.",
     example:"A: La pertinence de votre remarque est indéniable.\nB: Vous avez touché le point essentiel.",
     exampleSrc:"A: The relevance of your remark is undeniable.\nB: You've touched on the essential point.",
     funFact:"In French, 'pertinent' always means relevant/appropriate. It NEVER means impertinent or rude."},

    {type:"teach", trg:"la réciprocité", src:"the reciprocity", pos:"noun", gender:"f",
     note:"Feminine noun. Mutual exchange or matching response between parties.",
     example:"A: La réciprocité est la base d'une bonne relation.\nB: Il faut donner autant qu'on reçoit.",
     exampleSrc:"A: Reciprocity is the foundation of a good relationship.\nB: You need to give as much as you receive.",
     funFact:"A key principle in French diplomacy and trade negotiations. 'Clause de réciprocité' is standard in treaties."},

    {type:"teach", trg:"la probité", src:"the probity, the integrity", pos:"noun", gender:"f",
     note:"Feminine noun. Honesty and moral uprightness. Very formal register.",
     example:"A: Sa probité est reconnue de tous.\nB: Personne ne doute de son honnêteté.",
     exampleSrc:"A: His integrity is recognized by all.\nB: Nobody doubts his honesty.",
     funFact:"A requirement for French public officials. 'Haute Autorité pour la transparence de la vie publique' monitors it."},

    {type:"fb",
     s:"L'{1} de cette phrase rend l'interprétation difficile.",
     a:["ambiguïté"],
     opts:["ambiguïté","pertinence","cohérence","nuance"],
     hint:"Having multiple possible meanings. Note the special diaeresis mark on this word.",
     sSrc:"The {1} of this sentence makes interpretation difficult."},

    {type:"teach", trg:"la polémique", src:"the controversy, the polemic", pos:"noun", gender:"f",
     note:"Feminine noun. A heated public debate or controversy.",
     example:"A: La polémique autour de cette loi ne s'arrête pas.\nB: Chaque parti a son opinion.",
     exampleSrc:"A: The controversy around this law won't stop.\nB: Each party has its opinion.",
     funFact:"From Greek 'polemikos' (warlike). The French love a good 'polémique'. Debate is a national sport."},

    {type:"teach", trg:"la rhétorique", src:"the rhetoric", pos:"noun", gender:"f",
     note:"Feminine noun. The art of persuasive speaking or writing.",
     example:"A: Sa rhétorique est brillante mais creuse.\nB: Beaucoup de mots, peu d'idées.",
     exampleSrc:"A: His rhetoric is brilliant but hollow.\nB: Many words, few ideas.",
     funFact:"Rhetoric was a core subject in French education until the 1900s. Voltaire and Rousseau were master rhetoricians."},

    {type:"match", pairs:[
      {trg:"cohérence", src:"coherence"},
      {trg:"nuance", src:"nuance, shade"},
      {trg:"pertinence", src:"relevance"},
      {trg:"probité", src:"integrity"},
      {trg:"rhétorique", src:"rhetoric"}
    ]},

    {type:"mc",
     q:"Quel mot français désigne l'art de persuader par le discours ?",
     opts:["la synthèse","la concertation","la rhétorique","la polémique"],
     ans:"la rhétorique",
     hint:"From Greek, meaning the art of persuasive speech. A classical discipline still valued in France."},

    {type:"fb",
     s:"La {1} avec les partenaires sociaux a permis de trouver un compromis.",
     a:["concertation"],
     opts:["concertation","polémique","prérogative","réciprocité"],
     hint:"A structured dialogue between parties to reach agreement, especially in French social model.",
     sSrc:"The {1} with social partners made it possible to find a compromise."}
  ]
};
export default LESSON_19;
