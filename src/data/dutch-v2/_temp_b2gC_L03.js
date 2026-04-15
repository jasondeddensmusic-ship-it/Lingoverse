// L03: Klimaat en Milieu — Climate and Environment
const LESSON_3 = {
  id:"nlv2_b2gC_l3", title:"Klimaat en Milieu", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Climate and Environment",
     desc:"The Netherlands faces unique environmental challenges. Learn the vocabulary of climate change, sustainability, and environmental policy that fills Dutch news daily.",
     goals:["Master 12 climate and environment terms","Discuss sustainability and policy","Understand Dutch environmental debates"]},

    {type:"teach", trg:"de klimaatverandering", src:"climate change", pos:"noun", gender:"c",
     note:"Common gender (de). Klimaat (climate) + verandering (change).\nThe defining issue of our time.",
     example:"A: Klimaatverandering is een groot probleem.\nB: Zeker, de zeespiegel stijgt.\nA: En Nederland ligt zo laag.\nB: Daarom investeren we in dijken.",
     exampleSrc:"A: Climate change is a big problem.\nB: Certainly, the sea level is rising.\nA: And the Netherlands lies so low.\nB: That's why we invest in dikes.",
     funFact:"About a quarter of the Netherlands lies below sea level. Climate change is an existential concern, not just politics."},

    {type:"teach", trg:"de koolstofdioxide", src:"carbon dioxide", pos:"noun", gender:"c",
     note:"Common gender (de). Koolstof (carbon) + dioxide.\nOften abbreviated to CO2 in Dutch too.",
     example:"A: Hoeveel koolstofdioxide stoten we uit?\nB: Te veel, volgens de wetenschappers.\nA: Wat kunnen we doen?\nB: Minder vliegen, meer fietsen!",
     exampleSrc:"A: How much carbon dioxide do we emit?\nB: Too much, according to the scientists.\nA: What can we do?\nB: Fly less, cycle more!",
     funFact:"The Dutch word 'koolstof' literally means 'coal material'. 'Kool' = coal/cabbage, 'stof' = material/substance."},

    {type:"teach", trg:"de klimaatdeskundige", src:"the climate expert", pos:"noun", gender:"c",
     note:"Common gender (de). Klimaat (climate) + deskundige (expert).\n'Deskundig' = expert/knowledgeable.",
     example:"A: De klimaatdeskundige waarschuwt voor overstromingen.\nB: In welk gebied?\nA: Vooral in de rivierendelta.\nB: Dat is precies waar wij wonen!",
     exampleSrc:"A: The climate expert warns of flooding.\nB: In which area?\nA: Especially in the river delta.\nB: That's exactly where we live!",
     funFact:"Dutch climate experts are world-renowned. The Dutch water management expertise is exported to countries like Bangladesh and the US."},

    {type:"teach", trg:"de kringloop", src:"the cycle / circular economy / thrift shop", pos:"noun", gender:"c",
     note:"Common gender (de). Kring (circle) + loop (course/run).\nDouble meaning: natural cycle AND second-hand shop.",
     example:"A: Ik heb dit bij de kringloop gekocht.\nB: Serieus? Het ziet er nieuw uit!\nA: Ja, en het kostte maar vijf euro.\nB: Ik ga er ook eens kijken.",
     exampleSrc:"A: I bought this at the thrift shop.\nB: Seriously? It looks new!\nA: Yes, and it only cost five euros.\nB: I should check it out too.",
     funFact:"'Kringloopwinkels' (thrift shops) are hugely popular in the Netherlands. They sell second-hand goods and support recycling culture."},

    {type:"mc",
     q:"'De kringloop' kan twee dingen betekenen. Welke?",
     opts:["Een winkel en een school","Een natuurlijke cyclus en een tweedehandswinkel","Een fietspad en een snelweg","Een politiek debat en een wet"],
     ans:"Een natuurlijke cyclus en een tweedehandswinkel",
     hint:"Think cycle: one meaning is scientific (water cycle), the other is about reusing goods."},

    {type:"teach", trg:"de kleurstof", src:"the dye / colouring agent", pos:"noun", gender:"c",
     note:"Common gender (de). Kleur (colour) + stof (substance).\n'Kunstmatige kleurstof' = artificial colouring.",
     example:"A: Bevat dit voedsel kleurstof?\nB: Nee, alleen natuurlijke ingredienten.\nA: Mooi, ik let daar goed op.\nB: Ik ook, het staat op het etiket.",
     exampleSrc:"A: Does this food contain colouring?\nB: No, only natural ingredients.\nA: Good, I pay close attention to that.\nB: Me too, it's on the label.",
     funFact:"The Dutch word 'stof' means both 'substance' and 'fabric/dust'. Context decides: kleurstof (dye), stofzuiger (vacuum cleaner)."},

    {type:"teach", trg:"de kentering", src:"the turning point / shift", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kenteren' (to turn/capsize).\nOriginally a maritime term for tidal shift.",
     example:"A: Er is een kentering in het klimaatdebat.\nB: Hoe bedoel je?\nA: Meer mensen nemen het serieus.\nB: Dat werd tijd!",
     exampleSrc:"A: There is a turning point in the climate debate.\nB: What do you mean?\nA: More people are taking it seriously.\nB: About time!",
     funFact:"Originally a sailing term: 'kenteren' means when a ship capsizes or when the tide turns. Now used figuratively for any major shift."},

    {type:"teach", trg:"de kruising", src:"the crossing / crossroads / hybrid", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kruisen' (to cross).\nUsed for road intersections AND biological crossbreeding.",
     example:"A: Op de kruising moet je linksaf.\nB: Bij het stoplicht?\nA: Ja, en dan zie je het park.\nB: Dank je, ik vind het wel.",
     exampleSrc:"A: At the crossing you need to turn left.\nB: At the traffic light?\nA: Yes, and then you'll see the park.\nB: Thanks, I'll find it.",
     funFact:"In biology, 'kruising' means a cross-breed or hybrid. In traffic, it means an intersection. Both share the concept of things meeting."},

    {type:"fb",
     s:"De uitstoot van {1} moet omlaag om de aarde te beschermen.",
     a:["koolstofdioxide"],
     opts:["koolstofdioxide","kleurstof","klimaatverandering","kentering"],
     hint:"The specific greenhouse gas, also known as CO2.",
     sSrc:"The emissions of {1} must come down to protect the earth."},

    {type:"teach", trg:"de kuststreek", src:"the coastal region", pos:"noun", gender:"c",
     note:"Common gender (de). Kust (coast) + streek (region/area).\n'De kust' = the coast.",
     example:"A: Woon je in de kuststreek?\nB: Ja, we wonen vlak bij het strand.\nA: Is dat niet koud in de winter?\nB: Soms, maar de zeelucht is heerlijk.",
     exampleSrc:"A: Do you live in the coastal region?\nB: Yes, we live close to the beach.\nA: Isn't that cold in the winter?\nB: Sometimes, but the sea air is wonderful.",
     funFact:"The Dutch coastline stretches about 450 kilometres. The 'kuststreek' is vital for tourism, fishing, and flood defence."},

    {type:"teach", trg:"het kustwater", src:"the coastal waters", pos:"noun", gender:"n",
     note:"Neuter (het). Kust (coast) + water (water).\nOften plural: 'de kustwateren'.",
     example:"A: De kustwateren zijn vervuild.\nB: Door welke stoffen?\nA: Plastics en chemische afvalstoffen.\nB: Dat is verschrikkelijk voor het zeeleven.",
     exampleSrc:"A: The coastal waters are polluted.\nB: By which substances?\nA: Plastics and chemical waste.\nB: That is terrible for marine life.",
     funFact:"Dutch coastal waters are part of the North Sea, one of the busiest shipping lanes in the world. Pollution is a major concern."},

    {type:"teach", trg:"het knelpunt", src:"the bottleneck / problem area", pos:"noun", gender:"n",
     note:"Neuter (het). Knel (pinch/squeeze) + punt (point).\n'Knelpunten aanpakken' = to address bottlenecks.",
     example:"A: Wat zijn de knelpunten van het klimaatbeleid?\nB: Vooral de kosten en de draagvlak.\nA: Mensen willen wel, maar het moet betaalbaar zijn.\nB: Precies, dat is het grootste knelpunt.",
     exampleSrc:"A: What are the bottlenecks of the climate policy?\nB: Mainly the costs and public support.\nA: People want to, but it needs to be affordable.\nB: Exactly, that's the biggest bottleneck.",
     funFact:"The word 'knelpunt' literally means 'pinch point'. It is widely used in Dutch policy documents and business reports."},

    {type:"mc",
     q:"Wat is een 'knelpunt'?",
     opts:["Een groot succes","Een moeilijk punt dat opgelost moet worden","Een kruispunt op de weg","Een onderdeel van een machine"],
     ans:"Een moeilijk punt dat opgelost moet worden",
     hint:"'Knel' means squeeze or pinch. A point where things get stuck or difficult."},

    {type:"fb",
     s:"De {1} waarschuwt voor een zeespiegelstijging van 30 centimeter.",
     a:["klimaatdeskundige"],
     opts:["klimaatdeskundige","klimaatverandering","kringloop","kuststreek"],
     hint:"A person with specialised knowledge about climate science.",
     sSrc:"The {1} warns of a sea level rise of 30 centimetres."},

    {type:"match", pairs:[
      {trg:"klimaatverandering", src:"climate change"},
      {trg:"koolstofdioxide", src:"carbon dioxide"},
      {trg:"klimaatdeskundige", src:"climate expert"},
      {trg:"kringloop", src:"cycle / thrift shop"}
    ]},

    {type:"mc",
     q:"'Kentering' komt oorspronkelijk uit:",
     opts:["De politiek","De scheepvaart","De muziek","De sport"],
     ans:"De scheepvaart",
     hint:"Originally about ships and tides. When a vessel turns over or the tide shifts direction."},

    {type:"fb",
     s:"Op de {1} moet je goed uitkijken voor fietsers.",
     a:["kruising"],
     opts:["kruising","kentering","kringloop","kuststreek"],
     hint:"The place where two roads meet and traffic crosses.",
     sSrc:"At the {1} you must watch out carefully for cyclists."},

    {type:"match", pairs:[
      {trg:"kuststreek", src:"coastal region"},
      {trg:"knelpunt", src:"bottleneck"},
      {trg:"kleurstof", src:"dye / colouring"},
      {trg:"kentering", src:"turning point"}
    ]},

    {type:"mc",
     q:"Welk artikel hoort bij 'knelpunt'?",
     opts:["de","het","geen artikel nodig","beide zijn correct"],
     ans:"het",
     hint:"Words ending in '-punt' (point) are typically neuter: het standpunt, het knelpunt, het uitgangspunt."}
  ]
};
export default LESSON_3;
