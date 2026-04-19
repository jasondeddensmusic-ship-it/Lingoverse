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
import EXP_L3 from './_temp_u20_expand_L01.js';import EXP_L4 from './_temp_u20_expand_L02.js';import EXP_L5 from './_temp_u20_expand_L03.js';
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
   goals:["Use honorific verbs: いらっしゃる, 召(め)し���(あ)がる, おっしゃる","Understand the お + stem + になる pattern","Know when to use sonkeigo (for others' actions)"]},

  {type:"teach", trg:"いらっしゃる", src:"to be / to go / to come (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for いる, 行(い)く, and 来(く)る.\nいらっしゃいませ = Welcome! (shop greeting).",
   example:"A: 社長(しゃちょう)は今(いま)どちらにいらっしゃいますか？\nB: 会議室(かいぎしつ)にいらっしゃいます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: Where is the company president right now?\nB: He is in the meeting room.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"いらっしゃる replaces three verbs at once: いる (to be), 行く (to go), and 来る (to come). The famous shop greeting いらっしゃいませ literally means 'please exist here' in honorific form. It is shouted energetically in every Japanese store and restaurant."},

  {type:"teach", trg:"召(め)し上(あ)がる", src:"to eat / to drink (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 食(た)べる and 飲(の)���.\nUsed for someone you respect. Never for yourself.",
   example:"A: どうぞ召(め)���上(あ)がってください。\nB: いただきます。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Please help yourself (to eat/drink).\nB: I will partake. (set phrase before eating)\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"召し上がる elevates the act of eating to show respect. A host says 'please meshiagatte kudasai' to guests. The kanji 召し上がる literally means 'to summon upward,' treating the food as being called to the honored person. This contrasts with いただく (humble: I receive/eat)."},

  {type:"teach", trg:"おっしゃる", src:"to say (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 言(い)う (to say).\n先生(せんせい)がおっしゃった = the teacher said.",
   example:"A: 先生(せん��い)は何(なん)とおっしゃいまし���か？\nB: 明日(あした)テストがあるとおっしゃいました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: What did the teacher say?\nB: The teacher said there is a test tomorrow.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"おっしゃる is the honorific of 言う (to say). It conjugates slightly irregularly: おっしゃいます (polite), おっしゃった (past). In business, quoting a superior always uses おっしゃる. Using plain 言う when referring to a boss's words would be considered rude."},

  {type:"teach", trg:"ご覧(らん)にな��", src:"to look / to see (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for 見(み)る (to see/look).\nご覧(らん)ください = please look (very polite).",
   example:"A: こちらの資料(しりょう)をご覧(らん)になりましたか？\nB: はい、検討(けんとう)します。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Have you looked at these materials?\nB: Yes, I will consider them.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"ご覧になる is from 御覧 (goran), an old honorific noun meaning 'your viewing.' ご覧ください (please look) appears constantly in museums, presentations, and formal settings. TV presenters say ご覧のみなさま (honorable viewers) when addressing the audience."},

  {type:"mc", q:"いらっしゃる replaces which verbs?", opts:["いる, 行(い)く, and 来(く)る","言(い)う and 聞(き)く","食(た)べる and 飲(の)む","見(み)る and 聞(き)く"], ans:"いる, 行(い)く, and 来(く)る",
   hint:"This one honorific verb covers being somewhere, going somewhere, and coming somewhere."},

  {type:"teach", trg:"お休(やす)みにな��", src:"to rest / to sleep (honorific)", pos:"verb", gender:null,
   note:"お + 休(やす)み + になる pattern. A productive honorific form.\nUsed for a respected person resting or sleeping.",
   example:"A: 社長(しゃちょう)はもうお休(やす)みになりまし��。\nB: 失礼(しつれい)しました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: The president has already gone to rest.\nB: I am sorry to disturb.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"The お + stem + になる pattern is a productive way to make any verb honorific. お休(やす)みになる (rest), お帰(かえ)りになる (return), お出(で)かけになる (go out). The standalone おやすみなさい (good night) comes from this same root. It is one of the most versatile keigo patterns."},

  {type:"teach", trg:"〜お + stem + になる", src:"honorific verb pattern", pos:"part", gender:null,
   note:"Productive pattern: お + verb masu-stem + になる.\nお読(よ)みになる = to read (honorific). お使(つか)いになる = to use (honorific).",
   example:"A: この本(ほん)をお��(よ)みになりましたか？\nB: はい、とても面白(おもしろ)かったです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Have you read this book? (honorific)\nB: Yes, it was very interesting.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"This pattern works with most native Japanese (和語, wago) verbs. For Chinese-origin (漢語, kango) words that use する, the pattern is ご + noun + になる: ご検討(けんとう)になる (to consider, honorific). The お/ご distinction follows word origin: お for Japanese roots, ご for Chinese roots."},

  {type:"tip", title:"Sonkeigo: Elevating Others",
   text:"Special honorific verbs (memorize these):\nいる/行(い)く/来(く)る → いらっしゃる\n食(た)べる/飲(の)む → 召(め)し上(あ)がる\n言(い)う → おっしゃる\n見(み)る → ご覧(ら���)になる\nする → なさる\nくれる → くださる\n\nProductive pattern (works with most verbs):\nお + masu-stem + になる\n��読(よ)みになる (to read, honorific)\nお書(か)きになる (to write, honorific)\n\nRule: Sonkeigo is ONLY for other people's actions, never your own.",
   deepDive:{title:"When to Use Sonkeigo",
    text:"Sonkeigo is used when talking ABOUT or TO someone of higher social status:\n\nCustomers (in any service setting)\nBosses and senior colleagues\nTeachers and professors\nElders you respect\nClients and business partners\n\nCommon mistakes: using sonkeigo for your own actions (never do this), mixing up sonkeigo and kenjougo, and forgetting that keigo changes based on in-group vs. out-group. When talking to an outsider about your boss, you use humble forms for your boss because they are in your in-group."}},

  {type:"fb", s:"先生(せんせい)は何(なん)と{1}ましたか？\n(What did the teacher say? - honorific)", a:"おっしゃい", opts:["おっしゃい","言(い)い","話(はな)し","申(もう)し"], sSrc:"What did the teacher say?",
   hint:"The polite (masu) form of the honorific verb for 'to say.'"},

  {type:"teach", trg:"なさる", src:"to do (honorific)", pos:"verb", gender:null,
   note:"Honorific replacement for する.\n何(なに)をなさいますか？ = What will you do? (very polite).",
   example:"A: 週末(��ゅうまつ)は��(なに)をなさいますか？\nB: ゴルフに行(い)きます。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: What will you do on the weekend? (honorific)\nB: I will go golfing.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"なさる is the honorific of する. It conjugates irregularly: なさいます (polite), なさった (past). The imperative なさい appears in お + stem + なさい, a gentle command form that parents use: お食(た)べなさい (eat up), おやすみなさい (go to sleep/good night)."},

  {type:"teach", trg:"く��さる", src:"to give (honorific, to me/us)", pos:"verb", gender:null,
   note:"Honorific replacement for くれる (to give to the speaker).\nてくださる = do something for me (honorific).",
   example:"A: 先生(せんせい)が教(おし)えてくださいました。\nB: 優(やさ)しい先生(せんせい)ですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: The teacher kindly taught us.\nB: What a kind teacher.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"くださる is the honorific of くれる (to give to me). The ultra-common ください (please) comes from this verb. てくださる (do something for me, honorific) is used constantly: 'the teacher taught us' becomes 先生(せんせい)が教(おし)えてくださった, honoring the teacher's act of giving."},

  {type:"mc", q:"召(め)し上(あ)がってください means:", opts:["Please eat (to a child)","Please help yourself to eat (polite)","I will eat now","Thank you for the meal"], ans:"Please help yourself to eat (polite)",
   hint:"召(め)し上(あ)がる is the honorific for eating. Adding てください makes it a p... invitation."},

  {type:"match", pairs:[{trg:"いらっしゃる",src:"to be/go/come (hon.)"},{trg:"召(め)し上(あ)がる",src:"to eat/drink (hon.)"},{trg:"おっしゃる",src:"to say (hon.)"},{trg:"ご覧(らん)になる",src:"to see (hon.)"}]},

  {type:"match", pairs:[{trg:"な��る",src:"to do (hon.)"},{trg:"くださる",src:"to give (hon.)"},{trg:"お休(やす)みになる",src:"to rest (hon.)"},{trg:"お読(よ)みになる",src:"to read (hon.)"}]},

  {type:"fb", s:"どうぞ{1}てください。\n(Please help yourself to eat/drink.)", a:"召(め)し上(���)がっ", opts:["召(め)し上(あ)がっ","食(た)べ","飲(の)ん","いただい"], sSrc:"Please help yourself to eat/drink.",
   hint:"The honorific て-form of the verb meaning 'to eat/drink' in elevated speech."},

  {type:"mc", q:"When do you use sonkeigo?", opts:["For your own actions","For actions of your family","For actions of someone you respect","For actions of your pet"], ans:"For actions of someone you respect",
   hint:"Sonkeigo elevates what OTHER people do, honoring their status. Never for yourself."},
]},

// ═══ L2: 謙譲語(けんじょうご) (Humble Language) ═══
{id:"jav2_u20l2", title:"謙譲語(けんじ��うご)", icon:"🙇", xp:15, board:true, steps:[
  {type:"intro", title:"謙譲語(けんじょ��ご)",
   desc:"Learn humble language (kenjougo), the mirror of sonkeigo. While sonkeigo elevates others, kenjougo lowers yourself to show respect indirectly. 'I will go' becomes 'I will humbly proceed.' Master both sides and you command the full keigo system.",
   goals:["Use humble verbs: 参(まい)る, いただく, 申(もう)す","Understand the お + stem + する pattern","Know when kenjougo is required (your actions toward superiors)"]},

  {type:"teach", trg:"参(まい)る", src:"to go / to come (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 行(い)く and 来(く)る.\n参(まい)ります = I will go/come (humble polite).",
   example:"A: 今(いま)からそちらに参(まい)ります。\nB: お待(ま)ちしております。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: I will come to you now. (humble)\nB: I will be waiting. (humble)\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"参る is the humble counterpart of いらっしゃる. While いらっしゃる elevates someone going somewhere, 参る lowers yourself going somewhere. The common phrase 参(まい)りましょう means 'let us go' in a humble/formal way. Train announcements use 参(まい)ります constantly."},

  {type:"teach", trg:"いただく", src:"to receive / to eat (humble)", pos:"verb", gender:null,
   note:"Humble replacement for もらう (receive) and 食(た)べる/飲(の)む.\nいただきます = the famous pre-meal phrase.",
   example:"A: いただきます。\nB: どうぞ召(���)し上(あ)がってくだ��い。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: I humbly receive this food. (set phrase)\nB: Please help yourself.\nA: How was it?\nB: It was very good.",
   funFact:"い��だきます is Japan's most famous humble expression, said before every meal. It literally means 'I humbly receive.' It acknowledges everyone who made the food possible. いただく also replaces もらう (to receive) in polite speech: プレゼントをいただきました (I humbly received a present)."},

  {type:"teach", trg:"申(���う)す", src:"to say / to be called (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 言(い)う (to say).\n申(もう)します = I say (humble). Self-introduction: ...と申(もう)します.",
   example:"A: 初(はじ)めまして。田中(たなか)と申(もう)します。\nB: よろしくお願(ねが)いいたしま��。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Nice to meet you. I am called Tanaka. (humble)\nB: I look forward to working with you. (humble)\nA: When was it?\nB: It was last summer.",
   funFact:"申す is the humble counterpart of おっしゃる. The self-introduction pattern 'X と申(もう)します' (I am called X) is the formal/business standard. 申(もう)し訳(わけ)ございません (I have no excuse) is the most formal apology in Japanese, using 申す in its noun form."},

  {type:"teach", trg:"おる", src:"to be / to exist (humble)", pos:"verb", gender:null,
   note:"Humble replacement for いる (to be/exist).\nおります = I am (here). Used in business calls.",
   example:"A: 田中(たなか)は今(いま)おりません。\nB: では、また連絡(���んらく)します。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Tanaka is not here at the moment. (humble)\nB: Then I will contact again.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"���る is the humble of いる. On business phone calls, you say おります for your own team members: 'Tanaka wa ima orimasen' (Tanaka is not in, humble). This is a key point: you use humble forms for your own company's people when speaking to outsiders, because your team is your in-group."},

  {type:"mc", q:"いただきます before a meal means:", opts:["I humbly receive this food","Thank you for cooking","It looks delicious","Please eat"], ans:"I humbly receive this food",
   hint:"The humble verb used before meals, expressing deep gratitude for what you are about to consume."},

  {type:"teach", trg:"〜お + stem + する", src:"humble verb pattern", pos:"part", gender:null,
   note:"Productive humble pattern: お + verb masu-stem + する.\nお持(も)ちする = to carry (humble). お伝(つた)えする = to convey (humble).",
   example:"A: お荷物(にもつ)をお持(も)ちします。\nB: あ���がとうございます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: I will carry your luggage. (humble)\nB: Thank you.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"This is the humble mirror of お + stem + になる (honorific). Where になる elevates others, する lowers yourself. It is extremely productive: お待(ま)ちする (I will wait), お伝(つた)えする (I will convey), お送(おく)りする (I will send). Hotel and restaurant staff use this pattern constantly."},

  {type:"teach", trg:"お待(ま)ちする", src:"to wait (humble)", pos:"verb", gender:null,
   note:"お + 待(ま)ち + する. Humble version of 待(ま)つ.\nお待(ま)ちしております = I am waiting (very polite).",
   example:"A: 少々(しょうしょう)お待(ま)ちください。\nB: はい、お待(ま)ちしています。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Please wait a moment.\nB: Yes, I am waiting.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"お待ちする is heard everywhere in Japanese service: restaurants (please wait for your table), phone calls (please hold), shops (we are getting your item). The ultra-polite お待(ま)ちしております uses the humble continuous form and is standard in business Japanese."},

  {type:"tip", title:"Sonkeigo vs. Kenjougo",
   text:"Sonkeigo (honorific): elevates THEIR actions.\nいらっしゃる (they go), 召(め)し上(あ)がる (they eat), おっしゃる (they say)\n\nKenjougo (humble): lowers YOUR actions.\n参(まい)る (I go), いただく (I eat/receive), 申(もう)す (I say)\n\nKey pairs:\n行(い)く/来(く)る: いらっしゃる (hon.) vs. 参(まい)る (hum.)\n食(た)べる: 召(め)し上(あ)���る (hon.) vs. いただく (hum.)\n言(い)う: おっしゃる (hon.) vs. 申(もう)す (hum.)\n��(み)る: ご覧(らん)になる (hon.) vs. 拝見(はいけん)する (hum.)\nする: なさる (hon.) vs. いたす (hum.)",
   deepDive:{title:"The In-Group / Out-Group Rule",
    text:"Japanese keigo follows an in-group (uchi) vs. out-group (soto) divide:\n\nWhen talking to an outsider about your boss:\nUse HUMBLE for your boss (because they are in your group).\n'Our president will go' = 社長(しゃちょう)が参(まい)ります (not いらっしゃいます).\n\nWhen talking to your boss:\nUse HONORIFIC for them, HUMBLE for yourself.\n'I will go' = 参(まい)ります. 'Will you go?' = いらっしゃいますか？\n\nThis confuses many learners. The rule is: humble your entire in-group when speaking to outsiders."}},

  {type:"fb", s:"初(はじ)めまして。田中(たなか)と{1}ます。\n(Nice to meet you. I am called Tanaka. - humble)", a:"申(もう)し", opts:["申(もう)し","言(い)い","おっしゃい","話(はな)し"], sSrc:"Nice to meet you. I am called Tanaka.",
   hint:"The humble verb for 'to say/to be called' in its polite (masu) form."},

  {type:"teach", trg:"拝見(はい���ん)する", src:"to look / to see (humble)", pos:"verb", gender:null,
   note:"Humble replacement for 見(み)る (to see/look).\n拝見(はいけん)します = I will look (humble). Kanji: 拝見する.",
   example:"A: 資料(しりょう)を拝見(は��けん)してもよろしいですか？\nB: どうぞ���\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: May I look at the materials? (humble)\nB: Please go ahead.\nA: How long did it take?\nB: About two hours.",
   funFact:"拝見 combines 拝 (worship/pray) and 見 (see), literally meaning 'to see with reverence.' This extreme humility is typical of kenjougo. You 'worship-see' the document, lowering yourself below the person who created or owns it. It is standard in business when reviewing proposals or reports."},

  {type:"teach", trg:"いたす", src:"to do (humble)", pos:"verb", gender:null,
   note:"Humble replacement for する (to do).\nいたします = I will do (humble polite). Very common in business.",
   example:"A: すぐに対応(たいおう)いた���ます。\nB: よろし���お願(ねが)いいたします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: I will respond to this immediately. (humble)\nB: I look forward to your help. (humble)\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"いたす is the humble of する and appears in one of the most common Japanese phrases: よろしくお願(ねが)いいたします (humble version of よろしくお願(ねが)いします). In business emails and conversations, いたす replaces する in virtually every context: 確認(かくにん)いたします (I will confirm), 連絡(れんらく)いたします (I will contact)."},

  {type:"mc", q:"お��物(にもつ)をお持(も)ちします means:", opts:["Please carry your luggage","I will carry your luggage (humble)","Your luggage is heavy","Carry your own luggage"], ans:"I will carry your luggage (humble)",
   hint:"The お + stem + する pattern lowers the speaker's action to honor the listener."},

  {type:"match", pairs:[{trg:"参(まい)る",src:"to go/come (hum.)"},{trg:"いた��く",src:"to receive/eat (hum.)"},{trg:"申(もう)す",src:"to say (hum.)"},{trg:"おる",src:"to be (hum.)"}]},

  {type:"match", pairs:[{trg:"拝見(はいけん)する",src:"to see (hum.)"},{trg:"いたす",src:"to do (hum.)"},{trg:"お待(ま)ちす��",src:"to wait (hum.)"},{trg:"お持(も)ちする",src:"to carry (hum.)"}]},

  {type:"fb", s:"資料(しりょう)を{1}しても��ろしいですか？\n(May I look at the materials? - humble)", a:"拝見(はいけん)", opts:["拝見(はいけん)","ご覧(らん)","見学(けんがく)","検討(けんとう)"], sSrc:"May I look at the materials?",
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

{type:"match",pairs:[{trg:"ご覧(らん)にな��",src:"to look / to see (honorific)"},{trg:"お休(やす)みにな��",src:"to rest / to sleep (honorific)"},{trg:"〜お + stem + になる",src:"honorific verb pattern"},{trg:"なさる",src:"to do (honorific)"},{trg:"く��さる",src:"to give (honorific, to me/us)"},{trg:"いただく",src:"to receive / to eat (humble)"}]},{type:"match",pairs:[{trg:"申(���う)す",src:"to say / to be called (humble)"},{trg:"〜お + stem + する",src:"humble verb pattern"},{trg:"お待(ま)ちする",src:"to wait (humble)"},{trg:"拝見(はい���ん)する",src:"to look / to see (humble)"}]}]},

,EXP_L3,EXP_L4,EXP_L5
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
]};
export default UNIT_20;
