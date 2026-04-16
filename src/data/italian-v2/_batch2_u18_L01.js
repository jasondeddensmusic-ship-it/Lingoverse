// Unit 18 Batch2. Lesson 1: Pollution & Natural Disasters
const BATCH2_U18_L1 = {
  id:"itv2_u18l_b2_1", title:"Disastri e inquinamento", icon:"🌋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Disastri naturali e inquinamento",
     desc:"Learn Italian vocabulary for natural disasters, pollution types, and environmental emergencies. Italy faces unique environmental challenges due to its geography and climate.",
     goals:["Name types of natural disasters in Italian","Discuss different forms of pollution","Express concerns about environmental emergencies"]},

    {type:"teach", trg:"il terremoto", src:"the earthquake", pos:"noun", gender:"m",
     note:"Masculine. 'Terra' (earth) + 'moto' (movement).\n'Scala Richter' = Richter scale. 'Sismico' = seismic.",
     example:"A: Hai sentito il terremoto ieri notte?\nB: Si, la terra ha tremato per dieci secondi.",
     exampleSrc:"A: Did you feel the earthquake last night?\nB: Yes, the ground shook for ten seconds.",
     funFact:"Italy is one of the most seismically active countries in Europe. The 2009 L'Aquila earthquake (6.3 magnitude) killed 309 people. The 2016 Amatrice earthquake devastated central Italy. Italian buildings must follow 'norme antisismiche' (anti-seismic regulations), but many historic structures predate these rules."},

    {type:"teach", trg:"l'eruzione", src:"the eruption (volcanic)", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'eruptio' (bursting forth).\n'Eruzione vulcanica' = volcanic eruption.",
     example:"A: L'ultima eruzione dell'Etna e stata spettacolare.\nB: Fortunatamente non ha causato danni.",
     exampleSrc:"A: The last eruption of Etna was spectacular.\nB: Fortunately it did not cause damage.",
     funFact:"Italy has three active volcanoes: Etna (Sicily), Stromboli (Aeolian Islands), and Vesuvius (near Naples). Vesuvius destroyed Pompeii in 79 AD and remains a major risk: over 3 million people live in its 'zona rossa' (red zone). 'Vulcanologo' (volcanologist) is an important Italian scientific profession."},

    {type:"teach", trg:"la frana", src:"the landslide", pos:"noun", gender:"f",
     note:"Feminine. From 'franare' (to collapse, to slide).\n'Rischio di frane' = landslide risk.",
     example:"A: Una frana ha bloccato la strada.\nB: Dobbiamo prendere un'altra strada.",
     exampleSrc:"A: A landslide blocked the road.\nB: We need to take another road.",
     funFact:"Italy is extremely prone to landslides due to its mountainous terrain and clay soils. The 'dissesto idrogeologico' (hydrogeological instability) affects 91% of Italian municipalities. Heavy rains trigger frane regularly, especially in Liguria, Calabria, and the Dolomites. Prevention mapping is a national priority."},

    {type:"teach", trg:"l'alluvione", src:"the flood (major)", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'alluvio' (overflow).\nMore dramatic than 'inondazione' (flooding).",
     example:"A: L'alluvione ha devastato l'Emilia-Romagna.\nB: Migliaia di persone hanno perso la casa.",
     exampleSrc:"A: The flood devastated Emilia-Romagna.\nB: Thousands of people lost their homes.",
     funFact:"The 2023 Emilia-Romagna floods were Italy's worst in decades, affecting over 36,000 people. The 1966 Florence flood devastated art treasures and is remembered as a cultural tragedy. Italian civil protection ('Protezione Civile') coordinates disaster response. 'Allerta meteo' (weather alert) levels are color-coded."},

    {type:"teach", trg:"l'incendio boschivo", src:"the forest fire / wildfire", pos:"noun", gender:"m",
     note:"Masculine. 'Incendio' = fire. 'Boschivo' = of the forest.\n'Domare un incendio' = to extinguish a fire.",
     example:"A: Gli incendi boschivi in Sardegna sono stati terribili.\nB: Il caldo e il vento peggiorano la situazione.",
     exampleSrc:"A: The wildfires in Sardinia were terrible.\nB: The heat and wind make the situation worse.",
     funFact:"Italian summers bring devastating wildfires, particularly in Sardinia, Sicily, and Calabria. Arson ('incendio doloso') causes a significant percentage. 'I Vigili del Fuoco' (firefighters) and 'Canadair' water-bombing planes fight the blazes. Italian law severely punishes arsonists who cause forest fires."},

    {type:"teach", trg:"lo smog", src:"smog / air pollution", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English (smoke + fog).\n'Allarme smog' = smog alert.",
     example:"A: Lo smog a Milano e insopportabile oggi.\nB: Hanno bloccato il traffico in centro.",
     exampleSrc:"A: The smog in Milan is unbearable today.\nB: They blocked traffic in the center.",
     funFact:"Italian cities regularly issue 'allarme smog' when PM10 or PM2.5 levels exceed EU limits. Milan and Turin are the worst affected due to the Po Valley geography. Traffic restrictions ('blocco del traffico') ban older vehicles. Some cities offer free public transport during smog emergencies."},

    {type:"teach", trg:"la Protezione Civile", src:"Civil Protection (emergency service)", pos:"noun", gender:"f",
     note:"Feminine. Italy's emergency management agency.\n'Allerta della Protezione Civile' = Civil Protection alert.",
     example:"A: La Protezione Civile ha lanciato un'allerta arancione.\nB: Meglio restare a casa.",
     exampleSrc:"A: Civil Protection issued an orange alert.\nB: Better to stay home.",
     funFact:"Italy's 'Protezione Civile' coordinates disaster response, from earthquakes to floods. It uses a color-coded alert system: green (no risk), yellow (ordinary), orange (moderate), red (high). After the L'Aquila earthquake, the agency became a household name. Volunteers ('volontari') are a crucial part of the system."},

    {type:"teach", trg:"le polveri sottili", src:"fine particulate matter (PM)", pos:"noun", gender:"f",
     note:"Feminine plural. 'Polveri' = dusts. 'Sottili' = fine/thin.\n'PM10' and 'PM2.5' are the measured particles.",
     example:"A: Il livello di polveri sottili e troppo alto.\nB: Non fare sport all'aperto oggi.",
     exampleSrc:"A: The level of fine particles is too high.\nB: Don't exercise outdoors today.",
     funFact:"'Polveri sottili' is the Italian term for particulate matter. Italian news regularly reports PM10 levels, especially in winter when heating adds to vehicle emissions. The EU limit is 50 micrograms per cubic meter, a threshold Italian cities frequently exceed. The health impact drives policy debates."},

    {type:"teach", trg:"il dissesto idrogeologico", src:"hydrogeological instability", pos:"noun", gender:"m",
     note:"Masculine. Italy's chronic vulnerability to floods and landslides.\n'Dissesto' = disorder, instability.",
     example:"A: Il dissesto idrogeologico colpisce quasi tutta l'Italia.\nB: Servono investimenti per la prevenzione.",
     exampleSrc:"A: Hydrogeological instability affects almost all of Italy.\nB: Prevention investments are needed.",
     funFact:"'Dissesto idrogeologico' is a uniquely Italian term for the country's chronic vulnerability to floods, landslides, and erosion. 91% of Italian municipalities are at risk. Decades of uncontrolled building ('abusivismo edilizio') on unstable land worsened the problem. It is one of Italy's most pressing infrastructure challenges."},

    {type:"teach", trg:"l'inquinamento acustico", src:"noise pollution", pos:"noun", gender:"m",
     note:"Masculine. 'Acustico' = acoustic, relating to sound.\n'Livello di rumore' = noise level.",
     example:"A: L'inquinamento acustico del traffico e un problema.\nB: In centro e impossibile dormire con le finestre aperte.",
     exampleSrc:"A: Noise pollution from traffic is a problem.\nB: In the center it is impossible to sleep with windows open.",
     funFact:"Italian cities are notoriously noisy. Motorini (scooters), car horns, and late-night socializing create high decibel levels. Italian law sets noise limits ('limiti di rumore'), but enforcement is inconsistent. Rome and Naples regularly top European noise pollution rankings. 'Quiete pubblica' (public quiet) laws exist but are hard to enforce."},

    {type:"teach", trg:"la zona rossa", src:"the red zone (danger area)", pos:"noun", gender:"f",
     note:"Feminine. Used for volcanic risk, seismic risk, and emergencies.\n'Evacuare la zona rossa' = to evacuate the red zone.",
     example:"A: La zona rossa del Vesuvio include Napoli?\nB: No, ma include molti comuni vicini.",
     exampleSrc:"A: Does the Vesuvius red zone include Naples?\nB: No, but it includes many nearby towns.",
     funFact:"'Zona rossa' is used in multiple contexts: the Vesuvius eruption risk zone, earthquake vulnerability areas, and during emergencies it designates the most affected area. Over 3 million people live in the Vesuvius zona rossa, making evacuation planning one of Italy's greatest civil protection challenges."},

    // Quiz steps
    {type:"mc", q:"How many active volcanoes does Italy have?",
     opts:["One (only Vesuvius)","Two (Vesuvius and Etna)","Three (Etna, Stromboli, Vesuvius)","Five (scattered across the peninsula)"],
     ans:"Three (Etna, Stromboli, Vesuvius)",
     hint:"Sicily has E..., the Aeolian Islands have S..., and the Bay of Naples has V.... All t... remain active."},

    {type:"fb", s:"Hai sentito il {1} ieri notte?",
     a:["terremoto"],
     opts:["terremoto","incendio","alluvione","smog"],
     hint:"The ground shook. Italy is one of the most seismically active countries in Europe.",
     sSrc:"Did you feel the {1} last night?"},

    {type:"match", pairs:[
      {trg:"il terremoto", src:"the earthquake"},
      {trg:"la frana", src:"the landslide"},
      {trg:"l'alluvione", src:"the flood"},
      {trg:"l'incendio boschivo", src:"the wildfire"},
      {trg:"lo smog", src:"smog / air pollution"}
    ]},

    {type:"mc", q:"What is 'il dissesto idrogeologico'?",
     opts:["A method for purifying water supply","Italy's chronic vulnerability to floods and landslides","A geological survey of underground water sources","A new technology for preventing soil erosion"],
     ans:"Italy's chronic vulnerability to floods and landslides",
     hint:"91% of Italian municipalities are at risk. Uncontrolled building on unstable land is a major contributing factor."},

    {type:"fb", s:"Lo {1} a Milano e insopportabile oggi.",
     a:["smog"],
     opts:["smog","terremoto","incendio","alluvione"],
     hint:"The air pollution from traffic and heating is extremely bad. Authorities may block traffic in the city center.",
     sSrc:"The {1} in Milan is unbearable today."},

    {type:"mc", q:"What color-coded system does Italy's Protezione Civile use?",
     opts:["Red, blue, yellow for wind, rain, and snow","Green, yellow, orange, red from low to high risk","Only red and green for danger and safety","Numbers from 1 to 5 for severity levels"],
     ans:"Green, yellow, orange, red from low to high risk",
     hint:"Each color represents a r... level. An 'allerta arancione' means moderate r..., while 'allerta rossa' signals serious danger."},

    {type:"fb", s:"Una {1} ha bloccato la strada dopo le piogge.",
     a:["frana"],
     opts:["frana","alluvione","eruzione","zona"],
     hint:"Earth and rock slid down the mountainside and blocked the road. Italy's terrain makes these events common.",
     sSrc:"A {1} blocked the road after the rains."},

    {type:"mc", q:"What percentage of Italian municipalities are at hydrogeological risk?",
     opts:["About 25%","About 50%","About 75%","About 91%"],
     ans:"About 91%",
     hint:"Nearly all Italian towns face some degree of flood or landslide risk. Prevention investment is a national priority."}
  ]
};
export default BATCH2_U18_L1;
