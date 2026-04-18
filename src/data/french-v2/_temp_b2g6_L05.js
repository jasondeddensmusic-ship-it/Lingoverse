const LESSON_5 = {
  id:"frv2_b2g6_l5", title:"Le quotidien concret", icon:"\uD83C\uDFE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le quotidien concret",
     desc:"Learn practical vocabulary for everyday objects, household items, and physical descriptions.",
     goals:["Learn 20 concrete everyday B2 words","Describe objects and places precisely","Use specific rather than vague vocabulary"]},

    {type:"teach", trg:"un boîtier", src:"a case, a housing", pos:"noun", gender:"m",
     note:"Masculine noun. A small protective casing for electronics or mechanisms.",
     example:"A: Le boîtier de la télécommande est cassé.\nB: Il faut le remplacer.",
     exampleSrc:"A: The case of the remote control is broken.\nB: We need to replace it.",
     funFact:"From 'boîte' (box). A camera body is also 'un boîtier' in French photography terminology."},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: des coffres-forts.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Tu connais la combinaison ?",
     exampleSrc:"A: The jewels are in the safe.\nB: Do you know the combination?",
     funFact:"Literally 'strong chest'. French banks offer 'coffres-forts' for rental to customers."},

    {type:"teach", trg:"le châssis", src:"the frame, the chassis", pos:"noun", gender:"m",
     note:"Masculine noun. The frame of a window, vehicle, or structure.",
     example:"A: Le châssis de la fenêtre est en bois.\nB: Il faudrait passer au PVC.",
     exampleSrc:"A: The window frame is wooden.\nB: We should switch to PVC.",
     funFact:"From Latin 'capsa' meaning box. Used for car chassis, window frames, and canvas stretchers."},

    {type:"teach", trg:"le gravier", src:"the gravel", pos:"noun", gender:"m",
     note:"Masculine noun. Small stones used for paths and driveways.",
     example:"A: L'allée est couverte de gravier.\nB: Ça crisse sous les pieds.",
     exampleSrc:"A: The path is covered with gravel.\nB: It crunches underfoot.",
     funFact:"From a Gaulish root meaning coarse sand. 'Allée de gravier' is the classic French garden path."},

    {type:"mc",
     q:"Qu'est-ce qu'un 'coffre-fort' ?",
     opts:["Un meuble sécurisé pour objets de valeur","Un type de véhicule blindé","Une armoire ancienne","Un coffre de voiture renforcé"],
     ans:"Un meuble sécurisé pour objets de valeur",
     hint:"A compound word: 'coffre' (chest) + 'fort' (strong). Used to protect valuables."},

    {type:"teach", trg:"le grillage", src:"the wire fence, the mesh", pos:"noun", gender:"m",
     note:"Masculine noun. A wire fence or metal mesh barrier.",
     example:"A: Le grillage du jardin est rouillé.\nB: Il faut le changer avant l'hiver.",
     exampleSrc:"A: The garden fence is rusty.\nB: We need to change it before winter.",
     funFact:"From 'grille' (grate). 'Grillager un terrain' means to fence it with wire mesh."},

    {type:"teach", trg:"un grille-pain", src:"a toaster", pos:"noun", gender:"m",
     note:"Masculine compound noun. Invariable in plural: des grille-pain.",
     example:"A: Le grille-pain ne marche plus.\nB: Il faut en acheter un nouveau.",
     exampleSrc:"A: The toaster doesn't work anymore.\nB: We need to buy a new one.",
     funFact:"Literally 'grill-bread'. French compound nouns often describe function directly."},

    {type:"teach", trg:"la cagoule", src:"the hood, the balaclava", pos:"noun", gender:"f",
     note:"Feminine noun. A hood covering head and neck, or a light rain jacket.",
     example:"A: Mets ta cagoule, il fait froid.\nB: Oui, le vent est glacial.",
     exampleSrc:"A: Put on your hood, it's cold.\nB: Yes, the wind is freezing.",
     funFact:"Originally a monk's cowl. In modern French, both a ski mask and a children's rain jacket."},

    {type:"fb",
     s:"Le {1} de la voiture a été endommagé dans l'accident.",
     a:["châssis"],
     opts:["châssis","grillage","boîtier","gravier"],
     hint:"The structural frame that supports a vehicle or window.",
     sSrc:"The {1} of the car was damaged in the accident."},

    {type:"teach", trg:"la garderie", src:"the daycare, the nursery", pos:"noun", gender:"f",
     note:"Feminine noun. A place where young children are looked after.",
     example:"A: La garderie ferme à dix-huit heures.\nB: On arrive juste à temps.",
     exampleSrc:"A: The daycare closes at six PM.\nB: We're arriving just in time.",
     funFact:"From 'garder' (to keep/watch). 'Garderie périscolaire' covers before and after school hours."},

    {type:"teach", trg:"la liqueur", src:"the liqueur", pos:"noun", gender:"f",
     note:"Feminine noun. A sweet alcoholic drink, usually served after dinner.",
     example:"A: Voulez-vous une liqueur après le repas ?\nB: Oui, une chartreuse s'il vous plaît.",
     exampleSrc:"A: Would you like a liqueur after the meal?\nB: Yes, a Chartreuse please.",
     funFact:"France produces famous liqueurs: Chartreuse (monks' recipe since 1737), Cointreau, Grand Marnier."},

    {type:"teach", trg:"le klaxon", src:"the car horn", pos:"noun", gender:"m",
     note:"Masculine noun. The horn of a vehicle. Also a verb: klaxonner.",
     example:"A: Arrête de klaxonner !\nB: Mais personne ne bouge devant moi.",
     exampleSrc:"A: Stop honking!\nB: But nobody is moving ahead of me.",
     funFact:"Named after the Klaxon brand, which patented the first electric car horn. A genericized trademark."},

    {type:"mc",
     q:"Que désigne 'une garderie' ?",
     opts:["Un lieu où on garde les enfants","Un magasin de jardinage","Une prison pour mineurs","Un refuge pour animaux"],
     ans:"Un lieu où on garde les enfants",
     hint:"A supervised facility for toddlers and young children while parents are at work. Also available after school hours."},

    {type:"teach", trg:"la griffe", src:"the claw, the brand signature", pos:"noun", gender:"f",
     note:"Feminine noun. An animal's claw, or a designer's signature label.",
     example:"A: Ce sac porte la griffe d'un grand créateur.\nB: Pas étonnant qu'il soit cher.",
     exampleSrc:"A: This bag bears the signature of a top designer.\nB: No wonder it's expensive.",
     funFact:"From Germanic 'grip'. Fashion brands are called 'griffes' because designers literally signed their creations."},

    {type:"teach", trg:"le guéridon", src:"the pedestal table", pos:"noun", gender:"m",
     note:"Masculine noun. A small round table, usually with one leg.",
     example:"A: Pose le vase sur le guéridon.\nB: C'est la petite table ronde ?",
     exampleSrc:"A: Put the vase on the pedestal table.\nB: The small round table?",
     funFact:"Named after a character from a 17th-century farce who held things while standing still."},

    {type:"teach", trg:"un embout", src:"a tip, a nozzle", pos:"noun", gender:"m",
     note:"Masculine noun. The end piece attached to a tube, cane, or pen.",
     example:"A: L'embout du stylo est cassé.\nB: Prends un autre stylo.",
     exampleSrc:"A: The tip of the pen is broken.\nB: Take another pen.",
     funFact:"From 'en' + 'bout' (at the end). Practical word for any small end-piece or attachment."},

    {type:"fb",
     s:"Ce sac porte la {1} d'un célèbre couturier.",
     a:["griffe"],
     opts:["griffe","cagoule","garderie","liqueur"],
     hint:"A designer's signature or brand mark, originally meaning an animal's claw.",
     sSrc:"This bag bears the {1} of a famous fashion designer."},

    {type:"teach", trg:"lancinant", src:"piercing, nagging", pos:"adj", gender:null,
     note:"Adjective. A persistent, throbbing pain or a haunting feeling. Feminine: lancinante.",
     example:"A: J'ai une douleur lancinante au genou.\nB: Tu devrais consulter un médecin.",
     exampleSrc:"A: I have a nagging pain in my knee.\nB: You should see a doctor.",
     funFact:"From Latin 'lancinare' meaning to tear. Describes pain that comes in sharp, rhythmic waves."},

    {type:"teach", trg:"lugubre", src:"gloomy, dismal", pos:"adj", gender:null,
     note:"Adjective. Dark, depressing, and mournful. Same form for both genders.",
     example:"A: Cette maison abandonnée est lugubre.\nB: On dirait un décor de film d'horreur.",
     exampleSrc:"A: This abandoned house is gloomy.\nB: It looks like a horror movie set.",
     funFact:"From Latin 'lugubris' meaning mournful. French gothic literature thrives on 'atmosphères lugubres'."},

    {type:"match", pairs:[
      {trg:"boîtier", src:"case, housing"},
      {trg:"klaxon", src:"car horn"},
      {trg:"griffe", src:"claw, brand signature"},
      {trg:"guéridon", src:"pedestal table"},
      {trg:"embout", src:"tip, nozzle"}
    ]},

    {type:"mc",
     q:"Quel adjectif décrit une douleur persistante et pulsante ?",
     opts:["lancinant","lugubre","agrandi","légitime"],
     ans:"lancinant",
     hint:"From Latin 'to tear'. Describes pain that throbs in sharp, rhythmic waves."},

    {type:"fb",
     s:"L'ambiance de ce vieux château est vraiment {1}.",
     a:["lugubre"],
     opts:["lugubre","lancinant","agrandi","inattendu"],
     hint:"An adjective meaning dark, depressing, and mournful, like a haunted place.",
     sSrc:"The atmosphere of this old castle is truly {1}."}
  ]
};
export default LESSON_5;
