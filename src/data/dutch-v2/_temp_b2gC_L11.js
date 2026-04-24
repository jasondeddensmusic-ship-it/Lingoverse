// L11: Feesten en Tradities. Festivals and Traditions
const LESSON_11 = {
  id:"nlv2_b2gC_l11", title:"Feesten en Tradities", icon:"\u{1F389}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Festivals and Traditions",
     desc:"Dutch culture is rich with unique festivals and traditions. Master vocabulary related to celebrations, holidays, and cultural events that shape Dutch identity.",
     goals:["Master 10 festival and tradition terms","Discuss Dutch cultural celebrations","Understand holiday-specific vocabulary"]},

    {type:"teach", trg:"de kroonprins", src:"the crown prince", pos:"noun", gender:"c",
     note:"Common gender (de). Kroon (crown) + prins (prince).\n'De kroonprinses' = crown princess.",
     example:"A: De kroonprins was bij de opening aanwezig.\nB: Prinses Amalia?\nA: Ja, ze gaf een toespraak.\nB: Ze wordt steeds zelfverzekerder.",
     exampleSrc:"A: The crown princess was present at the opening.\nB: Princess Amalia?\nA: Yes, she gave a speech.\nB: She's becoming more and more confident.",
     funFact:"The Dutch royal family (Oranje-Nassau) is very popular. Koningsdag on April 27th is the biggest national celebration."},

    {type:"teach", trg:"de krokusvakantie", src:"the February half-term holiday", pos:"noun", gender:"c",
     note:"Common gender (de). Krokus (crocus) + vakantie (holiday).\nNamed after the first spring flowers.",
     example:"A: Wat doe je in de krokusvakantie?\nB: We gaan een week skieen.\nA: In Oostenrijk?\nB: Ja, het is altijd druk met Nederlanders daar!",
     exampleSrc:"A: What are you doing during the February half-term?\nB: We're going skiing for a week.\nA: In Austria?\nB: Yes, it's always busy with Dutch people there!",
     funFact:"During 'krokusvakantie', half the Netherlands seems to head for Austrian ski resorts. Dutch is widely spoken in Tirol during this week."},

    {type:"teach", trg:"de klokslag", src:"the stroke of the clock / on the dot", pos:"noun", gender:"c",
     note:"Common gender (de). Klok (clock) + slag (stroke/beat).\n'Om klokslag twaalf' = at the stroke of twelve.",
     example:"A: We beginnen om klokslag negen uur.\nB: Precies op tijd?\nA: Ja, geen minuut te laat.\nB: Typisch Nederlands, altijd op tijd.",
     exampleSrc:"A: We start at nine o'clock on the dot.\nB: Exactly on time?\nA: Yes, not a minute late.\nB: Typically Dutch, always on time.",
     funFact:"Dutch punctuality is legendary. Being even five minutes late to a meeting is considered rude. 'Op tijd' means 'on time' and it is sacred."},

    {type:"teach", trg:"de handkus", src:"the hand kiss", pos:"noun", gender:"c",
     note:"Common gender (de). Hand + kus (kiss).\nAn old-fashioned formal greeting.",
     example:"A: Hij gaf haar een handkus.\nB: Wat ouderwets en charmant!\nA: Dat doe je toch niet meer tegenwoordig?\nB: Nee, alleen in films.",
     exampleSrc:"A: He gave her a hand kiss.\nB: How old-fashioned and charming!\nA: People don't do that anymore, do they?\nB: No, only in films.",
     funFact:"The Dutch greeting has evolved: three cheek kisses (right-left-right) are traditional but became controversial after COVID reduced physical contact."},

    {type:"mc",
     q:"Wanneer vieren Nederlanders Koningsdag?",
     opts:["27 april","25 december","1 januari","14 februari"],
     ans:"27 april",
     hint:"The birthday of King Willem-Alexander. The whole country turns orange on this spring day."},

    {type:"teach", trg:"het kroost", src:"the offspring / brood (humorous)", pos:"noun", gender:"n",
     note:"Neuter (het). Old Dutch for children/descendants.\nSlightly humorous, affectionate tone.",
     example:"A: Waar is je kroost vandaag?\nB: Bij opa en oma, gelukkig!\nA: Even rustig dan?\nB: Ja, we genieten van de stilte.",
     exampleSrc:"A: Where is your brood today?\nB: At grandpa and grandma's, luckily!\nA: A bit of peace and quiet then?\nB: Yes, we're enjoying the silence.",
     funFact:"'Kroost' is a warm, slightly humorous word for your children. It implies a lively group of kids. Formal alternatives: 'nageslacht', 'nakomelingen'."},

    {type:"teach", trg:"de korfbal", src:"korfball", pos:"noun", gender:"n",
     note:"Neuter (het korfbal). Korf (basket) + bal (ball).\nA uniquely Dutch sport, invented in 1902.",
     example:"A: Speel jij korfbal?\nB: Ja, al sinds de basisschool.\nA: Is het een gemengde sport?\nB: Ja, mannen en vrouwen spelen samen!",
     exampleSrc:"A: Do you play korfball?\nB: Yes, since primary school.\nA: Is it a mixed sport?\nB: Yes, men and women play together!",
     funFact:"Korfball was invented by Dutch teacher Nico Broekhuysen in 1902. It is the only team sport where men and women always play together."},

    {type:"teach", trg:"de hobbyclub", src:"the hobby club", pos:"noun", gender:"c",
     note:"Common gender (de). Hobby + club.\nThe Dutch love organised group activities.",
     example:"A: Ik zit in een hobbyclub voor fotografie.\nB: Hoe vaak komen jullie samen?\nA: Elke dinsdagavond.\nB: Leuk, mag ik een keer meekomen?",
     exampleSrc:"A: I'm in a hobby club for photography.\nB: How often do you meet?\nA: Every Tuesday evening.\nB: Nice, can I come along sometime?",
     funFact:"The Netherlands has an extremely active club culture. From chess to birdwatching, there is a 'vereniging' (association) for virtually everything."},

    {type:"fb",
     s:"We vertrekken om {1} acht uur, geen minuut later.",
     a:["klokslag"],
     opts:["klokslag","krokusvakantie","kroonprins","handkus"],
     hint:"An expression meaning 'exactly at that time', like the stroke of a clock.",
     sSrc:"We leave at {1} eight o'clock, not a minute later."},

    {type:"teach", trg:"de kurkentrekker", src:"the corkscrew", pos:"noun", gender:"c",
     note:"Common gender (de). Kurk (cork) + trekker (puller).\n'Een fles wijn opentrekken' = to open a bottle of wine.",
     example:"A: Heb je een kurkentrekker?\nB: Ja, in de keukenla.\nA: Fijn, ik kan deze fles niet openmaken.\nB: Het is een goede fles, laat mij even.",
     exampleSrc:"A: Do you have a corkscrew?\nB: Yes, in the kitchen drawer.\nA: Good, I can't open this bottle.\nB: It's a good bottle, let me do it.",
     funFact:"The Dutch saying 'je kunt de kurk erop doen' (you can put the cork back on) means a party or discussion is over."},

    {type:"teach", trg:"de klarinet", src:"the clarinet", pos:"noun", gender:"c",
     note:"Common gender (de). From Italian 'clarinetto'.\n'Klarinettist' = clarinet player.",
     example:"A: Speel jij klarinet?\nB: Ja, in het plaatselijke harmonie-orkest.\nA: Sinds wanneer?\nB: Al sinds mijn twaalfde.",
     exampleSrc:"A: Do you play the clarinet?\nB: Yes, in the local wind orchestra.\nA: Since when?\nB: Since I was twelve.",
     funFact:"Many Dutch towns have a 'harmonie' or 'fanfare' (wind orchestra/brass band). Playing in one is a cherished tradition, especially in the south."},

    {type:"mc",
     q:"Korfbal is uniek omdat:",
     opts:["Het alleen in water gespeeld wordt","Mannen en vrouwen altijd samen spelen","Er geen bal wordt gebruikt","Het alleen in de zomer gespeeld wordt"],
     ans:"Mannen en vrouwen altijd samen spelen",
     hint:"This Dutch sport has been mixed-gender since its invention in 1902."},

    {type:"fb",
     s:"In de {1} gaan veel Nederlanders skieen in Oostenrijk.",
     a:["krokusvakantie"],
     opts:["krokusvakantie","hobbyclub","korfbal","klokslag"],
     hint:"The school holiday in February, named after early spring flowers.",
     sSrc:"During the {1}, many Dutch people go skiing in Austria."},

    {type:"match", pairs:[
      {trg:"kroonprins", src:"crown prince"},
      {trg:"krokusvakantie", src:"February half-term"},
      {trg:"klokslag", src:"on the dot"},
      {trg:"handkus", src:"hand kiss"}
    ]},

    {type:"mc",
     q:"'Kroost' is een:",
     opts:["Naam voor een huisdier","Formeel woord voor werknemers","Grappig, warm woord voor je kinderen","Scheldwoord"],
     ans:"Grappig, warm woord voor je kinderen",
     hint:"It is affectionate and slightly humorous. Used when talking about a lively group of kids."},

    {type:"fb",
     s:"Heb je een {1}? Ik kan deze wijnfles niet open krijgen.",
     a:["kurkentrekker"],
     opts:["kurkentrekker","klarinet","hobbyclub","klokslag"],
     hint:"A tool specifically designed to remove the stopper from a wine bottle.",
     sSrc:"Do you have a {1}? I can't get this wine bottle open."},

    {type:"match", pairs:[
      {trg:"kroost", src:"offspring / brood"},
      {trg:"korfbal", src:"korfball"},
      {trg:"kurkentrekker", src:"corkscrew"},
      {trg:"klarinet", src:"clarinet"}
    ]}
  ]
};
export default LESSON_11;
