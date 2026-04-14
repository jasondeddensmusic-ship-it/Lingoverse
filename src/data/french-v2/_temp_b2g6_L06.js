const LESSON_6 = {
  id:"frv2_b2g6_l6", title:"Médias et culture numérique", icon:"\uD83D\uDCF1", xp:15, board:true,
  steps:[
    {type:"intro", title:"Médias et culture numérique",
     desc:"Master vocabulary for digital culture, media, and the evolving landscape of information.",
     goals:["Learn 20 words about digital media and culture","Discuss online phenomena in French","Navigate media criticism vocabulary"]},

    {type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and bloggers.",
     example:"A: La blogosphère s'est enflammée sur ce sujet.\nB: Tout le monde en parle en ligne.",
     exampleSrc:"A: The blogosphere exploded on this topic.\nB: Everyone is talking about it online.",
     funFact:"A French neologism combining 'blog' and 'atmosphère'. Peaked around 2008, now replaced by social media."},

    {type:"teach", trg:"une icône", src:"an icon", pos:"noun", gender:"f",
     note:"Feminine noun. A religious image, a cultural symbol, or a computer icon.",
     example:"A: Elle est devenue une icône de la mode.\nB: Son style est inimitable.",
     exampleSrc:"A: She became a fashion icon.\nB: Her style is inimitable.",
     funFact:"From Greek 'eikon' meaning image. The word traveled from Byzantine art to computer screens."},

    {type:"teach", trg:"le bonus", src:"the bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra reward or advantage. Plural invariable: des bonus.",
     example:"A: Les employés ont reçu un bonus de fin d'année.\nB: Quel montant ?",
     exampleSrc:"A: The employees received a year-end bonus.\nB: How much?",
     funFact:"Latin for 'good'. Used in French business, gaming (bonus levels), and insurance (bonus-malus system)."},

    {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or remark expressing surprise or emotion.",
     example:"A: Son exclamation de joie a surpris tout le monde.\nB: Elle ne s'y attendait vraiment pas.",
     exampleSrc:"A: Her exclamation of joy surprised everyone.\nB: She really didn't expect it.",
     funFact:"In French grammar, 'point d'exclamation' (!) follows different spacing rules than in English."},

    {type:"mc",
     q:"Que désigne 'la blogosphère' ?",
     opts:["L'ensemble des blogs sur Internet","Un type de réseau social","Une application de messagerie","Un moteur de recherche"],
     ans:"L'ensemble des blogs sur Internet",
     hint:"A compound of 'blog' and 'atmosphère', describing the collective world of online blogs."},

    {type:"teach", trg:"un humoriste", src:"a comedian, a humorist", pos:"noun", gender:"m",
     note:"Masculine noun. A person who performs comedy. Feminine: une humoriste.",
     example:"A: Cet humoriste est très populaire en France.\nB: Ses spectacles sont toujours complets.",
     exampleSrc:"A: This comedian is very popular in France.\nB: His shows are always sold out.",
     funFact:"French stand-up ('one-man-show') culture exploded in the 2000s. Jamel Debbouze pioneered the genre."},

    {type:"teach", trg:"le cinématographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original motion picture device and art form.",
     example:"A: Les frères Lumière ont inventé le cinématographe.\nB: C'était en 1895 à Lyon.",
     exampleSrc:"A: The Lumière brothers invented the cinematograph.\nB: It was in 1895 in Lyon.",
     funFact:"From Greek 'kinema' (movement) + 'graphein' (to write). 'Cinéma' is the shortened form used today."},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. An artistic movement emphasizing emotional expression.",
     example:"A: L'expressionnisme a marqué le cinéma allemand.\nB: Surtout dans les années 1920.",
     exampleSrc:"A: Expressionism shaped German cinema.\nB: Especially in the 1920s.",
     funFact:"French critics coined many art movement names. 'Impressionnisme' was initially an insult by a French critic."},

    {type:"fb",
     s:"Les frères Lumière ont inventé le {1} en 1895.",
     a:["cinématographe"],
     opts:["cinématographe","expressionnisme","bonus","humoriste"],
     hint:"The original device for projecting moving images, invented in Lyon.",
     sSrc:"The Lumière brothers invented the {1} in 1895."},

    {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire est une tactique courante.\nB: Cela nuit au débat démocratique.",
     exampleSrc:"A: The demonization of the opponent is a common tactic.\nB: It harms democratic debate.",
     funFact:"From 'diable' (devil). A key term in French political analysis, especially about populism."},

    {type:"teach", trg:"l'exaltation", src:"the exaltation, the elation", pos:"noun", gender:"f",
     note:"Feminine noun. Intense excitement or the glorification of something.",
     example:"A: L'exaltation de la foule était palpable.\nB: Le concert était électrique.",
     exampleSrc:"A: The exaltation of the crowd was palpable.\nB: The concert was electric.",
     funFact:"Can be positive (elation) or negative (dangerous fervor). 'Exalté' as an adjective means fanatically enthusiastic."},

    {type:"teach", trg:"la frise", src:"the frieze, the timeline", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative band on a building, or a visual timeline.",
     example:"A: La frise chronologique montre l'histoire de France.\nB: Du Moyen Âge à nos jours.",
     exampleSrc:"A: The timeline shows the history of France.\nB: From the Middle Ages to today.",
     funFact:"From Latin 'phrygium' meaning Phrygian (embroidered) work. Used in architecture and education."},

    {type:"mc",
     q:"Que signifie 'la diabolisation' ?",
     opts:["Présenter quelqu'un comme diabolique","Admirer excessivement quelqu'un","Ignorer complètement quelqu'un","Ridiculiser publiquement quelqu'un"],
     ans:"Présenter quelqu'un comme diabolique",
     hint:"From 'diable' (devil). A political tactic of portraying the opponent as evil."},

    {type:"teach", trg:"un antihéros", src:"an antihero", pos:"noun", gender:"m",
     note:"Masculine noun. A protagonist who lacks conventional heroic qualities.",
     example:"A: Le personnage principal est un antihéros.\nB: Oui, il est cynique mais attachant.",
     exampleSrc:"A: The main character is an antihero.\nB: Yes, he's cynical but endearing.",
     funFact:"French literature loves antiheroes. Meursault in Camus's 'L'Étranger' is perhaps the most famous."},

    {type:"teach", trg:"l'intermède", src:"the interlude", pos:"noun", gender:"m",
     note:"Masculine noun. A short performance or pause between acts.",
     example:"A: L'intermède musical était charmant.\nB: Cela a permis de souffler un peu.",
     exampleSrc:"A: The musical interlude was charming.\nB: It gave us a chance to catch our breath.",
     funFact:"From Italian 'intermedio'. Originally a short entertainment between acts of a play."},

    {type:"teach", trg:"le lyrisme", src:"the lyricism", pos:"noun", gender:"m",
     note:"Masculine noun. Emotional or poetic quality in art or writing.",
     example:"A: Le lyrisme de ce poème est magnifique.\nB: Chaque mot est une mélodie.",
     exampleSrc:"A: The lyricism of this poem is magnificent.\nB: Every word is a melody.",
     funFact:"From 'lyre', the instrument of ancient poets. Victor Hugo's poetry exemplifies French lyricism."},

    {type:"fb",
     s:"L'{1} de la foule après le but a été incroyable.",
     a:["exaltation"],
     opts:["exaltation","exclamation","expressionnisme","intermède"],
     hint:"Intense excitement or elation, especially from a collective experience.",
     sSrc:"The {1} of the crowd after the goal was incredible."},

    {type:"teach", trg:"loufoque", src:"crazy, wacky", pos:"adj", gender:null,
     note:"Adjective. Amusingly eccentric or absurd. Same form both genders.",
     example:"A: Cette idée est complètement loufoque.\nB: Mais elle pourrait marcher !",
     exampleSrc:"A: This idea is completely wacky.\nB: But it might work!",
     funFact:"French slang from 'verlan' (back-slang) of 'fou' rearranged. Carries a lighthearted, affectionate tone."},

    {type:"teach", trg:"macabre", src:"macabre, gruesome", pos:"adj", gender:null,
     note:"Adjective. Disturbing because of death or horror. Same form both genders.",
     example:"A: Ce film a une ambiance macabre.\nB: Je n'aime pas les films d'horreur.",
     exampleSrc:"A: This film has a macabre atmosphere.\nB: I don't like horror films.",
     funFact:"From the medieval 'danse macabre' (dance of death). The French word was borrowed into English unchanged."},

    {type:"match", pairs:[
      {trg:"icône", src:"icon"},
      {trg:"antihéros", src:"antihero"},
      {trg:"lyrisme", src:"lyricism"},
      {trg:"loufoque", src:"wacky"},
      {trg:"macabre", src:"macabre"}
    ]},

    {type:"mc",
     q:"Quel adjectif décrit quelque chose de drôlement excentrique ?",
     opts:["loufoque","macabre","lugubre","lancinant"],
     ans:"loufoque",
     hint:"French slang with an affectionate tone, meaning amusingly crazy or eccentric."},

    {type:"fb",
     s:"Le personnage principal de ce roman est un {1} attachant.",
     a:["antihéros"],
     opts:["antihéros","humoriste","cinématographe","intermède"],
     hint:"A protagonist who lacks traditional heroic qualities but remains compelling.",
     sSrc:"The main character of this novel is an endearing {1}."}
  ]
};
export default LESSON_6;
