// Batch 11 – Unit 26 (B2.1 News & Media): Media & Communication Vocabulary
const BATCH11_L1 = {
  id:"jav2_u26l_b11_1", title:"メディアのことば", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアのことば",
     desc:"Learn vocabulary for discussing news, media, and information in Japanese society. These words appear daily in newspapers, TV news, and online media.",
     goals:["Discuss news and media using appropriate vocabulary","Understand journalism and information terminology","Express views about media and reporting"]},

    {type:"teach", trg:"ほうどう", src:"news reporting / coverage", pos:"noun", gender:null,
     note:"ほうどうする = to report (news).\nほうどうきかん = news organization.",
     example:"A: このじけんについてのほうどうをみましたか？\nB: はい、テレビでみました。",
     exampleSrc:"A: Did you see the news coverage about this incident?\nB: Yes, I saw it on TV.",
     funFact:"ほうどう (報道) is the formal term for journalism and news reporting. ほうどうのじゆう (freedom of the press) is a key democratic concept. Japan's press clubs (記者クラブ) are unique: only member journalists access government briefings, creating a distinct media ecosystem."},

    {type:"teach", trg:"きじ", src:"article (news/magazine)", pos:"noun", gender:null,
     note:"しんぶんきじ = newspaper article.\nきじをかく = write an article.",
     example:"A: このきじをよみましたか？おもしろいですよ。\nB: まだです。あとでよみます。",
     exampleSrc:"A: Did you read this article? It is interesting.\nB: Not yet. I will read it later.",
     funFact:"きじ (記事) combines 記 (record) and 事 (matter). Japanese newspaper articles follow the 逆三角形 (inverted triangle) structure: most important info first, details later. Online きじ (web articles) have transformed Japanese media consumption, especially among younger generations who rarely buy newspapers."},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"よろんちょうさ = public opinion poll.\nよろんをはんえいする = reflect public opinion.",
     example:"A: さいきんのよろんちょうさのけっかはどうでしたか？\nB: しじりつがさがっています。",
     exampleSrc:"A: What were the results of the recent opinion poll?\nB: The approval rating is declining.",
     funFact:"よろんちょうさ (世論調査) are conducted frequently by major newspapers (Asahi, Yomiuri, Mainichi) and NHK. Cabinet approval ratings (内閣支持率) are closely watched. Japanese media reports polls with precision: 支持する (support) vs 支持しない (don't support) percentages dominate political coverage."},

    {type:"teach", trg:"じょうほう", src:"information", pos:"noun", gender:null,
     note:"じょうほうをあつめる = gather information.\nじょうほうしゃかい = information society.",
     example:"A: インターネットでじょうほうをあつめました。\nB: せいかくなじょうほうですか？",
     exampleSrc:"A: I gathered information on the internet.\nB: Is it accurate information?",
     funFact:"じょうほう (情報) is one of the most important modern Japanese words. じょうほうリテラシー (information literacy) is taught in schools. フェイクニュース (fake news) and じょうほうかしゃかい (information-overloaded society) are active social debates. The kanji combines 情 (feelings/conditions) and 報 (report)."},

    {type:"teach", trg:"しゅちょう", src:"claim / assertion / argument", pos:"noun", gender:null,
     note:"しゅちょうする = to claim/argue.\nUsed in debates and essays.",
     example:"A: かれのしゅちょうにはさんせいできません。\nB: どのてんにはんたいですか？",
     exampleSrc:"A: I cannot agree with his argument.\nB: Which point do you oppose?",
     funFact:"しゅちょう (主張) is essential for academic and political discourse. ろんぶんのしゅちょう (thesis argument) is the central claim. In Japanese debate style, しゅちょう is typically presented indirectly and supported extensively before being stated explicitly, unlike Western rhetoric which often leads with the claim."},

    {type:"teach", trg:"しんらい", src:"trust / reliability", pos:"noun", gender:null,
     note:"しんらいする = to trust.\nしんらいできる = trustworthy.",
     example:"A: このニュースサイトはしんらいできますか？\nB: はい、おおてメディアなのでしんらいせいがたかいです。",
     exampleSrc:"A: Can this news site be trusted?\nB: Yes, it is a major media outlet so reliability is high.",
     funFact:"しんらい (信頼) is deeper than しんじる (to believe): it implies earned, tested trust over time. しんらいかんけい (trust relationship) takes years to build but seconds to destroy. Japanese business culture is built on しんらい: deals are made based on long-standing relationships rather than contracts alone."},

    {type:"teach", trg:"えいきょうりょく", src:"influence / clout", pos:"noun", gender:null,
     note:"えいきょうりょくがある = to have influence.\nInfluencers: インフルエンサー.",
     example:"A: SNSのえいきょうりょくはおおきくなっています。\nB: とくにわかものにたいするえいきょうりょくがつよいですね。",
     exampleSrc:"A: The influence of social media is growing.\nB: Especially its influence on young people is strong.",
     funFact:"えいきょうりょく (影響力) combines えいきょう (influence) with りょく (power). In Japanese politics, えいきょうりょくのあるせいじか (influential politicians) shape policy behind the scenes. The rise of SNS influencers (インフルエンサー) has democratized えいきょうりょく beyond traditional gatekeepers."},

    {type:"teach", trg:"へんけん", src:"prejudice / bias", pos:"noun", gender:null,
     note:"へんけんをもつ = hold a prejudice.\nへんけんのない = unbiased.",
     example:"A: メディアにもへんけんがありますか？\nB: ざんねんながら、かんぜんにちゅうりつなメディアはありません。",
     exampleSrc:"A: Does the media have biases too?\nB: Unfortunately, completely neutral media does not exist.",
     funFact:"へんけん (偏見) combines 偏 (biased) and 見 (view). Japanese media literacy education teaches へんけんをみぬく (to see through bias). Each major newspaper has known political leanings: Asahi (liberal), Yomiuri (conservative), Mainichi (center-left). Recognizing these biases is considered media literacy."},

    {type:"teach", trg:"はっしん", src:"transmission / broadcasting / posting", pos:"noun", gender:null,
     note:"じょうほうをはっしんする = transmit information.\nSNSではっしんする = post on social media.",
     example:"A: だれでもSNSでじょうほうをはっしんできるじだいです。\nB: そのぶん、せきにんもおおきいですね。",
     exampleSrc:"A: It is an era where anyone can broadcast information on social media.\nB: Proportionally, the responsibility is also great.",
     funFact:"はっしん (発信) was traditionally about broadcast media, but now encompasses individual social media posting. じこはっしん (self-broadcasting) through blogs, YouTube, and Twitter is a major cultural phenomenon. The flip side is はっしんせきにん (broadcasting responsibility): spreading false information can have legal consequences."},

    {type:"teach", trg:"ちょさくけん", src:"copyright", pos:"noun", gender:null,
     note:"ちょさくけんほう = copyright law.\nちょさくけんしんがい = copyright infringement.",
     example:"A: このがぞうをつかってもちょさくけんのもんだいはありませんか？\nB: フリーそざいなのでだいじょうぶです。",
     exampleSrc:"A: Won't there be copyright issues using this image?\nB: It is free material so it is fine.",
     funFact:"ちょさくけん (著作権) is increasingly important in Japan's content-rich culture. Manga, anime, and music piracy are serious legal issues. Japan's ちょさくけんほう (copyright law) was updated in 2020 to criminalize illegal downloading. The doujinshi (fan comic) market operates in a fascinating legal gray zone tolerated by most publishers."},

    {type:"teach", trg:"とうめいせい", src:"transparency", pos:"noun", gender:null,
     note:"とうめいせいをたかめる = increase transparency.\nKey governance concept.",
     example:"A: せいふにはもっととうめいせいがひつようです。\nB: こくみんのしるけんりをまもるべきですね。",
     exampleSrc:"A: The government needs more transparency.\nB: The people's right to know should be protected.",
     funFact:"とうめいせい (透明性) is a governance keyword combining 透明 (transparent) and 性 (nature). Japan's じょうほうこうかい (information disclosure) laws allow citizens to request government documents. The push for corporate とうめいせい has increased after corporate scandals. It is a core ESG (Environmental, Social, Governance) metric."},

    // Quiz steps
    {type:"mc", q:"にほんのしんぶんのせいじてきけいこうについて、ただしいのはどれですか？",
     opts:["Different papers have different political leanings","All papers are neutral","Papers don't cover politics","There is only one national paper"],
     ans:"Different papers have different political leanings",
     hint:"Major newspapers like Asahi, Yomiuri, and Mainichi each have recognized p... positions, which readers are expected to understand."},

    {type:"fb", s:"インターネットで{1}をあつめました。",
     a:["じょうほう"],
     opts:["じょうほう","ほうどう","きじ","よろん"],
     hint:"You gathered data and facts from the internet. This general term means 'information.'",
     sSrc:"I gathered information on the internet."},

    {type:"match", pairs:[
      {trg:"ほうどう", src:"news reporting"},
      {trg:"よろん", src:"public opinion"},
      {trg:"へんけん", src:"prejudice / bias"},
      {trg:"ちょさくけん", src:"copyright"}
    ]},

    {type:"mc", q:"「はっしん」はいまどんないみでもつかいますか？",
     opts:["Posting on social media","Only TV broadcasting","Only radio","Only newspapers"],
     ans:"Posting on social media",
     hint:"This word has expanded beyond traditional broadcasting to include individual p... on modern platforms."},

    {type:"fb", s:"かれのしゅちょうに{1}できません。",
     a:["さんせい"],
     opts:["さんせい","しんらい","はっしん","ほうどう"],
     hint:"You cannot agree with his argument. This word means 'agreement' or 'being in favor.'",
     sSrc:"I cannot agree with his argument."},

    {type:"mc", q:"にほんの「どうじんし」はちょさくけんのかんてんからどうですか？",
     opts:["Exists in a legal gray zone mostly tolerated by publishers","Completely illegal","Fully protected by law","Does not exist anymore"],
     ans:"Exists in a legal gray zone mostly tolerated by publishers",
     hint:"Fan-created comics based on existing works occupy an interesting legal position in Japan's content culture."}
  ]
};
export default BATCH11_L1;
