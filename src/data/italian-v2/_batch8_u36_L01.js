// Batch 8. Unit 36 extra lesson. Final Review: Essential Connectors & Academic Writing
const BATCH8_L1 = {id:"itv2_u36l_b8_1", title:"Connettori e stile", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"Connettori e stile",
 desc:"Master essential connectors, transition words, and academic writing style for advanced Italian.",
 goals:["Use advanced connectors fluently","Write cohesive paragraphs","Achieve CILS B2-level written production"]},

{type:"teach", trg:"pertanto", src:"therefore / consequently", pos:"conj", gender:null,
 note:"Formal connector. Synonym of 'quindi' but more academic.\nUsed in essays, reports, legal texts.",
 example:"A: Il budget e insufficiente. Pertanto, dobbiamo rivedere il piano.\nB: Presento le alternative domani.",
 exampleSrc:"A: The budget is insufficient. Therefore, we must revise the plan.\nB: I will present the alternatives tomorrow.",
 funFact:"'Pertanto' comes from Latin 'per tantum' (for so much). It is the gold-standard connector in Italian academic and legal writing, preferred over the more casual 'quindi.'"},

{type:"teach", trg:"ciononostante", src:"nevertheless / despite this", pos:"conj", gender:null,
 note:"Formal connector. Compound: cio (this) + nonostante (despite).\nAlternative to 'tuttavia.'",
 example:"A: I risultati sono stati deludenti. Ciononostante, continuiamo la ricerca.\nB: La perseveranza e fondamentale.",
 exampleSrc:"A: The results were disappointing. Nevertheless, we continue the research.\nB: Perseverance is fundamental.",
 funFact:"Italian loves multi-syllable connectors. 'Ciononostante' has six syllables and sounds impressively formal. It immediately elevates the register of any text."},

{type:"teach", trg:"in primo luogo", src:"firstly / in the first place", pos:"adv", gender:null,
 note:"Adverbial phrase. 'In secondo luogo' = secondly.\nEssential for structured argumentation.",
 example:"A: In primo luogo, analizziamo i dati. In secondo luogo, traiamo le conclusioni.\nB: Un approccio metodico.",
 exampleSrc:"A: Firstly, let us analyze the data. Secondly, let us draw conclusions.\nB: A methodical approach.",
 funFact:"Italian academic style values clear structure. 'In primo luogo... in secondo luogo... infine...' (firstly... secondly... finally...) is the backbone of every well-organized essay."},

{type:"teach", trg:"in conclusione", src:"in conclusion", pos:"adv", gender:null,
 note:"Adverbial phrase. Used to wrap up arguments.\n'Per concludere' = to conclude.",
 example:"A: In conclusione, i dati confermano la nostra ipotesi.\nB: Un lavoro eccellente!",
 exampleSrc:"A: In conclusion, the data confirm our hypothesis.\nB: Excellent work!",
 funFact:"CILS B2 writing exams specifically look for structured conclusions. 'In conclusione,' 'per riassumere,' and 'in sintesi' are all expected at this level."},

{type:"teach", trg:"a tal proposito", src:"in this regard / on this matter", pos:"adv", gender:null,
 note:"Formal phrase. 'A questo proposito' = on this topic.\nConnects to a previously mentioned point.",
 example:"A: A tal proposito, vorrei aggiungere un'osservazione.\nB: Prego, la ascoltiamo.",
 exampleSrc:"A: In this regard, I would like to add an observation.\nB: Please, we are listening.",
 funFact:"'A tal proposito' is a favorite of Italian politicians and professors. It smoothly connects one point to another and sounds authoritative without being aggressive."},

{type:"teach", trg:"alla luce di", src:"in light of", pos:"prep", gender:null,
 note:"Prepositional phrase. 'Alla luce dei fatti' = in light of the facts.\nFormal, analytical register.",
 example:"A: Alla luce dei risultati, dobbiamo cambiare strategia.\nB: I numeri parlano chiaro.",
 exampleSrc:"A: In light of the results, we must change strategy.\nB: The numbers speak clearly.",
 funFact:"'Alla luce del sole' (in the light of the sun) means openly, transparently. Italian loves light metaphors for truth: 'fare luce su' (to shed light on), 'venire alla luce' (to come to light)."},

{type:"teach", trg:"per quanto riguarda", src:"as regards / concerning", pos:"prep", gender:null,
 note:"Prepositional phrase. 'Per quanto riguarda...' = regarding...\nA common topic-shifter in formal speech.",
 example:"A: Per quanto riguarda il bilancio, siamo in pareggio.\nB: E la situazione del personale?",
 exampleSrc:"A: As regards the budget, we are breaking even.\nB: And the staffing situation?",
 funFact:"'Per quanto riguarda' is the Swiss Army knife of Italian formal speech. It introduces any new topic seamlessly. Politicians use it to pivot away from uncomfortable questions."},

{type:"teach", trg:"vale a dire", src:"that is to say / namely", pos:"adv", gender:null,
 note:"Adverbial phrase. Literally: 'it is worth saying.'\nUsed to clarify or rephrase.",
 example:"A: Il PIL e cresciuto, vale a dire l'economia migliora.\nB: Ma la crescita e ancora lenta.",
 exampleSrc:"A: GDP grew, that is to say the economy is improving.\nB: But growth is still slow.",
 funFact:"'Vale a dire' is elegant Italian for 'in other words.' The Latin 'id est' (i.e.) serves the same function in academic English. Italian prefers its own phrase."},

{type:"teach", trg:"l'abstract", src:"the abstract (academic)", pos:"noun", gender:"m",
 note:"Masculine noun. English borrowing. 'Scrivere un abstract' = to write an abstract.\nItalian alternative: 'il riassunto.'",
 example:"A: L'abstract deve essere di massimo 300 parole.\nB: Riassumi i punti chiave della ricerca.",
 exampleSrc:"A: The abstract must be maximum 300 words.\nB: Summarize the key points of the research.",
 funFact:"Italian academia uses 'abstract' in English even in Italian-language journals. The Italian 'riassunto' is considered less precise. Code-switching is standard in Italian academic writing."},

{type:"mc",
 q:"Which connector is considered more formal than 'quindi'?",
 opts:["Pertanto","Allora","Poi","Cosi"],
 ans:"Pertanto",
 hint:"This Latin-derived connector is the gold standard in academic and legal Italian. It means the same as 'therefore.'"},

{type:"match", pairs:[
  {trg:"ciononostante", src:"nevertheless"},
  {trg:"pertanto", src:"therefore"},
  {trg:"vale a dire", src:"that is to say"},
  {trg:"alla luce di", src:"in light of"}
]},

{type:"fb",
 s:"{1}, analizziamo i dati. In secondo luogo, traiamo le conclusioni.",
 a:["In primo luogo"],
 opts:["In primo luogo","In conclusione","A tal proposito","Ciononostante"],
 hint:"This phrase means 'firstly.' It is the opening of a structured argument that continues with 'secondly.'",
 sSrc:"{1}, let us analyze the data. Secondly, let us draw conclusions."},

{type:"mc",
 q:"What do politicians use 'per quanto riguarda' for?",
 opts:["To introduce themselves","To pivot to a new topic or away from uncomfortable questions","To end a speech","To agree with someone"],
 ans:"To pivot to a new topic or away from uncomfortable questions",
 hint:"This versatile phrase smoothly shifts the discussion to any n... subject. It is the Swiss Army knife of formal Italian."},

{type:"fb",
 s:"{1} dei risultati, dobbiamo cambiare la nostra strategia.",
 a:["Alla luce"],
 opts:["Alla luce","In conclusione","Per quanto","A tal proposito"],
 hint:"This prepositional phrase means 'considering' or 'in view of.' It uses a metaphor of light revealing truth.",
 sSrc:"{1} of the results, we must change our strategy."},

{type:"mc",
 q:"Why do Italian academic journals often use 'abstract' in English?",
 opts:["It is required by law","English is the only academic language","The English term is considered more precise than the Italian 'riassunto'","Italian has no equivalent word"],
 ans:"The English term is considered more precise than the Italian 'riassunto'",
 hint:"Code-switching between I... and E... is standard in I... academia. E... terms carry specific academic weight."}
,{type:"match",pairs:[{trg:"in conclusione",src:"in conclusion"},{trg:"a tal proposito",src:"in this regard / on this matter"},{trg:"per quanto riguarda",src:"as regards / concerning"}]},{type:"mc",q:"How do you say \"abstract\" in Italian?",opts:["pertanto","ciononostante","in primo luogo","l'abstract"],ans:"l'abstract",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
