// Batch 6. Unit 15 extra lesson. La casa e l'affitto: Home Repairs & Problems
const BATCH6_L1 = {id:"itv2_u15l_b6_1", title:"Problemi in casa", icon:"\u{1F527}", xp:15, board:true, steps:[
{type:"intro", title:"Problemi in casa",
 desc:"Learn vocabulary for common household problems, repairs, and communicating with landlords and technicians.",
 goals:["Describe common household problems","Request repairs from a landlord","Communicate with technicians"]},

{type:"teach", trg:"il guasto", src:"the breakdown / malfunction", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i guasti.\n'Fuori servizio per guasto' = out of order due to malfunction.",
 example:"A: C'e un guasto alla caldaia.\nB: Chiamo subito il tecnico.",
 exampleSrc:"A: There is a breakdown in the boiler.\nB: I will call the technician right away.",
 funFact:"'Guasto' as an adjective means 'broken/spoiled.' 'Frutta guasta' is spoiled fruit. The word originally meant 'devastated' from Germanic 'wostjan.'"},

{type:"teach", trg:"la perdita", src:"the leak / loss", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le perdite.\nFrom 'perdere.' A water leak or financial loss.",
 example:"A: C'e una perdita d'acqua in bagno.\nB: Sotto il lavandino?",
 exampleSrc:"A: There is a water leak in the bathroom.\nB: Under the sink?",
 funFact:"'Perdita' covers water leaks, gas leaks, financial losses, and time losses. 'Perdita di tempo' (waste of time) is a frequently heard Italian complaint."},

{type:"teach", trg:"l'idraulico", src:"the plumber", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'idraulica. Plural: gli idraulici.\nFrom Greek 'hydraulikos' (water pipe).",
 example:"A: L'idraulico viene domani mattina.\nB: Tra le otto e le dodici, come sempre.",
 exampleSrc:"A: The plumber is coming tomorrow morning.\nB: Between eight and twelve, as always.",
 funFact:"Finding a reliable 'idraulico' is considered a life achievement in Italy. They are notoriously hard to schedule and their arrival time is always approximate."},

{type:"teach", trg:"l'elettricista", src:"the electrician", pos:"noun", gender:"m",
 note:"Masculine/feminine noun (l'elettricista). Plural: gli/le elettricisti/e.\nFrom 'elettrico.'",
 example:"A: Devo chiamare l'elettricista per la presa.\nB: Quella in cucina?",
 exampleSrc:"A: I need to call the electrician for the outlet.\nB: The one in the kitchen?",
 funFact:"Italian electrical systems use 220V. The distinctive three-prong Italian plug ('spina italiana') is being replaced by the European standard 'Schuko' plug."},

{type:"teach", trg:"la presa", src:"the outlet / socket", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le prese.\n'Presa elettrica' = electrical outlet. 'Presa' also means grip.",
 example:"A: La presa non funziona.\nB: Forse e saltato il salvavita.",
 exampleSrc:"A: The outlet is not working.\nB: Maybe the circuit breaker tripped.",
 funFact:"Italy uses three different plug types (Type C, F, and L). Travelers often need adapters. The 'salvavita' (literally 'lifesaver') is the circuit breaker."},

{type:"teach", trg:"allagare", src:"to flood", pos:"verb", gender:null,
 note:"Regular -are verb. allago, allaghi, allaga.\nFrom 'lago' (lake). To flood a room or area.",
 example:"A: Il bagno si e allagato!\nB: Chiudi l'acqua subito!",
 exampleSrc:"A: The bathroom flooded!\nB: Turn off the water immediately!",
 funFact:"'Allagare' literally means 'to make into a lake.' Venice is famously plagued by 'acqua alta' (high water), regular flooding of the city."},

{type:"teach", trg:"la muffa", src:"the mold / mildew", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le muffe.\nA common problem in old Italian buildings with poor ventilation.",
 example:"A: C'e muffa sulle pareti del bagno.\nB: Bisogna arieggiare di più.",
 exampleSrc:"A: There is mold on the bathroom walls.\nB: We need to air out more.",
 funFact:"Mold is a common problem in Italian apartments, especially in humid coastal cities. 'Arieggiare' (to air out) by opening windows is the traditional solution."},

{type:"teach", trg:"la crepa", src:"the crack", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le crepe.\nA crack in walls, ceilings, or surfaces.",
 example:"A: C'e una crepa nel muro del salotto.\nB: E grande? Potrebbe essere strutturale.",
 exampleSrc:"A: There is a crack in the living room wall.\nB: Is it big? It could be structural.",
 funFact:"'Crepa' is also the informal imperative of 'crepare' (to die/croak): 'crepa!' is a very rude insult. Context between wall cracks and insults is usually clear."},

{type:"teach", trg:"riparare", src:"to repair / to fix", pos:"verb", gender:null,
 note:"Regular -are verb. riparo, ripari, ripara.\nFrom Latin 'reparare.' General term for fixing things.",
 example:"A: Puoi riparare la porta? Non si chiude bene.\nB: Ci provo, ho gli attrezzi.",
 exampleSrc:"A: Can you fix the door? It does not close properly.\nB: I will try, I have the tools.",
 funFact:"'Riparare' also means 'to shelter/protect': 'ripararsi dalla pioggia' (to shelter from the rain). The noun 'riparazione' means repair."},

{type:"teach", trg:"aggiustare", src:"to fix / to adjust", pos:"verb", gender:null,
 note:"Regular -are verb. aggiusto, aggiusti, aggiusta.\nSynonym of 'riparare,' slightly more informal.",
 example:"A: Chi può aggiustare la lavatrice?\nB: Chiama il tecnico dell'assistenza.",
 exampleSrc:"A: Who can fix the washing machine?\nB: Call the service technician.",
 funFact:"'Aggiustare' and 'riparare' are largely interchangeable. 'Aggiustare' has a nuance of adjusting or fine-tuning, while 'riparare' focuses on restoring function."},

{type:"teach", trg:"il rubinetto", src:"the faucet / tap", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i rubinetti.\nDiminutive of 'rubino' (ruby), from the red valve handle.",
 example:"A: Il rubinetto gocciola tutta la notte.\nB: Bisogna cambiare la guarnizione.",
 exampleSrc:"A: The faucet drips all night.\nB: We need to change the gasket.",
 funFact:"'Rubinetto' literally means 'little ruby,' named after the small red handle on early valve taps. A dripping faucet is called 'rubinetto che gocciola.'"},

{type:"teach", trg:"la caldaia", src:"the boiler / water heater", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le caldaie.\nFrom 'caldo' (hot). Heats water and radiators.",
 example:"A: La caldaia non si accende.\nB: Forse manca il gas.",
 exampleSrc:"A: The boiler will not turn on.\nB: Maybe there is no gas.",
 funFact:"Most Italian homes use gas boilers ('caldaia a gas') for heating and hot water. Annual 'revisione della caldaia' (boiler inspection) is legally required."},

{type:"teach", trg:"gocciolare", src:"to drip / to leak", pos:"verb", gender:null,
 note:"Regular -are verb. gocciolo, goccioli, gocciola.\nFrom 'goccia' (drop). Slow, drop-by-drop leaking.",
 example:"A: Il rubinetto gocciola da giorni.\nB: Stasera lo aggiusto.",
 exampleSrc:"A: The faucet has been dripping for days.\nB: Tonight I will fix it.",
 funFact:"'Goccia a goccia si scava la pietra' (drop by drop, one carves the stone) is the Italian equivalent of 'dripping water wears away stone.'"},

{type:"teach", trg:"il proprietario", src:"the owner / landlord", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la proprietaria. Plural: i proprietari.\nThe property owner.",
 example:"A: Il proprietario deve pagare le riparazioni.\nB: Hai controllato il contratto?",
 exampleSrc:"A: The landlord must pay for the repairs.\nB: Did you check the contract?",
 funFact:"Italian rental law ('legge sugli affitti') strictly defines which repairs are the landlord's responsibility and which are the tenant's."},

{type:"mc", q:"Chi chiami se hai una perdita d'acqua?",
 opts:["l'idraulico","l'elettricista","il proprietario","il tecnico"],
 ans:"l'idraulico",
 hint:"The professional who specializes in water pipes and plumbing. From Greek 'hydraulikos.'"},

{type:"fb", s:"Il {1} gocciola tutta la notte, non riesco a dormire.", a:["rubinetto"],
 opts:["rubinetto","guasto","muro","proprietario"],
 hint:"The faucet or tap in the bathroom or kitchen that is leaking drops.",
 sSrc:"The {1} drips all night, I cannot sleep."},

{type:"match", pairs:[
 {trg:"l'idraulico", src:"plumber"},
 {trg:"l'elettricista", src:"electrician"},
 {trg:"la caldaia", src:"boiler"},
 {trg:"il rubinetto", src:"faucet"}
]},

{type:"mc", q:"Cosa significa 'allagare'?",
 opts:["to drip","to flood","to repair","to crack"],
 ans:"to flood",
 hint:"From 'lago' (lake). When too much water fills a room."},

{type:"fb", s:"C'e {1} sulle pareti, bisogna arieggiare di più.", a:["muffa"],
 opts:["muffa","crepa","perdita","presa"],
 hint:"A fungal growth on walls caused by humidity. Common in old buildings.",
 sSrc:"There is {1} on the walls, we need to air out more."},

{type:"mc", q:"Chi deve pagare le riparazioni strutturali in un appartamento in affitto?",
 opts:["L'idraulico","L'elettricista","Il proprietario","L'inquilino"],
 ans:"Il proprietario",
 hint:"The person who owns the property, not the person renting it."},

{type:"fb", s:"Puoi {1} la porta? Non si chiude bene.", a:["riparare"],
 opts:["riparare","allagare","gocciolare","crepare"],
 hint:"The verb meaning 'to fix' or 'to repair.' A general term for restoration.",
 sSrc:"Can you {1} the door? It does not close properly."},

{type:"match", pairs:[
 {trg:"il guasto", src:"breakdown"},
 {trg:"la perdita", src:"leak"},
 {trg:"la crepa", src:"crack"},
 {trg:"la muffa", src:"mold"}
]}
,{type:"match",pairs:[{trg:"la presa",src:"the outlet / socket"},{trg:"aggiustare",src:"to fix / to adjust"}]}]};
export default BATCH6_L1;
