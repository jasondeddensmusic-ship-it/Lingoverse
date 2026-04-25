// Batch 8. Unit 11 extra lesson. Past Tense: Irregular Past Participles
const BATCH8_L1 = {id:"itv2_u11l_b8_1", title:"Participi irregolari (II)", icon:"🔀", xp:15, board:true, steps:[
{type:"intro", title:"Participi irregolari",
 desc:"Master the most common irregular past participles used in everyday Italian conversation.",
 goals:["Recognize irregular past participles","Use them in passato prossimo sentences","Avoid common mistakes with irregular forms"]},

{type:"teach", trg:"accadere", src:"to happen / to occur", pos:"verb", gender:null,
 note:"Irregular. Past: e accaduto (uses essere).\nSynonym of 'succedere.' Slightly more formal.",
 example:"A: Cos'e accaduto ieri sera?\nB: Niente di speciale, tutto tranquillo.",
 exampleSrc:"A: What happened last night?\nB: Nothing special, everything was quiet.",
 funFact:"'Accadere' comes from Latin 'accadere' (to fall toward). Events 'fall upon' us. The word 'cadere' (to fall) shares the same root."},

{type:"teach", trg:"scomparire", src:"to disappear / to vanish", pos:"verb", gender:null,
 note:"Irregular. Past: e scomparso/a (uses essere).\n'Scomparsa' = disappearance. Also: passing (death).",
 example:"A: Il gatto e scomparso da due giorni.\nB: Hai guardato in giardino?",
 exampleSrc:"A: The cat has disappeared for two days.\nB: Have you looked in the garden?",
 funFact:"'Scomparsa' is the euphemistic Italian word for death. 'La scomparsa di mia nonna' sounds gentler than 'la morte di mia nonna.' Very common in obituaries."},

{type:"teach", trg:"rimanere", src:"to remain / to stay", pos:"verb", gender:null,
 note:"Irregular. Past: e rimasto/a (uses essere).\n'Rimanere sorpreso' = to be surprised.",
 example:"A: Quanto tempo sei rimasto a Roma?\nB: Sono rimasto tre settimane.",
 exampleSrc:"A: How long did you stay in Rome?\nB: I stayed three weeks.",
 funFact:"'Rimanere' has many idiomatic uses: 'rimanere di sasso' (to be stunned, literally 'to remain stone'), 'rimanere senza parole' (to be speechless)."},

{type:"teach", trg:"nascondere", src:"to hide", pos:"verb", gender:null,
 note:"Irregular. Past participle: nascosto.\n'Nascondersi' = to hide oneself. 'Nascondino' = hide and seek.",
 example:"A: Dove hai nascosto le chiavi?\nB: Le ho nascoste nel cassetto.",
 exampleSrc:"A: Where did you hide the keys?\nB: I hid them in the drawer.",
 funFact:"'Giocare a nascondino' (to play hide and seek) uses the diminutive of 'nascondere.' Italian children's games often use verb-based diminutives."},

{type:"teach", trg:"coprire", src:"to cover", pos:"verb", gender:null,
 note:"Irregular. Past participle: coperto.\n'Scoprire' (to discover) = s- + coprire (uncover).",
 example:"A: Ho coperto il divano con una coperta.\nB: Buona idea, così resta pulito.",
 exampleSrc:"A: I covered the sofa with a blanket.\nB: Good idea, it stays clean that way.",
 funFact:"'Scoprire' (to discover) literally means 'to uncover.' Columbus 'uncovered' America. 'Scoprire l'acqua calda' (to discover hot water) means to state the obvious."},

{type:"teach", trg:"raccogliere", src:"to pick up / to collect", pos:"verb", gender:null,
 note:"Irregular. Past participle: raccolto.\n'La raccolta' = the collection/harvest.",
 example:"A: Ho raccolto i fiori nel giardino.\nB: Che bel mazzo!",
 exampleSrc:"A: I picked flowers in the garden.\nB: What a beautiful bouquet!",
 funFact:"'Raccolta differenziata' (separated collection) is Italy's recycling system. Italians sort waste into multiple bins: organic, plastic, paper, glass, undifferentiated."},

{type:"teach", trg:"spegnere", src:"to turn off / to extinguish", pos:"verb", gender:null,
 note:"Irregular. Past participle: spento.\n'Spegnere la luce' = to turn off the light.",
 example:"A: Hai spento la luce in cucina?\nB: Si, ho spento tutto.",
 exampleSrc:"A: Did you turn off the light in the kitchen?\nB: Yes, I turned everything off.",
 funFact:"'Spento' is also an adjective meaning 'dull' or 'lifeless.' 'Ha uno sguardo spento' (he has a dull gaze) describes someone who looks tired or depressed."},

{type:"teach", trg:"dipingere", src:"to paint", pos:"verb", gender:null,
 note:"Irregular. Past participle: dipinto.\n'Un dipinto' = a painting. 'Il pittore' = the painter.",
 example:"A: Chi ha dipinto questo quadro?\nB: L'ha dipinto mio nonno.",
 exampleSrc:"A: Who painted this picture?\nB: My grandfather painted it.",
 funFact:"Italian has separate words: 'dipingere' (artistic painting), 'verniciare' (house painting), 'pitturare' (general painting). Using the wrong one sounds funny."},

{type:"teach", trg:"piangere", src:"to cry / to weep", pos:"verb", gender:null,
 note:"Irregular. Past participle: pianto.\n'Il pianto' = the crying/weeping.",
 example:"A: Hai pianto al film?\nB: Si, era molto commovente.",
 exampleSrc:"A: Did you cry at the movie?\nB: Yes, it was very moving.",
 funFact:"'Piangere sul latte versato' (to cry over spilled milk) exists in Italian too. 'Piangere miseria' (to cry poverty) means to complain about being poor when you are not."},

{type:"mc",
 q:"What is the past participle of 'scomparire'?",
 opts:["scomparso","scomparito","scomparto","scomparuto"],
 ans:"scomparso",
 hint:"This verb means 'to disappear.' Its past form is irregular, not the standard -ito ending."},

{type:"match", pairs:[
  {trg:"rimasto", src:"remained (past part.)"},
  {trg:"nascosto", src:"hidden (past part.)"},
  {trg:"spento", src:"turned off (past part.)"},
  {trg:"dipinto", src:"painted (past part.)"}
]},

{type:"fb",
 s:"Cos'e {1} ieri sera alla festa?",
 a:["accaduto"],
 opts:["accaduto","scomparso","rimasto","nascosto"],
 hint:"This verb means 'to happen.' You want to know what took place at the party.",
 sSrc:"What {1} last night at the party?"},

{type:"mc",
 q:"Which verb means 'to discover' and is built from 'coprire'?",
 opts:["Dipingere","Scoprire","Raccogliere","Nascondere"],
 ans:"Scoprire",
 hint:"The prefix s- reverses the meaning. To cover becomes to un-cover."},

{type:"fb",
 s:"Quanto tempo sei {1} a Roma?",
 a:["rimasto"],
 opts:["rimasto","accaduto","coperto","raccolto"],
 hint:"This is the past participle of 'rimanere' (to stay). It uses essere and agrees with the subject.",
 sSrc:"How long did you {1} in Rome?"},

{type:"mc",
 q:"What does 'raccolta differenziata' mean?",
 opts:["Art collection","Selective memory","Separated waste collection (recycling)","Flower picking"],
 ans:"Separated waste collection (recycling)",
 hint:"'Raccogliere' means to collect. Italy's r... system requires sorting w... into different bins."}
,{type:"match",pairs:[{trg:"accadere",src:"to happen / to occur"},{trg:"scomparire",src:"to disappear / to vanish"},{trg:"rimanere",src:"to remain / to stay"},{trg:"spegnere",src:"to turn off / to extinguish"},{trg:"piangere",src:"to cry / to weep"}]}]};
export default BATCH8_L1;
