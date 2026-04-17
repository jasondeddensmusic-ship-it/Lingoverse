// Batch 7 – Unit 36 (B2.2 Comprehensive Review): Proverbs & Wisdom Expressions
const BATCH7_L1 = {
  id:"jav2_u36l_b7_1", title:"にほんのちえ", icon:"🏯", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんのちえ",
     desc:"Learn Japanese proverbs, wisdom expressions, and culturally significant phrases. These expressions represent centuries of accumulated wisdom and appear in daily conversation, speeches, and writing.",
     goals:["Understand and use classic Japanese proverbs","Connect proverbs to modern situations","Express wisdom using traditional expressions"]},

    {type:"teach", trg:"のうあるたかはつめをかくす", src:"a talented hawk hides its claws", pos:"noun", gender:null,
     note:"Meaning: truly talented people do not show off.\nSimilar to: still waters run deep.",
     example:"A: あのひとはしずかだけどすごいのうりょくがあります。\nB: のうあるたかはつめをかくすですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: That person is quiet but has amazing ability.\nB: The talented hawk hides its claws.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"This proverb perfectly captures the Japanese value of けんきょ (modesty). Boasting is frowned upon. The truly skilled person lets their work speak. In martial arts, the highest masters appear ordinary. This contrasts with Western 'personal branding' culture where self-promotion is expected."},

    {type:"teach", trg:"さるもきからおちる", src:"even monkeys fall from trees", pos:"noun", gender:null,
     note:"Meaning: even experts make mistakes.\nSimilar to: nobody is perfect.",
     example:"A: あのゆうめいなシェフがしっぱいしましたよ。\nB: さるもきからおちるですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: That famous chef made a mistake.\nB: Even monkeys fall from trees.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"This proverb comforts people after mistakes. Since monkeys are the best tree climbers, their falling proves that perfection is impossible. Variants exist: 河童の川流れ (kappa swept away in a river, even water spirits can drown) and 弘法も筆の誤り (even Kobo Daishi makes writing mistakes)."},

    {type:"teach", trg:"くちはわざわいのもと", src:"the mouth is the source of disaster", pos:"noun", gender:null,
     note:"Meaning: careless words cause trouble.\nWarning against saying too much.",
     example:"A: つい余計なことを言ってしまいました。\nB: くちはわざわいのもとですよ。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: I accidentally said something unnecessary.\nB: The mouth is the source of disaster.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"This proverb reflects Japan's communication culture of restraint. Saying less is usually safer than saying more. Japanese business culture values 沈黙は金 (silence is gold). In meetings, the most powerful person often speaks least. This proverb warns against the risk of revealing too much or offending others."},

    {type:"teach", trg:"なくこはそだつ", src:"a crying child grows up (healthy)", pos:"noun", gender:null,
     note:"Meaning: energetic children develop well.\nReassurance for parents of active children.",
     example:"A: うちのこどもはよくなきます。\nB: なくこはそだつといいますよ。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: My child cries a lot.\nB: They say a crying child grows up healthy.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"This proverb reassures worried parents. Crying shows strong lungs and spirit. The related expression 泣く子と地頭には勝てない (you cannot win against a crying child or a landlord) means some forces are impossible to resist. Japanese child-rearing proverbs reflect gentle acceptance rather than control."},

    {type:"teach", trg:"にどあることはさんどある", src:"what happens twice will happen three times", pos:"noun", gender:null,
     note:"Meaning: if something happened twice, expect a third time.\nWarning about patterns.",
     example:"A: またおなじまちがいをしました。\nB: にどあることはさんどあるですよ。きをつけて。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: I made the same mistake again.\nB: What happens twice happens three times. Be careful.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"This proverb warns about repeating patterns. It is used practically in disaster prevention: two small earthquakes might precede a larger one. In business, recurring problems signal systemic issues. The Japanese variant is more specific than English 'third time's the charm,' focusing on the danger of patterns."},

    {type:"teach", trg:"はなよりだんご", src:"dumplings over flowers", pos:"noun", gender:null,
     note:"Meaning: practical things over aesthetic ones.\nSubstance over style.",
     example:"A: きれいなレストランよりおいしいレストランがいいです。\nB: はなよりだんごですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I prefer a tasty restaurant over a pretty one.\nB: Dumplings over flowers.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"はなよりだんご contrasts beauty (花, cherry blossoms) with practicality (団子, dumplings). During はなみ, some people focus more on eating and drinking than admiring blossoms. The proverb is humorous and self-deprecating. It represents the practical side of Japanese character that balances the aesthetic sensibility."},

    {type:"teach", trg:"じゅうにんといろ", src:"ten people, ten colors (everyone is different)", pos:"noun", gender:null,
     note:"よじじゅくご: 十人十色.\nMeaning: everyone has different tastes and opinions.",
     example:"A: みんないけんがちがいますね。\nB: じゅうにんといろです。それでいいのです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Everyone has different opinions.\nB: Ten people, ten colors. That is fine.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"じゅうにんといろ (十人十色) is one of Japan's most commonly used よじじゅくご. It validates diversity and difference. Teachers use it to reassure children that being different is okay. Despite Japan's reputation for conformity, this proverb shows that diversity has always been philosophically acknowledged."},

    {type:"teach", trg:"いちごいちえ", src:"one meeting, one chance (treasure every encounter)", pos:"noun", gender:null,
     note:"よじじゅくご: 一期一会. From tea ceremony philosophy.\nEvery meeting is unique and unrepeatable.",
     example:"A: きょうのであいをたいせつにしたいです。\nB: いちごいちえのこころですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: I want to treasure today's encounter.\nB: The spirit of ichigo-ichie.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"いちごいちえ (一期一会) originated in the tea ceremony (茶道). Each tea gathering is unique and can never be reproduced. This awareness makes every moment precious. It has become a life philosophy: treat every person, every meeting, every experience as unrepeatable. One of Japan's most beautiful concepts."},

    {type:"teach", trg:"わざわいをてんじてふくとなす", src:"turn disaster into good fortune", pos:"noun", gender:null,
     note:"Meaning: transform bad situations into opportunities.\nResilience philosophy.",
     example:"A: しつぎょうしたけどあたらしいしごとがみつかりました。\nB: わざわいをてんじてふくとなすですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I lost my job but found a new one.\nB: Turning disaster into fortune.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"This proverb embodies Japanese resilience. After earthquakes, tsunamis, and economic crises, Japanese communities rebuild with this spirit. The post-disaster phrase がんばろう日本 (Let us do our best, Japan) reflects this philosophy of transforming tragedy into renewal. It is not naive optimism but determined practical hope."},

    {type:"teach", trg:"ちりもつもればやまとなる", src:"even dust piles up to form a mountain", pos:"noun", gender:null,
     note:"Meaning: small efforts accumulate into something great.\nSimilar to: every little bit counts.",
     example:"A: まいにちすこしずつちょきんしています。\nB: ちりもつもればやまとなるですよ。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: I save a little bit every day.\nB: Dust piles up to form a mountain.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"This proverb drives Japanese かいぜん (continuous improvement) philosophy. Small daily improvements in manufacturing, studying, and saving produce enormous results over time. It is the philosophical foundation of Japan's economic miracle: not one big innovation, but millions of small improvements accumulated."},

    {type:"teach", trg:"にんげんばんじさいおうがうま", src:"fortune and misfortune are unpredictable", pos:"noun", gender:null,
     note:"From a Chinese parable about an old man and his horse.\nMeaning: you never know what will turn out good or bad.",
     example:"A: しごとをやめたけど、もっといいしごとがみつかりました。\nB: にんげんばんじさいおうがうまですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: I quit my job, but found an even better one.\nB: Human affairs are like Sai's horse.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"This proverb comes from a Chinese parable: an old man's horse runs away (bad luck), but returns with wild horses (good luck). His son breaks his leg riding (bad luck), but avoids conscription (good luck). The cycle never ends. This wisdom teaches patience and perspective. Do not celebrate too early or despair too quickly."},

    {type:"teach", trg:"いっすんさきはやみ", src:"an inch ahead is darkness (the future is unknowable)", pos:"noun", gender:null,
     note:"Meaning: no one can predict what comes next.\nHumbling perspective on the future.",
     example:"A: みらいのことはだれにもわかりません。\nB: いっすんさきはやみですからね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: No one knows the future.\nB: An inch ahead is darkness.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"いっすんさきはやみ combines 一寸 (one sun, about 3cm) with 先は闇 (ahead is darkness). Even the immediate future is unknowable. This proverb is often quoted after unexpected events. It teaches humility about planning and prediction. Japanese business culture's emphasis on risk management reflects this awareness."},

    {type:"teach", trg:"かわいいこにはたびをさせよ", src:"let your beloved child travel (face hardship)", pos:"noun", gender:null,
     note:"Meaning: let children experience difficulties for growth.\nTough love Japanese style.",
     example:"A: こどもをひとりでりょこうさせました。\nB: かわいいこにはたびをさせよですね。たくましくなります。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: I sent my child on a solo trip.\nB: Let beloved children travel. They will grow strong.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"This proverb reflects Japanese educational philosophy: overprotection weakens children. たび (travel) means hardship and independence. Japanese schools send students on class trips (修学旅行) from elementary school. Summer programs (夏合宿) build independence. The cultural belief that 苦労 (hardship) builds character is deeply embedded."},

    // Quiz steps
    {type:"mc", q:"のうあるたかはつめをかくす teaches:",
     opts:["Truly talented people do not show off","Eagles are dangerous","Always hide your strengths","Talent is meaningless"],
     ans:"Truly talented people do not show off",
     hint:"This proverb reflects the Japanese value of modesty. The best let their work speak."},

    {type:"match", pairs:[
      {trg:"さるもきからおちる", src:"even experts make mistakes"},
      {trg:"はなよりだんご", src:"substance over style"},
      {trg:"じゅうにんといろ", src:"everyone is different"},
      {trg:"いちごいちえ", src:"treasure every encounter"},
      {trg:"ちりもつもればやまとなる", src:"small efforts accumulate"}
    ]},

    {type:"fb", s:"つい余計なことをいってしまいました。{1}ですね。",
     a:["くちはわざわいのもと"],
     opts:["くちはわざわいのもと","さるもきからおちる","はなよりだんご","なくこはそだつ"],
     hint:"You said something unnecessary and caused trouble. The mouth is the source of disaster.",
     sSrc:"I said something unnecessary. {1}."},

    {type:"mc", q:"いちごいちえ originated from:",
     opts:["Tea ceremony philosophy","Samurai code","Cooking tradition","Temple rituals"],
     ans:"Tea ceremony philosophy",
     hint:"Each t... gathering is unique and unrepeatable, making every moment precious."},

    {type:"fb", s:"まいにちすこしずつ。{1}ですよ。",
     a:["ちりもつもればやまとなる"],
     opts:["ちりもつもればやまとなる","いっすんさきはやみ","さるもきからおちる","はなよりだんご"],
     hint:"Small daily efforts build up to something great, like dust forming a mountain.",
     sSrc:"A little every day. {1}."},

    {type:"mc", q:"にんげんばんじさいおうがうま teaches:",
     opts:["Good and bad fortune are unpredictable and cyclical","Horses are lucky","Old men are wise","Fortune always smiles"],
     ans:"Good and bad fortune are unpredictable and cyclical",
     hint:"The parable shows how b... luck becomes g... luck and vice versa in an endless cycle."},

    {type:"match", pairs:[
      {trg:"くちはわざわいのもと", src:"careless words cause trouble"},
      {trg:"わざわいをてんじてふくとなす", src:"turn disaster into fortune"},
      {trg:"いっすんさきはやみ", src:"the future is unknowable"},
      {trg:"にんげんばんじさいおうがうま", src:"fortune is unpredictable"},
      {trg:"かわいいこにはたびをさせよ", src:"let children face hardship"}
    ]},

    {type:"fb", s:"しつぎょうしたけどいいしごとがみつかった。{1}です。",
     a:["わざわいをてんじてふくとなす"],
     opts:["わざわいをてんじてふくとなす","いっすんさきはやみ","さるもきからおちる","くちはわざわいのもと"],
     hint:"Lost a job but found a better one. Turning disaster into good fortune.",
     sSrc:"Lost my job but found a good one. {1}."}
  ]
};
export default BATCH7_L1;
