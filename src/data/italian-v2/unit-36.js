// Italian V2 Unit 36. Esame finale (Comprehensive Review)
import BATCH8_L1 from './_batch8_u36_L01.js';
import BATCH7_L1 from './_batch7_u36_L01.js';
import BATCH6_L1 from './_batch6_u36_L01.js';
import BATCH5_L02 from './_batch5_u36_L02.js';
import BATCH5_L01 from './_batch5_u36_L01.js';
import BATCH3_L02 from './_batch3_u36_L02.js';
import BATCH3_L01 from './_batch3_u36_L01.js';
// Level: B2.4. CILS/CELI B2 aligned.

const UNIT_36 = {
  n:36, lang:"it", srcLang:"en", track:"v2",
  title:"Esame finale", sub:"Comprehensive Review",
  icon:"🎓", level:"B2.4", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Sintesi grammaticale ───
    {id:"itv2_u36l1", title:"Sintesi grammaticale", icon:"📝", xp:15, board:true, steps:[
      {type:"intro", title:"Sintesi grammaticale",
       desc:"Review and consolidate the advanced grammar and vocabulary you have learned throughout B2. This lesson combines formal and informal registers, academic vocabulary, and complex sentence structures for exam readiness.",
       goals:["Synthesize B2 grammar in complex sentences","Switch between formal and informal registers","Apply advanced vocabulary across multiple domains"]},

      {type:"teach", trg:"la sfumatura", src:"the nuance / shade", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le sfumature.\nBoth literal (shade of color) and figurative (subtlety of meaning).",
       example:"A: Questa parola ha molte sfumature di significato.\nB: Per capirle tutte, serve molta pratica.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: This word has many nuances of meaning.\nB: To understand them all, you need a lot of practice.\nA: What do you think?\nB: In my opinion it is an excellent choice.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"'Sfumatura' comes from 'sfumare' (to fade, to blend). In art, Leonardo da Vinci's famous 'sfumato' technique blends colors without visible edges. The same principle applies to language: meaning blends between words."},

      {type:"teach", trg:"il registro", src:"the register (linguistic)", pos:"noun", gender:"m",
       note:"Masculine noun. The level of formality in language.\n'Registro formale/informale' = formal/informal register.",
       example:"A: In un saggio accademico, il registro deve essere formale.\nB: Evita espressioni colloquiali e abbreviazioni.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: In an academic essay, the register must be formal.\nB: Avoid colloquial expressions and abbreviations.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"Italian has particularly rich register variation. The choice between 'tu' (informal you) and 'Lei' (formal you) fundamentally shapes every conversation, and getting it wrong is a serious social misstep."},

      {type:"teach", trg:"la perifrasi", src:"the periphrasis / roundabout expression", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable plural: le perifrasi.\nUsing multiple words instead of one. 'Perifrasi verbale' = verbal periphrasis.",
       example:"A: 'Stare per partire' e una perifrasi che indica il futuro imminente.\nB: E piu espressiva del semplice futuro.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: 'Stare per partire' is a periphrasis indicating the imminent future.\nB: It is more expressive than the simple future.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"Italian is rich in verbal periphrases: 'stare per' (about to), 'stare + gerundio' (ongoing action), 'andare + participio' (must be done). These constructions add temporal nuance that simple tenses cannot express."},

      {type:"teach", trg:"il congiuntivo", src:"the subjunctive (mood)", pos:"noun", gender:"m",
       note:"Masculine noun. The grammatical mood expressing doubt, desire, or uncertainty.\n'Congiuntivo presente/imperfetto/passato/trapassato' = four subjunctive tenses.",
       example:"A: Il congiuntivo e il modo verbale piu difficile per gli stranieri.\nB: Anche molti italiani lo usano male.\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: The subjunctive is the most difficult verb mood for foreigners.\nB: Even many Italians use it incorrectly.\nA: Is it the first time?\nB: No, I did it last year too.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"The 'death of the subjunctive' is a recurring topic in Italian linguistic debate. Purists lament that 'se avrei' (if I would have) is replacing the correct 'se avessi' (if I had). Grammar books call this the 'congiuntivo morente.'"},

      {type:"teach", trg:"il condizionale", src:"the conditional (mood)", pos:"noun", gender:"m",
       note:"Masculine noun. Expresses hypothetical situations or polite requests.\n'Condizionale presente/passato' = present/past conditional.",
       example:"A: Il condizionale si usa per esprimere desideri e ipotesi.\nB: 'Vorrei un caffe' e molto piu cortese di 'Voglio un caffe.'\nA: Come ti sei trovato?\nB: Molto bene, lo consiglio a tutti.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: The conditional is used to express wishes and hypotheses.\nB: 'Vorrei un caffe' is much more polite than 'Voglio un caffe.'\nA: How did you find it?\nB: Very well, I recommend it to everyone.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"The Italian conditional developed from Latin future-in-the-past forms. Modern Italian has two forms: condizionale presente ('vorrei' = I would like) and condizionale passato ('avrei voluto' = I would have liked)."},
{type:"match",pairs:[{trg:"il registro",src:"the register (linguistic)"},{trg:"la perifrasi",src:"the periphrasis / roundabout expression"},{trg:"il congiuntivo",src:"the subjunctive (mood)"},{trg:"il condizionale",src:"the conditional (mood)"}]},

      {type:"mc",
       q:"Quale modo verbale esprime dubbio, desiderio o incertezza?",
       opts:["Il congiuntivo","Il condizionale","L'indicativo","L'imperativo"],
       ans:"Il congiuntivo",
       hint:"This mood is triggered by verbs of doubt, wish, and belief. 'Penso che sia' (I think it is) uses this mood after 'che.'"},

      {type:"teach", trg:"il periodo ipotetico", src:"the conditional sentence / if-clause", pos:"noun", gender:"m",
       note:"Masculine noun. 'Se + condition, result' structure.\nThree types: realta (real), possibilita (possible), impossibilita (impossible).",
       example:"A: Se studiassi di piu, passeresti l'esame.\nB: Lo so, ma non trovo mai il tempo.\nA: Da quanto tempo?\nB: Da qualche mese ormai.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: If you studied more, you would pass the exam.\nB: I know, but I never find the time.\nA: For how long?\nB: For a few months now.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Italian has three conditional types: Type 1 'se piove, resto' (if it rains, I stay), Type 2 'se piovesse, resterei' (if it rained, I would stay), Type 3 'se avesse piovuto, sarei restato' (if it had rained, I would have stayed)."},

      {type:"teach", trg:"la concordanza", src:"agreement (grammatical)", pos:"noun", gender:"f",
       note:"Feminine noun. When grammatical forms match in gender, number, or tense.\n'Concordanza dei tempi' = sequence of tenses.",
       example:"A: La concordanza dei tempi e essenziale in italiano.\nB: Il congiuntivo nel passato richiede l'imperfetto, non il presente.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: The sequence of tenses is essential in Italian.\nB: The subjunctive in the past requires the imperfect, not the present.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"'Concordanza dei tempi' (consecutio temporum) follows Latin rules still active in Italian. The main clause verb's tense determines which subjunctive tense must follow. This system is more rigidly applied in Italian than in French or Spanish."},

      {type:"teach", trg:"il discorso indiretto", src:"indirect speech / reported speech", pos:"noun", gender:"m",
       note:"Masculine noun. Reporting what someone said.\n'Discorso diretto' = direct speech. 'Trasformare in discorso indiretto' = to convert to indirect speech.",
       example:"A: Marco ha detto che sarebbe venuto alla festa.\nB: In discorso diretto: 'Verro alla festa.'\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: Marco said he would come to the party.\nB: In direct speech: 'I will come to the party.'\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Converting direct to indirect speech in Italian requires systematic tense shifts: present becomes imperfect, passato prossimo becomes trapassato prossimo, future becomes conditional. This 'backshift' mirrors English but with Italian-specific rules."},

      {type:"fb",
       s:"Il {1} ipotetico del secondo tipo usa il congiuntivo imperfetto e il condizionale.",
       a:["periodo"],
       opts:["periodo","discorso","registro","congiuntivo"],
       hint:"This is the grammatical structure containing 'se' (if) + a condition and its result. The second type expresses possibility.",
       sSrc:"The second type of conditional {1} uses the imperfect subjunctive and the conditional."},

      {type:"teach", trg:"la coerenza", src:"coherence / consistency", pos:"noun", gender:"f",
       note:"Feminine noun. Logical consistency in writing or speaking.\n'Coerenza testuale' = textual coherence.",
       example:"A: Il saggio manca di coerenza: le idee si contraddicono.\nB: Devi riorganizzare i paragrafi.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: The essay lacks coherence: the ideas contradict each other.\nB: You need to reorganize the paragraphs.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"In Italian academic writing, 'coerenza' and 'coesione' (cohesion) are complementary concepts: coerenza refers to logical consistency of ideas, coesione to the linguistic connectors (tuttavia, inoltre, pertanto) that link sentences."},

      {type:"teach", trg:"il connettivo", src:"the connective / linking word", pos:"noun", gender:"m",
       note:"Masculine noun. Words that link clauses and sentences.\nExamples: tuttavia, pertanto, inoltre, nonostante, benche.",
       example:"A: Usa piu connettivi per collegare le frasi.\nB: 'Tuttavia' e 'pertanto' rendono il testo piu fluido.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Use more connectives to link your sentences.\nB: 'Tuttavia' and 'pertanto' make the text more fluid.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"B2-level Italian requires mastering formal connectives: 'benche' (although, + subjunctive), 'purche' (provided that, + subjunctive), 'laddove' (whereas), 'di conseguenza' (consequently). These mark the shift from conversational to academic register."},

      {type:"teach", trg:"la coesione", src:"cohesion (textual)", pos:"noun", gender:"f",
       note:"Feminine noun. The linguistic glue holding text together.\n'Strumenti di coesione' = cohesion devices (pronouns, connectives, etc.).",
       example:"A: La coesione si ottiene con pronomi, sinonimi e connettivi.\nB: Un buon testo scorre senza ripetizioni inutili.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: Cohesion is achieved through pronouns, synonyms, and connectives.\nB: A good text flows without unnecessary repetitions.\nA: How is it going now?\nB: Much better than before, thanks.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"Italian academic writing values elegant variation: repeating the same word is considered poor style. Writers use synonyms, pronouns, and periphrases to maintain coesione without repetition."},

      {type:"mc",
       q:"Qual e la differenza tra 'coerenza' e 'coesione' in un testo?",
       opts:["Sono concetti identici e perfettamente intercambiabili nella scrittura","La coerenza riguarda la logica delle idee, la coesione i legami linguistici","La coesione ha un ruolo piu importante e fondamentale della coerenza","La coerenza riguarda la correttezza grammaticale, la coesione la scelta lessicale"],
       ans:"La coerenza riguarda la logica delle idee, la coesione i legami linguistici",
       hint:"One concerns whether your ideas flow in a consistent, non-contradictory way. The other concerns the words and devices that link your sentences together."},

      {type:"teach", trg:"l'argomentazione", src:"argumentation / reasoning", pos:"noun", gender:"f",
       note:"Feminine noun. The structured presentation of arguments.\n'Argomentazione solida' = solid argumentation.",
       example:"A: L'argomentazione del saggio e chiara e ben strutturata.\nB: Ogni tesi e supportata da esempi concreti.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: The essay's argumentation is clear and well-structured.\nB: Every thesis is supported by concrete examples.\nA: Do you do it often?\nB: At least once a week.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"Italian academic tradition values elaborate argumentation. The standard essay structure (tesi, antitesi, sintesi) follows Hegelian dialectics, with formal connectives marking each transition."},

      {type:"tip", title:"Indirect Speech (Discorso Indiretto)",
       text:"Discorso indiretto (reported speech) is how you convey what someone said without quoting their exact words.\n\nDirect: Marco ha detto: 'Sono stanco.'\nIndirect: Marco ha detto che era stanco.\n\nWhen the main verb is in the past, Italian requires a systematic tense backshift:\nPresente > Imperfetto: 'Sono stanco' > che era stanco\nPassato prossimo > Trapassato prossimo: 'Ho visto' > che aveva visto\nFuturo > Condizionale passato: 'Andro' > che sarebbe andato\nImperativo > di + infinito (or congiuntivo): 'Vieni!' > di venire\n\nPronoun and reference shifts also occur:\nio > lui/lei, mio > suo, qui > li\noggi > quel giorno, domani > il giorno dopo, ieri > il giorno prima\nnow > allora, questo > quello\n\nIf the main verb is in the present tense, no backshift is needed.",
       icon:"💡",
       deepDive:{title:"When not to backshift", text:"The backshift rules apply only when the main verb is in a past tense. Compare:\n\nPast main verb (backshift required):\n'Ha detto che era stanco.' (He said he was tired.)\n\nPresent main verb (no backshift):\n'Dice che e stanco.' (He says he is tired.)\n\nThis parallels English perfectly. The challenge for Italian learners is the number of tense changes to keep straight, especially the future becoming conditional passato ('avrebbe fatto') and imperatives transforming into 'di + infinito.'\n\nFor commands: 'Siediti!' (Sit down!) becomes 'Mi ha detto di sedermi.' (He told me to sit down.) The 'di + infinitive' construction replaces the imperative."}},

      {type:"tip", title:"Nominalizzazione",
       text:"Nominalizzazione is the process of turning verbs or adjectives into nouns. It is essential for formal, academic, and professional Italian.\n\nFrom verbs, several suffixes create action nouns:\n-zione: comunicare > comunicazione, informare > informazione\n-mento: cambiare > cambiamento, migliorare > miglioramento\n-tura: aprire > apertura, chiudere > chiusura\n-ata/-uta/-ita: camminare > camminata, cadere > caduta\n\nFrom adjectives:\n-ezza: bello > bellezza, sicuro > sicurezza\n-ita/-ta: possibile > possibilita, libero > liberta\n-anza/-enza: importante > importanza, paziente > pazienza\n\nIn formal writing, nominalizzazione creates more concise, authoritative sentences:\nInstead of: 'I prezzi stanno aumentando.'\nWrite: 'L'aumento dei prezzi...'\n\nInstead of: 'Riducono il personale.'\nWrite: 'La riduzione del personale...'",
       icon:"💡",
       deepDive:{title:"Why nominalizzazione marks the shift to formal Italian", text:"Informal Italian relies on verb-heavy sentences. Formal Italian converts many of those verbs into noun phrases. This is not a stylistic quirk; it is how Italian academic, legal, and journalistic language is built.\n\nThe shift from 'verb sentence' to 'noun phrase' allows writers to pack more information per sentence and to create more impersonal, authoritative tone.\n\nCompare:\nInformal: 'Tanti giovani emigrano dal Sud.' (Many young people emigrate from the South.)\nFormal: 'L'emigrazione giovanile dal Meridione...' (The youth emigration from the South...)\n\nThe formal version is shorter and more powerful. Mastering nominalizzazione is what makes your Italian read as educated rather than merely correct."}},

      {type:"tip", title:"Advanced Passive Constructions",
       text:"Beyond the basic passivo (essere + participio passato), Italian has two more passive patterns that are especially useful at B2 level.\n\nVenire + participio passato: emphasizes the action/process. Used in simple tenses only (present, imperfect, future). Cannot be used in compound tenses.\n'Il pane viene cotto nel forno.' (Bread is baked in the oven.)\n'Le decisioni venivano prese dal direttore.' (Decisions were made by the director.)\n\nAndare + participio passato: expresses obligation, necessity. Equivalent to 'must be done / needs to be done.'\n'Questo lavoro va fatto subito.' (This work must be done right away.)\n'I documenti vanno consegnati entro venerdi.' (Documents must be submitted by Friday.)\n'La legge va rispettata.' (The law must be respected.)\n\nRimanere + participio passato: emphasizes the resulting state after something happened.\n'Sono rimasto sorpreso.' (I was left surprised / I was surprised.)\n'La porta e rimasta aperta.' (The door remained open.)",
       icon:"💡",
       deepDive:{title:"Choosing between essere, venire, and andare", text:"The three passive patterns each have a distinct nuance:\n\nEssere: neutral passive, works in all tenses.\n'Il problema e stato risolto.' (The problem has been solved.)\n\nVenire: emphasizes the action happening. Only simple tenses.\n'Il problema viene risolto ogni volta.' (The problem gets solved every time.) — present, habitual.\n\nAndare: adds a sense of obligation or necessity. Very common in official Italian.\n'Il problema va risolto.' (The problem must be solved.) — obligation.\n\nLearner tip: when you see 'va + past participle' in Italian, read it as 'must be + past participle.' This pattern appears constantly in official notices, manuals, and regulations."}},

      {type:"match", pairs:[
        {trg:"congiuntivo", src:"subjunctive"},
        {trg:"condizionale", src:"conditional"},
        {trg:"concordanza", src:"agreement"},
        {trg:"connettivo", src:"connective"},
        {trg:"sfumatura", src:"nuance"}
      ]},

      {type:"fb",
       s:"Marco ha detto che sarebbe venuto: questo e un esempio di {1} indiretto.",
       a:["discorso"],
       opts:["discorso","periodo","registro","connettivo"],
       hint:"Reporting what someone said without quoting their exact words. The opposite of direct speech.",
       sSrc:"Marco said he would come: this is an example of indirect {1}."},

      {type:"mc",
       q:"Quale connettivo introduce una concessione e richiede il congiuntivo?",
       opts:["Pertanto","Inoltre","Benche","Di conseguenza"],
       ans:"Benche",
       hint:"This word means 'although' and must be followed by the subjunctive mood. It introduces a concession before the main point."},

      {type:"fb",
       s:"'Stare per partire' e una {1} verbale che esprime il futuro imminente.",
       a:["perifrasi"],
       opts:["perifrasi","concordanza","coerenza","locuzione"],
       hint:"Using multiple words to express something a single word could say. From Greek roots meaning 'speaking around' something.",
       sSrc:"'Stare per partire' is a verbal {1} expressing the imminent future."},

      {type:"mc",
       q:"In un saggio accademico, che cosa rende solida l'argomentazione?",
       opts:["L'uso di molte citazioni in lingue straniere","L'assenza di connettivi per un testo piu diretto","La lunghezza del testo e il numero di paragrafi","Ogni tesi supportata da prove ed esempi concreti"],
       ans:"Ogni tesi supportata da prove ed esempi concreti",
       hint:"Structured reasoning where each claim is backed by evidence. The Italian academic tradition values this over mere assertion."}
    ]},

    // ─── Lesson 2: Produzione scritta e orale ───
    {id:"itv2_u36l2", title:"Produzione avanzata", icon:"🎯", xp:15, board:true, steps:[
      {type:"intro", title:"Produzione scritta e orale",
       desc:"Practice the vocabulary and structures needed for B2-level written and oral production. Focus on opinion essays, formal letters, presentations, and academic discourse.",
       goals:["Use advanced vocabulary for opinion essays and formal communication","Master transition phrases and academic expressions","Demonstrate B2 proficiency across all skill areas"]},

      {type:"teach", trg:"il saggio", src:"the essay", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i saggi.\n'Saggio breve' = short essay (a standard Italian exam format). Also means 'wise man.'",
       example:"A: Il saggio deve avere un'introduzione, uno sviluppo e una conclusione.\nB: Non dimenticare la bibliografia alla fine.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: The essay must have an introduction, a development, and a conclusion.\nB: Do not forget the bibliography at the end.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"'Saggio' has a double meaning: 'wise person' (from Latin 'sapiens') and 'essay/test' (from Latin 'exagium', a weighing or trial). Though different in origin, Italians enjoy the connection: a wise person is one who has weighed and tested ideas."},

      {type:"teach", trg:"l'introduzione", src:"the introduction", pos:"noun", gender:"f",
       note:"Feminine noun. The opening section of a text or speech.\n'In introduzione' = in the introduction.",
       example:"A: L'introduzione deve catturare l'attenzione del lettore.\nB: Inizia con una domanda provocatoria o un dato sorprendente.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The introduction must capture the reader's attention.\nB: Start with a provocative question or a surprising fact.\nA: How long does it take?\nB: Usually about an hour, no more.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"In Italian academic tradition, the introduction ('premessa' in more formal contexts) should state the thesis, outline the argument structure, and signal the register. It is never a summary of the conclusion."},

      {type:"teach", trg:"la tesi", src:"the thesis / claim", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable plural: le tesi.\n'Sostenere una tesi' = to defend a thesis. 'Tesi di laurea' = graduation thesis.",
       example:"A: La mia tesi e che l'istruzione riduce la disuguaglianza.\nB: Devi dimostrarlo con dati e argomenti.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: My thesis is that education reduces inequality.\nB: You must demonstrate it with data and arguments.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"In Italian universities, the 'tesi di laurea' (graduation thesis) is a substantial research document defended orally before a commission. Students address the commission with 'Signor Presidente, onorevoli membri della commissione.'"},

      {type:"teach", trg:"la conclusione", src:"the conclusion", pos:"noun", gender:"f",
       note:"Feminine noun. 'In conclusione' = in conclusion.\n'Trarre una conclusione' = to draw a conclusion.",
       example:"A: In conclusione, possiamo affermare che la tesi e confermata.\nB: I dati presentati non lasciano dubbi.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: In conclusion, we can state that the thesis is confirmed.\nB: The data presented leave no doubts.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italian formal conclusions often use the 'noi' (we) form even for single-author texts, following the academic 'plurale majestatis.' 'Possiamo concludere che...' (we can conclude that) is standard academic style."},

      {type:"teach", trg:"la citazione", src:"the quotation / citation", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le citazioni.\n'Citare' (verb) = to quote/cite. 'Tra virgolette' = in quotation marks.",
       example:"A: Ogni citazione deve avere una fonte chiara.\nB: Altrimenti rischi un'accusa di plagio.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: Every citation must have a clear source.\nB: Otherwise you risk an accusation of plagiarism.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"Italian academic style uses footnotes more than parenthetical citations. The standard footnote format in Italian humanities is: author surname, title in italics, publisher, year, page number. Different from APA or MLA styles."},
{type:"match",pairs:[{trg:"l'introduzione",src:"the introduction"},{trg:"la tesi",src:"the thesis / claim"},{trg:"la conclusione",src:"the conclusion"},{trg:"la citazione",src:"the quotation / citation"}]},

      {type:"mc",
       q:"Come si chiama la parte finale di un saggio dove si riassumono i risultati?",
       opts:["La conclusione","Lo sviluppo","La citazione","L'introduzione"],
       ans:"La conclusione",
       hint:"The last section of an essay, where you summarize your findings and restate your thesis in light of the evidence."},

      {type:"teach", trg:"la locuzione", src:"the set phrase / expression", pos:"noun", gender:"f",
       note:"Feminine noun. A fixed multi-word expression.\n'Locuzione avverbiale' = adverbial phrase. 'Locuzione prepositiva' = prepositional phrase.",
       example:"A: 'A quanto pare' e una locuzione che significa 'apparently.'\nB: Le locuzioni arricchiscono il tuo italiano.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: 'A quanto pare' is a set phrase meaning 'apparently.'\nB: Set phrases enrich your Italian.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italian is rich in locuzioni: 'a mio avviso' (in my opinion), 'in fin dei conti' (when all is said and done), 'a quanto pare' (apparently). Mastering these marks the transition from competent to fluent speaker."},

      {type:"teach", trg:"pertanto", src:"therefore / consequently", pos:"conj", gender:null,
       note:"Formal conjunction. Introduces a logical consequence.\nSynonyms: di conseguenza, dunque, percio.",
       example:"A: I dati sono insufficienti. Pertanto, non possiamo trarre conclusioni.\nB: Servono ulteriori ricerche.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: The data is insufficient. Therefore, we cannot draw conclusions.\nB: Further research is needed.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"'Pertanto' belongs to the formal register and is typical of academic and legal writing. In everyday speech, Italians use 'quindi' or 'percio' instead. Using 'pertanto' in conversation sounds overly stiff."},

      {type:"teach", trg:"tuttavia", src:"however / nevertheless", pos:"conj", gender:null,
       note:"Formal conjunction. Introduces a contrast or exception.\nSynonyms: nonostante cio, ciononostante, nondimeno.",
       example:"A: La proposta sembra valida. Tuttavia, ci sono alcuni rischi.\nB: Dobbiamo valutare attentamente i costi.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: The proposal seems valid. However, there are some risks.\nB: We must carefully evaluate the costs.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
       funFact:"'Tuttavia' literally means 'all the way through' (tutto + via). It evolved from meaning 'always' to 'despite everything' to its modern sense of 'however.' This semantic shift happened over several centuries of Italian literary usage."},

      {type:"fb",
       s:"{1}, non possiamo ignorare le conseguenze economiche della decisione.",
       a:["Tuttavia"],
       opts:["Tuttavia","Pertanto","Inoltre","Percio"],
       hint:"A formal conjunction meaning 'however' or 'nevertheless.' It introduces a contrasting point to what was said before.",
       sSrc:"{1}, we cannot ignore the economic consequences of the decision."},

      {type:"teach", trg:"a mio avviso", src:"in my opinion", pos:"adv", gender:null,
       note:"Formal adverbial phrase. Alternatives: 'a mio parere,'\n'secondo me' (less formal), 'ritengo che' (I believe that).",
       example:"A: A mio avviso, la riforma e necessaria ma mal concepita.\nB: Condivido la necessita, ma non i metodi proposti.\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: In my opinion, the reform is necessary but badly conceived.\nB: I share the need, but not the proposed methods.\nA: That is my opinion too.\nB: Good, then we agree on this point.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"Italian has a rich hierarchy of opinion expressions from casual to formal: 'per me' (casual), 'secondo me' (neutral), 'a mio avviso / a mio parere' (formal), 'sono del parere che' (very formal). Choosing the right one signals your register."},

      {type:"teach", trg:"in primo luogo", src:"first of all / firstly", pos:"adv", gender:null,
       note:"Formal adverbial phrase for ordering arguments.\n'In secondo luogo' = secondly. 'In ultima analisi' = ultimately.",
       example:"A: In primo luogo, consideriamo i dati economici.\nB: In secondo luogo, analizziamo l'impatto sociale.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: First of all, let us consider the economic data.\nB: Secondly, let us analyze the social impact.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"The sequence 'in primo luogo, in secondo luogo, infine' (firstly, secondly, finally) is the backbone of Italian formal argumentation. Using numbered points instead of these phrases is considered less elegant in Italian academic writing."},

      {type:"mc",
       q:"Quale espressione e la piu formale per introdurre un'opinione personale?",
       opts:["Per me (orale)","A mio avviso","Secondo me (neutro)","Io penso che"],
       ans:"A mio avviso",
       hint:"The most formal option among these four ways to express a personal opinion. Used in academic essays and official documents."},

      {type:"teach", trg:"in sintesi", src:"in summary / to sum up", pos:"adv", gender:null,
       note:"Formal adverbial phrase for summarizing.\nAlternatives: 'in breve' (briefly), 'per riassumere' (to summarize), 'in conclusione.'",
       example:"A: In sintesi, il progetto presenta piu vantaggi che svantaggi.\nB: Raccomando la sua approvazione.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: In summary, the project presents more advantages than disadvantages.\nB: I recommend its approval.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"'Sintesi' comes from Greek 'synthesis' (putting together). In Italian academia, 'capacita di sintesi' (ability to synthesize) is a highly valued skill, distinguishing competent students from excellent ones."},

      {type:"teach", trg:"il lessico", src:"vocabulary / lexicon", pos:"noun", gender:"m",
       note:"Masculine noun. The stock of words in a language or person.\n'Lessico specialistico' = specialized vocabulary. 'Arricchire il lessico' = to enrich vocabulary.",
       example:"A: Un lessico ricco ti permette di esprimerti con precisione.\nB: Leggi molto per ampliare il tuo vocabolario.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: A rich vocabulary allows you to express yourself with precision.\nB: Read a lot to expand your vocabulary.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"The Italian lexicon contains roughly 260,000 headwords, but an educated speaker actively uses about 47,000. B2 proficiency corresponds to approximately 4,000-5,000 words, enough for most communicative situations."},

      {type:"tip", title:"Fare + Infinitive (Causative)",
       text:"Fare + infinitive is one of Italian's most useful constructions. It means 'to make someone do something' or 'to have something done.'\n\nWith one object (the direct object does the action or is acted upon):\n'Faccio mangiare il bambino.' (I make the child eat. Child = direct object, does the eating.)\n'Faccio riparare la macchina.' (I have the car repaired. Car = direct object, receives the action.)\n\nWith two objects (a person does the action to a thing):\n'Faccio leggere il libro a Marco.' (I have Marco read the book.)\nWhen there are two objects, the person becomes indirect (a + person).\n\nWith pronouns:\n'Lo faccio riparare.' (I have it repaired.)\n'Glielo faccio leggere.' (I have him/her read it.)\n\nCommon fare causative expressions:\nfar vedere (to show), far sapere (to let know, to inform)\nfar entrare (to let in), far pagare (to charge, to make pay)\nfar notare (to point out), far aspettare (to keep waiting)",
       icon:"💡",
       deepDive:{title:"Causative vs transitive fare", text:"Not every 'fare + infinitive' is a causative. Context matters.\n\nCausative (someone else does the action):\n'Ho fatto riparare la macchina.' (I had the car repaired.) You did not fix it yourself.\n\nNon-causative (you do the action):\n'Ho fatto un errore.' (I made a mistake.) This is the ordinary verb 'fare.'\n\nThe key signal is that with the causative, there is always an infinitive following 'fare,' and someone other than the subject performs that infinitived action.\n\nIn everyday conversation, the causative 'fare' is extremely common: 'Mi fai vedere?' (Can you show me? / Let me see?), 'Non mi far aspettare!' (Don't keep me waiting!), 'Fammi sapere.' (Let me know.)"}},

      {type:"tip", title:"Advanced Pronoun Placement",
       text:"At B2 level, pronouns can be placed in several positions beyond the basic 'before the verb' rule.\n\nAttached to infinitives (the final -e of the infinitive is dropped):\n'Voglio vederlo.' (I want to see it.) or 'Lo voglio vedere.' (Both correct.)\n'E difficile capirla.' (It is hard to understand her.)\n\nAttached to gerunds:\n'Vedendolo, ho capito.' (Seeing it, I understood.)\n'Parlandogli, ho scoperto...' (Speaking to him, I discovered...)\n\nAttached to imperatives (tu / noi / voi forms):\n'Dimmi!' (Tell me!) 'Dammelo!' (Give it to me!) 'Portatecelo!' (Bring it to us!)\nWith single-syllable imperatives (da', fa', sta', va', di'), the initial consonant of the pronoun doubles: 'Dimmi', 'Dacci', 'Fallo', 'Vacci.'\n\nWith ecco: 'Eccomi!' (Here I am!) 'Eccolo!' (Here it is!)\n\nWith modal verbs (two positions are equally correct):\n'Lo voglio vedere.' = 'Voglio vederlo.'\n'Gli posso parlare.' = 'Posso parlargli.'",
       icon:"💡",
       deepDive:{title:"Double pronoun attachment", text:"With combined pronouns (indirect + direct), both attach together:\n\n'Dammelo!' (Give it to me! = Dammi + lo, but written as one word.)\n'Portaglielo!' (Bring it to him/her!)\n'Mandacelo!' (Send it to us!)\n\nWith the single-syllable imperatives that double the consonant, the doubling applies to the first letter of the first pronoun:\nda' + mi + lo = dammelo\nfa' + ci + lo = faccelo\n\nThis is one of the trickier points in Italian morphology, but it follows a consistent pattern once you know the underlying rule: these short imperatives trigger consonant doubling with any clitic pronoun that follows them."}},

      {type:"tip", title:"Register Variation",
       text:"Italian has pronounced differences between formal, neutral, and informal registers. B2 competence means switching registers fluidly depending on context.\n\nVocabulary differences:\nInformal: soldi / Formal: denaro\nInformal: casa / Formal: abitazione, domicilio\nInformal: adesso, ora / Formal: attualmente, al momento\nInformal: fare / Formal: effettuare, svolgere\nInformal: dire / Formal: comunicare, dichiarare\n\nVerb tense differences:\nInformal speech: passato prossimo for all past events.\nFormal writing: passato remoto in historical/literary narrative.\nFormal: subjunctive even when optional ('benche sia' rather than 'anche se e').\n\nPronoun choices:\nInformal: 'tu' with peers, young people, service workers.\nFormal: 'Lei' with strangers, authority figures, professional contexts.\n\nSentence structure:\nInformal: short, direct sentences, frequent ellipsis.\nFormal: longer sentences with subordinate clauses, connectives, and nominalization.",
       icon:"💡",
       deepDive:{title:"The grammar of politeness: Lei and formal imperatives", text:"Using Lei correctly goes beyond knowing the conjugation. Several habits mark a truly polished formal register.\n\nFormal imperative = subjunctive form:\n'Scusi!' (Excuse me! formal) not 'Scusa!'\n'Si accomodi!' (Please sit down!) not 'Siediti!'\n'Mi dica!' (Tell me! / Go ahead!) not 'Dimmi!'\n'Venga!' (Come!) not 'Vieni!'\n\nFormal pronouns:\nDirect object: 'La ringrazio.' (I thank you.)\nIndirect object: 'Le scrivo.' (I write to you.)\nReflexive: 'Si accomodi.' (Please sit down.)\n\nFormal opening/closing phrases:\nOpening: 'La ringrazio per la sua lettera del...' / 'In riferimento a...'\nClosing: 'Distinti saluti' (Yours sincerely) / 'Cordiali saluti' (Kind regards)\n\nMastering these patterns is what distinguishes a competent Italian speaker from one who can navigate professional and institutional contexts with ease."}},

      {type:"match", pairs:[
        {trg:"pertanto", src:"therefore"},
        {trg:"tuttavia", src:"however"},
        {trg:"a mio avviso", src:"in my opinion"},
        {trg:"in primo luogo", src:"firstly"},
        {trg:"in sintesi", src:"in summary"}
      ]},

      {type:"fb",
       s:"{1}, consideriamo i vantaggi del progetto prima di discutere i rischi.",
       a:["In primo luogo"],
       opts:["In primo luogo","In sintesi","Tuttavia","Pertanto"],
       hint:"The formal way to introduce the first point in an ordered argument. Followed by 'in secondo l...' for the next point.",
       sSrc:"{1}, let us consider the advantages of the project before discussing the risks."},

      {type:"mc",
       q:"Che cosa significa 'capacita di sintesi'?",
       opts:["L'abilita di scrivere testi molto lunghi e dettagliati","La conoscenza approfondita di molte lingue straniere diverse","L'abilita di riassumere le idee in modo chiaro e conciso","La capacita di parlare molto velocemente senza esitazioni"],
       ans:"L'abilita di riassumere le idee in modo chiaro e conciso",
       hint:"The ability to take complex information and present it in a clear, condensed form. From Greek 'synthesis' (putting together)."},

      {type:"fb",
       s:"'A mio avviso' e una {1} avverbiale tipica del registro formale.",
       a:["locuzione"],
       opts:["locuzione","perifrasi","concordanza","tesi"],
       hint:"A fixed multi-word expression that functions as a single grammatical unit. Mastering these marks the shift to fluency.",
       sSrc:"'A mio avviso' is an adverbial {1} typical of the formal register."},

      {type:"mc",
       q:"Come si chiama l'insieme delle parole che compongono una lingua o che una persona conosce?",
       opts:["La grammatica","La morfologia","La sintassi","Il lessico"],
       ans:"Il lessico",
       hint:"The full stock of words in a language. At B2 level, a learner controls around 4,000 to 5,000 items from this total store."}
    ]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH5_L02,
  BATCH5_L01,
  BATCH3_L02,
  BATCH3_L01
]
};
export default UNIT_36;
