const LESSON_20 = {
  id:"frv2_b2g8_l20", title:"Nuances et expressions", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nuances et expressions",
     desc:"Subtle vocabulary for expressing fine distinctions. From reluctant pronouns to mixed feelings and shrewd observations.",
     goals:["Learn 15 nuanced B2 words and expressions","Express subtle distinctions in French","Use advanced pronouns and adverbs"]},

    {type:"teach", trg:"nous-mêmes", src:"ourselves", pos:"pron", gender:null,
     note:"Emphatic pronoun. Stresses that we did it ourselves.\n'Eux-mêmes' (themselves), 'vous-mêmes' (yourselves).",
     example:"A: Nous l'avons construit nous-mêmes.\nB: Bravo, c'est un travail remarquable.",
     exampleSrc:"A: We built it ourselves.\nB: Well done, it's remarkable work.",
     funFact:"The hyphenated '-même' forms are essential in formal writing. They add emphasis that simple 'nous' lacks."},

    {type:"teach", trg:"mêlé", src:"mixed, intermingled", pos:"adj", gender:null,
     note:"Adjective. Mixed together, blended.\nFeminine: mêlée. Also: 'mêlée' (scrum, fray).",
     example:"A: Ses sentiments sont mêlés de joie et de tristesse.\nB: C'est normal après un départ.",
     exampleSrc:"A: His feelings are a mix of joy and sadness.\nB: It's normal after a departure.",
     funFact:"'La mêlée' in rugby is the scrum. 'Se mêler de' means to meddle in. Rich word family."},

    {type:"teach", trg:"le mammifère", src:"the mammal", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that feeds its young with milk.\nFrom Latin 'mamma' (breast).",
     example:"A: La baleine est le plus grand mammifère du monde.\nB: Et pourtant elle vit dans l'eau.",
     exampleSrc:"A: The whale is the largest mammal in the world.\nB: And yet it lives in water.",
     funFact:"France protects all wild mammals by law. The 'loup' (wolf) reintroduction remains hugely controversial."},

    {type:"teach", trg:"magnétique", src:"magnetic", pos:"adj", gender:null,
     note:"Adjective. Having the property of a magnet.\nAlso figurative: a magnetic personality.",
     example:"A: Elle a un charme magnétique.\nB: Tout le monde est attiré par elle.",
     exampleSrc:"A: She has a magnetic charm.\nB: Everyone is drawn to her.",
     funFact:"'Champ magnétique' is magnetic field. 'Bande magnétique' was the cassette tape. Both literal and figurative uses."},

    {type:"mc",
     q:"Quel pronom emphatique de la première personne du pluriel souligne que le groupe a agi sans aide extérieure ?",
     opts:["nous-mêmes","nous autres","entre nous","les nôtres"],
     ans:"nous-mêmes",
     hint:"A hyphenated emphatic pronoun. '-même' is added for emphasis, like English 'ourselves'."},

    {type:"teach", trg:"la mappemonde", src:"the world map, the globe", pos:"noun", gender:"f",
     note:"Feminine noun. A map of the world, or a globe.\nFrom Latin 'mappa mundi'.",
     example:"A: La mappemonde dans son bureau est magnifique.\nB: Elle date du XIXe siècle.",
     exampleSrc:"A: The world map in his office is magnificent.\nB: It dates from the 19th century.",
     funFact:"Technically 'mappemonde' means a flat world map, 'globe' means the sphere. But French mixes both freely."},

    {type:"teach", trg:"la matrice", src:"the matrix, the mold", pos:"noun", gender:"f",
     note:"Feminine noun. A mold or template. Also: a mathematical matrix.\nFrom Latin 'matrix' (womb).",
     example:"A: Cette idée est la matrice de tout le projet.\nB: Tout en découle logiquement.",
     exampleSrc:"A: This idea is the matrix of the entire project.\nB: Everything flows from it logically.",
     funFact:"The Latin root means 'womb'. French uses it for molds, math, printing, and figuratively for origins."},

    {type:"teach", trg:"la malformation", src:"the malformation", pos:"noun", gender:"f",
     note:"Feminine noun. An abnormal formation, especially in the body.\n'Mal' + 'formation'.",
     example:"A: Cette malformation est détectable avant la naissance.\nB: Les échographies sont très précises.",
     exampleSrc:"A: This malformation is detectable before birth.\nB: Ultrasounds are very precise.",
     funFact:"French prenatal care is among the world's best. 'Échographie' (ultrasound) is free and routine."},

    {type:"fb",
     s:"La baleine est le plus grand {1} du monde.",
     a:["mammifère"],
     opts:["mammifère","magnétique","mécène","migrant"],
     hint:"An animal that feeds its young with milk. From Latin 'mamma' meaning breast.",
     sSrc:"The whale is the largest {1} in the world."},

    {type:"teach", trg:"multicritère", src:"multi-criteria", pos:"adj", gender:null,
     note:"Adjective. Based on several criteria at once.\nUsed in business and evaluation.",
     example:"A: L'analyse multicritère aide à prendre des décisions.\nB: Chaque facteur a un poids différent.",
     exampleSrc:"A: Multi-criteria analysis helps make decisions.\nB: Each factor has a different weight.",
     funFact:"A key term in French project management. 'Grille multicritère' (multi-criteria grid) is a standard tool."},

    {type:"teach", trg:"numéroté", src:"numbered", pos:"adj", gender:null,
     note:"Adjective. Having a number assigned.\nFeminine: numérotée. From 'numéro'.",
     example:"A: Les places sont numérotées.\nB: Cherchons nos sièges.",
     exampleSrc:"A: The seats are numbered.\nB: Let's find our seats.",
     funFact:"In French theater, 'placement numéroté' means assigned seating. 'Placement libre' means sit anywhere."},

    {type:"teach", trg:"l'exaltation", src:"the exaltation, the elation", pos:"noun", gender:"f",
     note:"Feminine noun. Intense enthusiasm or religious fervor.\nCan be positive or warning.",
     example:"A: L'exaltation de la foule était contagieuse.\nB: Tout le monde chantait et dansait.",
     exampleSrc:"A: The crowd's exaltation was contagious.\nB: Everyone was singing and dancing.",
     funFact:"French uses 'exaltation' for both positive passion and dangerous fanaticism. Context is crucial."},

    {type:"mc",
     q:"Quel mot signifie 'une carte représentant le monde entier' ?",
     opts:["une malformation","une mappemonde","une médiation","une matrice"],
     ans:"une mappemonde",
     hint:"From Latin 'mappa mundi'. Can be a flat map or a globe, though purists distinguish them."},

    {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or expression of emotion.\n'Point d'exclamation' = exclamation mark.",
     example:"A: Son exclamation de surprise a fait rire tout le monde.\nB: Elle ne s'y attendait pas du tout.",
     exampleSrc:"A: Her exclamation of surprise made everyone laugh.\nB: She didn't expect it at all.",
     funFact:"French uses exclamation marks more sparingly than English. Overusing them is seen as informal."},

    {type:"teach", trg:"l'extrémité", src:"the extremity, the end", pos:"noun", gender:"f",
     note:"Feminine noun. The very end or tip of something.\nPlural for hands and feet: les extrémités.",
     example:"A: À l'extrémité du quai, il y a un phare.\nB: La vue de là-bas est superbe.",
     exampleSrc:"A: At the end of the pier, there's a lighthouse.\nB: The view from there is superb.",
     funFact:"'Être réduit à la dernière extrémité' means to be at the very last resort. A dramatic expression."},

    {type:"teach", trg:"l'inflexion", src:"the inflection, the shift", pos:"noun", gender:"f",
     note:"Feminine noun. A change in direction, tone, or grammatical form.\nFrom 'infléchir'.",
     example:"A: L'inflexion de sa voix trahissait son émotion.\nB: On sentait qu'il était ému.",
     exampleSrc:"A: The inflection of his voice betrayed his emotion.\nB: You could feel he was moved.",
     funFact:"In grammar, 'inflexion' covers conjugation and declension. In politics, it means a policy shift."},

    {type:"fb",
     s:"Les places sont {1}, cherchons nos sièges.",
     a:["numérotées"],
     opts:["numérotées","magnétiques","mêlées","multicritères"],
     hint:"Having a number assigned to them. From 'numéro'. Think of assigned seating.",
     sSrc:"The seats are {1}, let's find our seats."},

    {type:"match", pairs:[
      {trg:"nous-mêmes", src:"ourselves"},
      {trg:"mammifère", src:"mammal"},
      {trg:"mappemonde", src:"world map"},
      {trg:"exaltation", src:"elation, fervor"},
      {trg:"inflexion", src:"inflection, shift"}
    ]},

    {type:"mc",
     q:"Quel mot décrit un changement subtil de ton dans la voix de quelqu'un ?",
     opts:["une extrémité","une exaltation","une inflexion","une exclamation"],
     ans:"une inflexion",
     hint:"A shift in direction or tone. Used in grammar, politics, and voice description."},

    {type:"fb",
     s:"Cette idée est la {1} de tout le projet, tout en découle.",
     a:["matrice"],
     opts:["matrice","mappemonde","malformation","extrémité"],
     hint:"A mold or template from which everything originates. From Latin meaning 'womb'.",
     sSrc:"This idea is the {1} of the entire project, everything flows from it."}
  ]
};
export default LESSON_20;
