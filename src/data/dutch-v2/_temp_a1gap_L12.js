// L12: Transport — 20 A1 gap words
const LESSON_12 = {
  id:"nlv2_a1gap_l12", title:"Vervoer", icon:"\u{1F68C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Transport",
     desc:"Learn Dutch transport vocabulary. Bikes, buses, cars, and how to get around in the Netherlands.",
     goals:["Master 20 transport words","Talk about getting around","Give and understand directions"]},

    {type:"teach", trg:"de auto", src:"the car", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: autos.",
     example:"A: Ga je met de auto?\nB: Nee, ik pak de fiets.",
     exampleSrc:"A: Are you going by car?\nB: No, I'm taking the bike.",
     funFact:"Short for 'automobiel'. The Dutch prefer bikes over cars when possible."},

    {type:"teach", trg:"de bus", src:"the bus", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: bussen.",
     example:"A: Hoe laat komt de bus?\nB: Over vijf minuten.",
     exampleSrc:"A: What time does the bus come?\nB: In five minutes.",
     funFact:"International word. Dutch public transport (OV) is well-organized."},

    {type:"teach", trg:"de fiets", src:"the bicycle", pos:"noun", gender:"c",
     note:"Common gender (de). The Dutch national vehicle.",
     example:"A: Ik ga op de fiets naar school.\nB: Ik ook, dat is gezond!",
     exampleSrc:"A: I'm going to school by bike.\nB: Me too, that's healthy!",
     funFact:"There are more bikes than people in the Netherlands. About 23 million bikes!"},

    {type:"teach", trg:"de metro", src:"the metro / subway", pos:"noun", gender:"c",
     note:"Common gender (de). Only Amsterdam and Rotterdam have metros.",
     example:"A: Neem de metro naar het centrum.\nB: Welke lijn?",
     exampleSrc:"A: Take the metro to the center.\nB: Which line?",
     funFact:"Only Amsterdam and Rotterdam have metro systems. Most cities use trams."},

    {type:"mc",
     q:"Er zijn meer ___ dan mensen in Nederland.",
     opts:["fietsen","autos","bussen","metros"],
     ans:"fietsen",
     hint:"The Netherlands is famous for this two-wheeled vehicle. There are 23 million of them!"},

    {type:"teach", trg:"de bushalte", src:"the bus stop", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: bus + halte (stop).",
     example:"A: Waar is de bushalte?\nB: Om de hoek, rechts.",
     exampleSrc:"A: Where is the bus stop?\nB: Around the corner, to the right.",
     funFact:"Transparent compound. 'Halte' from German/French 'halt' (stop)."},

    {type:"teach", trg:"het busstation", src:"the bus station", pos:"noun", gender:"n",
     note:"Neuter noun (het). Larger than a bushalte.",
     example:"A: Het busstation is bij het centrum.\nB: Oké, ik loop ernaartoe.",
     exampleSrc:"A: The bus station is near the center.\nB: Okay, I'll walk there.",
     funFact:"The main bus station is often next to the train station (NS station)."},

    {type:"teach", trg:"de chauffeur", src:"the driver", pos:"noun", gender:"c",
     note:"Common gender (de). From French.",
     example:"A: De chauffeur rijdt te snel.\nB: Ja, dat is gevaarlijk!",
     exampleSrc:"A: The driver is driving too fast.\nB: Yes, that's dangerous!",
     funFact:"From French. Originally meant 'stoker' (one who heats the engine)."},

    {type:"teach", trg:"de buschauffeur", src:"the bus driver", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: bus + chauffeur.",
     example:"A: De buschauffeur is aardig.\nB: Ja, hij zegt altijd goedemorgen.",
     exampleSrc:"A: The bus driver is nice.\nB: Yes, he always says good morning.",
     funFact:"In the Netherlands, you board at the front and greet the bus driver!"},

    {type:"teach", trg:"autorijden", src:"to drive (a car)", pos:"verb", gender:null,
     note:"Separable compound verb. Also written as 'auto rijden'.",
     example:"A: Kun je autorijden?\nB: Ja, ik heb een rijbewijs.",
     exampleSrc:"A: Can you drive?\nB: Yes, I have a driver's license.",
     funFact:"Compound: auto (car) + rijden (to ride/drive). You 'ride the car'."},

    {type:"fb",
     s:"De {1} is bij het centrum. Daar vertrekken alle bussen.",
     a:["bushalte"],
     opts:["bushalte","metro","auto","fiets"],
     hint:"Where do buses stop to pick up passengers? A compound word with 'bus'.",
     sSrc:"The {1} is near the center. All buses depart from there."},

    {type:"teach", trg:"de benzine", src:"the gasoline / petrol", pos:"noun", gender:"c",
     note:"Common gender (de). Fuel for cars.",
     example:"A: We hebben benzine nodig.\nB: Er is een tankstation om de hoek.",
     exampleSrc:"A: We need gasoline.\nB: There's a gas station around the corner.",
     funFact:"From the chemical 'benzeen'. Dutch petrol prices are among the highest in Europe."},

    {type:"teach", trg:"de file", src:"the traffic jam", pos:"noun", gender:"c",
     note:"Common gender (de). Very common Dutch problem.",
     example:"A: Er staat een file op de A2.\nB: Dan neem ik de trein.",
     exampleSrc:"A: There's a traffic jam on the A2.\nB: Then I'll take the train.",
     funFact:"From French 'file' (line/queue). The Dutch report traffic jams in kilometers!"},

    {type:"teach", trg:"de kilometer", src:"the kilometer", pos:"noun", gender:"c",
     note:"Common gender (de). Standard distance unit.",
     example:"A: Hoeveel kilometer is het?\nB: Ongeveer tien kilometer.",
     exampleSrc:"A: How many kilometers is it?\nB: About ten kilometers.",
     funFact:"The Netherlands is small: 300 km north to south, 200 km east to west."},

    {type:"teach", trg:"de meter", src:"the meter", pos:"noun", gender:"c",
     note:"Common gender (de). Standard length unit.",
     example:"A: Het huis is honderd meter verderop.\nB: Oké, dat is dichtbij!",
     exampleSrc:"A: The house is a hundred meters ahead.\nB: Okay, that's close!",
     funFact:"International metric unit. The Dutch are very tall: average man is 1.83 m!"},

    {type:"mc",
     q:"Er staat een ___ op de snelweg. Het verkeer staat stil.",
     opts:["file","fiets","bus","meter"],
     ans:"file",
     hint:"Which word means 'traffic jam'? A long line of cars not moving."},

    {type:"teach", trg:"hardlopen", src:"to run / to jog", pos:"verb", gender:null,
     note:"Separable: ik loop hard. Compound: hard (fast) + lopen (walk/run).",
     example:"A: Ga je hardlopen?\nB: Ja, elke ochtend vijf kilometer.",
     exampleSrc:"A: Are you going jogging?\nB: Yes, every morning five kilometers.",
     funFact:"Literally 'walk hard/fast'. Dutch 'lopen' means both walking and running!"},

    {type:"teach", trg:"linksaf", src:"turn left / to the left", pos:"adv", gender:null,
     note:"Direction word. Compound: links (left) + af (off).",
     example:"A: Ga linksaf bij het stoplicht.\nB: Oké, en dan?",
     exampleSrc:"A: Turn left at the traffic light.\nB: Okay, and then?",
     funFact:"Opposite: 'rechtsaf' (turn right). Essential for giving directions."},

    {type:"teach", trg:"langs", src:"along / past", pos:"prep", gender:null,
     note:"Preposition. Moving alongside or past something.",
     example:"A: Loop langs het park.\nB: En dan rechtsaf?",
     exampleSrc:"A: Walk along the park.\nB: And then turn right?",
     funFact:"Cognate with English 'along' (a-long). Same root."},

    {type:"teach", trg:"achter", src:"behind / at the back", pos:"prep", gender:null,
     note:"Preposition. Opposite of 'voor' (in front of).",
     example:"A: De tuin is achter het huis.\nB: Wat een grote tuin!",
     exampleSrc:"A: The garden is behind the house.\nB: What a big garden!",
     funFact:"Cognate with English 'after'. Same root, slightly different meaning."},

    {type:"teach", trg:"naast", src:"next to / beside", pos:"prep", gender:null,
     note:"Preposition. Indicating adjacency.",
     example:"A: De bakker is naast de supermarkt.\nB: Oké, ik zie het.",
     exampleSrc:"A: The bakery is next to the supermarket.\nB: Okay, I see it.",
     funFact:"From 'na' (near/after). Someone or something right next to you."},

    {type:"match", pairs:[
      {trg:"file", src:"traffic jam"},
      {trg:"benzine", src:"gasoline"},
      {trg:"linksaf", src:"turn left"},
      {trg:"bushalte", src:"bus stop"}
    ]}
  ]
};
export default LESSON_12;
