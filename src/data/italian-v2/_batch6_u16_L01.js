// Batch 6. Unit 16 extra lesson. La salute avanzata: Mental Health & Wellbeing
const BATCH6_L1 = {id:"itv2_u16l_b6_1", title:"Il benessere mentale", icon:"\u{1F9E0}", xp:15, board:true, steps:[
{type:"intro", title:"Il benessere mentale",
 desc:"Learn vocabulary for discussing mental health, wellbeing, stress management, and self-care in Italian.",
 goals:["Discuss mental health topics","Describe stress and relaxation","Talk about wellbeing and self-care"]},

{type:"teach", trg:"il benessere", src:"the wellbeing", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: bene (well) + essere (being).\nPhysical and mental wellness.",
 example:"A: Il benessere mentale e importante quanto quello fisico.\nB: Sono completamente d'accordo.",
 exampleSrc:"A: Mental wellbeing is as important as physical wellbeing.\nB: I completely agree.",
 funFact:"Italy has a booming 'industria del benessere' (wellness industry) centered around spas, thermal baths, and healthy living. The concept blends ancient Roman bathing culture with modern wellness."},

{type:"teach", trg:"lo stress", src:"the stress", pos:"noun", gender:"m",
 note:"Masculine noun (borrowed from English). Invariable.\n'Essere stressato/a' = to be stressed.",
 example:"A: Lo stress del lavoro mi sta consumando.\nB: Dovresti prendere una pausa.",
 exampleSrc:"A: Work stress is consuming me.\nB: You should take a break.",
 funFact:"Italians borrowed 'stress' directly from English. The adjective 'stressante' (stressful) and 'stressato' (stressed) are fully Italianized."},

{type:"teach", trg:"rilassarsi", src:"to relax", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi rilasso, ti rilassi, si rilassa.\nFrom 'rilassare' (to relax/loosen).",
 example:"A: Mi rilasso leggendo un buon libro.\nB: Anch'io, e la cosa migliore dopo il lavoro.",
 exampleSrc:"A: I relax by reading a good book.\nB: Me too, it is the best thing after work.",
 funFact:"Italian culture has built-in relaxation: the 'passeggiata' (evening stroll), the 'pausa pranzo' (lunch break), and the 'aperitivo' are all stress-relief rituals."},

{type:"teach", trg:"l'ansia", src:"the anxiety", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ansie.\nFrom Latin 'anxietas.' Both clinical and everyday worry.",
 example:"A: L'ansia mi impedisce di dormire bene.\nB: Hai provato la meditazione?",
 exampleSrc:"A: Anxiety prevents me from sleeping well.\nB: Have you tried meditation?",
 funFact:"'Che ansia!' is a common Italian exclamation meaning 'how stressful!' It is used casually for everything from exams to traffic jams."},

{type:"teach", trg:"la preoccupazione", src:"the worry / concern", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le preoccupazioni.\nFrom 'preoccupare' (to worry).",
 example:"A: Le preoccupazioni per il futuro sono normali.\nB: Si, ma non devono controllarti.",
 exampleSrc:"A: Worries about the future are normal.\nB: Yes, but they should not control you.",
 funFact:"'Pre-occupare' literally means 'to occupy beforehand.' Your mind is occupied by something that has not even happened yet, a very descriptive etymology."},

{type:"teach", trg:"sfogare", src:"to vent / to let out", pos:"verb", gender:null,
 note:"Regular -are verb. sfogo, sfoghi, sfoga.\nTo express pent-up emotions. Reflexive: sfogarsi.",
 example:"A: Ho bisogno di sfogarmi con qualcuno.\nB: Sono qui, dimmi tutto.",
 exampleSrc:"A: I need to vent to someone.\nB: I am here, tell me everything.",
 funFact:"'Sfogo' (noun) means an outburst or a rash. 'Dare sfogo' means to give vent to emotions. Italian culture values emotional expression over repression."},

{type:"teach", trg:"la terapia", src:"the therapy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le terapie.\nUsed for both medical treatment and psychotherapy.",
 example:"A: La terapia mi sta aiutando molto.\nB: Sono contento che funzioni.",
 exampleSrc:"A: Therapy is helping me a lot.\nB: I am glad it is working.",
 funFact:"Going to therapy ('andare in terapia') is becoming more accepted in Italy, though stigma remains in some regions. The term 'lo psicologo' (psychologist) is now mainstream."},

{type:"teach", trg:"la solitudine", src:"the loneliness / solitude", pos:"noun", gender:"f",
 note:"Feminine noun. No common plural.\nCan be negative (loneliness) or positive (solitude).",
 example:"A: La solitudine può essere difficile.\nB: Ma a volte serve per riflettere.",
 exampleSrc:"A: Loneliness can be difficult.\nB: But sometimes it is needed for reflection.",
 funFact:"Italian distinguishes between positive solitude (chosen peace) and negative isolation. 'Stare da soli' (being alone) is neutral; context determines the emotional meaning."},

{type:"teach", trg:"la pazienza", src:"the patience", pos:"noun", gender:"f",
 note:"Feminine noun. From Latin 'patientia' (endurance).\n'Avere pazienza' = to be patient.",
 example:"A: Ci vuole pazienza per imparare una lingua.\nB: Hai ragione, non devo avere fretta.",
 exampleSrc:"A: It takes patience to learn a language.\nB: You are right, I should not rush.",
 funFact:"'Pazienza!' as an exclamation means 'oh well, never mind!' It expresses resigned acceptance, a very Italian philosophical shrug."},

{type:"teach", trg:"la consapevolezza", src:"the awareness / mindfulness", pos:"noun", gender:"f",
 note:"Feminine noun. From 'consapevole' (aware).\nUsed in psychology and meditation contexts.",
 example:"A: La consapevolezza di se e il primo passo.\nB: Conoscere i propri limiti aiuta.",
 exampleSrc:"A: Self-awareness is the first step.\nB: Knowing your own limits helps.",
 funFact:"'Consapevolezza' is the Italian translation used for 'mindfulness' in meditation contexts. The practice of 'mindfulness' is growing rapidly in Italian wellness culture."},

{type:"teach", trg:"sostenere", src:"to support / to sustain", pos:"verb", gender:null,
 note:"Irregular -ere verb. sostengo, sostieni, sostiene.\nPast participle: sostenuto.",
 example:"A: I miei amici mi sostengono sempre.\nB: E importante avere persone così.",
 exampleSrc:"A: My friends always support me.\nB: It is important to have people like that.",
 funFact:"'Sostenere' also means 'to maintain/claim': 'sostenere una tesi' (to defend a thesis). 'Sostenere un esame' means to take an exam, not to support it."},

{type:"teach", trg:"respirare", src:"to breathe", pos:"verb", gender:null,
 note:"Regular -are verb. respiro, respiri, respira.\nFrom Latin 're' + 'spirare.'",
 example:"A: Respira profondamente e conta fino a dieci.\nB: Mi sento già meglio.",
 exampleSrc:"A: Breathe deeply and count to ten.\nB: I already feel better.",
 funFact:"'Respirare' is the basis for 'respiro' (breath) and 'sospirare' (to sigh). Deep breathing exercises are prescribed by Italian doctors for anxiety management."},

{type:"teach", trg:"il riposo", src:"the rest / repose", pos:"noun", gender:"m",
 note:"Masculine noun. From 'riposare' (to rest).\n'Giorno di riposo' = day off.",
 example:"A: Hai bisogno di un po' di riposo.\nB: Si, sono esausto questa settimana.",
 exampleSrc:"A: You need some rest.\nB: Yes, I am exhausted this week.",
 funFact:"The Italian concept of 'riposo' goes beyond sleeping. It includes the 'pausa pranzo,' the after-lunch rest, and the general right to disconnect from work."},

{type:"teach", trg:"esaurimento", src:"the burnout / exhaustion", pos:"noun", gender:"m",
 note:"Masculine noun. From 'esaurire' (to exhaust/deplete).\n'Esaurimento nervoso' = nervous breakdown.",
 example:"A: Rischia un esaurimento se continua così.\nB: Deve fermarsi e riposare.",
 exampleSrc:"A: He risks burnout if he continues like this.\nB: He needs to stop and rest.",
 funFact:"'Esaurimento nervoso' was once the Italian catch-all term for mental health crises. Today, more specific terminology is used, but the expression persists in everyday speech."},

{type:"mc", q:"Come si dice 'to vent one's feelings' in italiano?",
 opts:["sfogarsi","rilassarsi","respirare","sostenere"],
 ans:"sfogarsi",
 hint:"To let out pent-up emotions by talking to someone or expressing frustration."},

{type:"fb", s:"La {1} di se e il primo passo per stare meglio.", a:["consapevolezza"],
 opts:["consapevolezza","solitudine","pazienza","preoccupazione"],
 hint:"Awareness or mindfulness. Knowing yourself and your limits.",
 sSrc:"Self-{1} is the first step to feeling better."},

{type:"match", pairs:[
 {trg:"l'ansia", src:"anxiety"},
 {trg:"lo stress", src:"stress"},
 {trg:"il benessere", src:"wellbeing"},
 {trg:"la solitudine", src:"loneliness"}
]},

{type:"mc", q:"Cosa significa 'Pazienza!' come esclamazione?",
 opts:["I am tired","Oh well, never mind","I am angry","Be patient"],
 ans:"Oh well, never mind",
 hint:"An expression of resigned acceptance, a philosophical Italian shrug."},

{type:"fb", s:"I miei amici mi {1} sempre nei momenti difficili.", a:["sostengono"],
 opts:["sostengono","sfogano","rilassano","preoccupano"],
 hint:"Third person plural of the verb meaning 'to support.' Irregular conjugation.",
 sSrc:"My friends always {1} me in difficult moments."},

{type:"mc", q:"Cos'e l'esaurimento nervoso?",
 opts:["A relaxation technique","A form of therapy","A nervous breakdown or burnout","A type of medication"],
 ans:"A nervous breakdown or burnout",
 hint:"When someone is completely depleted, mentally and physically exhausted."},

{type:"fb", s:"{1} profondamente e conta fino a dieci.", a:["Respira"],
 opts:["Respira","Sfoga","Riposa","Sostieni"],
 hint:"The imperative form of the verb meaning 'to breathe.' A calming instruction.",
 sSrc:"{1} deeply and count to ten."},

{type:"match", pairs:[
 {trg:"rilassarsi", src:"to relax"},
 {trg:"respirare", src:"to breathe"},
 {trg:"il riposo", src:"rest"},
 {trg:"la terapia", src:"therapy"}
]}
,{type:"match",pairs:[{trg:"la preoccupazione",src:"the worry / concern"},{trg:"sfogare",src:"to vent / to let out"},{trg:"la pazienza",src:"the patience"},{trg:"esaurimento",src:"the burnout / exhaustion"}]}]};
export default BATCH6_L1;
