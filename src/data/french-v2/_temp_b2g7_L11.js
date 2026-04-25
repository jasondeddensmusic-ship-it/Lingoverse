const LESSON_11 = {
  id:"frv2_b2g7_l11", title:"Technologie et innovation", icon:"\u{1F4BB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Technologie et innovation",
     desc:"Learn vocabulary for discussing technology, digital culture, and innovation.",
     goals:["Learn 15 technology-related words","Discuss digital trends","Express views on technological change"]},

    {type:"teach", trg:"le galeriste", src:"a gallery owner", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A person who owns or manages an art gallery.",
     example:"A: Le galeriste a organise un vernissage hier.\nB: L'exposition etait magnifique.",
     exampleSrc:"A: The gallery owner organized an opening last night.\nB: The exhibition was magnificent.",
     funFact:"Paris's Marais district is packed with 'galeristes'. A vernissage (opening) typically includes wine and mingling."},

    {type:"teach", trg:"la detonation", src:"a detonation", pos:"noun", gender:"f",
     note:"Feminine noun. A violent explosion or its sound.",
     example:"A: La detonation a fait trembler les vitres.\nB: C'etait un feu d'artifice.",
     exampleSrc:"A: The detonation made the windows shake.\nB: It was fireworks.",
     funFact:"In engine technology, 'la detonation' is engine knock caused by premature fuel ignition. Mechanics call it 'cliquetis'."},

    {type:"teach", trg:"le grille-pain", src:"a toaster", pos:"noun", gender:"m",
     note:"Masculine noun. A kitchen appliance for toasting bread.\nInvariable: des grille-pain.",
     example:"A: Le grille-pain est en panne.\nB: Utilise le four en attendant.",
     exampleSrc:"A: The toaster is broken.\nB: Use the oven in the meantime.",
     funFact:"Literally 'grill-bread'. French compound nouns with a verb + noun pattern are always masculine and don't change in plural."},

    {type:"teach", trg:"le coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine noun. A secure box for valuables.\nPlural: des coffres-forts.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Quel est le code ?",
     exampleSrc:"A: The jewels are in the safe.\nB: What's the code?",
     funFact:"Literally 'strong chest'. French banks offer 'coffres-forts' for rent. Digital versions are called 'coffre-fort numerique'."},

    {type:"mc",
     q:"Quel appareil sert a griller des tranches de pain ?",
     opts:["le grille-pain","le coffre-fort","le coupe-papier","le compte-gouttes"],
     ans:"le grille-pain",
     hint:"A compound kitchen noun built from a toasting action plus the food being toasted. Found on breakfast tables everywhere."},

    {type:"teach", trg:"le coupe-papier", src:"a letter opener", pos:"noun", gender:"m",
     note:"Masculine noun. A blade for opening envelopes.\nInvariable: des coupe-papier.",
     example:"A: Passe-moi le coupe-papier, s'il te plait.\nB: Il est dans le tiroir du bureau.",
     exampleSrc:"A: Pass me the letter opener, please.\nB: It's in the desk drawer.",
     funFact:"Before email, the 'coupe-papier' was an essential desk tool. Decorative ones in ivory or silver are now collector's items."},

    {type:"teach", trg:"le compte-gouttes", src:"a dropper, a pipette", pos:"noun", gender:"m",
     note:"Masculine noun. A device for dispensing liquid drop by drop.\n'Au compte-gouttes' means sparingly.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: On ne sait presque rien encore.",
     exampleSrc:"A: Information is trickling in drop by drop.\nB: We barely know anything yet.",
     funFact:"'Au compte-gouttes' is a very common expression for anything given in tiny amounts: money, news, opportunities."},

    {type:"teach", trg:"le chassis", src:"a frame, a chassis", pos:"noun", gender:"m",
     note:"Masculine noun. The framework of a vehicle, window, or canvas.",
     example:"A: Le chassis de la voiture est rouille.\nB: Il faudra le remplacer.",
     exampleSrc:"A: The car's chassis is rusted.\nB: It will need to be replaced.",
     funFact:"From 'chasse' (frame). In art, a 'chassis' is the wooden frame on which canvas is stretched. Cars, windows, and paintings all have them."},

    {type:"fb",
     s:"Les subventions sont distribuees au {1} dans ce secteur.",
     a:["compte-gouttes"],
     opts:["compte-gouttes","coffre-fort","coupe-papier","chassis"],
     hint:"An expression meaning sparingly, drop by drop, in tiny amounts.",
     sSrc:"Grants are distributed {1} in this sector."},

    {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters used to write a language.",
     example:"A: L'alphabet francais comporte vingt-six lettres.\nB: Plus les accents et les cedilles.",
     exampleSrc:"A: The French alphabet has twenty-six letters.\nB: Plus accents and cedillas.",
     funFact:"French uses the Latin alphabet plus five diacritics: accent aigu, grave, circonflexe, trema, and cedille. That's 42 possible characters."},

    {type:"teach", trg:"le loden", src:"loden (fabric/coat)", pos:"noun", gender:"m",
     note:"Masculine noun. A thick waterproof woolen fabric, or a coat made from it.",
     example:"A: Son loden vert est parfait pour l'automne.\nB: C'est un tissu qui dure des annees.",
     exampleSrc:"A: His green loden coat is perfect for autumn.\nB: It's a fabric that lasts for years.",
     funFact:"Originally from the Tyrol region. In France, a 'loden' became associated with the intellectual bourgeoisie of the Left Bank."},

    {type:"teach", trg:"le garde-chasse", src:"a gamekeeper", pos:"noun", gender:"m",
     note:"Masculine noun despite feminine article in compound.\nA person who protects wildlife on an estate.",
     example:"A: Le garde-chasse surveille les braconniers.\nB: Il connait chaque sentier de la foret.",
     exampleSrc:"A: The gamekeeper watches for poachers.\nB: He knows every path in the forest.",
     funFact:"France has about 30,000 'gardes-chasse' (now called 'gardes particuliers'). Hunting is deeply embedded in French rural culture."},

    {type:"mc",
     q:"Quel objet sert a ouvrir les enveloppes ?",
     opts:["un compte-gouttes","un coupe-papier","un grille-pain","un coffre-fort"],
     ans:"un coupe-papier",
     hint:"A blade that 'cuts paper'. A desk tool from the pre-email era."},

    {type:"teach", trg:"la cinquantieme", src:"the fiftieth", pos:"noun", gender:null,
     note:"Ordinal adjective. The number fifty in order.\nAlso noun: un/une cinquantieme.",
     example:"A: C'est le cinquantieme anniversaire du festival.\nB: Un demi-siecle de musique !",
     exampleSrc:"A: It's the fiftieth anniversary of the festival.\nB: Half a century of music!",
     funFact:"French ordinals above 'premier/premiere' are regular: add '-ieme' to the cardinal. 'Cinquante' drops the 'e' before '-ieme'."},

    {type:"teach", trg:"le dixieme", src:"the tenth, a tenth", pos:"noun", gender:"m",
     note:"Masculine noun. One part of ten, or the tenth position.",
     example:"A: Il n'a fait qu'un dixieme du travail.\nB: Il doit accelerer.",
     exampleSrc:"A: He's only done a tenth of the work.\nB: He needs to speed up.",
     funFact:"The French decimal system uses commas where English uses periods: 3,14 (French) vs 3.14 (English). 'Dixieme' reflects this system."},

    {type:"fb",
     s:"Le {1} de la fenetre est en bois massif.",
     a:["chassis"],
     opts:["chassis","coffre-fort","grille-pain","coupe-papier"],
     hint:"The structural frame that holds the glass in a window.",
     sSrc:"The window {1} is made of solid wood."},

    {type:"match", pairs:[
      {trg:"grille-pain", src:"toaster"},
      {trg:"coffre-fort", src:"safe"},
      {trg:"coupe-papier", src:"letter opener"},
      {trg:"compte-gouttes", src:"dropper"},
      {trg:"garde-chasse", src:"gamekeeper"}
    ]},

    {type:"mc",
     q:"Combien de lettres l'alphabet francais comporte-t-il ?",
     opts:["vingt-huit","trente","vingt-six","vingt-quatre"],
     ans:"vingt-six",
     hint:"Same number as the English alphabet, plus diacritics."},

    {type:"fb",
     s:"Les bijoux de famille sont en securite dans le {1}.",
     a:["coffre-fort"],
     opts:["coffre-fort","coupe-papier","grille-pain","chassis"],
     hint:"A locked metal box designed to protect valuables from theft.",
     sSrc:"The family jewels are safe in the {1}."}
  ]
};
export default LESSON_11;
