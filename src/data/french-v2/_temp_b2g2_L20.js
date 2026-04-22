const LESSON_20 = {
  id:"frv2_b2g2_l20", title:"Philosophie et pensee", icon:"\u{1F4D6}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Philosophie et pensee",
     desc:"Explore the vocabulary of philosophy, critical thinking, and intellectual life. From existentialism to enlightenment, from paradox to paradigm.",
     goals:["Learn 20 philosophy and thought terms","Discuss abstract ideas in French","Express philosophical concepts"]},

    {type:"teach", trg:"l'existentialisme", src:"the existentialism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy that emphasizes individual freedom and choice.",
     example:"A: L'existentialisme a domine la pensee francaise d'apres-guerre.\nB: Sartre et Beauvoir en etaient les figures centrales.",
     exampleSrc:"A: Existentialism dominated postwar French thought.\nB: Sartre and Beauvoir were its central figures.",
     funFact:"Sartre's 'L'existence precede l'essence' is the core idea. You create yourself through your choices."},

    {type:"teach", trg:"le paradoxe", src:"the paradox", pos:"noun", gender:"m",
     note:"Masculine noun. A statement that seems contradictory but may be true.",
     example:"A: C'est le paradoxe de la tolerance.\nB: Tolerer l'intolerance, est-ce vraiment de la tolerance ?",
     exampleSrc:"A: It's the paradox of tolerance.\nB: Is tolerating intolerance really tolerance?",
     funFact:"Pascal's paradoxes are studied in every French philosophy class. The French love intellectual contradictions."},

    {type:"teach", trg:"le paradigme", src:"the paradigm", pos:"noun", gender:"m",
     note:"Masculine noun. A model or framework for understanding something.",
     example:"A: Internet a cree un nouveau paradigme de communication.\nB: Tout a change en vingt ans.",
     exampleSrc:"A: The internet created a new communication paradigm.\nB: Everything changed in twenty years.",
     funFact:"Thomas Kuhn's 'changement de paradigme' (paradigm shift) is a staple of French academic writing."},

    {type:"teach", trg:"l'humanisme", src:"the humanism", pos:"noun", gender:"m",
     note:"Masculine noun. A philosophy centered on human dignity and potential.",
     example:"A: L'humanisme de la Renaissance a transforme l'Europe.\nB: L'individu est devenu le centre de la pensee.",
     exampleSrc:"A: Renaissance humanism transformed Europe.\nB: The individual became the center of thought.",
     funFact:"Montaigne and Rabelais are pillars of French humanism. Their works are still mandatory school reading."},

    {type:"teach", trg:"la dialectique", src:"the dialectic", pos:"noun", gender:"f",
     note:"Feminine noun. A method of reasoning through thesis, antithesis, and synthesis.",
     example:"A: La dialectique hegelienne structure la pensee philosophique.\nB: These, antithese, synthese.",
     exampleSrc:"A: Hegelian dialectic structures philosophical thought.\nB: Thesis, antithesis, synthesis.",
     funFact:"French students learn dialectic reasoning through the 'dissertation', a structured essay form taught from age 15."},

    {type:"mc",
     q:"Quelle philosophie affirme que 'l'existence precede l'essence' ?",
     opts:["l'existentialisme","l'humanisme","le rationalisme","le positivisme"],
     ans:"l'existentialisme",
     hint:"The philosophy of Sartre and Beauvoir. You are defined by your choices, not your nature."},

    {type:"teach", trg:"le rationalisme", src:"the rationalism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy that reason is the primary source of knowledge.",
     example:"A: Descartes est le pere du rationalisme moderne.\nB: 'Je pense, donc je suis.'",
     exampleSrc:"A: Descartes is the father of modern rationalism.\nB: 'I think, therefore I am.'",
     funFact:"France considers itself the land of Reason. Descartes' 'Discours de la methode' (1637) is foundational."},

    {type:"teach", trg:"l'ethique", src:"the ethics", pos:"noun", gender:"f",
     note:"Feminine noun. The branch of philosophy dealing with right and wrong.",
     example:"A: Les questions d'ethique sont au coeur du debat medical.\nB: L'euthanasie divise profondement.",
     exampleSrc:"A: Ethical questions are at the heart of the medical debate.\nB: Euthanasia is deeply divisive.",
     funFact:"France has a 'Comite consultatif national d'ethique' (CCNE) that advises on bioethics. Created in 1983."},

    {type:"teach", trg:"la metaphysique", src:"the metaphysics", pos:"noun", gender:"f",
     note:"Feminine noun. The branch of philosophy dealing with the nature of reality.",
     example:"A: La metaphysique pose les grandes questions de l'existence.\nB: Pourquoi y a-t-il quelque chose plutot que rien ?",
     exampleSrc:"A: Metaphysics asks the big questions of existence.\nB: Why is there something rather than nothing?",
     funFact:"Leibniz asked the ultimate metaphysical question in French philosophical tradition. It remains unanswered."},

    {type:"teach", trg:"l'epistemologie", src:"the epistemology", pos:"noun", gender:"f",
     note:"Feminine noun. The study of knowledge, how we know what we know.",
     example:"A: L'epistemologie examine les fondements de la connaissance.\nB: Peut-on vraiment 'savoir' quelque chose ?",
     exampleSrc:"A: Epistemology examines the foundations of knowledge.\nB: Can we really 'know' anything?",
     funFact:"Bachelard and Foucault shaped French epistemology. It is a required subject in French philosophy programs."},

    {type:"fb",
     s:"Descartes est considere comme le pere du {1} moderne.",
     a:["rationalisme"],
     opts:["rationalisme","existentialisme","humanisme","paradigme"],
     hint:"The philosophy that reason is the main source of knowledge. 'I think, therefore I am.'",
     sSrc:"Descartes is considered the father of modern {1}."},

    {type:"teach", trg:"le determinisme", src:"the determinism", pos:"noun", gender:"m",
     note:"Masculine noun. The idea that all events are determined by prior causes.",
     example:"A: Le determinisme social conditionne-t-il notre destin ?\nB: Nous avons aussi le libre arbitre.",
     exampleSrc:"A: Does social determinism condition our destiny?\nB: We also have free will.",
     funFact:"Bourdieu's sociological determinism vs Sartre's existential freedom is a defining French intellectual debate."},

    {type:"teach", trg:"le libre arbitre", src:"the free will", pos:"noun", gender:"m",
     note:"Masculine noun. The power to make choices independently.",
     example:"A: Le libre arbitre est un concept central en philosophie.\nB: Sommes-nous vraiment libres de nos choix ?",
     exampleSrc:"A: Free will is a central concept in philosophy.\nB: Are we truly free in our choices?",
     funFact:"Sartre insisted on radical freedom. Even choosing not to choose is a choice. A very French argument."},

    {type:"teach", trg:"l'altruisme", src:"the altruism", pos:"noun", gender:"m",
     note:"Masculine noun. Selfless concern for the well-being of others.",
     example:"A: L'altruisme est-il naturel ou appris ?\nB: Les deux, selon la plupart des psychologues.",
     exampleSrc:"A: Is altruism natural or learned?\nB: Both, according to most psychologists.",
     funFact:"Auguste Comte, a Frenchman, coined the word 'altruisme' in the 1830s. He invented the concept."},

    {type:"mc",
     q:"Qui a invente le mot 'altruisme' ?",
     opts:["Michel Foucault","Auguste Comte","Jean-Paul Sartre","Rene Descartes"],
     ans:"Auguste Comte",
     hint:"A French philosopher from the 1830s who also founded positivism."},

    {type:"teach", trg:"le nihilisme", src:"the nihilism", pos:"noun", gender:"m",
     note:"Masculine noun. The rejection of all moral and religious principles.",
     example:"A: Le nihilisme rejette toute valeur morale absolue.\nB: Nietzsche en a explore les consequences.",
     exampleSrc:"A: Nihilism rejects all absolute moral values.\nB: Nietzsche explored its consequences.",
     funFact:"Camus' 'L'Etranger' is often read as a nihilist novel. Meursault's indifference shocked France in 1942."},

    {type:"teach", trg:"l'absurde", src:"the absurd", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophical concept of meaninglessness in existence.",
     example:"A: Camus a fait de l'absurde le coeur de sa philosophie.\nB: 'Il faut imaginer Sisyphe heureux.'",
     exampleSrc:"A: Camus made the absurd the heart of his philosophy.\nB: 'We must imagine Sisyphus happy.'",
     funFact:"Camus' 'Le Mythe de Sisyphe' argues life has no inherent meaning, but we create our own. Very French."},

    {type:"teach", trg:"la transcendance", src:"the transcendence", pos:"noun", gender:"f",
     note:"Feminine noun. Going beyond ordinary experience or limitations.",
     example:"A: La musique offre une forme de transcendance.\nB: Elle nous transporte au-dela du quotidien.",
     exampleSrc:"A: Music offers a form of transcendence.\nB: It carries us beyond the everyday.",
     funFact:"Kant's distinction between transcendant and transcendantal is a key exam topic in French philosophy."},

    {type:"teach", trg:"l'empirisme", src:"the empiricism", pos:"noun", gender:"m",
     note:"Masculine noun. The theory that knowledge comes from sensory experience.",
     example:"A: L'empirisme s'oppose au rationalisme.\nB: L'experience compte plus que la raison pure.",
     exampleSrc:"A: Empiricism opposes rationalism.\nB: Experience matters more than pure reason.",
     funFact:"Condillac brought empiricism to France. French philosophy traditionally favors rationalism over empiricism."},

    {type:"fb",
     s:"Camus a fait de l'{1} le theme central de son oeuvre.",
     a:["absurde"],
     opts:["absurde","ethique","altruisme","empirisme"],
     hint:"The philosophical concept that life has no inherent meaning. Think of Sisyphus.",
     sSrc:"Camus made the {1} the central theme of his work."},

    {type:"match", pairs:[
      {trg:"paradoxe", src:"paradox"},
      {trg:"dialectique", src:"dialectic"},
      {trg:"determinisme", src:"determinism"},
      {trg:"nihilisme", src:"nihilism"},
      {trg:"transcendance", src:"transcendence"}
    ]},

    {type:"mc",
     q:"Quel philosophe francais a ecrit 'Le Mythe de Sisyphe' ?",
     opts:["Descartes","Voltaire","Camus","Sartre"],
     ans:"Camus",
     hint:"The Nobel Prize-winning author who explored the philosophy of the absurd."},

    {type:"fb",
     s:"Le debat entre {1} et rationalisme anime la philosophie depuis des siecles.",
     a:["empirisme"],
     opts:["empirisme","nihilisme","altruisme","determinisme"],
     hint:"The theory that knowledge comes from sensory experience, opposed to pure reason.",
     sSrc:"The debate between {1} and rationalism has animated philosophy for centuries."}
  ]
};
export default LESSON_20;
