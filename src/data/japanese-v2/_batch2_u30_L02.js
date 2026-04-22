// Unit 30 Batch 2 Lesson 2: 倫理(りんり)と責任(せきにん) (Ethics & Responsibility)
const BATCH2_L_2 = {
  id:"jav2_u30l_b2_2", title:"倫理(りんり)と責任(せきにん)", icon:"🧭", xp:15, board:true,
  steps:[
    {type:"intro", title:"倫理(りんり)と責任(せきにん)",
     desc:"Ethical reasoning requires vocabulary for duty, fairness, justice, and moral dilemmas. These terms are essential for discussing social issues, business ethics, and philosophical questions at the B2 level and appear frequently in JLPT N1 passages.",
     goals:["Use ethics and moral vocabulary","Discuss fairness and justice","Navigate moral dilemma terminology"]},

    {type:"teach", trg:"公正(こうせい)", src:"fairness / impartiality / justice", pos:"noun", gender:null,
     note:"Kanji: 公正. 公正(こうせい)な裁判(さいばん) = fair trial.\n公正性(こうせいせい) = fairness.",
     example:"A: 公正(こうせい)な社会(しゃかい)を実現(じつげん)するために何(なに)が必要(ひつよう)ですか？\nB: 機会(きかい)の平等(びょうどう)と法(ほう)の支配(しはい)が基本(きほん)です。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: What is needed to realize a fair society?\nB: Equal opportunity and the rule of law are fundamental.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"公正 uses 公 (public) and 正 (correct/just). While 公平(こうへい) (equality) focuses on equal treatment, 公正(こうせい) emphasizes proper process and impartial judgment. The 公正(こうせい)取引(とりひき)委員会(いいんかい) (Fair Trade Commission) regulates business practices. In philosophy, 公正(こうせい) maps to Rawls' concept of 'justice as fairness.'"},

    {type:"teach", trg:"平等(びょうどう)", src:"equality / equal", pos:"noun", gender:null,
     note:"Kanji: 平等. 平等権(びょうどうけん) = equal rights.\n男女(だんじょ)平等(びょうどう) = gender equality.",
     example:"A: 男女(だんじょ)平等(びょうどう)の実現(じつげん)はまだ途上(とじょう)にあります。\nB: 意識(いしき)改革(かいかく)と制度(せいど)改革(かいかく)の両方(りょうほう)が必要(ひつよう)です。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Achieving gender equality is still a work in progress.\nB: Both mindset reform and institutional reform are needed.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"平等 uses 平 (flat/level) and 等 (equal/class). Japan ranked 125th out of 146 countries in the 2023 Global Gender Gap Index, highlighting significant 男女(だんじょ)平等(びょうどう) challenges especially in politics and business leadership. The word 平等(びょうどう) itself was coined during the Meiji era to translate the Western concept of equality."},

    {type:"teach", trg:"正義(せいぎ)", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義. 正義感(せいぎかん) = sense of justice.\n社会(しゃかい)正義(せいぎ) = social justice.",
     example:"A: 正義(せいぎ)とは何(なに)かという問題(もんだい)は古(ふる)くて新(あたら)しい哲学的(てつがくてき)問題(もんだい)です。\nB: 時代(じだい)や文化(ぶんか)によって答(こた)えが変(か)わりますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The question of what justice is, is an old yet new philosophical problem.\nB: The answer changes with the era and culture.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"正義 uses 正 (correct) and 義 (righteousness). In Japanese popular culture, 正義(せいぎ)の味方(みかた) (ally of justice) is a phrase associated with superhero anime and tokusatsu shows. Philosophically, the concept of 正義(せいぎ) in Japan draws from both Confucian 義 (duty/righteousness) and Western natural law traditions."},

    {type:"mc", q:"男女(だんじょ)平等(びょうどう) means:", opts:["Gender equality","Economic equality","Educational equality","Legal equality"], ans:"Gender equality",
     hint:"男女(だんじょ) means 'male and female' combined with the word for e...."},

    {type:"teach", trg:"人権(じんけん)", src:"human rights", pos:"noun", gender:null,
     note:"Kanji: 人権. 基本的(きほんてき)人権(じんけん) = fundamental human rights.\n人権(じんけん)侵害(しんがい) = human rights violation.",
     example:"A: 基本的(きほんてき)人権(じんけん)はすべての人(ひと)に保障(ほしょう)されるべきです。\nB: 日本国(にほんこく)憲法(けんぽう)でも保障(ほしょう)されていますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Fundamental human rights should be guaranteed to all people.\nB: They are also guaranteed in Japan's Constitution.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"人権 uses 人 (person) and 権 (right/authority). Japan's Constitution guarantees extensive 人権(じんけん) in Articles 11-40. However, debates continue around issues like death penalty, immigration detention, and LGBTQ+ rights. 人権(じんけん)教育(きょういく) (human rights education) is part of the school curriculum, addressing discrimination against various groups."},

    {type:"teach", trg:"差別(さべつ)", src:"discrimination", pos:"noun", gender:null,
     note:"Kanji: 差別. 差別(さべつ)する = to discriminate.\n人種(じんしゅ)差別(さべつ) = racial discrimination.",
     example:"A: あらゆる差別(さべつ)をなくす努力(どりょく)が必要(ひつよう)です。\nB: まず自分(じぶん)の偏見(へんけん)に気(き)づくことから始(はじ)まります。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Efforts to eliminate all forms of discrimination are needed.\nB: It starts with becoming aware of your own biases.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"差別 uses 差 (difference) and 別 (separate/distinct). Japan faces several forms of 差別(さべつ): against the Burakumin (historical outcaste group), against Ainu and Okinawan peoples, against foreign residents, and gender-based discrimination. The 部落(ぶらく)差別(さべつ) issue, rooted in feudal-era social hierarchy, remains sensitive despite decades of legislation."},

    {type:"teach", trg:"自由意志(じゆういし)", src:"free will", pos:"noun", gender:null,
     note:"Kanji: 自由意志. A central concept in philosophy and ethics.\n自由意志(じゆういし)の問題(もんだい) = the problem of free will.",
     example:"A: 人間(にんげん)に自由意志(じゆういし)はあるのでしょうか？\nB: 脳科学(のうかがく)の進歩(しんぽ)がその議論(ぎろん)に新(あたら)しい視点(してん)を加(くわ)えています。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Do humans have free will?\nB: Advances in brain science are adding new perspectives to that debate.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"自由意志 combines 自由(じゆう) (freedom) and 意志(いし) (will/intention). This philosophical concept spans Western and Eastern traditions. In Japanese Buddhist philosophy, the question takes a different form: if the self is an illusion (無我(むが), anatta), can 自由意志(じゆういし) exist? Modern Japanese philosophers engage with both traditions."},

    {type:"fb", s:"あらゆる差別(さべつ)をなくす{1}が必要(ひつよう)です。\n(Efforts to eliminate all forms of discrimination are needed.)", a:"努力(どりょく)", opts:["努力(どりょく)","権利(けんり)","正義(せいぎ)","平等(びょうどう)"], sSrc:"Efforts to eliminate all forms of discrimination are needed.",
     hint:"The noun meaning 'effort' or 'endeavor,' the sustained work needed to achieve change."},

    {type:"teach", trg:"規範(きはん)", src:"norm / standard / code of conduct", pos:"noun", gender:null,
     note:"Kanji: 規範. 社会(しゃかい)規範(きはん) = social norms.\n道徳的(どうとくてき)規範(きはん) = moral standards.",
     example:"A: 社会(しゃかい)規範(きはん)は時代(じだい)とともに変化(へんか)します。\nB: 何(なに)が正(しょう)で何(なに)が非(ひ)かも変(か)わりますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Social norms change with the times.\nB: What is right and what is wrong also change.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"規範 uses 規 (rule/compass) and 範 (model/example). 規範(きはん) represents the standards a society considers proper behavior. Japanese 社会(しゃかい)規範(きはん) are often unwritten but strongly felt: removing shoes indoors, not eating while walking, and quiet behavior on trains. These informal 規範(きはん) are as powerful as written rules."},

    {type:"teach", trg:"良心(りょうしん)", src:"conscience / moral sense", pos:"noun", gender:null,
     note:"Kanji: 良心. 良心(りょうしん)に従(したが)う = to follow one's conscience.\n良心(りょうしん)の呵責(かしゃく) = pangs of conscience.",
     example:"A: 良心(りょうしん)に従(したが)って行動(こうどう)することが大事(だいじ)です。\nB: しかし、良心(りょうしん)と社会(しゃかい)規範(きはん)が衝突(しょうとつ)することもあります。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: It is important to act according to your conscience.\nB: However, conscience and social norms can sometimes conflict.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"良心 uses 良 (good) and 心 (heart/mind). The 'good heart' concept parallels Mencius's teaching that humans are inherently good. In Japanese moral education, 良心(りょうしん) is taught as an inner compass. The expression 良心(りょうしん)の呵責(かしゃく) (pangs of conscience) describes the discomfort of acting against one's moral sense."},

    {type:"teach", trg:"ジレンマ", src:"dilemma", pos:"noun", gender:null,
     note:"Loanword from English/Greek. 道徳的(どうとくてき)ジレンマ = moral dilemma.\nA situation requiring choice between equally difficult options.",
     example:"A: 環境(かんきょう)保護(ほご)と経済(けいざい)成長(せいちょう)の間(あいだ)にはジレンマがあります。\nB: 両立(りょうりつ)させる方法(ほうほう)を探(さが)すべきですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: There is a dilemma between environmental protection and economic growth.\nB: We should search for ways to achieve both.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"ジレンマ entered Japanese from the Greek 'dilemma' via English. Japanese philosophy and ethics courses use the famous 'trolley problem' (トロッコ問題(もんだい)) to explore moral dilemmas. The Japanese approach to ジレンマ often seeks a 'third way' (第三(だいさん)の道(みち)) that transcends the either/or choice, reflecting the cultural preference for harmony."},

    {type:"mc", q:"良心(りょうしん) means:", opts:["Legal knowledge","Conscience / moral sense","Intelligence","Social status"], ans:"Conscience / moral sense",
     hint:"The compound of 'good' and 'heart,' describing your inner m... compass."},

    {type:"fb", s:"社会(しゃかい){1}は時代(じだい)とともに変化(へんか)します。\n(Social norms change with the times.)", a:"規範(きはん)", opts:["規範(きはん)","正義(せいぎ)","人権(じんけん)","平等(びょうどう)"], sSrc:"Social norms change with the times.",
     hint:"The noun meaning 'norm' or 'standard,' the unwritten rules that guide behavior."},

    {type:"match", pairs:[{trg:"公正(こうせい)",src:"fairness"},{trg:"平等(びょうどう)",src:"equality"},{trg:"正義(せいぎ)",src:"justice"},{trg:"人権(じんけん)",src:"human rights"}]},

    {type:"fb", s:"環境(かんきょう)保護(ほご)と経済(けいざい)成長(せいちょう)の間(あいだ)には{1}があります。\n(There is a dilemma between environmental protection and economic growth.)", a:"ジレンマ", opts:["ジレンマ","規範(きはん)","正義(せいぎ)","問題(もんだい)"], sSrc:"There is a dilemma between environmental protection and economic growth.",
     hint:"The loanword for a situation requiring a difficult choice between two options."},

    {type:"match", pairs:[{trg:"差別(さべつ)",src:"discrimination"},{trg:"自由意志(じゆういし)",src:"free will"},{trg:"規範(きはん)",src:"norm"},{trg:"良心(りょうしん)",src:"conscience"}]},

    {type:"mc", q:"The Japanese approach to moral dilemmas often seeks:", opts:["Majority rule decision","The harshest punishment","A third way that transcends either/or choices","Complete avoidance of the issue"], ans:"A third way that transcends either/or choices",
     hint:"Japanese culture often prefers harmony and synthesis over binary c...."},
  ]
};
export default BATCH2_L_2;
