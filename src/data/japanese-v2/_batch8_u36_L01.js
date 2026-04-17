// Batch 8 – Unit 36 (B2.4 Comprehensive): Advanced Set Phrases & Register
const BATCH8_L1 = {
  id:"jav2_u36l_b8_1", title:"上級(じょうきゅう)定型表現(ていけいひょうげん)", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"上級(じょうきゅう)定型表現(ていけいひょうげん)",
     desc:"Master advanced set phrases and register-switching expressions that mark true fluency. These expressions let you navigate formal, academic, and professional Japanese with confidence.",
     goals:["Use advanced set phrases for formal occasions","Switch register between casual and formal","Express nuanced opinions and qualifications"]},

    {type:"teach", trg:"おそれながら", src:"with all due respect / I am afraid", pos:"adv", gender:null,
     note:"Very formal. Used before disagreeing politely.\nおそれながら申(もう)し上(あ)げます = I humbly venture to say.",
     example:"A: おそれながら申(もう)し上(あ)げますが、その計画(けいかく)には問題(もんだい)があると思(おも)います。\nB: 詳(くわ)しく聞(き)かせてください。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: With all due respect, I think there is a problem with that plan.\nB: Please tell me in detail.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"おそれながら is the gold standard of polite disagreement in Japanese business. It literally means 'while fearing (your reaction).' Using this before criticism softens the blow dramatically. In samurai dramas, subjects say おそれながら申(もう)し上(あ)げます before telling their lord bad news. Modern business retains this formula."},

    {type:"teach", trg:"さしつかえなければ", src:"if it is not too much trouble / if you do not mind", pos:"conj", gender:null,
     note:"Very polite conditional request. さしつかえ = hindrance/objection.\nForm: verb potential + ければ.",
     example:"A: さしつかえなければ、お名前(なまえ)を教(おし)えていただけますか？\nB: 田中(たなか)と申(もう)します。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: If you do not mind, could you tell me your name?\nB: My name is Tanaka.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"さしつかえなければ is the most polite way to preface a request that might be intrusive. It is essential in business and formal situations. Asking for personal information, making scheduling requests, or requesting documents all benefit from this softener. The casual equivalent is よければ (if it is okay)."},

    {type:"teach", trg:"言(い)わば", src:"so to speak / as it were", pos:"adv", gender:null,
     note:"Introduces an analogy or figurative expression.\n言(い)わば、日本(にほん)のシリコンバレーです = it is, so to speak, Japan's Silicon Valley.",
     example:"A: この町(まち)は言(い)わば日本(にほん)のシリコンバレーです。\nB: たくさんのベンチャー企業(きぎょう)がありますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: This town is, so to speak, Japan's Silicon Valley.\nB: There are many venture companies.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"言(い)わば (if one were to say) introduces metaphors and comparisons. It signals that the speaker is about to use figurative language. In academic writing, 言(い)わば precedes key analogies. In speeches, it highlights the most memorable comparison. It is more formal than たとえるなら (if I were to compare)."},

    {type:"teach", trg:"に限(かぎ)らず", src:"not limited to / not just", pos:"part", gender:null,
     note:"に + 限(かぎ)る (to limit) + ず (negative). 日本(にほん)に限(かぎ)らず = not limited to Japan.\nBroadens the scope.",
     example:"A: この問題(もんだい)は日本(にほん)に限(かぎ)らず世界(せかい)共通(きょうつう)です。\nB: グローバルな課題(かだい)ですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: This problem is not limited to Japan but common worldwide.\nB: It is a global challenge.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"に限(かぎ)らず elegantly broadens an argument beyond a specific case. AにかぎらずBも (not just A but B also) is a common essay pattern. 学生(がくせい)に限(かぎ)らず社会人(しゃかいじん)も (not just students but working adults too). It demonstrates analytical thinking by showing awareness of broader applicability."},

    {type:"teach", trg:"改(あらた)めて", src:"once again / anew / formally", pos:"adv", gender:null,
     note:"改(あらた)めてお礼(れい)申(もう)し上(あ)げます = I express my thanks once again.\nSignals formality and sincerity.",
     example:"A: 改(あらた)めてお礼(れい)申(もう)し上(あ)げます。\nB: こちらこそ、ありがとうございました。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: I express my thanks once again.\nB: Likewise, thank you.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"改(あらた)めて serves multiple functions: 改(あらた)めて考(かんが)えると (thinking about it again), 改(あらた)めて紹介(しょうかい)します (let me formally introduce), 改(あらた)めて連絡(れんらく)します (I will contact you again properly). It signals that what follows is deliberate, formal, and considered, not casual or off-the-cuff."},

    {type:"mc", q:"When would you use おそれながら?", opts:["Before politely disagreeing with a superior","When greeting someone casually","When ordering at a restaurant","When saying goodbye"], ans:"Before politely disagreeing with a superior",
     hint:"This very formal phrase literally means 'while fearing (your reaction).'"},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Used with negative form. かならずしもそうではない = that is not necessarily the case.\nSoftens absolute statements.",
     example:"A: 高(たか)いものがかならずしも良(よ)いとは限(かぎ)りません。\nB: そのとおりですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: That is true.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"かならずしも + negative is essential for nuanced argument in Japanese. It softens claims: かならずしも正(ただ)しくない (not necessarily correct). Japanese academic style avoids absolutes, making かならずしも one of the most used qualifiers. Compare: かならず (always/certainly) vs. かならずしも (not necessarily)."},

    {type:"teach", trg:"ともかくとして", src:"setting that aside / regardless of", pos:"conj", gender:null,
     note:"Puts one topic aside to focus on another.\nAはともかくとして、Bについて = setting A aside, regarding B.",
     example:"A: 原因(げんいん)はともかくとして、まず対策(たいさく)を考(かんが)えましょう。\nB: そうですね。今(いま)は緊急(きんきゅう)対応(たいおう)が先(さき)です。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Setting aside the cause, let us first think about countermeasures.\nB: Right. Emergency response comes first now.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"ともかくとして is a sophisticated way to redirect discussion. In meetings, it prevents getting stuck on one issue: コストはともかくとして、品質(ひんしつ)について (setting aside cost, regarding quality). It shows you acknowledge the sidelined topic while prioritizing what matters most. はともかく is the shorter form."},

    {type:"teach", trg:"一見(いっけん)", src:"at first glance / seemingly / apparently", pos:"adv", gender:null,
     note:"一見(いっけん)簡単(かんたん)そうに = seemingly simple.\n一見(いっけん)すると = at first glance.",
     example:"A: 一見(いっけん)簡単(かんたん)そうに見(み)えますが、実(じつ)は難(むずか)しいです。\nB: 見(み)た目(め)にだまされてはいけませんね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: It seems simple at first glance, but actually it is difficult.\nB: We must not be fooled by appearances.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"一見(いっけん) introduces a gap between appearance and reality: 一見(いっけん)Aだが、実(じつ)はBだ (at first glance A, but actually B). This pattern is extremely common in Japanese essays and JLPT reading passages. It demonstrates critical thinking: not accepting surface-level impressions."},

    {type:"teach", trg:"あくまでも", src:"to the very end / absolutely / strictly", pos:"adv", gender:null,
     note:"Emphasizes firmness of position. あくまでも個人(こじん)の意見(いけん)です = this is strictly my personal opinion.\nLimits scope.",
     example:"A: あくまでも仮説(かせつ)ですが、こう考(かんが)えています。\nB: なるほど、興味深(きょうみぶか)い仮説(かせつ)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: This is strictly a hypothesis, but I think this.\nB: I see, that is an interesting hypothesis.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"あくまでも has two key uses: limiting scope (あくまでも私(わたし)の意見(いけん)です = strictly my opinion) and expressing determination (あくまでも戦(たたか)う = fight to the very end). The limiting use is more common in formal speech. It is a defensive hedge: if the opinion proves wrong, あくまでも protects the speaker."},

    {type:"teach", trg:"確(たし)かに", src:"certainly / admittedly / indeed", pos:"adv", gender:null,
     note:"確(たし)かにそうですが... = certainly, but...\nConcedes a point before countering.",
     example:"A: 確(たし)かにこの方法(ほうほう)は効果的(こうかてき)です。しかし、コストが高(たか)すぎます。\nB: バランスが難(むずか)しいですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Admittedly, this method is effective. However, the cost is too high.\nB: The balance is difficult.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"確(たし)かに...しかし (certainly...however) is the most important debate structure in Japanese. Conceding before countering shows intellectual honesty and respect. JLPT essays that use this pattern score higher. It mirrors the 起承転結(きしょうてんけつ) narrative structure: acknowledge, then turn."},

    {type:"teach", trg:"まさに", src:"precisely / exactly / truly", pos:"adv", gender:null,
     note:"まさにそのとおりです = that is precisely right.\nStrengthens agreement or identification.",
     example:"A: まさに私(わたし)が言(い)いたかったことです。\nB: 考(かんが)えが一致(いっち)しましたね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: That is precisely what I wanted to say.\nB: Our thoughts are aligned.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"まさに is the emphatic 'precisely' that validates and strengthens. まさにそのとおり (precisely so) is enthusiastic agreement. まさにいま (right at this moment) emphasizes timing. In speeches, まさに今日(きょう) (precisely today) highlights the significance of the present occasion."},

    {type:"fb", s:"{1}申(もう)し上(あ)げますが、その計画(けいかく)には問題(もんだい)があります。\n(With all due respect, there is a problem with that plan.)", a:"おそれながら", opts:["おそれながら","確(たし)かに","あくまでも","さしつかえ"], sSrc:"With all due respect, there is a problem with that plan.",
     hint:"This ultra-polite prefix literally means 'while fearing' and is used before disagreeing."},

    {type:"teach", trg:"〜かねる", src:"to be unable to / to find it difficult to", pos:"verb", gender:null,
     note:"Polite refusal. お答(こた)えしかねます = I am unable to answer.\nSofter than できません.",
     example:"A: その質問(しつもん)にはお答(こた)えしかねます。\nB: わかりました。別(べつ)の質問(しつもん)をします。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: I am unable to answer that question.\nB: Understood. I will ask another question.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"かねる is the business Japanese way to say 'no' without saying いいえ. 受(う)け入(い)れかねます (cannot accept), 参加(さんか)しかねます (cannot participate), 応(おう)じかねます (cannot comply). It is softer than できません and avoids direct rejection. Mastering かねる is essential for Japanese business communication."},

    {type:"teach", trg:"快(こころよ)く", src:"willingly / gladly / with pleasure", pos:"adv", gender:null,
     note:"快(こころよ)く引(ひ)き受(う)ける = to gladly accept.\nUsed when agreeing enthusiastically.",
     example:"A: お願(ねが)いを快(こころよ)く引(ひ)き受(う)けてくださいました。\nB: お役(やく)に立(た)てれば嬉(うれ)しいです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: You gladly accepted my request.\nB: I am happy if I can be of use.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"快(こころよ)く (willingly) describes willing, cheerful acceptance. It is the positive counterpart to しぶしぶ (reluctantly). 快(こころよ)く協力(きょうりょく)してくれた (cooperated willingly) expresses deep gratitude. In formal thank-you speeches, 快(こころよ)くご協力(きょうりょく)いただき (your willing cooperation) is a standard phrase."},

    {type:"match", pairs:[{trg:"おそれながら",src:"with all due respect"},{trg:"さしつかえなければ",src:"if you do not mind"},{trg:"かならずしも",src:"not necessarily"},{trg:"あくまでも",src:"strictly/to the end"},{trg:"まさに",src:"precisely/exactly"}],
     hint:"Match each advanced expression with its English meaning."},

    {type:"mc", q:"What does 〜かねる express in business Japanese?", opts:["A polite way to refuse or say 'unable to'","An enthusiastic agreement","A casual greeting","A formal invitation"], ans:"A polite way to refuse or say 'unable to'",
     hint:"This verb suffix is softer than できません and avoids direct rejection."},

    {type:"fb", s:"高(たか)いものが{1}良(よ)いとは限(かぎ)りません。\n(Expensive things are not necessarily good.)", a:"かならずしも", opts:["かならずしも","かならず","ぜったいに","確(たし)かに"], sSrc:"Expensive things are not necessarily good.",
     hint:"This adverb + negative pattern means 'not always' or 'not necessarily.'"},

    {type:"mc", q:"What is the most common essay debate structure in Japanese?", opts:["確(たし)かに...しかし (certainly...however)","まず...そして (first...then)","もちろん...だから (of course...therefore)","ところで...でも (by the way...but)"], ans:"確(たし)かに...しかし (certainly...however)",
     hint:"Conceding before countering shows intellectual honesty and is valued in academic writing."}
  ]
};
export default BATCH8_L1;
