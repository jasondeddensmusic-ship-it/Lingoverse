// Batch 3 — Unit 11, Lesson 2: Raccontare il passato (Narrating the Past)
const BATCH3_U11_L2 = {
  id:"itv2_u11l_b3_2", title:"Raccontare il passato", icon:"\uD83D\uDCD6", xp:15, board:true,
  steps:[
    {type:"intro", title:"Raccontare il passato",
     desc:"Practice combining passato prossimo verbs with time expressions and connectors to tell stories about the past naturally and fluently.",
     goals:["Narrate a sequence of past events","Use connectors to link past actions","Tell short stories in the passato prossimo"]},

    {type:"teach", trg:"prima", src:"first / before", pos:"adv", gender:null,
     note:"Adverb. 'Prima di tutto' = first of all.\n'Prima di mangiare' = before eating.",
     example:"A: Cosa hai fatto prima?\nB: Prima ho studiato, poi sono uscito.",
     exampleSrc:"A: What did you do first?\nB: First I studied, then I went out.",
     funFact:"'Prima' comes from Latin 'primus' (first). In storytelling, 'prima...poi...infine' (first...then...finally) is the basic narrative structure. Italian loves sequencing words to organize stories clearly."},

    {type:"teach", trg:"poi", src:"then / afterward", pos:"adv", gender:null,
     note:"Adverb. From Latin 'post' (after) > 'poi.'\n'E poi?' = And then? (to prompt continuation).",
     example:"A: Ho fatto colazione, poi sono andato al lavoro.\nB: E poi?",
     exampleSrc:"A: I had breakfast, then I went to work.\nB: And then?",
     funFact:"'Poi' is the essential storytelling connector. 'E poi?' (And then?) is how Italian listeners show interest and prompt the speaker to continue. Without 'poi,' stories feel disjointed. It is the verbal glue of Italian narrative."},

    {type:"teach", trg:"infine", src:"finally / in the end", pos:"adv", gender:null,
     note:"Adverb. Compound: 'in' + 'fine' (in the end).\n'Infine siamo arrivati' = Finally we arrived.",
     example:"A: Infine, abbiamo trovato il ristorante.\nB: Dopo quanto tempo?",
     exampleSrc:"A: Finally, we found the restaurant.\nB: After how long?",
     funFact:"'Infine' signals the conclusion of a narrative. Italian has many words for 'finally': infine (neutral), finalmente (with relief), alla fine (at the end). 'Finalmente!' as an exclamation expresses great relief: 'Finalmente sei arrivato!' (You finally arrived!)."},

    {type:"teach", trg:"mentre", src:"while / whereas", pos:"conj", gender:null,
     note:"Conjunction. From Latin 'dum interim' (during that time).\n'Mentre mangiavo...' = While I was eating...",
     example:"A: Mentre camminavo, ho visto un incidente.\nB: Era grave?",
     exampleSrc:"A: While I was walking, I saw an accident.\nB: Was it serious?",
     funFact:"'Mentre' often triggers the imperfect tense for the background action: 'Mentre dormivo (imperfect), ha suonato il telefono (passato prossimo).' This mirrors the English pattern 'While I was sleeping, the phone rang.' The contrast between background and foreground action is central to Italian storytelling."},

    {type:"teach", trg:"improvvisamente", src:"suddenly", pos:"adv", gender:null,
     note:"Adverb. From 'improvviso' (sudden, unexpected).\n'Improvvisamente e iniziato a piovere' = Suddenly it started raining.",
     example:"A: Improvvisamente, ho sentito un rumore.\nB: Che tipo di rumore?",
     exampleSrc:"A: Suddenly, I heard a noise.\nB: What kind of noise?",
     funFact:"'Improvvisamente' adds drama to any story. From 'improvviso' (unforeseen), related to 'improvvisare' (to improvise). Italian storytelling loves dramatic turns. Placing 'improvvisamente' at the start of a sentence creates maximum impact."},

    {type:"teach", trg:"dopo", src:"after / afterward", pos:"prep", gender:null,
     note:"Preposition/adverb. 'Dopo pranzo' = after lunch.\n'Dopo di che' = after that.",
     example:"A: Dopo la cena, siamo andati a passeggiare.\nB: Che bella serata!",
     exampleSrc:"A: After dinner, we went for a walk.\nB: What a lovely evening!",
     funFact:"'Dopo' comes from Latin 'de post' (from after). It works as both a preposition ('dopo pranzo') and an adverb ('poco dopo' = shortly after). 'Il dopo' as a noun means 'the aftermath.' 'Dopodomani' (after-tomorrow) means 'the day after tomorrow.'"},

    {type:"teach", trg:"raccogliere", src:"to pick up / to collect", pos:"verb", gender:null,
     note:"Irregular -ere verb. Past participle: raccolto.\n'Ho raccolto' = I picked up/collected.",
     example:"A: Ho raccolto i bambini a scuola.\nB: A che ora?",
     exampleSrc:"A: I picked up the children from school.\nB: At what time?",
     funFact:"'Raccogliere' means both physically picking something up and collecting (ideas, people). 'Raccogliere le idee' means 'to gather one's thoughts.' The irregular participle 'raccolto' also means 'harvest' as a noun: 'il raccolto' (the crop harvest)."},

    {type:"teach", trg:"scoprire", src:"to discover / to find out", pos:"verb", gender:null,
     note:"Irregular -ire verb. Past participle: scoperto.\n'Ho scoperto' = I discovered. From Latin 'dis-cooperire.'",
     example:"A: Ho scoperto un ristorante fantastico.\nB: Dove si trova?",
     exampleSrc:"A: I discovered a fantastic restaurant.\nB: Where is it?",
     funFact:"'Scoprire' literally means 'to uncover' (s- + coprire). Its past participle 'scoperto' is also an adjective: 'all'aperto/scoperto' (in the open air). 'Scoprire l'acqua calda' (to discover hot water) is an idiom meaning to state the obvious."},

    {type:"teach", trg:"raccontare", src:"to tell / to narrate", pos:"verb", gender:null,
     note:"Regular -are verb. 'Raccontare una storia' = to tell a story.\nFrom 're-' (again) + 'contare' (to count/tell).",
     example:"A: Raccontami cosa e successo!\nB: Va bene, siediti. E una lunga storia.",
     exampleSrc:"A: Tell me what happened!\nB: All right, sit down. It is a long story.",
     funFact:"'Raccontare' combines 're-' (again) + 'contare' (to count), because stories were originally 'recounted.' 'Racconto' means both a story and a short story (literary form). 'Raccontami!' (Tell me!) is how Italians eagerly request gossip or news."},

    {type:"teach", trg:"dimenticare", src:"to forget", pos:"verb", gender:null,
     note:"Regular -are verb. Also reflexive: dimenticarsi.\n'Ho dimenticato' = I forgot.",
     example:"A: Ho dimenticato il portafoglio a casa!\nB: Non preoccuparti, pago io.",
     exampleSrc:"A: I forgot my wallet at home!\nB: Do not worry, I will pay.",
     funFact:"'Dimenticare' comes from 'di-' (away from) + 'mente' (mind), literally 'to put out of mind.' The reflexive 'dimenticarsi' is more common in spoken Italian. 'Scordare/scordarsi' is a more informal synonym, from 'cuore' (heart): to lose from the heart."},

    {type:"teach", trg:"ricordare", src:"to remember", pos:"verb", gender:null,
     note:"Regular -are verb. Also reflexive: ricordarsi.\n'Mi ricordo' = I remember. From Latin 'recordari.'",
     example:"A: Ti ricordi la vacanza in Sardegna?\nB: Certo, come potrei dimenticarla?",
     exampleSrc:"A: Do you remember the vacation in Sardinia?\nB: Of course, how could I forget it?",
     funFact:"'Ricordare' comes from Latin 're-' (again) + 'cor' (heart), meaning 'to bring back to the heart.' The same root gave English 'record' (to note for remembering). 'Ricordo' as a noun means both 'memory' and 'souvenir,' connecting remembrance with keepsakes."},

    {type:"teach", trg:"accorgersi", src:"to realize / to notice", pos:"verb", gender:null,
     note:"Reflexive -ere verb. Irregular past participle: accorto.\nUses essere: 'mi sono accorto/a' = I realized.",
     example:"A: Mi sono accorto troppo tardi dell'errore.\nB: Non importa, puoi correggerlo.",
     exampleSrc:"A: I realized the mistake too late.\nB: It does not matter, you can correct it.",
     funFact:"'Accorgersi' comes from Latin 'ad-corrigere' (to direct the mind toward). It specifically means the moment of sudden realization: 'Mi sono accorto che pioveva' (I noticed it was raining). This reflexive verb always uses essere in the passato prossimo."},

    {type:"teach", trg:"rendersi conto", src:"to realize / to become aware", pos:"verb", gender:null,
     note:"Reflexive expression. 'Mi sono reso conto che...' = I realized that...\nSlightly more formal than 'accorgersi.'",
     example:"A: Mi sono reso conto di aver sbagliato.\nB: L'importante e capirlo.",
     exampleSrc:"A: I realized I was wrong.\nB: The important thing is to understand it.",
     funFact:"'Rendersi conto' literally means 'to give oneself an account.' It implies a deeper, more reflective realization than 'accorgersi' (sudden noticing). 'Non ti rendi conto!' (You do not realize!) is a common exclamation expressing frustration at someone's lack of awareness."},

    // Quiz steps
    {type:"mc", q:"What is the basic Italian storytelling sequence?",
     opts:["Poi, infine, prima","Prima, poi, infine","Infine, prima, poi","Dopo, mentre, poi"],
     ans:"Prima, poi, infine",
     hint:"First, then, finally. This three-part structure organizes any story clearly. Italian listeners expect this logical progression."},

    {type:"fb", s:"{1}, ho sentito un rumore.",
     a:["Improvvisamente"],
     opts:["Improvvisamente","Infine","Prima","Mentre"],
     hint:"This adverb adds drama to the start of a sentence. Something unexpected happened. From 'improvviso' (sudden).",
     sSrc:"{1}, I heard a noise."},

    {type:"match", pairs:[
      {trg:"prima", src:"first / before"},
      {trg:"poi", src:"then"},
      {trg:"infine", src:"finally"},
      {trg:"mentre", src:"while"},
      {trg:"dopo", src:"after"}
    ]},

    {type:"mc", q:"What is the difference between 'dimenticare' and 'ricordare'?",
     opts:["They are synonyms for the same action","Dimenticare = to forget, ricordare = to remember","Dimenticare = formal, ricordare = informal","Both mean to think about something"],
     ans:"Dimenticare = to forget, ricordare = to remember",
     hint:"One puts things 'out of mind' (di-mente), the other brings them 'back to the heart' (re-cor). Perfect opposites with poetic origins."},

    {type:"fb", s:"Ho {1} un ristorante fantastico.",
     a:["scoperto"],
     opts:["scoperto","raccolto","ricordato","dimenticato"],
     hint:"You found something wonderful that was hidden. This irregular participle of 'scoprire' literally means 'uncovered.'",
     sSrc:"I {1} a fantastic restaurant."},

    {type:"mc", q:"What does 'raccontami!' express in Italian conversation?",
     opts:["Count the money for me","Tell me the story (eager request for news)","Read me a document","Remind me about the facts"],
     ans:"Tell me the story (eager request for news)",
     hint:"'Raccontare' means to narrate. Adding '-mi' (to me) makes it a direct, e... r... for the latest n... or gossip."},

    {type:"fb", s:"Mi sono {1} troppo tardi dell'errore.",
     a:["accorto"],
     opts:["accorto","ricordato","dimenticato","raccontato"],
     hint:"The moment of sudden realization came too late. This reflexive verb uses essere. Irregular participle.",
     sSrc:"I {1} the mistake too late."},

    {type:"mc", q:"What tense does 'mentre' typically trigger in the background clause?",
     opts:["The passato prossimo (completed action)","The future tense (upcoming action)","The imperfect (ongoing background action)","The conditional (hypothetical action)"],
     ans:"The imperfect (ongoing background action)",
     hint:"'Mentre dormivo, ha suonato il telefono.' The background action uses the ongoing tense, while the foreground event uses the completed tense."}
  ]
};
export default BATCH3_U11_L2;
