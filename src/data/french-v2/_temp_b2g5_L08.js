// French B2 Gap Lesson 8. Culture and Arts
const LESSON_8 = {id:"frv2_b2g5_l8", title:"Culture et arts", icon:"🎭", xp:15, board:true, steps:[
  {type:"intro", title:"Culture et arts",
   desc:"Explore vocabulary for discussing cultural movements, artistic expression, and the creative world at B2 level.",
   goals:["Learn 15 key words about culture and arts","Discuss artistic movements and creative expression","Use abstract cultural vocabulary"]},

  {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
   note:"An art movement emphasizing emotional experience over physical reality.\nPopular in early 20th century.",
   example:"A: L'expressionnisme est né en Allemagne.\nB: Oui, au début du vingtième siècle.\nA: Les couleurs sont très intenses.\nB: Elles expriment les émotions de l'artiste.",
   exampleSrc:"A: Expressionism was born in Germany.\nB: Yes, at the beginning of the twentieth century.\nA: The colors are very intense.\nB: They express the artist's emotions.",
   funFact:"From 'expression' + '-isme'. The movement was a reaction against the realism of Impressionism."},

  {type:"teach", trg:"le cinématographe", src:"the cinematograph", pos:"noun", gender:"m",
   note:"The original motion picture device invented by the Lumière brothers.\nRoot of 'cinéma'.",
   example:"A: Le cinématographe a été inventé par les frères Lumière.\nB: En 1895, à Lyon.\nA: C'est le début du septième art.\nB: La France est le berceau du cinéma.",
   exampleSrc:"A: The cinematograph was invented by the Lumière brothers.\nB: In 1895, in Lyon.\nA: It's the beginning of the seventh art.\nB: France is the birthplace of cinema.",
   funFact:"From Greek 'kinema' (movement) + 'graphein' (to write). France calls cinema 'le septième art'."},

  {type:"teach", trg:"l'humoriste", src:"the comedian / humorist", pos:"noun", gender:"m",
   note:"A person who makes others laugh professionally.\nSame form for masculine and feminine.",
   example:"A: Cet humoriste est très populaire en France.\nB: Oui, ses spectacles sont toujours complets.\nA: Son humour est subtil.\nB: Il fait réfléchir tout en faisant rire.",
   exampleSrc:"A: This comedian is very popular in France.\nB: Yes, his shows are always sold out.\nA: His humor is subtle.\nB: He makes people think while making them laugh.",
   funFact:"From 'humour' + '-iste'. French stand-up comedy ('one-man-show') has exploded in popularity."},

  {type:"teach", trg:"la griffe", src:"the signature style / claw", pos:"noun", gender:"f",
   note:"A designer's mark or distinctive style.\nLiterally: a claw or scratch mark.",
   example:"A: Ce sac porte la griffe d'un grand créateur.\nB: La griffe suffit à justifier le prix?\nA: Pour certains, oui.\nB: La marque est devenue un symbole de statut.",
   exampleSrc:"A: This bag bears the signature of a great designer.\nB: Does the label alone justify the price?\nA: For some people, yes.\nB: The brand has become a status symbol.",
   funFact:"Literally means 'claw'. Figuratively: a distinctive mark, like an artist's or designer's unique style."},

  {type:"teach", trg:"flatteur", src:"flattering", pos:"adj", gender:null,
   note:"Making someone look or feel better than reality.\nFeminine: flatteuse.",
   example:"A: Ce portrait est très flatteur.\nB: Le peintre a embelli la réalité?\nA: Un peu, oui. Le modèle semble plus jeune.\nB: C'est une tradition en peinture.",
   exampleSrc:"A: This portrait is very flattering.\nB: Did the painter embellish reality?\nA: A little, yes. The model looks younger.\nB: It's a tradition in painting.",
   funFact:"From 'flatter' (to flatter). Originally from Frankish 'flat' (flat/smooth), meaning to stroke smoothly."},

  {type:"teach", trg:"la frise", src:"the frieze", pos:"noun", gender:"f",
   note:"A decorative band along a wall or building.\nArchitectural and art history term.",
   example:"A: La frise du Parthénon est célèbre.\nB: Elle est maintenant au British Museum.\nA: La Grèce demande son retour.\nB: C'est un débat qui dure depuis des décennies.",
   exampleSrc:"A: The Parthenon frieze is famous.\nB: It is now in the British Museum.\nA: Greece demands its return.\nB: It's a debate that has lasted for decades.",
   funFact:"From Italian 'fregio'. The Parthenon frieze is one of the most debated artworks in cultural repatriation."},

  {type:"teach", trg:"l'intermède", src:"the interlude", pos:"noun", gender:"m",
   note:"A pause or interval between parts of a performance.\nAlso used figuratively for any break.",
   example:"A: L'intermède musical était magnifique.\nB: Oui, il a adouci l'atmosphère.\nA: Le violoniste jouait avec passion.\nB: C'était le moment fort de la soirée.",
   exampleSrc:"A: The musical interlude was magnificent.\nB: Yes, it softened the atmosphere.\nA: The violinist played with passion.\nB: It was the highlight of the evening.",
   funFact:"From Latin 'intermedium' (what is between). In theater, the intermède was a short comedic piece."},

  {type:"teach", trg:"intrigant", src:"scheming / intriguing", pos:"adj", gender:null,
   note:"Has two meanings: scheming (negative) or intriguing (curious).\nFeminine: intrigante.",
   example:"A: Ce personnage est vraiment intrigant.\nB: On ne sait jamais ses véritables intentions.\nA: C'est ce qui rend le roman captivant.\nB: L'ambiguïté ajoute de la profondeur.",
   exampleSrc:"A: This character is really intriguing.\nB: You never know his true intentions.\nA: That's what makes the novel captivating.\nB: Ambiguity adds depth.",
   funFact:"From Italian 'intrigante'. Can mean 'scheming' (person) or 'intriguing' (thing). Context is key."},

  {type:"teach", trg:"le galeriste", src:"the gallery owner", pos:"noun", gender:"m",
   note:"A person who owns or runs an art gallery.\nSame form for masculine and feminine.",
   example:"A: Le galeriste expose de jeunes artistes.\nB: C'est courageux, c'est un risque commercial.\nA: Mais cela renouvelle la scène artistique.\nB: Les collectionneurs apprécient la nouveauté.",
   exampleSrc:"A: The gallery owner exhibits young artists.\nB: That's courageous, it's a commercial risk.\nA: But it renews the art scene.\nB: Collectors appreciate novelty.",
   funFact:"From 'galerie' + '-iste'. Paris alone has over 400 art galleries, the densest concentration in Europe."},

  {type:"mc", q:"Qui a inventé le cinématographe?",
   opts:["Les frères Lumière","Les frères Grimm","Auguste Rodin","Claude Monet"],
   ans:"Les frères Lumière",
   hint:"Two brothers from Lyon who created the first motion picture device in 1895"},

  {type:"fb", s:"L'{1} est un mouvement artistique qui privilégie l'émotion sur la réalité.",
   a:["expressionnisme"], opts:["expressionnisme","intermède","incognito","entrepreneuriat"],
   hint:"An early 20th century art movement focused on emotional experience",
   sSrc:"{1} is an artistic movement that prioritizes emotion over reality."},

  {type:"teach", trg:"l'incrustation", src:"the inlay / overlay", pos:"noun", gender:"f",
   note:"A decorative technique of embedding materials.\nIn TV: a picture-in-picture effect.",
   example:"A: L'incrustation de nacre est magnifique.\nB: C'est un travail d'artisan très minutieux.\nA: Combien de temps cela prend?\nB: Des semaines pour une seule pièce.",
   exampleSrc:"A: The mother-of-pearl inlay is magnificent.\nB: It's very meticulous craftwork.\nA: How long does it take?\nB: Weeks for a single piece.",
   funFact:"From 'incruster' (to encrust). In TV production, 'incrustation' is the green screen overlay technique."},

  {type:"teach", trg:"indicible", src:"indescribable / unspeakable", pos:"adj", gender:null,
   note:"Cannot be expressed in words. Used for intense emotions.\nSame form for both genders.",
   example:"A: La beauté de ce paysage est indicible.\nB: Les photos ne rendent pas justice.\nA: Il faut le voir en personne.\nB: C'est une expérience inoubliable.",
   exampleSrc:"A: The beauty of this landscape is indescribable.\nB: Photos don't do it justice.\nA: You have to see it in person.\nB: It's an unforgettable experience.",
   funFact:"From Latin 'indicibilis': 'in-' (not) + 'dicere' (to say). A literary and poetic word."},

  {type:"teach", trg:"inexplicable", src:"inexplicable", pos:"adj", gender:null,
   note:"Cannot be explained. Used for mysterious events or feelings.\nSame form for both genders.",
   example:"A: Sa disparition reste inexplicable.\nB: La police n'a trouvé aucun indice.\nA: C'est troublant.\nB: Certains mystères ne sont jamais résolus.",
   exampleSrc:"A: His disappearance remains inexplicable.\nB: The police found no clues.\nA: It's disturbing.\nB: Some mysteries are never solved.",
   funFact:"From Latin 'inexplicabilis'. The double negative prefix 'in-' + 'ex-' creates a strong sense of impossibility."},

  {type:"mc", q:"Que signifie 'la griffe' dans le monde de la mode?",
   opts:["Une couleur spéciale","Le style distinctif d'un créateur","Un type de tissu","Un outil de couture"],
   ans:"Le style distinctif d'un créateur",
   hint:"A designer's unique mark or label that identifies their work"},

  {type:"fb", s:"L'{1} musical entre les deux actes a adouci l'atmosphère.",
   a:["intermède"], opts:["intermède","expressionnisme","incrustation","galeriste"],
   hint:"A pause or interval with music between parts of a performance",
   sSrc:"The musical {1} between the two acts softened the atmosphere."},

  {type:"match", pairs:[
    {trg:"l'humoriste", src:"comedian"},
    {trg:"la frise", src:"frieze"},
    {trg:"indicible", src:"indescribable"},
    {trg:"intrigant", src:"intriguing"},
    {trg:"le galeriste", src:"gallery owner"}
  ]},

  {type:"mc", q:"Quel adjectif signifie 'impossible à expliquer'?",
   opts:["Intrigant","Flatteur","Inexplicable","Indicible"],
   ans:"Inexplicable",
   hint:"Something that defies all attempts at explanation or understanding"},

  {type:"fb", s:"Ce portrait est très {1}, le modèle semble plus jeune que la réalité.",
   a:["flatteur"], opts:["flatteur","intrigant","indicible","inexplicable"],
   hint:"Making someone appear better or more attractive than they really are",
   sSrc:"This portrait is very {1}, the model appears younger than in reality."},

  {type:"drag_fill", s:"Le {1} expose de jeunes artistes dont la beauté des oeuvres est {2}.",
   blanks:{"1":"galeriste","2":"indicible"},
   pool:["galeriste","indicible","flatteur","intrigant"],
   hint:"The gallery owner shows work of indescribable beauty"},

  {type:"mc", q:"L'incrustation de nacre est:",
   opts:["Un style de peinture","Un genre musical","Un type d'architecture","Un travail d'artisan minutieux"],
   ans:"Un travail d'artisan minutieux",
   hint:"Embedding decorative materials into surfaces requires careful, detailed craftsmanship"}
]};
export default LESSON_8;
