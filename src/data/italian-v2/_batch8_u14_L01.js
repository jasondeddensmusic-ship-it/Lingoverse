// Batch 8 — Unit 14 extra lesson. Work: Workplace Communication
const BATCH8_L1 = {id:"itv2_u14l_b8_1", title:"Comunicare al lavoro", icon:"📧", xp:15, board:true, steps:[
{type:"intro", title:"Comunicare al lavoro",
 desc:"Learn essential vocabulary for workplace communication, meetings, and professional interaction.",
 goals:["Write and discuss professional emails","Participate in meetings","Use formal workplace language"]},

{type:"teach", trg:"la riunione", src:"the meeting", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fissare una riunione' = to schedule a meeting.\nMore formal than 'incontro.'",
 example:"A: Abbiamo una riunione alle dieci.\nB: Di che argomento?",
 exampleSrc:"A: We have a meeting at ten.\nB: About what topic?",
 funFact:"Italian meetings often start late and include espresso. 'Riunione fiume' (river meeting) describes an endlessly long meeting that flows on and on."},

{type:"teach", trg:"l'allegato", src:"the attachment (email)", pos:"noun", gender:"m",
 note:"Masculine noun. 'In allegato' = attached.\n'Allegare' = to attach (a file).",
 example:"A: Trova il documento in allegato.\nB: Ricevuto, grazie.",
 exampleSrc:"A: You will find the document attached.\nB: Received, thank you.",
 funFact:"Italian business emails follow strict formulas. 'In allegato alla presente' (attached to the present letter) is the formal way to say 'please find attached.'"},

{type:"teach", trg:"il collega", src:"the colleague", pos:"noun", gender:"m",
 note:"Masculine: il collega. Feminine: la collega.\nPlural: i colleghi / le colleghe.",
 example:"A: Conosci il nuovo collega?\nB: Si, e molto simpatico.",
 exampleSrc:"A: Do you know the new colleague?\nB: Yes, he is very nice.",
 funFact:"'Collega' ends in -a but is masculine. Italian has several masculine nouns ending in -a from Greek: il problema, il tema, il cinema, il collega."},

{type:"teach", trg:"lo straordinario", src:"the overtime", pos:"noun", gender:"m",
 note:"Masculine noun. Also adjective: extraordinary.\n'Fare lo straordinario' = to work overtime.",
 example:"A: Devo fare lo straordinario stasera.\nB: Di nuovo? Dovresti parlare con il capo.",
 exampleSrc:"A: I have to work overtime tonight.\nB: Again? You should talk to the boss.",
 funFact:"Italian labor law strictly regulates overtime. Workers cannot exceed 250 hours of overtime per year. 'Straordinario' literally means 'beyond the ordinary.'"},

{type:"teach", trg:"la scadenza", src:"the deadline", pos:"noun", gender:"f",
 note:"Feminine noun. 'Rispettare la scadenza' = to meet the deadline.\nFrom 'scadere' (to expire).",
 example:"A: Qual e la scadenza per il progetto?\nB: Venerdi prossimo, senza proroghe.",
 exampleSrc:"A: What is the deadline for the project?\nB: Next Friday, no extensions.",
 funFact:"'Scadenza' also appears on food packaging as the expiry date. 'Data di scadenza' applies to yogurt and work deadlines alike."},

{type:"teach", trg:"il fatturato", src:"the revenue / turnover", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fatturato annuale' = annual revenue.\n'La fattura' = the invoice.",
 example:"A: Il fatturato e aumentato del dieci per cento.\nB: Ottima notizia per l'azienda!",
 exampleSrc:"A: Revenue increased by ten percent.\nB: Great news for the company!",
 funFact:"In Italy, issuing a 'fattura' (invoice) is mandatory for businesses. The 'fattura elettronica' (electronic invoice) became mandatory in 2019."},

{type:"teach", trg:"la sede", src:"the headquarters / office location", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sede centrale' = main headquarters.\n'Sede legale' = registered office.",
 example:"A: Dov'e la sede dell'azienda?\nB: A Milano, in zona Porta Nuova.",
 exampleSrc:"A: Where is the company headquarters?\nB: In Milan, in the Porta Nuova area.",
 funFact:"Milan is Italy's business capital. Many companies have their 'sede legale' in Milan for tax and prestige reasons, even if they operate elsewhere."},

{type:"teach", trg:"il sindacato", src:"the trade union", pos:"noun", gender:"m",
 note:"Masculine noun. 'Iscriversi al sindacato' = to join the union.\nVery powerful in Italy.",
 example:"A: Sei iscritto al sindacato?\nB: Si, alla CGIL.",
 exampleSrc:"A: Are you a union member?\nB: Yes, with the CGIL.",
 funFact:"Italy has three major trade unions: CGIL, CISL, and UIL. Union membership is very common, and strikes ('scioperi') are a regular part of Italian life."},

{type:"teach", trg:"il turno", src:"the shift (work)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Turno di notte' = night shift.\n'A turno' = in turns/taking turns.",
 example:"A: Che turno fai domani?\nB: Il turno di notte, dalle dieci alle sei.",
 exampleSrc:"A: What shift do you work tomorrow?\nB: The night shift, from ten to six.",
 funFact:"'A turno' also means 'taking turns' in everyday life. Children play 'a turno,' people speak 'a turno.' It is the basic principle of fairness."},

{type:"mc",
 q:"What is a 'riunione fiume'?",
 opts:["An endlessly long meeting","A meeting by the river","A quick stand-up meeting","A video conference"],
 ans:"An endlessly long meeting",
 hint:"'Fiume' means river. This type of m... flows on and on like a river, seemingly without end."},

{type:"match", pairs:[
  {trg:"la scadenza", src:"the deadline"},
  {trg:"l'allegato", src:"the attachment"},
  {trg:"il fatturato", src:"the revenue"},
  {trg:"il sindacato", src:"the trade union"}
]},

{type:"fb",
 s:"Trova il documento in {1} alla email.",
 a:["allegato"],
 opts:["allegato","collega","fatturato","turno"],
 hint:"This word describes a file sent along with an email. It is 'joined' to the message.",
 sSrc:"You will find the document {1} to the email."},

{type:"mc",
 q:"Why is 'collega' unusual in Italian grammar?",
 opts:["It ends in -a but is masculine","It has no plural form","It is always feminine","It is only used formally"],
 ans:"It ends in -a but is masculine",
 hint:"Most Italian words ending in -a are feminine, but this one comes from Greek and is m.... Il collega."},

{type:"fb",
 s:"Devo fare lo {1} stasera, torno tardi.",
 a:["straordinario"],
 opts:["straordinario","sindacato","turno","fatturato"],
 hint:"This word means overtime work. Literally, work that goes 'beyond the ordinary' hours.",
 sSrc:"I have to work {1} tonight, I will be back late."},

{type:"mc",
 q:"What became mandatory for Italian businesses in 2019?",
 opts:["Fattura elettronica (electronic invoicing)","Email communication","Overtime limits","Union membership"],
 ans:"Fattura elettronica (electronic invoicing)",
 hint:"Italy digitized its billing process in 2019 to combat tax evasion. This digital mandate applies to all businesses."}
,{type:"match",pairs:[{trg:"la riunione",src:"the meeting"},{trg:"la sede",src:"the headquarters / office location"}]}]};
export default BATCH8_L1;
