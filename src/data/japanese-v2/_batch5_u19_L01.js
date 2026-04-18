// Unit 19 Batch 5 Lesson 1: ば条件(じょうけん) (The ば-Conditional & なら)
const BATCH5_L_1 = {
  id:"jav2_u19l_b5_1", title:"ばとなら", icon:"🔀", xp:15, board:true,
  steps:[
    {type:"intro", title:"ばとなら",
     desc:"Complete your conditional toolkit with ば (hypothetical condition) and なら (contextual/topic condition). While たら and と cover most situations, ば adds a literary/proverbial flavor and なら responds to what someone just said. Together, the four conditionals give you full expressive power.",
     goals:["Form and use the ば-conditional correctly","Use なら to respond to stated topics","Choose the right conditional for each situation"]},

    {type:"teach", trg:"〜ば", src:"if ~ (hypothetical condition)", pos:"part", gender:null,
     note:"Group 1: change う to え + ば. Group 2: remove る, add れば.\n行(い)けば = if (one) goes. 食(た)べれば = if (one) eats.",
     example:"A: 勉強(べんきょう)すれば合格(ごうかく)できますよ。\nB: 頑張(がんば)ります！\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: If you study, you can pass.\nB: I will do my best!\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"The ば-conditional is the oldest conditional in Japanese, appearing in 8th-century texts. It has a formal, slightly literary quality. Proverbs love ば: 塵(ちり)も積(つ)もれば山(やま)となる (if dust accumulates, it becomes a mountain). In modern speech, ば is often combined with いい: 行(い)けばいい (it would be good if you go)."},

    {type:"teach", trg:"〜なら", src:"if (it is the case that) / speaking of", pos:"part", gender:null,
     note:"Attaches to plain forms, nouns, and な-adjective stems.\n日本(にほん)なら京都(きょうと)がおすすめです = speaking of Japan, I recommend Kyoto.",
     example:"A: 日本(にほん)に行(い)きたいんですが。\nB: 日本(にほん)なら春(はる)が一番(いちばん)いいですよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I want to go to Japan.\nB: If it is Japan (you are talking about), spring is the best.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"なら is unique among conditionals because it responds to context. When someone says something, you can use なら to comment on their topic. It comes from the old copula なり. Unlike たら/ば/と, なら does not require a temporal sequence. You can say the result before the condition happens."},

    {type:"teach", trg:"合格(ごうかく)", src:"passing (an exam) / success", pos:"noun", gender:null,
     note:"Kanji: 合格(ごうかく). 合格(ごうかく)する = to pass an exam.\nOpposite: 不合格(ふごうかく) (failure).",
     example:"A: 試験(しけん)に合格(ごうかく)しました！\nB: おめでとう！努力(どりょく)が実(みの)りましたね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! Your efforts bore fruit.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"合格(ごうかく) combines 合(ごう) (fit/match) and 格(かく) (standard/grade). Passing entrance exams is one of life's major milestones in Japan. Universities post results publicly, and students check their numbers on boards. The word 合格(ごうかく) is associated with intense emotions. Shrines sell 合格(ごうかく)お守(まも)り (passing charms) by the millions during exam season."},

    {type:"teach", trg:"間(ま)に合(あ)う", src:"to be in time / to make it", pos:"verb", gender:null,
     note:"Group 1 verb. 間(ま)に合(あ)わない = to be too late. Kanji: 間(ま)に合(あ)う.\n電車(でんしゃ)に間(ま)に合(あ)う = catch the train.",
     example:"A: 今(いま)出(で)れば間(ま)に合(あ)いますか？\nB: 走(はし)れば間(ま)に合(あ)うと思(おも)います。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: If I leave now, will I make it in time?\nB: If you run, I think you will make it.\nA: How was it?\nB: It was very good.",
     funFact:"間(ま)に合(あ)う literally means 'to fit within the time.' Japanese trains are so punctual that 間(ま)に合(あ)う or 間(ま)に合(あ)わない is a daily concern. The related expression 間(ま)に合(あ)わせ (makeshift/improvised) means something done to 'make it fit in time' without proper preparation."},

    {type:"mc", q:"勉強(べんきょう)すれば合格(ごうかく)できる means:", opts:["If you study, you can pass","If you passed, you would study","Study because you passed","Pass without studying"], ans:"If you study, you can pass",
     hint:"The ば-conditional creates a hypothetical: if action A happens, result B follows."},

    {type:"teach", trg:"さえ〜ば", src:"if only ~ / as long as ~", pos:"part", gender:null,
     note:"さえ (even/just) + ば-conditional. Emphasizes a minimal condition.\nお金(かね)さえあれば何(なん)でも買(か)える = if only you have money, you can buy anything.",
     example:"A: 時間(じかん)さえあれば旅行(りょこう)したいです。\nB: ゴールデンウィークに行(い)きませんか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: If only I had time, I would like to travel.\nB: How about going during Golden Week?\nA: When was it?\nB: It was last summer.",
     funFact:"さえ...ば is a powerful emphasis pattern. さえ means 'even' or 'just,' so the combination means 'if JUST this one condition is met.' It appears in declarations of love in anime: 君(きみ)さえいれば (if only you are here). In business: 納期(のうき)さえ守(まも)れば (as long as you meet the deadline). The pattern focuses everything on one crucial condition."},

    {type:"teach", trg:"塵(ちり)も積(つ)もれば山(やま)となる", src:"many a little makes a mickle (proverb)", pos:"noun", gender:null,
     note:"Dust, if it accumulates, becomes a mountain. A famous ば-conditional proverb.\nEncourages small, consistent efforts.",
     example:"A: 毎日(まいにち)少(すこ)しずつ貯金(ちょきん)しています。\nB: 塵(ちり)も積(つ)もれば山(やま)となるですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I am saving a little bit every day.\nB: Small amounts add up to big results.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"This proverb (塵(ちり)も積(つ)もれば山(やま)となる) is one of the most beloved Japanese sayings. It uses ば naturally. Japanese culture values steady, incremental effort (こつこつ) over dramatic leaps. The proverb applies to studying kanji, saving money, practicing sports, and building skills. It encourages persistence in the face of slow progress."},

    {type:"teach", trg:"勧(すす)める", src:"to recommend / to suggest / to advance", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 勧(すす)める (recommend) or 進(すす)める (advance).\nおすすめ = recommendation (noun).",
     example:"A: 何(なに)かおすすめの本(ほん)はありますか？\nB: この小説(しょうせつ)がおすすめですよ。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Do you have any book recommendations?\nB: I recommend this novel.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"おすすめ (recommendation) is everywhere in Japan. Restaurants have おすすめメニュー (recommended menu), shops have おすすめ商品(しょうひん) (recommended products), and websites have おすすめ記事(きじ) (recommended articles). The お prefix makes it polite. 勧(すす)める alone means to recommend or to advance something forward."},

    {type:"tip", title:"The Four Conditionals Compared",
     text:"たら: Most versatile. Past tense + ら.\nIf it rains / When I arrived / If I were rich\n\nば: Hypothetical. Slightly literary.\nIf you study / If dust accumulates (proverbs)\n\nと: Automatic result. Natural laws, directions.\nWhen spring comes / If you turn right\n\nなら: Topic-based. Responds to context.\nSpeaking of Japan... / If that is the case...\n\nKey differences:\nば/たら: Can use for wishes, requests, advice\nと: CANNOT use for wishes, requests, commands\nなら: CANNOT imply temporal sequence\n\nSafe choice: When in doubt, use たら.",
     deepDive:{title:"Which Conditional for Advice?",
      text:"Giving advice often uses ば + いい or たら + いい:\n\nどうすればいいですか = What should I do?\n早(はや)く寝(ね)たらいいですよ = You should go to bed early.\n\nAnd for topics raised by others:\n日本(にほん)に行(い)くなら = If you are going to Japan (you mentioned)...\n\nKey rule: と cannot be used for advice or requests.\n早(はや)く寝(ね)るといい sounds like a natural consequence, not advice.\n\nFor conditions with requests:\n雨(あめ)が降(ふ)ったら傘(かさ)を持(も)っていってください (if it rains, take an umbrella)\n雨(あめ)が降(ふ)れば傘(かさ)を持(も)っていってください (also OK but more formal)\n雨(あめ)が降(ふ)ると傘(かさ)を持(も)っていってください (WRONG: と + request is ungrammatical)"}},

    {type:"teach", trg:"仮(かり)に", src:"supposing / hypothetically / even if", pos:"adv", gender:null,
     note:"Adds hypothetical emphasis. 仮(かり)に〜としても = even if we suppose.\nKanji: 仮(かり)に. Formal tone.",
     example:"A: 仮(かり)に宝(たから)くじに当(あ)たったら何(なに)をしますか？\nB: 世界(せかい)一周(いっしゅう)旅行(りょこう)をしたいです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Hypothetically, if you won the lottery, what would you do?\nB: I would like to travel around the world.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"仮(かり)に uses 仮(かり) (temporary/provisional), the same kanji in 仮名(かな) (kana, literally 'temporary names' for the phonetic scripts). 仮(かり)に sets up pure hypotheticals, signaling that what follows is not real. It pairs well with たら and ば. Academic writing uses 仮(かり)に...としても (even supposing that...) for concessive arguments."},

    {type:"teach", trg:"宝(たから)くじ", src:"lottery", pos:"noun", gender:null,
     note:"Kanji: 宝(たから)くじ. 宝(たから) (treasure) + くじ (lottery ticket).\n宝(たから)くじに当(あ)たる = to win the lottery.",
     example:"A: 宝(たから)くじを買(か)いましたか？\nB: 一枚(いちまい)だけ買(か)いました。夢(ゆめ)を買(か)う気持(きも)ちです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Did you buy a lottery ticket?\nB: I bought just one. It feels like buying a dream.\nA: How long did it take?\nB: About two hours.",
     funFact:"宝(たから)くじ literally means 'treasure lottery.' Year-end lottery (年末(ねんまつ)ジャンボ) creates national excitement. People line up at 'lucky' shops known for producing winners. The expression 夢(ゆめ)を買(か)う (to buy a dream) describes buying lottery tickets. Sales proceeds fund public works, so buying a ticket is framed as contributing to society."},

    {type:"fb", s:"今(いま)出(で)れば{1}と思(おも)います。\n(If you leave now, I think you will make it.)", a:"間(ま)に合(あ)う", opts:["間(ま)に合(あ)う","間(ま)に合(あ)って","間(ま)に合(あ)えば","間(ま)に合(あ)わない"], sSrc:"If you leave now, I think you will make it.",
     hint:"The plain dictionary form of the verb meaning 'to be in time,' following the ば-condition."},

    {type:"mc", q:"日本(にほん)なら春(はる)がいい means:", opts:["If it is Japan, spring is good","Japan is like spring","Spring is Japan","In Japan, I like spring"], ans:"If it is Japan, spring is good",
     hint:"なら responds to a topic: 'Speaking of J... / If we are talking about J....'"},

    {type:"teach", trg:"実(みの)る", src:"to bear fruit / to ripen / (efforts) to pay off", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 実(みの)る. 努力(どりょく)が実(みの)る = efforts bear fruit.\nLiteral: grain ripens. Figurative: work pays off.",
     example:"A: 長年(ながねん)の努力(どりょく)が実(みの)りました。\nB: 本当(ほんとう)におめでとうございます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Years of effort have borne fruit.\nB: Truly, congratulations.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"実(みの)る shares its kanji 実 with 実(み) (fruit) and 事実(じじつ) (fact). The metaphor of effort ripening like grain is deeply rooted in Japan's agricultural heritage. The proverb 実(みの)るほど頭(こうべ)を垂(た)れる稲穂(いなほ)かな (the more rice ripens, the more the stalk bows) teaches that success should bring humility, not arrogance."},

    {type:"match", pairs:[{trg:"〜ば",src:"hypothetical condition"},{trg:"〜なら",src:"topic/contextual condition"},{trg:"さえ〜ば",src:"if only / as long as"},{trg:"仮(かり)に",src:"hypothetically"}]},

    {type:"fb", s:"時間(じかん){1}あれば旅行(りょこう)したいです。\n(If only I had time, I would like to travel.)", a:"さえ", opts:["さえ","しか","だけ","まで"], sSrc:"If only I had time, I would like to travel.",
     hint:"The particle meaning 'even/just' that combines with ば to express a minimal condition."},

    {type:"mc", q:"と conditional CANNOT be used for:", opts:["Requests and commands","Natural results","Giving directions","Habitual outcomes"], ans:"Requests and commands",
     hint:"This conditional only works for automatic, natural, or habitual consequences."}
  ,{type:"match",pairs:[{trg:"合格(ごうかく)",src:"passing (an exam) / success"},{trg:"塵(ちり)も積(つ)もれば山(やま)となる",src:"many a little makes a mickle (proverb)"},{trg:"勧(すす)める",src:"to recommend / to suggest / to advance"},{trg:"宝(たから)くじ",src:"lottery"},{trg:"実(みの)る",src:"to bear fruit / to ripen / (efforts) to pay off"}]}]
};
export default BATCH5_L_1;
