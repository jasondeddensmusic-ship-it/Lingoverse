// L16: Sports and Physical Activity, 20 B1 gap words
const LESSON_16 = {
  id:"nlv2_b1gap_l16", title:"Sport en Beweging", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sports and Physical Activity",
     desc:"Learn Dutch vocabulary for sports, athletics, and physical activities. The Dutch are an active nation.",
     goals:["Master 20 sports and activity words","Talk about athletic events","Describe physical abilities"]},

    {type:"teach", trg:"de atleet", src:"the athlete", pos:"noun", gender:"c",
     note:"Common gender (de). A person who competes in sports.",
     example:"A: Ze is een getalenteerde atleet.\nB: Ze heeft al drie medailles gewonnen.",
     exampleSrc:"A: She is a talented athlete.\nB: She has already won three medals.",
     funFact:"From Greek 'athletes' (competitor). Dafne Schippers is one of the Netherlands' most famous 'atleten'."},

    {type:"teach", trg:"de atletiek", src:"athletics / track and field", pos:"noun", gender:"c",
     note:"Common gender (de). Running, jumping, and throwing sports.",
     example:"A: Ze doet aan atletiek.\nB: Welk onderdeel? Sprint of afstand?",
     exampleSrc:"A: She does athletics.\nB: Which event? Sprint or distance?",
     funFact:"The FBK Games in Hengelo are one of the Netherlands' top athletics events."},

    {type:"teach", trg:"de balsport", src:"ball sport", pos:"noun", gender:"c",
     note:"Common gender (de). Any sport played with a ball.",
     example:"A: Voetbal is de populairste balsport in Nederland.\nB: Ja, iedereen kijkt het.",
     exampleSrc:"A: Football is the most popular ball sport in the Netherlands.\nB: Yes, everyone watches it.",
     funFact:"The Netherlands excels at multiple balsports: football, hockey, volleyball, and handball."},

    {type:"teach", trg:"de acrobaat", src:"the acrobat", pos:"noun", gender:"c",
     note:"Common gender (de). A person who performs impressive physical feats.",
     example:"A: De acrobaten in het circus waren ongelooflijk.\nB: Hoe durven ze dat?",
     exampleSrc:"A: The acrobats in the circus were incredible.\nB: How do they dare to do that?",
     funFact:"From Greek 'akrobatos' (walking on tiptoe). Dutch circus traditions are centuries old."},

    {type:"mc",
     q:"Hardlopen, verspringen en kogelstoten. Dat zijn onderdelen van ___.",
     opts:["atletiek","balsport","acrobatiek","amusement"],
     ans:"atletiek",
     hint:"Which sport category covers running, jumping, and throwing events?"},

    {type:"teach", trg:"behendig", src:"agile / dexterous", pos:"adj", gender:null,
     note:"Adjective. Physically skillful and quick.",
     example:"A: De kat is heel behendig.\nB: Ja, ze springt overal naartoe.",
     exampleSrc:"A: The cat is very agile.\nB: Yes, she jumps everywhere.",
     funFact:"From 'be-' + 'hendig' (handy). Someone who is 'be-handed'. Related to English 'handy'."},

    {type:"teach", trg:"afstappen", src:"to dismount / to get off", pos:"verb", gender:null,
     note:"Separable verb. Ik stap af, jij stapt af.",
     example:"A: Je moet afstappen bij een rood licht.\nB: Dat is de regel voor fietsers.",
     exampleSrc:"A: You must dismount at a red light.\nB: That is the rule for cyclists.",
     funFact:"Af + stappen (to step). Essential cycling vocabulary. Dutch cyclists are supposed to walk at crossings."},

    {type:"teach", trg:"achterliggen", src:"to be behind / to trail", pos:"verb", gender:null,
     note:"Separable verb. Ik lig achter, jij ligt achter.",
     example:"A: Ajax ligt drie punten achter.\nB: Ze moeten de volgende wedstrijd winnen.",
     exampleSrc:"A: Ajax is three points behind.\nB: They need to win the next match.",
     funFact:"Achter + liggen (to lie). Sports commentary uses this constantly during league competitions."},

    {type:"teach", trg:"het avonturenbos", src:"the adventure forest", pos:"noun", gender:"n",
     note:"Neuter gender (het). An outdoor activity park in a forest.",
     example:"A: Laten we naar het avonturenbos gaan!\nB: Leuk! Met klimmen en tokkelen?",
     exampleSrc:"A: Let's go to the adventure forest!\nB: Fun! With climbing and zip-lining?",
     funFact:"Popular Dutch family activity. Klimpark, Fun Forest, and Go Ape are well-known chains."},

    {type:"teach", trg:"de bajonet", src:"the bayonet", pos:"noun", gender:"c",
     note:"Common gender (de). A blade attached to a rifle.",
     example:"A: In het museum lag een oude bajonet.\nB: Uit de Eerste Wereldoorlog?",
     exampleSrc:"A: In the museum there was an old bayonet.\nB: From World War I?",
     funFact:"Named after Bayonne, France. Dutch military history features in many museums."},

    {type:"fb",
     s:"De wielrenner moest {1} omdat zijn band lek was.",
     a:["afstappen"],
     opts:["afstappen","achterliggen","aanleggen","aansluiten"],
     hint:"Which separable verb means to get off a bicycle or horse?",
     sSrc:"The cyclist had to {1} because his tire was flat."},

    {type:"teach", trg:"de bariton", src:"the baritone", pos:"noun", gender:"c",
     note:"Common gender (de). A male voice between tenor and bass.",
     example:"A: Hij zingt als bariton in het koor.\nB: Heeft hij een mooie stem?",
     exampleSrc:"A: He sings as a baritone in the choir.\nB: Does he have a nice voice?",
     funFact:"From Italian 'baritono'. Dutch choral music tradition is very strong, with many amateur choirs."},

    {type:"teach", trg:"de baron", src:"the baron", pos:"noun", gender:"c",
     note:"Common gender (de). A title of nobility.",
     example:"A: De baron woont in een kasteel.\nB: Bestaat dat nog in Nederland?",
     exampleSrc:"A: The baron lives in a castle.\nB: Does that still exist in the Netherlands?",
     funFact:"The Netherlands still has nobility. Titles like baron and graaf (count) exist but carry no legal privileges."},

    {type:"teach", trg:"de barones", src:"the baroness", pos:"noun", gender:"c",
     note:"Common gender (de). Female form of baron.",
     example:"A: De barones opende de tentoonstelling.\nB: Was het een mooie ceremonie?",
     exampleSrc:"A: The baroness opened the exhibition.\nB: Was it a nice ceremony?",
     funFact:"The -es suffix creates feminine forms: baron > barones, prins > prinses, graaf > gravin."},

    {type:"teach", trg:"bakstenen", src:"brick (adjective)", pos:"adj", gender:null,
     note:"Adjective. Made of bricks.",
     example:"A: Het is een bakstenen muur.\nB: Typisch Nederlandse bouw.",
     exampleSrc:"A: It is a brick wall.\nB: Typical Dutch construction.",
     funFact:"The Netherlands is famous for its brickwork. Dutch bricks are exported worldwide."},

    {type:"mc",
     q:"Een turnster die snel en soepel over de balk beweegt is heel ___.",
     opts:["beduidend","behendig","bars","bakstenen"],
     ans:"behendig",
     hint:"Which adjective describes someone who is physically agile and nimble?"},

    {type:"teach", trg:"de barbiepop", src:"the Barbie doll", pos:"noun", gender:"c",
     note:"Common gender (de). The famous fashion doll.",
     example:"A: Mijn dochter wil een barbiepop voor haar verjaardag.\nB: Welke kleur?",
     exampleSrc:"A: My daughter wants a Barbie doll for her birthday.\nB: Which color?",
     funFact:"'Pop' means doll in Dutch. Barbie was introduced in 1959 and is still a bestseller in Dutch toy stores."},

    {type:"teach", trg:"de barbaar", src:"the barbarian", pos:"noun", gender:"c",
     note:"Common gender (de). An uncivilized person.",
     example:"A: De Romeinen noemden de Germanen barbaren.\nB: Dat was hun perspectief.",
     exampleSrc:"A: The Romans called the Germanic people barbarians.\nB: That was their perspective.",
     funFact:"From Greek 'barbaros' (foreign speaker). The Romans considered everyone outside the empire a 'barbaar'."},

    {type:"teach", trg:"barbaars", src:"barbaric / savage", pos:"adj", gender:null,
     note:"Adjective. Extremely cruel or uncivilized.",
     example:"A: Die behandeling van dieren is barbaars.\nB: Ik ben het helemaal met je eens.",
     exampleSrc:"A: That treatment of animals is barbaric.\nB: I completely agree with you.",
     funFact:"Related to 'barbaar'. Used for inhumane practices. Dutch animal welfare laws are among the strictest."},

    {type:"match", pairs:[
      {trg:"atleet", src:"athlete"},
      {trg:"atletiek", src:"track and field"},
      {trg:"behendig", src:"agile"},
      {trg:"afstappen", src:"to dismount"},
      {trg:"achterliggen", src:"to trail behind"}
    ]},

    {type:"fb",
     s:"Ajax {1} twee doelpunten achter. Ze moeten harder spelen.",
     a:["ligt"],
     opts:["ligt","stapt","speelt","sluit"],
     hint:"Which separable verb stem (with particle 'achter') means a team is trailing in a competition?",
     sSrc:"Ajax is two goals behind. They need to play harder."},

    {type:"mc",
     q:"De Romeinen noemden de volken buiten hun rijk ___.",
     opts:["baritonen","acrobaten","barbaren","baronnen"],
     ans:"barbaren",
     hint:"Which word did the Romans use for people they considered uncivilized?"}
  ]
};
export default LESSON_16;
