// Unit 26 Expansion. Lesson 6: Contratti e normativa
const LESSON_6 = {
  id:"itv2_u26l6", title:"Contratti e normativa", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"Contratti e normativa",
     desc:"Learn vocabulary for contracts, regulations, and civil law. These terms are essential for navigating Italian bureaucracy and understanding legal documents.",
     goals:["Describe the elements of a contract","Discuss regulations and compliance","Understand Italian administrative and civil law vocabulary"]},

    {type:"teach", trg:"il contratto", src:"the contract", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i contratti.\n'Contratto di lavoro' = employment contract. 'Firmare un contratto' = to sign a contract.",
     example:"A: Hai letto il contratto prima di firmarlo?\nB: Si, con molta attenzione.",
     exampleSrc:"A: Did you read the contract before signing it?\nB: Yes, very carefully.",
     funFact:"Italian law distinguishes dozens of contract types. The 'Codice Civile' devotes hundreds of articles to contracts. The most common employment contract is the 'contratto a tempo indeterminato' (permanent contract), the holy grail of Italian workers."},

    {type:"teach", trg:"la clausola", src:"the clause", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le clausole.\n'Clausola rescissoria' = termination clause. 'Clausole contrattuali' = contractual clauses.",
     example:"A: Questa clausola mi sembra sfavorevole.\nB: Chiedi al tuo avvocato di rivederla.",
     exampleSrc:"A: This clause seems unfavorable to me.\nB: Ask your lawyer to review it.",
     funFact:"Italian contracts are famously detailed. The phrase 'leggere le clausole in piccolo' (read the fine print) is common advice. Consumer protection law now requires that certain clauses be written in clear, comprehensible language."},

    {type:"teach", trg:"la normativa", src:"the regulations / regulatory framework", pos:"noun", gender:"f",
     note:"Feminine noun. The body of rules governing an area.\n'Normativa europea' = European regulations. 'Normativa vigente' = current regulations.",
     example:"A: La normativa sulla privacy e molto complessa.\nB: Le aziende devono adeguarsi al GDPR.",
     exampleSrc:"A: Privacy regulations are very complex.\nB: Companies must comply with the GDPR.",
     funFact:"Italy has one of the densest regulatory frameworks in Europe. The phrase 'giungla normativa' (regulatory jungle) describes the overwhelming maze of rules, often overlapping and contradictory, that businesses must navigate."},

    {type:"teach", trg:"il ricorso", src:"the appeal / recourse", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i ricorsi.\n'Fare ricorso' = to file an appeal. 'Ricorso al TAR' = appeal to the administrative court.",
     example:"A: L'azienda ha presentato ricorso contro la multa.\nB: Il TAR decidera entro sei mesi.",
     exampleSrc:"A: The company filed an appeal against the fine.\nB: The administrative court will decide within six months.",
     funFact:"The TAR (Tribunale Amministrativo Regionale) handles disputes between citizens and public administration. Italians file thousands of 'ricorsi' yearly against everything from parking tickets to denied building permits."},

    {type:"teach", trg:"la sanzione", src:"the sanction / fine", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le sanzioni.\n'Sanzione amministrativa' = administrative fine.\n'Sanzioni internazionali' = international sanctions.",
     example:"A: L'azienda ha ricevuto una sanzione per inquinamento.\nB: La multa e di due milioni di euro.",
     exampleSrc:"A: The company received a fine for pollution.\nB: The fine is two million euros.",
     funFact:"'Sanzione' covers both penalties (fines, bans) and international sanctions against countries. The word's dual use reflects how Italian legal language moves seamlessly between domestic and international contexts."},

    {type:"mc",
     q:"Che cos'e una clausola contrattuale?",
     opts:["Una singola disposizione o condizione all'interno di un contratto","Una firma digitale","Un certificato legale","Un tipo di contratto speciale"],
     ans:"Una singola disposizione o condizione all'interno di un contratto",
     hint:"An individual provision or condition within a larger agreement. Contracts contain many of these, each governing a specific aspect of the deal."},

    {type:"teach", trg:"il regolamento", src:"the regulation / rules", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i regolamenti.\n'Regolamento condominiale' = building rules.\n'Regolamento europeo' = EU regulation (directly applicable).",
     example:"A: Il regolamento vieta di fare rumore dopo le dieci.\nB: I vicini pero non lo rispettano mai.",
     exampleSrc:"A: The rules forbid making noise after ten.\nB: The neighbors never follow them though.",
     funFact:"EU regulations ('regolamenti') apply directly in Italy without needing national legislation, unlike EU directives ('direttive') which must be transposed. This distinction matters enormously in Italian legal practice."},

    {type:"teach", trg:"la garanzia", src:"the guarantee / warranty", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le garanzie.\n'Garanzia legale' = legal warranty. 'Periodo di garanzia' = warranty period.",
     example:"A: Il prodotto ha una garanzia di due anni.\nB: Se si rompe, lo cambiano gratuitamente.",
     exampleSrc:"A: The product has a two-year warranty.\nB: If it breaks, they replace it for free.",
     funFact:"EU consumer law guarantees a minimum two-year warranty ('garanzia legale') on all products sold in Italy. Many Italians are unaware that this right exists independently of any manufacturer's warranty, which is why consumer associations campaign to spread awareness."},

    {type:"fb",
     s:"La {1} europea sulla privacy obbliga tutte le aziende al rispetto del GDPR.",
     a:["normativa"],
     opts:["normativa","clausola","garanzia","sanzione"],
     hint:"The comprehensive body of rules and regulations governing a specific area. Not a single rule, but the entire framework.",
     sSrc:"European {1} on privacy requires all companies to comply with the GDPR."},

    {type:"teach", trg:"la responsabilita", src:"the liability / responsibility", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Responsabilita civile' = civil liability. 'Responsabilita penale' = criminal liability.",
     example:"A: La responsabilita dell'incidente e del costruttore.\nB: Dovra risarcire tutti i danni.",
     exampleSrc:"A: Liability for the accident lies with the builder.\nB: He will have to compensate all damages.",
     funFact:"Italian law distinguishes 'responsabilita contrattuale' (from breaking a contract) from 'responsabilita extracontrattuale' (from harming someone outside a contract, like a car accident). Both lead to the obligation to pay 'risarcimento' (compensation)."},

    {type:"teach", trg:"il risarcimento", src:"the compensation / damages", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i risarcimenti.\n'Risarcimento danni' = compensation for damages.\n'Risarcire' (verb) = to compensate.",
     example:"A: Ha ottenuto un risarcimento di cinquantamila euro.\nB: Per i danni subiti nell'incidente stradale.",
     exampleSrc:"A: He obtained compensation of fifty thousand euros.\nB: For the damages suffered in the car accident.",
     funFact:"Italian courts can award both 'danno patrimoniale' (material damage, like medical costs) and 'danno non patrimoniale' (non-material damage, like pain and suffering). The latter is calculated through judicial tables that vary by court."},

    {type:"mc",
     q:"Che cos'e il TAR?",
     opts:["Un tipo di contratto lavorativo","Il Tribunale Amministrativo Regionale, che giudica le controversie con la pubblica amministrazione","Un'agenzia di regolamentazione europea","Il Testo Armonizzato dei Regolamenti"],
     ans:"Il Tribunale Amministrativo Regionale, che giudica le controversie con la pubblica amministrazione",
     hint:"A regional court specifically for disputes between citizens and public authorities. Citizens appeal administrative decisions here."},

    {type:"teach", trg:"la procura", src:"the power of attorney", pos:"noun", gender:"f",
     note:"Feminine noun. In civil law: authorization to act on someone's behalf.\n'Procura speciale' = special power of attorney. 'Procura generale' = general power of attorney.",
     example:"A: Ho dato la procura al mio avvocato per firmare.\nB: Cosi puo agire a tuo nome.",
     exampleSrc:"A: I gave power of attorney to my lawyer to sign.\nB: So he can act on your behalf.",
     funFact:"'Procura' has two distinct legal meanings: the prosecutor's office (criminal law) and power of attorney (civil law). Context always clarifies. Giving 'procura' to someone means authorizing them to make legal decisions for you."},

    {type:"match", pairs:[
      {trg:"contratto", src:"contract"},
      {trg:"clausola", src:"clause"},
      {trg:"sanzione", src:"fine/sanction"},
      {trg:"risarcimento", src:"compensation"},
      {trg:"garanzia", src:"warranty"}
    ]},

    {type:"fb",
     s:"La {1} civile dell'incidente ricade sul proprietario del veicolo.",
     a:["responsabilita"],
     opts:["responsabilita","normativa","garanzia","procura"],
     hint:"The legal obligation to answer for damages or harm caused. Who must pay when something goes wrong.",
     sSrc:"Civil {1} for the accident falls on the vehicle owner."},

    {type:"mc",
     q:"Quanto dura la garanzia legale minima su un prodotto acquistato in Italia?",
     opts:["Sei mesi","Un anno","Due anni","Cinque anni"],
     ans:"Due anni",
     hint:"European consumer law sets this minimum period. It applies regardless of any shorter warranty offered by the manufacturer."}
  ]
};
export default LESSON_6;
