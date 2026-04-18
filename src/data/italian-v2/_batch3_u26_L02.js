// Batch 3 — Unit 26 Lesson 2 (Law: Constitutional Rights & Civil Law)
const BATCH3_L_2 = {
  id:"itv2_u26l_b3_2", title:"Diritto civile e garanzie", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Diritto civile e garanzie",
     desc:"Explore civil law, constitutional guarantees, and legal protections that shape Italian society. Essential for understanding citizens' rights and obligations.",
     goals:["Describe civil law procedures and disputes","Discuss constitutional guarantees and protections","Understand legal terminology for everyday situations"]},

    {type:"teach", trg:"il codice civile", src:"the civil code", pos:"noun", gender:"m",
     note:"Masculine compound noun. Italy's main body of private law.\n'Codice penale' = criminal code. Both date from 1942.",
     example:"A: Il codice civile regola i contratti, la proprieta e la famiglia.\nB: Risale al 1942 ma e stato molto modificato.",
     exampleSrc:"A: The civil code regulates contracts, property, and family.\nB: It dates from 1942 but has been heavily modified.",
     funFact:"Italy's civil code was drafted during the fascist era but survived the Republic because its core provisions were technically sound. It draws heavily on the Napoleonic Code and Roman law traditions."},

    {type:"teach", trg:"la proprieta", src:"the property / ownership", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Diritto di proprieta' = property right. 'Proprieta intellettuale' = intellectual property.",
     example:"A: Il diritto di proprieta e garantito dalla Costituzione.\nB: Ma puo essere limitato per motivi di interesse pubblico.",
     exampleSrc:"A: The right to property is guaranteed by the Constitution.\nB: But it can be limited for reasons of public interest.",
     funFact:"Article 42 of the Italian Constitution recognizes private property but states it can be expropriated for public utility with compensation. This balance between individual rights and collective needs reflects the Republic's founding compromise."},

    {type:"teach", trg:"l'eredita", src:"the inheritance", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Diritto di eredita' = inheritance right. 'Tassa di successione' = inheritance tax.",
     example:"A: L'eredita e stata divisa tra i tre figli.\nB: Il testamento era chiaro su tutto.",
     exampleSrc:"A: The inheritance was divided among the three children.\nB: The will was clear about everything.",
     funFact:"Italian inheritance law protects 'legittimari' (forced heirs): children and spouse are entitled to a share regardless of the will. You cannot fully disinherit your children in Italy, unlike in some other legal systems."},

    {type:"teach", trg:"il risarcimento", src:"the compensation / damages", pos:"noun", gender:"m",
     note:"Masculine noun. 'Risarcimento danni' = compensation for damages.\n'Chiedere un risarcimento' = to claim damages.",
     example:"A: La vittima ha chiesto un risarcimento di due milioni di euro.\nB: Il tribunale decidera l'importo.",
     exampleSrc:"A: The victim claimed two million euros in damages.\nB: The court will decide the amount.",
     funFact:"Italian civil law recognizes both 'danno patrimoniale' (material damage) and 'danno morale' (emotional suffering). Since 2003, courts also recognize 'danno esistenziale,' compensation for loss of quality of life."},

    {type:"teach", trg:"la tutela", src:"the protection / guardianship", pos:"noun", gender:"f",
     note:"Feminine noun. 'Tutela dei diritti' = protection of rights.\n'Tutela dei minori' = child protection. 'Tutore' = guardian.",
     example:"A: La tutela dei consumatori e migliorata molto negli ultimi anni.\nB: Le associazioni dei consumatori sono molto attive.",
     exampleSrc:"A: Consumer protection has improved a lot in recent years.\nB: Consumer associations are very active.",
     funFact:"Italian consumer protection is robust, strengthened by EU directives. The 'Codice del consumo' (Consumer Code, 2005) consolidated decades of scattered legislation into a single reference for buyers' rights."},

    {type:"mc",
     q:"Che cosa garantisce la 'legittima' nel diritto italiano delle successioni?",
     opts:["Che il testamento sia scritto da un notaio professionista","Che i figli e il coniuge ricevano una quota minima dell'eredita","Che tutti i beni vadano allo Stato in assenza di eredi","Che le tasse di successione non superino il 10%"],
     ans:"Che i figli e il coniuge ricevano una quota minima dell'eredita",
     hint:"Italian law protects forced heirs. Even if a will says otherwise, certain family members are entitled to a minimum share."},

    {type:"teach", trg:"il notaio", src:"the notary", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la notaia.\nA public officer who authenticates legal documents. 'Atto notarile' = notarial deed.",
     example:"A: L'atto di vendita deve essere firmato davanti al notaio.\nB: Il notaio garantisce la legalita della transazione.",
     exampleSrc:"A: The deed of sale must be signed before the notary.\nB: The notary guarantees the legality of the transaction.",
     funFact:"Italian notaries are extremely powerful. All property transfers, company formations, and many contracts require a notaio. They pass a notoriously difficult exam and earn high fees, making it one of Italy's most exclusive professions."},

    {type:"teach", trg:"la querela", src:"the criminal complaint (by victim)", pos:"noun", gender:"f",
     note:"Feminine noun. 'Sporgere querela' = to file a criminal complaint.\nDifferent from 'denuncia': querela starts prosecution for certain crimes.",
     example:"A: Ha sporto querela per diffamazione.\nB: Senza querela, il PM non puo procedere.",
     exampleSrc:"A: She filed a criminal complaint for defamation.\nB: Without a complaint, the prosecutor cannot proceed.",
     funFact:"Italian law divides crimes into those prosecutable 'a querela di parte' (only if the victim complains) and 'd'ufficio' (automatically). Defamation, minor theft, and some assaults require the victim's querela."},

    {type:"teach", trg:"la presunzione di innocenza", src:"the presumption of innocence", pos:"noun", gender:"f",
     note:"Feminine compound noun. The principle that one is innocent until proven guilty.\n'Fino a prova contraria' = until proven otherwise.",
     example:"A: La presunzione di innocenza e un principio fondamentale.\nB: Nessuno e colpevole fino alla sentenza definitiva.",
     exampleSrc:"A: The presumption of innocence is a fundamental principle.\nB: No one is guilty until the final verdict.",
     funFact:"Article 27 of the Italian Constitution enshrines the presumption of innocence. However, lengthy pre-trial detention and media coverage of ongoing investigations create tension between this principle and reality."},

    {type:"fb",
     s:"L'atto di vendita della casa deve essere firmato davanti al {1}.",
     a:["notaio"],
     opts:["notaio","giudice","avvocato","sindaco"],
     hint:"A public officer who authenticates legal documents. Required for all property transactions in Italy.",
     sSrc:"The deed of sale of the house must be signed before the {1}."},

    {type:"teach", trg:"la diffamazione", src:"the defamation / libel", pos:"noun", gender:"f",
     note:"Feminine noun. Damaging someone's reputation with false statements.\n'Querela per diffamazione' = defamation lawsuit.",
     example:"A: L'articolo conteneva accuse false: e diffamazione.\nB: Il giornalista rischia un processo.",
     exampleSrc:"A: The article contained false accusations: it is defamation.\nB: The journalist risks a trial.",
     funFact:"Italy's defamation laws are among the strictest in Europe. Journalists can face criminal prosecution (not just civil lawsuits) for defamation, leading to concerns about press freedom and self-censorship."},

    {type:"teach", trg:"la causa", src:"the lawsuit / case", pos:"noun", gender:"f",
     note:"Feminine noun. 'Causa civile/penale' = civil/criminal case.\n'Fare causa a qualcuno' = to sue someone.",
     example:"A: Ha fatto causa al vicino per danni alla proprieta.\nB: La causa durera almeno due anni.",
     exampleSrc:"A: He sued the neighbor for property damage.\nB: The lawsuit will last at least two years.",
     funFact:"Italy has one of the highest litigation rates in Europe. There are approximately 3.5 million pending civil cases, and an average civil trial in first instance takes over 500 days. This backlog is a structural problem."},

    {type:"teach", trg:"il testimone", src:"the witness", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. 'Testimone oculare' = eyewitness.\n'Testimoniare' (verb) = to testify.",
     example:"A: Il testimone ha descritto l'accaduto nei minimi dettagli.\nB: La sua testimonianza e stata cruciale.",
     exampleSrc:"A: The witness described the event in minute detail.\nB: His testimony was crucial.",
     funFact:"In Italian courts, witnesses take an oath to tell 'la verita, tutta la verita, nient'altro che la verita.' False testimony (falsa testimonianza) is a criminal offense punishable by up to 6 years in prison."},

    {type:"teach", trg:"il ricorso", src:"the appeal / recourse", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i ricorsi.\n'Presentare ricorso' = to file an appeal. 'Ricorso al TAR' = appeal to administrative court.",
     example:"A: Presenteremo ricorso entro trenta giorni.\nB: L'avvocato e fiducioso di vincere in appello.",
     exampleSrc:"A: We will file an appeal within thirty days.\nB: The lawyer is confident of winning on appeal.",
     funFact:"Italy's administrative courts (TAR and Consiglio di Stato) handle disputes between citizens and public administration. Italians file hundreds of thousands of ricorsi yearly against permits, taxes, and government decisions."},

    {type:"mc",
     q:"Che cos'e la presunzione di innocenza?",
     opts:["Il dovere dell'imputato di dimostrare la propria innocenza","Il principio che nessuno e colpevole fino alla sentenza definitiva","Il diritto del giudice di condannare senza prove","L'obbligo di patteggiare prima del processo"],
     ans:"Il principio che nessuno e colpevole fino alla sentenza definitiva",
     hint:"A fundamental right: you are considered innocent until a final court verdict proves otherwise."},

    {type:"match", pairs:[
      {trg:"risarcimento", src:"compensation"},
      {trg:"tutela", src:"protection"},
      {trg:"notaio", src:"notary"},
      {trg:"causa", src:"lawsuit"},
      {trg:"ricorso", src:"appeal"}
    ]},

    {type:"fb",
     s:"Ha sporto {1} per diffamazione contro il giornale.",
     a:["querela"],
     opts:["querela","denuncia","causa","ricorso"],
     hint:"A specific type of criminal complaint filed by the victim. Required for crimes like defamation, which cannot be prosecuted without the victim's formal request.",
     sSrc:"She filed a criminal {1} for defamation against the newspaper."},

    {type:"mc",
     q:"Perche il sistema giudiziario italiano ha milioni di cause pendenti?",
     opts:["Perche gli italiani litigano piu degli altri europei","Per la combinazione di alta litigiosita, scarsita di giudici e procedure complesse","Perche non esistono metodi alternativi di risoluzione delle dispute","Perche i tribunali italiani sono chiusi durante l'estate"],
     ans:"Per la combinazione di alta litigiosita, scarsita di giudici e procedure complesse",
     hint:"Multiple factors: many lawsuits filed, not enough judges, and complex procedures that slow everything down."}
  ,{type:"match",pairs:[{trg:"il codice civile",src:"the civil code"},{trg:"la proprieta",src:"the property / ownership"},{trg:"la presunzione di innocenza",src:"the presumption of innocence"},{trg:"la diffamazione",src:"the defamation / libel"},{trg:"il testimone",src:"the witness"}]}]
};
export default BATCH3_L_2;
