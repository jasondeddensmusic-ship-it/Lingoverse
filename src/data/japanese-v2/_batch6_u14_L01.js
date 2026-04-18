// Batch 6 – Unit 14 (A2.1 Opinions): Emotions & Feelings
const BATCH6_L1 = {
  id:"jav2_u14l_b6_1", title:"気持(きも)ちと感情(かんじょう)", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"気持(きも)ちと感情(かんじょう)",
     desc:"Build your emotional vocabulary with words for complex feelings. Japanese has rich vocabulary for nuanced emotions, including many onomatopoeic expressions that English lacks.",
     goals:["Express a range of emotions beyond basic happy/sad","Use onomatopoeia for emotional states","Describe feelings with appropriate register"]},

    {type:"teach", trg:"嬉(うれ)しい", src:"happy / glad / pleased", pos:"adj", gender:null,
     note:"I-adjective. Describes happiness from a specific event.\nKanji: 嬉しい. Different from 幸(しあわ)せ (general happiness).",
     example:"A: 試験(しけん)に受(う)かって嬉(うれ)しいです。\nB: おめでとうございます！",
     exampleSrc:"A: I am happy that I passed the exam.\nB: Congratulations!",
     funFact:"嬉(うれ)しい describes event-triggered happiness: receiving a gift, passing a test, being praised. 幸(しあわ)せ describes a general state of contentment. 嬉(うれ)し涙(なみだ) (happy tears) shows that joy can be so strong it makes you cry."},

    {type:"teach", trg:"悲(かな)しい", src:"sad / sorrowful", pos:"adj", gender:null,
     note:"I-adjective. 悲(かな)しい映画(えいが) = a sad movie.\nKanji: 悲しい.",
     example:"A: そのニュースを聞(き)いて悲(かな)しくなりました。\nB: 私(わたし)もです。とても悲(かな)しいですね。",
     exampleSrc:"A: I became sad when I heard that news.\nB: Me too. It is very sad.",
     funFact:"悲(かな)しい and its literary form かなし appear throughout Japanese poetry. In ancient Japanese, かなし could also mean 'lovable' or 'dear.' The mono no aware (物(もの)の哀(あわ)れ) aesthetic embraces 悲(かな)しい beauty in impermanence: cherry blossoms falling, summer ending."},

    {type:"teach", trg:"寂(さび)しい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい. 寂(さび)しい気持(きも)ち = a lonely feeling.\nKanji: 寂しい.",
     example:"A: 友達(ともだち)が国(くに)へ帰(かえ)って寂(さび)しいです。\nB: またあえますよ。",
     exampleSrc:"A: My friend went back to their country and I feel lonely.\nB: You will meet again.",
     funFact:"寂(さび)しい and さみしい are both correct. The root connects to わびさび (wabi-sabi), the Japanese aesthetic that finds beauty in solitude and imperfection. 寂(さび)しい can describe places too: 寂(さび)しい町(まち) (a lonely/desolate town). The kanji 寂 also appears in 静(しず)か (quiet) readings."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrating / vexing / mortifying", pos:"adj", gender:null,
     note:"I-adjective. No direct English equivalent.\nDescribes frustration at failure or being bested.",
     example:"A: 試合(しあい)に負(ま)けて悔(くや)しいです。\nB: 次(つぎ)は勝(か)ちましょう！",
     exampleSrc:"A: I lost the match and it is so frustrating.\nB: Let us win next time!",
     funFact:"悔(くや)しい is a uniquely Japanese emotion word with no perfect English translation. It combines frustration, regret, and determination. Athletes often cry 悔(くや)し涙(なみだ) (tears of frustration). Importantly, feeling 悔(くや)しい motivates improvement. It is the emotional fuel behind 頑張(がんば)る (to persevere)."},

    {type:"teach", trg:"恥(は)ずかしい", src:"embarrassed / ashamed", pos:"adj", gender:null,
     note:"I-adjective. 恥(は)ずかしくて顔(かお)が赤(あか)くなる = so embarrassed your face turns red.\nKanji: 恥ずかしい.",
     example:"A: みんなの前(まえ)で歌(うた)うのが恥(は)ずかしいです。\nB: 大丈夫(だいじょうぶ)、みんな応援(おうえん)していますよ。",
     exampleSrc:"A: I am embarrassed to sing in front of everyone.\nB: It is okay, everyone is cheering you on.",
     funFact:"恥(は)ずかしい is fundamental to understanding Japanese social behavior. Many actions are avoided because they would be 恥(は)ずかしい: standing out, making mistakes publicly, being too loud. The concept of 恥(は)じ (shame) shapes etiquette. However, younger generations are increasingly embracing 恥(は)ずかしさを overcome (overcoming embarrassment)."},

    {type:"mc", q:"悔(くや)しい is closest to:", opts:["Frustration at losing or failing","General sadness","Physical pain","Extreme happiness"], ans:"Frustration at losing or failing",
     hint:"This emotion specifically relates to being bested or falling short of a goal."},

    {type:"teach", trg:"わくわくする", src:"to be excited / to feel thrilled", pos:"verb", gender:null,
     note:"Onomatopoeia + する. わくわく = bubbling excitement.\nわくわくする旅行(りょこう) = an exciting trip.",
     example:"A: 明日(あした)の旅行(りょこう)がわくわくします。\nB: 楽(たの)しみですね！",
     exampleSrc:"A: I am excited about tomorrow's trip.\nB: How fun!",
     funFact:"わくわく mimics the sensation of excitement bubbling up inside. It pairs with どきどき (heart pounding): わくわくどきどき describes being both excited and nervous. These paired onomatopoeia are uniquely expressive. A わくわくする experience is one full of positive anticipation."},

    {type:"teach", trg:"すっきりする", src:"to feel refreshed / to feel clear", pos:"verb", gender:null,
     note:"Onomatopoeia + する. すっきりした = I feel refreshed.\nAfter exercising, bathing, or solving a problem.",
     example:"A: シャワーを浴(あ)びてすっきりしました。\nB: いいですね。もう一日(いちにち)頑張(がんば)れますね。",
     exampleSrc:"A: I took a shower and feel refreshed.\nB: Nice. You can work hard for the rest of the day.",
     funFact:"すっきり captures the clean, refreshed feeling after a shower, after cleaning your room, or after resolving a problem. It is the emotional opposite of もやもや (vague unease). すっきりした顔(かお) (a refreshed face) shows visible relief. Japanese 温泉(おんせん) culture is built around the すっきり feeling."},

    {type:"teach", trg:"ぼんやりする", src:"to be absent-minded / to space out", pos:"verb", gender:null,
     note:"Onomatopoeia + する. ぼんやりしていた = I was spacing out.\nぼんやりした記憶(きおく) = a vague memory.",
     example:"A: ぼんやりしていないで集中(しゅうちゅう)してください。\nB: すみません。眠(ねむ)いです。",
     exampleSrc:"A: Stop spacing out and concentrate.\nB: Sorry. I am sleepy.",
     funFact:"ぼんやり suggests a foggy, unfocused state. It can be negative (not paying attention) or neutral (peacefully daydreaming). ぼんやりと夕日(ゆうひ)を見(み)る (gazing absently at the sunset) is poetic. Japanese manga often shows ぼんやり characters with empty bubble above their heads."},

    {type:"teach", trg:"いらいらする", src:"to be irritated / to be agitated", pos:"verb", gender:null,
     note:"Onomatopoeia + する. いらいら = a prickling, simmering frustration.\nいらいらしないで = don't be irritated.",
     example:"A: 電車(でんしゃ)が遅(おく)れていらいらします。\nB: しかたがないですよ。",
     exampleSrc:"A: The train is late and I am irritated.\nB: It cannot be helped.",
     funFact:"いらいら suggests a scratching, prickling internal feeling. It is milder than 怒(おこ)る (to be angry) but persistent. いらいらの原因(げんいん) (cause of irritation) is often daily inconveniences: slow internet, long waits, crowded trains. Stress management (ストレス解消(かいしょう)) is a big topic in Japan."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Onomatopoeia + する. ほっとした = I felt relieved.\nほっと = sigh of relief.",
     example:"A: 息子(むすこ)が無事(ぶじ)に帰(かえ)ってきてほっとしました。\nB: よかったですね。心配(しんぱい)しましたね。",
     exampleSrc:"A: I felt relieved that my son came home safely.\nB: That is good. You must have been worried.",
     funFact:"ほっと captures the physical sensation of relief: releasing held breath, shoulders dropping. ほっとする瞬間(しゅんかん) (a moment of relief) is a common essay topic for Japanese students. ほっと一息(ひといき) (one sigh of relief) is said when a stressful situation resolves."},

    {type:"fb", s:"明日(あした)の旅行(りょこう)が{1}します。\n(I am excited about tomorrow's trip.)", a:"わくわく", opts:["わくわく","いらいら","ぼんやり","ほっと"], sSrc:"I am excited about tomorrow's trip.",
     hint:"This onomatopoeia describes bubbling positive excitement."},

    {type:"teach", trg:"ぺらぺら", src:"fluently (speaking)", pos:"adv", gender:null,
     note:"Onomatopoeia. 日本語(にほんご)がぺらぺら = fluent in Japanese.\nDescribes smooth, rapid speech.",
     example:"A: 日本語(にほんご)がぺらぺらですね。\nB: まだまだです。もっと頑張(がんば)ります。",
     exampleSrc:"A: Your Japanese is fluent.\nB: Not yet. I will try harder.",
     funFact:"ぺらぺら mimics the sound of pages flipping rapidly, applied to speech flowing smoothly. It is one of the highest compliments for a language learner. 日本人(にほんじん) is also ぺらぺら when speaking fast. The humble response まだまだ (not yet, far from it) is the expected reply to such a compliment."},

    {type:"mc", q:"すっきりする describes:", opts:["Feeling refreshed and clear","Being irritated","Spacing out","Being embarrassed"], ans:"Feeling refreshed and clear",
     hint:"This f... comes after a shower, solving a problem, or cleaning up."},

    {type:"match", pairs:[
      {trg:"嬉(うれ)しい", src:"happy / glad"},
      {trg:"悲(かな)しい", src:"sad"},
      {trg:"悔(くや)しい", src:"frustrating"},
      {trg:"わくわく", src:"excited"},
      {trg:"ほっと", src:"relieved"}
    ]},

    {type:"fb", s:"日本語(にほんご)が{1}ですね。\n(Your Japanese is fluent.)", a:"ぺらぺら", opts:["ぺらぺら","ぼんやり","すっきり","どきどき"], sSrc:"Your Japanese is fluent.",
     hint:"This onomatopoeia describes smooth, rapid speech ability."},

    {type:"mc", q:"ぼんやりする means:", opts:["To be absent-minded or space out","To be excited","To be irritated","To feel refreshed"], ans:"To be absent-minded or space out",
     hint:"This word describes a foggy, unfocused mental state."}
  ,{type:"match",pairs:[{trg:"寂(さび)しい",src:"lonely / lonesome"},{trg:"恥(は)ずかしい",src:"embarrassed / ashamed"},{trg:"すっきりする",src:"to feel refreshed / to feel clear"},{trg:"ぼんやりする",src:"to be absent-minded / to space out"},{trg:"いらいらする",src:"to be irritated / to be agitated"}]}]
};
export default BATCH6_L1;
