// Batch 10 – Unit 11 (A2.2 Te-form): Requests & Permissions
const BATCH10_L1 = {
  id:"jav2_u11l_b10_1", title:"お願(ねが)いと許可(きょか)", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"お願(ねが)いと許可(きょか)",
     desc:"Master the て-form patterns for making requests, asking permission, and giving or refusing permission. These are crucial for polite interaction.",
     goals:["Make polite requests with てください","Ask permission with てもいいですか","Refuse politely with てはいけません"]},

    {type:"teach", trg:"〜てください", src:"please do (polite request)", pos:"verb", gender:null,
     note:"The standard polite request form.\n待(ま)ってください = please wait.\n座(すわ)ってください = please sit down.",
     example:"A: ここに座(すわ)ってください。\nB: ありがとうございます。",
     exampleSrc:"A: Please sit here.\nB: Thank you.",
     funFact:"てください is polite but can sound commanding from a superior. Even more polite forms exist: ていただけますか (could you kindly), てくださいませんか (would you not kindly). In customer service, おかけになってください uses the honorific おかけになる instead of 座(すわ)る."},

    {type:"teach", trg:"〜てもいいですか", src:"may I? / is it okay if?", pos:"verb", gender:null,
     note:"Asking permission. Reply: いいですよ (yes) or すみません、ちょっと... (no, softly).\n写真(しゃしん)を撮(と)ってもいいですか = May I take a photo?",
     example:"A: 写真(しゃしん)を撮(と)ってもいいですか？\nB: どうぞ、いいですよ。",
     exampleSrc:"A: May I take a photo?\nB: Please, go ahead.",
     funFact:"てもいいですか is the go-to permission pattern. The refusal is almost never a flat いいえ. Instead, Japanese people say ちょっと... (trailing off) or ごめんなさい、ちょっと困(こま)ります (sorry, that is a bit troublesome). Learning to read these soft refusals is a key cultural skill."},

    {type:"teach", trg:"〜ないでください", src:"please do not", pos:"verb", gender:null,
     note:"Polite negative request.\n触(さわ)らないでください = please do not touch.\n入(はい)らないでください = please do not enter.",
     example:"A: ここに座(すわ)らないでください。\nB: すみません。",
     exampleSrc:"A: Please do not sit here.\nB: Sorry.",
     funFact:"ないでください is direct but polite. Even softer: ないでいただけますか (could you kindly not). Museums say お手(て)を触(ふ)れないでください (please do not touch). Japanese signs often add おねがいします at the end to soften the prohibition."},

    {type:"teach", trg:"〜てはいけません", src:"must not / is not allowed", pos:"verb", gender:null,
     note:"Strong prohibition. Less personal than ないでください.\nたばこを吸(す)ってはいけません = You must not smoke.",
     example:"A: ここでたばこを吸(す)ってはいけません。\nB: わかりました。すみません。",
     exampleSrc:"A: You must not smoke here.\nB: Understood. Sorry.",
     funFact:"てはいけません states a rule or prohibition. It is often used for general rules rather than personal requests. Casual form: ちゃだめ/じゃだめ. A parent might say ゲームをしちゃだめ (you must not play games). In signs, 禁止(きんし) (prohibited) is even stronger."},

    {type:"teach", trg:"〜なくてはいけません", src:"must / have to", pos:"verb", gender:null,
     note:"Obligation. Casual: なくちゃ or なきゃ.\n勉強(べんきょう)しなくてはいけません = must study.",
     example:"A: 明日(あした)までにレポートを出(だ)さなくてはいけません。\nB: 頑張(がんば)ってね。",
     exampleSrc:"A: I must submit the report by tomorrow.\nB: Good luck.",
     funFact:"なくてはいけません is grammatically complex: 'if you do not do it, it is not allowed' = you must do it. The casual contractions しなくちゃ and しなきゃ are very common. 勉強(べんきょう)しなきゃ (gotta study) is a phrase every Japanese student says during exam season."},

    {type:"teach", trg:"〜てほしい", src:"I want someone to do", pos:"verb", gender:null,
     note:"Expresses desire for another's action.\n来(き)てほしい = I want you to come.",
     example:"A: 早(はや)く来(き)てほしいです。\nB: 今(いま)出(で)かけます。",
     exampleSrc:"A: I want you to come quickly.\nB: I am leaving now.",
     funFact:"てほしい is direct about wanting someone to do something. More polite: ていただきたい. In relationships, てほしい expresses personal desires: もっと話(はな)してほしい (I want you to talk more). It can also express wishes about situations: 雨(あめ)がやんでほしい (I want the rain to stop)."},

    {type:"teach", trg:"〜てあげる", src:"to do for someone (giving)", pos:"verb", gender:null,
     note:"Shows kindness by doing something for another.\n教(おし)えてあげる = I will teach you (as a favor).",
     example:"A: 荷物(にもつ)を持(も)ってあげましょうか？\nB: ありがとうございます。助(たす)かります。",
     exampleSrc:"A: Shall I carry your luggage for you?\nB: Thank you. That helps.",
     funFact:"てあげる means 'do (up/giving)' and shows the speaker is providing a favor. However, using it about your own actions toward equals or superiors sounds condescending. 教(おし)えてあげる to your boss is rude. Use 教(おし)えます instead. てあげる works best for clearly subordinate relationships or offers."},

    {type:"teach", trg:"〜てもらう", src:"to have someone do for me (receiving)", pos:"verb", gender:null,
     note:"Shows gratitude for receiving an action.\n手伝(てつだ)ってもらう = have someone help me.",
     example:"A: 友達(ともだち)に手伝(てつだ)ってもらいました。\nB: いい友達(ともだち)ですね。",
     exampleSrc:"A: I had my friend help me.\nB: That is a good friend.",
     funFact:"てもらう frames the action from the receiver's perspective, showing gratitude. Its polite form ていただく is extremely common in business. 先生(せんせい)に教(おし)えていただきました (I had the teacher teach me) shows deep respect. The giving/receiving verb system is uniquely Japanese."},

    {type:"mc", q:"How do Japanese people typically refuse permission softly?", opts:["ちょっと... (trailing off)","いいえ、だめです","てはいけません","ぜったいだめ"], ans:"ちょっと... (trailing off)",
     hint:"Rather than a direct 'no,' Japanese communication prefers leaving sentences incomplete as a soft refusal."},

    {type:"fb", s:"写真(しゃしん)を{1}もいいですか？\n(May I take a photo?)", a:"撮(と)って", opts:["撮(と)って","撮(と)ら","撮(と)り","撮(と)る"], sSrc:"May I take a photo?",
     hint:"Use the て-form of 撮(と)る (to take) before もいいですか to ask permission."},

    {type:"match", pairs:[
      {trg:"〜てください", src:"please do"},
      {trg:"〜ないでください", src:"please do not"},
      {trg:"〜てほしい", src:"I want someone to"},
      {trg:"〜てもらう", src:"have someone do for me"}
    ]},

    {type:"mc", q:"What is the casual contraction of なくてはいけません?", opts:["なくちゃ / なきゃ","ないで","なくて","なければ"], ans:"なくちゃ / なきゃ",
     hint:"These very common casual forms shorten the obligation pattern dramatically."}
  ,{type:"fb", s:"友達(ともだち)に荷物(にもつ)を持(も)っていただきました。これは{1}の表現(ひょうげん)です。",
    a:["〜てもらう"],
    opts:["〜てもらう","〜てあげる","〜てほしい","〜てください"],
    hint:"A friend helped you carry your luggage. This te-form pattern expresses gratitude for an action received from someone.",
    sSrc:"My friend carried my luggage. This is an expression of {1}."}
  ,{type:"match",pairs:[{trg:"〜てもいいですか",src:"may I? / is it okay if?"},{trg:"〜てあげる",src:"to do for someone (giving)"}]}]
};
export default BATCH10_L1;
