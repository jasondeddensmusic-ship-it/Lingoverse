// B2 Gap Batch A — Lesson 10: Wonen & Vastgoed
// Theme: Housing, property, urban planning

const LESSON_10 = {id:"nlv2_b2gA_l10", title:"Wonen & Vastgoed", icon:"\u{1F3E0}", xp:40, board:true, steps:[
  {type:"intro", title:"Wonen & Vastgoed",
   desc:"Learn vocabulary about housing, property, and urban development. The Dutch housing market is a constant topic of debate, and these words will help you follow the conversation.",
   goals:["Learn housing and property vocabulary","Discuss urban planning and development","Understand Dutch residential terminology"]},

  {type:"teach", trg:"de inbraak", src:"burglary, break-in", pos:"noun", gender:"c",
   note:"Compound: in + braak (breaking). The act of breaking into a building.",
   example:"A: Er was gisteravond een inbraak bij de buren.\nB: Echt? Hebben ze iets gestolen?\nA: Ja, de laptop en wat sieraden.\nB: Dat is verschrikkelijk. Hebben ze de politie gebeld?",
   exampleSrc:"A: There was a burglary at the neighbours' last night.\nB: Really? Did they steal anything?\nA: Yes, the laptop and some jewellery.\nB: That's terrible. Did they call the police?",
   funFact:"Dutch police use the word 'woninginbraak' for residential burglary. The Netherlands has seen a significant decrease in inbraken since 2012, partly due to better locks and awareness campaigns."},

  {type:"teach", trg:"het kantoorvertrek", src:"office room, office space", pos:"noun", gender:"n",
   note:"Compound: kantoor + vertrek (room/space).\nhet-word. A specific room within a building used as an office.",
   example:"A: Mijn kantoorvertrek is op de derde verdieping.\nB: Heb je een eigen kamer?\nA: Ja, met uitzicht op het park.\nB: Dat is luxe! De meeste mensen zitten in een kantoortuin.",
   exampleSrc:"A: My office room is on the third floor.\nB: Do you have your own room?\nA: Yes, with a view of the park.\nB: That's luxury! Most people sit in an open-plan office.",
   funFact:"The word 'vertrek' has two meanings in Dutch: 'room/space' and 'departure'. Context always makes clear which is meant. A kantoorvertrek is always a room, never a departure!"},

  {type:"teach", trg:"de kade", src:"quay, wharf, embankment", pos:"noun", gender:"c",
   note:"From French 'quai'. The paved bank alongside water.\nAmsterdam has many famous kades.",
   example:"A: Laten we langs de kade wandelen.\nB: Goed idee. De kade bij de Amstel is prachtig.\nA: Daar zijn ook leuke terrassen.\nB: Perfect voor een drankje in de zon.",
   exampleSrc:"A: Let's walk along the quay.\nB: Good idea. The embankment by the Amstel is beautiful.\nA: There are also nice terraces there.\nB: Perfect for a drink in the sun.",
   funFact:"Amsterdam's grachten (canals) are lined with kades. The most famous is the Keizersgracht embankment. Many Dutch cities have a 'Kade' street name, reflecting their water-based history."},

  {type:"teach", trg:"de kavel", src:"plot of land, building lot", pos:"noun", gender:"c",
   note:"A measured piece of land for building or farming.\nUsed in real estate and urban planning.",
   example:"A: We hebben een kavel gekocht om een huis te bouwen.\nB: Wat een avontuur! Waar ligt de kavel?\nA: Aan de rand van het dorp.\nB: En hoe groot is het stuk grond?",
   exampleSrc:"A: We bought a plot of land to build a house.\nB: What an adventure! Where is the plot?\nA: On the edge of the village.\nB: And how big is the piece of land?",
   funFact:"In the Netherlands, kavels are extremely expensive due to limited space. The government carefully plans which kavels are designated for housing (woningbouw), agriculture, or nature."},

  {type:"teach", trg:"de hectare", src:"hectare", pos:"noun", gender:"c",
   note:"A unit of area equal to 10,000 square meters.\nStandard measurement for land in the Netherlands.",
   example:"A: De boerderij heeft vijftig hectare grond.\nB: Dat is best groot voor Nederlandse begrippen.\nA: Ja, de meeste boerderijen hier zijn kleiner.\nB: In Amerika zijn de boerderijen vaak honderden hectares.",
   exampleSrc:"A: The farm has fifty hectares of land.\nB: That's quite large by Dutch standards.\nA: Yes, most farms here are smaller.\nB: In America, farms are often hundreds of hectares.",
   funFact:"The Netherlands has about 3.4 million hectares of land area. Roughly half is used for agriculture. The Dutch have created tens of thousands of hectares through poldering (land reclamation from the sea)."},

  {type:"teach", trg:"de grootte", src:"size, magnitude", pos:"noun", gender:"c",
   note:"From 'groot' (big) + -te suffix. Abstract noun for the dimension of something.",
   example:"A: De grootte van het appartement is zestig vierkante meter.\nB: Dat is gemiddeld voor Amsterdam.\nA: De grootte van het probleem wordt onderschat.\nB: Dat hoor ik vaker.",
   exampleSrc:"A: The size of the apartment is sixty square meters.\nB: That's average for Amsterdam.\nA: The magnitude of the problem is underestimated.\nB: I hear that often.",
   funFact:"The -te suffix creates abstract nouns from adjectives: groot > grootte, breed > breedte, hoog > hoogte, diep > diepte. All -te nouns are de-words and describe a measurable quality."},

  {type:"tip", title:"Measuring and Describing Property",
   text:"Dutch property vocabulary uses specific terms:\n\n- kavel: plot of land (for building)\n- hectare: 10,000 m2 (for farms, parks)\n- grootte: general term for size\n- vierkante meter: square meter (m2)\n- oppervlakte: surface area\n\nThe -te suffix creates measurement nouns:\ngroot > grootte (size)\nhoog > hoogte (height)\nbreed > breedte (width)\nlang > lengte (length)",
   deepDive:{title:"The Dutch Housing Crisis",
    text:"The Dutch woningcrisis is one of the biggest political issues:\n\n- Shortage of ~400,000 homes\n- Average house price: over 400,000 euros\n- Building is slow due to lack of kavels and permits\n- Many starters (first-time buyers) are locked out\n- Rental market is also extremely tight\n\nWords like kavel, grootte, and hectare appear constantly in discussions about where and how to build more homes."}},

  {type:"mc", q:"Welk woord betekent 'plot of land'?",
   opts:["de kavel","de kade","de hectare","de grootte"],
   ans:"de kavel",
   hint:"A specific piece of land measured for building. Used in real estate."},

  {type:"fb", s:"Er was gisteravond een {1} bij de buren.",
   a:["inbraak"], opts:["inbraak","kavel","kade","grootte"],
   hint:"Someone broke into a building to steal things.",
   sSrc:"There was a burglary at the neighbours' last night."},

  {type:"mc", q:"Laten we langs de kade wandelen. Wat is een 'kade'?",
   opts:["a paved embankment alongside water","a type of bridge","a canal boat","a market square"],
   ans:"a paved embankment alongside water",
   hint:"From French 'quai'. The walkway along a canal or river."},

  {type:"fb", s:"De boerderij heeft vijftig {1} grond.",
   a:["hectare"], opts:["hectare","kavel","grootte","kade"],
   hint:"A unit of land measurement equal to 10,000 square meters.",
   sSrc:"The farm has fifty hectares of land."},

  {type:"match", pairs:[
    {trg:"inbraak", src:"burglary"},
    {trg:"kantoorvertrek", src:"office room"},
    {trg:"kade", src:"quay, embankment"},
    {trg:"kavel", src:"plot of land"},
    {trg:"hectare", src:"hectare"},
    {trg:"grootte", src:"size"}
  ]},

  {type:"mc", q:"De grootte van het appartement is zestig vierkante meter. Wat is 'grootte'?",
   opts:["size, magnitude","price","age","location"],
   ans:"size, magnitude",
   hint:"From 'groot' (big) + -te suffix. An abstract measurement of how big something is."},

  {type:"fb", s:"Mijn {1} is op de derde verdieping, met uitzicht op het park.",
   a:["kantoorvertrek"], opts:["kantoorvertrek","kantoorgebouw","kade","kavel"],
   hint:"A specific room (vertrek) within a building used for office work.",
   sSrc:"My office room is on the third floor, with a view of the park."},

  {type:"drag_fill", s:"We kochten een {1} van twee {2} om een huis te bouwen aan de {3}.",
   blanks:{"1":"kavel","2":"hectare","3":"kade"},
   pool:["kavel","hectare","kade","grootte","inbraak"],
   hint:"We bought a building plot measured in land units, located along the waterfront."}
]};
export default LESSON_10;
