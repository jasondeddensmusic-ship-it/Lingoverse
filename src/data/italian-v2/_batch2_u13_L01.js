// Unit 13 Batch2. Lesson 1: Subjunctive in Fixed Expressions
const BATCH2_U13_L1 = {
  id:"itv2_u13l_b2_1", title:"Espressioni fisse", icon:"🧩", xp:15, board:true,
  steps:[
    {type:"intro", title:"Espressioni fisse col congiuntivo",
     desc:"Many Italian fixed expressions require the subjunctive. Learn phrases with 'che' that are used every day in conversation, from wishes to concessions.",
     goals:["Use fixed subjunctive expressions","Recognize subjunctive in everyday Italian","Combine fixed phrases with irregular verbs"]},

    {type:"teach", trg:"purche", src:"provided that / as long as", pos:"conj", gender:null,
     note:"Conjunction of condition. Always requires the subjunctive.\n'Purche' = 'pure + che' (even that).",
     example:"A: Puoi uscire, purche tu finisca i compiti.\nB: Va bene, finisco tutto prima di uscire.",
     exampleSrc:"A: You can go out, provided that you finish your homework.\nB: All right, I will finish everything before going out.",
     funFact:"'Purche' is a contracted form of 'pure che' (even if that). It always signals a condition and never takes the indicative. Italians use it to set boundaries: the action is allowed only if the condition is met."},

    {type:"teach", trg:"sebbene", src:"although / even though", pos:"conj", gender:null,
     note:"Formal concessive conjunction. Always requires the subjunctive.\nSynonym of 'benché' and 'nonostante.'",
     example:"A: Sebbene sia stanco, continuo a lavorare.\nB: Sebbene faccia freddo, usciamo lo stesso.",
     exampleSrc:"A: Although I am tired, I keep working.\nB: Even though it is cold, we go out anyway.",
     funFact:"'Sebbene' comes from 'se' (if) + 'bene' (well), literally 'if well' or 'even if.' It belongs to the formal register and is especially common in written Italian. In everyday speech, 'anche se' (even if) with the indicative is more common, but the formal forms signal education."},

    {type:"teach", trg:"magari", src:"I wish / if only / maybe", pos:"adv", gender:null,
     note:"Versatile word. With subjunctive = 'if only.' Alone = 'maybe' or 'I wish!'\nFrom Greek 'makarios' (blessed).",
     example:"A: Magari potessi viaggiare di più!\nB: Magari! Anche io vorrei.",
     exampleSrc:"A: If only I could travel more!\nB: I wish! I would like to as well.",
     funFact:"'Magari' is one of Italian's most expressive words. As an exclamation ('Magari!'), it means 'I wish!' or 'If only!' With the imperfect subjunctive, it expresses unrealizable wishes: 'Magari fossi ricco!' (If only I were rich!). It also works as 'maybe': 'Magari domani' (Maybe tomorrow)."},

    {type:"teach", trg:"che io sappia", src:"as far as I know", pos:"verb", gender:null,
     note:"Fixed subjunctive expression. Used to hedge statements.\nIndicates limited knowledge or uncertainty.",
     example:"A: Marco e ancora in Italia?\nB: Che io sappia, si. Ma non ne sono sicuro.",
     exampleSrc:"A: Is Marco still in Italy?\nB: As far as I know, yes. But I am not sure.",
     funFact:"'Che io sappia' is one of the most useful conversational subjunctive phrases. It allows the speaker to give information while marking that they could be wrong. Similar expressions: 'per quanto ne sappia' (as far as I know, longer form) and 'a quanto pare' (apparently, using the indicative)."},

    {type:"teach", trg:"comunque sia", src:"however it may be / in any case", pos:"verb", gender:null,
     note:"Fixed subjunctive expression. 'Comunque' = however + 'sia' = it may be.\nUsed to conclude or pivot in conversation.",
     example:"A: Comunque sia, dobbiamo decidere.\nB: Hai ragione. Comunque vada, restiamo amici.",
     exampleSrc:"A: However it may be, we must decide.\nB: You are right. However it goes, we stay friends.",
     funFact:"'Comunque sia' uses 'sia' (subjunctive of 'essere') because the outcome is uncertain. 'Comunque vada' (however it goes, with 'andare') is equally common. These phrases elegantly close debate and move to action. They are a staple of Italian rhetoric."},

    {type:"teach", trg:"chiunque", src:"whoever / anyone who", pos:"pron", gender:null,
     note:"Indefinite pronoun. Always followed by the subjunctive.\n'Chiunque sia' = whoever it may be.",
     example:"A: Chiunque venga alla festa e benvenuto.\nB: Chiunque tu sia, entra pure!",
     exampleSrc:"A: Whoever comes to the party is welcome.\nB: Whoever you are, come right in!",
     funFact:"'Chiunque' is formed from 'chi' (who) + 'unque' (ever). Like 'qualunque' (whatever) and 'dovunque' (wherever), it triggers the subjunctive because it refers to unknown, indefinite people. 'Chiunque sia' (whoever he/she may be) is a very dramatic phrase used often in film and literature."},

    {type:"teach", trg:"dovunque", src:"wherever", pos:"adv", gender:null,
     note:"Indefinite adverb. Always followed by the subjunctive.\n'Dovunque tu vada' = wherever you go.",
     example:"A: Dovunque tu vada, ti seguiro.\nB: Dovunque sia, lo troveremo.",
     exampleSrc:"A: Wherever you go, I will follow you.\nB: Wherever he is, we will find him.",
     funFact:"'Dovunque' comes from 'dove' (where) + 'unque' (ever). It triggers the subjunctive because the location is unknown. The phrase 'Dovunque tu vada, portami con te' (Wherever you go, take me with you) is a classic Italian romantic expression."},

    {type:"teach", trg:"come se", src:"as if / as though", pos:"conj", gender:null,
     note:"Takes the imperfect subjunctive. Expresses hypothetical comparison.\n'Come se fosse' = as if it were.",
     example:"A: Parla come se sapesse tutto.\nB: Si comporta come se fosse il capo.",
     exampleSrc:"A: He speaks as if he knew everything.\nB: He behaves as if he were the boss.",
     funFact:"'Come se' always takes the imperfect subjunctive ('congiuntivo imperfetto'), never the present. This is because 'as if' describes an unreal comparison. 'Come se fosse facile!' (As if it were easy!) is a common sarcastic expression. English mirrors this with 'as if it were' (subjunctive)."},

    {type:"teach", trg:"Dio voglia che", src:"God willing that / may God grant", pos:"verb", gender:null,
     note:"Wish expression with subjunctive. Expresses hope.\n'Voglia' = subjunctive of 'volere.'",
     example:"A: Dio voglia che tutto vada bene.\nB: Speriamo! Dio voglia che guarisca presto.",
     exampleSrc:"A: God willing, everything will go well.\nB: Let's hope! May God grant he recovers soon.",
     funFact:"Religious expressions with the subjunctive are deeply embedded in Italian culture: 'Dio voglia' (God willing), 'Che Dio ti benedica' (May God bless you), 'Sia fatta la Sua volonta' (Thy will be done). Even secular Italians use them as cultural expressions rather than strictly religious statements."},

    {type:"teach", trg:"senza che", src:"without (someone doing)", pos:"conj", gender:null,
     note:"Conjunction that requires the subjunctive.\nUsed when the subjects are different.",
     example:"A: E uscito senza che nessuno lo vedesse.\nB: Ha fatto tutto senza che io lo sapessi.",
     exampleSrc:"A: He left without anyone seeing him.\nB: He did everything without me knowing.",
     funFact:"'Senza che' (without) takes the subjunctive because the action did not happen. When the subject is the same, use 'senza + infinitive': 'E uscito senza parlare' (He left without speaking). The two-subject rule applies here just as with 'prima che' and 'affinché.'"},

    {type:"teach", trg:"nel caso che", src:"in case / in the event that", pos:"conj", gender:null,
     note:"Conditional conjunction. Always requires the subjunctive.\nAlternative: 'nel caso in cui.'",
     example:"A: Porta l'ombrello, nel caso che piova.\nB: Buona idea, nel caso che faccia freddo, prendo anche la giacca.",
     exampleSrc:"A: Bring the umbrella, in case it rains.\nB: Good idea, in case it gets cold, I will also take the jacket.",
     funFact:"'Nel caso che' (in the event that) triggers the subjunctive because the event is merely possible, not certain. The longer form 'nel caso in cui' is equally valid. Both are common in everyday Italian for contingency planning. 'Casomai' is the informal equivalent."},

    {type:"tip", title:"Subjunctive in Fixed Expressions",
     text:"Fixed subjunctive expressions fall into patterns:\n\nCondition: purche (provided that), nel caso che (in case)\nConcession: sebbene, malgrado (although)\nManner: come se (as if), senza che (without)\nIndefinite: chiunque, dovunque, qualunque\nWishes: magari, Dio voglia, che + subjunctive\n\nThese are automatic: no thinking needed. The phrase itself demands the subjunctive.",
     deepDive:{title:"Subjunctive as Wish-Maker",
      text:"The subjunctive alone can express a wish or command in Italian:\n\n'Che sia felice!' (May he be happy!)\n'Che venga pure!' (Let him come!)\n'Che Dio ce la mandi buona!' (May God help us!)\n\nThis 'hortative' or 'optative' subjunctive needs no trigger phrase. The 'che' + subjunctive alone creates the wish. It is one of the oldest uses of the subjunctive, preserved from Latin."}},

    // Quiz steps
    {type:"mc", q:"What does 'purche' mean?",
     opts:["Provided that or as long as","After doing something specific","Despite everything that happens","Because of that specific reason"],
     ans:"Provided that or as long as",
     hint:"This conjunction sets a condition. The action is allowed only if the requirement after 'purche' is fulfilled."},

    {type:"fb", s:"Puoi uscire, {1} tu finisca i compiti.",
     a:["purche"],
     opts:["purche","perché","dopo che","quando"],
     hint:"This conjunction means 'as long as' and always takes the subjunctive. It sets a condition for permission.",
     sSrc:"You can go out, {1} you finish your homework."},

    {type:"match", pairs:[
      {trg:"purche", src:"provided that"},
      {trg:"sebbene", src:"although"},
      {trg:"chiunque", src:"whoever"},
      {trg:"dovunque", src:"wherever"},
      {trg:"senza che", src:"without (someone)"}
    ]},

    {type:"mc", q:"What is special about 'come se' and the subjunctive?",
     opts:["It takes only the present subjunctive form","It always takes the imperfect subjunctive","It can use either indicative or subjunctive freely","It does not require any subjunctive at all"],
     ans:"It always takes the imperfect subjunctive",
     hint:"'As if' describes an unreal comparison. 'Come se fosse' (as if it were) uses the past s..., not the present."},

    {type:"fb", s:"{1} tu vada, ti seguiro.",
     a:["Dovunque"],
     opts:["Dovunque","Quando","Perche","Anche se"],
     hint:"This indefinite adverb means 'wherever' and triggers the subjunctive because the destination is unknown.",
     sSrc:"{1} you go, I will follow you."},

    {type:"mc", q:"What does 'che io sappia' express in conversation?",
     opts:["A question about what is known","Complete certainty about a fact","Limited knowledge with possible uncertainty","A strong command to the listener"],
     ans:"Limited knowledge with possible uncertainty",
     hint:"This fixed phrase means 'as far as I know.' It allows you to give information while signaling that you might be wrong."},

    {type:"fb", s:"E uscito {1} che nessuno lo vedesse.",
     a:["senza"],
     opts:["senza","prima","dopo","mentre"],
     hint:"Nobody saw him leave. This conjunction means 'without' and takes the subjunctive when the subjects differ.",
     sSrc:"He left {1} anyone seeing him."},

    {type:"mc", q:"Why does 'nel caso che' require the subjunctive?",
     opts:["Because it is always used in questions only","Because 'caso' is an irregular noun form","Because it describes a completed past action","Because the event is only possible, not certain"],
     ans:"Because the event is only possible, not certain",
     hint:"'In case' prepares for something that may or may not occur. Uncertainty about the future triggers the subjunctive mood."}
  ,{type:"match",pairs:[{trg:"magari",src:"I wish / if only / maybe"},{trg:"che io sappia",src:"as far as I know"},{trg:"comunque sia",src:"however it may be / in any case"},{trg:"come se",src:"as if / as though"},{trg:"Dio voglia che",src:"God willing that / may God grant"}]},{type:"mc",q:"How do you say \"in case / in the event that\" in Italian?",opts:["nel caso che","purche","sebbene","magari"],ans:"nel caso che",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U13_L1;
