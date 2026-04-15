// Unit 19 Expansion — Lesson 5: じょうけんとビジネス (Conditionals in Business)
const LESSON_5 = {
  id:"jav2_u19l5", title:"じょうけんとビジネス", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうけんとビジネス",
     desc:"Conditionals are everywhere in business Japanese. Negotiating terms, making proposals, setting deadlines, and handling problems all require precise conditional language. Learn which conditionals suit which business situations.",
     goals:["Use conditionals in business proposals and negotiations","Express contingency plans with もし...たら","Handle polite conditional requests in formal settings"]},

    {type:"teach", trg:"もし", src:"if (emphasis marker)", pos:"adv", gender:null,
     note:"Added before any conditional for emphasis or formality.\nもし...たら / もし...ば / もし...なら. Optional but common.",
     example:"A: もしごつごうがわるければれんらくしてください。\nB: わかりました。ありがとうございます。",
     exampleSrc:"A: If it is inconvenient, please contact me.\nB: Understood. Thank you.",
     funFact:"もし is a conditional emphasis marker, not a conditional form itself. It signals: 'I am about to present a hypothetical situation.' In business, もし adds formality and softness. Starting with もし prepares the listener for a condition, making the sentence easier to follow. It is especially useful in long, complex sentences."},

    {type:"teach", trg:"つごう", src:"convenience / circumstances / schedule", pos:"noun", gender:null,
     note:"つごうがいい = convenient. つごうがわるい = inconvenient.\nKanji: 都合. Essential scheduling word.",
     example:"A: あしたのつごうはどうですか？\nB: ごぜんならつごうがいいです。",
     exampleSrc:"A: How is your schedule for tomorrow?\nB: If it is the morning, I am available.",
     funFact:"都合 is the word that runs Japanese scheduling. つごうがいい (convenient) and つごうがわるい (inconvenient) are heard in every meeting arrangement. Rather than saying 'I am busy,' Japanese people say つごうがわるい (my circumstances are bad), which avoids directly refusing and saves face."},

    {type:"teach", trg:"まにあう", src:"to be in time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. しめきりにまにあう = to meet the deadline.\nKanji: 間に合う. Literally: to fit within the interval.",
     example:"A: もしまにあわなかったらどうしますか？\nB: きげんをのばしてもらいましょう。",
     exampleSrc:"A: What will we do if we do not make it in time?\nB: Let us ask for an extension.",
     funFact:"間に合う literally means 'to fit between.' Meeting deadlines (shimekiri ni maniau) is a major concern in Japanese business. Trains that arrive on time are said to have まにあった. The negative まにあわない (will not make it) triggers immediate contingency planning in Japanese workplaces."},

    {type:"teach", trg:"しめきり", src:"deadline / closing date", pos:"noun", gender:null,
     note:"しめる (to close) + きる (to cut). Kanji: 締め切り.\nThe line is closed and cut off.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.",
     funFact:"締め切り literally means 'close and cut.' Once the shimekiri passes, the opportunity is gone. Japanese business culture takes deadlines extremely seriously. Missing a shimekiri (shimekiri ni okureu) damages trust and reputation. Magazines, applications, and contests all announce their shimekiri prominently."},

    {type:"mc", q:"もしまにあわなかったらどうしますか means:", opts:["We made it in time, what next?","If we do not make it in time, what will we do?","We should hurry up","The deadline was extended"], ans:"If we do not make it in time, what will we do?",
     hint:"もし emphasizes the hypothetical. たら + どうする asks about the plan if the condition is met."},

    {type:"teach", trg:"けんとうする", src:"to consider / to examine (formally)", pos:"verb", gender:null,
     note:"する-verb. けんとう = examination/consideration.\nKanji: 検討する. Standard business response.",
     example:"A: このていあんをけんとうしていただけますか？\nB: はい、けんとうさせていただきます。",
     exampleSrc:"A: Could you consider this proposal?\nB: Yes, I will consider it.",
     funFact:"検討します is the most common business response to any proposal. It means 'I will examine/consider it.' In practice, it can mean genuine consideration or a polite way to postpone or decline. The phrase けんとうさせていただきます (I will humbly consider it) is the formal version used in meetings and emails."},

    {type:"teach", trg:"ていあん", src:"proposal / suggestion", pos:"noun", gender:null,
     note:"する-verb capable: ていあんする = to propose.\nKanji: 提案. 提 (present) + 案 (idea/plan).",
     example:"A: あたらしいていあんがあります。\nB: ぜひきかせてください。",
     exampleSrc:"A: I have a new proposal.\nB: Please do tell us.",
     funFact:"提案 is the lifeblood of Japanese business meetings. Every project begins with a teian (proposal), which is presented formally and then discussed (検討). The kanji 案 (idea) also appears in 案内 (guidance) and 案件 (matter/case). Presenting a good teian is a skill valued highly in Japanese companies."},

    {type:"fb", s:"もしごつごうがわる___れんらくしてください。\n(If it is inconvenient, please contact me.)", a:"ければ", opts:["ければ","かったら","いと","いなら"], sSrc:"If it is inconvenient, please contact me.",
     hint:"The ば conditional of a negative い-adjective. わるい becomes わるければ."},

    {type:"teach", trg:"きげん", src:"deadline / time limit / due date", pos:"noun", gender:null,
     note:"き (period) + げん (limit). Kanji: 期限.\nきげんをのばす = to extend the deadline.",
     example:"A: きげんをのばしてもらえますか？\nB: 1しゅうかんだけならだいじょうぶです。",
     exampleSrc:"A: Can you extend the deadline?\nB: If it is just one week, it is fine.",
     funFact:"期限 is a more formal synonym for 締め切り. It appears on food labels (賞味期限, best-before date), visas (有効期限, expiration date), and project timelines. The verb のばす (to extend/stretch) pairs with it for deadline extensions. Asking for きげんをのばす requires careful politeness in Japanese business."},

    {type:"teach", trg:"ばあい", src:"in case of / in the event of", pos:"noun", gender:null,
     note:"Kanji: 場合. ばあいは = in the case of.\nOften used with conditionals for contingency planning.",
     example:"A: もんだいがあったばあいはすぐれんらくしてください。\nB: わかりました。",
     exampleSrc:"A: In case there are problems, please contact us immediately.\nB: Understood.",
     funFact:"場合 literally means 'place + meet' and functions as a formal conditional noun. It creates if-then statements in writing: この場合は (in this case). Business documents, contracts, and manuals rely heavily on 場合. It is more formal than たら and appears in legal and bureaucratic language."},

    {type:"mc", q:"けんとうさせていただきます means:", opts:["I reject your proposal","I will humbly consider it","Please consider my proposal","The proposal is accepted"], ans:"I will humbly consider it",
     hint:"The humble business formula させていただく applied to けんとう (examination/consideration)."},

    {type:"teach", trg:"ようすをみる", src:"to wait and see / to observe the situation", pos:"verb", gender:null,
     note:"ようす (situation/appearance) + をみる (to look at/watch).\nKanji: 様子を見る. Common business strategy.",
     example:"A: すこしようすをみたらどうですか？\nB: そうですね。もうすこしまちましょう。",
     exampleSrc:"A: How about waiting and seeing for a bit?\nB: You are right. Let us wait a little more.",
     funFact:"様子を見る is a quintessentially Japanese approach to decision-making. Rather than acting immediately, observing the situation (yousu wo miru) is considered wise. It reflects the value of caution and patience. Doctors also use this phrase: もうすこしようすをみましょう (let us observe the condition a bit longer)."},

    {type:"fb", s:"もんだいがあった___はすぐれんらくしてください。\n(In case there are problems, please contact us immediately.)", a:"ばあい", opts:["ばあい","とき","たら","ので"], sSrc:"In case there are problems, please contact us immediately.",
     hint:"The formal noun meaning 'in case of' or 'in the event of.' Used in business documents and contracts."},

    {type:"tip", title:"Conditionals in Business Japanese",
     text:"Scheduling:\nもしつごうがわるければ = if it is inconvenient\nまにあわなかったら = if we do not make it in time\n\nProposals and responses:\nけんとうしていただけますか？ = could you consider?\nけんとうさせていただきます = I will consider it (humble)\n\nContingency:\nもんだいがあったばあい = in case of problems\nようすをみたらどうですか = how about waiting and seeing?\n\nDeadlines:\nしめきりまでにまにあう = to meet the deadline\nきげんをのばす = to extend the deadline\n\nもし adds formality to any conditional in business settings.",
     deepDive:{title:"Which Conditional for Business?",
      text:"Business Japanese uses all four conditionals strategically:\n\nたら: general if/then, plans. もしまにあわなかったら (if we miss the deadline).\nば: adjective conditions, advice. ごつごうがよければ (if it is convenient for you).\nと: procedures, manuals. このボタンをおすとインさつされます (press this button and it prints).\nなら: responding to proposals. そのけいかくなら、さんせいです (if it is that plan, I agree).\nばあい: formal contingency. もんだいがあったばあい (in the event of problems).\n\nBusiness contexts lean toward formal patterns. ばあい is especially important in contracts and official documents where precision matters."}},

    {type:"match", pairs:[{trg:"もし",src:"if (emphasis)"},{trg:"つごう",src:"convenience/schedule"},{trg:"まにあう",src:"to be in time"},{trg:"しめきり",src:"deadline"}]},

    {type:"match", pairs:[{trg:"けんとうする",src:"to consider"},{trg:"ていあん",src:"proposal"},{trg:"ばあい",src:"in case of"},{trg:"ようすをみる",src:"wait and see"}]},

    {type:"mc", q:"1しゅうかんだけならだいじょうぶです uses なら because:", opts:["It describes an automatic result","It responds to context just stated","It expresses a past discovery","It is a proverb"], ans:"It responds to context just stated",
     hint:"なら picks up on what the other person just said and r... with your condition/opinion."},
  ]
};
export default LESSON_5;
