// Batch 6 – Unit 14 (A2.1 Opinions): Emotions & Feelings
const BATCH6_L1 = {
  id:"jav2_u14l_b6_1", title:"きもちとかんじょう", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"きもちとかんじょう",
     desc:"Build your emotional vocabulary with words for complex feelings. Japanese has rich vocabulary for nuanced emotions, including many onomatopoeic expressions that English lacks.",
     goals:["Express a range of emotions beyond basic happy/sad","Use onomatopoeia for emotional states","Describe feelings with appropriate register"]},

    {type:"teach", trg:"うれしい", src:"happy / glad / pleased", pos:"adj", gender:null,
     note:"I-adjective. Describes happiness from a specific event.\nKanji: 嬉しい. Different from しあわせ (general happiness).",
     example:"A: しけんにうかってうれしいです。\nB: おめでとうございます！",
     exampleSrc:"A: I am happy that I passed the exam.\nB: Congratulations!",
     funFact:"うれしい describes event-triggered happiness: receiving a gift, passing a test, being praised. しあわせ describes a general state of contentment. うれしなみだ (happy tears) shows that joy can be so strong it makes you cry."},

    {type:"teach", trg:"かなしい", src:"sad / sorrowful", pos:"adj", gender:null,
     note:"I-adjective. かなしいえいが = a sad movie.\nKanji: 悲しい.",
     example:"A: そのニュースをきいてかなしくなりました。\nB: わたしもです。とてもかなしいですね。",
     exampleSrc:"A: I became sad when I heard that news.\nB: Me too. It is very sad.",
     funFact:"かなしい and its literary form かなし appear throughout Japanese poetry. In ancient Japanese, かなし could also mean 'lovable' or 'dear.' The mono no aware (もののあわれ) aesthetic embraces かなしい beauty in impermanence: cherry blossoms falling, summer ending."},

    {type:"teach", trg:"さびしい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい. さびしいきもち = a lonely feeling.\nKanji: 寂しい.",
     example:"A: ともだちがくにへかえってさびしいです。\nB: また あえますよ。",
     exampleSrc:"A: My friend went back to their country and I feel lonely.\nB: You will meet again.",
     funFact:"さびしい and さみしい are both correct. The root connects to わびさび (wabi-sabi), the Japanese aesthetic that finds beauty in solitude and imperfection. さびしい can describe places too: さびしいまち (a lonely/desolate town). The kanji 寂 also appears in しずか (quiet) readings."},

    {type:"teach", trg:"くやしい", src:"frustrating / vexing / mortifying", pos:"adj", gender:null,
     note:"I-adjective. No direct English equivalent.\nDescribes frustration at failure or being bested.",
     example:"A: しあいにまけてくやしいです。\nB: つぎはかちましょう！",
     exampleSrc:"A: I lost the match and it is so frustrating.\nB: Let us win next time!",
     funFact:"くやしい is a uniquely Japanese emotion word with no perfect English translation. It combines frustration, regret, and determination. Athletes often cry くやしなみだ (tears of frustration). Importantly, feeling くやしい motivates improvement. It is the emotional fuel behind がんばる (to persevere)."},

    {type:"teach", trg:"はずかしい", src:"embarrassed / ashamed", pos:"adj", gender:null,
     note:"I-adjective. はずかしくてかおがあかくなる = so embarrassed your face turns red.\nKanji: 恥ずかしい.",
     example:"A: みんなのまえでうたうのがはずかしいです。\nB: だいじょうぶ、みんなおうえんしていますよ。",
     exampleSrc:"A: I am embarrassed to sing in front of everyone.\nB: It is okay, everyone is cheering you on.",
     funFact:"はずかしい is fundamental to understanding Japanese social behavior. Many actions are avoided because they would be はずかしい: standing out, making mistakes publicly, being too loud. The concept of はじ (shame) shapes etiquette. However, younger generations are increasingly embracing はずかしさを overcome (overcoming embarrassment)."},

    {type:"mc", q:"くやしい is closest to:", opts:["Frustration at losing or failing","General sadness","Physical pain","Extreme happiness"], ans:"Frustration at losing or failing",
     hint:"This emotion specifically relates to being bested or falling short of a goal."},

    {type:"teach", trg:"わくわくする", src:"to be excited / to feel thrilled", pos:"verb", gender:null,
     note:"Onomatopoeia + する. わくわく = bubbling excitement.\nわくわくするりょこう = an exciting trip.",
     example:"A: あしたのりょこうがわくわくします。\nB: たのしみですね！",
     exampleSrc:"A: I am excited about tomorrow's trip.\nB: How fun!",
     funFact:"わくわく mimics the sensation of excitement bubbling up inside. It pairs with どきどき (heart pounding): わくわくどきどき describes being both excited and nervous. These paired onomatopoeia are uniquely expressive. A わくわくする experience is one full of positive anticipation."},

    {type:"teach", trg:"すっきりする", src:"to feel refreshed / to feel clear", pos:"verb", gender:null,
     note:"Onomatopoeia + する. すっきりした = I feel refreshed.\nAfter exercising, bathing, or solving a problem.",
     example:"A: シャワーをあびてすっきりしました。\nB: いいですね。もういちにちがんばれますね。",
     exampleSrc:"A: I took a shower and feel refreshed.\nB: Nice. You can work hard for the rest of the day.",
     funFact:"すっきり captures the clean, refreshed feeling after a shower, after cleaning your room, or after resolving a problem. It is the emotional opposite of もやもや (vague unease). すっきりした顔 (a refreshed face) shows visible relief. Japanese onsen culture is built around the すっきり feeling."},

    {type:"teach", trg:"ぼんやりする", src:"to be absent-minded / to space out", pos:"verb", gender:null,
     note:"Onomatopoeia + する. ぼんやりしていた = I was spacing out.\nぼんやりしたきおく = a vague memory.",
     example:"A: ぼんやりしていないでしゅうちゅうしてください。\nB: すみません。ねむいです。",
     exampleSrc:"A: Stop spacing out and concentrate.\nB: Sorry. I am sleepy.",
     funFact:"ぼんやり suggests a foggy, unfocused state. It can be negative (not paying attention) or neutral (peacefully daydreaming). ぼんやりと夕日を見る (gazing absently at the sunset) is poetic. Japanese manga often shows ぼんやり characters with empty bubble above their heads."},

    {type:"teach", trg:"いらいらする", src:"to be irritated / to be agitated", pos:"verb", gender:null,
     note:"Onomatopoeia + する. いらいら = a prickling, simmering frustration.\nいらいらしないで = don't be irritated.",
     example:"A: でんしゃがおくれていらいらします。\nB: しかたがないですよ。",
     exampleSrc:"A: The train is late and I am irritated.\nB: It cannot be helped.",
     funFact:"いらいら suggests a scratching, prickling internal feeling. It is milder than おこる (to be angry) but persistent. いらいらの原因 (cause of irritation) is often daily inconveniences: slow internet, long waits, crowded trains. Stress management (ストレスかいしょう) is a big topic in Japan."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Onomatopoeia + する. ほっとした = I felt relieved.\nほっと = sigh of relief.",
     example:"A: むすこがぶじにかえってきてほっとしました。\nB: よかったですね。しんぱいしましたね。",
     exampleSrc:"A: I felt relieved that my son came home safely.\nB: That is good. You must have been worried.",
     funFact:"ほっと captures the physical sensation of relief: releasing held breath, shoulders dropping. ほっとするしゅんかん (a moment of relief) is a common essay topic for Japanese students. ほっとひといき (one sigh of relief) is said when a stressful situation resolves."},

    {type:"fb", s:"あしたのりょこうが{1}します。\n(I am excited about tomorrow's trip.)", a:"わくわく", opts:["わくわく","いらいら","ぼんやり","ほっと"], sSrc:"I am excited about tomorrow's trip.",
     hint:"This onomatopoeia describes bubbling positive excitement."},

    {type:"teach", trg:"ぺらぺら", src:"fluently (speaking)", pos:"adv", gender:null,
     note:"Onomatopoeia. にほんごがぺらぺら = fluent in Japanese.\nDescribes smooth, rapid speech.",
     example:"A: にほんごがぺらぺらですね。\nB: まだまだです。もっとがんばります。",
     exampleSrc:"A: Your Japanese is fluent.\nB: Not yet. I will try harder.",
     funFact:"ぺらぺら mimics the sound of pages flipping rapidly, applied to speech flowing smoothly. It is one of the highest compliments for a language learner. にほんじん is also ぺらぺら when speaking fast. The humble response まだまだ (not yet, far from it) is the expected reply to such a compliment."},

    {type:"mc", q:"すっきりする describes:", opts:["Feeling refreshed and clear","Being irritated","Spacing out","Being embarrassed"], ans:"Feeling refreshed and clear",
     hint:"This f... comes after a shower, solving a problem, or cleaning up."},

    {type:"match", pairs:[
      {trg:"うれしい", src:"happy / glad"},
      {trg:"かなしい", src:"sad"},
      {trg:"くやしい", src:"frustrating"},
      {trg:"わくわく", src:"excited"},
      {trg:"ほっと", src:"relieved"}
    ]},

    {type:"fb", s:"にほんごが{1}ですね。\n(Your Japanese is fluent.)", a:"ぺらぺら", opts:["ぺらぺら","ぼんやり","すっきり","どきどき"], sSrc:"Your Japanese is fluent.",
     hint:"This onomatopoeia describes smooth, rapid speech ability."},

    {type:"mc", q:"ぼんやりする means:", opts:["To be absent-minded or space out","To be excited","To be irritated","To feel refreshed"], ans:"To be absent-minded or space out",
     hint:"This word describes a foggy, unfocused mental state."}
  ]
};
export default BATCH6_L1;
