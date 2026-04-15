// Italian V2 Unit 10 Expansion. Lesson 6: Fare il turista (Sightseeing & Tourist Phrases)
// Expands travel unit with sightseeing vocabulary and tourist interactions.

const LESSON_6 = {id:"itv2_u10l6", title:"Fare il turista", icon:"\uD83D\uDCF8", xp:15, board:true, steps:[
  {type:"intro", title:"Fare il turista",
   desc:"Learn essential sightseeing vocabulary for visiting Italian cities, museums, and landmarks. Italy has more UNESCO World Heritage Sites than any other country.",
   goals:["Ask for directions to attractions","Buy tickets and navigate museums","Talk about sightseeing experiences"]},

  {type:"teach", trg:"il museo", src:"the museum", pos:"noun", gender:"m",
   note:"Masculine. From Greek 'mouseion' (seat of the Muses).\nPlural: i musei. 'Orario del museo' = museum hours.",
   example:"A: Vorrei visitare il museo.\nB: E aperto dalle nove alle diciotto.",
   exampleSrc:"A: I would like to visit the museum.\nB: It is open from nine to eighteen.",
   funFact:"Italy has over 4,000 museums. The Uffizi (Florence), Vatican Museums (Rome), and Brera (Milan) are among the world's greatest. Many Italian museums are housed in historic palaces and churches. Advance booking ('prenotazione') is strongly recommended for popular museums."},

  {type:"teach", trg:"la guida", src:"the guide / guidebook", pos:"noun", gender:"f",
   note:"Feminine. Both a person (guide) and a book (guidebook).\n'Guida turistica' = tourist guide (person or book).",
   example:"A: Prendiamo una guida turistica?\nB: Si, o possiamo scaricare l'audioguida.",
   exampleSrc:"A: Shall we get a tourist guide?\nB: Yes, or we can download the audio guide.",
   funFact:"'Guida' works for both a person who guides you and a book that guides you. 'Audioguida' (audio guide) is standard at major Italian museums. Many are available in multiple languages. Free guided tours ('visite guidate gratuite') are offered by some cities on specific dates."},

  {type:"teach", trg:"il monumento", src:"the monument", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'monumentum' (reminder, memorial).\nPlural: i monumenti. Italy has 59 UNESCO World Heritage Sites.",
   example:"A: Quanti monumenti ci sono a Roma?\nB: Troppi da contare! Serve almeno una settimana.",
   exampleSrc:"A: How many monuments are there in Rome?\nB: Too many to count! You need at least a week.",
   funFact:"From Latin 'monere' (to remind, warn). A monument 'reminds' us of history. Italy has the most UNESCO World Heritage Sites in the world (59 as of 2024). Rome alone has hundreds of protected monuments. The Colosseum receives over 7 million visitors per year."},

  {type:"teach", trg:"la chiesa", src:"the church", pos:"noun", gender:"f",
   note:"Feminine. From Greek 'ekklesia' (assembly).\nPlural: le chiese. Italy has over 100,000 churches.",
   example:"A: Possiamo visitare la chiesa?\nB: Si, ma copra le spalle e le ginocchia.",
   exampleSrc:"A: Can we visit the church?\nB: Yes, but cover your shoulders and knees.",
   funFact:"Italian churches have dress codes: shoulders and knees must be covered. Many churches are free to enter but charge for specific areas (crypts, bell towers). Photography may be restricted. 'Silenzio' (silence) signs remind visitors these are places of worship."},

  {type:"teach", trg:"la piazza", src:"the square / plaza", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'platea' (broad street).\nThe heart of every Italian town. 'Piazza principale' = main square.",
   example:"A: Ci vediamo in piazza?\nB: Si, davanti alla fontana.",
   exampleSrc:"A: Shall we meet in the square?\nB: Yes, in front of the fountain.",
   funFact:"The piazza is the social heart of Italian life. Every town has at least one. Famous examples: Piazza San Marco (Venice), Piazza del Duomo (Milan), Piazza Navona (Rome). Italians meet, socialize, and do the 'passeggiata' (evening stroll) in the piazza."},

  {type:"teach", trg:"il biglietto d'ingresso", src:"the entrance ticket", pos:"noun", gender:"m",
   note:"Masculine. 'Ingresso' = entrance. 'Biglietto ridotto' = reduced/concession ticket.\n'Biglietto intero' = full-price ticket.",
   example:"A: Quanto costa il biglietto d'ingresso?\nB: Intero quindici euro, ridotto dieci.",
   exampleSrc:"A: How much is the entrance ticket?\nB: Full price fifteen euros, reduced ten.",
   funFact:"Italian museums offer 'biglietto ridotto' (reduced price) for EU citizens under 25, over 65, students, and teachers. EU citizens under 18 often enter free. Always bring ID proving your age or student status. 'Prima domenica del mese' (first Sunday of the month) many state museums are free."},

  {type:"teach", trg:"la cartina", src:"the map", pos:"noun", gender:"f",
   note:"Feminine. Diminutive of 'carta' (paper).\n'Cartina della citta' = city map. Also 'la mappa.'",
   example:"A: Ha una cartina della citta?\nB: Si, ecco. Siamo qui.",
   exampleSrc:"A: Do you have a city map?\nB: Yes, here. We are here.",
   funFact:"'Cartina' (little paper) is the everyday word for a map you can hold. 'Mappa' is more formal or digital. Tourist offices ('ufficio turistico' or 'Pro Loco') give free city maps. Google Maps in Italian says 'indicazioni stradali' for directions."},

  {type:"teach", trg:"fotografare", src:"to photograph / to take photos", pos:"verb", gender:null,
   note:"Regular -are verb. 'Posso fotografare?' = May I take photos?\nFrom Greek 'phos' (light) + 'graphein' (write).",
   example:"A: Si puo fotografare qui dentro?\nB: Si, ma senza flash.",
   exampleSrc:"A: Can you take photos in here?\nB: Yes, but without flash.",
   funFact:"Many Italian museums allow photos without flash but prohibit tripods and selfie sticks. Some special exhibitions ban all photography. The sign 'Vietato fotografare' (photography prohibited) or a crossed-out camera icon means no photos. Always check before shooting."},

  {type:"teach", trg:"la fontana", src:"the fountain", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'fontana' (spring, source).\nRome alone has over 2,000 fountains.",
   example:"A: La Fontana di Trevi e bellissima!\nB: Lancia una moneta ed esprimi un desiderio!",
   exampleSrc:"A: The Trevi Fountain is beautiful!\nB: Throw a coin and make a wish!",
   funFact:"Rome is called the 'city of fountains' with over 2,000, including the famous Trevi. The small drinking fountains called 'nasoni' (big noses) provide free, clean water throughout the city. Throwing a coin in the Trevi Fountain is said to guarantee your return to Rome."},

  {type:"teach", trg:"la passeggiata", src:"the walk / stroll", pos:"noun", gender:"f",
   note:"Feminine. From 'passeggiare' (to stroll).\n'Fare una passeggiata' = to take a walk. Italian evening tradition.",
   example:"A: Facciamo una passeggiata?\nB: Si, andiamo al centro storico.",
   exampleSrc:"A: Shall we take a stroll?\nB: Yes, let's go to the historic center.",
   funFact:"The 'passeggiata' is a beloved Italian tradition: an evening stroll through the town center, greeting neighbors, window-shopping, and eating gelato. It happens between 5-8 PM. Every Italian town has a 'corso' (main street) where the passeggiata takes place."},

  // Quiz steps
  {type:"mc", q:"What dress code applies in Italian churches?",
   opts:["Cover shoulders and knees","No dress code","Formal wear only","Remove shoes"],
   ans:"Cover shoulders and knees",
   hint:"These are places of worship. Bare s... and shorts above the knee are not permitted inside."},

  {type:"fb", s:"Quanto costa il {1} d'ingresso?",
   a:["biglietto"],
   opts:["biglietto","museo","monumento","prezzo"],
   hint:"You want to know the price to enter. This is the ticket that grants you access to the attraction.",
   sSrc:"How much is the entrance {1}?"},

  {type:"match", pairs:[
    {trg:"il museo", src:"the museum"},
    {trg:"la chiesa", src:"the church"},
    {trg:"la piazza", src:"the square"},
    {trg:"la fontana", src:"the fountain"},
    {trg:"la passeggiata", src:"the stroll"}
  ]},

  {type:"mc", q:"When are many Italian state museums free?",
   opts:["First Sunday of the month","Every Monday","National holidays","Never"],
   ans:"First Sunday of the month",
   hint:"'Prima domenica del mese.' This initiative makes culture accessible. Check specific museums for participation."},

  {type:"fb", s:"Ha una {1} della citta?",
   a:["cartina"],
   opts:["cartina","guida","foto","piazza"],
   hint:"A paper document showing streets and landmarks. Diminutive of 'carta.' Tourist offices give these free.",
   sSrc:"Do you have a city {1}?"},

  {type:"mc", q:"What is the 'passeggiata'?",
   opts:["An Italian tradition of evening strolling through town","A type of pasta","A museum tour","A bus route"],
   ans:"An Italian tradition of evening strolling through town",
   hint:"Between 5-8 PM, people walk the main street, greet neighbors, and enjoy gelato. This social custom happens in every city and village across the country."},

  {type:"fb", s:"Si puo {1} qui dentro? Senza flash?",
   a:["fotografare"],
   opts:["fotografare","guardare","entrare","parlare"],
   hint:"You want to know if you can use your camera inside the building. This verb means to take photos.",
   sSrc:"Can you {1} in here? Without flash?"},

  {type:"mc", q:"What are Rome's 'nasoni'?",
   opts:["Free public drinking fountains shaped like big noses","Famous restaurants","Roman ruins","Street performers"],
   ans:"Free public drinking fountains shaped like big noses",
   hint:"'Nasone' means b... nose. These small f... throughout Rome provide clean, f... d... water."},

  {type:"fb", s:"Ci vediamo in {1}, davanti alla fontana.",
   a:["piazza"],
   opts:["piazza","museo","chiesa","strada"],
   hint:"This is the central open space in an Italian town. The social heart where people meet and gather.",
   sSrc:"Let's meet in the {1}, in front of the fountain."}
]};
export default LESSON_6;
