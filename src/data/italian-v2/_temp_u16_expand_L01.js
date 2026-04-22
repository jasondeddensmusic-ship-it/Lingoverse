// Unit 16 Expansion. Lesson 4: Specialist Vocabulary
const LESSON_4 = {
  id:"itv2_u16l4", title:"Gli specialisti", icon:"🔬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gli specialisti",
     desc:"Learn the names of medical specialists and how to navigate referrals in Italy. The Italian healthcare system uses a referral chain from your general practitioner to specialists.",
     goals:["Name common medical specialists","Understand the Italian referral system","Discuss specialist appointments"]},

    {type:"teach", trg:"lo specialista", src:"the specialist", pos:"noun", gender:"m",
     note:"Masculine/feminine: lo/la specialista. -ista ending.\n'Visita specialistica' = specialist appointment.",
     example:"A: Il medico mi ha mandato dallo specialista.\nB: Quale specialista? Il cardiologo?",
     exampleSrc:"A: The doctor referred me to a specialist.\nB: Which specialist? The cardiologist?",
     funFact:"In Italy, you cannot go directly to a specialist through the public system. Your 'medico di base' (GP) must write a referral ('impegnativa'). This referral is needed to book and pay the reduced public rate. Without it, you pay full private prices."},

    {type:"teach", trg:"l'impegnativa", src:"the referral (medical)", pos:"noun", gender:"f",
     note:"Feminine. The GP's prescription to see a specialist.\n'Fare l'impegnativa' = to write a referral.",
     example:"A: Hai l'impegnativa del medico?\nB: Si, me l'ha fatta ieri per il dermatologo.",
     exampleSrc:"A: Do you have the doctor's referral?\nB: Yes, he wrote it yesterday for the dermatologist.",
     funFact:"The 'impegnativa' is a red or white form (now digital in many regions) that allows you to book a specialist appointment at the public rate ('ticket'). Without it, you go 'privatamente' (privately) and pay full price. The impegnativa has an expiration date, typically 6 months."},

    {type:"teach", trg:"il cardiologo", src:"the cardiologist", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la cardiologa.\nFrom Greek 'kardia' (heart) + 'logos' (study).",
     example:"A: Devo andare dal cardiologo per un controllo.\nB: Hai gia l'impegnativa?",
     exampleSrc:"A: I need to go to the cardiologist for a check-up.\nB: Do you already have the referral?",
     funFact:"Heart disease is the leading cause of death in Italy, making the cardiologist one of the most visited specialists. The Italian healthcare system provides free cardiovascular screening at certain ages. Wait times for public cardiologist appointments can be several months."},

    {type:"teach", trg:"il dermatologo", src:"the dermatologist", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la dermatologa.\nFrom Greek 'derma' (skin) + 'logos' (study).",
     example:"A: Ho un problema alla pelle. Vado dal dermatologo.\nB: Prendi appuntamento al CUP.",
     exampleSrc:"A: I have a skin problem. I am going to the dermatologist.\nB: Make an appointment at the CUP.",
     funFact:"The 'CUP' (Centro Unico di Prenotazione) is Italy's centralized booking system for public healthcare appointments. You call or go online to book specialist visits. Wait times vary dramatically: a few weeks in some regions, several months in others. Many Italians pay privately to skip the queue."},

    {type:"teach", trg:"l'ortopedico", src:"the orthopedist", pos:"noun", gender:"m",
     note:"Masculine. Feminine: l'ortopedica.\nFrom Greek 'orthos' (straight) + 'pais' (child).",
     example:"A: Mi fa male il ginocchio. Devo vedere l'ortopedico.\nB: Fatti prescrivere una radiografia prima.",
     exampleSrc:"A: My knee hurts. I need to see the orthopedist.\nB: Get an X-ray prescribed first.",
     funFact:"Originally, orthopedics meant 'straightening children' (correcting skeletal deformities in youth). Today it covers all bone and joint issues. Italy has excellent orthopedic care, partly because of its strong sports culture. The 'Istituto Ortopedico Rizzoli' in Bologna is world-renowned."},

    {type:"teach", trg:"l'oculista", src:"the eye doctor / ophthalmologist", pos:"noun", gender:"m",
     note:"Masculine/feminine: l'oculista. -ista ending.\nFrom Latin 'oculus' (eye).",
     example:"A: Non vedo bene da lontano. Devo andare dall'oculista.\nB: Forse hai bisogno di occhiali.",
     exampleSrc:"A: I can't see well from a distance. I need to go to the eye doctor.\nB: Maybe you need glasses.",
     funFact:"'Oculista' and 'oftalmologo' are both used in Italian. The 'oculista' is the eye doctor (general), while 'oftalmologo' is the specialist surgeon. Italian 'ottici' (opticians) can prescribe basic glasses but cannot diagnose diseases. Eye exams for glasses are done at the 'ottica' (optician shop)."},

    {type:"teach", trg:"il/la dentista", src:"the dentist", pos:"noun", gender:"m",
     note:"Masculine/feminine: il/la dentista. -ista ending.\nFrom 'dente' (tooth).",
     example:"A: Devo andare dal dentista. Ho mal di denti.\nB: Il mio dentista e in via Roma.",
     exampleSrc:"A: I need to go to the dentist. I have a toothache.\nB: My dentist is on Via Roma.",
     funFact:"Dental care in Italy is largely private. The public system covers only basic extractions and emergency care. A routine cleaning ('pulizia dei denti') costs 80-150 euros privately. Many Italians travel to Croatia or Albania for cheaper dental work, a practice called 'turismo dentale.'"},

    {type:"teach", trg:"la visita medica", src:"the medical examination", pos:"noun", gender:"f",
     note:"Feminine. 'Visita di controllo' = check-up.\n'Prenotare una visita' = to book an appointment.",
     example:"A: Ho prenotato una visita medica per lunedi.\nB: Dallo specialista o dal medico di base?",
     exampleSrc:"A: I booked a medical examination for Monday.\nB: With the specialist or the GP?",
     funFact:"In Italian, 'visita' specifically means a medical examination (not just a visit). 'Visita di controllo' is a follow-up check. 'Prima visita' is the first consultation. The word 'appuntamento' (appointment) is more general. You 'prenoti una visita' (book an examination) but 'prendi un appuntamento' (make an appointment)."},

    {type:"teach", trg:"il ticket sanitario", src:"the healthcare co-pay", pos:"noun", gender:"m",
     note:"Masculine. The patient's share of public healthcare costs.\nExemptions exist for income, age, and chronic conditions.",
     example:"A: Quanto costa la visita?\nB: Solo il ticket, circa trentasei euro.",
     exampleSrc:"A: How much does the visit cost?\nB: Just the co-pay, about thirty-six euros.",
     funFact:"The 'ticket sanitario' is a small fee (typically 36-50 euros) for public specialist visits and tests. Low-income citizens, children under 6, seniors over 65, pregnant women, and people with chronic diseases are exempt ('esenti dal ticket'). This system keeps healthcare affordable."},

    // Quiz steps
    {type:"mc", q:"What is 'l'impegnativa' in Italian healthcare?",
     opts:["A medical referral from your GP to a specialist","The medical insurance card","A prescription for medication","The hospital admission form"],
     ans:"A medical referral from your GP to a specialist",
     hint:"Your 'medico di base' writes this document so you can book a s... appointment at the public rate."},

    {type:"fb", s:"Devo andare dal {1}. Mi fa male il ginocchio.",
     a:["ortopedico"],
     opts:["ortopedico","cardiologo","dermatologo","dentista"],
     hint:"This specialist treats bones and joints. The name comes from Greek words meaning 'straight' and 'child.'",
     sSrc:"I need to go to the {1}. My knee hurts."},

    {type:"match", pairs:[
      {trg:"il cardiologo", src:"the cardiologist"},
      {trg:"il dermatologo", src:"the dermatologist"},
      {trg:"l'ortopedico", src:"the orthopedist"},
      {trg:"l'oculista", src:"the eye doctor"},
      {trg:"il/la dentista", src:"the dentist"}
    ]},

    {type:"mc", q:"What is the 'CUP' in Italy?",
     opts:["A private insurance company","A centralized booking system for public healthcare","A chain of private medical clinics","A medical degree certification board"],
     ans:"A centralized booking system for public healthcare",
     hint:"Centro Unico di Prenotazione. You call or go online to book specialist appointments in the p... s...."},

    {type:"fb", s:"La visita costa solo il {1}, circa trentasei euro.",
     a:["ticket"],
     opts:["ticket","canone","preventivo","contratto"],
     hint:"This is the small co-pay patients contribute for public healthcare services. Many people are exempt.",
     sSrc:"The visit costs only the {1}, about thirty-six euros."},

    {type:"mc", q:"Why is dental care mostly private in Italy?",
     opts:["Italian law prohibits public dental clinics","Dentists are not recognized as medical professionals","The public system only covers basic extractions and emergencies","Dental schools do not exist in Italy"],
     ans:"The public system only covers basic extractions and emergencies",
     hint:"Routine cleanings and most dental work must be paid for privately, costing 80-150 euros or more."},

    {type:"fb", s:"Ho prenotato una {1} medica per lunedi.",
     a:["visita"],
     opts:["visita","impegnativa","ricetta","fattura"],
     hint:"In Italian, this word specifically means a medical examination, not just any visit.",
     sSrc:"I booked a medical {1} for Monday."},

    {type:"mc", q:"What happens if you see a specialist without an 'impegnativa'?",
     opts:["The specialist reports you to the authorities","The appointment is cancelled immediately","You receive the same public healthcare rate","You must pay the full private price"],
     ans:"You must pay the full private price",
     hint:"The referral unlocks the reduced public rate. Without it, you go 'privatamente' and p... much more."}
  ]
};
export default LESSON_4;
