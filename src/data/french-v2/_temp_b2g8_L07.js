const LESSON_7 = {
  id:"frv2_b2g8_l7", title:"Environnement et nature", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environnement et nature",
     desc:"Vocabulary for discussing ecology, natural phenomena, and environmental issues at B2 level.",
     goals:["Learn 15 environment and nature words","Discuss ecological challenges","Describe natural phenomena precisely"]},

    {type:"teach", trg:"mortifère", src:"deadly, lethal", pos:"adj", gender:null,
     note:"Adjective. Causing or capable of causing death.\nMore literary than 'mortel'.",
     example:"A: Cette substance est mortifère.\nB: Il faut la manipuler avec précaution.",
     exampleSrc:"A: This substance is deadly.\nB: It must be handled with caution.",
     funFact:"From Latin 'mortifer' (death-bearing). Used in literary and scientific French, not casual speech."},

    {type:"teach", trg:"l'héliotrope", src:"the heliotrope (plant)", pos:"noun", gender:"m",
     note:"Masculine noun. A plant that turns toward the sun.\nAlso a purple color.",
     example:"A: Les héliotropes fleurissent en été.\nB: Leur parfum est enivrant.",
     exampleSrc:"A: Heliotropes bloom in summer.\nB: Their scent is intoxicating.",
     funFact:"From Greek 'helios' (sun) + 'tropos' (turning). The plant literally follows the sun across the sky."},

    {type:"teach", trg:"naval", src:"naval, maritime", pos:"adj", gender:null,
     note:"Adjective. Related to the navy or ships.\nIrregular plural: navals (not navaux).",
     example:"A: La base navale est fermée au public.\nB: C'est une zone militaire.",
     exampleSrc:"A: The naval base is closed to the public.\nB: It's a military zone.",
     funFact:"One of the rare French adjectives with an irregular plural. 'Navals' not 'navaux'."},

    {type:"teach", trg:"méridional", src:"southern", pos:"adj", gender:null,
     note:"Adjective. From or related to the south of France.\nFeminine: méridionale.",
     example:"A: L'accent méridional est charmant.\nB: Oui, on dirait le soleil qui parle.",
     exampleSrc:"A: The southern accent is charming.\nB: Yes, it sounds like the sun talking.",
     funFact:"'Le Midi' is what the French call the South. 'Méridional' comes from Latin 'meridies' (midday)."},

    {type:"mc",
     q:"Quel adjectif signifie 'qui cause la mort' dans un registre littéraire ?",
     opts:["mortifère","méridional","naval","magnétique"],
     ans:"mortifère",
     hint:"From Latin for 'death-bearing'. More formal than 'mortel'. Think of deadly substances."},

    {type:"teach", trg:"magnétique", src:"magnetic", pos:"adj", gender:null,
     note:"Adjective. Having the properties of a magnet.\nAlso used figuratively for charisma.",
     example:"A: Son regard est magnétique.\nB: Impossible de détourner les yeux.",
     exampleSrc:"A: Her gaze is magnetic.\nB: Impossible to look away.",
     funFact:"The figurative sense is extremely common in French. 'Un charisme magnétique' is a high compliment."},

    {type:"teach", trg:"l'ocre", src:"ochre", pos:"noun", gender:"m",
     note:"Masculine noun. An earthy yellow-red pigment.\nAlso used as an invariable adjective.",
     example:"A: Les falaises d'ocre de Roussillon sont magnifiques.\nB: C'est un paysage unique en France.",
     exampleSrc:"A: The ochre cliffs of Roussillon are magnificent.\nB: It's a unique landscape in France.",
     funFact:"Roussillon in Provence has the largest ochre deposits in Europe. The village is literally orange."},

    {type:"teach", trg:"le frémissement", src:"the shudder, the quiver", pos:"noun", gender:"m",
     note:"Masculine noun. A slight trembling or stirring.\nPhysical and emotional.",
     example:"A: Un frémissement a parcouru la foule.\nB: L'annonce a surpris tout le monde.",
     exampleSrc:"A: A shudder ran through the crowd.\nB: The announcement surprised everyone.",
     funFact:"In cooking, 'à frémissement' means just below boiling, when the water barely shivers."},

    {type:"fb",
     s:"L'accent {1} est charmant, on dirait le soleil qui parle.",
     a:["méridional"],
     opts:["méridional","magnétique","naval","mortifère"],
     hint:"Related to the south of France. From Latin 'meridies' meaning midday.",
     sSrc:"The {1} accent is charming, it sounds like the sun talking."},

    {type:"teach", trg:"la jointure", src:"the joint, the junction", pos:"noun", gender:"f",
     note:"Feminine noun. Where two things meet. Anatomical or mechanical.",
     example:"A: La jointure de la porte grince.\nB: Il faut la huiler.",
     exampleSrc:"A: The door joint is squeaking.\nB: It needs oiling.",
     funFact:"'Jointure des doigts' means knuckles. From the same root as English 'joint' and 'junction'."},

    {type:"teach", trg:"le châssis", src:"the chassis, the frame", pos:"noun", gender:"m",
     note:"Masculine noun. The supporting frame of a vehicle or window.\nSilent final 's'.",
     example:"A: Le châssis de la voiture est rouillé.\nB: La réparation sera coûteuse.",
     exampleSrc:"A: The car's chassis is rusted.\nB: The repair will be costly.",
     funFact:"From 'châsse' (shrine frame). Also means window frame in Belgian French and architecture."},

    {type:"teach", trg:"la mappemonde", src:"the world map", pos:"noun", gender:"f",
     note:"Feminine noun. A map showing the entire world.\nOften a flat projection.",
     example:"A: Regarde cette mappemonde ancienne.\nB: Elle date du XVIIIe siècle.",
     exampleSrc:"A: Look at this ancient world map.\nB: It dates from the 18th century.",
     funFact:"Despite the 'monde' part, it originally meant 'cloth of the world' from Latin 'mappa mundi'."},

    {type:"mc",
     q:"Quel mot décrit un léger tremblement ou une vibration ?",
     opts:["un frémissement","un châssis","un ocre","une jointure"],
     ans:"un frémissement",
     hint:"Think of water just below boiling, barely moving. A very slight trembling or quiver."},

    {type:"teach", trg:"l'olympisme", src:"Olympism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy and values of the Olympic movement.",
     example:"A: L'olympisme prône le respect et l'excellence.\nB: Ce sont de belles valeurs.",
     exampleSrc:"A: Olympism promotes respect and excellence.\nB: Those are fine values.",
     funFact:"Pierre de Coubertin, the French founder of the modern Olympics, coined the term 'olympisme' in 1894."},

    {type:"teach", trg:"la matrice", src:"the matrix, the mold", pos:"noun", gender:"f",
     note:"Feminine noun. An environment that shapes something.\nAlso a math/printing term.",
     example:"A: Cette école est la matrice de grands artistes.\nB: Oui, beaucoup y ont été formés.",
     exampleSrc:"A: This school is the matrix of great artists.\nB: Yes, many were trained there.",
     funFact:"From Latin 'matrix' meaning womb. The figurative sense of 'source of creation' is very French."},

    {type:"teach", trg:"le narcotique", src:"the narcotic", pos:"noun", gender:"m",
     note:"Masculine noun. A drug that causes drowsiness or stupor.\nAlso used as adjective.",
     example:"A: Les narcotiques sont strictement contrôlés.\nB: La loi est très sévère en France.",
     exampleSrc:"A: Narcotics are strictly controlled.\nB: The law is very strict in France.",
     funFact:"From Greek 'narkotikos' meaning numbing. France has some of the strictest drug laws in Europe."},

    {type:"fb",
     s:"Les falaises d'{1} de Roussillon sont magnifiques.",
     a:["ocre"],
     opts:["ocre","olympisme","narcotique","matrice"],
     hint:"An earthy yellow-red pigment. Roussillon in Provence is famous for its deposits.",
     sSrc:"The {1} cliffs of Roussillon are magnificent."},

    {type:"match", pairs:[
      {trg:"héliotrope", src:"sun-following plant"},
      {trg:"frémissement", src:"shudder, quiver"},
      {trg:"mappemonde", src:"world map"},
      {trg:"châssis", src:"chassis, frame"},
      {trg:"narcotique", src:"narcotic"}
    ]},

    {type:"mc",
     q:"Quel Français a fondé les Jeux Olympiques modernes ?",
     opts:["Pierre de Coubertin","Victor Hugo","Napoléon","Jules Verne"],
     ans:"Pierre de Coubertin",
     hint:"He coined the term 'olympisme' in 1894 and revived the ancient Greek tradition."},

    {type:"fb",
     s:"Le {1} de la voiture est rouillé, la réparation sera coûteuse.",
     a:["châssis"],
     opts:["châssis","frémissement","jointure","ocre"],
     hint:"The supporting frame of a vehicle. From Old French 'châsse' meaning shrine frame.",
     sSrc:"The car's {1} is rusted, the repair will be costly."}
  ]
};
export default LESSON_7;
