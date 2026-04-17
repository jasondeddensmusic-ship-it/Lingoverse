// Batch 6 – Unit 25 (B2.1 Business): Negotiations & Contracts
const BATCH6_L1 = {
  id:"jav2_u25l_b6_1", title:"交渉(こうしょう)と契約(けいやく)", icon:"📑", xp:15, board:true,
  steps:[
    {type:"intro", title:"交渉(こうしょう)と契約(けいやく)",
     desc:"Master advanced business vocabulary for negotiations and contracts. These JLPT N2 words are essential for anyone working in a Japanese business environment.",
     goals:["Use negotiation vocabulary: こうしょう, ていあん, じょうけん","Understand contract terminology","Navigate formal business discussions"]},

    {type:"teach", trg:"交渉(こうしょう)", src:"negotiation", pos:"noun", gender:null,
     note:"交渉(こうしょう)する = to negotiate.\n価格(かかく)交渉(こうしょう) = price negotiation.",
     example:"A: クライアントとの交渉(こうしょう)はどうでしたか？\nB: まだ続(つづ)いています。来週(らいしゅう)もう一度(いちど)話(はな)し合(あ)います。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: How were the negotiations with the client?\nB: They are still ongoing. We will talk again next week.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese 交渉(こうしょう) style differs from Western negotiation. 根回(ねまわ)し (nemawashi, consensus-building beforehand) means much of the negotiation happens before the formal meeting. Decisions appear unanimous because disagreements are resolved privately. This approach values 和(わ) (harmony) over confrontation."},

    {type:"teach", trg:"条件(じょうけん)", src:"condition / terms / requirements", pos:"noun", gender:null,
     note:"条件(じょうけん)を出(だ)す = to set conditions.\n最低(さいてい)条件(じょうけん) = minimum conditions.",
     example:"A: 契約(けいやく)の条件(じょうけん)を確認(かくにん)してください。\nB: はい、法務部(ほうむぶ)に確認(かくにん)してもらいます。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Please confirm the contract terms.\nB: Yes, I will have the legal department check them.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"条件(じょうけん) combines 条 (article/clause) and 件 (matter). In Japanese contracts, 条件(じょうけん)が合(あ)う (conditions match) leads to agreement. 条件(じょうけん)付(つ)き (conditional) means with strings attached. Employment ads list 給与条件(きゅうよじょうけん) (salary conditions) and 勤務条件(きんむじょうけん) (work conditions)."},

    {type:"teach", trg:"契約(けいやく)", src:"contract / agreement", pos:"noun", gender:null,
     note:"契約(けいやく)を結(むす)ぶ = to sign/conclude a contract.\n契約書(けいやくしょ) = contract document.",
     example:"A: 契約書(けいやくしょ)にサインをお願(ねが)いします。\nB: 内容(ないよう)をもう一度(いちど)確認(かくにん)させてください。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Please sign the contract.\nB: Let me confirm the contents one more time.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"契約(けいやく) uses 契 (pledge) and 約 (promise). Japanese contracts traditionally required はんこ (seals) rather than signatures. Since 2021, electronic signatures (電子契約(でんしけいやく)) have become legally valid. 契約期間(けいやくきかん) (contract period) and 契約解除(けいやくかいじょ) (contract termination) are key business terms."},

    {type:"teach", trg:"判断(はんだん)", src:"judgment / decision / assessment", pos:"noun", gender:null,
     note:"判断(はんだん)する = to judge/decide.\n判断力(はんだんりょく) = judgment ability.",
     example:"A: 最終的(さいしゅうてき)な判断(はんだん)は社長(しゃちょう)がします。\nB: いつまでに結論(けつろん)が出(で)ますか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The president will make the final judgment.\nB: By when will the conclusion be reached?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"判断(はんだん) combines 判 (judge) and 断 (cut/decide). In Japanese business hierarchy, 判断(はんだん) flows upward: middle managers prepare information, executives make 判断(はんだん). 稟議書(りんぎしょ) (approval document) circulates for はんこ from each level before the final 判断(はんだん)."},

    {type:"teach", trg:"責任(せきにん)", src:"responsibility", pos:"noun", gender:null,
     note:"責任(せきにん)を取(と)る = to take responsibility.\n責任者(せきにんしゃ) = person in charge.",
     example:"A: この問題(もんだい)の責任(せきにん)は誰(だれ)にありますか？\nB: 私(わたし)が責任(せきにん)を持(も)っています。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Who has responsibility for this problem?\nB: I am responsible.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"責任(せきにん) is deeply serious in Japanese culture. When companies fail, executives take 責任(せきにん) by resigning (辞任(じにん)). The phrase 責任(せきにん)を取(と)る (take responsibility) can mean anything from apologizing to stepping down. Personal 責任感(せきにんかん) (sense of responsibility) is instilled from childhood."},

    {type:"mc", q:"契約(けいやく)を結(むす)ぶ means:", opts:["To conclude/sign a contract","To break a contract","To read a contract","To write a contract"], ans:"To conclude/sign a contract",
     hint:"結(むす)ぶ means to tie/c.... Combined with 契約(けいやく), it means formalizing an agreement."},

    {type:"teach", trg:"締(し)め切(き)り", src:"deadline", pos:"noun", gender:null,
     note:"From 締(し)める (close) + 切(き)る (cut off).\n締(し)め切(き)りに間(ま)に合(あ)う = to meet the deadline.",
     example:"A: 締(し)め切(き)りはいつですか？\nB: 来週(らいしゅう)の金曜日(きんようび)です。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"締(し)め切(き)り literally means 'closed and cut off.' Missing a 締(し)め切(き)り is considered very unprofessional in Japanese business. The phrase 締(し)め切(き)りに追(お)われる (being chased by deadlines) describes the stress of time pressure. Manga artists are famous for ぎりぎりの締(し)め切(き)り (last-minute deadline rushes)."},

    {type:"teach", trg:"利益(りえき)", src:"profit / benefit", pos:"noun", gender:null,
     note:"利益(りえき)を出(だ)す = to make a profit.\n損益(そんえき) = profit and loss.",
     example:"A: 今期(こんき)の利益(りえき)は増加(ぞうか)しましたか？\nB: はい、前期比(ぜんきひ)十(じゅっ)パーセント増加(ぞうか)しました。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Did profit increase this quarter?\nB: Yes, it increased 10% compared to last quarter.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"利益(りえき) combines 利 (advantage) and 益 (benefit). In Japanese corporate culture, 公益(こうえき) (public benefit) is valued alongside private profit. Many Japanese companies emphasize 社会貢献(しゃかいこうけん) (social contribution) in their mission statements, balancing 利益(りえき) with social responsibility."},

    {type:"teach", trg:"効率(こうりつ)", src:"efficiency", pos:"noun", gender:null,
     note:"効率的(こうりつてき) = efficient.\n効率(こうりつ)を上(あ)げる = to increase efficiency.",
     example:"A: どうすれば仕事(しごと)の効率(こうりつ)を上(あ)げられますか？\nB: まず無駄(むだ)な会議(かいぎ)を減(へ)らしましょう。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: How can we increase work efficiency?\nB: First, let us reduce unnecessary meetings.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"効率(こうりつ) combines 効 (effect) and 率 (rate). Japanese manufacturing pioneered efficiency with カイゼン (kaizen, continuous improvement) and ジャストインタイム (just-in-time). The Toyota Production System revolutionized global manufacturing through 効率(こうりつ) thinking. However, overworking for 効率(こうりつ) has social costs."},

    {type:"teach", trg:"明確(めいかく)", src:"clear / precise / definite", pos:"adj", gender:null,
     note:"Na-adjective. 明確(めいかく)にする = to clarify.",
     example:"A: 目標(もくひょう)を明確(めいかく)にしてください。\nB: はい、売(う)り上(あ)げを十(じゅっ)パーセント増(ふ)やすことです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Please clarify the goals.\nB: Yes, it is to increase sales by 10%.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"明確(めいかく) combines two 'clear' kanji: 明 (bright) and 確 (certain). In business, 明確(めいかく)な指示(しじ) (clear instructions) and 明確(めいかく)な目標(もくひょう) (clear goals) are expected from leaders. Ambiguity (曖昧(あいまい)) is acceptable in social situations but problematic in business planning."},

    {type:"fb", s:"契約(けいやく)の{1}を確認(かくにん)してください。\n(Please confirm the contract terms.)", a:"じょうけん", opts:["じょうけん","けいやく","こうしょう","しめきり"], sSrc:"Please confirm the contract terms.",
     hint:"The word for conditions, terms, or requirements of an agreement."},

    {type:"teach", trg:"採用(さいよう)", src:"hiring / adoption (of a plan)", pos:"noun", gender:null,
     note:"採用(さいよう)する = to hire/adopt.\n採用試験(さいようしけん) = employment exam.",
     example:"A: 新人(しんじん)の採用(さいよう)はいつからですか？\nB: 四月(しがつ)から新卒採用(しんそつさいよう)が始(はじ)まります。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: When does new hiring start?\nB: New graduate hiring starts from April.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"採用(さいよう) has two meanings: hiring people and adopting plans/ideas. Japan's unique 新卒一括採用(しんそつしいっかつさいよう) (mass hiring of new graduates) system means companies recruit fresh graduates simultaneously every April. This system is uniquely Japanese and shapes the entire education and career planning process."},

    {type:"teach", trg:"貢献(こうけん)", src:"contribution", pos:"noun", gender:null,
     note:"社会(しゃかい)に貢献(こうけん)する = to contribute to society.\n貢献度(こうけんど) = degree of contribution.",
     example:"A: このプロジェクトの成功(せいこう)に大(おお)きく貢献(こうけん)しました。\nB: ありがとうございます。チーム全体(ぜんたい)の努力(どりょく)です。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: You contributed greatly to this project's success.\nB: Thank you. It was the entire team's effort.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"貢献(こうけん) combines 貢 (tribute) and 献 (offering). In Japanese corporate evaluations, 貢献度(こうけんど) (contribution level) determines bonuses and promotions. 社会貢献(しゃかいこうけん) (social contribution) through volunteering, charity, and environmental programs is increasingly important for corporate reputation."},

    {type:"mc", q:"締(し)め切(き)り means:", opts:["Deadline","Contract","Profit","Efficiency"], ans:"Deadline",
     hint:"This word literally means 'closing and cutting off,' referring to a time limit."},

    {type:"match", pairs:[
      {trg:"交渉(こうしょう)", src:"negotiation"},
      {trg:"契約(けいやく)", src:"contract"},
      {trg:"責任(せきにん)", src:"responsibility"},
      {trg:"利益(りえき)", src:"profit"},
      {trg:"効率(こうりつ)", src:"efficiency"}
    ]},

    {type:"fb", s:"目標(もくひょう)を{1}にしてください。\n(Please clarify the goals.)", a:"めいかく", opts:["めいかく","ふくざつ","かんたん","あいまい"], sSrc:"Please clarify the goals.",
     hint:"The na-adjective meaning clear, precise, and definite."},

    {type:"mc", q:"採用(さいよう) covers:", opts:["Both hiring people and adopting plans","Only hiring people","Only adopting plans","Firing people"], ans:"Both hiring people and adopting plans",
     hint:"This versatile word is used for bringing in both new employees and new ideas."}
  ]
};
export default BATCH6_L1;
