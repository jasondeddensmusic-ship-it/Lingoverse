// Unit 29 Expansion. Lesson 6: Terapia e crescita personale
const LESSON_6 = {
  id:"itv2_u29l6", title:"Terapia e crescita personale", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"Terapia e crescita personale",
     desc:"Learn vocabulary for therapy approaches, personal development, and mental health care. These terms are increasingly common in Italian discussions about well-being.",
     goals:["Describe different types of therapy","Discuss personal growth and self-improvement","Understand Italian mental health care vocabulary"]},

    {type:"teach", trg:"la psicoterapia", src:"the psychotherapy", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le psicoterapie.\n'Psicoterapeuta' = psychotherapist. Different from 'psicologo' (psychologist).",
     example:"A: La psicoterapia mi ha cambiato la vita.\nB: Che approccio usa il tuo terapeuta?",
     exampleSrc:"A: Psychotherapy changed my life.\nB: What approach does your therapist use?",
     funFact:"Italy distinguishes strictly between 'psicologo' (psychologist, who can counsel but not do therapy), 'psicoterapeuta' (psychotherapist, requires additional training), and 'psichiatra' (psychiatrist, medical doctor who can prescribe medication). The distinctions are legally enforced."},

    {type:"teach", trg:"la seduta", src:"the session (therapy)", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le sedute.\n'Seduta terapeutica' = therapy session.\nAlso means 'sitting' or 'meeting' in other contexts.",
     example:"A: Faccio una seduta di terapia ogni settimana.\nB: E un investimento importante per il benessere.",
     exampleSrc:"A: I have a therapy session every week.\nB: It is an important investment in well-being.",
     funFact:"The cost of private therapy sessions in Italy ranges from 50 to 150 euros per hour. The 'bonus psicologo' (psychology bonus) introduced in 2022 offers up to 600 euros per year for citizens with low incomes, a sign of growing attention to mental health access."},

    {type:"teach", trg:"la dipendenza", src:"the addiction / dependence", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le dipendenze.\n'Dipendenza da alcol/droga' = alcohol/drug addiction.\n'Dipendenza affettiva' = emotional dependence.",
     example:"A: La dipendenza dal gioco d'azzardo e un problema crescente.\nB: I centri specializzati offrono aiuto gratuito.",
     exampleSrc:"A: Gambling addiction is a growing problem.\nB: Specialized centers offer free help.",
     funFact:"Italy's public health system includes 'SerD' (Servizi per le Dipendenze), free centers treating addictions. The concept of 'dipendenza' has expanded beyond substances to include behavioral addictions: gambling, internet, shopping, and social media."},

    {type:"teach", trg:"la guarigione", src:"the healing / recovery", pos:"noun", gender:"f",
     note:"Feminine noun. 'Processo di guarigione' = healing process.\n'Guarire' (verb) = to heal/recover. Both physical and emotional.",
     example:"A: La guarigione emotiva richiede tempo e pazienza.\nB: Non ci sono scorciatoie per stare meglio.",
     exampleSrc:"A: Emotional healing takes time and patience.\nB: There are no shortcuts to feeling better.",
     funFact:"'Guarire' covers both physical and emotional recovery. Italian does not distinguish between 'healing' and 'curing' as sharply as English does. 'La guarigione dell'anima' (healing of the soul) is a phrase used in both psychological and spiritual contexts."},

    {type:"teach", trg:"il meccanismo di difesa", src:"the defense mechanism", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i meccanismi di difesa.\nUnconscious strategies to cope with anxiety. Central to Freudian theory.",
     example:"A: La negazione e un meccanismo di difesa comune.\nB: Rifiutiamo di accettare una realta dolorosa.",
     exampleSrc:"A: Denial is a common defense mechanism.\nB: We refuse to accept a painful reality.",
     funFact:"Anna Freud systematized defense mechanisms in 1936. Italian psychoanalysis has a particularly rich tradition of studying these processes. The 'Societa Psicoanalitica Italiana' (SPI) is one of the oldest psychoanalytic societies in the world, founded in 1925."},

    {type:"mc",
     q:"Qual e la differenza tra uno psicologo e uno psicoterapeuta in Italia?",
     opts:["Non c'e differenza","Lo psicoterapeuta ha una formazione aggiuntiva che gli permette di fare terapia","Lo psicologo puo prescrivere farmaci","Lo psicoterapeuta lavora solo in ospedale"],
     ans:"Lo psicoterapeuta ha una formazione aggiuntiva che gli permette di fare terapia",
     hint:"One has completed additional specialized training beyond the basic psychology degree. This extra qualification is legally required to practice therapy in Italy."},

    {type:"teach", trg:"la ricaduta", src:"the relapse", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le ricadute.\nA return to problematic behavior after improvement.\n'Avere una ricaduta' = to have a relapse.",
     example:"A: La ricaduta fa parte del processo di guarigione.\nB: Non significa che la terapia sia fallita.",
     exampleSrc:"A: Relapse is part of the healing process.\nB: It does not mean that therapy has failed.",
     funFact:"Italian therapists increasingly frame 'ricaduta' not as failure but as a learning opportunity. The phrase 'due passi avanti, uno indietro' (two steps forward, one back) captures this compassionate approach to setbacks in recovery."},

    {type:"teach", trg:"la mindfulness", src:"the mindfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable. Borrowed from English.\nThe practice of present-moment awareness. 'Meditazione mindfulness' = mindfulness meditation.",
     example:"A: La mindfulness riduce lo stress e l'ansia.\nB: Bastano dieci minuti al giorno per notare i benefici.",
     exampleSrc:"A: Mindfulness reduces stress and anxiety.\nB: Just ten minutes a day are enough to notice the benefits.",
     funFact:"Mindfulness has been embraced in Italy faster than traditional meditation. Italian hospitals offer 'MBSR' (Mindfulness-Based Stress Reduction) programs. The appeal lies in its secular, evidence-based approach, which fits comfortably alongside Italy's scientific tradition."},

    {type:"fb",
     s:"La {1} dal gioco d'azzardo e un problema sempre piu diffuso in Italia.",
     a:["dipendenza"],
     opts:["dipendenza","depressione","frustrazione","guarigione"],
     hint:"The compulsive need to engage in a behavior despite negative consequences. When someone cannot stop even though they know it is harmful.",
     sSrc:"{1} on gambling is an increasingly widespread problem in Italy."},

    {type:"teach", trg:"l'elaborazione del lutto", src:"the grief processing", pos:"noun", gender:"f",
     note:"Feminine compound noun. The psychological process of working through loss.\n'Elaborare il lutto' = to process grief.",
     example:"A: L'elaborazione del lutto richiede tempo e sostegno.\nB: Ogni persona vive il dolore in modo diverso.",
     exampleSrc:"A: Grief processing requires time and support.\nB: Every person experiences pain differently.",
     funFact:"Italian culture has elaborate mourning traditions. Black clothing, extended family visits, and memorial rituals help structure grief. Modern psychology and traditional practices increasingly coexist, with therapists respecting cultural mourning customs while offering professional support."},

    {type:"teach", trg:"lo sviluppo personale", src:"the personal development", pos:"noun", gender:"m",
     note:"Masculine compound noun. The process of improving oneself.\n'Percorso di sviluppo personale' = personal development journey.",
     example:"A: Lo sviluppo personale non finisce mai.\nB: Ogni eta porta nuove sfide e opportunita di crescita.",
     exampleSrc:"A: Personal development never ends.\nB: Every age brings new challenges and growth opportunities.",
     funFact:"The Italian personal development market has grown significantly, with books, podcasts, and coaching becoming mainstream. The phrase 'lavorare su se stessi' (working on oneself) has become common in Italian everyday speech, reflecting a cultural shift toward psychological self-improvement."},

    {type:"mc",
     q:"Che cosa sono i SerD in Italia?",
     opts:["Scuole di psicologia","Servizi pubblici gratuiti per il trattamento delle dipendenze","Centri di ricerca sul cervello","Associazioni di volontariato per la salute mentale"],
     ans:"Servizi pubblici gratuiti per il trattamento delle dipendenze",
     hint:"Free public health centers specifically for treating addictions. They are part of the national health system and available in every major city."},

    {type:"match", pairs:[
      {trg:"psicoterapia", src:"psychotherapy"},
      {trg:"seduta", src:"therapy session"},
      {trg:"dipendenza", src:"addiction"},
      {trg:"guarigione", src:"healing"},
      {trg:"mindfulness", src:"mindfulness"}
    ]},

    {type:"fb",
     s:"La {1} emotiva richiede tempo, pazienza e spesso l'aiuto di un professionista.",
     a:["guarigione"],
     opts:["guarigione","ricaduta","seduta","dipendenza"],
     hint:"The process of recovering and getting better after emotional pain or trauma. Not instant, but gradual and genuine.",
     sSrc:"Emotional {1} takes time, patience, and often the help of a professional."},

    {type:"mc",
     q:"Perche la mindfulness si e diffusa rapidamente in Italia?",
     opts:["Perche e una pratica religiosa italiana","Per il suo approccio laico e basato su prove scientifiche, compatibile con la tradizione scientifica italiana","Perche e stata imposta dal governo","Perche sostituisce completamente la psicoterapia tradizionale"],
     ans:"Per il suo approccio laico e basato su prove scientifiche, compatibile con la tradizione scientifica italiana",
     hint:"Its secular, research-backed nature appeals to Italians who value science. It can complement rather than replace other approaches, making it accessible and non-dogmatic."}
  ]
};
export default LESSON_6;
