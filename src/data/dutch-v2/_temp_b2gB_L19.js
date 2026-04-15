// Dutch B2 gapB Lesson 19 — Wonen en Bouwen
// Housing, architecture, and construction vocabulary

const LESSON_19 = {id:"nlv2_b2gB_l19", title:"Wonen en Bouwen", icon:"\u{1F3E0}", xp:25, board:true, steps:[
{type:"intro", title:"Wonen en Bouwen",
 desc:"Housing is one of the biggest topics in Dutch society. From tiny apartments to innovative architecture, learn the vocabulary of living spaces and construction.",
 goals:["8 housing and construction nouns","Discuss Dutch housing and architecture","Navigate real estate and building vocabulary"]},

{type:"teach", trg:"de kubuswoning", src:"cube house", pos:"noun", gender:"c",
 note:"Kubus (cube) + woning (dwelling).\nThe famous tilted houses in Rotterdam.",
 example:"A: De kubuswoningen zijn een toeristische attractie.\nB: Wonen er ook echt mensen?\nA: Ja, maar het is niet makkelijk meubileren.\nB: Alles staat scheef!",
 exampleSrc:"A: The cube houses are a tourist attraction.\nB: Do people actually live there?\nA: Yes, but it's not easy to furnish.\nB: Everything is tilted!",
 funFact:"The Rotterdam cube houses each sit on a tall hexagonal pylon and are tilted at 54.7 degrees. Inside, rooms have diagonal walls and angular ceilings."},

{type:"teach", trg:"de huizenruil", src:"house swap", pos:"noun", gender:"c",
 note:"Huizen (houses) + ruil (swap/exchange).\nA way to holiday by swapping homes.",
 example:"A: Wij doen aan huizenruil voor de vakantie.\nB: Hoe werkt dat?\nA: Wij wonen in hun huis, zij in het onze.\nB: Slim, dan bespaar je op het hotel.",
 exampleSrc:"A: We do house swapping for holidays.\nB: How does that work?\nA: We live in their house, they in ours.\nB: Smart, then you save on the hotel.",
 funFact:"House swapping originated in the 1950s among teachers who couldn't afford hotels. The Dutch platform HomeLink is one of the oldest."},

{type:"teach", trg:"de dakker", src:"roofer / thatcher", pos:"noun", gender:"c",
 note:"From 'dak' (roof). A person who works on roofs.\n'De dakdekker' is the more common term.",
 example:"A: We hebben een dakker nodig.\nB: Wat is er aan de hand?\nA: Er lekt water door het dak.\nB: Dat moet snel gerepareerd worden.",
 exampleSrc:"A: We need a roofer.\nB: What's the matter?\nA: Water is leaking through the roof.\nB: That needs to be fixed quickly.",
 funFact:"Dutch houses traditionally had thatched roofs (rieten daken). Some villages still preserve this tradition, though fire risk makes it increasingly rare."},

{type:"teach", trg:"de dakakker", src:"rooftop farm", pos:"noun", gender:"c",
 note:"Dak (roof) + akker (field).\nUrban farming on building rooftops.",
 example:"A: Er is een dakakker op het gebouw.\nB: Echt? Wat verbouwen ze?\nA: Kruiden en groenten.\nB: Dat is duurzaam en lokaal.",
 exampleSrc:"A: There is a rooftop farm on the building.\nB: Really? What do they grow?\nA: Herbs and vegetables.\nB: That's sustainable and local.",
 funFact:"Rotterdam has Europe's largest rooftop farm, 'DakAkker', on the old Schieblock office building, growing over 30 types of herbs and vegetables."},

{type:"teach", trg:"de ijskast", src:"fridge / ice box", pos:"noun", gender:"c",
 note:"IJs (ice) + kast (cabinet/cupboard).\nOlder word for 'koelkast' (fridge).",
 example:"A: Staat er nog melk in de ijskast?\nB: Ik kijk even. Nee, op.\nA: Dan moet ik naar de winkel.\nB: Haal meteen brood mee.",
 exampleSrc:"A: Is there still milk in the fridge?\nB: Let me check. No, we're out.\nA: Then I need to go to the store.\nB: Get bread too while you're at it.",
 funFact:"'IJskast' is the original Dutch word. 'Koelkast' is the modern standard. Both are understood, but 'ijskast' has a nostalgic, slightly old-fashioned feel."},

{type:"teach", trg:"het huis-tuin-en-keukenwoord", src:"everyday word / common expression", pos:"noun", gender:"n",
 note:"Huis (house) + tuin (garden) + keuken (kitchen) + woord (word).\nSomething ordinary, nothing fancy.",
 example:"A: 'Lekker' is een echt huis-tuin-en-keukenwoord.\nB: Ja, iedereen gebruikt het.\nA: Het is zo typisch Nederlands.\nB: Buitenlanders leren het als eerste.",
 exampleSrc:"A: 'Lekker' is a real everyday word.\nB: Yes, everyone uses it.\nA: It's so typically Dutch.\nB: Foreigners learn it first.",
 funFact:"'Huis-tuin-en-keuken' literally means 'house-garden-and-kitchen' and is used for anything ordinary, domestic, or unremarkable."},

{type:"teach", trg:"de hoeder", src:"guardian / keeper / protector", pos:"noun", gender:"c",
 note:"From 'hoeden' (to guard/watch over).\n'De hoeder van de wet' = guardian of the law.",
 example:"A: Hij is de hoeder van de traditie.\nB: Dat past bij hem.\nA: Hij let erop dat niets verandert.\nB: Soms is verandering ook nodig.",
 exampleSrc:"A: He is the guardian of tradition.\nB: That suits him.\nA: He makes sure nothing changes.\nB: Sometimes change is also needed.",
 funFact:"'Hoeder' is a somewhat literary word. In everyday Dutch, 'bewaker' (guard) or 'beschermer' (protector) is more common."},

{type:"teach", trg:"kennisintensief", src:"knowledge-intensive", pos:"adj", gender:null,
 note:"Kennis (knowledge) + intensief (intensive).\nDescribing industries that rely heavily on expertise.",
 example:"A: Dit is een kennisintensieve sector.\nB: Ja, je hebt veel opleiding nodig.\nA: Daarom zijn de salarissen ook hoog.\nB: Terecht, de expertise is schaars.",
 exampleSrc:"A: This is a knowledge-intensive sector.\nB: Yes, you need a lot of education.\nA: That's why salaries are also high.\nB: Rightly so, the expertise is scarce.",
 funFact:"The Netherlands deliberately positions itself as a 'kenniseconomie' (knowledge economy), investing heavily in education and research."},

{type:"mc", q:"'De kubuswoningen' staan in:",
 opts:["Amsterdam","Den Haag","Rotterdam","Utrecht"],
 ans:"Rotterdam",
 hint:"The city known for innovative architecture, designed by Piet Blom"},

{type:"fb", s:"Wij doen aan {1} voor de vakantie.",
 a:["huizenruil"], opts:["huizenruil","kubuswoning","dakakker","ijskast"],
 hint:"The practice of swapping homes with another family for a holiday",
 sSrc:"We do {1} for our holiday."},

{type:"mc", q:"'Huis-tuin-en-keuken' beschrijft iets dat:",
 opts:["Expensive and rare","Ordinary and everyday","Foreign and exotic","Old and valuable"],
 ans:"Ordinary and everyday",
 hint:"House, garden, and kitchen. The three most domestic, unremarkable spaces."},

{type:"fb", s:"Er is een {1} op het dak van het kantoor.",
 a:["dakakker"], opts:["dakakker","dakker","kubuswoning","ijskast"],
 hint:"A farm on a rooftop, growing vegetables and herbs in the city",
 sSrc:"There is a {1} on the roof of the office."},

{type:"match", pairs:[
 {trg:"de kubuswoning", src:"cube house"},
 {trg:"de huizenruil", src:"house swap"},
 {trg:"de dakker", src:"roofer"},
 {trg:"de dakakker", src:"rooftop farm"}
]},

{type:"mc", q:"'Kennisintensief' beschrijft een sector die:",
 opts:["Uses a lot of water","Relies heavily on expertise","Employs many people","Is very profitable"],
 ans:"Relies heavily on expertise",
 hint:"Kennis (knowledge) + intensief. Where brainpower is the main resource."},

{type:"fb", s:"Hij is de {1} van de traditie in ons dorp.",
 a:["hoeder"], opts:["hoeder","dakker","ijskast","kubuswoning"],
 hint:"The person who guards and protects something, a keeper or guardian",
 sSrc:"He is the {1} of tradition in our village."},

{type:"match", pairs:[
 {trg:"de ijskast", src:"fridge"},
 {trg:"het huis-tuin-en-keukenwoord", src:"everyday word"},
 {trg:"de hoeder", src:"guardian"},
 {trg:"kennisintensief", src:"knowledge-intensive"}
]}
]};
export default LESSON_19;
