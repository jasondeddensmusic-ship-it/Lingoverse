// Unit 31 Batch 2 Lesson 2: みんじほうとけいやく (Civil Law & Contracts)
const BATCH2_L_2 = {
  id:"jav2_u31l_b2_2", title:"みんじほうとけいやく", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"みんじほうとけいやく",
     desc:"Civil law governs everyday transactions, property, and disputes between individuals. Learn vocabulary for contracts, liability, compensation, and property rights that is essential for daily life in Japan and JLPT N1 reading passages about legal matters.",
     goals:["Use civil law vocabulary","Discuss contracts and liability","Understand property and compensation terms"]},

    {type:"teach", trg:"みんぽう", src:"civil code / civil law", pos:"noun", gender:null,
     note:"Kanji: 民法. けいやくほう = contract law.\nみんぽうかいせい = civil code revision.",
     example:"A: にほんのみんぽうはめいじじだいにせいていされました。\nB: なんどもかいせいされていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan's civil code was enacted during the Meiji era.\nB: It has been revised many times.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"民法 uses 民 (people/citizen) and 法 (law). Japan's みんぽう was modeled on the German and French civil codes during the Meiji era. A major revision in 2020 updated contract law provisions that had remained largely unchanged for over 120 years, modernizing rules about debt obligations, warranty, and consumer protection."},

    {type:"teach", trg:"そんがいばいしょう", src:"damages / compensation for loss", pos:"noun", gender:null,
     note:"Kanji: 損害賠償. そんがいばいしょうせいきゅう = claim for damages.\nA core concept in civil law.",
     example:"A: そんがいばいしょうをせいきゅうすることができます。\nB: どのくらいのがくがにんていされますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: You can file a claim for damages.\nB: How much will be recognized?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"損害賠償 is a four-kanji compound: 損 (loss), 害 (harm), 賠 (compensate), 償 (repay). In Japanese civil law, そんがいばいしょう covers both financial losses (ざいさんてきそんがい) and emotional suffering (せいしんてきそんがい, known as いしゃりょう). Japan's damage awards tend to be lower than those in the United States."},

    {type:"teach", trg:"いはん", src:"violation / breach / infringement", pos:"noun", gender:null,
     note:"Kanji: 違反. いはんする = to violate.\nけいやくいはん = breach of contract. ほうりついはん = law violation.",
     example:"A: けいやくいはんがあったばあい、そんがいばいしょうがはっせいします。\nB: けいやくしょのないようをよくかくにんしましょう。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: In the case of a breach of contract, damages will be incurred.\nB: Let us carefully check the contents of the contract.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"違反 uses 違 (differ/violate) and 反 (oppose/reverse). いはん is a broadly used legal term: こうつういはん (traffic violation), しょくむいはん (workplace violation), きそくいはん (rule violation). In Japanese business, けいやくいはん (breach of contract) is taken extremely seriously and can permanently damage business relationships."},

    {type:"mc", q:"そんがいばいしょう means:", opts:["Compensation for loss or harm","Criminal punishment","Tax payment","Insurance premium"], ans:"Compensation for loss or harm",
     hint:"This four-kanji compound covers both financial losses and emotional suffering."},

    {type:"teach", trg:"しょゆうけん", src:"ownership / property rights", pos:"noun", gender:null,
     note:"Kanji: 所有権. しょゆうけんをしゅちょうする = to claim ownership.\nちてきしょゆうけん = intellectual property rights.",
     example:"A: このとちのしょゆうけんはだれにありますか？\nB: とうきぼをかくにんするひつようがあります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Who holds the ownership of this land?\nB: We need to check the registry.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"所有権 uses 所有 (possession) and 権 (right). Japan has a land registration system (とうき) at the Legal Affairs Bureau. ちてきしょゆうけん (intellectual property rights) is increasingly important as Japan's economy shifts from manufacturing to innovation. Patent wars, copyright disputes, and trademark issues use this vocabulary extensively."},

    {type:"teach", trg:"そしょう", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"Kanji: 訴訟. そしょうをおこす = to file a lawsuit.\nみんじそしょう = civil lawsuit.",
     example:"A: みんじそしょうをおこすにはべんごしにそうだんしたほうがいいです。\nB: ひようとじかんもかんがえなければなりませんね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: To file a civil lawsuit, you should consult a lawyer.\nB: We must also consider the cost and time.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"訴訟 uses 訴 (sue/accuse) and 訟 (litigate). Japan is often called a 'non-litigious society' compared to the US, but this is changing. The number of そしょう has increased in recent decades. However, Japanese culture still prefers わかい (settlement/mediation) over courtroom battles, reflecting the value of avoiding open conflict."},

    {type:"teach", trg:"わかい", src:"settlement / reconciliation / mediation", pos:"noun", gender:null,
     note:"Kanji: 和解. わかいする = to settle/reconcile.\nしほうわかい = judicial settlement.",
     example:"A: りょうとうじしゃはわかいにたっしました。\nB: さいばんによらずかいけつしたのですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Both parties reached a settlement.\nB: It was resolved without going to trial.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"和解 uses 和 (harmony/peace) and 解 (resolve/untie). In Japanese legal culture, わかい is strongly preferred. Courts actively encourage settlement, and many cases resolve through ちょうてい (mediation) before reaching trial. The cultural emphasis on 和 (harmony) makes confrontational litigation less desirable, and successful わかい is seen as a win for both sides."},

    {type:"fb", s:"けいやく{1}があったばあい、そんがいばいしょうがはっせいします。\n(In the case of a breach of contract, damages will be incurred.)", a:"いはん", opts:["いはん","ごうい","じょうけん","きそ"], sSrc:"In the case of a breach of contract, damages will be incurred.",
     hint:"The legal term for going against the agreed terms, a 'violation' or 'breach.'"},

    {type:"teach", trg:"ほしょう", src:"guarantee / warranty / security", pos:"noun", gender:null,
     note:"Kanji: 保証. ほしょうする = to guarantee.\nほしょうにん = guarantor. ほしょうきかん = warranty period.",
     example:"A: このせいひんにはにねんかんのほしょうがつきます。\nB: こしょうしたばあいはむりょうでしゅうりしてもらえますか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: This product comes with a two-year warranty.\nB: Can I get free repairs if it breaks?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"保証 uses 保 (protect) and 証 (prove/certificate). In Japanese real estate, a ほしょうにん (guarantor) is often required for renting an apartment. For foreigners, this can be a major barrier since you need a Japanese resident to vouch for you. ほしょうがいしゃ (guarantee companies) have emerged as alternatives."},

    {type:"teach", trg:"ちんたい", src:"rental / lease", pos:"noun", gender:null,
     note:"Kanji: 賃貸. ちんたいけいやく = rental contract.\nちんたいマンション = rental apartment.",
     example:"A: ちんたいけいやくのないようをよくかくにんしてください。\nB: とくにしきけいきんとれいきんにちゅういしましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Please carefully check the rental contract contents.\nB: Pay special attention to the security deposit and key money.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"賃貸 uses 賃 (rent/wage) and 貸 (lend). Japanese ちんたい culture has unique elements: しきけいきん (security deposit, refundable), れいきん (key money, non-refundable gift to landlord), and ちゅうかいてすうりょう (agent fee). The れいきん system is declining but still common, especially in Tokyo."},

    {type:"mc", q:"わかい is preferred in Japan because:", opts:["Courts are too expensive","Japanese culture values harmony over confrontation","Lawyers are not available","Laws do not allow lawsuits"], ans:"Japanese culture values harmony over confrontation",
     hint:"The kanji 和 (h...) in わかい reflects the cultural preference for peaceful resolution."},

    {type:"fb", s:"このせいひんにはにねんかんの{1}がつきます。\n(This product comes with a two-year warranty.)", a:"ほしょう", opts:["ほしょう","けいやく","いはん","そしょう"], sSrc:"This product comes with a two-year warranty.",
     hint:"The noun meaning 'guarantee' or 'warranty,' a promise of quality or service."},

    {type:"match", pairs:[{trg:"みんぽう",src:"civil code"},{trg:"そんがいばいしょう",src:"damages"},{trg:"いはん",src:"violation/breach"},{trg:"しょゆうけん",src:"ownership"}]},

    {type:"fb", s:"りょうとうじしゃは{1}にたっしました。\n(Both parties reached a settlement.)", a:"わかい", opts:["わかい","ごうい","けいやく","そしょう"], sSrc:"Both parties reached a settlement.",
     hint:"The legal term for resolving a dispute through mutual agreement rather than trial."},

    {type:"match", pairs:[{trg:"そしょう",src:"lawsuit"},{trg:"わかい",src:"settlement"},{trg:"ほしょう",src:"guarantee"},{trg:"ちんたい",src:"rental/lease"}]},

    {type:"mc", q:"ちんたいけいやく in Japan often requires:", opts:["しきけいきん and れいきん (deposit and key money)","Only a monthly rent payment","No contract at all","Government approval"], ans:"しきけいきん and れいきん (deposit and key money)",
     hint:"Japanese rental culture has unique upfront costs beyond the monthly rent."},
  ]
};
export default BATCH2_L_2;
