// Unit 05 Expansion — Lesson 6: Home Appliances & Utilities
// Theme: Appliances, electronics, utilities in the home

const LESSON_6 = {
  id:"itv2_u5l6", title:"Gli elettrodomestici", icon:"\ud83d\udcfa", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gli elettrodomestici",
     desc:"Learn Italian words for home appliances and electronics that are part of daily life.",
     goals:["Name common home appliances","Talk about using household electronics","Describe what each appliance does"]},

    {type:"teach", trg:"il televisore", src:"the television", pos:"noun", gender:"m",
     note:"Masculine. Often shortened to 'la TV' or 'la tele' in speech.\n'Guardare la TV' = to watch TV.",
     example:"A: Cosa c'e in TV stasera?\nB: Un film italiano!",
     exampleSrc:"A: What is on TV tonight?\nB: An Italian movie!",
     funFact:"Italians say 'la TV' (feminine, following 'la televisione') even though 'il televisore' (the set) is masculine. RAI (Radiotelevisione Italiana) is the national broadcaster, founded in 1954 when Italy first got television."},

    {type:"teach", trg:"il computer", src:"the computer", pos:"noun", gender:"m",
     note:"Masculine. English loanword, invariable in plural.\n'Il portatile' = laptop (literally 'the portable').",
     example:"A: Dov'e il computer?\nB: E sulla scrivania, in camera.",
     exampleSrc:"A: Where is the computer?\nB: It is on the desk, in the bedroom.",
     funFact:"Italian uses many English tech words: computer, smartphone, tablet, mouse, browser. The Accademia della Crusca (Italy's language authority) occasionally suggests Italian alternatives, but they rarely catch on."},

    {type:"teach", trg:"il telefono", src:"the phone", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'tele' (far) + 'phone' (voice).\n'Il cellulare' = cell phone. 'Lo smartphone' = smartphone.",
     example:"A: Dov'e il mio telefono?\nB: E sul divano, sotto il cuscino!",
     exampleSrc:"A: Where is my phone?\nB: It is on the sofa, under the cushion!",
     funFact:"Italians call a mobile phone 'il cellulare' (from the cell network) or 'lo smartphone.' The landline is 'il telefono fisso' (fixed phone). Italy has one of the highest smartphone usage rates in Europe."},

    {type:"teach", trg:"il forno", src:"the oven", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'furnus' (oven, kiln).\n'Il forno a microonde' = microwave oven.",
     example:"A: Metti la pizza nel forno.\nB: A che temperatura?",
     exampleSrc:"A: Put the pizza in the oven.\nB: At what temperature?",
     funFact:"From Latin 'furnus' (oven). English 'furnace' comes from the same root. In Italy, 'il forno' also refers to a bakery: 'Vado al forno' can mean 'I am going to the bakery.' Many Italian neighborhoods still have artisan bakeries."},

    {type:"teach", trg:"il condizionatore", src:"the air conditioner", pos:"noun", gender:"m",
     note:"Masculine. Also: 'l'aria condizionata' (air conditioning).\nIncreasingly common in Italian homes.",
     example:"A: Fa troppo caldo! Accendi il condizionatore.\nB: Subito!",
     exampleSrc:"A: It is too hot! Turn on the air conditioner.\nB: Right away!",
     funFact:"Air conditioning in Italian homes was rare until recently. Many older buildings in Italy do not have it. Italians traditionally used shutters ('persiane') and thick stone walls to keep cool. AC is now standard in newer apartments."},

    {type:"teach", trg:"il riscaldamento", src:"the heating", pos:"noun", gender:"m",
     note:"Masculine. From 'riscaldare' (to reheat).\n'Il riscaldamento centralizzato' = central heating.",
     example:"A: Quando accendono il riscaldamento?\nB: A ottobre, di solito.",
     exampleSrc:"A: When do they turn on the heating?\nB: In October, usually.",
     funFact:"In Italian apartment buildings, central heating ('riscaldamento centralizzato') is often controlled by the building management. Residents cannot always choose when to turn it on. Heating regulations vary by city and climate zone."},

    {type:"teach", trg:"la luce", src:"the light / electricity", pos:"noun", gender:"f",
     note:"Feminine. Means both 'light' and 'electricity' (la bolletta della luce = electricity bill).\nFrom Latin 'lux.'",
     example:"A: Accendi la luce, per favore.\nB: Dove e l'interruttore?",
     exampleSrc:"A: Turn on the light, please.\nB: Where is the switch?",
     funFact:"'La luce' means both physical light and electricity. 'La bolletta della luce' is the electricity bill. Latin 'lux' also gave English 'lucid' (clear, light), 'luxury' (originally 'abundance of light'), and 'Lucifer' (light-bearer)."},

    {type:"teach", trg:"accendere", src:"to turn on / to switch on", pos:"verb", gender:null,
     note:"Irregular -ere verb: accendo, accendi, accende.\nOpposite: spegnere (to turn off). From Latin 'accendere' (to kindle).",
     example:"A: Accendi la TV, per favore.\nB: Dov'e il telecomando?",
     exampleSrc:"A: Turn on the TV, please.\nB: Where is the remote?",
     funFact:"'Accendere' originally meant 'to kindle a fire,' from Latin 'ad' (to) + 'candere' (to shine). The same root gives English 'candle.' In modern Italian, it covers any switch-on action: lights, appliances, engines."},

    {type:"teach", trg:"spegnere", src:"to turn off / to switch off", pos:"verb", gender:null,
     note:"Irregular -ere verb: spengo, spegni, spegne.\nOpposite of accendere. From Latin 'expingere' (to extinguish).",
     example:"A: Spegni la luce quando esci.\nB: Si, certo!",
     exampleSrc:"A: Turn off the light when you leave.\nB: Yes, of course!",
     funFact:"'Spegnere' is quite irregular: spengo, spegni, spegne, spegniamo, spegnete, spengono. The first person 'spengo' adds a 'g' that disappears in other forms. This verb is used constantly for all electronics and lights."},

    {type:"teach", trg:"la scrivania", src:"the desk", pos:"noun", gender:"f",
     note:"Feminine. From 'scrivere' (to write). Literally: the writing place.\nPlural: le scrivanie.",
     example:"A: Il computer e sulla scrivania.\nB: In camera o in studio?",
     exampleSrc:"A: The computer is on the desk.\nB: In the bedroom or the study?",
     funFact:"'Scrivania' comes from 'scrivere' (to write), from Latin 'scribere.' A desk is literally 'the place for writing.' English 'scribe,' 'script,' and 'describe' all share this Latin root."},

    {type:"teach", trg:"la presa", src:"the power outlet / socket", pos:"noun", gender:"f",
     note:"Feminine. 'La presa elettrica' = electric socket. From 'prendere' (to take).\nItalian outlets have three pins in a row.",
     example:"A: Dov'e una presa?\nB: Ce n'e una dietro il divano.",
     exampleSrc:"A: Where is an outlet?\nB: There is one behind the sofa.",
     funFact:"Italian electrical outlets are unique: three round pins in a line (not the two-flat-pin American style or the three-pin British style). Travelers need an adapter. 'Presa' literally means 'take' (where you take electricity from)."},

    // Quiz steps
    {type:"mc", q:"What does 'accendere' mean?",
     opts:["To turn on","To turn off","To clean","To fix"],
     ans:"To turn on",
     hint:"From Latin 'accendere' (to kindle). Originally about fire, now about any switch. Its opposite is 'spegnere.'"},

    {type:"fb", s:"{1} la luce, per favore.",
     a:["Accendi"],
     opts:["Accendi","Spegni","Pulisci","Lava"],
     hint:"The room is dark and you want illumination. Use the informal 'tu' command for switching on.",
     sSrc:"{1} the light, please."},

    {type:"mc", q:"What is 'la bolletta della luce'?",
     opts:["The electricity bill","A light bulb","A lamp","A candle"],
     ans:"The electricity bill",
     hint:"'La luce' means both light and electricity. The 'bolletta' is the bill you pay for a utility."},

    {type:"fb", s:"{1} la TV quando esci.",
     a:["Spegni"],
     opts:["Spegni","Accendi","Guarda","Metti"],
     hint:"You want them to switch off the television when leaving. Opposite of 'accendi.'",
     sSrc:"{1} the TV when you leave."},

    {type:"match", pairs:[
      {trg:"il televisore", src:"the television"},
      {trg:"il computer", src:"the computer"},
      {trg:"il forno", src:"the oven"},
      {trg:"la luce", src:"the light"},
      {trg:"la scrivania", src:"the desk"}
    ]},

    {type:"mc", q:"What is 'il cellulare' in Italian?",
     opts:["A mobile phone","A cell (prison)","A small room","A tablet"],
     ans:"A mobile phone",
     hint:"Named after the cellular network technology. Italy has one of the highest smartphone usage rates in Europe."},

    {type:"fb", s:"Il computer e sulla {1}.",
     a:["scrivania"],
     opts:["scrivania","sedia","tavola","porta"],
     hint:"This is a piece of furniture designed for writing and working. From 'scrivere' (to write).",
     sSrc:"The computer is on the {1}."},

    {type:"mc", q:"What is unique about Italian electrical outlets?",
     opts:["Three round pins in a line","Same as American outlets","Same as British outlets","No standard exists"],
     ans:"Three round pins in a line",
     hint:"Italy has its own outlet design. International travelers need an adapter for their electronics."},

    {type:"fb", s:"Fa caldo! Accendi il {1}.",
     a:["condizionatore"],
     opts:["condizionatore","riscaldamento","forno","televisore"],
     hint:"It is hot and you want to cool down the room. This appliance provides cool air.",
     sSrc:"It's hot! Turn on the {1}."},

    {type:"mc", q:"What does 'il forno' also refer to in daily Italian?",
     opts:["A bakery","A restaurant","A kitchen","A factory"],
     ans:"A bakery",
     hint:"Besides the kitchen appliance, this word is also used for the shop where bread is baked and sold."}
  ]
};
export default LESSON_6;
