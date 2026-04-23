// Batch 3. Unit 29 Lesson (Psychology: Clinical & Disorders)
const BATCH3_L_1 = {
  id:"itv2_u29l_b3_1", title:"Psicologia clinica", icon:"🩺", xp:15, board:true,
  steps:[
    {type:"intro", title:"Psicologia clinica",
     desc:"Learn clinical psychology vocabulary, personality concepts, and research methodology terms. Essential for discussing mental health topics in Italian media and academic contexts.",
     goals:["Describe personality traits and types","Discuss clinical conditions and treatments","Understand psychology research methodology"]},

    {type:"teach", trg:"la personalita", src:"personality", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Disturbo di personalita' = personality disorder. 'Tratti di personalita' = personality traits.",
     example:"A: La personalita si forma durante l'infanzia.\nB: Ma continua a evolversi per tutta la vita.",
     exampleSrc:"A: Personality is formed during childhood.\nB: But it continues to evolve throughout life.",
     funFact:"Italian psychology distinguishes 'personalita' (the whole person) from 'carattere' (character, formed through experience) and 'temperamento' (innate disposition). Each term captures a different layer of who we are."},

    {type:"teach", trg:"il disturbo", src:"the disorder", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i disturbi.\n'Disturbo d'ansia' = anxiety disorder. 'Disturbo alimentare' = eating disorder.",
     example:"A: I disturbi alimentari sono in aumento tra gli adolescenti.\nB: La prevenzione inizia dalla scuola.",
     exampleSrc:"A: Eating disorders are increasing among adolescents.\nB: Prevention starts from school.",
     funFact:"Italy has seen a sharp rise in eating disorders, particularly among young women. 'Anoressia' and 'bulimia' entered everyday Italian vocabulary, and the country has established specialized treatment centers in major hospitals."},

    {type:"teach", trg:"la fobia", src:"the phobia", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le fobie.\n'Fobia sociale' = social phobia. 'Aracnofobia' = fear of spiders.",
     example:"A: La fobia dei ragni e molto comune.\nB: Si può trattare con la terapia dell'esposizione.",
     exampleSrc:"A: Fear of spiders is very common.\nB: It can be treated with exposure therapy.",
     funFact:"From Greek 'phobos' (fear). Italian medical terminology uses compound forms: 'claustrofobia,' 'agorafobia,' 'aracnofobia.' The productive suffix '-fobia' can create new words as needed."},

    {type:"teach", trg:"lo psicologo", src:"the psychologist", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la psicologa.\n'Psicologo clinico' = clinical psychologist.\nDistinct from 'psichiatra' (psychiatrist, a medical doctor).",
     example:"A: Lo psicologo mi ha aiutato a gestire lo stress.\nB: Le sedute settimanali fanno la differenza.",
     exampleSrc:"A: The psychologist helped me manage stress.\nB: The weekly sessions make a difference.",
     funFact:"Italy has over 110,000 registered psychologists, one of the highest numbers in Europe. To practice, one must complete a five-year degree, a one-year internship, and pass a state exam. The profession is highly regulated."},

    {type:"teach", trg:"la dipendenza", src:"the addiction / dependence", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le dipendenze.\n'Dipendenza da alcol' = alcohol addiction.\n'Dipendenza affettiva' = emotional dependence.",
     example:"A: La dipendenza da smartphone e un fenomeno nuovo.\nB: Colpisce soprattutto i giovani sotto i 18 anni.",
     exampleSrc:"A: Smartphone addiction is a new phenomenon.\nB: It especially affects young people under 18.",
     funFact:"Italy's public health system offers free treatment for substance addictions through 'Servizi per le Dipendenze' (SerD). These local centers provide counseling, medication, and rehabilitation programs without cost."},

    {type:"mc",
     q:"Qual e la differenza tra uno psicologo e uno psichiatra in Italia?",
     opts:["Lo psichiatra e un medico che può prescrivere farmaci, lo psicologo no","Lo psicologo lavora solo con i bambini, lo psichiatra con gli adulti","Lo psichiatra lavora solo in ospedale, lo psicologo solo in studio privato","Non c'è nessuna differenza pratica tra le due figure"],
     ans:"Lo psichiatra e un medico che può prescrivere farmaci, lo psicologo no",
     hint:"One has a medical degree and can prescribe medication. The other works through talk therapy and assessment."},

    {type:"teach", trg:"il questionario", src:"the questionnaire", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i questionari.\nA research tool for collecting data. 'Questionario psicologico' = psychological questionnaire.",
     example:"A: Il questionario valuta i livelli di ansia e depressione.\nB: Le domande sono standardizzate per garantire affidabilita.",
     exampleSrc:"A: The questionnaire assesses anxiety and depression levels.\nB: The questions are standardized to ensure reliability.",
     funFact:"Italian psychology uses many translated and adapted questionnaires from English (like the MMPI or the BDI). The adaptation process involves linguistic translation plus cultural validation to ensure the tool works in Italian contexts."},

    {type:"teach", trg:"la cognizione", src:"cognition", pos:"noun", gender:"f",
     note:"Feminine noun. Mental processes of knowing and understanding.\n'Scienze cognitive' = cognitive sciences. 'Funzioni cognitive' = cognitive functions.",
     example:"A: La cognizione include memoria, attenzione e linguaggio.\nB: Queste funzioni possono essere misurate con test specifici.",
     exampleSrc:"A: Cognition includes memory, attention, and language.\nB: These functions can be measured with specific tests.",
     funFact:"Italian cognitive science is centered at the Scuola Normale Superiore in Pisa and the SISSA in Trieste. Research on language, vision, and decision-making has earned Italian cognitive scientists international recognition."},

    {type:"teach", trg:"l'inconscio collettivo", src:"the collective unconscious", pos:"noun", gender:"m",
     note:"Masculine compound noun. Jung's concept of shared ancestral memories.\n'Archetipo' = archetype (a key concept within this framework).",
     example:"A: Jung credeva in un inconscio collettivo condiviso da tutta l'umanita.\nB: Gli archetipi ne sono le immagini primordiali.",
     exampleSrc:"A: Jung believed in a collective unconscious shared by all humanity.\nB: Archetypes are its primordial images.",
     funFact:"Jungian psychology found fertile ground in Italy, particularly through the work of analysts like Aldo Carotenuto. The Italian Association for Analytical Psychology applies Jungian concepts to art therapy and cultural analysis."},

    {type:"fb",
     s:"I {1} alimentari colpiscono soprattutto le ragazze adolescenti.",
     a:["disturbi"],
     opts:["disturbi","traumi","questionari","farmaci"],
     hint:"Clinical conditions that affect eating behavior. Anorexia and bulimia are the most well-known examples.",
     sSrc:"Eating {1} especially affect adolescent girls."},

    {type:"teach", trg:"il narcisismo", src:"narcissism", pos:"noun", gender:"m",
     note:"Masculine noun. Excessive self-admiration.\n'Disturbo narcisistico di personalita' = narcissistic personality disorder.",
     example:"A: Il narcisismo patologico e diverso dalla semplice vanita.\nB: Comporta una vera incapacita di provare empatia.",
     exampleSrc:"A: Pathological narcissism is different from simple vanity.\nB: It involves a real inability to feel empathy.",
     funFact:"Named after Narcissus from Greek mythology. The Italian term has moved from clinical psychology into everyday speech: 'narcisista' is commonly used to describe self-centered people, though clinicians caution against trivializing the diagnosis."},

    {type:"teach", trg:"la motivazione", src:"motivation", pos:"noun", gender:"f",
     note:"Feminine noun. The drive behind behavior.\n'Motivazione intrinseca/estrinseca' = intrinsic/extrinsic motivation.",
     example:"A: La motivazione e la chiave del successo scolastico.\nB: Senza motivazione, anche i più intelligenti non rendono.",
     exampleSrc:"A: Motivation is the key to academic success.\nB: Without motivation, even the brightest underperform.",
     funFact:"Italian educational psychology places strong emphasis on 'motivazione allo studio' (study motivation). Research shows that Italian students' motivation drops significantly during middle school, a pattern linked to the transition from elementary school's nurturing environment."},

    {type:"teach", trg:"il campione", src:"the sample (research)", pos:"noun", gender:"m",
     note:"Masculine noun. In research: the group of participants studied.\n'Campione rappresentativo' = representative sample.",
     example:"A: Il campione dello studio includeva 500 partecipanti.\nB: Era bilanciato per età e genere.",
     exampleSrc:"A: The study sample included 500 participants.\nB: It was balanced by age and gender.",
     funFact:"'Campione' in research (sample of participants) uses the same word as 'campione' in science (specimen) and sports (champion). All derive from Latin 'campus' but through very different metaphorical paths."},

    {type:"teach", trg:"il placebo", src:"the placebo", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. A treatment with no active ingredient.\n'Effetto placebo' = placebo effect.",
     example:"A: L'effetto placebo dimostra il potere della mente sul corpo.\nB: Fino al 30% dei pazienti migliora con il placebo.",
     exampleSrc:"A: The placebo effect demonstrates the power of the mind over the body.\nB: Up to 30% of patients improve with the placebo.",
     funFact:"From Latin 'placebo' (I shall please). Italian clinical trials must include a placebo group. The Italian word entered English unchanged, one of many Latin medical terms that all European languages share."},

    {type:"mc",
     q:"Che cos'e la 'cognizione' in psicologia?",
     opts:["Un tipo di disturbo mentale caratterizzato da confusione e allucinazioni","L'insieme dei processi mentali legati alla conoscenza: memoria, attenzione, linguaggio","Una tecnica di meditazione consapevole per ridurre lo stress","Un questionario per valutare il livello di intelligenza del soggetto"],
     ans:"L'insieme dei processi mentali legati alla conoscenza: memoria, attenzione, linguaggio",
     hint:"The mental processes through which we know and understand. Memory, attention, language, and reasoning are all part of this."},

    {type:"match", pairs:[
      {trg:"personalita", src:"personality"},
      {trg:"fobia", src:"phobia"},
      {trg:"dipendenza", src:"addiction"},
      {trg:"cognizione", src:"cognition"},
      {trg:"placebo", src:"placebo"}
    ]},

    {type:"fb",
     s:"La {1} intrinseca e più efficace di quella estrinseca nel lungo periodo.",
     a:["motivazione"],
     opts:["motivazione","cognizione","dipendenza","personalita"],
     hint:"The internal drive that pushes someone to act. When it comes from within, it lasts longer than when driven by external rewards.",
     sSrc:"Intrinsic {1} is more effective than extrinsic motivation in the long run."},

    {type:"mc",
     q:"Perche i servizi per le dipendenze (SerD) sono importanti nel sistema sanitario italiano?",
     opts:["Perche sostituiscono gli ospedali nelle zone rurali","Perche offrono diagnosi e ricovero per tutte le malattie mentali","Perche forniscono trattamento gratuito per le tossicodipendenze e altre dipendenze","Perche sono gli unici centri autorizzati a vendere farmaci"],
     ans:"Perche forniscono trattamento gratuito per le tossicodipendenze e altre dipendenze",
     hint:"These public health centers offer free counseling, medication, and rehabilitation for substance addiction and other dependencies."}
  ,{type:"match",pairs:[{trg:"il disturbo",src:"the disorder"},{trg:"il questionario",src:"the questionnaire"},{trg:"il narcisismo",src:"narcissism"},{trg:"il campione",src:"the sample (research)"}]},{type:"mc",q:"How do you say \"collective unconscious\" in Italian?",opts:["la personalita","il disturbo","la fobia","l'inconscio collettivo"],ans:"l'inconscio collettivo",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_1;
