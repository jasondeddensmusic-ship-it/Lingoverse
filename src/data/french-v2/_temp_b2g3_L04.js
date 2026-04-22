const LESSON_4 = {
  id:"frv2_b2g3_l4", title:"Santé et médecine", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Santé et médecine",
     desc:"Learn medical and health vocabulary for discussing treatments, conditions, and the healthcare system in French.",
     goals:["Learn 17 B2 medical and health words","Discuss medical treatments and conditions","Navigate healthcare conversations"]},

    {type:"teach", trg:"un anesthésiant", src:"an anesthetic", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that causes loss of sensation.",
     example:"A: L'anesthésiant fera effet dans quelques minutes.\nB: D'accord, je ne sentirai rien ?",
     exampleSrc:"A: The anesthetic will take effect in a few minutes.\nB: Alright, I won't feel anything?",
     funFact:"The word comes from Greek 'anaisthesia' meaning without sensation. France pioneered anesthesia research in the 1840s."},

    {type:"teach", trg:"anesthésier", src:"to anesthetize", pos:"verb", gender:null,
     note:"Verb. To administer an anesthetic to numb pain.",
     example:"A: Il faut anesthésier le patient avant l'opération.\nB: L'anesthésiste est prêt.",
     exampleSrc:"A: We need to anesthetize the patient before the operation.\nB: The anesthesiologist is ready.",
     funFact:"In everyday French, 'anesthesier' is also used figuratively to mean numbing emotions or public opinion."},

    {type:"teach", trg:"cancéreux", src:"cancerous", pos:"adj", gender:null,
     note:"Adjective. Relating to or affected by cancer. Also used as a noun: un cancereux (a cancer patient).",
     example:"A: Les cellules cancéreuses se multiplient rapidement.\nB: Le traitement doit commencer vite.",
     exampleSrc:"A: The cancerous cells multiply rapidly.\nB: Treatment must begin quickly.",
     funFact:"France has one of Europe's highest cancer survival rates thanks to early screening programs like 'Octobre Rose' for breast cancer."},

    {type:"teach", trg:"cancérigène", src:"carcinogenic", pos:"adj", gender:null,
     note:"Adjective. Capable of causing cancer.",
     example:"A: Ce produit chimique est cancérigène.\nB: Il faut l'interdire immédiatement.",
     exampleSrc:"A: This chemical is carcinogenic.\nB: It must be banned immediately.",
     funFact:"France banned asbestos (amiante) in 1997 after it was confirmed cancérigène. The French word 'cancerogene' is an alternative form."},

    {type:"mc",
     q:"Quel mot décrit une substance qui peut provoquer un cancer ?",
     opts:["cancérigène","cancéreux","anesthésiant","atmosphérique"],
     ans:"cancérigène",
     hint:"This adjective means capable of causing cancer, not already affected by it."},

    {type:"teach", trg:"la diététique", src:"dietetics, nutrition science", pos:"noun", gender:"f",
     note:"Feminine noun. The science of diet and nutrition. Also used as an adjective.",
     example:"A: La diététique est essentielle pour la santé.\nB: Oui, bien manger, c'est prévenir les maladies.",
     exampleSrc:"A: Dietetics is essential for health.\nB: Yes, eating well means preventing diseases.",
     funFact:"The French 'regime' means both diet and political regime. 'Faire un regime' means to go on a diet."},

    {type:"teach", trg:"dessécher", src:"to dry out, to desiccate", pos:"verb", gender:null,
     note:"Verb. To remove moisture completely. Figuratively: to wither emotionally.",
     example:"A: La chaleur a desséché les cultures.\nB: Les agriculteurs demandent de l'aide.",
     exampleSrc:"A: The heat dried out the crops.\nB: Farmers are asking for help.",
     funFact:"The beauty industry uses 'dessechement' as a key selling point. French skincare products always promise to combat 'peau dessechee'."},

    {type:"teach", trg:"atmosphérique", src:"atmospheric", pos:"adj", gender:null,
     note:"Adjective. Relating to the atmosphere or air quality.",
     example:"A: La pression atmosphérique est en baisse.\nB: On peut s'attendre à de la pluie demain.",
     exampleSrc:"A: The atmospheric pressure is dropping.\nB: We can expect rain tomorrow.",
     funFact:"French weather reports always mention 'pression atmospherique'. It was first measured by Blaise Pascal in 1648 on Puy de Dome."},

    {type:"teach", trg:"aéronautique", src:"aeronautical", pos:"adj", gender:null,
     note:"Adjective. Relating to aircraft design and navigation. Also a noun: l'aeronautique.",
     example:"A: L'industrie aéronautique française est mondialement reconnue.\nB: Airbus est le fleuron national.",
     exampleSrc:"A: The French aeronautical industry is world-renowned.\nB: Airbus is the national flagship.",
     funFact:"France's aeronautical tradition began with the Montgolfier brothers' hot air balloon in 1783, near Lyon."},

    {type:"fb",
     s:"Il faut {1} le patient avant de procéder à l'intervention chirurgicale.",
     a:["anesthésier"],
     opts:["anesthésier","dessécher","démotiver","décortiquer"],
     hint:"This verb means to administer a substance that removes sensation before surgery.",
     sSrc:"We must {1} the patient before proceeding with the surgical procedure."},

    {type:"teach", trg:"un décimètre", src:"a decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. A unit of measurement equal to 10 centimeters.",
     example:"A: Mesure ce tissu en décimètres.\nB: Il fait cinq décimètres de large.",
     exampleSrc:"A: Measure this fabric in decimeters.\nB: It is five decimeters wide.",
     funFact:"France created the metric system during the Revolution in 1795. The decimetre is rarely used in daily life but common in science."},

    {type:"teach", trg:"la déduction", src:"a deduction", pos:"noun", gender:"f",
     note:"Feminine noun. Logical reasoning from general to specific, or a subtraction.",
     example:"A: Par déduction, c'est la seule solution possible.\nB: Ton raisonnement est impeccable.",
     exampleSrc:"A: By deduction, it's the only possible solution.\nB: Your reasoning is impeccable.",
     funFact:"Descartes' method of 'deduction' shaped French intellectual culture. The phrase 'par deduction' signals rigorous logical thinking."},

    {type:"teach", trg:"décomposer", src:"to decompose, to break down", pos:"verb", gender:null,
     note:"Verb. To separate into parts or to rot. Figuratively: to analyze step by step.",
     example:"A: Décomposons le problème en étapes simples.\nB: Bonne idée, c'est plus facile ainsi.",
     exampleSrc:"A: Let's break down the problem into simple steps.\nB: Good idea, it's easier that way.",
     funFact:"In math class, French students 'decomposent' numbers into prime factors. The method is called 'decomposition en facteurs premiers'."},

    {type:"mc",
     q:"Quel verbe signifie séparer quelque chose en parties pour l'analyser ?",
     opts:["démotiver","décomposer","dessécher","anesthésier"],
     ans:"décomposer",
     hint:"This verb means to break something into its component parts, like analyzing a problem step by step."},

    {type:"teach", trg:"la clarté", src:"clarity, brightness", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being clear, whether in light or in thought.",
     example:"A: La clarté de son explication m'a impressionné.\nB: Elle sait vulgariser les sujets complexes.",
     exampleSrc:"A: The clarity of her explanation impressed me.\nB: She knows how to simplify complex topics.",
     funFact:"'La clarte francaise' is a concept claiming French is inherently clear and logical. Rivarol's 1784 essay famously defended this idea."},

    {type:"teach", trg:"un contour", src:"an outline, a contour", pos:"noun", gender:"m",
     note:"Masculine noun. The outer edge or shape of something.",
     example:"A: Les contours de la montagne se dessinent dans la brume.\nB: C'est un paysage magnifique.",
     exampleSrc:"A: The contours of the mountain appear in the mist.\nB: It's a magnificent landscape.",
     funFact:"In French makeup, 'contour' became a global beauty term. The technique of 'contouring' keeps its French pronunciation worldwide."},

    {type:"teach", trg:"budgétaire", src:"budgetary", pos:"adj", gender:null,
     note:"Adjective. Relating to a budget or financial planning.",
     example:"A: Les restrictions budgétaires affectent tous les services.\nB: Il faut faire des choix difficiles.",
     exampleSrc:"A: Budget restrictions affect all departments.\nB: Difficult choices must be made.",
     funFact:"The word 'budget' itself comes from Old French 'bougette' meaning a small leather bag for carrying money."},

    {type:"match", pairs:[
      {trg:"anesthésiant", src:"anesthetic"},
      {trg:"cancérigène", src:"carcinogenic"},
      {trg:"diététique", src:"dietetics"},
      {trg:"clarté", src:"clarity"},
      {trg:"budgétaire", src:"budgetary"}
    ]},

    {type:"fb",
     s:"Les restrictions {1} ont forcé l'hôpital à réduire le nombre de lits.",
     a:["budgétaires"],
     opts:["budgétaires","atmosphériques","cancéreuses","aéronautiques"],
     hint:"This adjective relates to financial planning and spending limits.",
     sSrc:"The {1} restrictions forced the hospital to reduce the number of beds."}
  ]
};
export default LESSON_4;
