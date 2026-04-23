// Batch 8. Unit 06 extra lesson. City: Public Services & Civic Life
const BATCH8_L1 = {id:"itv2_u06l_b8_1", title:"I servizi pubblici", icon:"🏤", xp:15, board:true, steps:[
{type:"intro", title:"I servizi pubblici",
 desc:"Learn vocabulary for public services, civic buildings, and everyday errands in an Italian city.",
 goals:["Name public services and civic buildings","Run errands using Italian","Understand Italian bureaucracy vocabulary"]},

{type:"teach", trg:"l'ufficio postale", src:"the post office", pos:"noun", gender:"m",
 note:"Masculine noun. Also just 'la posta.'\n'Spedire una lettera' = to send a letter.",
 example:"A: Devo andare all'ufficio postale.\nB: Per spedire un pacco?",
 exampleSrc:"A: I need to go to the post office.\nB: To send a package?",
 funFact:"Poste Italiane is not just mail. Italians use it for banking, bill payments, and even phone plans. It is one of the most visited places in any Italian town."},

{type:"teach", trg:"il comune", src:"the town hall / municipality", pos:"noun", gender:"m",
 note:"Masculine noun. Where you get documents and certificates.\n'Andare in comune' = to go to town hall.",
 example:"A: Devo andare in comune per il certificato.\nB: Porta un documento d'identità!",
 exampleSrc:"A: I need to go to town hall for the certificate.\nB: Bring an ID document!",
 funFact:"Italian bureaucracy is legendary. Getting a simple document can require visits to multiple offices. The word 'burocrazia' itself comes from French 'bureau' (desk)."},

{type:"teach", trg:"il documento", src:"the document / ID", pos:"noun", gender:"m",
 note:"Masculine noun. 'Documento d'identità' = identity document.\nAlways carry one in Italy.",
 example:"A: Ha un documento d'identità?\nB: Si, ecco la mia carta d'identità.",
 exampleSrc:"A: Do you have an identity document?\nB: Yes, here is my ID card.",
 funFact:"Italians carry a 'carta d'identità' (ID card) everywhere. It is used for everything: banks, hotels, even buying a SIM card. Foreigners need their passport."},

{type:"teach", trg:"la questura", src:"the police headquarters", pos:"noun", gender:"f",
 note:"Feminine noun. Where foreigners get their 'permesso di soggiorno.'\nRun by the Polizia di Stato.",
 example:"A: Devo andare in questura per il permesso.\nB: Prepara tutti i documenti!",
 exampleSrc:"A: I need to go to the police headquarters for my permit.\nB: Prepare all the documents!",
 funFact:"Italy has multiple police forces: Polizia di Stato (state), Carabinieri (military), Guardia di Finanza (financial), Polizia Municipale (local). Each has different duties."},

{type:"teach", trg:"la multa", src:"the fine / ticket", pos:"noun", gender:"f",
 note:"Feminine noun. 'Prendere una multa' = to get a fine.\n'Pagare la multa' = to pay the fine.",
 example:"A: Ho preso una multa per divieto di sosta!\nB: Quanto devi pagare?",
 exampleSrc:"A: I got a fine for illegal parking!\nB: How much do you have to pay?",
 funFact:"Parking fines in Italian cities are very common. The ZTL (Zona Traffico Limitato) in historic centers catches many tourists who drive into restricted areas."},

{type:"teach", trg:"lo sportello", src:"the counter / window (service)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Sportello bancomat' = ATM.\n'Allo sportello' = at the service counter.",
 example:"A: Vada allo sportello numero tre.\nB: Grazie, ho il numero di turno.",
 exampleSrc:"A: Go to counter number three.\nB: Thank you, I have my queue number.",
 funFact:"Italian public offices use a 'numerino' (little number) queue system. You take a number and wait. Some offices have separate queues for different services."},

{type:"teach", trg:"il modulo", src:"the form (to fill out)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Compilare un modulo' = to fill out a form.\nItalian bureaucracy loves forms.",
 example:"A: Deve compilare questo modulo.\nB: Serve anche la firma?",
 exampleSrc:"A: You need to fill out this form.\nB: Do you also need a signature?",
 funFact:"Italian forms often require a 'marca da bollo' (revenue stamp), a small stamp you buy at the tabaccheria (tobacco shop). Without it, the form is invalid."},

{type:"teach", trg:"la fila", src:"the queue / line", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fare la fila' = to stand in line.\n'Saltare la fila' = to skip the queue.",
 example:"A: C'e molta fila all'ufficio postale.\nB: Come sempre il lunedì mattina!",
 exampleSrc:"A: There is a long queue at the post office.\nB: As always on Monday morning!",
 funFact:"Italians are surprisingly orderly in queues, despite stereotypes. The phrase 'Chi e l'ultimo?' (Who is the last one?) is how you find your place."},

{type:"teach", trg:"il certificato", src:"the certificate", pos:"noun", gender:"m",
 note:"Masculine noun. Many types: di nascita, di residenza, penale.\n'Richiedere un certificato' = to request a certificate.",
 example:"A: Mi serve un certificato di residenza.\nB: Lo puoi chiedere al comune.",
 exampleSrc:"A: I need a certificate of residence.\nB: You can request it at town hall.",
 funFact:"Italians need certificates for almost everything. Marriage, residency changes, even enrolling in a gym sometimes requires a 'certificato medico' (medical certificate)."},

{type:"mc",
 q:"What do you say to find your place in an Italian queue?",
 opts:["Chi e l'ultimo?","Dove andiamo?","Quanto costa?","Come si chiama?"],
 ans:"Chi e l'ultimo?",
 hint:"You need to find the last person in line so you know who is before you. You ask who is 'the last one.'"},

{type:"match", pairs:[
  {trg:"il comune", src:"the town hall"},
  {trg:"la multa", src:"the fine"},
  {trg:"il modulo", src:"the form"},
  {trg:"la fila", src:"the queue"}
]},

{type:"fb",
 s:"Deve {1} questo modulo e portarlo allo sportello tre.",
 a:["compilare"],
 opts:["compilare","spedire","pagare","prendere"],
 hint:"This verb means 'to fill out.' You write your information on the form.",
 sSrc:"You need to {1} this form and bring it to counter three."},

{type:"mc",
 q:"What is a 'marca da bollo'?",
 opts:["A bus pass","A revenue stamp for official forms","A postage stamp for letters","A parking ticket"],
 ans:"A revenue stamp for official forms",
 hint:"You buy it at a tabaccheria. Without it on certain documents, the form is not valid."},

{type:"fb",
 s:"Mi serve un {1} di residenza dal comune.",
 a:["certificato"],
 opts:["certificato","documento","modulo","sportello"],
 hint:"This is an official paper that proves where you live. You request it from the municipality.",
 sSrc:"I need a {1} of residence from the town hall."},

{type:"mc",
 q:"What does ZTL stand for in Italian cities?",
 opts:["Zona Taxi Libero","Zona Trasporto Luglio","Zona Traffico Limitato","Zona Turismo Locale"],
 ans:"Zona Traffico Limitato",
 hint:"It is a restricted traffic zone in historic city centers. Many tourists get fines for driving into it."}
,{type:"match",pairs:[{trg:"il documento",src:"the document / ID"},{trg:"la questura",src:"the police headquarters"},{trg:"lo sportello",src:"the counter / window (service)"}]},{type:"mc",q:"How do you say \"post office\" in Italian?",opts:["il comune","il documento","la questura","l'ufficio postale"],ans:"l'ufficio postale",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
