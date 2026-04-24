// L17: Gebouwen en Architectuur. Buildings and Architecture
const LESSON_17 = {
  id:"nlv2_b2gC_l17", title:"Gebouwen en Architectuur", icon:"\u{1F3D7}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Buildings and Architecture",
     desc:"Dutch architecture is world-famous, from canal houses to bold modern design. Master vocabulary about buildings, construction, and urban planning.",
     goals:["Master 10 architecture and building terms","Discuss Dutch architectural landmarks","Navigate construction and design vocabulary"]},

    {type:"teach", trg:"de kubuswoning", src:"the cube house", pos:"noun", gender:"c",
     note:"Common gender (de). Kubus (cube) + woning (dwelling).\nPiet Blom's famous Rotterdam design.",
     example:"A: De kubuswoningen in Rotterdam zijn iconisch.\nB: Ja, ze staan op alle ansichtkaarten.\nA: Zou je erin willen wonen?\nB: Het is een ervaring, maar niet praktisch!",
     exampleSrc:"A: The cube houses in Rotterdam are iconic.\nB: Yes, they're on all the postcards.\nA: Would you want to live in one?\nB: It's an experience, but not practical!",
     funFact:"One cube house in Rotterdam is open as a museum ('Kijk-Kubus'). Visitors can see how tilted walls affect daily life inside."},

    {type:"teach", trg:"het grootwarenhuis", src:"the department store", pos:"noun", gender:"n",
     note:"Neuter (het). Groot (large) + warenhuis (department store).\n'De Bijenkorf' is the most famous Dutch one.",
     example:"A: Laten we naar het grootwarenhuis gaan.\nB: De Bijenkorf?\nA: Ja, ze hebben nu uitverkoop.\nB: Goed idee, ik heb nieuwe schoenen nodig.",
     exampleSrc:"A: Let's go to the department store.\nB: De Bijenkorf?\nA: Yes, they have a sale now.\nB: Good idea, I need new shoes.",
     funFact:"De Bijenkorf (The Beehive) has been the premium Dutch department store since 1870. Its Amsterdam flagship is a landmark on Dam Square."},

    {type:"teach", trg:"het bedrijfsverzamelgebouw", src:"the business centre / shared office building", pos:"noun", gender:"n",
     note:"Neuter (het). Bedrijf (business) + verzamel (collection) + gebouw (building).\nWhere multiple companies share one building.",
     example:"A: Ons kantoor zit in een bedrijfsverzamelgebouw.\nB: Met hoeveel bedrijven?\nA: Ongeveer twintig, van groot tot klein.\nB: Dan heb je vast een gedeelde kantine.",
     exampleSrc:"A: Our office is in a shared business centre.\nB: With how many companies?\nA: About twenty, from large to small.\nB: Then you probably have a shared canteen.",
     funFact:"'Bedrijfsverzamelgebouw' is 24 letters long. It showcases Dutch love for compounds. The English equivalent needs 4 separate words."},

    {type:"teach", trg:"de dakakker", src:"the rooftop farm", pos:"noun", gender:"c",
     note:"Common gender (de). Dak (roof) + akker (field/farm).\nUrban farming on building rooftops.",
     example:"A: Op het dak van ons kantoor is een dakakker.\nB: Echt waar? Wat verbouwen ze?\nA: Groenten en kruiden voor het restaurant beneden.\nB: Wat een goed concept!",
     exampleSrc:"A: On the roof of our office there's a rooftop farm.\nB: Really? What do they grow?\nA: Vegetables and herbs for the restaurant below.\nB: What a great concept!",
     funFact:"Rotterdam's 'DakAkker' on the Schieblock building was the first rooftop farm in the Netherlands, opened in 2012. It inspired many others."},

    {type:"mc",
     q:"'Bedrijfsverzamelgebouw' bestaat uit drie delen. Welke?",
     opts:["Bedrijfs + verzamel + gebouw","Be + drijfsverzamel + gebouw","Bedrijfsverza + mel + gebouw","Bedrijf + ver + zamelgebouw"],
     ans:"Bedrijfs + verzamel + gebouw",
     hint:"Business + collection + building. A building that collects multiple businesses in one place."},

    {type:"teach", trg:"het havenontwerp", src:"the harbour design / port design", pos:"noun", gender:"n",
     note:"Neuter (het). Haven (harbour) + ontwerp (design).\n'Ontwerpen' = to design.",
     example:"A: Het havenontwerp van Rotterdam is vernieuwd.\nB: Ja, het wordt duurzamer.\nA: Met zonnepanelen op de loodsen.\nB: En windmolens langs de Maas.",
     exampleSrc:"A: Rotterdam's harbour design has been renewed.\nB: Yes, it's becoming more sustainable.\nA: With solar panels on the warehouses.\nB: And wind turbines along the Maas river.",
     funFact:"Rotterdam's port stretches over 40 kilometres. The design of 'Maasvlakte 2', built on reclaimed land, is an engineering marvel."},

    {type:"teach", trg:"de kring", src:"the circle / ring / group", pos:"noun", gender:"c",
     note:"Common gender (de). 'In een kringetje zitten' = to sit in a circle.\n'De kring' can also mean a social circle.",
     example:"A: Zullen we in een kring gaan zitten?\nB: Ja, dat is gezellig.\nA: Zo kan iedereen elkaar zien.\nB: En niemand zit met de rug naar een ander.",
     exampleSrc:"A: Shall we sit in a circle?\nB: Yes, that's cosy.\nA: That way everyone can see each other.\nB: And no one has their back to someone.",
     funFact:"'Kringgesprek' (circle conversation) is a staple of Dutch primary schools. Children sit in a circle and take turns sharing news or stories."},

    {type:"teach", trg:"de hersenstructuur", src:"the brain structure", pos:"noun", gender:"c",
     note:"Common gender (de). Hersen (brain) + structuur (structure).\n'De hersenen' = the brain (always plural).",
     example:"A: Onderzoekers bestuderen de hersenstructuur.\nB: Waarvoor?\nA: Om beter te begrijpen hoe we leren.\nB: Fascinering, de hersenen zijn zo complex.",
     exampleSrc:"A: Researchers are studying brain structure.\nB: What for?\nA: To better understand how we learn.\nB: Fascinating, the brain is so complex.",
     funFact:"'Hersenen' is always plural in Dutch, like 'trousers' in English. You cannot say 'een hersen'. Related: 'hersenspinsels' (pipe dreams)."},

    {type:"fb",
     s:"De {1} in Rotterdam zijn een beroemd architectonisch experiment.",
     a:["kubuswoningen"],
     opts:["kubuswoningen","grootwarenhuizen","dakakkers","bedrijfsverzamelgebouwen"],
     hint:"Tilted cube-shaped houses on poles, designed by Piet Blom. A Rotterdam icon.",
     sSrc:"The {1} in Rotterdam are a famous architectural experiment."},

    {type:"teach", trg:"het ecoplan", src:"the eco-plan / environmental plan", pos:"noun", gender:"n",
     note:"Neuter (het). Eco (ecological) + plan.\n'Een ecoplan opstellen' = to draw up an eco-plan.",
     example:"A: De gemeente heeft een ecoplan opgesteld.\nB: Voor welk gebied?\nA: Het hele centrum wordt groener.\nB: Met meer bomen en minder auto's?",
     exampleSrc:"A: The municipality has drawn up an eco-plan.\nB: For which area?\nA: The entire city centre will become greener.\nB: With more trees and fewer cars?",
     funFact:"Many Dutch cities have ambitious 'ecoplannen'. Amsterdam aims to be emission-free by 2030, banning petrol and diesel cars from the centre."},

    {type:"teach", trg:"de dodecaeder", src:"the dodecahedron", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek: dodeka (twelve) + hedra (face).\nA 12-sided geometric solid.",
     example:"A: Weet je wat een dodecaeder is?\nB: Een figuur met twaalf vlakken?\nA: Precies! Elk vlak is een regelmatige vijfhoek.\nB: Dat is best ingewikkeld.",
     exampleSrc:"A: Do you know what a dodecahedron is?\nB: A shape with twelve faces?\nA: Exactly! Each face is a regular pentagon.\nB: That is quite complicated.",
     funFact:"The dodecahedron was one of Plato's five perfect solids. Ancient Greeks associated it with the universe. Mysterious Roman dodecahedrons have been found in the Netherlands."},

    {type:"mc",
     q:"Wat is een 'dakakker'?",
     opts:["Een boerderij met een groot dak","Een tuin op het dak van een gebouw","Een akker naast een dak","Een boomgaard op een heuvel"],
     ans:"Een tuin op het dak van een gebouw",
     hint:"D... (roof) + akker (field). Urban farming happening on top of buildings."},

    {type:"fb",
     s:"De Bijenkorf op de Dam is het beroemdste {1} van Nederland.",
     a:["grootwarenhuis"],
     opts:["grootwarenhuis","bedrijfsverzamelgebouw","havenontwerp","ecoplan"],
     hint:"A large retail store with many departments under one roof.",
     sSrc:"De Bijenkorf on Dam Square is the most famous {1} in the Netherlands."},

    {type:"match", pairs:[
      {trg:"kubuswoning", src:"cube house"},
      {trg:"grootwarenhuis", src:"department store"},
      {trg:"dakakker", src:"rooftop farm"},
      {trg:"havenontwerp", src:"harbour design"}
    ]},

    {type:"mc",
     q:"'Hersenen' is in het Nederlands:",
     opts:["Alleen formeel gebruikt","Altijd enkelvoud","Altijd meervoud","Beide vormen bestaan"],
     ans:"Altijd meervoud",
     hint:"Like 'trousers' in English, you always say 'de hersenen', never 'een hersen'."},

    {type:"fb",
     s:"De gemeente heeft een {1} opgesteld om het centrum groener te maken.",
     a:["ecoplan"],
     opts:["ecoplan","havenontwerp","bedrijfsverzamelgebouw","dakakker"],
     hint:"A plan focused on making an area more environmentally friendly.",
     sSrc:"The municipality has drawn up an {1} to make the centre greener."},

    {type:"match", pairs:[
      {trg:"bedrijfsverzamelgebouw", src:"shared office building"},
      {trg:"hersenstructuur", src:"brain structure"},
      {trg:"ecoplan", src:"eco-plan"},
      {trg:"dodecaeder", src:"dodecahedron"}
    ]}
  ]
};
export default LESSON_17;
