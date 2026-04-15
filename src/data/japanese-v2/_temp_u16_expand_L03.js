// Unit 16 Expansion L5. Promises & Commitments
// Making promises, expressing determination, talking about resolutions.

const LESSON_5 = {id:"jav2_u16l5", title:"やくそくときめる", icon:"🤞", xp:15, board:true, steps:[
  {type:"intro", title:"やくそくときめる",
   desc:"Learn to make promises, express determination, and talk about New Year's resolutions and life commitments. These patterns show your sincerity and build trust in relationships.",
   goals:["Make promises with やくそくする and ことにする","Express determination with ぞ, きっと, and かならず","Talk about resolutions and self-improvement goals"]},

  {type:"teach", trg:"やくそくする", src:"to promise / to make an appointment", pos:"verb", gender:null,
   note:"する-verb. やくそくします = I promise (polite).\nUsed for both casual promises and formal commitments.",
   example:"A: あしたかならずいくとやくそくします。\nB: やくそくですよ！",
   exampleSrc:"A: I promise I will definitely go tomorrow.\nB: It is a promise!",
   funFact:"やくそくする carries real weight in Japanese. Breaking a promise (やくそくをやぶる) damages trust significantly. Children seal promises with ゆびきりげんまん, a pinky-swear ritual with a rhyme about swallowing needles if the promise is broken. Adults take verbal promises just as seriously."},

  {type:"teach", trg:"かならず", src:"definitely / without fail", pos:"adv", gender:null,
   note:"Stronger than きっと. Promises absolute certainty.\nKanji: 必ず.",
   example:"A: かならずれんらくしてください。\nB: はい、かならずします。",
   exampleSrc:"A: Please contact me without fail.\nB: Yes, I definitely will.",
   funFact:"必ず uses the kanji 必 (certainly/must), the same kanji in ひつよう (necessary). かならず is the strongest certainty adverb for promises: きっと (surely, ~90%) < かならず (without fail, ~99%). Using かならず in a promise shows maximum commitment and seriousness."},

  {type:"teach", trg:"〜ことにする", src:"decide to ~ (personal decision)", pos:"part", gender:null,
   note:"Dictionary form + ことにする = I have decided to.\nEmphasizes personal choice.",
   example:"A: まいにちうんどうすることにしました。\nB: いいですね！がんばってください。",
   exampleSrc:"A: I have decided to exercise every day.\nB: That is great! Do your best.",
   funFact:"ことにする emphasizes YOUR decision: you chose this. Compare with ことになる (it has been decided, by circumstance): にほんにいくことにした (I decided to go to Japan) vs にほんにいくことになった (it has been decided I am going to Japan, e.g., work transfer). The difference in agency is important."},

  {type:"mc", q:"かならず expresses:", opts:["Maybe","Probably","Without fail / definitely","Sometimes"], ans:"Without fail / definitely",
   hint:"The strongest certainty adverb, used in serious promises and commitments."},

  {type:"teach", trg:"〜ことになる", src:"it has been decided that ~ (external)", pos:"part", gender:null,
   note:"Dictionary form + ことになる = decided by circumstances, not your choice.\nUsed for announcements.",
   example:"A: らいげつからおおさかではたらくことになりました。\nB: えっ、おおさかですか？おめでとうございます。",
   exampleSrc:"A: It has been decided that I will work in Osaka from next month.\nB: What, Osaka? Congratulations.",
   funFact:"ことになる removes personal agency: 'it came to be that...' This is used for work transfers, company decisions, and life circumstances beyond your control. It is also a useful tool for politeness: framing your decision as if it happened to you sounds more modest than ことにした (I decided)."},

  {type:"teach", trg:"がんばります", src:"I will do my best", pos:"verb", gender:null,
   note:"Polite form of がんばる. A commitment to effort.\nThe most common promise of determination.",
   example:"A: しけんがんばってね！\nB: うん、がんばります！",
   exampleSrc:"A: Do your best on the exam!\nB: Yes, I will do my best!",
   funFact:"がんばります is not just a phrase; it is a cultural commitment. When you say it, you are pledging effort regardless of outcome. In Japanese workplaces, がんばります in response to a task means 'I accept the challenge and will give it everything.' It builds trust and shows character."},

  {type:"teach", trg:"もくひょう", src:"goal / target", pos:"noun", gender:null,
   note:"もくひょうをたてる = to set a goal. A concrete aim to work toward.\nKanji: 目標.",
   example:"A: ことしのもくひょうはなんですか？\nB: JLPTのN3にごうかくすることです。",
   exampleSrc:"A: What is your goal for this year?\nB: It is to pass JLPT N3.",
   funFact:"目標 combines 目 (eye) and 標 (mark/sign). It implies something you can see and aim for. Japanese schools emphasize もくひょうをたてる (goal-setting) from elementary school. Class goals are displayed on the wall, and personal goals are written in journals. This habit continues into adult life."},

  {type:"fb", s:"まいにちうんどうする{1}にしました。\n(I have decided to exercise every day.)", a:"こと", opts:["こと","つもり","ため","はず"], sSrc:"I have decided to exercise every day.",
   hint:"The nominalizer that turns a verb into 'the act of' before にする (decide)."},

  {type:"teach", trg:"つづける", src:"to continue", pos:"verb", gender:null,
   note:"Group 2 verb. Verb stem + つづける = continue doing.\nKanji: 続ける.",
   example:"A: にほんごのべんきょうをつづけますか？\nB: はい、ぜったいつづけます。",
   exampleSrc:"A: Will you continue studying Japanese?\nB: Yes, I will absolutely continue.",
   funFact:"続ける is the verb of perseverance. つづけることがだいじ (continuing is what matters) is a common motivational saying. In Japanese self-improvement culture, the emphasis is on daily habits (まいにちのしゅうかん) rather than dramatic changes. Small consistent efforts (こつこつ) are most respected."},

  {type:"teach", trg:"やめる", src:"to quit / to stop", pos:"verb", gender:null,
   note:"Group 2 verb. Opposite of つづける. やめます = I will quit.\nKanji: 辞める (quit job) or 止める (stop action).",
   example:"A: タバコをやめることにしました。\nB: すばらしいですね！おうえんしています。",
   exampleSrc:"A: I have decided to quit smoking.\nB: That is wonderful! I am cheering you on.",
   funFact:"やめる has two kanji: 辞める (resign from a position/job) and 止める (stop an action/habit). タバコをやめる (quit smoking), しごとをやめる (quit a job), and ゲームをやめる (stop playing games) are common life decisions. Once announced, social pressure helps maintain the commitment."},

  {type:"mc", q:"Which pattern expresses that you personally made a choice (not that circumstances decided for you)?", opts:["ことになった","Both are the same","ことにした","Neither"], ans:"ことにした",
   hint:"にする = you decide. になる = it becomes decided (by external factors)."},

  {type:"teach", trg:"おうえんする", src:"to cheer on / to support", pos:"verb", gender:null,
   note:"する-verb. おうえんしている = I am supporting/cheering for.\nKanji: 応援する.",
   example:"A: マラソンにちょうせんすることにしました。\nB: おうえんしています！がんばって！",
   exampleSrc:"A: I have decided to challenge myself to run a marathon.\nB: I am cheering you on! Do your best!",
   funFact:"応援 combines 応 (respond) and 援 (help/assist). おうえんしています is a powerful encouragement phrase meaning 'I am in your corner.' It is used for athletes, students before exams, friends with new goals, and anyone taking on a challenge. It conveys genuine emotional support."},

  {type:"teach", trg:"ちょうせんする", src:"to challenge / to attempt", pos:"verb", gender:null,
   note:"する-verb. ちょうせん = challenge. Taking on something difficult.\nKanji: 挑戦する.",
   example:"A: あたらしいことにちょうせんするのはすばらしいことです。\nB: そうですね。こわいけど、やってみます。",
   exampleSrc:"A: Challenging new things is wonderful.\nB: You are right. I am scared, but I will try.",
   funFact:"挑戦 combines 挑 (challenge/provoke) and 戦 (battle/war). It implies bravery in facing difficulty. ちょうせんすること is celebrated in Japanese culture: even failure is respected if the effort was genuine. TV shows love the ちょうせん format where people attempt difficult feats."},

  {type:"fb", s:"にほんごのべんきょうを{1}ますか？\n(Will you continue studying Japanese?)", a:"つづけ", opts:["つづけ","やめ","はじめ","おわり"], sSrc:"Will you continue studying Japanese?",
   hint:"The verb meaning 'to continue' in its stem form before ます."},

  {type:"match", pairs:[{trg:"かならず",src:"without fail"},{trg:"ことにする",src:"decide to (personal)"},{trg:"ことになる",src:"it is decided (external)"},{trg:"もくひょう",src:"goal"}]},

  {type:"match", pairs:[{trg:"つづける",src:"to continue"},{trg:"やめる",src:"to quit"},{trg:"おうえんする",src:"to cheer on"},{trg:"ちょうせんする",src:"to challenge"}]},

  {type:"mc", q:"おうえんしています means:", opts:["I am giving up","I am confused","I am cheering you on","I am worried"], ans:"I am cheering you on",
   hint:"A supportive phrase meaning 'I am in your corner/I support you.'"},

  {type:"fb", s:"タバコを{1}ことにしました。\n(I have decided to quit smoking.)", a:"やめる", opts:["やめる","つづける","はじめる","する"], sSrc:"I have decided to quit smoking.",
   hint:"The verb meaning 'to quit/stop' in dictionary form before ことにする."},

  {type:"tip", title:"Promises, Decisions, and Goals",
   text:"Promises:\nやくそくします (I promise)\nかならず〜します (I will without fail)\n\nDecisions:\n〜ことにする (I decided to -- personal)\n〜ことになる (it was decided -- external)\n\nGoals:\nもくひょうをたてる (set a goal)\nちょうせんする (challenge/attempt)\nがんばります (I will do my best)\n\nPerseverance:\nつづける (continue)\nやめない (not give up)\nこつこつ (steadily, little by little)",
   deepDive:{title:"ことにする vs つもり vs よてい",
    text:"Three ways to talk about future plans:\n\nことにする = decided (firm, just decided)\nにほんにいくことにした。(I decided to go to Japan.)\nFocus: the moment of decision.\n\nつもり = intention (firm, ongoing plan)\nにほんにいくつもりです。(I intend to go to Japan.)\nFocus: your determination and will.\n\nよてい = plan (concrete, scheduled)\nにほんにいくよていです。(I have plans to go to Japan.)\nFocus: practical scheduling.\n\nProgress: たい (want) > ことにする (decide) > つもり (intend) > よてい (plan) > する (do).\nEach step moves from wish to reality."}},
]};
export default LESSON_5;
