// Unit 26 Expansion. Lesson 4: Il sistema giudiziario
const LESSON_4 = {
  id:"itv2_u26l4", title:"Il sistema giudiziario", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il sistema giudiziario",
     desc:"Explore the structure of the Italian judicial system, its courts and jurisdictions. Learn vocabulary for discussing how justice is administered in Italy.",
     goals:["Describe the Italian court hierarchy","Discuss different types of jurisdiction","Understand the roles of magistrates and prosecutors"]},

    {type:"teach", trg:"la magistratura", src:"the magistracy / judiciary", pos:"noun", gender:"f",
     note:"Feminine noun. The body of judges and prosecutors.\n'Consiglio Superiore della Magistratura (CSM)' = the judiciary's governing body.",
     example:"A: La magistratura italiana e indipendente dal governo.\nB: Lo garantisce la Costituzione.",
     exampleSrc:"A: The Italian judiciary is independent from the government.\nB: The Constitution guarantees it.",
     funFact:"In Italy, judges and prosecutors belong to the same professional body, the 'magistratura.' They can switch roles during their career, which is unusual by international standards and occasionally controversial."},

    {type:"teach", trg:"il pubblico ministero", src:"the public prosecutor", pos:"noun", gender:"m",
     note:"Masculine compound noun. Abbreviated: PM.\nDirects criminal investigations and brings charges.\nPlural: i pubblici ministeri.",
     example:"A: Il pubblico ministero ha chiesto sei anni di carcere.\nB: L'avvocato difensore contestera la richiesta.",
     exampleSrc:"A: The public prosecutor requested six years in prison.\nB: The defense lawyer will challenge the request.",
     funFact:"Italian prosecutors have 'obbligatorieta dell'azione penale' (mandatory prosecution): they must investigate all reported crimes, unlike in some countries where prosecutors choose which cases to pursue. This principle is enshrined in the Constitution."},

    {type:"teach", trg:"la giurisdizione", src:"the jurisdiction", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le giurisdizioni.\nThe authority of a court over a specific area or type of case.",
     example:"A: La giurisdizione per questo caso spetta al tribunale di Milano.\nB: Il reato e stato commesso in Lombardia.",
     exampleSrc:"A: Jurisdiction for this case belongs to the Milan court.\nB: The crime was committed in Lombardy.",
     funFact:"Italy has 140 tribunali (first instance courts), 26 corti d'appello, and one Corte di Cassazione in Rome. This dense network reflects the principle that justice should be geographically accessible to all citizens."},

    {type:"teach", trg:"il codice penale", src:"the criminal code", pos:"noun", gender:"m",
     note:"Masculine compound noun. The systematic collection of criminal laws.\n'Codice civile' = civil code. 'Codice di procedura' = procedural code.",
     example:"A: Il codice penale italiano risale al 1930.\nB: E stato modificato molte volte, ma la struttura e la stessa.",
     exampleSrc:"A: The Italian criminal code dates from 1930.\nB: It has been modified many times, but the structure is the same.",
     funFact:"Italy's criminal code, called 'Codice Rocco' after its drafter Alfredo Rocco, was written during the Fascist era. Despite numerous amendments, its basic structure survives, making Italy's criminal law a patchwork of old foundations and modern additions."},

    {type:"teach", trg:"la procura", src:"the prosecutor's office", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le procure.\n'Procura della Repubblica' = the public prosecutor's office.\n'Procuratore' = chief prosecutor.",
     example:"A: La procura ha aperto un'indagine per corruzione.\nB: Sono coinvolti diversi politici locali.",
     exampleSrc:"A: The prosecutor's office opened an investigation for corruption.\nB: Several local politicians are involved.",
     funFact:"The 'Procura di Milano' became famous in 1992 with the 'Mani Pulite' (Clean Hands) investigation that uncovered massive political corruption. The team of prosecutors, led by Antonio Di Pietro, brought down an entire political class."},

    {type:"mc",
     q:"Che cos'e l'obbligatorieta dell'azione penale?",
     opts:["L'obbligo per il PM di indagare su tutti i reati denunciati","L'obbligo per il giudice di emettere una condanna","L'obbligo per la vittima di testimoniare","L'obbligo per l'accusato di confessare"],
     ans:"L'obbligo per il PM di indagare su tutti i reati denunciati",
     hint:"A constitutional principle requiring prosecutors to investigate every reported crime. They cannot pick and choose which cases to pursue."},

    {type:"teach", trg:"la corte d'appello", src:"the court of appeal", pos:"noun", gender:"f",
     note:"Feminine compound noun. The second level of the Italian court system.\nPlural: le corti d'appello. Italy has 26 of them.",
     example:"A: La corte d'appello ha ribaltato la sentenza di primo grado.\nB: L'imputato e stato assolto.",
     exampleSrc:"A: The court of appeal overturned the first-instance ruling.\nB: The defendant was acquitted.",
     funFact:"Italian appeal courts can re-examine both facts and law, unlike in many other systems where appeals focus only on legal errors. This means trials are essentially repeated, contributing to the system's notorious slowness."},

    {type:"teach", trg:"la Corte di Cassazione", src:"the Supreme Court", pos:"noun", gender:"f",
     note:"Feminine compound noun. Italy's highest court of appeal.\nSits in Rome at the Palazzo di Giustizia ('il Palazzaccio').",
     example:"A: La Corte di Cassazione ha confermato la condanna.\nB: Non ci sono piu possibilita di appello.",
     exampleSrc:"A: The Supreme Court confirmed the conviction.\nB: There are no more possibilities for appeal.",
     funFact:"Rome's Palazzo di Giustizia, home of the Cassazione, is nicknamed 'il Palazzaccio' (the ugly big building). Built in 1911, its massive travertine facade on the Tiber riverbank is an iconic symbol of Italian justice."},

    {type:"fb",
     s:"La {1} ha aperto un'indagine per frode fiscale.",
     a:["procura"],
     opts:["procura","magistratura","giurisdizione","corte"],
     hint:"The office where public prosecutors work and from which criminal investigations are directed. Each major city has one.",
     sSrc:"The prosecutor's {1} opened an investigation for tax fraud."},

    {type:"teach", trg:"l'udienza", src:"the hearing / court session", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le udienze.\n'Fissare un'udienza' = to schedule a hearing.\n'Udienza preliminare' = preliminary hearing.",
     example:"A: L'udienza e stata rinviata di due settimane.\nB: Il giudice aveva un impedimento.",
     exampleSrc:"A: The hearing was postponed by two weeks.\nB: The judge had a conflict.",
     funFact:"Italian court hearings are frequently postponed ('rinviate'), sometimes for months. The average Italian criminal case takes 4-5 years from start to final judgment. This systemic slowness is Italy's most criticized judicial problem."},

    {type:"teach", trg:"il decreto", src:"the decree", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i decreti.\n'Decreto legge' = emergency decree (must be converted to law within 60 days).\n'Decreto legislativo' = legislative decree.",
     example:"A: Il governo ha emanato un decreto d'urgenza.\nB: Il Parlamento dovra convertirlo in legge.",
     exampleSrc:"A: The government issued an emergency decree.\nB: Parliament will have to convert it into law.",
     funFact:"Italian governments use 'decreti legge' (emergency decrees) extensively, sometimes controversially. They take effect immediately but expire after 60 days if Parliament does not ratify them. Critics call this practice 'decretite' (decree-itis)."},

    {type:"mc",
     q:"Come si chiama la corte suprema italiana?",
     opts:["La Corte d'Appello","La Corte di Cassazione","Il Tribunale Supremo","La Corte Costituzionale"],
     ans:"La Corte di Cassazione",
     hint:"The highest court in the ordinary judicial system. It sits in Rome and can only review legal questions, not re-examine facts."},

    {type:"teach", trg:"la prescrizione", src:"the statute of limitations", pos:"noun", gender:"f",
     note:"Feminine noun. The time limit after which a crime can no longer be prosecuted.\n'Cadere in prescrizione' = to become time-barred.",
     example:"A: Il reato e caduto in prescrizione dopo dieci anni.\nB: L'imputato non sara piu processato.",
     exampleSrc:"A: The crime fell under the statute of limitations after ten years.\nB: The defendant will no longer be tried.",
     funFact:"Italy's statute of limitations runs during the trial, not just before charges are filed. Combined with extremely long proceedings, many cases are extinguished by 'prescrizione' before a final verdict. Reform attempts have been politically explosive."},

    {type:"match", pairs:[
      {trg:"magistratura", src:"judiciary"},
      {trg:"pubblico ministero", src:"public prosecutor"},
      {trg:"giurisdizione", src:"jurisdiction"},
      {trg:"udienza", src:"hearing"},
      {trg:"prescrizione", src:"statute of limitations"}
    ]},

    {type:"fb",
     s:"L'{1} e stata rinviata per la terza volta questo mese.",
     a:["udienza"],
     opts:["udienza","indagine","prescrizione","procura"],
     hint:"A scheduled court session where the judge, lawyers, and parties meet. Often postponed in the Italian system.",
     sSrc:"The {1} was postponed for the third time this month."},

    {type:"mc",
     q:"Perche il sistema giudiziario italiano e considerato lento?",
     opts:["Perche le leggi sono troppo semplici","Perche ci sono pochi giudici","Perche le udienze vengono spesso rinviate e i processi ripetuti in appello","Perche non esiste una corte suprema"],
     ans:"Perche le udienze vengono spesso rinviate e i processi ripetuti in appello",
     hint:"Frequent postponements and the fact that appeal courts re-examine everything from scratch, not just legal errors, create very long proceedings."}
  ]
};
export default LESSON_4;
