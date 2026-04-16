// Batch 7 — Unit 30 extra lesson. Il congiuntivo avanzato: Formal Writing & Registers
const BATCH7_L1 = {id:"itv2_u30l_b7_1", title:"Il registro formale", icon:"\u{1F4DD}", xp:15, board:true, steps:[
{type:"intro", title:"Il registro formale",
 desc:"Master formal writing expressions, academic register, and sophisticated subjunctive constructions.",
 goals:["Write in formal Italian register","Use advanced subjunctive in written contexts","Distinguish between formal and informal registers"]},

{type:"teach", trg:"si ritiene che", src:"it is believed that", pos:"verb", gender:null,
 note:"Impersonal construction. Triggers subjunctive.\n'Ritenere' = to believe/consider.",
 example:"A: Si ritiene che la situazione migliori presto.\nB: Lo speriamo tutti.",
 exampleSrc:"A: It is believed that the situation will improve soon.\nB: We all hope so.",
 funFact:"Impersonal 'si' constructions are the backbone of formal Italian writing. They create distance and objectivity, essential in academic and journalistic contexts."},

{type:"teach", trg:"occorre che", src:"it is necessary that", pos:"verb", gender:null,
 note:"Impersonal construction. Triggers subjunctive.\n'Occorrere' = to be necessary. More formal than 'bisogna.'",
 example:"A: Occorre che tutti partecipino.\nB: La partecipazione e fondamentale.",
 exampleSrc:"A: It is necessary that everyone participates.\nB: Participation is fundamental.",
 funFact:"'Occorre' is more formal than 'bisogna' and 'e necessario.' In bureaucratic Italian, 'occorre' appears constantly: 'occorre presentare i documenti entro...'"},

{type:"teach", trg:"pare che", src:"it seems that / it appears that", pos:"verb", gender:null,
 note:"Impersonal construction. Triggers subjunctive.\n'Parere' = to seem. Very common in journalism.",
 example:"A: Pare che il governo stia preparando una nuova legge.\nB: Vedremo cosa succede.",
 exampleSrc:"A: It appears that the government is preparing a new law.\nB: We will see what happens.",
 funFact:"'Pare che' and 'sembra che' both mean 'it seems that,' but 'pare' is slightly more formal and literary. Journalists love 'pare che' because it reports without confirming."},

{type:"teach", trg:"sebbene", src:"although / even though", pos:"conj", gender:null,
 note:"Conjunction. Always triggers subjunctive. Very formal.\n'Sebbene sia tardi' = although it is late.",
 example:"A: Sebbene sia difficile, non ci arrendiamo.\nB: La perseveranza e fondamentale.",
 exampleSrc:"A: Although it is difficult, we do not give up.\nB: Perseverance is fundamental.",
 funFact:"'Sebbene' is the most formal way to say 'although.' The hierarchy: 'sebbene' (very formal) > 'benche' (formal) > 'nonostante' (standard) > 'anche se' (informal, no subjunctive needed)."},

{type:"teach", trg:"benche", src:"although / even though", pos:"conj", gender:null,
 note:"Conjunction. Always triggers subjunctive.\n'Benche' is slightly less formal than 'sebbene.'",
 example:"A: Benche piova, la manifestazione continua.\nB: I partecipanti sono determinati.",
 exampleSrc:"A: Although it rains, the demonstration continues.\nB: The participants are determined.",
 funFact:"'Benche' comes from 'bene che' (well that). It always takes the subjunctive, making it a favorite test item in Italian language certification exams at B2 level."},

{type:"teach", trg:"affinche", src:"in order that / so that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive. Purpose clause.\n'Affinche tutti capiscano' = so that everyone understands.",
 example:"A: Parlo lentamente affinche tutti capiscano.\nB: Grazie, e molto utile.",
 exampleSrc:"A: I speak slowly so that everyone understands.\nB: Thank you, it is very helpful.",
 funFact:"'Affinche' is the formal version of 'perche' (when it means 'so that'). In academic writing, 'affinche' signals sophistication. In speech, most Italians use 'perche' or 'in modo che.'"},

{type:"teach", trg:"laddove", src:"whereas / where (formal)", pos:"conj", gender:null,
 note:"Conjunction. Very formal. 'Laddove' = 'la dove' (there where).\nUsed in legal and academic texts.",
 example:"A: L'Italia ha agito, laddove altri paesi hanno esitato.\nB: Un esempio di leadership.",
 exampleSrc:"A: Italy acted, whereas other countries hesitated.\nB: An example of leadership.",
 funFact:"'Laddove' sounds almost archaic in speech but is alive and well in formal writing. Legal texts, academic papers, and newspaper editorials use it to create elegant contrasts."},

{type:"teach", trg:"in quanto", src:"since / because / as", pos:"conj", gender:null,
 note:"Conjunction. More formal than 'perche.'\n'In quanto cittadino' = as a citizen.",
 example:"A: In quanto esperto, il suo parere e prezioso.\nB: Ha trent'anni di esperienza.",
 exampleSrc:"A: As an expert, his opinion is valuable.\nB: He has thirty years of experience.",
 funFact:"'In quanto' can mean both 'since/because' and 'as/in the capacity of.' 'In quanto tale' = as such. It is indispensable in formal Italian argumentation."},

{type:"teach", trg:"pertanto", src:"therefore / consequently", pos:"conj", gender:null,
 note:"Conjunction. Very formal. Synonym of 'quindi' and 'percio.'\n'Pertanto concludo che...' = therefore I conclude that...",
 example:"A: I dati sono chiari, pertanto la conclusione e ovvia.\nB: Non ci sono dubbi.",
 exampleSrc:"A: The data is clear, therefore the conclusion is obvious.\nB: There are no doubts.",
 funFact:"The formality hierarchy for 'therefore': 'pertanto' (very formal) > 'dunque' (formal) > 'percio' (standard) > 'quindi' (everyday). Academic Italian strongly prefers 'pertanto.'"},

{type:"teach", trg:"tuttavia", src:"however / nevertheless", pos:"conj", gender:null,
 note:"Conjunction. Formal. 'Tuttavia, bisogna considerare...' = however, one must consider...",
 example:"A: I risultati sono positivi. Tuttavia, ci sono limiti.\nB: Quali limiti?",
 exampleSrc:"A: The results are positive. However, there are limitations.\nB: What limitations?",
 funFact:"'Tuttavia' is the academic version of 'pero' and 'comunque.' In a formal essay, using 'pero' sounds too colloquial. 'Tuttavia' adds the right scholarly tone."},

{type:"teach", trg:"va sottolineato che", src:"it should be emphasized that", pos:"verb", gender:null,
 note:"Impersonal construction. 'Sottolineare' = to underline/emphasize.\nCommon in formal arguments.",
 example:"A: Va sottolineato che i risultati sono preliminari.\nB: Servono ulteriori ricerche.",
 exampleSrc:"A: It should be emphasized that the results are preliminary.\nB: Further research is needed.",
 funFact:"'Va + past participle' is a formal passive construction: 'va detto' (it must be said), 'va notato' (it should be noted), 'va ricordato' (it should be remembered). Essential in academic Italian."},

{type:"teach", trg:"alla luce di", src:"in light of", pos:"prep", gender:null,
 note:"Prepositional phrase. 'Alla luce dei fatti' = in light of the facts.\nVery common in formal analysis.",
 example:"A: Alla luce dei nuovi dati, rivediamo la strategia.\nB: E la decisione giusta.",
 exampleSrc:"A: In light of the new data, let us revise the strategy.\nB: It is the right decision.",
 funFact:"'Alla luce di' is a cornerstone of formal Italian argumentation. It introduces evidence-based reasoning. Used in academic papers, legal arguments, and political speeches."},

{type:"teach", trg:"in definitiva", src:"ultimately / in the end", pos:"adv", gender:null,
 note:"Adverb. 'In definitiva, possiamo concludere che...' = ultimately, we can conclude that...",
 example:"A: In definitiva, il progetto e un successo.\nB: Nonostante le difficolta iniziali.",
 exampleSrc:"A: Ultimately, the project is a success.\nB: Despite the initial difficulties.",
 funFact:"'In definitiva' is how you wrap up a formal argument. The hierarchy for 'in conclusion': 'in definitiva' (very formal) > 'in conclusione' (formal) > 'alla fine' (informal) > 'insomma' (colloquial)."},

{type:"mc", q:"Quale congiunzione e la PIU formale per dire 'although'?",
 opts:["sebbene","anche se","pero","ma"],
 ans:"sebbene",
 hint:"The most formal option. Always requires the subjunctive mood."},

{type:"fb", s:"{1} sia difficile, non ci arrendiamo.", a:["Sebbene"],
 opts:["Sebbene","Anche se","Perche","Quando"],
 hint:"Very formal 'although.' Triggers subjunctive. Used in written, elevated Italian.",
 sSrc:"{1} it is difficult, we do not give up."},

{type:"match", pairs:[
 {trg:"pertanto", src:"therefore"},
 {trg:"tuttavia", src:"however"},
 {trg:"benche", src:"although"},
 {trg:"affinche", src:"so that"}
]},

{type:"mc", q:"In un saggio accademico, quale parola per 'therefore' e piu appropriata?",
 opts:["pertanto","quindi","percio","allora"],
 ans:"pertanto",
 hint:"The most formal option in the hierarchy. Preferred in academic writing."},

{type:"fb", s:"{1} luce dei nuovi dati, rivediamo la strategia.", a:["Alla"],
 opts:["Alla","Nella","Sulla","Dalla"],
 hint:"The preposition that starts the phrase meaning 'in light of.'",
 sSrc:"In {1} of the new data, let us revise the strategy."},

{type:"mc", q:"Che costruzione formale si usa per 'it should be emphasized'?",
 opts:["Va sottolineato che","E importante","Bisogna dire","Si deve capire"],
 ans:"Va sottolineato che",
 hint:"Uses 'va + past participle' construction. Very formal passive voice."},

{type:"fb", s:"{1} definitiva, il progetto e un successo.", a:["In"],
 opts:["In","A","Di","Per"],
 hint:"The preposition starting the phrase meaning 'ultimately' or 'in the end.'",
 sSrc:"{1} the end, the project is a success."},

{type:"match", pairs:[
 {trg:"si ritiene che", src:"it is believed that"},
 {trg:"pare che", src:"it seems that"},
 {trg:"laddove", src:"whereas"},
 {trg:"in quanto", src:"since / as"}
]}
]};
export default BATCH7_L1;
