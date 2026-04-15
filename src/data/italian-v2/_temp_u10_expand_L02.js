// Italian V2 Unit 10 Expansion — Lesson 5: Problemi in albergo (Hotel Problems)
// Expands travel unit with hotel complaints, problems, and solutions.

const LESSON_5 = {id:"itv2_u10l5", title:"Problemi in albergo", icon:"\uD83D\uDEAA", xp:15, board:true, steps:[
  {type:"intro", title:"Problemi in albergo",
   desc:"Learn how to describe and resolve problems at an Italian hotel. From a broken air conditioner to a noisy room, these words help you communicate issues clearly.",
   goals:["Describe common hotel problems","Request room changes and repairs","Complain politely and get solutions"]},

  {type:"teach", trg:"il reclamo", src:"the complaint", pos:"noun", gender:"m",
   note:"Masculine. From 'reclamare' (to complain, reclaim).\n'Fare un reclamo' = to make a complaint.",
   example:"A: Vorrei fare un reclamo.\nB: Mi dica, cosa non va?",
   exampleSrc:"A: I would like to make a complaint.\nB: Tell me, what is wrong?",
   funFact:"From Latin 'reclamare' (to call back, protest). Italian hospitality culture values polite complaints. Starting with 'Mi scusi' or 'Vorrei segnalare un problema' (I would like to report a problem) gets much better results than an angry approach."},

  {type:"teach", trg:"non funziona", src:"it does not work", pos:"verb", gender:null,
   note:"'Funzionare' = to work/function. 'Non funziona' = it doesn't work.\nUsed for any broken device or service.",
   example:"A: L'aria condizionata non funziona.\nB: Mando subito un tecnico.",
   exampleSrc:"A: The air conditioning does not work.\nB: I will send a technician right away.",
   funFact:"'Funzionare' comes from Latin 'functio' (performance). This phrase is your universal tool for any malfunction: 'Il Wi-Fi non funziona' (Wi-Fi is down), 'La TV non funziona' (TV is broken), 'L'ascensore non funziona' (elevator is out of order)."},

  {type:"teach", trg:"rumoroso", src:"noisy", pos:"adj", gender:null,
   note:"Adj. Feminine: rumorosa. From 'rumore' (noise).\n'La camera e troppo rumorosa' = the room is too noisy.",
   example:"A: La camera e molto rumorosa.\nB: Mi dispiace. Posso spostarla al lato opposto.",
   exampleSrc:"A: The room is very noisy.\nB: I am sorry. I can move you to the opposite side.",
   funFact:"From 'rumore' (noise), from Latin 'rumor' (noise, rumor). Noise from the street is common in Italian city hotels, especially in historic centers with cobblestone streets. Asking for 'una camera tranquilla' (a quiet room) or 'vista cortile' (courtyard view) helps."},

  {type:"teach", trg:"sporco", src:"dirty", pos:"adj", gender:null,
   note:"Adj. Feminine: sporca. Opposite: pulito (clean).\n'Le lenzuola sono sporche' = the sheets are dirty.",
   example:"A: Il bagno e sporco.\nB: Chiedo scusa! Mando le pulizie immediatamente.",
   exampleSrc:"A: The bathroom is dirty.\nB: I apologize! I will send housekeeping immediately.",
   funFact:"From a Germanic root meaning 'dirty.' The opposite 'pulito' (clean) comes from Latin 'polire' (to polish). Italian hotels are generally well-maintained, but issues can arise. 'Le pulizie' (housekeeping, literally 'the cleanings') is the team you need."},

  {type:"teach", trg:"l'aria condizionata", src:"the air conditioning", pos:"noun", gender:"f",
   note:"Feminine. Also abbreviated: 'l'aria' or 'il climatizzatore.'\nEssential in Italian summers (35+ degrees).",
   example:"A: Si puo alzare l'aria condizionata?\nB: Certo, regolo la temperatura.",
   exampleSrc:"A: Can you turn up the air conditioning?\nB: Of course, I will adjust the temperature.",
   funFact:"Italian summers are hot, and air conditioning is a top priority for travelers. Some older Italian buildings have limited AC due to historic preservation rules. 'Climatizzatore' is the technical term. 'Fa troppo caldo' (it is too hot) is the universal complaint."},

  {type:"teach", trg:"cambiare camera", src:"to change rooms", pos:"verb", gender:null,
   note:"'Cambiare' = to change. 'Camera' = room.\n'Possiamo cambiare camera?' = Can we change rooms?",
   example:"A: E possibile cambiare camera?\nB: Vediamo cosa c'e disponibile.",
   exampleSrc:"A: Is it possible to change rooms?\nB: Let's see what is available.",
   funFact:"Italian hotels will usually accommodate room change requests if availability allows. Being polite increases your chances. 'La camera non corrisponde alla prenotazione' (the room does not match the booking) is the strongest argument for a change."},

  {type:"teach", trg:"il riscaldamento", src:"the heating", pos:"noun", gender:"m",
   note:"Masculine. From 'riscaldare' (to heat up, warm).\n'Il riscaldamento non funziona' = the heating does not work.",
   example:"A: Il riscaldamento non funziona. Fa molto freddo.\nB: Provo a resettare il termostato.",
   exampleSrc:"A: The heating does not work. It is very cold.\nB: I will try to reset the thermostat.",
   funFact:"From 'ri-' (again) + 'scaldare' (to warm), from Latin 'calidus' (warm). Italian law regulates heating periods: central heating in buildings can only run from mid-October to mid-April, with regional variations. This surprises visitors who arrive during cold snaps outside these dates."},

  {type:"teach", trg:"l'acqua calda", src:"hot water", pos:"noun", gender:"f",
   note:"Feminine ('acqua'). 'Calda' = hot. Opposite: 'acqua fredda' (cold water).\n'Non c'e acqua calda' = there is no hot water.",
   example:"A: Non c'e acqua calda nella doccia.\nB: Controllo subito la caldaia.",
   exampleSrc:"A: There is no hot water in the shower.\nB: I will check the boiler right away.",
   funFact:"Hot water issues are more common in small Italian pensions and B&Bs with older plumbing. Large hotels have industrial boilers, but small properties may have limited hot water capacity. 'Caldaia' (boiler) is the device that heats water."},

  {type:"teach", trg:"la sveglia", src:"the wake-up call / alarm", pos:"noun", gender:"f",
   note:"Feminine. From 'svegliare' (to wake up).\n'Posso avere una sveglia alle sette?' = Can I have a wake-up call at seven?",
   example:"A: Posso avere una sveglia alle sei?\nB: Certo, la chiameremo alle sei in punto.",
   exampleSrc:"A: Can I have a wake-up call at six?\nB: Of course, we will call you at six sharp.",
   funFact:"'Sveglia' means both 'alarm clock' and 'wake-up call.' From 'svegliare' (to wake), from Latin 'ex-vigilare' (to wake from watching). Italian hotel wake-up calls are becoming rare as phones replace them, but the service is still available. 'Svegliarsi' is the reflexive form: to wake oneself."},

  {type:"teach", trg:"il Wi-Fi", src:"Wi-Fi / internet", pos:"noun", gender:"m",
   note:"Masculine. English loanword. Pronounced 'wee-fee' in Italian.\n'Qual e la password del Wi-Fi?' = What is the Wi-Fi password?",
   example:"A: Qual e la password del Wi-Fi?\nB: E scritta sul foglio nella camera.",
   exampleSrc:"A: What is the Wi-Fi password?\nB: It is written on the paper in the room.",
   funFact:"Italians pronounce Wi-Fi as 'wee-fee.' Hotel Wi-Fi quality in Italy varies enormously. Large chains have good coverage, but small hotels and B&Bs may have weak signals, especially in thick-walled historic buildings. Ask 'il Wi-Fi arriva in camera?' (does Wi-Fi reach the room?) before checking in."},

  // Quiz steps
  {type:"mc", q:"How do you say 'it does not work' in Italian?",
   opts:["Non funziona","Non lavora","Non fa","Non va bene"],
   ans:"Non funziona",
   hint:"'Funzionare' means to function or work (for devices). This is the universal phrase for anything broken."},

  {type:"fb", s:"La camera e molto {1}. C'e troppo rumore dalla strada.",
   a:["rumorosa"],
   opts:["rumorosa","sporca","calda","fredda"],
   hint:"Street noise is keeping you awake. This adjective describes a place with too much sound.",
   sSrc:"The room is very {1}. There is too much noise from the street."},

  {type:"match", pairs:[
    {trg:"il reclamo", src:"the complaint"},
    {trg:"rumoroso", src:"noisy"},
    {trg:"sporco", src:"dirty"},
    {trg:"l'aria condizionata", src:"air conditioning"},
    {trg:"il riscaldamento", src:"heating"}
  ]},

  {type:"mc", q:"What is the best approach for hotel complaints in Italy?",
   opts:["Be polite: start with 'Mi scusi' or 'Vorrei segnalare'","Shout loudly","Write an angry email","Refuse to pay"],
   ans:"Be polite: start with 'Mi scusi' or 'Vorrei segnalare'",
   hint:"Italian hospitality responds well to courtesy. Politeness gets faster and better results than anger."},

  {type:"fb", s:"L'aria condizionata non {1}.",
   a:["funziona"],
   opts:["funziona","lavora","va","c'e"],
   hint:"The AC is broken. You use this verb for any device or system that is not operating properly.",
   sSrc:"The air conditioning does not {1}."},

  {type:"mc", q:"How do Italians pronounce 'Wi-Fi'?",
   opts:["Wee-fee","Why-fye","Wih-fih","Double-you eye"],
   ans:"Wee-fee",
   hint:"Italian pronunciation rules make the 'i' sound like 'ee.' Both vowels follow Italian phonetics."},

  {type:"fb", s:"E possibile {1} camera?",
   a:["cambiare"],
   opts:["cambiare","pulire","vedere","prendere"],
   hint:"You want to move to a different room. This verb means 'to change' or 'to switch.'",
   sSrc:"Is it possible to {1} rooms?"},

  {type:"mc", q:"Why might older Italian buildings have limited heating?",
   opts:["Italian law regulates heating periods by date","Heating is too expensive","Italians prefer cold","Buildings have no boilers"],
   ans:"Italian law regulates heating periods by date",
   hint:"Central heating only runs from mid-October to mid-April. Cold snaps outside these dates can be uncomfortable."},

  {type:"fb", s:"Non c'e acqua {1} nella doccia.",
   a:["calda"],
   opts:["calda","fredda","pulita","nuova"],
   hint:"You need warm water for your shower but only cold is coming out. The boiler may need checking.",
   sSrc:"There is no {1} water in the shower."}
]};
export default LESSON_5;
