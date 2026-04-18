// Batch 3 — Unit 36 Lesson (Comprehensive Review: Exam Strategies & Advanced Writing)
const BATCH3_L_1 = {
  id:"itv2_u36l_b3_1", title:"Strategie d'esame", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Strategie d'esame e scrittura avanzata",
     desc:"Master exam-oriented vocabulary for CILS B2. Practice academic writing structures, formal expressions, and strategies for navigating Italian language exams.",
     goals:["Use exam-specific vocabulary and expressions","Structure arguments for written production tasks","Apply advanced register-switching strategies"]},

    {type:"teach", trg:"la traccia", src:"the prompt / essay topic", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le tracce.\nThe topic or assignment given in an exam.\n'Svolgere la traccia' = to develop the prompt.",
     example:"A: La traccia chiede di discutere i vantaggi della globalizzazione.\nB: Devo organizzare le idee prima di scrivere.",
     exampleSrc:"A: The prompt asks to discuss the advantages of globalization.\nB: I need to organize my ideas before writing.",
     funFact:"In Italian exams, 'traccia' literally means 'trace/track.' The metaphor suggests following a path laid out by the examiner. The CILS B2 exam typically offers three tracce for the written production section."},

    {type:"teach", trg:"la scaletta", src:"the outline / plan", pos:"noun", gender:"f",
     note:"Feminine noun. A structured plan for an essay or speech.\nLiterally 'little ladder.' 'Preparare una scaletta' = to prepare an outline.",
     example:"A: Prima di scrivere, prepara sempre una scaletta.\nB: Introduzione, tre paragrafi centrali e conclusione.",
     exampleSrc:"A: Before writing, always prepare an outline.\nB: Introduction, three central paragraphs, and conclusion.",
     funFact:"Italian writing pedagogy strongly emphasizes the 'scaletta.' Students learn to plan before writing from elementary school. The metaphor of a ladder (scaletta) suggests climbing step by step toward a conclusion."},

    {type:"teach", trg:"il paragrafo", src:"the paragraph", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i paragrafi.\n'Paragrafo introduttivo' = introductory paragraph.",
     example:"A: Ogni paragrafo deve sviluppare un'idea principale.\nB: Inizia con una frase chiave e poi elabora.",
     exampleSrc:"A: Every paragraph must develop a main idea.\nB: Start with a key sentence and then elaborate.",
     funFact:"Italian academic writing tradition values longer, more developed paragraphs than English. A single Italian paragraph might cover what English writing would split into two or three. Connectives within paragraphs are essential for flow."},

    {type:"teach", trg:"il lessico specifico", src:"specialized vocabulary", pos:"noun", gender:"m",
     note:"Masculine compound noun. Domain-specific terminology.\n'Lessico economico/giuridico/scientifico' = economic/legal/scientific vocabulary.",
     example:"A: L'esame CILS B2 valuta anche il lessico specifico.\nB: Usa termini precisi, non parole generiche.",
     exampleSrc:"A: The CILS B2 exam also evaluates specialized vocabulary.\nB: Use precise terms, not generic words.",
     funFact:"The CILS B2 exam, administered by the Universita per Stranieri di Siena, tests four skills: reading, listening, writing, and speaking. Using 'lessico specifico' (instead of vague approximations) is a key criterion for a high score."},

    {type:"teach", trg:"d'altra parte", src:"on the other hand", pos:"conj", gender:null,
     note:"Formal conjunction introducing a contrasting perspective.\nSynonyms: 'd'altro canto,' 'per contro.'",
     example:"A: La tecnologia facilita la comunicazione. D'altra parte, crea nuove forme di isolamento.\nB: E un'arma a doppio taglio.",
     exampleSrc:"A: Technology facilitates communication. On the other hand, it creates new forms of isolation.\nB: It is a double-edged sword.",
     funFact:"'D'altra parte' and its synonym 'd'altro canto' (literally 'from the other side/song') are essential B2 connectives. Using them signals the ability to see multiple perspectives, a key CILS B2 assessment criterion."},

    {type:"mc",
     q:"Che cos'e la 'scaletta' nella scrittura accademica italiana?",
     opts:["Un tipo di grafico usato per visualizzare i dati statistici","Una scheda di valutazione usata dagli esaminatori per assegnare i punteggi","Un piano strutturato dei contenuti del saggio prima della stesura","Una lista di parole chiave da memorizzare per l'esame orale"],
     ans:"Un piano strutturato dei contenuti del saggio prima della stesura",
     hint:"A structured plan prepared before writing. Like climbing a ladder (scala) step by step toward your conclusion."},

    {type:"teach", trg:"in conclusione", src:"in conclusion", pos:"conj", gender:null,
     note:"Formal concluding expression.\nAlternatives: 'per concludere,' 'in definitiva,' 'riassumendo.'",
     example:"A: In conclusione, i dati dimostrano che la riforma e necessaria.\nB: Nonostante le difficolta, i benefici superano i costi.",
     exampleSrc:"A: In conclusion, the data demonstrate that the reform is necessary.\nB: Despite the difficulties, the benefits outweigh the costs.",
     funFact:"Italian exam graders look for proper concluding expressions. Simply stopping without a conclusion lowers the score. 'In conclusione' signals that you are wrapping up and restating your thesis in light of the arguments presented."},

    {type:"teach", trg:"a tal proposito", src:"in this regard / on this matter", pos:"conj", gender:null,
     note:"Formal linking expression. Connects to the previous point.\nSynonym: 'a questo proposito,' 'al riguardo.'",
     example:"A: L'inquinamento e in aumento. A tal proposito, servono nuove politiche ambientali.\nB: Il governo ha annunciato un piano d'azione.",
     exampleSrc:"A: Pollution is increasing. In this regard, new environmental policies are needed.\nB: The government has announced an action plan.",
     funFact:"'A tal proposito' is a hallmark of formal Italian. Using it in an essay signals sophisticated register control. In conversation, Italians would say 'a proposito' (by the way) or simply 'su questo' (on this)."},

    {type:"teach", trg:"vale a dire", src:"that is to say / namely", pos:"conj", gender:null,
     note:"Formal explanatory expression. Introduces a clarification.\nSynonyms: 'cioe' (less formal), 'ossia,' 'ovvero.'",
     example:"A: L'Italia e una repubblica parlamentare, vale a dire che il governo dipende dalla fiducia del parlamento.\nB: Il presidente della Repubblica ha un ruolo di garanzia.",
     exampleSrc:"A: Italy is a parliamentary republic, that is to say the government depends on parliament's confidence.\nB: The president of the Republic has a guarantor role.",
     funFact:"Italian has a rich inventory of explanatory connectives ranging from informal ('cioe') to formal ('vale a dire,' 'ossia'). Choosing the right one demonstrates register awareness, a criterion explicitly tested at B2 level."},

    {type:"fb",
     s:"La traccia dell'esame chiede di discutere vantaggi e svantaggi. {1}, bisogna presentare entrambi i punti di vista.",
     a:["Vale a dire"],
     opts:["Vale a dire","Nonostante","Benche","Purche"],
     hint:"A formal expression meaning 'that is to say' or 'namely.' It introduces a clarification or explanation of the previous statement.",
     sSrc:"The exam prompt asks to discuss advantages and disadvantages. {1}, both points of view must be presented."},

    {type:"teach", trg:"di conseguenza", src:"consequently / as a result", pos:"conj", gender:null,
     note:"Formal conjunction expressing a logical consequence.\nSynonyms: 'pertanto,' 'dunque,' 'percio.'",
     example:"A: I costi sono aumentati. Di conseguenza, i prezzi al consumo sono saliti.\nB: L'inflazione colpisce le famiglie piu vulnerabili.",
     exampleSrc:"A: Costs have increased. Consequently, consumer prices have risen.\nB: Inflation hits the most vulnerable families.",
     funFact:"'Di conseguenza' belongs to the formal register and appears frequently in academic, legal, and journalistic writing. In everyday speech, Italians prefer 'quindi' (therefore) or 'e allora' (and so)."},

    {type:"teach", trg:"non da ultimo", src:"last but not least", pos:"conj", gender:null,
     note:"Formal expression. Introduces the final and often most important point.\nAlternative: 'da ultimo ma non per importanza.'",
     example:"A: Non da ultimo, va considerato l'impatto sociale della riforma.\nB: Le conseguenze sulle famiglie sono il fattore decisivo.",
     exampleSrc:"A: Last but not least, the social impact of the reform must be considered.\nB: The consequences for families are the decisive factor.",
     funFact:"This expression emphasizes that the final point is not the least important. In Italian argumentation, saving a strong point for last is a standard rhetorical strategy, creating a crescendo effect."},

    {type:"teach", trg:"il candidato", src:"the candidate / test-taker", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la candidata.\n'Candidato all'esame' = exam candidate.",
     example:"A: Il candidato deve dimostrare competenza linguistica a livello B2.\nB: La prova scritta dura due ore.",
     exampleSrc:"A: The candidate must demonstrate B2-level linguistic competence.\nB: The written test lasts two hours.",
     funFact:"CILS B2 candidates are often immigrants seeking Italian citizenship (B1 minimum required) or international students entering Italian universities (B2 typically required). The exam is administered at over 700 centers worldwide."},

    {type:"teach", trg:"il quesito", src:"the question / item (on a test)", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i quesiti.\nA formal word for 'question,' especially on exams.\n'Rispondere al quesito' = to answer the question.",
     example:"A: Il quesito chiede di esprimere la propria opinione.\nB: Ricorda di argomentare con esempi concreti.",
     exampleSrc:"A: The question asks to express your own opinion.\nB: Remember to argue with concrete examples.",
     funFact:"Italian exams use 'quesito' for formal test questions, 'domanda' for general questions, and 'traccia' for essay prompts. This vocabulary distinction itself reflects the register awareness expected at B2 level."},

    {type:"teach", trg:"la competenza linguistica", src:"linguistic competence", pos:"noun", gender:"f",
     note:"Feminine compound noun. The overall ability to use a language effectively.\n'Competenza comunicativa' = communicative competence.",
     example:"A: La competenza linguistica include grammatica, lessico e pragmatica.\nB: Non basta conoscere le regole: bisogna saperle usare.",
     exampleSrc:"A: Linguistic competence includes grammar, vocabulary, and pragmatics.\nB: Knowing the rules is not enough: you must know how to use them.",
     funFact:"The CEFR (Quadro Comune Europeo) defines B2 as 'independent user': you can interact with native speakers without strain, produce clear text on complex topics, and argue a position with supporting evidence. Italy uses CEFR for all language certification."},

    {type:"mc",
     q:"Quale connettivo introduce l'ultimo punto importante di un'argomentazione?",
     opts:["Pertanto","In primo luogo","Non da ultimo","D'altra parte"],
     ans:"Non da ultimo",
     hint:"Used to introduce the final point while emphasizing it is not the least important. A rhetorical crescendo device."},

    {type:"match", pairs:[
      {trg:"traccia", src:"essay prompt"},
      {trg:"scaletta", src:"outline"},
      {trg:"d'altra parte", src:"on the other hand"},
      {trg:"di conseguenza", src:"consequently"},
      {trg:"vale a dire", src:"that is to say"}
    ]},

    {type:"fb",
     s:"L'inquinamento e in aumento. {1}, servono nuove politiche ambientali urgenti.",
     a:["Di conseguenza"],
     opts:["Di conseguenza","D'altra parte","Non da ultimo","Vale a dire"],
     hint:"A formal connective expressing a logical result. The second statement follows as a direct consequence of the first.",
     sSrc:"Pollution is increasing. {1}, urgent new environmental policies are needed."},

    {type:"mc",
     q:"Che livello linguistico deve raggiungere un candidato CILS B2 secondo il QCER?",
     opts:["Utente base: puo comprendere frasi semplici e di uso quotidiano","Utente indipendente: puo interagire con parlanti nativi senza sforzo e argomentare su temi complessi","Utente avanzato: puo tradurre testi letterari e tenere conferenze accademiche","Madrelingua: nessuna differenza con un parlante nativo in qualsiasi contesto"],
     ans:"Utente indipendente: puo interagire con parlanti nativi senza sforzo e argomentare su temi complessi",
     hint:"B2 is the 'independent user' level. You can handle complex topics, argue positions, and interact fluently with native speakers."}
  ,{type:"match",pairs:[{trg:"il paragrafo",src:"the paragraph"},{trg:"il lessico specifico",src:"specialized vocabulary"},{trg:"in conclusione",src:"in conclusion"},{trg:"a tal proposito",src:"in this regard / on this matter"},{trg:"il quesito",src:"the question / item (on a test)"},{trg:"la competenza linguistica",src:"linguistic competence"}]}]
};
export default BATCH3_L_1;
