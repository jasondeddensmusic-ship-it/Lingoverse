// Unit 13 Batch2. Lesson 2: Irregular Subjunctive Verbs & Expressions
const BATCH2_U13_L2 = {
  id:"itv2_u13l_b2_2", title:"Piaccia o no", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Piaccia o no",
     desc:"Expand your irregular subjunctive mastery with more high-frequency verbs: piacere, dare, sapere, and bere. Then practice the subjunctive in polite requests and opinion clashes.",
     goals:["Learn subjunctive of piacere, dare, bere, tradurre","Use subjunctive in polite requests","Express disagreement with subjunctive nuance"]},

    {type:"teach", trg:"piaccia", src:"(that) it please / be liked (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'piacere.' Irregular stem.\nChe mi piaccia = that I like (lit. that it please me).",
     example:"A: Spero che ti piaccia il regalo.\nB: Penso che mi piaccia molto!",
     exampleSrc:"A: I hope you like the gift.\nB: I think I like it a lot!",
     funFact:"'Piacere' works backwards compared to English: 'Mi piace il gelato' literally means 'Ice cream is pleasing to me.' In the subjunctive, 'piaccia' follows the same logic: 'Spero che ti piaccia' = 'I hope it is pleasing to you.' The indirect object (ti, mi, gli) tells who is pleased."},

    {type:"teach", trg:"dia", src:"(that) I/you/he give (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'dare.' Very short and irregular.\nChe io dia, che tu dia, che lui dia.",
     example:"A: Voglio che mi dia una risposta.\nB: Spero che ci dia tempo per pensare.",
     exampleSrc:"A: I want him to give me an answer.\nB: I hope he gives us time to think.",
     funFact:"'Dia' is one of the shortest subjunctive forms in Italian. The noi form is 'diamo' (same as indicative), voi is 'diate,' and loro is 'diano.' 'Dare' compounds follow the same pattern: che io dica (from 'dire') is sometimes confused with 'dia' (from 'dare') by learners."},

    {type:"teach", trg:"beva", src:"(that) I/you/he drink (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'bere.' Irregular stem 'bev-'.\nChe io beva, che tu beva, che lui beva.",
     example:"A: E importante che tu beva molta acqua.\nB: Penso che beva almeno due litri al giorno.",
     exampleSrc:"A: It is important that you drink a lot of water.\nB: I think I drink at least two liters a day.",
     funFact:"'Bere' comes from Latin 'bibere' (to drink), which also gave us 'beverage' and 'imbibe' in English. The subjunctive stem 'bev-' preserves the Latin root more clearly than the shortened infinitive 'bere.' The full indicative 'bevo' also shows this Latin ancestry."},

    {type:"teach", trg:"traduca", src:"(that) I/you/he translate (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'tradurre.' Irregular stem 'traduc-'.\nAll -durre verbs follow this pattern.",
     example:"A: Voglio che traduca questo documento.\nB: Spero che lo traduca bene.",
     exampleSrc:"A: I want him to translate this document.\nB: I hope he translates it well.",
     funFact:"All verbs ending in -durre share the same subjunctive pattern: traduca, produca, conduca, riduca. They descend from Latin '-ducere' verbs. The stem ending in '-uc-' is the hallmark of the subjunctive for this entire verb family."},

    {type:"teach", trg:"valga", src:"(that) it be worth (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'valere.' Irregular stem 'valg-'.\nChe io valga, che tu valga, che lui valga.",
     example:"A: Non credo che valga la pena.\nB: Penso che valga la pena provare.",
     exampleSrc:"A: I don't think it is worth it.\nB: I think it is worth trying.",
     funFact:"'Valere la pena' (to be worth the trouble) is one of the most common Italian expressions using 'valere.' In the subjunctive, 'Non credo che valga la pena' (I don't think it's worth it) is used constantly. 'Valga' also appears in the legal phrase 'valga quanto basta' (let it suffice)."},

    {type:"teach", trg:"non penso che", src:"I don't think that", pos:"verb", gender:null,
     note:"Negative opinion trigger. Strengthens the subjunctive requirement.\nNegating 'pensare' adds doubt to the opinion.",
     example:"A: Non penso che sia giusto.\nB: Non penso che abbiano ragione.",
     exampleSrc:"A: I don't think it is fair.\nB: I don't think they are right.",
     funFact:"Negating opinion verbs strengthens the subjunctive: 'Penso che venga' (I think he's coming) already uses it, but 'Non penso che venga' (I don't think he's coming) makes it even more essential. The negation introduces a layer of doubt on top of opinion."},

    {type:"teach", trg:"suppongo che", src:"I suppose that", pos:"verb", gender:null,
     note:"Subjunctive trigger. 'Supporre' (to suppose) + 'che.'\nExpresses a tentative assumption.",
     example:"A: Suppongo che arrivi domani.\nB: Suppongo che sia vero, ma non ne sono certo.",
     exampleSrc:"A: I suppose he arrives tomorrow.\nB: I suppose it is true, but I am not certain.",
     funFact:"'Supporre' comes from Latin 'supponere' (to place under, to assume). Like 'pensare' and 'credere,' it triggers the subjunctive because it expresses an assumption rather than a known fact. 'Si suppone che' (it is supposed that) is the impersonal version."},

    {type:"teach", trg:"pare che", src:"it seems that / apparently", pos:"verb", gender:null,
     note:"Impersonal trigger. 'Parere' = to seem, to appear.\n'A quanto pare' = apparently (fixed phrase).",
     example:"A: Pare che il governo abbia deciso.\nB: A quanto pare, la legge cambia.",
     exampleSrc:"A: It seems the government has decided.\nB: Apparently, the law is changing.",
     funFact:"'Parere' and 'sembrare' both mean 'to seem,' but 'parere' is slightly more formal and literary. The expression 'a quanto pare' (from what it appears) is extremely common in spoken Italian to relay information without committing to its truth. It elegantly hedges any claim."},

    {type:"teach", trg:"e meglio che", src:"it is better that", pos:"adj", gender:null,
     note:"Impersonal judgment trigger. 'Meglio' = better.\nAlways requires the subjunctive.",
     example:"A: E meglio che tu vada dal dottore.\nB: E meglio che io parta presto.",
     exampleSrc:"A: It is better that you go to the doctor.\nB: It is better that I leave early.",
     funFact:"'E meglio che' belongs to the family of impersonal judgment expressions like 'e importante che' and 'e necessario che.' Italian has a rich set of these: 'e ora che' (it is time that), 'e giusto che' (it is fair that), 'e assurdo che' (it is absurd that). All take the subjunctive."},

    {type:"teach", trg:"non e detto che", src:"it is not certain that / that doesn't mean", pos:"verb", gender:null,
     note:"Negative impersonal trigger. Literally 'it is not said that.'\nExpresses that something is not guaranteed.",
     example:"A: Non e detto che vinca il migliore.\nB: Non e detto che piova domani.",
     exampleSrc:"A: It is not certain that the best will win.\nB: That doesn't mean it will rain tomorrow.",
     funFact:"'Non e detto che' is a uniquely Italian expression that challenges assumptions. Literally 'it is not said that,' it pushes back on certainty. Italians use it to temper expectations: 'Non e detto che sia facile' (It is not guaranteed to be easy). Always followed by the subjunctive."},

    {type:"teach", trg:"ammesso che", src:"assuming that / granted that", pos:"conj", gender:null,
     note:"Conditional conjunction. Always requires the subjunctive.\nFrom 'ammettere' (to admit, to allow).",
     example:"A: Ammesso che sia vero, cosa facciamo?\nB: Ammesso che tu abbia ragione, non cambia nulla.",
     exampleSrc:"A: Assuming it is true, what do we do?\nB: Granted that you are right, it changes nothing.",
     funFact:"'Ammesso che' comes from 'ammettere' (to admit). It introduces a hypothesis that the speaker is willing to accept for the sake of argument. Combined with 'e non concesso' (and not granted), it becomes the legal phrase 'ammesso e non concesso che' (even granting, which we do not)."},

    // Quiz steps
    {type:"mc", q:"What is the subjunctive of 'piacere' in 'Spero che ti ___'?",
     opts:["piace","piaccia","piacere","piaciuto"],
     ans:"piaccia",
     hint:"This irregular form follows 'che.' In the subjunctive, 'piacere' changes its stem. The same form works for io, tu, and lui/lei."},

    {type:"fb", s:"E importante che tu {1} molta acqua.",
     a:["beva"],
     opts:["beva","bevi","bere","bevuto"],
     hint:"After 'e importante che,' use the subjunctive. 'Bere' has the irregular stem 'bev-' in the subjunctive.",
     sSrc:"It is important that you {1} a lot of water."},

    {type:"match", pairs:[
      {trg:"piaccia", src:"(that) please (piacere)"},
      {trg:"dia", src:"(that) give (dare)"},
      {trg:"beva", src:"(that) drink (bere)"},
      {trg:"traduca", src:"(that) translate (tradurre)"},
      {trg:"valga", src:"(that) be worth (valere)"}
    ]},

    {type:"mc", q:"What does 'non e detto che' mean?",
     opts:["It is absolutely forbidden to say that","Nobody has ever said that aloud before","It is not certain or guaranteed that","The words have not been written down yet"],
     ans:"It is not certain or guaranteed that",
     hint:"Literally 'it is not said that.' It challenges certainty and pushes back on assumptions. Always followed by the subjunctive."},

    {type:"fb", s:"Non credo che {1} la pena.",
     a:["valga"],
     opts:["valga","vale","valere","valuto"],
     hint:"'Valere la pena' means 'to be worth it.' After 'non credo che,' the subjunctive form uses the stem 'valg-.'",
     sSrc:"I don't think it {1} the trouble."},

    {type:"mc", q:"Which trigger expresses a tentative assumption, not a firm opinion?",
     opts:["So che (I know that)","Suppongo che (I suppose that)","Dico che (I say that)","Vedo che (I see that)"],
     ans:"Suppongo che (I suppose that)",
     hint:"'Supporre' means to place an idea underneath as a hypothesis. It is more tentative than 'pensare' (to think)."},

    {type:"fb", s:"E meglio che tu {1} dal dottore.",
     a:["vada"],
     opts:["vada","vai","andare","andato"],
     hint:"'E meglio che' is an impersonal judgment requiring the subjunctive. The verb 'andare' changes its stem completely.",
     sSrc:"It is better that you {1} to the doctor."},

    {type:"mc", q:"What does 'ammesso che' introduce?",
     opts:["A conclusion based on proven facts","A hypothesis accepted for the sake of argument","A past event that is now completed","A direct quote from another person"],
     ans:"A hypothesis accepted for the sake of argument",
     hint:"From 'ammettere' (to admit). The speaker grants a point hypothetically, without fully accepting it as fact."}
  ,{type:"match",pairs:[{trg:"non penso che",src:"I don't think that"},{trg:"pare che",src:"it seems that / apparently"},{trg:"e meglio che",src:"it is better that"},{trg:"non e detto che",src:"it is not certain that / that doesn't mean"},{trg:"ammesso che",src:"assuming that / granted that"}]}]
};
export default BATCH2_U13_L2;
