// Unit 21 Batch 2 Lesson 2: 時事問題(じじもんだい) (Current Event Topics)
const BATCH2_L_2 = {
  id:"jav2_u21l_b2_2", title:"時事問題(じじもんだい)", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"時事問題(じじもんだい)",
     desc:"Engage with Japan's most-discussed current event topics: technology, environment, work-life balance, and gender equality. These themes appear constantly in news, essays, and JLPT reading passages.",
     goals:["Discuss technology and AI topics in Japanese","Express opinions about work-life balance","Use formal vocabulary for environmental and social issues"]},

    {type:"teach", trg:"人工(じんこう)知能(ちのう)", src:"artificial intelligence / AI", pos:"noun", gender:null,
     note:"人工(じんこう) (artificial) + 知能(ちのう) (intelligence). Kanji: 人工知能.\nAlso abbreviated as エーアイ (AI).",
     example:"A: 人工(じんこう)知能(ちのう)が社会(しゃかい)を変(か)えています。\nB: いい変化(へんか)と悪(わる)い変化(へんか)がありますね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Artificial intelligence is changing society.\nB: There are both good and bad changes.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"人工知能 literally means 'artificial intelligence.' The loanword エーアイ is equally common. Japan is both excited about and cautious toward AI. Manga and anime have explored AI themes for decades (Astro Boy, Ghost in the Shell), giving Japan a unique cultural perspective on the technology."},

    {type:"teach", trg:"働(はたら)き方(かた)改革(かいかく)", src:"work style reform", pos:"noun", gender:null,
     note:"働(はたら)き方(かた) (work style) + 改革(かいかく) (reform). Kanji: 働き方改革.\nA major government initiative since 2018.",
     example:"A: 働(はたら)き方(かた)改革(かいかく)で残業(ざんぎょう)が減(へ)りましたか？\nB: 少(すこ)し減(へ)りましたがまだまだです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Has overtime decreased with work style reform?\nB: It decreased a little, but there is still a long way to go.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"働き方改革 is one of Japan's most significant policy initiatives. Introduced in 2018, it caps overtime at 45 hours/month, mandates paid leave, and promotes flexible work. The COVID pandemic accelerated remote work (テレワーク). However, cultural change is slower than legal change, and many companies still expect long hours."},

    {type:"teach", trg:"改革(かいかく)", src:"reform / renovation / revolution", pos:"noun", gender:null,
     note:"Kanji: 改革. かい (change) + かく (reform/leather).\n改革(かいかく)する = to reform.",
     example:"A: 教育(きょういく)改革(かいかく)が必要(ひつよう)です。\nB: どんな改革(かいかく)が必要(ひつよう)ですか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Educational reform is needed.\nB: What kind of reform is needed?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"改革 is a powerful word in Japanese politics. The Meiji Restoration (明治維新(めいじいしん)) was Japan's greatest reform. Modern politicians campaign on 改革(かいかく): education reform, administrative reform, structural reform. The word carries connotations of fundamental change, not just minor adjustment."},

    {type:"teach", trg:"温暖化(おんだんか)", src:"global warming", pos:"noun", gender:null,
     note:"おん (warm) + だん (warm) + か (-ification). Kanji: 温暖化.\n地球(ちきゅう)温暖化(おんだんか) = global warming.",
     example:"A: 温暖化(おんだんか)の影響(えいきょう)が出(で)ています。\nB: 気温(きおん)が毎年(まいとし)上(あ)がっていますね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: The effects of global warming are appearing.\nB: Temperatures are rising every year.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"温暖化 is a top environmental concern in Japan. The country faces increasing typhoon intensity, extreme heat waves (猛暑(もうしょ), mousho), and flooding. Japan committed to carbon neutrality by 2050 (カーボンニュートラル). The 化(か) suffix marks it as a process: warming-ification, the ongoing act of becoming warmer."},

    {type:"mc", q:"働(はたら)き方(かた)改革(かいかく) refers to:", opts:["Japan's work style reform initiative","Retirement policy","Immigration reform","Working harder"], ans:"Japan's work style reform initiative",
     hint:"This government i... aims to reduce overtime, promote flexibility, and improve w...-life balance."},

    {type:"teach", trg:"男女(だんじょ)平等(びょうどう)", src:"gender equality", pos:"noun", gender:null,
     note:"男女(だんじょ) (men and women) + 平等(びょうどう) (equality). Kanji: 男女平等.\nA growing social discussion topic.",
     example:"A: 男女(だんじょ)平等(びょうどう)についてどう思(おも)いますか？\nB: まだ課題(かだい)が多(おお)いと思(おも)います。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What do you think about gender equality?\nB: I think there are still many challenges.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"男女平等 is an area where Japan ranks low internationally: around 120th in the World Economic Forum's Gender Gap Index. Issues include the wage gap, low female management representation, and traditional gender roles. However, awareness is growing rapidly, and younger generations increasingly support equality."},

    {type:"teach", trg:"テレワーク", src:"remote work / telework", pos:"noun", gender:null,
     note:"From English 'telework.' Also 在宅勤務(ざいたくきんむ) (working from home).\nCOVID accelerated adoption in Japan.",
     example:"A: テレワークをしていますか？\nB: はい、週(しゅう)に3回(かい)テレワークです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Are you doing remote work?\nB: Yes, I telework three days a week.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"テレワーク exploded during COVID-19. Before the pandemic, less than 10% of Japanese workers had tried it. By 2020, that jumped to over 40% in Tokyo. The shift challenged Japan's traditional face-time culture (顔(かお)を出(だ)す, kao wo dasu). Many companies now offer hybrid arrangements, though full remote remains rare."},

    {type:"fb", s:"地球(ちきゅう){1}の影響(えいきょう)が出(で)ています。\n(The effects of global warming are appearing.)", a:"温暖化(おんだんか)", opts:["温暖化(おんだんか)","高齢化(こうれいか)","少子化(しょうしか)","過疎化(かそか)"], sSrc:"The effects of global warming are appearing.",
     hint:"The word for the planet getting warmer. Combines 'warm' + 'warm' + '-ification.'"},

    {type:"teach", trg:"変化(へんか)", src:"change / transformation", pos:"noun", gender:null,
     note:"Kanji: 変化. へん (change/strange) + か (transform/-ification).\n変化(へんか)する = to change.",
     example:"A: 社会(しゃかい)の変化(へんか)が速(はや)いです。\nB: テクノロジーの影響(えいきょう)が大(おお)きいですね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Social change is rapid.\nB: The influence of technology is significant.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"変化 is the neutral word for change. It does not carry the positive connotations of 改革(かいかく) (reform) or the negative ones of 悪化(あっか) (deterioration). In Buddhist philosophy, 変化(へんか) (henka) reflects impermanence (無常(むじょう), mujou). Modern Japanese uses it for any transformation: social change, climate change, attitude change."},

    {type:"teach", trg:"課題(かだい)", src:"challenge / issue / task to address", pos:"noun", gender:null,
     note:"Kanji: 課題. か (lesson/section) + だい (topic/subject).\nMore constructive than 問題(もんだい) (problem).",
     example:"A: これからの課題(かだい)は何(なん)ですか？\nB: 人材(じんざい)の育成(いくせい)が課題(かだい)です。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: What are the challenges going forward?\nB: Developing human resources is the challenge.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"課題 is a nuanced alternative to 問題(もんだい) (problem). While 問題(もんだい) focuses on what is wrong, 課題(かだい) focuses on what needs to be addressed. Business Japanese prefers 課題(かだい) because it sounds proactive: instead of 'we have a problem,' it is 'we have a challenge to tackle.' JLPT essays frequently use this word."},

    {type:"teach", trg:"人材(じんざい)", src:"human resources / talent / personnel", pos:"noun", gender:null,
     note:"Kanji: 人材. じん (person) + ざい (material/talent).\n人材(じんざい)不足(ぶそく) = labor shortage.",
     example:"A: 優秀(ゆうしゅう)な人材(じんざい)が必要(ひつよう)です。\nB: 育成(いくせい)に時間(じかん)がかかりますね。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Excellent human resources are needed.\nB: It takes time to develop them.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"人材 literally means 'person-material,' viewing people as valuable resources. Some companies write it as 人財(じんざい) (person-treasure) to emphasize employee value. Japan's chronic labor shortage (人材(じんざい)不足(ぶそく), jinzai busoku) drives many policy discussions, from immigration to automation to educational reform."},

    {type:"mc", q:"課題(かだい) differs from 問題(もんだい) because:", opts:["課題(かだい) is more negative","課題(かだい) focuses on what needs to be addressed (constructive); 問題(もんだい) focuses on what is wrong","課題(かだい) is informal; 問題(もんだい) is formal","They mean exactly the same thing"], ans:"課題(かだい) focuses on what needs to be addressed (constructive); 問題(もんだい) focuses on what is wrong",
     hint:"One word is about problems, the other about challenges to tackle. Business Japanese prefers the c... one."},

    {type:"tip", title:"Current Event Discussion Vocabulary",
     text:"Technology:\n人工(じんこう)知能(ちのう) = AI\nテレワーク = remote work\n変化(へんか) = change/transformation\n\nWork:\n働(はたら)き方(かた)改革(かいかく) = work style reform\n人材(じんざい) = human resources\n男女(だんじょ)平等(びょうどう) = gender equality\n\nEnvironment:\n温暖化(おんだんか) = global warming\n環境(かんきょう) = environment\n\nAnalysis:\n原因(げんいん) = cause\n課題(かだい) = challenge\n改革(かいかく) = reform\n影響(えいきょう) = influence/impact",
     deepDive:{title:"Discussing Issues in Japanese",
      text:"Japanese discussion style values balance and indirectness:\n\n1. State the issue: ...が問題(もんだい)になっています (is becoming a problem).\n2. Acknowledge complexity: さまざまな意見(いけん)があります (there are various opinions).\n3. Show both sides: 一方(いっぽう)で (on the other hand).\n4. Offer cautious opinion: ...ではないかと思(おも)います (I think it might be that...).\n\nAvoiding absolute statements is key. Instead of 'this IS the solution,' Japanese speakers say 'this MIGHT be one approach' (一(ひと)つの方法(ほうほう)かもしれません). This hedging is not weakness but sophisticated rhetoric."}},

    {type:"match", pairs:[{trg:"人工(じんこう)知能(ちのう)",src:"artificial intelligence"},{trg:"働(はたら)き方(かた)改革(かいかく)",src:"work style reform"},{trg:"温暖化(おんだんか)",src:"global warming"},{trg:"男女(だんじょ)平等(びょうどう)",src:"gender equality"}]},

    {type:"fb", s:"優秀(ゆうしゅう)な{1}が必要(ひつよう)です。\n(Excellent human resources are needed.)", a:"人材(じんざい)", opts:["人材(じんざい)","人口(じんこう)","移民(いみん)","政府(せいふ)"], sSrc:"Excellent human resources are needed.",
     hint:"The business word for talented people/personnel, combining 'person' + 'material.'"},

    {type:"match", pairs:[{trg:"テレワーク",src:"remote work"},{trg:"変化(へんか)",src:"change"},{trg:"課題(かだい)",src:"challenge"},{trg:"人材(じんざい)",src:"human resources"}]},

    {type:"mc", q:"テレワーク became widespread in Japan because of:", opts:["A new law in 2015","The 2020 Tokyo Olympics","The COVID-19 pandemic","A cultural tradition"], ans:"The COVID-19 pandemic",
     hint:"Before the p..., remote work was rare in Japan's face-time work culture."},
  ]
};
export default BATCH2_L_2;
