// L09: Shopping, 20 A1 gap words
const LESSON_9 = {
  id:"nlv2_a1gap_l9", title:"Boodschappen Doen", icon:"\u{1F6D2}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Shopping",
     desc:"Learn Dutch shopping vocabulary. Navigate stores, pay, and find what you need.",
     goals:["Master 20 shopping-related words","Buy items and handle money in Dutch","Understand store and payment vocabulary"]},

    {type:"teach", trg:"het geld", src:"the money", pos:"noun", gender:"n",
     note:"Neuter noun (het). Uncountable.",
     example:"A: Heb je genoeg geld?\nB: Ja, ik heb twintig euro.",
     exampleSrc:"A: Do you have enough money?\nB: Yes, I have twenty euros.",
     funFact:"Cognate with English 'geld' (old form of 'gold'). Money was once golden."},

    {type:"teach", trg:"de euro", src:"the euro", pos:"noun", gender:"c",
     note:"Common gender (de). The currency of the Netherlands.",
     example:"A: Dat kost vijf euro.\nB: Hier, alsjeblieft.",
     exampleSrc:"A: That costs five euros.\nB: Here you go.",
     funFact:"The Netherlands adopted the euro in 2002, replacing the gulden (guilder)."},

    {type:"teach", trg:"de dollar", src:"the dollar", pos:"noun", gender:"c",
     note:"Common gender (de). Not used in the Netherlands but widely known.",
     example:"A: Hoeveel is een dollar in euro?\nB: Ongeveer 0,90 euro.",
     exampleSrc:"A: How much is a dollar in euros?\nB: About 0.90 euros.",
     funFact:"The word 'dollar' originally comes from Dutch/German 'daler' (thaler)."},

    {type:"teach", trg:"de kassa", src:"the cash register / checkout", pos:"noun", gender:"c",
     note:"Common gender (de). Where you pay in a store.",
     example:"A: Ga naar de kassa.\nB: Er staat een lange rij!",
     exampleSrc:"A: Go to the checkout.\nB: There's a long line!",
     funFact:"From Italian 'cassa' (box/case). Where the money box sits."},

    {type:"mc",
     q:"Waar betaal je in de supermarkt?",
     opts:["bij de kassa","in de keuken","op het balkon","in de berging"],
     ans:"bij de kassa",
     hint:"Where in a store do you hand over your money? The checkout area."},

    {type:"teach", trg:"de korting", src:"the discount", pos:"noun", gender:"c",
     note:"Common gender (de). 'Korting krijgen' = to get a discount.",
     example:"A: Is er korting?\nB: Ja, twintig procent!",
     exampleSrc:"A: Is there a discount?\nB: Yes, twenty percent!",
     funFact:"From 'kort' (short). Making the price shorter. The Dutch love a good deal!"},

    {type:"teach", trg:"de klant", src:"the customer", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: klanten.",
     example:"A: De klant heeft altijd gelijk.\nB: Denk je dat echt?",
     exampleSrc:"A: The customer is always right.\nB: Do you really think so?",
     funFact:"'De klant is koning' (The customer is king) is the Dutch version of the saying."},

    {type:"teach", trg:"de bakker", src:"the baker / bakery", pos:"noun", gender:"c",
     note:"Common gender (de). Both the person and the shop.",
     example:"A: Ik ga naar de bakker.\nB: Neem een brood mee!",
     exampleSrc:"A: I'm going to the bakery.\nB: Bring back a loaf of bread!",
     funFact:"Dutch bakeries are famous for fresh bread, kroketten, and pastries."},

    {type:"teach", trg:"de groentewinkel", src:"the vegetable shop / greengrocer", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: groente (vegetable) + winkel (shop).",
     example:"A: Ga je naar de groentewinkel?\nB: Ja, ik heb tomaten nodig.",
     exampleSrc:"A: Are you going to the greengrocer?\nB: Yes, I need tomatoes.",
     funFact:"Still common in the Netherlands alongside supermarkets. Fresh and local."},

    {type:"teach", trg:"de kilo", src:"the kilogram", pos:"noun", gender:"c",
     note:"Common gender (de). Standard weight measure.",
     example:"A: Een kilo appels, alsjeblieft.\nB: Dat is twee euro vijftig.",
     exampleSrc:"A: A kilo of apples, please.\nB: That's two euros fifty.",
     funFact:"The Netherlands uses metric. Everything is in kilos, not pounds."},

    {type:"fb",
     s:"Mag ik een {1} appels, alsjeblieft?",
     a:["kilo"],
     opts:["kilo","euro","kassa","korting"],
     hint:"Which unit of weight do you use when buying fruit at the market?",
     sSrc:"May I have a {1} of apples, please?"},

    {type:"teach", trg:"de fles", src:"the bottle", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: flessen.",
     example:"A: Wil je een fles water?\nB: Ja, graag.",
     exampleSrc:"A: Do you want a bottle of water?\nB: Yes, please.",
     funFact:"Cognate with English 'flask'. Same root word across Germanic languages."},

    {type:"teach", trg:"het bord", src:"the plate / sign", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plate (for food) or sign (on a wall).",
     example:"A: Zet de borden op tafel.\nB: Hoeveel borden?",
     exampleSrc:"A: Put the plates on the table.\nB: How many plates?",
     funFact:"Means both 'plate' and 'sign/board'. Cognate with English 'board'."},

    {type:"teach", trg:"de doos", src:"the box", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: dozen.",
     example:"A: Doe het in een doos.\nB: Oké, een grote of kleine doos?",
     exampleSrc:"A: Put it in a box.\nB: Okay, a big or small box?",
     funFact:"Plural 'dozen' is also an English word meaning 12. Complete coincidence!"},

    {type:"teach", trg:"de boodschap", src:"the message / errand", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: boodschappen (also = groceries).",
     example:"A: Ik ga boodschappen doen.\nB: Neem je melk mee?",
     exampleSrc:"A: I'm going grocery shopping.\nB: Will you bring milk?",
     funFact:"'Boodschappen doen' = to do groceries. One of the first phrases you need!"},

    {type:"teach", trg:"het cadeau", src:"the gift / present", pos:"noun", gender:"n",
     note:"Neuter noun (het). From French.",
     example:"A: Wat een mooi cadeau!\nB: Dank je, ik hoop dat je het leuk vindt.",
     exampleSrc:"A: What a beautiful gift!\nB: Thanks, I hope you like it.",
     funFact:"From French 'cadeau'. The Dutch love giving gifts, especially for Sinterklaas."},

    {type:"mc",
     q:"'Boodschappen doen' betekent ___.",
     opts:["geld betalen","boodschappen kopen","een cadeau geven","naar de bakker gaan"],
     ans:"boodschappen kopen",
     hint:"This phrase is about a routine household task involving a store and groceries."},

    {type:"teach", trg:"gratis", src:"free (of charge)", pos:"adj", gender:null,
     note:"From Latin. No cost. 'Het is gratis!' = It's free!",
     example:"A: Is dat gratis?\nB: Ja, helemaal gratis!",
     exampleSrc:"A: Is that free?\nB: Yes, completely free!",
     funFact:"From Latin 'gratis' (for thanks). Same word in many European languages."},

    {type:"teach", trg:"extra", src:"extra / additional", pos:"adj", gender:null,
     note:"International word. Same meaning as English.",
     example:"A: Wil je extra kaas?\nB: Ja, graag!",
     exampleSrc:"A: Do you want extra cheese?\nB: Yes, please!",
     funFact:"From Latin 'extra'. Truly international word, used everywhere."},

    {type:"teach", trg:"exclusief", src:"exclusive / excluding", pos:"adj", gender:null,
     note:"Can mean 'exclusive' or 'excluding' (e.g., price ex. tax).",
     example:"A: De prijs is exclusief verzending.\nB: Hoeveel kost de verzending?",
     exampleSrc:"A: The price is excluding shipping.\nB: How much does shipping cost?",
     funFact:"From Latin 'exclusivus'. In Dutch ads, 'excl.' often means 'not including'."},

    {type:"teach", trg:"het appelsap", src:"the apple juice", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: appel (apple) + sap (juice).",
     example:"A: Wil je appelsap?\nB: Ja, lekker! Een groot glas graag.",
     exampleSrc:"A: Do you want apple juice?\nB: Yes, delicious! A big glass please.",
     funFact:"A common drink for children and adults alike. Transparent compound."},

    {type:"match", pairs:[
      {trg:"kassa", src:"checkout"},
      {trg:"korting", src:"discount"},
      {trg:"boodschap", src:"errand / groceries"},
      {trg:"cadeau", src:"gift"}
    ]}
  ]
};
export default LESSON_9;
