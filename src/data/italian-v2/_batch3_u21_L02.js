// Batch 3. Unit 21, Lesson 2: Consigli e richieste formali (Advice & Formal Requests)
const BATCH3_U21_L2 = {
  id:"itv2_u21l_b3_2", title:"Consigli e richieste formali", icon:"\uD83C\uDFA9", xp:15, board:true,
  steps:[
    {type:"intro", title:"Consigli e richieste formali",
     desc:"Master the conditional for formal requests, workplace communication, and giving sophisticated advice. These patterns elevate your Italian to professional level.",
     goals:["Make formal requests in professional Italian","Give nuanced advice using the conditional","Navigate formal vs. informal register"]},

    {type:"teach", trg:"le sarei grato", src:"I would be grateful to you (formal)", pos:"verb", gender:null,
     note:"Formal expression. 'Le' = to you (Lei form).\n'Le sarei grato se...' = I would be grateful if...",
     example:"A: Le sarei grato se potesse rispondere entro venerdì.\nB: Certo, faro del mio meglio.",
     exampleSrc:"A: I would be grateful if you could reply by Friday.\nB: Of course, I will do my best.",
     funFact:"'Le sarei grato/a' is the gold standard of formal Italian requests. Used in business emails, official letters, and professional communication. The 'Le' (capitalized) signals the Lei form. Adding 'se potesse' (if you could) creates an impeccably polite request."},

    {type:"teach", trg:"potrebbe", src:"could you (formal) / he/she could", pos:"verb", gender:null,
     note:"Conditional of 'potere,' Lei/lui/lei form.\n'Potrebbe ripetere?' = Could you repeat that? (formal)",
     example:"A: Potrebbe aiutarmi con questo modulo?\nB: Certamente, mi dica.",
     exampleSrc:"A: Could you help me with this form?\nB: Certainly, tell me.",
     funFact:"'Potrebbe' is the workhorse of formal Italian requests. Hotel receptionists, bank clerks, and customer service staff use it constantly. 'Potrebbe dirmi...?' (Could you tell me...?) opens any formal inquiry. It is the Lei equivalent of the informal 'potresti.'"},

    {type:"teach", trg:"dovrebbe", src:"should (formal) / he/she should", pos:"verb", gender:null,
     note:"Conditional of 'dovere,' Lei/lui/lei form.\n'Dovrebbe riposare' = You should rest (formal).",
     example:"A: Dovrebbe prendere un appuntamento.\nB: Come posso prenotare?",
     exampleSrc:"A: You should make an appointment.\nB: How can I book?",
     funFact:"Doctors use 'dovrebbe' constantly with patients. 'Dovrebbe smettere di fumare' (You should stop smoking) is gentler than 'deve' (you must). The conditional transforms a command into professional advice, maintaining respect for the patient's autonomy."},

    {type:"teach", trg:"suggerirei", src:"I would suggest", pos:"verb", gender:null,
     note:"Conditional of 'suggerire' (-ire verb, no -isc-).\n'Suggerirei di...' = I would suggest...",
     example:"A: Suggerirei di partire presto.\nB: A che ora?",
     exampleSrc:"A: I would suggest leaving early.\nB: At what time?",
     funFact:"'Suggerire' does not use the -isc- pattern in the conditional (suggerirei, not 'suggeriscirei'). This is a useful verb for giving advice without sounding pushy. In meetings and emails, 'suggerirei di...' is the standard way to propose ideas diplomatically."},

    {type:"teach", trg:"raccomanderei", src:"I would recommend", pos:"verb", gender:null,
     note:"Conditional of 'raccomandare.' Regular -are.\n'Raccomanderei prudenza' = I would recommend caution.",
     example:"A: Raccomanderei questo hotel.\nB: Per quale motivo?",
     exampleSrc:"A: I would recommend this hotel.\nB: For what reason?",
     funFact:"'Raccomandare' in Italian has a double meaning: to recommend AND to pull strings. 'Raccomandazione' can mean a recommendation letter OR using personal connections to get favors. This double meaning reflects the complex role of personal networks in Italian society."},

    {type:"teach", trg:"converrebbe", src:"it would be advisable / it would suit", pos:"verb", gender:null,
     note:"Conditional of 'convenire' (impersonal). 'Converrebbe partire presto' = It would be advisable to leave early.",
     example:"A: Converrebbe prenotare in anticipo.\nB: Hai ragione, lo faccio subito.",
     exampleSrc:"A: It would be advisable to book in advance.\nB: You are right, I will do it now.",
     funFact:"'Converrebbe' is an impersonal conditional used for tactful recommendations. It avoids pointing at anyone: 'converrebbe' (it would be fitting) instead of 'dovresti' (you should). This impersonal form is especially common in professional Italian."},

    {type:"teach", trg:"gradirei", src:"I would appreciate / I would like", pos:"verb", gender:null,
     note:"Conditional of 'gradire' (to appreciate, to welcome).\nVery formal. 'Gradirei una risposta' = I would appreciate a reply.",
     example:"A: Gradirei ricevere informazioni sul corso.\nB: Le invio la brochure per email.",
     exampleSrc:"A: I would appreciate receiving information about the course.\nB: I will send you the brochure by email.",
     funFact:"'Gradire' is among the most formal Italian verbs for requests. In restaurants: 'Gradisce un caffè?' (Would you care for a coffee?). In business: 'Gradirei un incontro' (I would appreciate a meeting). It conveys refined politeness beyond simple 'vorrei.'"},

    {type:"teach", trg:"bisognerebbe", src:"it would be necessary / one should", pos:"verb", gender:null,
     note:"Conditional of 'bisognare' (impersonal). 'Bisognerebbe studiare di più' = One should study more.",
     example:"A: Bisognerebbe organizzarsi meglio.\nB: Sono d'accordo, facciamo un piano.",
     exampleSrc:"A: We should organize ourselves better.\nB: I agree, let us make a plan.",
     funFact:"'Bisognerebbe' softens necessity. 'Bisogna' (it is necessary) is direct. 'Bisognerebbe' (it would be necessary) is gentle. Italian managers often use impersonal forms to avoid singling people out: 'bisognerebbe migliorare' rather than 'devi migliorare.'"},

    {type:"teach", trg:"proporrei", src:"I would propose", pos:"verb", gender:null,
     note:"Conditional of 'proporre.' Irregular stem: proporr-.\n'Proporrei una soluzione' = I would propose a solution.",
     example:"A: Proporrei di rinviare la riunione.\nB: Per quale motivo?",
     exampleSrc:"A: I would propose postponing the meeting.\nB: For what reason?",
     funFact:"'Proporre' has an irregular conditional like 'porre' (porrei). 'Proporrei' is the standard meeting language for introducing a new idea. It is more assertive than 'suggerirei' but still diplomatic thanks to the conditional mood."},

    {type:"teach", trg:"le dispiacerebbe", src:"would you mind (formal)", pos:"verb", gender:null,
     note:"'Le dispiacerebbe + infinitive?' = Would you mind...? (formal)\nExtremely polite request form.",
     example:"A: Le dispiacerebbe chiudere la porta?\nB: No, nessun problema.",
     exampleSrc:"A: Would you mind closing the door?\nB: No, no problem.",
     funFact:"'Le dispiacerebbe' is the ultimate polite request in Italian. Literally: 'Would it displease you to...?' The negative construction ('No, non mi dispiace' = No, I do not mind) is the expected response. This level of politeness is reserved for formal situations and interactions with strangers."},

    {type:"teach", trg:"mi permetterei di", src:"I would allow myself to / I would venture to", pos:"verb", gender:null,
     note:"Reflexive conditional. 'Mi permetterei di suggerire...' = I would venture to suggest...\nUltra-formal.",
     example:"A: Mi permetterei di fare un'osservazione.\nB: Prego, la ascolto.",
     exampleSrc:"A: I would venture to make an observation.\nB: Please, I am listening.",
     funFact:"'Mi permetterei di...' is one of Italian's most sophisticated diplomatic formulas. It acknowledges that you are possibly overstepping, while still making your point. Used in parliament, academic discourse, and formal business. It reflects Italian culture's emphasis on social grace."},

    {type:"teach", trg:"sarebbe opportuno", src:"it would be appropriate / advisable", pos:"verb", gender:null,
     note:"Impersonal. 'Sarebbe opportuno + infinitive' = It would be advisable to...\n'Opportuno' = timely, appropriate.",
     example:"A: Sarebbe opportuno avvisare il direttore.\nB: Lo faccio subito.",
     exampleSrc:"A: It would be appropriate to inform the director.\nB: I will do it right away.",
     funFact:"'Sarebbe opportuno' is professional Italian's go-to phrase for diplomatic recommendations. Like 'converrebbe' and 'bisognerebbe,' it uses impersonal form to avoid direct confrontation. Italian workplace culture heavily favors these indirect expressions over blunt directives."},

    // Quiz steps
    {type:"mc", q:"What is the most polite way to ask someone to close the door in formal Italian?",
     opts:["Le dispiacerebbe chiudere la porta?","Chiudi la porta, per favore.","Chiuda la porta!","Puoi chiudere la porta?"],
     ans:"Le dispiacerebbe chiudere la porta?",
     hint:"Literally: 'Would it displease you to close the door?' This ultra-polite form is reserved for formal situations."},

    {type:"fb", s:"Le {1} grato se potesse rispondere.",
     a:["sarei"],
     opts:["sarei","sono","ero","saro"],
     hint:"I would be grateful. This formal request uses the conditional of 'essere' with 'Le' (to you, Lei form).",
     sSrc:"I would be {1} if you could reply."},

    {type:"match", pairs:[
      {trg:"potrebbe", src:"could you (formal)"},
      {trg:"dovrebbe", src:"should (formal)"},
      {trg:"suggerirei", src:"I would suggest"},
      {trg:"gradirei", src:"I would appreciate"},
      {trg:"proporrei", src:"I would propose"}
    ]},

    {type:"mc", q:"Why does Italian workplace culture prefer impersonal conditionals?",
     opts:["To hide who is responsible","To avoid singling people out and confrontation","Because personal forms are grammatically wrong","Because Italian bosses are always indirect"],
     ans:"To avoid singling people out and confrontation",
     hint:"'Bisognerebbe migliorare' (one should improve) is gentler than 'devi migliorare' (you must improve). Social grace matters in Italian professional communication."},

    {type:"fb", s:"{1} partire presto.",
     a:["Converrebbe"],
     opts:["Converrebbe","Conviene","Conveniva","Converra"],
     hint:"It would be advisable. This impersonal conditional avoids pointing at anyone. Tactful professional advice.",
     sSrc:"It {1} to leave early."},

    {type:"mc", q:"What is the double meaning of 'raccomandazione' in Italian?",
     opts:["Written and spoken language","Recommendation and punishment","Recommendation and personal connection/favor","Formal and informal register"],
     ans:"Recommendation and personal connection/favor",
     hint:"A r... letter is a 'lettera di raccomandazione.' But 'avere una raccomandazione' can mean having connections to pull strings. Reflects Italian networking culture."},

    {type:"fb", s:"Mi {1} di fare un'osservazione.",
     a:["permetterei"],
     opts:["permetterei","permetto","permettevo","permettero"],
     hint:"Ultra-formal: 'I would venture to.' Acknowledges possible overstepping while still making your point. Parliamentary-level Italian.",
     sSrc:"I {1} to make an observation."},

    {type:"mc", q:"When would you use 'gradirei' instead of 'vorrei'?",
     opts:["They are completely interchangeable","Only when ordering food at restaurants","In casual conversation with friends","In very formal situations (business, official letters)"],
     ans:"In very formal situations (business, official letters)",
     hint:"'Gradirei' conveys refined politeness beyond simple 'would like.' Used in b... correspondence, f... inquiries, and upscale service contexts."}
  ,{type:"match",pairs:[{trg:"raccomanderei",src:"I would recommend"},{trg:"bisognerebbe",src:"it would be necessary / one should"},{trg:"sarebbe opportuno",src:"it would be appropriate / advisable"}]}]
};
export default BATCH3_U21_L2;
