// Unit 20 Expansion. Lesson 6: Borse di studio e carriera
const LESSON_6 = {
  id:"itv2_u20l6", title:"Borse di studio e carriera", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"Borse di studio e carriera",
     desc:"Learn about scholarships, academic career paths, and the transition from university to work in Italy. These words connect education to professional life.",
     goals:["Discuss scholarship types and applications","Talk about academic career progression","Describe the transition from study to work"]},

    {type:"teach", trg:"il dottorato", src:"the doctorate / PhD", pos:"noun", gender:"m",
     note:"Masculine. 'Dottorato di ricerca' = research doctorate.\n'Fare il dottorato' = to do a PhD.",
     example:"A: Vuoi fare il dottorato dopo la laurea?\nB: Si, vorrei fare ricerca in fisica.",
     exampleSrc:"A: Do you want to do a PhD after your degree?\nB: Yes, I would like to do research in physics.",
     funFact:"The Italian 'dottorato di ricerca' typically lasts three to four years. It was officially established in 1980, much later than in other countries. PhD students receive a modest stipend. Confusingly, all Italian graduates are addressed as 'dottore/dottoressa,' not just PhD holders. Even a bachelor's graduate is technically 'dottore.'"},

    {type:"teach", trg:"il bando", src:"the call for applications / announcement", pos:"noun", gender:"m",
     note:"Masculine. From 'bandire' (to announce, to proclaim).\n'Bando di concorso' = competition announcement.",
     example:"A: E uscito il bando per la borsa di studio.\nB: Quando scade il termine?",
     exampleSrc:"A: The call for the scholarship has been published.\nB: When is the deadline?",
     funFact:"'Bando' is the official announcement for scholarships, jobs, and public competitions. Italian bureaucracy relies heavily on 'bandi': every public position, from university professor to postal worker, is filled through a published 'bando di concorso' (competitive examination announcement). Missing the deadline means missing the opportunity entirely."},

    {type:"teach", trg:"il concorso", src:"the competitive exam / competition", pos:"noun", gender:"m",
     note:"Masculine. From 'concorrere' (to compete).\n'Vincere un concorso' = to win a competition.",
     example:"A: Ha vinto il concorso per insegnante.\nB: Dopo anni di preparazione, finalmente!",
     exampleSrc:"A: She won the teaching competition.\nB: After years of preparation, finally!",
     funFact:"Italy fills most public sector positions through 'concorsi pubblici' (public competitions). These are formal exams: written tests, oral interviews, and evaluations of qualifications. Some concorsi attract thousands of applicants for a handful of positions. 'Concorsista' (competition taker) is almost a lifestyle for job seekers."},

    {type:"teach", trg:"la carriera accademica", src:"the academic career", pos:"noun", gender:"f",
     note:"Feminine. 'Fare carriera' = to advance in one's career.\n'Carriera accademica' = the university career path.",
     example:"A: La carriera accademica in Italia e difficile.\nB: Servono anni di esperienza e pubblicazioni.",
     exampleSrc:"A: The academic career in Italy is difficult.\nB: You need years of experience and publications.",
     funFact:"The Italian academic career path is notoriously long. After the PhD, researchers face years of temporary contracts ('assegni di ricerca') before competing for a 'ricercatore' position. The path from PhD to full professor can take 15-20 years. This is a major factor in the 'fuga di cervelli' (brain drain)."},

    {type:"teach", trg:"lo stage", src:"the internship (business context)", pos:"noun", gender:"m",
     note:"Masculine. From French 'stage.' Pronounced 'stahj.'\n'Fare uno stage' = to do a business internship.",
     example:"A: Ho fatto uno stage in un'azienda di moda.\nB: Com'e stata l'esperienza?",
     exampleSrc:"A: I did an internship at a fashion company.\nB: How was the experience?",
     funFact:"'Stage' (from French) is used for business internships, while 'tirocinio' is more academic. Italian law requires stages to be governed by a formal agreement ('convenzione') between company and institution. The debate over unpaid stages is fierce: critics call them 'sfruttamento' (exploitation), defenders call them essential training."},

    {type:"teach", trg:"il curriculum", src:"the CV / resume", pos:"noun", gender:"m",
     note:"Masculine. Short for 'curriculum vitae' (Latin: course of life).\n'Mandare il curriculum' = to send your CV.",
     example:"A: Hai aggiornato il curriculum?\nB: Si, ho aggiunto lo stage e la tesi.",
     exampleSrc:"A: Have you updated your CV?\nB: Yes, I added the internship and thesis.",
     funFact:"Italy uses the European-format CV (Europass), a standardized template common across the EU. Italian CVs typically include a photo, date of birth, and marital status, details that would be unusual on American resumes. 'Curriculum vitae' is Latin for 'course of life,' and Italians use the full Latin phrase formally."},

    {type:"teach", trg:"il posto fisso", src:"the permanent position / steady job", pos:"noun", gender:"m",
     note:"Masculine. Literally 'fixed place.' The dream of job security.\n'Avere un posto fisso' = to have a permanent job.",
     example:"A: Il posto fisso e il sogno di molti giovani.\nB: Purtroppo e sempre piu difficile da trovare.",
     exampleSrc:"A: A permanent position is the dream of many young people.\nB: Unfortunately it is harder and harder to find.",
     funFact:"'Il posto fisso' is a defining concept in Italian work culture. A permanent contract ('contratto a tempo indeterminato') provides security, benefits, and social status. Checco Zalone's comedy film 'Che bella giornata' satirized the obsession with 'il posto fisso.' Getting one remains a central life goal for many Italians."},

    {type:"teach", trg:"il master", src:"the professional master's program", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. NOT the same as 'laurea magistrale.'\nA post-graduate professional specialization.",
     example:"A: Dopo la laurea, faccio un master in marketing.\nB: Dove lo fai?",
     exampleSrc:"A: After my degree, I am doing a master's in marketing.\nB: Where are you doing it?",
     funFact:"In Italy, 'master' refers to a professional post-graduate program (usually one year, often expensive). It is different from the 'laurea magistrale' (academic master's, two years, publicly funded). The distinction confuses even Italians. 'Master' programs are offered by both universities and private business schools."},

    {type:"teach", trg:"la pubblicazione", src:"the publication", pos:"noun", gender:"f",
     note:"Feminine. From 'pubblicare' (to publish).\n'Pubblicazione scientifica' = scientific publication.",
     example:"A: Ha molte pubblicazioni nel suo campo.\nB: Le pubblicazioni sono fondamentali per la carriera.",
     exampleSrc:"A: He has many publications in his field.\nB: Publications are fundamental for a career.",
     funFact:"In Italian academia, 'publish or perish' applies strongly. The number of 'pubblicazioni' determines hiring, promotions, and funding. Italy uses the ANVUR evaluation system to rate researchers. Italian scholars publish in both Italian and international journals, with increasing pressure to publish in English."},

    // Quiz steps
    {type:"mc", q:"Who can be called 'dottore' in Italy?",
     opts:["Anyone with a university degree","Only professors","Only medical doctors","Only PhD holders"],
     ans:"Anyone with a university degree",
     hint:"Even bachelor's graduates are technically 'dottore/dottoressa.' This surprises foreigners who reserve the title for physicians or PhD holders."},

    {type:"fb", s:"E uscito il {1} per la borsa di studio.",
     a:["bando"],
     opts:["bando","concorso","dottorato","master"],
     hint:"The official call for applications. Italian bureaucracy relies on these published announcements for every scholarship and public position.",
     sSrc:"The {1} for the scholarship has been published."},

    {type:"match", pairs:[
      {trg:"il dottorato", src:"the doctorate / PhD"},
      {trg:"il concorso", src:"the competitive exam"},
      {trg:"lo stage", src:"the business internship"},
      {trg:"il posto fisso", src:"the permanent position"},
      {trg:"la pubblicazione", src:"the publication"}
    ]},

    {type:"mc", q:"What is the difference between 'master' and 'laurea magistrale' in Italy?",
     opts:["They are the same thing with different names","Master is professional (one year); magistrale is academic (two years)","Master is cheaper and publicly funded","Magistrale is for business; master is for sciences"],
     ans:"Master is professional (one year); magistrale is academic (two years)",
     hint:"The 'm...' is often private and expensive. The 'laurea m...' is the standard a... degree funded by the public university system."},

    {type:"fb", s:"Il {1} e il sogno di molti giovani.",
     a:["posto fisso"],
     opts:["posto fisso","dottorato","concorso","master"],
     hint:"A permanent contract with job security. Literally a 'fixed place.' This concept is central to Italian work culture and even comedy films.",
     sSrc:"A {1} is the dream of many young people."},

    {type:"mc", q:"How are most public sector jobs filled in Italy?",
     opts:["Through personal referrals only","Through university placement offices","Through formal competitive public exams (concorsi)","Through online job applications"],
     ans:"Through formal competitive public exams (concorsi)",
     hint:"Official 'bandi' are published, and candidates take written tests and oral interviews. Some attract thousands of applicants."},

    {type:"fb", s:"Hai aggiornato il {1}?",
     a:["curriculum"],
     opts:["curriculum","bando","concorso","programma"],
     hint:"Your CV. Italy uses the Europass format common across the EU. Italian versions typically include a photo and date of birth.",
     sSrc:"Have you updated your {1}?"},

    {type:"mc", q:"What is 'fuga di cervelli' in the context of academic careers?",
     opts:["A competitive academic exam format","An annual research funding event","A student holiday tradition","Brain drain: researchers leaving Italy for better opportunities"],
     ans:"Brain drain: researchers leaving Italy for better opportunities",
     hint:"The long path from PhD to professor (15-20 years) and low research funding push many scholars abroad."}
  ]
};
export default LESSON_6;
