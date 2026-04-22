// Batch 6. Unit 09 extra lesson. Il corpo e la salute: At the Pharmacy & Doctor
const BATCH6_L1 = {id:"itv2_u09l_b6_1", title:"In farmacia e dal dottore", icon:"\u{1F48A}", xp:15, board:true, steps:[
{type:"intro", title:"In farmacia e dal dottore",
 desc:"Learn essential vocabulary for visiting the pharmacy and doctor in Italy, describing symptoms, and understanding prescriptions.",
 goals:["Describe symptoms to a pharmacist","Understand basic medical instructions","Ask about medications"]},

{type:"teach", trg:"la farmacia", src:"the pharmacy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le farmacie.\nMarked by a green cross sign. Open on rotation at night.",
 example:"A: C'e una farmacia aperta qui vicino?\nB: Si, in piazza c'è la farmacia di turno.",
 exampleSrc:"A: Is there an open pharmacy nearby?\nB: Yes, in the square there is the on-duty pharmacy.",
 funFact:"Italian pharmacies display a green cross and always have one 'di turno' (on duty) open at night and on holidays. They also sell cosmetics and health products."},

{type:"teach", trg:"la ricetta medica", src:"the prescription", pos:"noun", gender:"f",
 note:"Feminine noun. 'Ricetta' also means recipe (in cooking).\nRequired for many medications.",
 example:"A: Ha la ricetta medica?\nB: Si, ecco. Me l'ha data il dottore.",
 exampleSrc:"A: Do you have the prescription?\nB: Yes, here. The doctor gave it to me.",
 funFact:"Italian uses 'ricetta' for both a doctor's prescription and a cooking recipe. Context makes it clear: 'ricetta medica' (medical) vs. 'ricetta di cucina' (cooking)."},

{type:"teach", trg:"la pastiglia", src:"the tablet / pill", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pastiglie.\nAlso 'compressa.' Small, solid dose of medicine.",
 example:"A: Prenda due pastiglie dopo i pasti.\nB: Mattina e sera?",
 exampleSrc:"A: Take two tablets after meals.\nB: Morning and evening?",
 funFact:"'Pastiglia' comes from 'pasta' (paste/dough), referring to the compressed form. 'Pastiglia per la tosse' (cough drop) is a common over-the-counter item."},

{type:"teach", trg:"lo sciroppo", src:"the syrup (medicine)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli sciroppi.\nLiquid medicine, often for coughs.",
 example:"A: Prenda un cucchiaio di sciroppo tre volte al giorno.\nB: Prima o dopo i pasti?",
 exampleSrc:"A: Take a spoonful of syrup three times a day.\nB: Before or after meals?",
 funFact:"From Arabic 'sharab' (drink) via Latin 'sirupus.' The same Arabic root gave English 'sherbet' and 'sorbet.'"},

{type:"teach", trg:"la pomata", src:"the ointment / cream", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pomate.\nTopical medication applied to skin.",
 example:"A: Applichi la pomata due volte al giorno.\nB: Sulla ferita?",
 exampleSrc:"A: Apply the ointment twice a day.\nB: On the wound?",
 funFact:"From Latin 'pomatum' (made with apples), because early ointments used apple pulp as a base. Now purely a medical/cosmetic term."},

{type:"teach", trg:"il sintomo", src:"the symptom", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sintomi.\nA sign of illness or disease.",
 example:"A: Quali sono i sintomi?\nB: Febbre, tosse e mal di gola.",
 exampleSrc:"A: What are the symptoms?\nB: Fever, cough, and sore throat.",
 funFact:"From Greek 'symptoma' (occurrence/accident). In Italian, 'sintomo' is also used figuratively: 'sintomo di un problema' (sign of a problem)."},

{type:"teach", trg:"la visita medica", src:"the medical examination", pos:"noun", gender:"f",
 note:"Feminine noun. 'Visita' (visit) + 'medica' (medical).\nA doctor's checkup.",
 example:"A: Devo prenotare una visita medica.\nB: Con quale specialista?",
 exampleSrc:"A: I need to book a medical examination.\nB: With which specialist?",
 funFact:"Italy has a public healthcare system (SSN). A 'visita medica' through the public system is very affordable but may involve long waiting times."},

{type:"teach", trg:"il cerotto", src:"the bandage / Band-Aid", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cerotti.\nAdhesive bandage for small wounds.",
 example:"A: Mi sono tagliato. Hai un cerotto?\nB: Si, eccolo. E grande abbastanza?",
 exampleSrc:"A: I cut myself. Do you have a bandage?\nB: Yes, here. Is it big enough?",
 funFact:"'Cerotto' originally meant a medicated plaster. The word comes from Latin 'ceratum' (waxed). Now it is the generic term for any adhesive bandage."},

{type:"teach", trg:"la ferita", src:"the wound / injury", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ferite.\nFrom 'ferire' (to wound/injure).",
 example:"A: La ferita e profonda?\nB: No, e solo un graffio.",
 exampleSrc:"A: Is the wound deep?\nB: No, it is just a scratch.",
 funFact:"'Ferita' is used both physically and emotionally. 'Ferita d'amore' (wound of love) is a poetic expression found throughout Italian literature."},

{type:"teach", trg:"guarire", src:"to heal / to recover", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: guarisco, guarisci, guarisce.\nUsed for illness and wounds.",
 example:"A: Quanto tempo ci vuole per guarire?\nB: Circa due settimane.",
 exampleSrc:"A: How long does it take to heal?\nB: About two weeks.",
 funFact:"'Guarire' comes from Germanic 'warjan' (to protect). The expression 'il tempo guarisce tutto' (time heals everything) is a common Italian saying."},

{type:"teach", trg:"il medico di base", src:"the family doctor / GP", pos:"noun", gender:"m",
 note:"Masculine noun. Also called 'medico di famiglia.'\nThe first point of contact in the Italian health system.",
 example:"A: Chi e il tuo medico di base?\nB: La dottoressa Bianchi, in via Verdi.",
 exampleSrc:"A: Who is your family doctor?\nB: Doctor Bianchi, on Verdi street.",
 funFact:"Every Italian resident is assigned a 'medico di base' (GP) for free. Changing your GP is possible but requires paperwork at the local health authority."},

{type:"teach", trg:"l'allergia", src:"the allergy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le allergie.\nFrom Greek 'allos' (other) + 'ergon' (work).",
 example:"A: Ho un'allergia al polline.\nB: Prendi un antistaminico.",
 exampleSrc:"A: I have a pollen allergy.\nB: Take an antihistamine.",
 funFact:"Italy's diverse plant life means allergies are very common, especially in spring. 'Allergia' is also used figuratively: 'ho un'allergia per la matematica' (I am allergic to math)."},

{type:"teach", trg:"la puntura", src:"the injection / sting", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le punture.\nBoth a medical injection and an insect sting.",
 example:"A: Ha paura delle punture?\nB: Un po', ma so che è necessaria.",
 exampleSrc:"A: Are you afraid of injections?\nB: A little, but I know it is necessary.",
 funFact:"'Puntura' covers both needles and bug bites. 'Puntura di zanzara' (mosquito bite) and 'puntura di vaccino' (vaccine shot) use the same word."},

{type:"teach", trg:"il termometro", src:"the thermometer", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i termometri.\nFrom Greek 'thermos' (heat) + 'metron' (measure).",
 example:"A: Hai il termometro? Penso di avere la febbre.\nB: Eccolo. Mettilo sotto il braccio.",
 exampleSrc:"A: Do you have the thermometer? I think I have a fever.\nB: Here. Put it under your arm.",
 funFact:"Italians traditionally measure temperature under the arm (ascellare), adding 0.5 degrees for accuracy. Normal is around 36.5 degrees Celsius."},

{type:"mc", q:"Cosa serve per comprare certi farmaci in Italia?",
 opts:["la ricetta medica","il cerotto","il termometro","la pomata"],
 ans:"la ricetta medica",
 hint:"An official document from the doctor authorizing the pharmacist to give you medicine."},

{type:"fb", s:"Applichi la {1} sulla ferita due volte al giorno.", a:["pomata"],
 opts:["pomata","pastiglia","puntura","ricetta"],
 hint:"A topical cream or ointment applied directly to the skin.",
 sSrc:"Apply the {1} on the wound twice a day."},

{type:"match", pairs:[
 {trg:"la pastiglia", src:"tablet"},
 {trg:"lo sciroppo", src:"syrup"},
 {trg:"il cerotto", src:"bandage"},
 {trg:"la puntura", src:"injection"}
]},

{type:"mc", q:"Chi e il 'medico di base'?",
 opts:["An emergency doctor","Your assigned family doctor","A hospital surgeon","A pharmacist"],
 ans:"Your assigned family doctor",
 hint:"The general practitioner every Italian resident is a... for free."},

{type:"fb", s:"Quanto tempo ci vuole per {1} dall'influenza?", a:["guarire"],
 opts:["guarire","ferire","visitare","puntura"],
 hint:"The verb meaning to heal or recover from an illness.",
 sSrc:"How long does it take to {1} from the flu?"},

{type:"mc", q:"Quali sono i sintomi tipici del raffreddore?",
 opts:["Ferita e cerotto","Visita medica e ricetta","Tosse, naso chiuso e stanchezza","Allergia e puntura"],
 ans:"Tosse, naso chiuso e stanchezza",
 hint:"Common cold symptoms: cough, stuffy nose, and tiredness."},

{type:"fb", s:"Ho un'{1} al polline. In primavera sto male.", a:["allergia"],
 opts:["allergia","ferita","puntura","pomata"],
 hint:"An adverse reaction of the immune system to substances like pollen.",
 sSrc:"I have an {1} to pollen. In spring I feel unwell."},

{type:"match", pairs:[
 {trg:"guarire", src:"to heal"},
 {trg:"il sintomo", src:"symptom"},
 {trg:"la ferita", src:"wound"},
 {trg:"il termometro", src:"thermometer"}
]}
,{type:"match",pairs:[{trg:"la farmacia",src:"the pharmacy"},{trg:"il medico di base",src:"the family doctor / GP"}]}]};
export default BATCH6_L1;
