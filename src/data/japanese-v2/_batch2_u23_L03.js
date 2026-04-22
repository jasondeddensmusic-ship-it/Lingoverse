// Unit 23 Batch 2 Lesson 3: 形式名詞(けいしきめいし) (Formal Nouns in Nominalization)
const BATCH2_L_3 = {
  id:"jav2_u23l_b2_3", title:"形式名詞(けいしきめいし)", icon:"📐", xp:15, board:true,
  steps:[
    {type:"intro", title:"形式名詞(けいしきめいし)",
     desc:"Formal nouns (形式名詞) are abstract nouns used within grammatical patterns rather than for their literal meaning. Patterns like ところ, わけ, and はず expand your ability to express timing, reasoning, and expectations. These are essential for natural B1-level communication.",
     goals:["Use ところ for timing expressions","Use わけ for reasoning and explanation","Use はず for expectations and assumptions"]},

    {type:"teach", trg:"〜ところ", src:"(just) about to / in the middle of / just finished", pos:"part", gender:null,
     note:"Timing marker. Dictionary form + ところ = about to.\nている + ところ = in the middle of.\nた + ところ = just did.",
     example:"A: いまちょうど出(で)かけるところです。\nB: じゃあ、あとで連絡(れんらく)しますね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I am just about to go out now.\nB: Then I will contact you later.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ところ literally means 'place,' but as a formal noun it marks a point in time. The three forms create a mini-timeline: するところ (about to), しているところ (doing now), したところ (just did). This grammatical use of ところ is one of the clearest examples of how Japanese repurposes concrete nouns for abstract grammar."},

    {type:"teach", trg:"〜わけ", src:"the reason is / it means that / no wonder", pos:"part", gender:null,
     note:"Explains underlying reasons. わけがない = there is no way.\nわけではない = it does not mean that.",
     example:"A: だから、遅(おく)れたわけですね。\nB: はい、電車(でんしゃ)が止(と)まっていたんです。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: So that is the reason you were late.\nB: Yes, the train had stopped.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"わけ literally means 'reason' or 'meaning.' As a formal noun, it adds explanatory nuance. わけがない (there is no way) is one of the strongest denial patterns. わけにはいかない (cannot do, for social/moral reasons) adds obligation. These わけ patterns are tested heavily on JLPT N3 and N2."},

    {type:"teach", trg:"〜はず", src:"should be / is expected to / supposedly", pos:"part", gender:null,
     note:"Expresses expectations based on evidence or logic.\nはずがない = there is no way (emphatic denial).",
     example:"A: 彼(かれ)はもう着(つ)いているはずです。\nB: そうですね。三時(さんじ)に出発(しゅっぱつ)しましたから。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: He should have arrived by now.\nB: Right, because he departed at three.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"はず comes from an archery term meaning the notch on an arrow. Just as an arrow should hit its target, はず indicates what logically should happen. はずだ (should be) vs. はずがない (no way it could be) form a pair. Unlike べき (moral obligation), はず expresses logical expectation based on facts."},

    {type:"mc", q:"いま出(で)かけるところです means:", opts:["I am just about to go out","I just came back","I am in the middle of leaving","I decided to go out"], ans:"I am just about to go out",
     hint:"Dictionary form + ところ marks the moment right before an action begins."},

    {type:"teach", trg:"〜わけにはいかない", src:"cannot do ~ (for moral/social reasons)", pos:"part", gender:null,
     note:"Express inability due to social obligation, not ability.\nやめるわけにはいかない = I cannot quit (duty prevents it).",
     example:"A: 疲(つか)れていても休(やす)むわけにはいきません。\nB: 締(し)め切(き)りが近(ちか)いですからね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Even though I am tired, I cannot take a day off.\nB: Because the deadline is close.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"わけにはいかない literally means 'it cannot go to the reason of doing X.' Unlike できない (physically unable), this pattern implies you could do it but should not. Social expectations, duty, or morality prevent you. It captures a very Japanese concept: doing what you must, regardless of personal desire."},

    {type:"teach", trg:"締(し)め切(き)り", src:"deadline / closing date", pos:"noun", gender:null,
     note:"締(し)め切(き)りを守(まも)る = to meet a deadline.\n締(し)め切(き)りに間(ま)に合(あ)う = to make the deadline.",
     example:"A: 締(し)め切(き)りはいつですか？\nB: 来週(らいしゅう)の金曜日(きんようび)です。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"締め切り combines 締める (to tighten/close) and 切り (cut). A deadline 'cuts off and closes' the period for submission. Japanese work culture takes 締(し)め切(き)り extremely seriously. Missing a deadline damages trust and reputation. The phrase ぎりぎりセーフ (barely safe/just in time) describes the relief of meeting a tight 締(し)め切(き)り."},

    {type:"teach", trg:"〜つもり", src:"intend to / plan to", pos:"part", gender:null,
     note:"Dictionary form + つもり = intention.\nた + つもり = thought I did (but maybe did not).",
     example:"A: 明日(あした)早(はや)く起(お)きるつもりです。\nB: 目覚(めざ)ましをセットしましたか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I intend to wake up early tomorrow.\nB: Did you set an alarm?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"つもり originally meant '積(つ)もり' (accumulation). The metaphorical shift to 'intention' suggests accumulated thought leading to a plan. た + つもり is tricky: 言(い)ったつもり (thought I said it) implies the action may not have been successful. This subtle pattern catches many learners off guard."},

    {type:"fb", s:"だから、遅(おく)れた{1}ですね。\n(So that is the reason you were late.)", a:"わけ", opts:["わけ","はず","ところ","つもり"], sSrc:"So that is the reason you were late.",
     hint:"The formal noun that explains an underlying reason or meaning behind a situation."},

    {type:"teach", trg:"〜ようにする", src:"to make sure to ~ / to try to ~", pos:"part", gender:null,
     note:"Expresses effort to establish a habit or ensure something.\n毎日(まいにち)運動(うんどう)するようにしている = I make sure to exercise daily.",
     example:"A: 健康(けんこう)のために野菜(やさい)を食(た)べるようにしています。\nB: えらいですね。私(わたし)も見習(みなら)いたいです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I make sure to eat vegetables for my health.\nB: Impressive. I want to follow your example.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"ようにする breaks down as よう (manner/way) + にする (to make it so). You are 'making it so that things go this way.' The related ようになる (to come to be able to) describes a natural change: 日本語(にほんご)がわかるようになった (I came to understand Japanese). にする = deliberate effort, になる = natural result."},

    {type:"teach", trg:"〜ようになる", src:"to come to ~ / to reach the point where ~", pos:"part", gender:null,
     note:"Describes a gradual change that reaches a new state.\n話(はな)せるようになった = I came to be able to speak.",
     example:"A: 日本語(にほんご)が話(はな)せるようになりました。\nB: すごい！いつから勉強(べんきょう)していますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I have come to be able to speak Japanese.\nB: Amazing! Since when have you been studying?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"ようになる captures organic, gradual change. Unlike the sudden decision of ことにする, ようになる implies a process over time. It is perfect for describing language learning progress, growing abilities, and lifestyle changes. This pattern is one of the most satisfying to use because it celebrates achievement through natural growth."},

    {type:"mc", q:"疲(つか)れていても休(やす)むわけにはいかない means:", opts:["Being tired is not a reason to rest","Even if tired, I cannot rest due to obligation","I am too tired to rest","I want to rest because I am tired"], ans:"Even if tired, I cannot rest due to obligation",
     hint:"わけにはいかない expresses inability caused by duty or social expectations, not physical limits."},

    {type:"teach", trg:"見習(みなら)う", src:"to follow someone's example / to learn from", pos:"verb", gender:null,
     note:"見(み) (see) + 習(なら)う (learn).\n先輩(せんぱい)を見習(みなら)う = to learn from a senior.",
     example:"A: 先輩(せんぱい)の真面目(まじめ)さを見習(みなら)いたいです。\nB: 自分(じぶん)のペースで大丈夫(だいじょうぶ)ですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I want to learn from my senior's diligence.\nB: Going at your own pace is fine.\nA: How was it?\nB: It was very good.",
     funFact:"見習う literally means 'to learn by watching.' It combines two learning verbs: 見(み)る (to see) and 習(なら)う (to learn/practice). Japanese apprenticeship culture valued まなびの見習(みなら)い (learning through observation). 見習(みなら)い期間(きかん) (apprentice period) is still used for new employees in training."},

    {type:"teach", trg:"真面目(まじめ)", src:"serious / diligent / earnest", pos:"adj", gender:null,
     note:"Na-adjective. 真面目(まじめ)な人(ひと) = a serious/diligent person.\n真面目(まじめ)に働(はたら)く = to work diligently.",
     example:"A: あの人(ひと)はとても真面目(まじめ)ですね。\nB: はい、いつも一番(いちばん)に出社(しゅっしゃ)します。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: That person is very diligent.\nB: Yes, they always arrive at work first.\nA: When was it?\nB: It was last summer.",
     funFact:"真面目 is one of the most valued traits in Japanese society. Being 真面目(まじめ) means being reliable, hardworking, and conscientious. However, 不真面目(ふまじめ) (not serious) is strongly negative. The word can also mean 'too serious' in a teasing context: 真面目(まじめ)すぎる (too uptight). Finding the balance is part of Japanese social skill."},

    {type:"fb", s:"日本語(にほんご)が話(はな)せる{1}になりました。\n(I have come to be able to speak Japanese.)", a:"よう", opts:["よう","こと","わけ","はず"], sSrc:"I have come to be able to speak Japanese.",
     hint:"The formal noun used in the pattern expressing gradual change to a new ability or state."},

    {type:"match", pairs:[{trg:"ところ",src:"timing marker (about to/middle/just)"},{trg:"わけ",src:"reason/meaning"},{trg:"はず",src:"should be/expected"},{trg:"つもり",src:"intend to"}]},

    {type:"mc", q:"彼(かれ)はもう着(つ)いているはずです means:", opts:["He is about to arrive","He has no way of arriving","He should have arrived by now","He intended to arrive"], ans:"He should have arrived by now",
     hint:"はず expresses a logical expectation based on known facts."},

    {type:"match", pairs:[{trg:"締(し)め切(き)り",src:"deadline"},{trg:"見習(みなら)う",src:"learn from example"},{trg:"真面目(まじめ)",src:"diligent/serious"},{trg:"わけにはいかない",src:"cannot do (moral reason)"}]},

    {type:"fb", s:"健康(けんこう)のために野菜(やさい)を食(た)べる{1}にしています。\n(I make sure to eat vegetables for my health.)", a:"よう", opts:["よう","こと","はず","わけ"], sSrc:"I make sure to eat vegetables for my health.",
     hint:"The pattern for describing deliberate effort to maintain a habit."},
  {type:"fb", s:"レポートの{1}は金曜日(きんようび)の午後(ごご)五時(ごじ)です。", a:["締(し)め切(き)り"], opts:["締(し)め切(き)り","〜はず","〜ところ","〜わけ"], hint:"The final date and time by which work must be submitted.", sSrc:"The {1} for the report is Friday at 5 p.m."}
]
};
export default BATCH2_L_3;
