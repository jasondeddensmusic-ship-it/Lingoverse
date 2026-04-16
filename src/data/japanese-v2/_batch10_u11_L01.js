// Batch 10 – Unit 11 (A2.2 Te-form): Requests & Permissions
const BATCH10_L1 = {
  id:"jav2_u11l_b10_1", title:"おねがいときょか", icon:"🤲", xp:15, board:true,
  steps:[
    {type:"intro", title:"おねがいときょか",
     desc:"Master the て-form patterns for making requests, asking permission, and giving or refusing permission. These are crucial for polite interaction.",
     goals:["Make polite requests with てください","Ask permission with てもいいですか","Refuse politely with てはいけません"]},

    {type:"teach", trg:"〜てください", src:"please do (polite request)", pos:"verb", gender:null,
     note:"The standard polite request form.\nまってください = please wait.\nすわってください = please sit down.",
     example:"A: ここにすわってください。\nB: ありがとうございます。",
     exampleSrc:"A: Please sit here.\nB: Thank you.",
     funFact:"てください is polite but can sound commanding from a superior. Even more polite forms exist: ていただけますか (could you kindly), てくださいませんか (would you not kindly). In customer service, おかけになってください uses the honorific おかけになる instead of すわる."},

    {type:"teach", trg:"〜てもいいですか", src:"may I? / is it okay if?", pos:"verb", gender:null,
     note:"Asking permission. Reply: いいですよ (yes) or すみません、ちょっと... (no, softly).\nしゃしんをとってもいいですか = May I take a photo?",
     example:"A: しゃしんをとってもいいですか？\nB: どうぞ、いいですよ。",
     exampleSrc:"A: May I take a photo?\nB: Please, go ahead.",
     funFact:"てもいいですか is the go-to permission pattern. The refusal is almost never a flat いいえ. Instead, Japanese people say ちょっと... (trailing off) or ごめんなさい、ちょっとこまります (sorry, that is a bit troublesome). Learning to read these soft refusals is a key cultural skill."},

    {type:"teach", trg:"〜ないでください", src:"please do not", pos:"verb", gender:null,
     note:"Polite negative request.\nさわらないでください = please do not touch.\nはいらないでください = please do not enter.",
     example:"A: ここにすわらないでください。\nB: すみません。",
     exampleSrc:"A: Please do not sit here.\nB: Sorry.",
     funFact:"ないでください is direct but polite. Even softer: ないでいただけますか (could you kindly not). Museums say おてをふれないでください (please do not touch). Japanese signs often add おねがいします at the end to soften the prohibition."},

    {type:"teach", trg:"〜てはいけません", src:"must not / is not allowed", pos:"verb", gender:null,
     note:"Strong prohibition. Less personal than ないでください.\nたばこをすってはいけません = You must not smoke.",
     example:"A: ここでたばこをすってはいけません。\nB: わかりました。すみません。",
     exampleSrc:"A: You must not smoke here.\nB: Understood. Sorry.",
     funFact:"てはいけません states a rule or prohibition. It is often used for general rules rather than personal requests. Casual form: ちゃだめ/じゃだめ. A parent might say ゲームをしちゃだめ (you must not play games). In signs, きんし (禁止, prohibited) is even stronger."},

    {type:"teach", trg:"〜なくてはいけません", src:"must / have to", pos:"verb", gender:null,
     note:"Obligation. Casual: なくちゃ or なきゃ.\nべんきょうしなくてはいけません = must study.",
     example:"A: あしたまでにレポートをださなくてはいけません。\nB: がんばってね。",
     exampleSrc:"A: I must submit the report by tomorrow.\nB: Good luck.",
     funFact:"なくてはいけません is grammatically complex: 'if you do not do it, it is not allowed' = you must do it. The casual contractions しなくちゃ and しなきゃ are very common. べんきょうしなきゃ (gotta study) is a phrase every Japanese student says during exam season."},

    {type:"teach", trg:"〜てほしい", src:"I want someone to do", pos:"verb", gender:null,
     note:"Expresses desire for another's action.\nきてほしい = I want you to come.",
     example:"A: はやくきてほしいです。\nB: いまでかけます。",
     exampleSrc:"A: I want you to come quickly.\nB: I am leaving now.",
     funFact:"てほしい is direct about wanting someone to do something. More polite: ていただきたい. In relationships, てほしい expresses personal desires: もっとはなしてほしい (I want you to talk more). It can also express wishes about situations: あめがやんでほしい (I want the rain to stop)."},

    {type:"teach", trg:"〜てあげる", src:"to do for someone (giving)", pos:"verb", gender:null,
     note:"Shows kindness by doing something for another.\nおしえてあげる = I will teach you (as a favor).",
     example:"A: にもつをもってあげましょうか？\nB: ありがとうございます。たすかります。",
     exampleSrc:"A: Shall I carry your luggage for you?\nB: Thank you. That helps.",
     funFact:"てあげる means 'do (up/giving)' and shows the speaker is providing a favor. However, using it about your own actions toward equals or superiors sounds condescending. おしえてあげる to your boss is rude. Use おしえます instead. てあげる works best for clearly subordinate relationships or offers."},

    {type:"teach", trg:"〜てもらう", src:"to have someone do for me (receiving)", pos:"verb", gender:null,
     note:"Shows gratitude for receiving an action.\nてつだってもらう = have someone help me.",
     example:"A: ともだちにてつだってもらいました。\nB: いいともだちですね。",
     exampleSrc:"A: I had my friend help me.\nB: That is a good friend.",
     funFact:"てもらう frames the action from the receiver's perspective, showing gratitude. Its polite form ていただく is extremely common in business. せんせいにおしえていただきました (I had the teacher teach me) shows deep respect. The giving/receiving verb system is uniquely Japanese."},

    {type:"mc", q:"How do Japanese people typically refuse permission softly?", opts:["ちょっと... (trailing off)","いいえ、だめです","てはいけません","ぜったいだめ"], ans:"ちょっと... (trailing off)",
     hint:"Rather than a direct 'no,' Japanese communication prefers leaving sentences incomplete as a soft refusal."},

    {type:"fb", s:"しゃしんを{1}もいいですか？\n(May I take a photo?)", a:"とって", opts:["とって","とら","とり","とる"], sSrc:"May I take a photo?",
     hint:"Use the て-form of とる (to take) before もいいですか to ask permission."},

    {type:"match", pairs:[
      {trg:"〜てください", src:"please do"},
      {trg:"〜ないでください", src:"please do not"},
      {trg:"〜てほしい", src:"I want someone to"},
      {trg:"〜てもらう", src:"have someone do for me"}
    ]},

    {type:"mc", q:"What is the casual contraction of なくてはいけません?", opts:["なくちゃ / なきゃ","ないで","なくて","なければ"], ans:"なくちゃ / なきゃ",
     hint:"These very common casual forms shorten the obligation pattern dramatically."}
  ]
};
export default BATCH10_L1;
