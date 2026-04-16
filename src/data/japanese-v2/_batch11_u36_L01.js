// Batch 11 – Unit 36 (B2.4 Comprehensive Review): Advanced Expressions & N2 Final Push
const BATCH11_L1 = {
  id:"jav2_u36l_b11_1", title:"じょうきゅうひょうげん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうきゅうひょうげん",
     desc:"Master advanced expressions and set phrases that mark fluent, educated Japanese. These are the finishing touches for JLPT N2 level proficiency.",
     goals:["Use advanced set phrases naturally","Master N2-level idiomatic expressions","Express nuanced thoughts with precision"]},

    {type:"teach", trg:"〜ざるをえない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
     note:"N2 grammar. みとめざるをえない = have no choice but to admit.\nStrong compulsion.",
     example:"A: けっかをみとめざるをえません。\nB: たしかに、データはめいかくです。",
     exampleSrc:"A: I have no choice but to acknowledge the results.\nB: Indeed, the data is clear.",
     funFact:"ざるをえない is a classical negative form (ざる = ない) + を + えない (cannot). It expresses reluctant acceptance: the speaker does not want to do it but has no alternative. This pattern sounds intellectual and is common in formal writing and speeches. JLPT N2 tests it frequently."},

    {type:"teach", trg:"〜わけにはいかない", src:"cannot possibly ~ / must not ~", pos:"part", gender:null,
     note:"N2 grammar. あきらめるわけにはいかない = I cannot possibly give up.\nMoral/social impossibility.",
     example:"A: ここであきらめるわけにはいきません。\nB: そうですね。さいごまでがんばりましょう。",
     exampleSrc:"A: I cannot possibly give up here.\nB: Right. Let's persevere until the end.",
     funFact:"わけにはいかない expresses social or moral impossibility (not physical). やくそくをやぶるわけにはいかない (I cannot break my promise). It implies 'given the circumstances, doing X is unacceptable.' This pattern reveals Japanese social consciousness: actions are constrained by obligations, not just physical limitations."},

    {type:"teach", trg:"〜にすぎない", src:"nothing more than ~ / merely ~", pos:"part", gender:null,
     note:"N2 grammar. Downplays significance.\nこれはいちれいにすぎない = this is merely one example.",
     example:"A: これはわたしのいけんにすぎません。\nB: でも、たいせつないけんだとおもいます。",
     exampleSrc:"A: This is nothing more than my opinion.\nB: But I think it is an important opinion.",
     funFact:"にすぎない (に過ぎない, does not exceed) modestly limits scope. It is a hallmark of humble Japanese expression: たまたまうまくいったにすぎない (it merely happened to work out). Academic papers use it to avoid overstating conclusions. This self-limiting language reflects cultural modesty."},

    {type:"teach", trg:"〜にほかならない", src:"nothing other than ~ / precisely ~", pos:"part", gender:null,
     note:"N2 grammar. Emphatic identification.\nこれはどりょくのけっかにほかならない = this is nothing other than the result of effort.",
     example:"A: せいこうはにちじょうのどりょくのけっかにほかなりません。\nB: つづけることがだいじなのですね。",
     exampleSrc:"A: Success is nothing other than the result of daily effort.\nB: So continuing is what matters.",
     funFact:"にほかならない emphatically equates X with Y: 'this IS precisely that.' It is the opposite of にすぎない (merely). While にすぎない downplays, にほかならない emphasizes identity. Together they form a powerful rhetorical pair for academic and formal argumentation."},

    {type:"teach", trg:"〜かねない", src:"might / there is a risk of ~", pos:"part", gender:null,
     note:"N2 grammar. Warning of negative possibility.\nだいじこにつながりかねない = could lead to a major accident.",
     example:"A: このままではじたいがあっかしかねません。\nB: はやめにたいさくをとりましょう。",
     exampleSrc:"A: At this rate, the situation might worsen.\nB: Let's take countermeasures early.",
     funFact:"かねない (from かねる, to be unable to) warns of unwanted possibilities. It always implies negative outcomes: じこにつながりかねない (could lead to an accident). The related かねる means 'find it difficult to': おうけいたしかねます (I am unable to accept, polite refusal). Both are essential N2 patterns."},

    {type:"teach", trg:"〜をきっかけに", src:"triggered by ~ / taking the opportunity of ~", pos:"part", gender:null,
     note:"N2 grammar. An event sparks a change.\nにゅうがくをきっかけに = triggered by entering school.",
     example:"A: にほんりょこうをきっかけににほんごをはじめました。\nB: いいきっかけでしたね。",
     exampleSrc:"A: Triggered by a trip to Japan, I started Japanese.\nB: That was a good trigger.",
     funFact:"きっかけ (切っ掛け) literally means 'cut-hook,' a precise starting point. をきっかけに frames life changes: けっこんをきっかけに (triggered by marriage), びょうきをきっかけに (triggered by illness). Japanese life narratives are often structured around きっかけ moments that redirect one's path."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~", pos:"part", gender:null,
     note:"N2 grammar. Parallel changes.\nこうれいかにともなって = along with aging.",
     example:"A: ぎじゅつのしんぽにともなって、あたらしいもんだいもうまれています。\nB: べんりさとリスクはひょうりいったいですね。",
     exampleSrc:"A: Along with technological progress, new problems are also arising.\nB: Convenience and risk are two sides of the same coin.",
     funFact:"にともなって describes simultaneous, correlated changes. It appears constantly in social commentary: こうれいかにともなって (with aging population), グローバルかにともなって (with globalization). It elegantly captures how changes in one area ripple into others, reflecting interconnected thinking."},

    {type:"teach", trg:"いわば", src:"so to speak / as it were", pos:"adv", gender:null,
     note:"Introduces a metaphor or analogy.\nFormal and literary.",
     example:"A: かれはいわば、チームのたいこくちゅうです。\nB: なくてはならないそんざいですね。",
     exampleSrc:"A: He is, so to speak, the pillar of the team.\nB: An indispensable presence.",
     funFact:"いわば (言わば) literally means 'if one were to say.' It introduces metaphors and analogies in formal speech: にほんはいわばしまのくに (Japan is, so to speak, a country of islands). Using いわば signals that you are about to use figurative language, preparing the listener for a non-literal expression."},

    {type:"teach", trg:"かえって", src:"on the contrary / rather", pos:"adv", gender:null,
     note:"The result is opposite to expectation.\nかえってわるくなった = it got worse instead.",
     example:"A: てつだおうとしたが、かえってめいわくをかけてしまいました。\nB: きもちはわかりますよ。",
     exampleSrc:"A: I tried to help but ended up causing trouble instead.\nB: I understand the feeling.",
     funFact:"かえって (却って) signals a paradoxical or contrary outcome: the result was the OPPOSITE of what was intended or expected. せつめいしたらかえってこんらんした (explaining it caused more confusion instead). This word captures life's ironic twists and is common in storytelling and reflection."},

    {type:"teach", trg:"さすがに", src:"as expected / even (someone) must ~", pos:"adv", gender:null,
     note:"Acknowledges that even X has limits or qualities.\nさすがにプロだ = as expected of a pro.",
     example:"A: さすがにじゅうねんのけいけんしゃですね。うでがちがいます。\nB: ありがとうございます。まだまだです。",
     exampleSrc:"A: As expected of someone with ten years' experience. Your skill is different.\nB: Thank you. I still have a long way to go.",
     funFact:"さすがに has two directions: praise (さすがプロだ = as expected of a pro) and limits (さすがにつかれた = even I am tired now). It acknowledges reputation or expectations. The response まだまだです (I still have far to go) is the quintessential Japanese humble deflection of compliments."},

    {type:"teach", trg:"いざ", src:"when it comes to the moment / when push comes to shove", pos:"adv", gender:null,
     note:"いざというとき = when the moment comes.\nいざ + action = let's do it (decisive).",
     example:"A: いざというときにそなえておきましょう。\nB: そうですね。じゅんびがだいじです。",
     exampleSrc:"A: Let's prepare for when the moment comes.\nB: Right. Preparation is important.",
     funFact:"いざ carries dramatic weight: the moment of truth, the decisive instant. いざというとき (when crisis strikes) is used for emergency preparedness. いざ、しゅっぱつ！(Now then, let's depart!) has a dramatic, adventure-like quality. It appears in samurai literature and remains vibrant in modern Japanese for pivotal moments."},

    {type:"teach", trg:"ようやく", src:"finally / at last (after long effort)", pos:"adv", gender:null,
     note:"Implies the result took a long time and much effort.\nようやくかんせいした = finally completed.",
     example:"A: ごねんかんべんきょうして、ようやくN2にごうかくしました。\nB: おめでとうございます！よくがんばりましたね。",
     exampleSrc:"A: After five years of study, I finally passed N2.\nB: Congratulations! You worked hard.",
     funFact:"ようやく (漸く) emphasizes the long, difficult journey to a result. It is different from やっと (finally, more casual and slightly impatient) and とうとう (in the end, neutral). ようやく carries respect for the effort: ようやくゆめがかなった (my dream finally came true, after years of work). A beautiful word for hard-won achievements."},

    // Quiz steps
    {type:"mc", q:"「ざるをえない」はどんないみですか？",
     opts:["Have no choice but to (reluctant acceptance)","Want to do very much","Never do","Always do"],
     ans:"Have no choice but to (reluctant acceptance)",
     hint:"This classical pattern expresses that the speaker does not want to do something but circumstances force them. There is no alternative."},

    {type:"fb", s:"にほんりょこうを{1}ににほんごをはじめました。",
     a:["きっかけ"],
     opts:["きっかけ","けっか","げんいん","もくてき"],
     hint:"The trip to Japan was the triggering event that started the speaker's Japanese study. This word means 'trigger/opportunity.'",
     sSrc:"Triggered by a trip to Japan, I started Japanese."},

    {type:"match", pairs:[
      {trg:"〜にすぎない", src:"nothing more than ~"},
      {trg:"〜にほかならない", src:"nothing other than ~"},
      {trg:"〜かねない", src:"might (negative risk)"},
      {trg:"〜わけにはいかない", src:"cannot possibly ~"}
    ]},

    {type:"mc", q:"「かえって」はどんなときにつかいますか？",
     opts:["When the result is opposite to what was expected","When things go as planned","When agreeing with someone","When asking a question"],
     ans:"When the result is opposite to what was expected",
     hint:"This adverb signals a paradoxical or ironic outcome. What happened was the contrary of the intention."},

    {type:"fb", s:"ごねんかんべんきょうして、{1}N2にごうかくしました。",
     a:["ようやく"],
     opts:["ようやく","さすがに","かえって","いざ"],
     hint:"After five long years of effort, the speaker achieved the goal. This adverb emphasizes the duration and difficulty of the journey.",
     sSrc:"After five years of study, I finally passed N2."},

    {type:"mc", q:"「さすがに」にはどんなつかいかたがありますか？",
     opts:["Both praise (as expected of a pro) and limits (even I am tired)","Only praise","Only criticism","Only surprise"],
     ans:"Both praise (as expected of a pro) and limits (even I am tired)",
     hint:"This versatile adverb can acknowledge someone's reputation positively or recognize that e... a capable person has l...."}
  ]
};
export default BATCH11_L1;
