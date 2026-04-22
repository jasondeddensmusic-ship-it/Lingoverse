// Batch 4. Unit 01, Lesson 1: Feelings & Reactions in Greetings
const BATCH4_U01_L1 = {
  id:"itv2_u01l_b4_1", title:"Come ti senti?", icon:"\uD83D\uDE0A", xp:15, board:true,
  steps:[
    {type:"intro", title:"Come ti senti?",
     desc:"Expand your greeting toolkit with words for feelings and common reactions when meeting people.",
     goals:["Express basic feelings","React to greetings naturally","Use common Italian exclamations"]},

    {type:"teach", trg:"contento", src:"happy / glad", pos:"adj", gender:"m",
     note:"Masculine. Feminine: contenta. Plural: contenti/contente.\nUsed when pleased about something specific.",
     example:"A: Ciao! Come stai?\nB: Sono contento, grazie!",
     exampleSrc:"A: Hi! How are you?\nB: I am happy, thanks!",
     funFact:"From Latin 'contentus' (satisfied, contained). The idea is that a contented person is 'contained' within themselves, not restless or wanting."},

    {type:"teach", trg:"triste", src:"sad", pos:"adj", gender:null,
     note:"Same form for masculine and feminine.\nPlural: tristi. A very common feeling word.",
     example:"A: Perche sei triste?\nB: Ho perso il mio gatto.",
     exampleSrc:"A: Why are you sad?\nB: I lost my cat.",
     funFact:"From Latin 'tristis.' The same root gives French 'triste' and Spanish 'triste.' English 'tristful' existed in old English but fell out of use."},

    {type:"teach", trg:"stanco", src:"tired", pos:"adj", gender:"m",
     note:"Masculine. Feminine: stanca. Very frequently used.\nItalians are always 'stanco' on Mondays.",
     example:"A: Come stai?\nB: Sono stanco. Ho lavorato molto.",
     exampleSrc:"A: How are you?\nB: I am tired. I worked a lot.",
     funFact:"From Vulgar Latin 'stancare' (to tire out). Italy has a famous expression: 'stanco morto' (dead tired). Italians love adding 'morto' to adjectives for dramatic effect."},

    {type:"teach", trg:"arrabbiato", src:"angry", pos:"adj", gender:"m",
     note:"Masculine. Feminine: arrabbiata.\nDouble b + double t spelling is important.",
     example:"A: Sei arrabbiato con me?\nB: No, non sono arrabbiato.",
     exampleSrc:"A: Are you angry with me?\nB: No, I am not angry.",
     funFact:"The famous pasta 'penne all'arrabbiata' literally means 'angry penne' because the chili pepper makes the sauce 'angry' (spicy hot). The word comes from 'rabbia' (rage)."},

    {type:"teach", trg:"preoccupato", src:"worried", pos:"adj", gender:"m",
     note:"Masculine. Feminine: preoccupata.\nLiterally: pre + occupato (pre-occupied, mentally).",
     example:"A: Sembri preoccupato.\nB: Si, ho un esame domani.",
     exampleSrc:"A: You seem worried.\nB: Yes, I have an exam tomorrow.",
     funFact:"The Italian 'preoccupato' and English 'preoccupied' share the same Latin root but diverged in meaning. In Italian it means 'worried,' in English it means 'distracted.'"},

    {type:"teach", trg:"benissimo", src:"very well / great", pos:"adv", gender:null,
     note:"Superlative of 'bene.' The -issimo suffix means 'very.'\nEnthusiastic response to 'come stai?'",
     example:"A: Come va?\nB: Benissimo! Ho trovato un nuovo lavoro!",
     exampleSrc:"A: How is it going?\nB: Great! I found a new job!",
     funFact:"The -issimo ending works with almost any adjective: bellissimo (very beautiful), grandissimo (very big). Italians use it constantly. It originally comes from the Latin superlative suffix."},

    {type:"teach", trg:"piacere", src:"nice to meet you / pleasure", pos:"noun", gender:"m",
     note:"Masculine noun. Said when meeting someone new.\nAlso the verb 'to like' (mi piace = I like).",
     example:"A: Ciao, mi chiamo Marco.\nB: Piacere! Io sono Anna.",
     exampleSrc:"A: Hi, my name is Marco.\nB: Nice to meet you! I am Anna.",
     funFact:"'Piacere' is both a noun (pleasure) and a verb (to please/like). 'Mi piace' literally means 'it pleases me.' This verb works backwards compared to English: the thing liked is the subject."},

    {type:"teach", trg:"che bello!", src:"how nice! / how beautiful!", pos:"intj", gender:null,
     note:"Common exclamation of delight. 'Che' + adjective = 'how' + adjective.\nExtremely common in conversation.",
     example:"A: Domani vado in vacanza!\nB: Che bello! Dove vai?",
     exampleSrc:"A: Tomorrow I go on vacation!\nB: How nice! Where are you going?",
     funFact:"'Che bello!' is perhaps the most common Italian exclamation of joy. The pattern 'che + adjective' is very productive: che brutto (how ugly), che strano (how strange), che peccato (what a pity)."},

    {type:"teach", trg:"davvero?", src:"really?", pos:"adv", gender:null,
     note:"Expression of surprise or confirmation.\n'Da' + 'vero' = from truth. Literally: 'from truth?'",
     example:"A: Ho vinto la lotteria!\nB: Davvero? Non ci credo!",
     exampleSrc:"A: I won the lottery!\nB: Really? I don't believe it!",
     funFact:"Italians have many ways to say 'really': davvero, veramente, sul serio, per davvero. Using 'davvero?' with a rising tone is the most natural expression of surprise."},

    {type:"teach", trg:"meno male!", src:"thank goodness! / what a relief!", pos:"intj", gender:null,
     note:"Literally: less bad. Used to express relief.\nVery common in everyday speech.",
     example:"A: L'esame e stato facile.\nB: Meno male! Ero preoccupata.",
     exampleSrc:"A: The exam was easy.\nB: Thank goodness! I was worried.",
     funFact:"'Meno male' literally translates to 'less bad,' which perfectly captures the Italian attitude: not 'how good' but 'at least it was less bad.' A practical, realistic way to express relief."},

    {type:"teach", trg:"purtroppo", src:"unfortunately", pos:"adv", gender:null,
     note:"Used to introduce bad news or disappointing information.\nLiterally: pur (even) + troppo (too much).",
     example:"A: Vieni alla festa?\nB: Purtroppo no, devo lavorare.",
     exampleSrc:"A: Are you coming to the party?\nB: Unfortunately no, I have to work.",
     funFact:"The literal meaning 'even too much' evolved to mean 'unfortunately.' It is the go-to word for softening bad news in Italian. Compare with 'per fortuna' (fortunately, luckily)."},

    {type:"teach", trg:"per fortuna", src:"fortunately / luckily", pos:"adv", gender:null,
     note:"Opposite of 'purtroppo.' Introduces good outcomes.\nLiterally: by fortune/luck.",
     example:"A: Hai preso l'autobus?\nB: Per fortuna si, all'ultimo momento!",
     exampleSrc:"A: Did you catch the bus?\nB: Fortunately yes, at the last moment!",
     funFact:"'Fortuna' comes from the Roman goddess Fortuna, who controlled luck and destiny. The expression has been used continuously since Roman times. Italians value 'la fortuna' deeply."},

    {type:"teach", trg:"figurati!", src:"don't mention it! / no worries!", pos:"intj", gender:null,
     note:"Informal. Formal version: 'si figuri!'\nResponse to 'grazie' or apologies. Very common.",
     example:"A: Grazie per l'aiuto!\nB: Figurati! E stato un piacere.",
     exampleSrc:"A: Thanks for the help!\nB: Don't mention it! It was a pleasure.",
     funFact:"Literally means 'imagine yourself!' The idea is 'imagine yourself in my position, you would have done the same.' It is one of the most natural Italian responses to 'grazie,' more casual than 'prego.'"},

    {type:"teach", trg:"magari!", src:"if only! / I wish!", pos:"intj", gender:null,
     note:"Expresses a strong wish or enthusiastic agreement.\nFrom Greek 'makari' (blessed).",
     example:"A: Vuoi venire in Italia?\nB: Magari! Sarebbe fantastico!",
     exampleSrc:"A: Do you want to come to Italy?\nB: I wish! That would be fantastic!",
     funFact:"'Magari' is untranslatable with a single English word. It can mean 'I wish,' 'if only,' 'maybe,' or 'absolutely yes.' From Greek 'makarios' (blessed), it entered Italian through southern dialects."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'tired' in italiano?",
     opts:["Stanco","Triste","Contento","Arrabbiato"],
     ans:"Stanco",
     hint:"Think of the feeling you have after a long day of work."},

    {type:"mc", q:"Cosa significa 'meno male'?",
     opts:["Not really","Thank goodness","Too bad","Unfortunately"],
     ans:"Thank goodness",
     hint:"This expression literally means 'less bad' and shows relief."},

    {type:"fb", s:"Sono molto {1} perché domani c'è la festa.",
     a:["contento"], opts:["contento","triste","stanco","arrabbiato"],
     hint:"The speaker is looking forward to the party. Pick the positive feeling.",
     sSrc:"I am very {1} because tomorrow there is the party."},

    {type:"fb", s:"{1} non posso venire alla cena.",
     a:["Purtroppo"], opts:["Purtroppo","Per fortuna","Benissimo","Magari"],
     hint:"The speaker is sharing disappointing news about missing dinner.",
     sSrc:"{1} I cannot come to dinner."},

    {type:"match", pairs:[
      {trg:"contento", src:"happy"},
      {trg:"triste", src:"sad"},
      {trg:"arrabbiato", src:"angry"},
      {trg:"preoccupato", src:"worried"}
    ]},

    {type:"mc", q:"Qualcuno dice 'Grazie mille!' Come rispondi in modo informale?",
     opts:["Davvero?","Meno male!","Figurati!","Purtroppo!"],
     ans:"Figurati!",
     hint:"This casual response means something like 'don't mention it' or 'no worries.'"},

    {type:"fb", s:"A: Vuoi una vacanza ai Caraibi?\nB: {1}! Sarebbe un sogno!",
     a:["Magari"], opts:["Magari","Purtroppo","Figurati","Davvero"],
     hint:"The speaker expresses a strong wish for something wonderful.",
     sSrc:"A: Do you want a vacation in the Caribbean?\nB: {1}! That would be a dream!"},

    {type:"mc", q:"Cosa dici quando incontri qualcuno per la prima volta?",
     opts:["Figurati!","Meno male!","Che bello!","Piacere!"],
     ans:"Piacere!",
     hint:"This word means 'pleasure' and is standard when meeting someone new."}
  ,{type:"match",pairs:[{trg:"benissimo",src:"very well / great"},{trg:"per fortuna",src:"fortunately / luckily"}]}]
};
export default BATCH4_U01_L1;
