// Batch 3 — Unit 24, Lesson 1: Ipotesi quotidiane (Everyday Hypotheticals)
const BATCH3_U24_L1 = {
  id:"itv2_u24l_b3_1", title:"Ipotesi quotidiane", icon:"\uD83D\uDCA1", xp:15, board:true,
  steps:[
    {type:"intro", title:"Ipotesi quotidiane",
     desc:"Practice if-clauses in everyday contexts. From making plans to expressing preferences, hypothetical language is woven throughout daily Italian conversation.",
     goals:["Use if-clauses in everyday situations","Mix Type 1 and Type 2 naturally","Express everyday preferences and plans"]},

    {type:"teach", trg:"se fa bel tempo", src:"if the weather is nice", pos:"verb", gender:null,
     note:"Type 1 (real condition). Present + present/future.\n'Se fa bel tempo, usciamo' = If the weather is nice, we go out.",
     example:"A: Se fa bel tempo domani, andiamo al mare?\nB: Certo! Controllo le previsioni.",
     exampleSrc:"A: If the weather is nice tomorrow, shall we go to the sea?\nB: Of course! I will check the forecast.",
     funFact:"Weather-based if-clauses are the most common in daily Italian. 'Bel tempo' (nice weather) and 'brutto tempo' (bad weather) are simple expressions. Italians plan their weekends around weather, and 'Se fa bel tempo...' starts countless conversations from Thursday onward."},

    {type:"teach", trg:"se non ti dispiace", src:"if you do not mind", pos:"verb", gender:null,
     note:"Polite conditional phrase. 'Dispiace' = to mind/displease.\n'Se non ti dispiace, vorrei...' = If you do not mind, I would like...",
     example:"A: Se non ti dispiace, vorrei cambiare posto.\nB: Nessun problema, fai pure.",
     exampleSrc:"A: If you do not mind, I would like to change seats.\nB: No problem, go ahead.",
     funFact:"'Se non ti dispiace' (informal) and 'se non Le dispiace' (formal) are essential Italian politeness formulas. They soften any request by acknowledging the other person's comfort. 'Fai pure' (go ahead) or 'figurati' (do not mention it) are typical positive responses."},

    {type:"teach", trg:"a condizione che", src:"on the condition that / provided that", pos:"conj", gender:null,
     note:"Conjunction. Followed by subjunctive.\n'A condizione che tu venga' = provided that you come.",
     example:"A: Ti presto la macchina, a condizione che tu sia prudente.\nB: Promesso, staro attentissimo.",
     exampleSrc:"A: I will lend you the car, on the condition that you are careful.\nB: I promise, I will be very careful.",
     funFact:"'A condizione che' is a more formal version of 'a patto che' (covered in Unit 24 L3). Both set firm conditions and require the subjunctive. In everyday speech, Italians often simplify to 'basta che' (as long as): 'Basta che tu torni per le dieci' (As long as you are back by ten)."},

    {type:"teach", trg:"basta che", src:"as long as / provided that", pos:"conj", gender:null,
     note:"Informal conjunction. Followed by subjunctive.\n'Basta che tu sia qui' = As long as you are here.",
     example:"A: Puoi uscire, basta che tu faccia i compiti prima.\nB: Li faccio subito!",
     exampleSrc:"A: You can go out, as long as you do your homework first.\nB: I will do it right away!",
     funFact:"'Basta che' is the everyday Italian way to set conditions. Parents use it constantly: 'Basta che torni per cena' (As long as you are back for dinner). It is much more common in speech than the formal 'a condizione che.' Despite being informal, it still triggers the subjunctive."},

    {type:"teach", trg:"purche", src:"provided that / as long as", pos:"conj", gender:null,
     note:"Conjunction. From 'pur' (even/still) + 'che.'\nAlways followed by subjunctive.",
     example:"A: Accetto il lavoro, purche lo stipendio sia buono.\nB: Quanto chiedi?",
     exampleSrc:"A: I will accept the job, provided the salary is good.\nB: How much are you asking?",
     funFact:"'Purche' is a literary but still-used conjunction. It carries a sense of willingness: 'I will do X, as long as Y is met.' It appears in contracts, negotiations, and daily speech alike. The accented 'e' is important: 'purche' (provided that) vs. 'pure' (even, also)."},

    {type:"teach", trg:"qualora", src:"in the event that / should", pos:"conj", gender:null,
     note:"Formal conjunction. From 'quale' (which) + 'ora' (hour).\nAlways followed by subjunctive.",
     example:"A: Qualora avessi bisogno, non esitare a chiamarmi.\nB: Grazie, lo faro.",
     exampleSrc:"A: Should you need anything, do not hesitate to call me.\nB: Thanks, I will.",
     funFact:"'Qualora' is formal Italian at its finest. Used in legal documents, official letters, and formal speech. It means 'at whatever hour/time that,' implying preparedness for an uncertain event. In everyday conversation, Italians prefer 'se per caso' or 'nel caso.'"},

    {type:"teach", trg:"ammesso che", src:"assuming that / granted that", pos:"conj", gender:null,
     note:"Conjunction. From 'ammettere' (to admit/assume).\n'Ammesso che sia vero' = assuming it is true.",
     example:"A: Ammesso che il treno sia in orario, arriviamo alle dieci.\nB: Speriamo non ci siano ritardi.",
     exampleSrc:"A: Assuming the train is on time, we arrive at ten.\nB: Let us hope there are no delays.",
     funFact:"'Ammesso che' introduces a condition that may or may not be true. It is useful for planning with uncertainty. In Italian conversation, it often carries slight skepticism: 'ammesso che sia vero' (assuming that is true) subtly questions the premise."},

    {type:"teach", trg:"se solo avessi", src:"if only I had", pos:"verb", gender:null,
     note:"Type 2 + 'solo' for emphasis. Imperfect subjunctive.\n'Se solo avessi saputo!' = If only I had known!",
     example:"A: Se solo avessi piu tempo libero!\nB: Cosa faresti?",
     exampleSrc:"A: If only I had more free time!\nB: What would you do?",
     funFact:"Adding 'solo' to 'se' intensifies the wishful quality. 'Se avessi tempo' is neutral hypothetical. 'Se solo avessi tempo!' adds emotional longing. Italian loves these intensified expressions for everyday wishes: time, money, youth, talent."},

    {type:"teach", trg:"nel peggiore dei casi", src:"in the worst case", pos:"adv", gender:null,
     note:"Adverbial expression. 'Peggiore' = worst.\n'Nel migliore dei casi' = in the best case.",
     example:"A: Nel peggiore dei casi, prendiamo un taxi.\nB: Buona idea, come piano B.",
     exampleSrc:"A: In the worst case, we take a taxi.\nB: Good idea, as a plan B.",
     funFact:"'Nel peggiore dei casi' and 'nel migliore dei casi' (in the best case) are planning expressions. Italians use them to bracket possibilities. The pair allows for realistic planning: 'Nel migliore dei casi arriviamo alle due, nel peggiore alle quattro' (Best case 2, worst case 4)."},

    {type:"teach", trg:"figurati se", src:"as if / there is no way that", pos:"verb", gender:null,
     note:"Colloquial expression. 'Figurati se viene!' = As if he would come!\nExpresses disbelief or impossibility.",
     example:"A: Figurati se Marco arriva in orario!\nB: Hai ragione, e sempre in ritardo.",
     exampleSrc:"A: As if Marco would arrive on time!\nB: You are right, he is always late.",
     funFact:"'Figurati se...' is wonderfully Italian: it expresses disbelief that something could possibly happen. 'Figurarsi' means 'to imagine,' so 'figurati se...' is literally 'imagine if...' with heavy sarcasm. It is a rhetorical device that dismisses a possibility as absurd."},

    {type:"teach", trg:"caso mai", src:"just in case / if by any chance", pos:"adv", gender:null,
     note:"Adverbial expression. Informal version of 'nel caso in cui.'\n'Caso mai piova' = just in case it rains.",
     example:"A: Porto un maglione, caso mai faccia freddo.\nB: Fai bene, le sere sono fresche.",
     exampleSrc:"A: I will bring a sweater, just in case it gets cold.\nB: Good idea, the evenings are cool.",
     funFact:"'Caso mai' is the everyday Italian replacement for the formal 'nel caso in cui.' It is shorter, more conversational, and equally understood. Italian conversation is full of these informal conditional expressions that native speakers use instinctively but textbooks often overlook."},

    {type:"teach", trg:"sempre che", src:"as long as / provided that", pos:"conj", gender:null,
     note:"Conjunction. Followed by subjunctive.\n'Sempre che tu voglia' = as long as you want to.",
     example:"A: Vengo alla festa, sempre che tu mi inviti.\nB: Ovviamente sei invitato!",
     exampleSrc:"A: I will come to the party, as long as you invite me.\nB: Of course you are invited!",
     funFact:"'Sempre che' literally means 'always that,' expressing 'at all times that the condition holds.' It is mid-register: not as formal as 'qualora' but more polished than 'basta che.' Used naturally in Italian conversation for setting friendly conditions."},

    // Quiz steps
    {type:"mc", q:"What does 'figurati se' express?",
     opts:["Sincere hope something will happen","Polite request for information","Sarcastic disbelief that something could happen","Formal invitation to imagine"],
     ans:"Sarcastic disbelief that something could happen",
     hint:"'Figurati se Marco arriva in orario!' dismisses the idea as absurd. It is rhetorical sarcasm wrapped in the verb 'to imagine.'"},

    {type:"fb", s:"Se fa {1} domani, andiamo al mare.",
     a:["bel tempo"],
     opts:["bel tempo","brutto tempo","freddo","caldo"],
     hint:"Nice weather. The most common starting point for weekend planning in Italian. Type 1 if-clause, real possibility.",
     sSrc:"If the weather is {1} tomorrow, we go to the sea."},

    {type:"match", pairs:[
      {trg:"basta che", src:"as long as (informal)"},
      {trg:"purche", src:"provided that (literary)"},
      {trg:"qualora", src:"should / in the event (formal)"},
      {trg:"ammesso che", src:"assuming that"},
      {trg:"caso mai", src:"just in case"}
    ]},

    {type:"mc", q:"Which is the most informal way to set conditions in Italian?",
     opts:["Qualora (should)","A condizione che (on condition)","Basta che (as long as)","Purche (provided that)"],
     ans:"Basta che (as long as)",
     hint:"Parents use it constantly: 'B... c... torni per cena.' Despite being informal, it still triggers the subjunctive mood."},

    {type:"fb", s:"Vengo alla festa, {1} che tu mi inviti.",
     a:["sempre"],
     opts:["sempre","basta","caso","ammesso"],
     hint:"As long as you invite me. This mid-register conjunction means 'at all times that the condition holds.'",
     sSrc:"I will come, {1} that you invite me."},

    {type:"mc", q:"What is 'nel peggiore dei casi' used for?",
     opts:["Describing a past disaster","Planning for the worst-case scenario","Complaining about current problems","Making formal legal arguments"],
     ans:"Planning for the worst-case scenario",
     hint:"Paired with 'nel migliore dei casi' (best c...), it brackets possibilities for realistic p...."},

    {type:"fb", s:"Porto un maglione, {1} faccia freddo.",
     a:["caso mai"],
     opts:["caso mai","sempre che","figurati se","ammesso che"],
     hint:"Just in case. This informal expression replaces the formal 'nel c... in cui.' Very natural in spoken Italian.",
     sSrc:"I will bring a sweater, {1} it gets cold."},

    {type:"mc", q:"What does 'Se non ti dispiace' literally ask?",
     opts:["If you do not pay","If you do not mind / if it does not displease you","If you are not busy","If you can come"],
     ans:"If you do not mind / if it does not displease you",
     hint:"A politeness formula that acknowledges the other person's comfort before making a request. Essential for smooth Italian interactions."}
  ]
};
export default BATCH3_U24_L1;
