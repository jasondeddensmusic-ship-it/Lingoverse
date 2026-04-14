const LESSON_5 = {
  id:"frv2_b2g2_l5", title:"Education et universite", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education et universite",
     desc:"Master academic and educational vocabulary. From administrators to certifications, from literacy to academic excellence.",
     goals:["Learn 20 education and university terms","Discuss academic topics in French","Understand the French education system"]},

    {type:"teach", trg:"academique", src:"academic", pos:"adj", gender:null,
     note:"Adjective. Relating to education or scholarly pursuits.",
     example:"A: Son parcours academique est impressionnant.\nB: Elle a etudie dans trois pays differents.",
     exampleSrc:"A: Her academic career is impressive.\nB: She studied in three different countries.",
     funFact:"L'Academie francaise, founded in 1635, guards the French language. Its members are called 'Immortels'."},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an institution. Feminine: une administratrice.",
     example:"A: L'administrateur de l'universite a annonce des reformes.\nB: Les etudiants attendent les details.",
     exampleSrc:"A: The university administrator announced reforms.\nB: Students are waiting for details.",
     funFact:"In France, 'administrateur civil' is a prestigious government position entered through the ENA."},

    {type:"teach", trg:"un agrege", src:"a holder of the agregation", pos:"noun", gender:"m",
     note:"Masculine noun. A teacher who passed France's most competitive exam. Feminine: une agregee.",
     example:"A: Mon professeur de philosophie est agrege.\nB: L'examen est extremement difficile.",
     exampleSrc:"A: My philosophy teacher holds the agregation.\nB: The exam is extremely difficult.",
     funFact:"The agregation has existed since 1766. Pass rates are often below 10%. It is France's toughest academic exam."},

    {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters in a writing system.",
     example:"A: L'alphabet francais compte vingt-six lettres.\nB: Mais les accents ajoutent de la complexite.",
     exampleSrc:"A: The French alphabet has twenty-six letters.\nB: But accents add complexity.",
     funFact:"From Greek 'alpha' + 'beta'. French uses five accent marks that don't exist in English."},

    {type:"teach", trg:"alphabetique", src:"alphabetical", pos:"adj", gender:null,
     note:"Adjective. Arranged in the order of the alphabet.",
     example:"A: Les noms sont classes par ordre alphabetique.\nB: Cherche a la lettre M.",
     exampleSrc:"A: The names are listed in alphabetical order.\nB: Look under the letter M.",
     funFact:"French alphabetical sorting treats accented letters the same as unaccented: e = e with accent."},

    {type:"mc",
     q:"Quel est le concours d'enseignement le plus difficile en France ?",
     opts:["l'agregation","le baccalaureat","le master","la licence"],
     ans:"l'agregation",
     hint:"An extremely competitive exam for teachers with pass rates often below 10%."},

    {type:"teach", trg:"analphabete", src:"illiterate", pos:"adj", gender:null,
     note:"Adjective. Unable to read or write. Also used as a noun.",
     example:"A: Dix pour cent de la population mondiale est analphabete.\nB: L'education est un droit fondamental.",
     exampleSrc:"A: Ten percent of the world population is illiterate.\nB: Education is a fundamental right.",
     funFact:"'An-' (without) + 'alphabet'. France reduced illiteracy from 50% in 1800 to under 1% today."},

    {type:"teach", trg:"certifie", src:"certified, qualified", pos:"adj", gender:null,
     note:"Adjective. Officially recognized as meeting a standard. Feminine: certifiee.",
     example:"A: Ce produit est certifie bio.\nB: On peut lui faire confiance.",
     exampleSrc:"A: This product is certified organic.\nB: We can trust it.",
     funFact:"'Professeur certifie' is the standard teaching qualification in France, below 'agrege'."},

    {type:"teach", trg:"un anthropologue", src:"an anthropologist", pos:"noun", gender:"m",
     note:"Masculine noun. A scientist who studies human cultures. Feminine: une anthropologue.",
     example:"A: L'anthropologue a vecu deux ans avec cette tribu.\nB: Son etude est fascinante.",
     exampleSrc:"A: The anthropologist lived two years with this tribe.\nB: His study is fascinating.",
     funFact:"Claude Levi-Strauss, a Frenchman, revolutionized anthropology with structural analysis in the 1950s."},

    {type:"teach", trg:"un cartographe", src:"a cartographer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who makes maps. Feminine: une cartographe.",
     example:"A: Le cartographe a dessine une carte detaillee de la region.\nB: Chaque sentier y figure.",
     exampleSrc:"A: The cartographer drew a detailed map of the region.\nB: Every trail is marked on it.",
     funFact:"France's Cassini family produced the first topographic map of an entire country (1756-1815)."},

    {type:"fb",
     s:"Le professeur {1} a reussi le concours le plus difficile de France.",
     a:["agrege"],
     opts:["agrege","certifie","academique","alphabetique"],
     hint:"The holder of France's most competitive teaching exam, with a pass rate below 10%.",
     sSrc:"The {1} professor passed the most difficult exam in France."},

    {type:"teach", trg:"un aspirant", src:"an aspiring candidate, a cadet", pos:"noun", gender:"m",
     note:"Masculine noun. Someone aspiring to a position. Also a military rank.",
     example:"A: Les aspirants officiers suivent une formation intense.\nB: Seulement la moitie sera retenue.",
     exampleSrc:"A: Officer cadets undergo intense training.\nB: Only half will be selected.",
     funFact:"In the French military, 'aspirant' is a rank between NCO and officer. It means 'one who aspires'."},

    {type:"teach", trg:"un demographe", src:"a demographer", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in population studies. Feminine: une demographe.",
     example:"A: Le demographe a analyse les tendances de natalite.\nB: Le taux de naissance diminue en Europe.",
     exampleSrc:"A: The demographer analyzed birth rate trends.\nB: The birth rate is declining in Europe.",
     funFact:"France conducts a census every 5 years. INSEE demographers track every population shift."},

    {type:"teach", trg:"la decentralisation", src:"the decentralization", pos:"noun", gender:"f",
     note:"Feminine noun. The transfer of power from central to local government.",
     example:"A: La decentralisation a donne plus de pouvoir aux regions.\nB: Chaque region a son propre budget.",
     exampleSrc:"A: Decentralization gave more power to the regions.\nB: Each region has its own budget.",
     funFact:"France's 1982 decentralization was revolutionary for a historically hyper-centralized country."},

    {type:"mc",
     q:"Comment appelle-t-on un specialiste qui etudie les populations ?",
     opts:["un demographe","un cartographe","un anthropologue","un administrateur"],
     ans:"un demographe",
     hint:"A specialist who studies birth rates, migration, and population trends."},

    {type:"teach", trg:"la decomposition", src:"the decomposition, the breakdown", pos:"noun", gender:"f",
     note:"Feminine noun. Breaking something into its component parts.",
     example:"A: La decomposition de ce probleme en etapes simples aide a le resoudre.\nB: Bonne methode !",
     exampleSrc:"A: Breaking this problem down into simple steps helps solve it.\nB: Good method!",
     funFact:"Descartes' method of decomposition (dividing complex problems into parts) shaped French rational thinking."},

    {type:"teach", trg:"le declassement", src:"the downgrading, the social decline", pos:"noun", gender:"m",
     note:"Masculine noun. A loss of social status or being moved to a lower category.",
     example:"A: La peur du declassement social est forte en France.\nB: Les jeunes diplomes sont les plus touches.",
     exampleSrc:"A: Fear of social decline is strong in France.\nB: Young graduates are the most affected.",
     funFact:"'Declassement' is a hot sociological concept in France. It describes downward social mobility."},

    {type:"teach", trg:"approfondi", src:"in-depth, thorough", pos:"adj", gender:null,
     note:"Adjective. Detailed and comprehensive. Feminine: approfondie.",
     example:"A: Nous avons fait une analyse approfondie du probleme.\nB: Et quelles sont vos conclusions ?",
     exampleSrc:"A: We conducted an in-depth analysis of the problem.\nB: And what are your conclusions?",
     funFact:"From 'approfondir' (to deepen). 'Creuser un sujet' (to dig into a topic) is the informal equivalent."},

    {type:"teach", trg:"ajourne", src:"postponed, deferred", pos:"adj", gender:null,
     note:"Adjective. Delayed to a later date. Feminine: ajournee.",
     example:"A: L'examen a ete ajourne a cause de la greve.\nB: Quand aura-t-il lieu finalement ?",
     exampleSrc:"A: The exam was postponed because of the strike.\nB: When will it finally take place?",
     funFact:"From 'jour' (day). Being 'ajourne' to an exam in France means you failed and must retake it."},

    {type:"teach", trg:"le decorateur", src:"the decorator, the designer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who designs interiors. Feminine: une decoratrice.",
     example:"A: Le decorateur a transforme l'appartement.\nB: Le salon est meconnaissable.",
     exampleSrc:"A: The decorator transformed the apartment.\nB: The living room is unrecognizable.",
     funFact:"French interior decoration has global influence. 'Art deco' itself is short for 'arts decoratifs'."},

    {type:"fb",
     s:"L'examen a ete {1} en raison de circonstances exceptionnelles.",
     a:["ajourne"],
     opts:["ajourne","approfondi","certifie","academique"],
     hint:"Delayed or rescheduled to a later date. Think of 'jour' (day).",
     sSrc:"The exam was {1} due to exceptional circumstances."},

    {type:"match", pairs:[
      {trg:"analphabete", src:"illiterate"},
      {trg:"cartographe", src:"cartographer"},
      {trg:"declassement", src:"social decline"},
      {trg:"decomposition", src:"breakdown"},
      {trg:"decorateur", src:"decorator"}
    ]},

    {type:"mc",
     q:"Quel adjectif signifie 'detaille et complet' ?",
     opts:["approfondi","ajourne","certifie","analphabete"],
     ans:"approfondi",
     hint:"An analysis that goes deep. Think of 'profond' (deep) with a prefix."},

    {type:"fb",
     s:"La {1} a donne plus d'autonomie aux collectivites locales.",
     a:["decentralisation"],
     opts:["decentralisation","decomposition","classification","democratisation"],
     hint:"Transferring power from the central government to regional authorities.",
     sSrc:"{1} gave more autonomy to local authorities."}
  ]
};
export default LESSON_5;
