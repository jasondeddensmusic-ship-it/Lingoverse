// Italian V2 Unit 16. La salute avanzata (Advanced Health) (B1.2)
import BATCH2_L02 from './_batch2_u16_L02.js';
import BATCH2_L01 from './_batch2_u16_L01.js';
import EXP_L4 from './_temp_u16_expand_L01.js';import EXP_L5 from './_temp_u16_expand_L02.js';import EXP_L6 from './_temp_u16_expand_L03.js';
// CILS/CELI B1 aligned. Medical terms, specialist vocabulary, health verbs.

const UNIT_16 = {
  n:16, lang:"it", srcLang:"en", track:"v2",
  title:"La salute avanzata", sub:"Advanced Health",
  icon:"🏥", level:"B1.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u16l1", title:"Dal dottore", icon:"🩺", xp:15, board:true, steps:[
      {type:"intro", title:"Dal dottore",
       desc:"Learn medical vocabulary beyond the basics. Discuss diagnoses, treatments, and hospital visits with confidence. Essential for living in or visiting Italy.",
       goals:["Describe medical conditions and symptoms","Understand medical procedures","Navigate the Italian healthcare system"]},

      {type:"teach", trg:"l'analisi", src:"the test / analysis", pos:"noun", gender:"f",
       note:"Feminine. Invariable: singular and plural both 'le analisi.'\nFrom Greek 'analysis' (dissolving, breaking down).",
       example:"A: Il dottore ha chiesto delle analisi del sangue.\nB: Quando devi farle?",
       exampleSrc:"A: The doctor ordered some blood tests.\nB: When do you have to do them?",
       funFact:"'Analisi del sangue' (blood tests) are a routine part of Italian healthcare. The public system covers them with a small co-pay ('ticket'). Results are often available within days. Italians get regular blood tests more frequently than many other nationalities."},

      {type:"teach", trg:"la diagnosi", src:"the diagnosis", pos:"noun", gender:"f",
       note:"Feminine. Invariable: singular and plural both 'le diagnosi.'\nFrom Greek 'diagnosis' (discernment).",
       example:"A: Qual e la diagnosi?\nB: Il dottore dice che e solo un'influenza.",
       exampleSrc:"A: What is the diagnosis?\nB: The doctor says it is just the flu.",
       funFact:"Words of Greek origin ending in -i are invariable in Italian: la diagnosi, la crisi (crisis), la tesi (thesis). They do not change in the plural. This pattern helps: if a feminine noun ends in -i, it is likely invariable."},

      {type:"teach", trg:"la terapia", src:"the therapy / treatment", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'therapeia' (healing, service).\n'Seguire una terapia' = to follow a treatment.",
       example:"A: Che terapia ti ha dato il medico?\nB: Antibiotici per una settimana.",
       exampleSrc:"A: What treatment did the doctor give you?\nB: Antibiotics for a week.",
       funFact:"Italy has a strong tradition of thermal therapy ('terme'). Towns like Montecatini, Fiuggi, and Saturnia have been spa centers since Roman times. The national health service even covers some thermal treatments with a doctor's prescription."},

      {type:"teach", trg:"l'intervento", src:"the surgery / operation", pos:"noun", gender:"m",
       note:"Masculine. 'Intervento chirurgico' = surgical operation.\nAlso means 'intervention' or 'speech' in other contexts.",
       example:"A: Mia nonna ha avuto un intervento al ginocchio.\nB: Come sta adesso?",
       exampleSrc:"A: My grandmother had knee surgery.\nB: How is she now?",
       funFact:"'Intervento' is context-dependent. In a hospital: surgery. In a meeting: a speech or contribution. In politics: an intervention. 'Intervento chirurgico' (surgical intervention) is the full medical term. Italy's public hospitals perform major surgeries free of charge."},

      {type:"teach", trg:"il ricovero", src:"the hospitalization", pos:"noun", gender:"m",
       note:"Masculine. From 'ricoverare' (to admit to hospital).\n'Essere ricoverato' = to be hospitalized.",
       example:"A: Il ricovero e durato una settimana.\nB: Meno male che adesso sta meglio.",
       exampleSrc:"A: The hospitalization lasted a week.\nB: Thank goodness he is better now.",
       funFact:"Italian public hospitals provide free hospitalization for citizens and residents. The rooms may be shared (2-4 beds), but medical care is the same quality. Private clinics ('cliniche private') offer single rooms and shorter wait times but at personal cost."},

      {type:"teach", trg:"il pronto soccorso", src:"the emergency room", pos:"noun", gender:"m",
       note:"Masculine. Literally 'ready aid.' The ER in Italian hospitals.\n'Andare al pronto soccorso' = to go to the ER.",
       example:"A: Mi sono rotto il braccio!\nB: Andiamo subito al pronto soccorso!",
       exampleSrc:"A: I broke my arm!\nB: Let's go to the emergency room right away!",
       funFact:"Italian ERs use a color-coded triage system: red (immediate danger), yellow (urgent), green (minor), white (non-urgent). Wait times for green and white codes can be very long. The ER is free, but non-urgent visits may incur a fee to discourage misuse."},

      {type:"teach", trg:"la ricetta", src:"the prescription", pos:"noun", gender:"f",
       note:"Feminine. Also means 'recipe' (cooking). Context determines meaning.\nFrom Latin 'recepta' (things received).",
       example:"A: Il dottore mi ha dato una ricetta.\nB: Vai in farmacia a prendere le medicine.",
       exampleSrc:"A: The doctor gave me a prescription.\nB: Go to the pharmacy to get the medicine.",
       funFact:"'Ricetta' means both 'prescription' and 'cooking recipe.' The double meaning exists because both are instructions for combining ingredients. Italian prescriptions from public doctors ('ricetta rossa') are subsidized. Private prescriptions ('ricetta bianca') cost full price."},

      {type:"teach", trg:"il sintomo", src:"the symptom", pos:"noun", gender:"m",
       note:"Masculine. Plural: i sintomi.\nFrom Greek 'symptoma' (happening, occurrence).",
       example:"A: Quali sono i sintomi?\nB: Febbre alta, tosse e mal di testa.",
       exampleSrc:"A: What are the symptoms?\nB: High fever, cough, and headache.",
       funFact:"Italian doctors ask 'Che sintomi ha?' (What symptoms do you have?) or 'Come si sente?' (How do you feel?). Describing symptoms clearly is essential. Italian medical terminology borrows heavily from Greek and Latin, making many terms recognizable to English speakers."},

      // Quiz steps
      {type:"mc", q:"What does 'il pronto soccorso' mean?",
       opts:["The emergency room","The pharmacy","The waiting room","The ambulance"],
       ans:"The emergency room",
       hint:"Literally 'ready aid.' This is the hospital department for emergencies, using a color-coded triage system."},

      {type:"fb", s:"Il dottore ha chiesto delle {1} del sangue.",
       a:["analisi"],
       opts:["analisi","diagnosi","terapia","ricetta"],
       hint:"The doctor wants to check your blood. This word means 'tests' and is invariable in plural.",
       sSrc:"The doctor ordered some blood {1}."},

      {type:"match", pairs:[
        {trg:"la diagnosi", src:"the diagnosis"},
        {trg:"la terapia", src:"the treatment"},
        {trg:"l'intervento", src:"the surgery"},
        {trg:"il ricovero", src:"the hospitalization"},
        {trg:"la ricetta", src:"the prescription"}
      ]},

      {type:"mc", q:"What does 'la ricetta' mean in a medical context?",
       opts:["A recipe","A prescription","A receipt","A bill"],
       ans:"A prescription",
       hint:"This word has two meanings: one medical (from the doctor) and one culinary (for cooking). Same word, different context."},

      {type:"fb", s:"Il {1} e durato una settimana in ospedale.",
       a:["ricovero"],
       opts:["ricovero","intervento","sintomo","pronto soccorso"],
       hint:"The patient stayed in the hospital for a week. This noun describes the period of hospital admission.",
       sSrc:"The {1} lasted a week in hospital."},

      {type:"mc", q:"Which Greek-origin words are invariable in Italian (same singular and plural)?",
       opts:["la terapia, la farmacia, la malattia","il sintomo, il dottore, il medico","la diagnosi, l'analisi, la crisi","l'ospedale, il ricovero, l'intervento"],
       ans:"la diagnosi, l'analisi, la crisi",
       hint:"Feminine nouns of Greek origin ending in -i do not change in the plural. The article changes: la > le."},

      {type:"fb", s:"Quali sono i {1}? Febbre, tosse e mal di testa.",
       a:["sintomi"],
       opts:["sintomi","analisi","interventi","ricoveri"],
       hint:"The doctor asks what physical signs of illness you are experiencing. From Greek 'symptoma.'",
       sSrc:"What are the {1}? Fever, cough, and headache."},

      {type:"mc", q:"What color means 'immediate danger' in Italian ER triage?",
       opts:["White (bianco)","Yellow (giallo)","Green (verde)","Red (rosso)"],
       ans:"Red (rosso)",
       hint:"The triage system goes from most urgent to least: r..., yellow, green, white. R... means life-threatening."}
    ]},

    {id:"itv2_u16l2", title:"Malattie e infortuni", icon:"🤕", xp:15, board:true, steps:[
      {type:"intro", title:"Malattie e infortuni",
       desc:"Learn specific medical conditions: allergies, fractures, infections, and inflammations. These terms help you communicate clearly at the doctor or hospital.",
       goals:["Name common medical conditions","Describe injuries and ailments","Communicate health issues to doctors"]},

      {type:"teach", trg:"l'allergia", src:"the allergy", pos:"noun", gender:"f",
       note:"Feminine. Plural: le allergie. 'Essere allergico a' = to be allergic to.\nFrom Greek 'allos' (other) + 'ergon' (work).",
       example:"A: Hai qualche allergia?\nB: Si, sono allergico al polline.",
       exampleSrc:"A: Do you have any allergies?\nB: Yes, I am allergic to pollen.",
       funFact:"Italy has high allergy rates due to its diverse plant life. Cypress pollen is a major allergen in central Italy, peaking in February-March. Italian doctors always ask about allergies ('Ha allergie?') before prescribing medication."},

      {type:"teach", trg:"la frattura", src:"the fracture / break", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'fractura' (a break).\n'Frattura composta' = simple fracture. 'Frattura scomposta' = displaced.",
       example:"A: E una frattura?\nB: Si, deve portare il gesso per sei settimane.",
       exampleSrc:"A: Is it a fracture?\nB: Yes, you need to wear a cast for six weeks.",
       funFact:"'Il gesso' means both 'plaster/chalk' and 'cast' (for fractures). When Italians say 'portare il gesso,' they mean wearing a plaster cast. X-rays are called 'radiografie' or simply 'lastre.' The ER handles fractures with minimal wait time (yellow code)."},

      {type:"teach", trg:"l'infezione", src:"the infection", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'infectio' (contamination).\n'Infezione batterica' = bacterial. 'Infezione virale' = viral.",
       example:"A: Il dottore dice che ho un'infezione.\nB: Batterica o virale?",
       exampleSrc:"A: The doctor says I have an infection.\nB: Bacterial or viral?",
       funFact:"Italian doctors distinguish carefully between bacterial and viral infections. Antibiotics (antibiotici) are only prescribed for bacterial infections. Italy has worked to reduce antibiotic overuse, which was historically higher than the European average."},

      {type:"teach", trg:"l'infiammazione", src:"the inflammation", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'inflammatio' (setting on fire).\n'Anti-infiammatorio' = anti-inflammatory.",
       example:"A: Ho un'infiammazione alla gola.\nB: Prendi un anti-infiammatorio.",
       exampleSrc:"A: I have a throat inflammation.\nB: Take an anti-inflammatory.",
       funFact:"Italians frequently use the word 'infiammazione' for any redness, swelling, or irritation. 'Antinfiammatorio' (anti-inflammatory) is one of the most commonly purchased medications. Ibuprofen is sold under various brand names, with Moment and Brufen being the most popular."},

      {type:"teach", trg:"la febbre", src:"the fever", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'febris' (fever).\n'Avere la febbre' = to have a fever. 'Misurare la febbre' = to take temperature.",
       example:"A: Hai la febbre?\nB: Si, trentotto e cinque.",
       exampleSrc:"A: Do you have a fever?\nB: Yes, thirty-eight point five.",
       funFact:"Italy uses Celsius. Normal body temperature is 36.5-37 degrees. Anything above 37.5 is considered a fever. Italians say the temperature as a number: 'Ho trentotto e mezzo' (I have 38.5). Above 39 degrees is considered high and warrants medical attention."},

      {type:"teach", trg:"la ferita", src:"the wound / injury", pos:"noun", gender:"f",
       note:"Feminine. From 'ferire' (to wound, to injure).\n'Ferita superficiale' = superficial wound. 'Ferita profonda' = deep wound.",
       example:"A: La ferita e profonda?\nB: No, e solo un graffio. Metti un cerotto.",
       exampleSrc:"A: Is the wound deep?\nB: No, it is just a scratch. Put on a bandaid.",
       funFact:"'Cerotto' (bandaid/plaster) is named after the Latin 'ceratum' (waxed cloth). Italian pharmacies sell a wide range of wound care products. Every Italian household has a 'cassetta del pronto soccorso' (first aid kit), though its contents vary wildly."},

      {type:"teach", trg:"il dolore", src:"the pain", pos:"noun", gender:"m",
       note:"Masculine. Plural: i dolori. From Latin 'dolor' (pain, grief).\nAlso means emotional pain or sorrow.",
       example:"A: Dove sente il dolore?\nB: Qui, al ginocchio destro.",
       exampleSrc:"A: Where do you feel the pain?\nB: Here, in my right knee.",
       funFact:"Italian has a pain scale vocabulary: 'dolore lieve' (mild), 'dolore moderato' (moderate), 'dolore forte/intenso' (severe). The word 'dolore' also means emotional suffering. 'Il Dolore' is a famous poem collection by Giuseppe Ungaretti about war grief."},

      {type:"teach", trg:"il farmaco", src:"the medicine / drug", pos:"noun", gender:"m",
       note:"Masculine. Plural: i farmaci. From Greek 'pharmakon' (remedy).\nMore formal than 'la medicina.'",
       example:"A: Che farmaci prendi?\nB: Solo un antidolorifico per il mal di schiena.",
       exampleSrc:"A: What medicines do you take?\nB: Just a painkiller for my back pain.",
       funFact:"Italian pharmacies ('farmacie') are highly regulated. Pharmacists in Italy have significant medical authority and can recommend treatments for minor ailments without a doctor's visit. Night pharmacies ('farmacie di turno') rotate coverage so one is always open."},

      // Quiz steps
      {type:"mc", q:"What does 'l'allergia' mean?",
       opts:["The allergy","The surgery","The diagnosis","The cure"],
       ans:"The allergy",
       hint:"From Greek 'allos' (other) + 'ergon' (work). An abnormal reaction to substances like pollen or food."},

      {type:"fb", s:"E una {1}. Devi portare il gesso per sei settimane.",
       a:["frattura"],
       opts:["frattura","ferita","infezione","allergia"],
       hint:"The bone is broken. A plaster cast is needed. This word means a break in the bone.",
       sSrc:"It is a {1}. You need to wear a cast for six weeks."},

      {type:"match", pairs:[
        {trg:"l'allergia", src:"the allergy"},
        {trg:"la frattura", src:"the fracture"},
        {trg:"l'infezione", src:"the infection"},
        {trg:"la febbre", src:"the fever"},
        {trg:"il dolore", src:"the pain"}
      ]},

      {type:"mc", q:"What temperature scale does Italy use for body temperature?",
       opts:["Fahrenheit (98.6 is normal)","Celsius (37 is normal)","Kelvin","Rankine"],
       ans:"Celsius (37 is normal)",
       hint:"When an Italian says 'Ho trentotto e mezzo,' they mean 38.5 degrees on this scale."},

      {type:"fb", s:"Ho un'{1} alla gola. Mi fa male.",
       a:["infiammazione"],
       opts:["infiammazione","infezione","allergia","analisi"],
       hint:"Your throat is red and swollen. This condition involves swelling and irritation, not bacteria.",
       sSrc:"I have a throat {1}. It hurts."},

      {type:"mc", q:"What does 'il farmaco' mean?",
       opts:["The pharmacist","The pharmacy","The medicine / drug","The farm"],
       ans:"The medicine / drug",
       hint:"From Greek 'pharmakon' (remedy). This is the medication itself, not the store where you buy it."},

      {type:"fb", s:"Dove sente il {1}?",
       a:["dolore"],
       opts:["dolore","farmaco","sintomo","ricovero"],
       hint:"The doctor asks where it hurts. This word describes the physical sensation of pain.",
       sSrc:"Where do you feel the {1}?"},

      {type:"mc", q:"What is 'la ferita'?",
       opts:["A prescription","A fever","A fracture","A wound / injury"],
       ans:"A wound / injury",
       hint:"From 'ferire' (to w...). It can be superficial (a scratch) or deep (needing stitches)."}
    ]},

    {id:"itv2_u16l3", title:"Guarire e curarsi", icon:"💊", xp:15, board:true, steps:[
      {type:"intro", title:"Guarire e curarsi",
       desc:"Learn verbs for healing, getting worse, and medical actions. These verbs help you describe the progress of an illness and discuss treatments.",
       goals:["Use verbs for healing and worsening","Describe medical actions and procedures","Talk about recovery and improvement"]},

      {type:"teach", trg:"guarire", src:"to heal / to recover", pos:"verb", gender:null,
       note:"Regular -ire verb with -isc-. 'Guarisco' = I am healing.\nAlso transitive: 'La medicina guarisce il paziente.'",
       example:"A: Come stai? Sei guarito?\nB: Si, finalmente sono guarito!",
       exampleSrc:"A: How are you? Have you recovered?\nB: Yes, I have finally recovered!",
       funFact:"'Guarire' works both ways: intransitive ('Il paziente guarisce,' the patient heals) and transitive ('Il medico guarisce il paziente,' the doctor heals the patient). The past participle 'guarito' uses 'essere' when intransitive: 'Sono guarito' (I have healed)."},

      {type:"teach", trg:"peggiorare", src:"to worsen / to get worse", pos:"verb", gender:null,
       note:"Regular -are verb. From 'peggiore' (worse).\nOpposite: migliorare (to improve).",
       example:"A: La situazione e peggiorata.\nB: Dobbiamo chiamare il dottore subito.",
       exampleSrc:"A: The situation has worsened.\nB: We must call the doctor right away.",
       funFact:"'Peggio' (worse, adverb) and 'peggiore' (worse, adjective) come from Latin 'peior.' The verb 'peggiorare' adds the -are ending. Its opposite 'migliorare' (to improve) follows the same pattern from 'migliore' (better). These pairs are essential for describing health changes."},

      {type:"teach", trg:"migliorare", src:"to improve / to get better", pos:"verb", gender:null,
       note:"Regular -are verb. From 'migliore' (better).\nOpposite: peggiorare (to worsen).",
       example:"A: Come sta il paziente?\nB: Sta migliorando giorno dopo giorno.",
       exampleSrc:"A: How is the patient?\nB: He is improving day by day.",
       funFact:"'Migliorare' comes from Latin 'meliorare' (to make better), from 'melior' (better). The related adjective 'migliore' is the comparative form of 'buono' (good). 'Il miglioramento' (the improvement) is the noun. Italian doctors often say 'Sta migliorando' (he/she is improving) to reassure families."},

      {type:"teach", trg:"operare", src:"to operate (surgery)", pos:"verb", gender:null,
       note:"Regular -are verb. 'Essere operato' = to have surgery.\n'Sala operatoria' = operating room.",
       example:"A: Lo hanno operato ieri mattina.\nB: Com'e andato l'intervento?",
       exampleSrc:"A: They operated on him yesterday morning.\nB: How did the surgery go?",
       funFact:"'Operare' in a medical context always means surgical intervention. The passive form is common: 'E stato operato al cuore' (He was operated on the heart). The 'sala operatoria' (operating room) literally means 'operating room.' Italian hospitals are generally well-equipped for surgery."},

      {type:"teach", trg:"prescrivere", src:"to prescribe", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: prescritto.\nFrom Latin 'praescribere' (to write before).",
       example:"A: Il dottore mi ha prescritto degli antibiotici.\nB: Per quanti giorni devi prenderli?",
       exampleSrc:"A: The doctor prescribed me antibiotics.\nB: For how many days do you have to take them?",
       funFact:"'Prescrivere' has the same Latin root as English 'prescribe.' The past participle is irregular: 'prescritto.' In Italian law, 'prescrizione' also means 'statute of limitations' (when a legal case expires). This dual meaning sometimes confuses learners."},

      {type:"teach", trg:"curare", src:"to treat / to cure", pos:"verb", gender:null,
       note:"Regular -are verb. 'Curarsi' (reflexive) = to take care of oneself.\nFrom Latin 'curare' (to take care of).",
       example:"A: Come si cura questa malattia?\nB: Con antibiotici e molto riposo.",
       exampleSrc:"A: How is this illness treated?\nB: With antibiotics and a lot of rest.",
       funFact:"'Curare' means both 'to treat' and 'to cure,' though these are different in English. 'Curarsi' (reflexive) means to look after yourself: 'Devi curarti' (You need to take care of yourself). A 'cura' is a course of treatment. The famous poison 'curare' is an unrelated word from a South American indigenous language."},

      {type:"teach", trg:"il paziente", src:"the patient", pos:"noun", gender:"m",
       note:"Masculine/feminine: il paziente / la paziente.\nAlso adjective: 'paziente' = patient (having patience).",
       example:"A: Il paziente sta meglio?\nB: Si, la cura funziona bene.",
       exampleSrc:"A: Is the patient better?\nB: Yes, the treatment is working well.",
       funFact:"'Paziente' is both a noun (patient) and an adjective (patient, having patience). Both come from Latin 'patiens' (suffering, enduring). The connection makes sense: a medical patient is someone who endures illness. The noun has the same form for masculine and feminine."},

      {type:"teach", trg:"la guarigione", src:"the recovery / healing", pos:"noun", gender:"f",
       note:"Feminine. From 'guarire' (to heal).\n'Buona guarigione!' = Get well soon!",
       example:"A: Buona guarigione!\nB: Grazie, spero di guarire presto.",
       exampleSrc:"A: Get well soon!\nB: Thanks, I hope to recover quickly.",
       funFact:"'Buona guarigione!' (Good recovery!) is the standard Italian wish for someone who is ill. It is the health equivalent of 'Buon viaggio!' (Good trip!). You can also say 'Guarisci presto!' (Heal quickly!) or 'Rimettiti presto!' (Get back on your feet soon!)."},

      // Quiz steps
      {type:"mc", q:"What does 'guarire' mean?",
       opts:["To heal and recover fully","To guard a place","To make a guarantee","To look at something"],
       ans:"To heal and recover fully",
       hint:"This -ire verb (with -isc-) describes getting well again after illness or injury."},

      {type:"fb", s:"La situazione e {1}. Chiamiamo il dottore.",
       a:["peggiorata"],
       opts:["peggiorata","migliorata","guarita","operata"],
       hint:"Things have gotten worse, not better. The opposite of 'migliorata.' From 'peggiore' (worse).",
       sSrc:"The situation has {1}. Let's call the doctor."},

      {type:"match", pairs:[
        {trg:"guarire", src:"to heal / recover"},
        {trg:"peggiorare", src:"to worsen"},
        {trg:"migliorare", src:"to improve"},
        {trg:"operare", src:"to operate"},
        {trg:"prescrivere", src:"to prescribe"}
      ]},

      {type:"mc", q:"What is the past participle of 'prescrivere'?",
       opts:["Prescritto","Prescritto","Prescrivuto","Prescrito"],
       ans:"Prescritto",
       hint:"This is an irregular past participle. Like 'scrivere' > 'scritto,' 'prescrivere' follows the same -itto pattern."},

      {type:"fb", s:"Il dottore mi ha {1} degli antibiotici.",
       a:["prescritto"],
       opts:["prescritto","curato","guarito","operato"],
       hint:"The doctor wrote a prescription for medication. This irregular past participle ends in -itto.",
       sSrc:"The doctor {1} me antibiotics."},

      {type:"mc", q:"What does 'curarsi' mean?",
       opts:["To cure other people","To become curious about things","To look after your own health","To run away quickly"],
       ans:"To look after your own health",
       hint:"The reflexive form of 'curare.' Adding '-si' turns the action inward: you treat yourself."},

      {type:"fb", s:"Come sta il {1}? Sta migliorando?",
       a:["paziente"],
       opts:["paziente","farmaco","sintomo","dolore"],
       hint:"This person is in the hospital receiving treatment. The word also means 'having patience.'",
       sSrc:"How is the {1}? Is he improving?"},

      {type:"mc", q:"What do Italians say to wish someone a speedy recovery?",
       opts:["Buona fortuna!","Buon appetito!","Buon viaggio!","Buona guarigione!"],
       ans:"Buona guarigione!",
       hint:"'G...' means 'recovery' or 'healing.' This wish follows the Italian pattern of 'Buon/B... + noun.'"}
    ]}
  ]
};
export default UNIT_16;
