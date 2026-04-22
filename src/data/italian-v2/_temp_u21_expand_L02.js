// Unit 21 Expansion. Lesson 5: Situazioni ipotetiche
const LESSON_5 = {
  id:"itv2_u21l5", title:"Situazioni ipotetiche", icon:"🌟", xp:15, board:true,
  steps:[
    {type:"intro", title:"Situazioni ipotetiche",
     desc:"Use the conditional to explore hypothetical situations, dreams, and imagined scenarios. Italians love 'what if' conversations, and the conditional is the key that opens them.",
     goals:["Describe hypothetical life scenarios","Express dreams and unfulfilled wishes","Discuss imagined alternatives to reality"]},

    {type:"teach", trg:"andrei", src:"I would go", pos:"verb", gender:null,
     note:"Conditional of 'andare.' Irregular stem: andr-.\n'Andrei in Italia' = I would go to Italy.",
     example:"A: Dove andresti in vacanza?\nB: Andrei in Sardegna. E bellissima.",
     exampleSrc:"A: Where would you go on vacation?\nB: I would go to Sardinia. It is beautiful.",
     funFact:"'Andare' has the irregular conditional stem 'andr-,' shared with the future (andro, andrai). The hypothetical travel question 'Dove andresti?' is one of the most popular Italian conversation starters. Italians love discussing dream destinations and comparing travel fantasies."},

    {type:"teach", trg:"vivrei", src:"I would live", pos:"verb", gender:null,
     note:"Conditional of 'vivere.' Regular stem: vivr- (drop -e, add endings).\n'Vivrei al mare' = I would live by the sea.",
     example:"A: Vivrei volentieri all'estero.\nB: Dove vivresti? In quale paese?",
     exampleSrc:"A: I would gladly live abroad.\nB: Where would you live? In which country?",
     funFact:"'Dove vivresti?' (Where would you live?) reveals a lot about Italian values. Many answer 'al mare' (by the sea) or 'in campagna' (in the countryside). Despite Italy's beauty, many young Italians say they would live abroad for better job opportunities, reflecting the tension between love of home and economic reality."},

    {type:"teach", trg:"comprerei", src:"I would buy", pos:"verb", gender:null,
     note:"Conditional of 'comprare.' Regular -are: comprer- + endings.\nNote the -a to -e shift.",
     example:"A: Cosa compreresti con un milione di euro?\nB: Comprerei una casa al mare.",
     exampleSrc:"A: What would you buy with a million euros?\nB: I would buy a house by the sea.",
     funFact:"'Cosa compreresti con un milione?' is a classic Italian daydream game. The most popular answer is 'una casa' (a home), reflecting Italy's strong home-ownership culture. Over 70% of Italians own their home. 'La casa' is not just property; it is identity, family legacy, and emotional anchor."},

    {type:"teach", trg:"cambierei", src:"I would change", pos:"verb", gender:null,
     note:"Conditional of 'cambiare.' Regular -are: cambier- + endings.\n'Non cambierei niente' = I would not change anything.",
     example:"A: Cosa cambieresti della tua vita?\nB: Non cambierei niente. Sono contento.",
     exampleSrc:"A: What would you change about your life?\nB: I would not change anything. I am happy.",
     funFact:"'Non cambierei niente' (I would not change anything) is a powerful statement of contentment. Italians value 'il bel vivere' (the good life) and expressing satisfaction with one's choices. When someone says 'Rifarei tutto' (I would do it all again), it signals deep peace with their life path."},

    {type:"teach", trg:"darei", src:"I would give", pos:"verb", gender:null,
     note:"Conditional of 'dare.' Irregular stem: dar-.\n'Darei tutto per...' = I would give everything for...",
     example:"A: Cosa daresti per realizzare il tuo sogno?\nB: Darei tutto. E il mio sogno da sempre.",
     exampleSrc:"A: What would you give to realize your dream?\nB: I would give everything. It has been my dream forever.",
     funFact:"'Dare' keeps a short stem in the conditional: dar- (like far- for 'fare'). 'Darei la mia parola' (I would give my word) is a solemn promise. In Italian culture, 'la parola data' (the given word) carries the weight of a contract. Breaking your word is a serious social offense."},

    {type:"teach", trg:"direi", src:"I would say", pos:"verb", gender:null,
     note:"Conditional of 'dire.' Irregular stem: dir-.\n'Direi di si' = I would say yes.",
     example:"A: Pensi che funzionerebbe?\nB: Direi di si, vale la pena provare.",
     exampleSrc:"A: Do you think it would work?\nB: I would say yes, it is worth trying.",
     funFact:"'Direi' is the go-to hedge in Italian conversation. 'Direi di si' (I would say yes) is less committal than 'Si' (Yes). 'Direi che...' (I would say that...) introduces an opinion softly. Politicians and diplomats use 'direi' constantly to avoid firm commitments while sounding thoughtful."},

    {type:"teach", trg:"saprei", src:"I would know / I would know how to", pos:"verb", gender:null,
     note:"Conditional of 'sapere.' Irregular stem: sapr-.\n'Non saprei cosa dire' = I would not know what to say.",
     example:"A: Sapresti cucinare un risotto?\nB: Non saprei, non l'ho mai fatto.",
     exampleSrc:"A: Would you know how to cook a risotto?\nB: I would not know, I have never done it.",
     funFact:"'Non saprei' (I would not know) is a polite way to express uncertainty. It is softer than 'Non lo so' (I do not know). 'Saprei' also means 'I would be able to' in the sense of skill: 'Sapresti guidare un camion?' (Would you know how to drive a truck?). The conditional adds humility."},

    {type:"teach", trg:"terrei", src:"I would keep / I would hold", pos:"verb", gender:null,
     note:"Conditional of 'tenere.' Irregular stem: terr-.\n'Terrei questo' = I would keep this.",
     example:"A: Quale vestito terresti?\nB: Terrei quello blu, mi sta meglio.",
     exampleSrc:"A: Which dress would you keep?\nB: I would keep the blue one, it fits me better.",
     funFact:"'Tenere' has a doubled-r conditional stem: terr-. In Southern Italian dialect, 'tenere' often replaces 'avere': 'Tengo fame' (I have hunger) instead of 'Ho fame.' The conditional 'terrei' is common in shopping decisions and life choices: 'Terrei il lavoro vecchio' (I would keep the old job)."},

    // Quiz steps
    {type:"mc", q:"What is the irregular conditional stem of 'andare'?",
     opts:["andr-","ander-","and-","andar-"],
     ans:"andr-",
     hint:"Shared with the future tense (andro, andrai, andra). All six conditional forms use this stem: andrei, andresti, andrebbe..."},

    {type:"fb", s:"Dove {1} in vacanza?",
     a:["andresti"],
     opts:["andresti","vai","andrai","andassi"],
     hint:"A hypothetical travel question. The tu conditional of 'andare' uses the irregular stem andr- plus -esti.",
     sSrc:"Where {1} you go on vacation?"},

    {type:"match", pairs:[
      {trg:"andrei", src:"I would go"},
      {trg:"vivrei", src:"I would live"},
      {trg:"comprerei", src:"I would buy"},
      {trg:"darei", src:"I would give"},
      {trg:"direi", src:"I would say"}
    ]},

    {type:"mc", q:"What does 'Direi di si' express?",
     opts:["A firm and absolute yes without doubt","A soft, hedged agreement (I would say yes)","A definite refusal to participate","A question asking for confirmation"],
     ans:"A soft, hedged agreement (I would say yes)",
     hint:"'Direi' turns a firm statement into a thoughtful, uncommitted opinion. Politicians and diplomats use it constantly."},

    {type:"fb", s:"Cosa {1} con un milione di euro?",
     a:["compreresti"],
     opts:["compreresti","compri","comprai","comprassi"],
     hint:"A classic Italian daydream question. Regular -are conditional with the vowel shift: comprare > comprer- + esti.",
     sSrc:"What {1} you buy with a million euros?"},

    {type:"mc", q:"What is the most popular answer to 'Cosa compreresti con un milione?'",
     opts:["A luxury car collection","A yacht for Mediterranean sailing","A house (reflecting Italy's strong home-ownership culture)","Designer clothing and accessories"],
     ans:"A house (reflecting Italy's strong home-ownership culture)",
     hint:"Over 70% of Italians own their h.... 'La casa' represents identity, family legacy, and emotional roots."},

    {type:"fb", s:"Non {1} cosa dire.",
     a:["saprei"],
     opts:["saprei","so","sapere","sapessi"],
     hint:"You would not know what to say. The conditional of 'sapere' uses the irregular stem sapr-. Softer than 'Non lo so.'",
     sSrc:"I {1} not know what to say."},

    {type:"mc", q:"Why does 'tenere' have a doubled-r in the conditional?",
     opts:["It distinguishes it from the present tense form","It is a spelling error that became standard over time","All -ere verbs double the final consonant in the conditional","It preserves the irregular future stem terr-"],
     ans:"It preserves the irregular future stem terr-",
     hint:"Like the f... (terro, terrai), the conditional shares the same doubled-r s.... F... and conditional always share stems."}
  ]
};
export default LESSON_5;
