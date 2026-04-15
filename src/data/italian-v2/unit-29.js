// Italian V2 Unit 29. La psicologia (B2.2)
import EXP_L4 from './_temp_u29_expand_L01.js';import EXP_L5 from './_temp_u29_expand_L02.js';import EXP_L6 from './_temp_u29_expand_L03.js';
// CILS B2 aligned. Psychology, mental health, and human behavior vocabulary.

const UNIT_29 = {
  n:29, lang:"it", srcLang:"en", track:"v2",
  title:"La psicologia", sub:"Psychology & Well-being",
  icon:"🧠", level:"B2.2", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: La mente umana ───
    {id:"itv2_u29l1", title:"La mente umana", icon:"💭", xp:15, board:true, steps:[
      {type:"intro", title:"La mente umana",
       desc:"Learn vocabulary for discussing the human mind, consciousness, and behavior. These terms appear in everyday Italian conversation about personal growth and mental health.",
       goals:["Describe psychological concepts and states","Discuss human behavior and motivation","Talk about consciousness and the unconscious"]},

      {type:"teach", trg:"il comportamento", src:"the behavior", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i comportamenti.\n'Comportamento aggressivo' = aggressive behavior. From 'comportarsi' (to behave).",
       example:"A: Il suo comportamento e cambiato molto.\nB: Da quando ha iniziato la terapia, e piu sereno.",
       exampleSrc:"A: His behavior has changed a lot.\nB: Since he started therapy, he is calmer.",
       funFact:"Italian psychology distinguishes 'comportamento' (observable behavior) from 'atteggiamento' (attitude, internal disposition). The behavioral school ('comportamentismo') was less dominant in Italy than Freudian psychoanalysis."},

      {type:"teach", trg:"la coscienza", src:"the consciousness / conscience", pos:"noun", gender:"f",
       note:"Feminine noun. Dual meaning: awareness and moral sense.\n'Perdere coscienza' = to lose consciousness. 'Avere la coscienza pulita' = to have a clear conscience.",
       example:"A: Il paziente ha ripreso coscienza dopo l'intervento.\nB: I medici sono ottimisti.",
       exampleSrc:"A: The patient regained consciousness after the surgery.\nB: The doctors are optimistic.",
       funFact:"Italian uses one word where English uses two. 'Coscienza' covers both 'consciousness' (awareness) and 'conscience' (moral sense). Context always clarifies which meaning is intended."},

      {type:"teach", trg:"l'inconscio", src:"the unconscious", pos:"noun", gender:"m",
       note:"Masculine noun. Also used as adjective: 'un gesto inconscio' = an unconscious gesture.\nCentral concept in psychoanalysis.",
       example:"A: Molte paure risiedono nell'inconscio.\nB: La terapia aiuta a portarle alla luce.",
       exampleSrc:"A: Many fears reside in the unconscious.\nB: Therapy helps bring them to light.",
       funFact:"Italy embraced Freudian psychoanalysis early. The Italian Psychoanalytic Society was founded in 1925. Today Italy has more practicing psychoanalysts per capita than almost any other country outside Argentina."},

      {type:"teach", trg:"il trauma", src:"the trauma", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i traumi.\n'Trauma infantile' = childhood trauma. 'Trauma psicologico' = psychological trauma.",
       example:"A: Il trauma dell'infanzia lo ha segnato profondamente.\nB: Ci vuole tempo per elaborarlo.",
       exampleSrc:"A: The childhood trauma marked him deeply.\nB: It takes time to process it.",
       funFact:"From Greek 'trauma' (wound). In Italian, the word is used both for physical injuries ('trauma cranico' = head injury) and psychological wounds. The verb 'traumatizzare' means to traumatize."},

      {type:"mc",
       q:"Che cos'e l'inconscio secondo la psicanalisi?",
       opts:["La parte della mente di cui non siamo consapevoli","Un tipo di comportamento aggressivo","Una malattia mentale grave","Un metodo di cura moderno"],
       ans:"La parte della mente di cui non siamo consapevoli",
       hint:"The hidden part of the mind that holds thoughts, memories, and desires we are not aware of. Central to Freud's work."},

      {type:"teach", trg:"la terapia", src:"the therapy", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le terapie.\n'Terapia cognitivo-comportamentale' = cognitive behavioral therapy.\n'Fare terapia' = to be in therapy.",
       example:"A: La terapia mi ha aiutato molto.\nB: Quanto tempo ci sei andato?\nA: Due anni.",
       exampleSrc:"A: Therapy helped me a lot.\nB: How long did you go?\nA: Two years.",
       funFact:"In Italy, psychotherapy is covered by the national health system (SSN), though waiting lists can be very long. A 'bonus psicologo' (psychology bonus) was introduced in 2022 to subsidize private therapy costs."},

      {type:"teach", trg:"l'empatia", src:"the empathy", pos:"noun", gender:"f",
       note:"Feminine noun. The ability to understand others' feelings.\n'Essere empatico/empatica' = to be empathetic.",
       example:"A: L'empatia e fondamentale nelle relazioni.\nB: Senza empatia, non c'e comunicazione vera.",
       exampleSrc:"A: Empathy is fundamental in relationships.\nB: Without empathy, there is no real communication.",
       funFact:"Italian neuroscientist Giacomo Rizzolatti discovered 'mirror neurons' in the 1990s at the University of Parma. These brain cells fire both when we act and when we observe others, providing a neural basis for empathy."},

      {type:"fb",
       s:"Il suo {1} a scuola e peggiorato dopo il divorzio dei genitori.",
       a:["comportamento"],
       opts:["comportamento","inconscio","trauma","empatia"],
       hint:"The way someone acts or conducts themselves. Observable actions and reactions that others can see.",
       sSrc:"His {1} at school worsened after his parents' divorce."},

      {type:"teach", trg:"la percezione", src:"the perception", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le percezioni.\n'Percezione visiva' = visual perception. 'Percepire' (verb) = to perceive.",
       example:"A: La percezione del pericolo varia da persona a persona.\nB: Alcuni sono piu sensibili di altri.",
       exampleSrc:"A: The perception of danger varies from person to person.\nB: Some are more sensitive than others.",
       funFact:"The Italian school of Gestalt psychology, centered in Padua and Trieste, made significant contributions to understanding visual perception. Gaetano Kanizsa's famous 'triangle' illusion demonstrates how the brain fills in missing information."},

      {type:"mc",
       q:"Che cosa ha scoperto Giacomo Rizzolatti?",
       opts:["L'inconscio collettivo","I neuroni specchio","La terapia cognitiva","Il test di intelligenza"],
       ans:"I neuroni specchio",
       hint:"Brain cells that fire both when we perform an action and when we watch someone else do it. They may explain our capacity for empathy."},

      {type:"match", pairs:[
        {trg:"comportamento", src:"behavior"},
        {trg:"coscienza", src:"consciousness"},
        {trg:"inconscio", src:"unconscious"},
        {trg:"trauma", src:"trauma"},
        {trg:"empatia", src:"empathy"}
      ]},

      {type:"fb",
       s:"La {1} mi ha aiutato a superare un momento difficile.",
       a:["terapia"],
       opts:["terapia","coscienza","percezione","empatia"],
       hint:"Professional treatment for psychological problems. Sessions with a psychologist or psychiatrist to work through difficulties.",
       sSrc:"{1} helped me get through a difficult time."},

      {type:"mc",
       q:"Che differenza c'e tra 'coscienza' come consapevolezza e 'coscienza' come senso morale?",
       opts:["La coscienza morale si scrive diversamente","Sono due parole diverse in italiano","In italiano si usa la stessa parola per entrambi i significati","Non esiste differenza in nessuna lingua"],
       ans:"In italiano si usa la stessa parola per entrambi i significati",
       hint:"Italian uses a single word where English has two separate ones. Context tells you whether awareness or moral sense is meant."}
    ]},

    // ─── Lesson 2: Emozioni e benessere ───
    {id:"itv2_u29l2", title:"Emozioni e benessere", icon:"🌱", xp:15, board:true, steps:[
      {type:"intro", title:"Emozioni e benessere",
       desc:"Learn vocabulary for emotional states, mental health challenges, and personal well-being. Important terms for everyday discussions about how we feel and cope.",
       goals:["Describe emotional states and mental health conditions","Discuss resilience and self-esteem","Talk about anxiety, stress, and coping strategies"]},

      {type:"teach", trg:"l'ansia", src:"the anxiety", pos:"noun", gender:"f",
       note:"Feminine noun. 'Soffrire di ansia' = to suffer from anxiety.\n'Attacco d'ansia' = anxiety attack. 'Ansioso/ansiosa' (adj) = anxious.",
       example:"A: L'ansia mi impedisce di dormire bene.\nB: Hai provato tecniche di rilassamento?",
       exampleSrc:"A: Anxiety prevents me from sleeping well.\nB: Have you tried relaxation techniques?",
       funFact:"Italy reports some of the highest anxiety levels in Europe. The phrase 'mi fa venire l'ansia' (it gives me anxiety) has become extremely common in everyday speech, especially among younger Italians."},

      {type:"teach", trg:"la depressione", src:"the depression", pos:"noun", gender:"f",
       note:"Feminine noun. 'Depressione clinica' = clinical depression.\n'Essere depresso/depressa' = to be depressed.",
       example:"A: La depressione e una malattia seria.\nB: Non e semplicemente tristezza, richiede cure adeguate.",
       exampleSrc:"A: Depression is a serious illness.\nB: It is not simply sadness; it requires proper treatment.",
       funFact:"Mental health stigma remains significant in Italy, though it is decreasing. The landmark 'Legge Basaglia' of 1978 closed all psychiatric asylums, making Italy the first country in the world to do so. Community-based care replaced institutionalization."},

      {type:"teach", trg:"la resilienza", src:"the resilience", pos:"noun", gender:"f",
       note:"Feminine noun. The ability to recover from adversity.\nBorrowed from physics (material that bounces back).",
       example:"A: La resilienza si impara con l'esperienza.\nB: Le difficolta ci rendono piu forti.",
       exampleSrc:"A: Resilience is learned through experience.\nB: Difficulties make us stronger.",
       funFact:"'Resilienza' became a buzzword in Italian after the COVID-19 pandemic. The EU recovery fund was even named 'Piano Nazionale di Ripresa e Resilienza' (PNRR). The word went from technical jargon to everyday vocabulary almost overnight."},

      {type:"teach", trg:"l'autostima", src:"the self-esteem", pos:"noun", gender:"f",
       note:"Feminine noun. Compound: 'auto' (self) + 'stima' (esteem).\n'Bassa autostima' = low self-esteem. 'Alta autostima' = high self-esteem.",
       example:"A: L'autostima dei ragazzi dipende anche dall'ambiente scolastico.\nB: Gli insegnanti possono fare molto.",
       exampleSrc:"A: Young people's self-esteem also depends on the school environment.\nB: Teachers can do a lot.",
       funFact:"Italian forms many psychological terms with the prefix 'auto-': autocontrollo (self-control), autocritica (self-criticism), autoironia (self-irony). This productive prefix creates transparent compound words."},

      {type:"mc",
       q:"Che cos'e la resilienza?",
       opts:["La capacita di riprendersi dalle difficolta","Un tipo di ansia cronica","Una forma di depressione lieve","Un metodo di meditazione"],
       ans:"La capacita di riprendersi dalle difficolta",
       hint:"The ability to bounce back after adversity. Originally a physics term for materials that return to their original shape after being bent."},

      {type:"teach", trg:"lo stress", src:"the stress", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable (no plural change).\nBorrowed from English. 'Stressante' (adj) = stressful. 'Stressarsi' = to stress out.",
       example:"A: Lo stress da lavoro e molto diffuso in Italia.\nB: Bisogna imparare a gestirlo.",
       exampleSrc:"A: Work-related stress is very common in Italy.\nB: One must learn to manage it.",
       funFact:"Italian adopted 'stress' directly from English, but created its own verb 'stressare' and adjective 'stressante.' The phrase 'sono stressatissimo/a' (I am extremely stressed) is one of the most used expressions in modern Italian."},

      {type:"teach", trg:"il benessere", src:"the well-being", pos:"noun", gender:"m",
       note:"Masculine noun. Compound: 'bene' (well) + 'essere' (being).\n'Benessere mentale/fisico' = mental/physical well-being.",
       example:"A: Il benessere mentale e importante quanto quello fisico.\nB: Purtroppo spesso viene trascurato.",
       exampleSrc:"A: Mental well-being is as important as physical well-being.\nB: Unfortunately it is often neglected.",
       funFact:"The Italian concept of 'benessere' goes beyond mental health. It encompasses the good life: good food, social connections, beauty, and balance. The Italian art of living well is sometimes called 'la dolce vita.'"},

      {type:"fb",
       s:"L'{1} e un disturbo che colpisce milioni di persone nel mondo.",
       a:["ansia"],
       opts:["ansia","autostima","benessere","resilienza"],
       hint:"A mental health condition characterized by excessive worry, nervousness, and physical symptoms like racing heart and insomnia.",
       sSrc:"{1} is a disorder that affects millions of people worldwide."},

      {type:"teach", trg:"la consapevolezza", src:"the awareness / mindfulness", pos:"noun", gender:"f",
       note:"Feminine noun. 'Prendere consapevolezza' = to become aware.\nAlso used for 'mindfulness' practices.",
       example:"A: La consapevolezza di se e il primo passo per cambiare.\nB: Bisogna conoscersi per migliorarsi.",
       exampleSrc:"A: Self-awareness is the first step to change.\nB: You must know yourself to improve yourself.",
       funFact:"Mindfulness practices ('meditazione consapevole') have grown enormously popular in Italy since 2015. Italian hospitals and schools increasingly offer mindfulness programs for stress reduction and emotional regulation."},

      {type:"teach", trg:"l'equilibrio", src:"the balance / equilibrium", pos:"noun", gender:"m",
       note:"Masculine noun. 'Equilibrio mentale' = mental balance.\n'Perdere l'equilibrio' = to lose one's balance (physical or emotional).",
       example:"A: Cerco un equilibrio tra lavoro e vita privata.\nB: Non e facile, ma e essenziale.",
       exampleSrc:"A: I seek a balance between work and private life.\nB: It is not easy, but it is essential.",
       funFact:"The Italian concept of 'equilibrio' in daily life is deeply cultural. The long lunch break, the evening 'passeggiata' (stroll), and the Sunday family meal all serve to maintain this balance between productivity and enjoyment."},

      {type:"mc",
       q:"Quale legge italiana del 1978 chiuse tutti i manicomi?",
       opts:["La Legge sulla Resilienza","La Legge Basaglia","La Legge sul Benessere","La Legge sull'Autostima"],
       ans:"La Legge Basaglia",
       hint:"Named after psychiatrist Franco B..., this revolutionary law made Italy the first country to close all psychiatric institutions."},

      {type:"match", pairs:[
        {trg:"ansia", src:"anxiety"},
        {trg:"depressione", src:"depression"},
        {trg:"resilienza", src:"resilience"},
        {trg:"autostima", src:"self-esteem"},
        {trg:"benessere", src:"well-being"}
      ]},

      {type:"fb",
       s:"L'{1} tra lavoro e vita privata e fondamentale per il benessere.",
       a:["equilibrio"],
       opts:["equilibrio","stress","ansia","autostima"],
       hint:"A state of harmony between opposing forces. Not too much of one thing, not too little of another.",
       sSrc:"The {1} between work and private life is fundamental for well-being."},

      {type:"mc",
       q:"Che cos'e la 'consapevolezza di se'?",
       opts:["Una tecnica di studio efficace","Un tipo di ansia sociale","La capacita di conoscere i propri pensieri e sentimenti","Un disturbo della personalita"],
       ans:"La capacita di conoscere i propri pensieri e sentimenti",
       hint:"Knowing and understanding your own thoughts, emotions, and motivations. The first step toward personal growth and change."}
    ]},

    // ─── Lesson 3: Relazioni e comunicazione ───
    {id:"itv2_u29l3", title:"Relazioni e comunicazione", icon:"🤝", xp:15, board:true, steps:[
      {type:"intro", title:"Relazioni e comunicazione",
       desc:"Learn to discuss interpersonal relationships, communication patterns, and group dynamics. Vocabulary for understanding how people interact and influence each other.",
       goals:["Describe relationship dynamics","Discuss communication styles and patterns","Talk about social influence and group behavior"]},

      {type:"teach", trg:"la relazione", src:"the relationship / report", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le relazioni.\n'Relazione sentimentale' = romantic relationship.\n'Relazione professionale' = professional report.",
       example:"A: Le relazioni sane si basano sulla fiducia.\nB: E sulla comunicazione aperta.",
       exampleSrc:"A: Healthy relationships are based on trust.\nB: And on open communication.",
       funFact:"'Relazione' has multiple uses in Italian: a romantic relationship, a work report, and a connection between things. The phrase 'avere una relazione' can mean either 'to be in a relationship' or 'to have an affair,' depending on context."},

      {type:"teach", trg:"il conflitto", src:"the conflict", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i conflitti.\n'Risoluzione dei conflitti' = conflict resolution.\n'Conflitto interiore' = inner conflict.",
       example:"A: Il conflitto tra i due colleghi ha danneggiato tutto il team.\nB: Serve un mediatore.",
       exampleSrc:"A: The conflict between the two colleagues damaged the whole team.\nB: A mediator is needed.",
       funFact:"Italian culture values social harmony ('armonia'), but open disagreement is also accepted, especially in family settings. The loud Italian family argument ('litigata') is a cultural stereotype with a kernel of truth."},

      {type:"teach", trg:"la fiducia", src:"the trust", pos:"noun", gender:"f",
       note:"Feminine noun. 'Avere fiducia in qualcuno' = to trust someone.\n'Tradire la fiducia' = to betray trust. 'Fiducioso/a' (adj) = trusting.",
       example:"A: Senza fiducia, nessuna relazione puo funzionare.\nB: Ci vuole tempo per costruirla.",
       exampleSrc:"A: Without trust, no relationship can work.\nB: It takes time to build it.",
       funFact:"In Italian politics, 'voto di fiducia' (vote of confidence) is a crucial mechanism. The government must maintain Parliament's trust. 'Questione di fiducia' (matter of confidence) can force legislators to support or topple the government."},

      {type:"teach", trg:"l'attaccamento", src:"the attachment", pos:"noun", gender:"m",
       note:"Masculine noun. In psychology, the emotional bond formed in early childhood.\n'Teoria dell'attaccamento' = attachment theory.",
       example:"A: L'attaccamento sicuro nell'infanzia e fondamentale.\nB: Influenza tutte le relazioni future.",
       exampleSrc:"A: Secure attachment in childhood is fundamental.\nB: It influences all future relationships.",
       funFact:"Attachment theory research in Italy, particularly at the University of Rome, has shown how Italian family structures, with strong extended family bonds and later independence from parents, create distinctive attachment patterns."},

      {type:"mc",
       q:"Su che cosa si basano le relazioni sane secondo la psicologia?",
       opts:["Sulla fiducia e la comunicazione","Sull'evitare ogni conflitto","Sul controllo dell'altra persona","Sull'indipendenza totale"],
       ans:"Sulla fiducia e la comunicazione",
       hint:"Two essential ingredients for healthy relationships. One involves believing in the other person, the other involves sharing openly."},

      {type:"teach", trg:"il pregiudizio", src:"the prejudice / bias", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i pregiudizi.\n'Senza pregiudizi' = without prejudice/bias. From 'pre-' (before) + 'giudizio' (judgment).",
       example:"A: I pregiudizi influenzano le nostre decisioni.\nB: Spesso senza che ce ne rendiamo conto.",
       exampleSrc:"A: Prejudices influence our decisions.\nB: Often without us realizing it.",
       funFact:"The word literally means 'pre-judgment.' Italian psychologist Ferruccio Ferreri studied how prejudice forms in children. Research shows Italian children develop racial bias awareness earlier in multicultural areas like Milan."},

      {type:"teach", trg:"l'influenza", src:"the influence", pos:"noun", gender:"f",
       note:"Feminine noun. 'Influenza sociale' = social influence.\nAlso means 'flu' (the illness). 'Influenzare' (verb) = to influence.",
       example:"A: L'influenza dei social media sui giovani e enorme.\nB: Puo essere sia positiva che negativa.",
       exampleSrc:"A: The influence of social media on young people is enormous.\nB: It can be both positive and negative.",
       funFact:"'Influenza' the illness and 'influenza' the concept share the same origin: medieval Italian astrologers believed diseases were caused by the 'influence' of the stars. English borrowed the medical term directly from Italian."},

      {type:"fb",
       s:"I {1} inconsci influenzano il modo in cui vediamo gli altri.",
       a:["pregiudizi"],
       opts:["pregiudizi","conflitti","attaccamenti","equilibri"],
       hint:"Pre-formed opinions about people or groups based on stereotypes rather than evidence. Judgments made before knowing the facts.",
       sSrc:"Unconscious {1} influence the way we see others."},

      {type:"teach", trg:"l'ascolto", src:"the listening", pos:"noun", gender:"m",
       note:"Masculine noun. 'Ascolto attivo' = active listening.\nFrom 'ascoltare' (to listen). A key communication skill.",
       example:"A: L'ascolto attivo migliora ogni relazione.\nB: Ascoltare davvero e piu difficile di quanto sembra.",
       exampleSrc:"A: Active listening improves every relationship.\nB: Really listening is harder than it seems.",
       funFact:"Italian communication is highly expressive, with gestures, tone, and facial expressions carrying as much meaning as words. True 'ascolto' in Italian culture means reading all these channels, not just the verbal one."},

      {type:"teach", trg:"il condizionamento", src:"the conditioning", pos:"noun", gender:"m",
       note:"Masculine noun. 'Condizionamento classico' = classical conditioning.\n'Condizionamento sociale' = social conditioning.",
       example:"A: Il condizionamento sociale ci influenza fin dalla nascita.\nB: Molti comportamenti sono appresi, non innati.",
       exampleSrc:"A: Social conditioning influences us from birth.\nB: Many behaviors are learned, not innate.",
       funFact:"While Pavlov's classical conditioning is well known, Italian psychologist Ernesto Lugaro studied conditioned reflexes independently in Turin in the early 1900s. His work on neural plasticity was ahead of its time."},

      {type:"mc",
       q:"Perche la parola italiana 'influenza' significa anche una malattia?",
       opts:["Perche i malati influenzano gli altri","Perche nel Medioevo si credeva che le malattie fossero causate dall'influenza delle stelle","Perche la parola fu inventata da un medico","Perche il virus fu scoperto in Italia"],
       ans:"Perche nel Medioevo si credeva che le malattie fossero causate dall'influenza delle stelle",
       hint:"Medieval Italian astrologers connected the stars to disease. They believed celestial bodies had a direct effect on human health."},

      {type:"match", pairs:[
        {trg:"relazione", src:"relationship"},
        {trg:"conflitto", src:"conflict"},
        {trg:"fiducia", src:"trust"},
        {trg:"pregiudizio", src:"prejudice"},
        {trg:"ascolto", src:"listening"}
      ]},

      {type:"fb",
       s:"La {1} reciproca e la base di ogni amicizia duratura.",
       a:["fiducia"],
       opts:["fiducia","influenza","relazione","percezione"],
       hint:"The belief that another person is reliable and honest. Without this, no close relationship can survive.",
       sSrc:"Mutual {1} is the foundation of every lasting friendship."},

      {type:"mc",
       q:"Che cos'e l'ascolto attivo?",
       opts:["Rispondere immediatamente senza pensare","Ascoltare solo quando si e interessati","Ascoltare con attenzione, dando segnali di comprensione","Ignorare il linguaggio non verbale"],
       ans:"Ascoltare con attenzione, dando segnali di comprensione",
       hint:"A communication technique where you fully concentrate on the speaker and show understanding. More than just hearing words."}
    ]}
  ]
};

export default UNIT_29;
