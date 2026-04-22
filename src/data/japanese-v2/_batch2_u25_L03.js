// Unit 25 Batch 2 Lesson 3: 交渉(こうしょう)と契約(けいやく) (Negotiations & Contracts)
const BATCH2_L_3 = {
  id:"jav2_u25l_b2_3", title:"交渉(こうしょう)と契約(けいやく)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"交渉(こうしょう)と契約(けいやく)",
     desc:"Business negotiations in Japan follow unique cultural protocols. Learn vocabulary for proposals, conditions, agreements, and concessions. These words are essential for working in or with Japanese companies and frequently tested on JLPT N2 business reading passages.",
     goals:["Navigate negotiation vocabulary","Discuss contract terms and conditions","Use formal agreement expressions"]},

    {type:"teach", trg:"交渉(こうしょう)", src:"negotiation(s)", pos:"noun", gender:null,
     note:"交渉(こうしょう)する = to negotiate.\n団体(だんたい)交渉(こうしょう) = collective bargaining.",
     example:"A: 交渉(こうしょう)は難(むずか)しいですが、最後(さいご)に合意(ごうい)に至(いた)りました。\nB: お疲(つか)れさまでした。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The negotiations were difficult, but we finally reached an agreement.\nB: Thank you for your hard work.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"交渉 uses 交(こう) (exchange) and 渉(しょう) (wade through). Japanese negotiation style emphasizes 根回(ねまわ)し (behind-the-scenes groundwork) before formal talks. Decisions are often predetermined through informal discussions, and the formal 交渉(こうしょう) confirms rather than creates agreements."},

    {type:"teach", trg:"合意(ごうい)", src:"agreement / consensus / accord", pos:"noun", gender:null,
     note:"合意(ごうい)する = to agree.\n合意(ごうい)に至(いた)る = to reach an agreement.",
     example:"A: 両者(りょうしゃ)の間(あいだ)で合意(ごうい)が得(え)られました。\nB: 契約書(けいやくしょ)を作成(さくせい)しましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: An agreement has been reached between the two parties.\nB: Let us draft the contract.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"合意 combines 合(ごう) (match/fit) and 意(い) (intention/will). When intentions match, you have agreement. Japanese business culture seeks 全員一致(ぜんいんいっち) (unanimous agreement) rather than majority rule. The 合意(ごうい) process may take longer, but once reached, implementation is typically smooth because everyone is already aligned."},

    {type:"teach", trg:"条件(じょうけん)", src:"condition(s) / terms / requirements", pos:"noun", gender:null,
     note:"条件(じょうけん)を出(だ)す = to set conditions.\n最低(さいてい)条件(じょうけん) = minimum conditions.",
     example:"A: 契約(けいやく)の条件(じょうけん)を確認(かくにん)してください。\nB: 特(とく)に支払(しはら)い条件(じょうけん)が気(き)になります。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Please check the contract terms.\nB: I am particularly concerned about the payment terms.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"条件 uses 条(じょう) (article/clause) and 件(けん) (matter/case). Every Japanese business deal has detailed 条件(じょうけん). The phrase 条件(じょうけん)付(つ)き (with conditions/conditional) is common. 条件(じょうけん)交渉(こうしょう) (negotiating terms) is often the longest phase of a deal. Japanese companies prefer clear, detailed 条件(じょうけん) to prevent future disputes."},

    {type:"mc", q:"合意(ごうい)に至(いた)る means:", opts:["To reach an agreement","To break off negotiations","To reject terms","To start negotiations"], ans:"To reach an agreement",
     hint:"至(いた)る means 'to arrive at,' combined with 合意(ごうい) (a...)."},

    {type:"teach", trg:"支払(しはら)い", src:"payment", pos:"noun", gender:null,
     note:"支払(しはら)う = to pay.\n支払(しはら)い期限(きげん) = payment deadline.",
     example:"A: 支払(しはら)いは月末(げつまつ)でよろしいですか？\nB: はい、それで結構(けっこう)です。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Is payment at the end of the month acceptable?\nB: Yes, that is fine.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"支払い uses 支(し) (branch/support) and 払(はら)い (sweep/pay). Japanese business payments often follow a monthly cycle: 納品(のうひん) (delivery) in one month, 請求書(せいきゅうしょ) (invoice) the next, 支払(しはら)い the following month. This delayed payment culture (termed サイト, from English 'sight') can mean 60-90 day payment terms."},

    {type:"teach", trg:"見積(みつも)もり", src:"estimate / quotation / quote", pos:"noun", gender:null,
     note:"見積(みつも)もりを出(だ)す = to give an estimate.\n見積書(みつもりしょ) = quotation document.",
     example:"A: まず見積(みつも)もりをお願(ねが)いできますか？\nB: 三日(さんにち)以内(いない)にお送(おく)りします。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Could you provide an estimate first?\nB: I will send it within three days.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"見積もり combines 見(み) (see/look) and 積(つ)もる (to accumulate/estimate). To estimate is to 'look at the accumulated costs.' In Japanese business, requesting 相見積(あいみつも)もり (competitive quotes from multiple vendors) is standard practice. Providing a precise 見積(みつも)もり quickly builds trust and credibility."},

    {type:"teach", trg:"根回(ねまわ)し", src:"groundwork / behind-the-scenes consensus building", pos:"noun", gender:null,
     note:"Literally 'root-binding' (gardening term). A key Japanese business practice.\nDecisions are shaped informally before formal meetings.",
     example:"A: 会議(かいぎ)の前(まえ)に関係者(かんけいしゃ)に根回(ねまわ)しをしておいてください。\nB: わかりました。各部署(かくぶしょ)の意見(いけん)を確認(かくにん)します。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Please do groundwork with stakeholders before the meeting.\nB: Understood. I will confirm each department's opinion.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"根回し literally means 'going around the roots,' a gardening technique of cutting roots before transplanting. In business, it means consulting key people before a formal decision. Without proper 根回(ねまわ)し, proposals get rejected in meetings because participants are surprised. Good 根回(ねまわ)し ensures the meeting just formalizes a pre-agreed decision."},

    {type:"fb", s:"契約(けいやく)の{1}を確認(かくにん)してください。\n(Please check the contract terms.)", a:"条件(じょうけん)", opts:["条件(じょうけん)","交渉(こうしょう)","合意(ごうい)","根回(ねまわ)し"], sSrc:"Please check the contract terms.",
     hint:"The noun meaning 'conditions' or 'terms,' the specific requirements of a deal."},

    {type:"teach", trg:"作成(さくせい)", src:"creation / drafting / preparation (of documents)", pos:"noun", gender:null,
     note:"作成(さくせい)する = to create/draft.\n書類(しょるい)を作成(さくせい)する = to prepare documents.",
     example:"A: 契約書(けいやくしょ)の作成(さくせい)をお願(ねが)いします。\nB: 法務部(ほうむぶ)と確認(かくにん)してから作成(さくせい)します。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Please draft the contract.\nB: I will draft it after confirming with the legal department.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"作成 uses 作(さく) (make) and 成(せい) (complete). While つくる (create) is general, 作成(さくせい) specifically means creating formal documents, reports, and written materials. It is the professional word for document preparation. In Japanese offices, 書類(しょるい)作成(さくせい) (document preparation) is a core skill, especially for reports, proposals, and contracts."},

    {type:"teach", trg:"請求(せいきゅう)", src:"billing / invoice / demand for payment", pos:"noun", gender:null,
     note:"請求(せいきゅう)する = to bill/invoice.\n請求書(せいきゅうしょ) = invoice document.",
     example:"A: 請求書(せいきゅうしょ)はいつお送(おく)りしますか？\nB: 納品(のうひん)後(ご)にお送(おく)りします。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: When will you send the invoice?\nB: I will send it after delivery.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"請求 uses 請(せい) (request) and 求(きゅう) (seek/demand). An invoice is a formal request for payment. The Japanese business cycle of 納品(のうひん) (delivery), 請求(せいきゅう) (invoicing), and 支払(しはら)い (payment) is highly structured. Late 請求(せいきゅう) or incorrect amounts can damage business relationships significantly."},

    {type:"mc", q:"根回(ねまわ)し in business means:", opts:["Rejecting a proposal politely","Building consensus informally before formal meetings","Giving a formal presentation","Writing a detailed report"], ans:"Building consensus informally before formal meetings",
     hint:"This gardening-derived term describes the preparatory consultation that happens behind the scenes."},

    {type:"teach", trg:"納品(のうひん)", src:"delivery (of goods/products)", pos:"noun", gender:null,
     note:"納品(のうひん)する = to deliver goods.\n納品書(のうひんしょ) = delivery slip.",
     example:"A: 納品(のうひん)日(び)はいつになりますか？\nB: 来週(らいしゅう)の水曜日(すいようび)に予定(よてい)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: When will the delivery date be?\nB: It is scheduled for next Wednesday.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"納品 uses 納(のう) (deliver/pay/store) and 品(ひん) (goods/items). The 納品(のうひん) process in Japanese business is formal: goods are delivered with a 納品書(のうひんしょ) (delivery slip), the receiver checks items against the order, and both parties sign. Only after proper 納品(のうひん) does the billing cycle begin."},

    {type:"fb", s:"まず{1}をお願(ねが)いできますか？\n(Could you provide an estimate first?)", a:"見積(みつも)もり", opts:["見積(みつも)もり","請求(せいきゅう)","納品(のうひん)","作成(さくせい)"], sSrc:"Could you provide an estimate first?",
     hint:"The business noun for a price calculation given before work begins."},

    {type:"match", pairs:[{trg:"交渉(こうしょう)",src:"negotiation"},{trg:"合意(ごうい)",src:"agreement"},{trg:"条件(じょうけん)",src:"conditions/terms"},{trg:"根回(ねまわ)し",src:"groundwork"}]},

    {type:"fb", s:"両者(りょうしゃ)の間(あいだ)で{1}が得(え)られました。\n(An agreement has been reached between the two parties.)", a:"合意(ごうい)", opts:["合意(ごうい)","交渉(こうしょう)","条件(じょうけん)","契約(けいやく)"], sSrc:"An agreement has been reached between the two parties.",
     hint:"The noun meaning mutual consent where both parties' intentions align."},

    {type:"match", pairs:[{trg:"見積(みつも)もり",src:"estimate/quote"},{trg:"請求(せいきゅう)",src:"billing/invoice"},{trg:"納品(のうひん)",src:"delivery (goods)"},{trg:"作成(さくせい)",src:"drafting (documents)"}]},

    {type:"mc", q:"The standard Japanese business cycle order is:", opts:["交渉(こうしょう), 支払(しはら)い, 納品(のうひん), 請求(せいきゅう)","納品(のうひん), 見積(みつも)もり, 支払(しはら)い, 請求(せいきゅう)","見積(みつも)もり, 納品(のうひん), 請求(せいきゅう), 支払(しはら)い","支払(しはら)い, 請求(せいきゅう), 納品(のうひん), 見積(みつも)もり"], ans:"見積(みつも)もり, 納品(のうひん), 請求(せいきゅう), 支払(しはら)い",
     hint:"First you estimate costs, then deliver, then bill, then receive payment."},
  ]
};
export default BATCH2_L_3;
