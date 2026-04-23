// Japanese V2 Unit 17. 受(う)け身(み) (Passive Voice)
import BATCH11_L1 from './_batch11_u17_L01.js';
import BATCH10_L1 from './_batch10_u17_L01.js';
import BATCH9_L1 from './_batch9_u17_L01.js';
import BATCH7_L1 from './_batch7_u17_L01.js';
import BATCH8_L1 from './_batch8_u17_L01.js';
import BATCH6_L1 from './_batch6_u17_L01.js';
import BATCH5_L02 from './_batch5_u17_L02.js';
import BATCH5_L01 from './_batch5_u17_L01.js';
import BATCH2_L02 from './_batch2_u17_L02.js';
import BATCH2_L01 from './_batch2_u17_L01.js';
import EXP_L3 from './_temp_u17_expand_L01.js';import EXP_L4 from './_temp_u17_expand_L02.js';import EXP_L5 from './_temp_u17_expand_L03.js';
import COVERAGE_U17 from './_coverage_u17.js';
// Level: B1.1. JLPT N3 aligned.
// Passive formation (られる/あれる), direct passive, adversity passive.

const UNIT_17 = {
  n:17, lang:"ja", srcLang:"en", track:"v2",
  title:"受(う)け身(み)", sub:"Passive Voice",
  icon:"🪞", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: れる・られる (Direct Passive) ═══
{id:"jav2_u17l1", title:"れる・られる", icon:"📢", xp:15, board:true, steps:[
  {type:"intro", title:"れる・られる",
   desc:"Learn the passive voice in Japanese. The passive lets you describe actions from the receiver's perspective: 'was praised,' 'was chosen,' 'was invited.' Japanese uses passive much more than English, especially to describe experiences and emotions.",
   goals:["Form passive verbs with れる (Group 1) and られる (Group 2)","Use direct passive to describe receiving actions","Understand する → される and くる → こられる"]},

  {type:"teach", trg:"〜れる・〜られる", src:"passive suffix (is done / was done)", pos:"part", gender:null,
   note:"Group 1: change う-ending to あ-row + れる.\nGroup 2: stem + られる. する → される. くる → こられる.",
   example:"A: 先生(せんせい)に褒(ほ)められました。\nB: よかったですね！\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: I was praised by the teacher.\nB: That is great!\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"Japanese passive is far more common than English passive. It naturally expresses the receiver's feelings, making it essential for polite and empathetic speech. The particle に marks the agent (the doer) in passive sentences."},

  {type:"teach", trg:"褒(ほ)められる", src:"to be praised", pos:"verb", gender:null,
   note:"Passive of 褒(ほ)める (to praise). 褒(ほ)められた = was praised.\nGroup 2 verb: stem 褒(ほ)め + られる.",
   example:"A: 昨日(きのう)社長(しゃちょう)に褒(ほ)められました。\nB: それは嬉(うれ)しいですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: I was praised by the company president yesterday.\nB: That must make you happy.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"Being praised by superiors carries enormous weight in Japanese work culture. The phrase sensei ni homerareta (was praised by the teacher) is a milestone moment for students. Praise in Japan tends to be understated but deeply felt."},

  {type:"teach", trg:"選(えら)ばれる", src:"to be chosen / to be selected", pos:"verb", gender:null,
   note:"Passive of 選(えら)ぶ (to choose). Group 1: 選(えら)ぶ → 選(えら)ば + れる.\nKanji: 選ばれる.",
   example:"A: リーダーに選(えら)ばれました。\nB: おめでとうございます！\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: I was chosen as the leader.\nB: Congratulations!\nA: How long did it take?\nB: About two hours.",
   funFact:"選ぶ (to choose) becomes 選ばれる in the passive. The kanji 選 appears in 選挙 (election) and 選手 (athlete/player). Being chosen (erabareru) carries a sense of honor and responsibility in Japanese group culture."},

  {type:"teach", trg:"招待(しょうたい)される", src:"to be invited", pos:"verb", gender:null,
   note:"Passive of 招待(しょうたい)する (to invite). する-verb → される.\nKanji: 招待される.",
   example:"A: パーティーに招待(しょうたい)されました。\nB: 誰(だれ)に招待(しょうたい)されましたか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: I was invited to a party.\nB: Who were you invited by?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"招待 combines 招 (beckon) and 待 (wait). Formal invitations in Japan are taken seriously. Declining an invitation requires careful politeness. Wedding invitations include a return postcard (返信はがき) where guests circle 出席 (attend) or 欠席 (decline)."},

  {type:"mc", q:"先生(せんせい)に褒(ほ)められた means:", opts:["I was praised by the teacher","The teacher was praised","I praised the teacher","I will praise the teacher"], ans:"I was praised by the teacher",
   hint:"The passive られた shows the speaker received the action. に marks who did it."},

  {type:"teach", trg:"叱(しか)られる", src:"to be scolded", pos:"verb", gender:null,
   note:"Passive of 叱(しか)る (to scold). Group 1: 叱(しか)る → 叱(しか)ら + れる.\nKanji: 叱られる.",
   example:"A: 遅(おく)れたので叱(しか)られました。\nB: 大変(たいへん)でしたね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: I was scolded because I was late.\nB: That must have been tough.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"叱る (to scold) is distinguished from 怒る (to get angry). Shikaru implies corrective scolding with good intent, while okoru is emotional anger. Teachers and parents shikaru, while okoru is considered less constructive. The passive shikarareru emphasizes how it feels to receive the scolding."},

  {type:"teach", trg:"呼(よ)ばれる", src:"to be called / to be invited (casual)", pos:"verb", gender:null,
   note:"Passive of 呼(よ)ぶ (to call). Group 1: 呼(よ)ぶ → 呼(よ)ば + れる.\nAlso means 'to be referred to as.'",
   example:"A: みんなにタカちゃんと呼(よ)ばれています。\nB: かわいいニックネームですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: I am called Taka-chan by everyone.\nB: That is a cute nickname.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"呼ばれる has two common uses: being called by name (名前(なまえ)で呼(よ)ばれる) and being casually invited to eat (ご飯(はん)に呼(よ)ばれる, literally 'being called to a meal'). Adding ちゃん to a shortened name creates an affectionate nickname common among friends."},

  {type:"tip", title:"Passive Formation Rules",
   text:"Group 1 (う-verbs): change the final う-sound to the あ-row, then add れる.\n読(よ)む → 読(よ)まれる, 書(か)く → 書(か)かれる, 話(はな)す → 話(はな)される\n\nGroup 2 (る-verbs): remove る, add られる.\n食(た)べる → 食(た)べられる, 見(み)る → 見(み)られる\n\nIrregulars:\nする → される\nくる → こられる\n\nThe agent (doer) is marked with に: 先生(せんせい)に (by the teacher).",
   deepDive:{title:"Why Japanese Loves Passive",
    text:"English avoids passive ('mistakes were made' sounds evasive), but Japanese embraces it. Passive naturally puts the experiencer first, which fits Japanese communication style. Saying 'I was praised' feels more humble than 'the teacher praised me.' The passive also avoids directly naming the agent when it is obvious or when naming them would be impolite."}},

  {type:"fb", s:"リーダーに{1}ました。\n(I was chosen as the leader.)", a:"選(えら)ばれ", opts:["選(えら)ばれ","選(えら)んで","選(えら)び","選(えら)ぶ"], sSrc:"I was chosen as the leader.",
   hint:"The passive form of 選(えら)ぶ (to choose). Group 1 passive: あ-row + れる."},

  {type:"teach", trg:"頼(たの)まれる", src:"to be asked (a favor) / to be requested", pos:"verb", gender:null,
   note:"Passive of 頼(たの)む (to request). Group 1: 頼(たの)む → 頼(たの)ま + れる.\nKanji: 頼まれる.",
   example:"A: 友達(ともだち)に引(ひ)っ越(こ)しを頼(たの)まれました。\nB: 手伝(てつだ)いますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: I was asked by a friend to help with moving.\nB: Will you help?\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"頼む (to ask a favor) is one of the most socially important verbs. Being asked (tanomareru) implies trust and closeness. In Japan, refusing a request requires extreme tact. The passive form emphasizes that the request came to you, not that you sought it out."},

  {type:"teach", trg:"作(つく)られる", src:"to be made / to be created", pos:"verb", gender:null,
   note:"Passive of 作(つく)る (to make). Group 1: 作(つく)る → 作(つく)ら + れる.\nKanji: 作られる.",
   example:"A: このお寺(てら)はいつ作(つく)られましたか？\nB: 約(やく)500年前(ねんまえ)に作(つく)られました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: When was this temple built?\nB: It was built about 500 years ago.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"作られる is essential for describing history and origins. Japanese historical sites often have signs saying 'this was built in year X.' The passive voice is the default for historical descriptions, just as in English museum labels. 作 also appears in 作品 (artwork) and 作家 (author)."},

  {type:"mc", q:"友達(ともだち)に頼(たの)まれた means:", opts:["I asked my friend","I was asked by my friend","My friend was asked","I will ask my friend"], ans:"I was asked by my friend",
   hint:"The passive form shows the speaker was on the receiving end. に marks the agent who made the request."},

  {type:"match", pairs:[{trg:"褒(ほ)められる",src:"to be praised"},{trg:"選(えら)ばれる",src:"to be chosen"},{trg:"叱(しか)られる",src:"to be scolded"},{trg:"招待(しょうたい)される",src:"to be invited"}]},

  {type:"match", pairs:[{trg:"呼(よ)ばれる",src:"to be called"},{trg:"頼(たの)まれる",src:"to be asked"},{trg:"作(つく)られる",src:"to be made"},{trg:"される",src:"passive of する"}]},

  {type:"fb", s:"パーティーに{1}されました。\n(I was invited to a party.)", a:"招待(しょうたい)", opts:["招待(しょうたい)","紹介(しょうかい)","連絡(れんらく)","案内(あんない)"], sSrc:"I was invited to a party.",
   hint:"The する-verb meaning 'to invite' formally. 招 (beckon) + 待 (wait)."},

  {type:"mc", q:"How do you form the passive of a Group 2 verb like 食(た)べる?", opts:["食(た)べされる","食(た)べれる","食(た)べられる","食(た)べさせる"], ans:"食(た)べられる",
   hint:"Group 2 verbs drop る and add られる for the passive."},
]},

// ═══ L2: 迷惑(めいわく)の受(う)け身(み) (Adversity Passive) ═══
{id:"jav2_u17l2", title:"迷惑(めいわく)の受(う)け身(み)", icon:"😩", xp:15, board:true, steps:[
  {type:"intro", title:"迷惑(めいわく)の受(う)け身(み)",
   desc:"Discover the adversity passive, a uniquely Japanese construction. When something happens that negatively affects you, Japanese uses passive to express that you were 'victimized' by the event, even with intransitive verbs like rain or crying.",
   goals:["Use adversity passive to express inconvenience or misfortune","Form passive with intransitive verbs (rain, cry, die)","Distinguish direct passive from adversity passive"]},

  {type:"teach", trg:"雨(あめ)に降(ふ)られる", src:"to get rained on (adversity passive)", pos:"verb", gender:null,
   note:"降(ふ)る (to fall/rain) is intransitive, but passive works to show being affected.\nLiterally: 'to suffer rain falling.'",
   example:"A: 雨(あめ)に降(ふ)られてずぶ濡(ぬ)れになりました。\nB: 大変(たいへん)でしたね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: I got rained on and became soaking wet.\nB: That must have been rough.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"The adversity passive (meiwaku no ukemi) is unique to Japanese. English cannot say 'I was rained.' But Japanese uses passive with any verb to show the speaker was negatively affected. This construction reveals how Japanese grammar centers on the speaker's experience and feelings."},

  {type:"teach", trg:"泣(な)かれる", src:"to have someone cry on you (adversity)", pos:"verb", gender:null,
   note:"Passive of 泣(な)く (to cry). The speaker is bothered by the crying.\nGroup 1: 泣(な)く → 泣(な)か + れる.",
   example:"A: 電車(でんしゃ)で赤(あか)ちゃんに泣(な)かれました。\nB: 眠(ねむ)れませんでしたか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: A baby cried on me on the train.\nB: Could you not sleep?\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"This is a classic adversity passive example. A baby crying is not directed at you, but Japanese expresses your suffering through passive voice. Compare: 赤(あか)ちゃんが泣(な)いた (the baby cried, neutral) vs. 赤(あか)ちゃんに泣(な)かれた (I suffered the baby crying). The に marks the source of your misfortune."},

  {type:"teach", trg:"死(し)なれる", src:"to suffer someone's death (adversity)", pos:"verb", gender:null,
   note:"Passive of 死(し)ぬ (to die). Expresses the grief and impact of loss.\nGroup 1: 死(し)ぬ → 死(し)な + れる.",
   example:"A: 若(わか)い時(とき)に父(ちち)に死(し)なれました。\nB: それは辛(つら)かったでしょう。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: My father died on me when I was young.\nB: That must have been painful.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"死なれる is one of the most emotionally powerful uses of adversity passive. It expresses not just that someone died, but that their death deeply affected and burdened the speaker. This construction has no English equivalent. It shows how Japanese grammar encodes emotional impact directly into verb forms."},

  {type:"mc", q:"雨(あめ)に降(ふ)られた expresses:", opts:["It rained and I was negatively affected","It rained and I enjoyed it","I made it rain","I predicted rain"], ans:"It rained and I was negatively affected",
   hint:"The adversity passive shows the speaker suffered because of the rain."},

  {type:"teach", trg:"騒(さわ)がれる", src:"to be disturbed by noise", pos:"verb", gender:null,
   note:"Passive of 騒(さわ)ぐ (to make noise/be rowdy). Group 1: 騒(さわ)ぐ → 騒(さわ)が + れる.\nExpresses annoyance at others being noisy.",
   example:"A: 隣(となり)の部屋(へや)の人(ひと)に騒(さわ)がれて眠(ねむ)れませんでした。\nB: それは困(こま)りますね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: I was kept awake by the person in the next room being noisy.\nB: That is troublesome.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"騒がれる perfectly illustrates adversity passive. The noise was not directed at you, but you suffered from it. Japanese apartment living makes this a very relatable complaint. The word sawagu can describe anything from children playing loudly to a drunken commotion."},

  {type:"teach", trg:"盗(ぬす)まれる", src:"to have something stolen", pos:"verb", gender:null,
   note:"Passive of 盗(ぬす)む (to steal). Group 1: 盗(ぬす)む → 盗(ぬす)ま + れる.\nKanji: 盗まれる.",
   example:"A: 電車(でんしゃ)で財布(さいふ)を盗(ぬす)まれました。\nB: 警察(けいさつ)に行(い)きましたか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: I had my wallet stolen on the train.\nB: Did you go to the police?\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"盗む (to steal) uses the kanji showing a dish (皿) being covered and taken. While Japan is famously safe, pickpocketing exists in crowded trains. The passive 盗まれる emphasizes the victim's perspective. Note the possessive pattern: 財布(さいふ)を (wallet) marks what was stolen."},

  {type:"teach", trg:"踏(ふ)まれる", src:"to be stepped on", pos:"verb", gender:null,
   note:"Passive of 踏(ふ)む (to step on). Group 1: 踏(ふ)む → 踏(ふ)ま + れる.\nKanji: 踏まれる.",
   example:"A: 電車(でんしゃ)で足(あし)を踏(ふ)まれました。\nB: 痛(いた)かったですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: I had my foot stepped on in the train.\nB: Did it hurt?\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"This is a common adversity passive used on crowded trains. The pattern 足(あし)を踏(ふ)まれる (to have one's foot stepped on) is a shared urban experience in Tokyo. Rush hour trains (ラッシュアワー) pack so tightly that foot-stepping is almost inevitable."},

  {type:"tip", title:"Direct vs. Adversity Passive",
   text:"Direct passive: the action is done TO you.\n褒(ほ)められた = I was praised.\n選(えら)ばれた = I was chosen.\n\nAdversity passive: something happens and it affects you negatively.\n雨(あめ)に降(ふ)られた = I got rained on.\n泣(な)かれた = someone cried (and it bothered me).\n\nKey difference: adversity passive works with intransitive verbs (rain, cry, die) that cannot take a direct object. The speaker is always the 'victim.'",
   deepDive:{title:"The Suffering Passive",
    text:"Linguists call this the 'suffering passive' or 'indirect passive.' It exists only in Japanese (and a few related languages). The speaker is not the grammatical object of the verb. Instead, the speaker is affected by the entire event.\n\nPattern: [experiencer] は [agent] に [verb-passive]\n私(わたし)は 雨(あめ)に 降(ふ)られた。\n(I [topic] rain [agent] was-fallen-on.)\n\nThis construction is very productive. Almost any verb can be put into adversity passive to express that you were inconvenienced."}},

  {type:"fb", s:"電車(でんしゃ)で足(あし)を{1}ました。\n(I had my foot stepped on in the train.)", a:"踏(ふ)まれ", opts:["踏(ふ)まれ","踏(ふ)んで","踏(ふ)み","踏(ふ)まえ"], sSrc:"I had my foot stepped on in the train.",
   hint:"The passive form of 踏(ふ)む (to step on). Group 1 passive: あ-row + れる."},

  {type:"teach", trg:"笑(わら)われる", src:"to be laughed at", pos:"verb", gender:null,
   note:"Passive of 笑(わら)う (to laugh). Group 1: 笑(わら)う → 笑(わら)わ + れる.\nKanji: 笑われる.",
   example:"A: 発音(はつおん)を笑(わら)われて恥(は)ずかしかったです。\nB: 気(き)にしないでください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: I was laughed at for my pronunciation and felt embarrassed.\nB: Please do not worry about it.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"笑われる can be either direct passive (someone laughed at you intentionally) or adversity passive (people laughed and you felt bad). Context determines which reading applies. Fear of being laughed at (warawareru) is a strong social motivator in Japanese culture."},

  {type:"teach", trg:"恥(は)ずかしい", src:"embarrassing / shy / ashamed", pos:"adj", gender:null,
   note:"い-adjective covering embarrassment, shyness, and shame.\nKanji: 恥ずかしい. A key emotion word.",
   example:"A: みんなの前(まえ)で恥(は)ずかしかったです。\nB: 大丈夫(だいじょうぶ)ですよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: I was embarrassed in front of everyone.\nB: It is okay.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"恥ずかしい covers a wider emotional range than English 'embarrassed.' It includes shyness, modesty, and social shame. The related noun 恥 (haji, shame) is central to Japanese culture. Ruth Benedict's famous book described Japan as a 'shame culture' as opposed to a 'guilt culture.'"},

  {type:"mc", q:"財布(さいふ)を盗(ぬす)まれた means:", opts:["I stole a wallet","I had my wallet stolen","Someone found my wallet","I lost my wallet"], ans:"I had my wallet stolen",
   hint:"The passive of 盗(ぬす)む (steal) with 財布(さいふ)を shows the item was taken from the speaker."},

  {type:"match", pairs:[{trg:"雨(あめ)に降(ふ)られる",src:"to get rained on"},{trg:"泣(な)かれる",src:"to have someone cry on you"},{trg:"騒(さわ)がれる",src:"to be disturbed by noise"},{trg:"盗(ぬす)まれる",src:"to have something stolen"}]},

  {type:"fb", s:"発音(はつおん)を{1}て恥(は)ずかしかったです。\n(I was laughed at for my pronunciation and was embarrassed.)", a:"笑(わら)われ", opts:["笑(わら)われ","笑(わら)って","笑(わら)い","笑(わら)った"], sSrc:"I was laughed at for my pronunciation and was embarrassed.",
   hint:"The passive て-form of 笑(わら)う (to laugh). Group 1 passive: 笑(わら)う → 笑(わら)われる."},

  {type:"match", pairs:[{trg:"踏(ふ)まれる",src:"to be stepped on"},{trg:"笑(わら)われる",src:"to be laughed at"},{trg:"死(し)なれる",src:"to suffer someone's death"},{trg:"恥(は)ずかしい",src:"embarrassing"}]},

  {type:"mc", q:"Which sentence uses ADVERSITY passive (not direct)?", opts:["褒(ほ)められた (was praised)","選(えら)ばれた (was chosen)","雨(あめ)に降(ふ)られた (got rained on)","招待(しょうたい)された (was invited)"], ans:"雨(あめ)に降(ふ)られた (got rained on)",
   hint:"Adversity passive uses intransitive verbs where the speaker is not the direct object but suffers from the event."},

  {type:"fb", s:"人前(ひとまえ)で間違(まちが)えて、とても{1}かったです。",
   a:["恥(は)ずかしい"],
   opts:["恥(は)ずかしい","悔(くや)しい","懐(なつ)かしい","寂(さび)しい"],
   hint:"You made a mistake in front of others and felt a strong sense of social discomfort. This i-adjective covers embarrassment and shame.",
   sSrc:"I made a mistake in front of others and felt very {1}."},

  {type:"fb", s:"財布(さいふ)を{1}時(とき)は、すぐに警察(けいさつ)に行(い)ってください。",
   a:["盗(ぬす)まれる"],
   opts:["盗(ぬす)まれる","盗(ぬす)む","踏(ふ)まれる","笑(わら)われる"],
   hint:"If your wallet is taken by a thief, you should go to the police right away. This passive verb means 'to have something stolen.'",
   sSrc:"If you are {1}, please go to the police immediately."},

{type:"match",pairs:[{trg:"〜れる・〜られる",src:"passive suffix (is done / was done)"}]}]},

// ═══ L3: 連体修飾 (Relative Clauses) ═══
{id:"jav2_u17l_rentai", title:"連体修飾(れんたいしゅうしょく)", icon:"🔗", xp:15, board:true, steps:[
  {type:"intro", title:"連体修飾(れんたいしゅうしょく)",
   desc:"In Japanese, whole clauses can directly modify nouns, placed before the noun, in plain form, with no relative pronoun needed. This is called rentai shuushoku (pre-nominal modification). Instead of 'the book that I read,' Japanese says 'I-read book': 私(わたし)が読(よ)んだ本(ほん)。 This single structure covers 'who,' 'which,' 'that,' and 'where' clauses in English.",
   goals:["Form relative clauses with godan, ichidan, and irregular verbs in plain past form","Modify nouns with い-adjectives and な-adjectives directly","Understand the particle-drop rule inside relative clauses"]},

  {type:"tip", title:"How Relative Clauses Work in Japanese",
   text:"English: 'the book [that I read]', relative pronoun 'that' links clause to noun.\nJapanese: [私(わたし)が読(よ)んだ] 本(ほん), clause comes first, noun comes last. No connector word.\n\nStructure: [CLAUSE in plain form] + NOUN\n\nExamples:\n• 私(わたし)が読(よ)んだ本(ほん) = the book I read\n• 先生(せんせい)に褒(ほ)められた学生(がくせい) = the student who was praised by the teacher\n• 静(しず)かな場所(ばしょ) = a quiet place\n• 大(おお)きい公園(こうえん) = a big park\n\nKey rule: the verb or adjective inside the clause is always in plain form, never polite (ます/です).",
   deepDive:{title:"The Particle-Drop Rule",
    text:"Inside a relative clause, the subject is often marked with が, but it can also be marked with の instead:\n私(わたし)が読(よ)んだ本(ほん) = 私(わたし)の読(よ)んだ本(ほん) (both correct)\n\nThe topic particle は cannot appear inside a relative clause. If the original sentence has は, it disappears or shifts to が:\nOriginal: 私(わたし)は本(ほん)を読(よ)んだ。\nRelative: 私(わたし)が読(よ)んだ本(ほん) (は → が)\n\nThis は-to-が shift is one of the most important and most tested features of relative clauses at JLPT N4/N3."}},

  {type:"teach", trg:"私(わたし)が読(よ)んだ本(ほん)", src:"the book I read (godan verb)", pos:"noun", gender:null,
   note:"読(よ)む is a godan verb. Plain past: 読(よ)んだ.\n読(よ)んだ modifies 本(ほん), no connector word needed.",
   example:"A: あの本(ほん)はどうでしたか？\nB: 昨日(きのう)読(よ)んだ本(ほん)はとてもおもしろかったです。\nA: どんな内容(ないよう)ですか？\nB: 日本(にほん)の歴史(れきし)についての本(ほん)です。",
   exampleSrc:"A: How was that book?\nB: The book I read yesterday was very interesting.\nA: What is it about?\nB: It is a book about the history of Japan.",
   funFact:"読む (to read) is one of the most frequently relativized verbs in JLPT N4 reading tasks. The pattern 読んだ本 appears in almost every N4 grammar exam. Godan past-plain formation: む → んだ (the same ん contraction used in て-form)."},

  {type:"teach", trg:"母(はは)が作(つく)った料理(りょうり)", src:"the dish my mother made (godan verb)", pos:"noun", gender:null,
   note:"作(つく)る is a godan verb. Plain past: 作(つく)った.\n作(つく)った modifies 料理(りょうり).",
   example:"A: この料理(りょうり)、おいしいですね。\nB: ありがとうございます。母(はは)が作(つく)った料理(りょうり)です。\nA: いつもおいしいですね。\nB: はい、母(はは)の料理(りょうり)が大好(だいす)きです。",
   exampleSrc:"A: This dish is delicious!\nB: Thank you. It is a dish my mother made.\nA: It is always delicious.\nB: Yes, I love my mother's cooking.",
   funFact:"作る (to make/cook) uses the godan past rule: る → った (not to be confused with ichidan verbs which also end in る but follow a different rule). The distinction, godan vs ichidan, is the core challenge of plain-form relative clauses."},

  {type:"teach", trg:"昨日(きのう)食(た)べた寿司(すし)", src:"the sushi I ate yesterday (ichidan verb)", pos:"noun", gender:null,
   note:"食(た)べる is an ichidan verb. Plain past: 食(た)べた.\nStem 食(た)べ + た → 食(た)べた.",
   example:"A: 昨日(きのう)食(た)べた寿司(すし)はどうでしたか？\nB: とてもおいしかったです。\nA: どのお店(みせ)でしたか？\nB: 駅(えき)の近(ちか)くのお店(みせ)です。",
   exampleSrc:"A: How was the sushi you ate yesterday?\nB: It was very delicious.\nA: Which restaurant was it?\nB: It is a restaurant near the station.",
   funFact:"食べる (to eat) is an ichidan verb: the stem 食べ stays intact, and た attaches directly. Compare with the godan 読む → 読んだ. This godan/ichidan distinction is the most common source of errors on JLPT N4. The plain past form is identical to the form used in relative clauses."},

  {type:"teach", trg:"先生(せんせい)がした説明(せつめい)", src:"the explanation the teacher did (irregular する)", pos:"noun", gender:null,
   note:"する is an irregular verb. Plain past: した.\nした modifies 説明(せつめい).",
   example:"A: 先生(せんせい)がした説明(せつめい)はわかりやすかったですか？\nB: はい、とてもわかりやすかったです。\nA: どんな内容(ないよう)でしたか？\nB: 受(う)け身(み)の使(つか)い方(かた)についてでした。",
   exampleSrc:"A: Was the explanation the teacher gave easy to understand?\nB: Yes, it was very easy to understand.\nA: What was it about?\nB: It was about how to use the passive voice.",
   funFact:"する → した is the most productive relativization in Japanese. Any noun + する compound can become a relative clause: 勉強(べんきょう)した内容(ないよう) (the content I studied), 練習(れんしゅう)した表現(ひょうげん) (the expression I practiced). This pattern is extremely common in academic and professional writing."},

  {type:"teach", trg:"大(おお)きい公園(こうえん)", src:"a big park (い-adjective modifying noun)", pos:"noun", gender:null,
   note:"い-adjectives modify nouns directly: 大(おお)きい + 公園(こうえん).\nNo change to the adjective form. Same as English word order.",
   example:"A: 近(ちか)くに大(おお)きい公園(こうえん)がありますか？\nB: はい、駅(えき)の前(まえ)に大(おお)きい公園(こうえん)があります。\nA: よく行(い)きますか？\nB: 週末(しゅうまつ)によく行(い)きます。",
   exampleSrc:"A: Is there a big park nearby?\nB: Yes, there is a big park in front of the station.\nA: Do you often go?\nB: I often go on weekends.",
   funFact:"い-adjective modification is the simplest case of rentai shuushoku. The adjective sits directly before the noun with no change: 大きい公園, 小さい店, おいしい料理. This structure exists in English too ('big park'), but in Japanese it generalizes to full clauses, the same pattern that handles entire verb phrases."},

  {type:"teach", trg:"静(しず)かな場所(ばしょ)", src:"a quiet place (な-adjective + な)", pos:"noun", gender:null,
   note:"な-adjectives add な before a noun: 静(しず)か → 静(しず)かな.\nWithout な, 静(しず)か cannot directly precede a noun.",
   example:"A: 静(しず)かな場所(ばしょ)で勉強(べんきょう)したいです。\nB: 公園(こうえん)はどうですか？\nA: 公園(こうえん)は遠(とお)いですか？\nB: いいえ、駅(えき)から歩(ある)いて五分(ごふん)ぐらいです。",
   exampleSrc:"A: I want to study in a quiet place.\nB: How about the park?\nA: Is the park far?\nB: No, it is about five minutes' walk from the station.",
   funFact:"な-adjectives (called 形容動詞 keiyou doushi in Japanese grammar) take な when modifying nouns and に when modifying verbs. 静か is the prototype na-adjective for JLPT N4 examples. The pair 静かな / 静かに (quiet / quietly) captures the two key uses perfectly."},

  {type:"tip", title:"Common Learner Pitfalls",
   text:"Pitfall 1: Using ます/です form inside relative clauses.\nWRONG: 読みます本, verbs in relative clauses must be plain form.\nCORRECT: 読んだ本\n\nPitfall 2: Forgetting な for な-adjectives before nouns.\nWRONG: 静か場所, the な connector is mandatory.\nCORRECT: 静かな場所\n\nPitfall 3: Leaving は inside the relative clause.\nWRONG: 私は読んだ本, は cannot be the subject of a relative clause.\nCORRECT: 私が読んだ本\n\nPitfall 4: Placing the noun before the clause (English word order).\nWRONG: 本・私が読んだ\nCORRECT: 私が読んだ本 (clause + noun, always)",
   deepDive:{title:"Non-Past Relative Clauses",
    text:"Relative clauses also use the non-past plain form for present or future reference:\n\n今(いま)読(よ)んでいる本(ほん) = the book I am reading now (progressive)\n明日(あした)食(た)べる寿司(すし) = the sushi I will eat tomorrow (future)\n先生(せんせい)がする説明(せつめい) = the explanation the teacher will give\n\nThe て-form + いる construction inside a relative clause gives a progressive meaning. This is how Japanese handles 'the book I am reading' without a separate relative pronoun."}},

  {type:"mc", q:"Which sentence correctly modifies 本(ほん) with a relative clause?", opts:["私(わたし)が読(よ)んだ本(ほん)","読(よ)んだ私(わたし)の本(ほん)","本(ほん)私(わたし)が読(よ)んだ","私(わたし)は読みます本(ほん)"],
   ans:"私(わたし)が読(よ)んだ本(ほん)",
   hint:"The clause uses plain past form and comes before the noun. は cannot be the subject inside a relative clause."},

  {type:"mc", q:"母(はは)が作(つく)った料理(りょうり) is best translated as:", opts:["food that made my mother","the dish my mother made","my mother makes food","the mother who made food"],
   ans:"the dish my mother made",
   hint:"作った modifies 料理, the clause describes which one. The agent (母) appears inside the clause with が."},

  {type:"fb", s:"昨日(きのう)食(た)べた{1}はとてもおいしかったです。\n(The sushi I ate yesterday was very delicious.)",
   a:"寿司(すし)", opts:["寿司(すし)","駅(えき)","公園(こうえん)","料理(りょうり)"],
   hint:"昨日食べた modifies the noun that was eaten. Which noun fits: the thing you eat at a Japanese restaurant?",
   sSrc:"The {1} I ate yesterday was very delicious."},

  {type:"fb", s:"勉強(べんきょう)できる静(しず)か{1}場所(ばしょ)を探(さが)しています。\n(I am looking for a quiet place where I can study.)",
   a:"な", opts:["な","に","が","の"],
   hint:"な-adjectives need this connector when placed directly before a noun. Without it the sentence is ungrammatical.",
   sSrc:"I am looking for a quiet {1} place to study."},

  {type:"mc", q:"Which particle CANNOT appear as the subject marker inside a relative clause?", opts:["の","を","は","が"],
   ans:"は",
   hint:"The topic particle は cannot appear inside a relative clause. The subject shifts to が (or の) inside the clause."},

  {type:"drag_fill",
   s:"先生(せんせい)が{1}説明(せつめい)はわかりやすかったです。\n(The explanation the teacher gave was easy to understand.)",
   blanks:{"1":"した"},
   pool:["した","する","して","します"],
   hint:"する is irregular. Its plain past form is した. Relative clauses require plain form.",
   sSrc:"The explanation the teacher {1} was easy to understand."},

  {type:"match", pairs:[
    {trg:"私(わたし)が読(よ)んだ本(ほん)", src:"the book I read"},
    {trg:"母(はは)が作(つく)った料理(りょうり)", src:"the dish my mother made"},
    {trg:"静(しず)かな場所(ばしょ)", src:"a quiet place"},
    {trg:"先生(せんせい)がした説明(せつめい)", src:"the explanation the teacher gave"}
  ]},

  {type:"mc", q:"昨日(きのう)食(た)べた寿司(すし), which verb type is 食(た)べる?", opts:["irregular","auxiliary","godan (う-verb)","ichidan (る-verb)"],
   ans:"ichidan (る-verb)",
   hint:"These verbs end in る and their stem takes た directly: 食べ + た → 食べた. The other class needs a different ending."},

  {type:"fb", s:"大(おお)きい{1}の前(まえ)で待(ま)っています。\n(I am waiting in front of the big park.)",
   a:"公園(こうえん)", opts:["公園(こうえん)","駅(えき)","病院(びょういん)","銀行(ぎんこう)"],
   hint:"大きい modifies a place. Which place word fits a big outdoor space in a neighborhood?",
   sSrc:"I am waiting in front of the big {1}."},

  {type:"match", pairs:[
    {trg:"読(よ)んだ", src:"plain past of 読む (godan)"},
    {trg:"食(た)べた", src:"plain past of 食べる (ichidan)"},
    {trg:"した", src:"plain past of する (irregular)"},
    {trg:"静(しず)かな", src:"な-adjective before a noun"}
  ]}

]},

// ═══ L4: N4 Career & Work Vocabulary ═══
{id:"jav2_u17l_n4_career", title:"仕事(しごと)と職場(しょくば)", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"仕事(しごと)と職場(しょくば)",
   desc:"Build essential N4 workplace vocabulary. Japanese work culture has its own rich vocabulary for meetings, roles, and daily professional actions. These words appear constantly in JLPT N4 reading passages and real office settings.",
   goals:["Name key workplace roles: employee, company president","Describe professional situations: meeting, overtime, business trip","Use action verbs: decide, continue","Ask and answer questions using N4 communication vocabulary"]},

  {type:"teach", trg:"会議(かいぎ)", src:"meeting / conference", pos:"noun", gender:null,
   note:"A scheduled gathering to discuss work matters. Very common in Japanese workplaces.\nKanji: 会 (meet) + 議 (discuss).",
   example:"A: 今日(きょう)は会議(かいぎ)がありますか？\nB: はい、午後(ごご)三時(さんじ)から会議(かいぎ)があります。\nA: 長(なが)い会議(かいぎ)ですか？\nB: いいえ、三十分(さんじゅっぷん)ぐらいです。",
   exampleSrc:"A: Do you have a meeting today?\nB: Yes, there is a meeting from 3 p.m.\nA: Is it a long meeting?\nB: No, it is about thirty minutes.",
   funFact:"Japan is famous for kaigi (meetings) that are thorough, structured, and sometimes lengthy. The word 会議室(かいぎしつ) (conference room) is one of the first signs you will see in any Japanese office. The kanji 議 also appears in 国会議員(こっかいぎいん) (member of parliament)."},

  {type:"teach", trg:"社員(しゃいん)", src:"employee / company staff member", pos:"noun", gender:null,
   note:"A general term for any employee of a company.\nKanji: 社 (company/shrine) + 員 (member).",
   example:"A: あの人(ひと)は誰(だれ)ですか？\nB: 新(あたら)しい社員(しゃいん)の田中(たなか)さんです。\nA: 何人(なんにん)の社員(しゃいん)がいますか？\nB: 約(やく)五十人(ごじゅうにん)います。",
   exampleSrc:"A: Who is that person?\nB: That is Tanaka, a new employee.\nA: How many employees are there?\nB: There are about fifty.",
   funFact:"社員 specifically means a full-time regular employee. Japan's labor system distinguishes sharply between 正社員(せいしゃいん) (permanent staff) and 非正規(ひせいき) (non-regular/contract workers). 社員 implies loyalty and long-term commitment, a significant social status in Japanese corporate culture."},

  {type:"teach", trg:"社長(しゃちょう)", src:"company president / CEO", pos:"noun", gender:null,
   note:"The head of a company. Literally: company (社) + chief (長).\nSpeaking to or about the 社長(しゃちょう) requires polite language.",
   example:"A: 社長(しゃちょう)は今日(きょう)いますか？\nB: はい、社長(しゃちょう)はここにいます。\nA: 社員(しゃいん)も今日(きょう)いますか？\nB: はい、社員(しゃいん)はみんないます。",
   exampleSrc:"A: Is the president here today?\nB: Yes, the president is here.\nA: Are the employees here today too?\nB: Yes, all the employees are here.",
   funFact:"社長 combines 社 (company) and 長 (head/chief). The same 長 appears in 部長(ぶちょう) (department head) and 課長(かちょう) (section manager). Japanese companies have a clear hierarchy: 社長 at the top, then 副社長(ふくしゃちょう) (VP), then 部長, 課長, 係長(かかりちょう), and 一般社員(いっぱんしゃいん) (general staff)."},

  {type:"mc", q:"Which word means 'meeting' in a work context?", opts:["会議(かいぎ)","社長(しゃちょう)","残業(ざんぎょう)","社員(しゃいん)"], ans:"会議(かいぎ)",
   hint:"Two kanji: 会 (meet) + 議 (discuss). Used for any scheduled professional gathering."},

  {type:"teach", trg:"残業(ざんぎょう)", src:"overtime work / working late", pos:"noun", gender:null,
   note:"Working beyond scheduled hours. Very common in Japanese workplaces.\nKanji: 残 (remain) + 業 (work/business).",
   example:"A: 昨日(きのう)も残業(ざんぎょう)しましたか？\nB: はい、また残業(ざんぎょう)でした。\nA: 大変(たいへん)ですね。\nB: でも、仕事(しごと)が終(お)わりました。",
   exampleSrc:"A: Did you work overtime again yesterday?\nB: Yes, it was overtime again.\nA: That is tough.\nB: But the work is finished.",
   funFact:"Zangyo is a defining feature of Japanese work culture. Japan even has a word for dying from overwork: 過労死(かろうし). In recent years the government has pushed for 働(はたら)き方(かた)改革(かいかく) (work-style reform) to reduce zangyo. The phrase サービス残業(ざんぎょう) means 'unpaid overtime', literally 'service overtime,' referring to free labor expected from loyal employees."},

  {type:"teach", trg:"出張(しゅっちょう)", src:"business trip", pos:"noun", gender:null,
   note:"A work-related trip away from the main office.\nKanji: 出 (go out) + 張 (stretch/post).",
   example:"A: 来週(らいしゅう)はどこにいますか？\nB: 来週(らいしゅう)は出張(しゅっちょう)で大阪(おおさか)にいます。\nA: 何日間(なんにちかん)ですか？\nB: 三日間(みっかかん)の予定(よてい)です。",
   exampleSrc:"A: Where will you be next week?\nB: Next week I will be in Osaka on a business trip.\nA: How many days?\nB: The plan is for three days.",
   funFact:"Shuccho is taken seriously in Japanese business. Before going, employees file a 出張申請書(しゅっちょうしんせいしょ) (business trip application). Bullet-train tickets and hotel stays are carefully documented. Being sent on a business trip signals trust from management. Long Shinkansen rides are a quintessential part of Japanese business life."},

  {type:"teach", trg:"決(き)める", src:"to decide / to set / to determine", pos:"verb", gender:null,
   note:"Group 2 (ichidan) verb. Stem: 決(き)め. Passive: 決(き)められる.\nKanji: 決 (decide/determine).",
   example:"A: 会議(かいぎ)の日程(にってい)を決(き)めましたか？\nB: はい、来週(らいしゅう)の月曜日(げつようび)に決(き)めました。\nA: 何時(なんじ)に始(はじ)まりますか？\nB: 午前(ごぜん)十時(じゅうじ)に始(はじ)まる予定(よてい)です。",
   exampleSrc:"A: Have you decided on the meeting schedule?\nB: Yes, we decided on next Monday.\nA: What time does it start?\nB: It is scheduled to start at 10 a.m.",
   funFact:"決める (to decide) and its intransitive pair 決まる (to be decided) are both essential N4 verbs. The kanji 決 also appears in 決勝(けっしょう) (final match) and 解決(かいけつ) (resolution/solution). In Japanese workplaces, decisions are made by group consensus (根回(ねまわ)し nemawashi) before any formal announcement."},

  {type:"teach", trg:"続(つづ)ける", src:"to continue / to keep doing", pos:"verb", gender:null,
   note:"Group 2 verb: stem 続(つづ)け + る. Often combines with te-form: 〜し続(つづ)ける (keep doing).\nKanji: 続 (continue/connect).",
   example:"A: このプロジェクトを続(つづ)けますか？\nB: はい、来月(らいげつ)まで続(つづ)けるつもりです。\nA: 一人(ひとり)でできますか？\nB: はい、頑張(がんば)って続(つづ)けます。",
   exampleSrc:"A: Will you continue this project?\nB: Yes, I intend to keep going until next month.\nA: Can you do it alone?\nB: Yes, I will keep working hard at it.",
   funFact:"続ける follows the pattern VERB-stem + 続ける. So 働(はたら)き続(つづ)ける means 'to keep working' and 話(はな)し続(つづ)ける means 'to keep talking.' The kanji 続 appears in 続(つづ)き (continuation), 連続(れんぞく) (consecutive), and 手続(てつづ)き (procedure), a key workplace word."},

  {type:"tip", title:"Workplace Roles and Hierarchy",
   text:"Japanese companies have clear title layers:\n社長(しゃちょう), company president / CEO\n副社長(ふくしゃちょう), vice president\n部長(ぶちょう), department head\n課長(かちょう), section chief\n社員(しゃいん), employee / staff member\n\nWhen addressing these people, use their title instead of their name:\n田中社長(しゃちょう) = President Tanaka\n鈴木部長(ぶちょう) = Department Head Suzuki\n\nUsing bare names with superiors sounds rude. Titles function as honorifics.",
   deepDive:{title:"残業(ざんぎょう) Culture and Reform",
    text:"Japan's zangyo culture is one of the most discussed workplace topics worldwide. The 2019 Work Style Reform Act (働(はたら)き方(かた)改革(かいかく)関連法(かんれんほう)) set overtime caps for the first time. Before this law, there were no legal limits on monthly overtime hours in many industries.\n\nCompanies now face fines for exceeding limits. Young Japanese workers increasingly value work-life balance and use the term ワークライフバランス. Remote work (テレワーク) became mainstream after 2020, challenging traditional office attendance culture.\n\nThe phrase 定時(ていじ)退社(たいしゃ) (leaving at scheduled time) was once mocked; today it is celebrated as healthy and efficient."}},

  {type:"teach", trg:"質問(しつもん)", src:"question / inquiry", pos:"noun", gender:null,
   note:"Used in formal and educational contexts. More formal than 疑問(ぎもん).\nKanji: 質 (quality/substance) + 問 (question).\n質問(しつもん)する = to ask a question.",
   example:"A: 何(なに)か質問(しつもん)がありますか？\nB: はい、一(ひと)つ質問(しつもん)があります。\nA: どうぞ。\nB: この仕事(しごと)はいつ始(はじ)まりますか？",
   exampleSrc:"A: Do you have any questions?\nB: Yes, I have one question.\nA: Go ahead.\nB: When does this job start?",
   funFact:"質問 is used in classrooms, meetings, and formal situations. The polite phrase 質問(しつもん)があるのですが... (I have a question, but...) is the standard way to raise one in a meeting. The kanji 質 also appears in 品質(ひんしつ) (product quality) and 質(しつ)の高(たか)い (high quality), both common in Japanese business writing."},

  {type:"teach", trg:"返事(へんじ)", src:"reply / response / answer", pos:"noun", gender:null,
   note:"A response to a message or spoken question. More everyday than 回答(かいとう).\nKanji: 返 (return) + 事 (thing/matter).\n返事(へんじ)する = to reply.",
   example:"A: メールの返事(へんじ)を送(おく)りましたか？\nB: まだです。今日(きょう)の午後(ごご)に送(おく)ります。\nA: 早(はや)めにお願(ねが)いします。\nB: わかりました。すぐに送(おく)ります。",
   exampleSrc:"A: Did you send a reply to the email?\nB: Not yet. I will send it this afternoon.\nA: Please do it as soon as possible.\nB: Understood. I will send it right away.",
   funFact:"Prompt 返事 is considered a professional virtue in Japan. Not replying quickly is seen as disrespectful. The phrase 返事(へんじ)が遅(おそ)い (slow to reply) is a common complaint in offices. Digital culture has intensified this: not replying to a LINE or email within hours is considered poor etiquette in many workplace relationships."},

  {type:"fb", s:"明日(あした)の会議(かいぎ)の時間(じかん)を{1}ましたか？\n(Did you decide on tomorrow's meeting time?)", a:"決(き)め", opts:["決(き)め","続(つづ)け","始(はじ)め","集(あつ)め"], sSrc:"Did you decide on the meeting time for tomorrow?",
   hint:"Which verb means to make a decision or to set a time? Group 2 ichidan verb."},

  {type:"mc", q:"社員(しゃいん) means:", opts:["business trip","employee / staff member","meeting","company president"], ans:"employee / staff member",
   hint:"社 = corporation; 員 denotes any regular-rank worker on the payroll. Put them together literally."},

  {type:"fb", s:"仕事(しごと)を{1}けるために、毎日(まいにち)頑張(がんば)っています。\n(I work hard every day in order to keep doing my job.)", a:"続(つづ)", opts:["続(つづ)","決(き)","始(はじ)","終(お)わ"], sSrc:"I work hard every day in order to keep {1} my job.",
   hint:"Which verb means to go on doing something without stopping? The て-form pattern [verb]+続(つづ)ける."},

  {type:"match", pairs:[{trg:"会議(かいぎ)",src:"meeting"},{trg:"社員(しゃいん)",src:"employee"},{trg:"社長(しゃちょう)",src:"company president"},{trg:"残業(ざんぎょう)",src:"overtime work"}]},

  {type:"match", pairs:[{trg:"出張(しゅっちょう)",src:"business trip"},{trg:"質問(しつもん)",src:"question"},{trg:"返事(へんじ)",src:"reply / response"},{trg:"決(き)める",src:"to decide"}]},

  {type:"fb", s:"何(なに)か{1}がありますか？\n(Do you have any questions?)", a:"質問(しつもん)", opts:["質問(しつもん)","返事(へんじ)","会議(かいぎ)","出張(しゅっちょう)"], sSrc:"Do you have any {1}?",
   hint:"This noun means a question or inquiry. Used to invite input in meetings or classrooms."},

  {type:"mc", q:"出張(しゅっちょう) means:", opts:["job interview","overtime work","business trip","company meeting"], ans:"business trip",
   hint:"出 (go out) + 張 (post/extend). This is a work … away from the main office."},

  {type:"fb", s:"社長(しゃちょう)はただいま会議(かいぎ){1}です。\n(The president is currently in a meeting.)", a:"中(ちゅう)", opts:["中(ちゅう)","後(ご)","前(まえ)","外(そと)"], sSrc:"The president is currently in the middle of a meeting.",
   hint:"This single kanji suffix means 'in the middle of' or 'during.' Attaches to nouns to indicate an ongoing activity."},

  {type:"match", pairs:[{trg:"続(つづ)ける",src:"to continue"},{trg:"決(き)める",src:"to decide"},{trg:"返事(へんじ)する",src:"to reply"},{trg:"質問(しつもん)する",src:"to ask a question"}]}

]}
,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
, COVERAGE_U17]};
export default UNIT_17;
