// Unit 24 Batch 2 Lesson 3: ぶんしょうこうせい (Essay Structure Connectors)
const BATCH2_L_3 = {
  id:"jav2_u24l_b2_3", title:"ぶんしょうこうせい", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうこうせい",
     desc:"Academic Japanese requires specific connectors for structuring essays and arguments. Learn patterns for exemplifying, summarizing, and qualifying statements. Mastering these connectors lets you write structured paragraphs and give organized presentations at the B1 level.",
     goals:["Use たとえば for examples","Use ようするに for summaries","Use かならずしも for qualified statements"]},

    {type:"teach", trg:"たとえば", src:"for example / for instance", pos:"conj", gender:null,
     note:"Introduces specific examples to support a point.\nUsed at the start of a sentence or clause.",
     example:"A: にほんにはおもしろいぶんかがあります。たとえば、はなみやおまつりです。\nB: わたしもはなみにいってみたいです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Japan has interesting culture. For example, cherry blossom viewing and festivals.\nB: I also want to try cherry blossom viewing.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"たとえば uses the verb たとえる (to compare/liken). Literally 'if we compare,' it introduces concrete examples. In academic writing, たとえば signals supporting evidence. Japanese presentations often follow a pattern: general statement, たとえば, specific examples, then conclusion. It is the most common exemplification connector."},

    {type:"teach", trg:"ようするに", src:"in short / to sum up / the point is", pos:"conj", gender:null,
     note:"Summarizes complex information into a key point.\nMore direct than つまり. Can sound blunt.",
     example:"A: じかんもおかねもたりません。ようするに、このけいかくはむりです。\nB: べつのほうほうをかんがえましょう。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: There is not enough time or money. In short, this plan is impossible.\nB: Let us think of another method.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ようするに breaks down as 要 (essential) + する + に. 'Getting to the essential point.' It is more blunt than つまり (in other words) and can sound dismissive if overused. In business, ようするに cuts through long explanations to reach the bottom line. Some Japanese speakers consider it slightly rude in formal settings because it implies the previous explanation was too long."},

    {type:"teach", trg:"そもそも", src:"in the first place / to begin with / fundamentally", pos:"conj", gender:null,
     note:"Questions or revisits the basic premise of a discussion.\nそもそもなぜ？ = why in the first place?",
     example:"A: そもそも、なぜこのプロジェクトをはじめたのですか？\nB: しゃちょうのはっそうからはじまりました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: In the first place, why did we start this project?\nB: It started from the president's idea.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"そもそも is written 抑 in kanji but almost always in hiragana. It brings the discussion back to fundamentals, often challenging assumptions. In debates, そもそも can be powerful: it forces everyone to reconsider the starting point. Japanese philosophers and essayists use it to question conventional wisdom."},

    {type:"mc", q:"ようするに signals that the speaker is about to:", opts:["Add more details","Give a specific example","Summarize the key point directly","Ask a question"], ans:"Summarize the key point directly",
     hint:"This connector compresses information to its essential meaning, sometimes bluntly."},

    {type:"teach", trg:"いいかえれば", src:"to put it another way / in other words", pos:"conj", gender:null,
     note:"Rephrases for clarity. More natural than すなわち in speech.\nいいかえると also used.",
     example:"A: かれはたこくせきです。いいかえれば、ふたつのくにのこくせきをもっています。\nB: にじゅうこくせきですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: He has multiple nationalities. In other words, he holds citizenship in two countries.\nB: Dual citizenship.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"いいかえれば literally means 'if one rephrases it.' It is a conditional form of いいかえる (to rephrase). Unlike つまり (which summarizes) or すなわち (which defines), いいかえれば explicitly signals a restatement using different words. It is the most transparent rephrasing connector."},

    {type:"teach", trg:"さらに", src:"furthermore / additionally / even more", pos:"conj", gender:null,
     note:"Adds a point that intensifies or extends the previous one.\nMore formal than それに. Stronger than そのうえ.",
     example:"A: じんこうがへっています。さらに、こうれいかもすすんでいます。\nB: しゃかいてきなたいさくがきゅうむですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The population is declining. Furthermore, aging is also progressing.\nB: Social countermeasures are urgently needed.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"さらに (更に) means 'even more' or 'in addition.' It escalates the argument: point A is true, and さらに, point B makes it even more significant. In academic writing, さらに builds momentum in an argument. It is stronger than そのうえ (moreover) because it implies intensification, not just addition."},

    {type:"teach", trg:"はっそう", src:"idea / concept / way of thinking", pos:"noun", gender:null,
     note:"Kanji: 発想. はっそうりょく = creativity / power of ideas.\nはっそうのてんかん = a shift in thinking.",
     example:"A: このせいひんはユニークなはっそうからうまれました。\nB: はっそうりょくがすばらしいですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: This product was born from a unique idea.\nB: The creativity is wonderful.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"発想 combines 発 (emit/start) and 想 (think/imagine). It refers to the moment an idea springs forth. Japanese business culture values はっそうのてんかん (paradigm shift in thinking). The famous book by Edward de Bono on lateral thinking was very influential in Japan, where it was framed as はっそうりょくのきたえかた (how to train creative thinking)."},

    {type:"fb", s:"じんこうがへっています。{1}、こうれいかもすすんでいます。\n(The population is declining. Furthermore, aging is also progressing.)", a:"さらに", opts:["さらに","ようするに","そもそも","たとえば"], sSrc:"The population is declining. Furthermore, aging is also progressing.",
     hint:"The connector that adds an intensifying point on top of the previous statement."},

    {type:"teach", trg:"ぎゃくに", src:"conversely / on the contrary", pos:"conj", gender:null,
     note:"Kanji: 逆に. Introduces the reverse perspective.\nぎゃくのこともいえる = the reverse can also be said.",
     example:"A: べんきょうすればするほどじしんがつきます。ぎゃくに、しないとふあんになります。\nB: たしかにそうですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The more you study, the more confidence you gain. Conversely, if you do not, you become anxious.\nB: That is certainly true.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"逆 means 'reverse/opposite.' ぎゃくに flips the perspective entirely. Unlike いっぽう (which presents a parallel view), ぎゃくに states the direct opposite. In logic, it introduces the contrapositive or converse of a statement. Japanese debates use it to show both sides of a coin."},

    {type:"teach", trg:"じしん", src:"confidence / self-confidence", pos:"noun", gender:null,
     note:"Kanji: 自信. じしんがある = to have confidence.\nじしんをもつ = to hold confidence.",
     example:"A: もっとじしんをもってください。\nB: ありがとう、がんばります。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Please have more confidence.\nB: Thank you, I will do my best.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"自信 uses 自 (self) and 信 (believe/trust). Self-confidence is literally 'believing in yourself.' Japanese culture has a complex relationship with じしん: too much appears arrogant (じまん), too little is endearing but limiting. The phrase じしんまんまん (full of confidence) can be both positive and slightly negative depending on context."},

    {type:"teach", trg:"ふあん", src:"anxiety / worry / unease", pos:"noun", gender:null,
     note:"Kanji: 不安. ふあんになる = to become anxious.\nふあんかん = feeling of anxiety.",
     example:"A: しょうらいにふあんをかんじています。\nB: だれでもそういうときがありますよ。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I feel anxious about the future.\nB: Everyone has times like that.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"不安 combines 不 (not) and 安 (safe/peaceful). It is 'not at peace.' Japan has high rates of anxiety disorders, and ふあん is a frequently discussed topic in mental health conversations. The word ふあんしょう (anxiety disorder) has become more openly discussed as Japan's mental health awareness grows."},

    {type:"mc", q:"そもそも is used to:", opts:["Add a supporting example","Question the fundamental premise","Summarize the main point","Express agreement"], ans:"Question the fundamental premise",
     hint:"This connector brings the discussion back to basics, questioning why things started this way."},

    {type:"fb", s:"かれはたこくせきです。{1}、ふたつのくにのこくせきをもっています。\n(He has multiple nationalities. In other words, he holds citizenship in two countries.)", a:"いいかえれば", opts:["いいかえれば","たとえば","さらに","ぎゃくに"], sSrc:"He has multiple nationalities. In other words, he holds citizenship in two countries.",
     hint:"The rephrasing connector that says the same thing in different words."},

    {type:"match", pairs:[{trg:"たとえば",src:"for example"},{trg:"ようするに",src:"in short"},{trg:"そもそも",src:"in the first place"},{trg:"さらに",src:"furthermore"}]},

    {type:"teach", trg:"にもかかわらず", src:"despite / nevertheless", pos:"conj", gender:null,
     note:"Very formal concessive. Attaches to nouns, verbs, adjectives.\nどりょくにもかかわらず = despite effort.",
     example:"A: けいこくにもかかわらず、かれはいった。\nB: ゆうきがあるのか、むぼうなのか。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Despite the warning, he went.\nB: Is it courage or recklessness?\nA: How was it?\nB: It was very good.",
     funFact:"にもかかわらず is one of the longest connectors in Japanese. It attaches directly to whatever it modifies. In formal writing, it creates elegant concessive clauses. The pattern is: reason that should prevent X + にもかかわらず + X happened anyway. This gap between expectation and reality is what gives the connector its rhetorical power."},

    {type:"fb", s:"どりょく{1}、けっかはでませんでした。\n(Despite effort, results did not come.)", a:"にもかかわらず", opts:["にもかかわらず","だから","ようするに","たとえば"], sSrc:"Despite effort, results did not come.",
     hint:"The very formal connector expressing that something happened despite a contrary condition."},

    {type:"match", pairs:[{trg:"いいかえれば",src:"in other words"},{trg:"ぎゃくに",src:"conversely"},{trg:"じしん",src:"confidence"},{trg:"ふあん",src:"anxiety"}]},

    {type:"mc", q:"Which connector would you use to add supporting examples?", opts:["ようするに","さらに","たとえば","ぎゃくに"], ans:"たとえば",
     hint:"This connector introduces concrete instances that illustrate or support a general statement."},
  ]
};
export default BATCH2_L_3;
