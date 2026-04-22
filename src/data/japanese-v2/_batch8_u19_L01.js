// Batch 8 – Unit 19 (B1.1 Conditionals): Proverbs & Set Phrases
const BATCH8_L1 = {
  id:"jav2_u19l_b8_1", title:"ことわざと慣用句(かんようく)", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ことわざと慣用句(かんようく)",
     desc:"Learn Japanese proverbs and set phrases that use conditional structures naturally. These fixed expressions are used constantly in daily speech and writing.",
     goals:["Understand and use common Japanese proverbs","Recognize conditional patterns in set phrases","Apply idiomatic expressions in context"]},

    {type:"teach", trg:"塵(ちり)も積(つ)もれば山(やま)となる", src:"even dust, if piled up, becomes a mountain", pos:"intj", gender:null,
     note:"Equivalent to 'every little bit counts.'\nEncourages steady effort.",
     example:"A: 毎日(まいにち)少(すこ)しずつ貯金(ちょきん)しています。\nB: 塵(ちり)も積(つ)もれば山(やま)となるですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I save a little bit every day.\nB: Every little bit counts, right?\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"塵(ちり)も積(つ)もれば山(やま)となる is one of Japan's most-used proverbs. It combines the conditional ば with a profound truth. Children learn it early to encourage persistence. It appears in textbooks, business speeches, and motivational posters. The imagery is beautiful: even tiny specks of dust can form a mountain."},

    {type:"teach", trg:"なければならない", src:"must / have to (formal obligation)", pos:"verb", gender:null,
     note:"From ない conditional + ならない (will not do).\nDouble negative creates obligation.",
     example:"A: 明日(あした)までに宿題(しゅくだい)を出(だ)さなければなりません。\nB: 頑張(がんば)ってください。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I must submit the homework by tomorrow.\nB: Do your best.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"なければならない is formal obligation. Casual: なきゃ or なくちゃ. The logic is 'if you do not do it, it will not do.' This double-negative obligation is characteristic of Japanese. Business uses なければなりません. Friends say なきゃ. The full form sounds stiff in casual speech."},

    {type:"teach", trg:"すればするほど", src:"the more you do, the more...", pos:"conj", gender:null,
     note:"Conditional + ほど (extent). 勉強(べんきょう)すればするほど = the more you study.\nVery productive pattern.",
     example:"A: 日本語(にほんご)は勉強(べんきょう)すればするほど面白(おもしろ)くなります。\nB: 本当(ほんとう)ですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The more you study Japanese, the more interesting it becomes.\nB: That is true.\nA: How was it?\nB: It was very good.",
     funFact:"The すればするほど pattern is wonderfully versatile. 知(し)れば知(し)るほど (the more you know), 食(た)べれば食(た)べるほど (the more you eat), 考(かんが)えれば考(かんが)えるほど (the more you think). It captures the human experience of deepening engagement with anything."},

    {type:"teach", trg:"喉元(のどもと)過(す)ぎれば熱(あつ)さを忘(わす)れる", src:"once past the throat, one forgets the heat", pos:"intj", gender:null,
     note:"Meaning: people quickly forget hardship once it passes.\nUsed as a warning.",
     example:"A: もう試験(しけん)のことは忘(わす)れました。\nB: 喉元(のどもと)過(す)ぎれば熱(あつ)さを忘(わす)れるですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I have already forgotten about the exam.\nB: 'Once past the throat, one forgets the heat,' right?\nA: When was it?\nB: It was last summer.",
     funFact:"This proverb warns against complacency. In disaster-prone Japan, it is often cited after earthquakes and typhoons when people relax their preparedness. The literal image is swallowing something hot: the pain is intense but quickly forgotten. It encourages ongoing vigilance."},

    {type:"teach", trg:"てもいい", src:"it is okay to / may / is allowed", pos:"verb", gender:null,
     note:"て-form + もいい. Asking permission: してもいいですか？\nAlso: てもかまいません (more formal).",
     example:"A: ここで写真(しゃしん)を撮(と)ってもいいですか？\nB: はい、どうぞ。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: May I take photos here?\nB: Yes, please go ahead.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"てもいいですか is the standard permission phrase. The answer hierarchy: どうぞ (go ahead) > いいですよ (it is fine) > ちょっと... (well, actually..., meaning no). Japanese people rarely say a direct いいえ (no) to permission requests, preferring the indirect ちょっと... with trailing off."},

    {type:"mc", q:"What does 塵(ちり)も積(つ)もれば山(やま)となる mean?", opts:["Every little bit counts","The mountain is always dusty","Dust is stronger than mountains","Mountains produce dust"], ans:"Every little bit counts",
     hint:"This proverb encourages persistence through small, consistent efforts."},

    {type:"teach", trg:"ないとだめ", src:"must / have to (casual)", pos:"verb", gender:null,
     note:"Casual version of なければならない.\nもっと勉強(べんきょう)しないとだめ = you must study more.",
     example:"A: もっと勉強(べんきょう)しないとだめだよ。\nB: わかってるけど、やる気(き)が出(で)ない。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: You must study more.\nB: I know, but I cannot get motivated.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ないとだめ (if you do not do it, it is no good) is the everyday version of なければならない. Even more casual: ないと alone (dropping だめ). The hierarchy: なければなりません (formal) > ないといけない (standard) > ないとだめ (casual) > なきゃ/なくちゃ (very casual)."},

    {type:"teach", trg:"猿(さる)も木(き)から落(お)ちる", src:"even monkeys fall from trees", pos:"intj", gender:null,
     note:"Even experts make mistakes.\nUsed to comfort someone who failed.",
     example:"A: 今日(きょう)大(おお)きなミスをしてしまいました。\nB: 猿(さる)も木(き)から落(お)ちるですよ。気(き)にしないで。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I made a huge mistake.\nB: Even monkeys fall from trees. Do not worry.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"猿(さる)も木(き)から落(お)ちる comforts by normalizing failure. Similar English sayings: 'even Homer nods' or 'everyone makes mistakes.' The image of a monkey, expert tree-climber, falling is humorous and gentle. It is often used when someone skilled makes an uncharacteristic error."},

    {type:"teach", trg:"かもしれない", src:"might / may / perhaps", pos:"verb", gender:null,
     note:"Expresses possibility/uncertainty. 雨(あめ)が降(ふ)るかもしれない = it might rain.\nPolite: かもしれません.",
     example:"A: 明日(あした)雨(あめ)が降(ふ)るかもしれません。\nB: 傘(かさ)を持(も)っていきましょう。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: It might rain tomorrow.\nB: Let us bring umbrellas.\nA: How long did it take?\nB: About two hours.",
     funFact:"かもしれない is essential for Japanese indirect communication. Rather than stating things definitively, Japanese speakers soften with かもしれない. Even when quite certain, saying かもしれない shows humility. It is attached directly to verbs, adjectives, and nouns without particles."},

    {type:"teach", trg:"はずがない", src:"there is no way that / it cannot be", pos:"verb", gender:null,
     note:"Strong denial of possibility. そんなはずがない = that cannot be.\nはず = expectation.",
     example:"A: 彼(かれ)が嘘(うそ)をついた？そんなはずがない。\nB: でも証拠(しょうこ)があります。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: He lied? That cannot be.\nB: But there is evidence.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"はずがない is the strong certainty counterpart to かもしれない (might be). はず means expected outcome. はずがない denies the possibility entirely. そんなはずはない (that should not be the case) is slightly softer. Detectives in Japanese dramas say this constantly when facing plot twists."},

    {type:"teach", trg:"ばかり", src:"only / nothing but / just (recently)", pos:"part", gender:null,
     note:"Indicates excess or recency. 食(た)べてばかりいる = doing nothing but eating.\n来(き)たばかり = just arrived.",
     example:"A: ゲームばかりしないで勉強(べんきょう)しなさい。\nB: はーい。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Stop just playing games and study.\nB: Okaaay.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ばかり has two main uses: excess (ゲームばかり = nothing but games, negative nuance) and recency (来(き)たばかり = just arrived, neutral). Parents commonly scold children with ばかり: テレビばかり見(み)ないで (stop watching nothing but TV). It is one of the most-used particles at B1 level."},

    {type:"fb", s:"日本語(にほんご)は{1}するほど面白(おもしろ)くなります。\n(The more you study Japanese, the more interesting it becomes.)", a:"勉強(べんきょう)すれば", opts:["勉強(べんきょう)すれば","勉強(べんきょう)したら","勉強(べんきょう)して","勉強(べんきょう)すると"], sSrc:"The more you study Japanese, the more interesting it becomes.",
     hint:"This pattern uses the ば conditional form followed by the same verb and ほど."},

    {type:"teach", trg:"わけにはいかない", src:"cannot possibly / it would be wrong to", pos:"verb", gender:null,
     note:"Expresses that something is not acceptable.\nやめるわけにはいかない = I cannot just quit.",
     example:"A: 疲(つか)れましたが、やめるわけにはいきません。\nB: もう少(すこ)し頑張(がんば)りましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am tired, but I cannot just stop.\nB: Let us hang in there a little more.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"わけにはいかない expresses moral or social impossibility, not physical. It means 'the reasoning/logic will not allow it.' 約束(やくそく)を破(やぶ)るわけにはいかない (I cannot break a promise) shows obligation. It is stronger than できない (cannot) because it implies willful responsibility."},

    {type:"teach", trg:"ようにする", src:"to try to / to make sure to", pos:"verb", gender:null,
     note:"Habitual effort. 早(はや)く寝(ね)るようにする = to try to sleep early.\nGoal-oriented effort.",
     example:"A: 毎日(まいにち)運動(うんどう)するようにしています。\nB: えらいですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I try to exercise every day.\nB: That is admirable.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"ようにする expresses ongoing deliberate effort toward a habit. It differs from ようになる (to reach the point of being able to): 日本語(にほんご)が話(はな)せるようになった (I became able to speak Japanese). する = deliberate effort, なる = natural result. Both are essential B1 patterns."},

    {type:"match", pairs:[{trg:"かもしれない",src:"might/perhaps"},{trg:"はずがない",src:"there is no way"},{trg:"ばかり",src:"only/nothing but"},{trg:"わけにはいかない",src:"cannot possibly"},{trg:"ようにする",src:"try to/make sure to"}],
     hint:"Match each grammar expression with its English meaning."},

    {type:"mc", q:"What does 猿(さる)も木(き)から落(お)ちる mean?", opts:["Trees are dangerous for monkeys","Even experts make mistakes","Monkeys are bad at climbing","Do not climb trees"], ans:"Even experts make mistakes",
     hint:"The monkey, a master tree-climber, falling illustrates that no one is perfect."},

    {type:"fb", s:"雨(あめ)が降(ふ)る{1}。傘(かさ)を持(も)っていこう。\n(It might rain. Let us bring an umbrella.)", a:"かもしれない", opts:["かもしれない","はずがない","わけがない","にちがいない"], sSrc:"It might rain. Let us bring an umbrella.",
     hint:"This phrase expresses uncertainty and possibility."},

    {type:"mc", q:"What is the most casual way to say 'must'?", opts:["ないといけない","しなさい","なきゃ / なくちゃ","なければなりません"], ans:"なきゃ / なくちゃ",
     hint:"This is the shortened form used between close friends in everyday speech."}
  ,{type:"fb", s:"試験(しけん)に合格(ごうかく)するためには毎日(まいにち)勉強(べんきょう)し{1}です。",
     a:["なければならない"],
     opts:["なければならない","てもいい","ないとだめ","かもしれない"],
     hint:"In order to pass the exam, you have a formal obligation to study every day. This grammar pattern expresses 'must' or 'have to' in a formal register.",
     sSrc:"To pass the exam, you {1} study every day."}
  ,{type:"match",pairs:[{trg:"塵(ちり)も積(つ)もれば山(やま)となる",src:"even dust, if piled up, becomes a mountain"},{trg:"なければならない",src:"must / have to (formal obligation)"},{trg:"すればするほど",src:"the more you do, the more..."},{trg:"喉元(のどもと)過(す)ぎれば熱(あつ)さを忘(わす)れる",src:"once past the throat, one forgets the heat"},{trg:"てもいい",src:"it is okay to / may / is allowed"},{trg:"ないとだめ",src:"must / have to (casual)"}]},{type:"match",pairs:[{trg:"猿(さる)も木(き)から落(お)ちる",src:"even monkeys fall from trees"}]}]
};
export default BATCH8_L1;
