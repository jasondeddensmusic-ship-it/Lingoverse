// Batch 3 — Unit 09, Lesson 2: Pronto soccorso (First Aid & Emergencies)
const BATCH3_U09_L2 = {
  id:"itv2_u09l_b3_2", title:"Pronto soccorso", icon:"\uD83D\uDE91", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pronto soccorso",
     desc:"Learn emergency health vocabulary for when things get serious. From calling for help to describing injuries, these words could be vital in an emergency.",
     goals:["Describe injuries and urgent symptoms","Call for emergency help in Italian","Understand first aid vocabulary"]},

    {type:"teach", trg:"il pronto soccorso", src:"the emergency room", pos:"noun", gender:"m",
     note:"Masculine. Literally 'ready help/aid.'\n'Andare al pronto soccorso' = to go to the ER.",
     example:"A: Dobbiamo andare al pronto soccorso.\nB: Chiamo un'ambulanza!",
     exampleSrc:"A: We need to go to the emergency room.\nB: I will call an ambulance!",
     funFact:"Italian emergency rooms use a color-coded triage system: red (immediate danger), yellow (urgent), green (minor), white (non-urgent). Wait times for green and white codes can be very long. Treatment at the ER is free for everyone, including tourists."},

    {type:"teach", trg:"l'ambulanza", src:"the ambulance", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'ambulare' (to walk/move).\nEmergency number: 118 (medical) or 112 (general).",
     example:"A: Chiama l'ambulanza! E urgente!\nB: Arrivo, chiamo il 118.",
     exampleSrc:"A: Call the ambulance! It is urgent!\nB: Coming, I am calling 118.",
     funFact:"Italy's medical emergency number is 118, though 112 (the European emergency number) also works. Ambulance services vary by region: some are run by the Red Cross ('Croce Rossa'), others by public health services. Response times in cities average 8-12 minutes."},

    {type:"teach", trg:"la ferita", src:"the wound / injury", pos:"noun", gender:"f",
     note:"Feminine. From 'ferire' (to wound).\n'Ferita grave' = serious wound. 'Ferita leggera' = minor wound.",
     example:"A: La ferita e profonda?\nB: No, e solo un graffio.",
     exampleSrc:"A: Is the wound deep?\nB: No, it is just a scratch.",
     funFact:"'Ferire' comes from Latin 'ferire' (to strike). The same root gave 'feroce' (ferocious). Italian first aid ('primo soccorso') courses are mandatory for workplace safety. 'Ferito' (wounded person) appears constantly in Italian news reports about accidents."},

    {type:"teach", trg:"la frattura", src:"the fracture / break", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'fractura' (a breaking).\n'Frattura del braccio' = arm fracture.",
     example:"A: La radiografia mostra una frattura.\nB: Quanto tempo per guarire?",
     exampleSrc:"A: The X-ray shows a fracture.\nB: How long to heal?",
     funFact:"From the same root as English 'fracture,' 'fraction' (a broken part of a whole), and 'fragile.' Italian hospitals treat fractures in the 'reparto ortopedico' (orthopedic department). Recovery is expressed as 'ingessare' (to put in a cast) from 'gesso' (plaster/chalk)."},

    {type:"teach", trg:"il sangue", src:"the blood", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'sanguis' (blood).\n'Analisi del sangue' = blood test.",
     example:"A: C'e molto sangue dalla ferita.\nB: Premi con un panno pulito.",
     exampleSrc:"A: There is a lot of blood from the wound.\nB: Press with a clean cloth.",
     funFact:"'Sangue' gave English 'sanguine' (optimistic, literally 'blood-red'). In Italian, 'sangue freddo' means 'cold blood' (calm composure), and 'a sangue' describes a rare steak. 'Donare il sangue' (donating blood) is encouraged across Italy, with mobile units visiting towns regularly."},

    {type:"teach", trg:"svenire", src:"to faint / to pass out", pos:"verb", gender:null,
     note:"Irregular -ire verb. Past participle: svenuto.\nUses essere: 'e svenuto/a' = he/she fainted.",
     example:"A: E svenuta in piazza.\nB: Chiamate aiuto! Portatele dell'acqua.",
     exampleSrc:"A: She fainted in the square.\nB: Call for help! Bring her some water.",
     funFact:"'Svenire' literally means 'to un-come' (s-venire), to lose consciousness. Italian first aid teaches the 'posizione laterale di sicurezza' (recovery position) for someone who has fainted. Heat-related fainting ('colpo di calore') is common during Italy's hot summers."},

    {type:"teach", trg:"la bruciatura", src:"the burn", pos:"noun", gender:"f",
     note:"Feminine. From 'bruciare' (to burn).\n'Bruciatura solare' = sunburn.",
     example:"A: Ho una brutta bruciatura al braccio.\nB: Metti subito acqua fredda.",
     exampleSrc:"A: I have a bad burn on my arm.\nB: Put cold water on it immediately.",
     funFact:"Italian summer sun is intense, and 'bruciatura solare' (sunburn) is the most common tourist health complaint. Pharmacies stock extensive sun protection products ('protezione solare'). Italian dermatologists recommend SPF 50 for Mediterranean sun exposure."},

    {type:"teach", trg:"il ghiaccio", src:"the ice", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'glacies' (ice).\n'Mettere il ghiaccio' = to apply ice.",
     example:"A: Metti il ghiaccio sulla caviglia.\nB: Per quanto tempo?",
     exampleSrc:"A: Put ice on the ankle.\nB: For how long?",
     funFact:"'Ghiaccio' comes from Latin 'glacies,' which also gave English 'glacier' and 'glacial.' In Italian first aid, the RICE protocol (rest, ice, compression, elevation) is taught as 'riposo, ghiaccio, compressione, elevazione.' Ice for injuries is universally recommended by Italian medics."},

    {type:"teach", trg:"respirare", src:"to breathe", pos:"verb", gender:null,
     note:"Regular -are verb. From Latin 'respirare' (to breathe again).\n'Respira profondamente' = breathe deeply.",
     example:"A: Respira profondamente. Piano, piano.\nB: Mi sento meglio adesso.",
     exampleSrc:"A: Breathe deeply. Slowly, slowly.\nB: I feel better now.",
     funFact:"'Respirare' contains 're-' (again) + 'spirare' (to breathe). 'Spirare' also means 'to expire/die,' so breathing is literally 'breathing again' after each breath. In emergencies, checking if someone is breathing ('verifica la respirazione') is the first step of Italian first aid."},

    {type:"teach", trg:"l'assicurazione", src:"the insurance", pos:"noun", gender:"f",
     note:"Feminine. From 'assicurare' (to insure/assure).\n'Assicurazione sanitaria' = health insurance.",
     example:"A: Ha l'assicurazione sanitaria?\nB: Si, ho la tessera europea.",
     exampleSrc:"A: Do you have health insurance?\nB: Yes, I have the European card.",
     funFact:"Italy's public healthcare system (SSN) covers residents. EU citizens can use the EHIC (European Health Insurance Card) for emergency care. Non-EU tourists should have travel insurance. Italian emergency rooms treat everyone regardless of insurance status, billing later if needed."},

    {type:"teach", trg:"cadere", src:"to fall", pos:"verb", gender:null,
     note:"Irregular -ere verb. Past participle: caduto.\nUses essere: 'sono caduto/a' = I fell.",
     example:"A: Sono caduto dalle scale.\nB: Ti sei fatto male? Riesci a camminare?",
     exampleSrc:"A: I fell down the stairs.\nB: Did you hurt yourself? Can you walk?",
     funFact:"'Cadere' comes from Latin 'cadere' (to fall), which gave English 'cadence' (a falling rhythm), 'cascade' (a waterfall), and 'accident' (something that falls upon you). In Italian, 'cadere' uses essere in the past tense because it describes involuntary movement."},

    {type:"teach", trg:"il gesso", src:"the cast / plaster", pos:"noun", gender:"m",
     note:"Masculine. Also means 'chalk' and 'plaster of Paris.'\n'Portare il gesso' = to wear a cast.",
     example:"A: Devo portare il gesso per sei settimane.\nB: Che sfortuna! Come ti aiuto?",
     exampleSrc:"A: I have to wear the cast for six weeks.\nB: What bad luck! How can I help?",
     funFact:"'Gesso' means both 'chalk' (for writing), 'plaster' (building material), and 'cast' (medical). All are made from calcium sulfate. Modern Italian hospitals increasingly use fiberglass casts, but 'gesso' remains the everyday word. Italian schoolchildren still use 'gesso' on blackboards."},

    {type:"teach", trg:"la stampella", src:"the crutch", pos:"noun", gender:"f",
     note:"Feminine. Plural: le stampelle.\n'Camminare con le stampelle' = to walk on crutches.",
     example:"A: Devi usare le stampelle per due settimane.\nB: Sara difficile con le scale di casa.",
     exampleSrc:"A: You need to use crutches for two weeks.\nB: It will be difficult with the stairs at home.",
     funFact:"Italian cities with their cobblestone streets and many stairs present special challenges for people on crutches. The 'Servizio Sanitario Nazionale' provides crutches free of charge through hospitals. Pharmacies and orthopedic shops also rent medical equipment."},

    // Quiz steps
    {type:"mc", q:"What is Italy's medical emergency number?",
     opts:["911","118 (or 112 for all emergencies)","999","100"],
     ans:"118 (or 112 for all emergencies)",
     hint:"118 is specifically for medical e.... 112 is the European general emergency number. Both work across Italy."},

    {type:"fb", s:"La radiografia mostra una {1}.",
     a:["frattura"],
     opts:["frattura","ferita","bruciatura","puntura"],
     hint:"The X-ray reveals a broken bone. From the same Latin root as English 'fracture' and 'fragile.'",
     sSrc:"The X-ray shows a {1}."},

    {type:"match", pairs:[
      {trg:"il pronto soccorso", src:"the emergency room"},
      {trg:"la ferita", src:"the wound"},
      {trg:"la frattura", src:"the fracture"},
      {trg:"il sangue", src:"the blood"},
      {trg:"il gesso", src:"the cast"}
    ]},

    {type:"mc", q:"What color code means 'immediate danger' in Italian ER triage?",
     opts:["Green (non-urgent)","White (minimal)","Yellow (urgent)","Red (immediate danger)"],
     ans:"Red (immediate danger)",
     hint:"The system runs from r... (most severe) through yellow and green to white (least urgent). R... patients are seen first."},

    {type:"fb", s:"Metti il {1} sulla caviglia.",
     a:["ghiaccio"],
     opts:["ghiaccio","gesso","sangue","cerotto"],
     hint:"Apply this frozen substance to reduce swelling. From Latin 'glacies.' It is the 'I' in the RICE protocol.",
     sSrc:"Put {1} on the ankle."},

    {type:"mc", q:"Why does 'svenire' literally mean 'to un-come'?",
     opts:["From s- (removal) + venire (to come)","From svegliare (to wake up)","From essere (to be) + venire (to come)","From sempre (always) + venire (to come)"],
     ans:"From s- (removal) + venire (to come)",
     hint:"The prefix s- indicates r... or reversal. Consciousness 'comes' to you, and when you faint, it 'un-comes.'"},

    {type:"fb", s:"Sono {1} dalle scale.",
     a:["caduto"],
     opts:["caduto","svenuto","ferito","bruciato"],
     hint:"You tumbled down the staircase. This past participle of 'cadere' uses essere. Same root as English 'cadence.'",
     sSrc:"I {1} down the stairs."},

    {type:"mc", q:"Can Italian emergency rooms turn away uninsured patients?",
     opts:["Yes, insurance is always required first","No, they treat everyone and bill later","Only EU citizens receive any treatment","Only children are treated without insurance"],
     ans:"No, they treat everyone and bill later",
     hint:"Italian ERs provide care to all people regardless of insurance or nationality. Billing is handled afterward."}
  ]
};
export default BATCH3_U09_L2;
