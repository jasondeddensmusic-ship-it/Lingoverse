// Unit 24 Batch 2 Lesson 3: 文章(ぶんしょう)構成(こうせい) (Essay Structure Connectors)
const BATCH2_L_3 = {
  id:"jav2_u24l_b2_3", title:"文章(ぶんしょう)構成(こうせい)", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"文章(ぶんしょう)構成(こうせい)",
     desc:"Academic Japanese requires specific connectors for structuring essays and arguments. Learn patterns for exemplifying, summarizing, and qualifying statements. Mastering these connectors lets you write structured paragraphs and give organized presentations at the B1 level.",
     goals:["Use たとえば for examples","Use ようするに for summaries","Use かならずしも for qualified statements"]},

    {type:"teach", trg:"たとえば", src:"for example / for instance", pos:"conj", gender:null,
     note:"Introduces specific examples to support a point.\nUsed at the start of a sentence or clause.",
     example:"A: 日本(にほん)にはおもしろい文化(ぶんか)があります。たとえば、花見(はなみ)やお祭(まつ)りです。\nB: 私(わたし)も花見(はなみ)に行(い)ってみたいです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Japan has interesting culture. For example, cherry blossom viewing and festivals.\nB: I also want to try cherry blossom viewing.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"たとえば uses the verb たとえる (to compare/liken). Literally 'if we compare,' it introduces concrete examples. In academic writing, たとえば signals supporting evidence. Japanese presentations often follow a pattern: general statement, たとえば, specific examples, then conclusion. It is the most common exemplification connector."},

    {type:"teach", trg:"ようするに", src:"in short / to sum up / the point is", pos:"conj", gender:null,
     note:"Summarizes complex information into a key point.\nMore direct than つまり. Can sound blunt.",
     example:"A: 時間(じかん)もお金(かね)も足(た)りません。ようするに、この計画(けいかく)は無理(むり)です。\nB: 別(べつ)の方法(ほうほう)を考(かんが)えましょう。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: There is not enough time or money. In short, this plan is impossible.\nB: Let us think of another method.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ようするに breaks down as 要(よう) (essential) + する + に. 'Getting to the essential point.' It is more blunt than つまり (in other words) and can sound dismissive if overused. In business, ようするに cuts through long explanations to reach the bottom line. Some Japanese speakers consider it slightly rude in formal settings because it implies the previous explanation was too long."},

    {type:"teach", trg:"そもそも", src:"in the first place / to begin with / fundamentally", pos:"conj", gender:null,
     note:"Questions or revisits the basic premise of a discussion.\nそもそもなぜ？ = why in the first place?",
     example:"A: そもそも、なぜこのプロジェクトを始(はじ)めたのですか？\nB: 社長(しゃちょう)の発想(はっそう)から始(はじ)まりました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: In the first place, why did we start this project?\nB: It started from the president's idea.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"そもそも is written 抑 in kanji but almost always in hiragana. It brings the discussion back to fundamentals, often challenging assumptions. In debates, そもそも can be powerful: it forces everyone to reconsider the starting point. Japanese philosophers and essayists use it to question conventional wisdom."},

    {type:"mc", q:"ようするに signals that the speaker is about to:", opts:["Add more details","Give a specific example","Summarize the key point directly","Ask a question"], ans:"Summarize the key point directly",
     hint:"This connector compresses information to its essential meaning, sometimes bluntly."},

    {type:"teach", trg:"言(い)い換(か)えれば", src:"to put it another way / in other words", pos:"conj", gender:null,
     note:"Rephrases for clarity. More natural than すなわち in speech.\n言(い)い換(か)えると also used.",
     example:"A: 彼(かれ)は多国籍(たこくせき)です。言(い)い換(か)えれば、二(ふた)つの国(くに)の国籍(こくせき)を持(も)っています。\nB: 二重(にじゅう)国籍(こくせき)ですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: He has multiple nationalities. In other words, he holds citizenship in two countries.\nB: Dual citizenship.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"言い換えれば literally means 'if one rephrases it.' It is a conditional form of 言(い)い換(か)える (to rephrase). Unlike つまり (which summarizes) or すなわち (which defines), 言(い)い換(か)えれば explicitly signals a restatement using different words. It is the most transparent rephrasing connector."},

    {type:"teach", trg:"さらに", src:"furthermore / additionally / even more", pos:"conj", gender:null,
     note:"Adds a point that intensifies or extends the previous one.\nMore formal than それに. Stronger than そのうえ.",
     example:"A: 人口(じんこう)が減(へ)っています。さらに、高齢化(こうれいか)も進(すす)んでいます。\nB: 社会的(しゃかいてき)な対策(たいさく)が急務(きゅうむ)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The population is declining. Furthermore, aging is also progressing.\nB: Social countermeasures are urgently needed.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"さらに (更に) means 'even more' or 'in addition.' It escalates the argument: point A is true, and さらに, point B makes it even more significant. In academic writing, さらに builds momentum in an argument. It is stronger than そのうえ (moreover) because it implies intensification, not just addition."},

    {type:"teach", trg:"発想(はっそう)", src:"idea / concept / way of thinking", pos:"noun", gender:null,
     note:"発想力(はっそうりょく) = creativity / power of ideas.\n発想(はっそう)の転換(てんかん) = a shift in thinking.",
     example:"A: この製品(せいひん)はユニークな発想(はっそう)から生(う)まれました。\nB: 発想力(はっそうりょく)がすばらしいですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: This product was born from a unique idea.\nB: The creativity is wonderful.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"発想 combines 発(はっ) (emit/start) and 想(そう) (think/imagine). It refers to the moment an idea springs forth. Japanese business culture values 発想(はっそう)の転換(てんかん) (paradigm shift in thinking). The famous book by Edward de Bono on lateral thinking was very influential in Japan, where it was framed as 発想力(はっそうりょく)の鍛(きた)え方(かた) (how to train creative thinking)."},

    {type:"fb", s:"人口(じんこう)が減(へ)っています。{1}、高齢化(こうれいか)も進(すす)んでいます。\n(The population is declining. Furthermore, aging is also progressing.)", a:"さらに", opts:["さらに","ようするに","そもそも","たとえば"], sSrc:"The population is declining. Furthermore, aging is also progressing.",
     hint:"The connector that adds an intensifying point on top of the previous statement."},

    {type:"teach", trg:"ぎゃくに", src:"conversely / on the contrary", pos:"conj", gender:null,
     note:"漢字(かんじ): 逆(ぎゃく)に. Introduces the reverse perspective.\n逆(ぎゃく)のこともいえる = the reverse can also be said.",
     example:"A: 勉強(べんきょう)すればするほど自信(じしん)がつきます。ぎゃくに、しないと不安(ふあん)になります。\nB: たしかにそうですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The more you study, the more confidence you gain. Conversely, if you do not, you become anxious.\nB: That is certainly true.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"逆(ぎゃく) means 'reverse/opposite.' ぎゃくに flips the perspective entirely. Unlike いっぽう (which presents a parallel view), ぎゃくに states the direct opposite. In logic, it introduces the contrapositive or converse of a statement. Japanese debates use it to show both sides of a coin."},

    {type:"teach", trg:"自信(じしん)", src:"confidence / self-confidence", pos:"noun", gender:null,
     note:"自信(じしん)がある = to have confidence.\n自信(じしん)を持(も)つ = to hold confidence.",
     example:"A: もっと自信(じしん)を持(も)ってください。\nB: ありがとう、がんばります。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Please have more confidence.\nB: Thank you, I will do my best.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"自信 uses 自(じ) (self) and 信(しん) (believe/trust). Self-confidence is literally 'believing in yourself.' Japanese culture has a complex relationship with 自信(じしん): too much appears arrogant (自慢(じまん)), too little is endearing but limiting. The phrase 自信満々(じしんまんまん) (full of confidence) can be both positive and slightly negative depending on context."},

    {type:"teach", trg:"不安(ふあん)", src:"anxiety / worry / unease", pos:"noun", gender:null,
     note:"不安(ふあん)になる = to become anxious.\n不安感(ふあんかん) = feeling of anxiety.",
     example:"A: 将来(しょうらい)に不安(ふあん)を感(かん)じています。\nB: 誰(だれ)でもそういうときがありますよ。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I feel anxious about the future.\nB: Everyone has times like that.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"不安 combines 不(ふ) (not) and 安(あん) (safe/peaceful). It is 'not at peace.' Japan has high rates of anxiety disorders, and 不安(ふあん) is a frequently discussed topic in mental health conversations. The word 不安症(ふあんしょう) (anxiety disorder) has become more openly discussed as Japan's mental health awareness grows."},

    {type:"mc", q:"そもそも is used to:", opts:["Add a supporting example","Question the fundamental premise","Summarize the main point","Express agreement"], ans:"Question the fundamental premise",
     hint:"This connector brings the discussion back to basics, questioning why things started this way."},

    {type:"fb", s:"彼(かれ)は多国籍(たこくせき)です。{1}、二(ふた)つの国(くに)の国籍(こくせき)を持(も)っています。\n(He has multiple nationalities. In other words, he holds citizenship in two countries.)", a:"言(い)い換(か)えれば", opts:["言(い)い換(か)えれば","たとえば","さらに","ぎゃくに"], sSrc:"He has multiple nationalities. In other words, he holds citizenship in two countries.",
     hint:"The rephrasing connector that says the same thing in different words."},

    {type:"match", pairs:[{trg:"たとえば",src:"for example"},{trg:"ようするに",src:"in short"},{trg:"そもそも",src:"in the first place"},{trg:"さらに",src:"furthermore"}]},

    {type:"teach", trg:"にもかかわらず", src:"despite / nevertheless", pos:"conj", gender:null,
     note:"Very formal concessive. Attaches to nouns, verbs, adjectives.\n努力(どりょく)にもかかわらず = despite effort.",
     example:"A: 警告(けいこく)にもかかわらず、彼(かれ)は行(い)った。\nB: 勇気(ゆうき)があるのか、無謀(むぼう)なのか。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Despite the warning, he went.\nB: Is it courage or recklessness?\nA: How was it?\nB: It was very good.",
     funFact:"にもかかわらず is one of the longest connectors in Japanese. It attaches directly to whatever it modifies. In formal writing, it creates elegant concessive clauses. The pattern is: reason that should prevent X + にもかかわらず + X happened anyway. This gap between expectation and reality is what gives the connector its rhetorical power."},

    {type:"fb", s:"努力(どりょく){1}、結果(けっか)は出(で)ませんでした。\n(Despite effort, results did not come.)", a:"にもかかわらず", opts:["にもかかわらず","だから","ようするに","たとえば"], sSrc:"Despite effort, results did not come.",
     hint:"The very formal connector expressing that something happened despite a contrary condition."},

    {type:"match", pairs:[{trg:"言(い)い換(か)えれば",src:"in other words"},{trg:"ぎゃくに",src:"conversely"},{trg:"自信(じしん)",src:"confidence"},{trg:"不安(ふあん)",src:"anxiety"}]},

    {type:"mc", q:"Which connector would you use to add supporting examples?", opts:["ようするに","さらに","たとえば","ぎゃくに"], ans:"たとえば",
     hint:"This connector introduces concrete instances that illustrate or support a general statement."},
  ]
};
export default BATCH2_L_3;
