// Batch 11 – Unit 31 (B2.3 Law): Legal & Rights Vocabulary
const BATCH11_L1 = {
  id:"jav2_u31l_b11_1", title:"ほうとけんり", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうとけんり",
     desc:"Learn legal and rights vocabulary essential for understanding Japanese law, contracts, and civic life. These terms appear in news, documents, and JLPT N2.",
     goals:["Use basic legal vocabulary in context","Discuss rights and obligations","Understand legal concepts in Japanese society"]},

    {type:"teach", trg:"けんり", src:"right (legal/human)", pos:"noun", gender:null,
     note:"きほんてきじんけん = basic human rights.\nけんりをまもる = protect rights.",
     example:"A: すべてのひとにはびょうどうなけんりがあります。\nB: けんぽうでほしょうされていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: All people have equal rights.\nB: They are guaranteed by the constitution.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"けんり (権利) combines 権 (authority) and 利 (benefit). Japan's postwar constitution guarantees extensive けんり including じんけん (human rights), ひょうげんのじゆう (freedom of expression), and きょういくをうけるけんり (right to education). Article 9 (戦争放棄) renouncing war is the most debated provision."},

    {type:"teach", trg:"ぎむ", src:"obligation / duty", pos:"noun", gender:null,
     note:"Opposite of けんり. こくみんのぎむ = citizen's duties.\nのうぜいのぎむ = obligation to pay taxes.",
     example:"A: にほんこくみんにはさんだいぎむがあります。\nB: きょういく、きんろう、のうぜいですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japanese citizens have three major obligations.\nB: Education, work, and paying taxes.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's constitution specifies three ぎむ (obligations): きょういくのぎむ (compulsory education), きんろうのぎむ (duty to work), and のうぜいのぎむ (duty to pay taxes). The balance between けんり and ぎむ is a fundamental civic concept taught from elementary school."},

    {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
     note:"けいやくする = to sign a contract.\nけいやくしょ = contract document.",
     example:"A: けいやくしょをよくよんでからサインしてください。\nB: わかりました。ないようをかくにんします。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Please read the contract carefully before signing.\nB: Understood. I will confirm the contents.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese business traditionally relied on しんらいかんけい (trust relationships) over formal けいやく. Handshake deals were common. However, globalization has increased the importance of written けいやくしょ. Japanese contracts tend to be shorter than American ones, relying more on good faith (誠意) between parties."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"しょうこをだす = present evidence.\nしょうこぶつ = physical evidence.",
     example:"A: しょうこがなければゆうざいにはなりません。\nB: すいていゆうざいのげんそくですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Without evidence, one cannot be found guilty.\nB: The presumption of innocence principle.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan's legal system requires しょうこ for conviction, but the conviction rate exceeds 99%, raising international concern. しょうこ includes ぶっしょう (physical evidence), しょうにんしょうげん (witness testimony), and じはく (confession). The high conviction rate means prosecutors only bring cases they are very confident of winning."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"さいばんしょ = courthouse.\nさいばんかん = judge.",
     example:"A: さいばんいんせいどをしっていますか？\nB: はい、いっぱんしみんがさいばんにさんかするせいどですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Do you know the lay judge system?\nB: Yes, it is a system where ordinary citizens participate in trials.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan introduced さいばんいんせいど (lay judge system) in 2009, allowing citizens to participate in serious criminal trials. Before this, only professional judges decided cases. The system was modeled partly on American jury trials but differs significantly: lay judges deliberate alongside professional judges rather than separately."},

    {type:"teach", trg:"いはん", src:"violation / infringement", pos:"noun", gender:null,
     note:"ほういはん = law violation.\nいはんする = to violate.",
     example:"A: こうつういはんでばっきんをはらいました。\nB: なにをしたのですか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I paid a fine for a traffic violation.\nB: What did you do?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan has strict こうつういはん (traffic violation) enforcement. Common violations include speed (スピードいはん), running red lights (しんごうむし), and cycling while using a phone (ながらスマホ). Fines are paid at convenience stores or post offices. Accumulating violations leads to license suspension."},

    {type:"teach", trg:"ばっきん", src:"fine (monetary penalty)", pos:"noun", gender:null,
     note:"ばっきんをはらう = pay a fine.\nばっきんけい = punishable by fine.",
     example:"A: ちゅうしゃいはんのばっきんはいくらですか？\nB: ばしょによりますが、いちまんごせんえんくらいです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: How much is the fine for a parking violation?\nB: It depends on the location, but about 15,000 yen.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese ばっきん range from small traffic fines to massive corporate penalties. Japan's anti-monopoly laws (独占禁止法) can impose billions of yen in ばっきん on price-fixing companies. Environmental violations also carry significant ばっきん. The system emphasizes deterrence through proportional financial penalties."},

    {type:"teach", trg:"せいとう", src:"legitimate / justified / fair", pos:"adj", gender:null,
     note:"せいとうなりゆう = legitimate reason.\nせいとうぼうえい = self-defense (legal).",
     example:"A: これはせいとうなけんりのこうしです。\nB: たしかに、ほうりつてきにもんだいはありません。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: This is a legitimate exercise of rights.\nB: Indeed, there is no legal problem.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"せいとう (正当) combines 正 (correct) and 当 (appropriate). せいとうぼうえい (justifiable self-defense) is a key legal concept. In Japanese law, the use of force must be せいとう and proportional. The concept extends beyond law: せいとうなひょうか (fair evaluation) is expected in workplaces and schools."},

    {type:"teach", trg:"そんがいばいしょう", src:"compensation for damages", pos:"noun", gender:null,
     note:"そんがいばいしょうをせいきゅうする = claim damages.\nLegal remedy for harm.",
     example:"A: じこのひがいしゃはそんがいばいしょうをせいきゅうしました。\nB: さいばんでみとめられましたか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The accident victim claimed compensation for damages.\nB: Was it recognized in court?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"そんがいばいしょう (損害賠償) is a fundamental legal concept in Japanese civil law. Japan's damage awards are generally lower than American ones, but include いしゃりょう (consolation money for emotional suffering). Product liability cases (せいぞうぶつせきにん) and medical malpractice are common そんがいばいしょう contexts."},

    {type:"teach", trg:"じょうれい", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"しじょうれい = city ordinance.\nじょうれいでさだめる = establish by ordinance.",
     example:"A: このちいきにはどくじのじょうれいがあります。\nB: どんなじょうれいですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This region has its own ordinances.\nB: What kind of ordinances?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese じょうれい (条例) are local laws enacted by municipalities. Famous ones include Kyoto's けいかんじょうれい (landscape ordinance) limiting building heights to protect traditional views. Some cities have ポイすてきんしじょうれい (anti-littering ordinances) with fines. Local じょうれい reflect each community's unique values and concerns."},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
     example:"A: にほんこくけんぽうはいつせいていされましたか？\nB: せんきゅうひゃくよんじゅうろくねんです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: When was the Japanese constitution established?\nB: In 1946.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's けんぽう (憲法), enacted in 1947, has never been amended, making it one of the oldest unchanged constitutions. だいきゅうじょう (Article 9) renouncing war is both celebrated and debated. けんぽうかいせい (amendment) requires two-thirds of both parliamentary houses and a national referendum, making change extremely difficult."},

    // Quiz steps
    {type:"mc", q:"にほんこくみんのさんだいぎむはなんですか？",
     opts:["Education, work, and paying taxes","Voting, military service, and education","Work, voting, and recycling","Education, healthcare, and taxes"],
     ans:"Education, work, and paying taxes",
     hint:"Japan's constitution specifies three obligations for citizens. Two are economic and one is educational."},

    {type:"fb", s:"すべてのひとにはびょうどうな{1}があります。",
     a:["けんり"],
     opts:["けんり","ぎむ","ばっきん","けいやく"],
     hint:"All people possess equal legal protections. This word means 'rights.'",
     sSrc:"All people have equal rights."},

    {type:"match", pairs:[
      {trg:"けんり", src:"right"},
      {trg:"ぎむ", src:"obligation"},
      {trg:"しょうこ", src:"evidence"},
      {trg:"さいばん", src:"trial"}
    ]},

    {type:"mc", q:"にほんのゆうざいりつはどのくらいですか？",
     opts:["Over 99%","About 50%","About 75%","About 90%"],
     ans:"Over 99%",
     hint:"Japan's conviction rate is remarkably high, which means prosecutors are very selective about which cases to bring to court."},

    {type:"fb", s:"こうつう{1}でばっきんをはらいました。",
     a:["いはん"],
     opts:["いはん","けいやく","さいばん","じょうれい"],
     hint:"You committed a traffic infraction and had to pay a fine. This word means 'violation.'",
     sSrc:"I paid a fine for a traffic violation."},

    {type:"mc", q:"にほんこくけんぽうのだいきゅうじょうはなにをきていしていますか？",
     opts:["Renunciation of war","Freedom of speech","Right to education","Right to work"],
     ans:"Renunciation of war",
     hint:"This is the most famous and most debated article of the Japanese constitution, establishing a unique military policy."}
  ]
};
export default BATCH11_L1;
