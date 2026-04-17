// Batch 2 expansion for Unit 14 (Opinions) — more opinion expressions, agreement/disagreement
const BATCH2_L_1 = {
  id:"jav2_u14l_b2_1", title:"きもちをつたえる", icon:"💬", xp:15, board:true,
  steps:[
  {type:"intro", title:"きもちをつたえる",
   desc:"Go beyond basic opinions to express emotions, preferences, and evaluations. Learn adjectives for describing experiences, ways to agree enthusiastically or disagree politely, and expressions for sharing your feelings naturally.",
   goals:["Express feelings: happy, sad, surprised, worried","Give evaluations: useful, useless, important, unnecessary","Use hedging expressions to soften opinions politely"]},

  {type:"teach", trg:"うれしい", src:"happy / glad", pos:"adj", gender:null,
   note:"い-adjective for joy or gladness about a specific event.\nKanji: 嬉しい.",
   example:"A: ごうかくしました！\nB: うれしいですね！おめでとう！\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: I passed the exam!\nB: You must be happy! Congratulations!\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"うれしい describes happiness about a specific event or news, not general happiness. For general life happiness, use しあわせ (幸せ). うれしい is reactive: you are happy BECAUSE something good happened. It is used constantly for good news, gifts, and pleasant surprises."},

  {type:"teach", trg:"かなしい", src:"sad", pos:"adj", gender:null,
   note:"い-adjective. Opposite of うれしい.\nKanji: 悲しい.",
   example:"A: ペットがしんでしまいました。\nB: それはかなしいですね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: My pet died.\nB: That is sad.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"悲しい uses 悲, which shows a heart (心) being split apart by something (非 = wrong/not). The imagery of a broken heart is literally in the kanji. かなしい is openly expressed in Japanese art, poetry, and music, but in daily life, people often understate sadness."},

  {type:"teach", trg:"びっくりする", src:"to be surprised / to be startled", pos:"verb", gender:null,
   note:"する-verb. びっくりした = was surprised.\nOnomatopoeia origin.",
   example:"A: たんじょうびパーティーにびっくりしましたか？\nB: はい、とてもびっくりしました！\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Were you surprised by the birthday party?\nB: Yes, I was very surprised!\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"びっくり is onomatopoeic, imitating the sound of startlement. Japanese is rich in these sound-based expressions: どきどき (heart pounding), わくわく (excited), はらはら (nervous). びっくりする can be positive (surprised by a gift) or negative (shocked by news)."},

  {type:"teach", trg:"しんぱい", src:"worry / concern", pos:"noun", gender:null,
   note:"しんぱいする = to worry. しんぱいしないで = do not worry.\nKanji: 心配.",
   example:"A: しけんのことがしんぱいです。\nB: だいじょうぶですよ。がんばって！\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: I am worried about the exam.\nB: It will be fine. Do your best!\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"心配 combines 心 (heart) and 配 (distribute/arrange), suggesting a heart that is unsettled. しんぱいしないでください (please do not worry) is a common comfort phrase. Japanese people often express concern indirectly: だいじょうぶですか？(Are you okay?) rather than stating worry directly."},

  {type:"mc", q:"うれしい is used when:", opts:["You are generally content with life","Something specific made you happy","You are always happy","You are sad"], ans:"Something specific made you happy",
   hint:"This adjective describes reactive happiness triggered by a particular event."},

  {type:"teach", trg:"べんり", src:"convenient / useful", pos:"adj", gender:null,
   note:"な-adjective. べんりなもの = useful thing. Opposite: ふべん (inconvenient).\nKanji: 便利.",
   example:"A: このアプリはとてもべんりだとおもいます。\nB: わたしもそうおもいます。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: I think this app is very useful.\nB: I think so too.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"便利 combines 便 (convenience) and 利 (profit/benefit). Japan is the land of べんり: convenience stores open 24/7, heated toilet seats, vending machines everywhere, umbrella vending machines when it rains. The concept of convenience is central to Japanese product design."},

  {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"adv", gender:null,
   note:"Summarizing conjunction. Used to rephrase or clarify what was said.",
   example:"A: つまり、にほんごはむずかしいけどたのしいということですか？\nB: はい、そうです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: In other words, Japanese is difficult but fun, is that right?\nB: Yes, that is right.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"つまり (literally 'to be packed/condensed') is used to distill a longer explanation into a key point. It functions like 'in short' or 'basically.' In debates and discussions, つまり signals that you are about to state the essential point clearly."},

  {type:"teach", trg:"けっきょく", src:"in the end / after all", pos:"adv", gender:null,
   note:"Summarizes the final outcome after deliberation.\nKanji: 結局.",
   example:"A: けっきょくどうしましたか？\nB: けっきょくにほんにいくことにしました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: What did you end up doing?\nB: In the end, I decided to go to Japan.\nA: How was it?\nB: It was very good.",
   funFact:"結局 combines 結 (tie up) and 局 (situation/bureau), meaning 'the situation all tied up.' It implies that various considerations led to a final conclusion. けっきょく often introduces outcomes that were different from initial expectations."},

  {type:"fb", s:"{1}しないでください。\n(Please do not worry.)", a:"しんぱい", opts:["しんぱい","びっくり","おどろき","かなしみ"], sSrc:"Please do not worry.",
   hint:"The noun-verb combination for feeling anxious or concerned about something."},

  {type:"teach", trg:"やっぱり", src:"as I thought / after all / sure enough", pos:"adv", gender:null,
   note:"Confirms an expectation or returns to an original feeling. Very common.\nKanji: やはり (formal).",
   example:"A: やっぱりにほんごはおもしろいです。\nB: そうですね！\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: As I thought, Japanese is interesting.\nB: It really is!\nA: When was it?\nB: It was last summer.",
   funFact:"やっぱり is one of the most-used adverbs in casual Japanese. It confirms what you suspected all along: やっぱりあめだ (sure enough, rain). It also signals changing your mind back: やっぱりやめます (on second thought, I will not). Restaurant ordering often involves やっぱりこれにします (actually, I will have this one)."},

  {type:"teach", trg:"なるほど", src:"I see / that makes sense", pos:"intj", gender:null,
   note:"Acknowledgment that you understood and are impressed by the logic.\nWritten as 成程 in kanji (rare).",
   example:"A: にほんではくつをぬぎます。\nB: なるほど。そういうぶんかなんですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: In Japan, you take off your shoes.\nB: I see. That is the culture.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"なるほど is a verbal nod that shows active listening and comprehension. It is stronger than はい (yes) because it implies 'I understand and it makes sense.' Business Japanese uses it frequently in meetings. Some speakers overuse it, leading to jokes about 'naruhodo-ing' through every conversation."},

  {type:"teach", trg:"そうですね", src:"that is right / I agree", pos:"intj", gender:null,
   note:"General agreement phrase. Can also be a thinking filler (hmm, let me see).\nContext determines meaning.",
   example:"A: きょうはあついですね。\nB: そうですね。かきごおりがたべたいです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: It is hot today, is it not.\nB: It really is. I want to eat shaved ice.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"そうですね is the Swiss army knife of Japanese conversation. With emphasis on ね, it means 'I agree!' With a drawn-out そうですねえ..., it means 'let me think about that.' Reading the intonation correctly is key to understanding whether someone agrees or is stalling."},

  {type:"teach", trg:"きもち", src:"feeling / mood", pos:"noun", gender:null,
   note:"Both physical sensations and emotions. きもちいい = feels good.\nKanji: 気持ち.",
   example:"A: いまのきもちをおしえてください。\nB: とてもうれしいきもちです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Please tell me how you feel.\nB: I feel very happy.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"気持ち combines 気 (spirit/energy) and 持ち (holding/having). きもちいい means 'feels good' (physically pleasant). きもちわるい means 'feels bad/gross.' In Japanese communication, reading the other person's きもち is considered an essential social skill called kuuki wo yomu (reading the air)."},

  {type:"mc", q:"やっぱり is used when:", opts:["You are completely surprised","Something confirms what you expected","You disagree strongly","You do not understand"], ans:"Something confirms what you expected",
   hint:"This adverb signals that reality matched your prediction or original feeling."},

  {type:"match", pairs:[{trg:"うれしい",src:"happy"},{trg:"かなしい",src:"sad"},{trg:"びっくりする",src:"to be surprised"},{trg:"しんぱい",src:"worry"}]},

  {type:"match", pairs:[{trg:"やっぱり",src:"as I thought"},{trg:"なるほど",src:"I see"},{trg:"つまり",src:"in other words"},{trg:"けっきょく",src:"in the end"}]},

  {type:"fb", s:"{1}にほんごはおもしろいです。\n(As I thought, Japanese is interesting.)", a:"やっぱり", opts:["やっぱり","たぶん","ぜったい","なるほど"], sSrc:"As I thought, Japanese is interesting.",
   hint:"The adverb confirming something you suspected or felt from the beginning."},

  {type:"mc", q:"なるほど expresses:", opts:["disagreement","confusion","understanding and agreement","surprise"], ans:"understanding and agreement",
   hint:"This interjection shows you followed the logic and it makes sense to you."},

  {type:"fb", s:"このアプリはとても{1}だとおもいます。\n(I think this app is very useful.)", a:"べんり", opts:["べんり","ふべん","むずかしい","つまらない"], sSrc:"I think this app is very useful.",
   hint:"The な-adjective describing something that makes life easier and more c..."},
]};
export default BATCH2_L_1;
