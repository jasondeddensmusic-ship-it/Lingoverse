// Batch 11 – Unit 19 (B1.1 Conditionals): Conjunctions & Reasoning
const BATCH11_L1 = {
  id:"jav2_u19l_b11_1", title:"りゆうとせつぞく", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"りゆうとせつぞく",
     desc:"Learn conjunctions and connectors for expressing reasons, conditions, and logical relationships. These are essential for constructing complex B1-level sentences.",
     goals:["Use reason connectors: だから, ので, なぜなら","Express contrast: しかし, けれども, のに","Link ideas with advanced conjunctions"]},

    {type:"teach", trg:"だから", src:"therefore / so", pos:"conj", gender:null,
     note:"Casual reason connector. More assertive than ので.\nSentence-initial: だから、...",
     example:"A: あめがふっています。だから、かさをもっていきましょう。\nB: そうですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: It is raining. So, let's bring an umbrella.\nB: You're right.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"だから is the casual, assertive 'so/therefore.' Using it too much can sound pushy or childish. In arguments, だから！(So!) expresses frustration, like 'That's what I'm saying!' The polite equivalent ですから is used in business. Overusing だから is a common learner habit to avoid."},

    {type:"teach", trg:"ので", src:"because / since (polite)", pos:"conj", gender:null,
     note:"Softer than から. Attaches to plain form.\nびょうきなので、やすみます = I'm sick, so I'll be absent.",
     example:"A: ちょっとつかれたので、やすみましょう。\nB: いいですね。カフェにいきましょうか。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I'm a bit tired, so let's rest.\nB: Good idea. Shall we go to a cafe?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"ので sounds softer and more objective than から, making it preferred in polite speech and business. It implies the reason is obvious or natural. から sounds more like personal justification. Japanese textbooks recommend ので for formal situations and から for casual ones."},

    {type:"teach", trg:"しかし", src:"however / but", pos:"conj", gender:null,
     note:"Formal. Written and spoken.\nCasual alternatives: でも, だけど.",
     example:"A: にほんごはむずかしいです。しかし、とてもおもしろいです。\nB: そうですね。むずかしいけどたのしいです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Japanese is difficult. However, it is very interesting.\nB: That's right. Difficult but fun.\nA: How was it?\nB: It was very good.",
     funFact:"Japanese has a rich hierarchy of 'but' words: しかし (formal/written), ところが (unexpected contrast), しかしながら (very formal), けれども (neutral), けれど (slightly casual), けど (casual), でも (most casual). Choosing the right one signals your formality level perfectly."},

    {type:"teach", trg:"のに", src:"even though / despite", pos:"conj", gender:null,
     note:"Expresses disappointment or surprise.\nべんきょうしたのに、おちた = despite studying, I failed.",
     example:"A: いっしょうけんめいべんきょうしたのに、しけんにおちました。\nB: それはくやしいですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Even though I studied hard, I failed the exam.\nB: That is frustrating.\nA: When was it?\nB: It was last summer.",
     funFact:"のに carries emotional weight: frustration, disappointment, or reproach. やくそくしたのに (even though you promised...) implies betrayal. Japanese speakers use のに when reality contradicts expectations, and the emotional overtone makes it different from the neutral けれども."},

    {type:"teach", trg:"それに", src:"moreover / besides", pos:"conj", gender:null,
     note:"Adds information to support the same point.\nBuilds on the previous statement.",
     example:"A: このレストランはおいしいです。それに、やすいです。\nB: いいですね！いきましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: This restaurant is delicious. Moreover, it is cheap.\nB: Nice! Let's go.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"それに adds positive or negative points in the same direction. If you are listing good things, それに adds another good thing. For contrast, use それなのに (despite that). Japanese logical connectors are extremely precise about the direction of the argument they support."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
     note:"Summarizes or restates the point.\nCommon in explanations and academic speech.",
     example:"A: にほんのしゅとはとうきょうです。つまり、にほんでいちばんだいじなまちです。\nB: なるほど。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Japan's capital is Tokyo. In other words, it is the most important city.\nB: I see.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"つまり is a clarity connector, used when rephrasing something for better understanding. In business presentations, つまり signals the key takeaway. In conversation, overusing つまり can sound condescending, as if you think the listener did not understand the first time."},

    {type:"teach", trg:"たとえば", src:"for example", pos:"conj", gender:null,
     note:"Introduces examples. Very common in explanations.\nたとえば、にほんりょうりといえば、すしやラーメン...",
     example:"A: にほんにはいろいろなまつりがあります。たとえば、おぼんやおしょうがつです。\nB: おぼんはなんですか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Japan has various festivals. For example, Obon and New Year's.\nB: What is Obon?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"たとえば is essential for JLPT reading comprehension. Spotting たとえば tells you an example follows, not the main point. In essays, it structures arguments: main claim, then たとえば + evidence. Japanese academic writing relies heavily on example-based reasoning."},

    {type:"teach", trg:"ところで", src:"by the way / changing topic", pos:"conj", gender:null,
     note:"Topic changer. Signals a shift in conversation.\nPolite way to change subjects.",
     example:"A: ところで、らいしゅうのかいぎのことですが...\nB: はい、なんでしょうか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: By the way, about next week's meeting...\nB: Yes, what about it?\nA: How long did it take?\nB: About two hours.",
     funFact:"ところで smoothly changes conversation topics without rudeness. Japanese conversation values seamless transitions, and abruptly jumping to a new topic feels jarring. ところで gives the listener a mental signal to switch gears. In business emails, it often introduces the real purpose after pleasantries."},

    {type:"teach", trg:"そのため", src:"for that reason / therefore", pos:"conj", gender:null,
     note:"Formal written connector. More formal than だから.\nCommon in reports and news.",
     example:"A: にほんはじしんがおおいくにです。そのため、たいさくがすすんでいます。\nB: なるほど。たてものもつよいですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Japan is a country with many earthquakes. For that reason, countermeasures are advanced.\nB: I see. Buildings are strong too.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"そのため is the go-to causal connector in formal Japanese: news articles, academic papers, business reports. It sounds too stiff for casual conversation (use だから instead). JLPT N3-N2 heavily tests the distinction between casual (だから) and formal (そのため) connectors."},

    {type:"teach", trg:"いっぽうで", src:"on the other hand", pos:"conj", gender:null,
     note:"Presents the contrasting side. いっぽう = one direction.\nFormal, common in essays and news.",
     example:"A: にほんのぎじゅつはすすんでいます。いっぽうで、でんとうぶんかもたいせつにしています。\nB: バランスがいいですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Japan's technology is advanced. On the other hand, it also values traditional culture.\nB: Good balance.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"いっぽうで (一方で) presents a balanced contrast without judgment: A is true, but so is B. It is different from しかし (which opposes the previous point). News anchors use it frequently when presenting multiple perspectives on an issue. It shows intellectual nuance."},

    {type:"teach", trg:"けっきょく", src:"in the end / after all", pos:"adv", gender:null,
     note:"Summarizes the final outcome after twists.\nけっきょくどうなった？= what happened in the end?",
     example:"A: いろいろかんがえましたが、けっきょくにほんにいくことにしました。\nB: いいけっていですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I thought about it a lot, but in the end I decided to go to Japan.\nB: That is a good decision.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"けっきょく signals the final resolution after deliberation or complications. It often carries a sense of 'all that effort/worry, and this is where we ended up.' けっきょくは (after all) can be resigned or satisfied, depending on tone. It is a storytelling word that resolves narrative tension."},

    // Quiz steps
    {type:"mc", q:"「ので」と「から」はどうちがいますか？",
     opts:["ので is softer/polite, から is direct/casual","They are exactly the same","ので is casual, から is formal","ので is written only"],
     ans:"ので is softer/polite, から is direct/casual",
     hint:"One sounds more objective and gentle, preferred in business. The other sounds more like personal justification."},

    {type:"fb", s:"いっしょうけんめいべんきょうした{1}、しけんにおちました。",
     a:["のに"],
     opts:["のに","ので","から","けど"],
     hint:"The speaker is expressing frustration that reality contradicted their effort. This connector carries disappointment.",
     sSrc:"Even though I studied hard, I failed the exam."},

    {type:"match", pairs:[
      {trg:"つまり", src:"in other words"},
      {trg:"たとえば", src:"for example"},
      {trg:"ところで", src:"by the way"},
      {trg:"けっきょく", src:"in the end"}
    ]},

    {type:"mc", q:"「ところで」はいつつかいますか？",
     opts:["When changing the conversation topic","When agreeing with someone","When giving an example","When summarizing"],
     ans:"When changing the conversation topic",
     hint:"This word serves as a smooth transition signal, letting the listener know you are shifting to a different subject."},

    {type:"fb", s:"にほんはじしんがおおいくにです。{1}、たいさくがすすんでいます。",
     a:["そのため"],
     opts:["そのため","ところで","たとえば","いっぽうで"],
     hint:"The second sentence is a direct consequence of the first. Use the formal 'for that reason' connector.",
     sSrc:"Japan is a country with many earthquakes. For that reason, countermeasures are advanced."},

    {type:"mc", q:"「いっぽうで」はどんなときにつかいますか？",
     opts:["When presenting a balanced contrast","When agreeing strongly","When giving examples","When ending a conversation"],
     ans:"When presenting a balanced contrast",
     hint:"This connector shows both sides of an issue without taking a position. A is true, and B is also true."}
  ]
};
export default BATCH11_L1;
