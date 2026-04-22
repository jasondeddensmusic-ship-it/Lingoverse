// Unit 16 Expansion. Lesson 5: The Pharmacy and Mental Health
const LESSON_5 = {
  id:"itv2_u16l5", title:"In farmacia e la salute mentale", icon:"💊", xp:15, board:true,
  steps:[
    {type:"intro", title:"In farmacia e la salute mentale",
     desc:"Learn pharmacy vocabulary and how to discuss mental health in Italian. Italian pharmacists play a unique advisory role, and mental health awareness is growing rapidly.",
     goals:["Navigate an Italian pharmacy conversation","Discuss mental health topics respectfully","Understand common medications and remedies"]},

    {type:"teach", trg:"la farmacia", src:"the pharmacy", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'pharmakon' (remedy).\n'Farmacia di turno' = duty pharmacy (open at night).",
     example:"A: C'e una farmacia aperta qui vicino?\nB: Si, la farmacia di turno e in piazza.",
     exampleSrc:"A: Is there an open pharmacy nearby?\nB: Yes, the duty pharmacy is in the square.",
     funFact:"Italian pharmacies are marked by a green cross ('croce verde'). They rotate night duty ('turno') so one is always open. The pharmacist ('farmacista') can advise on minor ailments without a doctor's visit. Pharmacies also sell beauty products ('parafarmacia'), homeopathic remedies, and some medical devices."},

    {type:"teach", trg:"il farmacista", src:"the pharmacist", pos:"noun", gender:"m",
     note:"Masculine/feminine: il/la farmacista. -ista ending.\nRequires a university degree (5 years) and state exam.",
     example:"A: Chiedi al farmacista cosa prendere.\nB: Il farmacista mi ha consigliato questo sciroppo.",
     exampleSrc:"A: Ask the pharmacist what to take.\nB: The pharmacist recommended this syrup.",
     funFact:"Italian pharmacists have significant medical authority. For minor complaints (cold, headache, skin rash), many Italians go directly to the pharmacy instead of the doctor. The pharmacist can recommend over-the-counter medications and explain dosage. They cannot prescribe prescription drugs."},

    {type:"teach", trg:"l'antidolorifico", src:"the painkiller", pos:"noun", gender:"m",
     note:"Masculine. Anti (against) + dolorifico (pain-causing).\n'Prendere un antidolorifico' = to take a painkiller.",
     example:"A: Ho mal di testa. Hai un antidolorifico?\nB: Si, prendi una compressa di paracetamolo.",
     exampleSrc:"A: I have a headache. Do you have a painkiller?\nB: Yes, take a paracetamol tablet.",
     funFact:"The most common painkillers in Italy are paracetamolo (paracetamol/acetaminophen, brand name Tachipirina) and ibuprofene (ibuprofen, brand name Moment or Brufen). 'Tachipirina' is practically a household name. Italians keep it in every medicine cabinet."},

    {type:"teach", trg:"l'antibiotico", src:"the antibiotic", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli antibiotici. Anti (against) + biotico (life-related).\nAlways requires a prescription.",
     example:"A: Il dottore mi ha prescritto un antibiotico.\nB: Per quanti giorni devi prenderlo?",
     exampleSrc:"A: The doctor prescribed me an antibiotic.\nB: For how many days do you have to take it?",
     funFact:"Italy has historically been one of Europe's highest consumers of antibiotics. The 'resistenza antimicrobica' (antimicrobial resistance) is a major public health concern. Italian health campaigns now strongly emphasize that antibiotics work only against bacteria, not viruses."},

    {type:"teach", trg:"il foglietto illustrativo", src:"the package leaflet / patient information", pos:"noun", gender:"m",
     note:"Masculine. 'Foglietto' = small sheet. 'Illustrativo' = explanatory.\nThe paper inside every medication box.",
     example:"A: Hai letto il foglietto illustrativo?\nB: Si, dice di prenderne una al giorno.",
     exampleSrc:"A: Did you read the package leaflet?\nB: Yes, it says to take one a day.",
     funFact:"The 'foglietto illustrativo' (also called 'bugiardino' in slang) lists dosage, side effects, and contraindications. 'Bugiardino' literally means 'little liar' because Italians joke that the long list of side effects scares everyone while most people take the medication without problems."},

    {type:"teach", trg:"lo stress", src:"stress", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Invariable.\n'Essere stressato' = to be stressed.",
     example:"A: Sono molto stressato dal lavoro.\nB: Dovresti parlare con qualcuno.",
     exampleSrc:"A: I am very stressed from work.\nB: You should talk to someone.",
     funFact:"'Stress' entered Italian directly from English and is universally used. The adjective 'stressato' (stressed) and verb 'stressare' (to stress someone) were created by adding Italian endings. Mental health awareness has grown significantly in Italy since 2020, but stigma still exists in some communities."},

    {type:"teach", trg:"l'ansia", src:"anxiety", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'anxia' (troubled).\n'Soffrire d'ansia' = to suffer from anxiety.",
     example:"A: Soffro d'ansia da qualche mese.\nB: Hai provato a parlare con uno psicologo?",
     exampleSrc:"A: I have been suffering from anxiety for a few months.\nB: Have you tried talking to a psychologist?",
     funFact:"Italy introduced a 'bonus psicologo' (psychologist voucher) in 2022, covering up to 50 sessions of therapy for citizens with lower incomes. Demand was overwhelming: over 300,000 applications in the first round. This signaled a shift in Italian attitudes toward mental health."},

    {type:"teach", trg:"lo psicologo", src:"the psychologist", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la psicologa.\nFrom Greek 'psyche' (soul) + 'logos' (study).",
     example:"A: Vado dallo psicologo ogni due settimane.\nB: Come ti trovi? Ti aiuta?",
     exampleSrc:"A: I go to the psychologist every two weeks.\nB: How is it going? Does it help?",
     funFact:"Italian distinguishes between 'psicologo' (psychologist, therapy and counseling), 'psichiatra' (psychiatrist, medical doctor who can prescribe medication), and 'psicoterapeuta' (psychotherapist, specialized in talk therapy). All require university degrees and state registration."},

    {type:"teach", trg:"il benessere", src:"well-being / wellness", pos:"noun", gender:"m",
     note:"Masculine. 'Ben' (well) + 'essere' (being).\n'Benessere mentale' = mental well-being.",
     example:"A: Il benessere mentale e importante quanto quello fisico.\nB: Sono completamente d'accordo.",
     exampleSrc:"A: Mental well-being is as important as physical well-being.\nB: I completely agree.",
     funFact:"'Benessere' has become a buzzword in Italian culture. 'Centri benessere' (wellness centers) offer spa treatments and relaxation. The concept extends to 'benessere lavorativo' (workplace well-being) and 'benessere sociale' (social welfare). Italy ranks variably in European well-being indexes."},

    // Quiz steps
    {type:"mc", q:"What is the 'farmacia di turno'?",
     opts:["The duty pharmacy that stays open at night","A pharmacy that offers free consultations","A pharmacy that only sells generic brands","A pharmacy inside a hospital"],
     ans:"The duty pharmacy that stays open at night",
     hint:"Italian pharmacies rotate n... and holiday d.... The green cross outside lights up when one is o...."},

    {type:"fb", s:"Ho mal di testa. Hai un {1}?",
     a:["antidolorifico"],
     opts:["antidolorifico","antibiotico","foglietto","farmacista"],
     hint:"You need medication to relieve pain. This compound word literally means 'against pain-causing.'",
     sSrc:"I have a headache. Do you have a {1}?"},

    {type:"match", pairs:[
      {trg:"la farmacia", src:"the pharmacy"},
      {trg:"l'antidolorifico", src:"the painkiller"},
      {trg:"l'antibiotico", src:"the antibiotic"},
      {trg:"lo psicologo", src:"the psychologist"},
      {trg:"il benessere", src:"well-being"}
    ]},

    {type:"mc", q:"What is the 'bugiardino'?",
     opts:["A type of Italian cold remedy","A slang name for the package leaflet inside medication","A children's health checkup booklet","A brand of Italian vitamins"],
     ans:"A slang name for the package leaflet inside medication",
     hint:"'Bugiardino' literally means 'little liar.' The joke is that the long list of side effects seems exaggerated."},

    {type:"fb", s:"Soffro d'{1} da qualche mese.",
     a:["ansia"],
     opts:["ansia","allergia","influenza","infezione"],
     hint:"This mental health condition involves persistent worry and unease. Italy introduced a voucher program to help people access therapy.",
     sSrc:"I have been suffering from {1} for a few months."},

    {type:"mc", q:"What is the 'bonus psicologo'?",
     opts:["A free online mental health course","A tax deduction for buying self-help books","A government voucher covering therapy sessions","A discount card for pharmacy purchases"],
     ans:"A government voucher covering therapy sessions",
     hint:"Introduced in 2022 for lower-income citizens. Over 300,000 applications in the first round showed massive demand."},

    {type:"fb", s:"Vado dallo {1} ogni due settimane.",
     a:["psicologo"],
     opts:["psicologo","specialista","farmacista","cardiologo"],
     hint:"This professional provides therapy and counseling for mental health. From Greek 'psyche' (soul).",
     sSrc:"I go to the {1} every two weeks."},

    {type:"mc", q:"What can an Italian pharmacist do that differs from many other countries?",
     opts:["Diagnose chronic diseases officially","Prescribe any medication without limits","Perform minor surgical procedures","Advise on and recommend treatments for minor ailments"],
     ans:"Advise on and recommend treatments for minor ailments",
     hint:"For a cold, headache, or rash, many Italians go to the pharmacy first. The pharmacist recommends over-the-counter options."}
  ]
};
export default LESSON_5;
