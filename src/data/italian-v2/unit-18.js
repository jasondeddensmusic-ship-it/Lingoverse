// Italian V2 Unit 18 — L'ambiente (The Environment) (B1.2)
// CILS/CELI B1 aligned. Environment, climate change, sustainability vocabulary.

const UNIT_18 = {
  n:18, lang:"it", srcLang:"en", track:"v2",
  title:"L'ambiente", sub:"The Environment",
  icon:"🌍", level:"B1.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u18l1", title:"L'ambiente naturale", icon:"🌿", xp:15, board:true, steps:[
      {type:"intro", title:"L'ambiente naturale",
       desc:"Learn vocabulary for discussing the environment, pollution, and recycling in Italian. These are essential topics for modern conversation and CILS exam preparation.",
       goals:["Discuss environmental issues in Italian","Name types of pollution and waste","Talk about recycling and sustainability"]},

      {type:"teach", trg:"l'ambiente", src:"the environment", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'ambiens' (surrounding).\nAlso means 'room' or 'setting' in other contexts.",
       example:"A: Dobbiamo proteggere l'ambiente.\nB: Sono d'accordo. E una priorita.",
       exampleSrc:"A: We must protect the environment.\nB: I agree. It is a priority.",
       funFact:"'Ambiente' has multiple meanings: the natural environment, a room in a house ('un appartamento di tre ambienti'), or the atmosphere of a place ('l'ambiente e molto accogliente'). The environmental meaning dominates modern usage. 'Ambientalista' is the word for environmentalist."},

      {type:"teach", trg:"l'inquinamento", src:"the pollution", pos:"noun", gender:"m",
       note:"Masculine. From 'inquinare' (to pollute).\n'Inquinamento atmosferico' = air pollution.",
       example:"A: L'inquinamento dell'aria e un problema serio.\nB: Soprattutto nelle grandi citta.",
       exampleSrc:"A: Air pollution is a serious problem.\nB: Especially in big cities.",
       funFact:"Northern Italy, particularly the Po Valley, has some of Europe's worst air quality due to geography (the Alps trap pollution) and industry. Milan regularly exceeds EU pollution limits. Cities like Milan and Rome have implemented traffic restrictions ('blocco del traffico') on high-pollution days."},

      {type:"teach", trg:"il riciclaggio", src:"the recycling", pos:"noun", gender:"m",
       note:"Masculine. From 'riciclare' (to recycle).\nAlso: 'la raccolta differenziata' = sorted waste collection.",
       example:"A: Il riciclaggio e obbligatorio in Italia?\nB: Si, la raccolta differenziata e in tutte le citta.",
       exampleSrc:"A: Is recycling mandatory in Italy?\nB: Yes, sorted waste collection is in all cities.",
       funFact:"Italy has one of Europe's highest recycling rates, especially in the north. 'La raccolta differenziata' (sorted collection) requires separating waste into specific bins by color: blue (paper), yellow (plastic), brown (organic), green (glass), gray (general waste). Rules vary by city."},

      {type:"teach", trg:"i rifiuti", src:"the waste / rubbish", pos:"noun", gender:"m",
       note:"Masculine plural. Singular: il rifiuto. From 'rifiutare' (to refuse).\n'Rifiuti organici' = organic waste.",
       example:"A: Dove butto i rifiuti?\nB: Dipende. Plastica nel giallo, carta nel blu.",
       exampleSrc:"A: Where do I throw the waste?\nB: It depends. Plastic in yellow, paper in blue.",
       funFact:"'Rifiuto' literally means 'something refused/rejected.' Italian waste management varies dramatically by city. Treviso in the Veneto region achieves over 85% recycling. Naples has historically struggled with waste management, a problem linked to organized crime in the 'Terra dei Fuochi' (Land of Fires) scandal."},

      {type:"teach", trg:"l'energia rinnovabile", src:"renewable energy", pos:"noun", gender:"f",
       note:"Feminine. 'Rinnovabile' = renewable, from 'rinnovare' (to renew).\n'Energia solare' = solar. 'Energia eolica' = wind.",
       example:"A: L'Italia investe nell'energia rinnovabile?\nB: Si, soprattutto nel solare e nell'eolico.",
       exampleSrc:"A: Is Italy investing in renewable energy?\nB: Yes, especially in solar and wind.",
       funFact:"Italy is a European leader in solar energy, thanks to its geography and abundant sunshine. Southern Italy and Sicily have some of the highest solar potential in Europe. Geothermal energy ('energia geotermica') has been produced in Tuscany since 1904, making it the oldest geothermal power site in the world."},

      {type:"teach", trg:"sostenibile", src:"sustainable", pos:"adj", gender:null,
       note:"Adjective. Same form for masculine and feminine (-e ending).\n'Sviluppo sostenibile' = sustainable development.",
       example:"A: Cerchiamo soluzioni sostenibili.\nB: Il turismo sostenibile e molto importante.",
       exampleSrc:"A: We are looking for sustainable solutions.\nB: Sustainable tourism is very important.",
       funFact:"'Sostenibile' comes from 'sostenere' (to sustain, to support). The concept of 'sviluppo sostenibile' (sustainable development) entered Italian public discourse in the 1990s. Italian fashion brands have increasingly adopted 'moda sostenibile' (sustainable fashion) as a selling point."},

      {type:"teach", trg:"proteggere", src:"to protect", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: protetto.\nFrom Latin 'protegere' (to cover in front).",
       example:"A: Dobbiamo proteggere la natura.\nB: Ogni piccolo gesto conta.",
       exampleSrc:"A: We must protect nature.\nB: Every small action counts.",
       funFact:"'Proteggere' has an irregular past participle: 'protetto' (not 'protegguto'). Italy has 25 national parks ('parchi nazionali') and hundreds of protected areas. The oldest is Gran Paradiso (1922), created to protect the Alpine ibex from extinction."},

      {type:"teach", trg:"riciclare", src:"to recycle", pos:"verb", gender:null,
       note:"Regular -are verb. From French 'recycler.'\n'Riciclare la plastica' = to recycle plastic.",
       example:"A: Bisogna riciclare di piu.\nB: Io riciclo tutto: carta, vetro, plastica.",
       exampleSrc:"A: We need to recycle more.\nB: I recycle everything: paper, glass, plastic.",
       funFact:"Italian recycling goes beyond household waste. 'Riciclare' is also used metaphorically: 'riciclare un'idea' (to recycle an idea), 'riciclare un vestito' (to repurpose a garment). In criminal contexts, 'riciclare denaro' means 'to launder money,' using the same recycling metaphor."},

      // Quiz steps
      {type:"mc", q:"What is 'l'inquinamento'?",
       opts:["Pollution","Recycling","Energy","Waste"],
       ans:"Pollution",
       hint:"From 'inquinare' (to pollute). Northern Italy's Po Valley has some of Europe's worst air quality."},

      {type:"fb", s:"Dobbiamo {1} l'ambiente.",
       a:["proteggere"],
       opts:["proteggere","inquinare","riciclare","sprecare"],
       hint:"We must keep the environment safe from harm. This verb means to shield or defend. Irregular past participle: protetto.",
       sSrc:"We must {1} the environment."},

      {type:"match", pairs:[
        {trg:"l'ambiente", src:"the environment"},
        {trg:"l'inquinamento", src:"the pollution"},
        {trg:"il riciclaggio", src:"the recycling"},
        {trg:"i rifiuti", src:"the waste"},
        {trg:"sostenibile", src:"sustainable"}
      ]},

      {type:"mc", q:"What is 'la raccolta differenziata'?",
       opts:["Sorted waste collection / recycling","A type of farming","A collection of art","A different opinion"],
       ans:"Sorted waste collection / recycling",
       hint:"This is the Italian system of separating waste into colored bins: blue for paper, yellow for plastic, brown for organic."},

      {type:"fb", s:"L'Italia investe nell'energia {1}.",
       a:["rinnovabile"],
       opts:["rinnovabile","sostenibile","naturale","nucleare"],
       hint:"This type of energy can be renewed endlessly: solar, wind, geothermal. From 'rinnovare' (to renew).",
       sSrc:"Italy invests in {1} energy."},

      {type:"mc", q:"What does 'riciclare' mean?",
       opts:["To recycle","To refuse","To reduce","To reuse"],
       ans:"To recycle",
       hint:"From French 'recycler.' Italy has one of Europe's highest recycling rates. The noun is 'il riciclaggio.'"},

      {type:"fb", s:"Dove butto i {1}? Plastica o carta?",
       a:["rifiuti"],
       opts:["rifiuti","ambienti","riciclaggi","inquinamenti"],
       hint:"This word means waste or rubbish. You need to sort them into the correct colored bin.",
       sSrc:"Where do I throw the {1}? Plastic or paper?"},

      {type:"mc", q:"Which region of Italy has the worst air quality?",
       opts:["The Po Valley (northern Italy)","Sicily","Sardinia","The Amalfi Coast"],
       ans:"The Po Valley (northern Italy)",
       hint:"The Alps trap pollution from industry and traffic. Milan regularly exceeds EU pollution limits."}
    ]},

    {id:"itv2_u18l2", title:"Il cambiamento climatico", icon:"🌡️", xp:15, board:true, steps:[
      {type:"intro", title:"Il cambiamento climatico",
       desc:"Learn to discuss climate change in Italian: greenhouse effect, emissions, and global warming. These terms appear frequently in Italian news and are essential for B1-level conversation.",
       goals:["Discuss climate change in Italian","Understand greenhouse effect terminology","Express opinions about environmental policies"]},

      {type:"teach", trg:"il cambiamento climatico", src:"climate change", pos:"noun", gender:"m",
       note:"Masculine. 'Cambiamento' from 'cambiare' (to change) + 'climatico' (climatic).\nAlso: 'il riscaldamento globale' = global warming.",
       example:"A: Il cambiamento climatico e reale?\nB: Si, la scienza e chiara.",
       exampleSrc:"A: Is climate change real?\nB: Yes, the science is clear.",
       funFact:"Italy is particularly vulnerable to climate change. Venice faces increasing flooding ('acqua alta'), glaciers in the Alps are shrinking rapidly, and southern Italy experiences more extreme droughts and heatwaves. The Italian word 'cambiamento' emphasizes change as a process."},

      {type:"teach", trg:"l'effetto serra", src:"the greenhouse effect", pos:"noun", gender:"m",
       note:"Masculine. 'Effetto' = effect. 'Serra' = greenhouse (for plants).\n'Gas serra' = greenhouse gases.",
       example:"A: L'effetto serra sta peggiorando.\nB: A causa delle emissioni di CO2.",
       exampleSrc:"A: The greenhouse effect is getting worse.\nB: Because of CO2 emissions.",
       funFact:"'Serra' literally means a greenhouse (the building where plants are grown). The 'effetto serra' metaphor works the same way in Italian as in English: gases trap heat like glass in a greenhouse. 'I gas serra' (greenhouse gases) is the plural. Italy signed the Paris Agreement in 2015."},

      {type:"teach", trg:"le emissioni", src:"the emissions", pos:"noun", gender:"f",
       note:"Feminine plural. Singular: l'emissione. From 'emettere' (to emit).\n'Emissioni di CO2' = CO2 emissions.",
       example:"A: Dobbiamo ridurre le emissioni.\nB: L'Europa ha fissato obiettivi ambiziosi.",
       exampleSrc:"A: We must reduce emissions.\nB: Europe has set ambitious targets.",
       funFact:"'Emettere' (to emit) is an irregular verb. Past participle: 'emesso.' Italy has committed to the EU Green Deal targets of reducing emissions by 55% by 2030. The country's main emission sources are transportation, industry, and agriculture. 'Zero emissioni' (zero emissions) is the goal."},

      {type:"teach", trg:"la temperatura", src:"the temperature", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'temperatura' (correct mixture).\n'La temperatura media' = average temperature.",
       example:"A: La temperatura media e aumentata di un grado.\nB: Sembra poco, ma le conseguenze sono enormi.",
       exampleSrc:"A: The average temperature has risen by one degree.\nB: It seems small, but the consequences are enormous.",
       funFact:"Italy uses Celsius exclusively. When Italians discuss climate change, they reference the 1.5 degree Celsius target from the Paris Agreement. Italian summers have become noticeably hotter, with record temperatures exceeding 48 degrees Celsius in Sicily in 2021."},

      {type:"teach", trg:"la siccita", src:"the drought", pos:"noun", gender:"f",
       note:"Feminine. Invariable: same form singular and plural.\nFrom Latin 'siccitas' (dryness).",
       example:"A: La siccita sta distruggendo i raccolti.\nB: Non piove da tre mesi.",
       exampleSrc:"A: The drought is destroying the crops.\nB: It has not rained for three months.",
       funFact:"Italy's Po River, the country's longest, has experienced severe droughts in recent years, threatening agriculture in the Po Valley (Italy's breadbasket). Rice production, for which Italy is Europe's largest producer, is particularly affected. 'Siccita' is invariable: la siccita, le siccita."},

      {type:"teach", trg:"lo scioglimento", src:"the melting", pos:"noun", gender:"m",
       note:"Masculine. From 'sciogliere' (to melt, to dissolve).\n'Lo scioglimento dei ghiacciai' = melting of glaciers.",
       example:"A: Lo scioglimento dei ghiacciai e accelerato.\nB: Il ghiacciaio della Marmolada e quasi scomparso.",
       exampleSrc:"A: The melting of glaciers has accelerated.\nB: The Marmolada glacier has nearly disappeared.",
       funFact:"The Marmolada glacier in the Dolomites lost a massive section in 2022, causing a deadly avalanche. Italian Alpine glaciers have lost over 60% of their volume since 1850. Scientists predict many will disappear entirely within decades. The Italian Alpine Club tracks glacier retreat annually."},

      {type:"teach", trg:"l'inondazione", src:"the flood", pos:"noun", gender:"f",
       note:"Feminine. From 'inondare' (to flood).\n'Alluvione' is the more common word for a major flood event.",
       example:"A: L'inondazione ha distrutto il paese.\nB: Centinaia di famiglie hanno perso la casa.",
       exampleSrc:"A: The flood destroyed the town.\nB: Hundreds of families lost their homes.",
       funFact:"Italy experiences frequent flooding, especially in Emilia-Romagna and Liguria. The catastrophic 2023 floods in Emilia-Romagna affected over 36,000 people. Venice's 'MOSE' barrier system, completed after decades of delays, now protects against 'acqua alta' (high water) flooding."},

      {type:"teach", trg:"ridurre", src:"to reduce", pos:"verb", gender:null,
       note:"Irregular -rre verb. Past participle: ridotto.\nFrom Latin 'reducere' (to lead back).",
       example:"A: Come possiamo ridurre le emissioni?\nB: Usando i trasporti pubblici e riciclando.",
       exampleSrc:"A: How can we reduce emissions?\nB: By using public transport and recycling.",
       funFact:"'Ridurre' belongs to the family of -durre verbs (from Latin -ducere): produrre (to produce), condurre (to lead), tradurre (to translate). All are irregular with past participles in -otto: ridotto, prodotto, condotto, tradotto. They are among the most useful Italian verbs."},

      // Quiz steps
      {type:"mc", q:"What is 'l'effetto serra'?",
       opts:["The greenhouse effect","The butterfly effect","The domino effect","The placebo effect"],
       ans:"The greenhouse effect",
       hint:"'Serra' means greenhouse (for plants). Gases trap heat like glass in a greenhouse. 'Gas serra' = greenhouse gases."},

      {type:"fb", s:"Dobbiamo ridurre le {1} di CO2.",
       a:["emissioni"],
       opts:["emissioni","temperature","inondazioni","siccita"],
       hint:"These are the harmful gases released into the atmosphere. The EU has set targets to cut them by 55% by 2030.",
       sSrc:"We must reduce CO2 {1}."},

      {type:"match", pairs:[
        {trg:"il cambiamento climatico", src:"climate change"},
        {trg:"l'effetto serra", src:"the greenhouse effect"},
        {trg:"le emissioni", src:"the emissions"},
        {trg:"la siccita", src:"the drought"},
        {trg:"l'inondazione", src:"the flood"}
      ]},

      {type:"mc", q:"What is happening to Italian Alpine glaciers?",
       opts:["They have lost over 60% of their volume since 1850","They are growing larger","They are unchanged","They have moved south"],
       ans:"They have lost over 60% of their volume since 1850",
       hint:"The Marmolada glacier is nearly gone. Scientists predict many will disappear entirely within decades."},

      {type:"fb", s:"Lo {1} dei ghiacciai e accelerato.",
       a:["scioglimento"],
       opts:["scioglimento","cambiamento","inquinamento","riciclaggio"],
       hint:"The glaciers are losing ice and turning to water. This noun comes from 'sciogliere' (to melt/dissolve).",
       sSrc:"The {1} of glaciers has accelerated."},

      {type:"mc", q:"What is the past participle of 'ridurre'?",
       opts:["Ridotto","Riduto","Ridurso","Riducito"],
       ans:"Ridotto",
       hint:"Like produrre > prodotto and tradurre > tradotto, this -durre verb follows the -otto pattern."},

      {type:"fb", s:"La {1} sta distruggendo i raccolti. Non piove da mesi.",
       a:["siccita"],
       opts:["siccita","inondazione","temperatura","emissione"],
       hint:"There is no rain. The crops are dying from lack of water. This invariable noun means drought.",
       sSrc:"The {1} is destroying the crops. It has not rained for months."},

      {type:"mc", q:"What is the 'MOSE' system?",
       opts:["A barrier protecting Venice from floods","A recycling program in Rome","A solar energy project in Sicily","A water purification plant in Milan"],
       ans:"A barrier protecting Venice from floods",
       hint:"This engineering project protects Venice from 'acqua alta' (high water). It was completed after decades of construction."}
    ]},

    {id:"itv2_u18l3", title:"Agire per il pianeta", icon:"♻️", xp:15, board:true, steps:[
      {type:"intro", title:"Agire per il pianeta",
       desc:"Learn action verbs for environmental responsibility: waste, save, recycle, and raise awareness. Express what individuals and governments can do for the planet.",
       goals:["Use action verbs for environmental topics","Express what should be done for the planet","Discuss personal and collective responsibility"]},

      {type:"teach", trg:"sprecare", src:"to waste", pos:"verb", gender:null,
       note:"Regular -are verb. 'Sprecare acqua/energia/cibo' = to waste water/energy/food.\nFrom Germanic 'sprekan' (to scatter).",
       example:"A: Non sprecare l'acqua!\nB: Hai ragione, chiudo il rubinetto.",
       exampleSrc:"A: Don't waste water!\nB: You are right, I'll turn off the faucet.",
       funFact:"Italy has a serious food waste problem: about 65 kg per person per year. The 2016 'Legge Gadda' (Gadda Law) made it easier for businesses to donate unsold food. 'Spreco alimentare' (food waste) is a major topic in Italian public debate. Many restaurants now offer 'doggy bags' (formerly considered embarrassing)."},

      {type:"teach", trg:"risparmiare", src:"to save (conserve/economize)", pos:"verb", gender:null,
       note:"Regular -are verb. 'Risparmiare energia' = to save energy.\n'Il risparmio' = savings. From Germanic 'sparjan' (to spare).",
       example:"A: Come possiamo risparmiare energia?\nB: Spegnendo le luci quando usciamo.",
       exampleSrc:"A: How can we save energy?\nB: By turning off the lights when we leave.",
       funFact:"'Risparmiare' means both to save money and to conserve resources. Italians are culturally inclined toward saving: 'il risparmio' (thrift) is a traditional value. Italy's postal savings system ('Buoni Fruttiferi Postali') is one of the world's oldest savings instruments, dating back to 1875."},

      {type:"teach", trg:"sensibilizzare", src:"to raise awareness", pos:"verb", gender:null,
       note:"Regular -are verb. From 'sensibile' (sensitive/aware).\n'Campagna di sensibilizzazione' = awareness campaign.",
       example:"A: Dobbiamo sensibilizzare i giovani.\nB: Le scuole fanno gia molto.",
       exampleSrc:"A: We must raise awareness among young people.\nB: Schools are already doing a lot.",
       funFact:"'Sensibilizzare' literally means 'to make sensitive to' an issue. Italian environmental education is mandatory in schools since 2020 ('educazione civica' includes environmental topics). Greta Thunberg's 'Fridays for Future' movement was particularly popular in Italy, with massive student protests."},

      {type:"teach", trg:"lo spreco", src:"the waste (act of wasting)", pos:"noun", gender:"m",
       note:"Masculine. From 'sprecare' (to waste).\n'Spreco alimentare' = food waste. 'Spreco di risorse' = waste of resources.",
       example:"A: Lo spreco di cibo e un problema enorme.\nB: Bisogna comprare solo il necessario.",
       exampleSrc:"A: Food waste is an enormous problem.\nB: We need to buy only what is necessary.",
       funFact:"Italy ranks behind only the UK and Germany in food waste in Europe. The Italian campaign 'Spreco Zero' (Zero Waste) promotes awareness. Many Italian cities have introduced composting programs, and some supermarkets sell imperfect fruit at reduced prices to fight waste."},

      {type:"teach", trg:"il pannello solare", src:"the solar panel", pos:"noun", gender:"m",
       note:"Masculine. 'Pannello' = panel. 'Solare' = solar.\n'Installare pannelli solari' = to install solar panels.",
       example:"A: Avete installato i pannelli solari?\nB: Si, risparmiamo molto sulla bolletta.",
       exampleSrc:"A: Did you install solar panels?\nB: Yes, we save a lot on the electricity bill.",
       funFact:"Italy was an early adopter of solar energy in Europe. The 'Conto Energia' incentive program (2005-2013) made Italy one of the world's largest solar markets. Southern Italy receives about 2,000 hours of sunshine per year, making solar panels highly efficient."},

      {type:"teach", trg:"la raccolta differenziata", src:"sorted waste collection", pos:"noun", gender:"f",
       note:"Feminine. 'Raccolta' = collection. 'Differenziata' = sorted/differentiated.\nItaly's standard recycling system.",
       example:"A: Fai la raccolta differenziata?\nB: Certo! Separo plastica, carta, vetro e organico.",
       exampleSrc:"A: Do you do sorted waste collection?\nB: Of course! I separate plastic, paper, glass, and organic.",
       funFact:"Italian recycling rules can be bewildering. Each municipality sets its own rules. In some cities, collection happens daily; in others, specific days are assigned to each material. Mistakes can lead to fines. 'Dove lo butto?' (Where do I throw it?) is the eternal Italian recycling question."},

      {type:"teach", trg:"l'impronta ecologica", src:"the ecological footprint", pos:"noun", gender:"f",
       note:"Feminine. 'Impronta' = footprint, mark. 'Ecologica' = ecological.\n'Ridurre la propria impronta' = to reduce one's footprint.",
       example:"A: Qual e la tua impronta ecologica?\nB: Cerco di ridurla usando la bicicletta.",
       exampleSrc:"A: What is your ecological footprint?\nB: I try to reduce it by using my bicycle.",
       funFact:"'Impronta' means any kind of mark or print: fingerprint ('impronta digitale'), footprint ('impronta del piede'), or ecological footprint. Italy's average ecological footprint is about 4.4 global hectares per person, slightly below the European average but still unsustainable."},

      {type:"teach", trg:"inquinare", src:"to pollute", pos:"verb", gender:null,
       note:"Regular -are verb. 'Inquinare l'aria/l'acqua' = to pollute the air/water.\nFrom Latin 'inquinare' (to stain, to defile).",
       example:"A: Le fabbriche inquinano il fiume.\nB: Il governo deve intervenire.",
       exampleSrc:"A: The factories are polluting the river.\nB: The government must intervene.",
       funFact:"'Inquinare' comes from Latin 'inquinare' (to stain). Italy's industrial north has historically produced significant pollution, but strict EU regulations have improved air and water quality considerably since the 1990s. The Adriatic Sea, once severely polluted, has seen remarkable recovery."},

      // Quiz steps
      {type:"mc", q:"What does 'sprecare' mean?",
       opts:["To waste","To save","To recycle","To protect"],
       ans:"To waste",
       hint:"The opposite of 'risparmiare' (to save). Italy wastes about 65 kg of food per person per year."},

      {type:"fb", s:"Come possiamo {1} energia?",
       a:["risparmiare"],
       opts:["risparmiare","sprecare","inquinare","riciclare"],
       hint:"The goal is to use less energy, to conserve it. This verb means to save or economize.",
       sSrc:"How can we {1} energy?"},

      {type:"match", pairs:[
        {trg:"sprecare", src:"to waste"},
        {trg:"risparmiare", src:"to save / conserve"},
        {trg:"sensibilizzare", src:"to raise awareness"},
        {trg:"inquinare", src:"to pollute"},
        {trg:"riciclare", src:"to recycle"}
      ]},

      {type:"mc", q:"What is 'la raccolta differenziata'?",
       opts:["Sorted waste collection (recycling)","A type of farming","A music collection","A different opinion"],
       ans:"Sorted waste collection (recycling)",
       hint:"Italians separate waste into colored bins. Rules vary by city. 'Dove lo butto?' is the eternal question."},

      {type:"fb", s:"Avete installato i {1} solari sul tetto?",
       a:["pannelli"],
       opts:["pannelli","rifiuti","ambienti","spreco"],
       hint:"These flat devices on the roof convert sunlight into electricity. Italy is a European leader in this technology.",
       sSrc:"Did you install {1} on the roof?"},

      {type:"mc", q:"What does 'sensibilizzare' mean?",
       opts:["To raise awareness","To be sensitive","To simplify","To sanitize"],
       ans:"To raise awareness",
       hint:"From 'sensibile' (aware). This verb means to make people aware of an important issue. Schools play a key role."},

      {type:"fb", s:"Le fabbriche {1} il fiume.",
       a:["inquinano"],
       opts:["inquinano","proteggono","riciclano","risparmiano"],
       hint:"The factories are making the river dirty and contaminated. This verb means to pollute.",
       sSrc:"The factories {1} the river."},

      {type:"mc", q:"What is 'l'impronta ecologica'?",
       opts:["The ecological footprint","A fingerprint","An eco-friendly stamp","A recycling symbol"],
       ans:"The ecological footprint",
       hint:"'Impronta' means footprint or mark. This measures the environmental impact of a person's lifestyle."}
    ]}
  ]
};
export default UNIT_18;
