// Batch 7 – Unit 24 (B1.2 Advanced Connectors): Opinion Connectors & Discourse Markers
const BATCH7_L1 = {
  id:"jav2_u24l_b7_1", title:"論理的(ろんりてき)なつなぎ", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"論理的(ろんりてき)なつなぎ",
     desc:"Learn advanced connector words and discourse markers for structuring arguments. These words make your Japanese sound more logical, organized, and persuasive in discussions and writing.",
     goals:["Use contrast and concession connectors","Structure arguments with logical markers","Transition between ideas smoothly"]},

    {type:"teach", trg:"したがって", src:"therefore / consequently", pos:"conj", gender:null,
     note:"Formal logical connector. Used in writing and speeches.\nConclusion follows from a stated reason.",
     example:"A: 経済(けいざい)が不景気(ふけいき)です。したがって、失業率(しつぎょうりつ)が上(あ)がっています。\nB: 対策(たいさく)が必要(ひつよう)ですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The economy is in recession. Therefore, unemployment is rising.\nB: Countermeasures are needed.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"したがって (従(したが)って) is from 従(したが)う (to follow). It signals that a logical conclusion follows. In academic papers, したがって marks the key deduction. In business presentations, it introduces the recommendation after data analysis. Using it properly shows clear thinking."},

    {type:"teach", trg:"それにもかかわらず", src:"nevertheless / despite that", pos:"conj", gender:null,
     note:"Strong concession connector. Acknowledges a fact but presents a contrasting point.",
     example:"A: 雨(あめ)が降(ふ)っていました。それにもかかわらず、多(おお)くの人(ひと)が来(き)ました。\nB: 人気(にんき)のあるイベントですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: It was raining. Nevertheless, many people came.\nB: It is a popular event.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"それにもかかわらず is a formal connector that sounds educated and measured. It acknowledges reality before presenting a contrasting fact. In court, academic writing, and news reporting, this phrase adds weight to the counter-argument. Shorter casual alternatives include でも and けど."},

    {type:"teach", trg:"そもそも", src:"in the first place / fundamentally", pos:"adv", gender:null,
     note:"Returns to the fundamental point.\nそもそもの問題(もんだい)は = the fundamental problem is.",
     example:"A: そもそも、なぜこの計画(けいかく)を始(はじ)めたのですか？\nB: お客様(きゃくさま)の声(こえ)がきっかけでした。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: In the first place, why did we start this plan?\nB: Customer feedback was the trigger.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"そもそも resets a discussion to its origin. It is powerful in debates because it questions fundamental assumptions. Japanese politicians use そもそも to reframe arguments. In daily life, そもそもおかしいでしょう (isn't that wrong in the first place?) challenges the premise itself."},

    {type:"teach", trg:"いっぽう", src:"on the other hand / meanwhile", pos:"conj", gender:null,
     note:"Shows contrast between two sides.\nいっぽうでは = on the one hand.",
     example:"A: 都会(とかい)は便利(べんり)です。いっぽう、田舎(いなか)は自然(しぜん)が豊(ゆた)かです。\nB: どちらにもいい点(てん)がありますね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Cities are convenient. On the other hand, the countryside has rich nature.\nB: Both have good points.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"いっぽう (一方(いっぽう)) literally means 'one direction/side.' It presents the other side of a balanced argument. Japanese rhetoric values showing both sides (両面(りょうめん)) before stating a position. Academic writing requires いっぽう to show balanced analysis. It is the mark of mature argumentation."},

    {type:"teach", trg:"なおかつ", src:"moreover / and yet / on top of that", pos:"conj", gender:null,
     note:"Adds emphasis to an already stated point.\nFormally strengthens the preceding statement.",
     example:"A: あの人(ひと)は頭(あたま)が良(よ)くて、なおかつ努力家(どりょくか)です。\nB: すごいですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: That person is smart and, on top of that, hardworking.\nB: Amazing.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"なおかつ (尚且(なおか)つ) is an emphatic 'and also.' It builds on a positive (or negative) point with something additional. In product descriptions, it highlights stacked benefits: 安(やす)くて、なおかつ高品質(こうひんしつ) (cheap AND high quality). In resumes, it connects complementary skills."},

    {type:"teach", trg:"いずれにしても", src:"in any case / either way", pos:"conj", gender:null,
     note:"Acknowledges multiple possibilities, then states what is true regardless.\nいずれにせよ = shorter form.",
     example:"A: 成功(せいこう)するかどうかわかりません。いずれにしても、やってみましょう。\nB: そうですね。やらないよりいいです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I do not know if we will succeed. In any case, let us try.\nB: Right. Better than not trying.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"いずれにしても is used to cut through deliberation and move to action. After listing pros and cons, this phrase says 'regardless, here is what we should do.' Japanese meetings can deliberate endlessly, so いずれにしても is a pragmatic tool for reaching conclusions."},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Always used with negative verb.\nかならずしも正(ただ)しくない = not necessarily correct.",
     example:"A: 高(たか)いものがかならずしもいいとはかぎりません。\nB: そうですね。値段(ねだん)と品質(ひんしつ)は別(べつ)です。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: True. Price and quality are separate.\nA: How was it?\nB: It was very good.",
     funFact:"かならずしも (必(かなら)ずしも) is essential for nuanced thinking. It prevents absolutes. Japanese academic writing uses it extensively: かならずしも一致(いっち)しない (does not necessarily agree). This word reflects the Japanese philosophical preference for relative rather than absolute truth."},

    {type:"teach", trg:"さらに", src:"furthermore / in addition", pos:"adv", gender:null,
     note:"Adds more information or escalation.\nさらに詳(くわ)しく = in more detail.",
     example:"A: 運動(うんどう)は健康(けんこう)にいいです。さらに、ストレス解消(かいしょう)にもなります。\nB: いいことばかりですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Exercise is good for health. Furthermore, it also relieves stress.\nB: Only good things.\nA: When was it?\nB: It was last summer.",
     funFact:"さらに (更(さら)に) escalates or adds. In news, it introduces additional bad news: さらに被害(ひがい)が広(ひろ)がっています (furthermore, damage is spreading). In positive contexts, it stacks benefits. The character 更(さら) means 'to renew/add more,' capturing the additive meaning perfectly."},

    {type:"teach", trg:"すなわち", src:"namely / that is to say", pos:"conj", gender:null,
     note:"Formal rephrasing connector. Clarifies or defines.\nMore formal than つまり.",
     example:"A: 日本(にほん)の首都(しゅと)、すなわち東京(とうきょう)は、とても大(おお)きいです。\nB: 世界最大(せかいさいだい)の都市圏(としけん)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Japan's capital, namely Tokyo, is very large.\nB: It is the world's largest metropolitan area.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"すなわち (即(すなわ)ち) is the most formal rephrasing connector, found in legal documents, academic papers, and formal speeches. It defines or clarifies with precision. The character 即(そく) means 'immediately/exactly.' In casual speech, つまり or つまりは serve the same purpose with less formality."},

    {type:"teach", trg:"そのうえ", src:"on top of that / besides", pos:"conj", gender:null,
     note:"Adds information building on the previous point.\nSimilar to さらに but more conversational.",
     example:"A: あのレストランはおいしいです。そのうえ、安(やす)いです。\nB: 最高(さいこう)ですね。行(い)きましょう。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: That restaurant is delicious. On top of that, it is cheap.\nB: The best. Let us go.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"そのうえ (その上(うえ)) literally means 'on top of that.' It stacks positive or negative points. In recommendations: おいしい、そのうえ安(やす)い (delicious and also cheap). In complaints: 遅(おそ)い、そのうえ高(たか)い (slow and also expensive). The stacking creates emphasis through accumulation."},

    {type:"teach", trg:"とはいえ", src:"having said that / that said", pos:"conj", gender:null,
     note:"Concedes the previous point, then qualifies it.\nBalanced, moderate connector.",
     example:"A: 日本語(にほんご)は難(むずか)しいです。とはいえ、面白(おもしろ)いですよ。\nB: そうですか。頑張(がんば)ってみます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Japanese is difficult. That said, it is interesting.\nB: Is that so? I will try my best.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"とはいえ is an elegant concession. It says 'I acknowledge what I just said, BUT...' without contradicting it. It balances two truths. Japanese rhetoric loves this both-sides approach. とはいえ makes the speaker sound fair-minded and thoughtful rather than one-sided."},

    {type:"teach", trg:"けっきょく", src:"in the end / after all / eventually", pos:"adv", gender:null,
     note:"Reveals the final outcome after a process.\nけっきょくのところ = when all is said and done.",
     example:"A: いろいろ考(かんが)えましたが、けっきょく日本(にほん)に残(のこ)ることにしました。\nB: いい決断(けつだん)ですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I thought about it a lot, but in the end decided to stay in Japan.\nB: A good decision.\nA: How long did it take?\nB: About two hours.",
     funFact:"けっきょく (結局(けっきょく)) reveals what happened after deliberation or struggle. It can be positive or negative. けっきょく何(なに)も変(か)わらなかった (in the end nothing changed) is a resigned observation. けっきょくうまくいった (it worked out in the end) is relieved. The word captures Japanese patience with long processes."},

    // Quiz steps
    {type:"mc", q:"そもそも is used to:",
     opts:["Question the fundamental premise","Add more information","Express agreement","Show contrast"],
     ans:"Question the fundamental premise",
     hint:"This word returns to the basic starting point. It asks 'why are we even doing this?'"},

    {type:"match", pairs:[
      {trg:"したがって", src:"therefore"},
      {trg:"いっぽう", src:"on the other hand"},
      {trg:"さらに", src:"furthermore"},
      {trg:"けっきょく", src:"in the end"},
      {trg:"すなわち", src:"namely"}
    ]},

    {type:"fb", s:"雨(あめ)が降(ふ)っていた。{1}、多(おお)くの人(ひと)が来(き)た。",
     a:["それにもかかわらず"],
     opts:["それにもかかわらず","したがって","さらに","すなわち"],
     hint:"Despite the rain, many people came. This long connector means 'nevertheless.'",
     sSrc:"It was raining. {1}, many people came."},

    {type:"mc", q:"かならずしも is always used with:",
     opts:["A negative verb form","A positive verb form","An adjective","A noun"],
     ans:"A negative verb form",
     hint:"This word means 'not necessarily' and must pair with a n... to express the nuance."},

    {type:"fb", s:"いろいろ考(かんが)えたが、{1}日本(にほん)に残(のこ)った。",
     a:["けっきょく"],
     opts:["けっきょく","そもそも","したがって","さらに"],
     hint:"After much deliberation, this is what happened in the end.",
     sSrc:"I thought about it a lot, but {1} stayed in Japan."},

    {type:"mc", q:"とはいえ makes the speaker sound:",
     opts:["Fair-minded and balanced","Aggressive and confrontational","Unsure and confused","Emotional and biased"],
     ans:"Fair-minded and balanced",
     hint:"This connector acknowledges one truth while presenting another, showing nuanced thinking."},

    {type:"match", pairs:[
      {trg:"それにもかかわらず", src:"nevertheless"},
      {trg:"そもそも", src:"in the first place"},
      {trg:"なおかつ", src:"moreover"},
      {trg:"いずれにしても", src:"in any case"},
      {trg:"とはいえ", src:"that said"}
    ]},

    {type:"fb", s:"高(たか)いものが{1}いいとはかぎりません。",
     a:["かならずしも"],
     opts:["かならずしも","けっきょく","そもそも","さらに"],
     hint:"Expensive things are not ALWAYS good. This adverb means 'not necessarily.'",
     sSrc:"Expensive things are {1} good."}
  ,{type:"match",pairs:[{trg:"そのうえ",src:"on top of that / besides"}]}]
};
export default BATCH7_L1;
