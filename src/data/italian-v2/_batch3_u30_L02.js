// Batch 3 — Unit 30 Lesson 2 (Advanced Subjunctive: Subjunctive in Independent Clauses)
const BATCH3_L_2 = {
  id:"itv2_u30l_b3_2", title:"Congiuntivo indipendente", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il congiuntivo indipendente",
     desc:"Master the subjunctive used in independent clauses for wishes, commands, exclamations, and rhetorical questions. These elegant constructions are hallmarks of literary and formal Italian.",
     goals:["Use the subjunctive in wishes and exclamations","Recognize the 'congiuntivo esortativo' for polite commands","Apply the subjunctive in rhetorical questions and formal expressions"]},

    {type:"teach", trg:"che Dio ci aiuti", src:"may God help us", pos:"verb", gender:null,
     note:"An optative subjunctive expressing a wish.\nThe subjunctive stands alone without a main clause verb.\n'Che' + present subjunctive = wish/hope.",
     example:"A: Che Dio ci aiuti a trovare una soluzione.\nB: Ne abbiamo davvero bisogno.",
     exampleSrc:"A: May God help us find a solution.\nB: We truly need it.",
     funFact:"The optative (wish-expressing) subjunctive is ancient, inherited directly from Latin. Italian preserves it in fixed expressions and prayers. 'Che Dio ti benedica' (God bless you) uses the same construction."},

    {type:"teach", trg:"viva l'Italia", src:"long live Italy", pos:"verb", gender:null,
     note:"An exclamatory subjunctive. Third-person present subjunctive of 'vivere.'\n'Viva la libertà!' = long live freedom!",
     example:"A: Viva l'Italia! Viva la Repubblica!\nB: Queste parole risuonano ogni 2 giugno.",
     exampleSrc:"A: Long live Italy! Long live the Republic!\nB: These words resound every June 2nd.",
     funFact:"'Viva' is technically the present subjunctive of 'vivere' (may he/she/it live). During the Risorgimento, 'Viva l'Italia!' and 'Viva Verdi!' (an acronym for Vittorio Emanuele Re d'Italia) were revolutionary slogans."},

    {type:"teach", trg:"si accomodi", src:"please sit down / please come in (formal)", pos:"verb", gender:null,
     note:"The 'congiuntivo esortativo' for polite commands with Lei (formal you).\n'Accomodarsi' = to make oneself comfortable.",
     example:"A: Si accomodi, prego. Il dottore la ricevera tra cinque minuti.\nB: Grazie, molto gentile.",
     exampleSrc:"A: Please sit down. The doctor will see you in five minutes.\nB: Thank you, very kind.",
     funFact:"Italian uses the subjunctive for formal commands (Lei form): 'venga' (come), 'prenda' (take), 'si sieda' (sit down). This is why formal Italian commands sound softer than informal ones, which use the imperative."},

    {type:"teach", trg:"sia chiaro", src:"let it be clear / make no mistake", pos:"verb", gender:null,
     note:"An assertive subjunctive in an independent clause.\n'Sia detto tra noi' = let it be said between us.",
     example:"A: Sia chiaro: non accetteremo compromessi su questo punto.\nB: La nostra posizione e definitiva.",
     exampleSrc:"A: Let it be clear: we will not accept compromises on this point.\nB: Our position is final.",
     funFact:"'Sia chiaro' uses the subjunctive to establish a premise with authority. Politicians and lawyers love this construction because it sounds both firm and elegant. It avoids the bluntness of 'E chiaro che' (indicative)."},

    {type:"teach", trg:"magari fosse vero", src:"if only it were true", pos:"verb", gender:null,
     note:"'Magari' + imperfect subjunctive expresses a strong wish.\nMore emotional than 'se fosse vero' (if it were true).",
     example:"A: Magari potessi viaggiare per il mondo intero!\nB: Chi non lo vorrebbe?",
     exampleSrc:"A: If only I could travel the whole world!\nB: Who would not want that?",
     funFact:"'Magari' comes from Greek 'makarios' (blessed, happy). In modern Italian it means 'I wish!' or 'hopefully!' With the subjunctive, it expresses intense longing: 'Magari piovesse!' (If only it would rain!). Alone, 'Magari!' means 'I wish!'"},

    {type:"mc",
     q:"Che funzione ha il congiuntivo nella frase 'Viva l'Italia'?",
     opts:["Esprime un dubbio sull'esistenza dell'Italia come nazione","Esprime un augurio: che l'Italia viva e prosperi","E un errore grammaticale: dovrebbe essere 'Vive l'Italia'","Indica che l'Italia non esiste più come stato indipendente"],
     ans:"Esprime un augurio: che l'Italia viva e prosperi",
     hint:"The subjunctive here expresses a wish or acclamation: may Italy live! It is an ancient construction inherited from Latin."},

    {type:"teach", trg:"non sia mai", src:"God forbid / let it never be", pos:"verb", gender:null,
     note:"An independent subjunctive expressing strong rejection or warning.\n'Non sia mai che...' = God forbid that...",
     example:"A: Non sia mai che si ripetano gli errori del passato.\nB: Dobbiamo imparare dalla storia.",
     exampleSrc:"A: God forbid the mistakes of the past be repeated.\nB: We must learn from history.",
     funFact:"'Non sia mai' is an emphatic negative wish. Italian has several similar expressions: 'Dio non voglia' (God forbid), 'Ci mancherebbe' (that would be the last straw). All use the subjunctive to express what must not happen."},

    {type:"teach", trg:"che io sappia", src:"as far as I know / to my knowledge", pos:"verb", gender:null,
     note:"Independent subjunctive expressing epistemic hedging.\nMore formal than 'per quanto ne so' (indicative).",
     example:"A: Che io sappia, la riunione non e stata annullata.\nB: Ma verifico subito per sicurezza.",
     exampleSrc:"A: To my knowledge, the meeting has not been cancelled.\nB: But I will check right away to be sure.",
     funFact:"This construction elegantly limits the speaker's claim to their own knowledge. It is more sophisticated than 'secondo me' (in my opinion) and is common in parliamentary speeches and academic presentations."},

    {type:"teach", trg:"costi quel che costi", src:"whatever the cost / come what may", pos:"verb", gender:null,
     note:"A concessive subjunctive in a fixed expression.\n'Costi' = third-person present subjunctive of 'costare.'",
     example:"A: Raggiungeremo l'obiettivo, costi quel che costi.\nB: La determinazione e la nostra forza.",
     exampleSrc:"A: We will reach the goal, whatever the cost.\nB: Determination is our strength.",
     funFact:"Fixed expressions with the independent subjunctive are fossilized remnants of older Italian. 'Costi quel che costi,' 'vada come vada' (come what may), 'succeda quel che succeda' (whatever happens) all follow this ancient pattern."},

    {type:"fb",
     s:"{1} potessi vivere in Italia per un anno!",
     a:["Magari"],
     opts:["Magari","Forse","Comunque","Tuttavia"],
     hint:"An exclamation expressing a strong wish or longing. From Greek 'makarios' (blessed). Combined with the subjunctive for intense desire.",
     sSrc:"If only I {1} live in Italy for a year!"},

    {type:"teach", trg:"vada come vada", src:"come what may", pos:"verb", gender:null,
     note:"A concessive independent subjunctive. Whatever the outcome.\n'Vada' = third-person present subjunctive of 'andare.'",
     example:"A: Vada come vada, non mi pento della mia decisione.\nB: L'importante e aver seguito il cuore.",
     exampleSrc:"A: Come what may, I do not regret my decision.\nB: The important thing is having followed my heart.",
     funFact:"This fatalistic expression captures a quintessentially Italian attitude: once a decision is made, accept the outcome with grace. It appears in opera, in everyday speech, and in political commentary."},

    {type:"teach", trg:"piaccia o non piaccia", src:"like it or not", pos:"verb", gender:null,
     note:"An independent subjunctive expressing inevitability.\n'Piaccia' = third-person present subjunctive of 'piacere.'",
     example:"A: Piaccia o non piaccia, il mondo sta cambiando.\nB: Dobbiamo adattarci alle nuove realtà.",
     exampleSrc:"A: Like it or not, the world is changing.\nB: We must adapt to the new realities.",
     funFact:"This construction uses the subjunctive to present both possibilities (pleasing or not) as equally possible and irrelevant to the main point. It is a powerful rhetorical device in Italian political discourse."},

    {type:"teach", trg:"sappia", src:"(formal) know / be aware that", pos:"verb", gender:null,
     note:"Third-person present subjunctive of 'sapere,' used as a formal imperative.\n'Sappia che...' = (formal) know that...",
     example:"A: Sappia che la nostra offerta scade domani.\nB: La invito a prendere una decisione entro sera.",
     exampleSrc:"A: Be aware that our offer expires tomorrow.\nB: I invite you to make a decision by evening.",
     funFact:"Using 'sappia' (subjunctive) instead of 'sappi' (imperative) or 'sa' (indicative) creates maximum formality and distance. It is the language of legal notices, formal business communication, and diplomatic correspondence."},

    {type:"mc",
     q:"Perche il congiuntivo e usato per i comandi formali con 'Lei' in italiano?",
     opts:["Perche i comandi formali esprimono dubbio sulla risposta dell'interlocutore","Perche il congiuntivo e il modo verbale della cortesia e della distanza rispettosa","Perche l'imperativo non esiste per la terza persona singolare","Perche il congiuntivo e più facile da coniugare dell'imperativo formale"],
     ans:"Perche il congiuntivo e il modo verbale della cortesia e della distanza rispettosa",
     hint:"The subjunctive softens commands into polite requests. Rather than ordering, it suggests. This politeness strategy is built into Italian grammar."},

    {type:"match", pairs:[
      {trg:"viva l'Italia", src:"long live Italy"},
      {trg:"si accomodi", src:"please sit down"},
      {trg:"sia chiaro", src:"let it be clear"},
      {trg:"magari fosse vero", src:"if only it were true"},
      {trg:"costi quel che costi", src:"whatever the cost"}
    ]},

    {type:"fb",
     s:"{1} o non, il mondo sta cambiando e dobbiamo adattarci.",
     a:["Piaccia"],
     opts:["Piaccia","Piace","Piacere","Piaceva"],
     hint:"The third-person present subjunctive of 'piacere.' Complete the fixed expression meaning 'like it or not.'",
     sSrc:"Like it or not, the world is changing and we must adapt."},

    {type:"mc",
     q:"Da quale lingua greca deriva la parola 'magari'?",
     opts:["Da 'mageiros' (cuoco), per il piacere del buon cibo","Da 'makarios' (beato, felice), per esprimere un desiderio","Da 'magos' (mago), per il senso di meraviglia","Da 'magia' (magia), per il potere delle parole"],
     ans:"Da 'makarios' (beato, felice), per esprimere un desiderio",
     hint:"The Greek word for 'blessed' or 'happy.' The Italian word captures the longing for that blessed state."}
  ,{type:"match",pairs:[{trg:"che Dio ci aiuti",src:"may God help us"},{trg:"non sia mai",src:"God forbid / let it never be"},{trg:"che io sappia",src:"as far as I know / to my knowledge"},{trg:"vada come vada",src:"come what may"},{trg:"sappia",src:"(formal) know / be aware that"}]}]
};
export default BATCH3_L_2;
