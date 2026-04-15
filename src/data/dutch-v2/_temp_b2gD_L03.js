// L03: Klimaat en Milieu — Climate and Environment
const LESSON_3 = {
  id:"nlv2_b2gD_l03", title:"Klimaat en Milieu", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Climate and Environment",
     desc:"The Netherlands faces unique environmental challenges. Learn to discuss climate change, sustainability, and environmental policy with precision and nuance.",
     goals:["Master 10 climate and environment terms","Discuss sustainability topics","Understand Dutch environmental vocabulary"]},

    {type:"teach", trg:"de klimaatverandering", src:"climate change", pos:"noun", gender:"c",
     note:"Common gender (de). Klimaat (climate) + verandering (change).\nThe central term in environmental discussions.",
     example:"A: Klimaatverandering is een groot probleem.\nB: Wat merken we ervan in Nederland?\nA: Meer extreme regenval en droogte.\nB: En de zeespiegel stijgt.",
     exampleSrc:"A: Climate change is a big problem.\nB: What do we notice of it in the Netherlands?\nA: More extreme rainfall and drought.\nB: And the sea level is rising.",
     funFact:"A quarter of the Netherlands lies below sea level. Climate change and rising seas are existential threats, making the Dutch world leaders in water management."},

    {type:"teach", trg:"de koolstofdioxide", src:"carbon dioxide (CO2)", pos:"noun", gender:"c",
     note:"Common gender (de). Koolstof (carbon) + dioxide.\n'CO2-uitstoot' = CO2 emissions.",
     example:"A: De koolstofdioxide-uitstoot moet omlaag.\nB: Hoeveel procent?\nA: Minstens vijftig procent voor 2030.\nB: Dat is ambitieus maar nodig.",
     exampleSrc:"A: Carbon dioxide emissions need to go down.\nB: By how much?\nA: At least fifty percent by 2030.\nB: That's ambitious but necessary.",
     funFact:"'Koolstof' literally means 'coal-substance'. Dutch often uses 'CO2' in speech, but 'koolstofdioxide' appears in formal and scientific texts."},

    {type:"teach", trg:"de klimaatdeskundige", src:"the climate expert", pos:"noun", gender:"c",
     note:"Common gender (de). Klimaat (climate) + deskundige (expert).\n'Een internationaal erkende deskundige' = an internationally recognised expert.",
     example:"A: De klimaatdeskundige waarschuwt voor overstromingen.\nB: In welk gebied?\nA: Vooral in de rivierendelta.\nB: Moeten we dijken verhogen?",
     exampleSrc:"A: The climate expert warns of floods.\nB: In which area?\nA: Especially in the river delta.\nB: Do we need to raise the dykes?",
     funFact:"Dutch climate scientists work at Deltares and KNMI, world-renowned institutions. Their expertise in water and climate is exported globally."},

    {type:"teach", trg:"de kringloop", src:"the cycle / recycling circuit / thrift store", pos:"noun", gender:"c",
     note:"Common gender (de). Kring (circle) + loop (course/run).\nAlso short for 'kringloopwinkel' (thrift shop).",
     example:"A: Breng je die spullen naar de kringloop?\nB: Ja, er zit nog goed meubilair bij.\nA: Misschien vind ik daar iets leuks.\nB: Dat is het leuke van tweedehands winkelen.",
     exampleSrc:"A: Are you bringing those things to the thrift store?\nB: Yes, there's still good furniture in there.\nA: Maybe I'll find something nice there.\nB: That's the fun of second-hand shopping.",
     funFact:"Dutch 'kringloopwinkels' are incredibly popular. They sell donated items cheaply, combining sustainability with bargain-hunting. Nearly every town has one."},

    {type:"mc",
     q:"Waarom is klimaatverandering extra belangrijk voor Nederland?",
     opts:["Omdat een kwart van het land onder zeeniveau ligt","Omdat Nederland veel bergen heeft","Omdat het er nooit regent","Omdat Nederland geen rivieren heeft"],
     ans:"Omdat een kwart van het land onder zeeniveau ligt",
     hint:"The Netherlands' geography makes rising sea levels an existential concern. Think about what lies below the waterline."},

    {type:"teach", trg:"de kleurstof", src:"the dye / colouring agent", pos:"noun", gender:"c",
     note:"Common gender (de). Kleur (colour) + stof (substance).\n'Kunstmatige kleurstoffen' = artificial colouring agents.",
     example:"A: Zit er kleurstof in dit product?\nB: Nee, alleen natuurlijke ingredienten.\nA: Mooi, ik vermijd kunstmatige kleurstoffen.\nB: Dat doen steeds meer mensen.",
     exampleSrc:"A: Is there colouring in this product?\nB: No, only natural ingredients.\nA: Good, I avoid artificial colourings.\nB: More and more people do.",
     funFact:"E-numbers for food colourings are a hot topic in the Netherlands. Many Dutch consumers actively check labels for 'kunstmatige kleurstoffen'."},

    {type:"teach", trg:"het ecoplan", src:"the eco plan / environmental plan", pos:"noun", gender:"n",
     note:"Neuter (het). Eco (ecological) + plan.\n'Een duurzaam ecoplan' = a sustainable eco plan.",
     example:"A: De gemeente heeft een nieuw ecoplan gepresenteerd.\nB: Wat staat erin?\nA: Meer zonnepanelen en minder auto's.\nB: Klinkt als een goed begin.",
     exampleSrc:"A: The municipality has presented a new eco plan.\nB: What's in it?\nA: More solar panels and fewer cars.\nB: Sounds like a good start.",
     funFact:"Many Dutch municipalities have 'ecoplannen' targeting climate neutrality by 2050. Amsterdam aims to ban all petrol and diesel cars from the city centre."},

    {type:"teach", trg:"de kruising", src:"the crossing / crossroads / crossbreed", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kruisen' (to cross).\nMultiple meanings: traffic crossing, animal crossbreed, or plant hybrid.",
     example:"A: Bij de kruising moet je linksaf.\nB: De kruising met de Hoofdstraat?\nA: Ja, daar staat een verkeerslicht.\nB: Ik zie het, bedankt!",
     exampleSrc:"A: At the crossing you need to turn left.\nB: The crossing with the Hoofdstraat?\nA: Yes, there's a traffic light there.\nB: I see it, thanks!",
     funFact:"Dutch traffic crossings ('kruisingen') often feature separate lanes for bikes, cars, and pedestrians, reflecting the country's cycling-first infrastructure."},

    {type:"fb",
     s:"De {1} adviseerde de regering om sneller te handelen tegen de opwarming.",
     a:["klimaatdeskundige"],
     opts:["klimaatdeskundige","klimaatverandering","koolstofdioxide","kringloop"],
     hint:"A professional expert on climate matters. Compound: climate + expert (deskundige).",
     sSrc:"The {1} advised the government to act faster against global warming."},

    {type:"teach", trg:"de kentering", src:"the turning point / reversal", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kenteren' (to capsize/turn).\nOriginally a nautical term for tide turning.",
     example:"A: Er is een kentering in het klimaatbeleid.\nB: Eindelijk, na al die jaren.\nA: Bedrijven investeren nu in duurzaamheid.\nB: De druk van consumenten helpt.",
     exampleSrc:"A: There is a turning point in climate policy.\nB: Finally, after all those years.\nA: Companies are now investing in sustainability.\nB: Consumer pressure helps.",
     funFact:"'Kentering' originally referred to the moment a ship capsizes or the tide turns. The nautical origin reflects the Netherlands' seafaring history."},

    {type:"teach", trg:"de knelpunt", src:"the bottleneck / problem area", pos:"noun", gender:"n",
     note:"Neuter (het). Knel (pinch/squeeze) + punt (point).\n'Knelpunten aanpakken' = to tackle bottlenecks.",
     example:"A: Wat zijn de knelpunten in het klimaatplan?\nB: Te weinig budget en te weinig personeel.\nA: Dat zijn bekende problemen.\nB: We moeten prioriteiten stellen.",
     exampleSrc:"A: What are the bottlenecks in the climate plan?\nB: Too little budget and too few staff.\nA: Those are familiar problems.\nB: We need to set priorities.",
     funFact:"'Knelpunt' is one of the most-used words in Dutch policy documents. Every government report identifies 'knelpunten' to be addressed."},

    {type:"match", pairs:[
      {trg:"klimaatverandering", src:"climate change"},
      {trg:"kringloop", src:"recycling / thrift store"},
      {trg:"kentering", src:"turning point"},
      {trg:"knelpunt", src:"bottleneck"},
      {trg:"kleurstof", src:"dye / colouring"}
    ]},

    {type:"mc",
     q:"Wat betekent 'kringloop' in de context van winkelen?",
     opts:["Een tweedehandswinkel","Een supermarkt","Een online webshop","Een marktplein"],
     ans:"Een tweedehandswinkel",
     hint:"Short for 'kringloopwinkel'. These shops sell donated second-hand items. Think circular economy."},

    {type:"fb",
     s:"Het grootste {1} bij de energietransitie is het gebrek aan geschoold personeel.",
     a:["knelpunt"],
     opts:["knelpunt","ecoplan","kruising","kentering"],
     hint:"A problem area or obstacle that slows progress. Literally a 'pinch point'.",
     sSrc:"The biggest {1} in the energy transition is the lack of skilled personnel."}
  ]
};
export default LESSON_3;
