// Batch 7 – Unit 26 (B2.1 News & Media): Media Literacy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u26l_b7_1", title:"メディアリテラシー", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアリテラシー",
     desc:"Learn vocabulary for discussing media, journalism, and information literacy. These JLPT N2 words are essential for understanding news reports and discussing media critically.",
     goals:["Discuss news media vocabulary","Analyze information sources critically","Express opinions about media and reporting"]},

    {type:"teach", trg:"ほうどう", src:"news reporting / coverage", pos:"noun", gender:null,
     note:"ほうどうする = to report (news). ほうどうきかん = news organization.\nほうどうのじゆう = freedom of the press.",
     example:"A: このじけんのほうどうはどうおもいますか？\nB: もうすこしきゃっかんてきなほうどうがひつようです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What do you think of the reporting on this incident?\nB: More objective reporting is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"ほうどう (報道) is taken seriously in Japan. Major newspapers (朝日, 読売, 毎日) have massive readership. Japan's press clubs (記者クラブ) control access to government sources, creating a unique journalism ecosystem. Press freedom rankings have been debated, with critics pointing to self-censorship (自主規制)."},

    {type:"teach", trg:"しんぴょうせい", src:"credibility / reliability", pos:"noun", gender:null,
     note:"しんぴょうせいがたかい = highly credible.\nしんぴょうせいにかける = to lack credibility.",
     example:"A: このじょうほうのしんぴょうせいはどうですか？\nB: しゅってんをかくにんしたほうがいいです。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: How credible is this information?\nB: We should check the source.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"しんぴょうせい (信憑性) has become crucial in the age of SNS. Japanese media literacy education teaches students to check しんぴょうせい before sharing. The word combines 信 (believe) and 憑 (possess/evidence). Checking multiple sources (複数のソースを確認) is emphasized in Japanese information literacy classes."},

    {type:"teach", trg:"へんこう", src:"bias / prejudice / partiality", pos:"noun", gender:null,
     note:"へんこうほうどう = biased reporting.\nへんこうのないしかく = an unbiased perspective.",
     example:"A: このきじにはへんこうがありませんか？\nB: たしかに、かたほうのいけんだけですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Is there no bias in this article?\nB: Indeed, it only presents one side's opinion.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"へんこう (偏向) in media is a hot topic. Japanese viewers often compare coverage across NHK (public), commercial networks, and newspapers to detect へんこう. Political discussions frequently accuse media of へんこうほうどう. Media literacy education teaches identifying へんこう through comparing multiple sources."},

    {type:"teach", trg:"しゅざい", src:"news gathering / interviewing", pos:"noun", gender:null,
     note:"しゅざいする = to gather news/interview.\nしゅざいはんい = scope of coverage.",
     example:"A: きしゃがげんちでしゅざいしています。\nB: なまのじょうほうがきたいできますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Reporters are gathering news on site.\nB: We can expect firsthand information.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"しゅざい (取材) is the foundation of journalism. Japanese reporters build long-term relationships with sources through 夜回り (よまわり, late-night visits to officials' homes) and 番記者 (ばんきしゃ, assigned beat reporters). This relationship-based しゅざい produces insider access but risks compromising independence."},

    {type:"teach", trg:"ようやく", src:"summary / abstract", pos:"noun", gender:null,
     note:"ようやくする = to summarize.\nきじのようやく = article summary.",
     example:"A: このレポートのようやくをつくってください。\nB: はい、ポイントをまとめます。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Please create a summary of this report.\nB: Yes, I will compile the key points.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"ようやく (要約) is a crucial academic and business skill. Japanese schools teach ようやく writing from elementary school. News shows present ようやく of complex events. The ability to distill information concisely (簡潔に, かんけつに) is highly valued in Japanese professional culture."},

    {type:"teach", trg:"きじ", src:"article / news story", pos:"noun", gender:null,
     note:"しんぶんきじ = newspaper article.\nきじをかく = to write an article.",
     example:"A: このきじをよみましたか？\nB: まだです。あとでよみます。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Have you read this article?\nB: Not yet. I will read it later.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese きじ (記事) style differs from Western journalism. The inverted pyramid (most important first) is used, but Japanese きじ often include more context and background. 社説 (しゃせつ, editorial) sections are influential. Morning papers (朝刊) and evening papers (夕刊) still have distinct audiences."},

    {type:"teach", trg:"とうこう", src:"posting / submission / contribution", pos:"noun", gender:null,
     note:"とうこうする = to post/submit.\nSNSにとうこうする = to post on social media.",
     example:"A: このどうがはSNSにとうこうされました。\nB: もう100まんかいさいせいされていますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: This video was posted on social media.\nB: It has already been played 1 million times.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"とうこう (投稿) originally meant submitting to newspapers or magazines. Now it primarily refers to social media posts. Japan has 79 million Twitter/X users (one of the highest per capita). とうこう culture on Japanese social media values anonymity: most users do not use real names or photos."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"えいきょうをあたえる = to have an influence.\nえいきょうりょく = influential power.",
     example:"A: SNSのえいきょうりょくはおおきいですね。\nB: じょうほうのひろがりがはやいです。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Social media's influence is large.\nB: Information spreads quickly.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"えいきょう (影響) uses 影 (shadow) and 響 (echo/resound). Influence is like a shadow that echoes outward. Japanese corporate culture carefully manages えいきょう on stakeholders. The concept of ステークホルダーへの影響 (impact on stakeholders) guides decision-making at every level."},

    {type:"teach", trg:"せろん", src:"public opinion", pos:"noun", gender:null,
     note:"Also: よろん. せろんちょうさ = public opinion poll.\nせろんをうごかす = to move public opinion.",
     example:"A: せろんちょうさのけっかがはっぴょうされました。\nB: しじりつはどうでしたか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Public opinion poll results were announced.\nB: What was the approval rating?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"せろん/よろん (世論) surveys are major news events in Japan. NHK, newspapers, and broadcasters conduct monthly polls. Japanese politicians closely watch せろん because public sentiment heavily influences policy. The phrase 世論の風向き (wind direction of public opinion) treats opinion as a natural force."},

    {type:"teach", trg:"とうめいせい", src:"transparency", pos:"noun", gender:null,
     note:"とうめいせいをたかめる = to increase transparency.\nじょうほうのとうめいせい = information transparency.",
     example:"A: せいふのとうめいせいがもとめられています。\nB: こくみんのしるけんりがだいじです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Government transparency is being demanded.\nB: Citizens' right to know is important.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"とうめいせい (透明性) has become a buzzword in Japanese governance and business. After corporate scandals, companies increased とうめいせい in financial reporting. The 情報公開法 (information disclosure law) gives citizens the right to request government documents. Open data initiatives are expanding."},

    {type:"teach", trg:"プロパガンダ", src:"propaganda", pos:"noun", gender:null,
     note:"Katakana loanword. せんでん = propaganda (Japanese word).\nプロパガンダにまどわされない = not be deceived by propaganda.",
     example:"A: それはプロパガンダではないですか？\nB: しんぴょうせいをかくにんしましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Is that not propaganda?\nB: Let us check the credibility.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"プロパガンダ awareness is taught in Japanese media literacy. Japan's WWII experience with wartime プロパガンダ is studied in schools. Modern プロパガンダ through social media (SNS工作) is a growing concern. Critical thinking about information sources is increasingly emphasized in education."},

    {type:"teach", trg:"ちょさくけん", src:"copyright", pos:"noun", gender:null,
     note:"ちょさくけんしんがい = copyright infringement.\nちょさくけんほう = copyright law.",
     example:"A: このがぞうはちょさくけんでほごされています。\nB: むだんでしようしてはいけません。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: This image is protected by copyright.\nB: You must not use it without permission.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"ちょさくけん (著作権) is a major issue in Japan's content-rich culture. Manga piracy (海賊版, かいぞくばん) costs the industry billions. Japan strengthened ちょさくけんほう to combat illegal downloads. The tension between fan-created content (二次創作, にじそうさく) and ちょさくけん is uniquely Japanese, with many creators tolerating fan works."},

    // Quiz steps
    {type:"mc", q:"Japanese press clubs (記者クラブ) are notable for:",
     opts:["Controlling access to government sources","Publishing independent journalism","Being open to all reporters","Broadcasting live from the Diet"],
     ans:"Controlling access to government sources",
     hint:"This unique Japanese system gives member reporters exclusive a... but has been criticized for limiting press freedom."},

    {type:"match", pairs:[
      {trg:"ほうどう", src:"news reporting"},
      {trg:"しんぴょうせい", src:"credibility"},
      {trg:"へんこう", src:"bias"},
      {trg:"せろん", src:"public opinion"},
      {trg:"とうめいせい", src:"transparency"}
    ]},

    {type:"fb", s:"このじょうほうの{1}をかくにんしましょう。",
     a:["しんぴょうせい"],
     opts:["しんぴょうせい","えいきょう","とうめいせい","ちょさくけん"],
     hint:"Check whether this information is reliable and trustworthy before sharing it.",
     sSrc:"Let us check the {1} of this information."},

    {type:"mc", q:"Japanese social media users mostly:",
     opts:["Use anonymous accounts without real names","Post with real names and photos","Only follow celebrities","Do not use social media"],
     ans:"Use anonymous accounts without real names",
     hint:"Japanese とうこう culture strongly values anonymity, unlike many Western social media platforms."},

    {type:"fb", s:"このがぞうは{1}でほごされています。",
     a:["ちょさくけん"],
     opts:["ちょさくけん","プロパガンダ","へんこう","せろん"],
     hint:"Using copyrighted images without permission is illegal. This noun means 'copyright.'",
     sSrc:"This image is protected by {1}."},

    {type:"mc", q:"えいきょう literally means:",
     opts:["Shadow and echo","Light and sound","Sun and moon","Wind and rain"],
     ans:"Shadow and echo",
     hint:"The kanji combine 影 (s...) and 響 (e.../resound), suggesting influence that ripples outward."},

    {type:"match", pairs:[
      {trg:"しゅざい", src:"news gathering"},
      {trg:"きじ", src:"article"},
      {trg:"とうこう", src:"posting"},
      {trg:"えいきょう", src:"influence"},
      {trg:"ちょさくけん", src:"copyright"}
    ]},

    {type:"fb", s:"このきじには{1}がありませんか？かたほうのいけんだけです。",
     a:["へんこう"],
     opts:["へんこう","しんぴょうせい","とうめいせい","ようやく"],
     hint:"The article only shows one side. This noun means 'bias' or 'partiality.'",
     sSrc:"Is there no {1} in this article? It only shows one opinion."}
  ]
};
export default BATCH7_L1;
