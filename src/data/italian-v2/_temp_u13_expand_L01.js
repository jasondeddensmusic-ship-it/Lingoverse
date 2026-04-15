// Unit 13 Expansion. Lesson 4: More Subjunctive Triggers
const LESSON_4 = {
  id:"itv2_u13l4", title:"Sembra che...", icon:"🔑", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sembra che...",
     desc:"Expand your subjunctive toolkit with new trigger phrases: expressions of doubt, impersonal judgments, and emotional reactions. Each one opens the door to the subjunctive mood.",
     goals:["Learn additional subjunctive trigger phrases","Use doubt and emotion expressions with the subjunctive","Combine triggers with regular and irregular verbs"]},

    {type:"teach", trg:"sembra che", src:"it seems that", pos:"verb", gender:null,
     note:"Impersonal subjunctive trigger. From 'sembrare' (to seem).\n'Mi sembra che' = it seems to me that.",
     example:"A: Sembra che piova stasera.\nB: Mi sembra che il cielo sia nuvoloso.",
     exampleSrc:"A: It seems that it will rain tonight.\nB: It seems to me that the sky is cloudy.",
     funFact:"'Sembrare' comes from Latin 'simulare' (to imitate, to resemble). It always triggers the subjunctive because appearances are inherently uncertain. 'Mi sembra che' adds a personal touch: 'it seems to me.'"},

    {type:"teach", trg:"dubito che", src:"I doubt that", pos:"verb", gender:null,
     note:"Subjunctive trigger. 'Dubitare' (to doubt) + 'che.'\nExpresses uncertainty about a situation.",
     example:"A: Dubito che Marco arrivi in tempo.\nB: Anch'io dubito che ce la faccia.",
     exampleSrc:"A: I doubt that Marco will arrive on time.\nB: I also doubt that he will make it.",
     funFact:"'Dubitare' comes from Latin 'dubitare' (to waver between two options). The 'dub-' root means 'two,' reflecting the mental state of being torn. English 'doubt' and 'dubious' share the same origin. This verb always demands the subjunctive."},

    {type:"teach", trg:"temo che", src:"I fear that", pos:"verb", gender:null,
     note:"Subjunctive trigger. 'Temere' (to fear) + 'che.'\nExpresses worry or concern about an outcome.",
     example:"A: Temo che l'esame sia difficile.\nB: Non preoccuparti, hai studiato molto.",
     exampleSrc:"A: I fear that the exam will be difficult.\nB: Don't worry, you studied a lot.",
     funFact:"'Temere' is a verb of emotion, and all emotion verbs trigger the subjunctive: temere (to fear), sperare (to hope), essere felice (to be happy), dispiacersi (to be sorry). The underlying logic is that emotions color reality with subjectivity."},

    {type:"teach", trg:"e possibile che", src:"it is possible that", pos:"adj", gender:null,
     note:"Impersonal subjunctive trigger.\nExpresses possibility, not certainty.",
     example:"A: E possibile che nevichi domani.\nB: Davvero? In aprile?",
     exampleSrc:"A: It is possible that it will snow tomorrow.\nB: Really? In April?",
     funFact:"All impersonal expressions with 'e + adjective + che' trigger the subjunctive: e possibile che, e probabile che, e improbabile che, e strano che, e giusto che. They express a judgment about a situation whose outcome remains open."},

    {type:"teach", trg:"e necessario che", src:"it is necessary that", pos:"adj", gender:null,
     note:"Impersonal subjunctive trigger.\nStronger than 'e importante che,' closer to 'must.'",
     example:"A: E necessario che tu finisca il lavoro entro venerdi.\nB: Lo so, mi organizzo subito.",
     exampleSrc:"A: It is necessary that you finish the work by Friday.\nB: I know, I will organize myself right away.",
     funFact:"'Necessario' comes from Latin 'necessarius' (unavoidable). Despite expressing a strong obligation, it still triggers the subjunctive because the action has not yet happened. Compare: 'E necessario che studi' (you must study, subjunctive) vs. 'Devi studiare' (you must study, indicative)."},

    {type:"teach", trg:"e probabile che", src:"it is likely that", pos:"adj", gender:null,
     note:"Impersonal subjunctive trigger.\nExpresses likelihood without certainty.",
     example:"A: E probabile che il treno sia in ritardo.\nB: Come sempre!",
     exampleSrc:"A: It is likely that the train is late.\nB: As always!",
     funFact:"Even though 'probable' suggests high likelihood, it still lacks full certainty, which is why the subjunctive follows. In contrast, 'e certo che' (it is certain that) and 'e chiaro che' (it is clear that) take the indicative because they express known facts."},

    {type:"teach", trg:"e strano che", src:"it is strange that", pos:"adj", gender:null,
     note:"Impersonal subjunctive trigger.\nExpresses surprise or puzzlement.",
     example:"A: E strano che non abbia chiamato.\nB: Forse ha perso il telefono.",
     exampleSrc:"A: It is strange that he has not called.\nB: Maybe he lost his phone.",
     funFact:"'Strano' comes from Latin 'extraneus' (foreign, external). English 'strange' and 'extraneous' share this root. Expressing strangeness about a situation inherently involves subjectivity, which is why 'e strano che' triggers the subjunctive."},

    {type:"teach", trg:"ho paura che", src:"I am afraid that", pos:"verb", gender:null,
     note:"Subjunctive trigger. Literally 'I have fear that.'\n'Avere paura' = to be afraid. Emotion verb.",
     example:"A: Ho paura che il volo sia cancellato.\nB: Controlla sul sito della compagnia aerea.",
     exampleSrc:"A: I am afraid that the flight is cancelled.\nB: Check on the airline's website.",
     funFact:"Italian uses 'avere' (to have) for many feelings where English uses 'to be': avere paura (to be afraid), avere fame (to be hungry), avere sete (to be thirsty). 'Ho paura che' triggers the subjunctive because fear involves an uncertain outcome."},

    {type:"teach", trg:"sono contento che", src:"I am happy that", pos:"adj", gender:null,
     note:"Subjunctive trigger. Emotion expression.\n'Contento' changes: contento (m.), contenta (f.).",
     example:"A: Sono contento che tu sia qui.\nB: Anche io sono contenta di essere qui.",
     exampleSrc:"A: I am happy that you are here.\nB: I am also happy to be here.",
     funFact:"All emotion adjectives followed by 'che' trigger the subjunctive: contento (happy), triste (sad), sorpreso (surprised), arrabbiato (angry), deluso (disappointed). Note the difference: 'Sono contento che tu sia qui' (two subjects, subjunctive) vs. 'Sono contento di essere qui' (same subject, infinitive)."},

    {type:"teach", trg:"mi dispiace che", src:"I am sorry that", pos:"verb", gender:null,
     note:"Subjunctive trigger. 'Dispiacere' = to be displeasing.\nExpresses regret about someone else's situation.",
     example:"A: Mi dispiace che tu stia male.\nB: Grazie, spero di guarire presto.",
     exampleSrc:"A: I am sorry that you are unwell.\nB: Thanks, I hope to recover soon.",
     funFact:"'Dispiacere' literally means 'to be displeasing.' 'Mi dispiace' is one of the first Italian phrases people learn. When followed by 'che' and a different subject, it requires the subjunctive. When followed by an infinitive with the same subject, no subjunctive is needed: 'Mi dispiace di non poter venire.'"},

    {type:"tip", title:"Subjunctive Trigger Categories",
     text:"Organize triggers by type to remember them:\n\n1. Opinion: penso che, credo che, mi sembra che\n2. Doubt: dubito che, non sono sicuro che\n3. Emotion: ho paura che, sono contento che, mi dispiace che\n4. Desire: voglio che, spero che, preferisco che\n5. Impersonal: e possibile che, e necessario che, e strano che\n\nThe common thread: all express subjectivity, not established facts.",
     deepDive:{title:"When NOT to Use the Subjunctive",
      text:"Some expressions look like triggers but take the indicative because they express certainty:\n\n'So che hai ragione' (I know you are right, indicative).\n'E vero che piove' (It is true that it rains, indicative).\n'E certo che viene' (It is certain he is coming, indicative).\n\nHowever, when negated, these CAN trigger the subjunctive: 'Non so se venga' (I don't know if he is coming). Negation introduces doubt."}},

    // Quiz steps
    {type:"mc", q:"Which phrase means 'I doubt that' and triggers the subjunctive?",
     opts:["Dico che","Dubito che","So che","Vedo che"],
     ans:"Dubito che",
     hint:"This verb expresses uncertainty about something. Its Latin root means 'to waver between two options.'"},

    {type:"fb", s:"{1} che piova stasera.",
     a:["Sembra"],
     opts:["Sembra","Sa","Dice","Vede"],
     hint:"This impersonal verb means 'it appears' or 'it seems.' It triggers the subjunctive because appearances are uncertain.",
     sSrc:"It {1} that it will rain tonight."},

    {type:"match", pairs:[
      {trg:"sembra che", src:"it seems that"},
      {trg:"dubito che", src:"I doubt that"},
      {trg:"temo che", src:"I fear that"},
      {trg:"e possibile che", src:"it is possible that"},
      {trg:"ho paura che", src:"I am afraid that"}
    ]},

    {type:"mc", q:"Why does 'sono contento che' trigger the subjunctive?",
     opts:["Because it describes a past event that is already over","Because happiness is an emotion that colors reality with subjectivity","Because the adjective 'contento' is always followed by the subjunctive form","Because it always describes an imaginary or impossible situation"],
     ans:"Because happiness is an emotion that colors reality with subjectivity",
     hint:"All emotions (fear, joy, sadness, surprise) filter r... through personal feeling. That s... requires this verb mood."},

    {type:"fb", s:"E {1} che il treno sia in ritardo.",
     a:["probabile"],
     opts:["probabile","certo","vero","chiaro"],
     hint:"This impersonal expression means 'likely.' Unlike 'certain' or 'true,' it does not express full certainty.",
     sSrc:"It is {1} that the train is late."},

    {type:"mc", q:"Which expression takes the indicative, NOT the subjunctive?",
     opts:["Dubito che venga","E strano che non chiami","So che ha ragione","Temo che sia tardi"],
     ans:"So che ha ragione",
     hint:"'Sapere' (to know) expresses certainty, not doubt or subjectivity. Certainty verbs keep the indicative mood."},

    {type:"fb", s:"Mi {1} che tu stia male.",
     a:["dispiace"],
     opts:["dispiace","sembra","piace","serve"],
     hint:"You feel sorry about someone's condition. This expression of regret triggers the subjunctive with a different subject.",
     sSrc:"I am {1} that you are unwell."},

    {type:"mc", q:"What is the difference between 'e necessario che studi' and 'devi studiare'?",
     opts:["There is absolutely no difference at all","The first is informal, the second is formal","The first uses subjunctive, the second uses indicative","The first is past tense, the second is present tense"],
     ans:"The first uses subjunctive, the second uses indicative",
     hint:"Both mean 'you must study,' but they use different grammatical structures. The impersonal expression requires one mood, the modal verb another."}
  ]
};
export default LESSON_4;
