const LESSON_8 = {
  id:"frv2_a1gap_l8", title:"En voyage", icon:"\u{2708}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"En voyage",
     desc:"Hit the road! Learn the essential travel vocabulary for airports, highways, and getting around France.",
     goals:["Learn 20 travel and transport words","Navigate airports and train stations","Ask about arrivals and directions"]},

    {type:"teach", trg:"l'aéroport", src:"the airport", pos:"noun", gender:"m",
     note:"Masculine noun. Compound of 'aéro' (air) + 'port' (harbor).",
     example:"A: On va à l'aéroport ?\nB: Oui, le vol est à quatorze heures.",
     exampleSrc:"A: Are we going to the airport?\nB: Yes, the flight is at two PM.",
     funFact:"Charles de Gaulle Airport (CDG) is the busiest airport in France, handling over 70 million passengers per year."},

    {type:"teach", trg:"l'avion", src:"the airplane", pos:"noun", gender:"m",
     note:"Masculine noun. The most common word for aircraft.",
     example:"A: Tu prends l'avion ?\nB: Oui, je prends l'avion pour Nice.",
     exampleSrc:"A: Are you taking the plane?\nB: Yes, I'm flying to Nice.",
     funFact:"The word 'avion' was coined by French aviator Clément Ader in 1890, from Latin 'avis' (bird)."},

    {type:"teach", trg:"l'autocar", src:"the coach, the bus (long-distance)", pos:"noun", gender:"m",
     note:"Masculine noun. Long-distance bus, not city bus.",
     example:"A: Comment tu vas à Lyon ?\nB: Je prends l'autocar, c'est moins cher.",
     exampleSrc:"A: How are you getting to Lyon?\nB: I'm taking the coach, it's cheaper.",
     funFact:"FlixBus and BlaBlaBus dominate the French coach market. Much cheaper than the TGV train."},

    {type:"teach", trg:"l'autoroute", src:"the highway, the motorway", pos:"noun", gender:"f",
     note:"Feminine noun. France has an extensive toll motorway network.",
     example:"A: On prend l'autoroute ?\nB: Oui, c'est plus rapide.",
     exampleSrc:"A: Shall we take the highway?\nB: Yes, it's faster.",
     funFact:"Most French highways are toll roads ('péage'). You pay based on distance at booth exits."},

    {type:"teach", trg:"l'aller-retour", src:"the round trip", pos:"noun", gender:"m",
     note:"Masculine noun. A ticket for going and coming back.",
     example:"A: Un aller-retour pour Marseille, s'il vous plaît.\nB: Voilà, soixante euros.",
     exampleSrc:"A: A round trip to Marseille, please.\nB: Here you go, sixty euros.",
     funFact:"At French train stations, you choose between 'aller simple' (one way) and 'aller-retour' (round trip)."},

    {type:"mc",
     q:"Comment s'appelle un billet pour aller et revenir ?",
     opts:["un aller-retour","un autocar","un avion","un aéroport"],
     ans:"un aller-retour",
     hint:"This compound noun combines 'going' and 'returning' into one ticket type."},

    {type:"teach", trg:"l'arrivée", src:"the arrival", pos:"noun", gender:"f",
     note:"Feminine noun. From 'arriver' (to arrive). Opposite: 'le départ'.",
     example:"A: L'arrivée est à quelle heure ?\nB: À midi, si le train n'a pas de retard.",
     exampleSrc:"A: What time is the arrival?\nB: At noon, if the train isn't delayed.",
     funFact:"Every French train station has 'Arrivées' and 'Départs' display boards. You need to check both."},

    {type:"teach", trg:"l'aventure", src:"the adventure", pos:"noun", gender:"f",
     note:"Feminine noun. An exciting experience or journey.",
     example:"A: Tu veux partir en aventure ?\nB: Oui, allons explorer !",
     exampleSrc:"A: Do you want to go on an adventure?\nB: Yes, let's explore!",
     funFact:"'À l'aventure' means 'on a whim' or 'randomly'. French loves turning nouns into adverbial phrases."},

    {type:"teach", trg:"l'aventurier", src:"the adventurer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'aventurière'. Someone who seeks adventure.",
     example:"A: Tu es un vrai aventurier !\nB: J'adore voyager et découvrir.",
     exampleSrc:"A: You're a real adventurer!\nB: I love traveling and discovering.",
     funFact:"Jacques Cousteau, the famous French ocean explorer, was the ultimate 'aventurier'."},

    {type:"teach", trg:"l'automobile", src:"the car, the automobile", pos:"noun", gender:"f",
     note:"Feminine noun. Formal word for car. Everyday: 'la voiture'.",
     example:"A: Tu as une automobile ?\nB: Oui, une petite rouge.",
     exampleSrc:"A: Do you have a car?\nB: Yes, a small red one.",
     funFact:"France was a pioneer in automobile history. Peugeot, Renault, and Citroën are all French brands."},

    {type:"fb",
     s:"On va à l'{1} pour prendre le vol de dix heures.",
     a:["aéroport"],
     opts:["aéroport","autoroute","automobile","aventure"],
     hint:"This masculine noun is the place where airplanes take off and land.",
     sSrc:"We're going to the {1} to catch the ten o'clock flight."},

    {type:"teach", trg:"l'avenir", src:"the future", pos:"noun", gender:"m",
     note:"Masculine noun. Used to talk about what lies ahead.",
     example:"A: Tu penses à l'avenir ?\nB: Oui, je veux voyager partout.",
     exampleSrc:"A: Do you think about the future?\nB: Yes, I want to travel everywhere.",
     funFact:"'À l'avenir' means 'in the future' or 'from now on'. Very common in everyday conversation."},

    {type:"teach", trg:"l'avantage", src:"the advantage", pos:"noun", gender:"m",
     note:"Masculine noun. A benefit or positive aspect.",
     example:"A: Quel est l'avantage du train ?\nB: C'est rapide et confortable.",
     exampleSrc:"A: What's the advantage of the train?\nB: It's fast and comfortable.",
     funFact:"A near-perfect English cognate. Both words come from Old French 'avant' (before, ahead)."},

    {type:"teach", trg:"l'axe", src:"the axis, the main road", pos:"noun", gender:"m",
     note:"Masculine noun. A central line, or a major road route.",
     example:"A: Prends le grand axe nord-sud.\nB: D'accord, c'est plus direct.",
     exampleSrc:"A: Take the main north-south route.\nB: Okay, it's more direct.",
     funFact:"Paris is organized around major 'axes' like the Champs-Elysées, running from the Louvre to La Défense."},

    {type:"teach", trg:"l'autorisation", src:"the authorization, the permission", pos:"noun", gender:"f",
     note:"Feminine noun. Official permission to do something.",
     example:"A: Tu as l'autorisation de partir ?\nB: Oui, mon chef a dit oui.",
     exampleSrc:"A: Do you have permission to leave?\nB: Yes, my boss said yes.",
     funFact:"France loves paperwork. You often need an 'autorisation' for things that other countries handle informally."},

    {type:"mc",
     q:"Quel mot signifie 'the future' en français ?",
     opts:["l'avenir","l'aventure","l'avantage","l'avion"],
     ans:"l'avenir",
     hint:"This masculine noun refers to the time that is yet to come, what lies ahead."},

    {type:"teach", trg:"l'ambassade", src:"the embassy", pos:"noun", gender:"f",
     note:"Feminine noun. A country's diplomatic building in a foreign capital.",
     example:"A: Où est l'ambassade de France ?\nB: Dans le centre-ville.",
     exampleSrc:"A: Where is the French embassy?\nB: In the city center.",
     funFact:"Paris hosts over 160 embassies, more than almost any other city in the world."},

    {type:"teach", trg:"l'ambassadeur", src:"the ambassador", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: 'l'ambassadrice'. A diplomatic representative.",
     example:"A: L'ambassadeur est là ?\nB: Oui, il arrive ce matin.",
     exampleSrc:"A: Is the ambassador here?\nB: Yes, he's arriving this morning.",
     funFact:"French diplomacy has a long tradition. The first permanent ambassador system was developed by French kings."},

    {type:"teach", trg:"l'appareil", src:"the device, the appliance", pos:"noun", gender:"m",
     note:"Masculine noun. Used for cameras, phones, and household appliances.",
     example:"A: C'est quoi cet appareil ?\nB: C'est un appareil photo.",
     exampleSrc:"A: What is this device?\nB: It's a camera.",
     funFact:"'Appareil photo' literally means 'photo device'. The French word for camera focuses on the device itself."},

    {type:"teach", trg:"l'appel", src:"the call", pos:"noun", gender:"m",
     note:"Masculine noun. From 'appeler'. Used for phone calls and appeals.",
     example:"A: Tu as un appel.\nB: De qui ? C'est important ?",
     exampleSrc:"A: You have a call.\nB: From whom? Is it important?",
     funFact:"'L'appel du 18 juin' is De Gaulle's famous 1940 radio call urging France to resist the occupation."},

    {type:"fb",
     s:"L'{1} du train est prévue à midi.",
     a:["arrivée"],
     opts:["arrivée","aventure","autorisation","ambassade"],
     hint:"This feminine noun is the opposite of 'departure' and tells you when something reaches its destination.",
     sSrc:"The {1} of the train is scheduled for noon."},

    {type:"match", pairs:[
      {trg:"aéroport", src:"airport"},
      {trg:"avion", src:"airplane"},
      {trg:"autoroute", src:"highway"},
      {trg:"aller-retour", src:"round trip"},
      {trg:"appareil", src:"device"}
    ]},

    {type:"mc",
     q:"Quel mot désigne un bus longue distance ?",
     opts:["l'autocar","l'automobile","l'autoroute","l'avion"],
     ans:"l'autocar",
     hint:"This masculine noun is for inter-city buses, not the local city bus."},

    {type:"fb",
     s:"Tu as un {1} sur ton téléphone. C'est ta mère.",
     a:["appel"],
     opts:["appel","appareil","avantage","axe"],
     hint:"This masculine noun describes someone trying to reach you by phone.",
     sSrc:"You have a {1} on your phone. It's your mother."}
  ]
};
export default LESSON_8;
