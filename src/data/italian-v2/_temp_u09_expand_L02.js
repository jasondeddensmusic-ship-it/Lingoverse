// Italian V2 Unit 09 Expansion — Lesson 5: I sintomi (Symptoms in Detail)
// Expands health unit with detailed symptoms, describing pain, and body sensations.

const LESSON_5 = {id:"itv2_u9l5", title:"I sintomi", icon:"\uD83E\uDE7A", xp:15, board:true, steps:[
  {type:"intro", title:"I sintomi",
   desc:"Learn to describe specific symptoms and sensations in Italian. Being precise about how you feel helps doctors and pharmacists give you the right treatment.",
   goals:["Describe pain types and intensity","Name common symptoms precisely","Communicate when something started"]},

  {type:"teach", trg:"il mal di gola", src:"the sore throat", pos:"noun", gender:"m",
   note:"Masculine. 'Gola' = throat (feminine).\n'Ho mal di gola' = I have a sore throat.",
   example:"A: Ho un terribile mal di gola.\nB: Riesci a deglutire?",
   exampleSrc:"A: I have a terrible sore throat.\nB: Can you swallow?",
   funFact:"'Gola' comes from Latin 'gula' (gullet, throat), which also gave English 'gullet.' Italian uses the 'mal di' pattern for most body aches. 'Mal di gola' is extremely common in Italian winter conversations, alongside 'mal di testa' and 'mal di schiena.'"},

  {type:"teach", trg:"il mal di pancia", src:"the stomachache / bellyache", pos:"noun", gender:"m",
   note:"Masculine. 'Pancia' = belly/tummy (colloquial).\nMore formal: 'mal di stomaco.' Children's word: 'pancino.'",
   example:"A: Il bambino ha mal di pancia.\nB: Cosa ha mangiato?",
   exampleSrc:"A: The child has a stomachache.\nB: What did he eat?",
   funFact:"'Pancia' is the colloquial word for belly, while 'stomaco' is more anatomical. Italians commonly blame 'mal di pancia' on cold drinks ('acqua fredda'), eating too fast, or 'colpo d'aria' (cold drafts). The distinction between 'pancia' and 'stomaco' matters medically."},

  {type:"teach", trg:"il capogiro", src:"the dizziness", pos:"noun", gender:"m",
   note:"Masculine. Compound: 'capo' (head) + 'giro' (turn).\n'Ho il capogiro' = I am dizzy. Literally 'head-spinning.'",
   example:"A: Ho il capogiro.\nB: Si sieda. Beva un po' d'acqua.",
   exampleSrc:"A: I am dizzy.\nB: Sit down. Drink some water.",
   funFact:"Literally 'head-turn,' perfectly describing the sensation. Also called 'vertigine' (vertigo) in medical contexts. Italian has many expressive compound words: 'capolavoro' (head-work = masterpiece), 'capoluogo' (head-place = capital city), 'capogiro' (head-turn = dizziness)."},

  {type:"teach", trg:"la nausea", src:"nausea", pos:"noun", gender:"f",
   note:"Feminine. From Greek 'nausia' (seasickness).\n'Ho la nausea' = I feel nauseous. 'Mi viene la nausea' = I am getting nauseous.",
   example:"A: Ho la nausea da stamattina.\nB: Ha vomitato?",
   exampleSrc:"A: I have had nausea since this morning.\nB: Have you vomited?",
   funFact:"From Greek 'nausia,' from 'naus' (ship), because the original meaning was seasickness. The same root gave 'nautica' (nautical) and 'nave' (ship). Motion sickness is 'mal di mare' (sea), 'mal d'auto' (car), or 'mal d'aereo' (air)."},

  {type:"teach", trg:"la ferita", src:"the wound / injury", pos:"noun", gender:"f",
   note:"Feminine. From 'ferire' (to wound).\nPlural: le ferite. 'Ferita lieve' = minor wound. 'Ferita grave' = serious wound.",
   example:"A: Questa ferita e profonda?\nB: No, e superficiale. Serve solo un cerotto.",
   exampleSrc:"A: Is this wound deep?\nB: No, it is superficial. It just needs a band-aid.",
   funFact:"From Latin 'ferire' (to strike, wound). The same root gave English 'ferocious' (fierce, wounding). In Italian emergency rooms ('pronto soccorso'), injuries are classified by color: bianco (minor), verde (not urgent), giallo (urgent), rosso (life-threatening)."},

  {type:"teach", trg:"gonfio", src:"swollen", pos:"adj", gender:null,
   note:"Adj. Feminine: gonfia. From 'gonfiare' (to swell, inflate).\n'La caviglia e gonfia' = the ankle is swollen.",
   example:"A: La mano e molto gonfia.\nB: Metta del ghiaccio.",
   exampleSrc:"A: The hand is very swollen.\nB: Put some ice on it.",
   funFact:"From a Germanic root meaning 'to inflate.' 'Gonfiare' also means 'to pump up' (a tire, a balloon). In medical Italian, 'gonfio' describes swelling from injury, infection, or allergic reaction. First aid: 'ghiaccio' (ice) is the standard Italian recommendation."},

  {type:"teach", trg:"l'eruzione cutanea", src:"the rash / skin eruption", pos:"noun", gender:"f",
   note:"Feminine. 'Eruzione' = eruption, 'cutanea' = skin-related.\nColloquial: 'lo sfogo' (outbreak).",
   example:"A: Ho un'eruzione cutanea sul braccio.\nB: Da quando? Prude?",
   exampleSrc:"A: I have a rash on my arm.\nB: Since when? Does it itch?",
   funFact:"'Cutaneo/a' comes from Latin 'cutis' (skin), which gave English 'cutaneous' and 'cuticle.' Italians more commonly say 'sfogo' (outbreak) or 'irritazione' (irritation) than the medical term 'eruzione cutanea.' A pharmacist can recommend 'crema antistaminica' (antihistamine cream)."},

  {type:"teach", trg:"bruciare", src:"to burn / to sting", pos:"verb", gender:null,
   note:"Regular -are verb. 'Mi brucia lo stomaco' = my stomach burns.\n'Bruciatura' = a burn (noun). 'Scottatura' = sunburn.",
   example:"A: Mi brucia l'occhio.\nB: Ha messo qualcosa? Un collirio?",
   exampleSrc:"A: My eye stings.\nB: Did you put something in? Eye drops?",
   funFact:"'Bruciare' covers burning sensations from fire ('mi sono bruciato' = I burned myself), stomach acid ('bruciore di stomaco' = heartburn), and stinging ('mi brucia' = it stings). 'Scottatura solare' specifically means sunburn."},

  {type:"teach", trg:"prudere", src:"to itch", pos:"verb", gender:null,
   note:"Regular -ere verb. 'Mi prude il braccio' = my arm itches.\n'Prurito' = itch (noun). 'Non grattare!' = Don't scratch!",
   example:"A: Mi prude tutto il corpo!\nB: Potrebbe essere un'allergia.",
   exampleSrc:"A: My whole body itches!\nB: It could be an allergy.",
   funFact:"From Latin 'prurire' (to itch). English 'prurient' (having an itch/desire) comes from the same root. The noun 'prurito' is the technical medical term for itching. Italian doctors distinguish 'prurito localizzato' (local itch) from 'prurito diffuso' (widespread itch)."},

  {type:"teach", trg:"tossire", src:"to cough", pos:"verb", gender:null,
   note:"Regular -ire verb (with -isc- forms). Present: tossisco, tossisci.\nFrom Latin 'tussire' (to cough).",
   example:"A: Tossisce da molto?\nB: Si, da tre giorni. Una tosse secca.",
   exampleSrc:"A: Have you been coughing for long?\nB: Yes, for three days. A dry cough.",
   funFact:"From Latin 'tussire' (to cough). English 'pertussis' (whooping cough) uses the same root. Italians distinguish 'tosse secca' (dry cough) from 'tosse grassa' (productive cough, literally 'fat cough'). Each requires different treatment."},

  // Quiz steps
  {type:"mc", q:"What does 'capogiro' literally mean?",
   opts:["Head-turn (dizziness)","Head-pain","Spinning brain","Falling down"],
   ans:"Head-turn (dizziness)",
   hint:"A compound of 'capo' (head) and 'giro' (turn). It describes the spinning sensation perfectly."},

  {type:"fb", s:"Ho un terribile mal di {1}.",
   a:["gola"],
   opts:["gola","pancia","testa","schiena"],
   hint:"Your throat hurts when you swallow. This body part is in the front of your neck.",
   sSrc:"I have a terrible sore {1}."},

  {type:"match", pairs:[
    {trg:"il mal di gola", src:"sore throat"},
    {trg:"la nausea", src:"nausea"},
    {trg:"la ferita", src:"wound"},
    {trg:"gonfio", src:"swollen"},
    {trg:"prudere", src:"to itch"}
  ]},

  {type:"mc", q:"What is the original meaning of 'nausea'?",
   opts:["Seasickness (from Greek 'naus' = ship)","Stomachache","Headache","Fear"],
   ans:"Seasickness (from Greek 'naus' = ship)",
   hint:"This word traveled from Greek ships to modern medicine. 'Naus' also gave us 'nautical.'"},

  {type:"fb", s:"La mano e molto {1}. Metta del ghiaccio.",
   a:["gonfia"],
   opts:["gonfia","calda","rossa","fredda"],
   hint:"The hand has increased in size from injury or inflammation. The Italian for ice is 'ghiaccio.'",
   sSrc:"The hand is very {1}. Put some ice on it."},

  {type:"mc", q:"What is the difference between 'tosse secca' and 'tosse grassa'?",
   opts:["Secca is dry, grassa is productive (with mucus)","They are the same","Secca is worse","Grassa is a children's cough"],
   ans:"Secca is dry, grassa is productive (with mucus)",
   hint:"'Secca' (dry) and 'grassa' (literally 'fat,' meaning productive). Each needs different treatment."},

  {type:"fb", s:"Mi {1} tutto il corpo! Potrebbe essere un'allergia.",
   a:["prude"],
   opts:["prude","brucia","fa male","gira"],
   hint:"Your skin has an irritating sensation that makes you want to scratch. From Latin 'prurire.'",
   sSrc:"My whole body {1}! It could be an allergy."},

  {type:"mc", q:"How are injuries classified in Italian emergency rooms?",
   opts:["By color: white (minor), green, yellow, red (critical)","By number 1-10","By letter A-D","By animal names"],
   ans:"By color: white (minor), green, yellow, red (critical)",
   hint:"'Codice bianco' is the least urgent. 'Codice rosso' is life-threatening. This is the triage system."},

  {type:"fb", s:"Mi {1} lo stomaco.",
   a:["brucia"],
   opts:["brucia","prude","gonfia","tossisce"],
   hint:"You feel a hot, burning sensation inside. This verb describes the stinging pain of acid or fire.",
   sSrc:"My stomach {1}."}
]};
export default LESSON_5;
