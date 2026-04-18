const LESSON_5 = {
  id:"frv2_b2gap_l5", title:"Sciences et sant\u00e9", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sciences et sant\u00e9",
     desc:"Scientific and medical vocabulary for understanding research, health discussions, and academic texts.",
     goals:["Learn 20 science and health terms","Discuss medical topics with precision","Understand scientific articles in French"]},

    {type:"teach", trg:"l'acc\u00e9l\u00e9ration", src:"the acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of increasing speed or rate of change.",
     example:"A: L'acc\u00e9l\u00e9ration du r\u00e9chauffement climatique est inqui\u00e9tante.\nB: Oui, il faut agir vite.",
     exampleSrc:"A: The acceleration of global warming is worrying.\nB: Yes, we must act fast.",
     funFact:"Einstein's equivalence principle says acceleration and gravity are indistinguishable. 'Acc\u00e9l\u00e9ration' entered French physics in the 1700s."},

    {type:"teach", trg:"l'accumulation", src:"the accumulation", pos:"noun", gender:"f",
     note:"Feminine noun. The gradual gathering of something over time.",
     example:"A: L'accumulation de d\u00e9chets est un probl\u00e8me majeur.\nB: Le recyclage est essentiel.",
     exampleSrc:"A: The accumulation of waste is a major problem.\nB: Recycling is essential.",
     funFact:"In rhetoric, 'accumulation' is a literary device listing items for emphasis. Rabelais was the master."},

    {type:"teach", trg:"anesth\u00e9sier", src:"to anesthetize", pos:"verb", gender:null,
     note:"Verb. To numb with drugs before surgery. Also used figuratively.",
     example:"A: Le chirurgien va anesth\u00e9sier le patient.\nB: C'est une anesth\u00e9sie g\u00e9n\u00e9rale ?",
     exampleSrc:"A: The surgeon will anesthetize the patient.\nB: Is it general anesthesia?",
     funFact:"The first public demonstration of ether anesthesia was in 1846. French surgeons adopted it within months."},

    {type:"teach", trg:"un anesth\u00e9siant", src:"an anesthetic", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that causes numbness or unconsciousness.",
     example:"A: L'anesth\u00e9siant fait effet en quelques secondes.\nB: Le patient ne sentira rien.",
     exampleSrc:"A: The anesthetic takes effect in seconds.\nB: The patient won't feel anything.",
     funFact:"From Greek 'anaisthesia' meaning without sensation. Modern anesthesia was a 19th century revolution."},

    {type:"teach", trg:"anatomique", src:"anatomical", pos:"adj", gender:null,
     note:"Adjective. Related to the structure of the body. Same form for m/f.",
     example:"A: C'est un mod\u00e8le anatomique du c\u0153ur.\nB: Impressionnant, on voit chaque d\u00e9tail.",
     exampleSrc:"A: It's an anatomical model of the heart.\nB: Impressive, you can see every detail.",
     funFact:"Vesalius published his anatomical masterwork in 1543. French 'anatomie' comes from Greek 'anatome' (cutting up)."},

    {type:"teach", trg:"analytique", src:"analytical", pos:"adj", gender:null,
     note:"Adjective. Based on analysis and logical reasoning. Same form for m/f.",
     example:"A: Il a un esprit analytique remarquable.\nB: Oui, il d\u00e9compose chaque probl\u00e8me.",
     exampleSrc:"A: He has a remarkable analytical mind.\nB: Yes, he breaks down every problem.",
     funFact:"Descartes' 'M\u00e9thode analytique' shaped French intellectual culture. Analysis is a French national sport."},

    {type:"mc",
     q:"Quel mot d\u00e9signe une substance qui endort un patient avant une op\u00e9ration ?",
     opts:["Un anesth\u00e9siant","Un anglicisme","Un arch\u00e9type","Un adage"],
     ans:"Un anesth\u00e9siant",
     hint:"From Greek meaning 'without sensation'. Used by surgeons before operations."},

    {type:"teach", trg:"atmosph\u00e9rique", src:"atmospheric", pos:"adj", gender:null,
     note:"Adjective. Related to the atmosphere. Same form for m/f.",
     example:"A: La pression atmosph\u00e9rique baisse.\nB: Il va pleuvoir demain.",
     exampleSrc:"A: Atmospheric pressure is dropping.\nB: It's going to rain tomorrow.",
     funFact:"Pascal discovered atmospheric pressure varies with altitude in 1648 using the Puy de D\u00f4me experiment."},

    {type:"teach", trg:"l'allaitement", src:"the breastfeeding", pos:"noun", gender:"m",
     note:"Masculine noun. The process of feeding a baby with breast milk.",
     example:"A: L'allaitement est recommand\u00e9 pendant six mois.\nB: C'est ce que dit l'OMS.",
     exampleSrc:"A: Breastfeeding is recommended for six months.\nB: That's what the WHO says.",
     funFact:"From 'allaiter' (to breastfeed), from Latin 'allactare'. France has historically low breastfeeding rates compared to Nordic countries."},

    {type:"teach", trg:"la contraction", src:"the contraction", pos:"noun", gender:"f",
     note:"Feminine noun. A tightening of muscles, or a shrinking process.",
     example:"A: Les contractions sont de plus en plus rapproch\u00e9es.\nB: Il faut aller \u00e0 l'h\u00f4pital.",
     exampleSrc:"A: The contractions are getting closer together.\nB: We need to go to the hospital.",
     funFact:"In grammar, 'contraction' means merging words: 'de + le = du'. In medicine, it's muscle tightening."},

    {type:"fb",
     s:"Le chirurgien va {1} le patient avant l'op\u00e9ration.",
     a:["anesth\u00e9sier"],
     opts:["anesth\u00e9sier","alarmer","actualiser","accommoder"],
     hint:"To numb a patient with drugs so they feel no pain during surgery.",
     sSrc:"The surgeon will {1} the patient before the operation."},

    {type:"teach", trg:"la cicatrice", src:"the scar", pos:"noun", gender:"f",
     note:"Feminine noun. A mark left on the skin after a wound heals.",
     example:"A: Cette cicatrice date de mon enfance.\nB: Tu t'\u00e9tais bless\u00e9 comment ?",
     exampleSrc:"A: This scar is from my childhood.\nB: How did you get hurt?",
     funFact:"Also used figuratively: 'les cicatrices de la guerre' (the scars of war). From Latin 'cicatrix'."},

    {type:"teach", trg:"un crustac\u00e9", src:"a crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. A shellfish like a crab, lobster, or shrimp.",
     example:"A: Les crustac\u00e9s sont chers ce mois-ci.\nB: Oui, surtout le homard.",
     exampleSrc:"A: Crustaceans are expensive this month.\nB: Yes, especially lobster.",
     funFact:"France is Europe's largest consumer of crustaceans. The 'plateau de fruits de mer' is a French classic."},

    {type:"teach", trg:"canc\u00e9rig\u00e8ne", src:"carcinogenic", pos:"adj", gender:null,
     note:"Adjective. Capable of causing cancer. Same form for m/f.",
     example:"A: Cette substance est canc\u00e9rig\u00e8ne.\nB: Il faut l'interdire imm\u00e9diatement.",
     exampleSrc:"A: This substance is carcinogenic.\nB: It must be banned immediately.",
     funFact:"France's IARC (Centre international de recherche sur le cancer) in Lyon classifies carcinogens worldwide."},

    {type:"teach", trg:"un biotope", src:"a biotope", pos:"noun", gender:"m",
     note:"Masculine noun. A specific area with uniform environmental conditions for living organisms.",
     example:"A: Ce biotope abrite des esp\u00e8ces rares.\nB: Il faut le prot\u00e9ger absolument.",
     exampleSrc:"A: This biotope harbors rare species.\nB: We absolutely must protect it.",
     funFact:"From Greek 'bios' (life) + 'topos' (place). French environmental law protects biotopes since 1976."},

    {type:"mc",
     q:"Quel adjectif signifie 'capable de provoquer un cancer' ?",
     opts:["canc\u00e9rig\u00e8ne","anatomique","atmosph\u00e9rique","analytique"],
     ans:"canc\u00e9rig\u00e8ne",
     hint:"A medical adjective combining a Latin disease name with the Greek suffix -gène (producing). Classified by the IARC in Lyon."},

    {type:"teach", trg:"l'asym\u00e9trie", src:"the asymmetry", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of symmetry or balance between two sides.",
     example:"A: L'asym\u00e9trie est frappante entre les deux r\u00e9gions.\nB: Oui, les in\u00e9galit\u00e9s sont criantes.",
     exampleSrc:"A: The asymmetry between the two regions is striking.\nB: Yes, the inequalities are glaring.",
     funFact:"In game theory, 'asym\u00e9trie d'information' is when one party knows more than the other. Key in economics."},

    {type:"teach", trg:"circadien", src:"circadian", pos:"adj", gender:null,
     note:"Adjective. Related to the 24-hour biological cycle. Feminine: circadienne.",
     example:"A: Le rythme circadien r\u00e8gle notre sommeil.\nB: C'est pourquoi le d\u00e9calage horaire est dur.",
     exampleSrc:"A: The circadian rhythm regulates our sleep.\nB: That's why jet lag is hard.",
     funFact:"From Latin 'circa' (about) + 'dies' (day). The 2017 Nobel Prize in Medicine went to circadian rhythm research."},

    {type:"teach", trg:"actualiser", src:"to update, to bring up to date", pos:"verb", gender:null,
     note:"Verb. To make current or to update. Not the same as English 'actualize'.",
     example:"A: Il faut actualiser les donn\u00e9es.\nB: Je m'en occupe cet apr\u00e8s-midi.",
     exampleSrc:"A: We need to update the data.\nB: I'll take care of it this afternoon.",
     funFact:"False friend alert: 'actualiser' means to update, not to make real. 'Actuel' means current, not actual."},

    {type:"teach", trg:"un composant", src:"a component", pos:"noun", gender:"m",
     note:"Masculine noun. A part that makes up a larger whole.",
     example:"A: Ce composant \u00e9lectronique est d\u00e9fectueux.\nB: Il faut le remplacer.",
     exampleSrc:"A: This electronic component is defective.\nB: We need to replace it.",
     funFact:"From 'composer' (to compose). Used in tech, chemistry, and cooking ('les composants d'une recette')."},

    {type:"match", pairs:[
      {trg:"cicatrice", src:"scar"},
      {trg:"biotope", src:"biotope"},
      {trg:"asym\u00e9trie", src:"asymmetry"},
      {trg:"crustac\u00e9", src:"crustacean"},
      {trg:"composant", src:"component"}
    ]},

    {type:"fb",
     s:"Il faut {1} les donn\u00e9es avant la r\u00e9union de demain.",
     a:["actualiser"],
     opts:["actualiser","anesth\u00e9sier","accumuler","analyser"],
     hint:"To bring something up to date. A false friend with English 'actualize'.",
     sSrc:"We need to {1} the data before tomorrow's meeting."},

    {type:"mc",
     q:"Quel nom d\u00e9signe un milieu naturel sp\u00e9cifique o\u00f9 vivent des organismes ?",
     opts:["Un biotope","Un crustac\u00e9","Un composant","Un anesth\u00e9siant"],
     ans:"Un biotope",
     hint:"From Greek 'bios' (life) + 'topos' (place). Protected by French environmental law."}
  ]
};
export default LESSON_5;
