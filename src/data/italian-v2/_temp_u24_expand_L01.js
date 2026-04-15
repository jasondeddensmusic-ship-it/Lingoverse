// Unit 24 Expansion — Lesson 4: Il periodo ipotetico di tipo 2
const LESSON_4 = {
  id:"itv2_u24l4", title:"Esercizi: tipo 1 e 2", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"Esercizi: tipo 1 e 2",
     desc:"Practice distinguishing between Type 1 (real) and Type 2 (hypothetical) if-clauses. The ability to switch between these two types is essential for natural Italian conversation.",
     goals:["Choose correctly between Type 1 and Type 2","Form complete if-clauses fluently","Recognize when a situation is real vs. hypothetical"]},

    {type:"teach", trg:"se avessi soldi", src:"if I had money (but I do not)", pos:"verb", gender:null,
     note:"Type 2: se + imperfect subjunctive. Hypothetical.\nContrast: 'Se ho soldi' = if I have money (real possibility).",
     example:"A: Se avessi soldi, comprerei una macchina nuova.\nB: Anch'io! Ma per ora devo risparmiare.",
     exampleSrc:"A: If I had money, I would buy a new car.\nB: Me too! But for now I have to save.",
     funFact:"The key question for choosing Type 1 vs. Type 2: 'Is the situation possible or imaginary?' 'Se ho tempo, vengo' (If I have time, I will come) is possible. 'Se avessi tempo, verrei' (If I had time, I would come) implies you probably do not have time. The mood of the verb signals how real the speaker considers the condition."},

    {type:"teach", trg:"se sapessi", src:"if I knew / if you knew", pos:"verb", gender:null,
     note:"Imperfect subjunctive of 'sapere.' Se sapessi, se sapessi, se sapesse.\nType 2: for information you do not have.",
     example:"A: Se sapessi parlare cinese, lavorerei in Cina.\nB: Potresti sempre impararlo!",
     exampleSrc:"A: If I knew how to speak Chinese, I would work in China.\nB: You could always learn it!",
     funFact:"'Se sapessi' can express both 'if I knew' and 'if you knew' because the io and tu forms of the imperfect subjunctive are identical. Context or pronouns clarify: 'Se io sapessi' vs. 'Se tu sapessi.' 'Se sapessi quanto ti amo' (If you knew how much I love you) is a classic Italian romantic declaration."},

    {type:"teach", trg:"se vincessi", src:"if I won / if you won", pos:"verb", gender:null,
     note:"Imperfect subjunctive of 'vincere.' Regular pattern: vinc-essi.\n'Se vincessi la lotteria...' = the classic dream starter.",
     example:"A: Se vincessi la lotteria, cosa faresti?\nB: Smetterei di lavorare e viaggerei.",
     exampleSrc:"A: If you won the lottery, what would you do?\nB: I would stop working and travel.",
     funFact:"'Se vincessi la lotteria' is Italy's favorite hypothetical. Italians spend billions yearly on lottery games: 'Superenalotto,' 'Gratta e Vinci' (scratch cards), and local lotteries. The Superenalotto has produced some of Europe's largest jackpots. Despite terrible odds, the dream of winning fuels an entire conversational genre."},

    {type:"teach", trg:"se piovesse", src:"if it rained (hypothetical)", pos:"verb", gender:null,
     note:"Imperfect subjunctive of 'piovere.' Se piovesse = unlikely rain.\nContrast: 'Se piove' (Type 1) = rain is possible.",
     example:"A: Se piovesse domani, resteremmo a casa.\nB: Ma il meteo dice sole tutto il giorno!",
     exampleSrc:"A: If it rained tomorrow, we would stay home.\nB: But the weather forecast says sun all day!",
     funFact:"The difference between 'se piove' (Type 1) and 'se piovesse' (Type 2) captures the speaker's belief. 'Se piove' means rain is a realistic possibility you are planning for. 'Se piovesse' means you consider rain unlikely but are imagining the scenario. The verb form communicates your assessment of probability."},

    {type:"teach", trg:"se abitassi", src:"if I lived (somewhere I do not)", pos:"verb", gender:null,
     note:"Imperfect subjunctive of 'abitare.' Regular -are: abit-assi.\n-Are verbs use -assi endings in the imperfect subjunctive.",
     example:"A: Se abitassi a Roma, andrei al Colosseo ogni settimana.\nB: Non ci andresti mai! I romani non ci vanno.",
     exampleSrc:"A: If I lived in Rome, I would go to the Colosseum every week.\nB: You would never go! Romans never go.",
     funFact:"The imperfect subjunctive of -are verbs uses -assi endings: abitassi, abitassi, abitasse, abitassimo, abitaste, abitassero. 'Se abitassi' implies you do not actually live there. The response 'I romani non ci vanno' (Romans never go) is true: locals rarely visit their own famous landmarks."},

    {type:"teach", trg:"se parlassi", src:"if I spoke / if you spoke", pos:"verb", gender:null,
     note:"Imperfect subjunctive of 'parlare.' Regular -are pattern.\n'Se parlassi italiano meglio...' = If I spoke Italian better...",
     example:"A: Se parlassi italiano meglio, potrei lavorare qui.\nB: Stai migliorando molto velocemente!",
     exampleSrc:"A: If I spoke Italian better, I could work here.\nB: You are improving very fast!",
     funFact:"'Se parlassi italiano' is the language learner's lament. Type 2 because you do not yet speak Italian well enough. The imperfect subjunctive transforms aspirations into hypotheticals. As your Italian improves, this sentence naturally shifts to Type 1: 'Se parlo bene l'italiano, posso lavorare qui.'"},

    {type:"verb_table", title:"Congiuntivo imperfetto: regolari",
     note:"Regular imperfect subjunctive patterns. All three conjugations use similar endings with their characteristic vowel.",
     groups:[{label:"-are: parlare", rows:[
       {pronoun:"io/tu", form:"parlassi", src:"if I/you spoke"},
       {pronoun:"lui/lei", form:"parlasse", src:"if he/she spoke"},
       {pronoun:"noi", form:"parlassimo", src:"if we spoke"},
       {pronoun:"voi", form:"parlaste", src:"if you (pl.) spoke"},
       {pronoun:"loro", form:"parlassero", src:"if they spoke"}
     ]},{label:"-ere/-ire: scrivere / dormire", rows:[
       {pronoun:"io/tu", form:"scrivessi / dormissi", src:"if I/you wrote / slept"},
       {pronoun:"lui/lei", form:"scrivesse / dormisse", src:"if he/she wrote / slept"},
       {pronoun:"noi", form:"scrivessimo / dormissimo", src:"if we wrote / slept"},
       {pronoun:"voi", form:"scriveste / dormiste", src:"if you (pl.) wrote / slept"},
       {pronoun:"loro", form:"scrivessero / dormissero", src:"if they wrote / slept"}
     ]}]},

    {type:"tip", title:"Type 1 vs. Type 2: The Decision",
     text:"Ask yourself: Is this situation realistic or imaginary?\n\nRealistic (Type 1):\nSe piove, resto a casa. (Rain is possible.)\nSe hai fame, mangiamo. (You might be hungry.)\n\nImaginary (Type 2):\nSe piovesse, resterei a casa. (Rain is unlikely.)\nSe fossi ricco, viaggerei. (I am not rich.)\n\nThe verb form signals your belief about the probability.",
     deepDive:{title:"Grey Areas Between Type 1 and Type 2",
      text:"Sometimes both types are acceptable. 'Se vengo domani...' (Type 1) and 'Se venissi domani...' (Type 2) can describe the same situation. Type 1 signals you think coming is likely. Type 2 signals doubt or tentativeness. Italian speakers switch between them based on how committed they feel. The choice reveals psychology, not just grammar."}},

    // Quiz steps
    {type:"mc", q:"Which type uses 'se piove'?",
     opts:["Type 2 (hypothetical and unlikely situation)","Type 1 (real and possible situation)","Type 3 (impossible past condition)","Both Type 1 and Type 2 interchangeably"],
     ans:"Type 1 (real and possible situation)",
     hint:"Present indicative after 'se' signals a r... possibility. T... 2 would use the imperfect subjunctive: 'se piovesse.'"},

    {type:"fb", s:"Se {1} la lotteria, smetterei di lavorare.",
     a:["vincessi"],
     opts:["vincessi","vinco","vincero","vinca"],
     hint:"Winning the lottery is a fantasy (Type 2). The imperfect subjunctive of 'vincere' follows the regular pattern: vinc-essi.",
     sSrc:"If I {1} the lottery, I would stop working."},

    {type:"match", pairs:[
      {trg:"se ho tempo (Type 1)", src:"if I have time (realistic)"},
      {trg:"se avessi tempo (Type 2)", src:"if I had time (unlikely)"},
      {trg:"se piove (Type 1)", src:"if it rains (possible)"},
      {trg:"se piovesse (Type 2)", src:"if it rained (unlikely)"},
      {trg:"se sapessi (Type 2)", src:"if I knew (I do not)"}
    ]},

    {type:"mc", q:"Why are the io and tu forms identical in the imperfect subjunctive?",
     opts:["It is a common spelling error that persists","Italian grammar simplified these forms over time","They evolved from the same Latin forms","Only in irregular verbs are they identical"],
     ans:"They evolved from the same Latin forms",
     hint:"Se io parlassi, se tu parlassi. Context or pronouns clarify the subject. This is true for all verbs in this tense."},

    {type:"fb", s:"Se {1} a Roma, andrei al Colosseo.",
     a:["abitassi"],
     opts:["abitassi","abito","abitero","abiti"],
     hint:"You do not actually live in Rome (Type 2). The -are verb uses the -assi ending in the imperfect subjunctive.",
     sSrc:"If I {1} in Rome, I would go to the Colosseum."},

    {type:"mc", q:"When can both Type 1 and Type 2 describe the same situation?",
     opts:["Never, they are always completely different","Always, they are interchangeable in every case","When the speaker's level of certainty is ambiguous","Only in written formal Italian"],
     ans:"When the speaker's level of certainty is ambiguous",
     hint:"'Se vengo domani' (likely) vs. 'Se venissi domani' (tentative). The choice reveals the s...'s confidence l...."},

    {type:"fb", s:"Se {1} italiano meglio, potrei lavorare qui.",
     a:["parlassi"],
     opts:["parlassi","parlo","parlero","parli"],
     hint:"You do not yet speak Italian well enough (Type 2). As your skills improve, this naturally shifts to Type 1.",
     sSrc:"If I {1} Italian better, I could work here."},

    {type:"mc", q:"What endings do -are verbs use in the imperfect subjunctive?",
     opts:["-essi, -essi, -esse, -essimo, -este, -essero","-assi, -assi, -asse, -assimo, -aste, -assero","-issi, -issi, -isse, -issimo, -iste, -issero","-ossi, -ossi, -osse, -ossimo, -oste, -ossero"],
     ans:"-assi, -assi, -asse, -assimo, -aste, -assero",
     hint:"The characteristic -a vowel appears throughout. -Ere verbs use -essi and -ire verbs use -issi. Each conjugation has its own vowel."}
  ]
};
export default LESSON_4;
