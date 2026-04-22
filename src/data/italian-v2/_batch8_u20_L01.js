// Batch 8. Unit 20 extra lesson. Education: Academic Writing & Research
const BATCH8_L1 = {id:"itv2_u20l_b8_1", title:"Scrivere all'università", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Scrivere all'università",
 desc:"Learn vocabulary for academic writing, research papers, and the Italian university system.",
 goals:["Discuss academic writing concepts","Use research terminology","Navigate university vocabulary"]},

{type:"teach", trg:"la tesi", src:"the thesis / dissertation", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural: le tesi.\n'Tesi di laurea' = graduation thesis.",
 example:"A: Quando consegni la tesi?\nB: La prossima settimana, finalmente!",
 exampleSrc:"A: When do you submit the thesis?\nB: Next week, finally!",
 funFact:"In Italy, every undergraduate degree requires a 'tesi di laurea.' The thesis defense ('discussione della tesi') is a public event where family and friends attend and celebrate."},

{type:"teach", trg:"la bibliografia", src:"the bibliography", pos:"noun", gender:"f",
 note:"Feminine noun. 'Compilare la bibliografia' = to compile the bibliography.\nFrom Greek: biblio (book) + grafia (writing).",
 example:"A: La bibliografia deve avere almeno trenta fonti.\nB: Ho già trovato venti articoli.",
 exampleSrc:"A: The bibliography must have at least thirty sources.\nB: I have already found twenty articles.",
 funFact:"Italian universities are very strict about bibliographies. Forgetting to cite a source can be considered plagiarism ('plagio'), which can void your entire thesis."},

{type:"teach", trg:"la citazione", src:"the citation / quote", pos:"noun", gender:"f",
 note:"Feminine noun. 'Citare' = to cite/quote.\n'Citazione diretta' = direct quote. 'Citazione indiretta' = paraphrase.",
 example:"A: Questa citazione e perfetta per il capitolo tre.\nB: Ricorda di mettere le virgolette.",
 exampleSrc:"A: This citation is perfect for chapter three.\nB: Remember to use quotation marks.",
 funFact:"'Citazione' also means a famous quote in everyday Italian. 'E una citazione da Dante' (it is a quote from Dante) shows Italy's deep literary culture."},

{type:"teach", trg:"il relatore", src:"the thesis supervisor", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la relatrice.\n'Il correlatore' = co-supervisor.",
 example:"A: Chi e il tuo relatore?\nB: La professoressa Martini, e molto preparata.",
 exampleSrc:"A: Who is your thesis supervisor?\nB: Professor Martini, she is very knowledgeable.",
 funFact:"The student-relatore relationship is crucial in Italian academia. A good relatore can make or break your thesis experience. Students choose them carefully based on reputation."},

{type:"teach", trg:"la ricerca", src:"the research", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fare ricerca' = to do research.\n'Ricercatore' = researcher.",
 example:"A: La mia ricerca riguarda la letteratura medievale.\nB: Che argomento affascinante!",
 exampleSrc:"A: My research is about medieval literature.\nB: What a fascinating topic!",
 funFact:"'Ricerca' also means 'search' in everyday Italian. 'Fare una ricerca su Google' = to do a Google search. The academic and digital meanings coexist perfectly."},

{type:"teach", trg:"l'appunto", src:"the note (class note)", pos:"noun", gender:"m",
 note:"Masculine noun. Usually plural: gli appunti.\n'Prendere appunti' = to take notes.",
 example:"A: Mi presti i tuoi appunti di storia?\nB: Certo, ma la mia scrittura e terribile!",
 exampleSrc:"A: Can you lend me your history notes?\nB: Sure, but my handwriting is terrible!",
 funFact:"Sharing 'appunti' is a sacred tradition among Italian university students. There is an entire economy of photocopied notes and online note-sharing platforms."},

{type:"teach", trg:"il voto", src:"the grade / mark", pos:"noun", gender:"m",
 note:"Masculine noun. Also means 'vote.' Italian university grades go from 18 to 30.\n'30 e lode' = 30 with honors.",
 example:"A: Che voto hai preso all'esame?\nB: Ventotto! Sono soddisfatto.",
 exampleSrc:"A: What grade did you get on the exam?\nB: Twenty-eight! I am satisfied.",
 funFact:"The Italian grading scale goes from 18 (passing) to 30 (perfect). '30 e lode' (30 with distinction) is the maximum. Below 18 means you failed and must retake."},

{type:"teach", trg:"il tirocinio", src:"the internship", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare un tirocinio' = to do an internship.\nAlso: 'lo stage' (from French).",
 example:"A: Dove fai il tirocinio?\nB: In un'azienda farmaceutica a Bologna.",
 exampleSrc:"A: Where are you doing your internship?\nB: At a pharmaceutical company in Bologna.",
 funFact:"Italian uses both 'tirocinio' (Latin origin) and 'stage' (French origin, pronounced 'stazh'). 'Tirocinio' is more formal and appears in university documents."},

{type:"teach", trg:"la borsa di studio", src:"the scholarship", pos:"noun", gender:"f",
 note:"Feminine noun. Literally: 'study purse.'\n'Vincere una borsa di studio' = to win a scholarship.",
 example:"A: Ho vinto una borsa di studio per il master!\nB: Complimenti, te lo meriti!",
 exampleSrc:"A: I won a scholarship for the master's!\nB: Congratulations, you deserve it!",
 funFact:"'Borsa' means purse/bag. A scholarship is literally a 'purse of study,' a bag of money for your education. The image is medieval: a patron filling a student's purse."},

{type:"mc",
 q:"What is special about the Italian thesis defense?",
 opts:["It is a public event where family and friends attend","It is done in writing only","Only professors can attend","It happens online"],
 ans:"It is a public event where family and friends attend",
 hint:"The 'discussione della tesi' is not just an academic e... but a celebration. F... members often bring flowers and champagne."},

{type:"match", pairs:[
  {trg:"la tesi", src:"the thesis"},
  {trg:"la citazione", src:"the citation"},
  {trg:"il relatore", src:"the supervisor"},
  {trg:"il voto", src:"the grade"}
]},

{type:"fb",
 s:"La {1} deve avere almeno trenta fonti accademiche.",
 a:["bibliografia"],
 opts:["bibliografia","tesi","citazione","ricerca"],
 hint:"This is the list of all sources used in a paper. It appears at the end and must be comprehensive.",
 sSrc:"The {1} must have at least thirty academic sources."},

{type:"mc",
 q:"What does '30 e lode' mean in Italian university grading?",
 opts:["A teacher's comment","The maximum grade: 30 with honors","A failing grade","An average grade"],
 ans:"The maximum grade: 30 with honors",
 hint:"Italian grades go from 18 to 30. The very best receive the number plus a special distinction."},

{type:"fb",
 s:"Mi presti i tuoi {1} di filosofia?",
 a:["appunti"],
 opts:["appunti","voti","esami","tesi"],
 hint:"These are the notes you take during lectures. Students share them as a tradition.",
 sSrc:"Can you lend me your philosophy {1}?"},

{type:"mc",
 q:"What does 'borsa di studio' literally mean?",
 opts:["Study book","Study desk","Study purse (a bag of money for education)","Study room"],
 ans:"Study purse (a bag of money for education)",
 hint:"'Borsa' means purse or bag. The image is medieval: a patron providing money in a purse for a student."}
,{type:"match",pairs:[{trg:"la ricerca",src:"the research"},{trg:"il tirocinio",src:"the internship"},{trg:"la borsa di studio",src:"the scholarship"}]},{type:"mc",q:"How do you say \"note\" in Italian?",opts:["la bicicletta","la finestra","il tavolo","l'appunto"],ans:"l'appunto",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
