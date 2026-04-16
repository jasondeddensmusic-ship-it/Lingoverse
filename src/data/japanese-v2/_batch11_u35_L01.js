// Batch 11 – Unit 35 (B2.4 Information Society): Technology & Digital Life
const BATCH11_L1 = {
  id:"jav2_u35l_b11_1", title:"デジタルじだい", icon:"🖥️", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタルじだい",
     desc:"Learn vocabulary for discussing technology, digital life, and information society. These terms are essential for modern Japanese and appear frequently on JLPT N2.",
     goals:["Discuss technology trends and digital culture","Use IT and internet vocabulary","Express opinions about information society issues"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"AI = エーアイ in Japanese.\nじんこうちのうぎじゅつ = AI technology.",
     example:"A: じんこうちのうがしゃかいをかえていますね。\nB: はい、きたいとふあんのりょうほうがあります。",
     exampleSrc:"A: AI is changing society.\nB: Yes, there is both anticipation and anxiety.",
     funFact:"Japan is a leader in AI (じんこうちのう) research and robotics. The concept of ロボットとのきょうぞん (coexistence with robots) is more accepted in Japan than in Western cultures, partly due to anime like 鉄腕アトム (Astro Boy). Japan's aging society drives AI development for elder care, manufacturing, and service industries."},

    {type:"teach", trg:"データ", src:"data", pos:"noun", gender:null,
     note:"ビッグデータ = big data.\nデータをぶんせきする = analyze data.",
     example:"A: データにもとづいてはんだんしましょう。\nB: さんせいです。かんにたよるのはよくないですね。",
     exampleSrc:"A: Let's make decisions based on data.\nB: I agree. Relying on intuition is not good.",
     funFact:"データ (data) has become central to Japanese business vocabulary. データドリブン (data-driven) decision making is increasingly valued. Japan's こじんじょうほうほごほう (Personal Information Protection Law) governs データ use. The tension between データかつよう (utilizing data) and プライバシー (privacy) is a major social debate."},

    {type:"teach", trg:"セキュリティ", src:"security (digital)", pos:"noun", gender:null,
     note:"サイバーセキュリティ = cybersecurity.\nセキュリティたいさく = security measures.",
     example:"A: パスワードをていきてきにかえてセキュリティをつよくしましょう。\nB: にだんかいにんしょうもせっていします。",
     exampleSrc:"A: Let's strengthen security by changing passwords regularly.\nB: I'll also set up two-factor authentication.",
     funFact:"Japan established サイバーセキュリティきほんほう (Basic Act on Cybersecurity) in 2014. Government systems, financial institutions, and Olympics infrastructure face constant cyber threats. にほんCERT (Computer Emergency Response Team) coordinates national cybersecurity. Despite technological advancement, Japan's digital literacy gap among older citizens remains a challenge."},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"クラウドサービス = cloud service.\nクラウドにほぞんする = save to the cloud.",
     example:"A: データはクラウドにほぞんしてあります。\nB: バックアップもじゅうようですね。",
     exampleSrc:"A: The data is saved in the cloud.\nB: Backups are important too.",
     funFact:"クラウド adoption in Japan grew rapidly during the pandemic as テレワーク (remote work) became common. Japanese companies, traditionally cautious about data security, increasingly trust クラウドサービス from providers like AWS and Microsoft Azure. Government push for DX (デジタルトランスフォーメーション) accelerates クラウド migration."},

    {type:"teach", trg:"アプリ", src:"application (software)", pos:"noun", gender:null,
     note:"Short for アプリケーション.\nアプリをダウンロードする = download an app.",
     example:"A: べんりなアプリをしっていますか？\nB: にほんごがくしゅうのアプリがおすすめです。",
     exampleSrc:"A: Do you know any useful apps?\nB: I recommend a Japanese learning app.",
     funFact:"Japan's アプリ market is the third largest globally. LINE (Japan's dominant messaging アプリ) has over 90 million Japanese users and is used for everything from chatting to payments to government communications. Japanese アプリ design tends to be information-dense compared to Western minimalist approaches."},

    {type:"teach", trg:"けんさく", src:"search (web/database)", pos:"noun", gender:null,
     note:"けんさくする = to search.\nけんさくエンジン = search engine.",
     example:"A: わからないことはすぐけんさくします。\nB: いまはなんでもけんさくできるじだいですね。",
     exampleSrc:"A: I immediately search for things I don't understand.\nB: It's an era where you can search for anything.",
     funFact:"ググる (to Google) has become a Japanese verb, though Yahoo Japan (ヤフー) maintained a larger market share than Google for years, unique among developed nations. Japanese けんさく culture involves 口コミ (word-of-mouth reviews) sites like 食べログ (restaurant reviews) and 価格.com (price comparisons) that deeply influence consumer behavior."},

    {type:"teach", trg:"とうこう", src:"posting (online)", pos:"noun", gender:null,
     note:"とうこうする = to post.\nSNSにとうこうする = post on social media.",
     example:"A: まいにちSNSにとうこうしていますか？\nB: いいえ、しゅうにいっかいくらいです。",
     exampleSrc:"A: Do you post on social media every day?\nB: No, about once a week.",
     funFact:"Japanese SNS (social media) culture has unique characteristics. にめいせい (anonymity) is valued more than in Western social media: Twitter (X) Japan has the second-largest user base globally, partly because anonymous posting is acceptable. ほのめかし (hinting) rather than direct statements characterizes Japanese online communication."},

    {type:"teach", trg:"コンテンツ", src:"content (digital/media)", pos:"noun", gender:null,
     note:"デジタルコンテンツ = digital content.\nコンテンツさんぎょう = content industry.",
     example:"A: にほんのコンテンツさんぎょうはせかいてきにゆうめいです。\nB: アニメやマンガのことですね。",
     exampleSrc:"A: Japan's content industry is world-famous.\nB: You mean anime and manga.",
     funFact:"Japan's コンテンツ industry (anime, manga, games, music) is a major soft power asset valued at over 12 trillion yen annually. クールジャパン (Cool Japan) is the government strategy to promote Japanese コンテンツ globally. Japan's コンテンツ exports include アニメ streaming on Crunchyroll/Netflix and ゲーム from Nintendo/Sony."},

    {type:"teach", trg:"フェイク", src:"fake (as in fake news)", pos:"noun", gender:null,
     note:"フェイクニュース = fake news.\nフェイクかどうかみきわめる = determine if it's fake.",
     example:"A: フェイクニュースにだまされないようにきをつけましょう。\nB: じょうほうのしゅっしょをかくにんすることがだいじですね。",
     exampleSrc:"A: Let's be careful not to be deceived by fake news.\nB: Confirming the source of information is important.",
     funFact:"フェイクニュース awareness has grown significantly in Japan. メディアリテラシー (media literacy) education now includes フェイク detection skills. Japan's trust in traditional media remains relatively high compared to other countries, but SNS-based misinformation during disasters and elections is a growing concern."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"プライバシーをまもる = protect privacy.\nこじんじょうほう = personal information.",
     example:"A: インターネットじだいのプライバシーほごはむずかしいですね。\nB: こじんじょうほうのかんりがじゅうようです。",
     exampleSrc:"A: Privacy protection in the internet age is difficult.\nB: Personal information management is important.",
     funFact:"Japan's こじんじょうほうほごほう (Personal Information Protection Act) was significantly updated in 2022, strengthening data rights. Japanese society values プライバシー highly: address books are rarely shared, and personal questions are indirect. The challenge of balancing デジタルべんり (digital convenience) with プライバシー is a major societal debate."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"じどうかする = to automate.\nこうじょうのじどうか = factory automation.",
     example:"A: じどうかによってしごとのしかたがかわっています。\nB: なくなるしごともありますが、あたらしいしごともうまれます。",
     exampleSrc:"A: Automation is changing the way we work.\nB: Some jobs disappear but new ones are created too.",
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
