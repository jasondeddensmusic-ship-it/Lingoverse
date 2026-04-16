// Unit 23 Batch 2 Lesson 3: けいしきめいし (Formal Nouns in Nominalization)
const BATCH2_L_3 = {
  id:"jav2_u23l_b2_3", title:"けいしきめいし", icon:"📐", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいしきめいし",
     desc:"Formal nouns (形式名詞) are abstract nouns used within grammatical patterns rather than for their literal meaning. Patterns like ところ, わけ, and はず expand your ability to express timing, reasoning, and expectations. These are essential for natural B1-level communication.",
     goals:["Use ところ for timing expressions","Use わけ for reasoning and explanation","Use はず for expectations and assumptions"]},

    {type:"teach", trg:"〜ところ", src:"(just) about to / in the middle of / just finished", pos:"part", gender:null,
     note:"Timing marker. Dictionary form + ところ = about to.\nている + ところ = in the middle of.\nた + ところ = just did.",
     example:"A: いまちょうどでかけるところです。\nB: じゃあ、あとでれんらくしますね。",
     exampleSrc:"A: I am just about to go out now.\nB: Then I will contact you later.",
     funFact:"ところ literally means 'place,' but as a formal noun it marks a point in time. The three forms create a mini-timeline: するところ (about to), しているところ (doing now), したところ (just did). This grammatical use of ところ is one of the clearest examples of how Japanese repurposes concrete nouns for abstract grammar."},

    {type:"teach", trg:"〜わけ", src:"the reason is / it means that / no wonder", pos:"part", gender:null,
     note:"Explains underlying reasons. わけがない = there is no way.\nわけではない = it does not mean that.",
     example:"A: だから、おくれたわけですね。\nB: はい、でんしゃがとまっていたんです。",
     exampleSrc:"A: So that is the reason you were late.\nB: Yes, the train had stopped.",
     funFact:"わけ literally means 'reason' or 'meaning.' As a formal noun, it adds explanatory nuance. わけがない (there is no way) is one of the strongest denial patterns. わけにはいかない (cannot do, for social/moral reasons) adds obligation. These わけ patterns are tested heavily on JLPT N3 and N2."},

    {type:"teach", trg:"〜はず", src:"should be / is expected to / supposedly", pos:"part", gender:null,
     note:"Expresses expectations based on evidence or logic.\nはずがない = there is no way (emphatic denial).",
     example:"A: かれはもうついているはずです。\nB: そうですね。さんじにしゅっぱつしましたから。",
     exampleSrc:"A: He should have arrived by now.\nB: Right, because he departed at three.",
     funFact:"はず comes from an archery term meaning the notch on an arrow. Just as an arrow should hit its target, はず indicates what logically should happen. はずだ (should be) vs. はずがない (no way it could be) form a pair. Unlike べき (moral obligation), はず expresses logical expectation based on facts."},

    {type:"mc", q:"いまでかけるところです means:", opts:["I am just about to go out","I just came back","I am in the middle of leaving","I decided to go out"], ans:"I am just about to go out",
     hint:"Dictionary form + ところ marks the moment right before an action begins."},

    {type:"teach", trg:"〜わけにはいかない", src:"cannot do ~ (for moral/social reasons)", pos:"part", gender:null,
     note:"Express inability due to social obligation, not ability.\nやめるわけにはいかない = I cannot quit (duty prevents it).",
     example:"A: つかれていてもやすむわけにはいきません。\nB: しめきりがちかいですからね。",
     exampleSrc:"A: Even though I am tired, I cannot take a day off.\nB: Because the deadline is close.",
     funFact:"わけにはいかない literally means 'it cannot go to the reason of doing X.' Unlike できない (physically unable), this pattern implies you could do it but should not. Social expectations, duty, or morality prevent you. It captures a very Japanese concept: doing what you must, regardless of personal desire."},

    {type:"teach", trg:"しめきり", src:"deadline / closing date", pos:"noun", gender:null,
     note:"Kanji: 締め切り. しめきりをまもる = to meet a deadline.\nしめきりにまにあう = to make the deadline.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.",
     funFact:"締め切り combines 締める (to tighten/close) and 切り (cut). A deadline 'cuts off and closes' the period for submission. Japanese work culture takes しめきり extremely seriously. Missing a deadline damages trust and reputation. The phrase ぎりぎりセーフ (barely safe/just in time) describes the relief of meeting a tight しめきり."},

    {type:"teach", trg:"〜つもり", src:"intend to / plan to", pos:"part", gender:null,
     note:"Dictionary form + つもり = intention.\nた + つもり = thought I did (but maybe did not).",
     example:"A: あしたはやくおきるつもりです。\nB: めざましをセットしましたか？",
     exampleSrc:"A: I intend to wake up early tomorrow.\nB: Did you set an alarm?",
     funFact:"つもり originally meant 'accumulation' (積もり). The metaphorical shift to 'intention' suggests accumulated thought leading to a plan. た + つもり is tricky: いったつもり (thought I said it) implies the action may not have been successful. This subtle pattern catches many learners off guard."},

    {type:"fb", s:"だから、おくれた{1}ですね。\n(So that is the reason you were late.)", a:"わけ", opts:["わけ","はず","ところ","つもり"], sSrc:"So that is the reason you were late.",
     hint:"The formal noun that explains an underlying reason or meaning behind a situation."},

    {type:"teach", trg:"〜ようにする", src:"to make sure to ~ / to try to ~", pos:"part", gender:null,
     note:"Expresses effort to establish a habit or ensure something.\nまいにちうんどうするようにしている = I make sure to exercise daily.",
     example:"A: けんこうのためにやさいをたべるようにしています。\nB: えらいですね。わたしもみならいたいです。",
     exampleSrc:"A: I make sure to eat vegetables for my health.\nB: Impressive. I want to follow your example.",
     funFact:"ようにする breaks down as よう (manner/way) + にする (to make it so). You are 'making it so that things go this way.' The related ようになる (to come to be able to) describes a natural change: にほんごがわかるようになった (I came to understand Japanese). にする = deliberate effort, になる = natural result."},

    {type:"teach", trg:"〜ようになる", src:"to come to ~ / to reach the point where ~", pos:"part", gender:null,
     note:"Describes a gradual change that reaches a new state.\nはなせるようになった = I came to be able to speak.",
     example:"A: にほんごがはなせるようになりました。\nB: すごい！いつからべんきょうしていますか？",
     exampleSrc:"A: I have come to be able to speak Japanese.\nB: Amazing! Since when have you been studying?",
     funFact:"ようになる captures organic, gradual change. Unlike the sudden decision of ことにする, ようになる implies a process over time. It is perfect for describing language learning progress, growing abilities, and lifestyle changes. This pattern is one of the most satisfying to use because it celebrates achievement through natural growth."},

    {type:"mc", q:"つかれていてもやすむわけにはいかない means:", opts:["Even if tired, I cannot rest due to obligation","I am too tired to rest","I want to rest because I am tired","Being tired is not a reason to rest"], ans:"Even if tired, I cannot rest due to obligation",
     hint:"わけにはいかない expresses inability caused by duty or social expectations, not physical limits."},

    {type:"teach", trg:"みならう", src:"to follow someone's example / to learn from", pos:"verb", gender:null,
     note:"Kanji: 見習う. み (see) + ならう (learn).\nせんぱいをみならう = to learn from a senior.",
     example:"A: せんぱいのまじめさをみならいたいです。\nB: じぶんのペースでだいじょうぶですよ。",
     exampleSrc:"A: I want to learn from my senior's diligence.\nB: Going at your own pace is fine.",
     funFact:"見習う literally means 'to learn by watching.' It combines two learning verbs: 見る (to see) and 習う (to learn/practice). Japanese apprenticeship culture valued まなびのみならい (learning through observation). みならいきかん (apprentice period) is still used for new employees in training."},

    {type:"teach", trg:"まじめ", src:"serious / diligent / earnest", pos:"adj", gender:null,
     note:"Na-adjective. まじめなひと = a serious/diligent person.\nまじめにはたらく = to work diligently.",
     example:"A: あのひとはとてもまじめですね。\nB: はい、いつもいちばんにしゅっしゃします。",
     exampleSrc:"A: That person is very diligent.\nB: Yes, they always arrive at work first.",
     funFact:"まじめ is one of the most valued traits in Japanese society. Being まじめ means being reliable, hardworking, and conscientious. However, ふまじめ (not serious) is strongly negative. The word can also mean 'too serious' in a teasing context: まじめすぎる (too uptight). Finding the balance is part of Japanese social skill."},

    {type:"fb", s:"にほんごがはなせる{1}になりました。\n(I have come to be able to speak Japanese.)", a:"よう", opts:["よう","こと","わけ","はず"], sSrc:"I have come to be able to speak Japanese.",
     hint:"The formal noun used in the pattern expressing gradual change to a new ability or state."},

    {type:"match", pairs:[{trg:"ところ",src:"timing marker (about to/middle/just)"},{trg:"わけ",src:"reason/meaning"},{trg:"はず",src:"should be/expected"},{trg:"つもり",src:"intend to"}]},

    {type:"mc", q:"かれはもうついているはずです means:", opts:["He should have arrived by now","He intended to arrive","He is about to arrive","He has no way of arriving"], ans:"He should have arrived by now",
     hint:"はず expresses a logical expectation based on known facts."},

    {type:"match", pairs:[{trg:"しめきり",src:"deadline"},{trg:"みならう",src:"learn from example"},{trg:"まじめ",src:"diligent/serious"},{trg:"わけにはいかない",src:"cannot do (moral reason)"}]},

    {type:"fb", s:"けんこうのためにやさいをたべる{1}にしています。\n(I make sure to eat vegetables for my health.)", a:"よう", opts:["よう","こと","はず","わけ"], sSrc:"I make sure to eat vegetables for my health.",
     hint:"The pattern for describing deliberate effort to maintain a habit."},
  ]
};
export default BATCH2_L_3;
