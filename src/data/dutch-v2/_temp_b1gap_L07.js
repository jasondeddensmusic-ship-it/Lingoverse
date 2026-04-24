// L07: Home and Daily Life, 20 B1 gap words
const LESSON_7 = {
  id:"nlv2_b1gap_l7", title:"Huis en Dagelijks Leven", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Home and Daily Life",
     desc:"Learn Dutch vocabulary for household tasks, everyday objects, and domestic routines. Words you need every day.",
     goals:["Master 20 home and daily life words","Describe household chores","Talk about everyday objects"]},

    {type:"teach", trg:"afruimen", src:"to clear (the table)", pos:"verb", gender:null,
     note:"Separable verb. Ik ruim af, jij ruimt af.",
     example:"A: Kun je de tafel afruimen?\nB: Ja, ik zet alles in de vaatwasser.",
     exampleSrc:"A: Can you clear the table?\nB: Yes, I'll put everything in the dishwasher.",
     funFact:"Af (off) + ruimen (to clear). A daily ritual in Dutch households after dinner."},

    {type:"teach", trg:"afdrogen", src:"to dry (dishes/oneself)", pos:"verb", gender:null,
     note:"Separable verb. Ik droog af, jij droogt af.",
     example:"A: Ik was af en jij droogt af, oké?\nB: Goed, geef me de theedoek.",
     exampleSrc:"A: I wash and you dry, okay?\nB: Good, give me the tea towel.",
     funFact:"Before dishwashers, 'afwassen en afdrogen' (washing and drying) was a team effort in Dutch homes."},

    {type:"teach", trg:"afdrukken", src:"to print", pos:"verb", gender:null,
     note:"Separable verb. Ik druk af, jij drukt af.",
     example:"A: Kun je dit document afdrukken?\nB: Ja, de printer staat in de gang.",
     exampleSrc:"A: Can you print this document?\nB: Yes, the printer is in the hallway.",
     funFact:"Af (off) + drukken (to press). You 'press off' a copy. Also used for photos."},

    {type:"teach", trg:"het bankstel", src:"the sofa set / the couch", pos:"noun", gender:"n",
     note:"Neuter gender (het). Bank (couch) + stel (set).",
     example:"A: We hebben een nieuw bankstel gekocht.\nB: Wat voor kleur?",
     exampleSrc:"A: We bought a new sofa set.\nB: What color?",
     funFact:"IKEA is extremely popular in the Netherlands. Many Dutch living rooms have a 'hoekbank' (corner sofa)."},

    {type:"mc",
     q:"Na het eten moet je de tafel ___.",
     opts:["afruimen","afdrogen","afdrukken","afrekenen"],
     ans:"afruimen",
     hint:"Which verb means removing plates and glasses from the dining table?"},

    {type:"teach", trg:"de badhanddoek", src:"the bath towel", pos:"noun", gender:"c",
     note:"Common gender (de). Bad (bath) + handdoek (towel).",
     example:"A: Waar liggen de badhanddoeken?\nB: In de linnenkast.",
     exampleSrc:"A: Where are the bath towels?\nB: In the linen closet.",
     funFact:"'Handdoek' literally means 'hand cloth'. A 'badhanddoek' is the large version for after bathing."},

    {type:"teach", trg:"de batterij", src:"the battery", pos:"noun", gender:"c",
     note:"Common gender (de). For devices and electronics.",
     example:"A: De batterij van de afstandsbediening is leeg.\nB: Er liggen nieuwe in de la.",
     exampleSrc:"A: The remote control battery is dead.\nB: There are new ones in the drawer.",
     funFact:"From French 'batterie'. Also used for rechargeable batteries in phones and laptops."},

    {type:"teach", trg:"de avondklok", src:"the curfew", pos:"noun", gender:"c",
     note:"Common gender (de). Avond (evening) + klok (clock).",
     example:"A: Tijdens corona was er een avondklok.\nB: Ja, na negen uur mocht je niet buiten.",
     exampleSrc:"A: During corona there was a curfew.\nB: Yes, after nine o'clock you could not go outside.",
     funFact:"The 2021 Dutch curfew sparked riots in some cities. It was the first since World War II."},

    {type:"teach", trg:"het artikel", src:"the article / the item", pos:"noun", gender:"n",
     note:"Neuter gender (het). A newspaper piece or a product.",
     example:"A: Heb je dat artikel gelezen?\nB: Welk artikel? In de Volkskrant?",
     exampleSrc:"A: Have you read that article?\nB: Which article? In de Volkskrant?",
     funFact:"Same Latin root as English 'article'. De Volkskrant and NRC are the main quality newspapers."},

    {type:"teach", trg:"de azijn", src:"the vinegar", pos:"noun", gender:"c",
     note:"Common gender (de). Used in cooking and cleaning.",
     example:"A: Doe je azijn op je friet?\nB: Nee, ik gebruik mayonaise.",
     exampleSrc:"A: Do you put vinegar on your fries?\nB: No, I use mayonnaise.",
     funFact:"From French 'vinaigre' via older Dutch. The Dutch prefer mayo on fries, unlike the British vinegar tradition."},

    {type:"fb",
     s:"Ik was de borden en jij {1} ze met de theedoek.",
     a:["droogt af"],
     opts:["droogt af","ruimt af","drukt af","rekent af"],
     hint:"Which separable verb means to make wet dishes dry using a cloth?",
     sSrc:"I wash the plates and you {1} them with the tea towel."},

    {type:"teach", trg:"de alarmmelding", src:"the alarm notification", pos:"noun", gender:"c",
     note:"Common gender (de). Alarm + melding (notification).",
     example:"A: Er is een alarmmelding van het beveiligingssysteem.\nB: Controleer de camera's!",
     exampleSrc:"A: There is an alarm notification from the security system.\nB: Check the cameras!",
     funFact:"NL-Alert is the Dutch government's alarm system. It sends emergency messages to all phones in the area."},

    {type:"teach", trg:"de alarmbel", src:"the alarm bell", pos:"noun", gender:"c",
     note:"Common gender (de). Also used figuratively: warning signal.",
     example:"A: Dit moet een alarmbel zijn voor ons.\nB: Ja, we moeten actie ondernemen.",
     exampleSrc:"A: This should be an alarm bell for us.\nB: Yes, we must take action.",
     funFact:"'De alarmbellen rinkelen' (the alarm bells are ringing) is a common Dutch expression for a warning."},

    {type:"teach", trg:"de airconditioning", src:"the air conditioning", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword. Often shortened to 'airco'.",
     example:"A: Zet de airconditioning aan, het is zo warm!\nB: De airco is kapot.",
     exampleSrc:"A: Turn on the air conditioning, it's so hot!\nB: The AC is broken.",
     funFact:"Most Dutch homes do NOT have airco. Summers are usually mild, but heat waves are becoming more common."},

    {type:"teach", trg:"de app", src:"the app", pos:"noun", gender:"c",
     note:"Common gender (de). Short for application.",
     example:"A: Heb je de nieuwe app?\nB: Welke bedoel je?",
     exampleSrc:"A: Do you have the new app?\nB: Which one do you mean?",
     funFact:"The Dutch love apps. The NS app (train) and Buienradar app (rain radar) are on almost every phone."},

    {type:"mc",
     q:"Het is 35 graden buiten. Wat zet je aan om het huis koel te maken?",
     opts:["de app","de airconditioning","de alarmbel","de avondklok"],
     ans:"de airconditioning",
     hint:"Think about the device that cools the air inside a room."},

    {type:"teach", trg:"de automaat", src:"the vending machine / the automatic machine", pos:"noun", gender:"c",
     note:"Common gender (de). Any automatic machine or dispenser.",
     example:"A: Ik haal koffie uit de automaat.\nB: Neem voor mij ook een thee.",
     exampleSrc:"A: I'll get coffee from the vending machine.\nB: Get me a tea too.",
     funFact:"Albert Heijn supermarkets have 'zelfscan' automaten. The word also means automatic transmission in cars."},

    {type:"teach", trg:"de afbeelding", src:"the image / the illustration", pos:"noun", gender:"c",
     note:"Common gender (de). From 'afbeelden' (to depict).",
     example:"A: De afbeelding in het boek is prachtig.\nB: Ja, het is een oud schilderij.",
     exampleSrc:"A: The image in the book is beautiful.\nB: Yes, it is an old painting.",
     funFact:"Af (off) + beelding (imaging). You 'image off' a copy of something. Used for any visual representation."},

    {type:"teach", trg:"afbeelden", src:"to depict / to illustrate", pos:"verb", gender:null,
     note:"Separable verb. Ik beeld af, jij beeldt af.",
     example:"A: Wat beeldt dit schilderij af?\nB: Een Nederlands landschap met windmolens.",
     exampleSrc:"A: What does this painting depict?\nB: A Dutch landscape with windmills.",
     funFact:"'Beeld' means image or statue. The Rijksmuseum 'beeldt af' centuries of Dutch art history."},

    {type:"teach", trg:"het bebouwd", src:"built-up (area)", pos:"adj", gender:null,
     note:"Adjective. Describes an area with many buildings.",
     example:"A: Dit is een bebouwd gebied.\nB: Ja, er staan overal huizen.",
     exampleSrc:"A: This is a built-up area.\nB: Yes, there are houses everywhere.",
     funFact:"'Bebouwde kom' (built-up area) is a legal term in the Netherlands. Speed limit drops to 30 or 50 km/h."},

    {type:"match", pairs:[
      {trg:"afruimen", src:"to clear the table"},
      {trg:"afdrogen", src:"to dry"},
      {trg:"batterij", src:"battery"},
      {trg:"automaat", src:"vending machine"},
      {trg:"afbeelding", src:"image"}
    ]},

    {type:"fb",
     s:"Kun je dit document even {1}? Ik heb het op papier nodig.",
     a:["afdrukken"],
     opts:["afdrukken","afbeelden","afdrogen","afruimen"],
     hint:"Which verb means to make a paper copy using a printer?",
     sSrc:"Can you {1} this document? I need it on paper."}
  ]
};
export default LESSON_7;
