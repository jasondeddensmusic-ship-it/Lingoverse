// Batch 3. Unit 09, Lesson 1: In farmacia (At the Pharmacy)
const BATCH3_U09_L1 = {
  id:"itv2_u09l_b3_1", title:"In farmacia", icon:"\uD83D\uDC8A", xp:15, board:true,
  steps:[
    {type:"intro", title:"In farmacia",
     desc:"Learn vocabulary for visiting an Italian pharmacy. Pharmacists in Italy are trusted health advisors who can recommend treatments for common ailments.",
     goals:["Name common pharmacy items and medicines","Ask for health advice at a pharmacy","Describe symptoms to a pharmacist"]},

    {type:"teach", trg:"la pastiglia", src:"the tablet / pill", pos:"noun", gender:"f",
     note:"Feminine. Synonym: la compressa.\n'Prendere una pastiglia' = to take a tablet.",
     example:"A: Quante pastiglie devo prendere?\nB: Due pastiglie, tre volte al giorno.",
     exampleSrc:"A: How many tablets should I take?\nB: Two tablets, three times a day.",
     funFact:"'Pastiglia' comes from 'pasta' (paste), because early tablets were made from pressed paste. Italian pharmacists can recommend over-the-counter medicines without a prescription. For stronger medicines, you need a 'ricetta medica' (medical prescription)."},

    {type:"teach", trg:"lo sciroppo", src:"the syrup / cough medicine", pos:"noun", gender:"m",
     note:"Masculine. From Arabic 'sharab' (drink).\n'Sciroppo per la tosse' = cough syrup.",
     example:"A: Ho la tosse da tre giorni.\nB: Le consiglio questo sciroppo.",
     exampleSrc:"A: I have had a cough for three days.\nB: I recommend this syrup.",
     funFact:"Italian pharmacies stock a wide range of syrups for different cough types: 'sciroppo per tosse secca' (dry cough) and 'sciroppo per tosse grassa' (productive cough). Many Italians still trust traditional herbal syrups alongside modern medicine."},

    {type:"teach", trg:"la crema", src:"the cream / ointment", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'chrisma' (ointment).\n'Crema solare' = sunscreen.",
     example:"A: Ha una crema per le scottature?\nB: Si, questa è molto efficace.",
     exampleSrc:"A: Do you have a cream for sunburn?\nB: Yes, this one is very effective.",
     funFact:"Italian pharmacies sell both medicinal creams and cosmetic products. The 'farmacia' is where many Italians buy their skincare. Italian pharmacy brands like Rilastil, Lierac, and Avene are respected alternatives to luxury cosmetics."},

    {type:"teach", trg:"il cerotto", src:"the bandage / plaster", pos:"noun", gender:"m",
     note:"Masculine. From 'cera' (wax), original material.\n'Mettere un cerotto' = to put on a bandage.",
     example:"A: Mi sono tagliato. Hai un cerotto?\nB: Si, eccone uno.",
     exampleSrc:"A: I cut myself. Do you have a bandage?\nB: Yes, here is one.",
     funFact:"'Cerotto' originally referred to a wax-based healing plaster used in ancient Roman medicine. Modern Italian cerotti come in all shapes and sizes. Italian pharmacies always have them behind the counter. 'Mettere un cerotto' is also used figuratively to mean 'put a quick fix on a problem.'"},

    {type:"teach", trg:"l'aspirina", src:"the aspirin", pos:"noun", gender:"f",
     note:"Feminine. The world's most famous medicine.\n'Prendere un'aspirina' = to take an aspirin.",
     example:"A: Ho mal di testa. Ho bisogno di un'aspirina.\nB: Eccola. Da prendere dopo il pasto.",
     exampleSrc:"A: I have a headache. I need an aspirin.\nB: Here it is. Take it after a meal.",
     funFact:"While aspirin was patented by Bayer in Germany, the active ingredient (salicylic acid) was known to ancient Italians through willow bark tea. Today, aspirin remains one of the most requested medicines at Italian pharmacies, often recommended with the advice 'dopo mangiato' (after eating)."},

    {type:"teach", trg:"l'antibiotico", src:"the antibiotic", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli antibiotici.\nFrom Greek 'anti' (against) + 'bios' (life).",
     example:"A: Il dottore mi ha prescritto un antibiotico.\nB: Lo prenda per tutto il ciclo.",
     exampleSrc:"A: The doctor prescribed me an antibiotic.\nB: Take it for the full course.",
     funFact:"Italy has one of the highest antibiotic consumption rates in Europe. Doctors and pharmacists are now campaigning to reduce unnecessary prescriptions. The phrase 'resistenza antibiotica' (antibiotic resistance) has entered everyday Italian conversation as awareness grows."},

    {type:"teach", trg:"la pomata", src:"the ointment / salve", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'pomum' (fruit, for the apple-based ointments).\n'Pomata antinfiammatoria' = anti-inflammatory ointment.",
     example:"A: Mi fa male il ginocchio.\nB: Provi questa pomata antinfiammatoria.",
     exampleSrc:"A: My knee hurts.\nB: Try this anti-inflammatory ointment.",
     funFact:"Italian pharmacies are well-stocked with topical remedies. 'Pomate' for muscle pain, joint inflammation, and skin conditions are popular because Italians prefer targeted treatments over general painkillers when possible."},

    {type:"teach", trg:"il termometro", src:"the thermometer", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'thermos' (heat) + 'metron' (measure).\n'Misurare la febbre' = to take your temperature.",
     example:"A: Dove hai il termometro?\nB: Nel cassetto del bagno.",
     exampleSrc:"A: Where do you have the thermometer?\nB: In the bathroom drawer.",
     funFact:"Every Italian household has a thermometer. Italians measure temperature far more frequently than many other cultures. A mother's first response to a child feeling unwell is always 'Misura la febbre!' (Take your temperature!). Digital thermometers have replaced mercury ones since 2009."},

    {type:"teach", trg:"la puntura", src:"the injection / sting", pos:"noun", gender:"f",
     note:"Feminine. From 'pungere' (to sting, prick).\n'Fare una puntura' = to give an injection.",
     example:"A: Devo fare una puntura.\nB: Dal medico o in farmacia?",
     exampleSrc:"A: I need to get an injection.\nB: At the doctor's or at the pharmacy?",
     funFact:"Italian pharmacists are authorized to give injections. Many Italians get their flu shots and vitamin B12 injections at the local pharmacy rather than the doctor's office. This service makes the 'farmacia' an even more central part of Italian healthcare."},

    {type:"teach", trg:"la ricetta medica", src:"the medical prescription", pos:"noun", gender:"f",
     note:"Feminine. Required for prescription medicines.\n'Senza ricetta' = over-the-counter.",
     example:"A: Questo farmaco richiede la ricetta medica.\nB: Si, la ho qui.",
     exampleSrc:"A: This medicine requires a prescription.\nB: Yes, I have it here.",
     funFact:"Italian prescriptions come in three colors: white (regular), red (urgent/chronic), and green (specialist). The national health system covers most prescription costs. A 'ticket' (co-pay) is usually just a few euros. Some medicines are completely free for chronic conditions."},

    {type:"teach", trg:"il farmacista", src:"the pharmacist", pos:"noun", gender:"m",
     note:"Masculine/feminine: il/la farmacista (same form).\n-ista nouns work for both genders.",
     example:"A: Chieda consiglio al farmacista.\nB: Buona idea, sono sempre molto preparati.",
     exampleSrc:"A: Ask the pharmacist for advice.\nB: Good idea, they are always very knowledgeable.",
     funFact:"Italian pharmacists complete a five-year university degree and are highly respected healthcare professionals. They can diagnose minor conditions, recommend treatments, and measure blood pressure. Many Italians consult their pharmacist before going to a doctor for non-serious issues."},

    {type:"teach", trg:"la fascia", src:"the bandage (wrap)", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'fascia' (band, strip).\n'Fasciare' = to bandage/wrap.",
     example:"A: Mi serve una fascia per la caviglia.\nB: Elastica o rigida?",
     exampleSrc:"A: I need a bandage for my ankle.\nB: Elastic or rigid?",
     funFact:"'Fascia' is the root of 'fascismo' (fascism), named after the Roman 'fascio' (bundle of rods), a symbol of authority. In medical Italian, 'fascia' simply means a bandage wrap. 'Fasciatura' is the act of wrapping a wound or sprain."},

    {type:"teach", trg:"la farmacia di turno", src:"the duty pharmacy (open nights/holidays)", pos:"noun", gender:"f",
     note:"Feminine. 'Di turno' = on duty/shift.\nRotating system ensures 24/7 pharmacy access.",
     example:"A: Quale farmacia e di turno stasera?\nB: Quella in Piazza Garibaldi.",
     exampleSrc:"A: Which pharmacy is on duty tonight?\nB: The one in Piazza Garibaldi.",
     funFact:"Italy guarantees pharmacy access 24 hours a day through the 'turno' rotation system. A list of duty pharmacies is posted on every pharmacy door. In emergencies, you can always find an open pharmacy. The illuminated green cross sign outside marks every Italian pharmacy."},

    // Quiz steps
    {type:"mc", q:"What can Italian pharmacists do that surprises many visitors?",
     opts:["Give injections and basic diagnoses","Perform surgery for minor conditions","Write hospital admission orders","Prescribe any medication they choose"],
     ans:"Give injections and basic diagnoses",
     hint:"They have five-year degrees and can recommend treatments, measure blood pressure, and administer shots like flu vaccines."},

    {type:"fb", s:"Quante {1} devo prendere?",
     a:["pastiglie"],
     opts:["pastiglie","punture","creme","fasce"],
     hint:"These are oral tablets you swallow. The pharmacist tells you how many per day.",
     sSrc:"How many {1} should I take?"},

    {type:"match", pairs:[
      {trg:"la pastiglia", src:"the tablet"},
      {trg:"lo sciroppo", src:"the syrup"},
      {trg:"la crema", src:"the cream"},
      {trg:"il cerotto", src:"the bandage/plaster"},
      {trg:"la pomata", src:"the ointment"}
    ]},

    {type:"mc", q:"What is a 'farmacia di turno'?",
     opts:["A pharmacy that only sells vitamins","A duty pharmacy open nights and holidays","A pharmacy located in a hospital","A pharmacy offering free consultations"],
     ans:"A duty pharmacy open nights and holidays",
     hint:"The rotating system ensures 24/7 access. Check the list posted on any p... door to find tonight's o... location."},

    {type:"fb", s:"Il dottore mi ha prescritto un {1}.",
     a:["antibiotico"],
     opts:["antibiotico","cerotto","termometro","sciroppo"],
     hint:"This prescription medicine fights bacterial infections. Italy has campaigns to reduce unnecessary use of these drugs.",
     sSrc:"The doctor prescribed me an {1}."},

    {type:"mc", q:"What do the different colors of Italian prescriptions indicate?",
     opts:["White = free, red = paid, green = export","Colors have no official meaning","White = regular, red = urgent, green = specialist","They are all the same color in Italy"],
     ans:"White = regular, red = urgent, green = specialist",
     hint:"The color coding helps pharmacists process the prescription correctly and determines the level of health system coverage."},

    {type:"fb", s:"Mi serve una {1} per la caviglia.",
     a:["fascia"],
     opts:["fascia","pastiglia","crema","puntura"],
     hint:"A wrap for your injured ankle. Available in elastic or rigid versions at the pharmacy.",
     sSrc:"I need a {1} for my ankle."},

    {type:"mc", q:"Why do Italians measure temperature so frequently?",
     opts:["Italian fevers are uniquely dangerous","Doctors require daily temperature logs","Thermometers are given free by the government","It is a deeply ingrained cultural health habit"],
     ans:"It is a deeply ingrained cultural health habit",
     hint:"Every household has a thermometer. A parent's first response to any illness is always 'Misura la febbre!' (Check your temperature!)."}
  ,{type:"match",pairs:[{trg:"il termometro",src:"the thermometer"},{trg:"la puntura",src:"the injection / sting"},{trg:"la ricetta medica",src:"the medical prescription"},{trg:"il farmacista",src:"the pharmacist"},{trg:"la farmacia di turno",src:"the duty pharmacy (open nights/holidays)"}]},{type:"mc",q:"How do you say \"aspirin\" in Italian?",opts:["l'aspirina","la bicicletta","la finestra","il tavolo"],ans:"l'aspirina",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il medico mi ha dato la {1} per comprare l'antibiotico.",a:["ricetta medica"],opts:["ricetta medica","termometro","crema","cerotto"],hint:"A written authorization from a doctor needed to get certain medicines.",sSrc:"The doctor gave me the {1} to buy the antibiotic."}]
};
export default BATCH3_U09_L1;
