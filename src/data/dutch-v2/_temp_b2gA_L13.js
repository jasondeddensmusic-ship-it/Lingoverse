// B2 Gap Batch A — Lesson 13: Technologie & Innovatie
// Theme: Technology, engineering, digital age

const LESSON_13 = {id:"nlv2_b2gA_l13", title:"Technologie & Innovatie", icon:"\u{1F4BB}", xp:40, board:true, steps:[
  {type:"intro", title:"Technologie & Innovatie",
   desc:"Learn vocabulary about technology, engineering, and innovation. The Netherlands is a tech hub, and these words appear in news, job postings, and everyday conversation.",
   goals:["Learn technology and engineering vocabulary","Discuss digital innovation in Dutch","Understand tech-related compound nouns"]},

  {type:"teach", trg:"de dynamiek", src:"dynamics, momentum", pos:"noun", gender:"c",
   note:"From Greek 'dynamikos'. The forces and energy driving change.\nUsed in business, science, and everyday Dutch.",
   example:"A: De dynamiek van de techsector is enorm.\nB: Alles verandert razendsnel.\nA: Bedrijven die niet meegaan, overleven niet.\nB: Die dynamiek maakt het spannend maar ook stressvol.",
   exampleSrc:"A: The dynamics of the tech sector are enormous.\nB: Everything changes incredibly fast.\nA: Companies that don't keep up don't survive.\nB: That momentum makes it exciting but also stressful.",
   funFact:"The Brainport Eindhoven region is the tech heart of the Netherlands. Home to ASML, Philips, and hundreds of startups, it embodies the dynamiek of Dutch innovation."},

  {type:"teach", trg:"de ingenieur", src:"engineer", pos:"noun", gender:"c",
   note:"From French 'ingenieur'. A professionally trained technical expert.\nTitle: ir. (ingenieur) before the name.",
   example:"A: Mijn broer is ingenieur bij een waterbouwbedrijf.\nB: Dat is een typisch Nederlands beroep.\nA: Klopt, Nederlandse ingenieurs zijn wereldberoemd.\nB: Vooral op het gebied van watermanagement.",
   exampleSrc:"A: My brother is an engineer at a hydraulic engineering company.\nB: That's a typically Dutch profession.\nA: True, Dutch engineers are world-famous.\nB: Especially in the field of water management.",
   funFact:"Dutch ingenieurs built the Deltawerken (Delta Works), one of the Seven Wonders of the Modern World. The title 'ir.' (ingenieur) is a protected academic title in the Netherlands."},

  {type:"teach", trg:"de informaticus", src:"computer scientist, IT specialist", pos:"noun", gender:"c",
   note:"From 'informatica' (computer science) + -us suffix.\nPlural: informatici. Academic/professional title.",
   example:"A: We zoeken een ervaren informaticus voor ons team.\nB: Wat moet die persoon kunnen?\nA: Programmeren in Python en databasebeheer.\nB: Informatici zijn heel gewild op de arbeidsmarkt.",
   exampleSrc:"A: We're looking for an experienced computer scientist for our team.\nB: What should that person be able to do?\nA: Programming in Python and database management.\nB: Computer scientists are very sought-after on the job market.",
   funFact:"The Dutch word 'informatica' (computer science) was coined from 'informatie' + 'automatica'. The informaticus is one of the most in-demand professionals in the Netherlands today."},

  {type:"teach", trg:"de cyberoorlog", src:"cyber war", pos:"noun", gender:"c",
   note:"Compound: cyber + oorlog (war).\nDigital warfare between nations or organizations.",
   example:"A: Cyberoorlog is een van de grootste bedreigingen van deze tijd.\nB: Landen vallen elkaars systemen aan.\nA: En het is moeilijk om te bewijzen wie erachter zit.\nB: De grens tussen spionage en cyberoorlog is vaag.",
   exampleSrc:"A: Cyber war is one of the biggest threats of our time.\nB: Countries attack each other's systems.\nA: And it's difficult to prove who is behind it.\nB: The line between espionage and cyber war is blurry.",
   funFact:"The Netherlands hosts the European Cybersecurity Agency and has a dedicated military cyber command. The Hague is becoming a global hub for cybersecurity organizations."},

  {type:"teach", trg:"de helikopter", src:"helicopter", pos:"noun", gender:"c",
   note:"From Greek heliko (spiral) + pteron (wing).\nPronounced hay-lee-KOP-ter in Dutch.",
   example:"A: De helikopter landde op het dak van het ziekenhuis.\nB: Was het een traumahelikopter?\nA: Ja, voor spoedgevallen.\nB: Die helikopters redden elke dag levens.",
   exampleSrc:"A: The helicopter landed on the roof of the hospital.\nB: Was it a trauma helicopter?\nA: Yes, for emergencies.\nB: Those helicopters save lives every day.",
   funFact:"The Dutch trauma helicopter system (HEMS) is one of the best in Europe. The bright yellow Lifeliner helicopters can reach any location in the Netherlands within 15 minutes."},

  {type:"teach", trg:"het helium", src:"helium", pos:"noun", gender:"n",
   note:"Chemical element (He). het-word.\nNamed after the Greek sun god Helios.",
   example:"A: Helium wordt gebruikt voor ballonnen en medische apparatuur.\nB: Het is ook belangrijk voor MRI-scanners.\nA: Wist je dat helium schaars begint te worden?\nB: Dat is een probleem voor de wetenschap.",
   exampleSrc:"A: Helium is used for balloons and medical equipment.\nB: It's also important for MRI scanners.\nA: Did you know that helium is becoming scarce?\nB: That's a problem for science.",
   funFact:"Most chemical element names are het-words in Dutch: het helium, het waterstof (hydrogen), het zuurstof (oxygen). The -ium suffix is a reliable marker for het-words."},

  {type:"tip", title:"Technical Professional Titles",
   text:"Dutch has specific titles for technical professionals:\n\n- ingenieur (ir.): engineer (university-level)\n- informaticus: computer scientist\n- technicus: technician\n- wetenschapper: scientist\n\nThese titles can appear before names:\nir. De Vries (Engineer De Vries)\n\nLatin-style plurals:\ninformaticus > informatici\nhistoricus > historici\ntechnicus > technici",
   deepDive:{title:"The Netherlands as Tech Hub",
    text:"The Netherlands punches above its weight in technology:\n\n- ASML (Veldhoven): makes machines that make all advanced chips\n- TomTom (Amsterdam): navigation pioneer\n- Booking.com (Amsterdam): travel tech giant\n- Adyen (Amsterdam): payment technology\n\nDutch ingenieurs and informatici are in high demand. The country's tech sector grows faster than the EU average, driven by the dynamiek of the Brainport and Amsterdam ecosystems."}},

  {type:"mc", q:"Welk woord betekent 'engineer'?",
   opts:["de ingenieur","de informaticus","de historicus","de hervormer"],
   ans:"de ingenieur",
   hint:"From French. A professionally trained technical expert. Title: ir."},

  {type:"fb", s:"De {1} van de techsector is enorm.",
   a:["dynamiek"], opts:["dynamiek","cyberoorlog","helikopter","informaticus"],
   hint:"The forces and energy that drive rapid change. From Greek 'dynamikos'.",
   sSrc:"The dynamics of the tech sector are enormous."},

  {type:"mc", q:"We zoeken een ervaren informaticus. Wat is een 'informaticus'?",
   opts:["a computer scientist","an information desk worker","a librarian","a journalist"],
   ans:"a computer scientist",
   hint:"From informatica (computer science). Someone who works with computers professionally."},

  {type:"fb", s:"{1} is een van de grootste bedreigingen van deze tijd.",
   a:["Cyberoorlog"], opts:["Cyberoorlog","Helium","Dynamiek","Helikopter"],
   hint:"Digital warfare between nations using computer attacks.",
   sSrc:"Cyber war is one of the biggest threats of our time."},

  {type:"match", pairs:[
    {trg:"dynamiek", src:"dynamics, momentum"},
    {trg:"ingenieur", src:"engineer"},
    {trg:"informaticus", src:"computer scientist"},
    {trg:"cyberoorlog", src:"cyber war"},
    {trg:"helikopter", src:"helicopter"},
    {trg:"helium", src:"helium"}
  ]},

  {type:"mc", q:"Helium wordt gebruikt voor ballonnen en MRI-scanners. Wat is 'helium'?",
   opts:["a chemical element, a light gas","a type of fuel","a metal alloy","a medical instrument"],
   ans:"a chemical element, a light gas",
   hint:"Named after the Greek sun god Helios. The gas that makes balloons float."},

  {type:"fb", s:"Nederlandse {1} zijn wereldberoemd op het gebied van watermanagement.",
   a:["ingenieurs"], opts:["ingenieurs","informatici","helikopters","dynamieken"],
   hint:"Plural of ingenieur. Technical professionals who build and design systems.",
   sSrc:"Dutch engineers are world-famous in the field of water management."},

  {type:"drag_fill", s:"De {1} en de {2} werkten samen aan een systeem tegen {3}.",
   blanks:{"1":"ingenieur","2":"informaticus","3":"cyberoorlog"},
   pool:["ingenieur","informaticus","cyberoorlog","helium","helikopter"],
   hint:"The technical expert and the IT specialist collaborated on a system to counter digital warfare."}
]};
export default LESSON_13;
