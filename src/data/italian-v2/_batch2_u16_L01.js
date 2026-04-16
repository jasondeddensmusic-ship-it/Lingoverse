// Unit 16 Batch2. Lesson 1: Body Systems & Medical Vocabulary
const BATCH2_U16_L1 = {
  id:"itv2_u16l_b2_1", title:"Il corpo e i sistemi", icon:"🫀", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il corpo e i sistemi",
     desc:"Learn Italian vocabulary for body systems, organs, and medical conditions. These terms help you communicate effectively with doctors and understand health discussions.",
     goals:["Name major body systems and organs","Describe symptoms in detail","Understand medical terminology"]},

    {type:"teach", trg:"il cuore", src:"the heart", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'cor' (heart).\n'Battito cardiaco' = heartbeat. 'Infarto' = heart attack.",
     example:"A: Il cuore batte troppo veloce.\nB: Dobbiamo fare un elettrocardiogramma.",
     exampleSrc:"A: The heart is beating too fast.\nB: We need to do an electrocardiogram.",
     funFact:"'Cuore' is one of the most used words in Italian, both medically and metaphorically. 'Di cuore' (from the heart) means sincerely. 'Avere il cuore spezzato' (to have a broken heart) is about love. 'Cuore mio' (my heart) is a term of endearment. The medical adjective is 'cardiaco.'"},

    {type:"teach", trg:"il polmone", src:"the lung", pos:"noun", gender:"m",
     note:"Masculine. Plural: i polmoni. From Latin 'pulmo.'\n'Polmonite' = pneumonia.",
     example:"A: I polmoni sono puliti?\nB: Si, la radiografia non mostra problemi.",
     exampleSrc:"A: Are the lungs clear?\nB: Yes, the X-ray shows no problems.",
     funFact:"Italian has a rich vocabulary for lung conditions: 'polmonite' (pneumonia), 'asma' (asthma, feminine), 'bronchite' (bronchitis). 'Respirare a pieni polmoni' (to breathe with full lungs) means to breathe freely, used metaphorically for feeling liberated."},

    {type:"teach", trg:"il fegato", src:"the liver", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'ficatum' (liver cooked with figs).\n'Avere fegato' = to have courage (slang).",
     example:"A: Le analisi del fegato sono normali.\nB: Meno male, avevo paura per il colesterolo.",
     exampleSrc:"A: The liver tests are normal.\nB: Thank goodness, I was worried about cholesterol.",
     funFact:"'Avere fegato' (to have liver) means 'to have guts' or 'to be brave' in Italian. The liver was considered the seat of courage by the ancient Romans. 'Fegato alla veneziana' (Venetian-style liver) is a famous Italian dish with onions. The medical adjective is 'epatico.'"},

    {type:"teach", trg:"il rene", src:"the kidney", pos:"noun", gender:"m",
     note:"Masculine. Plural: i reni. From Latin 'ren.'\n'Insufficienza renale' = kidney failure.",
     example:"A: Ha un calcolo renale.\nB: E molto doloroso. Deve bere molta acqua.",
     exampleSrc:"A: He has a kidney stone.\nB: It is very painful. He must drink a lot of water.",
     funFact:"'Calcolo renale' (kidney stone) is one of the most painful conditions known. Italian doctors call them 'calcoli' (stones, from Latin 'calculus' meaning small stone). The same word 'calcolo' also means 'calculation' in mathematics. Kidney stones are common in Italy, partly due to the mineral-rich water."},

    {type:"teach", trg:"la colonna vertebrale", src:"the spine / backbone", pos:"noun", gender:"f",
     note:"Feminine. 'Colonna' = column. 'Vertebrale' = of the vertebrae.\n'Mal di schiena' = back pain.",
     example:"A: Ho un problema alla colonna vertebrale.\nB: Devi andare dall'ortopedico.",
     exampleSrc:"A: I have a problem with my spine.\nB: You need to go to the orthopedist.",
     funFact:"Back problems ('problemi alla schiena') are among the most common health complaints in Italy. 'Ernia del disco' (herniated disc) and 'scoliosi' (scoliosis) are frequent diagnoses. Italian physiotherapy ('fisioterapia') is well-regarded, and thermal spas ('terme') often offer back treatment programs."},

    {type:"teach", trg:"la pressione", src:"the blood pressure", pos:"noun", gender:"f",
     note:"Feminine. 'Pressione alta' = high blood pressure. 'Pressione bassa' = low blood pressure.\n'Misurare la pressione' = to take blood pressure.",
     example:"A: La pressione e un po' alta.\nB: Quanto? Centoquaranta su novanta.",
     exampleSrc:"A: The blood pressure is a bit high.\nB: How much? One hundred forty over ninety.",
     funFact:"Italians say blood pressure as two numbers: 'centoquaranta su novanta' (140/90). 'Pressione bassa' (low blood pressure) is considered a genuine condition in Italy and southern Europe, treated with coffee and extra salt. Northern Europeans are sometimes amused that it is taken so seriously."},

    {type:"teach", trg:"il sistema immunitario", src:"the immune system", pos:"noun", gender:"m",
     note:"Masculine. 'Immunitario' = relating to immunity.\n'Difese immunitarie' = immune defenses.",
     example:"A: Devo rafforzare il sistema immunitario.\nB: Mangia frutta e verdura e dormi bene.",
     exampleSrc:"A: I need to strengthen the immune system.\nB: Eat fruit and vegetables and sleep well.",
     funFact:"Italians are very attentive to their 'difese immunitarie' (immune defenses). Seasonal supplements, vitamins, and natural remedies are popular. The concept of 'cambio di stagione' (change of season) as a health risk is taken seriously. Pharmacies sell specific products for 'rafforzare le difese' (strengthening defenses)."},

    {type:"teach", trg:"la circolazione", src:"the circulation (blood)", pos:"noun", gender:"f",
     note:"Feminine. From 'circolare' (to circulate).\n'Problemi di circolazione' = circulation problems.",
     example:"A: Ho problemi di circolazione alle gambe.\nB: Cammina di piu e alza le gambe la sera.",
     exampleSrc:"A: I have circulation problems in my legs.\nB: Walk more and elevate your legs in the evening.",
     funFact:"Circulation problems are common in Italy, especially among elderly people. 'Gambe pesanti' (heavy legs) is a recognized medical complaint. Italian pharmacies sell a range of products for circulation, from supplements to compression stockings ('calze a compressione'). Summer heat worsens symptoms."},

    {type:"teach", trg:"il reflusso", src:"acid reflux / heartburn", pos:"noun", gender:"m",
     note:"Masculine. 'Reflusso gastroesofageo' = gastroesophageal reflux.\nFrom 're-' (back) + 'flusso' (flow).",
     example:"A: Soffro di reflusso dopo cena.\nB: Evita cibi grassi e non sdraiarti subito.",
     exampleSrc:"A: I suffer from reflux after dinner.\nB: Avoid fatty foods and don't lie down right away.",
     funFact:"Given Italy's food culture, reflux is a common complaint. Late dinners (8-9 PM) and rich sauces contribute. The Italian dietary advice for reflux: avoid 'fritto' (fried food), 'piccante' (spicy), 'caffe' (coffee), and 'pomodoro' (tomato). For a food-loving nation, these restrictions are especially challenging."},

    {type:"teach", trg:"il colesterolo", src:"cholesterol", pos:"noun", gender:"m",
     note:"Masculine. 'Colesterolo alto' = high cholesterol.\n'Colesterolo buono (HDL)' vs. 'colesterolo cattivo (LDL).'",
     example:"A: Il colesterolo e un po' alto.\nB: Devo fare piu esercizio e mangiare meglio.",
     exampleSrc:"A: The cholesterol is a bit high.\nB: I need to exercise more and eat better.",
     funFact:"Despite the Mediterranean diet's reputation, high cholesterol is common in Italy, especially in northern regions where butter and cheese are dietary staples. Italian doctors distinguish between 'colesterolo buono' (good, HDL) and 'colesterolo cattivo' (bad, LDL). The 'dieta mediterranea' is prescribed as the primary lifestyle intervention."},

    {type:"teach", trg:"la visita di controllo", src:"the check-up / follow-up visit", pos:"noun", gender:"f",
     note:"Feminine. 'Visita' = visit/examination. 'Controllo' = check.\n'Prenotare una visita' = to book an appointment.",
     example:"A: Devo fare una visita di controllo.\nB: Prenota dal medico di base.",
     exampleSrc:"A: I need to have a check-up.\nB: Book with the general practitioner.",
     funFact:"The Italian healthcare system encourages regular 'visite di controllo.' The 'medico di base' (GP) handles initial assessments and referrals. Specialists require an 'impegnativa' (referral). Wait times in the public system can be months, leading many to seek private 'visite private' for faster access."},

    // Quiz steps
    {type:"mc", q:"What does 'avere fegato' mean in Italian slang?",
     opts:["To have a liver disease","To be very hungry","To have courage or guts","To be in excellent health"],
     ans:"To have courage or guts",
     hint:"The Romans considered the liver the seat of bravery. This idiomatic expression means 'to have nerve' or 'to be bold.'"},

    {type:"fb", s:"La {1} e un po' alta: centoquaranta su novanta.",
     a:["pressione"],
     opts:["pressione","circolazione","temperatura","diagnosi"],
     hint:"This medical measurement is expressed as two numbers. 'Alta' means it is above the normal range.",
     sSrc:"The blood {1} is a bit high: one hundred forty over ninety."},

    {type:"match", pairs:[
      {trg:"il cuore", src:"the heart"},
      {trg:"il polmone", src:"the lung"},
      {trg:"il fegato", src:"the liver"},
      {trg:"il rene", src:"the kidney"},
      {trg:"la colonna vertebrale", src:"the spine"}
    ]},

    {type:"mc", q:"What is 'il reflusso gastroesofageo'?",
     opts:["A stomach virus with fever","Acid reflux from the stomach to the esophagus","A broken bone in the ribcage","An allergic reaction to certain foods"],
     ans:"Acid reflux from the stomach to the esophagus",
     hint:"S... a... flows backward ('re-flusso'). Italian dietary advice includes avoiding fried food, spicy dishes, and lying down after meals."},

    {type:"fb", s:"Devo rafforzare il sistema {1}.",
     a:["immunitario"],
     opts:["immunitario","circolatorio","digestivo","nervoso"],
     hint:"This system defends your body against illness. Italians take 'le difese' (defenses) very seriously, especially during seasonal changes.",
     sSrc:"I need to strengthen the {1} system."},

    {type:"mc", q:"Why is 'pressione bassa' taken seriously in Italy?",
     opts:["Because it causes severe heart attacks in all cases","Because Italian doctors consider it a genuine medical condition","Because it is legally required to treat it immediately","Because it affects the brain more than other organs"],
     ans:"Because Italian doctors consider it a genuine medical condition",
     hint:"Unlike in some countries, low blood pressure is treated with lifestyle changes, coffee, and dietary salt adjustments in Italy."},

    {type:"fb", s:"Il {1} e un po' alto. Devo mangiare meglio.",
     a:["colesterolo"],
     opts:["colesterolo","fegato","cuore","polmone"],
     hint:"This substance in the blood has 'good' (HDL) and 'bad' (LDL) types. The Mediterranean diet is the primary intervention.",
     sSrc:"The {1} is a bit high. I need to eat better."},

    {type:"mc", q:"What do you need from a GP to see a specialist in Italy's public system?",
     opts:["A private insurance card","An impegnativa (referral)","A signed letter from a family member","A direct appointment without any referral"],
     ans:"An impegnativa (referral)",
     hint:"The 'medico di base' writes this document to authorize a specialist visit. Without it, you pay the full private rate."}
  ]
};
export default BATCH2_U16_L1;
