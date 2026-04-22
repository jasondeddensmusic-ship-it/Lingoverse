const LESSON_4 = {
  id:"frv2_b2g2_l4", title:"Sante et bien-etre", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sante et bien-etre",
     desc:"Learn medical and health vocabulary for discussing wellness, treatments, and public health. From anesthesia to cancer research.",
     goals:["Learn 20 health and wellness terms","Discuss medical topics in French","Understand public health vocabulary"]},

    {type:"teach", trg:"un anesthesiant", src:"an anesthetic", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that causes numbness or loss of consciousness.",
     example:"A: L'anesthesiant fera effet dans quelques minutes.\nB: Je ne sentirai vraiment rien ?",
     exampleSrc:"A: The anesthetic will take effect in a few minutes.\nB: I really won't feel anything?",
     funFact:"The first public anesthesia demonstration was in 1846. France adopted it within months."},

    {type:"teach", trg:"anesthesier", src:"to anesthetize", pos:"verb", gender:null,
     note:"Verb. To administer anesthesia to numb pain or induce unconsciousness.",
     example:"A: Il faut anesthesier le patient avant l'operation.\nB: L'anesthesiste est pret.",
     exampleSrc:"A: We need to anesthetize the patient before the operation.\nB: The anesthesiologist is ready.",
     funFact:"From Greek 'anaisthesia' (without sensation). French hospitals use both general and local anesthesia."},

    {type:"teach", trg:"cancereux", src:"cancerous", pos:"adj", gender:null,
     note:"Adjective. Relating to or affected by cancer. Feminine: cancereuse.",
     example:"A: Les cellules cancereuses se multiplient rapidement.\nB: Le traitement vise a les eliminer.",
     exampleSrc:"A: Cancerous cells multiply rapidly.\nB: The treatment aims to eliminate them.",
     funFact:"France has one of Europe's best cancer survival rates thanks to its public health system."},

    {type:"teach", trg:"cancerigene", src:"carcinogenic", pos:"adj", gender:null,
     note:"Adjective. Capable of causing cancer. Same form for both genders.",
     example:"A: Cette substance est cancerigene.\nB: Il faut l'interdire immediatement.",
     exampleSrc:"A: This substance is carcinogenic.\nB: It must be banned immediately.",
     funFact:"France banned asbestos in 1997. The word 'cancerigene' appears often in French health regulations."},

    {type:"teach", trg:"l'allaitement", src:"the breastfeeding", pos:"noun", gender:"m",
     note:"Masculine noun. The act of nursing a baby.",
     example:"A: L'allaitement est recommande pendant six mois.\nB: C'est benefique pour le bebe et la mere.",
     exampleSrc:"A: Breastfeeding is recommended for six months.\nB: It's beneficial for both baby and mother.",
     funFact:"France has dedicated 'salles d'allaitement' in workplaces. The law protects nursing mothers."},

    {type:"mc",
     q:"Quel adjectif signifie 'qui peut provoquer un cancer' ?",
     opts:["cancerigene","cancereux","anesthesiant","dietetique"],
     ans:"cancerigene",
     hint:"Capable of causing cancer. The suffix '-gene' means 'producing' or 'causing'."},

    {type:"teach", trg:"la dietetique", src:"the dietetics, nutrition science", pos:"noun", gender:"f",
     note:"Feminine noun. The science of diet and nutrition.",
     example:"A: La dietetique joue un role cle dans la prevention.\nB: Bien manger, c'est la base de la sante.",
     exampleSrc:"A: Dietetics plays a key role in prevention.\nB: Eating well is the foundation of health.",
     funFact:"France's 'Programme National Nutrition Sante' promotes '5 fruits et legumes par jour'."},

    {type:"teach", trg:"la demotivation", src:"the demotivation, the discouragement", pos:"noun", gender:"f",
     note:"Feminine noun. Loss of motivation or enthusiasm.",
     example:"A: La demotivation des soignants est un probleme grave.\nB: Ils sont epuises et sous-payes.",
     exampleSrc:"A: The demotivation of healthcare workers is a serious problem.\nB: They are exhausted and underpaid.",
     funFact:"'Burn-out' is now recognized in French medicine. Demotivation is often its first warning sign."},

    {type:"teach", trg:"demotiver", src:"to demotivate, to discourage", pos:"verb", gender:null,
     note:"Verb. To cause someone to lose motivation.",
     example:"A: Les longues heures demotivent les employes.\nB: Il faut repenser l'organisation du travail.",
     exampleSrc:"A: Long hours demotivate employees.\nB: We need to rethink work organization.",
     funFact:"The opposite 'motiver' is equally common. French managers talk about 'motiver les equipes'."},

    {type:"teach", trg:"la depeche", src:"the dispatch, the telegram", pos:"noun", gender:"f",
     note:"Feminine noun. An urgent message or news report.",
     example:"A: Une depeche de l'AFP vient de tomber.\nB: Que dit-elle ?",
     exampleSrc:"A: An AFP dispatch just came in.\nB: What does it say?",
     funFact:"L'Agence France-Presse (AFP) is one of the world's oldest news agencies, founded in 1835."},

    {type:"fb",
     s:"Il faut {1} le patient avant l'intervention chirurgicale.",
     a:["anesthesier"],
     opts:["anesthesier","demotiver","dessecher","deposseeder"],
     hint:"To administer a substance that removes sensation before surgery.",
     sSrc:"We need to {1} the patient before the surgical procedure."},

    {type:"teach", trg:"la defaillance", src:"the failure, the malfunction", pos:"noun", gender:"f",
     note:"Feminine noun. A breakdown or weakness in a system or person.",
     example:"A: Une defaillance cardiaque peut etre fatale.\nB: C'est pourquoi les controles reguliers sont importants.",
     exampleSrc:"A: A cardiac failure can be fatal.\nB: That's why regular check-ups are important.",
     funFact:"In French law, 'defaillance' also means a party's failure to appear in court."},

    {type:"teach", trg:"l'embellissement", src:"the beautification, the improvement", pos:"noun", gender:"m",
     note:"Masculine noun. The act of making something more beautiful.",
     example:"A: L'embellissement du quartier a attire de nouveaux residents.\nB: Les espaces verts font toute la difference.",
     exampleSrc:"A: The beautification of the neighborhood attracted new residents.\nB: Green spaces make all the difference.",
     funFact:"Haussmann's embellissement of Paris in the 1860s created the boulevards we know today."},

    {type:"teach", trg:"l'asymetrie", src:"the asymmetry", pos:"noun", gender:"f",
     note:"Feminine noun. A lack of symmetry or balance.",
     example:"A: L'asymetrie du visage est tout a fait normale.\nB: Personne n'est parfaitement symetrique.",
     exampleSrc:"A: Facial asymmetry is perfectly normal.\nB: Nobody is perfectly symmetrical.",
     funFact:"In art, deliberate asymmetry creates visual interest. Japanese 'wabi-sabi' embraces this concept."},

    {type:"mc",
     q:"Quel mot decrit la perte de motivation chez les employes ?",
     opts:["l'asymetrie","la demotivation","la defaillance","la dietetique"],
     ans:"la demotivation",
     hint:"The loss of enthusiasm or drive. Think of the prefix 'de-' removing 'motivation'."},

    {type:"teach", trg:"la denaturation", src:"the denaturation, the distortion", pos:"noun", gender:"f",
     note:"Feminine noun. The alteration of something's natural state.",
     example:"A: La denaturation des proteines se produit a haute temperature.\nB: C'est pour cela qu'un oeuf durcit a la cuisson.",
     exampleSrc:"A: Protein denaturation occurs at high temperatures.\nB: That's why an egg hardens when cooked.",
     funFact:"In law, 'denaturer' means to misrepresent facts. A judge who denatures evidence commits an error."},

    {type:"teach", trg:"effectif", src:"effective, actual", pos:"adj", gender:null,
     note:"Adjective. Real and having a practical effect. Feminine: effective.",
     example:"A: La mesure sera effective des lundi.\nB: Tout le personnel est informe.",
     exampleSrc:"A: The measure will be effective from Monday.\nB: All staff have been informed.",
     funFact:"As a noun, 'l'effectif' means the headcount or workforce. Very common in business French."},

    {type:"teach", trg:"l'effronterie", src:"the effrontery, the audacity", pos:"noun", gender:"f",
     note:"Feminine noun. Shameless boldness or nerve.",
     example:"A: Il a eu l'effronterie de nier les faits.\nB: C'est incroyable, tout le monde a vu.",
     exampleSrc:"A: He had the effrontery to deny the facts.\nB: It's incredible, everyone saw.",
     funFact:"From 'front' (forehead). Someone 'effronte' literally has no shame on their face."},

    {type:"teach", trg:"la detonation", src:"the detonation, the explosion", pos:"noun", gender:"f",
     note:"Feminine noun. A loud explosion or the sound it makes.",
     example:"A: Une detonation a retenti dans la nuit.\nB: Les voisins ont appele la police.",
     exampleSrc:"A: A detonation echoed through the night.\nB: The neighbors called the police.",
     funFact:"From Latin 'detonare' (to thunder). French fireworks are called 'feux d'artifice', not detonations."},

    {type:"teach", trg:"le dechainement", src:"the unleashing, the outburst", pos:"noun", gender:"m",
     note:"Masculine noun. A violent outburst or release of something restrained.",
     example:"A: Le dechainement de violence a choque la nation.\nB: Des mesures d'urgence sont necessaires.",
     exampleSrc:"A: The outburst of violence shocked the nation.\nB: Emergency measures are necessary.",
     funFact:"Literally 'unchaining'. 'Se dechainer' means to go wild, like a storm or a crowd."},

    {type:"fb",
     s:"Une {1} cardiaque peut survenir sans signe avant-coureur.",
     a:["defaillance"],
     opts:["defaillance","detonation","denaturation","demotivation"],
     hint:"A breakdown or failure of an organ or system. Think of something that 'fails'.",
     sSrc:"A cardiac {1} can occur without warning signs."},

    {type:"match", pairs:[
      {trg:"anesthesiant", src:"anesthetic"},
      {trg:"allaitement", src:"breastfeeding"},
      {trg:"dietetique", src:"dietetics"},
      {trg:"defaillance", src:"failure"},
      {trg:"effronterie", src:"audacity"}
    ]},

    {type:"mc",
     q:"Quel mot designe un message urgent d'une agence de presse ?",
     opts:["une denaturation","une defaillance","une depeche","une detonation"],
     ans:"une depeche",
     hint:"An urgent news report or telegram. The AFP sends these every day."},

    {type:"fb",
     s:"Les substances {1} doivent etre clairement etiquetees.",
     a:["cancerigenes"],
     opts:["cancerigenes","cancereuses","effectives","asymetriques"],
     hint:"Products that can cause cancer. The label warns of this specific health risk.",
     sSrc:"{1} substances must be clearly labeled."}
  ]
};
export default LESSON_4;
