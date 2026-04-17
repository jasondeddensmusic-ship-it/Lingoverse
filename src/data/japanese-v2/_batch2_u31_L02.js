// Unit 31 Batch 2 Lesson 2: 民事法(みんじほう)と契約(けいやく) (Civil Law & Contracts)
const BATCH2_L_2 = {
  id:"jav2_u31l_b2_2", title:"民事法(みんじほう)と契約(けいやく)", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"民事法(みんじほう)と契約(けいやく)",
     desc:"Civil law governs everyday transactions, property, and disputes between individuals. Learn vocabulary for contracts, liability, compensation, and property rights that is essential for daily life in Japan and JLPT N1 reading passages about legal matters.",
     goals:["Use civil law vocabulary","Discuss contracts and liability","Understand property and compensation terms"]},

    {type:"teach", trg:"民法(みんぽう)", src:"civil code / civil law", pos:"noun", gender:null,
     note:"Kanji: 民法. 契約法(けいやくほう) = contract law.\n民法(みんぽう)改正(かいせい) = civil code revision.",
     example:"A: 日本(にほん)の民法(みんぽう)は明治時代(めいじじだい)に制定(せいてい)されました。\nB: 何度(なんど)も改正(かいせい)されていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan's civil code was enacted during the Meiji era.\nB: It has been revised many times.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"民法 uses 民 (people/citizen) and 法 (law). Japan's 民法(みんぽう) was modeled on the German and French civil codes during the Meiji era. A major revision in 2020 updated contract law provisions that had remained largely unchanged for over 120 years, modernizing rules about debt obligations, warranty, and consumer protection."},

    {type:"teach", trg:"損害(そんがい)賠償(ばいしょう)", src:"damages / compensation for loss", pos:"noun", gender:null,
     note:"Kanji: 損害賠償. 損害(そんがい)賠償(ばいしょう)請求(せいきゅう) = claim for damages.\nA core concept in civil law.",
     example:"A: 損害(そんがい)賠償(ばいしょう)を請求(せいきゅう)することができます。\nB: どのくらいの額(がく)が認定(にんてい)されますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: You can file a claim for damages.\nB: How much will be recognized?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"損害賠償 is a four-kanji compound: 損 (loss), 害 (harm), 賠 (compensate), 償 (repay). In Japanese civil law, 損害(そんがい)賠償(ばいしょう) covers both financial losses (財産的(ざいさんてき)損害(そんがい)) and emotional suffering (精神的(せいしんてき)損害(そんがい), known as 慰謝料(いしゃりょう)). Japan's damage awards tend to be lower than those in the United States."},

    {type:"teach", trg:"違反(いはん)", src:"violation / breach / infringement", pos:"noun", gender:null,
     note:"Kanji: 違反. 違反(いはん)する = to violate.\n契約(けいやく)違反(いはん) = breach of contract. 法律(ほうりつ)違反(いはん) = law violation.",
     example:"A: 契約(けいやく)違反(いはん)があった場合(ばあい)、損害(そんがい)賠償(ばいしょう)が発生(はっせい)します。\nB: 契約書(けいやくしょ)の内容(ないよう)をよく確認(かくにん)しましょう。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: In the case of a breach of contract, damages will be incurred.\nB: Let us carefully check the contents of the contract.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"違反 uses 違 (differ/violate) and 反 (oppose/reverse). 違反(いはん) is a broadly used legal term: 交通(こうつう)違反(いはん) (traffic violation), 職務(しょくむ)違反(いはん) (workplace violation), 規則(きそく)違反(いはん) (rule violation). In Japanese business, 契約(けいやく)違反(いはん) (breach of contract) is taken extremely seriously and can permanently damage business relationships."},

    {type:"mc", q:"損害(そんがい)賠償(ばいしょう) means:", opts:["Compensation for loss or harm","Criminal punishment","Tax payment","Insurance premium"], ans:"Compensation for loss or harm",
     hint:"This four-kanji compound covers both financial losses and emotional suffering."},

    {type:"teach", trg:"所有権(しょゆうけん)", src:"ownership / property rights", pos:"noun", gender:null,
     note:"Kanji: 所有権. 所有権(しょゆうけん)を主張(しゅちょう)する = to claim ownership.\n知的(ちてき)所有権(しょゆうけん) = intellectual property rights.",
     example:"A: この土地(とち)の所有権(しょゆうけん)は誰(だれ)にありますか？\nB: 登記簿(とうきぼ)を確認(かくにん)する必要(ひつよう)があります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Who holds the ownership of this land?\nB: We need to check the registry.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"所有権 uses 所有(しょゆう) (possession) and 権(けん) (right). Japan has a land registration system (登記(とうき)) at the Legal Affairs Bureau. 知的(ちてき)所有権(しょゆうけん) (intellectual property rights) is increasingly important as Japan's economy shifts from manufacturing to innovation. Patent wars, copyright disputes, and trademark issues use this vocabulary extensively."},

    {type:"teach", trg:"訴訟(そしょう)", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"Kanji: 訴訟. 訴訟(そしょう)を起(お)こす = to file a lawsuit.\n民事(みんじ)訴訟(そしょう) = civil lawsuit.",
     example:"A: 民事(みんじ)訴訟(そしょう)を起(お)こすには弁護士(べんごし)に相談(そうだん)したほうがいいです。\nB: 費用(ひよう)と時間(じかん)も考(かんが)えなければなりませんね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: To file a civil lawsuit, you should consult a lawyer.\nB: We must also consider the cost and time.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"訴訟 uses 訴 (sue/accuse) and 訟 (litigate). Japan is often called a 'non-litigious society' compared to the US, but this is changing. The number of 訴訟(そしょう) has increased in recent decades. However, Japanese culture still prefers 和解(わかい) (settlement/mediation) over courtroom battles, reflecting the value of avoiding open conflict."},

    {type:"teach", trg:"和解(わかい)", src:"settlement / reconciliation / mediation", pos:"noun", gender:null,
     note:"Kanji: 和解. 和解(わかい)する = to settle/reconcile.\n司法(しほう)和解(わかい) = judicial settlement.",
     example:"A: 両当事者(りょうとうじしゃ)は和解(わかい)に達(たっ)しました。\nB: 裁判(さいばん)によらず解決(かいけつ)したのですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Both parties reached a settlement.\nB: It was resolved without going to trial.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"和解 uses 和 (harmony/peace) and 解 (resolve/untie). In Japanese legal culture, 和解(わかい) is strongly preferred. Courts actively encourage settlement, and many cases resolve through 調停(ちょうてい) (mediation) before reaching trial. The cultural emphasis on 和(わ) (harmony) makes confrontational litigation less desirable, and successful 和解(わかい) is seen as a win for both sides."},

    {type:"fb", s:"契約(けいやく){1}があった場合(ばあい)、損害(そんがい)賠償(ばいしょう)が発生(はっせい)します。\n(In the case of a breach of contract, damages will be incurred.)", a:"違反(いはん)", opts:["違反(いはん)","合意(ごうい)","条件(じょうけん)","起訴(きそ)"], sSrc:"In the case of a breach of contract, damages will be incurred.",
     hint:"The legal term for going against the agreed terms, a 'violation' or 'breach.'"},

    {type:"teach", trg:"保証(ほしょう)", src:"guarantee / warranty / security", pos:"noun", gender:null,
     note:"Kanji: 保証. 保証(ほしょう)する = to guarantee.\n保証人(ほしょうにん) = guarantor. 保証(ほしょう)期間(きかん) = warranty period.",
     example:"A: この製品(せいひん)には二年間(にねんかん)の保証(ほしょう)がつきます。\nB: 故障(こしょう)した場合(ばあい)は無料(むりょう)で修理(しゅうり)してもらえますか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: This product comes with a two-year warranty.\nB: Can I get free repairs if it breaks?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"保証 uses 保 (protect) and 証 (prove/certificate). In Japanese real estate, a 保証人(ほしょうにん) (guarantor) is often required for renting an apartment. For foreigners, this can be a major barrier since you need a Japanese resident to vouch for you. 保証(ほしょう)会社(がいしゃ) (guarantee companies) have emerged as alternatives."},

    {type:"teach", trg:"賃貸(ちんたい)", src:"rental / lease", pos:"noun", gender:null,
     note:"Kanji: 賃貸. 賃貸(ちんたい)契約(けいやく) = rental contract.\n賃貸(ちんたい)マンション = rental apartment.",
     example:"A: 賃貸(ちんたい)契約(けいやく)の内容(ないよう)をよく確認(かくにん)してください。\nB: 特(とく)に敷金(しきけいきん)と礼金(れいきん)に注意(ちゅうい)しましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Please carefully check the rental contract contents.\nB: Pay special attention to the security deposit and key money.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"賃貸 uses 賃 (rent/wage) and 貸 (lend). Japanese 賃貸(ちんたい) culture has unique elements: 敷金(しききん) (security deposit, refundable), 礼金(れいきん) (key money, non-refundable gift to landlord), and 仲介(ちゅうかい)手数料(てすうりょう) (agent fee). The 礼金(れいきん) system is declining but still common, especially in Tokyo."},

    {type:"mc", q:"和解(わかい) is preferred in Japan because:", opts:["Courts are too expensive","Japanese culture values harmony over confrontation","Lawyers are not available","Laws do not allow lawsuits"], ans:"Japanese culture values harmony over confrontation",
     hint:"The kanji 和(わ) (h...) in 和解(わかい) reflects the cultural preference for peaceful resolution."},

    {type:"fb", s:"この製品(せいひん)には二年間(にねんかん)の{1}がつきます。\n(This product comes with a two-year warranty.)", a:"保証(ほしょう)", opts:["保証(ほしょう)","契約(けいやく)","違反(いはん)","訴訟(そしょう)"], sSrc:"This product comes with a two-year warranty.",
     hint:"The noun meaning 'guarantee' or 'warranty,' a promise of quality or service."},

    {type:"match", pairs:[{trg:"民法(みんぽう)",src:"civil code"},{trg:"損害(そんがい)賠償(ばいしょう)",src:"damages"},{trg:"違反(いはん)",src:"violation/breach"},{trg:"所有権(しょゆうけん)",src:"ownership"}]},

    {type:"fb", s:"両当事者(りょうとうじしゃ)は{1}に達(たっ)しました。\n(Both parties reached a settlement.)", a:"和解(わかい)", opts:["和解(わかい)","合意(ごうい)","契約(けいやく)","訴訟(そしょう)"], sSrc:"Both parties reached a settlement.",
     hint:"The legal term for resolving a dispute through mutual agreement rather than trial."},

    {type:"match", pairs:[{trg:"訴訟(そしょう)",src:"lawsuit"},{trg:"和解(わかい)",src:"settlement"},{trg:"保証(ほしょう)",src:"guarantee"},{trg:"賃貸(ちんたい)",src:"rental/lease"}]},

    {type:"mc", q:"賃貸(ちんたい)契約(けいやく) in Japan often requires:", opts:["敷金(しききん) and 礼金(れいきん) (deposit and key money)","Only a monthly rent payment","No contract at all","Government approval"], ans:"敷金(しききん) and 礼金(れいきん) (deposit and key money)",
     hint:"Japanese rental culture has unique upfront costs beyond the monthly rent."},
  ]
};
export default BATCH2_L_2;
