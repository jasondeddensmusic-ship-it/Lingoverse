// Japanese V2 Unit 17. うけみ (Passive Voice)
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
  title:"うけみ", sub:"Passive Voice",
  icon:"🪞", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: れる・られる (Direct Passive) ═══
{id:"jav2_u17l1", title:"れる・られる", icon:"📢", xp:15, board:true, steps:[
  {type:"intro", title:"れる・られる",
   desc:"Learn the passive voice in Japanese. The passive lets you describe actions from the receiver's perspective: 'was praised,' 'was chosen,' 'was invited.' Japanese uses passive much more than English, especially to describe experiences and emotions.",
   goals:["Form passive verbs with れる (Group 1) and られる (Group 2)","Use direct passive to describe receiving actions","Understand する → される and くる → こられる"]},

  {type:"teach", trg:"〜れる・〜られる", src:"passive suffix (is done / was done)", pos:"part", gender:null,
   note:"Group 1: change う-ending to あ-row + れる.\nGroup 2: stem + られる. する → される. くる → こられる.",
   example:"A: せんせいにほめられました。\nB: よかったですね！",
   exampleSrc:"A: I was praised by the teacher.\nB: That is great!",
   funFact:"Japanese passive is far more common than English passive. It naturally expresses the receiver's feelings, making it essential for polite and empathetic speech. The particle に marks the agent (the doer) in passive sentences."},

  {type:"teach", trg:"ほめられる", src:"to be praised", pos:"verb", gender:null,
   note:"Passive of ほめる (to praise). ほめられた = was praised.\nGroup 2 verb: stem ほめ + られる.",
   example:"A: きのうしゃちょうにほめられました。\nB: それはうれしいですね。",
   exampleSrc:"A: I was praised by the company president yesterday.\nB: That must make you happy.",
   funFact:"Being praised by superiors carries enormous weight in Japanese work culture. The phrase sensei ni homerareta (was praised by the teacher) is a milestone moment for students. Praise in Japan tends to be understated but deeply felt."},

  {type:"teach", trg:"えらばれる", src:"to be chosen / to be selected", pos:"verb", gender:null,
   note:"Passive of えらぶ (to choose). Group 1: えらぶ → えらば + れる.\nKanji: 選ばれる.",
   example:"A: リーダーにえらばれました。\nB: おめでとうございます！",
   exampleSrc:"A: I was chosen as the leader.\nB: Congratulations!",
   funFact:"選ぶ (to choose) becomes 選ばれる in the passive. The kanji 選 appears in 選挙 (election) and 選手 (athlete/player). Being chosen (erabareru) carries a sense of honor and responsibility in Japanese group culture."},

  {type:"teach", trg:"しょうたいされる", src:"to be invited", pos:"verb", gender:null,
   note:"Passive of しょうたいする (to invite). する-verb → される.\nKanji: 招待される.",
   example:"A: パーティーにしょうたいされました。\nB: だれにしょうたいされましたか？",
   exampleSrc:"A: I was invited to a party.\nB: Who were you invited by?",
   funFact:"招待 combines 招 (beckon) and 待 (wait). Formal invitations in Japan are taken seriously. Declining an invitation requires careful politeness. Wedding invitations include a return postcard (返信はがき) where guests circle 出席 (attend) or 欠席 (decline)."},

  {type:"mc", q:"せんせいにほめられた means:", opts:["I was praised by the teacher","The teacher was praised","I praised the teacher","I will praise the teacher"], ans:"I was praised by the teacher",
   hint:"The passive られた shows the speaker received the action. に marks who did it."},

  {type:"teach", trg:"しかられる", src:"to be scolded", pos:"verb", gender:null,
   note:"Passive of しかる (to scold). Group 1: しかる → しから + れる.\nKanji: 叱られる.",
   example:"A: おくれたのでしかられました。\nB: たいへんでしたね。",
   exampleSrc:"A: I was scolded because I was late.\nB: That must have been tough.",
   funFact:"叱る (to scold) is distinguished from 怒る (to get angry). Shikaru implies corrective scolding with good intent, while okoru is emotional anger. Teachers and parents shikaru, while okoru is considered less constructive. The passive shikarareru emphasizes how it feels to receive the scolding."},

  {type:"teach", trg:"よばれる", src:"to be called / to be invited (casual)", pos:"verb", gender:null,
   note:"Passive of よぶ (to call). Group 1: よぶ → よば + れる.\nAlso means 'to be referred to as.'",
   example:"A: みんなにタカちゃんとよばれています。\nB: かわいいニックネームですね。",
   exampleSrc:"A: I am called Taka-chan by everyone.\nB: That is a cute nickname.",
   funFact:"よばれる has two common uses: being called by name (なまえでよばれる) and being casually invited to eat (ごはんによばれる, literally 'being called to a meal'). Adding ちゃん to a shortened name creates an affectionate nickname common among friends."},

  {type:"tip", title:"Passive Formation Rules",
   text:"Group 1 (う-verbs): change the final う-sound to the あ-row, then add れる.\nよむ → よまれる, かく → かかれる, はなす → はなされる\n\nGroup 2 (る-verbs): remove る, add られる.\nたべる → たべられる, みる → みられる\n\nIrregulars:\nする → される\nくる → こられる\n\nThe agent (doer) is marked with に: せんせいに (by the teacher).",
   deepDive:{title:"Why Japanese Loves Passive",
    text:"English avoids passive ('mistakes were made' sounds evasive), but Japanese embraces it. Passive naturally puts the experiencer first, which fits Japanese communication style. Saying 'I was praised' feels more humble than 'the teacher praised me.' The passive also avoids directly naming the agent when it is obvious or when naming them would be impolite."}},

  {type:"fb", s:"リーダーに{1}ました。\n(I was chosen as the leader.)", a:"えらばれ", opts:["えらばれ","えらんで","えらび","えらぶ"], sSrc:"I was chosen as the leader.",
   hint:"The passive form of えらぶ (to choose). Group 1 passive: あ-row + れる."},

  {type:"teach", trg:"たのまれる", src:"to be asked (a favor) / to be requested", pos:"verb", gender:null,
   note:"Passive of たのむ (to request). Group 1: たのむ → たのま + れる.\nKanji: 頼まれる.",
   example:"A: ともだちにひっこしをたのまれました。\nB: てつだいますか？",
   exampleSrc:"A: I was asked by a friend to help with moving.\nB: Will you help?",
   funFact:"頼む (to ask a favor) is one of the most socially important verbs. Being asked (tanomareru) implies trust and closeness. In Japan, refusing a request requires extreme tact. The passive form emphasizes that the request came to you, not that you sought it out."},

  {type:"teach", trg:"つくられる", src:"to be made / to be created", pos:"verb", gender:null,
   note:"Passive of つくる (to make). Group 1: つくる → つくら + れる.\nKanji: 作られる.",
   example:"A: このおてらはいつつくられましたか？\nB: やく500ねんまえにつくられました。",
   exampleSrc:"A: When was this temple built?\nB: It was built about 500 years ago.",
   funFact:"作られる is essential for describing history and origins. Japanese historical sites often have signs saying 'this was built in year X.' The passive voice is the default for historical descriptions, just as in English museum labels. 作 also appears in 作品 (artwork) and 作家 (author)."},

  {type:"mc", q:"ともだちにたのまれた means:", opts:["I asked my friend","I was asked by my friend","My friend was asked","I will ask my friend"], ans:"I was asked by my friend",
   hint:"The passive form shows the speaker was on the receiving end. に marks the agent who made the request."},

  {type:"match", pairs:[{trg:"ほめられる",src:"to be praised"},{trg:"えらばれる",src:"to be chosen"},{trg:"しかられる",src:"to be scolded"},{trg:"しょうたいされる",src:"to be invited"}]},

  {type:"match", pairs:[{trg:"よばれる",src:"to be called"},{trg:"たのまれる",src:"to be asked"},{trg:"つくられる",src:"to be made"},{trg:"される",src:"passive of する"}]},

  {type:"fb", s:"パーティーに{1}されました。\n(I was invited to a party.)", a:"しょうたい", opts:["しょうたい","しょうかい","れんらく","あんない"], sSrc:"I was invited to a party.",
   hint:"The する-verb meaning 'to invite' formally. 招 (beckon) + 待 (wait)."},

  {type:"mc", q:"How do you form the passive of a Group 2 verb like たべる?", opts:["たべされる","たべれる","たべられる","たべさせる"], ans:"たべられる",
   hint:"Group 2 verbs drop る and add られる for the passive."},
]},

// ═══ L2: めいわくのうけみ (Adversity Passive) ═══
{id:"jav2_u17l2", title:"めいわくのうけみ", icon:"😩", xp:15, board:true, steps:[
  {type:"intro", title:"めいわくのうけみ",
   desc:"Discover the adversity passive, a uniquely Japanese construction. When something happens that negatively affects you, Japanese uses passive to express that you were 'victimized' by the event, even with intransitive verbs like rain or crying.",
   goals:["Use adversity passive to express inconvenience or misfortune","Form passive with intransitive verbs (rain, cry, die)","Distinguish direct passive from adversity passive"]},

  {type:"teach", trg:"あめにふられる", src:"to get rained on (adversity passive)", pos:"verb", gender:null,
   note:"ふる (to fall/rain) is intransitive, but passive works to show being affected.\nLiterally: 'to suffer rain falling.'",
   example:"A: あめにふられてずぶぬれになりました。\nB: たいへんでしたね。",
   exampleSrc:"A: I got rained on and became soaking wet.\nB: That must have been rough.",
   funFact:"The adversity passive (meiwaku no ukemi) is unique to Japanese. English cannot say 'I was rained.' But Japanese uses passive with any verb to show the speaker was negatively affected. This construction reveals how Japanese grammar centers on the speaker's experience and feelings."},

  {type:"teach", trg:"なかれる", src:"to have someone cry on you (adversity)", pos:"verb", gender:null,
   note:"Passive of なく (to cry). The speaker is bothered by the crying.\nGroup 1: なく → なか + れる.",
   example:"A: でんしゃであかちゃんになかれました。\nB: ねむれませんでしたか？",
   exampleSrc:"A: A baby cried on me on the train.\nB: Could you not sleep?",
   funFact:"This is a classic adversity passive example. A baby crying is not directed at you, but Japanese expresses your suffering through passive voice. Compare: あかちゃんがないた (the baby cried, neutral) vs. あかちゃんになかれた (I suffered the baby crying). The に marks the source of your misfortune."},

  {type:"teach", trg:"しなれる", src:"to suffer someone's death (adversity)", pos:"verb", gender:null,
   note:"Passive of しぬ (to die). Expresses the grief and impact of loss.\nGroup 1: しぬ → しな + れる.",
   example:"A: わかいときにちちにしなれました。\nB: それはつらかったでしょう。",
   exampleSrc:"A: My father died on me when I was young.\nB: That must have been painful.",
   funFact:"しなれる is one of the most emotionally powerful uses of adversity passive. It expresses not just that someone died, but that their death deeply affected and burdened the speaker. This construction has no English equivalent. It shows how Japanese grammar encodes emotional impact directly into verb forms."},

  {type:"mc", q:"あめにふられた expresses:", opts:["It rained and I was negatively affected","It rained and I enjoyed it","I made it rain","I predicted rain"], ans:"It rained and I was negatively affected",
   hint:"The adversity passive shows the speaker suffered because of the rain."},

  {type:"teach", trg:"さわがれる", src:"to be disturbed by noise", pos:"verb", gender:null,
   note:"Passive of さわぐ (to make noise/be rowdy). Group 1: さわぐ → さわが + れる.\nExpresses annoyance at others being noisy.",
   example:"A: となりのへやのひとにさわがれてねむれませんでした。\nB: それはこまりますね。",
   exampleSrc:"A: I was kept awake by the person in the next room being noisy.\nB: That is troublesome.",
   funFact:"さわがれる perfectly illustrates adversity passive. The noise was not directed at you, but you suffered from it. Japanese apartment living makes this a very relatable complaint. The word sawagu can describe anything from children playing loudly to a drunken commotion."},

  {type:"teach", trg:"ぬすまれる", src:"to have something stolen", pos:"verb", gender:null,
   note:"Passive of ぬすむ (to steal). Group 1: ぬすむ → ぬすま + れる.\nKanji: 盗まれる.",
   example:"A: でんしゃでさいふをぬすまれました。\nB: けいさつにいきましたか？",
   exampleSrc:"A: I had my wallet stolen on the train.\nB: Did you go to the police?",
   funFact:"盗む (to steal) uses the kanji showing a dish (皿) being covered and taken. While Japan is famously safe, pickpocketing exists in crowded trains. The passive ぬすまれる emphasizes the victim's perspective. Note the possessive pattern: さいふを (wallet) marks what was stolen."},

  {type:"teach", trg:"ふまれる", src:"to be stepped on", pos:"verb", gender:null,
   note:"Passive of ふむ (to step on). Group 1: ふむ → ふま + れる.\nKanji: 踏まれる.",
   example:"A: でんしゃであしをふまれました。\nB: いたかったですか？",
   exampleSrc:"A: I had my foot stepped on in the train.\nB: Did it hurt?",
   funFact:"This is a common adversity passive used on crowded trains. The pattern あしをふまれる (to have one's foot stepped on) is a shared urban experience in Tokyo. Rush hour trains (ラッシュアワー) pack so tightly that foot-stepping is almost inevitable."},

  {type:"tip", title:"Direct vs. Adversity Passive",
   text:"Direct passive: the action is done TO you.\nほめられた = I was praised.\nえらばれた = I was chosen.\n\nAdversity passive: something happens and it affects you negatively.\nあめにふられた = I got rained on.\nなかれた = someone cried (and it bothered me).\n\nKey difference: adversity passive works with intransitive verbs (rain, cry, die) that cannot take a direct object. The speaker is always the 'victim.'",
   deepDive:{title:"The Suffering Passive",
    text:"Linguists call this the 'suffering passive' or 'indirect passive.' It exists only in Japanese (and a few related languages). The speaker is not the grammatical object of the verb. Instead, the speaker is affected by the entire event.\n\nPattern: [experiencer] は [agent] に [verb-passive]\nわたしは あめに ふられた。\n(I [topic] rain [agent] was-fallen-on.)\n\nThis construction is very productive. Almost any verb can be put into adversity passive to express that you were inconvenienced."}},

  {type:"fb", s:"でんしゃであしを{1}ました。\n(I had my foot stepped on in the train.)", a:"ふまれ", opts:["ふまれ","ふんで","ふみ","ふまえ"], sSrc:"I had my foot stepped on in the train.",
   hint:"The passive form of ふむ (to step on). Group 1 passive: あ-row + れる."},

  {type:"teach", trg:"わらわれる", src:"to be laughed at", pos:"verb", gender:null,
   note:"Passive of わらう (to laugh). Group 1: わらう → わらわ + れる.\nKanji: 笑われる.",
   example:"A: はつおんをわらわれてはずかしかったです。\nB: きにしないでください。",
   exampleSrc:"A: I was laughed at for my pronunciation and felt embarrassed.\nB: Please do not worry about it.",
   funFact:"笑われる can be either direct passive (someone laughed at you intentionally) or adversity passive (people laughed and you felt bad). Context determines which reading applies. Fear of being laughed at (warawareru) is a strong social motivator in Japanese culture."},

  {type:"teach", trg:"はずかしい", src:"embarrassing / shy / ashamed", pos:"adj", gender:null,
   note:"い-adjective covering embarrassment, shyness, and shame.\nKanji: 恥ずかしい. A key emotion word.",
   example:"A: みんなのまえではずかしかったです。\nB: だいじょうぶですよ。",
   exampleSrc:"A: I was embarrassed in front of everyone.\nB: It is okay.",
   funFact:"恥ずかしい covers a wider emotional range than English 'embarrassed.' It includes shyness, modesty, and social shame. The related noun 恥 (haji, shame) is central to Japanese culture. Ruth Benedict's famous book described Japan as a 'shame culture' as opposed to a 'guilt culture.'"},

  {type:"mc", q:"さいふをぬすまれた means:", opts:["I stole a wallet","I had my wallet stolen","Someone found my wallet","I lost my wallet"], ans:"I had my wallet stolen",
   hint:"The passive of ぬすむ (steal) with さいふを shows the item was taken from the speaker."},

  {type:"match", pairs:[{trg:"あめにふられる",src:"to get rained on"},{trg:"なかれる",src:"to have someone cry on you"},{trg:"さわがれる",src:"to be disturbed by noise"},{trg:"ぬすまれる",src:"to have something stolen"}]},

  {type:"fb", s:"はつおんを{1}てはずかしかったです。\n(I was laughed at for my pronunciation and was embarrassed.)", a:"わらわれ", opts:["わらわれ","わらって","わらい","わらった"], sSrc:"I was laughed at for my pronunciation and was embarrassed.",
   hint:"The passive て-form of わらう (to laugh). Group 1 passive: わらう → わらわれる."},

  {type:"match", pairs:[{trg:"ふまれる",src:"to be stepped on"},{trg:"わらわれる",src:"to be laughed at"},{trg:"しなれる",src:"to suffer someone's death"},{trg:"はずかしい",src:"embarrassing"}]},

  {type:"mc", q:"Which sentence uses ADVERSITY passive (not direct)?", opts:["ほめられた (was praised)","えらばれた (was chosen)","あめにふられた (got rained on)","しょうたいされた (was invited)"], ans:"あめにふられた (got rained on)",
   hint:"Adversity passive uses intransitive verbs where the speaker is not the direct object but suffers from the event."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
]};
export default UNIT_17;
