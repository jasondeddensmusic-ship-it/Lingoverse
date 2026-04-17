// Unit 14 Expansion L4. Expressing Preferences
// Comparing things, stating preferences, giving reasons.

const LESSON_4 = {id:"jav2_u14l4", title:"すきなもの", icon:"❤️", xp:15, board:true, steps:[
  {type:"intro", title:"すきなもの",
   desc:"Express preferences, compare options, and explain why you like or dislike things. Knowing how to say 'I prefer X over Y' and give reasons makes conversations much richer and more personal.",
   goals:["Compare using より (than) and のほうが (the one that is more)","Express preferences with すき/きらい and とおもう","Give reasons for preferences with から (because)"]},

  {type:"teach", trg:"〜より", src:"more than ~ / compared to ~", pos:"part", gender:null,
   note:"X より Y のほうが = Y is more ... than X.\nThe item after より is the lesser one.",
   example:"A: なつとふゆとどちらがすきですか？\nB: ふゆよりなつのほうがすきです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Which do you like more, summer or winter?\nB: I like summer more than winter.\nA: When was it?\nB: It was last summer.",
   funFact:"より is the comparison particle. The word order is opposite to English: in Japanese, the thing being compared against comes first. ふゆよりなつ means 'summer, compared to winter.' This reversed order trips up many learners but becomes natural with practice."},

  {type:"teach", trg:"〜のほうが", src:"(this one) is more ~", pos:"part", gender:null,
   note:"Marks the preferred or superior item in a comparison.\nX より Y のほうが + adjective.",
   example:"A: コーヒーとおちゃとどちらがすきですか？\nB: おちゃのほうがすきです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Which do you like more, coffee or tea?\nB: I like tea more.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"ほう means 'direction' or 'side.' So のほうが literally means 'the side of.' Choosing 'the side of tea' is a beautifully indirect way to express preference. You can also omit より and just say おちゃのほうがすきです without naming what you are comparing against."},

  {type:"teach", trg:"どちら", src:"which (of two)", pos:"pron", gender:null,
   note:"Polite form of どっち. Used for choosing between two options.\nどちらがすき？ = which do you prefer?",
   example:"A: にくとさかなとどちらがすきですか？\nB: にくのほうがすきです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: Which do you like more, meat or fish?\nB: I like meat more.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"どちら is the polite form of どっち (which one). The pattern 'AとBとどちらが...' is the standard comparison question. For three or more options, use なにがいちばん... (what is the most...) instead. どちらも (both) is useful when you cannot choose."},

  {type:"mc", q:"ふゆよりなつのほうがすき means:", opts:["I like winter more than summer","I like summer more than winter","I like both equally","I do not like either"], ans:"I like summer more than winter",
   hint:"The item before より is the lesser preference; のほうが marks the preferred one."},

  {type:"teach", trg:"いちばん", src:"number one / the most", pos:"adv", gender:null,
   note:"Used for superlatives. なにがいちばんすき？ = What do you like most?\nKanji: 一番.",
   example:"A: にほんりょうりでなにがいちばんすきですか？\nB: ラーメンがいちばんすきです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: What Japanese food do you like the most?\nB: I like ramen the most.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"一番 literally means 'number one.' It turns any adjective into a superlative: いちばんおおきい (biggest), いちばんやすい (cheapest), いちばんおもしろい (most interesting). Unlike English, there is no special adjective form; just add いちばん before the regular adjective."},

  {type:"teach", trg:"〜から", src:"because ~", pos:"part", gender:null,
   note:"Sentence + から = because. Gives the reason for something.\nReason comes BEFORE から.",
   example:"A: どうしてにほんごをべんきょうしていますか？\nB: にほんのぶんかがすきだからです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Why are you studying Japanese?\nB: Because I like Japanese culture.\nA: How long did it take?\nB: About two hours.",
   funFact:"から (because) puts the reason before the result, opposite to English 'because.' あついからまどをあけた (it was hot, so I opened the window). This reason-first structure is natural in Japanese. The formal equivalent is ので, which sounds softer and is preferred in polite settings."},

  {type:"teach", trg:"〜ので", src:"because ~ (softer/polite)", pos:"part", gender:null,
   note:"Softer, more polite version of から. Preferred in formal speech.\nPlain form + ので.",
   example:"A: あめがふっているので、でかけたくないです。\nB: わたしもです。いえにいましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Because it is raining, I do not want to go out.\nB: Me neither. Let us stay home.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"ので sounds more objective and polite than から. In business Japanese, ので is strongly preferred. から can sound blunt or like an excuse. The grammatical difference: から follows plain forms directly, while ので needs な after nouns and な-adjectives (しずかなので, not しずかので)."},

  {type:"fb", s:"コーヒー{1}おちゃのほうがすきです。\n(I like tea more than coffee.)", a:"より", opts:["より","まで","から","ので"], sSrc:"I like tea more than coffee.",
   hint:"The comparison particle meaning 'more than' or 'compared to.'"},

  {type:"teach", trg:"にがて", src:"not good with / weak point", pos:"adj", gender:null,
   note:"な-adjective for discomfort or inability. Softer than きらい (hate).\nKanji: 苦手.",
   example:"A: からいたべものはにがてです。\nB: じゃ、あまいものはどうですか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: I am not good with spicy food.\nB: Then how about sweet things?\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"にがて is the polite alternative to きらい for expressing dislike. Saying きらい (I hate it) about food, people, or activities can sound harsh. にがて (I am not good with it) implies personal limitation rather than judgment. It is much safer in social situations."},

  {type:"teach", trg:"きにいる", src:"to take a liking to / to like (after trying)", pos:"verb", gender:null,
   note:"き (spirit) + にいる (to fit). Something fits your spirit.\nきにいった = liked it. Kanji: 気に入る.",
   example:"A: あたらしいレストランはどうでしたか？\nB: とてもきにいりました。またいきたいです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: How was the new restaurant?\nB: I really liked it. I want to go again.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"気に入る literally means 'enters one's spirit.' It describes an immediate, personal connection with something you have experienced. The past form きにいった is very common: このうたがきにいった (I took a liking to this song). It implies discovery and pleasant surprise."},

  {type:"mc", q:"にほんりょうりでなにがいちばんすきですか asks:", opts:["Do you like Japanese food?","What Japanese food do you like most?","Have you tried Japanese food?","Can you cook Japanese food?"], ans:"What Japanese food do you like most?",
   hint:"いちばん means 'most/number one' and creates superlative questions."},

  {type:"teach", trg:"けっこう", src:"quite / fairly / unexpectedly", pos:"adv", gender:null,
   note:"Adds moderate emphasis. けっこうおいしい = quite delicious.\nAlso means 'fine/enough' in refusals.",
   example:"A: このみせ、けっこうおいしいとおもいませんか？\nB: たしかに、けっこういいですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: Do you not think this restaurant is quite good?\nB: Indeed, it is fairly good.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"けっこう has two very different uses. As an adverb: けっこうおいしい (quite delicious). As a polite refusal: もうけっこうです (no more, thank you / I have had enough). The refusal use confused many learners who only know the 'quite' meaning. Context is key."},

  {type:"teach", trg:"どちらかというと", src:"if I had to choose / if anything", pos:"part", gender:null,
   note:"A hedging expression for mild preferences.\nSoftens the comparison.",
   example:"A: にくとさかな、どちらがすきですか？\nB: どちらかというと、さかなのほうがすきです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: Meat or fish, which do you like?\nB: If I had to choose, I like fish more.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"どちらかというと is the polite, non-committal way to state a preference. It avoids appearing too decisive or opinionated. Literally 'if one were to say one or the other,' it beautifully captures the Japanese tendency to qualify statements and avoid absolutes."},

  {type:"fb", s:"にほんりょうりで{1}がいちばんすきですか？\n(What Japanese food do you like the most?)", a:"なに", opts:["なに","どこ","だれ","いつ"], sSrc:"What Japanese food do you like the most?",
   hint:"The question word for 'what' used with いちばん for superlatives."},

  {type:"match", pairs:[{trg:"より",src:"more than"},{trg:"のほうが",src:"(this one) is more"},{trg:"いちばん",src:"the most"},{trg:"どちら",src:"which of two"}]},

  {type:"match", pairs:[{trg:"から",src:"because"},{trg:"ので",src:"because (polite)"},{trg:"にがて",src:"not good with"},{trg:"きにいる",src:"take a liking to"}]},

  {type:"mc", q:"どちらかというと means:", opts:["Definitely","If I had to choose","I do not know","I disagree"], ans:"If I had to choose",
   hint:"A hedging phrase used before stating a mild preference."},

  {type:"fb", s:"あめがふっている{1}、でかけたくないです。\n(Because it is raining, I do not want to go out.)", a:"ので", opts:["ので","から","のに","けど"], sSrc:"Because it is raining, I do not want to go out.",
   hint:"The polite, softer version of 'because' preferred in formal speech."},

  {type:"tip", title:"Comparisons and Preferences",
   text:"Comparing two:\nAよりBのほうが + adjective\nふゆよりなつのほうがすき (like summer more than winter)\n\nSuperlative:\nなにがいちばん + adjective\nなにがいちばんすき？ (What do you like most?)\n\nGiving reasons:\n...からです (because..., direct)\n...のです (because..., polite)\n\nSoftening:\nどちらかというと (if I had to choose)\nけっこう (quite/fairly)",
   deepDive:{title:"から vs ので",
    text:"Both mean 'because' but differ in tone:\n\nから: direct, personal, sometimes blunt\nつかれたからねる。(I am tired, so I will sleep.)\nSounds like a personal decision or excuse.\n\nので: objective, polite, explanatory\nつかれたのでねます。(Because I am tired, I will sleep.)\nSounds like a reasonable explanation.\n\nIn business: always ので.\nWith friends: either is fine.\nIn formal writing: ので or ため.\n\nAfter な-adjectives and nouns, ので needs な:\nしずかなので (because it is quiet)\nにほんじんなので (because I am Japanese)"}},
]};
export default LESSON_4;
