// Unit 28 Batch 5 Lesson 1: ぶんご (Classical & Literary Expressions)
const BATCH5_L_1 = {
  id:"jav2_u28l_b5_1", title:"ぶんご", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんご",
     desc:"Classical Japanese expressions survive in modern formal writing. Learn patterns like ものである (it is the nature of), にほかならない (nothing other than), and いかなる (what kind of / any). These literary forms elevate your writing and reading comprehension to JLPT N1 level.",
     goals:["Use classical expressions in formal writing","Understand ものである, にほかならない, いかなる","Distinguish literary register from colloquial"]},

    {type:"teach", trg:"〜ものである", src:"it is the nature of ~ / it is natural that ~", pos:"part", gender:null,
     note:"Plain form + ものである. States a general truth or natural tendency.\nWritten/formal. にんげんはあやまるものである = humans naturally make mistakes.",
     example:"A: じかんはだれにもびょうどうにあたえられるものである。\nB: そのとおりですね。つかいかたがだいじです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Time is something given equally to everyone.\nB: That is true. How you use it is what matters.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"ものである states unchangeable truths about the world. もの (thing) + である (is) creates a philosophical observation tone. It appears in essays, speeches, and proverbs. A teacher might say: がくせいはべんきょうするものだ (students are meant to study). It is never used for specific facts, only general truths."},

    {type:"teach", trg:"〜にほかならない", src:"is nothing other than ~ / is precisely ~", pos:"part", gender:null,
     note:"Noun/clause + にほかならない. Strong emphasis that X is exactly Y.\nせいこうのひけつはどりょくにほかならない = the secret of success is nothing other than effort.",
     example:"A: このもんだいのげんいんはコミュニケーションぶそくにほかならない。\nB: やはりたいわがだいじですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The cause of this problem is nothing other than lack of communication.\nB: Dialogue is indeed important.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"にほかならない literally means 'it is not other than.' It emphatically identifies something as the sole cause or identity. Academic writing uses it for strong conclusions: この結果は努力の成果にほかならない (this result is nothing other than the fruit of effort). The pattern is too formal for conversation but essential for JLPT N1 and academic Japanese."},

    {type:"teach", trg:"いかなる", src:"what kind of / any / whatever", pos:"adj", gender:null,
     note:"Classical form of どんな. Very formal/literary.\nいかなるりゆうがあっても = whatever reason there may be.",
     example:"A: いかなるこんなんにもまけないきょうじんなせいしんがひつようです。\nB: つよいいしがあればのりこえられますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: A strong spirit that yields to no difficulty is needed.\nB: With strong will, one can overcome.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"いかなる is the literary equivalent of どんな (what kind of). It appears in legal documents, formal speeches, and literature. いかなるばあいも (in any case), いかなるりゆうであれ (whatever the reason), いかなるひとも (any person). Its gravity makes it inappropriate for casual speech but powerful in rhetoric."},

    {type:"teach", trg:"〜にすぎない", src:"is merely ~ / is nothing more than ~", pos:"part", gender:null,
     note:"Noun/clause + にすぎない. Minimizes or dismisses importance.\nこれはいちれいにすぎない = this is merely one example.",
     example:"A: わたしのいけんはひとりのしみんとしてのいけんにすぎません。\nB: しかし、いちしみんのこえもたいせつです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: My opinion is merely that of one citizen.\nB: However, the voice of one citizen is also important.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"にすぎない uses 過ぎる (to exceed/pass), negated: 'does not exceed X.' It deliberately minimizes something. Politicians use it to downplay criticism: かいしゃくのちがいにすぎない (it is merely a difference of interpretation). Writers use it for modesty: ささやかなこころみにすぎない (it is merely a humble attempt). The pattern is common in JLPT N2/N1."},

    {type:"mc", q:"にほかならない emphasizes:", opts:["That something is precisely and only X","That something might be X","That something is not X","That something is unrelated to X"], ans:"That something is precisely and only X",
     hint:"This pattern strongly identifies s... as the one and only cause or identity."},

    {type:"teach", trg:"〜からこそ", src:"precisely because ~ / it is because ~ that", pos:"part", gender:null,
     note:"Reason + からこそ. Emphasizes the reason as THE key factor.\nくるしいからこそせいちょうする = precisely because it is hard, you grow.",
     example:"A: にほんごがむずかしいからこそ、やりがいがあるのです。\nB: たしかに、たっせいかんがおおきいですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Precisely because Japanese is difficult, it is rewarding.\nB: Indeed, the sense of achievement is great.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"からこそ adds こそ (emphasis particle) to から (because). It transforms a simple cause into THE defining reason. Motivational speakers love it: しっぱいしたからこそ (precisely because you failed, you can grow). It reframes negatives as positives. The pattern appears in JLPT N2 and is common in essays arguing why challenges are valuable."},

    {type:"teach", trg:"〜ものの", src:"although / even though (literary)", pos:"part", gender:null,
     note:"Plain form + ものの. Formal concessive. More literary than のに or けど.\nべんきょうしたものの、しけんはむずかしかった = although I studied, the exam was hard.",
     example:"A: けいかくはたてたものの、じっこうにうつすのがむずかしい。\nB: りそうとげんじつのギャップですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Although I made a plan, putting it into action is difficult.\nB: It is the gap between ideal and reality.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"ものの is a literary concessive connector. While のに (although, emotional) and けど (but, casual) work in speech, ものの belongs to formal writing. It acknowledges one fact while contrasting it with another, without the emotional disappointment of のに. Academic papers and editorials prefer ものの for balanced, objective contrast."},

    {type:"teach", trg:"わずか", src:"merely / only / a tiny amount", pos:"adv", gender:null,
     note:"Kanji: 僅か. わずかなじかん = a tiny amount of time.\nわずか5ぷんで = in just 5 minutes.",
     example:"A: わずかさんかげつでにほんごがはなせるようになりました。\nB: すばらしいしんぽですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: In merely three months, I came to be able to speak Japanese.\nB: That is wonderful progress.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"僅か uses a kanji meaning 'slight/barely.' わずか emphasizes how small an amount is, usually with admiration or surprise. わずかなきふ (even a small donation) encourages giving. わずかなじかんで (in just a short time) emphasizes impressive speed. The formal register makes it common in news and academic writing."},

    {type:"tip", title:"Written vs. Spoken Register Pairs",
     text:"Written (formal)     Spoken (casual)\nである              だ / です\nにおいて            で\nおよび              と / そして\nいかなる            どんな\nものの              けど / のに\nにすぎない          だけ / しか...ない\nわずか              ちょっと / すこし\nにほかならない      まさに...だ\n\nMixing registers is poor style. Formal writing uses formal throughout.\nCasual speech uses casual throughout.\nJLPT tests your ability to recognize and use appropriate register."},

    {type:"teach", trg:"きょうじん", src:"strong / tough / robust / tenacious", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 強靭. きょうじんなせいしん = tenacious spirit.\nきょうじんなにくたい = strong body.",
     example:"A: きょうじんなせいしんりょくでこんなんをのりこえました。\nB: せいしんてきなつよさはたいせつですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: With tenacious mental strength, I overcame the difficulty.\nB: Mental toughness is important.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"強靭 uses 強 (strong) and 靭 (tough/tenacious). It describes not just strength but resilience: the ability to bend without breaking. Japan's disaster preparedness culture values きょうじんなインフラ (resilient infrastructure) and きょうじんなしゃかい (resilient society). After the 2011 earthquake, きょうじんか (strengthening/making resilient) became a key policy term."},

    {type:"teach", trg:"たっせいかん", src:"sense of achievement / feeling of accomplishment", pos:"noun", gender:null,
     note:"Kanji: 達成感. たっせい (achievement) + かん (feeling/sense).\nたっせいかんをあじわう = to savor the sense of achievement.",
     example:"A: むずかしいもくひょうをたっせいしたときのたっせいかんはかくべつです。\nB: くろうしたぶんだけよろこびもおおきいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The sense of achievement when reaching a difficult goal is special.\nB: The harder the struggle, the greater the joy.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"達成感 is highly valued in Japanese education and work culture. The idea that たっせいかん comes from overcoming difficulty (苦労した分だけ) is central to the Japanese philosophy of effort (努力). Teachers design tasks to give students たっせいかん. Companies celebrate team たっせい (achievement). The 感 (feeling) suffix emphasizes the emotional reward of accomplishment."},

    {type:"fb", s:"せいこうのひけつはどりょくに{1}ない。\n(The secret of success is nothing other than effort.)", a:"ほかなら", opts:["ほかなら","すぎ","かぎら","ちがい"], sSrc:"The secret of success is nothing other than effort.",
     hint:"The pattern meaning 'is nothing other than,' emphasizing that X is precisely and only Y."},

    {type:"mc", q:"にすぎない minimizes by saying:", opts:["Something is merely X and nothing more","Something is very important","Something is the best option","Something is impossible"], ans:"Something is merely X and nothing more",
     hint:"This pattern uses 過ぎない (does not exceed) to downplay s...'s significance."},

    {type:"match", pairs:[{trg:"ものである",src:"it is the nature of"},{trg:"にほかならない",src:"nothing other than"},{trg:"にすぎない",src:"merely / nothing more than"},{trg:"からこそ",src:"precisely because"}]},

    {type:"fb", s:"にほんごがむずかしい{1}、やりがいがあるのです。\n(Precisely because Japanese is difficult, it is rewarding.)", a:"からこそ", opts:["からこそ","から","ので","けど"], sSrc:"Precisely because Japanese is difficult, it is rewarding.",
     hint:"The emphasized causal pattern meaning 'precisely because,' using こそ for emphasis."},

    {type:"mc", q:"いかなる is the literary equivalent of:", opts:["どんな (what kind of / any)","いつ (when)","どこ (where)","なぜ (why)"], ans:"どんな (what kind of / any)",
     hint:"This classical adjective replaces the everyday question word for 'what k... of' in formal writing."}
  ]
};
export default BATCH5_L_1;
