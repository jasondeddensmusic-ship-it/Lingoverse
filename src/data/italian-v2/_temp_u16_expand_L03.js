// Unit 16 Expansion — Lesson 6: Health Insurance
const LESSON_6 = {
  id:"itv2_u16l6", title:"L'assicurazione sanitaria", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'assicurazione sanitaria",
     desc:"Understand the Italian healthcare system: the public SSN, private insurance, and how foreigners access care. These terms are crucial for anyone living in Italy.",
     goals:["Understand the Italian public healthcare system","Compare public and private healthcare options","Navigate healthcare as a foreigner in Italy"]},

    {type:"teach", trg:"il Servizio Sanitario Nazionale", src:"the National Health Service (SSN)", pos:"noun", gender:"m",
     note:"Masculine. Abbreviated SSN. Italy's universal public healthcare.\nFounded in 1978. Covers all residents.",
     example:"A: Il Servizio Sanitario Nazionale copre questa operazione?\nB: Si, e completamente gratuita.",
     exampleSrc:"A: Does the National Health Service cover this operation?\nB: Yes, it is completely free.",
     funFact:"Italy's SSN provides universal healthcare to all legal residents. It consistently ranks among the world's best health systems by the WHO. Healthcare is managed regionally, so quality varies: northern regions like Emilia-Romagna and Lombardia often outperform southern ones."},

    {type:"teach", trg:"la tessera sanitaria", src:"the health card", pos:"noun", gender:"f",
     note:"Feminine. The Italian health card, also serves as a tax ID.\nIssued to all residents. Required for all public healthcare.",
     example:"A: Hai la tessera sanitaria?\nB: Si, eccola. Il codice fiscale e sul retro.",
     exampleSrc:"A: Do you have your health card?\nB: Yes, here it is. The tax code is on the back.",
     funFact:"The 'tessera sanitaria' is a green plastic card that every Italian resident carries. It contains the 'codice fiscale' (tax identification code), which is essential for nearly everything in Italy: healthcare, banking, contracts, and even buying a phone SIM card."},

    {type:"teach", trg:"il medico di base", src:"the general practitioner (GP)", pos:"noun", gender:"m",
     note:"Masculine. Also: 'il medico di famiglia' (family doctor).\nEvery Italian citizen is assigned one.",
     example:"A: Chi e il tuo medico di base?\nB: La dottoressa Verdi. Il suo studio e in via Mazzini.",
     exampleSrc:"A: Who is your GP?\nB: Dr. Verdi. Her office is on Via Mazzini.",
     funFact:"Every Italian citizen chooses a 'medico di base' from a list maintained by the local health authority ('ASL'). The GP provides free consultations, prescriptions, and referrals. Italians can change their GP at any time. Most GPs see patients without appointments during 'orario di ambulatorio' (office hours)."},

    {type:"teach", trg:"l'assicurazione sanitaria", src:"health insurance", pos:"noun", gender:"f",
     note:"Feminine. 'Assicurazione privata' = private insurance.\nSupplements the public system, does not replace it.",
     example:"A: Hai un'assicurazione sanitaria privata?\nB: Si, per avere visite piu rapide.",
     exampleSrc:"A: Do you have private health insurance?\nB: Yes, to get faster appointments.",
     funFact:"Private health insurance in Italy supplements the SSN. It provides faster access to specialists, private hospital rooms, and dental coverage. Many employers offer it as a benefit ('benefit aziendale'). About 15% of Italians have some form of private coverage."},

    {type:"teach", trg:"il pronto soccorso", src:"the emergency room (ER)", pos:"noun", gender:"m",
     note:"Masculine. Literally 'ready aid.'\n'Andare al pronto soccorso' = to go to the ER.",
     example:"A: Mi sono fatto male! Devo andare al pronto soccorso.\nB: Ti accompagno subito.",
     exampleSrc:"A: I hurt myself! I need to go to the ER.\nB: I will take you right away.",
     funFact:"Italian ERs are free for emergencies (red and yellow triage codes). Non-urgent visits (green and white codes) may incur a small fee to discourage misuse. Wait times for non-urgent cases can exceed 6 hours. The triage nurse assigns your color code at arrival."},

    {type:"teach", trg:"la lista d'attesa", src:"the waiting list", pos:"noun", gender:"f",
     note:"Feminine. 'Essere in lista d'attesa' = to be on the waiting list.\nA major issue in Italian public healthcare.",
     example:"A: Quanto tempo devo aspettare per la visita?\nB: La lista d'attesa e di tre mesi.",
     exampleSrc:"A: How long do I have to wait for the appointment?\nB: The waiting list is three months.",
     funFact:"Long waiting lists ('liste d'attesa') are the biggest complaint about Italian public healthcare. Specialist appointments can take months. The government has tried various reforms, but the problem persists. Many Italians pay privately ('intramoenia,' doctors seeing private patients within public hospitals) to skip the queue."},

    {type:"teach", trg:"l'esenzione", src:"the exemption", pos:"noun", gender:"f",
     note:"Feminine. 'Esenzione dal ticket' = exemption from co-pay.\nBased on income, age, or chronic conditions.",
     example:"A: Ho l'esenzione per il diabete.\nB: Quindi le visite specialistiche sono gratuite?",
     exampleSrc:"A: I have an exemption for diabetes.\nB: So specialist visits are free?",
     funFact:"Italian healthcare exemptions cover many groups: children under 6, seniors over 65 with low income, pregnant women, patients with chronic diseases ('malattie croniche'), and disabled individuals. Each exemption has a code recorded on the health card. Over 30% of Italians have some form of exemption."},

    {type:"teach", trg:"il codice fiscale", src:"the tax identification code", pos:"noun", gender:"m",
     note:"Masculine. A 16-character alphanumeric code unique to each person.\nPrinted on the tessera sanitaria.",
     example:"A: Mi serve il codice fiscale per l'iscrizione.\nB: E scritto sulla tessera sanitaria.",
     exampleSrc:"A: I need the tax code for registration.\nB: It is written on the health card.",
     funFact:"The 'codice fiscale' is generated from your name, birth date, gender, and birthplace using a specific algorithm. Foreigners receive one when they register with Italian authorities. It is needed for nearly every transaction: opening a bank account, signing a lease, buying a phone, and accessing healthcare."},

    {type:"teach", trg:"il ricovero ospedaliero", src:"hospital admission", pos:"noun", gender:"m",
     note:"Masculine. 'Essere ricoverato in ospedale' = to be admitted to hospital.\nFree through the SSN for residents.",
     example:"A: Il ricovero ospedaliero e stato di cinque giorni.\nB: Per fortuna tutto e andato bene.",
     exampleSrc:"A: The hospital stay was five days.\nB: Fortunately everything went well.",
     funFact:"Public hospital stays in Italy are free for residents. Rooms are typically shared (2-4 beds). Family members are expected to help with some basic care, like bringing food and personal items. Private rooms ('camera singola') are available for an extra fee."},

    // Quiz steps
    {type:"mc", q:"What does 'SSN' stand for in Italy?",
     opts:["Sistema Sanitario Nazionale","Servizio Sanitario Nazionale","Societa Sanitaria Nazionale","Struttura Sanitaria Nazionale"],
     ans:"Servizio Sanitario Nazionale",
     hint:"Italy's universal public healthcare 'service.' It covers all legal residents and was founded in 1978."},

    {type:"fb", s:"Hai la {1} sanitaria? Serve per la visita.",
     a:["tessera"],
     opts:["tessera","lettera","ricetta","fattura"],
     hint:"This green plastic card contains your health and tax information. Every Italian resident carries one.",
     sSrc:"Do you have your health {1}? It is needed for the visit."},

    {type:"match", pairs:[
      {trg:"la tessera sanitaria", src:"the health card"},
      {trg:"il medico di base", src:"the GP"},
      {trg:"la lista d'attesa", src:"the waiting list"},
      {trg:"l'esenzione", src:"the exemption"},
      {trg:"il codice fiscale", src:"the tax ID code"}
    ]},

    {type:"mc", q:"What is the biggest complaint about Italian public healthcare?",
     opts:["Doctors are poorly trained","Medications are too expensive","Long waiting lists for specialist appointments","Hospitals lack basic equipment"],
     ans:"Long waiting lists for specialist appointments",
     hint:"S... a... can take months. Many Italians pay privately to skip the queue."},

    {type:"fb", s:"Ho l'{1} per il diabete. Le visite sono gratuite.",
     a:["esenzione"],
     opts:["esenzione","assicurazione","impegnativa","analisi"],
     hint:"This exemption means you do not pay the co-pay. Chronic disease patients and other groups qualify.",
     sSrc:"I have the {1} for diabetes. Visits are free."},

    {type:"mc", q:"What is the 'codice fiscale' used for?",
     opts:["Only for filing tax returns once a year","Nearly every transaction: banking, leases, healthcare, and phones","Only for accessing emergency healthcare services","Only for international travel documents"],
     ans:"Nearly every transaction: banking, leases, healthcare, and phones",
     hint:"This 16-character code is essential for daily life in Italy. Foreigners receive one upon registering with authorities."},

    {type:"fb", s:"La {1} d'attesa e di tre mesi per lo specialista.",
     a:["lista"],
     opts:["lista","visita","tessera","ricetta"],
     hint:"You are waiting in a queue for a specialist appointment. This word means a list of people waiting their turn.",
     sSrc:"The waiting {1} is three months for the specialist."},

    {type:"mc", q:"Who is the 'medico di base'?",
     opts:["The hospital chief of medicine","Your assigned general practitioner","The emergency room doctor","The pharmacy advisor"],
     ans:"Your assigned general practitioner",
     hint:"Every Italian citizen chooses one from a local list. This doctor provides free consultations and referrals."}
  ]
};
export default LESSON_6;
