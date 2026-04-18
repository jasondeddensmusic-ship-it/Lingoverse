// Unit 21 Batch 5 Lesson 1: 世論(よろん) (Public Opinion & Social Issues)
const BATCH5_L_1 = {
  id:"jav2_u21l_b5_1", title:"世論(よろん)", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"世論(よろん)",
     desc:"Move beyond reporting news to discussing opinions and social issues. Learn vocabulary for public opinion, surveys, and debate. These words let you express agreement, disagreement, and nuanced positions on social topics, essential skills for intermediate Japanese discourse.",
     goals:["Use opinion vocabulary: 賛成(さんせい), 反対(はんたい), 意見(いけん)","Discuss social issues with appropriate register","Express degrees of agreement and disagreement"]},

    {type:"teach", trg:"世論(よろん)", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論(よろん)/輿論(よろん). 世論調査(よろんちょうさ) = public opinion poll.\nせろん is an alternate reading.",
     example:"A: この問題(もんだい)について世論(よろん)は分(わ)かれています。\nB: 賛成(さんせい)も反対(はんたい)も多(おお)いですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Public opinion is divided on this issue.\nB: There are many for and against.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"世論(よろん) has two accepted readings: よろん and せろん. Originally 輿論(よろん) meant 'public discussion' while 世論(せろん) meant 'popular sentiment.' After postwar kanji reform merged them, both readings coexist. NHK uses よろん, but either is correct. 世論調査(よろんちょうさ) (opinion polls) are major news events in Japan."},

    {type:"teach", trg:"賛成(さんせい)", src:"agreement / approval / being in favor", pos:"noun", gender:null,
     note:"Kanji: 賛成(さんせい). 賛成(さんせい)する = to agree/approve.\nOpposite: 反対(はんたい). 賛成多数(さんせいたすう) = majority in favor.",
     example:"A: この案(あん)に賛成(さんせい)ですか？\nB: はい、私(わたし)は賛成(さんせい)です。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Do you agree with this proposal?\nB: Yes, I am in favor.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"賛成(さんせい) uses 賛(さん) (praise/approve) and 成(せい) (become/accomplish). In Japanese meetings, the formal process of expressing 賛成(さんせい) or 反対(はんたい) follows strict protocols. Unanimous consent (全会一致(ぜんかいいっち)) is often the goal, reflecting the preference for harmony. When voting, 賛成(さんせい)の方(かた)は起立(きりつ)してください (those in favor, please stand) is the parliamentary phrase."},

    {type:"teach", trg:"反対(はんたい)", src:"opposition / objection / being against", pos:"noun", gender:null,
     note:"Kanji: 反対(はんたい). 反対(はんたい)する = to oppose.\n反対意見(はんたいいけん) = opposing opinion.",
     example:"A: 新空港(しんくうこう)建設(けんせつ)に反対(はんたい)する人(ひと)が多(おお)いです。\nB: 環境(かんきょう)への影響(えいきょう)が心配(しんぱい)されていますね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Many people oppose the construction of the new airport.\nB: There are concerns about the environmental impact.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"反対(はんたい) combines 反(はん) (anti/opposite) and 対(たい) (against/pair). 反対運動(はんたいうんどう) (opposition movement) is a significant part of Japanese civil society. From anti-nuclear protests after Fukushima to community opposition to development projects, Japanese citizens exercise their right to 反対(はんたい). Protest culture in Japan tends to be orderly and peaceful."},

    {type:"teach", trg:"意見(いけん)", src:"opinion / view", pos:"noun", gender:null,
     note:"Kanji: 意見(いけん). 意見(いけん)を言(い)う = to express an opinion.\n意見(いけん)が分(わ)かれる = opinions are divided.",
     example:"A: 意見(いけん)を聞(き)かせてください。\nB: 私(わたし)の意見(いけん)では、もう少(すこ)し時間(じかん)が必要(ひつよう)だと思(おも)います。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Please let me hear your opinion.\nB: In my opinion, I think a little more time is needed.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"意見(いけん) uses 意(い) (meaning/intention) and 見(けん) (see/view). Expressing 意見(いけん) in Japanese requires careful hedging. Direct opinions can sound aggressive. Common softeners: 私(わたし)の意見(いけん)では (in my opinion), と思(おも)います (I think), かもしれません (perhaps). The indirectness is not weakness but social skill."},

    {type:"teach", trg:"調査(ちょうさ)", src:"survey / investigation / research", pos:"noun", gender:null,
     note:"Kanji: 調査(ちょうさ). 調査(ちょうさ)する = to investigate/survey.\n世論調査(よろんちょうさ) = opinion poll. 実態調査(じったいちょうさ) = fact-finding survey.",
     example:"A: 最近(さいきん)の調査(ちょうさ)によると、若者(わかもの)の65%がこの政策(せいさく)を支持(しじ)しています。\nB: 思(おも)ったより高(たか)いですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: According to a recent survey, 65% of young people support this policy.\nB: That is higher than I thought.\nA: How was it?\nB: It was very good.",
     funFact:"調査(ちょうさ) combines 調(ちょう) (investigate/tune) and 査(さ) (inspect). Japan loves data and surveys. Government ministries conduct massive 調査(ちょうさ) on everything from population to eating habits. The 国勢調査(こくせいちょうさ) (national census) happens every 5 years. Media organizations run 世論調査(よろんちょうさ) before every election, and results dominate political coverage."},

    {type:"mc", q:"意見(いけん)が分(わ)かれている means:", opts:["Opinions are divided","Someone changed their opinion","Opinions were rejected","Everyone agrees"], ans:"Opinions are divided",
     hint:"分(わ)かれる means 'to be d.../split,' combined with the word for o...."},

    {type:"teach", trg:"支持(しじ)する", src:"to support / to back", pos:"verb", gender:null,
     note:"する-verb. Kanji: 支持(しじ)する. 支持率(しじりつ) = approval rating.\n政党(せいとう)を支持(しじ)する = to support a political party.",
     example:"A: 内閣(ないかく)支持率(しじりつ)が下(さ)がっています。\nB: 経済(けいざい)政策(せいさく)に不満(ふまん)があるようですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: The cabinet approval rating is falling.\nB: There seems to be dissatisfaction with economic policy.\nA: When was it?\nB: It was last summer.",
     funFact:"支持率(しじりつ) (approval rating) is one of the most watched political numbers in Japan. NHK and major newspapers conduct monthly 支持率(しじりつ) polls. A prime minister whose 支持率(しじりつ) drops below 30% is considered in danger. Cabinet reshuffles are often timed to boost 支持率(しじりつ). The number dominates political commentary."},

    {type:"teach", trg:"議論(ぎろん)", src:"debate / discussion / argument", pos:"noun", gender:null,
     note:"Kanji: 議論(ぎろん). 議論(ぎろん)する = to debate/discuss.\n議論(ぎろん)を呼(よ)ぶ = to spark debate.",
     example:"A: このテーマについて議論(ぎろん)しましょう。\nB: まず、お互(たが)いの意見(いけん)を述(の)べましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Let us debate this theme.\nB: First, let us state each other's opinions.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"議論(ぎろん) uses 議(ぎ) (discuss) and 論(ろん) (theory/argument). While Japanese culture values harmony, 議論(ぎろん) is respected in academic and political contexts. The Diet (国会(こっかい)) is called 'the place of discussion.' However, Japanese 議論(ぎろん) tends to be more structured and less combative than Western-style debates. Personal attacks during 議論(ぎろん) are considered poor form."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響(えいきょう). 影響(えいきょう)する = to influence.\n影響(えいきょう)を与(あた)える = to have an impact on.",
     example:"A: 地球温暖化(ちきゅうおんだんか)は世界中(せかいちゅう)に影響(えいきょう)を与(あた)えています。\nB: 日本(にほん)も台風(たいふう)が増(ふ)えていますね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Global warming is having an impact around the world.\nB: Japan is also seeing more typhoons.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"影響(えいきょう) combines 影(えい) (shadow) and 響(きょう) (echo/reverberate). The metaphor is powerful: influence spreads like a shadow and echoes like sound. The word is essential in academic and news contexts. 影響力(えいきょうりょく) (influence power) describes a person's or organization's ability to affect others. Social media influencers in Japan are called インフルエンサー."},

    {type:"tip", title:"Expressing Opinions Politely",
     text:"Strong agreement:\n賛成(さんせい)です = I agree\nまったくその通(とお)りです = exactly right\n\nMild agreement:\nそうですね = I see / yes\n確(たし)かにそうかもしれません = indeed, that may be so\n\nNeutral:\nなるほど = I see (understanding)\n一概(いちがい)には言(い)えません = one cannot say categorically\n\nMild disagreement:\nそうかもしれませんが = that may be so, but...\n少(すこ)し違(ちが)うかもしれません = it might be slightly different\n\nStrong disagreement:\n反対(はんたい)です = I oppose\nそれは違(ちが)うと思(おも)います = I think that is wrong\n\nNote: Even strong disagreement is softened with と思(おも)います (I think)."},

    {type:"teach", trg:"主張(しゅちょう)", src:"claim / assertion / argument", pos:"noun", gender:null,
     note:"Kanji: 主張(しゅちょう). 主張(しゅちょう)する = to assert/claim.\nStronger than 意見(いけん), implies advocacy.",
     example:"A: 彼(かれ)の主張(しゅちょう)には根拠(こんきょ)があります。\nB: データに基(もと)づいた主張(しゅちょう)は説得力(せっとくりょく)がありますね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: His claim has evidence behind it.\nB: Arguments based on data are persuasive.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"主張(しゅちょう) uses 主(しゅ) (main/master) and 張(ちょう) (stretch/extend). A 主張(しゅちょう) is not just an opinion but an actively promoted position. In academic papers, the writer's 主張(しゅちょう) must be clearly stated and defended with evidence. In politics, parties' 主張(しゅちょう) are published in manifestos (マニフェスト). Asserting a strong 主張(しゅちょう) in Japanese requires careful supporting logic."},

    {type:"teach", trg:"根拠(こんきょ)", src:"basis / grounds / evidence", pos:"noun", gender:null,
     note:"Kanji: 根拠(こんきょ). 根拠(こんきょ)がある = to have evidence.\n科学的(かがくてき)根拠(こんきょ) = scientific evidence.",
     example:"A: その主張(しゅちょう)の根拠(こんきょ)は何(なん)ですか？\nB: 最近(さいきん)の調査結果(ちょうさけっか)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What is the basis for that claim?\nB: Recent survey results.\nA: How long did it take?\nB: About two hours.",
     funFact:"根拠(こんきょ) combines 根(こん) (root) and 拠(きょ) (base/depend on). Like a tree needs roots, arguments need 根拠(こんきょ). In Japanese debate culture, 根拠(こんきょ)のない主張(しゅちょう) (claims without evidence) are dismissed. The phrase 根拠(こんきょ)に基(もと)づいて (based on evidence) is the gold standard for persuasion in academic, legal, and journalistic contexts."},

    {type:"fb", s:"この問題(もんだい)について世論(よろん)は{1}います。\n(Public opinion is divided on this issue.)", a:"分(わ)かれて", opts:["分(わ)かれて","集(あつ)まって","決(き)まって","まとまって"], sSrc:"Public opinion is divided on this issue.",
     hint:"The verb meaning 'to be divided/split' in the て-form."},

    {type:"mc", q:"支持率(しじりつ) means:", opts:["Approval rating / support rate","Election result","Public opinion","Survey method"], ans:"Approval rating / support rate",
     hint:"支持(しじ) (s...) + 率(りつ) (r...) creates the compound for how much backing something has."},

    {type:"match", pairs:[{trg:"賛成(さんせい)",src:"agreement/approval"},{trg:"反対(はんたい)",src:"opposition"},{trg:"主張(しゅちょう)",src:"claim/assertion"},{trg:"根拠(こんきょ)",src:"basis/evidence"}]},

    {type:"fb", s:"地球温暖化(ちきゅうおんだんか)は世界中(せかいちゅう)に{1}を与(あた)えています。\n(Global warming is having an impact around the world.)", a:"影響(えいきょう)", opts:["影響(えいきょう)","意見(いけん)","議論(ぎろん)","調査(ちょうさ)"], sSrc:"Global warming is having an impact around the world.",
     hint:"The noun meaning influence/impact, using the kanji for shadow and echo."},

    {type:"mc", q:"Japanese opinions are typically softened with:", opts:["と思(おも)います (I think)","絶対(ぜったい)に (absolutely)","必(かなら)ず (certainly)","もちろん (of course)"], ans:"と思(おも)います (I think)",
     hint:"Even strong views are often hedged with this phrase to maintain conversational harmony."}
  ,{type:"match",pairs:[{trg:"世論(よろん)",src:"public opinion"},{trg:"意見(いけん)",src:"opinion / view"},{trg:"調査(ちょうさ)",src:"survey / investigation / research"},{trg:"支持(しじ)する",src:"to support / to back"},{trg:"議論(ぎろん)",src:"debate / discussion / argument"}]}]
};
export default BATCH5_L_1;
