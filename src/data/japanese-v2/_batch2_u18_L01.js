// Unit 18 Batch 2 Lesson 1: きょかのしえき (Causative for Permission)
const BATCH2_L_1 = {
  id:"jav2_u18l_b2_1", title:"きょかのしえき", icon:"✅", xp:15, board:true,
  steps:[
    {type:"intro", title:"きょかのしえき",
     desc:"Causative combined with てもいい, てもらう, and てくれる creates natural permission expressions. Learn how to ask for, grant, and describe permission in daily life, school, and workplace settings.",
     goals:["Use causative + てもいい for granting permission","Ask permission with させてもらえますか","Combine causative with favor verbs for natural requests"]},

    {type:"teach", trg:"させてもらう", src:"to receive permission to do / to be allowed to do", pos:"verb", gender:null,
     note:"Causative + てもらう = I receive the favor of being allowed.\nMore natural than させてもいい for asking.",
     example:"A: きょうははやくかえらせてもらいます。\nB: おつかれさまです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I will leave early today (with permission).\nB: Good work today.\nA: How long did it take?\nB: About two hours.",
     funFact:"させてもらう is the natural way to say 'I am allowed to do' in Japanese. It frames permission as a favor received from the authority figure. This is far more common than the textbook させてもいい. The humble version させていただく is the business gold standard."},

    {type:"teach", trg:"させてくれる", src:"someone lets me do (with gratitude)", pos:"verb", gender:null,
     note:"Causative + てくれる = someone kindly lets me do something.\nExpresses gratitude for being allowed.",
     example:"A: おやがりゅうがくさせてくれました。\nB: いいおやですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: My parents let me study abroad.\nB: What good parents.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"させてくれる emphasizes the giver's kindness in allowing you to do something. Parents letting a child study abroad (ryuugaku sasete kureta) is seen as a generous, supportive act. This form naturally expresses appreciation, making it warmer than the neutral させてもらった."},

    {type:"teach", trg:"やめさせる", src:"to make someone quit / to fire someone", pos:"verb", gender:null,
     note:"Causative of やめる (to quit). Group 2: やめ + させる.\nKanji: 辞めさせる. Can mean forcing someone out.",
     example:"A: しゃちょうがかれをやめさせました。\nB: どうしてですか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The president fired him.\nB: Why?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"辞めさせる has a harsh edge. While やめる (to quit) is voluntary, やめさせる (to make quit) implies being forced out. In Japanese employment culture, which traditionally valued lifetime employment, firing someone (yameasaseru) is a serious action often avoided through reassignment or pressure to resign voluntarily."},

    {type:"teach", trg:"つかわせる", src:"to let someone use / to make someone use", pos:"verb", gender:null,
     note:"Causative of つかう (to use). Group 1: つかう to つかわ + せる.\nKanji: 使わせる.",
     example:"A: こどもにパソコンをつかわせてもいいですか？\nB: じかんをきめてつかわせてください。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Is it okay to let the child use the computer?\nB: Please let them use it with a time limit.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"使わせる is common in parenting discussions about technology. Letting children use smartphones and computers (sumaho wo tsukawaseru) is a major debate topic in Japan. Schools increasingly use tablets, but screen time limits (スクリーンタイム制限) are widely recommended by pediatricians."},

    {type:"mc", q:"おやがりゅうがくさせてくれた means:", opts:["My parents made me study abroad against my will","My parents kindly let me study abroad","I let my parents study abroad","My parents studied abroad"], ans:"My parents kindly let me study abroad",
     hint:"させてくれる = someone lets you do something, and you feel g... for their kindness."},

    {type:"teach", trg:"あそばせる", src:"to let someone play / to make someone play", pos:"verb", gender:null,
     note:"Causative of あそぶ (to play). Group 1: あそぶ to あそば + せる.\nKanji: 遊ばせる.",
     example:"A: こうえんでこどもをあそばせています。\nB: いいてんきですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am letting the children play in the park.\nB: Nice weather, isn't it.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"遊ばせる is everyday parenting vocabulary. こどもをあそばせる (let children play) is what parents do at parks, playgrounds, and indoor play spaces (キッズスペース). Japanese parks are exceptionally well-maintained, and letting children play freely there is a daily routine for many parents."},

    {type:"teach", trg:"えらばせる", src:"to let someone choose / to make someone choose", pos:"verb", gender:null,
     note:"Causative of えらぶ (to choose). Group 1: えらぶ to えらば + せる.\nKanji: 選ばせる.",
     example:"A: こどもにふくをえらばせています。\nB: じぶんでえらぶのはいいですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I let my child choose their own clothes.\nB: It is good to choose for themselves.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"選ばせる reflects the parenting philosophy of giving children autonomy. Letting children choose (erabaseru) their food, clothes, or activities develops independence. Japanese parenting style (ikuji) balances control with gradually increasing freedom as children grow."},

    {type:"fb", s:"きょうははやくかえら{1}もらいます。\n(I will leave early today, with permission.)", a:"せて", opts:["せて","して","されて","させて"], sSrc:"I will leave early today.",
     hint:"The causative て-form connecting to もらう for receiving permission."},

    {type:"teach", trg:"りゅうがく", src:"study abroad", pos:"noun", gender:null,
     note:"Kanji: 留学. りゅう (stay/remain) + がく (study).\nりゅうがくする = to study abroad.",
     example:"A: にほんにりゅうがくしたいです。\nB: どのくらいいきたいですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I want to study abroad in Japan.\nB: How long do you want to go?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"留学 combines 留 (stay) and 学 (study). Japan actively promotes international student exchanges. Many Japanese students study abroad (kaigai ryuugaku) for language and career development. The reverse flow also thrives: over 300,000 international students study in Japan annually."},

    {type:"teach", trg:"きょか", src:"permission / authorization", pos:"noun", gender:null,
     note:"Kanji: 許可. きょかする = to permit/authorize.\nきょかをもらう = to receive permission.",
     example:"A: じょうしにきょかをもらいましたか？\nB: はい、もうもらいました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Did you get permission from your supervisor?\nB: Yes, I already got it.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"許可 combines 許 (allow/forgive) and 可 (possible). Japanese organizations require formal permission (kyoka) for many actions that might be informal elsewhere. Building permits (建築許可), event permits (イベント許可), and even using certain camera equipment require 許可."},

    {type:"teach", trg:"かよわせる", src:"to make someone commute / to send someone (to school)", pos:"verb", gender:null,
     note:"Causative of かよう (to commute). Group 1: かよう to かよわ + せる.\nKanji: 通わせる.",
     example:"A: むすめをピアノきょうしつにかよわせています。\nB: いつからですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I am sending my daughter to piano lessons.\nB: Since when?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"通わせる is how Japanese parents describe sending children to lessons and schools. After-school activities (習い事, narai-goto) are widespread: piano, swimming, English, cram school. Parents 'make children commute' (kayowaseru) to these activities, often investing significant time and money."},

    {type:"mc", q:"させてもらう vs させてくれる: what is the difference?", opts:["They mean the same thing","させてもらう focuses on the speaker receiving; させてくれる focuses on the giver's kindness","させてもらう is casual; させてくれる is formal","させてもらう is negative; させてくれる is positive"], ans:"させてもらう focuses on the speaker receiving; させてくれる focuses on the giver's kindness",
     hint:"もらう centers the receiver. くれる centers the g...'s generosity."},

    {type:"tip", title:"Causative Permission Patterns",
     text:"Asking permission (to your superior):\nさせてもらえますか？ = May I? (polite)\nさせていただけますか？ = May I? (humble/business)\n\nDescribing being allowed:\nさせてもらった = I was allowed to (my perspective)\nさせてくれた = they let me (their kindness)\n\nGranting permission (as authority):\nさせてあげる = I let them (my generosity)\nさせてもいい = it is okay to let them\n\nAll patterns build from: causative て-form + giving/receiving verb.",
     deepDive:{title:"Permission Culture in Japan",
      text:"Japanese permission culture is hierarchical:\n\n1. Family: parents allow (saseru) children to do things\n2. School: teachers allow (saseru) students\n3. Work: bosses allow (saseru) employees\n\nThe direction is always top-down. Requesting permission flows upward using humble forms:\nやすませていただけますか (may I take the day off? ultra-polite)\n\nGranting permission flows downward:\nいいですよ、やすんでください (sure, take the day off).\n\nThis hierarchy is reflected in the grammar: させてもらう (I receive permission from above) vs. させてあげる (I grant permission below)."}},

    {type:"match", pairs:[{trg:"させてもらう",src:"receive permission to do"},{trg:"させてくれる",src:"someone lets me (gratitude)"},{trg:"やめさせる",src:"make quit / fire"},{trg:"つかわせる",src:"let/make use"}]},

    {type:"fb", s:"むすめをピアノきょうしつに{1}います。\n(I am sending my daughter to piano lessons.)", a:"かよわせて", opts:["かよわせて","かよって","かよい","かよわれて"], sSrc:"I am sending my daughter to piano lessons.",
     hint:"The causative て-form of かよう (to commute). Group 1: あ-row + せる."},

    {type:"match", pairs:[{trg:"あそばせる",src:"let play"},{trg:"えらばせる",src:"let choose"},{trg:"りゅうがく",src:"study abroad"},{trg:"きょか",src:"permission"}]},

    {type:"mc", q:"やめさせる means:", opts:["to quit by oneself","to make someone quit / to fire","to ask to quit","to want to quit"], ans:"to make someone quit / to fire",
     hint:"The causative of やめる. The subject forces or causes s... else to q...."},
  ]
};
export default BATCH2_L_1;
