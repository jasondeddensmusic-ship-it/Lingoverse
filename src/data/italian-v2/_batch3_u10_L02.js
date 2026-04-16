// Batch 3 — Unit 10, Lesson 2: Visitare le citta (Sightseeing)
const BATCH3_U10_L2 = {
  id:"itv2_u10l_b3_2", title:"Visitare le citta", icon:"\uD83C\uDFDB\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Visitare le citta",
     desc:"Learn sightseeing vocabulary for exploring Italian cities. From museums to monuments, these words help you discover Italy's incredible cultural heritage.",
     goals:["Name tourist attractions and landmarks","Ask for directions and information","Talk about sightseeing experiences"]},

    {type:"teach", trg:"il monumento", src:"the monument", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'monumentum' (reminder).\nItaly has more monuments than any country.",
     example:"A: Questo monumento e molto antico.\nB: Si, ha duemila anni!",
     exampleSrc:"A: This monument is very ancient.\nB: Yes, it is two thousand years old!",
     funFact:"Italy has the highest number of UNESCO World Heritage Sites in the world (over 55). From the Colosseum to Pompeii, Italian monuments span three millennia. The country spends billions on 'restauro' (restoration) to preserve its unmatched heritage."},

    {type:"teach", trg:"la cattedrale", src:"the cathedral", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'cathedra' (chair/seat of the bishop).\nSynonym: il duomo.",
     example:"A: La cattedrale di Milano e enorme.\nB: Ci vogliono 500 anni per costruirla.",
     exampleSrc:"A: The Milan cathedral is enormous.\nB: It took 500 years to build it.",
     funFact:"Every major Italian city has a 'duomo' or 'cattedrale.' The Duomo di Milano took over 500 years to complete (1386-1965). Florence's Duomo, with Brunelleschi's dome, remains an engineering marvel. Italian cathedrals are free to enter, though some charge for towers and rooftop access."},

    {type:"teach", trg:"il ponte", src:"the bridge", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'pons, pontis' (bridge).\n'Ponte Vecchio' = Old Bridge (in Florence).",
     example:"A: Il Ponte Vecchio e bellissimo al tramonto.\nB: Facciamo una foto!",
     exampleSrc:"A: The Ponte Vecchio is beautiful at sunset.\nB: Let us take a photo!",
     funFact:"Florence's Ponte Vecchio (1345) is the only bridge in Florence that survived World War II. German troops destroyed all others but spared the Ponte Vecchio, allegedly on Hitler's direct order. Today it houses jewelry shops, continuing a tradition started in the 16th century."},

    {type:"teach", trg:"la piazza", src:"the square / plaza", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'platea' (broad street).\nThe social heart of every Italian town.",
     example:"A: Ci vediamo in piazza alle otto.\nB: Perfetto, vicino alla fontana.",
     exampleSrc:"A: Let us meet in the square at eight.\nB: Perfect, near the fountain.",
     funFact:"The piazza is central to Italian life. Every town has one where people gather for the evening 'passeggiata' (stroll). Famous piazzas include Piazza San Marco (Venice), Piazza Navona (Rome), and Piazza del Campo (Siena). The shape and architecture of a piazza define a town's character."},

    {type:"teach", trg:"la fontana", src:"the fountain", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'fontana' (spring).\n'Fontana di Trevi' = Trevi Fountain.",
     example:"A: Hai lanciato la moneta nella fontana?\nB: Si, per tornare a Roma!",
     exampleSrc:"A: Did you throw a coin in the fountain?\nB: Yes, to come back to Rome!",
     funFact:"Throwing a coin over your left shoulder into the Trevi Fountain supposedly guarantees your return to Rome. About 3,000 euros are thrown daily. The money is collected and donated to charity. Rome has over 2,000 public drinking fountains ('nasoni'), providing free clean water."},

    {type:"teach", trg:"la torre", src:"the tower", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'turris' (tower).\n'Torre pendente di Pisa' = Leaning Tower of Pisa.",
     example:"A: La torre di Pisa pende davvero!\nB: Si, quasi quattro gradi!",
     exampleSrc:"A: The Tower of Pisa really leans!\nB: Yes, almost four degrees!",
     funFact:"The Tower of Pisa began leaning during construction in 1173 due to soft ground on one side. Engineering work in the 1990s stabilized it. Medieval Italian cities competed to build the tallest towers. San Gimignano still has 14 of its original 72 towers, earning the nickname 'Medieval Manhattan.'"},

    {type:"teach", trg:"la guida", src:"the guide / guidebook", pos:"noun", gender:"f",
     note:"Feminine. Also: 'la guida turistica' (tour guide, person).\n'Visita guidata' = guided tour.",
     example:"A: Prendiamo una guida?\nB: Si, impariamo di piu con una visita guidata.",
     exampleSrc:"A: Shall we get a guide?\nB: Yes, we learn more with a guided tour.",
     funFact:"Licensed tour guides in Italy must pass rigorous state exams specific to their city or region. An unauthorized guide cannot legally give paid tours at major sites. The profession is protected to ensure quality and accuracy. Audio guides ('audioguide') are available at most major museums."},

    {type:"teach", trg:"il biglietto d'ingresso", src:"the entrance ticket", pos:"noun", gender:"m",
     note:"Masculine. 'Ingresso' = entrance.\n'Biglietto ridotto' = reduced/discounted ticket.",
     example:"A: Quanto costa il biglietto d'ingresso?\nB: Quindici euro, ridotto dieci.",
     exampleSrc:"A: How much is the entrance ticket?\nB: Fifteen euros, reduced ten.",
     funFact:"Many Italian museums offer 'biglietto ridotto' (reduced tickets) for EU citizens under 25 and free entry for those under 18. The first Sunday of each month ('domenica al museo'), many state museums offer free admission. Booking online ('prenotazione') avoids long queues at popular sites."},

    {type:"teach", trg:"la mappa", src:"the map", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'mappa' (cloth, napkin, then map).\n'Mappa della citta' = city map.",
     example:"A: Hai una mappa della citta?\nB: Si, c'e anche la versione digitale.",
     exampleSrc:"A: Do you have a city map?\nB: Yes, there is also the digital version.",
     funFact:"'Mappa' originally meant 'cloth' in Latin, because early maps were drawn on cloth. Italian cartography was revolutionary: Fra Mauro's 1459 map was the most detailed world map of its time. Today, Italian tourist offices ('ufficio turistico') still offer free paper maps alongside digital options."},

    {type:"teach", trg:"la cartolina", src:"the postcard", pos:"noun", gender:"f",
     note:"Feminine. Diminutive of 'carta' (paper).\n'Mandare una cartolina' = to send a postcard.",
     example:"A: Compriamo delle cartoline?\nB: Si, ne mando una alla nonna.",
     exampleSrc:"A: Shall we buy some postcards?\nB: Yes, I will send one to grandma.",
     funFact:"Sending postcards ('cartoline') from Italy is a cherished tradition. Italian 'Poste Italiane' red mailboxes are found everywhere. Postcards from famous Italian cities remain popular souvenirs. The Italian postal service, though sometimes slow, eventually delivers worldwide."},

    {type:"teach", trg:"il souvenir", src:"the souvenir", pos:"noun", gender:"m",
     note:"Masculine. From French 'souvenir' (memory).\n'Negozio di souvenir' = souvenir shop.",
     example:"A: Devo comprare un souvenir per mia sorella.\nB: Che ne dici di un bel piatto decorato?",
     exampleSrc:"A: I need to buy a souvenir for my sister.\nB: How about a nice decorated plate?",
     funFact:"Italian souvenir shops range from tacky to artisanal. For authentic gifts, look for local products: ceramics from Deruta, glass from Murano, leather from Florence, limoncello from the Amalfi Coast. Avoid mass-produced items marked 'Made in China' sold near tourist sites."},

    {type:"teach", trg:"il tramonto", src:"the sunset", pos:"noun", gender:"m",
     note:"Masculine. From 'tramontare' (to set, go beyond the mountain).\n'Guardare il tramonto' = to watch the sunset.",
     example:"A: Che bel tramonto!\nB: L'Italia ha i tramonti piu belli del mondo.",
     exampleSrc:"A: What a beautiful sunset!\nB: Italy has the most beautiful sunsets in the world.",
     funFact:"'Tramontare' literally means 'to go beyond the mountain' (tra + monte). Italian sunsets are famous, especially over the sea in Cinque Terre, from Piazzale Michelangelo in Florence, and from the Spanish Steps in Rome. 'L'ora d'oro' (the golden hour) before sunset is magical in Italy."},

    // Quiz steps
    {type:"mc", q:"What does throwing a coin in the Trevi Fountain supposedly guarantee?",
     opts:["Good luck in love","A wish of any kind","Your return to Rome","Financial prosperity"],
     ans:"Your return to Rome",
     hint:"Over your left shoulder, into the water. About 3,000 euros daily. The money goes to charity."},

    {type:"fb", s:"Ci vediamo in {1} alle otto.",
     a:["piazza"],
     opts:["piazza","torre","ponte","fontana"],
     hint:"The central public square of every Italian town. The social gathering point for the evening 'passeggiata.'",
     sSrc:"Let us meet in the {1} at eight."},

    {type:"match", pairs:[
      {trg:"il monumento", src:"the monument"},
      {trg:"la cattedrale", src:"the cathedral"},
      {trg:"il ponte", src:"the bridge"},
      {trg:"la piazza", src:"the square"},
      {trg:"la fontana", src:"the fountain"}
    ]},

    {type:"mc", q:"What happens on the first Sunday of each month at Italian state museums?",
     opts:["Museums are closed entirely","Extended hours until midnight","Free admission is offered","Only Italian citizens may enter"],
     ans:"Free admission is offered",
     hint:"'Domenica al museo' is a national initiative. It is a great opportunity to visit major sites without paying entrance fees."},

    {type:"fb", s:"Quanto costa il {1} d'ingresso?",
     a:["biglietto"],
     opts:["biglietto","modulo","souvenir","mappa"],
     hint:"You need to purchase this before entering a museum or attraction. Reduced prices exist for young EU citizens.",
     sSrc:"How much is the entrance {1}?"},

    {type:"mc", q:"What does 'tramontare' literally mean?",
     opts:["To rise above the clouds","To go beyond the mountain","To shine on the water","To disappear into fog"],
     ans:"To go beyond the mountain",
     hint:"'Tra' (b...) + 'monte' (m...). The sun sets by going b... the mountains. A beautifully poetic Italian word."},

    {type:"fb", s:"Prendiamo una {1} turistica?",
     a:["guida"],
     opts:["guida","mappa","cartolina","torre"],
     hint:"A person or book that explains the sights. Licensed professionals in Italy must pass rigorous exams for this role.",
     sSrc:"Shall we get a tour {1}?"},

    {type:"mc", q:"Why must tour guides in Italy be licensed?",
     opts:["To collect taxes on tours","To ensure quality and historical accuracy","To limit the number of tourists","To protect hotel businesses"],
     ans:"To ensure quality and historical accuracy",
     hint:"Guides pass city-specific state exams. The profession is protected to guarantee visitors receive reliable, accurate information about Italy's rich heritage."}
  ]
};
export default BATCH3_U10_L2;
