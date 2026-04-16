// Unit 25 Batch 2 Lesson 3: こうしょうとけいやく (Negotiations & Contracts)
const BATCH2_L_3 = {
  id:"jav2_u25l_b2_3", title:"こうしょうとけいやく", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうしょうとけいやく",
     desc:"Business negotiations in Japan follow unique cultural protocols. Learn vocabulary for proposals, conditions, agreements, and concessions. These words are essential for working in or with Japanese companies and frequently tested on JLPT N2 business reading passages.",
     goals:["Navigate negotiation vocabulary","Discuss contract terms and conditions","Use formal agreement expressions"]},

    {type:"teach", trg:"こうしょう", src:"negotiation(s)", pos:"noun", gender:null,
     note:"Kanji: 交渉. こうしょうする = to negotiate.\nだんたいこうしょう = collective bargaining.",
     example:"A: こうしょうはむずかしいですが、さいごにごういにいたりました。\nB: おつかれさまでした。",
     exampleSrc:"A: The negotiations were difficult, but we finally reached an agreement.\nB: Thank you for your hard work.",
     funFact:"交渉 uses 交 (exchange) and 渉 (wade through). Japanese negotiation style emphasizes ねまわし (behind-the-scenes groundwork) before formal talks. Decisions are often predetermined through informal discussions, and the formal こうしょう confirms rather than creates agreements."},

    {type:"teach", trg:"ごうい", src:"agreement / consensus / accord", pos:"noun", gender:null,
     note:"Kanji: 合意. ごういする = to agree.\nごういにいたる = to reach an agreement.",
     example:"A: りょうしゃのあいだでごういがえられました。\nB: けいやくしょをさくせいしましょう。",
     exampleSrc:"A: An agreement has been reached between the two parties.\nB: Let us draft the contract.",
     funFact:"合意 combines 合 (match/fit) and 意 (intention/will). When intentions match, you have agreement. Japanese business culture seeks ぜんいんいっち (unanimous agreement) rather than majority rule. The ごうい process may take longer, but once reached, implementation is typically smooth because everyone is already aligned."},

    {type:"teach", trg:"じょうけん", src:"condition(s) / terms / requirements", pos:"noun", gender:null,
     note:"Kanji: 条件. じょうけんをだす = to set conditions.\nさいていじょうけん = minimum conditions.",
     example:"A: けいやくのじょうけんをかくにんしてください。\nB: とくにしはらいじょうけんがきになります。",
     exampleSrc:"A: Please check the contract terms.\nB: I am particularly concerned about the payment terms.",
     funFact:"条件 uses 条 (article/clause) and 件 (matter/case). Every Japanese business deal has detailed じょうけん. The phrase じょうけんつき (with conditions/conditional) is common. じょうけんこうしょう (negotiating terms) is often the longest phase of a deal. Japanese companies prefer clear, detailed じょうけん to prevent future disputes."},

    {type:"mc", q:"ごういにいたる means:", opts:["To reach an agreement","To break off negotiations","To reject terms","To start negotiations"], ans:"To reach an agreement",
     hint:"いたる means 'to arrive at,' combined with ごうい (a...)."},

    {type:"teach", trg:"しはらい", src:"payment", pos:"noun", gender:null,
     note:"Kanji: 支払い. しはらう = to pay.\nしはらいきげん = payment deadline.",
     example:"A: しはらいはげつまつでよろしいですか？\nB: はい、それでけっこうです。",
     exampleSrc:"A: Is payment at the end of the month acceptable?\nB: Yes, that is fine.",
     funFact:"支払い uses 支 (branch/support) and 払い (sweep/pay). Japanese business payments often follow a monthly cycle: のうひん (delivery) in one month, せいきゅうしょ (invoice) the next, しはらい the following month. This delayed payment culture (termed サイト, from English 'sight') can mean 60-90 day payment terms."},

    {type:"teach", trg:"みつもり", src:"estimate / quotation / quote", pos:"noun", gender:null,
     note:"Kanji: 見積もり. みつもりをだす = to give an estimate.\nみつもりしょ = quotation document.",
     example:"A: まずみつもりをおねがいできますか？\nB: さんにちいないにおおくりします。",
     exampleSrc:"A: Could you provide an estimate first?\nB: I will send it within three days.",
     funFact:"見積もり combines 見 (see/look) and 積もる (to accumulate/estimate). To estimate is to 'look at the accumulated costs.' In Japanese business, requesting あいみつもり (competitive quotes from multiple vendors) is standard practice. Providing a precise みつもり quickly builds trust and credibility."},

    {type:"teach", trg:"ねまわし", src:"groundwork / behind-the-scenes consensus building", pos:"noun", gender:null,
     note:"Literally 'root-binding' (gardening term). A key Japanese business practice.\nDecisions are shaped informally before formal meetings.",
     example:"A: かいぎのまえにかんけいしゃにねまわしをしておいてください。\nB: わかりました。かくぶしょのいけんをかくにんします。",
     exampleSrc:"A: Please do groundwork with stakeholders before the meeting.\nB: Understood. I will confirm each department's opinion.",
     funFact:"根回し literally means 'going around the roots,' a gardening technique of cutting roots before transplanting. In business, it means consulting key people before a formal decision. Without proper ねまわし, proposals get rejected in meetings because participants are surprised. Good ねまわし ensures the meeting just formalizes a pre-agreed decision."},

    {type:"fb", s:"けいやくの{1}をかくにんしてください。\n(Please check the contract terms.)", a:"じょうけん", opts:["じょうけん","こうしょう","ごうい","ねまわし"], sSrc:"Please check the contract terms.",
     hint:"The noun meaning 'conditions' or 'terms,' the specific requirements of a deal."},

    {type:"teach", trg:"さくせい", src:"creation / drafting / preparation (of documents)", pos:"noun", gender:null,
     note:"Kanji: 作成. さくせいする = to create/draft.\nしょるいをさくせいする = to prepare documents.",
     example:"A: けいやくしょのさくせいをおねがいします。\nB: ほうむぶとかくにんしてからさくせいします。",
     exampleSrc:"A: Please draft the contract.\nB: I will draft it after confirming with the legal department.",
     funFact:"作成 uses 作 (make) and 成 (complete). While つくる (create) is general, さくせい specifically means creating formal documents, reports, and written materials. It is the professional word for document preparation. In Japanese offices, しょるいさくせい (document preparation) is a core skill, especially for reports, proposals, and contracts."},

    {type:"teach", trg:"せいきゅう", src:"billing / invoice / demand for payment", pos:"noun", gender:null,
     note:"Kanji: 請求. せいきゅうする = to bill/invoice.\nせいきゅうしょ = invoice document.",
     example:"A: せいきゅうしょはいつおおくりしますか？\nB: のうひんごにおおくりします。",
     exampleSrc:"A: When will you send the invoice?\nB: I will send it after delivery.",
     funFact:"請求 uses 請 (request) and 求 (seek/demand). An invoice is a formal request for payment. The Japanese business cycle of のうひん (delivery), せいきゅう (invoicing), and しはらい (payment) is highly structured. Late せいきゅう or incorrect amounts can damage business relationships significantly."},

    {type:"mc", q:"ねまわし in business means:", opts:["Building consensus informally before formal meetings","Giving a formal presentation","Writing a detailed report","Rejecting a proposal politely"], ans:"Building consensus informally before formal meetings",
     hint:"This gardening-derived term describes the preparatory consultation that happens behind the scenes."},

    {type:"teach", trg:"のうひん", src:"delivery (of goods/products)", pos:"noun", gender:null,
     note:"Kanji: 納品. のうひんする = to deliver goods.\nのうひんしょ = delivery slip.",
     example:"A: のうひんびはいつになりますか？\nB: らいしゅうのすいようびによていです。",
     exampleSrc:"A: When will the delivery date be?\nB: It is scheduled for next Wednesday.",
     funFact:"納品 uses 納 (deliver/pay/store) and 品 (goods/items). The のうひん process in Japanese business is formal: goods are delivered with a のうひんしょ (delivery slip), the receiver checks items against the order, and both parties sign. Only after proper のうひん does the billing cycle begin."},

    {type:"fb", s:"まず{1}をおねがいできますか？\n(Could you provide an estimate first?)", a:"みつもり", opts:["みつもり","せいきゅう","のうひん","さくせい"], sSrc:"Could you provide an estimate first?",
     hint:"The business noun for a price calculation given before work begins."},

    {type:"match", pairs:[{trg:"こうしょう",src:"negotiation"},{trg:"ごうい",src:"agreement"},{trg:"じょうけん",src:"conditions/terms"},{trg:"ねまわし",src:"groundwork"}]},

    {type:"fb", s:"りょうしゃのあいだで{1}がえられました。\n(An agreement has been reached between the two parties.)", a:"ごうい", opts:["ごうい","こうしょう","じょうけん","けいやく"], sSrc:"An agreement has been reached between the two parties.",
     hint:"The noun meaning mutual consent where both parties' intentions align."},

    {type:"match", pairs:[{trg:"みつもり",src:"estimate/quote"},{trg:"せいきゅう",src:"billing/invoice"},{trg:"のうひん",src:"delivery (goods)"},{trg:"さくせい",src:"drafting (documents)"}]},

    {type:"mc", q:"The standard Japanese business cycle order is:", opts:["みつもり, のうひん, せいきゅう, しはらい","しはらい, せいきゅう, のうひん, みつもり","こうしょう, しはらい, のうひん, せいきゅう","のうひん, みつもり, しはらい, せいきゅう"], ans:"みつもり, のうひん, せいきゅう, しはらい",
     hint:"First you estimate costs, then deliver, then bill, then receive payment."},
  ]
};
export default BATCH2_L_3;
