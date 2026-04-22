// Unit 15 Batch2. Lesson 1: Home Maintenance & Utilities
const BATCH2_U15_L1 = {
  id:"itv2_u15l_b2_1", title:"Manutenzione di casa", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"Manutenzione di casa",
     desc:"Learn Italian vocabulary for home maintenance, repairs, and utility management. These practical terms are essential for anyone living in Italy.",
     goals:["Discuss home repairs and maintenance","Handle utility bills and services","Communicate with tradespeople"]},

    {type:"teach", trg:"l'impianto elettrico", src:"the electrical system / wiring", pos:"noun", gender:"m",
     note:"Masculine. 'Impianto' = system, installation.\n'A norma' = up to code. 'Fuori norma' = not up to code.",
     example:"A: L'impianto elettrico e a norma?\nB: Si, e stato rifatto due anni fa.",
     exampleSrc:"A: Is the electrical system up to code?\nB: Yes, it was redone two years ago.",
     funFact:"Italian law requires a certificate of compliance ('certificato di conformita') for electrical systems. Older buildings often have outdated wiring, which can be a safety hazard. When renting or buying, always ask for 'la dichiarazione di conformita dell'impianto elettrico.'"},

    {type:"teach", trg:"l'impianto idraulico", src:"the plumbing system", pos:"noun", gender:"m",
     note:"Masculine. 'Idraulico' = relating to water.\n'Problemi all'impianto idraulico' = plumbing problems.",
     example:"A: C'e un problema all'impianto idraulico.\nB: Chiama l'idraulico subito!",
     exampleSrc:"A: There is a problem with the plumbing.\nB: Call the plumber right away!",
     funFact:"Italian plumbing can be challenging in old buildings. The water pressure, pipe materials, and drainage systems vary enormously between regions and building ages. 'Tubature' (pipes) in pre-war buildings may still be lead or cast iron. Italian plumbers ('idraulici') are in high demand."},

    {type:"teach", trg:"la presa", src:"the electrical outlet / socket", pos:"noun", gender:"f",
     note:"Feminine. Italian outlets use three-pin plugs (Type L and F).\n'Presa di corrente' = power outlet.",
     example:"A: Dov'e la presa più vicina?\nB: Ce n'e una dietro il divano.",
     exampleSrc:"A: Where is the nearest outlet?\nB: There is one behind the sofa.",
     funFact:"Italian electrical outlets come in two standard sizes: the smaller Type L (10A) and the larger 'Schuko' Type F (16A). Older apartments may have only the small Italian type, requiring adapters for some appliances. Universal outlets ('prese universali') accept both types."},

    {type:"teach", trg:"il contatore", src:"the meter (gas/electricity/water)", pos:"noun", gender:"m",
     note:"Masculine. From 'contare' (to count).\n'Lettura del contatore' = meter reading.",
     example:"A: Dov'e il contatore del gas?\nB: Nell'armadio nell'ingresso.",
     exampleSrc:"A: Where is the gas meter?\nB: In the cupboard in the entrance.",
     funFact:"Italian utility meters come in three types: 'contatore elettrico' (electricity), 'contatore del gas' (gas), and 'contatore dell'acqua' (water). Smart meters ('contatori intelligenti') are replacing older models throughout Italy. 'Autolettura' (self-reading) allows you to submit your own meter readings online."},

    {type:"teach", trg:"il riscaldamento autonomo", src:"independent heating", pos:"noun", gender:"m",
     note:"Masculine. The tenant controls their own heating.\nOpposite: 'riscaldamento centralizzato' (centralized heating).",
     example:"A: L'appartamento ha il riscaldamento autonomo?\nB: Si, puoi regolarlo come vuoi.",
     exampleSrc:"A: Does the apartment have independent heating?\nB: Yes, you can adjust it as you like.",
     funFact:"'Riscaldamento autonomo' is highly prized in Italian apartment listings because tenants control when and how much to heat. With 'centralizzato,' the building decides. Gas costs for autonomous heating are paid directly by the tenant, but the freedom to regulate temperature is considered worth it."},

    {type:"teach", trg:"la ristrutturazione", src:"the renovation", pos:"noun", gender:"f",
     note:"Feminine. From 'ristrutturare' (to renovate).\n'Lavori di ristrutturazione' = renovation works.",
     example:"A: La ristrutturazione durera tre mesi.\nB: Speriamo che finisca in tempo!",
     exampleSrc:"A: The renovation will last three months.\nB: Let's hope it finishes on time!",
     funFact:"Home renovation in Italy comes with major tax incentives: up to 50% deduction for ordinary renovations and 65% for energy improvements. These 'detrazioni fiscali' (tax deductions) spread over 10 years and have transformed Italian property markets. Every plumber and electrician knows the paperwork involved."},

    {type:"teach", trg:"il reclamo", src:"the complaint (formal)", pos:"noun", gender:"m",
     note:"Masculine. From 'reclamare' (to complain officially).\n'Fare un reclamo' = to file a complaint.",
     example:"A: Devo fare un reclamo al fornitore di gas.\nB: Scrivi una raccomandata o chiama il servizio clienti.",
     exampleSrc:"A: I need to file a complaint with the gas provider.\nB: Write a registered letter or call customer service.",
     funFact:"Italian consumers can file 'reclami' with utility providers, landlords, or public services. The 'ARERA' (Autorita di Regolazione per Energia Reti e Ambiente) handles energy complaints. 'Lo sportello del consumatore' (consumer desk) offers free assistance. Italians are well-organized when it comes to consumer rights."},

    {type:"teach", trg:"la manutenzione", src:"the maintenance", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'manu tenere' (to hold by hand).\n'Manutenzione ordinaria' = routine maintenance.",
     example:"A: La manutenzione della caldaia e obbligatoria.\nB: Si, una volta all'anno.",
     exampleSrc:"A: Boiler maintenance is mandatory.\nB: Yes, once a year.",
     funFact:"Italian law divides maintenance into 'ordinaria' (routine: painting, small repairs) and 'straordinaria' (major: structural work, system replacement). In rental agreements, routine maintenance falls on the tenant while major maintenance is the landlord's responsibility. This distinction generates many disputes."},

    {type:"teach", trg:"il fornitore", src:"the supplier / provider", pos:"noun", gender:"m",
     note:"Masculine. From 'fornire' (to supply, to provide).\n'Cambiare fornitore' = to switch provider.",
     example:"A: Vuoi cambiare fornitore di luce?\nB: Si, ho trovato un'offerta migliore.",
     exampleSrc:"A: Do you want to switch electricity provider?\nB: Yes, I found a better deal.",
     funFact:"Italy liberalized its energy market, allowing consumers to choose their 'fornitore' (provider). 'Il mercato libero' (free market) offers competitive rates versus the regulated 'mercato tutelato.' Comparing offers is essential, and the ARERA website provides comparison tools."},

    {type:"teach", trg:"la voltura", src:"the utility transfer (to new tenant)", pos:"noun", gender:"f",
     note:"Feminine. From 'voltare' (to turn over).\n'Fare la voltura' = to transfer a utility account.",
     example:"A: Hai fatto la voltura del gas?\nB: Non ancora, devo chiamare il fornitore.",
     exampleSrc:"A: Did you transfer the gas account?\nB: Not yet, I need to call the provider.",
     funFact:"When moving into an Italian apartment, 'la voltura' transfers existing utility contracts into your name. It is different from 'il subentro' (takeover of a deactivated contract) and 'la nuova attivazione' (new activation). Each has different costs and processing times. Every expat in Italy learns this vocabulary quickly."},

    {type:"teach", trg:"l'allacciamento", src:"the connection (utility hookup)", pos:"noun", gender:"m",
     note:"Masculine. From 'allacciare' (to connect, to lace up).\n'Allacciamento alla rete idrica' = water supply connection.",
     example:"A: L'allacciamento del gas richiede tempo.\nB: Di solito ci vogliono due settimane.",
     exampleSrc:"A: The gas hookup takes time.\nB: Usually it takes about two weeks.",
     funFact:"'Allacciamento' refers to the physical connection of a property to the utility network (gas, water, electricity). For new buildings, this can be expensive and bureaucratic. The word literally means 'lacing up,' like tying a shoe. Each utility company handles its own allacciamento process."},

    // Quiz steps
    {type:"mc", q:"What is 'il riscaldamento autonomo'?",
     opts:["Independent heating controlled by the tenant","Solar-powered heating installed on the roof","Central heating managed by building staff","Automatic heating powered by artificial intelligence"],
     ans:"Independent heating controlled by the tenant",
     hint:"'Autonomo' means i.... Unlike centralized h..., you decide when and how much to heat your own apartment."},

    {type:"fb", s:"L'{1} elettrico e a norma?",
     a:["impianto"],
     opts:["impianto","contatore","fornitore","reclamo"],
     hint:"This is the entire electrical system including wiring, switches, and safety devices. 'A norma' means up to code.",
     sSrc:"Is the electrical {1} up to code?"},

    {type:"match", pairs:[
      {trg:"il contatore", src:"the meter"},
      {trg:"la presa", src:"the outlet / socket"},
      {trg:"la manutenzione", src:"the maintenance"},
      {trg:"il fornitore", src:"the provider"},
      {trg:"la voltura", src:"the utility transfer"}
    ]},

    {type:"mc", q:"What is the difference between 'manutenzione ordinaria' and 'straordinaria'?",
     opts:["Ordinaria is indoor, straordinaria is outdoor only","Ordinaria is routine, straordinaria is major work","Ordinaria is for new buildings, straordinaria for old ones","Ordinaria is free, straordinaria costs money"],
     ans:"Ordinaria is routine, straordinaria is major work",
     hint:"R... tasks (painting, small fixes) fall on the tenant. M... w... (structural, systems) is the landlord's responsibility."},

    {type:"fb", s:"Devo fare un {1} al fornitore di gas.",
     a:["reclamo"],
     opts:["reclamo","contratto","contatore","allacciamento"],
     hint:"You are unhappy with the gas service and want to complain officially. This is a formal complaint.",
     sSrc:"I need to file a {1} with the gas provider."},

    {type:"mc", q:"What tax benefit do Italian home renovations offer?",
     opts:["Zero VAT on all building materials purchased","Complete refund of all renovation costs","Up to 50% tax deduction spread over 10 years","Free government-funded construction workers"],
     ans:"Up to 50% tax deduction spread over 10 years",
     hint:"'Detrazioni fiscali' make r... much more affordable. The percentage increases to 65% for energy efficiency improvements."},

    {type:"fb", s:"Hai fatto la {1} del gas al tuo nome?",
     a:["voltura"],
     opts:["voltura","bolletta","manutenzione","ristrutturazione"],
     hint:"This is the process of transferring a utility account from the previous tenant to you. Essential when moving in.",
     sSrc:"Did you do the gas {1} to your name?"},

    {type:"mc", q:"What does 'l'allacciamento' mean for a new apartment?",
     opts:["The legal registration of the property","The insurance policy for the building","The interior decoration and furnishing","The physical connection to the utility network"],
     ans:"The physical connection to the utility network",
     hint:"From 'allacciare' (to connect). This hooks your property to gas, water, or electricity infrastructure. It can take weeks."}
  ,{type:"match",pairs:[{trg:"il riscaldamento autonomo",src:"independent heating"},{trg:"la ristrutturazione",src:"the renovation"}]},{type:"mc",q:"How do you say \"connection\" in Italian?",opts:["l'allacciamento","la finestra","il tavolo","la bicicletta"],ans:"l'allacciamento",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U15_L1;
