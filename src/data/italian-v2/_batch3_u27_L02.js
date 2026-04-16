// Batch 3 — Unit 27 Lesson 2 (Science: Physics & Environment)
const BATCH3_L_2 = {
  id:"itv2_u27l_b3_2", title:"Fisica e ambiente", icon:"🌡️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Fisica e ambiente",
     desc:"Learn vocabulary for physics concepts, environmental science, and climate discussions. These terms are essential for understanding science news and environmental debates in Italian.",
     goals:["Describe fundamental physics concepts","Discuss environmental issues and climate science","Express opinions about science and sustainability"]},

    {type:"teach", trg:"l'energia", src:"the energy", pos:"noun", gender:"f",
     note:"Feminine noun. 'Energia rinnovabile' = renewable energy.\n'Energia nucleare/solare/eolica' = nuclear/solar/wind energy.",
     example:"A: L'Italia deve investire di piu nelle energie rinnovabili.\nB: Il sole e il vento non mancano certo.",
     exampleSrc:"A: Italy must invest more in renewable energy.\nB: Sun and wind are certainly not lacking.",
     funFact:"Italy voted against nuclear energy in a 1987 referendum after Chernobyl and confirmed the ban in 2011 after Fukushima. The country relies heavily on natural gas imports and is rapidly expanding solar power."},

    {type:"teach", trg:"la gravita", src:"gravity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nAlso means 'seriousness.' 'Forza di gravita' = gravitational force.",
     example:"A: La gravita tiene i pianeti in orbita intorno al sole.\nB: Galileo fu il primo a studiarla sistematicamente.",
     exampleSrc:"A: Gravity keeps the planets in orbit around the sun.\nB: Galileo was the first to study it systematically.",
     funFact:"Galileo's alleged experiments dropping objects from the Tower of Pisa may be legendary, but his rigorous study of falling bodies at the University of Padua truly laid the foundations for Newton's gravitational theory."},

    {type:"teach", trg:"la materia", src:"matter", pos:"noun", gender:"f",
     note:"Feminine noun. Everything that has mass and occupies space.\n'Materia prima' = raw material. Also means 'subject (of study).'",
     example:"A: La materia e composta da atomi e molecole.\nB: Esistono tre stati: solido, liquido e gassoso.",
     exampleSrc:"A: Matter is composed of atoms and molecules.\nB: There are three states: solid, liquid, and gas.",
     funFact:"Enrico Fermi's work on matter and nuclear reactions in Rome led to the first nuclear reactor in 1942. His team, 'i ragazzi di Via Panisperna,' achieved the first controlled nuclear chain reaction at the University of Chicago."},

    {type:"teach", trg:"il clima", src:"the climate", pos:"noun", gender:"m",
     note:"Masculine noun. 'Cambiamento climatico' = climate change.\n'Clima mediterraneo/continentale' = Mediterranean/continental climate.",
     example:"A: Il clima sta cambiando rapidamente.\nB: Le temperature medie sono salite di due gradi.",
     exampleSrc:"A: The climate is changing rapidly.\nB: Average temperatures have risen by two degrees.",
     funFact:"Italy is one of the European countries most vulnerable to climate change. Rising Mediterranean temperatures threaten agriculture, tourism, and water supplies. Venice's flooding and southern desertification are visible consequences."},

    {type:"teach", trg:"l'inquinamento", src:"the pollution", pos:"noun", gender:"m",
     note:"Masculine noun. 'Inquinamento atmosferico' = air pollution.\n'Inquinamento idrico' = water pollution. 'Inquinare' (verb) = to pollute.",
     example:"A: L'inquinamento nella Pianura Padana e tra i peggiori d'Europa.\nB: Le polveri sottili superano spesso i limiti.",
     exampleSrc:"A: Pollution in the Po Valley is among the worst in Europe.\nB: Fine particulate matter often exceeds the limits.",
     funFact:"Northern Italy's Po Valley is one of Europe's most polluted areas due to industrial concentration, traffic, and geographic conditions that trap pollutants. Milan, Turin, and Brescia regularly exceed EU air quality limits."},

    {type:"mc",
     q:"Perche l'Italia non usa l'energia nucleare?",
     opts:["Perche non ha abbastanza uranio sul territorio nazionale","Perche due referendum popolari (1987 e 2011) l'hanno vietata","Perche le centrali nucleari sono troppo costose per il bilancio italiano","Perche l'Unione Europea vieta il nucleare a tutti gli stati membri"],
     ans:"Perche due referendum popolari (1987 e 2011) l'hanno vietata",
     hint:"Two popular votes, triggered by nuclear disasters abroad, resulted in banning nuclear power plants in Italy."},

    {type:"teach", trg:"le emissioni", src:"the emissions", pos:"noun", gender:"f",
     note:"Feminine plural noun. Singular: l'emissione.\n'Emissioni di CO2' = CO2 emissions. 'Ridurre le emissioni' = to reduce emissions.",
     example:"A: Le emissioni di gas serra devono diminuire del 55% entro il 2030.\nB: L'Italia e in ritardo rispetto agli obiettivi.",
     exampleSrc:"A: Greenhouse gas emissions must decrease by 55% by 2030.\nB: Italy is behind on the targets.",
     funFact:"Italy's emissions have decreased since 1990 but not fast enough to meet EU targets. The country's PNIEC (Piano Nazionale Integrato Energia e Clima) outlines the path to carbon neutrality by 2050."},

    {type:"teach", trg:"la velocita", src:"velocity / speed", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Velocita della luce' = speed of light. 'A tutta velocita' = at full speed.",
     example:"A: La velocita della luce e circa 300.000 km al secondo.\nB: Nulla puo superarla secondo Einstein.",
     exampleSrc:"A: The speed of light is about 300,000 km per second.\nB: Nothing can exceed it according to Einstein.",
     funFact:"Italian physicist Galileo attempted to measure the speed of light using lanterns on distant hilltops. He concluded it was 'if not instantaneous, extraordinarily fast.' The actual measurement came later with Ole Roemer's work in 1676."},

    {type:"teach", trg:"il riciclaggio", src:"the recycling", pos:"noun", gender:"m",
     note:"Masculine noun. 'Raccolta differenziata' = waste sorting.\n'Riciclare' (verb) = to recycle. Also means 'money laundering.'",
     example:"A: Il riciclaggio dei rifiuti in Italia e migliorato molto.\nB: La raccolta differenziata e obbligatoria in molte citta.",
     exampleSrc:"A: Waste recycling in Italy has improved a lot.\nB: Waste sorting is mandatory in many cities.",
     funFact:"Italy is actually a European leader in recycling, with industrial waste recycling rates above 80%. The city of Treviso pioneered the 'porta a porta' (door-to-door) waste collection model now adopted across the country."},

    {type:"fb",
     s:"L'{1} atmosferico nella Pianura Padana supera spesso i limiti europei.",
     a:["inquinamento"],
     opts:["inquinamento","energia","clima","riciclaggio"],
     hint:"The contamination of air by harmful substances. Northern Italy's flat geography traps pollutants in the Po Valley.",
     sSrc:"Air {1} in the Po Valley often exceeds European limits."},

    {type:"teach", trg:"la temperatura", src:"the temperature", pos:"noun", gender:"f",
     note:"Feminine noun. 'Temperatura media' = average temperature.\nMeasured in gradi Celsius in Italy.",
     example:"A: La temperatura media e aumentata di quasi due gradi.\nB: Le conseguenze si vedono gia nell'agricoltura.",
     exampleSrc:"A: The average temperature has risen by almost two degrees.\nB: The consequences are already visible in agriculture.",
     funFact:"Italy uses Celsius exclusively. The Fahrenheit scale, named after a German physicist, is almost unknown in everyday Italian life. Scientists use Kelvin for absolute temperature measurements."},

    {type:"teach", trg:"la siccita", src:"the drought", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Siccita prolungata' = prolonged drought.",
     example:"A: La siccita ha devastato le colture del sud Italia.\nB: Il Po e ai livelli piu bassi mai registrati.",
     exampleSrc:"A: The drought devastated crops in southern Italy.\nB: The Po River is at the lowest levels ever recorded.",
     funFact:"Italy experienced its worst drought in 70 years in 2022, when the Po River nearly dried up. Northern rice paddies, which produce most of Europe's risotto rice, were severely damaged, threatening a cultural staple."},

    {type:"teach", trg:"il riscaldamento globale", src:"global warming", pos:"noun", gender:"m",
     note:"Masculine compound noun. The long-term increase in Earth's average temperature.\n'Effetto serra' = greenhouse effect.",
     example:"A: Il riscaldamento globale minaccia gli ecosistemi marini.\nB: Il Mediterraneo si sta riscaldando piu velocemente degli oceani.",
     exampleSrc:"A: Global warming threatens marine ecosystems.\nB: The Mediterranean is warming faster than the oceans.",
     funFact:"The Mediterranean Sea is warming 20% faster than the global average. Italian marine biologists have documented the arrival of tropical fish species in Italian waters, a visible sign of changing temperatures."},

    {type:"mc",
     q:"In quale misura l'Italia e leader in Europa nel riciclaggio?",
     opts:["Non ricicla quasi nulla rispetto agli altri paesi europei","Ha un tasso di riciclaggio industriale superiore all'80%","Ricicla solo la carta ma non la plastica o il vetro","E al livello medio degli altri paesi dell'Unione Europea"],
     ans:"Ha un tasso di riciclaggio industriale superiore all'80%",
     hint:"Despite stereotypes, Italy actually leads Europe in this area, especially with industrial waste. The 'circular economy' is a strength."},

    {type:"teach", trg:"la biodiversita", src:"biodiversity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable. The variety of life forms in an ecosystem.\n'Perdita di biodiversita' = biodiversity loss.",
     example:"A: L'Italia ha una biodiversita straordinaria.\nB: Oltre 57.000 specie animali vivono nel nostro territorio.",
     exampleSrc:"A: Italy has extraordinary biodiversity.\nB: Over 57,000 animal species live in our territory.",
     funFact:"Italy is the most biodiverse country in Europe. From Alpine ibex to Mediterranean monk seals, from Sardinian deer to Sicilian orchids, the peninsula's varied geography creates niches for an exceptional range of species."},

    {type:"match", pairs:[
      {trg:"energia", src:"energy"},
      {trg:"inquinamento", src:"pollution"},
      {trg:"emissioni", src:"emissions"},
      {trg:"siccita", src:"drought"},
      {trg:"biodiversita", src:"biodiversity"}
    ]},

    {type:"fb",
     s:"Le {1} di gas serra devono diminuire drasticamente per raggiungere gli obiettivi europei.",
     a:["emissioni"],
     opts:["emissioni","temperature","energie","sostanze"],
     hint:"Gases released into the atmosphere, especially CO2, that contribute to global warming. Targets call for drastic reductions.",
     sSrc:"Greenhouse gas {1} must decrease drastically to reach European targets."},

    {type:"mc",
     q:"Perche la siccita del 2022 e stata particolarmente grave per l'Italia?",
     opts:["Ha causato una crisi energetica perche non funzionavano le pale eoliche","Ha colpito il fiume Po e le risaie del nord, minacciando la produzione di riso","Ha provocato un referendum sul nucleare come fonte alternativa","Ha costretto il governo a importare acqua dalla Francia"],
     ans:"Ha colpito il fiume Po e le risaie del nord, minacciando la produzione di riso",
     hint:"Italy's longest river nearly dried up, threatening the rice paddies that produce most of Europe's risotto rice."}
  ]
};
export default BATCH3_L_2;
