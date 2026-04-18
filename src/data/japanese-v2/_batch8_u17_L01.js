// Batch 8 – Unit 17 (B1.1 Passive): Transitivity Pairs
const BATCH8_L1 = {
  id:"jav2_u17l_b8_1", title:"自動詞(じどうし)・他動詞(たどうし)", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"自動詞(じどうし)・他動詞(たどうし)",
     desc:"Master transitivity pairs: verbs that come in intransitive/transitive sets. Understanding these pairs is essential for natural Japanese at B1 level and beyond.",
     goals:["Distinguish intransitive from transitive verbs","Use common transitivity pairs correctly","Understand how Japanese describes events vs. actions"]},

    {type:"teach", trg:"開(あ)く", src:"to open (by itself) / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ドアが開(あ)く. Pair: 開(あ)ける (transitive).\nThe door opens on its own.",
     example:"A: ドアが開(あ)きました。\nB: 風(かぜ)で開(あ)いたのかな？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The door opened.\nB: I wonder if it opened from the wind?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"開(あ)く/開(あ)ける is the textbook example of Japanese transitivity. 開(あ)く (intransitive) describes the door opening without specifying who did it. 開(あ)ける (transitive) requires a subject who opens it. Japanese prefers the intransitive when the agent is unimportant, which is much more common than in English."},

    {type:"teach", trg:"閉(し)まる", src:"to close (by itself) / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ドアが閉(し)まる. Pair: 閉(し)める (transitive).\nThe door closes on its own.",
     example:"A: 窓(まど)が閉(し)まっています。\nB: 寒(さむ)いから誰(だれ)かが閉(し)めたんでしょう。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The window is closed.\nB: Someone probably closed it because it was cold.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"閉(し)まる/閉(し)める pair is used constantly. 電車(でんしゃ)のドアが閉(し)まります (the train doors are closing) uses intransitive because the system, not a person, closes them. 店(みせ)が閉(し)まっている (the shop is closed) uses intransitive because the state matters, not who closed it."},

    {type:"teach", trg:"決(き)まる", src:"to be decided / to be settled / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 日時(にちじ)が決(き)まる. Pair: 決(き)める (transitive, to decide).\n決(き)まった = it is decided.",
     example:"A: 会議(かいぎ)の日時(にちじ)が決(き)まりましたか？\nB: はい、来週(らいしゅう)の月曜日(げつようび)に決(き)まりました。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Has the meeting date been decided?\nB: Yes, it was decided for next Monday.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Using 決(き)まる instead of 決(き)める is a strategic Japanese communication choice. 日時(にちじ)が決(き)まりました (the date was decided) avoids naming who decided, which is useful in group-consensus culture. It feels more harmonious than 私(わたし)が決(き)めました (I decided)."},

    {type:"teach", trg:"点(つ)く", src:"to be attached / to turn on / intransitive", pos:"verb", gender:null,
     note:"電気(でんき)が点(つ)く = the light turns on. Pair: 点(つ)ける (transitive).\nMultiple meanings: arrive, attach, light up.",
     example:"A: 電気(でんき)が点(つ)きました。\nB: 自動(じどう)センサーですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The light turned on.\nB: It is an automatic sensor.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"点(つ)く is one of Japanese's most versatile verbs. 電気(でんき)が点(つ)く (light turns on), 気(き)が付(つ)く (to notice), 嘘(うそ)が付(つ)く (to tell a lie), 席(せき)に就(つ)く (to take a seat). Each compound has its own meaning. The transitive pair 点(つ)ける is equally versatile: 電気(でんき)をつける (turn on the light), 名(な)をつける (to name)."},

    {type:"teach", trg:"壊(こわ)れる", src:"to break / to be broken / intransitive", pos:"verb", gender:null,
     note:"Intransitive: パソコンが壊(こわ)れた. Pair: 壊(こわ)す (transitive).\n壊(こわ)れやすい = fragile.",
     example:"A: パソコンが壊(こわ)れてしまいました。\nB: 修理(しゅうり)に出(だ)しましょう。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: My computer broke.\nB: Let us send it for repair.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"壊(こわ)れる/壊(こわ)す is crucial for daily Japanese. Japanese speakers strongly prefer 壊(こわ)れた (it broke) over 壊(こわ)した (I broke it) to describe accidents. This is not about avoiding blame. Japanese grammar naturally frames events from the perspective of the affected object."},

    {type:"mc", q:"What is the transitive pair of 開(あ)く (to open by itself)?", opts:["開(あ)ける","開(あ)く","開(あ)かす","開(あ)い"], ans:"開(あ)ける",
     hint:"The transitive form means someone actively opens something."},

    {type:"teach", trg:"落(お)ちる", src:"to fall / to drop / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 葉(は)っぱが落(お)ちる. Pair: 落(お)とす (transitive, to drop).\n試験(しけん)に落(お)ちる = to fail an exam.",
     example:"A: 財布(さいふ)を落(お)としました。\nB: どこで落(お)ちたかわかりますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I dropped my wallet.\nB: Do you know where it fell?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"落(お)ちる/落(お)とす is interesting because 落(お)ちる extends to abstract meanings: 試験(しけん)に落(お)ちる (fail an exam), 人気(にんき)が落(お)ちる (popularity drops), 稲妻(いなずま)が落(お)ちる (lightning strikes). 落(お)とす has its own extensions: 電話(でんわ)を落(お)とす (to drop a call), 色(いろ)を落(お)とす (to remove color)."},

    {type:"teach", trg:"変(か)わる", src:"to change / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 季節(きせつ)が変(か)わる. Pair: 変(か)える (transitive, to change something).\n色(いろ)が変(か)わる = the color changes.",
     example:"A: 町(まち)がずいぶん変(か)わりましたね。\nB: 十年(じゅうねん)前(まえ)と全然(ぜんぜん)違(ちが)います。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The town has changed quite a lot.\nB: It is completely different from ten years ago.\nA: How was it?\nB: It was very good.",
     funFact:"変(か)わる/変(か)える is one of the trickiest pairs because 変(か)える has multiple unrelated meanings: 帰(かえ)る (to return home), 変(か)える (to change something), and 買(か)える (to be able to buy). Context and kanji distinguish them. 気持(きも)ちが変(か)わる (feelings change) uses intransitive naturally."},

    {type:"teach", trg:"育(そだ)つ", src:"to grow up / to be raised / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 子供(こども)が育(そだ)つ. Pair: 育(そだ)てる (transitive, to raise).\n育(そだ)った = I grew up in.",
     example:"A: どこで育(そだ)ちましたか？\nB: 大阪(おおさか)で育(そだ)ちました。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Where did you grow up?\nB: I grew up in Osaka.\nA: When was it?\nB: It was last summer.",
     funFact:"育(そだ)つ/育(そだ)てる is a beautiful pair. 子供(こども)が育(そだ)つ (a child grows up) vs. 子供(こども)を育(そだ)てる (to raise a child). 子育(こそだ)て (child-raising) is a major topic in Japan. Plants also 育(そだ)つ: 花(はな)が育(そだ)つ (flowers grow). 育(そだ)ちがいい (well-raised) describes someone's upbringing."},

    {type:"teach", trg:"混(ま)ざる", src:"to be mixed / to mingle / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 色(いろ)が混(ま)ざる. Pair: 混(ま)ぜる (transitive, to mix).\n混(ま)ざっている = mixed together.",
     example:"A: いろいろな文化(ぶんか)が混(ま)ざっています。\nB: 多文化(たぶんか)社会(しゃかい)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Various cultures are mixed together.\nB: It is a multicultural society.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"混(ま)ざる/混(ま)ぜる is another essential pair. 混乱(こんらん)が混(ま)ざる (confusion is mixed in), 群衆(ぐんしゅう)に混(ま)ざる (to mingle in a crowd). The intransitive 混(ま)ざる emphasizes the resulting state of being mixed, while 混(ま)ぜる emphasizes the action of mixing."},

    {type:"teach", trg:"映(うつ)る", src:"to move / to transfer / to be reflected / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 鏡(かがみ)に映(うつ)る (reflected in mirror). Pair: 映(うつ)す (transitive).\nMultiple meanings depending on kanji.",
     example:"A: 水(みず)に山(やま)が映(うつ)っています。\nB: きれいですね。写真(しゃしん)を撮(と)りましょう。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: The mountain is reflected in the water.\nB: Beautiful. Let us take a photo.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"映(うつ)る has several kanji: 映(うつ)る (to be reflected), 移(うつ)る (to move/transfer), 写(うつ)る (to appear in a photo). Each pairs with 映(うつ)す: 映(うつ)す (to project), 移(うつ)す (to move something), 写(うつ)す (to copy/photograph). This one-sound, many-meaning pattern is typical of Japanese."},

    {type:"fb", s:"パソコンが{1}てしまいました。\n(My computer broke.)", a:"壊(こわ)れ", opts:["壊(こわ)れ","壊(こわ)し","落(お)ち","開(あ)き"], sSrc:"My computer broke.",
     hint:"Use the intransitive form because the computer broke on its own."},

    {type:"teach", trg:"溜(た)まる", src:"to accumulate / to pile up / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ストレスが溜(た)まる. Pair: 溜(た)める (transitive, to save/accumulate).\nお金(かね)が溜(た)まる = money accumulates.",
     example:"A: 仕事(しごと)が溜(た)まっています。\nB: 少(すこ)しずつ片付(かたづ)けましょう。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Work has piled up.\nB: Let us handle it little by little.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"溜(た)まる/溜(た)める is great for everyday complaints: ストレスが溜(た)まる (stress piles up), 洗濯物(せんたくもの)が溜(た)まる (laundry piles up), 疲(つか)れが溜(た)まる (fatigue accumulates). The transitive 溜(た)める is positive: お金(かね)を溜(た)める (to save money), ポイントを溜(た)める (to collect points)."},

    {type:"teach", trg:"直(なお)る", src:"to be fixed / to heal / intransitive", pos:"verb", gender:null,
     note:"Intransitive: 風邪(かぜ)が直(なお)る (cold heals). Pair: 直(なお)す (transitive, to fix/heal).\nAlso: to return to normal.",
     example:"A: パソコンが直(なお)りました。\nB: よかったですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: The computer is fixed.\nB: That is good.\nA: How long did it take?\nB: About two hours.",
     funFact:"直(なお)る/直(なお)す covers both mechanical fixing and medical healing. 病気(びょうき)が直(なお)る (illness heals), 癖(くせ)が直(なお)る (habit is corrected), 車(くるま)を直(なお)す (to fix a car), 間違(まちが)いを直(なお)す (to correct a mistake). Japanese people say おだいじに hoping the person's illness 直(なお)る."},

    {type:"match", pairs:[{trg:"開(あ)く/開(あ)ける",src:"to open"},{trg:"閉(し)まる/閉(し)める",src:"to close"},{trg:"壊(こわ)れる/壊(こわ)す",src:"to break"},{trg:"落(お)ちる/落(お)とす",src:"to fall/drop"},{trg:"直(なお)る/直(なお)す",src:"to be fixed/to fix"}],
     hint:"Match each transitivity pair with its shared English meaning."},

    {type:"mc", q:"Why do Japanese speakers prefer 壊(こわ)れた (it broke) over 壊(こわ)した (I broke it)?", opts:["Japanese naturally frames events from the perspective of the affected object","To avoid taking responsibility","Because transitive verbs are harder to conjugate","Because Japanese has no transitive verbs"], ans:"Japanese naturally frames events from the perspective of the affected object",
     hint:"This reflects how J... grammar describes e..., not a cultural avoidance."},

    {type:"fb", s:"季節(きせつ)が{1}ましたね。\n(The season has changed, hasn't it.)", a:"変(か)わり", opts:["変(か)わり","変(か)え","直(なお)り","映(うつ)り"], sSrc:"The season has changed, hasn't it.",
     hint:"Use the intransitive form because the season changes naturally on its own."},

    {type:"mc", q:"Which pair means 'to grow up / to raise'?", opts:["育(そだ)つ / 育(そだ)てる","開(あ)く / 開(あ)ける","壊(こわ)れる / 壊(こわ)す","決(き)まる / 決(き)める"], ans:"育(そだ)つ / 育(そだ)てる",
     hint:"The intransitive form describes a child growing, the transitive describes raising a child."}
  ,{type:"match",pairs:[{trg:"点(つ)く",src:"to be attached / to turn on / intransitive"},{trg:"変(か)わる",src:"to change / intransitive"},{trg:"混(ま)ざる",src:"to be mixed / to mingle / intransitive"},{trg:"映(うつ)る",src:"to move / to transfer / to be reflected / intransitive"},{trg:"溜(た)まる",src:"to accumulate / to pile up / intransitive"}]}]
};
export default BATCH8_L1;
