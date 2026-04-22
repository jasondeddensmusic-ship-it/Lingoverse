// Batch 6. Unit 10 extra lesson. I viaggi: At the Airport
const BATCH6_L1 = {id:"itv2_u10l_b6_1", title:"All'aeroporto", icon:"\u{2708}\u{FE0F}", xp:15, board:true, steps:[
{type:"intro", title:"All'aeroporto",
 desc:"Learn essential airport vocabulary for navigating Italian airports, checking in, and boarding flights.",
 goals:["Check in for a flight","Navigate airport areas","Understand boarding announcements"]},

{type:"teach", trg:"il volo", src:"the flight", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i voli.\nFrom 'volare' (to fly). Used for air travel.",
 example:"A: A che ora parte il volo?\nB: Alle quindici e trenta.",
 exampleSrc:"A: What time does the flight leave?\nB: At fifteen thirty.",
 funFact:"'Volo' also means 'flight' in a general sense. 'Di volo' means 'in a flash.' 'Prendere il volo' means to take off, literally and figuratively."},

{type:"teach", trg:"il check-in", src:"the check-in", pos:"noun", gender:"m",
 note:"Masculine noun (borrowed from English). Invariable plural.\n'Fare il check-in' = to check in.",
 example:"A: Dove si fa il check-in?\nB: Al banco della compagnia aerea.",
 exampleSrc:"A: Where do you check in?\nB: At the airline desk.",
 funFact:"Many Italian airports now have 'check-in automatico' (self check-in) kiosks, but the English term 'check-in' is universally used in Italy."},

{type:"teach", trg:"la carta d'imbarco", src:"the boarding pass", pos:"noun", gender:"f",
 note:"Feminine noun. Also 'il biglietto d'imbarco.'\nThe document that lets you board the plane.",
 example:"A: Ecco la mia carta d'imbarco.\nB: Gate B12. Imbarco alle due.",
 exampleSrc:"A: Here is my boarding pass.\nB: Gate B12. Boarding at two.",
 funFact:"'Imbarco' comes from 'imbarcare' (to board/embark), from 'barca' (boat). Even for planes, Italians use the maritime origin word."},

{type:"teach", trg:"il bagaglio a mano", src:"the carry-on luggage", pos:"noun", gender:"m",
 note:"Masculine noun. 'Bagaglio' (luggage) + 'a mano' (by hand).\nWhat you take on the plane.",
 example:"A: Questo bagaglio a mano e troppo grande.\nB: Devo metterlo in stiva?",
 exampleSrc:"A: This carry-on is too big.\nB: Do I have to put it in the hold?",
 funFact:"Italian low-cost carriers are famously strict about 'bagaglio a mano' size. Passengers at Italian airports often rearrange their bags at the gate."},

{type:"teach", trg:"la stiva", src:"the cargo hold", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le stive.\nThe compartment under the plane for luggage.",
 example:"A: La valigia va in stiva.\nB: L'ho già pesata, pesa ventidue chili.",
 exampleSrc:"A: The suitcase goes in the cargo hold.\nB: I already weighed it, it weighs twenty-two kilos.",
 funFact:"From old Italian for 'to stow/pack.' Originally a nautical term for the hold of a ship. 'Bagaglio da stiva' is checked luggage."},

{type:"teach", trg:"il controllo passaporti", src:"the passport control", pos:"noun", gender:"m",
 note:"Masculine noun. The border checkpoint at international terminals.\n'Controllo' = control/check.",
 example:"A: Il controllo passaporti e al primo piano.\nB: C'e molta coda?",
 exampleSrc:"A: Passport control is on the first floor.\nB: Is there a long queue?",
 funFact:"Within the Schengen Area, there is no passport control between EU countries. But flying to non-Schengen destinations from Italy requires full document checks."},

{type:"teach", trg:"decollare", src:"to take off (plane)", pos:"verb", gender:null,
 note:"Regular -are verb. decollo, decolli, decolla.\nUsed for aircraft departures.",
 example:"A: L'aereo decolla tra venti minuti.\nB: Dobbiamo correre al gate!",
 exampleSrc:"A: The plane takes off in twenty minutes.\nB: We need to run to the gate!",
 funFact:"'Decollo' (takeoff) is also used figuratively for economic growth: 'il decollo economico' means an economic takeoff, rapid development."},

{type:"teach", trg:"atterrare", src:"to land (plane)", pos:"verb", gender:null,
 note:"Regular -are verb. atterro, atterri, atterra.\nFrom 'terra' (earth/ground). Opposite of decollare.",
 example:"A: L'aereo atterra alle diciotto.\nB: Vengo a prenderti all'arrivo.",
 exampleSrc:"A: The plane lands at eighteen hundred.\nB: I will come to pick you up at arrivals.",
 funFact:"'Atterrare' literally means 'to come to earth.' There is also 'ammarare' (to land on water/ditch at sea), used for emergency water landings."},

{type:"teach", trg:"la coincidenza", src:"the connection (flight)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le coincidenze.\nAlso means 'coincidence' in everyday speech.",
 example:"A: Ho una coincidenza a Monaco.\nB: Quanto tempo hai tra i due voli?",
 exampleSrc:"A: I have a connection in Munich.\nB: How much time do you have between the two flights?",
 funFact:"'Coincidenza' means both 'connecting flight/train' and 'coincidence.' If you miss your 'coincidenza,' it could be a very unfortunate coincidence indeed."},

{type:"teach", trg:"il ritiro bagagli", src:"the baggage claim", pos:"noun", gender:"m",
 note:"Masculine noun. 'Ritiro' (pickup) + 'bagagli' (luggage).\nWhere you collect checked bags.",
 example:"A: Il ritiro bagagli e al piano terra.\nB: Quale nastro?",
 exampleSrc:"A: Baggage claim is on the ground floor.\nB: Which belt?",
 funFact:"'Nastro' (belt/ribbon) refers to the conveyor belt at baggage claim. Watching bags go round is a universal airport experience."},

{type:"teach", trg:"il nastro", src:"the conveyor belt / ribbon", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i nastri.\nAt airports: the moving belt. Also a ribbon or tape.",
 example:"A: Le valigie sono sul nastro numero tre.\nB: Eccola, la vedo!",
 exampleSrc:"A: The suitcases are on belt number three.\nB: There it is, I see it!",
 funFact:"'Nastro' also means ribbon. 'Nastro adesivo' is adhesive tape, and 'nastro trasportatore' is the full technical term for a conveyor belt."},

{type:"teach", trg:"il pilota", src:"the pilot", pos:"noun", gender:"m",
 note:"Masculine/feminine noun (il/la pilota). Plural: i piloti/le pilote.\nAlso used for race car drivers.",
 example:"A: Il pilota ha annunciato un ritardo di trenta minuti.\nB: Ancora? E il secondo ritardo oggi!",
 exampleSrc:"A: The pilot announced a thirty-minute delay.\nB: Again? That is the second delay today!",
 funFact:"In Italian, 'pilota' is used for airplane pilots, race car drivers, and boat captains. 'Pilota automatico' (autopilot) is used figuratively for doing things mechanically."},

{type:"teach", trg:"allacciare", src:"to fasten / to buckle", pos:"verb", gender:null,
 note:"Regular -are verb. allaccio, allacci, allaccia.\nUsed for seatbelts, shoes, and buckles.",
 example:"A: Allacciate le cinture di sicurezza.\nB: Stiamo per atterrare?",
 exampleSrc:"A: Fasten your seatbelts.\nB: Are we about to land?",
 funFact:"'Allacciare le cinture' is the standard Italian announcement on planes. 'Allacciare' comes from 'laccio' (lace/strap), literally to tie with a strap."},

{type:"teach", trg:"il fuso orario", src:"the time zone", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fuso' (spindle) + 'orario' (time-related).\nUsed when discussing jet lag.",
 example:"A: Che fuso orario c'è in Giappone?\nB: Piu otto ore rispetto all'Italia.",
 exampleSrc:"A: What time zone is Japan in?\nB: Plus eight hours compared to Italy.",
 funFact:"The term 'fuso orario' comes from the spindle-shaped zones on a globe. Italy is in the CET zone (Central European Time), UTC+1."},

{type:"mc", q:"Come si dice 'boarding pass' in italiano?",
 opts:["la carta d'imbarco","il controllo passaporti","il ritiro bagagli","il volo"],
 ans:"la carta d'imbarco",
 hint:"The document you show to board the plane. Contains 'i...' (boarding)."},

{type:"fb", s:"L'aereo {1} alle otto di mattina da Roma.", a:["decolla"],
 opts:["decolla","atterra","allaccia","ritira"],
 hint:"The verb meaning the plane lifts off the runway. Opposite of landing.",
 sSrc:"The plane {1} at eight in the morning from Rome."},

{type:"match", pairs:[
 {trg:"decollare", src:"to take off"},
 {trg:"atterrare", src:"to land"},
 {trg:"il volo", src:"flight"},
 {trg:"la coincidenza", src:"connection"}
]},

{type:"mc", q:"Dove ritiri le valigie dopo il volo?",
 opts:["Al gate","Al ritiro bagagli","Al check-in","Al controllo passaporti"],
 ans:"Al ritiro bagagli",
 hint:"The area with conveyor belts where checked luggage appears."},

{type:"fb", s:"{1} le cinture di sicurezza, per favore.", a:["Allacciate"],
 opts:["Allacciate","Decollate","Atterrate","Controllate"],
 hint:"The command to buckle up, heard before takeoff and landing.",
 sSrc:"{1} your seatbelts, please."},

{type:"mc", q:"Cosa succede se perdi la coincidenza?",
 opts:["Perdi il bagaglio","Perdi il posto","Perdi il volo di collegamento","Perdi il passaporto"],
 ans:"Perdi il volo di collegamento",
 hint:"A 'coincidenza' at the airport is a connecting flight to your final destination."},

{type:"fb", s:"Il bagaglio a mano va in cabina, la valigia grande va in {1}.", a:["stiva"],
 opts:["stiva","nastro","cabina","fuso"],
 hint:"The compartment under the plane where large luggage is stored.",
 sSrc:"Carry-on goes in the cabin, the large suitcase goes in the {1}."},

{type:"match", pairs:[
 {trg:"il bagaglio a mano", src:"carry-on"},
 {trg:"la stiva", src:"cargo hold"},
 {trg:"il fuso orario", src:"time zone"},
 {trg:"il nastro", src:"conveyor belt"}
]}
,{type:"match",pairs:[{trg:"il check-in",src:"the check-in"},{trg:"il controllo passaporti",src:"the passport control"},{trg:"il ritiro bagagli",src:"the baggage claim"},{trg:"il pilota",src:"the pilot"},{trg:"allacciare",src:"to fasten / to buckle"}]}]};
export default BATCH6_L1;
