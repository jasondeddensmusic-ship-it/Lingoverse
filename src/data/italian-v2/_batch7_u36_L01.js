// Batch 7. Unit 36 extra lesson. Esame finale: CILS B2 Exam Strategies & Key Phrases
const BATCH7_L1 = {id:"itv2_u36l_b7_1", title:"Strategie per l'esame CILS B2", icon:"\u{1F3C6}", xp:15, board:true, steps:[
{type:"intro", title:"Strategie per l'esame CILS B2",
 desc:"Master essential exam phrases, discourse markers, and strategic language for the CILS B2 certification.",
 goals:["Use sophisticated discourse markers","Structure written and oral responses","Deploy exam-ready academic language"]},

{type:"teach", trg:"in primo luogo", src:"firstly / in the first place", pos:"adv", gender:null,
 note:"Adverbial phrase. 'In secondo luogo' = secondly.\nUsed to structure arguments.",
 example:"A: In primo luogo, analizziamo i dati.\nB: E in secondo luogo, traiamo le conclusioni.",
 exampleSrc:"A: Firstly, let us analyze the data.\nB: And secondly, let us draw conclusions.",
 funFact:"'In primo/secondo/terzo luogo' is the classic Italian way to enumerate points. In CILS exams, using these markers scores points for 'coerenza e coesione' (coherence and cohesion)."},

{type:"teach", trg:"da un lato... dall'altro", src:"on one hand... on the other", pos:"adv", gender:null,
 note:"Adverbial phrase pair. Used to present two sides of an argument.\n'Da una parte... dall'altra' = alternative version.",
 example:"A: Da un lato, la tecnologia facilita la vita.\nB: Dall'altro, crea nuove dipendenze.",
 exampleSrc:"A: On one hand, technology makes life easier.\nB: On the other, it creates new dependencies.",
 funFact:"This construction is essential for the CILS B2 written section. Examiners look for balanced argumentation, and 'da un lato... dall'altro' signals that you can see both sides."},

{type:"teach", trg:"a mio avviso", src:"in my opinion (formal)", pos:"adv", gender:null,
 note:"Adverbial phrase. Very formal. 'Avviso' = opinion/notice.\nMore formal than 'secondo me.'",
 example:"A: A mio avviso, il problema e complesso.\nB: Richiede un approccio multidisciplinare.",
 exampleSrc:"A: In my opinion, the problem is complex.\nB: It requires a multidisciplinary approach.",
 funFact:"The formality hierarchy for opinions: 'a mio avviso' (very formal) > 'a mio parere' (formal) > 'secondo me' (standard) > 'per me' (informal). CILS B2 rewards the formal ones."},

{type:"teach", trg:"non si può negare che", src:"it cannot be denied that", pos:"verb", gender:null,
 note:"Impersonal construction. Concedes a point before presenting your argument.\n'Negare' = to deny.",
 example:"A: Non si può negare che la situazione sia difficile.\nB: Tuttavia, ci sono soluzioni.",
 exampleSrc:"A: It cannot be denied that the situation is difficult.\nB: However, there are solutions.",
 funFact:"This concession-then-counter structure is golden in CILS B2. It shows you can acknowledge complexity before stating your position. Examiners reward this nuance."},

{type:"teach", trg:"vale la pena", src:"it is worth it / it is worthwhile", pos:"verb", gender:null,
 note:"Verb phrase. 'Vale la pena + infinitive' = it is worth doing.\n'Non vale la pena' = it is not worth it.",
 example:"A: Vale la pena studiare l'italiano?\nB: Assolutamente! Apre molte porte.",
 exampleSrc:"A: Is it worth studying Italian?\nB: Absolutely! It opens many doors.",
 funFact:"'Vale la pena' literally means 'it is worth the pain/effort.' Italians use this expression daily. 'Ne vale la pena' = it is worth it (emphasizing the value)."},

{type:"teach", trg:"per quanto riguarda", src:"as for / regarding", pos:"prep", gender:null,
 note:"Prepositional phrase. Very useful for structuring essays and presentations.\n'Per quanto riguarda il tema...' = regarding the topic...",
 example:"A: Per quanto riguarda l'economia, i dati sono positivi.\nB: E per quanto riguarda l'occupazione?",
 exampleSrc:"A: Regarding the economy, the data is positive.\nB: And regarding employment?",
 funFact:"'Per quanto riguarda' is one of the most tested phrases at B2 level. It elegantly introduces new topics within a larger argument. Essential for the oral exam."},

{type:"teach", trg:"e opportuno che", src:"it is appropriate that / it is advisable that", pos:"verb", gender:null,
 note:"Impersonal construction. Triggers subjunctive.\n'Opportuno' = appropriate/advisable.",
 example:"A: E opportuno che tutti partecipino.\nB: La decisione riguarda tutti.",
 exampleSrc:"A: It is advisable that everyone participates.\nB: The decision concerns everyone.",
 funFact:"'E opportuno che' is formal and triggers the subjunctive. Using it in the CILS exam shows grammatical competence. It is more elegant than 'e necessario che.'"},

{type:"teach", trg:"in sintesi", src:"in summary / to sum up", pos:"adv", gender:null,
 note:"Adverbial phrase. Used to conclude arguments.\n'Sintetizzare' = to summarize.",
 example:"A: In sintesi, il progetto ha avuto successo.\nB: I risultati parlano da soli.",
 exampleSrc:"A: In summary, the project was successful.\nB: The results speak for themselves.",
 funFact:"'In sintesi' is the preferred conclusion marker in formal Italian. Alternatives: 'per riassumere' (to sum up), 'in definitiva' (ultimately), 'tirando le somme' (drawing the sums)."},

{type:"teach", trg:"di conseguenza", src:"consequently / as a result", pos:"adv", gender:null,
 note:"Adverbial phrase. Shows cause-and-effect.\n'La conseguenza' = the consequence.",
 example:"A: I costi sono aumentati. Di conseguenza, i prezzi salgono.\nB: Era prevedibile.",
 exampleSrc:"A: Costs have increased. Consequently, prices go up.\nB: It was predictable.",
 funFact:"'Di conseguenza' is the formal version of 'quindi.' In a CILS B2 essay, using variety in cause-effect connectors (di conseguenza, pertanto, dunque, percio) impresses examiners."},

{type:"teach", trg:"tenendo conto di", src:"taking into account / considering", pos:"prep", gender:null,
 note:"Prepositional phrase. 'Tenere conto di' = to take into account.\nUsed to incorporate additional factors.",
 example:"A: Tenendo conto delle circostanze, la decisione e giusta.\nB: Ogni fattore e stato considerato.",
 exampleSrc:"A: Taking into account the circumstances, the decision is fair.\nB: Every factor was considered.",
 funFact:"'Tenendo conto di' adds nuance to arguments by acknowledging context. It signals mature reasoning: not just black and white, but considering all factors before judging."},

{type:"teach", trg:"a condizione che", src:"provided that / on condition that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive.\n'A condizione che + congiuntivo' is a core B2 structure.",
 example:"A: Accetto, a condizione che le regole siano chiare.\nB: Saranno definite per iscritto.",
 exampleSrc:"A: I accept, provided that the rules are clear.\nB: They will be defined in writing.",
 funFact:"'A condizione che' is a CILS B2 favorite. It demonstrates conditional reasoning + subjunctive mastery. Double points for grammar and discourse competence."},

{type:"teach", trg:"e indubbio che", src:"it is undeniable that", pos:"verb", gender:null,
 note:"Impersonal construction. Can take indicative (certain fact) or subjunctive (nuanced).\n'Indubbio' = undeniable.",
 example:"A: E indubbio che l'Italia abbia un grande patrimonio.\nB: Cinquantanove siti UNESCO lo confermano.",
 exampleSrc:"A: It is undeniable that Italy has a great heritage.\nB: Fifty-nine UNESCO sites confirm it.",
 funFact:"'E indubbio che' with subjunctive shows grammatical sophistication. Technically, you can use indicative (since the fact is certain), but using subjunctive signals elegance and B2+ mastery."},

{type:"teach", trg:"si auspica che", src:"it is hoped that", pos:"verb", gender:null,
 note:"Impersonal construction. Triggers subjunctive.\n'Auspicabile' = desirable. Very formal.",
 example:"A: Si auspica che la situazione migliori.\nB: Tutti speriamo in un cambiamento positivo.",
 exampleSrc:"A: It is hoped that the situation improves.\nB: We all hope for a positive change.",
 funFact:"'Auspicio' comes from Latin augury (reading bird signs for predictions). 'Sotto i migliori auspici' = under the best omens. 'Si auspica' is the formal, institutional way to express hope."},

{type:"teach", trg:"in ogni caso", src:"in any case / regardless", pos:"adv", gender:null,
 note:"Adverbial phrase. 'In qualsiasi caso' = in any case (more formal).\nUsed to add a final point.",
 example:"A: In ogni caso, la decisione finale spetta a te.\nB: Ci pensero con calma.",
 exampleSrc:"A: In any case, the final decision is up to you.\nB: I will think about it calmly.",
 funFact:"'In ogni caso' is a versatile closer. It works in formal and informal contexts. 'Ad ogni modo' (at any rate) is a slightly more formal alternative."},

{type:"mc", q:"Quale espressione introduce il primo punto di un'argomentazione?",
 opts:["In primo luogo","Di conseguenza","In sintesi","In ogni caso"],
 ans:"In primo luogo",
 hint:"Used at the beginning of a structured argument. Followed by 'in secondo l....'"},

{type:"fb", s:"{1} un lato c'è il progresso, dall'altro il rischio.", a:["Da"],
 opts:["Da","In","Per","Con"],
 hint:"The preposition that starts the phrase meaning 'on one hand.'",
 sSrc:"On one {1} there is progress, on the other risk."},

{type:"match", pairs:[
 {trg:"in primo luogo", src:"firstly"},
 {trg:"di conseguenza", src:"consequently"},
 {trg:"in sintesi", src:"in summary"},
 {trg:"in ogni caso", src:"in any case"}
]},

{type:"mc", q:"Quale espressione formale per 'in my opinion' usa la parola 'avviso'?",
 opts:["credo che","a mio avviso","secondo me","per me"],
 ans:"a mio avviso",
 hint:"The most formal of the options. Uses 'a...' (opinion/notice)."},

{type:"fb", s:"Non si può {1} che la situazione sia difficile.", a:["negare"],
 opts:["negare","dire","pensare","credere"],
 hint:"To deny. This phrase concedes a point before your counter-argument.",
 sSrc:"It cannot be {1} that the situation is difficult."},

{type:"mc", q:"Nella scala di formalita, quale espressione per 'therefore' e PIU formale?",
 opts:["percio","allora","pertanto","quindi"],
 ans:"pertanto",
 hint:"The most formal cause-effect connector. Preferred in academic writing."},

{type:"fb", s:"{1} la pena studiare l'italiano.", a:["Vale"],
 opts:["Vale","Costa","Fa","Ha"],
 hint:"The verb 'valere' (to be worth). Combined with 'la pena' (the effort).",
 sSrc:"It is {1} studying Italian."},

{type:"match", pairs:[
 {trg:"a mio avviso", src:"in my opinion"},
 {trg:"per quanto riguarda", src:"regarding"},
 {trg:"tenendo conto di", src:"taking into account"},
 {trg:"e opportuno che", src:"it is advisable that"}
]}
,{type:"match",pairs:[{trg:"a condizione che",src:"provided that / on condition that"},{trg:"e indubbio che",src:"it is undeniable that"},{trg:"si auspica che",src:"it is hoped that"}]},{type:"fb",s:"{1} ci sia presto una soluzione condivisa.",a:["si auspica che"],opts:["si auspica che","a condizione che","in ogni caso","di conseguenza"],hint:"An impersonal expression conveying hope or a wish that something will come to pass.",sSrc:"{1} there will soon be a shared solution."}]};
export default BATCH7_L1;
