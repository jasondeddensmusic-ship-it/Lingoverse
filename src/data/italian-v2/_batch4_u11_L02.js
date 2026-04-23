// Batch 4. Unit 11, Lesson 2: Common Irregular Past Participles
const BATCH4_U11_L2 = {
  id:"itv2_u11l_b4_2", title:"Participi irregolari", icon:"\uD83D\uDD11", xp:15, board:true,
  steps:[
    {type:"intro", title:"Participi irregolari",
     desc:"Master the most common irregular past participles that you need for everyday conversation.",
     goals:["Learn 15 essential irregular past participles","Use them naturally in passato prossimo","Recognize patterns among irregular verbs"]},

    {type:"teach", trg:"fare / fatto", src:"to do, to make / done, made", pos:"verb", gender:null,
     note:"Highly irregular. 'Ho fatto' = I did/made.\nOne of the most used Italian verbs.",
     example:"A: Cosa hai fatto oggi?\nB: Ho fatto la spesa e ho cucinato.",
     exampleSrc:"A: What did you do today?\nB: I did the shopping and cooked.",
     funFact:"'Fare' is one of Italian's most versatile verbs: fare la spesa (grocery shop), fare colazione (have breakfast), fare una passeggiata (take a walk), fare un regalo (give a gift). The past participle 'fatto' appears constantly."},

    {type:"teach", trg:"dire / detto", src:"to say, to tell / said, told", pos:"verb", gender:null,
     note:"Irregular past participle: detto. 'Ha detto' = he/she said.\nFrom Latin 'dicere.'",
     example:"A: Cosa ha detto il dottore?\nB: Ha detto di riposare.",
     exampleSrc:"A: What did the doctor say?\nB: He said to rest.",
     funFact:"'Detto fatto!' (said and done!) means something was accomplished instantly. 'Come si dice...?' (how do you say...?) is the learner's best friend. 'Dire' is from Latin 'dicere,' giving English 'diction,' 'dictionary,' and 'predict.'"},

    {type:"teach", trg:"vedere / visto", src:"to see / seen", pos:"verb", gender:null,
     note:"Irregular past participle: visto. 'Ho visto' = I saw/have seen.\nAlternative participle: veduto (literary).",
     example:"A: Hai visto il film?\nB: Si, l'ho visto ieri sera.",
     exampleSrc:"A: Have you seen the movie?\nB: Yes, I saw it last night.",
     funFact:"Both 'visto' and 'veduto' are correct past participles, but 'visto' is far more common in speech. 'Veduto' appears in formal writing. 'Arrivederci' literally contains 'rivederci' (to see each other again), from the same verb."},

    {type:"teach", trg:"leggere / letto", src:"to read / read", pos:"verb", gender:null,
     note:"Irregular past participle: letto. 'Ho letto' = I read (past).\nDon't confuse with 'il letto' (the bed)!",
     example:"A: Hai letto il libro?\nB: Si, l'ho letto in due giorni.",
     exampleSrc:"A: Have you read the book?\nB: Yes, I read it in two days.",
     funFact:"'Letto' the past participle and 'letto' the noun (bed) are identical in form: 'ho letto a letto' (I read in bed) is grammatically perfect but sounds comical. Italian is full of these homophone coincidences."},

    {type:"teach", trg:"scrivere / scritto", src:"to write / written", pos:"verb", gender:null,
     note:"Irregular past participle: scritto. 'Ho scritto' = I wrote.\nFrom Latin 'scribere.'",
     example:"A: Hai scritto l'email?\nB: Si, l'ho scritta stamattina.",
     exampleSrc:"A: Did you write the email?\nB: Yes, I wrote it this morning.",
     funFact:"Note: with direct object pronouns, the past participle agrees: 'l'ho scritta' (I wrote it, feminine because 'email' is feminine). This agreement rule catches many learners but sounds natural to Italians."},

    {type:"teach", trg:"prendere / preso", src:"to take / taken", pos:"verb", gender:null,
     note:"Irregular past participle: preso. 'Ho preso' = I took.\n'Prendere un caffè' = to have a coffee.",
     example:"A: Hai preso il treno?\nB: No, ho preso l'autobus.",
     exampleSrc:"A: Did you take the train?\nB: No, I took the bus.",
     funFact:"'Prendere' is incredibly versatile: prendere un caffè (have a coffee), prendere il sole (sunbathe), prendere una decisione (make a decision), prendere freddo (catch cold). The irregular 'preso' must simply be memorized."},

    {type:"teach", trg:"mettere / messo", src:"to put / put", pos:"verb", gender:null,
     note:"Irregular past participle: messo. 'Ho messo' = I put.\n'Mettersi' = to put on (clothes), to start.",
     example:"A: Dove hai messo le chiavi?\nB: Le ho messe sul tavolo.",
     exampleSrc:"A: Where did you put the keys?\nB: I put them on the table.",
     funFact:"'Mettere' spawns many compounds: mettersi (put on, start), permettere (allow), promettere (promise), ammettere (admit), commettere (commit). Learning 'mettere' unlocks a whole family of verbs."},

    {type:"teach", trg:"aprire / aperto", src:"to open / opened, open", pos:"verb", gender:null,
     note:"Irregular past participle: aperto. 'Ho aperto' = I opened.\n'Aperto' as adjective: 'il negozio e aperto' = the shop is open.",
     example:"A: Hai aperto la finestra?\nB: Si, faceva caldo.",
     exampleSrc:"A: Did you open the window?\nB: Yes, it was hot.",
     funFact:"'Aperto' works as both past participle and adjective (open). 'All'aperto' means 'outdoors' (in the open). The opposite 'chiuso' (closed) comes from 'chiudere.' Both are essential for navigating Italian shops and restaurants."},

    {type:"teach", trg:"chiudere / chiuso", src:"to close / closed", pos:"verb", gender:null,
     note:"Irregular past participle: chiuso. 'Ho chiuso' = I closed.\n'Chiuso' as adjective: 'chiuso per ferie' = closed for holidays.",
     example:"A: Il museo e chiuso oggi.\nB: Peccato! Torniamo domani.",
     exampleSrc:"A: The museum is closed today.\nB: Too bad! Let's come back tomorrow.",
     funFact:"'Chiuso per ferie' (closed for holidays) is a sign you see everywhere in August. 'Chiusura' (closure/closing time) is important to know: Italian shops often close for lunch (1-3:30 PM) and Sundays. Planning around 'chiuso' is essential."},

    {type:"teach", trg:"perdere / perso", src:"to lose / lost", pos:"verb", gender:null,
     note:"Irregular past participle: perso (also: perduto, literary).\n'Ho perso' = I lost. 'Mi sono perso' = I got lost.",
     example:"A: Ho perso il portafoglio!\nB: Dove l'hai visto l'ultima volta?",
     exampleSrc:"A: I lost my wallet!\nB: Where did you see it last?",
     funFact:"'Perdere' covers losing objects, losing games, losing weight, and losing time. 'Perdere tempo' (to waste time) is what Italians accuse slow bureaucracy of causing. 'Perso' and the literary 'perduto' are both correct."},

    {type:"teach", trg:"decidere / deciso", src:"to decide / decided", pos:"verb", gender:null,
     note:"Irregular past participle: deciso. 'Ho deciso' = I decided.\n'Deciso' also means 'determined' as an adjective.",
     example:"A: Hai deciso cosa fare?\nB: Si, ho deciso di partire domani.",
     exampleSrc:"A: Have you decided what to do?\nB: Yes, I decided to leave tomorrow.",
     funFact:"'Deciso' as an adjective means 'determined, resolute.' 'E una persona decisa' (she is a determined person). The noun 'la decisione' (decision) follows the pattern of many Italian -ione nouns derived from Latin."},

    {type:"teach", trg:"spendere / speso", src:"to spend (money) / spent", pos:"verb", gender:null,
     note:"Irregular past participle: speso. 'Ho speso troppo' = I spent too much.\nOnly for money, not time.",
     example:"A: Quanto hai speso?\nB: Ho speso cento euro.",
     exampleSrc:"A: How much did you spend?\nB: I spent a hundred euros.",
     funFact:"'Spendere' is only for money. For spending time, use 'passare il tempo.' This distinction does not exist in English. 'La spesa' (grocery shopping) comes from the same root: 'fare la spesa' (to do the grocery shopping)."},

    {type:"teach", trg:"rispondere / risposto", src:"to answer / answered", pos:"verb", gender:null,
     note:"Irregular past participle: risposto. 'Ha risposto' = he/she answered.\nTakes 'avere' in passato prossimo.",
     example:"A: Hai risposto all'email?\nB: Non ancora, rispondo adesso.",
     exampleSrc:"A: Did you answer the email?\nB: Not yet, I'll answer now.",
     funFact:"'Rispondere' takes the preposition 'a': 'rispondere a una domanda' (answer a question), 'rispondere al telefono' (answer the phone). The noun 'la risposta' (the answer) is one of the first words Italian learners encounter."},

    {type:"teach", trg:"scegliere / scelto", src:"to choose / chosen", pos:"verb", gender:null,
     note:"Irregular past participle: scelto. 'Ho scelto' = I chose.\nAlso irregular in present: scelgo, scegli, sceglie.",
     example:"A: Hai scelto il ristorante?\nB: Si, ho scelto la trattoria in centro.",
     exampleSrc:"A: Have you chosen the restaurant?\nB: Yes, I chose the trattoria downtown.",
     funFact:"'Scegliere' is doubly irregular: both the present (scelgo) and past (scelto) are unexpected. 'La scelta' (the choice) is the noun. 'L'imbarazzo della scelta' (the embarrassment of choice) describes having too many good options."},

    {type:"teach", trg:"conoscere / conosciuto", src:"to know (person) / known, met", pos:"verb", gender:null,
     note:"Regular-pattern past participle: conosciuto. 'Ho conosciuto' = I met (for the first time).\nDifferent from 'sapere' (to know a fact).",
     example:"A: Dove hai conosciuto tua moglie?\nB: L'ho conosciuta all'università.",
     exampleSrc:"A: Where did you meet your wife?\nB: I met her at university.",
     funFact:"In passato prossimo, 'conoscere' means 'to meet for the first time,' not 'to know.' 'L'ho conosciuto ieri' = I met him yesterday (not: I knew him yesterday). This meaning shift in the past tense is a key Italian concept."},

    // Quiz steps
    {type:"mc", q:"Qual e il participio passato di 'fare'?",
     opts:["Fatto","Fato","Faciuto","Fesso"],
     ans:"Fatto",
     hint:"This very common irregular participle means 'done' or 'made.'"},

    {type:"fb", s:"Hai {1} il libro? Era interessante?",
     a:["letto"], opts:["letto","leggito","legguto","lettato"],
     hint:"The past participle of 'leggere' is irregular and looks like another word.",
     sSrc:"Have you {1} the book? Was it interesting?"},

    {type:"match", pairs:[
      {trg:"fatto", src:"done/made"},
      {trg:"detto", src:"said"},
      {trg:"visto", src:"seen"},
      {trg:"scritto", src:"written"},
      {trg:"preso", src:"taken"}
    ,{trg:"conoscere / conosciuto",src:"to know (person) / known, met"}]},

    {type:"mc", q:"Cosa significa 'ho conosciuto Maria' al passato prossimo?",
     opts:["I called Maria","I met Maria (for the first time)","I knew Maria","I recognized Maria"],
     ans:"I met Maria (for the first time)",
     hint:"In the past tense, 'conoscere' shifts meaning to 'meet for the f... t....'"},

    {type:"fb", s:"Ho {1} le chiavi sul tavolo, le hai viste?",
     a:["messo"], opts:["messo","mettuto","mettito","mettato"],
     hint:"The past participle of 'mettere' (to put) is irregular.",
     sSrc:"I {1} the keys on the table, have you seen them?"},

    {type:"mc", q:"Perche non si dice 'ho speso il weekend'?",
     opts:["The past participle is wrong","Weekend is not Italian","Spendere is only for money. For time, use passare","Spendere is too formal"],
     ans:"Spendere is only for money. For time, use passare",
     hint:"Italian separates spending m... from spending t... into different verbs."},

    {type:"fb", s:"Hai {1} cosa mangiare stasera?",
     a:["deciso"], opts:["deciso","deciduto","decidito","decizionato"],
     hint:"The past participle of 'decidere' is irregular, ending in -so.",
     sSrc:"Have you {1} what to eat tonight?"},

    {type:"mc", q:"Cosa significa 'detto fatto'?",
     opts:["He said something","The fact was told","A famous saying","Said and done (accomplished instantly)"],
     ans:"Said and done (accomplished instantly)",
     hint:"This expression combines two past participles to mean quick accomplishment."}
  ,{type:"match",pairs:[{trg:"aprire / aperto",src:"to open / opened, open"},{trg:"chiudere / chiuso",src:"to close / closed"},{trg:"perdere / perso",src:"to lose / lost"},{trg:"spendere / speso",src:"to spend (money) / spent"},{trg:"rispondere / risposto",src:"to answer / answered"},{trg:"scegliere / scelto",src:"to choose / chosen"}]}]
};
export default BATCH4_U11_L2;
