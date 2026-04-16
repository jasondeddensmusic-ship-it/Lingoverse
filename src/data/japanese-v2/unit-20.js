// Japanese V2 Unit 20. けいご (Polite Language)
import BATCH6_L1 from './_batch6_u20_L01.js';
import BATCH5_L02 from './_batch5_u20_L02.js';
import BATCH5_L01 from './_batch5_u20_L01.js';
import BATCH2_L02 from './_batch2_u20_L02.js';
import BATCH2_L01 from './_batch2_u20_L01.js';
import EXP_L3 from './_temp_u20_expand_L01.js';import EXP_L4 from './_temp_u20_expand_L02.js';import EXP_L5 from './_temp_u20_expand_L03.js';
// Level: B1.2. JLPT N3 aligned.
// 尊敬語 (sonkeigo), 謙譲語 (kenjougo), お/ご patterns.

const UNIT_20 = {
  n:20, lang:"ja", srcLang:"en", track:"v2",
  title:"けいご", sub:"Polite Language",
  icon:"🎩", level:"B1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: そんけいご (Honorific Language) ═══
{id:"jav2_u20l1", title:"そんけいご", icon:"👑", xp:15, board:true, steps:[
  {type:"intro", title:"そんけいご",
   desc:"Enter the world of Japanese honorific language (keigo). Sonkeigo elevates the actions of others to show respect. Instead of 'he eats,' you say 'he partakes.' These special verb forms are essential for polite Japanese in business, service, and formal settings.",
   goals:["Use honorific verbs: いらっしゃる, めしあがる, おっしゃる","Understand the お + stem + になる pattern","Know when to use sonkeigo (for others' actions)"]},

  {type:"teach", trg:"いらっしゃる", src:"to be / to go / to come (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for いる, いく, and くる.\nいらっしゃいませ = Welcome! (shop greeting).",
   example:"A: しゃちょうはいまどちらにいらっしゃいますか？\nB: かいぎしつにいらっしゃいます。",
   exampleSrc:"A: Where is the company president right now?\nB: He is in the meeting room.",
   funFact:"いらっしゃる replaces three verbs at once: いる (to be), いく (to go), and くる (to come). The famous shop greeting いらっしゃいませ literally means 'please exist here' in honorific form. It is shouted energetically in every Japanese store and restaurant."},

  {type:"teach", trg:"めしあがる", src:"to eat / to drink (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for たべる and のむ.\nUsed for someone you respect. Never for yourself.",
   example:"A: どうぞめしあがってください。\nB: いただきます。",
   exampleSrc:"A: Please help yourself (to eat/drink).\nB: I will partake. (set phrase before eating)",
   funFact:"めしあがる elevates the act of eating to show respect. A host says 'please meshiagatte kudasai' to guests. The kanji 召し上がる literally means 'to summon upward,' treating the food as being called to the honored person. This contrasts with いただく (humble: I receive/eat)."},

  {type:"teach", trg:"おっしゃる", src:"to say (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for いう (to say).\nせんせいがおっしゃった = the teacher said.",
   example:"A: せんせいはなんとおっしゃいましたか？\nB: あしたテストがあるとおっしゃいました。",
   exampleSrc:"A: What did the teacher say?\nB: The teacher said there is a test tomorrow.",
   funFact:"おっしゃる is the honorific of いう (to say). It conjugates slightly irregularly: おっしゃいます (polite), おっしゃった (past). In business, quoting a superior always uses おっしゃる. Using plain いう when referring to a boss's words would be considered rude."},

  {type:"teach", trg:"ごらんになる", src:"to look / to see (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for みる (to see/look).\nごらんください = please look (very polite).",
   example:"A: こちらのしりょうをごらんになりましたか？\nB: はい、けんとうします。",
   exampleSrc:"A: Have you looked at these materials?\nB: Yes, I will consider them.",
   funFact:"ごらんになる is from 御覧 (goran), an old honorific noun meaning 'your viewing.' ごらんください (please look) appears constantly in museums, presentations, and formal settings. TV presenters say ごらんのみなさま (honorable viewers) when addressing the audience."},

  {type:"mc", q:"いらっしゃる replaces which verbs?", opts:["いる, いく, and くる","いう and きく","たべる and のむ","みる and きく"], ans:"いる, いく, and くる",
   hint:"This one honorific verb covers being somewhere, going somewhere, and coming somewhere."},

  {type:"teach", trg:"おやすみになる", src:"to rest / to sleep (honorific)", pos:"verb", gender:null,
   note:"お + やすみ + になる pattern. A productive honorific form.\nUsed for a respected person resting or sleeping.",
   example:"A: しゃちょうはもうおやすみになりました。\nB: しつれいしました。",
   exampleSrc:"A: The president has already gone to rest.\nB: I am sorry to disturb.",
   funFact:"The お + stem + になる pattern is a productive way to make any verb honorific. おやすみになる (rest), おかえりになる (return), おでかけになる (go out). The standalone おやすみなさい (good night) comes from this same root. It is one of the most versatile keigo patterns."},

  {type:"teach", trg:"〜お + stem + になる", src:"honorific verb pattern", pos:"part", gender:null,
   note:"Productive pattern: お + verb masu-stem + になる.\nおよみになる = to read (honorific). おつかいになる = to use (honorific).",
   example:"A: このほんをおよみになりましたか？\nB: はい、とてもおもしろかったです。",
   exampleSrc:"A: Have you read this book? (honorific)\nB: Yes, it was very interesting.",
   funFact:"This pattern works with most native Japanese (和語, wago) verbs. For Chinese-origin (漢語, kango) words that use する, the pattern is ご + noun + になる: ごけんとうになる (to consider, honorific). The お/ご distinction follows word origin: お for Japanese roots, ご for Chinese roots."},

  {type:"tip", title:"Sonkeigo: Elevating Others",
   text:"Special honorific verbs (memorize these):\nいる/いく/くる → いらっしゃる\nたべる/のむ → めしあがる\nいう → おっしゃる\nみる → ごらんになる\nする → なさる\nくれる → くださる\n\nProductive pattern (works with most verbs):\nお + masu-stem + になる\nおよみになる (to read, honorific)\nおかきになる (to write, honorific)\n\nRule: Sonkeigo is ONLY for other people's actions, never your own.",
   deepDive:{title:"When to Use Sonkeigo",
    text:"Sonkeigo is used when talking ABOUT or TO someone of higher social status:\n\nCustomers (in any service setting)\nBosses and senior colleagues\nTeachers and professors\nElders you respect\nClients and business partners\n\nCommon mistakes: using sonkeigo for your own actions (never do this), mixing up sonkeigo and kenjougo, and forgetting that keigo changes based on in-group vs. out-group. When talking to an outsider about your boss, you use humble forms for your boss because they are in your in-group."}},

  {type:"fb", s:"せんせいはなんと{1}ましたか？\n(What did the teacher say? - honorific)", a:"おっしゃい", opts:["おっしゃい","いい","はなし","もうし"], sSrc:"What did the teacher say?",
   hint:"The polite (masu) form of the honorific verb for 'to say.'"},

  {type:"teach", trg:"なさる", src:"to do (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for する.\nなにをなさいますか？ = What will you do? (very polite).",
   example:"A: しゅうまつはなにをなさいますか？\nB: ゴルフにいきます。",
   exampleSrc:"A: What will you do on the weekend? (honorific)\nB: I will go golfing.",
   funFact:"なさる is the honorific of する. It conjugates irregularly: なさいます (polite), なさった (past). The imperative なさい appears in お + stem + なさい, a gentle command form that parents use: おたべなさい (eat up), おやすみなさい (go to sleep/good night)."},

  {type:"teach", trg:"くださる", src:"to give (honorific, to me/us)", pos:"verb", gender:null,
   note:"Honorific replacement for くれる (to give to the speaker).\nてくださる = do something for me (honorific).",
   example:"A: せんせいがおしえてくださいました。\nB: やさしいせんせいですね。",
   exampleSrc:"A: The teacher kindly taught us.\nB: What a kind teacher.",
   funFact:"くださる is the honorific of くれる (to give to me). The ultra-common ください (please) comes from this verb. てくださる (do something for me, honorific) is used constantly: 'the teacher taught us' becomes せんせいがおしえてくださった, honoring the teacher's act of giving."},

  {type:"mc", q:"めしあがってください means:", opts:["Please eat (to a child)","Please help yourself to eat (polite)","I will eat now","Thank you for the meal"], ans:"Please help yourself to eat (polite)",
   hint:"めしあがる is the honorific for eating. Adding てください makes it a p... invitation."},

  {type:"match", pairs:[{trg:"いらっしゃる",src:"to be/go/come (hon.)"},{trg:"めしあがる",src:"to eat/drink (hon.)"},{trg:"おっしゃる",src:"to say (hon.)"},{trg:"ごらんになる",src:"to see (hon.)"}]},

  {type:"match", pairs:[{trg:"なさる",src:"to do (hon.)"},{trg:"くださる",src:"to give (hon.)"},{trg:"おやすみになる",src:"to rest (hon.)"},{trg:"およみになる",src:"to read (hon.)"}]},

  {type:"fb", s:"どうぞ{1}てください。\n(Please help yourself to eat/drink.)", a:"めしあがっ", opts:["めしあがっ","たべ","のん","いただい"], sSrc:"Please help yourself to eat/drink.",
   hint:"The honorific て-form of the verb meaning 'to eat/drink' in elevated speech."},

  {type:"mc", q:"When do you use sonkeigo?", opts:["For your own actions","For actions of your family","For actions of someone you respect","For actions of your pet"], ans:"For actions of someone you respect",
   hint:"Sonkeigo elevates what OTHER people do, honoring their status. Never for yourself."},
]},

// ═══ L2: けんじょうご (Humble Language) ═══
{id:"jav2_u20l2", title:"けんじょうご", icon:"🙇", xp:15, board:true, steps:[
  {type:"intro", title:"けんじょうご",
   desc:"Learn humble language (kenjougo), the mirror of sonkeigo. While sonkeigo elevates others, kenjougo lowers yourself to show respect indirectly. 'I will go' becomes 'I will humbly proceed.' Master both sides and you command the full keigo system.",
   goals:["Use humble verbs: まいる, いただく, もうす","Understand the お + stem + する pattern","Know when kenjougo is required (your actions toward superiors)"]},

  {type:"teach", trg:"まいる", src:"to go / to come (humble)", pos:"verb", gender:null,
   note:"Humble replacement for いく and くる.\nまいります = I will go/come (humble polite).",
   example:"A: いまからそちらにまいります。\nB: おまちしております。",
   exampleSrc:"A: I will come to you now. (humble)\nB: I will be waiting. (humble)",
   funFact:"まいる is the humble counterpart of いらっしゃる. While いらっしゃる elevates someone going somewhere, まいる lowers yourself going somewhere. The common phrase まいりましょう means 'let us go' in a humble/formal way. Train announcements use まいります constantly."},

  {type:"teach", trg:"いただく", src:"to receive / to eat (humble)", pos:"verb", gender:null,
   note:"Humble replacement for もらう (receive) and たべる/のむ.\nいただきます = the famous pre-meal phrase.",
   example:"A: いただきます。\nB: どうぞめしあがってください。",
   exampleSrc:"A: I humbly receive this food. (set phrase)\nB: Please help yourself.",
   funFact:"いただきます is Japan's most famous humble expression, said before every meal. It literally means 'I humbly receive.' It acknowledges everyone who made the food possible. いただく also replaces もらう (to receive) in polite speech: プレゼントをいただきました (I humbly received a present)."},

  {type:"teach", trg:"もうす", src:"to say / to be called (humble)", pos:"verb", gender:null,
   note:"Humble replacement for いう (to say).\nもうします = I say (humble). Self-introduction: ...ともうします.",
   example:"A: はじめまして。たなかともうします。\nB: よろしくおねがいいたします。",
   exampleSrc:"A: Nice to meet you. I am called Tanaka. (humble)\nB: I look forward to working with you. (humble)",
   funFact:"もうす is the humble counterpart of おっしゃる. The self-introduction pattern 'X to moushimasu' (I am called X) is the formal/business standard. もうしわけございません (I have no excuse) is the most formal apology in Japanese, using もうす in its noun form."},

  {type:"teach", trg:"おる", src:"to be / to exist (humble)", pos:"verb", gender:null,
   note:"Humble replacement for いる (to be/exist).\nおります = I am (here). Used in business calls.",
   example:"A: たなかはいまおりません。\nB: では、またれんらくします。",
   exampleSrc:"A: Tanaka is not here at the moment. (humble)\nB: Then I will contact again.",
   funFact:"おる is the humble of いる. On business phone calls, you say おります for your own team members: 'Tanaka wa ima orimasen' (Tanaka is not in, humble). This is a key point: you use humble forms for your own company's people when speaking to outsiders, because your team is your in-group."},

  {type:"mc", q:"いただきます before a meal means:", opts:["I humbly receive this food","Thank you for cooking","It looks delicious","Please eat"], ans:"I humbly receive this food",
   hint:"The humble verb used before meals, expressing deep gratitude for what you are about to consume."},

  {type:"teach", trg:"〜お + stem + する", src:"humble verb pattern", pos:"part", gender:null,
   note:"Productive humble pattern: お + verb masu-stem + する.\nおもちする = to carry (humble). おつたえする = to convey (humble).",
   example:"A: おにもつをおもちします。\nB: ありがとうございます。",
   exampleSrc:"A: I will carry your luggage. (humble)\nB: Thank you.",
   funFact:"This is the humble mirror of お + stem + になる (honorific). Where になる elevates others, する lowers yourself. It is extremely productive: おまちする (I will wait), おつたえする (I will convey), おおくりする (I will send). Hotel and restaurant staff use this pattern constantly."},

  {type:"teach", trg:"おまちする", src:"to wait (humble)", pos:"verb", gender:null,
   note:"お + まち + する. Humble version of まつ.\nおまちしております = I am waiting (very polite).",
   example:"A: しょうしょうおまちください。\nB: はい、おまちしています。",
   exampleSrc:"A: Please wait a moment.\nB: Yes, I am waiting.",
   funFact:"おまちする is heard everywhere in Japanese service: restaurants (please wait for your table), phone calls (please hold), shops (we are getting your item). The ultra-polite おまちしております uses the humble continuous form and is standard in business Japanese."},

  {type:"tip", title:"Sonkeigo vs. Kenjougo",
   text:"Sonkeigo (honorific): elevates THEIR actions.\nいらっしゃる (they go), めしあがる (they eat), おっしゃる (they say)\n\nKenjougo (humble): lowers YOUR actions.\nまいる (I go), いただく (I eat/receive), もうす (I say)\n\nKey pairs:\nいく/くる: いらっしゃる (hon.) vs. まいる (hum.)\nたべる: めしあがる (hon.) vs. いただく (hum.)\nいう: おっしゃる (hon.) vs. もうす (hum.)\nみる: ごらんになる (hon.) vs. はいけんする (hum.)\nする: なさる (hon.) vs. いたす (hum.)",
   deepDive:{title:"The In-Group / Out-Group Rule",
    text:"Japanese keigo follows an in-group (uchi) vs. out-group (soto) divide:\n\nWhen talking to an outsider about your boss:\nUse HUMBLE for your boss (because they are in your group).\n'Our president will go' = しゃちょうがまいります (not いらっしゃいます).\n\nWhen talking to your boss:\nUse HONORIFIC for them, HUMBLE for yourself.\n'I will go' = まいります. 'Will you go?' = いらっしゃいますか？\n\nThis confuses many learners. The rule is: humble your entire in-group when speaking to outsiders."}},

  {type:"fb", s:"はじめまして。たなかと{1}ます。\n(Nice to meet you. I am called Tanaka. - humble)", a:"もうし", opts:["もうし","いい","おっしゃい","はなし"], sSrc:"Nice to meet you. I am called Tanaka.",
   hint:"The humble verb for 'to say/to be called' in its polite (masu) form."},

  {type:"teach", trg:"はいけんする", src:"to look / to see (humble)", pos:"verb", gender:null,
   note:"Humble replacement for みる (to see/look).\nはいけんします = I will look (humble). Kanji: 拝見する.",
   example:"A: しりょうをはいけんしてもよろしいですか？\nB: どうぞ。",
   exampleSrc:"A: May I look at the materials? (humble)\nB: Please go ahead.",
   funFact:"拝見 combines 拝 (worship/pray) and 見 (see), literally meaning 'to see with reverence.' This extreme humility is typical of kenjougo. You 'worship-see' the document, lowering yourself below the person who created or owns it. It is standard in business when reviewing proposals or reports."},

  {type:"teach", trg:"いたす", src:"to do (humble)", pos:"verb", gender:null,
   note:"Humble replacement for する (to do).\nいたします = I will do (humble polite). Very common in business.",
   example:"A: すぐにたいおういたします。\nB: よろしくおねがいいたします。",
   exampleSrc:"A: I will respond to this immediately. (humble)\nB: I look forward to your help. (humble)",
   funFact:"いたす is the humble of する and appears in one of the most common Japanese phrases: よろしくおねがいいたします (humble version of よろしくおねがいします). In business emails and conversations, いたす replaces する in virtually every context: かくにんいたします (I will confirm), れんらくいたします (I will contact)."},

  {type:"mc", q:"おにもつをおもちします means:", opts:["Please carry your luggage","I will carry your luggage (humble)","Your luggage is heavy","Carry your own luggage"], ans:"I will carry your luggage (humble)",
   hint:"The お + stem + する pattern lowers the speaker's action to honor the listener."},

  {type:"match", pairs:[{trg:"まいる",src:"to go/come (hum.)"},{trg:"いただく",src:"to receive/eat (hum.)"},{trg:"もうす",src:"to say (hum.)"},{trg:"おる",src:"to be (hum.)"}]},

  {type:"match", pairs:[{trg:"はいけんする",src:"to see (hum.)"},{trg:"いたす",src:"to do (hum.)"},{trg:"おまちする",src:"to wait (hum.)"},{trg:"おもちする",src:"to carry (hum.)"}]},

  {type:"fb", s:"しりょうを{1}してもよろしいですか？\n(May I look at the materials? - humble)", a:"はいけん", opts:["はいけん","ごらん","けんがく","けんとう"], sSrc:"May I look at the materials?",
   hint:"The humble する-verb for 'to see/look at.' Combines 拝 (worship) and 見 (see)."},

  {type:"mc", q:"When talking to an outsider about your boss going somewhere, you use:", opts:["いらっしゃいます (honorific)","いきます (neutral)","まいります (humble)","いかれます (passive)"], ans:"まいります (humble)",
   hint:"In the uchi-soto system, your boss's actions get lowered when you speak to outsiders."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
]};
export default UNIT_20;
