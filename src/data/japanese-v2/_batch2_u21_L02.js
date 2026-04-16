// Unit 21 Batch 2 Lesson 2: じじもんだい (Current Event Topics)
const BATCH2_L_2 = {
  id:"jav2_u21l_b2_2", title:"じじもんだい", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"じじもんだい",
     desc:"Engage with Japan's most-discussed current event topics: technology, environment, work-life balance, and gender equality. These themes appear constantly in news, essays, and JLPT reading passages.",
     goals:["Discuss technology and AI topics in Japanese","Express opinions about work-life balance","Use formal vocabulary for environmental and social issues"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence / AI", pos:"noun", gender:null,
     note:"じんこう (artificial) + ちのう (intelligence). Kanji: 人工知能.\nAlso abbreviated as エーアイ (AI).",
     example:"A: じんこうちのうがしゃかいをかえています。\nB: いいへんかとわるいへんかがありますね。",
     exampleSrc:"A: Artificial intelligence is changing society.\nB: There are both good and bad changes.",
     funFact:"人工知能 literally means 'artificial intelligence.' The loanword エーアイ is equally common. Japan is both excited about and cautious toward AI. Manga and anime have explored AI themes for decades (Astro Boy, Ghost in the Shell), giving Japan a unique cultural perspective on the technology."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"はたらきかた (work style) + かいかく (reform). Kanji: 働き方改革.\nA major government initiative since 2018.",
     example:"A: はたらきかたかいかくでざんぎょうがへりましたか？\nB: すこしへりましたがまだまだです。",
     exampleSrc:"A: Has overtime decreased with work style reform?\nB: It decreased a little, but there is still a long way to go.",
     funFact:"働き方改革 is one of Japan's most significant policy initiatives. Introduced in 2018, it caps overtime at 45 hours/month, mandates paid leave, and promotes flexible work. The COVID pandemic accelerated remote work (テレワーク). However, cultural change is slower than legal change, and many companies still expect long hours."},

    {type:"teach", trg:"かいかく", src:"reform / renovation / revolution", pos:"noun", gender:null,
     note:"Kanji: 改革. かい (change) + かく (reform/leather).\nかいかくする = to reform.",
     example:"A: きょういくかいかくがひつようです。\nB: どんなかいかくがひつようですか？",
     exampleSrc:"A: Educational reform is needed.\nB: What kind of reform is needed?",
     funFact:"改革 is a powerful word in Japanese politics. The Meiji Restoration (明治維新) was Japan's greatest reform. Modern politicians campaign on 改革: education reform, administrative reform, structural reform. The word carries connotations of fundamental change, not just minor adjustment."},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"おん (warm) + だん (warm) + か (-ification). Kanji: 温暖化.\nちきゅうおんだんか = global warming.",
     example:"A: おんだんかのえいきょうがでています。\nB: きおんがまいとしあがっていますね。",
     exampleSrc:"A: The effects of global warming are appearing.\nB: Temperatures are rising every year.",
     funFact:"温暖化 is a top environmental concern in Japan. The country faces increasing typhoon intensity, extreme heat waves (猛暑, mousho), and flooding. Japan committed to carbon neutrality by 2050 (カーボンニュートラル). The 化 suffix marks it as a process: warming-ification, the ongoing act of becoming warmer."},

    {type:"mc", q:"はたらきかたかいかく refers to:", opts:["Working harder","Japan's work style reform initiative","Retirement policy","Immigration reform"], ans:"Japan's work style reform initiative",
     hint:"This government i... aims to reduce overtime, promote flexibility, and improve w...-life balance."},

    {type:"teach", trg:"だんじょびょうどう", src:"gender equality", pos:"noun", gender:null,
     note:"だんじょ (men and women) + びょうどう (equality). Kanji: 男女平等.\nA growing social discussion topic.",
     example:"A: だんじょびょうどうについてどうおもいますか？\nB: まだかだいがおおいとおもいます。",
     exampleSrc:"A: What do you think about gender equality?\nB: I think there are still many challenges.",
     funFact:"男女平等 is an area where Japan ranks low internationally: around 120th in the World Economic Forum's Gender Gap Index. Issues include the wage gap, low female management representation, and traditional gender roles. However, awareness is growing rapidly, and younger generations increasingly support equality."},

    {type:"teach", trg:"テレワーク", src:"remote work / telework", pos:"noun", gender:null,
     note:"From English 'telework.' Also ざいたくきんむ (working from home).\nCOVID accelerated adoption in Japan.",
     example:"A: テレワークをしていますか？\nB: はい、しゅうに3かいテレワークです。",
     exampleSrc:"A: Are you doing remote work?\nB: Yes, I telework three days a week.",
     funFact:"テレワーク exploded during COVID-19. Before the pandemic, less than 10% of Japanese workers had tried it. By 2020, that jumped to over 40% in Tokyo. The shift challenged Japan's traditional face-time culture (顔を出す, kao wo dasu). Many companies now offer hybrid arrangements, though full remote remains rare."},

    {type:"fb", s:"ちきゅう{1}のえいきょうがでています。\n(The effects of global warming are appearing.)", a:"おんだんか", opts:["おんだんか","こうれいか","しょうしか","かそか"], sSrc:"The effects of global warming are appearing.",
     hint:"The word for the planet getting warmer. Combines 'warm' + 'warm' + '-ification.'"},

    {type:"teach", trg:"へんか", src:"change / transformation", pos:"noun", gender:null,
     note:"Kanji: 変化. へん (change/strange) + か (transform/-ification).\nへんかする = to change.",
     example:"A: しゃかいのへんかがはやいです。\nB: テクノロジーのえいきょうがおおきいですね。",
     exampleSrc:"A: Social change is rapid.\nB: The influence of technology is significant.",
     funFact:"変化 is the neutral word for change. It does not carry the positive connotations of 改革 (reform) or the negative ones of 悪化 (deterioration). In Buddhist philosophy, 変化 (henka) reflects impermanence (無常, mujou). Modern Japanese uses it for any transformation: social change, climate change, attitude change."},

    {type:"teach", trg:"かだい", src:"challenge / issue / task to address", pos:"noun", gender:null,
     note:"Kanji: 課題. か (lesson/section) + だい (topic/subject).\nMore constructive than もんだい (problem).",
     example:"A: これからのかだいはなんですか？\nB: じんざいのいくせいがかだいです。",
     exampleSrc:"A: What are the challenges going forward?\nB: Developing human resources is the challenge.",
     funFact:"課題 is a nuanced alternative to もんだい (problem). While もんだい focuses on what is wrong, 課題 focuses on what needs to be addressed. Business Japanese prefers 課題 because it sounds proactive: instead of 'we have a problem,' it is 'we have a challenge to tackle.' JLPT essays frequently use this word."},

    {type:"teach", trg:"じんざい", src:"human resources / talent / personnel", pos:"noun", gender:null,
     note:"Kanji: 人材. じん (person) + ざい (material/talent).\nじんざいぶそく = labor shortage.",
     example:"A: ゆうしゅうなじんざいがひつようです。\nB: いくせいにじかんがかかりますね。",
     exampleSrc:"A: Excellent human resources are needed.\nB: It takes time to develop them.",
     funFact:"人材 literally means 'person-material,' viewing people as valuable resources. Some companies write it as 人財 (person-treasure) to emphasize employee value. Japan's chronic labor shortage (人材不足, jinzai busoku) drives many policy discussions, from immigration to automation to educational reform."},

    {type:"mc", q:"かだい differs from もんだい because:", opts:["They mean exactly the same thing","かだい is more negative","かだい focuses on what needs to be addressed (constructive); もんだい focuses on what is wrong","かだい is informal; もんだい is formal"], ans:"かだい focuses on what needs to be addressed (constructive); もんだい focuses on what is wrong",
     hint:"One word is about problems, the other about challenges to tackle. Business Japanese prefers the c... one."},

    {type:"tip", title:"Current Event Discussion Vocabulary",
     text:"Technology:\nじんこうちのう = AI\nテレワーク = remote work\nへんか = change/transformation\n\nWork:\nはたらきかたかいかく = work style reform\nじんざい = human resources\nだんじょびょうどう = gender equality\n\nEnvironment:\nおんだんか = global warming\nかんきょう = environment\n\nAnalysis:\nげんいん = cause\nかだい = challenge\nかいかく = reform\nえいきょう = influence/impact",
     deepDive:{title:"Discussing Issues in Japanese",
      text:"Japanese discussion style values balance and indirectness:\n\n1. State the issue: ...がもんだいになっています (is becoming a problem).\n2. Acknowledge complexity: さまざまないけんがあります (there are various opinions).\n3. Show both sides: いっぽうで (on the other hand).\n4. Offer cautious opinion: ...ではないかとおもいます (I think it might be that...).\n\nAvoiding absolute statements is key. Instead of 'this IS the solution,' Japanese speakers say 'this MIGHT be one approach' (ひとつのほうほうかもしれません). This hedging is not weakness but sophisticated rhetoric."}},

    {type:"match", pairs:[{trg:"じんこうちのう",src:"artificial intelligence"},{trg:"はたらきかたかいかく",src:"work style reform"},{trg:"おんだんか",src:"global warming"},{trg:"だんじょびょうどう",src:"gender equality"}]},

    {type:"fb", s:"ゆうしゅうな{1}がひつようです。\n(Excellent human resources are needed.)", a:"じんざい", opts:["じんざい","じんこう","いみん","せいふ"], sSrc:"Excellent human resources are needed.",
     hint:"The business word for talented people/personnel, combining 'person' + 'material.'"},

    {type:"match", pairs:[{trg:"テレワーク",src:"remote work"},{trg:"へんか",src:"change"},{trg:"かだい",src:"challenge"},{trg:"じんざい",src:"human resources"}]},

    {type:"mc", q:"テレワーク became widespread in Japan because of:", opts:["A new law in 2015","The 2020 Tokyo Olympics","The COVID-19 pandemic","A cultural tradition"], ans:"The COVID-19 pandemic",
     hint:"Before the p..., remote work was rare in Japan's face-time work culture."},
  ]
};
export default BATCH2_L_2;
