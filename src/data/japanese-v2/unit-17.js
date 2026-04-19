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
]};
export default UNIT_17;
