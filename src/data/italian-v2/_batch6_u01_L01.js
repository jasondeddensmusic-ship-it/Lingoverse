// Batch 6. Unit 01 extra lesson. Greetings & Basics: At the Post Office & Police
const BATCH6_L1 = {id:"itv2_u01l_b6_1", title:"All'ufficio postale", icon:"\u{1F4EE}", xp:15, board:true, steps:[
{type:"intro", title:"All'ufficio postale",
 desc:"Learn essential words for the post office, asking for directions, and basic polite requests in everyday situations.",
 goals:["Ask for stamps and send packages","Use polite request forms","Handle basic transactions"]},

{type:"teach", trg:"la busta", src:"the envelope", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le buste.\nAlso used for 'pay envelope' (busta paga).",
 example:"A: Mi serve una busta grande.\nB: Ecco, questa va bene?",
 exampleSrc:"A: I need a large envelope.\nB: Here, is this one fine?",
 funFact:"'Busta' comes from the French 'buste,' originally a container. The expression 'busta paga' (pay envelope) is how many Italians still refer to their paycheck."},

{type:"teach", trg:"il francobollo", src:"the stamp", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i francobolli.\nA compound: franco (free/postage) + bollo (seal).",
 example:"A: Quanto costa un francobollo per l'Europa?\nB: Un euro e venti.",
 exampleSrc:"A: How much does a stamp cost for Europe?\nB: One euro and twenty cents.",
 funFact:"The first Italian stamp was issued in 1850 by the Kingdom of Lombardy-Venetia, when Italy was still a patchwork of separate states."},

{type:"teach", trg:"spedire", src:"to send / to ship", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: spedisco, spedisci, spedisce.\nUsed for mail, packages, and documents.",
 example:"A: Devo spedire questo pacco in America.\nB: Ci vogliono circa dieci giorni.",
 exampleSrc:"A: I need to send this package to America.\nB: It takes about ten days.",
 funFact:"Latin 'expedire' meant 'to free the feet' (ex + pes). The idea of removing obstacles evolved into sending things on their way."},

{type:"teach", trg:"il pacco", src:"the package / parcel", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pacchi.\nAlso used in 'pacco regalo' (gift package).",
 example:"A: Il pacco e arrivato?\nB: Si, e alla reception.",
 exampleSrc:"A: Has the package arrived?\nB: Yes, it is at the reception.",
 funFact:"In colloquial Italian, 'pacco' can also mean a scam or a disappointment. 'Mi hanno fatto un pacco!' means 'They tricked me!'"},

{type:"teach", trg:"la cartolina", src:"the postcard", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le cartoline.\nDiminutive of 'carta' (paper).",
 example:"A: Mando una cartolina ai miei genitori.\nB: Che bella idea!",
 exampleSrc:"A: I am sending a postcard to my parents.\nB: What a nice idea!",
 funFact:"Italy is one of the top producers of artistic postcards. The tradition of 'cartoline illustrate' began in the 1890s and became an art form."},

{type:"teach", trg:"firmare", src:"to sign", pos:"verb", gender:null,
 note:"Regular -are verb. firmo, firmi, firma.\nUsed for documents, contracts, receipts.",
 example:"A: Dove devo firmare?\nB: Qui in basso, per favore.",
 exampleSrc:"A: Where do I need to sign?\nB: Here at the bottom, please.",
 funFact:"From Latin 'firmare' meaning 'to make firm.' The same root gives English 'firm' and 'confirm.'"},

{type:"teach", trg:"il modulo", src:"the form (document)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i moduli.\nUsed for official paperwork and applications.",
 example:"A: Devo compilare questo modulo?\nB: Si, per favore. Nome e indirizzo.",
 exampleSrc:"A: Do I need to fill out this form?\nB: Yes, please. Name and address.",
 funFact:"From Latin 'modulus' (small measure). Italians fill out moduli for everything from the post office to the doctor."},

{type:"teach", trg:"compilare", src:"to fill out / to complete", pos:"verb", gender:null,
 note:"Regular -are verb. compilo, compili, compila.\nUsed with forms, surveys, and questionnaires.",
 example:"A: Puoi compilare il modulo in stampatello?\nB: Certo, lo faccio subito.",
 exampleSrc:"A: Can you fill out the form in block letters?\nB: Of course, I will do it right away.",
 funFact:"Unlike English 'compile,' Italian 'compilare' most commonly means filling in a form. The programming sense exists but is much rarer in daily life."},

{type:"teach", trg:"la ricevuta", src:"the receipt", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ricevute.\nFrom 'ricevere' (to receive).",
 example:"A: Posso avere la ricevuta?\nB: Ecco la ricevuta. Buona giornata!",
 exampleSrc:"A: May I have the receipt?\nB: Here is the receipt. Have a nice day!",
 funFact:"In Italy, the 'scontrino fiscale' (fiscal receipt) is legally required. Tax police can fine customers caught without one outside a shop."},

{type:"teach", trg:"pesare", src:"to weigh", pos:"verb", gender:null,
 note:"Regular -are verb. peso, pesi, pesa.\nFrom 'peso' (weight).",
 example:"A: Posso pesare questo pacco?\nB: Si, pesa due chili.",
 exampleSrc:"A: Can I weigh this package?\nB: Yes, it weighs two kilos.",
 funFact:"The Italian system uses kilograms exclusively. When Italians hear 'pounds' they think of the old currency (lira), not weight."},

{type:"teach", trg:"la bilancia", src:"the scale / balance", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le bilance.\nAlso the zodiac sign Libra.",
 example:"A: Metti il pacco sulla bilancia.\nB: Pesa tre chili e mezzo.",
 exampleSrc:"A: Put the package on the scale.\nB: It weighs three and a half kilos.",
 funFact:"The symbol of justice holding a bilancia comes from Roman mythology. 'Bilancia' is also the Italian word for the Libra constellation."},

{type:"teach", trg:"lo sportello", src:"the counter / window", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli sportelli.\nThe service window at banks, post offices, etc.",
 example:"A: A quale sportello devo andare?\nB: Allo sportello numero tre.",
 exampleSrc:"A: Which counter should I go to?\nB: To counter number three.",
 funFact:"Literally a 'small door' (from 'porta'). In modern Italian, 'sportello automatico' means ATM."},

{type:"teach", trg:"la coda", src:"the queue / line", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le code.\nAlso means 'tail' (of an animal).",
 example:"A: C'e molta coda oggi.\nB: Si, dobbiamo aspettare.",
 exampleSrc:"A: There is a long line today.\nB: Yes, we have to wait.",
 funFact:"'Fare la coda' (to queue up) literally means 'to make a tail.' Italian queuing culture is famously relaxed compared to the British tradition."},

{type:"teach", trg:"aspettare", src:"to wait (for)", pos:"verb", gender:null,
 note:"Regular -are verb. aspetto, aspetti, aspetta.\nNo preposition needed: aspetto te (I wait for you).",
 example:"A: Aspetti da molto?\nB: Si, aspetto da venti minuti.",
 exampleSrc:"A: Have you been waiting long?\nB: Yes, I have been waiting for twenty minutes.",
 funFact:"Unlike English, 'aspettare' does not need 'for.' 'Aspettare qualcuno' directly means 'to wait for someone.' Related to 'aspettativa' (expectation)."},

{type:"mc", q:"Come si dice 'stamp' in italiano?",
 opts:["il francobollo","la cartolina","la busta","il modulo"],
 ans:"il francobollo",
 hint:"A compound word meaning 'postage seal.' Used on letters and packages."},

{type:"fb", s:"Devo {1} questo modulo con i miei dati.", a:["compilare"],
 opts:["compilare","firmare","pesare","spedire"],
 hint:"To fill out a form with your information, not to sign it.",
 sSrc:"I need to {1} this form with my details."},

{type:"mc", q:"Cosa usi per spedire una lettera?",
 opts:["una cartolina e uno sportello","una busta e un francobollo","una bilancia e una coda","un modulo e una ricevuta"],
 ans:"una busta e un francobollo",
 hint:"You need something to put the letter in and something to stick on it."},

{type:"match", pairs:[
 {trg:"la busta", src:"envelope"},
 {trg:"il pacco", src:"package"},
 {trg:"la ricevuta", src:"receipt"},
 {trg:"lo sportello", src:"counter"}
]},

{type:"fb", s:"Metti il pacco sulla {1} per sapere il peso.", a:["bilancia"],
 opts:["bilancia","coda","busta","cartolina"],
 hint:"The device used to measure weight at the post office.",
 sSrc:"Put the package on the {1} to find out the weight."},

{type:"mc", q:"Qual e il significato di 'aspettare'?",
 opts:["to sign","to fill out","to wait","to send"],
 ans:"to wait",
 hint:"What you do when the line at the post office is long."},

{type:"fb", s:"Dove devo {1}? Qui in basso?", a:["firmare"],
 opts:["firmare","compilare","pesare","spedire"],
 hint:"To put your signature on a document.",
 sSrc:"Where do I need to {1}? Here at the bottom?"},

{type:"match", pairs:[
 {trg:"spedire", src:"to send"},
 {trg:"pesare", src:"to weigh"},
 {trg:"firmare", src:"to sign"},
 {trg:"compilare", src:"to fill out"}
]}
,{type:"match",pairs:[{trg:"aspettare",src:"to wait (for)"}]}]};
export default BATCH6_L1;
