// Batch 3 — Unit 29 Lesson 2 (Psychology: Development & Social)
const BATCH3_L_2 = {
  id:"itv2_u29l_b3_2", title:"Psicologia dello sviluppo", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"Psicologia dello sviluppo",
     desc:"Learn vocabulary for developmental psychology, social psychology concepts, and the stages of human growth. These terms appear in education, parenting, and social discussions.",
     goals:["Describe stages of psychological development","Discuss social psychology phenomena","Understand cognitive development concepts"]},

    {type:"teach", trg:"lo sviluppo cognitivo", src:"cognitive development", pos:"noun", gender:"m",
     note:"Masculine compound noun. The growth of thinking and reasoning abilities.\n'Fasi dello sviluppo' = stages of development.",
     example:"A: Lo sviluppo cognitivo del bambino segue fasi prevedibili.\nB: Piaget ha descritto quattro stadi principali.",
     exampleSrc:"A: A child's cognitive development follows predictable stages.\nB: Piaget described four main stages.",
     funFact:"Maria Montessori, Italy's most famous educator, developed her method based on careful observation of children's cognitive development. Her approach, emphasizing self-directed learning, is used in over 20,000 schools worldwide."},

    {type:"teach", trg:"l'apprendimento", src:"learning", pos:"noun", gender:"m",
     note:"Masculine noun. 'Apprendimento automatico' = machine learning.\n'Disturbo dell'apprendimento' = learning disability. From 'apprendere' (to learn).",
     example:"A: L'apprendimento delle lingue e piu facile nell'infanzia.\nB: Il cervello dei bambini e piu plastico.",
     exampleSrc:"A: Language learning is easier in childhood.\nB: Children's brains are more plastic.",
     funFact:"Italian schools use the term 'DSA' (Disturbi Specifici dell'Apprendimento) for specific learning disabilities like dyslexia. A 2010 law (Legge 170) guarantees support measures for students with DSA, including extra time on exams."},

    {type:"teach", trg:"l'adolescenza", src:"adolescence", pos:"noun", gender:"f",
     note:"Feminine noun. The transition period between childhood and adulthood.\n'Adolescente' = adolescent/teenager.",
     example:"A: L'adolescenza e un periodo di grandi cambiamenti.\nB: Il cervello si riorganizza completamente.",
     exampleSrc:"A: Adolescence is a period of great changes.\nB: The brain completely reorganizes itself.",
     funFact:"Italian adolescents typically live with their parents much longer than Northern Europeans. The average age of leaving home in Italy is about 30, compared to 18-21 in Scandinavia. Psychologists call them 'mammoni' (mama's boys/girls)."},

    {type:"teach", trg:"il conformismo", src:"conformism / conformity", pos:"noun", gender:"m",
     note:"Masculine noun. The tendency to match attitudes and behaviors to group norms.\n'Pressione del gruppo' = peer pressure.",
     example:"A: Il conformismo e forte nell'adolescenza.\nB: I ragazzi vogliono essere accettati dal gruppo.",
     exampleSrc:"A: Conformity is strong in adolescence.\nB: Young people want to be accepted by the group.",
     funFact:"Italian social psychology has studied 'conformismo' extensively in the context of political movements. The fascist era's demand for mass conformity left deep scars on Italian intellectual culture, making the concept particularly loaded."},

    {type:"teach", trg:"l'identita", src:"identity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Crisi di identita' = identity crisis. 'Identita sociale' = social identity.",
     example:"A: La costruzione dell'identita e il compito centrale dell'adolescenza.\nB: Chi sono? Cosa voglio? Sono domande normali.",
     exampleSrc:"A: Building identity is the central task of adolescence.\nB: Who am I? What do I want? These are normal questions.",
     funFact:"Erik Erikson's 'identity crisis' concept resonates deeply in Italian culture, where regional, family, and generational identities layer upon each other. An Italian's identity is always plural: local, regional, national, European."},

    {type:"mc",
     q:"Chi ha sviluppato il metodo educativo basato sull'osservazione dello sviluppo del bambino?",
     opts:["Piaget","Montessori","Freud","Vygotsky"],
     ans:"Montessori",
     hint:"This Italian educator and physician created a worldwide educational method based on children's natural developmental stages."},

    {type:"teach", trg:"la memoria", src:"memory", pos:"noun", gender:"f",
     note:"Feminine noun. 'Memoria a breve/lungo termine' = short/long term memory.\n'Perdita di memoria' = memory loss.",
     example:"A: La memoria a breve termine contiene circa sette elementi.\nB: Dopo pochi secondi, le informazioni si perdono se non vengono ripetute.",
     exampleSrc:"A: Short-term memory holds about seven items.\nB: After a few seconds, information is lost if not rehearsed.",
     funFact:"Italian neuroscientist Tullio De Mauro studied memory's role in language comprehension. His research showed that working memory capacity directly affects how well people understand complex sentences, linking psychology to linguistics."},

    {type:"teach", trg:"l'intelligenza emotiva", src:"emotional intelligence", pos:"noun", gender:"f",
     note:"Feminine compound noun. The ability to recognize and manage emotions.\n'Quoziente emotivo' = emotional quotient (EQ).",
     example:"A: L'intelligenza emotiva e importante quanto il QI.\nB: Gestire le emozioni e una competenza fondamentale.",
     exampleSrc:"A: Emotional intelligence is as important as IQ.\nB: Managing emotions is a fundamental skill.",
     funFact:"The concept of 'intelligenza emotiva' became hugely popular in Italy after Daniel Goleman's book was translated in 1996. Italian schools increasingly include 'educazione socio-emotiva' (social-emotional learning) in their curriculum."},

    {type:"teach", trg:"lo stereotipo", src:"the stereotype", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli stereotipi.\nA fixed, oversimplified image of a group. 'Stereotipo di genere' = gender stereotype.",
     example:"A: Gli stereotipi influenzano le nostre decisioni senza che ce ne accorgiamo.\nB: La consapevolezza e il primo passo per superarli.",
     exampleSrc:"A: Stereotypes influence our decisions without us realizing it.\nB: Awareness is the first step to overcoming them.",
     funFact:"Italy itself is subject to many stereotypes internationally: pasta, mafia, fashion. Italian social psychologists study 'auto-stereotipi' (self-stereotypes), the images Italians hold of themselves and how these shape national identity."},

    {type:"fb",
     s:"L'{1} delle lingue e piu facile durante i primi anni di vita.",
     a:["apprendimento"],
     opts:["apprendimento","adolescenza","identita","conformismo"],
     hint:"The process of acquiring new knowledge and skills. Language acquisition in childhood is a prime example.",
     sSrc:"Language {1} is easier during the first years of life."},

    {type:"teach", trg:"la maturita", src:"maturity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Maturita emotiva' = emotional maturity.\nAlso: 'l'esame di maturita' = the Italian school-leaving exam.",
     example:"A: La maturita emotiva non coincide sempre con l'eta adulta.\nB: Alcune persone maturano prima, altre dopo.",
     exampleSrc:"A: Emotional maturity does not always coincide with adulthood.\nB: Some people mature earlier, others later.",
     funFact:"In Italian, 'la maturita' also refers to the final high school exam ('esame di maturita'). The double meaning is poetic: completing school marks the transition to adult maturity. The exam includes written tests and an oral defense."},

    {type:"teach", trg:"l'introversione", src:"introversion", pos:"noun", gender:"f",
     note:"Feminine noun. A personality trait characterized by a focus on inner experience.\nOpposite: 'l'estroversione' (extraversion).",
     example:"A: L'introversione non e timidezza.\nB: Gli introversi preferiscono ambienti tranquilli per ricaricarsi.",
     exampleSrc:"A: Introversion is not shyness.\nB: Introverts prefer quiet environments to recharge.",
     funFact:"In Italy's expressive, social culture, introversion is sometimes misunderstood. Italian self-help literature has embraced the concept of 'il potere degli introversi' (the power of introverts), helping to destigmatize quieter personality styles."},

    {type:"teach", trg:"l'emulazione", src:"emulation / imitation", pos:"noun", gender:"f",
     note:"Feminine noun. Imitating someone admired.\n'Emulare' (verb) = to emulate.",
     example:"A: I bambini imparano per emulazione dei genitori.\nB: Il modello familiare e il primo riferimento.",
     exampleSrc:"A: Children learn through emulation of their parents.\nB: The family model is the first reference point.",
     funFact:"Italian developmental psychology emphasizes the family as the primary context for learning through emulazione. The extended Italian family provides multiple role models, a richer environment than the nuclear family typical of some cultures."},

    {type:"mc",
     q:"Perche i giovani italiani lasciano la casa dei genitori in media a 30 anni?",
     opts:["Perche la legge italiana vieta di vivere da soli prima dei 25 anni","Per una combinazione di fattori culturali, economici e del mercato immobiliare","Perche le universita italiane non offrono residenze studentesche","Perche lo psicologo lo sconsiglia prima della piena maturita emotiva"],
     ans:"Per una combinazione di fattori culturali, economici e del mercato immobiliare",
     hint:"Multiple factors: strong family ties, high youth unemployment, expensive housing, and cultural norms about family closeness."},

    {type:"teach", trg:"la socializzazione", src:"socialization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of learning social norms and values.\n'Socializzazione primaria/secondaria' = primary/secondary socialization.",
     example:"A: La socializzazione avviene prima in famiglia, poi a scuola.\nB: Ogni contesto insegna regole diverse.",
     exampleSrc:"A: Socialization happens first in the family, then at school.\nB: Each context teaches different rules.",
     funFact:"Italian 'socializzazione primaria' revolves around the family, while the 'asilo nido' (nursery, ages 0-3) and 'scuola materna' (preschool, ages 3-6) provide early secondary socialization. Access to nurseries varies greatly by region."},

    {type:"match", pairs:[
      {trg:"apprendimento", src:"learning"},
      {trg:"conformismo", src:"conformity"},
      {trg:"memoria", src:"memory"},
      {trg:"stereotipo", src:"stereotype"},
      {trg:"maturita", src:"maturity"}
    ]},

    {type:"fb",
     s:"Gli {1} di genere influenzano le aspettative verso ragazzi e ragazze.",
     a:["stereotipi"],
     opts:["stereotipi","apprendimenti","adolescenti","conformismi"],
     hint:"Fixed, oversimplified ideas about groups. Gender-based ones affect expectations for boys and girls differently.",
     sSrc:"Gender {1} influence expectations toward boys and girls."},

    {type:"mc",
     q:"Che cos'e la 'socializzazione primaria' in psicologia dello sviluppo?",
     opts:["Il primo giorno di scuola del bambino nell'asilo nido","L'apprendimento di norme e valori che avviene in famiglia durante l'infanzia","Il processo di inserimento lavorativo dei giovani neolaureati","La prima sessione con lo psicologo clinico durante la terapia"],
     ans:"L'apprendimento di norme e valori che avviene in famiglia durante l'infanzia",
     hint:"The first stage of learning social norms. It happens within the family during early childhood, before school begins."}
  ,{type:"match",pairs:[{trg:"lo sviluppo cognitivo",src:"cognitive development"},{trg:"la socializzazione",src:"socialization"}]},{type:"mc",q:"How do you say \"adolescence\" in Italian?",opts:["l'adolescenza","la finestra","il tavolo","la bicicletta"],ans:"l'adolescenza",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"identity\" in Italian?",opts:["la finestra","l'identita","il tavolo","la bicicletta"],ans:"l'identita",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"emotional intelligence\" in Italian?",opts:["la finestra","il tavolo","l'intelligenza emotiva","la bicicletta"],ans:"l'intelligenza emotiva",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"introversion\" in Italian?",opts:["la finestra","il tavolo","l'introversione","la bicicletta"],ans:"l'introversione",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"emulation / imitation\" in Italian?",opts:["l'emulazione","la finestra","il tavolo","la bicicletta"],ans:"l'emulazione",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"La {1} cognitiva continua fino all'eta adulta.",a:["maturita"],opts:["maturita","socializzazione","memoria","adolescenza"],hint:"The state of full development, reached after adolescence.",sSrc:"Cognitive {1} continues into adulthood."},
{type:"fb",s:"La {1} aiuta i bambini a sviluppare abilita sociali.",a:["socializzazione"],opts:["socializzazione","emulazione","identita","maturita"],hint:"The process of learning to interact and live within a group.",sSrc:"The {1} helps children develop social skills."}]
};
export default BATCH3_L_2;
