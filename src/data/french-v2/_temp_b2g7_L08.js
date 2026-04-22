const LESSON_8 = {
  id:"frv2_b2g7_l8", title:"Culture et patrimoine", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Culture et patrimoine",
     desc:"Explore vocabulary for discussing cultural heritage, artistic movements, and traditions.",
     goals:["Learn 15 words about culture and heritage","Discuss art movements","Express views on cultural preservation"]},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement emphasizing emotion over realism.",
     example:"A: L'expressionnisme allemand a influence le cinema.\nB: Oui, pensez a Nosferatu.",
     exampleSrc:"A: German expressionism influenced cinema.\nB: Yes, think of Nosferatu.",
     funFact:"Though born in Germany, expressionism deeply influenced French art. The Fauves (Matisse, Derain) shared its bold color palette."},

    {type:"teach", trg:"la musette", src:"a musette (bag/instrument/dance)", pos:"noun", gender:"f",
     note:"Feminine noun. A small bagpipe, a military bag, or a style of dance music.",
     example:"A: Le bal musette est une tradition parisienne.\nB: On y danse la valse et le tango.",
     exampleSrc:"A: The musette ball is a Parisian tradition.\nB: People dance waltz and tango there.",
     funFact:"Bal musette originated in Auvergnat cafes in Paris. The accordion replaced the original bagpipe, creating iconic French dance music."},

    {type:"teach", trg:"la frise", src:"a frieze", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative band on a building, or a timeline chart.",
     example:"A: La frise du Parthenon est exposee a Londres.\nB: La Grece demande son retour.",
     exampleSrc:"A: The Parthenon frieze is displayed in London.\nB: Greece demands its return.",
     funFact:"In French schools, 'frise chronologique' is a timeline. In architecture, a frieze runs along the top of a wall."},

    {type:"teach", trg:"monochrome", src:"monochrome", pos:"adj", gender:null,
     note:"Adjective. Using only one color or shades of one color.",
     example:"A: Yves Klein est celebre pour ses tableaux monochromes.\nB: Son bleu est unique au monde.",
     exampleSrc:"A: Yves Klein is famous for his monochrome paintings.\nB: His blue is unique in the world.",
     funFact:"Yves Klein patented his shade of blue as 'International Klein Blue' (IKB). It's the most famous monochrome in art history."},

    {type:"mc",
     q:"Quel mouvement artistique met l'emotion au-dessus du realisme ?",
     opts:["l'expressionnisme","le modernisme","le cubisme","le monochrome"],
     ans:"l'expressionnisme",
     hint:"This movement 'expresses' inner feelings through distorted forms and bold colors."},

    {type:"teach", trg:"la mappemonde", src:"a world map, a globe", pos:"noun", gender:"f",
     note:"Feminine noun. A flat representation of the world, or a globe.",
     example:"A: Il y a une mappemonde dans chaque salle de classe.\nB: Les enfants adorent chercher les pays.",
     exampleSrc:"A: There's a world map in every classroom.\nB: The children love searching for countries.",
     funFact:"From Latin 'mappa mundi' (cloth of the world). Technically a flat map, but French speakers also use it for globes."},

    {type:"teach", trg:"monosyllabique", src:"monosyllabic", pos:"adj", gender:null,
     note:"Adjective. Having only one syllable, or giving very brief answers.",
     example:"A: Il ne repond que par des mots monosyllabiques.\nB: Oui, non, bon, bah.",
     exampleSrc:"A: He only answers with monosyllabic words.\nB: Yes, no, fine, well.",
     funFact:"Figuratively describes someone who barely speaks. 'Il est monosyllabique' means he's not very talkative."},

    {type:"teach", trg:"l'humoriste", src:"a comedian, a humorist", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A person who performs comedy.\nSame form for both genders.",
     example:"A: Cet humoriste remplit les salles chaque soir.\nB: Son spectacle est hilarant.",
     exampleSrc:"A: This comedian fills theaters every night.\nB: His show is hilarious.",
     funFact:"French stand-up ('one-man-show') has exploded since the 2000s. Jamel Debbouze, Gad Elmaleh, Florence Foresti are household names."},

    {type:"fb",
     s:"Les enfants ont trouve la France sur la {1} de la classe.",
     a:["mappemonde"],
     opts:["mappemonde","frise","musette","marquise"],
     hint:"A map or globe showing all the countries of the world.",
     sSrc:"The children found France on the classroom {1}."},

    {type:"teach", trg:"la maisonnee", src:"the household", pos:"noun", gender:"f",
     note:"Feminine noun. All the people living in one house.",
     example:"A: Toute la maisonnee est partie en vacances.\nB: La maison est enfin calme.",
     exampleSrc:"A: The entire household has gone on vacation.\nB: The house is finally quiet.",
     funFact:"A warm, slightly old-fashioned word. More poetic than 'menage' or 'foyer'. Evokes family togetherness."},

    {type:"teach", trg:"le decorateur", src:"a decorator, a designer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who designs interiors or stage sets.\nFeminine: la decoratrice.",
     example:"A: Le decorateur a transforme l'appartement.\nB: Je ne le reconnais plus !",
     exampleSrc:"A: The decorator transformed the apartment.\nB: I don't recognize it anymore!",
     funFact:"In French cinema, 'le decorateur' or 'chef decorateur' is the production designer. A prestigious creative role."},

    {type:"teach", trg:"le fremissement", src:"a shiver, a tremor", pos:"noun", gender:"m",
     note:"Masculine noun. A slight trembling or quivering.\nAlso used for early signs of change.",
     example:"A: Un fremissement de joie a parcouru la salle.\nB: Tout le monde attendait cette nouvelle.",
     exampleSrc:"A: A tremor of joy ran through the room.\nB: Everyone was waiting for this news.",
     funFact:"In cooking, 'a fremissement' means barely simmering, when the water just starts to tremble. Precise culinary French."},

    {type:"mc",
     q:"Comment decrit-on une peinture qui n'utilise qu'une seule couleur ?",
     opts:["momentane","monochrome","multicolore","monosyllabique"],
     ans:"monochrome",
     hint:"'Mono' means one, and 'chrome' relates to color. One-color art."},

    {type:"teach", trg:"la grossierete", src:"rudeness, coarseness", pos:"noun", gender:"f",
     note:"Feminine noun. Vulgar or rude behavior.",
     example:"A: La grossierete n'a pas sa place dans un debat.\nB: Le respect mutuel est essentiel.",
     exampleSrc:"A: Rudeness has no place in a debate.\nB: Mutual respect is essential.",
     funFact:"From 'grossier' (coarse). In Old French, it meant clumsy or unsophisticated. The modern meaning is more about vulgarity."},

    {type:"teach", trg:"la moquerie", src:"mockery, ridicule", pos:"noun", gender:"f",
     note:"Feminine noun. The act of making fun of someone.",
     example:"A: Ses moqueries ont blesse tout le monde.\nB: L'humour ne devrait jamais etre cruel.",
     exampleSrc:"A: His mockery hurt everyone.\nB: Humor should never be cruel.",
     funFact:"'Se moquer de' means to mock. La Fontaine's fables are full of 'moquerie' toward human folly."},

    {type:"fb",
     s:"Un {1} de curiosite a parcouru l'assemblee a l'annonce.",
     a:["fremissement"],
     opts:["fremissement","decorateur","humoriste","expressionnisme"],
     hint:"A slight trembling or stirring, like a ripple of excitement through a crowd.",
     sSrc:"A {1} of curiosity rippled through the assembly at the announcement."},

    {type:"match", pairs:[
      {trg:"musette", src:"bagpipe/dance style"},
      {trg:"frise", src:"frieze"},
      {trg:"humoriste", src:"comedian"},
      {trg:"decorateur", src:"decorator"},
      {trg:"fremissement", src:"shiver"}
    ]},

    {type:"mc",
     q:"Quel mot decrit quelqu'un qui repond toujours par un seul mot ?",
     opts:["monotone","momentane","monosyllabique","monochrome"],
     ans:"monosyllabique",
     hint:"Using only words with one syllable, giving very brief responses."},

    {type:"fb",
     s:"L'{1} fait rire le public avec ses observations sur la vie quotidienne.",
     a:["humoriste"],
     opts:["humoriste","expressionnisme","decorateur","frise"],
     hint:"A performer whose job is to make people laugh on stage.",
     sSrc:"The {1} makes the audience laugh with observations about daily life."}
  ]
};
export default LESSON_8;
