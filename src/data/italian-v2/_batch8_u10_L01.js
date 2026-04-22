// Batch 8. Unit 10 extra lesson. Travel: Accommodation & Hotels
const BATCH8_L1 = {id:"itv2_u10l_b8_1", title:"L'alloggio", icon:"🏨", xp:15, board:true, steps:[
{type:"intro", title:"L'alloggio",
 desc:"Learn vocabulary for booking accommodation, checking in, and staying at hotels in Italy.",
 goals:["Book a room and check in","Describe room preferences","Handle common hotel situations"]},

{type:"teach", trg:"prenotare", src:"to book / to reserve", pos:"verb", gender:null,
 note:"Regular -are verb. 'Una prenotazione' = a reservation.\n'Prenotare in anticipo' = to book in advance.",
 example:"A: Vorrei prenotare una camera.\nB: Per quante notti?",
 exampleSrc:"A: I would like to book a room.\nB: For how many nights?",
 funFact:"In high season (July-August), Italian coastal hotels book out months ahead. 'Tutto esaurito' (all sold out) is a phrase you hear a lot."},

{type:"teach", trg:"la camera singola", src:"the single room", pos:"noun", gender:"f",
 note:"Feminine noun. 'Camera doppia' = double room.\n'Camera matrimoniale' = room with double bed.",
 example:"A: Ha una camera singola disponibile?\nB: Si, con vista sul giardino.",
 exampleSrc:"A: Do you have a single room available?\nB: Yes, with a garden view.",
 funFact:"A 'camera matrimoniale' has one large bed. A 'camera doppia' has two single beds. Asking for the wrong one is a common tourist mistake."},

{type:"teach", trg:"il soggiorno", src:"the stay / living room", pos:"noun", gender:"m",
 note:"Masculine noun. Double meaning: hotel stay or living room.\n'Buon soggiorno!' = Enjoy your stay!",
 example:"A: Come il Suo soggiorno finora?\nB: Perfetto, l'hotel e bellissimo.",
 exampleSrc:"A: How is your stay so far?\nB: Perfect, the hotel is beautiful.",
 funFact:"'Permesso di soggiorno' (residence permit) uses the same word. For foreigners living in Italy, this document is essential and famously difficult to obtain."},

{type:"teach", trg:"la reception", src:"the front desk / reception", pos:"noun", gender:"f",
 note:"Feminine noun. Borrowed from English/French.\n'Alla reception' = at the front desk.",
 example:"A: Chieda alla reception per il wifi.\nB: La password e nella camera.",
 exampleSrc:"A: Ask at the front desk for the wifi.\nB: The password is in the room.",
 funFact:"Many Italian hotels use the English word 'reception' but pronounce it the Italian way: re-SEP-shon. The Italian alternative 'ricevimento' is rarely used in hotels."},

{type:"teach", trg:"il cuscino", src:"the pillow", pos:"noun", gender:"m",
 note:"Masculine noun. 'Un cuscino in più' = an extra pillow.\nAlso: 'il guanciale' (cheek pillow).",
 example:"A: Posso avere un cuscino in più?\nB: Certo, glielo porto subito.",
 exampleSrc:"A: Can I have an extra pillow?\nB: Of course, I will bring it right away.",
 funFact:"Do not confuse 'cuscino' (pillow) with 'guanciale' which means both 'pillow' AND an Italian cured pork jowl used in pasta carbonara. Context is crucial."},

{type:"teach", trg:"la coperta", src:"the blanket", pos:"noun", gender:"f",
 note:"Feminine noun. 'Coperta extra' = extra blanket.\nFrom 'coprire' (to cover).",
 example:"A: Fa freddo, hai una coperta in più?\nB: Guarda nell'armadio, ce ne sono due.",
 exampleSrc:"A: It is cold, do you have an extra blanket?\nB: Look in the wardrobe, there are two.",
 funFact:"Italian hotels often use a 'piumone' (duvet/comforter) instead of separate sheets and blankets. 'Coperta' is also used for book covers and deck (of a ship)."},

{type:"teach", trg:"il reclamo", src:"the complaint", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare un reclamo' = to file a complaint.\n'Reclamare' = to complain formally.",
 example:"A: Vorrei fare un reclamo. La stanza e rumorosa.\nB: Mi dispiace, La spostiamo subito.",
 exampleSrc:"A: I would like to file a complaint. The room is noisy.\nB: I am sorry, we will move you right away.",
 funFact:"Italians distinguish 'lamentarsi' (to grumble informally) from 'reclamare' (to complain formally). A reclamo has official weight and may involve a written form."},

{type:"teach", trg:"il bagaglio", src:"the luggage", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i bagagli.\n'Deposito bagagli' = luggage storage.",
 example:"A: Posso lasciare i bagagli alla reception?\nB: Certo, fino alle tre.",
 exampleSrc:"A: Can I leave my luggage at the front desk?\nB: Of course, until three o'clock.",
 funFact:"'Bagaglio' comes from the Old French 'bague' (bundle). 'Bagaglio culturale' means cultural baggage, the knowledge and experience one carries through life."},

{type:"teach", trg:"l'ascensore", src:"the elevator / lift", pos:"noun", gender:"m",
 note:"Masculine noun. 'Prendere l'ascensore' = to take the elevator.\nFrom 'ascendere' (to ascend).",
 example:"A: L'ascensore e al piano terra.\nB: Premo il quarto piano.",
 exampleSrc:"A: The elevator is on the ground floor.\nB: I will press the fourth floor.",
 funFact:"In Italy, 'piano terra' (ground floor) is 0, and 'primo piano' (first floor) is what Americans call the second floor. Many tourists go to the wrong floor."},

{type:"mc",
 q:"What is the difference between 'camera matrimoniale' and 'camera doppia'?",
 opts:["Matrimoniale has one large bed, doppia has two single beds","They are exactly the same","Matrimoniale is cheaper","Doppia has a larger bathroom"],
 ans:"Matrimoniale has one large bed, doppia has two single beds",
 hint:"'M...' relates to 'matrimonio' (marriage), so it has one b... for a couple. 'D...' means double, so two b...."},

{type:"match", pairs:[
  {trg:"prenotare", src:"to book"},
  {trg:"il reclamo", src:"the complaint"},
  {trg:"il bagaglio", src:"the luggage"},
  {trg:"l'ascensore", src:"the elevator"}
]},

{type:"fb",
 s:"Posso avere un {1} in più? Quello che ho e troppo basso.",
 a:["cuscino"],
 opts:["cuscino","coperta","bagaglio","reclamo"],
 hint:"This soft object supports your head while sleeping. You place it under your neck in bed.",
 sSrc:"Can I have an extra {1}? The one I have is too low."},

{type:"mc",
 q:"In Italy, what floor is 'primo piano'?",
 opts:["The top floor","The floor above ground level (US second floor)","The ground floor","The basement"],
 ans:"The floor above ground level (US second floor)",
 hint:"Italy counts floors starting from 'piano terra' (f... zero). The first numbered f... is one l... up."},

{type:"fb",
 s:"Vorrei {1} una camera per tre notti.",
 a:["prenotare"],
 opts:["prenotare","reclamare","depositare","ascendere"],
 hint:"This verb means to reserve or book. You use it when you want to secure a room in advance.",
 sSrc:"I would like to {1} a room for three nights."},

{type:"mc",
 q:"What does 'tutto esaurito' mean at a hotel?",
 opts:["Late checkout available","Free cancellation","All sold out / fully booked","Breakfast included"],
 ans:"All sold out / fully booked",
 hint:"'Esaurito' means exhausted or depleted. When everything is used up, there is nothing left to offer."}
,{type:"match",pairs:[{trg:"la reception",src:"the front desk / reception"},{trg:"la coperta",src:"the blanket"}]}]};
export default BATCH8_L1;
