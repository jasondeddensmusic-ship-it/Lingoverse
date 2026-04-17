// Batch 7 – Unit 28 (B2.1 Written vs Spoken): Formal Writing Vocabulary
const BATCH7_L1 = {
  id:"jav2_u28l_b7_1", title:"ぶんしょうひょうげん", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうひょうげん",
     desc:"Learn formal writing vocabulary that distinguishes written Japanese from spoken. These words appear in academic papers, business documents, and formal correspondence.",
     goals:["Recognize formal written-only expressions","Use academic and document vocabulary","Distinguish register in written contexts"]},

    {type:"teach", trg:"じょうき", src:"the above-mentioned / aforementioned", pos:"noun", gender:null,
     note:"じょうきのとおり = as mentioned above.\nWritten-only expression.",
     example:"A: じょうきのりゆうにより、ていあんをしょうにんします。\nB: ありがとうございます。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: For the aforementioned reasons, we approve the proposal.\nB: Thank you.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"じょうき (上記) literally means 'written above.' Japanese formal documents use spatial references: 上記 (above), 下記 (below), 左記 (left-written), 右記 (right-written). These reflect traditional vertical writing where 'above' meant earlier text. Even in horizontal writing, the convention persists."},

    {type:"teach", trg:"かき", src:"the following / below-mentioned", pos:"noun", gender:null,
     note:"かきのとおり = as written below.\nかきをごらんください = please see below.",
     example:"A: しょうさいはかきのとおりです。\nB: かくにんいたしました。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Details are as follows.\nB: I have confirmed them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"かき (下記) is essential in business emails and documents. The formula じょうき...かき (above...below) structures formal communication. Japanese business emails follow rigid patterns: greeting, purpose, details (かき), closing. Deviating from this structure signals either informality or incompetence."},

    {type:"teach", trg:"とうがい", src:"the said / the relevant / in question", pos:"noun", gender:null,
     note:"とうがいしゃ = the person in question.\nとうがいじこう = the matter in question.",
     example:"A: とうがいしゃにれんらくしてください。\nB: しょうちいたしました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Please contact the person in question.\nB: Understood.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"とうがい (当該) is pure legal/administrative language. It specifies 'the one we are talking about' without naming it again. Japanese legal documents use とうがい extensively to avoid repetition and maintain precision. Hearing とうがい in conversation sounds extremely formal, like a lawyer speaking."},

    {type:"teach", trg:"おそれがある", src:"there is a risk that / liable to", pos:"verb", gender:null,
     note:"Formal risk expression.\nじこがおこるおそれがある = there is a risk of an accident.",
     example:"A: たいふうにより、でんしゃがうんきゅうするおそれがあります。\nB: はやめにかえりましょう。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: There is a risk of train suspension due to the typhoon.\nB: Let us go home early.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"おそれがある is the official risk warning phrase used in weather alerts, legal notices, and safety announcements. Train companies say 遅延のおそれがあります (there is a risk of delays). It is more formal than かもしれない and carries official weight. News broadcasts use it constantly."},

    {type:"teach", trg:"ないし", src:"or / to (range)", pos:"conj", gender:null,
     note:"Formal alternative to 'or.' Used for ranges.\n3にちないし5にち = 3 to 5 days.",
     example:"A: 2しゅうかんないし3しゅうかんかかります。\nB: わかりました。おまちします。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: It will take 2 to 3 weeks.\nB: I understand. I will wait.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ないし (乃至) is formal written Japanese for 'or/through.' It appears in legal documents, contracts, and official notices. In speech, people say 'から...まで' (from...to) or 'または' (or). Using ないし in conversation marks the speaker as extremely formal or bureaucratic."},

    {type:"teach", trg:"きさい", src:"description / entry / listing", pos:"noun", gender:null,
     note:"きさいする = to write/describe/list.\nきさいじこう = items to be listed.",
     example:"A: しょうさいはウェブサイトにきさいされています。\nB: かくにんしてみます。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Details are listed on the website.\nB: I will check.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"きさい (記載) is the standard word for written entries in forms, documents, and contracts. きさいもれ (omission in listing) is a serious error in official documents. Japanese bureaucracy requires precise きさい of personal information. Even one wrong character can cause document rejection."},

    {type:"teach", trg:"きょか", src:"permission / authorization", pos:"noun", gender:null,
     note:"きょかする = to permit/authorize.\nきょかしょう = permit/license.",
     example:"A: けんちくのきょかがおりました。\nB: やっとこうじがはじめられますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The construction permit was granted.\nB: We can finally start building.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"きょか (許可) is needed for countless activities in Japan: construction, business operation, event hosting, even some types of photography. The bureaucratic きょか process can be lengthy. However, once obtained, きょか is respected. 無許可 (むきょか, without permission) carries serious legal consequences."},

    {type:"teach", trg:"てきせつ", src:"appropriate / proper / suitable", pos:"adj", gender:null,
     note:"Na-adjective. てきせつなたいおう = appropriate response.\nてきせつにしょりする = to handle properly.",
     example:"A: てきせつなたいおうをおねがいします。\nB: しょうちいたしました。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Please provide an appropriate response.\nB: Understood.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"てきせつ (適切) is the formal version of ふさわしい. It appears in business communications, policy documents, and quality standards. Japanese quality control (品質管理) revolves around てきせつ procedures. The word implies not just suitability but optimal appropriateness for the specific situation."},

    {type:"teach", trg:"ぜんりゃく", src:"dispensing with formalities (letter opening)", pos:"noun", gender:null,
     note:"Letter/email opener. ぜんりゃく = skipping the seasonal greeting.\nUsed when getting straight to business.",
     example:"A: ぜんりゃく。きんきゅうのようけんです。\nB: (reads the rest of the message)\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Dispensing with formalities. This is an urgent matter.\nB: (reads the rest)\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"ぜんりゃく (前略) literally means 'abbreviating what comes before.' Japanese letters traditionally start with seasonal greetings (時候の挨拶). Writing ぜんりゃく skips this and signals urgency or casual familiarity. Formal letters must include proper seasonal openings like 'the leaves are changing color' (紅葉の候)."},

    {type:"teach", trg:"そうこう", src:"draft / manuscript", pos:"noun", gender:null,
     note:"そうこうをかく = to write a draft.\nさいしゅうこう = final draft.",
     example:"A: レポートのそうこうができました。\nB: かくにんしますので、そうしんしてください。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The report draft is ready.\nB: I will review it, so please send it.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"そうこう (草稿) uses 草 (grass/rough) and 稿 (manuscript). A draft is a 'rough manuscript.' Japanese academic writing involves multiple そうこう rounds with advisor review. The process of revising from そうこう to final version (最終稿) teaches precision. 下書き (したがき, rough draft) is the casual equivalent."},

    {type:"teach", trg:"じょうほうかいじ", src:"information disclosure", pos:"noun", gender:null,
     note:"じょうほうかいじせいど = information disclosure system.\nかいじせいきゅう = disclosure request.",
     example:"A: じょうほうかいじをせいきゅうしました。\nB: かいじまでどのくらいかかりますか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: I requested information disclosure.\nB: How long until disclosure?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"じょうほうかいじ (情報開示) is a democratic right in Japan since the 1999 Information Disclosure Law. Citizens can request government documents. Corporate じょうほうかいじ is required for publicly traded companies. The balance between とうめいせい (transparency) and プライバシー (privacy) is constantly debated."},

    {type:"teach", trg:"そんちょう", src:"respect / esteem", pos:"noun", gender:null,
     note:"そんちょうする = to respect. じんけんをそんちょうする = to respect human rights.\nそんちょうすべき = worthy of respect.",
     example:"A: たがいのいけんをそんちょうしましょう。\nB: そうですね。ちがいをみとめることがだいじです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us respect each other's opinions.\nB: Yes. Recognizing differences is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"そんちょう (尊重) combines 尊 (valuable/revered) and 重 (heavy/important). It is stronger than simply 'respecting.' 基本的人権の尊重 (respect for fundamental human rights) is a cornerstone of Japan's postwar constitution. In business, そんちょう of diverse opinions drives better decision-making."},

    // Quiz steps
    {type:"mc", q:"ぜんりゃく in a letter means:",
     opts:["Skipping the seasonal greeting to get to the point","A formal closing","A signature block","An attachment notice"],
     ans:"Skipping the seasonal greeting to get to the point",
     hint:"Japanese letters traditionally open with s... greetings. This word signals those are being omitted."},

    {type:"match", pairs:[
      {trg:"じょうき", src:"above-mentioned"},
      {trg:"かき", src:"below-mentioned"},
      {trg:"とうがい", src:"the said/in question"},
      {trg:"きさい", src:"listing/entry"},
      {trg:"きょか", src:"permission"}
    ]},

    {type:"fb", s:"たいふうにより、でんしゃがうんきゅうする{1}があります。",
     a:["おそれ"],
     opts:["おそれ","きょか","きさい","そうこう"],
     hint:"There is a risk of train suspension. This formal phrase warns about potential danger.",
     sSrc:"There is a {1} of train suspension due to the typhoon."},

    {type:"mc", q:"きさいもれ on an official document means:",
     opts:["An omission in the required information","A spelling mistake","A signature missing","An expired date"],
     ans:"An omission in the required information",
     hint:"Failing to fill in r... fields can cause document rejection in Japanese bureaucracy."},

    {type:"fb", s:"レポートの{1}ができました。かくにんしてください。",
     a:["そうこう"],
     opts:["そうこう","きさい","きょか","じょうき"],
     hint:"The first version of the report is ready for review. This word means 'draft.'",
     sSrc:"The report {1} is ready. Please review it."},

    {type:"mc", q:"ないし is used for:",
     opts:["Expressing a range (2 to 3 weeks)","Asking questions","Showing contrast","Expressing emotions"],
     ans:"Expressing a range (2 to 3 weeks)",
     hint:"This formal conjunction means 'or' or 'to' when describing a r... of values."},

    {type:"match", pairs:[
      {trg:"おそれがある", src:"there is a risk"},
      {trg:"てきせつ", src:"appropriate"},
      {trg:"ぜんりゃく", src:"dispensing with formalities"},
      {trg:"そうこう", src:"draft"},
      {trg:"そんちょう", src:"respect"}
    ]},

    {type:"fb", s:"たがいのいけんを{1}しましょう。",
     a:["そんちょう"],
     opts:["そんちょう","きさい","きょか","はいしゅつ"],
     hint:"Let us respect each other's opinions. This verb means 'to esteem' or 'to respect.'",
     sSrc:"Let us {1} each other's opinions."}
  ]
};
export default BATCH7_L1;
