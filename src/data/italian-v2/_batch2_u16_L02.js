// Unit 16 Batch2. Lesson 2: Wellness, Prevention & Lifestyle
const BATCH2_U16_L2 = {
  id:"itv2_u16l_b2_2", title:"Prevenzione e benessere", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"Prevenzione e benessere",
     desc:"Learn Italian vocabulary for wellness, prevention, and healthy living. Italy has a strong culture of preventive healthcare and holistic well-being.",
     goals:["Discuss preventive healthcare","Talk about diet and exercise","Understand wellness vocabulary"]},

    {type:"teach", trg:"la prevenzione", src:"prevention", pos:"noun", gender:"f",
     note:"Feminine. From 'prevenire' (to prevent).\n'Prevenzione e meglio che cura' = prevention is better than cure.",
     example:"A: La prevenzione e fondamentale.\nB: Si, faccio controlli regolari ogni anno.",
     exampleSrc:"A: Prevention is fundamental.\nB: Yes, I have regular check-ups every year.",
     funFact:"'Prevenire e meglio che curare' (prevention is better than cure) is a widely quoted Italian proverb. The Italian healthcare system invests heavily in 'screening' programs for cancer, cardiovascular disease, and diabetes. Free mammograms and colonoscopies are offered at specific ages."},

    {type:"teach", trg:"la dieta", src:"the diet", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'diaita' (way of life).\n'Essere a dieta' = to be on a diet.",
     example:"A: Sei a dieta?\nB: Si, il medico mi ha consigliato la dieta mediterranea.",
     exampleSrc:"A: Are you on a diet?\nB: Yes, the doctor recommended the Mediterranean diet.",
     funFact:"In Italian, 'dieta' can mean both a specific weight-loss regime and a general way of eating. 'La dieta mediterranea' is UNESCO-recognized and is the gold standard of Italian nutritional advice: olive oil, vegetables, legumes, fish, moderate wine. Italian doctors prescribe it as medicine."},

    {type:"teach", trg:"l'intolleranza", src:"the intolerance (food)", pos:"noun", gender:"f",
     note:"Feminine. 'Intolleranza al lattosio' = lactose intolerance.\n'Intolleranza al glutine' = gluten intolerance.",
     example:"A: Ho un'intolleranza al lattosio.\nB: In Italia ci sono molte opzioni senza lattosio.",
     exampleSrc:"A: I have a lactose intolerance.\nB: In Italy there are many lactose-free options.",
     funFact:"Food intolerances are taken very seriously in Italy. Restaurants by law must provide allergen information. 'Senza glutine' (gluten-free) options are widely available because celiac disease testing is free through the national health service. Italy has one of the highest celiac diagnosis rates in Europe."},

    {type:"teach", trg:"il vaccino", src:"the vaccine", pos:"noun", gender:"m",
     note:"Masculine. From 'vacca' (cow, origin of the first vaccine).\n'Vaccinarsi' = to get vaccinated.",
     example:"A: Hai fatto il vaccino antinfluenzale?\nB: Si, lo faccio ogni autunno.",
     exampleSrc:"A: Did you get the flu vaccine?\nB: Yes, I get it every autumn.",
     funFact:"'Vaccino' comes from 'vacca' (cow) because Edward Jenner's first vaccine in 1796 used cowpox. Italy has mandatory childhood vaccines for ten diseases. The 'Legge Lorenzin' (2017) requires vaccination for school enrollment. Italian pharmacies now also offer flu and other vaccinations."},

    {type:"teach", trg:"la cura", src:"the cure / treatment course", pos:"noun", gender:"f",
     note:"Feminine. 'Seguire una cura' = to follow a treatment.\n'Non c'e cura' = there is no cure.",
     example:"A: Devo seguire una cura di antibiotici.\nB: Per quanti giorni?",
     exampleSrc:"A: I have to follow a course of antibiotics.\nB: For how many days?",
     funFact:"'Cura' is broader than English 'cure.' It means both the healing itself and the course of treatment. 'Le cure termali' (thermal treatments) are a beloved Italian tradition. 'Prendersi cura di' (to take care of) shows another shade of meaning: care and attention, not just medical healing."},

    {type:"teach", trg:"l'ecografia", src:"the ultrasound", pos:"noun", gender:"f",
     note:"Feminine. 'Eco-' (echo) + '-grafia' (writing).\n'Fare un'ecografia' = to have an ultrasound.",
     example:"A: Devo fare un'ecografia addominale.\nB: E un esame semplice e indolore.",
     exampleSrc:"A: I need to have an abdominal ultrasound.\nB: It is a simple and painless exam.",
     funFact:"Ultrasound is widely used in Italian medicine for diagnostic imaging. 'Ecografia' is relatively inexpensive through the public system (co-pay of about 36 euros). Italian women receive multiple ultrasounds during pregnancy. The technology was partly developed by Ian Donald, but Italian hospitals were early adopters."},

    {type:"teach", trg:"lo screening", src:"screening (medical)", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English.\n'Screening oncologico' = cancer screening.",
     example:"A: Hai fatto lo screening per il tumore?\nB: Si, l'azienda sanitaria mi ha invitato.",
     exampleSrc:"A: Did you do the cancer screening?\nB: Yes, the health authority invited me.",
     funFact:"Italy's national health service runs free screening programs: mammography for women 50-69, Pap smear for women 25-64, and colorectal cancer screening for ages 50-69. Invitation letters are sent automatically. Participation rates vary by region, with northern Italy generally higher."},

    {type:"teach", trg:"il fisioterapista", src:"the physiotherapist", pos:"noun", gender:"m",
     note:"Masculine/feminine: il/la fisioterapista (-ista = same form).\n'Fare fisioterapia' = to do physiotherapy.",
     example:"A: Devo andare dal fisioterapista per la schiena.\nB: Quante sedute ti ha prescritto il medico?",
     exampleSrc:"A: I need to go to the physiotherapist for my back.\nB: How many sessions did the doctor prescribe?",
     funFact:"Physiotherapy is popular in Italy, covered partly by the public health system with a referral. Italian physiotherapists undergo rigorous university training (3-year degree). 'Sedute' (sessions) are typically prescribed in blocks of 10. Sports physiotherapy is especially valued given Italy's passion for football and cycling."},

    {type:"teach", trg:"l'alimentazione", src:"nutrition / diet (general)", pos:"noun", gender:"f",
     note:"Feminine. From 'alimentare' (to nourish).\n'Alimentazione sana' = healthy eating.",
     example:"A: L'alimentazione e importante per la salute.\nB: Cerco di mangiare sano ogni giorno.",
     exampleSrc:"A: Nutrition is important for health.\nB: I try to eat healthy every day.",
     funFact:"Italians draw a sharp line between 'alimentazione' (general nutrition habits) and 'dieta' (a specific eating plan). 'Educazione alimentare' (nutrition education) is taught in Italian schools. The concept of 'mangiare bene' (eating well) is cultural identity, not just health advice."},

    {type:"teach", trg:"il sonnifero", src:"the sleeping pill", pos:"noun", gender:"m",
     note:"Masculine. From 'sonno' (sleep) + '-fero' (bringing).\n'Prendere un sonnifero' = to take a sleeping pill.",
     example:"A: Prendi sonniferi?\nB: No, preferisco la camomilla prima di dormire.",
     exampleSrc:"A: Do you take sleeping pills?\nB: No, I prefer chamomile tea before bed.",
     funFact:"Italians tend to prefer natural sleep remedies before medication: 'camomilla' (chamomile), 'tisane' (herbal teas), 'melatonina' (melatonin). Sleeping pills require a prescription. 'L'insonnia' (insomnia) is commonly discussed, and Italian pharmacies offer many over-the-counter 'integratori per il sonno' (sleep supplements)."},

    {type:"teach", trg:"l'integratore", src:"the supplement (dietary)", pos:"noun", gender:"m",
     note:"Masculine. From 'integrare' (to supplement, to complete).\n'Integratore alimentare' = dietary supplement.",
     example:"A: Prendi integratori?\nB: Si, vitamina D e magnesio.",
     exampleSrc:"A: Do you take supplements?\nB: Yes, vitamin D and magnesium.",
     funFact:"Italy is one of Europe's largest markets for dietary supplements. Italian pharmacies dedicate entire sections to 'integratori.' Popular ones include magnesium for stress, iron for anemia, and probiotics for digestion. The Italian approach blends traditional herbal medicine with modern supplementation."},

    // Quiz steps
    {type:"mc", q:"What does the Italian proverb 'prevenire e meglio che curare' mean?",
     opts:["Prevention costs more than the cure itself","Prevention is better than cure","Doctors should prevent their own illnesses first","Curing is always preferable to preventing"],
     ans:"Prevention is better than cure",
     hint:"This proverb reflects Italy's healthcare philosophy. Regular check-ups and healthy living are emphasized before treatment."},

    {type:"fb", s:"Ho un'{1} al lattosio.",
     a:["intolleranza"],
     opts:["intolleranza","allergia","infezione","infiammazione"],
     hint:"Your body cannot properly digest this dairy component. Italian restaurants are legally required to flag this in their menus.",
     sSrc:"I have a lactose {1}."},

    {type:"match", pairs:[
      {trg:"la prevenzione", src:"prevention"},
      {trg:"il vaccino", src:"the vaccine"},
      {trg:"l'ecografia", src:"the ultrasound"},
      {trg:"lo screening", src:"screening"},
      {trg:"l'integratore", src:"the supplement"}
    ]},

    {type:"mc", q:"What are 'cure termali' in Italy?",
     opts:["Emergency medical procedures at hospitals","Thermal spa treatments for health","Dental care procedures at clinics","Online digital health consultations"],
     ans:"Thermal spa treatments for health",
     hint:"'Terme' are spas with mineral-rich t... waters. Italy has a centuries-old tradition of using them for healing."},

    {type:"fb", s:"Devo andare dal {1} per la schiena.",
     a:["fisioterapista"],
     opts:["fisioterapista","farmacista","dentista","oculista"],
     hint:"This healthcare professional treats physical problems through exercises, massage, and rehabilitation techniques.",
     sSrc:"I need to go to the {1} for my back."},

    {type:"mc", q:"What makes Italy's approach to food intolerances notable?",
     opts:["Food intolerances are generally ignored by doctors","Free celiac testing is available through the national health service","Only private clinics diagnose food intolerances","Restaurants are not required to list allergens at all"],
     ans:"Free celiac testing is available through the national health service",
     hint:"Italy has one of Europe's highest c... diagnosis rates. F... t... and widely a... 'senza glutine' options reflect the commitment."},

    {type:"fb", s:"Devo seguire una {1} di antibiotici per una settimana.",
     a:["cura"],
     opts:["cura","dieta","prevenzione","visita"],
     hint:"This word means both 'cure' and 'course of treatment.' Following it completely is essential for the antibiotics to work.",
     sSrc:"I need to follow a {1} of antibiotics for a week."},

    {type:"mc", q:"What do Italians typically prefer before taking sleeping pills?",
     opts:["Strong coffee late at night","Chamomile tea and natural remedies","Heavy exercise right before bed","Watching exciting television programs"],
     ans:"Chamomile tea and natural remedies",
     hint:"'Camomilla,' herbal teas, and melatonin are tried first. Sleeping pills require a prescription and are a last resort."}
  ,{type:"match",pairs:[{trg:"la dieta",src:"the diet"}]}]
};
export default BATCH2_U16_L2;
