// Unit 06 Expansion. Lesson 4: City Services & Buildings
// Theme: Post office, bank, police, government buildings, services

const LESSON_4 = {
  id:"itv2_u6l4b", title:"I servizi in citta", icon:"\ud83c\udfe4", xp:15, board:true,
  steps:[
    {type:"intro", title:"I servizi in citta",
     desc:"Learn vocabulary for essential city services and public buildings you may need in daily life.",
     goals:["Name important public buildings and services","Ask where services are located","Handle basic service interactions"]},

    {type:"teach", trg:"la posta", src:"the post office / mail", pos:"noun", gender:"f",
     note:"Feminine. Means both the post office and mail in general.\n'L'ufficio postale' = post office (formal). 'Andare alla posta' = to go to the post office.",
     example:"A: Devo andare alla posta.\nB: Cosa devi spedire?",
     exampleSrc:"A: I need to go to the post office.\nB: What do you need to send?",
     funFact:"'Poste Italiane' is the national postal service. Italian post offices also handle banking, bill payments, and government documents. They are multi-service hubs, much more than just mail delivery."},

    {type:"teach", trg:"la banca", src:"the bank", pos:"noun", gender:"f",
     note:"Feminine. From Italian 'banco' (bench, counter).\nPlural: le banche. 'Il conto in banca' = bank account.",
     example:"A: Dov'e la banca piu vicina?\nB: In Piazza Garibaldi.",
     exampleSrc:"A: Where is the nearest bank?\nB: In Garibaldi Square.",
     funFact:"The English word 'bank' comes from Italian 'banco' (bench). Medieval Italian money changers conducted business on benches in the marketplace. When a banker went broke, his bench was broken: 'banca rotta' (bankrupt)."},

    {type:"teach", trg:"la biblioteca", src:"the library", pos:"noun", gender:"f",
     note:"Feminine. False friend: NOT 'bookstore' (that is 'la libreria').\nFrom Greek 'bibliotheke' (book storage).",
     example:"A: Vado in biblioteca a studiare.\nB: Buono studio!",
     exampleSrc:"A: I'm going to the library to study.\nB: Good studying!",
     funFact:"Classic false friend: 'la biblioteca' = library, 'la libreria' = bookstore. English speakers often confuse them. 'Biblio-' means book (from Greek), and '-teca' means storage place. A library stores books."},

    {type:"teach", trg:"la libreria", src:"the bookstore", pos:"noun", gender:"f",
     note:"Feminine. NOT 'library' (that is 'la biblioteca').\nAlso means 'bookshelf' in furniture contexts.",
     example:"A: Andiamo in libreria?\nB: Si, cerco un libro nuovo.",
     exampleSrc:"A: Shall we go to the bookstore?\nB: Yes, I am looking for a new book.",
     funFact:"'Libreria' from 'libro' (book) + '-eria' (place of). Italy has beautiful independent bookstores. The world's most famous is 'Libreria Acqua Alta' in Venice, where books are stacked in bathtubs and gondolas to avoid flood damage."},

    {type:"teach", trg:"la scuola", src:"the school", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'schola,' from Greek 'schole' (leisure, study).\nPlural: le scuole.",
     example:"A: Dove vai?\nB: Vado a scuola.",
     exampleSrc:"A: Where are you going?\nB: I am going to school.",
     funFact:"Greek 'schole' originally meant 'leisure' because learning was a luxury activity. Only those with free time could study. The irony that 'school' comes from 'leisure' is not lost on students."},

    {type:"teach", trg:"l'universita", src:"the university", pos:"noun", gender:"f",
     note:"Feminine. Invariable in plural (accent on final vowel).\nFrom Latin 'universitas' (the whole community).",
     example:"A: Dove studi?\nB: All'universita di Bologna.",
     exampleSrc:"A: Where do you study?\nB: At the University of Bologna.",
     funFact:"The University of Bologna, founded in 1088, is the oldest continuously operating university in the world. Italy is the birthplace of the university system. 'Universita' does not change in the plural: 'le universita.'"},

    {type:"teach", trg:"la polizia", src:"the police", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'politia' (civil administration).\nItaly has multiple police forces: polizia, carabinieri, vigili.",
     example:"A: Chiama la polizia!\nB: Il numero e 113.",
     exampleSrc:"A: Call the police!\nB: The number is 113.",
     funFact:"Italy has at least five police forces: Polizia di Stato (state police, 113), Carabinieri (military police, 112), Guardia di Finanza (financial police), Polizia Municipale (city police), and Polizia Penitenziaria (prison police)."},

    {type:"teach", trg:"i vigili del fuoco", src:"the firefighters", pos:"noun", gender:"m",
     note:"Masculine plural. Literally: 'guards of fire.'\nEmergency number: 115. Also called 'i pompieri.'",
     example:"A: C'e un incendio! Chiama i vigili del fuoco!\nB: Il numero e 115.",
     exampleSrc:"A: There is a fire! Call the firefighters!\nB: The number is 115.",
     funFact:"'Vigili del fuoco' literally means 'fire watchmen.' 'Pompieri' (from 'pompa' = pump) is the informal alternative. Italian firefighters also respond to floods, earthquakes, and other natural disasters, very common in seismically active Italy."},

    {type:"teach", trg:"l'ambasciata", src:"the embassy", pos:"noun", gender:"f",
     note:"Feminine. Uses l' before vowel. From Provencal 'ambaisada.'\nImportant for travelers: know where your embassy is.",
     example:"A: Dov'e l'ambasciata americana?\nB: A Roma, in Via Veneto.",
     exampleSrc:"A: Where is the American embassy?\nB: In Rome, on Via Veneto.",
     funFact:"All foreign embassies in Italy are in Rome. For consular services in other cities, look for 'il consolato' (the consulate). 'Ambasciata' comes from a Germanic root meaning 'mission' or 'service.'"},

    {type:"teach", trg:"il municipio", src:"the city hall / town hall", pos:"noun", gender:"m",
     note:"Masculine. Where civil ceremonies and local government operate.\nFrom Latin 'municipium' (self-governing town).",
     example:"A: Il municipio e in piazza.\nB: Si, accanto alla chiesa.",
     exampleSrc:"A: The city hall is in the square.\nB: Yes, next to the church.",
     funFact:"From Latin 'municipium' (a town with self-governance). English 'municipal' shares this root. Italian town halls are often beautiful historic buildings in the main piazza. Civil weddings take place here."},

    {type:"teach", trg:"l'edicola", src:"the newsstand", pos:"noun", gender:"f",
     note:"Feminine. Uses l' before vowel.\nSells newspapers, magazines, bus tickets, and phone cards.",
     example:"A: Compro il giornale all'edicola.\nB: Prendi anche un biglietto dell'autobus?",
     exampleSrc:"A: I'll buy the newspaper at the newsstand.\nB: Can you get a bus ticket too?",
     funFact:"Italian newsstands ('edicole') are disappearing but still exist on many street corners. They sell much more than papers: bus tickets, phone credit, lottery tickets, and small gifts. The name comes from Latin 'aedicula' (small temple)."},

    // Quiz steps
    {type:"mc", q:"What is 'la biblioteca' in English?",
     opts:["The library","The bookstore","The Bible store","The bookshelf"],
     ans:"The library",
     hint:"A classic false friend for English speakers. The bookstore is 'la libreria.' This word stores books for public use."},

    {type:"fb", s:"Dov'e la {1} piu vicina?",
     a:["banca"],
     opts:["banca","biblioteca","scuola","posta"],
     hint:"You need to handle money matters. This institution's English name comes from the Italian word for 'bench.'",
     sSrc:"Where is the nearest {1}?"},

    {type:"mc", q:"What emergency number reaches the Italian state police?",
     opts:["118","113","112","115"],
     ans:"113",
     hint:"Italy has separate numbers for different emergency services. The state police (Polizia di Stato) uses this three-digit number."},

    {type:"fb", s:"Vado a {1} ogni giorno.",
     a:["scuola"],
     opts:["scuola","banca","posta","biblioteca"],
     hint:"Students go to this place daily for learning. From Greek 'schole' (leisure).",
     sSrc:"I go to {1} every day."},

    {type:"match", pairs:[
      {trg:"la posta", src:"the post office"},
      {trg:"la banca", src:"the bank"},
      {trg:"la biblioteca", src:"the library"},
      {trg:"la scuola", src:"the school"},
      {trg:"il municipio", src:"the city hall"}
    ]},

    {type:"mc", q:"Why does English 'bankrupt' come from Italian?",
     opts:["English borrowed the word randomly","It comes from Latin","Medieval Italian bankers' benches were broken when they failed","Banks were invented in Italy"],
     ans:"Medieval Italian bankers' benches were broken when they failed",
     hint:"'Banca rotta' (b... bench) described what happened to a f... money changer's workplace in the marketplace."},

    {type:"fb", s:"L'{1} di Bologna e la piu antica del mondo.",
     a:["universita"],
     opts:["universita","ambasciata","edicola","biblioteca"],
     hint:"Founded in 1088, this institution of higher learning is the oldest continuously operating one in the world.",
     sSrc:"The {1} of Bologna is the oldest in the world."},

    {type:"mc", q:"What does 'l'edicola' sell besides newspapers?",
     opts:["Only newspapers","Only books","Only food","Bus tickets, phone cards, magazines"],
     ans:"Bus tickets, phone cards, magazines",
     hint:"Italian newsstands are multi-purpose kiosks. They are convenient one-stop shops for small daily needs."},

    {type:"fb", s:"Chiama i {1} del fuoco! C'e un incendio!",
     a:["vigili"],
     opts:["vigili","polizia","dottori","signori"],
     hint:"These are the fire guards. Their emergency number is 115.",
     sSrc:"Call the {1}! There is a fire!"},

    {type:"mc", q:"Where are all foreign embassies in Italy?",
     opts:["In Rome","In Milan","In each major city","In Florence"],
     ans:"In Rome",
     hint:"Italy's capital hosts all foreign embassies. Other cities have consulates for day-to-day services."}
  ]
};
export default LESSON_4;
