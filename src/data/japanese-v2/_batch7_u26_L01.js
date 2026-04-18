// Batch 7 – Unit 26 (B2.1 News & Media): Media Literacy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u26l_b7_1", title:"メディアリテラシー", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアリテラシー",
     desc:"Learn vocabulary for discussing media, journalism, and information literacy. These JLPT N2 words are essential for understanding news reports and discussing media critically.",
     goals:["Discuss news media vocabulary","Analyze information sources critically","Express opinions about media and reporting"]},

    {type:"teach", trg:"報道(ほうどう)", src:"news reporting / coverage", pos:"noun", gender:null,
     note:"報道(ほうどう)する = to report (news). 報道機関(ほうどうきかん) = news organization.\n報道(ほうどう)の自由(じゆう) = freedom of the press.",
     example:"A: この事件(じけん)の報道(ほうどう)はどう思(おも)いますか？\nB: もう少(すこ)し客観的(きゃっかんてき)な報道(ほうどう)が必要(ひつよう)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What do you think of the reporting on this incident?\nB: More objective reporting is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"報道(ほうどう) is taken seriously in Japan. Major newspapers (朝日(あさひ), 読売(よみうり), 毎日(まいにち)) have massive readership. Japan's press clubs (記者(きしゃ)クラブ) control access to government sources, creating a unique journalism ecosystem. Press freedom rankings have been debated, with critics pointing to self-censorship (自主規制(じしゅきせい))."},

    {type:"teach", trg:"信憑性(しんぴょうせい)", src:"credibility / reliability", pos:"noun", gender:null,
     note:"信憑性(しんぴょうせい)が高(たか)い = highly credible.\n信憑性(しんぴょうせい)に欠(か)ける = to lack credibility.",
     example:"A: この情報(じょうほう)の信憑性(しんぴょうせい)はどうですか？\nB: 出典(しゅってん)を確認(かくにん)した方(ほう)がいいです。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: How credible is this information?\nB: We should check the source.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"信憑性(しんぴょうせい) has become crucial in the age of SNS. Japanese media literacy education teaches students to check 信憑性(しんぴょうせい) before sharing. The word combines 信(しん) (believe) and 憑(ひょう) (possess/evidence). Checking multiple sources (複数(ふくすう)のソースを確認(かくにん)) is emphasized in Japanese information literacy classes."},

    {type:"teach", trg:"偏向(へんこう)", src:"bias / prejudice / partiality", pos:"noun", gender:null,
     note:"偏向報道(へんこうほうどう) = biased reporting.\n偏向(へんこう)のない視角(しかく) = an unbiased perspective.",
     example:"A: この記事(きじ)には偏向(へんこう)がありませんか？\nB: 確(たし)かに、片方(かたほう)の意見(いけん)だけですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Is there no bias in this article?\nB: Indeed, it only presents one side's opinion.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"偏向(へんこう) in media is a hot topic. Japanese viewers often compare coverage across NHK (public), commercial networks, and newspapers to detect 偏向(へんこう). Political discussions frequently accuse media of 偏向報道(へんこうほうどう). Media literacy education teaches identifying 偏向(へんこう) through comparing multiple sources."},

    {type:"teach", trg:"取材(しゅざい)", src:"news gathering / interviewing", pos:"noun", gender:null,
     note:"取材(しゅざい)する = to gather news/interview.\n取材範囲(しゅざいはんい) = scope of coverage.",
     example:"A: 記者(きしゃ)が現地(げんち)で取材(しゅざい)しています。\nB: 生(なま)の情報(じょうほう)が期待(きたい)できますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Reporters are gathering news on site.\nB: We can expect firsthand information.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"取材(しゅざい) is the foundation of journalism. Japanese reporters build long-term relationships with sources through 夜回(よまわ)り (late-night visits to officials' homes) and 番記者(ばんきしゃ) (assigned beat reporters). This relationship-based 取材(しゅざい) produces insider access but risks compromising independence."},

    {type:"teach", trg:"要約(ようやく)", src:"summary / abstract", pos:"noun", gender:null,
     note:"要約(ようやく)する = to summarize.\n記事(きじ)の要約(ようやく) = article summary.",
     example:"A: このレポートの要約(ようやく)を作(つく)ってください。\nB: はい、ポイントをまとめます。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Please create a summary of this report.\nB: Yes, I will compile the key points.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"要約(ようやく) is a crucial academic and business skill. Japanese schools teach 要約(ようやく) writing from elementary school. News shows present 要約(ようやく) of complex events. The ability to distill information concisely (簡潔(かんけつ)に) is highly valued in Japanese professional culture."},

    {type:"teach", trg:"記事(きじ)", src:"article / news story", pos:"noun", gender:null,
     note:"新聞記事(しんぶんきじ) = newspaper article.\n記事(きじ)を書(か)く = to write an article.",
     example:"A: この記事(きじ)を読(よ)みましたか？\nB: まだです。後(あと)で読(よ)みます。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Have you read this article?\nB: Not yet. I will read it later.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese 記事(きじ) style differs from Western journalism. The inverted pyramid (most important first) is used, but Japanese 記事(きじ) often include more context and background. 社説(しゃせつ) (editorial) sections are influential. Morning papers (朝刊(ちょうかん)) and evening papers (夕刊(ゆうかん)) still have distinct audiences."},

    {type:"teach", trg:"投稿(とうこう)", src:"posting / submission / contribution", pos:"noun", gender:null,
     note:"投稿(とうこう)する = to post/submit.\nSNSに投稿(とうこう)する = to post on social media.",
     example:"A: この動画(どうが)はSNSに投稿(とうこう)されました。\nB: もう100万回(まんかい)再生(さいせい)されていますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: This video was posted on social media.\nB: It has already been played 1 million times.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"投稿(とうこう) originally meant submitting to newspapers or magazines. Now it primarily refers to social media posts. Japan has 79 million Twitter/X users (one of the highest per capita). 投稿(とうこう) culture on Japanese social media values anonymity: most users do not use real names or photos."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"影響(えいきょう)を与(あた)える = to have an influence.\n影響力(えいきょうりょく) = influential power.",
     example:"A: SNSの影響力(えいきょうりょく)は大(おお)きいですね。\nB: 情報(じょうほう)の広(ひろ)がりが早(はや)いです。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Social media's influence is large.\nB: Information spreads quickly.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"影響(えいきょう) uses 影(かげ) (shadow) and 響(ひびき) (echo/resound). Influence is like a shadow that echoes outward. Japanese corporate culture carefully manages 影響(えいきょう) on stakeholders. The concept of ステークホルダーへの影響(えいきょう) (impact on stakeholders) guides decision-making at every level."},

    {type:"teach", trg:"世論(せろん)", src:"public opinion", pos:"noun", gender:null,
     note:"Also: よろん. 世論調査(せろんちょうさ) = public opinion poll.\n世論(せろん)を動(うご)かす = to move public opinion.",
     example:"A: 世論調査(せろんちょうさ)の結果(けっか)が発表(はっぴょう)されました。\nB: 支持率(しじりつ)はどうでしたか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Public opinion poll results were announced.\nB: What was the approval rating?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"世論(せろん/よろん) surveys are major news events in Japan. NHK, newspapers, and broadcasters conduct monthly polls. Japanese politicians closely watch 世論(せろん) because public sentiment heavily influences policy. The phrase 世論(せろん)の風向(かざむ)き (wind direction of public opinion) treats opinion as a natural force."},

    {type:"teach", trg:"透明性(とうめいせい)", src:"transparency", pos:"noun", gender:null,
     note:"透明性(とうめいせい)を高(たか)める = to increase transparency.\n情報(じょうほう)の透明性(とうめいせい) = information transparency.",
     example:"A: 政府(せいふ)の透明性(とうめいせい)が求(もと)められています。\nB: 国民(こくみん)の知(し)る権利(けんり)が大事(だいじ)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Government transparency is being demanded.\nB: Citizens' right to know is important.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"透明性(とうめいせい) has become a buzzword in Japanese governance and business. After corporate scandals, companies increased 透明性(とうめいせい) in financial reporting. The 情報公開法(じょうほうこうかいほう) (information disclosure law) gives citizens the right to request government documents. Open data initiatives are expanding."},

    {type:"teach", trg:"プロパガンダ", src:"propaganda", pos:"noun", gender:null,
     note:"Katakana loanword. 宣伝(せんでん) = propaganda (Japanese word).\nプロパガンダに惑(まど)わされない = not be deceived by propaganda.",
     example:"A: それはプロパガンダではないですか？\nB: 信憑性(しんぴょうせい)を確認(かくにん)しましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Is that not propaganda?\nB: Let us check the credibility.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"プロパガンダ awareness is taught in Japanese media literacy. Japan's WWII experience with wartime プロパガンダ is studied in schools. Modern プロパガンダ through social media (SNS工作(こうさく)) is a growing concern. Critical thinking about information sources is increasingly emphasized in education."},

    {type:"teach", trg:"著作権(ちょさくけん)", src:"copyright", pos:"noun", gender:null,
     note:"著作権侵害(ちょさくけんしんがい) = copyright infringement.\n著作権法(ちょさくけんほう) = copyright law.",
     example:"A: この画像(がぞう)は著作権(ちょさくけん)で保護(ほご)されています。\nB: 無断(むだん)で使用(しよう)してはいけません。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: This image is protected by copyright.\nB: You must not use it without permission.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"著作権(ちょさくけん) is a major issue in Japan's content-rich culture. Manga piracy (海賊版(かいぞくばん)) costs the industry billions. Japan strengthened 著作権法(ちょさくけんほう) to combat illegal downloads. The tension between fan-created content (二次創作(にじそうさく)) and 著作権(ちょさくけん) is uniquely Japanese, with many creators tolerating fan works."},

    // Quiz steps
    {type:"mc", q:"Japanese press clubs (記者(きしゃ)クラブ) are notable for:",
     opts:["Controlling access to government sources","Publishing independent journalism","Being open to all reporters","Broadcasting live from the Diet"],
     ans:"Controlling access to government sources",
     hint:"This unique Japanese system gives member reporters exclusive a... but has been criticized for limiting press freedom."},

    {type:"match", pairs:[
      {trg:"報道(ほうどう)", src:"news reporting"},
      {trg:"信憑性(しんぴょうせい)", src:"credibility"},
      {trg:"偏向(へんこう)", src:"bias"},
      {trg:"世論(せろん)", src:"public opinion"},
      {trg:"透明性(とうめいせい)", src:"transparency"}
    ]},

    {type:"fb", s:"この情報(じょうほう)の{1}を確認(かくにん)しましょう。",
     a:["信憑性(しんぴょうせい)"],
     opts:["信憑性(しんぴょうせい)","影響(えいきょう)","透明性(とうめいせい)","著作権(ちょさくけん)"],
     hint:"Check whether this information is reliable and trustworthy before sharing it.",
     sSrc:"Let us check the {1} of this information."},

    {type:"mc", q:"Japanese social media users mostly:",
     opts:["Use anonymous accounts without real names","Post with real names and photos","Only follow celebrities","Do not use social media"],
     ans:"Use anonymous accounts without real names",
     hint:"Japanese 投稿(とうこう) culture strongly values anonymity, unlike many Western social media platforms."},

    {type:"fb", s:"この画像(がぞう)は{1}で保護(ほご)されています。",
     a:["著作権(ちょさくけん)"],
     opts:["著作権(ちょさくけん)","プロパガンダ","偏向(へんこう)","世論(せろん)"],
     hint:"Using copyrighted images without permission is illegal. This noun means 'copyright.'",
     sSrc:"This image is protected by {1}."},

    {type:"mc", q:"影響(えいきょう) literally means:",
     opts:["Shadow and echo","Light and sound","Sun and moon","Wind and rain"],
     ans:"Shadow and echo",
     hint:"The kanji combine 影(かげ) (s...) and 響(ひびき) (e.../resound), suggesting influence that ripples outward."},

    {type:"match", pairs:[
      {trg:"取材(しゅざい)", src:"news gathering"},
      {trg:"記事(きじ)", src:"article"},
      {trg:"投稿(とうこう)", src:"posting"},
      {trg:"影響(えいきょう)", src:"influence"},
      {trg:"著作権(ちょさくけん)", src:"copyright"}
    ]},

    {type:"fb", s:"この記事(きじ)には{1}がありませんか？片方(かたほう)の意見(いけん)だけです。",
     a:["偏向(へんこう)"],
     opts:["偏向(へんこう)","信憑性(しんぴょうせい)","透明性(とうめいせい)","要約(ようやく)"],
     hint:"The article only shows one side. This noun means 'bias' or 'partiality.'",
     sSrc:"Is there no {1} in this article? It only shows one opinion."}
  ,{type:"match",pairs:[{trg:"要約(ようやく)",src:"summary / abstract"},{trg:"プロパガンダ",src:"propaganda"}]}]
};
export default BATCH7_L1;
