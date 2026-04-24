// L16: Common Verbs, 20 A1 gap words
const LESSON_16 = {
  id:"nlv2_a1gap_l16", title:"Veelgebruikte Werkwoorden", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Common Verbs",
     desc:"Learn essential Dutch verbs for everyday actions. Give, get, stay, understand, and more.",
     goals:["Master 20 common action verbs","Use separable and irregular verbs","Express everyday actions in Dutch"]},

    {type:"teach", trg:"hebben", src:"to have", pos:"verb", gender:null,
     note:"Irregular. Ik heb, jij hebt, hij heeft. Also used as auxiliary.",
     example:"A: Heb je een pen?\nB: Ja, hier. Alsjeblieft.",
     exampleSrc:"A: Do you have a pen?\nB: Yes, here. Please.",
     funFact:"Cognate with English 'have'. One of the two most important Dutch verbs."},

    {type:"teach", trg:"geven", src:"to give", pos:"verb", gender:null,
     note:"Irregular. Ik geef, jij geeft, hij geeft.",
     example:"A: Geef me het boek, alsjeblieft.\nB: Hier, pak aan.",
     exampleSrc:"A: Give me the book, please.\nB: Here, take it.",
     funFact:"Cognate with English 'give'. Same root, nearly same pronunciation."},

    {type:"teach", trg:"krijgen", src:"to get / to receive", pos:"verb", gender:null,
     note:"Irregular. Ik krijg, jij krijgt. Past: kreeg.",
     example:"A: Wat krijg je voor je verjaardag?\nB: Ik weet het nog niet!",
     exampleSrc:"A: What are you getting for your birthday?\nB: I don't know yet!",
     funFact:"Very common verb. Also used in ordering: 'Ik krijg een koffie' = I'll have a coffee."},

    {type:"teach", trg:"blijven", src:"to stay / to remain", pos:"verb", gender:null,
     note:"Irregular. Ik blijf, jij blijft. Past: bleef.",
     example:"A: Blijf je thuis vanavond?\nB: Ja, ik ben moe.",
     exampleSrc:"A: Are you staying home tonight?\nB: Yes, I'm tired.",
     funFact:"Also used as linking verb: 'Het blijft moeilijk' = It remains difficult."},

    {type:"mc",
     q:"Wat ___ je voor je verjaardag?",
     opts:["krijg","geef","blijf","heb"],
     ans:"krijg",
     hint:"Which verb means 'to receive'? What do people hand you on your birthday?"},

    {type:"teach", trg:"begrijpen", src:"to understand", pos:"verb", gender:null,
     note:"Irregular. Ik begrijp, jij begrijpt. Past: begreep.",
     example:"A: Begrijp je het?\nB: Ja, nu begrijp ik het!",
     exampleSrc:"A: Do you understand it?\nB: Yes, now I understand it!",
     funFact:"Compound: be- (prefix) + grijpen (to grasp). To 'grasp' mentally."},

    {type:"teach", trg:"bestaan", src:"to exist", pos:"verb", gender:null,
     note:"Irregular. Het bestaat. 'Bestaan uit' = to consist of.",
     example:"A: Bestaat dat echt?\nB: Ja, het is echt waar!",
     exampleSrc:"A: Does that really exist?\nB: Yes, it's really true!",
     funFact:"Compound: be- + staan (to stand). To 'stand in being'. Philosophical!"},

    {type:"teach", trg:"bellen", src:"to call (phone)", pos:"verb", gender:null,
     note:"Regular. Ik bel, jij belt. Also: to ring (a bell).",
     example:"A: Ik bel je morgen.\nB: Oké, na tien uur graag.",
     exampleSrc:"A: I'll call you tomorrow.\nB: Okay, after ten o'clock please.",
     funFact:"From 'bel' (bell). Originally meant to ring a bell. Now means to phone."},

    {type:"teach", trg:"huilen", src:"to cry", pos:"verb", gender:null,
     note:"Regular. Ik huil, jij huilt.",
     example:"A: Waarom huil je?\nB: Ik ben verdrietig.",
     exampleSrc:"A: Why are you crying?\nB: I am sad.",
     funFact:"Also used for howling wind: 'De wind huilt'. Expressive word."},

    {type:"teach", trg:"gooien", src:"to throw", pos:"verb", gender:null,
     note:"Regular. Ik gooi, jij gooit.",
     example:"A: Gooi de bal!\nB: Hier, vang!",
     exampleSrc:"A: Throw the ball!\nB: Here, catch!",
     funFact:"Very common everyday verb. 'Gooi weg!' = Throw it away!"},

    {type:"fb",
     s:"Ik {1} je morgen na het werk.",
     a:["bel"],
     opts:["bel","gooi","huil","geef"],
     hint:"Which verb means 'to call' on the phone?",
     sSrc:"I'll {1} you tomorrow after work."},

    {type:"teach", trg:"kloppen", src:"to knock / to be correct", pos:"verb", gender:null,
     note:"Regular. Double meaning: knock on door, or 'be correct'.",
     example:"A: Klopt dat?\nB: Ja, dat klopt!",
     exampleSrc:"A: Is that correct?\nB: Yes, that's right!",
     funFact:"'Dat klopt' (that's correct) is one of the most common Dutch phrases."},

    {type:"teach", trg:"liggen", src:"to lie / to be located", pos:"verb", gender:null,
     note:"Irregular. Ik lig, jij ligt. Past: lag.",
     example:"A: Amsterdam ligt in het westen.\nB: En Groningen in het noorden.",
     exampleSrc:"A: Amsterdam is located in the west.\nB: And Groningen in the north.",
     funFact:"Used for flat objects and locations. 'Het boek ligt op tafel' = The book is on the table."},

    {type:"teach", trg:"houden", src:"to hold / to keep", pos:"verb", gender:null,
     note:"Irregular. Ik houd, jij houdt. 'Houden van' = to love.",
     example:"A: Ik houd van kaas.\nB: Typisch Nederlands!",
     exampleSrc:"A: I love cheese.\nB: Typically Dutch!",
     funFact:"'Houden van' = to love (people or things). 'Ik houd van je' = I love you."},

    {type:"teach", trg:"besturen", src:"to steer / to manage / to govern", pos:"verb", gender:null,
     note:"Regular. Ik bestuur, jij bestuurt.",
     example:"A: Wie bestuurt het bedrijf?\nB: De directeur.",
     exampleSrc:"A: Who manages the company?\nB: The director.",
     funFact:"From 'be-' + 'sturen' (to steer). To steer something, guide it."},

    {type:"mc",
     q:"'Dat ___!' betekent 'That's correct!' in het Nederlands.",
     opts:["huilt","klopt","belt","gooit"],
     ans:"klopt",
     hint:"Which verb has a second meaning of 'to be correct'? Also means 'to knock'."},

    {type:"teach", trg:"feliciteren", src:"to congratulate", pos:"verb", gender:null,
     note:"Regular. Ik feliciteer, jij feliciteert.",
     example:"A: Gefeliciteerd met je verjaardag!\nB: Dank je wel!",
     exampleSrc:"A: Congratulations on your birthday!\nB: Thank you!",
     funFact:"The Dutch congratulate EVERYONE at a birthday party, not just the birthday person!"},

    {type:"teach", trg:"nodigen", src:"to invite", pos:"verb", gender:null,
     note:"Regular. Often used as 'uitnodigen' (separable).",
     example:"A: Ik nodig je uit voor het feest.\nB: Leuk, ik kom graag!",
     exampleSrc:"A: I'm inviting you to the party.\nB: Nice, I'd love to come!",
     funFact:"Usually 'uitnodigen' (invite out). 'Een uitnodiging' = an invitation."},

    {type:"teach", trg:"afvallen", src:"to lose weight / to fall off", pos:"verb", gender:null,
     note:"Separable: ik val af. Double meaning: lose weight or drop off.",
     example:"A: Ik wil vijf kilo afvallen.\nB: Meer sporten en minder eten!",
     exampleSrc:"A: I want to lose five kilos.\nB: Exercise more and eat less!",
     funFact:"Separable: 'af' + 'vallen'. Literally 'to fall off'. Weight falls off you."},

    {type:"teach", trg:"inzamelen", src:"to collect / to gather", pos:"verb", gender:null,
     note:"Separable: ik zamel in. For charity collections, recycling, etc.",
     example:"A: We zamelen geld in voor het goede doel.\nB: Hoeveel hebben jullie al?",
     exampleSrc:"A: We're collecting money for charity.\nB: How much do you have so far?",
     funFact:"Separable: 'in' + 'zamelen'. The Dutch are big on charity collections."},

    {type:"teach", trg:"missen", src:"to miss", pos:"verb", gender:null,
     note:"Regular. Ik mis, jij mist. Both 'miss a person' and 'miss a bus'.",
     example:"A: Ik mis mijn familie.\nB: Bel ze dan!",
     exampleSrc:"A: I miss my family.\nB: Then call them!",
     funFact:"Cognate with English 'miss'. Same meaning: to feel absence or to fail to catch."},

    {type:"match", pairs:[
      {trg:"begrijpen", src:"to understand"},
      {trg:"feliciteren", src:"to congratulate"},
      {trg:"houden van", src:"to love"},
      {trg:"kloppen", src:"to knock / be correct"}
    ]}
  ]
};
export default LESSON_16;
