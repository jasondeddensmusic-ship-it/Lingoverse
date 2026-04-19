// L16: Travel & Tourism — Exploring new places
const LESSON_16 = {
  id:"esv2_a1gap_l16", title:"De viaje", icon:"\u2708\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"De viaje",
     desc:"Hit the road in Spanish. Essential travel vocabulary for exploring Spain and beyond.",
     goals:["Learn 20 travel and tourism words","Book accommodation and transport","Navigate tourist situations"]},

    {type:"teach", trg:"la aventura", src:"the adventure", pos:"noun", gender:"f",
     note:"Feminine noun. Turismo de aventura = adventure tourism.\nQué aventura = what an adventure.",
     example:"A: Este viaje es una aventura.\nB: Sí, nunca sabemos qué va a pasar.",
     exampleSrc:"A: This trip is an adventure.\nB: Yes, we never know what will happen.",
     funFact:"From Latin 'adventura' (things about to happen). Spain's Camino de Santiago is one of the world's great walking adventures."},

    {type:"teach", trg:"la azafata", src:"the flight attendant (female)", pos:"noun", gender:"f",
     note:"Feminine noun. Originally only for women.\nNow: auxiliar de vuelo (gender-neutral).",
     example:"A: La azafata nos ofreció agua.\nB: Qué amable.",
     exampleSrc:"A: The flight attendant offered us water.\nB: How kind.",
     funFact:"From Arabic 'as-safat' (basket), because azafatas originally held baskets of gifts at court. Now means flight attendant."},

    {type:"teach", trg:"el equipaje", src:"the luggage", pos:"noun", gender:"m",
     note:"Masculine noun. Equipaje de mano = hand luggage.\nFacturar el equipaje = to check in luggage.",
     example:"A: \u00bfDónde está mi equipaje?\nB: Allí, al lado de la puerta.",
     exampleSrc:"A: Where is my luggage?\nB: There, next to the door.",
     funFact:"From French 'équipage'. 'Hacer las maletas' (to pack the suitcases) is the expression for packing before a trip."},

    {type:"teach", trg:"el alpinismo", src:"mountaineering", pos:"noun", gender:"m",
     note:"Masculine noun. From Alpes (Alps).\nHacer alpinismo = to go mountaineering.",
     example:"A: Me gusta el alpinismo.\nB: \u00bfHas subido alguna montaña alta?",
     exampleSrc:"A: I like mountaineering.\nB: Have you climbed any tall mountains?",
     funFact:"From 'Alpes' (Alps). Spain's Pyrenees, Sierra Nevada, and Picos de Europa offer excellent mountaineering."},

    {type:"teach", trg:"el asiento", src:"the seat", pos:"noun", gender:"m",
     note:"Masculine noun. Asiento de ventanilla = window seat.\nTomar asiento = to take a seat.",
     example:"A: \u00bfPuedo sentarme aquí?\nB: Sí, el asiento está libre.",
     exampleSrc:"A: Can I sit here?\nB: Yes, the seat is free.",
     funFact:"From 'asentar' (to seat). 'Tome asiento' (take a seat) is the formal way to invite someone to sit down."},

    {type:"teach", trg:"la basílica", src:"the basilica", pos:"noun", gender:"f",
     note:"Feminine noun. Important church with special papal status.\nLa Basílica de la Sagrada Familia.",
     example:"A: Visitamos la basílica del pueblo.\nB: Es impresionante por dentro.",
     exampleSrc:"A: We visited the town's basilica.\nB: It is impressive inside.",
     funFact:"From Greek 'basilike' (royal). A basilica is a church given special privileges by the Pope. Spain has dozens."},

    {type:"mc",
     q:"\u00bfQué es el 'equipaje de mano'?",
     opts:["Hand luggage you take on the plane","Large suitcases","A travel document","A type of ticket"],
     ans:"Hand luggage you take on the plane",
     hint:"This is the small bag or suitcase you carry with you into the aircraft cabin."},

    {type:"teach", trg:"el altar", src:"the altar", pos:"noun", gender:"m",
     note:"Masculine noun. Altar mayor = main altar.\nLlegar al altar = to get married (figuratively).",
     example:"A: El altar de esta iglesia es de oro.\nB: Es del siglo XVI.",
     exampleSrc:"A: The altar of this church is golden.\nB: It is from the 16th century.",
     funFact:"From Latin 'altare' (high place for sacrifice). Spanish churches often have ornate baroque altars covered in gold leaf."},

    {type:"teach", trg:"el arreglo", src:"the repair, arrangement", pos:"noun", gender:"m",
     note:"Masculine noun. From arreglar (to fix/arrange).\nHacer un arreglo = to make a repair.",
     example:"A: El coche necesita un arreglo.\nB: Llévalo al mecánico.",
     exampleSrc:"A: The car needs a repair.\nB: Take it to the mechanic.",
     funFact:"From 'arreglar' (to fix, arrange). Very versatile: arreglar la casa (tidy up), arreglar un problema (fix a problem)."},

    {type:"teach", trg:"la antena", src:"the antenna", pos:"noun", gender:"f",
     note:"Feminine noun. Antena de televisión = TV antenna.\nAlso: antenna (insect).",
     example:"A: No hay señal, la antena está rota.\nB: Hay que arreglarla.",
     exampleSrc:"A: There is no signal, the antenna is broken.\nB: We need to fix it.",
     funFact:"From Latin 'antenna' (sail yard). Originally a nautical term for the pole holding a sail, then transferred to radio technology."},

    {type:"teach", trg:"el aparato", src:"the device, appliance", pos:"noun", gender:"m",
     note:"Masculine noun. Aparato electrónico = electronic device.\nAlso: apparatus.",
     example:"A: \u00bfQué aparato es este?\nB: Es un purificador de aire.",
     exampleSrc:"A: What device is this?\nB: It is an air purifier.",
     funFact:"From Latin 'apparatus' (preparation). In colloquial Spanish, 'aparato' can mean a fuss: 'No hagas tanto aparato' (don't make such a fuss)."},

    {type:"fb",
     s:"Por favor, tome {1}. La reunión va a empezar.",
     a:["asiento"],
     opts:["asiento","aparato","altar","arreglo"],
     hint:"This is what you sit on. The formal expression means 'please sit down'.",
     sSrc:"Please, take a {1}. The meeting is about to start."},

    {type:"teach", trg:"el acueducto", src:"the aqueduct", pos:"noun", gender:"m",
     note:"Masculine noun. Acueducto romano = Roman aqueduct.\nFrom aqua (water) + ducere (to lead).",
     example:"A: El acueducto de Segovia es romano.\nB: Tiene dos mil años.",
     exampleSrc:"A: The aqueduct of Segovia is Roman.\nB: It is two thousand years old.",
     funFact:"Segovia's Roman aqueduct, built around 100 AD, still stands with no mortar between its granite blocks. A UNESCO World Heritage site."},

    {type:"teach", trg:"la armonía", src:"harmony", pos:"noun", gender:"f",
     note:"Feminine noun. Vivir en armonía = to live in harmony.\nAlso a musical term.",
     example:"A: Me gusta la armonía de este lugar.\nB: Sí, es muy tranquilo.",
     exampleSrc:"A: I like the harmony of this place.\nB: Yes, it is very peaceful.",
     funFact:"From Greek 'harmonia' (fitting together). Used both for music and for peaceful coexistence."},

    {type:"teach", trg:"el arma", src:"the weapon", pos:"noun", gender:"f",
     note:"Feminine noun, but uses 'el' (el arma).\nLike el agua, el alma. Stressed 'a' rule.",
     example:"A: El museo tiene armas antiguas.\nB: \u00bfEspadas y escudos?",
     exampleSrc:"A: The museum has ancient weapons.\nB: Swords and shields?",
     funFact:"Another feminine noun using 'el' due to the stressed initial 'a'. 'Las armas' in plural uses the feminine article correctly."},

    {type:"teach", trg:"el autobús", src:"the bus", pos:"noun", gender:"m",
     note:"Masculine noun. Already seen in L05.\nEstación de autobuses = bus station.",
     example:"A: \u00bfDónde está la estación de autobuses?\nB: Al lado de la plaza.",
     exampleSrc:"A: Where is the bus station?\nB: Next to the square.",
     funFact:"Spain's bus network connects even the smallest villages. 'ALSA' is the largest intercity bus company."},

    {type:"mc",
     q:"\u00bfQué monumento romano famoso hay en Segovia?",
     opts:["Un acueducto","Una basílica","Un altar","Una antena"],
     ans:"Un acueducto",
     hint:"This structure was built by the Romans to carry water. It is still standing after 2,000 years."},

    {type:"teach", trg:"la autocaravana", src:"the motorhome, campervan", pos:"noun", gender:"f",
     note:"Feminine noun. Auto + caravana.\nViajar en autocaravana = to travel by campervan.",
     example:"A: Vamos de vacaciones en autocaravana.\nB: Qué libre, me encanta.",
     exampleSrc:"A: We are going on vacation in a motorhome.\nB: How free, I love it.",
     funFact:"Campervan tourism is booming in Spain. The country has hundreds of designated 'áreas de autocaravanas' (motorhome areas)."},

    {type:"teach", trg:"la autovía", src:"the dual carriageway (free highway)", pos:"noun", gender:"f",
     note:"Feminine noun. Free highway, unlike autopista (toll).\nAutovía = no toll, autopista = toll.",
     example:"A: Tomamos la autovía, es gratis.\nB: Mejor que la autopista.",
     exampleSrc:"A: We take the dual carriageway, it is free.\nB: Better than the toll road.",
     funFact:"Spain distinguishes autovía (free) from autopista (toll). Knowing the difference saves you money on road trips."},

    {type:"teach", trg:"el azafrán", src:"saffron", pos:"noun", gender:"m",
     note:"Masculine noun. Spain is a major saffron producer.\nKey ingredient in paella.",
     example:"A: La paella lleva azafrán.\nB: Por eso es amarilla.",
     exampleSrc:"A: Paella contains saffron.\nB: That's why it is yellow.",
     funFact:"From Arabic 'az-za'faran'. Spain's La Mancha region produces some of the world's finest saffron, the most expensive spice by weight."},

    {type:"match", pairs:[
      {trg:"azafata", src:"flight attendant"},
      {trg:"asiento", src:"seat"},
      {trg:"acueducto", src:"aqueduct"},
      {trg:"autocaravana", src:"motorhome"},
      {trg:"azafrán", src:"saffron"}
    ]},

    {type:"fb",
     s:"La {1} es más barata que la autopista porque no tiene peaje.",
     a:["autovía"],
     opts:["autovía","autocaravana","antena","aventura"],
     hint:"This is the type of highway in Spain that is free to use, unlike the toll road.",
     sSrc:"The {1} is cheaper than the motorway because it has no toll."},
  ]
};
export default LESSON_16;
