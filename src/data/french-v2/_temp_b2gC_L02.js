// L02 - Health & Medicine
const LESSON_2 = {id:"frv2_b2gC_l2", title:"Santé et médecine", icon:"\u{1FA7A}", xp:15, board:true, steps:[

{type:"intro", title:"Santé et médecine",
 desc:"Learn vocabulary for medical professions, health conditions, and the French healthcare system.",
 goals:["Learn 8 words for health and medicine","Discuss medical conditions and treatments","Navigate healthcare conversations"]},

{type:"teach", trg:"le pédiatre", src:"pediatrician", pos:"noun", gender:"m",
 note:"Masculine noun. A doctor who specializes in children.\nFeminine: la pédiatre.",
 example:"A: Mon fils a de la fièvre depuis trois jours.\nB: Il faut consulter le pédiatre le plus vite possible.",
 exampleSrc:"A: My son has had a fever for three days.\nB: You should see the pediatrician as soon as possible.",
 funFact:"From Greek paidos (child) + iatros (healer). French kept the accent: pédiatre."},

{type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
 note:"Feminine noun. Difficulty digesting food.\nA common reason for doctor visits.",
 example:"A: J'ai mangé trop de chocolat hier soir.\nB: Pas étonnant que tu aies une indigestion ce matin.",
 exampleSrc:"A: I ate too much chocolate last night.\nB: No wonder you have indigestion this morning.",
 funFact:"From Latin indigestio. The French say 'faire une indigestion' rather than 'avoir.'"},

{type:"teach", trg:"l'inhalation", src:"inhalation", pos:"noun", gender:"f",
 note:"Feminine noun. Breathing in steam or medication.\nAlso a treatment method.",
 example:"A: Le médecin m'a prescrit des inhalations.\nB: C'est efficace contre la congestion nasale.",
 exampleSrc:"A: The doctor prescribed inhalations for me.\nB: It's effective against nasal congestion.",
 funFact:"Steam inhalation with eucalyptus is a classic French home remedy for colds."},

{type:"teach", trg:"l'insuffisance", src:"insufficiency, failure", pos:"noun", gender:"f",
 note:"Feminine noun. When something is not enough.\nMedical: organ failure (insuffisance rénale).",
 example:"A: Le patient souffre d'insuffisance cardiaque.\nB: Il doit suivre un traitement strict et surveiller son alimentation.",
 exampleSrc:"A: The patient suffers from heart failure.\nB: He must follow strict treatment and monitor his diet.",
 funFact:"In medicine, insuffisance means an organ cannot perform its job. In everyday French, it means inadequacy."},

{type:"teach", trg:"la malformation", src:"malformation", pos:"noun", gender:"f",
 note:"Feminine noun. An abnormal formation, usually from birth.\nMal- prefix means bad or wrong.",
 example:"A: Le bébé est né avec une malformation cardiaque.\nB: Heureusement, elle peut être corrigée par la chirurgie.",
 exampleSrc:"A: The baby was born with a heart malformation.\nB: Fortunately, it can be corrected by surgery.",
 funFact:"The prefix mal- appears in many French medical terms: maladie, malaise, malnutrition."},

{type:"teach", trg:"l'incapacité", src:"inability, disability", pos:"noun", gender:"f",
 note:"Feminine noun. Being unable to do something.\nLegal: incapacité de travail (work disability).",
 example:"A: Son incapacité à marcher est temporaire.\nB: Après la rééducation, il pourra remarcher normalement.",
 exampleSrc:"A: His inability to walk is temporary.\nB: After rehabilitation, he will be able to walk normally again.",
 funFact:"In French labor law, incapacité de travail entitles workers to specific benefits."},

{type:"teach", trg:"la pénurie", src:"shortage, scarcity", pos:"noun", gender:"f",
 note:"Feminine noun. A severe lack of something essential.\nOften used for healthcare resources.",
 example:"A: Il y a une pénurie de médecins dans les zones rurales.\nB: C'est un problème majeur pour l'accès aux soins.",
 exampleSrc:"A: There is a shortage of doctors in rural areas.\nB: It is a major problem for access to healthcare.",
 funFact:"From Latin penuria. France regularly debates la pénurie de soignants (healthcare worker shortage)."},

{type:"teach", trg:"la mutilation", src:"mutilation", pos:"noun", gender:"f",
 note:"Feminine noun. Severe bodily harm or injury.\nUsed in both medical and legal contexts.",
 example:"A: La loi interdit toute forme de mutilation.\nB: C'est un principe fondamental des droits de l'homme.",
 exampleSrc:"A: The law prohibits all forms of mutilation.\nB: It is a fundamental principle of human rights.",
 funFact:"From Latin mutilare. French legal codes use this word in several articles on bodily harm."},

{type:"mc",
 q:"Quel médecin est spécialisé dans les soins aux enfants ?",
 opts:["le pédiatre","le psychiatre","le chirurgien","le cardiologue"],
 ans:"le pédiatre",
 hint:"The Greek root paidos means 'child.' This doctor treats only young patients."},

{type:"fb",
 s:"Le patient souffre d'{1} cardiaque et doit être hospitalisé.",
 a:["insuffisance"], opts:["insuffisance","indigestion","inhalation","incapacité"],
 hint:"When an organ cannot perform its function, this is what doctors diagnose.",
 sSrc:"The patient suffers from heart {1} and must be hospitalized."},

{type:"mc",
 q:"Que signifie 'une pénurie de médecins' ?",
 opts:["Un manque grave de médecins","Un excès de médecins","Une grève de médecins","Un congrès de médecins"],
 ans:"Un manque grave de médecins",
 hint:"Think of severe scarcity. When there are far too few of something essential."},

{type:"match", pairs:[
  {trg:"le pédiatre", src:"pediatrician"},
  {trg:"l'indigestion", src:"indigestion"},
  {trg:"l'insuffisance", src:"insufficiency"},
  {trg:"la pénurie", src:"shortage"},
  {trg:"la malformation", src:"malformation"}
]},

{type:"fb",
 s:"Le médecin a prescrit des {1} pour soulager la congestion.",
 a:["inhalations"], opts:["inhalations","malformations","pénuries","mutilations"],
 hint:"Breathing in medicated steam or vapor. A common treatment for congestion.",
 sSrc:"The doctor prescribed {1} to relieve congestion."},

{type:"mc",
 q:"Quel mot décrit une anomalie physique présente dès la naissance ?",
 opts:["une malformation","une indigestion","une pénurie","une incapacité"],
 ans:"une malformation",
 hint:"The prefix mal- means 'bad' and formation means 'forming.' Something formed incorrectly."},

{type:"fb",
 s:"Son {1} à travailler est reconnue par la médecine du travail.",
 a:["incapacité"], opts:["incapacité","insuffisance","indigestion","pénurie"],
 hint:"The state of being unable. In labor law, this qualifies for specific benefits.",
 sSrc:"His {1} to work is recognized by occupational medicine."},

{type:"drag_fill",
 s:"La {1} de soignants aggrave l'{2} du système de santé.",
 blanks:{"1":"pénurie","2":"insuffisance"},
 pool:["pénurie","insuffisance","malformation","indigestion"],
 hint:"A shortage of healthcare workers makes the system's failure worse"},

{type:"mc",
 q:"Quel est le remède traditionnel français contre le rhume mentionné ?",
 opts:["L'inhalation d'eucalyptus","Le pédiatre","L'insuffisance","La mutilation"],
 ans:"L'inhalation d'eucalyptus",
 hint:"Breathing in steam with a specific plant extract. A classic home remedy."},

{type:"fb",
 s:"Après une {1}, il est conseillé de manger léger pendant 24 heures.",
 a:["indigestion"], opts:["indigestion","inhalation","incapacité","insuffisance"],
 hint:"When you eat too much and your stomach cannot handle it properly.",
 sSrc:"After an {1}, it is advised to eat lightly for 24 hours."}

]};
export default LESSON_2;
