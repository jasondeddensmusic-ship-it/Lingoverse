// Italian V2 Unit 09 Expansion. Lesson 4: In farmacia (At the Pharmacy)
// Expands health unit with pharmacy visits, common medicines, and over-the-counter products.

const LESSON_4 = {id:"itv2_u9l4", title:"In farmacia", icon:"\uD83D\uDC8A", xp:15, board:true, steps:[
  {type:"intro", title:"In farmacia",
   desc:"Learn how to ask for medicines and health products at an Italian pharmacy. Italian pharmacists can recommend treatments for many common ailments without a doctor's visit.",
   goals:["Ask for common medicines at a pharmacy","Describe symptoms to a pharmacist","Understand dosage instructions"]},

  {type:"teach", trg:"il farmacista", src:"the pharmacist", pos:"noun", gender:"m",
   note:"Masculine. Feminine: la farmacista.\nFrom Greek 'pharmakon' (remedy). Highly trained professionals in Italy.",
   example:"A: Posso parlare con il farmacista?\nB: Certo, sono io. Come posso aiutarla?",
   exampleSrc:"A: May I speak with the pharmacist?\nB: Of course, that is me. How can I help you?",
   funFact:"Italian pharmacists complete a 5-year university degree and can diagnose minor conditions. They are often the first healthcare contact for Italians. The pharmacist can recommend medicines, measure blood pressure, and even give some injections."},

  {type:"teach", trg:"la pastiglia", src:"the tablet / pill", pos:"noun", gender:"f",
   note:"Feminine. Plural: le pastiglie.\nSynonym: la compressa. 'Pastiglia per la gola' = throat lozenge.",
   example:"A: Prenda due pastiglie al giorno.\nB: Prima o dopo i pasti?",
   exampleSrc:"A: Take two tablets per day.\nB: Before or after meals?",
   funFact:"'Pastiglia' and 'compressa' both mean tablet/pill. 'Pastiglia' is slightly more colloquial, 'compressa' more medical. 'Pastiglia' can also mean a lozenge you dissolve in your mouth. The word comes from 'pasta' (paste, dough)."},

  {type:"teach", trg:"lo sciroppo", src:"the syrup (medicine)", pos:"noun", gender:"m",
   note:"Masculine. From Arabic 'sharab' (drink).\n'Sciroppo per la tosse' = cough syrup.",
   example:"A: Ha qualcosa per la tosse?\nB: Le consiglio questo sciroppo.",
   exampleSrc:"A: Do you have something for the cough?\nB: I recommend this syrup.",
   funFact:"From Arabic 'sharab' (beverage), which entered Italian during medieval trade. The same root gave English 'syrup' and 'sherbet.' Italian cough syrups are often honey-based or herbal. Pharmacists may suggest natural alternatives before chemical ones."},

  {type:"teach", trg:"la pomata", src:"the cream / ointment", pos:"noun", gender:"f",
   note:"Feminine. Also 'la crema.' Applied to skin.\n'Pomata per le scottature' = burn cream.",
   example:"A: Mi serve una pomata per la puntura d'insetto.\nB: Questa e molto efficace.",
   exampleSrc:"A: I need a cream for the insect bite.\nB: This one is very effective.",
   funFact:"'Pomata' comes from 'pomo' (apple), because early ointments were often apple-based. Today it refers to any topical cream or ointment. Italian pharmacies stock a wide range: 'pomata antibiotica' (antibiotic cream), 'pomata antinfiammatoria' (anti-inflammatory cream)."},

  {type:"teach", trg:"la ricetta medica", src:"the medical prescription", pos:"noun", gender:"f",
   note:"Feminine. 'Medica' = medical. Without a prescription: 'senza ricetta.'\nSome medicines require 'ricetta bianca' (white prescription) or 'ricetta rossa' (red/subsidized).",
   example:"A: Questo farmaco ha bisogno di ricetta?\nB: No, e un farmaco da banco.",
   exampleSrc:"A: Does this medicine need a prescription?\nB: No, it is an over-the-counter medicine.",
   funFact:"Italy has a color-coded prescription system. 'Ricetta bianca' (white) is a regular prescription. 'Ricetta rossa' (red) is subsidized by the national health service. 'Farmaco da banco' means over-the-counter, no prescription needed."},

  {type:"teach", trg:"il farmaco da banco", src:"over-the-counter medicine", pos:"noun", gender:"m",
   note:"Masculine. 'Da banco' = from the counter.\nDoes not require a prescription. Basic painkillers, cold medicines, etc.",
   example:"A: Ho bisogno di un antidolorifico.\nB: E un farmaco da banco. Eccolo.",
   exampleSrc:"A: I need a painkiller.\nB: It is an over-the-counter medicine. Here it is.",
   funFact:"'Banco' means counter. 'Farmaco da banco' is medicine you can buy directly at the counter without a doctor's note. In Italy, even some common medicines that are over-the-counter in other countries require a prescription. Always ask."},

  {type:"teach", trg:"la dose", src:"the dose / dosage", pos:"noun", gender:"f",
   note:"Feminine. From Greek 'dosis' (giving, portion).\n'Dose giornaliera' = daily dose. 'Non superare la dose' = do not exceed the dose.",
   example:"A: Qual e la dose giusta?\nB: Una pastiglia ogni otto ore.",
   exampleSrc:"A: What is the right dose?\nB: One tablet every eight hours.",
   funFact:"From Greek 'dosis' (the act of giving). Italian medicine packaging always states: 'Non superare la dose consigliata' (Do not exceed the recommended dose). Time-based dosages: 'ogni 4 ore' (every 4 hours), 'tre volte al giorno' (three times a day)."},

  {type:"teach", trg:"l'antidolorifico", src:"the painkiller", pos:"noun", gender:"m",
   note:"Masculine. From 'anti-' (against) + 'dolorifico' (pain-causing).\nCommon ones: ibuprofene, paracetamolo.",
   example:"A: Mi serve un antidolorifico.\nB: Preferisce ibuprofene o paracetamolo?",
   exampleSrc:"A: I need a painkiller.\nB: Do you prefer ibuprofen or paracetamol?",
   funFact:"Italy's most common painkillers are paracetamolo (Tachipirina brand, equivalent to Tylenol) and ibuprofene (Moment or Brufen brands). Aspirin is called 'aspirina.' Italian pharmacists always ask about allergies before recommending a painkiller."},

  {type:"teach", trg:"la crema solare", src:"sunscreen", pos:"noun", gender:"f",
   note:"Feminine. 'Solare' = solar/sun. 'Protezione solare' = sun protection.\n'Fattore di protezione' = SPF (sun protection factor).",
   example:"A: Ha la crema solare?\nB: Che fattore di protezione vuole?",
   exampleSrc:"A: Do you have sunscreen?\nB: What SPF do you want?",
   funFact:"Italians take sun protection seriously despite their love of tanning. 'Fattore di protezione 50' (SPF 50) is standard for children and fair skin. Italian pharmacies sell premium sun care lines. Beach towns have pharmacies stocked specifically for tourist sun needs."},

  {type:"teach", trg:"il cerotto", src:"the band-aid / plaster", pos:"noun", gender:"m",
   note:"Masculine. Generic term for adhesive bandage.\nPlural: i cerotti. 'Mettere un cerotto' = to put on a band-aid.",
   example:"A: Mi sono tagliato. Ha dei cerotti?\nB: Si, ecco. Grandi o piccoli?",
   exampleSrc:"A: I cut myself. Do you have band-aids?\nB: Yes, here. Large or small?",
   funFact:"'Cerotto' originally referred to a wax-based plaster in medieval medicine. Now it means any adhesive bandage. Italian pharmacies sell individual cerotti and boxed assortments. For larger wounds, ask for 'garza' (gauze) and 'cerotto adesivo' (medical tape)."},

  // Quiz steps
  {type:"mc", q:"What can Italian pharmacists do that surprises many foreigners?",
   opts:["Diagnose minor conditions and recommend treatment","Perform surgery","Write prescriptions","Nothing special"],
   ans:"Diagnose minor conditions and recommend treatment",
   hint:"With a 5-year degree, they serve as the first healthcare contact for many common ailments."},

  {type:"fb", s:"Prenda due {1} al giorno.",
   a:["pastiglie"],
   opts:["pastiglie","sciroppi","pomate","dosi"],
   hint:"These are solid pills you swallow. The pharmacist is telling you to take two per day.",
   sSrc:"Take two {1} per day."},

  {type:"match", pairs:[
    {trg:"la pastiglia", src:"the tablet"},
    {trg:"lo sciroppo", src:"the syrup"},
    {trg:"la pomata", src:"the ointment"},
    {trg:"l'antidolorifico", src:"the painkiller"},
    {trg:"il cerotto", src:"the band-aid"}
  ]},

  {type:"mc", q:"What does 'farmaco da banco' mean?",
   opts:["Generic medicine","Over-the-counter medicine","Prescription medicine","Expired medicine"],
   ans:"Over-the-counter medicine",
   hint:"'Da banco' means from the c.... You can buy it without a doctor's prescription."},

  {type:"fb", s:"Ha qualcosa per la tosse? Un {1}, per favore.",
   a:["sciroppo"],
   opts:["sciroppo","cerotto","antidolorifico","pomata"],
   hint:"A liquid medicine you drink. From Arabic 'sharab.' Specifically for coughs.",
   sSrc:"Do you have something for the cough? A {1}, please."},

  {type:"mc", q:"What is Italy's color-coded prescription system?",
   opts:["There is no color system","Yellow for adults, pink for children","White for regular, red for subsidized prescriptions","Green for strong, blue for mild"],
   ans:"White for regular, red for subsidized prescriptions",
   hint:"'Ricetta bianca' is standard. 'Ricetta rossa' means the national health service covers part of the cost."},

  {type:"fb", s:"Non superare la {1} consigliata.",
   a:["dose"],
   opts:["dose","pastiglia","medicina","ricetta"],
   hint:"From Greek 'dosis.' This word means the measured amount of medicine you should take.",
   sSrc:"Do not exceed the recommended {1}."},

  {type:"mc", q:"What is Tachipirina in Italy?",
   opts:["An antibiotic","A cough syrup","A vitamin supplement","A popular brand of paracetamol (like Tylenol)"],
   ans:"A popular brand of paracetamol (like Tylenol)",
   hint:"Italy's most common over-the-counter fever reducer. In pharmacies you can ask for it by the commercial name or by the generic active ingredient name."},

  {type:"fb", s:"Che fattore di protezione vuole per la {1} solare?",
   a:["crema"],
   opts:["crema","pomata","dose","pastiglia"],
   hint:"You need sun protection. This product is a lotion you apply to your skin before going in the sun.",
   sSrc:"What SPF do you want for the sun{1}?"}
]};
export default LESSON_4;
