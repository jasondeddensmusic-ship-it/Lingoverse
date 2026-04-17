// Unit 25 Batch 5 Lesson 1: ビジネスマナー (Business Manners & Etiquette)
const BATCH5_L_1 = {
  id:"jav2_u25l_b5_1", title:"ビジネスマナー", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスマナー",
     desc:"Japanese business culture has elaborate etiquette systems. From exchanging business cards to seating arrangements, understanding マナー is as important as language skills. This lesson covers the vocabulary and practices that define professional interactions in Japan.",
     goals:["Master business etiquette vocabulary","Understand seating hierarchies and card exchange","Navigate formal introductions and farewells"]},

    {type:"teach", trg:"めいしこうかん", src:"business card exchange", pos:"noun", gender:null,
     note:"めいし (business card) + こうかん (exchange). Kanji: 名刺交換.\nA ritual at every first business meeting.",
     example:"A: はじめにめいしこうかんをしましょう。\nB: かしこまりました。こちらがわたくしのめいしでございます。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us exchange business cards first.\nB: Certainly. Here is my business card.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"名刺交換 is Japan's most important business ritual. Cards are presented with both hands, company name and title facing the recipient. You study the card carefully, comment on something (the person's name kanji, their company). Never write on, fold, or place a card in your back pocket. During meetings, received cards are placed on the table in order of seating hierarchy."},

    {type:"teach", trg:"かみざ", src:"seat of honor / upper seat", pos:"noun", gender:null,
     note:"Kanji: 上座. The most prestigious seat, farthest from the door.\nOpposite: しもざ (lower seat, nearest the door).",
     example:"A: おきゃくさまをかみざにごあんないしてください。\nB: はい、おくのせきですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Please guide the customer to the seat of honor.\nB: Yes, the seat in the back.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"上座 (upper seat) is always farthest from the entrance. Guests and superiors sit in かみざ, while hosts and juniors sit in しもざ (下座, lower seat near the door). This applies to meeting rooms, taxis (behind the driver = かみざ), elevators (back-left corner), and even trains. Violating seating hierarchy is a serious social faux pas."},

    {type:"teach", trg:"あいさつ", src:"greeting / salutation", pos:"noun", gender:null,
     note:"Kanji: 挨拶. あいさつする = to greet.\nしんねんのあいさつ = New Year's greetings.",
     example:"A: あさのあいさつはしゃかいじんのきほんです。\nB: おはようございます、のひとことがだいじですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Morning greetings are the basics of working life.\nB: A simple 'good morning' is important.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"挨拶 is fundamental to Japanese society. Not greeting someone properly is considered deeply rude. Japanese あいさつ varies by time of day, season, and relationship. 季節のあいさつ (seasonal greetings) open letters and emails. Business relationships begin and end with formal あいさつ. The ability to do proper あいさつ is the first thing evaluated about a person."},

    {type:"teach", trg:"のうき", src:"delivery date / deadline", pos:"noun", gender:null,
     note:"Kanji: 納期. のうきをまもる = to meet the delivery date.\nBusiness-critical term for project management.",
     example:"A: のうきはいつになりますか？\nB: さんがつまつまでにのうひんいたします。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: When will the delivery date be?\nB: We will deliver by the end of March.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"納期 uses 納 (deliver/store) and 期 (period/date). Meeting のうき is considered non-negotiable in Japanese business. Late delivery damages trust (信用 shin'you) severely. Japanese manufacturers are famous for just-in-time (ジャストインタイム) delivery systems pioneered by Toyota, where のうき precision is measured in hours, not days."},

    {type:"mc", q:"かみざ is:", opts:["The most prestigious seat, farthest from the door","The seat nearest the door","Any available seat","The seat with the best view"], ans:"The most prestigious seat, farthest from the door",
     hint:"Japanese seating hierarchy places the honored guest or senior f... from the entrance."},

    {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
     note:"Kanji: 契約. けいやくする = to sign a contract.\nけいやくしょ = contract document.",
     example:"A: けいやくしょのないようをかくにんさせていただけますか？\nB: もちろんです。ごふめいなてんがあればおたずねください。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: May I confirm the contents of the contract?\nB: Of course. Please ask about any unclear points.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"契約 uses 契 (pledge/engrave) and 約 (promise/approximately). Japanese business traditionally relied on trust and verbal agreements, but formal けいやく are now standard. The hanko (判子, personal seal) was long required on contracts instead of signatures. Digital seals and electronic signatures are gradually replacing physical hanko."},

    {type:"teach", trg:"のうひん", src:"delivery (of goods/products)", pos:"noun", gender:null,
     note:"Kanji: 納品. のうひんする = to deliver goods.\nのうひんしょ = delivery slip.",
     example:"A: ごちゅうもんのしなものをのうひんにまいりました。\nB: ありがとうございます。けんぴんさせてください。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I have come to deliver the ordered goods.\nB: Thank you. Let me inspect them.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"納品 uses 納 (deliver/store) and 品 (goods/product). Japanese quality control extends to のうひん: goods must be delivered in perfect condition, properly wrapped, with all documentation. The けんぴん (inspection) process upon delivery is standard. Damaged or incorrect deliveries are serious incidents requiring formal apology."},

    {type:"teach", trg:"けんぴん", src:"product inspection / quality check", pos:"noun", gender:null,
     note:"Kanji: 検品. けんぴんする = to inspect products/goods.\nのうひんじにけんぴんする = inspect upon delivery.",
     example:"A: のうひんされたしょうひんをけんぴんします。\nB: ふりょうひんがあればすぐにれんらくください。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: I will inspect the delivered products.\nB: If there are defective items, please contact us immediately.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"検品 reflects Japan's obsession with quality. 検 means 'inspect/examine' and 品 means 'goods.' Japanese manufacturing quality control (品質管理 hinshitsu kanri) is world-famous. The concept of zero defects (ゼロディフェクト) and kaizen (改善, continuous improvement) originated in Japanese factories. Even retail stores けんぴん merchandise before displaying it."},

    {type:"tip", title:"Business Meeting Flow",
     text:"1. あいさつ: Greet, bow, exchange business cards\n2. かみざ/しもざ: Guide guests to proper seats\n3. おちゃだし: Serve tea to guests\n4. じこしょうかい: Self-introductions\n5. ほんだい: Main topic discussion\n6. まとめ: Summary and next steps\n7. おわかれ: See guests to the elevator\n\nKey phrases:\nほんじつはおいそがしいところ... = Thank you for making time today...\nそれではほんだいにはいりましょう = Let us get into the main topic.\nおじかんをいただきありがとうございました = Thank you for your time."},

    {type:"teach", trg:"ざんぎょうたいさく", src:"overtime reduction measures", pos:"noun", gender:null,
     note:"ざんぎょう (overtime) + たいさく (countermeasures).\nModern business reform vocabulary.",
     example:"A: わがしゃではざんぎょうたいさくとしてノー残業デーをもうけています。\nB: ワークライフバランスがだいじですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Our company has established no-overtime days as an overtime reduction measure.\nB: Work-life balance is important.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"ざんぎょうたいさく became a major corporate focus after Japan's Work Style Reform Act (2018). ノー残業デー (no-overtime day) is common, usually Wednesday. Companies track and report overtime hours. Excessive ざんぎょう is linked to karoshi (過労死, death from overwork). The cultural shift from admiring long hours to valuing efficiency is ongoing."},

    {type:"teach", trg:"しんよう", src:"trust / credit / credibility", pos:"noun", gender:null,
     note:"Kanji: 信用. しんようする = to trust.\nしんようをうしなう = to lose trust.",
     example:"A: のうきをまもることでしんようがきずかれます。\nB: いちどうしなったしんようはもどすのがむずかしいですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Trust is built by meeting deadlines.\nB: Once trust is lost, it is hard to recover.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
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
