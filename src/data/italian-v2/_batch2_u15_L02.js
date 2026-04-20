// Unit 15 Batch2. Lesson 2: Moving & Neighborhood Life
const BATCH2_U15_L2 = {
  id:"itv2_u15l_b2_2", title:"Il quartiere", icon:"🏘️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il quartiere",
     desc:"Learn vocabulary for neighborhoods, moving logistics, and community life. These words help you describe where you live and navigate the practical side of Italian housing.",
     goals:["Describe your neighborhood in Italian","Handle moving logistics","Discuss community and neighborhood life"]},

    {type:"teach", trg:"il quartiere", src:"the neighborhood / district", pos:"noun", gender:"m",
     note:"Masculine. From French 'quartier.'\n'Quartiere residenziale' = residential area.",
     example:"A: In che quartiere abiti?\nB: A Trastevere. E un quartiere molto vivace.",
     exampleSrc:"A: What neighborhood do you live in?\nB: In Trastevere. It is a very lively neighborhood.",
     funFact:"Italian cities are divided into 'quartieri' with distinct identities. Rome has Trastevere (bohemian), Prati (elegant), Testaccio (working-class, now trendy). Milan has Brera (artistic), Navigli (canals, nightlife), Isola (hip). Knowing the quartiere tells you everything about lifestyle and rent prices."},

    {type:"teach", trg:"la zona", src:"the area / zone", pos:"noun", gender:"f",
     note:"Feminine. More general than 'quartiere.'\n'Zona pedonale' = pedestrian zone. 'Zona residenziale' = residential area.",
     example:"A: E una zona tranquilla?\nB: Si, molto. C'e poco traffico.",
     exampleSrc:"A: Is it a quiet area?\nB: Yes, very. There is little traffic.",
     funFact:"Italian cities have ZTL ('Zona a Traffico Limitato'), restricted traffic zones where only authorized vehicles can enter. Cameras enforce these zones, and tourists often receive fines weeks later. Every Italian driver knows to check for ZTL signs before entering a city center."},

    {type:"teach", trg:"il furgone", src:"the van (for moving)", pos:"noun", gender:"m",
     note:"Masculine. From French 'fourgon.'\n'Noleggiare un furgone' = to rent a van.",
     example:"A: Hai noleggiato il furgone per il trasloco?\nB: Si, per sabato mattina.",
     exampleSrc:"A: Did you rent the van for the move?\nB: Yes, for Saturday morning.",
     funFact:"Renting a 'furgone' for moving is common in Italy. Companies like Europcar and local services offer daily rates. Many Italians instead borrow a friend's van or hire 'traslocatori' (movers). The famous Italian expression 'Tra il dire e il fare c'e di mezzo il mare' (between saying and doing lies the sea) applies perfectly to moving day."},

    {type:"teach", trg:"la scatola", src:"the box / cardboard box", pos:"noun", gender:"f",
     note:"Feminine. 'Scatola di cartone' = cardboard box.\nEssential for moving: 'Quante scatole servono?'",
     example:"A: Ho bisogno di più scatole per il trasloco.\nB: Chiedi al supermercato, ne hanno sempre.",
     exampleSrc:"A: I need more boxes for the move.\nB: Ask the supermarket, they always have some.",
     funFact:"'Scatola' covers all boxes: cardboard ('di cartone'), metal ('di latta'), and decorative ('portagioie'). Italian supermarkets are a reliable source of free cardboard boxes. During moving season (typically September and spring), the competition for good boxes is real."},

    {type:"teach", trg:"il parcheggio", src:"the parking / parking space", pos:"noun", gender:"m",
     note:"Masculine. From 'parcheggiare' (to park).\n'Posto auto' = parking spot. 'Autorimessa' = garage.",
     example:"A: C'e un parcheggio per i residenti?\nB: Si, ma la lista d'attesa e lunga.",
     exampleSrc:"A: Is there parking for residents?\nB: Yes, but the waiting list is long.",
     funFact:"Parking in Italian cities is color-coded: white lines are free, blue lines are paid, yellow lines are reserved (disabled, loading, residents). 'Doppia fila' (double parking) is an Italian art form, especially in Naples and Rome. Having a 'posto auto' (parking space) dramatically increases apartment value."},

    {type:"teach", trg:"il palazzo", src:"the building / apartment block", pos:"noun", gender:"m",
     note:"Masculine. Can mean palace or apartment building depending on context.\n'Il palazzo di fronte' = the building opposite.",
     example:"A: In che palazzo abiti?\nB: Nel palazzo rosso all'angolo.",
     exampleSrc:"A: Which building do you live in?\nB: In the red building on the corner.",
     funFact:"'Palazzo' can mean both 'palace' and 'apartment building.' In Italian cities, many apartment buildings occupy what were once aristocratic palaces, divided into flats over centuries. A 'palazzo storico' (historic building) often has grand staircases, frescoed ceilings, and tiny modern kitchens."},

    {type:"teach", trg:"il citofono", src:"the intercom / buzzer", pos:"noun", gender:"m",
     note:"Masculine. From 'cito-' (quick) + 'fono' (sound).\nEvery Italian apartment building has one at the entrance.",
     example:"A: Suona il citofono.\nB: Chi e? Sono il postino!",
     exampleSrc:"A: Ring the intercom.\nB: Who is it? It is the mailman!",
     funFact:"The 'citofono' is a defining feature of Italian apartment living. Visitors press the button, speak through the intercom, and the resident buzzes open the main door. Modern 'videocitofoni' (video intercoms) show who is at the door. The classic phrase 'Chi e?' (Who is it?) through the citofono is an Italian daily ritual."},

    {type:"teach", trg:"il mercato rionale", src:"the local neighborhood market", pos:"noun", gender:"m",
     note:"Masculine. 'Rionale' = of the neighborhood ('rione').\nOften open-air, with fresh produce and local goods.",
     example:"A: Vai al mercato rionale?\nB: Si, la frutta e più fresca che al supermercato.",
     exampleSrc:"A: Are you going to the neighborhood market?\nB: Yes, the fruit is fresher than at the supermarket.",
     funFact:"Italian neighborhood markets are cultural institutions. Rome's Testaccio market, Florence's San Lorenzo market, and Turin's Porta Palazzo are famous. Vendors build relationships with regular customers, offering discounts and saving the best produce. 'Fare la spesa al mercato' (shopping at the market) is a cherished Italian tradition."},

    {type:"teach", trg:"la portineria", src:"the concierge lodge / doorman's office", pos:"noun", gender:"f",
     note:"Feminine. The small room at a building's entrance where the doorman works.\n'Il portiere' = the doorman.",
     example:"A: Lascia il pacco in portineria.\nB: Il portiere lo tiene per te.",
     exampleSrc:"A: Leave the package at the concierge lodge.\nB: The doorman will keep it for you.",
     funFact:"The 'portineria' is disappearing from Italian buildings as costs rise and security systems replace human doormen. Once, every building had a 'portiere' (doorman) who knew everything about the residents. They accepted packages, kept spare keys, and were the building's unofficial information center."},

    {type:"teach", trg:"la raccolta dei rifiuti", src:"waste collection / garbage pickup", pos:"noun", gender:"f",
     note:"Feminine. 'Raccolta' = collection. 'Rifiuti' = waste.\n'Il calendario della raccolta' = the collection schedule.",
     example:"A: Quando e la raccolta dei rifiuti?\nB: La plastica il lunedì, la carta il giovedì.",
     exampleSrc:"A: When is waste collection?\nB: Plastic on Monday, paper on Thursday.",
     funFact:"Italian waste collection schedules vary by city and are strictly enforced. Putting the wrong waste out on the wrong day can result in fines. Many cities use 'porta a porta' (door-to-door) collection where specific bags or bins are collected on assigned days. The learning curve for new residents is steep."},

    {type:"teach", trg:"il cortile", src:"the courtyard / inner yard", pos:"noun", gender:"m",
     note:"Masculine. The open area inside a building complex.\nCommon in older Italian apartment buildings.",
     example:"A: I bambini giocano nel cortile.\nB: E un cortile grande con gli alberi.",
     exampleSrc:"A: The children play in the courtyard.\nB: It is a big courtyard with trees.",
     funFact:"Many Italian apartment buildings have a 'cortile interno' (inner courtyard) that provides light and air to the surrounding apartments. In historic buildings, these courtyards can be stunning, with fountains, gardens, and cobblestones. They serve as communal gathering spaces for residents."},

    // Quiz steps
    {type:"mc", q:"What does the Italian color-coded parking system mean?",
     opts:["White is expensive, blue is medium, yellow is cheap","White is free, blue is paid, yellow is reserved","White is for visitors, blue for residents, yellow for taxis","All colors indicate the same unrestricted parking"],
     ans:"White is free, blue is paid, yellow is reserved",
     hint:"W... lines = f... parking. B... lines = p... (buy a ticket). Y... lines = r... for disabled, loading, or residents."},

    {type:"fb", s:"In che {1} abiti?",
     a:["quartiere"],
     opts:["quartiere","palazzo","piano","cortile"],
     hint:"This word means 'neighborhood' or 'district.' Each one in an Italian city has its own distinct character and identity.",
     sSrc:"What {1} do you live in?"},

    {type:"match", pairs:[
      {trg:"il quartiere", src:"the neighborhood"},
      {trg:"il furgone", src:"the van"},
      {trg:"il parcheggio", src:"the parking"},
      {trg:"il citofono", src:"the intercom"},
      {trg:"il cortile", src:"the courtyard"}
    ]},

    {type:"mc", q:"What is 'il citofono'?",
     opts:["A type of Italian musical instrument","The mailbox at the building entrance","An intercom system to buzz visitors in","A security camera inside apartments"],
     ans:"An intercom system to buzz visitors in",
     hint:"V... press the button, speak, and the resident unlocks the main door remotely. 'Chi e?' is the classic greeting through it."},

    {type:"fb", s:"Hai noleggiato il {1} per il trasloco?",
     a:["furgone"],
     opts:["furgone","parcheggio","palazzo","citofono"],
     hint:"You need a large vehicle to transport furniture and boxes to the new apartment on moving day.",
     sSrc:"Did you rent the {1} for the move?"},

    {type:"mc", q:"What is 'la ZTL' in Italian cities?",
     opts:["A zone reserved for public transport only","A tax-free shopping district","A restricted traffic zone with limited access","A zone for tourists and pedestrians"],
     ans:"A restricted traffic zone with limited access",
     hint:"Cameras enforce these zones. Only authorized vehicles may enter. Many tourists learn about ZTL through unexpected fines."},

    {type:"fb", s:"Lascia il pacco in {1}.",
     a:["portineria"],
     opts:["portineria","parcheggio","cortile","zona"],
     hint:"This is the small office at the building entrance where the doorman works and accepts deliveries.",
     sSrc:"Leave the package at the {1}."},

    {type:"mc", q:"What happens if you put the wrong waste out on the wrong day?",
     opts:["Nothing, it is just a suggestion","The waste collectors sort it for you","You can receive a fine from the municipality","Your neighbors will resort and fix the mistake"],
     ans:"You can receive a fine from the municipality",
     hint:"Italian waste collection schedules are strictly enforced. Wrong waste on the wrong day means potential 'sanzioni' (fines)."}
  ,{type:"match",pairs:[{trg:"la zona",src:"the area / zone"},{trg:"la scatola",src:"the box / cardboard box"},{trg:"il palazzo",src:"the building / apartment block"},{trg:"il mercato rionale",src:"the local neighborhood market"},{trg:"la raccolta dei rifiuti",src:"waste collection / garbage pickup"}]}]
};
export default BATCH2_U15_L2;
