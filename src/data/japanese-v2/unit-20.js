// Japanese V2 Unit 20. 敬語(けいご) (Polite Language)
import BATCH11_L1 from './_batch11_u20_L01.js';
import BATCH10_L1 from './_batch10_u20_L01.js';
import BATCH9_L1 from './_batch9_u20_L01.js';
import BATCH7_L1 from './_batch7_u20_L01.js';
import BATCH8_L1 from './_batch8_u20_L01.js';
import BATCH6_L1 from './_batch6_u20_L01.js';
import BATCH5_L02 from './_batch5_u20_L02.js';
import BATCH5_L01 from './_batch5_u20_L01.js';
import BATCH2_L02 from './_batch2_u20_L02.js';
import BATCH2_L01 from './_batch2_u20_L01.js';
import EXP_L3 from './_temp_u20_expand_L01.js';import EXP_L4 from './_temp_u20_expand_L02.js';import EXP_L5 from './_temp_u20_expand_L03.js';import EXP_ADMIN from './_temp_u20_admin.js';
import COVERAGE_U20 from './_coverage_u20.js';
// Level: B1.2. JLPT N3 aligned.
// 尊敬語 (sonkeigo), 謙譲語 (kenjougo), お/ご patterns.

const UNIT_20 = {
  n:20, lang:"ja", srcLang:"en", track:"v2",
  title:"敬語(けいご)", sub:"Polite Language",
  icon:"🎩", level:"B1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: 尊敬語(そんけいご) (Honorific Language) ═══
{id:"jav2_u20l1", title:"尊敬語(そんけいご)", icon:"👑", xp:15, board:true, steps:[
  {type:"intro", title:"尊敬語(そんけいご)",
   desc:"Enter the world of Japanese honorific language (keigo). Sonkeigo elevates the actions of others to show respect. Instead of 'he eats,' you say 'he partakes.' These special verb forms are essential for polite Japanese in business, service, and formal settings.",
   goals:["Use honorific verbs: いらっしゃる, 召(め)し上(あ)がる, おっしゃる","Understand the お + stem + になる pattern","Know when to use sonkeigo (for others' actions)"]},

  {type:"teach", trg:"いらっしゃる", src:"to be / to go / to come (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for いる, 行(い)く, and 来(く)る.\nいらっしゃいませ = Welcome! (shop greeting).",
   example:"A: 社長(しゃちょう)は今(いま)どちらにいらっしゃいますか？\nB: 会議室(かいぎしつ)にいらっしゃいます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: Where is the company president right now?\nB: He is in the meeting room.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"いらっしゃる replaces three verbs at once: いる (to be), 行く (to go), and 来る (to come). The famous shop greeting いらっしゃいませ literally means 'please exist here' in honorific form. It is shouted energetically in every Japanese store and restaurant."},

  {type:"teach", trg:"召(め)し上(あ)がる", src:"to eat / to drink (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 食(た)べる and 飲(の)む.\nUsed for someone you respect. Never for yourself.",
   example:"A: どうぞ召(め)し上(あ)がってください。\nB: いただきます。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Please help yourself (to eat/drink).\nB: I will partake. (set phrase before eating)\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"召し上がる elevates the act of eating to show respect. A host says 'please meshiagatte kudasai' to guests. The kanji 召し上がる literally means 'to summon upward,' treating the food as being called to the honored person. This contrasts with いただく (humble: I receive/eat)."},

  {type:"teach", trg:"おっしゃる", src:"to say (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 言(い)う (to say).\n先生(せんせい)がおっしゃった = the teacher said.",
   example:"A: 先生(せんせい)は何(なん)とおっしゃいましたか？\nB: 明日(あした)テストがあるとおっしゃいました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: What did the teacher say?\nB: The teacher said there is a test tomorrow.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"おっしゃる is the honorific of 言う (to say). It conjugates slightly irregularly: おっしゃいます (polite), おっしゃった (past). In business, quoting a superior always uses おっしゃる. Using plain 言う when referring to a boss's words would be considered rude."},

  {type:"teach", trg:"ご覧(らん)になる", src:"to look / to see (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 見(み)る (to see/look).\nご覧(らん)ください = please look (very polite).",
   example:"A: こちらの資料(しりょう)をご覧(らん)になりましたか？\nB: はい、検討(けんとう)します。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Have you looked at these materials?\nB: Yes, I will consider them.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"ご覧になる is from 御覧 (goran), an old honorific noun meaning 'your viewing.' ご覧ください (please look) appears constantly in museums, presentations, and formal settings. TV presenters say ご覧のみなさま (honorable viewers) when addressing the audience."},

  {type:"mc", q:"いらっしゃる replaces which verbs?", opts:["いる, 行(い)く, and 来(く)る","言(い)う and 聞(き)く","食(た)べる and 飲(の)む","見(み)る and 聞(き)く"], ans:"いる, 行(い)く, and 来(く)る",
   hint:"This one honorific verb covers being somewhere, going somewhere, and coming somewhere."},

  {type:"teach", trg:"お休(やす)みになる", src:"to rest / to sleep (honorific)", pos:"verb", gender:null,
   note:"お + 休(やす)み + になる pattern. A productive honorific form.\nUsed for a respected person resting or sleeping.",
   example:"A: 社長(しゃちょう)はもうお休(やす)みになりました。\nB: 失礼(しつれい)しました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: The president has already gone to rest.\nB: I am sorry to disturb.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"The お + stem + になる pattern is a productive way to make any verb honorific. お休(やす)みになる (rest), お帰(かえ)りになる (return), お出(で)かけになる (go out). The standalone おやすみなさい (good night) comes from this same root. It is one of the most versatile keigo patterns."},

  {type:"teach", trg:"〜お + stem + になる", src:"honorific verb pattern", pos:"part", gender:null,
   note:"Productive pattern: お + verb masu-stem + になる.\nお読(よ)みになる = to read (honorific). お使(つか)いになる = to use (honorific).",
   example:"A: この本(ほん)をお読(よ)みになりましたか？\nB: はい、とても面白(おもしろ)かったです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Have you read this book? (honorific)\nB: Yes, it was very interesting.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"This pattern works with most native Japanese (和語, wago) verbs. For Chinese-origin (漢語, kango) words that use する, the pattern is ご + noun + になる: ご検討(けんとう)になる (to consider, honorific). The お/ご distinction follows word origin: お for Japanese roots, ご for Chinese roots."},

  {type:"tip", title:"Sonkeigo: Elevating Others",
   text:"Special honorific verbs (memorize these):\nいる/行(い)く/来(く)る → いらっしゃる\n食(た)べる/飲(の)む → 召(め)し上(あ)がる\n言(い)う → おっしゃる\n見(み)る → ご覧(らん)になる\nする → なさる\nくれる → くださる\n\nProductive pattern (works with most verbs):\nお + masu-stem + になる\nお読(よ)みになる (to read, honorific)\nお書(か)きになる (to write, honorific)\n\nRule: Sonkeigo is ONLY for other people's actions, never your own.",
   deepDive:{title:"When to Use Sonkeigo",
    text:"Sonkeigo is used when talking ABOUT or TO someone of higher social status:\n\nCustomers (in any service setting)\nBosses and senior colleagues\nTeachers and professors\nElders you respect\nClients and business partners\n\nCommon mistakes: using sonkeigo for your own actions (never do this), mixing up sonkeigo and kenjougo, and forgetting that keigo changes based on in-group vs. out-group. When talking to an outsider about your boss, you use humble forms for your boss because they are in your in-group."}},

  {type:"fb", s:"先生(せんせい)は何(なん)と{1}ましたか？\n(What did the teacher say? - honorific)", a:"おっしゃい", opts:["おっしゃい","言(い)い","話(はな)し","申(もう)し"], sSrc:"What did the teacher say?",
   hint:"The polite (masu) form of the honorific verb for 'to say.'"},

  {type:"teach", trg:"なさる", src:"to do (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for する.\n何(なに)をなさいますか？ = What will you do? (very polite).",
   example:"A: 週末(しゅうまつ)は何(なに)をなさいますか？\nB: ゴルフに行(い)きます。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: What will you do on the weekend? (honorific)\nB: I will go golfing.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"なさる is the honorific of する. It conjugates irregularly: なさいます (polite), なさった (past). The imperative なさい appears in お + stem + なさい, a gentle command form that parents use: お食(た)べなさい (eat up), おやすみなさい (go to sleep/good night)."},

  {type:"teach", trg:"くださる", src:"to give (honorific, to me/us)", pos:"verb", gender:null,
   note:"Honorific replacement for くれる (to give to the speaker).\nてくださる = do something for me (honorific).",
   example:"A: 先生(せんせい)が教(おし)えてくださいました。\nB: 優(やさ)しい先生(せんせい)ですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: The teacher kindly taught us.\nB: What a kind teacher.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"くださる is the honorific of くれる (to give to me). The ultra-common ください (please) comes from this verb. てくださる (do something for me, honorific) is used constantly: 'the teacher taught us' becomes 先生(せんせい)が教(おし)えてくださった, honoring the teacher's act of giving."},

  {type:"mc", q:"召(め)し上(あ)がってください means:", opts:["Please eat (to a child)","Please help yourself to eat (polite)","I will eat now","Thank you for the meal"], ans:"Please help yourself to eat (polite)",
   hint:"召(め)し上(あ)がる is the honorific for eating. Adding てください makes it a p... invitation."},

  {type:"match", pairs:[{trg:"いらっしゃる",src:"to be/go/come (hon.)"},{trg:"召(め)し上(あ)がる",src:"to eat/drink (hon.)"},{trg:"おっしゃる",src:"to say (hon.)"},{trg:"ご覧(らん)になる",src:"to see (hon.)"}]},

  {type:"match", pairs:[{trg:"なさる",src:"to do (hon.)"},{trg:"くださる",src:"to give (hon.)"},{trg:"お休(やす)みになる",src:"to rest (hon.)"},{trg:"お読(よ)みになる",src:"to read (hon.)"}]},

  {type:"fb", s:"どうぞ{1}てください。\n(Please help yourself to eat/drink.)", a:"召(め)し上(あ)がっ", opts:["召(め)し上(あ)がっ","食(た)べ","飲(の)ん","いただい"], sSrc:"Please help yourself to eat/drink.",
   hint:"The honorific て-form of the verb meaning 'to eat/drink' in elevated speech."},

  {type:"mc", q:"When do you use sonkeigo?", opts:["For your own actions","For actions of your family","For actions of someone you respect","For actions of your pet"], ans:"For actions of someone you respect",
   hint:"Sonkeigo elevates what OTHER people do, honoring their status. Never for yourself."},
]},

// ═══ L2: 謙譲語(けんじょうご) (Humble Language) ═══
{id:"jav2_u20l2", title:"謙譲語(けんじょうご)", icon:"🙇", xp:15, board:true, steps:[
  {type:"intro", title:"謙譲語(けんじょうご)",
   desc:"Learn humble language (kenjougo), the mirror of sonkeigo. While sonkeigo elevates others, kenjougo lowers yourself to show respect indirectly. 'I will go' becomes 'I will humbly proceed.' Master both sides and you command the full keigo system.",
   goals:["Use humble verbs: 参(まい)る, いただく, 申(もう)す","Understand the お + stem + する pattern","Know when kenjougo is required (your actions toward superiors)"]},

  {type:"teach", trg:"参(まい)る", src:"to go / to come (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 行(い)く and 来(く)る.\n参(まい)ります = I will go/come (humble polite).",
   example:"A: 今(いま)からそちらに参(まい)ります。\nB: お待(ま)ちしております。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: I will come to you now. (humble)\nB: I will be waiting. (humble)\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"参る is the humble counterpart of いらっしゃる. While いらっしゃる elevates someone going somewhere, 参る lowers yourself going somewhere. The common phrase 参(まい)りましょう means 'let us go' in a humble/formal way. Train announcements use 参(まい)ります constantly."},

  {type:"teach", trg:"いただく", src:"to receive / to eat (humble)", pos:"verb", gender:null,
   note:"Humble replacement for もらう (receive) and 食(た)べる/飲(の)む.\nいただきます = the famous pre-meal phrase.",
   example:"A: いただきます。\nB: どうぞ召(め)し上(あ)がってください。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: I humbly receive this food. (set phrase)\nB: Please help yourself.\nA: How was it?\nB: It was very good.",
   funFact:"いただきます is Japan's most famous humble expression, said before every meal. It literally means 'I humbly receive.' It acknowledges everyone who made the food possible. いただく also replaces もらう (to receive) in polite speech: プレゼントをいただきました (I humbly received a present)."},

  {type:"teach", trg:"申(もう)す", src:"to say / to be called (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 言(い)う (to say).\n申(もう)します = I say (humble). Self-introduction: ...と申(もう)します.",
   example:"A: 初(はじ)めまして。田中(たなか)と申(もう)します。\nB: よろしくお願(ねが)いいたします。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Nice to meet you. I am called Tanaka. (humble)\nB: I look forward to working with you. (humble)\nA: When was it?\nB: It was last summer.",
   funFact:"申す is the humble counterpart of おっしゃる. The self-introduction pattern 'X と申(もう)します' (I am called X) is the formal/business standard. 申(もう)し訳(わけ)ございません (I have no excuse) is the most formal apology in Japanese, using 申す in its noun form."},

  {type:"teach", trg:"おる", src:"to be / to exist (humble)", pos:"verb", gender:null,
   note:"Humble replacement for いる (to be/exist).\nおります = I am (here). Used in business calls.",
   example:"A: 田中(たなか)は今(いま)おりません。\nB: では、また連絡(れんらく)します。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Tanaka is not here at the moment. (humble)\nB: Then I will contact again.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"おる is the humble of いる. On business phone calls, you say おります for your own team members: 'Tanaka wa ima orimasen' (Tanaka is not in, humble). This is a key point: you use humble forms for your own company's people when speaking to outsiders, because your team is your in-group."},

  {type:"mc", q:"いただきます before a meal means:", opts:["I humbly receive this food","Thank you for cooking","It looks delicious","Please eat"], ans:"I humbly receive this food",
   hint:"The humble verb used before meals, expressing deep gratitude for what you are about to consume."},

  {type:"teach", trg:"〜お + stem + する", src:"humble verb pattern", pos:"part", gender:null,
   note:"Productive humble pattern: お + verb masu-stem + する.\nお持(も)ちする = to carry (humble). お伝(つた)えする = to convey (humble).",
   example:"A: お荷物(にもつ)をお持(も)ちします。\nB: ありがとうございます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: I will carry your luggage. (humble)\nB: Thank you.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"This is the humble mirror of お + stem + になる (honorific). Where になる elevates others, する lowers yourself. It is extremely productive: お待(ま)ちする (I will wait), お伝(つた)えする (I will convey), お送(おく)りする (I will send). Hotel and restaurant staff use this pattern constantly."},

  {type:"teach", trg:"お待(ま)ちする", src:"to wait (humble)", pos:"verb", gender:null,
   note:"お + 待(ま)ち + する. Humble version of 待(ま)つ.\nお待(ま)ちしております = I am waiting (very polite).",
   example:"A: 少々(しょうしょう)お待(ま)ちください。\nB: はい、お待(ま)ちしています。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Please wait a moment.\nB: Yes, I am waiting.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"お待ちする is heard everywhere in Japanese service: restaurants (please wait for your table), phone calls (please hold), shops (we are getting your item). The ultra-polite お待(ま)ちしております uses the humble continuous form and is standard in business Japanese."},

  {type:"tip", title:"Sonkeigo vs. Kenjougo",
   text:"Sonkeigo (honorific): elevates THEIR actions.\nいらっしゃる (they go), 召(め)し上(あ)がる (they eat), おっしゃる (they say)\n\nKenjougo (humble): lowers YOUR actions.\n参(まい)る (I go), いただく (I eat/receive), 申(もう)す (I say)\n\nKey pairs:\n行(い)く/来(く)る: いらっしゃる (hon.) vs. 参(まい)る (hum.)\n食(た)べる: 召(め)し上(あ)がる (hon.) vs. いただく (hum.)\n言(い)う: おっしゃる (hon.) vs. 申(もう)す (hum.)\n見(み)る: ご覧(らん)になる (hon.) vs. 拝見(はいけん)する (hum.)\nする: なさる (hon.) vs. いたす (hum.)",
   deepDive:{title:"The In-Group / Out-Group Rule",
    text:"Japanese keigo follows an in-group (uchi) vs. out-group (soto) divide:\n\nWhen talking to an outsider about your boss:\nUse HUMBLE for your boss (because they are in your group).\n'Our president will go' = 社長(しゃちょう)が参(まい)ります (not いらっしゃいます).\n\nWhen talking to your boss:\nUse HONORIFIC for them, HUMBLE for yourself.\n'I will go' = 参(まい)ります. 'Will you go?' = いらっしゃいますか？\n\nThis confuses many learners. The rule is: humble your entire in-group when speaking to outsiders."}},

  {type:"fb", s:"初(はじ)めまして。田中(たなか)と{1}ます。\n(Nice to meet you. I am called Tanaka. - humble)", a:"申(もう)し", opts:["申(もう)し","言(い)い","おっしゃい","話(はな)し"], sSrc:"Nice to meet you. I am called Tanaka.",
   hint:"The humble verb for 'to say/to be called' in its polite (masu) form."},

  {type:"teach", trg:"拝見(はいけん)する", src:"to look / to see (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 見(み)る (to see/look).\n拝見(はいけん)します = I will look (humble). Kanji: 拝見する.",
   example:"A: 資料(しりょう)を拝見(はいけん)してもよろしいですか？\nB: どうぞ。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: May I look at the materials? (humble)\nB: Please go ahead.\nA: How long did it take?\nB: About two hours.",
   funFact:"拝見 combines 拝 (worship/pray) and 見 (see), literally meaning 'to see with reverence.' This extreme humility is typical of kenjougo. You 'worship-see' the document, lowering yourself below the person who created or owns it. It is standard in business when reviewing proposals or reports."},

  {type:"teach", trg:"いたす", src:"to do (humble)", pos:"verb", gender:null,
   note:"Humble replacement for する (to do).\nいたします = I will do (humble polite). Very common in business.",
   example:"A: すぐに対応(たいおう)いたします。\nB: よろしくお願(ねが)いいたします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: I will respond to this immediately. (humble)\nB: I look forward to your help. (humble)\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"いたす is the humble of する and appears in one of the most common Japanese phrases: よろしくお願(ねが)いいたします (humble version of よろしくお願(ねが)いします). In business emails and conversations, いたす replaces する in virtually every context: 確認(かくにん)いたします (I will confirm), 連絡(れんらく)いたします (I will contact)."},

  {type:"mc", q:"お荷物(にもつ)をお持(も)ちします means:", opts:["Please carry your luggage","I will carry your luggage (humble)","Your luggage is heavy","Carry your own luggage"], ans:"I will carry your luggage (humble)",
   hint:"The お + stem + する pattern lowers the speaker's action to honor the listener."},

  {type:"match", pairs:[{trg:"参(まい)る",src:"to go/come (hum.)"},{trg:"いただく",src:"to receive/eat (hum.)"},{trg:"申(もう)す",src:"to say (hum.)"},{trg:"おる",src:"to be (hum.)"}]},

  {type:"match", pairs:[{trg:"拝見(はいけん)する",src:"to see (hum.)"},{trg:"いたす",src:"to do (hum.)"},{trg:"お待(ま)ちする",src:"to wait (hum.)"},{trg:"お持(も)ちする",src:"to carry (hum.)"}]},

  {type:"fb", s:"資料(しりょう)を{1}してもよろしいですか？\n(May I look at the materials? - humble)", a:"拝見(はいけん)", opts:["拝見(はいけん)","ご覧(らん)","見学(けんがく)","検討(けんとう)"], sSrc:"May I look at the materials?",
   hint:"The humble する-verb for 'to see/look at.' Combines 拝 (worship) and 見 (see)."},

  {type:"mc", q:"When talking to an outsider about your boss going somewhere, you use:", opts:["いらっしゃいます (honorific)","行(い)きます (neutral)","参(まい)ります (humble)","行(い)かれます (passive)"], ans:"参(まい)ります (humble)",
   hint:"In the uchi-soto system, your boss's actions get lowered when you speak to outsiders."},

  {type:"fb", s:"食事(しょくじ)の前(まえ)に「{1}」と言(い)います。",
   a:["いただく"],
   opts:["いただく","ごちそうさま","召(め)し上(あ)がる","おります"],
   hint:"Before a meal, Japanese people say this set phrase, which humbly expresses 'I receive this food with gratitude.' It is the humble verb for receiving.",
   sSrc:"Before a meal, you say '{1}'."},

  {type:"fb", s:"「する」の謙譲語(けんじょうご)は{1}です。",
   a:["いたす"],
   opts:["いたす","なさる","おっしゃる","参(まい)る"],
   hint:"You need the humble replacement for する. The honorific equivalent is なさる; the humble equivalent lowers your own actions.",
   sSrc:"The humble equivalent of する is {1}."},

{type:"match",pairs:[{trg:"ご覧(らん)になる",src:"to look / to see (honorific)"},{trg:"お休(やす)みになる",src:"to rest / to sleep (honorific)"},{trg:"〜お + stem + になる",src:"honorific verb pattern"},{trg:"なさる",src:"to do (honorific)"},{trg:"くださる",src:"to give (honorific, to me/us)"},{trg:"いただく",src:"to receive / to eat (humble)"}]},{type:"match",pairs:[{trg:"申(もう)す",src:"to say / to be called (humble)"},{trg:"〜お + stem + する",src:"humble verb pattern"},{trg:"お待(ま)ちする",src:"to wait (humble)"},{trg:"拝見(はいけん)する",src:"to look / to see (humble)"}]}]},

,{id:"jav2_u20l_n3_expand", title:"重要(じゅうよう)な表現(ひょうげん)", icon:"💡", xp:20, board:true, steps:[
  {type:"intro", title:"Key N3 Expressions for Polite Communication",
   desc:"Build the abstract vocabulary that gives your keigo depth and precision. Describing someone's attitude, conveying important information, or acknowledging a situation: these words appear constantly in business Japanese and everyday B1 conversation.",
   goals:["Use important/special (重要・特別) as na-adjectives","Describe attitude, manner, and behavior (態度・様子・行動)","Use 伝(つた)える and 認(みと)める in keigo contexts","Describe facial expressions (表情)"]},

  {type:"teach", trg:"重要(じゅうよう)", src:"important / significant", pos:"adj", gender:null,
   note:"Na-adjective. 重要(じゅうよう)な + noun, or 〜は重要(じゅうよう)です.\n重要(じゅうよう)性(せい) = importance.",
   example:"A: この会議(かいぎ)は重要(じゅうよう)ですか？\nB: はい、とても重要(じゅうよう)な会議(かいぎ)です。",
   exampleSrc:"A: Is this meeting important?\nB: Yes, it is a very important meeting.",
   funFact:"重要 uses 重 (heavy/serious) and 要 (need/essential). 重 appears in 重(おも)い (heavy), linking physical weight with serious importance. The opposite is 些細(ささい) (trivial). On JLPT N3, 重要 appears in reading passages about social issues and news."},

  {type:"teach", trg:"特別(とくべつ)", src:"special / particular", pos:"adj", gender:null,
   note:"Na-adjective. 特別(とくべつ)な + noun, or 〜は特別(とくべつ)です.\n特別(とくべつ)に = especially / as a special exception.",
   example:"A: 今日(きょう)は特別(とくべつ)な日(ひ)ですね。\nB: はい、特別(とくべつ)な会議(かいぎ)があります。",
   exampleSrc:"A: Today is a special day, isn't it.\nB: Yes, there is a special meeting.",
   funFact:"特別 combines 特 (special/unique) and 別 (separate/different). 特別割引(とくべつわりびき) means special discount. Airlines announce 特別サービス (special service) in Japanese. The adverb 特別(とくべつ)に is used to grant someone an exception in formal contexts."},

  {type:"mc", q:"重要(じゅうよう) is which word class?", opts:["i-adjective","na-adjective","verb","adverb"], ans:"na-adjective",
   hint:"You say 重要(じゅうよう)な会議(かいぎ), using the な particle to link this word to a noun."},

  {type:"teach", trg:"態度(たいど)", src:"attitude / manner / behavior", pos:"noun", gender:null,
   note:"態度(たいど)が悪(わる)い = rude manner. 態度(たいど)を改(あらた)める = to improve one's attitude.\nAppears often in workplace and interpersonal contexts.",
   example:"A: あの人(ひと)の態度(たいど)はどう思(おも)いますか？\nB: 少(すこ)し礼儀(れいぎ)がないと思(おも)います。",
   exampleSrc:"A: What do you think about that person's attitude?\nB: I think it lacks a little courtesy.",
   funFact:"態度 uses 態 (appearance/form) and 度 (degree/extent). In Japanese culture, one's 態度 is closely watched in service, school, and work settings. 態度を改める (to reform one's attitude) is a phrase teachers and managers use to signal expected behavioral change."},

  {type:"teach", trg:"様子(ようす)", src:"appearance / manner / state of affairs", pos:"noun", gender:null,
   note:"Describes how someone looks or how a situation appears.\n様子(ようす)を見(み)る = to see how things go / to watch the situation.",
   example:"A: 田中(たなか)さんの様子(ようす)はどうですか？\nB: 元気(げんき)がない様子(ようす)です。",
   exampleSrc:"A: How does Tanaka-san seem?\nB: He seems to have no energy.",
   funFact:"様子 is a uniquely flexible word. 様(ようす) alone already appears in 〜ようす (the way/state of something). 様子を見る (watch the situation) is extremely common in Japanese decision-making culture, where a wait-and-see approach is preferred over rushing in."},

  {type:"teach", trg:"行動(こうどう)", src:"action / behavior / conduct", pos:"noun", gender:null,
   note:"行動(こうどう)する = to act / to take action.\n行動力(こうどうりょく) = drive / ability to take action.\nAppears in business, social discussion, and news.",
   example:"A: 行動(こうどう)が大切(たいせつ)だと思(おも)います。\nB: 同(おな)じです。行動(こうどう)で見(み)せましょう。",
   exampleSrc:"A: I think action is important.\nB: Same here. Let us show it through action.",
   funFact:"行動 uses 行 (go/conduct) and 動 (move). 行動力(こうどうりょく) is a highly praised quality on Japanese resumes and in job interviews. The opposite is 優柔不断(ゆうじゅうふだん) (indecision). 行動パターン (behavioral pattern) appears in psychology and management contexts."},

  {type:"teach", trg:"表情(ひょうじょう)", src:"facial expression / look", pos:"noun", gender:null,
   note:"表情(ひょうじょう)が豊(ゆた)か = expressive face.\n表情(ひょうじょう)を読(よ)む = to read someone's expression.",
   example:"A: 先生(せんせい)の表情(ひょうじょう)を見(み)ると難(むずか)しいと思(おも)います。\nB: でも、おっしゃる通(とお)りです。",
   exampleSrc:"A: Looking at the teacher's expression, I think it is difficult.\nB: But, it is exactly as you say.",
   funFact:"表情 uses 表 (surface/express) and 情 (emotion/feeling). Japanese culture places great emphasis on reading 表情 and atmosphere (空気(くうき)を読(よ)む). In keigo settings, controlling your own 表情 is considered important etiquette. A smile (笑顔(えがお)) is standard customer service."},

  {type:"fb", s:"この会議(かいぎ)は非常(ひじょう)に{1}です。\n(This meeting is extremely important.)", a:"重要(じゅうよう)", opts:["重要(じゅうよう)","特別(とくべつ)","行動(こうどう)","様子(ようす)"], sSrc:"This meeting is extremely important.",
   hint:"The na-adjective meaning 'important / significant,' formed from 'heavy' + 'essential.'"},

  {type:"teach", trg:"伝(つた)える", src:"to convey / to tell / to pass on", pos:"verb", gender:null,
   note:"One-directional: speaker actively conveys to someone.\nお伝(つた)えします = I will convey it (humble pattern お + stem + する).",
   example:"A: 部長(ぶちょう)にこの件(けん)をお伝(つた)えします。\nB: よろしくお願(ねが)いいたします。",
   exampleSrc:"A: I will convey this matter to the department head. (humble)\nB: I look forward to your help. (humble)",
   funFact:"伝える uses 伝 (transmit/tradition) and the eru ending showing it is transitive (you transmit something TO someone). The humble form お伝(つた)えする is one of the most common keigo expressions in the office. 伝言(でんごん) (message to relay) uses the same kanji root."},

  {type:"teach", trg:"認(みと)める", src:"to acknowledge / to recognize / to accept", pos:"verb", gender:null,
   note:"Can mean: to admit (a fact), to recognize (a person's effort), or to grant permission.\n認(みと)める = standard form. 認(みと)めていただく = to have it acknowledged (humble).",
   example:"A: その点(てん)は認(みと)めなければなりません。\nB: おっしゃる通(とお)りです。改(あらた)めます。",
   exampleSrc:"A: We must acknowledge that point.\nB: Exactly as you say. I will reform (my approach).",
   funFact:"認める is built on 認 (recognize/approve), the same kanji as 確認(かくにん) (confirmation) and 認証(にんしょう) (authentication). In Japanese workplace culture, it is highly significant when a superior 認める your effort (acknowledges your work). Job satisfaction surveys show this recognition drives motivation more than salary increases."},

  {type:"teach", trg:"改(あらた)める", src:"to reform / to renew / to correct", pos:"verb", gender:null,
   note:"改(あらた)める attitude/behavior means to fix or change it for the better.\n改(あらた)めて = once again / on a new occasion (set expression).",
   example:"A: 態度(たいど)を改(あらた)めてほしいと思(おも)います。\nB: 申(もう)し訳(わけ)ございません。改(あらた)めます。",
   exampleSrc:"A: I think I would like you to reform your attitude.\nB: I have no excuse. I will correct it.",
   funFact:"改める uses 改 (reform/revise), the same character in 改札(かいさつ) (ticket gate, literally 'reformed/checked barrier') and 改正(かいせい) (legal revision). 改めて (once more, on a fresh occasion) is a polished business phrase: 改めてご連絡(れんらく)いたします (I will contact you again in due course)."},

  {type:"tip", title:"Na-adjectives in Polite Speech",
   text:"重要(じゅうよう) and 特別(とくべつ) are na-adjectives:\nBefore a noun: 重要(じゅうよう)な会議(かいぎ) (important meeting)\nAs a predicate: この会議(かいぎ)は重要(じゅうよう)です (this meeting is important)\nAs an adverb: 特別(とくべつ)に (specially)\n\nIn keigo sentences they appear frequently:\n重要(じゅうよう)なご連絡(れんらく)をいただきました。\n(I humbly received an important message.)\n特別(とくべつ)にご対応(たいおう)いただけますか？\n(Could you give special consideration?)",
   deepDive:{title:"Combining N3 Abstract Nouns with Keigo",
    text:"The N3 abstract nouns in this lesson combine naturally with keigo patterns:\n\n態度(たいど)を改(あらた)める → 態度(たいど)をお改(あらた)めください (please reform your attitude, polite request)\n様子(ようす)を見(み)る → 様子(ようす)を拝見(はいけん)します (I will observe the situation, humble)\n行動(こうどう)する → ご行動(こうどう)ください (please take action, honorific request)\n表情(ひょうじょう)を読(よ)む → 表情(ひょうじょう)を拝見(はいけん)する (to observe the expression, humble)\n\nMastering these combinations bridges JLPT N3 vocabulary with real keigo usage."}},

  {type:"fb", s:"部長(ぶちょう)にこの件(けん)を{1}します。\n(I will convey this matter to the department head. - humble)", a:"お伝(つた)え", opts:["お伝(つた)え","おっしゃい","お読(よ)み","拝見(はいけん)"], sSrc:"I will convey this matter to the department head.",
   hint:"The humble お + stem + する pattern of 伝(つた)える (to convey/tell)."},

  {type:"mc", q:"Which word describes someone's facial expression?", opts:["態度(たいど)","様子(ようす)","表情(ひょうじょう)","行動(こうどう)"], ans:"表情(ひょうじょう)",
   hint:"This word literally combines 表 (surface/express) and 情 (emotion/feeling)."},

  {type:"mc", q:"その点(てん)は認(みと)めます means:", opts:["I will reform that point","I acknowledge that point","I will convey that point","I will look at that point"], ans:"I acknowledge that point",
   hint:"認(みと)める means to recognize or accept something as true."},

  {type:"match", pairs:[{trg:"重要(じゅうよう)",src:"important"},{trg:"特別(とくべつ)",src:"special"},{trg:"態度(たいど)",src:"attitude"},{trg:"様子(ようす)",src:"appearance / state"}]},

  {type:"match", pairs:[{trg:"行動(こうどう)",src:"action / behavior"},{trg:"表情(ひょうじょう)",src:"facial expression"},{trg:"伝(つた)える",src:"to convey / tell"},{trg:"認(みと)める",src:"to acknowledge"}]},

  {type:"fb", s:"彼(かれ)の態度(たいど)は重要(じゅうよう){1}と思(おも)います。\n(I think his attitude is important.)", a:"だ", opts:["だ","です","な","に"], sSrc:"I think his attitude is important.",
   hint:"After a na-adjective used as a predicate in a plain-form embedded clause (〜と思う), use the plain copula."},

  {type:"fb", s:"その問題(もんだい)は{1}だと思(おも)います。\n(I think that problem is important.)", a:"重要(じゅうよう)", opts:["重要(じゅうよう)","特別(とくべつ)","表情(ひょうじょう)","様子(ようす)"], sSrc:"I think that problem is important.",
   hint:"The na-adjective for 'important' or 'significant,' appearing constantly in news and business Japanese."},

  {type:"mc", q:"改(あらた)める is best described as:", opts:["to investigate something thoroughly","to recognize someone's effort","to reform or correct for the better","to observe someone's manner"], ans:"to reform or correct for the better",
   hint:"The kanji 改 also appears in 改札(かいさつ) (ticket gate) and 改正(かいせい) (legal revision). It signals changing something that was previously unsatisfactory."},

  {type:"match", pairs:[{trg:"伝(つた)える",src:"to convey / to tell"},{trg:"認(みと)める",src:"to acknowledge"},{trg:"改(あらた)める",src:"to reform / correct"},{trg:"様子(ようす)を見(み)る",src:"to wait and see"}]},
]},EXP_L3,EXP_L4,EXP_L5,EXP_ADMIN
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
, COVERAGE_U20]};
export default UNIT_20;
