// French B2 Gap Batch 9. Lesson 13: Sciences et Technologie
// Science and technology vocabulary

const LESSON_13 = {id:"frv2_b2g9_l13", title:"Sciences et Technologie", icon:"🔬", xp:15, board:true, steps:[
  {type:"intro", title:"Sciences et Technologie",
   desc:"Build your scientific and technological vocabulary for reading articles, discussing innovations, and understanding research at B2 level.",
   goals:["Learn 20 science and technology words","Discuss research and innovation","Understand scientific processes"]},

  {type:"teach", trg:"l'oscillation", src:"oscillation", pos:"noun", gender:"f",
   note:"Back and forth movement.\nFrom osciller (to oscillate). Regular or irregular swings.",
   example:"A: Les oscillations du pendule sont régulières.\nB: C'est le principe de l'horloge.",
   exampleSrc:"A: The oscillations of the pendulum are regular.\nB: That's the principle of the clock.",
   funFact:"Oscillation comes from Latin oscillare. The French pronunciation drops the second L: oh-see-lah-SYON."},

  {type:"teach", trg:"le décimètre", src:"decimeter", pos:"noun", gender:"m",
   note:"Déci- (one-tenth) + mètre.\n10 centimeters. Used in French education.",
   example:"A: Trace un segment de deux décimètres.\nB: J'utilise ma règle double décimètre.",
   exampleSrc:"A: Draw a segment of two decimeters.\nB: I'll use my 20 cm ruler.",
   funFact:"Every French student has a 'double décimètre' (20 cm ruler). The term is used more than 'règle'."},

  {type:"teach", trg:"la chronobiologie", src:"chronobiology", pos:"noun", gender:"f",
   note:"Chrono- (time) + biologie (biology).\nThe study of biological rhythms.",
   example:"A: La chronobiologie explique pourquoi on est fatigué le soir.\nB: Notre horloge interne régule tout.",
   exampleSrc:"A: Chronobiology explains why we're tired in the evening.\nB: Our internal clock regulates everything.",
   funFact:"Chronobiologiste is one of the longest French job titles at 18 letters."},

  {type:"teach", trg:"le connecteur", src:"connector", pos:"noun", gender:"m",
   note:"From connecter (to connect) + -eur.\nPhysical plugs or logical links in text.",
   example:"A: Le connecteur USB est cassé.\nB: Il faut le remplacer.",
   exampleSrc:"A: The USB connector is broken.\nB: It needs to be replaced.",
   funFact:"In French grammar, connecteurs logiques are words like 'cependant', 'néanmoins', 'par conséquent'."},

  {type:"teach", trg:"cognitif", src:"cognitive", pos:"adj", gender:null,
   note:"Relating to mental processes of knowing.\nFeminine: cognitive. Sciences cognitives = cognitive sciences.",
   example:"A: Les sciences cognitives progressent rapidement.\nB: On comprend mieux le cerveau chaque année.",
   exampleSrc:"A: Cognitive sciences are progressing rapidly.\nB: We understand the brain better each year.",
   funFact:"Biais cognitif (cognitive bias) has become a very popular concept in French media."},

  {type:"teach", trg:"le laboratoire", src:"laboratory", pos:"noun", gender:"m",
   note:"From Latin laborare (to work).\nShortened to labo in informal speech.",
   example:"A: Les résultats du laboratoire sont positifs.\nB: L'expérience a réussi.",
   exampleSrc:"A: The laboratory results are positive.\nB: The experiment succeeded.",
   funFact:"French shortens it to 'le labo' in everyday speech, just as English uses 'lab'."},

  {type:"teach", trg:"le géomètre", src:"surveyor, geometer", pos:"noun", gender:"m",
   note:"From Greek geo (earth) + metron (measure).\nSomeone who measures land or studies geometry.",
   example:"A: Le géomètre a mesuré le terrain.\nB: Les limites de la propriété sont maintenant claires.",
   exampleSrc:"A: The surveyor measured the land.\nB: The property boundaries are now clear.",
   funFact:"Géomètre-expert is a regulated profession in France. They certify property boundaries."},

  {type:"teach", trg:"géométral", src:"geometric (true to scale)", pos:"adj", gender:null,
   note:"A technical drawing showing exact proportions.\nUn plan géométral = a scale drawing.",
   example:"A: Le dessin géométral montre les dimensions exactes.\nB: L'architecte l'a vérifié.",
   exampleSrc:"A: The geometric drawing shows the exact dimensions.\nB: The architect verified it.",
   funFact:"Géométral is more technical than géométrique. It specifically means drawn to true scale."},

  {type:"teach", trg:"l'eugénol", src:"eugenol", pos:"noun", gender:"m",
   note:"A chemical compound found in clove oil.\nUsed in dentistry and as a food flavoring.",
   example:"A: L'eugénol est utilisé comme antiseptique dentaire.\nB: C'est l'odeur caractéristique du dentiste.",
   exampleSrc:"A: Eugenol is used as a dental antiseptic.\nB: It's the characteristic smell of the dentist.",
   funFact:"Named after Eugenia caryophyllata, the scientific name for the clove tree."},

  {type:"mc", q:"La chronobiologie étudie:", opts:["Les rythmes biologiques liés au temps","La chronologie des fossiles","Les maladies chroniques","L'histoire des êtres vivants"], ans:"Les rythmes biologiques liés au temps",
   hint:"Chrono means time, biologie means the study of life. Biological time rhythms."},

  {type:"teach", trg:"le photomontage", src:"photomontage", pos:"noun", gender:"m",
   note:"Photo + montage (editing).\nCombining multiple images into one composition.",
   example:"A: Ce photomontage circule sur les réseaux sociaux.\nB: Les gens croient que c'est réel.",
   exampleSrc:"A: This photomontage is circulating on social media.\nB: People believe it's real.",
   funFact:"Montage is a French word borrowed by English. It means assembly or editing."},

  {type:"teach", trg:"l'antirétroviral", src:"antiretroviral", pos:"adj", gender:null,
   note:"Anti- + rétroviral.\nMedication that fights retroviruses, especially HIV.",
   example:"A: Les traitements antirétroviraux ont sauvé des millions de vies.\nB: Le VIH n'est plus une condamnation à mort.",
   exampleSrc:"A: Antiretroviral treatments have saved millions of lives.\nB: HIV is no longer a death sentence.",
   funFact:"France provides free antiretroviral treatment through its universal healthcare system."},

  {type:"teach", trg:"la cleptomanie", src:"kleptomania", pos:"noun", gender:"f",
   note:"From Greek kleptein (to steal) + mania.\nCompulsive urge to steal.",
   example:"A: La cleptomanie est un trouble psychologique.\nB: Les personnes atteintes ne volent pas par besoin.",
   exampleSrc:"A: Kleptomania is a psychological disorder.\nB: Affected people don't steal out of need.",
   funFact:"French spells it with a C (cleptomanie) while English uses a K (kleptomania). Both from Greek."},

  {type:"teach", trg:"le mixage", src:"mixing (audio/video)", pos:"noun", gender:"m",
   note:"From mixer (to mix). Technical term.\nPost-production audio or video mixing.",
   example:"A: Le mixage du documentaire est terminé.\nB: La qualité sonore est excellente.",
   exampleSrc:"A: The documentary's mixing is finished.\nB: The sound quality is excellent.",
   funFact:"Mixage is one of many English-origin words with a French suffix: mix + -age."},

  {type:"fb", s:"Les {1} du marché rendent les investisseurs nerveux.", a:["oscillations"], opts:["oscillations","photomontages","décimètres","connecteurs"],
   hint:"Back and forth movements. Market swings that go up and down.",
   sSrc:"Market {1} make investors nervous."},

  {type:"teach", trg:"le delirium", src:"delirium", pos:"noun", gender:"m",
   note:"Mental confusion with hallucinations.\nDelirium tremens = alcohol withdrawal syndrome.",
   example:"A: Le patient souffrait de delirium tremens.\nB: Le sevrage alcoolique est dangereux sans suivi médical.",
   exampleSrc:"A: The patient suffered from delirium tremens.\nB: Alcohol withdrawal is dangerous without medical supervision.",
   funFact:"Delirium tremens is one of many Latin medical terms used identically in French and English."},

  {type:"mc", q:"Un plan géométral est:", opts:["Un dessin abstrait","Un plan dessiné à l'échelle exacte","Un plan de la terre","Un schéma simplifié"], ans:"Un plan dessiné à l'échelle exacte",
   hint:"Géométral means true to scale. An exact, proportional drawing."},

  {type:"fb", s:"Les traitements {1} ont transformé la lutte contre le VIH.", a:["antirétroviraux"], opts:["antirétroviraux","géométraux","cognitifs","chronobiologiques"],
   hint:"Medications that fight retroviruses like HIV. Anti- + retroviral.",
   sSrc:"{1} treatments have transformed the fight against HIV."},

  {type:"match", pairs:[
    {trg:"le laboratoire", src:"laboratory"},
    {trg:"le géomètre", src:"surveyor"},
    {trg:"le connecteur", src:"connector"},
    {trg:"le décimètre", src:"decimeter"}
  ]},

  {type:"mc", q:"La cleptomanie est:", opts:["L'amour excessif de l'argent","La peur des espaces clos","Le besoin compulsif de voler","La peur des araignées"], ans:"Le besoin compulsif de voler",
   hint:"Klepto comes from Greek for 'steal'. Mania means compulsion."},

  {type:"fb", s:"Le {1} du film a pris six semaines.", a:["mixage"], opts:["mixage","montage","laboratoire","décimètre"],
   hint:"The post-production sound work. Combining and balancing audio tracks.",
   sSrc:"The film's {1} took six weeks."},

  {type:"match", pairs:[
    {trg:"l'oscillation", src:"oscillation"},
    {trg:"cognitif", src:"cognitive"},
    {trg:"la cleptomanie", src:"kleptomania"},
    {trg:"le photomontage", src:"photomontage"}
  ]}
]};

export default LESSON_13;
