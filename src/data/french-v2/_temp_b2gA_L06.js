const LESSON_6 = {
  id:"frv2_b2gA_l6", title:"Sante et medecine avancee", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sante et medecine avancee",
     desc:"Discuss health topics with advanced precision. From medical procedures to public health, build your B2 medical vocabulary.",
     goals:["Learn 14 advanced health and medical words","Discuss medical conditions and treatments","Navigate healthcare conversations confidently"]},

    {type:"teach", trg:"l'inhalation", src:"inhalation", pos:"noun", gender:"f",
     note:"Feminine noun. Breathing in, or a steam treatment.\n'Faire une inhalation' = to do a steam inhalation.",
     example:"A: Le medecin m'a conseille des inhalations.\nB: C'est efficace contre le rhume.",
     exampleSrc:"A: The doctor recommended inhalations.\nB: It's effective against colds.",
     funFact:"Home steam inhalations with essential oils remain hugely popular in France. Pharmacies sell special devices."},

    {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Difficulty digesting food.\nOften caused by eating too much or too fast.",
     example:"A: J'ai une terrible indigestion.\nB: Tu as trop mange hier soir.",
     exampleSrc:"A: I have terrible indigestion.\nB: You ate too much last night.",
     funFact:"After Christmas and New Year feasts, French pharmacies see a spike in indigestion remedies."},

    {type:"teach", trg:"la malformation", src:"the malformation", pos:"noun", gender:"f",
     note:"Feminine noun. An abnormality in structure, usually present from birth.",
     example:"A: La malformation a ete detectee par echographie.\nB: Les chirurgiens peuvent la corriger.",
     exampleSrc:"A: The malformation was detected by ultrasound.\nB: Surgeons can correct it.",
     funFact:"French prenatal care is among the world's most thorough, with mandatory ultrasounds at specific weeks."},

    {type:"teach", trg:"la mutilation", src:"the mutilation", pos:"noun", gender:"f",
     note:"Feminine noun. Deliberate damage to a body.\nA serious crime in French law.",
     example:"A: La mutilation est un crime grave.\nB: La loi la punit severement.",
     exampleSrc:"A: Mutilation is a serious crime.\nB: The law punishes it severely.",
     funFact:"France was among the first countries to criminalize all forms of body mutilation against minors."},

    {type:"teach", trg:"la paralysie", src:"paralysis", pos:"noun", gender:"f",
     note:"Feminine noun. Loss of muscle function. Also used figuratively.",
     example:"A: La paralysie l'a frappe apres l'accident.\nB: La reeducation sera longue.",
     exampleSrc:"A: Paralysis struck him after the accident.\nB: Rehabilitation will be long.",
     funFact:"Used figuratively too: 'la paralysie du systeme' means the system is frozen and unable to function."},

    {type:"mc",
     q:"Quel mot designe une anomalie de structure presente des la naissance ?",
     opts:["une malformation","une indigestion","une paralysie","une inhalation"],
     ans:"une malformation",
     hint:"Built from 'mal-' (bad) and 'formation'. An abnormality in how something developed."},

    {type:"teach", trg:"une ordonnance", src:"a prescription", pos:"noun", gender:"f",
     note:"Feminine noun. A doctor's prescription.\nAlso: a government decree or ordinance.",
     example:"A: Le medecin m'a donne une ordonnance.\nB: Tu peux aller a la pharmacie maintenant.",
     exampleSrc:"A: The doctor gave me a prescription.\nB: You can go to the pharmacy now.",
     funFact:"French pharmacies only sell medicines behind the counter. Most require an ordonnance from a doctor."},

    {type:"teach", trg:"le diagnostic", src:"the diagnosis", pos:"noun", gender:"m",
     note:"Masculine noun. The identification of a disease or condition.",
     example:"A: Le diagnostic a ete pose rapidement.\nB: Heureusement, c'est traitable.",
     exampleSrc:"A: The diagnosis was made quickly.\nB: Fortunately, it's treatable.",
     funFact:"French doctors are known for taking their time with patients. The average consultation lasts 16 minutes."},

    {type:"teach", trg:"la convalescence", src:"convalescence, recovery", pos:"noun", gender:"f",
     note:"Feminine noun. The period of recovery after illness or surgery.",
     example:"A: Sa convalescence durera six semaines.\nB: Il faut etre patient.",
     exampleSrc:"A: His convalescence will last six weeks.\nB: You need to be patient.",
     funFact:"France offers generous sick leave. Workers on convalescence receive up to 50% of salary from Social Security."},

    {type:"fb",
     s:"Le medecin m'a donne une {1} pour des antibiotiques.",
     a:["ordonnance"],
     opts:["ordonnance","inhalation","convalescence","paralysie"],
     hint:"The written document from a doctor that allows you to get medicine at a pharmacy.",
     sSrc:"The doctor gave me a {1} for antibiotics."},

    {type:"teach", trg:"le pronostic", src:"the prognosis", pos:"noun", gender:"m",
     note:"Masculine noun. A prediction about how a disease will develop.\nAlso used in sports betting.",
     example:"A: Le pronostic est favorable.\nB: Quel soulagement pour la famille.",
     exampleSrc:"A: The prognosis is favorable.\nB: What a relief for the family.",
     funFact:"French sports fans use 'pronostic' for betting predictions. 'Faire un pronostic' means to make a prediction."},

    {type:"teach", trg:"la reeducation", src:"rehabilitation, physiotherapy", pos:"noun", gender:"f",
     note:"Feminine noun. Physical therapy to restore function.\nRe- + education = re-training the body.",
     example:"A: La reeducation apres l'operation est cruciale.\nB: Il faut faire les exercices chaque jour.",
     exampleSrc:"A: Rehabilitation after the surgery is crucial.\nB: You need to do the exercises every day.",
     funFact:"France has excellent public rehabilitation centers called 'centres de reeducation fonctionnelle'."},

    {type:"teach", trg:"le symptome", src:"the symptom", pos:"noun", gender:"m",
     note:"Masculine noun. A sign of illness or disease.\nPlural: des symptomes.",
     example:"A: Quels sont vos symptomes ?\nB: J'ai de la fievre et des courbatures.",
     exampleSrc:"A: What are your symptoms?\nB: I have a fever and body aches.",
     funFact:"French doctors ask 'Depuis quand avez-vous ces symptomes?' as a standard opening question."},

    {type:"mc",
     q:"Quel mot designe la prediction sur l'evolution d'une maladie ?",
     opts:["le pronostic","le diagnostic","le symptome","l'ordonnance"],
     ans:"le pronostic",
     hint:"Not the identification of the disease, but the prediction about its future course."},

    {type:"teach", trg:"la posologie", src:"the dosage instructions", pos:"noun", gender:"f",
     note:"Feminine noun. The recommended dose and schedule for a medicine.",
     example:"A: Respectez bien la posologie indiquee.\nB: D'accord, trois fois par jour apres les repas.",
     exampleSrc:"A: Follow the dosage instructions carefully.\nB: Okay, three times a day after meals.",
     funFact:"French medicine packaging always includes a detailed 'notice' with posologie. Pharmacists explain it in person too."},

    {type:"fb",
     s:"La {1} apres sa fracture a dure trois mois.",
     a:["reeducation"],
     opts:["reeducation","convalescence","posologie","paralysie"],
     hint:"Physical therapy to restore function. Re-training the body after injury.",
     sSrc:"The {1} after his fracture lasted three months."},

    {type:"match", pairs:[
      {trg:"ordonnance", src:"prescription"},
      {trg:"diagnostic", src:"diagnosis"},
      {trg:"pronostic", src:"prognosis"},
      {trg:"symptome", src:"symptom"},
      {trg:"posologie", src:"dosage instructions"}
    ]},

    {type:"mc",
     q:"Quel mot designe la periode de repos apres une maladie ou une operation ?",
     opts:["la convalescence","la reeducation","la posologie","l'inhalation"],
     ans:"la convalescence",
     hint:"The recovery period when you are healing. Not active therapy, but rest and recuperation."}
  ]
};
export default LESSON_6;
