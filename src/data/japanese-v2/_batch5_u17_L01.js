// Unit 17 Batch 5 Lesson 1: かんじょうのうけみ (Emotional Passive / Adversity Passive)
const BATCH5_L_1 = {
  id:"jav2_u17l_b5_1", title:"かんじょうのうけみ", icon:"😢", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんじょうのうけみ",
     desc:"The adversity passive (meiwaku no ukemi) is uniquely Japanese. It expresses that something happened TO you and you were negatively affected. 'It rained on me,' 'My child cried on me.' English has no direct equivalent. Mastering this pattern is key to sounding naturally Japanese.",
     goals:["Use adversity passive for unwanted experiences","Express annoyance or inconvenience with passive","Distinguish direct passive from adversity passive"]},

    {type:"teach", trg:"ふられる", src:"to be rained on / to be dumped (romance)", pos:"verb", gender:null,
     note:"Passive of ふる. Rain: あめにふられる.\nRomance: かのじょにふられた = I was dumped.",
     example:"A: きのうかえりにあめにふられました。\nB: かさはもっていなかったんですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I got rained on while going home yesterday.\nB: Did you not have an umbrella?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ふられる beautifully shows how Japanese passive works. In English, rain does not 'do' anything to you. But in Japanese, あめにふられた means 'rain fell and I was affected.' The same verb in romance means 'to be dumped' because the rejector's action falls on you. Both uses share the sense of being a victim of circumstances."},

    {type:"teach", trg:"なかれる", src:"to be cried on (adversity passive)", pos:"verb", gender:null,
     note:"Passive of なく (to cry). あかちゃんになかれた = the baby cried (and I suffered).\nClassic adversity passive example.",
     example:"A: よるあかちゃんになかれてねむれませんでした。\nB: たいへんでしたね。おつかれさまです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The baby cried at night and I could not sleep.\nB: That must have been tough. Thank you for your effort.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"In English, 'The baby cried' is not something done TO you. But Japanese あかちゃんに泣かれた expresses that the baby's crying caused you trouble. This adversity passive has no English equivalent. It reveals how Japanese grammar encodes the speaker's emotional involvement in events."},

    {type:"teach", trg:"さわがれる", src:"to be made noisy (by someone)", pos:"verb", gender:null,
     note:"Passive of さわぐ (to make noise). となりにさわがれた = neighbors were noisy (and I suffered).\nKanji: 騒がれる.",
     example:"A: ゆうべとなりのへやにさわがれてこまりました。\nB: かんりにんにそうだんしたほうがいいですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: The next room was noisy last night and I was troubled.\nB: You should consult the building manager.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"騒がれる uses 騒ぐ (to make noise/racket). The adversity passive emphasizes that YOU were the one inconvenienced. In apartment living, noise complaints (騒音問題 souon mondai) are common in Japan. The passive form shifts responsibility: the noise was something inflicted upon you."},

    {type:"teach", trg:"こまる", src:"to be troubled / to be in difficulty", pos:"verb", gender:null,
     note:"Group 1 verb. こまった = I am in trouble. こまっています = I am having difficulty.\nKanji: 困る.",
     example:"A: でんしゃがとまってこまっています。\nB: タクシーをよびましょうか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The train has stopped and I am in trouble.\nB: Shall I call a taxi?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"困る is one of the most versatile expressions of difficulty in Japanese. こまったなあ (hmm, this is troublesome) is a common reaction. It appears in the set phrase こまったときはおたがいさま (in times of trouble, we help each other), reflecting Japanese communal values."},

    {type:"mc", q:"あめにふられた expresses:", opts:["The speaker was negatively affected by rain","It simply rained","The speaker enjoys rain","Rain was predicted"], ans:"The speaker was negatively affected by rain",
     hint:"The adversity passive shows that an event caused trouble or inconvenience to the s...."},

    {type:"teach", trg:"にげられる", src:"to have someone run away on you", pos:"verb", gender:null,
     note:"Passive of にげる (to escape/flee). どろぼうににげられた = the thief got away.\nKanji: 逃げられる.",
     example:"A: けいさつがおいかけたが、はんにんににげられました。\nB: ざんねんですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The police chased, but the criminal escaped on them.\nB: That is unfortunate.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"逃げられる is adversity passive: the escape caused trouble for someone. A parent might say こどもにデパートでにげられた (my child ran off on me at the department store). Each example shows how the passive marks the speaker as an affected party, not just an observer."},

    {type:"teach", trg:"よごされる", src:"to have something dirtied (by someone)", pos:"verb", gender:null,
     note:"Passive of よごす (to dirty/soil). ふくをよごされた = someone dirtied my clothes.\nKanji: 汚される.",
     example:"A: でんしゃでとなりのひとにふくをよごされました。\nB: クリーニングだいをせいきゅうできますよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Someone next to me on the train dirtied my clothes.\nB: You can request cleaning fees.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"汚される uses direct passive with possessive implications. Japanese often says 'my clothes were dirtied' rather than 'someone dirtied my clothes,' keeping the speaker as the suffering subject. This pattern extends to ふまれる (to have something stepped on) and こわされる (to have something broken)."},

    {type:"teach", trg:"じゃまされる", src:"to be disturbed / to be interrupted", pos:"verb", gender:null,
     note:"Passive of じゃまする (to disturb). べんきょうをじゃまされた = my studying was interrupted.\nKanji: 邪魔される.",
     example:"A: しゅうちゅうしているときにじゃまされるといらいらします。\nB: ヘッドフォンをつけたらどうですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I get irritated when I am disturbed while concentrating.\nB: How about putting on headphones?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"邪魔 literally means 'evil demon' (邪 = wicked, 魔 = demon). The idea is that interruptions are like a demon blocking your path. おじゃまします (I am intruding) is said when entering someone's home, humbly calling yourself the disturbance. される makes you the victim of the disturbance."},

    {type:"tip", title:"Adversity Passive vs. Direct Passive",
     text:"Direct passive: Action directly received\nほめられた = I was praised (good thing!)\nえらばれた = I was chosen\n\nAdversity passive: Affected by someone's action\nあめにふられた = It rained on me (I suffered)\nなかれた = Someone cried on me (I suffered)\nにげられた = Someone escaped on me (I suffered)\n\nKey difference: In adversity passive, the original action (crying, raining, fleeing) is not done TO you. But you are affected.\n\nParticle pattern:\n[Agent] に + [Action passive] = I was negatively affected",
     deepDive:{title:"Why Japanese Has Adversity Passive",
      text:"Most European languages lack adversity passive. English 'I was rained on' sounds odd.\n\nJapanese grammar naturally encodes the speaker's perspective. The passive suffix attaches to ANY verb to show the speaker was affected.\n\nIntransitive verbs (rain, cry, die) can become passive:\nちちにしなれた = My father died (on me, and I suffered)\nThis expresses grief through grammar itself.\n\nThe adversity passive reveals a core feature of Japanese: events are described through their emotional impact on the speaker, not just as objective facts."}},

    {type:"teach", trg:"いらいらする", src:"to be irritated / to be frustrated", pos:"verb", gender:null,
     note:"Onomatopoeic する-verb. いらいらしている = being irritated.\nDescribes a simmering frustration.",
     example:"A: でんしゃがおくれていらいらします。\nB: しかたがないですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: The train is late and I am irritated.\nB: It cannot be helped.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"いらいら is a gitaigo (mimetic word) describing the feeling of prickling frustration. Japanese is rich in these sound-symbolic words. いらいら suggests a scratching, prickling sensation. Related: むかむか (nauseous with anger), もやもや (vague unease), そわそわ (restless anxiety)."},

    {type:"teach", trg:"めいわく", src:"nuisance / bother / annoyance", pos:"noun", gender:null,
     note:"Kanji: 迷惑. めいわくをかける = to cause trouble for someone.\nめいわくメール = spam email.",
     example:"A: おとなりにめいわくをかけないようにしましょう。\nB: はい、よるはしずかにします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Let us try not to cause trouble for the neighbors.\nB: Yes, we will be quiet at night.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"迷惑 is one of the most culturally loaded words in Japanese. Causing めいわく to others is considered a serious social failing. Signs everywhere say ごめいわくをおかけします (we apologize for the inconvenience). The concept shapes behavior: quiet phone manners on trains, removing shoes indoors, and keeping personal space tidy."},

    {type:"teach", trg:"しかたがない", src:"it cannot be helped / there is no choice", pos:"adj", gender:null,
     note:"Set expression. Also しょうがない (casual). Acceptance of unavoidable things.\nLiterally: there is no method/way.",
     example:"A: たいふうでイベントがちゅうしになりました。しかたがないですね。\nB: そうですね。つぎのきかいをまちましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The event was cancelled due to a typhoon. It cannot be helped.\nB: That is right. Let us wait for the next opportunity.\nA: How was it?\nB: It was very good.",
     funFact:"しかたがない (or しょうがない) encapsulates a Japanese philosophical attitude: accepting what you cannot change. It is NOT fatalism but pragmatic acceptance. After natural disasters, Japanese people often say しかたがない and focus on rebuilding. The phrase appears in philosophy discussions as a distinctly Japanese approach to adversity."},

    {type:"fb", s:"よるあかちゃんに{1}てねむれませんでした。\n(The baby cried at night and I could not sleep.)", a:"なかれ", opts:["なかれ","ないて","なき","なく"], sSrc:"The baby cried at night and I could not sleep.",
     hint:"The adversity passive of なく (to cry). Group 1 passive: change く to か + れる."},

    {type:"mc", q:"Which is an adversity passive?", opts:["となりにさわがれてこまった","せんせいにほめられた","ともだちにプレゼントをもらった","おかあさんにつくってもらった"], ans:"となりにさわがれてこまった",
     hint:"Look for the pattern where someone's action caused the speaker trouble or inconvenience."},

    {type:"teach", trg:"おどろかされる", src:"to be surprised / startled (by someone)", pos:"verb", gender:null,
     note:"Passive of おどろかす (to surprise). ともだちにおどろかされた = I was startled by my friend.\nKanji: 驚かされる.",
     example:"A: とつぜんうしろからこえをかけられておどろかされました。\nB: びっくりしましたね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I was startled by someone suddenly calling out from behind.\nB: That must have been a shock.\nA: When was it?\nB: It was last summer.",
     funFact:"驚かされる adds a layer of agency: someone caused me to be surprised. Compare with おどろく (I was surprised, neutral) and おどろかされる (someone made me be surprised, adversity). This three-way distinction shows how Japanese passive precisely encodes who is responsible."},

    {type:"teach", trg:"ふみつけられる", src:"to have something stepped on", pos:"verb", gender:null,
     note:"Passive of ふみつける (to step on firmly). あしをふみつけられた = someone stepped on my foot.\nKanji: 踏みつけられる.",
     example:"A: まんいんでんしゃであしをふみつけられました。\nB: つうきんはたいへんですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Someone stepped on my foot on the packed train.\nB: Commuting is tough.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"踏みつけられる is a common complaint about rush hour trains. Tokyo's morning rush sees trains at 180% capacity. Physical contact is unavoidable. The passive form perfectly captures the commuter experience: things happen to you that you cannot control. Japan Rail has women-only cars partly to address this."},

    {type:"match", pairs:[{trg:"ふられる",src:"to be rained on / dumped"},{trg:"なかれる",src:"to be cried on"},{trg:"にげられる",src:"to have someone escape"},{trg:"じゃまされる",src:"to be disturbed"}]},

    {type:"fb", s:"はんにんに{1}てけいさつはこまっています。\n(The criminal escaped and the police are in trouble.)", a:"にげられ", opts:["にげられ","にげて","にげ","にげる"], sSrc:"The criminal escaped and the police are in trouble.",
     hint:"Adversity passive of にげる (to escape). Group 2 passive: stem + られる."},

    {type:"mc", q:"めいわくをかける means:", opts:["To cause trouble for someone","To receive trouble","To avoid trouble","To apologize for trouble"], ans:"To cause trouble for someone",
     hint:"かける here means to impose. Combined with the noun for nuisance/bother."},

    {type:"teach", trg:"うんざりする", src:"to be fed up / to be sick of", pos:"verb", gender:null,
     note:"する-verb expressing disgust or exhaustion with a situation.\nまいにちざんぎょうでうんざりする = fed up with daily overtime.",
     example:"A: まいにちあめでうんざりしています。\nB: つゆのきせつですからね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am fed up with rain every day.\nB: It is the rainy season, after all.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"うんざり is another gitaigo (mimetic word). It suggests a heavy, drooping feeling of exhaustion. The rainy season (梅雨 tsuyu, June-July) makes many Japanese people うんざり. Unlike いらいら (sharp irritation), うんざり is a slow, accumulated weariness."},

    {type:"mc", q:"ちちにしなれた expresses:", opts:["Grief that one's father passed away","Father killed someone","Father is alive","Father was born"], ans:"Grief that one's father passed away",
     hint:"The adversity passive of しぬ (to die) expresses that someone's death affected the speaker deeply."}
  ]
};
export default BATCH5_L_1;
