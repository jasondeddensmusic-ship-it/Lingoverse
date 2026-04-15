// Unit 15 Expansion — Lesson 6: Household Problems
const LESSON_6 = {
  id:"itv2_u15l6", title:"Problemi in casa", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"Problemi in casa",
     desc:"Learn to describe and report household problems: leaks, broken appliances, plumbing issues, and how to call for repairs. Essential survival vocabulary for living in Italy.",
     goals:["Describe common household problems","Request repairs in Italian","Communicate with landlords about maintenance"]},

    {type:"teach", trg:"la perdita", src:"the leak", pos:"noun", gender:"f",
     note:"Feminine. From 'perdere' (to lose).\n'Perdita d'acqua' = water leak. 'Perdita di gas' = gas leak.",
     example:"A: C'e una perdita d'acqua in bagno!\nB: Chiama subito l'idraulico!",
     exampleSrc:"A: There is a water leak in the bathroom!\nB: Call the plumber right away!",
     funFact:"'Perdita' literally means 'a loss.' A water leak is 'losing' water. A gas leak ('perdita di gas') is an emergency: Italians call 800.900.999 (the national gas emergency number). Old Italian buildings with aging pipes are particularly prone to water leaks."},

    {type:"teach", trg:"l'idraulico", src:"the plumber", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'hydraulikos' (water pipe).\n'Chiamare l'idraulico' = to call the plumber.",
     example:"A: L'idraulico puo venire domani?\nB: Ha detto che viene nel pomeriggio.",
     exampleSrc:"A: Can the plumber come tomorrow?\nB: He said he is coming in the afternoon.",
     funFact:"Finding a reliable 'idraulico' in Italy is a challenge. Many work through word of mouth ('passaparola'). Emergency plumbing on weekends or holidays costs significantly more. Italians share plumber contacts like precious secrets: a good one is worth his weight in gold."},

    {type:"teach", trg:"l'elettricista", src:"the electrician", pos:"noun", gender:"m",
     note:"Masculine/feminine: l'elettricista. -ista ending, same for both genders.\nFrom 'elettrico' (electric).",
     example:"A: Le luci non funzionano. Serve un elettricista.\nB: Il mio elettricista e bravissimo.",
     exampleSrc:"A: The lights are not working. We need an electrician.\nB: My electrician is excellent.",
     funFact:"Italian electrical systems differ from many countries: the standard voltage is 230V with Type L plugs (three round pins in a line). Old buildings may have outdated wiring. The 'contatore' (electricity meter) often trips ('salta il contatore') if too many appliances run at once."},

    {type:"teach", trg:"il guasto", src:"the breakdown / malfunction", pos:"noun", gender:"m",
     note:"Masculine. From 'guastare' (to break, to ruin).\n'Guasto tecnico' = technical malfunction.",
     example:"A: C'e un guasto alla caldaia.\nB: Senza caldaia non c'e acqua calda!",
     exampleSrc:"A: The boiler has broken down.\nB: Without the boiler there is no hot water!",
     funFact:"'Guasto' covers any breakdown: 'guasto alla caldaia' (boiler failure), 'guasto all'ascensore' (elevator breakdown), 'guasto al motore' (engine failure). The verb 'guastare' also means to spoil food. The adjective 'guasto' means 'broken' or 'rotten.'"},

    {type:"teach", trg:"la caldaia", src:"the boiler", pos:"noun", gender:"f",
     note:"Feminine. 'Caldaia a gas' = gas boiler.\n'La manutenzione della caldaia' = boiler maintenance.",
     example:"A: La caldaia non si accende.\nB: Forse serve la manutenzione annuale.",
     exampleSrc:"A: The boiler won't turn on.\nB: Maybe it needs the annual maintenance.",
     funFact:"Italian law requires annual boiler maintenance ('manutenzione obbligatoria'). A certified technician checks safety and efficiency. The 'libretto della caldaia' (boiler booklet) records all maintenance. Without it, you can be fined. Boiler breakdowns in winter are every Italian tenant's nightmare."},

    {type:"teach", trg:"il rubinetto", src:"the faucet / tap", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'rubino' (ruby), from the valve shape.\n'Il rubinetto perde' = the faucet leaks.",
     example:"A: Il rubinetto della cucina perde.\nB: Prova a stringere, se no chiama l'idraulico.",
     exampleSrc:"A: The kitchen faucet is leaking.\nB: Try tightening it, otherwise call the plumber.",
     funFact:"'Rubinetto' is a diminutive of 'rubino' (ruby) because old valves had a ruby-red handle. 'Chiudere il rubinetto' (to close the faucet) is also used metaphorically: 'Il governo ha chiuso il rubinetto' means the government cut off funding."},

    {type:"teach", trg:"lo scarico", src:"the drain", pos:"noun", gender:"m",
     note:"Masculine. From 'scaricare' (to unload/drain).\n'Lo scarico e intasato' = the drain is clogged.",
     example:"A: Lo scarico del lavandino e intasato.\nB: Prova con il prodotto per gli scarichi.",
     exampleSrc:"A: The sink drain is clogged.\nB: Try with the drain cleaner product.",
     funFact:"Clogged drains ('scarichi intasati') are one of the most common household problems in Italy. Old buildings with narrow pipes suffer most. 'Il disgorgante' (drain cleaner) and 'lo sturalavandini' (plunger) are essential items. For serious blockages, a plumber uses a 'sonda' (drain snake)."},

    {type:"teach", trg:"la muffa", src:"the mold / mildew", pos:"noun", gender:"f",
     note:"Feminine. 'C'e muffa sul muro' = there is mold on the wall.\nCommon in poorly ventilated Italian apartments.",
     example:"A: C'e muffa in bagno!\nB: Apri la finestra dopo la doccia per arieggiare.",
     exampleSrc:"A: There is mold in the bathroom!\nB: Open the window after showering to air it out.",
     funFact:"Mold is a chronic problem in Italian apartments, especially in older buildings without proper insulation. Poor ventilation, humidity, and cold walls create perfect conditions. 'Arieggiare' (to air out) by opening windows is the standard Italian advice. Dehumidifiers ('deumidificatori') help but are expensive to run."},

    {type:"teach", trg:"riparare", src:"to repair / to fix", pos:"verb", gender:null,
     note:"Regular -are verb. 'La riparazione' = the repair.\n'Far riparare' = to have something repaired.",
     example:"A: Puoi riparare il rubinetto?\nB: No, devo chiamare un professionista.",
     exampleSrc:"A: Can you fix the faucet?\nB: No, I need to call a professional.",
     funFact:"Italian tenants must distinguish between 'manutenzione ordinaria' (routine maintenance, tenant pays) and 'manutenzione straordinaria' (major repairs, landlord pays). Replacing a light bulb is ordinary; replacing the boiler is extraordinary. This distinction generates endless disputes."},

    // Quiz steps
    {type:"mc", q:"What is 'la perdita d'acqua'?",
     opts:["A water shortage in the area","A water leak in the plumbing","Water damage from a flood","A loss of water pressure"],
     ans:"A water leak in the plumbing",
     hint:"'Perdita' means 'loss.' W... is literally being lost through a crack or broken pipe."},

    {type:"fb", s:"Chiama l'{1}! Il rubinetto perde.",
     a:["idraulico"],
     opts:["idraulico","elettricista","portiere","amministratore"],
     hint:"This professional fixes pipes, faucets, and water-related problems. From Greek 'hydraulikos.'",
     sSrc:"Call the {1}! The faucet is leaking."},

    {type:"match", pairs:[
      {trg:"la perdita", src:"the leak"},
      {trg:"il guasto", src:"the breakdown"},
      {trg:"la caldaia", src:"the boiler"},
      {trg:"il rubinetto", src:"the faucet"},
      {trg:"lo scarico", src:"the drain"}
    ]},

    {type:"mc", q:"What does Italian law require for boilers every year?",
     opts:["Complete replacement with a newer model","Mandatory professional maintenance check","Registration at the local fire station","Insurance coverage by the tenant"],
     ans:"Mandatory professional maintenance check",
     hint:"A certified technician inspects safety and efficiency. Results go in the 'libretto della caldaia.'"},

    {type:"fb", s:"Lo {1} del lavandino e intasato.",
     a:["scarico"],
     opts:["scarico","rubinetto","guasto","pavimento"],
     hint:"The water is not going down the sink. This part of the plumbing is blocked or clogged.",
     sSrc:"The sink {1} is clogged."},

    {type:"mc", q:"What is the difference between 'manutenzione ordinaria' and 'straordinaria'?",
     opts:["Ordinary is indoor, extraordinary is outdoor","Ordinary is the tenant's cost, extraordinary is the landlord's","Ordinary is monthly, extraordinary is yearly","Ordinary is for new buildings, extraordinary for old"],
     ans:"Ordinary is the tenant's cost, extraordinary is the landlord's",
     hint:"Changing a light bulb = o... (t...). Replacing the boiler = e... (l...). The distinction matters."},

    {type:"fb", s:"C'e {1} in bagno. Devo arieggiare di piu.",
     a:["muffa"],
     opts:["muffa","acqua","luce","aria"],
     hint:"Dark spots on bathroom walls from humidity and poor ventilation. Opening windows helps prevent it.",
     sSrc:"There is {1} in the bathroom. I need to air it out more."},

    {type:"mc", q:"Why is 'rubinetto' called that?",
     opts:["It was invented by a man named Rubinetto","It comes from 'rubino' (ruby), after the old valve shape","It comes from 'rubare' (to steal), because faucets waste water","It is borrowed from the French word 'robinet'"],
     ans:"It comes from 'rubino' (ruby), after the old valve shape",
     hint:"A diminutive of 'r....' O... v... handles had a gemstone-like appearance that inspired the name."}
  ]
};
export default LESSON_6;
