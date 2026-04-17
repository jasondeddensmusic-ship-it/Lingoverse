// Unit 25 Batch 5 Lesson 1: ビジネスマナー (Business Manners & Etiquette)
const BATCH5_L_1 = {
  id:"jav2_u25l_b5_1", title:"ビジネスマナー", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスマナー",
     desc:"Japanese business culture has elaborate etiquette systems. From exchanging business cards to seating arrangements, understanding マナー is as important as language skills. This lesson covers the vocabulary and practices that define professional interactions in Japan.",
     goals:["Master business etiquette vocabulary","Understand seating hierarchies and card exchange","Navigate formal introductions and farewells"]},

    {type:"teach", trg:"名刺交換(めいしこうかん)", src:"business card exchange", pos:"noun", gender:null,
     note:"名刺(めいし) (business card) + 交換(こうかん) (exchange). Kanji: 名刺交換(めいしこうかん).\nA ritual at every first business meeting.",
     example:"A: はじめに名刺交換(めいしこうかん)をしましょう。\nB: かしこまりました。こちらがわたくしの名刺(めいし)でございます。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us exchange business cards first.\nB: Certainly. Here is my business card.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"名刺交換(めいしこうかん) is Japan's most important business ritual. Cards are presented with both hands, company name and title facing the recipient. You study the card carefully, comment on something (the person's name kanji, their company). Never write on, fold, or place a card in your back pocket. During meetings, received cards are placed on the table in order of seating hierarchy."},

    {type:"teach", trg:"上座(かみざ)", src:"seat of honor / upper seat", pos:"noun", gender:null,
     note:"Kanji: 上座(かみざ). The most prestigious seat, farthest from the door.\nOpposite: 下座(しもざ) (lower seat, nearest the door).",
     example:"A: お客(きゃく)様(さま)を上座(かみざ)にご案内(あんない)してください。\nB: はい、奥(おく)の席(せき)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Please guide the customer to the seat of honor.\nB: Yes, the seat in the back.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"上座(かみざ) (upper seat) is always farthest from the entrance. Guests and superiors sit in 上座(かみざ), while hosts and juniors sit in 下座(しもざ) (lower seat near the door). This applies to meeting rooms, taxis (behind the driver = 上座(かみざ)), elevators (back-left corner), and even trains. Violating seating hierarchy is a serious social faux pas."},

    {type:"teach", trg:"挨拶(あいさつ)", src:"greeting / salutation", pos:"noun", gender:null,
     note:"Kanji: 挨拶(あいさつ). 挨拶(あいさつ)する = to greet.\n新年(しんねん)の挨拶(あいさつ) = New Year's greetings.",
     example:"A: 朝(あさ)の挨拶(あいさつ)は社会人(しゃかいじん)の基本(きほん)です。\nB: おはようございます、の一言(ひとこと)が大事(だいじ)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Morning greetings are the basics of working life.\nB: A simple 'good morning' is important.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"挨拶(あいさつ) is fundamental to Japanese society. Not greeting someone properly is considered deeply rude. Japanese 挨拶(あいさつ) varies by time of day, season, and relationship. 季節(きせつ)の挨拶(あいさつ) (seasonal greetings) open letters and emails. Business relationships begin and end with formal 挨拶(あいさつ). The ability to do proper 挨拶(あいさつ) is the first thing evaluated about a person."},

    {type:"teach", trg:"納期(のうき)", src:"delivery date / deadline", pos:"noun", gender:null,
     note:"Kanji: 納期(のうき). 納期(のうき)を守(まも)る = to meet the delivery date.\nBusiness-critical term for project management.",
     example:"A: 納期(のうき)はいつになりますか？\nB: 三月末(さんがつまつ)までに納品(のうひん)いたします。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: When will the delivery date be?\nB: We will deliver by the end of March.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"納期(のうき) uses 納(のう) (deliver/store) and 期(き) (period/date). Meeting 納期(のうき) is considered non-negotiable in Japanese business. Late delivery damages trust (信用(しんよう)) severely. Japanese manufacturers are famous for just-in-time (ジャストインタイム) delivery systems pioneered by Toyota, where 納期(のうき) precision is measured in hours, not days."},

    {type:"mc", q:"上座(かみざ) is:", opts:["The most prestigious seat, farthest from the door","The seat nearest the door","Any available seat","The seat with the best view"], ans:"The most prestigious seat, farthest from the door",
     hint:"Japanese seating hierarchy places the honored guest or senior f... from the entrance."},

    {type:"teach", trg:"契約(けいやく)", src:"contract / agreement", pos:"noun", gender:null,
     note:"Kanji: 契約(けいやく). 契約(けいやく)する = to sign a contract.\n契約書(けいやくしょ) = contract document.",
     example:"A: 契約書(けいやくしょ)の内容(ないよう)を確認(かくにん)させていただけますか？\nB: もちろんです。ご不明(ふめい)な点(てん)があればお尋(たず)ねください。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: May I confirm the contents of the contract?\nB: Of course. Please ask about any unclear points.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"契約(けいやく) uses 契(けい) (pledge/engrave) and 約(やく) (promise/approximately). Japanese business traditionally relied on trust and verbal agreements, but formal 契約(けいやく) are now standard. The hanko (判子(はんこ), personal seal) was long required on contracts instead of signatures. Digital seals and electronic signatures are gradually replacing physical 判子(はんこ)."},

    {type:"teach", trg:"納品(のうひん)", src:"delivery (of goods/products)", pos:"noun", gender:null,
     note:"Kanji: 納品(のうひん). 納品(のうひん)する = to deliver goods.\n納品書(のうひんしょ) = delivery slip.",
     example:"A: ご注文(ちゅうもん)の品物(しなもの)を納品(のうひん)に参(まい)りました。\nB: ありがとうございます。検品(けんぴん)させてください。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I have come to deliver the ordered goods.\nB: Thank you. Let me inspect them.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"納品(のうひん) uses 納(のう) (deliver/store) and 品(ひん) (goods/product). Japanese quality control extends to 納品(のうひん): goods must be delivered in perfect condition, properly wrapped, with all documentation. The 検品(けんぴん) (inspection) process upon delivery is standard. Damaged or incorrect deliveries are serious incidents requiring formal apology."},

    {type:"teach", trg:"検品(けんぴん)", src:"product inspection / quality check", pos:"noun", gender:null,
     note:"Kanji: 検品(けんぴん). 検品(けんぴん)する = to inspect products/goods.\n納品(のうひん)時(じ)に検品(けんぴん)する = inspect upon delivery.",
     example:"A: 納品(のうひん)された商品(しょうひん)を検品(けんぴん)します。\nB: 不良品(ふりょうひん)があればすぐに連絡(れんらく)ください。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: I will inspect the delivered products.\nB: If there are defective items, please contact us immediately.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"検品(けんぴん) reflects Japan's obsession with quality. 検(けん) means 'inspect/examine' and 品(ひん) means 'goods.' Japanese manufacturing quality control (品質管理(ひんしつかんり)) is world-famous. The concept of zero defects (ゼロディフェクト) and kaizen (改善(かいぜん), continuous improvement) originated in Japanese factories. Even retail stores 検品(けんぴん) merchandise before displaying it."},

    {type:"tip", title:"Business Meeting Flow",
     text:"1. 挨拶(あいさつ): Greet, bow, exchange business cards\n2. 上座(かみざ)/下座(しもざ): Guide guests to proper seats\n3. お茶出(ちゃだ)し: Serve tea to guests\n4. 自己紹介(じこしょうかい): Self-introductions\n5. 本題(ほんだい): Main topic discussion\n6. まとめ: Summary and next steps\n7. お別(わか)れ: See guests to the elevator\n\nKey phrases:\n本日(ほんじつ)はお忙(いそが)しいところ... = Thank you for making time today...\nそれでは本題(ほんだい)に入(はい)りましょう = Let us get into the main topic.\nお時間(じかん)をいただきありがとうございました = Thank you for your time."},

    {type:"teach", trg:"残業対策(ざんぎょうたいさく)", src:"overtime reduction measures", pos:"noun", gender:null,
     note:"残業(ざんぎょう) (overtime) + 対策(たいさく) (countermeasures).\nModern business reform vocabulary.",
     example:"A: わが社(しゃ)では残業対策(ざんぎょうたいさく)としてノー残業(ざんぎょう)デーを設(もう)けています。\nB: ワークライフバランスが大事(だいじ)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Our company has established no-overtime days as an overtime reduction measure.\nB: Work-life balance is important.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"残業対策(ざんぎょうたいさく) became a major corporate focus after Japan's Work Style Reform Act (2018). ノー残業(ざんぎょう)デー (no-overtime day) is common, usually Wednesday. Companies track and report overtime hours. Excessive 残業(ざんぎょう) is linked to karoshi (過労死(かろうし), death from overwork). The cultural shift from admiring long hours to valuing efficiency is ongoing."},

    {type:"teach", trg:"信用(しんよう)", src:"trust / credit / credibility", pos:"noun", gender:null,
     note:"Kanji: 信用(しんよう). 信用(しんよう)する = to trust.\n信用(しんよう)を失(うしな)う = to lose trust.",
     example:"A: 納期(のうき)を守(まも)ることで信用(しんよう)が築(きず)かれます。\nB: 一度(いちど)失(うしな)った信用(しんよう)は戻(もど)すのが難(むずか)しいですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Trust is built by meeting deadlines.\nB: Once trust is lost, it is hard to recover.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"信用(しんよう) is the currency of Japanese business relationships. 信(しん) (believe) + 用(よう) (use) = trustworthiness. Building 信用(しんよう) takes years of reliable behavior, but losing it takes one mistake. Japanese banks use 信用(しんよう) in 信用金庫(しんようきんこ) (credit union). Credit cards are 信用(しんよう)カード. The concept permeates all commercial relationships."},

    {type:"fb", s:"お客(きゃく)様(さま)を{1}にご案内(あんない)してください。\n(Please guide the customer to the seat of honor.)", a:"上座(かみざ)", opts:["上座(かみざ)","下座(しもざ)","窓際(まどぎわ)","入口(いりぐち)"], sSrc:"Please guide the customer to the seat of honor.",
     hint:"The prestigious seat farthest from the door, reserved for guests and superiors."},

    {type:"mc", q:"納期(のうき)を守(まも)る means:", opts:["To meet the delivery deadline","To break a promise","To set a new deadline","To extend the deadline"], ans:"To meet the delivery deadline",
     hint:"守(まも)る means 'to protect/observe,' combined with the word for d... date."},

    {type:"match", pairs:[{trg:"名刺交換(めいしこうかん)",src:"business card exchange"},{trg:"契約(けいやく)",src:"contract"},{trg:"納品(のうひん)",src:"delivery of goods"},{trg:"検品(けんぴん)",src:"product inspection"}]},

    {type:"fb", s:"納期(のうき)を守(まも)ることで{1}が築(きず)かれます。\n(Trust is built by meeting deadlines.)", a:"信用(しんよう)", opts:["信用(しんよう)","人気(にんき)","信頼(しんらい)","経験(けいけん)"], sSrc:"Trust is built by meeting deadlines.",
     hint:"The business concept of credibility/trust that takes years to build but moments to lose."},

    {type:"mc", q:"Guests in a Japanese meeting room should sit:", opts:["Farthest from the door (上座(かみざ))","Nearest the door (下座(しもざ))","Wherever they like","Next to the host"], ans:"Farthest from the door (上座(かみざ))",
     hint:"Japanese seating etiquette places honored guests at the seat of highest prestige."}
  ]
};
export default BATCH5_L_1;
