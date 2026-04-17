// Batch 8 – Unit 28 (B2.2 Written vs Spoken): Formal Writing Patterns
const BATCH8_L1 = {
  id:"jav2_u28l_b8_1", title:"書(か)き言葉(ことば)のパターン", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"書(か)き言葉(ことば)のパターン",
     desc:"Master formal sentence-ending patterns and written-style expressions used in essays, reports, and official documents. These distinguish polished writing from casual speech.",
     goals:["Use formal sentence endings in writing","Recognize written vs spoken patterns","Apply academic and official writing conventions"]},

    {type:"teach", trg:"である", src:"is / are (written formal style)", pos:"verb", gender:null,
     note:"Formal written equivalent of だ/です.\n論文(ろんぶん)ではである体(たい)を使(つか)う = essays use である style.",
     example:"A: 日本(にほん)は島国(しまぐに)である。\nB: これがである体(たい)ですか。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japan is an island nation (written style).\nB: Is this the である style?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"である is the backbone of Japanese academic writing. While です/ます is polite speech, である is neutral-formal writing. Academic papers, newspaper editorials, and legal documents use である consistently. Mixing である and です/ます in one text is a common student error."},

    {type:"teach", trg:"において", src:"in / at / regarding (formal location/context)", pos:"part", gender:null,
     note:"Formal version of で (at/in). Very common in written Japanese.\n会議(かいぎ)において = at the meeting.",
     example:"A: この分野(ぶんや)において日本(にほん)は世界(せかい)をリードしている。\nB: 技術力(ぎじゅつりょく)が高(たか)いですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: In this field, Japan leads the world.\nB: The technological capability is high.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"において replaces the particle で in formal writing. It elevates the register instantly. 日本(にほん)において (in Japan), 現在(げんざい)において (at present), この点(てん)において (regarding this point). Overusing it in speech sounds comically stiff, like speaking in essay style."},

    {type:"teach", trg:"に関(かん)して", src:"regarding / concerning / about (formal)", pos:"part", gender:null,
     note:"Formal version of について.\nこの問題(もんだい)に関(かん)して = regarding this problem.",
     example:"A: 環境(かんきょう)問題(もんだい)に関(かん)して議論(ぎろん)します。\nB: 参加者(さんかしゃ)は誰(だれ)ですか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: We will discuss regarding environmental issues.\nB: Who are the participants?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"に関(かん)して and について are near-synonyms, but に関(かん)して is more formal and often used in legal, academic, and business documents. に関(かん)する調査(ちょうさ) (survey regarding) is standard in research."},

    {type:"teach", trg:"に伴(ともな)う", src:"accompanying / along with / as a result of", pos:"verb", gender:null,
     note:"Formal. 経済(けいざい)成長(せいちょう)に伴(ともな)う = accompanying economic growth.\nChanges that come alongside something.",
     example:"A: 高齢化(こうれいか)に伴(ともな)い医療費(いりょうひ)が増加(ぞうか)している。\nB: 負担(ふたん)が大(おお)きいですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Medical costs are increasing along with the aging population.\nB: The burden is heavy.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"に伴(ともな)う is essential in formal Japanese writing about cause-and-effect relationships. It describes changes that naturally accompany other changes: 技術(ぎじゅつ)の進歩(しんぽ)に伴(ともな)う (accompanying technological progress). Unlike ために (because of), 伴(ともな)う implies a parallel, connected change rather than direct causation."},

    {type:"teach", trg:"にすぎない", src:"merely / nothing more than / only", pos:"verb", gender:null,
     note:"Minimizes something. 一例(いちれい)にすぎない = merely one example.\nFrom すぎる (to exceed) + ない.",
     example:"A: これは仮説(かせつ)にすぎない。証拠(しょうこ)が必要(ひつよう)だ。\nB: 実験(じっけん)で確(たし)かめましょう。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: This is merely a hypothesis. Evidence is needed.\nB: Let us verify with experiments.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"にすぎない downplays significance: これは始(はじ)まりにすぎない (this is merely the beginning), 一部(いちぶ)にすぎない (merely a part). It is a powerful rhetorical tool in essays for arguing that something is less important than assumed. Academic writing uses it frequently."},

    {type:"mc", q:"What is the formal written equivalent of です/だ?", opts:["である","でございます","でした","であります"], ans:"である",
     hint:"This style is used in academic papers, editorials, and legal documents."},

    {type:"teach", trg:"に基(もと)づく", src:"based on / grounded in / in accordance with", pos:"verb", gender:null,
     note:"Formal. 法律(ほうりつ)に基(もと)づく = based on law.\nKanji: に基づく.",
     example:"A: 憲法(けんぽう)に基(もと)づいて判断(はんだん)する。\nB: 法的(ほうてき)根拠(こんきょ)が重要(じゅうよう)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The judgment is based on the constitution.\nB: Legal basis is important.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"に基(もと)づく is indispensable in legal and administrative Japanese. 事実(じじつ)に基(もと)づく (based on facts), データに基(もと)づく (data-based), and 経験(けいけん)に基(もと)づく (experience-based) all use this pattern. The nominalizing form に基(もと)づいた also appears: 事実(じじつ)に基(もと)づいた話(はなし) (a story based on facts)."},

    {type:"teach", trg:"を通(つう)じて", src:"through / throughout / via (formal)", pos:"part", gender:null,
     note:"Formal version of を通(とお)して.\n年間(ねんかん)を通(つう)じて = throughout the year.",
     example:"A: ボランティア活動(かつどう)を通(つう)じて多(おお)くのことを学(まな)んだ。\nB: 経験(けいけん)は宝(たから)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I learned many things through volunteer activities.\nB: Experience is treasure.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"を通(つう)じて is the formal register of を通(とお)して (through). Both mean 'by means of' or 'throughout,' but 通(つう)じて appears in written essays and speeches. 歴史(れきし)を通(つう)じて (throughout history) and 対話(たいわ)を通(つう)じて (through dialogue) are common in academic and diplomatic writing."},

    {type:"teach", trg:"に際(さい)して", src:"on the occasion of / when / in doing", pos:"part", gender:null,
     note:"Formal. 卒業(そつぎょう)に際(さい)して = on the occasion of graduation.\nKanji: に際して.",
     example:"A: 開業(かいぎょう)に際(さい)してご挨拶(あいさつ)申(もう)し上(あ)げます。\nB: おめでとうございます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: On the occasion of the opening, I offer greetings.\nB: Congratulations.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"に際(さい)して marks formal occasions and important moments. It appears in speeches: 卒業(そつぎょう)に際(さい)して (at graduation), 就任(しゅうにん)に際(さい)して (upon taking office), 忘年会(ぼうねんかい)に際(さい)して (at the year-end party). It is too formal for everyday use but essential for official and ceremonial Japanese."},

    {type:"teach", trg:"べき", src:"should / ought to", pos:"part", gender:null,
     note:"Formal obligation. するべきだ = should do.\nLess personal than したほうがいい.",
     example:"A: わたしたちは環境(かんきょう)を守(まも)るべきである。\nB: 異議(いぎ)なしです。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We should protect the environment.\nB: No objection.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"べき is the go-to formal recommendation. するべき vs. すべき are both acceptable (すべき is slightly more formal). べきではない (should not) is the negative. In essays, べきだ concludes arguments with conviction. するべきかどうか (whether one should or not) frames dilemmas."},

    {type:"teach", trg:"ざるをえない", src:"have no choice but to / cannot help but", pos:"verb", gender:null,
     note:"Formal reluctant obligation. 認(みと)めざるをえない = have to acknowledge.\nStronger than しかたがない.",
     example:"A: コスト削減(さくげん)のためにリストラせざるをえない。\nB: 苦(くる)しい決断(けつだん)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: We have no choice but to restructure to cut costs.\nB: It is a painful decision.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"ざるをえない expresses forced inevitability with reluctance. It uses classical negative ず (ない) plus ある (to exist) in negative: literally 'cannot exist without doing.' It appears in business decisions, legal judgments, and political statements. The tone is serious and resigned."},

    {type:"teach", trg:"にほかならない", src:"nothing other than / precisely because", pos:"verb", gender:null,
     note:"Emphatic identification. 努力(どりょく)の結果(けっか)にほかならない = nothing other than the result of effort.\nStrong assertion.",
     example:"A: この成功(せいこう)はチームワークの賜物(たまもの)にほかならない。\nB: 皆(みな)さんのおかげです。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: This success is nothing other than the fruit of teamwork.\nB: It is thanks to everyone.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"にほかならない makes powerful assertions in formal writing. AはBにほかならない means 'A is precisely B.' It strips away ambiguity. In editorials: 教育(きょういく)の問題(もんだい)にほかならない (it is nothing other than an education problem). It appears in JLPT N2 reading passages frequently."},

    {type:"fb", s:"環境(かんきょう)問題(もんだい){1}議論(ぎろん)します。\n(We will discuss regarding environmental issues.)", a:"に関(かん)して", opts:["に関(かん)して","において","に基(もと)づいて","を通(つう)じて"], sSrc:"We will discuss regarding environmental issues.",
     hint:"This formal expression means 'regarding' or 'concerning' a topic."},

    {type:"teach", trg:"一方(いっぽう)で", src:"on one hand / while (contrasting)", pos:"conj", gender:null,
     note:"Formal contrast marker. Aである一方(いっぽう)で、Bでもある = while A, also B.\nBalanced argument connector.",
     example:"A: 便利(べんり)である一方(いっぽう)で、リスクもある。\nB: バランスの良(よ)い判断(はんだん)が必要(ひつよう)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: While it is convenient, there are also risks.\nB: A balanced judgment is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"一方(いっぽう)で is a workhorse in academic and journalistic writing. It introduces the contrasting side of an argument for balanced presentation. News articles use it to show objectivity. In debates, failing to acknowledge the 一方(いっぽう)で (the other side) makes arguments seem one-sided."},

    {type:"teach", trg:"を踏(ふ)まえて", src:"taking into account / based on / considering", pos:"verb", gender:null,
     note:"Formal. 結果(けっか)を踏(ふ)まえて = based on the results.\n踏(ふ)まえる = to step on / to take into account.",
     example:"A: 調査(ちょうさ)結果(けっか)を踏(ふ)まえて計画(けいかく)を見直(みなお)します。\nB: より良(よ)い計画(けいかく)になるでしょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: We will review the plan based on the survey results.\nB: It will become a better plan.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"を踏(ふ)まえて literally means 'stepping on' information before proceeding. It implies careful consideration: 事情(じじょう)を踏(ふ)まえたうえで (after considering the circumstances). Business plans include 前年度(まえねんど)の結果(けっか)を踏(ふ)まえて (based on previous year results). It shows thorough, evidence-based thinking."},

    {type:"match", pairs:[{trg:"において",src:"in/at (formal)"},{trg:"に関(かん)して",src:"regarding (formal)"},{trg:"に基(もと)づく",src:"based on"},{trg:"を通(つう)じて",src:"through (formal)"},{trg:"べき",src:"should/ought to"}],
     hint:"Match each formal written pattern with its English meaning."},

    {type:"mc", q:"What does にすぎない express?", opts:["Merely / nothing more than (minimizing)","More than / exceeding","Absolutely / certainly","Possibly / perhaps"], ans:"Merely / nothing more than (minimizing)",
     hint:"This expression downplays the significance of something by saying it does not exceed a certain point."},

    {type:"fb", s:"わたしたちは環境(かんきょう)を守(まも)る{1}である。\n(We should protect the environment.)", a:"べき", opts:["べき","はず","そう","らしい"], sSrc:"We should protect the environment.",
     hint:"This formal particle expresses strong obligation or recommendation."},

    {type:"mc", q:"What does ざるをえない express?", opts:["Having no choice but to (reluctant obligation)","Wanting to do something","Being able to do something","Refusing to do something"], ans:"Having no choice but to (reluctant obligation)",
     hint:"This pattern combines classical negative ず with forced inevitability."}
  ]
};
export default BATCH8_L1;
