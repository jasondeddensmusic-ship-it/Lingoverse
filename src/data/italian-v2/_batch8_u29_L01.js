// Batch 8. Unit 29 extra lesson. Psychology: Cognitive Processes
const BATCH8_L1 = {id:"itv2_u29l_b8_1", title:"Processi cognitivi", icon:"💡", xp:15, board:true, steps:[
{type:"intro", title:"Processi cognitivi",
 desc:"Learn vocabulary for cognitive processes, thinking patterns, and psychological concepts.",
 goals:["Describe cognitive processes","Use psychological terminology","Discuss thinking and perception"]},

{type:"teach", trg:"la percezione", src:"the perception", pos:"noun", gender:"f",
 note:"Feminine noun. 'Percepire' = to perceive.\n'Percezione visiva/uditiva' = visual/auditory perception.",
 example:"A: La percezione del tempo cambia con l'età.\nB: E vero, gli anni passano più velocemente.",
 exampleSrc:"A: The perception of time changes with age.\nB: It is true, years pass more quickly.",
 funFact:"Italian philosophy has a rich tradition of studying perception. From Galileo's empiricism to modern neuroscience at SISSA in Trieste, Italians have always investigated how we perceive reality."},

{type:"teach", trg:"il pregiudizio", src:"the prejudice / bias", pos:"noun", gender:"m",
 note:"Masculine noun. 'Senza pregiudizi' = without prejudice.\nLiterally: pre-judgment.",
 example:"A: Dobbiamo combattere i pregiudizi.\nB: Si, partendo dall'educazione.",
 exampleSrc:"A: We must fight prejudices.\nB: Yes, starting from education.",
 funFact:"'Pregiudizio' is literally 'pre-giudizio' (pre-judgment). Italian shares this transparent etymology with most European languages. The word itself reveals the concept."},

{type:"teach", trg:"il condizionamento", src:"the conditioning", pos:"noun", gender:"m",
 note:"Masculine noun. 'Condizionamento classico/operante' = classical/operant conditioning.",
 example:"A: Il condizionamento influenza il nostro comportamento.\nB: Spesso senza che ce ne rendiamo conto.",
 exampleSrc:"A: Conditioning influences our behavior.\nB: Often without us realizing it.",
 funFact:"Italian psychology was shaped by Maria Montessori, whose educational method is based on understanding children's natural cognitive development. Her face was on the Italian 1000-lire note."},

{type:"teach", trg:"l'attaccamento", src:"the attachment", pos:"noun", gender:"m",
 note:"Masculine noun. 'Teoria dell'attaccamento' = attachment theory.\n'Attaccarsi' = to become attached.",
 example:"A: L'attaccamento sicuro e fondamentale nell'infanzia.\nB: Influenza tutte le relazioni future.",
 exampleSrc:"A: Secure attachment is fundamental in childhood.\nB: It influences all future relationships.",
 funFact:"Italian family culture naturally promotes strong attachment bonds. The close family structure ('mammismo' criticism aside) creates the secure base that attachment theory values."},

{type:"teach", trg:"il meccanismo di difesa", src:"the defense mechanism", pos:"noun", gender:"m",
 note:"Masculine compound. 'Meccanismo' = mechanism.\n'Difesa' = defense. Freudian concept.",
 example:"A: La negazione e un meccanismo di difesa comune.\nB: Protegge dall'ansia, ma non risolve il problema.",
 exampleSrc:"A: Denial is a common defense mechanism.\nB: It protects from anxiety but does not solve the problem.",
 funFact:"Italy was one of the first countries to embrace psychoanalysis. Trieste became a center for psychiatric reform, and Italy's 'Legge Basaglia' (1978) closed mental asylums, revolutionizing care."},

{type:"teach", trg:"l'empatia", src:"the empathy", pos:"noun", gender:"f",
 note:"Feminine noun. 'Empatico' = empathic.\n'Provare empatia' = to feel empathy.",
 example:"A: L'empatia e la base di ogni buona relazione.\nB: Mettersi nei panni degli altri e essenziale.",
 exampleSrc:"A: Empathy is the foundation of every good relationship.\nB: Putting yourself in others' shoes is essential.",
 funFact:"'Mettersi nei panni di qualcuno' (to put yourself in someone's clothes) is the Italian equivalent of 'walking in someone's shoes.' The clothing metaphor is more vivid."},

{type:"teach", trg:"l'inconscio", src:"the unconscious", pos:"noun", gender:"m",
 note:"Masculine noun. Also adjective: unconscious.\n'L'inconscio collettivo' = the collective unconscious.",
 example:"A: L'inconscio influenza le nostre decisioni.\nB: Freud ha rivoluzionato questo concetto.",
 exampleSrc:"A: The unconscious influences our decisions.\nB: Freud revolutionized this concept.",
 funFact:"Italy's relationship with Freud is complex. Psychoanalysis arrived late but became deeply influential. Italian cinema (Fellini, Bertolucci) is famously rich in Freudian symbolism."},

{type:"teach", trg:"l'autostima", src:"the self-esteem", pos:"noun", gender:"f",
 note:"Feminine noun. Compound: auto (self) + stima (esteem).\n'Bassa/alta autostima' = low/high self-esteem.",
 example:"A: L'autostima si costruisce nel tempo.\nB: Con piccoli successi quotidiani.",
 exampleSrc:"A: Self-esteem is built over time.\nB: With small daily successes.",
 funFact:"Italian compound words with 'auto-' are very productive: autostima, autocritica (self-criticism), autocontrollo (self-control), autodeterminazione (self-determination)."},

{type:"teach", trg:"la dipendenza", src:"the addiction / dependency", pos:"noun", gender:"f",
 note:"Feminine noun. 'Dipendente' = dependent/addicted.\n'Dipendenza da...' = addiction to...",
 example:"A: La dipendenza dai social media e un problema crescente.\nB: Soprattutto tra i giovani.",
 exampleSrc:"A: Social media addiction is a growing problem.\nB: Especially among young people.",
 funFact:"Italy's SERT (Servizio per le Tossicodipendenze) treats addictions through the public health system. The approach combines medical treatment with social support."},

{type:"mc",
 q:"What revolutionary law did Italy pass in 1978 about mental health?",
 opts:["The Basaglia Law closed mental asylums","Psychotherapy was banned","Only medications were allowed","Mental health became private"],
 ans:"The Basaglia Law closed mental asylums",
 hint:"Franco B... led a reform that shut down psychiatric institutions and moved care into communities. Italy was a pioneer."},

{type:"match", pairs:[
  {trg:"la percezione", src:"the perception"},
  {trg:"il pregiudizio", src:"the prejudice"},
  {trg:"l'empatia", src:"the empathy"},
  {trg:"l'autostima", src:"the self-esteem"}
]},

{type:"fb",
 s:"La negazione e un {1} comune nelle situazioni di stress.",
 a:["meccanismo di difesa"],
 opts:["meccanismo di difesa","attaccamento","condizionamento","pregiudizio"],
 hint:"This Freudian concept describes an unconscious psychological protection strategy.",
 sSrc:"Denial is a common {1} in stressful situations."},

{type:"mc",
 q:"What does 'mettersi nei panni di qualcuno' mean?",
 opts:["To judge someone","To put yourself in someone else's position (empathy)","To wear someone's clothes","To copy someone's style"],
 ans:"To put yourself in someone else's position (empathy)",
 hint:"'Panni' means clothes. This expression means imagining y... in another's situation."},

{type:"fb",
 s:"La {1} dai social media e un problema crescente.",
 a:["dipendenza"],
 opts:["dipendenza","percezione","empatia","autostima"],
 hint:"This word describes being unable to stop using something. It covers both substance and behavioral patterns.",
 sSrc:"{1} on social media is a growing problem."},

{type:"mc",
 q:"Whose face appeared on the Italian 1000-lire banknote?",
 opts:["Galileo Galilei","Leonardo da Vinci","Maria Montessori","Sigmund Freud"],
 ans:"Maria Montessori",
 hint:"This Italian educator developed a revolutionary method based on children's natural cognitive development."}
]};
export default BATCH8_L1;
