// Batch 9 – Unit 14 (B1.1 Opinions): Debate & Discussion
const BATCH9_L1 = {
  id:"jav2_u14l_b9_1", title:"ぎろん", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぎろん",
     desc:"Learn vocabulary and expressions for expressing opinions, agreeing, disagreeing, and participating in discussions.",
     goals:["Express agreement and disagreement politely","Give reasons for opinions","Participate in discussions naturally"]},

    {type:"teach", trg:"さんせい", src:"agreement / in favor", pos:"noun", gender:null,
     note:"さんせいする = to agree. さんせいです = I agree.\nOpposite: はんたい.",
     example:"A: このけいかくにさんせいですか？\nB: はい、さんせいです。",
     exampleSrc:"A: Do you agree with this plan?\nB: Yes, I agree.",
     funFact:"さんせい (賛成) is direct and clear. In formal meetings, Japanese people often avoid saying はんたい directly. Instead, they use softer phrases like ちょっとむずかしいかもしれません (that might be difficult). Reading these indirect signals is essential in Japanese business."},

    {type:"teach", trg:"はんたい", src:"opposition / against", pos:"noun", gender:null,
     note:"はんたいする = to oppose. はんたいです = I am against.\nはんたいいけん = opposing opinion.",
     example:"A: はんたいのひとはいますか？\nB: ひとつきになるてんがあります。",
     exampleSrc:"A: Is anyone opposed?\nB: I have one concern.",
     funFact:"はんたい (反対) is often softened in Japanese communication. Rather than はんたいです, people prefer ちょっとかんがえさせてください (let me think about it) or べつのほうほうもあるかもしれません (there might be another way). Direct はんたい is reserved for strong feelings or formal votes."},

    {type:"teach", trg:"たしかに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Used to acknowledge a valid point.\nたしかに、そうですね = Indeed, that is so.",
     example:"A: ねだんがたかいですね。\nB: たしかに。でもひんしつはいいです。",
     exampleSrc:"A: The price is high.\nB: Indeed. But the quality is good.",
     funFact:"たしかに (確かに) is a powerful discussion tool. It validates the other person's point before introducing a counterargument. The pattern たしかに...でも (indeed...but) is the most common way to disagree respectfully in Japanese. It shows you listened before disagreeing."},

    {type:"teach", trg:"りゆう", src:"reason / grounds", pos:"noun", gender:null,
     note:"りゆうをせつめいする = to explain the reason.\nなぜ？ = Why?",
     example:"A: はんたいのりゆうはなんですか？\nB: よさんがたりないからです。",
     exampleSrc:"A: What is the reason for opposing?\nB: Because the budget is insufficient.",
     funFact:"りゆう (理由) is essential in Japanese formal communication. Japanese people expect logical りゆう behind decisions. The phrase りゆうをきかせてください (please tell me the reason) is standard. In Japanese essay writing, いけん (opinion) must always be supported by りゆう."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"adv", gender:null,
     note:"Used to summarize or rephrase.\nつまり、こういうことです = In other words, it is like this.",
     example:"A: つまり、じかんがたりないということですか？\nB: はい、そういうことです。",
     exampleSrc:"A: In other words, you are saying there is not enough time?\nB: Yes, that is it.",
     funFact:"つまり is a connector that signals you are about to restate something more clearly. It is extremely useful in discussions and presentations. The phrase つまりなにがいいたいの？ (so what are you trying to say?) is a casual but common way to ask someone to get to the point."},

    {type:"teach", trg:"けっきょく", src:"in the end / after all / ultimately", pos:"adv", gender:null,
     note:"けっきょくどうなりましたか = How did it turn out?\nSummarizes the final outcome.",
     example:"A: けっきょくどうなりましたか？\nB: けっきょく、きゅうかをとることにしました。",
     exampleSrc:"A: How did it turn out?\nB: In the end, I decided to take a vacation.",
     funFact:"けっきょく (結局) means 'final conclusion' and often carries a nuance that the outcome was different from expectations. けっきょくだめだった (it did not work out in the end) and けっきょくよかった (it turned out well) are both common. It implies a journey of deliberation before the final result."},

    {type:"teach", trg:"ばあい", src:"case / situation / instance", pos:"noun", gender:null,
     note:"このばあい = in this case.\nもしものばあい = in case of emergency.",
     example:"A: あめのばあいはどうしますか？\nB: しつないでやりましょう。",
     exampleSrc:"A: What shall we do in case of rain?\nB: Let's do it indoors.",
     funFact:"ばあい (場合) is one of the most useful conditional words. あめのばあい (in case of rain) appears on every outdoor event notice. The pattern Nのばあい or Vたばあい creates conditional scenarios. ばあいによって means 'depending on the situation,' adding flexibility to decisions."},

    {type:"teach", trg:"ていあん", src:"proposal / suggestion", pos:"noun", gender:null,
     note:"ていあんする = to propose/suggest.\nていあんしょ = proposal document.",
     example:"A: ひとつていあんがあります。\nB: どうぞ、きかせてください。",
     exampleSrc:"A: I have a suggestion.\nB: Please, let me hear it.",
     funFact:"ていあん (提案) combines 提 (present) and 案 (plan). In Japanese meetings, ていあん are often circulated as documents before discussion, so everyone can prepare responses. This reflects the ねまわし (groundwork) culture where consensus is built before formal meetings."},

    {type:"mc", q:"What is the common Japanese pattern for polite disagreement?", opts:["たしかに...でも (indeed...but)","いいえ、はんたいです (no, I disagree)","それはちがいます (that is wrong)","ぜったいだめです (absolutely not)"], ans:"たしかに...でも (indeed...but)",
     hint:"This pattern validates the other person's point before introducing a counterargument."},

    {type:"fb", s:"{1}どうなりましたか？\n(How did it turn out in the end?)", a:"けっきょく", opts:["けっきょく","たしかに","つまり","たとえば"], sSrc:"How did it turn out in the end?",
     hint:"This adverb summarizes the final outcome, often implying the result differed from expectations."},

    {type:"match", pairs:[
      {trg:"さんせい", src:"agreement"},
      {trg:"はんたい", src:"opposition"},
      {trg:"りゆう", src:"reason"},
      {trg:"ていあん", src:"proposal"}
    ]},

    {type:"mc", q:"What is ねまわし in Japanese business culture?", opts:["Building consensus before formal meetings","Cleaning the office","Writing proposals","Arriving early to meetings"], ans:"Building consensus before formal meetings",
     hint:"This practice involves circulating ideas and gathering support informally b... the official discussion."}
  ]
};
export default BATCH9_L1;
