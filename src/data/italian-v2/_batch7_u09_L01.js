// Batch 7 — Unit 09 extra lesson. Il corpo e la salute: Exercise & Fitness
const BATCH7_L1 = {id:"itv2_u09l_b7_1", title:"L'esercizio fisico", icon:"\u{1F3CB}\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"L'esercizio fisico",
 desc:"Learn vocabulary for exercise, fitness routines, and describing physical activities.",
 goals:["Describe exercise and fitness activities","Talk about body movements","Express how you feel after exercise"]},

{type:"teach", trg:"l'esercizio", src:"the exercise", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli esercizi.\n'Fare esercizio' = to exercise. 'Esercizio fisico' = physical exercise.",
 example:"A: Fai esercizio ogni giorno?\nB: Cerco di fare almeno trenta minuti.",
 exampleSrc:"A: Do you exercise every day?\nB: I try to do at least thirty minutes.",
 funFact:"'Esercizio' means both exercise and business/shop (esercizio commerciale). Context always makes the meaning clear."},

{type:"teach", trg:"la corsa", src:"the run / running", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le corse.\n'Fare una corsa' = to go for a run. Also means 'race.'",
 example:"A: Vado a fare una corsa al parco.\nB: Quanto corri di solito?",
 exampleSrc:"A: I am going for a run in the park.\nB: How far do you usually run?",
 funFact:"'Di corsa' means 'in a hurry.' 'Faccio tutto di corsa' = I do everything in a rush. Italians use this daily, usually when they are late (which is often)."},

{type:"teach", trg:"sudare", src:"to sweat", pos:"verb", gender:null,
 note:"Regular -are verb. sudo, sudi, suda.\n'Il sudore' = sweat (noun).",
 example:"A: Sudo molto quando corro.\nB: E normale, bevi molta acqua.",
 exampleSrc:"A: I sweat a lot when I run.\nB: It is normal, drink plenty of water.",
 funFact:"'Sudare sette camicie' (to sweat seven shirts) means to work incredibly hard at something. An expressive Italian hyperbole for extreme effort."},

{type:"teach", trg:"il muscolo", src:"the muscle", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i muscoli.\nFrom Latin 'musculus' (little mouse).",
 example:"A: Mi fanno male i muscoli dopo la palestra.\nB: Devi fare stretching.",
 exampleSrc:"A: My muscles hurt after the gym.\nB: You need to stretch.",
 funFact:"The Latin 'musculus' literally means 'little mouse' because the Romans thought a flexing muscle looked like a mouse moving under the skin."},

{type:"teach", trg:"lo stretching", src:"stretching", pos:"noun", gender:"m",
 note:"Masculine noun. Borrowed from English. Invariable.\n'Fare stretching' = to stretch.",
 example:"A: Fai stretching prima di correre?\nB: Sempre, per evitare infortuni.",
 exampleSrc:"A: Do you stretch before running?\nB: Always, to avoid injuries.",
 funFact:"Despite having native alternatives like 'allungamento' (stretching), Italians overwhelmingly use the English word 'stretching' in fitness contexts."},

{type:"teach", trg:"il fiato", src:"breath / stamina", pos:"noun", gender:"m",
 note:"Masculine noun. 'Senza fiato' = breathless.\n'Avere il fiato corto' = to be short of breath.",
 example:"A: Sono senza fiato dopo le scale!\nB: Devi fare piu esercizio.",
 exampleSrc:"A: I am breathless after the stairs!\nB: You need to exercise more.",
 funFact:"'Mozzafiato' (breathtaking) is literally 'breath-cutting.' 'Un panorama mozzafiato' is a view so beautiful it takes your breath away. Used constantly in tourism."},

{type:"teach", trg:"il ginocchio", src:"the knee", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: le ginocchia (feminine!).\nOne of the few Italian nouns that changes gender in plural.",
 example:"A: Mi fa male il ginocchio.\nB: Forse dovresti riposare.",
 exampleSrc:"A: My knee hurts.\nB: Maybe you should rest.",
 funFact:"'Il ginocchio' is masculine singular, but 'le ginocchia' is feminine plural. This gender-switching also happens with 'il braccio/le braccia' and 'il dito/le dita.'"},

{type:"teach", trg:"la spalla", src:"the shoulder", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le spalle.\n'Alzare le spalle' = to shrug.",
 example:"A: Mi fa male la spalla destra.\nB: Hai fatto troppi pesi.",
 exampleSrc:"A: My right shoulder hurts.\nB: You did too many weights.",
 funFact:"'Avere le spalle larghe' (to have broad shoulders) means to be able to handle problems. 'Avere qualcuno alle spalle' means someone is behind you (watching or following)."},

{type:"teach", trg:"il polso", src:"the wrist", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i polsi.\nAlso means 'pulse' (heartbeat at the wrist).",
 example:"A: Mi sono fatto male al polso.\nB: Metti del ghiaccio.",
 exampleSrc:"A: I hurt my wrist.\nB: Put some ice on it.",
 funFact:"'Polso' means both wrist and pulse. A doctor 'sente il polso' (feels the pulse). 'Avere polso' means to have authority or a firm hand."},

{type:"teach", trg:"la caviglia", src:"the ankle", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le caviglie.\n'Distorsione alla caviglia' = sprained ankle.",
 example:"A: Mi sono storto la caviglia.\nB: Riesci a camminare?",
 exampleSrc:"A: I twisted my ankle.\nB: Can you walk?",
 funFact:"Ankle injuries are among the most common sports injuries in Italy. 'Distorsione' (sprain) is the medical term, while 'storta' is the colloquial one."},

{type:"teach", trg:"il petto", src:"the chest", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i petti.\n'Petto di pollo' = chicken breast.",
 example:"A: Oggi alleno petto e spalle.\nB: Io faccio gambe e glutei.",
 exampleSrc:"A: Today I am training chest and shoulders.\nB: I am doing legs and glutes.",
 funFact:"'Battere il pugno sul petto' (to beat your fist on your chest) means to take a stand. 'Petto' also appears in cooking: 'petto di pollo' (chicken breast) and 'petto d'anatra' (duck breast)."},

{type:"teach", trg:"la schiena", src:"the back", pos:"noun", gender:"f",
 note:"Feminine noun. 'Mal di schiena' = backache.\nOne of the most common health complaints in Italy.",
 example:"A: Ho mal di schiena oggi.\nB: Prova a fare stretching.",
 exampleSrc:"A: I have a backache today.\nB: Try doing some stretching.",
 funFact:"'Mal di schiena' (backache) is Italy's most common workplace complaint. 'Avere le spalle al muro' (to have your back to the wall) means to be in a desperate situation."},

{type:"teach", trg:"la salute", src:"health", pos:"noun", gender:"f",
 note:"Feminine noun. 'Alla salute!' = Cheers! (toasting).\n'In salute' = in good health.",
 example:"A: La salute e la cosa piu importante.\nB: Hai ragione, senza salute non c'e niente.",
 exampleSrc:"A: Health is the most important thing.\nB: You are right, without health there is nothing.",
 funFact:"'Salute!' is said when someone sneezes (like 'bless you') and also as a toast. It comes from Latin 'salus' (health/salvation), the root of 'salutation' and 'salute.'"},

{type:"teach", trg:"in forma", src:"in shape / fit", pos:"adj", gender:null,
 note:"Adjective phrase. Invariable.\n'Essere in forma' = to be fit. 'Tenersi in forma' = to stay fit.",
 example:"A: Sei molto in forma!\nB: Grazie, vado in palestra tre volte alla settimana.",
 exampleSrc:"A: You are very fit!\nB: Thanks, I go to the gym three times a week.",
 funFact:"'Forma' means both shape and form. 'In forma' for fitness, 'forma di formaggio' for a wheel of cheese. The connection? Both are about having good shape."},

{type:"mc", q:"Che cosa significa 'mozzafiato'?",
 opts:["breathtaking","exhausting","boring","relaxing"],
 ans:"breathtaking",
 hint:"Literally 'breath-cutting.' Used for something so beautiful it takes your breath away."},

{type:"fb", s:"Mi fanno male i {1} dopo la palestra.", a:["muscoli"],
 opts:["muscoli","fiati","polsi","ginocchi"],
 hint:"The body parts that get sore after lifting weights or exercising.",
 sSrc:"My {1} hurt after the gym."},

{type:"match", pairs:[
 {trg:"il ginocchio", src:"knee"},
 {trg:"la spalla", src:"shoulder"},
 {trg:"il polso", src:"wrist"},
 {trg:"la caviglia", src:"ankle"}
]},

{type:"mc", q:"Quale parola italiana cambia genere al plurale?",
 opts:["il ginocchio (le ginocchia)","il muscolo (i muscoli)","la spalla (le spalle)","il polso (i polsi)"],
 ans:"il ginocchio (le ginocchia)",
 hint:"This body part is masculine singular but becomes feminine plural. Ends in -a."},

{type:"fb", s:"Sono senza {1} dopo le scale!", a:["fiato"],
 opts:["fiato","muscolo","petto","forma"],
 hint:"When you cannot catch your breath. 'Senza...' means without this.",
 sSrc:"I am breathless after the stairs!"},

{type:"mc", q:"Che cosa significa 'essere in forma'?",
 opts:["to be fit / in shape","to be sick","to be tired","to be hungry"],
 ans:"to be fit / in shape",
 hint:"When your body is healthy and strong from regular exercise."},

{type:"fb", s:"Fai {1} prima di correre?", a:["stretching"],
 opts:["stretching","esercizio","corsa","fiato"],
 hint:"An English word Italians use for the activity of lengthening your muscles.",
 sSrc:"Do you {1} before running?"},

{type:"match", pairs:[
 {trg:"il petto", src:"chest"},
 {trg:"la schiena", src:"back"},
 {trg:"la salute", src:"health"},
 {trg:"sudare", src:"to sweat"}
]}
]};
export default BATCH7_L1;
