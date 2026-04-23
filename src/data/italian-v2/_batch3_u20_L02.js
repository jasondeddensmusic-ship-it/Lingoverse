// Batch 3. Unit 20, Lesson 2: La vita studentesca (Student Life)
const BATCH3_U20_L2 = {
  id:"itv2_u20l_b3_2", title:"La vita studentesca", icon:"\uD83C\uDF93", xp:15, board:true,
  steps:[
    {type:"intro", title:"La vita studentesca",
     desc:"Learn about student organizations, study habits, and the social side of Italian education.",
     goals:["Describe student organizations and activities","Talk about study methods","Discuss the social aspects of student life"]},

    {type:"teach", trg:"il rappresentante", src:"the class representative", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la rappresentante. From 'rappresentare' (to represent).\n'Rappresentante di classe' = class rep.",
     example:"A: Chi e il rappresentante di classe?\nB: Quest'anno e stata eletta Maria.",
     exampleSrc:"A: Who is the class representative?\nB: This year Maria was elected.",
     funFact:"Every Italian class elects 'rappresentanti di classe' who attend school council meetings and advocate for students. This is students' first experience with democracy. Parent representatives are also elected. The system teaches civic participation from a young age."},

    {type:"teach", trg:"il tirocinio", src:"the internship / practicum", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'tironicium' (military training).\n'Fare un tirocinio' = to do an internship.",
     example:"A: Dove fai il tirocinio?\nB: In uno studio di architettura.",
     exampleSrc:"A: Where are you doing your internship?\nB: At an architecture firm.",
     funFact:"Italian universities require 'tirocini' (internships) for many degree programs. 'PCTO' (Percorsi per le Competenze Trasversali e l'Orientamento) replaced the old 'alternanza scuola-lavoro' as mandatory work experience for high schoolers. The goal is connecting education with the job market."},

    {type:"teach", trg:"la biblioteca", src:"the library", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'bibliotheke' (book storage).\n'Studiare in biblioteca' = to study in the library.",
     example:"A: Vado a studiare in biblioteca.\nB: Ti accompagno, devo restituire un libro.",
     exampleSrc:"A: I am going to study in the library.\nB: I will come with you, I need to return a book.",
     funFact:"Italian university libraries are often housed in historic palaces. The Biblioteca Ambrosiana in Milan (1609) and the Biblioteca Marciana in Venice (1468) are among the world's most beautiful. Italian students spend long hours in libraries during 'sessione d'esami' (exam season)."},

    {type:"teach", trg:"l'aula", src:"the classroom / lecture hall", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'aula' (hall, courtyard).\n'Aula magna' = main hall / auditorium.",
     example:"A: In quale aula e la lezione?\nB: Nell'aula 3, al primo piano.",
     exampleSrc:"A: In which classroom is the lecture?\nB: In room 3, on the first floor.",
     funFact:"Italian university classrooms can range from intimate seminar rooms to 'aule magne' (great halls) seating hundreds. Some lectures at large faculties have 500+ students. The 'aula magna' is used for graduation ceremonies, conferences, and the rector's annual address."},

    {type:"teach", trg:"la lezione", src:"the lesson / lecture", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'lectio' (reading).\n'Seguire una lezione' = to attend a lecture.",
     example:"A: La lezione inizia alle nove.\nB: Non fare tardi!",
     exampleSrc:"A: The lecture starts at nine.\nB: Do not be late!",
     funFact:"Italian university lectures are called 'lezioni.' Attendance ('frequenza') is often not mandatory, and students can choose to study independently and only appear for exams. This academic freedom surprises students from countries with strict attendance policies."},

    {type:"teach", trg:"gli appunti", src:"the notes (study)", pos:"noun", gender:"m",
     note:"Masculine PLURAL. From 'appuntare' (to note down).\n'Prendere appunti' = to take notes.",
     example:"A: Mi presti i tuoi appunti?\nB: Certo, te li mando per email.",
     exampleSrc:"A: Can you lend me your notes?\nB: Of course, I will email them to you.",
     funFact:"Sharing notes ('appunti') is a fundamental part of Italian student culture. Students who miss lectures rely on classmates' notes. There are even businesses and websites dedicated to selling or sharing university notes. 'Comprare gli appunti' (buying notes) is a common practice."},

    {type:"teach", trg:"il fuoricorso", src:"the student behind schedule", pos:"noun", gender:"m",
     note:"Masculine/feminine. 'Fuori' = outside, 'corso' = course.\n'Essere fuoricorso' = to be behind on your degree timeline.",
     example:"A: Sei ancora fuoricorso?\nB: Si, mi mancano tre esami.",
     exampleSrc:"A: Are you still behind schedule?\nB: Yes, I have three exams left.",
     funFact:"A 'fuoricorso' is a student who has not finished their degree in the standard time. This is very common in Italy, where the flexible exam system means many students take 5-7 years for a 3-year degree. Being 'fuoricorso' carries little stigma. The average Italian graduate finishes at 27."},

    {type:"teach", trg:"il collega", src:"the colleague / fellow student", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la collega. From Latin 'collega' (partner in office).\nPlural: i colleghi / le colleghe.",
     example:"A: I tuoi colleghi sono simpatici?\nB: Si, ci troviamo bene insieme.",
     exampleSrc:"A: Are your colleagues nice?\nB: Yes, we get along well together.",
     funFact:"In Italian, 'collega' is used for both workplace colleagues and fellow university students. The word implies a professional relationship based on shared purpose. 'Colleghi di corso' specifically means students in the same degree program."},

    {type:"teach", trg:"il seminario", src:"the seminar", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'seminarium' (seed bed).\n'Seminario di ricerca' = research seminar.",
     example:"A: Il seminario di linguistica e molto interessante.\nB: Chi lo tiene?",
     exampleSrc:"A: The linguistics seminar is very interesting.\nB: Who leads it?",
     funFact:"Italian university seminars are smaller, discussion-based classes compared to large lectures. They often require active participation and presentations. 'Seminario' originally meant 'seed bed,' suggesting a place where ideas are planted and cultivated."},

    {type:"teach", trg:"la media", src:"the average (grade)", pos:"noun", gender:"f",
     note:"Feminine. Short for 'media aritmetica.'\n'La media dei voti' = grade point average.",
     example:"A: Qual e la tua media?\nB: Ho una media del ventisette.",
     exampleSrc:"A: What is your average?\nB: I have a 27 average.",
     funFact:"Italian university exams are graded from 18 (minimum pass) to 30 (perfect), with 'lode' (honors) for exceptional performance. Your 'media' (average) across all exams determines your final degree grade. A '30 e lode' is the holy grail. The average Italian graduate finishes with about 24-25."},

    {type:"teach", trg:"la sessione d'esami", src:"the exam period", pos:"noun", gender:"f",
     note:"Feminine. Three sessions per year: winter, summer, autumn.\n'Essere in sessione' = to be in exam period.",
     example:"A: Non esco, sono in sessione d'esami.\nB: In bocca al lupo!",
     exampleSrc:"A: I am not going out, I am in exam period.\nB: Good luck!",
     funFact:"Italian universities have three exam periods ('sessioni'): January-February, June-July, and September. Students choose which exams to take in each session. 'In bocca al lupo!' (In the mouth of the wolf!) is the Italian good luck phrase for exams. The correct response is 'Crepi!' (May it die!)."},

    {type:"teach", trg:"ripassare", src:"to review / to go over", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ripassare la lezione' = to review the lesson.\nFrom 'ri-' (again) + 'passare' (to pass through).",
     example:"A: Devo ripassare prima dell'esame.\nB: Ripassiamo insieme stasera?",
     exampleSrc:"A: I need to review before the exam.\nB: Shall we review together tonight?",
     funFact:"'Ripassare' literally means 'to pass through again.' Italian students often review in groups, quizzing each other ('interrogarsi a vicenda'). Studying together ('studiare in gruppo') is a time-honored Italian tradition, combining social bonding with exam preparation."},

    // Quiz steps
    {type:"mc", q:"What is a 'fuoricorso' student?",
     opts:["A student behind on their degree timeline","An exchange student from abroad","A student with top grades","A dropout who left school"],
     ans:"A student behind on their degree timeline",
     hint:"Very common in Italy. The flexible exam system means many take longer than the standard years. Little stigma is attached."},

    {type:"fb", s:"Mi presti i tuoi {1}?",
     a:["appunti"],
     opts:["appunti","esami","voti","libri"],
     hint:"Lecture notes. Sharing these is fundamental to Italian student culture. Some students even sell or trade them.",
     sSrc:"Can you lend me your {1}?"},

    {type:"match", pairs:[
      {trg:"la biblioteca", src:"the library"},
      {trg:"l'aula", src:"the classroom"},
      {trg:"la lezione", src:"the lecture"},
      {trg:"il seminario", src:"the seminar"},
      {trg:"la sessione", src:"the exam period"}
    ]},

    {type:"mc", q:"What is the correct response to 'In bocca al lupo!'?",
     opts:["Grazie mille!","Crepi! (May it die!)","Anche tu!","Lupo cattivo!"],
     ans:"Crepi! (May it die!)",
     hint:"The traditional exchange before exams. Saying 'grazie' is considered bad luck. You must wish death upon the wolf for good fortune."},

    {type:"fb", s:"Qual e la tua {1}?",
     a:["media"],
     opts:["media","lezione","aula","biblioteca"],
     hint:"Your grade point average. Italian university exams run from 18 (pass) to 30 (perfect), with 'lode' for exceptional work.",
     sSrc:"What is your {1}?"},

    {type:"mc", q:"How does Italian university attendance typically work?",
     opts:["Students must attend at least 90% of classes","Strict mandatory attendance at all lectures","Attendance is often optional with independent study allowed","Attendance is tracked by fingerprint scanners"],
     ans:"Attendance is often optional with independent study allowed",
     hint:"This academic freedom surprises foreign students. You can skip lectures and s... on your own, only showing up for exams."},

    {type:"fb", s:"Devo {1} prima dell'esame.",
     a:["ripassare"],
     opts:["ripassare","ripetere","iscrivermi","laurearmi"],
     hint:"Go through the material again before the test. Literally 'to pass through again.' Italian students often do this in groups.",
     sSrc:"I need to {1} before the exam."},

    {type:"mc", q:"What does a '30 e lode' represent at Italian universities?",
     opts:["A grade only professors can give themselves","A failing grade with a warning","A perfectly average result","The maximum achievable score with honors"],
     ans:"The maximum achievable score with honors",
     hint:"30 is already the top mark. Adding 'lode' (praise/h...) makes it the ultimate achievement. Students celebrate enthusiastically when they earn one."}
  ,{type:"mc",q:"How do you say \"exam period\" in Italian?",opts:["la sessione d'esami","il rappresentante","il tirocinio","la biblioteca"],ans:"la sessione d'esami",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_U20_L2;
