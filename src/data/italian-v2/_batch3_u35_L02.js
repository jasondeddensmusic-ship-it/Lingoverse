// Batch 3 — Unit 35 Lesson 2 (Innovation: Green Tech & Future Economy)
const BATCH3_L_2 = {
  id:"itv2_u35l_b3_2", title:"Tecnologia verde e nuova economia", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tecnologia verde e nuova economia",
     desc:"Learn vocabulary for green technology, sustainable innovation, and the future of the Italian economy. These terms are central to Italy's recovery plan and industrial strategy.",
     goals:["Discuss green technology and renewable energy innovation","Describe Italy's economic transformation plans","Analyze the relationship between innovation and sustainability"]},

    {type:"teach", trg:"il pannello solare", src:"the solar panel", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i pannelli solari.\n'Impianto fotovoltaico' = photovoltaic system.",
     example:"A: L'Italia ha installato milioni di pannelli solari negli ultimi anni.\nB: Il sud ha un potenziale solare enorme.",
     exampleSrc:"A: Italy has installed millions of solar panels in recent years.\nB: The south has enormous solar potential.",
     funFact:"Italy was one of the first European countries to achieve 'grid parity' for solar energy, meaning solar electricity costs the same as fossil fuel electricity. The country generates about 9% of its electricity from solar, with capacity growing rapidly."},

    {type:"teach", trg:"la mobilita sostenibile", src:"sustainable mobility", pos:"noun", gender:"f",
     note:"Feminine compound noun. Environmentally friendly transportation.\n'Mobilita elettrica' = electric mobility. 'Trasporto pubblico' = public transport.",
     example:"A: La mobilita sostenibile richiede investimenti nel trasporto pubblico.\nB: Molte citta italiane stanno creando piste ciclabili.",
     exampleSrc:"A: Sustainable mobility requires investments in public transport.\nB: Many Italian cities are creating bike lanes.",
     funFact:"Italian cities are rapidly adopting sustainable mobility. Milan's 'Area C' congestion charge, Bologna's 30 km/h speed limit, and Rome's tram expansion show different approaches. Italy is also Europe's largest market for electric scooters."},

    {type:"teach", trg:"l'idrogeno verde", src:"green hydrogen", pos:"noun", gender:"m",
     note:"Masculine compound noun. Hydrogen produced using renewable energy.\n'Economia dell'idrogeno' = hydrogen economy.",
     example:"A: L'idrogeno verde potrebbe rivoluzionare l'industria pesante.\nB: L'Italia sta investendo in impianti di produzione.",
     exampleSrc:"A: Green hydrogen could revolutionize heavy industry.\nB: Italy is investing in production facilities.",
     funFact:"Italy's PNRR allocates billions to green hydrogen. The country plans to become a Mediterranean hub for hydrogen production and transport, leveraging its port infrastructure and southern sunshine for renewable energy-powered electrolysis."},

    {type:"teach", trg:"la decarbonizzazione", src:"decarbonization", pos:"noun", gender:"f",
     note:"Feminine noun. Reducing carbon emissions to zero.\n'Decarbonizzazione dell'economia' = decarbonization of the economy.",
     example:"A: La decarbonizzazione dell'economia e l'obiettivo principale entro il 2050.\nB: Richiede una trasformazione radicale di industria e trasporti.",
     exampleSrc:"A: Decarbonization of the economy is the main goal by 2050.\nB: It requires a radical transformation of industry and transport.",
     funFact:"Italy aims for carbon neutrality by 2050, aligned with EU targets. The challenge is immense: Italy's industrial north, its car culture, and its aging building stock all require massive green investment."},

    {type:"teach", trg:"l'economia della conoscenza", src:"the knowledge economy", pos:"noun", gender:"f",
     note:"Feminine compound noun. An economy driven by intellectual capital rather than material production.\n'Societa della conoscenza' = knowledge society.",
     example:"A: L'economia della conoscenza valorizza le competenze e la creativita.\nB: L'Italia deve investire di piu nell'istruzione e nella ricerca.",
     exampleSrc:"A: The knowledge economy values skills and creativity.\nB: Italy must invest more in education and research.",
     funFact:"Italy spends only 1.4% of GDP on research and development, well below the EU average of 2.3%. Yet Italian researchers produce more scientific publications per euro spent than almost any other country, demonstrating remarkable efficiency."},

    {type:"mc",
     q:"Che cos'e l'idrogeno verde?",
     opts:["Un tipo di gas naturale estratto dal sottosuolo marino","Idrogeno prodotto usando energia rinnovabile invece di combustibili fossili","Un colorante ecologico usato nell'industria tessile","Un nuovo tipo di carburante derivato dalle alghe marine"],
     ans:"Idrogeno prodotto usando energia rinnovabile invece di combustibili fossili",
     hint:"Produced through electrolysis powered by renewable energy like solar or wind. 'Green' because no fossil fuels are used in the process."},

    {type:"teach", trg:"la rigenerazione urbana", src:"urban regeneration", pos:"noun", gender:"f",
     note:"Feminine compound noun. Revitalizing deteriorated urban areas.\n'Riqualificazione urbana' = urban renewal.",
     example:"A: La rigenerazione urbana trasforma fabbriche abbandonate in spazi culturali.\nB: Milano ha trasformato la zona di Porta Nuova in un quartiere moderno e verde.",
     exampleSrc:"A: Urban regeneration transforms abandoned factories into cultural spaces.\nB: Milan transformed the Porta Nuova area into a modern green neighborhood.",
     funFact:"Milan's Porta Nuova and CityLife developments transformed former rail yards into Europe's most innovative urban projects. The 'Bosco Verticale' (Vertical Forest), two residential towers covered in trees, won international architecture prizes."},

    {type:"teach", trg:"il superbonus", src:"the superbonus (building incentive)", pos:"noun", gender:"m",
     note:"Masculine noun. Italy's generous tax incentive for building renovation.\n'Superbonus 110%' = the original scheme covering 110% of renovation costs.",
     example:"A: Il superbonus ha stimolato migliaia di ristrutturazioni energetiche.\nB: Ma il costo per lo Stato e stato enorme.",
     exampleSrc:"A: The superbonus stimulated thousands of energy renovations.\nB: But the cost to the state was enormous.",
     funFact:"The Superbonus 110% (2020-2023) was Italy's most ambitious building renovation incentive ever, covering more than the full cost of energy-efficiency upgrades. It transformed hundreds of thousands of buildings but cost the state over 100 billion euros."},

    {type:"teach", trg:"la startup green", src:"the green startup", pos:"noun", gender:"f",
     note:"Feminine compound noun. A startup focused on environmental solutions.\n'Incubatore green' = green incubator.",
     example:"A: Le startup green italiane crescono rapidamente.\nB: Dalla bioedilizia all'agricoltura verticale, le idee non mancano.",
     exampleSrc:"A: Italian green startups are growing rapidly.\nB: From green building to vertical farming, ideas are not lacking.",
     funFact:"Italy's Cleantech startup ecosystem is growing, with hubs in Milan, Turin, and Bologna. Companies working on food waste reduction, sustainable fashion, and renewable energy are attracting increasing venture capital."},

    {type:"fb",
     s:"La {1} dell'economia richiede l'eliminazione totale delle emissioni di carbonio entro il 2050.",
     a:["decarbonizzazione"],
     opts:["decarbonizzazione","digitalizzazione","globalizzazione","rigenerazione"],
     hint:"Reducing carbon emissions to zero. The process of making the entire economy carbon-neutral.",
     sSrc:"The {1} of the economy requires the total elimination of carbon emissions by 2050."},

    {type:"teach", trg:"l'efficienza energetica", src:"energy efficiency", pos:"noun", gender:"f",
     note:"Feminine compound noun. Using less energy to achieve the same result.\n'Classe energetica' = energy rating (for buildings and appliances).",
     example:"A: L'efficienza energetica degli edifici italiani e molto bassa.\nB: Il 60% delle case ha la peggiore classe energetica.",
     exampleSrc:"A: The energy efficiency of Italian buildings is very low.\nB: 60% of homes have the worst energy rating.",
     funFact:"Italy's building stock is among the oldest and least energy-efficient in Europe. About 60% of Italian buildings were constructed before any energy regulations existed, making building renovation the single biggest opportunity for emissions reduction."},

    {type:"teach", trg:"il brevetto verde", src:"the green patent", pos:"noun", gender:"m",
     note:"Masculine compound noun. A patent for environmentally beneficial technology.\n'Tecnologia pulita' = clean technology.",
     example:"A: I brevetti verdi italiani sono in aumento ogni anno.\nB: L'innovazione nella sostenibilita attira investimenti.",
     exampleSrc:"A: Italian green patents are increasing every year.\nB: Innovation in sustainability attracts investments.",
     funFact:"Italy ranks fifth in Europe for green patent applications. Italian innovations in solar energy storage, sustainable materials, and water purification are being adopted worldwide, proving that Italy's creativity extends to green technology."},

    {type:"teach", trg:"l'agricoltura di precisione", src:"precision agriculture", pos:"noun", gender:"f",
     note:"Feminine compound noun. Technology-driven farming that optimizes resources.\n'Droni agricoli' = agricultural drones. 'Sensori IoT' = IoT sensors.",
     example:"A: L'agricoltura di precisione riduce l'uso di acqua e pesticidi.\nB: I sensori IoT monitorano ogni singola pianta.",
     exampleSrc:"A: Precision agriculture reduces the use of water and pesticides.\nB: IoT sensors monitor each individual plant.",
     funFact:"Italian wine producers are pioneers of precision agriculture. Sensors monitor grape ripeness, soil moisture, and microclimate conditions, helping produce wines of consistent excellence while reducing environmental impact."},

    {type:"mc",
     q:"Perche il Superbonus 110% e stato sia un successo che un problema per l'Italia?",
     opts:["Ha stimolato migliaia di ristrutturazioni ma e costato oltre 100 miliardi allo Stato","Ha funzionato solo nelle regioni del nord Italia e non nel sud","Ha migliorato solo gli edifici pubblici e non le case private","Ha richiesto troppo tempo per essere approvato dal parlamento"],
     ans:"Ha stimolato migliaia di ristrutturazioni ma e costato oltre 100 miliardi allo Stato",
     hint:"It was a success in renovating buildings but the cost to public finances was staggering, creating a dilemma between environmental goals and fiscal responsibility."},

    {type:"match", pairs:[
      {trg:"pannello solare", src:"solar panel"},
      {trg:"idrogeno verde", src:"green hydrogen"},
      {trg:"decarbonizzazione", src:"decarbonization"},
      {trg:"efficienza energetica", src:"energy efficiency"},
      {trg:"agricoltura di precisione", src:"precision agriculture"}
    ]},

    {type:"fb",
     s:"La {1} urbana trasforma aree degradate in spazi moderni e sostenibili.",
     a:["rigenerazione"],
     opts:["rigenerazione","decarbonizzazione","mobilita","delocalizzazione"],
     hint:"Revitalizing deteriorated urban areas. Turning abandoned factories and rail yards into modern, green neighborhoods.",
     sSrc:"Urban {1} transforms degraded areas into modern and sustainable spaces."},

    {type:"mc",
     q:"In quale settore i produttori italiani sono pionieri nell'uso dell'agricoltura di precisione?",
     opts:["La produzione di riso nella Pianura Padana","La viticoltura e la produzione di vino di qualita","L'allevamento di bufale per la mozzarella campana","La coltivazione di agrumi in Sicilia e Calabria"],
     ans:"La viticoltura e la produzione di vino di qualita",
     hint:"Sensors monitor grape ripeness, soil, and microclimate. This technology helps produce wines of consistent excellence while reducing environmental impact."}
  ,{type:"match",pairs:[{trg:"la mobilita sostenibile",src:"sustainable mobility"},{trg:"il superbonus",src:"the superbonus (building incentive)"},{trg:"la startup green",src:"the green startup"},{trg:"il brevetto verde",src:"the green patent"}]},{type:"mc",q:"How do you say \"knowledge economy\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'economia della conoscenza"],ans:"l'economia della conoscenza",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_2;
