// Batch 6. Unit 06 extra lesson. In città: Public Services & Emergencies
const BATCH6_L1 = {id:"itv2_u06l_b6_1", title:"I servizi pubblici (II)", icon:"\u{1F3E5}", xp:15, board:true, steps:[
{type:"intro", title:"I servizi pubblici",
 desc:"Learn essential vocabulary for public services, emergencies, and getting help in Italian cities.",
 goals:["Ask for help at a police station","Describe an emergency","Navigate public service offices"]},

{type:"teach", trg:"la questura", src:"the police headquarters", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le questure.\nThe main police office in each city. Handles permits and reports.",
 example:"A: Devo andare alla questura per il permesso di soggiorno.\nB: E in centro, vicino alla stazione.",
 exampleSrc:"A: I need to go to the police headquarters for my residence permit.\nB: It is in the center, near the station.",
 funFact:"Every Italian city has a questura headed by a questore. Foreigners visit it for residence permits, while Italians go for passport applications."},

{type:"teach", trg:"la denuncia", src:"the report / complaint", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le denunce.\nAn official report filed at a police station.",
 example:"A: Voglio fare una denuncia.\nB: Per quale motivo, signore?",
 exampleSrc:"A: I want to file a report.\nB: For what reason, sir?",
 funFact:"'Fare una denuncia' is the standard expression for filing a police report. You can also 'sporgere denuncia' (lodge a complaint) in more formal language."},

{type:"teach", trg:"il vigile", src:"the traffic officer / city police", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la vigile. Plural: i vigili.\nLocal police who handle traffic and bylaws.",
 example:"A: Il vigile mi ha dato una multa.\nB: Per cosa? Divieto di sosta?",
 exampleSrc:"A: The traffic officer gave me a fine.\nB: For what? No parking?",
 funFact:"Italy has multiple police forces: Polizia di Stato (national), Carabinieri (military police), Vigili Urbani (city police), and Guardia di Finanza (financial police)."},

{type:"teach", trg:"la multa", src:"the fine / ticket", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le multe.\nA penalty for traffic or parking violations.",
 example:"A: Ho preso una multa per eccesso di velocita.\nB: Quanto devi pagare?",
 exampleSrc:"A: I got a fine for speeding.\nB: How much do you have to pay?",
 funFact:"Italian traffic fines can be paid at a 'tabaccheria' (tobacconist). The fine is reduced by 30% if paid within 5 days."},

{type:"teach", trg:"il pronto soccorso", src:"the emergency room", pos:"noun", gender:"m",
 note:"Masculine noun. Literally: pronto (ready) + soccorso (aid/help).\nThe ER in a hospital.",
 example:"A: Dove il pronto soccorso?\nB: In fondo al corridoio, a destra.",
 exampleSrc:"A: Where is the emergency room?\nB: At the end of the corridor, on the right.",
 funFact:"Italian ERs use a color-coded triage system: white (not urgent), green (minor), yellow (serious), red (life-threatening). Wait times vary dramatically."},

{type:"teach", trg:"l'ambulanza", src:"the ambulance", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ambulanze.\nEmergency number in Italy: 118.",
 example:"A: Chiamate un'ambulanza!\nB: Subito! Il numero e il 118.",
 exampleSrc:"A: Call an ambulance!\nB: Right away! The number is 118.",
 funFact:"Italy uses 118 for medical emergencies, 112 for general emergencies (now the EU standard), 113 for police, and 115 for fire. Since 2017, 112 connects to all services."},

{type:"teach", trg:"il pompiere", src:"the firefighter", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la pompiera. Plural: i pompieri.\nAlso called 'vigile del fuoco.'",
 example:"A: I pompieri sono arrivati in cinque minuti.\nB: Per fortuna! Il fuoco era grande.",
 exampleSrc:"A: The firefighters arrived in five minutes.\nB: Fortunately! The fire was big.",
 funFact:"Italian firefighters are called both 'pompieri' (from French 'pompier') and 'vigili del fuoco' (fire watchmen). Their motto is 'sempre pronti' (always ready)."},

{type:"teach", trg:"rubare", src:"to steal / to rob", pos:"verb", gender:null,
 note:"Regular -are verb. rubo, rubi, ruba.\nUsed for theft of objects and money.",
 example:"A: Mi hanno rubato il portafoglio!\nB: Devi andare alla questura subito.",
 exampleSrc:"A: They stole my wallet!\nB: You must go to the police station right away.",
 funFact:"'Rubare' comes from Germanic 'raubon' (to rob). The saying 'rubare il mestiere' means to be so good at something that you seem to steal the job from professionals."},

{type:"teach", trg:"il ladro", src:"the thief", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la ladra. Plural: i ladri.\nFrom Germanic 'latro' via Latin.",
 example:"A: Il ladro e scappato con la borsa.\nB: Hai visto la sua faccia?",
 exampleSrc:"A: The thief ran away with the bag.\nB: Did you see his face?",
 funFact:"Italy has a famous literary thief: Lupin III (hugely popular in Italy). The word 'ladro' also appears in the expression 'Al ladro!' (Stop, thief!)."},

{type:"teach", trg:"soccorrere", src:"to help / to rescue", pos:"verb", gender:null,
 note:"Irregular -ere verb. soccorro, soccorri, soccorre.\nPast participle: soccorso.",
 example:"A: I volontari soccorrono le persone in difficoltà.\nB: Fanno un lavoro importante.",
 exampleSrc:"A: The volunteers help people in difficulty.\nB: They do important work.",
 funFact:"The noun 'soccorso' appears everywhere in Italy: 'pronto soccorso' (ER), 'soccorso stradale' (roadside assistance), 'soccorso alpino' (mountain rescue)."},

{type:"teach", trg:"il testimone", src:"the witness", pos:"noun", gender:"m",
 note:"Masculine/feminine noun (il/la testimone). Plural: i/le testimoni.\nFrom Latin 'testis.'",
 example:"A: C'e un testimone dell'incidente?\nB: Si, la signora al bar ha visto tutto.",
 exampleSrc:"A: Is there a witness to the accident?\nB: Yes, the lady at the bar saw everything.",
 funFact:"In Italian weddings, the 'testimoni' are not just witnesses but play the role of 'best man' and 'maid of honor,' making 'testimone' a versatile word."},

{type:"teach", trg:"il documento", src:"the document / ID", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i documenti.\nIncludes ID card, passport, driver's license.",
 example:"A: Ha un documento, per favore?\nB: Ecco la mia carta d'identità.",
 exampleSrc:"A: Do you have an ID, please?\nB: Here is my identity card.",
 funFact:"Italians are legally required to carry a 'documento d'identità' at all times. The 'carta d'identità' (ID card) is the most common form."},

{type:"teach", trg:"smarrire", src:"to lose / to misplace", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: smarrisco, smarrisci, smarrisce.\nFormal for losing objects.",
 example:"A: Ho smarrito il passaporto.\nB: Vai subito al consolato!",
 exampleSrc:"A: I have lost my passport.\nB: Go to the consulate right away!",
 funFact:"'Smarrire' is more formal than 'perdere' for losing objects. 'Oggetti smarriti' (lost and found) uses this word. 'Smarrito' also means confused or disoriented."},

{type:"teach", trg:"il rischio", src:"the risk / danger", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i rischi.\n'A proprio rischio e pericolo' = at your own risk.",
 example:"A: C'e un rischio di alluvione.\nB: Dobbiamo stare attenti.",
 exampleSrc:"A: There is a risk of flooding.\nB: We need to be careful.",
 funFact:"'Rischio' entered English as 'risk' via French 'risque.' Some trace it to Arabic 'rizq' (fortune/livelihood), others to a Greek nautical term."},

{type:"mc", q:"Quale numero chiami per un'emergenza medica in Italia?",
 opts:["118","911","999","110"],
 ans:"118",
 hint:"The Italian medical emergency number, different from the American 911."},

{type:"fb", s:"Mi hanno {1} il portafoglio in metro!", a:["rubato"],
 opts:["rubato","smarrito","soccorso","denunciato"],
 hint:"Past participle of the verb meaning 'to steal.' Someone took your wallet.",
 sSrc:"They {1} my wallet on the metro!"},

{type:"match", pairs:[
 {trg:"la questura", src:"police HQ"},
 {trg:"il pronto soccorso", src:"emergency room"},
 {trg:"l'ambulanza", src:"ambulance"},
 {trg:"il pompiere", src:"firefighter"}
]},

{type:"mc", q:"Cosa fai se ti rubano qualcosa?",
 opts:["Prendi una multa","Fai una denuncia alla questura","Chiami un pompiere","Vai al pronto soccorso"],
 ans:"Fai una denuncia alla questura",
 hint:"You file an official report at the police station."},

{type:"fb", s:"Il {1} mi ha dato una multa per divieto di sosta.", a:["vigile"],
 opts:["vigile","ladro","testimone","pompiere"],
 hint:"The local city police officer who handles traffic violations.",
 sSrc:"The {1} gave me a fine for illegal parking."},

{type:"mc", q:"Cosa significa 'smarrire'?",
 opts:["to rescue","to arrest","to lose or misplace","to steal"],
 ans:"to lose or misplace",
 hint:"A formal way to say you lost something. Used in 'oggetti smarriti' (lost and found)."},

{type:"fb", s:"Ha un {1}, per favore? La carta d'identità va bene.", a:["documento"],
 opts:["documento","testimone","rischio","vigile"],
 hint:"An official paper that proves your identity. ID card, passport, or license.",
 sSrc:"Do you have an {1}, please? The identity card is fine."},

{type:"match", pairs:[
 {trg:"rubare", src:"to steal"},
 {trg:"smarrire", src:"to misplace"},
 {trg:"soccorrere", src:"to rescue"},
 {trg:"la denuncia", src:"police report"}
]}
]};
export default BATCH6_L1;
