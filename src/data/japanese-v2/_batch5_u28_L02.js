// Unit 28 Batch 5 Lesson 2: 話(はな)し言葉(ことば)の特徴(とくちょう) (Spoken Language Features)
const BATCH5_L_2 = {
  id:"jav2_u28l_b5_2", title:"話(はな)し言葉(ことば)の特徴(とくちょう)", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"話(はな)し言葉(ことば)の特徴(とくちょう)",
     desc:"Spoken Japanese has its own grammar, fillers, and sentence-final particles. Learn casual contractions, emphatic particles, and discourse markers that textbooks often skip. Understanding these features is essential for natural conversation and for recognizing spoken style in JLPT listening sections.",
     goals:["Recognize spoken contractions and casual forms","Use discourse markers: まあ, やっぱり, なんか","Understand sentence-final particles: よね, さ, ぞ"]},

    {type:"teach", trg:"やっぱり", src:"as expected / after all / I knew it", pos:"adv", gender:null,
     note:"Casual form of やはり. Confirms expectations or returns to original opinion.\nやっぱりそうだった = I knew it was like that.",
     example:"A: やっぱり日本(にほん)料理(りょうり)が一番(いちばん)おいしいね。\nB: うん、やっぱりそうだよね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Japanese food is the best after all.\nB: Yeah, I knew it.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"やっぱり (casual) / やはり (formal) is one of the most-used Japanese adverbs. It confirms what you expected or returns to your original position after considering alternatives. It appears in three situations: confirming expectations (やっぱり雨(あめ)だ = it is raining, as I thought), reverting decisions (やっぱりこっちにする = actually, I will choose this one), and expressing inevitability (やっぱり勉強(べんきょう)しないとだめだ = studying is necessary after all)."},

    {type:"teach", trg:"なんか", src:"somehow / like / kind of (filler/softener)", pos:"part", gender:null,
     note:"Casual speech filler. Softens statements or expresses vagueness.\nなんか変(へん)だ = something seems off. なんかいい感(かん)じ = it feels kind of nice.",
     example:"A: なんか今日(きょう)は疲(つか)れたなあ。\nB: なんかわかる。私(わたし)もだるい。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I am somehow tired today.\nB: I kind of get it. I feel sluggish too.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"なんか (from 何(なに)か, something) has evolved into one of the most common fillers in casual Japanese, similar to English 'like.' Young people use it constantly. なんかさあ (you know, like) starts many casual sentences. Language purists criticize its overuse, but it serves important functions: softening assertions, expressing uncertainty, and buying thinking time."},

    {type:"teach", trg:"〜っぽい", src:"-ish / -like / tends to be", pos:"part", gender:null,
     note:"Casual suffix. 子供(こども)っぽい = childish. 大人(おとな)っぽい = mature-looking.\n忘(わす)れっぽい = forgetful (tends to forget).",
     example:"A: この映画(えいが)、なんか飽(あ)きっぽいね。\nB: もう少(すこ)し見(み)てみようよ。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: This movie is kind of boring-ish.\nB: Let us watch a bit more.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"っぽい is a productive casual suffix meaning '-ish' or 'tends to be.' It attaches to nouns (子供(こども)っぽい = childish), adjective stems (飽(あ)きっぽい = easily bored), and verb stems (忘(わす)れっぽい = forgetful). It always implies something is not the real thing but resembles it. 男(おとこ)っぽい (manly-ish) and 女(おんな)っぽい (feminine-ish) describe personality tendencies."},

    {type:"teach", trg:"〜じゃん", src:"isn't it / right? (casual confirmation)", pos:"part", gender:null,
     note:"Casual contraction of じゃない (isn't it). Tokyo dialect, now widespread.\nいいじゃん = that is good, right?",
     example:"A: この靴(くつ)、かっこいいじゃん。\nB: ありがと。昨日(きのう)買(か)ったんだ。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: These shoes are cool, right?\nB: Thanks. I bought them yesterday.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"じゃん is a Tokyo/Kanto contraction of じゃない (isn't it?). It seeks casual confirmation. Originally dialectal, it spread nationally through TV and became standard casual Japanese. It is softer than だろう (right?) and more casual than ですよね. いいじゃん (that is fine, right?) and すごいじゃん (that is amazing, isn't it?) are everyday expressions."},

    {type:"mc", q:"やっぱり is used when:", opts:["Something confirms your expectation or you revert to original choice","You are confused","You learn something new and surprising","You disagree strongly"], ans:"Something confirms your expectation or you revert to original choice",
     hint:"This word means 'as I thought' or 'after all,' confirming what was already expected."},

    {type:"teach", trg:"まあ", src:"well / I guess / more or less", pos:"intj", gender:null,
     note:"Discourse marker. Softens statements, buys time, or accepts imperfection.\nまあまあ = so-so / not bad.",
     example:"A: 試験(しけん)どうだった？\nB: まあ、できたと思(おも)うけど、完璧(かんぺき)じゃないかな。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: How was the exam?\nB: Well, I think I did OK, but not perfectly.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"まあ is incredibly versatile. As a filler: まあ... (well, let me think). As acceptance: まあいいか (oh well, fine). As middling evaluation: まあまあだった (it was so-so). As calming: まあまあ、落(お)ち着(つ)いて (now now, calm down). Japanese conversation is full of these softening words that prevent direct, blunt expression."},

    {type:"teach", trg:"〜さ", src:"(sentence-final particle, casual assertion)", pos:"part", gender:null,
     note:"Male-leaning sentence ender. Adds casual, matter-of-fact tone.\nだいじょうぶさ = it is fine (casual masculine).",
     example:"A: 心配(しんぱい)しなくていいさ。なんとかなるよ。\nB: そうだよね。考(かんが)えすぎだったかも。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: No need to worry. It will work out somehow.\nB: You are right. Maybe I was overthinking.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"さ is a casual sentence-final particle that adds a light, matter-of-fact assertion. Historically male-leaning, it is now used by all genders in casual speech. だいじょうぶさ (it is fine) and そうさ (that is right) have a relaxed, confident tone. In anime and manga, characters with laid-back personalities often end sentences with さ."},

    {type:"teach", trg:"なんとかなる", src:"things will work out somehow", pos:"verb", gender:null,
     note:"なんとか (somehow) + なる (become). Optimistic set phrase.\n日本人(にほんじん)の楽観的(らっかんてき)な表現(ひょうげん)。",
     example:"A: どうしよう、時間(じかん)が足(た)りない！\nB: なんとかなるよ。まずやってみよう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: What should I do, there is not enough time!\nB: It will work out somehow. Let us just try first.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"なんとかなる encapsulates a Japanese attitude of pragmatic optimism. Rather than detailed planning, it trusts that things will resolve themselves through effort and flexibility. The related なんとかする (to manage somehow, with effort) shifts from passive trust to active problem-solving. Both expressions are deeply embedded in Japanese resilience culture."},

    {type:"tip", title:"Spoken vs. Written: Key Differences",
     text:"Contractions:\nている → てる: 食(た)べている → 食(た)べてる\nてしまう → ちゃう: 忘(わす)れてしまう → 忘(わす)れちゃう\nなければ → なきゃ: 行(い)かなければ → 行(い)かなきゃ\n\nFillers:\nなんか = like / somehow\nまあ = well / I guess\nっていうか = I mean / or rather\n\nSentence-final particles:\nよね = right? (seeking agreement)\nさ = you know (casual assertion)\nぞ = (strong masculine emphasis)\nかな = I wonder\n\nThese features are almost never written but constantly spoken."},

    {type:"teach", trg:"っていうか", src:"or rather / I mean / to put it differently", pos:"conj", gender:null,
     note:"Casual speech connector. Corrects or reframes what was just said.\nFull form: というか. Very common in young people's speech.",
     example:"A: あの映画(えいが)、おもしろかった？\nB: っていうか、感動的(かんどうてき)だったかな。おもしろいとはちょっと違(ちが)う。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Was that movie interesting?\nB: Or rather, it was moving. 'Interesting' is not quite right.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"っていうか (contracted from というか) is used to self-correct or reframe. It is the casual equivalent of 言(い)い換(か)えれば. Young Japanese speakers use it constantly, sometimes as a filler with no real corrective meaning. Some linguists call it a 'discourse marker' that signals the speaker is reformulating their thought in real-time."},

    {type:"teach", trg:"ぶっちゃけ", src:"honestly / to be blunt / frankly speaking", pos:"adv", gender:null,
     note:"Very casual slang. ぶっちゃける = to spill/confess everything.\nぶっちゃけ、難(むずか)しい = honestly, it is hard.",
     example:"A: ぶっちゃけ、この仕事(しごと)、つまらないんだよね。\nB: まじで？転職(てんしょく)考(かんが)えてるの？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Honestly, this job is boring.\nB: Seriously? Are you thinking of changing jobs?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"ぶっちゃけ comes from ぶちまける (to spill everything out). It signals that the speaker is about to be unusually direct, which is notable in a culture that normally values indirectness. It is casual slang, never used in formal settings. Its popularity shows that even in Japan, people sometimes need to break through social conventions and speak plainly."},

    {type:"fb", s:"この靴(くつ)、かっこいい{1}。\n(These shoes are cool, right?)", a:"じゃん", opts:["じゃん","です","だ","ます"], sSrc:"These shoes are cool, right? (casual)",
     hint:"The Tokyo casual contraction of じゃない used for seeking light confirmation."},

    {type:"mc", q:"まあまあ means:", opts:["So-so / not bad / mediocre","Excellent","Terrible","Exciting"], ans:"So-so / not bad / mediocre",
     hint:"The doubled form of the filler まあ expresses a middle-ground evaluation."},

    {type:"match", pairs:[{trg:"やっぱり",src:"as expected / after all"},{trg:"なんか",src:"somehow / like (filler)"},{trg:"っぽい",src:"-ish / tends to be"},{trg:"じゃん",src:"isn't it? (casual)"}]},

    {type:"fb", s:"心配(しんぱい)しなくていい{1}。なんとかなるよ。\n(No need to worry. It will work out.)", a:"さ", opts:["さ","よ","ね","か"], sSrc:"No need to worry. It will work out. (casual masculine)",
     hint:"The casual sentence-final particle that adds a relaxed, matter-of-fact assertion."},

    {type:"mc", q:"ぶっちゃけ signals:", opts:["The speaker is about to be unusually direct/honest","The speaker is joking","The speaker is uncertain","The speaker is being formal"], ans:"The speaker is about to be unusually direct/honest",
     hint:"This slang word warns that blunt honesty is coming, unusual in indirect Japanese culture."}
  ,{type:"match",pairs:[{trg:"まあ",src:"well / I guess / more or less"},{trg:"なんとかなる",src:"things will work out somehow"},{trg:"っていうか",src:"or rather / I mean / to put it differently"},{trg:"ぶっちゃけ",src:"honestly / to be blunt / frankly speaking"}]}]
};
export default BATCH5_L_2;
