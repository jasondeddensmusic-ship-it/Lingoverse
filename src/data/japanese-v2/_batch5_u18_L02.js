// Unit 18 Batch 5 Lesson 2: きょかとめいれい (Permission, Prohibition & Commands)
const BATCH5_L_2 = {
  id:"jav2_u18l_b5_2", title:"きょかとめいれい", icon:"🚫", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょかとめいれい",
     desc:"Causative forms are essential for granting permission and giving orders. Learn how to say 'let me do it,' 'do not make me,' and navigate the nuances of Japanese commands. From polite requests to firm prohibitions, these patterns govern authority and freedom in Japanese communication.",
     goals:["Use causative for granting permission","Express prohibition with causative-negative","Give commands appropriately using different registers"]},

    {type:"teach", trg:"させてください", src:"please let me do / please allow me", pos:"verb", gender:null,
     note:"Causative て-form + ください. The polite way to ask permission.\nやらせてください = please let me do it.",
     example:"A: このプロジェクトをやらせてください。\nB: わかりました。きたいしていますよ。",
     exampleSrc:"A: Please let me work on this project.\nB: Understood. I am looking forward to it.",
     funFact:"させてください is the standard permission request in formal Japanese. Job applicants say やらせてください (please let me do it) to show eagerness. In dramas, characters shout いかせてください (let me go!) at climactic moments. The pattern causative-て + ください is among the most useful in Japanese."},

    {type:"teach", trg:"させていただく", src:"to be allowed to do (humble)", pos:"verb", gender:null,
     note:"Humble form of させてもらう. Extremely polite.\nはっぴょうさせていただきます = I will humbly present.",
     example:"A: じこしょうかいをさせていただきます。\nB: どうぞよろしくおねがいします。",
     exampleSrc:"A: Allow me to introduce myself.\nB: Pleased to meet you.",
     funFact:"させていただく has become one of the most overused expressions in modern Japanese. Originally humble and elegant, it now appears in situations where simpler forms would suffice. Language purists criticize its overuse, calling it させていただく症候群 (sasete-itadaku syndrome). Despite this, it remains essential in business and formal settings."},

    {type:"teach", trg:"きんし", src:"prohibition / ban", pos:"noun", gender:null,
     note:"Kanji: 禁止. きんしする = to prohibit.\nえいえんきんし = permanent ban. Used on signs everywhere.",
     example:"A: このこうえんではきつえんがきんしされています。\nB: きんえんくいきがふえていますね。",
     exampleSrc:"A: Smoking is prohibited in this park.\nB: No-smoking areas are increasing.",
     funFact:"禁止 signs are ubiquitous in Japan. 撮影禁止 (no photography), 駐車禁止 (no parking), 立入禁止 (no entry). The kanji 禁 originally depicted a forest (林) with a sacred altar (示) below, meaning a forest taboo. Japanese public spaces have extensive rules, and 禁止 signs help maintain social order."},

    {type:"teach", trg:"めいれい", src:"order / command", pos:"noun", gender:null,
     note:"Kanji: 命令. めいれいする = to order/command.\nめいれいけい = imperative form (grammar term).",
     example:"A: じょうしからのめいれいにはしたがわなければなりません。\nB: でも、ふとうなめいれいにはいぎをとなえるべきです。",
     exampleSrc:"A: You must obey orders from your superiors.\nB: But you should voice objections to unfair orders.",
     funFact:"命令 combines 命 (life/fate) and 令 (order/decree). The word carries military and hierarchical weight. In everyday Japanese, めいれい sounds strong and formal. Parents めいれいする to children, but friends never めいれいする to each other. The imperative form (命令形) exists in grammar but is rarely used in polite conversation."},

    {type:"mc", q:"やらせてください means:", opts:["Please let me do it","Please do it for me","I will make you do it","Do not do it"], ans:"Please let me do it",
     hint:"Causative て-form + ください is a polite request for permission to perform an action."},

    {type:"teach", trg:"〜てはいけない", src:"must not / it is forbidden to", pos:"part", gender:null,
     note:"て-form + はいけない = prohibition. Stronger than てはだめ.\nここにはいってはいけません = you must not enter here.",
     example:"A: しけんちゅうにじしょをつかってはいけません。\nB: わかりました。きをつけます。",
     exampleSrc:"A: You must not use a dictionary during the exam.\nB: Understood. I will be careful.",
     funFact:"てはいけない is the standard prohibition form in rules and regulations. Teachers use it with students, parents with children. The いけない literally means 'it will not go' or 'it will not do.' There is a scale of strength: てはだめ (cannot, colloquial) to てはいけない (must not, standard) to てはならない (must not, formal/legal)."},

    {type:"teach", trg:"きょか", src:"permission / approval", pos:"noun", gender:null,
     note:"Kanji: 許可. きょかをもらう = to receive permission.\nきょかなく = without permission.",
     example:"A: じょうしのきょかをもらってからしゅっちょうのてはいをしてください。\nB: はい、まずきょかをもらいます。",
     exampleSrc:"A: Please arrange the business trip after getting your boss's approval.\nB: Yes, I will get permission first.",
     funFact:"許可 uses 許 (permit) and 可 (possible/approve). Japanese organizations are highly permission-oriented. Before taking action, getting きょか from superiors is expected. The 稟議 (ringi) system involves circulating a proposal document for multiple stamps of approval. This consensus-building process can be slow but ensures collective agreement."},

    {type:"teach", trg:"したがう", src:"to obey / to follow / to comply", pos:"verb", gender:null,
     note:"Group 1 verb. ルールにしたがう = to follow rules.\nKanji: 従う. めいれいにしたがう = obey orders.",
     example:"A: こうつうルールにしたがいましょう。\nB: あんぜんがいちばんだいじですね。",
     exampleSrc:"A: Let us follow traffic rules.\nB: Safety is the most important thing.",
     funFact:"従う contains the kanji 従, depicting a person (人) following a path (从). Japanese society values したがう (obedience/compliance) highly. Following rules, respecting hierarchy, and conforming to group norms are seen as social virtues. The connector したがって (therefore) comes from this same verb."},

    {type:"teach", trg:"〜なさい", src:"do ~ (gentle command)", pos:"part", gender:null,
     note:"Masu-stem + なさい. Softer than imperative but still a command.\nたべなさい = eat (parent to child). べんきょうしなさい = study.",
     example:"A: はやくしゅくだいをしなさい。\nB: はーい、いまやります。",
     exampleSrc:"A: Do your homework quickly.\nB: Okay, I will do it now.",
     funFact:"なさい is the command form of なさる (honorific する). Ironically, this honorific origin means it sounds gentler than the plain imperative (しろ). Mothers across Japan say べんきょうしなさい (study!) to their children. It is commanding but caring. School teachers also use it. Between adults, it would sound condescending."},

    {type:"tip", title:"Levels of Command in Japanese",
     text:"From softest to strongest:\n\nしてください = please do (polite request)\nしてくださいませんか = could you please (very polite)\nしなさい = do it (gentle command, parent/teacher)\nしなければならない = must do (obligation)\nしろ / せよ = do it! (plain imperative, rough)\n\nFrom softest to strongest prohibition:\nしないでください = please do not\nしてはだめ = you cannot / should not (casual)\nしてはいけない = must not (standard rule)\nしてはならない = must not (formal/legal)\nするな = do not! (plain imperative, rough)",
     deepDive:{title:"The Imperative in Real Life",
      text:"The plain imperative (しろ, いけ, たべろ) is rarely used in polite company. It appears in:\n\nSports: はしれ！(Run!) がんばれ！(Do your best!)\nEmergencies: にげろ！(Flee!) とまれ！(Stop!)\nMilitary/police: うごくな！(Do not move!)\nManga/anime: Characters use it freely for dramatic effect.\n\nIn real conversation, using the imperative to a stranger or superior would be extremely rude. Even between friends, it is only used jokingly. Japanese achieves commands through softer forms like てください, なさい, or simply stating facts (しなければならない = it must be done)."}},

    {type:"teach", trg:"いぎをとなえる", src:"to voice an objection / to raise a protest", pos:"verb", gender:null,
     note:"いぎ (objection) + を + となえる (to recite/advocate).\nKanji: 異議を唱える. Formal expression.",
     example:"A: ふとうなけっていにはいぎをとなえるべきです。\nB: ゆうきがひつようですね。",
     exampleSrc:"A: You should voice objections to unfair decisions.\nB: That requires courage.",
     funFact:"異議を唱える is formal and carries weight. In court, 異議あり (Objection!) is the dramatic phrase lawyers use. In meetings, いぎをとなえる means formally disagreeing. Japanese culture traditionally values harmony (和 wa) over confrontation, making いぎをとなえる a brave act."},

    {type:"teach", trg:"ゆるす", src:"to permit / to forgive / to allow", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 許す. ゆるしてください = please forgive me.\nHas both permission and forgiveness meanings.",
     example:"A: おくれてすみません。ゆるしてください。\nB: だいじょうぶですよ。きにしないでください。",
     exampleSrc:"A: I am sorry for being late. Please forgive me.\nB: It is fine. Please do not worry about it.",
     funFact:"許す carries dual meaning: to permit and to forgive. This overlap reveals a cultural connection between permission and mercy. The kanji 許 was originally a legal term for formal permission. In modern Japanese, ゆるせない (unforgivable) is a strong expression of moral outrage, often heard in news commentary about scandals."},

    {type:"fb", s:"しけんちゅうにじしょをつかっては{1}。\n(You must not use a dictionary during the exam.)", a:"いけません", opts:["いけません","ください","いいです","だめです"], sSrc:"You must not use a dictionary during the exam.",
     hint:"The standard prohibition form: て-form + は + the word meaning 'it will not do.'"},

    {type:"mc", q:"させていただきます is:", opts:["A very humble way to say 'I will do'","A command to do something","A refusal to do something","A casual suggestion"], ans:"A very humble way to say 'I will do'",
     hint:"This h... form literally means 'I will receive the favor of being allowed to do.'"},

    {type:"teach", trg:"ふとう", src:"unfair / unjust / improper", pos:"adj", gender:null,
     note:"Kanji: 不当. ふとうなあつかい = unfair treatment.\nふとうかかく = unfair price. な-adjective.",
     example:"A: ふとうなろうどうじょうけんにたいしてこうぎしました。\nB: ろうどうしゃのけんりはまもられるべきです。",
     exampleSrc:"A: I protested against unfair working conditions.\nB: Workers' rights should be protected.",
     funFact:"不当 uses 不 (not) and 当 (appropriate). Japanese labor law protects against ふとうかいこ (unfair dismissal) and ふとうろうどうこうい (unfair labor practices). The word appears frequently in legal and news contexts. Understanding ふとう is important for grasping Japanese discussions about justice and fairness."},

    {type:"match", pairs:[{trg:"きんし",src:"prohibition"},{trg:"きょか",src:"permission"},{trg:"めいれい",src:"order/command"},{trg:"いぎ",src:"objection"}]},

    {type:"fb", s:"じょうしの{1}をもらってからしゅっちょうのてはいをしてください。\n(Please arrange the trip after getting your boss's approval.)", a:"きょか", opts:["きょか","きんし","めいれい","いぎ"], sSrc:"Please arrange the trip after getting your boss's approval.",
     hint:"The noun meaning permission or approval, needed before taking action."},

    {type:"mc", q:"なさい is best described as:", opts:["A gentle command (softer than imperative)","A polite request","An extremely rude order","A question form"], ans:"A gentle command (softer than imperative)",
     hint:"This form is used by parents to children and teachers to students. Commanding but not harsh."}
  ]
};
export default BATCH5_L_2;
