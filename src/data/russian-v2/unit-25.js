// Russian V2 Unit 25 — Society and Values (B2.1)
const UNIT_25 = {n:25, lang:"ru", srcLang:"en", track:"v2", title:"Общество и ценности", sub:"Society and Values",
 icon:"⚖️", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u25l1", title:"Social Values", icon:"⚖️", xp:15, board:true, steps:[

{type:"intro", title:"Society and Values",
 desc:"B2 vocabulary for discussing social issues, rights, responsibilities. Russia has rich intellectual tradition on these topics.",
 goals:["Discuss social values","Use abstract nouns","Express opinions on society"]},

{type:"teach", trg:"общество", src:"society", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nRelated: общий (common), общение (communication).",
 example:"A: Современное общество.\nB: Быстро меняется.",
 exampleSrc:"A: Modern society.\nB: Changes quickly.",
 funFact:"Общество from общий (common/shared). Russian concept of society emphasizes collective over individual, historically."},

{type:"teach", trg:"равенство", src:"equality", pos:"noun", gender:"n",
 note:"Neuter. Abstract concept.\nFrom равный (equal).",
 example:"A: Равенство важно.\nB: Согласна.",
 exampleSrc:"A: Equality is important.\nB: I agree.",
 funFact:"Abstract nouns ending in -ство are usually neuter: общество, равенство, государство, мужество (courage). A productive Russian suffix pattern."},

{type:"teach", trg:"свобода", src:"freedom", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nCentral concept in Russian thought.",
 example:"A: Свобода важна?\nB: Да, очень.",
 exampleSrc:"A: Is freedom important?\nB: Yes, very much.",
 funFact:"Свобода has weighty political associations in Russia. Soviet dissidents struggled for it. Today the word retains weight beyond everyday English 'freedom.'"},

{type:"teach", trg:"справедливость", src:"justice / fairness", pos:"noun", gender:"f",
 note:"Feminine. -ость suffix for abstract concepts.\nFrom справедливый (fair).",
 example:"A: Справедливость важна?\nB: Да, это важно.",
 exampleSrc:"A: Is justice important?\nB: Yes, it's important.",
 funFact:"Russian -ость suffix creates abstract feminine nouns: справедливость, свобода, честность (honesty), доброта (kindness). Native Russian abstractions."},

{type:"teach", trg:"право", src:"right / law", pos:"noun", gender:"n",
 note:"Neuter. TWO meanings: legal right AND direction (right vs left).\nКонтекст clarifies.",
 example:"A: У каждого есть право на образование.\nB: Конечно.",
 exampleSrc:"A: Everyone has the right to education.\nB: Of course.",
 funFact:"Право means 'right' (political), 'right' (direction), AND 'law.' All three meanings in Russian. 'Право на жизнь' (right to life), 'направо' (to the right), 'изучать право' (study law)."},

{type:"teach", trg:"ответственность", src:"responsibility", pos:"noun", gender:"f",
 note:"Feminine. -ость ending.\nОт + ответ (response) = respond + -ness.",
 example:"A: Брать на себя ответственность.\nB: Это важно.",
 exampleSrc:"A: To take on responsibility.\nB: That's important.",
 funFact:"Ответственность literally 'response-ness' — from ответ (answer). Taking responsibility = 'брать на себя' (taking onto oneself). Elegant compound."},

{type:"teach", trg:"проблема", src:"problem / issue", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\nCommon in daily and political discourse.",
 example:"A: Это проблема?\nB: Да, это проблема.",
 exampleSrc:"A: Is this a problem?\nB: Yes, this is a problem.",
 funFact:"Проблема is the universal word for any issue. Russians use it for small daily problems and big political ones. 'Это не проблема' (no problem) is common."},

{type:"tip", title:"Abstract Nouns in Russian",
 text:"ABSTRACT NOUN SUFFIXES:\n\n-ство (NEUTER): общество, равенство, большинство.\n-ость (FEMININE): справедливость, ответственность, свобода.\n-ние (NEUTER): образование, мнение, решение.\n-ие (NEUTER): условие, участие.\n\nB2 LEVEL INCLUDES ABSTRACT CONCEPTS:\n• Political: права, свобода, власть (power).\n• Social: общество, семья, воспитание.\n• Personal: характер, привычка (habit), мечта (dream).\n• Ethical: честность, доброта, справедливость.\n\nABSTRACT NOUNS TAKE CASES LIKE CONCRETE NOUNS.\n'Я думаю об общественности.' (I think about society.)\n'Нет справедливости.' (There's no justice.)\n\nMASTER THE SUFFIXES.\nRecognizing -ость, -ство, -ние helps you predict meaning and gender for new vocabulary.",
 icon:"⚖️"},

{type:"mc", q:"Nouns ending in -ство are usually which gender?",
 opts:["Masculine","Feminine","Neuter","Common"],
 ans:"Neuter",
 hint:"-ство ends in -о, a ___ ending. Общество, равенство, государство."},

{type:"mc", q:"'Ответственность' is formed from:",
 opts:["ответ + -ственность","ответ + -ность","отвечать + -ность","-свобода"],
 ans:"ответ + -ственность",
 hint:"Based on 'ответ' (answer/response). Abstract -ственность suffix creates responsibility."},

{type:"fb", s:"Современное {1} сталкивается с многими проблемами.",
 a:["общество"],
 opts:["общество","свобода","справедливость","проблема"],
 hint:"What 'faces many problems' — the aggregate of people.",
 sSrc:"Modern society faces many problems."},

{type:"match", pairs:[
  {trg:"общество", src:"society"},
  {trg:"свобода", src:"freedom"},
  {trg:"справедливость", src:"justice"},
  {trg:"право", src:"right/law"},
  {trg:"ответственность", src:"responsibility"}
]}
,{type:"match",pairs:[{trg:"равенство",src:"equality"},{trg:"проблема",src:"problem / issue"}]}]},

{id:"ruv2_u25l2_sign", title:"Личное значение", icon:"💭", xp:15, board:true, steps:[

{type:"intro", title:"Writing About Personal Significance",
 desc:"Learn to write about meaningful experiences, memories, and values in Russian. Essential for TRKI B2 autobiographical writing and personal reflections.",
 goals:["Express what matters to you","Reflect on formative memories","Describe your personal values"]},

{type:"teach", trg:"значить", src:"to mean / to signify", pos:"verb", gender:null,
 note:"Imperfective. Conjugates: значит, значат.\nUsed for stating meaning or importance.",
 example:"A: Что это значит для тебя?\nB: Это значит очень много.",
 exampleSrc:"A: What does this mean to you?\nB: It means a great deal.",
 funFact:"Значить shares its root with знак (sign/symbol) and знакомый (acquaintance). All trace to Proto-Slavic *znati (to know). When you say что-то значит, you are literally asking what it signals."},

{type:"teach", trg:"воспоминание", src:"memory (a specific recollection)", pos:"noun", gender:"n",
 note:"Neuter. Plural: воспоминания.\nFrom воспоминать (to recall).",
 example:"A: Это воспоминание важно для меня.\nB: Да, я понимаю.",
 exampleSrc:"A: This memory is important to me.\nB: Yes, I understand.",
 funFact:"Воспоминание versus память: память is the faculty of memory (abstract), воспоминание is a specific memory or recollection. Russian distinguishes the capacity from the content, just as English 'memory' can mean both."},

{type:"teach", trg:"эмоция", src:"emotion", pos:"noun", gender:"f",
 note:"Feminine. Latin loanword via French.\nUsed in modern psychology and everyday speech.",
 example:"A: Эмоция важна для тебя?\nB: Да, эмоция очень важна.",
 exampleSrc:"A: Is emotion important to you?\nB: Yes, emotion is very important.",
 funFact:"Эмоция entered Russian through European influence in the 19th century. Before that, Russians described inner states through душа (soul) and сердце (heart). Modern Russian uses both: эмоция for the clinical and душевное состояние for the poetic."},

{type:"teach", trg:"ценность", src:"value (something important)", pos:"noun", gender:"f",
 note:"Feminine. Abstract -ость noun.\nFrom ценный (valuable), price-related root.",
 example:"A: Свобода является ценностью.\nB: Да, важной ценностью.",
 exampleSrc:"A: Freedom is a value.\nB: Yes, an important value.",
 funFact:"Ценность comes from цена (price, worth). What has ценность is literally priceless, beyond market exchange. The same root appears in бесценный (priceless) and переоценить (to revalue/overvalue)."},

{type:"teach", trg:"незабываемый", src:"unforgettable", pos:"adj", gender:null,
 note:"Long-form adjective. Agrees in gender and case.\nне + забывать (to forget) = not-forgettable.",
 example:"A: Это был незабываемый день.\nB: Да, незабываемый.",
 exampleSrc:"A: It was an unforgettable day.\nB: Yes, unforgettable.",
 funFact:"Russian builds many adjectives with не- (not) + verbal root + -емый/-имый. Незабываемый, незаменимый (irreplaceable), невероятный (incredible). The suffix -емый/-имый indicates a passive quality: the thing that cannot be done to it."},

{type:"teach", trg:"тронуть", src:"to touch / to move emotionally", pos:"verb", gender:null,
 note:"Perfective. Imperfective: трогать.\nLiterally touch; figuratively: emotionally moved.",
 example:"A: Это может тронуть тебя.\nB: Да, меня легко тронуть.",
 exampleSrc:"A: This can move you emotionally.\nB: Yes, I am easily moved.",
 funFact:"Тронуть is perfective: the emotional impact is complete. Трогать (imperfective) describes the ongoing process. In Russian literature, readers are often тронуты (moved) by a scene. The physical and emotional meanings coexist elegantly."},

{type:"teach", trg:"формировать", src:"to form / to shape (character, values)", pos:"verb", gender:null,
 note:"Imperfective. Latin root forma via German.\nUsed for gradual, long-term shaping.",
 example:"A: Семья формирует ценность.\nB: Да, ценность важна.",
 exampleSrc:"A: Family shapes one's values.\nB: Yes, values are important.",
 funFact:"Формировать is a Europeanism, borrowed via French/German. Russians also use воспитывать (to raise/cultivate) for shaping character, which implies moral guidance. Формировать is more neutral and academic; воспитывать implies intentional parenting or education."},

{type:"tip", title:"Personal Writing in Russian",
 text:"B2 AUTOBIOGRAPHICAL WRITING: KEY PATTERNS\n\nEXPRESSING MEANING:\n'Это значит для меня очень много.' (This means a great deal to me.)\n'Это имеет большое значение.' (This has great significance.)\n\nREFLECTING ON MEMORIES:\n'Я с теплом вспоминаю...' (I warmly recall...)\n'Это незабываемое воспоминание.' (This is an unforgettable memory.)\n\nSTATING VALUES:\n'Для меня самая важная ценность: ...' (For me the most important value is...)\n'Свобода и справедливость являются моими главными ценностями.' (Freedom and justice are my core values.)\n\nEXPRESSING EMOTIONAL IMPACT:\n'Это тронуло меня.' (This moved me.)\n'Эта книга тронула меня до глубины души.' (This book moved me to the depths of my soul.)\n\nTRKI B2 TIP:\nExaminers reward specificity. Name the воспоминание. Say why it is незабываемый. Explain what ценность it formed. Vague reflection scores lower than precise personal detail.",
 icon:"💭"},

{type:"mc", q:"What does 'тронуть' mean in an emotional context?",
 opts:["to form gradually","to move emotionally","to recollect a memory","to signify importance"],
 ans:"to move emotionally",
 hint:"Related to physical touch. Emotions land when something reaches you deeply."},

{type:"mc", q:"Which suffix pattern creates 'незабываемый'?",
 opts:["не- + verb root + -емый","без- + noun + -ный","по- + adj + -ый","вос- + noun + -ие"],
 ans:"не- + verb root + -емый",
 hint:"Think: not (не-) + the action of forgetting (забывать) + a passive-quality suffix (-емый)."},

{type:"fb", s:"Это особое {1}, которое я не могу забыть.",
 a:["воспоминание"],
 opts:["воспоминание","ценность","эмоция","значить"],
 hint:"A specific recollection you hold dear. Neuter noun ending in -ние.",
 sSrc:"This is a special memory that I cannot forget."},

{type:"fb", s:"Это {1} важна для каждого.",
 a:["ценность"],
 opts:["ценность","эмоция","воспоминание","значить"],
 hint:"An abstract feminine noun for what matters most. Predicate position uses nominative.",
 sSrc:"This value is important to everyone."},

{type:"fb", s:"Что это может {1} для тебя?",
 a:["значить"],
 opts:["значить","тронуть","формировать","воспоминание"],
 hint:"The infinitive of a verb meaning 'to mean or signify'. Ends in -ть.",
 sSrc:"What could this mean to you?"},

{type:"match", pairs:[
  {trg:"значить", src:"to mean / to signify"},
  {trg:"воспоминание", src:"memory (a specific recollection)"},
  {trg:"эмоция", src:"emotion"},
  {trg:"ценность", src:"value (something important)"},
  {trg:"незабываемый", src:"unforgettable"}
]},

{type:"match", pairs:[
  {trg:"тронуть", src:"to touch / to move emotionally"},
  {trg:"формировать", src:"to form / to shape (character, values)"}
]}

]}

,{id:"ruv2_u25l_disp", title:"Разрешение конфликтов", icon:"🤝", xp:15, board:true, steps:[

{type:"intro", title:"Resolving Disputes and Mediating",
 desc:"Learn to mediate conflicts diplomatically in Russian: expressing disagreement politely, proposing compromises, and restoring trust. Essential for TRKI B2 speaking and professional communication.",
 goals:["Express disagreement politely","Propose compromises","Use diplomatic Russian in conflict situations"]},

{type:"teach", trg:"конфликт", src:"conflict", pos:"noun", gender:"m",
 note:"Masculine. Latin loanword via French/German.\nConflict between people, ideas, or states.",
 example:"A: Как решить конфликт?\nB: Нужно говорить.",
 exampleSrc:"A: How do you resolve a conflict?\nB: You need to talk.",
 funFact:"Конфликт entered Russian in the 19th century. Russian has a rich vocabulary for interpersonal tension: конфликт (formal), ссора (quarrel), спор (argument/debate). Each implies a different register and intensity."},

{type:"teach", trg:"компромисс", src:"compromise", pos:"noun", gender:"m",
 note:"Masculine. International loanword.\nAgreement reached by both sides conceding something.",
 example:"A: Надо найти компромисс.\nB: Да, компромисс важен.",
 exampleSrc:"A: We need to find a compromise.\nB: Yes, a compromise is important.",
 funFact:"Компромисс is from Latin compromissum (mutual promise). In Russian political discourse, finding компромисс is seen as a pragmatic virtue. The word is used in business, diplomacy, and everyday disputes equally."},

{type:"teach", trg:"недоразумение", src:"misunderstanding", pos:"noun", gender:"n",
 note:"Neuter. Prefix недо- (under/insufficient) + разумение (understanding).\nA misunderstanding, not a true conflict.",
 example:"A: Это недоразумение.\nB: Да, не конфликт.",
 exampleSrc:"A: This is a misunderstanding.\nB: Yes, not a conflict.",
 funFact:"Недоразумение literally means 'under-understanding' — the prefix недо- signals insufficiency. Compare: недосыпание (sleep deprivation), недооценка (underestimation). Russians often use недоразумение to de-escalate, framing the issue as a failure to understand rather than a personal attack."},

{type:"teach", trg:"решать / решить", src:"to resolve / to solve (imperfective / perfective)", pos:"verb", gender:null,
 note:"Aspect pair: решать (ongoing process), решить (completed action).\nBoth B2 productive verbs.",
 example:"A: Мы хотим решить проблему.\nB: Решайте вместе.",
 exampleSrc:"A: We want to solve the problem.\nB: Resolve it together.",
 funFact:"Решать / решить shares its root with решение (decision/solution). The verb is used for solving problems, making decisions, and passing verdicts. In mathematics, you решаете задачу (solve a problem); in conflict, you решаете спор (settle a dispute). Same verb, vast semantic range."},

{type:"teach", trg:"посредничать", src:"to mediate", pos:"verb", gender:null,
 note:"Imperfective. No perfective counterpart in common use.\nPosrednik = mediator (посредник).",
 example:"A: Кто может посредничать?\nB: Я готов помочь.",
 exampleSrc:"A: Who can mediate?\nB: I am ready to help.",
 funFact:"Посредничать comes from посредник (intermediary), which comes from среди (among/amidst) + средство (means). The mediator stands literally in the middle. In Russian business law, посредничество (mediation) is a formal legal procedure used before court arbitration."},

{type:"teach", trg:"извиниться", src:"to apologize", pos:"verb", gender:null,
 note:"Perfective reflexive. Imperfective: извиняться.\n-ся marks the action directed at oneself: excuse oneself.",
 example:"A: Надо извиниться.\nB: Да, это важно.",
 exampleSrc:"A: You need to apologize.\nB: Yes, that's important.",
 funFact:"Извиниться literally means 'to excuse oneself out of the situation' — from вина (guilt/fault) + из- (out of) + -ся (reflexive). Russians use извини (informal) or извините (formal/plural) as casual apologies for minor inconveniences, but извиниться as a verb implies a sincere, deliberate act of repair."},

{type:"teach", trg:"простить", src:"to forgive", pos:"verb", gender:null,
 note:"Perfective. Imperfective: прощать.\nSimple imperative: прости (informal), простите (formal).",
 example:"A: Вы можете простить меня?\nB: Да, прощу.",
 exampleSrc:"A: Can you forgive me?\nB: Yes, I'll forgive you.",
 funFact:"Простить is from the same root as простой (simple) — forgiveness makes things simple again, removes complexity. Прощай / прощайте (goodbye, farewell) shares this root: you forgive someone as you part. Прощёное воскресенье (Forgiveness Sunday) is the last Sunday before Lent in Orthodox tradition, when Russians ask forgiveness from everyone they know."},

{type:"tip", title:"Diplomatic Russian in Conflict Situations",
 text:"KEY PATTERNS FOR CONFLICT RESOLUTION:\n\nEXPRESSING DISAGREEMENT POLITELY:\n'Я понимаю вашу точку зрения, но...' (I understand your viewpoint, but...)\n'Мне кажется, что здесь есть недоразумение.' (It seems to me there is a misunderstanding here.)\n\nPROPOSING A COMPROMISE:\n'Давайте найдём компромисс.' (Let's find a compromise.)\n'Может быть, мы можем решить это вместе?' (Perhaps we can resolve this together?)\n\nAPOLOGIZING AND FORGIVING:\n'Хочу извиниться за это.' (I want to apologize for this.)\n'Я готов простить вас.' (I am ready to forgive you.)\n\nOFFERING TO MEDIATE:\n'Позвольте мне посредничать.' (Allow me to mediate.)\n'Я могу выступить посредником.' (I can act as mediator.)\n\nTRKI B2 TIP:\nExaminers reward diplomatic register. Avoid short imperatives in formal conflict contexts. Use conditional forms (мог бы, хотел бы) and first-person plural (давайте + verb) to signal willingness to cooperate.",
 icon:"🤝"},

{type:"mc", q:"Which word means a neutral party who helps resolve a dispute?",
 opts:["конфликт","компромисс","посредник","недоразумение"],
 ans:"посредник",
 hint:"The person who stands between two sides and helps them communicate. Related to посредничать."},

{type:"mc", q:"'Извиниться' is a reflexive verb. What does the -ся suffix signal here?",
 opts:["The action is ongoing","The subject acts on themselves","The verb is imperfective","The sentence is passive"],
 ans:"The subject acts on themselves",
 hint:"Reflexive verbs in Russian indicate the action loops back. To excuse oneself out of a situation."},

{type:"mc", q:"What is the imperfective partner of 'решить'?",
 opts:["посредничать","извиняться","решать","прощать"],
 ans:"решать",
 hint:"The ongoing process of resolving. The perfective решить marks the completed resolution."},

{type:"fb", s:"Давайте найдём {1}, чтобы решить проблему.",
 a:["компромисс"],
 opts:["компромисс","конфликт","недоразумение","посредник"],
 hint:"A mutual concession both sides can accept. Masculine noun, direct object here.",
 sSrc:"Let's find a compromise to solve the problem."},

{type:"fb", s:"Я хочу {1} перед вами за это недоразумение.",
 a:["извиниться"],
 opts:["извиниться","простить","посредничать","решить"],
 hint:"The perfective reflexive infinitive meaning 'to apologize'. Contains вина (guilt).",
 sSrc:"I want to apologize to you for this misunderstanding."},

{type:"fb", s:"Это просто {1} — не настоящий конфликт.",
 a:["недоразумение"],
 opts:["недоразумение","компромисс","конфликт","решение"],
 hint:"A neuter noun meaning insufficient understanding. Prefix недо- + разумение.",
 sSrc:"It's simply a misunderstanding — not a real conflict."},

{type:"match", pairs:[
  {trg:"конфликт", src:"conflict"},
  {trg:"компромисс", src:"compromise"},
  {trg:"недоразумение", src:"misunderstanding"},
  {trg:"решать / решить", src:"to resolve (imperfective / perfective)"},
  {trg:"посредничать", src:"to mediate"}
]},

{type:"match", pairs:[
  {trg:"извиниться", src:"to apologize"},
  {trg:"простить", src:"to forgive"}
]}

]}

]};
export default UNIT_25;
