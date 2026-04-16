// Batch 6 — Unit 22 extra lesson. La cultura italiana: Italian Proverbs & Sayings
const BATCH6_L1 = {id:"itv2_u22l_b6_1", title:"Proverbi e modi di dire", icon:"\u{1F4AC}", xp:15, board:true, steps:[
{type:"intro", title:"Proverbi e modi di dire",
 desc:"Learn classic Italian proverbs, idiomatic expressions, and their cultural context.",
 goals:["Understand common Italian proverbs","Use idiomatic expressions in context","Appreciate the cultural wisdom behind sayings"]},

{type:"teach", trg:"il proverbio", src:"the proverb / saying", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i proverbi.\nA traditional saying expressing a truth or piece of advice.",
 example:"A: Conosci un proverbio italiano?\nB: Si, 'Chi dorme non piglia pesci!'",
 exampleSrc:"A: Do you know an Italian proverb?\nB: Yes, 'He who sleeps does not catch fish!'",
 funFact:"Italy has thousands of regional proverbs. Many reflect agricultural wisdom, family values, and the importance of food. Each region has its own dialect proverbs too."},

{type:"teach", trg:"sbagliando s'impara", src:"you learn by making mistakes", pos:"intj", gender:null,
 note:"Proverb. Literally: 'making mistakes, one learns.'\nGerund of 'sbagliare' (to make mistakes) + 'imparare.'",
 example:"A: Ho sbagliato di nuovo!\nB: Sbagliando s'impara, non preoccuparti.",
 exampleSrc:"A: I made a mistake again!\nB: You learn by making mistakes, do not worry.",
 funFact:"This is one of Italy's most encouraging proverbs. It is often the first one taught to children and language students alike."},

{type:"teach", trg:"meglio tardi che mai", src:"better late than never", pos:"intj", gender:null,
 note:"Proverb. 'Meglio' (better) + 'tardi' (late) + 'che mai' (than never).\nEncourages action despite delay.",
 example:"A: Scusa il ritardo!\nB: Meglio tardi che mai!",
 exampleSrc:"A: Sorry for being late!\nB: Better late than never!",
 funFact:"This proverb exists in virtually every European language, tracing back to the Latin 'potius sero quam nunquam.' Italians use it with a characteristic shrug."},

{type:"teach", trg:"non tutte le ciambelle riescono col buco", src:"not everything goes as planned", pos:"intj", gender:null,
 note:"Proverb. Literally: 'not all donuts come out with a hole.'\nNot every attempt will be perfect.",
 example:"A: Il dolce non e venuto bene.\nB: Non tutte le ciambelle riescono col buco!",
 exampleSrc:"A: The cake did not turn out well.\nB: Not everything goes as planned!",
 funFact:"This uniquely Italian proverb uses the image of a donut ('ciambella') that fails to have its characteristic hole. It is a gentle way to accept imperfection."},

{type:"teach", trg:"chi cerca trova", src:"he who seeks finds", pos:"intj", gender:null,
 note:"Proverb. 'Chi' (he who) + 'cerca' (seeks) + 'trova' (finds).\nPersistence pays off.",
 example:"A: Non trovo lavoro!\nB: Chi cerca trova. Continua a provarci.",
 exampleSrc:"A: I cannot find a job!\nB: He who seeks finds. Keep trying.",
 funFact:"This proverb echoes the biblical 'seek and you shall find.' Italians often extend it humorously: 'chi cerca trova e chi domanda si sente rispondere' (and who asks gets an answer)."},

{type:"teach", trg:"tra il dire e il fare c'e di mezzo il mare", src:"easier said than done", pos:"intj", gender:null,
 note:"Proverb. Literally: 'between saying and doing, there is the sea.'\nTalking is easy, action is hard.",
 example:"A: Voglio correre una maratona!\nB: Tra il dire e il fare c'e di mezzo il mare.",
 exampleSrc:"A: I want to run a marathon!\nB: Easier said than done.",
 funFact:"The 'sea' in this proverb represents the vast distance between intention and action. As a maritime nation, Italy naturally uses the sea as a metaphor for great obstacles."},

{type:"teach", trg:"il modo di dire", src:"the expression / idiom", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i modi di dire.\n'Modo' (way) + 'di dire' (of saying). An idiomatic phrase.",
 example:"A: 'In bocca al lupo' e un modo di dire italiano.\nB: E cosa si risponde? 'Crepi il lupo!'",
 exampleSrc:"A: 'In the mouth of the wolf' is an Italian expression.\nB: And what do you reply? 'May the wolf die!'",
 funFact:"Italian has hundreds of 'modi di dire.' Many involve animals: 'in bocca al lupo' (good luck), 'essere una volpe' (to be sly), 'avere una fame da lupo' (to be wolf-hungry)."},

{type:"teach", trg:"l'abito non fa il monaco", src:"the habit does not make the monk", pos:"intj", gender:null,
 note:"Proverb. Equivalent to 'do not judge a book by its cover.'\n'Abito' (clothing/habit) + 'monaco' (monk).",
 example:"A: Sembra una persona importante.\nB: L'abito non fa il monaco, ricorda.",
 exampleSrc:"A: He looks like an important person.\nB: The habit does not make the monk, remember.",
 funFact:"This proverb dates to medieval Italy when monks' robes could be worn by anyone. It warns against judging by appearance, a lesson Italians value despite loving fashion."},

{type:"teach", trg:"a caval donato non si guarda in bocca", src:"do not look a gift horse in the mouth", pos:"intj", gender:null,
 note:"Proverb. 'Caval donato' = gifted horse. Accept gifts graciously.\nDo not criticize what you receive for free.",
 example:"A: Il regalo non mi piace molto.\nB: A caval donato non si guarda in bocca!",
 exampleSrc:"A: I do not like the gift very much.\nB: Do not look a gift horse in the mouth!",
 funFact:"Checking a horse's teeth reveals its age and health. This proverb exists in many languages but is used frequently in Italian daily life for any free offer."},

{type:"teach", trg:"ogni lasciata e persa", src:"every missed chance is lost forever", pos:"intj", gender:null,
 note:"Proverb. Literally: 'every thing left behind is lost.'\nEncourages seizing opportunities.",
 example:"A: Non so se accettare il lavoro all'estero.\nB: Ogni lasciata e persa! Provaci.",
 exampleSrc:"A: I do not know if I should accept the job abroad.\nB: Every missed chance is lost! Try it.",
 funFact:"This proverb reflects the Italian attitude toward seizing the moment. It is the opposite of 'chi si accontenta gode,' showing Italian wisdom can argue both sides."},

{type:"teach", trg:"volere e potere", src:"where there's a will, there's a way", pos:"intj", gender:null,
 note:"Proverb. 'Volere' (to want) + 'e' (is) + 'potere' (to be able).\nDetermination conquers obstacles.",
 example:"A: Non ce la faccio!\nB: Volere e potere. Non arrenderti.",
 exampleSrc:"A: I cannot do it!\nB: Where there is a will, there is a way. Do not give up.",
 funFact:"This proverb is one of the most motivational in Italian. It was a favorite of Giuseppe Garibaldi during the Risorgimento, Italy's unification movement."},

{type:"teach", trg:"chi va piano va sano e va lontano", src:"slow and steady wins the race", pos:"intj", gender:null,
 note:"Proverb. Literally: 'who goes slowly goes safely and goes far.'\nPatience and caution lead to success.",
 example:"A: Vuoi finire tutto oggi?\nB: Chi va piano va sano e va lontano.",
 exampleSrc:"A: Do you want to finish everything today?\nB: Slow and steady wins the race.",
 funFact:"This proverb captures Italian wisdom about quality over speed. It is especially used in driving contexts, where Italian roads demand caution despite the reputation for fast driving."},

{type:"teach", trg:"la pratica vale piu della grammatica", src:"practice is worth more than theory", pos:"intj", gender:null,
 note:"Proverb. 'Pratica' (practice) + 'grammatica' (grammar/theory).\nHands-on experience beats book knowledge.",
 example:"A: Ho letto tutti i libri di cucina.\nB: La pratica vale piu della grammatica. Cucina!",
 exampleSrc:"A: I have read all the cookbooks.\nB: Practice is worth more than theory. Cook!",
 funFact:"This proverb is perfect for language learning. Italians value practical skill over theoretical knowledge. 'Grammatica' here means abstract rules, not just grammar."},

{type:"teach", trg:"ride bene chi ride ultimo", src:"he who laughs last laughs best", pos:"intj", gender:null,
 note:"Proverb. 'Ridere' (to laugh) + 'bene' (well) + 'ultimo' (last).\nThe final outcome matters most.",
 example:"A: Pensavano che non ce l'avrei fatta.\nB: Ride bene chi ride ultimo!",
 exampleSrc:"A: They thought I would not make it.\nB: He who laughs last laughs best!",
 funFact:"Italians love this proverb for its dramatic flair. It is used after proving doubters wrong, delivered with a knowing smile and perhaps a gesture."},

{type:"mc", q:"Cosa significa 'Tra il dire e il fare c'e di mezzo il mare'?",
 opts:["Easier said than done","The sea is between us","Talking is more important","I prefer the sea"],
 ans:"Easier said than done",
 hint:"The 'sea' represents the vast gap between talking about something and actually doing it."},

{type:"fb", s:"{1} s'impara. Non avere paura di sbagliare.", a:["Sbagliando"],
 opts:["Sbagliando","Cercando","Ridendo","Volendo"],
 hint:"The gerund of 'sbagliare' (to make mistakes). You learn through errors.",
 sSrc:"You learn by {1}. Do not be afraid to make mistakes."},

{type:"match", pairs:[
 {trg:"chi cerca trova", src:"he who seeks finds"},
 {trg:"volere e potere", src:"where there's a will..."},
 {trg:"meglio tardi che mai", src:"better late than never"},
 {trg:"ride bene chi ride ultimo", src:"he who laughs last..."}
]},

{type:"mc", q:"Quale proverbio dice di non giudicare dalle apparenze?",
 opts:["L'abito non fa il monaco","Chi cerca trova","Volere e potere","Chi va piano va lontano"],
 ans:"L'abito non fa il monaco",
 hint:"About monks and their clothing. Do not judge by what someone wears."},

{type:"fb", s:"Ogni {1} e persa. Cogli l'opportunita!", a:["lasciata"],
 opts:["lasciata","cercata","trovata","riduta"],
 hint:"The past participle of 'lasciare' (to leave). Every missed chance is gone forever.",
 sSrc:"Every missed {1} is lost. Seize the opportunity!"},

{type:"mc", q:"Cosa rispondi se qualcuno ti dice 'In bocca al lupo!'?",
 opts:["Crepi il lupo!","Grazie!","Anche a te!","Buona fortuna!"],
 ans:"Crepi il lupo!",
 hint:"The traditional Italian response. Literally: 'May the wolf die!'"},

{type:"fb", s:"La {1} vale piu della grammatica. Devi provare!", a:["pratica"],
 opts:["pratica","teoria","scuola","lezione"],
 hint:"Hands-on experience. This proverb says doing beats studying about doing.",
 sSrc:"{1} is worth more than theory. You have to try!"},

{type:"match", pairs:[
 {trg:"il proverbio", src:"proverb"},
 {trg:"il modo di dire", src:"idiom"},
 {trg:"chi va piano va lontano", src:"slow and steady wins"},
 {trg:"a caval donato...", src:"don't look a gift horse..."}
]}
]};
export default BATCH6_L1;
