const LESSON_5 = {
  id:"frv2_b2g4_l5", title:"L'habitat et l'espace", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'habitat et l'espace",
     desc:"Learn vocabulary about housing, living spaces, and urban environments.",
     goals:["Learn 15 words about housing and spaces","Describe living environments in detail","Discuss urban planning and architecture"]},

    {type:"teach", trg:"habitable", src:"habitable, livable", pos:"adj", gender:null,
     note:"Adjective. Fit for human habitation. Opposite: inhabitable.",
     example:"A: Cet appartement n'est plus habitable.\nB: Il y a de l'humidite partout.",
     exampleSrc:"A: This apartment is no longer livable.\nB: There's dampness everywhere.",
     funFact:"In French law, a landlord must provide a 'logement habitable'. Minimum standards are strict."},

    {type:"teach", trg:"un hangar", src:"a hangar, a warehouse", pos:"noun", gender:"m",
     note:"Masculine noun. A large building for storage or aircraft.",
     example:"A: L'avion est dans le hangar.\nB: Les mecaniciens le reparent.",
     exampleSrc:"A: The plane is in the hangar.\nB: The mechanics are repairing it.",
     funFact:"English borrowed 'hangar' from French. Originally a Frankish word for an enclosure."},

    {type:"teach", trg:"un chassis", src:"a frame, a chassis", pos:"noun", gender:"m",
     note:"Masculine noun. The frame of a window, vehicle, or machine.",
     example:"A: Le chassis de la fenetre est pourri.\nB: Il faut le remplacer avant l'hiver.",
     exampleSrc:"A: The window frame is rotten.\nB: We need to replace it before winter.",
     funFact:"English borrowed 'chassis' from French. The silent 's' at the end is typical of French."},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine noun. A secure container for valuables. Literally: strong chest.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Personne ne connait le code.",
     exampleSrc:"A: The jewelry is in the safe.\nB: Nobody knows the code.",
     funFact:"A compound noun: 'coffre' (chest) + 'fort' (strong). Plural: coffres-forts."},

    {type:"teach", trg:"un depotoir", src:"a dump, a dumping ground", pos:"noun", gender:"m",
     note:"Masculine noun. A place where waste is thrown. Also figurative.",
     example:"A: Cette piece est un vrai depotoir.\nB: Il faut ranger immediatement.",
     exampleSrc:"A: This room is a real dump.\nB: We need to clean up immediately.",
     funFact:"From 'depot' + '-oir' (place suffix). Often used figuratively for any messy or neglected place."},

    {type:"mc",
     q:"Quel mot designe un endroit ou l'on jette les dechets ?",
     opts:["un depotoir","un hangar","un chassis","un coffre-fort"],
     ans:"un depotoir",
     hint:"Built from 'depot' with the suffix -oir indicating a place. Used literally and figuratively."},

    {type:"teach", trg:"un fournil", src:"a bakehouse, a baking room", pos:"noun", gender:"m",
     note:"Masculine noun. The room where bread is baked in a bakery.",
     example:"A: Le boulanger travaille dans le fournil des 4 heures.\nB: L'odeur du pain frais est delicieuse.",
     exampleSrc:"A: The baker works in the bakehouse from 4 AM.\nB: The smell of fresh bread is delicious.",
     funFact:"From 'four' (oven). The fournil is the heart of every French bakery, hidden behind the shop."},

    {type:"teach", trg:"une garderie", src:"a daycare center", pos:"noun", gender:"f",
     note:"Feminine noun. A facility where young children are cared for.",
     example:"A: La garderie ouvre a sept heures.\nB: C'est pratique pour les parents qui travaillent.",
     exampleSrc:"A: The daycare opens at seven.\nB: It's convenient for working parents.",
     funFact:"France's daycare system is one of Europe's best funded. 'Creche' is the more common term now."},

    {type:"teach", trg:"le goudron", src:"the tar, the asphalt", pos:"noun", gender:"m",
     note:"Masculine noun. Black sticky substance used for road surfaces.",
     example:"A: Le goudron fond sous la chaleur.\nB: Les routes deviennent collantes en ete.",
     exampleSrc:"A: The tar melts in the heat.\nB: Roads become sticky in summer.",
     funFact:"From Arabic 'qatran'. One of many French words borrowed from Arabic during the Crusades."},

    {type:"fb",
     s:"Cet appartement n'est plus {1} a cause de l'humidite.",
     a:["habitable"],
     opts:["habitable","horrible","heureux","hostile"],
     hint:"An adjective meaning fit for human habitation, built on the verb 'habiter'.",
     sSrc:"This apartment is no longer {1} because of the dampness."},

    {type:"teach", trg:"un gravier", src:"gravel", pos:"noun", gender:"m",
     note:"Masculine noun. Small stones used for paths and driveways.",
     example:"A: L'allee est couverte de gravier.\nB: Ca crisse sous les pieds.",
     exampleSrc:"A: The driveway is covered with gravel.\nB: It crunches underfoot.",
     funFact:"From Old French 'grave' meaning sandy shore. The Gravelly terrain shaped many French place names."},

    {type:"teach", trg:"le havre", src:"the haven, the shelter", pos:"noun", gender:"m",
     note:"Masculine noun. A place of safety or shelter.",
     example:"A: Cette maison est un havre de paix.\nB: On oublie tous ses soucis ici.",
     exampleSrc:"A: This house is a haven of peace.\nB: You forget all your worries here.",
     funFact:"Le Havre, France's largest Atlantic port, takes its name from this word. Also the root of English 'harbor'."},

    {type:"teach", trg:"la flambee", src:"the surge, the blaze", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden sharp rise in prices. Also a roaring fire.",
     example:"A: La flambee des prix immobiliers inquiete.\nB: Les jeunes ne peuvent plus acheter.",
     exampleSrc:"A: The surge in property prices is worrying.\nB: Young people can no longer buy.",
     funFact:"'Faire une flambee' means to light a fire. The economic sense captures the idea of sudden, intense heat."},

    {type:"mc",
     q:"Comment appelle-t-on un lieu sur et paisible ?",
     opts:["un havre","un hangar","un depotoir","un fournil"],
     ans:"un havre",
     hint:"This word gave its name to a major French port city and is related to English 'harbor'."},

    {type:"teach", trg:"la division", src:"the division, the disagreement", pos:"noun", gender:"f",
     note:"Feminine noun. Separation into parts. Also discord between groups.",
     example:"A: La division au sein du parti est profonde.\nB: Ils n'arrivent plus a se mettre d'accord.",
     exampleSrc:"A: The division within the party is deep.\nB: They can no longer agree.",
     funFact:"In French army structure, 'une division' is about 15,000 soldiers. Same word, very different scale."},

    {type:"fb",
     s:"La {1} des prix du logement est alarmante.",
     a:["flambee"],
     opts:["flambee","division","garderie","globalite"],
     hint:"A sudden dramatic increase, like a fire flaring up. Used especially for prices.",
     sSrc:"The {1} in housing prices is alarming."},

    {type:"match", pairs:[
      {trg:"hangar", src:"warehouse"},
      {trg:"coffre-fort", src:"safe"},
      {trg:"fournil", src:"bakehouse"},
      {trg:"goudron", src:"tar"},
      {trg:"havre", src:"haven"}
    ]},

    {type:"mc",
     q:"D'ou vient le mot 'goudron' ?",
     opts:["De l'arabe","Du latin","Du grec","Du germanique"],
     ans:"De l'arabe",
     hint:"Many French words for materials and trade goods were borrowed during medieval contact with the Arab world."}
  ]
};
export default LESSON_5;
