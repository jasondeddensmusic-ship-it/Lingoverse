// L08: Wonen en Huishouden — Housing and Domestic Life
const LESSON_8 = {
  id:"nlv2_b2gC_l8", title:"Wonen en Huishouden", icon:"\u{1F3E1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Housing and Domestic Life",
     desc:"Housing is a hot topic in the Netherlands. Learn vocabulary about homes, domestic life, and the housing market that dominates Dutch conversations.",
     goals:["Master 10 housing and domestic life terms","Discuss the Dutch housing market","Navigate domestic and household vocabulary"]},

    {type:"teach", trg:"de huizenruil", src:"the house swap", pos:"noun", gender:"c",
     note:"Common gender (de). Huizen (houses) + ruil (swap/exchange).\n'Ruilen' = to swap.",
     example:"A: We doen dit jaar een huizenruil voor vakantie.\nB: Met wie?\nA: Een gezin uit Spanje.\nB: Wat leuk! Zo bespaar je op hotelkosten.",
     exampleSrc:"A: We're doing a house swap this year for vacation.\nB: With whom?\nA: A family from Spain.\nB: How fun! That way you save on hotel costs.",
     funFact:"House swapping for holidays became popular in the Netherlands after the 2008 financial crisis as a budget-friendly travel option."},

    {type:"teach", trg:"de ijskast", src:"the fridge / refrigerator", pos:"noun", gender:"c",
     note:"Common gender (de). IJs (ice) + kast (cupboard).\n'De koelkast' is the more modern synonym.",
     example:"A: Staat er nog melk in de ijskast?\nB: Ik denk het, laat me even kijken.\nA: We moeten ook kaas kopen.\nB: Zet het op het boodschappenlijstje.",
     exampleSrc:"A: Is there still milk in the fridge?\nB: I think so, let me check.\nA: We also need to buy cheese.\nB: Put it on the shopping list.",
     funFact:"'IJskast' (ice cupboard) is the older word. 'Koelkast' (cooling cupboard) is now more common. Both are widely understood."},

    {type:"teach", trg:"de kleedruimte", src:"the changing room / dressing room", pos:"noun", gender:"c",
     note:"Common gender (de). Kleed (dress/change) + ruimte (space/room).\nUsed in sports and shops.",
     example:"A: Waar is de kleedruimte?\nB: Aan het eind van de gang, links.\nA: Mag ik drie kledingstukken meenemen?\nB: Ja, maximaal vijf.",
     exampleSrc:"A: Where is the changing room?\nB: At the end of the hallway, on the left.\nA: Can I take three items of clothing?\nB: Yes, maximum five.",
     funFact:"In Dutch sports clubs, the 'kleedruimte' (or 'kleedkamer') is a social space. Tea and snacks after the game are a tradition."},

    {type:"teach", trg:"het kantoorleven", src:"office life", pos:"noun", gender:"n",
     note:"Neuter (het). Kantoor (office) + leven (life).\n'Het dagelijkse kantoorleven' = daily office life.",
     example:"A: Het kantoorleven is erg veranderd.\nB: Door thuiswerken, bedoel je?\nA: Ja, veel mensen gaan nog maar drie dagen naar kantoor.\nB: Ik werk het liefst thuis.",
     exampleSrc:"A: Office life has changed a lot.\nB: Because of working from home, you mean?\nA: Yes, many people only go to the office three days.\nB: I prefer working from home.",
     funFact:"The Netherlands has one of the highest rates of part-time work and remote work in Europe. 'Thuiswerken' boomed after 2020."},

    {type:"mc",
     q:"'IJskast' en 'koelkast' zijn:",
     opts:["Totaal verschillende apparaten","Synoniemen voor hetzelfde apparaat","IJskast is groter dan koelkast","Koelkast is voor winkels, ijskast voor thuis"],
     ans:"Synoniemen voor hetzelfde apparaat",
     hint:"Both words describe the same appliance: one emphasises ice, the other cooling."},

    {type:"teach", trg:"de korset", src:"the corset", pos:"noun", gender:"n",
     note:"Neuter (het korset). From French 'corset'.\n'Een strak korset' = a tight corset.",
     example:"A: Vrouwen droegen vroeger een korset.\nB: Dat moet oncomfortabel zijn geweest.\nA: Zeker, ze konden nauwelijks ademen.\nB: Gelukkig is dat niet meer de mode.",
     exampleSrc:"A: Women used to wear a corset.\nB: That must have been uncomfortable.\nA: Certainly, they could barely breathe.\nB: Fortunately that's no longer in fashion.",
     funFact:"Corsets were common in the Netherlands until the early 1900s. Dutch feminists were among the first to campaign against them."},

    {type:"teach", trg:"de kluis", src:"the safe / vault", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kluizen' (old Dutch: to lock away).\n'De bankkluis' = the bank vault.",
     example:"A: Bewaar je je paspoort in de kluis?\nB: Ja, samen met de sieraden.\nA: Welke code heb je ingesteld?\nB: Dat vertel ik alleen aan jou!",
     exampleSrc:"A: Do you keep your passport in the safe?\nB: Yes, together with the jewellery.\nA: What code did you set?\nB: I'll only tell you!",
     funFact:"The Dutch word 'kluizenaar' (hermit) comes from the same root: someone who locks themselves away from the world."},

    {type:"teach", trg:"de kluts", src:"the composure / sense of direction", pos:"noun", gender:"c",
     note:"Common gender (de). 'De kluts kwijt zijn' = to be confused/lost.\nA very common Dutch expression.",
     example:"A: Ik ben helemaal de kluts kwijt.\nB: Wat is er aan de hand?\nA: Alles gaat tegelijk fout vandaag.\nB: Ga even zitten, dan praten we erover.",
     exampleSrc:"A: I've completely lost my bearings.\nB: What's going on?\nA: Everything is going wrong at the same time today.\nB: Sit down, and we'll talk about it.",
     funFact:"'De kluts kwijt zijn' literally means 'to have lost the kluts'. Originally, 'kluts' referred to the ability to beat eggs properly."},

    {type:"fb",
     s:"Na al die veranderingen ben ik helemaal de {1} kwijt.",
     a:["kluts"],
     opts:["kluts","kluis","kleedruimte","korset"],
     hint:"An expression meaning you have lost your sense of direction or composure.",
     sSrc:"After all those changes I have completely lost my {1}."},

    {type:"teach", trg:"de klos", src:"the spool / the one who suffers", pos:"noun", gender:"c",
     note:"Common gender (de). A spool for thread.\n'De klos zijn' = to be the fall guy/victim.",
     example:"A: Wie is er weer de klos?\nB: Ik natuurlijk, zoals altijd.\nA: Dat is niet eerlijk.\nB: Nee, maar zo gaat het altijd.",
     exampleSrc:"A: Who got the short end of the stick again?\nB: Me of course, as always.\nA: That's not fair.\nB: No, but that's how it always goes.",
     funFact:"'De klos zijn' (to be the spool) means to be the unlucky one. The expression may come from a game where the person near the spool lost."},

    {type:"teach", trg:"de kubus", src:"the cube", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'cubus'.\nA geometric shape with six equal faces.",
     example:"A: Ken je de kubuswoningen in Rotterdam?\nB: Ja, die gele huizen op palen!\nA: Zou je er willen wonen?\nB: Misschien, maar de ruimte is beperkt.",
     exampleSrc:"A: Do you know the cube houses in Rotterdam?\nB: Yes, those yellow houses on poles!\nA: Would you want to live there?\nB: Maybe, but the space is limited.",
     funFact:"The Cube Houses in Rotterdam were designed by architect Piet Blom in 1984. Each house is a tilted cube on a hexagonal pylon."},

    {type:"mc",
     q:"'De klos zijn' betekent:",
     opts:["Aan de beurt zijn","De pechvogel zijn, het slachtoffer zijn","De winnaar zijn","De baas zijn"],
     ans:"De pechvogel zijn, het slachtoffer zijn",
     hint:"The spool is the one who gets the bad deal. The unlucky person in a situation."},

    {type:"fb",
     s:"Ze bewaart haar waardevolle spullen in een {1} op haar slaapkamer.",
     a:["kluis"],
     opts:["kluis","kluts","klos","kubus"],
     hint:"A secure, locked container for valuables like jewellery and documents.",
     sSrc:"She keeps her valuable items in a {1} in her bedroom."},

    {type:"match", pairs:[
      {trg:"huizenruil", src:"house swap"},
      {trg:"ijskast", src:"fridge"},
      {trg:"kleedruimte", src:"changing room"},
      {trg:"kantoorleven", src:"office life"}
    ]},

    {type:"tip", title:"Dutch Idioms with Household Objects",
     text:"Dutch has many expressions using everyday household items:\n\n'De kluts kwijt zijn' = to be confused/lost\n'De klos zijn' = to be the fall guy\n'In de ijskast zetten' = to put on hold\n'Uit de kast komen' = to come out (of the closet)\n'Op de kast jagen' = to drive someone crazy\n\nHousehold vocabulary is deeply embedded in Dutch expressions. Learning the literal meaning helps you remember the figurative one.",
     deepDive:{title:"More household idioms",
      text:"More Dutch household expressions:\n\n'Onder de pannen zijn' = to have found housing (literally: under the roof tiles)\n'Van de pot gerukt' = crazy/absurd (literally: pulled from the pot)\n'Niet pluis' = something fishy/not right\n'De deur platlopen' = to visit constantly (literally: to wear out the door)\n'Schoon schip maken' = to make a clean start\n\nThese expressions reflect the Dutch focus on the home. 'Gezelligheid' (cosiness) starts at home."}},

    {type:"mc",
     q:"Wie ontwierp de kubuswoningen in Rotterdam?",
     opts:["Rem Koolhaas","Piet Blom","Gerrit Rietveld","Hendrik Berlage"],
     ans:"Piet Blom",
     hint:"His first name is also a common Dutch name for a man. Think of Mondriaan's first name."},

    {type:"fb",
     s:"Dit jaar doen we een {1} met een Spaans gezin.",
     a:["huizenruil"],
     opts:["huizenruil","ijskast","kantoorleven","kleedruimte"],
     hint:"Exchanging homes with another family for a holiday period.",
     sSrc:"This year we're doing a {1} with a Spanish family."},

    {type:"match", pairs:[
      {trg:"kluts", src:"composure (de kluts kwijt)"},
      {trg:"klos", src:"fall guy (de klos zijn)"},
      {trg:"kluis", src:"safe / vault"},
      {trg:"kubus", src:"cube"}
    ]}
  ]
};
export default LESSON_8;
