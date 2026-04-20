// Batch 7 — Unit 15 extra lesson. La casa e l'affitto: Neighborhood & Community
const BATCH7_L1 = {id:"itv2_u15l_b7_1", title:"Il quartiere", icon:"\u{1F3D8}\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"Il quartiere",
 desc:"Learn vocabulary for describing neighborhoods, community life, and local services.",
 goals:["Describe your neighborhood","Talk about local services and shops","Express preferences about where to live"]},

{type:"teach", trg:"il quartiere", src:"the neighborhood / district", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i quartieri.\n'Quartiere residenziale' = residential area.",
 example:"A: In che quartiere abiti?\nB: A Trastevere, nel centro di Roma.",
 exampleSrc:"A: What neighborhood do you live in?\nB: In Trastevere, in central Rome.",
 funFact:"Italian neighborhoods have strong identities. In Rome, each 'rione' (historic district) has its own coat of arms, traditions, and local pride. Trastevere means 'across the Tiber.'"},

{type:"teach", trg:"il vicinato", src:"the neighborhood / neighbors", pos:"noun", gender:"m",
 note:"Masculine noun. Collective term for neighbors.\n'I vicini di casa' = the neighbors.",
 example:"A: Come sono i rapporti con il vicinato?\nB: Ottimi, ci aiutiamo sempre.",
 exampleSrc:"A: How are relations with the neighbors?\nB: Excellent, we always help each other.",
 funFact:"Italian apartment buildings often have a 'portiere' (doorman/concierge) who knows everything about the vicinato. The portiere is a vanishing but beloved figure of Italian urban life."},

{type:"teach", trg:"il condominio", src:"the apartment building / condo", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i condomini.\n'Riunione di condominio' = building meeting.",
 example:"A: La riunione di condominio e domani sera.\nB: Di che si parla?",
 exampleSrc:"A: The building meeting is tomorrow evening.\nB: What is being discussed?",
 funFact:"Italian 'riunioni di condominio' (building meetings) are legendary for drama. Disputes about noise, parking, shared expenses, and pets can last hours and become quite heated."},

{type:"teach", trg:"il marciapiede", src:"the sidewalk", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i marciapiedi.\nLiterally: 'foot march' (marcia + piede).",
 example:"A: Il marciapiede e stretto in questa via.\nB: Si, bisogna camminare in fila.",
 exampleSrc:"A: The sidewalk is narrow on this street.\nB: Yes, you have to walk in a line.",
 funFact:"Italian sidewalks in historic centers are often narrow because the streets were designed for horses, not cars. Navigating a stroller or wheelchair can be a real challenge."},

{type:"teach", trg:"la periferia", src:"the outskirts / suburbs", pos:"noun", gender:"f",
 note:"Feminine noun. 'In periferia' = in the suburbs.\nOpposite: 'il centro' (the center).",
 example:"A: Abiti in centro o in periferia?\nB: In periferia, gli affitti sono più bassi.",
 exampleSrc:"A: Do you live in the center or the suburbs?\nB: In the suburbs, rents are lower.",
 funFact:"Italian 'periferia' has a different connotation than American suburbs. It often refers to concrete apartment blocks built in the 1960s-70s, sometimes associated with social challenges."},

{type:"teach", trg:"il parco giochi", src:"the playground", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i parchi giochi.\n'Parco giochi' = play park for children.",
 example:"A: Portiamo i bambini al parco giochi?\nB: Si, hanno bisogno di aria fresca.",
 exampleSrc:"A: Shall we take the children to the playground?\nB: Yes, they need fresh air.",
 funFact:"Italian playgrounds are often meeting points for parents and grandparents. The 'nonni' (grandparents) play a huge role in childcare, and the playground is their social hub."},

{type:"teach", trg:"la panchina", src:"the bench", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le panchine.\nFrom 'panca' (bench). Also: substitute bench in sports.",
 example:"A: Sediamoci sulla panchina.\nB: Si, riposiamoci un po'.",
 exampleSrc:"A: Let us sit on the bench.\nB: Yes, let us rest a bit.",
 funFact:"In football, 'stare in panchina' means to be on the substitute bench. 'Panchinaro' is slang for a player who rarely gets to play. Off the field, panchine are where old men discuss everything."},

{type:"teach", trg:"il distributore", src:"the gas station / dispenser", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i distributori.\n'Distributore di benzina' = gas station.",
 example:"A: C'e un distributore qui vicino?\nB: Si, a cinquecento metri.",
 exampleSrc:"A: Is there a gas station nearby?\nB: Yes, five hundred meters away.",
 funFact:"Italian gas stations often have self-service and attended options. 'Servito' (attended) costs more, while 'self-service' or 'fai da te' lets you pump your own at a discount."},

{type:"teach", trg:"la fontanella", src:"the drinking fountain", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fontanelle.\nSmall public water fountain found throughout Italian cities.",
 example:"A: Ho sete, c'è una fontanella?\nB: Si, all'angolo della piazza.",
 exampleSrc:"A: I am thirsty, is there a drinking fountain?\nB: Yes, at the corner of the square.",
 funFact:"Rome has over 2,500 public drinking fountains called 'nasoni' (big noses) because of their curved spout shape. The water comes from ancient Roman aqueducts and is free and clean."},

{type:"teach", trg:"la raccolta differenziata", src:"recycling / waste sorting", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fare la raccolta differenziata' = to sort recycling.\nMandatory in Italy.",
 example:"A: Dove butto questa bottiglia?\nB: Nel contenitore del vetro. Facciamo la raccolta differenziata.",
 exampleSrc:"A: Where do I throw this bottle?\nB: In the glass container. We sort our recycling.",
 funFact:"Italian recycling rules vary by city and can be confusing. Each type of waste has a specific collection day. Getting it wrong can result in fines and disapproving neighbors."},

{type:"teach", trg:"il cassonetto", src:"the dumpster / waste bin", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cassonetti.\nLarge outdoor waste containers on streets.",
 example:"A: I cassonetti sono pieni.\nB: Domani passa la raccolta.",
 exampleSrc:"A: The dumpsters are full.\nB: Collection comes tomorrow.",
 funFact:"Italian cities are transitioning from street 'cassonetti' to door-to-door waste collection ('porta a porta'). Each household gets separate bins for different waste types."},

{type:"teach", trg:"il vialetto", src:"the path / driveway", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i vialetti.\nDiminutive of 'viale' (avenue). A small path.",
 example:"A: Il vialetto del giardino e coperto di foglie.\nB: Devo pulirlo.",
 exampleSrc:"A: The garden path is covered with leaves.\nB: I need to clean it.",
 funFact:"'Viale' (avenue) comes from 'via' (road). Italian cities have grand 'viali' lined with trees, while 'vialetti' are small garden paths. The suffix '-etto' makes things smaller and cuter."},

{type:"teach", trg:"tranquillo", src:"quiet / calm", pos:"adj", gender:null,
 note:"Adjective. Tranquillo/a/i/e.\n'Stai tranquillo' = relax, do not worry.",
 example:"A: Il quartiere e tranquillo?\nB: Si, molto tranquillo di notte.",
 exampleSrc:"A: Is the neighborhood quiet?\nB: Yes, very quiet at night.",
 funFact:"'Stai tranquillo!' or 'tranquilla!' is one of the most used Italian expressions. It means 'relax' or 'do not worry' and is said in every possible situation."},

{type:"mc", q:"Che cosa sono i 'nasoni' di Roma?",
 opts:["Public drinking fountains","Large noses","Ancient statues","Bus stops"],
 ans:"Public drinking fountains",
 hint:"Small p... water sources found on Roman streets. Named for their curved spout shape."},

{type:"fb", s:"In che {1} abiti?", a:["quartiere"],
 opts:["quartiere","condominio","cassonetto","vialetto"],
 hint:"The district or neighborhood of a city where you live.",
 sSrc:"What {1} do you live in?"},

{type:"match", pairs:[
 {trg:"il condominio", src:"apartment building"},
 {trg:"la periferia", src:"outskirts"},
 {trg:"il vicinato", src:"neighbors"},
 {trg:"il marciapiede", src:"sidewalk"}
]},

{type:"mc", q:"Che cos'e la 'raccolta differenziata'?",
 opts:["Recycling / waste sorting","A neighborhood festival","A building meeting","A gas station"],
 ans:"Recycling / waste sorting",
 hint:"Separating glass, plastic, paper, and organic w... into different bins."},

{type:"fb", s:"Sediamoci sulla {1} al parco.", a:["panchina"],
 opts:["panchina","fontanella","periferia","raccolta"],
 hint:"A long seat in a public park where you can sit and rest.",
 sSrc:"Let us sit on the {1} in the park."},

{type:"mc", q:"Che cosa succede alle riunioni di condominio?",
 opts:["Residents discuss building matters","Children play together","People go shopping","Neighbors cook together"],
 ans:"Residents discuss building matters",
 hint:"A meeting for all apartment owners to d... shared expenses, rules, and issues."},

{type:"fb", s:"Il quartiere e molto {1} di notte.", a:["tranquillo"],
 opts:["tranquillo","rumoroso","pericoloso","stretto"],
 hint:"Peaceful and calm. No noise or disturbance.",
 sSrc:"The neighborhood is very {1} at night."},

{type:"match", pairs:[
 {trg:"la fontanella", src:"drinking fountain"},
 {trg:"il cassonetto", src:"dumpster"},
 {trg:"il parco giochi", src:"playground"},
 {trg:"il distributore", src:"gas station"}
]}
,{type:"match",pairs:[{trg:"la raccolta differenziata",src:"recycling / waste sorting"},{trg:"il vialetto",src:"the path / driveway"}]}]};
export default BATCH7_L1;
