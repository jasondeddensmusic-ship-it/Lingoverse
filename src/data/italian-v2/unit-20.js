// Italian V2 Unit 20. L'istruzione (Education) (B1.3)
import BATCH3_L02 from './_batch3_u20_L02.js';
import BATCH3_L01 from './_batch3_u20_L01.js';
import EXP_L4 from './_temp_u20_expand_L01.js';import EXP_L5 from './_temp_u20_expand_L02.js';import EXP_L6 from './_temp_u20_expand_L03.js';
// CILS/CELI B1 aligned. School system, university, academic vocabulary.

const UNIT_20 = {
  n:20, lang:"it", srcLang:"en", track:"v2",
  title:"L'istruzione", sub:"Education & Academic Life",
  icon:"🎓", level:"B1.3", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u20l1", title:"La scuola", icon:"🏫", xp:15, board:true, steps:[
      {type:"intro", title:"La scuola",
       desc:"Learn vocabulary about the Italian school system. From primary school through high school, the Italian education path has its own structure and terminology.",
       goals:["Name types of schools in Italy","Describe the Italian school system","Discuss school subjects and grades"]},

      {type:"teach", trg:"la scuola superiore", src:"the high school", pos:"noun", gender:"f",
       note:"Feminine. Literally 'upper school.' Ages 14-19 (5 years).\nAlso called 'le superiori' (plural, informal).",
       example:"A: Dove vai a scuola?\nB: Vado alla scuola superiore vicino a casa.",
       exampleSrc:"A: Where do you go to school?\nB: I go to the high school near home.",
       funFact:"Italian high school lasts 5 years (not 4 like in America). Students choose their track at age 14: liceo (academic), istituto tecnico (technical), or istituto professionale (vocational). This choice shapes their entire academic future."},

      {type:"teach", trg:"il liceo", src:"the academic high school", pos:"noun", gender:"m",
       note:"Masculine. From Greek 'Lykeion' (Aristotle's school).\nTypes: classico, scientifico, linguistico, artistico.",
       example:"A: Quale liceo frequenti?\nB: Frequento il liceo scientifico.",
       exampleSrc:"A: Which liceo do you attend?\nB: I attend the science-focused liceo.",
       funFact:"The 'liceo classico' teaches Latin and Ancient Greek and is considered the most prestigious. Italy is one of the few countries where classical languages are still a major part of secondary education. Many Italian politicians, writers, and professionals are liceo classico graduates."},

      {type:"teach", trg:"la materia", src:"the (school) subject", pos:"noun", gender:"f",
       note:"Feminine. Plural: le materie. From Latin 'materia' (matter).\n'La mia materia preferita' = my favorite subject.",
       example:"A: Qual e la tua materia preferita?\nB: Mi piace molto la storia.",
       exampleSrc:"A: What is your favorite subject?\nB: I really like history.",
       funFact:"Italian high school students study many more subjects simultaneously than American students. A typical liceo scientifico student takes Italian, math, physics, science, Latin, English, history, philosophy, art history, and PE all in the same year."},

      {type:"teach", trg:"il voto", src:"the grade / mark", pos:"noun", gender:"m",
       note:"Masculine. Italian grades run from 1 to 10 (6 = pass).\nAlso means 'vote' in political contexts.",
       example:"A: Che voto hai preso in matematica?\nB: Ho preso otto. Sono contento!",
       exampleSrc:"A: What grade did you get in math?\nB: I got an eight. I am happy!",
       funFact:"Italian grades go from 1-10 (not A-F). 6 is the minimum pass, 8 is very good, 9-10 is excellent. Getting a 10 is rare and celebrated. Teachers can give half grades like 6.5. 'Insufficiente' (insufficient) means below 6."},

      {type:"teach", trg:"l'esame", src:"the exam", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli esami. From Latin 'examen' (test).\n'Dare un esame' = to take an exam (not 'prendere').",
       example:"A: Quando dai l'esame?\nB: L'esame e venerdi mattina.",
       exampleSrc:"A: When do you take the exam?\nB: The exam is Friday morning.",
       funFact:"In Italian you 'give' an exam ('dare un esame'), not 'take' it. At the end of high school, all students face the 'esame di maturita' (maturity exam), a grueling multi-day test that includes written essays and an oral examination by a commission."},

      {type:"teach", trg:"frequentare", src:"to attend (school/classes)", pos:"verb", gender:null,
       note:"Regular -are verb. 'Frequentare la scuola' = to attend school.\nAlso: 'frequentare qualcuno' = to hang out with someone.",
       example:"A: Frequenti l'universita?\nB: Si, frequento il secondo anno.",
       exampleSrc:"A: Do you attend university?\nB: Yes, I attend the second year.",
       funFact:"'Frequentare' comes from Latin 'frequentare' (to visit often). In Italian it covers both regular attendance and social company. 'Frequentare brutte compagnie' means 'to hang out with bad company.' The link between attending school and keeping company reflects the social nature of learning."},

      {type:"teach", trg:"bocciare", src:"to fail (a student) / to hold back", pos:"verb", gender:null,
       note:"Regular -are verb. 'Essere bocciato' = to fail / be held back.\nAlso used for wine: 'bocciare un vino' = to reject a wine.",
       example:"A: Marco e stato bocciato.\nB: Che peccato! Deve ripetere l'anno.",
       exampleSrc:"A: Marco failed (was held back).\nB: What a pity! He has to repeat the year.",
       funFact:"'Bocciare' comes from 'boccia' (ball), originally meaning to knock out a ball in bocce. Being 'bocciato' means being knocked out of your year. In Italy, students who fail too many subjects must repeat the entire school year, not just the failed courses."},

      // Quiz steps
      {type:"mc", q:"How long does Italian high school last?",
       opts:["5 years","4 years","3 years","6 years"],
       ans:"5 years",
       hint:"From age 14 to 19. Students choose between liceo (academic), tecnico (technical), or professionale (vocational)."},

      {type:"fb", s:"Qual e la tua {1} preferita?",
       a:["materia"],
       opts:["materia","voto","esame","scuola"],
       hint:"This is a school subject like history, math, or science. Italian students study many of these at once.",
       sSrc:"What is your favorite {1}?"},

      {type:"match", pairs:[
        {trg:"la scuola superiore", src:"high school"},
        {trg:"il liceo", src:"academic high school"},
        {trg:"la materia", src:"school subject"},
        {trg:"il voto", src:"the grade"},
        {trg:"l'esame", src:"the exam"}
      ]},

      {type:"mc", q:"What does 'bocciare' mean in a school context?",
       opts:["To promote a student","To fail / hold back a student","To teach a class","To take an exam"],
       ans:"To fail / hold back a student",
       hint:"From 'boccia' (ball in bocce). Being 'bocciato' means being knocked out and having to repeat the year."},

      {type:"fb", s:"Che {1} hai preso in matematica?",
       a:["voto"],
       opts:["voto","esame","materia","liceo"],
       hint:"Italian grades go from 1 to 10, with 6 being the minimum pass. This word also means 'vote.'",
       sSrc:"What {1} did you get in math?"},

      {type:"mc", q:"Which liceo teaches Latin and Ancient Greek?",
       opts:["Liceo linguistico","Liceo scientifico","Liceo classico","Liceo artistico"],
       ans:"Liceo classico",
       hint:"This is considered the most prestigious track. Italy is one of few countries still teaching classical languages in secondary school."},

      {type:"fb", s:"{1} l'universita da due anni.",
       a:["Frequento"],
       opts:["Frequento","Boccia","Esamo","Materia"],
       hint:"This verb means 'to attend' regularly. From Latin 'frequentare' (to visit often). Here in the io form.",
       sSrc:"I have {1} university for two years."},

      {type:"mc", q:"How do Italians say 'to take an exam'?",
       opts:["Avere un esame","Prendere un esame","Fare un esame","Dare un esame"],
       ans:"Dare un esame",
       hint:"Italian uses 'd...' (to give), not 'prendere' (to take). You 'give' an exam, the opposite of the English expression."}
    ]},

    {id:"itv2_u20l2", title:"L'universita", icon:"🏛️", xp:15, board:true, steps:[
      {type:"intro", title:"L'universita",
       desc:"Explore Italian university life. From enrollment to graduation, the Italian university system has unique traditions and a vocabulary all its own.",
       goals:["Describe university enrollment and courses","Talk about degrees and graduation","Understand Italian academic vocabulary"]},

      {type:"teach", trg:"l'universita", src:"the university", pos:"noun", gender:"f",
       note:"Feminine. Invariable plural: le universita (no accent change).\nOften shortened to 'l'uni' in casual speech.",
       example:"A: In quale universita studi?\nB: Studio all'Universita di Bologna.",
       exampleSrc:"A: At which university do you study?\nB: I study at the University of Bologna.",
       funFact:"The University of Bologna, founded in 1088, is the oldest continuously operating university in the world. Italy has a deep university tradition: Padova (1222), Napoli (1224), and Siena (1240) are all among the world's oldest. Italian academic culture carries centuries of prestige."},

      {type:"teach", trg:"la laurea", src:"the degree / diploma", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'laurea' (laurel wreath).\n'Laurea triennale' = bachelor's (3 years). 'Laurea magistrale' = master's.",
       example:"A: Hai gia la laurea?\nB: Si, ho la laurea in ingegneria.",
       exampleSrc:"A: Do you already have a degree?\nB: Yes, I have a degree in engineering.",
       funFact:"The word 'laurea' comes from the laurel wreath placed on scholars' heads in ancient Rome. Italian graduates still celebrate by wearing a laurel wreath on graduation day. The tradition is called 'la corona d'alloro' and photos with the wreath are posted everywhere."},

      {type:"teach", trg:"la facolta", src:"the faculty / department", pos:"noun", gender:"f",
       note:"Feminine. Invariable: le facolta.\nAlso means 'ability' in general Italian.",
       example:"A: In quale facolta sei iscritto?\nB: Sono iscritto alla Facolta di Lettere.",
       exampleSrc:"A: In which faculty are you enrolled?\nB: I am enrolled in the Faculty of Humanities.",
       funFact:"Italian universities are divided into 'facolta' (faculties), not 'schools' or 'colleges.' Major ones include Lettere (Humanities), Giurisprudenza (Law), Medicina (Medicine), Ingegneria (Engineering), and Economia (Economics). Each facolta often has its own building and identity."},

      {type:"teach", trg:"la tesi", src:"the thesis", pos:"noun", gender:"f",
       note:"Feminine. Invariable: le tesi. From Greek 'thesis' (proposition).\n'Scrivere la tesi' = to write your thesis.",
       example:"A: A che punto sei con la tesi?\nB: Ho quasi finito, mancano due capitoli.",
       exampleSrc:"A: How far along are you with the thesis?\nB: I am almost done, two chapters are left.",
       funFact:"Every Italian university degree requires a thesis defense. Even the three-year bachelor's requires a written thesis presented before a commission. The thesis defense ('discussione della tesi') is a formal event where family and friends attend and celebrate afterward."},

      {type:"teach", trg:"la ricerca", src:"the research", pos:"noun", gender:"f",
       note:"Feminine. From 'ricercare' (to search again, to investigate).\n'Fare ricerca' = to do research.",
       example:"A: La sua ricerca e molto interessante.\nB: Si, studia i cambiamenti climatici.",
       exampleSrc:"A: His research is very interesting.\nB: Yes, he studies climate change.",
       funFact:"'Ricerca' comes from 'ri-' (again) + 'cercare' (to search), meaning 'to search thoroughly.' Italy invests less in research than many European countries, leading to 'fuga di cervelli' (brain drain), where talented researchers move abroad for better funding and opportunities."},

      {type:"teach", trg:"iscriversi", src:"to enroll / to register", pos:"verb", gender:null,
       note:"Reflexive -ere verb. 'Iscriversi all'universita' = to enroll in university.\nPast participle: iscritto.",
       example:"A: Ti sei iscritto al corso?\nB: Si, mi sono iscritto ieri online.",
       exampleSrc:"A: Did you enroll in the course?\nB: Yes, I enrolled yesterday online.",
       funFact:"'Iscriversi' comes from Latin 'inscribere' (to write in/on). Italian university enrollment is open to all high school graduates, regardless of grades. There are no application essays or letters of recommendation for most programs. Some faculties like Medicine have entrance exams ('test d'ingresso')."},

      {type:"teach", trg:"laurearsi", src:"to graduate (from university)", pos:"verb", gender:null,
       note:"Reflexive -are verb. 'Mi sono laureato in...' = I graduated in...\nFrom 'laurea' (degree).",
       example:"A: Quando ti laurei?\nB: Mi laureo a luglio, finalmente!",
       exampleSrc:"A: When do you graduate?\nB: I graduate in July, finally!",
       funFact:"Italian graduation celebrations are legendary. After the thesis defense, friends and family ambush the graduate with embarrassing photos, costumes, and a satirical poster ('papiro'). The graduate reads a humorous 'oath' and everyone toasts with sparkling wine."},

      {type:"teach", trg:"la borsa di studio", src:"the scholarship", pos:"noun", gender:"f",
       note:"Feminine. Literally 'study purse.' 'Vincere una borsa di studio' = to win a scholarship.",
       example:"A: Ha vinto una borsa di studio.\nB: Brava! Se lo merita.",
       exampleSrc:"A: She won a scholarship.\nB: Good for her! She deserves it.",
       funFact:"'Borsa' means 'purse' or 'bag,' so a 'borsa di studio' is literally a 'study purse' full of money for education. The same word 'borsa' also means 'stock exchange' (la Borsa), from the Flemish merchant family Van der Beurse who hosted traders in their house."},

      // Quiz steps
      {type:"mc", q:"What is 'la laurea' in the Italian education system?",
       opts:["A university degree","A high school diploma","A scholarship","A professor's title"],
       ans:"A university degree",
       hint:"Named after the laurel wreath of ancient Rome. Italian graduates still wear a wreath on graduation day."},

      {type:"fb", s:"Mi sono {1} al corso ieri.",
       a:["iscritto"],
       opts:["iscritto","laureato","bocciato","promosso"],
       hint:"You registered for a course. This reflexive verb comes from Latin 'inscribere' (to write in).",
       sSrc:"I {1} for the course yesterday."},

      {type:"match", pairs:[
        {trg:"l'universita", src:"the university"},
        {trg:"la laurea", src:"the degree"},
        {trg:"la tesi", src:"the thesis"},
        {trg:"la ricerca", src:"the research"},
        {trg:"la borsa di studio", src:"the scholarship"}
      ]},

      {type:"mc", q:"What is special about the University of Bologna?",
       opts:["It has the single largest campus building in all of Europe","It is the world's oldest still-running university","It exclusively teaches law and nothing else","It was personally founded by the Pope"],
       ans:"It is the world's oldest still-running university",
       hint:"Founded in 1088, it predates Oxford and the Sorbonne. Italian academic tradition spans nearly a millennium."},

      {type:"fb", s:"Mi {1} a luglio, finalmente!",
       a:["laureo"],
       opts:["laureo","iscrivo","boccio","studio"],
       hint:"You are finally getting your university degree. This reflexive verb comes from 'laurea' (degree).",
       sSrc:"I {1} in July, finally!"},

      {type:"mc", q:"What does 'fuga di cervelli' mean?",
       opts:["A traditional end-of-year graduation ceremony for graduates","A university entrance exam","Talented academics emigrating for better opportunities","A demanding and intensive study technique"],
       ans:"Talented academics emigrating for better opportunities",
       hint:"Literally 'flight of' the word for 'brains.' Italy's low research funding pushes many scholars abroad."},

      {type:"fb", s:"Ha vinto una {1} di studio.",
       a:["borsa"],
       opts:["borsa","tesi","laurea","facolta"],
       hint:"Literally a 'study purse.' This financial award helps students pay for education. The same word means 'purse' or 'stock exchange.'",
       sSrc:"She won a {1} (scholarship)."},

      {type:"mc", q:"What happens at an Italian thesis defense?",
       opts:["There is no defense required for bachelor's degrees","Only the assigned professor reads and evaluates it","All students simply upload a digital copy online","The student defends it before a formal panel of examiners"],
       ans:"The student defends it before a formal panel of examiners",
       hint:"Even the three-year bachelor's requires this public presentation. Family and friends attend and celebrate afterward with a laurel wreath."}
    ]},

    {id:"itv2_u20l3", title:"Il professore", icon:"👨‍🏫", xp:15, board:true, steps:[
      {type:"intro", title:"Il professore",
       desc:"Learn about academic roles and actions in Italian education. From professors to promotions, these words complete your education vocabulary.",
       goals:["Name academic roles and titles","Use verbs for academic actions","Discuss educational achievements and setbacks"]},

      {type:"teach", trg:"il professore", src:"the professor / teacher", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la professoressa. Shortened: il/la prof.\nUsed for both university professors and high school teachers.",
       example:"A: Il professore e molto severo.\nB: Si, ma spiega bene.",
       exampleSrc:"A: The professor is very strict.\nB: Yes, but he explains well.",
       funFact:"'Professore/professoressa' is used for all high school and university teachers, unlike English which reserves 'professor' for university. Students call their teachers 'prof' informally. The title carries genuine respect in Italian culture."},

      {type:"teach", trg:"il ricercatore", src:"the researcher", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la ricercatrice. From 'ricerca' (research).\nAn entry-level academic position at Italian universities.",
       example:"A: E un ricercatore all'universita.\nB: In quale campo fa ricerca?",
       exampleSrc:"A: He is a researcher at the university.\nB: In what field does he do research?",
       funFact:"In Italy, 'ricercatore' is a specific academic rank, the entry point to a university career. The career path goes: ricercatore > professore associato > professore ordinario. Getting a permanent position ('posto fisso') in Italian academia is extremely competitive."},

      {type:"teach", trg:"promuovere", src:"to promote / to pass (a student)", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: promosso.\n'Essere promosso' = to pass (school). Opposite of 'bocciare.'",
       example:"A: Sei stato promosso?\nB: Si, sono stato promosso con ottimi voti!",
       exampleSrc:"A: Did you pass?\nB: Yes, I passed with excellent grades!",
       funFact:"'Promuovere' comes from Latin 'promovere' (to move forward). In school, being 'promosso' literally means moving forward to the next year. The opposite 'bocciato' (held back) means staying behind. Italian families celebrate being 'promosso' at the end of each school year."},

      {type:"teach", trg:"l'iscrizione", src:"the enrollment / registration", pos:"noun", gender:"f",
       note:"Feminine. From 'iscrivere' (to register, to inscribe).\n'Tassa di iscrizione' = enrollment fee.",
       example:"A: Hai completato l'iscrizione?\nB: Si, ho pagato la tassa ieri.",
       exampleSrc:"A: Did you complete the enrollment?\nB: Yes, I paid the fee yesterday.",
       funFact:"Italian university tuition ('tassa di iscrizione') is much lower than in the US or UK, typically ranging from a few hundred to a few thousand euros per year. Fees are calculated based on family income through the 'ISEE' system, making education more accessible."},

      {type:"teach", trg:"il corso", src:"the course / class", pos:"noun", gender:"m",
       note:"Masculine. 'Corso di laurea' = degree program.\n'Frequentare un corso' = to attend a course.",
       example:"A: Quanti corsi segui questo semestre?\nB: Ne seguo cinque.",
       exampleSrc:"A: How many courses are you taking this semester?\nB: I am taking five.",
       funFact:"Italian university courses are structured differently from American ones. Many are full-year rather than semester-based. Attendance is often optional ('frequenza non obbligatoria'), meaning students can study independently and just show up for exams. This freedom surprises many international students."},

      {type:"teach", trg:"l'appello", src:"the exam session / call", pos:"noun", gender:"m",
       note:"Masculine. From 'appellare' (to call).\nItalian students get multiple exam dates per session to retake exams.",
       example:"A: L'appello e a febbraio?\nB: Si, ci sono tre date tra cui scegliere.",
       exampleSrc:"A: Is the exam session in February?\nB: Yes, there are three dates to choose from.",
       funFact:"The 'appello' system is unique to Italian universities. Each exam period offers 2-3 dates ('appelli'). Students choose which date to take the exam and can skip or retake it in the next session without penalty. This flexibility means some students take years to graduate."},

      {type:"teach", trg:"il compagno di classe", src:"the classmate", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la compagna di classe.\n'Compagno' also means 'partner' or 'companion.'",
       example:"A: Chi e il tuo compagno di classe preferito?\nB: Marco. Studiamo sempre insieme.",
       exampleSrc:"A: Who is your favorite classmate?\nB: Marco. We always study together.",
       funFact:"'Compagno' comes from Latin 'cum panis' (with bread), someone you share bread with. A classmate is literally someone you share bread with in class. 'Compagno/a' also means romantic partner or political comrade, so context is important."},

      // Quiz steps
      {type:"mc", q:"What is the entry-level academic position at Italian universities?",
       opts:["Ricercatore","Professore ordinario","Professore associato","Rettore"],
       ans:"Ricercatore",
       hint:"The career path starts here and progresses to 'professore associato' and then 'professore ordinario.'"},

      {type:"fb", s:"Sei stato {1} con ottimi voti!",
       a:["promosso"],
       opts:["promosso","bocciato","iscritto","laureato"],
       hint:"You passed and are moving to the next year. This is the opposite of being held back. From 'promuovere.'",
       sSrc:"You {1} with excellent grades!"},

      {type:"match", pairs:[
        {trg:"il professore", src:"the professor / teacher"},
        {trg:"il ricercatore", src:"the researcher"},
        {trg:"l'iscrizione", src:"the enrollment"},
        {trg:"l'appello", src:"the exam session"},
        {trg:"il compagno di classe", src:"the classmate"}
      ]},

      {type:"mc", q:"What is unique about the Italian 'appello' system?",
       opts:["All exams are conducted entirely in spoken form","Multiple dates are offered per session","All exams fall on the same fixed day","Students may not repeat a failed exam"],
       ans:"Multiple dates are offered per session",
       hint:"Each exam period gives 2-3 date options. Students choose when to take or retake the exam, with no penalty."},

      {type:"fb", s:"Hai completato l'{1}?",
       a:["iscrizione"],
       opts:["iscrizione","appello","esame","tesi"],
       hint:"This is the process of registering and paying the fee. From 'iscrivere' (to register).",
       sSrc:"Did you complete the {1}?"},

      {type:"mc", q:"Where does the word 'compagno' come from?",
       opts:["Greek 'kompas' meaning a navigational compass","Latin 'campus' meaning open field","Latin 'cum panis' meaning with bread","Italian 'compito' meaning homework"],
       ans:"Latin 'cum panis' meaning with bread",
       hint:"A companion is someone you share a meal with. In school, a 'compagno di classe' shares the same room with you."},

      {type:"fb", s:"Quanti {1} segui questo semestre?",
       a:["corsi"],
       opts:["corsi","esami","voti","tesi"],
       hint:"These are the classes you attend at university. 'Corso di laurea' means degree program.",
       sSrc:"How many {1} are you taking this semester?"},

      {type:"mc", q:"How are Italian university tuition fees calculated?",
       opts:["By the field of study only","A flat rate for everyone","By the student's final grades","Scaled to household earnings via the ISEE declaration"],
       ans:"Scaled to household earnings via the ISEE declaration",
       hint:"Wealthier families pay more; lower-earning families pay very little. This makes higher education accessible to all."}
    ]}
  ]
};
export default UNIT_20;
