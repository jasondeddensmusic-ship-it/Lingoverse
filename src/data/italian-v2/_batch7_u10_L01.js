// Batch 7. Unit 10 extra lesson. I viaggi: Nature & Outdoor Activities
const BATCH7_L1 = {id:"itv2_u10l_b7_1", title:"La natura e le attività all'aperto", icon:"\u{1F3D5}\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"La natura e le attività all'aperto",
 desc:"Learn vocabulary for outdoor activities, landscapes, and nature during your travels in Italy.",
 goals:["Describe natural landscapes","Talk about outdoor activities","Express preferences about travel destinations"]},

{type:"teach", trg:"il lago", src:"the lake", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i laghi.\nItaly has famous lakes: Como, Garda, Maggiore.",
 example:"A: Andiamo al lago questo weekend?\nB: Si, al Lago di Garda!",
 exampleSrc:"A: Shall we go to the lake this weekend?\nB: Yes, to Lake Garda!",
 funFact:"Lake Garda is Italy's largest lake, shared by three regions. George Clooney's villa on Lake Como made the Italian lakes world-famous in modern pop culture."},

{type:"teach", trg:"il bosco", src:"the forest / wood", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i boschi.\n'Andare nel bosco' = to go into the forest.",
 example:"A: Facciamo una passeggiata nel bosco?\nB: Si, l'aria e fresca tra gli alberi.",
 exampleSrc:"A: Shall we take a walk in the forest?\nB: Yes, the air is fresh among the trees.",
 funFact:"Italy's forests have been growing for decades. About 36% of the country is covered by forests, up from just 20% after World War II. The largest forests are in the Alps and Abruzzo."},

{type:"teach", trg:"il sentiero", src:"the trail / path", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sentieri.\n'Sentiero di montagna' = mountain trail.",
 example:"A: Questo sentiero e facile o difficile?\nB: Facile, adatto a tutti.",
 exampleSrc:"A: Is this trail easy or difficult?\nB: Easy, suitable for everyone.",
 funFact:"The 'Sentiero degli Dei' (Path of the Gods) on the Amalfi Coast is one of the world's most beautiful hiking trails, with views of Capri and the Tyrrhenian Sea."},

{type:"teach", trg:"la collina", src:"the hill", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le colline.\n'Collinare' = hilly (adjective).",
 example:"A: Le colline toscane sono bellissime.\nB: Specialmente con i cipressi e i girasoli.",
 exampleSrc:"A: The Tuscan hills are beautiful.\nB: Especially with the cypresses and sunflowers.",
 funFact:"The rolling hills of Tuscany, Umbria, and Piedmont define the Italian landscape. 'Colline del Chianti' is where the famous wine comes from."},

{type:"teach", trg:"il fiume", src:"the river", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i fiumi.\nItaly's longest river: il Po (652 km).",
 example:"A: Possiamo fare un giro in barca sul fiume?\nB: Si, e molto rilassante.",
 exampleSrc:"A: Can we take a boat ride on the river?\nB: Yes, it is very relaxing.",
 funFact:"The Tiber (Tevere) flows through Rome, the Arno through Florence, and the Po through Turin. Each river defines its city's character and history."},

{type:"teach", trg:"l'isola", src:"the island", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le isole.\nMajor islands: Sicilia, Sardegna, Elba, Capri.",
 example:"A: Hai mai visitato un'isola italiana?\nB: Si, Capri. E meravigliosa!",
 exampleSrc:"A: Have you ever visited an Italian island?\nB: Yes, Capri. It is wonderful!",
 funFact:"Italy has over 800 islands, but only about 80 are inhabited. Sicily is the largest island in the Mediterranean, and Sardinia is the second largest."},

{type:"teach", trg:"la cascata", src:"the waterfall", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le cascate.\nFrom 'cascare' (to fall).",
 example:"A: Le cascate delle Marmore sono impressionanti.\nB: Si, alte 165 metri!",
 exampleSrc:"A: The Marmore Falls are impressive.\nB: Yes, 165 meters tall!",
 funFact:"The Cascata delle Marmore in Umbria was created by the Romans in 271 BC. It is the tallest man-made waterfall in Europe and a popular tourist destination."},

{type:"teach", trg:"il tramonto", src:"the sunset", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i tramonti.\nOpposite: 'l'alba' = sunrise.",
 example:"A: Guardiamo il tramonto dal belvedere?\nB: Si, e romanticissimo!",
 exampleSrc:"A: Shall we watch the sunset from the viewpoint?\nB: Yes, it is very romantic!",
 funFact:"Italian sunsets are legendary, especially over the Tyrrhenian Sea. Oia in Santorini gets the credit, but Positano, Cinque Terre, and Taormina rival any sunset in the Mediterranean."},

{type:"teach", trg:"l'alba", src:"the dawn / sunrise", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le albe.\n'All'alba' = at dawn.",
 example:"A: Mi sono svegliato all'alba.\nB: Per vedere il sorgere del sole?",
 exampleSrc:"A: I woke up at dawn.\nB: To see the sunrise?",
 funFact:"'Alba' is also a common Italian name and a city in Piedmont famous for its white truffles. The Latin word 'alba' means 'white,' referring to the pale light of dawn."},

{type:"teach", trg:"la scogliera", src:"the cliff", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scogliere.\nFrom 'scoglio' (rock).",
 example:"A: Le scogliere sono pericolose.\nB: Si, non avvicinarti al bordo.",
 exampleSrc:"A: The cliffs are dangerous.\nB: Yes, do not get close to the edge.",
 funFact:"The 'Cinque Terre' (Five Lands) in Liguria are five villages built on dramatic Mediterranean cliffs. They are a UNESCO World Heritage Site and one of Italy's most visited destinations."},

{type:"teach", trg:"il campeggio", src:"camping / campsite", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare campeggio' = to go camping.\n'Il campeggiatore' = the camper.",
 example:"A: Ti piace fare campeggio?\nB: Si, adoro dormire sotto le stelle.",
 exampleSrc:"A: Do you like camping?\nB: Yes, I love sleeping under the stars.",
 funFact:"Italian campsites often include restaurants, pools, and entertainment. 'Campeggio libero' (wild camping) is illegal in most Italian regions, so designated sites are preferred."},

{type:"teach", trg:"il rifugio", src:"the mountain hut / shelter", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i rifugi.\nAlpine shelters for hikers, often with food and beds.",
 example:"A: Dormiamo al rifugio stasera.\nB: Hanno anche il ristorante.",
 exampleSrc:"A: We will sleep at the mountain hut tonight.\nB: They also have a restaurant.",
 funFact:"Italian Alpine 'rifugi' are famous for their hospitality. You can get hearty meals, local wine, and a warm bed at 3,000 meters altitude. The CAI (Italian Alpine Club) manages hundreds."},

{type:"teach", trg:"selvaggio", src:"wild / unspoiled", pos:"adj", gender:null,
 note:"Adjective. Selvaggio/a/i/e.\n'Natura selvaggia' = wild nature.",
 example:"A: Questo posto e completamente selvaggio.\nB: Non c'è nessuno, solo natura.",
 exampleSrc:"A: This place is completely wild.\nB: There is nobody, just nature.",
 funFact:"'Selvaggio' comes from Latin 'silvaticus' (of the forest). Sardinia's eastern coast, the 'Supramonte,' is one of the wildest and most unspoiled areas in the Mediterranean."},

{type:"mc", q:"Qual e il lago più grande d'Italia?",
 opts:["Il Lago di Garda","Il Lago di Como","Il Lago Maggiore","Il Lago Trasimeno"],
 ans:"Il Lago di Garda",
 hint:"Shared by three regions in northern Italy. The largest lake in the country."},

{type:"fb", s:"Facciamo una passeggiata nel {1}?", a:["bosco"],
 opts:["bosco","lago","fiume","sentiero"],
 hint:"A large area covered with trees. The air is fresh here.",
 sSrc:"Shall we take a walk in the {1}?"},

{type:"match", pairs:[
 {trg:"il lago", src:"lake"},
 {trg:"il fiume", src:"river"},
 {trg:"la collina", src:"hill"},
 {trg:"l'isola", src:"island"}
]},

{type:"mc", q:"Che cosa sono le Cinque Terre?",
 opts:["Five islands in Sicily","Five cliff villages in Liguria","Five lakes in Lombardy","Five mountains in Piedmont"],
 ans:"Five cliff villages in Liguria",
 hint:"A UNESCO site on the Mediterranean coast. Built on dramatic rocky cliffs."},

{type:"fb", s:"Guardiamo il {1} dal belvedere.", a:["tramonto"],
 opts:["tramonto","alba","bosco","rifugio"],
 hint:"When the sun goes down in the evening, painting the sky orange and pink.",
 sSrc:"Let us watch the {1} from the viewpoint."},

{type:"mc", q:"Che cos'e un 'rifugio' in montagna?",
 opts:["A hidden waterfall","A wild forest","A mountain hut with food and beds","A dangerous cliff"],
 ans:"A mountain hut with food and beds",
 hint:"A shelter for hikers in the Alps, often with a restaurant and sleeping areas."},

{type:"fb", s:"Le {1} delle Marmore sono alte 165 metri.", a:["cascate"],
 opts:["cascate","colline","scogliere","isole"],
 hint:"Water falling from a great height. A natural spectacle.",
 sSrc:"The Marmore {1} are 165 meters tall."},

{type:"match", pairs:[
 {trg:"il tramonto", src:"sunset"},
 {trg:"l'alba", src:"dawn"},
 {trg:"la scogliera", src:"cliff"},
 {trg:"il campeggio", src:"camping"}
]}
,{type:"match",pairs:[{trg:"la cascata",src:"the waterfall"}]}]};
export default BATCH7_L1;
