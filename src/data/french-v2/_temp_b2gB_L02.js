const LESSON_2 = {
  id:"frv2_b2gB_l2", title:"Sante et corps", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sante et corps",
     desc:"Learn medical and health vocabulary at B2 level. From diagnoses to treatments, express yourself in healthcare contexts.",
     goals:["Learn 10 health and body terms","Discuss medical situations in French","Describe symptoms and treatments"]},

    {type:"teach", trg:"une indigestion", src:"an indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Discomfort caused by difficulty digesting food.\nAlso used figuratively: une indigestion de series TV.",
     example:"A: J'ai une terrible indigestion depuis hier.\nB: Tu as mange quoi exactement?",
     exampleSrc:"A: I've had terrible indigestion since yesterday.\nB: What exactly did you eat?",
     funFact:"The French eat later than most Europeans (8pm dinner), yet report fewer digestive issues. The secret may be smaller portions."},

    {type:"teach", trg:"une inhalation", src:"an inhalation", pos:"noun", gender:"f",
     note:"Feminine noun. Breathing in steam or medication.\nFaire une inhalation is a common home remedy in France.",
     example:"A: Le medecin m'a recommande des inhalations.\nB: Avec de l'eucalyptus, c'est tres efficace.",
     exampleSrc:"A: The doctor recommended inhalations for me.\nB: With eucalyptus, it's very effective.",
     funFact:"French pharmacies sell inhalation kits as standard items. Steam inhalation remains a first-line cold treatment in France."},

    {type:"teach", trg:"une malformation", src:"a malformation", pos:"noun", gender:"f",
     note:"Feminine noun. An abnormal formation of a body part.\nMal (bad) + formation.",
     example:"A: La malformation a ete detectee pendant l'echographie.\nB: Heureusement, elle est operable.",
     exampleSrc:"A: The malformation was detected during the ultrasound.\nB: Fortunately, it's operable.",
     funFact:"France has one of the world's best prenatal screening programs. Echographies are fully covered by social security."},

    {type:"teach", trg:"une insuffisance", src:"an insufficiency, a failure", pos:"noun", gender:"f",
     note:"Feminine noun. Inadequate functioning of an organ or system.\nInsuffisance cardiaque = heart failure.",
     example:"A: Il souffre d'une insuffisance renale.\nB: Il doit faire de la dialyse trois fois par semaine.",
     exampleSrc:"A: He suffers from renal insufficiency.\nB: He has to do dialysis three times a week.",
     funFact:"France's healthcare system was ranked number one in the world by the WHO in 2000. Coverage is nearly universal."},

    {type:"teach", trg:"la machoire", src:"the jaw", pos:"noun", gender:"f",
     note:"Feminine noun. The bony structure of the mouth.\nMachoire superieure (upper) and inferieure (lower).",
     example:"A: J'ai mal a la machoire depuis ce matin.\nB: Tu grinces des dents la nuit peut-etre?",
     exampleSrc:"A: My jaw has been hurting since this morning.\nB: Maybe you grind your teeth at night?",
     funFact:"The French expression 'bailler a s'en decrocher la machoire' means to yawn so wide your jaw might unhinge."},

    {type:"teach", trg:"le paludisme", src:"malaria", pos:"noun", gender:"m",
     note:"Masculine noun. A tropical disease transmitted by mosquitoes.\nAlso called 'la malaria' in informal speech.",
     example:"A: Le paludisme reste un fleau en Afrique.\nB: Des millions de personnes en meurent encore chaque annee.",
     exampleSrc:"A: Malaria remains a scourge in Africa.\nB: Millions of people still die from it every year.",
     funFact:"From Latin 'palus' meaning swamp. The French word reminds us the disease was once linked to swampy areas."},

    {type:"teach", trg:"la mutilation", src:"mutilation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of inflicting serious damage on a body.\nAutomuilation is a recognized medical concern.",
     example:"A: La mutilation des monuments est un delit grave.\nB: C'est la meme chose pour le patrimoine naturel.",
     exampleSrc:"A: Mutilation of monuments is a serious offense.\nB: It's the same for natural heritage.",
     funFact:"The word is used both for physical injury and for damage to property. Mutiler un texte means to badly edit a text."},

    {type:"teach", trg:"une incapacite", src:"an incapacity, a disability", pos:"noun", gender:"f",
     note:"Feminine noun. Inability to do something, or legal incompetence.\nIncapacite de travail = work disability.",
     example:"A: Son incapacite de travail est estimee a six mois.\nB: L'assurance va couvrir cette periode.",
     exampleSrc:"A: His work disability is estimated at six months.\nB: Insurance will cover this period.",
     funFact:"French workers get 'arrets maladie' (sick leave certificates) from their doctor. France has one of the highest sick leave rates in Europe."},

    {type:"teach", trg:"la paralysie", src:"paralysis", pos:"noun", gender:"f",
     note:"Feminine noun. Loss of ability to move part of the body.\nAlso used figuratively: la paralysie du gouvernement.",
     example:"A: La paralysie de sa jambe gauche est temporaire.\nB: La reeducation devrait aider.",
     exampleSrc:"A: The paralysis of his left leg is temporary.\nB: Rehabilitation should help.",
     funFact:"Figuratively, French media often speak of 'paralysie' when describing government gridlock or economic stagnation."},

    {type:"teach", trg:"l'inefficacite", src:"inefficiency, ineffectiveness", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of effectiveness or productivity.\nIn (not) + efficacite (efficiency).",
     example:"A: L'inefficacite de ce traitement est prouvee.\nB: Il faut changer de medicament alors.",
     exampleSrc:"A: The ineffectiveness of this treatment is proven.\nB: We need to change medication then.",
     funFact:"French has a rich system of negative prefixes: in-, im-, ir-, il-. Each attaches to different starting letters."},

    {type:"mc", q:"Quel organe est touche par une 'insuffisance renale'?",
     opts:["Les reins","Le coeur","Le foie","Les poumons"],
     ans:"Les reins",
     hint:"Renal comes from the Latin word for kidney"},

    {type:"fb", s:"Le {1} est transmis par les moustiques.",
     a:["paludisme"], opts:["paludisme","indigestion","paralysie","machoire"],
     hint:"This tropical disease was historically linked to swampy regions",
     sSrc:"{1} is transmitted by mosquitoes."},

    {type:"mc", q:"Que signifie 'gricer des dents'?",
     opts:["Frotter les dents les unes contre les autres","Sourire largement","Manger vite","Se brosser les dents"],
     ans:"Frotter les dents les unes contre les autres",
     hint:"This involuntary action often happens during sleep and causes jaw pain"},

    {type:"match", pairs:[
      {trg:"la machoire", src:"the jaw"},
      {trg:"le paludisme", src:"malaria"},
      {trg:"une insuffisance", src:"an insufficiency"},
      {trg:"une inhalation", src:"an inhalation"}
    ]},

    {type:"fb", s:"Son {1} de travail dure depuis trois mois.",
     a:["incapacite"], opts:["incapacite","inefficacite","indigestion","inhalation"],
     hint:"This medical term describes the inability to work due to health reasons",
     sSrc:"His work {1} has lasted for three months."},

    {type:"mc", q:"Comment dit-on 'malaria' en francais medical?",
     opts:["le paludisme","la mutilation","la paralysie","l'indigestion"],
     ans:"le paludisme",
     hint:"The French medical term comes from the Latin word for swamp"},

    {type:"fb", s:"La {1} de ce medicament a ete demontree par l'etude.",
     a:["inefficacite"], opts:["inefficacite","insuffisance","malformation","paralysie"],
     hint:"The noun means lack of effectiveness, formed with a negative prefix",
     sSrc:"The {1} of this medication was demonstrated by the study."},

    {type:"mc", q:"'Une malformation congenitale' signifie:",
     opts:["Un defaut present depuis la naissance","Une blessure recente","Une infection grave","Un traitement experimental"],
     ans:"Un defaut present depuis la naissance",
     hint:"Congenital means something you are born with, and mal means bad"},

    {type:"fb", s:"La {1} du gouvernement empeche toute reforme.",
     a:["paralysie"], opts:["paralysie","machoire","mutilation","indigestion"],
     hint:"This medical term is used figuratively for total inability to act or move forward",
     sSrc:"The {1} of the government prevents any reform."},

    {type:"match", pairs:[
      {trg:"une malformation", src:"a malformation"},
      {trg:"la mutilation", src:"mutilation"},
      {trg:"une incapacite", src:"a disability"},
      {trg:"l'inefficacite", src:"ineffectiveness"}
    ]}
  ]
};
export default LESSON_2;
