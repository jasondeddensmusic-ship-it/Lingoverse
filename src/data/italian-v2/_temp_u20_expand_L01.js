// Unit 20 Expansion. Lesson 4: La vita universitaria
const LESSON_4 = {
  id:"itv2_u20l4", title:"La vita universitaria (II)", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"La vita universitaria",
     desc:"Explore the daily life of Italian university students. From lecture halls to study groups, learn the vocabulary that defines the Italian student experience.",
     goals:["Describe daily university routines","Talk about student housing and social life","Discuss academic challenges and rewards"]},

    {type:"teach", trg:"la lezione", src:"the lecture / lesson", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'lectio' (reading).\n'Seguire una lezione' = to attend a lecture.",
     example:"A: A che ora e la lezione di storia?\nB: La lezione inizia alle nove.",
     exampleSrc:"A: What time is the history lecture?\nB: The lecture starts at nine.",
     funFact:"'Lezione' comes from Latin 'lectio' (reading), because medieval university lectures were literally readings from authoritative texts. Italian university lectures can last two or three hours with a short break. 'Seguire' (to follow) is the standard verb for attending lectures, not 'frequentare.'"},

    {type:"teach", trg:"l'aula", src:"the lecture hall / classroom", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'aula' (hall, courtyard).\n'Aula magna' = great hall (for ceremonies).",
     example:"A: In quale aula e la lezione?\nB: Nell'aula magna, al piano terra.",
     exampleSrc:"A: In which hall is the lecture?\nB: In the great hall, on the ground floor.",
     funFact:"Italian university lecture halls can be enormous. The 'aula magna' of many universities is a grand ceremonial space with centuries of history. The University of Padova's Aula Magna is where Galileo taught. Many Italian 'aule' have wooden benches and no air conditioning, preserving their historic character."},

    {type:"teach", trg:"lo studente fuori sede", src:"the out-of-town student", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la studentessa fuori sede.\n'Fuori sede' = off-site, living away from home.",
     example:"A: Sei uno studente fuori sede?\nB: Si, vengo da Napoli ma studio a Milano.",
     exampleSrc:"A: Are you an out-of-town student?\nB: Yes, I come from Naples but I study in Milan.",
     funFact:"'Fuori sede' (off-site) describes students who move to another city for university. This is extremely common in Italy because top universities are concentrated in a few cities. Students from the South often move North, creating a cultural exchange. Shared apartments ('appartamenti condivisi') are the standard housing."},

    {type:"teach", trg:"il tirocinio", src:"the internship / traineeship", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'tirocinion' (initial training).\n'Fare un tirocinio' = to do an internship.",
     example:"A: Sto facendo un tirocinio in uno studio legale.\nB: E un'esperienza utile per il futuro.",
     exampleSrc:"A: I am doing an internship at a law firm.\nB: It is a useful experience for the future.",
     funFact:"'Tirocinio' is required for many Italian degree programs. Medical students, future teachers, and engineers must complete supervised training. Italian internships are often unpaid or minimally paid, which has sparked debates about labor rights. 'Stage' (from French) is also used, especially in business."},

    {type:"teach", trg:"la mensa", src:"the canteen / cafeteria", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'mensa' (table).\n'Mangiare in mensa' = to eat at the canteen.",
     example:"A: Mangiamo in mensa oggi?\nB: Si, il menu di oggi sembra buono.",
     exampleSrc:"A: Shall we eat at the canteen today?\nB: Yes, today's menu looks good.",
     funFact:"Italian university canteens offer full meals at subsidized prices (often under five euros). The food follows regional traditions: a Bolognese mensa serves different dishes than a Neapolitan one. Students receive reduced prices based on income through the same ISEE system used for tuition."},

    {type:"teach", trg:"il compito", src:"the assignment / homework", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'computus' (calculation).\n'Fare i compiti' = to do homework. 'Compito in classe' = in-class test.",
     example:"A: Hai fatto il compito di italiano?\nB: Non ancora, lo finisco stasera.",
     exampleSrc:"A: Did you do the Italian assignment?\nB: Not yet, I will finish it tonight.",
     funFact:"'Compito' means both 'homework assignment' and 'duty/task.' 'Compito in classe' is an in-class written test, different from an 'esame.' At university, 'compiti' are less common than at school; assessment mainly happens through exams. The word comes from Latin 'computus' (reckoning), the same root as 'computer.'"},

    {type:"teach", trg:"ripetere", src:"to repeat / to review / to retake", pos:"verb", gender:null,
     note:"Regular -ere verb. 'Ripetere l'anno' = to repeat the year.\n'Ripetere la lezione' = to review the lesson.",
     example:"A: Devo ripetere l'esame a settembre.\nB: Non preoccuparti, la prossima volta andra meglio.",
     exampleSrc:"A: I have to retake the exam in September.\nB: Do not worry, next time it will go better.",
     funFact:"'Ripetere' has three academic meanings: to review material (ripetere la lezione), to retake an exam (ripetere l'esame), and to repeat a school year (ripetere l'anno). The 'ripetizioni' (private tutoring sessions) are a huge industry in Italy, with families hiring tutors for struggling students."},

    {type:"teach", trg:"la media", src:"the average (grade)", pos:"noun", gender:"f",
     note:"Feminine. Short for 'media aritmetica.'\n'Avere una buona media' = to have a good GPA.",
     example:"A: Qual e la tua media?\nB: Ho una media del ventisette.",
     exampleSrc:"A: What is your average?\nB: I have an average of twenty-seven.",
     funFact:"Italian university grades go from 18 (minimum pass) to 30 (perfect), with an optional 'lode' (honors) for exceptional work: '30 e lode.' Your 'media' (average) determines your final degree mark. A 'media del 27' is considered good. The system is completely different from American GPA or British classifications."},

    {type:"teach", trg:"il seminario", src:"the seminar", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'seminarium' (seed bed).\nSmaller, discussion-based class format.",
     example:"A: Il seminario di filosofia e molto stimolante.\nB: Quanti studenti ci sono?",
     exampleSrc:"A: The philosophy seminar is very stimulating.\nB: How many students are there?",
     funFact:"'Seminario' comes from Latin 'seminarium' (nursery, seed bed), suggesting a place where ideas are planted and grown. Italian university seminars are smaller than lectures and involve more discussion. In Catholic tradition, 'seminario' also means seminary (school for priests), which was the original educational meaning."},

    // Quiz steps
    {type:"mc", q:"What does 'fuori sede' mean for Italian students?",
     opts:["A student living away from their home city","A student studying part-time only","A student who studies abroad","A student who dropped out of university"],
     ans:"A student living away from their home city",
     hint:"Students from the South often move to Northern cities for university. Shared apartments are the standard housing arrangement."},

    {type:"fb", s:"Sto facendo un {1} in uno studio legale.",
     a:["tirocinio"],
     opts:["tirocinio","seminario","compito","esame"],
     hint:"A supervised training placement required by many Italian degree programs. From Greek 'tirocinion' (initial training).",
     sSrc:"I am doing an {1} at a law firm."},

    {type:"match", pairs:[
      {trg:"la lezione", src:"the lecture"},
      {trg:"l'aula", src:"the lecture hall"},
      {trg:"la mensa", src:"the canteen"},
      {trg:"il compito", src:"the assignment"},
      {trg:"la media", src:"the average grade"}
    ]},

    {type:"mc", q:"What is the Italian university grading scale?",
     opts:["0 to 100, with 60 as a pass","18 to 30, with 18 as a pass","1 to 10, with 6 as a pass","A through F, with C as a pass"],
     ans:"18 to 30, with 18 as a pass",
     hint:"A perfect score is 30 e lode (with honors). A 'media del 27' is considered good."},

    {type:"fb", s:"Devo {1} l'esame a settembre.",
     a:["ripetere"],
     opts:["ripetere","seguire","mangiare","scrivere"],
     hint:"You need to retake the exam. This verb means to review, to retake, or to repeat a year. Private tutoring sessions use the plural form.",
     sSrc:"I have to {1} the exam in September."},

    {type:"mc", q:"What does 'aula magna' mean?",
     opts:["A digital classroom","A small study room","The great hall (for ceremonies)","An outdoor lecture space"],
     ans:"The great hall (for ceremonies)",
     hint:"'Magna' means 'g....' Many Italian universities have historic grand halls where Galileo and other scholars once taught."},

    {type:"fb", s:"Mangiamo in {1} oggi?",
     a:["mensa"],
     opts:["mensa","aula","biblioteca","seminario"],
     hint:"The university canteen with subsidized meals under five euros. Regional food traditions vary from campus to campus.",
     sSrc:"Shall we eat at the {1} today?"},

    {type:"mc", q:"What is the original meaning of 'seminario'?",
     opts:["A prayer room","A final exam hall","A sports facility","A seed bed (nursery for ideas)"],
     ans:"A seed bed (nursery for ideas)",
     hint:"From Latin 'seminarium.' A place where i... are planted and cultivated. Also means Catholic seminary in religious contexts."}
  ]
};
export default LESSON_4;
