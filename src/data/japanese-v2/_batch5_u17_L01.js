// Unit 17 Batch 5 Lesson 1: 感情(かんじょう)の受(う)け身(み) (Emotional Passive / Adversity Passive)
const BATCH5_L_1 = {
  id:"jav2_u17l_b5_1", title:"感情(かんじょう)の受(う)け身(み)", icon:"😢", xp:15, board:true,
  steps:[
    {type:"intro", title:"感情(かんじょう)の受(う)け身(み)",
     desc:"The adversity passive (meiwaku no ukemi) is uniquely Japanese. It expresses that something happened TO you and you were negatively affected. 'It rained on me,' 'My child cried on me.' English has no direct equivalent. Mastering this pattern is key to sounding naturally Japanese.",
     goals:["Use adversity passive for unwanted experiences","Express annoyance or inconvenience with passive","Distinguish direct passive from adversity passive"]},

    {type:"teach", trg:"降(ふ)られる", src:"to be rained on / to be dumped (romance)", pos:"verb", gender:null,
     note:"Passive of 降(ふ)る. Rain: 雨(あめ)に降(ふ)られる.\nRomance: 彼女(かのじょ)に振(ふ)られた = I was dumped.",
     example:"A: 昨日(きのう)帰(かえ)りに雨(あめ)に降(ふ)られました。\nB: 傘(かさ)は持(も)っていなかったんですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I got rained on while going home yesterday.\nB: Did you not have an umbrella?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"降られる beautifully shows how Japanese passive works. In English, rain does not 'do' anything to you. But in Japanese, 雨(あめ)に降(ふ)られた means 'rain fell and I was affected.' The same verb in romance means 'to be dumped' because the rejector's action falls on you. Both uses share the sense of being a victim of circumstances."},

    {type:"teach", trg:"泣(な)かれる", src:"to be cried on (adversity passive)", pos:"verb", gender:null,
     note:"Passive of 泣(な)く (to cry). 赤(あか)ちゃんに泣(な)かれた = the baby cried (and I suffered).\nClassic adversity passive example.",
     example:"A: 夜(よる)赤(あか)ちゃんに泣(な)かれて眠(ねむ)れませんでした。\nB: 大変(たいへん)でしたね。お疲(つか)れ様(さま)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The baby cried at night and I could not sleep.\nB: That must have been tough. Thank you for your effort.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"In English, 'The baby cried' is not something done TO you. But Japanese 赤(あか)ちゃんに泣(な)かれた expresses that the baby's crying caused you trouble. This adversity passive has no English equivalent. It reveals how Japanese grammar encodes the speaker's emotional involvement in events."},

    {type:"teach", trg:"騒(さわ)がれる", src:"to be made noisy (by someone)", pos:"verb", gender:null,
     note:"Passive of 騒(さわ)ぐ (to make noise). 隣(となり)に騒(さわ)がれた = neighbors were noisy (and I suffered).\nKanji: 騒(さわ)がれる.",
     example:"A: 夕(ゆう)べ隣(となり)の部屋(へや)に騒(さわ)がれて困(こま)りました。\nB: 管理人(かんりにん)に相談(そうだん)した方(ほう)がいいですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: The next room was noisy last night and I was troubled.\nB: You should consult the building manager.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"騒(さわ)がれる uses 騒(さわ)ぐ (to make noise/racket). The adversity passive emphasizes that YOU were the one inconvenienced. In apartment living, noise complaints (騒音問題(そうおんもんだい)) are common in Japan. The passive form shifts responsibility: the noise was something inflicted upon you."},

    {type:"teach", trg:"困(こま)る", src:"to be troubled / to be in difficulty", pos:"verb", gender:null,
     note:"Group 1 verb. 困(こま)った = I am in trouble. 困(こま)っています = I am having difficulty.\nKanji: 困(こま)る.",
     example:"A: 電車(でんしゃ)が止(と)まって困(こま)っています。\nB: タクシーを呼(よ)びましょうか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The train has stopped and I am in trouble.\nB: Shall I call a taxi?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"困(こま)る is one of the most versatile expressions of difficulty in Japanese. 困(こま)ったなあ (hmm, this is troublesome) is a common reaction. It appears in the set phrase 困(こま)ったときはお互(たが)い様(さま) (in times of trouble, we help each other), reflecting Japanese communal values."},

    {type:"mc", q:"雨(あめ)に降(ふ)られた expresses:", opts:["The speaker was negatively affected by rain","It simply rained","The speaker enjoys rain","Rain was predicted"], ans:"The speaker was negatively affected by rain",
     hint:"The adversity passive shows that an event caused trouble or inconvenience to the s...."},

    {type:"teach", trg:"逃(に)げられる", src:"to have someone run away on you", pos:"verb", gender:null,
     note:"Passive of 逃(に)げる (to escape/flee). 泥棒(どろぼう)に逃(に)げられた = the thief got away.\nKanji: 逃(に)げられる.",
     example:"A: 警察(けいさつ)が追(お)いかけたが、犯人(はんにん)に逃(に)げられました。\nB: 残念(ざんねん)ですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The police chased, but the criminal escaped on them.\nB: That is unfortunate.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"逃(に)げられる is adversity passive: the escape caused trouble for someone. A parent might say 子供(こども)にデパートで逃(に)げられた (my child ran off on me at the department store). Each example shows how the passive marks the speaker as an affected party, not just an observer."},

    {type:"teach", trg:"汚(よご)される", src:"to have something dirtied (by someone)", pos:"verb", gender:null,
     note:"Passive of 汚(よご)す (to dirty/soil). 服(ふく)を汚(よご)された = someone dirtied my clothes.\nKanji: 汚(よご)される.",
     example:"A: 電車(でんしゃ)で隣(となり)の人(ひと)に服(ふく)を汚(よご)されました。\nB: クリーニング代(だい)を請求(せいきゅう)できますよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Someone next to me on the train dirtied my clothes.\nB: You can request cleaning fees.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"汚(よご)される uses direct passive with possessive implications. Japanese often says 'my clothes were dirtied' rather than 'someone dirtied my clothes,' keeping the speaker as the suffering subject. This pattern extends to 踏(ふ)まれる (to have something stepped on) and 壊(こわ)される (to have something broken)."},

    {type:"teach", trg:"邪魔(じゃま)される", src:"to be disturbed / to be interrupted", pos:"verb", gender:null,
     note:"Passive of 邪魔(じゃま)する (to disturb). 勉強(べんきょう)を邪魔(じゃま)された = my studying was interrupted.\nKanji: 邪魔(じゃま)される.",
     example:"A: 集中(しゅうちゅう)しているときに邪魔(じゃま)されるとイライラします。\nB: ヘッドフォンをつけたらどうですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I get irritated when I am disturbed while concentrating.\nB: How about putting on headphones?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"邪魔(じゃま) literally means 'evil demon' (邪 = wicked, 魔 = demon). The idea is that interruptions are like a demon blocking your path. おじゃまします (I am intruding) is said when entering someone's home, humbly calling yourself the disturbance. される makes you the victim of the disturbance."},

    {type:"tip", title:"Adversity Passive vs. Direct Passive",
     text:"Direct passive: Action directly received\n褒(ほ)められた = I was praised (good thing!)\n選(えら)ばれた = I was chosen\n\nAdversity passive: Affected by someone's action\n雨(あめ)に降(ふ)られた = It rained on me (I suffered)\n泣(な)かれた = Someone cried on me (I suffered)\n逃(に)げられた = Someone escaped on me (I suffered)\n\nKey difference: In adversity passive, the original action (crying, raining, fleeing) is not done TO you. But you are affected.\n\nParticle pattern:\n[Agent] に + [Action passive] = I was negatively affected",
     deepDive:{title:"Why Japanese Has Adversity Passive",
      text:"Most European languages lack adversity passive. English 'I was rained on' sounds odd.\n\nJapanese grammar naturally encodes the speaker's perspective. The passive suffix attaches to ANY verb to show the speaker was affected.\n\nIntransitive verbs (rain, cry, die) can become passive:\n父(ちち)に死(し)なれた = My father died (on me, and I suffered)\nThis expresses grief through grammar itself.\n\nThe adversity passive reveals a core feature of Japanese: events are described through their emotional impact on the speaker, not just as objective facts."}},

    {type:"teach", trg:"イライラする", src:"to be irritated / to be frustrated", pos:"verb", gender:null,
     note:"Onomatopoeic する-verb. イライラしている = being irritated.\nDescribes a simmering frustration.",
     example:"A: 電車(でんしゃ)が遅(おく)れてイライラします。\nB: しかたがないですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: The train is late and I am irritated.\nB: It cannot be helped.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"イライラ is a gitaigo (mimetic word) describing the feeling of prickling frustration. Japanese is rich in these sound-symbolic words. イライラ suggests a scratching, prickling sensation. Related: むかむか (nauseous with anger), もやもや (vague unease), そわそわ (restless anxiety)."},

    {type:"teach", trg:"迷惑(めいわく)", src:"nuisance / bother / annoyance", pos:"noun", gender:null,
     note:"Kanji: 迷惑(めいわく). 迷惑(めいわく)をかける = to cause trouble for someone.\n迷惑(めいわく)メール = spam email.",
     example:"A: お隣(となり)に迷惑(めいわく)をかけないようにしましょう。\nB: はい、夜(よる)は静(しず)かにします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Let us try not to cause trouble for the neighbors.\nB: Yes, we will be quiet at night.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"迷惑(めいわく) is one of the most culturally loaded words in Japanese. Causing 迷惑(めいわく) to others is considered a serious social failing. Signs everywhere say ご迷惑(めいわく)をおかけします (we apologize for the inconvenience). The concept shapes behavior: quiet phone manners on trains, removing shoes indoors, and keeping personal space tidy."},

    {type:"teach", trg:"しかたがない", src:"it cannot be helped / there is no choice", pos:"adj", gender:null,
     note:"Set expression. Also しょうがない (casual). Acceptance of unavoidable things.\nLiterally: there is no method/way.",
     example:"A: 台風(たいふう)でイベントが中止(ちゅうし)になりました。しかたがないですね。\nB: そうですね。次(つぎ)の機会(きかい)を待(ま)ちましょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The event was cancelled due to a typhoon. It cannot be helped.\nB: That is right. Let us wait for the next opportunity.\nA: How was it?\nB: It was very good.",
     funFact:"しかたがない (or しょうがない) encapsulates a Japanese philosophical attitude: accepting what you cannot change. It is NOT fatalism but pragmatic acceptance. After natural disasters, Japanese people often say しかたがない and focus on rebuilding. The phrase appears in philosophy discussions as a distinctly Japanese approach to adversity."},

    {type:"fb", s:"夜(よる)赤(あか)ちゃんに{1}て眠(ねむ)れませんでした。\n(The baby cried at night and I could not sleep.)", a:"泣(な)かれ", opts:["泣(な)かれ","泣(な)いて","泣(な)き","泣(な)く"], sSrc:"The baby cried at night and I could not sleep.",
     hint:"The adversity passive of 泣(な)く (to cry). Group 1 passive: change く to か + れる."},

    {type:"mc", q:"Which is an adversity passive?", opts:["隣(となり)に騒(さわ)がれて困(こま)った","先生(せんせい)に褒(ほ)められた","友達(ともだち)にプレゼントをもらった","お母(かあ)さんに作(つく)ってもらった"], ans:"隣(となり)に騒(さわ)がれて困(こま)った",
     hint:"Look for the pattern where someone's action caused the speaker trouble or inconvenience."},

    {type:"teach", trg:"驚(おどろ)かされる", src:"to be surprised / startled (by someone)", pos:"verb", gender:null,
     note:"Passive of 驚(おどろ)かす (to surprise). 友達(ともだち)に驚(おどろ)かされた = I was startled by my friend.\nKanji: 驚(おどろ)かされる.",
     example:"A: 突然(とつぜん)後(うし)ろから声(こえ)をかけられて驚(おどろ)かされました。\nB: びっくりしましたね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I was startled by someone suddenly calling out from behind.\nB: That must have been a shock.\nA: When was it?\nB: It was last summer.",
     funFact:"驚(おどろ)かされる adds a layer of agency: someone caused me to be surprised. Compare with 驚(おどろ)く (I was surprised, neutral) and 驚(おどろ)かされる (someone made me be surprised, adversity). This three-way distinction shows how Japanese passive precisely encodes who is responsible."},

    {type:"teach", trg:"踏(ふ)みつけられる", src:"to have something stepped on", pos:"verb", gender:null,
     note:"Passive of 踏(ふ)みつける (to step on firmly). 足(あし)を踏(ふ)みつけられた = someone stepped on my foot.\nKanji: 踏(ふ)みつけられる.",
     example:"A: 満員(まんいん)電車(でんしゃ)で足(あし)を踏(ふ)みつけられました。\nB: 通勤(つうきん)は大変(たいへん)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Someone stepped on my foot on the packed train.\nB: Commuting is tough.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"踏(ふ)みつけられる is a common complaint about rush hour trains. Tokyo's morning rush sees trains at 180% capacity. Physical contact is unavoidable. The passive form perfectly captures the commuter experience: things happen to you that you cannot control. Japan Rail has women-only cars partly to address this."},

    {type:"match", pairs:[{trg:"降(ふ)られる",src:"to be rained on / dumped"},{trg:"泣(な)かれる",src:"to be cried on"},{trg:"逃(に)げられる",src:"to have someone escape"},{trg:"邪魔(じゃま)される",src:"to be disturbed"}]},

    {type:"fb", s:"犯人(はんにん)に{1}て警察(けいさつ)は困(こま)っています。\n(The criminal escaped and the police are in trouble.)", a:"逃(に)げられ", opts:["逃(に)げられ","逃(に)げて","逃(に)げ","逃(に)げる"], sSrc:"The criminal escaped and the police are in trouble.",
     hint:"Adversity passive of 逃(に)げる (to escape). Group 2 passive: stem + られる."},

    {type:"mc", q:"迷惑(めいわく)をかける means:", opts:["To cause trouble for someone","To receive trouble","To avoid trouble","To apologize for trouble"], ans:"To cause trouble for someone",
     hint:"かける here means to impose. Combined with the noun for nuisance/bother."},

    {type:"teach", trg:"うんざりする", src:"to be fed up / to be sick of", pos:"verb", gender:null,
     note:"する-verb expressing disgust or exhaustion with a situation.\n毎日(まいにち)残業(ざんぎょう)でうんざりする = fed up with daily overtime.",
     example:"A: 毎日(まいにち)雨(あめ)でうんざりしています。\nB: 梅雨(つゆ)の季節(きせつ)ですからね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am fed up with rain every day.\nB: It is the rainy season, after all.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"うんざり is another gitaigo (mimetic word). It suggests a heavy, drooping feeling of exhaustion. The rainy season (梅雨(つゆ), June-July) makes many Japanese people うんざり. Unlike イライラ (sharp irritation), うんざり is a slow, accumulated weariness."},

    {type:"mc", q:"父(ちち)に死(し)なれた expresses:", opts:["Grief that one's father passed away","Father killed someone","Father is alive","Father was born"], ans:"Grief that one's father passed away",
     hint:"The adversity passive of 死(し)ぬ (to die) expresses that someone's death affected the speaker deeply."}
  ]
};
export default BATCH5_L_1;
