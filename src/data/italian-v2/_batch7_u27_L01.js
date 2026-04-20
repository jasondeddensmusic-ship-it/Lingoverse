// Batch 7 — Unit 27 extra lesson. La scienza: Space & Astronomy
const BATCH7_L1 = {id:"itv2_u27l_b7_1", title:"Lo spazio e l'astronomia", icon:"\u{1F30C}", xp:15, board:true, steps:[
{type:"intro", title:"Lo spazio e l'astronomia",
 desc:"Learn vocabulary for space exploration, astronomy, and Italy's contributions to space science.",
 goals:["Discuss space and astronomy topics","Talk about planets and celestial bodies","Understand Italy's role in space exploration"]},

{type:"teach", trg:"l'universo", src:"the universe", pos:"noun", gender:"m",
 note:"Masculine noun. 'Universale' = universal.\nFrom Latin 'universum' (all turned into one).",
 example:"A: L'universo ha circa 13,8 miliardi di anni.\nB: E continua ad espandersi.",
 exampleSrc:"A: The universe is about 13.8 billion years old.\nB: And it continues to expand.",
 funFact:"Galileo Galilei revolutionized our understanding of the universe from Italy. His telescope observations from Padua in 1609 changed astronomy forever."},

{type:"teach", trg:"il pianeta", src:"the planet", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pianeti.\nFrom Greek 'planetes' (wanderer).",
 example:"A: Quanti pianeti ci sono nel sistema solare?\nB: Otto, da Mercurio a Nettuno.",
 exampleSrc:"A: How many planets are there in the solar system?\nB: Eight, from Mercury to Neptune.",
 funFact:"All planet names in Italian come from Roman gods: Mercurio, Venere, Marte, Giove, Saturno, Urano, Nettuno. Earth is 'la Terra,' from the Latin 'terra' (land/ground)."},

{type:"teach", trg:"la stella", src:"the star", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le stelle.\n'Stella cadente' = shooting star. 'Stellare' = stellar.",
 example:"A: Guarda quante stelle stasera!\nB: Vedo anche la Via Lattea.",
 exampleSrc:"A: Look how many stars tonight!\nB: I can also see the Milky Way.",
 funFact:"'Le stelle' famously close Dante's three canticles of the Divine Comedy: 'E quindi uscimmo a riveder le stelle' (And then we came out to see the stars again). Stars symbolize hope in Italian literature."},

{type:"teach", trg:"il satellite", src:"the satellite", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i satelliti.\n'Satellite artificiale' = man-made satellite.",
 example:"A: L'Italia ha lanciato molti satelliti.\nB: L'ASI e l'agenzia spaziale italiana.",
 exampleSrc:"A: Italy has launched many satellites.\nB: ASI is the Italian Space Agency.",
 funFact:"Italy is a founding member of the European Space Agency (ESA). Italian astronauts like Samantha Cristoforetti and Luca Parmitano have made Italy proud in space."},

{type:"teach", trg:"l'orbita", src:"the orbit", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le orbite.\n'Orbitare' = to orbit. 'In orbita' = in orbit.",
 example:"A: La stazione spaziale e in orbita attorno alla Terra.\nB: A circa 400 chilometri di altezza.",
 exampleSrc:"A: The space station is in orbit around the Earth.\nB: At about 400 kilometers altitude.",
 funFact:"The word 'orbita' also means eye socket in Italian anatomy. 'Fuori orbita' (out of orbit) is slang for someone who is out of their mind or acting crazy."},

{type:"teach", trg:"il telescopio", src:"the telescope", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i telescopi.\nFrom Greek 'tele' (far) + 'scopein' (to see).",
 example:"A: Galileo perfeziono il telescopio.\nB: E cambio per sempre la nostra visione dell'universo.",
 exampleSrc:"A: Galileo perfected the telescope.\nB: And changed our view of the universe forever.",
 funFact:"While Galileo did not invent the telescope, he was the first to use it systematically for astronomy. His discoveries of Jupiter's moons and Venus's phases proved the Copernican model."},

{type:"teach", trg:"la galassia", src:"the galaxy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le galassie.\n'La Via Lattea' = the Milky Way (our galaxy).",
 example:"A: La nostra galassia si chiama Via Lattea.\nB: Contiene circa 200 miliardi di stelle.",
 exampleSrc:"A: Our galaxy is called the Milky Way.\nB: It contains about 200 billion stars.",
 funFact:"'Via Lattea' literally means 'milky way.' The name comes from Greek mythology: drops of milk from Hera's breast created the band of light across the sky."},

{type:"teach", trg:"la gravita", src:"gravity", pos:"noun", gender:"f",
 note:"Feminine noun. 'Forza di gravita' = gravitational force.\nAlso means 'seriousness' of a situation.",
 example:"A: La gravita tiene i piedi per terra.\nB: Letteralmente!",
 exampleSrc:"A: Gravity keeps our feet on the ground.\nB: Literally!",
 funFact:"'Gravita' has a double meaning: the physical force and the seriousness of a situation. 'La gravita della situazione' = the seriousness of the situation. Context always clarifies."},

{type:"teach", trg:"l'astronauta", src:"the astronaut", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Plural: gli astronauti.\nFrom Greek 'astron' (star) + 'nautes' (sailor).",
 example:"A: Samantha Cristoforetti e un'astronauta italiana.\nB: Ha stabilito il record di permanenza nello spazio.",
 exampleSrc:"A: Samantha Cristoforetti is an Italian astronaut.\nB: She set the record for longest space stay.",
 funFact:"Samantha Cristoforetti became the first Italian woman in space in 2014. She made an espresso in zero gravity using a specially designed machine, proving that Italians take coffee seriously everywhere."},

{type:"teach", trg:"il razzo", src:"the rocket", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i razzi.\n'Razzo vettore' = launch vehicle.",
 example:"A: Il razzo e stato lanciato con successo.\nB: Il satellite e in orbita.",
 exampleSrc:"A: The rocket was launched successfully.\nB: The satellite is in orbit.",
 funFact:"Italy's 'Vega' rocket (built by Avio in Colleferro, near Rome) is a European light launch vehicle. It has placed dozens of satellites into orbit since 2012."},

{type:"teach", trg:"l'asteroide", src:"the asteroid", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli asteroidi.\nSmall rocky bodies orbiting the Sun.",
 example:"A: Un asteroide ha colpito la Terra 66 milioni di anni fa.\nB: E ha causato l'estinzione dei dinosauri.",
 exampleSrc:"A: An asteroid hit Earth 66 million years ago.\nB: And it caused the extinction of the dinosaurs.",
 funFact:"Italy actively monitors near-Earth asteroids. The Italian 'Space Situational Awareness' program tracks potentially dangerous objects. Several asteroids are named after Italian scientists."},

{type:"teach", trg:"la missione spaziale", src:"space mission", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le missioni spaziali.\n'Missione' = mission/task.",
 example:"A: La prossima missione spaziale parte a giugno.\nB: L'Italia partecipa con l'ESA.",
 exampleSrc:"A: The next space mission launches in June.\nB: Italy participates with ESA.",
 funFact:"Italy is the third country in the world (after USA and USSR) to have launched a satellite, 'San Marco 1' in 1964. Italian space technology is a point of national pride."},

{type:"teach", trg:"la scoperta", src:"the discovery", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scoperte.\n'Scoprire' = to discover. Past: scoperto.",
 example:"A: La scoperta di nuovi pianeti e emozionante.\nB: Chissa se c'è vita altrove.",
 exampleSrc:"A: The discovery of new planets is exciting.\nB: Who knows if there is life elsewhere.",
 funFact:"'Scoperta' and 'scoprire' are used for all types of discoveries: scientific, geographic, personal. Colombo's 'scoperta dell'America' (discovery of America) is the most famous Italian discovery."},

{type:"mc", q:"Chi ha perfezionato il telescopio per l'astronomia?",
 opts:["Galileo Galilei","Niccolo Copernico","Isaac Newton","Giovanni Keplero"],
 ans:"Galileo Galilei",
 hint:"An Italian scientist from Pisa who observed Jupiter's moons and Venus's phases."},

{type:"fb", s:"La nostra {1} si chiama Via Lattea.", a:["galassia"],
 opts:["galassia","stella","orbita","scoperta"],
 hint:"A massive system of billions of stars. Our own is named for its milky appearance.",
 sSrc:"Our {1} is called the Milky Way."},

{type:"match", pairs:[
 {trg:"il pianeta", src:"planet"},
 {trg:"la stella", src:"star"},
 {trg:"il satellite", src:"satellite"},
 {trg:"l'asteroide", src:"asteroid"}
]},

{type:"mc", q:"Quale astronauta italiana ha fatto il caffè nello spazio?",
 opts:["Samantha Cristoforetti","Luca Parmitano","Paolo Nespoli","Roberto Vittori"],
 ans:"Samantha Cristoforetti",
 hint:"The first Italian woman in space. She made espresso in zero gravity."},

{type:"fb", s:"Il {1} e stato lanciato con successo.", a:["razzo"],
 opts:["razzo","pianeta","telescopio","satellite"],
 hint:"A vehicle that propels itself into space. Used to launch satellites.",
 sSrc:"The {1} was launched successfully."},

{type:"mc", q:"Quale fu il primo satellite italiano?",
 opts:["San Marco 1","Vega 1","Galileo 1","Roma 1"],
 ans:"San Marco 1",
 hint:"Launched in 1964, making Italy the third country to put a satellite in orbit."},

{type:"fb", s:"La {1} di nuovi pianeti e emozionante.", a:["scoperta"],
 opts:["scoperta","missione","orbita","gravita"],
 hint:"Finding something new. The act of uncovering what was unknown.",
 sSrc:"The {1} of new planets is exciting."},

{type:"match", pairs:[
 {trg:"l'universo", src:"universe"},
 {trg:"la gravita", src:"gravity"},
 {trg:"il telescopio", src:"telescope"},
 {trg:"la missione spaziale", src:"space mission"}
]}
]};
export default BATCH7_L1;
