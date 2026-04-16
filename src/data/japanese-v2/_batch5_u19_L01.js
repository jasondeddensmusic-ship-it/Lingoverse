// Unit 19 Batch 5 Lesson 1: ばじょうけん (The ば-Conditional & なら)
const BATCH5_L_1 = {
  id:"jav2_u19l_b5_1", title:"ばとなら", icon:"🔀", xp:15, board:true,
  steps:[
    {type:"intro", title:"ばとなら",
     desc:"Complete your conditional toolkit with ば (hypothetical condition) and なら (contextual/topic condition). While たら and と cover most situations, ば adds a literary/proverbial flavor and なら responds to what someone just said. Together, the four conditionals give you full expressive power.",
     goals:["Form and use the ば-conditional correctly","Use なら to respond to stated topics","Choose the right conditional for each situation"]},

    {type:"teach", trg:"〜ば", src:"if ~ (hypothetical condition)", pos:"part", gender:null,
     note:"Group 1: change う to え + ば. Group 2: remove る, add れば.\nいけば = if (one) goes. たべれば = if (one) eats.",
     example:"A: べんきょうすればごうかくできますよ。\nB: がんばります！",
     exampleSrc:"A: If you study, you can pass.\nB: I will do my best!",
     funFact:"The ば-conditional is the oldest conditional in Japanese, appearing in 8th-century texts. It has a formal, slightly literary quality. Proverbs love ば: ちりもつもればやまとなる (if dust accumulates, it becomes a mountain). In modern speech, ば is often combined with いい: いけばいい (it would be good if you go)."},

    {type:"teach", trg:"〜なら", src:"if (it is the case that) / speaking of", pos:"part", gender:null,
     note:"Attaches to plain forms, nouns, and な-adjective stems.\nにほんならきょうとがおすすめです = speaking of Japan, I recommend Kyoto.",
     example:"A: にほんにいきたいんですが。\nB: にほんならはるがいちばんいいですよ。",
     exampleSrc:"A: I want to go to Japan.\nB: If it is Japan (you are talking about), spring is the best.",
     funFact:"なら is unique among conditionals because it responds to context. When someone says something, you can use なら to comment on their topic. It comes from the old copula なり. Unlike たら/ば/と, なら does not require a temporal sequence. You can say the result before the condition happens."},

    {type:"teach", trg:"ごうかく", src:"passing (an exam) / success", pos:"noun", gender:null,
     note:"Kanji: 合格. ごうかくする = to pass an exam.\nOpposite: ふごうかく (failure).",
     example:"A: しけんにごうかくしました！\nB: おめでとう！どりょくがみのりましたね。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! Your efforts bore fruit.",
     funFact:"合格 combines 合 (fit/match) and 格 (standard/grade). Passing entrance exams is one of life's major milestones in Japan. Universities post results publicly, and students check their numbers on boards. The word ごうかく is associated with intense emotions. Shrines sell 合格お守り (passing charms) by the millions during exam season."},

    {type:"teach", trg:"まにあう", src:"to be in time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. まにあわない = to be too late. Kanji: 間に合う.\nでんしゃにまにあう = catch the train.",
     example:"A: いまでればまにあいますか？\nB: はしればまにあうとおもいます。",
     exampleSrc:"A: If I leave now, will I make it in time?\nB: If you run, I think you will make it.",
     funFact:"間に合う literally means 'to fit within the time.' Japanese trains are so punctual that まにあう or まにあわない is a daily concern. The related expression まにあわせ (makeshift/improvised) means something done to 'make it fit in time' without proper preparation."},

    {type:"mc", q:"べんきょうすればごうかくできる means:", opts:["If you study, you can pass","If you passed, you would study","Study because you passed","Pass without studying"], ans:"If you study, you can pass",
     hint:"The ば-conditional creates a hypothetical: if action A happens, result B follows."},

    {type:"teach", trg:"さえ〜ば", src:"if only ~ / as long as ~", pos:"part", gender:null,
     note:"さえ (even/just) + ば-conditional. Emphasizes a minimal condition.\nおかねさえあればなんでもかえる = if only you have money, you can buy anything.",
     example:"A: じかんさえあればりょこうしたいです。\nB: ゴールデンウィークにいきませんか？",
     exampleSrc:"A: If only I had time, I would like to travel.\nB: How about going during Golden Week?",
     funFact:"さえ...ば is a powerful emphasis pattern. さえ means 'even' or 'just,' so the combination means 'if JUST this one condition is met.' It appears in declarations of love in anime: きみさえいれば (if only you are here). In business: のうきさえまもれば (as long as you meet the deadline). The pattern focuses everything on one crucial condition."},

    {type:"teach", trg:"ちりもつもればやまとなる", src:"many a little makes a mickle (proverb)", pos:"noun", gender:null,
     note:"Dust, if it accumulates, becomes a mountain. A famous ば-conditional proverb.\nEncourages small, consistent efforts.",
     example:"A: まいにちすこしずつちょきんしています。\nB: ちりもつもればやまとなるですね。",
     exampleSrc:"A: I am saving a little bit every day.\nB: Small amounts add up to big results.",
     funFact:"This proverb (塵も積もれば山となる) is one of the most beloved Japanese sayings. It uses ば naturally. Japanese culture values steady, incremental effort (こつこつ) over dramatic leaps. The proverb applies to studying kanji, saving money, practicing sports, and building skills. It encourages persistence in the face of slow progress."},

    {type:"teach", trg:"すすめる", src:"to recommend / to suggest / to advance", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 勧める (recommend) or 進める (advance).\nおすすめ = recommendation (noun).",
     example:"A: なにかおすすめのほんはありますか？\nB: このしょうせつがおすすめですよ。",
     exampleSrc:"A: Do you have any book recommendations?\nB: I recommend this novel.",
     funFact:"おすすめ (recommendation) is everywhere in Japan. Restaurants have おすすめメニュー (recommended menu), shops have おすすめしょうひん (recommended products), and websites have おすすめきじ (recommended articles). The お prefix makes it polite. すすめる alone means to recommend or to advance something forward."},

    {type:"tip", title:"The Four Conditionals Compared",
     text:"たら: Most versatile. Past tense + ら.\nIf it rains / When I arrived / If I were rich\n\nば: Hypothetical. Slightly literary.\nIf you study / If dust accumulates (proverbs)\n\nと: Automatic result. Natural laws, directions.\nWhen spring comes / If you turn right\n\nなら: Topic-based. Responds to context.\nSpeaking of Japan... / If that is the case...\n\nKey differences:\nば/たら: Can use for wishes, requests, advice\nと: CANNOT use for wishes, requests, commands\nなら: CANNOT imply temporal sequence\n\nSafe choice: When in doubt, use たら.",
     deepDive:{title:"Which Conditional for Advice?",
      text:"Giving advice often uses ば + いい or たら + いい:\n\nどうすればいいですか = What should I do?\nはやくねたらいいですよ = You should go to bed early.\n\nAnd for topics raised by others:\nにほんにいくなら = If you are going to Japan (you mentioned)...\n\nKey rule: と cannot be used for advice or requests.\nはやくねるといい sounds like a natural consequence, not advice.\n\nFor conditions with requests:\nあめがふったらかさをもっていってください (if it rains, take an umbrella)\nあめがふればかさをもっていってください (also OK but more formal)\nあめがふるとかさをもっていってください (WRONG: と + request is ungrammatical)"}},

    {type:"teach", trg:"かりに", src:"supposing / hypothetically / even if", pos:"adv", gender:null,
     note:"Adds hypothetical emphasis. かりに〜としても = even if we suppose.\nKanji: 仮に. Formal tone.",
     example:"A: かりにたからくじにあたったらなにをしますか？\nB: せかいいっしゅうりょこうをしたいです。",
     exampleSrc:"A: Hypothetically, if you won the lottery, what would you do?\nB: I would like to travel around the world.",
     funFact:"仮に uses 仮 (temporary/provisional), the same kanji in 仮名 (kana, literally 'temporary names' for the phonetic scripts). かりに sets up pure hypotheticals, signaling that what follows is not real. It pairs well with たら and ば. Academic writing uses かりに...としても (even supposing that...) for concessive arguments."},

    {type:"teach", trg:"たからくじ", src:"lottery", pos:"noun", gender:null,
     note:"Kanji: 宝くじ. たから (treasure) + くじ (lottery ticket).\nたからくじにあたる = to win the lottery.",
     example:"A: たからくじをかいましたか？\nB: いちまいだけかいました。ゆめをかうきもちです。",
     exampleSrc:"A: Did you buy a lottery ticket?\nB: I bought just one. It feels like buying a dream.",
     funFact:"宝くじ literally means 'treasure lottery.' Year-end lottery (年末ジャンボ) creates national excitement. People line up at 'lucky' shops known for producing winners. The expression ゆめをかう (to buy a dream) describes buying lottery tickets. Sales proceeds fund public works, so buying a ticket is framed as contributing to society."},

    {type:"fb", s:"いまでれば{1}とおもいます。\n(If you leave now, I think you will make it.)", a:"まにあう", opts:["まにあう","まにあって","まにあえば","まにあわない"], sSrc:"If you leave now, I think you will make it.",
     hint:"The plain dictionary form of the verb meaning 'to be in time,' following the ば-condition."},

    {type:"mc", q:"にほんならはるがいい means:", opts:["If it is Japan, spring is good","Japan is like spring","Spring is Japan","In Japan, I like spring"], ans:"If it is Japan, spring is good",
     hint:"なら responds to a topic: 'Speaking of J... / If we are talking about J....'"},

    {type:"teach", trg:"みのる", src:"to bear fruit / to ripen / (efforts) to pay off", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 実る. どりょくがみのる = efforts bear fruit.\nLiteral: grain ripens. Figurative: work pays off.",
     example:"A: ながねんのどりょくがみのりました。\nB: ほんとうにおめでとうございます。",
     exampleSrc:"A: Years of effort have borne fruit.\nB: Truly, congratulations.",
     funFact:"実る shares its kanji 実 with 実 (mi, fruit) and 事実 (jijitsu, fact). The metaphor of effort ripening like grain is deeply rooted in Japan's agricultural heritage. The proverb みのるほどこうべをたれるいなほかな (the more rice ripens, the more the stalk bows) teaches that success should bring humility, not arrogance."},

    {type:"match", pairs:[{trg:"〜ば",src:"hypothetical condition"},{trg:"〜なら",src:"topic/contextual condition"},{trg:"さえ〜ば",src:"if only / as long as"},{trg:"かりに",src:"hypothetically"}]},

    {type:"fb", s:"じかん{1}あればりょこうしたいです。\n(If only I had time, I would like to travel.)", a:"さえ", opts:["さえ","しか","だけ","まで"], sSrc:"If only I had time, I would like to travel.",
     hint:"The particle meaning 'even/just' that combines with ば to express a minimal condition."},

    {type:"mc", q:"と conditional CANNOT be used for:", opts:["Requests and commands","Natural results","Giving directions","Habitual outcomes"], ans:"Requests and commands",
     hint:"This conditional only works for automatic, natural, or habitual consequences."}
  ]
};
export default BATCH5_L_1;
