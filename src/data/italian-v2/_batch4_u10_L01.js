// Batch 4. Unit 10, Lesson 1: Hotel & Accommodation Vocabulary
const BATCH4_U10_L1 = {
  id:"itv2_u10l_b4_1", title:"In albergo (II)", icon:"\uD83C\uDFE8", xp:15, board:true,
  steps:[
    {type:"intro", title:"In albergo",
     desc:"Learn essential Italian vocabulary for booking and staying at hotels, B&Bs, and other accommodation.",
     goals:["Book a hotel room in Italian","Communicate with hotel staff","Handle common hotel situations"]},

    {type:"teach", trg:"l'albergo", src:"the hotel", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli alberghi. Synonym: l'hotel (invariable).\nFrom Arabic 'al-baraka' (the inn).",
     example:"A: L'albergo e vicino alla stazione?\nB: Si, a cinque minuti a piedi.",
     exampleSrc:"A: Is the hotel near the station?\nB: Yes, five minutes on foot.",
     funFact:"Italian accommodation types: 'albergo/hotel' (hotel), 'pensione' (guesthouse), 'agriturismo' (farm stay), 'B&B' (bed and breakfast), 'ostello' (hostel). Each offers a different experience of Italian hospitality."},

    {type:"teach", trg:"la camera", src:"the room (hotel)", pos:"noun", gender:"f",
     note:"Feminine. 'Camera singola' = single room. 'Camera doppia' = double room.\n'Camera matrimoniale' = room with double bed.",
     example:"A: Vorrei prenotare una camera.\nB: Singola o doppia?",
     exampleSrc:"A: I would like to book a room.\nB: Single or double?",
     funFact:"'Camera doppia' has two single beds. 'Camera matrimoniale' has one double bed. This distinction is crucial when booking in Italy. Many tourists confuse them and end up with the wrong bed configuration."},

    {type:"teach", trg:"la prenotazione", src:"the reservation / booking", pos:"noun", gender:"f",
     note:"Feminine. 'Ho una prenotazione a nome...' = I have a reservation under the name of...\nFrom 'prenotare.'",
     example:"A: Ho una prenotazione a nome Rossi.\nB: Si, camera 305. Ecco la chiave.",
     exampleSrc:"A: I have a reservation under Rossi.\nB: Yes, room 305. Here is the key.",
     funFact:"The phrase 'a nome di' (under the name of) is essential at Italian hotels. Italian hotels range from 1 to 5 stars, regulated by regional authorities. A 3-star hotel in Florence may be very different from one in Sicily."},

    {type:"teach", trg:"il check-in", src:"check-in", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. 'Fare il check-in' = to check in.\n'Il check-out' = check-out.",
     example:"A: A che ora e il check-in?\nB: Dalle 14:00.",
     exampleSrc:"A: What time is check-in?\nB: From 2:00 PM.",
     funFact:"Italian hotels typically have check-in from 2 PM and check-out by 10-11 AM. Smaller hotels and B&Bs may be flexible. By law, Italian hotels must collect your passport or ID at check-in and register you with local police."},

    {type:"teach", trg:"la chiave", src:"the key", pos:"noun", gender:"f",
     note:"Feminine. 'La chiave della camera' = the room key.\nAlso used figuratively: 'la chiave del successo' = the key to success.",
     example:"A: Ecco la chiave della sua camera.\nB: Grazie. A che piano e?",
     exampleSrc:"A: Here is your room key.\nB: Thank you. On what floor is it?",
     funFact:"Many Italian hotels, especially smaller ones, still use physical keys rather than key cards. The tradition of leaving your room key at the front desk ('portineria') when going out still exists in traditional Italian hotels."},

    {type:"teach", trg:"l'ascensore", src:"the elevator / lift", pos:"noun", gender:"m",
     note:"Masculine. From 'ascendere' (to ascend).\nItalian elevators are famously small in old buildings.",
     example:"A: C'e l'ascensore?\nB: Si, ma e molto piccolo!",
     exampleSrc:"A: Is there an elevator?\nB: Yes, but it is very small!",
     funFact:"Italian elevators in historic buildings are legendarily tiny. Two people with luggage can be a tight squeeze. Some are so small they have a chair inside (for one person). Always check if the hotel has an elevator before booking upper floors."},

    {type:"teach", trg:"il piano", src:"the floor / storey", pos:"noun", gender:"m",
     note:"Masculine. 'Al primo piano' = on the first floor.\nRemember: 'piano terra' = ground floor.",
     example:"A: La camera e al terzo piano.\nB: C'e l'ascensore?",
     exampleSrc:"A: The room is on the third floor.\nB: Is there an elevator?",
     funFact:"Italian floor numbering: 'piano terra' (ground), 'primo piano' (1st floor, which Americans would call 2nd floor). This off-by-one difference confuses many English speakers. A room 'al quarto piano' is actually five stories up from the street."},

    {type:"teach", trg:"la colazione inclusa", src:"breakfast included", pos:"noun", gender:"f",
     note:"'La colazione e inclusa nel prezzo' = breakfast is included in the price.\nAlways ask when booking.",
     example:"A: La colazione e inclusa?\nB: Si, dalle 7 alle 10.",
     exampleSrc:"A: Is breakfast included?\nB: Yes, from 7 to 10.",
     funFact:"Italian hotel breakfasts vary hugely. Luxury hotels offer abundant buffets. Small B&Bs serve classic Italian breakfast: coffee, cornetto, and juice. International-style breakfasts with eggs are available mainly at 4-5 star hotels."},

    {type:"teach", trg:"il bagno privato", src:"private bathroom", pos:"noun", gender:"m",
     note:"'Con bagno privato' = with private bathroom.\n'Bagno in comune' = shared bathroom (cheaper options).",
     example:"A: La camera ha il bagno privato?\nB: Si, con doccia e bidet.",
     exampleSrc:"A: Does the room have a private bathroom?\nB: Yes, with shower and bidet.",
     funFact:"The bidet is standard in Italian bathrooms. Italy and Portugal are the only European countries where bidets are legally required in homes. Italian travelers abroad are often shocked to find hotels without bidets."},

    {type:"teach", trg:"il lenzuolo", src:"the bed sheet", pos:"noun", gender:"m",
     note:"Masculine. Unusual plural: le lenzuola (feminine!).\n'Cambiare le lenzuola' = to change the sheets.",
     example:"A: Le lenzuola sono pulite?\nB: Certo, le cambiamo ogni giorno.",
     exampleSrc:"A: Are the sheets clean?\nB: Of course, we change them every day.",
     funFact:"'Il lenzuolo' (masculine singular) becomes 'le lenzuola' (feminine plural). This gender-switching plural is rare in Italian and catches learners off guard. Other examples: 'il braccio/le braccia' (arm/arms), 'il ginocchio/le ginocchia' (knee/knees)."},

    {type:"teach", trg:"l'aria condizionata", src:"air conditioning", pos:"noun", gender:"f",
     note:"Feminine. 'C'e l'aria condizionata?' = Is there AC?\nAbbreviated: 'l'AC' or 'il condizionatore.'",
     example:"A: La camera ha l'aria condizionata?\nB: Si, con il telecomando sul comodino.",
     exampleSrc:"A: Does the room have air conditioning?\nB: Yes, with the remote on the nightstand.",
     funFact:"Air conditioning in Italian homes was rare until recently. Many Italians believe 'l'aria condizionata' causes illness (the feared 'colpo d'aria'). Hotels in southern Italy absolutely need AC in summer, when temperatures exceed 40 degrees."},

    {type:"teach", trg:"svegliare", src:"to wake (someone) up", pos:"verb", gender:null,
     note:"Regular -are verb. 'Mi può svegliare alle sette?' = Can you wake me at seven?\n'La sveglia' = wake-up call.",
     example:"A: Mi può svegliare alle sei domani?\nB: Certo, le faremo la sveglia.",
     exampleSrc:"A: Can you wake me at six tomorrow?\nB: Of course, we will give you a wake-up call.",
     funFact:"The 'sveglia telefonica' (telephone wake-up call) is still offered at Italian hotels. In the age of smartphones, fewer people use it, but it remains a charming hotel service. The receptionist ('portiere') personally calls your room."},

    {type:"teach", trg:"il reclamo", src:"the complaint (hotel)", pos:"noun", gender:"m",
     note:"Masculine. 'Fare un reclamo' = to make a complaint.\nItalian hotels must have a complaints procedure.",
     example:"A: Vorrei fare un reclamo. La camera e rumorosa.\nB: Mi dispiace, la cambiamo subito.",
     exampleSrc:"A: I would like to make a complaint. The room is noisy.\nB: I am sorry, we will change it right away.",
     funFact:"Italian consumer protection law requires hotels to address complaints. The 'libro dei reclami' (complaints book) must be available. However, a polite but firm approach works best: Italian hospitality responds to charm better than confrontation."},

    {type:"teach", trg:"consigliare", src:"to recommend", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ci consiglia un ristorante?' = Can you recommend a restaurant?\nHotel staff are great local guides.",
     example:"A: Ci consiglia un ristorante vicino?\nB: Si, la trattoria all'angolo e ottima.",
     exampleSrc:"A: Can you recommend a nearby restaurant?\nB: Yes, the trattoria on the corner is excellent.",
     funFact:"Italian hotel staff ('personale dell'albergo') often have excellent local knowledge. Asking 'cosa ci consiglia?' is the best way to find authentic restaurants. They will steer you away from tourist traps toward genuine local gems."},

    {type:"teach", trg:"la vista", src:"the view", pos:"noun", gender:"f",
     note:"Feminine. 'Camera con vista' = room with a view.\n'Che bella vista!' = What a beautiful view!",
     example:"A: Avete una camera con vista sul mare?\nB: Si, al quinto piano.",
     exampleSrc:"A: Do you have a room with a sea view?\nB: Yes, on the fifth floor.",
     funFact:"'Camera con vista' (room with a view) is the title of E.M. Forster's famous novel set in Florence. In Italy, views are premium: 'vista mare' (sea view), 'vista montagna' (mountain view), and 'vista città' (city view) command higher prices."},

    // Quiz steps
    {type:"mc", q:"Qual e la differenza tra 'camera doppia' e 'camera matrimoniale'?",
     opts:["Doppia has two single beds; matrimoniale has one double bed","They are the same thing","Doppia is bigger; matrimoniale is smaller","Matrimoniale is more expensive"],
     ans:"Doppia has two single beds; matrimoniale has one double bed",
     hint:"The b... configuration is different. One has separate b..., the other a shared one."},

    {type:"fb", s:"Ho una {1} a nome Bianchi.",
     a:["prenotazione"], opts:["prenotazione","camera","chiave","vista"],
     hint:"You are telling the receptionist about your booking.",
     sSrc:"I have a {1} under the name Bianchi."},

    {type:"match", pairs:[
      {trg:"la chiave", src:"key"},
      {trg:"l'ascensore", src:"elevator"},
      {trg:"il piano", src:"floor"},
      {trg:"la vista", src:"view"},
      {trg:"il lenzuolo", src:"sheet"}
    ,{trg:"la camera",src:"the room (hotel)"}]},

    {type:"mc", q:"Perche i bagni italiani hanno sempre un bidet?",
     opts:["It is a recent trend","It is legally required in Italian homes","Hotels choose to install them","Only luxury hotels have them"],
     ans:"It is legally required in Italian homes",
     hint:"Italy is one of the few countries where this bathroom fixture is mandatory by law."},

    {type:"fb", s:"La camera ha l'{1}? Fa molto caldo.",
     a:["aria condizionata"], opts:["aria condizionata","ascensore","albergo","analisi"],
     hint:"You need cooling because of the heat.",
     sSrc:"Does the room have {1}? It is very hot."},

    {type:"mc", q:"Cos'e il 'piano terra' in Italia?",
     opts:["The basement","The top floor","The ground floor","The first floor"],
     ans:"The ground floor",
     hint:"Italian f... numbering starts counting from above this level."},

    {type:"fb", s:"Ci {1} un buon ristorante per stasera?",
     a:["consiglia"], opts:["consiglia","prenota","sveglia","cambia"],
     hint:"You are asking the hotel staff for a restaurant recommendation.",
     sSrc:"Can you {1} a good restaurant for tonight?"},

    {type:"mc", q:"Cosa succede al plurale di 'lenzuolo'?",
     opts:["It stays the same: i lenzuoli","It adds -i: i lenzuoli","There is no plural form","It changes gender: il lenzuolo becomes le lenzuola"],
     ans:"It changes gender: il lenzuolo becomes le lenzuola",
     hint:"This is one of Italian's rare g...-switching plurals."}
  ]
};
export default BATCH4_U10_L1;
