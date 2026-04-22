// Unit 21 Expansion. Lesson 4: Richieste gentili
const LESSON_4 = {
  id:"itv2_u21l4", title:"Richieste gentili", icon:"🙏", xp:15, board:true,
  steps:[
    {type:"intro", title:"Richieste gentili",
     desc:"Master the conditional for polite requests in everyday situations. From ordering food to asking for directions, the conditional transforms direct demands into gracious requests.",
     goals:["Make polite requests in shops, restaurants, and offices","Soften direct questions with the conditional","Use formal and informal polite forms correctly"]},

    {type:"teach", trg:"vorremmo", src:"we would like", pos:"verb", gender:null,
     note:"Conditional of 'volere,' noi form. Irregular stem: vorr-.\n'Vorremmo prenotare' = We would like to book.",
     example:"A: Vorremmo un tavolo per due, per favore.\nB: Certo, seguitemi.",
     exampleSrc:"A: We would like a table for two, please.\nB: Of course, follow me.",
     funFact:"'Vorremmo' is essential for couples and groups. In restaurants, starting with 'vorremmo' signals you are a polite, considerate customer. Italian waiters notice and respond to politeness levels. Some restaurants even adjust their service based on how politely you order."},

    {type:"teach", trg:"potrebbe", src:"could you (formal) / he/she could", pos:"verb", gender:null,
     note:"Conditional of 'potere,' Lei/lui/lei form. Irregular stem: potr-.\n'Potrebbe ripetere?' = Could you repeat that?",
     example:"A: Potrebbe indicarmi la strada per il Duomo?\nB: Certo, vada dritto e poi a sinistra.",
     exampleSrc:"A: Could you point me to the way to the Cathedral?\nB: Of course, go straight and then left.",
     funFact:"'Potrebbe' is the formal polite request. Use it with strangers, officials, and anyone you address as 'Lei.' 'Potrebbe dirmi...' (Could you tell me...) is the standard opener for asking directions, information, or help in any Italian city. It is the verbal key that unlocks Italian courtesy."},

    {type:"teach", trg:"le dispiacerebbe", src:"would you mind (formal)", pos:"verb", gender:null,
     note:"Conditional of 'dispiacere' with 'Le' (formal). Very polite.\n'Le dispiacerebbe...?' = Would you mind...?",
     example:"A: Le dispiacerebbe abbassare la voce?\nB: Oh, mi scusi! Non me ne ero accorto.",
     exampleSrc:"A: Would you mind lowering your voice?\nB: Oh, excuse me! I had not noticed.",
     funFact:"'Le dispiacerebbe' is one of the most elegant request forms in Italian. It is softer than 'potrebbe' because it appeals to the other person's willingness. 'Ti dispiacerebbe?' is the informal version for friends. This construction is used in formal workplaces and high-end service environments."},

    {type:"teach", trg:"sarebbe possibile", src:"would it be possible", pos:"verb", gender:null,
     note:"Impersonal conditional. 'Sarebbe possibile avere...' = Would it be possible to have...",
     example:"A: Sarebbe possibile cambiare la camera?\nB: Vedo cosa posso fare.",
     exampleSrc:"A: Would it be possible to change the room?\nB: Let me see what I can do.",
     funFact:"'Sarebbe possibile' removes the personal element entirely, making it the safest polite request. You are not asking someone to do something; you are asking if reality allows it. Hotels, airlines, and official offices all respond well to this impersonal diplomacy. It never sounds demanding."},

    {type:"teach", trg:"mi farebbe un favore", src:"would you do me a favor", pos:"verb", gender:null,
     note:"Conditional of 'fare' with indirect object. 'Mi faresti un favore?' = informal.\n'Mi farebbe un favore?' = formal.",
     example:"A: Mi faresti un favore? Potresti prestarmi il libro?\nB: Certo, nessun problema.",
     exampleSrc:"A: Would you do me a favor? Could you lend me the book?\nB: Of course, no problem.",
     funFact:"'Fare un favore' (to do a favor) is central to Italian social exchange. Favors build relationships and create reciprocal obligations. 'Mi devi un favore' (You owe me a favor) is said with a smile. The network of mutual favors ('scambio di favori') is how Italian communities function."},

    {type:"teach", trg:"gradirei", src:"I would appreciate / I would like (formal)", pos:"verb", gender:null,
     note:"Conditional of 'gradire' (to appreciate/welcome). Very formal.\n'Gradirei un caffe' = I would appreciate a coffee.",
     example:"A: Gradirei ricevere una risposta al piu presto.\nB: Provvedero immediatamente.",
     exampleSrc:"A: I would appreciate receiving a reply as soon as possible.\nB: I will see to it immediately.",
     funFact:"'Gradire' is the most formal verb for expressing a wish. In formal letters and emails, 'Gradirei' replaces 'vorrei.' 'Gradito/a' (welcome, appreciated) appears on invitations: 'La Sua presenza e gradita' (Your presence is welcome). This register belongs to business correspondence and official communication."},

    {type:"teach", trg:"avrei bisogno di", src:"I would need", pos:"verb", gender:null,
     note:"Conditional of 'avere' + 'bisogno di.' Polite way to state a need.\n'Avrei bisogno di un'informazione' = I would need some information.",
     example:"A: Avrei bisogno di parlare con il responsabile.\nB: Un attimo, lo chiamo subito.",
     exampleSrc:"A: I would need to speak with the person in charge.\nB: One moment, I will call him right away.",
     funFact:"'Avrei bisogno di' is the polite alternative to 'Ho bisogno di' (I need). The conditional transforms a direct statement of need into a diplomatic request. In pharmacies, offices, and service counters, starting with 'Avrei bisogno di...' gets you better service than demanding 'Ho bisogno di...'"},

    {type:"teach", trg:"mi consiglierebbe", src:"would you recommend to me (formal)", pos:"verb", gender:null,
     note:"Conditional of 'consigliare' with 'mi' and Lei form.\n'Cosa mi consiglierebbe?' = What would you recommend?",
     example:"A: Cosa mi consiglierebbe come secondo?\nB: Le consiglierei l'ossobuco, e la specialita.",
     exampleSrc:"A: What would you recommend as a main course?\nB: I would recommend the ossobuco, it is the specialty.",
     funFact:"'Cosa mi consiglierebbe?' is the gold standard question in Italian restaurants. It shows respect for the waiter's expertise and often leads to the best dishes. Italian waiters take pride in their knowledge of the menu. Using the conditional here versus 'Cosa mi consiglia?' adds a layer of elegant deference."},

    {type:"tip", title:"Formality Ladder: Polite Requests",
     text:"From most casual to most formal:\n\n1. Puoi...? (Can you? informal)\n2. Potresti...? (Could you? informal conditional)\n3. Potrebbe...? (Could you? formal conditional)\n4. Le dispiacerebbe...? (Would you mind? formal)\n5. Sarebbe possibile...? (Would it be possible? impersonal)\n6. Gradirei... (I would appreciate... written formal)\n\nChoose your level based on who you are speaking to and the setting.",
     deepDive:{title:"When Italians Switch Registers",
      text:"Italians switch between formal and informal registers fluidly. A shop owner might start formal with a new customer ('Cosa desidera?') and shift to informal once rapport is built ('Cosa ti serve?'). Age, social setting, and regional norms all affect the switch. In general, start formal and wait for the other person to suggest 'tu.'"}},

    // Quiz steps
    {type:"mc", q:"What is the most elegant way to ask for something in a formal setting?",
     opts:["Sarebbe possibile avere...? (Would it be possible to have...?)","Ho bisogno di (I need)","Voglio questo (I want this)","Dammi quello (Give me that)"],
     ans:"Sarebbe possibile avere...? (Would it be possible to have...?)",
     hint:"This impersonal form removes any sense of demanding. You are asking if reality allows it, not telling someone to do it."},

    {type:"fb", s:"{1} indicarmi la strada per il Duomo?",
     a:["Potrebbe"],
     opts:["Potrebbe","Puo","Potere","Potremo"],
     hint:"A formal polite request to a stranger (Lei form). The conditional of 'potere' in the third person singular.",
     sSrc:"{1} you point me to the way to the Cathedral?"},

    {type:"match", pairs:[
      {trg:"vorremmo", src:"we would like"},
      {trg:"potrebbe", src:"could you (formal)"},
      {trg:"le dispiacerebbe", src:"would you mind (formal)"},
      {trg:"gradirei", src:"I would appreciate (very formal)"},
      {trg:"avrei bisogno di", src:"I would need"}
    ]},

    {type:"mc", q:"When should you use 'potrebbe' instead of 'potresti'?",
     opts:["When writing text messages casually","When addressing strangers, officials, or elders (Lei)","When speaking very quickly in informal settings","When speaking to friends and family"],
     ans:"When addressing strangers, officials, or elders (Lei)",
     hint:"'Potrebbe' matches the formal 'L...' pronoun. 'Potresti' matches the informal 'tu.' Start formal with unknown people."},

    {type:"fb", s:"{1} un tavolo per due, per favore.",
     a:["Vorremmo"],
     opts:["Vorremmo","Vogliamo","Volere","Volevamo"],
     hint:"We would like a table. The noi conditional of 'volere' is the polite opener for groups at restaurants.",
     sSrc:"We {1} a table for two, please."},

    {type:"mc", q:"What makes 'Le dispiacerebbe...?' so polite?",
     opts:["It includes a formal greeting before the request","It uses the future tense showing planning","It appeals to the other person's willingness rather than ability","It is louder and shows confidence"],
     ans:"It appeals to the other person's willingness rather than ability",
     hint:"Instead of asking 'Can you?' it asks 'Would it bother you?' This subtly puts the o... p... in control."},

    {type:"fb", s:"Cosa mi {1} come secondo?",
     a:["consiglierebbe"],
     opts:["consiglierebbe","consiglia","consigliare","consiglio"],
     hint:"The formal conditional asking a waiter for their recommendation. Shows respect for their expertise about the menu.",
     sSrc:"What {1} you recommend as a main course?"},

    {type:"mc", q:"What is the general rule for choosing tu vs. Lei in Italy?",
     opts:["Use tu in the morning and Lei in the evening","Always use tu with everyone","Always use Lei with everyone","Start formal (Lei) and wait for the other person to suggest tu"],
     ans:"Start formal (Lei) and wait for the other person to suggest tu",
     hint:"Age, setting, and regional norms matter. The safe approach is to begin with courtesy and let familiarity develop naturally."}
  ]
};
export default LESSON_4;
