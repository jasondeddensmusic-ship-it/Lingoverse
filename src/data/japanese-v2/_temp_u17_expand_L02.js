// Unit 17 Expansion. Lesson 4: ふりがいのうけみ (Adversity Passive Practice)
const LESSON_4 = {
  id:"jav2_u17l4", title:"ふりがいのうけみ", icon:"😣", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふりがいのうけみ",
     desc:"Deepen your adversity passive skills with more real-world situations. From noisy neighbors to cancelled trains, Japanese uses passive to express how events negatively impact you. Practice turning everyday complaints into natural Japanese.",
     goals:["Express more adversity situations with passive voice","Use passive with possession (having things done to your belongings)","Combine adversity passive with ても (even though) and のに (despite)"]},

    {type:"teach", trg:"こわされる", src:"to have something broken", pos:"verb", gender:null,
     note:"Passive of こわす (to break). Group 1: こわす to こわさ + れる.\nKanji: 壊される. Adversity: someone broke YOUR thing.",
     example:"A: こどもにおもちゃをこわされました。\nB: また？しかたないですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: My child broke my toy (on me).\nB: Again? It cannot be helped.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"壊される is a classic adversity passive. The speaker's possession was broken by someone else. Compare: こどもがおもちゃをこわした (the child broke a toy, neutral) vs. こどもにおもちゃをこわされた (I had my toy broken by the child, victim perspective). The に marks the 'culprit.'"},

    {type:"teach", trg:"よごされる", src:"to have something dirtied/stained", pos:"verb", gender:null,
     note:"Passive of よごす (to make dirty). Group 1: よごす to よごさ + れる.\nKanji: 汚される.",
     example:"A: あたらしいシャツをコーヒーでよごされました。\nB: クリーニングにだしましょう。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I had my new shirt stained with coffee.\nB: Let us take it to the dry cleaner.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"汚す uses the kanji 汚 (dirty/pollute). Having your clothes dirtied by someone else is a textbook adversity passive situation. The pattern [possession] を + [agent] に + 汚された expresses both what was dirtied and who did it. Dry cleaning (kuriiningu) is widely used in Japan."},

    {type:"teach", trg:"なくされる", src:"to have something lost (by someone else)", pos:"verb", gender:null,
     note:"Passive of なくす (to lose something). Group 1: なくす to なくさ + れる.\nKanji: 無くされる.",
     example:"A: ともだちにかしたほんをなくされました。\nB: こまりましたね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I had a book I lent to a friend lost.\nB: That is troublesome.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"なくされる expresses the frustration of someone losing YOUR belongings. Lending things (貸す, kasu) in Japan comes with strong expectations of return. Having a lent item lost (kashita mono wo nakusareru) is a significant social problem. The passive form centers your annoyance as the owner."},

    {type:"teach", trg:"しかたない", src:"it cannot be helped / nothing can be done", pos:"adj", gender:null,
     note:"Set phrase from しかた (method/way) + ない (not exist).\nAlso: しょうがない (casual). Expresses resignation.",
     example:"A: でんしゃがとまりました。\nB: しかたないですね。タクシーでいきましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The train stopped.\nB: It cannot be helped. Let us take a taxi.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"しかたない (also しょうがない) is one of the most culturally revealing Japanese expressions. It reflects a philosophy of accepting what cannot be changed. After earthquakes, typhoons, and daily inconveniences, Japanese people say shikata nai. It is not defeatism but pragmatic acceptance, a core part of the gaman (endurance) mindset."},

    {type:"mc", q:"こどもにおもちゃをこわされた means:", opts:["I broke the child's toy","The child broke a toy","I had my toy broken by the child","The toy was already broken"], ans:"I had my toy broken by the child",
     hint:"Adversity passive: the speaker is the victim. に marks who did it, を marks what was affected."},

    {type:"teach", trg:"すわられる", src:"to have one's seat sat in", pos:"verb", gender:null,
     note:"Passive of すわる (to sit). Group 1: すわる to すわら + れる.\nKanji: 座られる. Adversity: someone sat in YOUR spot.",
     example:"A: いつものせきにすわられてしまいました。\nB: べつのせきにしましょう。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Someone sat in my usual seat.\nB: Let us use a different seat.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"座られる is a pure adversity passive. Sitting is intransitive, so there is no direct passive. The passive form means 'someone sat, and it negatively affected me.' Regular spots (いつものせき) carry strong territorial feelings in Japanese offices and cafes. Having yours taken is genuinely upsetting."},

    {type:"teach", trg:"さきにかえられる", src:"to have someone go home before you", pos:"verb", gender:null,
     note:"さきに (first/ahead) + かえられる (passive of かえる).\nAdversity: a colleague left before you, causing inconvenience.",
     example:"A: どうりょうにさきにかえられてしごとがふえました。\nB: ざんねんでしたね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: My colleague went home before me and my workload increased.\nB: That is unfortunate.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"This is a classic workplace adversity passive. Japanese work culture often involves not leaving before your seniors. When a colleague leaves early (saki ni kaeru), the remaining person inherits extra work. The passive perfectly captures this resentment: 'I was left-behind-ed.'"},

    {type:"fb", s:"あたらしいシャツをコーヒーで{1}ました。\n(I had my new shirt stained with coffee.)", a:"よごされ", opts:["よごされ","よごして","よごし","よごれ"], sSrc:"I had my new shirt stained with coffee.",
     hint:"The passive form of よごす (to make dirty). Group 1: あ-row + れる."},

    {type:"teach", trg:"となり", src:"next to / neighbor / adjacent", pos:"noun", gender:null,
     note:"となりのひと = the person next to you. となりのへや = the next room.\nKanji: 隣.",
     example:"A: となりのひとにはなしかけられました。\nB: なにをはなしましたか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I was talked to by the person next to me.\nB: What did you talk about?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"隣 is essential for daily life. となりのせき (the next seat), となりのいえ (the house next door). The famous Miyazaki film 'となりのトトロ' (My Neighbor Totoro) uses this word. Japanese spatial vocabulary is precise: となり (adjacent), まえ (in front), うしろ (behind), よこ (beside)."},

    {type:"teach", trg:"はなしかけられる", src:"to be talked to / to be approached", pos:"verb", gender:null,
     note:"Passive of はなしかける (to talk to/approach someone).\nはなしかける = initiate conversation. Group 2-style passive.",
     example:"A: でんしゃでしらないひとにはなしかけられました。\nB: びっくりしましたか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I was talked to by a stranger on the train.\nB: Were you surprised?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"はなしかけられる describes the experience of being approached by someone starting a conversation. In Japan, where strangers rarely talk on trains, this can feel surprising or even uncomfortable. The passive form emphasizes the receiver's perspective: they did not initiate the contact."},

    {type:"mc", q:"いつものせきにすわられてしまった expresses:", opts:["I sat in my usual seat happily","Someone sat in my usual seat and I was upset","I found a new seat easily","My usual seat was comfortable"], ans:"Someone sat in my usual seat and I was upset",
     hint:"Adversity passive + てしまう expresses misfortune. The speaker's regular s... was taken."},

    {type:"teach", trg:"のに", src:"despite / even though", pos:"part", gender:null,
     note:"Connects two clauses where the second is unexpected given the first.\nVerb plain form + のに. Expresses frustration.",
     example:"A: せっかくつくったのにたべてくれませんでした。\nB: ざんねんでしたね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Despite the trouble of making it, they would not eat it.\nB: That is unfortunate.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"のに adds an emotional punch of disappointment or frustration. It signals: 'given situation A, outcome B should not have happened.' Combined with passive, it creates powerful complaint sentences: がんばったのにしかられた (despite trying hard, I was scolded). It is the grammar of unfairness."},

    {type:"fb", s:"ともだちにかしたほんを{1}ました。\n(I had a book I lent to a friend lost.)", a:"なくされ", opts:["なくされ","なくして","なくし","なくなり"], sSrc:"I had a book I lent to a friend lost.",
     hint:"The passive form of なくす (to lose something). Group 1: あ-row + れる."},

    {type:"tip", title:"Adversity Passive with Possessions",
     text:"A common adversity passive pattern involves YOUR possessions being affected:\n\n[person] に + [your thing] を + passive verb\n\nこどもにおもちゃをこわされた = child broke my toy\nともだちにほんをなくされた = friend lost my book\nだれかにシャツをよごされた = someone stained my shirt\n\nThe speaker is always the implied victim. The を marks what was affected, に marks who did it.\n\nAdd のに for extra frustration:\nあたらしいのにこわされた = despite being new, it was broken on me.",
     deepDive:{title:"Passive Complaints in Japanese",
      text:"Japanese people often frame complaints using passive voice because it avoids directly blaming someone. Instead of 'you broke my toy' (あなたがこわした, confrontational), the passive shifts focus to the speaker's suffering: 'my toy was broken on me' (こわされた, victim-focused).\n\nThis is not weakness but social strategy. Japanese communication prefers indirect expressions of displeasure. The adversity passive lets you express frustration without pointing fingers, preserving harmony (wa) while still getting your feelings across."}},

    {type:"match", pairs:[{trg:"こわされる",src:"to have broken"},{trg:"よごされる",src:"to have dirtied"},{trg:"なくされる",src:"to have lost"},{trg:"すわられる",src:"to have sat in"}]},

    {type:"match", pairs:[{trg:"はなしかけられる",src:"to be talked to"},{trg:"のに",src:"despite/even though"},{trg:"しかたない",src:"cannot be helped"},{trg:"となり",src:"next to/neighbor"}]},

    {type:"mc", q:"せっかくつくったのにたべてくれなかった combines:", opts:["Passive + potential","Conditional + passive","のに (despite) + regret","Causative + humble"], ans:"のに (despite) + regret",
     hint:"のに expresses that the result was disappointing given the effort. D... making it, they refused to eat."},
  ]
};
export default LESSON_4;
