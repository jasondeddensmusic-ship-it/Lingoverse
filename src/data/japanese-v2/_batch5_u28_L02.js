// Unit 28 Batch 5 Lesson 2: はなしことばの特徴 (Spoken Language Features)
const BATCH5_L_2 = {
  id:"jav2_u28l_b5_2", title:"はなしことばのとくちょう", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"はなしことばのとくちょう",
     desc:"Spoken Japanese has its own grammar, fillers, and sentence-final particles. Learn casual contractions, emphatic particles, and discourse markers that textbooks often skip. Understanding these features is essential for natural conversation and for recognizing spoken style in JLPT listening sections.",
     goals:["Recognize spoken contractions and casual forms","Use discourse markers: まあ, やっぱり, なんか","Understand sentence-final particles: よね, さ, ぞ"]},

    {type:"teach", trg:"やっぱり", src:"as expected / after all / I knew it", pos:"adv", gender:null,
     note:"Casual form of やはり. Confirms expectations or returns to original opinion.\nやっぱりそうだった = I knew it was like that.",
     example:"A: やっぱりにほんりょうりがいちばんおいしいね。\nB: うん、やっぱりそうだよね。",
     exampleSrc:"A: Japanese food is the best after all.\nB: Yeah, I knew it.",
     funFact:"やっぱり (casual) / やはり (formal) is one of the most-used Japanese adverbs. It confirms what you expected or returns to your original position after considering alternatives. It appears in three situations: confirming expectations (やっぱりあめだ = it is raining, as I thought), reverting decisions (やっぱりこっちにする = actually, I will choose this one), and expressing inevitability (やっぱりべんきょうしないとだめだ = studying is necessary after all)."},

    {type:"teach", trg:"なんか", src:"somehow / like / kind of (filler/softener)", pos:"part", gender:null,
     note:"Casual speech filler. Softens statements or expresses vagueness.\nなんかへんだ = something seems off. なんかいいかんじ = it feels kind of nice.",
     example:"A: なんかきょうはつかれたなあ。\nB: なんかわかる。わたしもだるい。",
     exampleSrc:"A: I am somehow tired today.\nB: I kind of get it. I feel sluggish too.",
     funFact:"なんか (from 何か, something) has evolved into one of the most common fillers in casual Japanese, similar to English 'like.' Young people use it constantly. なんかさあ (you know, like) starts many casual sentences. Language purists criticize its overuse, but it serves important functions: softening assertions, expressing uncertainty, and buying thinking time."},

    {type:"teach", trg:"〜っぽい", src:"-ish / -like / tends to be", pos:"part", gender:null,
     note:"Casual suffix. こどもっぽい = childish. おとなっぽい = mature-looking.\nわすれっぽい = forgetful (tends to forget).",
     example:"A: このえいがはなんかあきっぽいね。\nB: もうすこしみてみようよ。",
     exampleSrc:"A: This movie is kind of boring-ish.\nB: Let us watch a bit more.",
     funFact:"っぽい is a productive casual suffix meaning '-ish' or 'tends to be.' It attaches to nouns (こどもっぽい = childish), adjective stems (あきっぽい = easily bored), and verb stems (わすれっぽい = forgetful). It always implies something is not the real thing but resembles it. おとこっぽい (manly-ish) and おんなっぽい (feminine-ish) describe personality tendencies."},

    {type:"teach", trg:"〜じゃん", src:"isn't it / right? (casual confirmation)", pos:"part", gender:null,
     note:"Casual contraction of じゃない (isn't it). Tokyo dialect, now widespread.\nいいじゃん = that is good, right?",
     example:"A: このくつ、かっこいいじゃん。\nB: ありがと。きのうかったんだ。",
     exampleSrc:"A: These shoes are cool, right?\nB: Thanks. I bought them yesterday.",
     funFact:"じゃん is a Tokyo/Kanto contraction of じゃない (isn't it?). It seeks casual confirmation. Originally dialectal, it spread nationally through TV and became standard casual Japanese. It is softer than だろう (right?) and more casual than ですよね. いいじゃん (that is fine, right?) and すごいじゃん (that is amazing, isn't it?) are everyday expressions."},

    {type:"mc", q:"やっぱり is used when:", opts:["Something confirms your expectation or you revert to original choice","You are confused","You learn something new and surprising","You disagree strongly"], ans:"Something confirms your expectation or you revert to original choice",
     hint:"This word means 'as I thought' or 'after all,' confirming what was already expected."},

    {type:"teach", trg:"まあ", src:"well / I guess / more or less", pos:"intj", gender:null,
     note:"Discourse marker. Softens statements, buys time, or accepts imperfection.\nまあまあ = so-so / not bad.",
     example:"A: しけんどうだった？\nB: まあ、できたとおもうけど、かんぺきじゃないかな。",
     exampleSrc:"A: How was the exam?\nB: Well, I think I did OK, but not perfectly.",
     funFact:"まあ is incredibly versatile. As a filler: まあ... (well, let me think). As acceptance: まあいいか (oh well, fine). As middling evaluation: まあまあだった (it was so-so). As calming: まあまあ、おちついて (now now, calm down). Japanese conversation is full of these softening words that prevent direct, blunt expression."},

    {type:"teach", trg:"〜さ", src:"(sentence-final particle, casual assertion)", pos:"part", gender:null,
     note:"Male-leaning sentence ender. Adds casual, matter-of-fact tone.\nだいじょうぶさ = it is fine (casual masculine).",
     example:"A: しんぱいしなくていいさ。なんとかなるよ。\nB: そうだよね。かんがえすぎだったかも。",
     exampleSrc:"A: No need to worry. It will work out somehow.\nB: You are right. Maybe I was overthinking.",
     funFact:"さ is a casual sentence-final particle that adds a light, matter-of-fact assertion. Historically male-leaning, it is now used by all genders in casual speech. だいじょうぶさ (it is fine) and そうさ (that is right) have a relaxed, confident tone. In anime and manga, characters with laid-back personalities often end sentences with さ."},

    {type:"teach", trg:"なんとかなる", src:"things will work out somehow", pos:"verb", gender:null,
     note:"なんとか (somehow) + なる (become). Optimistic set phrase.\nにほんじんのらっかんてきなひょうげん。",
     example:"A: どうしよう、じかんがたりない！\nB: なんとかなるよ。まずやってみよう。",
     exampleSrc:"A: What should I do, there is not enough time!\nB: It will work out somehow. Let us just try first.",
     funFact:"なんとかなる encapsulates a Japanese attitude of pragmatic optimism. Rather than detailed planning, it trusts that things will resolve themselves through effort and flexibility. The related なんとかする (to manage somehow, with effort) shifts from passive trust to active problem-solving. Both expressions are deeply embedded in Japanese resilience culture."},

    {type:"tip", title:"Spoken vs. Written: Key Differences",
     text:"Contractions:\nている → てる: たべている → たべてる\nてしまう → ちゃう: わすれてしまう → わすれちゃう\nなければ → なきゃ: いかなければ → いかなきゃ\n\nFillers:\nなんか = like / somehow\nまあ = well / I guess\nっていうか = I mean / or rather\n\nSentence-final particles:\nよね = right? (seeking agreement)\nさ = you know (casual assertion)\nぞ = (strong masculine emphasis)\nかな = I wonder\n\nThese features are almost never written but constantly spoken."},

    {type:"teach", trg:"っていうか", src:"or rather / I mean / to put it differently", pos:"conj", gender:null,
     note:"Casual speech connector. Corrects or reframes what was just said.\nFull form: というか. Very common in young people's speech.",
     example:"A: あのえいが、おもしろかった？\nB: っていうか、かんどうてきだったかな。おもしろいとはちょっとちがう。",
     exampleSrc:"A: Was that movie interesting?\nB: Or rather, it was moving. 'Interesting' is not quite right.",
     funFact:"っていうか (contracted from というか) is used to self-correct or reframe. It is the casual equivalent of いいかえれば. Young Japanese speakers use it constantly, sometimes as a filler with no real corrective meaning. Some linguists call it a 'discourse marker' that signals the speaker is reformulating their thought in real-time."},

    {type:"teach", trg:"ぶっちゃけ", src:"honestly / to be blunt / frankly speaking", pos:"adv", gender:null,
     note:"Very casual slang. ぶっちゃける = to spill/confess everything.\nぶっちゃけ、むずかしい = honestly, it is hard.",
     example:"A: ぶっちゃけ、このしごと、つまらないんだよね。\nB: まじで？てんしょくかんがえてるの？",
     exampleSrc:"A: Honestly, this job is boring.\nB: Seriously? Are you thinking of changing jobs?",
     funFact:"ぶっちゃけ comes from ぶちまける (to spill everything out). It signals that the speaker is about to be unusually direct, which is notable in a culture that normally values indirectness. It is casual slang, never used in formal settings. Its popularity shows that even in Japan, people sometimes need to break through social conventions and speak plainly."},

    {type:"fb", s:"このくつ、かっこいい{1}。\n(These shoes are cool, right?)", a:"じゃん", opts:["じゃん","です","だ","ます"], sSrc:"These shoes are cool, right? (casual)",
     hint:"The Tokyo casual contraction of じゃない used for seeking light confirmation."},

    {type:"mc", q:"まあまあ means:", opts:["So-so / not bad / mediocre","Excellent","Terrible","Exciting"], ans:"So-so / not bad / mediocre",
     hint:"The doubled form of the filler まあ expresses a middle-ground evaluation."},

    {type:"match", pairs:[{trg:"やっぱり",src:"as expected / after all"},{trg:"なんか",src:"somehow / like (filler)"},{trg:"っぽい",src:"-ish / tends to be"},{trg:"じゃん",src:"isn't it? (casual)"}]},

    {type:"fb", s:"しんぱいしなくていい{1}。なんとかなるよ。\n(No need to worry. It will work out.)", a:"さ", opts:["さ","よ","ね","か"], sSrc:"No need to worry. It will work out. (casual masculine)",
     hint:"The casual sentence-final particle that adds a relaxed, matter-of-fact assertion."},

    {type:"mc", q:"ぶっちゃけ signals:", opts:["The speaker is about to be unusually direct/honest","The speaker is joking","The speaker is uncertain","The speaker is being formal"], ans:"The speaker is about to be unusually direct/honest",
     hint:"This slang word warns that blunt honesty is coming, unusual in indirect Japanese culture."}
  ]
};
export default BATCH5_L_2;
