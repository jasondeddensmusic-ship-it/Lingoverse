// Italian V2 Unit 12 Expansion — Lesson 5: Racconti di viaggio (Travel Narratives)
// Expands essere past tense unit with travel storytelling using movement verbs.

const LESSON_5 = {id:"itv2_u12l5", title:"Racconti di viaggio", icon:"\uD83C\uDF0D", xp:15, board:true, steps:[
  {type:"intro", title:"Racconti di viaggio",
   desc:"Practice telling travel stories using essere verbs in the past tense. Movement verbs are the backbone of travel narratives. Learn to describe where you went and how you got there.",
   goals:["Tell travel stories using essere verbs","Combine movement verbs with time expressions","Describe a journey from start to finish"]},

  {type:"teach", trg:"sono partito/a", src:"I left / I departed", pos:"verb", gender:null,
   note:"Passato prossimo of 'partire' with essere.\n'Sono partito alle sei' = I left at six. Agreement: -o (male), -a (female).",
   example:"A: Quando sei partito?\nB: Sono partito venerdi mattina presto.",
   exampleSrc:"A: When did you leave?\nB: I left early Friday morning.",
   funFact:"Travel stories in Italian almost always start with 'sono partito/a' (I left). The departure sets the scene. Italians then build the narrative chronologically: 'Sono partito, poi sono arrivato, dopo sono andato...' Each verb uses essere and agrees with the speaker."},

  {type:"teach", trg:"siamo arrivati/e", src:"we arrived", pos:"verb", gender:null,
   note:"Passato prossimo of 'arrivare' with essere. 'Noi' form.\nMale/mixed: arrivati. All female: arrivate.",
   example:"A: A che ora siete arrivati?\nB: Siamo arrivati verso le tre del pomeriggio.",
   exampleSrc:"A: What time did you arrive?\nB: We arrived around three in the afternoon.",
   funFact:"'Verso' (around, about) softens the time: 'verso le tre' (around three). Italians are often approximate with time in stories. 'Siamo arrivati' tells you the group includes at least one male (or is mixed). 'Siamo arrivate' would mean an all-female group."},

  {type:"teach", trg:"sono salito/a", src:"I went up / I climbed", pos:"verb", gender:null,
   note:"Passato prossimo of 'salire' with essere.\n'Sono salito sulla torre' = I went up the tower.",
   example:"A: Sei salito sulla cupola del Duomo?\nB: Si, sono salito fino in cima! 463 gradini!",
   exampleSrc:"A: Did you go up to the Duomo's dome?\nB: Yes, I climbed to the very top! 463 steps!",
   funFact:"'Salire' covers climbing stairs, going uphill, boarding transport, and ascending towers. Italy's famous climbs: the Duomo in Florence (463 steps), St. Peter's dome in Rome (551 steps), the Leaning Tower of Pisa (294 steps). Each is described with 'sono salito/a.'"},

  {type:"teach", trg:"sono sceso/a", src:"I went down / I got off", pos:"verb", gender:null,
   note:"Passato prossimo of 'scendere' with essere.\nIrregular participle: sceso. 'Sono sceso dal treno' = I got off the train.",
   example:"A: A che fermata sei sceso?\nB: Sono sceso a Firenze Santa Maria Novella.",
   exampleSrc:"A: At which stop did you get off?\nB: I got off at Florence Santa Maria Novella.",
   funFact:"'Scendere' pairs with 'salire': salire sull'autobus (get on), scendere dall'autobus (get off). Italian train stations have beautiful names: 'Roma Termini,' 'Venezia Santa Lucia,' 'Firenze Santa Maria Novella.' Each station name tells a story about the city."},

  {type:"teach", trg:"sono entrato/a", src:"I entered / I went in", pos:"verb", gender:null,
   note:"Passato prossimo of 'entrare' with essere.\nRegular participle. 'Sono entrato nel museo' = I entered the museum.",
   example:"A: Sei entrato nella Cappella Sistina?\nB: Si, sono entrato! E stato emozionante.",
   exampleSrc:"A: Did you go into the Sistine Chapel?\nB: Yes, I went in! It was emotional.",
   funFact:"'Entrare' uses essere because it describes movement into a space. 'Entrare' pairs with 'uscire' (to exit): 'Sono entrato alle dieci e sono uscito alle dodici' (I entered at ten and left at twelve). The preposition changes: 'entrare IN' but 'uscire DA.'"},

  {type:"teach", trg:"siamo rimasti/e", src:"we stayed", pos:"verb", gender:null,
   note:"Passato prossimo of 'rimanere' with essere. 'Noi' form.\nIrregular participle: rimasto. 'Siamo rimasti tre notti' = we stayed three nights.",
   example:"A: Quanto siete rimasti a Venezia?\nB: Siamo rimasti quattro giorni.",
   exampleSrc:"A: How long did you stay in Venice?\nB: We stayed four days.",
   funFact:"'Rimanere' (to stay/remain) is essential for travel stories. Duration is expressed without a preposition: 'siamo rimasti tre giorni' (we stayed three days), NOT 'per tre giorni.' This surprises English speakers who expect 'for' before the time period."},

  {type:"teach", trg:"sono tornato/a", src:"I returned / I came back", pos:"verb", gender:null,
   note:"Passato prossimo of 'tornare' with essere.\nRegular participle. 'Sono tornato a casa' = I returned home.",
   example:"A: Quando sei tornato?\nB: Sono tornato domenica sera.",
   exampleSrc:"A: When did you get back?\nB: I got back Sunday evening.",
   funFact:"Travel stories typically end with 'sono tornato/a' (I came back). The full arc: 'Sono partito... sono arrivato... sono rimasto... sono tornato.' This pattern creates a complete narrative circle. 'Tornare' from Latin 'tornare' (to turn on a lathe), meaning 'to turn back.'"},

  {type:"teach", trg:"mi sono perso/a", src:"I got lost", pos:"verb", gender:null,
   note:"Reflexive of 'perdersi' (to lose oneself). Uses essere.\n'Mi sono perso nel centro storico' = I got lost in the old town.",
   example:"A: Ti sei perso?\nB: Si, mi sono perso ma e stato divertente!",
   exampleSrc:"A: Did you get lost?\nB: Yes, I got lost but it was fun!",
   funFact:"Getting lost in Italian cities is practically a rite of passage. The narrow streets ('vicoli') of Venice, Rome, and Florence are famously confusing. Many travelers say getting lost was the best part of their trip. 'Perdersi' (to lose oneself) is both literal and poetic in Italian."},

  {type:"teach", trg:"sono passato/a", src:"I passed by / I went through", pos:"verb", gender:null,
   note:"Passato prossimo of 'passare' with essere (when intransitive).\n'Sono passato da Roma' = I passed through Rome.",
   example:"A: Siamo passati per Siena.\nB: Bellissima citta! Vi siete fermati?",
   exampleSrc:"A: We passed through Siena.\nB: Beautiful city! Did you stop?",
   funFact:"'Passare' is tricky: with essere, it means 'to pass by/through' (movement). With avere, it means 'to spend time' or 'to pass something.' 'Sono passato da te' (I stopped by your place) vs. 'Ho passato una bella giornata' (I spent a nice day). The helper verb changes the meaning."},

  {type:"teach", trg:"mi sono fermato/a", src:"I stopped", pos:"verb", gender:null,
   note:"Reflexive of 'fermarsi' (to stop oneself). Uses essere.\n'Mi sono fermato per un caffe' = I stopped for a coffee.",
   example:"A: Vi siete fermati lungo la strada?\nB: Si, ci siamo fermati a pranzo in un agriturismo.",
   exampleSrc:"A: Did you stop along the way?\nB: Yes, we stopped for lunch at a farm restaurant.",
   funFact:"'Fermarsi' (to stop oneself) is reflexive because you stop yourself from moving. 'Un agriturismo' is a farm restaurant or farm stay, one of Italy's best-kept travel secrets. They serve homegrown food in rural settings and are much cheaper than city restaurants."},

  // Quiz steps
  {type:"mc", q:"What is the typical narrative arc of an Italian travel story?",
   opts:["Partito > arrivato > rimasto > tornato","Mangiato > bevuto > dormito","Comprato > venduto > perso","Chiamato > parlato > chiuso"],
   ans:"Partito > arrivato > rimasto > tornato",
   hint:"Left, arrived, stayed, returned. Movement verbs (all with essere) create the skeleton of every travel story."},

  {type:"fb", s:"Sono {1} venerdi mattina presto.",
   a:["partito"],
   opts:["partito","arrivato","tornato","rimasto"],
   hint:"This is the beginning of the journey. You left home (assuming male speaker). From 'partire.'",
   sSrc:"I {1} early Friday morning."},

  {type:"match", pairs:[
    {trg:"sono partito/a", src:"I left"},
    {trg:"sono salito/a", src:"I went up"},
    {trg:"sono sceso/a", src:"I went down"},
    {trg:"sono entrato/a", src:"I entered"},
    {trg:"sono tornato/a", src:"I returned"}
  ]},

  {type:"mc", q:"How is duration expressed with 'rimanere'?",
   opts:["Without a preposition: 'siamo rimasti tre giorni'","With 'per': 'siamo rimasti per tre giorni'","With 'da': 'siamo rimasti da tre giorni'","With 'di': 'siamo rimasti di tre giorni'"],
   ans:"Without a preposition: 'siamo rimasti tre giorni'",
   hint:"No 'for' needed in Italian. Just the verb + the time: 'tre giorni,' 'una settimana,' 'due notti.'"},

  {type:"fb", s:"Mi sono {1} nel centro storico!",
   a:["perso"],
   opts:["perso","fermato","divertito","preparato"],
   hint:"You could not find your way in the old town streets. This reflexive verb means 'to lose oneself.'",
   sSrc:"I got {1} in the old town!"},

  {type:"mc", q:"When does 'passare' use essere vs. avere?",
   opts:["Essere for movement (passed through), avere for time (spent)","Always essere","Always avere","It does not matter"],
   ans:"Essere for movement (passed through), avere for time (spent)",
   hint:"'Sono passato da Roma' (movement) vs. 'Ho passato una bella giornata' (spending time). The meaning changes."},

  {type:"fb", s:"Ci siamo {1} a pranzo in un agriturismo.",
   a:["fermati"],
   opts:["fermati","persi","divertiti","preparati"],
   hint:"The group made a stop along the way to eat lunch. This reflexive verb means 'to stop oneself.'",
   sSrc:"We {1} for lunch at a farm restaurant."},

  {type:"mc", q:"What is an 'agriturismo'?",
   opts:["A farm restaurant or farm stay serving homegrown food","A travel agency","A city hotel","A highway rest stop"],
   ans:"A farm restaurant or farm stay serving homegrown food",
   hint:"'Agri-' (farm) + 'turismo' (tourism). Rural Italian dining at its best, using ingredients grown on-site."},

  {type:"fb", s:"Sei {1} nella Cappella Sistina?",
   a:["entrato"],
   opts:["entrato","salito","sceso","passato"],
   hint:"You want to know if the person went inside the famous chapel. This verb means 'to enter.'",
   sSrc:"Did you {1} the Sistine Chapel?"}
]};
export default LESSON_5;
