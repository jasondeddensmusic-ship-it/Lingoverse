// Batch 7 — Unit 14 extra lesson. Il mondo del lavoro: Job Interviews & Applications
const BATCH7_L1 = {id:"itv2_u14l_b7_1", title:"Il colloquio di lavoro", icon:"\u{1F4BC}", xp:15, board:true, steps:[
{type:"intro", title:"Il colloquio di lavoro",
 desc:"Learn essential vocabulary for job interviews, applications, and the hiring process in Italy.",
 goals:["Prepare for a job interview in Italian","Understand job postings","Talk about qualifications and experience"]},

{type:"teach", trg:"il colloquio", src:"the interview", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i colloqui.\n'Colloquio di lavoro' = job interview.",
 example:"A: Ho un colloquio domani mattina.\nB: In bocca al lupo!",
 exampleSrc:"A: I have an interview tomorrow morning.\nB: Good luck!",
 funFact:"'Colloquio' literally means 'speaking together' (from Latin 'colloquium'). Italian job interviews tend to be more conversational and personal than in many other countries."},

{type:"teach", trg:"il candidato", src:"the candidate / applicant", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la candidata. Plural: i candidati.\n'Candidarsi' = to apply.",
 example:"A: Quanti candidati ci sono?\nB: Circa venti per tre posizioni.",
 exampleSrc:"A: How many candidates are there?\nB: About twenty for three positions.",
 funFact:"'Candidato' comes from Latin 'candidatus' (clothed in white). Roman office-seekers wore white togas to symbolize their purity and good intentions."},

{type:"teach", trg:"il requisito", src:"the requirement", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i requisiti.\n'Requisiti minimi' = minimum requirements.",
 example:"A: Quali sono i requisiti per questo lavoro?\nB: Laurea e tre anni di esperienza.",
 exampleSrc:"A: What are the requirements for this job?\nB: A degree and three years of experience.",
 funFact:"Italian job postings are very specific about 'requisiti.' A 'laurea' (university degree) is often required even for jobs that do not strictly need one."},

{type:"teach", trg:"la competenza", src:"the skill / competence", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le competenze.\n'Competenze trasversali' = soft skills.",
 example:"A: Quali sono le tue competenze principali?\nB: Comunicazione e problem solving.",
 exampleSrc:"A: What are your main skills?\nB: Communication and problem solving.",
 funFact:"Italian CVs list 'competenze linguistiche' (language skills) prominently. In a multilingual job market, speaking multiple languages is a major advantage."},

{type:"teach", trg:"il punto di forza", src:"the strength / strong point", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i punti di forza.\n'Punto debole' = weak point.",
 example:"A: Qual e il tuo punto di forza?\nB: Sono molto organizzato e puntuale.",
 exampleSrc:"A: What is your strong point?\nB: I am very organized and punctual.",
 funFact:"The classic interview question 'quali sono i tuoi punti di forza e di debolezza?' is just as dreaded in Italian as in any language."},

{type:"teach", trg:"la formazione", src:"education / training", pos:"noun", gender:"f",
 note:"Feminine noun. 'Formazione professionale' = vocational training.\n'Formare' = to train/educate.",
 example:"A: Dove hai fatto la tua formazione?\nB: Ho studiato economia a Bologna.",
 exampleSrc:"A: Where did you receive your education?\nB: I studied economics in Bologna.",
 funFact:"Italian CVs list 'formazione' (education) before work experience. Academic titles matter greatly: Italians use 'dottore/dottoressa' for anyone with a university degree."},

{type:"teach", trg:"il tirocinio", src:"the internship", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i tirocini.\nAlso called 'lo stage' (from French, pronounced 'stazh').",
 example:"A: Ho fatto un tirocinio di sei mesi.\nB: Pagato o non pagato?",
 exampleSrc:"A: I did a six-month internship.\nB: Paid or unpaid?",
 funFact:"Unpaid internships are a hot topic in Italy. Many young Italians do multiple 'tirocini' before finding permanent work, fueling the debate on youth employment."},

{type:"teach", trg:"assumere", src:"to hire", pos:"verb", gender:null,
 note:"Irregular verb. assumo, assumi, assume. Past: assunto.\n'L'assunzione' = the hiring.",
 example:"A: L'azienda ha assunto dieci persone.\nB: Finalmente buone notizie!",
 exampleSrc:"A: The company hired ten people.\nB: Finally good news!",
 funFact:"Italian labor law makes it relatively difficult to fire employees (strong worker protections). This means 'assumere' is a bigger commitment for companies than in many other countries."},

{type:"teach", trg:"licenziare", src:"to fire / to dismiss", pos:"verb", gender:null,
 note:"Regular -are verb. licenzio, licenzi, licenzia.\n'Il licenziamento' = the dismissal.",
 example:"A: L'hanno licenziato senza preavviso.\nB: Puo fare ricorso.",
 exampleSrc:"A: They fired him without notice.\nB: He can appeal.",
 funFact:"Italian workers have strong protections against 'licenziamento.' The 'Statuto dei Lavoratori' (Workers' Statute) of 1970 is one of the strongest labor protection laws in Europe."},

{type:"teach", trg:"il contratto", src:"the contract", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i contratti.\n'Contratto a tempo indeterminato' = permanent contract.",
 example:"A: Hai firmato il contratto?\nB: Si, a tempo indeterminato!",
 exampleSrc:"A: Did you sign the contract?\nB: Yes, a permanent one!",
 funFact:"The 'contratto a tempo indeterminato' (permanent contract) is the holy grail for Italian workers. It provides maximum job security, mortgage eligibility, and social benefits."},

{type:"teach", trg:"la referenza", src:"the reference", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le referenze.\n'Lettera di referenze' = reference letter.",
 example:"A: Hai delle referenze?\nB: Si, dal mio precedente datore di lavoro.",
 exampleSrc:"A: Do you have references?\nB: Yes, from my previous employer.",
 funFact:"Italian job culture relies more on personal connections ('raccomandazioni') than formal references. 'Avere una raccomandazione' means having someone vouch for you. This is controversial but widespread."},

{type:"teach", trg:"la candidatura", src:"the application / candidacy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le candidature.\n'Inviare la candidatura' = to submit an application.",
 example:"A: Ho inviato la mia candidatura ieri.\nB: Speriamo che ti chiamino presto.",
 exampleSrc:"A: I submitted my application yesterday.\nB: Let us hope they call you soon.",
 funFact:"Online job applications in Italy often go through 'LinkedIn' or specialized sites like 'InfoJobs' and 'Indeed Italia.' Sending a 'candidatura spontanea' (unsolicited application) is also common."},

{type:"teach", trg:"il preavviso", src:"the notice (period)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Dare il preavviso' = to give notice.\nTime before leaving a job.",
 example:"A: Quanto preavviso devi dare?\nB: Un mese, come da contratto.",
 exampleSrc:"A: How much notice do you have to give?\nB: One month, as per the contract.",
 funFact:"Italian notice periods vary by contract type and seniority, typically from 15 days to 3 months. Leaving without 'preavviso' can result in financial penalties."},

{type:"mc", q:"Che cosa significa 'contratto a tempo indeterminato'?",
 opts:["A permanent contract","A temporary contract","A freelance contract","A part-time contract"],
 ans:"A permanent contract",
 hint:"The most secure type of employment c.... 'Indeterminato' = without a fixed end date."},

{type:"fb", s:"Ho un {1} di lavoro domani mattina.", a:["colloquio"],
 opts:["colloquio","contratto","tirocinio","preavviso"],
 hint:"A meeting where you answer questions about your qualifications for a job.",
 sSrc:"I have a job {1} tomorrow morning."},

{type:"match", pairs:[
 {trg:"assumere", src:"to hire"},
 {trg:"licenziare", src:"to fire"},
 {trg:"il candidato", src:"candidate"},
 {trg:"il tirocinio", src:"internship"}
]},

{type:"mc", q:"In Italia, che cosa e una 'raccomandazione'?",
 opts:["A personal connection vouching for you","A reference letter","A job application","A training course"],
 ans:"A personal connection vouching for you",
 hint:"Controversial but common. Having someone who knows you speak on your behalf."},

{type:"fb", s:"Quali sono i {1} per questo lavoro?", a:["requisiti"],
 opts:["requisiti","colloqui","contratti","candidati"],
 hint:"The qualifications and conditions needed to apply for a position.",
 sSrc:"What are the {1} for this job?"},

{type:"mc", q:"Quanti mesi di tirocinio ha fatto il candidato?",
 opts:["Sei","Tre","Dodici","Due"],
 ans:"Sei",
 hint:"The example in the teach card mentioned this specific duration for the internship."},

{type:"fb", s:"L'azienda ha {1} dieci persone nuove.", a:["assunto"],
 opts:["assunto","licenziato","formato","candidato"],
 hint:"The past participle of 'assumere.' To bring new employees into the company.",
 sSrc:"The company {1} ten new people."},

{type:"match", pairs:[
 {trg:"la competenza", src:"skill"},
 {trg:"la formazione", src:"education"},
 {trg:"la candidatura", src:"application"},
 {trg:"il preavviso", src:"notice period"}
]}
,{type:"match",pairs:[{trg:"il requisito",src:"the requirement"},{trg:"il punto di forza",src:"the strength / strong point"},{trg:"il contratto",src:"the contract"},{trg:"la referenza",src:"the reference"}]}]};
export default BATCH7_L1;
