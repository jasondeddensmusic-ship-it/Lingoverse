// L14: Hobbies and Free Time, 20 A1 gap words
const LESSON_14 = {
  id:"nlv2_a1gap_l14", title:"Hobby's en Vrije Tijd", icon:"\u{1F3B5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Hobbies and Free Time",
     desc:"Learn Dutch words for hobbies, entertainment, and free time activities. Dance, music, computers, and more.",
     goals:["Master 20 hobby and free time words","Talk about what you like to do","Discuss entertainment and technology"]},

    {type:"teach", trg:"de hobby", src:"the hobby", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: hobbys.",
     example:"A: Wat is je hobby?\nB: Ik hou van lezen en fietsen.",
     exampleSrc:"A: What is your hobby?\nB: I like reading and cycling.",
     funFact:"International word from English. Used the same way everywhere."},

    {type:"teach", trg:"dansen", src:"to dance", pos:"verb", gender:null,
     note:"Regular verb. Ik dans, jij danst.",
     example:"A: Kun je dansen?\nB: Ja, ik hou van salsa!",
     exampleSrc:"A: Can you dance?\nB: Yes, I love salsa!",
     funFact:"Cognate with English 'dance' (via French). The Dutch love festivals with dancing."},

    {type:"teach", trg:"het dansfeest", src:"the dance party", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: dans + feest (party).",
     example:"A: Ga je naar het dansfeest?\nB: Ja, het wordt leuk!",
     exampleSrc:"A: Are you going to the dance party?\nB: Yes, it will be fun!",
     funFact:"Transparent compound. The Dutch love a good feest (party)."},

    {type:"teach", trg:"de dansles", src:"the dance class", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: dans + les (lesson).",
     example:"A: Ik heb dansles op woensdag.\nB: Wat voor dans?",
     exampleSrc:"A: I have dance class on Wednesday.\nB: What kind of dance?",
     funFact:"Salsa, tango, and hip-hop dance classes are very popular in Dutch cities."},

    {type:"teach", trg:"de muziek", src:"the music", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek via Latin.",
     example:"A: Wat voor muziek luister je?\nB: Pop en jazz.",
     exampleSrc:"A: What kind of music do you listen to?\nB: Pop and jazz.",
     funFact:"The Netherlands has a huge electronic music scene. Tiesto, Armin van Buuren, Martin Garrix."},

    {type:"mc",
     q:"Ik ga naar de ___ op woensdag. We leren salsa.",
     opts:["dansles","muziek","hobby","film"],
     ans:"dansles",
     hint:"Which compound word combines 'dance' with 'lesson'?"},

    {type:"teach", trg:"het feest", src:"the party / celebration", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: feesten.",
     example:"A: Kom je naar mijn feest?\nB: Ja, natuurlijk! Wanneer is het?",
     exampleSrc:"A: Are you coming to my party?\nB: Yes, of course! When is it?",
     funFact:"The Dutch have many feesten: Koningsdag, Sinterklaas, carnaval."},

    {type:"teach", trg:"kijken", src:"to watch / to look", pos:"verb", gender:null,
     note:"Regular verb. Ik kijk, jij kijkt.",
     example:"A: Zullen we televisie kijken?\nB: Ja, wat is er op?",
     exampleSrc:"A: Shall we watch television?\nB: Yes, what's on?",
     funFact:"General verb for looking/watching. 'Kijk uit!' = Watch out!"},

    {type:"teach", trg:"de computer", src:"the computer", pos:"noun", gender:"c",
     note:"Common gender (de). International word.",
     example:"A: Ik werk de hele dag achter de computer.\nB: Dat is niet gezond!",
     exampleSrc:"A: I work behind the computer all day.\nB: That's not healthy!",
     funFact:"The Netherlands has one of the highest computer ownership rates in Europe."},

    {type:"teach", trg:"de e-mail", src:"the e-mail", pos:"noun", gender:"c",
     note:"Common gender (de). Also written 'email'.",
     example:"A: Stuur me een e-mail.\nB: Oké, wat is je adres?",
     exampleSrc:"A: Send me an e-mail.\nB: Okay, what is your address?",
     funFact:"International word. The Dutch sometimes say 'mailtje' (diminutive) for a quick email."},

    {type:"teach", trg:"de mail", src:"the mail / email", pos:"noun", gender:"c",
     note:"Common gender (de). Shorter form of 'e-mail'.",
     example:"A: Heb je mijn mail gekregen?\nB: Ja, ik antwoord vanavond.",
     exampleSrc:"A: Did you get my email?\nB: Yes, I'll reply tonight.",
     funFact:"In spoken Dutch, 'mail' has almost fully replaced 'e-mail'."},

    {type:"fb",
     s:"Zullen we een film {1} vanavond?",
     a:["kijken"],
     opts:["kijken","dansen","maken","lezen"],
     hint:"Which verb means 'to watch'? Used with TV shows and movies.",
     sSrc:"Shall we {1} a movie tonight?"},

    {type:"teach", trg:"kamperen", src:"to camp", pos:"verb", gender:null,
     note:"Regular verb. Ik kampeer, jij kampeert.",
     example:"A: Gaan jullie kamperen deze zomer?\nB: Ja, in Frankrijk!",
     exampleSrc:"A: Are you going camping this summer?\nB: Yes, in France!",
     funFact:"The Dutch are Europe's most enthusiastic campers. Caravans everywhere in summer!"},

    {type:"teach", trg:"de caravan", src:"the caravan / camper trailer", pos:"noun", gender:"c",
     note:"Common gender (de). The Dutch vacation icon.",
     example:"A: We hebben een nieuwe caravan.\nB: Leuk! Waar gaan jullie heen?",
     exampleSrc:"A: We have a new caravan.\nB: Nice! Where are you going?",
     funFact:"The Dutch own more caravans per capita than any other nation. A true obsession."},

    {type:"teach", trg:"het interview", src:"the interview", pos:"noun", gender:"n",
     note:"Neuter noun (het). International word.",
     example:"A: Ik heb morgen een interview.\nB: Voor welke baan?",
     exampleSrc:"A: I have an interview tomorrow.\nB: For which job?",
     funFact:"From English/French. Used for both job interviews and media interviews."},

    {type:"teach", trg:"de kaart", src:"the card / map / ticket", pos:"noun", gender:"c",
     note:"Common gender (de). Multiple meanings depending on context.",
     example:"A: Heb je een kaart van de stad?\nB: Ja, hier!",
     exampleSrc:"A: Do you have a map of the city?\nB: Yes, here!",
     funFact:"Triple meaning: card, map, and ticket. 'Kaartje' (diminutive) usually means ticket."},

    {type:"mc",
     q:"De Nederlanders zijn de grootste ___ van Europa.",
     opts:["filmmakers","kampeerders","dansers","muzikanten"],
     ans:"kampeerders",
     hint:"Which hobby involves sleeping in tents or caravans? The Dutch love this activity."},

    {type:"teach", trg:"het formulier", src:"the form (document)", pos:"noun", gender:"n",
     note:"Neuter noun (het). Official paperwork.",
     example:"A: Vul dit formulier in.\nB: Oké, heb je een pen?",
     exampleSrc:"A: Fill in this form.\nB: Okay, do you have a pen?",
     funFact:"From Latin 'formularium'. The Dutch bureaucracy involves many formulieren!"},

    {type:"teach", trg:"het adres", src:"the address", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: adressen.",
     example:"A: Wat is je adres?\nB: Keizersgracht 100, Amsterdam.",
     exampleSrc:"A: What is your address?\nB: Keizersgracht 100, Amsterdam.",
     funFact:"From French 'adresse'. Dutch addresses include a postcode like '1015 AA'."},

    {type:"teach", trg:"de achternaam", src:"the surname / last name", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: achter (behind/after) + naam (name).",
     example:"A: Wat is je achternaam?\nB: Jansen. Met een J.",
     exampleSrc:"A: What is your surname?\nB: Jansen. With a J.",
     funFact:"Most common Dutch surnames: De Jong, Jansen, De Vries, Van Dijk, Van den Berg."},

    {type:"teach", trg:"de collega", src:"the colleague", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: collega's.",
     example:"A: Mijn collega is ziek.\nB: Oh, dat is vervelend.",
     exampleSrc:"A: My colleague is sick.\nB: Oh, that's annoying.",
     funFact:"From Latin 'collega'. The informal Dutch work culture means collega's often become friends."},

    {type:"match", pairs:[
      {trg:"dansfeest", src:"dance party"},
      {trg:"kamperen", src:"to camp"},
      {trg:"caravan", src:"camper trailer"},
      {trg:"achternaam", src:"surname"}
    ]}
  ]
};
export default LESSON_14;
