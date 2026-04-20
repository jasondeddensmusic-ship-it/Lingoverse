// Batch 6 — Unit 14 extra lesson. Il mondo del lavoro: Office & Workplace
const BATCH6_L1 = {id:"itv2_u14l_b6_1", title:"La vita in ufficio", icon:"\u{1F4BC}", xp:15, board:true, steps:[
{type:"intro", title:"La vita in ufficio",
 desc:"Learn vocabulary for the modern workplace, office equipment, and professional interactions.",
 goals:["Name office equipment and spaces","Discuss workplace routines","Handle professional communication"]},

{type:"teach", trg:"la scrivania", src:"the desk", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scrivanie.\nFrom 'scrivere' (to write). Where you work in an office.",
 example:"A: La mia scrivania e vicino alla finestra.\nB: Che fortuna, hai la luce naturale.",
 exampleSrc:"A: My desk is near the window.\nB: Lucky you, you have natural light.",
 funFact:"'Scrivania' literally means 'writing place.' In modern offices, 'hot desking' is called 'scrivania condivisa' (shared desk), a concept many Italians resist."},

{type:"teach", trg:"la stampante", src:"the printer", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le stampanti.\nFrom 'stampare' (to print).",
 example:"A: La stampante non funziona di nuovo.\nB: Prova a spegnerla e riaccenderla.",
 exampleSrc:"A: The printer is not working again.\nB: Try turning it off and on again.",
 funFact:"The classic office frustration is universal. 'La stampante e sempre rotta' (the printer is always broken) is an Italian workplace truth."},

{type:"teach", trg:"la riunione", src:"the meeting", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le riunioni.\nFrom 'riunire' (to gather). Formal business meeting.",
 example:"A: La riunione e alle dieci in sala conferenze.\nB: Porto il mio computer?",
 exampleSrc:"A: The meeting is at ten in the conference room.\nB: Should I bring my computer?",
 funFact:"Italian meetings often start late and run long. 'Riunione' implies a formal gathering; 'incontro' is more casual. Coffee breaks during meetings are sacred."},

{type:"teach", trg:"il collega", src:"the colleague", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la collega. Plural: i colleghi / le colleghe.\nFrom Latin 'collega.'",
 example:"A: I miei colleghi sono molto simpatici.\nB: Siete un bel gruppo!",
 exampleSrc:"A: My colleagues are very friendly.\nB: You are a great group!",
 funFact:"In Italian offices, colleagues often greet each other with a kiss on both cheeks, even in professional settings. This surprises many international workers."},

{type:"teach", trg:"il capo", src:"the boss / head", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la capa (informal). Plural: i capi.\nAlso means 'head' or 'chief.'",
 example:"A: Il capo vuole parlare con te.\nB: Adesso? Cosa ho fatto?",
 exampleSrc:"A: The boss wants to talk to you.\nB: Now? What did I do?",
 funFact:"'Capo' has many compounds: 'capoufficio' (office manager), 'capocuoco' (head chef), 'capotreno' (train conductor). 'Capodanno' (New Year) means 'head of the year.'"},

{type:"teach", trg:"la fotocopiatrice", src:"the photocopier", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fotocopiatrici.\n'Fare una fotocopia' = to make a photocopy.",
 example:"A: Posso usare la fotocopiatrice?\nB: Certo, la carta e nel cassetto.",
 exampleSrc:"A: May I use the photocopier?\nB: Of course, the paper is in the drawer.",
 funFact:"Despite digitalization, Italian bureaucracy still loves paper. 'Fare fotocopie' (making photocopies) remains a daily office activity in many Italian workplaces."},

{type:"teach", trg:"la pratica", src:"the file / case / paperwork", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pratiche.\nBureaucratic paperwork or a professional case/file.",
 example:"A: Devo chiudere questa pratica entro venerdì.\nB: Hai bisogno di aiuto?",
 exampleSrc:"A: I need to close this file by Friday.\nB: Do you need help?",
 funFact:"'Pratica' in an office means a bureaucratic file or case. 'Sbrigare le pratiche' (to handle the paperwork) is a dreaded but essential part of Italian professional life."},

{type:"teach", trg:"il fascicolo", src:"the dossier / folder", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i fascicoli.\nA physical or metaphorical collection of documents.",
 example:"A: Metti questi documenti nel fascicolo.\nB: In quale cartella?",
 exampleSrc:"A: Put these documents in the folder.\nB: In which binder?",
 funFact:"'Fascicolo' comes from 'fascio' (bundle). In publishing, a 'fascicolo' is also an issue/installment of a periodical."},

{type:"teach", trg:"la scadenza", src:"the deadline / expiry date", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scadenze.\nFrom 'scadere' (to expire). Used for deadlines and expiry.",
 example:"A: Qual e la scadenza del progetto?\nB: Il trenta del mese.",
 exampleSrc:"A: What is the project deadline?\nB: The thirtieth of the month.",
 funFact:"'Scadenza' is used for both work deadlines and expiry dates on food ('data di scadenza'). Italian yogurt expires, and so do your projects."},

{type:"teach", trg:"promuovere", src:"to promote", pos:"verb", gender:null,
 note:"Irregular -ere verb. promuovo, promuovi, promuove.\nPast participle: promosso.",
 example:"A: Mi hanno promosso a direttore!\nB: Congratulazioni! Lo meriti.",
 exampleSrc:"A: I was promoted to director!\nB: Congratulations! You deserve it.",
 funFact:"'Promosso' in school means you passed to the next grade. 'Bocciato' is the opposite: failed/held back. At work, 'promuovere' means a career promotion."},

{type:"teach", trg:"licenziare", src:"to fire / to dismiss", pos:"verb", gender:null,
 note:"Regular -are verb. licenzio, licenzi, licenzia.\nTo terminate someone's employment.",
 example:"A: L'hanno licenziato senza preavviso.\nB: Che brutta situazione.",
 exampleSrc:"A: They fired him without notice.\nB: What a bad situation.",
 funFact:"Italian labor law makes it very difficult to 'licenziare' employees. The 'Statuto dei Lavoratori' (Workers' Statute) from 1970 provides strong protections."},

{type:"teach", trg:"dimettersi", src:"to resign", pos:"verb", gender:null,
 note:"Reflexive -ere verb. mi dimetto, ti dimetti, si dimette.\nTo voluntarily leave a job.",
 example:"A: Si e dimesso per motivi personali.\nB: Aveva già trovato un altro lavoro?",
 exampleSrc:"A: He resigned for personal reasons.\nB: Had he already found another job?",
 funFact:"'Dare le dimissioni' (to hand in one's resignation) is the formal expression. In politics, 'dimettersi' is a common and often dramatic headline."},

{type:"teach", trg:"il sindacato", src:"the trade union", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sindacati.\nLabor unions are powerful in Italian work culture.",
 example:"A: Il sindacato ha proclamato uno sciopero.\nB: Per quanti giorni?",
 exampleSrc:"A: The union has called a strike.\nB: For how many days?",
 funFact:"Italy has some of the strongest unions in Europe. The three main confederations (CGIL, CISL, UIL) regularly organize 'scioperi' (strikes) that affect transport and services."},

{type:"teach", trg:"lo sciopero", src:"the strike", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scioperi.\n'Fare sciopero' or 'scioperare' = to go on strike.",
 example:"A: Domani c'e uno sciopero dei trasporti.\nB: Devo andare al lavoro in macchina.",
 exampleSrc:"A: Tomorrow there is a transport strike.\nB: I have to drive to work.",
 funFact:"Transport strikes are common in Italy, especially on Fridays. 'Sciopero a singhiozzo' (hiccup strike) means intermittent work stoppages throughout the day."},

{type:"mc", q:"Come si dice 'deadline' in italiano?",
 opts:["la scadenza","la riunione","la pratica","la scrivania"],
 ans:"la scadenza",
 hint:"Also used for expiry dates on food. From 'scadere' (to expire)."},

{type:"fb", s:"Mi hanno {1} a direttore del reparto.", a:["promosso"],
 opts:["promosso","licenziato","dimesso","scioperato"],
 hint:"Past participle meaning you received a career advancement. Good news!",
 sSrc:"I was {1} to department director."},

{type:"match", pairs:[
 {trg:"la scrivania", src:"desk"},
 {trg:"la riunione", src:"meeting"},
 {trg:"il collega", src:"colleague"},
 {trg:"il capo", src:"boss"}
]},

{type:"mc", q:"Cosa fa il sindacato quando i lavoratori non sono soddisfatti?",
 opts:["Proclama uno sciopero","Promuove il capo","Chiude la pratica","Stampa i documenti"],
 ans:"Proclama uno sciopero",
 hint:"The organized action where workers stop working to demand better conditions."},

{type:"fb", s:"Si e {1} dal suo incarico per motivi personali.", a:["dimesso"],
 opts:["dimesso","licenziato","promosso","scioperato"],
 hint:"Past participle of the reflexive verb meaning 'to resign.' A voluntary departure.",
 sSrc:"He {1} from his position for personal reasons."},

{type:"mc", q:"Cosa significa 'sbrigare le pratiche'?",
 opts:["to handle the paperwork","to attend a meeting","to fire an employee","to go on strike"],
 ans:"to handle the paperwork",
 hint:"Dealing with bureaucratic files and documents. A common Italian office activity."},

{type:"fb", s:"La {1} non funziona, devo stampare questi documenti!", a:["stampante"],
 opts:["stampante","fotocopiatrice","scrivania","pratica"],
 hint:"The machine that produces paper copies from a computer. Universal office frustration.",
 sSrc:"The {1} is not working, I need to print these documents!"},

{type:"match", pairs:[
 {trg:"licenziare", src:"to fire"},
 {trg:"dimettersi", src:"to resign"},
 {trg:"promuovere", src:"to promote"},
 {trg:"lo sciopero", src:"strike"}
]}
,{type:"match",pairs:[{trg:"la fotocopiatrice",src:"the photocopier"},{trg:"il fascicolo",src:"the dossier / folder"},{trg:"il sindacato",src:"the trade union"}]},
{type:"fb",s:"La {1} era piena di scartoffie e documenti.",a:["scrivania"],opts:["scrivania","stampante","fotocopiatrice","riunione"],hint:"A desk in an office where one works and keeps papers.",sSrc:"The {1} was full of paperwork and documents."}]};
export default BATCH6_L1;
