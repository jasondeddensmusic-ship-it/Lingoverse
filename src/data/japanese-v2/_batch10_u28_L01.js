// Batch 10 – Unit 28 (B2): メールと手紙(てがみ)
const BATCH10_L1 = {
  id:"jav2_u28l_b10_1", title:"メールと手紙(てがみ)", icon:"✉️", xp:15, board:true,
  steps:[
    {type:"intro", title:"メールと手紙(てがみ)",
     desc:"Email and letter writing conventions",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"件名(けんめい)", src:"subject line", pos:"noun", gender:null,
     note:"件(けん) matter + 名(めい) name.\nThe subject line of an email.",
     example:"A: 件名(けんめい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about subject line.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"件(けん) (matter) + 名(めい) (name). Japanese email subject lines are typically short and blunt, often starting with 【】brackets to mark priority: 【重要(じゅうよう)】, 【至急(しきゅう)】, 【確認(かくにん)依頼(いらい)】."},

    {type:"teach", trg:"本文(ほんぶん)", src:"main text", pos:"noun", gender:null,
     note:"本(ほん) main + 文(ぶん) text.\nThe body of an email or document.",
     example:"A: 本文(ほんぶん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about main text.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"本(ほん) (main) + 文(ぶん) (text). The 本文(ほんぶん) of a Japanese business email follows strict structure: 挨拶(あいさつ) greeting, 名乗(なの)り self-introduction, 要件(ようけん) main point, 締(し)めくくり closing."},

    {type:"teach", trg:"署名(しょめい)", src:"signature", pos:"noun", gender:null,
     note:"署(しょ) to write/sign + 名(めい) name.\nAn email signature or handwritten signature.",
     example:"A: 署名(しょめい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about signature.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"署(しょ) (to write/sign) + 名(めい) (name). A Japanese email 署名(しょめい) typically includes 会社名(かいしゃめい), 部署(ぶしょ), name, 電話(でんわ), email, and 住所(じゅうしょ). Some add a favorite quote for personal warmth."},

    {type:"teach", trg:"添付(てんぷ)", src:"attachment", pos:"noun", gender:null,
     note:"添(そ)える to attach + 付(つ)ける to affix.\nA file attached to an email.",
     example:"A: 添付(てんぷ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about attachment.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"添(そ)える (to attach) + 付(つ)ける (to affix). 添付(てんぷ)ファイル (attachment) is the standard term. Many Japanese companies disallow attaching files over 10 MB due to historical email server limits."},

    {type:"teach", trg:"前略(まえりゃく)", src:"omitting greeting", pos:"noun", gender:null,
     note:"前(まえ) preceding + 略(りゃく) abbreviation.\nA letter opener signaling skipped greeting.",
     example:"A: 前略(まえりゃく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about omitting greeting.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Literally 'omitting the preceding.' A signal in old-school letters that you are skipping the usual seasonal greeting. Pairs with closing 草々(そうそう) (briefly). Used for urgent notes."},

    {type:"teach", trg:"送信(そうしん)する", src:"to send", pos:"verb", gender:null,
     note:"送(おく)る to send + 信(しん) message.\nStandard verb for sending digital messages.",
     example:"A: 送信(そうしん)することについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about to send.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"送(おく)る (to send) + 信(しん) (message). The 送信(そうしん) button in Japanese email clients (Gmail, Outlook) is one of the most universally recognized Japanese IT terms."},

    {type:"teach", trg:"記述(きじゅつ)", src:"description", pos:"noun", gender:null,
     note:"記(しる)す to note + 述(の)べる to state.\nWritten description, often technical.",
     example:"A: 記述(きじゅつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about description.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"記(しる)す (to note) + 述(の)べる (to state). Refers to written description, especially factual or technical. Japanese programming documentation uses 記述(きじゅつ) constantly: 型(かた)記述(きじゅつ), 関数(かんすう)記述(きじゅつ)."},

    {type:"teach", trg:"訂正(ていせい)", src:"correction", pos:"noun", gender:null,
     note:"訂(ただ)す to correct + 正(ただ)す to rectify.\nFormal correction, often to public records.",
     example:"A: 訂正(ていせい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about correction.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"訂(ただ)す (to correct) + 正(ただ)す (to rectify). TV news runs 訂正(ていせい)お詫(わ)び (correction and apology) segments. The double-emphasis kanji pair signals the seriousness of correcting the record."},

    {type:"mc", q:"What does 件名(けんめい) mean?", opts:["subject line","main text","signature","attachment"], ans:"subject line",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(omitting greeting is important.)", a:"前略(まえりゃく)", opts:["前略(まえりゃく)","送信(そうしん)する","記述(きじゅつ)","件名(けんめい)"], sSrc:"omitting greeting is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"件名(けんめい)",src:"subject line"},{trg:"本文(ほんぶん)",src:"main text"},{trg:"署名(しょめい)",src:"signature"},{trg:"添付(てんぷ)",src:"attachment"},{trg:"記述(きじゅつ)",src:"description"}]},

    {type:"mc", q:"Which word means correction?", opts:["送信(そうしん)する","訂正(ていせい)","前略(まえりゃく)","本文(ほんぶん)"], ans:"訂正(ていせい)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
