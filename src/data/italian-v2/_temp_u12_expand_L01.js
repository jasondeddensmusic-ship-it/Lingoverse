// Italian V2 Unit 12 Expansion — Lesson 4: I verbi riflessivi al passato (Reflexive Verbs in Past)
// Expands essere past tense unit with reflexive verbs in passato prossimo.

const LESSON_4 = {id:"itv2_u12l4", title:"I verbi riflessivi al passato", icon:"\uD83E\uDE9E", xp:15, board:true, steps:[
  {type:"intro", title:"I verbi riflessivi al passato",
   desc:"Learn how reflexive verbs work in the passato prossimo. All reflexive verbs use 'essere' as their helper, and the past participle must agree with the subject.",
   goals:["Form passato prossimo of reflexive verbs","Apply gender agreement with reflexive past","Talk about daily routine in the past"]},

  {type:"tip", title:"Reflexive verbs in the past",
   text:"All reflexive verbs use ESSERE in the passato prossimo:\nmi sono + participle (agrees!)\n\nExamples:\nMi sono svegliato/a = I woke up\nTi sei lavato/a = You washed yourself\nSi e vestita = She got dressed\nCi siamo divertiti/e = We had fun\n\nThe participle ALWAYS agrees with the subject.",
   deepDive:"Reflexive verbs express actions you do to yourself: svegliarsi (wake oneself), lavarsi (wash oneself), vestirsi (dress oneself). The reflexive pronoun (mi, ti, si, ci, vi, si) goes before 'essere.' These are among the most useful daily Italian verbs."},

  {type:"teach", trg:"mi sono svegliato/a", src:"I woke up", pos:"verb", gender:null,
   note:"Reflexive of 'svegliarsi.' Mi (myself) + sono (am) + svegliato/a.\nMale: svegliato. Female: svegliata.",
   example:"A: A che ora ti sei svegliato?\nB: Mi sono svegliato alle sei.",
   exampleSrc:"A: What time did you wake up?\nB: I woke up at six.",
   funFact:"'Svegliarsi' from 'sveglia' (alarm clock, from Latin 'ex-vigilare'). The reflexive 'si' becomes 'mi' for 'I,' 'ti' for 'you,' etc. Italian morning routines are described entirely with reflexive verbs: svegliarsi, alzarsi, lavarsi, vestirsi."},

  {type:"teach", trg:"ti sei alzato/a", src:"you got up", pos:"verb", gender:null,
   note:"Reflexive of 'alzarsi' (to get up). Ti (yourself) + sei (are) + alzato/a.\n'Alzarsi' = to rise, get out of bed.",
   example:"A: Ti sei alzata presto?\nB: Si, mi sono alzata alle sei e mezza.",
   exampleSrc:"A: Did you get up early?\nB: Yes, I got up at six thirty.",
   funFact:"'Alzarsi' from 'alto' (high). Literally 'to raise oneself.' Different from 'svegliarsi': you can be awake ('sveglio') but still in bed. 'Alzarsi' means physically getting up. Italians often say 'mi alzo con il piede sinistro' (I got up with the left foot = I had a bad start)."},

  {type:"teach", trg:"si e vestito/a", src:"he/she got dressed", pos:"verb", gender:null,
   note:"Reflexive of 'vestirsi.' Si (himself/herself) + e (is) + vestito/a.\nAgreement: vestito (male), vestita (female).",
   example:"A: Marco si e vestito in fretta.\nB: Si vede! La camicia e al contrario.",
   exampleSrc:"A: Marco got dressed in a hurry.\nB: You can tell! The shirt is inside out.",
   funFact:"'Vestirsi' from 'veste' (garment), from Latin 'vestis.' The same root gave English 'vest,' 'invest' (clothe in power), and 'travesty' (cross-dressed). Getting dressed in Italian always uses the reflexive: you 'dress yourself,' never just 'dress.'"},

  {type:"teach", trg:"si e lavato/a", src:"he/she washed (himself/herself)", pos:"verb", gender:null,
   note:"Reflexive of 'lavarsi.' Si + e + lavato/a.\n'Lavarsi le mani' = to wash one's hands. 'Lavarsi i denti' = to brush one's teeth.",
   example:"A: Ti sei lavato le mani?\nB: Si, mi sono lavato le mani prima di mangiare.",
   exampleSrc:"A: Did you wash your hands?\nB: Yes, I washed my hands before eating.",
   funFact:"'Lavarsi' from Latin 'lavare' (to wash). English 'lavatory,' 'laundry,' and 'lava' (volcanic 'wash') share this root. In Italian, washing body parts uses the reflexive + definite article: 'mi lavo LE mani' (I wash THE hands), not 'mi lavo le mie mani.'"},

  {type:"teach", trg:"ci siamo divertiti/e", src:"we had fun", pos:"verb", gender:null,
   note:"Reflexive of 'divertirsi.' Ci (ourselves) + siamo + divertiti/e.\nMale/mixed: divertiti. All female: divertite.",
   example:"A: Vi siete divertiti alla festa?\nB: Si, ci siamo divertiti moltissimo!",
   exampleSrc:"A: Did you have fun at the party?\nB: Yes, we had a great time!",
   funFact:"'Divertirsi' literally means 'to turn oneself away' from boredom. It is the go-to verb for expressing enjoyment. 'Mi sono divertito/a' (I had fun) is one of the most common post-event reactions. The reflexive makes it about your personal experience."},

  {type:"teach", trg:"si sono incontrati/e", src:"they met each other", pos:"verb", gender:null,
   note:"Reciprocal reflexive of 'incontrarsi.' Si + sono + incontrati/e.\n'Incontrarsi' = to meet each other (implies both sides).",
   example:"A: Dove si sono incontrati?\nB: Si sono incontrati al bar sotto casa.",
   exampleSrc:"A: Where did they meet each other?\nB: They met at the cafe downstairs.",
   funFact:"'Incontrarsi' is a reciprocal verb: two or more people do the action to each other. Other reciprocals: 'abbracciarsi' (to hug each other), 'baciarsi' (to kiss each other), 'vedersi' (to see each other). All use essere in the past."},

  {type:"teach", trg:"mi sono preparato/a", src:"I prepared myself / I got ready", pos:"verb", gender:null,
   note:"Reflexive of 'prepararsi.' Mi + sono + preparato/a.\n'Prepararsi' = to get ready. 'Mi preparo' = I am getting ready.",
   example:"A: Ti sei preparata per la cena?\nB: Si, mi sono preparata in venti minuti.",
   exampleSrc:"A: Did you get ready for dinner?\nB: Yes, I got ready in twenty minutes.",
   funFact:"'Prepararsi' covers all aspects of getting ready: showering, dressing, makeup, hair. 'Quanto tempo ci vuole per prepararsi?' (How long does it take to get ready?) is a classic Italian question. The reflexive implies preparing oneself, not preparing something else."},

  {type:"teach", trg:"mi sono addormentato/a", src:"I fell asleep", pos:"verb", gender:null,
   note:"Reflexive of 'addormentarsi.' From 'dormire' (to sleep).\n'Mi sono addormentato sul divano' = I fell asleep on the couch.",
   example:"A: Mi sono addormentato durante il film.\nB: Era cosi noioso?",
   exampleSrc:"A: I fell asleep during the movie.\nB: Was it that boring?",
   funFact:"From 'ad-' (toward) + 'dormire' (to sleep). 'Addormentarsi' is the process of falling asleep, while 'dormire' is being asleep. Italian distinguishes the transition: 'Mi addormento alle undici' (I fall asleep at eleven) vs. 'Dormo otto ore' (I sleep eight hours)."},

  // Quiz steps
  {type:"mc", q:"Which helper verb do ALL reflexive verbs use in the past?",
   opts:["Essere","Avere","Stare","Fare"],
   ans:"Essere",
   hint:"Every reflexive verb, without exception, takes essere in the passato prossimo. The participle must agree."},

  {type:"fb", s:"Mi sono {1} alle sei di mattina.",
   a:["svegliato"],
   opts:["svegliato","alzato","vestito","lavato"],
   hint:"You opened your eyes and became conscious (assuming male). This is the first thing you do each morning.",
   sSrc:"I {1} up at six in the morning."},

  {type:"match", pairs:[
    {trg:"svegliarsi", src:"to wake up"},
    {trg:"alzarsi", src:"to get up"},
    {trg:"vestirsi", src:"to get dressed"},
    {trg:"lavarsi", src:"to wash oneself"},
    {trg:"divertirsi", src:"to have fun"}
  ]},

  {type:"mc", q:"A woman says she got dressed. Which is correct?",
   opts:["Mi sono vestita","Mi sono vestito","Mi ho vestita","Ho vestito"],
   ans:"Mi sono vestita",
   hint:"Female speaker = -a ending. Reflexive = essere. First person = mi sono. Everything agrees."},

  {type:"fb", s:"Ci siamo {1} moltissimo alla festa!",
   a:["divertiti"],
   opts:["divertiti","divertite","divertito","divertita"],
   hint:"A mixed group had fun (masculine plural). The participle ends in -i for male or mixed groups.",
   sSrc:"We had a great {1} at the party!"},

  {type:"mc", q:"What is the difference between 'svegliarsi' and 'alzarsi'?",
   opts:["Svegliarsi = become conscious, alzarsi = physically get out of bed","They are the same","Alzarsi is formal","Svegliarsi is past only"],
   ans:"Svegliarsi = become conscious, alzarsi = physically get out of bed",
   hint:"You can be awake (sveglio) but still lying in bed. Getting up (alzarsi) means leaving the bed."},

  {type:"fb", s:"Ti sei {1} le mani prima di mangiare?",
   a:["lavato"],
   opts:["lavato","vestito","svegliato","preparato"],
   hint:"Did you clean your hands with soap and water? This reflexive verb is about washing.",
   sSrc:"Did you {1} your hands before eating?"},

  {type:"mc", q:"What makes 'incontrarsi' different from other reflexives?",
   opts:["It is reciprocal: two people do the action to each other","It is not reflexive","It uses avere","It has no past tense"],
   ans:"It is reciprocal: two people do the action to each other",
   hint:"Like 'abbracciarsi' (hug each other), this verb implies mutual action between two or more people."},

  {type:"fb", s:"Mi sono {1} durante il film.",
   a:["addormentato"],
   opts:["addormentato","svegliato","alzato","preparato"],
   hint:"You unintentionally fell asleep while watching. From 'dormire' (to sleep) with the prefix 'ad-.'",
   sSrc:"I fell {1} during the movie."}
]};
export default LESSON_4;
