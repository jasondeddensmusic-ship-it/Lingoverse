// Unit 26 Batch 2 Lesson 3: メディアリテラシー (Media Literacy)
const BATCH2_L_3 = {
  id:"jav2_u26l_b2_3", title:"メディアリテラシー", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアリテラシー",
     desc:"Critical media consumption requires vocabulary for bias, sources, and credibility. Learn to discuss media influence, distinguish fact from opinion, and evaluate news sources in Japanese. These terms are essential for reading editorials and JLPT N2 opinion passages.",
     goals:["Discuss media bias and credibility","Distinguish facts from opinions","Evaluate news sources critically"]},

    {type:"teach", trg:"偏向(へんこう)", src:"bias / partiality / deviation", pos:"noun", gender:null,
     note:"偏向(へんこう)報道(ほうどう) = biased reporting.\nUsed for media criticism and academic discussion.",
     example:"A: この報道(ほうどう)には偏向(へんこう)があるのではないですか？\nB: たしかに、一方的(いっぽうてき)な視点(してん)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Isn't there bias in this reporting?\nB: Indeed, it is a one-sided perspective.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"偏向 uses 偏(へん) (lean/incline) and 向(こう) (direction). When reporting 'leans in one direction,' it shows bias. Japanese media criticism often focuses on 偏向(へんこう)報道(ほうどう), with different outlets accused of leaning left (Asahi) or right (Yomiuri). Media literacy education teaches students to read multiple sources to identify 偏向(へんこう)."},

    {type:"teach", trg:"信頼性(しんらいせい)", src:"reliability / credibility / trustworthiness", pos:"noun", gender:null,
     note:"信頼性(しんらいせい)が高(たか)い = highly reliable.\n情報(じょうほう)の信頼性(しんらいせい) = reliability of information.",
     example:"A: この情報(じょうほう)の信頼性(しんらいせい)をどう評価(ひょうか)しますか？\nB: いくつかの出典(しゅってん)を確認(かくにん)する必要(ひつよう)があります。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: How do you evaluate the reliability of this information?\nB: We need to verify several sources.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"信頼性 adds the suffix 性(せい) (nature/quality) to 信頼(しんらい) (trust). In Japanese academic writing, demonstrating 信頼性(しんらいせい) of data and sources is fundamental. The word also applies to people and institutions: 信頼(しんらい)できる人(ひと) (a trustworthy person). Building 信頼(しんらい) takes time in Japanese culture, but once established, it is a powerful asset."},

    {type:"teach", trg:"出典(しゅってん)", src:"source / origin / citation", pos:"noun", gender:null,
     note:"出典(しゅってん)を示(しめ)す = to cite a source.\nUsed in academic and journalistic writing.",
     example:"A: このデータの出典(しゅってん)は何(なん)ですか？\nB: 総務省(そうむしょう)の統計(とうけい)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: What is the source of this data?\nB: It is statistics from the Ministry of Internal Affairs.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"出典 uses 出(しゅつ) (come out) and 典(てん) (canon/classic). A source is where information 'comes out from.' In Japanese academic culture, citing 出典(しゅってん) is mandatory. Plagiarism is taken seriously, and university students learn proper citation formats. News credibility also depends on identifiable 出典(しゅってん) for claims and statistics."},

    {type:"mc", q:"偏向(へんこう)報道(ほうどう) means:", opts:["Biased reporting","Live broadcast","Editorial column","Breaking news"], ans:"Biased reporting",
     hint:"The compound combines the word for 'bias/leaning' with the word for 'r....'"},

    {type:"teach", trg:"客観的(きゃっかんてき)", src:"objective", pos:"adj", gender:null,
     note:"Opposite: 主観的(しゅかんてき) (subjective).\n客観的(きゃっかんてき)に見(み)る = to view objectively.",
     example:"A: できるだけ客観的(きゃっかんてき)に報道(ほうどう)するべきです。\nB: しかし完全(かんぜん)な客観性(きゃっかんせい)は難(むずか)しいですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: We should report as objectively as possible.\nB: However, complete objectivity is difficult.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"客観的 adds the adjectival suffix 的(てき) to 客観(きゃっかん) (objectivity). The quest for 客観的(きゃっかんてき) reporting is a central ideal of journalism globally. In Japanese, the tension between 客観的(きゃっかんてき) (objective) and 主観的(しゅかんてき) (subjective) reporting is actively debated. Some argue pure 客観性(きゃっかんせい) is impossible, and transparency about perspective is more honest."},

    {type:"teach", trg:"世論(せろん)", src:"public opinion", pos:"noun", gender:null,
     note:"Also read よろん. 世論(せろん)調査(ちょうさ) = public opinion poll.\n世論(せろん)を動(うご)かす = to sway public opinion.",
     example:"A: 世論(せろん)調査(ちょうさ)では反対(はんたい)が多(おお)いです。\nB: 政府(せいふ)は世論(せろん)を無視(むし)できないでしょう。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: In public opinion polls, opposition is high.\nB: The government cannot ignore public opinion.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"世論 has two readings: せろん (more common in media) and よろん (more traditional). The word uses 世(せ) (world/society) and 論(ろん) (opinion/argument). Japanese media heavily reports on 世論(せろん)調査(ちょうさ) (opinion polls), and governments pay close attention. Major newspapers conduct their own polls, creating a rich landscape of public sentiment data."},

    {type:"teach", trg:"統計(とうけい)", src:"statistics", pos:"noun", gender:null,
     note:"統計(とうけい)データ = statistical data.\n統計学(とうけいがく) = statistics (as a discipline).",
     example:"A: 統計(とうけい)データにもとづいて判断(はんだん)しましょう。\nB: 数字(すうじ)だけでなく背景(はいけい)も考(かんが)えるべきです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us make judgments based on statistical data.\nB: We should consider not just numbers but the background too.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"統計 uses 統(とう) (govern/unite) and 計(けい) (measure/plan). Japan's statistics bureau (総務省(そうむしょう)統計局(とうけいきょく)) produces detailed data on population, economy, and society. Japanese business culture values 統計(とうけい) highly. The phrase 数字(すうじ)で語(かた)る (to speak with numbers) reflects the expectation that arguments should be supported by data."},

    {type:"fb", s:"このデータの{1}は何(なん)ですか？\n(What is the source of this data?)", a:"出典(しゅってん)", opts:["出典(しゅってん)","信頼性(しんらいせい)","偏向(へんこう)","統計(とうけい)"], sSrc:"What is the source of this data?",
     hint:"The noun meaning 'source' or 'citation,' where information originally came from."},

    {type:"teach", trg:"一方的(いっぽうてき)", src:"one-sided / unilateral", pos:"adj", gender:null,
     note:"一方的(いっぽうてき)な報道(ほうどう) = one-sided reporting.\n一方的(いっぽうてき)な主張(しゅちょう) = one-sided argument.",
     example:"A: 一方的(いっぽうてき)な情報(じょうほう)だけで判断(はんだん)しないでください。\nB: 両方(りょうほう)の意見(いけん)を聞(き)くべきですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Please do not judge based on one-sided information alone.\nB: We should listen to both sides' opinions.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"一方的 adds 的(てき) (adjective marker) to 一方(いっぽう) (one direction). When something is 一方的(いっぽうてき), it only shows one angle. In media criticism, 一方的(いっぽうてき)な報道(ほうどう) is a serious charge. Japanese courts have ruled that overly 一方的(いっぽうてき) news coverage can violate fair reporting standards."},

    {type:"teach", trg:"事実(じじつ)", src:"fact / reality / truth", pos:"noun", gender:null,
     note:"事実(じじつ)確認(かくにん) = fact-checking.\n事実(じじつ)に基(もと)づく = based on facts.",
     example:"A: 事実(じじつ)と意見(いけん)を区別(くべつ)することが大切(たいせつ)です。\nB: メディアリテラシーの基本(きほん)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: It is important to distinguish facts from opinions.\nB: That is the foundation of media literacy.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"事実 uses 事(じ) (matter/thing) and 実(じつ) (truth/fruit). Facts are 'true matters.' The distinction between 事実(じじつ) (fact) and 意見(いけん) (opinion) is central to media literacy education in Japan. NHK, as the public broadcaster, emphasizes 事実(じじつ)に基(もと)づく報道(ほうどう) (fact-based reporting), though its perceived neutrality is debated."},

    {type:"mc", q:"世論(せろん)調査(ちょうさ) means:", opts:["Market research","Public opinion poll","Government statistics","News broadcast rating"], ans:"Public opinion poll",
     hint:"世論(せろん) means 'p... o...' and 調査(ちょうさ) means 'survey/investigation.'"},

    {type:"teach", trg:"区別(くべつ)", src:"distinction / differentiation", pos:"noun", gender:null,
     note:"区別(くべつ)する = to distinguish.\n区別(くべつ)がつかない = cannot tell apart.",
     example:"A: フェイクニュースと本当(ほんとう)のニュースの区別(くべつ)が難(むずか)しくなっています。\nB: 出典(しゅってん)を確認(かくにん)する習慣(しゅうかん)が大切(たいせつ)です。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: It is becoming difficult to distinguish fake news from real news.\nB: The habit of checking sources is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"区別 uses 区(く) (ward/section) and 別(べつ) (separate/different). To distinguish is to 'separate into sections.' In Japanese logic, making clear 区別(くべつ) is valued. The phrase 区別(くべつ)なく (without distinction) is used positively for equality: 性別(せいべつ)の区別(くべつ)なく (regardless of gender). Clear thinking requires clear 区別(くべつ)."},

    {type:"fb", s:"事実(じじつ)と{1}を区別(くべつ)することが大切(たいせつ)です。\n(It is important to distinguish facts from opinions.)", a:"意見(いけん)", opts:["意見(いけん)","事件(じけん)","統計(とうけい)","出典(しゅってん)"], sSrc:"It is important to distinguish facts from opinions.",
     hint:"The noun meaning a personal view or judgment, contrasted with verifiable facts."},

    {type:"match", pairs:[{trg:"偏向(へんこう)",src:"bias"},{trg:"信頼性(しんらいせい)",src:"reliability"},{trg:"出典(しゅってん)",src:"source/citation"},{trg:"世論(せろん)",src:"public opinion"}]},

    {type:"fb", s:"一方的(いっぽうてき)な{1}だけで判断(はんだん)しないでください。\n(Please do not judge based on one-sided information alone.)", a:"情報(じょうほう)", opts:["情報(じょうほう)","意見(いけん)","統計(とうけい)","事実(じじつ)"], sSrc:"Please do not judge based on one-sided information alone.",
     hint:"The general noun for knowledge or data received about something."},

    {type:"match", pairs:[{trg:"客観的(きゃっかんてき)",src:"objective"},{trg:"一方的(いっぽうてき)",src:"one-sided"},{trg:"事実(じじつ)",src:"fact"},{trg:"区別(くべつ)",src:"distinction"}]},

    {type:"mc", q:"Which practice is most fundamental to media literacy?", opts:["Ignoring all news entirely","Believing the first source you find","Checking multiple sources to verify information","Only reading one trusted newspaper"], ans:"Checking multiple sources to verify information",
     hint:"出典(しゅってん)を確認(かくにん)する (verifying s...) is the foundational skill of critical media consumption."},
  {type:"match",pairs:[{trg:"統計(とうけい)",src:"statistics"}]}]
};
export default BATCH2_L_3;
