// Batch 7 — Unit 18 extra lesson. L'ambiente: Sustainable Living
const BATCH7_L1 = {id:"itv2_u18l_b7_1", title:"La vita sostenibile", icon:"\u267B\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"La vita sostenibile",
 desc:"Learn vocabulary for sustainable living, green practices, and everyday environmental choices.",
 goals:["Discuss sustainable lifestyle choices","Talk about energy and resources","Express opinions on environmental issues"]},

{type:"teach", trg:"sostenibile", src:"sustainable", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\n'Sviluppo sostenibile' = sustainable development.",
 example:"A: Dobbiamo vivere in modo sostenibile.\nB: Sono d'accordo, iniziamo da piccoli gesti.",
 exampleSrc:"A: We must live sustainably.\nB: I agree, let us start with small gestures.",
 funFact:"'Sostenibile' became mainstream in Italian after the 2015 UN Sustainable Development Goals. Italian cities now compete for 'citta sostenibile' (sustainable city) rankings."},

{type:"teach", trg:"lo spreco", src:"the waste / wastefulness", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli sprechi.\n'Sprecare' = to waste. 'Spreco alimentare' = food waste.",
 example:"A: Lo spreco di cibo e un problema enorme.\nB: In Italia si sprecano 5 milioni di tonnellate all'anno.",
 exampleSrc:"A: Food waste is an enormous problem.\nB: In Italy, 5 million tons are wasted per year.",
 funFact:"Italy passed a law in 2016 making it easier for supermarkets to donate unsold food. 'Banco Alimentare' (Food Bank) collects millions of meals annually to fight 'spreco.'"},

{type:"teach", trg:"il pannello solare", src:"the solar panel", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pannelli solari.\n'Energia solare' = solar energy.",
 example:"A: Abbiamo installato i pannelli solari.\nB: Quanto risparmiate in bolletta?",
 exampleSrc:"A: We installed solar panels.\nB: How much do you save on the bill?",
 funFact:"Italy is one of Europe's leaders in solar energy, thanks to its abundant sunshine. The southern regions, especially Sicily and Puglia, have enormous solar potential."},

{type:"teach", trg:"la raccolta", src:"the collection / harvesting", pos:"noun", gender:"f",
 note:"Feminine noun. 'Raccolta differenziata' = recycling.\n'Raccogliere' = to collect.",
 example:"A: La raccolta dell'olio esausto e importante.\nB: Si, non buttarlo nel lavandino!",
 exampleSrc:"A: Collection of used cooking oil is important.\nB: Yes, do not pour it down the drain!",
 funFact:"Many Italian towns have collection points for used cooking oil, batteries, and electronics. The 'isola ecologica' (eco-island) is a neighborhood collection center for special waste."},

{type:"teach", trg:"il risparmio energetico", src:"energy saving", pos:"noun", gender:"m",
 note:"Masculine noun. 'Risparmiare energia' = to save energy.\n'Classe energetica' = energy rating.",
 example:"A: Il risparmio energetico fa bene all'ambiente e al portafoglio.\nB: Due benefici in uno!",
 exampleSrc:"A: Energy saving is good for the environment and the wallet.\nB: Two benefits in one!",
 funFact:"Italian buildings must display their 'classe energetica' (energy rating, A to G) when sold or rented. The government offers 'bonus' tax incentives for energy-efficient renovations."},

{type:"teach", trg:"la plastica", src:"plastic", pos:"noun", gender:"f",
 note:"Feminine noun. 'Senza plastica' = plastic-free.\n'Plastica monouso' = single-use plastic.",
 example:"A: Dobbiamo ridurre l'uso della plastica.\nB: Porto sempre la borsa riutilizzabile.",
 exampleSrc:"A: We must reduce plastic use.\nB: I always bring a reusable bag.",
 funFact:"Italy banned single-use plastics in 2022, following EU directives. Italian beaches have gone from plastic bottle-littered to increasingly clean, though work remains."},

{type:"teach", trg:"riutilizzare", src:"to reuse", pos:"verb", gender:null,
 note:"Regular -are verb. riutilizzo, riutilizzi, riutilizza.\n'Riutilizzabile' = reusable.",
 example:"A: Puoi riutilizzare questa scatola.\nB: Buona idea, per il trasloco!",
 exampleSrc:"A: You can reuse this box.\nB: Good idea, for the move!",
 funFact:"The Italian waste hierarchy is 'ridurre, riutilizzare, riciclare' (reduce, reuse, recycle). These three R's are taught in schools from elementary level."},

{type:"teach", trg:"il consumo", src:"consumption", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i consumi.\n'Consumo consapevole' = conscious consumption.",
 example:"A: Il consumo di acqua e troppo alto.\nB: Dobbiamo fare attenzione.",
 exampleSrc:"A: Water consumption is too high.\nB: We need to be careful.",
 funFact:"'Consumismo' (consumerism) is viewed critically in Italian culture. The 'slow food' and 'km zero' movements both started in Italy as pushback against wasteful consumption."},

{type:"teach", trg:"il riscaldamento globale", src:"global warming", pos:"noun", gender:"m",
 note:"Masculine noun. 'Riscaldamento' = warming/heating.\n'Effetto serra' = greenhouse effect.",
 example:"A: Il riscaldamento globale e una crisi.\nB: Le temperature aumentano ogni anno.",
 exampleSrc:"A: Global warming is a crisis.\nB: Temperatures rise every year.",
 funFact:"Venice's flooding (acqua alta) has worsened due to 'riscaldamento globale.' The MOSE barrier system, completed in 2020, was built specifically to protect the city from rising seas."},

{type:"teach", trg:"l'impronta ecologica", src:"ecological footprint", pos:"noun", gender:"f",
 note:"Feminine noun. 'Impronta di carbonio' = carbon footprint.\n'Ridurre l'impronta' = to reduce the footprint.",
 example:"A: Qual e la tua impronta ecologica?\nB: Cerco di ridurla ogni giorno.",
 exampleSrc:"A: What is your ecological footprint?\nB: I try to reduce it every day.",
 funFact:"Italy's 'impronta ecologica' is lower than many wealthy nations, partly because of Mediterranean diet habits, public transport use, and smaller home sizes."},

{type:"teach", trg:"a chilometro zero", src:"locally sourced / zero-km", pos:"adj", gender:null,
 note:"Adjective phrase. Invariable. Products from local farms.\n'Prodotti a km zero' = local products.",
 example:"A: Compro solo prodotti a chilometro zero.\nB: Dove, al mercato del contadino?",
 exampleSrc:"A: I only buy locally sourced products.\nB: Where, at the farmers' market?",
 funFact:"The 'km zero' movement is huge in Italy. It means buying food produced within your area, reducing transport emissions. Italian restaurants proudly display 'cucina a km zero' signs."},

{type:"teach", trg:"la biodiversita", src:"biodiversity", pos:"noun", gender:"f",
 note:"Feminine noun. 'Proteggere la biodiversita' = to protect biodiversity.",
 example:"A: L'Italia ha una grande biodiversita.\nB: Si, dal clima alpino a quello mediterraneo.",
 exampleSrc:"A: Italy has great biodiversity.\nB: Yes, from alpine to Mediterranean climate.",
 funFact:"Italy is one of the most biodiverse countries in Europe, with over 57,000 animal species. The Alps, Apennines, and Mediterranean coasts create unique ecosystems."},

{type:"teach", trg:"rinnovabile", src:"renewable", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\n'Energie rinnovabili' = renewable energies.",
 example:"A: Le energie rinnovabili sono il futuro.\nB: Solare, eolica, e idroelettrica.",
 exampleSrc:"A: Renewable energies are the future.\nB: Solar, wind, and hydroelectric.",
 funFact:"Italy generates about 40% of its electricity from 'fonti rinnovabili.' Hydroelectric power from Alpine dams has been a major source since the early 20th century."},

{type:"mc", q:"Che cosa significa 'prodotti a chilometro zero'?",
 opts:["Locally sourced products","Free products","Organic products","Imported products"],
 ans:"Locally sourced products",
 hint:"Food produced near where it is sold, minimizing transport distance."},

{type:"fb", s:"Lo {1} di cibo e un problema enorme.", a:["spreco"],
 opts:["spreco","consumo","pannello","risparmio"],
 hint:"When food is thrown away instead of being eaten. Wastefulness.",
 sSrc:"Food {1} is an enormous problem."},

{type:"match", pairs:[
 {trg:"sostenibile", src:"sustainable"},
 {trg:"rinnovabile", src:"renewable"},
 {trg:"riutilizzare", src:"to reuse"},
 {trg:"la plastica", src:"plastic"}
]},

{type:"mc", q:"Quale movimento contro il consumismo e nato in Italia?",
 opts:["Slow Food","Fast Food","Green Peace","Zero Waste"],
 ans:"Slow Food",
 hint:"A movement that started in Italy as a reaction to fast f... culture."},

{type:"fb", s:"Le energie {1} sono il futuro.", a:["rinnovabili"],
 opts:["rinnovabili","solari","sostenibili","ecologiche"],
 hint:"Energy sources that can be used again and again: sun, wind, water.",
 sSrc:"{1} energies are the future."},

{type:"mc", q:"Che sistema protegge Venezia dalle inondazioni?",
 opts:["Il MOSE","Il PO","Il SOLE","Il MARE"],
 ans:"Il MOSE",
 hint:"A barrier system completed in 2020, named with an acronym."},

{type:"fb", s:"Dobbiamo ridurre l'{1} ecologica.", a:["impronta"],
 opts:["impronta","energia","plastica","raccolta"],
 hint:"Your environmental 'footprint.' The impact you leave on the planet.",
 sSrc:"We must reduce our ecological {1}."},

{type:"match", pairs:[
 {trg:"lo spreco", src:"waste"},
 {trg:"il consumo", src:"consumption"},
 {trg:"il pannello solare", src:"solar panel"},
 {trg:"la biodiversita", src:"biodiversity"}
]}
,{type:"match",pairs:[{trg:"la raccolta",src:"the collection / harvesting"},{trg:"il risparmio energetico",src:"energy saving"},{trg:"il riscaldamento globale",src:"global warming"},{trg:"a chilometro zero",src:"locally sourced / zero-km"}]}]};
export default BATCH7_L1;
