// Unit 26 Expansion. Lesson 4: Editorial Vocabulary
const LESSON_4 = {
  id:"jav2_u26l4", title:"ろんぴょうのことば", icon:"🖊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Editorial Vocabulary",
     desc:"Editorials and opinion pieces use sophisticated vocabulary to analyze, argue, and persuade. Learn the words that shape public discourse in Japanese media: criticism, influence, trends, and the verbs of argumentation.",
     goals:["Use ひはん, えいきょう, どうこう in editorial contexts","Understand opinion-expression vocabulary","Read and discuss editorial arguments"]},

    {type:"teach", trg:"ひはん", src:"criticism / critique", pos:"noun", gender:null,
     note:"Kanji: 批判. ひはんする = to criticize.\nひはんてき = critical (adjective form).",
     example:"A: せいふのたいおうにたいするひはんがたかまっています。\nB: くわしくはしゃせつをよんでください。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Criticism of the government's response is growing.\nB: Please read the editorial for details.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"批判 uses 批 (strike/criticize) and 判 (judge). Japanese media criticism tends to be less confrontational than Western media. Editorials often use the pattern ...が問われている (is being questioned) rather than direct attacks. ひはんてき (critical) in academic use means 'analytically evaluating,' not necessarily negative."},

    {type:"teach", trg:"えいきょう", src:"influence / impact", pos:"noun", gender:null,
     note:"Kanji: 影響. えいきょうをあたえる = to have an influence.\nえいきょうをうける = to be influenced by.",
     example:"A: このせいさくはけいざいにおおきなえいきょうをあたえるでしょう。\nB: どのようなえいきょうですか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: This policy will have a major impact on the economy.\nB: What kind of impact?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"影響 uses 影 (shadow) and 響 (echo). Influence is poetically described as casting a shadow and creating an echo. The word appears in nearly every editorial discussing policy consequences. The pattern にえいきょうをあたえる (give influence to) and からえいきょうをうける (receive influence from) are essential editorial constructions."},

    {type:"teach", trg:"どうこう", src:"trend / tendency / movement", pos:"noun", gender:null,
     note:"Kanji: 動向. どうこうをちゅうしする = to watch trends closely.\nしじょうのどうこう = market trends.",
     example:"A: せかいけいざいのどうこうにちゅういがひつようです。\nB: とくにアジアしじょうのどうこうですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: We need to pay attention to global economic trends.\nB: Especially Asian market trends.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"動向 uses 動 (move) and 向 (direction). It captures which way something is moving. Editorials track どうこう of everything: voter sentiment, economic indicators, international relations. The related word 傾向 (keiko, tendency) is more about established patterns, while どうこう implies ongoing, still-developing movement."},

    {type:"mc", q:"えいきょうをあたえる means:", opts:["To exert an effect on something","To ignore an effect","To predict an effect","To receive an effect"], ans:"To exert an effect on something",
     hint:"あたえる means to give, so this phrase means giving influence to s...."},

    {type:"teach", trg:"しゅちょう", src:"assertion / claim / argument", pos:"noun", gender:null,
     note:"Kanji: 主張. しゅちょうする = to assert/claim.\nStronger than いけん (opinion). Implies taking a firm position.",
     example:"A: ちょしゃはかんきょうほごのじゅうようせいをしゅちょうしています。\nB: せっとくりょくのあるしゅちょうですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The author asserts the importance of environmental protection.\nB: That is a persuasive argument.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"主張 uses 主 (main/master) and 張 (stretch/spread). An assertion 'stretches out' one's main point. Academic writing distinguishes between しゅちょう (the thesis or claim being made), こんきょ (grounds/evidence), and けつろん (conclusion). A good ろんぶん needs all three."},

    {type:"teach", trg:"せっとくりょく", src:"persuasiveness / convincing power", pos:"noun", gender:null,
     note:"せっとく (persuasion) + りょく (power/force).\nせっとくりょくがある = to be persuasive.",
     example:"A: このしゅちょうにはせっとくりょくがたりません。\nB: もっとデータがひつようですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: This argument lacks persuasiveness.\nB: More data is needed.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"説得力 combines 説得 (persuasion) and 力 (power). Japanese values evidence-based persuasion over emotional appeals in formal contexts. The phrase せっとくりょくのある (persuasive) is a high compliment for an argument. Adding りょく (power) to nouns is productive: 想像力 (imagination), 集中力 (concentration), 表現力 (expressiveness)."},

    {type:"fb", s:"ちょしゃはかんきょうほごのじゅうようせいを{1}しています。\n(The author asserts the importance of environmental protection.)", a:"しゅちょう", opts:["しゅちょう","ひはん","えいきょう","ほうどう"], sSrc:"The author asserts the importance of environmental protection.",
     hint:"The noun for formally stating and defending a position or thesis."},

    {type:"teach", trg:"こんきょ", src:"grounds / basis / evidence", pos:"noun", gender:null,
     note:"Kanji: 根拠. こんきょにもとづく = to be based on evidence.\nかがくてきこんきょ = scientific basis.",
     example:"A: そのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさけっかです。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: What is the basis for that assertion?\nB: Recent survey results.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"根拠 uses 根 (root) and 拠 (base/rely on). An argument's こんきょ is its root system. Without strong roots, the argument falls. Japanese editorial writing places heavy emphasis on こんきょ. The phrase こんきょのないしゅちょう (a claim without basis) is a devastating critique in any editorial or academic context."},

    {type:"teach", trg:"けいこう", src:"tendency / trend", pos:"noun", gender:null,
     note:"Kanji: 傾向. ...けいこうがある = there is a tendency to...\nMore established than どうこう. Used for patterns observed over time.",
     example:"A: わかいひとのしんぶんばなれのけいこうがつづいています。\nB: デジタルメディアにうつっていますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The trend of young people moving away from newspapers continues.\nB: They are shifting to digital media.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"傾向 uses 傾 (lean/tilt) and 向 (direction). A trend is something leaning in a direction. While どうこう tracks active movement, けいこう describes an established lean. The phrase ...のけいこうがみられる (a tendency is observed) is standard editorial and academic phrasing for describing patterns."},

    {type:"mc", q:"こんきょのないしゅちょう means:", opts:["A popular opinion","A claim that lacks any supporting evidence","A government policy","A strong, well-supported argument"], ans:"A claim that lacks any supporting evidence",
     hint:"こんきょ means the root or foundation, and ない means without."},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論. Also read せろん. よろんちょうさ = public opinion poll.\nよろんがわかれる = public opinion is divided.",
     example:"A: このもんだいについてよろんがわかれています。\nB: さんせいとはんたいがはんはんですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Public opinion is divided on this issue.\nB: It is about half in favor and half against.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"世論 has two accepted readings: よろん and せろん. Historically, せろん was standard, but よろん has become more common in modern usage. NHK uses both. よろんちょうさ (opinion polls) drive political coverage. Japan's major newspapers and broadcasters conduct regular polls, and the results often lead the news."},

    {type:"fb", s:"わかいひとのしんぶんばなれの{1}がつづいています。\n(The trend of young people moving away from newspapers continues.)", a:"けいこう", opts:["けいこう","どうこう","えいきょう","よろん"], sSrc:"The trend of young people moving away from newspapers continues.",
     hint:"The noun for an established tendency or pattern that has been observed over time."},

    {type:"match", pairs:[{trg:"ひはん",src:"criticism"},{trg:"えいきょう",src:"influence"},{trg:"どうこう",src:"trend (ongoing)"},{trg:"しゅちょう",src:"assertion"}]},

    {type:"fb", s:"このせいさくはけいざいにおおきな{1}をあたえるでしょう。\n(This policy will have a major impact on the economy.)", a:"えいきょう", opts:["えいきょう","ひはん","よろん","こんきょ"], sSrc:"This policy will have a major impact on the economy.",
     hint:"The noun for the shadow-and-echo effect one thing has on another."},

    {type:"match", pairs:[{trg:"せっとくりょく",src:"persuasiveness"},{trg:"こんきょ",src:"evidence/grounds"},{trg:"けいこう",src:"tendency"},{trg:"よろん",src:"public opinion"}]},
  ]
};
export default LESSON_4;
