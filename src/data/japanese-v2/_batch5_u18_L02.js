// Unit 18 Batch 5 Lesson 2: 許可(きょか)と命令(めいれい) (Permission, Prohibition & Commands)
const BATCH5_L_2 = {
  id:"jav2_u18l_b5_2", title:"許可(きょか)と命令(めいれい)", icon:"🚫", xp:15, board:true,
  steps:[
    {type:"intro", title:"許可(きょか)と命令(めいれい)",
     desc:"Causative forms are essential for granting permission and giving orders. Learn how to say 'let me do it,' 'do not make me,' and navigate the nuances of Japanese commands. From polite requests to firm prohibitions, these patterns govern authority and freedom in Japanese communication.",
     goals:["Use causative for granting permission","Express prohibition with causative-negative","Give commands appropriately using different registers"]},

    {type:"teach", trg:"させてください", src:"please let me do / please allow me", pos:"verb", gender:null,
     note:"Causative て-form + ください. The polite way to ask permission.\nやらせてください = please let me do it.",
     example:"A: このプロジェクトをやらせてください。\nB: わかりました。期待(きたい)していますよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please let me work on this project.\nB: Understood. I am looking forward to it.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"させてください is the standard permission request in formal Japanese. Job applicants say やらせてください (please let me do it) to show eagerness. In dramas, characters shout 行(い)かせてください (let me go!) at climactic moments. The pattern causative-て + ください is among the most useful in Japanese."},

    {type:"teach", trg:"させていただく", src:"to be allowed to do (humble)", pos:"verb", gender:null,
     note:"Humble form of させてもらう. Extremely polite.\n発表(はっぴょう)させていただきます = I will humbly present.",
     example:"A: 自己紹介(じこしょうかい)をさせていただきます。\nB: どうぞよろしくお願(ねが)いします。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Allow me to introduce myself.\nB: Pleased to meet you.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"させていただく has become one of the most overused expressions in modern Japanese. Originally humble and elegant, it now appears in situations where simpler forms would suffice. Language purists criticize its overuse, calling it させていただく症候群(しょうこうぐん) (sasete-itadaku syndrome). Despite this, it remains essential in business and formal settings."},

    {type:"teach", trg:"禁止(きんし)", src:"prohibition / ban", pos:"noun", gender:null,
     note:"Kanji: 禁止(きんし). 禁止(きんし)する = to prohibit.\n永遠(えいえん)禁止(きんし) = permanent ban. Used on signs everywhere.",
     example:"A: この公園(こうえん)では喫煙(きつえん)が禁止(きんし)されています。\nB: 禁煙(きんえん)区域(くいき)が増(ふ)えていますね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Smoking is prohibited in this park.\nB: No-smoking areas are increasing.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"禁止(きんし) signs are ubiquitous in Japan. 撮影(さつえい)禁止(きんし) (no photography), 駐車(ちゅうしゃ)禁止(きんし) (no parking), 立入(たちいり)禁止(きんし) (no entry). The kanji 禁 originally depicted a forest (林) with a sacred altar (示) below, meaning a forest taboo. Japanese public spaces have extensive rules, and 禁止(きんし) signs help maintain social order."},

    {type:"teach", trg:"命令(めいれい)", src:"order / command", pos:"noun", gender:null,
     note:"Kanji: 命令(めいれい). 命令(めいれい)する = to order/command.\n命令形(めいれいけい) = imperative form (grammar term).",
     example:"A: 上司(じょうし)からの命令(めいれい)には従(したが)わなければなりません。\nB: でも、不当(ふとう)な命令(めいれい)には異議(いぎ)を唱(とな)えるべきです。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: You must obey orders from your superiors.\nB: But you should voice objections to unfair orders.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"命令(めいれい) combines 命(めい) (life/fate) and 令(れい) (order/decree). The word carries military and hierarchical weight. In everyday Japanese, 命令(めいれい) sounds strong and formal. Parents 命令(めいれい)する to children, but friends never 命令(めいれい)する to each other. The imperative form (命令形(めいれいけい)) exists in grammar but is rarely used in polite conversation."},

    {type:"mc", q:"やらせてください means:", opts:["Please let me do it","Please do it for me","I will make you do it","Do not do it"], ans:"Please let me do it",
     hint:"Causative て-form + ください is a polite request for permission to perform an action."},

    {type:"teach", trg:"〜てはいけない", src:"must not / it is forbidden to", pos:"part", gender:null,
     note:"て-form + はいけない = prohibition. Stronger than てはだめ.\nここに入(はい)ってはいけません = you must not enter here.",
     example:"A: 試験中(しけんちゅう)に辞書(じしょ)を使(つか)ってはいけません。\nB: わかりました。気(き)をつけます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: You must not use a dictionary during the exam.\nB: Understood. I will be careful.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"てはいけない is the standard prohibition form in rules and regulations. Teachers use it with students, parents with children. The いけない literally means 'it will not go' or 'it will not do.' There is a scale of strength: てはだめ (cannot, colloquial) to てはいけない (must not, standard) to てはならない (must not, formal/legal)."},

    {type:"teach", trg:"許可(きょか)", src:"permission / approval", pos:"noun", gender:null,
     note:"Kanji: 許可(きょか). 許可(きょか)をもらう = to receive permission.\n許可(きょか)なく = without permission.",
     example:"A: 上司(じょうし)の許可(きょか)をもらってから出張(しゅっちょう)の手配(てはい)をしてください。\nB: はい、まず許可(きょか)をもらいます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please arrange the business trip after getting your boss's approval.\nB: Yes, I will get permission first.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"許可(きょか) uses 許(きょ) (permit) and 可(か) (possible/approve). Japanese organizations are highly permission-oriented. Before taking action, getting 許可(きょか) from superiors is expected. The 稟議(りんぎ) system involves circulating a proposal document for multiple stamps of approval. This consensus-building process can be slow but ensures collective agreement."},

    {type:"teach", trg:"従(したが)う", src:"to obey / to follow / to comply", pos:"verb", gender:null,
     note:"Group 1 verb. ルールに従(したが)う = to follow rules.\nKanji: 従(したが)う. 命令(めいれい)に従(したが)う = obey orders.",
     example:"A: 交通(こうつう)ルールに従(したが)いましょう。\nB: 安全(あんぜん)が一番(いちばん)大事(だいじ)ですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Let us follow traffic rules.\nB: Safety is the most important thing.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"従(したが)う contains the kanji 従, depicting a person (人) following a path (从). Japanese society values 従(したが)う (obedience/compliance) highly. Following rules, respecting hierarchy, and conforming to group norms are seen as social virtues. The connector したがって (therefore) comes from this same verb."},

    {type:"teach", trg:"〜なさい", src:"do ~ (gentle command)", pos:"part", gender:null,
     note:"Masu-stem + なさい. Softer than imperative but still a command.\n食(た)べなさい = eat (parent to child). 勉強(べんきょう)しなさい = study.",
     example:"A: 早(はや)く宿題(しゅくだい)をしなさい。\nB: はーい、今(いま)やります。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Do your homework quickly.\nB: Okay, I will do it now.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"なさい is the command form of なさる (honorific する). Ironically, this honorific origin means it sounds gentler than the plain imperative (しろ). Mothers across Japan say 勉強(べんきょう)しなさい (study!) to their children. It is commanding but caring. School teachers also use it. Between adults, it would sound condescending."},

    {type:"tip", title:"Levels of Command in Japanese",
     text:"From softest to strongest:\n\nしてください = please do (polite request)\nしてくださいませんか = could you please (very polite)\nしなさい = do it (gentle command, parent/teacher)\nしなければならない = must do (obligation)\nしろ / せよ = do it! (plain imperative, rough)\n\nFrom softest to strongest prohibition:\nしないでください = please do not\nしてはだめ = you cannot / should not (casual)\nしてはいけない = must not (standard rule)\nしてはならない = must not (formal/legal)\nするな = do not! (plain imperative, rough)",
     deepDive:{title:"The Imperative in Real Life",
      text:"The plain imperative (しろ, いけ, 食(た)べろ) is rarely used in polite company. It appears in:\n\nSports: 走(はし)れ！(Run!) 頑張(がんば)れ！(Do your best!)\nEmergencies: 逃(に)げろ！(Flee!) 止(と)まれ！(Stop!)\nMilitary/police: 動(うご)くな！(Do not move!)\nManga/anime: Characters use it freely for dramatic effect.\n\nIn real conversation, using the imperative to a stranger or superior would be extremely rude. Even between friends, it is only used jokingly. Japanese achieves commands through softer forms like てください, なさい, or simply stating facts (しなければならない = it must be done)."}},

    {type:"teach", trg:"異議(いぎ)を唱(とな)える", src:"to voice an objection / to raise a protest", pos:"verb", gender:null,
     note:"異議(いぎ) (objection) + を + 唱(とな)える (to recite/advocate).\nKanji: 異議(いぎ)を唱(とな)える. Formal expression.",
     example:"A: 不当(ふとう)な決定(けってい)には異議(いぎ)を唱(とな)えるべきです。\nB: 勇気(ゆうき)が必要(ひつよう)ですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: You should voice objections to unfair decisions.\nB: That requires courage.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"異議(いぎ)を唱(とな)える is formal and carries weight. In court, 異議(いぎ)あり (Objection!) is the dramatic phrase lawyers use. In meetings, 異議(いぎ)を唱(とな)える means formally disagreeing. Japanese culture traditionally values harmony (和(わ)) over confrontation, making 異議(いぎ)を唱(とな)える a brave act."},

    {type:"teach", trg:"許(ゆる)す", src:"to permit / to forgive / to allow", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 許(ゆる)す. 許(ゆる)してください = please forgive me.\nHas both permission and forgiveness meanings.",
     example:"A: 遅(おく)れてすみません。許(ゆる)してください。\nB: 大丈夫(だいじょうぶ)ですよ。気(き)にしないでください。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I am sorry for being late. Please forgive me.\nB: It is fine. Please do not worry about it.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"許(ゆる)す carries dual meaning: to permit and to forgive. This overlap reveals a cultural connection between permission and mercy. The kanji 許 was originally a legal term for formal permission. In modern Japanese, 許(ゆる)せない (unforgivable) is a strong expression of moral outrage, often heard in news commentary about scandals."},

    {type:"fb", s:"試験中(しけんちゅう)に辞書(じしょ)を使(つか)っては{1}。\n(You must not use a dictionary during the exam.)", a:"いけません", opts:["いけません","ください","いいです","だめです"], sSrc:"You must not use a dictionary during the exam.",
     hint:"The standard prohibition form: て-form + は + the word meaning 'it will not do.'"},

    {type:"mc", q:"させていただきます is:", opts:["A very humble way to say 'I will do'","A command to do something","A refusal to do something","A casual suggestion"], ans:"A very humble way to say 'I will do'",
     hint:"This h... form literally means 'I will receive the favor of being allowed to do.'"},

    {type:"teach", trg:"不当(ふとう)", src:"unfair / unjust / improper", pos:"adj", gender:null,
     note:"Kanji: 不当(ふとう). 不当(ふとう)な扱(あつか)い = unfair treatment.\n不当(ふとう)価格(かかく) = unfair price. な-adjective.",
     example:"A: 不当(ふとう)な労働(ろうどう)条件(じょうけん)に対(たい)して抗議(こうぎ)しました。\nB: 労働者(ろうどうしゃ)の権利(けんり)は守(まも)られるべきです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I protested against unfair working conditions.\nB: Workers' rights should be protected.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"不当(ふとう) uses 不(ふ) (not) and 当(とう) (appropriate). Japanese labor law protects against 不当(ふとう)解雇(かいこ) (unfair dismissal) and 不当(ふとう)労働(ろうどう)行為(こうい) (unfair labor practices). The word appears frequently in legal and news contexts. Understanding 不当(ふとう) is important for grasping Japanese discussions about justice and fairness."},

    {type:"match", pairs:[{trg:"禁止(きんし)",src:"prohibition"},{trg:"許可(きょか)",src:"permission"},{trg:"命令(めいれい)",src:"order/command"},{trg:"異議(いぎ)",src:"objection"}]},

    {type:"fb", s:"上司(じょうし)の{1}をもらってから出張(しゅっちょう)の手配(てはい)をしてください。\n(Please arrange the trip after getting your boss's approval.)", a:"許可(きょか)", opts:["許可(きょか)","禁止(きんし)","命令(めいれい)","異議(いぎ)"], sSrc:"Please arrange the trip after getting your boss's approval.",
     hint:"The noun meaning permission or approval, needed before taking action."},

    {type:"mc", q:"なさい is best described as:", opts:["A gentle command (softer than imperative)","A polite request","An extremely rude order","A question form"], ans:"A gentle command (softer than imperative)",
     hint:"This form is used by parents to children and teachers to students. Commanding but not harsh."}
  ]
};
export default BATCH5_L_2;
