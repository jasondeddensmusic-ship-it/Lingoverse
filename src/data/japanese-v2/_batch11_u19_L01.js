// Batch 11 – Unit 19 (B1.1 Conditionals): Conjunctions & Reasoning
const BATCH11_L1 = {
  id:"jav2_u19l_b11_1", title:"理由(りゆう)と接続(せつぞく)", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"理由(りゆう)と接続(せつぞく)",
     desc:"Learn conjunctions and connectors for expressing reasons, conditions, and logical relationships. These are essential for constructing complex B1-level sentences.",
     goals:["Use reason connectors: だから, ので, なぜなら","Express contrast: しかし, けれども, のに","Link ideas with advanced conjunctions"]},

    {type:"teach", trg:"だから", src:"therefore / so", pos:"conj", gender:null,
     note:"Casual reason connector. More assertive than ので.\nSentence-initial: だから、...",
     example:"A: 雨(あめ)が降(ふ)っています。だから、傘(かさ)を持(も)っていきましょう。\nB: そうですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: It is raining. So, let's bring an umbrella.\nB: You're right.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"だから is the casual, assertive 'so/therefore.' Using it too much can sound pushy or childish. In arguments, だから！(So!) expresses frustration, like 'That's what I'm saying!' The polite equivalent ですから is used in business. Overusing だから is a common learner habit to avoid."},

    {type:"teach", trg:"ので", src:"because / since (polite)", pos:"conj", gender:null,
     note:"Softer than から. Attaches to plain form.\n病気(びょうき)なので、休(やす)みます = I'm sick, so I'll be absent.",
     example:"A: ちょっと疲(つか)れたので、休(やす)みましょう。\nB: いいですね。カフェに行(い)きましょうか。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I'm a bit tired, so let's rest.\nB: Good idea. Shall we go to a cafe?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"ので sounds softer and more objective than から, making it preferred in polite speech and business. It implies the reason is obvious or natural. から sounds more like personal justification. Japanese textbooks recommend ので for formal situations and から for casual ones."},

    {type:"teach", trg:"しかし", src:"however / but", pos:"conj", gender:null,
     note:"Formal. Written and spoken.\nCasual alternatives: でも, だけど.",
     example:"A: 日本語(にほんご)は難(むずか)しいです。しかし、とても面白(おもしろ)いです。\nB: そうですね。難(むずか)しいけど楽(たの)しいです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Japanese is difficult. However, it is very interesting.\nB: That's right. Difficult but fun.\nA: How was it?\nB: It was very good.",
     funFact:"Japanese has a rich hierarchy of 'but' words: しかし (formal/written), ところが (unexpected contrast), しかしながら (very formal), けれども (neutral), けれど (slightly casual), けど (casual), でも (most casual). Choosing the right one signals your formality level perfectly."},

    {type:"teach", trg:"のに", src:"even though / despite", pos:"conj", gender:null,
     note:"Expresses disappointment or surprise.\n勉強(べんきょう)したのに、落(お)ちた = despite studying, I failed.",
     example:"A: 一生懸命(いっしょうけんめい)勉強(べんきょう)したのに、試験(しけん)に落(お)ちました。\nB: それは悔(くや)しいですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Even though I studied hard, I failed the exam.\nB: That is frustrating.\nA: When was it?\nB: It was last summer.",
     funFact:"のに carries emotional weight: frustration, disappointment, or reproach. 約束(やくそく)したのに (even though you promised...) implies betrayal. Japanese speakers use のに when reality contradicts expectations, and the emotional overtone makes it different from the neutral けれども."},

    {type:"teach", trg:"それに", src:"moreover / besides", pos:"conj", gender:null,
     note:"Adds information to support the same point.\nBuilds on the previous statement.",
     example:"A: このレストランはおいしいです。それに、安(やす)いです。\nB: いいですね！行(い)きましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: This restaurant is delicious. Moreover, it is cheap.\nB: Nice! Let's go.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"それに adds positive or negative points in the same direction. If you are listing good things, それに adds another good thing. For contrast, use それなのに (despite that). Japanese logical connectors are extremely precise about the direction of the argument they support."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
     note:"Summarizes or restates the point.\nCommon in explanations and academic speech.",
     example:"A: 日本(にほん)の首都(しゅと)は東京(とうきょう)です。つまり、日本(にほん)で一番(いちばん)大事(だいじ)な街(まち)です。\nB: なるほど。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Japan's capital is Tokyo. In other words, it is the most important city.\nB: I see.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"つまり is a clarity connector, used when rephrasing something for better understanding. In business presentations, つまり signals the key takeaway. In conversation, overusing つまり can sound condescending, as if you think the listener did not understand the first time."},

    {type:"teach", trg:"たとえば", src:"for example", pos:"conj", gender:null,
     note:"Introduces examples. Very common in explanations.\nたとえば、日本料理(にほんりょうり)といえば、寿司(すし)やラーメン...",
     example:"A: 日本(にほん)にはいろいろな祭(まつ)りがあります。たとえば、お盆(ぼん)やお正月(しょうがつ)です。\nB: お盆(ぼん)はなんですか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Japan has various festivals. For example, Obon and New Year's.\nB: What is Obon?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"たとえば is essential for JLPT reading comprehension. Spotting たとえば tells you an example follows, not the main point. In essays, it structures arguments: main claim, then たとえば + evidence. Japanese academic writing relies heavily on example-based reasoning."},

    {type:"teach", trg:"ところで", src:"by the way / changing topic", pos:"conj", gender:null,
     note:"Topic changer. Signals a shift in conversation.\nPolite way to change subjects.",
     example:"A: ところで、来週(らいしゅう)の会議(かいぎ)のことですが...\nB: はい、なんでしょうか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: By the way, about next week's meeting...\nB: Yes, what about it?\nA: How long did it take?\nB: About two hours.",
     funFact:"ところで smoothly changes conversation topics without rudeness. Japanese conversation values seamless transitions, and abruptly jumping to a new topic feels jarring. ところで gives the listener a mental signal to switch gears. In business emails, it often introduces the real purpose after pleasantries."},

    {type:"teach", trg:"そのため", src:"for that reason / therefore", pos:"conj", gender:null,
     note:"Formal written connector. More formal than だから.\nCommon in reports and news.",
     example:"A: 日本(にほん)は地震(じしん)が多(おお)い国(くに)です。そのため、対策(たいさく)が進(すす)んでいます。\nB: なるほど。建物(たてもの)も強(つよ)いですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Japan is a country with many earthquakes. For that reason, countermeasures are advanced.\nB: I see. Buildings are strong too.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"そのため is the go-to causal connector in formal Japanese: news articles, academic papers, business reports. It sounds too stiff for casual conversation (use だから instead). JLPT N3-N2 heavily tests the distinction between casual (だから) and formal (そのため) connectors."},

    {type:"teach", trg:"一方(いっぽう)で", src:"on the other hand", pos:"conj", gender:null,
     note:"Presents the contrasting side. 一方(いっぽう) = one direction.\nFormal, common in essays and news.",
     example:"A: 日本(にほん)の技術(ぎじゅつ)は進(すす)んでいます。一方(いっぽう)で、伝統文化(でんとうぶんか)も大切(たいせつ)にしています。\nB: バランスがいいですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Japan's technology is advanced. On the other hand, it also values traditional culture.\nB: Good balance.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"一方(いっぽう)で (一方で) presents a balanced contrast without judgment: A is true, but so is B. It is different from しかし (which opposes the previous point). News anchors use it frequently when presenting multiple perspectives on an issue. It shows intellectual nuance."},

    {type:"teach", trg:"結局(けっきょく)", src:"in the end / after all", pos:"adv", gender:null,
     note:"Summarizes the final outcome after twists.\n結局(けっきょく)どうなった？= what happened in the end?",
     example:"A: いろいろ考(かんが)えましたが、結局(けっきょく)日本(にほん)に行(い)くことにしました。\nB: いい決定(けってい)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I thought about it a lot, but in the end I decided to go to Japan.\nB: That is a good decision.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"結局(けっきょく) signals the final resolution after deliberation or complications. It often carries a sense of 'all that effort/worry, and this is where we ended up.' 結局(けっきょく)は (after all) can be resigned or satisfied, depending on tone. It is a storytelling word that resolves narrative tension."},

    // Quiz steps
    {type:"mc", q:"「ので」と「から」はどう違(ちが)いますか？",
     opts:["ので is softer/polite, から is direct/casual","They are exactly the same","ので is casual, から is formal","ので is written only"],
     ans:"ので is softer/polite, から is direct/casual",
     hint:"One sounds more objective and gentle, preferred in business. The other sounds more like personal justification."},

    {type:"fb", s:"一生懸命(いっしょうけんめい)勉強(べんきょう)した{1}、試験(しけん)に落(お)ちました。",
     a:["のに"],
     opts:["のに","ので","から","けど"],
     hint:"The speaker is expressing frustration that reality contradicted their effort. This connector carries disappointment.",
     sSrc:"Even though I studied hard, I failed the exam."},

    {type:"match", pairs:[
      {trg:"つまり", src:"in other words"},
      {trg:"たとえば", src:"for example"},
      {trg:"ところで", src:"by the way"},
      {trg:"結局(けっきょく)", src:"in the end"}
    ]},

    {type:"mc", q:"「ところで」はいつ使(つか)いますか？",
     opts:["When changing the conversation topic","When agreeing with someone","When giving an example","When summarizing"],
     ans:"When changing the conversation topic",
     hint:"This word serves as a smooth transition signal, letting the listener know you are shifting to a different subject."},

    {type:"fb", s:"日本(にほん)は地震(じしん)が多(おお)い国(くに)です。{1}、対策(たいさく)が進(すす)んでいます。",
     a:["そのため"],
     opts:["そのため","ところで","たとえば","一方(いっぽう)で"],
     hint:"The second sentence is a direct consequence of the first. Use the formal 'for that reason' connector.",
     sSrc:"Japan is a country with many earthquakes. For that reason, countermeasures are advanced."},

    {type:"mc", q:"「一方(いっぽう)で」はどんなときに使(つか)いますか？",
     opts:["When presenting a balanced contrast","When agreeing strongly","When giving examples","When ending a conversation"],
     ans:"When presenting a balanced contrast",
     hint:"This connector shows both sides of an issue without taking a position. A is true, and B is also true."}
  ,{type:"match",pairs:[{trg:"だから",src:"therefore / so"},{trg:"しかし",src:"however / but"},{trg:"それに",src:"moreover / besides"},{trg:"一方(いっぽう)で",src:"on the other hand"}]}]
};
export default BATCH11_L1;
