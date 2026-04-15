// Italian V2 Unit 11 Expansion — Lesson 4: Altri participi irregolari (More Irregular Participles)
// Expands past tense unit with additional high-frequency irregular past participles.

const LESSON_4 = {id:"itv2_u11l4", title:"Altri participi irregolari", icon:"\uD83D\uDD11", xp:15, board:true, steps:[
  {type:"intro", title:"Altri participi irregolari",
   desc:"Learn more irregular past participles that you will encounter daily in Italian. These high-frequency verbs complete your essential past tense toolkit.",
   goals:["Master additional irregular past participles","Use them correctly in conversation","Recognize pattern groups among irregulars"]},

  {type:"teach", trg:"messo", src:"put / placed (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'mettere' (to put).\n'Ho messo' = I put. From Latin 'missum.'",
   example:"A: Dove hai messo le chiavi?\nB: Le ho messe sul tavolo.",
   exampleSrc:"A: Where did you put the keys?\nB: I put them on the table.",
   funFact:"From Latin 'missum' (sent, placed). 'Mettere' is extremely versatile: mettere la giacca (put on a jacket), mettersi a lavorare (start working), mettersi d'accordo (agree). The past participle 'messo' does not follow any regular pattern."},

  {type:"teach", trg:"perso", src:"lost (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'perdere' (to lose).\n'Ho perso' = I lost. Also: 'perduto' (literary/formal).",
   example:"A: Ho perso il portafoglio!\nB: Dove l'hai visto l'ultima volta?",
   exampleSrc:"A: I lost my wallet!\nB: Where did you see it last?",
   funFact:"Both 'perso' and 'perduto' are correct. 'Perso' is everyday speech, 'perduto' is literary. Marcel Proust's masterwork is 'Alla ricerca del tempo perduto' in Italian (In Search of Lost Time). 'Perdere' also means to miss: 'perdere il treno' (miss the train)."},

  {type:"teach", trg:"speso", src:"spent (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'spendere' (to spend money).\n'Ho speso troppo' = I spent too much.",
   example:"A: Quanto hai speso?\nB: Ho speso duecento euro.",
   exampleSrc:"A: How much did you spend?\nB: I spent two hundred euros.",
   funFact:"From Latin 'expendere' (to weigh out), because Romans paid by weighing silver. English 'spend' and 'expense' share this root. 'Spendere' is only for money. For time, use 'passare' (passare il tempo = spend time) or 'trascorrere' (more formal)."},

  {type:"teach", trg:"chiuso", src:"closed / shut (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'chiudere' (to close).\n'Ho chiuso la porta' = I closed the door. Also adjective: 'negozio chiuso.'",
   example:"A: Hai chiuso la finestra?\nB: Si, l'ho chiusa prima di uscire.",
   exampleSrc:"A: Did you close the window?\nB: Yes, I closed it before going out.",
   funFact:"From Latin 'clausum' (closed, shut), which also gave English 'close,' 'clause' (a closed/complete thought), and 'cloister' (an enclosed space). 'Chiuso' doubles as an adjective: 'il lunedi il museo e chiuso' (on Mondays the museum is closed)."},

  {type:"teach", trg:"deciso", src:"decided (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'decidere' (to decide).\n'Abbiamo deciso' = we decided. From Latin 'decisum' (cut off).",
   example:"A: Avete deciso dove andare?\nB: Si, abbiamo deciso di andare in Toscana.",
   exampleSrc:"A: Have you decided where to go?\nB: Yes, we decided to go to Tuscany.",
   funFact:"From Latin 'decidere' (to cut off, determine), from 'de-' (off) + 'caedere' (to cut). Making a decision 'cuts off' other options. English 'decide,' 'decisive,' and 'incision' share the root. 'Deciso' as an adjective means 'determined, resolute.'"},

  {type:"teach", trg:"rimasto", src:"stayed / remained (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'rimanere' (to remain/stay).\n'Sono rimasto' = I stayed (uses essere!).",
   example:"A: Perche sei rimasto a casa?\nB: Sono rimasto perche pioveva.",
   exampleSrc:"A: Why did you stay home?\nB: I stayed because it was raining.",
   funFact:"'Rimanere' uses essere in the past tense because it describes a state. 'Sono rimasto sorpreso' (I was surprised, literally 'I remained surprised'). From Latin 'remanere' (to stay behind). English 'remain' comes through French from the same root."},

  {type:"teach", trg:"risposto", src:"answered / replied (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'rispondere' (to answer).\n'Ho risposto' = I answered. From Latin 'responsum.'",
   example:"A: Hai risposto all'email?\nB: Si, ho risposto stamattina.",
   exampleSrc:"A: Did you reply to the email?\nB: Yes, I replied this morning.",
   funFact:"From Latin 'responsum' (answered). English 'respond,' 'response,' and 'responsible' (able to respond) share this root. In Italian, 'rispondere a' (answer to): 'rispondere al telefono' (answer the phone), 'rispondere a una domanda' (answer a question)."},

  {type:"teach", trg:"scelto", src:"chosen / selected (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'scegliere' (to choose).\n'Ho scelto' = I chose. 'Avete scelto?' = Have you chosen? (restaurant).",
   example:"A: Avete scelto?\nB: Si, ho scelto la pizza margherita.",
   exampleSrc:"A: Have you chosen?\nB: Yes, I chose the margherita pizza.",
   funFact:"From Latin 'ex-colligere' (to pick out). Restaurant waiters commonly ask 'Avete scelto?' (Have you chosen?). The verb 'scegliere' is highly irregular: scelgo, scegli, sceglie, scegliamo, scegliete, scelgono. The past participle 'scelto' drops the 'gli' entirely."},

  {type:"teach", trg:"successo", src:"happened (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'succedere' (to happen).\n'Cosa e successo?' = What happened? Uses essere.",
   example:"A: Cosa e successo?\nB: Niente di grave. Solo un piccolo incidente.",
   exampleSrc:"A: What happened?\nB: Nothing serious. Just a small accident.",
   funFact:"From Latin 'succedere' (to come after, happen). 'Cosa e successo?' is one of the most important Italian phrases for travelers. 'Successo' as a noun means 'success' (a different etymology). Context makes the meaning clear: 'un grande successo' (a great success) vs. 'e successo ieri' (it happened yesterday)."},

  {type:"teach", trg:"corso", src:"run (past participle)", pos:"verb", gender:null,
   note:"Irregular past participle of 'correre' (to run).\n'Ho corso' = I ran. From Latin 'cursum.'",
   example:"A: Hai corso stamattina?\nB: Si, ho corso cinque chilometri al parco.",
   exampleSrc:"A: Did you run this morning?\nB: Yes, I ran five kilometers in the park.",
   funFact:"From Latin 'cursum' (run). The same root gave English 'course,' 'cursor,' 'current,' and 'courier.' 'Corso' is also a noun meaning 'course' (a school course) or 'main street' (Corso Buenos Aires in Milan is Europe's longest shopping street)."},

  // Quiz steps
  {type:"mc", q:"What is the past participle of 'mettere'?",
   opts:["Messo","Mettuto","Mettato","Mettito"],
   ans:"Messo",
   hint:"Completely irregular, from Latin 'missum.' One of the most used Italian verbs. 'Ho messo le chiavi qui.'"},

  {type:"fb", s:"Ho {1} il portafoglio!",
   a:["perso"],
   opts:["perso","messo","preso","chiuso"],
   hint:"Your wallet is gone and you cannot find it. This is the past participle of 'perdere' (to lose).",
   sSrc:"I {1} my wallet!"},

  {type:"match", pairs:[
    {trg:"messo", src:"put"},
    {trg:"perso", src:"lost"},
    {trg:"speso", src:"spent"},
    {trg:"chiuso", src:"closed"},
    {trg:"scelto", src:"chosen"}
  ]},

  {type:"mc", q:"What does 'Cosa e successo?' mean?",
   opts:["What happened?","What succeeded?","What is next?","What is the plan?"],
   ans:"What happened?",
   hint:"'Succedere' means to happen (not to succeed). Uses essere. Essential question for any situation."},

  {type:"fb", s:"Quanto hai {1}?",
   a:["speso"],
   opts:["speso","perso","messo","fatto"],
   hint:"You want to know how much money the person used for a purchase. From 'spendere' (to spend).",
   sSrc:"How much did you {1}?"},

  {type:"mc", q:"Why does 'rimanere' use essere in the past tense?",
   opts:["It describes a state, not an action","It is regular","It is about money","It ends in -ere"],
   ans:"It describes a state, not an action",
   hint:"Staying in a place is a state of being, not a transitive action. Like movement verbs, state verbs use essere."},

  {type:"fb", s:"Hai {1} all'email?",
   a:["risposto"],
   opts:["risposto","scritto","letto","aperto"],
   hint:"You want to know if the person sent a reply. This is the past participle of 'rispondere' (to answer).",
   sSrc:"Did you {1} to the email?"},

  {type:"mc", q:"What is the difference between 'perso' and 'perduto'?",
   opts:["Perso is everyday, perduto is literary/formal","They are different verbs","Perso is wrong","Perduto is informal"],
   ans:"Perso is everyday, perduto is literary/formal",
   hint:"Both are past participles of 'perdere.' One is spoken Italian, the other appears in book titles and poetry."},

  {type:"fb", s:"Avete {1}? Ho scelto la pizza.",
   a:["scelto"],
   opts:["scelto","deciso","fatto","visto"],
   hint:"The waiter asks if you have picked your food. This is the past participle of 'scegliere' (to choose).",
   sSrc:"Have you {1}? I chose the pizza."}
]};
export default LESSON_4;
