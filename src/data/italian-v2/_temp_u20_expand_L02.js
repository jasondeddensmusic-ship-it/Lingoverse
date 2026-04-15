// Unit 20 Expansion — Lesson 5: Esami e valutazioni
const LESSON_5 = {
  id:"itv2_u20l5", title:"Esami e valutazioni", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"Esami e valutazioni",
     desc:"Master the vocabulary of Italian exams and academic evaluation. From oral exams to written tests, the Italian assessment system has unique traditions.",
     goals:["Describe different exam formats","Talk about preparing for exams","Discuss academic results and outcomes"]},

    {type:"teach", trg:"l'esame orale", src:"the oral exam", pos:"noun", gender:"m",
     note:"Masculine. 'Orale' from Latin 'os, oris' (mouth).\nStudents answer questions in front of a professor.",
     example:"A: L'esame orale mi fa paura.\nB: Stai calmo, conosci la materia.",
     exampleSrc:"A: The oral exam scares me.\nB: Stay calm, you know the subject.",
     funFact:"Oral exams are a hallmark of Italian universities. Students stand before the professor and answer questions for 15-30 minutes. Other students often watch, waiting for their turn. This public format builds public speaking skills but causes enormous anxiety. Some students prefer to accept a lower grade rather than face the oral."},

    {type:"teach", trg:"l'esame scritto", src:"the written exam", pos:"noun", gender:"m",
     note:"Masculine. 'Scritto' from 'scrivere' (to write).\n'Prova scritta' = written test.",
     example:"A: L'esame scritto dura tre ore.\nB: Tre ore? Devo preparami bene.",
     exampleSrc:"A: The written exam lasts three hours.\nB: Three hours? I need to prepare well.",
     funFact:"Many Italian university exams have both written and oral parts. You must pass the written to access the oral. The written often tests theory and calculations, while the oral tests deeper understanding. Some professors allow students to skip the oral if the written grade is high enough."},

    {type:"teach", trg:"superare", src:"to pass / to overcome", pos:"verb", gender:null,
     note:"Regular -are verb. 'Superare un esame' = to pass an exam.\n'Superare una difficolta' = to overcome a difficulty.",
     example:"A: Ho superato l'esame di diritto!\nB: Complimenti! Che voto hai preso?",
     exampleSrc:"A: I passed the law exam!\nB: Congratulations! What grade did you get?",
     funFact:"'Superare' literally means 'to go over/beyond.' In driving, 'superare' means to overtake another car. In exams, it means to clear the hurdle. 'Superare se stessi' (to surpass oneself) is a motivational expression. The word carries a sense of triumph over obstacles."},

    {type:"teach", trg:"il programma", src:"the syllabus / curriculum", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'programma' (public notice).\n'Seguire il programma' = to follow the syllabus.",
     example:"A: Hai studiato tutto il programma?\nB: Quasi tutto, mi mancano due capitoli.",
     exampleSrc:"A: Have you studied the entire syllabus?\nB: Almost all of it, I am missing two chapters.",
     funFact:"Italian professors publish a 'programma' listing required readings for the exam. These can be extensive: some exams require reading four or five full books. Students who attend lectures ('frequentanti') often get a reduced syllabus compared to non-attending students ('non frequentanti')."},

    {type:"teach", trg:"la sessione", src:"the exam session / exam period", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'sessio' (sitting).\n'Sessione estiva' = summer exam session.",
     example:"A: La sessione estiva inizia a giugno.\nB: Ho tre esami da dare in un mese.",
     exampleSrc:"A: The summer exam session starts in June.\nB: I have three exams to take in one month.",
     funFact:"Italian universities have three main exam sessions: invernale (winter, January-February), estiva (summer, June-July), and autunnale (autumn, September). Students plan their exam strategy across sessions. 'Sessione' time transforms Italian cities: libraries are packed, coffee bars overflow, and stress levels peak."},

    {type:"teach", trg:"rifiutare il voto", src:"to refuse the grade", pos:"verb", gender:null,
     note:"Expression. Students can reject a passing grade to retake the exam.\n'Rifiuto il voto' = I refuse this grade.",
     example:"A: Ho preso ventidue, ma rifiuto il voto.\nB: Sei sicuro? Ventidue non e male.",
     exampleSrc:"A: I got twenty-two, but I refuse the grade.\nB: Are you sure? Twenty-two is not bad.",
     funFact:"This is one of the most surprising features of Italian universities. After an oral exam, the professor announces your grade publicly. You can accept it or refuse it on the spot, with no penalty. If you refuse, the exam does not count and you retake it at the next session. Students targeting a high 'media' use this strategically."},

    {type:"teach", trg:"la preparazione", src:"the preparation / training", pos:"noun", gender:"f",
     note:"Feminine. From 'preparare' (to prepare).\n'Essere in preparazione' = to be in preparation.",
     example:"A: La preparazione per l'esame richiede mesi.\nB: Si, il programma e enorme.",
     exampleSrc:"A: The preparation for the exam takes months.\nB: Yes, the syllabus is enormous.",
     funFact:"'Preparazione' in an academic context means both the process of studying and the level of knowledge achieved. 'Ha una buona preparazione' (He has good preparation) means someone is well-educated. Italian professors value depth over speed: thorough 'preparazione' is respected more than quick memorization."},

    {type:"teach", trg:"il relatore", src:"the thesis supervisor", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la relatrice. From 'relazione' (report).\nThe professor who oversees your thesis.",
     example:"A: Chi e il tuo relatore?\nB: Il professor Rossi. E molto disponibile.",
     exampleSrc:"A: Who is your thesis supervisor?\nB: Professor Rossi. He is very helpful.",
     funFact:"The 'relatore' guides the thesis from proposal to defense. Choosing the right one is critical: some are famously demanding, others more relaxed. The relationship is almost like a mentorship. At the thesis defense ('discussione'), the relatore introduces your work and often defends it alongside you."},

    // Quiz steps
    {type:"mc", q:"What is unique about Italian oral exams?",
     opts:["They are always taken in private offices","They are conducted publicly with other students watching","They last only five minutes each","They are always optional extras"],
     ans:"They are conducted publicly with other students watching",
     hint:"S... stand before the professor and answer for 15-30 minutes. Waiting s... often observe the process."},

    {type:"fb", s:"Ho {1} l'esame di diritto!",
     a:["superato"],
     opts:["superato","rifiutato","ripetuto","preparato"],
     hint:"You cleared the hurdle and passed. This verb literally means 'to go over/beyond.' Also used for overtaking cars while driving.",
     sSrc:"I {1} the law exam!"},

    {type:"match", pairs:[
      {trg:"l'esame orale", src:"the oral exam"},
      {trg:"l'esame scritto", src:"the written exam"},
      {trg:"il programma", src:"the syllabus"},
      {trg:"la sessione", src:"the exam period"},
      {trg:"il relatore", src:"the thesis supervisor"}
    ]},

    {type:"mc", q:"What does 'rifiutare il voto' allow students to do?",
     opts:["Appeal to a higher academic board","Reject a passing grade and retake the exam penalty-free","Change their enrolled degree program","Transfer to a different university"],
     ans:"Reject a passing grade and retake the exam penalty-free",
     hint:"After the professor announces your score, you decide on the spot. Students targeting a high average use this strategically."},

    {type:"fb", s:"Hai studiato tutto il {1}?",
     a:["programma"],
     opts:["programma","esame","voto","seminario"],
     hint:"The list of required readings and topics published by the professor. Some require reading four or five full books.",
     sSrc:"Have you studied the entire {1}?"},

    {type:"mc", q:"How many main exam sessions do Italian universities have per year?",
     opts:["One in June only","Two (winter and summer)","Three (winter, summer, autumn)","Four (one per quarter)"],
     ans:"Three (winter, summer, autumn)",
     hint:"Invernale (January-February), estiva (June-July), autunnale (September). Students spread exams across these periods."},

    {type:"fb", s:"La {1} per l'esame richiede mesi.",
     a:["preparazione"],
     opts:["preparazione","sessione","lezione","media"],
     hint:"The process of studying for months before the exam. Italian professors value depth and thorough knowledge over speed.",
     sSrc:"The {1} for the exam takes months."},

    {type:"mc", q:"What does the 'relatore' do?",
     opts:["Grades all written exams for a course","Manages university enrollment records","Supervises and guides a student's thesis","Teaches all first-year introductory lectures"],
     ans:"Supervises and guides a student's thesis",
     hint:"This professor mentors you from proposal to defense. At the 'discussione,' they introduce your work to the examination panel."}
  ]
};
export default LESSON_5;
