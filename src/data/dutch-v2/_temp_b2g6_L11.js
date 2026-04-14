// L11: Hotels, Travel, and Hospitality
const LESSON_11 = {
  id:"nlv2_b2g6_l11", title:"Hotels en Gastvrijheid", icon:"\uD83C\uDFE8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Hotels, Travel, and Hospitality",
     desc:"Learn vocabulary about the Dutch hospitality industry, from hotel management to travel terminology. The Netherlands is a major tourist destination with a rich hotel tradition.",
     goals:["Learn 10 hotel and hospitality terms","Discuss travel and accommodation","Understand Dutch tourism vocabulary"]},

    {type:"teach", trg:"de hoteldirectie", src:"the hotel management", pos:"noun", gender:"c",
     note:"Compound: hotel + directie (management, board).\nThe people who run the hotel.",
     example:"A: De hoteldirectie heeft de klacht serieus genomen.\nB: Wat was het probleem?\nA: De kamer was niet schoongemaakt.\nB: Dat is niet acceptabel.",
     exampleSrc:"A: The hotel management took the complaint seriously.\nB: What was the problem?\nA: The room had not been cleaned.\nB: That is not acceptable.",
     funFact:"Dutch hotels consistently rank high in European service surveys. The tradition of hospitality dates back to the Golden Age coaching inns."},

    {type:"teach", trg:"de hotelgast", src:"the hotel guest", pos:"noun", gender:"c",
     note:"Compound: hotel + gast (guest).\nThe person staying at the hotel.",
     example:"A: De hotelgast heeft een klacht ingediend.\nB: Waarover?\nA: Het ontbijt was koud.\nB: Dat moeten we meteen oplossen.",
     exampleSrc:"A: The hotel guest has filed a complaint.\nB: About what?\nA: The breakfast was cold.\nB: We need to resolve that immediately.",
     funFact:"Dutch hotels are famous for their breakfast buffets. The traditional Dutch hotel breakfast includes fresh bread, cheese, ham, eggs, and hagelslag."},

    {type:"teach", trg:"de hotelketen", src:"the hotel chain", pos:"noun", gender:"c",
     note:"Compound: hotel + keten (chain).\nA group of hotels under one brand.",
     example:"A: Welke hotelketen beveel je aan?\nB: Het hangt van je budget af.\nA: Iets in het middensegment.\nB: Dan zou ik Van der Valk proberen.",
     exampleSrc:"A: Which hotel chain do you recommend?\nB: It depends on your budget.\nA: Something mid-range.\nB: Then I would try Van der Valk.",
     funFact:"Van der Valk, recognizable by its toucan logo, is the largest family-owned hotel chain in the Netherlands with over 100 locations."},

    {type:"teach", trg:"de hotelkosten", src:"the hotel costs", pos:"noun", gender:"c",
     note:"Compound: hotel + kosten (costs).\nAlways plural: kosten. The expenses for accommodation.",
     example:"A: De hotelkosten voor de conferentie zijn hoog.\nB: Hoeveel per nacht?\nA: Tweehonderd euro in het centrum.\nB: Misschien een hotel buiten de stad?",
     exampleSrc:"A: The hotel costs for the conference are high.\nB: How much per night?\nA: Two hundred euros in the center.\nB: Maybe a hotel outside the city?",
     funFact:"Amsterdam hotel prices are among the highest in Europe. During peak season, prices can triple compared to off-season rates."},

    {type:"teach", trg:"de hostess", src:"the hostess, the receptionist", pos:"noun", gender:"c",
     note:"English loanword. Used for event hostesses and receptionists.\nThe male form is rarely used.",
     example:"A: De hostess verwelkomde ons bij de ingang.\nB: Was ze vriendelijk?\nA: Heel professioneel en hartelijk.\nB: Dat maakt een goede eerste indruk.",
     exampleSrc:"A: The hostess welcomed us at the entrance.\nB: Was she friendly?\nA: Very professional and warm.\nB: That makes a good first impression.",
     funFact:"In the Netherlands, 'hostess' is used at events, trade fairs, and corporate functions. It carries no negative connotation in Dutch."},

    {type:"mc",
     q:"Wat is een 'hotelketen'?",
     opts:["Een groep hotels onder hetzelfde merk","Een ketting die in een hotel hangt","De keuken van een hotel","Een hotelboekingswebsite"],
     ans:"Een groep hotels onder hetzelfde merk",
     hint:"A 'keten' is a chain. Combined with 'hotel', it describes multiple hotels operating under one brand."},

    {type:"teach", trg:"de hoofdwond", src:"the head wound", pos:"noun", gender:"c",
     note:"Compound: hoofd (head) + wond (wound).\nA medical term for an injury to the head.",
     example:"A: Het slachtoffer had een hoofdwond.\nB: Was het ernstig?\nA: Het bloedde flink, maar het viel mee.\nB: Hoofdwonden bloeden altijd veel.",
     exampleSrc:"A: The victim had a head wound.\nB: Was it serious?\nA: It bled a lot, but it was not that bad.\nB: Head wounds always bleed a lot.",
     funFact:"The Dutch say 'hoofdwonden bloeden als een rund' (head wounds bleed like an ox), reflecting the dramatic bleeding that even minor scalp cuts cause."},

    {type:"teach", trg:"hoofs", src:"courtly, chivalrous", pos:"adj", gender:null,
     note:"From 'hof' (court). Related to courtly manners.\nAn elegant, somewhat old-fashioned word.",
     example:"A: Hij gedroeg zich heel hoofs tegenover haar.\nB: Op welke manier?\nA: Hij opende de deur en bood haar een stoel aan.\nB: Dat is tegenwoordig zeldzaam.",
     exampleSrc:"A: He behaved very courteously toward her.\nB: In what way?\nA: He opened the door and offered her a chair.\nB: That is rare nowadays.",
     funFact:"'Hoofse liefde' (courtly love) is a medieval literary concept from the Low Countries. Hendrik van Veldeke wrote some of the earliest examples."},

    {type:"teach", trg:"hoogachten", src:"to hold in high esteem, to respect greatly", pos:"verb", gender:null,
     note:"Compound verb: hoog (high) + achten (to esteem).\nVery formal. Used in letters and speeches.",
     example:"A: Wij hoogachten uw bijdrage aan de wetenschap.\nB: Dat is heel vriendelijk van u.\nA: Het is welverdiend.\nB: Ik ben zeer vereerd.",
     exampleSrc:"A: We hold your contribution to science in high esteem.\nB: That is very kind of you.\nA: It is well deserved.\nB: I am very honored.",
     funFact:"Dutch formal letters end with 'Hoogachtend' (Respectfully yours), the most formal Dutch closing. It is standard in business correspondence."},

    {type:"fb",
     s:"De {1} heeft een klacht ingediend over de schoonmaak.",
     a:["hotelgast"],
     opts:["hotelgast","hoteldirectie","hotelketen","hostess"],
     hint:"The person staying at the hotel. Compound of 'hotel' and 'gast' (guest).",
     sSrc:"The {1} has filed a complaint about the cleaning."},

    {type:"teach", trg:"de handkus", src:"the hand kiss", pos:"noun", gender:"c",
     note:"Compound: hand + kus (kiss).\nA courtly greeting gesture, now mostly ceremonial.",
     example:"A: De ambassadeur gaf haar een handkus.\nB: Is dat nog gebruikelijk?\nA: Alleen bij heel formele gelegenheden.\nB: Het is een oud gebaar.",
     exampleSrc:"A: The ambassador gave her a hand kiss.\nB: Is that still common?\nA: Only at very formal occasions.\nB: It is an old gesture.",
     funFact:"The handkus is rare in the Netherlands but still seen at diplomatic events. In Belgium, it is slightly more common in high society."},

    {type:"teach", trg:"de hoofdact", src:"the main act, the headliner", pos:"noun", gender:"c",
     note:"Compound: hoofd (main) + act (performance).\nThe star performer at a concert or festival.",
     example:"A: Wie is de hoofdact van het festival?\nB: Een beroemde Nederlandse DJ.\nA: Welke?\nB: Dat wordt morgen bekendgemaakt.",
     exampleSrc:"A: Who is the headliner of the festival?\nB: A famous Dutch DJ.\nA: Which one?\nB: That will be announced tomorrow.",
     funFact:"The Netherlands produces more famous DJs per capita than any other country. Tiesto, Armin van Buuren, and Martin Garrix are all Dutch."},

    {type:"mc",
     q:"Wat betekent 'hoogachten'?",
     opts:["Iemand zeer respecteren en waarderen","Iets hoog optillen","Van grote hoogte naar beneden kijken","Heel hard nadenken"],
     ans:"Iemand zeer respecteren en waarderen",
     hint:"Compound of 'hoog' (high) and 'achten' (to esteem). A very formal way to express respect."},

    {type:"match", pairs:[
      {trg:"hoteldirectie", src:"hotel management"},
      {trg:"hotelgast", src:"hotel guest"},
      {trg:"hotelketen", src:"hotel chain"},
      {trg:"hotelkosten", src:"hotel costs"}
    ]},

    {type:"fb",
     s:"De brief eindigde met '{1}, mevrouw de directeur'.",
     a:["Hoogachtend"],
     opts:["Hoogachtend","Hartelijk","Hoopvol","Hoffelijk"],
     hint:"The most formal Dutch letter closing, derived from the verb 'hoogachten' (to hold in high esteem).",
     sSrc:"The letter ended with '{1}, Madam Director'."},

    {type:"mc",
     q:"Wie is de 'hoofdact' op een festival?",
     opts:["De belangrijkste artiest die optreedt","De eerste band die speelt","De geluidsinstallatietechnicus","De festivaldirecteur"],
     ans:"De belangrijkste artiest die optreedt",
     hint:"'Hoofd' means main and 'act' means performance. The star attraction of the event."}
  ]
};
export default LESSON_11;
