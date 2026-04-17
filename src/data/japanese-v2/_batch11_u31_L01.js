// Batch 11 – Unit 31 (B2.3 Law): Legal & Rights Vocabulary
const BATCH11_L1 = {
  id:"jav2_u31l_b11_1", title:"法(ほう)と権利(けんり)", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"法(ほう)と権利(けんり)",
     desc:"Learn legal and rights vocabulary essential for understanding Japanese law, contracts, and civic life. These terms appear in news, documents, and JLPT N2.",
     goals:["Use basic legal vocabulary in context","Discuss rights and obligations","Understand legal concepts in Japanese society"]},

    {type:"teach", trg:"権利(けんり)", src:"right (legal/human)", pos:"noun", gender:null,
     note:"基本的人権(きほんてきじんけん) = basic human rights.\n権利(けんり)を守(まも)る = protect rights.",
     example:"A: すべての人(ひと)には平等(びょうどう)な権利(けんり)があります。\nB: 憲法(けんぽう)で保障(ほしょう)されていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: All people have equal rights.\nB: They are guaranteed by the constitution.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"権利(けんり) combines 権(けん) (authority) and 利(り) (benefit). Japan's postwar constitution guarantees extensive 権利(けんり) including 人権(じんけん) (human rights), 表現(ひょうげん)の自由(じゆう) (freedom of expression), and 教育(きょういく)を受(う)ける権利(けんり) (right to education). Article 9 (戦争放棄(せんそうほうき)) renouncing war is the most debated provision."},

    {type:"teach", trg:"義務(ぎむ)", src:"obligation / duty", pos:"noun", gender:null,
     note:"Opposite of 権利(けんり). 国民(こくみん)の義務(ぎむ) = citizen's duties.\n納税(のうぜい)の義務(ぎむ) = obligation to pay taxes.",
     example:"A: 日本国民(にほんこくみん)には三大(さんだい)義務(ぎむ)があります。\nB: 教育(きょういく)、勤労(きんろう)、納税(のうぜい)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japanese citizens have three major obligations.\nB: Education, work, and paying taxes.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's constitution specifies three 義務(ぎむ) (obligations): 教育(きょういく)の義務(ぎむ) (compulsory education), 勤労(きんろう)の義務(ぎむ) (duty to work), and 納税(のうぜい)の義務(ぎむ) (duty to pay taxes). The balance between 権利(けんり) and 義務(ぎむ) is a fundamental civic concept taught from elementary school."},

    {type:"teach", trg:"契約(けいやく)", src:"contract / agreement", pos:"noun", gender:null,
     note:"契約(けいやく)する = to sign a contract.\n契約書(けいやくしょ) = contract document.",
     example:"A: 契約書(けいやくしょ)をよく読(よ)んでからサインしてください。\nB: 分(わ)かりました。内容(ないよう)を確認(かくにん)します。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Please read the contract carefully before signing.\nB: Understood. I will confirm the contents.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese business traditionally relied on 信頼関係(しんらいかんけい) (trust relationships) over formal 契約(けいやく). Handshake deals were common. However, globalization has increased the importance of written 契約書(けいやくしょ). Japanese contracts tend to be shorter than American ones, relying more on good faith (誠意(せいい)) between parties."},

    {type:"teach", trg:"証拠(しょうこ)", src:"evidence / proof", pos:"noun", gender:null,
     note:"証拠(しょうこ)を出(だ)す = present evidence.\n証拠物(しょうこぶつ) = physical evidence.",
     example:"A: 証拠(しょうこ)がなければ有罪(ゆうざい)にはなりません。\nB: 推定(すいてい)有罪(ゆうざい)の原則(げんそく)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Without evidence, one cannot be found guilty.\nB: The presumption of innocence principle.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan's legal system requires 証拠(しょうこ) for conviction, but the conviction rate exceeds 99%, raising international concern. 証拠(しょうこ) includes 物証(ぶっしょう) (physical evidence), 証人証言(しょうにんしょうげん) (witness testimony), and 自白(じはく) (confession). The high conviction rate means prosecutors only bring cases they are very confident of winning."},

    {type:"teach", trg:"裁判(さいばん)", src:"trial / court case", pos:"noun", gender:null,
     note:"裁判所(さいばんしょ) = courthouse.\n裁判官(さいばんかん) = judge.",
     example:"A: 裁判員制度(さいばんいんせいど)を知(し)っていますか？\nB: はい、一般(いっぱん)市民(しみん)が裁判(さいばん)に参加(さんか)する制度(せいど)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Do you know the lay judge system?\nB: Yes, it is a system where ordinary citizens participate in trials.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan introduced 裁判員制度(さいばんいんせいど) (lay judge system) in 2009, allowing citizens to participate in serious criminal trials. Before this, only professional judges decided cases. The system was modeled partly on American jury trials but differs significantly: lay judges deliberate alongside professional judges rather than separately."},

    {type:"teach", trg:"違反(いはん)", src:"violation / infringement", pos:"noun", gender:null,
     note:"法(ほう)違反(いはん) = law violation.\n違反(いはん)する = to violate.",
     example:"A: 交通(こうつう)違反(いはん)で罰金(ばっきん)を払(はら)いました。\nB: 何(なに)をしたのですか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I paid a fine for a traffic violation.\nB: What did you do?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan has strict 交通(こうつう)違反(いはん) (traffic violation) enforcement. Common violations include speed (スピード違反(いはん)), running red lights (信号無視(しんごうむし)), and cycling while using a phone (ながらスマホ). Fines are paid at convenience stores or post offices. Accumulating violations leads to license suspension."},

    {type:"teach", trg:"罰金(ばっきん)", src:"fine (monetary penalty)", pos:"noun", gender:null,
     note:"罰金(ばっきん)を払(はら)う = pay a fine.\n罰金(ばっきん)刑(けい) = punishable by fine.",
     example:"A: 駐車(ちゅうしゃ)違反(いはん)の罰金(ばっきん)はいくらですか？\nB: 場所(ばしょ)によりますが、一万五千円(いちまんごせんえん)くらいです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: How much is the fine for a parking violation?\nB: It depends on the location, but about 15,000 yen.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese 罰金(ばっきん) range from small traffic fines to massive corporate penalties. Japan's anti-monopoly laws (独占禁止法(どくせんきんしほう)) can impose billions of yen in 罰金(ばっきん) on price-fixing companies. Environmental violations also carry significant 罰金(ばっきん). The system emphasizes deterrence through proportional financial penalties."},

    {type:"teach", trg:"正当(せいとう)", src:"legitimate / justified / fair", pos:"adj", gender:null,
     note:"正当(せいとう)な理由(りゆう) = legitimate reason.\n正当(せいとう)防衛(ぼうえい) = self-defense (legal).",
     example:"A: これは正当(せいとう)な権利(けんり)の行使(こうし)です。\nB: 確(たし)かに、法律的(ほうりつてき)に問題(もんだい)はありません。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: This is a legitimate exercise of rights.\nB: Indeed, there is no legal problem.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"正当(せいとう) combines 正(せい) (correct) and 当(とう) (appropriate). 正当(せいとう)防衛(ぼうえい) (justifiable self-defense) is a key legal concept. In Japanese law, the use of force must be 正当(せいとう) and proportional. The concept extends beyond law: 正当(せいとう)な評価(ひょうか) (fair evaluation) is expected in workplaces and schools."},

    {type:"teach", trg:"損害賠償(そんがいばいしょう)", src:"compensation for damages", pos:"noun", gender:null,
     note:"損害賠償(そんがいばいしょう)を請求(せいきゅう)する = claim damages.\nLegal remedy for harm.",
     example:"A: 事故(じこ)の被害者(ひがいしゃ)は損害賠償(そんがいばいしょう)を請求(せいきゅう)しました。\nB: 裁判(さいばん)で認(みと)められましたか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The accident victim claimed compensation for damages.\nB: Was it recognized in court?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"損害賠償(そんがいばいしょう) is a fundamental legal concept in Japanese civil law. Japan's damage awards are generally lower than American ones, but include 慰謝料(いしゃりょう) (consolation money for emotional suffering). Product liability cases (製造物責任(せいぞうぶつせきにん)) and medical malpractice are common 損害賠償(そんがいばいしょう) contexts."},

    {type:"teach", trg:"条例(じょうれい)", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"市(し)条例(じょうれい) = city ordinance.\n条例(じょうれい)で定(さだ)める = establish by ordinance.",
     example:"A: この地域(ちいき)には独自(どくじ)の条例(じょうれい)があります。\nB: どんな条例(じょうれい)ですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: This region has its own ordinances.\nB: What kind of ordinances?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese 条例(じょうれい) are local laws enacted by municipalities. Famous ones include Kyoto's 景観(けいかん)条例(じょうれい) (landscape ordinance) limiting building heights to protect traditional views. Some cities have ポイ捨(す)て禁止(きんし)条例(じょうれい) (anti-littering ordinances) with fines. Local 条例(じょうれい) reflect each community's unique values and concerns."},

    {type:"teach", trg:"憲法(けんぽう)", src:"constitution", pos:"noun", gender:null,
     note:"日本国憲法(にほんこくけんぽう) = Constitution of Japan.\n憲法改正(けんぽうかいせい) = constitutional amendment.",
     example:"A: 日本国憲法(にほんこくけんぽう)はいつ制定(せいてい)されましたか？\nB: 千九百四十六年(せんきゅうひゃくよんじゅうろくねん)です。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: When was the Japanese constitution established?\nB: In 1946.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's 憲法(けんぽう), enacted in 1947, has never been amended, making it one of the oldest unchanged constitutions. 第九条(だいきゅうじょう) (Article 9) renouncing war is both celebrated and debated. 憲法改正(けんぽうかいせい) (amendment) requires two-thirds of both parliamentary houses and a national referendum, making change extremely difficult."},

    // Quiz steps
    {type:"mc", q:"日本国民(にほんこくみん)の三大(さんだい)義務(ぎむ)は何(なん)ですか？",
     opts:["Education, work, and paying taxes","Voting, military service, and education","Work, voting, and recycling","Education, healthcare, and taxes"],
     ans:"Education, work, and paying taxes",
     hint:"Japan's constitution specifies three obligations for citizens. Two are economic and one is educational."},

    {type:"fb", s:"すべての人(ひと)には平等(びょうどう)な{1}があります。",
     a:["権利(けんり)"],
     opts:["権利(けんり)","義務(ぎむ)","罰金(ばっきん)","契約(けいやく)"],
     hint:"All people possess equal legal protections. This word means 'rights.'",
     sSrc:"All people have equal rights."},

    {type:"match", pairs:[
      {trg:"権利(けんり)", src:"right"},
      {trg:"義務(ぎむ)", src:"obligation"},
      {trg:"証拠(しょうこ)", src:"evidence"},
      {trg:"裁判(さいばん)", src:"trial"}
    ]},

    {type:"mc", q:"日本(にほん)の有罪(ゆうざい)率(りつ)はどのくらいですか？",
     opts:["Over 99%","About 50%","About 75%","About 90%"],
     ans:"Over 99%",
     hint:"Japan's conviction rate is remarkably high, which means prosecutors are very selective about which cases to bring to court."},

    {type:"fb", s:"交通(こうつう){1}で罰金(ばっきん)を払(はら)いました。",
     a:["違反(いはん)"],
     opts:["違反(いはん)","契約(けいやく)","裁判(さいばん)","条例(じょうれい)"],
     hint:"You committed a traffic infraction and had to pay a fine. This word means 'violation.'",
     sSrc:"I paid a fine for a traffic violation."},

    {type:"mc", q:"日本国憲法(にほんこくけんぽう)の第九条(だいきゅうじょう)は何(なに)を規定(きてい)していますか？",
     opts:["Renunciation of war","Freedom of speech","Right to education","Right to work"],
     ans:"Renunciation of war",
     hint:"This is the most famous and most debated article of the Japanese constitution, establishing a unique military policy."}
  ]
};
export default BATCH11_L1;
