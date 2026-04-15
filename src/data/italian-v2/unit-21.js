// Italian V2 Unit 21 — Il condizionale (The Conditional Mood) (B1.3)
// CILS/CELI B1 aligned. Conditional formation, irregular stems, usage patterns.

const UNIT_21 = {
  n:21, lang:"it", srcLang:"en", track:"v2",
  title:"Il condizionale", sub:"The Conditional Mood",
  icon:"🌀", level:"B1.3", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u21l1", title:"Vorrei, potrei", icon:"✨", xp:15, board:true, steps:[
      {type:"intro", title:"Vorrei, potrei",
       desc:"The conditional mood expresses wishes, polite requests, and hypothetical situations. Start with the most common irregular conditionals: vorrei, potrei, dovrei.",
       goals:["Use 'vorrei' for polite requests","Form conditional of common irregular verbs","Express wishes and hypothetical preferences"]},

      {type:"teach", trg:"vorrei", src:"I would like", pos:"verb", gender:null,
       note:"Conditional of 'volere' (to want). Irregular stem: vorr-.\nThe most polite way to ask for something in Italian.",
       example:"A: Vorrei un caffe, per favore.\nB: Macchiato o normale?",
       exampleSrc:"A: I would like a coffee, please.\nB: Macchiato or regular?",
       funFact:"'Vorrei' is the single most useful conditional form for travelers. At any bar, restaurant, or shop, starting with 'vorrei...' signals politeness. 'Voglio' (I want) sounds demanding. The difference between 'voglio un caffe' and 'vorrei un caffe' is like 'gimme' versus 'I'd like.'"},

      {type:"teach", trg:"potrei", src:"I could / I would be able to", pos:"verb", gender:null,
       note:"Conditional of 'potere' (to be able to). Irregular stem: potr-.\n'Potrei aiutarti' = I could help you.",
       example:"A: Potrei parlare con il direttore?\nB: Certo, un momento.",
       exampleSrc:"A: Could I speak with the director?\nB: Of course, one moment.",
       funFact:"'Potrei' softens requests beautifully. 'Posso?' (Can I?) is direct. 'Potrei?' (Could I?) is deferential. Italian customer service encounters almost always use the conditional for both sides. Even waiters say 'Potrebbe dirmi cosa desidera?' (Could you tell me what you would like?)."},

      {type:"teach", trg:"dovrei", src:"I should / I ought to", pos:"verb", gender:null,
       note:"Conditional of 'dovere' (to have to). Irregular stem: dovr-.\n'Dovrei studiare' = I should study.",
       example:"A: Dovrei andare dal dottore.\nB: Si, dovresti prenderti cura di te.",
       exampleSrc:"A: I should go to the doctor.\nB: Yes, you should take care of yourself.",
       funFact:"'Dovrei' expresses moral obligation softened by the conditional. 'Devo' (I must) is firm. 'Dovrei' (I should) leaves room for not doing it. Italians joke that 'dovrei andare in palestra' (I should go to the gym) is the most commonly broken promise in Italy."},

      {type:"teach", trg:"sarei", src:"I would be", pos:"verb", gender:null,
       note:"Conditional of 'essere' (to be). Irregular stem: sar-.\n'Sarei felice di aiutarti' = I would be happy to help you.",
       example:"A: Sarei contento di venire alla festa.\nB: Saresti il benvenuto!",
       exampleSrc:"A: I would be happy to come to the party.\nB: You would be welcome!",
       funFact:"The conditional of 'essere' uses the same stem as the future tense: sar-. Future: saro, sarai, sara. Conditional: sarei, saresti, sarebbe. Both tenses share irregular stems in Italian, which makes learning them easier once you know one."},

      {type:"teach", trg:"avrei", src:"I would have", pos:"verb", gender:null,
       note:"Conditional of 'avere' (to have). Irregular stem: avr-.\n'Avrei bisogno di...' = I would need...",
       example:"A: Avrei una domanda.\nB: Certo, dimmi pure.",
       exampleSrc:"A: I would have a question.\nB: Of course, go ahead.",
       funFact:"'Avrei bisogno di' (I would need) is a very polite way to ask for something: 'Avrei bisogno di un'informazione' (I would need some information). Like 'essere,' 'avere' shares its conditional stem with the future: avro, avrai, avra (future) / avrei, avresti, avrebbe (conditional)."},

      {type:"teach", trg:"farei", src:"I would do / I would make", pos:"verb", gender:null,
       note:"Conditional of 'fare' (to do/make). Irregular stem: far-.\n'Farei qualsiasi cosa' = I would do anything.",
       example:"A: Cosa faresti al mio posto?\nB: Farei la stessa cosa.",
       exampleSrc:"A: What would you do in my place?\nB: I would do the same thing.",
       funFact:"'Cosa faresti?' (What would you do?) is a favorite conversation starter in Italian. Game shows, talk shows, and casual conversations all love hypothetical scenarios. 'Farei' keeps the simple stem 'far-' plus the conditional endings."},

      {type:"verb_table", title:"Condizionale presente: irregolari",
       note:"These six irregular verbs are the most used conditionals. Their stems match the future tense stems.",
       groups:[{label:"Common irregular conditionals", rows:[
         {pronoun:"vorrei", form:"vorresti / vorrebbe", src:"I/you/he would like"},
         {pronoun:"potrei", form:"potresti / potrebbe", src:"I/you/he could"},
         {pronoun:"dovrei", form:"dovresti / dovrebbe", src:"I/you/he should"},
         {pronoun:"sarei", form:"saresti / sarebbe", src:"I/you/he would be"},
         {pronoun:"avrei", form:"avresti / avrebbe", src:"I/you/he would have"},
         {pronoun:"farei", form:"faresti / farebbe", src:"I/you/he would do"}
       ]}]},

      // Quiz steps
      {type:"mc", q:"What is the most polite way to order coffee in Italian?",
       opts:["Vorrei un caffe","Voglio un caffe, subito","Dammi un caffe adesso","Prendo un caffe, grazie"],
       ans:"Vorrei un caffe",
       hint:"The conditional of 'volere' softens the demand. 'Voglio' sounds too direct. This form is essential for polite interactions."},

      {type:"fb", s:"{1} parlare con il direttore?",
       a:["Potrei"],
       opts:["Potrei","Posso","Potere","Potremo"],
       hint:"You are making a polite request using the conditional of 'potere.' The io form uses the irregular stem potr-.",
       sSrc:"{1} I speak with the director?"},

      {type:"match", pairs:[
        {trg:"vorrei", src:"I would like"},
        {trg:"potrei", src:"I could"},
        {trg:"dovrei", src:"I should"},
        {trg:"sarei", src:"I would be"},
        {trg:"farei", src:"I would do"}
      ]},

      {type:"mc", q:"Which tense shares its irregular stems with the conditional?",
       opts:["The imperfect","The future tense","The passato prossimo","The subjunctive"],
       ans:"The future tense",
       hint:"Saro/sarei, avro/avrei, faro/farei. Once you know the f... stems, the conditional stems are the same."},

      {type:"fb", s:"{1} andare dal dottore.",
       a:["Dovrei"],
       opts:["Dovrei","Devo","Dovere","Dovremo"],
       hint:"You are expressing a soft obligation using the conditional of 'dovere.' It means 'I should' rather than 'I must.'",
       sSrc:"I {1} go to the doctor."},

      {type:"mc", q:"What does 'Cosa faresti al mio posto?' mean?",
       opts:["What are you doing here right now?","What did you do there yesterday?","What would you do in my place?","What will you do about it later?"],
       ans:"What would you do in my place?",
       hint:"'Faresti' is the tu conditional of 'fare.' 'Al mio posto' means 'in my p....' This is a hypothetical question."},

      {type:"fb", s:"{1} contento di venire alla festa.",
       a:["Sarei"],
       opts:["Sarei","Sono","Essere","Saremo"],
       hint:"You would be happy to come. The conditional of 'essere' uses the irregular stem sar-.",
       sSrc:"I {1} happy to come to the party."},

      {type:"mc", q:"What is 'avrei bisogno di'?",
       opts:["I had a need at that time","I have a need right now","I will certainly need that","I would need (polite request)"],
       ans:"I would need (polite request)",
       hint:"'Avrei' is the conditional of 'avere.' Combined with 'bisogno di,' it creates a very p... way to ask for something."}
    ]},

    {id:"itv2_u21l2", title:"Parlerei, scriverei", icon:"📝", xp:15, board:true, steps:[
      {type:"intro", title:"Parlerei, scriverei",
       desc:"Learn how regular verbs form the conditional. All three conjugation classes (-are, -ere, -ire) follow a predictable pattern with the same set of endings.",
       goals:["Form conditional of regular -are verbs","Form conditional of regular -ere and -ire verbs","Use regular conditionals in sentences"]},

      {type:"teach", trg:"parlerei", src:"I would speak", pos:"verb", gender:null,
       note:"Conditional of 'parlare.' Stem: parler- + endings.\n-Are verbs change -a- to -e- before conditional endings.",
       example:"A: Parlerei volentieri con lui.\nB: Parleresti anche tu se lo conoscessi.",
       exampleSrc:"A: I would gladly speak with him.\nB: You would also speak if you knew him.",
       funFact:"The conditional endings are the same for all three conjugations: -ei, -esti, -ebbe, -emmo, -este, -ebbero. For -are verbs, the infinitive -are becomes -er before adding the endings: parlare > parler- > parlerei. This -a to -e shift is the only thing to remember."},

      {type:"teach", trg:"mangerebbe", src:"he/she would eat", pos:"verb", gender:null,
       note:"Conditional of 'mangiare,' third person singular.\nKeeps the -i: mangier- + ebbe.",
       example:"A: Marco mangerebbe volentieri la pizza.\nB: Mangeremmo tutti la pizza!",
       exampleSrc:"A: Marco would gladly eat pizza.\nB: We would all eat pizza!",
       funFact:"Verbs ending in -iare (mangiare) and -ciare (lanciare) keep the -i in the conditional stem: mangerei, lancerei. Verbs ending in -care/-gare add -h- to keep the hard sound: cercare > cercherei, pagare > pagherei. These spelling rules match the future tense exactly."},

      {type:"teach", trg:"scriverei", src:"I would write", pos:"verb", gender:null,
       note:"Conditional of 'scrivere' (-ere). Stem: scriver- + endings.\n-Ere verbs use the infinitive directly as the stem.",
       example:"A: Scriverei un libro, se avessi tempo.\nB: Che libro scriveresti?",
       exampleSrc:"A: I would write a book, if I had time.\nB: What book would you write?",
       funFact:"For -ere verbs, the conditional stem is simply the full infinitive: scrivere > scriver- > scriverei. No vowel change needed (unlike -are verbs). This makes -ere conditionals the easiest to form. The double -bb in the lui/lei form (scriverebbe) is distinctive."},

      {type:"teach", trg:"partirei", src:"I would leave", pos:"verb", gender:null,
       note:"Conditional of 'partire' (-ire). Stem: partir- + endings.\n-Ire verbs work like -ere: use the full infinitive.",
       example:"A: Partirei domani, ma non ho il biglietto.\nB: Partiresti in treno o in aereo?",
       exampleSrc:"A: I would leave tomorrow, but I do not have a ticket.\nB: Would you leave by train or plane?",
       funFact:"All -ire verbs form the conditional the same way, whether or not they use -isc- in the present. 'Finire' (which has 'finisco' in the present) becomes 'finirei' in the conditional with no -isc-. The conditional strips away all present tense quirks."},

      {type:"teach", trg:"preferirei", src:"I would prefer", pos:"verb", gender:null,
       note:"Conditional of 'preferire' (-ire). Stem: preferir- + endings.\nNo -isc- in the conditional, just regular endings.",
       example:"A: Preferirei restare a casa.\nB: Anch'io preferirei rilassarmi.",
       exampleSrc:"A: I would prefer to stay at home.\nB: I too would prefer to relax.",
       funFact:"'Preferirei' is extremely polite for expressing a preference. In a restaurant: 'Preferirei il pesce' (I would prefer the fish). At work: 'Preferirei lavorare da casa' (I would prefer to work from home). The conditional makes any preference sound diplomatic."},

      {type:"verb_table", title:"Condizionale presente: regolari",
       note:"The conditional endings are the same for all three conjugation classes. Note the -a to -e shift for -are verbs.",
       groups:[{label:"parlare (to speak)", rows:[
         {pronoun:"io", form:"parlerei", src:"I would speak"},
         {pronoun:"tu", form:"parleresti", src:"you would speak"},
         {pronoun:"lui/lei", form:"parlerebbe", src:"he/she would speak"},
         {pronoun:"noi", form:"parleremmo", src:"we would speak"},
         {pronoun:"voi", form:"parlereste", src:"you (pl.) would speak"},
         {pronoun:"loro", form:"parlerebbero", src:"they would speak"}
       ]},{label:"scrivere (to write) / partire (to leave)", rows:[
         {pronoun:"io", form:"scriverei / partirei", src:"I would write / leave"},
         {pronoun:"tu", form:"scriveresti / partiresti", src:"you would write / leave"},
         {pronoun:"lui/lei", form:"scriverebbe / partirebbe", src:"he/she would write / leave"},
         {pronoun:"noi", form:"scriveremmo / partiremmo", src:"we would write / leave"},
         {pronoun:"voi", form:"scrivereste / partireste", src:"you (pl.) would write / leave"},
         {pronoun:"loro", form:"scriverebbero / partirebbero", src:"they would write / leave"}
       ]}]},

      {type:"tip", title:"Conditional Formation: The Simple Rule",
       text:"Three steps to form any regular conditional:\n\n1. Take the infinitive: parlare, scrivere, partire\n2. For -are verbs, change -are to -er: parler-\n3. Add endings: -ei, -esti, -ebbe, -emmo, -este, -ebbero\n\nFor -ere and -ire verbs, skip step 2 and just drop the final -e:\nscriver- + ei = scriverei\npartir- + ei = partirei\n\nIrregular verbs change only the stem (step 1-2). The endings never change.",
       deepDive:{title:"Why Conditional = Future + Different Endings",
        text:"The Italian conditional evolved from the Latin infinitive plus the imperfect of 'avere' (habebam). The future evolved from the infinitive plus the present of 'avere' (habeo). This is why both tenses share the same irregular stems. Knowing the future automatically gives you the conditional."}},

      // Quiz steps
      {type:"mc", q:"What happens to -are verbs in the conditional?",
       opts:["The -a changes to -e: parlare > parler-","Nothing at all changes in the verb stem","The -a changes to an -i sound instead","The -a ending is simply dropped completely"],
       ans:"The -a changes to -e: parlare > parler-",
       hint:"This vowel shift is the key difference. -Ere and -ire verbs keep their stem vowel. Only -are verbs undergo this change."},

      {type:"fb", s:"{1} un libro, se avessi tempo.",
       a:["Scriverei"],
       opts:["Scriverei","Scrivo","Scrivere","Scrivessi"],
       hint:"You would write a book in a hypothetical situation. Take the infinitive 'scrivere,' drop -e, add -ei.",
       sSrc:"I {1} a book, if I had time."},

      {type:"match", pairs:[
        {trg:"parlerei", src:"I would speak"},
        {trg:"scriverei", src:"I would write"},
        {trg:"partirei", src:"I would leave"},
        {trg:"preferirei", src:"I would prefer"},
        {trg:"mangerebbe", src:"he/she would eat"}
      ]},

      {type:"mc", q:"Do -isc- verbs like 'finire' keep the -isc- in the conditional?",
       opts:["Yes, all persons use 'finiscirei'","No, the conditional is 'finirei' without -isc-","Only in the plural forms of the verb","Only in the io form of the verb"],
       ans:"No, the conditional is 'finirei' without -isc-",
       hint:"The c... strips away all present tense quirks. The stem is simply the infinitive minus final -e."},

      {type:"fb", s:"{1} restare a casa.",
       a:["Preferirei"],
       opts:["Preferirei","Preferisco","Preferire","Preferissi"],
       hint:"You would prefer to stay home. This -ire verb drops -e from the infinitive and adds -ei. No -isc- needed.",
       sSrc:"I {1} to stay at home."},

      {type:"mc", q:"Which set of endings does the conditional use?",
       opts:["-avo, -avi, -ava, -avamo, -avate, -avano (imperfect)","-o, -i, -a, -iamo, -iate, -ino","-ei, -esti, -ebbe, -emmo, -este, -ebbero","-o, -i, -e, -iamo, -ete, -ono"],
       ans:"-ei, -esti, -ebbe, -emmo, -este, -ebbero",
       hint:"These endings are the same for all three conjugation classes. The double -bb in the third person forms is distinctive."},

      {type:"fb", s:"Marco {1} volentieri la pizza.",
       a:["mangerebbe"],
       opts:["mangerebbe","mangia","mangiare","mangiasse"],
       hint:"Marco would gladly eat pizza. The -iare verb keeps -i in the stem. Third person conditional ending is -ebbe.",
       sSrc:"Marco {1} gladly eat pizza."},

      {type:"mc", q:"Why do the future and conditional share irregular stems?",
       opts:["Italian grammar always links two tenses together","It is simply a coincidence in Italian","They were created at the same time by grammarians","Both evolved from the Latin infinitive plus forms of 'avere'"],
       ans:"Both evolved from the Latin infinitive plus forms of 'avere'",
       hint:"The future used 'habeo' (I have) and the conditional used 'habebam' (I had). Same i... base, different 'a...' form."}
    ]},

    {id:"itv2_u21l3", title:"Usi del condizionale", icon:"💬", xp:15, board:true, steps:[
      {type:"intro", title:"Usi del condizionale",
       desc:"The conditional is not just for hypotheticals. Learn its three main uses: polite requests, wishes and desires, and giving advice. Master these patterns for natural Italian.",
       goals:["Make polite requests with the conditional","Express wishes and unfulfilled desires","Give advice using 'dovresti'"]},

      {type:"teach", trg:"mi piacerebbe", src:"I would like / it would please me", pos:"verb", gender:null,
       note:"Conditional of 'piacere.' 'Mi piacerebbe viaggiare' = I would like to travel.\nMore elegant than 'vorrei' for expressing desires.",
       example:"A: Mi piacerebbe visitare il Giappone.\nB: Anche a me piacerebbe molto.",
       exampleSrc:"A: I would like to visit Japan.\nB: I would like that very much too.",
       funFact:"'Mi piacerebbe' literally means 'it would please me.' It is considered more refined than 'vorrei' (I would want). Using 'piacerebbe' signals sophistication. In formal writing or elegant speech, Italians prefer 'mi piacerebbe' over 'vorrei.'"},

      {type:"teach", trg:"potresti", src:"could you / you could", pos:"verb", gender:null,
       note:"Conditional of 'potere,' tu form. 'Potresti aiutarmi?' = Could you help me?\nThe standard polite request to a peer.",
       example:"A: Potresti chiudere la finestra?\nB: Certo, nessun problema.",
       exampleSrc:"A: Could you close the window?\nB: Of course, no problem.",
       funFact:"'Potresti' versus 'potrebbe': use 'potresti' with someone you address as 'tu' (informal) and 'potrebbe' with someone you address as 'Lei' (formal). This matches the overall tu/Lei politeness system. Even the conditional respects Italian formality levels."},

      {type:"teach", trg:"dovresti", src:"you should / you ought to", pos:"verb", gender:null,
       note:"Conditional of 'dovere,' tu form. For giving friendly advice.\n'Dovresti riposare' = You should rest.",
       example:"A: Dovresti provare questo ristorante.\nB: Davvero? Cosa consiglieresti?",
       exampleSrc:"A: You should try this restaurant.\nB: Really? What would you recommend?",
       funFact:"'Dovresti' is the go-to form for friendly advice in Italian. It is softer than 'devi' (you must). Doctors, friends, and advice columns all use it: 'Dovresti mangiare piu verdura' (You should eat more vegetables). It gives room for the other person to accept or decline."},

      {type:"teach", trg:"al posto tuo", src:"in your place / if I were you", pos:"prep", gender:null,
       note:"Expression. 'Al posto tuo, io...' = If I were you, I...\n'Al suo posto' = in his/her place (formal).",
       example:"A: Al posto tuo, accetterei l'offerta.\nB: Pensi davvero che dovrei accettare?",
       exampleSrc:"A: In your place, I would accept the offer.\nB: Do you really think I should accept?",
       funFact:"'Al posto tuo' is one of the most natural ways to introduce advice with the conditional. It literally means 'at your place.' The full pattern is: 'Al posto tuo + conditional verb.' It avoids sounding preachy while still giving a clear opinion."},

      {type:"teach", trg:"consiglierei", src:"I would recommend / I would advise", pos:"verb", gender:null,
       note:"Conditional of 'consigliare' (to advise). Regular -are.\n'Ti consiglierei di...' = I would advise you to...",
       example:"A: Cosa consiglierei per cena?\nB: Consiglierei il risotto ai funghi.",
       exampleSrc:"A: What would you recommend for dinner?\nB: I would recommend the mushroom risotto.",
       funFact:"'Consigliare' comes from Latin 'consilium' (advice, counsel). The English word 'counsel' shares this root. In Italian restaurants, 'Cosa mi consiglierebbe?' (What would you recommend to me?) is the elegant way to ask the waiter for suggestions."},

      {type:"teach", trg:"desidererei", src:"I would wish / I would desire", pos:"verb", gender:null,
       note:"Conditional of 'desiderare.' Very formal, used in shops and services.\n'Desidererebbe qualcos'altro?' = Would you like anything else?",
       example:"A: Desidererei prenotare un tavolo.\nB: Per quante persone?",
       exampleSrc:"A: I would like to reserve a table.\nB: For how many people?",
       funFact:"'Desiderare' in the conditional is the most formal way to make a request. Upscale restaurants, luxury hotels, and formal business settings use it. Waiters say 'Cosa desidererebbe?' (What would you desire?) as the most elegant version of 'What would you like?'"},

      {type:"teach", trg:"sarebbe meglio", src:"it would be better", pos:"verb", gender:null,
       note:"'Sarebbe meglio + infinitive' = It would be better to...\n'Sarebbe meglio partire presto' = It would be better to leave early.",
       example:"A: Sarebbe meglio studiare insieme.\nB: Hai ragione, ci aiuteremmo a vicenda.",
       exampleSrc:"A: It would be better to study together.\nB: You are right, we would help each other.",
       funFact:"'Sarebbe meglio' is a diplomatic way to suggest improvement without criticizing. In the workplace, 'Sarebbe meglio rivedere il progetto' (It would be better to review the project) sounds constructive rather than negative. Italians often use impersonal conditionals to soften criticism."},

      {type:"tip", title:"Three Uses of the Conditional",
       text:"1. Polite requests: Vorrei un caffe. Potrebbe aiutarmi?\n2. Wishes and desires: Mi piacerebbe viaggiare. Desidererei cambiare lavoro.\n3. Advice: Dovresti riposare. Al posto tuo, accetterei.\n\nThe conditional is never rude. It transforms direct statements into gentle suggestions. Using it makes your Italian sound more natural and considerate.",
       deepDive:{title:"Conditional in Journalism",
        text:"Italian newspapers use the conditional to report unconfirmed news: 'Il presidente sarebbe in ospedale' (The president is reportedly in the hospital). This 'conditional of hearsay' signals that the information is unverified. It is equivalent to English 'allegedly' or 'reportedly.' Reading Italian news, you will see the conditional constantly for this purpose."}},

      // Quiz steps
      {type:"mc", q:"Which is more refined: 'vorrei' or 'mi piacerebbe'?",
       opts:["'Mi piacerebbe' is more elegant","'Vorrei' is the more elegant choice","They are completely identical in register","Neither expression is considered polite"],
       ans:"'Mi piacerebbe' is more elegant",
       hint:"'Mi p...' literally means 'it would please me.' It signals sophistication in formal writing and e... speech."},

      {type:"fb", s:"{1} chiudere la finestra?",
       a:["Potresti"],
       opts:["Potresti","Puoi","Potere","Potrei"],
       hint:"You are politely asking a friend (tu form) to close the window. The conditional of 'potere' for tu.",
       sSrc:"{1} you close the window?"},

      {type:"match", pairs:[
        {trg:"vorrei", src:"I would like (want)"},
        {trg:"mi piacerebbe", src:"I would like (it would please me)"},
        {trg:"dovresti", src:"you should"},
        {trg:"consiglierei", src:"I would recommend"},
        {trg:"sarebbe meglio", src:"it would be better"}
      ]},

      {type:"mc", q:"What does the conditional mean in Italian journalism?",
       opts:["A polite request from the journalist","Unconfirmed or allegedly true information","A hypothetical future event","The journalist's personal wish"],
       ans:"Unconfirmed or allegedly true information",
       hint:"'Il presidente sarebbe in ospedale' signals the news is not yet certain. It is the Italian equivalent of 'sources say' or 'reportedly.'"},

      {type:"fb", s:"Al posto tuo, {1} l'offerta.",
       a:["accetterei"],
       opts:["accetterei","accetto","accettare","accettavo"],
       hint:"You are giving advice: if you were in their place, you would accept. Regular -are conditional.",
       sSrc:"In your place, I {1} the offer."},

      {type:"mc", q:"When do you use 'potresti' versus 'potrebbe'?",
       opts:["They are interchangeable","Potresti in writing, potrebbe in speech","Potresti with tu (informal), potrebbe with Lei (formal)","Potresti for questions, potrebbe for statements"],
       ans:"Potresti with tu (informal), potrebbe with Lei (formal)",
       hint:"Think of who you are addressing: a friend or a stranger. Italian respects the same two-tier system in every tense, including the conditional."},

      {type:"fb", s:"{1} meglio partire presto.",
       a:["Sarebbe"],
       opts:["Sarebbe","E","Sara","Sia"],
       hint:"It would be better to leave early. This impersonal conditional of 'essere' softens the suggestion diplomatically.",
       sSrc:"It {1} better to leave early."},

      {type:"mc", q:"What is the full pattern for giving advice without sounding preachy?",
       opts:["Bisogna + an infinitive verb form","Secondo me + an indicative verb form","Penso che + a subjunctive verb form","Al posto tuo + conditional verb"],
       ans:"Al posto tuo + conditional verb",
       hint:"'If I were in your situation...' introduces advice diplomatically. The structure uses a position expression followed by a hypothetical mood."}
    ]}
  ]
};
export default UNIT_21;
