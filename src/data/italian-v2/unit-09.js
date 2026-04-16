// Italian V2 Unit 09. Il corpo e la salute (Body & Health) (A2.1)
import BATCH7_L1 from './_batch7_u09_L01.js';
import BATCH6_L1 from './_batch6_u09_L01.js';
import BATCH4_L02 from './_batch4_u09_L02.js';
import BATCH4_L01 from './_batch4_u09_L01.js';
import BATCH3_L02 from './_batch3_u09_L02.js';
import BATCH3_L01 from './_batch3_u09_L01.js';
// CILS/CELI A2 aligned. Body parts, health vocabulary, doctor visits.
import EXP_09_L1 from './_temp_u09_expand_L01.js';import EXP_09_L2 from './_temp_u09_expand_L02.js';import EXP_09_L3 from './_temp_u09_expand_L03.js';

const UNIT_09 = {
  n:9, lang:"it", srcLang:"en", track:"v2",
  title:"Il corpo e la salute", sub:"Body & Health",
  icon:"\uD83E\uDE7A", level:"A2.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u9l1", title:"Il corpo umano", icon:"\uD83E\uDDB5", xp:15, board:true, steps:[
      {type:"intro", title:"Il corpo umano",
       desc:"Learn the Italian names for parts of the body. Many of these words have interesting irregular plurals that are important to know.",
       goals:["Name major body parts in Italian","Learn irregular plurals for body parts","Describe physical sensations"]},

      {type:"teach", trg:"la testa", src:"the head", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'testa' (pot, shell).\nPlural: le teste.",
       example:"A: Mi fa male la testa.\nB: Prendi un'aspirina.",
       exampleSrc:"A: My head hurts.\nB: Take an aspirin.",
       funFact:"Originally 'testa' meant 'clay pot' in Latin. Romans started using it as slang for 'head' (like saying 'my noggin' in English). The slang won, and the original Latin word 'caput' (head) survived only in 'capitano' (captain) and 'capitale' (capital)."},

      {type:"teach", trg:"il braccio", src:"the arm", pos:"noun", gender:"m",
       note:"Masculine. IRREGULAR plural: le braccia (feminine!).\nFrom Latin 'bracchium' (arm).",
       example:"A: Ho le braccia stanche.\nB: Hai lavorato troppo.",
       exampleSrc:"A: My arms are tired.\nB: You have worked too much.",
       funFact:"One of Italian's strangest plurals: 'il braccio' (masculine singular) becomes 'le braccia' (feminine plural). This happens with several body parts. The reason: these words kept the Latin neuter plural form, which looks feminine in Italian."},

      {type:"teach", trg:"la gamba", src:"the leg", pos:"noun", gender:"f",
       note:"Feminine. From Late Latin 'gamba' (hoof, leg).\nPlural: le gambe. 'In gamba' = clever, capable.",
       example:"A: Mi fanno male le gambe.\nB: Hai camminato tanto oggi?",
       exampleSrc:"A: My legs hurt.\nB: Did you walk a lot today?",
       funFact:"'In gamba' (literally 'in leg') is an idiom meaning 'clever, capable, on the ball.' If someone says 'Sei in gamba!', it is a strong compliment. The expression may come from being steady on one's legs, showing capability."},

      {type:"teach", trg:"la mano", src:"the hand", pos:"noun", gender:"f",
       note:"Feminine despite ending in -o! Plural: le mani.\nOne of very few feminine words ending in -o.",
       example:"A: Dammi la mano.\nB: Ecco, tieni.",
       exampleSrc:"A: Give me your hand.\nB: Here, hold on.",
       funFact:"'La mano' is feminine even though it ends in -o. This breaks the usual Italian gender rule. It kept the Latin feminine gender of 'manus.' Only a handful of Italian words are feminine and end in -o: la mano, la radio, la foto, la moto."},

      {type:"teach", trg:"il piede", src:"the foot", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'pes, pedis' (foot).\nPlural: i piedi. 'A piedi' = on foot.",
       example:"A: Andiamo a piedi?\nB: Si, e vicino.",
       exampleSrc:"A: Shall we walk?\nB: Yes, it is near.",
       funFact:"From Latin 'pes, pedis' (foot). The same root gave English 'pedestrian,' 'pedal,' 'pedicure,' and 'expedition' (freeing the feet). 'Andare a piedi' (go on foot) is among the most common Italian expressions."},

      {type:"teach", trg:"lo stomaco", src:"the stomach", pos:"noun", gender:"m",
       note:"Masculine. From Greek 'stomachos' (gullet, stomach).\n'Mal di stomaco' = stomachache.",
       example:"A: Ho mal di stomaco.\nB: Cosa hai mangiato?",
       exampleSrc:"A: I have a stomachache.\nB: What did you eat?",
       funFact:"From Greek 'stomachos,' originally meaning 'mouth' or 'opening.' The meaning shifted to stomach over centuries. English 'stomach' comes from the same Greek word through Latin and French."},

      {type:"teach", trg:"la schiena", src:"the back (body)", pos:"noun", gender:"f",
       note:"Feminine. From Germanic 'skina' (shinbone, then back).\n'Mal di schiena' = backache.",
       example:"A: Mi fa male la schiena.\nB: Devi riposare.",
       exampleSrc:"A: My back hurts.\nB: You need to rest.",
       funFact:"'Schiena' has Germanic origins. Italians distinguish 'schiena' (the back of the body) from 'dorso' (more literary/medical) and 'dietro' (behind, as direction). Back pain is 'mal di schiena,' one of Italy's most common health complaints."},

      {type:"teach", trg:"l'occhio", src:"the eye", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli occhi. From Latin 'oculus' (eye).\n'Dare un'occhiata' = to take a look.",
       example:"A: Hai gli occhi stanchi.\nB: Si, ho lavorato al computer tutto il giorno.",
       exampleSrc:"A: Your eyes look tired.\nB: Yes, I worked at the computer all day.",
       funFact:"From Latin 'oculus' (eye), which gave English 'ocular' and 'oculist.' The expression 'occhio!' is used as a warning, like 'watch out!' The 'evil eye' in Italian is 'il malocchio,' a deeply rooted superstition in southern Italy."},

      // Quiz steps
      {type:"mc", q:"Why is 'la mano' unusual in Italian?",
       opts:["It is feminine but ends in -o","It is masculine but ends in -a","It has no plural","It changes gender"],
       ans:"It is feminine but ends in -o",
       hint:"Most Italian words ending in -o are masculine. This word for 'hand' kept its Latin f... gender."},

      {type:"fb", s:"Mi fa male la {1}.",
       a:["testa"],
       opts:["testa","mano","gamba","schiena"],
       hint:"The top of your body hurts. Originally, this Latin word meant 'clay pot.' Take an aspirin.",
       sSrc:"My {1} hurts."},

      {type:"match", pairs:[
        {trg:"la testa", src:"the head"},
        {trg:"il braccio", src:"the arm"},
        {trg:"la gamba", src:"the leg"},
        {trg:"la mano", src:"the hand"},
        {trg:"il piede", src:"the foot"}
      ]},

      {type:"mc", q:"What is the irregular plural of 'il braccio'?",
       opts:["I bracci","Le braccia","Le bracci","I braccia"],
       ans:"Le braccia",
       hint:"This word changes gender in the plural. Masculine singular becomes feminine plural. From Latin neuter."},

      {type:"fb", s:"Ho mal di {1}.",
       a:["stomaco"],
       opts:["stomaco","testa","schiena","piede"],
       hint:"You feel pain in your belly, perhaps from something you ate. From Greek 'stomachos.'",
       sSrc:"I have a {1}ache."},

      {type:"mc", q:"What does the expression 'in gamba' mean?",
       opts:["On the leg","In pain","Clever / capable","Walking"],
       ans:"Clever / capable",
       hint:"This idiom uses the word for 'leg' but means something positive about someone's ability."},

      {type:"fb", s:"Mi fa male la {1}. Devo riposare.",
       a:["schiena"],
       opts:["schiena","testa","mano","gamba"],
       hint:"Your lower and upper back area hurts. This is one of Italy's most common health complaints.",
       sSrc:"My {1} hurts. I need to rest."},

      {type:"mc", q:"What does 'l'occhio' mean?",
       opts:["The nose","The ear","The mouth","The eye"],
       ans:"The eye",
       hint:"From Latin 'oculus.' Italians use this word as a warning: 'Occhio!' means 'Watch out!'"}
    ]},

    {id:"itv2_u9l2", title:"I problemi di salute", icon:"\uD83E\uDD12", xp:15, board:true, steps:[
      {type:"intro", title:"I problemi di salute",
       desc:"Learn how to describe common health problems and symptoms in Italian. This is essential vocabulary for travel and daily life.",
       goals:["Describe common symptoms and ailments","Name basic medicines and remedies","Talk about feeling ill or well"]},

      {type:"teach", trg:"il mal di testa", src:"the headache", pos:"noun", gender:"m",
       note:"Masculine. 'Mal' = pain/ache, 'di' = of, 'testa' = head.\n'Ho mal di testa' = I have a headache.",
       example:"A: Hai mal di testa?\nB: Si, da stamattina.",
       exampleSrc:"A: Do you have a headache?\nB: Yes, since this morning.",
       funFact:"'Mal di...' is the standard pattern for body aches: mal di testa (headache), mal di pancia (bellyache), mal di gola (sore throat), mal di denti (toothache). 'Mal' is a shortened form of 'male' (pain, evil)."},

      {type:"teach", trg:"la febbre", src:"the fever", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'febris' (fever).\n'Avere la febbre' = to have a fever. Measured in Celsius.",
       example:"A: Hai la febbre?\nB: Si, trentotto e mezzo.",
       exampleSrc:"A: Do you have a fever?\nB: Yes, thirty-eight point five.",
       funFact:"In Italy, body temperature is measured in Celsius. Normal is 36.5-37 degrees. Above 37.5 is a low fever. Above 38.5 is high. When Italians say 'trentotto e mezzo' (38.5), they mean 101.3 Fahrenheit."},

      {type:"teach", trg:"la tosse", src:"the cough", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'tussis' (cough).\n'Avere la tosse' = to have a cough.",
       example:"A: Hai la tosse da molto?\nB: Si, da una settimana.",
       exampleSrc:"A: Have you had the cough for long?\nB: Yes, for a week.",
       funFact:"From Latin 'tussis' (cough), which English borrowed for the medical term 'pertussis' (whooping cough). Italians have many home remedies for coughs: hot milk with honey, herbal teas, and the classic Italian cough drops."},

      {type:"teach", trg:"il raffreddore", src:"the cold (illness)", pos:"noun", gender:"m",
       note:"Masculine. From 'raffreddare' (to cool down).\n'Ho preso un raffreddore' = I caught a cold.",
       example:"A: Ho un brutto raffreddore.\nB: Bevi tanto e riposa.",
       exampleSrc:"A: I have a bad cold.\nB: Drink a lot and rest.",
       funFact:"From 'freddo' (cold), because Italians traditionally blame cold air for illness. 'Colpo d'aria' (blast of air) is seriously feared in Italy. Italians often warn against drafts, wet hair, and cold floors, even in summer."},

      {type:"teach", trg:"la medicina", src:"the medicine", pos:"noun", gender:"f",
       note:"Feminine. Both 'medicine' (drug) and 'medicine' (the field).\nFrom Latin 'medicina' (healing art).",
       example:"A: Hai preso la medicina?\nB: Si, due volte al giorno.",
       exampleSrc:"A: Did you take the medicine?\nB: Yes, twice a day.",
       funFact:"'Medicina' means both a specific drug and the medical field. Italy has a public healthcare system (SSN) that provides universal coverage. Italians can see a doctor ('medico di base') for free, though wait times vary by region."},

      {type:"teach", trg:"la farmacia", src:"the pharmacy", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'pharmakon' (remedy).\nItalian pharmacists can give medical advice.",
       example:"A: Devo andare in farmacia.\nB: Ce n'e una qui vicino.",
       exampleSrc:"A: I need to go to the pharmacy.\nB: There is one nearby.",
       funFact:"Italian pharmacies are marked with a green cross. They are often the first stop for minor health issues because pharmacists can recommend medicines and even diagnose simple conditions. Night pharmacies ('farmacie di turno') rotate being open after hours."},

      {type:"teach", trg:"stare male", src:"to feel ill / unwell", pos:"verb", gender:null,
       note:"Expression with 'stare' (to be/feel). Opposite: stare bene.\n'Sto male' = I feel ill.",
       example:"A: Come stai?\nB: Sto male. Ho la febbre.",
       exampleSrc:"A: How are you?\nB: I feel ill. I have a fever.",
       funFact:"'Stare' is used for temporary states of being. 'Sto male' (I feel bad physically), 'sto bene' (I feel well). This is different from 'essere' (to be), which describes permanent qualities. 'Stare' for feelings, 'essere' for identity."},

      {type:"teach", trg:"il dolore", src:"the pain", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'dolor' (pain, grief).\n'Ho un dolore al ginocchio' = I have knee pain.",
       example:"A: Dove sente il dolore?\nB: Qui, alla spalla destra.",
       exampleSrc:"A: Where do you feel the pain?\nB: Here, in the right shoulder.",
       funFact:"From Latin 'dolor' (pain, sorrow). The same root gave English 'dolorous' (sorrowful) and 'condolences.' Spanish 'dolor' kept the exact Latin form. 'Doloroso/a' (painful) is the Italian adjective."},

      // Quiz steps
      {type:"mc", q:"How do you say 'I have a headache' in Italian?",
       opts:["Ho mal di testa","Ho la testa (alone)","Ho dolore generico","Sto testa adesso"],
       ans:"Ho mal di testa",
       hint:"Use a two-part pattern: pain-word + 'di' + body part. No article is needed in this construction."},

      {type:"fb", s:"Hai la {1}? Trentotto e mezzo.",
       a:["febbre"],
       opts:["febbre","tosse","medicina","farmacia"],
       hint:"Your body temperature is elevated. In Italy, this is measured in Celsius. 38.5 is high.",
       sSrc:"Do you have a {1}? Thirty-eight point five."},

      {type:"match", pairs:[
        {trg:"il mal di testa", src:"the headache"},
        {trg:"la febbre", src:"the fever"},
        {trg:"la tosse", src:"the cough"},
        {trg:"il raffreddore", src:"the cold"},
        {trg:"il dolore", src:"the pain"}
      ]},

      {type:"mc", q:"What does 'stare male' mean?",
       opts:["To be bad","To feel ill","To stay somewhere","To hurt someone"],
       ans:"To feel ill",
       hint:"'Stare' is used for temporary physical states. The opposite is 'stare bene' (to f... well)."},

      {type:"fb", s:"Devo andare in {1}.",
       a:["farmacia"],
       opts:["farmacia","ospedale","medicina","dottore"],
       hint:"Look for the green cross sign. This is where you buy medicine and get health advice.",
       sSrc:"I need to go to the {1}."},

      {type:"mc", q:"Why do Italians fear 'colpo d'aria'?",
       opts:["It is a serious medical term","It means a local tornado or windstorm","They believe cold drafts cause illness","It is a common type of herbal medicine"],
       ans:"They believe cold drafts cause illness",
       hint:"Italian culture strongly links air exposure to sickness. Wet hair and open windows are warned against."},

      {type:"fb", s:"Ho un brutto {1}. Bevi tanto e riposa.",
       a:["raffreddore"],
       opts:["raffreddore","dolore","febbre","mal"],
       hint:"Your nose is stuffy and you are sneezing. From 'freddo' (cold). Italians blame cold air for this.",
       sSrc:"I have a bad {1}. Drink a lot and rest."},

      {type:"mc", q:"What is the 'mal di...' pattern in Italian?",
       opts:["I feel + body part (incorrect)","Bad + body part (incorrect)","My + body part (possessive)","Pain/ache + body part"],
       ans:"Pain/ache + body part",
       hint:"'Mal' is a shortened form of 'male' (discomfort). Combine it with 'di' and a named location: testa, pancia, gola."}
    ]},

    {id:"itv2_u9l3", title:"Dal dottore", icon:"\uD83D\uDC68\u200D\u2695\uFE0F", xp:15, board:true, steps:[
      {type:"intro", title:"Dal dottore",
       desc:"Learn the essential phrases you need when visiting a doctor in Italy. Being able to communicate your symptoms clearly is vital.",
       goals:["Describe symptoms to a doctor","Understand basic medical instructions","Make and manage appointments"]},

      {type:"teach", trg:"mi fa male", src:"it hurts me / it aches", pos:"verb", gender:null,
       note:"Expression with 'fare male' (to cause pain).\n'Mi fanno male le gambe' = my legs hurt (plural).",
       example:"A: Cosa le fa male?\nB: Mi fa male la spalla.",
       exampleSrc:"A: What hurts?\nB: My shoulder hurts.",
       funFact:"'Fare male' literally means 'to do/make pain.' The body part is the subject: 'la testa mi fa male' (the head does pain to me). This is the same grammar as Spanish 'me duele' and French 'j'ai mal.'"},

      {type:"teach", trg:"ho bisogno di", src:"I need", pos:"verb", gender:null,
       note:"Expression: avere + bisogno + di. 'Bisogno' = need (noun).\nMore formal than 'mi serve.'",
       example:"A: Ho bisogno di un dottore.\nB: Chiamo subito.",
       exampleSrc:"A: I need a doctor.\nB: I will call right away.",
       funFact:"'Bisogno' may come from a Germanic word meaning 'care' or 'anxiety.' The expression 'avere bisogno di' (to have need of) mirrors French 'avoir besoin de.' A more casual way is 'mi serve' (it serves me), used for objects."},

      {type:"teach", trg:"la ricetta", src:"the prescription", pos:"noun", gender:"f",
       note:"Feminine. Same word as 'recipe' (cooking). Context decides meaning.\nFrom Latin 'recepta' (things received).",
       example:"A: Le scrivo una ricetta.\nB: Grazie, dottore.",
       exampleSrc:"A: I will write you a prescription.\nB: Thank you, doctor.",
       funFact:"'Ricetta' means both 'prescription' (medical) and 'recipe' (cooking). Context makes the meaning clear. Both senses come from Latin 'recepta' (things received/taken). A doctor's prescription is 'received' instructions."},

      {type:"teach", trg:"l'appuntamento", src:"the appointment", pos:"noun", gender:"m",
       note:"Masculine. From 'appuntare' (to note down).\n'Prendere un appuntamento' = to make an appointment.",
       example:"A: Vorrei prendere un appuntamento.\nB: Martedi alle dieci va bene?",
       exampleSrc:"A: I would like to make an appointment.\nB: Is Tuesday at ten okay?",
       funFact:"'Appuntamento' also means 'date' (romantic). Context makes the meaning clear. At the doctor: 'Ho un appuntamento alle tre' (I have an appointment at three). Socially: 'Ho un appuntamento stasera' (I have a date tonight)."},

      {type:"teach", trg:"il dottore", src:"the doctor", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la dottoressa. Title used widely.\n'Medico' is the more clinical term.",
       example:"A: Devo vedere il dottore.\nB: Ha un appuntamento?",
       exampleSrc:"A: I need to see the doctor.\nB: Do you have an appointment?",
       funFact:"In Italy, 'dottore/dottoressa' is used for anyone with a university degree, not just medical doctors. Your lawyer, engineer, or professor can be called 'dottore.' For specifically medical doctors, 'medico' is the precise term."},

      {type:"teach", trg:"la visita", src:"the check-up / examination", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'visitare' (to go to see).\n'Visita medica' = medical examination.",
       example:"A: Quando e la prossima visita?\nB: Tra due settimane.",
       exampleSrc:"A: When is the next check-up?\nB: In two weeks.",
       funFact:"'Visita' means both a social visit and a medical examination. 'Visita medica' specifies a medical check-up. In Italy, your 'medico di base' (general practitioner) is assigned to you based on where you live."},

      {type:"teach", trg:"riposare", src:"to rest", pos:"verb", gender:null,
       note:"Regular -are verb. Present: riposo, riposi, riposa.\nFrom Latin 're-' (again) + 'pausare' (to pause).",
       example:"A: Cosa mi consiglia, dottore?\nB: Deve riposare e bere molto.",
       exampleSrc:"A: What do you advise, doctor?\nB: You should rest and drink a lot.",
       funFact:"From Latin 'repausare' (to pause again). English 'repose' comes from the same root. Italian doctors commonly prescribe 'riposo' (rest) as a remedy. Taking a sick day in Italy is 'mettersi in malattia' (to put oneself in illness)."},

      {type:"teach", trg:"guarire", src:"to heal / to recover", pos:"verb", gender:null,
       note:"Regular -ire verb (with -isc- forms). Present: guarisco, guarisci, guarisce.\nFrom Germanic 'warjan' (to protect).",
       example:"A: Quanto tempo per guarire?\nB: Circa una settimana.",
       exampleSrc:"A: How long to recover?\nB: About a week.",
       funFact:"From Germanic 'warjan' (to defend, protect), entering Italian through Frankish. Related to English 'ward' and 'warden.' The -isc- pattern (guarisco, guarisci, guarisce) is common in -ire verbs: capire (capisco), finire (finisco)."},

      // Quiz steps
      {type:"mc", q:"How do you say 'My shoulder hurts' in Italian?",
       opts:["Mi fa male la spalla","Io male la spalla (wrong)","Ho dolore spalla (wrong)","La spalla e male (wrong)"],
       ans:"Mi fa male la spalla",
       hint:"The body part acts as the subject, and a pronoun shows who is affected. The verb expresses causing pain."},

      {type:"fb", s:"Ho {1} di un dottore.",
       a:["bisogno"],
       opts:["bisogno","male","dolore","visita"],
       hint:"You require medical help. This expression uses 'avere' + a noun meaning 'need' + 'di.'",
       sSrc:"I {1} a doctor."},

      {type:"match", pairs:[
        {trg:"la ricetta", src:"the prescription"},
        {trg:"l'appuntamento", src:"the appointment"},
        {trg:"il dottore", src:"the doctor"},
        {trg:"la visita", src:"the check-up"},
        {trg:"guarire", src:"to heal"}
      ]},

      {type:"mc", q:"What is special about the word 'ricetta'?",
       opts:["It is grammatically irregular","It means both prescription and recipe","It is masculine (not feminine)","It has no plural form"],
       ans:"It means both prescription and recipe",
       hint:"Context determines the meaning. The doctor writes one. The cook follows one. Same Italian word for both."},

      {type:"fb", s:"Deve {1} e bere molto.",
       a:["riposare"],
       opts:["riposare","guarire","mangiare","uscire"],
       hint:"The doctor says you should not be active. Stay in bed and recover. From Latin 'repausare.'",
       sSrc:"You should {1} and drink a lot."},

      {type:"mc", q:"In Italy, who can be called 'dottore'?",
       opts:["Only professors and educators","Only medical doctors exclusively","Anyone with a university degree","Only trained surgeons"],
       ans:"Anyone with a university degree",
       hint:"This title is used much more broadly than in English. Lawyers, engineers, and graduates can all receive it."},

      {type:"fb", s:"Vorrei prendere un {1}.",
       a:["appuntamento"],
       opts:["appuntamento","ricetta","visita","dottore"],
       hint:"You want to schedule a time to see the doctor. This word also means 'date' in a social context.",
       sSrc:"I would like to make an {1}."},

      {type:"mc", q:"What pattern does 'guarire' follow in the present tense?",
       opts:["The -are pattern (guaro)","Regular -ire no insert (guaro)","Fully irregular (guado)","The -isc- pattern (guarisco)"],
       ans:"The -isc- pattern (guarisco)",
       hint:"Many -ire verbs insert an extra cluster between stem and ending in singular and 3rd plural forms. Capire does the same."}
    ]},
    EXP_09_L1, EXP_09_L2, EXP_09_L3,
  ]
};
export default UNIT_09;
