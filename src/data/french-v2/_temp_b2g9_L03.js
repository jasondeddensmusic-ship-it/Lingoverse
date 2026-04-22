// French B2 Gap Batch 9. Lesson 3: Santé et Corps
// Health and body vocabulary

const LESSON_3 = {id:"frv2_b2g9_l3", title:"Santé et Corps", icon:"🏥", xp:15, board:true, steps:[
  {type:"intro", title:"Santé et Corps",
   desc:"Build vocabulary for discussing health, medical conditions, and the human body at an advanced level. Essential for B2 medical and scientific discussions.",
   goals:["Learn 20 health and body words","Discuss medical conditions","Understand scientific health vocabulary"]},

  {type:"teach", trg:"la mâchoire", src:"jaw", pos:"noun", gender:"f",
   note:"Feminine noun. The bony structure of the mouth.\nMâcher = to chew.",
   example:"A: Il s'est cassé la mâchoire en tombant.\nB: Il faudra une opération.",
   exampleSrc:"A: He broke his jaw falling.\nB: Surgery will be needed.",
   funFact:"From Latin masticare via Old French maschoire. Related to 'masticate' in English."},

  {type:"teach", trg:"l'inhalation", src:"inhalation", pos:"noun", gender:"f",
   note:"From inhaler (to inhale) + -ation.\nMedical breathing treatment or the act of breathing in.",
   example:"A: Le médecin a prescrit des inhalations.\nB: Ça va soulager ta bronchite.",
   exampleSrc:"A: The doctor prescribed inhalations.\nB: It will relieve your bronchitis.",
   funFact:"In French pharmacies, you can buy inhalation devices without prescription for minor colds."},

  {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
   note:"In- (bad) + digestion.\nStomach discomfort after eating too much.",
   example:"A: J'ai une terrible indigestion.\nB: Tu as trop mangé au restaurant hier soir.",
   exampleSrc:"A: I have terrible indigestion.\nB: You ate too much at the restaurant last night.",
   funFact:"The French phrase 'une indigestion de' is used figuratively: 'une indigestion de films' means you watched too many."},

  {type:"teach", trg:"la malformation", src:"malformation", pos:"noun", gender:"f",
   note:"Mal- (bad) + formation.\nAbnormal development, usually congenital.",
   example:"A: La malformation a été détectée avant la naissance.\nB: Les médecins peuvent intervenir tôt.",
   exampleSrc:"A: The malformation was detected before birth.\nB: Doctors can intervene early.",
   funFact:"Mal- as a prefix meaning 'bad' appears in many French words: malade, malheur, malsain."},

  {type:"teach", trg:"la paralysie", src:"paralysis", pos:"noun", gender:"f",
   note:"Loss of muscle function.\nFrom Greek paralysis via Latin.",
   example:"A: La paralysie était temporaire, heureusement.\nB: Il a retrouvé l'usage de ses jambes.",
   exampleSrc:"A: The paralysis was temporary, fortunately.\nB: He regained the use of his legs.",
   funFact:"French also uses paralysie figuratively: 'la paralysie du système' means the system is stuck."},

  {type:"teach", trg:"la mutilation", src:"mutilation", pos:"noun", gender:"f",
   note:"From mutiler (to mutilate).\nSerious bodily harm or disfigurement.",
   example:"A: La mutilation est un crime grave.\nB: Les victimes ont besoin de soutien psychologique.",
   exampleSrc:"A: Mutilation is a serious crime.\nB: The victims need psychological support.",
   funFact:"French law distinguishes mutilation from blessure (injury) based on permanence."},

  {type:"teach", trg:"le paludisme", src:"malaria", pos:"noun", gender:"m",
   note:"From Latin palus (swamp).\nThe French medical term for malaria.",
   example:"A: Le paludisme tue encore des milliers de personnes.\nB: Le vaccin est un espoir immense.",
   exampleSrc:"A: Malaria still kills thousands of people.\nB: The vaccine is an immense hope.",
   funFact:"English 'malaria' comes from Italian mala aria (bad air). French chose the Latin swamp root instead."},

  {type:"teach", trg:"physiologique", src:"physiological", pos:"adj", gender:null,
   note:"Relating to how the body functions.\nFrom physiologie + -ique.",
   example:"A: C'est une réaction physiologique normale.\nB: Le corps se défend automatiquement.",
   exampleSrc:"A: It's a normal physiological reaction.\nB: The body defends itself automatically.",
   funFact:"Sérum physiologique (saline solution) is a staple in every French pharmacy."},

  {type:"teach", trg:"la physionomie", src:"physiognomy, facial features", pos:"noun", gender:"f",
   note:"The features of a person's face.\nFrom Greek physis (nature) + gnomon (judge).",
   example:"A: Il a une physionomie très expressive.\nB: On peut lire ses émotions sur son visage.",
   exampleSrc:"A: He has very expressive facial features.\nB: You can read his emotions on his face.",
   funFact:"A physionomiste in French is someone who remembers faces well, often a nightclub bouncer."},

  {type:"mc", q:"Le paludisme est le nom français pour:", opts:["La malaria","Le diabète","La grippe","Le cancer"], ans:"La malaria",
   hint:"The French word comes from Latin palus (swamp), where mosquitoes breed."},

  {type:"teach", trg:"la jointure", src:"joint (body)", pos:"noun", gender:"f",
   note:"Where two bones meet.\nFrom joindre (to join).",
   example:"A: J'ai mal aux jointures des doigts.\nB: C'est peut-être de l'arthrite.",
   exampleSrc:"A: My finger joints hurt.\nB: It might be arthritis.",
   funFact:"Jointure is from the same root as English 'joint' and 'junction'. All from Latin jungere."},

  {type:"teach", trg:"le décimètre", src:"decimeter", pos:"noun", gender:"m",
   note:"Déci- (tenth) + mètre (meter).\n10 cm. Used in French schools.",
   example:"A: La tumeur mesure deux décimètres.\nB: C'est assez grand pour opérer.",
   exampleSrc:"A: The tumor measures two decimeters.\nB: That's large enough to operate.",
   funFact:"French schoolchildren use a 'double décimètre' (20 cm ruler) more than any other tool."},

  {type:"teach", trg:"phosphorescent", src:"phosphorescent", pos:"adj", gender:null,
   note:"Glowing without heat. From phosphore (phosphorus).\nAgreement: phosphorescente (feminine).",
   example:"A: Les panneaux phosphorescents brillent dans le noir.\nB: C'est utile pour les sorties de secours.",
   exampleSrc:"A: The phosphorescent signs glow in the dark.\nB: It's useful for emergency exits.",
   funFact:"Phosphore comes from Greek 'light-bearer'. The morning star Venus was called Phosphorus."},

  {type:"teach", trg:"la phonétique", src:"phonetics", pos:"noun", gender:"f",
   note:"The study of speech sounds.\nAlso used as adjective: l'alphabet phonétique.",
   example:"A: La phonétique française est difficile pour les anglophones.\nB: Les voyelles nasales sont le plus grand défi.",
   exampleSrc:"A: French phonetics is difficult for English speakers.\nB: Nasal vowels are the biggest challenge.",
   funFact:"French has 16 vowel sounds (including 4 nasals), while English varies from 14 to 21 by dialect."},

  {type:"fb", s:"La {1} du visage peut révéler beaucoup sur une personne.", a:["physionomie"], opts:["physionomie","phonétique","physiologie","philosophie"],
   hint:"The features of someone's face. A physionomiste remembers faces.",
   sSrc:"A person's {1} can reveal a lot about them."},

  {type:"teach", trg:"l'oscillation", src:"oscillation", pos:"noun", gender:"f",
   note:"Back and forth movement.\nFrom osciller (to oscillate).",
   example:"A: Les oscillations de la température affectent la santé.\nB: Le corps doit s'adapter constamment.",
   exampleSrc:"A: Temperature oscillations affect health.\nB: The body must constantly adapt.",
   funFact:"French uses oscillation both literally (pendulums) and figuratively (mood swings)."},

  {type:"teach", trg:"palpable", src:"palpable, tangible", pos:"adj", gender:null,
   note:"Can be felt by touch. From palper (to feel).\nAlso figurative: une tension palpable.",
   example:"A: La tumeur est palpable à l'examen.\nB: Le médecin la sent sous la peau.",
   exampleSrc:"A: The tumor is palpable on examination.\nB: The doctor can feel it under the skin.",
   funFact:"From Latin palpare (to touch softly). English 'palpitate' shares the same root."},

  {type:"teach", trg:"neurophysiologique", src:"neurophysiological", pos:"adj", gender:null,
   note:"Neuro- (nerve) + physiologique.\nRelating to the nervous system's functions.",
   example:"A: Les tests neurophysiologiques sont normaux.\nB: C'est une bonne nouvelle pour le patient.",
   exampleSrc:"A: The neurophysiological tests are normal.\nB: That's good news for the patient.",
   funFact:"At 22 letters, this is one of the longest common adjectives in French."},

  {type:"mc", q:"Une réaction physiologique est une réaction:", opts:["Émotionnelle","Du corps et de ses fonctions","Psychologique","Sociale"], ans:"Du corps et de ses fonctions",
   hint:"Physiologie is the study of how the body works and functions."},

  {type:"fb", s:"Le {1} est encore très répandu en Afrique subsaharienne.", a:["paludisme"], opts:["paludisme","phosphore","décimètre","modernisme"],
   hint:"The disease transmitted by mosquitoes, known in English as malaria.",
   sSrc:"{1} is still very widespread in sub-Saharan Africa."},

  {type:"match", pairs:[
    {trg:"la mâchoire", src:"jaw"},
    {trg:"la jointure", src:"joint (body)"},
    {trg:"la paralysie", src:"paralysis"},
    {trg:"la malformation", src:"malformation"}
  ]},

  {type:"mc", q:"Un physionomiste est une personne qui:", opts:["Dessine des portraits","Étudie la physique","Se souvient bien des visages","Fait de la gymnastique"], ans:"Se souvient bien des visages",
   hint:"Physionomie means facial features. Someone good at remembering them is a..."},

  {type:"fb", s:"La tension dans la salle était {1}.", a:["palpable"], opts:["palpable","phosphorescent","physiologique","phonétique"],
   hint:"So strong you could almost physically feel it. From palper, to touch.",
   sSrc:"The tension in the room was {1}."},

  {type:"match", pairs:[
    {trg:"l'indigestion", src:"indigestion"},
    {trg:"l'inhalation", src:"inhalation"},
    {trg:"l'oscillation", src:"oscillation"},
    {trg:"la mutilation", src:"mutilation"}
  ]}
]};

export default LESSON_3;
