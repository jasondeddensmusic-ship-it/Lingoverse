// Unit 19 Expansion. Lesson 5: じょうけんとビジネス (Conditionals in Business)
const LESSON_5 = {
  id:"jav2_u19l5", title:"じょうけんとビジネス", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうけんとビジネス",
     desc:"Conditionals are everywhere in business Japanese. Negotiating terms, making proposals, setting deadlines, and handling problems all require precise conditional language. Learn which conditionals suit which business situations.",
     goals:["Use conditionals in business proposals and negotiations","Express contingency plans with もし...たら","Handle polite conditional requests in formal settings"]},

    {type:"teach", trg:"もし", src:"if (emphasis marker)", pos:"adv", gender:null,
     note:"Added before any conditional for emphasis or formality.\nもし...たら / もし...ば / もし...なら. Optional but common.",
     example:"A: もしごつごうがわるければれんらくしてください。\nB: わかりました。ありがとうございます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: If it is inconvenient, please contact me.\nB: Understood. Thank you.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"もし is a conditional emphasis marker, not a conditional form itself. It signals: 'I am about to present a hypothetical situation.' In business, もし adds formality and softness. Starting with もし prepares the listener for a condition, making the sentence easier to follow. It is especially useful in long, complex sentences."},

    {type:"teach", trg:"つごう", src:"convenience / circumstances / schedule", pos:"noun", gender:null,
     note:"つごうがいい = convenient. つごうがわるい = inconvenient.\nKanji: 都合. Essential scheduling word.",
     example:"A: あしたのつごうはどうですか？\nB: ごぜんならつごうがいいです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: How is your schedule for tomorrow?\nB: If it is the morning, I am available.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"都合 is the word that runs Japanese scheduling. つごうがいい (convenient) and つごうがわるい (inconvenient) are heard in every meeting arrangement. Rather than saying 'I am busy,' Japanese people say つごうがわるい (my circumstances are bad), which avoids directly refusing and saves face."},

    {type:"teach", trg:"まにあう", src:"to be in time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. しめきりにまにあう = to meet the deadline.\nKanji: 間に合う. Literally: to fit within the interval.",
     example:"A: もしまにあわなかったらどうしますか？\nB: きげんをのばしてもらいましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What will we do if we do not make it in time?\nB: Let us ask for an extension.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"間に合う literally means 'to fit between.' Meeting deadlines (shimekiri ni maniau) is a major concern in Japanese business. Trains that arrive on time are said to have まにあった. The negative まにあわない (will not make it) triggers immediate contingency planning in Japanese workplaces."},

    {type:"teach", trg:"しめきり", src:"deadline / closing date", pos:"noun", gender:null,
     note:"しめる (to close) + きる (to cut). Kanji: 締め切り.\nThe line is closed and cut off.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"締め切り literally means 'close and cut.' Once the shimekiri passes, the opportunity is gone. Japanese business culture takes deadlines extremely seriously. Missing a shimekiri (shimekiri ni okureu) damages trust and reputation. Magazines, applications, and contests all announce their shimekiri prominently."},

    {type:"mc", q:"もしまにあわなかったらどうしますか means:", opts:["If we do not make it in time, what will we do?","We should hurry up","The deadline was extended","We made it in time, what next?"], ans:"If we do not make it in time, what will we do?",
     hint:"もし emphasizes the hypothetical. たら + どうする asks about the plan if the condition is met."},

    {type:"teach", trg:"けんとうする", src:"to consider / to examine (formally)", pos:"verb", gender:null,
     note:"する-verb. けんとう = examination/consideration.\nKanji: 検討する. Standard business response.",
     example:"A: このていあんをけんとうしていただけますか？\nB: はい、けんとうさせていただきます。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Could you consider this proposal?\nB: Yes, I will consider it.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"検討します is the most common business response to any proposal. It means 'I will examine/consider it.' In practice, it can mean genuine consideration or a polite way to postpone or decline. The phrase けんとうさせていただきます (I will humbly consider it) is the formal version used in meetings and emails."},

    {type:"teach", trg:"ていあん", src:"proposal / suggestion", pos:"noun", gender:null,
     note:"する-verb capable: ていあんする = to propose.\nKanji: 提案. 提 (present) + 案 (idea/plan).",
     example:"A: あたらしいていあんがあります。\nB: ぜひきかせてください。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I have a new proposal.\nB: Please do tell us.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"提案 is the lifeblood of Japanese business meetings. Every project begins with a teian (proposal), which is presented formally and then discussed (検討). The kanji 案 (idea) also appears in 案内 (guidance) and 案件 (matter/case). Presenting a good teian is a skill valued highly in Japanese companies."},

    {type:"fb", s:"もしごつごうがわる{1}れんらくしてください。\n(If it is inconvenient, please contact me.)", a:"ければ", opts:["ければ","かったら","いと","いなら"], sSrc:"If it is inconvenient, please contact me.",
     hint:"The ば conditional of a negative い-adjective. わるい becomes わるければ."},

    {type:"teach", trg:"きげん", src:"deadline / time limit / due date", pos:"noun", gender:null,
     note:"き (period) + げん (limit). Kanji: 期限.\nきげんをのばす = to extend the deadline.",
     example:"A: きげんをのばしてもらえますか？\nB: 1しゅうかんだけならだいじょうぶです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Can you extend the deadline?\nB: If it is just one week, it is fine.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"期限 is a more formal synonym for 締め切り. It appears on food labels (賞味期限, best-before date), visas (有効期限, expiration date), and project timelines. The verb のばす (to extend/stretch) pairs with it for deadline extensions. Asking for きげんをのばす requires careful politeness in Japanese business."},

    {type:"teach", trg:"ばあい", src:"in case of / in the event of", pos:"noun", gender:null,
     note:"Kanji: 場合. ばあいは = in the case of.\nOften used with conditionals for contingency planning.",
     example:"A: もんだいがあったばあいはすぐれんらくしてください。\nB: わかりました。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: In case there are problems, please contact us immediately.\nB: Understood.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"場合 literally means 'place + meet' and functions as a formal conditional noun. It creates if-then statements in writing: この場合は (in this case). Business documents, contracts, and manuals rely heavily on 場合. It is more formal than たら and appears in legal and bureaucratic language."},

    {type:"mc", q:"けんとうさせていただきます means:", opts:["I reject your proposal","I will humbly consider it","Please consider my proposal","The proposal is accepted"], ans:"I will humbly consider it",
     hint:"The humble business formula させていただく applied to けんとう (examination/consideration)."},

    {type:"teach", trg:"ようすをみる", src:"to wait and see / to observe the situation", pos:"verb", gender:null,
     note:"ようす (situation/appearance) + をみる (to look at/watch).\nKanji: 様子を見る. Common business strategy.",
     example:"A: すこしようすをみたらどうですか？\nB: そうですね。もうすこしまちましょう。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: How about waiting and seeing for a bit?\nB: You are right. Let us wait a little more.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"様子を見る is a quintessentially Japanese approach to decision-making. Rather than acting immediately, observing the situation (yousu wo miru) is considered wise. It reflects the value of caution and patience. Doctors also use this phrase: もうすこしようすをみましょう (let us observe the condition a bit longer)."},

    {type:"fb", s:"もんだいがあった{1}はすぐれんらくしてください。\n(In case there are problems, please contact us immediately.)", a:"ばあい", opts:["ばあい","とき","たら","ので"], sSrc:"In case there are problems, please contact us immediately.",
     hint:"The formal noun meaning 'in case of' or 'in the event of.' Used in business documents and contracts."},

    {type:"tip", title:"Conditionals in Business Japanese",
     text:"Scheduling:\nもしつごうがわるければ = if it is inconvenient\nまにあわなかったら = if we do not make it in time\n\nProposals and responses:\nけんとうしていただけますか？ = could you consider?\nけんとうさせていただきます = I will consider it (humble)\n\nContingency:\nもんだいがあったばあい = in case of problems\nようすをみたらどうですか = how about waiting and seeing?\n\nDeadlines:\nしめきりまでにまにあう = to meet the deadline\nきげんをのばす = to extend the deadline\n\nもし adds formality to any conditional in business settings.",
     deepDive:{title:"Which Conditional for Business?",
      text:"Business Japanese uses all four conditionals strategically:\n\nたら: general if/then, plans. もしまにあわなかったら (if we miss the deadline).\nば: adjective conditions, advice. ごつごうがよければ (if it is convenient for you).\nと: procedures, manuals. このボタンをおすとインさつされます (press this button and it prints).\nなら: responding to proposals. そのけいかくなら、さんせいです (if it is that plan, I agree).\nばあい: formal contingency. もんだいがあったばあい (in the event of problems).\n\nBusiness contexts lean toward formal patterns. ばあい is especially important in contracts and official documents where precision matters."}},

    {type:"match", pairs:[{trg:"もし",src:"if (emphasis)"},{trg:"つごう",src:"convenience/schedule"},{trg:"まにあう",src:"to be in time"},{trg:"しめきり",src:"deadline"}]},

    {type:"match", pairs:[{trg:"けんとうする",src:"to consider"},{trg:"ていあん",src:"proposal"},{trg:"ばあい",src:"in case of"},{trg:"ようすをみる",src:"wait and see"}]},

    {type:"mc", q:"1しゅうかんだけならだいじょうぶです uses なら because:", opts:["It is a proverb","It describes an automatic result","It responds to context just stated","It expresses a past discovery"], ans:"It responds to context just stated",
     hint:"なら picks up on what the other person just said and r... with your condition/opinion."},
  ]
};
export default LESSON_5;
