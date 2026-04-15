// Unit 31 Expansion. Lesson 4: L'etica del giornalismo
const LESSON_4 = {
  id:"itv2_u31l4", title:"L'etica del giornalismo", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'etica del giornalismo",
     desc:"Learn vocabulary for discussing journalistic ethics, press freedom, and the responsibilities of media professionals. Essential for informed media criticism.",
     goals:["Discuss ethical principles in journalism","Describe press freedom and its limits","Express opinions about media responsibility"]},

    {type:"teach", trg:"la deontologia", src:"the professional ethics / code of conduct", pos:"noun", gender:"f",
     note:"Feminine noun. 'Codice deontologico' = code of ethics.\nThe set of professional duties and standards journalists must follow.",
     example:"A: La deontologia giornalistica impone il rispetto della verita.\nB: E la base della credibilita del giornalismo.",
     exampleSrc:"A: Journalistic ethics require respect for the truth.\nB: It is the foundation of journalism's credibility.",
     funFact:"Italy's 'Ordine dei Giornalisti' (Order of Journalists) is a professional body that regulates the profession. All Italian journalists must be registered, pass an exam, and follow the code of ethics. Violations can lead to suspension or expulsion."},

    {type:"teach", trg:"la diffamazione", src:"the defamation / libel", pos:"noun", gender:"f",
     note:"Feminine noun. 'Diffamazione a mezzo stampa' = defamation through the press.\n'Diffamare' (verb) = to defame. 'Querela per diffamazione' = defamation lawsuit.",
     example:"A: Il politico ha querelato il giornalista per diffamazione.\nB: Sostiene che l'articolo conteneva informazioni false.",
     exampleSrc:"A: The politician sued the journalist for defamation.\nB: He claims the article contained false information.",
     funFact:"Italian defamation law is stricter than in many English-speaking countries. Journalists can face criminal charges for defamation, not just civil lawsuits. This has a chilling effect on investigative reporting, as powerful figures use 'querele' (lawsuits) to intimidate reporters."},

    {type:"teach", trg:"il diritto di cronaca", src:"the right to report", pos:"noun", gender:"m",
     note:"Masculine compound noun. The legal right of journalists to report on matters of public interest.\nBalanced against privacy rights.",
     example:"A: Il diritto di cronaca protegge i giornalisti che raccontano fatti di interesse pubblico.\nB: Ma non giustifica la violazione della privacy.",
     exampleSrc:"A: The right to report protects journalists who cover matters of public interest.\nB: But it does not justify privacy violations.",
     funFact:"Italian law balances 'diritto di cronaca' against 'diritto alla privacy' and 'diritto all'oblio' (right to be forgotten). Courts evaluate three criteria: the news must be true, relevant to the public interest, and presented in a measured way."},

    {type:"teach", trg:"il conflitto di interessi", src:"the conflict of interest", pos:"noun", gender:"m",
     note:"Masculine compound noun. When a journalist's personal interests clash with professional duties.\n'Dichiarare un conflitto di interessi' = to declare a conflict of interest.",
     example:"A: Il conflitto di interessi tra media e politica e un problema serio.\nB: Quando il proprietario del giornale e anche un politico, l'indipendenza e a rischio.",
     exampleSrc:"A: The conflict of interest between media and politics is a serious problem.\nB: When the newspaper's owner is also a politician, independence is at risk.",
     funFact:"Italy's most famous media conflict of interest involved Silvio Berlusconi, who owned three national TV networks while serving as Prime Minister. This unique situation sparked decades of debate about media concentration and political influence."},

    {type:"teach", trg:"la rettifica", src:"the correction / rectification", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le rettifiche.\nA published correction of false or inaccurate information.\n'Diritto di rettifica' = right of reply/correction.",
     example:"A: Il giornale ha pubblicato una rettifica in prima pagina.\nB: L'informazione precedente era sbagliata.",
     exampleSrc:"A: The newspaper published a correction on the front page.\nB: The previous information was wrong.",
     funFact:"Italian press law grants anyone the 'diritto di rettifica': the right to have corrections published with the same prominence as the original article. If a front-page story was wrong, the correction must also appear on the front page."},

    {type:"mc",
     q:"Che cos'e l'Ordine dei Giornalisti in Italia?",
     opts:["Un sindacato dei giornalisti","Un'associazione volontaria di editori","L'organismo professionale che regola l'accesso alla professione e vigila sulla deontologia","Un premio per il miglior giornalista dell'anno"],
     ans:"L'organismo professionale che regola l'accesso alla professione e vigila sulla deontologia",
     hint:"A professional body unique to Italy that controls entry to the profession through exams and enforces ethical standards. All journalists must be registered members."},

    {type:"teach", trg:"la riservatezza", src:"the confidentiality / privacy", pos:"noun", gender:"f",
     note:"Feminine noun. 'Obbligo di riservatezza' = duty of confidentiality.\nSynonym: 'la privacy.' 'Riservato/a' (adj) = confidential.",
     example:"A: La riservatezza delle fonti e sacra nel giornalismo.\nB: Un giornalista non rivela mai le sue fonti.",
     exampleSrc:"A: Source confidentiality is sacred in journalism.\nB: A journalist never reveals his sources.",
     funFact:"Italian law protects 'segreto professionale' (professional secrecy) for journalists. They cannot be forced to reveal their sources in court, except in cases involving national security. This protection is considered essential for investigative reporting."},

    {type:"teach", trg:"la notizia falsa", src:"the false news / fake news", pos:"noun", gender:"f",
     note:"Feminine compound noun. Plural: le notizie false.\nAlso: 'fake news' (borrowed from English).\n'Bufala' (informal) = hoax, false story.",
     example:"A: Le notizie false si diffondono sei volte piu velocemente di quelle vere.\nB: Per questo il fact-checking e cosi importante.",
     exampleSrc:"A: False news spreads six times faster than true news.\nB: That is why fact-checking is so important.",
     funFact:"Italians use both 'notizia falsa' and the English 'fake news,' but the informal 'bufala' (literally 'buffalo,' meaning a hoax) predates both. 'Antibufala' fact-checking sites have become popular in Italy to combat online misinformation."},

    {type:"fb",
     s:"La {1} delle fonti e un principio sacro del giornalismo.",
     a:["riservatezza"],
     opts:["riservatezza","diffamazione","rettifica","deontologia"],
     hint:"Keeping sources anonymous and protected. A journalist's duty to never reveal who provided confidential information.",
     sSrc:"Source {1} is a sacred principle of journalism."},

    {type:"teach", trg:"il sensazionalismo", src:"the sensationalism", pos:"noun", gender:"m",
     note:"Masculine noun. The practice of exaggerating news to attract attention.\n'Titolo sensazionalistico' = sensationalist headline.",
     example:"A: Il sensazionalismo dei media danneggia la credibilita del giornalismo.\nB: I titoli esagerati creano panico inutile.",
     exampleSrc:"A: Media sensationalism damages journalism's credibility.\nB: Exaggerated headlines create unnecessary panic.",
     funFact:"Italian tabloid-style journalism is called 'giornalismo urlato' (screamed journalism), referring to the aggressive, shouting tone of certain newspapers and TV programs. The phrase captures the visual and emotional excess of sensationalist media."},

    {type:"teach", trg:"il fact-checking", src:"the fact-checking", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\nThe process of verifying claims before or after publication.",
     example:"A: Il fact-checking e essenziale nell'era digitale.\nB: Ogni affermazione deve essere verificata con le fonti.",
     exampleSrc:"A: Fact-checking is essential in the digital era.\nB: Every claim must be verified with sources.",
     funFact:"Italian fact-checking organizations like 'Pagella Politica' and 'Facta' verify political claims and debunk viral hoaxes. The RAI public broadcaster has integrated fact-checking into some news programs, though the practice is still less widespread than in Anglo-Saxon journalism."},

    {type:"mc",
     q:"Che cos'e una 'bufala' nel gergo giornalistico italiano?",
     opts:["Un articolo di opinione","Una notizia falsa o inventata","Un tipo di intervista","Un reportage fotografico"],
     ans:"Una notizia falsa o inventata",
     hint:"An informal Italian word for a hoax or fabricated story. Literally means 'buffalo,' used colloquially long before the English 'fake news' became popular."},

    {type:"match", pairs:[
      {trg:"deontologia", src:"professional ethics"},
      {trg:"diffamazione", src:"defamation"},
      {trg:"rettifica", src:"correction"},
      {trg:"riservatezza", src:"confidentiality"},
      {trg:"sensazionalismo", src:"sensationalism"}
    ]},

    {type:"fb",
     s:"Il politico ha querelato il giornalista per {1} a mezzo stampa.",
     a:["diffamazione"],
     opts:["diffamazione","sensazionalismo","deontologia","cronaca"],
     hint:"The legal term for damaging someone's reputation through published false statements. A common legal action against journalists in Italy.",
     sSrc:"The politician sued the journalist for press {1}."},

    {type:"mc",
     q:"Perche le querele per diffamazione sono considerate un problema per la liberta di stampa in Italia?",
     opts:["Perche i giornalisti vincono sempre","Perche le persone potenti le usano per intimidire i giornalisti e scoraggiare le inchieste","Perche i tribunali sono troppo lenti","Perche la diffamazione non esiste in altri paesi"],
     ans:"Perche le persone potenti le usano per intimidire i giornalisti e scoraggiare le inchieste",
     hint:"Powerful individuals can use the threat of expensive lawsuits to silence critical reporting. The Italian term for this chilling effect is 'querele temerarie' (reckless lawsuits)."}
  ]
};
export default LESSON_4;
