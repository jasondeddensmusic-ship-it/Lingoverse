// Batch 3 — Unit 32 Lesson 2 (Globalization: Cultural Exchange & Environment)
const BATCH3_L_2 = {
  id:"itv2_u32l_b3_2", title:"Scambi culturali e ambiente globale", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"Scambi culturali e ambiente globale",
     desc:"Explore vocabulary for cultural globalization, environmental governance, and the tension between local and global identities. Key terms for debating Italy's place in a connected world.",
     goals:["Discuss cultural exchange and hybridization","Describe global environmental governance","Analyze tensions between local and global identity"]},

    {type:"teach", trg:"l'omologazione", src:"homogenization / standardization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making everything the same.\n'Omologazione culturale' = cultural homogenization.",
     example:"A: L'omologazione culturale minaccia le tradizioni locali.\nB: I centri storici si riempiono delle stesse catene internazionali.",
     exampleSrc:"A: Cultural homogenization threatens local traditions.\nB: Historic city centers fill up with the same international chains.",
     funFact:"Italy fiercely resists cultural omologazione. The 'Slow Food' movement, founded in Bra (Piedmont) in 1986, was a direct response to McDonald's opening near the Spanish Steps in Rome. It now operates in 160 countries."},

    {type:"teach", trg:"la contaminazione culturale", src:"cultural cross-pollination", pos:"noun", gender:"f",
     note:"Feminine compound noun. The blending of cultural elements.\nPositive meaning in Italian, unlike English 'contamination.'",
     example:"A: La contaminazione culturale arricchisce la cucina italiana.\nB: Il sushi e diventato parte della dieta di molti italiani.",
     exampleSrc:"A: Cultural cross-pollination enriches Italian cuisine.\nB: Sushi has become part of many Italians' diet.",
     funFact:"In Italian, 'contaminazione' has a positive connotation when applied to culture: it means creative mixing. Italian cuisine itself is a product of historical contaminazione: tomatoes from the Americas, coffee from Ethiopia, pasta techniques from Arabia."},

    {type:"teach", trg:"il consumismo", src:"consumerism", pos:"noun", gender:"m",
     note:"Masculine noun. Excessive focus on buying and consuming goods.\n'Societa dei consumi' = consumer society.",
     example:"A: Il consumismo globale ha un costo ambientale enorme.\nB: Produciamo troppi rifiuti e sprechiamo risorse.",
     exampleSrc:"A: Global consumerism has an enormous environmental cost.\nB: We produce too much waste and squander resources.",
     funFact:"Italian filmmaker Pier Paolo Pasolini was among the first intellectuals to critique consumerism ('consumismo') in the 1970s. He warned that Italy's economic miracle was destroying traditional culture and creating spiritual emptiness."},

    {type:"teach", trg:"l'impronta ecologica", src:"the ecological footprint", pos:"noun", gender:"f",
     note:"Feminine compound noun. The measure of human demand on nature.\n'Ridurre l'impronta ecologica' = to reduce the ecological footprint.",
     example:"A: L'impronta ecologica dei paesi sviluppati e insostenibile.\nB: Se tutti vivessero come gli americani, servirebbero cinque pianeti.",
     exampleSrc:"A: The ecological footprint of developed countries is unsustainable.\nB: If everyone lived like Americans, five planets would be needed.",
     funFact:"Italy's ecological footprint per capita is lower than most Western European countries, partly due to the Mediterranean diet's lower environmental impact compared to meat-heavy diets, and partly due to Italy's relatively compact urban patterns."},

    {type:"teach", trg:"il protocollo", src:"the protocol / agreement", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i protocolli.\n'Protocollo di Kyoto' = Kyoto Protocol. 'Accordo di Parigi' = Paris Agreement.",
     example:"A: Il protocollo di Kyoto e stato il primo accordo globale sulle emissioni.\nB: L'Italia lo ha firmato e ratificato.",
     exampleSrc:"A: The Kyoto Protocol was the first global agreement on emissions.\nB: Italy signed and ratified it.",
     funFact:"Italy hosted key environmental moments: the 2021 G20 in Rome produced climate commitments, and COP26 pre-negotiations were held in Milan. Italian diplomacy has positioned the country as a bridge between developed and developing nations on climate."},

    {type:"mc",
     q:"Che cos'e il movimento 'Slow Food' e dove e nato?",
     opts:["Un'azienda americana di ristorazione salutista fondata in California","Un marchio europeo di alimenti biologici certificati nato in Francia","Un movimento italiano nato a Bra per difendere le tradizioni alimentari locali","Un programma televisivo di cucina italiana trasmesso dalla RAI"],
     ans:"Un movimento italiano nato a Bra per difendere le tradizioni alimentari locali",
     hint:"Founded in Piedmont as a response to fast food chains threatening Italian culinary traditions. Now active in 160 countries."},

    {type:"teach", trg:"la transizione energetica", src:"the energy transition", pos:"noun", gender:"f",
     note:"Feminine compound noun. The shift from fossil fuels to renewable energy.\n'Transizione verde' = green transition.",
     example:"A: La transizione energetica richiede investimenti enormi.\nB: Ma creera anche milioni di nuovi posti di lavoro.",
     exampleSrc:"A: The energy transition requires enormous investments.\nB: But it will also create millions of new jobs.",
     funFact:"Italy's PNRR allocates over 70 billion euros to the ecological transition. The country aims for 70% renewable electricity by 2030, a massive increase from the current 40%. Solar energy is booming, especially in the sunny south."},

    {type:"teach", trg:"l'economia circolare", src:"the circular economy", pos:"noun", gender:"f",
     note:"Feminine compound noun. An economic model that minimizes waste.\n'Riciclo e riuso' = recycling and reuse.",
     example:"A: L'economia circolare trasforma i rifiuti in risorse.\nB: L'Italia e tra i leader europei in questo campo.",
     exampleSrc:"A: The circular economy transforms waste into resources.\nB: Italy is among the European leaders in this field.",
     funFact:"Italy recycles 83% of its industrial waste, the highest rate in the EU. The 'economia circolare' is not just a buzzword but a competitive advantage: Italian companies are world leaders in turning waste into valuable products."},

    {type:"teach", trg:"la decrescita", src:"degrowth", pos:"noun", gender:"f",
     note:"Feminine noun. An economic theory questioning endless growth.\n'Movimento per la decrescita' = degrowth movement.",
     example:"A: La decrescita propone un modello economico basato sul benessere, non sul PIL.\nB: E un'idea controversa ma sempre piu discussa.",
     exampleSrc:"A: Degrowth proposes an economic model based on well-being, not GDP.\nB: It is a controversial but increasingly discussed idea.",
     funFact:"The degrowth movement has strong roots in Italy, influenced by philosopher Serge Latouche and Italian thinker Mauro Bonaiuti. Annual 'decrescita felice' (happy degrowth) conferences attract thousands of Italian participants."},

    {type:"fb",
     s:"L'{1} culturale minaccia le tradizioni locali con l'arrivo delle catene internazionali.",
     a:["omologazione"],
     opts:["omologazione","contaminazione","diversita","economia"],
     hint:"Making everything the same. When local uniqueness is replaced by standardized global products and brands.",
     sSrc:"Cultural {1} threatens local traditions with the arrival of international chains."},

    {type:"teach", trg:"la gentrificazione", src:"gentrification", pos:"noun", gender:"f",
     note:"Feminine noun. The transformation of working-class areas into upscale neighborhoods.\n'Quartiere gentrificato' = gentrified neighborhood.",
     example:"A: La gentrificazione ha trasformato il quartiere.\nB: Gli affitti sono triplicati e i residenti originali sono stati espulsi.",
     exampleSrc:"A: Gentrification has transformed the neighborhood.\nB: Rents have tripled and original residents have been pushed out.",
     funFact:"Italian cities like Florence, Venice, and Rome face severe gentrification driven by tourism. Local residents are priced out by Airbnb rentals and tourist-oriented businesses. Venice lost half its permanent population between 1960 and 2023."},

    {type:"teach", trg:"la resilienza urbana", src:"urban resilience", pos:"noun", gender:"f",
     note:"Feminine compound noun. A city's ability to withstand and recover from shocks.\n'Citta resiliente' = resilient city.",
     example:"A: La resilienza urbana e fondamentale di fronte ai cambiamenti climatici.\nB: Le citta devono prepararsi a eventi estremi.",
     exampleSrc:"A: Urban resilience is fundamental in the face of climate change.\nB: Cities must prepare for extreme events.",
     funFact:"Italian cities face multiple resilience challenges: flooding (Venice, Genoa), earthquakes (L'Aquila, central Italy), heat waves (Po Valley), and rising seas (entire coastline). Urban planning now incorporates resilience as a core design principle."},

    {type:"teach", trg:"l'impatto ambientale", src:"the environmental impact", pos:"noun", gender:"m",
     note:"Masculine compound noun. The effect of human activities on the environment.\n'Valutazione di impatto ambientale' (VIA) = environmental impact assessment.",
     example:"A: Ogni nuovo progetto richiede una valutazione di impatto ambientale.\nB: Senza la VIA, il progetto non puo procedere.",
     exampleSrc:"A: Every new project requires an environmental impact assessment.\nB: Without the EIA, the project cannot proceed.",
     funFact:"Italy's VIA process is legally binding for major infrastructure projects. Environmental groups like Legambiente and WWF Italy actively participate in assessments, sometimes blocking or modifying projects deemed harmful."},

    {type:"mc",
     q:"Perche Venezia e un esempio drammatico di gentrificazione?",
     opts:["Perche il turismo e gli affitti alti hanno dimezzato la popolazione residente permanente","Perche il governo ha demolito i vecchi edifici per costruire hotel","Perche i veneziani si sono trasferiti all'estero per ragioni economiche","Perche la citta e stata chiusa ai residenti per motivi di sicurezza"],
     ans:"Perche il turismo e gli affitti alti hanno dimezzato la popolazione residente permanente",
     hint:"Tourism and short-term rentals drove up housing costs, pushing out permanent residents. The city lost half its population."},

    {type:"match", pairs:[
      {trg:"omologazione", src:"homogenization"},
      {trg:"consumismo", src:"consumerism"},
      {trg:"economia circolare", src:"circular economy"},
      {trg:"gentrificazione", src:"gentrification"},
      {trg:"impatto ambientale", src:"environmental impact"}
    ]},

    {type:"fb",
     s:"L'{1} circolare trasforma i rifiuti in risorse riutilizzabili.",
     a:["economia"],
     opts:["economia","impronta","transizione","resilienza"],
     hint:"An economic model that eliminates waste by reusing and recycling materials. Italy leads Europe in this approach.",
     sSrc:"The circular {1} transforms waste into reusable resources."},

    {type:"mc",
     q:"In che cosa l'Italia e leader in Europa nell'ambito della sostenibilita?",
     opts:["Nella produzione di energia nucleare per uso civile","Nel riciclaggio dei rifiuti industriali con un tasso superiore all'80%","Nel numero di auto elettriche vendute per abitante","Nella superficie di parchi nazionali protetti rispetto al territorio totale"],
     ans:"Nel riciclaggio dei rifiuti industriali con un tasso superiore all'80%",
     hint:"Italy recycles the highest percentage of industrial waste in the EU. The circular economy is a genuine competitive strength."}
  ,{type:"match",pairs:[{trg:"la contaminazione culturale",src:"cultural cross-pollination"},{trg:"il protocollo",src:"the protocol / agreement"},{trg:"la transizione energetica",src:"the energy transition"},{trg:"la decrescita",src:"degrowth"},{trg:"la resilienza urbana",src:"urban resilience"}]},{type:"mc",q:"How do you say \"ecological footprint\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'impronta ecologica"],ans:"l'impronta ecologica",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il {1} regola il commercio internazionale tra i paesi.",a:["protocollo"],opts:["protocollo","consumismo","decrescita","gentrificazione"],hint:"A formal international agreement setting out rules between parties.",sSrc:"The {1} regulates international trade between countries."},
{type:"fb",s:"La {1} energetica richiede investimenti in fonti rinnovabili.",a:["transizione energetica"],opts:["transizione energetica","economia circolare","impronta ecologica","resilienza urbana"],hint:"The shift away from fossil fuels toward renewable energy sources.",sSrc:"The energy {1} requires investment in renewable sources."}]
};
export default BATCH3_L_2;
