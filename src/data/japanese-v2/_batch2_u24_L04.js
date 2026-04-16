// Unit 24 Batch 2 Lesson 4: ろんりてきなつながり (Logical Linking)
const BATCH2_L_4 = {
  id:"jav2_u24l_b2_4", title:"ろんりてきなつながり", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろんりてきなつながり",
     desc:"Build complex logical chains using condition, concession, and emphasis connectors. Patterns like かぎり (as long as), どころか (far from), and ないかぎり (unless) let you construct sophisticated arguments essential for formal writing and JLPT N2.",
     goals:["Use かぎり for conditional limits","Use どころか for emphatic contrast","Use たとえ...ても for hypothetical concession"]},

    {type:"teach", trg:"〜かぎり", src:"as long as ~ / to the extent that ~", pos:"part", gender:null,
     note:"Sets a condition that, while true, guarantees a result.\nできるかぎり = as much as possible.",
     example:"A: いきているかぎり、ゆめをあきらめません。\nB: すばらしいかくごですね。",
     exampleSrc:"A: As long as I am alive, I will not give up on my dreams.\nB: That is a wonderful resolve.",
     funFact:"かぎり (限り) means 'limit.' As a connector, it sets the boundary condition: within this limit, X holds true. できるかぎり (to the extent possible) is one of the most useful phrases in polite Japanese, showing maximum effort within realistic limits. しるかぎり (as far as I know) hedges a claim gracefully."},

    {type:"teach", trg:"〜ないかぎり", src:"unless ~ / as long as ~ does not happen", pos:"part", gender:null,
     note:"Negative condition. The result holds unless the stated condition occurs.\nとくべつなじじょうがないかぎり = unless special circumstances arise.",
     example:"A: もんだいがないかぎり、けいかくどおりすすめます。\nB: わかりました。なにかあればれんらくします。",
     exampleSrc:"A: Unless there are problems, we will proceed as planned.\nB: Understood. I will contact you if anything comes up.",
     funFact:"ないかぎり is the negative mirror of かぎり. While かぎり says 'as long as X is true,' ないかぎり says 'as long as X does NOT happen.' It often appears in business and legal contexts where default plans need exception clauses. The pattern is precise and formal, perfect for setting clear expectations."},

    {type:"teach", trg:"〜どころか", src:"far from ~ / let alone ~ / not only not ~", pos:"part", gender:null,
     note:"Emphatic negation: reality is the opposite of what was expected.\nやすいどころかたかい = far from cheap, it is expensive.",
     example:"A: かんたんどころか、ものすごくむずかしかったです。\nB: よくがんばりましたね。",
     exampleSrc:"A: Far from easy, it was extremely difficult.\nB: You really worked hard.",
     funFact:"どころか uses ところ (place) + か (question particle). Literally 'is it even the place/level of X?' The rhetorical question emphasizes how far reality is from expectation. It often sets up an escalation: A どころか B (not only not A, but actually B, which is even further). This pattern adds dramatic emphasis to arguments."},

    {type:"mc", q:"いきているかぎり、あきらめません means:", opts:["As long as I am alive, I will not give up","If I give up, I will die","I gave up because I am alive","Being alive means giving up"], ans:"As long as I am alive, I will not give up",
     hint:"かぎり sets a condition that guarantees the stated result continues."},

    {type:"teach", trg:"たとえ〜ても", src:"even if ~ / even though ~", pos:"part", gender:null,
     note:"Hypothetical concession. The result does not change regardless.\nたとえあめがふっても = even if it rains.",
     example:"A: たとえしっぱいしても、またちょうせんします。\nB: そのいきですよ！",
     exampleSrc:"A: Even if I fail, I will challenge it again.\nB: That is the spirit!",
     funFact:"たとえ comes from たとえる (to suppose/compare). Combined with ても (even if), it creates a strong hypothetical concession: 'suppose X happens, even so, Y remains unchanged.' This pattern shows determination and resilience. In speeches and motivational contexts, たとえ...ても is powerful for expressing unwavering commitment."},

    {type:"teach", trg:"しっぱい", src:"failure / mistake", pos:"noun", gender:null,
     note:"Kanji: 失敗. しっぱいする = to fail.\nOpposite: せいこう (success).",
     example:"A: しっぱいはせいこうのもとです。\nB: にほんのことわざですね。",
     exampleSrc:"A: Failure is the foundation of success.\nB: That is a Japanese proverb.",
     funFact:"失敗 uses 失 (lose) and 敗 (defeat). The famous proverb しっぱいはせいこうのもと (failure is the mother of success) encourages learning from mistakes. In Japanese education, しっぱい is often reframed as a learning opportunity. Thomas Edison is frequently quoted in Japanese schools for his approach to しっぱい."},

    {type:"teach", trg:"せいこう", src:"success", pos:"noun", gender:null,
     note:"Kanji: 成功. せいこうする = to succeed.\nだいせいこう = great success.",
     example:"A: プロジェクトがだいせいこうしました。\nB: みんなのちからですね。",
     exampleSrc:"A: The project was a great success.\nB: It is everyone's combined effort.",
     funFact:"成功 uses 成 (become/achieve) and 功 (merit/achievement). Japanese views on success emphasize collective effort over individual brilliance. The phrase せいこうのひけつ (secret to success) is a popular topic in self-help books. Japanese entrepreneurs are increasingly celebrated, though the culture still values modesty about personal せいこう."},

    {type:"fb", s:"かんたん{1}、ものすごくむずかしかったです。\n(Far from easy, it was extremely difficult.)", a:"どころか", opts:["どころか","かぎり","だから","なのに"], sSrc:"Far from easy, it was extremely difficult.",
     hint:"The emphatic connector showing reality is the opposite of expectation."},

    {type:"teach", trg:"〜にしても", src:"even considering ~ / even if we accept ~", pos:"part", gender:null,
     note:"Concedes a point but maintains the main argument.\nにしてもexpensive = even so, it is expensive.",
     example:"A: いそがしいにしても、れんらくくらいはできるでしょう。\nB: たしかにそうですね。",
     exampleSrc:"A: Even considering you are busy, you could at least contact me.\nB: That is true.",
     funFact:"にしても concedes the listener's point while pushing back. It is softer than どころか but firmer than けど. The pattern acknowledges the other side's perspective before asserting your own. This balanced structure is very Japanese: it respects the counterargument before disagreeing. にしろ is a more casual variant."},

    {type:"teach", trg:"〜にもかかわらず", src:"despite / in spite of (formal)", pos:"conj", gender:null,
     note:"Formal written concession. Stronger than のに.\nあめにもかかわらず = despite the rain.",
     example:"A: じゅうぶんなじゅんびにもかかわらず、しっぱいしてしまいました。\nB: げんいんをぶんせきしましょう。",
     exampleSrc:"A: Despite thorough preparation, I ended up failing.\nB: Let us analyze the cause.",
     funFact:"にもかかわらず is the heavyweight concessive connector. It appears in formal writing, legal documents, and news reports. In everyday speech, のに or けど serve the same function more naturally. Using にもかかわらず in casual conversation sounds overly formal, but in essays and presentations, it demonstrates linguistic sophistication."},

    {type:"teach", trg:"ぶんせき", src:"analysis", pos:"noun", gender:null,
     note:"Kanji: 分析. ぶんせきする = to analyze.\nデータぶんせき = data analysis.",
     example:"A: もんだいをぶんせきしてたいさくをかんがえましょう。\nB: まずげんいんをとくていしましょう。",
     exampleSrc:"A: Let us analyze the problem and think of countermeasures.\nB: First let us identify the cause.",
     funFact:"分析 uses 分 (divide/part) and 析 (split/analyze). Analysis literally means 'splitting apart.' The kanji 析 originally depicted splitting wood with an ax. In Japanese academic and business culture, ぶんせき is highly valued. Decisions should be based on thorough ぶんせき rather than intuition alone."},

    {type:"mc", q:"ないかぎり means:", opts:["as long as (positive condition)","unless (negative condition)","because of","in spite of"], ans:"unless (negative condition)",
     hint:"This pattern sets a n... boundary: the plan holds as long as the stated thing does NOT happen."},

    {type:"fb", s:"たとえしっぱい{1}、またちょうせんします。\n(Even if I fail, I will challenge it again.)", a:"しても", opts:["しても","するから","するのに","すると"], sSrc:"Even if I fail, I will challenge it again.",
     hint:"The concessive ending that pairs with たとえ to mean 'even if that happens.'"},

    {type:"match", pairs:[{trg:"かぎり",src:"as long as"},{trg:"ないかぎり",src:"unless"},{trg:"どころか",src:"far from / let alone"},{trg:"たとえ...ても",src:"even if"}]},

    {type:"teach", trg:"とくてい", src:"identification / specification / specific", pos:"noun", gender:null,
     note:"Kanji: 特定. とくていする = to identify / to pinpoint.\nとくていのひと = a specific person.",
     example:"A: げんいんをとくていすることがさきけつです。\nB: データをしゅうしゅうしましょう。",
     exampleSrc:"A: Identifying the cause is the top priority.\nB: Let us collect data.",
     funFact:"特定 combines 特 (special) and 定 (fix/determine). To 'fix on something special' means to single it out from a group. In forensics, police, and research, とくていする is the key action: pinpointing the specific cause, person, or factor. こじんのとくてい (personal identification) relates to privacy and data protection discussions."},

    {type:"fb", s:"もんだいがない{1}、けいかくどおりすすめます。\n(Unless there are problems, we will proceed as planned.)", a:"かぎり", opts:["かぎり","どころか","にしても","たとえ"], sSrc:"Unless there are problems, we will proceed as planned.",
     hint:"The pattern setting a negative conditional boundary, meaning 'as long as X does not happen.'"},

    {type:"match", pairs:[{trg:"しっぱい",src:"failure"},{trg:"せいこう",src:"success"},{trg:"ぶんせき",src:"analysis"},{trg:"とくてい",src:"identification"}]},

    {type:"mc", q:"にしても expresses:", opts:["Complete agreement","Concession before maintaining your main point","Strong disagreement","Uncertainty about the facts"], ans:"Concession before maintaining your main point",
     hint:"This pattern acknowledges the other side but still pushes back with your argument."},
  ]
};
export default BATCH2_L_4;
