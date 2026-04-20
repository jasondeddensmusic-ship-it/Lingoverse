// Batch 4 — Unit 11, Lesson 1: Time Expressions for the Past
const BATCH4_U11_L1 = {
  id:"itv2_u11l_b4_1", title:"Quando e successo?", icon:"\uD83D\uDD52", xp:15, board:true,
  steps:[
    {type:"intro", title:"Quando e successo?",
     desc:"Learn time expressions used with the passato prossimo to talk about past events.",
     goals:["Use time markers with past tense","Distinguish between yesterday, last week, ago","Tell stories about recent past events"]},

    {type:"teach", trg:"ieri", src:"yesterday", pos:"adv", gender:null,
     note:"The most common past time marker.\n'Ieri sera' = yesterday evening. 'Ieri mattina' = yesterday morning.",
     example:"A: Cosa hai fatto ieri?\nB: Ieri sono andato al cinema.",
     exampleSrc:"A: What did you do yesterday?\nB: Yesterday I went to the movies.",
     funFact:"'Ieri' comes from Latin 'heri.' In Italian, 'l'altro ieri' means 'the day before yesterday.' 'Ieri l'altro' is an alternative form used in some regions. Both are correct and commonly used."},

    {type:"teach", trg:"la settimana scorsa", src:"last week", pos:"noun", gender:"f",
     note:"'Scorso/scorsa' = last/past. Agrees with the noun it modifies.\n'Il mese scorso' = last month. 'L'anno scorso' = last year.",
     example:"A: La settimana scorsa sono stato a Milano.\nB: Per lavoro?",
     exampleSrc:"A: Last week I was in Milan.\nB: For work?",
     funFact:"'Scorso' comes from 'scorrere' (to flow/pass). Time 'flows past.' Italian has many beautiful metaphors for time: 'il tempo vola' (time flies), 'il tempo passa' (time passes), 'ammazzare il tempo' (to kill time)."},

    {type:"teach", trg:"fa", src:"ago", pos:"adv", gender:null,
     note:"Placed AFTER the time period: 'due giorni fa' = two days ago.\n'Un'ora fa' = an hour ago. Very common and essential.",
     example:"A: Quando hai chiamato?\nB: Due ore fa.",
     exampleSrc:"A: When did you call?\nB: Two hours ago.",
     funFact:"Italian 'fa' (ago) is placed after the time expression, opposite to English. 'Molto tempo fa' (a long time ago) opens Italian fairy tales, like 'long ago' in English. 'Poco fa' (a little while ago) describes very recent past."},

    {type:"teach", trg:"già", src:"already", pos:"adv", gender:null,
     note:"Usually placed between 'ho/sono' and the past participle.\n'Ho già mangiato' = I have already eaten.",
     example:"A: Vuoi mangiare?\nB: No, ho già mangiato.",
     exampleSrc:"A: Do you want to eat?\nB: No, I have already eaten.",
     funFact:"'Gia' placement matters: 'ho già fatto' (I have already done) vs 'hai fatto già?' (you've done it already? with surprise). Word order in Italian affects emphasis and nuance more than in English."},

    {type:"teach", trg:"ancora", src:"still / yet / again", pos:"adv", gender:null,
     note:"Triple meaning: 'ancora' = still, yet, again.\n'Non ho ancora finito' = I have not yet finished.",
     example:"A: Hai finito?\nB: No, non ho ancora finito.",
     exampleSrc:"A: Have you finished?\nB: No, I have not finished yet.",
     funFact:"'Ancora' has three lives: 'e ancora qui' (he is still here), 'non e ancora arrivato' (he has not arrived yet), 'vuoi ancora?' (do you want more/again?). Context determines meaning. This triple-duty word confuses many learners."},

    {type:"teach", trg:"appena", src:"just (now) / barely", pos:"adv", gender:null,
     note:"'Ho appena mangiato' = I have just eaten.\nPlaced between auxiliary and participle.",
     example:"A: Vuoi un caffè?\nB: No, ho appena preso un caffè.",
     exampleSrc:"A: Do you want a coffee?\nB: No, I have just had a coffee.",
     funFact:"'Appena' works like 'just' in English: 'sono appena arrivato' (I have just arrived). It also means 'barely' or 'as soon as': 'appena possibile' (as soon as possible). A small word with big flexibility."},

    {type:"teach", trg:"l'ultima volta", src:"the last time", pos:"noun", gender:"f",
     note:"Feminine. 'L'ultima volta che...' = the last time that...\n'Volta' = time (as in occurrence, not clock time).",
     example:"A: L'ultima volta che sono stato qui era inverno.\nB: Ora e tutto diverso!",
     exampleSrc:"A: The last time I was here it was winter.\nB: Now everything is different!",
     funFact:"'Volta' meaning 'time/occasion' is different from 'tempo' (time in general) and 'ora' (clock time). 'Una volta' (once), 'due volte' (twice), 'molte volte' (many times). Italian is precise about types of time."},

    {type:"teach", trg:"prima", src:"before / first", pos:"adv", gender:null,
     note:"'Prima di...' = before. 'Prima di mangiare' = before eating.\nAlso 'prima' = first (in sequence).",
     example:"A: Prima di uscire, chiudi la porta.\nB: Va bene!",
     exampleSrc:"A: Before going out, close the door.\nB: Okay!",
     funFact:"'Prima' + di + infinitive creates 'before doing' clauses. 'Prima o poi' (sooner or later) is a fatalistic Italian expression. 'Come prima, meglio di prima' (like before, better than before) is an optimistic saying about bouncing back."},

    {type:"teach", trg:"dopo", src:"after / later", pos:"adv", gender:null,
     note:"'Dopo la cena' = after dinner. 'A dopo!' = See you later!\n'Dopo di che' = after which.",
     example:"A: Cosa facciamo dopo pranzo?\nB: Dopo pranzo riposiamo.",
     exampleSrc:"A: What do we do after lunch?\nB: After lunch we rest.",
     funFact:"'A dopo!' is a very common Italian farewell meaning 'see you later.' 'Dopo' can be an adverb (later), a preposition (after), or part of the conjunction 'dopo che' (after). It is one of the most useful Italian time words."},

    {type:"teach", trg:"durante", src:"during", pos:"prep", gender:null,
     note:"Preposition. 'Durante la cena' = during dinner.\nFrom Latin 'durante' (lasting).",
     example:"A: Non parlare al telefono durante la cena!\nB: Scusa, era importante.",
     exampleSrc:"A: Don't talk on the phone during dinner!\nB: Sorry, it was important.",
     funFact:"'Durante' is formal. Colloquially, Italians often use 'mentre' (while) for the same concept but with a verb: 'mentre mangiavamo' (while we were eating). Using 'durante' sounds slightly more polished and written."},

    {type:"teach", trg:"succedere", src:"to happen / to occur", pos:"verb", gender:null,
     note:"Irregular. Past: e successo. 'Cos'e successo?' = What happened?\nTakes 'essere' in passato prossimo.",
     example:"A: Cos'e successo?\nB: Niente di grave, non ti preoccupare.",
     exampleSrc:"A: What happened?\nB: Nothing serious, don't worry.",
     funFact:"'Cos'e successo?' (what happened?) is one of the most common Italian questions. When something dramatic happens, Italians gather and ask this collectively. The past participle 'successo' is also the word for 'success,' creating occasional amusing ambiguity."},

    {type:"teach", trg:"ricordare", src:"to remember", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ricordo' = I remember. 'Non ricordo' = I don't remember.\n'Ricordarsi' (reflexive) is equally common.",
     example:"A: Ti ricordi quella vacanza?\nB: Certo, come potrei dimenticare?",
     exampleSrc:"A: Do you remember that vacation?\nB: Of course, how could I forget?",
     funFact:"'Ricordare' and 'ricordarsi' are both correct and interchangeable. 'Ricordo bene' (I remember well) and 'mi ricordo bene' (I remember well) mean the same thing. Italian sometimes offers two paths to the same meaning."},

    {type:"teach", trg:"dimenticare", src:"to forget", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ho dimenticato' = I forgot.\n'Dimenticarsi' (reflexive) is equally common.",
     example:"A: Ho dimenticato le chiavi a casa!\nB: Di nuovo? Sei sempre così!",
     exampleSrc:"A: I forgot the keys at home!\nB: Again? You are always like this!",
     funFact:"'Non dimenticare!' (don't forget!) and 'non ti dimenticare!' are both common. Italian has a philosophical expression: 'perdonare ma non dimenticare' (forgive but don't forget). Memory and forgetting carry emotional weight in Italian culture."},

    {type:"teach", trg:"raccontare", src:"to tell / to narrate", pos:"verb", gender:null,
     note:"Regular -are verb. 'Raccontami!' = Tell me (about it)!\n'Un racconto' = a story/tale.",
     example:"A: Raccontami della tua vacanza!\nB: E stata fantastica! Allora...",
     exampleSrc:"A: Tell me about your vacation!\nB: It was fantastic! So...",
     funFact:"Italians are natural storytellers. 'Raccontare' is central to Italian social life: sharing meal stories, travel adventures, and family legends. 'Raccontami tutto!' (tell me everything!) is an invitation to narrate in detail."},

    {type:"teach", trg:"l'esperienza", src:"the experience", pos:"noun", gender:"f",
     note:"Feminine. Plural: le esperienze.\n'Un'esperienza indimenticabile' = an unforgettable experience.",
     example:"A: E stata un'esperienza bellissima.\nB: Che fortuna!",
     exampleSrc:"A: It was a beautiful experience.\nB: How lucky!",
     funFact:"Italian culture deeply values experiences over possessions. 'Fare esperienze' (to have experiences) is considered more valuable than accumulating things. This philosophy aligns with the Italian love of travel, food, and social connection."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'two days ago' in italiano?",
     opts:["Due giorni fa","Fa due giorni","Due giorni prima","Due giorni dopo"],
     ans:"Due giorni fa",
     hint:"In Italian, 'fa' (ago) comes after the time expression, not before."},

    {type:"fb", s:"Avete {1} deciso dove andare in vacanza?",
     a:["già"], opts:["già","ancora","appena","mai"],
     hint:"Placed between the auxiliary and participle. Asks if a decision was made before now.",
     sSrc:"Have you {1} decided where to go on vacation?"},

    {type:"match", pairs:[
      {trg:"ieri", src:"yesterday"},
      {trg:"fa", src:"ago"},
      {trg:"prima", src:"before"},
      {trg:"dopo", src:"after"},
      {trg:"durante", src:"during"}
    ]},

    {type:"mc", q:"Cosa significa 'ancora' in 'non ho ancora finito'?",
     opts:["Yet","Still","Again","Always"],
     ans:"Yet",
     hint:"With 'non...ancora,' the word means something has not happened y...."},

    {type:"fb", s:"Cos'e {1}? Perche sei triste?",
     a:["successo"], opts:["successo","andato","venuto","fatto"],
     hint:"You are asking 'what happened?' using the past participle of succedere.",
     sSrc:"What {1}? Why are you sad?"},

    {type:"mc", q:"Qual e la differenza tra 'ricordare' e 'ricordarsi'?",
     opts:["They mean the same thing. Both forms are correct","Ricordare is formal; ricordarsi is informal","Ricordarsi is past tense","Only ricordare is correct"],
     ans:"They mean the same thing. Both forms are correct",
     hint:"Italian sometimes offers two parallel f... with identical meaning."},

    {type:"fb", s:"{1} tutto della tua vacanza!",
     a:["Raccontami"], opts:["Raccontami","Dimenticami","Ricordami","Chiamami"],
     hint:"You want your friend to narrate their entire vacation experience.",
     sSrc:"{1} everything about your vacation!"},

    {type:"mc", q:"Cosa significa 'poco fa'?",
     opts:["A little while ago","A little later","A little bit","A few days"],
     ans:"A little while ago",
     hint:"'Poco' means 'a l...' and 'fa' means 'a...' in time expressions."}
  ,{type:"match",pairs:[{trg:"la settimana scorsa",src:"last week"},{trg:"ancora",src:"still / yet / again"},{trg:"appena",src:"just (now) / barely"},{trg:"succedere",src:"to happen / to occur"},{trg:"dimenticare",src:"to forget"},{trg:"raccontare",src:"to tell / to narrate"}]},{type:"mc",q:"How do you say \"last time\" in Italian?",opts:["la finestra","l'ultima volta","il tavolo","la bicicletta"],ans:"l'ultima volta",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"experience\" in Italian?",opts:["la finestra","l'esperienza","il tavolo","la bicicletta"],ans:"l'esperienza",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH4_U11_L1;
