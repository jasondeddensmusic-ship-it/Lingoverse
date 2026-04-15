// French B2 Gap Batch 9 — Lesson 16: Adjectifs Avancés
// Advanced adjectives for nuanced description

const LESSON_16 = {id:"frv2_b2g9_l16", title:"Adjectifs Avancés", icon:"🎯", xp:15, board:true, steps:[
  {type:"intro", title:"Adjectifs Avancés",
   desc:"Master advanced French adjectives for precise, nuanced description. B2 writing and speaking require going beyond basic descriptors.",
   goals:["Learn 20 advanced adjectives","Describe with precision and nuance","Use formal and informal registers"]},

  {type:"teach", trg:"palpable", src:"palpable, tangible", pos:"adj", gender:null,
   note:"Can be felt by touch. Also figurative.\nFrom palper (to feel, to touch).",
   example:"A: La tension était palpable dans la salle.\nB: Personne n'osait parler.",
   exampleSrc:"A: The tension was palpable in the room.\nB: Nobody dared to speak.",
   funFact:"From Latin palpare (to touch softly). Same root as 'palpitate' in English."},

  {type:"teach", trg:"pentu", src:"steep, sloping", pos:"adj", gender:null,
   note:"From pente (slope). Feminine: pentue.\nDescribes terrain, roofs, streets.",
   example:"A: La rue est très pentue après le virage.\nB: Fais attention en vélo.",
   exampleSrc:"A: The street is very steep after the turn.\nB: Be careful on a bike.",
   funFact:"Pente (slope) is common but pentu (steep) is somewhat literary. Raide is the everyday alternative."},

  {type:"teach", trg:"piteux", src:"pitiful, pathetic", pos:"adj", gender:null,
   note:"In a sorry, wretched state. Feminine: piteuse.\nEn piteux état = in poor condition.",
   example:"A: Il a fait piteuse mine en apprenant la nouvelle.\nB: Son visage reflétait sa déception.",
   exampleSrc:"A: He looked wretched when he heard the news.\nB: His face reflected his disappointment.",
   funFact:"From pitié (pity). Faire piteuse mine = to look miserable. A very French expression."},

  {type:"teach", trg:"originel", src:"original, primordial", pos:"adj", gender:null,
   note:"From the origin. Feminine: originelle.\nNot the same as original (creative, unique).",
   example:"A: Le sens originel du mot s'est perdu.\nB: La langue évolue constamment.",
   exampleSrc:"A: The original meaning of the word has been lost.\nB: Language constantly evolves.",
   funFact:"Originel means 'from the beginning'. Original means 'creative'. Do not confuse them."},

  {type:"teach", trg:"libératoire", src:"liberating, discharging (legal)", pos:"adj", gender:null,
   note:"From libérer (to liberate).\nPaiement libératoire = payment that clears a debt.",
   example:"A: Le versement libératoire met fin à l'obligation.\nB: La dette est entièrement remboursée.",
   exampleSrc:"A: The final payment discharges the obligation.\nB: The debt is fully repaid.",
   funFact:"In micro-entreprise tax, versement libératoire means you pay tax as you earn, clearing the obligation."},

  {type:"teach", trg:"patrimonial", src:"patrimonial, heritage-related", pos:"adj", gender:null,
   note:"From patrimoine (heritage, assets).\nFeminine: patrimoniale. Plural: patrimoniaux.",
   example:"A: La valeur patrimoniale de ce bâtiment est immense.\nB: Il est classé monument historique.",
   exampleSrc:"A: The heritage value of this building is immense.\nB: It is classified as a historic monument.",
   funFact:"Journées du patrimoine (Heritage Days) is a popular French event where historic buildings open to the public."},

  {type:"teach", trg:"phosphorescent", src:"phosphorescent, glowing", pos:"adj", gender:null,
   note:"Glowing without heat. Feminine: phosphorescente.\nFrom phosphore (phosphorus).",
   example:"A: Les étoiles phosphorescentes au plafond plaisent aux enfants.\nB: Elles brillent dans le noir.",
   exampleSrc:"A: Phosphorescent stars on the ceiling delight children.\nB: They glow in the dark.",
   funFact:"Phosphorescent and fluorescent are different: phosphorescent glows after the light source is removed."},

  {type:"teach", trg:"persévérant", src:"persevering", pos:"adj", gender:null,
   note:"From persévérer. Feminine: persévérante.\nSomeone who never gives up despite difficulties.",
   example:"A: Les élèves persévérants réussissent toujours.\nB: La patience finit par payer.",
   exampleSrc:"A: Persevering students always succeed.\nB: Patience always pays off.",
   funFact:"Persévérant is always positive. S'obstiner is the negative version of the same idea."},

  {type:"teach", trg:"banal", src:"banal, commonplace", pos:"adj", gender:null,
   note:"Ordinary, unremarkable. Feminine: banale.\nIrregular plural: banals (not banaux).",
   example:"A: Ce n'est pas un événement banal.\nB: C'est quelque chose d'extraordinaire.",
   exampleSrc:"A: This is not an ordinary event.\nB: It's something extraordinary.",
   funFact:"Banal originally meant 'communal' (the banal mill everyone had to use). It shifted to 'ordinary'."},

  {type:"mc", q:"'En piteux état' signifie:", opts:["En excellent état","En très mauvais état","En état normal","En construction"], ans:"En très mauvais état",
   hint:"Piteux comes from pitié (pity). Something so bad it inspires pity."},

  {type:"teach", trg:"pharaonique", src:"pharaonic, megalomaniac", pos:"adj", gender:null,
   note:"Like the pharaohs. Enormously ambitious and expensive.\nAlways figurative in modern use.",
   example:"A: Les travaux pharaoniques ont dépassé le budget.\nB: Le coût a triplé en deux ans.",
   exampleSrc:"A: The pharaonic construction works exceeded the budget.\nB: The cost tripled in two years.",
   funFact:"French journalism uses pharaonique for any absurdly grandiose project."},

  {type:"teach", trg:"justicier", src:"vigilante, justice-seeking", pos:"adj", gender:null,
   note:"Also used as noun.\nFeminine: justicière. Taking justice into one's own hands.",
   example:"A: Son attitude justicière lui cause des ennuis.\nB: La loi interdit de se faire justice soi-même.",
   exampleSrc:"A: His vigilante attitude causes him trouble.\nB: The law prohibits taking justice into your own hands.",
   funFact:"Se faire justice soi-même (to take justice into one's own hands) is illegal in France."},

  {type:"teach", trg:"crème", src:"cream-colored, elite", pos:"adj", gender:null,
   note:"The color of cream. Also: la crème = the best.\nInvariable as color adjective.",
   example:"A: Elle portait un tailleur crème très élégant.\nB: La crème de la société était présente.",
   exampleSrc:"A: She wore a very elegant cream-colored suit.\nB: The cream of society was present.",
   funFact:"Color adjectives from nouns do not change: des robes crème, des chapeaux orange."},

  {type:"teach", trg:"force", src:"forced, compelled", pos:"adj", gender:null,
   note:"Past participle of forcer used as adjective.\nÊtre forcé de = to be forced to.",
   example:"A: Il était forcé d'accepter les conditions.\nB: Il n'avait pas le choix.",
   exampleSrc:"A: He was forced to accept the conditions.\nB: He had no choice.",
   funFact:"Force as adjective also appears in: à force de = by dint of, through repeated effort."},

  {type:"fb", s:"La tension était {1} dans la salle d'audience.", a:["palpable"], opts:["palpable","pentue","banale","crème"],
   hint:"So strong you could almost physically feel it. From palper, to touch.",
   sSrc:"The tension was {1} in the courtroom."},

  {type:"teach", trg:"neurophysiologique", src:"neurophysiological", pos:"adj", gender:null,
   note:"Neuro- + physiologique.\nRelating to the nervous system's functions.",
   example:"A: Les examens neurophysiologiques n'ont rien révélé.\nB: Le patient va bien physiquement.",
   exampleSrc:"A: The neurophysiological exams revealed nothing.\nB: The patient is physically fine.",
   funFact:"This 22-letter adjective is routinely used in French medical reports."},

  {type:"teach", trg:"physiologique", src:"physiological", pos:"adj", gender:null,
   note:"Relating to how the body functions.\nSérum physiologique = saline solution.",
   example:"A: C'est une réponse physiologique au stress.\nB: Le corps réagit automatiquement.",
   exampleSrc:"A: It's a physiological response to stress.\nB: The body reacts automatically.",
   funFact:"Sérum physiologique (0.9% salt water) is found in every French home pharmacy."},

  {type:"mc", q:"Les adjectifs de couleur tirés de noms sont:", opts:["Variables en genre et nombre","Invariables","Toujours féminins","Toujours pluriels"], ans:"Invariables",
   hint:"Orange, crème, marron: these color adjectives from nouns never change form."},

  {type:"fb", s:"Ce projet {1} va coûter des milliards.", a:["pharaonique"], opts:["pharaonique","banal","pentu","libératoire"],
   hint:"Like the pyramids. Absurdly grandiose and expensive.",
   sSrc:"This {1} project will cost billions."},

  {type:"match", pairs:[
    {trg:"palpable", src:"tangible"},
    {trg:"pentu", src:"steep"},
    {trg:"piteux", src:"pitiful"},
    {trg:"banal", src:"commonplace"}
  ]},

  {type:"mc", q:"Originel et original sont:", opts:["Des synonymes parfaits","Originel = des origines, original = créatif","Le même mot avec deux orthographes","Des antonymes"], ans:"Originel = des origines, original = créatif",
   hint:"O... relates to origins and beginnings. O... relates to creativity and uniqueness."},

  {type:"fb", s:"Le versement {1} met fin à la dette.", a:["libératoire"], opts:["libératoire","patrimonial","physiologique","phosphorescent"],
   hint:"A payment that liberates you from an obligation. Clears the debt.",
   sSrc:"The {1} payment ends the debt."},

  {type:"match", pairs:[
    {trg:"pharaonique", src:"grandiose"},
    {trg:"originel", src:"primordial"},
    {trg:"patrimonial", src:"heritage-related"},
    {trg:"persévérant", src:"persevering"}
  ]}
]};

export default LESSON_16;
