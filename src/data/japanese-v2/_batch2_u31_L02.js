// Unit 31 Batch 2 Lesson 2: みんじほうとけいやく (Civil Law & Contracts)
const BATCH2_L_2 = {
  id:"jav2_u31l_b2_2", title:"みんじほうとけいやく", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"みんじほうとけいやく",
     desc:"Civil law governs everyday transactions, property, and disputes between individuals. Learn vocabulary for contracts, liability, compensation, and property rights that is essential for daily life in Japan and JLPT N1 reading passages about legal matters.",
     goals:["Use civil law vocabulary","Discuss contracts and liability","Understand property and compensation terms"]},

    {type:"teach", trg:"みんぽう", src:"civil code / civil law", pos:"noun", gender:null,
     note:"Kanji: 民法. けいやくほう = contract law.\nみんぽうかいせい = civil code revision.",
     example:"A: にほんのみんぽうはめいじじだいにせいていされました。\nB: なんどもかいせいされていますね。",
     exampleSrc:"A: Japan's civil code was enacted during the Meiji era.\nB: It has been revised many times.",
     funFact:"民法 uses 民 (people/citizen) and 法 (law). Japan's みんぽう was modeled on the German and French civil codes during the Meiji era. A major revision in 2020 updated contract law provisions that had remained largely unchanged for over 120 years, modernizing rules about debt obligations, warranty, and consumer protection."},

    {type:"teach", trg:"そんがいばいしょう", src:"damages / compensation for loss", pos:"noun", gender:null,
     note:"Kanji: 損害賠償. そんがいばいしょうせいきゅう = claim for damages.\nA core concept in civil law.",
     example:"A: そんがいばいしょうをせいきゅうすることができます。\nB: どのくらいのがくがにんていされますか？",
     exampleSrc:"A: You can file a claim for damages.\nB: How much will be recognized?",
     funFact:"損害賠償 is a four-kanji compound: 損 (loss), 害 (harm), 賠 (compensate), 償 (repay). In Japanese civil law, そんがいばいしょう covers both financial losses (ざいさんてきそんがい) and emotional suffering (せいしんてきそんがい, known as いしゃりょう). Japan's damage awards tend to be lower than those in the United States."},

    {type:"teach", trg:"いはん", src:"violation / breach / infringement", pos:"noun", gender:null,
     note:"Kanji: 違反. いはんする = to violate.\nけいやくいはん = breach of contract. ほうりついはん = law violation.",
     example:"A: けいやくいはんがあったばあい、そんがいばいしょうがはっせいします。\nB: けいやくしょのないようをよくかくにんしましょう。",
     exampleSrc:"A: In the case of a breach of contract, damages will be incurred.\nB: Let us carefully check the contents of the contract.",
     funFact:"違反 uses 違 (differ/violate) and 反 (oppose/reverse). いはん is a broadly used legal term: こうつういはん (traffic violation), しょくむいはん (workplace violation), きそくいはん (rule violation). In Japanese business, けいやくいはん (breach of contract) is taken extremely seriously and can permanently damage business relationships."},

    {type:"mc", q:"そんがいばいしょう means:", opts:["Compensation for loss or harm","Criminal punishment","Tax payment","Insurance premium"], ans:"Compensation for loss or harm",
     hint:"This four-kanji compound covers both financial losses and emotional suffering."},

    {type:"teach", trg:"しょゆうけん", src:"ownership / property rights", pos:"noun", gender:null,
     note:"Kanji: 所有権. しょゆうけんをしゅちょうする = to claim ownership.\nちてきしょゆうけん = intellectual property rights.",
     example:"A: このとちのしょゆうけんはだれにありますか？\nB: とうきぼをかくにんするひつようがあります。",
     exampleSrc:"A: Who holds the ownership of this land?\nB: We need to check the registry.",
     funFact:"所有権 uses 所有 (possession) and 権 (right). Japan has a land registration system (とうき) at the Legal Affairs Bureau. ちてきしょゆうけん (intellectual property rights) is increasingly important as Japan's economy shifts from manufacturing to innovation. Patent wars, copyright disputes, and trademark issues use this vocabulary extensively."},

    {type:"teach", trg:"そしょう", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"Kanji: 訴訟. そしょうをおこす = to file a lawsuit.\nみんじそしょう = civil lawsuit.",
     example:"A: みんじそしょうをおこすにはべんごしにそうだんしたほうがいいです。\nB: ひようとじかんもかんがえなければなりませんね。",
     exampleSrc:"A: To file a civil lawsuit, you should consult a lawyer.\nB: We must also consider the cost and time.",
     funFact:"訴訟 uses 訴 (sue/accuse) and 訟 (litigate). Japan is often called a 'non-litigious society' compared to the US, but this is changing. The number of そしょう has increased in recent decades. However, Japanese culture still prefers わかい (settlement/mediation) over courtroom battles, reflecting the value of avoiding open conflict."},

    {type:"teach", trg:"わかい", src:"settlement / reconciliation / mediation", pos:"noun", gender:null,
     note:"Kanji: 和解. わかいする = to settle/reconcile.\nしほうわかい = judicial settlement.",
     example:"A: りょうとうじしゃはわかいにたっしました。\nB: さいばんによらずかいけつしたのですね。",
     exampleSrc:"A: Both parties reached a settlement.\nB: It was resolved without going to trial.",
     funFact:"和解 uses 和 (harmony/peace) and 解 (resolve/untie). In Japanese legal culture, わかい is strongly preferred. Courts actively encourage settlement, and many cases resolve through ちょうてい (mediation) before reaching trial. The cultural emphasis on 和 (harmony) makes confrontational litigation less desirable, and successful わかい is seen as a win for both sides."},

    {type:"fb", s:"けいやく{1}があったばあい、そんがいばいしょうがはっせいします。\n(In the case of a breach of contract, damages will be incurred.)", a:"いはん", opts:["いはん","ごうい","じょうけん","きそ"], sSrc:"In the case of a breach of contract, damages will be incurred.",
     hint:"The legal term for going against the agreed terms, a 'violation' or 'breach.'"},

    {type:"teach", trg:"ほしょう", src:"guarantee / warranty / security", pos:"noun", gender:null,
     note:"Kanji: 保証. ほしょうする = to guarantee.\nほしょうにん = guarantor. ほしょうきかん = warranty period.",
     example:"A: このせいひんにはにねんかんのほしょうがつきます。\nB: こしょうしたばあいはむりょうでしゅうりしてもらえますか？",
     exampleSrc:"A: This product comes with a two-year warranty.\nB: Can I get free repairs if it breaks?",
     funFact:"保証 uses 保 (protect) and 証 (prove/certificate). In Japanese real estate, a ほしょうにん (guarantor) is often required for renting an apartment. For foreigners, this can be a major barrier since you need a Japanese resident to vouch for you. ほしょうがいしゃ (guarantee companies) have emerged as alternatives."},

    {type:"teach", trg:"ちんたい", src:"rental / lease", pos:"noun", gender:null,
     note:"Kanji: 賃貸. ちんたいけいやく = rental contract.\nちんたいマンション = rental apartment.",
     example:"A: ちんたいけいやくのないようをよくかくにんしてください。\nB: とくにしきけいきんとれいきんにちゅういしましょう。",
     exampleSrc:"A: Please carefully check the rental contract contents.\nB: Pay special attention to the security deposit and key money.",
     funFact:"賃貸 uses 賃 (rent/wage) and 貸 (lend). Japanese ちんたい culture has unique elements: しきけいきん (security deposit, refundable), れいきん (key money, non-refundable gift to landlord), and ちゅうかいてすうりょう (agent fee). The れいきん system is declining but still common, especially in Tokyo."},

    {type:"mc", q:"わかい is preferred in Japan because:", opts:["Courts are too expensive","Japanese culture values harmony over confrontation","Lawyers are not available","Laws do not allow lawsuits"], ans:"Japanese culture values harmony over confrontation",
     hint:"The kanji 和 (harmony) in わかい reflects the cultural preference for peaceful resolution."},

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
