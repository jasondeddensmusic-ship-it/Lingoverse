// L19: Expressions, Fixed Phrases, and Idioms
const LESSON_19 = {
  id:"nlv2_b2g6_l19", title:"Uitdrukkingen en Vaste Zinnen", icon:"\uD83D\uDCAC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions, Fixed Phrases, and Idioms",
     desc:"Master Dutch fixed expressions and prepositional phrases that appear in formal and everyday language. These multi-word units are essential for sounding natural at B2 level.",
     goals:["Learn 10 Dutch fixed expressions and phrases","Use formal prepositional phrases correctly","Understand register differences in fixed expressions"]},

    {type:"teach", trg:"in acht nemen", src:"to observe, to heed, to bear in mind", pos:"verb", gender:null,
     note:"Fixed expression: in acht (in regard) + nemen (to take).\nVery formal. Used in rules and warnings.",
     example:"A: U moet de veiligheidsvoorschriften in acht nemen.\nB: Welke voorschriften bedoelt u?\nA: Altijd een helm dragen op de bouwplaats.\nB: Begrepen, ik zal erop letten.",
     exampleSrc:"A: You must observe the safety regulations.\nB: Which regulations do you mean?\nA: Always wear a helmet at the construction site.\nB: Understood, I will pay attention.",
     funFact:"'In acht nemen' is one of the most formal Dutch expressions. You will find it in every official regulation and legal text."},

    {type:"teach", trg:"in combinatie met", src:"in combination with", pos:"prep", gender:null,
     note:"Fixed prepositional phrase. Used to connect two elements.\nCommon in academic and business writing.",
     example:"A: Dit medicijn werkt goed in combinatie met beweging.\nB: Moet ik ook diëten?\nA: Gezond eten helpt zeker.\nB: Ik zal het proberen.",
     exampleSrc:"A: This medicine works well in combination with exercise.\nB: Do I also need to diet?\nA: Healthy eating certainly helps.\nB: I will try it.",
     funFact:"Dutch academic writing loves prepositional phrases like 'in combinatie met', 'in overeenstemming met', and 'met betrekking tot'."},

    {type:"teach", trg:"in dank aanvaarden", src:"to accept with gratitude, to receive gratefully", pos:"verb", gender:null,
     note:"Fixed expression: in dank (with thanks) + aanvaarden (to accept).\nFormal acknowledgment of a gift or gesture.",
     example:"A: Wij aanvaarden uw donatie in dank.\nB: Het is voor een goed doel.\nA: Elke bijdrage helpt.\nB: Graag gedaan.",
     exampleSrc:"A: We accept your donation with gratitude.\nB: It is for a good cause.\nA: Every contribution helps.\nB: You are welcome.",
     funFact:"The phrase 'in dank aanvaarden' is standard in Dutch thank-you letters and charity communications. It sounds warm but formal."},

    {type:"teach", trg:"in de zin van", src:"in the sense of, meaning", pos:"prep", gender:null,
     note:"Fixed phrase used to clarify meaning.\nLiterally: in the sense of.",
     example:"A: Ik bedoel slim in de zin van creatief.\nB: Niet intellectueel slim?\nA: Nee, meer vindingrijk.\nB: Ah, ik begrijp wat je bedoelt.",
     exampleSrc:"A: I mean smart in the sense of creative.\nB: Not intellectually smart?\nA: No, more resourceful.\nB: Ah, I understand what you mean.",
     funFact:"Dutch speakers use 'in de zin van' to prevent misunderstandings. The Dutch love precision in language, even in casual conversation."},

    {type:"teach", trg:"en zo maar door", src:"and so on, and so forth", pos:"adv", gender:null,
     note:"Fixed expression meaning 'and it goes on like that'.\nLess formal than 'enzovoort' (etc.).",
     example:"A: Er waren schilders, beeldhouwers, musici en zo maar door.\nB: Heel veel kunstenaars dus.\nA: Ja, het was een groot festival.\nB: Dat klinkt geweldig.",
     exampleSrc:"A: There were painters, sculptors, musicians, and so on.\nB: A lot of artists then.\nA: Yes, it was a big festival.\nB: That sounds wonderful.",
     funFact:"Dutch has multiple ways to say 'et cetera': enzovoort (abbreviated enz.), et cetera, en zo maar door, en ga zo maar door. Each has a different register."},

    {type:"mc",
     q:"Wat betekent 'in acht nemen'?",
     opts:["Rekening houden met, naleven","Acht keer doen","In acht delen verdelen","Acht dagen wachten"],
     ans:"Rekening houden met, naleven",
     hint:"A very formal expression meaning to observe or heed. Found in rules, regulations, and official warnings."},

    {type:"teach", trg:"de aandeelhoudersstructuur", src:"the shareholder structure", pos:"noun", gender:"c",
     note:"Compound: aandeelhouder (shareholder) + structuur.\nHow company ownership is divided.",
     example:"A: De aandeelhoudersstructuur is complex.\nB: Hoeveel aandeelhouders zijn er?\nA: Meer dan vijftig.\nB: Dat maakt besluitvorming moeilijk.",
     exampleSrc:"A: The shareholder structure is complex.\nB: How many shareholders are there?\nA: More than fifty.\nB: That makes decision-making difficult.",
     funFact:"Dutch corporate law allows multiple share classes. Many Dutch companies use special structures to protect against hostile takeovers."},

    {type:"teach", trg:"de cliënt", src:"the client", pos:"noun", gender:"c",
     note:"From Latin 'cliens' (dependent).\nUsed in law, social work, and business. Note the trema.",
     example:"A: De cliënt wil een afspraak maken.\nB: Wanneer past het?\nA: Morgenmiddag om twee uur.\nB: Dat kan, ik noteer het.",
     exampleSrc:"A: The client wants to make an appointment.\nB: When does it suit?\nA: Tomorrow afternoon at two o'clock.\nB: That works, I will note it down.",
     funFact:"In Dutch, 'klant' is for shops, 'cliënt' for professional services (lawyers, social workers), and 'patiënt' for healthcare."},

    {type:"teach", trg:"de hoogtij", src:"the heyday, the peak period", pos:"noun", gender:"c",
     note:"Compound: hoog (high) + tij (tide).\nThe period of greatest success or activity.",
     example:"A: De Gouden Eeuw was de hoogtij van de Nederlandse kunst.\nB: Met Rembrandt en Vermeer.\nA: En Hals en Steen.\nB: Een ongelooflijke periode.",
     exampleSrc:"A: The Golden Age was the heyday of Dutch art.\nB: With Rembrandt and Vermeer.\nA: And Hals and Steen.\nB: An incredible period.",
     funFact:"The term 'hoogtij vieren' (to celebrate a heyday) comes from the high tide that allowed ships to enter Dutch harbors, bringing wealth and prosperity."},

    {type:"fb",
     s:"U moet de verkeersregels strikt {1}.",
     a:["in acht nemen"],
     opts:["in acht nemen","in dank aanvaarden","in combinatie met","in de zin van"],
     hint:"To observe or follow rules strictly. The most formal way to say 'pay attention to' in Dutch.",
     sSrc:"You must strictly {1} the traffic rules."},

    {type:"teach", trg:"de contextgebonden", src:"context-dependent, context-bound", pos:"adj", gender:null,
     note:"Compound: context + gebonden (bound, tied).\nMeaning depends on the situation.",
     example:"A: De betekenis van dit woord is contextgebonden.\nB: Het hangt dus af van de zin?\nA: Precies, het kan verschillende dingen betekenen.\nB: Dat maakt Nederlands lastig.",
     exampleSrc:"A: The meaning of this word is context-dependent.\nB: So it depends on the sentence?\nA: Exactly, it can mean different things.\nB: That makes Dutch tricky.",
     funFact:"Many Dutch words are 'contextgebonden'. The word 'bank' can mean a couch, a financial bank, or a park bench depending on context."},

    {type:"teach", trg:"het Germaans", src:"Germanic", pos:"adj", gender:null,
     note:"Relating to the Germanic language family or peoples.\nDutch, German, English are all Germaans.",
     example:"A: Nederlands heeft veel Germaanse woorden.\nB: Zoals welke?\nA: Huis, water, brood, melk.\nB: Die zijn inderdaad in alle Germaanse talen te vinden.",
     exampleSrc:"A: Dutch has many Germanic words.\nB: Such as which?\nA: House, water, bread, milk.\nB: Those are indeed found in all Germanic languages.",
     funFact:"About 80% of the most common Dutch words are Germanic in origin. French and Latin loanwords make up most of the rest."},

    {type:"mc",
     q:"Wanneer gebruik je 'in de zin van'?",
     opts:["Om iemand te bedanken","Om te verduidelijken wat je precies bedoelt","Om een zin te beginnen","Om een vraag te stellen"],
     ans:"Om te verduidelijken wat je precies bedoelt",
     hint:"This phrase is used when you want to specify or clarify the meaning of something you just said."},

    {type:"match", pairs:[
      {trg:"in acht nemen", src:"to observe/heed"},
      {trg:"in combinatie met", src:"in combination with"},
      {trg:"in dank aanvaarden", src:"to accept gratefully"},
      {trg:"in de zin van", src:"in the sense of"}
    ]},

    {type:"fb",
     s:"Dit medicijn werkt het beste {1} gezonde voeding.",
     a:["in combinatie met"],
     opts:["in combinatie met","in acht nemen","in dank","in de zin van"],
     hint:"A fixed prepositional phrase meaning 'together with' or 'combined with'.",
     sSrc:"This medicine works best {1} healthy nutrition."},

    {type:"mc",
     q:"Wat is het verschil tussen 'klant' en 'cliënt'?",
     opts:["Klant is formeel, cliënt is informeel","Cliënt is alleen voor ziekenhuizen","Klant is voor winkels, cliënt voor professionele diensten","Er is geen verschil"],
     ans:"Klant is voor winkels, cliënt voor professionele diensten",
     hint:"Dutch distinguishes between a shop customer and someone receiving professional services like legal advice."}
  ]
};
export default LESSON_19;
