// Batch 6 — Unit 23 extra lesson. La politica e la società: Justice & Legal System
const BATCH6_L1 = {id:"itv2_u23l_b6_1", title:"La giustizia e i diritti", icon:"\u{2696}\u{FE0F}", xp:15, board:true, steps:[
{type:"intro", title:"La giustizia e i diritti",
 desc:"Learn vocabulary about justice, rights, and the Italian legal system at an intermediate level.",
 goals:["Discuss basic legal concepts and rights","Talk about justice and fairness","Understand key terms in Italian law"]},

{type:"teach", trg:"il diritto", src:"the right / law (field)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i diritti.\n'Diritto' = right/law. 'Dritto' = straight (different word).",
 example:"A: Tutti hanno il diritto alla salute.\nB: E scritto nella Costituzione.",
 exampleSrc:"A: Everyone has the right to health.\nB: It is written in the Constitution.",
 funFact:"'Diritto' means both 'right' (a right you have) and 'law' (the field of study). 'Studiare diritto' means to study law, not to study correctly."},

{type:"teach", trg:"il dovere", src:"the duty / obligation", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i doveri.\nAlso the modal verb 'dovere' (must/to have to).",
 example:"A: Votare e un diritto e un dovere.\nB: Sono d'accordo, e molto importante.",
 exampleSrc:"A: Voting is a right and a duty.\nB: I agree, it is very important.",
 funFact:"The Italian Constitution lists both 'diritti' (rights) and 'doveri' (duties) of citizens. Article 2 states that rights and duties are inseparable."},

{type:"teach", trg:"il giudice", src:"the judge", pos:"noun", gender:"m",
 note:"Masculine/feminine noun (il/la giudice). Plural: i giudici.\nThe person who presides over a court.",
 example:"A: Il giudice ha emesso la sentenza.\nB: Era favorevole o contraria?",
 exampleSrc:"A: The judge issued the verdict.\nB: Was it favorable or against?",
 funFact:"Italian judges can be either 'giudice di pace' (justice of the peace for minor matters) or 'giudice del tribunale' (court judge for serious cases). They wear black robes."},

{type:"teach", trg:"l'avvocato difensore", src:"the defense lawyer", pos:"noun", gender:"m",
 note:"Masculine noun. 'Avvocato' + 'difensore' (defender).\nThe lawyer representing the accused.",
 example:"A: L'avvocato difensore ha parlato per un'ora.\nB: La difesa era convincente?",
 exampleSrc:"A: The defense lawyer spoke for an hour.\nB: Was the defense convincing?",
 funFact:"In Italy, every accused person has the right to an 'avvocato difensore.' If they cannot afford one, the court appoints a 'difensore d'ufficio' (public defender)."},

{type:"teach", trg:"il processo", src:"the trial / process", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i processi.\nBoth a legal trial and a general process.",
 example:"A: Il processo dura già da due anni.\nB: In Italia i processi sono spesso lunghi.",
 exampleSrc:"A: The trial has been going on for two years.\nB: In Italy trials are often long.",
 funFact:"The Italian justice system is notoriously slow. Cases can take years to resolve. 'Processo breve' (short trial) has been a political debate topic for decades."},

{type:"teach", trg:"la sentenza", src:"the verdict / sentence", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le sentenze.\nThe judge's official decision in a case.",
 example:"A: La sentenza sara pronunciata venerdì.\nB: Speriamo in un risultato giusto.",
 exampleSrc:"A: The verdict will be pronounced on Friday.\nB: We hope for a fair result.",
 funFact:"Italian criminal courts have three levels: Tribunale (first instance), Corte d'Appello (appeal), and Cassazione (supreme court). Each can issue a different 'sentenza.'"},

{type:"teach", trg:"colpevole", src:"guilty", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. Opposite: innocente.\n'Dichiarare colpevole' = to find guilty.",
 example:"A: L'imputato e stato dichiarato colpevole.\nB: Quale sara la pena?",
 exampleSrc:"A: The defendant was found guilty.\nB: What will the punishment be?",
 funFact:"In Italian law, 'presunzione di innocenza' (presumption of innocence) means you are 'innocente fino a prova contraria' (innocent until proven guilty)."},

{type:"teach", trg:"innocente", src:"innocent / not guilty", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. Opposite: colpevole.\nAlso means 'harmless/naive.'",
 example:"A: L'imputato e stato dichiarato innocente.\nB: Era un errore giudiziario.",
 exampleSrc:"A: The defendant was declared innocent.\nB: It was a judicial error.",
 funFact:"'Innocente' also describes a child or a naive person: 'sguardo innocente' (innocent look). 'Fare l'innocente' means to play innocent, to feign ignorance."},

{type:"teach", trg:"la testimonianza", src:"the testimony / witness statement", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le testimonianze.\nFrom 'testimone' (witness). Formal court testimony.",
 example:"A: La testimonianza era molto dettagliata.\nB: Ha aiutato a risolvere il caso.",
 exampleSrc:"A: The testimony was very detailed.\nB: It helped solve the case.",
 funFact:"'Falsa testimonianza' (perjury) is a serious crime in Italy. The oath taken by witnesses includes 'giuro di dire la verita' (I swear to tell the truth)."},

{type:"teach", trg:"l'uguaglianza", src:"the equality", pos:"noun", gender:"f",
 note:"Feminine noun. From 'uguale' (equal).\nA fundamental constitutional principle.",
 example:"A: L'uguaglianza davanti alla legge e un principio fondamentale.\nB: Purtroppo non e sempre rispettata.",
 exampleSrc:"A: Equality before the law is a fundamental principle.\nB: Unfortunately it is not always respected.",
 funFact:"Article 3 of the Italian Constitution guarantees equality regardless of sex, race, language, religion, or political opinion. It is one of the most cited articles."},

{type:"teach", trg:"la libertà", src:"the freedom / liberty", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le libertà.\nA core value in the Italian Constitution.",
 example:"A: La libertà di espressione e un diritto fondamentale.\nB: Si, e va sempre difesa.",
 exampleSrc:"A: Freedom of expression is a fundamental right.\nB: Yes, and it must always be defended.",
 funFact:"The Italian Constitution, born in 1948 after fascism, places enormous emphasis on 'libertà.' The word appears over 30 times in the document."},

{type:"teach", trg:"la pena", src:"the penalty / punishment", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pene.\n'Pena di morte' = death penalty (abolished in Italy in 1947).",
 example:"A: Qual e la pena per questo reato?\nB: Fino a cinque anni di carcere.",
 exampleSrc:"A: What is the penalty for this crime?\nB: Up to five years in prison.",
 funFact:"Italy abolished the death penalty in 1947, one of the first European nations to do so. Cesare Beccaria's 1764 treatise against torture and capital punishment was written in Milan."},

{type:"teach", trg:"assolvere", src:"to acquit / to absolve", pos:"verb", gender:null,
 note:"Irregular -ere verb. assolvo, assolvi, assolve.\nPast participle: assolto.",
 example:"A: L'imputato e stato assolto per mancanza di prove.\nB: La giustizia ha fatto il suo corso.",
 exampleSrc:"A: The defendant was acquitted for lack of evidence.\nB: Justice has run its course.",
 funFact:"'Assolto' has both legal (acquitted) and religious (absolved) meanings. Both share the Latin root 'absolvere' (to set free from)."},

{type:"mc", q:"Qual e il contrario di 'colpevole'?",
 opts:["innocente","colpevole","assolto","condannato"],
 ans:"innocente",
 hint:"Not guilty. Also means naive or harmless in everyday speech."},

{type:"fb", s:"Il {1} ha emesso la sentenza dopo due ore.", a:["giudice"],
 opts:["giudice","avvocato","testimone","processo"],
 hint:"The person who presides over a court and makes the official decision.",
 sSrc:"The {1} issued the verdict after two hours."},

{type:"match", pairs:[
 {trg:"il diritto", src:"right / law"},
 {trg:"il dovere", src:"duty"},
 {trg:"la libertà", src:"freedom"},
 {trg:"l'uguaglianza", src:"equality"}
]},

{type:"mc", q:"Quando ha abolito l'Italia la pena di morte?",
 opts:["Nel 1947","Nel 1964","Nel 2000","Mai"],
 ans:"Nel 1947",
 hint:"One of the first European nations to abolish it, right after World War II."},

{type:"fb", s:"L'imputato e stato {1} per mancanza di prove.", a:["assolto"],
 opts:["assolto","colpevole","condannato","processato"],
 hint:"Past participle of 'assolvere.' Found not guilty by the court.",
 sSrc:"The defendant was {1} for lack of evidence."},

{type:"mc", q:"Perche i processi in Italia sono spesso lunghi?",
 opts:["The justice system is notoriously slow with multiple appeal levels","Judges take long vacations","Lawyers refuse to work quickly","There are too few crimes"],
 ans:"The justice system is notoriously slow with multiple appeal levels",
 hint:"Three l... of courts (first instance, a..., supreme) mean cases take years."},

{type:"fb", s:"Tutti hanno il {1} alla salute e all'istruzione.", a:["diritto"],
 opts:["diritto","dovere","processo","giudice"],
 hint:"A fundamental entitlement guaranteed by the Constitution.",
 sSrc:"Everyone has the {1} to health and education."},

{type:"match", pairs:[
 {trg:"il giudice", src:"judge"},
 {trg:"la sentenza", src:"verdict"},
 {trg:"la pena", src:"penalty"},
 {trg:"la testimonianza", src:"testimony"}
]}
]};
export default BATCH6_L1;
