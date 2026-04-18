// Batch 4 — Unit 06, Lesson 2: Asking Directions & Navigation
const BATCH4_U06_L2 = {
  id:"itv2_u06l_b4_2", title:"Come ci arrivo?", icon:"\uD83E\uDDED", xp:15, board:true,
  steps:[
    {type:"intro", title:"Come ci arrivo?",
     desc:"Learn to ask for and give directions in Italian, navigating streets, squares, and landmarks.",
     goals:["Ask for directions politely","Understand directional instructions","Use key navigation vocabulary"]},

    {type:"teach", trg:"dritto", src:"straight (ahead)", pos:"adv", gender:null,
     note:"Also spelled 'diritto.' 'Vai dritto' or 'vai sempre dritto' = go straight.\nThe most common direction word.",
     example:"A: Come arrivo alla piazza?\nB: Vai sempre dritto per duecento metri.",
     exampleSrc:"A: How do I get to the square?\nB: Go straight for two hundred meters.",
     funFact:"Both 'dritto' and 'diritto' are correct. 'Diritto' can also mean 'right' (as in a legal right) or 'upright.' 'Vai dritto' is the most common form in spoken directions. Italians gesticulate while giving directions, making them surprisingly easy to follow."},

    {type:"teach", trg:"a destra", src:"to the right", pos:"adv", gender:null,
     note:"'Gira a destra' = turn right. 'A destra' = on the right side.\n'Destra' is also used in politics (right-wing).",
     example:"A: Gira a destra al semaforo.\nB: E poi?\nA: Poi vai dritto.",
     exampleSrc:"A: Turn right at the traffic light.\nB: And then?\nA: Then go straight.",
     funFact:"From Latin 'dextra' (right hand). In Italian politics, 'la destra' means the right wing. The phrase 'non sai dove sta la destra e la sinistra' (you don't know right from left) means someone is confused or disoriented."},

    {type:"teach", trg:"a sinistra", src:"to the left", pos:"adv", gender:null,
     note:"'Gira a sinistra' = turn left. 'A sinistra' = on the left side.\nFrom Latin 'sinistra.'",
     example:"A: Dopo la chiesa, gira a sinistra.\nB: Grazie mille!",
     exampleSrc:"A: After the church, turn left.\nB: Thanks a lot!",
     funFact:"Latin 'sinistra' originally meant 'unlucky' because the left side was considered bad luck. English 'sinister' comes from the same root. This superstition about the left hand is deeply embedded in Western languages."},

    {type:"teach", trg:"vicino", src:"near / close / nearby", pos:"adj", gender:"m",
     note:"Masculine. Feminine: vicina. 'Vicino a' = near to.\nAlso a noun: 'il vicino' = the neighbor.",
     example:"A: La farmacia e vicina?\nB: Si, e molto vicina. Due minuti a piedi.",
     exampleSrc:"A: Is the pharmacy nearby?\nB: Yes, it is very close. Two minutes on foot.",
     funFact:"'Il vicino' (the neighbor) plays a huge role in Italian social life. Italians know their neighbors well. 'Vicinato' (neighborhood) implies a community. The saying 'buon vicinato' (good neighborliness) is a core Italian value."},

    {type:"teach", trg:"lontano", src:"far / distant", pos:"adj", gender:"m",
     note:"Masculine. Feminine: lontana. Opposite of 'vicino.'\n'E lontano da qui' = It is far from here.",
     example:"A: E lontano il museo?\nB: No, sono dieci minuti a piedi.",
     exampleSrc:"A: Is the museum far?\nB: No, it is ten minutes on foot.",
     funFact:"Italian perception of 'lontano' is relative. In a big city, 20 minutes walking is 'vicino.' In a small town, 10 minutes might be 'lontano.' Italians love to underestimate distances: 'sono cinque minuti' (it's five minutes) often means fifteen."},

    {type:"teach", trg:"l'angolo", src:"the corner", pos:"noun", gender:"m",
     note:"Masculine. 'All'angolo della strada' = at the street corner.\n'Dietro l'angolo' = around the corner.",
     example:"A: Il bar e all'angolo.\nB: Ah si, lo vedo!",
     exampleSrc:"A: The bar is at the corner.\nB: Oh yes, I see it!",
     funFact:"'Dietro l'angolo' (around the corner) is used both literally and figuratively. 'La primavera e dietro l'angolo' (spring is just around the corner) is a common expression. Italians love giving directions using landmarks, especially corners and squares."},

    {type:"teach", trg:"la piazza", src:"the square / plaza", pos:"noun", gender:"f",
     note:"Feminine. The heart of every Italian city and town.\nFrom Latin 'platea' (broad street).",
     example:"A: Ci vediamo in piazza?\nB: Si, alla fontana.",
     exampleSrc:"A: Shall we meet in the square?\nB: Yes, at the fountain.",
     funFact:"The 'piazza' is the social, political, and commercial heart of Italian life. Every town has its main piazza. Evening 'passeggiata' (stroll) happens in the piazza. Political protests are held in piazzas. Italian democracy was born in piazzas."},

    {type:"teach", trg:"il ponte", src:"the bridge", pos:"noun", gender:"m",
     note:"Masculine. Plural: i ponti. From Latin 'pons.'\n'Fare ponte' = to make a long weekend.",
     example:"A: Il ponte e bellissimo.\nB: Si, ha cinquecento anni!",
     exampleSrc:"A: The bridge is beautiful.\nB: Yes, it is five hundred years old!",
     funFact:"'Fare ponte' (to make a bridge) means taking a day off between a holiday and the weekend to create a long weekend. If a holiday falls on Thursday, Italians 'fanno ponte' on Friday. This bridge metaphor is uniquely Italian."},

    {type:"teach", trg:"attraversare", src:"to cross", pos:"verb", gender:null,
     note:"Regular -are verb. 'Attraversa la strada' = cross the street.\nFrom 'attraverso' (across, through).",
     example:"A: Attraversa la piazza e vai dritto.\nB: E dopo la piazza?",
     exampleSrc:"A: Cross the square and go straight.\nB: And after the square?",
     funFact:"'Attraversare la strada' (crossing the street) in Italian cities, especially Rome and Naples, is an adventure. Crosswalks exist but are treated as suggestions. The Italian pedestrian strategy: walk steadily, make eye contact with drivers, and never hesitate."},

    {type:"teach", trg:"la strada", src:"the street / road", pos:"noun", gender:"f",
     note:"Feminine. Plural: le strade. From Latin 'strata' (paved road).\n'Per strada' = on the street / along the way.",
     example:"A: La strada e lunga?\nB: No, e una strada corta.",
     exampleSrc:"A: Is the road long?\nB: No, it is a short road.",
     funFact:"Italian streets are named 'via' (the most common), 'corso' (a main boulevard), 'viale' (a tree-lined avenue), or 'vicolo' (a narrow alley). Each name tells you about the street's character and size."},

    {type:"teach", trg:"la via", src:"the street / way", pos:"noun", gender:"f",
     note:"Feminine. The most common word for 'street' in addresses.\n'Via Roma' = Roma Street. 'Via Garibaldi' etc.",
     example:"A: Abito in via Dante, numero 15.\nB: Conosco quella via!",
     exampleSrc:"A: I live at Dante Street, number 15.\nB: I know that street!",
     funFact:"Every Italian city has a Via Roma, Via Garibaldi, and Via Mazzini. These three streets are named after heroes of Italian unification and appear in virtually every town. 'Via' also means 'way' in the abstract sense: 'trovare una via d'uscita' (to find a way out)."},

    {type:"teach", trg:"a piedi", src:"on foot / walking", pos:"adv", gender:null,
     note:"Literally: by feet. 'Vado a piedi' = I go on foot.\nThe most common way to get around Italian city centers.",
     example:"A: Andiamo in autobus o a piedi?\nB: A piedi! Fa bel tempo.",
     exampleSrc:"A: Shall we go by bus or on foot?\nB: On foot! The weather is nice.",
     funFact:"Walking is fundamental to Italian life. The evening 'passeggiata' (stroll) is a daily ritual. Italian city centers are often pedestrian zones ('zone pedonali'). Italians walk elegantly: the idea of 'fare una bella figura' (making a good impression) extends to how you walk."},

    {type:"teach", trg:"il marciapiede", src:"the sidewalk", pos:"noun", gender:"m",
     note:"Masculine. Compound: marcia (march) + piede (foot).\nOften narrow in old Italian cities.",
     example:"A: Cammina sul marciapiede!\nB: Non c'e spazio, e troppo stretto.",
     exampleSrc:"A: Walk on the sidewalk!\nB: There is no room, it is too narrow.",
     funFact:"Italian sidewalks in historic centers are famously narrow, often just wide enough for one person. In some medieval streets, there is no sidewalk at all. Pedestrians, cars, and scooters share the space in a chaotic but functional dance."},

    {type:"teach", trg:"perdersi", src:"to get lost", pos:"verb", gender:null,
     note:"Reflexive verb. 'Mi sono perso/persa' = I got lost.\n'Non ti perdere!' = Don't get lost!",
     example:"A: Mi sono perso. Dov'e la stazione?\nB: E a cinque minuti da qui.",
     exampleSrc:"A: I got lost. Where is the station?\nB: It is five minutes from here.",
     funFact:"Getting lost ('perdersi') in Italian cities is actually recommended by travel guides. The best discoveries happen when you wander without a map. 'Perdersi a Venezia' (getting lost in Venice) is considered a magical experience, not a problem."},

    {type:"teach", trg:"la cartina", src:"the map (small/folding)", pos:"noun", gender:"f",
     note:"Feminine. Diminutive of 'carta.' A physical folding map.\n'La mappa' is used for digital or wall maps.",
     example:"A: Hai una cartina della citta?\nB: No, uso il telefono.",
     exampleSrc:"A: Do you have a city map?\nB: No, I use my phone.",
     funFact:"'Cartina' specifically refers to a small, foldable paper map. 'Mappa' is more general. In the age of smartphones, 'cartina' is becoming nostalgic. Tourist information offices ('uffici turistici') still offer free cartine of Italian cities."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'turn left' in italiano?",
     opts:["Gira a sinistra","Gira a destra","Vai dritto","Vai vicino"],
     ans:"Gira a sinistra",
     hint:"'S...' is the direction, and 'g...' is the command to turn."},

    {type:"fb", s:"La farmacia e molto {1}, solo due minuti a piedi.",
     a:["vicina"], opts:["vicina","lontana","destra","sinistra"],
     hint:"The pharmacy is very close, not far away.",
     sSrc:"The pharmacy is very {1}, only two minutes on foot."},

    {type:"match", pairs:[
      {trg:"dritto", src:"straight"},
      {trg:"a destra", src:"to the right"},
      {trg:"a sinistra", src:"to the left"},
      {trg:"vicino", src:"near"},
      {trg:"lontano", src:"far"}
    ]},

    {type:"mc", q:"Cosa significa 'fare ponte'?",
     opts:["To take a day off to make a long weekend","To build a bridge","To cross a river","To walk over a bridge"],
     ans:"To take a day off to make a long weekend",
     hint:"The 'bridge' connects a holiday to the w... for extra time o...."},

    {type:"fb", s:"{1} la piazza e poi gira a destra.",
     a:["Attraversa"], opts:["Attraversa","Cammina","Perdi","Arrivi"],
     hint:"You need to go across the square to the other side.",
     sSrc:"{1} the square and then turn right."},

    {type:"mc", q:"Qual e la differenza tra 'via,' 'corso,' e 'viale'?",
     opts:["Via is a regular street; corso is a main boulevard; viale is tree-lined","They all mean the same thing","Via is big; corso is small; viale is medium","They refer to different regions of Italy"],
     ans:"Via is a regular street; corso is a main boulevard; viale is tree-lined",
     hint:"Each word describes a different type of s... by size and character."},

    {type:"fb", s:"Mi sono {1}! Dov'e la stazione?",
     a:["perso"], opts:["perso","andato","venuto","arrivato"],
     hint:"You cannot find your way and need help finding the station.",
     sSrc:"I got {1}! Where is the station?"},

    {type:"mc", q:"Come vanno gli italiani nel centro storico?",
     opts:["A piedi, because historic centers are often pedestrian zones","In autobus, because walking is uncommon","In macchina, because parking is easy","In metro, because every city has one"],
     ans:"A piedi, because historic centers are often pedestrian zones",
     hint:"Italian old town c... restrict vehicle access to preserve their beauty."}
  ,{type:"match",pairs:[{trg:"la piazza",src:"the square / plaza"},{trg:"il ponte",src:"the bridge"},{trg:"la strada",src:"the street / road"},{trg:"il marciapiede",src:"the sidewalk"},{trg:"perdersi",src:"to get lost"},{trg:"la cartina",src:"the map (small/folding)"}]},{type:"mc",q:"How do you say \"corner\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'angolo"],ans:"l'angolo",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH4_U06_L2;
