// Batch 7. Unit 26 extra lesson. Il diritto: Criminal Law & Due Process
const BATCH7_L1 = {id:"itv2_u26l_b7_1", title:"Il diritto penale", icon:"\u2696\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"Il diritto penale",
 desc:"Learn advanced legal vocabulary for criminal law, court proceedings, and the justice system.",
 goals:["Discuss criminal law concepts","Understand court procedures","Use legal terminology accurately"]},

{type:"teach", trg:"il reato", src:"the crime / offense", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i reati.\n'Commettere un reato' = to commit a crime.",
 example:"A: Il furto e un reato penale.\nB: Quale pena prevede la legge?",
 exampleSrc:"A: Theft is a criminal offense.\nB: What penalty does the law provide?",
 funFact:"Italian law distinguishes between 'reati' (serious crimes) and 'contravvenzioni' (minor offenses). The 'Codice Penale' (Penal Code) dates from 1930 and has been extensively modified."},

{type:"teach", trg:"l'imputato", src:"the defendant / accused", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'imputata. Plural: gli imputati.\n'Imputare' = to charge/accuse.",
 example:"A: L'imputato si dichiara innocente.\nB: Il giudice valutera le prove.",
 exampleSrc:"A: The defendant declares himself innocent.\nB: The judge will evaluate the evidence.",
 funFact:"In Italian law, the 'imputato' is presumed innocent until proven guilty (presunzione di innocenza). This principle is enshrined in Article 27 of the Constitution."},

{type:"teach", trg:"la prova", src:"the evidence / proof", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le prove.\n'Prova indiziaria' = circumstantial evidence.",
 example:"A: Le prove sono schiaccianti.\nB: L'accusa e forte.",
 exampleSrc:"A: The evidence is overwhelming.\nB: The prosecution's case is strong.",
 funFact:"'Prova' means both evidence and test/exam. 'Mettere alla prova' = to put to the test. In court, 'l'onere della prova' (burden of proof) lies with the prosecution."},

{type:"teach", trg:"la sentenza", src:"the sentence / ruling", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le sentenze.\n'Emettere una sentenza' = to issue a ruling.",
 example:"A: La sentenza sara pronunciata domani.\nB: Tutti aspettano con ansia.",
 exampleSrc:"A: The sentence will be pronounced tomorrow.\nB: Everyone is waiting anxiously.",
 funFact:"Italian trials have three levels: 'Tribunale' (first instance), 'Corte d'Appello' (appeal), and 'Corte di Cassazione' (supreme court). A 'sentenza' can be appealed twice."},

{type:"teach", trg:"l'avvocato difensore", src:"defense lawyer", pos:"noun", gender:"m",
 note:"Masculine noun. 'La difesa' = the defense.\n'Avvocato d'ufficio' = court-appointed lawyer.",
 example:"A: L'avvocato difensore ha parlato per due ore.\nB: Ha presentato una difesa convincente.",
 exampleSrc:"A: The defense lawyer spoke for two hours.\nB: He presented a convincing defense.",
 funFact:"Italian lawyers must be registered in the 'Albo degli Avvocati' (Bar Association register). The profession is highly regulated and respected, though Italy has more lawyers per capita than most European countries."},

{type:"teach", trg:"il pubblico ministero", src:"the prosecutor", pos:"noun", gender:"m",
 note:"Masculine noun. Abbreviation: PM.\n'L'accusa' = the prosecution.",
 example:"A: Il pubblico ministero ha chiesto cinque anni.\nB: La difesa contesta la richiesta.",
 exampleSrc:"A: The prosecutor requested five years.\nB: The defense contests the request.",
 funFact:"Italian prosecutors (PM) are magistrates, not politicians. They are independent from the government, which protects judicial independence but also creates debates about accountability."},

{type:"teach", trg:"la testimonianza", src:"the testimony", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le testimonianze.\n'Il testimone' = the witness. 'Testimoniare' = to testify.",
 example:"A: La testimonianza e stata decisiva.\nB: Il testimone era credibile.",
 exampleSrc:"A: The testimony was decisive.\nB: The witness was credible.",
 funFact:"Italian courts allow 'testimonianza' to be given orally. The cross-examination process ('controesame') was strengthened in 1989 when Italy moved toward a more adversarial system."},

{type:"teach", trg:"la pena", src:"the penalty / punishment", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pene.\n'Pena di morte' = death penalty (abolished in Italy). 'Pena detentiva' = prison sentence.",
 example:"A: La pena massima per questo reato e dieci anni.\nB: E proporzionata al danno causato.",
 exampleSrc:"A: The maximum penalty for this crime is ten years.\nB: It is proportionate to the damage caused.",
 funFact:"Italy abolished the death penalty in 1889, making it one of the first countries to do so. Article 27 of the Constitution permanently bans it. 'Le pene non possono consistere in trattamenti contrari al senso di umanita.'"},

{type:"teach", trg:"l'appello", src:"the appeal (legal)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare appello' = to appeal.\n'Corte d'Appello' = Court of Appeal.",
 example:"A: L'avvocato ha fatto appello contro la sentenza.\nB: Il processo d'appello inizia a marzo.",
 exampleSrc:"A: The lawyer appealed the sentence.\nB: The appeal trial starts in March.",
 funFact:"Italy's three-level court system means trials can take many years. 'Giustizia lenta' (slow justice) is one of Italy's most debated problems. The European Court of Human Rights has fined Italy for excessive trial lengths."},

{type:"teach", trg:"la prescrizione", src:"the statute of limitations", pos:"noun", gender:"f",
 note:"Feminine noun. 'Andare in prescrizione' = to expire (of a crime).\nTime limit for prosecution.",
 example:"A: Il reato e andato in prescrizione.\nB: Dopo quanto tempo?",
 exampleSrc:"A: The crime has expired under the statute of limitations.\nB: After how much time?",
 funFact:"'Prescrizione' is one of Italy's most controversial legal topics. Many high-profile trials end because the crime 'goes into prescription' during the lengthy appeal process."},

{type:"teach", trg:"l'indagine", src:"the investigation", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le indagini.\n'Indagare' = to investigate. 'L'indagato' = person under investigation.",
 example:"A: Le indagini sono in corso.\nB: La polizia sta raccogliendo le prove.",
 exampleSrc:"A: The investigation is ongoing.\nB: The police are gathering evidence.",
 funFact:"'Indagini preliminari' (preliminary investigations) are conducted by the PM with police assistance. The Italian system gives prosecutors significant investigative powers."},

{type:"teach", trg:"la condanna", src:"the conviction / sentence", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le condanne.\n'Condannare' = to convict. Opposite: 'assolvere' = to acquit.",
 example:"A: La condanna e di tre anni di reclusione.\nB: L'avvocato fara appello.",
 exampleSrc:"A: The sentence is three years of imprisonment.\nB: The lawyer will appeal.",
 funFact:"'Condanna' and 'assoluzione' (acquittal) are the two possible outcomes. 'Assolto per insufficienza di prove' (acquitted for insufficient evidence) used to exist but was abolished in 1989."},

{type:"teach", trg:"l'assoluzione", src:"the acquittal", pos:"noun", gender:"f",
 note:"Feminine noun. 'Assolvere' = to acquit.\n'Assolto/a' = acquitted. Opposite of 'condanna.'",
 example:"A: L'imputato ha ottenuto l'assoluzione.\nB: Le prove non erano sufficienti.",
 exampleSrc:"A: The defendant obtained an acquittal.\nB: The evidence was not sufficient.",
 funFact:"The Italian verdict 'assolto perché il fatto non sussiste' (acquitted because the fact does not exist) means the alleged crime never happened. It is the strongest form of acquittal."},

{type:"mc", q:"Quanti livelli di giudizio prevede il sistema italiano?",
 opts:["Tre","Due","Quattro","Uno"],
 ans:"Tre",
 hint:"First instance, appeal, and supreme court (Cassazione). Three chances."},

{type:"fb", s:"L'{1} si dichiara innocente.", a:["imputato"],
 opts:["imputato","avvocato","giudice","testimone"],
 hint:"The person accused of a crime in court. The defendant.",
 sSrc:"The {1} declares himself innocent."},

{type:"match", pairs:[
 {trg:"il reato", src:"crime"},
 {trg:"la prova", src:"evidence"},
 {trg:"la sentenza", src:"ruling"},
 {trg:"la pena", src:"penalty"}
]},

{type:"mc", q:"Quando ha abolito la pena di morte l'Italia?",
 opts:["2000","1889","1948","1960"],
 ans:"1889",
 hint:"One of the first countries in the world to abolish it. In the 19th century."},

{type:"fb", s:"Il reato e andato in {1}.", a:["prescrizione"],
 opts:["prescrizione","condanna","appello","indagine"],
 hint:"When too much time passes, the crime can no longer be prosecuted.",
 sSrc:"The crime has expired under the statute of {1}."},

{type:"mc", q:"Chi conduce le indagini preliminari in Italia?",
 opts:["L'avvocato difensore","Il testimone","Il pubblico ministero","Il giudice"],
 ans:"Il pubblico ministero",
 hint:"The prosecutor. A magistrate who is independent from the government."},

{type:"fb", s:"L'avvocato ha fatto {1} contro la sentenza.", a:["appello"],
 opts:["appello","reato","prova","condanna"],
 hint:"The legal process of challenging a court's decision at a higher court.",
 sSrc:"The lawyer {1} the sentence."},

{type:"match", pairs:[
 {trg:"l'indagine", src:"investigation"},
 {trg:"la condanna", src:"conviction"},
 {trg:"l'assoluzione", src:"acquittal"},
 {trg:"la testimonianza", src:"testimony"}
]}
,{type:"fb",s:"Il giudice ha letto {1} davanti alla corte.",a:["la sentenza"],opts:["la sentenza","la prova","la pena","il reato"],hint:"The official decision or ruling that a judge delivers at the end of a trial.",sSrc:"The judge read {1} in front of the court."}]};
export default BATCH7_L1;
