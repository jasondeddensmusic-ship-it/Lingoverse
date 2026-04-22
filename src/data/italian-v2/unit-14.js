// Italian V2 Unit 14. Il mondo del lavoro (Work & Career) (B1.1)
import BATCH8_L1 from './_batch8_u14_L01.js';
import BATCH7_L1 from './_batch7_u14_L01.js';
import BATCH6_L1 from './_batch6_u14_L01.js';
import BATCH5_L02 from './_batch5_u14_L02.js';
import BATCH5_L01 from './_batch5_u14_L01.js';
import BATCH2_L02 from './_batch2_u14_L02.js';
import BATCH2_L01 from './_batch2_u14_L01.js';
import EXP_L4 from './_temp_u14_expand_L01.js';import EXP_L5 from './_temp_u14_expand_L02.js';import EXP_L6 from './_temp_u14_expand_L03.js';
import COVERAGE_U14 from './_coverage_u14.js';
// CILS/CELI B1 aligned. Jobs, workplace vocabulary, career phrases.

const UNIT_14 = {
  n:14, lang:"it", srcLang:"en", track:"v2",
  title:"Il mondo del lavoro", sub:"Work & Career",
  icon:"💼", level:"B1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u14l1", title:"Le professioni", icon:"👔", xp:15, board:true, steps:[
      {type:"intro", title:"Le professioni",
       desc:"Learn the names of common professions in Italian. Many job titles have both masculine and feminine forms, and some are changing with evolving social norms.",
       goals:["Name common professions in Italian","Understand masculine and feminine job titles","Discuss what people do for a living"]},

      {type:"teach", trg:"l'avvocato", src:"the lawyer", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'avvocata or l'avvocatessa.\nFrom Latin 'advocatus' (one called to help).",
       example:"A: Che lavoro fa tuo padre?\nB: E avvocato. Ha uno studio in centro.\nA: Da quanto tempo fa questo lavoro?\nB: Da piu di vent'anni, ormai e molto esperto.",
       exampleSrc:"A: What does your father do for work?\nB: He is a lawyer. He has an office downtown.\nA: How long has he been doing this job?\nB: For over twenty years, by now he is very experienced.",
       funFact:"The feminine 'avvocata' is now preferred over the older 'avvocatessa.' Italy is actively updating its professional language. The Accademia della Crusca officially supports feminine job titles like avvocata, architetta, and sindaca."},

      {type:"teach", trg:"l'ingegnere", src:"the engineer", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'ingegnera (increasingly accepted).\nFrom Latin 'ingenium' (talent, invention).",
       example:"A: Laura e ingegnera?\nB: Si, lavora nel settore automobilistico.\nA: Le piace il suo lavoro?\nB: Molto, dice che ogni giorno e diverso.",
       exampleSrc:"A: Is Laura an engineer?\nB: Yes, she works in the automotive sector.\nA: Does she like her job?\nB: Very much, she says every day is different.",
       funFact:"In Italy, 'ingegnere' is also a formal title, like 'dottore.' You can address someone as 'Ingegnere Rossi.' Engineering is one of the most respected professions in Italian culture, especially civil engineering."},

      {type:"teach", trg:"l'architetto", src:"the architect", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'architetta (modern usage).\nFrom Greek 'arkhitekton' (master builder).",
       example:"A: Chi ha progettato questa casa?\nB: L'architetto Bianchi, e molto bravo.\nA: Quanto tempo ci e voluto per costruirla?\nB: Circa due anni, ma il risultato e bellissimo.",
       exampleSrc:"A: Who designed this house?\nB: The architect Bianchi, he is very good.\nA: How long did it take to build it?\nB: About two years, but the result is beautiful.",
       funFact:"Italy has more architects per capita than any other European country. With its rich architectural heritage from Roman ruins to Renaissance palaces, architecture has deep cultural significance. The title 'architetto' requires a state exam."},

      {type:"teach", trg:"il giornalista", src:"the journalist", pos:"noun", gender:"m",
       note:"Masculine and feminine form identical: il/la giornalista.\nFrom 'giornale' (newspaper).",
       example:"A: Mia sorella e giornalista.\nB: Per quale giornale scrive?\nA: Per il Corriere della Sera.\nB: Che bello! E un giornale molto importante.",
       exampleSrc:"A: My sister is a journalist.\nB: For which newspaper does she write?\nA: For the Corriere della Sera.\nB: How nice! It is a very important newspaper.",
       funFact:"Words ending in -ista are the same for masculine and feminine: il/la giornalista, il/la dentista, il/la pianista. Only the article changes. The plural follows gender: i giornalisti (m.), le giornaliste (f.)."},

      {type:"teach", trg:"il commercialista", src:"the accountant", pos:"noun", gender:"m",
       note:"Masculine/feminine: il/la commercialista.\nFrom 'commercio' (commerce). More than a bookkeeper.",
       example:"A: Devo chiamare il commercialista per le tasse.\nB: Il mio commercialista e molto efficiente.\nA: Me lo consigli?\nB: Assolutamente, ti do il suo numero.",
       exampleSrc:"A: I need to call the accountant for taxes.\nB: My accountant is very efficient.\nA: Do you recommend him?\nB: Absolutely, I will give you his number.",
       funFact:"The Italian 'commercialista' does much more than a typical accountant. They handle tax planning, business consulting, and often serve as financial advisors. Every Italian family and business relies on a commercialista for navigating the complex tax system."},
{type:"match",pairs:[{trg:"l'ingegnere",src:"the engineer"},{trg:"l'architetto",src:"the architect"},{trg:"il giornalista",src:"the journalist"},{trg:"il commercialista",src:"the accountant"}]},

      {type:"teach", trg:"il medico", src:"the doctor", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la medica (emerging) or 'la dottoressa.'\nFrom Latin 'medicus' (physician).",
       example:"A: Ho bisogno di un medico.\nB: C'e un medico di base qui vicino.\nA: E aperto il sabato?\nB: Si, riceve dalle nove all'una.",
       exampleSrc:"A: I need a doctor.\nB: There is a general practitioner nearby.\nA: Is it open on Saturdays?\nB: Yes, he sees patients from nine to one.",
       funFact:"'Il medico di base' (general practitioner) is assigned to every Italian citizen through the national health service. Italy's public healthcare system (Servizio Sanitario Nazionale) is among the top-rated in the world."},

      {type:"teach", trg:"l'insegnante", src:"the teacher", pos:"noun", gender:"m",
       note:"Masculine/feminine: l'insegnante. Article changes: l'insegnante (m./f.).\nFrom 'insegnare' (to teach).",
       example:"A: La mia insegnante di italiano e bravissima.\nB: Anche il mio insegnante di storia e molto bravo.\nA: Ti piace studiare la storia?\nB: Si, e la mia materia preferita.",
       exampleSrc:"A: My Italian teacher is excellent.\nB: My history teacher is also very good.\nA: Do you like studying history?\nB: Yes, it is my favorite subject.",
       funFact:"In Italy, teachers at all levels are addressed with respect. A university professor is 'il professore' or 'la professoressa.' Even in primary school, children say 'maestra' (female teacher) or 'maestro' (male teacher) as a title."},

      {type:"teach", trg:"il cuoco", src:"the cook / chef", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cuoca.\nFrom Latin 'coquus' (cook). Chef = 'lo chef' (borrowed from French).",
       example:"A: Il cuoco di questo ristorante e fantastico.\nB: Si, ha lavorato a Parigi per dieci anni.\nA: Qual e il suo piatto migliore?\nB: La pasta con il tartufo. E incredibile.",
       exampleSrc:"A: The chef at this restaurant is fantastic.\nB: Yes, he worked in Paris for ten years.\nA: What is his best dish?\nB: The pasta with truffle. It is incredible.",
       funFact:"'Cuoco' is the traditional Italian word, while 'chef' (from French) is used for high-end professional cooks. Italy distinguishes between a 'cuoco' (someone who cooks) and a 'chef' (a trained culinary professional with creative authority)."},

      {type:"tip", title:"Feminine Job Titles in Italian",
       text:"Italian is updating its professional language:\n\nTraditional: avvocato, architetto, ingegnere (used for all)\nModern: avvocata, architetta, ingegnera (for women)\n\nThe Accademia della Crusca supports feminine forms.\nWords ending in -ista stay the same: giornalista, dentista.\nWords ending in -e stay the same: insegnante, dirigente.\n\nThe article always changes: il medico (m.) / la medica (f.).",
       deepDive:{title:"The Debate Over Feminine Titles",
        text:"Italy has seen heated debate over feminine job titles. Some argue 'avvocata' or 'sindaca' (female mayor) sound awkward, while linguists point out these forms follow standard Italian morphology. The Accademia della Crusca's position is clear: feminine forms are grammatically correct and should be used. Major newspapers now use them regularly."}},

      // Quiz steps
      {type:"mc", q:"What is 'il commercialista'?",
       opts:["The accountant","The shopkeeper","The salesperson","The banker"],
       ans:"The accountant",
       hint:"This professional handles taxes, financial planning, and business consulting. Every Italian family relies on one."},

      {type:"fb", s:"Mia sorella e {1}. Scrive per un giornale.",
       a:["giornalista"],
       opts:["giornalista","avvocato","medico","cuoco"],
       hint:"She writes for a newspaper. This -ista profession has the same form for masculine and feminine.",
       sSrc:"My sister is a {1}. She writes for a newspaper."},

      {type:"match", pairs:[
        {trg:"l'avvocato", src:"the lawyer"},
        {trg:"l'ingegnere", src:"the engineer"},
        {trg:"l'architetto", src:"the architect"},
        {trg:"il medico", src:"the doctor"},
        {trg:"il cuoco", src:"the cook / chef"}
      ]},

      {type:"mc", q:"Which profession ends in -ista and has the same form for both genders?",
       opts:["Il/la medico","Il/la giornalista","Il/la avvocato","Il/la cuoco"],
       ans:"Il/la giornalista",
       hint:"Words ending in -ista do not change for gender. Only the article changes. Think: dentista, pianista."},

      {type:"fb", s:"Ho bisogno di un {1}. Non mi sento bene.",
       a:["medico"],
       opts:["medico","avvocato","ingegnere","commercialista"],
       hint:"You are not feeling well. You need a healthcare professional.",
       sSrc:"I need a {1}. I do not feel well."},

      {type:"mc", q:"What does 'l'insegnante' mean?",
       opts:["The principal","The student","The teacher","The tutor"],
       ans:"The teacher",
       hint:"From 'insegnare' (to teach). This word has the same form for masculine and feminine."},

      {type:"fb", s:"L'{1} Bianchi ha progettato questa casa.",
       a:["architetto"],
       opts:["architetto","ingegnere","avvocato","insegnante"],
       hint:"This professional designs buildings and houses. The word comes from Greek 'master builder.'",
       sSrc:"The {1} Bianchi designed this house."},

      {type:"mc", q:"What is the modern feminine form of 'avvocato'?",
       opts:["Avvocato","Avvocatessa","Avvocatina","Avvocata"],
       ans:"Avvocata",
       hint:"The Accademia della Crusca supports this direct feminine form. The older '-essa' suffix is now less preferred."}
    ]},

    {id:"itv2_u14l2", title:"In ufficio", icon:"🏢", xp:15, board:true, steps:[
      {type:"intro", title:"In ufficio",
       desc:"Learn essential workplace vocabulary for office life, job interviews, and employment contracts. These words are crucial for anyone working or looking for work in Italy.",
       goals:["Discuss office and workplace topics","Understand job interview vocabulary","Talk about employment terms"]},

      {type:"teach", trg:"l'ufficio", src:"the office", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli uffici.\nFrom Latin 'officium' (duty, service).",
       example:"A: Dove lavori?\nB: In un ufficio in centro. Al terzo piano.\nA: Ti piace lavorare li?\nB: Si, la posizione e comoda e i colleghi sono simpatici.",
       exampleSrc:"A: Where do you work?\nB: In an office downtown. On the third floor.\nA: Do you like working there?\nB: Yes, the location is convenient and the colleagues are nice.",
       funFact:"Italian office culture differs from American norms. Lunch breaks are long (often 1-2 hours), the workday may extend until 7 PM, and the 'pausa caffe' (coffee break) is a sacred social ritual, not just a caffeine stop."},

      {type:"teach", trg:"il colloquio", src:"the job interview", pos:"noun", gender:"m",
       note:"Masculine. Also means 'conversation' in formal contexts.\n'Fare un colloquio' = to have an interview.",
       example:"A: Ho un colloquio domani mattina.\nB: In bocca al lupo! Per quale posizione?\nA: Per un posto come ingegnere informatico.\nB: Crepi il lupo! Sono sicuro che andra bene.",
       exampleSrc:"A: I have a job interview tomorrow morning.\nB: Good luck! For which position?\nA: For a position as a software engineer.\nB: Best of luck! I am sure it will go well.",
       funFact:"'Colloquio' comes from Latin 'colloquium' (conversation). The expression 'In bocca al lupo!' (In the mouth of the wolf!) is the Italian way to wish luck. The correct response is 'Crepi il lupo!' (May the wolf die!). Never say 'Grazie,' which is considered bad luck."},

      {type:"teach", trg:"lo stipendio", src:"the salary", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli stipendi.\nFrom Latin 'stipendium' (soldier's pay).",
       example:"A: Lo stipendio e buono?\nB: Si, ma le tasse sono alte.\nA: Ricevi la tredicesima?\nB: Certo, e la quattordicesima a giugno.",
       exampleSrc:"A: Is the salary good?\nB: Yes, but the taxes are high.\nA: Do you receive the thirteenth month bonus?\nB: Of course, and the fourteenth in June.",
       funFact:"Italian salaries are typically discussed as monthly amounts, not annual. A '1,500 euro netto' means 1,500 euros after taxes per month. Italy uses the '13th month' system: workers receive an extra month's pay in December (tredicesima), and some contracts include a 14th (quattordicesima) in June."},

      {type:"teach", trg:"il contratto", src:"the contract", pos:"noun", gender:"m",
       note:"Masculine. 'Contratto a tempo indeterminato' = permanent contract.\nFrom Latin 'contractus' (agreement).",
       example:"A: Hai firmato il contratto?\nB: Si, e a tempo indeterminato!\nA: Complimenti! Quando cominci?\nB: Il primo del mese. Non vedo l'ora.",
       exampleSrc:"A: Have you signed the contract?\nB: Yes, it is a permanent contract!\nA: Congratulations! When do you start?\nB: The first of the month. I cannot wait.",
       funFact:"The 'contratto a tempo indeterminato' (permanent contract) is the gold standard in Italy. It provides strong job protection under Italian labor law. A 'contratto a tempo determinato' (fixed-term) must have an end date. Young Italians often struggle to get permanent contracts."},

      {type:"teach", trg:"licenziare", src:"to fire / to dismiss", pos:"verb", gender:null,
       note:"Regular -are verb. 'Essere licenziato' = to be fired.\nFrom 'licenza' (license, permission to leave).",
       example:"A: L'azienda ha licenziato venti persone.\nB: Che brutta notizia!\nA: Hanno tagliato tutto il reparto vendite.\nB: Spero che trovino un nuovo lavoro presto.",
       exampleSrc:"A: The company fired twenty people.\nB: What terrible news!\nA: They cut the entire sales department.\nB: I hope they find a new job soon.",
       funFact:"Italian labor law makes firing employees quite difficult compared to Anglo-Saxon countries. The 'Statuto dei Lavoratori' (Workers' Statute) of 1970 provides strong protections. Wrongful dismissal can lead to reinstatement. This is why permanent contracts are so valued."},
{type:"match",pairs:[{trg:"il colloquio",src:"the job interview"},{trg:"lo stipendio",src:"the salary"},{trg:"il contratto",src:"the contract"},{trg:"licenziare",src:"to fire / to dismiss"}]},

      {type:"teach", trg:"assumere", src:"to hire", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: assunto.\n'Essere assunto' = to be hired.",
       example:"A: L'azienda sta assumendo?\nB: Si, cercano due ingegneri.\nA: Dove posso mandare il curriculum?\nB: Sul sito dell'azienda, nella sezione lavora con noi.",
       exampleSrc:"A: Is the company hiring?\nB: Yes, they are looking for two engineers.\nA: Where can I send my CV?\nB: On the company website, in the work-with-us section.",
       funFact:"'Assumere' literally means 'to take on' or 'to assume.' The past participle 'assunto' is irregular. 'L'Assunzione' (the Assumption) is also a major Italian holiday on August 15th, called 'Ferragosto,' when virtually everything in Italy closes."},

      {type:"teach", trg:"il capo", src:"the boss", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la capa (informal).\nAlso means 'head' or 'leader.' From Latin 'caput' (head).",
       example:"A: Il tuo capo e simpatico?\nB: Si, ma e molto esigente.\nA: Ti chiede di fare straordinari?\nB: A volte, ma paga sempre lo straordinario.",
       exampleSrc:"A: Is your boss nice?\nB: Yes, but he is very demanding.\nA: Does he ask you to work overtime?\nB: Sometimes, but he always pays for overtime.",
       funFact:"'Capo' has many meanings in Italian: head (body part), boss, leader, cape (geography), garment (capo di abbigliamento). 'Capo di Stato' is 'head of state.' The plural 'i capi' can mean bosses, heads, or items of clothing depending on context."},

      {type:"teach", trg:"il collega", src:"the colleague", pos:"noun", gender:"m",
       note:"Masculine/feminine: il collega / la collega. Plural: i colleghi / le colleghe.\nFrom Latin 'collega' (partner in office).",
       example:"A: I tuoi colleghi sono simpatici?\nB: Si, andiamo spesso a pranzo insieme.\nA: Dove andate di solito?\nB: In una trattoria qui vicino, si mangia benissimo.",
       exampleSrc:"A: Are your colleagues nice?\nB: Yes, we often go to lunch together.\nA: Where do you usually go?\nB: To a trattoria nearby, the food is excellent.",
       funFact:"Italian workplace relationships tend to be more personal than in many countries. Colleagues often have lunch together, celebrate birthdays at work, and may socialize outside the office. The 'pausa pranzo' (lunch break) is an important bonding time."},

      // Quiz steps
      {type:"mc", q:"What is 'il colloquio' in a work context?",
       opts:["A job interview for candidates","A meeting room for conferences","A colleague at work","A signed contract"],
       ans:"A job interview for candidates",
       hint:"From Latin 'colloquium' (conversation). It is a formal meeting between employer and applicant."},

      {type:"fb", s:"Ho firmato il {1} a tempo indeterminato.",
       a:["contratto"],
       opts:["contratto","colloquio","stipendio","ufficio"],
       hint:"This legal document binds you and the company. 'A tempo indeterminato' means it has no end date.",
       sSrc:"I signed the permanent {1}."},

      {type:"match", pairs:[
        {trg:"l'ufficio", src:"the office"},
        {trg:"lo stipendio", src:"the salary"},
        {trg:"il colloquio", src:"the job interview"},
        {trg:"licenziare", src:"to fire"},
        {trg:"assumere", src:"to hire"}
      ]},

      {type:"mc", q:"What does 'assumere' mean?",
       opts:["To assume","To hire","To fire","To resign"],
       ans:"To hire",
       hint:"The opposite of 'licenziare.' When a company takes on a new employee, they use this verb."},

      {type:"fb", s:"L'azienda ha {1} venti persone.",
       a:["licenziato"],
       opts:["licenziato","assunto","lavorato","pagato"],
       hint:"The company let these people go. They lost their jobs. This is the past participle of 'to fire.'",
       sSrc:"The company {1} twenty people."},

      {type:"mc", q:"What is special about Italian salaries?",
       opts:["There is no income tax at all","Salaries are paid every single week","Workers get a 13th month bonus in December","Salaries are always paid in physical cash"],
       ans:"Workers get a 13th month bonus in December",
       hint:"This extra payment is called 'la tredicesima.' An additional full-pay disbursement arrives at year's end, just before the holidays."},

      {type:"fb", s:"Il mio {1} e molto esigente ma giusto.",
       a:["capo"],
       opts:["capo","collega","ufficio","contratto"],
       hint:"This person is your superior at work. The word also means 'head' in Italian.",
       sSrc:"My {1} is very demanding but fair."},

      {type:"mc", q:"What is the plural of 'il collega'?",
       opts:["I collegi (wrong spelling)","I colleghe (feminine plural)","I collegas (not Italian)","I colleghi"],
       ans:"I colleghi",
       hint:"Masculine nouns ending in -a often have irregular plurals. The masculine plural adds -hi to keep the hard 'g' sound."}
    ]},

    {id:"itv2_u14l3", title:"La vita lavorativa", icon:"📊", xp:15, board:true, steps:[
      {type:"intro", title:"La vita lavorativa",
       desc:"Learn vocabulary for daily work life: meetings, deadlines, projects, and career goals. Express work-related activities and plans in Italian.",
       goals:["Discuss meetings and deadlines","Talk about projects and goals","Express career ambitions"]},

      {type:"teach", trg:"la riunione", src:"the meeting", pos:"noun", gender:"f",
       note:"Feminine. From 'riunire' (to reunite, to gather).\n'Fare una riunione' = to hold a meeting.",
       example:"A: Abbiamo una riunione alle tre.\nB: Di che cosa si parla?\nA: Del nuovo progetto per il cliente.\nB: Bene, mi preparo subito.",
       exampleSrc:"A: We have a meeting at three.\nB: What is it about?\nA: About the new project for the client.\nB: Good, I will prepare right away.",
       funFact:"Italian meetings tend to be less rigid than Anglo-Saxon ones. They often start a few minutes late ('il quarto d'ora accademico,' the academic quarter-hour), and the discussion may wander from the agenda. Building rapport is considered as important as the agenda itself."},

      {type:"teach", trg:"la scadenza", src:"the deadline", pos:"noun", gender:"f",
       note:"Feminine. From 'scadere' (to expire, to fall due).\nAlso used for expiration dates on food.",
       example:"A: Qual e la scadenza del progetto?\nB: Venerdi prossimo. Dobbiamo sbrigarci!\nA: Possiamo chiedere una proroga?\nB: Non credo, il cliente ha fretta.",
       exampleSrc:"A: What is the project deadline?\nB: Next Friday. We need to hurry!\nA: Can we ask for an extension?\nB: I do not think so, the client is in a rush.",
       funFact:"'Scadenza' comes from 'scadere' (to fall, to expire). You see it on food packaging too: 'data di scadenza' (expiration date). The verb 'scadere' literally means 'to fall down,' suggesting something that drops off a calendar."},

      {type:"teach", trg:"il progetto", src:"the project", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'proiectum' (something thrown forward).\nAlso means 'plan' or 'design.'",
       example:"A: Come va il progetto?\nB: Bene, siamo quasi alla fine.\nA: Quando pensate di consegnarlo?\nB: Entro la fine della settimana, se tutto va bene.",
       exampleSrc:"A: How is the project going?\nB: Well, we are almost done.\nA: When do you plan to deliver it?\nB: By the end of the week, if all goes well.",
       funFact:"From Latin 'proiectum' (thrown forward), the same root as English 'project.' In Italian, 'progetto' can also mean an architectural plan or blueprint. 'Progettare' (to plan, to design) is the related verb."},

      {type:"teach", trg:"l'obiettivo", src:"the goal / objective", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'obiectivum' (placed before).\nAlso means 'camera lens.'",
       example:"A: Qual e il tuo obiettivo per quest'anno?\nB: Voglio imparare una nuova lingua.\nA: Quale lingua vorresti studiare?\nB: Il giapponese. Mi affascina la cultura.",
       exampleSrc:"A: What is your goal for this year?\nB: I want to learn a new language.\nA: Which language would you like to study?\nB: Japanese. The culture fascinates me.",
       funFact:"'Obiettivo' has a double meaning: 'goal/objective' and 'camera lens.' Both meanings share the idea of something you aim at or focus on. In business Italian, 'raggiungere un obiettivo' (to reach a goal) is a very common expression."},

      {type:"teach", trg:"la carriera", src:"the career", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'carraria' (road for carts).\n'Fare carriera' = to advance in one's career.",
       example:"A: Come va la carriera?\nB: Bene! Ho appena avuto una promozione.\nA: Congratulazioni! In che ruolo?\nB: Responsabile del marketing. Sono molto contento.",
       exampleSrc:"A: How is your career going?\nB: Well! I just got a promotion.\nA: Congratulations! In what role?\nB: Marketing manager. I am very happy.",
       funFact:"The expression 'fare carriera' (to make a career) implies climbing the professional ladder. Italian career paths are often influenced by personal connections ('le conoscenze'). The concept of 'raccomandazione' (recommendation through connections) is deeply embedded in Italian professional culture."},
{type:"match",pairs:[{trg:"la scadenza",src:"the deadline"},{trg:"il progetto",src:"the project"},{trg:"l'obiettivo",src:"the goal / objective"},{trg:"la carriera",src:"the career"}]},

      {type:"teach", trg:"la promozione", src:"the promotion", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'promotio' (advancement).\n'Ricevere una promozione' = to get a promotion.",
       example:"A: Congratulazioni per la promozione!\nB: Grazie, ho lavorato duro per ottenerla.\nA: Te la meriti, sei bravissimo.\nB: Grazie, il supporto dei colleghi e stato fondamentale.",
       exampleSrc:"A: Congratulations on the promotion!\nB: Thanks, I worked hard to get it.\nA: You deserve it, you are very good.\nB: Thanks, the support of colleagues was essential.",
       funFact:"'Promozione' means both 'promotion' (at work) and 'sale/special offer' (in stores). In a supermarket, 'in promozione' means 'on sale.' Context makes the meaning clear. The verb is 'promuovere' (to promote), with the irregular past participle 'promosso.'"},

      {type:"teach", trg:"lo stage", src:"the internship", pos:"noun", gender:"m",
       note:"Masculine. Borrowed from French. Pronounced 'stazh' (French pronunciation).\nAlso: il tirocinio (formal Italian).",
       example:"A: Mio figlio fa uno stage in una banca.\nB: E un buon inizio per la carriera.\nA: Spero che lo assumano dopo lo stage.\nB: Se si impegna, sicuramente avra una buona possibilita.",
       exampleSrc:"A: My son is doing an internship at a bank.\nB: It is a good start for his career.\nA: I hope they hire him after the internship.\nB: If he works hard, he will certainly have a good chance.",
       funFact:"Italy uses the French word 'stage' (pronounced 'stazh') for internship. The formal Italian term is 'tirocinio.' Internships in Italy have been controversial: many are unpaid or very low-paid, and critics argue they exploit young workers."},

      {type:"teach", trg:"il curriculum", src:"the CV / resume", pos:"noun", gender:"m",
       note:"Masculine. Invariable: singular and plural both 'curriculum.'\n'Curriculum vitae' (CV) is the full form.",
       example:"A: Hai mandato il curriculum?\nB: Si, l'ho mandato ieri per email.\nA: Hai ricevuto una risposta?\nB: Non ancora, ma il colloquio e la settimana prossima.",
       exampleSrc:"A: Did you send your CV?\nB: Yes, I sent it yesterday by email.\nA: Have you received a reply?\nB: Not yet, but the interview is next week.",
       funFact:"Italians use 'curriculum' or 'CV' (pronounced 'ci-vu'). The standard format in Europe is the Europass CV, which has a structured template. Italian CVs often include a photo, date of birth, and marital status, which would be unusual in Anglo-Saxon countries."},

      {type:"teach", trg:"dimettersi", src:"to resign", pos:"verb", gender:null,
       note:"Reflexive -ere verb. 'Mi dimetto' = I resign.\nFrom Latin 'dimittere' (to send away).",
       example:"A: Ho sentito che Marco si e dimesso.\nB: Si, ha trovato un lavoro migliore.\nA: Dove va a lavorare adesso?\nB: In una grande azienda a Milano. Un'ottima opportunita.",
       exampleSrc:"A: I heard that Marco resigned.\nB: Yes, he found a better job.\nA: Where is he going to work now?\nB: At a large company in Milan. An excellent opportunity.",
       funFact:"'Dimettersi' is reflexive: literally 'to dismiss oneself.' In Italian employment law, resignation requires written notice ('preavviso'), usually 15 to 90 days depending on the contract. Leaving without notice can result in a financial penalty."},

      {type:"tip", title:"Passato Prossimo vs Imperfetto",
       text:"Both are past tenses. The key difference is HOW you see the action.\n\nPassato prossimo, completed, specific events:\nIeri ho lavorato fino alle otto. (Yesterday I worked until eight.)\nMi hanno assunto lunedi. (They hired me on Monday.)\nUse it for: single completed events, sequences of events, reactions.\n\nImperfetto, ongoing, habitual, or descriptive:\nLavoravo in una banca per anni. (I used to work at a bank for years.)\nMentre lavoravo, ha chiamato il capo. (While I was working, the boss called.)\nUse it for: habits in the past, background descriptions, interrupted actions.\n\nThe quick test:\nCan you say 'was doing' or 'used to do'? Use imperfetto.\nDid it happen once, completely? Use passato prossimo.\n\nTogether in a story:\nImperfetto sets the scene. Passato prossimo moves the plot.",
       icon:"💡",
       deepDive:{title:"The narrative engine of Italian",
        text:"Italian learners call this distinction the hardest grammar challenge after the subjunctive. The trick is to see time cinematically. The imperfetto is the camera holding on a scene: 'Era tardi, pioveva, e lavoravo ancora.' (It was late, it was raining, and I was still working.) Then the passato prossimo is a cut: 'Poi ha telefonato Marco.' (Then Marco called.) The imperfetto creates the atmosphere; the passato prossimo creates the event. Verbs of emotion and state (pensare, volere, essere, avere) often prefer the imperfetto in past contexts because they describe conditions, not events: 'Ero stanco' (I was tired) not 'Ho stato stanco.'"}},

      // Quiz steps
      {type:"mc", q:"What is 'la scadenza'?",
       opts:["The deadline","The meeting","The salary","The promotion"],
       ans:"The deadline",
       hint:"From 'scadere' (to expire). This is the date by which something must be completed. Also used on food packaging."},

      {type:"fb", s:"Abbiamo una {1} alle tre in sala conferenze.",
       a:["riunione"],
       opts:["riunione","scadenza","promozione","carriera"],
       hint:"A group of colleagues will gather to discuss work matters. This word means 'meeting.'",
       sSrc:"We have a {1} at three in the conference room."},

      {type:"match", pairs:[
        {trg:"la riunione", src:"the meeting"},
        {trg:"il progetto", src:"the project"},
        {trg:"la carriera", src:"the career"},
        {trg:"lo stage", src:"the internship"},
        {trg:"il curriculum", src:"the CV / resume"}
      ]},

      {type:"mc", q:"What does 'fare carriera' mean?",
       opts:["To change jobs","To advance professionally","To work overtime","To take a break"],
       ans:"To advance professionally",
       hint:"'Fare' plus this noun means climbing the professional ladder, getting promotions and more responsibility."},

      {type:"fb", s:"Hai mandato il {1} per il nuovo lavoro?",
       a:["curriculum"],
       opts:["curriculum","contratto","colloquio","progetto"],
       hint:"This document lists your education, work experience, and skills. Employers read it before the interview.",
       sSrc:"Did you send your {1} for the new job?"},

      {type:"mc", q:"What does 'dimettersi' mean?",
       opts:["To be promoted","To be fired","To resign","To retire"],
       ans:"To resign",
       hint:"This reflexive verb means to leave your job voluntarily. Literally 'to dismiss oneself.'"},

      {type:"fb", s:"Congratulazioni per la {1}!",
       a:["promozione"],
       opts:["promozione","scadenza","riunione","carriera"],
       hint:"Your colleague got a higher position at work. You are congratulating them on this advancement.",
       sSrc:"Congratulations on the {1}!"},

      {type:"mc", q:"What is the Italian word for 'internship'?",
       opts:["Il contratto","Il lavoro","Il progetto","Lo stage"],
       ans:"Lo stage",
       hint:"This word is borrowed from French and pronounced 'stazh.' The formal Italian alternative is 'tirocinio.'"}
    ,{type:"match",pairs:[{trg:"dimettersi",src:"to resign"}]}]},

    {id:"itv2_u14l_civ", title:"Concetti sociali", icon:"🏛️", xp:15, board:true, steps:[
      {type:"intro", title:"B1 Civic Vocabulary",
       desc:"Learn 7 essential B1 Italian words for discussing society, economy, and ideas: to compare, society, politics, economy, education, development, advantage. Essential for CILS B1/B2 writing and opinion tasks.",
       goals:["Master 7 abstract civic words","Use them in formal discussion","Structure opinion writing"]},

      {type:"teach", trg:"confrontare", src:"to compare", pos:"verb", gender:null,
       note:"Regular -are verb.\n'Confrontare A con B' = to compare A with B.",
       example:"A: Come confronti questo lavoro con quello precedente?\nB: Il nuovo lavoro offre uno stipendio migliore.\nA: E le condizioni?\nB: Molto meglio, sono soddisfatto.",
       exampleSrc:"A: How do you compare this job with the previous one?\nB: The new job offers a better salary.\nA: And the conditions?\nB: Much better, I am satisfied.",
       funFact:"From Latin 'confrontare' (to face, to stand opposite). The same root gives English 'confront.' In Italian academic and journalistic writing, this verb is essential for analysis essays."},

      {type:"teach", trg:"la società", src:"society", pos:"noun", gender:"f",
       note:"Feminine. Irregular: ends in -a but does not change in plural ('le societa').\nAlso means 'company' in a business context.",
       example:"A: La società ha bisogno di più istruzione.\nB: Sono d'accordo. Ogni cittadino deve poter studiare.\nA: E qual è il ruolo della politica?\nB: Creare le condizioni giuste.",
       exampleSrc:"A: Society needs more education.\nB: I agree. Every citizen must be able to study.\nA: And what is the role of politics?\nB: To create the right conditions.",
       funFact:"The word 'società' covers both 'society' and 'company' (e.g. società per azioni = a joint-stock company). The context always makes it clear which meaning is intended."},

      {type:"teach", trg:"la politica", src:"politics / policy", pos:"noun", gender:"f",
       note:"Feminine. Can mean 'politics' (the field) or 'policy' (a specific rule).\nFrom Greek 'politike' (the art of governing).",
       example:"A: Ti interessa la politica?\nB: Un po'. Seguo le notizie ogni giorno.\nA: Pensi che i politici lavorino bene?\nB: Dipende. Alcuni sì, altri no.",
       exampleSrc:"A: Are you interested in politics?\nB: A little. I follow the news every day.\nA: Do you think politicians work well?\nB: It depends. Some yes, others no.",
       funFact:"Ancient Greek split governance into 'politike' (public affairs) and 'oikonomia' (household management). Both roots survive in Italian today: politica and economia."},

      {type:"teach", trg:"l'economia", src:"the economy / economics", pos:"noun", gender:"f",
       note:"Feminine. Refers to the national or global economy, or to economics as a discipline.\nFrom Greek 'oikonomia' (household management).",
       example:"A: Come va l'economia del paese?\nB: Non bene. La disoccupazione è alta.\nA: E lo sviluppo?\nB: Lento, ma c'è qualche segnale positivo.",
       exampleSrc:"A: How is the country's economy doing?\nB: Not well. Unemployment is high.\nA: And development?\nB: Slow, but there are some positive signs.",
       funFact:"Italy has the third-largest economy in the eurozone. The term 'economia sommersa' (shadow economy) is widely used in Italian public debate, referring to unreported economic activity estimated at 10-15% of GDP."},

      {type:"teach", trg:"l'istruzione", src:"education (formal system)", pos:"noun", gender:"f",
       note:"Feminine. Refers to the formal education system, not a single lesson.\nFrom Latin 'instruere' (to build up, to equip).",
       example:"A: L'istruzione pubblica è gratuita in Italia?\nB: Sì, fino alle scuole superiori.\nA: E l'università?\nB: Le tasse universitarie esistono, ma ci sono borse di studio.",
       exampleSrc:"A: Is public education free in Italy?\nB: Yes, up to secondary school.\nA: And university?\nB: University fees exist, but there are scholarships.",
       funFact:"Italy has one of the oldest universities in the world. The University of Bologna, founded in 1088, is the oldest continuously operating university on earth. Its motto: 'Alma mater studiorum.'"},

      {type:"teach", trg:"lo sviluppo", src:"development / growth", pos:"noun", gender:"m",
       note:"Masculine. From 'sviluppare' (to develop, to unfold).\nUsed for economic, personal, or technical growth.",
       example:"A: Lo sviluppo economico crea nuovi posti di lavoro.\nB: Sì, ma deve essere sostenibile.\nA: È importante per la società.\nB: Molto. Lo sviluppo e l'istruzione vanno insieme.",
       exampleSrc:"A: Economic development creates new jobs.\nB: Yes, but it must be sustainable.\nA: It is important for society.\nB: Very much. Development and education go together.",
       funFact:"'Sviluppo' comes from 'sviluppare,' which originally meant 'to unwrap' (dis-envelop). The idea of 'unwrapping potential' still resonates in phrases like 'sviluppo personale' (personal development)."},

      {type:"teach", trg:"il vantaggio", src:"the advantage", pos:"noun", gender:"m",
       note:"Masculine. Plural: i vantaggi.\nOpposite: lo svantaggio (the disadvantage).",
       example:"A: Qual è il vantaggio di confrontare più offerte di lavoro?\nB: Puoi scegliere lo stipendio migliore.\nA: E lo svantaggio?\nB: Richiede più tempo. Ma vale la pena.",
       exampleSrc:"A: What is the advantage of comparing several job offers?\nB: You can choose the best salary.\nA: And the disadvantage?\nB: It takes more time. But it is worth it.",
       funFact:"'Vantaggio' entered Italian from Old French 'avantage' (from 'avant' = before, forward). In tennis scoring, 'vantaggio' is the Italian term used when the score reaches deuce and one player gains the next point."},

      {type:"tip", title:"Expressing Opinion in Italian",
       text:"These civic words appear constantly in formal Italian writing. Useful opinion phrases:\n\nA mio parere... (In my opinion...)\nSecondo me... (According to me...)\nRitengo che + subjunctive... (I believe that...)\nSono convinto/a che... (I am convinced that...)\n\nNote: after opinion verbs like 'ritenere' and 'credere,' use the subjunctive.\nExample: Ritengo che la società abbia bisogno di più istruzione.\n(I believe that society needs more education.)",
       icon:"✍️",
       deepDive:{title:"Civic Italian in CILS writing tasks",
        text:"The CILS B1 and B2 writing tasks often ask you to express an opinion on a social or political topic. Strong candidates use all 7 words from this lesson. A typical prompt: 'Quali sono i vantaggi e gli svantaggi dello sviluppo tecnologico per la società?' (What are the advantages and disadvantages of technological development for society?) Notice how confrontare, l'economia, la politica, and l'istruzione all fit naturally into this essay. The examiner rewards precise vocabulary, not just grammatical correctness."}},

      {type:"mc", q:"What does 'confrontare' mean?",
       opts:["To compare","To consider","To confirm","To confront"],
       ans:"To compare",
       hint:"This -are verb is used to place two things side by side and examine differences. Think of placing them 'face to face.'"},

      {type:"fb", s:"Come {1} questo lavoro con il precedente?",
       a:["confronti"],
       opts:["confronti","descrivi","cerchi","trovi"],
       hint:"Fill in the tu-form of the verb meaning 'to compare.' Regular -are verb, second person singular.",
       sSrc:"How do you {1} this job with the previous one?"},

      {type:"mc", q:"'La società' can mean both 'society' AND which other thing?",
       opts:["The state","A company","The government","The public"],
       ans:"A company",
       hint:"In business contexts, this word refers to a legal entity that employs people. Think 'società per azioni.'"},

      {type:"mc", q:"Which gender is 'lo sviluppo'?",
       opts:["Feminine","Neuter","Masculine","It has no gender"],
       ans:"Masculine",
       hint:"Check the article: 'lo' is used with m nouns starting with s+consonant clusters, like sv-. What gender takes 'lo'?"},

      {type:"fb", s:"L'{1} del paese cresce lentamente quest'anno.",
       a:["economia"],
       opts:["economia","istruzione","politica","società"],
       hint:"Fill in the noun describing the system of production, trade, and money in a country. It uses l' because it starts with a vowel.",
       sSrc:"The country's {1} is growing slowly this year."},

      {type:"match", pairs:[
        {trg:"confrontare", src:"to compare"},
        {trg:"la società", src:"society"},
        {trg:"la politica", src:"politics"},
        {trg:"l'istruzione", src:"education"},
        {trg:"il vantaggio", src:"the advantage"}
      ]},

      {type:"fb", s:"Qual è il {1} principale di questo piano?",
       a:["vantaggio"],
       opts:["vantaggio","progetto","sviluppo","capo"],
       hint:"Fill in the masculine noun meaning the positive side or benefit of a plan. Its opposite is 'lo svantaggio.'",
       sSrc:"What is the main {1} of this plan?"},

      {type:"mc", q:"Which sentence uses 'lo sviluppo' correctly?",
       opts:["La sviluppo della città è rapida.","Un sviluppo, per favore.","Lo sviluppo è un verbo irregolare.","Lo sviluppo economico crea lavoro."],
       ans:"Lo sviluppo economico crea lavoro.",
       hint:"One option uses the right article AND builds a meaningful civic phrase about growth and jobs. Eliminate the grammar errors and nonsense options first."}
    ]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH5_L02,
  BATCH5_L01,
  BATCH2_L02,
  BATCH2_L01,
  EXP_L4,
  EXP_L5,
  EXP_L6
, COVERAGE_U14]
};
export default UNIT_14;
