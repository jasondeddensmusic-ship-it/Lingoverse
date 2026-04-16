// Unit 22 Batch 5 Lesson 1: おんのやりとり (Favor Exchange with て-forms)
const BATCH5_L_1 = {
  id:"jav2_u22l_b5_1", title:"おんのやりとり", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"おんのやりとり",
     desc:"Extend giving and receiving to actions: 'doing favors.' てあげる (do for someone), てもらう (have someone do), てくれる (someone does for me). These patterns are used dozens of times daily in Japanese and express gratitude, requests, and social bonds through grammar itself.",
     goals:["Use てあげる for doing favors for others","Use てもらう for receiving favors","Use てくれる to express gratitude for received actions"]},

    {type:"teach", trg:"〜てあげる", src:"to do ~ for someone (away from speaker)", pos:"verb", gender:null,
     note:"て-form + あげる. Speaker does a favor for someone else.\nおしえてあげる = teach (as a favor) for someone.",
     example:"A: いもうとにすうがくをおしえてあげました。\nB: やさしいおにいさんですね。",
     exampleSrc:"A: I taught math to my younger sister (as a favor).\nB: What a kind older brother.",
     funFact:"てあげる literally means 'do and raise up' for someone. Be careful: using てあげる about your actions can sound condescending. Saying わたしがてつだってあげた implies you did someone a favor from a superior position. With close friends it is fine, but with seniors or strangers, use てさしあげる (humble) or avoid the pattern entirely."},

    {type:"teach", trg:"〜てもらう", src:"to have someone do ~ (receive a favor)", pos:"verb", gender:null,
     note:"て-form + もらう. Speaker receives a favor from someone.\nともだちにてつだってもらった = I had my friend help me.",
     example:"A: にほんごのさくぶんをせんせいになおしてもらいました。\nB: いいせんせいですね。",
     exampleSrc:"A: I had the teacher correct my Japanese essay.\nB: What a good teacher.",
     funFact:"てもらう puts the receiver (the speaker) as the subject. This is a distinctly Japanese perspective: instead of 'the teacher corrected my essay,' you say 'I received the teacher's essay correction.' This framing emphasizes gratitude. てもらう is the most useful of the three for making polite requests: てもらえますか (could I have you do...?)."},

    {type:"teach", trg:"〜てくれる", src:"to do ~ for me (toward speaker, with gratitude)", pos:"verb", gender:null,
     note:"て-form + くれる. Someone does a favor for the speaker.\nともだちがたすけてくれた = my friend helped me (grateful).",
     example:"A: あめのなか、ともだちがくるまでおくってくれました。\nB: しんせつなともだちですね。",
     exampleSrc:"A: In the rain, my friend drove me home (and I am grateful).\nB: What a kind friend.",
     funFact:"てくれる is the most emotionally expressive of the three. It inherently conveys gratitude: the speaker felt the kindness of the action. ははがおべんとうをつくってくれた is not just 'mom made lunch' but 'mom made lunch FOR ME and I appreciate it.' This pattern does not exist in English, making it uniquely Japanese in its emotional grammar."},

    {type:"teach", trg:"なおす", src:"to fix / to correct / to repair", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 直す. Also means 'to redo/revise.'\nいえをなおす = fix the house. さくぶんをなおす = correct an essay.",
     example:"A: パソコンをなおしてもらえますか？\nB: みてみましょう。たぶんなおせますよ。",
     exampleSrc:"A: Could you fix my computer?\nB: Let me take a look. I can probably fix it.",
     funFact:"直す has two main uses: physical repair (なおす = fix) and correction (なおす = revise/correct). The kanji 直 means 'straight/direct.' A teacher なおす a composition. A mechanic なおす a car. The compound verb form ～なおす means 'to redo': かきなおす (rewrite), やりなおす (redo from scratch). This productive pattern attaches to many verbs."},

    {type:"mc", q:"ともだちがたすけてくれた expresses:", opts:["Gratitude that a friend helped the speaker","The speaker helped a friend","Friends should help each other","A friend asked for help"], ans:"Gratitude that a friend helped the speaker",
     hint:"てくれる always conveys that someone did something toward the s..., with built-in appreciation."},

    {type:"teach", trg:"〜てもらえますか", src:"could you do ~ for me? (polite request)", pos:"verb", gender:null,
     note:"て-form + もらえますか (potential of もらう). Very polite request.\nてつだってもらえますか = could you help me?",
     example:"A: すみません、このかんじのよみかたをおしえてもらえますか？\nB: もちろん。これは「しんぶん」とよみます。",
     exampleSrc:"A: Excuse me, could you teach me how to read this kanji?\nB: Of course. This is read as 'shinbun.'",
     funFact:"てもらえますか is one of the most polite and natural ways to make requests. It literally asks 'is it possible for me to receive the favor of you doing...?' Even more polite: てもらえませんか (could you not...?) and ていただけますか (humble). Japanese requests are framed as questions about the listener's ability or willingness, never as direct commands."},

    {type:"teach", trg:"おくる", src:"to see off / to send / to escort", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 送る. いえまでおくる = escort someone home.\nメールをおくる = send an email.",
     example:"A: えきまでおくってあげましょうか？\nB: おねがいします。ありがとうございます。",
     exampleSrc:"A: Shall I walk you to the station?\nB: Please. Thank you.",
     funFact:"送る has multiple meanings: to send (mail/email), to escort (walk someone), and to see off (at departure). At Japanese airports and train stations, families おくる (see off) travelers with waves and bows. The compound おくりむかえ (sending and receiving) describes the school bus or transport service. Each meaning uses the same kanji but different context."},

    {type:"teach", trg:"しんせつ", src:"kind / helpful / friendly", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 親切. しんせつなひと = kind person.\nごしんせつに = how kind of you.",
     example:"A: みちにまよったとき、しんせつなひとがおしえてくれました。\nB: にほんじんはしんせつなひとがおおいですね。",
     exampleSrc:"A: When I was lost, a kind person showed me the way.\nB: Japanese people are often kind.",
     funFact:"親切 uses 親 (parent/intimate) and 切 (cut/earnest). The etymology suggests cutting something close to your heart to give. Japanese しんせつ is often quiet and understated: someone silently holding a door, pointing out a dropped item, or walking you to your destination instead of just giving directions. These small acts define Japanese daily kindness."},

    {type:"tip", title:"Te-form Favor Summary",
     text:"てあげる: I/someone does FOR someone else\nいもうとにおしえてあげた = I taught my sister\nDirection: away from speaker\n\nてもらう: I receive someone's action (favor)\nせんせいになおしてもらった = I had the teacher fix it\nDirection: toward speaker (I am subject)\n\nてくれる: Someone does FOR me (gratitude)\nともだちがおくってくれた = my friend drove me\nDirection: toward speaker (other person is subject)\n\nPolite versions:\nてさしあげる (humble てあげる)\nていただく (humble てもらう)\nてくださる (honorific てくれる)\n\nPolite requests:\nてもらえますか? = Could you do...?\nていただけますか? = Could you kindly do...?"},

    {type:"teach", trg:"やくにたつ", src:"to be useful / to be helpful", pos:"verb", gender:null,
     note:"やく (use/role) + に + たつ (to stand). Kanji: 役に立つ.\nやくにたつじょうほう = useful information.",
     example:"A: このアプリはやくにたちますか？\nB: はい、とてもやくにたっています。",
     exampleSrc:"A: Is this app useful?\nB: Yes, it is very useful.",
     funFact:"役に立つ literally means 'to stand in a role,' implying that something fulfills its purpose. The opposite やくにたたない (useless) is a common complaint. In Japanese culture, being やくにたつ (useful to others) is a core value. Elderly people who feel they are no longer やくにたっている sometimes experience deep sadness, reflecting the cultural weight of this concept."},

    {type:"teach", trg:"おかげで", src:"thanks to / because of (positive result)", pos:"adv", gender:null,
     note:"おかげ (divine blessing/grace) + で. Used for positive outcomes.\nみなさまのおかげで = thanks to everyone.",
     example:"A: みなさんのおかげでせいこうしました。\nB: いっしょにがんばったからですよ。",
     exampleSrc:"A: Thanks to everyone, we succeeded.\nB: It is because we all worked hard together.",
     funFact:"おかげ originally meant 'a blessing from the gods/Buddha' (お蔭). Now it means 'thanks to (someone's help).' おかげさまで (thanks to you) is a humble acknowledgment that success came from others' support. The opposite おかげで in sarcasm means 'because of you (bad result)': あなたのおかげでおくれました (because of you, I was late). Context determines positive or negative."},

    {type:"fb", s:"にほんごのさくぶんをせんせいになおして{1}ました。\n(I had the teacher correct my essay.)", a:"もらい", opts:["もらい","あげ","くれ","やり"], sSrc:"I had the teacher correct my essay.",
     hint:"The favor-receiving verb in its masu-stem form: 'I received the action of correcting.'"},

    {type:"mc", q:"てもらえますか is used for:", opts:["Making polite requests","Giving orders","Offering help","Expressing regret"], ans:"Making polite requests",
     hint:"This potential form of てもらう asks 'is it possible for me to receive the favor of...?'"},

    {type:"match", pairs:[{trg:"てあげる",src:"do a favor (away from speaker)"},{trg:"てもらう",src:"receive a favor (I as subject)"},{trg:"てくれる",src:"receive a favor (other as subject)"},{trg:"てもらえますか",src:"could you do for me?"}]},

    {type:"fb", s:"みなさんの{1}でせいこうしました。\n(Thanks to everyone, we succeeded.)", a:"おかげ", opts:["おかげ","せい","ため","りゆう"], sSrc:"Thanks to everyone, we succeeded.",
     hint:"The noun meaning 'blessing/grace' that expresses gratitude for positive outcomes."},

    {type:"mc", q:"てあげる can sound condescending because:", opts:["It implies doing a favor from a superior position","It is always rude","It uses wrong grammar","It is too casual"], ans:"It implies doing a favor from a superior position",
     hint:"Saying 'I did X for you' can sound like you are placing yourself above the other person."}
  ]
};
export default BATCH5_L_1;
