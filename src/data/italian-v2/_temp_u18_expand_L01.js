// Unit 18 Expansion. Lesson 4: Climate Action
const LESSON_4 = {
  id:"itv2_u18l4", title:"Azioni per il clima", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"Azioni per il clima",
     desc:"Learn vocabulary for climate action, activism, and government policies. Italy is at the forefront of European climate debates, and these terms appear daily in the news.",
     goals:["Discuss climate activism in Italian","Understand environmental policy vocabulary","Express opinions about climate action"]},

    {type:"teach", trg:"l'attivista", src:"the activist", pos:"noun", gender:"m",
     note:"Masculine/feminine: l'attivista. -ista ending.\n'Attivista ambientale' = environmental activist.",
     example:"A: Gli attivisti chiedono azioni concrete.\nB: Hanno organizzato una manifestazione in piazza.",
     exampleSrc:"A: The activists are demanding concrete actions.\nB: They organized a demonstration in the square.",
     funFact:"Environmental activism has grown rapidly in Italy. The 'Fridays for Future' movement inspired massive student protests. 'Ultima Generazione' (Last Generation) has gained attention with controversial tactics like throwing soup on artworks and blocking traffic. Public opinion is divided."},

    {type:"teach", trg:"la manifestazione", src:"the demonstration / protest", pos:"noun", gender:"f",
     note:"Feminine. From 'manifestare' (to demonstrate).\n'Scendere in piazza' = to take to the streets.",
     example:"A: C'e una manifestazione per il clima sabato.\nB: Vengo anch'io! Dove ci incontriamo?",
     exampleSrc:"A: There is a climate demonstration on Saturday.\nB: I am coming too! Where shall we meet?",
     funFact:"Italy has a strong tradition of public protest. 'Scendere in piazza' (to go down to the square) is the standard expression for protesting. Italian piazzas were designed for public gathering, and they still serve that purpose. Climate marches regularly draw tens of thousands."},

    {type:"teach", trg:"la politica ambientale", src:"environmental policy", pos:"noun", gender:"f",
     note:"Feminine. 'Politica' = policy/politics. 'Ambientale' = environmental.\n'Politiche verdi' = green policies.",
     example:"A: La politica ambientale italiana e migliorata?\nB: Si, ma c'e ancora molto da fare.",
     exampleSrc:"A: Has Italian environmental policy improved?\nB: Yes, but there is still a lot to do.",
     funFact:"Italy's environmental policy is shaped by EU directives. The country committed to the European Green Deal and aims for carbon neutrality by 2050. In 2022, Italy added environmental protection to its Constitution (Article 9), becoming one of the first countries to constitutionally protect the environment."},

    {type:"teach", trg:"l'accordo di Parigi", src:"the Paris Agreement", pos:"noun", gender:"m",
     note:"Masculine. 'Accordo' = agreement. Signed in 2015.\nGlobal climate pact to limit warming to 1.5 degrees.",
     example:"A: L'Italia ha firmato l'accordo di Parigi.\nB: Si, si e impegnata a ridurre le emissioni.",
     exampleSrc:"A: Italy signed the Paris Agreement.\nB: Yes, it committed to reducing emissions.",
     funFact:"The Paris Agreement ('Accordo di Parigi') is the cornerstone of global climate policy. Italy signed in 2015 and ratified in 2016. The agreement's goal of limiting warming to 1.5 degrees Celsius requires drastic emission cuts. Italy's progress has been mixed: renewable energy is growing, but transportation emissions remain high."},

    {type:"teach", trg:"la carbon tax", src:"the carbon tax", pos:"noun", gender:"f",
     note:"Feminine. 'Tassa sulle emissioni di carbonio.'\nA tax on CO2 emissions to discourage pollution.",
     example:"A: Sei favorevole alla carbon tax?\nB: Si, chi inquina deve pagare.",
     exampleSrc:"A: Are you in favor of the carbon tax?\nB: Yes, those who pollute should pay.",
     funFact:"The carbon tax debate is politically contentious in Italy. 'Chi inquina paga' (the polluter pays) is the principle behind it. The EU Emissions Trading System already covers large industries. A broader carbon tax affecting fuel and heating would hit consumers' wallets, making it politically difficult."},

    {type:"teach", trg:"la transizione ecologica", src:"the ecological transition", pos:"noun", gender:"f",
     note:"Feminine. 'Transizione' = transition. 'Ecologica' = ecological.\nItaly created a dedicated ministry for this.",
     example:"A: La transizione ecologica richiede grandi investimenti.\nB: Ma crea anche nuovi posti di lavoro.",
     exampleSrc:"A: The ecological transition requires large investments.\nB: But it also creates new jobs.",
     funFact:"Italy created the 'Ministero della Transizione Ecologica' (Ministry of Ecological Transition) in 2021, signaling the importance of this issue. The ministry handles energy, climate, and environmental policy. The transition involves moving from fossil fuels to renewables, electrifying transport, and renovating buildings."},

    {type:"teach", trg:"il combustibile fossile", src:"the fossil fuel", pos:"noun", gender:"m",
     note:"Masculine. 'Combustibile' = fuel. 'Fossile' = fossil.\n'Eliminare i combustibili fossili' = to phase out fossil fuels.",
     example:"A: Dobbiamo eliminare i combustibili fossili.\nB: Ma il gas naturale e ancora necessario nella transizione.",
     exampleSrc:"A: We must eliminate fossil fuels.\nB: But natural gas is still necessary in the transition.",
     funFact:"Italy depends heavily on imported natural gas ('gas naturale'), mainly from Algeria, Azerbaijan, and LNG imports. The country has no nuclear power (closed after a 1987 referendum) and limited domestic fossil fuel production. This energy dependence makes the transition both urgent and challenging."},

    {type:"teach", trg:"l'impronta di carbonio", src:"the carbon footprint", pos:"noun", gender:"f",
     note:"Feminine. 'Impronta' = footprint. 'Carbonio' = carbon.\n'Ridurre l'impronta di carbonio' = to reduce the carbon footprint.",
     example:"A: Qual e la tua impronta di carbonio?\nB: Cerco di ridurla usando meno la macchina.",
     exampleSrc:"A: What is your carbon footprint?\nB: I try to reduce it by using the car less.",
     funFact:"The average Italian carbon footprint is about 5.5 tonnes of CO2 per year, below the EU average but still unsustainable. Transportation is the biggest contributor, followed by home heating. 'Compensare le emissioni' (to offset emissions) through tree planting is gaining popularity."},

    {type:"teach", trg:"il Fridays for Future", src:"Fridays for Future", pos:"noun", gender:"m",
     note:"Masculine. The global youth climate movement.\nVery popular among Italian students.",
     example:"A: Mia figlia partecipa al Fridays for Future.\nB: Brava! I giovani devono farsi sentire.",
     exampleSrc:"A: My daughter participates in Fridays for Future.\nB: Good for her! Young people must make their voices heard.",
     funFact:"The Fridays for Future movement found fertile ground in Italy. Italian students organized some of Europe's largest climate strikes, with over a million participants in September 2019. Greta Thunberg visited Italy multiple times. The movement raised environmental awareness across generations."},

    // Quiz steps
    {type:"mc", q:"What did Italy add to its Constitution in 2022?",
     opts:["Environmental protection","Freedom of digital expression","Animal rights","The right to free healthcare"],
     ans:"Environmental protection",
     hint:"Article 9 was amended to include this. Italy was among the first countries to give the natural world this level of legal p...."},

    {type:"fb", s:"C'e una {1} per il clima sabato in piazza.",
     a:["manifestazione"],
     opts:["manifestazione","riunione","lezione","partita"],
     hint:"A public protest where people gather to demand action. 'Scendere in piazza' is the Italian expression for protesting.",
     sSrc:"There is a climate {1} on Saturday in the square."},

    {type:"match", pairs:[
      {trg:"l'attivista", src:"the activist"},
      {trg:"la transizione ecologica", src:"the ecological transition"},
      {trg:"il combustibile fossile", src:"the fossil fuel"},
      {trg:"l'impronta di carbonio", src:"the carbon footprint"},
      {trg:"l'accordo di Parigi", src:"the Paris Agreement"}
    ]},

    {type:"mc", q:"What is the 'Ministero della Transizione Ecologica'?",
     opts:["A university department for ecology students","An Italian government ministry handling energy and climate","A non-profit organization for wildlife","An EU institution based in Brussels"],
     ans:"An Italian government ministry handling energy and climate",
     hint:"Created in 2021, this m... coordinates Italy's shift from fossil fuels to renewables and manages environmental policy."},

    {type:"fb", s:"Dobbiamo eliminare i {1} fossili.",
     a:["combustibili"],
     opts:["combustibili","pannelli","rifiuti","ambienti"],
     hint:"These fuels (coal, oil, gas) come from ancient organic matter. Burning them produces CO2.",
     sSrc:"We must eliminate fossil {1}."},

    {type:"mc", q:"Why is Italy's energy transition especially challenging?",
     opts:["Italy produces too much nuclear energy","Italy has no sunshine for solar panels","Italy depends heavily on imported natural gas","Italy has already completed the transition"],
     ans:"Italy depends heavily on imported natural gas",
     hint:"Without nuclear power and with limited domestic fossil fuels, I... imports most of its g... from abroad."},

    {type:"fb", s:"Cerco di ridurre la mia {1} di carbonio.",
     a:["impronta"],
     opts:["impronta","emissione","energia","politica"],
     hint:"This measures your personal environmental impact. The word also means 'footprint' in the physical sense.",
     sSrc:"I try to reduce my carbon {1}."},

    {type:"mc", q:"What principle does the carbon tax follow?",
     opts:["Chi risparmia guadagna (who saves, earns)","Chi lavora mangia (who works, eats)","Chi primo arriva meglio alloggia (first come, first served)","Chi inquina paga (the polluter pays)"],
     ans:"Chi inquina paga (the polluter pays)",
     hint:"This Italian expression summarizes the logic: those responsible for pollution should bear the financial cost of their emissions."}
  ]
};
export default LESSON_4;
