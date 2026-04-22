// Batch 7 – Unit 28 (B2.1 Written vs Spoken): Formal Writing Vocabulary
const BATCH7_L1 = {
  id:"jav2_u28l_b7_1", title:"文章表現(ぶんしょうひょうげん)", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"文章表現(ぶんしょうひょうげん)",
     desc:"Learn formal writing vocabulary that distinguishes written Japanese from spoken. These words appear in academic papers, business documents, and formal correspondence.",
     goals:["Recognize formal written-only expressions","Use academic and document vocabulary","Distinguish register in written contexts"]},

    {type:"teach", trg:"上記(じょうき)", src:"the above-mentioned / aforementioned", pos:"noun", gender:null,
     note:"上記(じょうき)のとおり = as mentioned above.\nWritten-only expression.",
     example:"A: 上記(じょうき)の理由(りゆう)により、提案(ていあん)を承認(しょうにん)します。\nB: ありがとうございます。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: For the aforementioned reasons, we approve the proposal.\nB: Thank you.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"上記(じょうき) literally means 'written above.' Japanese formal documents use spatial references: 上記(じょうき) (above), 下記(かき) (below), 左記(さき) (left-written), 右記(うき) (right-written). These reflect traditional vertical writing where 'above' meant earlier text. Even in horizontal writing, the convention persists."},

    {type:"teach", trg:"下記(かき)", src:"the following / below-mentioned", pos:"noun", gender:null,
     note:"下記(かき)のとおり = as written below.\n下記(かき)をご覧(らん)ください = please see below.",
     example:"A: 詳細(しょうさい)は下記(かき)のとおりです。\nB: 確認(かくにん)いたしました。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Details are as follows.\nB: I have confirmed them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"下記(かき) is essential in business emails and documents. The formula 上記(じょうき)...下記(かき) (above...below) structures formal communication. Japanese business emails follow rigid patterns: greeting, purpose, details (下記(かき)), closing. Deviating from this structure signals either informality or incompetence."},

    {type:"teach", trg:"当該(とうがい)", src:"the said / the relevant / in question", pos:"noun", gender:null,
     note:"当該者(とうがいしゃ) = the person in question.\n当該事項(とうがいじこう) = the matter in question.",
     example:"A: 当該者(とうがいしゃ)に連絡(れんらく)してください。\nB: 承知(しょうち)いたしました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Please contact the person in question.\nB: Understood.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"当該(とうがい) is pure legal/administrative language. It specifies 'the one we are talking about' without naming it again. Japanese legal documents use 当該(とうがい) extensively to avoid repetition and maintain precision. Hearing 当該(とうがい) in conversation sounds extremely formal, like a lawyer speaking."},

    {type:"teach", trg:"おそれがある", src:"there is a risk that / liable to", pos:"verb", gender:null,
     note:"Formal risk expression.\n事故(じこ)が起(お)こるおそれがある = there is a risk of an accident.",
     example:"A: 台風(たいふう)により、電車(でんしゃ)が運休(うんきゅう)するおそれがあります。\nB: 早(はや)めに帰(かえ)りましょう。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: There is a risk of train suspension due to the typhoon.\nB: Let us go home early.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"おそれがある is the official risk warning phrase used in weather alerts, legal notices, and safety announcements. Train companies say 遅延(ちえん)のおそれがあります (there is a risk of delays). It is more formal than かもしれない and carries official weight. News broadcasts use it constantly."},

    {type:"teach", trg:"ないし", src:"or / to (range)", pos:"conj", gender:null,
     note:"Formal alternative to 'or.' Used for ranges.\n3日(にち)ないし5日(にち) = 3 to 5 days.",
     example:"A: 2週間(しゅうかん)ないし3週間(しゅうかん)かかります。\nB: わかりました。お待(ま)ちします。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: It will take 2 to 3 weeks.\nB: I understand. I will wait.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ないし (乃至(ないし)) is formal written Japanese for 'or/through.' It appears in legal documents, contracts, and official notices. In speech, people say 'から...まで' (from...to) or 'または' (or). Using ないし in conversation marks the speaker as extremely formal or bureaucratic."},

    {type:"teach", trg:"記載(きさい)", src:"description / entry / listing", pos:"noun", gender:null,
     note:"記載(きさい)する = to write/describe/list.\n記載事項(きさいじこう) = items to be listed.",
     example:"A: 詳細(しょうさい)はウェブサイトに記載(きさい)されています。\nB: 確認(かくにん)してみます。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Details are listed on the website.\nB: I will check.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"記載(きさい) is the standard word for written entries in forms, documents, and contracts. 記載漏(きさいも)れ (omission in listing) is a serious error in official documents. Japanese bureaucracy requires precise 記載(きさい) of personal information. Even one wrong character can cause document rejection."},

    {type:"teach", trg:"許可(きょか)", src:"permission / authorization", pos:"noun", gender:null,
     note:"許可(きょか)する = to permit/authorize.\n許可証(きょかしょう) = permit/license.",
     example:"A: 建築(けんちく)の許可(きょか)がおりました。\nB: やっと工事(こうじ)が始(はじ)められますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The construction permit was granted.\nB: We can finally start building.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"許可(きょか) is needed for countless activities in Japan: construction, business operation, event hosting, even some types of photography. The bureaucratic 許可(きょか) process can be lengthy. However, once obtained, 許可(きょか) is respected. 無許可(むきょか) (without permission) carries serious legal consequences."},

    {type:"teach", trg:"適切(てきせつ)", src:"appropriate / proper / suitable", pos:"adj", gender:null,
     note:"Na-adjective. 適切(てきせつ)な対応(たいおう) = appropriate response.\n適切(てきせつ)に処理(しょり)する = to handle properly.",
     example:"A: 適切(てきせつ)な対応(たいおう)をお願(ねが)いします。\nB: 承知(しょうち)いたしました。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Please provide an appropriate response.\nB: Understood.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"適切(てきせつ) is the formal version of ふさわしい. It appears in business communications, policy documents, and quality standards. Japanese quality control (品質管理(ひんしつかんり)) revolves around 適切(てきせつ) procedures. The word implies not just suitability but optimal appropriateness for the specific situation."},

    {type:"teach", trg:"前略(ぜんりゃく)", src:"dispensing with formalities (letter opening)", pos:"noun", gender:null,
     note:"Letter/email opener. 前略(ぜんりゃく) = skipping the seasonal greeting.\nUsed when getting straight to business.",
     example:"A: 前略(ぜんりゃく)。緊急(きんきゅう)の用件(ようけん)です。\nB: 了解(りょうかい)しました。詳(くわ)しく教(おし)えてください。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。",
     exampleSrc:"A: Dispensing with formalities. This is an urgent matter.\nB: Understood. Please tell me more.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?",
     funFact:"前略(ぜんりゃく) literally means 'abbreviating what comes before.' Japanese letters traditionally start with seasonal greetings (時候(じこう)の挨拶(あいさつ)). Writing 前略(ぜんりゃく) skips this and signals urgency or casual familiarity. Formal letters must include proper seasonal openings like 'the leaves are changing color' (紅葉(こうよう)の候(こう))."},

    {type:"teach", trg:"草稿(そうこう)", src:"draft / manuscript", pos:"noun", gender:null,
     note:"草稿(そうこう)を書(か)く = to write a draft.\n最終稿(さいしゅうこう) = final draft.",
     example:"A: レポートの草稿(そうこう)ができました。\nB: 確認(かくにん)しますので、送信(そうしん)してください。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The report draft is ready.\nB: I will review it, so please send it.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"草稿(そうこう) uses 草(くさ) (grass/rough) and 稿(こう) (manuscript). A draft is a 'rough manuscript.' Japanese academic writing involves multiple 草稿(そうこう) rounds with advisor review. The process of revising from 草稿(そうこう) to final version (最終稿(さいしゅうこう)) teaches precision. 下書(したが)き (rough draft) is the casual equivalent."},

    {type:"teach", trg:"情報開示(じょうほうかいじ)", src:"information disclosure", pos:"noun", gender:null,
     note:"情報開示制度(じょうほうかいじせいど) = information disclosure system.\n開示請求(かいじせいきゅう) = disclosure request.",
     example:"A: 情報開示(じょうほうかいじ)を請求(せいきゅう)しました。\nB: 開示(かいじ)までどのくらいかかりますか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: I requested information disclosure.\nB: How long until disclosure?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"情報開示(じょうほうかいじ) is a democratic right in Japan since the 1999 Information Disclosure Law. Citizens can request government documents. Corporate 情報開示(じょうほうかいじ) is required for publicly traded companies. The balance between 透明性(とうめいせい) (transparency) and プライバシー (privacy) is constantly debated."},

    {type:"teach", trg:"尊重(そんちょう)", src:"respect / esteem", pos:"noun", gender:null,
     note:"尊重(そんちょう)する = to respect. 人権(じんけん)を尊重(そんちょう)する = to respect human rights.\n尊重(そんちょう)すべき = worthy of respect.",
     example:"A: お互(たが)いの意見(いけん)を尊重(そんちょう)しましょう。\nB: そうですね。違(ちが)いを認(みと)めることが大事(だいじ)です。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us respect each other's opinions.\nB: Yes. Recognizing differences is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"尊重(そんちょう) combines 尊(そん) (valuable/revered) and 重(ちょう) (heavy/important). It is stronger than simply 'respecting.' 基本的人権(きほんてきじんけん)の尊重(そんちょう) (respect for fundamental human rights) is a cornerstone of Japan's postwar constitution. In business, 尊重(そんちょう) of diverse opinions drives better decision-making."},

    // Quiz steps
    {type:"mc", q:"前略(ぜんりゃく) in a letter means:",
     opts:["Skipping the seasonal greeting to get to the point","A formal closing","A signature block","An attachment notice"],
     ans:"Skipping the seasonal greeting to get to the point",
     hint:"Japanese letters traditionally open with s... greetings. This word signals those are being omitted."},

    {type:"match", pairs:[
      {trg:"上記(じょうき)", src:"above-mentioned"},
      {trg:"下記(かき)", src:"below-mentioned"},
      {trg:"当該(とうがい)", src:"the said/in question"},
      {trg:"記載(きさい)", src:"listing/entry"},
      {trg:"許可(きょか)", src:"permission"}
    ]},

    {type:"fb", s:"台風(たいふう)により、電車(でんしゃ)が運休(うんきゅう)する{1}があります。",
     a:["おそれ"],
     opts:["おそれ","許可(きょか)","記載(きさい)","草稿(そうこう)"],
     hint:"There is a risk of train suspension. This formal phrase warns about potential danger.",
     sSrc:"There is a {1} of train suspension due to the typhoon."},

    {type:"mc", q:"記載漏(きさいも)れ on an official document means:",
     opts:["An expired date","An omission in the required information","A spelling mistake","A signature missing"],
     ans:"An omission in the required information",
     hint:"Failing to fill in r... fields can cause document rejection in Japanese bureaucracy."},

    {type:"fb", s:"レポートの{1}ができました。確認(かくにん)してください。",
     a:["草稿(そうこう)"],
     opts:["草稿(そうこう)","記載(きさい)","許可(きょか)","上記(じょうき)"],
     hint:"The first version of the report is ready for review. This word means 'draft.'",
     sSrc:"The report {1} is ready. Please review it."},

    {type:"mc", q:"ないし is used for:",
     opts:["Showing contrast","Expressing emotions","Expressing a range (2 to 3 weeks)","Asking questions"],
     ans:"Expressing a range (2 to 3 weeks)",
     hint:"This formal conjunction means 'or' or 'to' when describing a r... of values."},

    {type:"match", pairs:[
      {trg:"おそれがある", src:"there is a risk"},
      {trg:"適切(てきせつ)", src:"appropriate"},
      {trg:"前略(ぜんりゃく)", src:"dispensing with formalities"},
      {trg:"草稿(そうこう)", src:"draft"},
      {trg:"尊重(そんちょう)", src:"respect"}
    ]},

    {type:"fb", s:"お互(たが)いの意見(いけん)を{1}しましょう。",
     a:["尊重(そんちょう)"],
     opts:["尊重(そんちょう)","記載(きさい)","許可(きょか)","排出(はいしゅつ)"],
     hint:"Let us respect each other's opinions. This verb means 'to esteem' or 'to respect.'",
     sSrc:"Let us {1} each other's opinions."}
  ,{type:"match",pairs:[{trg:"ないし",src:"or / to (range)"},{trg:"情報開示(じょうほうかいじ)",src:"information disclosure"}]}]
};
export default BATCH7_L1;
