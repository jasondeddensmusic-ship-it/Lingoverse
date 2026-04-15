// Unit 30 Expansion — Lesson 6: Il congiuntivo trapassato e il passato
const LESSON_6 = {
  id:"itv2_u30l6", title:"Il congiuntivo trapassato", icon:"⏳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il congiuntivo trapassato",
     desc:"Master the past subjunctive (congiuntivo trapassato) for expressing regret, unrealized past conditions, and wishes about the past. Complete your subjunctive mastery.",
     goals:["Form and use the congiuntivo trapassato correctly","Express regrets and unrealized past wishes","Distinguish all four subjunctive tenses in context"]},

    {type:"tip", title:"Il congiuntivo trapassato",
     text:"Formation: congiuntivo imperfetto of avere/essere + past participle.\n\navessi + parlato = I had spoken (subjunctive)\nfossi + andato/a = I had gone (subjunctive)\n\nUsed for:\n1. Past unreal conditions (tipo 3): 'Se avessi studiato, avrei passato l'esame.'\n2. After past-tense opinion verbs: 'Pensavo che fosse gia partito.'\n3. Wishes about the past: 'Magari avessi ascoltato!'",
     deepDive:"The congiuntivo trapassato expresses actions that did NOT happen in the past.\n\nWith 'magari': 'Magari fossi venuto!' (If only I had come!)\nWith 'se solo': 'Se solo avessi saputo!' (If only I had known!)\nWith past opinions: 'Credevo che avesse finito.' (I thought he had finished.)\n\nThe concordanza dei tempi (sequence of tenses) is crucial:\nMain verb in past + subordinate action BEFORE the main action = congiuntivo trapassato."},

    {type:"teach", trg:"magari avessi", src:"if only I had (past wish)", pos:"verb", gender:null,
     note:"'Magari' + congiuntivo trapassato expresses regret about the past.\n'Magari fossi stato/a li!' = If only I had been there!",
     example:"A: Magari avessi studiato di piu all'universita.\nB: Non e mai troppo tardi per imparare.",
     exampleSrc:"A: If only I had studied more at university.\nB: It is never too late to learn.",
     funFact:"'Magari!' is one of Italian's most versatile exclamations. Alone, it means 'I wish!' or 'If only!' With the congiuntivo trapassato, it expresses a poignant, irreversible regret. With the congiuntivo imperfetto, it expresses an unlikely but possible wish."},

    {type:"teach", trg:"credevo che avesse", src:"I thought he/she had (past subjunctive)", pos:"verb", gender:null,
     note:"Past opinion verb + che + congiuntivo trapassato.\nUsed when the subordinate action happened BEFORE the main action.\n'Credevo che avesse gia finito.' = I thought he had already finished.",
     example:"A: Credevo che avesse gia pagato il conto.\nB: No, il conto e ancora aperto.",
     exampleSrc:"A: I thought he had already paid the bill.\nB: No, the bill is still open.",
     funFact:"The concordanza dei tempi is one of the hardest aspects of Italian grammar, even for native speakers. Many Italians would say 'Credevo che aveva pagato' (indicative), which is technically incorrect but extremely common in speech."},

    {type:"teach", trg:"se solo fossi stato", src:"if only I had been", pos:"verb", gender:null,
     note:"'Se solo' + congiuntivo trapassato = intense regret.\nGender agreement: 'fossi stato' (m), 'fossi stata' (f).\nMore emphatic than 'se' alone.",
     example:"A: Se solo fossi stato piu attento, non sarebbe successo.\nB: Non puoi cambiare il passato, guarda avanti.",
     exampleSrc:"A: If only I had been more careful, it would not have happened.\nB: You cannot change the past, look forward.",
     funFact:"'Se solo' adds emotional intensity to the already regretful congiuntivo trapassato. Italian literature is full of 'se solo' moments, from Leopardi's existential regrets to Pavese's reflections on missed opportunities. Regret is a deeply Italian literary theme."},

    {type:"teach", trg:"prima che partisse", src:"before he/she left (past subjunctive)", pos:"verb", gender:null,
     note:"'Prima che' + congiuntivo imperfetto (past context).\nUsed when both events are in the past.\n'Prima che arrivasse' = before he/she arrived.",
     example:"A: L'ho chiamato prima che partisse.\nB: Meno male, altrimenti non l'avresti raggiunto.",
     exampleSrc:"A: I called him before he left.\nB: Thank goodness, otherwise you would not have reached him.",
     funFact:"'Prima che' always takes the subjunctive, whether in present or past contexts. The logic is the same: at the moment of the main action, the subordinate event has not yet happened. This 'not yet' quality is what the subjunctive captures perfectly."},

    {type:"mc",
     q:"'Magari ___ venuto alla festa!' Quale forma esprime il rimpianto?",
     opts:["fossi","sono","ero","saro"],
     ans:"fossi",
     hint:"A wish about the past that can never be fulfilled. 'Magari' plus the past subjunctive of essere (with past participle) expresses irreversible regret."},

    {type:"teach", trg:"nonostante avesse provato", src:"despite having tried (past subjunctive)", pos:"verb", gender:null,
     note:"Concessive conjunction + congiuntivo trapassato.\nUsed when the conceded action happened in the past.\n'Nonostante fosse stanco' = despite being tired (at that time).",
     example:"A: Nonostante avesse provato molte volte, non ci riusciva.\nB: Alla fine ha trovato un altro metodo.",
     exampleSrc:"A: Despite having tried many times, he could not do it.\nB: In the end he found another method.",
     funFact:"The congiuntivo trapassato after concessive conjunctions adds a layer of empathy: you acknowledge someone's effort before noting their failure. It is a grammatically sophisticated way to be kind while being honest."},

    {type:"teach", trg:"senza che nessuno sapesse", src:"without anyone knowing", pos:"verb", gender:null,
     note:"'Senza che' + congiuntivo (always).\nIn past contexts, use congiuntivo imperfetto.\n'Senza che lo vedessero' = without them seeing it.",
     example:"A: Usci di casa senza che nessuno lo sapesse.\nB: Si accorsero della sua assenza solo la mattina dopo.",
     exampleSrc:"A: He left the house without anyone knowing.\nB: They noticed his absence only the next morning.",
     funFact:"'Senza che' always requires the subjunctive because it describes something that did NOT happen. Nobody knew, nobody saw, nobody heard. The subjunctive marks this negative space, this absence of awareness."},

    {type:"fb",
     s:"Credevo che Maria {1} gia partita per Londra.",
     a:["fosse"],
     opts:["fosse","era","e","sia"],
     hint:"The main verb is past ('credevo'), and Maria's departure happened before the thinking. The congiuntivo trapassato of 'essere' is needed.",
     sSrc:"I thought Maria had already left for London."},

    {type:"verb_table", title:"Congiuntivo trapassato: avere e essere",
     groups:[
       {label:"avere (compound: avessi + participio)", rows:[
         {pronoun:"io", form:"avessi parlato", src:"I had spoken"},
         {pronoun:"tu", form:"avessi parlato", src:"you had spoken"},
         {pronoun:"lui/lei", form:"avesse parlato", src:"he/she had spoken"},
         {pronoun:"noi", form:"avessimo parlato", src:"we had spoken"},
         {pronoun:"voi", form:"aveste parlato", src:"you (pl.) had spoken"},
         {pronoun:"loro", form:"avessero parlato", src:"they had spoken"}
       ]},
       {label:"essere (compound: fossi + participio)", rows:[
         {pronoun:"io", form:"fossi andato/a", src:"I had gone"},
         {pronoun:"tu", form:"fossi andato/a", src:"you had gone"},
         {pronoun:"lui/lei", form:"fosse andato/a", src:"he/she had gone"},
         {pronoun:"noi", form:"fossimo andati/e", src:"we had gone"},
         {pronoun:"voi", form:"foste andati/e", src:"you (pl.) had gone"},
         {pronoun:"loro", form:"fossero andati/e", src:"they had gone"}
       ]}
     ],
     note:"The auxiliary (avessi/fossi) is in the congiuntivo imperfetto. The past participle follows the same agreement rules as other compound tenses."},

    {type:"mc",
     q:"Quale frase esprime un rimpianto impossibile da realizzare?",
     opts:["Magari potessi venire domani","Magari fossi venuto ieri","Spero che tu venga","Penso che sia giusto"],
     ans:"Magari fossi venuto ieri",
     hint:"Only one option refers to the past with the congiuntivo trapassato. 'Yesterday' cannot be changed, making the wish impossible to fulfill."},

    {type:"match", pairs:[
      {trg:"magari avessi saputo", src:"if only I had known"},
      {trg:"credevo che fosse partito", src:"I thought he had left"},
      {trg:"se solo fossi stato li", src:"if only I had been there"},
      {trg:"prima che arrivasse", src:"before he arrived"},
      {trg:"senza che lo sapesse", src:"without him knowing"}
    ]},

    {type:"fb",
     s:"E uscito di casa {1} che nessuno lo vedesse.",
     a:["senza"],
     opts:["senza","prima","dopo","quando"],
     hint:"A preposition that, when followed by 'che,' always requires the subjunctive. It describes the absence of an action: nobody saw him.",
     sSrc:"He left the house {1} anyone seeing him."},

    {type:"mc",
     q:"Quanti tempi del congiuntivo esistono in italiano?",
     opts:["Due: presente e passato","Tre: presente, imperfetto e trapassato","Quattro: presente, passato, imperfetto e trapassato","Uno: solo il presente"],
     ans:"Quattro: presente, passato, imperfetto e trapassato",
     hint:"Italian has a complete set: the simple present and imperfect, plus their compound forms (past and past perfect). Each serves a distinct function in the tense system."}
  ]
};
export default LESSON_6;
