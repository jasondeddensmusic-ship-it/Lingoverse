// Unit 24 Batch 2 Lesson 4: 論理的(ろんりてき)なつながり (Logical Linking)
const BATCH2_L_4 = {
  id:"jav2_u24l_b2_4", title:"論理的(ろんりてき)なつながり", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"論理的(ろんりてき)なつながり",
     desc:"Build complex logical chains using condition, concession, and emphasis connectors. Patterns like かぎり (as long as), どころか (far from), and ないかぎり (unless) let you construct sophisticated arguments essential for formal writing and JLPT N2.",
     goals:["Use かぎり for conditional limits","Use どころか for emphatic contrast","Use たとえ...ても for hypothetical concession"]},

    {type:"teach", trg:"〜かぎり", src:"as long as ~ / to the extent that ~", pos:"part", gender:null,
     note:"Sets a condition that, while true, guarantees a result.\nできるかぎり = as much as possible.",
     example:"A: 生(い)きているかぎり、夢(ゆめ)をあきらめません。\nB: すばらしい覚悟(かくご)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: As long as I am alive, I will not give up on my dreams.\nB: That is a wonderful resolve.\nA: When was it?\nB: It was last summer.",
     funFact:"かぎり (限り) means 'limit.' As a connector, it sets the boundary condition: within this limit, X holds true. できるかぎり (to the extent possible) is one of the most useful phrases in polite Japanese, showing maximum effort within realistic limits. 知(し)るかぎり (as far as I know) hedges a claim gracefully."},

    {type:"teach", trg:"〜ないかぎり", src:"unless ~ / as long as ~ does not happen", pos:"part", gender:null,
     note:"Negative condition. The result holds unless the stated condition occurs.\n特別(とくべつ)な事情(じじょう)がないかぎり = unless special circumstances arise.",
     example:"A: 問題(もんだい)がないかぎり、計画(けいかく)どおり進(すす)めます。\nB: わかりました。何(なに)かあれば連絡(れんらく)します。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Unless there are problems, we will proceed as planned.\nB: Understood. I will contact you if anything comes up.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ないかぎり is the negative mirror of かぎり. While かぎり says 'as long as X is true,' ないかぎり says 'as long as X does NOT happen.' It often appears in business and legal contexts where default plans need exception clauses. The pattern is precise and formal, perfect for setting clear expectations."},

    {type:"teach", trg:"〜どころか", src:"far from ~ / let alone ~ / not only not ~", pos:"part", gender:null,
     note:"Emphatic negation: reality is the opposite of what was expected.\n安(やす)いどころか高(たか)い = far from cheap, it is expensive.",
     example:"A: 簡単(かんたん)どころか、ものすごく難(むずか)しかったです。\nB: よく頑張(がんば)りましたね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Far from easy, it was extremely difficult.\nB: You really worked hard.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"どころか uses ところ (place) + か (question particle). Literally 'is it even the place/level of X?' The rhetorical question emphasizes how far reality is from expectation. It often sets up an escalation: A どころか B (not only not A, but actually B, which is even further). This pattern adds dramatic emphasis to arguments."},

    {type:"mc", q:"生(い)きているかぎり、あきらめません means:", opts:["As long as I am alive, I will not give up","If I give up, I will die","I gave up because I am alive","Being alive means giving up"], ans:"As long as I am alive, I will not give up",
     hint:"かぎり sets a condition that guarantees the stated result continues."},

    {type:"teach", trg:"たとえ〜ても", src:"even if ~ / even though ~", pos:"part", gender:null,
     note:"Hypothetical concession. The result does not change regardless.\nたとえ雨(あめ)が降(ふ)っても = even if it rains.",
     example:"A: たとえ失敗(しっぱい)しても、また挑戦(ちょうせん)します。\nB: その意気(いき)ですよ！\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Even if I fail, I will challenge it again.\nB: That is the spirit!\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"たとえ comes from たとえる (to suppose/compare). Combined with ても (even if), it creates a strong hypothetical concession: 'suppose X happens, even so, Y remains unchanged.' This pattern shows determination and resilience. In speeches and motivational contexts, たとえ...ても is powerful for expressing unwavering commitment."},

    {type:"teach", trg:"失敗(しっぱい)", src:"failure / mistake", pos:"noun", gender:null,
     note:"失敗(しっぱい)する = to fail.\nOpposite: 成功(せいこう) (success).",
     example:"A: 失敗(しっぱい)は成功(せいこう)のもとです。\nB: 日本(にほん)のことわざですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Failure is the foundation of success.\nB: That is a Japanese proverb.\nA: How long did it take?\nB: About two hours.",
     funFact:"失敗 uses 失(しっ) (lose) and 敗(ぱい) (defeat). The famous proverb 失敗(しっぱい)は成功(せいこう)のもと (failure is the mother of success) encourages learning from mistakes. In Japanese education, 失敗(しっぱい) is often reframed as a learning opportunity. Thomas Edison is frequently quoted in Japanese schools for his approach to 失敗(しっぱい)."},

    {type:"teach", trg:"成功(せいこう)", src:"success", pos:"noun", gender:null,
     note:"成功(せいこう)する = to succeed.\n大成功(だいせいこう) = great success.",
     example:"A: プロジェクトが大成功(だいせいこう)しました。\nB: みんなの力(ちから)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: The project was a great success.\nB: It is everyone's combined effort.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"成功 uses 成(せい) (become/achieve) and 功(こう) (merit/achievement). Japanese views on success emphasize collective effort over individual brilliance. The phrase 成功(せいこう)の秘訣(ひけつ) (secret to success) is a popular topic in self-help books. Japanese entrepreneurs are increasingly celebrated, though the culture still values modesty about personal 成功(せいこう)."},

    {type:"fb", s:"簡単(かんたん){1}、ものすごく難(むずか)しかったです。\n(Far from easy, it was extremely difficult.)", a:"どころか", opts:["どころか","かぎり","だから","なのに"], sSrc:"Far from easy, it was extremely difficult.",
     hint:"The emphatic connector showing reality is the opposite of expectation."},

    {type:"teach", trg:"〜にしても", src:"even considering ~ / even if we accept ~", pos:"part", gender:null,
     note:"Concedes a point but maintains the main argument.\nにしても高(たか)い = even so, it is expensive.",
     example:"A: 忙(いそが)しいにしても、連絡(れんらく)くらいはできるでしょう。\nB: たしかにそうですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Even considering you are busy, you could at least contact me.\nB: That is true.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"にしても concedes the listener's point while pushing back. It is softer than どころか but firmer than けど. The pattern acknowledges the other side's perspective before asserting your own. This balanced structure is very Japanese: it respects the counterargument before disagreeing. にしろ is a more casual variant."},

    {type:"teach", trg:"〜にもかかわらず", src:"despite / in spite of (formal)", pos:"conj", gender:null,
     note:"Formal written concession. Stronger than のに.\n雨(あめ)にもかかわらず = despite the rain.",
     example:"A: 十分(じゅうぶん)な準備(じゅんび)にもかかわらず、失敗(しっぱい)してしまいました。\nB: 原因(げんいん)を分析(ぶんせき)しましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Despite thorough preparation, I ended up failing.\nB: Let us analyze the cause.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"にもかかわらず is the heavyweight concessive connector. It appears in formal writing, legal documents, and news reports. In everyday speech, のに or けど serve the same function more naturally. Using にもかかわらず in casual conversation sounds overly formal, but in essays and presentations, it demonstrates linguistic sophistication."},

    {type:"teach", trg:"分析(ぶんせき)", src:"analysis", pos:"noun", gender:null,
     note:"分析(ぶんせき)する = to analyze.\nデータ分析(ぶんせき) = data analysis.",
     example:"A: 問題(もんだい)を分析(ぶんせき)して対策(たいさく)を考(かんが)えましょう。\nB: まず原因(げんいん)を特定(とくてい)しましょう。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Let us analyze the problem and think of countermeasures.\nB: First let us identify the cause.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"分析 uses 分(ぶん) (divide/part) and 析(せき) (split/analyze). Analysis literally means 'splitting apart.' The kanji 析 originally depicted splitting wood with an ax. In Japanese academic and business culture, 分析(ぶんせき) is highly valued. Decisions should be based on thorough 分析(ぶんせき) rather than intuition alone."},

    {type:"mc", q:"ないかぎり means:", opts:["as long as (positive condition)","unless (negative condition)","because of","in spite of"], ans:"unless (negative condition)",
     hint:"This pattern sets a n... boundary: the plan holds as long as the stated thing does NOT happen."},

    {type:"fb", s:"たとえ失敗(しっぱい){1}、また挑戦(ちょうせん)します。\n(Even if I fail, I will challenge it again.)", a:"しても", opts:["しても","するから","するのに","すると"], sSrc:"Even if I fail, I will challenge it again.",
     hint:"The concessive ending that pairs with たとえ to mean 'even if that happens.'"},

    {type:"match", pairs:[{trg:"かぎり",src:"as long as"},{trg:"ないかぎり",src:"unless"},{trg:"どころか",src:"far from / let alone"},{trg:"たとえ...ても",src:"even if"}]},

    {type:"teach", trg:"特定(とくてい)", src:"identification / specification / specific", pos:"noun", gender:null,
     note:"特定(とくてい)する = to identify / to pinpoint.\n特定(とくてい)の人(ひと) = a specific person.",
     example:"A: 原因(げんいん)を特定(とくてい)することが先決(せんけつ)です。\nB: データを収集(しゅうしゅう)しましょう。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Identifying the cause is the top priority.\nB: Let us collect data.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"特定 combines 特(とく) (special) and 定(てい) (fix/determine). To 'fix on something special' means to single it out from a group. In forensics, police, and research, 特定(とくてい)する is the key action: pinpointing the specific cause, person, or factor. 個人(こじん)の特定(とくてい) (personal identification) relates to privacy and data protection discussions."},

    {type:"fb", s:"問題(もんだい)がない{1}、計画(けいかく)どおり進(すす)めます。\n(Unless there are problems, we will proceed as planned.)", a:"かぎり", opts:["かぎり","どころか","にしても","たとえ"], sSrc:"Unless there are problems, we will proceed as planned.",
     hint:"The pattern setting a negative conditional boundary, meaning 'as long as X does not happen.'"},

    {type:"match", pairs:[{trg:"失敗(しっぱい)",src:"failure"},{trg:"成功(せいこう)",src:"success"},{trg:"分析(ぶんせき)",src:"analysis"},{trg:"特定(とくてい)",src:"identification"}]},

    {type:"mc", q:"にしても expresses:", opts:["Complete agreement","Concession before maintaining your main point","Strong disagreement","Uncertainty about the facts"], ans:"Concession before maintaining your main point",
     hint:"This pattern acknowledges the other side but still pushes back with your argument."},
  ]
};
export default BATCH2_L_4;
