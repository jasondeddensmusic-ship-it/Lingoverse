// Batch 10 – Unit 17 (B1.2 Passive): Media & Being Reported
const BATCH10_L1 = {
  id:"jav2_u17l_b10_1", title:"メディア", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディア",
     desc:"Learn media and communication vocabulary, including how information is reported using passive structures. Essential for reading news.",
     goals:["Understand news reporting vocabulary","Use passive forms for media events","Discuss information sources"]},

    {type:"teach", trg:"報道(ほうどう)する", src:"to report (news)", pos:"verb", gender:null,
     note:"報道(ほうどう) = news report. 報道(ほうどう)される = to be reported.\n報道(ほうどう)機関(きかん) = news organization.",
     example:"A: 事件(じけん)がテレビで報道(ほうどう)されました。\nB: 新聞(しんぶん)にも載(の)っていましたね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The incident was reported on TV.\nB: It was in the newspaper too.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"報道(ほうどう) (報道) covers all forms of news reporting. Japanese 報道(ほうどう) is known for respectful coverage and avoiding graphic content. NHK, Japan's public broadcaster, is considered the most neutral. The phrase 報道(ほうどう)の自由(じゆう) (freedom of the press) is constitutionally guaranteed."},

    {type:"teach", trg:"記事(きじ)", src:"article (newspaper/magazine)", pos:"noun", gender:null,
     note:"新聞(しんぶん)記事(きじ) = newspaper article.\n記事(きじ)を書(か)く = to write an article.",
     example:"A: 面白(おもしろ)い記事(きじ)を読(よ)みました。\nB: 何(なん)の記事(きじ)ですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I read an interesting article.\nB: What was it about?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"記事(きじ) (記事) quality varies by source. Japanese newspapers include 朝日(あさひ), 毎日(まいにち), 読売(よみうり), 日経(にっけい), and 産経(さんけい), each with distinct political leanings. ネット記事(きじ) (online articles) have exploded but are often less reliable. ファクトチェック (fact-checking) is gaining importance."},

    {type:"teach", trg:"取材(しゅざい)する", src:"to interview / to gather news", pos:"verb", gender:null,
     note:"取材(しゅざい) = news gathering/interview.\n記者(きしゃ) = reporter. 取材(しゅざい)拒否(きょひ) = refusing an interview.",
     example:"A: 記者(きしゃ)に取材(しゅざい)されました。\nB: 何(なに)を聞(き)かれましたか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I was interviewed by a reporter.\nB: What were you asked?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"取材(しゅざい) (取材) is the backbone of journalism. Japanese 記者(きしゃ) (reporters) often belong to 記者(きしゃ)クラブ (press clubs) attached to government agencies. This system ensures access but has been criticized for limiting independent journalism. フリーランス記者(きしゃ) work outside this system."},

    {type:"teach", trg:"発表(はっぴょう)する", src:"to announce / to publish / to present", pos:"verb", gender:null,
     note:"研究(けんきゅう)を発表(はっぴょう)する = to present research.\n記者(きしゃ)会見(かいけん) = press conference.",
     example:"A: 新(あたら)しい政策(せいさく)が発表(はっぴょう)されました。\nB: 内容(ないよう)は何(なん)ですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: A new policy was announced.\nB: What is the content?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"発表(はっぴょう) (発表) covers everything from school presentations to government announcements. Japanese students practice 発表(はっぴょう) from elementary school, building public speaking skills. In business, プレゼンテーション (presentation) is often called 発表(はっぴょう). 記者(きしゃ)会見(かいけん) (press conferences) are formal 発表(はっぴょう) events."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"影響(えいきょう)を与(あた)える = to have an influence.\n影響(えいきょう)を受(う)ける = to be influenced.",
     example:"A: 台風(たいふう)の影響(えいきょう)で学校(がっこう)が休(やす)みです。\nB: 安全(あんぜん)が第一(だいいち)ですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: School is closed due to the typhoon's impact.\nB: Safety comes first.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"影響(えいきょう) (影響) is used constantly in news and business. 悪(わる)い影響(えいきょう) (bad influence) and いい影響(えいきょう) (good influence) describe effects on society. The phrase 影響力(えいきょうりょく)のある人(ひと) means 'influential person.' Social media has increased individual 影響力(えいきょうりょく) dramatically."},

    {type:"teach", trg:"世論(よろん)", src:"public opinion", pos:"noun", gender:null,
     note:"世論(よろん)調査(ちょうさ) = public opinion poll.\n世論(せろん) is an alternative reading.",
     example:"A: 世論(よろん)調査(ちょうさ)の結果(けっか)が出(で)ました。\nB: 支持率(しじりつ)はどうでしたか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The public opinion poll results are out.\nB: What was the approval rating?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"世論(よろん) (世論) polls are conducted frequently in Japan, especially regarding political 支持率(しじりつ) (approval ratings). Major newspapers each conduct their own 世論(よろん)調査(ちょうさ) monthly. Results can vary significantly by polling method. 世論(よろん) shapes policy in Japan's democracy."},

    {type:"teach", trg:"噂(うわさ)", src:"rumor / gossip", pos:"noun", gender:null,
     note:"噂(うわさ)を聞(き)く = to hear a rumor.\n噂(うわさ)になる = to become a topic of gossip.",
     example:"A: その噂(うわさ)は本当(ほんとう)ですか？\nB: たぶんデマだと思(おも)います。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Is that rumor true?\nB: I think it is probably misinformation.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"噂(うわさ) (噂) spreads quickly in Japanese communities. The proverb 噂(うわさ)をすればかげ means 'speak of the devil.' In the social media age, デマ (false rumors) can cause serious harm. During disasters, authorities warn against デマ spreading. フェイクニュース is the modern term for organized misinformation."},

    {type:"teach", trg:"取(と)り上(あ)げる", src:"to take up / to cover (a topic)", pos:"verb", gender:null,
     note:"メディアが取(と)り上(あ)げる = media covers (a topic).\n問題(もんだい)を取(と)り上(あ)げる = to address a problem.",
     example:"A: テレビで取(と)り上(あ)げられていましたね。\nB: 大(おお)きなニュースになりましたね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: It was covered on TV.\nB: It became big news.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"取(と)り上(あ)げる (取り上げる) literally means 'to pick up and raise.' When media 取(と)り上(あ)げる a topic, it brings public attention. The passive 取(と)り上(あ)げられる (to be covered/featured) is very common in news contexts. Being テレビに取(と)り上(あ)げられる can instantly make something famous in Japan."},

    {type:"mc", q:"What is a 記者(きしゃ)クラブ?", opts:["A press club attached to government agencies","A journalism school","A newspaper company","A TV station"], ans:"A press club attached to government agencies",
     hint:"This uniquely Japanese system provides reporters with access but has been criticized for limiting independent journalism."},

    {type:"fb", s:"台風(たいふう)の{1}で学校(がっこう)が休(やす)みです。\n(School is closed due to the typhoon's impact.)", a:"影響(えいきょう)", opts:["影響(えいきょう)","報道(ほうどう)","世論(よろん)","うわさ"], sSrc:"School is closed due to the typhoon's impact.",
     hint:"This word describes the effect or impact that something has on a situation."},

    {type:"match", pairs:[
      {trg:"報道(ほうどう)", src:"news report"},
      {trg:"記事(きじ)", src:"article"},
      {trg:"影響(えいきょう)", src:"influence"},
      {trg:"噂(うわさ)", src:"rumor"}
    ]},

    {type:"mc", q:"What does デマ mean in Japanese?", opts:["False rumor / misinformation","Democracy","Demonstration","Demand"], ans:"False rumor / misinformation",
     hint:"This word, from German 'Demagogie,' refers to deliberately spread f... information."}
  ]
};
export default BATCH10_L1;
