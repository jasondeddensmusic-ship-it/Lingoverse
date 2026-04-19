// Batch 8 — Unit 18 extra lesson. Environment: Natural Disasters & Climate
const BATCH8_L1 = {id:"itv2_u18l_b8_1", title:"Disastri e clima", icon:"🌊", xp:15, board:true, steps:[
{type:"intro", title:"Disastri e clima",
 desc:"Learn vocabulary for natural disasters, extreme weather, and climate-related events in Italian.",
 goals:["Describe natural disasters","Discuss climate events","Understand emergency terminology"]},

{type:"teach", trg:"il terremoto", src:"the earthquake", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: terra (earth) + moto (movement).\n'Zona sismica' = earthquake zone.",
 example:"A: C'e stato un terremoto stanotte.\nB: Di che magnitudo?\nA: 4.5 sulla scala Richter.",
 exampleSrc:"A: There was an earthquake last night.\nB: What magnitude?\nA: 4.5 on the Richter scale.",
 funFact:"Italy is one of Europe's most earthquake-prone countries. The devastating L'Aquila earthquake of 2009 and the Amatrice earthquake of 2016 are recent tragedies."},

{type:"teach", trg:"l'alluvione", src:"the flood", pos:"noun", gender:"f",
 note:"Feminine noun. 'Alluvione' is a major flood.\n'Allagamento' = localized flooding.",
 example:"A: L'alluvione ha colpito l'Emilia-Romagna.\nB: Migliaia di persone sono state evacuate.",
 exampleSrc:"A: The flood hit Emilia-Romagna.\nB: Thousands of people were evacuated.",
 funFact:"The great Florence flood of 1966 devastated the city and its art treasures. International volunteers called 'Angeli del Fango' (Mud Angels) came to help save priceless artworks."},

{type:"teach", trg:"la siccita", src:"the drought", pos:"noun", gender:"f",
 note:"Feminine noun. 'Periodo di siccita' = drought period.\n'Secco' = dry.",
 example:"A: La siccita sta colpendo il Sud Italia.\nB: Non piove da tre mesi.",
 exampleSrc:"A: The drought is hitting Southern Italy.\nB: It has not rained for three months.",
 funFact:"Summer droughts in southern Italy and Sicily are increasingly severe. Water rationing ('razionamento dell'acqua') is not uncommon in some southern towns during August."},

{type:"teach", trg:"la frana", src:"the landslide", pos:"noun", gender:"f",
 note:"Feminine noun. 'Zona a rischio frana' = landslide risk zone.\n'Franare' = to slide/collapse.",
 example:"A: Una frana ha bloccato la strada.\nB: Dobbiamo prendere un'altra via.",
 exampleSrc:"A: A landslide blocked the road.\nB: We need to take another route.",
 funFact:"Italy's mountainous terrain makes it very prone to landslides. The Cinque Terre, Amalfi Coast, and Alpine valleys are particularly at risk, especially after heavy rain."},

{type:"teach", trg:"l'eruzione", src:"the eruption", pos:"noun", gender:"f",
 note:"Feminine noun. 'Eruzione vulcanica' = volcanic eruption.\n'Eruttare' = to erupt.",
 example:"A: L'ultima eruzione dell'Etna e stata spettacolare.\nB: Hanno chiuso l'aeroporto di Catania.",
 exampleSrc:"A: The last eruption of Etna was spectacular.\nB: They closed Catania's airport.",
 funFact:"Italy has three active volcanoes: Etna (Sicily), Stromboli (Aeolian Islands), and Vesuvio (Naples). Vesuvius famously buried Pompeii in 79 AD."},

{type:"teach", trg:"l'ondata di calore", src:"the heatwave", pos:"noun", gender:"f",
 note:"Feminine noun. 'Ondata' = wave. 'Calore' = heat.\n'Bollettino caldo' = heat alert bulletin.",
 example:"A: L'ondata di calore durera tutta la settimana.\nB: Meglio restare in casa nelle ore centrali.",
 exampleSrc:"A: The heatwave will last all week.\nB: Better stay inside during the hottest hours.",
 funFact:"Italian cities issue color-coded heat alerts: green (normal), yellow (caution), orange (danger), red (emergency). Summer 2023 saw record temperatures above 45C in Sardinia."},

{type:"teach", trg:"il soccorso", src:"the rescue / relief", pos:"noun", gender:"m",
 note:"Masculine noun. 'Pronto soccorso' = emergency room.\n'Soccorrere' = to rescue/help.",
 example:"A: I soccorsi sono arrivati in tempo.\nB: La Protezione Civile ha fatto un ottimo lavoro.",
 exampleSrc:"A: The rescue teams arrived on time.\nB: Civil Protection did an excellent job.",
 funFact:"Italy's 'Protezione Civile' (Civil Protection) is the national emergency management agency. Volunteers play a huge role, with over 300,000 active volunteers across Italy."},

{type:"teach", trg:"l'evacuazione", src:"the evacuation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Evacuare' = to evacuate.\n'Piano di evacuazione' = evacuation plan.",
 example:"A: Hanno ordinato l'evacuazione della zona.\nB: Dove vanno gli sfollati?",
 exampleSrc:"A: They ordered the evacuation of the area.\nB: Where do the displaced people go?",
 funFact:"'Sfollati' (displaced people) is a word Italians know well from both World War II and natural disasters. Community solidarity during evacuations is deeply embedded in Italian culture."},

{type:"teach", trg:"il dissesto", src:"the instability / disruption", pos:"noun", gender:"m",
 note:"Masculine noun. 'Dissesto idrogeologico' = hydrogeological instability.\nA major Italian concern.",
 example:"A: Il dissesto idrogeologico e un problema grave.\nB: Troppo cemento e poca manutenzione.",
 exampleSrc:"A: Hydrogeological instability is a serious problem.\nB: Too much concrete and too little maintenance.",
 funFact:"'Dissesto idrogeologico' is one of Italy's biggest environmental challenges. Decades of uncontrolled building ('abusivismo edilizio') have made the territory fragile."},

{type:"mc",
 q:"What are the 'Angeli del Fango'?",
 opts:["Volunteers who helped save art during the 1966 Florence flood","A type of mudslide","Emergency helicopter crews","A geological formation"],
 ans:"Volunteers who helped save art during the 1966 Florence flood",
 hint:"'Fango' means mud. These 'angels' came from around the world to rescue a... treasures from the devastating f...."},

{type:"match", pairs:[
  {trg:"il terremoto", src:"the earthquake"},
  {trg:"l'alluvione", src:"the flood"},
  {trg:"la siccita", src:"the drought"},
  {trg:"la frana", src:"the landslide"}
]},

{type:"fb",
 s:"L'ultima {1} dell'Etna ha chiuso l'aeroporto.",
 a:["eruzione"],
 opts:["eruzione","alluvione","frana","siccita"],
 hint:"Etna is a volcano. When a volcano becomes active, this event sends ash and lava into the air.",
 sSrc:"The last {1} of Etna closed the airport."},

{type:"mc",
 q:"What does 'dissesto idrogeologico' refer to?",
 opts:["Instability of land and water systems due to poor land management","A type of earthquake","A volcanic eruption","A weather forecast"],
 ans:"Instability of land and water systems due to poor land management",
 hint:"'Dissesto' means i.... Combined with w... (idro) and geological (geologico), it describes terrain fragility."},

{type:"fb",
 s:"I {1} sono arrivati in tempo per salvare tutti.",
 a:["soccorsi"],
 opts:["soccorsi","terremoti","eruzioni","dissesti"],
 hint:"This word means rescue teams or relief. They arrive to help people in emergency situations.",
 sSrc:"The {1} arrived in time to save everyone."},

{type:"mc",
 q:"Which three volcanoes are active in Italy?",
 opts:["Etna, Stromboli, and Vesuvio","Etna, Monte Bianco, and Dolomiti","Vesuvio, Stromboli, and Cervino","Etna, Amiata, and Stromboli"],
 ans:"Etna, Stromboli, and Vesuvio",
 hint:"One is in Sicily, one in the Aeolian Islands, and one near Naples. The last one famously destroyed Pompeii."}
,{type:"fb",s:"I volontari hanno coordinato {1} dopo il terremoto.",a:["il soccorso"],opts:["il soccorso","il dissesto","la frana","la siccita"],hint:"Emergency assistance and rescue operations carried out after a natural disaster.",sSrc:"Volunteers coordinated {1} after the earthquake."}]};
export default BATCH8_L1;
