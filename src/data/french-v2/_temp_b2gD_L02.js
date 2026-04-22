// French B2 Gap Batch D Lesson 2. Health and Medicine
const LESSON_2 = {id:"frv2_b2gD_l2", title:"Santé et médecine", icon:"🏥", xp:15, board:true, steps:[
  {type:"intro", title:"Santé et médecine",
   desc:"Learn specialized vocabulary for discussing health issues, medical procedures, and wellness in French.",
   goals:["Learn 10 medical and health terms","Discuss symptoms, treatments, and wellbeing","Use formal medical register"]},

  {type:"teach", trg:"le pédiatre", src:"the pediatrician", pos:"noun", gender:"m",
   note:"A doctor specializing in children's health.\nFeminine form is also 'la pédiatre'.",
   example:"A: Le pédiatre a examiné notre fille.\nB: Qu'est-ce qu'il a dit?\nA: Rien de grave, juste un petit rhume.\nB: Tant mieux, on s'inquiétait.",
   exampleSrc:"A: The pediatrician examined our daughter.\nB: What did he say?\nA: Nothing serious, just a small cold.\nB: Thank goodness, we were worried.",
   funFact:"From Greek 'pais' (child) + 'iatros' (healer). The same 'ped-' root appears in 'pédagogie'."},

  {type:"teach", trg:"l'indigestion", src:"the indigestion", pos:"noun", gender:"f",
   note:"Difficulty digesting food, stomach discomfort.\nCommon after heavy meals.",
   example:"A: J'ai une terrible indigestion.\nB: Tu as trop mangé hier soir?\nA: Oui, le repas de fête était copieux.\nB: Prends une tisane, ça va t'aider.",
   exampleSrc:"A: I have terrible indigestion.\nB: Did you eat too much last night?\nA: Yes, the party meal was heavy.\nB: Have some herbal tea, it will help.",
   funFact:"From Latin 'indigestio'. The prefix 'in-' negates 'digestion'. French cuisine is rich but portions are traditionally smaller."},

  {type:"teach", trg:"l'inhalation", src:"the inhalation", pos:"noun", gender:"f",
   note:"Breathing in steam or medicine through the nose/mouth.\nA common cold remedy in France.",
   example:"A: Le médecin m'a conseillé des inhalations.\nB: Avec de l'eucalyptus?\nA: Oui, matin et soir pendant une semaine.\nB: C'est très efficace contre la congestion.",
   exampleSrc:"A: The doctor recommended inhalations.\nB: With eucalyptus?\nA: Yes, morning and evening for a week.\nB: It's very effective against congestion.",
   funFact:"French pharmacies sell special inhalation devices. Home steam inhalation with herbs is a classic French remedy."},

  {type:"teach", trg:"la malformation", src:"the malformation", pos:"noun", gender:"f",
   note:"An abnormal physical structure present from birth.\nMedical term, also used figuratively.",
   example:"A: La malformation a été détectée lors de l'échographie.\nB: C'est opérable?\nA: Oui, le chirurgien est optimiste.\nB: La médecine a fait d'énormes progrès.",
   exampleSrc:"A: The malformation was detected during the ultrasound.\nB: Is it operable?\nA: Yes, the surgeon is optimistic.\nB: Medicine has made enormous progress.",
   funFact:"From 'mal-' (badly) + 'formation'. The prefix 'mal-' appears in many medical terms: malaise, maladie, malnutrition."},

  {type:"mc",
   q:"Quel médecin soigne spécifiquement les enfants?",
   opts:["Le pédiatre","Le psychiatre","Le chirurgien","Le dermatologue"],
   ans:"Le pédiatre",
   hint:"The root 'péd-' comes from Greek and refers to children."},

  {type:"teach", trg:"l'insuffisance", src:"the insufficiency / failure", pos:"noun", gender:"f",
   note:"A lack or inadequacy. Medical: organ failure.\n'Insuffisance cardiaque' = heart failure.",
   example:"A: Il souffre d'une insuffisance rénale.\nB: Depuis combien de temps?\nA: Deux ans. Il est sous dialyse.\nB: Est-il sur la liste d'attente pour une greffe?",
   exampleSrc:"A: He suffers from kidney failure.\nB: For how long?\nA: Two years. He is on dialysis.\nB: Is he on the waiting list for a transplant?",
   funFact:"From 'in-' (not) + 'suffisance' (sufficiency). The adjective 'insuffisant' is common on French school reports."},

  {type:"teach", trg:"l'incapacité", src:"the inability / disability", pos:"noun", gender:"f",
   note:"The state of being unable to do something.\nLegal: 'incapacité de travail' (work disability).",
   example:"A: Son incapacité temporaire a duré trois mois.\nB: L'assurance a couvert la période?\nA: Oui, heureusement.\nB: C'est important d'être bien assuré.",
   exampleSrc:"A: Her temporary disability lasted three months.\nB: Did the insurance cover the period?\nA: Yes, fortunately.\nB: It's important to be well insured.",
   funFact:"The prefix chain 'in-' + 'capacité' mirrors English 'incapacity'. French bureaucracy distinguishes several degrees of incapacité."},

  {type:"teach", trg:"la mutilation", src:"the mutilation", pos:"noun", gender:"f",
   note:"Deliberate damage to a body or object.\nAlso used figuratively for text or art.",
   example:"A: La mutilation des arbres dans le parc est scandaleuse.\nB: Qui a fait ça?\nA: Des vandales, apparemment.\nB: Il faut renforcer la surveillance.",
   exampleSrc:"A: The mutilation of the trees in the park is outrageous.\nB: Who did that?\nA: Vandals, apparently.\nB: Security needs to be strengthened.",
   funFact:"From Latin 'mutilare' (to cut off). In French law, 'automutilation' is distinguished from external violence."},

  {type:"fb",
   s:"Le patient souffre d'une {1} cardiaque depuis plusieurs années.",
   a:["insuffisance"],
   opts:["insuffisance","indigestion","inhalation","incapacité"],
   hint:"This medical term describes when an organ cannot function adequately, specifically the heart.",
   sSrc:"The patient has been suffering from heart {1} for several years."},

  {type:"teach", trg:"la pâleur", src:"the paleness / pallor", pos:"noun", gender:"f",
   note:"Lack of color in the skin, often a sign of illness.\nFrom 'pâle' (pale).",
   example:"A: Ta pâleur m'inquiète. Tu te sens bien?\nB: J'ai un peu de fièvre depuis ce matin.\nA: Tu devrais consulter un médecin.\nB: Oui, je vais prendre rendez-vous.",
   exampleSrc:"A: Your pallor worries me. Are you feeling okay?\nB: I've had a slight fever since this morning.\nA: You should see a doctor.\nB: Yes, I'll make an appointment.",
   funFact:"The circumflex accent on 'pâleur' marks a lost 's' from Old French 'pasleur'. Compare with English 'pallor'."},

  {type:"teach", trg:"la mâchoire", src:"the jaw", pos:"noun", gender:"f",
   note:"The bone structure of the mouth.\n'Serrer la mâchoire' means to clench one's jaw.",
   example:"A: J'ai mal à la mâchoire depuis hier.\nB: Tu as peut-être grincé des dents la nuit.\nA: C'est possible, je suis stressé en ce moment.\nB: Le dentiste peut te faire une gouttière.",
   exampleSrc:"A: My jaw has been hurting since yesterday.\nB: Maybe you were grinding your teeth at night.\nA: That's possible, I'm stressed right now.\nB: The dentist can make you a mouth guard.",
   funFact:"The circumflex on 'mâchoire' again marks a historical 's'. Related to 'mâcher' (to chew)."},

  {type:"mc",
   q:"Que signifie 'la pâleur' chez un patient?",
   opts:["Une incapacité de travail","Un manque de couleur dans la peau","Une douleur dans la mâchoire","Un problème de digestion"],
   ans:"Un manque de couleur dans la peau",
   hint:"Think of the adjective 'pâle' and what it describes about someone's appearance."},

  {type:"match", pairs:[
    {trg:"pédiatre", src:"pediatrician"},
    {trg:"insuffisance", src:"failure / insufficiency"},
    {trg:"mâchoire", src:"jaw"},
    {trg:"pâleur", src:"pallor"},
    {trg:"malformation", src:"malformation"}
  ]},

  {type:"fb",
   s:"Le dentiste a détecté un problème au niveau de la {1} inférieure.",
   a:["mâchoire"],
   opts:["mâchoire","pâleur","mutilation","inhalation"],
   hint:"This is the bone structure that holds the lower teeth and enables chewing.",
   sSrc:"The dentist detected a problem with the lower {1}."}
]};
export default LESSON_2;
