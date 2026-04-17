// Unit 20 Batch 5 Lesson 1: けんじょうご (Humble Language)
const BATCH5_L_1 = {
  id:"jav2_u20l_b5_1", title:"けんじょうご", icon:"🙇", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんじょうご",
     desc:"Humble language (kenjougo) is the mirror of honorific language. Instead of elevating others, you lower yourself. 'I humbly go' instead of 'I go.' 'I humbly receive' instead of 'I receive.' This system shows respect by making your own actions seem smaller. It is mandatory in business Japanese.",
     goals:["Use humble verbs: まいる, いただく, もうす","Understand the お + stem + する pattern","Know when to use humble language (for your own actions)"]},

    {type:"teach", trg:"まいる", src:"to go / to come (humble)", pos:"verb", gender:null,
     note:"Humble replacement for いく and くる. Lowers the speaker.\nまいります = I will go/come (humble polite).",
     example:"A: あしたそちらにまいります。\nB: おまちしております。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I will come to your place tomorrow.\nB: We will be waiting (humble).\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"まいる is humble for both いく (go) and くる (come). While いらっしゃる elevates others' movement, まいる humbles your own. The expression まいりました (literally 'I have gone') colloquially means 'I give up' or 'I am defeated,' as if saying 'I have reached my limit.'"},

    {type:"teach", trg:"いただく", src:"to receive / to eat / to drink (humble)", pos:"verb", gender:null,
     note:"Humble replacement for もらう, たべる, and のむ.\nいただきます = I humbly receive (said before eating).",
     example:"A: おみやげをいただきました。ありがとうございます。\nB: おくちにあえばうれしいです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I received a souvenir. Thank you very much.\nB: I would be happy if it suits your taste.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"いただきます, said before every meal, is one of the most recognized Japanese phrases worldwide. It means 'I humbly receive' and expresses gratitude to everyone involved in the food: farmers, cooks, and even the ingredients themselves. This humble acknowledgment reflects the Japanese respect for food and labor."},

    {type:"teach", trg:"もうす", src:"to say / to be called (humble)", pos:"verb", gender:null,
     note:"Humble replacement for いう (to say). もうします = I say (humble).\nわたくしは田中ともうします = My name is Tanaka (humble).",
     example:"A: わたくしはたなかともうします。\nB: たなかさんですね。よろしくおねがいします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: My name is Tanaka (humble introduction).\nB: Tanaka-san, is it. Pleased to meet you.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"もうす is the humble counterpart of おっしゃる (honorific 'say'). The phrase と申します (to moushimasu) is the formal self-introduction formula. On the phone, もしもし comes from 申す申す (mousu mousu), originally meaning 'I am speaking, I am speaking.' This everyday greeting has humble origins."},

    {type:"teach", trg:"はいけんする", src:"to look / to see (humble)", pos:"verb", gender:null,
     note:"Humble replacement for みる (to see/look). Kanji: 拝見する.\nしりょうをはいけんする = to look at materials (humble).",
     example:"A: しりょうをはいけんしてもよろしいですか？\nB: どうぞごらんください。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: May I look at the materials? (humble)\nB: Please go ahead and look. (honorific)\nA: How was it?\nB: It was very good.",
     funFact:"拝見 uses the kanji 拝 (worship/bow) and 見 (see). You are literally 'bowing to see,' showing that even looking at something is done with humility. This word pair with ごらんになる (honorific 'see') shows the perfect symmetry of keigo: you 拝見する, they ごらんになる."},

    {type:"mc", q:"もうす is the humble equivalent of:", opts:["いう (to say)","みる (to see)","いく (to go)","たべる (to eat)"], ans:"いう (to say)",
     hint:"This humble verb replaces the everyday verb for speaking or saying."},

    {type:"teach", trg:"おめにかかる", src:"to meet (humble)", pos:"verb", gender:null,
     note:"Humble replacement for あう (to meet). Extremely polite.\nおめにかかれてこうえいです = it is an honor to meet you.",
     example:"A: はじめておめにかかります。\nB: こちらこそ、おめにかかれてうれしいです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am meeting you for the first time (humble).\nB: Likewise, I am glad to meet you.\nA: When was it?\nB: It was last summer.",
     funFact:"お目にかかる literally means 'to come before your eyes,' treating the other person's gaze as something you are granted access to. This extreme humility is reserved for the most formal introductions: meeting important clients, company executives, or at formal ceremonies. It is the humble counterpart of おあいになる."},

    {type:"teach", trg:"〜お + stem + する", src:"humble verb pattern", pos:"part", gender:null,
     note:"Productive humble pattern: お + verb masu-stem + する.\nおまちする = to wait (humble). おつたえする = to convey (humble).",
     example:"A: おにもつをおもちしましょうか？\nB: すみません、おねがいします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Shall I carry your luggage? (humble)\nB: Thank you, please do.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"The お + stem + する pattern is the humble mirror of お + stem + になる (honorific). Where になる elevates the other person, する humbles yourself. おもちする (I will humbly carry), おつたえする (I will humbly convey), おまちする (I will humbly wait). Master this pattern and you can make almost any verb humble."},

    {type:"teach", trg:"うかがう", src:"to visit / to ask / to hear (humble)", pos:"verb", gender:null,
     note:"Humble replacement for きく (ask), たずねる (visit), and きく (hear).\nKanji: 伺う. Multiple meanings.",
     example:"A: あしたじゅうじにうかがってもよろしいですか？\nB: はい、おまちしております。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: May I visit at ten o'clock tomorrow? (humble)\nB: Yes, we will be waiting.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"伺う is a triple-duty humble verb: to visit (someone important), to ask (humbly), and to hear (humbly). On the phone, businesses say うかがいますが (I would like to ask, humble) before questions. At restaurants taking reservations: なんめいさまでうかがいましょうか (may I ask how many guests?)."},

    {type:"tip", title:"Sonkeigo vs. Kenjougo: Mirror System",
     text:"Honorific (for others)    Humble (for yourself)\nいらっしゃる (be/go/come)  まいる (go/come)\nめしあがる (eat/drink)     いただく (eat/drink)\nおっしゃる (say)           もうす (say)\nごらんになる (see)         はいけんする (see)\nなさる (do)               いたす (do)\nくださる (give me)         さしあげる (give you)\n\nProductive patterns:\nお + stem + になる (honorific)\nお + stem + する (humble)\n\nRule: Honorific for OTHER people's actions.\nHumble for YOUR OWN actions.",
     deepDive:{title:"Common Keigo Mistakes",
      text:"Mixing up honorific and humble is a serious error:\n\nWRONG: わたしがいらっしゃいます (using honorific for yourself)\nRIGHT: わたしがまいります (using humble for yourself)\n\nWRONG: しゃちょうがもうしました (using humble for your boss)\nRIGHT: しゃちょうがおっしゃいました (using honorific for boss)\n\nThe rule is simple but easy to confuse under pressure:\nYour actions = humble (kenjougo)\nOther's actions = honorific (sonkeigo)\n\nWhen in doubt, remember: humble yourself, elevate others. Japanese keigo is fundamentally about showing respect through this vertical relationship."}},

    {type:"teach", trg:"おくちにあう", src:"to suit one's taste (polite set phrase)", pos:"verb", gender:null,
     note:"Polite way to hope food/drink is acceptable.\nおくち (your mouth, honorific) + に + あう (to suit).",
     example:"A: てづくりのおかしをどうぞ。おくちにあえばいいのですが。\nB: とてもおいしいです。ありがとうございます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please have some homemade sweets. I hope they suit your taste.\nB: They are very delicious. Thank you.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"おくちにあう is a gracious phrase used when offering food. Rather than saying 'This is delicious, eat it!' Japanese custom humbly hopes it merely 'suits your mouth.' This indirect, self-deprecating approach is typical of Japanese hospitality. Even professional chefs may say おくちにあえばさいわいです (I would be happy if it suits your taste)."},

    {type:"teach", trg:"いたす", src:"to do (humble)", pos:"verb", gender:null,
     note:"Humble replacement for する. Extremely polite.\nわたくしがいたします = I will do it (humble).",
     example:"A: よやくのかくにんをいたします。\nB: おねがいします。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I will confirm the reservation (humble).\nB: Please do.\nA: How long did it take?\nB: About two hours.",
     funFact:"いたす is heard constantly in Japanese service. Hotels say チェックインをいたします, airlines say ご案内をいたします. The phrase どういたしまして (you are welcome) contains いたす in its core: 'what have I done (that deserves thanks)?' This everyday expression reveals humble language embedded in basic courtesy."},

    {type:"fb", s:"わたくしはたなかと{1}します。\n(My name is Tanaka. [humble])", a:"もう", opts:["もう","おっしゃい","いい","いわ"], sSrc:"My name is Tanaka (humble self-introduction).",
     hint:"The humble verb for 'to say' in its masu-stem form."},

    {type:"mc", q:"おにもつをおもちしましょうか uses:", opts:["Humble language (I will carry for you)","Honorific language (you will carry)","Casual language","No keigo"], ans:"Humble language (I will carry for you)",
     hint:"The お + stem + する pattern humbles the speaker's own action of carrying."},

    {type:"match", pairs:[{trg:"まいる",src:"to go/come (humble)"},{trg:"いただく",src:"to receive/eat (humble)"},{trg:"はいけんする",src:"to look/see (humble)"},{trg:"うかがう",src:"to visit/ask (humble)"}]},

    {type:"fb", s:"しりょうを{1}してもよろしいですか？\n(May I look at the materials? [humble])", a:"はいけん", opts:["はいけん","ごらん","けんぶつ","みせて"], sSrc:"May I look at the materials? (humble)",
     hint:"The humble する-verb for 'to see/look at,' combining 拝 (worship) and 見 (see)."},

    {type:"mc", q:"おめにかかる is humble for:", opts:["あう (to meet)","みる (to see)","かう (to buy)","かかる (to cost)"], ans:"あう (to meet)",
     hint:"This phrase literally means 'to come before your eyes,' humbling oneself before the other person."}
  ]
};
export default BATCH5_L_1;
