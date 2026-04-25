// L12: Vrije Tijd en Hobby's. Leisure and Hobbies
const LESSON_12 = {
  id:"nlv2_b2gD_l12", title:"Vrije Tijd en Hobby's", icon:"\u{1F3AF}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Leisure and Hobbies",
     desc:"The Dutch value their free time highly. Learn vocabulary about hobbies, sports, leisure activities, and how the Dutch spend their time outside of work.",
     goals:["Master 10 leisure and hobby terms","Discuss free time activities","Navigate Dutch sports and recreation vocabulary"]},

    {type:"teach", trg:"de hobbyclub", src:"the hobby club", pos:"noun", gender:"c",
     note:"Common gender (de). Hobby + club.\n'Lid van een hobbyclub' = member of a hobby club.",
     example:"A: Ik ben lid van een hobbyclub.\nB: Wat voor club?\nA: We maken keramiek.\nB: Dat klinkt ontspannend!",
     exampleSrc:"A: I'm a member of a hobby club.\nB: What kind of club?\nA: We make ceramics.\nB: That sounds relaxing!",
     funFact:"The Netherlands has a rich tradition of 'verenigingsleven' (club life). There are clubs for everything: stamps, chess, model trains, bird-watching, even goat-keeping."},

    {type:"teach", trg:"het korfbal", src:"korfball", pos:"noun", gender:"n",
     note:"Neuter (het). Korf (basket) + bal (ball).\nA mixed-gender team sport invented in the Netherlands.",
     example:"A: Heb je weleens korfbal gespeeld?\nB: Nee, hoe werkt het?\nA: Het is een beetje zoals basketbal, maar gemengd.\nB: Dat klinkt leuk, gemengde teams!",
     exampleSrc:"A: Have you ever played korfball?\nB: No, how does it work?\nA: It's a bit like basketball, but mixed gender.\nB: That sounds fun, mixed teams!",
     funFact:"Korfball was invented in Amsterdam in 1902 by Nico Broekhuysen. It is one of the few sports where men and women play together on the same team. The Netherlands dominates internationally."},

    {type:"teach", trg:"de jukebox", src:"the jukebox", pos:"noun", gender:"c",
     note:"Common gender (de). From English.\n'Een munt in de jukebox gooien' = to put a coin in the jukebox.",
     example:"A: Staat er een jukebox in dit cafe?\nB: Ja, achteraan bij de bar.\nA: Geweldig, ik wil iets van de Beatles draaien.\nB: Klassiek!",
     exampleSrc:"A: Is there a jukebox in this cafe?\nB: Yes, at the back by the bar.\nA: Great, I want to play something by the Beatles.\nB: Classic!",
     funFact:"Dutch 'bruine kroegen' (brown cafes, traditional pubs with dark wooden interiors) sometimes still have jukeboxes. These cosy pubs are a Dutch institution."},

    {type:"teach", trg:"de karamel", src:"caramel", pos:"noun", gender:"c",
     note:"Common gender (de). From French/Spanish 'caramelo'.\n'Karamelstroopwafels' = caramel syrup waffles.",
     example:"A: Wil je een karamelbonbon?\nB: Ja lekker, ik ben dol op karamel.\nA: Deze zijn met zeezout.\nB: De combinatie zoet en zout is heerlijk.",
     exampleSrc:"A: Do you want a caramel chocolate?\nB: Yes please, I love caramel.\nA: These are with sea salt.\nB: The sweet and salt combination is delicious.",
     funFact:"The stroopwafel (syrup waffle with karamel filling) was invented in Gouda around 1784. It is now one of the most iconic Dutch treats worldwide."},

    {type:"mc",
     q:"Wat is bijzonder aan korfbal?",
     opts:["Mannen en vrouwen spelen samen in hetzelfde team","Het wordt alleen binnenshuis gespeeld","Er zijn geen regels","Je mag alleen met je voeten spelen"],
     ans:"Mannen en vrouwen spelen samen in hetzelfde team",
     hint:"This Dutch-invented sport stands out because of its inclusive t... composition. Both genders compete together."},

    {type:"teach", trg:"het kuiken", src:"the chick (baby chicken)", pos:"noun", gender:"n",
     note:"Neuter (het). Diminutive-like form.\n'Kuikentje' = little chick (term of endearment).",
     example:"A: Kijk, de kuikens zijn uitgekomen!\nB: Wat schattig, hoeveel zijn het er?\nA: Zes kleine gele kuikentjes.\nB: De moederkip past goed op ze.",
     exampleSrc:"A: Look, the chicks have hatched!\nB: How cute, how many are there?\nA: Six little yellow chicks.\nB: The mother hen is taking good care of them.",
     funFact:"Dutch children traditionally visit 'kinderboerderijen' (petting farms) in spring to see baby animals. Nearly every neighbourhood has one, and they are free to visit."},

    {type:"teach", trg:"de kroonprins", src:"the crown prince", pos:"noun", gender:"c",
     note:"Common gender (de). Kroon (crown) + prins (prince).\n'Kroonprinses' = crown princess.",
     example:"A: De kroonprins bezocht een school in Den Haag.\nB: Was het een officieel bezoek?\nA: Ja, voor een leesbevorderingsprogramma.\nB: Het koningshuis is populair.",
     exampleSrc:"A: The crown prince visited a school in The Hague.\nB: Was it an official visit?\nA: Yes, for a reading promotion programme.\nB: The royal family is popular.",
     funFact:"Princess Amalia is the Dutch crown princess and heir to the throne. The Dutch monarchy is largely ceremonial but hugely popular. King's Day (27 April) is the biggest party of the year."},

    {type:"teach", trg:"het kroost", src:"the offspring / brood", pos:"noun", gender:"n",
     note:"Neuter (het). Old Dutch word for children/offspring.\nSlightly humorous or affectionate tone.",
     example:"A: Waar is je kroost vandaag?\nB: Bij oma en opa.\nA: Lekker rustig voor jullie!\nB: Ja, we genieten van de stilte.",
     exampleSrc:"A: Where's your brood today?\nB: At grandma and grandpa's.\nA: Nice and quiet for you!\nB: Yes, we're enjoying the silence.",
     funFact:"'Kroost' is a slightly old-fashioned, affectionate word for one's children. Using it has a warm, humorous tone, like saying 'my brood' or 'my little tribe' in English."},

    {type:"fb",
     s:"Het {1} is een typisch Nederlandse sport met gemengde teams.",
     a:["korfbal"],
     opts:["korfbal","hobbyclub","kuiken","kroost"],
     hint:"A team sport invented in Amsterdam in 1902. Similar to basketball but with men and women playing together.",
     sSrc:"{1} is a typically Dutch sport with mixed-gender teams."},

    {type:"teach", trg:"de kebab", src:"the kebab", pos:"noun", gender:"c",
     note:"Common gender (de). From Turkish/Arabic.\n'Een kebab met knoflooksaus' = a kebab with garlic sauce.",
     example:"A: Zullen we een kebab halen?\nB: Goed idee, ik heb honger.\nA: Met knoflooksaus of sambal?\nB: Allebei, graag!",
     exampleSrc:"A: Shall we get a kebab?\nB: Good idea, I'm hungry.\nA: With garlic sauce or sambal?\nB: Both, please!",
     funFact:"The 'kapsalon' (literally 'hairdresser') is a Dutch-Turkish fusion dish invented in Rotterdam. It layers kebab, fries, cheese, and salad in a foil tray. Pure Rotterdam street food."},

    {type:"teach", trg:"de duik", src:"the dive / plunge", pos:"noun", gender:"c",
     note:"Common gender (de). From 'duiken' (to dive).\n'Een duik nemen' = to take a dive/plunge.",
     example:"A: Ik neem een duik in het meer!\nB: Is het niet te koud?\nA: Een beetje, maar het is verfrissend.\nB: Ik kijk liever vanaf de kant.",
     exampleSrc:"A: I'm taking a plunge in the lake!\nB: Isn't it too cold?\nA: A bit, but it's refreshing.\nB: I prefer to watch from the side.",
     funFact:"The 'Nieuwjaarsduik' (New Year's Dive) in Scheveningen attracts over 10,000 participants who plunge into the icy North Sea on January 1st. It started in 1960 with just 7 swimmers."},

    {type:"match", pairs:[
      {trg:"korfbal", src:"korfball"},
      {trg:"kuiken", src:"chick"},
      {trg:"kroonprins", src:"crown prince"},
      {trg:"kebab", src:"kebab"},
      {trg:"duik", src:"dive / plunge"}
    ]},

    {type:"mc",
     q:"Wat is een 'kapsalon'?",
     opts:["Een cafe","Een gerecht met kebab, friet, kaas en salade","Een kapper","Een sporthal"],
     ans:"Een gerecht met kebab, friet, kaas en salade",
     hint:"This Rotterdam invention shares its name with a hair salon. It's a popular street food dish combining several layers."},

    {type:"fb",
     s:"Elk jaar nemen duizenden mensen een {1} in de Noordzee op 1 januari.",
     a:["duik"],
     opts:["duik","kebab","jukebox","kuiken"],
     hint:"The act of plunging into water. The famous New Year's event at Scheveningen is named after this word.",
     sSrc:"Every year thousands of people take a {1} in the North Sea on January 1st."}
  ]
};
export default LESSON_12;
