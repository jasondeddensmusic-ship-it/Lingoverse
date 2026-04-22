const LESSON_3 = {
  id:"frv2_b2g4_l3", title:"Medias et communication", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medias et communication",
     desc:"Master vocabulary related to media, journalism, and digital communication.",
     goals:["Learn 15 media and communication words","Discuss press freedom and digital culture","Analyze media with critical vocabulary"]},

    {type:"teach", trg:"la blogosphere", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and bloggers.",
     example:"A: La blogosphere francaise est tres active.\nB: Des millions de blogs sont publies chaque jour.",
     exampleSrc:"A: The French blogosphere is very active.\nB: Millions of blogs are published every day.",
     funFact:"France has one of Europe's most active blogging cultures, especially in food and fashion."},

    {type:"teach", trg:"une gazette", src:"a gazette, a newspaper", pos:"noun", gender:"f",
     note:"Feminine noun. An old term for newspaper. Now slightly humorous.",
     example:"A: As-tu lu la gazette locale ?\nB: Oui, il y a un article sur notre quartier.",
     exampleSrc:"A: Have you read the local gazette?\nB: Yes, there's an article about our neighborhood.",
     funFact:"From Italian 'gazzetta', a small Venetian coin that was the price of early newspapers."},

    {type:"teach", trg:"la formulation", src:"the wording, the formulation", pos:"noun", gender:"f",
     note:"Feminine noun. The way something is expressed in words.",
     example:"A: La formulation de cette loi est ambigue.\nB: Elle peut etre interpretee de plusieurs facons.",
     exampleSrc:"A: The wording of this law is ambiguous.\nB: It can be interpreted in several ways.",
     funFact:"French legal and diplomatic texts are famous for their precise formulation. Ambiguity is a flaw."},

    {type:"teach", trg:"un flatteur", src:"a flatterer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who gives insincere praise. Also adjective: flattering.",
     example:"A: Ne sois pas flatteur, dis-moi la verite.\nB: D'accord, ton discours etait trop long.",
     exampleSrc:"A: Don't be a flatterer, tell me the truth.\nB: Okay, your speech was too long.",
     funFact:"La Fontaine's fable 'Le Corbeau et le Renard' is the most famous warning against flatterers."},

    {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or forceful expression.",
     example:"A: Son exclamation a surpris tout le monde.\nB: Personne ne s'y attendait.",
     exampleSrc:"A: His exclamation surprised everyone.\nB: Nobody expected it.",
     funFact:"French exclamation marks follow a space: 'Bonjour !' not 'Bonjour!'. Unique to French typography."},

    {type:"mc",
     q:"Comment appelle-t-on l'ensemble des blogs sur Internet ?",
     opts:["la blogosphere","la mediasphere","la webosphere","la cybersphere"],
     ans:"la blogosphere",
     hint:"Built from 'blog' and the Greek 'sphere' meaning globe or realm."},

    {type:"teach", trg:"l'identification", src:"the identification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of recognizing or establishing identity.",
     example:"A: L'identification du suspect a ete rapide.\nB: Les cameras de surveillance ont aide.",
     exampleSrc:"A: The identification of the suspect was quick.\nB: Surveillance cameras helped.",
     funFact:"In psychology, 'identification' means unconsciously adopting someone's traits. Freud coined the concept."},

    {type:"teach", trg:"l'humoriste", src:"the comedian, the humorist", pos:"noun", gender:"m",
     note:"Can be masculine or feminine. A professional comedian.",
     example:"A: Cet humoriste est tres populaire.\nB: Son spectacle est complet tous les soirs.",
     exampleSrc:"A: This comedian is very popular.\nB: His show is sold out every night.",
     funFact:"France has a rich stand-up tradition. Coluche, an humoriste, nearly became president in 1981."},

    {type:"teach", trg:"humoristique", src:"humorous, comedic", pos:"adj", gender:null,
     note:"Adjective. Describing something meant to be funny.",
     example:"A: Ce dessin humoristique est tres drole.\nB: Le caricaturiste a du talent.",
     exampleSrc:"A: This humorous cartoon is very funny.\nB: The cartoonist has talent.",
     funFact:"'Dessin humoristique' is the French term for editorial cartoon, central to French press culture."},

    {type:"fb",
     s:"La {1} de cette question est trop vague.",
     a:["formulation"],
     opts:["formulation","exclamation","identification","blogosphere"],
     hint:"The way something is worded or phrased, especially in formal or legal texts.",
     sSrc:"The {1} of this question is too vague."},

    {type:"teach", trg:"une icone", src:"an icon", pos:"noun", gender:"f",
     note:"Feminine noun. A revered image or a widely recognized symbol.",
     example:"A: Edith Piaf est une icone de la chanson francaise.\nB: Sa voix est inoubliable.",
     exampleSrc:"A: Edith Piaf is an icon of French song.\nB: Her voice is unforgettable.",
     funFact:"From Greek 'eikon' meaning image. Originally a religious term for sacred paintings."},

    {type:"teach", trg:"un gag", src:"a gag, a comic bit", pos:"noun", gender:"m",
     note:"Masculine noun. A short comic scene or joke in performance.",
     example:"A: Ce gag m'a fait pleurer de rire.\nB: Le timing de l'acteur etait parfait.",
     exampleSrc:"A: That gag made me cry with laughter.\nB: The actor's timing was perfect.",
     funFact:"Borrowed from English in the early 1900s. French cinema, especially silent film, perfected the visual gag."},

    {type:"teach", trg:"une gaffe", src:"a blunder, a gaffe", pos:"noun", gender:"f",
     note:"Feminine noun. An embarrassing social mistake.",
     example:"A: J'ai fait une gaffe terrible hier.\nB: Qu'est-ce que tu as dit ?",
     exampleSrc:"A: I made a terrible blunder yesterday.\nB: What did you say?",
     funFact:"English borrowed 'gaffe' from French. 'Gaffer' means to blunder. A 'gaffe' is also a boat hook."},

    {type:"mc",
     q:"Quel mot designe une erreur sociale embarrassante ?",
     opts:["une griffe","une gaffe","un gag","une gazette"],
     ans:"une gaffe",
     hint:"This word was borrowed into English. It originally also referred to a type of boat hook."},

    {type:"teach", trg:"la filature", src:"the shadowing, the spinning mill", pos:"noun", gender:"f",
     note:"Feminine noun. Following someone secretly. Also a thread factory.",
     example:"A: La police a organise une filature du suspect.\nB: Ils l'ont suivi pendant trois jours.",
     exampleSrc:"A: The police organized a surveillance of the suspect.\nB: They followed him for three days.",
     funFact:"From 'filer' (to spin/follow). A detective 'file' someone. A factory 'file' thread. Same verb, two worlds."},

    {type:"fb",
     s:"Cet {1} a remporte le prix du meilleur spectacle comique.",
     a:["humoriste"],
     opts:["humoriste","icone","flatteur","gag"],
     hint:"A professional comedian who performs comedy shows on stage.",
     sSrc:"This {1} won the prize for best comedy show."},

    {type:"match", pairs:[
      {trg:"gazette", src:"newspaper"},
      {trg:"gaffe", src:"blunder"},
      {trg:"gag", src:"comic bit"},
      {trg:"icone", src:"icon"},
      {trg:"filature", src:"shadowing"}
    ]},

    {type:"mc",
     q:"Que signifie 'humoristique' ?",
     opts:["Qui est serieux","Qui est ennuyeux","Qui est drole, comique","Qui est triste"],
     ans:"Qui est drole, comique",
     hint:"Related to 'humour'. Describes something intentionally funny or comedic."}
  ]
};
export default LESSON_3;
