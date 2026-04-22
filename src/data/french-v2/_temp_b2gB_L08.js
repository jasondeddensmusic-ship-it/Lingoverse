const LESSON_8 = {
  id:"frv2_b2gB_l8", title:"Arts et culture", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts et culture",
     desc:"Discover vocabulary for discussing art, literature, music, and cultural movements in French.",
     goals:["Learn 10 arts and culture terms","Discuss artistic movements","Express aesthetic judgments"]},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement emphasizing emotional experience over reality.\nLess prominent in France than impressionism.",
     example:"A: L'expressionnisme a revolutionne la peinture au vingtieme siecle.\nB: Les couleurs vives et les formes deformees choquaient le public.",
     exampleSrc:"A: Expressionism revolutionized painting in the twentieth century.\nB: The vivid colors and distorted forms shocked the public.",
     funFact:"While expressionism is mostly German (die Brucke, der Blaue Reiter), French artists like Rouault and Soutine embraced its intensity."},

    {type:"teach", trg:"la phonetique", src:"phonetics", pos:"noun", gender:"f",
     note:"Feminine noun. The study of speech sounds.\nAlphabet phonetique = phonetic alphabet.",
     example:"A: La phonetique francaise est complexe pour les etrangers.\nB: Les voyelles nasales sont particulierement difficiles.",
     exampleSrc:"A: French phonetics is complex for foreigners.\nB: Nasal vowels are particularly difficult.",
     funFact:"French has 16 vowel sounds compared to English's 12-15. The nasal vowels (on, an, in, un) exist in very few other languages."},

    {type:"teach", trg:"un photomontage", src:"a photomontage", pos:"noun", gender:"m",
     note:"Masculine noun. A composite image made from multiple photographs.\nPhoto + montage. Used in art and propaganda.",
     example:"A: Ce photomontage est tres reussi.\nB: On ne voit pas du tout les raccords.",
     exampleSrc:"A: This photomontage is very well done.\nB: You can't see the joins at all.",
     funFact:"French Dadaists used photomontage for political satire. Today the word also covers digital image manipulation."},

    {type:"teach", trg:"le plurilinguisme", src:"multilingualism", pos:"noun", gender:"m",
     note:"Masculine noun. The ability to speak multiple languages.\nPluri (many) + linguisme (language practice).",
     example:"A: Le plurilinguisme est encourage dans les ecoles europeennes.\nB: Les enfants apprennent trois langues des le primaire.",
     exampleSrc:"A: Multilingualism is encouraged in European schools.\nB: Children learn three languages from primary school.",
     funFact:"Despite its reputation, France is becoming more multilingual. Over 75 regional languages exist alongside French."},

    {type:"teach", trg:"un pleonasme", src:"a pleonasm", pos:"noun", gender:"m",
     note:"Masculine noun. Using more words than necessary to express an idea.\n'Monter en haut' (go up upward) is a classic French pleonasm.",
     example:"A: 'Descendre en bas' est un pleonasme.\nB: Oui, descendre suffit, pas besoin d'ajouter 'en bas'.",
     exampleSrc:"A: 'Descendre en bas' is a pleonasm.\nB: Yes, descendre is enough, no need to add 'en bas'.",
     funFact:"French teachers wage war on pleonasms. 'Voire meme' and 'au jour d'aujourd'hui' drive purists absolutely crazy."},

    {type:"teach", trg:"la physionomie", src:"the physiognomy, the appearance", pos:"noun", gender:"f",
     note:"Feminine noun. The features of a person's face, or the general appearance of something.\nUn physionomiste = someone good at remembering faces.",
     example:"A: La physionomie de ce quartier a completement change.\nB: On ne reconnait plus rien apres les travaux.",
     exampleSrc:"A: The appearance of this neighborhood has completely changed.\nB: Nothing is recognizable after the construction work.",
     funFact:"French nightclub bouncers are officially called 'physionomistes'. Their job title literally means face-reader."},

    {type:"teach", trg:"un precepte", src:"a precept, a principle", pos:"noun", gender:"m",
     note:"Masculine noun. A rule or principle that guides behavior.\nPreceptes moraux = moral precepts.",
     example:"A: Ce precepte philosophique guide ma vie.\nB: Lequel exactement?",
     exampleSrc:"A: This philosophical precept guides my life.\nB: Which one exactly?",
     funFact:"La Rochefoucauld's 'Maximes' (1665) are a collection of preceptes that French students still study. Short, sharp, and cynical."},

    {type:"teach", trg:"le particularisme", src:"particularism", pos:"noun", gender:"m",
     note:"Masculine noun. Attachment to the special interests of a group or region.\nFrench regions have strong particularismes.",
     example:"A: Le particularisme breton est tres marque.\nB: Ils tiennent a leur langue et leurs traditions.",
     exampleSrc:"A: Breton particularism is very strong.\nB: They hold onto their language and traditions.",
     funFact:"France has 18 regions but dozens of cultural identities. Corsican, Basque, Alsatian, and Breton particularisms are the strongest."},

    {type:"teach", trg:"polemique", src:"controversial, polemical", pos:"adj", gender:null,
     note:"Adjective. Causing heated debate or controversy.\nAlso a noun: une polemique = a controversy.",
     example:"A: Cette decision polemique a divise l'opinion.\nB: Les medias ne parlent que de ca.",
     exampleSrc:"A: This controversial decision divided opinion.\nB: The media only talk about it.",
     funFact:"French political life thrives on polemiques. Talk shows like 'C dans l'air' are built entirely on heated debate."},

    {type:"teach", trg:"l'exclamation", src:"exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry expressing surprise or strong emotion.\nPoint d'exclamation = exclamation mark.",
     example:"A: Son exclamation de joie a surpris tout le monde.\nB: Il ne s'attendait pas a cette bonne nouvelle.",
     exampleSrc:"A: His exclamation of joy surprised everyone.\nB: He wasn't expecting this good news.",
     funFact:"French uses the exclamation mark more sparingly than English. Overusing it in formal writing is considered poor style."},

    {type:"mc", q:"Qu'est-ce qu'un pleonasme?",
     opts:["Une repetition inutile de sens","Une figure de style poetique","Un mot etranger","Une faute de grammaire"],
     ans:"Une repetition inutile de sens",
     hint:"Think of saying the same thing twice with different words, like 'go up upward'"},

    {type:"fb", s:"La {1} francaise est difficile pour les anglophones.",
     a:["phonetique"], opts:["phonetique","physionomie","polemique","exclamation"],
     hint:"The study of speech sounds, particularly the nasal vowels unique to French",
     sSrc:"French {1} is difficult for English speakers."},

    {type:"mc", q:"Que fait un 'physionomiste' dans une boite de nuit?",
     opts:["Il nettoie la salle","Il reconnait les visages","Il joue de la musique","Il sert les boissons"],
     ans:"Il reconnait les visages",
     hint:"The job title comes from the word for facial features and appearance"},

    {type:"match", pairs:[
      {trg:"l'expressionnisme", src:"expressionism"},
      {trg:"un pleonasme", src:"a pleonasm"},
      {trg:"le plurilinguisme", src:"multilingualism"},
      {trg:"un precepte", src:"a precept"}
    ]},

    {type:"fb", s:"Ce sujet {1} a provoque un debat national.",
     a:["polemique"], opts:["polemique","phonetique","plurilingue","expressionniste"],
     hint:"The adjective describes something that causes heated public controversy",
     sSrc:"This {1} topic caused a national debate."},

    {type:"mc", q:"Le {1} regional s'oppose souvent a la centralisation.",
     opts:["photomontage","precepte","particularisme","pleonasme"],
     ans:"particularisme",
     hint:"The attachment of a region to its own special cultural identity and interests"},

    {type:"fb", s:"'Monter en haut' est un {1} classique.",
     a:["pleonasme"], opts:["pleonasme","precepte","particularisme","photomontage"],
     hint:"The word for a redundant expression where both parts say the same thing",
     sSrc:"'Monter en haut' is a classic {1}."},

    {type:"mc", q:"L'expressionnisme est un mouvement surtout:",
     opts:["Francais","Espagnol","Italien","Allemand"],
     ans:"Allemand",
     hint:"Think of die Brucke and der Blaue Reiter, two founding groups of this movement"},

    {type:"fb", s:"Ce {1} numerique melange six photos differentes.",
     a:["photomontage"], opts:["photomontage","pleonasme","precepte","particularisme"],
     hint:"The compound noun combines photography with the act of assembling pieces together",
     sSrc:"This digital {1} blends six different photos."},

    {type:"match", pairs:[
      {trg:"la physionomie", src:"appearance"},
      {trg:"polemique", src:"controversial"},
      {trg:"le particularisme", src:"particularism"},
      {trg:"l'exclamation", src:"exclamation"}
    ]}
  ]
};
export default LESSON_8;
