// Unit 14 Expansion L3 — Agreeing and Disagreeing
// Patterns for agreement, polite disagreement, and discussion.

const LESSON_3 = {id:"jav2_u14l3", title:"さんせい・はんたい", icon:"🤝", xp:15, board:true, steps:[
  {type:"intro", title:"さんせい・はんたい",
   desc:"Learn to agree, disagree, and qualify your opinions politely. Japanese communication values harmony, so knowing how to express disagreement without causing offense is a crucial social skill.",
   goals:["Agree with opinions using さんせい and そうおもう","Disagree politely using ちょっと and indirect expressions","Use qualifying phrases to soften strong opinions"]},

  {type:"teach", trg:"さんせい", src:"agreement / in favor", pos:"noun", gender:null,
   note:"さんせいする = to agree. さんせいです = I agree.\nKanji: 賛成. Opposite: はんたい.",
   example:"A: あたらしいルールについてどうおもいますか？\nB: わたしはさんせいです。いいとおもいます。",
   exampleSrc:"A: What do you think about the new rule?\nB: I am in favor. I think it is good.",
   funFact:"賛成 combines 賛 (approve/praise) and 成 (become/achieve). In Japanese meetings, showing agreement is often done with うなずく (nodding) throughout someone's speech. This does not always mean full agreement; it often just means 'I am listening.' Verbal さんせい is unambiguous."},

  {type:"teach", trg:"はんたい", src:"opposition / against", pos:"noun", gender:null,
   note:"はんたいする = to oppose. はんたいです = I am against it.\nKanji: 反対. Opposite: さんせい.",
   example:"A: このけいかくにはんたいのひとはいますか？\nB: わたしはすこしはんたいです。りゆうをせつめいします。",
   exampleSrc:"A: Is anyone opposed to this plan?\nB: I am somewhat opposed. Let me explain my reason.",
   funFact:"反対 combines 反 (anti/oppose) and 対 (against/toward). Directly saying はんたいです can feel strong in Japanese culture. Softer alternatives like ちょっと... (a bit...) or それはどうでしょう (I wonder about that) are often preferred in practice, especially in work settings."},

  {type:"teach", trg:"そうおもいます", src:"I think so too", pos:"verb", gender:null,
   note:"A simple way to agree with someone's opinion.\nわたしもそうおもいます = I also think so.",
   example:"A: にほんごのべんきょうはたのしいですね。\nB: わたしもそうおもいます。",
   exampleSrc:"A: Studying Japanese is fun, is it not.\nB: I think so too.",
   funFact:"そうおもいます is the most natural agreement phrase for opinions. Adding わたしも (me too) reinforces it. The phrase そうですね (that is right / indeed) is the all-purpose agreement response in Japanese, but it is weaker than そうおもいます, which commits to sharing the opinion."},

  {type:"mc", q:"はんたいです means:", opts:["I agree","I am not sure","I am against it","I do not care"], ans:"I am against it",
   hint:"はんたい is the direct expression of opposition or disagreement."},

  {type:"teach", trg:"ちょっと...", src:"well... / it is a bit... (polite refusal)", pos:"adv", gender:null,
   note:"Trailing off with ちょっと is the classic Japanese soft refusal.\nLeaves the negative part unsaid.",
   example:"A: このりょうりはおいしいとおもいますか？\nB: うーん、ちょっと...",
   exampleSrc:"A: Do you think this food is delicious?\nB: Hmm, a bit...",
   funFact:"ちょっと followed by silence or trailing off is one of the most important Japanese communication patterns to understand. It means 'no' or 'I disagree' without saying it directly. Japanese listeners immediately understand the implication. Not recognizing this causes many cross-cultural misunderstandings."},

  {type:"teach", trg:"それはどうでしょう", src:"I wonder about that / I am not so sure", pos:"part", gender:null,
   note:"A polite way to express doubt or mild disagreement.\nSofter than directly saying 'I disagree.'",
   example:"A: このプロジェクトはかんたんだとおもいます。\nB: それはどうでしょう。もうすこしかんがえたほうがいいかもしれません。",
   exampleSrc:"A: I think this project is easy.\nB: I wonder about that. Perhaps we should think a bit more.",
   funFact:"それはどうでしょう literally means 'how would that be?' It raises doubt without stating a position. This vagueness is intentional and valued in Japanese business culture. The listener understands it as gentle disagreement while maintaining harmony (wa) in the group."},

  {type:"teach", trg:"たしかに", src:"certainly / that is true", pos:"adv", gender:null,
   note:"Used to acknowledge a valid point before adding your own view.\nKanji: 確かに.",
   example:"A: にほんのでんしゃはいつもこんでいます。\nB: たしかに、でもべんりですよね。",
   exampleSrc:"A: Japanese trains are always crowded.\nB: That is true, but they are convenient.",
   funFact:"たしかに is the perfect bridge word for partial agreement. By acknowledging the other person's point first, you show respect before introducing your own perspective. The pattern 'たしかに、でも...' (true, but...) is so common in Japanese discussion that it has become formulaic."},

  {type:"fb", s:"わたしも___おもいます。\n(I think so too.)", a:"そう", opts:["そう","こう","ああ","どう"], sSrc:"I think so too.",
   hint:"The word meaning 'so/that way' that refers to what was just said."},

  {type:"teach", trg:"いけん", src:"opinion", pos:"noun", gender:null,
   note:"いけんをいう = to state an opinion. いけんがある = to have an opinion.\nKanji: 意見.",
   example:"A: みなさんのいけんをきかせてください。\nB: わたしのいけんをいいます。",
   exampleSrc:"A: Please let me hear everyone's opinions.\nB: I will state my opinion.",
   funFact:"意見 combines 意 (mind/intention) and 見 (see/view). In Japanese culture, directly stating strong opinions can be uncomfortable. The phrase いけんがある (have an opinion) is used to signal that you want to speak up. In meetings, opinions are often carefully framed to avoid confrontation."},

  {type:"teach", trg:"りゆう", src:"reason", pos:"noun", gender:null,
   note:"りゆうは... = the reason is... Used to explain why you think something.\nKanji: 理由.",
   example:"A: どうしてはんたいですか？\nB: りゆうはみっつあります。まず...",
   exampleSrc:"A: Why are you opposed?\nB: There are three reasons. First...",
   funFact:"理由 combines 理 (reason/logic) and 由 (cause/origin). Giving clear reasons (理由をのべる) is valued in Japanese argumentation. The structure 'りゆうは...からです' (the reason is... because...) is standard in essays and formal discussions."},

  {type:"mc", q:"ちょっと... (trailing off) usually means:", opts:["I totally agree","I am very happy","I politely disagree or decline","I do not understand"], ans:"I politely disagree or decline",
   hint:"Leaving the sentence unfinished with ちょっと is a classic soft refusal."},

  {type:"teach", trg:"でも", src:"but / however", pos:"conj", gender:null,
   note:"The most common contrast conjunction. Placed at the start of a sentence.\nLess formal than しかし.",
   example:"A: このレストランはやすいです。でも、おいしくないです。\nB: じゃ、べつのところにいきましょう。",
   exampleSrc:"A: This restaurant is cheap. But it is not delicious.\nB: Then let us go somewhere else.",
   funFact:"でも is the everyday 'but' of Japanese. In formal writing or speeches, しかし or けれども are preferred. The pattern 'A。でも、B。' is the standard way to present contrasting opinions. でも at the very start of a response often signals incoming disagreement."},

  {type:"teach", trg:"〜ほうがいい", src:"it would be better to ~", pos:"part", gender:null,
   note:"た-form + ほうがいい = should do (advice).\nDictionary form + ほうがいい also used.",
   example:"A: もうすこしかんがえたほうがいいとおもいます。\nB: そうですね。いそがないようにします。",
   exampleSrc:"A: I think it would be better to think a bit more.\nB: You are right. I will try not to rush.",
   funFact:"ほうがいい gives advice or recommendations. The た-form version (たべたほうがいい) is stronger and more common for positive advice. The negative version (たべないほうがいい = better not to eat) is used for warnings. This pattern is tested on JLPT N4."},

  {type:"fb", s:"___、でもべんりですよね。\n(That is true, but it is convenient.)", a:"たしかに", opts:["たしかに","たぶん","ぜったい","もちろん"], sSrc:"That is true, but it is convenient.",
   hint:"The adverb meaning 'certainly' used to acknowledge a point before countering."},

  {type:"match", pairs:[{trg:"さんせい",src:"agree / in favor"},{trg:"はんたい",src:"against / opposed"},{trg:"いけん",src:"opinion"},{trg:"りゆう",src:"reason"}]},

  {type:"match", pairs:[{trg:"たしかに",src:"certainly"},{trg:"ちょっと...",src:"well... (soft refusal)"},{trg:"でも",src:"but"},{trg:"ほうがいい",src:"better to"}]},

  {type:"mc", q:"たしかに、でも... is used to:", opts:["Completely disagree","Acknowledge a point, then add your view","Ask a question","Express confusion"], ans:"Acknowledge a point, then add your view",
   hint:"This pattern shows respect by agreeing partially before introducing a contrast."},

  {type:"fb", s:"もうすこしかんがえた___がいいとおもいます。\n(I think it would be better to think a bit more.)", a:"ほう", opts:["ほう","こと","もの","ため"], sSrc:"I think it would be better to think a bit more.",
   hint:"The word meaning 'direction/side' used in the advice pattern."},

  {type:"tip", title:"Agreeing and Disagreeing in Japanese",
   text:"Strong agreement:\nさんせいです。(I am in favor.)\nわたしもそうおもいます。(I think so too.)\n\nPartial agreement:\nたしかに、でも... (True, but...)\nそうですね、でも... (Indeed, but...)\n\nSoft disagreement:\nちょっと... (Well, a bit...)\nそれはどうでしょう (I wonder about that)\n\nDirect disagreement (use carefully):\nはんたいです。(I am against it.)\nちがうとおもいます。(I think that is wrong.)",
   deepDive:{title:"Reading the air (kuuki wo yomu)",
    text:"Japanese communication relies heavily on 'reading the air' (空気を読む, kuuki wo yomu), which means understanding unspoken feelings:\n\nWhen someone says ちょっと... they mean no.\nWhen someone says むずかしいですね... they often mean it is impossible.\nWhen someone says かんがえておきます... they may mean no.\nWhen someone says いいですよ with a flat tone... it might not be fine.\n\nThis indirect communication style (tatemae, public face) preserves harmony. Learning to read between the lines is as important as learning vocabulary."}},
]};
export default LESSON_3;
