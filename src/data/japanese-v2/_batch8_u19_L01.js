// Batch 8 – Unit 19 (B1.1 Conditionals): Proverbs & Set Phrases
const BATCH8_L1 = {
  id:"jav2_u19l_b8_1", title:"ことわざとかんようく", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ことわざとかんようく",
     desc:"Learn Japanese proverbs and set phrases that use conditional structures naturally. These fixed expressions are used constantly in daily speech and writing.",
     goals:["Understand and use common Japanese proverbs","Recognize conditional patterns in set phrases","Apply idiomatic expressions in context"]},

    {type:"teach", trg:"ちりもつもればやまとなる", src:"even dust, if piled up, becomes a mountain", pos:"intj", gender:null,
     note:"Equivalent to 'every little bit counts.'\nEncourages steady effort.",
     example:"A: まいにちすこしずつちょきんしています。\nB: ちりもつもればやまとなるですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I save a little bit every day.\nB: Every little bit counts, right?\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"ちりもつもればやまとなる is one of Japan's most-used proverbs. It combines the conditional ば with a profound truth. Children learn it early to encourage persistence. It appears in textbooks, business speeches, and motivational posters. The imagery is beautiful: even tiny specks of dust can form a mountain."},

    {type:"teach", trg:"なければならない", src:"must / have to (formal obligation)", pos:"verb", gender:null,
     note:"From ない conditional + ならない (will not do).\nDouble negative creates obligation.",
     example:"A: あしたまでにしゅくだいをださなければなりません。\nB: がんばってください。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I must submit the homework by tomorrow.\nB: Do your best.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"なければならない is formal obligation. Casual: なきゃ or なくちゃ. The logic is 'if you do not do it, it will not do.' This double-negative obligation is characteristic of Japanese. Business uses なければなりません. Friends say なきゃ. The full form sounds stiff in casual speech."},

    {type:"teach", trg:"すればするほど", src:"the more you do, the more...", pos:"conj", gender:null,
     note:"Conditional + ほど (extent). べんきょうすればするほど = the more you study.\nVery productive pattern.",
     example:"A: にほんごはべんきょうすればするほどおもしろくなります。\nB: ほんとうですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The more you study Japanese, the more interesting it becomes.\nB: That is true.\nA: How was it?\nB: It was very good.",
     funFact:"The すればするほど pattern is wonderfully versatile. しればしるほど (the more you know), たべればたべるほど (the more you eat), かんがえればかんがえるほど (the more you think). It captures the human experience of deepening engagement with anything."},

    {type:"teach", trg:"のどもとすぎればあつさをわすれる", src:"once past the throat, one forgets the heat", pos:"intj", gender:null,
     note:"Meaning: people quickly forget hardship once it passes.\nUsed as a warning.",
     example:"A: もうしけんのことはわすれました。\nB: のどもとすぎればあつさをわすれるですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I have already forgotten about the exam.\nB: 'Once past the throat, one forgets the heat,' right?\nA: When was it?\nB: It was last summer.",
     funFact:"This proverb warns against complacency. In disaster-prone Japan, it is often cited after earthquakes and typhoons when people relax their preparedness. The literal image is swallowing something hot: the pain is intense but quickly forgotten. It encourages ongoing vigilance."},

    {type:"teach", trg:"てもいい", src:"it is okay to / may / is allowed", pos:"verb", gender:null,
     note:"て-form + もいい. Asking permission: してもいいですか？\nAlso: てもかまいません (more formal).",
     example:"A: ここでしゃしんをとってもいいですか？\nB: はい、どうぞ。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: May I take photos here?\nB: Yes, please go ahead.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"てもいいですか is the standard permission phrase. The answer hierarchy: どうぞ (go ahead) > いいですよ (it is fine) > ちょっと... (well, actually..., meaning no). Japanese people rarely say a direct いいえ (no) to permission requests, preferring the indirect ちょっと... with trailing off."},

    {type:"mc", q:"What does ちりもつもればやまとなる mean?", opts:["Every little bit counts","The mountain is always dusty","Dust is stronger than mountains","Mountains produce dust"], ans:"Every little bit counts",
     hint:"This proverb encourages persistence through small, consistent efforts."},

    {type:"teach", trg:"ないとだめ", src:"must / have to (casual)", pos:"verb", gender:null,
     note:"Casual version of なければならない.\nもっとべんきょうしないとだめ = you must study more.",
     example:"A: もっとべんきょうしないとだめだよ。\nB: わかってるけど、やるきがでない。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: You must study more.\nB: I know, but I cannot get motivated.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ないとだめ (if you do not do it, it is no good) is the everyday version of なければならない. Even more casual: ないと alone (dropping だめ). The hierarchy: なければなりません (formal) > ないといけない (standard) > ないとだめ (casual) > なきゃ/なくちゃ (very casual)."},

    {type:"teach", trg:"さるもきからおちる", src:"even monkeys fall from trees", pos:"intj", gender:null,
     note:"Even experts make mistakes.\nUsed to comfort someone who failed.",
     example:"A: きょうだいなミスをしてしまいました。\nB: さるもきからおちるですよ。きにしないで。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I made a huge mistake.\nB: Even monkeys fall from trees. Do not worry.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"さるもきからおちる comforts by normalizing failure. Similar English sayings: 'even Homer nods' or 'everyone makes mistakes.' The image of a monkey, expert tree-climber, falling is humorous and gentle. It is often used when someone skilled makes an uncharacteristic error."},

    {type:"teach", trg:"かもしれない", src:"might / may / perhaps", pos:"verb", gender:null,
     note:"Expresses possibility/uncertainty. あめがふるかもしれない = it might rain.\nPolite: かもしれません.",
     example:"A: あしたあめがふるかもしれません。\nB: かさをもっていきましょう。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: It might rain tomorrow.\nB: Let us bring umbrellas.\nA: How long did it take?\nB: About two hours.",
     funFact:"かもしれない is essential for Japanese indirect communication. Rather than stating things definitively, Japanese speakers soften with かもしれない. Even when quite certain, saying かもしれない shows humility. It is attached directly to verbs, adjectives, and nouns without particles."},

    {type:"teach", trg:"はずがない", src:"there is no way that / it cannot be", pos:"verb", gender:null,
     note:"Strong denial of possibility. そんなはずがない = that cannot be.\nはず = expectation.",
     example:"A: かれがうそをついた？そんなはずがない。\nB: でもしょうこがあります。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: He lied? That cannot be.\nB: But there is evidence.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"はずがない is the strong certainty counterpart to かもしれない (might be). はず means expected outcome. はずがない denies the possibility entirely. そんなはずはない (that should not be the case) is slightly softer. Detectives in Japanese dramas say this constantly when facing plot twists."},

    {type:"teach", trg:"ばかり", src:"only / nothing but / just (recently)", pos:"part", gender:null,
     note:"Indicates excess or recency. たべてばかりいる = doing nothing but eating.\nきたばかり = just arrived.",
     example:"A: ゲームばかりしないでべんきょうしなさい。\nB: はーい。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Stop just playing games and study.\nB: Okaaay.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ばかり has two main uses: excess (ゲームばかり = nothing but games, negative nuance) and recency (きたばかり = just arrived, neutral). Parents commonly scold children with ばかり: テレビばかりみないで (stop watching nothing but TV). It is one of the most-used particles at B1 level."},

    {type:"fb", s:"にほんごは{1}するほどおもしろくなります。\n(The more you study Japanese, the more interesting it becomes.)", a:"べんきょうすれば", opts:["べんきょうすれば","べんきょうしたら","べんきょうして","べんきょうすると"], sSrc:"The more you study Japanese, the more interesting it becomes.",
     hint:"This pattern uses the ば conditional form followed by the same verb and ほど."},

    {type:"teach", trg:"わけにはいかない", src:"cannot possibly / it would be wrong to", pos:"verb", gender:null,
     note:"Expresses that something is not acceptable.\nやめるわけにはいかない = I cannot just quit.",
     example:"A: つかれましたが、やめるわけにはいきません。\nB: もうすこしがんばりましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am tired, but I cannot just stop.\nB: Let us hang in there a little more.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"わけにはいかない expresses moral or social impossibility, not physical. It means 'the reasoning/logic will not allow it.' やくそくをやぶるわけにはいかない (I cannot break a promise) shows obligation. It is stronger than できない (cannot) because it implies willful responsibility."},

    {type:"teach", trg:"ようにする", src:"to try to / to make sure to", pos:"verb", gender:null,
     note:"Habitual effort. はやくねるようにする = to try to sleep early.\nGoal-oriented effort.",
     example:"A: まいにちうんどうするようにしています。\nB: えらいですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I try to exercise every day.\nB: That is admirable.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"ようにする expresses ongoing deliberate effort toward a habit. It differs from ようになる (to reach the point of being able to): にほんごがはなせるようになった (I became able to speak Japanese). する = deliberate effort, なる = natural result. Both are essential B1 patterns."},

    {type:"match", pairs:[{trg:"かもしれない",src:"might/perhaps"},{trg:"はずがない",src:"there is no way"},{trg:"ばかり",src:"only/nothing but"},{trg:"わけにはいかない",src:"cannot possibly"},{trg:"ようにする",src:"try to/make sure to"}],
     hint:"Match each grammar expression with its English meaning."},

    {type:"mc", q:"What does さるもきからおちる mean?", opts:["Even experts make mistakes","Monkeys are bad at climbing","Do not climb trees","Trees are dangerous for monkeys"], ans:"Even experts make mistakes",
     hint:"The monkey, a master tree-climber, falling illustrates that no one is perfect."},

    {type:"fb", s:"あめがふる{1}。かさをもっていこう。\n(It might rain. Let us bring an umbrella.)", a:"かもしれない", opts:["かもしれない","はずがない","わけがない","にちがいない"], sSrc:"It might rain. Let us bring an umbrella.",
     hint:"This phrase expresses uncertainty and possibility."},

    {type:"mc", q:"What is the most casual way to say 'must'?", opts:["なきゃ / なくちゃ","なければなりません","ないといけない","しなさい"], ans:"なきゃ / なくちゃ",
     hint:"This is the shortened form used between close friends in everyday speech."}
  ]
};
export default BATCH8_L1;
