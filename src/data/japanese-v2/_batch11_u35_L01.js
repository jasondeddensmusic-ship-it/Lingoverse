// Batch 11 – Unit 35 (B2.4 Information Society): Technology & Digital Life
const BATCH11_L1 = {
  id:"jav2_u35l_b11_1", title:"デジタルじだい", icon:"🖥️", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタルじだい",
     desc:"Learn vocabulary for discussing technology, digital life, and information society. These terms are essential for modern Japanese and appear frequently on JLPT N2.",
     goals:["Discuss technology trends and digital culture","Use IT and internet vocabulary","Express opinions about information society issues"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"AI = エーアイ in Japanese.\nじんこうちのうぎじゅつ = AI technology.",
     example:"A: じんこうちのうがしゃかいをかえていますね。\nB: はい、きたいとふあんのりょうほうがあります。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: AI is changing society.\nB: Yes, there is both anticipation and anxiety.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan is a leader in AI (じんこうちのう) research and robotics. The concept of ロボットとのきょうぞん (coexistence with robots) is more accepted in Japan than in Western cultures, partly due to anime like 鉄腕アトム (Astro Boy). Japan's aging society drives AI development for elder care, manufacturing, and service industries."},

    {type:"teach", trg:"データ", src:"data", pos:"noun", gender:null,
     note:"ビッグデータ = big data.\nデータをぶんせきする = analyze data.",
     example:"A: データにもとづいてはんだんしましょう。\nB: さんせいです。かんにたよるのはよくないですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let's make decisions based on data.\nB: I agree. Relying on intuition is not good.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"データ (data) has become central to Japanese business vocabulary. データドリブン (data-driven) decision making is increasingly valued. Japan's こじんじょうほうほごほう (Personal Information Protection Law) governs データ use. The tension between データかつよう (utilizing data) and プライバシー (privacy) is a major social debate."},

    {type:"teach", trg:"セキュリティ", src:"security (digital)", pos:"noun", gender:null,
     note:"サイバーセキュリティ = cybersecurity.\nセキュリティたいさく = security measures.",
     example:"A: パスワードをていきてきにかえてセキュリティをつよくしましょう。\nB: にだんかいにんしょうもせっていします。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let's strengthen security by changing passwords regularly.\nB: I'll also set up two-factor authentication.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan established サイバーセキュリティきほんほう (Basic Act on Cybersecurity) in 2014. Government systems, financial institutions, and Olympics infrastructure face constant cyber threats. にほんCERT (Computer Emergency Response Team) coordinates national cybersecurity. Despite technological advancement, Japan's digital literacy gap among older citizens remains a challenge."},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"クラウドサービス = cloud service.\nクラウドにほぞんする = save to the cloud.",
     example:"A: データはクラウドにほぞんしてあります。\nB: バックアップもじゅうようですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The data is saved in the cloud.\nB: Backups are important too.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"クラウド adoption in Japan grew rapidly during the pandemic as テレワーク (remote work) became common. Japanese companies, traditionally cautious about data security, increasingly trust クラウドサービス from providers like AWS and Microsoft Azure. Government push for DX (デジタルトランスフォーメーション) accelerates クラウド migration."},

    {type:"teach", trg:"アプリ", src:"application (software)", pos:"noun", gender:null,
     note:"Short for アプリケーション.\nアプリをダウンロードする = download an app.",
     example:"A: べんりなアプリをしっていますか？\nB: にほんごがくしゅうのアプリがおすすめです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Do you know any useful apps?\nB: I recommend a Japanese learning app.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's アプリ market is the third largest globally. LINE (Japan's dominant messaging アプリ) has over 90 million Japanese users and is used for everything from chatting to payments to government communications. Japanese アプリ design tends to be information-dense compared to Western minimalist approaches."},

    {type:"teach", trg:"けんさく", src:"search (web/database)", pos:"noun", gender:null,
     note:"けんさくする = to search.\nけんさくエンジン = search engine.",
     example:"A: わからないことはすぐけんさくします。\nB: いまはなんでもけんさくできるじだいですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: I immediately search for things I don't understand.\nB: It's an era where you can search for anything.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"ググる (to Google) has become a Japanese verb, though Yahoo Japan (ヤフー) maintained a larger market share than Google for years, unique among developed nations. Japanese けんさく culture involves 口コミ (word-of-mouth reviews) sites like 食べログ (restaurant reviews) and 価格.com (price comparisons) that deeply influence consumer behavior."},

    {type:"teach", trg:"とうこう", src:"posting (online)", pos:"noun", gender:null,
     note:"とうこうする = to post.\nSNSにとうこうする = post on social media.",
     example:"A: まいにちSNSにとうこうしていますか？\nB: いいえ、しゅうにいっかいくらいです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Do you post on social media every day?\nB: No, about once a week.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japanese SNS (social media) culture has unique characteristics. にめいせい (anonymity) is valued more than in Western social media: Twitter (X) Japan has the second-largest user base globally, partly because anonymous posting is acceptable. ほのめかし (hinting) rather than direct statements characterizes Japanese online communication."},

    {type:"teach", trg:"コンテンツ", src:"content (digital/media)", pos:"noun", gender:null,
     note:"デジタルコンテンツ = digital content.\nコンテンツさんぎょう = content industry.",
     example:"A: にほんのコンテンツさんぎょうはせかいてきにゆうめいです。\nB: アニメやマンガのことですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Japan's content industry is world-famous.\nB: You mean anime and manga.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's コンテンツ industry (anime, manga, games, music) is a major soft power asset valued at over 12 trillion yen annually. クールジャパン (Cool Japan) is the government strategy to promote Japanese コンテンツ globally. Japan's コンテンツ exports include アニメ streaming on Crunchyroll/Netflix and ゲーム from Nintendo/Sony."},

    {type:"teach", trg:"フェイク", src:"fake (as in fake news)", pos:"noun", gender:null,
     note:"フェイクニュース = fake news.\nフェイクかどうかみきわめる = determine if it's fake.",
     example:"A: フェイクニュースにだまされないようにきをつけましょう。\nB: じょうほうのしゅっしょをかくにんすることがだいじですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let's be careful not to be deceived by fake news.\nB: Confirming the source of information is important.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"フェイクニュース awareness has grown significantly in Japan. メディアリテラシー (media literacy) education now includes フェイク detection skills. Japan's trust in traditional media remains relatively high compared to other countries, but SNS-based misinformation during disasters and elections is a growing concern."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"プライバシーをまもる = protect privacy.\nこじんじょうほう = personal information.",
     example:"A: インターネットじだいのプライバシーほごはむずかしいですね。\nB: こじんじょうほうのかんりがじゅうようです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Privacy protection in the internet age is difficult.\nB: Personal information management is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japan's こじんじょうほうほごほう (Personal Information Protection Act) was significantly updated in 2022, strengthening data rights. Japanese society values プライバシー highly: address books are rarely shared, and personal questions are indirect. The challenge of balancing デジタルべんり (digital convenience) with プライバシー is a major societal debate."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"じどうかする = to automate.\nこうじょうのじどうか = factory automation.",
     example:"A: じどうかによってしごとのしかたがかわっています。\nB: なくなるしごともありますが、あたらしいしごともうまれます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Automation is changing the way we work.\nB: Some jobs disappear but new ones are created too.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan leads in こうぎょうじどうか (industrial automation) with the highest robot density in manufacturing. ロボットたいこく (robot nation) Japan has robots in factories, hotels (変なホテル), restaurants, and hospitals. じどうはんばいき (vending machines) number over 5 million, selling everything from drinks to hot meals."},

    // Quiz steps
    {type:"mc", q:"にほんでいちばんつかわれているメッセージアプリはなんですか？",
     opts:["LINE","WhatsApp","Facebook Messenger","WeChat"],
     ans:"LINE",
     hint:"This messaging app has over 90 million Japanese users and is used for personal chat, payments, and even government communications."},

    {type:"fb", s:"データに{1}いてはんだんしましょう。",
     a:["もとづ"],
     opts:["もとづ","したが","ともな","かかわ"],
     hint:"Let's make decisions based on data. This formal particle means 'based on.'",
     sSrc:"Let's make decisions based on data."},

    {type:"match", pairs:[
      {trg:"じんこうちのう", src:"artificial intelligence"},
      {trg:"セキュリティ", src:"digital security"},
      {trg:"プライバシー", src:"privacy"},
      {trg:"じどうか", src:"automation"}
    ]},

    {type:"mc", q:"にほんのじどうはんばいきはなんだいくらいありますか？",
     opts:["Over 5 million","About 1 million","About 100,000","About 500,000"],
     ans:"Over 5 million",
     hint:"Japan has one of the highest densities of vending machines in the world, selling an incredible variety of products."},

    {type:"fb", s:"フェイクニュースに{1}されないようにきをつけましょう。",
     a:["だま"],
     opts:["だま","おどろか","かんどう","きづ"],
     hint:"Be careful not to be deceived by fake news. The passive form of this verb means 'to be tricked.'",
     sSrc:"Let's be careful not to be deceived by fake news."},

    {type:"mc", q:"にほんのSNSぶんかのとくちょうはなんですか？",
     opts:["Anonymity is more valued than in Western social media","Real names are always required","Video content only","No social media use"],
     ans:"Anonymity is more valued than in Western social media",
     hint:"Japan's online culture places high value on this aspect, which is why Twitter/X has such a large Japanese user base."}
  ]
};
export default BATCH11_L1;
