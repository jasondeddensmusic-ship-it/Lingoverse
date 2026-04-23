// Unit 28 Batch 2 Lesson 3: 敬語(けいご)と丁寧語(ていねいご) (Keigo & Polite Language)
const BATCH2_L_3 = {
  id:"jav2_u28l_b2_3", title:"敬語(けいご)と丁寧語(ていねいご)", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"敬語(けいご)と丁寧語(ていねいご)",
     desc:"Japanese has a sophisticated system of honorific language (keigo) with three main categories: respectful, humble, and polite. Understanding written keigo patterns and formal literary expressions is essential for reading business emails, official documents, and JLPT N2 formal passages.",
     goals:["Distinguish three types of keigo","Use formal written expressions","Navigate keigo in professional contexts"]},

    {type:"teach", trg:"尊敬語(そんけいご)", src:"respectful language / honorific speech", pos:"noun", gender:null,
     note:"Raises the listener/subject.\nいらっしゃる, おっしゃる, ごらんになる.",
     example:"A: 社長(しゃちょう)は今(いま)会議(かいぎ)にいらっしゃいます。\nB: お戻(もど)りになったらお電話(でんわ)ください。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The president is currently at a meeting.\nB: Please call when he returns.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"尊敬語 uses 尊敬 (respect) and 語 (language). It elevates the subject's actions. The key 尊敬語(そんけいご) verbs are: いらっしゃる (to be/go), おっしゃる (to say), なさる (to do), ごらんになる (to see), めしあがる (to eat/drink). These replace plain verbs when describing the actions of superiors, clients, or respected elders."},

    {type:"teach", trg:"謙譲語(けんじょうご)", src:"humble language", pos:"noun", gender:null,
     note:"Lowers the speaker.\nまいる, もうす, いたす, 拝見(はいけん)する.",
     example:"A: わたくしがご案内(あんない)いたします。\nB: お願(ねが)いします。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: I will guide you (humble).\nB: Please do.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"謙譲語 uses 謙譲 (modesty/humility) and 語 (language). It lowers your own actions to show respect to the listener. Key verbs: まいる (to go/come), もうす (to say), いたす (to do), 拝見(はいけん)する (to see), いただく (to receive/eat). The logic is simple: lower yourself, and the other person rises by comparison."},

    {type:"teach", trg:"丁寧語(ていねいご)", src:"polite language", pos:"noun", gender:null,
     note:"The -です/-ます forms.\nThe most basic level of formality all learners know.",
     example:"A: これはわたしの本(ほん)です。\nB: きれいな本(ほん)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: This is my book.\nB: It is a beautiful book.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"丁寧語 uses 丁寧 (polite/careful) and 語 (language). It is the foundation of polite Japanese: adding です and ます. While 尊敬語(そんけいご) and 謙譲語(けんじょうご) change the verb itself, 丁寧語(ていねいご) simply adds polite endings. Most Japanese learners master 丁寧語(ていねいご) first, then gradually add 尊敬語(そんけいご) and 謙譲語(けんじょうご) for professional and formal situations."},

    {type:"mc", q:"謙譲語(けんじょうご) lowers:", opts:["the speaker's own actions","the listener's actions","the subject's actions","no one's actions"], ans:"the speaker's own actions",
     hint:"This type of keigo expresses humility by making your own a... seem less important."},

    {type:"teach", trg:"おっしゃる", src:"to say (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いう. Used for the speech of superiors/clients.\nおっしゃるとおりです = as you say.",
     example:"A: 先生(せんせい)がおっしゃったことを忘(わす)れないでください。\nB: はい、しっかり覚(おぼ)えています。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Please do not forget what the teacher said.\nB: Yes, I remember it well.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"おっしゃる replaces いう (to say) when the speaker is someone you respect. The famous agreement phrase おっしゃるとおりです (exactly as you say) is one of the most-used keigo expressions in Japanese business. It shows agreement while simultaneously honoring the other person's authority and wisdom."},

    {type:"teach", trg:"もうす", src:"to say (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of いう. Used for the speaker's own speech.\nもうしわけございません = I am terribly sorry.",
     example:"A: わたくしは田中(たなか)ともうします。\nB: 田中(たなか)様(さま)ですね。お待(ま)ちしておりました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: My name is Tanaka (humble).\nB: Mr./Ms. Tanaka, yes. I have been waiting for you.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"もうす is the humble version of いう, used for your own speech acts. The phrase もうしわけございません (I have no excuse, deeply sorry) is the most formal apology in Japanese. It contains もうす (say) + わけ (reason) + ございません (does not exist): literally 'I have nothing I can say in my defense.'"},

    {type:"teach", trg:"いらっしゃる", src:"to be / to go / to come (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いる, いく, and くる.\nいらっしゃいませ = welcome (shop greeting).",
     example:"A: 部長(ぶちょう)は今(いま)どちらにいらっしゃいますか？\nB: 会議室(かいぎしつ)にいらっしゃいます。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Where is the department head right now?\nB: He is in the meeting room.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"いらっしゃる is remarkable because it replaces three different plain verbs: いる (to be), いく (to go), and くる (to come). Context determines which meaning is intended. The shop greeting いらっしゃいませ is derived from this verb, literally meaning 'please come/be here.' It is shouted enthusiastically in every Japanese retail establishment."},

    {type:"fb", s:"社長(しゃちょう)は{1}とおりです。\n(Exactly as the president says.)", a:"おっしゃる", opts:["おっしゃる","もうす","いう","はなす"], sSrc:"Exactly as the president says.",
     hint:"The respectful keigo verb for 'to say,' used when the speaker is someone you honor."},

    {type:"teach", trg:"拝見(はいけん)する", src:"to see / to look at (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of みる. Used when the speaker is looking/reading.\n資料(しりょう)を拝見(はいけん)する = to look at materials.",
     example:"A: 資料(しりょう)を拝見(はいけん)してもよろしいですか？\nB: どうぞ、ご覧(らん)ください。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: May I look at the materials?\nB: Please, go ahead and look.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"拝見する uses 拝 (worship/pray) and 見 (see). Literally 'to see with worship.' The humble act of looking at something as if praying shows extreme deference. This pair illustrates keigo symmetry: 拝見(はいけん)する (humble, for yourself) vs. ご覧(らん)になる (respectful, for the other person), both meaning 'to see.'"},

    {type:"teach", trg:"伺(うかが)う", src:"to ask / to visit / to hear (humble keigo)", pos:"verb", gender:null,
     note:"Humble form of きく, たずねる, and 訪問(ほうもん)する.\nご意見(いけん)を伺(うかが)いたい = I would like to hear your opinion.",
     example:"A: 一(ひと)つお伺(うかが)いしてもよろしいですか？\nB: はい、どうぞ。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: May I ask you one thing?\nB: Yes, please go ahead.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"伺う is one of the most versatile humble verbs, replacing きく (ask/listen), たずねる (inquire), and 訪問(ほうもん)する (visit). あした伺(うかが)います means both 'I will visit you tomorrow' and 'I will ask you tomorrow.' Like いらっしゃる on the respectful side, 伺(うかが)う is a Swiss-army knife of humble keigo."},

    {type:"teach", trg:"〜ていただく", src:"to have someone do ~ for me (humble keigo)", pos:"part", gender:null,
     note:"Humble receiving of a favor. More polite than てもらう.\n来(き)ていただく = to have someone come (for my benefit).",
     example:"A: お忙(いそが)しい中(なか)来(き)ていただきありがとうございます。\nB: こちらこそ、お招(まね)きいただきありがとうございます。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Thank you for coming despite being busy.\nB: Thank you for inviting me.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"ていただく adds humble nuance to てもらう (to receive the favor of). It frames the other person's action as a gift to you. This pattern is ubiquitous in formal Japanese: 読(よ)んでいただけますか (could you read it for me?), 来(き)ていただけると助(たす)かります (it would help if you could come). Mastering ていただく is a keigo milestone."},

    {type:"mc", q:"拝見(はいけん)する is the humble form of:", opts:["する (to do)","みる (to see)","きく (to hear)","いう (to say)"], ans:"みる (to see)",
     hint:"This humble verb literally means 'to s... with worship,' lowering your act of looking."},

    {type:"fb", s:"一(ひと)つお{1}してもよろしいですか？\n(May I ask you one thing?)", a:"伺(うかが)い", opts:["伺(うかが)い","聞(き)き","尋(たず)ね","質問(しつもん)"], sSrc:"May I ask you one thing?",
     hint:"The humble keigo verb replacing 'to ask,' showing deference to the listener."},

    {type:"match", pairs:[{trg:"尊敬語(そんけいご)",src:"respectful language"},{trg:"謙譲語(けんじょうご)",src:"humble language"},{trg:"丁寧語(ていねいご)",src:"polite language"},{trg:"おっしゃる",src:"to say (respectful)"},{trg:"〜ていただく",src:"to have someone do ~ for me (humble keigo)"}]},

    {type:"fb", s:"わたくしは田中(たなか)と{1}します。\n(My name is Tanaka. [humble])", a:"もう", opts:["もう","いい","おっしゃい","はなし"], sSrc:"My name is Tanaka (humble form).",
     hint:"The humble verb for 'to say,' used when introducing yourself formally."},

    {type:"match", pairs:[{trg:"もうす",src:"to say (humble)"},{trg:"いらっしゃる",src:"to be/go/come (respectful)"},{trg:"拝見(はいけん)する",src:"to see (humble)"},{trg:"伺(うかが)う",src:"to ask/visit (humble)"}]},

    {type:"mc", q:"ていただく expresses:", opts:["Refusing a request politely","Giving a favor to someone","Humbly receiving a favor from someone","Commanding someone to do something"], ans:"Humbly receiving a favor from someone",
     hint:"This pattern frames the other person's action as a gift to you, showing gratitude and humility."}]
};
export default BATCH2_L_3;
