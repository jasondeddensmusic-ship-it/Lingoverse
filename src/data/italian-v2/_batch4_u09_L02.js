// Batch 4 — Unit 09, Lesson 2: At the Doctor's Office
const BATCH4_U09_L2 = {
  id:"itv2_u09l_b4_2", title:"Dal medico", icon:"\uD83E\uDE7A", xp:15, board:true,
  steps:[
    {type:"intro", title:"Dal medico",
     desc:"Learn essential vocabulary for visiting the doctor in Italy, including symptoms and medical procedures.",
     goals:["Describe symptoms to a doctor","Understand basic medical vocabulary","Navigate the Italian healthcare system"]},

    {type:"teach", trg:"il medico", src:"the doctor", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la medica (increasingly used). Also 'il dottore/la dottoressa.'\nFrom Latin 'medicus.'",
     example:"A: Devo andare dal medico.\nB: Hai un appuntamento?",
     exampleSrc:"A: I need to go to the doctor.\nB: Do you have an appointment?",
     funFact:"In Italy, 'dottore/dottoressa' is used for any university graduate, not just medical doctors. Your accountant is 'dottore.' Your lawyer is 'dottore.' The 'medico di base' (general practitioner) is your primary healthcare provider."},

    {type:"teach", trg:"l'appuntamento", src:"the appointment", pos:"noun", gender:"m",
     note:"Masculine. 'Prendere un appuntamento' = to make an appointment.\nAlso means a date (romantic).",
     example:"A: Ho un appuntamento dal medico alle tre.\nB: Ti accompagno?",
     exampleSrc:"A: I have a doctor's appointment at three.\nB: Shall I go with you?",
     funFact:"'Appuntamento' means both a medical appointment and a romantic date. The ambiguity leads to jokes: 'Ho un appuntamento' could mean either. Context and tone clarify, but Italians love the double meaning."},

    {type:"teach", trg:"il sintomo", src:"the symptom", pos:"noun", gender:"m",
     note:"Masculine. Plural: i sintomi. From Greek 'symptoma' (occurrence).\n'Quali sono i sintomi?' = What are the symptoms?",
     example:"A: Quali sono i sintomi?\nB: Febbre, tosse e mal di gola.",
     exampleSrc:"A: What are the symptoms?\nB: Fever, cough, and sore throat.",
     funFact:"Italian doctors take time listening to symptoms. The average Italian doctor visit lasts longer than in many countries. The 'medico di famiglia' (family doctor) often knows patients for decades, creating a personal relationship."},

    {type:"teach", trg:"il dolore", src:"the pain", pos:"noun", gender:"m",
     note:"Masculine. 'Ho un dolore qui' = I have a pain here (pointing).\n'Dolore' also means emotional pain/grief.",
     example:"A: Dove sente il dolore?\nB: Qui, nella schiena.",
     exampleSrc:"A: Where do you feel the pain?\nB: Here, in my back.",
     funFact:"'Dolore' covers both physical and emotional pain. 'Che dolore!' can express physical hurt or emotional grief. The 'Madonna Addolorata' (Our Lady of Sorrows) is an important figure in Italian Catholicism, showing the word's deep cultural resonance."},

    {type:"teach", trg:"la pressione", src:"blood pressure / pressure", pos:"noun", gender:"f",
     note:"Feminine. 'Misurare la pressione' = to measure blood pressure.\n'Pressione alta/bassa' = high/low blood pressure.",
     example:"A: Le misuro la pressione.\nB: E alta o bassa?",
     exampleSrc:"A: I'll measure your blood pressure.\nB: Is it high or low?",
     funFact:"Italians are very aware of their blood pressure. 'Avere la pressione bassa' (having low blood pressure) is a common complaint, especially in summer heat. Italian pharmacies offer free blood pressure checks. It is a daily topic of conversation."},

    {type:"teach", trg:"la visita", src:"the examination / visit", pos:"noun", gender:"f",
     note:"Feminine. 'Visita medica' = medical examination.\n'Fare una visita' = to have a checkup.",
     example:"A: Devo fare una visita medica.\nB: Dal medico di base o dallo specialista?",
     exampleSrc:"A: I need to have a medical examination.\nB: With your GP or a specialist?",
     funFact:"The Italian 'visita medica' can range from a basic checkup to a thorough specialist examination. Italy's public healthcare system (SSN) covers most visits, though wait times can be long. Many Italians pay privately ('visita privata') to skip the queue."},

    {type:"teach", trg:"la pastiglia", src:"the pill / tablet", pos:"noun", gender:"f",
     note:"Feminine. Plural: le pastiglie. 'Prendere una pastiglia' = to take a pill.\nAlso called 'la compressa.'",
     example:"A: Quante pastiglie devo prendere?\nB: Una pastiglia due volte al giorno.",
     exampleSrc:"A: How many pills should I take?\nB: One pill twice a day.",
     funFact:"Italy has a strong pharmaceutical tradition. Many common medicines are available without prescription ('farmaci da banco'). Italian pharmacists can recommend treatments for many conditions. The pharmacy ('farmacia') is often the first stop for health issues."},

    {type:"teach", trg:"la puntura", src:"the injection / sting", pos:"noun", gender:"f",
     note:"Feminine. From 'pungere' (to prick/sting).\n'Fare una puntura' = to give an injection.",
     example:"A: Devo fare una puntura?\nB: Si, e un vaccino.",
     exampleSrc:"A: Do I need to get an injection?\nB: Yes, it is a vaccine.",
     funFact:"'Puntura' means both a medical injection and an insect sting. 'Ho paura delle punture' (I am afraid of injections) is a very common Italian confession. Many Italian medications are also available as 'puntura' (injection) versions for faster effect."},

    {type:"teach", trg:"la schiena", src:"the back (body)", pos:"noun", gender:"f",
     note:"Feminine. 'Mal di schiena' = backache.\n'Ho mal di schiena' is one of Italy's most common complaints.",
     example:"A: Ho mal di schiena terribile.\nB: Devi fare ginnastica.",
     exampleSrc:"A: I have terrible back pain.\nB: You need to do exercises.",
     funFact:"'Mal di schiena' (backache) is reportedly Italy's most common pain complaint. Italian culture attributes it to 'colpi d'aria' (cold drafts), sitting badly, and stress. Italian thermal baths ('terme') have treated back pain since Roman times."},

    {type:"teach", trg:"respirare", src:"to breathe", pos:"verb", gender:null,
     note:"Regular -are verb. 'Respiri profondamente' = breathe deeply.\n'Il respiro' = the breath.",
     example:"A: Respiri profondamente.\nB: Fa male quando respiro.",
     exampleSrc:"A: Breathe deeply.\nB: It hurts when I breathe.",
     funFact:"Italian doctors always check breathing ('auscultare') with a stethoscope. 'Respiri profondamente' (breathe deeply) and 'tossisca' (cough) are standard doctor commands. The verb is from Latin 'respirare' (to breathe back, to recover)."},

    {type:"teach", trg:"l'analisi", src:"blood test / analysis", pos:"noun", gender:"f",
     note:"Feminine. Plural: le analisi. 'Fare le analisi del sangue' = to do a blood test.\n'I risultati delle analisi' = test results.",
     example:"A: Ha fatto le analisi?\nB: Si, aspetto i risultati.",
     exampleSrc:"A: Have you done the blood test?\nB: Yes, I am waiting for the results.",
     funFact:"Italians do blood tests ('analisi del sangue') regularly and take the results very seriously. Discussing your blood test results with friends and family is common. Cholesterol, blood sugar, and iron levels are regular conversation topics."},

    {type:"teach", trg:"la cura", src:"the treatment / cure", pos:"noun", gender:"f",
     note:"Feminine. 'Seguire una cura' = to follow a treatment.\n'Curarsi' = to take care of oneself.",
     example:"A: Qual e la cura?\nB: Riposo, liquidi e medicine.",
     exampleSrc:"A: What is the treatment?\nB: Rest, fluids, and medicine.",
     funFact:"'Cura' means both 'cure' and 'care.' 'Avere cura di' (to take care of) is common. 'Le terme' (thermal spas) are part of Italian medical treatment: doctors prescribe spa treatments for certain conditions, covered by insurance."},

    {type:"teach", trg:"il pronto soccorso", src:"emergency room / ER", pos:"noun", gender:"m",
     note:"Masculine. Literally: first aid. 'Andare al pronto soccorso' = to go to the ER.\nFor serious emergencies.",
     example:"A: Devo andare al pronto soccorso?\nB: Si, chiama il 118!",
     exampleSrc:"A: Do I need to go to the ER?\nB: Yes, call 118!",
     funFact:"Italy's emergency number is 118 for medical emergencies (112 for general emergency). The 'pronto soccorso' uses a color triage system: red (life-threatening), yellow (urgent), green (non-urgent), white (not urgent). Wait times for green and white can be many hours."},

    {type:"teach", trg:"grave", src:"serious / severe", pos:"adj", gender:null,
     note:"Same form for masculine and feminine. 'Non e grave' = it is not serious.\nAlso means 'grave' (emotional weight).",
     example:"A: E grave, dottore?\nB: No, non e grave. Si riposera.",
     exampleSrc:"A: Is it serious, doctor?\nB: No, it is not serious. Get some rest.",
     funFact:"'E grave?' (Is it serious?) is the anxious patient's classic question. The doctor's reassuring 'non e niente di grave' (it is nothing serious) brings immediate relief. Italian medical communication tends to be direct but reassuring."},

    {type:"teach", trg:"migliorare", src:"to improve / to get better", pos:"verb", gender:null,
     note:"Regular -are verb. 'Le cose migliorano' = things are improving.\nFrom 'migliore' (better).",
     example:"A: Come stai oggi?\nB: Sto migliorando, grazie.",
     exampleSrc:"A: How are you today?\nB: I am improving, thanks.",
     funFact:"'Migliorare' is from 'migliore' (better), the comparative of 'buono.' Italian is optimistic about recovery: 'andra tutto bene' (everything will be fine) became Italy's national motto during difficult times."},

    // Quiz steps
    {type:"mc", q:"Qual e il numero per le emergenze mediche in Italia?",
     opts:["118","911","112","999"],
     ans:"118",
     hint:"This is Italy's dedicated medical emergency number."},

    {type:"fb", s:"Ho un {1} forte alla schiena.",
     a:["dolore"], opts:["dolore","sintomo","medico","febbre"],
     hint:"You are describing a strong pain in your back.",
     sSrc:"I have a strong {1} in my back."},

    {type:"match", pairs:[
      {trg:"il medico", src:"doctor"},
      {trg:"la pastiglia", src:"pill"},
      {trg:"la puntura", src:"injection"},
      {trg:"l'analisi", src:"blood test"},
      {trg:"la cura", src:"treatment"}
    ]},

    {type:"mc", q:"Cosa significa 'medico di base' in Italia?",
     opts:["General practitioner / family doctor","Hospital surgeon","Emergency doctor","Pharmacist"],
     ans:"General practitioner / family doctor",
     hint:"This is your primary healthcare provider who knows you for years."},

    {type:"fb", s:"{1} profondamente, per favore.",
     a:["Respiri"], opts:["Respiri","Dorma","Mangi","Cammini"],
     hint:"The doctor is asking you to take a deep breath during examination.",
     sSrc:"{1} deeply, please."},

    {type:"mc", q:"Cosa sono 'le terme' nella sanita italiana?",
     opts:["Thermal spas prescribed by doctors for treatment","Emergency rooms","Blood test labs","Pharmacies"],
     ans:"Thermal spas prescribed by doctors for treatment",
     hint:"Italian d... can prescribe spa treatments covered by insurance."},

    {type:"fb", s:"Non e {1}, si riposera per qualche giorno.",
     a:["grave"], opts:["grave","bene","meglio","forte"],
     hint:"The doctor is reassuring you that the condition is not serious.",
     sSrc:"It is not {1}, rest for a few days."},

    {type:"mc", q:"Perche gli italiani discutono le analisi del sangue?",
     opts:["Discussing blood test results with family and friends is culturally normal","Blood tests are public information","Doctors require it","It is a legal obligation"],
     ans:"Discussing blood test results with family and friends is culturally normal",
     hint:"Health is a communal concern in Italian culture, not a private matter."}
  ,{type:"match",pairs:[{trg:"la pressione",src:"blood pressure / pressure"},{trg:"la visita",src:"the examination / visit"},{trg:"la schiena",src:"the back (body)"},{trg:"respirare",src:"to breathe"}]}]
};
export default BATCH4_U09_L2;
