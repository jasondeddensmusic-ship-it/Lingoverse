// Batch 7. Unit 19 extra lesson. I sentimenti: Social Interactions & Conflict
const BATCH7_L1 = {id:"itv2_u19l_b7_1", title:"Interazioni sociali", icon:"\u{1F91D}", xp:15, board:true, steps:[
{type:"intro", title:"Interazioni sociali",
 desc:"Learn vocabulary for social interactions, resolving conflicts, and expressing agreement or disagreement.",
 goals:["Express agreement and disagreement politely","Handle social conflicts","Use diplomatic language in conversations"]},

{type:"teach", trg:"essere d'accordo", src:"to agree", pos:"verb", gender:null,
 note:"Verb phrase. 'Sono d'accordo' = I agree.\n'Non sono d'accordo' = I disagree.",
 example:"A: Pensi che dovremmo partire presto?\nB: Sono d'accordo, partiamo alle sette.",
 exampleSrc:"A: Do you think we should leave early?\nB: I agree, let us leave at seven.",
 funFact:"'D'accordo' literally means 'of accord.' Italians use this constantly: 'siamo d'accordo?' (are we in agreement?) is how you confirm plans, deals, and decisions."},

{type:"teach", trg:"il compromesso", src:"the compromise", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i compromessi.\n'Raggiungere un compromesso' = to reach a compromise.",
 example:"A: Dobbiamo trovare un compromesso.\nB: Propongo di dividerci i compiti.",
 exampleSrc:"A: We need to find a compromise.\nB: I propose we split the tasks.",
 funFact:"Italian politics runs on 'compromessi.' The 'compromesso storico' (historic compromise) was a famous 1970s attempt to bridge the gap between Christian Democrats and Communists."},

{type:"teach", trg:"il malinteso", src:"the misunderstanding", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i malintesi.\nLiterally: 'badly understood.' 'Chiarire un malinteso' = to clear up a misunderstanding.",
 example:"A: C'e stato un malinteso.\nB: Chiariamo subito, non voglio problemi.",
 exampleSrc:"A: There was a misunderstanding.\nB: Let us clear it up right away, I do not want problems.",
 funFact:"'Malinteso' is a diplomatic word. Italian culture values 'chiarire' (clearing things up) face to face. Leaving a malinteso unresolved is considered worse than the original problem."},

{type:"teach", trg:"scusarsi", src:"to apologize", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi scuso, ti scusi, si scusa.\n'Le porgo le mie scuse' = formal apology.",
 example:"A: Mi scuso per il ritardo.\nB: Non ti preoccupare, capita a tutti.",
 exampleSrc:"A: I apologize for being late.\nB: Do not worry, it happens to everyone.",
 funFact:"Italian has layers of apology: 'scusa' (informal), 'mi scusi' (formal), 'chiedo scusa' (I ask forgiveness), 'le porgo le mie scuse' (I extend my apologies). Each fits a different situation."},

{type:"teach", trg:"perdonare", src:"to forgive", pos:"verb", gender:null,
 note:"Regular -are verb. perdono, perdoni, perdona.\n'Il perdono' = forgiveness.",
 example:"A: Mi perdoni per quello che ho detto?\nB: Certo, ti perdono. Non ci pensare.",
 exampleSrc:"A: Do you forgive me for what I said?\nB: Of course, I forgive you. Do not think about it.",
 funFact:"'Perdonare' comes from Latin 'per + donare' (to give completely). Forgiveness is literally a complete gift. In Italian culture, holding grudges is considered exhausting and pointless."},

{type:"teach", trg:"litigare", src:"to argue / to quarrel", pos:"verb", gender:null,
 note:"Regular -are verb. litigo, litighi, litiga.\n'Il litigio' = the argument/quarrel.",
 example:"A: Hanno litigato per una sciocchezza.\nB: Capita, domani faranno pace.",
 exampleSrc:"A: They argued over a silly thing.\nB: It happens, tomorrow they will make up.",
 funFact:"Italians are famously expressive during arguments. Loud voices and dramatic gestures do not necessarily mean real anger. 'Litigare' is sometimes just passionate discussion."},

{type:"teach", trg:"fare pace", src:"to make up / to reconcile", pos:"verb", gender:null,
 note:"Verb phrase. 'Abbiamo fatto pace' = we made up.\nThe opposite of 'litigare.'",
 example:"A: Avete fatto pace?\nB: Si, ci siamo abbracciati e tutto e a posto.",
 exampleSrc:"A: Did you make up?\nB: Yes, we hugged and everything is fine.",
 funFact:"'Fare pace' is a valued social skill in Italy. Children are taught to 'fare pace' immediately after playground conflicts. Adults value the ability to reconcile over holding grudges."},

{type:"teach", trg:"la fiducia", src:"trust / confidence", pos:"noun", gender:"f",
 note:"Feminine noun. 'Avere fiducia' = to trust.\n'Fidarsi di' = to trust someone.",
 example:"A: Ho fiducia in te.\nB: Grazie, non ti deludero.",
 exampleSrc:"A: I trust you.\nB: Thank you, I will not disappoint you.",
 funFact:"'Fiducia' is central to Italian relationships. In politics, a 'voto di fiducia' (vote of confidence) can make or break a government. In friendship, 'fidarsi' is the ultimate bond."},

{type:"teach", trg:"il pettegolezzo", src:"gossip", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pettegolezzi.\n'Pettegolare' = to gossip. 'Pettegolo' = gossipy.",
 example:"A: Non mi piacciono i pettegolezzi.\nB: Neanche a me, ma la gente parla.",
 exampleSrc:"A: I do not like gossip.\nB: Neither do I, but people talk.",
 funFact:"Italian culture has a love-hate relationship with 'pettegolezzi.' While officially frowned upon, gossip is a social lubricant. Gossip magazines ('riviste di gossip') are bestsellers."},

{type:"teach", trg:"il consiglio", src:"the advice / council", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i consigli.\n'Dare un consiglio' = to give advice. 'Consigliare' = to advise.",
 example:"A: Posso darti un consiglio?\nB: Certo, ti ascolto.",
 exampleSrc:"A: May I give you some advice?\nB: Of course, I am listening.",
 funFact:"'Consiglio' means both advice and council (e.g., 'Consiglio dei Ministri' = Council of Ministers). Italians love giving 'consigli,' especially about food, health, and relationships."},

{type:"teach", trg:"il rispetto", src:"respect", pos:"noun", gender:"m",
 note:"Masculine noun. 'Rispettare' = to respect.\n'Con tutto il rispetto' = with all due respect.",
 example:"A: Il rispetto reciproco e fondamentale.\nB: Sono completamente d'accordo.",
 exampleSrc:"A: Mutual respect is fundamental.\nB: I completely agree.",
 funFact:"'Rispetto' is a core Italian value, especially toward elders. The 'Lei' form exists specifically to show linguistic respect. Using 'tu' with someone you should 'dare del Lei' is a social faux pas."},

{type:"teach", trg:"la cortesia", src:"courtesy / politeness", pos:"noun", gender:"f",
 note:"Feminine noun. 'Per cortesia' = please (formal).\n'Cortese' = polite/kind.",
 example:"A: La cortesia non costa niente.\nB: E apre molte porte!",
 exampleSrc:"A: Courtesy costs nothing.\nB: And it opens many doors!",
 funFact:"Italian etiquette values 'cortesia' highly. A simple 'buongiorno' to shopkeepers, 'permesso' when entering, and 'grazie mille' when leaving are expected social courtesies."},

{type:"teach", trg:"il rancore", src:"resentment / grudge", pos:"noun", gender:"m",
 note:"Masculine noun. 'Portare rancore' = to hold a grudge.\n'Senza rancore' = no hard feelings.",
 example:"A: Non porto rancore per quello che è successo.\nB: Sono contento, guardiamo avanti.",
 exampleSrc:"A: I do not hold a grudge for what happened.\nB: I am glad, let us look forward.",
 funFact:"'Senza rancore?' (no hard feelings?) is said after conflicts are resolved. In Italian, letting go of 'rancore' is seen as a sign of strength, not weakness."},

{type:"mc", q:"Come si dice 'I agree' in italiano?",
 opts:["Sono d'accordo","Ho fiducia","Mi scuso","Faccio pace"],
 ans:"Sono d'accordo",
 hint:"Literally 'I am of accord.' The standard way to express agreement."},

{type:"fb", s:"C'e stato un {1}, chiariamo subito.", a:["malinteso"],
 opts:["malinteso","compromesso","pettegolezzo","consiglio"],
 hint:"When someone understood something incorrectly. A miscommunication.",
 sSrc:"There was a {1}, let us clear it up right away."},

{type:"match", pairs:[
 {trg:"litigare", src:"to argue"},
 {trg:"fare pace", src:"to make up"},
 {trg:"perdonare", src:"to forgive"},
 {trg:"scusarsi", src:"to apologize"}
]},

{type:"mc", q:"Che cosa significa 'senza rancore'?",
 opts:["No compromise","No hard feelings","Without respect","Without trust"],
 ans:"No hard feelings",
 hint:"Said after a conflict is resolved. It means not holding a grudge."},

{type:"fb", s:"Ho {1} in te, non mi deludere.", a:["fiducia"],
 opts:["fiducia","cortesia","rancore","consiglio"],
 hint:"The feeling of trusting someone. Believing they will do the right thing.",
 sSrc:"I {1} you, do not disappoint me."},

{type:"mc", q:"Come dicono i bambini italiani dopo un litigio?",
 opts:["Porto rancore","Non sono d'accordo","Facciamo pace","Mi dispiace molto"],
 ans:"Facciamo pace",
 hint:"Two words meaning 'let us reconcile.' Taught from the playground."},

{type:"fb", s:"La {1} non costa niente e apre molte porte.", a:["cortesia"],
 opts:["cortesia","fiducia","pace","scusa"],
 hint:"Being polite and kind to others. A valued Italian social skill.",
 sSrc:"{1} costs nothing and opens many doors."},

{type:"match", pairs:[
 {trg:"la fiducia", src:"trust"},
 {trg:"il rispetto", src:"respect"},
 {trg:"il compromesso", src:"compromise"},
 {trg:"il pettegolezzo", src:"gossip"}
]}
,{type:"match",pairs:[{trg:"il consiglio",src:"the advice / council"},{trg:"il rancore",src:"resentment / grudge"}]},{type:"mc",q:"How do you say \"to agree\" in Italian?",opts:["il tavolo","la bicicletta","la finestra","essere d'accordo"],ans:"essere d'accordo",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
