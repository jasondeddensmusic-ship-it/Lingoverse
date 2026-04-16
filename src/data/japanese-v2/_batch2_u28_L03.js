// Unit 28 Batch 2 Lesson 3: けいごとていねいご (Keigo & Polite Language)
const BATCH2_L_3 = {
  id:"jav2_u28l_b2_3", title:"けいごとていねいご", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいごとていねいご",
     desc:"Japanese has a sophisticated system of honorific language (keigo) with three main categories: respectful, humble, and polite. Understanding written keigo patterns and formal literary expressions is essential for reading business emails, official documents, and JLPT N2 formal passages.",
     goals:["Distinguish three types of keigo","Use formal written expressions","Navigate keigo in professional contexts"]},

    {type:"teach", trg:"そんけいご", src:"respectful language / honorific speech", pos:"noun", gender:null,
     note:"Kanji: 尊敬語. Raises the listener/subject.\nいらっしゃる, おっしゃる, ごらんになる.",
     example:"A: しゃちょうはいまかいぎにいらっしゃいます。\nB: おもどりになったらおでんわください。",
     exampleSrc:"A: The president is currently at a meeting.\nB: Please call when he returns.",
     funFact:"尊敬語 uses 尊敬 (respect) and 語 (language). It elevates the subject's actions. The key そんけいご verbs are: いらっしゃる (to be/go), おっしゃる (to say), なさる (to do), ごらんになる (to see), めしあがる (to eat/drink). These replace plain verbs when describing the actions of superiors, clients, or respected elders."},

    {type:"teach", trg:"けんじょうご", src:"humble language", pos:"noun", gender:null,
     note:"Kanji: 謙譲語. Lowers the speaker.\nまいる, もうす, いたす, はいけんする.",
     example:"A: わたくしがごあんないいたします。\nB: おねがいします。",
     exampleSrc:"A: I will guide you (humble).\nB: Please do.",
     funFact:"謙譲語 uses 謙譲 (modesty/humility) and 語 (language). It lowers your own actions to show respect to the listener. Key verbs: まいる (to go/come), もうす (to say), いたす (to do), はいけんする (to see), いただく (to receive/eat). The logic is simple: lower yourself, and the other person rises by comparison."},

    {type:"teach", trg:"ていねいご", src:"polite language", pos:"noun", gender:null,
     note:"Kanji: 丁寧語. The -です/-ます forms.\nThe most basic level of formality all learners know.",
     example:"A: これはわたしのほんです。\nB: きれいなほんですね。",
     exampleSrc:"A: This is my book.\nB: It is a beautiful book.",
     funFact:"丁寧語 uses 丁寧 (polite/careful) and 語 (language). It is the foundation of polite Japanese: adding です and ます. While そんけいご and けんじょうご change the verb itself, ていねいご simply adds polite endings. Most Japanese learners master ていねいご first, then gradually add そんけいご and けんじょうご for professional and formal situations."},

    {type:"mc", q:"けんじょうご lowers:", opts:["the speaker's own actions","the listener's actions","the subject's actions","no one's actions"], ans:"the speaker's own actions",
     hint:"This type of keigo expresses humility by making your own actions seem less important."},

    {type:"teach", trg:"おっしゃる", src:"to say (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いう. Used for the speech of superiors/clients.\nおっしゃるとおりです = as you say.",
     example:"A: せんせいがおっしゃったことをわすれないでください。\nB: はい、しっかりおぼえています。",
     exampleSrc:"A: Please do not forget what the teacher said.\nB: Yes, I remember it well.",
     funFact:"おっしゃる replaces いう (to say) when the speaker is someone you respect. The famous agreement phrase おっしゃるとおりです (exactly as you say) is one of the most-used keigo expressions in Japanese business. It shows agreement while simultaneously honoring the other person's authority and wisdom."},

    {type:"teach", trg:"もうす", src:"to say (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of いう. Used for the speaker's own speech.\nもうしわけございません = I am terribly sorry.",
     example:"A: わたくしはたなかともうします。\nB: たなかさまですね。おまちしておりました。",
     exampleSrc:"A: My name is Tanaka (humble).\nB: Mr./Ms. Tanaka, yes. I have been waiting for you.",
     funFact:"もうす is the humble version of いう, used for your own speech acts. The phrase もうしわけございません (I have no excuse, deeply sorry) is the most formal apology in Japanese. It contains もうす (say) + わけ (reason) + ございません (does not exist): literally 'I have nothing I can say in my defense.'"},

    {type:"teach", trg:"いらっしゃる", src:"to be / to go / to come (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いる, いく, and くる.\nいらっしゃいませ = welcome (shop greeting).",
     example:"A: ぶちょうはいまどちらにいらっしゃいますか？\nB: かいぎしつにいらっしゃいます。",
     exampleSrc:"A: Where is the department head right now?\nB: He is in the meeting room.",
     funFact:"いらっしゃる is remarkable because it replaces three different plain verbs: いる (to be), いく (to go), and くる (to come). Context determines which meaning is intended. The shop greeting いらっしゃいませ is derived from this verb, literally meaning 'please come/be here.' It is shouted enthusiastically in every Japanese retail establishment."},

    {type:"fb", s:"しゃちょうは{1}とおりです。\n(Exactly as the president says.)", a:"おっしゃる", opts:["おっしゃる","もうす","いう","はなす"], sSrc:"Exactly as the president says.",
     hint:"The respectful keigo verb for 'to say,' used when the speaker is someone you honor."},

    {type:"teach", trg:"はいけんする", src:"to see / to look at (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of みる. Used when the speaker is looking/reading.\nしりょうをはいけんする = to look at materials.",
     example:"A: しりょうをはいけんしてもよろしいですか？\nB: どうぞ、ごらんください。",
     exampleSrc:"A: May I look at the materials?\nB: Please, go ahead and look.",
     funFact:"拝見する uses 拝 (worship/pray) and 見 (see). Literally 'to see with worship.' The humble act of looking at something as if praying shows extreme deference. This pair illustrates keigo symmetry: はいけんする (humble, for yourself) vs. ごらんになる (respectful, for the other person), both meaning 'to see.'"},

    {type:"teach", trg:"うかがう", src:"to ask / to visit / to hear (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of きく, たずねる, and ほうもんする.\nごいけんをうかがいたい = I would like to hear your opinion.",
     example:"A: ひとつおうかがいしてもよろしいですか？\nB: はい、どうぞ。",
     exampleSrc:"A: May I ask you one thing?\nB: Yes, please go ahead.",
     funFact:"伺う is one of the most versatile humble verbs, replacing きく (ask/listen), たずねる (inquire), and ほうもんする (visit). あしたおうかがいします means both 'I will visit you tomorrow' and 'I will ask you tomorrow.' Like いらっしゃる on the respectful side, うかがう is a Swiss-army knife of humble keigo."},

    {type:"teach", trg:"〜ていただく", src:"to have someone do ~ for me (humble keigo)", pos:"part", gender:null,
     note:"Humble receiving of a favor. More polite than てもらう.\nきていただく = to have someone come (for my benefit).",
     example:"A: おいそがしいなかきていただきありがとうございます。\nB: こちらこそ、おまねきいただきありがとうございます。",
     exampleSrc:"A: Thank you for coming despite being busy.\nB: Thank you for inviting me.",
     funFact:"ていただく adds humble nuance to てもらう (to receive the favor of). It frames the other person's action as a gift to you. This pattern is ubiquitous in formal Japanese: よんでいただけますか (could you read it for me?), きていただけると助かります (it would help if you could come). Mastering ていただく is a keigo milestone."},

    {type:"mc", q:"はいけんする is the humble form of:", opts:["みる (to see)","きく (to hear)","いう (to say)","する (to do)"], ans:"みる (to see)",
     hint:"This humble verb literally means 'to see with worship,' lowering your act of looking."},

    {type:"fb", s:"ひとつお{1}してもよろしいですか？\n(May I ask you one thing?)", a:"うかがい", opts:["うかがい","きき","たずね","しつもん"], sSrc:"May I ask you one thing?",
     hint:"The humble keigo verb replacing 'to ask,' showing deference to the listener."},

    {type:"match", pairs:[{trg:"そんけいご",src:"respectful language"},{trg:"けんじょうご",src:"humble language"},{trg:"ていねいご",src:"polite language"},{trg:"おっしゃる",src:"to say (respectful)"}]},

    {type:"fb", s:"わたくしはたなかと{1}します。\n(My name is Tanaka. [humble])", a:"もう", opts:["もう","いい","おっしゃい","はなし"], sSrc:"My name is Tanaka (humble form).",
     hint:"The humble verb for 'to say,' used when introducing yourself formally."},

    {type:"match", pairs:[{trg:"もうす",src:"to say (humble)"},{trg:"いらっしゃる",src:"to be/go/come (respectful)"},{trg:"はいけんする",src:"to see (humble)"},{trg:"うかがう",src:"to ask/visit (humble)"}]},

    {type:"mc", q:"ていただく expresses:", opts:["Giving a favor to someone","Humbly receiving a favor from someone","Commanding someone to do something","Refusing a request politely"], ans:"Humbly receiving a favor from someone",
     hint:"This pattern frames the other person's action as a gift to you, showing gratitude and humility."},
  ]
};
export default BATCH2_L_3;
