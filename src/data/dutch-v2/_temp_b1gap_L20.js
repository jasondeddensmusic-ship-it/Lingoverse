// L20: Mixed Vocabulary Roundup, 20 B1 gap words
const LESSON_20 = {
  id:"nlv2_b1gap_l20", title:"Woordenschat Afronden", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vocabulary Roundup",
     desc:"A final collection of useful B1 Dutch words across many topics. Round off your vocabulary with these versatile terms.",
     goals:["Master 20 mixed B1 vocabulary words","Expand your expressive range","Review and consolidate B1 skills"]},

    {type:"teach", trg:"aanbreken", src:"to break open / to dawn", pos:"verb", gender:null,
     note:"Separable verb. Ik breek aan, jij breekt aan.",
     example:"A: Een nieuw tijdperk breekt aan.\nB: Ja, alles gaat veranderen.",
     exampleSrc:"A: A new era is dawning.\nB: Yes, everything is going to change.",
     funFact:"Aan + breken (to break). Dawn 'breaks onto' the day. Also: 'een fles aanbreken' = to open a bottle."},

    {type:"teach", trg:"aanbrengen", src:"to apply / to install", pos:"verb", gender:null,
     note:"Separable verb. Ik breng aan, jij brengt aan.",
     example:"A: We moeten verf aanbrengen op de muur.\nB: Welke kleur? Wit of grijs?",
     exampleSrc:"A: We need to apply paint to the wall.\nB: Which color? White or grey?",
     funFact:"Aan + brengen (to bring). You 'bring onto' a surface. Used for paint, makeup, and corrections."},

    {type:"teach", trg:"de aantrekkingskracht", src:"the attraction / the appeal", pos:"noun", gender:"c",
     note:"Common gender (de). Physical or emotional pulling force.",
     example:"A: Amsterdam heeft een enorme aantrekkingskracht.\nB: Ja, miljoenen toeristen per jaar.",
     exampleSrc:"A: Amsterdam has an enormous attraction.\nB: Yes, millions of tourists per year.",
     funFact:"Aantrekking (attraction) + kracht (force). In physics: gravity. In daily life: charm and appeal."},

    {type:"teach", trg:"de allerbelangrijkst", src:"the most important of all", pos:"adj", gender:null,
     note:"Superlative adjective. Aller- prefix intensifies.",
     example:"A: Het allerbelangrijkste is je gezondheid.\nB: Daar heb je gelijk in.",
     exampleSrc:"A: The most important thing of all is your health.\nB: You are right about that.",
     funFact:"Aller- is a Dutch superlative booster: allergrootst (biggest of all), allerbest (best of all)."},

    {type:"mc",
     q:"Een nieuw jaar is begonnen. Een nieuwe periode ___ ___.",
     opts:["breekt aan","brengt aan","trekt aan","slaat af"],
     ans:"breekt aan",
     hint:"Which separable verb means a new period or era is beginning?"},

    {type:"teach", trg:"de alleraardigst", src:"the nicest / very kind", pos:"adj", gender:null,
     note:"Superlative adjective. Extremely nice or kind.",
     example:"A: Ze is de alleraardigste collega.\nB: Iedereen mag haar.",
     exampleSrc:"A: She is the nicest colleague of all.\nB: Everyone likes her.",
     funFact:"Aller + aardigst (nicest). Dutch uses 'aller-' for absolute superlatives. Very warm and appreciative."},

    {type:"teach", trg:"de allerhoogst", src:"the very highest", pos:"adj", gender:null,
     note:"Superlative adjective. The absolute maximum.",
     example:"A: Dit is van het allerhoogste belang.\nB: Ik begrijp de urgentie.",
     exampleSrc:"A: This is of the very highest importance.\nB: I understand the urgency.",
     funFact:"Used in both formal and informal Dutch. 'Allerhoogste' adds dramatic emphasis to the superlative."},

    {type:"teach", trg:"de allerminst", src:"the very least / not at all", pos:"adj", gender:null,
     note:"Superlative adjective. The absolute minimum.",
     example:"A: Ik ben niet in het allerminst onder de indruk.\nB: Je bent moeilijk te imponeren.",
     exampleSrc:"A: I am not in the least impressed.\nB: You are hard to impress.",
     funFact:"'Niet in het allerminst' is a common Dutch expression meaning 'not at all'. Very emphatic."},

    {type:"teach", trg:"de aangifte", src:"the declaration / the report", pos:"noun", gender:"c",
     note:"Common gender (de). Official report to authorities.",
     example:"A: Ik moet aangifte doen bij de politie.\nB: Wat is er gebeurd?",
     exampleSrc:"A: I need to file a report with the police.\nB: What happened?",
     funFact:"Used for police reports and tax returns. 'Belastingaangifte' = tax declaration. Essential Dutch bureaucracy."},

    {type:"fb",
     s:"Het {1} is dat je gelukkig bent. Al het andere komt daarna.",
     a:["allerbelangrijkste"],
     opts:["allerbelangrijkste","alleraardigste","allerhoogste","allerminste"],
     hint:"Which superlative means 'the most important thing of all'?",
     sSrc:"The {1} is that you are happy. Everything else comes after."},

    {type:"teach", trg:"de aanbieder", src:"the provider / the offerer", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who offers something.",
     example:"A: Welke aanbieder heb je voor internet?\nB: KPN, en jij?",
     exampleSrc:"A: Which provider do you have for internet?\nB: KPN, and you?",
     funFact:"From 'aanbieden' (to offer). Used for telecom, insurance, and service providers."},

    {type:"teach", trg:"achterzitten", src:"to pursue / to be behind", pos:"verb", gender:null,
     note:"Separable verb. Ik zit achter, jij zit achter.",
     example:"A: De politie zit de dief achter.\nB: Hebben ze hem al?",
     exampleSrc:"A: The police are pursuing the thief.\nB: Do they have him yet?",
     funFact:"Achter + zitten (to sit). You 'sit behind' someone, chasing them. Informal but widely used."},

    {type:"teach", trg:"het artiestenduo", src:"the artist duo", pos:"noun", gender:"n",
     note:"Neuter gender (het). Artiesten + duo compound.",
     example:"A: Dat artiestenduo is heel grappig.\nB: Ja, ze vullen elkaar perfect aan.",
     exampleSrc:"A: That artist duo is very funny.\nB: Yes, they complement each other perfectly.",
     funFact:"The Netherlands has many famous comedy duos. 'Duo' is borrowed from Italian."},

    {type:"teach", trg:"de arriveren", src:"to arrive", pos:"verb", gender:null,
     note:"Inseparable verb. Ik arriveer, jij arriveert.",
     example:"A: Het vliegtuig arriveert om drie uur.\nB: Laten we op tijd naar Schiphol gaan.",
     exampleSrc:"A: The plane arrives at three o'clock.\nB: Let's go to Schiphol on time.",
     funFact:"French loanword. 'Aankomen' is the everyday Dutch synonym. 'Arriveren' sounds more formal."},

    {type:"mc",
     q:"Je fiets is gestolen. Wat moet je doen bij de politie?",
     opts:["arriveren","aangifte doen","aanbrengen","achterzitten"],
     ans:"aangifte doen",
     hint:"What is the formal action of reporting a crime to the authorities?"},

    {type:"teach", trg:"de anarchistisch", src:"anarchistic", pos:"adj", gender:null,
     note:"Adjective. Related to anarchism or lawlessness.",
     example:"A: De protesten werden anarchistisch.\nB: De politie moest ingrijpen.",
     exampleSrc:"A: The protests became anarchistic.\nB: The police had to intervene.",
     funFact:"From Greek 'anarchos' (without a ruler). Amsterdam had a famous anarchist squatter movement in the 1980s."},

    {type:"teach", trg:"de afijn", src:"anyway / anyhow", pos:"intj", gender:null,
     note:"Interjection. Used to wrap up or change topic.",
     example:"A: Afijn, het maakt niet uit.\nB: Oké, laten we verder gaan.",
     exampleSrc:"A: Anyway, it doesn't matter.\nB: Okay, let's move on.",
     funFact:"Very common conversational filler. Signals 'let's move on'. More informal than 'enfin'."},

    {type:"teach", trg:"de aangekleed", src:"dressed (up)", pos:"adj", gender:null,
     note:"Past participle used as adjective. Wearing clothes.",
     example:"A: Je bent mooi aangekleed vandaag.\nB: Dank je, ik heb een sollicitatie.",
     exampleSrc:"A: You are nicely dressed today.\nB: Thanks, I have a job interview.",
     funFact:"Aan + gekleed (clothed). 'Aankleden' = to get dressed. 'Uitkleden' = to undress. A neat opposite pair."},

    {type:"teach", trg:"de antenne", src:"the antenna / the feeler", pos:"noun", gender:"c",
     note:"Common gender (de). Also used figuratively for sensitivity.",
     example:"A: Hij heeft een goede antenne voor humor.\nB: Ja, hij voelt precies wat grappig is.",
     exampleSrc:"A: He has a good antenna for humor.\nB: Yes, he senses exactly what is funny.",
     funFact:"Figuratively: 'een antenne hebben voor' means having a feel for something. Very expressive Dutch."},

    {type:"teach", trg:"de afgeladen", src:"packed / jam-packed", pos:"adj", gender:null,
     note:"Past participle used as adjective. Extremely full.",
     example:"A: De trein was afgeladen vol.\nB: Ik kon niet eens zitten.",
     exampleSrc:"A: The train was jam-packed.\nB: I couldn't even sit down.",
     funFact:"Af + geladen (loaded). A ship 'loaded off' to maximum capacity. Very vivid imagery."},

    {type:"match", pairs:[
      {trg:"aanbreken", src:"to dawn/break open"},
      {trg:"aanbrengen", src:"to apply/install"},
      {trg:"arriveren", src:"to arrive"},
      {trg:"afijn", src:"anyway"},
      {trg:"achterzitten", src:"to pursue"}
    ]},

    {type:"fb",
     s:"De trein was {1} vol. Er was geen plek meer.",
     a:["afgeladen"],
     opts:["afgeladen","aangekleed","aanstaande","afgelopen"],
     hint:"Which adjective describes something that is packed to absolute capacity?",
     sSrc:"The train was {1} full. There was no room left."},

    {type:"mc",
     q:"Je bent mooi ___. Heb je een feestje?",
     opts:["afgelopen","aangetekend","aangekleed","afgeladen"],
     ans:"aangekleed",
     hint:"Which word describes someone wearing nice clothes for an occasion?"},

    // ── Salvage from v1 (mixed B1 gap words) ──
    {type:"teach", trg:"jaloers", src:"jealous / envious", pos:"adj", gender:null,
     note:"Adjective. Used with 'op' when naming the target: jaloers op iemand.",
     example:"A: Ik ben jaloers op je nieuwe fiets.\nB: Dank je! Ik heb hem net gekocht.",
     exampleSrc:"A: I am jealous of your new bike.\nB: Thanks! I just bought it.",
     funFact:"From French 'jaloux.' Dutch 'jaloers op' mirrors English 'jealous of.' The noun is 'de jaloezie,' which also means a Venetian blind."},

    {type:"teach", trg:"uitkijken naar", src:"to look forward to", pos:"verb", gender:null,
     note:"Separable verb + preposition 'naar.' Expresses pleasant anticipation.",
     example:"A: Ik kijk uit naar het weekend.\nB: Ik ook. Heb je plannen?",
     exampleSrc:"A: I am looking forward to the weekend.\nB: Me too. Do you have plans?",
     funFact:"Literally 'to look out toward.' A classic Dutch phrasal verb. The separable prefix 'uit-' detaches in main clauses: 'Ik kijk ernaar uit.'"},

    {type:"teach", trg:"de mislukking", src:"the failure", pos:"noun", gender:"c",
     note:"Common gender (de). Noun form of 'mislukken' (to fail).",
     example:"A: Het project was een mislukking.\nB: Jammer. Wat is er misgegaan?",
     exampleSrc:"A: The project was a failure.\nB: Too bad. What went wrong?",
     funFact:"Mis- (wrongly) + lukken (to succeed). Dutch builds failure from 'wrongly succeeding.' The adjective is 'mislukt' (failed)."},

    {type:"teach", trg:"België", src:"Belgium", pos:"noun", gender:null,
     note:"Proper noun. Country name, no article.\nBelgian = Belgisch (adj), een Belg (noun).",
     example:"A: Ga je naar België op vakantie?\nB: Ja, naar Brugge en Gent.",
     exampleSrc:"A: Are you going to Belgium on holiday?\nB: Yes, to Bruges and Ghent.",
     funFact:"Belgium shares Dutch as an official language in Flanders. Belgian Dutch has distinct vocabulary: 'tas' means cup in Flanders but bag in the Netherlands."},

    {type:"match", pairs:[
      {trg:"jaloers", src:"jealous"},
      {trg:"uitkijken naar", src:"to look forward to"},
      {trg:"de mislukking", src:"the failure"},
      {trg:"België", src:"Belgium"}
    ]}
  ]
};
export default LESSON_20;
