// Batch 6 — Unit 20 extra lesson. L'istruzione: School Life & Academic Vocabulary
const BATCH6_L1 = {id:"itv2_u20l_b6_1", title:"La vita scolastica", icon:"\u{1F3EB}", xp:15, board:true, steps:[
{type:"intro", title:"La vita scolastica",
 desc:"Learn vocabulary for the Italian school system, academic life, and student experiences.",
 goals:["Name parts of the Italian school system","Discuss grades and exams","Talk about school life and activities"]},

{type:"teach", trg:"la pagella", src:"the report card", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pagelle.\nThe document with grades given at end of term.",
 example:"A: La pagella e arrivata. Com'e andata?\nB: Bene, tutti voti sopra il sette!",
 exampleSrc:"A: The report card has arrived. How did it go?\nB: Well, all grades above seven!",
 funFact:"Italian grades go from 1 to 10, with 6 as the passing mark. Unlike letter grades, this numeric system means a '7' is good and an '8' is very good."},

{type:"teach", trg:"il voto", src:"the grade / mark", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i voti.\nAlso means 'vote' in elections. Context clarifies.",
 example:"A: Che voto hai preso in matematica?\nB: Un otto. Sono contento!",
 exampleSrc:"A: What grade did you get in math?\nB: An eight. I am happy!",
 funFact:"Italian schools use a 1-10 scale. In university, grades are from 18 (minimum pass) to 30 e lode (30 with honors, the maximum). The systems are completely different."},

{type:"teach", trg:"la materia", src:"the subject (school)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le materie.\nA school subject or academic discipline.",
 example:"A: Qual e la tua materia preferita?\nB: La storia, mi piace molto.",
 exampleSrc:"A: What is your favorite subject?\nB: History, I like it a lot.",
 funFact:"Italian school subjects include some that may surprise: 'religione' (religion) is offered in public schools, though it is optional. 'Educazione civica' (civic education) was recently reintroduced."},

{type:"teach", trg:"bocciare", src:"to fail / to hold back (a student)", pos:"verb", gender:null,
 note:"Regular -are verb. boccio, bocci, boccia.\nTo fail a student, making them repeat the year.",
 example:"A: L'hanno bocciato in terza media.\nB: Deve ripetere l'anno?",
 exampleSrc:"A: He was held back in eighth grade.\nB: Does he have to repeat the year?",
 funFact:"Being 'bocciato' (held back) is a real possibility in Italian schools. Students can repeat an entire year. The opposite is 'promosso' (promoted to the next grade)."},

{type:"teach", trg:"l'interrogazione", src:"the oral exam / questioning", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le interrogazioni.\nA distinctive feature of Italian education: oral exams in class.",
 example:"A: Domani ho l'interrogazione di storia.\nB: Hai studiato abbastanza?",
 exampleSrc:"A: Tomorrow I have the oral exam in history.\nB: Have you studied enough?",
 funFact:"The 'interrogazione' is uniquely Italian: students are called to the front of the class and questioned orally by the teacher. It tests knowledge and speaking skills simultaneously."},

{type:"teach", trg:"la cattedra", src:"the teacher's desk / professorship", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le cattedre.\nThe teacher's desk in a classroom. Also an academic chair.",
 example:"A: Il professore si e seduto alla cattedra.\nB: Inizia la lezione.",
 exampleSrc:"A: The professor sat at the teacher's desk.\nB: The lesson begins.",
 funFact:"'Cattedra' comes from 'cathedra' (chair/throne), the same root as 'cathedral.' Getting a 'cattedra' (permanent teaching position) in Italy is extremely competitive."},

{type:"teach", trg:"la lavagna", src:"the blackboard / whiteboard", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le lavagne.\n'LIM' (Lavagna Interattiva Multimediale) = interactive whiteboard.",
 example:"A: Scrivi la risposta alla lavagna.\nB: Posso usare il gesso rosso?",
 exampleSrc:"A: Write the answer on the blackboard.\nB: Can I use the red chalk?",
 funFact:"Many Italian schools still use traditional blackboards ('lavagne di ardesia') alongside modern 'LIM' (interactive whiteboards). The 'gesso' (chalk) is disappearing slowly."},

{type:"teach", trg:"la maturita", src:"the high school final exam", pos:"noun", gender:"f",
 note:"Feminine noun. Short for 'esame di maturita.'\nThe crucial exam at the end of high school.",
 example:"A: Quest'anno faccio la maturita.\nB: In bocca al lupo! Studia bene.",
 exampleSrc:"A: This year I take the final exam.\nB: Good luck! Study well.",
 funFact:"The 'esame di maturita' is a rite of passage for every Italian 18-year-old. It includes written tests and an oral exam before a commission. Results affect university admission."},

{type:"teach", trg:"il compito", src:"the homework / assignment", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i compiti.\n'Fare i compiti' = to do homework. 'Compito in classe' = class test.",
 example:"A: Hai fatto i compiti per domani?\nB: Non ancora, li faccio dopo cena.",
 exampleSrc:"A: Have you done the homework for tomorrow?\nB: Not yet, I will do it after dinner.",
 funFact:"'Compito in classe' is a written test done during class hours. Italian students often say 'ho un compito' meaning they have a test, not just homework."},

{type:"teach", trg:"la ricreazione", src:"the recess / break time", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ricreazioni.\nThe break between classes for students.",
 example:"A: Durante la ricreazione mangiamo la merenda.\nB: Io ho il panino al prosciutto.",
 exampleSrc:"A: During recess we eat our snack.\nB: I have a ham sandwich.",
 funFact:"Italian 'ricreazione' is usually just 10-15 minutes, much shorter than recesses in other countries. Students eat their 'merenda' (snack) and socialize in the hallways."},

{type:"teach", trg:"la borsa di studio", src:"the scholarship", pos:"noun", gender:"f",
 note:"Feminine noun. 'Borsa' (purse/bag) + 'di studio' (of study).\nFinancial aid for students.",
 example:"A: Ho vinto una borsa di studio per l'università.\nB: Complimenti! Te la meriti.",
 exampleSrc:"A: I won a scholarship for university.\nB: Congratulations! You deserve it.",
 funFact:"Italian public universities are relatively affordable, but 'borse di studio' are still crucial for many families. They are awarded based on income and academic merit."},

{type:"teach", trg:"la tesi", src:"the thesis / dissertation", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le tesi (invariable).\nThe final research project for a university degree.",
 example:"A: Sto scrivendo la tesi di laurea.\nB: Su quale argomento?",
 exampleSrc:"A: I am writing my graduation thesis.\nB: On what topic?",
 funFact:"Every Italian university degree requires a 'tesi di laurea' (graduation thesis), even for bachelor's degrees. The public defense is a celebrated event with family and friends present."},

{type:"teach", trg:"copiare", src:"to copy / to cheat", pos:"verb", gender:null,
 note:"Regular -are verb. copio, copi, copia.\nIn school context: to cheat by copying.",
 example:"A: Non copiare dal compagno!\nB: Scusa, non lo faccio più.",
 exampleSrc:"A: Do not copy from your classmate!\nB: Sorry, I will not do it again.",
 funFact:"Italian students have elaborate systems for cheating: 'bigliettini' (cheat sheets), 'suggerire' (whispering answers), and the 'compagno di banco' (desk neighbor) who shows their work."},

{type:"teach", trg:"il quaderno", src:"the notebook / exercise book", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i quaderni.\nFrom 'quaternio' (set of four sheets). Students' writing book.",
 example:"A: Apri il quaderno a pagina venti.\nB: Quello di italiano o di matematica?",
 exampleSrc:"A: Open your notebook to page twenty.\nB: The Italian one or the math one?",
 funFact:"Italian students use separate 'quaderni' for each subject, color-coded by convention. The traditional lined 'quaderno a righe' and gridded 'quaderno a quadretti' are both used."},

{type:"mc", q:"Qual e il voto minimo per passare nella scuola italiana?",
 opts:["6 su 10","5 su 10","7 su 10","C"],
 ans:"6 su 10",
 hint:"Italian schools use a 1-10 numeric scale. The passing mark is not 5, but one above."},

{type:"fb", s:"Domani ho l'{1} di storia, devo studiare!", a:["interrogazione"],
 opts:["interrogazione","ricreazione","maturita","cattedra"],
 hint:"The distinctive Italian oral exam where the teacher questions you in front of class.",
 sSrc:"Tomorrow I have the oral {1} in history, I need to study!"},

{type:"match", pairs:[
 {trg:"la pagella", src:"report card"},
 {trg:"il voto", src:"grade"},
 {trg:"il compito", src:"homework"},
 {trg:"la tesi", src:"thesis"}
]},

{type:"mc", q:"Cosa succede se uno studente viene 'bocciato'?",
 opts:["Must repeat the entire year","Gets a warning","Takes extra classes","Changes schools"],
 ans:"Must repeat the entire year",
 hint:"The opposite of being promoted. The student stays in the same grade."},

{type:"fb", s:"Ho vinto una {1} per studiare all'università.", a:["borsa di studio"],
 opts:["borsa di studio","pagella","cattedra","materia"],
 hint:"Financial aid for students. Literally a 'study purse.'",
 sSrc:"I won a {1} to study at university."},

{type:"mc", q:"Cos'e la 'maturita' nel sistema scolastico italiano?",
 opts:["The final high school exam at age 18","A university entrance exam","A middle school test","A scholarship competition"],
 ans:"The final high school exam at age 18",
 hint:"The crucial e... that every Italian student must pass to graduate from h... s...."},

{type:"fb", s:"Apri il {1} a pagina venti e scrivi la data.", a:["quaderno"],
 opts:["quaderno","compito","voto","tesi"],
 hint:"The exercise book where students write during lessons. One for each subject.",
 sSrc:"Open your {1} to page twenty and write the date."},

{type:"match", pairs:[
 {trg:"la ricreazione", src:"recess"},
 {trg:"la cattedra", src:"teacher's desk"},
 {trg:"la lavagna", src:"blackboard"},
 {trg:"bocciare", src:"to fail/hold back"}
]}
,{type:"match",pairs:[{trg:"la materia",src:"the subject (school)"},{trg:"la maturita",src:"the high school final exam"}]}]};
export default BATCH6_L1;
