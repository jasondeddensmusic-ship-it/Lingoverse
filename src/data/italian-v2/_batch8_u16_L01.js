// Batch 8 — Unit 16 extra lesson. Advanced Health: Mental Health & Wellness
const BATCH8_L1 = {id:"itv2_u16l_b8_1", title:"Salute mentale", icon:"🧘", xp:15, board:true, steps:[
{type:"intro", title:"Salute mentale",
 desc:"Learn vocabulary for discussing mental health, well-being, and self-care in Italian.",
 goals:["Discuss mental health topics","Describe emotional well-being","Use wellness vocabulary in context"]},

{type:"teach", trg:"l'ansia", src:"the anxiety", pos:"noun", gender:"f",
 note:"Feminine noun. 'Avere l'ansia' = to have anxiety.\n'Ansioso' = anxious.",
 example:"A: Soffro di ansia prima degli esami.\nB: Hai provato la meditazione?",
 exampleSrc:"A: I suffer from anxiety before exams.\nB: Have you tried meditation?",
 funFact:"'Che ansia!' is one of Italy's most common exclamations, especially among young people. It can mean genuine anxiety or just everyday stress."},

{type:"teach", trg:"lo psicologo", src:"the psychologist", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la psicologa.\n'Andare dallo psicologo' = to see a psychologist.",
 example:"A: Penso di andare dallo psicologo.\nB: E un'ottima idea, fa molto bene.",
 exampleSrc:"A: I am thinking of seeing a psychologist.\nB: It is an excellent idea, it really helps.",
 funFact:"Italy introduced a 'bonus psicologo' (psychology bonus) in 2022, giving citizens up to 600 euros for mental health sessions. A sign of changing attitudes."},

{type:"teach", trg:"il benessere", src:"the well-being / wellness", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: bene (well) + essere (being).\n'Centro benessere' = wellness center/spa.",
 example:"A: Il benessere mentale e importante quanto quello fisico.\nB: Sono completamente d'accordo.",
 exampleSrc:"A: Mental well-being is as important as physical well-being.\nB: I completely agree.",
 funFact:"Italian 'centri benessere' (wellness centers) with thermal baths have existed since Roman times. Italy has over 300 thermal spa locations."},

{type:"teach", trg:"rilassarsi", src:"to relax", pos:"verb", gender:null,
 note:"Reflexive verb. 'Rilassati!' = Relax! (informal command).\n'Il rilassamento' = relaxation.",
 example:"A: Devi rilassarti un po'.\nB: Hai ragione, sono troppo stressato.",
 exampleSrc:"A: You need to relax a little.\nB: You are right, I am too stressed.",
 funFact:"The Italian art of 'il dolce far niente' (the sweetness of doing nothing) is essentially a philosophy of relaxation. It is not laziness but intentional peace."},

{type:"teach", trg:"il sonno", src:"the sleep", pos:"noun", gender:"m",
 note:"Masculine noun. 'Avere sonno' = to be sleepy.\n'Disturbi del sonno' = sleep disorders.",
 example:"A: Ho bisogno di piu sonno.\nB: Prova ad andare a letto prima.",
 exampleSrc:"A: I need more sleep.\nB: Try going to bed earlier.",
 funFact:"The 'pisolino' (afternoon nap) is a cherished Italian tradition, especially in southern Italy. Many shops still close from 1 to 4 PM for the pausa pranzo and rest."},

{type:"teach", trg:"sfogare", src:"to vent / to let out", pos:"verb", gender:null,
 note:"Regular -are verb. 'Sfogarsi' = to vent one's feelings.\n'Uno sfogo' = an outburst/venting.",
 example:"A: Ho bisogno di sfogarmi con qualcuno.\nB: Sono qui, dimmi tutto.",
 exampleSrc:"A: I need to vent to someone.\nB: I am here, tell me everything.",
 funFact:"'Sfogo' can also mean a skin rash or breakout. Italians believe that stress 'esce fuori' (comes out) through the skin. Emotional and physical are linked."},

{type:"teach", trg:"la consapevolezza", src:"the awareness / mindfulness", pos:"noun", gender:"f",
 note:"Feminine noun. 'Consapevole' = aware/conscious.\n'Prendere consapevolezza' = to become aware.",
 example:"A: La consapevolezza di se e il primo passo.\nB: Hai ragione, bisogna conoscersi.",
 exampleSrc:"A: Self-awareness is the first step.\nB: You are right, you need to know yourself.",
 funFact:"The concept of 'consapevolezza' has become central in Italian wellness culture. Mindfulness apps and meditation centers have boomed in Italy since 2020."},

{type:"teach", trg:"la resilienza", src:"the resilience", pos:"noun", gender:"f",
 note:"Feminine noun. 'Essere resiliente' = to be resilient.\nBorrowed from physics (material elasticity).",
 example:"A: Ammiro la tua resilienza.\nB: Si impara dalle difficolta.",
 exampleSrc:"A: I admire your resilience.\nB: You learn from difficulties.",
 funFact:"'Resilienza' became Italy's word of the year during the pandemic. PM Mario Draghi even named Italy's recovery plan 'Piano Nazionale di Ripresa e Resilienza.'"},

{type:"teach", trg:"la meditazione", src:"the meditation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Praticare la meditazione' = to practice meditation.\n'Meditare' = to meditate.",
 example:"A: Faccio meditazione ogni mattina.\nB: Per quanto tempo?\nA: Venti minuti.",
 exampleSrc:"A: I meditate every morning.\nB: For how long?\nA: Twenty minutes.",
 funFact:"While yoga and meditation came to Italy relatively recently, contemplative practice has deep Italian roots through monasticism. Benedictine monks practiced meditative silence for centuries."},

{type:"mc",
 q:"What is 'il dolce far niente'?",
 opts:["The sweetness of doing nothing","A type of Italian dessert","A meditation technique","A sleep disorder"],
 ans:"The sweetness of doing nothing",
 hint:"This famous Italian expression describes the pleasure of intentional rest and peace. It is a philosophy, not laziness."},

{type:"match", pairs:[
  {trg:"l'ansia", src:"the anxiety"},
  {trg:"il benessere", src:"the well-being"},
  {trg:"il sonno", src:"the sleep"},
  {trg:"la resilienza", src:"the resilience"}
]},

{type:"fb",
 s:"Ho bisogno di {1} con qualcuno dopo questa giornata.",
 a:["sfogarmi"],
 opts:["sfogarmi","rilassarmi","meditare","dormire"],
 hint:"This reflexive verb means to let out your emotions. You need to talk and express your frustrations.",
 sSrc:"I need to {1} with someone after this day."},

{type:"mc",
 q:"What did Italy introduce in 2022 for mental health?",
 opts:["A bonus psicologo (psychology bonus) of up to 600 euros","Free yoga classes","Mandatory meditation at work","A mental health holiday"],
 ans:"A bonus psicologo (psychology bonus) of up to 600 euros",
 hint:"A financial subsidy to help citizens afford psychologist sessions. It reflects changing attitudes toward mental health."},

{type:"fb",
 s:"La {1} di se e il primo passo per stare meglio.",
 a:["consapevolezza"],
 opts:["consapevolezza","resilienza","meditazione","ansia"],
 hint:"This word means awareness or mindfulness. Knowing yourself is the foundation of well-being.",
 sSrc:"{1} of oneself is the first step to feeling better."},

{type:"mc",
 q:"What does 'sfogo' mean besides emotional venting?",
 opts:["A skin rash or breakout","A vacation","A deep sleep","A type of exercise"],
 ans:"A skin rash or breakout",
 hint:"Italians believe that stress manifests physically. The same word for emotional release also describes a s... condition."}
,{type:"match",pairs:[{trg:"sfogare",src:"to vent / to let out"},{trg:"la meditazione",src:"the meditation"}]}]};
export default BATCH8_L1;
