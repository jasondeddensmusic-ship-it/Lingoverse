// Batch 3. Unit 32 Lesson (Globalization: Development & Trade)
const BATCH3_L_1 = {
  id:"itv2_u32l_b3_1", title:"Sviluppo e commercio mondiale", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sviluppo e commercio mondiale",
     desc:"Deepen vocabulary for international development, trade organizations, and economic governance. Essential for discussing Italy's role in global economic institutions.",
     goals:["Discuss international development and aid","Describe trade organizations and agreements","Analyze global economic governance"]},

    {type:"teach", trg:"l'organizzazione mondiale del commercio", src:"the World Trade Organization", pos:"noun", gender:"f",
     note:"Feminine compound noun. Abbreviated OMC in Italian (WTO in English).\n'Accordi dell'OMC' = WTO agreements.",
     example:"A: L'OMC regola il commercio tra le nazioni.\nB: I suoi accordi coprono beni, servizi e proprieta intellettuale.",
     exampleSrc:"A: The WTO regulates trade between nations.\nB: Its agreements cover goods, services, and intellectual property.",
     funFact:"Italy uses OMC (Organizzazione Mondiale del Commercio) instead of WTO. Italian diplomats played a role in the 1947 GATT negotiations that eventually led to the WTO's creation in 1995."},

    {type:"teach", trg:"la delocalizzazione", src:"offshoring / relocation of production", pos:"noun", gender:"f",
     note:"Feminine noun. Moving production to countries with lower costs.\n'Delocalizzare' (verb) = to offshore/relocate.",
     example:"A: La delocalizzazione ha spostato molte fabbriche in Asia.\nB: L'Italia ha perso migliaia di posti di lavoro nel tessile.",
     exampleSrc:"A: Offshoring has moved many factories to Asia.\nB: Italy has lost thousands of jobs in textiles.",
     funFact:"Italian fashion brands have faced controversy over delocalizzazione. While 'Made in Italy' carries prestige, some companies moved production to Eastern Europe or Asia. A 2024 law tightened labeling requirements to protect the brand."},

    {type:"teach", trg:"il debito estero", src:"the foreign debt", pos:"noun", gender:"m",
     note:"Masculine compound noun. Money owed by a country to foreign creditors.\n'Ristrutturazione del debito' = debt restructuring.",
     example:"A: Il debito estero di molti paesi africani e insostenibile.\nB: Le organizzazioni internazionali chiedono la cancellazione.",
     exampleSrc:"A: The foreign debt of many African countries is unsustainable.\nB: International organizations call for cancellation.",
     funFact:"Italy has supported debt relief for developing countries through the G7 and G20. The 'Jubilee 2000' campaign for debt cancellation had strong Italian backing, driven by both Catholic social teaching and NGO activism."},

    {type:"teach", trg:"il fondo monetario", src:"the monetary fund (IMF)", pos:"noun", gender:"m",
     note:"Masculine compound noun. 'Fondo Monetario Internazionale' (FMI).\n'Prestito del FMI' = IMF loan.",
     example:"A: Il Fondo Monetario Internazionale interviene nelle crisi finanziarie.\nB: I suoi prestiti spesso impongono riforme strutturali.",
     exampleSrc:"A: The International Monetary Fund intervenes in financial crises.\nB: Its loans often impose structural reforms.",
     funFact:"Italy is the 7th largest quota holder in the IMF, reflecting its economic weight. The country has never needed an IMF bailout but came dangerously close during the 2011 sovereign debt crisis."},

    {type:"teach", trg:"il paradiso fiscale", src:"the tax haven", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i paradisi fiscali.\nCountries with very low taxes that attract foreign wealth.",
     example:"A: Miliardi di euro sono nascosti nei paradisi fiscali.\nB: L'evasione internazionale danneggia tutti i paesi.",
     exampleSrc:"A: Billions of euros are hidden in tax havens.\nB: International evasion harms all countries.",
     funFact:"Italy maintains a 'black list' of countries considered paradisi fiscali. Transactions with these jurisdictions face increased scrutiny and higher tax rates. Swiss bank accounts were historically favored by Italian tax evaders."},

    {type:"mc",
     q:"Che cos'e la delocalizzazione nel contesto economico?",
     opts:["Il trasferimento della produzione in paesi con costi inferiori","L'apertura di filiali di vendita in nuovi mercati esteri","La fusione tra due aziende di paesi diversi","Lo spostamento della sede legale di un'azienda in un'altra città italiana"],
     ans:"Il trasferimento della produzione in paesi con costi inferiori",
     hint:"Moving manufacturing to countries where labor and other costs are lower. A major issue for Italy's textile and manufacturing sectors."},

    {type:"teach", trg:"la microfinanza", src:"microfinance", pos:"noun", gender:"f",
     note:"Feminine noun. Small-scale financial services for the poor.\n'Microcredito' = microcredit. 'Microprestito' = microloan.",
     example:"A: La microfinanza aiuta milioni di persone a uscire dalla poverta.\nB: Piccoli prestiti possono fare una grande differenza.",
     exampleSrc:"A: Microfinance helps millions of people escape poverty.\nB: Small loans can make a big difference.",
     funFact:"Italy has its own microfinance institutions supporting small entrepreneurs and immigrants. The 'Banca Etica' (Ethical Bank), founded in Padua in 1999, embodies Italian values of ethical finance and social responsibility."},

    {type:"teach", trg:"l'embargo", src:"the embargo", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. A ban on trade or other activities with a country.\n'Imporre un embargo' = to impose an embargo.",
     example:"A: L'embargo ha colpito duramente l'economia del paese.\nB: Le importazioni di petrolio sono bloccate.",
     exampleSrc:"A: The embargo hit the country's economy hard.\nB: Oil imports are blocked.",
     funFact:"From Spanish 'embargo' (seizure). Italy has participated in various international embargoes as an EU and UN member. The energy embargo discussions after 2022 were particularly contentious given Italy's heavy dependence on imported gas."},

    {type:"teach", trg:"il commercio equo", src:"fair trade", pos:"noun", gender:"m",
     note:"Masculine compound noun. Trade that ensures fair prices for producers.\n'Commercio equo e solidale' = fair and solidarity trade.",
     example:"A: Il commercio equo garantisce prezzi giusti ai produttori.\nB: Cerca il marchio Fairtrade quando fai la spesa.",
     exampleSrc:"A: Fair trade guarantees fair prices for producers.\nB: Look for the Fairtrade label when you shop.",
     funFact:"Italy is one of Europe's largest fair trade markets. 'Botteghe del mondo' (world shops) selling fair trade products exist in most Italian cities. Italian consumers increasingly seek 'prodotti equosolidali' (fair trade products)."},

    {type:"fb",
     s:"Miliardi di euro sono nascosti nei {1} fiscali per evitare le tasse.",
     a:["paradisi"],
     opts:["paradisi","fondi","debiti","mercati"],
     hint:"Countries with very low taxes where wealthy individuals and companies hide money. Literally 'tax paradises' in Italian.",
     sSrc:"Billions of euros are hidden in tax {1} to avoid taxes."},

    {type:"teach", trg:"la zona franca", src:"the free trade zone", pos:"noun", gender:"f",
     note:"Feminine compound noun. An area where goods can be traded without tariffs.\n'Porto franco' = free port.",
     example:"A: La zona franca attira investimenti stranieri.\nB: Le merci entrano ed escono senza dazi doganali.",
     exampleSrc:"A: The free trade zone attracts foreign investments.\nB: Goods enter and leave without customs duties.",
     funFact:"Trieste was a free port under the Hapsburgs and retained special trade status for decades after WWII. The concept of 'zone franche' has deep roots in Italian commercial history, going back to medieval city-state trade privileges."},

    {type:"teach", trg:"la crescita demografica", src:"population growth", pos:"noun", gender:"f",
     note:"Feminine compound noun. The rate of population increase.\n'Declino demografico' = population decline.",
     example:"A: La crescita demografica nei paesi in via di sviluppo pone sfide enormi.\nB: Servono investimenti in istruzione e sanita.",
     exampleSrc:"A: Population growth in developing countries poses enormous challenges.\nB: Investments in education and healthcare are needed.",
     funFact:"Italy faces the opposite problem: its birth rate is among the lowest in the world. The population has been shrinking since 2015, creating labor shortages and pension sustainability concerns. Italians call it 'l'inverno demografico' (demographic winter)."},

    {type:"teach", trg:"la filiera", src:"the supply chain / production chain", pos:"noun", gender:"f",
     note:"Feminine noun. The complete chain from raw materials to finished product.\n'Filiera corta' = short supply chain. 'Filiera agroalimentare' = food supply chain.",
     example:"A: La filiera agroalimentare italiana e un'eccellenza mondiale.\nB: Dal campo alla tavola, ogni passaggio e controllato.",
     exampleSrc:"A: The Italian food supply chain is a world-class excellence.\nB: From field to table, every step is controlled.",
     funFact:"'Filiera corta' (short supply chain) is a growing trend in Italy, connecting local producers directly with consumers. Farmers' markets ('mercati contadini') and 'Gruppi di Acquisto Solidale' (solidarity purchasing groups) embody this philosophy."},

    {type:"mc",
     q:"Perche l'Italia e particolarmente vulnerabile agli embarghi energetici?",
     opts:["Perche produce troppo petrolio e non sa dove venderlo","Perche importa circa il 75% del suo fabbisogno energetico dall'estero","Perche le centrali nucleari italiane non funzionano correttamente","Perche consuma meno energia della maggior parte dei paesi europei"],
     ans:"Perche importa circa il 75% del suo fabbisogno energetico dall'estero",
     hint:"Italy depends heavily on imported energy, especially natural gas. This makes it vulnerable when international supply is disrupted."},

    {type:"match", pairs:[
      {trg:"delocalizzazione", src:"offshoring"},
      {trg:"paradiso fiscale", src:"tax haven"},
      {trg:"embargo", src:"embargo"},
      {trg:"commercio equo", src:"fair trade"},
      {trg:"filiera", src:"supply chain"}
    ]},

    {type:"fb",
     s:"Il {1} Monetario Internazionale interviene nelle crisi finanziarie dei paesi membri.",
     a:["Fondo"],
     opts:["Fondo","Debito","Commercio","Paradiso"],
     hint:"This international institution, abbreviated FMI in Italian, provides emergency loans to countries in financial difficulty.",
     sSrc:"The International Monetary {1} intervenes in member countries' financial crises."},

    {type:"mc",
     q:"Che cos'e la 'filiera corta' nell'economia italiana?",
     opts:["Una catena di negozi che vende solo prodotti italiani Made in Italy","Una strategia di delocalizzazione per ridurre i costi di trasporto","Un modello che collega direttamente produttori locali e consumatori senza intermediari","Un tipo di contratto di lavoro a breve termine nel settore agricolo"],
     ans:"Un modello che collega direttamente produttori locali e consumatori senza intermediari",
     hint:"A short, direct connection between local producers and consumers. Farmers' markets and solidarity purchasing groups exemplify this trend."}
  ,{type:"match",pairs:[{trg:"il debito estero",src:"the foreign debt"},{trg:"la microfinanza",src:"microfinance"},{trg:"la zona franca",src:"the free trade zone"},{trg:"la crescita demografica",src:"population growth"}]},{type:"mc",q:"How do you say \"World Trade Organization\" in Italian?",opts:["il tavolo","la bicicletta","la finestra","l'organizzazione mondiale del commercio"],ans:"l'organizzazione mondiale del commercio",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Molte aziende usano la {1} per tagliare i costi di produzione.",a:["delocalizzazione"],opts:["delocalizzazione","microfinanza","filiera","embargo"],hint:"Moving production to another country to reduce labour costs.",sSrc:"Many companies use {1} to cut production costs."}]
};
export default BATCH3_L_1;
