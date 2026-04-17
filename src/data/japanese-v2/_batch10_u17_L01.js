// Batch 10 – Unit 17 (B1.2 Passive): Media & Being Reported
const BATCH10_L1 = {
  id:"jav2_u17l_b10_1", title:"メディア", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディア",
     desc:"Learn media and communication vocabulary, including how information is reported using passive structures. Essential for reading news.",
     goals:["Understand news reporting vocabulary","Use passive forms for media events","Discuss information sources"]},

    {type:"teach", trg:"ほうどうする", src:"to report (news)", pos:"verb", gender:null,
     note:"ほうどう = news report. ほうどうされる = to be reported.\nほうどうきかん = news organization.",
     example:"A: じけんがテレビでほうどうされました。\nB: しんぶんにものっていましたね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The incident was reported on TV.\nB: It was in the newspaper too.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ほうどう (報道) covers all forms of news reporting. Japanese ほうどう is known for respectful coverage and avoiding graphic content. NHK, Japan's public broadcaster, is considered the most neutral. The phrase ほうどうのじゆう (freedom of the press) is constitutionally guaranteed."},

    {type:"teach", trg:"きじ", src:"article (newspaper/magazine)", pos:"noun", gender:null,
     note:"しんぶんきじ = newspaper article.\nきじをかく = to write an article.",
     example:"A: おもしろいきじをよみました。\nB: なんのきじですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I read an interesting article.\nB: What was it about?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"きじ (記事) quality varies by source. Japanese newspapers include あさひ, まいにち, よみうり, にっけい, and さんけい, each with distinct political leanings. ネットきじ (online articles) have exploded but are often less reliable. ファクトチェック (fact-checking) is gaining importance."},

    {type:"teach", trg:"しゅざいする", src:"to interview / to gather news", pos:"verb", gender:null,
     note:"しゅざい = news gathering/interview.\nきしゃ = reporter. しゅざいきょひ = refusing an interview.",
     example:"A: きしゃにしゅざいされました。\nB: なにをきかれましたか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I was interviewed by a reporter.\nB: What were you asked?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"しゅざい (取材) is the backbone of journalism. Japanese きしゃ (reporters) often belong to きしゃクラブ (press clubs) attached to government agencies. This system ensures access but has been criticized for limiting independent journalism. フリーランスきしゃ work outside this system."},

    {type:"teach", trg:"はっぴょうする", src:"to announce / to publish / to present", pos:"verb", gender:null,
     note:"けんきゅうをはっぴょうする = to present research.\nきしゃかいけん = press conference.",
     example:"A: あたらしいせいさくがはっぴょうされました。\nB: ないようはなんですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: A new policy was announced.\nB: What is the content?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"はっぴょう (発表) covers everything from school presentations to government announcements. Japanese students practice はっぴょう from elementary school, building public speaking skills. In business, プレゼンテーション (presentation) is often called はっぴょう. きしゃかいけん (press conferences) are formal はっぴょう events."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"えいきょうをあたえる = to have an influence.\nえいきょうをうける = to be influenced.",
     example:"A: たいふうのえいきょうでがっこうがやすみです。\nB: あんぜんがだいいちですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: School is closed due to the typhoon's impact.\nB: Safety comes first.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"えいきょう (影響) is used constantly in news and business. わるいえいきょう (bad influence) and いいえいきょう (good influence) describe effects on society. The phrase えいきょうりょくのあるひと means 'influential person.' Social media has increased individual えいきょうりょく dramatically."},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"よろんちょうさ = public opinion poll.\nせろん is an alternative reading.",
     example:"A: よろんちょうさのけっかがでました。\nB: しじりつはどうでしたか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The public opinion poll results are out.\nB: What was the approval rating?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"よろん (世論) polls are conducted frequently in Japan, especially regarding political しじりつ (approval ratings). Major newspapers each conduct their own よろんちょうさ monthly. Results can vary significantly by polling method. よろん shapes policy in Japan's democracy."},

    {type:"teach", trg:"うわさ", src:"rumor / gossip", pos:"noun", gender:null,
     note:"うわさをきく = to hear a rumor.\nうわさになる = to become a topic of gossip.",
     example:"A: そのうわさはほんとうですか？\nB: たぶんデマだとおもいます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Is that rumor true?\nB: I think it is probably misinformation.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"うわさ (噂) spreads quickly in Japanese communities. The proverb うわさをすればかげ means 'speak of the devil.' In the social media age, デマ (false rumors) can cause serious harm. During disasters, authorities warn against デマ spreading. フェイクニュース is the modern term for organized misinformation."},

    {type:"teach", trg:"とりあげる", src:"to take up / to cover (a topic)", pos:"verb", gender:null,
     note:"メディアがとりあげる = media covers (a topic).\nもんだいをとりあげる = to address a problem.",
     example:"A: テレビでとりあげられていましたね。\nB: おおきなニュースになりましたね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: It was covered on TV.\nB: It became big news.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"とりあげる (取り上げる) literally means 'to pick up and raise.' When media とりあげる a topic, it brings public attention. The passive とりあげられる (to be covered/featured) is very common in news contexts. Being テレビにとりあげられる can instantly make something famous in Japan."},

    {type:"mc", q:"What is a きしゃクラブ?", opts:["A press club attached to government agencies","A journalism school","A newspaper company","A TV station"], ans:"A press club attached to government agencies",
     hint:"This uniquely Japanese system provides reporters with access but has been criticized for limiting independent journalism."},

    {type:"fb", s:"たいふうの{1}でがっこうがやすみです。\n(School is closed due to the typhoon's impact.)", a:"えいきょう", opts:["えいきょう","ほうどう","よろん","うわさ"], sSrc:"School is closed due to the typhoon's impact.",
     hint:"This word describes the effect or impact that something has on a situation."},

    {type:"match", pairs:[
      {trg:"ほうどう", src:"news report"},
      {trg:"きじ", src:"article"},
      {trg:"えいきょう", src:"influence"},
      {trg:"うわさ", src:"rumor"}
    ]},

    {type:"mc", q:"What does デマ mean in Japanese?", opts:["False rumor / misinformation","Democracy","Demonstration","Demand"], ans:"False rumor / misinformation",
     hint:"This word, from German 'Demagogie,' refers to deliberately spread f... information."}
  ]
};
export default BATCH10_L1;
