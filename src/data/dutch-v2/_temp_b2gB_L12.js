// Dutch B2 gapB Lesson 12 — Gezondheid en Lichaam
// Health, body, and medical vocabulary

const LESSON_12 = {id:"nlv2_b2gB_l12", title:"Gezondheid en Lichaam", icon:"\u{1F3E5}", xp:25, board:true, steps:[
{type:"intro", title:"Gezondheid en Lichaam",
 desc:"Health vocabulary goes beyond basic doctor visits. Learn words for discussing medical conditions, health organizations, and the Dutch approach to wellness.",
 goals:["8 health and body nouns","Discuss medical and wellness topics","Understand Dutch healthcare vocabulary"]},

{type:"teach", trg:"de acne", src:"acne", pos:"noun", gender:"c",
 note:"Same word as English, common in Dutch.\n'Puistjes' = pimples (informal).",
 example:"A: Veel tieners hebben last van acne.\nB: Is daar iets aan te doen?\nA: Ja, een goede huidverzorging helpt.\nB: En soms schrijft de huisarts iets voor.",
 exampleSrc:"A: Many teenagers suffer from acne.\nB: Can anything be done about it?\nA: Yes, good skincare helps.\nB: And sometimes the GP prescribes something.",
 funFact:"The Dutch healthcare system starts with the huisarts (GP) who acts as gatekeeper. You cannot see a specialist without a referral."},

{type:"teach", trg:"de knokkel", src:"knuckle", pos:"noun", gender:"c",
 note:"Part of the finger joint.\n'Op je knokkels tikken' = to rap someone's knuckles (reprimand).",
 example:"A: Ik heb mijn knokkel gestoten.\nB: Au, laat eens zien.\nA: Het is al dik en blauw.\nB: Doe er maar ijs op.",
 exampleSrc:"A: I banged my knuckle.\nB: Ouch, let me see.\nA: It's already swollen and bruised.\nB: Put some ice on it.",
 funFact:"The expression 'op de knokkels tikken' (to rap someone's knuckles) comes from old school discipline and means to reprimand someone."},

{type:"teach", trg:"de koortsaanval", src:"fever attack / bout of fever", pos:"noun", gender:"c",
 note:"Koorts (fever) + aanval (attack).\nA sudden episode of high fever.",
 example:"A: Het kind had een hevige koortsaanval.\nB: Hoe hoog was de koorts?\nA: Bijna veertig graden.\nB: Bel dan direct de huisarts.",
 exampleSrc:"A: The child had a severe fever attack.\nB: How high was the fever?\nA: Almost forty degrees.\nA: Then call the GP right away.",
 funFact:"Dutch parents are famously pragmatic about children's fevers. The GP often advises 'paracetamol en afwachten' (paracetamol and wait)."},

{type:"teach", trg:"het inslaapprobleem", src:"trouble falling asleep", pos:"noun", gender:"n",
 note:"Inslaap (falling asleep) + probleem.\n'Inslaapstoornissen' = sleep onset disorders.",
 example:"A: Ik heb last van inslaapproblemen.\nB: Hoe lang al?\nA: Al een paar weken.\nB: Misschien helpt het om minder schermtijd te hebben.",
 exampleSrc:"A: I have trouble falling asleep.\nB: How long already?\nA: A few weeks now.\nB: Maybe having less screen time would help.",
 funFact:"The Dutch sleep an average of 7 hours and 12 minutes per night, slightly below the European average."},

{type:"teach", trg:"de hartstichting", src:"heart foundation", pos:"noun", gender:"c",
 note:"Hart (heart) + stichting (foundation).\nA charity focused on cardiovascular health.",
 example:"A: De Hartstichting doet belangrijk onderzoek.\nB: Ja, hart- en vaatziekten zijn doodnummer een.\nA: Ik doe elk jaar mee aan de collecte.\nB: Goed van je, elke euro telt.",
 exampleSrc:"A: The Heart Foundation does important research.\nB: Yes, cardiovascular diseases are the number one killer.\nA: I participate in the collection every year.\nB: Good for you, every euro counts.",
 funFact:"The Nederlandse Hartstichting runs an annual 'collecteweek' where volunteers go door-to-door collecting donations, a very Dutch tradition."},

{type:"teach", trg:"de korrel", src:"grain / granule / pellet", pos:"noun", gender:"c",
 note:"A small particle. 'Een korrel zout' = a grain of salt.\n'Met een korreltje zout nemen' = to take with a grain of salt.",
 example:"A: Neem dat verhaal met een korreltje zout.\nB: Denk je dat het niet klopt?\nA: Ik vertrouw die bron niet helemaal.\nB: Je hebt gelijk, laten we het checken.",
 exampleSrc:"A: Take that story with a grain of salt.\nB: You think it's not accurate?\nA: I don't fully trust that source.\nB: You're right, let's check it.",
 funFact:"The Dutch expression 'met een korreltje zout nemen' is identical to the English idiom, both coming from Latin 'cum grano salis'."},

{type:"teach", trg:"de gokker", src:"gambler", pos:"noun", gender:"c",
 note:"From 'gokken' (to gamble).\n'Gokverslaafd' = addicted to gambling.",
 example:"A: Hij is een verstokte gokker.\nB: In het casino of online?\nA: Allebei, helaas.\nB: Gokverslaving is een serieus probleem.",
 exampleSrc:"A: He's a hardened gambler.\nB: At the casino or online?\nA: Both, unfortunately.\nB: Gambling addiction is a serious problem.",
 funFact:"Holland Casino is the only legal casino operator in the Netherlands, though online gambling was legalized in 2021."},

{type:"teach", trg:"knus", src:"cozy / snug", pos:"adj", gender:null,
 note:"Similar to 'gezellig' but more about physical comfort.\n'Een knus hoekje' = a cozy corner.",
 example:"A: Wat een knus huisje!\nB: Dank je, we hebben het net ingericht.\nA: Die open haard maakt het extra knus.\nB: Ja, daar zitten we elke avond bij.",
 exampleSrc:"A: What a cozy little house!\nB: Thanks, we just decorated it.\nA: That fireplace makes it extra cozy.\nB: Yes, we sit by it every evening.",
 funFact:"'Knus' overlaps with 'gezellig' but focuses more on physical warmth and comfort. A blanket can be knus, but a birthday party is gezellig."},

{type:"mc", q:"'Met een korreltje zout nemen' betekent:",
 opts:["To add salt to food","To take something with skepticism","To eat very little","To be very precise"],
 ans:"To take something with skepticism",
 hint:"Same idiom as English: not fully believing what you hear"},

{type:"fb", s:"Ik heb last van {1}, ik kan niet in slaap komen.",
 a:["inslaapproblemen"], opts:["inslaapproblemen","koortsaanvallen","acne","knokkels"],
 hint:"The problem of not being able to fall asleep at night",
 sSrc:"I suffer from {1}, I can't fall asleep."},

{type:"mc", q:"'Knus' verschilt van 'gezellig' doordat het meer gaat over:",
 opts:["Social atmosphere","Physical warmth and comfort","Fun activities","Large groups"],
 ans:"Physical warmth and comfort",
 hint:"A warm blanket and a fireplace. P... coziness rather than social w...."},

{type:"fb", s:"De {1} doet belangrijk onderzoek naar hart- en vaatziekten.",
 a:["Hartstichting"], opts:["Hartstichting","Hobbyclub","Kennisstad","Industriestad"],
 hint:"The charitable foundation focused on heart health",
 sSrc:"The {1} does important research on cardiovascular diseases."},

{type:"match", pairs:[
 {trg:"de acne", src:"acne"},
 {trg:"de knokkel", src:"knuckle"},
 {trg:"de koortsaanval", src:"fever attack"},
 {trg:"het inslaapprobleem", src:"trouble falling asleep"}
]},

{type:"mc", q:"'Gokverslaafd' betekent:",
 opts:["Lucky at gambling","Addicted to gambling","Against gambling","Good at gambling"],
 ans:"Addicted to gambling",
 hint:"Gok (gamble) + verslaafd (a...). A compulsive gambler."},

{type:"fb", s:"Het kind had een hevige {1} van bijna veertig graden.",
 a:["koortsaanval"], opts:["koortsaanval","inslaapprobleem","acne","knokkel"],
 hint:"A sudden episode of very high temperature",
 sSrc:"The child had a severe {1} of almost forty degrees."},

{type:"match", pairs:[
 {trg:"de hartstichting", src:"heart foundation"},
 {trg:"de korrel", src:"grain / granule"},
 {trg:"de gokker", src:"gambler"},
 {trg:"knus", src:"cozy / snug"}
]}
]};
export default LESSON_12;
