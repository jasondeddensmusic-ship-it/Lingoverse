const LESSON_1 = {
  id:"frv2_b2gA_l1", title:"Persuasion et argumentation", icon:"\u{1F4E3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Persuasion et argumentation",
     desc:"Master the art of persuasion in French. Learn vocabulary for debating, convincing, and building arguments in formal and informal contexts.",
     goals:["Learn 14 persuasion and debate words","Use formal argumentation vocabulary","Express agreement and disagreement with nuance"]},

    {type:"teach", trg:"la persuasion", src:"persuasion", pos:"noun", gender:"f",
     note:"Feminine noun. The act of convincing someone through reasoning.",
     example:"A: La persuasion est un art difficile.\nB: Oui, il faut savoir choisir ses mots.",
     exampleSrc:"A: Persuasion is a difficult art.\nB: Yes, you have to know how to choose your words.",
     funFact:"From Latin 'persuasio'. French rhetoric has prized persuasion since Montaigne's essays in the 1580s."},

    {type:"teach", trg:"convaincre", src:"to convince", pos:"verb", gender:null,
     note:"Irregular verb. Past participle: convaincu(e).\nConvaincre quelqu'un de + infinitif.",
     example:"A: Tu m'as convaincu avec tes arguments.\nB: Je savais que les chiffres parleraient.",
     exampleSrc:"A: You convinced me with your arguments.\nB: I knew the numbers would speak.",
     funFact:"Shares the Latin root 'vincere' (to conquer) with 'vaincre'. To convince is literally to conquer mentally."},

    {type:"teach", trg:"la revendication", src:"the demand, the claim", pos:"noun", gender:"f",
     note:"Feminine noun. A formal demand for rights or recognition.",
     example:"A: Quelles sont vos revendications ?\nB: Nous demandons une hausse des salaires.",
     exampleSrc:"A: What are your demands?\nB: We are demanding a salary increase.",
     funFact:"Central to French labor culture. The word appears constantly during strikes and social movements."},

    {type:"teach", trg:"un plaidoyer", src:"a plea, an advocacy speech", pos:"noun", gender:"m",
     note:"Masculine noun. A passionate speech defending a cause.",
     example:"A: Son plaidoyer pour la paix a emu tout le monde.\nB: C'etait vraiment bouleversant.",
     exampleSrc:"A: His plea for peace moved everyone.\nB: It was truly overwhelming.",
     funFact:"From 'plaider' (to plead). Originally a legal term, now used for any passionate defense of a cause."},

    {type:"teach", trg:"nuancer", src:"to nuance, to qualify", pos:"verb", gender:null,
     note:"Regular -er verb. To add subtlety or shades of meaning.",
     example:"A: Il faut nuancer cette affirmation.\nB: Tu as raison, c'est plus complexe que ca.",
     exampleSrc:"A: We need to nuance this statement.\nB: You're right, it's more complex than that.",
     funFact:"French culture prizes nuance above all. 'C'est plus nuance que ca' is a classic French response."},

    {type:"mc",
     q:"Quel mot designe une demande formelle de droits ?",
     opts:["une revendication","un plaidoyer","la persuasion","un compromis"],
     ans:"une revendication",
     hint:"Think of labor strikes and social movements. Workers present their formal demands."},

    {type:"teach", trg:"un compromis", src:"a compromise", pos:"noun", gender:"m",
     note:"Masculine noun. An agreement reached by mutual concession.",
     example:"A: On a trouve un compromis acceptable.\nB: Oui, chacun a fait des concessions.",
     exampleSrc:"A: We found an acceptable compromise.\nB: Yes, everyone made concessions.",
     funFact:"Unlike English, 'compromis' in French has no negative connotation. It is seen as a sign of maturity."},

    {type:"teach", trg:"refuter", src:"to refute, to disprove", pos:"verb", gender:null,
     note:"Regular -er verb. To prove that a statement or argument is wrong.",
     example:"A: Il a refute tous les arguments de l'opposition.\nB: Sa demonstration etait imparable.",
     exampleSrc:"A: He refuted all the opposition's arguments.\nB: His demonstration was unstoppable.",
     funFact:"From Latin 'refutare' meaning to repel. Academic French uses this word frequently in thesis defenses."},

    {type:"teach", trg:"la concession", src:"the concession", pos:"noun", gender:"f",
     note:"Feminine noun. Giving up something in a negotiation.\nAlso a rhetorical device in essays.",
     example:"A: Certes, c'est un bon argument.\nB: Merci pour cette concession.",
     exampleSrc:"A: Admittedly, that's a good argument.\nB: Thank you for that concession.",
     funFact:"In French essay writing, the concession structure (certes... mais...) is a fundamental technique."},

    {type:"fb",
     s:"Il faut {1} cette affirmation, elle est trop simpliste.",
     a:["nuancer"],
     opts:["nuancer","refuter","convaincre","revendiquer"],
     hint:"To add subtlety and shades of meaning to a statement that is too black-and-white.",
     sSrc:"We need to {1} this statement, it is too simplistic."},

    {type:"teach", trg:"l'objectivite", src:"objectivity", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being unbiased and factual.",
     example:"A: Le journaliste doit garder son objectivite.\nB: C'est de plus en plus difficile.",
     exampleSrc:"A: The journalist must maintain objectivity.\nB: It's increasingly difficult.",
     funFact:"Paired with 'la subjectivite'. French philosophy has debated the possibility of true objectivity since Descartes."},

    {type:"teach", trg:"etayer", src:"to support, to shore up", pos:"verb", gender:null,
     note:"Regular -er verb. To back up with evidence. Used in construction and argumentation.",
     example:"A: Pouvez-vous etayer vos propos ?\nB: Bien sur, voici les donnees.",
     exampleSrc:"A: Can you support your claims?\nB: Of course, here are the data.",
     funFact:"Originally a construction term meaning to prop up a wall. The intellectual meaning came later."},

    {type:"teach", trg:"la polemique", src:"the controversy, the polemic", pos:"noun", gender:"f",
     note:"Feminine noun. A heated public debate or controversy.",
     example:"A: Cette loi a suscite une vive polemique.\nB: Les opinions sont tres divisees.",
     exampleSrc:"A: This law sparked a heated controversy.\nB: Opinions are very divided.",
     funFact:"From Greek 'polemikos' meaning warlike. French intellectuals have always loved a good polemique."},

    {type:"mc",
     q:"Quel verbe signifie 'prouver qu'un argument est faux' ?",
     opts:["refuter","nuancer","etayer","convaincre"],
     ans:"refuter",
     hint:"From Latin 'refutare' meaning to repel. Used especially in academic debate."},

    {type:"teach", trg:"la ponderation", src:"moderation, level-headedness", pos:"noun", gender:"f",
     note:"Feminine noun. Calm, balanced judgment. Also used in statistics for weighting.",
     example:"A: J'admire sa ponderation dans ce debat.\nB: Oui, il reste toujours calme.",
     exampleSrc:"A: I admire his level-headedness in this debate.\nB: Yes, he always stays calm.",
     funFact:"From Latin 'ponderare' meaning to weigh. A ponderous person weighs their words carefully."},

    {type:"teach", trg:"la perseverance", src:"perseverance", pos:"noun", gender:"f",
     note:"Feminine noun. Persistent determination despite obstacles.",
     example:"A: C'est grace a sa perseverance qu'il a reussi.\nB: Il n'a jamais abandonne.",
     exampleSrc:"A: It's thanks to his perseverance that he succeeded.\nB: He never gave up.",
     funFact:"One of the most valued virtues in French education. Students are told 'la perseverance paie' from primary school."},

    {type:"fb",
     s:"Pouvez-vous {1} vos arguments avec des preuves concretes ?",
     a:["etayer"],
     opts:["etayer","refuter","nuancer","convaincre"],
     hint:"To support or back up claims with evidence. Originally a construction term.",
     sSrc:"Can you {1} your arguments with concrete evidence?"},

    {type:"match", pairs:[
      {trg:"persuasion", src:"persuasion"},
      {trg:"compromis", src:"compromise"},
      {trg:"polemique", src:"controversy"},
      {trg:"concession", src:"concession"},
      {trg:"ponderation", src:"moderation"}
    ]},

    {type:"mc",
     q:"Quelle qualite designe le fait de ne jamais abandonner malgre les difficultes ?",
     opts:["la perseverance","la ponderation","l'objectivite","la concession"],
     ans:"la perseverance",
     hint:"A virtue taught from primary school. Related to the verb 'perseverer', to persist."}
  ]
};
export default LESSON_1;
