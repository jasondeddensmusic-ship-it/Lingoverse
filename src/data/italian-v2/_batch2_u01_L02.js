// Unit 01 Batch 2 — Lesson 2: Essential Polite Requests & Responses
const BATCH2_U01_L2 = {
  id:"itv2_u01l_b2_2", title:"Per cortesia", icon:"\ud83d\udc4d", xp:15, board:true,
  steps:[
    {type:"intro", title:"Per cortesia",
     desc:"Learn more polite expressions for requesting, thanking, and responding in everyday Italian situations.",
     goals:["Make polite requests in different ways","Respond to thanks gracefully","Handle basic interactions with courtesy"]},

    {type:"teach", trg:"per cortesia", src:"please (formal/polite)", pos:"adv", gender:null,
     note:"More elegant than 'per favore.' Literally: by courtesy.\nUsed in refined or professional situations.",
     example:"A: Un'informazione, per cortesia.\nB: Certo, mi dica!",
     exampleSrc:"A: Some information, please.\nB: Of course, tell me!",
     funFact:"'Cortesia' comes from 'corte' (court). Being courteous originally meant behaving like someone at a royal court. The three Italian 'please' words form a politeness ladder: per favore, per piacere, per cortesia."},

    {type:"teach", trg:"per piacere", src:"please (middle register)", pos:"adv", gender:null,
     note:"Literally: for pleasure. Sits between 'per favore' and 'per cortesia.'\nAll three are correct in any context.",
     example:"A: Un bicchiere d'acqua, per piacere.\nB: Subito!",
     exampleSrc:"A: A glass of water, please.\nB: Right away!",
     funFact:"'Piacere' means 'pleasure,' so 'per piacere' literally means 'for pleasure.' Compare: per favore (for a favor), per piacere (for pleasure), per cortesia (by courtesy). Three paths to politeness."},

    {type:"teach", trg:"certo", src:"of course / certainly", pos:"adv", gender:null,
     note:"Common affirmative response. Warmer than a simple 'si.'\nAlso an adjective: 'una certa persona' (a certain person).",
     example:"A: Posso sedermi qui?\nB: Certo! Prego!",
     exampleSrc:"A: Can I sit here?\nB: Of course! Please!",
     funFact:"From Latin 'certus' (sure, decided). English 'certain' and 'certificate' share this root. In Italian conversations, 'certo' softens the exchange and signals willingness to help."},

    {type:"teach", trg:"ecco", src:"here it is / there you go", pos:"adv", gender:null,
     note:"Used when handing something to someone or pointing something out.\nExtremely common in daily Italian.",
     example:"A: Dov'e il mio caffe?\nB: Ecco il Suo caffe!",
     exampleSrc:"A: Where is my coffee?\nB: Here is your coffee!",
     funFact:"'Ecco' is one of the most-used Italian words. It works alone ('Ecco!') or with a noun ('Ecco il libro!'). It comes from Latin 'eccum' and has no exact English equivalent. 'Here/there it is' comes closest."},

    {type:"teach", trg:"subito", src:"right away / immediately", pos:"adv", gender:null,
     note:"Very common response from service staff.\nFrom Latin 'subitus' (sudden, immediate).",
     example:"A: Un caffe, per favore.\nB: Subito!",
     exampleSrc:"A: A coffee, please.\nB: Right away!",
     funFact:"Italian baristas and waiters say 'subito!' constantly. It literally means 'immediately' and comes from Latin 'subitus' (sudden). The musical term 'subito forte' (suddenly loud) uses the same word."},

    {type:"teach", trg:"va bene", src:"okay / that's fine", pos:"verb", gender:null,
     note:"The Italian 'okay.' 'Va' = it goes, 'bene' = well.\nAlso used as a question: 'Va bene?' (Is that okay?)",
     example:"A: Ci vediamo alle tre?\nB: Va bene! A dopo!",
     exampleSrc:"A: Shall we meet at three?\nB: Okay! See you later!",
     funFact:"'Va bene' literally means 'it goes well.' It is the Italian 'okay' and is used dozens of times daily. It can be a statement, a question, or even a resigned acceptance: 'Va bene...' (fine...)."},

    {type:"teach", trg:"senz'altro", src:"absolutely / without doubt", pos:"adv", gender:null,
     note:"Literally: without other (without anything else to say).\nStrong affirmative, more emphatic than 'certo.'",
     example:"A: Puoi aiutarmi domani?\nB: Senz'altro! A che ora?",
     exampleSrc:"A: Can you help me tomorrow?\nB: Absolutely! At what time?",
     funFact:"'Senz'altro' contracts 'senza' (without) + 'altro' (other). The logic: there is nothing else to discuss, the answer is yes. A decisive, generous way to agree to something."},

    {type:"teach", trg:"niente", src:"nothing / no problem", pos:"pron", gender:null,
     note:"Means 'nothing.' In response to thanks: 'di niente' (it's nothing).\nSynonym: 'nulla' (more literary).",
     example:"A: Grazie per il passaggio!\nB: Di niente! Era sulla mia strada.",
     exampleSrc:"A: Thanks for the ride!\nB: It's nothing! It was on my way.",
     funFact:"'Niente' comes from a Latin phrase meaning 'not a born thing.' It is more common in speech than its synonym 'nulla,' which sounds literary. 'Per niente' means 'not at all.'"},

    {type:"teach", trg:"scusate", src:"excuse me (plural / group)", pos:"intj", gender:null,
     note:"Plural form of 'scusa.' Used when addressing a group of people.\n'Scusa' = singular informal, 'scusi' = formal, 'scusate' = plural.",
     example:"A: Scusate, e questo il treno per Roma?\nB: Si, e il binario giusto!",
     exampleSrc:"A: Excuse me (all), is this the train to Rome?\nB: Yes, this is the right platform!",
     funFact:"Italian has three levels of 'excuse me': scusa (one friend), scusi (one stranger), scusate (a group). This three-way split reflects how Italian grammar encodes social relationships."},

    {type:"teach", trg:"mi dica", src:"tell me / how can I help", pos:"verb", gender:null,
     note:"Formal invitation to speak. Used by shop staff and professionals.\nLiterally: tell me (using Lei form).",
     example:"A: Mi scusi...\nB: Si, mi dica!",
     exampleSrc:"A: Excuse me...\nB: Yes, tell me / how can I help!",
     funFact:"'Mi dica' (tell me) is the formal imperative of 'dire' (to say/tell). Shop assistants use it to signal readiness. The informal equivalent is 'dimmi' (tell me). Both invite the other person to speak."},

    {type:"teach", trg:"posso", src:"can I / may I", pos:"verb", gender:null,
     note:"First person singular of 'potere' (to be able to, can).\nUsed to ask permission politely: 'Posso entrare?'",
     example:"A: Posso sedermi qui?\nB: Certo, prego!",
     exampleSrc:"A: May I sit here?\nB: Of course, please!",
     funFact:"'Potere' is one of the three essential modal verbs (with volere and dovere). 'Posso' is used constantly for polite requests. Adding it before any verb softens the request: 'posso vedere?' (may I see?)."},

    {type:"teach", trg:"con piacere", src:"with pleasure / gladly", pos:"adv", gender:null,
     note:"Used when accepting an invitation or agreeing to help.\nA warm, enthusiastic affirmative.",
     example:"A: Vuoi venire al cinema con noi?\nB: Con piacere! Che film?",
     exampleSrc:"A: Do you want to come to the cinema with us?\nB: With pleasure! What movie?",
     funFact:"'Con piacere' adds warmth to any acceptance. It signals genuine enthusiasm, not just obligation. Compare: 'si' (yes), 'certo' (of course), 'con piacere' (with pleasure) as an escalating warmth scale."},

    {type:"teach", trg:"altrettanto", src:"likewise / same to you", pos:"adv", gender:null,
     note:"Response to any wish: 'Buona giornata!' 'Altrettanto!'\nLiterally: 'equally as much.'",
     example:"A: Buon appetito!\nB: Grazie, altrettanto!",
     exampleSrc:"A: Enjoy your meal!\nB: Thanks, likewise!",
     funFact:"'Altrettanto' is the universal Italian boomerang word. Any wish sent your way can be returned with this single word. It saves you from remembering every specific response."},

    {type:"teach", trg:"devo andare", src:"I have to go", pos:"verb", gender:null,
     note:"'Devo' = I must/have to (from dovere). 'Andare' = to go.\nPolite way to end a conversation.",
     example:"A: Mi scusi, devo andare. E tardi.\nB: Va bene! Buona serata!",
     exampleSrc:"A: Excuse me, I have to go. It is late.\nB: All right! Have a nice evening!",
     funFact:"'Dovere' (must/have to) is the third essential modal verb alongside potere and volere. 'Devo andare' is the standard polite exit phrase. It signals necessity, not rudeness."},

    // Quiz steps
    {type:"mc", q:"Cosa significa 'ecco'?",
     opts:["Here it is / there you go","Excuse me","Please help","Thank you"],
     ans:"Here it is / there you go",
     hint:"This word is used when handing something over or pointing something out. It has no exact English equivalent."},

    {type:"fb", s:"Un caffe, per favore. {1}!",
     a:["Subito"],
     opts:["Subito","Ecco","Certo","Niente"],
     hint:"The barista responds with this word meaning 'right away.' From Latin 'subitus' (sudden).",
     sSrc:"A coffee, please. {1}!"},

    {type:"mc", q:"Which is the most elegant way to say 'please'?",
     opts:["Per cortesia","Per favore","Per piacere","Prego"],
     ans:"Per cortesia",
     hint:"This version comes from 'corte' (court). It was the language of royal courts. The most refined register."},

    {type:"fb", s:"Ci vediamo alle tre? {1}!",
     a:["Va bene"],
     opts:["Va bene","Di niente","Subito","Scusate"],
     hint:"The Italian equivalent of 'okay.' Literally: 'it goes well.'",
     sSrc:"Shall we meet at three? {1}!"},

    {type:"match", pairs:[
      {trg:"certo", src:"of course"},
      {trg:"ecco", src:"here it is"},
      {trg:"subito", src:"right away"},
      {trg:"va bene", src:"okay"},
      {trg:"altrettanto", src:"likewise"}
    ]},

    {type:"mc", q:"What does a shop assistant mean by 'mi dica'?",
     opts:["How can I help you?","Go away","Wait here","Come back later"],
     ans:"How can I help you?",
     hint:"Literally 'tell me,' this formal phrase invites you to state what you need. Used by service staff throughout Italy."},

    {type:"fb", s:"Buon appetito! Grazie, {1}!",
     a:["altrettanto"],
     opts:["altrettanto","niente","prego","ecco"],
     hint:"This word bounces any wish back to the sender. It means 'likewise' or 'same to you.'",
     sSrc:"Enjoy your meal! Thanks, {1}!"},

    {type:"mc", q:"How do you say 'excuse me' to a group of people?",
     opts:["Scusate","Scusa","Scusi","Mi scusi"],
     ans:"Scusate",
     hint:"Italian distinguishes singular/plural and formal/informal. The plural form ends in -ate."}
  ,{type:"match",pairs:[{trg:"niente",src:"nothing / no problem"},{trg:"mi dica",src:"tell me / how can I help"},{trg:"posso",src:"can I / may I"},{trg:"con piacere",src:"with pleasure / gladly"},{trg:"devo andare",src:"I have to go"}]},{type:"mc",q:"How do you say \"absolutely / without doubt\" in Italian?",opts:["la finestra","senz'altro","il tavolo","la bicicletta"],ans:"senz'altro",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U01_L2;
