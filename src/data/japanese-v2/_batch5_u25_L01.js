// Unit 25 Batch 5 Lesson 1: ビジネスマナー (Business Manners & Etiquette)
const BATCH5_L_1 = {
  id:"jav2_u25l_b5_1", title:"ビジネスマナー", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスマナー",
     desc:"Japanese business culture has elaborate etiquette systems. From exchanging business cards to seating arrangements, understanding マナー is as important as language skills. This lesson covers the vocabulary and practices that define professional interactions in Japan.",
     goals:["Master business etiquette vocabulary","Understand seating hierarchies and card exchange","Navigate formal introductions and farewells"]},

    {type:"teach", trg:"めいしこうかん", src:"business card exchange", pos:"noun", gender:null,
     note:"めいし (business card) + こうかん (exchange). Kanji: 名刺交換.\nA ritual at every first business meeting.",
     example:"A: はじめにめいしこうかんをしましょう。\nB: かしこまりました。こちらがわたくしのめいしでございます。",
     exampleSrc:"A: Let us exchange business cards first.\nB: Certainly. Here is my business card.",
     funFact:"名刺交換 is Japan's most important business ritual. Cards are presented with both hands, company name and title facing the recipient. You study the card carefully, comment on something (the person's name kanji, their company). Never write on, fold, or place a card in your back pocket. During meetings, received cards are placed on the table in order of seating hierarchy."},

    {type:"teach", trg:"かみざ", src:"seat of honor / upper seat", pos:"noun", gender:null,
     note:"Kanji: 上座. The most prestigious seat, farthest from the door.\nOpposite: しもざ (lower seat, nearest the door).",
     example:"A: おきゃくさまをかみざにごあんないしてください。\nB: はい、おくのせきですね。",
     exampleSrc:"A: Please guide the customer to the seat of honor.\nB: Yes, the seat in the back.",
     funFact:"上座 (upper seat) is always farthest from the entrance. Guests and superiors sit in かみざ, while hosts and juniors sit in しもざ (下座, lower seat near the door). This applies to meeting rooms, taxis (behind the driver = かみざ), elevators (back-left corner), and even trains. Violating seating hierarchy is a serious social faux pas."},

    {type:"teach", trg:"あいさつ", src:"greeting / salutation", pos:"noun", gender:null,
     note:"Kanji: 挨拶. あいさつする = to greet.\nしんねんのあいさつ = New Year's greetings.",
     example:"A: あさのあいさつはしゃかいじんのきほんです。\nB: おはようございます、のひとことがだいじですね。",
     exampleSrc:"A: Morning greetings are the basics of working life.\nB: A simple 'good morning' is important.",
     funFact:"挨拶 is fundamental to Japanese society. Not greeting someone properly is considered deeply rude. Japanese あいさつ varies by time of day, season, and relationship. 季節のあいさつ (seasonal greetings) open letters and emails. Business relationships begin and end with formal あいさつ. The ability to do proper あいさつ is the first thing evaluated about a person."},

    {type:"teach", trg:"のうき", src:"delivery date / deadline", pos:"noun", gender:null,
     note:"Kanji: 納期. のうきをまもる = to meet the delivery date.\nBusiness-critical term for project management.",
     example:"A: のうきはいつになりますか？\nB: さんがつまつまでにのうひんいたします。",
     exampleSrc:"A: When will the delivery date be?\nB: We will deliver by the end of March.",
     funFact:"納期 uses 納 (deliver/store) and 期 (period/date). Meeting のうき is considered non-negotiable in Japanese business. Late delivery damages trust (信用 shin'you) severely. Japanese manufacturers are famous for just-in-time (ジャストインタイム) delivery systems pioneered by Toyota, where のうき precision is measured in hours, not days."},

    {type:"mc", q:"かみざ is:", opts:["The most prestigious seat, farthest from the door","The seat nearest the door","Any available seat","The seat with the best view"], ans:"The most prestigious seat, farthest from the door",
     hint:"Japanese seating hierarchy places the honored guest or senior f... from the entrance."},

    {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
     note:"Kanji: 契約. けいやくする = to sign a contract.\nけいやくしょ = contract document.",
     example:"A: けいやくしょのないようをかくにんさせていただけますか？\nB: もちろんです。ごふめいなてんがあればおたずねください。",
     exampleSrc:"A: May I confirm the contents of the contract?\nB: Of course. Please ask about any unclear points.",
     funFact:"契約 uses 契 (pledge/engrave) and 約 (promise/approximately). Japanese business traditionally relied on trust and verbal agreements, but formal けいやく are now standard. The hanko (判子, personal seal) was long required on contracts instead of signatures. Digital seals and electronic signatures are gradually replacing physical hanko."},

    {type:"teach", trg:"のうひん", src:"delivery (of goods/products)", pos:"noun", gender:null,
     note:"Kanji: 納品. のうひんする = to deliver goods.\nのうひんしょ = delivery slip.",
     example:"A: ごちゅうもんのしなものをのうひんにまいりました。\nB: ありがとうございます。けんぴんさせてください。",
     exampleSrc:"A: I have come to deliver the ordered goods.\nB: Thank you. Let me inspect them.",
     funFact:"納品 uses 納 (deliver/store) and 品 (goods/product). Japanese quality control extends to のうひん: goods must be delivered in perfect condition, properly wrapped, with all documentation. The けんぴん (inspection) process upon delivery is standard. Damaged or incorrect deliveries are serious incidents requiring formal apology."},

    {type:"teach", trg:"けんぴん", src:"product inspection / quality check", pos:"noun", gender:null,
     note:"Kanji: 検品. けんぴんする = to inspect products/goods.\nのうひんじにけんぴんする = inspect upon delivery.",
     example:"A: のうひんされたしょうひんをけんぴんします。\nB: ふりょうひんがあればすぐにれんらくください。",
     exampleSrc:"A: I will inspect the delivered products.\nB: If there are defective items, please contact us immediately.",
     funFact:"検品 reflects Japan's obsession with quality. 検 means 'inspect/examine' and 品 means 'goods.' Japanese manufacturing quality control (品質管理 hinshitsu kanri) is world-famous. The concept of zero defects (ゼロディフェクト) and kaizen (改善, continuous improvement) originated in Japanese factories. Even retail stores けんぴん merchandise before displaying it."},

    {type:"tip", title:"Business Meeting Flow",
     text:"1. あいさつ: Greet, bow, exchange business cards\n2. かみざ/しもざ: Guide guests to proper seats\n3. おちゃだし: Serve tea to guests\n4. じこしょうかい: Self-introductions\n5. ほんだい: Main topic discussion\n6. まとめ: Summary and next steps\n7. おわかれ: See guests to the elevator\n\nKey phrases:\nほんじつはおいそがしいところ... = Thank you for making time today...\nそれではほんだいにはいりましょう = Let us get into the main topic.\nおじかんをいただきありがとうございました = Thank you for your time."},

    {type:"teach", trg:"ざんぎょうたいさく", src:"overtime reduction measures", pos:"noun", gender:null,
     note:"ざんぎょう (overtime) + たいさく (countermeasures).\nModern business reform vocabulary.",
     example:"A: わがしゃではざんぎょうたいさくとしてノー残業デーをもうけています。\nB: ワークライフバランスがだいじですね。",
     exampleSrc:"A: Our company has established no-overtime days as an overtime reduction measure.\nB: Work-life balance is important.",
     funFact:"ざんぎょうたいさく became a major corporate focus after Japan's Work Style Reform Act (2018). ノー残業デー (no-overtime day) is common, usually Wednesday. Companies track and report overtime hours. Excessive ざんぎょう is linked to karoshi (過労死, death from overwork). The cultural shift from admiring long hours to valuing efficiency is ongoing."},

    {type:"teach", trg:"しんよう", src:"trust / credit / credibility", pos:"noun", gender:null,
     note:"Kanji: 信用. しんようする = to trust.\nしんようをうしなう = to lose trust.",
     example:"A: のうきをまもることでしんようがきずかれます。\nB: いちどうしなったしんようはもどすのがむずかしいですね。",
     exampleSrc:"A: Trust is built by meeting deadlines.\nB: Once trust is lost, it is hard to recover.",
     funFact:"信用 is the currency of Japanese business relationships. 信 (believe) + 用 (use) = trustworthiness. Building しんよう takes years of reliable behavior, but losing it takes one mistake. Japanese banks use しんよう in 信用金庫 (credit union). Credit cards are しんようカード. The concept permeates all commercial relationships."},

    {type:"fb", s:"おきゃくさまを{1}にごあんないしてください。\n(Please guide the customer to the seat of honor.)", a:"かみざ", opts:["かみざ","しもざ","まどぎわ","いりぐち"], sSrc:"Please guide the customer to the seat of honor.",
     hint:"The prestigious seat farthest from the door, reserved for guests and superiors."},

    {type:"mc", q:"のうきをまもる means:", opts:["To meet the delivery deadline","To break a promise","To set a new deadline","To extend the deadline"], ans:"To meet the delivery deadline",
     hint:"まもる means 'to protect/observe,' combined with the word for d... date."},

    {type:"match", pairs:[{trg:"めいしこうかん",src:"business card exchange"},{trg:"けいやく",src:"contract"},{trg:"のうひん",src:"delivery of goods"},{trg:"けんぴん",src:"product inspection"}]},

    {type:"fb", s:"のうきをまもることで{1}がきずかれます。\n(Trust is built by meeting deadlines.)", a:"しんよう", opts:["しんよう","にんき","しんらい","けいけん"], sSrc:"Trust is built by meeting deadlines.",
     hint:"The business concept of credibility/trust that takes years to build but moments to lose."},

    {type:"mc", q:"Guests in a Japanese meeting room should sit:", opts:["Farthest from the door (かみざ)","Nearest the door (しもざ)","Wherever they like","Next to the host"], ans:"Farthest from the door (かみざ)",
     hint:"Japanese seating etiquette places honored guests at the seat of highest prestige."}
  ]
};
export default BATCH5_L_1;
