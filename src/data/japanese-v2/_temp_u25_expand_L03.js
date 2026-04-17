// Unit 25 Expansion. Lesson 5: Advanced Keigo in Business
const LESSON_5 = {
  id:"jav2_u25l5", title:"じっせんけいご", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"Advanced Keigo in Business",
     desc:"Beyond basic keigo lies a layer of ultra-polite expressions used in client-facing situations, formal emails, and high-level meetings. Master these patterns to sound professionally fluent in any Japanese business setting.",
     goals:["Use advanced humble and respectful verb forms","Navigate email keigo patterns","Apply double-polite expressions correctly"]},

    {type:"teach", trg:"おっしゃる", src:"to say (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of いう. Used for the listener's or a superior's speech.\nおっしゃるとおりです = As you say / You are correct.",
     example:"A: ぶちょうがおっしゃったとおりにすすめましょう。\nB: はい、しじにしたがいます。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us proceed as the department head said.\nB: Yes, I will follow the instructions.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"おっしゃる is one of the most important respectful verbs. It replaces いう (say) when describing someone else's speech. The phrase おっしゃるとおりです (exactly as you say) is the go-to agreement phrase in business. It simultaneously validates the speaker and shows respect."},

    {type:"teach", trg:"もうしあげる", src:"to say / to tell (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 申し上げる. Ultra-humble form of いう.\nもうす is humble; もうしあげる is even more humble.",
     example:"A: ひとこともうしあげてもよろしいでしょうか。\nB: どうぞ、おっしゃってください。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: May I say a word?\nB: Please, go ahead.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"申し上げる is a two-tier humble verb. もうす already humbles いう, and adding あげる (give upward) pushes it further down. This creates a very deep bow in linguistic form. The phrase もうしわけございません (I have no excuse) uses もうす and is the standard deep apology in business."},

    {type:"teach", trg:"うけたまわる", src:"to hear / to receive (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 承る. Ultra-humble form of きく (hear) and うける (receive).\nUsed in service industries and formal business.",
     example:"A: ごちゅうもんをうけたまわります。\nB: コーヒーをおねがいします。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I will take your order.\nB: Coffee, please.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"承る packs enormous politeness into one word. It replaces both きく (hear) and うける (receive) in humble contexts. Hotel staff, restaurant servers, and customer service agents use it constantly. The kanji 承 also appears in 承認 (approval) and 承知 (acknowledged), all carrying the sense of humbly receiving."},

    {type:"mc", q:"おっしゃるとおりです means:", opts:["I will consider it","That is difficult","You are exactly right","Please say it again"], ans:"You are exactly right",
     hint:"おっしゃる replaces いう for the listener's speech, and とおり means 'in accordance with.'"},

    {type:"teach", trg:"ごらんになる", src:"to see / to look (respectful keigo)", pos:"verb", gender:null,
     note:"Respectful form of みる. Used for superiors and clients.\nしりょうをごらんください = Please look at the materials.",
     example:"A: こちらのしりょうをごらんになりましたか？\nB: はい、かくにんしました。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Have you looked at these materials?\nB: Yes, I have checked them.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"ご覧になる is built from ご (honorific prefix) + 覧 (view, from the kanji for imperial viewing) + になる (respectful pattern). It replaces みる when the subject is someone you respect. The imperative ごらんください (please look) is softer than みてください and is standard in business presentations."},

    {type:"teach", trg:"はいけんする", src:"to see / to look (humble keigo)", pos:"verb", gender:null,
     note:"Kanji: 拝見. はい (worship) + けん (see). Humble form of みる.\nしりょうをはいけんしました = I looked at the materials (humbly).",
     example:"A: めいしをはいけんしてもよろしいですか？\nB: どうぞ。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: May I look at your business card?\nB: Please do.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"拝見 literally means 'worshipfully see.' The 拝 kanji means worship or bow and appears in 拝む (to pray/worship). By saying はいけんする, you frame the act of looking as receiving a gracious gift. This level of humility is standard when handling someone's めいし (business card) for the first time."},

    {type:"tip", title:"Keigo Pairs: Humble vs Respectful",
     text:"Each action has two keigo directions:\n\nSay: もうす/もうしあげる (humble) vs おっしゃる (respectful)\nSee: はいけんする (humble) vs ごらんになる (respectful)\nDo: いたす (humble) vs なさる (respectful)\nGo: まいる (humble) vs いらっしゃる (respectful)\nEat: いただく (humble) vs めしあがる (respectful)\n\nRule: Humble forms for YOUR actions. Respectful forms for THEIR actions. Mixing them up is the number one keigo mistake.",
     deepDive:{title:"Email Keigo Patterns",
      text:"Japanese business emails follow strict keigo formulas:\n\nOpening: おせわになっております (Thank you for your continued support)\nRequest: おいそがしいところおそれいりますが (I am sorry to trouble you when you are busy, but...)\nClosing: よろしくおねがいいたします (Respectfully requesting your cooperation)\nAttachment: しりょうをてんぷいたします (I humbly attach the materials)\n\nThese phrases are near-mandatory. Omitting the opening おせわになっております in a business email is considered rude."}},

    {type:"fb", s:"ごちゅうもんを{1}。\n(I will take your order.)", a:"うけたまわります", opts:["うけたまわります","いただきます","もうします","おっしゃいます"], sSrc:"I will take your order.",
     hint:"The ultra-humble verb for receiving or hearing, used in service contexts."},

    {type:"teach", trg:"おせわになる", src:"to receive care/support (set phrase)", pos:"verb", gender:null,
     note:"おせわになっております = standard business email opening.\nMeans: Thank you for your continued support/business.",
     example:"A: いつもおせわになっております。\nB: こちらこそおせわになっております。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Thank you always for your support.\nB: Thank you for your support as well.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"おせわになっております is the number one business email opener in Japan. It translates roughly as 'I am in your care' but functions as 'Thank you for our ongoing business relationship.' Even if you have never met the person, this phrase is expected. Omitting it signals either unfamiliarity with business culture or intentional coldness."},

    {type:"teach", trg:"よろしくおねがいいたします", src:"I humbly request your cooperation", pos:"verb", gender:null,
     note:"The most polite form of よろしくおねがいします.\nStandard closing for business emails and formal requests.",
     example:"A: いじょう、よろしくおねがいいたします。\nB: しょうちいたしました。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: That is all. I humbly request your cooperation.\nB: Understood.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"This is the ultimate business sign-off. よろしく (well/favorably) + おねがい (request) + いたします (humble do). The phrase is untranslatable because it combines a request, an apology for imposing, and an expression of trust. Every Japanese business email ends with some version of this."},

    {type:"mc", q:"はいけんする is the humble keigo form of:", opts:["みる (to see)","きく (to hear)","いう (to say)","する (to do)"], ans:"みる (to see)",
     hint:"The 見 (s...) kanji is embedded in 拝見, combined with 拝 (worship)."},

    {type:"teach", trg:"しょうち", src:"acknowledgment / understanding / consent", pos:"noun", gender:null,
     note:"Kanji: 承知. しょうちしました = Understood/Acknowledged.\nMore formal than わかりました.",
     example:"A: あしたのじゅうじにおこしください。\nB: しょうちいたしました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Please come at 10 AM tomorrow.\nB: Understood.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"承知いたしました is the business upgrade of わかりました. The politeness ladder goes: わかった (casual) < わかりました (polite) < かしこまりました (very polite) < 承知いたしました (formal business). Each step up adds both formality and humility. Using the right level for the right situation is the mark of a true keigo master."},

    {type:"fb", s:"いつも{1}になっております。\n(Thank you always for your support.)", a:"おせわ", opts:["おせわ","ごらん","はいけん","おねがい"], sSrc:"Thank you always for your support.",
     hint:"The set phrase using care/assistance that opens nearly every business email."},

    {type:"match", pairs:[{trg:"おっしゃる",src:"to say (respectful)"},{trg:"もうしあげる",src:"to say (humble)"},{trg:"ごらんになる",src:"to see (respectful)"},{trg:"はいけんする",src:"to see (humble)"}]},

    {type:"mc", q:"しょうちいたしました is the business-level replacement for:", opts:["すみません (sorry)","わかりました (understood)","ありがとう (thank you)","おねがいします (please)"], ans:"わかりました (understood)",
     hint:"This phrase elevates 'I understand' to formal business acknowledgment."},

    {type:"match", pairs:[{trg:"うけたまわる",src:"to receive (humble)"},{trg:"おせわになる",src:"to receive support"},{trg:"しょうち",src:"acknowledgment"},{trg:"よろしくおねがいいたします",src:"requesting cooperation"}]},
  ]
};
export default LESSON_5;
