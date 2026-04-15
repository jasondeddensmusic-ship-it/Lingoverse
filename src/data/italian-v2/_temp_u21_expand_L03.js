// Unit 21 Expansion. Lesson 6: Il condizionale passato
const LESSON_6 = {
  id:"itv2_u21l6", title:"Il condizionale passato", icon:"⏳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il condizionale passato",
     desc:"Learn the past conditional to express what would have happened, unfulfilled wishes, and regrets. This tense completes your conditional toolkit for discussing past hypotheticals.",
     goals:["Form the past conditional with avere and essere","Express regrets about past actions","Discuss what would have happened differently"]},

    {type:"teach", trg:"avrei fatto", src:"I would have done", pos:"verb", gender:null,
     note:"Past conditional: conditional of 'avere' + past participle.\n'Avrei fatto diversamente' = I would have done differently.",
     example:"A: Cosa avresti fatto al mio posto?\nB: Avrei fatto la stessa cosa.",
     exampleSrc:"A: What would you have done in my place?\nB: I would have done the same thing.",
     funFact:"The past conditional is formed with the conditional of 'avere' or 'essere' plus the past participle. It works just like the passato prossimo, but replaces the present with the conditional: ho fatto > avrei fatto. The choice between 'avere' and 'essere' follows the same rules as the passato prossimo."},

    {type:"teach", trg:"sarei andato", src:"I would have gone", pos:"verb", gender:null,
     note:"Past conditional with 'essere': conditional of 'essere' + past participle.\nAgreement: sarei andato (m), sarei andata (f).",
     example:"A: Sarei andato alla festa, ma ero malato.\nB: Peccato! Ti sei perso una bella serata.",
     exampleSrc:"A: I would have gone to the party, but I was sick.\nB: Too bad! You missed a nice evening.",
     funFact:"Verbs that use 'essere' in the passato prossimo also use 'essere' in the past conditional: sono andato > sarei andato. The past participle must agree in gender and number: 'sarei andata' (feminine), 'saremmo andati' (masculine plural), 'saremmo andate' (feminine plural)."},

    {type:"teach", trg:"avrei dovuto", src:"I should have / I ought to have", pos:"verb", gender:null,
     note:"Past conditional of 'dovere' + infinitive.\n'Avrei dovuto studiare' = I should have studied.",
     example:"A: Avrei dovuto ascoltarti.\nB: Non importa, l'importante e imparare.",
     exampleSrc:"A: I should have listened to you.\nB: It does not matter, the important thing is to learn.",
     funFact:"'Avrei dovuto' expresses regret about a missed obligation. It is one of the most emotionally loaded structures in Italian. 'Avrei dovuto dire qualcosa' (I should have said something) is the classic lament. Combined with 'non,' it becomes relief: 'Non avrei dovuto preoccuparmi' (I should not have worried)."},

    {type:"teach", trg:"avrei potuto", src:"I could have", pos:"verb", gender:null,
     note:"Past conditional of 'potere' + infinitive.\n'Avrei potuto aiutarti' = I could have helped you.",
     example:"A: Avrei potuto evitare l'errore.\nB: Non preoccuparti, capita a tutti.",
     exampleSrc:"A: I could have avoided the mistake.\nB: Do not worry, it happens to everyone.",
     funFact:"'Avrei potuto' describes a missed opportunity or unrealized possibility. 'Avrei potuto essere un musicista' (I could have been a musician) echoes the famous 'I could have been a contender.' Italians use this structure when reflecting on life choices with gentle melancholy."},

    {type:"teach", trg:"avrei voluto", src:"I would have liked / I would have wanted", pos:"verb", gender:null,
     note:"Past conditional of 'volere' + infinitive.\n'Avrei voluto viaggiare di piu' = I would have liked to travel more.",
     example:"A: Avrei voluto conoscerti prima.\nB: Meglio tardi che mai!",
     exampleSrc:"A: I would have liked to meet you earlier.\nB: Better late than never!",
     funFact:"'Avrei voluto' expresses an unfulfilled desire from the past. It is gentler than 'volevo' (I wanted) because the conditional adds wistfulness. 'Avrei voluto dire...' (I would have liked to say...) is a common opening for speeches, toasts, and emotional moments."},

    {type:"teach", trg:"avrei preferito", src:"I would have preferred", pos:"verb", gender:null,
     note:"Past conditional of 'preferire.' 'Avrei preferito restare' = I would have preferred to stay.\nExpresses a past preference that was not fulfilled.",
     example:"A: Avrei preferito un ristorante piu tranquillo.\nB: La prossima volta scegliamo noi.",
     exampleSrc:"A: I would have preferred a quieter restaurant.\nB: Next time we choose.",
     funFact:"'Avrei preferito' is diplomatic criticism about a past choice. It is softer than 'Non mi e piaciuto' (I did not like it). In Italian social culture, expressing dissatisfaction through the past conditional maintains harmony: you are saying what you would have wanted, not directly complaining about what happened."},

    {type:"teach", trg:"non avrei mai pensato", src:"I would never have thought", pos:"verb", gender:null,
     note:"Past conditional with 'mai' (never).\n'Non avrei mai pensato che...' = I would never have thought that...",
     example:"A: Non avrei mai pensato di vivere in Italia.\nB: La vita riserva sorprese!",
     exampleSrc:"A: I would never have thought I would live in Italy.\nB: Life holds surprises!",
     funFact:"'Non avrei mai...' (I would never have...) expresses astonishment at how life unfolded. It combines the past conditional with 'mai' for emphasis. 'Non avrei mai immaginato' (I would never have imagined) and 'Non ci avrei mai creduto' (I would never have believed it) are variations of the same wonder."},

    {type:"teach", trg:"sarebbe stato meglio", src:"it would have been better", pos:"verb", gender:null,
     note:"Past conditional of 'essere' + 'meglio.'\n'Sarebbe stato meglio aspettare' = It would have been better to wait.",
     example:"A: Sarebbe stato meglio partire prima.\nB: Hai ragione, adesso siamo in ritardo.",
     exampleSrc:"A: It would have been better to leave earlier.\nB: You are right, now we are late.",
     funFact:"'Sarebbe stato meglio' is the past version of 'sarebbe meglio.' It evaluates past decisions with hindsight. Italian has a proverb: 'Del senno di poi son piene le fosse' (Graves are full of hindsight wisdom). Recognizing that 'sarebbe stato meglio' is easy; acting on foresight is the challenge."},

    {type:"tip", title:"Forming the Past Conditional",
     text:"Past conditional = conditional of avere/essere + past participle\n\navrei + past participle (most verbs):\navrei parlato, avrei scritto, avrei dormito\n\nsarei + past participle (movement, state verbs):\nsarei andato/a, sarei partito/a, sarei stato/a\n\nModals: avrei dovuto, avrei potuto, avrei voluto + infinitive\n\nGender agreement with 'essere': sarei andata (f), saremmo andati (m.pl.)",
     deepDive:{title:"Past Conditional in Reported Speech",
      text:"Italian uses the past conditional for 'future in the past': 'Ha detto che sarebbe venuto' (He said he would come). English uses 'would' similarly. This is NOT a hypothetical use. It reports what someone said they would do. The past conditional here replaces the conditional present in indirect speech."}},

    // Quiz steps
    {type:"mc", q:"How is the past conditional formed?",
     opts:["Imperfect + past participle","Conditional of avere/essere + past participle","Future + past participle","Present + conditional ending"],
     ans:"Conditional of avere/essere + past participle",
     hint:"Like the passato prossimo but with the c... as the auxiliary. The choice between a... and e... follows the same rules."},

    {type:"fb", s:"{1} dovuto ascoltarti.",
     a:["Avrei"],
     opts:["Avrei","Ho","Avevo","Avro"],
     hint:"I should have listened to you. The past conditional of 'dovere' expresses regret about a missed obligation.",
     sSrc:"I {1} have listened to you."},

    {type:"match", pairs:[
      {trg:"avrei fatto", src:"I would have done"},
      {trg:"sarei andato", src:"I would have gone"},
      {trg:"avrei dovuto", src:"I should have"},
      {trg:"avrei potuto", src:"I could have"},
      {trg:"avrei voluto", src:"I would have wanted"}
    ]},

    {type:"mc", q:"Why does 'sarei andato' need gender agreement?",
     opts:["All Italian verbs require gender agreement always","Only because 'andare' is irregular","Verbs using 'essere' agree the past participle with the subject","It is an exception with no grammatical reason"],
     ans:"Verbs using 'essere' agree the past participle with the subject",
     hint:"Same rule as passato prossimo. 'Sarei andata' (f), 'saremmo andati' (m.pl.), 'saremmo andate' (f.pl.)."},

    {type:"fb", s:"{1} stato meglio partire prima.",
     a:["Sarebbe"],
     opts:["Sarebbe","E","Sara","Sia"],
     hint:"Looking back, it would have been better. Past conditional of 'essere' for an impersonal hindsight judgment.",
     sSrc:"It {1} have been better to leave earlier."},

    {type:"mc", q:"What does the past conditional express in 'Ha detto che sarebbe venuto'?",
     opts:["A hypothetical unrealized condition","An impossible past scenario","Future in the past (reported speech)","A polite present request"],
     ans:"Future in the past (reported speech)",
     hint:"He said he w... come. This is not hypothetical but reporting what someone said about a f... action. The conditional replaces the f... in indirect s...."},

    {type:"fb", s:"Non {1} mai pensato di vivere in Italia.",
     a:["avrei"],
     opts:["avrei","ho","avevo","abbia"],
     hint:"You would never have imagined it. Past conditional with 'mai' (never) for expressing amazement at life's surprises.",
     sSrc:"I {1} never have thought I would live in Italy."},

    {type:"mc", q:"What is the difference between 'avrei preferito' and 'non mi e piaciuto'?",
     opts:["They mean exactly the same thing in all contexts","'Avrei preferito' is diplomatic; 'non mi e piaciuto' is direct criticism","'Avrei preferito' is rude; the other is polite","One is present tense; the other is future"],
     ans:"'Avrei preferito' is diplomatic; 'non mi e piaciuto' is direct criticism",
     hint:"The past conditional softens dissatisfaction by framing it as an unfulfilled wish rather than a complaint."}
  ]
};
export default LESSON_6;
