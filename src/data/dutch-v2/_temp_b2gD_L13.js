// L13: Lichaam en Gezondheid — Body and Health
const LESSON_13 = {
  id:"nlv2_b2gD_l13", title:"Lichaam en Gezondheid", icon:"\u{1FA7A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Body and Health",
     desc:"Health vocabulary goes beyond basic medical terms. Learn to discuss wellness, health policy, and physical conditions with the precision expected at B2 level.",
     goals:["Master 10 body and health terms","Discuss health topics in depth","Navigate wellness and medical vocabulary"]},

    {type:"teach", trg:"de acne", src:"acne", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek 'akne'.\n'Last van acne' = to suffer from acne.",
     example:"A: Mijn zoon heeft last van acne.\nB: Dat is normaal op zijn leeftijd.\nA: Maar hij schaamt zich ervoor.\nB: De huisarts kan een creme voorschrijven.",
     exampleSrc:"A: My son suffers from acne.\nB: That's normal at his age.\nA: But he's embarrassed about it.\nB: The GP can prescribe a cream.",
     funFact:"Dutch teenagers often visit the 'huisarts' (GP) for acne rather than a dermatologist. The huisarts is the gatekeeper of the Dutch healthcare system."},

    {type:"teach", trg:"het inslaapprobleem", src:"the difficulty falling asleep", pos:"noun", gender:"n",
     note:"Neuter (het). Inslapen (to fall asleep) + probleem (problem).\n'Inslaapproblemen hebben' = to have trouble falling asleep.",
     example:"A: Ik heb al weken inslaapproblemen.\nB: Kijk je 's avonds naar je telefoon?\nA: Ja, tot laat.\nB: Probeer een uur voor het slapen te stoppen.",
     exampleSrc:"A: I've had trouble falling asleep for weeks.\nB: Do you look at your phone in the evening?\nA: Yes, until late.\nB: Try to stop an hour before bedtime.",
     funFact:"Dutch sleep research is world-renowned. The Netherlands Institute for Neuroscience in Amsterdam studies sleep disorders. The Dutch sleep an average of 7 hours and 12 minutes per night."},

    {type:"teach", trg:"de hartstichting", src:"the Heart Foundation", pos:"noun", gender:"c",
     note:"Common gender (de). Hart (heart) + stichting (foundation).\nA major Dutch health charity.",
     example:"A: De Hartstichting organiseert een sponsorloop.\nB: Wanneer is het?\nA: Volgende maand, in het Vondelpark.\nA: Doe je mee?\nB: Ja, ik train er al voor!",
     exampleSrc:"A: The Heart Foundation is organising a sponsored run.\nB: When is it?\nA: Next month, in the Vondelpark.\nA: Will you join?\nB: Yes, I'm already training for it!",
     funFact:"The Hartstichting funds research into cardiovascular disease, the number one cause of death in the Netherlands. Their 'ruilhartje' (swap heart) pin is a well-known charity symbol."},

    {type:"teach", trg:"het korset", src:"the corset", pos:"noun", gender:"n",
     note:"Neuter (het). From French 'corset' (small body).\nHistorical garment and medical term (back brace).",
     example:"A: In het museum zagen we een korset uit 1800.\nB: Dat zag er oncomfortabel uit!\nA: Vrouwen moesten ze elke dag dragen.\nB: Gelukkig is de mode veranderd.",
     exampleSrc:"A: In the museum we saw a corset from 1800.\nB: That looked uncomfortable!\nA: Women had to wear them every day.\nB: Fortunately fashion has changed.",
     funFact:"In modern Dutch, 'korset' also refers to a medical back brace. The word has shifted from fashion to orthopaedics, reflecting how language follows technology."},

    {type:"mc",
     q:"Wat is de rol van de huisarts in het Nederlandse zorgsysteem?",
     opts:["De poortwachter die doorverwijst naar specialisten","Een chirurg","Alleen voor kinderen","Alleen voor ouderen"],
     ans:"De poortwachter die doorverwijst naar specialisten",
     hint:"In the Dutch system, you cannot go directly to a specialist. You must first visit this type of doctor who acts as a gatekeeper."},

    {type:"teach", trg:"de kraal", src:"the bead / corral / kraal", pos:"noun", gender:"c",
     note:"Common gender (de). Multiple meanings: a bead (for jewelry), or a livestock enclosure (from Afrikaans).\n'Kralen rijgen' = to string beads.",
     example:"A: Mijn dochter maakt armbanden van kralen.\nB: Wat een leuke hobby!\nA: Ze verkoopt ze op school.\nB: Een klein ondernemertje!",
     exampleSrc:"A: My daughter makes bracelets from beads.\nB: What a nice hobby!\nA: She sells them at school.\nB: A little entrepreneur!",
     funFact:"Glass bead trading was a major Dutch colonial activity. 'Handelskralen' (trade beads) were manufactured in Amsterdam and exchanged for goods across Africa and Asia."},

    {type:"teach", trg:"de kubus", src:"the cube", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'cubus'.\n'De Rubiks kubus' = the Rubik's cube.",
     example:"A: Ken je de kubuswoningen in Rotterdam?\nB: Ja, die schuine huizen!\nA: Ze zijn ontworpen door Piet Blom.\nB: Heel bijzonder, maar wonen erin is lastig.",
     exampleSrc:"A: Do you know the cube houses in Rotterdam?\nB: Yes, those tilted houses!\nA: They were designed by Piet Blom.\nB: Very special, but living in them is tricky.",
     funFact:"Rotterdam's 'kubuswoningen' (cube houses) by architect Piet Blom are tilted at 45 degrees. Built in 1984, they are one of the city's most photographed landmarks."},

    {type:"teach", trg:"de kubuswoning", src:"the cube house", pos:"noun", gender:"c",
     note:"Common gender (de). Kubus (cube) + woning (dwelling).\nIconic Rotterdam architecture.",
     example:"A: Wil je de kubuswoningen van binnen zien?\nB: Kan dat?\nA: Ja, een ervan is een museum.\nB: Het moet vreemd zijn om schuin te wonen.",
     exampleSrc:"A: Do you want to see the cube houses from inside?\nB: Is that possible?\nA: Yes, one of them is a museum.\nB: It must be strange to live at an angle.",
     funFact:"One cube house has been converted into a museum ('Kijk-Kubus') so visitors can experience what it is like to live in a tilted home. The angled walls make furniture placement a puzzle."},

    {type:"fb",
     s:"Veel jongeren hebben last van {1} door te veel schermtijd voor het slapen.",
     a:["inslaapproblemen"],
     opts:["inslaapproblemen","acne","korset","kralen"],
     hint:"Difficulties with the process of falling asleep at night. Compound: falling asleep + problems.",
     sSrc:"Many young people suffer from {1} due to too much screen time before bed."},

    {type:"teach", trg:"de dodecaeder", src:"the dodecahedron", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek: dodeka (twelve) + hedra (face).\nA twelve-sided geometric shape.",
     example:"A: Wat is een dodecaeder?\nB: Een veelvlak met twaalf vlakken.\nA: Dat klinkt ingewikkeld.\nB: Het is eigenlijk een heel mooie vorm.",
     exampleSrc:"A: What is a dodecahedron?\nB: A polyhedron with twelve faces.\nA: That sounds complicated.\nB: It's actually a very beautiful shape.",
     funFact:"Roman dodecahedra have been found across the Netherlands and northern Europe. Nobody knows what they were used for. They remain one of archaeology's unsolved mysteries."},

    {type:"teach", trg:"de kers", src:"the cherry", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'cerasus'.\n'De kers op de taart' = the cherry on top (the finishing touch).",
     example:"A: Dit dessert is de kers op de taart.\nB: Letterlijk, er zitten kersen in!\nA: En de slagroom is zelfgemaakt.\nB: Heerlijk, complimenten voor de kok.",
     exampleSrc:"A: This dessert is the cherry on top.\nB: Literally, there are cherries in it!\nA: And the whipped cream is homemade.\nB: Delicious, compliments to the chef.",
     funFact:"The Betuwe region between the rivers Rhine and Waal is the heart of Dutch cherry growing. In spring, the blossom routes ('bloesemroutes') attract thousands of cyclists."},

    {type:"match", pairs:[
      {trg:"inslaapprobleem", src:"difficulty falling asleep"},
      {trg:"kubuswoning", src:"cube house"},
      {trg:"kraal", src:"bead / corral"},
      {trg:"dodecaeder", src:"dodecahedron"},
      {trg:"kers", src:"cherry"}
    ]},

    {type:"mc",
     q:"Wat is de 'kers op de taart' als uitdrukking?",
     opts:["Het mooiste afsluitende detail","Het moeilijkste deel","Het begin van iets","Een recept"],
     ans:"Het mooiste afsluitende detail",
     hint:"This expression uses a fruit-on-dessert image to describe the perfect finishing touch that makes something complete."},

    {type:"fb",
     s:"De {1} in Rotterdam zijn ontworpen door architect Piet Blom.",
     a:["kubuswoningen"],
     opts:["kubuswoningen","dodecaeders","kralen","kersen"],
     hint:"Tilted house-shaped structures that are a famous landmark in Rotterdam. Compound: cube + dwellings.",
     sSrc:"The {1} in Rotterdam were designed by architect Piet Blom."}
  ]
};
export default LESSON_13;
