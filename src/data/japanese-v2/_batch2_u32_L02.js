// Unit 32 Batch 2 Lesson 2: 精神医学(せいしんいがく) (Mental Health & Psychology)
const BATCH2_L_2 = {
  id:"jav2_u32l_b2_2", title:"精神医学(せいしんいがく)", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"精神医学(せいしんいがく)",
     desc:"Mental health awareness is growing rapidly in Japan. Learn vocabulary for psychological conditions, therapy, and emotional well-being. These terms appear in social discussions, workplace policies, and JLPT reading passages about health and society.",
     goals:["Use mental health vocabulary","Discuss psychological well-being","Understand therapy and counseling terms"]},

    {type:"teach", trg:"精神的(せいしんてき)健康(けんこう)", src:"mental health", pos:"noun", gender:null,
     note:"Kanji: 精神的健康. メンタルヘルス = mental health (loanword).\n精神的(せいしんてき) = mental/psychological.",
     example:"A: 精神的(せいしんてき)健康(けんこう)は身体的(しんたいてき)健康(けんこう)と同(おな)じくらい重要(じゅうよう)です。\nB: 日本(にほん)ではまだスティグマが残(のこ)っていますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Mental health is as important as physical health.\nB: In Japan, stigma still remains.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"精神的健康 is being increasingly replaced by the loanword メンタルヘルス in everyday usage. Japan faces significant mental health challenges: high suicide rates, rising うつ病(びょう) (depression) cases, and workplace ストレス. The government introduced ストレスチェック (stress checks) as mandatory annual workplace assessments in 2015."},

    {type:"teach", trg:"鬱病(うつびょう)", src:"depression (clinical)", pos:"noun", gender:null,
     note:"Kanji: 鬱病. 鬱状態(うつじょうたい) = depressive state.\nAlso written うつ病(びょう) mixing kanji and hiragana.",
     example:"A: 鬱病(うつびょう)は誰(だれ)でもかかる可能性(かのうせい)のある病気(びょうき)です。\nB: 早(はや)めに専門家(せんもんか)に相談(そうだん)することが大事(だいじ)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Depression is an illness anyone can develop.\nB: It is important to consult a specialist early.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"鬱 is one of the most complex kanji in Japanese, with 29 strokes. Because of its difficulty, it is often written in hiragana (うつ) or mixed form (うつ病(びょう)). Japan's 鬱病(うつびょう) awareness campaign shifted public perception from 'weakness of character' to 'treatable illness.' The phrase 心(こころ)の風邪(かぜ) (a cold of the heart) was used to destigmatize depression."},

    {type:"teach", trg:"カウンセリング", src:"counseling / therapy", pos:"noun", gender:null,
     note:"Loanword from English. カウンセラー = counselor.\n心理(しんり)カウンセリング = psychological counseling.",
     example:"A: カウンセリングを受(う)けることにためらいを感(かん)じる人(ひと)が多(おお)いです。\nB: もっと気軽(きがる)に相談(そうだん)できる環境(かんきょう)が必要(ひつよう)です。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Many people feel hesitation about receiving counseling.\nB: We need an environment where people can consult more easily.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"カウンセリング adoption in Japan has been slower than in Western countries due to cultural factors: the value of 我慢(がまん) (endurance), reluctance to share personal problems, and the perception that seeking help is weak. School カウンセラー have been deployed since 1995, and workplace Employee Assistance Programs (EAP) are growing."},

    {type:"mc", q:"心(こころ)の風邪(かぜ) was used in Japan to:", opts:["Destigmatize depression by comparing it to a common cold","Promote physical exercise","Name a new medication","Describe a physical illness"], ans:"Destigmatize depression by comparing it to a common cold",
     hint:"This metaphor frames d... as ordinary and treatable, reducing the stigma of mental illness."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"Loanword from English. ストレス解消(かいしょう) = stress relief.\nストレスチェック = stress check (mandatory workplace test).",
     example:"A: 仕事(しごと)のストレスがたまっています。\nB: 休息(きゅうそく)を取(と)ることも仕事(しごと)のうちです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Work stress is building up.\nB: Taking rest is also part of the job.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ストレス is ubiquitous in modern Japanese. The 2015 law mandating annual ストレスチェック for companies with 50+ employees was a landmark. Japanese-specific stress sources include 通勤電車(つうきんでんしゃ)の満員(まんいん) (packed commuter trains), 残業(ざんぎょう) (overtime), and 人間関係(にんげんかんけい) (interpersonal relationships at work)."},

    {type:"teach", trg:"自殺(じさつ)", src:"suicide", pos:"noun", gender:null,
     note:"Kanji: 自殺. 自殺(じさつ)予防(よぼう) = suicide prevention.\nA significant public health issue in Japan.",
     example:"A: 日本(にほん)では自殺(じさつ)予防(よぼう)対策(たいさく)が強化(きょうか)されています。\nB: 相談(そうだん)窓口(まどぐち)の充実(じゅうじつ)が必要(ひつよう)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Suicide prevention measures are being strengthened in Japan.\nB: Enrichment of consultation services is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"自殺 uses 自 (self) and 殺 (kill). Japan's 自殺(じさつ) rate was among the highest in developed nations, peaking in 2003 at over 34,000 deaths annually. Sustained prevention efforts reduced the number significantly, but it remains a serious concern. The COVID-19 pandemic reversed some gains, particularly among women and young people."},

    {type:"teach", trg:"依存症(いぞんしょう)", src:"addiction / dependency", pos:"noun", gender:null,
     note:"Kanji: 依存症. アルコール依存症(いぞんしょう) = alcohol addiction.\nゲーム依存症(いぞんしょう) = gaming addiction.",
     example:"A: スマホ依存症(いぞんしょう)が若(わか)い世代(せだい)で問題(もんだい)になっています。\nB: 一日(いちにち)の使用(しよう)時間(じかん)を制限(せいげん)することが大切(たいせつ)です。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Smartphone addiction is becoming a problem among young people.\nB: It is important to limit daily usage time.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"依存症 uses 依存(いぞん) (dependence) and 症(しょう) (condition/disease). Japan recognizes various forms of 依存症(いぞんしょう) including alcohol, gambling (パチンコ included), gaming, and internet. The WHO's recognition of ゲーム障害(しょうがい) (gaming disorder) in 2019 sparked significant discussion in Japan, where gaming culture is deeply embedded."},

    {type:"fb", s:"仕事(しごと)の{1}がたまっています。\n(Work stress is building up.)", a:"ストレス", opts:["ストレス","不安(ふあん)","鬱(うつ)","疲(つか)れ"], sSrc:"Work stress is building up.",
     hint:"The loanword for the tension and pressure caused by demanding situations."},

    {type:"teach", trg:"引(ひ)きこもり", src:"social withdrawal / recluse", pos:"noun", gender:null,
     note:"From 引(ひ)きこもる (to withdraw). A social phenomenon unique to Japan.\n引(ひ)きこもり状態(じょうたい) = state of social withdrawal.",
     example:"A: 日本(にほん)には約(やく)百万人(ひゃくまんにん)以上(いじょう)の引(ひ)きこもりがいると推定(すいてい)されています。\nB: 社会(しゃかい)復帰(ふっき)の支援(しえん)が重要(じゅうよう)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: It is estimated that there are over one million hikikomori in Japan.\nB: Support for social reintegration is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"引きこもり literally means 'pulling inward.' It describes people who withdraw from social life, often staying in their rooms for months or years. The phenomenon is recognized by the Japanese government as a social issue, affecting people from teens to their 60s. The 八十五十問題(はちじゅうごじゅうもんだい) (8050 problem) refers to 80-year-old parents caring for 50-year-old 引(ひ)きこもり children."},

    {type:"teach", trg:"福祉(ふくし)", src:"welfare / social welfare", pos:"noun", gender:null,
     note:"Kanji: 福祉. 社会(しゃかい)福祉(ふくし) = social welfare.\n高齢者(こうれいしゃ)福祉(ふくし) = elderly welfare.",
     example:"A: 社会(しゃかい)福祉(ふくし)制度(せいど)の充実(じゅうじつ)が求(もと)められています。\nB: 高齢化(こうれいか)社会(しゃかい)では特(とく)に重要(じゅうよう)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Enhancement of the social welfare system is being demanded.\nB: It is especially important in an aging society.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"福祉 uses 福 (fortune/blessing) and 祉 (happiness). Japan's 社会(しゃかい)福祉(ふくし) system covers healthcare, pensions, unemployment, and long-term care. The 介護(かいご)保険(ほけん) (long-term care insurance) system, introduced in 2000, was a world-first. As Japan's population ages, 福祉(ふくし) spending continues to grow, creating fiscal pressures."},

    {type:"mc", q:"引(ひ)きこもり refers to:", opts:["People who exercise excessively","People who withdraw from social life for extended periods","People who work too much","People who travel frequently"], ans:"People who withdraw from social life for extended periods",
     hint:"This Japanese phenomenon involves staying in one's room, avoiding s... contact for months or years."},

    {type:"fb", s:"日本(にほん)では{1}予防(よぼう)対策(たいさく)が強化(きょうか)されています。\n(Suicide prevention measures are being strengthened in Japan.)", a:"自殺(じさつ)", opts:["自殺(じさつ)","病気(びょうき)","ストレス","鬱(うつ)"], sSrc:"Suicide prevention measures are being strengthened in Japan.",
     hint:"The term for taking one's own life, a significant public health concern in Japan."},

    {type:"match", pairs:[{trg:"鬱病(うつびょう)",src:"depression"},{trg:"カウンセリング",src:"counseling"},{trg:"ストレス",src:"stress"},{trg:"依存症(いぞんしょう)",src:"addiction"}]},

    {type:"fb", s:"スマホ{1}が若(わか)い世代(せだい)で問題(もんだい)になっています。\n(Smartphone addiction is becoming a problem among young people.)", a:"依存症(いぞんしょう)", opts:["依存症(いぞんしょう)","ストレス","カウンセリング","鬱病(うつびょう)"], sSrc:"Smartphone addiction is becoming a problem among young people.",
     hint:"The medical term for pathological dependence on a substance or behavior."},

    {type:"match", pairs:[{trg:"引(ひ)きこもり",src:"social withdrawal"},{trg:"自殺(じさつ)",src:"suicide"},{trg:"福祉(ふくし)",src:"welfare"},{trg:"精神的(せいしんてき)健康(けんこう)",src:"mental health"}]},

    {type:"mc", q:"The 八十五十問題(はちじゅうごじゅうもんだい) describes:", opts:["A population growth target","Hospital capacity issues","80-year-old parents caring for 50-year-old hikikomori children","A math problem"], ans:"80-year-old parents caring for 50-year-old hikikomori children",
     hint:"The numbers 80 and 50 refer to the ages of parent and child in this social phenomenon."},
  ]
};
export default BATCH2_L_2;
