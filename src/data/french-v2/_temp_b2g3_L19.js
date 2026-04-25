const LESSON_19 = {
  id:"frv2_b2g3_l19", title:"Apparence et caractère", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Apparence et caractère",
     desc:"Learn vocabulary for describing physical appearance, character traits, and personal qualities in nuanced French.",
     goals:["Learn 17 B2 appearance and character words","Describe people with nuance and precision","Use descriptive language beyond basic adjectives"]},

    {type:"teach", trg:"affublé", src:"dressed up ridiculously", pos:"adj", gender:null,
     note:"Adjective. Wearing something ridiculous or inappropriate. Feminine: affublee.",
     example:"A: Il était affublé d'un chapeau énorme.\nB: Tout le monde le regardait en riant.",
     exampleSrc:"A: He was decked out in an enormous hat.\nB: Everyone was looking at him and laughing.",
     funFact:"'Affubler' always implies looking ridiculous. You would never say 'affuble' about someone well-dressed. It carries inherent mockery."},

    {type:"teach", trg:"un binocle", src:"pince-nez, spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned spectacles without earpieces. Now humorous.",
     example:"A: Le professeur portait un binocle à la mode du dix-neuvième siècle.\nB: Ça lui donnait un air savant.",
     exampleSrc:"A: The professor wore pince-nez in the nineteenth-century style.\nB: It gave him a scholarly look.",
     funFact:"From Latin 'bini' (two) + 'oculus' (eye). Now used humorously for any glasses. 'Binoculaire' (binocular) shares this root."},

    {type:"teach", trg:"débile", src:"feeble, stupid", pos:"adj", gender:null,
     note:"Adjective. Weak or, in slang, very stupid. Can be offensive.",
     example:"A: L'argument est tellement débile que je ne sais pas quoi répondre.\nB: Ce n'est même pas la peine de discuter.",
     exampleSrc:"A: The argument is so idiotic that I don't know what to reply.\nB: It's not even worth discussing.",
     funFact:"Originally meant physically weak (from Latin 'debilis'). The slang meaning 'stupid' dominates today. Use with caution: it can be very rude."},

    {type:"teach", trg:"l'embellissement", src:"beautification", pos:"noun", gender:"m",
     note:"Masculine noun. The act of making something more beautiful or attractive.",
     example:"A: L'embellissement de la façade a coûté cher.\nB: Mais le résultat est magnifique.",
     exampleSrc:"A: The beautification of the facade was expensive.\nB: But the result is magnificent.",
     funFact:"Already introduced in lesson 6. French city planning uses 'embellissement' for urban renewal projects dating back to Napoleon III."},

    {type:"mc",
     q:"Quel adjectif décrit quelqu'un habillé de manière ridicule ?",
     opts:["affublé","débile","agrandi","certifié"],
     ans:"affublé",
     hint:"This adjective always implies looking ridiculous in one's clothing. It inherently carries mockery."},

    {type:"teach", trg:"la célébrissime", src:"extremely famous", pos:"noun", gender:"f",
     note:"Adjective. Superlative of 'celebre'. Extremely well-known.",
     example:"A: La célébrissime tour Eiffel attire des millions de visiteurs.\nB: C'est le monument le plus visité au monde.",
     exampleSrc:"A: The ultra-famous Eiffel Tower attracts millions of visitors.\nB: It's the most visited monument in the world.",
     funFact:"French creates superlative adjectives with '-issime': celebrissime, rarissime, richissime. Borrowed from Italian, these feel theatrical and emphatic."},

    {type:"teach", trg:"un charretier", src:"a cart driver", pos:"noun", gender:"m",
     note:"Masculine noun. A person who drives a horse-drawn cart. Feminine: charretiere.",
     example:"A: Il jure comme un charretier.\nB: Ce n'est pas très élégant.",
     exampleSrc:"A: He swears like a trooper.\nB: It's not very elegant.",
     funFact:"'Jurer comme un charretier' (swear like a carter) is a classic French idiom. Cart drivers were notorious for their colorful language."},

    {type:"teach", trg:"un complet", src:"a suit", pos:"noun", gender:"m",
     note:"Masculine noun. Already introduced in lesson 11. A matching set of jacket and trousers.",
     example:"A: Son complet bleu marine est très élégant.\nB: Il l'a fait faire sur mesure.",
     exampleSrc:"A: His navy blue suit is very elegant.\nB: He had it custom-made.",
     funFact:"'Sur mesure' (custom-made) is the gold standard in French fashion. Ready-to-wear is 'pret-a-porter', itself a French expression used worldwide."},

    {type:"teach", trg:"le chômer", src:"to be unemployed, to be idle", pos:"noun", gender:"m",
     note:"Verb. To be without work. 'Jour chome' is a public holiday (no-work day).",
     example:"A: Il chôme depuis six mois.\nB: Le marché du travail est difficile en ce moment.",
     exampleSrc:"A: He has been unemployed for six months.\nB: The job market is tough right now.",
     funFact:"A 'jour chome' is a paid public holiday. France has 11 official 'jours feries et chomes'. The word 'chomage' (unemployment) comes from this verb."},

    {type:"fb",
     s:"Il jure comme un {1}, ce n'est vraiment pas poli.",
     a:["charretier"],
     opts:["charretier","binocle","complet","consul"],
     hint:"This noun refers to a horse-cart driver, famous in French idiom for their colorful language.",
     sSrc:"He swears like a {1}, it's really not polite."},

    {type:"teach", trg:"le dévolu", src:"devoted, set on", pos:"noun", gender:"m",
     note:"Adjective. Used in 'jeter son devolu sur' meaning to set one's sights on.",
     example:"A: Elle a jeté son dévolu sur ce poste.\nB: Elle fera tout pour l'obtenir.",
     exampleSrc:"A: She has set her sights on this position.\nB: She will do everything to get it.",
     funFact:"Originally a Church law term for a bishop claiming a vacant position. Now purely figurative: choosing something and pursuing it with determination."},

    {type:"teach", trg:"un assisté", src:"a welfare recipient", pos:"noun", gender:"m",
     note:"Masculine noun. Someone receiving government assistance. Feminine: assistee. Often pejorative.",
     example:"A: Traiter les gens d'assistés est injuste.\nB: Beaucoup travaillent et ne gagnent pas assez.",
     exampleSrc:"A: Calling people welfare recipients is unfair.\nB: Many work and don't earn enough.",
     funFact:"'Assiste' is a loaded political term in France. The left considers it stigmatizing; the right uses it to critique social spending. Handle with care."},

    {type:"teach", trg:"un affairé", src:"busy, bustling", pos:"adj", gender:null,
     note:"Adjective. Actively occupied with tasks. Feminine: affairee.",
     example:"A: Les serveurs affairés courent d'une table à l'autre.\nB: C'est l'heure de pointe au restaurant.",
     exampleSrc:"A: The busy waiters run from one table to another.\nB: It's peak hour at the restaurant.",
     funFact:"From 'affaire' (business). Someone 'affaire' is bustling with purpose. 'S'affairer' means to busy oneself, rushing around purposefully."},

    {type:"mc",
     q:"Quelle expression signifie 'choisir quelque chose et le poursuivre avec détermination' ?",
     opts:["se contreficher","jeter son dévolu sur","jurer comme un charretier","faire semblant"],
     ans:"jeter son dévolu sur",
     hint:"This expression originally came from Church law about claiming a position. Now it means setting your sights on something."},

    {type:"teach", trg:"un débraillé", src:"a disheveled person", pos:"noun", gender:"m",
     note:"Noun form. Someone with an untidy appearance. Already seen as adjective in lesson 16.",
     example:"A: Ce débraillé est en fait un génie de l'informatique.\nB: Les apparences sont trompeuses.",
     exampleSrc:"A: This disheveled person is actually a computer genius.\nB: Appearances are deceiving.",
     funFact:"Silicon Valley's casual dress code has an equivalent in the French 'Station F' start-up campus, where 'debraille chic' is the unofficial uniform."},

    {type:"teach", trg:"un désillusion", src:"disillusionment", pos:"noun", gender:"f",
     note:"Feminine noun. The loss of illusions or idealistic beliefs.",
     example:"A: La désillusion des jeunes diplômés est grandissante.\nB: Ils ne trouvent pas de travail malgré leurs études.",
     exampleSrc:"A: The disillusionment of young graduates is growing.\nB: They can't find work despite their studies.",
     funFact:"French literature has a rich tradition of 'roman de la desillusion' where idealistic heroes confront harsh reality. Flaubert's 'Education sentimentale' is the masterpiece."},

    {type:"teach", trg:"la clope", src:"a cigarette (slang)", pos:"noun", gender:"f",
     note:"Feminine noun. Informal/slang for cigarette. Usually plural: les clopes.",
     example:"A: Tu as une clope ?\nB: Non, j'ai arrêté de fumer il y a six mois.",
     exampleSrc:"A: Do you have a cigarette?\nB: No, I quit smoking six months ago.",
     funFact:"'Clope' is one of the most common French slang words. Other slang terms for cigarettes: 'seche' (dry one), 'tige' (stick). All very informal."},

    {type:"match", pairs:[
      {trg:"affublé", src:"dressed ridiculously"},
      {trg:"célébrissime", src:"extremely famous"},
      {trg:"affairé", src:"bustling"},
      {trg:"désillusion", src:"disillusionment"},
      {trg:"clope", src:"cigarette (slang)"}
    ]},

    {type:"fb",
     s:"La {1} des électeurs face aux promesses non tenues explique l'abstention record.",
     a:["désillusion"],
     opts:["désillusion","désaffection","désapprobation","déscolarisation"],
     hint:"This feminine noun means the loss of idealistic beliefs or illusions. Think of hopes being crushed.",
     sSrc:"The {1} of voters facing broken promises explains the record abstention."}
  ]
};
export default LESSON_19;
