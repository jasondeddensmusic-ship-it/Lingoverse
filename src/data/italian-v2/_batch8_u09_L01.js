// Batch 8 — Unit 09 extra lesson. Health: First Aid & Emergencies
const BATCH8_L1 = {id:"itv2_u09l_b8_1", title:"Il pronto soccorso", icon:"🚑", xp:15, board:true, steps:[
{type:"intro", title:"Il pronto soccorso",
 desc:"Learn essential vocabulary for medical emergencies, first aid, and getting help in Italian.",
 goals:["Describe medical emergencies","Ask for help in urgent situations","Understand first aid vocabulary"]},

{type:"teach", trg:"il pronto soccorso", src:"the emergency room / first aid", pos:"noun", gender:"m",
 note:"Masculine noun. Literally: 'ready help.'\n'Andare al pronto soccorso' = to go to the ER.",
 example:"A: Mi sono fatto male! Dove il pronto soccorso?\nB: E all'ospedale, segua le indicazioni.",
 exampleSrc:"A: I hurt myself! Where is the emergency room?\nB: It is at the hospital, follow the signs.",
 funFact:"Italian emergency rooms use a color-coded triage system: red (immediate), yellow (urgent), green (minor), white (non-urgent). White codes may wait hours."},

{type:"teach", trg:"svenire", src:"to faint", pos:"verb", gender:null,
 note:"Irregular verb. Past: e svenuto/a (uses essere).\n'Svenimento' = fainting spell.",
 example:"A: E svenuta per il caldo.\nB: Chiamate un'ambulanza!",
 exampleSrc:"A: She fainted from the heat.\nB: Call an ambulance!",
 funFact:"'Svenire' literally means 'to un-come' (s- = un-, venire = to come). The idea is that consciousness 'goes away.' Very poetic for a medical term."},

{type:"teach", trg:"la ferita", src:"the wound / injury", pos:"noun", gender:"f",
 note:"Feminine noun. 'Ferirsi' = to injure oneself.\n'Ferito' = injured/wounded.",
 example:"A: La ferita e profonda?\nB: No, e solo un graffio.",
 exampleSrc:"A: Is the wound deep?\nB: No, it is just a scratch.",
 funFact:"'Ferita' is also used metaphorically: 'una ferita nel cuore' (a wound in the heart) means deep emotional pain. Italian literature is full of such metaphors."},

{type:"teach", trg:"il cerotto", src:"the bandage / band-aid", pos:"noun", gender:"m",
 note:"Masculine noun. 'Mettere un cerotto' = to put on a bandage.\nAlso used figuratively.",
 example:"A: Mi serve un cerotto per il taglio.\nB: Eccone uno, disinfetta prima.",
 exampleSrc:"A: I need a bandage for the cut.\nB: Here is one, disinfect first.",
 funFact:"'Mettere un cerotto' figuratively means to apply a quick fix. 'Non basta un cerotto' (a bandage is not enough) means the problem needs a real solution."},

{type:"teach", trg:"la bruciatura", src:"the burn", pos:"noun", gender:"f",
 note:"Feminine noun. 'Bruciarsi' = to burn oneself.\n'Scottatura' = a minor burn/sunburn.",
 example:"A: Mi sono bruciato con il forno!\nB: Metti subito la mano sotto l'acqua fredda.",
 exampleSrc:"A: I burned myself on the oven!\nB: Put your hand under cold water right away.",
 funFact:"Italy distinguishes 'bruciatura' (burn from fire/heat) from 'scottatura solare' (sunburn). Both come from Latin 'ustulare' (to burn) through different paths."},

{type:"teach", trg:"il ghiaccio", src:"the ice", pos:"noun", gender:"m",
 note:"Masculine noun. 'Mettere il ghiaccio' = to apply ice.\n'Ghiacciato' = ice cold.",
 example:"A: Metti del ghiaccio sulla caviglia.\nB: Per quanto tempo?\nA: Venti minuti.",
 exampleSrc:"A: Put some ice on the ankle.\nB: For how long?\nA: Twenty minutes.",
 funFact:"Italians rarely put ice in drinks. 'Senza ghiaccio' (without ice) is the default. If you want ice, you must specifically ask for it, and you may get a strange look."},

{type:"teach", trg:"gonfiare", src:"to swell / to inflate", pos:"verb", gender:null,
 note:"Regular -are verb. 'Gonfiarsi' = to swell up.\n'Gonfio' = swollen.",
 example:"A: La caviglia si e gonfiata molto.\nB: Tieni il ghiaccio e solleva il piede.",
 exampleSrc:"A: The ankle swelled up a lot.\nB: Keep the ice and elevate the foot.",
 funFact:"'Gonfiare' also means to inflate (a tire, balloon). 'Gonfiare i prezzi' = to inflate prices. And 'gonfio come un pallone' = bloated like a balloon."},

{type:"teach", trg:"il gesso", src:"the cast (plaster)", pos:"noun", gender:"m",
 note:"Masculine noun. Also means 'chalk' and 'plaster.'\n'Mettere il gesso' = to put a cast on.",
 example:"A: Devo portare il gesso per sei settimane.\nB: Che sfortuna! Cosa ti sei rotto?",
 exampleSrc:"A: I have to wear the cast for six weeks.\nB: What bad luck! What did you break?",
 funFact:"'Gesso' means chalk, plaster, and cast. The Gypsum mineral gives all three their name. Friends traditionally sign and draw on your gesso in Italy too."},

{type:"teach", trg:"la stampella", src:"the crutch", pos:"noun", gender:"f",
 note:"Feminine noun. Usually plural: le stampelle.\n'Camminare con le stampelle' = to walk on crutches.",
 example:"A: Devi usare le stampelle per un mese.\nB: Sara difficile salire le scale.",
 exampleSrc:"A: You need to use crutches for a month.\nB: It will be difficult to go up stairs.",
 funFact:"The word comes from the Germanic 'stampf' (to stamp/stomp). Figuratively, 'essere la stampella di qualcuno' means to be someone's constant support."},

{type:"mc",
 q:"What color code means 'immediate' in Italian ER triage?",
 opts:["Red","Yellow","Green","White"],
 ans:"Red",
 hint:"The Italian system uses colors from most to least urgent. The most urgent color is the one associated with danger."},

{type:"match", pairs:[
  {trg:"svenire", src:"to faint"},
  {trg:"la ferita", src:"the wound"},
  {trg:"il cerotto", src:"the bandage"},
  {trg:"il ghiaccio", src:"the ice"}
]},

{type:"fb",
 s:"La caviglia si e {1} molto dopo la caduta.",
 a:["gonfiata"],
 opts:["gonfiata","bruciata","svenuta","ferita"],
 hint:"The ankle has increased in size due to the injury. The verb describes swelling.",
 sSrc:"The ankle {1} a lot after the fall."},

{type:"mc",
 q:"What does 'svenire' literally mean?",
 opts:["To un-come (consciousness goes away)","To fall down","To see red","To feel sick"],
 ans:"To un-come (consciousness goes away)",
 hint:"The prefix s- means 'un-' and the verb root means 'to c....' C... departs."},

{type:"fb",
 s:"Devo portare il {1} per sei settimane dopo la frattura.",
 a:["gesso"],
 opts:["gesso","cerotto","ghiaccio","braccio"],
 hint:"This is a hard plaster covering placed over a broken bone to keep it immobile while it heals.",
 sSrc:"I have to wear the {1} for six weeks after the fracture."},

{type:"mc",
 q:"What is unusual about Italians and ice in drinks?",
 opts:["They rarely put ice in drinks","They always want extra ice","They only use ice in summer","They crush all ice"],
 ans:"They rarely put ice in drinks",
 hint:"If you want ice in your drink in Italy, you need to specifically request it. The default is without."}
,{type:"match",pairs:[{trg:"il pronto soccorso",src:"the emergency room / first aid"},{trg:"la bruciatura",src:"the burn"},{trg:"gonfiare",src:"to swell / to inflate"},{trg:"la stampella",src:"the crutch"}]}]};
export default BATCH8_L1;
