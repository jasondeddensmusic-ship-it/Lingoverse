// Unit 22 Batch 5 Lesson 1: 恩(おん)のやりとり (Favor Exchange with て-forms)
const BATCH5_L_1 = {
  id:"jav2_u22l_b5_1", title:"恩(おん)のやりとり", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"恩(おん)のやりとり",
     desc:"Extend giving and receiving to actions: 'doing favors.' てあげる (do for someone), てもらう (have someone do), てくれる (someone does for me). These patterns are used dozens of times daily in Japanese and express gratitude, requests, and social bonds through grammar itself.",
     goals:["Use てあげる for doing favors for others","Use てもらう for receiving favors","Use てくれる to express gratitude for received actions"]},

    {type:"teach", trg:"〜てあげる", src:"to do ~ for someone (away from speaker)", pos:"verb", gender:null,
     note:"て-form + あげる. Speaker does a favor for someone else.\n教(おし)えてあげる = teach (as a favor) for someone.",
     example:"A: 妹(いもうと)に数学(すうがく)を教(おし)えてあげました。\nB: 優(やさ)しいお兄(にい)さんですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I taught math to my younger sister (as a favor).\nB: What a kind older brother.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"てあげる literally means 'do and raise up' for someone. Be careful: using てあげる about your actions can sound condescending. Saying 私(わたし)が手伝(てつだ)ってあげた implies you did someone a favor from a superior position. With close friends it is fine, but with seniors or strangers, use てさしあげる (humble) or avoid the pattern entirely."},

    {type:"teach", trg:"〜てもらう", src:"to have someone do ~ (receive a favor)", pos:"verb", gender:null,
     note:"て-form + もらう. Speaker receives a favor from someone.\n友達(ともだち)に手伝(てつだ)ってもらった = I had my friend help me.",
     example:"A: 日本語(にほんご)の作文(さくぶん)を先生(せんせい)に直(なお)してもらいました。\nB: いい先生(せんせい)ですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I had the teacher correct my Japanese essay.\nB: What a good teacher.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"てもらう puts the receiver (the speaker) as the subject. This is a distinctly Japanese perspective: instead of 'the teacher corrected my essay,' you say 'I received the teacher's essay correction.' This framing emphasizes gratitude. てもらう is the most useful of the three for making polite requests: てもらえますか (could I have you do...?)."},

    {type:"teach", trg:"〜てくれる", src:"to do ~ for me (toward speaker, with gratitude)", pos:"verb", gender:null,
     note:"て-form + くれる. Someone does a favor for the speaker.\n友達(ともだち)が助(たす)けてくれた = my friend helped me (grateful).",
     example:"A: 雨(あめ)の中(なか)、友達(ともだち)が車(くるま)で送(おく)ってくれました。\nB: 親切(しんせつ)な友達(ともだち)ですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: In the rain, my friend drove me home (and I am grateful).\nB: What a kind friend.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"てくれる is the most emotionally expressive of the three. It inherently conveys gratitude: the speaker felt the kindness of the action. 母(はは)がお弁当(べんとう)を作(つく)ってくれた is not just 'mom made lunch' but 'mom made lunch FOR ME and I appreciate it.' This pattern does not exist in English, making it uniquely Japanese in its emotional grammar."},

    {type:"teach", trg:"直(なお)す", src:"to fix / to correct / to repair", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 直(なお)す. Also means 'to redo/revise.'\n家(いえ)を直(なお)す = fix the house. 作文(さくぶん)を直(なお)す = correct an essay.",
     example:"A: パソコンを直(なお)してもらえますか？\nB: 見(み)てみましょう。たぶん直(なお)せますよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Could you fix my computer?\nB: Let me take a look. I can probably fix it.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"直(なお)す has two main uses: physical repair (直(なお)す = fix) and correction (直(なお)す = revise/correct). The kanji 直 means 'straight/direct.' A teacher 直(なお)す a composition. A mechanic 直(なお)す a car. The compound verb form ～直(なお)す means 'to redo': 書(か)き直(なお)す (rewrite), やり直(なお)す (redo from scratch). This productive pattern attaches to many verbs."},

    {type:"mc", q:"友達(ともだち)が助(たす)けてくれた expresses:", opts:["Gratitude that a friend helped the speaker","The speaker helped a friend","Friends should help each other","A friend asked for help"], ans:"Gratitude that a friend helped the speaker",
     hint:"てくれる always conveys that someone did something toward the s..., with built-in appreciation."},

    {type:"teach", trg:"〜てもらえますか", src:"could you do ~ for me? (polite request)", pos:"verb", gender:null,
     note:"て-form + もらえますか (potential of もらう). Very polite request.\n手伝(てつだ)ってもらえますか = could you help me?",
     example:"A: すみません、この漢字(かんじ)の読(よ)み方(かた)を教(おし)えてもらえますか？\nB: もちろん。これは「新聞(しんぶん)」と読(よ)みます。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Excuse me, could you teach me how to read this kanji?\nB: Of course. This is read as 'shinbun.'\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"てもらえますか is one of the most polite and natural ways to make requests. It literally asks 'is it possible for me to receive the favor of you doing...?' Even more polite: てもらえませんか (could you not...?) and ていただけますか (humble). Japanese requests are framed as questions about the listener's ability or willingness, never as direct commands."},

    {type:"teach", trg:"送(おく)る", src:"to see off / to send / to escort", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 送(おく)る. 家(いえ)まで送(おく)る = escort someone home.\nメールを送(おく)る = send an email.",
     example:"A: 駅(えき)まで送(おく)ってあげましょうか？\nB: お願(ねが)いします。ありがとうございます。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Shall I walk you to the station?\nB: Please. Thank you.\nA: How was it?\nB: It was very good.",
     funFact:"送(おく)る has multiple meanings: to send (mail/email), to escort (walk someone), and to see off (at departure). At Japanese airports and train stations, families 送(おく)る (see off) travelers with waves and bows. The compound 送(おく)り迎(むか)え (sending and receiving) describes the school bus or transport service. Each meaning uses the same kanji but different context."},

    {type:"teach", trg:"親切(しんせつ)", src:"kind / helpful / friendly", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 親切(しんせつ). 親切(しんせつ)な人(ひと) = kind person.\nご親切(しんせつ)に = how kind of you.",
     example:"A: 道(みち)に迷(まよ)ったとき、親切(しんせつ)な人(ひと)が教(おし)えてくれました。\nB: 日本人(にほんじん)は親切(しんせつ)な人(ひと)が多(おお)いですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: When I was lost, a kind person showed me the way.\nB: Japanese people are often kind.\nA: When was it?\nB: It was last summer.",
     funFact:"親切(しんせつ) uses 親(しん) (parent/intimate) and 切(せつ) (cut/earnest). The etymology suggests cutting something close to your heart to give. Japanese 親切(しんせつ) is often quiet and understated: someone silently holding a door, pointing out a dropped item, or walking you to your destination instead of just giving directions. These small acts define Japanese daily kindness."},

    {type:"tip", title:"Te-form Favor Summary",
     text:"てあげる: I/someone does FOR someone else\n妹(いもうと)に教(おし)えてあげた = I taught my sister\nDirection: away from speaker\n\nてもらう: I receive someone's action (favor)\n先生(せんせい)に直(なお)してもらった = I had the teacher fix it\nDirection: toward speaker (I am subject)\n\nてくれる: Someone does FOR me (gratitude)\n友達(ともだち)が送(おく)ってくれた = my friend drove me\nDirection: toward speaker (other person is subject)\n\nPolite versions:\nてさしあげる (humble てあげる)\nていただく (humble てもらう)\nてくださる (honorific てくれる)\n\nPolite requests:\nてもらえますか? = Could you do...?\nていただけますか? = Could you kindly do...?"},

    {type:"teach", trg:"役(やく)に立(た)つ", src:"to be useful / to be helpful", pos:"verb", gender:null,
     note:"役(やく) (use/role) + に + 立(た)つ (to stand). Kanji: 役(やく)に立(た)つ.\n役(やく)に立(た)つ情報(じょうほう) = useful information.",
     example:"A: このアプリは役(やく)に立(た)ちますか？\nB: はい、とても役(やく)に立(た)っています。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Is this app useful?\nB: Yes, it is very useful.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"役(やく)に立(た)つ literally means 'to stand in a role,' implying that something fulfills its purpose. The opposite 役(やく)に立(た)たない (useless) is a common complaint. In Japanese culture, being 役(やく)に立(た)つ (useful to others) is a core value. Elderly people who feel they are no longer 役(やく)に立(た)っている sometimes experience deep sadness, reflecting the cultural weight of this concept."},

    {type:"teach", trg:"おかげで", src:"thanks to / because of (positive result)", pos:"adv", gender:null,
     note:"おかげ (divine blessing/grace) + で. Used for positive outcomes.\n皆(みな)様(さま)のおかげで = thanks to everyone.",
     example:"A: 皆(みな)さんのおかげで成功(せいこう)しました。\nB: 一緒(いっしょ)に頑張(がんば)ったからですよ。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Thanks to everyone, we succeeded.\nB: It is because we all worked hard together.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"おかげ originally meant 'a blessing from the gods/Buddha' (お蔭(かげ)). Now it means 'thanks to (someone's help).' おかげさまで (thanks to you) is a humble acknowledgment that success came from others' support. The opposite おかげで in sarcasm means 'because of you (bad result)': あなたのおかげで遅(おく)れました (because of you, I was late). Context determines positive or negative."},

    {type:"fb", s:"日本語(にほんご)の作文(さくぶん)を先生(せんせい)に直(なお)して{1}ました。\n(I had the teacher correct my essay.)", a:"もらい", opts:["もらい","あげ","くれ","やり"], sSrc:"I had the teacher correct my essay.",
     hint:"The favor-receiving verb in its masu-stem form: 'I received the action of correcting.'"},

    {type:"mc", q:"てもらえますか is used for:", opts:["Making polite requests","Giving orders","Offering help","Expressing regret"], ans:"Making polite requests",
     hint:"This potential form of てもらう asks 'is it possible for me to receive the favor of...?'"},

    {type:"match", pairs:[{trg:"てあげる",src:"do a favor (away from speaker)"},{trg:"てもらう",src:"receive a favor (I as subject)"},{trg:"てくれる",src:"receive a favor (other as subject)"},{trg:"てもらえますか",src:"could you do for me?"}]},

    {type:"fb", s:"皆(みな)さんの{1}で成功(せいこう)しました。\n(Thanks to everyone, we succeeded.)", a:"おかげ", opts:["おかげ","せい","ため","理由(りゆう)"], sSrc:"Thanks to everyone, we succeeded.",
     hint:"The noun meaning 'blessing/grace' that expresses gratitude for positive outcomes."},

    {type:"mc", q:"てあげる can sound condescending because:", opts:["It implies doing a favor from a superior position","It is always rude","It uses wrong grammar","It is too casual"], ans:"It implies doing a favor from a superior position",
     hint:"Saying 'I did X for you' can sound like you are placing yourself above the other person."}
  ]
};
export default BATCH5_L_1;
