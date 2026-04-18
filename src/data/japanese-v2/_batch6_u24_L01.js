// Batch 6 – Unit 24 (B1.3 Advanced Connectors): Formal Writing Expressions
const BATCH6_L1 = {
  id:"jav2_u24l_b6_1", title:"文章(ぶんしょう)表現(ひょうげん)", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"文章(ぶんしょう)表現(ひょうげん)",
     desc:"Learn formal written expressions and set phrases used in letters, emails, and official documents. These are essential for JLPT N2 reading and professional communication in Japanese.",
     goals:["Use formal connectors for written communication","Master set phrases for letters and emails","Distinguish spoken vs written register"]},

    {type:"teach", trg:"例(たと)えば", src:"for example", pos:"conj", gender:null,
     note:"Used to introduce examples in both speech and writing.\n例(たと)えばこんなこと = for example, things like this.",
     example:"A: 日本(にほん)の伝統的(でんとうてき)な食(た)べ物(もの)は何(なに)がありますか？\nB: 例(たと)えば、寿司(すし)や天(てん)ぷらが有名(ゆうめい)です。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: What traditional Japanese foods are there?\nB: For example, sushi and tempura are famous.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"例(たと)えば is essential in academic and professional communication. The kanji 例 (example) appears in 例文(れいぶん) (example sentence), 実例(じつれい) (actual example), and 例外(れいがい) (exception). JLPT reading passages use 例(たと)えば as a signal that concrete examples will follow a general statement."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
     note:"Used to summarize or rephrase. つまりこういうことです = in other words, it is like this.\nLess formal than すなわち.",
     example:"A: このプロジェクトは予算(よさん)が足(た)りません。つまり、中止(ちゅうし)するしかありません。\nB: 残念(ざんねん)ですが、しかたがないですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: This project does not have enough budget. In other words, we have no choice but to cancel.\nB: It is unfortunate, but it cannot be helped.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"つまり signals that a simplification or conclusion is coming. In conversations, it helps the listener understand the core point. つまるところ (when it comes down to it) is a more formal variant. JLPT tests love to ask what つまり introduces: the main point or summary."},

    {type:"teach", trg:"ただし", src:"however / provided that", pos:"conj", gender:null,
     note:"Introduces a condition or exception.\nUsed in contracts, rules, and formal writing.",
     example:"A: このサービスは無料(むりょう)です。ただし、学生(がくせい)に限(かぎ)ります。\nB: 学生証(がくせいしょう)が必要(ひつよう)ですか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This service is free. However, it is limited to students.\nB: Is a student ID required?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ただし is the formal exception-maker. In legal documents and contracts, ただし書(が)き (proviso clause) introduces conditions. Signs often use it: 入場(にゅうじょう)無料(むりょう)、ただし予約(よやく)が必要(ひつよう) (entry free, provided reservation required). It is more restrictive than しかし (however)."},

    {type:"teach", trg:"さらに", src:"furthermore / additionally / even more", pos:"adv", gender:null,
     note:"Adds emphasis or additional information.\nさらに言(い)うと = furthermore.",
     example:"A: 今日(きょう)は寒(さむ)いです。さらに、雨(あめ)も降(ふ)っています。\nB: 最悪(さいあく)の天気(てんき)ですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: It is cold today. Furthermore, it is also raining.\nB: The worst weather.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"さらに escalates information: each addition is more significant. In news: 被害(ひがい)はさらに拡大(かくだい)している (damage is expanding even further). In advertising: さらにお得(とく) (even more of a bargain). The kanji 更 means 'renew/change,' capturing the idea of going beyond the current state."},

    {type:"teach", trg:"確(たし)かに", src:"certainly / indeed / it is true that", pos:"adv", gender:null,
     note:"Used to acknowledge a point before adding your own.\n確(たし)かにそうですが... = That is true, but...",
     example:"A: 日本語(にほんご)は難(むずか)しいですか？\nB: 確(たし)かに難(むずか)しいですが、面白(おもしろ)いです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Is Japanese difficult?\nB: It is certainly difficult, but interesting.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"確(たし)かに is a powerful conversation tool. It acknowledges the other person's point (building rapport) before adding your perspective. The pattern 確(たし)かに...でも/しかし (certainly...but) is diplomatic disagreement. In debates, starting with 確(たし)かに shows intellectual honesty."},

    {type:"mc", q:"ただし is used to:", opts:["Introduce a condition or exception","Give an example","Summarize a point","Express agreement"], ans:"Introduce a condition or exception",
     hint:"This formal connector restricts or qualifies the previous statement."},

    {type:"teach", trg:"まとめる", src:"to summarize / to compile / to organize", pos:"verb", gender:null,
     note:"Group 2 verb. 意見(いけん)をまとめる = to compile opinions.",
     example:"A: 今日(きょう)の会議(かいぎ)の内容(ないよう)をまとめてください。\nB: はい、議事録(ぎじろく)を作(つく)ります。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Please summarize today's meeting content.\nB: Yes, I will create the minutes.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"まとめる is essential in Japanese work culture. まとめ役(やく) (the person who summarizes/coordinates) is a valued role. Bloggers create まとめサイト (summary sites) compiling information. The phrase 話(はなし)をまとめると (to summarize the discussion) signals a conclusion is coming."},

    {type:"teach", trg:"述(の)べる", src:"to state / to express / to mention", pos:"verb", gender:null,
     note:"Group 2 verb. Formal. 意見(いけん)を述(の)べる = to state an opinion.",
     example:"A: 最後(さいご)に一言(ひとこと)述(の)べさせてください。\nB: どうぞ。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please let me state one final word.\nB: Please go ahead.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"述(の)べる is the formal way to 'say' in written and academic Japanese. In essays, the pattern 以下(いか)に述(の)べる (as stated below) and 上(じょう)に述(の)べたとおり (as mentioned above) structure arguments. The kanji 述 suggests 'following a path' of logical expression."},

    {type:"teach", trg:"基(もと)づく", src:"to be based on", pos:"verb", gender:null,
     note:"Group 1 verb. 事実(じじつ)に基(もと)づく = based on facts.",
     example:"A: この報告書(ほうこくしょ)はデータに基(もと)づいています。\nB: 信頼(しんらい)できる内容(ないよう)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: This report is based on data.\nB: It is trustworthy content.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"基(もと)づく is indispensable in academic writing. 事実(じじつ)に基(もと)づいて (based on facts), 法律(ほうりつ)に基(もと)づいて (based on law), 経験(けいけん)に基(もと)づいて (based on experience). The kanji 基 (foundation) appears in 基本(きほん) (basics) and 基礎(きそ) (foundation). Arguments must 基(もと)づく something to have credibility."},

    {type:"teach", trg:"明(あき)らか", src:"clear / obvious / evident", pos:"adj", gender:null,
     note:"Na-adjective. 明(あき)らかに = clearly/obviously.",
     example:"A: このデータから明(あき)らかなことが一(ひと)つあります。\nB: 何(なん)でしょうか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: There is one thing that is clear from this data.\nB: What is it?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"明(あき)らか uses the kanji 明 (bright/clear), also found in 明(あか)るい (bright) and 説明(せつめい) (explanation). In research papers, 明(あき)らかにする (to make clear/to reveal) is the goal: 'This study 明(あき)らかにした that...' Academic Japanese relies heavily on this word."},

    {type:"teach", trg:"示(しめ)す", src:"to show / to indicate / to demonstrate", pos:"verb", gender:null,
     note:"Group 1 verb. データが示(しめ)すように = as the data shows.",
     example:"A: グラフが人口(じんこう)減少(げんしょう)を示(しめ)しています。\nB: 深刻(しんこく)な問題(もんだい)ですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The graph shows population decline.\nB: It is a serious problem.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"示(しめ)す is the academic verb for 'showing' evidence. In presentations: このグラフが示(しめ)すように (as this graph shows). The kanji 示 originally depicted an altar showing offerings to gods. Today it 'shows' data and evidence. 示(しめ)す is more formal than 見(み)せる (to show physically)."},

    {type:"fb", s:"日本(にほん)の伝統的(でんとうてき)な食(た)べ物(もの)、{1}寿司(すし)や天(てん)ぷらが有名(ゆうめい)です。\n(Traditional Japanese food, for example sushi and tempura are famous.)", a:"たとえば", opts:["たとえば","つまり","ただし","さらに"], sSrc:"Traditional Japanese food, for example sushi and tempura are famous.",
     hint:"This connector introduces specific examples of a general category."},

    {type:"teach", trg:"複雑(ふくざつ)", src:"complex / complicated", pos:"adj", gender:null,
     note:"Na-adjective. 複雑(ふくざつ)な問題(もんだい) = a complex problem.",
     example:"A: 日本語(にほんご)の敬語(けいご)は複雑(ふくざつ)ですね。\nB: そうですね。でも少(すこ)しずつ慣(な)れます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Japanese keigo is complex, isn't it?\nB: Yes. But you get used to it little by little.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"複雑(ふくざつ) combines 複 (multiple/duplicate) and 雑 (miscellaneous). It describes systems with many interacting parts. 複雑(ふくざつ)な気持(きも)ち (complicated feelings), 複雑(ふくざつ)な関係(かんけい) (complicated relationship), 複雑(ふくざつ)な仕組(しく)み (complex mechanism). The word itself is 複雑(ふくざつ) to write."},

    {type:"mc", q:"つまり is used to:", opts:["Rephrase or summarize the main point","Add an exception","Give an example","Express surprise"], ans:"Rephrase or summarize the main point",
     hint:"This word signals that a simpler explanation or conclusion follows."},

    {type:"match", pairs:[
      {trg:"例(たと)えば", src:"for example"},
      {trg:"つまり", src:"in other words"},
      {trg:"ただし", src:"however / provided that"},
      {trg:"さらに", src:"furthermore"},
      {trg:"確(たし)かに", src:"certainly / indeed"}
    ]},

    {type:"fb", s:"この報告書(ほうこくしょ)はデータに{1}います。\n(This report is based on data.)", a:"もとづいて", opts:["もとづいて","しめして","のべて","まとめて"], sSrc:"This report is based on data.",
     hint:"The て-form of the verb meaning 'to be based on' or 'to be founded upon.'"},

    {type:"mc", q:"明(あき)らか means:", opts:["Clear or obvious","Complex or complicated","Important or precious","Difficult or hard"], ans:"Clear or obvious",
     hint:"This adjective describes something that is plainly evident."}
  ,{type:"match",pairs:[{trg:"まとめる",src:"to summarize / to compile / to organize"},{trg:"述(の)べる",src:"to state / to express / to mention"},{trg:"基(もと)づく",src:"to be based on"},{trg:"明(あき)らか",src:"clear / obvious / evident"},{trg:"示(しめ)す",src:"to show / to indicate / to demonstrate"},{trg:"複雑(ふくざつ)",src:"complex / complicated"}]}]
};
export default BATCH6_L1;
