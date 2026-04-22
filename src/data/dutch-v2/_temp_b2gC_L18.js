// L18: Fietsen en Mobiliteit. Cycling and Mobility
const LESSON_18 = {
  id:"nlv2_b2gC_l18", title:"Fietsen en Mobiliteit", icon:"\u{1F6B2}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cycling and Mobility",
     desc:"Cycling is not just transport in the Netherlands, it is identity. Master vocabulary about bikes, traffic, and the uniquely Dutch relationship with two wheels.",
     goals:["Master 10 cycling and mobility terms","Discuss Dutch cycling culture","Navigate transport and traffic vocabulary"]},

    {type:"teach", trg:"de fietsambtenaar", src:"the cycling officer / bicycle policy officer", pos:"noun", gender:"c",
     note:"Common gender (de). Fiets (bicycle) + ambtenaar (civil servant).\nA government official dedicated to cycling policy.",
     example:"A: Wist je dat Amsterdam een fietsambtenaar heeft?\nB: Nee! Wat doet die?\nA: Fietsbeleid maken en fietspaden plannen.\nB: Dat is de meest Nederlandse baan ooit.",
     exampleSrc:"A: Did you know Amsterdam has a cycling officer?\nB: No! What do they do?\nA: Make cycling policy and plan bike paths.\nB: That is the most Dutch job ever.",
     funFact:"Several Dutch cities employ dedicated 'fietsambtenaren'. The Netherlands has over 35,000 kilometres of bike paths, more than any other country."},

    {type:"teach", trg:"de kering", src:"the flood barrier / storm surge barrier", pos:"noun", gender:"c",
     note:"Common gender (de). From 'keren' (to turn back/stop).\n'De Maeslantkering' = a famous Dutch barrier.",
     example:"A: De Maeslantkering beschermt Rotterdam tegen overstromingen.\nB: Is dat die enorme constructie bij Hoek van Holland?\nA: Ja, een van de grootste ter wereld.\nB: Indrukwekkend staaltje techniek.",
     exampleSrc:"A: The Maeslant barrier protects Rotterdam from flooding.\nB: Is that the enormous construction near Hook of Holland?\nA: Yes, one of the largest in the world.\nB: An impressive feat of engineering.",
     funFact:"The Deltawerken (Delta Works) protect the Netherlands from the sea. The Maeslantkering can close in 30 minutes when a storm surge is predicted."},

    {type:"teach", trg:"de kleurenwissel", src:"the colour change / colour switch", pos:"noun", gender:"c",
     note:"Common gender (de). Kleuren (colours) + wissel (change/switch).\nUsed for autumn leaves, traffic lights, and nature.",
     example:"A: De kleurenwissel in de herfst is prachtig.\nB: Ja, alles wordt goud en rood.\nA: Laten we naar het bos gaan.\nB: Goed idee, voor het te laat is.",
     exampleSrc:"A: The colour change in autumn is beautiful.\nB: Yes, everything turns gold and red.\nA: Let's go to the forest.\nB: Good idea, before it's too late.",
     funFact:"The Veluwe, the largest nature reserve in the Netherlands, is famous for its autumn 'kleurenwissel'. Thousands visit to see the changing leaves."},

    {type:"teach", trg:"de kampplaats", src:"the campsite spot / camping pitch", pos:"noun", gender:"c",
     note:"Common gender (de). Kamp (camp) + plaats (place).\n'Een kampeerplaats reserveren' = to book a camping pitch.",
     example:"A: Heb je al een kampplaats gereserveerd?\nB: Ja, in Zeeland, vlak bij het strand.\nA: Hoeveel nachten?\nB: Een hele week, we hebben het nodig!",
     exampleSrc:"A: Have you already reserved a campsite spot?\nB: Yes, in Zeeland, right near the beach.\nA: How many nights?\nB: A whole week, we need it!",
     funFact:"Camping is hugely popular in the Netherlands. 'Kamperen' is almost a national hobby. Dutch campers are famous across European campsites."},

    {type:"mc",
     q:"De Maeslantkering is:",
     opts:["Een stormvloedkering die Rotterdam beschermt","Een brug over de Maas","Een windmolenpark","Een fietspad"],
     ans:"Een stormvloedkering die Rotterdam beschermt",
     hint:"'Kering' means barrier. This massive structure stops storm surges from flooding the city."},

    {type:"teach", trg:"het keyboard", src:"the keyboard (musical)", pos:"noun", gender:"n",
     note:"Neuter (het). English loanword.\nUsed for electronic keyboards. 'Toetsenbord' = computer keyboard.",
     example:"A: Speel je keyboard?\nB: Ja, in een bandje.\nA: Wat voor muziek?\nB: Pop en een beetje jazz.",
     exampleSrc:"A: Do you play keyboard?\nB: Yes, in a band.\nA: What kind of music?\nB: Pop and a bit of jazz.",
     funFact:"In Dutch, 'keyboard' is the musical instrument. The computer keyboard is 'toetsenbord' (key-board). Different words for different keyboards!"},

    {type:"teach", trg:"de handelscontact", src:"the trade contact / business contact", pos:"noun", gender:"n",
     note:"Neuter (het handelscontact). Handel (trade) + contact.\n'Handelsrelatie' = trade relationship.",
     example:"A: We hebben een nieuw handelscontact in Japan.\nB: Wat voor bedrijf is het?\nA: Een technologiebedrijf in Osaka.\nB: Spannend, Japan is een grote markt.",
     exampleSrc:"A: We have a new trade contact in Japan.\nB: What kind of company is it?\nA: A technology company in Osaka.\nB: Exciting, Japan is a large market.",
     funFact:"The Netherlands is the world's 5th largest exporter. Dutch companies have 'handelscontacten' worldwide, a tradition dating back to the VOC."},

    {type:"teach", trg:"de gpsapparatuur", src:"GPS equipment", pos:"noun", gender:"c",
     note:"Common gender (de). GPS + apparatuur (equipment).\n'De navigatie' = the sat-nav.",
     example:"A: Gebruik je nog gpsapparatuur in de auto?\nB: Nee, ik gebruik mijn telefoon.\nA: Mijn vader heeft nog een los apparaat.\nB: Dat is ouderwets maar betrouwbaar.",
     exampleSrc:"A: Do you still use GPS equipment in the car?\nB: No, I use my phone.\nA: My father still has a separate device.\nB: That's old-fashioned but reliable.",
     funFact:"TomTom, the world-famous GPS navigation company, was founded in Amsterdam in 1991. A Dutch tech success story."},

    {type:"fb",
     s:"Amsterdam heeft een speciale {1} die fietsbeleid maakt.",
     a:["fietsambtenaar"],
     opts:["fietsambtenaar","kampplaats","kering","gpsapparatuur"],
     hint:"A government employee whose job is entirely about bicycles and cycling infrastructure.",
     sSrc:"Amsterdam has a special {1} who creates cycling policy."},

    {type:"teach", trg:"het handbereik", src:"the reach / arm's reach", pos:"noun", gender:"n",
     note:"Neuter (het). Hand + bereik (reach/range).\n'Binnen handbereik' = within arm's reach.",
     example:"A: Houd je telefoon binnen handbereik.\nB: Waarom?\nA: Ik stuur je straks de locatie.\nB: Goed, ik zet het geluid aan.",
     exampleSrc:"A: Keep your phone within arm's reach.\nB: Why?\nA: I'll send you the location soon.\nB: Okay, I'll turn the sound on.",
     funFact:"'Binnen handbereik' (within hand's reach) is used both literally and figuratively: 'Succes is binnen handbereik' (Success is within reach)."},

    {type:"teach", trg:"de kleedkamer", src:"the dressing room / locker room", pos:"noun", gender:"c",
     note:"Common gender (de). Kleed (dress/change) + kamer (room).\nSynonym of 'kleedruimte'.",
     example:"A: De kleedkamer is beneden.\nB: Is er genoeg ruimte voor het hele team?\nA: Ja, er zijn twee kleedkamers.\nB: Mooi, dan kan iedereen zich omkleden.",
     exampleSrc:"A: The locker room is downstairs.\nB: Is there enough space for the whole team?\nA: Yes, there are two locker rooms.\nB: Good, then everyone can change.",
     funFact:"In Dutch sports culture, the 'kleedkamer' is where team spirit is built. 'Kleedkamergeest' (locker room spirit) is a real concept in football."},

    {type:"mc",
     q:"Wat is het verschil tussen 'keyboard' en 'toetsenbord' in het Nederlands?",
     opts:["Er is geen verschil","Keyboard is muzikaal, toetsenbord is van de computer","Toetsenbord is muzikaal, keyboard is van de computer","Keyboard is groter"],
     ans:"Keyboard is muzikaal, toetsenbord is van de computer",
     hint:"Dutch has different words for each. One you play music on, the other you type on."},

    {type:"fb",
     s:"De {1} in de herfst maakt het bos prachtig goud en rood.",
     a:["kleurenwissel"],
     opts:["kleurenwissel","kering","kampplaats","kleedkamer"],
     hint:"The natural phenomenon when leaves change from green to autumn colours.",
     sSrc:"The {1} in autumn makes the forest beautifully gold and red."},

    {type:"match", pairs:[
      {trg:"fietsambtenaar", src:"cycling officer"},
      {trg:"kering", src:"flood barrier"},
      {trg:"kleurenwissel", src:"colour change"},
      {trg:"kampplaats", src:"campsite spot"}
    ]},

    {type:"mc",
     q:"TomTom, het gps-bedrijf, is opgericht in:",
     opts:["Londen","Silicon Valley","Amsterdam","Eindhoven"],
     ans:"Amsterdam",
     hint:"A Dutch technology company that became a global leader in navigation."},

    {type:"fb",
     s:"Houd je paspoort {1} als je door de douane gaat.",
     a:["binnen handbereik"],
     opts:["binnen handbereik","op kampplaats","in kleedkamer","op keyboard"],
     hint:"Keep it close enough that you can grab it easily with your hand.",
     sSrc:"Keep your passport within {1} when going through customs."},

    {type:"match", pairs:[
      {trg:"keyboard", src:"keyboard (musical)"},
      {trg:"gpsapparatuur", src:"GPS equipment"},
      {trg:"handbereik", src:"arm's reach"},
      {trg:"handelscontact", src:"trade contact"}
    ]}
  ]
};
export default LESSON_18;
