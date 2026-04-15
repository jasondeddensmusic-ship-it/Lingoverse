// Italian V2 Unit 12 Expansion — Lesson 6: Il fine settimana (Weekend Recap)
// Expands essere past tense unit with weekend recap combining avere + essere verbs.

const LESSON_6 = {id:"itv2_u12l6", title:"Il fine settimana", icon:"\uD83C\uDF1F", xp:15, board:true, steps:[
  {type:"intro", title:"Il fine settimana",
   desc:"Practice describing your weekend in Italian using both avere and essere verbs. Weekend recaps are a core part of Italian Monday conversation. This lesson ties together everything from Units 11 and 12.",
   goals:["Describe a complete weekend in Italian","Mix avere and essere verbs naturally","Use time expressions to structure your recap"]},

  {type:"teach", trg:"il fine settimana", src:"the weekend", pos:"noun", gender:"m",
   note:"Masculine. Also 'il weekend' (English loan, very common).\n'Questo fine settimana' = this weekend. 'Lo scorso fine settimana' = last weekend.",
   example:"A: Com'e andato il fine settimana?\nB: Benissimo! Siamo andati al mare.",
   exampleSrc:"A: How was the weekend?\nB: Great! We went to the beach.",
   funFact:"Italians use both 'fine settimana' and 'weekend.' Monday morning conversation often starts with 'Com'e andato il weekend?' (How was the weekend?). The expected answer is a mini-story. Answering just 'bene' (fine) feels disappointingly short."},

  {type:"teach", trg:"sabato mattina", src:"Saturday morning", pos:"noun", gender:"m",
   note:"No article needed with days as time expressions.\n'Sabato mattina mi sono svegliato tardi' = Saturday morning I woke up late.",
   example:"A: Cosa hai fatto sabato mattina?\nB: Sabato mattina sono andato al mercato.",
   exampleSrc:"A: What did you do Saturday morning?\nB: Saturday morning I went to the market.",
   funFact:"Italian days can be subdivided: 'sabato mattina' (Saturday morning), 'sabato pomeriggio' (Saturday afternoon), 'sabato sera' (Saturday evening), 'sabato notte' (Saturday night). This gives precise time markers for weekend stories without needing clock times."},

  {type:"teach", trg:"domenica sera", src:"Sunday evening", pos:"noun", gender:"f",
   note:"No article for time expressions. 'Domenica' is the only feminine day in Italian.\n'Domenica sera siamo tornati' = Sunday evening we came back.",
   example:"A: Cosa avete fatto domenica sera?\nB: Domenica sera siamo stati a casa. Film e pizza.",
   exampleSrc:"A: What did you do Sunday evening?\nB: Sunday evening we stayed home. Movie and pizza.",
   funFact:"'Domenica' comes from Latin 'dies dominica' (the Lord's day). It is the only feminine day of the week in Italian (the rest are masculine). Sunday in Italy is traditionally family day: long lunch, visiting grandparents, and a relaxed evening at home."},

  {type:"teach", trg:"ho cucinato", src:"I cooked", pos:"verb", gender:null,
   note:"Passato prossimo of 'cucinare' (to cook). Uses avere.\nRegular: cucinare > cucinato.",
   example:"A: Hai cucinato qualcosa di buono?\nB: Si, ho cucinato le lasagne!",
   exampleSrc:"A: Did you cook something good?\nB: Yes, I cooked lasagna!",
   funFact:"Weekend cooking is a sacred Italian tradition. Sunday lunch ('il pranzo della domenica') is often the most elaborate meal of the week, prepared by the whole family. 'Cucinare' uses avere because it is a transitive verb: you cook SOMETHING."},

  {type:"teach", trg:"mi sono rilassato/a", src:"I relaxed", pos:"verb", gender:null,
   note:"Reflexive of 'rilassarsi.' Mi + sono + rilassato/a.\nUses essere. 'Mi sono rilassato sul divano' = I relaxed on the couch.",
   example:"A: Ti sei rilassato questo weekend?\nB: Si, mi sono rilassato leggendo un libro.",
   exampleSrc:"A: Did you relax this weekend?\nB: Yes, I relaxed by reading a book.",
   funFact:"'Rilassarsi' is reflexive because you relax YOURSELF. Italian weekends balance activity and rest: 'Sabato siamo usciti, domenica mi sono rilassato' (Saturday we went out, Sunday I relaxed). The verb comes from Latin 'relaxare' (to loosen again)."},

  {type:"teach", trg:"abbiamo pranzato", src:"we had lunch", pos:"verb", gender:null,
   note:"Passato prossimo of 'pranzare' (to have lunch). Uses avere.\nRegular: pranzare > pranzato.",
   example:"A: Dove avete pranzato?\nB: Abbiamo pranzato dalla nonna.",
   exampleSrc:"A: Where did you have lunch?\nB: We had lunch at grandma's.",
   funFact:"'Pranzare dalla nonna' (having lunch at grandma's) is the quintessential Italian Sunday. 'Dalla nonna' (at grandma's place) uses 'da' because you go TO someone's home. Italian has specific verbs for each meal: 'pranzare' (lunch), 'cenare' (dinner), 'fare colazione' (breakfast)."},

  {type:"teach", trg:"siamo usciti", src:"we went out", pos:"verb", gender:null,
   note:"Passato prossimo of 'uscire' with essere. 'Noi' form (mixed/male).\n'Siamo usciti con amici' = we went out with friends.",
   example:"A: Siete usciti sabato sera?\nB: Si, siamo usciti a cena con amici.",
   exampleSrc:"A: Did you go out Saturday evening?\nB: Yes, we went out for dinner with friends.",
   funFact:"Saturday evening out ('sabato sera') is the highlight of the Italian social week. Typical plans: dinner with friends at a restaurant or pizzeria, followed by a walk, gelato, or a drink at a bar. 'Uscire' with essere because it is a movement verb."},

  {type:"teach", trg:"ho dormito", src:"I slept", pos:"verb", gender:null,
   note:"Passato prossimo of 'dormire.' Uses avere.\nRegular -ire: dormire > dormito. 'Ho dormito bene' = I slept well.",
   example:"A: Hai dormito bene?\nB: Ho dormito fino alle dieci! Che lusso.",
   exampleSrc:"A: Did you sleep well?\nB: I slept until ten! What a luxury.",
   funFact:"Sleeping late on weekends ('dormire fino a tardi') is a universal pleasure. 'Che lusso!' (What a luxury!) is the typical Italian reaction to sleeping in. 'Dormire' uses avere because sleeping is an intransitive state, not movement."},

  {type:"teach", trg:"non ho fatto niente", src:"I did not do anything / I did nothing", pos:"verb", gender:null,
   note:"'Niente' = nothing. Double negative required in Italian.\n'Non ho fatto niente di speciale' = I did not do anything special.",
   example:"A: Cosa hai fatto questo weekend?\nB: Non ho fatto niente di speciale. Mi sono rilassato.",
   exampleSrc:"A: What did you do this weekend?\nB: I did not do anything special. I relaxed.",
   funFact:"'Non... niente' is a grammatically required double negative in Italian (unlike English, where it is informal). 'Niente' can also go first: 'Niente di speciale' (Nothing special). Answering 'non ho fatto niente' is perfectly acceptable for weekends. Rest is valued."},

  {type:"teach", trg:"e stato un bel weekend", src:"it was a nice weekend", pos:"verb", gender:null,
   note:"'Bel' = nice/beautiful (shortened from 'bello' before consonant).\n'E stato' = it was. Classic weekend summary.",
   example:"A: Allora, com'e andato?\nB: E stato un bel weekend. Niente di stressante.",
   exampleSrc:"A: So, how did it go?\nB: It was a nice weekend. Nothing stressful.",
   funFact:"'Bel' is the shortened form of 'bello' used before masculine nouns starting with a consonant: 'un bel weekend,' 'un bel film,' 'un bel posto.' This summarizing phrase wraps up the weekend recap neatly. Italians value the ability to summarize well."},

  // Quiz steps
  {type:"mc", q:"What is the typical Italian Monday morning question?",
   opts:["Com'e andato il weekend?","Hai lavorato?","Quanto hai dormito?","Hai mangiato bene?"],
   ans:"Com'e andato il weekend?",
   hint:"Italians expect a mini-story in response. Just saying 'bene' feels too short."},

  {type:"fb", s:"Sabato {1} siamo andati al mercato.",
   a:["mattina"],
   opts:["mattina","sera","notte","pomeriggio"],
   hint:"This is the first part of the day, when outdoor markets are open. Morning time.",
   sSrc:"Saturday {1} we went to the market."},

  {type:"match", pairs:[
    {trg:"ho cucinato", src:"I cooked"},
    {trg:"mi sono rilassato", src:"I relaxed"},
    {trg:"abbiamo pranzato", src:"we had lunch"},
    {trg:"siamo usciti", src:"we went out"},
    {trg:"ho dormito", src:"I slept"}
  ]},

  {type:"mc", q:"Which verbs in a weekend recap use essere?",
   opts:["Movement and reflexive verbs (uscire, rilassarsi, andare)","All verbs","Only cooking verbs","Only sleeping verbs"],
   ans:"Movement and reflexive verbs (uscire, rilassarsi, andare)",
   hint:"Actions you do TO something (cooking, sleeping, eating) use avere. Movement and self-directed actions use essere."},

  {type:"fb", s:"Non ho fatto {1} di speciale.",
   a:["niente"],
   opts:["niente","tutto","molto","qualcosa"],
   hint:"You did nothing remarkable. Italian requires a double negative: 'non' + this word meaning 'nothing.'",
   sSrc:"I did not do {1} special."},

  {type:"mc", q:"What is 'pranzare dalla nonna'?",
   opts:["Having lunch at grandma's house","Cooking for grandma","Calling grandma","Meeting grandma at a restaurant"],
   ans:"Having lunch at grandma's house",
   hint:"'Da' before a person means at their place. 'Dalla nonna' = at grandma's. The quintessential Italian Sunday."},

  {type:"fb", s:"Siamo {1} a cena con amici sabato sera.",
   a:["usciti"],
   opts:["usciti","cucinati","dormiti","mangiati"],
   hint:"The group left home to have dinner. This movement verb uses essere. Male/mixed plural form.",
   sSrc:"We went {1} for dinner with friends Saturday evening."},

  {type:"mc", q:"Why does 'dormire' use avere but 'uscire' use essere?",
   opts:["Dormire is a state (no movement), uscire is movement","Both use essere","Both use avere","It is random"],
   ans:"Dormire is a state (no movement), uscire is movement",
   hint:"Sleeping happens in one place (avere). Going out involves leaving a place (essere). Movement is the key."},

  {type:"fb", s:"E {1} un bel weekend.",
   a:["stato"],
   opts:["stato","fatto","andato","avuto"],
   hint:"You are summarizing: the weekend was nice. This is the past participle of 'essere.'",
   sSrc:"It {1} a nice weekend."}
]};
export default LESSON_6;
