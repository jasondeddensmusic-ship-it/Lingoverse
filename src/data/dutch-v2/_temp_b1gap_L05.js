// L05: Cars and Transport, 20 B1 gap words
const LESSON_5 = {
  id:"nlv2_b1gap_l5", title:"Auto en Verkeer", icon:"\u{1F697}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cars and Transport",
     desc:"Learn Dutch vocabulary for cars, driving, and road transport. Essential for getting around in the Netherlands.",
     goals:["Master 20 car and transport terms","Describe vehicle parts","Talk about driving and highways"]},

    {type:"teach", trg:"de autoband", src:"the car tire", pos:"noun", gender:"c",
     note:"Common gender (de). Auto + band (tire) compound.",
     example:"A: Mijn autoband is lek.\nB: Heb je een reserveband?",
     exampleSrc:"A: My car tire is flat.\nB: Do you have a spare tire?",
     funFact:"'Band' means both tire and ribbon in Dutch. Context always makes it clear."},

    {type:"teach", trg:"de achterbank", src:"the back seat", pos:"noun", gender:"c",
     note:"Common gender (de). Achter (back) + bank (bench).",
     example:"A: De kinderen zitten op de achterbank.\nB: Hebben ze hun gordel om?",
     exampleSrc:"A: The children are sitting on the back seat.\nB: Do they have their seatbelts on?",
     funFact:"Dutch cars require seatbelts for all passengers, front and back. Fines are steep."},

    {type:"teach", trg:"de achterdeur", src:"the back door", pos:"noun", gender:"c",
     note:"Common gender (de). Achter (back) + deur (door).",
     example:"A: De achterdeur van de auto gaat niet open.\nB: Probeer het van binnenuit.",
     exampleSrc:"A: The back door of the car won't open.\nB: Try from the inside.",
     funFact:"Also used for the back door of a house. 'Via de achterdeur' means through unofficial channels."},

    {type:"teach", trg:"de achteruitkijkspiegel", src:"the rearview mirror", pos:"noun", gender:"c",
     note:"Common gender (de). Achteruit (backward) + kijk (look) + spiegel (mirror).",
     example:"A: Kijk in je achteruitkijkspiegel!\nB: O, ik zie een politieauto.",
     exampleSrc:"A: Look in your rearview mirror!\nB: Oh, I see a police car.",
     funFact:"One of Dutch's famous long compound words: 24 letters! German has a similar compound."},

    {type:"mc",
     q:"Waar kijk je in om te zien wat er achter je auto is?",
     opts:["de achteruitkijkspiegel","de achterbank","de achterdeur","de autoband"],
     ans:"de achteruitkijkspiegel",
     hint:"Think about the reflective surface that shows what is behind your vehicle."},

    {type:"teach", trg:"de airbag", src:"the airbag", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword used in Dutch.",
     example:"A: Gelukkig ging de airbag open.\nB: Dat heeft zijn leven gered.",
     exampleSrc:"A: Fortunately the airbag deployed.\nB: That saved his life.",
     funFact:"Directly borrowed from English. Dutch car safety standards are among the strictest in Europe."},

    {type:"teach", trg:"de autosnelweg", src:"the highway / the motorway", pos:"noun", gender:"c",
     note:"Common gender (de). Auto + snel (fast) + weg (road).",
     example:"A: De autosnelweg is druk vandaag.\nB: Er staan tien kilometer file.",
     exampleSrc:"A: The highway is busy today.\nB: There is a ten kilometer traffic jam.",
     funFact:"The Netherlands has the densest motorway network in Europe. Speed limit is usually 100 km/h (reduced from 130)."},

    {type:"teach", trg:"de avondspits", src:"the evening rush hour", pos:"noun", gender:"c",
     note:"Common gender (de). Avond (evening) + spits (peak).",
     example:"A: Vermijd de avondspits als je kunt.\nB: Ik ga pas na zevenen weg.",
     exampleSrc:"A: Avoid the evening rush hour if you can.\nB: I leave only after seven.",
     funFact:"Dutch rush hour traffic jams are legendary. The ANWB traffic service reports 'file' lengths in kilometers."},

    {type:"teach", trg:"de bagageband", src:"the luggage carousel", pos:"noun", gender:"c",
     note:"Common gender (de). Bagage (luggage) + band (belt).",
     example:"A: Mijn koffer staat niet op de bagageband.\nB: Misschien bij de balie melden.",
     exampleSrc:"A: My suitcase is not on the luggage carousel.\nB: Maybe report it at the desk.",
     funFact:"Schiphol airport handles over 70 million passengers a year. Their bagage system is massive."},

    {type:"teach", trg:"de autoradio", src:"the car radio", pos:"noun", gender:"c",
     note:"Common gender (de). Auto + radio compound.",
     example:"A: Zet de autoradio wat zachter.\nB: Vind je dit nummer niet leuk?",
     exampleSrc:"A: Turn the car radio down a bit.\nB: Don't you like this song?",
     funFact:"NPO Radio 2 is the most popular station in Dutch cars. Traffic updates come every 30 minutes."},

    {type:"fb",
     s:"We staan in de {1}. Het verkeer beweegt niet.",
     a:["avondspits"],
     opts:["avondspits","autosnelweg","achterbank","autoradio"],
     hint:"Which compound word describes the peak traffic period in the evening?",
     sSrc:"We are stuck in the {1}. Traffic is not moving."},

    {type:"teach", trg:"het autoraam", src:"the car window", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auto + raam (window).",
     example:"A: Doe het autoraam dicht, het regent!\nB: O, je hebt gelijk.",
     exampleSrc:"A: Close the car window, it's raining!\nB: Oh, you're right.",
     funFact:"'Raam' is the general Dutch word for window. In a car context, it specifies the car window."},

    {type:"teach", trg:"de achterbak", src:"the trunk / the boot", pos:"noun", gender:"c",
     note:"Common gender (de). Achter (back) + bak (container).",
     example:"A: Zet de tassen in de achterbak.\nB: Er past nog precies genoeg.",
     exampleSrc:"A: Put the bags in the trunk.\nB: There is just enough room.",
     funFact:"Also called 'kofferbak' (suitcase container). Both are common in daily Dutch."},

    {type:"teach", trg:"de autobelasting", src:"the car tax", pos:"noun", gender:"c",
     note:"Common gender (de). Auto + belasting (tax).",
     example:"A: De autobelasting is weer omhoog gegaan.\nB: Ja, het wordt steeds duurder.",
     exampleSrc:"A: The car tax has gone up again.\nB: Yes, it keeps getting more expensive.",
     funFact:"Called 'motorrijtuigenbelasting' (MRB) officially. The Netherlands has the highest car taxes in Europe."},

    {type:"teach", trg:"het autobezit", src:"car ownership", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auto + bezit (possession).",
     example:"A: Het autobezit in Amsterdam is laag.\nB: Iedereen fietst daar.",
     exampleSrc:"A: Car ownership in Amsterdam is low.\nB: Everyone cycles there.",
     funFact:"The Dutch have more bicycles than people. Car ownership is lower than most European countries."},

    {type:"mc",
     q:"Waar zet je je koffers als je met de auto op vakantie gaat?",
     opts:["op het autoraam","in de achterbak","op de achterbank","bij de airbag"],
     ans:"in de achterbak",
     hint:"Think about the storage compartment at the rear of the car."},

    {type:"teach", trg:"het autodelen", src:"car sharing", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auto + delen (sharing).",
     example:"A: Autodelen is populair in de stad.\nB: Ja, het scheelt parkeerkosten.",
     exampleSrc:"A: Car sharing is popular in the city.\nB: Yes, it saves parking costs.",
     funFact:"Services like Greenwheels and MyWheels are very popular in Dutch cities."},

    {type:"teach", trg:"de autobus", src:"the bus (coach)", pos:"noun", gender:"c",
     note:"Common gender (de). More formal than just 'bus'.",
     example:"A: De autobus vertrekt om acht uur.\nB: Laten we op tijd zijn.",
     exampleSrc:"A: The bus departs at eight o'clock.\nB: Let's be on time.",
     funFact:"'Bus' is more common in daily speech. 'Autobus' is the full form, used in formal writing."},

    {type:"teach", trg:"het auto-ongeluk", src:"the car accident", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auto + ongeluk (accident).",
     example:"A: Er was een auto-ongeluk op de A2.\nB: Zijn er gewonden?",
     exampleSrc:"A: There was a car accident on the A2.\nB: Are there any injuries?",
     funFact:"The A2 between Amsterdam and Utrecht is one of the busiest highways. Accidents cause massive delays."},

    {type:"teach", trg:"het autogebruik", src:"car use / car usage", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auto + gebruik (use).",
     example:"A: Het autogebruik moet omlaag.\nB: Meer mensen moeten de trein nemen.",
     exampleSrc:"A: Car usage must decrease.\nB: More people should take the train.",
     funFact:"The Dutch government actively discourages car use through high taxes and excellent public transport."},

    {type:"match", pairs:[
      {trg:"autosnelweg", src:"highway"},
      {trg:"avondspits", src:"evening rush hour"},
      {trg:"achterbak", src:"trunk/boot"},
      {trg:"autodelen", src:"car sharing"},
      {trg:"auto-ongeluk", src:"car accident"}
    ]},

    {type:"fb",
     s:"De kinderen mogen niet voorin zitten. Ze zitten op de {1}.",
     a:["achterbank"],
     opts:["achterbank","achterbak","achterdeur","autoband"],
     hint:"Where in the car do passengers sit behind the driver?",
     sSrc:"The children may not sit in the front. They sit on the {1}."}
  ]
};
export default LESSON_5;
