// Batch 11 – Unit 26 (B2.1 News & Media): Media & Communication Vocabulary
const BATCH11_L1 = {
  id:"jav2_u26l_b11_1", title:"メディアの言葉(ことば)", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアの言葉(ことば)",
     desc:"Learn vocabulary for discussing news, media, and information in Japanese society. These words appear daily in newspapers, TV news, and online media.",
     goals:["Discuss news and media using appropriate vocabulary","Understand journalism and information terminology","Express views about media and reporting"]},

    {type:"teach", trg:"報道(ほうどう)", src:"news reporting / coverage", pos:"noun", gender:null,
     note:"報道(ほうどう)する = to report (news).\n報道(ほうどう)機関(きかん) = news organization.",
     example:"A: この事件(じけん)についての報道(ほうどう)を見(み)ましたか？\nB: はい、テレビで見(み)ました。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Did you see the news coverage about this incident?\nB: Yes, I saw it on TV.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"報道(ほうどう) is the formal term for journalism and news reporting. 報道(ほうどう)の自由(じゆう) (freedom of the press) is a key democratic concept. Japan's press clubs (記者(きしゃ)クラブ) are unique: only member journalists access government briefings, creating a distinct media ecosystem."},

    {type:"teach", trg:"記事(きじ)", src:"article (news/magazine)", pos:"noun", gender:null,
     note:"新聞(しんぶん)記事(きじ) = newspaper article.\n記事(きじ)を書(か)く = write an article.",
     example:"A: この記事(きじ)を読(よ)みましたか？面白(おもしろ)いですよ。\nB: まだです。後(あと)で読(よ)みます。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Did you read this article? It is interesting.\nB: Not yet. I will read it later.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"記事(きじ) combines 記(き) (record) and 事(じ) (matter). Japanese newspaper articles follow the 逆三角形(ぎゃくさんかくけい) (inverted triangle) structure: most important info first, details later. Online 記事(きじ) (web articles) have transformed Japanese media consumption, especially among younger generations who rarely buy newspapers."},

    {type:"teach", trg:"世論(よろん)", src:"public opinion", pos:"noun", gender:null,
     note:"世論調査(よろんちょうさ) = public opinion poll.\n世論(よろん)を反映(はんえい)する = reflect public opinion.",
     example:"A: 最近(さいきん)の世論調査(よろんちょうさ)の結果(けっか)はどうでしたか？\nB: 支持率(しじりつ)が下(さ)がっています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: What were the results of the recent opinion poll?\nB: The approval rating is declining.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"世論調査(よろんちょうさ) are conducted frequently by major newspapers (Asahi, Yomiuri, Mainichi) and NHK. Cabinet approval ratings (内閣支持率(ないかくしじりつ)) are closely watched. Japanese media reports polls with precision: 支持(しじ)する (support) vs 支持(しじ)しない (don't support) percentages dominate political coverage."},

    {type:"teach", trg:"情報(じょうほう)", src:"information", pos:"noun", gender:null,
     note:"情報(じょうほう)を集(あつ)める = gather information.\n情報社会(じょうほうしゃかい) = information society.",
     example:"A: インターネットで情報(じょうほう)を集(あつ)めました。\nB: 正確(せいかく)な情報(じょうほう)ですか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: I gathered information on the internet.\nB: Is it accurate information?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"情報(じょうほう) is one of the most important modern Japanese words. 情報(じょうほう)リテラシー (information literacy) is taught in schools. フェイクニュース (fake news) and 情報過多(じょうほうかしゃかい)社会 (information-overloaded society) are active social debates. The kanji combines 情(じょう) (feelings/conditions) and 報(ほう) (report)."},

    {type:"teach", trg:"主張(しゅちょう)", src:"claim / assertion / argument", pos:"noun", gender:null,
     note:"主張(しゅちょう)する = to claim/argue.\nUsed in debates and essays.",
     example:"A: 彼(かれ)の主張(しゅちょう)には賛成(さんせい)できません。\nB: どの点(てん)に反対(はんたい)ですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: I cannot agree with his argument.\nB: Which point do you oppose?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"主張(しゅちょう) is essential for academic and political discourse. 論文(ろんぶん)の主張(しゅちょう) (thesis argument) is the central claim. In Japanese debate style, 主張(しゅちょう) is typically presented indirectly and supported extensively before being stated explicitly, unlike Western rhetoric which often leads with the claim."},

    {type:"teach", trg:"信頼(しんらい)", src:"trust / reliability", pos:"noun", gender:null,
     note:"信頼(しんらい)する = to trust.\n信頼(しんらい)できる = trustworthy.",
     example:"A: このニュースサイトは信頼(しんらい)できますか？\nB: はい、大手(おおて)メディアなので信頼性(しんらいせい)が高(たか)いです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Can this news site be trusted?\nB: Yes, it is a major media outlet so reliability is high.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"信頼(しんらい) is deeper than 信(しん)じる (to believe): it implies earned, tested trust over time. 信頼関係(しんらいかんけい) (trust relationship) takes years to build but seconds to destroy. Japanese business culture is built on 信頼(しんらい): deals are made based on long-standing relationships rather than contracts alone."},

    {type:"teach", trg:"影響力(えいきょうりょく)", src:"influence / clout", pos:"noun", gender:null,
     note:"影響力(えいきょうりょく)がある = to have influence.\nInfluencers: インフルエンサー.",
     example:"A: SNSの影響力(えいきょうりょく)は大(おお)きくなっています。\nB: 特(とく)に若者(わかもの)に対(たい)する影響力(えいきょうりょく)が強(つよ)いですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The influence of social media is growing.\nB: Especially its influence on young people is strong.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"影響力(えいきょうりょく) combines 影響(えいきょう) (influence) with 力(りょく) (power). In Japanese politics, 影響力(えいきょうりょく)のある政治家(せいじか) (influential politicians) shape policy behind the scenes. The rise of SNS influencers (インフルエンサー) has democratized 影響力(えいきょうりょく) beyond traditional gatekeepers."},

    {type:"teach", trg:"偏見(へんけん)", src:"prejudice / bias", pos:"noun", gender:null,
     note:"偏見(へんけん)を持(も)つ = hold a prejudice.\n偏見(へんけん)のない = unbiased.",
     example:"A: メディアにも偏見(へんけん)がありますか？\nB: 残念(ざんねん)ながら、完全(かんぜん)に中立(ちゅうりつ)なメディアはありません。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Does the media have biases too?\nB: Unfortunately, completely neutral media does not exist.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"偏見(へんけん) combines 偏(へん) (biased) and 見(けん) (view). Japanese media literacy education teaches 偏見(へんけん)を見(み)ぬく (to see through bias). Each major newspaper has known political leanings: Asahi (liberal), Yomiuri (conservative), Mainichi (center-left). Recognizing these biases is considered media literacy."},

    {type:"teach", trg:"発信(はっしん)", src:"transmission / broadcasting / posting", pos:"noun", gender:null,
     note:"情報(じょうほう)を発信(はっしん)する = transmit information.\nSNSで発信(はっしん)する = post on social media.",
     example:"A: 誰(だれ)でもSNSで情報(じょうほう)を発信(はっしん)できる時代(じだい)です。\nB: そのぶん、責任(せきにん)も大(おお)きいですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: It is an era where anyone can broadcast information on social media.\nB: Proportionally, the responsibility is also great.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"発信(はっしん) was traditionally about broadcast media, but now encompasses individual social media posting. 自己発信(じこはっしん) (self-broadcasting) through blogs, YouTube, and Twitter is a major cultural phenomenon. The flip side is 発信責任(はっしんせきにん) (broadcasting responsibility): spreading false information can have legal consequences."},

    {type:"teach", trg:"著作権(ちょさくけん)", src:"copyright", pos:"noun", gender:null,
     note:"著作権法(ちょさくけんほう) = copyright law.\n著作権侵害(ちょさくけんしんがい) = copyright infringement.",
     example:"A: この画像(がぞう)を使(つか)っても著作権(ちょさくけん)の問題(もんだい)はありませんか？\nB: フリー素材(そざい)なので大丈夫(だいじょうぶ)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Won't there be copyright issues using this image?\nB: It is free material so it is fine.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"著作権(ちょさくけん) is increasingly important in Japan's content-rich culture. Manga, anime, and music piracy are serious legal issues. Japan's 著作権法(ちょさくけんほう) (copyright law) was updated in 2020 to criminalize illegal downloading. The doujinshi (fan comic) market operates in a fascinating legal gray zone tolerated by most publishers."},

    {type:"teach", trg:"透明性(とうめいせい)", src:"transparency", pos:"noun", gender:null,
     note:"透明性(とうめいせい)を高(たか)める = increase transparency.\nKey governance concept.",
     example:"A: 政府(せいふ)にはもっと透明性(とうめいせい)が必要(ひつよう)です。\nB: 国民(こくみん)の知(し)る権利(けんり)を守(まも)るべきですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The government needs more transparency.\nB: The people's right to know should be protected.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"透明性(とうめいせい) is a governance keyword combining 透明(とうめい) (transparent) and 性(せい) (nature). Japan's 情報公開(じょうほうこうかい) (information disclosure) laws allow citizens to request government documents. The push for corporate 透明性(とうめいせい) has increased after corporate scandals. It is a core ESG (Environmental, Social, Governance) metric."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の新聞(しんぶん)の政治的(せいじてき)傾向(けいこう)について、正(ただ)しいのはどれですか？",
     opts:["Different papers have different political leanings","All papers are neutral","Papers don't cover politics","There is only one national paper"],
     ans:"Different papers have different political leanings",
     hint:"Asahi, Yomiuri, and Mainichi each have well-known editorial stances that educated readers are expected to recognize."},

    {type:"fb", s:"インターネットで{1}を集(あつ)めました。",
     a:["情報(じょうほう)"],
     opts:["情報(じょうほう)","報道(ほうどう)","記事(きじ)","世論(よろん)"],
     hint:"You gathered data and facts from the internet. This general term means 'information.'",
     sSrc:"I gathered information on the internet."},

    {type:"match", pairs:[
      {trg:"報道(ほうどう)", src:"news reporting"},
      {trg:"世論(よろん)", src:"public opinion"},
      {trg:"偏見(へんけん)", src:"prejudice / bias"},
      {trg:"著作権(ちょさくけん)", src:"copyright"}
    ]},

    {type:"mc", q:"「発信(はっしん)」は今(いま)どんな意味(いみ)でも使(つか)いますか？",
     opts:["Posting on social media","Only TV broadcasting","Only radio","Only newspapers"],
     ans:"Posting on social media",
     hint:"This word has expanded beyond traditional broadcasting to include individual p... on modern platforms."},

    {type:"fb", s:"彼(かれ)の主張(しゅちょう)に{1}できません。",
     a:["賛成(さんせい)"],
     opts:["賛成(さんせい)","信頼(しんらい)","発信(はっしん)","報道(ほうどう)"],
     hint:"You cannot agree with his argument. This word means 'agreement' or 'being in favor.'",
     sSrc:"I cannot agree with his argument."},

    {type:"mc", q:"日本(にほん)の「同人誌(どうじんし)」は著作権(ちょさくけん)の観点(かんてん)からどうですか？",
     opts:["Exists in a legal gray zone mostly tolerated by publishers","Completely illegal","Fully protected by law","Does not exist anymore"],
     ans:"Exists in a legal gray zone mostly tolerated by publishers",
     hint:"Fan-created comics based on existing works occupy an ambiguous position that the industry has largely chosen to overlook."}
  ,{type:"match",pairs:[{trg:"記事(きじ)",src:"article (news/magazine)"},{trg:"主張(しゅちょう)",src:"claim / assertion / argument"},{trg:"信頼(しんらい)",src:"trust / reliability"},{trg:"影響力(えいきょうりょく)",src:"influence / clout"},{trg:"発信(はっしん)",src:"transmission / broadcasting / posting"},{trg:"透明性(とうめいせい)",src:"transparency"}]}]
};
export default BATCH11_L1;
