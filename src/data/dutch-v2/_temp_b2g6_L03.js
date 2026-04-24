// L03: Imitation, Illustration, and Creativity
const LESSON_3 = {
  id:"nlv2_b2g6_l3", title:"Nabootsing en Creativiteit", icon:"\uD83C\uDFA8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Imitation, Illustration, and Creativity",
     desc:"Learn vocabulary about creative processes, from imitation to improvisation. The Dutch have a rich tradition in art, design, and creative innovation.",
     goals:["Learn 10 words about creativity and artistic expression","Discuss imitation and originality","Use verbs for creative processes"]},

    {type:"teach", trg:"imiteren", src:"to imitate", pos:"verb", gender:null,
     note:"From Latin 'imitari' (to copy).\nUsed for copying styles, accents, or behavior.",
     example:"A: Kun jij accenten imiteren?\nB: Ja, ik kan een Vlaams accent nadoen.\nA: Laat eens horen!\nB: Dat is echt heel grappig.",
     exampleSrc:"A: Can you imitate accents?\nB: Yes, I can do a Flemish accent.\nA: Let me hear it!\nB: That is really very funny.",
     funFact:"The Dutch word 'nadoen' is the everyday synonym. 'Imiteren' sounds more formal and is used in artistic or academic contexts."},

    {type:"teach", trg:"de imitatie", src:"the imitation", pos:"noun", gender:"c",
     note:"The noun form of 'imiteren'.\nCan mean a copy, a reproduction, or a performance.",
     example:"A: Is dit een echte Vermeer of een imitatie?\nB: Het is een kopie, maar heel goed gemaakt.\nA: Je ziet bijna geen verschil.\nB: Daarom is het zo gevaarlijk.",
     exampleSrc:"A: Is this a real Vermeer or an imitation?\nB: It is a copy, but very well made.\nA: You can hardly see the difference.\nB: That is why it is so dangerous.",
     funFact:"The most famous Dutch art forger, Han van Meegeren, sold fake Vermeers to the Nazis. He was only caught after World War II."},

    {type:"teach", trg:"illustreren", src:"to illustrate", pos:"verb", gender:null,
     note:"From Latin 'illustrare' (to light up).\nMeans both to draw and to demonstrate a point.",
     example:"A: Kun je dit verhaal illustreren?\nB: Met tekeningen of met voorbeelden?\nA: Allebei zou geweldig zijn.\nB: Ik begin met een paar schetsen.",
     exampleSrc:"A: Can you illustrate this story?\nB: With drawings or with examples?\nA: Both would be great.\nB: I will start with a few sketches.",
     funFact:"Dick Bruna, creator of Miffy (Nijntje), is the Netherlands' most famous illustrator. His simple style influenced design worldwide."},

    {type:"teach", trg:"de improvisatie", src:"the improvisation", pos:"noun", gender:"c",
     note:"From Latin 'improvisus' (unforeseen).\nUsed in music, theater, and daily life.",
     example:"A: De jazzband speelde een lange improvisatie.\nB: Dat was het mooiste deel van het concert.\nA: Elke avond is anders.\nB: Dat maakt jazz zo bijzonder.",
     exampleSrc:"A: The jazz band played a long improvisation.\nB: That was the most beautiful part of the concert.\nA: Every evening is different.\nB: That makes jazz so special.",
     funFact:"The North Sea Jazz Festival in Rotterdam is one of the world's largest jazz festivals, attracting 70,000 visitors annually."},

    {type:"teach", trg:"improviseren", src:"to improvise", pos:"verb", gender:null,
     note:"Verb form. Used for making do with what you have.\nVery Dutch: 'gewoon improviseren' (just improvise).",
     example:"A: We hebben geen recept. Moeten we improviseren?\nB: Natuurlijk! Kijk wat er in de koelkast staat.\nA: Er is kaas, ei en brood.\nB: Dan maken we er iets lekkers van.",
     exampleSrc:"A: We do not have a recipe. Should we improvise?\nB: Of course! Look what is in the fridge.\nA: There is cheese, egg, and bread.\nB: Then we will make something tasty from it.",
     funFact:"The Dutch are known for practical improvisation. The expression 'doe maar gewoon' (just act normal) extends to creative problem-solving."},

    {type:"mc",
     q:"Wat betekent 'illustreren'?",
     opts:["Verduidelijken met tekeningen of voorbeelden","Iets verlichten met lampen","Een boek vertalen","Een foto bewerken"],
     ans:"Verduidelijken met tekeningen of voorbeelden",
     hint:"From Latin 'illustrare' meaning to light up or make clear. Think of both visual and verbal clarification."},

    {type:"teach", trg:"de hype", src:"the hype, the craze", pos:"noun", gender:"c",
     note:"English loanword. Widely used in Dutch.\nPronounced almost the same as in English.",
     example:"A: Die nieuwe app is echt een hype.\nB: Iedereen heeft het erover.\nA: Maar hoe lang duurt het?\nB: De meeste hypes verdwijnen snel weer.",
     exampleSrc:"A: That new app is really a hype.\nB: Everyone is talking about it.\nA: But how long will it last?\nB: Most hypes disappear quickly again.",
     funFact:"The Dutch love adopting English words. 'Hype' is so common that the adjective 'hyped' is also used in Dutch youth slang."},

    {type:"teach", trg:"hypocriet", src:"hypocritical", pos:"adj", gender:null,
     note:"From Greek 'hypokrites' (actor, pretender).\nAlso used as a noun: 'een hypocriet'.",
     example:"A: Ik vind het hypocriet dat hij dat zegt.\nB: Waarom?\nA: Hij doet zelf precies hetzelfde.\nB: Daar heb je een punt.",
     exampleSrc:"A: I think it is hypocritical that he says that.\nB: Why?\nA: He does exactly the same thing himself.\nB: You have a point there.",
     funFact:"The Dutch value directness and dislike hypocrisy intensely. Calling someone 'hypocriet' is one of the strongest social criticisms."},

    {type:"teach", trg:"de hypocrisie", src:"the hypocrisy", pos:"noun", gender:"c",
     note:"The noun form of 'hypocriet'.\nA more formal, literary word.",
     example:"A: De hypocrisie in de politiek is frustrerend.\nB: Beloven en niet nakomen.\nA: Dat ondermijnt het vertrouwen.\nB: Kiezers worden er moe van.",
     exampleSrc:"A: The hypocrisy in politics is frustrating.\nB: Promising and not delivering.\nA: That undermines trust.\nB: Voters are getting tired of it.",
     funFact:"The Dutch political tradition of 'polderen' (consensus building) is sometimes criticized as institutionalized hypocrisy by its detractors."},

    {type:"fb",
     s:"De muzikant moest {1} omdat hij de bladmuziek was vergeten.",
     a:["improviseren"],
     opts:["improviseren","illustreren","imiteren","importeren"],
     hint:"To create something on the spot because you do not have the original material.",
     sSrc:"The musician had to {1} because he had forgotten the sheet music."},

    {type:"teach", trg:"idealistisch", src:"idealistic", pos:"adj", gender:null,
     note:"From 'ideaal' (ideal) + '-istisch' suffix.\nSomeone who believes in high principles.",
     example:"A: Ze is heel idealistisch over de toekomst.\nB: Is dat slecht?\nA: Nee, maar soms is het niet realistisch.\nB: Een beetje idealisme is goed.",
     exampleSrc:"A: She is very idealistic about the future.\nB: Is that bad?\nA: No, but sometimes it is not realistic.\nB: A little idealism is good.",
     funFact:"Dutch idealism has produced many humanitarian organizations. The Netherlands ranks consistently in the top 5 for foreign aid per capita."},

    {type:"teach", trg:"het idool", src:"the idol", pos:"noun", gender:"n",
     note:"From Greek 'eidolon' (image).\nHet-word. Used for role models and celebrities.",
     example:"A: Wie is jouw idool?\nB: Johan Cruijff, de beste voetballer ooit.\nA: Hij was inderdaad legendarisch.\nB: Zijn speelstijl was uniek.",
     exampleSrc:"A: Who is your idol?\nB: Johan Cruijff, the best footballer ever.\nA: He was indeed legendary.\nB: His playing style was unique.",
     funFact:"Johan Cruijff is the undisputed Dutch sports idol. The Amsterdam Arena was renamed the Johan Cruijff ArenA in his honor."},

    {type:"mc",
     q:"Hoe noem je iemand die doet alsof hij iets is wat hij niet is?",
     opts:["Een improvisator","Een hypocriet","Een idealist","Een imitator"],
     ans:"Een hypocriet",
     hint:"From Greek 'hypokrites', originally meaning an actor or pretender on stage."},

    {type:"match", pairs:[
      {trg:"imiteren", src:"to imitate"},
      {trg:"illustreren", src:"to illustrate"},
      {trg:"improviseren", src:"to improvise"},
      {trg:"hypocrisie", src:"hypocrisy"}
    ]},

    {type:"fb",
     s:"Johan Cruijff is het grootste {1} van het Nederlandse voetbal.",
     a:["idool"],
     opts:["idool","ideaal","imitatie","improvisatie"],
     hint:"A person who is admired and looked up to, especially a famous figure. Het-word.",
     sSrc:"Johan Cruijff is the greatest {1} of Dutch football."},

    {type:"mc",
     q:"Wat is een 'hype'?",
     opts:["Een sportprestatie","Een technische fout","Een tijdelijke rage of trend","Een soort muziekinstrument"],
     ans:"Een tijdelijke rage of trend",
     hint:"This English loanword describes something that everyone is excited about, but usually does not last long."}
  ]
};
export default LESSON_3;
