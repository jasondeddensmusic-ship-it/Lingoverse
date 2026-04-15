// Unit 22 Expansion. Lesson 5: やりもらいの使い分け (Choosing the Right Giving Verb)
const LESSON_5 = {
  id:"jav2_u22l5", title:"やりもらいの使い分け", icon:"🧩", xp:15, board:true,
  steps:[
    {type:"intro", title:"やりもらいの使い分け",
     desc:"Practice choosing between all the giving and receiving verbs in real-world situations. Work through scenarios involving workplace exchanges, family interactions, and everyday requests. This lesson builds fluency in the entire やりもらい system from casual to formal.",
     goals:["Choose the right giving/receiving verb for each context","Combine favor verbs with polite request forms","Apply the complete やりもらい system to daily life scenarios"]},

    {type:"teach", trg:"〜てさしあげる", src:"to do ~ for someone (humble favor)", pos:"part", gender:null,
     note:"Humble form of てあげる. Used when doing a favor for a superior.\nて-form + さしあげる. Use with care to avoid sounding patronizing.",
     example:"A: おにもつをおもちしましょうか？\nB: ありがとうございます。おねがいします。",
     exampleSrc:"A: Shall I carry your luggage?\nB: Thank you. Please do.",
     funFact:"てさしあげる exists but is rarely used in modern Japanese because it can sound condescending even in polite form. The safer alternative is おVますstem+しましょうか (shall I do?). Instead of もってさしあげましょうか, Japanese speakers say おもちしましょうか. Both express the same favor, but the latter avoids the patronizing nuance."},

    {type:"teach", trg:"〜ていただけませんか", src:"could you kindly do ~ for me?", pos:"part", gender:null,
     note:"The most polite standard request form.\nて-form + いただけませんか. Negative question = extra politeness.",
     example:"A: このしょるいをかくにんしていただけませんか？\nB: はい、しょうしょうおまちください。",
     exampleSrc:"A: Could you kindly check this document?\nB: Yes, please wait a moment.",
     funFact:"ていただけませんか is the gold standard for polite requests in business Japanese. The negative question (could you not?) is paradoxically more polite than the positive (could you?). This mirrors English: 'wouldn't you mind?' feels softer than 'would you mind?' The pattern shows maximum deference while making a clear request."},

    {type:"teach", trg:"かくにんする", src:"to confirm / to check / to verify", pos:"verb", gender:null,
     note:"する-verb. Kanji: 確認する. かく (certain) + にん (recognize).\nUsed constantly in business Japanese.",
     example:"A: スケジュールをかくにんしてください。\nB: はい、すぐかくにんします。",
     exampleSrc:"A: Please check the schedule.\nB: Yes, I will check right away.",
     funFact:"確認 is arguably the most-used business verb in Japanese. Emails, meetings, and phone calls revolve around かくにん: confirming plans, verifying information, checking details. ごかくにんください (please confirm, honorific) appears in virtually every business email. The word reflects Japanese work culture's emphasis on double-checking everything."},

    {type:"teach", trg:"そうだんする", src:"to consult / to discuss / to seek advice", pos:"verb", gender:null,
     note:"する-verb. Kanji: 相談する. そう (mutual) + だん (talk).\nそうだんにのる = to give someone advice (lit. ride on their consultation).",
     example:"A: じょうしにそうだんしてもいいですか？\nB: もちろん、いつでもそうだんしてください。",
     exampleSrc:"A: May I consult with my supervisor?\nB: Of course, please consult anytime.",
     funFact:"相談 combines 相 (mutual) and 談 (talk). Japanese workplaces run on ほうれんそう (報連相): ほうこく (report), れんらく (contact), and そうだん (consult). This trio is drilled into every new employee. Failing to そうだん before making decisions is one of the fastest ways to damage workplace trust."},

    {type:"mc", q:"ていただけませんか is:", opts:["a casual request form","the most polite standard request form","a way to refuse a request","an apology expression"], ans:"the most polite standard request form",
     hint:"This negative question f... with いただく creates maximum politeness for asking favors."},

    {type:"teach", trg:"たのむ", src:"to request / to ask a favor / to order (food)", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 頼む. Casual: たのむよ (I am asking you).\nCombines requesting and ordering.",
     example:"A: ともだちにひっこしのてつだいをたのみました。\nB: てつだってくれましたか？",
     exampleSrc:"A: I asked my friend to help with moving.\nB: Did they help?",
     funFact:"頼む spans from casual requests to formal orders. At restaurants, おねがいします or ちゅうもんおねがいします (from 注文, order) are more standard, but たのむ is used casually. The phrase たのんだよ (I am counting on you) seals a promise between friends. 頼 uses the kanji for 'rely/depend,' showing that requests create bonds of trust."},

    {type:"teach", trg:"ことわる", src:"to refuse / to decline / to reject", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 断る. The opposite of accepting a request.\nVery difficult culturally in Japan.",
     example:"A: ざんぎょうをたのまれましたが、ことわりました。\nB: りゆうをいいましたか？",
     exampleSrc:"A: I was asked to work overtime, but I declined.\nB: Did you give a reason?",
     funFact:"断る is one of the hardest things to do in Japanese culture. Direct refusal is avoided whenever possible. Instead, Japanese speakers use softening phrases: ちょっと... (a bit...), むずかしいですね (that is difficult), かんがえさせてください (let me think about it). These indirect refusals are understood by everyone as polite 'no's."},

    {type:"teach", trg:"ひきうける", src:"to take on / to undertake / to accept (a task)", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 引き受ける. ひき (pull) + うける (receive).\nしごとをひきうける = to take on a job.",
     example:"A: このプロジェクトをひきうけていただけますか？\nB: はい、よろこんでひきうけます。",
     exampleSrc:"A: Would you take on this project?\nB: Yes, I would be happy to take it on.",
     funFact:"引き受ける combines 引く (pull) and 受ける (receive), creating the image of pulling a responsibility toward yourself. よろこんで (with pleasure) is the standard acceptance phrase in business. This contrasts with ことわる (refuse): Japanese work culture makes ひきうける the default, with refusal requiring careful navigation."},

    {type:"fb", s:"このしょるいをかくにんして{1}か？\n(Could you kindly check this document?)", a:"いただけません", opts:["いただけません","もらえません","くれません","あげません"], sSrc:"Could you kindly check this document?",
     hint:"The most polite negative question request form, using the humble receiving verb."},

    {type:"teach", trg:"きをつかう", src:"to be considerate / to take care (socially)", pos:"verb", gender:null,
     note:"き (spirit/energy) + をつかう (to use). Being thoughtful about others.\nきをつかわないで = don't go to any trouble.",
     example:"A: きをつかわないでください。\nB: いいえ、たいしたことではありません。",
     exampleSrc:"A: Please don't trouble yourself.\nB: No, it is nothing at all.",
     funFact:"気を使う literally means 'to use your spirit/energy (for others).' It describes the mental effort of being considerate: thinking about what someone needs, avoiding causing trouble, choosing the right words. きをつかう is exhausting but expected. The phrase きをつかわないで (don't trouble yourself) is both a genuine request and a polite ritual."},

    {type:"teach", trg:"めいわく", src:"nuisance / trouble / bother", pos:"noun", gender:null,
     note:"Kanji: 迷惑. めいわくをかける = to cause trouble for someone.\nめいわくメール = spam email.",
     example:"A: めいわくをおかけしてすみません。\nB: いいえ、きにしないでください。",
     exampleSrc:"A: I am sorry for causing you trouble.\nB: No, please don't worry about it.",
     funFact:"迷惑 combines 迷 (lost/confused) and 惑 (bewildered). The phrase めいわくをかける (to cause trouble) is one of the most-apologized-for things in Japan. ひとにめいわくをかけるな (don't trouble others) is taught from childhood as a core value. Even asking for help can trigger めいわく guilt, which explains why Japanese people often hesitate to ask."},

    {type:"mc", q:"ことわる means:", opts:["to accept a request","to refuse or decline","to consider carefully","to ask a favor"], ans:"to refuse or decline",
     hint:"This verb is the opposite of accepting, and is socially difficult to do directly in Japan."},

    {type:"match", pairs:[{trg:"てさしあげる",src:"do for someone (humble)"},{trg:"ていただけませんか",src:"could you kindly do?"},{trg:"たのむ",src:"to request"},{trg:"ことわる",src:"to refuse"}]},

    {type:"match", pairs:[{trg:"かくにんする",src:"to confirm"},{trg:"そうだんする",src:"to consult"},{trg:"ひきうける",src:"to take on"},{trg:"きをつかう",src:"to be considerate"}]},

    {type:"fb", s:"{1}をおかけしてすみません。\n(I am sorry for causing you trouble.)", a:"めいわく", opts:["めいわく","きもち","おれい","おかえし"], sSrc:"I am sorry for causing you trouble.",
     hint:"The word for nuisance or bother, used in one of Japan's most common apology patterns."},

    {type:"mc", q:"きをつかう means:", opts:["to be careful","to be considerate of others","to be annoyed","to pay money"], ans:"to be considerate of others",
     hint:"Literally 'using your spirit,' this describes the mental effort of being thoughtful."},

    {type:"match", pairs:[{trg:"めいわく",src:"trouble/bother"},{trg:"きをつかう",src:"to be considerate"},{trg:"ひきうける",src:"to undertake"},{trg:"そうだんする",src:"to consult"}]},
  ]
};
export default LESSON_5;
