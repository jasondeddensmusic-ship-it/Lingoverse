// Batch 3 — Unit 20, Lesson 1: Materie e valutazioni (Subjects & Assessments)
const BATCH3_U20_L1 = {
  id:"itv2_u20l_b3_1", title:"Materie e valutazioni", icon:"\uD83D\uDCDA", xp:15, board:true,
  steps:[
    {type:"intro", title:"Materie e valutazioni",
     desc:"Expand your education vocabulary with school subjects, assessment methods, and student life vocabulary.",
     goals:["Name school subjects in Italian","Describe assessment and grading methods","Discuss student activities and academic life"]},

    {type:"teach", trg:"la filosofia", src:"the philosophy", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'philosophia' (love of wisdom).\nMandatory in Italian liceo for 3 years.",
     example:"A: La filosofia e la mia materia preferita.\nB: Quale filosofo ti piace di più?",
     exampleSrc:"A: Philosophy is my favorite subject.\nB: Which philosopher do you like the most?",
     funFact:"Philosophy is mandatory in all Italian licei (academic high schools) for three years. Students study from the Pre-Socratics through modern thinkers. This is unusual in Europe. Italy considers philosophical thinking essential to education, not an elective luxury."},

    {type:"teach", trg:"la storia dell'arte", src:"the art history", pos:"noun", gender:"f",
     note:"Feminine. 'Storia' = history, 'arte' = art.\nMandatory in most Italian high schools.",
     example:"A: Oggi studiamo il Rinascimento in storia dell'arte.\nB: Che periodo affascinante!",
     exampleSrc:"A: Today we study the Renaissance in art history.\nB: What a fascinating period!",
     funFact:"Art history is a required subject in most Italian high schools. Students learn to analyze masterpieces from ancient Rome through contemporary art. Given Italy's unmatched artistic heritage, 'storia dell'arte' is considered as important as math or science in many Italian schools."},

    {type:"teach", trg:"la letteratura", src:"the literature", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'litteratura' (writing).\n'Letteratura italiana' = Italian literature.",
     example:"A: Stiamo leggendo Dante in letteratura.\nB: La Divina Commedia? Che impresa!",
     exampleSrc:"A: We are reading Dante in literature class.\nB: The Divine Comedy? What an undertaking!",
     funFact:"Italian literature class covers Dante, Petrarch, and Boccaccio (the 'Three Crowns') in depth. Every Italian high school student reads the Divine Comedy. The Italian literary canon is among the richest in the world, spanning from medieval to contemporary works."},

    {type:"teach", trg:"il compito", src:"the homework / assignment", pos:"noun", gender:"m",
     note:"Masculine. Plural: i compiti.\n'Fare i compiti' = to do homework.",
     example:"A: Hai fatto i compiti?\nB: Non ancora, li faccio dopo cena.",
     exampleSrc:"A: Did you do your homework?\nB: Not yet, I will do it after dinner.",
     funFact:"'Compito in classe' means an in-class test (written). 'Compiti a casa' means homework. Italian students receive substantial homework, especially in liceo. The debate over 'troppi compiti' (too much homework) is a perennial discussion among Italian parents, students, and educators."},

    {type:"teach", trg:"l'interrogazione", src:"the oral exam / questioning", pos:"noun", gender:"f",
     note:"Feminine. From 'interrogare' (to question).\n'Essere interrogato' = to be examined orally.",
     example:"A: Domani ho l'interrogazione di storia.\nB: Hai studiato abbastanza?",
     exampleSrc:"A: Tomorrow I have the oral exam in history.\nB: Have you studied enough?",
     funFact:"The 'interrogazione' is a uniquely Italian tradition. Students are called to the front of the class to answer questions orally while classmates watch. It tests knowledge, articulation, and composure under pressure. Many Italians consider it the most stressful part of school."},

    {type:"teach", trg:"la pagella", src:"the report card", pos:"noun", gender:"f",
     note:"Feminine. Issued twice a year in Italy.\n'Pagella del primo quadrimestre' = first semester report card.",
     example:"A: Hai visto la pagella di Marco?\nB: Si, ha voti molto buoni!",
     exampleSrc:"A: Did you see Marco's report card?\nB: Yes, he has very good grades!",
     funFact:"Italian report cards are issued at the end of each 'quadrimestre' (four-month period). Parents access them online through the 'registro elettronico' (electronic register). The traditional paper 'pagella' is being replaced by digital versions, though many families still print them as keepsakes."},

    {type:"teach", trg:"la mensa", src:"the canteen / cafeteria", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'mensa' (table).\n'Mensa scolastica' = school cafeteria.",
     example:"A: Mangi alla mensa oggi?\nB: No, ho portato il pranzo da casa.",
     exampleSrc:"A: Are you eating at the cafeteria today?\nB: No, I brought lunch from home.",
     funFact:"Italian school cafeterias serve surprisingly good food. Meals are often prepared on-site with fresh ingredients. Many municipalities regulate school menus to ensure balanced nutrition. Italian children learn to eat properly at school, with multi-course lunches including primo, secondo, and fruit."},

    {type:"teach", trg:"la gita scolastica", src:"the school trip / field trip", pos:"noun", gender:"f",
     note:"Feminine. 'Gita' = outing, trip.\n'Andare in gita' = to go on a trip.",
     example:"A: Dove andate in gita quest'anno?\nB: Andiamo a Firenze per tre giorni.",
     exampleSrc:"A: Where are you going on a school trip this year?\nB: We are going to Florence for three days.",
     funFact:"Italian school trips ('gite scolastiche') are a beloved tradition. Elementary schools visit local museums, while high schoolers take multi-day trips to other Italian cities or European capitals. The 'gita di quinta' (fifth-year trip) is the ultimate high school experience, often going abroad."},

    {type:"teach", trg:"ripetere", src:"to repeat / to review", pos:"verb", gender:null,
     note:"Regular -ere verb. 'Ripetere l'anno' = to repeat the year.\n'Ripetere la lezione' = to review the lesson.",
     example:"A: Devo ripetere il capitolo tre.\nB: Lo ripassiamo insieme?",
     exampleSrc:"A: I need to review chapter three.\nB: Shall we go over it together?",
     funFact:"'Ripetere' has two key school meanings: to review material ('ripetere la lezione') and to repeat a school year ('ripetere l'anno'). 'Ripetizioni' (private tutoring lessons) are a massive industry in Italy, with many teachers earning extra income tutoring students after school hours."},

    {type:"teach", trg:"il registro", src:"the register / gradebook", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'registrum' (list).\n'Registro elettronico' = electronic gradebook.",
     example:"A: Il professore ha scritto il voto sul registro.\nB: Posso vederlo online?",
     exampleSrc:"A: The professor wrote the grade in the register.\nB: Can I see it online?",
     funFact:"Italian schools now use 'registri elettronici' (electronic registers) where parents can check grades, absences, and homework in real time. This digital transition happened in the 2010s. Before that, the paper 'registro di classe' was the teacher's sacred document."},

    {type:"teach", trg:"il supplente", src:"the substitute teacher", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la supplente. From 'supplire' (to substitute).\n'Oggi c'è il supplente' = Today we have a sub.",
     example:"A: Oggi c'è la supplente di matematica.\nB: Bene, forse non interroga!",
     exampleSrc:"A: Today we have the substitute math teacher.\nB: Good, maybe she will not quiz us!",
     funFact:"Substitute teaching in Italy is a major career path. 'Supplenti' are teachers waiting for a permanent position ('cattedra'). Many spend years on waiting lists ('graduatorie'). The system is notoriously complex. Students often cheer for substitute teachers, hoping for an easier class."},

    {type:"teach", trg:"la cattedra", src:"the teaching position / teacher's desk", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'cathedra' (chair, seat).\nBoth the physical desk and the permanent position.",
     example:"A: Ha finalmente ottenuto la cattedra.\nB: Dopo dieci anni di supplenze!",
     exampleSrc:"A: She finally got a permanent position.\nB: After ten years of substituting!",
     funFact:"'Cattedra' means both the teacher's desk at the front of the classroom and a permanent teaching appointment. Getting 'la cattedra' is the goal of every Italian teacher. It provides job security ('posto fisso'), which is highly valued in Italian culture."},

    // Quiz steps
    {type:"mc", q:"What makes the Italian 'interrogazione' unique?",
     opts:["It is always a written test","Students answer questions orally in front of the class","It only happens at the end of the year","It is graded by other students"],
     ans:"Students answer questions orally in front of the class",
     hint:"Called to the f..., questioned by the teacher while classmates watch. It tests knowledge, expression, and poise under pressure."},

    {type:"fb", s:"Hai fatto i {1}?",
     a:["compiti"],
     opts:["compiti","esami","voti","corsi"],
     hint:"Did you do your homework? Italian students receive substantial amounts, especially in academic high schools.",
     sSrc:"Did you do your {1}?"},

    {type:"match", pairs:[
      {trg:"la filosofia", src:"philosophy"},
      {trg:"la letteratura", src:"literature"},
      {trg:"il compito", src:"homework / assignment"},
      {trg:"la pagella", src:"report card"},
      {trg:"la mensa", src:"cafeteria"}
    ]},

    {type:"mc", q:"What does 'ottenere la cattedra' mean for an Italian teacher?",
     opts:["Getting a new desk","Receiving a permanent teaching position","Being promoted to principal","Retiring from teaching"],
     ans:"Receiving a permanent teaching position",
     hint:"After years on substitute waiting lists, this 'posto fisso' provides job security. The word originally means the teacher's chair/seat."},

    {type:"fb", s:"Dove andate in {1} quest'anno?",
     a:["gita"],
     opts:["gita","mensa","cattedra","classe"],
     hint:"A school trip. Elementary schools visit local sites. High schoolers take multi-day excursions to other cities or countries.",
     sSrc:"Where are you going on a school {1} this year?"},

    {type:"mc", q:"What are 'ripetizioni' in the Italian education context?",
     opts:["Repeated school years only","Private tutoring lessons (major industry)","Oral exam retakes","Physical education repetitions"],
     ans:"Private tutoring lessons (major industry)",
     hint:"Many Italian teachers earn extra income this way. Students struggling with subjects seek these after-school sessions for improvement."},

    {type:"fb", s:"Oggi c'è il {1} di matematica.",
     a:["supplente"],
     opts:["supplente","professore","registro","compito"],
     hint:"A temporary teacher replacing the regular one. Many spend years waiting for a permanent position.",
     sSrc:"Today we have the {1} math teacher."},

    {type:"mc", q:"Why is philosophy mandatory in Italian high schools?",
     opts:["It is required by the EU","Italy considers it essential to education","It was added recently due to budget cuts","Only private schools teach it"],
     ans:"Italy considers it essential to education",
     hint:"Three years of mandatory philosophical study from ancient Greece to modern thought. I... values critical thinking as a core educational goal, not an optional extra."}
  ,{type:"match",pairs:[{trg:"ripetere",src:"to repeat / to review"},{trg:"il registro",src:"the register / gradebook"},{trg:"la cattedra",src:"the teaching position / teacher's desk"}]},{type:"mc",q:"How do you say \"art history\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","la storia dell'arte"],ans:"la storia dell'arte",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"oral exam / questioning\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'interrogazione"],ans:"l'interrogazione",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il professore ha consegnato la {1} ai genitori.",a:["pagella"],opts:["pagella","cattedra","mensa","gita scolastica"],hint:"A school document showing grades given to students at the end of term.",sSrc:"The teacher handed the {1} to the parents."}]
};
export default BATCH3_U20_L1;
