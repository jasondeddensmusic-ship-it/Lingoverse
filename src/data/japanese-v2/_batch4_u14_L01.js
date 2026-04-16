// Batch 4 — Unit 14 Lesson 1: Expressing Opinions & Reasons
const BATCH4_L_1 = {
  id:"jav2_u14l_b4_1", title:"りゆうとせつめい", icon:"💡", xp:15, board:true,
  steps:[
    {type:"intro", title:"りゆうとせつめい",
     desc:"Learn advanced expressions for explaining reasons and giving opinions. These patterns are essential for natural conversation beyond beginner level.",
     goals:["Give reasons with kara and node","Express opinions with various strengths","Support arguments with evidence"]},

    {type:"teach", trg:"りゆう", src:"reason / cause", pos:"noun", gender:null,
     note:"Kanji: 理由. Logic + reason. The formal word for 'why.'",
     example:"りゆうをおしえてください。",
     exampleSrc:"Please tell me the reason.",
     funFact:"Riyuu is the formal noun for reason. In conversation, 'nande?' or 'doushite?' asks why. But in writing or formal speech, 理由 is preferred. Job interviews always ask 志望理由 (shibou riyuu, reason for applying)."},

    {type:"teach", trg:"いみ", src:"meaning / sense", pos:"noun", gender:null,
     note:"Kanji: 意味. Intention + taste. What something signifies.",
     example:"このことばのいみはなんですか？",
     exampleSrc:"What is the meaning of this word?",
     funFact:"意味 combines 意 (intention/will) with 味 (taste/flavor). Meaning is the 'taste' of intention. Japanese learners ask 'imi wa?' constantly. The word extends beyond language: 人生の意味 (jinsei no imi, the meaning of life)."},

    {type:"teach", trg:"せつめいする", src:"to explain", pos:"verb", gender:null,
     note:"Kanji: 説明する. Theory + bright. Making something clear.",
     example:"もういちどせつめいしてください。",
     exampleSrc:"Please explain once more.",
     funFact:"Setsumei literally means 'making the theory bright/clear.' In Japanese education, the ability to explain clearly (わかりやすく説明する) is highly valued. Teachers are evaluated on setsumei skill."},

    {type:"teach", trg:"たとえば", src:"for example", pos:"adv", gender:null,
     note:"Kanji: 例えば. Compare + if. Introduces examples in arguments.",
     example:"にほんりょうりはおいしいです。たとえば、すしやラーメンがあります。",
     exampleSrc:"Japanese food is delicious. For example, there is sushi and ramen.",
     funFact:"Tatoeba is essential for structured arguments. Japanese essay writing follows the pattern: 主張 (claim), 理由 (reason), 例 (example using tatoeba), 結論 (conclusion). This structure is taught from middle school."},

    {type:"teach", trg:"かならず", src:"certainly / without fail", pos:"adv", gender:null,
     note:"Kanji: 必ず. Absolute certainty. Stronger than きっと.",
     example:"かならずやくそくをまもります。",
     exampleSrc:"I will definitely keep my promise.",
     funFact:"Kanarazu is stronger than kitto (probably will) and zettai (absolutely). It implies a solemn guarantee. The kanji 必 shows a stake in the heart (heart + pierce), suggesting absolute commitment."},

    {type:"teach", trg:"たぶん", src:"probably / maybe", pos:"adv", gender:null,
     note:"Kanji: 多分. Many + parts. Suggests likelihood but not certainty.",
     example:"たぶんあめがふるでしょう。",
     exampleSrc:"It will probably rain.",
     funFact:"Tabun indicates about 70-80% certainty in Japanese. The certainty scale: tabun (probably) > osoraku (likely) > kitto (surely) > kanarazu (certainly). Japanese speakers are careful about expressing degrees of certainty."},

    {type:"teach", trg:"ぜったい", src:"absolutely / definitely", pos:"adv", gender:null,
     note:"Kanji: 絶対. Cut + against. So certain that no opposition exists.",
     example:"ぜったいにだいじょうぶです。",
     exampleSrc:"It is absolutely fine.",
     funFact:"Zettai (絶対) is one of the strongest assertions in Japanese. 'Zettai ni' is how teenagers emphasize their opinions. 絶対に許さない (zettai ni yurusanai, I will absolutely never forgive) is a famous anime catchphrase."},

    {type:"teach", trg:"さんせいする", src:"to agree / approve", pos:"verb", gender:null,
     note:"Kanji: 賛成する. Praise + achieve. Supporting someone's idea.",
     example:"そのいけんにさんせいです。",
     exampleSrc:"I agree with that opinion.",
     funFact:"In Japanese meetings, agreement is often shown by nodding and saying 'sou desu ne' rather than explicit 'sansei.' The formal vote of sansei/hantai (agree/disagree) is reserved for official decisions."},

    {type:"teach", trg:"はんたいする", src:"to oppose / disagree", pos:"verb", gender:null,
     note:"Kanji: 反対する. Reverse + against. The opposite of さんせい.",
     example:"そのけいかくにはんたいです。",
     exampleSrc:"I oppose that plan.",
     funFact:"Direct opposition (hantai) is much less common in Japanese communication than in Western cultures. Japanese prefer indirect disagreement: 'That is a bit difficult...' or 'I see your point, but...' to soften the opposition."},

    {type:"teach", trg:"けっきょく", src:"in the end / after all", pos:"adv", gender:null,
     note:"Kanji: 結局. Tie + situation. The final conclusion.",
     example:"けっきょくいかないことにしました。",
     exampleSrc:"In the end, I decided not to go.",
     funFact:"Kekkyoku is used when the outcome differs from expectations or after a long deliberation. It signals 'after everything that happened, the result is...' It is common in storytelling and daily conversation."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"adv", gender:null,
     note:"Summarizes or rephrases what was just said.",
     example:"えいごとフランスごができます。つまり、バイリンガルです。",
     exampleSrc:"I can speak English and French. In other words, I am bilingual.",
     funFact:"Tsumari (from 詰まる, to be packed/concentrated) condenses the previous statement into its essence. It is essential for academic writing and presentations. Overusing it in casual speech sounds overly formal."},

    {type:"teach", trg:"もちろん", src:"of course / naturally", pos:"adv", gender:null,
     note:"Kanji: 勿論. No + argument. So obvious it needs no debate.",
     example:"もちろんさんかします。",
     exampleSrc:"Of course I will participate.",
     funFact:"Mochiron (勿論, no argument needed) is stronger than English 'of course.' It implies the answer was so obvious the question barely needed asking. Using it too much can sound dismissive, so it is best used for genuine certainty."},

    {type:"teach", trg:"やはり", src:"as expected / after all", pos:"adv", gender:null,
     note:"Also やっぱり (casual). Confirms something you already suspected.",
     example:"やはりにほんごはむずかしいですね。",
     exampleSrc:"Japanese is difficult after all, isn't it?",
     funFact:"Yahari (formal) and yappari (casual) are among the most-used Japanese discourse markers. They confirm a suspicion or return to an original thought. 'Yappari ramen ni suru' (I'll go with ramen after all) is a classic ordering phrase."},

    {type:"teach", trg:"じつは", src:"actually / to tell the truth", pos:"adv", gender:null,
     note:"Kanji: 実は. Truth + topic marker. Reveals hidden information.",
     example:"じつは、もうけっこんしています。",
     exampleSrc:"Actually, I am already married.",
     funFact:"Jitsu wa is the classic conversation opener for revealing secrets or correcting misunderstandings. It creates dramatic tension. In manga and anime, 'jitsu wa...' always precedes a major revelation or plot twist."},

    {type:"mc", q:"What does けっきょく mean?",
     opts:["in the end / after all","for example","actually","of course"], ans:"in the end / after all",
     hint:"Used when telling the final result a... events or deliberation."},

    {type:"fb", s:"{1}にほんごはむずかしいですね。", a:"やはり",
     sSrc:"Japanese is difficult after all, isn't it?",
     opts:["やはり","じつは","もちろん","つまり"],
     hint:"Confirms something you already suspected or felt was true."},

    {type:"match", pairs:[
      {trg:"さんせい", src:"agree"},
      {trg:"はんたい", src:"oppose"},
      {trg:"たぶん", src:"probably"},
      {trg:"ぜったい", src:"absolutely"}
    ]},

    {type:"mc", q:"じつは is used to:",
     opts:["reveal hidden information","give an example","summarize","disagree"], ans:"reveal hidden information",
     hint:"A conversation opener that says 'the truth is...'"},

    {type:"fb", s:"{1}をおしえてください。", a:"りゆう",
     sSrc:"Please tell me the reason.",
     opts:["りゆう","いみ","せつめい","たとえば"],
     hint:"The formal word for the 'why' behind something."},

    {type:"mc", q:"つまり means:",
     opts:["in other words","for example","however","because"], ans:"in other words",
     hint:"Rephrases or summarizes what was just said more concisely."},

    {type:"mc", q:"Which adverb expresses the highest certainty?",
     opts:["かならず","たぶん","もしかして","たいてい"], ans:"かならず",
     hint:"An absolute guarantee with no room for doubt."}
  ]
};
export default BATCH4_L_1;
