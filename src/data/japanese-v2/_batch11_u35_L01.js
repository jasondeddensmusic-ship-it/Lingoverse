// Batch 11 – Unit 35 (B2.4 Information Society): Technology & Digital Life
const BATCH11_L1 = {
  id:"jav2_u35l_b11_1", title:"デジタル時代(じだい)", icon:"🖥️", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタル時代(じだい)",
     desc:"Learn vocabulary for discussing technology, digital life, and information society. These terms are essential for modern Japanese and appear frequently on JLPT N2.",
     goals:["Discuss technology trends and digital culture","Use IT and internet vocabulary","Express opinions about information society issues"]},

    {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"AI = エーアイ in Japanese.\n人工知能技術(じんこうちのうぎじゅつ) = AI technology.",
     example:"A: 人工知能(じんこうちのう)が社会(しゃかい)を変(か)えていますね。\nB: はい、期待(きたい)と不安(ふあん)の両方(りょうほう)があります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: AI is changing society.\nB: Yes, there is both anticipation and anxiety.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan is a leader in 人工知能(じんこうちのう) research and robotics. The concept of ロボットとの共存(きょうぞん) (coexistence with robots) is more accepted in Japan than in Western cultures, partly due to anime like 鉄腕(てつわん)アトム (Astro Boy). Japan's aging society drives AI development for elder care, manufacturing, and service industries."},

    {type:"teach", trg:"データ", src:"data", pos:"noun", gender:null,
     note:"ビッグデータ = big data.\nデータを分析(ぶんせき)する = analyze data.",
     example:"A: データに基(もと)づいて判断(はんだん)しましょう。\nB: 賛成(さんせい)です。勘(かん)に頼(たよ)るのはよくないですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let's make decisions based on data.\nB: I agree. Relying on intuition is not good.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"データ (data) has become central to Japanese business vocabulary. データドリブン (data-driven) decision making is increasingly valued. Japan's 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Law) governs データ use. The tension between データ活用(かつよう) (utilizing data) and プライバシー (privacy) is a major social debate."},

    {type:"teach", trg:"セキュリティ", src:"security (digital)", pos:"noun", gender:null,
     note:"サイバーセキュリティ = cybersecurity.\nセキュリティ対策(たいさく) = security measures.",
     example:"A: パスワードを定期的(ていきてき)に変(か)えてセキュリティを強(つよ)くしましょう。\nB: 二段階認証(にだんかいにんしょう)も設定(せってい)します。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let's strengthen security by changing passwords regularly.\nB: I'll also set up two-factor authentication.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan established サイバーセキュリティ基本法(きほんほう) (Basic Act on Cybersecurity) in 2014. Government systems, financial institutions, and Olympics infrastructure face constant cyber threats. 日本(にほん)CERT (Computer Emergency Response Team) coordinates national cybersecurity. Despite technological advancement, Japan's digital literacy gap among older citizens remains a challenge."},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"クラウドサービス = cloud service.\nクラウドに保存(ほぞん)する = save to the cloud.",
     example:"A: データはクラウドに保存(ほぞん)してあります。\nB: バックアップも重要(じゅうよう)ですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The data is saved in the cloud.\nB: Backups are important too.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"クラウド adoption in Japan grew rapidly during the pandemic as テレワーク (remote work) became common. Japanese companies, traditionally cautious about data security, increasingly trust クラウドサービス from providers like AWS and Microsoft Azure. Government push for DX (デジタルトランスフォーメーション) accelerates クラウド migration."},

    {type:"teach", trg:"アプリ", src:"application (software)", pos:"noun", gender:null,
     note:"Short for アプリケーション.\nアプリをダウンロードする = download an app.",
     example:"A: 便利(べんり)なアプリを知(し)っていますか？\nB: 日本語学習(にほんごがくしゅう)のアプリがおすすめです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Do you know any useful apps?\nB: I recommend a Japanese learning app.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's アプリ market is the third largest globally. LINE (Japan's dominant messaging アプリ) has over 90 million Japanese users and is used for everything from chatting to payments to government communications. Japanese アプリ design tends to be information-dense compared to Western minimalist approaches."},

    {type:"teach", trg:"検索(けんさく)", src:"search (web/database)", pos:"noun", gender:null,
     note:"検索(けんさく)する = to search.\n検索(けんさく)エンジン = search engine.",
     example:"A: 分(わ)からないことはすぐ検索(けんさく)します。\nB: 今(いま)は何(なん)でも検索(けんさく)できる時代(じだい)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: I immediately search for things I don't understand.\nB: It's an era where you can search for anything.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"ググる (to Google) has become a Japanese verb, though Yahoo Japan (ヤフー) maintained a larger market share than Google for years, unique among developed nations. Japanese 検索(けんさく) culture involves 口コミ(くちこみ) (word-of-mouth reviews) sites like 食(た)べログ (restaurant reviews) and 価格(かかく).com (price comparisons) that deeply influence consumer behavior."},

    {type:"teach", trg:"投稿(とうこう)", src:"posting (online)", pos:"noun", gender:null,
     note:"投稿(とうこう)する = to post.\nSNSに投稿(とうこう)する = post on social media.",
     example:"A: 毎日(まいにち)SNSに投稿(とうこう)していますか？\nB: いいえ、週(しゅう)に一回(いっかい)くらいです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Do you post on social media every day?\nB: No, about once a week.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese SNS (social media) culture has unique characteristics. 匿名性(とくめいせい) (anonymity) is valued more than in Western social media: Twitter (X) Japan has the second-largest user base globally, partly because anonymous 投稿(とうこう) is acceptable. ほのめかし (hinting) rather than direct statements characterizes Japanese online communication."},

    {type:"teach", trg:"コンテンツ", src:"content (digital/media)", pos:"noun", gender:null,
     note:"デジタルコンテンツ = digital content.\nコンテンツ産業(さんぎょう) = content industry.",
     example:"A: 日本(にほん)のコンテンツ産業(さんぎょう)は世界的(せかいてき)に有名(ゆうめい)です。\nB: アニメやマンガのことですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Japan's content industry is world-famous.\nB: You mean anime and manga.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's コンテンツ industry (anime, manga, games, music) is a major soft power asset valued at over 12 trillion yen annually. クールジャパン (Cool Japan) is the government strategy to promote Japanese コンテンツ globally. Japan's コンテンツ exports include アニメ streaming on Crunchyroll/Netflix and ゲーム from Nintendo/Sony."},

    {type:"teach", trg:"フェイク", src:"fake (as in fake news)", pos:"noun", gender:null,
     note:"フェイクニュース = fake news.\nフェイクかどうか見極(みきわ)める = determine if it's fake.",
     example:"A: フェイクニュースにだまされないように気(き)をつけましょう。\nB: 情報(じょうほう)の出所(でどころ)を確認(かくにん)することが大事(だいじ)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let's be careful not to be deceived by fake news.\nB: Confirming the source of information is important.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"フェイクニュース awareness has grown significantly in Japan. メディアリテラシー (media literacy) education now includes フェイク detection skills. Japan's trust in traditional media remains relatively high compared to other countries, but SNS-based misinformation during disasters and elections is a growing concern."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"プライバシーを守(まも)る = protect privacy.\n個人情報(こじんじょうほう) = personal information.",
     example:"A: インターネット時代(じだい)のプライバシー保護(ほご)は難(むずか)しいですね。\nB: 個人情報(こじんじょうほう)の管理(かんり)が重要(じゅうよう)です。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Privacy protection in the internet age is difficult.\nB: Personal information management is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japan's 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Act) was significantly updated in 2022, strengthening data rights. Japanese society values プライバシー highly: address books are rarely shared, and personal questions are indirect. The challenge of balancing デジタル便利(べんり) (digital convenience) with プライバシー is a major societal debate."},

    {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
     note:"自動化(じどうか)する = to automate.\n工場(こうじょう)の自動化(じどうか) = factory automation.",
     example:"A: 自動化(じどうか)によって仕事(しごと)のしかたが変(か)わっています。\nB: なくなる仕事(しごと)もありますが、新(あたら)しい仕事(しごと)も生(う)まれます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Automation is changing the way we work.\nB: Some jobs disappear but new ones are created too.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan leads in 工業自動化(こうぎょうじどうか) (industrial automation) with the highest robot density in manufacturing. ロボット大国(たいこく) (robot nation) Japan has robots in factories, hotels (変(へん)なホテル), restaurants, and hospitals. 自動販売機(じどうはんばいき) (vending machines) number over 5 million, selling everything from drinks to hot meals."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)で一番(いちばん)使(つか)われているメッセージアプリは何(なん)ですか？",
     opts:["LINE","WhatsApp","Facebook Messenger","WeChat"],
     ans:"LINE",
     hint:"This messaging app has over 90 million Japanese users and is used for personal chat, payments, and even government communications."},

    {type:"fb", s:"データに{1}いて判断(はんだん)しましょう。",
     a:["もとづ"],
     opts:["もとづ","したが","ともな","かかわ"],
     hint:"Let's make decisions based on data. This formal particle means 'based on.'",
     sSrc:"Let's make decisions based on data."},

    {type:"match", pairs:[
      {trg:"人工知能(じんこうちのう)", src:"artificial intelligence"},
      {trg:"セキュリティ", src:"digital security"},
      {trg:"プライバシー", src:"privacy"},
      {trg:"自動化(じどうか)", src:"automation"}
    ,{trg:"フェイク",src:"fake (as in fake news)"}]},

    {type:"mc", q:"日本(にほん)の自動販売機(じどうはんばいき)は何台(なんだい)くらいありますか？",
     opts:["About 500,000","Over 5 million","About 1 million","About 100,000"],
     ans:"Over 5 million",
     hint:"Japan has one of the highest densities of vending machines in the world, selling an incredible variety of products."},

    {type:"fb", s:"フェイクニュースに{1}されないように気(き)をつけましょう。",
     a:["だま"],
     opts:["だま","おどろか","かんどう","きづ"],
     hint:"Be careful not to be deceived by fake news. The passive form of this verb means 'to be tricked.'",
     sSrc:"Let's be careful not to be deceived by fake news."},

    {type:"mc", q:"日本(にほん)のSNS文化(ぶんか)の特徴(とくちょう)は何(なん)ですか？",
     opts:["Video content only","No social media use","Anonymity is more valued than in Western social media","Real names are always required"],
     ans:"Anonymity is more valued than in Western social media",
     hint:"Japan's online culture places high value on this aspect, which is why Twitter/X has such a large Japanese user base."}
  ,{type:"fb", s:"毎日(まいにち)スマホで{1}の便利(べんり)なものをダウンロードしています。",
    a:["アプリ"],
    opts:["アプリ","データ","クラウド","コンテンツ"],
    hint:"You download useful programs to your smartphone every day. This word is short for 'application' in Japanese.",
    sSrc:"I download useful {1} on my smartphone every day."}
  ,{type:"fb", s:"個人情報(こじんじょうほう)のために{1}を守(まも)る方法(ほうほう)を学(まな)びましょう。",
    a:["プライバシー"],
    opts:["プライバシー","セキュリティ","データ","フェイク"],
    hint:"We should learn how to protect our personal information. This loanword from English means 'privacy.'",
    sSrc:"Let's learn how to protect {1} for our personal information."}
  ,{type:"match",pairs:[{trg:"データ",src:"data"},{trg:"クラウド",src:"cloud (computing)"},{trg:"アプリ",src:"application (software)"},{trg:"検索(けんさく)",src:"search (web/database)"},{trg:"投稿(とうこう)",src:"posting (online)"},{trg:"コンテンツ",src:"content (digital/media)"}]}]
};
export default BATCH11_L1;
