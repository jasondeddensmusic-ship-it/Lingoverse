// Unit 30 Expansion. Lesson 4: Il congiuntivo nelle relative
const LESSON_4 = {
  id:"itv2_u30l4", title:"Il congiuntivo nelle relative", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il congiuntivo nelle relative",
     desc:"Learn when and why the subjunctive appears in relative clauses. Master this advanced grammar point to express nuance, desire, and uncertainty in descriptions.",
     goals:["Recognize when relative clauses require the subjunctive","Express desired qualities using the subjunctive in relative clauses","Distinguish between indicative and subjunctive in relative clauses"]},

    {type:"tip", title:"Congiuntivo nelle frasi relative",
     text:"The subjunctive appears in relative clauses when the antecedent is:\n\n1. Indefinite or desired (not yet found):\n'Cerco un lavoro che sia stimolante.' (I am looking for a job that is stimulating.)\n\n2. After superlatives:\n'E il film piu bello che io abbia mai visto.' (It is the most beautiful film I have ever seen.)\n\n3. After negative expressions:\n'Non c'e nessuno che sappia farlo.' (There is no one who knows how to do it.)",
     deepDive:"The key distinction is between KNOWN and UNKNOWN/DESIRED antecedents.\n\nIndicative (known): 'Ho un amico che parla cinese.' (I have a friend who speaks Chinese. He exists, I know him.)\n\nSubjunctive (unknown/desired): 'Cerco un amico che parli cinese.' (I am looking for a friend who speaks Chinese. I have not found one yet.)\n\nAfter superlatives, the subjunctive adds a sense of personal judgment: 'il miglior ristorante che conosca' (the best restaurant I know)."},

    {type:"teach", trg:"cerco qualcuno che", src:"I am looking for someone who (subjunctive)", pos:"verb", gender:null,
     note:"'Cercare' + relative clause with subjunctive.\nThe subjunctive signals the person has not been found yet.\nIndicative would mean you already know them.",
     example:"A: Cerco qualcuno che sappia programmare in Python.\nB: Conosco una ragazza che potrebbe aiutarti.",
     exampleSrc:"A: I am looking for someone who knows how to program in Python.\nB: I know a girl who could help you.",
     funFact:"This is one of the clearest subjunctive triggers in Italian. Job ads use it constantly: 'Si cerca candidato che abbia esperienza...' The subjunctive tells you the ideal candidate has not been found yet, which is the whole point of advertising."},

    {type:"teach", trg:"il piu bello che abbia mai", src:"the most beautiful I have ever (subjunctive)", pos:"noun", gender:"m",
     note:"Superlative + 'che' + congiuntivo passato.\nExpresses a personal, subjective judgment.\n'Il piu ... che + congiuntivo' is standard.",
     example:"A: E il libro piu interessante che abbia mai letto.\nB: Davvero? Devo leggerlo anch'io.",
     exampleSrc:"A: It is the most interesting book I have ever read.\nB: Really? I must read it too.",
     funFact:"Using the indicative after a superlative ('il piu bello che ho visto') is increasingly common in spoken Italian, but the subjunctive ('che abbia visto') remains the grammatically correct and more elegant form. It signals personal experience rather than objective fact."},

    {type:"teach", trg:"non c'e nessuno che", src:"there is no one who (subjunctive)", pos:"verb", gender:null,
     note:"Negative expression + relative clause with subjunctive.\n'Non c'e niente che' = there is nothing that.\nThe negative triggers the subjunctive because the thing does not exist.",
     example:"A: Non c'e nessuno che possa aiutarmi?\nB: Aspetta, provo a chiamare Marco.",
     exampleSrc:"A: Is there no one who can help me?\nB: Wait, I will try calling Marco.",
     funFact:"Negative expressions naturally pair with the subjunctive because they describe a void, something that does not exist. 'Non conosco nessuno che parli finlandese' (I do not know anyone who speaks Finnish) uses the subjunctive because the person is absent from your world."},

    {type:"mc",
     q:"'Cerco un appartamento che {1} due camere da letto.' Quale forma e corretta?",
     opts:["abbia","avra","aveva","ha"],
     ans:"abbia",
     hint:"You have not found the apartment yet. The subjunctive is needed because the antecedent (the apartment) is desired but unknown."},

    {type:"teach", trg:"l'unico che", src:"the only one who (subjunctive)", pos:"verb", gender:null,
     note:"'Unico/a' + 'che' + congiuntivo.\nAlso: 'il solo/a che' = the only one who.\nThe subjunctive underlines the exceptional, singular nature.",
     example:"A: Sei l'unica persona che mi capisca.\nB: Non sono l'unica, ma grazie.",
     exampleSrc:"A: You are the only person who understands me.\nB: I am not the only one, but thank you.",
     funFact:"After 'unico,' 'solo,' and 'primo,' the subjunctive adds emphasis to the exceptional nature of the description. It is as if the speaker is saying: 'as far as I can tell, in all my experience, you are the only one.'"},

    {type:"teach", trg:"comunque", src:"however / no matter how", pos:"adv", gender:null,
     note:"Adverb/conjunction. When meaning 'however,' triggers the subjunctive.\n'Comunque vada' = however it goes. 'Comunque sia' = however it may be.",
     example:"A: Comunque vada, sono contento di averci provato.\nB: L'importante e non avere rimpianti.",
     exampleSrc:"A: However it goes, I am glad I tried.\nB: The important thing is to have no regrets.",
     funFact:"'Comunque vada, sara un successo' (however it goes, it will be a success) became a famous phrase from an Italian TV show. 'Comunque' with the subjunctive expresses philosophical acceptance, a very Italian attitude toward uncertain outcomes."},

    {type:"fb",
     s:"E il film piu emozionante che io {1} mai visto.",
     a:["abbia"],
     opts:["abbia","ho","avevo","avro"],
     hint:"After a superlative ('il piu...'), Italian requires the congiuntivo passato in the relative clause. The auxiliary in the past subjunctive of 'avere.'",
     sSrc:"It is the most moving film I have ever seen."},

    {type:"teach", trg:"ovunque", src:"wherever", pos:"adv", gender:null,
     note:"Adverb requiring the congiuntivo.\n'Ovunque tu vada' = wherever you go. Expresses an unknown or indefinite location.",
     example:"A: Ovunque tu vada, ti seguiro.\nB: Promessa romantica o minaccia?",
     exampleSrc:"A: Wherever you go, I will follow you.\nB: Romantic promise or threat?",
     funFact:"'Ovunque,' 'dovunque' (wherever), 'qualunque' (whichever), and 'chiunque' (whoever) all require the subjunctive because they express indefiniteness. The unknown quality of 'wherever' and 'whoever' is exactly what the subjunctive mood communicates."},

    {type:"teach", trg:"chiunque", src:"whoever / anyone who", pos:"pron", gender:null,
     note:"Indefinite pronoun requiring the congiuntivo.\n'Chiunque venga' = whoever comes. 'Chiunque sia' = whoever it may be.",
     example:"A: Chiunque abbia bisogno di aiuto puo chiamarci.\nB: Il servizio e gratuito e anonimo.",
     exampleSrc:"A: Whoever needs help can call us.\nB: The service is free and anonymous.",
     funFact:"'Chiunque' is both a pronoun and a conjunction. It always takes the subjunctive because the person referred to is inherently unknown or unspecified. Even in informal speech, 'chiunque sia' (whoever it may be) naturally takes the subjunctive."},

    {type:"mc",
     q:"Perche si usa il congiuntivo dopo 'cerco qualcuno che...'?",
     opts:["Perche il verbo 'cercare' lo richiede sempre","Perche la persona cercata non e ancora stata trovata: l'antecedente e indefinito","Perche si parla del passato","Perche e una domanda"],
     ans:"Perche la persona cercata non e ancora stata trovata: l'antecedente e indefinito",
     hint:"The subjunctive signals that the described person or thing does not yet exist in your experience. You are describing a desired quality, not a known reality."},

    {type:"match", pairs:[
      {trg:"cerco qualcuno che sappia", src:"I am looking for someone who knows"},
      {trg:"il piu bello che abbia visto", src:"the most beautiful I have seen"},
      {trg:"non c'e nessuno che possa", src:"there is no one who can"},
      {trg:"ovunque tu vada", src:"wherever you go"},
      {trg:"chiunque venga", src:"whoever comes"}
    ]},

    {type:"fb",
     s:"{1} tu vada, troverai persone gentili.",
     a:["Ovunque"],
     opts:["Ovunque","Quando","Perche","Dove"],
     hint:"An adverb meaning 'wherever' or 'no matter where.' It always requires the subjunctive because the destination is indefinite.",
     sSrc:"{1} you go, you will find kind people."},

    {type:"mc",
     q:"Quale frase richiede il congiuntivo nella relativa?",
     opts:["Il gatto che viveva qui si e trasferito","Ho un gatto che dorme tutto il giorno","Cerco un gatto che non perda troppo pelo","Il gatto che ho adottato e affettuoso"],
     ans:"Cerco un gatto che non perda troppo pelo",
     hint:"Only one sentence describes something desired but not yet found. The others describe known, existing cats. The subjunctive marks the difference between reality and desire."}
  ]
};
export default LESSON_4;
