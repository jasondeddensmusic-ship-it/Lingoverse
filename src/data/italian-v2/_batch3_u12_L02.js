// Batch 3 — Unit 12, Lesson 2: Piu verbi con essere (More Essere Verbs)
const BATCH3_U12_L2 = {
  id:"itv2_u12l_b3_2", title:"Piu verbi con essere", icon:"\uD83C\uDFE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Piu verbi con essere",
     desc:"Expand your knowledge of verbs that use essere in the passato prossimo. Beyond movement verbs, state-change and life-event verbs also take essere.",
     goals:["Learn state-change verbs that use essere","Master life-event verbs with essere","Distinguish essere from avere verbs confidently"]},

    {type:"teach", trg:"diventare", src:"to become", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'e diventato/a.'\n'E diventato famoso' = He became famous.",
     example:"A: E diventata dottoressa!\nB: Che brava! Dopo tanti anni di studio.",
     exampleSrc:"A: She became a doctor!\nB: How great! After so many years of study.",
     funFact:"'Diventare' uses essere because it describes a change of state, not an action. The subject changes condition: 'e diventato grande' (he grew up), 'e diventata rossa' (she turned red). State-change is the second major category of essere verbs after movement."},

    {type:"teach", trg:"crescere", src:"to grow / to grow up", pos:"verb", gender:null,
     note:"Irregular past participle: cresciuto. Uses essere.\n'Sono cresciuto a Milano' = I grew up in Milan.",
     example:"A: Dove sei cresciuto?\nB: Sono cresciuto in campagna.",
     exampleSrc:"A: Where did you grow up?\nB: I grew up in the countryside.",
     funFact:"'Crescere' comes from Latin 'crescere' (to grow), which gave English 'crescent' (the growing moon), 'increase,' and 'crescendo' (growing louder in music). It uses essere because growing is a state change, not a voluntary action."},

    {type:"teach", trg:"morire", src:"to die", pos:"verb", gender:null,
     note:"Irregular past participle: morto. Uses essere.\n'E morto nel 1321' = He died in 1321.",
     example:"A: Dante e morto a Ravenna.\nB: Si, nel 1321, in esilio.",
     exampleSrc:"A: Dante died in Ravenna.\nB: Yes, in 1321, in exile.",
     funFact:"'Morire' uses essere because death is the ultimate state change. 'Morto' as an adjective means 'dead': 'stanco morto' (dead tired), 'Mar Morto' (Dead Sea). The expression 'morire dal ridere' (to die laughing) and 'morire di fame' (to die of hunger, meaning very hungry) are everyday hyperboles."},

    {type:"teach", trg:"nascere", src:"to be born", pos:"verb", gender:null,
     note:"Irregular past participle: nato. Uses essere.\n'Sono nato/a il 5 maggio' = I was born on May 5th.",
     example:"A: Dove sei nato?\nB: Sono nato a Napoli, ma vivo a Roma.",
     exampleSrc:"A: Where were you born?\nB: I was born in Naples, but I live in Rome.",
     funFact:"Birth city is central to Italian identity. 'Di dove sei?' (Where are you from?) is one of the first questions Italians ask. Your answer determines which regional stereotypes people apply. 'Sono nato a...' is information every Italian carries proudly."},

    {type:"teach", trg:"succedere", src:"to happen", pos:"verb", gender:null,
     note:"Irregular past participle: successo. Uses essere.\n'Cos'e successo?' = What happened? Impersonal.",
     example:"A: Cos'e successo ieri sera?\nB: Niente di speciale.",
     exampleSrc:"A: What happened last night?\nB: Nothing special.",
     funFact:"'Succedere' (to happen) always uses essere. It is almost always impersonal (third person): 'e successo' (it happened), 'sono successe molte cose' (many things happened). Remember: 'successo' the participle means 'happened,' while 'il successo' the noun means 'success.'"},

    {type:"teach", trg:"piacere", src:"to be pleasing / to like", pos:"verb", gender:null,
     note:"Irregular past participle: piaciuto. Uses essere.\n'Mi e piaciuto' = I liked it (it was pleasing to me).",
     example:"A: Ti e piaciuto il film?\nB: Si, mi e piaciuto molto!",
     exampleSrc:"A: Did you like the movie?\nB: Yes, I liked it a lot!",
     funFact:"'Piacere' works backwards from English: the thing liked is the subject. 'Mi e piaciuto il film' literally means 'the film was pleasing to me.' Plural things: 'Mi sono piaciuti i dolci' (the desserts were pleasing to me). This grammar structure is one of the trickiest for English speakers."},

    {type:"teach", trg:"bastare", src:"to be enough / to suffice", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'e bastato.'\n'Basta!' = Enough! / That is enough!",
     example:"A: Sono bastati due giorni per visitare Venezia.\nB: Solo due? Io ne vorrei dieci!",
     exampleSrc:"A: Two days were enough to visit Venice.\nB: Only two? I would want ten!",
     funFact:"'Basta!' on its own is one of Italian's most powerful words, meaning 'Enough!' or 'Stop!' Parents, teachers, and frustrated drivers use it constantly. As a verb, 'bastare' uses essere: 'E bastata un'ora' (One hour was enough). The subject agrees with the participle."},

    {type:"teach", trg:"sembrare", src:"to seem / to appear", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'e sembrato.'\n'Mi e sembrato strano' = It seemed strange to me.",
     example:"A: Come ti e sembrato il ristorante?\nB: Mi e sembrato ottimo!",
     exampleSrc:"A: How did the restaurant seem to you?\nB: It seemed excellent to me!",
     funFact:"'Sembrare' uses essere in the passato prossimo. It works like 'piacere' with an indirect object pronoun: 'mi e sembrato' (it seemed to me), 'ci e sembrato' (it seemed to us). 'Sembra che...' (It seems that...) triggers the subjunctive in the subordinate clause."},

    {type:"teach", trg:"durare", src:"to last", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'e durato.'\n'La riunione e durata due ore' = The meeting lasted two hours.",
     example:"A: Quanto e durato il concerto?\nB: E durato quasi tre ore!",
     exampleSrc:"A: How long did the concert last?\nB: It lasted almost three hours!",
     funFact:"'Durare' uses essere because lasting is a state, not an action. 'La guerra e durata cinque anni' (The war lasted five years). 'Duro/a' as an adjective means 'hard/tough.' 'Essere duro' means being strict or resilient. Italian proverb: 'Chi la dura la vince' (He who endures, wins)."},

    {type:"teach", trg:"costare", src:"to cost", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'e costato.'\n'Quanto e costato?' = How much did it cost?",
     example:"A: Quanto e costata la cena?\nB: E costata sessanta euro in totale.",
     exampleSrc:"A: How much did the dinner cost?\nB: It cost sixty euros in total.",
     funFact:"'Costare' uses essere in the passato prossimo. 'Quanto e costato?' is more natural than 'Quanto ha costato?' in standard Italian. The participle agrees with what cost: 'La giacca e costata 200 euro' (feminine agreement with 'giacca')."},

    {type:"teach", trg:"dispiacere", src:"to be sorry / to displease", pos:"verb", gender:null,
     note:"Like 'piacere' but negative. Uses essere.\n'Mi e dispiaciuto' = I was sorry (it displeased me).",
     example:"A: Mi e dispiaciuto non poter venire.\nB: Non preoccuparti, ci sara un'altra occasione.",
     exampleSrc:"A: I was sorry I could not come.\nB: Do not worry, there will be another occasion.",
     funFact:"'Dispiacere' is the negative mirror of 'piacere.' 'Mi dispiace' (I am sorry) is present tense. 'Mi e dispiaciuto' is past. Both follow the same backwards grammar: the thing that displeases is the subject. 'Mi dispiace molto' is one of the most common Italian apology phrases."},

    {type:"teach", trg:"mancare", src:"to be missing / to miss (someone)", pos:"verb", gender:null,
     note:"Regular -are verb. Uses essere: 'mi e mancato/a.'\n'Mi sei mancato/a' = I missed you.",
     example:"A: Mi sei mancata tanto!\nB: Anche tu mi sei mancato!",
     exampleSrc:"A: I missed you so much!\nB: I missed you too!",
     funFact:"'Mancare' works backwards like 'piacere': 'Mi manchi' literally means 'You are missing to me' (I miss you). In the past: 'Mi sei mancato/a' (You were missing to me = I missed you). The subject is the person missed, not the person who misses. This reversed structure confuses learners for months."},

    // Quiz steps
    {type:"mc", q:"Why does 'diventare' use essere?",
     opts:["It describes a movement from place to place","It is always used in passive voice only","It describes a change of state, not an action","It is an arbitrary exception with no logic"],
     ans:"It describes a change of state, not an action",
     hint:"Movement AND s...-c... verbs use essere. The subject undergoes a transformation rather than performing an a... on something."},

    {type:"fb", s:"Ti e {1} il film?",
     a:["piaciuto"],
     opts:["piaciuto","durato","costato","sembrato"],
     hint:"Did you like the movie? 'Piacere' works backwards: the film is the subject that was 'pleasing to you.'",
     sSrc:"Did you {1} the movie?"},

    {type:"match", pairs:[
      {trg:"diventare", src:"to become"},
      {trg:"nascere", src:"to be born"},
      {trg:"morire", src:"to die"},
      {trg:"crescere", src:"to grow up"},
      {trg:"succedere", src:"to happen"}
    ]},

    {type:"mc", q:"How do you say 'I missed you' in Italian (to a female)?",
     opts:["Ti ho mancata","Mi sei mancata","Ho mancato te","Ti mancavo"],
     ans:"Mi sei mancata",
     hint:"'Mancare' works backwards. YOU are the subject who was 'missing to me.' 'S...' (you are) + 'm...' (feminine agreement) because the subject is the woman who was missed."},

    {type:"fb", s:"Quanto e {1} la cena?",
     a:["costata"],
     opts:["costata","durata","piaciuta","sembrata"],
     hint:"How much did dinner cost? 'La cena' is feminine, so the participle takes the -a ending. 'Costare' uses essere.",
     sSrc:"How much did the dinner {1}?"},

    {type:"mc", q:"What are the two main categories of verbs that use essere?",
     opts:["Regular and irregular verbs","First and second conjugation verbs","Movement verbs and state-change verbs","Transitive and past tense verbs"],
     ans:"Movement verbs and state-change verbs",
     hint:"Andare, venire, partire (m...) AND diventare, nascere, morire (s... c...). Both categories describe changes the subject undergoes, not actions done to something."},

    {type:"fb", s:"E {1} quasi tre ore!",
     a:["durato"],
     opts:["durato","costato","piaciuto","sembrato"],
     hint:"The concert lasted that long. 'Durare' uses essere because lasting is a state, not an action.",
     sSrc:"It {1} almost three hours!"},

    {type:"mc", q:"What does 'Basta!' mean as an exclamation?",
     opts:["Beautiful!","Enough! / Stop!","Help!","Please!"],
     ans:"Enough! / Stop!",
     hint:"One of Italian's most powerful single words. Parents, teachers, and anyone who has had enough uses this constantly."}
  ]
};
export default BATCH3_U12_L2;
