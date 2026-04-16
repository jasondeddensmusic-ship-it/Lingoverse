// Batch 7 – Unit 22 (B1.2 Giving & Receiving): Relationship & Social Bond Words
const BATCH7_L1 = {
  id:"jav2_u22l_b7_1", title:"にんげんかんけい", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"にんげんかんけい",
     desc:"Learn vocabulary for human relationships and social bonds. These words describe the web of connections that define Japanese social life, pairing naturally with giving/receiving grammar.",
     goals:["Describe different types of relationships","Use trust and loyalty vocabulary","Express social connection and obligation"]},

    {type:"teach", trg:"しんらい", src:"trust", pos:"noun", gender:null,
     note:"しんらいする = to trust. しんらいかんけい = trust relationship.\nしんらいできるひと = a trustworthy person.",
     example:"A: しんらいかんけいをきずくのはじかんがかかります。\nB: そうですね。でもいちどこわれるとなおすのがむずかしいです。",
     exampleSrc:"A: Building trust takes time.\nB: Yes. But once broken, it is hard to repair.",
     funFact:"しんらい (信頼) is built slowly and lost quickly in Japan. Business しんらい is earned through years of reliable behavior. The word combines 信 (believe) and 頼 (rely on). Japanese business culture values しんらい over contracts. A handshake deal backed by しんらい can be more binding than paper."},

    {type:"teach", trg:"きずな", src:"bond / emotional tie", pos:"noun", gender:null,
     note:"ふかいきずな = deep bond.\nきずなをふかめる = to deepen bonds.",
     example:"A: かぞくのきずなはだいじですね。\nB: はい、なにがあってもかぞくです。",
     exampleSrc:"A: Family bonds are important.\nB: Yes, no matter what, we are family.",
     funFact:"きずな (絆) became Japan's 'kanji of the year' after the 2011 earthquake and tsunami. Communities came together with extraordinary きずな. The word originally meant a rope tying animals, but evolved to mean precious human connections. It represents the best of Japanese communal spirit."},

    {type:"teach", trg:"おたがいさま", src:"mutual obligation / we are even", pos:"noun", gender:null,
     note:"おたがい = each other. さま = honorific.\nExpression of shared burden.",
     example:"A: てつだってくれてありがとう。\nB: おたがいさまですよ。",
     exampleSrc:"A: Thank you for helping.\nB: We help each other.",
     funFact:"おたがいさま (お互い様) is a beautiful Japanese concept meaning 'we are all in this together.' When someone apologizes for noise, a neighbor says おたがいさま. It acknowledges mutual imperfection and shared humanity. It defuses tension and builds community more powerfully than 'you're welcome.'"},

    {type:"teach", trg:"おんがえし", src:"returning a favor / reciprocation", pos:"noun", gender:null,
     note:"おん = favor/debt. がえし = return.\nおんがえしをする = to return a favor.",
     example:"A: おせわになったおんがえしをしたいです。\nB: きもちだけでじゅうぶんですよ。",
     exampleSrc:"A: I want to return the favor for your help.\nB: The thought alone is enough.",
     funFact:"おんがえし (恩返し) is central to Japanese ethics. Receiving help creates an おん (obligation/debt). Folk tales like 鶴の恩返し (crane's return of favor) teach this value. In business, おんがえし drives gift-giving cycles: お中元 (summer gifts) and お歳暮 (year-end gifts) between business partners."},

    {type:"teach", trg:"おもいやり", src:"consideration for others / empathy", pos:"noun", gender:null,
     note:"おもい = thought/feeling. やり = doing.\nおもいやりのあるひと = a considerate person.",
     example:"A: おもいやりのあることばをかけてくれてありがとう。\nB: いつもおもいやりをもっていたいです。",
     exampleSrc:"A: Thank you for your considerate words.\nB: I always want to have consideration for others.",
     funFact:"おもいやり (思いやり) is considered the highest virtue in Japanese interpersonal relationships. It means actively imagining others' feelings and acting accordingly. Schools teach おもいやり through group activities. The concept goes beyond empathy: it requires action based on imagined feelings."},

    {type:"teach", trg:"つきあい", src:"association / social relationship / dating", pos:"noun", gender:null,
     note:"つきあう = to associate with / to date.\nおつきあい = formal/polite version.",
     example:"A: ごきんじょとのおつきあいはだいじですよ。\nB: そうですね。あいさつからはじめます。",
     exampleSrc:"A: Relations with neighbors are important.\nB: Yes. I will start with greetings.",
     funFact:"つきあい (付き合い) covers all social relationships from neighbors to dating. 飲みの付き合い (drinking socializing) is expected in business. 近所付き合い (neighborhood relations) involve gifts and greetings. おつきあいしてください (please go out with me) is a dating confession phrase."},

    {type:"teach", trg:"なかなおり", src:"making up / reconciliation", pos:"noun", gender:null,
     note:"なか = relationship. なおり = fixing.\nなかなおりする = to make up after a fight.",
     example:"A: けんかしたけどなかなおりしました。\nB: よかったですね。",
     exampleSrc:"A: We had a fight but made up.\nB: That is good.",
     funFact:"なかなおり (仲直り) literally means 'fixing the relationship.' Japanese children learn なかなおり rituals: saying ごめんね (sorry) and offering a pinky promise (ゆびきり). The cultural emphasis on harmony (和, わ) means なかなおり is highly valued. Holding grudges is seen as immature."},

    {type:"teach", trg:"たよる", src:"to rely on / to depend on", pos:"verb", gender:null,
     note:"Group 1 verb. AにBをたよる = to rely on A for B.\nたよりになるひと = a reliable person.",
     example:"A: こまったときはわたしにたよってください。\nB: ありがとう。こころづよいです。",
     exampleSrc:"A: When you are in trouble, rely on me.\nB: Thank you. That is reassuring.",
     funFact:"たよる (頼る) carries a cultural tension in Japan. Self-reliance is valued, but so is mutual support. Saying 頼りにしています (I am counting on you) is a compliment meaning 'you are reliable.' However, being too dependent (甘え, あまえ) is negative. The balance between たよる and independence is a lifelong navigation."},

    {type:"teach", trg:"ささえる", src:"to support / to sustain", pos:"verb", gender:null,
     note:"Group 2 verb. かぞくにささえられている = I am supported by my family.\nささえ = support (noun).",
     example:"A: ともだちにささえられました。\nB: いいともだちですね。",
     exampleSrc:"A: I was supported by my friends.\nB: What good friends.",
     funFact:"ささえる (支える) describes the invisible support structures in Japanese society. 'Behind every successful person are people who ささえる them' is a common sentiment. Thank-you speeches always mention those who ささえた. The word appears in 支え合い (ささえあい, mutual support), a community ideal."},

    {type:"teach", trg:"うらぎる", src:"to betray", pos:"verb", gender:null,
     note:"Group 1 verb. うらぎり = betrayal (noun).\nしんらいをうらぎる = to betray trust.",
     example:"A: しんらいをうらぎることはゆるされません。\nB: いちどうらぎったらもどれませんね。",
     exampleSrc:"A: Betraying trust is unforgivable.\nB: Once betrayed, you cannot go back.",
     funFact:"うらぎり (裏切り) is one of the most serious social sins in Japan. The word literally means 'cutting the back' (attacking from behind). Historical tales of うらぎり (like Akechi Mitsuhide's betrayal of Oda Nobunaga) are taught as moral lessons. In business, breaking しんらい through うらぎり ends relationships permanently."},

    {type:"teach", trg:"ゆるす", src:"to forgive", pos:"verb", gender:null,
     note:"Group 1 verb. ゆるし = forgiveness (noun).\nゆるしてください = please forgive me.",
     example:"A: ゆるしてください。ほんとうにはんせいしています。\nB: わかりました。こんどはきをつけてね。",
     exampleSrc:"A: Please forgive me. I truly reflect on it.\nB: Okay. Be careful next time.",
     funFact:"ゆるす (許す) requires はんせい (反省, self-reflection) from the offender. Simply saying 'sorry' is not enough. The person must show they have reflected on their actions and will change. はんせいぶん (reflection essays) are written by school children and even by adults in formal apology situations."},

    {type:"teach", trg:"はげます", src:"to encourage / to cheer up", pos:"verb", gender:null,
     note:"Group 1 verb. はげまし = encouragement (noun).\nはげましのことば = words of encouragement.",
     example:"A: しけんにおちたけど、ともだちがはげましてくれました。\nB: いいともだちですね。",
     exampleSrc:"A: I failed the exam, but my friends encouraged me.\nB: What good friends.",
     funFact:"はげます (励ます) is one of the most valued interpersonal actions in Japan. がんばれ (do your best) is the classic はげまし. After disasters, はげましのことば (words of encouragement) pour in from across the country. The concept that words have power (言霊, ことだま) makes はげまし genuinely healing."},

    // Quiz steps
    {type:"mc", q:"きずな became kanji of the year after:",
     opts:["The 2011 earthquake and tsunami","A popular TV drama","A royal wedding","A sports victory"],
     ans:"The 2011 earthquake and tsunami",
     hint:"Communities showed extraordinary bonds during Japan's greatest modern disaster."},

    {type:"match", pairs:[
      {trg:"しんらい", src:"trust"},
      {trg:"きずな", src:"bond"},
      {trg:"おもいやり", src:"consideration"},
      {trg:"おんがえし", src:"returning a favor"},
      {trg:"おたがいさま", src:"mutual obligation"}
    ]},

    {type:"fb", s:"こまったときはわたしに{1}ください。",
     a:["たよって"],
     opts:["たよって","うらぎって","ゆるして","はげまして"],
     hint:"When in trouble, depend on me. This verb means 'to rely on.'",
     sSrc:"When you are in trouble, please {1} me."},

    {type:"mc", q:"おもいやり requires:",
     opts:["Imagining others' feelings and acting on it","Saying sorry frequently","Giving expensive gifts","Being quiet all the time"],
     ans:"Imagining others' feelings and acting on it",
     hint:"This virtue goes beyond empathy. It requires actively doing something based on imagined f...."},

    {type:"fb", s:"けんかしたけど{1}しました。",
     a:["なかなおり"],
     opts:["なかなおり","うらぎり","おんがえし","つきあい"],
     hint:"After the fight, the relationship was repaired. This word means 'reconciliation.'",
     sSrc:"We fought but {1}."},

    {type:"mc", q:"ゆるす in Japan requires the offender to show:",
     opts:["はんせい (genuine self-reflection)","Money","Gifts","Nothing special"],
     ans:"はんせい (genuine self-reflection)",
     hint:"Simply saying sorry is not enough. The person must demonstrate they have reflected and will change."},

    {type:"match", pairs:[
      {trg:"たよる", src:"to rely on"},
      {trg:"ささえる", src:"to support"},
      {trg:"うらぎる", src:"to betray"},
      {trg:"ゆるす", src:"to forgive"},
      {trg:"はげます", src:"to encourage"}
    ]},

    {type:"fb", s:"ともだちに{1}られてげんきがでました。",
     a:["はげま"],
     opts:["はげま","うらぎ","たよ","ゆる"],
     hint:"Friends cheered you up and you felt better. This verb means 'to encourage.'",
     sSrc:"I was {1} by friends and felt better."}
  ]
};
export default BATCH7_L1;
