// Batch 7 — Unit 20 extra lesson. L'istruzione: University Life & Higher Education
const BATCH7_L1 = {id:"itv2_u20l_b7_1", title:"La vita universitaria", icon:"\u{1F393}", xp:15, board:true, steps:[
{type:"intro", title:"La vita universitaria",
 desc:"Learn vocabulary for university life, academic studies, and the Italian higher education system.",
 goals:["Talk about university courses and exams","Understand the Italian university system","Discuss academic experiences"]},

{type:"teach", trg:"la laurea", src:"the degree (university)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le lauree.\n'Laurea triennale' = bachelor's (3 years). 'Laurea magistrale' = master's (2 years).",
 example:"A: Hai la laurea in economia?\nB: Si, mi sono laureato a Bologna.",
 exampleSrc:"A: Do you have a degree in economics?\nB: Yes, I graduated from Bologna.",
 funFact:"In Italy, anyone with a 'laurea' can be addressed as 'dottore/dottoressa.' This is much broader than in English, where 'doctor' usually means a physician or PhD."},

{type:"teach", trg:"la facoltà", src:"the faculty / department", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural.\n'Facolta di Lettere' = Faculty of Arts. 'Facolta di Medicina' = Medical School.",
 example:"A: A quale facoltà sei iscritto?\nB: Facolta di Giurisprudenza.",
 exampleSrc:"A: Which faculty are you enrolled in?\nB: Faculty of Law.",
 funFact:"Italian universities are divided into 'facoltà,' each with its own building, culture, and student community. Medicine, Law, and Engineering are traditionally the most prestigious."},

{type:"teach", trg:"la tesi", src:"the thesis", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural.\n'Scrivere la tesi' = to write the thesis. 'Discutere la tesi' = to defend the thesis.",
 example:"A: Stai scrivendo la tesi?\nB: Si, sulla letteratura del Novecento.",
 exampleSrc:"A: Are you writing your thesis?\nB: Yes, on 20th century literature.",
 funFact:"The Italian thesis defense (discussione della tesi) is a public event. Family and friends attend, and afterward the graduate is celebrated with champagne, a laurel wreath, and often pranks."},

{type:"teach", trg:"il voto", src:"the grade / mark", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i voti.\nItalian university grades: 18 (minimum pass) to 30 (maximum). '30 e lode' = 30 with honors.",
 example:"A: Che voto hai preso all'esame?\nB: Ventotto. Sono soddisfatto!",
 exampleSrc:"A: What grade did you get on the exam?\nB: Twenty-eight. I am satisfied!",
 funFact:"The Italian grading system uses 18-30, not letters or percentages. A '30 e lode' is a perfect score with special honors. Graduating with '110 e lode' (110 out of 110 with honors) is the ultimate achievement."},

{type:"teach", trg:"la borsa di studio", src:"the scholarship", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le borse di studio.\nLiterally: 'study purse.' Financial aid for students.",
 example:"A: Ho vinto una borsa di studio!\nB: Complimenti! Per quale università?",
 exampleSrc:"A: I won a scholarship!\nB: Congratulations! For which university?",
 funFact:"Italian universities charge relatively low tuition compared to the US or UK. 'Borse di studio' are available based on merit and family income. The ISEE (income indicator) determines eligibility."},

{type:"teach", trg:"il docente", src:"the lecturer / professor", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Plural: i docenti.\n'Il professore ordinario' = full professor.",
 example:"A: Il docente e molto preparato.\nB: Si, le sue lezioni sono interessanti.",
 exampleSrc:"A: The professor is very knowledgeable.\nB: Yes, his lectures are interesting.",
 funFact:"Italian 'docenti' hold enormous power. The 'cattedra' (professorial chair) carries prestige and authority. Students address professors as 'Professore/Professoressa' or even 'Professore Dottore.'"},

{type:"teach", trg:"la sessione d'esami", src:"the exam period", pos:"noun", gender:"f",
 note:"Feminine noun. Three sessions per year: winter, summer, autumn.\n'Essere in sessione' = to be in exam period.",
 example:"A: Quando inizia la sessione d'esami?\nB: A gennaio, tre esami in due settimane.",
 exampleSrc:"A: When does the exam period start?\nB: In January, three exams in two weeks.",
 funFact:"Italian university exams are often oral (esami orali), not written. Students face the professor and answer questions publicly. It is terrifying but develops strong communication skills."},

{type:"teach", trg:"l'appello", src:"the exam sitting / roll call", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli appelli.\nEach exam has multiple 'appelli' (sittings) per session.",
 example:"A: Quando e il prossimo appello?\nB: Il 15 febbraio.",
 exampleSrc:"A: When is the next exam sitting?\nB: February 15.",
 funFact:"Unlike many countries, Italian students can choose which 'appello' to take their exam at. If they feel unprepared, they can skip one and try the next. This flexibility is uniquely Italian."},

{type:"teach", trg:"bocciare", src:"to fail (someone) / to reject", pos:"verb", gender:null,
 note:"Regular -are verb. boccio, bocci, boccia.\nPassive: 'essere bocciato' = to fail/be failed.",
 example:"A: Mi hanno bocciato all'esame di diritto.\nB: Ritenta al prossimo appello!",
 exampleSrc:"A: I failed the law exam.\nB: Try again at the next sitting!",
 funFact:"Being 'bocciato' is not shameful in Italian university culture. Students commonly retake exams multiple times. 'Fuori corso' (off-track) students who take extra years are very common."},

{type:"teach", trg:"il fuori corso", src:"off-track student", pos:"noun", gender:"m",
 note:"Masculine noun. A student who has not graduated within the normal time frame.\nVery common in Italy.",
 example:"A: Sei in corso o fuori corso?\nB: Fuori corso di un anno, ma finisco presto.",
 exampleSrc:"A: Are you on track or off track?\nB: One year behind, but I will finish soon.",
 funFact:"About 40% of Italian university students are 'fuori corso.' The average Italian student takes longer than the nominal 3 or 5 years. This is culturally accepted, though there is pressure to change."},

{type:"teach", trg:"la mensa", src:"the cafeteria (university)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le mense.\nSubsidized university dining hall. Affordable meals for students.",
 example:"A: Mangiamo alla mensa oggi?\nB: Si, e economica e il cibo e buono.",
 exampleSrc:"A: Shall we eat at the cafeteria today?\nB: Yes, it is cheap and the food is good.",
 funFact:"Italian university 'mense' serve surprisingly good food: pasta, meat, vegetables, and fruit. Prices are based on income, with some students paying as little as 2-3 euros per meal."},

{type:"teach", trg:"la dispensa", src:"course notes / handout", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le dispense.\nPhotocopied lecture notes sold at university copy shops.",
 example:"A: Hai comprato le dispense del professore?\nB: Si, duecento pagine!",
 exampleSrc:"A: Did you buy the professor's course notes?\nB: Yes, two hundred pages!",
 funFact:"Italian universities have a unique 'dispensa' culture: professors' lecture notes are compiled and sold at 'copisterie' (copy shops) near campus. Students study from these instead of (or alongside) textbooks."},

{type:"teach", trg:"iscriversi", src:"to enroll / to register", pos:"verb", gender:null,
 note:"Reflexive -ere verb. mi iscrivo, ti iscrivi, si iscrive.\n'L'iscrizione' = enrollment.",
 example:"A: Ti sei iscritto all'università?\nB: Si, alla facoltà di Architettura.",
 exampleSrc:"A: Did you enroll at university?\nB: Yes, in the Architecture department.",
 funFact:"Italian universities do not have an 'acceptance' process for most faculties. If you have the right diploma, you can 'iscriversi.' Only Medicine, Architecture, and a few others have 'numero chiuso' (limited enrollment)."},

{type:"mc", q:"In Italia, chi può essere chiamato 'dottore'?",
 opts:["Chiunque abbia una laurea","Solo i medici","Solo i professori","Solo chi ha un dottorato"],
 ans:"Chiunque abbia una laurea",
 hint:"In Italy, the title is broader than in English. Anyone with a university degree qualifies."},

{type:"fb", s:"Che {1} hai preso all'esame?", a:["voto"],
 opts:["voto","tesi","laurea","appello"],
 hint:"The number between 18 and 30 that grades your exam performance.",
 sSrc:"What {1} did you get on the exam?"},

{type:"match", pairs:[
 {trg:"la laurea", src:"university degree"},
 {trg:"la tesi", src:"thesis"},
 {trg:"la borsa di studio", src:"scholarship"},
 {trg:"bocciare", src:"to fail"}
]},

{type:"mc", q:"Quanti punti servono come minimo per passare un esame universitario?",
 opts:["18","10","25","15"],
 ans:"18",
 hint:"The minimum passing grade in the Italian university system, on a scale up to 30."},

{type:"fb", s:"Mi sono {1} alla facoltà di Economia.", a:["iscritto"],
 opts:["iscritto","laureato","bocciato","preparato"],
 hint:"The past participle of enrolling or registering at a university.",
 sSrc:"I {1} in the Economics department."},

{type:"mc", q:"Che cos'e un 'fuori corso'?",
 opts:["A student behind the normal graduation schedule","A course that was cancelled","A failed exam","A scholarship recipient"],
 ans:"A student behind the normal graduation schedule",
 hint:"Very common in Italy. About 40% of students are in this situation."},

{type:"fb", s:"Mangiamo alla {1} dell'università?", a:["mensa"],
 opts:["mensa","dispensa","facoltà","sessione"],
 hint:"The subsidized dining hall where students eat affordable meals.",
 sSrc:"Shall we eat at the university {1}?"},

{type:"match", pairs:[
 {trg:"il docente", src:"professor"},
 {trg:"l'appello", src:"exam sitting"},
 {trg:"la dispensa", src:"course notes"},
 {trg:"la mensa", src:"cafeteria"}
]}
,{type:"match",pairs:[{trg:"iscriversi",src:"to enroll / to register"}]},{type:"mc",q:"How do you say \"exam period\" in Italian?",opts:["la sessione d'esami","la finestra","il tavolo","la bicicletta"],ans:"la sessione d'esami",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
