// Batch 8. Unit 26 extra lesson. Law: Rights & Responsibilities
const BATCH8_L1 = {id:"itv2_u26l_b8_1", title:"Diritti e doveri", icon:"📜", xp:15, board:true, steps:[
{type:"intro", title:"Diritti e doveri",
 desc:"Learn vocabulary for fundamental rights, civic duties, and constitutional principles in Italian.",
 goals:["Discuss fundamental rights and duties","Use constitutional vocabulary","Understand Italian civic terminology"]},

{type:"teach", trg:"la Costituzione", src:"the Constitution", pos:"noun", gender:"f",
 note:"Feminine noun. Capitalized when referring to the Italian Constitution.\nEntered into force January 1, 1948.",
 example:"A: La Costituzione italiana ha 139 articoli.\nB: L'articolo 1 dice che l'Italia e una Repubblica fondata sul lavoro.",
 exampleSrc:"A: The Italian Constitution has 139 articles.\nB: Article 1 says Italy is a Republic founded on work.",
 funFact:"The Italian Constitution was written by an elected assembly including communists, Catholics, liberals, and monarchists. Their compromises created a remarkably balanced document."},

{type:"teach", trg:"l'imputato", src:"the defendant / accused", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'imputata.\n'Imputare' = to charge/accuse.",
 example:"A: L'imputato si dichiara innocente.\nB: Il processo iniziera la prossima settimana.",
 exampleSrc:"A: The defendant pleads innocent.\nB: The trial will begin next week.",
 funFact:"Italian criminal law guarantees 'presunzione di innocenza' (presumption of innocence). The burden of proof lies with the prosecution, not the accused."},

{type:"teach", trg:"la sentenza", src:"the sentence / verdict", pos:"noun", gender:"f",
 note:"Feminine noun. 'Emettere una sentenza' = to issue a verdict.\n'Sentenza definitiva' = final verdict.",
 example:"A: La sentenza sara pronunciata domani.\nB: Speriamo in un verdetto giusto.",
 exampleSrc:"A: The verdict will be announced tomorrow.\nB: Let us hope for a fair verdict.",
 funFact:"Italy has three levels of court: Tribunale (first instance), Corte d'Appello (appeal), Corte di Cassazione (supreme court). Cases can take years to reach final sentenza."},

{type:"teach", trg:"il testimone", src:"the witness", pos:"noun", gender:"m",
 note:"Same form for m/f: il/la testimone.\n'Testimoniare' = to testify. 'Testimonianza' = testimony.",
 example:"A: Il testimone ha descritto la scena.\nB: La sua testimonianza e stata decisiva.",
 exampleSrc:"A: The witness described the scene.\nB: His testimony was decisive.",
 funFact:"Italian courts still use the dramatic phrase 'Giuro di dire la verita, tutta la verita, nient'altro che la verita' (I swear to tell the truth, the whole truth, nothing but the truth)."},

{type:"teach", trg:"il reato", src:"the crime / offense", pos:"noun", gender:"m",
 note:"Masculine noun. 'Commettere un reato' = to commit a crime.\n'Reato penale/civile' = criminal/civil offense.",
 example:"A: L'evasione fiscale e un reato grave.\nB: Le pene sono state inasprite.",
 exampleSrc:"A: Tax evasion is a serious crime.\nB: The penalties have been increased.",
 funFact:"Italy distinguishes 'delitto' (serious crime) from 'contravvenzione' (minor infraction). 'Reato' covers both. Tax evasion ('evasione fiscale') is Italy's most discussed reato."},

{type:"teach", trg:"la pena", src:"the penalty / punishment", pos:"noun", gender:"f",
 note:"Feminine noun. 'Pena di morte' = death penalty (abolished 1948).\n'Pena detentiva' = prison sentence.",
 example:"A: Qual e la pena per questo reato?\nB: Da due a cinque anni di reclusione.",
 exampleSrc:"A: What is the penalty for this crime?\nB: Two to five years of imprisonment.",
 funFact:"Italy abolished the death penalty in its 1948 Constitution, one of the first nations to do so. Article 27 states that 'punishments must aim at rehabilitation.'"},

{type:"teach", trg:"la querela", src:"the legal complaint / lawsuit", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sporgere querela' = to file a complaint.\n'Querelante' = the plaintiff.",
 example:"A: Ha sporto querela per diffamazione.\nB: Il giudice decidera se procedere.",
 exampleSrc:"A: He filed a complaint for defamation.\nB: The judge will decide whether to proceed.",
 funFact:"Italians are famously litigious. 'Ti faccio causa!' (I will sue you!) and 'Ti querelo!' (I will file charges!) are common threats, though most never follow through."},

{type:"teach", trg:"l'indagine", src:"the investigation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Indagare' = to investigate.\n'Sotto indagine' = under investigation.",
 example:"A: L'indagine e in corso da sei mesi.\nB: La polizia ha trovato nuove prove.",
 exampleSrc:"A: The investigation has been ongoing for six months.\nB: The police found new evidence.",
 funFact:"The Italian figure of the 'PM' (Pubblico Ministero, public prosecutor) leads investigations. Italian prosecutors have significant independence, a feature debated in politics."},

{type:"teach", trg:"il ricorso", src:"the appeal (legal)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare ricorso' = to file an appeal.\n'Ricorrere in appello' = to appeal.",
 example:"A: L'avvocato ha presentato ricorso.\nB: Il caso va alla Corte d'Appello.",
 exampleSrc:"A: The lawyer filed an appeal.\nB: The case goes to the Court of Appeal.",
 funFact:"Italy's multi-level appeal system means cases can take decades. The infamous 'lentezza della giustizia' (slowness of justice) is a major criticism of the Italian legal system."},

{type:"mc",
 q:"What does Article 1 of the Italian Constitution say?",
 opts:["Italy is a Republic founded on work","All citizens are equal","Freedom of speech is guaranteed","Italy is a monarchy"],
 ans:"Italy is a Republic founded on work",
 hint:"The very first article establishes I... as a r... and places w... (labor) at its foundation."},

{type:"match", pairs:[
  {trg:"l'imputato", src:"the defendant"},
  {trg:"la sentenza", src:"the verdict"},
  {trg:"il reato", src:"the crime"},
  {trg:"il ricorso", src:"the appeal"}
]},

{type:"fb",
 s:"Ha sporto {1} per diffamazione contro il giornale.",
 a:["querela"],
 opts:["querela","sentenza","indagine","reato"],
 hint:"This is a formal legal complaint filed against someone. It initiates legal proceedings.",
 sSrc:"He filed a {1} for defamation against the newspaper."},

{type:"mc",
 q:"When did Italy abolish the death penalty?",
 opts:["2000","1948 (in the new Constitution)","1900","1975"],
 ans:"1948 (in the new Constitution)",
 hint:"The post-war C... included this abolition. Article 27 focuses on rehabilitation, not punishment."},

{type:"fb",
 s:"L'{1} e in corso, la polizia cerca nuove prove.",
 a:["indagine"],
 opts:["indagine","sentenza","querela","ricorso"],
 hint:"This is the process of searching for evidence and facts. The police conduct this to solve crimes.",
 sSrc:"The {1} is ongoing, the police are looking for new evidence."},

{type:"mc",
 q:"What is Italy's biggest criticism of its justice system?",
 opts:["Too many judges","Not enough laws","The extreme slowness of proceedings","Too few courts"],
 ans:"The extreme slowness of proceedings",
 hint:"Cases can take years or even decades through the multi-level appeal system. 'Lentezza della giustizia' is a famous phrase."}
,{type:"match",pairs:[{trg:"la Costituzione",src:"the Constitution"},{trg:"la pena",src:"the penalty / punishment"}]}]};
export default BATCH8_L1;
