const LESSON_15 = {
  id:"frv2_b2g2_l15", title:"Communication et expression", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Communication et expression",
     desc:"Build vocabulary for discussing language, communication, and self-expression. From affirmations to eloquence, from adages to rhetoric.",
     goals:["Learn 20 communication and expression terms","Discuss language and rhetoric in French","Express ideas about communication"]},

    {type:"teach", trg:"l'affirmation de soi", src:"the self-assertion", pos:"noun", gender:"f",
     note:"Feminine noun. Asserting one's own personality and rights.",
     example:"A: L'affirmation de soi est importante dans la vie professionnelle.\nB: Il faut savoir dire non.",
     exampleSrc:"A: Self-assertion is important in professional life.\nB: You need to know how to say no.",
     funFact:"A key concept in French personal development. 'S'affirmer' means to assert oneself."},

    {type:"teach", trg:"assurement", src:"surely, certainly", pos:"adv", gender:null,
     note:"Adverb. Used to express strong certainty. Formal register.",
     example:"A: C'est assurement la meilleure decision.\nB: Je n'ai aucun doute la-dessus.",
     exampleSrc:"A: It's surely the best decision.\nB: I have no doubt about it.",
     funFact:"More literary than 'certainement' or 'bien sur'. You will find it in formal speeches and essays."},

    {type:"teach", trg:"au prealable", src:"beforehand, first", pos:"adv", gender:null,
     note:"Adverbial phrase. Before doing something else.",
     example:"A: Il faut s'inscrire au prealable.\nB: Sans inscription, on ne peut pas participer.",
     exampleSrc:"A: You need to register beforehand.\nB: Without registration, you can't participate.",
     funFact:"Very formal. 'Prealable' comes from Latin 'prae' (before) + 'ambulare' (to walk). Walk before you run."},

    {type:"teach", trg:"en vigueur", src:"in force, in effect", pos:"adv", gender:null,
     note:"Adverbial phrase. Currently valid or applicable (for laws, rules).",
     example:"A: La loi en vigueur interdit cette pratique.\nB: Les contrevenants risquent une amende.",
     exampleSrc:"A: The law in force forbids this practice.\nB: Offenders risk a fine.",
     funFact:"From Latin 'vigor'. 'Entrer en vigueur' means to come into effect. A key phrase in legal French."},

    {type:"teach", trg:"en pratique", src:"in practice", pos:"adv", gender:null,
     note:"Adverbial phrase. In real-world application as opposed to theory.",
     example:"A: En theorie, c'est simple. En pratique, c'est une autre histoire.\nB: Les obstacles sont nombreux.",
     exampleSrc:"A: In theory, it's simple. In practice, it's another story.\nB: There are many obstacles.",
     funFact:"The 'theorie vs pratique' opposition is a staple of French academic discourse."},

    {type:"mc",
     q:"Quelle expression signifie 'actuellement applicable' pour une loi ?",
     opts:["en vigueur","au prealable","en pratique","assurement"],
     ans:"en vigueur",
     hint:"A law that is currently valid and being enforced. Think of 'vigor' or strength."},

    {type:"teach", trg:"en marge de", src:"on the margins of, apart from", pos:"adv", gender:null,
     note:"Adverbial phrase. On the sidelines of, or separate from the main event.",
     example:"A: En marge du sommet, des manifestations ont eu lieu.\nB: La police surveillait la situation.",
     exampleSrc:"A: On the margins of the summit, protests took place.\nB: Police were monitoring the situation.",
     funFact:"'Vivre en marge de la societe' means to live on the margins of society. A powerful sociological phrase."},

    {type:"teach", trg:"en presence de", src:"in the presence of", pos:"adv", gender:null,
     note:"Adverbial phrase. Being physically present with someone.",
     example:"A: Le contrat doit etre signe en presence de temoins.\nB: C'est une obligation legale.",
     exampleSrc:"A: The contract must be signed in the presence of witnesses.\nB: It's a legal requirement.",
     funFact:"French legal procedures often require 'en presence de' witnesses. Formality matters in French law."},

    {type:"teach", trg:"en dehors de", src:"outside of, apart from", pos:"adv", gender:null,
     note:"Adverbial phrase. Outside the limits of something.",
     example:"A: En dehors des heures de bureau, il est injoignable.\nB: C'est son droit a la deconnexion.",
     exampleSrc:"A: Outside of office hours, he's unreachable.\nB: It's his right to disconnect.",
     funFact:"'En dehors de ca' means 'apart from that'. Very common in everyday French conversation."},

    {type:"teach", trg:"de cote", src:"aside, to the side", pos:"adv", gender:null,
     note:"Adverbial phrase. To one side, or saved (money).",
     example:"A: J'ai mis un peu d'argent de cote pour les vacances.\nB: Sage decision !",
     exampleSrc:"A: I put some money aside for the holidays.\nB: Wise decision!",
     funFact:"'Mettre de cote' means to save money. 'Laisser de cote' means to leave out or ignore."},

    {type:"fb",
     s:"Le contrat doit etre signe {1} de deux temoins.",
     a:["en presence"],
     opts:["en presence","en marge","en dehors","de cote"],
     hint:"Being physically there with witnesses. A legal requirement for certain documents.",
     sSrc:"The contract must be signed {1} of two witnesses."},

    {type:"teach", trg:"de bon sens", src:"sensible, common-sense", pos:"adv", gender:null,
     note:"Adverbial phrase. In accordance with common sense.",
     example:"A: C'est une decision de bon sens.\nB: Tout le monde devrait etre d'accord.",
     exampleSrc:"A: It's a common-sense decision.\nB: Everyone should agree.",
     funFact:"Descartes wrote that bon sens is the most equally shared thing in the world. A famous opening line."},

    {type:"teach", trg:"en cadence", src:"in rhythm, rhythmically", pos:"adv", gender:null,
     note:"Adverbial phrase. Moving together in time, rhythmically.",
     example:"A: Les soldats marchent en cadence.\nB: Le bruit de leurs pas est impressionnant.",
     exampleSrc:"A: The soldiers march in rhythm.\nB: The sound of their steps is impressive.",
     funFact:"From Italian 'cadenza'. Used for both military marching and dance. 'Cadence' means rhythm in French."},

    {type:"teach", trg:"en sorte que", src:"so that, in such a way that", pos:"conj", gender:null,
     note:"Conjunction. Used to express purpose or result. Takes subjunctive for purpose.",
     example:"A: Agissez en sorte que tout soit pret a temps.\nB: Je ferai de mon mieux.",
     exampleSrc:"A: Act so that everything is ready on time.\nB: I'll do my best.",
     funFact:"Requires subjunctive when expressing purpose. Indicative when expressing result. A grammar distinction."},

    {type:"mc",
     q:"Que signifie 'mettre de cote' ?",
     opts:["economiser","jeter","partager","depenser"],
     ans:"economiser",
     hint:"To put something aside, especially money. Think of saving for a rainy day."},

    {type:"teach", trg:"au point que", src:"to the point that, so much that", pos:"conj", gender:null,
     note:"Conjunction. Expressing an extreme degree or consequence.",
     example:"A: Il pleuvait au point que les rues etaient inondees.\nB: C'etait du jamais vu.",
     exampleSrc:"A: It was raining to the point that the streets were flooded.\nB: It was unprecedented.",
     funFact:"Can take subjunctive in negative: 'pas au point que + subj'. A nuance that B2 learners must master."},

    {type:"teach", trg:"avant meme que", src:"even before", pos:"conj", gender:null,
     note:"Conjunction. Emphasizing that something happens before another event. Takes subjunctive.",
     example:"A: Avant meme qu'il parle, je savais ce qu'il allait dire.\nB: Il est tellement previsible.",
     exampleSrc:"A: Even before he spoke, I knew what he was going to say.\nB: He's so predictable.",
     funFact:"Always takes subjunctive in French. 'Meme' adds emphasis. A key B2 grammar construction."},

    {type:"teach", trg:"du fait de", src:"due to, because of", pos:"prep", gender:null,
     note:"Prepositional phrase. Expressing a cause. Formal register.",
     example:"A: Du fait de la greve, les trains sont annules.\nB: Je vais prendre le bus a la place.",
     exampleSrc:"A: Due to the strike, trains are canceled.\nB: I'll take the bus instead.",
     funFact:"More formal than 'a cause de'. Used in administrative and journalistic French. Always 'du fait de'."},

    {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"prep", gender:null,
     note:"Prepositional phrase. Expressing hope about a future outcome.",
     example:"A: Ils ont fait appel dans l'espoir de gagner.\nB: Les chances sont faibles mais reelles.",
     exampleSrc:"A: They appealed in the hope of winning.\nB: The chances are slim but real.",
     funFact:"An elegant phrase used in formal letters: 'Dans l'espoir d'une reponse favorable...'"},

    {type:"fb",
     s:"{1} la greve, tous les vols sont annules aujourd'hui.",
     a:["Du fait de"],
     opts:["Du fait de","En marge de","En presence de","En dehors de"],
     hint:"Because of, due to. A formal way to express cause. Think of 'fait' (fact).",
     sSrc:"{1} the strike, all flights are canceled today."},

    {type:"match", pairs:[
      {trg:"au prealable", src:"beforehand"},
      {trg:"en vigueur", src:"in force"},
      {trg:"de cote", src:"aside"},
      {trg:"en cadence", src:"in rhythm"},
      {trg:"dans l'espoir de", src:"in the hope of"}
    ]},

    {type:"mc",
     q:"Quelle conjonction prend TOUJOURS le subjonctif ?",
     opts:["avant meme que","au point que","en sorte que","du fait de"],
     ans:"avant meme que",
     hint:"Expressing 'even before' something happens. Time conjunctions with 'avant' need subjunctive."},

    {type:"fb",
     s:"Il faut agir {1} tout soit pret pour la ceremonie.",
     a:["en sorte que"],
     opts:["en sorte que","au point que","avant meme que","du fait de"],
     hint:"So that, in such a way that. Expressing purpose or intended result.",
     sSrc:"We must act {1} everything is ready for the ceremony."}
  ]
};
export default LESSON_15;
