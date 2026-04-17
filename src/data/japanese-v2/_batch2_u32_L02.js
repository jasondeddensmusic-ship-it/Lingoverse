// Unit 32 Batch 2 Lesson 2: せいしんいがく (Mental Health & Psychology)
const BATCH2_L_2 = {
  id:"jav2_u32l_b2_2", title:"せいしんいがく", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"せいしんいがく",
     desc:"Mental health awareness is growing rapidly in Japan. Learn vocabulary for psychological conditions, therapy, and emotional well-being. These terms appear in social discussions, workplace policies, and JLPT reading passages about health and society.",
     goals:["Use mental health vocabulary","Discuss psychological well-being","Understand therapy and counseling terms"]},

    {type:"teach", trg:"せいしんてきけんこう", src:"mental health", pos:"noun", gender:null,
     note:"Kanji: 精神的健康. メンタルヘルス = mental health (loanword).\nせいしんてき = mental/psychological.",
     example:"A: せいしんてきけんこうはしんたいてきけんこうとおなじくらいじゅうようです。\nB: にほんではまだスティグマがのこっていますね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Mental health is as important as physical health.\nB: In Japan, stigma still remains.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"精神的健康 is being increasingly replaced by the loanword メンタルヘルス in everyday usage. Japan faces significant mental health challenges: high suicide rates, rising うつびょう (depression) cases, and workplace ストレス. The government introduced ストレスチェック (stress checks) as mandatory annual workplace assessments in 2015."},

    {type:"teach", trg:"うつびょう", src:"depression (clinical)", pos:"noun", gender:null,
     note:"Kanji: 鬱病. うつじょうたい = depressive state.\nAlso written うつ病 mixing kanji and hiragana.",
     example:"A: うつびょうはだれでもかかるかのうせいのあるびょうきです。\nB: はやめにせんもんかにそうだんすることがだいじですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Depression is an illness anyone can develop.\nB: It is important to consult a specialist early.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"鬱 is one of the most complex kanji in Japanese, with 29 strokes. Because of its difficulty, it is often written in hiragana (うつ) or mixed form (うつ病). Japan's うつびょう awareness campaign shifted public perception from 'weakness of character' to 'treatable illness.' The phrase こころのかぜ (a cold of the heart) was used to destigmatize depression."},

    {type:"teach", trg:"カウンセリング", src:"counseling / therapy", pos:"noun", gender:null,
     note:"Loanword from English. カウンセラー = counselor.\nしんりカウンセリング = psychological counseling.",
     example:"A: カウンセリングをうけることにためらいをかんじるひとがおおいです。\nB: もっときがるにそうだんできるかんきょうがひつようです。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Many people feel hesitation about receiving counseling.\nB: We need an environment where people can consult more easily.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"カウンセリング adoption in Japan has been slower than in Western countries due to cultural factors: the value of がまん (endurance), reluctance to share personal problems, and the perception that seeking help is weak. School カウンセラー have been deployed since 1995, and workplace Employee Assistance Programs (EAP) are growing."},

    {type:"mc", q:"こころのかぜ was used in Japan to:", opts:["Describe a physical illness","Destigmatize depression by comparing it to a common cold","Promote physical exercise","Name a new medication"], ans:"Destigmatize depression by comparing it to a common cold",
     hint:"This metaphor frames d... as ordinary and treatable, reducing the stigma of mental illness."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"Loanword from English. ストレスかいしょう = stress relief.\nストレスチェック = stress check (mandatory workplace test).",
     example:"A: しごとのストレスがたまっています。\nB: きゅうそくをとることもしごとのうちです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Work stress is building up.\nB: Taking rest is also part of the job.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ストレス is ubiquitous in modern Japanese. The 2015 law mandating annual ストレスチェック for companies with 50+ employees was a landmark. Japanese-specific stress sources include しゅっきんでんしゃのまんいん (packed commuter trains), ざんぎょう (overtime), and にんげんかんけい (interpersonal relationships at work)."},

    {type:"teach", trg:"じさつ", src:"suicide", pos:"noun", gender:null,
     note:"Kanji: 自殺. じさつよぼう = suicide prevention.\nA significant public health issue in Japan.",
     example:"A: にほんではじさつよぼうたいさくがきょうかされています。\nB: そうだんまどぐちのじゅうじつがひつようですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Suicide prevention measures are being strengthened in Japan.\nB: Enrichment of consultation services is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"自殺 uses 自 (self) and 殺 (kill). Japan's じさつ rate was among the highest in developed nations, peaking in 2003 at over 34,000 deaths annually. Sustained prevention efforts reduced the number significantly, but it remains a serious concern. The COVID-19 pandemic reversed some gains, particularly among women and young people."},

    {type:"teach", trg:"いぞんしょう", src:"addiction / dependency", pos:"noun", gender:null,
     note:"Kanji: 依存症. アルコールいぞんしょう = alcohol addiction.\nゲームいぞんしょう = gaming addiction.",
     example:"A: スマホいぞんしょうがわかいせだいでもんだいになっています。\nB: いちにちのしようじかんをせいげんすることがたいせつです。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Smartphone addiction is becoming a problem among young people.\nB: It is important to limit daily usage time.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"依存症 uses 依存 (dependence) and 症 (condition/disease). Japan recognizes various forms of いぞんしょう including alcohol, gambling (パチンコ included), gaming, and internet. The WHO's recognition of ゲームしょうがい (gaming disorder) in 2019 sparked significant discussion in Japan, where gaming culture is deeply embedded."},

    {type:"fb", s:"しごとの{1}がたまっています。\n(Work stress is building up.)", a:"ストレス", opts:["ストレス","ふあん","うつ","つかれ"], sSrc:"Work stress is building up.",
     hint:"The loanword for the tension and pressure caused by demanding situations."},

    {type:"teach", trg:"ひきこもり", src:"social withdrawal / recluse", pos:"noun", gender:null,
     note:"From ひきこもる (to withdraw). A social phenomenon unique to Japan.\nひきこもりじょうたい = state of social withdrawal.",
     example:"A: にほんにはやくひゃくまんにんいじょうのひきこもりがいるとすいていされています。\nB: しゃかいふっきのしえんがじゅうようですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: It is estimated that there are over one million hikikomori in Japan.\nB: Support for social reintegration is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"ひきこもり literally means 'pulling inward.' It describes people who withdraw from social life, often staying in their rooms for months or years. The phenomenon is recognized by the Japanese government as a social issue, affecting people from teens to their 60s. The はちじゅうごじゅうもんだい (8050 problem) refers to 80-year-old parents caring for 50-year-old ひきこもり children."},

    {type:"teach", trg:"ふくし", src:"welfare / social welfare", pos:"noun", gender:null,
     note:"Kanji: 福祉. しゃかいふくし = social welfare.\nこうれいしゃふくし = elderly welfare.",
     example:"A: しゃかいふくしせいどのじゅうじつがもとめられています。\nB: こうれいかしゃかいではとくにじゅうようですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Enhancement of the social welfare system is being demanded.\nB: It is especially important in an aging society.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"福祉 uses 福 (fortune/blessing) and 祉 (happiness). Japan's しゃかいふくし system covers healthcare, pensions, unemployment, and long-term care. The かいごほけん (long-term care insurance) system, introduced in 2000, was a world-first. As Japan's population ages, ふくし spending continues to grow, creating fiscal pressures."},

    {type:"mc", q:"ひきこもり refers to:", opts:["People who exercise excessively","People who withdraw from social life for extended periods","People who work too much","People who travel frequently"], ans:"People who withdraw from social life for extended periods",
     hint:"This Japanese phenomenon involves staying in one's room, avoiding s... contact for months or years."},

    {type:"fb", s:"にほんでは{1}よぼうたいさくがきょうかされています。\n(Suicide prevention measures are being strengthened in Japan.)", a:"じさつ", opts:["じさつ","びょうき","ストレス","うつ"], sSrc:"Suicide prevention measures are being strengthened in Japan.",
     hint:"The term for taking one's own life, a significant public health concern in Japan."},

    {type:"match", pairs:[{trg:"うつびょう",src:"depression"},{trg:"カウンセリング",src:"counseling"},{trg:"ストレス",src:"stress"},{trg:"いぞんしょう",src:"addiction"}]},

    {type:"fb", s:"スマホ{1}がわかいせだいでもんだいになっています。\n(Smartphone addiction is becoming a problem among young people.)", a:"いぞんしょう", opts:["いぞんしょう","ストレス","カウンセリング","うつびょう"], sSrc:"Smartphone addiction is becoming a problem among young people.",
     hint:"The medical term for pathological dependence on a substance or behavior."},

    {type:"match", pairs:[{trg:"ひきこもり",src:"social withdrawal"},{trg:"じさつ",src:"suicide"},{trg:"ふくし",src:"welfare"},{trg:"せいしんてきけんこう",src:"mental health"}]},

    {type:"mc", q:"The はちじゅうごじゅうもんだい describes:", opts:["80-year-old parents caring for 50-year-old hikikomori children","A math problem","A population growth target","Hospital capacity issues"], ans:"80-year-old parents caring for 50-year-old hikikomori children",
     hint:"The numbers 80 and 50 refer to the ages of parent and child in this social phenomenon."},
  ]
};
export default BATCH2_L_2;
