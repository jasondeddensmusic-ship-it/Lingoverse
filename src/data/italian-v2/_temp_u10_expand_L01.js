// Italian V2 Unit 10 Expansion. Lesson 4: All'aeroporto (At the Airport)
// Expands travel unit with detailed airport vocabulary and procedures.

const LESSON_4 = {id:"itv2_u10l4", title:"All'aeroporto", icon:"\u2708\uFE0F", xp:15, board:true, steps:[
  {type:"intro", title:"All'aeroporto",
   desc:"Learn the Italian vocabulary you need to navigate airports confidently. From check-in to boarding, these words will make your airport experience smoother.",
   goals:["Navigate check-in and security in Italian","Understand boarding announcements","Handle luggage and customs"]},

  {type:"teach", trg:"il check-in", src:"check-in", pos:"noun", gender:"m",
   note:"Masculine. English loanword, widely used in Italian.\n'Fare il check-in' = to check in. 'Banco del check-in' = check-in desk.",
   example:"A: Ha gia fatto il check-in?\nB: Si, online. Ho la carta d'imbarco sul telefono.",
   exampleSrc:"A: Have you already checked in?\nB: Yes, online. I have the boarding pass on my phone.",
   funFact:"Italians use the English word 'check-in' without translation. The Italian alternative 'accettazione' exists but is rarely used. Online check-in ('check-in online') has become standard. Many Italian airports have self-service kiosks ('totem') as well."},

  {type:"teach", trg:"la carta d'imbarco", src:"the boarding pass", pos:"noun", gender:"f",
   note:"Feminine. 'Imbarco' = boarding (from 'imbarcare' = to board).\n'Carta' here means 'card/document,' not 'paper.'",
   example:"A: Mi mostri la carta d'imbarco, per favore.\nB: Eccola. Volo AZ 320 per Roma.",
   exampleSrc:"A: Show me the boarding pass, please.\nB: Here it is. Flight AZ 320 to Rome.",
   funFact:"'Imbarco' comes from 'barca' (boat), because originally you 'embarked' onto ships. The word transferred to air travel. 'Porta d'imbarco' (boarding gate) and 'orario d'imbarco' (boarding time) complete the airport vocabulary set."},

  {type:"teach", trg:"il bagaglio a mano", src:"carry-on luggage / hand luggage", pos:"noun", gender:"m",
   note:"Masculine. 'A mano' = by hand. Size limits apply.\n'Bagaglio in stiva' = checked luggage (goes in the hold).",
   example:"A: E bagaglio a mano o da stiva?\nB: Solo bagaglio a mano.",
   exampleSrc:"A: Is it carry-on or checked luggage?\nB: Carry-on only.",
   funFact:"Italian airlines follow standard EU hand luggage rules. 'Stiva' means the cargo hold of a plane (or ship). Low-cost carriers in Italy are strict about bag dimensions. 'Bagaglio in eccedenza' means excess baggage, which incurs extra fees."},

  {type:"teach", trg:"il controllo di sicurezza", src:"the security check", pos:"noun", gender:"m",
   note:"Masculine. 'Controllo' = check, 'sicurezza' = security.\nAlso: 'i controlli' (plural) for the security area.",
   example:"A: Dov'e il controllo di sicurezza?\nB: Dopo il check-in, a destra.",
   exampleSrc:"A: Where is the security check?\nB: After check-in, on the right.",
   funFact:"Italian airports follow EU security regulations: liquids in 100ml containers in a clear bag, laptops out, no sharp objects. 'Togliere le scarpe' (remove shoes) is sometimes required. Italian security is generally efficient at major airports like Fiumicino and Malpensa."},

  {type:"teach", trg:"il gate", src:"the gate (boarding)", pos:"noun", gender:"m",
   note:"Masculine. English loanword. Italian equivalent: 'porta d'imbarco.'\n'Il gate cambia spesso' = the gate often changes.",
   example:"A: Da quale gate parte il volo?\nB: Gate 23. Controlla il tabellone.",
   exampleSrc:"A: From which gate does the flight depart?\nB: Gate 23. Check the board.",
   funFact:"Both 'gate' (English) and 'porta d'imbarco' (Italian) are used. Announcements use both: 'Imbarco al gate 15' or 'Imbarco alla porta 15.' Gate changes are common at Italian airports. Always check the electronic boards, not just your boarding pass."},

  {type:"teach", trg:"il ritiro bagagli", src:"baggage claim", pos:"noun", gender:"m",
   note:"Masculine. 'Ritiro' = collection, 'bagagli' = luggage.\n'Nastro trasportatore' = baggage carousel.",
   example:"A: Dov'e il ritiro bagagli?\nB: Segua le indicazioni per gli arrivi.",
   exampleSrc:"A: Where is baggage claim?\nB: Follow the signs for arrivals.",
   funFact:"'Ritiro' from 'ritirare' (to collect, withdraw). The same word is used for picking up packages at the post office. Italian airports label baggage carousels with flight numbers. If your bag is lost, go to 'Ufficio bagagli smarriti' (lost luggage office)."},

  {type:"teach", trg:"la dogana", src:"customs", pos:"noun", gender:"f",
   note:"Feminine. From Arabic 'diwan' (council, office).\n'Niente da dichiarare' = nothing to declare.",
   example:"A: Ha qualcosa da dichiarare?\nB: No, niente da dichiarare.",
   exampleSrc:"A: Do you have anything to declare?\nB: No, nothing to declare.",
   funFact:"From Arabic 'diwan' (government office), entering Italian during medieval trade. Within the EU, there are no customs checks for flights between member states. The 'canale verde' (green channel) is for nothing to declare, 'canale rosso' (red) if you have goods to declare."},

  {type:"teach", trg:"decollare", src:"to take off (plane)", pos:"verb", gender:null,
   note:"Regular -are verb. 'Il volo decolla alle 14:00' = the flight takes off at 2 PM.\nOpposite: atterrare (to land).",
   example:"A: A che ora decolla il volo?\nB: Decollo previsto alle quindici.",
   exampleSrc:"A: What time does the flight take off?\nB: Expected takeoff at fifteen hundred.",
   funFact:"From French 'decoller' (to unstick). The plane 'unsticks' from the runway. The opposite 'atterrare' comes from 'terra' (earth, land): the plane returns to earth. Both words are poetically descriptive of the physical action."},

  {type:"teach", trg:"atterrare", src:"to land (plane)", pos:"verb", gender:null,
   note:"Regular -are verb. From 'terra' (earth, ground).\n'L'aereo e atterrato' = the plane has landed.",
   example:"A: L'aereo e atterrato in orario.\nB: Meno male! Avevo paura del ritardo.",
   exampleSrc:"A: The plane landed on time.\nB: Thank goodness! I was afraid of a delay.",
   funFact:"From 'a-' (to) + 'terra' (earth). Literally 'to earth.' The same concept exists in French 'atterrir' and gives English the technical term 'touch down.' Italian pilots announce: 'Stiamo per atterrare. Allacciate le cinture.' (We are about to land. Fasten your seatbelts.)"},

  {type:"teach", trg:"la coincidenza", src:"the connecting flight", pos:"noun", gender:"f",
   note:"Feminine. Same word as 'coincidence.' Context = connecting flight.\n'Perdere la coincidenza' = to miss the connection.",
   example:"A: Ho una coincidenza a Milano.\nB: Quanto tempo hai tra un volo e l'altro?",
   exampleSrc:"A: I have a connecting flight in Milan.\nB: How much time do you have between flights?",
   funFact:"The word means both 'coincidence' and 'connection' (transport). A connecting flight 'coincides' with your arrival. Rome Fiumicino and Milan Malpensa are the main connection hubs. Missing a connection ('perdere la coincidenza') is every traveler's nightmare."},

  // Quiz steps
  {type:"mc", q:"What does 'bagaglio a mano' mean?",
   opts:["Carry-on / hand luggage","Checked luggage","Lost luggage","Heavy luggage"],
   ans:"Carry-on / hand luggage",
   hint:"'A mano' means by h.... This is the bag you c... with you onto the plane, not checked in."},

  {type:"fb", s:"Mi mostri la {1} d'imbarco.",
   a:["carta"],
   opts:["carta","porta","biglietto","volo"],
   hint:"This document allows you to board the plane. It shows your seat, gate, and flight number.",
   sSrc:"Show me the boarding {1}."},

  {type:"match", pairs:[
    {trg:"il check-in", src:"check-in"},
    {trg:"il gate", src:"the boarding gate"},
    {trg:"il ritiro bagagli", src:"baggage claim"},
    {trg:"la dogana", src:"customs"},
    {trg:"decollare", src:"to take off"}
  ]},

  {type:"mc", q:"What does the 'canale verde' at customs mean?",
   opts:["Nothing to declare","Something to declare","EU citizens only","Exit"],
   ans:"Nothing to declare",
   hint:"Green = go through freely. Red = you have goods to d.... This system is standard in EU airports."},

  {type:"fb", s:"A che ora {1} il volo?",
   a:["decolla"],
   opts:["decolla","atterra","arriva","parte"],
   hint:"You want to know when the plane lifts off the runway. From French 'decoller' (to unstick).",
   sSrc:"What time does the flight {1}?"},

  {type:"mc", q:"What does 'atterrare' literally mean?",
   opts:["To go to earth","To go up","To fly away","To stop"],
   ans:"To go to earth",
   hint:"From 'a-' (to) + 'terra' (e...). The plane returns to the ground."},

  {type:"fb", s:"Dov'e il {1} bagagli?",
   a:["ritiro"],
   opts:["ritiro","controllo","check-in","gate"],
   hint:"You have landed and need to collect your suitcase. This is the area with the carousel.",
   sSrc:"Where is baggage {1}?"},

  {type:"mc", q:"What happens at 'il controllo di sicurezza'?",
   opts:["Your bags are scanned and you pass through a detector","You buy tickets","You check in","You collect luggage"],
   ans:"Your bags are scanned and you pass through a detector",
   hint:"This is the security screening area. Liquids must be in small containers in a clear bag."},

  {type:"fb", s:"Ho una {1} a Milano tra un volo e l'altro.",
   a:["coincidenza"],
   opts:["coincidenza","partenza","dogana","sicurezza"],
   hint:"You need to catch another flight at a connecting airport. This word also means 'coincidence.'",
   sSrc:"I have a {1} in Milan between flights."}
]};
export default LESSON_4;
