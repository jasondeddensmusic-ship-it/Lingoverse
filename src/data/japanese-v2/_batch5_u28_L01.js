// Unit 28 Batch 5 Lesson 1: 文語(ぶんご) (Classical & Literary Expressions)
const BATCH5_L_1 = {
  id:"jav2_u28l_b5_1", title:"文語(ぶんご)", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"文語(ぶんご)",
     desc:"Classical Japanese expressions survive in modern formal writing. Learn patterns like ものである (it is the nature of), にほかならない (nothing other than), and いかなる (what kind of / any). These literary forms elevate your writing and reading comprehension to JLPT N1 level.",
     goals:["Use classical expressions in formal writing","Understand ものである, にほかならない, いかなる","Distinguish literary register from colloquial"]},

    {type:"teach", trg:"〜ものである", src:"it is the nature of ~ / it is natural that ~", pos:"part", gender:null,
     note:"Plain form + ものである. States a general truth or natural tendency.\nWritten/formal. 人間(にんげん)は過(あやま)ちを犯(おか)すものである = humans naturally make mistakes.",
     example:"A: 時間(じかん)は誰(だれ)にも平等(びょうどう)に与(あた)えられるものである。\nB: そのとおりですね。使(つか)い方(かた)が大事(だいじ)です。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Time is something given equally to everyone.\nB: That is true. How you use it is what matters.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"ものである states unchangeable truths about the world. もの (thing) + である (is) creates a philosophical observation tone. It appears in essays, speeches, and proverbs. A teacher might say: 学生(がくせい)は勉強(べんきょう)するものだ (students are meant to study). It is never used for specific facts, only general truths."},

    {type:"teach", trg:"〜にほかならない", src:"is nothing other than ~ / is precisely ~", pos:"part", gender:null,
     note:"Noun/clause + にほかならない. Strong emphasis that X is exactly Y.\n成功(せいこう)の秘訣(ひけつ)は努力(どりょく)にほかならない = the secret of success is nothing other than effort.",
     example:"A: この問題(もんだい)の原因(げんいん)はコミュニケーション不足(ぶそく)にほかならない。\nB: やはり対話(たいわ)が大事(だいじ)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The cause of this problem is nothing other than lack of communication.\nB: Dialogue is indeed important.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"にほかならない literally means 'it is not other than.' It emphatically identifies something as the sole cause or identity. Academic writing uses it for strong conclusions: この結果(けっか)は努力(どりょく)の成果(せいか)にほかならない (this result is nothing other than the fruit of effort). The pattern is too formal for conversation but essential for JLPT N1 and academic Japanese."},

    {type:"teach", trg:"いかなる", src:"what kind of / any / whatever", pos:"adj", gender:null,
     note:"Classical form of どんな. Very formal/literary.\nいかなる理由(りゆう)があっても = whatever reason there may be.",
     example:"A: いかなる困難(こんなん)にも負(ま)けない強靭(きょうじん)な精神(せいしん)が必要(ひつよう)です。\nB: 強(つよ)い意志(いし)があれば乗(の)り越(こ)えられますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: A strong spirit that yields to no difficulty is needed.\nB: With strong will, one can overcome.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"いかなる is the literary equivalent of どんな (what kind of). It appears in legal documents, formal speeches, and literature. いかなる場合(ばあい)も (in any case), いかなる理由(りゆう)であれ (whatever the reason), いかなる人(ひと)も (any person). Its gravity makes it inappropriate for casual speech but powerful in rhetoric."},

    {type:"teach", trg:"〜にすぎない", src:"is merely ~ / is nothing more than ~", pos:"part", gender:null,
     note:"Noun/clause + にすぎない. Minimizes or dismisses importance.\nこれは一例(いちれい)にすぎない = this is merely one example.",
     example:"A: 私(わたし)の意見(いけん)は一人(ひとり)の市民(しみん)としての意見(いけん)にすぎません。\nB: しかし、一市民(いちしみん)の声(こえ)も大切(たいせつ)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: My opinion is merely that of one citizen.\nB: However, the voice of one citizen is also important.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"にすぎない uses 過(す)ぎる (to exceed/pass), negated: 'does not exceed X.' It deliberately minimizes something. Politicians use it to downplay criticism: 解釈(かいしゃく)の違(ちが)いにすぎない (it is merely a difference of interpretation). Writers use it for modesty: ささやかな試(こころ)みにすぎない (it is merely a humble attempt). The pattern is common in JLPT N2/N1."},

    {type:"mc", q:"にほかならない emphasizes:", opts:["That something is precisely and only X","That something might be X","That something is not X","That something is unrelated to X"], ans:"That something is precisely and only X",
     hint:"This pattern strongly identifies s... as the one and only cause or identity."},

    {type:"teach", trg:"〜からこそ", src:"precisely because ~ / it is because ~ that", pos:"part", gender:null,
     note:"Reason + からこそ. Emphasizes the reason as THE key factor.\n苦(くる)しいからこそ成長(せいちょう)する = precisely because it is hard, you grow.",
     example:"A: 日本語(にほんご)が難(むずか)しいからこそ、やりがいがあるのです。\nB: 確(たし)かに、達成感(たっせいかん)が大(おお)きいですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Precisely because Japanese is difficult, it is rewarding.\nB: Indeed, the sense of achievement is great.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"からこそ adds こそ (emphasis particle) to から (because). It transforms a simple cause into THE defining reason. Motivational speakers love it: 失敗(しっぱい)したからこそ (precisely because you failed, you can grow). It reframes negatives as positives. The pattern appears in JLPT N2 and is common in essays arguing why challenges are valuable."},

    {type:"teach", trg:"〜ものの", src:"although / even though (literary)", pos:"part", gender:null,
     note:"Plain form + ものの. Formal concessive. More literary than のに or けど.\n勉強(べんきょう)したものの、試験(しけん)は難(むずか)しかった = although I studied, the exam was hard.",
     example:"A: 計画(けいかく)は立(た)てたものの、実行(じっこう)に移(うつ)すのが難(むずか)しい。\nB: 理想(りそう)と現実(げんじつ)のギャップですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Although I made a plan, putting it into action is difficult.\nB: It is the gap between ideal and reality.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"ものの is a literary concessive connector. While のに (although, emotional) and けど (but, casual) work in speech, ものの belongs to formal writing. It acknowledges one fact while contrasting it with another, without the emotional disappointment of のに. Academic papers and editorials prefer ものの for balanced, objective contrast."},

    {type:"teach", trg:"わずか", src:"merely / only / a tiny amount", pos:"adv", gender:null,
     note:"Kanji: 僅(わず)か. 僅(わず)かな時間(じかん) = a tiny amount of time.\n僅(わず)か5分(ふん)で = in just 5 minutes.",
     example:"A: 僅(わず)か三(さん)ヶ月(かげつ)で日本語(にほんご)が話(はな)せるようになりました。\nB: 素晴(すば)らしい進歩(しんぽ)ですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: In merely three months, I came to be able to speak Japanese.\nB: That is wonderful progress.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"僅(わず)か uses a kanji meaning 'slight/barely.' わずか emphasizes how small an amount is, usually with admiration or surprise. 僅(わず)かな寄付(きふ) (even a small donation) encourages giving. 僅(わず)かな時間(じかん)で (in just a short time) emphasizes impressive speed. The formal register makes it common in news and academic writing."},

    {type:"tip", title:"Written vs. Spoken Register Pairs",
     text:"Written (formal)     Spoken (casual)\nである              だ / です\nにおいて            で\nおよび              と / そして\nいかなる            どんな\nものの              けど / のに\nにすぎない          だけ / しか...ない\nわずか              ちょっと / すこし\nにほかならない      まさに...だ\n\nMixing registers is poor style. Formal writing uses formal throughout.\nCasual speech uses casual throughout.\nJLPT tests your ability to recognize and use appropriate register."},

    {type:"teach", trg:"強靭(きょうじん)", src:"strong / tough / robust / tenacious", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 強靭(きょうじん). 強靭(きょうじん)な精神(せいしん) = tenacious spirit.\n強靭(きょうじん)な肉体(にくたい) = strong body.",
     example:"A: 強靭(きょうじん)な精神力(せいしんりょく)で困難(こんなん)を乗(の)り越(こ)えました。\nB: 精神的(せいしんてき)な強(つよ)さは大切(たいせつ)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: With tenacious mental strength, I overcame the difficulty.\nB: Mental toughness is important.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"強靭(きょうじん) uses 強(きょう) (strong) and 靭(じん) (tough/tenacious). It describes not just strength but resilience: the ability to bend without breaking. Japan's disaster preparedness culture values 強靭(きょうじん)なインフラ (resilient infrastructure) and 強靭(きょうじん)な社会(しゃかい) (resilient society). After the 2011 earthquake, 強靭化(きょうじんか) (strengthening/making resilient) became a key policy term."},

    {type:"teach", trg:"達成感(たっせいかん)", src:"sense of achievement / feeling of accomplishment", pos:"noun", gender:null,
     note:"Kanji: 達成感(たっせいかん). 達成(たっせい) (achievement) + 感(かん) (feeling/sense).\n達成感(たっせいかん)を味(あじ)わう = to savor the sense of achievement.",
     example:"A: 難(むずか)しい目標(もくひょう)を達成(たっせい)したときの達成感(たっせいかん)は格別(かくべつ)です。\nB: 苦労(くろう)した分(ぶん)だけ喜(よろこ)びも大(おお)きいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The sense of achievement when reaching a difficult goal is special.\nB: The harder the struggle, the greater the joy.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"達成感(たっせいかん) is highly valued in Japanese education and work culture. The idea that 達成感(たっせいかん) comes from overcoming difficulty (苦労(くろう)した分(ぶん)だけ) is central to the Japanese philosophy of effort (努力(どりょく)). Teachers design tasks to give students 達成感(たっせいかん). Companies celebrate team 達成(たっせい) (achievement). The 感(かん) (feeling) suffix emphasizes the emotional reward of accomplishment."},

    {type:"fb", s:"成功(せいこう)の秘訣(ひけつ)は努力(どりょく)に{1}ない。\n(The secret of success is nothing other than effort.)", a:"ほかなら", opts:["ほかなら","すぎ","かぎら","ちがい"], sSrc:"The secret of success is nothing other than effort.",
     hint:"The pattern meaning 'is nothing other than,' emphasizing that X is precisely and only Y."},

    {type:"mc", q:"にすぎない minimizes by saying:", opts:["Something is merely X and nothing more","Something is very important","Something is the best option","Something is impossible"], ans:"Something is merely X and nothing more",
     hint:"This pattern uses 過(す)ぎない (does not exceed) to downplay s...'s significance."},

    {type:"match", pairs:[{trg:"ものである",src:"it is the nature of"},{trg:"にほかならない",src:"nothing other than"},{trg:"にすぎない",src:"merely / nothing more than"},{trg:"からこそ",src:"precisely because"}]},

    {type:"fb", s:"日本語(にほんご)が難(むずか)しい{1}、やりがいがあるのです。\n(Precisely because Japanese is difficult, it is rewarding.)", a:"からこそ", opts:["からこそ","から","ので","けど"], sSrc:"Precisely because Japanese is difficult, it is rewarding.",
     hint:"The emphasized causal pattern meaning 'precisely because,' using こそ for emphasis."},

    {type:"mc", q:"いかなる is the literary equivalent of:", opts:["どんな (what kind of / any)","いつ (when)","どこ (where)","なぜ (why)"], ans:"どんな (what kind of / any)",
     hint:"This classical adjective replaces the everyday question word for 'what k... of' in formal writing."}
  ]
};
export default BATCH5_L_1;
