// L07: Huishouden en Wonen. Domestic Life and Housing
const LESSON_7 = {
  id:"nlv2_b2gD_l07", title:"Huishouden en Wonen", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Domestic Life and Housing",
     desc:"Dutch homes and domestic culture have their own unique character. Learn vocabulary about housing, household life, and the practical side of Dutch living.",
     goals:["Master 10 domestic and housing terms","Discuss household topics in Dutch","Understand Dutch living culture"]},

    {type:"teach", trg:"de huizenruil", src:"the house swap / home exchange", pos:"noun", gender:"c",
     note:"Common gender (de). Huizen (houses) + ruil (exchange).\n'Een huizenruil regelen' = to arrange a house swap.",
     example:"A: We doen een huizenruil deze zomer.\nB: Met wie?\nA: Een gezin uit Barcelona.\nB: Wat een leuke manier om goedkoop op vakantie te gaan!",
     exampleSrc:"A: We're doing a house swap this summer.\nB: With whom?\nA: A family from Barcelona.\nB: What a nice way to go on holiday cheaply!",
     funFact:"House swapping is popular among Dutch families. Several Dutch-founded platforms connect homeowners worldwide for vacation exchanges."},

    {type:"teach", trg:"de ijskast", src:"the fridge / refrigerator", pos:"noun", gender:"c",
     note:"Common gender (de). IJs (ice) + kast (cupboard).\nOlder word for 'koelkast', still commonly used.",
     example:"A: Staat er nog melk in de ijskast?\nB: Nee, die is op.\nA: Dan moet ik naar de supermarkt.\nB: Neem ook kaas mee, alsjeblieft.",
     exampleSrc:"A: Is there still milk in the fridge?\nB: No, it's finished.\nA: Then I need to go to the supermarket.\nB: Get cheese too, please.",
     funFact:"'IJskast' literally means 'ice cupboard', from the days when blocks of ice kept food cold. 'Koelkast' (cooling cupboard) is the modern synonym, but both are used."},

    {type:"teach", trg:"de koffieautomaat", src:"the coffee machine / vending machine", pos:"noun", gender:"c",
     note:"Common gender (de). Koffie (coffee) + automaat (vending machine).\n'Koffie uit de automaat' = coffee from the machine.",
     example:"A: De koffieautomaat is weer kapot.\nB: Alweer? Dat is de derde keer.\nA: Ik ga wel even naar het cafe.\nB: Neem voor mij ook een koffie mee.",
     exampleSrc:"A: The coffee machine is broken again.\nB: Again? That's the third time.\nA: I'll just go to the cafe.\nB: Get me a coffee too.",
     funFact:"The Netherlands is one of the top coffee-consuming nations per capita. Office coffee machines are sacred, and a broken one can seriously affect morale."},

    {type:"teach", trg:"de hoepelrok", src:"the hoop skirt / crinoline", pos:"noun", gender:"c",
     note:"Common gender (de). Hoepel (hoop) + rok (skirt).\nA skirt supported by a framework of hoops.",
     example:"A: In het museum droeg het mannequin een hoepelrok.\nB: Uit welke periode?\nA: De achttiende eeuw.\nB: Hoe konden ze daarin bewegen?",
     exampleSrc:"A: In the museum the mannequin wore a hoop skirt.\nB: From which period?\nA: The eighteenth century.\nB: How could they move in that?",
     funFact:"Hoop skirts were extremely popular in the Dutch Golden Age. Some were so wide that doors had to be widened to let women through."},

    {type:"mc",
     q:"Wat is het verschil tussen een 'ijskast' en een 'koelkast'?",
     opts:["Het zijn synoniemen voor hetzelfde apparaat","Een ijskast is groter","Een koelkast is ouder","Een ijskast staat in een winkel"],
     ans:"Het zijn synoniemen voor hetzelfde apparaat",
     hint:"Both words refer to the same kitchen appliance. One uses 'ice' and the other uses 'cooling' as the first part."},

    {type:"teach", trg:"de kleedruimte", src:"the changing room / locker room", pos:"noun", gender:"c",
     note:"Common gender (de). Kleed (dress/change) + ruimte (room/space).\n'De kleedruimte van het zwembad' = the changing room of the pool.",
     example:"A: De kleedruimte is links na de receptie.\nB: Zijn er kluisjes?\nA: Ja, je hebt een muntje nodig.\nB: Ik heb er een, bedankt.",
     exampleSrc:"A: The changing room is to the left past reception.\nB: Are there lockers?\nA: Yes, you need a coin.\nB: I have one, thanks.",
     funFact:"Dutch swimming pools and sports facilities often have mixed-gender changing rooms with individual cubicles. This practical approach surprises many visitors."},

    {type:"teach", trg:"de kluis", src:"the safe / vault", pos:"noun", gender:"c",
     note:"Common gender (de). Related to 'kluizenaar' (hermit, from enclosed space).\n'In de kluis leggen' = to put in the safe.",
     example:"A: Bewaar je paspoort in de kluis van het hotel.\nB: Goed idee, ik vertrouw de kamer niet.\nA: Je kunt er ook je geld in leggen.\nB: Dat doe ik zeker.",
     exampleSrc:"A: Keep your passport in the hotel safe.\nB: Good idea, I don't trust the room.\nA: You can also put your money in it.\nB: I'll definitely do that.",
     funFact:"The word 'kluis' is related to 'kluizenaar' (hermit). Both come from the idea of a sealed, enclosed space. A hermit lives in a 'kluis' (cell/vault)."},

    {type:"teach", trg:"de kurkentrekker", src:"the corkscrew", pos:"noun", gender:"c",
     note:"Common gender (de). Kurk (cork) + trekker (puller).\n'Heb je een kurkentrekker?' = Do you have a corkscrew?",
     example:"A: Waar is de kurkentrekker?\nB: In de la naast het fornuis.\nA: Gevonden! Deze wijn heeft een echte kurk.\nB: Steeds meer flessen hebben een schroefdop.",
     exampleSrc:"A: Where is the corkscrew?\nB: In the drawer next to the stove.\nA: Found it! This wine has a real cork.\nB: More and more bottles have screw caps.",
     funFact:"The Dutch drink more wine per capita than many southern European countries. Most is imported, but Dutch winemaking in Limburg is growing."},

    {type:"fb",
     s:"We doen een {1} met een Frans gezin en verblijven gratis in hun huis.",
     a:["huizenruil"],
     opts:["huizenruil","ijskast","kleedruimte","kluis"],
     hint:"An arrangement where two families exchange homes for a vacation. Compound: houses + swap.",
     sSrc:"We're doing a {1} with a French family and staying in their house for free."},

    {type:"teach", trg:"de klos", src:"the spool / bobbin / fall guy", pos:"noun", gender:"c",
     note:"Common gender (de). A spool for thread.\nIdiom: 'de klos zijn' = to be the fall guy, to get the short end.",
     example:"A: Wie is er nu weer de klos?\nB: Ik, zoals altijd.\nA: Dat is niet eerlijk.\nB: Nee, maar zo gaat het hier.",
     exampleSrc:"A: Who's the fall guy again?\nB: Me, as always.\nA: That's not fair.\nB: No, but that's how it goes here.",
     funFact:"'De klos zijn' is a very common Dutch expression meaning 'to be the one who gets stuck with the consequences'. Its origin is from weaving, where the spool bears all the thread."},

    {type:"teach", trg:"de kluts", src:"the sense of direction / bearings", pos:"noun", gender:"c",
     note:"Common gender (de). Only used in the phrase 'de kluts kwijt zijn' = to be flustered/confused.\nLiterally: to have lost your bearings.",
     example:"A: Ik ben helemaal de kluts kwijt.\nB: Wat is er aan de hand?\nA: Te veel veranderingen tegelijk.\nB: Rustig aan, het komt goed.",
     exampleSrc:"A: I'm completely flustered.\nB: What's the matter?\nA: Too many changes at once.\nB: Take it easy, it'll be fine.",
     funFact:"'De kluts kwijt zijn' is one of those Dutch expressions where the noun only exists in this one phrase. Nobody says 'ik heb de kluts' (I have bearings)."},

    {type:"match", pairs:[
      {trg:"ijskast", src:"fridge"},
      {trg:"kleedruimte", src:"changing room"},
      {trg:"kluis", src:"safe / vault"},
      {trg:"kurkentrekker", src:"corkscrew"},
      {trg:"klos", src:"spool / fall guy"}
    ]},

    {type:"mc",
     q:"Wat betekent 'de kluts kwijt zijn'?",
     opts:["Moe zijn na het werk","In de war zijn, niet meer weten wat te doen","Verdwaald zijn in een stad","Je sleutels kwijt zijn"],
     ans:"In de war zijn, niet meer weten wat te doen",
     hint:"This expression means to be confused or flustered. The word 'kluts' only exists in this fixed phrase."},

    {type:"fb",
     s:"Leg je waardevolle spullen in de {1} van het hotel.",
     a:["kluis"],
     opts:["kluis","kleedruimte","ijskast","koffieautomaat"],
     hint:"A secure metal box with a lock, found in hotel rooms. Used to protect valuables.",
     sSrc:"Put your valuables in the hotel {1}."}
  ]
};
export default LESSON_7;
