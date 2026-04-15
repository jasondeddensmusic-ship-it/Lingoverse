// Unit 13 Expansion — Lesson 6: The Subjunctive in Opinions and Beliefs
const LESSON_6 = {
  id:"itv2_u13l6", title:"Secondo me...", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Secondo me...",
     desc:"Put the subjunctive to work in real conversation. Express opinions, disagree politely, and defend your views using subjunctive constructions that Italians use every day.",
     goals:["Express opinions using the subjunctive naturally","Disagree politely with subjunctive phrases","Combine multiple subjunctive triggers in conversation"]},

    {type:"teach", trg:"non credo che", src:"I don't believe that", pos:"verb", gender:null,
     note:"Negative opinion trigger. Negating 'credere' strengthens the doubt.\nAlways followed by the subjunctive.",
     example:"A: Non credo che abbia ragione.\nB: Nemmeno io credo che sia giusto.",
     exampleSrc:"A: I don't believe he is right.\nB: I don't believe it is fair either.",
     funFact:"Negating an opinion verb intensifies the subjunctive requirement. 'Credo che venga' (I believe he is coming) uses the subjunctive. 'Non credo che venga' (I don't believe he is coming) makes the subjunctive even more necessary, because negation adds doubt to opinion."},

    {type:"teach", trg:"non e vero che", src:"it is not true that", pos:"adj", gender:null,
     note:"Negative impersonal trigger. Negating a fact makes it uncertain.\n'E vero che' = indicative. 'Non e vero che' = subjunctive.",
     example:"A: Non e vero che l'italiano sia facile.\nB: Ma non e nemmeno impossibile!",
     exampleSrc:"A: It is not true that Italian is easy.\nB: But it is not impossible either!",
     funFact:"This is a key rule: 'e vero che' (it is true that) takes the indicative because it states a fact. But 'non e vero che' (it is not true that) takes the subjunctive because denying something introduces uncertainty. Negation flips the mood."},

    {type:"teach", trg:"pare che", src:"it appears that / apparently", pos:"verb", gender:null,
     note:"Impersonal subjunctive trigger. 'Parere' (to appear/seem).\nMore formal than 'sembra che.'",
     example:"A: Pare che il governo cambi la legge.\nB: A me pare che sia una buona idea.",
     exampleSrc:"A: It appears the government is changing the law.\nB: It seems to me that it is a good idea.",
     funFact:"'Parere' and 'sembrare' both mean 'to seem,' but 'parere' is slightly more formal and literary. 'A quanto pare' (from what it appears) is a very common spoken expression meaning 'apparently.' It hedges statements elegantly without committing to certainty."},

    {type:"teach", trg:"nonostante", src:"despite / although", pos:"conj", gender:null,
     note:"Conjunction that triggers the subjunctive.\nAlternative: 'malgrado' (despite). Same construction.",
     example:"A: Nonostante piova, voglio uscire.\nB: Nonostante sia stanco, vengo con te.",
     exampleSrc:"A: Despite it raining, I want to go out.\nB: Although I am tired, I am coming with you.",
     funFact:"'Nonostante' and 'malgrado' are conjunctions of concession: they introduce an unexpected contrast. Both require the subjunctive. They replace 'anche se' (even if), which can take either mood. Using 'nonostante' with the subjunctive marks educated, formal Italian."},

    {type:"teach", trg:"affinche", src:"so that / in order that", pos:"conj", gender:null,
     note:"Purpose conjunction. Always followed by the subjunctive.\nAlternative: 'perche' (so that, when expressing purpose).",
     example:"A: Studio affinche i miei genitori siano orgogliosi.\nB: Studio affinche io possa trovare un buon lavoro.",
     exampleSrc:"A: I study so that my parents are proud.\nB: I study so that I can find a good job.",
     funFact:"'Affinche' always takes the subjunctive because purpose is about intention, not reality. 'Perche' is trickier: 'Perche studi?' (Why do you study?, indicative) vs. 'Studio perche tu capisca' (I study so that you understand, subjunctive). Same word, different moods depending on meaning."},

    {type:"teach", trg:"prima che", src:"before (someone does)", pos:"conj", gender:null,
     note:"Time conjunction with subjunctive. 'Prima che + subjunctive.'\n'Prima di + infinitive' when the subject is the same.",
     example:"A: Partiamo prima che piova.\nB: Si, prima che faccia troppo freddo.",
     exampleSrc:"A: Let's leave before it rains.\nB: Yes, before it gets too cold.",
     funFact:"'Prima che' (before) takes the subjunctive because the action has not yet happened. 'Dopo che' (after) usually takes the indicative because the action already occurred. This before/after contrast beautifully illustrates why Italian links the subjunctive to unrealized events."},

    {type:"teach", trg:"a meno che non", src:"unless", pos:"conj", gender:null,
     note:"Conjunction of condition. Always followed by subjunctive.\nThe 'non' is grammatically required but does not negate.",
     example:"A: Vengo alla festa, a meno che non piova.\nB: Perfetto, a meno che non debba lavorare.",
     exampleSrc:"A: I am coming to the party, unless it rains.\nB: Perfect, unless I have to work.",
     funFact:"The 'non' in 'a meno che non' is called 'non espletivo' (expletive non). It does not negate the verb. 'A meno che non piova' means 'unless it rains' (not 'unless it does not rain'). This redundant 'non' confuses even native speakers, but omitting it sounds wrong to Italian ears."},

    {type:"teach", trg:"benche", src:"although / even though", pos:"conj", gender:null,
     note:"Concessive conjunction. Always requires the subjunctive.\nSynonym of 'nonostante' and 'sebbene.'",
     example:"A: Benche sia giovane, e molto maturo.\nB: Benche non abbia esperienza, lavora bene.",
     exampleSrc:"A: Although he is young, he is very mature.\nB: Although he has no experience, he works well.",
     funFact:"'Benche,' 'sebbene,' 'nonostante,' and 'malgrado' all mean 'although' and all require the subjunctive. Italian is rich in concessive conjunctions. In everyday speech, 'anche se' (even if) with the indicative is more common, but the formal options signal higher register."},

    {type:"teach", trg:"qualunque cosa", src:"whatever / no matter what", pos:"pron", gender:null,
     note:"Indefinite expression. Always followed by the subjunctive.\n'Qualunque' = whichever, whatever.",
     example:"A: Qualunque cosa tu faccia, ti appoggio.\nB: Qualunque cosa succeda, restiamo insieme.",
     exampleSrc:"A: Whatever you do, I support you.\nB: Whatever happens, we stay together.",
     funFact:"'Qualunque,' 'chiunque' (whoever), and 'dovunque' (wherever) all trigger the subjunctive because they refer to unknown, indefinite entities. 'Qualunque cosa sia' (whatever it may be) is a very common expression in Italian conversation."},

    {type:"tip", title:"Conjunctions That Require the Subjunctive",
     text:"Key conjunctions always followed by the subjunctive:\n\nPurpose: affinche, perche (= so that)\nTime: prima che (before)\nConcession: benche, sebbene, nonostante, malgrado\nCondition: a meno che non (unless), purche (provided that)\nIndefinite: qualunque, chiunque, dovunque\n\nAll share one trait: the action they introduce is not a confirmed fact.",
     deepDive:{title:"Subjunctive vs. Indicative with 'perche'",
      text:"'Perche' is unique: it changes mood depending on meaning.\n\nCause (= because): indicative. 'Studio perche mi piace' (I study because I like it).\nPurpose (= so that): subjunctive. 'Studio perche tu capisca' (I study so that you understand).\n\nThe test: can you replace 'perche' with 'affinche'? If yes, it expresses purpose and needs the subjunctive. If not, it states a cause and takes the indicative."}},

    // Quiz steps
    {type:"mc", q:"Why does 'non e vero che' take the subjunctive while 'e vero che' takes the indicative?",
     opts:["Because negative sentences always use the subjunctive","Because denying a truth introduces uncertainty about the situation","Because 'non' is a special subjunctive particle in Italian","Because the negative form is only used in formal writing"],
     ans:"Because denying a truth introduces uncertainty about the situation",
     hint:"Affirming t... = certainty = indicative. D... t... = doubt enters = subjunctive. Negation flips the mood."},

    {type:"fb", s:"{1} piova, voglio uscire.",
     a:["Nonostante"],
     opts:["Nonostante","Perche","Quando","Dopo che"],
     hint:"This conjunction means 'despite' or 'although' and always requires the subjunctive. It introduces an unexpected contrast.",
     sSrc:"{1} it raining, I want to go out."},

    {type:"match", pairs:[
      {trg:"nonostante", src:"despite / although"},
      {trg:"affinche", src:"so that"},
      {trg:"prima che", src:"before"},
      {trg:"a meno che non", src:"unless"},
      {trg:"benche", src:"although / even though"}
    ]},

    {type:"mc", q:"What is special about 'non' in 'a meno che non piova'?",
     opts:["It makes the sentence negative, reversing the meaning","It is optional and can be freely removed","It does not negate; it is grammatically required but expletive","It changes 'a meno che' from indicative to subjunctive mood"],
     ans:"It does not negate; it is grammatically required but expletive",
     hint:"This 'non' is called 'espletivo.' The sentence means 'unless it rains,' not 'unless it does not rain.' It sounds wrong without it."},

    {type:"fb", s:"Partiamo {1} che piova.",
     a:["prima"],
     opts:["prima","dopo","quando","perche"],
     hint:"We leave before the rain starts. This time word plus 'che' triggers the subjunctive because the event has not yet occurred.",
     sSrc:"Let's leave {1} it rains."},

    {type:"mc", q:"When does 'perche' require the subjunctive?",
     opts:["When it is at the start of a question","When it means 'so that' (expressing purpose)","When it follows a past tense verb form","When the speaker is uncertain about the cause"],
     ans:"When it means 'so that' (expressing purpose)",
     hint:"Cause (because) = indicative. P... (so that, replaceable with 'affinche') = subjunctive. Same word, different moods."},

    {type:"fb", s:"{1} cosa tu faccia, ti appoggio.",
     a:["Qualunque"],
     opts:["Qualunque","Questa","Ogni","Una"],
     hint:"This indefinite word means 'whatever' or 'no matter what.' It refers to an unknown and triggers the subjunctive.",
     sSrc:"{1} you do, I support you."},

    {type:"mc", q:"Which conjunction is a synonym of 'nonostante'?",
     opts:["Affinche","Benche","Prima che","Perche"],
     ans:"Benche",
     hint:"Both mean 'although' and both require the subjunctive. Italian has many formal concessive conjunctions, all interchangeable."}
  ]
};
export default LESSON_6;
