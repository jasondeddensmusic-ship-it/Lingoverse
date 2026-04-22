// Batch 6. Unit 26 extra lesson. Il diritto: Civil Rights & Constitution
const BATCH6_L1 = {id:"itv2_u26l_b6_1", title:"I diritti civili", icon:"\u{1F4DC}", xp:15, board:true, steps:[
{type:"intro", title:"I diritti civili",
 desc:"Learn advanced legal vocabulary relating to civil rights, constitutional principles, and civic participation.",
 goals:["Discuss constitutional rights and principles","Understand civic vocabulary","Debate social justice topics"]},

{type:"teach", trg:"la Costituzione", src:"the Constitution", pos:"noun", gender:"f",
 note:"Feminine noun. Capitalized when referring to the Italian Constitution.\nThe supreme law of Italy since 1948.",
 example:"A: La Costituzione italiana ha 139 articoli.\nB: E stata scritta dopo la guerra.",
 exampleSrc:"A: The Italian Constitution has 139 articles.\nB: It was written after the war.",
 funFact:"The Italian Constitution was drafted by the Constituent Assembly in 1946-47 and took effect on January 1, 1948. It is considered one of the most progressive constitutions in the world."},

{type:"teach", trg:"il cittadino", src:"the citizen", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la cittadina. Plural: i cittadini.\nFrom 'città' (city). A member of a state.",
 example:"A: Ogni cittadino ha diritto al voto.\nB: E un diritto fondamentale.",
 exampleSrc:"A: Every citizen has the right to vote.\nB: It is a fundamental right.",
 funFact:"'Cittadinanza' (citizenship) comes from the same root. 'Cittadinanza italiana' can be acquired by descent ('ius sanguinis'), which is why many Americans and Argentines have Italian passports."},

{type:"teach", trg:"la sovranita", src:"the sovereignty", pos:"noun", gender:"f",
 note:"Feminine noun. From 'sovrano' (sovereign/ruler).\nThe supreme authority of a state or people.",
 example:"A: La sovranita appartiene al popolo.\nB: E il primo articolo della Costituzione.",
 exampleSrc:"A: Sovereignty belongs to the people.\nB: It is the first article of the Constitution.",
 funFact:"Article 1 of the Italian Constitution: 'L'Italia e una Repubblica democratica, fondata sul lavoro. La sovranita appartiene al popolo.' A powerful opening statement."},

{type:"teach", trg:"il suffragio universale", src:"the universal suffrage", pos:"noun", gender:"m",
 note:"Masculine noun. 'Suffragio' (vote) + 'universale' (universal).\nThe right of all adults to vote.",
 example:"A: Il suffragio universale in Italia risale al 1946.\nB: Fu anche il referendum tra monarchia e repubblica.",
 exampleSrc:"A: Universal suffrage in Italy dates from 1946.\nB: It was also the monarchy vs. republic referendum.",
 funFact:"Italian women voted for the first time on June 2, 1946, in the referendum that abolished the monarchy and established the Republic. This date is now a national holiday: 'Festa della Repubblica.'"},

{type:"teach", trg:"l'emendamento", src:"the amendment", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli emendamenti.\nA proposed change to a law or constitution.",
 example:"A: L'emendamento alla legge e stato approvato.\nB: Con quanti voti favorevoli?",
 exampleSrc:"A: The amendment to the law was approved.\nB: With how many votes in favor?",
 funFact:"Amending the Italian Constitution requires a complex 'doppia lettura' (double reading) process by both chambers. This makes it intentionally difficult to change fundamental principles."},

{type:"teach", trg:"la giurisprudenza", src:"the jurisprudence / case law", pos:"noun", gender:"f",
 note:"Feminine noun. From Latin 'iuris prudentia' (knowledge of law).\nAlso the university degree in law.",
 example:"A: Ha studiato giurisprudenza a Bologna.\nB: La facoltà di legge più antica del mondo.",
 exampleSrc:"A: He studied law at Bologna.\nB: The oldest law school in the world.",
 funFact:"The University of Bologna, founded in 1088, is the world's oldest continuously operating university. Its law faculty shaped European legal tradition."},

{type:"teach", trg:"promulgare", src:"to promulgate / to enact", pos:"verb", gender:null,
 note:"Regular -are verb. promulgo, promulghi, promulga.\nTo officially enact a new law.",
 example:"A: Il Presidente ha promulgato la nuova legge.\nB: Entra in vigore il primo del mese.",
 exampleSrc:"A: The President promulgated the new law.\nB: It takes effect on the first of the month.",
 funFact:"In Italy, the President of the Republic 'promulga' (signs into law) legislation passed by Parliament. The President can also refuse and send it back for revision."},

{type:"teach", trg:"abrogare", src:"to repeal / to abolish", pos:"verb", gender:null,
 note:"Regular -are verb. abrogo, abroghi, abroga.\nTo officially cancel an existing law.",
 example:"A: Il referendum ha abrogato la vecchia legge.\nB: Era una legge molto contestata.",
 exampleSrc:"A: The referendum repealed the old law.\nB: It was a very controversial law.",
 funFact:"Italy uses 'referendum abrogativi' (abrogative referendums) to repeal laws by popular vote. Citizens need 500,000 signatures to trigger one, a uniquely Italian democratic tool."},

{type:"teach", trg:"il ricorso", src:"the appeal / legal recourse", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i ricorsi.\n'Fare ricorso' = to file an appeal. A legal challenge.",
 example:"A: Hanno fatto ricorso contro la sentenza.\nB: Il caso andra in appello.",
 exampleSrc:"A: They filed an appeal against the verdict.\nB: The case will go to appeal.",
 funFact:"'Ricorso' is also used in everyday speech for filing a complaint against a fine: 'fare ricorso per la multa' (to contest the fine). Italians frequently contest parking tickets."},

{type:"teach", trg:"la tutela", src:"the protection / safeguarding", pos:"noun", gender:"f",
 note:"Feminine noun. From 'tutelare' (to protect).\nLegal protection of rights, heritage, or vulnerable persons.",
 example:"A: La tutela dell'ambiente e un dovere di tutti.\nB: Serve una legge più severa.",
 exampleSrc:"A: Environmental protection is everyone's duty.\nB: A stricter law is needed.",
 funFact:"'Tutela' is a key concept in Italian law: 'tutela dei minori' (child protection), 'tutela dei consumatori' (consumer protection), 'tutela del paesaggio' (landscape protection)."},

{type:"teach", trg:"il decreto", src:"the decree", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i decreti.\n'Decreto legge' = emergency decree with force of law.",
 example:"A: Il governo ha emanato un decreto d'urgenza.\nB: Deve essere convertito in legge entro 60 giorni.",
 exampleSrc:"A: The government issued an emergency decree.\nB: It must be converted into law within 60 days.",
 funFact:"Italy's government frequently uses 'decreti legge' (decree-laws) for urgent matters. They have immediate effect but expire if Parliament does not ratify them within 60 days."},

{type:"teach", trg:"la normativa", src:"the regulation / set of rules", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le normative.\nA body of rules governing a specific area.",
 example:"A: La normativa europea sulla privacy e molto severa.\nB: Il GDPR ha cambiato tutto.",
 exampleSrc:"A: European privacy regulation is very strict.\nB: The GDPR changed everything.",
 funFact:"Italian businesses often struggle with 'normativa' overload. Between Italian, EU, regional, and local regulations, compliance is a full-time job for many companies."},

{type:"teach", trg:"l'immunita", src:"the immunity", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le immunita.\nLegal protection from prosecution. Also medical immunity.",
 example:"A: I parlamentari godono di immunita.\nB: E un tema molto dibattuto.",
 exampleSrc:"A: Members of Parliament enjoy immunity.\nB: It is a very debated topic.",
 funFact:"Parliamentary immunity in Italy has been controversial. The 'autorizzazione a procedere' (authorization to prosecute) was reformed in 1993 to reduce abuse of this privilege."},

{type:"teach", trg:"ratificare", src:"to ratify", pos:"verb", gender:null,
 note:"Regular -are verb. ratifico, ratifichi, ratifica.\nTo formally approve a treaty or agreement.",
 example:"A: Il Parlamento deve ratificare il trattato.\nB: La votazione e prevista per giovedì.",
 exampleSrc:"A: Parliament must ratify the treaty.\nB: The vote is scheduled for Thursday.",
 funFact:"Italy ratifies international treaties through Parliamentary vote. The EU treaties required ratification by all member states, a process Italy has sometimes delayed."},

{type:"mc", q:"Quando hanno votato le donne per la prima volta in Italia?",
 opts:["Nel 1946","Nel 1920","Nel 1960","Nel 1900"],
 ans:"Nel 1946",
 hint:"The same year as the monarchy vs. republic referendum. June 2nd."},

{type:"fb", s:"La {1} italiana ha 139 articoli e risale al 1948.", a:["Costituzione"],
 opts:["Costituzione","normativa","giurisprudenza","immunita"],
 hint:"The supreme law of the Italian Republic, written after World War II.",
 sSrc:"The Italian {1} has 139 articles and dates from 1948."},

{type:"match", pairs:[
 {trg:"promulgare", src:"to enact"},
 {trg:"abrogare", src:"to repeal"},
 {trg:"ratificare", src:"to ratify"},
 {trg:"il decreto", src:"decree"}
]},

{type:"mc", q:"Cos'e un 'referendum abrogativo'?",
 opts:["A constitutional amendment","A popular vote to repeal an existing law","A vote to approve a new law","A local election"],
 ans:"A popular vote to repeal an existing law",
 hint:"A uniquely Italian democratic tool requiring 500,000 signatures to trigger."},

{type:"fb", s:"Hanno fatto {1} contro la sentenza del tribunale.", a:["ricorso"],
 opts:["ricorso","decreto","emendamento","suffragio"],
 hint:"A legal appeal. To challenge a court decision through the appeals process.",
 sSrc:"They filed an {1} against the court verdict."},

{type:"mc", q:"Cosa dice il primo articolo della Costituzione italiana?",
 opts:["L'Italia e uno Stato federale","L'Italia e una democrazia presidenziale","L'Italia e una Repubblica democratica fondata sul lavoro","L'Italia e una monarchia costituzionale"],
 ans:"L'Italia e una Repubblica democratica fondata sul lavoro",
 hint:"It declares Italy a democratic republic founded on work (labor)."},

{type:"fb", s:"La {1} dei diritti fondamentali e garantita dalla Costituzione.", a:["tutela"],
 opts:["tutela","normativa","immunita","sovranita"],
 hint:"The legal protection and safeguarding of rights. A key concept in Italian law.",
 sSrc:"The {1} of fundamental rights is guaranteed by the Constitution."},

{type:"match", pairs:[
 {trg:"il cittadino", src:"citizen"},
 {trg:"la sovranita", src:"sovereignty"},
 {trg:"l'immunita", src:"immunity"},
 {trg:"la normativa", src:"regulation"}
]}
,{type:"match",pairs:[{trg:"la giurisprudenza",src:"the jurisprudence / case law"}]}]};
export default BATCH6_L1;
