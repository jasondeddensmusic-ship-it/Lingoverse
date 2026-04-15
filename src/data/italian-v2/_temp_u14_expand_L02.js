// Unit 14 Expansion — Lesson 5: Workplace Culture
const LESSON_5 = {
  id:"itv2_u14l5", title:"La cultura aziendale", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"La cultura aziendale",
     desc:"Understand Italian workplace culture: formality levels, lunch rituals, vacation rights, and the work-life balance Italians value. These cultural norms shape daily office life.",
     goals:["Discuss Italian workplace customs","Understand formality and hierarchy at work","Talk about work-life balance in Italian"]},

    {type:"teach", trg:"dare del Lei", src:"to address formally (using Lei)", pos:"verb", gender:null,
     note:"'Dare del Lei' = formal address. Opposite: 'dare del tu.'\n'Lei' (you, formal) is standard in workplaces.",
     example:"A: Devo dare del Lei al direttore?\nB: Si, finche non ti dice di dargli del tu.",
     exampleSrc:"A: Should I address the director formally?\nB: Yes, until he tells you to use the informal.",
     funFact:"Italian workplaces default to 'Lei' (formal you) between strangers, superiors, and clients. The shift from 'Lei' to 'tu' is a social milestone: the senior person must offer it. Saying 'Diamoci del tu' (Let's use tu) signals acceptance. Using 'tu' prematurely is a serious social error."},

    {type:"teach", trg:"la pausa pranzo", src:"the lunch break", pos:"noun", gender:"f",
     note:"Feminine. 'Pausa' = break. 'Pranzo' = lunch.\nTypically 1 to 2 hours in Italy.",
     example:"A: Quanto dura la pausa pranzo?\nB: Un'ora. Andiamo al bar qui sotto?",
     exampleSrc:"A: How long is the lunch break?\nB: One hour. Shall we go to the bar downstairs?",
     funFact:"The Italian lunch break is sacred. Many workers leave the office to eat at a trattoria or bar. Eating at your desk ('mangiare alla scrivania') is frowned upon. In southern Italy, some businesses still close for 2-3 hours at midday, a tradition linked to the afternoon heat."},

    {type:"teach", trg:"le ferie", src:"the vacation / annual leave", pos:"noun", gender:"f",
     note:"Feminine plural. Always plural in this meaning.\n'Andare in ferie' = to go on vacation (from work).",
     example:"A: Quando vai in ferie?\nB: Ad agosto. Due settimane al mare.",
     exampleSrc:"A: When do you go on vacation?\nB: In August. Two weeks at the seaside.",
     funFact:"Italian workers are entitled to a minimum of 4 weeks paid vacation per year. August is traditionally vacation month: many businesses close entirely for 'Ferragosto' (August 15). The week around Ferragosto sees mass migration to beaches and mountains. Italian highways are famously gridlocked."},

    {type:"teach", trg:"il turno", src:"the shift", pos:"noun", gender:"m",
     note:"Masculine. 'Lavorare a turni' = to work shifts.\n'Turno di notte' = night shift.",
     example:"A: Fai il turno di notte questa settimana?\nB: Si, dalle dieci di sera alle sei di mattina.",
     exampleSrc:"A: Are you working the night shift this week?\nB: Yes, from ten at night to six in the morning.",
     funFact:"Shift work ('lavoro a turni') is common in healthcare, manufacturing, and services. Italian labor law provides extra compensation for night shifts ('indennita notturna') and limits to weekly hours. Workers cannot be forced into permanent night shifts without agreement."},

    {type:"teach", trg:"lo straordinario", src:"overtime", pos:"noun", gender:"m",
     note:"Masculine. 'Fare lo straordinario' = to work overtime.\nLiterally 'the extraordinary (work).'",
     example:"A: Fai spesso lo straordinario?\nB: Troppo spesso. Questa settimana ho fatto dieci ore in piu.",
     exampleSrc:"A: Do you often work overtime?\nB: Too often. This week I worked ten extra hours.",
     funFact:"Italian overtime ('straordinario') is regulated by law. It must be paid at higher rates: typically 25-50% more than normal hourly pay. Annual overtime is capped at 250 hours. Italian unions ('sindacati') are strong advocates for limiting overtime and protecting workers' rest time."},

    {type:"teach", trg:"il sindacato", src:"the labor union", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'syndikos' (advocate).\nItaly has three major union confederations: CGIL, CISL, UIL.",
     example:"A: Sei iscritto al sindacato?\nB: Si, alla CGIL. Ci proteggono bene.",
     exampleSrc:"A: Are you a union member?\nB: Yes, in CGIL. They protect us well.",
     funFact:"Italy has strong labor unions with deep political roots. CGIL (left-leaning), CISL (Catholic), and UIL (social-democratic) represent millions of workers. Italian strikes ('scioperi') are frequent and constitutionally protected. Transport strikes affecting trains and buses are a regular part of Italian life."},

    {type:"teach", trg:"il permesso", src:"the leave / permission", pos:"noun", gender:"m",
     note:"Masculine. 'Chiedere un permesso' = to request leave.\n'Permesso retribuito' = paid leave.",
     example:"A: Devo chiedere un permesso per domani.\nB: Per motivi personali o medici?",
     exampleSrc:"A: I need to request leave for tomorrow.\nB: For personal or medical reasons?",
     funFact:"Italian workers have various types of 'permessi': medical ('permesso medico'), parental ('congedo parentale'), bereavement ('permesso per lutto'), and study leave ('permesso per studio'). Italy offers relatively generous parental leave compared to many countries."},

    {type:"teach", trg:"il lavoro da remoto", src:"remote work", pos:"noun", gender:"m",
     note:"Masculine. Also: 'lo smart working' (widely used English loan).\n'Lavorare da casa' = to work from home.",
     example:"A: Lavori da remoto?\nB: Si, tre giorni a casa e due in ufficio.",
     exampleSrc:"A: Do you work remotely?\nB: Yes, three days at home and two in the office.",
     funFact:"'Smart working' is the term Italians adopted for remote work, though linguists prefer 'lavoro agile' or 'lavoro da remoto.' Remote work exploded in Italy during 2020, but adoption was slower than in northern Europe. Many Italian managers prefer in-person oversight ('presenzialismo')."},

    // Quiz steps
    {type:"mc", q:"What does 'dare del Lei' mean in the workplace?",
     opts:["To give your name to a colleague","To address someone using the formal 'you'","To introduce yourself at a company meeting","To hand over a document to a superior"],
     ans:"To address someone using the formal 'you'",
     hint:"'Lei' is the formal second person pronoun. Using it shows respect for hierarchy and distance until familiarity is offered."},

    {type:"fb", s:"Quanto dura la {1} pranzo nel tuo ufficio?",
     a:["pausa"],
     opts:["pausa","ferie","turno","riunione"],
     hint:"This is the midday break for eating. In Italy it typically lasts one to two hours.",
     sSrc:"How long is the lunch {1} at your office?"},

    {type:"match", pairs:[
      {trg:"le ferie", src:"the vacation / annual leave"},
      {trg:"il turno", src:"the shift"},
      {trg:"lo straordinario", src:"overtime"},
      {trg:"il sindacato", src:"the labor union"},
      {trg:"il permesso", src:"the leave / permission"}
    ]},

    {type:"mc", q:"When do most Italians take their main vacation?",
     opts:["December for Christmas","March for Easter","August around Ferragosto","January for New Year"],
     ans:"August around Ferragosto",
     hint:"Many businesses close entirely around August 15. Italian highways are famously gridlocked as people migrate to the coast."},

    {type:"fb", s:"Sei iscritto al {1}?",
     a:["sindacato"],
     opts:["sindacato","contratto","turno","ufficio"],
     hint:"This organization represents and protects workers' rights. Italy has three major confederations: CGIL, CISL, UIL.",
     sSrc:"Are you a member of the {1}?"},

    {type:"mc", q:"What do Italians call remote work using an English loanword?",
     opts:["Home office","Telework","Smart working","Online job"],
     ans:"Smart working",
     hint:"Although linguists prefer 'lavoro agile' or 'lavoro da remoto,' Italians widely adopted this English phrase for the concept."},

    {type:"fb", s:"Questa settimana ho fatto dieci ore di {1}.",
     a:["straordinario"],
     opts:["straordinario","permesso","turno","ferie"],
     hint:"You worked extra hours beyond your normal schedule. This word literally means 'the extraordinary.'",
     sSrc:"This week I worked ten hours of {1}."},

    {type:"mc", q:"What is 'il permesso retribuito'?",
     opts:["Unpaid personal time off","Paid leave from work","A parking permit for staff","A written work authorization"],
     ans:"Paid leave from work",
     hint:"'Retribuito' means 'paid.' This leave is for medical, family, or other reasons, and the worker still receives salary."}
  ]
};
export default LESSON_5;
