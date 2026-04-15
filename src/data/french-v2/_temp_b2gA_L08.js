const LESSON_8 = {
  id:"frv2_b2gA_l8", title:"Expressions adverbiales", icon:"\u{1F4CD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions adverbiales",
     desc:"Master advanced adverbial expressions that add nuance and precision to your French. Essential for B2 fluency.",
     goals:["Learn 14 adverbial expressions","Add nuance to opinions and descriptions","Use formal register markers fluently"]},

    {type:"teach", trg:"pour de bon", src:"for real, for good", pos:"adv", gender:null,
     note:"Adverbial expression. Means seriously, genuinely, or permanently.",
     example:"A: Cette fois, c'est pour de bon.\nB: Tu es sur de toi ?",
     exampleSrc:"A: This time, it's for real.\nB: Are you sure?",
     funFact:"Very common in spoken French. 'C'est pour de bon ?' is how children check if something is real or pretend."},

    {type:"teach", trg:"pour le coup", src:"in this case, this time around", pos:"adv", gender:null,
     note:"Adverbial expression. Used to highlight a specific instance or contrast.",
     example:"A: Pour le coup, je suis d'accord avec toi.\nB: Ca n'arrive pas souvent !",
     exampleSrc:"A: In this case, I agree with you.\nB: That doesn't happen often!",
     funFact:"Extremely frequent in conversational French. Signals that something is different from the usual pattern."},

    {type:"teach", trg:"pour le reste", src:"as for the rest", pos:"adv", gender:null,
     note:"Adverbial expression. Used to address remaining points or dismiss them.",
     example:"A: Le projet avance bien. Pour le reste, on verra.\nB: D'accord, une chose a la fois.",
     exampleSrc:"A: The project is going well. As for the rest, we'll see.\nB: Okay, one thing at a time.",
     funFact:"A classic French way to wrap up a topic and move on. Signals confidence about the main point."},

    {type:"teach", trg:"pour peu que", src:"if only, provided that (+ subjunctive)", pos:"conj", gender:null,
     note:"Conjunction. Requires the subjunctive. Means 'as long as' or 'if only'.",
     example:"A: Pour peu qu'il pleuve, tout sera annule.\nB: Esperons qu'il fera beau.",
     exampleSrc:"A: If it rains at all, everything will be canceled.\nB: Let's hope the weather will be nice.",
     funFact:"Triggers the subjunctive, which makes it a B2 grammar test favorite. 'Pour peu que + subjonctif' is a classic."},

    {type:"teach", trg:"jusqu'au bout", src:"to the very end, all the way", pos:"adv", gender:null,
     note:"Adverbial expression. Means completely, to the finish.\n'Aller jusqu'au bout' = to see it through.",
     example:"A: Il faut aller jusqu'au bout de ce projet.\nB: Oui, on ne peut pas abandonner maintenant.",
     exampleSrc:"A: We need to see this project through to the end.\nB: Yes, we can't give up now.",
     funFact:"'Jusqu'au bout' is a rallying cry in French culture. Marathon runners, activists, and students all use it."},

    {type:"mc",
     q:"Quelle expression signifie 'pour de vrai, serieusement' ?",
     opts:["pour de bon","pour le coup","pour le reste","pour peu que"],
     ans:"pour de bon",
     hint:"Children ask this to check if something is real. It means genuinely or permanently."},

    {type:"teach", trg:"la-dessus", src:"on that matter, thereupon", pos:"adv", gender:null,
     note:"Adverb. Refers to a topic just mentioned. Also literally: 'on top of that'.",
     example:"A: La-dessus, je ne suis pas d'accord.\nB: Explique-moi ton point de vue.",
     exampleSrc:"A: On that matter, I disagree.\nB: Explain your point of view to me.",
     funFact:"Part of a family: la-dessus (on that), la-dessous (under that), la-dedans (in there). Very useful in debates."},

    {type:"teach", trg:"la-dedans", src:"in there, in that", pos:"adv", gender:null,
     note:"Adverb. Inside something, or involved in a matter.",
     example:"A: Qu'est-ce qu'il y a la-dedans ?\nB: Rien de special, juste de vieux papiers.",
     exampleSrc:"A: What's in there?\nB: Nothing special, just old papers.",
     funFact:"Can be literal (inside a box) or figurative (involved in an affair). 'Je ne veux rien avoir la-dedans.'"},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms", pos:"adv", gender:null,
     note:"Adverbial expression. Speaking theoretically, without considering context.",
     example:"A: Dans l'absolu, tu as raison.\nB: Mais en pratique, c'est plus complique.",
     exampleSrc:"A: In absolute terms, you're right.\nB: But in practice, it's more complicated.",
     funFact:"A sophisticated expression for academic discussion. Signals that you acknowledge the theory but want to discuss reality."},

    {type:"fb",
     s:"Il faut aller {1} de ce projet, on ne peut pas abandonner.",
     a:["jusqu'au bout"],
     opts:["jusqu'au bout","pour de bon","la-dessus","dans l'absolu"],
     hint:"To the very end, all the way through. A rallying expression for perseverance.",
     sSrc:"We need to go {1} with this project, we can't give up."},

    {type:"teach", trg:"par moments", src:"at times, from time to time", pos:"adv", gender:null,
     note:"Adverbial expression. Describes intermittent occurrences.\nMore literary than 'parfois'.",
     example:"A: Par moments, je doute de moi.\nB: C'est normal, tout le monde doute.",
     exampleSrc:"A: At times, I doubt myself.\nB: That's normal, everyone doubts.",
     funFact:"Slightly more elegant than 'parfois' or 'de temps en temps'. Often used in literary or reflective contexts."},

    {type:"teach", trg:"en marge de", src:"on the margins of, alongside", pos:"prep", gender:null,
     note:"Prepositional expression. Outside the main activity. Also: on the sidelines.",
     example:"A: En marge du sommet, ils ont signe un accord.\nB: C'etait une reunion informelle.",
     exampleSrc:"A: On the margins of the summit, they signed an agreement.\nB: It was an informal meeting.",
     funFact:"Journalists love this expression. Side meetings 'en marge de' conferences often produce the real news."},

    {type:"teach", trg:"non moins", src:"no less, equally", pos:"adv", gender:null,
     note:"Adverb. Used for emphasis to say something is equally important.",
     example:"A: C'est un artiste talentueux et non moins courageux.\nB: Oui, il prend des risques.",
     exampleSrc:"A: He's a talented and no less courageous artist.\nB: Yes, he takes risks.",
     funFact:"Very formal register. Used in academic writing and elevated speech to add dignified emphasis."},

    {type:"mc",
     q:"Quelle expression signifie 'en theorie, sans tenir compte du contexte' ?",
     opts:["dans l'absolu","la-dessus","par moments","non moins"],
     ans:"dans l'absolu",
     hint:"A phrase for abstract, theoretical discussion. Contrasts with 'en pratique'."},

    {type:"teach", trg:"d'ailleurs", src:"moreover, by the way", pos:"adv", gender:null,
     note:"Adverb. Adds related information. Can also mean 'besides' or 'incidentally'.",
     example:"A: Il est intelligent, d'ailleurs il a ete premier de sa classe.\nB: Ca ne m'etonne pas.",
     exampleSrc:"A: He's intelligent; moreover, he was first in his class.\nB: That doesn't surprise me.",
     funFact:"One of the most versatile French connectors. Can introduce a new point, a proof, or a casual aside."},

    {type:"fb",
     s:"{1} du festival, des concerts gratuits etaient organises en ville.",
     a:["En marge"],
     opts:["En marge","Par moments","D'ailleurs","Non moins"],
     hint:"On the sidelines or alongside the main event. Think of side activities.",
     sSrc:"{1} of the festival, free concerts were organized in town."},

    {type:"match", pairs:[
      {trg:"pour de bon", src:"for real"},
      {trg:"jusqu'au bout", src:"to the very end"},
      {trg:"la-dedans", src:"in there"},
      {trg:"par moments", src:"at times"},
      {trg:"d'ailleurs", src:"moreover"}
    ]},

    {type:"mc",
     q:"Quelle conjonction exige le subjonctif et signifie 'a condition que, pour peu que' ?",
     opts:["pour peu que","pour le coup","pour de bon","pour le reste"],
     ans:"pour peu que",
     hint:"A conjunction followed by the subjunctive. Means 'if only' or 'provided that'."}
  ]
};
export default LESSON_8;
