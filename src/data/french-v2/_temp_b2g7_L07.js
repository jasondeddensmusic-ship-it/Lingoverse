const LESSON_7 = {
  id:"frv2_b2g7_l7", title:"Justice et loi", icon:"\u{2696}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Justice et loi",
     desc:"Learn vocabulary for discussing legal matters, justice, and moral judgments.",
     goals:["Learn 15 words related to law and justice","Discuss legal proceedings","Express moral positions"]},

    {type:"teach", trg:"la laicisation", src:"secularization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of removing religious influence from public life.",
     example:"A: La laicisation de l'ecole date de 1882.\nB: C'est un pilier de la Republique.",
     exampleSrc:"A: The secularization of schools dates from 1882.\nB: It's a pillar of the Republic.",
     funFact:"France's 'laicite' is unique in Europe. The 1905 law strictly separates church and state. No equivalent exists in English."},

    {type:"teach", trg:"liberatoire", src:"liberating, discharging (debt)", pos:"adj", gender:null,
     note:"Adjective. That frees from an obligation, especially financial.",
     example:"A: Ce paiement est liberatoire.\nB: Parfait, la dette est donc effacee.",
     exampleSrc:"A: This payment is discharging.\nB: Perfect, so the debt is cleared.",
     funFact:"In French law, 'paiement liberatoire' means a payment that fully settles a debt. Very formal, mostly legal or financial."},

    {type:"teach", trg:"la jointure", src:"a joint, a junction", pos:"noun", gender:"f",
     note:"Feminine noun. The place where two things meet or connect.",
     example:"A: La jointure entre les deux pieces fuit.\nB: Il faut appeler un plombier.",
     exampleSrc:"A: The joint between the two pieces is leaking.\nB: We need to call a plumber.",
     funFact:"Also used for finger joints: 'les jointures des doigts'. 'Faire craquer ses jointures' means to crack one's knuckles."},

    {type:"teach", trg:"la guise", src:"way, manner", pos:"noun", gender:"f",
     note:"Feminine noun. Mostly used in 'a sa guise' (as one pleases)\nor 'en guise de' (by way of).",
     example:"A: Chacun fait a sa guise ici.\nB: C'est la liberte totale.",
     exampleSrc:"A: Everyone does as they please here.\nB: It's total freedom.",
     funFact:"'En guise de' is a very useful formal expression meaning 'by way of' or 'as a kind of'. Common in writing."},

    {type:"mc",
     q:"Quel processus a separe l'ecole de l'Eglise en France ?",
     opts:["la laicisation","la justification","la materialisation","la mediation"],
     ans:"la laicisation",
     hint:"Making something secular, removing religious influence from public institutions."},

    {type:"teach", trg:"le guet-apens", src:"an ambush, a trap", pos:"noun", gender:"m",
     note:"Masculine noun. A planned surprise attack.\nPlural: des guets-apens.",
     example:"A: Les soldats sont tombes dans un guet-apens.\nB: L'ennemi les attendait.",
     exampleSrc:"A: The soldiers fell into an ambush.\nB: The enemy was waiting for them.",
     funFact:"From 'guet' (watch) + 'apens' (premeditated). In French law, 'guet-apens' is an aggravating circumstance for assault."},

    {type:"teach", trg:"le laissez-passer", src:"a pass, a permit", pos:"noun", gender:"m",
     note:"Masculine noun. An official document allowing passage.\nInvariable: des laissez-passer.",
     example:"A: Avez-vous votre laissez-passer ?\nB: Oui, il est valable jusqu'a vendredi.",
     exampleSrc:"A: Do you have your pass?\nB: Yes, it's valid until Friday.",
     funFact:"Literally 'let pass'. This French term is used internationally for travel documents issued by organizations like the UN."},

    {type:"teach", trg:"l'inflexion", src:"an inflection, a shift", pos:"noun", gender:"f",
     note:"Feminine noun. A change in direction, tone, or policy.",
     example:"A: L'inflexion de sa voix trahissait l'emotion.\nB: Il essayait de rester calme.",
     exampleSrc:"A: The inflection in his voice betrayed his emotion.\nB: He was trying to stay calm.",
     funFact:"In economics, 'point d'inflexion' means the moment a trend reverses. In grammar, it refers to word endings."},

    {type:"fb",
     s:"Les rebelles ont tendu un {1} a la patrouille ennemie.",
     a:["guet-apens"],
     opts:["guet-apens","laissez-passer","inflexion","guise"],
     hint:"A planned surprise attack where the enemy is lying in wait.",
     sSrc:"The rebels set up an {1} for the enemy patrol."},

    {type:"teach", trg:"l'integrisme", src:"fundamentalism", pos:"noun", gender:"m",
     note:"Masculine noun. Strict adherence to the literal meaning of a doctrine.",
     example:"A: L'integrisme menace la liberte de pensee.\nB: Toute forme d'extremisme est dangereuse.",
     exampleSrc:"A: Fundamentalism threatens freedom of thought.\nB: Any form of extremism is dangerous.",
     funFact:"Originally referred to Catholic traditionalists rejecting Vatican II reforms. Now used for any rigid doctrinal stance."},

    {type:"teach", trg:"l'interiorisation", src:"internalization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of absorbing beliefs or values internally.",
     example:"A: L'interiorisation des normes sociales commence tres tot.\nB: Des l'enfance, on apprend les regles.",
     exampleSrc:"A: The internalization of social norms starts very early.\nB: From childhood, we learn the rules.",
     funFact:"A key concept in French sociology (Bourdieu's 'habitus'). Children internalize social codes without conscious effort."},

    {type:"teach", trg:"la deduction", src:"deduction", pos:"noun", gender:"f",
     note:"Feminine noun. Logical reasoning from general to specific.\nAlso: tax deduction.",
     example:"A: Par deduction, le coupable est le jardinier.\nB: Sherlock Holmes serait fier de toi.",
     exampleSrc:"A: By deduction, the culprit is the gardener.\nB: Sherlock Holmes would be proud of you.",
     funFact:"In French taxes, 'deduction fiscale' is a tax deduction. In logic, deduction contrasts with 'induction'."},

    {type:"mc",
     q:"Quel document officiel permet de passer un controle ?",
     opts:["un laissez-passer","un guet-apens","une inflexion","une guise"],
     ans:"un laissez-passer",
     hint:"Literally 'let pass'. An official permit for access or passage."},

    {type:"teach", trg:"la magouille", src:"a scheme, a shady deal", pos:"noun", gender:"f",
     note:"Feminine noun. Informal. Dishonest manipulation or fraud.",
     example:"A: Il y a eu des magouilles dans cette election.\nB: Une enquete est ouverte.",
     exampleSrc:"A: There were shady dealings in this election.\nB: An investigation has been opened.",
     funFact:"Very common in French political vocabulary. 'Magouiller' is the verb. Implies corruption without being as strong as 'fraude'."},

    {type:"teach", trg:"la manivelle", src:"a crank, a handle", pos:"noun", gender:"f",
     note:"Feminine noun. A handle turned to operate a mechanism.",
     example:"A: Tourne la manivelle pour ouvrir le store.\nB: Ca me rappelle les vieilles voitures.",
     exampleSrc:"A: Turn the crank to open the blind.\nB: It reminds me of old cars.",
     funFact:"'Donner le premier tour de manivelle' means to start filming a movie. From the hand-cranked cameras of early cinema."},

    {type:"fb",
     s:"La {1} des valeurs republicaines est un objectif de l'ecole.",
     a:["interiorisation"],
     opts:["interiorisation","integrisme","inflexion","idealisation"],
     hint:"Making beliefs part of your inner self, absorbing values unconsciously.",
     sSrc:"The {1} of republican values is a goal of the school system."},

    {type:"match", pairs:[
      {trg:"laicisation", src:"secularization"},
      {trg:"guet-apens", src:"ambush"},
      {trg:"deduction", src:"deduction"},
      {trg:"magouille", src:"shady deal"},
      {trg:"manivelle", src:"crank"}
    ]},

    {type:"mc",
     q:"Quel mot designe des manipulations malhonnetes en politique ?",
     opts:["des magouilles","des inflexions","des jointures","des manivelles"],
     ans:"des magouilles",
     hint:"Informal word for corrupt dealings and backroom scheming."},

    {type:"fb",
     s:"En {1} de dessert, je vous propose un cafe.",
     a:["guise"],
     opts:["guise","jointure","inflexion","deduction"],
     hint:"'By way of' or 'instead of'. A formal expression using this noun.",
     sSrc:"By way of dessert, I suggest a coffee."}
  ]
};
export default LESSON_7;
