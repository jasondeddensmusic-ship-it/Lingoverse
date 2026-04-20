// Unit 14 Batch2. Lesson 1: Contracts, Meetings & Professional Development
const BATCH2_U14_L1 = {
  id:"itv2_u14l_b2_1", title:"Riunioni e contratti", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Riunioni e contratti",
     desc:"Deepen your workplace Italian with vocabulary for meetings, contracts, and professional growth. These terms are essential for anyone working in an Italian business environment.",
     goals:["Discuss contract terms and conditions","Navigate meetings in Italian","Talk about professional development"]},

    {type:"teach", trg:"l'ordine del giorno", src:"the agenda (of a meeting)", pos:"noun", gender:"m",
     note:"Masculine. Literally 'the order of the day.'\nSets the topics for discussion in a meeting.",
     example:"A: Qual e l'ordine del giorno?\nB: Parliamo del budget e del nuovo progetto.",
     exampleSrc:"A: What is the agenda?\nB: We are discussing the budget and the new project.",
     funFact:"'L'ordine del giorno' is used in both business and politics. In Parliament, it refers to the official list of topics to be debated. In offices, the person who sets the 'ordine del giorno' controls the meeting. Italians often joke that meetings never follow the agenda."},

    {type:"teach", trg:"il verbale", src:"the minutes (of a meeting)", pos:"noun", gender:"m",
     note:"Masculine. 'Redigere il verbale' = to write up the minutes.\nFrom 'verbale' (verbal, relating to words).",
     example:"A: Chi scrive il verbale oggi?\nB: Tocca a me. Prendo appunti.",
     exampleSrc:"A: Who writes the minutes today?\nB: It is my turn. I will take notes.",
     funFact:"The 'verbale' is the official written record of a meeting. In Italian law and business, it has legal value. 'Mettere a verbale' (to put on record) means to officially note something. The 'verbale di assemblea' (assembly minutes) is required for corporate governance."},

    {type:"teach", trg:"la clausola", src:"the clause (contract)", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'clausula' (conclusion, clause).\n'Clausola risolutiva' = termination clause.",
     example:"A: Hai letto tutte le clausole del contratto?\nB: Si, c'è una clausola sul preavviso.",
     exampleSrc:"A: Did you read all the clauses of the contract?\nB: Yes, there is a clause about the notice period.",
     funFact:"Italian contracts are known for their detail. Common clauses include 'clausola di riservatezza' (confidentiality clause), 'clausola di non concorrenza' (non-compete clause), and 'clausola penale' (penalty clause). Reading every clausola is strongly recommended before signing anything in Italy."},

    {type:"teach", trg:"la formazione", src:"the training / professional development", pos:"noun", gender:"f",
     note:"Feminine. From 'formare' (to form, to train).\n'Corso di formazione' = training course.",
     example:"A: L'azienda offre formazione continua?\nB: Si, ogni anno abbiamo corsi di formazione.",
     exampleSrc:"A: Does the company offer ongoing training?\nB: Yes, every year we have training courses.",
     funFact:"'Formazione' in Italian covers both education and professional training. 'Formazione professionale' (vocational training) is a major part of the Italian education system. Italian companies are required by law to invest in employee training. Tax incentives encourage 'formazione continua' (continuing education)."},

    {type:"teach", trg:"il preavviso", src:"the notice period", pos:"noun", gender:"m",
     note:"Masculine. Pre (before) + avviso (notice).\n'Dare il preavviso' = to give notice.",
     example:"A: Quanto e il preavviso?\nB: Due mesi per il mio contratto.",
     exampleSrc:"A: How long is the notice period?\nB: Two months for my contract.",
     funFact:"Italian labor law requires both employer and employee to give advance notice before ending employment. The length depends on seniority and contract type: typically 15 days to 4 months. Not respecting the 'preavviso' results in a financial penalty equal to the salary for that period."},

    {type:"teach", trg:"la retribuzione", src:"the pay / remuneration", pos:"noun", gender:"f",
     note:"Feminine. More formal than 'stipendio.' From Latin 'retribuere.'\n'Retribuzione lorda' = gross pay. 'Retribuzione netta' = net pay.",
     example:"A: La retribuzione e adeguata?\nB: La retribuzione netta e di millecinquecento euro.",
     exampleSrc:"A: Is the pay adequate?\nB: The net pay is fifteen hundred euros.",
     funFact:"'Retribuzione' is the formal term for pay in contracts and law. 'Stipendio' is the everyday word. Italian pay slips ('buste paga') are notoriously complex, showing gross pay, social security contributions, tax deductions, and net pay. The difference between gross and net can exceed 40%."},

    {type:"teach", trg:"il tirocinio", src:"the internship / traineeship", pos:"noun", gender:"m",
     note:"Masculine. Formal Italian for internship (vs. 'lo stage,' French loan).\nFrom Greek 'teiron' (beginner).",
     example:"A: Il tirocinio dura sei mesi.\nB: E retribuito o gratuito?",
     exampleSrc:"A: The internship lasts six months.\nB: Is it paid or unpaid?",
     funFact:"'Tirocinio' is the proper Italian term, while 'stage' (French) is more common in speech. Italian law now requires most internships to be paid ('tirocinio retribuito'), though compensation is often minimal. 'Tirocinio curriculare' is part of university programs; 'tirocinio extracurriculare' is post-graduation."},

    {type:"teach", trg:"la busta paga", src:"the pay slip / paycheck", pos:"noun", gender:"f",
     note:"Feminine. Literally 'the pay envelope.'\n'Leggere la busta paga' = to read the pay slip.",
     example:"A: Hai ricevuto la busta paga?\nB: Si, ma non capisco tutte le voci.",
     exampleSrc:"A: Did you receive the pay slip?\nB: Yes, but I don't understand all the items.",
     funFact:"The Italian 'busta paga' is a detailed document showing every deduction. Italians joke that reading one requires an accounting degree. Key lines: 'retribuzione lorda' (gross), 'contributi INPS' (social security), 'IRPEF' (income tax), 'retribuzione netta' (net). Understanding your busta paga is an essential life skill."},

    {type:"teach", trg:"il congedo", src:"the leave (official)", pos:"noun", gender:"m",
     note:"Masculine. 'Congedo parentale' = parental leave.\n'Congedo di maternita' = maternity leave.",
     example:"A: Ha preso il congedo parentale?\nB: Si, tre mesi per stare con il bambino.",
     exampleSrc:"A: Did he take parental leave?\nB: Yes, three months to be with the baby.",
     funFact:"Italy offers generous parental leave: 5 months mandatory maternity leave ('congedo di maternita') at 80% pay, plus optional parental leave ('congedo parentale') for both parents. 'Congedo di paternita' (paternity leave) has been expanded to 10 days. The system reflects Italy's family-focused culture."},

    {type:"teach", trg:"il beneficio aziendale", src:"the company benefit / perk", pos:"noun", gender:"m",
     note:"Masculine. 'Beneficio' = benefit. 'Aziendale' = company-related.\n'Welfare aziendale' = employee benefits package.",
     example:"A: Quali benefici aziendali offrite?\nB: Buoni pasto, assicurazione sanitaria e palestra.",
     exampleSrc:"A: What company benefits do you offer?\nB: Meal vouchers, health insurance, and gym.",
     funFact:"Italian company benefits ('welfare aziendale') commonly include 'buoni pasto' (meal vouchers, tax-free up to a limit), private health insurance supplements, and company cars for managers. The 'buono pasto' is almost universal in Italian offices and can be used at restaurants and supermarkets."},

    {type:"teach", trg:"l'aumento", src:"the raise / increase", pos:"noun", gender:"m",
     note:"Masculine. From 'aumentare' (to increase).\n'Chiedere un aumento' = to ask for a raise.",
     example:"A: Ho chiesto un aumento al capo.\nB: E come e andata? Te l'ha dato?",
     exampleSrc:"A: I asked the boss for a raise.\nB: And how did it go? Did he give it to you?",
     funFact:"Asking for a raise ('chiedere un aumento') in Italy often involves navigating the national collective labor agreements ('CCNL'). These agreements set minimum pay by sector and job level. Individual raises beyond the CCNL minimum are called 'superminimo' and are negotiated personally."},

    // Quiz steps
    {type:"mc", q:"What is 'l'ordine del giorno' in a meeting?",
     opts:["The daily schedule for the office","The agenda listing topics for the meeting","The seating arrangement for attendees","The order in which people speak"],
     ans:"The agenda listing topics for the meeting",
     hint:"Literally 'the order of the day.' It lists what will be discussed and in what sequence during the m...."},

    {type:"fb", s:"Hai letto tutte le {1} del contratto?",
     a:["clausole"],
     opts:["clausole","riunioni","buste","formazioni"],
     hint:"These are the specific terms and conditions written into the contract. Each one sets a rule or obligation.",
     sSrc:"Did you read all the {1} of the contract?"},

    {type:"match", pairs:[
      {trg:"il verbale", src:"the minutes"},
      {trg:"la clausola", src:"the clause"},
      {trg:"il preavviso", src:"the notice period"},
      {trg:"la busta paga", src:"the pay slip"},
      {trg:"il congedo", src:"the leave (official)"}
    ]},

    {type:"mc", q:"What is 'la retribuzione netta'?",
     opts:["The gross salary before deductions","The net pay after taxes and contributions","The overtime bonus payment","The annual holiday bonus"],
     ans:"The net pay after taxes and contributions",
     hint:"'Netta' means n... or clean. This is what actually lands in your bank account a... all deductions are removed."},

    {type:"fb", s:"L'azienda offre {1} continua ai dipendenti.",
     a:["formazione"],
     opts:["formazione","retribuzione","riunione","promozione"],
     hint:"The company provides ongoing professional development and training courses for its employees.",
     sSrc:"The company offers ongoing {1} to employees."},

    {type:"mc", q:"What are 'buoni pasto'?",
     opts:["Company parking passes for employees","Meal vouchers as a company benefit","Annual performance bonuses","Extra vacation day coupons"],
     ans:"Meal vouchers as a company benefit",
     hint:"These tax-free v... are part of 'welfare aziendale.' Employees use them at restaurants and supermarkets for meals."},

    {type:"fb", s:"Ho chiesto un {1} al capo.",
     a:["aumento"],
     opts:["aumento","congedo","permesso","colloquio"],
     hint:"You want a higher salary. This noun means 'raise' or 'increase' and comes from 'aumentare.'",
     sSrc:"I asked the boss for a {1}."},

    {type:"mc", q:"What is the difference between 'tirocinio' and 'stage'?",
     opts:["They mean completely different things","Tirocinio is formal Italian, stage is a French loanword for the same concept","Tirocinio is paid, stage is always unpaid","Stage is only for students, tirocinio is only for graduates"],
     ans:"Tirocinio is formal Italian, stage is a French loanword for the same concept",
     hint:"Both mean 'internship.' 'T...' is the proper I... word from Greek roots. 'S...' (pronounced 'stazh') comes from F...."}
  ,{type:"match",pairs:[{trg:"la retribuzione",src:"the pay / remuneration"},{trg:"il tirocinio",src:"the internship / traineeship"},{trg:"il beneficio aziendale",src:"the company benefit / perk"}]},{type:"mc",q:"How do you say \"agenda\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'ordine del giorno"],ans:"l'ordine del giorno",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"La {1} mostra lo stipendio netto e le detrazioni.",a:["busta paga"],opts:["busta paga","formazione","clausola","retribuzione"],hint:"A monthly document showing net pay and deductions.",sSrc:"The {1} shows the net salary and deductions."}]
};
export default BATCH2_U14_L1;
