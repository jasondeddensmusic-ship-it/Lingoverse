// Unit 21 Batch 5 Lesson 1: よろん (Public Opinion & Social Issues)
const BATCH5_L_1 = {
  id:"jav2_u21l_b5_1", title:"よろん", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"よろん",
     desc:"Move beyond reporting news to discussing opinions and social issues. Learn vocabulary for public opinion, surveys, and debate. These words let you express agreement, disagreement, and nuanced positions on social topics, essential skills for intermediate Japanese discourse.",
     goals:["Use opinion vocabulary: さんせい, はんたい, いけん","Discuss social issues with appropriate register","Express degrees of agreement and disagreement"]},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論/輿論. よろんちょうさ = public opinion poll.\nせろん is an alternate reading.",
     example:"A: このもんだいについてよろんはわかれています。\nB: さんせいもはんたいもおおいですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Public opinion is divided on this issue.\nB: There are many for and against.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"世論 has two accepted readings: よろん and せろん. Originally 輿論 (よろん) meant 'public discussion' while 世論 (せろん) meant 'popular sentiment.' After postwar kanji reform merged them, both readings coexist. NHK uses よろん, but either is correct. よろんちょうさ (opinion polls) are major news events in Japan."},

    {type:"teach", trg:"さんせい", src:"agreement / approval / being in favor", pos:"noun", gender:null,
     note:"Kanji: 賛成. さんせいする = to agree/approve.\nOpposite: はんたい. さんせいたすう = majority in favor.",
     example:"A: このあんにさんせいですか？\nB: はい、わたしはさんせいです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Do you agree with this proposal?\nB: Yes, I am in favor.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"賛成 uses 賛 (praise/approve) and 成 (become/accomplish). In Japanese meetings, the formal process of expressing さんせい or はんたい follows strict protocols. Unanimous consent (全会一致 zenkai itchi) is often the goal, reflecting the preference for harmony. When voting, さんせいのかたはきりつしてください (those in favor, please stand) is the parliamentary phrase."},

    {type:"teach", trg:"はんたい", src:"opposition / objection / being against", pos:"noun", gender:null,
     note:"Kanji: 反対. はんたいする = to oppose.\nはんたいいけん = opposing opinion.",
     example:"A: しんくうこうけんせつにはんたいするひとがおおいです。\nB: かんきょうへのえいきょうがしんぱいされていますね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Many people oppose the construction of the new airport.\nB: There are concerns about the environmental impact.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"反対 combines 反 (anti/opposite) and 対 (against/pair). はんたいうんどう (opposition movement) is a significant part of Japanese civil society. From anti-nuclear protests after Fukushima to community opposition to development projects, Japanese citizens exercise their right to はんたい. Protest culture in Japan tends to be orderly and peaceful."},

    {type:"teach", trg:"いけん", src:"opinion / view", pos:"noun", gender:null,
     note:"Kanji: 意見. いけんをいう = to express an opinion.\nいけんがわかれる = opinions are divided.",
     example:"A: いけんをきかせてください。\nB: わたしのいけんでは、もうすこしじかんがひつようだとおもいます。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Please let me hear your opinion.\nB: In my opinion, I think a little more time is needed.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"意見 uses 意 (meaning/intention) and 見 (see/view). Expressing いけん in Japanese requires careful hedging. Direct opinions can sound aggressive. Common softeners: わたしのいけんでは (in my opinion), とおもいます (I think), かもしれません (perhaps). The indirectness is not weakness but social skill."},

    {type:"teach", trg:"ちょうさ", src:"survey / investigation / research", pos:"noun", gender:null,
     note:"Kanji: 調査. ちょうさする = to investigate/survey.\nよろんちょうさ = opinion poll. じったいちょうさ = fact-finding survey.",
     example:"A: さいきんのちょうさによると、わかものの65%がこのせいさくをしじしています。\nB: おもったよりたかいですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: According to a recent survey, 65% of young people support this policy.\nB: That is higher than I thought.\nA: How was it?\nB: It was very good.",
     funFact:"調査 combines 調 (investigate/tune) and 査 (inspect). Japan loves data and surveys. Government ministries conduct massive ちょうさ on everything from population to eating habits. The 国勢調査 (kokusei chousa, national census) happens every 5 years. Media organizations run よろんちょうさ before every election, and results dominate political coverage."},

    {type:"mc", q:"いけんがわかれている means:", opts:["Opinions are divided","Someone changed their opinion","Opinions were rejected","Everyone agrees"], ans:"Opinions are divided",
     hint:"わかれる means 'to be d.../split,' combined with the word for o...."},

    {type:"teach", trg:"しじする", src:"to support / to back", pos:"verb", gender:null,
     note:"する-verb. Kanji: 支持する. しじりつ = approval rating.\nせいとうをしじする = to support a political party.",
     example:"A: ないかくしじりつがさがっています。\nB: けいざいせいさくにふまんがあるようですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: The cabinet approval rating is falling.\nB: There seems to be dissatisfaction with economic policy.\nA: When was it?\nB: It was last summer.",
     funFact:"支持率 (shijiritsu, approval rating) is one of the most watched political numbers in Japan. NHK and major newspapers conduct monthly しじりつ polls. A prime minister whose しじりつ drops below 30% is considered in danger. Cabinet reshuffles are often timed to boost しじりつ. The number dominates political commentary."},

    {type:"teach", trg:"ぎろん", src:"debate / discussion / argument", pos:"noun", gender:null,
     note:"Kanji: 議論. ぎろんする = to debate/discuss.\nぎろんをよぶ = to spark debate.",
     example:"A: このテーマについてぎろんしましょう。\nB: まず、おたがいのいけんをのべましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Let us debate this theme.\nB: First, let us state each other's opinions.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"議論 uses 議 (discuss) and 論 (theory/argument). While Japanese culture values harmony, ぎろん is respected in academic and political contexts. The Diet (国会, kokkai) is called 'the place of discussion.' However, Japanese ぎろん tends to be more structured and less combative than Western-style debates. Personal attacks during ぎろん are considered poor form."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響. えいきょうする = to influence.\nえいきょうをあたえる = to have an impact on.",
     example:"A: ちきゅうおんだんかはせかいちゅうにえいきょうをあたえています。\nB: にほんもたいふうがふえていますね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Global warming is having an impact around the world.\nB: Japan is also seeing more typhoons.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"影響 combines 影 (shadow) and 響 (echo/reverberate). The metaphor is powerful: influence spreads like a shadow and echoes like sound. The word is essential in academic and news contexts. えいきょうりょく (influence power) describes a person's or organization's ability to affect others. Social media influencers in Japan are called インフルエンサー."},

    {type:"tip", title:"Expressing Opinions Politely",
     text:"Strong agreement:\nさんせいです = I agree\nまったくそのとおりです = exactly right\n\nMild agreement:\nそうですね = I see / yes\nたしかにそうかもしれません = indeed, that may be so\n\nNeutral:\nなるほど = I see (understanding)\nいちがいにはいえません = one cannot say categorically\n\nMild disagreement:\nそうかもしれませんが = that may be so, but...\nすこしちがうかもしれません = it might be slightly different\n\nStrong disagreement:\nはんたいです = I oppose\nそれはちがうとおもいます = I think that is wrong\n\nNote: Even strong disagreement is softened with とおもいます (I think)."},

    {type:"teach", trg:"しゅちょう", src:"claim / assertion / argument", pos:"noun", gender:null,
     note:"Kanji: 主張. しゅちょうする = to assert/claim.\nStronger than いけん, implies advocacy.",
     example:"A: かれのしゅちょうにはこんきょがあります。\nB: データにもとづいたしゅちょうはせっとくりょくがありますね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: His claim has evidence behind it.\nB: Arguments based on data are persuasive.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"主張 uses 主 (main/master) and 張 (stretch/extend). A しゅちょう is not just an opinion but an actively promoted position. In academic papers, the writer's しゅちょう must be clearly stated and defended with evidence. In politics, parties' しゅちょう are published in manifestos (マニフェスト). Asserting a strong しゅちょう in Japanese requires careful supporting logic."},

    {type:"teach", trg:"こんきょ", src:"basis / grounds / evidence", pos:"noun", gender:null,
     note:"Kanji: 根拠. こんきょがある = to have evidence.\nかがくてきこんきょ = scientific evidence.",
     example:"A: そのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさけっかです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What is the basis for that claim?\nB: Recent survey results.\nA: How long did it take?\nB: About two hours.",
     funFact:"根拠 combines 根 (root) and 拠 (base/depend on). Like a tree needs roots, arguments need こんきょ. In Japanese debate culture, こんきょのないしゅちょう (claims without evidence) are dismissed. The phrase こんきょにもとづいて (based on evidence) is the gold standard for persuasion in academic, legal, and journalistic contexts."},

    {type:"fb", s:"このもんだいについてよろんは{1}います。\n(Public opinion is divided on this issue.)", a:"わかれて", opts:["わかれて","あつまって","きまって","まとまって"], sSrc:"Public opinion is divided on this issue.",
     hint:"The verb meaning 'to be divided/split' in the て-form."},

    {type:"mc", q:"しじりつ means:", opts:["Approval rating / support rate","Election result","Public opinion","Survey method"], ans:"Approval rating / support rate",
     hint:"しじ (s...) + りつ (r...) creates the compound for how much backing something has."},

    {type:"match", pairs:[{trg:"さんせい",src:"agreement/approval"},{trg:"はんたい",src:"opposition"},{trg:"しゅちょう",src:"claim/assertion"},{trg:"こんきょ",src:"basis/evidence"}]},

    {type:"fb", s:"ちきゅうおんだんかはせかいちゅうに{1}をあたえています。\n(Global warming is having an impact around the world.)", a:"えいきょう", opts:["えいきょう","いけん","ぎろん","ちょうさ"], sSrc:"Global warming is having an impact around the world.",
     hint:"The noun meaning influence/impact, using the kanji for shadow and echo."},

    {type:"mc", q:"Japanese opinions are typically softened with:", opts:["とおもいます (I think)","ぜったいに (absolutely)","かならず (certainly)","もちろん (of course)"], ans:"とおもいます (I think)",
     hint:"Even strong views are often hedged with this phrase to maintain conversational harmony."}
  ]
};
export default BATCH5_L_1;
