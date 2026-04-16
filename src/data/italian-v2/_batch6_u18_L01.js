// Batch 6 — Unit 18 extra lesson. L'ambiente: Natural Disasters & Climate
const BATCH6_L1 = {id:"itv2_u18l_b6_1", title:"Disastri naturali e clima", icon:"\u{1F30A}", xp:15, board:true, steps:[
{type:"intro", title:"Disastri naturali e clima",
 desc:"Learn vocabulary for natural disasters, extreme weather, and climate phenomena in Italian.",
 goals:["Name major natural disasters","Describe extreme weather events","Discuss climate and environmental risks"]},

{type:"teach", trg:"il terremoto", src:"the earthquake", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i terremoti.\nCompound: terra (earth) + moto (motion).",
 example:"A: Hai sentito il terremoto ieri notte?\nB: Si, ha tremato tutto per dieci secondi.",
 exampleSrc:"A: Did you feel the earthquake last night?\nB: Yes, everything shook for ten seconds.",
 funFact:"Italy sits on major fault lines and experiences frequent earthquakes. The 2009 L'Aquila earthquake and the 2016 Amatrice earthquake were devastating events."},

{type:"teach", trg:"l'alluvione", src:"the flood", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le alluvioni.\nA major flooding event, larger scale than 'allagamento.'",
 example:"A: L'alluvione ha distrutto molte case.\nB: I soccorsi sono arrivati subito.",
 exampleSrc:"A: The flood destroyed many houses.\nB: Rescue teams arrived immediately.",
 funFact:"The 1966 flood of Florence ('l'alluvione di Firenze') is one of Italy's greatest cultural disasters. The Arno River flooded the city, damaging priceless artworks."},

{type:"teach", trg:"la siccita", src:"the drought", pos:"noun", gender:"f",
 note:"Feminine noun. No common plural.\nProlonged lack of rain causing water shortage.",
 example:"A: La siccita ha colpito il sud quest'estate.\nB: I raccolti sono andati persi.",
 exampleSrc:"A: The drought hit the south this summer.\nB: The crops were lost.",
 funFact:"Southern Italy and the islands frequently suffer siccita in summer. Water rationing ('razionamento dell'acqua') is still common in parts of Sicily and Sardinia."},

{type:"teach", trg:"l'eruzione", src:"the eruption", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le eruzioni.\nFrom 'erompere' (to burst out). Volcanic activity.",
 example:"A: L'eruzione del Vesuvio nel 79 d.C. ha distrutto Pompei.\nB: Un evento che ha cambiato la storia.",
 exampleSrc:"A: The eruption of Vesuvius in 79 AD destroyed Pompeii.\nB: An event that changed history.",
 funFact:"Italy has several active volcanoes: Vesuvius, Etna, Stromboli, and Vulcano. Etna is Europe's most active volcano, erupting regularly."},

{type:"teach", trg:"la frana", src:"the landslide", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le frane.\nWhen earth and rock slide down a slope.",
 example:"A: Una frana ha bloccato la strada.\nB: Dobbiamo prendere un'altra via.",
 exampleSrc:"A: A landslide blocked the road.\nB: We have to take another route.",
 funFact:"Italy's mountainous terrain makes landslides common, especially after heavy rain. 'Rischio frana' (landslide risk) signs are common on Italian mountain roads."},

{type:"teach", trg:"la tempesta", src:"the storm", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le tempeste.\nGeneral term for severe weather events.",
 example:"A: Si avvicina una tempesta.\nB: Chiudiamo le finestre!",
 exampleSrc:"A: A storm is approaching.\nB: Let us close the windows!",
 funFact:"'Una tempesta in un bicchier d'acqua' (a storm in a glass of water) is the Italian version of 'a tempest in a teapot,' much ado about nothing."},

{type:"teach", trg:"il fulmine", src:"the lightning bolt", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i fulmini.\nA flash of lightning. 'Fulmineo' = lightning-fast.",
 example:"A: Un fulmine ha colpito l'albero nel parco.\nB: Per fortuna nessuno era vicino.",
 exampleSrc:"A: A lightning bolt struck the tree in the park.\nB: Fortunately no one was nearby.",
 funFact:"'Un colpo di fulmine' (a lightning strike) is the Italian expression for love at first sight. Being struck by lightning and being struck by love use the same metaphor."},

{type:"teach", trg:"la grandine", src:"the hail", pos:"noun", gender:"f",
 note:"Feminine noun. No common plural.\n'Grandinare' = to hail. Ice falling from storm clouds.",
 example:"A: La grandine ha rovinato il tetto della macchina.\nB: Quanto sono grossi i chicchi?",
 exampleSrc:"A: The hail ruined the car roof.\nB: How big are the hailstones?",
 funFact:"Hailstorms are a serious agricultural threat in Italy, especially in the Po Valley. 'Chicchi di grandine' (hailstones) can be as large as golf balls in severe storms."},

{type:"teach", trg:"la valanga", src:"the avalanche", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le valanghe.\nA mass of snow sliding down a mountain.",
 example:"A: C'e pericolo di valanghe in montagna.\nB: Non dobbiamo uscire dalle piste.",
 exampleSrc:"A: There is avalanche danger in the mountains.\nB: We must not leave the trails.",
 funFact:"The Italian Alps see avalanche season from December to April. 'Bollettino valanghe' (avalanche bulletin) is checked daily by skiers and mountain workers."},

{type:"teach", trg:"lo scioglimento", src:"the melting", pos:"noun", gender:"m",
 note:"Masculine noun. From 'sciogliere' (to melt/dissolve).\n'Scioglimento dei ghiacciai' = glacier melting.",
 example:"A: Lo scioglimento dei ghiacciai accelera.\nB: E un segnale del riscaldamento globale.",
 exampleSrc:"A: Glacier melting is accelerating.\nB: It is a sign of global warming.",
 funFact:"Italy's Alpine glaciers are retreating rapidly. The Marmolada glacier, the largest in the Dolomites, has lost over 70% of its volume in the past century."},

{type:"teach", trg:"prevedere", src:"to forecast / to predict", pos:"verb", gender:null,
 note:"Irregular -ere verb. prevedo, prevedi, prevede.\nPast participle: previsto.",
 example:"A: Le previsioni prevedono pioggia per domani.\nB: Porto l'ombrello allora.",
 exampleSrc:"A: The forecast predicts rain for tomorrow.\nB: I will bring the umbrella then.",
 funFact:"'Prevedere' (pre + vedere = to see before) gives us 'le previsioni del tempo' (the weather forecast). 'Imprevisto' (unforeseen) is a commonly used adjective."},

{type:"teach", trg:"il soccorso", src:"the rescue / aid", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i soccorsi.\n'Squadra di soccorso' = rescue team.",
 example:"A: I soccorsi sono arrivati in elicottero.\nB: Hanno salvato tutte le persone.",
 exampleSrc:"A: The rescue teams arrived by helicopter.\nB: They saved all the people.",
 funFact:"Italy's 'Protezione Civile' (Civil Protection) is the national agency that coordinates emergency response. It mobilizes thousands of volunteers during natural disasters."},

{type:"teach", trg:"evacuare", src:"to evacuate", pos:"verb", gender:null,
 note:"Regular -are verb. evacuo, evacui, evacua.\nTo leave a dangerous area for safety.",
 example:"A: Bisogna evacuare l'edificio.\nB: Tutti fuori, per le scale!",
 exampleSrc:"A: We need to evacuate the building.\nB: Everyone out, use the stairs!",
 funFact:"In Italian schools, 'prove di evacuazione' (evacuation drills) are mandatory. Italian earthquake preparedness includes regular practice at schools and workplaces."},

{type:"teach", trg:"la scossa", src:"the shock / tremor", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scosse.\n'Scossa di terremoto' = earthquake tremor. Also electric shock.",
 example:"A: C'e stata una scossa di magnitudo 4.2.\nB: L'hai sentita? Io dormivo.",
 exampleSrc:"A: There was a tremor of magnitude 4.2.\nB: Did you feel it? I was sleeping.",
 funFact:"After a major earthquake, 'scosse di assestamento' (aftershocks) can continue for weeks. Italians in seismic zones learn to distinguish between minor tremors and serious events."},

{type:"mc", q:"Come si chiama un'enorme massa di neve che scivola giu dalla montagna?",
 opts:["la valanga","la frana","l'alluvione","la grandine"],
 ans:"la valanga",
 hint:"A snow-specific disaster on mountains. Dangerous for skiers and hikers."},

{type:"fb", s:"Il {1} del 2009 a L'Aquila e stato devastante.", a:["terremoto"],
 opts:["terremoto","fulmine","soccorso","scioglimento"],
 hint:"An earthquake. Literally 'earth motion.' A common natural disaster in Italy.",
 sSrc:"The {1} of 2009 in L'Aquila was devastating."},

{type:"match", pairs:[
 {trg:"il terremoto", src:"earthquake"},
 {trg:"l'alluvione", src:"flood"},
 {trg:"l'eruzione", src:"eruption"},
 {trg:"la frana", src:"landslide"}
]},

{type:"mc", q:"Cosa significa 'un colpo di fulmine' in senso figurato?",
 opts:["Love at first sight","A sudden storm","An electric shock","A loud noise"],
 ans:"Love at first sight",
 hint:"A lightning strike to the heart. The Italian expression for instant romantic attraction."},

{type:"fb", s:"Le {1} del tempo prevedono pioggia per il fine settimana.", a:["previsioni"],
 opts:["previsioni","valanghe","scosse","eruzioni"],
 hint:"The weather forecast. From 'prevedere' (to predict/foresee).",
 sSrc:"The weather {1} predict rain for the weekend."},

{type:"mc", q:"Quale organizzazione coordina i soccorsi durante i disastri naturali in Italia?",
 opts:["La Protezione Civile","I Carabinieri","La Guardia di Finanza","Il Comune"],
 ans:"La Protezione Civile",
 hint:"The national civil protection agency that mobilizes volunteers and resources."},

{type:"fb", s:"Bisogna {1} l'edificio immediatamente.", a:["evacuare"],
 opts:["evacuare","prevedere","soccorrere","sciogliere"],
 hint:"To leave a building or area because of danger. An emergency action.",
 sSrc:"We need to {1} the building immediately."},

{type:"match", pairs:[
 {trg:"la tempesta", src:"storm"},
 {trg:"la grandine", src:"hail"},
 {trg:"la siccita", src:"drought"},
 {trg:"la scossa", src:"tremor"}
]}
]};
export default BATCH6_L1;
