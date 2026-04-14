const LESSON_12 = {
  id:"frv2_b2g6_l12", title:"Comportement et caractère", icon:"\uD83C\uDFAD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Comportement et caractère",
     desc:"Master vocabulary for describing personality traits, behaviors, and moral qualities.",
     goals:["Learn 20 words about character and behavior","Describe personalities with nuance","Discuss moral and ethical qualities"]},

    {type:"teach", trg:"licencieux", src:"licentious, lewd", pos:"adj", gender:null,
     note:"Adjective. Sexually immoral or indecent. Feminine: licencieuse.",
     example:"A: Ce roman du XVIIIe siècle est très licencieux.\nB: Les mœurs de l'époque étaient différentes.",
     exampleSrc:"A: This 18th-century novel is very licentious.\nB: The morals of the era were different.",
     funFact:"The Marquis de Sade wrote the most licencieux texts in French. 'Licence' originally meant permission."},

    {type:"teach", trg:"licencié", src:"dismissed, laid off (or degree holder)", pos:"adj", gender:null,
     note:"Adjective. Fired from a job, or someone with a 'licence' (bachelor's degree).",
     example:"A: Il a été licencié après la restructuration.\nB: C'est injuste, il travaillait bien.",
     exampleSrc:"A: He was laid off after the restructuring.\nB: It's unfair, he worked well.",
     funFact:"Tricky double meaning: 'licencié' can mean fired OR a degree holder. Context determines which."},

    {type:"teach", trg:"mafieux", src:"mafia-related, corrupt", pos:"adj", gender:null,
     note:"Adjective. Related to organized crime. Feminine: mafieuse.",
     example:"A: Les pratiques mafieuses gangrènent cette région.\nB: La police enquête depuis des mois.",
     exampleSrc:"A: Mafia-like practices are plaguing this region.\nB: The police have been investigating for months.",
     funFact:"Italian borrowing. France has its own organized crime, especially in Marseille and Corsica."},

    {type:"teach", trg:"attardé", src:"delayed, backward", pos:"adj", gender:null,
     note:"Adjective. Late or developmentally behind. Can be offensive when applied to people.",
     example:"A: Le projet est attardé par des problèmes techniques.\nB: On a deux mois de retard.",
     exampleSrc:"A: The project is delayed by technical problems.\nB: We're two months behind.",
     funFact:"Use carefully when describing people. 'S'attarder' (to linger) is the neutral verb form."},

    {type:"mc",
     q:"Que peut signifier 'licencié' selon le contexte ?",
     opts:["Renvoyé ou diplômé","Riche ou pauvre","Malade ou guéri","Jeune ou vieux"],
     ans:"Renvoyé ou diplômé",
     hint:"This word has two very different meanings. One is about losing a job, the other about university."},

    {type:"teach", trg:"l'amateurisme", src:"amateurism, lack of professionalism", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of skill or seriousness in doing something.",
     example:"A: L'amateurisme de cette équipe est flagrant.\nB: Ils ne sont pas préparés.",
     exampleSrc:"A: The amateurism of this team is blatant.\nB: They're not prepared.",
     funFact:"Always pejorative in French. Unlike English where 'amateur' can be positive, French 'amateurisme' means incompetence."},

    {type:"teach", trg:"la cleptomanie", src:"kleptomania", pos:"noun", gender:"f",
     note:"Feminine noun. A compulsive urge to steal items of little value.",
     example:"A: La cleptomanie est un trouble psychologique.\nB: Ce n'est pas un simple vol.",
     exampleSrc:"A: Kleptomania is a psychological disorder.\nB: It's not simple theft.",
     funFact:"From Greek 'kleptein' (to steal) + 'mania'. Recognized as a mental disorder in French psychiatry."},

    {type:"teach", trg:"un cleptomane", src:"a kleptomaniac", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A person who compulsively steals.",
     example:"A: Le juge a reconnu qu'il était cleptomane.\nB: Il suivra un traitement.",
     exampleSrc:"A: The judge recognized that he was a kleptomaniac.\nB: He will undergo treatment.",
     funFact:"French law distinguishes between theft ('vol') and theft caused by kleptomania, affecting sentencing."},

    {type:"fb",
     s:"L'{1} de l'organisation a conduit à l'échec du festival.",
     a:["amateurisme"],
     opts:["amateurisme","cleptomanie","licencieux","mafieux"],
     hint:"A lack of professionalism or serious competence. Always negative in French.",
     sSrc:"The {1} of the organization led to the festival's failure."},

    {type:"teach", trg:"la guise", src:"the way, the fashion (in 'à sa guise')", pos:"noun", gender:"f",
     note:"Feminine noun. Manner or way. Almost always in 'à sa guise' (as one pleases).",
     example:"A: Il fait tout à sa guise.\nB: Il n'écoute personne.",
     exampleSrc:"A: He does everything as he pleases.\nB: He doesn't listen to anyone.",
     funFact:"'Chacun à sa guise' means to each their own. An old French word preserved in this set expression."},

    {type:"teach", trg:"l'exhibitionnisme", src:"exhibitionism", pos:"noun", gender:"m",
     note:"Masculine noun. Compulsive exposure of oneself, or showing off behavior.",
     example:"A: L'exhibitionnisme est un délit en France.\nB: C'est passible d'une amende ou de prison.",
     exampleSrc:"A: Exhibitionism is an offense in France.\nB: It's punishable by a fine or prison.",
     funFact:"Also used figuratively for attention-seeking behavior on social media."},

    {type:"teach", trg:"l'inanité", src:"the inanity, the futility", pos:"noun", gender:"f",
     note:"Feminine noun. Complete emptiness or pointlessness of something.",
     example:"A: L'inanité de ce débat est évidente.\nB: On tourne en rond depuis deux heures.",
     exampleSrc:"A: The futility of this debate is obvious.\nB: We've been going in circles for two hours.",
     funFact:"From Latin 'inanis' meaning empty. A literary word used to dismiss something as utterly pointless."},

    {type:"mc",
     q:"Que signifie 'à sa guise' ?",
     opts:["Comme il veut","Avec prudence","Sans réfléchir","Sous la contrainte"],
     ans:"Comme il veut",
     hint:"An expression using 'guise' (way/fashion). It means doing things your own way."},

    {type:"teach", trg:"l'intériorisation", src:"the internalization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of absorbing beliefs or values into one's psyche.",
     example:"A: L'intériorisation des normes sociales commence dès l'enfance.\nB: C'est un processus inconscient.",
     exampleSrc:"A: The internalization of social norms begins in childhood.\nB: It's an unconscious process.",
     funFact:"A key concept in French sociology, especially in Bourdieu's work on 'habitus' and social reproduction."},

    {type:"teach", trg:"la lèse-majesté", src:"lese-majesty (offense against the sovereign)", pos:"noun", gender:"f",
     note:"Feminine compound noun. An offense against a ruler's dignity.",
     example:"A: Critiquer le roi était un crime de lèse-majesté.\nB: Punissable de mort sous l'Ancien Régime.",
     exampleSrc:"A: Criticizing the king was a crime of lese-majesty.\nB: Punishable by death under the Ancien Régime.",
     funFact:"Still exists as a legal concept in some monarchies. In French, used figuratively for offending the powerful."},

    {type:"teach", trg:"le kitsch", src:"kitsch", pos:"noun", gender:"m",
     note:"Masculine noun. Tasteless, gaudy art or decoration. Also an adjective.",
     example:"A: Cette décoration est vraiment kitsch.\nB: Les flamants roses en plastique, sérieusement ?",
     exampleSrc:"A: This decoration is really kitsch.\nB: Plastic flamingos, seriously?",
     funFact:"German borrowing via English. 'Kitsch' in French can be ironic or even affectionate."},

    {type:"fb",
     s:"L'{1} de ces arguments ne trompe personne.",
     a:["inanité"],
     opts:["inanité","intériorisation","exhibitionnisme","lèse-majesté"],
     hint:"Complete emptiness or pointlessness. A literary word for something utterly futile.",
     sSrc:"The {1} of these arguments fools nobody."},

    {type:"teach", trg:"la jérémiade", src:"the jeremiad, the complaint", pos:"noun", gender:"f",
     note:"Feminine noun. A long, mournful complaint. Often plural: des jérémiades.",
     example:"A: Arrête tes jérémiades !\nB: Mais tout va mal en ce moment.",
     exampleSrc:"A: Stop your whining!\nB: But everything is going wrong right now.",
     funFact:"Named after the prophet Jeremiah, known for his sorrowful laments. Always slightly mocking in tone."},

    {type:"teach", trg:"le grimage", src:"the theatrical makeup", pos:"noun", gender:"m",
     note:"Masculine noun. The art of applying stage makeup for theater or film.",
     example:"A: Le grimage de cet acteur est impressionnant.\nB: On ne le reconnaît plus du tout.",
     exampleSrc:"A: The makeup on this actor is impressive.\nB: You can't recognize him at all.",
     funFact:"From 'grimer' (to make up). Different from everyday 'maquillage': grimage transforms identity."},

    {type:"match", pairs:[
      {trg:"amateurisme", src:"amateurism"},
      {trg:"inanité", src:"futility"},
      {trg:"jérémiade", src:"complaint, whining"},
      {trg:"kitsch", src:"kitsch, gaudy"},
      {trg:"grimage", src:"theatrical makeup"}
    ]},

    {type:"mc",
     q:"D'où vient le mot 'jérémiade' ?",
     opts:["Du prophète Jérémie","Du prénom Jérémy","D'un mot latin pour pleurer","D'un philosophe grec"],
     ans:"Du prophète Jérémie",
     hint:"A biblical figure known for his sorrowful laments gave this word its meaning."},

    {type:"fb",
     s:"Cette décoration est complètement {1}, mais elle me fait sourire.",
     a:["kitsch"],
     opts:["kitsch","mafieux","licencieux","attardé"],
     hint:"Tasteless or gaudy in an amusing way. A German borrowing for bad taste.",
     sSrc:"This decoration is completely {1}, but it makes me smile."}
  ]
};
export default LESSON_12;
