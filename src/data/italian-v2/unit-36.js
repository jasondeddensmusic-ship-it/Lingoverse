// Italian V2 Unit 36 — Esame finale (Comprehensive Review)
// Level: B2.4 — CILS/CELI B2 aligned.

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
       example:"A: Questa parola ha molte sfumature di significato.\nB: Per capirle tutte, serve molta pratica.",
       exampleSrc:"A: This word has many nuances of meaning.\nB: To understand them all, you need a lot of practice.",
       funFact:"'Sfumatura' comes from 'sfumare' (to fade, to blend). In art, Leonardo da Vinci's famous 'sfumato' technique blends colors without visible edges. The same principle applies to language: meaning blends between words."},

      {type:"teach", trg:"il registro", src:"the register (linguistic)", pos:"noun", gender:"m",
       note:"Masculine noun. The level of formality in language.\n'Registro formale/informale' = formal/informal register.",
       example:"A: In un saggio accademico, il registro deve essere formale.\nB: Evita espressioni colloquiali e abbreviazioni.",
       exampleSrc:"A: In an academic essay, the register must be formal.\nB: Avoid colloquial expressions and abbreviations.",
       funFact:"Italian has particularly rich register variation. The choice between 'tu' (informal you) and 'Lei' (formal you) fundamentally shapes every conversation, and getting it wrong is a serious social misstep."},

      {type:"teach", trg:"la perifrasi", src:"the periphrasis / roundabout expression", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable plural: le perifrasi.\nUsing multiple words instead of one. 'Perifrasi verbale' = verbal periphrasis.",
       example:"A: 'Stare per partire' e una perifrasi che indica il futuro imminente.\nB: E piu espressiva del semplice futuro.",
       exampleSrc:"A: 'Stare per partire' is a periphrasis indicating the imminent future.\nB: It is more expressive than the simple future.",
       funFact:"Italian is rich in verbal periphrases: 'stare per' (about to), 'stare + gerundio' (ongoing action), 'andare + participio' (must be done). These constructions add temporal nuance that simple tenses cannot express."},

      {type:"teach", trg:"il congiuntivo", src:"the subjunctive (mood)", pos:"noun", gender:"m",
       note:"Masculine noun. The grammatical mood expressing doubt, desire, or uncertainty.\n'Congiuntivo presente/imperfetto/passato/trapassato' = four subjunctive tenses.",
       example:"A: Il congiuntivo e il modo verbale piu difficile per gli stranieri.\nB: Anche molti italiani lo usano male.",
       exampleSrc:"A: The subjunctive is the most difficult verb mood for foreigners.\nB: Even many Italians use it incorrectly.",
       funFact:"The 'death of the subjunctive' is a recurring topic in Italian linguistic debate. Purists lament that 'se avrei' (if I would have) is replacing the correct 'se avessi' (if I had). Grammar books call this the 'congiuntivo morente.'"},

      {type:"teach", trg:"il condizionale", src:"the conditional (mood)", pos:"noun", gender:"m",
       note:"Masculine noun. Expresses hypothetical situations or polite requests.\n'Condizionale presente/passato' = present/past conditional.",
       example:"A: Il condizionale si usa per esprimere desideri e ipotesi.\nB: 'Vorrei un caffe' e molto piu cortese di 'Voglio un caffe.'",
       exampleSrc:"A: The conditional is used to express wishes and hypotheses.\nB: 'Vorrei un caffe' is much more polite than 'Voglio un caffe.'",
       funFact:"The Italian conditional developed from Latin future-in-the-past forms. Modern Italian has two forms: condizionale presente ('vorrei' = I would like) and condizionale passato ('avrei voluto' = I would have liked)."},

      {type:"mc",
       q:"Quale modo verbale esprime dubbio, desiderio o incertezza?",
       opts:["Il congiuntivo","Il condizionale","L'indicativo","L'imperativo"],
       ans:"Il congiuntivo",
       hint:"This mood is triggered by verbs of doubt, wish, and belief. 'Penso che sia' (I think it is) uses this mood after 'che.'"},

      {type:"teach", trg:"il periodo ipotetico", src:"the conditional sentence / if-clause", pos:"noun", gender:"m",
       note:"Masculine noun. 'Se + condition, result' structure.\nThree types: realta (real), possibilita (possible), impossibilita (impossible).",
       example:"A: Se studiassi di piu, passeresti l'esame.\nB: Lo so, ma non trovo mai il tempo.",
       exampleSrc:"A: If you studied more, you would pass the exam.\nB: I know, but I never find the time.",
       funFact:"Italian has three conditional types: Type 1 'se piove, resto' (if it rains, I stay), Type 2 'se piovesse, resterei' (if it rained, I would stay), Type 3 'se avesse piovuto, sarei restato' (if it had rained, I would have stayed)."},

      {type:"teach", trg:"la concordanza", src:"agreement (grammatical)", pos:"noun", gender:"f",
       note:"Feminine noun. When grammatical forms match in gender, number, or tense.\n'Concordanza dei tempi' = sequence of tenses.",
       example:"A: La concordanza dei tempi e essenziale in italiano.\nB: Il congiuntivo nel passato richiede l'imperfetto, non il presente.",
       exampleSrc:"A: The sequence of tenses is essential in Italian.\nB: The subjunctive in the past requires the imperfect, not the present.",
       funFact:"'Concordanza dei tempi' (consecutio temporum) follows Latin rules still active in Italian. The main clause verb's tense determines which subjunctive tense must follow. This system is more rigidly applied in Italian than in French or Spanish."},

      {type:"teach", trg:"il discorso indiretto", src:"indirect speech / reported speech", pos:"noun", gender:"m",
       note:"Masculine noun. Reporting what someone said.\n'Discorso diretto' = direct speech. 'Trasformare in discorso indiretto' = to convert to indirect speech.",
       example:"A: Marco ha detto che sarebbe venuto alla festa.\nB: In discorso diretto: 'Verro alla festa.'",
       exampleSrc:"A: Marco said he would come to the party.\nB: In direct speech: 'I will come to the party.'",
       funFact:"Converting direct to indirect speech in Italian requires systematic tense shifts: present becomes imperfect, passato prossimo becomes trapassato prossimo, future becomes conditional. This 'backshift' mirrors English but with Italian-specific rules."},

      {type:"fb",
       s:"Il {1} ipotetico del secondo tipo usa il congiuntivo imperfetto e il condizionale.",
       a:["periodo"],
       opts:["periodo","discorso","registro","congiuntivo"],
       hint:"This is the grammatical structure containing 'se' (if) + a condition and its result. The second type expresses possibility.",
       sSrc:"The second type of conditional {1} uses the imperfect subjunctive and the conditional."},

      {type:"teach", trg:"la coerenza", src:"coherence / consistency", pos:"noun", gender:"f",
       note:"Feminine noun. Logical consistency in writing or speaking.\n'Coerenza testuale' = textual coherence.",
       example:"A: Il saggio manca di coerenza: le idee si contraddicono.\nB: Devi riorganizzare i paragrafi.",
       exampleSrc:"A: The essay lacks coherence: the ideas contradict each other.\nB: You need to reorganize the paragraphs.",
       funFact:"In Italian academic writing, 'coerenza' and 'coesione' (cohesion) are complementary concepts: coerenza refers to logical consistency of ideas, coesione to the linguistic connectors (tuttavia, inoltre, pertanto) that link sentences."},

      {type:"teach", trg:"il connettivo", src:"the connective / linking word", pos:"noun", gender:"m",
       note:"Masculine noun. Words that link clauses and sentences.\nExamples: tuttavia, pertanto, inoltre, nonostante, benche.",
       example:"A: Usa piu connettivi per collegare le frasi.\nB: 'Tuttavia' e 'pertanto' rendono il testo piu fluido.",
       exampleSrc:"A: Use more connectives to link your sentences.\nB: 'Tuttavia' and 'pertanto' make the text more fluid.",
       funFact:"B2-level Italian requires mastering formal connectives: 'benche' (although, + subjunctive), 'purche' (provided that, + subjunctive), 'laddove' (whereas), 'di conseguenza' (consequently). These mark the shift from conversational to academic register."},

      {type:"teach", trg:"la coesione", src:"cohesion (textual)", pos:"noun", gender:"f",
       note:"Feminine noun. The linguistic glue holding text together.\n'Strumenti di coesione' = cohesion devices (pronouns, connectives, etc.).",
       example:"A: La coesione si ottiene con pronomi, sinonimi e connettivi.\nB: Un buon testo scorre senza ripetizioni inutili.",
       exampleSrc:"A: Cohesion is achieved through pronouns, synonyms, and connectives.\nB: A good text flows without unnecessary repetitions.",
       funFact:"Italian academic writing values elegant variation: repeating the same word is considered poor style. Writers use synonyms, pronouns, and periphrases to maintain coesione without repetition."},

      {type:"mc",
       q:"Qual e la differenza tra 'coerenza' e 'coesione' in un testo?",
       opts:["Sono la stessa cosa","La coerenza riguarda la logica delle idee, la coesione i legami linguistici","La coesione e piu importante della coerenza","La coerenza riguarda la grammatica, la coesione il lessico"],
       ans:"La coerenza riguarda la logica delle idee, la coesione i legami linguistici",
       hint:"One concerns whether your ideas are logically consistent. The other concerns the words and devices that connect your sentences together."},

      {type:"teach", trg:"l'argomentazione", src:"argumentation / reasoning", pos:"noun", gender:"f",
       note:"Feminine noun. The structured presentation of arguments.\n'Argomentazione solida' = solid argumentation.",
       example:"A: L'argomentazione del saggio e chiara e ben strutturata.\nB: Ogni tesi e supportata da esempi concreti.",
       exampleSrc:"A: The essay's argumentation is clear and well-structured.\nB: Every thesis is supported by concrete examples.",
       funFact:"Italian academic tradition values elaborate argumentation. The standard essay structure (tesi, antitesi, sintesi) follows Hegelian dialectics, with formal connectives marking each transition."},

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
       hint:"This word means 'although' and must be followed by the subjunctive mood. It introduces a concession before the main point."}
    ]},

    // ─── Lesson 2: Produzione scritta e orale ───
    {id:"itv2_u36l2", title:"Produzione avanzata", icon:"🎯", xp:15, board:true, steps:[
      {type:"intro", title:"Produzione scritta e orale",
       desc:"Practice the vocabulary and structures needed for B2-level written and oral production. Focus on opinion essays, formal letters, presentations, and academic discourse.",
       goals:["Use advanced vocabulary for opinion essays and formal communication","Master transition phrases and academic expressions","Demonstrate B2 proficiency across all skill areas"]},

      {type:"teach", trg:"il saggio", src:"the essay", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i saggi.\n'Saggio breve' = short essay (a standard Italian exam format). Also means 'wise man.'",
       example:"A: Il saggio deve avere un'introduzione, uno sviluppo e una conclusione.\nB: Non dimenticare la bibliografia alla fine.",
       exampleSrc:"A: The essay must have an introduction, a development, and a conclusion.\nB: Do not forget the bibliography at the end.",
       funFact:"'Saggio' has a beautiful double meaning: 'wise person' and 'essay/treatise.' Both derive from Latin 'sapere' (to know/to taste). A saggio is literally a 'tasting' of knowledge, a sampling of wisdom."},

      {type:"teach", trg:"l'introduzione", src:"the introduction", pos:"noun", gender:"f",
       note:"Feminine noun. The opening section of a text or speech.\n'In introduzione' = in the introduction.",
       example:"A: L'introduzione deve catturare l'attenzione del lettore.\nB: Inizia con una domanda provocatoria o un dato sorprendente.",
       exampleSrc:"A: The introduction must capture the reader's attention.\nB: Start with a provocative question or a surprising fact.",
       funFact:"In Italian academic tradition, the introduction ('premessa' in more formal contexts) should state the thesis, outline the argument structure, and signal the register. It is never a summary of the conclusion."},

      {type:"teach", trg:"la tesi", src:"the thesis / claim", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable plural: le tesi.\n'Sostenere una tesi' = to defend a thesis. 'Tesi di laurea' = graduation thesis.",
       example:"A: La mia tesi e che l'istruzione riduce la disuguaglianza.\nB: Devi dimostrarlo con dati e argomenti.",
       exampleSrc:"A: My thesis is that education reduces inequality.\nB: You must demonstrate it with data and arguments.",
       funFact:"In Italian universities, the 'tesi di laurea' (graduation thesis) is a substantial research document defended orally before a commission. Students address the commission with 'Signor Presidente, onorevoli membri della commissione.'"},

      {type:"teach", trg:"la conclusione", src:"the conclusion", pos:"noun", gender:"f",
       note:"Feminine noun. 'In conclusione' = in conclusion.\n'Trarre una conclusione' = to draw a conclusion.",
       example:"A: In conclusione, possiamo affermare che la tesi e confermata.\nB: I dati presentati non lasciano dubbi.",
       exampleSrc:"A: In conclusion, we can state that the thesis is confirmed.\nB: The data presented leave no doubts.",
       funFact:"Italian formal conclusions often use the 'noi' (we) form even for single-author texts, following the academic 'plurale majestatis.' 'Possiamo concludere che...' (we can conclude that) is standard academic style."},

      {type:"teach", trg:"la citazione", src:"the quotation / citation", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le citazioni.\n'Citare' (verb) = to quote/cite. 'Tra virgolette' = in quotation marks.",
       example:"A: Ogni citazione deve avere una fonte chiara.\nB: Altrimenti rischi un'accusa di plagio.",
       exampleSrc:"A: Every citation must have a clear source.\nB: Otherwise you risk an accusation of plagiarism.",
       funFact:"Italian academic style uses footnotes more than parenthetical citations. The standard footnote format in Italian humanities is: author surname, title in italics, publisher, year, page number. Different from APA or MLA styles."},

      {type:"mc",
       q:"Come si chiama la parte finale di un saggio dove si riassumono i risultati?",
       opts:["La conclusione","Lo sviluppo","La citazione","L'introduzione"],
       ans:"La conclusione",
       hint:"The last section of an essay, where you summarize your findings and restate your thesis in light of the evidence."},

      {type:"teach", trg:"la locuzione", src:"the set phrase / expression", pos:"noun", gender:"f",
       note:"Feminine noun. A fixed multi-word expression.\n'Locuzione avverbiale' = adverbial phrase. 'Locuzione prepositiva' = prepositional phrase.",
       example:"A: 'A quanto pare' e una locuzione che significa 'apparently.'\nB: Le locuzioni arricchiscono il tuo italiano.",
       exampleSrc:"A: 'A quanto pare' is a set phrase meaning 'apparently.'\nB: Set phrases enrich your Italian.",
       funFact:"Italian is rich in locuzioni: 'a mio avviso' (in my opinion), 'in fin dei conti' (when all is said and done), 'a quanto pare' (apparently). Mastering these marks the transition from competent to fluent speaker."},

      {type:"teach", trg:"pertanto", src:"therefore / consequently", pos:"conj", gender:null,
       note:"Formal conjunction. Introduces a logical consequence.\nSynonyms: di conseguenza, dunque, percio.",
       example:"A: I dati sono insufficienti. Pertanto, non possiamo trarre conclusioni.\nB: Servono ulteriori ricerche.",
       exampleSrc:"A: The data is insufficient. Therefore, we cannot draw conclusions.\nB: Further research is needed.",
       funFact:"'Pertanto' belongs to the formal register and is typical of academic and legal writing. In everyday speech, Italians use 'quindi' or 'percio' instead. Using 'pertanto' in conversation sounds overly stiff."},

      {type:"teach", trg:"tuttavia", src:"however / nevertheless", pos:"conj", gender:null,
       note:"Formal conjunction. Introduces a contrast or exception.\nSynonyms: nonostante cio, ciononostante, nondimeno.",
       example:"A: La proposta sembra valida. Tuttavia, ci sono alcuni rischi.\nB: Dobbiamo valutare attentamente i costi.",
       exampleSrc:"A: The proposal seems valid. However, there are some risks.\nB: We must carefully evaluate the costs.",
       funFact:"'Tuttavia' literally means 'all the way through' (tutto + via). It evolved from meaning 'always' to 'despite everything' to its modern sense of 'however.' This semantic shift happened over several centuries of Italian literary usage."},

      {type:"fb",
       s:"{1}, non possiamo ignorare le conseguenze economiche della decisione.",
       a:["Tuttavia"],
       opts:["Tuttavia","Pertanto","Inoltre","Percio"],
       hint:"A formal conjunction meaning 'however' or 'nevertheless.' It introduces a contrasting point to what was said before.",
       sSrc:"{1}, we cannot ignore the economic consequences of the decision."},

      {type:"teach", trg:"a mio avviso", src:"in my opinion", pos:"adv", gender:null,
       note:"Formal adverbial phrase. Alternatives: 'a mio parere,'\n'secondo me' (less formal), 'ritengo che' (I believe that).",
       example:"A: A mio avviso, la riforma e necessaria ma mal concepita.\nB: Condivido la necessita, ma non i metodi proposti.",
       exampleSrc:"A: In my opinion, the reform is necessary but badly conceived.\nB: I share the need, but not the proposed methods.",
       funFact:"Italian has a rich hierarchy of opinion expressions from casual to formal: 'per me' (casual), 'secondo me' (neutral), 'a mio avviso / a mio parere' (formal), 'sono del parere che' (very formal). Choosing the right one signals your register."},

      {type:"teach", trg:"in primo luogo", src:"first of all / firstly", pos:"adv", gender:null,
       note:"Formal adverbial phrase for ordering arguments.\n'In secondo luogo' = secondly. 'In ultima analisi' = ultimately.",
       example:"A: In primo luogo, consideriamo i dati economici.\nB: In secondo luogo, analizziamo l'impatto sociale.",
       exampleSrc:"A: First of all, let us consider the economic data.\nB: Secondly, let us analyze the social impact.",
       funFact:"The sequence 'in primo luogo, in secondo luogo, infine' (firstly, secondly, finally) is the backbone of Italian formal argumentation. Using numbered points instead of these phrases is considered less elegant in Italian academic writing."},

      {type:"mc",
       q:"Quale espressione e la piu formale per introdurre un'opinione personale?",
       opts:["Per me","A mio avviso","Secondo me","Io penso"],
       ans:"A mio avviso",
       hint:"The most formal option among these four ways to express a personal opinion. Used in academic essays and official documents."},

      {type:"teach", trg:"in sintesi", src:"in summary / to sum up", pos:"adv", gender:null,
       note:"Formal adverbial phrase for summarizing.\nAlternatives: 'in breve' (briefly), 'per riassumere' (to summarize), 'in conclusione.'",
       example:"A: In sintesi, il progetto presenta piu vantaggi che svantaggi.\nB: Raccomando la sua approvazione.",
       exampleSrc:"A: In summary, the project presents more advantages than disadvantages.\nB: I recommend its approval.",
       funFact:"'Sintesi' comes from Greek 'synthesis' (putting together). In Italian academia, 'capacita di sintesi' (ability to synthesize) is a highly valued skill, distinguishing competent students from excellent ones."},

      {type:"teach", trg:"il lessico", src:"vocabulary / lexicon", pos:"noun", gender:"m",
       note:"Masculine noun. The stock of words in a language or person.\n'Lessico specialistico' = specialized vocabulary. 'Arricchire il lessico' = to enrich vocabulary.",
       example:"A: Un lessico ricco ti permette di esprimerti con precisione.\nB: Leggi molto per ampliare il tuo vocabolario.",
       exampleSrc:"A: A rich vocabulary allows you to express yourself with precision.\nB: Read a lot to expand your vocabulary.",
       funFact:"The Italian lexicon contains roughly 260,000 headwords, but an educated speaker actively uses about 47,000. B2 proficiency corresponds to approximately 4,000-5,000 words, enough for most communicative situations."},

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
       opts:["L'abilita di scrivere testi molto lunghi","La conoscenza di molte lingue straniere","L'abilita di riassumere le idee in modo chiaro e conciso","La capacita di parlare velocemente"],
       ans:"L'abilita di riassumere le idee in modo chiaro e conciso",
       hint:"The ability to take complex information and present it in a clear, condensed form. From Greek 'synthesis' (putting together)."}
    ]}
  ]
};
export default UNIT_36;
