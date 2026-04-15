// Italian V2 Unit 09 Expansion. Lesson 6: Pronto soccorso (First Aid & Emergencies)
// Expands health unit with emergency vocabulary, first aid, and body parts detail.

const LESSON_6 = {id:"itv2_u9l6", title:"Pronto soccorso", icon:"\uD83D\uDE91", xp:15, board:true, steps:[
  {type:"intro", title:"Pronto soccorso",
   desc:"Learn essential emergency and first aid vocabulary in Italian. Knowing these words could be critical in an urgent situation while traveling in Italy.",
   goals:["Call for help in Italian emergencies","Describe injuries and urgent situations","Understand basic first aid terms"]},

  {type:"teach", trg:"l'emergenza", src:"the emergency", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'emergere' (to rise up, surface).\n'In caso di emergenza' = in case of emergency. Emergency number: 112.",
   example:"A: E un'emergenza! Chiami il 112!\nB: Subito! Cosa e successo?",
   exampleSrc:"A: It is an emergency! Call 112!\nB: Right away! What happened?",
   funFact:"Italy's emergency number is 112 (EU standard). It connects to police, fire, and ambulance. The old numbers still work: 118 (ambulance), 115 (fire), 113 (police). In tourist areas, operators often speak English, but Italian speeds up the response."},

  {type:"teach", trg:"l'ambulanza", src:"the ambulance", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'ambulare' (to walk).\n'Chiamare un'ambulanza' = to call an ambulance.",
   example:"A: Serve un'ambulanza!\nB: Dove siete? Qual e l'indirizzo?",
   exampleSrc:"A: An ambulance is needed!\nB: Where are you? What is the address?",
   funFact:"From Latin 'ambulare' (to walk), because early military hospitals were 'walking hospitals' that moved with the army. Italian ambulances are white with a green stripe or red cross. Response times vary: faster in cities, slower in rural areas and islands."},

  {type:"teach", trg:"il pronto soccorso", src:"the emergency room / ER", pos:"noun", gender:"m",
   note:"Masculine. 'Pronto' = ready, 'soccorso' = help/rescue.\nLiterally: 'ready help.' Open 24 hours.",
   example:"A: Dobbiamo andare al pronto soccorso.\nB: L'ospedale piu vicino e a due chilometri.",
   exampleSrc:"A: We need to go to the ER.\nB: The nearest hospital is two kilometers away.",
   funFact:"Literally 'ready help.' Italian ERs use a color triage: 'codice rosso' (critical), 'codice giallo' (urgent), 'codice verde' (minor), 'codice bianco' (non-urgent). Wait times for 'codice bianco' can exceed 4 hours. The service is free for emergencies."},

  {type:"teach", trg:"svenire", src:"to faint / to pass out", pos:"verb", gender:null,
   note:"Irregular. Present: svengo, svieni, sviene.\nPast: sono svenuto/a (uses essere). 'Sta svenendo!' = He/She is fainting!",
   example:"A: Il ragazzo e svenuto!\nB: Sdraiatelo e alzategli le gambe.",
   exampleSrc:"A: The boy fainted!\nB: Lay him down and raise his legs.",
   funFact:"From 's-' (un-) + 'venire' (to come), literally 'to un-come.' The person 'un-arrives' from consciousness. Italian first aid for fainting: lay the person down, raise their legs, loosen tight clothing. Always call 112 if the person does not recover quickly."},

  {type:"teach", trg:"respirare", src:"to breathe", pos:"verb", gender:null,
   note:"Regular -are verb. Present: respiro, respiri, respira.\n'Non riesce a respirare' = He/she cannot breathe.",
   example:"A: Riesci a respirare bene?\nB: No, ho difficolta a respirare.",
   exampleSrc:"A: Can you breathe well?\nB: No, I have difficulty breathing.",
   funFact:"From Latin 'respirare' (to breathe again), with 're-' (again) + 'spirare' (to breathe). The same root gave English 'respiration,' 'spirit' (breath of life), 'inspire' (breathe in), and 'expire' (breathe out, die). Breathing difficulty is always a 'codice giallo' or higher."},

  {type:"teach", trg:"sanguinare", src:"to bleed", pos:"verb", gender:null,
   note:"Regular -are verb. From 'sangue' (blood, masculine).\n'Sta sanguinando' = It is bleeding.",
   example:"A: La ferita sta sanguinando molto.\nB: Premi forte con un panno pulito.",
   exampleSrc:"A: The wound is bleeding a lot.\nB: Press hard with a clean cloth.",
   funFact:"From 'sangue' (blood), from Latin 'sanguis.' English 'sanguine' (optimistic, ruddy) comes from the medieval belief that blood ('sanguis') was the humor responsible for cheerfulness. Italian first aid: apply pressure, elevate the wound, call 112 for heavy bleeding."},

  {type:"teach", trg:"rotto", src:"broken", pos:"adj", gender:null,
   note:"Adj. Feminine: rotta. Past participle of 'rompere' (to break).\n'Il braccio e rotto' = the arm is broken. 'Frattura' = fracture.",
   example:"A: Penso che il dito sia rotto.\nB: Non lo muova. Andiamo al pronto soccorso.",
   exampleSrc:"A: I think the finger is broken.\nB: Do not move it. Let's go to the ER.",
   funFact:"Past participle of 'rompere' (to break), from Latin 'rumpere' (to burst, break). The same root gave English 'rupture,' 'corrupt' (broken with), and 'abrupt' (broken off). For bones, the medical term is 'frattura' (fracture). 'Rotto' is the everyday word."},

  {type:"teach", trg:"il ghiaccio", src:"ice", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'glacies' (ice).\n'Mettere il ghiaccio' = to put ice on. First aid essential.",
   example:"A: Mi sono storto la caviglia.\nB: Metti subito il ghiaccio.",
   exampleSrc:"A: I twisted my ankle.\nB: Put ice on it right away.",
   funFact:"From Latin 'glacies' (ice), which also gave English 'glacier,' 'glacial,' and Italian 'gelato' (through 'gelare,' to freeze). The Italian first aid acronym for sprains is similar to English RICE: riposo (rest), ghiaccio (ice), compressione, elevazione."},

  {type:"teach", trg:"la puntura", src:"the sting / bite / injection", pos:"noun", gender:"f",
   note:"Feminine. From 'pungere' (to sting, prick).\n'Puntura d'insetto' = insect bite. 'Puntura' also = injection/shot.",
   example:"A: Ho una puntura d'ape. Sono allergico!\nB: Usi l'EpiPen! Chiamo il 112!",
   exampleSrc:"A: I have a bee sting. I am allergic!\nB: Use the EpiPen! I am calling 112!",
   funFact:"'Puntura' covers insect stings/bites AND medical injections. Context makes it clear. 'Puntura di zanzara' (mosquito bite), 'puntura d'ape' (bee sting), 'puntura intramuscolare' (intramuscular injection). Insect allergies ('allergia agli insetti') require immediate medical attention."},

  {type:"teach", trg:"aiuto!", src:"help!", pos:"intj", gender:null,
   note:"Interjection. From 'aiutare' (to help).\n'Aiuto!' = Help! 'Ho bisogno di aiuto' = I need help.",
   example:"A: Aiuto! Qualcuno chiami un'ambulanza!\nB: Stia calmo! Cosa e successo?",
   exampleSrc:"A: Help! Someone call an ambulance!\nB: Stay calm! What happened?",
   funFact:"From Latin 'adiutare' (to help), which also gave French 'aider' and Spanish 'ayudar.' 'Aiuto!' is the universal Italian cry for help. In a real emergency, Italians tend to shout 'Aiuto!' repeatedly. The verb 'aiutare' (to help) is regular: aiuto, aiuti, aiuta."},

  // Quiz steps
  {type:"mc", q:"What is Italy's universal emergency number?",
   opts:["112","911","999","118"],
   ans:"112",
   hint:"This EU-standard number connects to all emergency services: police, fire, and ambulance."},

  {type:"fb", s:"Chiamate un'{1}! Subito!",
   a:["ambulanza"],
   opts:["ambulanza","emergenza","dottore","farmacia"],
   hint:"You need a vehicle with medical equipment and paramedics to come immediately.",
   sSrc:"Call an {1}! Right away!"},

  {type:"match", pairs:[
    {trg:"l'emergenza", src:"the emergency"},
    {trg:"il pronto soccorso", src:"the ER"},
    {trg:"svenire", src:"to faint"},
    {trg:"sanguinare", src:"to bleed"},
    {trg:"rotto", src:"broken"}
  ]},

  {type:"mc", q:"What does 'svenire' literally mean?",
   opts:["To un-come (from consciousness)","To fall down","To sleep suddenly","To feel sick"],
   ans:"To un-come (from consciousness)",
   hint:"From 's-' (un-) + 'venire' (to c...). The person 'un-arrives' from awareness."},

  {type:"fb", s:"La ferita sta {1} molto.",
   a:["sanguinando"],
   opts:["sanguinando","respirando","bruciando","svenendo"],
   hint:"Blood is coming out of the wound. From 'sangue' (blood). Apply pressure with a clean cloth.",
   sSrc:"The wound is {1} a lot."},

  {type:"mc", q:"What does 'puntura' mean in Italian?",
   opts:["Both an insect sting and a medical injection","Only an insect bite","Only a needle injection","A punch"],
   ans:"Both an insect sting and a medical injection",
   hint:"From 'pungere' (to prick/s...). Context tells you whether it is a bug or a doctor."},

  {type:"fb", s:"Metti subito il {1} sulla caviglia.",
   a:["ghiaccio"],
   opts:["ghiaccio","cerotto","sangue","braccio"],
   hint:"You need something cold to reduce swelling. This frozen water is standard first aid for sprains.",
   sSrc:"Put {1} on the ankle right away."},

  {type:"mc", q:"What does 'codice rosso' mean in an Italian ER?",
   opts:["A life-threatening critical case","A minor injury","The waiting room","A blood test"],
   ans:"A life-threatening critical case",
   hint:"In Italian ER triage, the color red signals maximum urgency. Patients with this code are taken in immediately."},

  {type:"fb", s:"Penso che il dito sia {1}.",
   a:["rotto"],
   opts:["rotto","gonfio","tagliato","bruciato"],
   hint:"The bone may be fractured. Do not move it. The medical term is 'frattura.'",
   sSrc:"I think the finger is {1}."}
]};
export default LESSON_6;
